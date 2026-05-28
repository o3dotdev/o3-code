import { execFileSync, spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { Command } from "commander";

import { printLogs } from "./logs.js";
import { resolveO3CodePaths } from "./paths.js";
import { isPidRunning, waitFor } from "./process.js";
import { readLauncherState, removeLauncherState } from "./state.js";
import { runSupervisor, waitForSupervisorStart } from "./supervisor.js";
import {
  renderFailurePanel,
  renderStartPanel,
  renderStatusPanel,
  renderStopPanel,
  startStartupProgressRenderer,
} from "./ui.js";

export interface ProgramDependencies {
  readonly argv?: readonly string[];
  readonly env?: NodeJS.ProcessEnv;
  readonly stdout?: Pick<NodeJS.WriteStream, "write">;
}

export function createProgram(dependencies: ProgramDependencies = {}): Command {
  const program = new Command();
  const paths = resolveO3CodePaths({ env: dependencies.env ?? process.env });
  const stdout = dependencies.stdout ?? process.stdout;

  program
    .name("o3-code")
    .description("Start and manage a local O3 Code run.")
    .version("0.0.0");

  program
    .command("start")
    .description("Start O3 Code in the background and print the local web URL.")
    .option("--foreground", "Run the supervisor in the foreground for debugging.")
    .action(async (options: { readonly foreground?: boolean }) => {
      if (options.foreground) {
        await runSupervisor(paths);
        return;
      }
      const state = await startBackground(paths, { stdout });
      if (state.status === "failed") {
        stdout.write(`${renderFailurePanel({ error: state.error ?? "Startup failed.", state })}\n`);
        process.exitCode = 1;
        return;
      }
      stdout.write(`${renderStartPanel({ state })}\n`);
    });

  program
    .command("status")
    .description("Show local O3 Code process and URL status.")
    .action(() => {
      const state = readLauncherState(paths);
      stdout.write(`${renderStatusPanel(state, state ? isPidRunning(state.pid) : false)}\n`);
    });

  program
    .command("stop")
    .description("Stop the Package Launcher-owned O3 Code run.")
    .action(async () => {
      const state = readLauncherState(paths);
      const stopped = await stopRunningState(paths);
      stdout.write(`${renderStopPanel(stopped, state)}\n`);
    });

  program
    .command("restart")
    .description("Stop and then start O3 Code.")
    .action(async () => {
      await stopRunningState(paths);
      const state = await startBackground(paths, { stdout });
      if (state.status === "failed") {
        stdout.write(`${renderFailurePanel({ error: state.error ?? "Restart failed.", state })}\n`);
        process.exitCode = 1;
        return;
      }
      stdout.write(`${renderStartPanel({ state, title: "O3 Code restarted" })}\n`);
    });

  program
    .command("logs")
    .description("Print recent O3 Code logs.")
    .option("--follow", "Stream appended log lines.")
    .action((options: { readonly follow?: boolean }) => {
      printLogs({ follow: Boolean(options.follow), paths });
    });

  program
    .command("__supervisor", { hidden: true })
    .description("Run the detached O3 Code supervisor.")
    .action(async () => {
      await runSupervisor(paths);
    });

  return program;
}

export async function runCli(argv: readonly string[] = process.argv): Promise<void> {
  await createProgram().parseAsync(normalizeDefaultStartArgv(argv));
}

export function normalizeDefaultStartArgv(argv: readonly string[]): string[] {
  const executable = argv[0] ?? "node";
  const script = argv[1] ?? "o3-code";
  const args = argv.slice(2);
  const first = args[0];
  if (!first || (first.startsWith("-") && !isRootOption(first))) {
    return [executable, script, "start", ...args];
  }
  return [...argv];
}

function isRootOption(value: string): boolean {
  return value === "--help" || value === "-h" || value === "--version" || value === "-V";
}

async function startBackground(
  paths: ReturnType<typeof resolveO3CodePaths>,
  {
    stdout,
  }: {
    readonly stdout: Pick<NodeJS.WriteStream, "write">;
  },
) {
  fs.mkdirSync(paths.logsDir, { recursive: true, mode: 0o700 });
  fs.mkdirSync(paths.runDir, { recursive: true, mode: 0o700 });

  const current = readLauncherState(paths);
  if (current && isPidRunning(current.pid) && current.status === "running") {
    return current;
  }
  if (current && !isPidRunning(current.pid)) {
    removeLauncherState(paths);
  }

  const launcherOut = fs.openSync(paths.launcherLogPath, "a", 0o600);
  const launcherErr = fs.openSync(paths.launcherLogPath, "a", 0o600);
  const child = spawn(process.execPath, [process.argv[1] ?? "o3-code", "__supervisor"], {
    detached: true,
    env: process.env,
    stdio: ["ignore", launcherOut, launcherErr],
  });
  child.unref();

  const progress = shouldRenderInteractiveProgress(stdout)
    ? startStartupProgressRenderer({
        initialState: readLauncherState(paths),
        stdout: process.stdout,
      })
    : null;
  try {
    return await waitForSupervisorStart(paths, {
      onState: (state) => {
        progress?.update(state);
      },
    });
  } finally {
    await progress?.stop();
  }
}

function shouldRenderInteractiveProgress(stdout: Pick<NodeJS.WriteStream, "write">): boolean {
  return stdout === process.stdout && process.stdout.isTTY === true;
}

async function stopRunningState(paths: ReturnType<typeof resolveO3CodePaths>): Promise<boolean> {
  const state = readLauncherState(paths);
  if (!state) {
    return false;
  }
  if (!isPidRunning(state.pid)) {
    await cleanupRuntimeProcesses(paths, state);
    removeLauncherState(paths);
    return false;
  }

  process.kill(state.pid, "SIGTERM");
  const stopped = await waitFor(() => !isPidRunning(state.pid), {
    intervalMs: 200,
    timeoutMs: 5_000,
  });
  await cleanupRuntimeProcesses(paths, state);
  if (stopped) {
    removeLauncherState(paths);
  }
  return stopped;
}

async function cleanupRuntimeProcesses(
  paths: ReturnType<typeof resolveO3CodePaths>,
  state: NonNullable<ReturnType<typeof readLauncherState>>,
): Promise<void> {
  const roots = [
    state.activeRuntimeRoot ?? paths.activeRuntimeRoot,
    path.join(paths.stateRoot, "electron"),
  ];
  const pids = findRuntimePids(roots);
  if (pids.length === 0) {
    return;
  }

  signalPids(pids, "SIGTERM");
  const stopped = await waitFor(() => pids.every((pid) => !isPidRunning(pid)), {
    intervalMs: 200,
    timeoutMs: 3_000,
  });
  if (!stopped) {
    signalPids(pids.filter((pid) => isPidRunning(pid)), "SIGKILL");
  }
}

function findRuntimePids(roots: readonly string[]): readonly number[] {
  let output = "";
  try {
    output = execFileSync("ps", ["-axo", "pid=,command="], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return [];
  }

  const normalizedRoots = roots.filter(Boolean);
  const pids = [];
  for (const line of output.split("\n")) {
    const match = /^\s*(\d+)\s+(.+)$/u.exec(line);
    if (!match) {
      continue;
    }
    const pid = Number(match[1]);
    const command = match[2] ?? "";
    if (pid === process.pid || !Number.isInteger(pid)) {
      continue;
    }
    if (normalizedRoots.some((root) => command.includes(root))) {
      pids.push(pid);
    }
  }
  return pids;
}

function signalPids(pids: readonly number[], signal: NodeJS.Signals): void {
  for (const pid of pids) {
    try {
      process.kill(pid, signal);
    } catch {
      // The process may have already exited.
    }
  }
}
