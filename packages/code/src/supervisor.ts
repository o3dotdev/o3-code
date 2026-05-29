import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { enableWebAccess } from "./config.js";
import { waitForBridgeReady } from "./health.js";
import type { O3CodePaths } from "./paths.js";
import { messageFromError, waitFor } from "./process.js";
import {
  assertCodexAppElectronExecutable,
  assertDesktopRuntime,
  defaultElectronUserDataPath,
  ensureExternalNativePayloadLinks,
  installRuntimePayload,
  resolveCodexAppResourceModule,
  resolveCodexBuildNumber,
  resolveDesktopLaunchPaths,
  type DesktopLaunchPaths,
} from "./runtime.js";
import {
  createBaseState,
  readLauncherState,
  removeLauncherState,
  type LauncherState,
  writeLauncherState,
} from "./state.js";

const START_TIMEOUT_MS = 45_000;
const SUPERVISOR_START_TIMEOUT_MS = 180_000;
const DESKTOP_STABLE_AFTER_BRIDGE_MS = 3_000;
const STARTUP_PHASES = [
  ["preparing-runtime", "Preparing runtime"],
  ["resolving-codex-resources", "Resolving Codex resources"],
  ["linking-native-resources", "Linking native resources"],
  ["enabling-web-access", "Enabling web access"],
  ["preparing-electron", "Preparing Electron"],
  ["launching-desktop", "Launching desktop"],
  ["waiting-for-web-access", "Waiting for web access"],
] as const;

export async function runSupervisor(paths: O3CodePaths): Promise<void> {
  fs.mkdirSync(paths.logsDir, { recursive: true, mode: 0o700 });
  fs.mkdirSync(paths.runDir, { recursive: true, mode: 0o700 });
  touchLogFiles(paths);

  let state = createBaseState(paths);
  writeLauncherState(paths, state);

  let desktop: ReturnType<typeof spawn> | null = null;
  let shuttingDown = false;

  const shutdown = (exitCode: number) => {
    if (shuttingDown) {
      return;
    }
    shuttingDown = true;
    if (desktop && !desktop.killed) {
      desktop.kill("SIGTERM");
    }
    removeLauncherState(paths);
    process.exit(exitCode);
  };

  process.once("SIGTERM", () => shutdown(0));
  process.once("SIGINT", () => shutdown(130));

  try {
    state = writeStartupPhase(paths, state, "preparing-runtime", paths.activeRuntimeRoot);
    installRuntimePayload(paths);
    const launchPaths = resolveDesktopLaunchPaths(paths.activeRuntimeRoot);

    state = writeStartupPhase(paths, state, "resolving-codex-resources", null);
    const resourcesModule = await resolveCodexAppResourceModule(paths.activeRuntimeRoot);
    const codexResources = resourcesModule.resolveCodexAppResources();
    resourcesModule.assertCodexAppExecutableResources(codexResources);

    assertDesktopRuntime(launchPaths, codexResources);
    state = writeStartupPhase(paths, state, "linking-native-resources", codexResources.nativeNodeModulesPath);
    ensureExternalNativePayloadLinks({
      appPath: launchPaths.appPath,
      resources: codexResources,
    });
    state = writeStartupPhase(paths, state, "enabling-web-access", null);
    enableWebAccess(paths);

    const desktopOut = fs.openSync(paths.desktopLogPath, "a", 0o600);
    const desktopErr = fs.openSync(paths.desktopLogPath, "a", 0o600);
    state = writeStartupPhase(paths, state, "preparing-electron", null);
    const electronExecutable = assertCodexAppElectronExecutable(
      resourcesModule.resolveCodexAppElectronExecutable(),
    );

    state = writeStartupPhase(paths, state, "launching-desktop", electronExecutable);
    // Isolate the O3 Code profile via an early Chromium switch. The installed
    // Codex bundle launches in place, so native startup would otherwise pick
    // the real Codex profile before patch 0002 can redirect userData from JS.
    const desktopUserDataPath =
      process.env.CODEX_ELECTRON_USER_DATA_PATH || defaultElectronUserDataPath();
    desktop = spawn(
      electronExecutable,
      [`--user-data-dir=${desktopUserDataPath}`, launchPaths.appPath],
      {
        cwd: paths.activeRuntimeRoot,
        env: createDesktopEnv({
          codexAppPathEnv: resourcesModule.CODEX_APP_PATH_ENV,
          codexResources,
          launchPaths,
        }),
        stdio: ["ignore", desktopOut, desktopErr],
      },
    );

    state = {
      ...state,
      desktopPid: desktop.pid ?? null,
      activeRuntimeRoot: paths.activeRuntimeRoot,
    };
    writeLauncherState(paths, state);

    desktop.once("exit", (code, signal) => {
      if (shuttingDown) {
        return;
      }
      state = {
        ...state,
        status: "failed",
        error: `Desktop process exited before stop (${signal ?? code ?? "unknown"}).`,
      };
      writeLauncherState(paths, state);
      process.exit(code ?? 1);
    });

    state = writeStartupPhase(paths, state, "waiting-for-web-access", paths.bridgeLogPath);
    const url = await waitForBridgeReady({ paths, timeoutMs: START_TIMEOUT_MS });
    await ensureDesktopRemainsAlive(desktop, DESKTOP_STABLE_AFTER_BRIDGE_MS);
    state = {
      ...state,
      status: "running",
      url,
      startup: undefined,
    };
    writeLauncherState(paths, state);

    await new Promise<void>(() => {
      // The supervisor intentionally stays alive until a lifecycle command stops it.
    });
  } catch (error) {
    const message = await formatStartupError(error, paths);
    state = {
      ...state,
      status: "failed",
      error: message,
    };
    writeLauncherState(paths, state);
    if (desktop && !desktop.killed) {
      desktop.kill("SIGTERM");
    }
    process.exit(1);
  }
}

export async function waitForSupervisorStart(
  paths: O3CodePaths,
  {
    onState,
  }: {
    readonly onState?: (state: LauncherState) => void;
  } = {},
): Promise<LauncherState> {
  let lastState = readLauncherState(paths);
  let lastStateSignature = lastState ? JSON.stringify(lastState) : "";
  if (lastState) {
    onState?.(lastState);
  }
  const completed = await waitFor(() => {
    lastState = readLauncherState(paths);
    if (lastState) {
      const signature = JSON.stringify(lastState);
      if (signature !== lastStateSignature) {
        lastStateSignature = signature;
        onState?.(lastState);
      }
    }
    return lastState?.status === "running" || lastState?.status === "failed";
  }, { timeoutMs: SUPERVISOR_START_TIMEOUT_MS });

  const state = lastState ?? readLauncherState(paths);
  if (!state) {
    throw new Error("O3 Code supervisor did not write launcher state.");
  }
  if (!completed && state.status === "starting") {
    return {
      ...state,
      status: "failed",
      error:
        "Timed out waiting for O3 Code supervisor startup. First launch may still be preparing the runtime; check launcher logs and retry status.",
    };
  }
  return state;
}

function writeStartupPhase(
  paths: O3CodePaths,
  state: LauncherState,
  phaseId: (typeof STARTUP_PHASES)[number][0],
  detail: string | null,
): LauncherState {
  const phaseIndex = STARTUP_PHASES.findIndex(([candidate]) => candidate === phaseId);
  const phase = STARTUP_PHASES[phaseIndex];
  if (!phase) {
    throw new Error(`Unknown O3 Code startup phase: ${phaseId}`);
  }
  const now = new Date().toISOString();
  const nextState = {
    ...state,
    startup: {
      phaseId,
      label: phase[1],
      step: phaseIndex + 1,
      total: STARTUP_PHASES.length,
      detail,
      startedAt: state.startup?.startedAt ?? now,
      updatedAt: now,
    },
  };
  writeLauncherState(paths, nextState);
  return nextState;
}

function createDesktopEnv({
  codexAppPathEnv,
  codexResources,
  launchPaths,
}: {
  readonly codexAppPathEnv: string;
  readonly codexResources: {
    readonly appPath: string;
    readonly nativeNodeModulesPath: string;
    readonly nodePath: string;
    readonly nodeReplPath: string;
    readonly resourcesPath: string;
  };
  readonly launchPaths: DesktopLaunchPaths;
}): NodeJS.ProcessEnv {
  const env = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || "production",
    CODEX_BUILD_NUMBER: resolveCodexBuildNumber(launchPaths),
    CODEX_ELECTRON_RESOURCES_PATH:
      process.env.CODEX_ELECTRON_RESOURCES_PATH || codexResources.resourcesPath,
    CODEX_ELECTRON_USER_DATA_PATH:
      process.env.CODEX_ELECTRON_USER_DATA_PATH || defaultElectronUserDataPath(),
    ELECTRON_RENDERER_URL:
      process.env.ELECTRON_RENDERER_URL || pathToFileURL(launchPaths.rendererIndexPath).toString(),
    CODEX_CLI_PATH: process.env.CODEX_CLI_PATH || launchPaths.appServerRouterPath,
    CODEX_BROWSER_USE_NODE_PATH:
      process.env.CODEX_BROWSER_USE_NODE_PATH || codexResources.nodePath,
    CODEX_NODE_REPL_PATH: process.env.CODEX_NODE_REPL_PATH || codexResources.nodeReplPath,
    O3_CODE_NATIVE_NODE_MODULES_PATH:
      process.env.O3_CODE_NATIVE_NODE_MODULES_PATH || codexResources.nativeNodeModulesPath,
    O3_CODE_DISABLE_APP_UPDATES: process.env.O3_CODE_DISABLE_APP_UPDATES || "1",
    O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG:
      process.env.O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG || "1",
    O3_CODE_APP_NAME: process.env.O3_CODE_APP_NAME || "O3 Code",
    O3_CODE_APP_ICON_PATH: process.env.O3_CODE_APP_ICON_PATH || launchPaths.iconPath,
    O3_CODE_TRAY_TEMPLATE_PATH:
      process.env.O3_CODE_TRAY_TEMPLATE_PATH || launchPaths.trayTemplatePath,
    O3_CODE_REPO_ROOT: launchPaths.runtimeRoot,
    O3_CODE_BRIDGE_WEBVIEW_DIR: launchPaths.webviewDir,
    O3_CODE_BRIDGE_NODE_PATH:
      process.env.O3_CODE_BRIDGE_NODE_PATH || codexResources.nodePath,
    [codexAppPathEnv]: codexResources.appPath,
    PATH: [process.env.PATH, codexResources.resourcesPath].filter(Boolean).join(path.delimiter),
  };

  return env;
}

async function formatStartupError(error: unknown, paths: O3CodePaths): Promise<string> {
  const message = messageFromError(error);
  if (!shouldShowCodexAppInstallHelp(message)) {
    return message;
  }

  try {
    const resourcesModule = await resolveCodexAppResourceModule(paths.activeRuntimeRoot);
    return `${message}\n${resourcesModule.getCodexAppInstallHelp()}`;
  } catch {
    return message;
  }
}

function shouldShowCodexAppInstallHelp(message: string): boolean {
  return (
    message.includes("Codex.app") ||
    message.includes("Codex Desktop app") ||
    message.includes("official Codex")
  );
}

function touchLogFiles(paths: O3CodePaths): void {
  for (const filePath of [paths.launcherLogPath, paths.desktopLogPath, paths.bridgeLogPath]) {
    fs.closeSync(fs.openSync(filePath, "a", 0o600));
    fs.chmodSync(filePath, 0o600);
  }
}

function ensureDesktopRemainsAlive(
  desktop: ReturnType<typeof spawn> | null,
  timeoutMs: number,
): Promise<void> {
  if (!desktop || desktop.exitCode != null || desktop.signalCode != null) {
    return Promise.reject(new Error("Desktop process exited before web access stabilized."));
  }

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      desktop.off("exit", onExit);
      resolve();
    }, timeoutMs);
    const onExit = (code: number | null, signal: NodeJS.Signals | null) => {
      clearTimeout(timeout);
      reject(new Error(`Desktop process exited during startup (${signal ?? code ?? "unknown"}).`));
    };
    desktop.once("exit", onExit);
  });
}
