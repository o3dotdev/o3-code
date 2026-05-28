import http from "node:http";

import { readWebAccessConfig } from "./config.js";
import type { O3CodePaths } from "./paths.js";

export async function waitForBridgeReady({
  paths,
  timeoutMs,
}: {
  readonly paths: O3CodePaths;
  readonly timeoutMs: number;
}): Promise<string> {
  const deadline = Date.now() + timeoutMs;
  let lastError = "Web access port has not been assigned yet.";

  while (Date.now() <= deadline) {
    const config = readWebAccessConfig(paths);
    if (config.port != null) {
      const url = `http://127.0.0.1:${config.port}/`;
      try {
        if (await requestHealth(`${url}healthz`)) {
          return url;
        }
        lastError = `Bridge health check did not return ok at ${url}`;
      } catch (error) {
        lastError = error instanceof Error ? error.message : String(error);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for O3 Code web access. ${lastError}`);
}

function requestHealth(url: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const request = http.get(url, { timeout: 1_000 }, (response) => {
      const chunks: Buffer[] = [];
      response.on("data", (chunk: Buffer) => chunks.push(chunk));
      response.on("end", () => {
        if (response.statusCode !== 200) {
          resolve(false);
          return;
        }
        try {
          const payload = JSON.parse(Buffer.concat(chunks).toString("utf8"));
          resolve(payload?.ok === true);
        } catch {
          resolve(false);
        }
      });
    });
    request.on("timeout", () => {
      request.destroy(new Error(`Timed out checking ${url}`));
    });
    request.on("error", reject);
  });
}
