import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const desktopPath = path.join(repoRoot, "apps", "desktop");
const appPath = path.join(desktopPath, "app");
const rendererIndexPath = path.join(appPath, "webview", "index.html");
const resourcesPath = path.join(desktopPath, "resources");
const electronBin = path.join(
  repoRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "electron.cmd" : "electron",
);

const requiredPaths = [
  appPath,
  rendererIndexPath,
  resourcesPath,
  path.join(resourcesPath, "codex"),
  path.join(resourcesPath, "node"),
  path.join(resourcesPath, "node_repl"),
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

const userDataPath =
  process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() ||
  path.join(repoRoot, ".codex-user-data");

const env = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "production",
  CODEX_BUILD_NUMBER: process.env.CODEX_BUILD_NUMBER || "3044",
  CODEX_ELECTRON_RESOURCES_PATH:
    process.env.CODEX_ELECTRON_RESOURCES_PATH || resourcesPath,
  CODEX_ELECTRON_USER_DATA_PATH: userDataPath,
  ELECTRON_RENDERER_URL:
    process.env.ELECTRON_RENDERER_URL ||
    pathToFileURL(rendererIndexPath).toString(),
  CODEX_CLI_PATH:
    process.env.CODEX_CLI_PATH || path.join(resourcesPath, "codex"),
  CODEX_BROWSER_USE_NODE_PATH:
    process.env.CODEX_BROWSER_USE_NODE_PATH || path.join(resourcesPath, "node"),
  CODEX_NODE_REPL_PATH:
    process.env.CODEX_NODE_REPL_PATH || path.join(resourcesPath, "node_repl"),
  PATH: [resourcesPath, process.env.PATH].filter(Boolean).join(path.delimiter),
};

const child = spawn(electronBin, [appPath, ...process.argv.slice(2)], {
  cwd: repoRoot,
  env,
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
