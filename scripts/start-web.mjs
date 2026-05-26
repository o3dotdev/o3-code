#!/usr/bin/env node
import { execFileSync, spawn } from "node:child_process";
import {
  chmodSync,
  cpSync,
  existsSync,
  mkdirSync,
  renameSync,
  rmSync,
  statSync,
} from "node:fs";
import { createRequire } from "node:module";
import { homedir, tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import {
  allocateLoopbackPort,
  parsePortOverride,
} from "../packages/bridge/src/ports.mjs";

const require = createRequire(import.meta.url);
const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const electronPackage = require("electron/package.json");
const desktopPath = path.join(repoRoot, "apps", "desktop");
const appPath = path.join(desktopPath, "app");
const rendererIndexPath = path.join(appPath, "webview", "index.html");
const webviewDir = path.join(appPath, "webview");
const resourcesPath = path.join(desktopPath, "resources");
const sidecarPath = path.join(
  repoRoot,
  "packages",
  "bridge",
  "src",
  "sidecar.mjs",
);
const electronBin = path.join(
  repoRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "electron.cmd" : "electron",
);
const electronPackageRoot = path.dirname(
  require.resolve("electron/package.json"),
);
const electronDistApp = path.join(electronPackageRoot, "dist", "Electron.app");
const localElectronApp = path.join(
  repoRoot,
  "node_modules",
  ".cache",
  "o3-code-electron",
  `electron-${electronPackage.version}`,
  "O3 Code.app",
);
const nativeExecutablePaths = [
  path.join(
    appPath,
    "node_modules",
    "node-pty",
    "build",
    "Release",
    "spawn-helper",
  ),
  path.join(
    resourcesPath,
    "app.asar.unpacked",
    "node_modules",
    "node-pty",
    "build",
    "Release",
    "spawn-helper",
  ),
];

const bridgeHost = "127.0.0.1";

function prepareElectronExecutable() {
  if (process.platform !== "darwin") {
    return electronBin;
  }

  if (!existsSync(electronDistApp)) {
    return electronBin;
  }

  const localExecutable = path.join(
    localElectronApp,
    "Contents",
    "MacOS",
    "O3 Code",
  );

  if (!existsSync(localExecutable)) {
    rmSync(localElectronApp, { force: true, recursive: true });
    mkdirSync(path.dirname(localElectronApp), { recursive: true });
    execFileSync("ditto", [electronDistApp, localElectronApp]);
    renameSync(
      path.join(localElectronApp, "Contents", "MacOS", "Electron"),
      localExecutable,
    );
  }

  for (const [key, value] of [
    ["CFBundleName", "O3 Code"],
    ["CFBundleDisplayName", "O3 Code"],
    ["CFBundleExecutable", "O3 Code"],
    ["CFBundleIdentifier", "dev.o3.code.local-electron"],
  ]) {
    execFileSync("plutil", [
      "-replace",
      key,
      "-string",
      value,
      path.join(localElectronApp, "Contents", "Info.plist"),
    ]);
  }

  for (const name of ["electron.icns", "icon.icns"]) {
    cpSync(
      path.join(resourcesPath, name),
      path.join(localElectronApp, "Contents", "Resources", name),
    );
  }

  return localExecutable;
}

function ensureNativeExecutableBits() {
  if (process.platform === "win32") {
    return;
  }

  for (const nativeExecutablePath of nativeExecutablePaths) {
    if (!existsSync(nativeExecutablePath)) {
      continue;
    }

    const currentMode = statSync(nativeExecutablePath).mode;
    if ((currentMode & 0o111) === 0) {
      chmodSync(nativeExecutablePath, (currentMode & 0o777) | 0o755);
    }
  }
}

function ensureRequiredPaths() {
  const requiredPaths = [
    appPath,
    rendererIndexPath,
    resourcesPath,
    path.join(resourcesPath, "codex"),
    path.join(resourcesPath, "node"),
    path.join(resourcesPath, "node_repl"),
    sidecarPath,
  ];

  for (const requiredPath of requiredPaths) {
    if (!existsSync(requiredPath)) {
      console.error(`Missing required runtime path: ${requiredPath}`);
      process.exit(1);
    }
  }

  if (!existsSync(electronBin)) {
    console.error("Electron is not installed. Run `pnpm install` first.");
    process.exit(1);
  }
}

function openBrowser(url) {
  if (process.env.O3_CODE_BRIDGE_NO_OPEN === "1") {
    return;
  }

  const opener =
    process.platform === "darwin"
      ? ["open", [url]]
      : process.platform === "win32"
        ? ["cmd", ["/c", "start", "", url]]
        : ["xdg-open", [url]];

  const child = spawn(opener[0], opener[1], {
    detached: true,
    stdio: "ignore",
  });
  child.unref();
}

async function waitForSidecar(url) {
  const deadline = Date.now() + 10_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${url}healthz`);
      if (response.ok) {
        return;
      }
    } catch {}

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  throw Error("Bridge Sidecar did not become ready within 10 seconds.");
}

ensureRequiredPaths();
ensureNativeExecutableBits();

const sidecarPort =
  parsePortOverride(process.env.O3_CODE_BRIDGE_PORT, "O3_CODE_BRIDGE_PORT") ??
  (await allocateLoopbackPort(bridgeHost));
const cdpPort =
  parsePortOverride(
    process.env.O3_CODE_BRIDGE_CDP_PORT,
    "O3_CODE_BRIDGE_CDP_PORT",
  ) ?? (await allocateLoopbackPort(bridgeHost));
const targetUrl = pathToFileURL(rendererIndexPath).toString();
const browserUrl = `http://${bridgeHost}:${sidecarPort}/`;
const stageDir = path.join(
  tmpdir(),
  `o3-code-bridge-${process.pid}-${Date.now()}`,
);

const userDataPath =
  process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() ||
  path.join(homedir(), "Library", "Application Support", "Codex");

const sharedEnv = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "production",
  CODEX_BUILD_NUMBER: process.env.CODEX_BUILD_NUMBER || "3044",
  CODEX_ELECTRON_RESOURCES_PATH:
    process.env.CODEX_ELECTRON_RESOURCES_PATH || resourcesPath,
  CODEX_ELECTRON_USER_DATA_PATH: userDataPath,
  ELECTRON_RENDERER_URL: process.env.ELECTRON_RENDERER_URL || targetUrl,
  CODEX_CLI_PATH:
    process.env.CODEX_CLI_PATH || path.join(resourcesPath, "codex"),
  CODEX_BROWSER_USE_NODE_PATH:
    process.env.CODEX_BROWSER_USE_NODE_PATH || path.join(resourcesPath, "node"),
  CODEX_NODE_REPL_PATH:
    process.env.CODEX_NODE_REPL_PATH || path.join(resourcesPath, "node_repl"),
  O3_CODE_APP_NAME: process.env.O3_CODE_APP_NAME || "O3 Code",
  O3_CODE_APP_ICON_PATH:
    process.env.O3_CODE_APP_ICON_PATH ||
    path.join(resourcesPath, "o3-code-icon.png"),
  O3_CODE_TRAY_TEMPLATE_PATH:
    process.env.O3_CODE_TRAY_TEMPLATE_PATH ||
    path.join(resourcesPath, "codexTemplate.png"),
  PATH: [resourcesPath, process.env.PATH].filter(Boolean).join(path.delimiter),
};

const sidecar = spawn(process.execPath, [sidecarPath], {
  cwd: repoRoot,
  env: {
    ...sharedEnv,
    O3_CODE_BRIDGE_HOST: bridgeHost,
    O3_CODE_BRIDGE_PORT: String(sidecarPort),
    O3_CODE_BRIDGE_CDP_PORT: String(cdpPort),
    O3_CODE_BRIDGE_WEBVIEW_DIR: webviewDir,
    O3_CODE_BRIDGE_TARGET_URL: sharedEnv.ELECTRON_RENDERER_URL,
    O3_CODE_BRIDGE_STAGE_DIR: stageDir,
  },
  stdio: "inherit",
});

let shuttingDown = false;
let electron = null;

function terminateChildren(exitCode = 0) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  electron?.kill();
  sidecar.kill();
  rmSync(stageDir, { force: true, recursive: true });
  process.exit(exitCode);
}

sidecar.on("exit", (code, signal) => {
  if (shuttingDown) {
    return;
  }

  console.error(
    signal
      ? `Bridge Sidecar exited with signal ${signal}.`
      : `Bridge Sidecar exited with code ${code}.`,
  );
  terminateChildren(code ?? 1);
});

await waitForSidecar(browserUrl);

electron = spawn(
  prepareElectronExecutable(),
  [
    `--remote-debugging-address=${bridgeHost}`,
    `--remote-debugging-port=${cdpPort}`,
    appPath,
    ...process.argv.slice(2),
  ],
  {
    cwd: repoRoot,
    env: sharedEnv,
    stdio: "inherit",
  },
);

electron.on("exit", (code, signal) => {
  if (shuttingDown) {
    return;
  }

  if (signal) {
    terminateChildren(128);
    return;
  }

  terminateChildren(code ?? 0);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => terminateChildren(signal === "SIGINT" ? 130 : 143));
}

console.log(`Bridge Mode URL: ${browserUrl}`);
openBrowser(browserUrl);
