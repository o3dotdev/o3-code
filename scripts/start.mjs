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
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const electronPackage = require("electron/package.json");
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

ensureNativeExecutableBits();

const userDataPath =
  process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() ||
  path.join(homedir(), "Library", "Application Support", "Codex");

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
  O3_CODE_APP_NAME: process.env.O3_CODE_APP_NAME || "O3 Code",
  O3_CODE_APP_ICON_PATH:
    process.env.O3_CODE_APP_ICON_PATH ||
    path.join(resourcesPath, "o3-code-icon.png"),
  O3_CODE_TRAY_TEMPLATE_PATH:
    process.env.O3_CODE_TRAY_TEMPLATE_PATH ||
    path.join(resourcesPath, "codexTemplate.png"),
  PATH: [resourcesPath, process.env.PATH].filter(Boolean).join(path.delimiter),
};

const child = spawn(
  prepareElectronExecutable(),
  [appPath, ...process.argv.slice(2)],
  {
    cwd: repoRoot,
    env,
    stdio: "inherit",
  },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
