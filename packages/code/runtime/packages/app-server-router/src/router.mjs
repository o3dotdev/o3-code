import { spawn as defaultSpawn } from "node:child_process";

import { resolveRealtimeOverride } from "./realtime-config.mjs";
import { createRealtimeMitmChildEnv } from "./realtime-mitm-config.mjs";
import { startRealtimeMitmProxy } from "./realtime-mitm-proxy.mjs";
import { resolveExternalCodex } from "./resolve-codex.mjs";

export async function proxyToExternalCodex({
  argv = process.argv.slice(2),
  env = process.env,
  stdin = process.stdin,
  stdout = process.stdout,
  stderr = process.stderr,
  spawn = defaultSpawn,
  createRealtimeProxy = startRealtimeMitmProxy,
  routerExecutablePath = process.argv[1],
} = {}) {
  const realtimeOverride = resolveRealtimeOverride({ env });
  const codexPath = resolveExternalCodex({ env, routerExecutablePath });
  let realtimeProxy = null;
  let child = null;

  try {
    let childEnv = env;
    if (realtimeOverride) {
      realtimeProxy = await createRealtimeProxy({
        apiKey: realtimeOverride.apiKey,
        stderr,
        upstreamCallsBaseUrl: realtimeOverride.upstreamCallsBaseUrl,
      });
      childEnv = createRealtimeMitmChildEnv({
        caCertPath: realtimeProxy.caCertPath,
        env,
        proxyUrl: realtimeProxy.proxyUrl,
      });
    }

    child = spawn(codexPath, argv, {
      env: childEnv,
      stdio: ["pipe", "pipe", "pipe"],
    });
  } catch (error) {
    if (realtimeProxy) {
      await realtimeProxy.close();
    }
    throw error;
  }

  return await new Promise((resolve, reject) => {
    child.once("error", async (error) => {
      await closeRealtimeProxy(realtimeProxy, stderr);
      reject(error);
    });

    if (child.stdin) {
      stdin.pipe(child.stdin);
    }
    if (child.stdout) {
      child.stdout.pipe(stdout);
    }
    if (child.stderr) {
      child.stderr.pipe(stderr);
    }

    child.once("exit", async (code, signal) => {
      await closeRealtimeProxy(realtimeProxy, stderr);
      resolve({ code: code ?? 0, signal: signal ?? null });
    });
  });
}

async function closeRealtimeProxy(realtimeProxy, stderr) {
  if (!realtimeProxy) {
    return;
  }

  try {
    await realtimeProxy.close();
  } catch (error) {
    stderr.write(`[o3-app-server-router] ${formatCloseError(error)}\n`);
  }
}

function formatCloseError(error) {
  const message = error instanceof Error ? error.message : String(error);
  return `Realtime MITM Proxy close failed: ${message}`;
}
