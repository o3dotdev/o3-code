import { accessSync, realpathSync, statSync } from "node:fs";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  CODEX_APP_PATH_ENV,
  getCodexAppInstallHelp,
  resolveCodexAppResources,
} from "../../codex-app-resources/src/codex-app.mjs";

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const repoRoot = path.resolve(packageRoot, "..", "..");
const bundledCodexPath = path.join(
  repoRoot,
  "apps",
  "desktop",
  "resources",
  "codex",
);

export const UPSTREAM_CODEX_PATH_ENV = "O3_CODE_UPSTREAM_CODEX_PATH";

export function resolveExternalCodex({
  env = process.env,
  resolveCodexApp = resolveCodexAppResources,
  routerExecutablePath = process.argv[1],
  platform = process.platform,
} = {}) {
  const override = env[UPSTREAM_CODEX_PATH_ENV]?.trim();
  if (override) {
    const resolvedOverride = path.resolve(override);
    assertExecutableFile(resolvedOverride, UPSTREAM_CODEX_PATH_ENV);
    return resolvedOverride;
  }

  const pathValue = env.PATH ?? "";
  const skipRealpaths = collectSkipRealpaths([
    routerExecutablePath,
    bundledCodexPath,
  ]);
  const skipPaths = new Set(
    [routerExecutablePath, bundledCodexPath]
      .filter(Boolean)
      .map((candidate) => path.resolve(candidate)),
  );

  for (const directory of pathValue.split(path.delimiter)) {
    const searchDirectory = directory || ".";
    for (const commandName of getCodexCommandNames(platform)) {
      const candidate = path.resolve(searchDirectory, commandName);
      if (skipPaths.has(candidate)) {
        continue;
      }

      if (!isExecutableFile(candidate)) {
        continue;
      }

      const realpath = getRealpath(candidate);
      if (realpath && skipRealpaths.has(realpath)) {
        continue;
      }

      return candidate;
    }
  }

  try {
    const codexAppResources = resolveCodexApp({ env });
    if (isExecutableFile(codexAppResources.codexPath)) {
      return codexAppResources.codexPath;
    }
  } catch {}

  throw Error(
    `Unable to locate external Codex CLI. Set ${UPSTREAM_CODEX_PATH_ENV}, ensure an official codex command is available on PATH, or set ${CODEX_APP_PATH_ENV} to an installed Codex.app. ${getCodexAppInstallHelp()}`,
  );
}

function getCodexCommandNames(platform) {
  if (platform === "win32") {
    return ["codex.cmd", "codex.exe", "codex"];
  }

  return ["codex"];
}

function collectSkipRealpaths(paths) {
  const realpaths = new Set();
  for (const candidate of paths) {
    const realpath = getRealpath(candidate);
    if (realpath) {
      realpaths.add(realpath);
    }
  }
  return realpaths;
}

function assertExecutableFile(candidate, sourceName) {
  if (!isExecutableFile(candidate)) {
    throw Error(`${sourceName} must point to an executable file: ${candidate}`);
  }
}

function isExecutableFile(candidate) {
  try {
    const stat = statSync(candidate);
    if (!stat.isFile()) {
      return false;
    }
    accessSync(candidate, constants.X_OK);
    return true;
  } catch {
    return false;
  }
}

function getRealpath(candidate) {
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
