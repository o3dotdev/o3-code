import { accessSync, realpathSync, statSync } from "node:fs";
import { constants } from "node:fs";
import path from "node:path";

export const CODEX_APP_PATH_ENV = "O3_CODE_CODEX_APP_PATH";
export const DEFAULT_CODEX_APP_PATH = "/Applications/Codex.app";

export function resolveCodexAppResources({
  env = process.env,
  defaultAppPath = DEFAULT_CODEX_APP_PATH,
} = {}) {
  const appPath = resolveCodexAppPath({ env, defaultAppPath });
  const resourcesPath = path.join(appPath, "Contents", "Resources");
  const nativeNodeModulesPath = path.join(
    resourcesPath,
    "app.asar.unpacked",
    "node_modules",
  );

  assertDirectory(resourcesPath, describeAppPathSource(env));
  assertFile(path.join(appPath, "Contents", "Info.plist"), "Codex.app plist");
  assertDirectory(nativeNodeModulesPath, "Codex.app native node modules");

  return {
    appPath,
    resourcesPath,
    nativeNodeModulesPath,
    codexPath: path.join(resourcesPath, "codex"),
    nodePath: path.join(resourcesPath, "node"),
    nodeReplPath: path.join(resourcesPath, "node_repl"),
    rgPath: path.join(resourcesPath, "rg"),
    appServerRuntimePath: path.join(
      resourcesPath,
      "plugins",
      "openai-bundled",
      "plugins",
      "chrome",
      "app-server-runtime",
    ),
  };
}

export function resolveCodexAppPath({
  env = process.env,
  defaultAppPath = DEFAULT_CODEX_APP_PATH,
} = {}) {
  const override = env[CODEX_APP_PATH_ENV]?.trim();
  return path.resolve(override || defaultAppPath);
}

// O3 Code runs under the installed Codex App's own Electron framework rather
// than an npm `electron` package. The Codex App ships a custom Electron build
// whose native add-ons (notably the raw-V8 `better-sqlite3` add-on) are
// compiled against that framework's exact V8. The framework's ABI
// (NODE_MODULE_VERSION) and its Chromium/V8 version are decoupled, so no public
// npm Electron release matches both: matching the ABI loads a mismatched V8
// (the add-on then calls a null V8 vtable slot and the renderer segfaults),
// while matching the V8 fails the ABI load check. Launching the installed
// framework in place is the only host that satisfies the add-on, and it
// preserves the app's hardened-runtime code signature (its library validation
// only loads native code signed by the Codex team). See docs/adr/0033.
export function resolveCodexAppElectronExecutable({
  env = process.env,
  defaultAppPath = DEFAULT_CODEX_APP_PATH,
} = {}) {
  const appPath = resolveCodexAppPath({ env, defaultAppPath });
  const executableName = path.basename(appPath).replace(/\.app$/i, "");
  return path.join(appPath, "Contents", "MacOS", executableName);
}

export function assertCodexAppExecutableResources(resources) {
  assertExecutableFile(resources.codexPath, "Codex.app codex executable");
  assertExecutableFile(resources.nodePath, "Codex.app node executable");
  assertExecutableFile(
    resources.nodeReplPath,
    "Codex.app node_repl executable",
  );
}

export function getCodexAppInstallHelp() {
  return (
    "Install the official Codex Desktop app at /Applications/Codex.app, " +
    `or set ${CODEX_APP_PATH_ENV} to a valid Codex.app path.`
  );
}

function describeAppPathSource(env) {
  return env[CODEX_APP_PATH_ENV]?.trim()
    ? CODEX_APP_PATH_ENV
    : "default Codex.app path";
}

function assertDirectory(candidate, sourceName) {
  try {
    if (statSync(candidate).isDirectory()) {
      return;
    }
  } catch {}

  throw Error(`${sourceName} must point to a directory: ${candidate}`);
}

function assertFile(candidate, sourceName) {
  try {
    if (statSync(candidate).isFile()) {
      return;
    }
  } catch {}

  throw Error(`${sourceName} must point to a file: ${candidate}`);
}

function assertExecutableFile(candidate, sourceName) {
  try {
    if (!statSync(candidate).isFile()) {
      throw Error();
    }
    accessSync(candidate, constants.X_OK);
    return;
  } catch {
    throw Error(`${sourceName} must point to an executable file: ${candidate}`);
  }
}

export function getRealpath(candidate) {
  try {
    return realpathSync.native(candidate);
  } catch {
    try {
      return realpathSync(candidate);
    } catch {
      return null;
    }
  }
}
