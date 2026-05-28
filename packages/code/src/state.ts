import fs from "node:fs";
import path from "node:path";

import type { O3CodePaths } from "./paths.js";

export type LauncherStatus = "starting" | "running" | "failed" | "stopped";

export interface LauncherStartupState {
  readonly phaseId: string;
  readonly label: string;
  readonly step: number;
  readonly total: number;
  readonly detail: string | null;
  readonly startedAt: string;
  readonly updatedAt: string;
}

export interface LauncherState {
  readonly status: LauncherStatus;
  readonly pid: number;
  readonly desktopPid: number | null;
  readonly startedAt: string;
  readonly updatedAt: string;
  readonly url: string | null;
  readonly activeRuntimeRoot: string | null;
  readonly logs: {
    readonly launcher: string;
    readonly desktop: string;
    readonly bridge: string;
  };
  readonly warnings: readonly string[];
  readonly error?: string;
  readonly startup?: LauncherStartupState;
}

export function createBaseState(paths: O3CodePaths): LauncherState {
  const now = new Date().toISOString();
  return {
    status: "starting",
    pid: process.pid,
    desktopPid: null,
    startedAt: now,
    updatedAt: now,
    url: null,
    activeRuntimeRoot: null,
    logs: {
      launcher: paths.launcherLogPath,
      desktop: paths.desktopLogPath,
      bridge: paths.bridgeLogPath,
    },
    warnings: createLauncherWarnings(process.env),
  };
}

export function readLauncherState(paths: Pick<O3CodePaths, "statePath">): LauncherState | null {
  try {
    return normalizeLauncherState(JSON.parse(fs.readFileSync(paths.statePath, "utf8")));
  } catch {
    return null;
  }
}

export function writeLauncherState(paths: Pick<O3CodePaths, "runDir" | "statePath">, state: LauncherState): void {
  fs.mkdirSync(paths.runDir, { recursive: true, mode: 0o700 });
  const nextState = {
    ...state,
    updatedAt: new Date().toISOString(),
  };
  const tempPath = path.join(paths.runDir, `.launcher.${process.pid}.${Date.now()}.tmp`);
  fs.writeFileSync(tempPath, `${JSON.stringify(nextState, null, 2)}\n`, { mode: 0o600 });
  fs.renameSync(tempPath, paths.statePath);
  fs.chmodSync(paths.statePath, 0o600);
}

export function removeLauncherState(paths: Pick<O3CodePaths, "statePath">): void {
  try {
    fs.unlinkSync(paths.statePath);
  } catch {
    // Missing state is fine during cleanup.
  }
}

function normalizeLauncherState(value: unknown): LauncherState | null {
  if (!value || typeof value !== "object") {
    return null;
  }
  const candidate = value as Partial<LauncherState>;
  if (
    !["starting", "running", "failed", "stopped"].includes(String(candidate.status)) ||
    typeof candidate.pid !== "number" ||
    typeof candidate.startedAt !== "string" ||
    typeof candidate.updatedAt !== "string" ||
    !candidate.logs ||
    typeof candidate.logs.launcher !== "string" ||
    typeof candidate.logs.desktop !== "string" ||
    typeof candidate.logs.bridge !== "string"
  ) {
    return null;
  }

  return {
    status: candidate.status as LauncherStatus,
    pid: candidate.pid,
    desktopPid: typeof candidate.desktopPid === "number" ? candidate.desktopPid : null,
    startedAt: candidate.startedAt,
    updatedAt: candidate.updatedAt,
    url: typeof candidate.url === "string" ? candidate.url : null,
    activeRuntimeRoot:
      typeof candidate.activeRuntimeRoot === "string" ? candidate.activeRuntimeRoot : null,
    logs: candidate.logs,
    warnings: Array.isArray(candidate.warnings)
      ? candidate.warnings.filter((warning) => typeof warning === "string")
      : [],
    error: typeof candidate.error === "string" ? candidate.error : undefined,
    startup: normalizeStartupState(candidate.startup),
  };
}

function normalizeStartupState(value: unknown): LauncherStartupState | undefined {
  if (!value || typeof value !== "object") {
    return undefined;
  }
  const candidate = value as Partial<LauncherStartupState>;
  if (
    typeof candidate.phaseId !== "string" ||
    typeof candidate.label !== "string" ||
    typeof candidate.step !== "number" ||
    typeof candidate.total !== "number" ||
    typeof candidate.startedAt !== "string" ||
    typeof candidate.updatedAt !== "string"
  ) {
    return undefined;
  }

  return {
    phaseId: candidate.phaseId,
    label: candidate.label,
    step: candidate.step,
    total: candidate.total,
    detail: typeof candidate.detail === "string" ? candidate.detail : null,
    startedAt: candidate.startedAt,
    updatedAt: candidate.updatedAt,
  };
}

function createLauncherWarnings(env: NodeJS.ProcessEnv): readonly string[] {
  if (env.O3_CODE_DISABLE_REALTIME_OVERRIDE === "1") {
    return ["Realtime MITM override is disabled by O3_CODE_DISABLE_REALTIME_OVERRIDE=1."];
  }
  if (!env.O3_CODE_REALTIME_API_KEY?.trim()) {
    return [
      "Realtime features might not be enabled for your account. Set O3_CODE_REALTIME_API_KEY to your OpenAI API key to enable access to realtime models.",
    ];
  }
  return [];
}
