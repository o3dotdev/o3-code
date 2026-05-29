import { spawn } from "node:child_process";
import { existsSync, lstatSync, mkdirSync, rmSync, symlinkSync } from "node:fs";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import {
  assertCodexAppExecutableResources,
  CODEX_APP_PATH_ENV,
  getCodexAppInstallHelp,
  resolveCodexAppElectronExecutable,
  resolveCodexAppResources,
} from "../packages/codex-app-resources/src/codex-app.mjs";

const require = createRequire(import.meta.url);
const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const rootPackage = require("../package.json");
const desktopAppPackage = require("../apps/desktop/app/package.json");
const desktopPath = path.join(repoRoot, "apps", "desktop");
const appPath = path.join(desktopPath, "app");
const rendererIndexPath = path.join(appPath, "webview", "index.html");
const repoResourcesPath = path.join(desktopPath, "resources");
const appServerRouterPath = path.join(
  repoRoot,
  "packages",
  "app-server-router",
  "bin",
  "o3-app-server-router.mjs",
);

let codexAppResources;
try {
  codexAppResources = resolveCodexAppResources();
  assertCodexAppExecutableResources(codexAppResources);
} catch (error) {
  console.error(
    `Unable to resolve official Codex Desktop app resources: ${
      error instanceof Error ? error.message : String(error)
    }`,
  );
  console.error(getCodexAppInstallHelp());
  process.exit(1);
}

function resolveDesktopElectronExecutable() {
  // Run the Desktop Reconstruction under the installed Codex App's own Electron
  // framework instead of an npm `electron` package. The framework is the only
  // host whose V8/ABI matches the app's native add-ons (see
  // resolveCodexAppElectronExecutable and docs/adr/0033). Local app identity
  // (name, dock icon, user data) is applied at runtime by patch 0002, so the
  // signed Codex bundle launches in place without modification.
  const executable = resolveCodexAppElectronExecutable();
  if (!existsSync(executable)) {
    console.error(`Codex App Electron executable not found: ${executable}`);
    console.error(getCodexAppInstallHelp());
    process.exit(1);
  }
  return executable;
}

function resolveCodexBuildNumber() {
  for (const value of [
    process.env.CODEX_BUILD_NUMBER,
    rootPackage.codexBuildNumber,
    desktopAppPackage.codexBuildNumber,
  ]) {
    const trimmed = String(value ?? "").trim();
    if (trimmed) {
      return trimmed;
    }
  }

  throw Error("Missing codexBuildNumber package metadata.");
}

function ensureExternalNativePayloadLinks() {
  for (const relativePath of [
    path.join("better-sqlite3", "build", "Release", "better_sqlite3.node"),
    path.join("node-pty", "build", "Release", "pty.node"),
    path.join("node-pty", "build", "Release", "spawn-helper"),
    path.join("objc-js", "prebuilds", "darwin-arm64", "node.napi.armv8.node"),
    path.join("objc-js", "prebuilds", "darwin-x64", "node.napi.node"),
  ]) {
    const targetPath = path.join(
      codexAppResources.nativeNodeModulesPath,
      relativePath,
    );
    const linkPath = path.join(appPath, "node_modules", relativePath);

    if (!existsSync(targetPath)) {
      console.error(
        `Missing native payload in Codex.app resources: ${targetPath}`,
      );
      process.exit(1);
    }

    const linkStat = getOptionalLinkStat(linkPath);
    if (linkStat) {
      if (linkStat.isSymbolicLink()) {
        rmSync(linkPath, { force: true });
      } else {
        console.error(
          `Refusing to replace non-symlink native payload path: ${linkPath}`,
        );
        console.error(
          "Remove the checked-in native payload so the launcher can link to Codex.app resources.",
        );
        process.exit(1);
      }
    }

    mkdirSync(path.dirname(linkPath), { recursive: true });
    symlinkSync(targetPath, linkPath);
  }
}

function ensureExternalNativeModuleLinks() {
  // Whole-module native packages (large, self-contained, loaded lazily through
  // createRequire) are resolved from the installed Codex App instead of being
  // checked in. Link the module directory so resolution and native payloads
  // both come from the Native Resource Provider.
  for (const relativeModule of [path.join("@worklouder", "device-kit-oai")]) {
    const targetPath = path.join(
      codexAppResources.nativeNodeModulesPath,
      relativeModule,
    );
    const linkPath = path.join(appPath, "node_modules", relativeModule);

    if (!existsSync(targetPath)) {
      console.error(
        `Missing native module in Codex.app resources: ${targetPath}`,
      );
      process.exit(1);
    }

    const linkStat = getOptionalLinkStat(linkPath);
    if (linkStat) {
      if (linkStat.isSymbolicLink()) {
        rmSync(linkPath, { force: true });
      } else {
        console.error(
          `Refusing to replace non-symlink native module path: ${linkPath}`,
        );
        console.error(
          "Remove the checked-in native module so the launcher can link to Codex.app resources.",
        );
        process.exit(1);
      }
    }

    mkdirSync(path.dirname(linkPath), { recursive: true });
    symlinkSync(targetPath, linkPath);
  }
}

function getOptionalLinkStat(candidate) {
  try {
    return lstatSync(candidate);
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

const requiredPaths = [
  appPath,
  rendererIndexPath,
  repoResourcesPath,
  path.join(repoResourcesPath, "electron.icns"),
  path.join(repoResourcesPath, "icon.icns"),
  path.join(repoResourcesPath, "o3-code-icon.png"),
  path.join(repoResourcesPath, "codexTemplate.png"),
  path.join(repoResourcesPath, "codexTemplate@2x.png"),
  appServerRouterPath,
  codexAppResources.resourcesPath,
  codexAppResources.nodePath,
  codexAppResources.nodeReplPath,
  codexAppResources.nativeNodeModulesPath,
];

for (const requiredPath of requiredPaths) {
  if (!existsSync(requiredPath)) {
    console.error(`Missing required runtime path: ${requiredPath}`);
    process.exit(1);
  }
}

ensureExternalNativePayloadLinks();
ensureExternalNativeModuleLinks();

const defaultUserDataPath =
  process.env.O3_CODE_USE_CODEX_USER_DATA === "1"
    ? path.join(homedir(), "Library", "Application Support", "Codex")
    : path.join(homedir(), "Library", "Application Support", "O3 Code");

const userDataPath =
  process.env.CODEX_ELECTRON_USER_DATA_PATH?.trim() || defaultUserDataPath;

const env = {
  ...process.env,
  NODE_ENV: process.env.NODE_ENV || "production",
  CODEX_BUILD_NUMBER: resolveCodexBuildNumber(),
  CODEX_ELECTRON_RESOURCES_PATH:
    process.env.CODEX_ELECTRON_RESOURCES_PATH ||
    codexAppResources.resourcesPath,
  CODEX_ELECTRON_USER_DATA_PATH: userDataPath,
  ELECTRON_RENDERER_URL:
    process.env.ELECTRON_RENDERER_URL ||
    pathToFileURL(rendererIndexPath).toString(),
  CODEX_CLI_PATH: process.env.CODEX_CLI_PATH || appServerRouterPath,
  CODEX_BROWSER_USE_NODE_PATH:
    process.env.CODEX_BROWSER_USE_NODE_PATH || codexAppResources.nodePath,
  CODEX_NODE_REPL_PATH:
    process.env.CODEX_NODE_REPL_PATH || codexAppResources.nodeReplPath,
  O3_CODE_NATIVE_NODE_MODULES_PATH:
    process.env.O3_CODE_NATIVE_NODE_MODULES_PATH ||
    codexAppResources.nativeNodeModulesPath,
  O3_CODE_DISABLE_APP_UPDATES: process.env.O3_CODE_DISABLE_APP_UPDATES || "1",
  O3_CODE_APP_NAME: process.env.O3_CODE_APP_NAME || "O3 Code",
  O3_CODE_APP_ICON_PATH:
    process.env.O3_CODE_APP_ICON_PATH ||
    path.join(repoResourcesPath, "o3-code-icon.png"),
  O3_CODE_TRAY_TEMPLATE_PATH:
    process.env.O3_CODE_TRAY_TEMPLATE_PATH ||
    path.join(repoResourcesPath, "codexTemplate.png"),
  [CODEX_APP_PATH_ENV]: codexAppResources.appPath,
  PATH: [process.env.PATH, codexAppResources.resourcesPath]
    .filter(Boolean)
    .join(path.delimiter),
};

// Pass the user data directory as an early Chromium switch. Running the
// installed Codex bundle in place means native startup picks the bundle's
// default profile ("Codex") before patch 0002 can redirect it from JS (the
// Codex framework ignores that "late" userData change), which would make O3
// Code share and lock the real Codex profile. The switch is read at native
// startup, isolating the O3 Code profile.
const child = spawn(
  resolveDesktopElectronExecutable(),
  [`--user-data-dir=${userDataPath}`, appPath, ...process.argv.slice(2)],
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
