#!/usr/bin/env node
import { existsSync, lstatSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const runtimeRoot = path.join(packageRoot, "runtime");
const violations = [];

if (!existsSync(runtimeRoot)) {
  throw new Error(
    "Missing packages/code/runtime. Run `pnpm --filter @o3dotdev/code prepare:runtime`.",
  );
}

walk(runtimeRoot);

if (violations.length > 0) {
  console.error(
    "Runtime payload contains native or Codex-owned runtime material:",
  );
  for (const violation of violations) {
    console.error(`- ${path.relative(packageRoot, violation)}`);
  }
  process.exit(1);
}

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    const normalized = fullPath.split(path.sep).join("/");
    const stat = lstatSync(fullPath);

    if (stat.isSymbolicLink()) {
      violations.push(fullPath);
      continue;
    }
    if (isViolation(normalized, entry.name)) {
      violations.push(fullPath);
      continue;
    }
    if (entry.isDirectory()) {
      walk(fullPath);
    }
  }
}

function isViolation(normalizedPath, basename) {
  if (normalizedPath.endsWith(".node")) {
    return true;
  }
  if (basename === "node" || basename === "node_repl" || basename === "codex") {
    return true;
  }
  if (basename === "spawn-helper" || basename === "app-server-runtime") {
    return true;
  }
  if (normalizedPath.includes(".app/Contents/")) {
    return true;
  }
  if (normalizedPath.includes("/node_modules/electron/dist/")) {
    return true;
  }
  return false;
}
