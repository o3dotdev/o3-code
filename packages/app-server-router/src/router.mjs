import { spawn as defaultSpawn } from "node:child_process";

import { resolveExternalCodex } from "./resolve-codex.mjs";

export async function proxyToExternalCodex({
  argv = process.argv.slice(2),
  env = process.env,
  stdin = process.stdin,
  stdout = process.stdout,
  stderr = process.stderr,
  spawn = defaultSpawn,
  routerExecutablePath = process.argv[1],
} = {}) {
  const codexPath = resolveExternalCodex({ env, routerExecutablePath });
  const child = spawn(codexPath, argv, {
    env,
    stdio: ["pipe", "pipe", "pipe"],
  });

  return await new Promise((resolve, reject) => {
    child.once("error", reject);

    if (child.stdin) {
      stdin.pipe(child.stdin);
    }
    if (child.stdout) {
      child.stdout.pipe(stdout);
    }
    if (child.stderr) {
      child.stderr.pipe(stderr);
    }

    child.once("exit", (code, signal) => {
      resolve({ code: code ?? 0, signal: signal ?? null });
    });
  });
}
