import path from "node:path";
import { fileURLToPath } from "node:url";

export const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
  "..",
);

export const defaultMirroredWebviewDir = path.join(
  repoRoot,
  "apps",
  "web",
  "app",
  "webview",
);

export function resolveBridgeWebviewDir(env = process.env) {
  const override = env.O3_CODE_BRIDGE_WEBVIEW_DIR?.trim();
  return override ? path.resolve(override) : defaultMirroredWebviewDir;
}
