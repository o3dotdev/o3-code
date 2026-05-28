import { proxyToExternalCodex } from "./router.mjs";

export async function runCli({
  argv = process.argv.slice(2),
  env = process.env,
  stdin = process.stdin,
  stdout = process.stdout,
  stderr = process.stderr,
  exit = process.exit,
  kill = process.kill,
  pid = process.pid,
  routerExecutablePath = process.argv[1],
} = {}) {
  try {
    const result = await proxyToExternalCodex({
      argv,
      env,
      stdin,
      stdout,
      stderr,
      routerExecutablePath,
    });

    if (result.signal) {
      kill(pid, result.signal);
      return;
    }

    exit(result.code);
  } catch (error) {
    stderr.write(`[o3-app-server-router] ${formatError(error)}\n`);
    exit(1);
  }
}

function formatError(error) {
  return error instanceof Error ? error.message : String(error);
}
