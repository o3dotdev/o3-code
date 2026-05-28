import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

export interface O3CodePaths {
  readonly packageRoot: string;
  readonly packagedRuntimeRoot: string;
  readonly stateRoot: string;
  readonly runDir: string;
  readonly logsDir: string;
  readonly activeRuntimeRoot: string;
  readonly statePath: string;
  readonly launcherLogPath: string;
  readonly desktopLogPath: string;
  readonly bridgeLogPath: string;
}

export function getPackageRoot(metaUrl: string = import.meta.url): string {
  return path.resolve(path.dirname(fileURLToPath(metaUrl)), "..");
}

export function getStateRoot(env: NodeJS.ProcessEnv = process.env): string {
  return path.resolve(env.O3_CODE_STATE_ROOT?.trim() || path.join(homedir(), ".o3", "code"));
}

export function resolveO3CodePaths({
  env = process.env,
  packageRoot = getPackageRoot(),
}: {
  readonly env?: NodeJS.ProcessEnv;
  readonly packageRoot?: string;
} = {}): O3CodePaths {
  const stateRoot = getStateRoot(env);
  const runDir = path.join(stateRoot, "run");
  const logsDir = path.join(stateRoot, "logs");
  return {
    packageRoot,
    packagedRuntimeRoot: path.join(packageRoot, "runtime"),
    stateRoot,
    runDir,
    logsDir,
    activeRuntimeRoot: path.join(stateRoot, "package-runtime"),
    statePath: path.join(runDir, "launcher.json"),
    launcherLogPath: path.join(logsDir, "launcher.log"),
    desktopLogPath: path.join(logsDir, "desktop.log"),
    bridgeLogPath: path.join(logsDir, "bridge.log"),
  };
}
