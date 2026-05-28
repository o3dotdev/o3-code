#!/usr/bin/env node
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const repoRoot = path.resolve(packageRoot, "..", "..");
const runtimeRoot = path.join(packageRoot, "runtime");

const copyEntries = [
  ["apps/desktop/app", "apps/desktop/app"],
  ["apps/desktop/resources", "apps/desktop/resources"],
  ["apps/web/app/webview", "apps/web/app/webview"],
  ["packages/bridge/package.json", "packages/bridge/package.json"],
  ["packages/bridge/src", "packages/bridge/src"],
  ["packages/bridge/public", "packages/bridge/public"],
  [
    "packages/app-server-router/package.json",
    "packages/app-server-router/package.json",
  ],
  ["packages/app-server-router/bin", "packages/app-server-router/bin"],
  ["packages/app-server-router/src", "packages/app-server-router/src"],
  [
    "packages/codex-app-resources/package.json",
    "packages/codex-app-resources/package.json",
  ],
  ["packages/codex-app-resources/src", "packages/codex-app-resources/src"],
];

rmSync(runtimeRoot, { force: true, recursive: true });
mkdirSync(runtimeRoot, { recursive: true });

for (const [from, to] of copyEntries) {
  const source = path.join(repoRoot, from);
  const destination = path.join(runtimeRoot, to);
  if (!existsSync(source)) {
    throw new Error(`Missing runtime source: ${source}`);
  }
  mkdirSync(path.dirname(destination), { recursive: true });
  cpSync(source, destination, {
    dereference: false,
    filter: shouldCopy,
    force: true,
    recursive: true,
  });
}

writeFileSync(
  path.join(runtimeRoot, "package-runtime.json"),
  `${JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      source: "o3-code repo-local JS runtime payload",
    },
    null,
    2,
  )}\n`,
  "utf8",
);

function shouldCopy(source) {
  const relative = path.relative(repoRoot, source);
  const normalized = relative.split(path.sep).join("/");
  const basename = path.basename(source);

  if (basename === "out" || basename === ".DS_Store") {
    return false;
  }
  if (normalized.includes("/node_modules/electron/dist/")) {
    return false;
  }
  if (isNativeRuntimeCandidate(normalized)) {
    return false;
  }
  try {
    if (lstatSync(source).isSymbolicLink()) {
      return false;
    }
  } catch {
    return false;
  }
  return true;
}

function isNativeRuntimeCandidate(normalizedPath) {
  if (normalizedPath.endsWith(".node")) {
    return true;
  }
  if (normalizedPath.endsWith("/spawn-helper")) {
    return true;
  }
  return normalizedPath.includes(".app/Contents/");
}
