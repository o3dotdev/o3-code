#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const desktopWebviewDir = path.join(
  repoRoot,
  "apps",
  "desktop",
  "app",
  "webview",
);
const webWebviewDir = path.join(repoRoot, "apps", "web", "app", "webview");
const webAppDir = path.dirname(webWebviewDir);

function fail(message) {
  console.error(message);
  process.exit(1);
}

function ensureDirectory(directoryPath, label) {
  if (!existsSync(directoryPath)) {
    fail(`Missing ${label}: ${path.relative(repoRoot, directoryPath)}`);
  }

  if (!statSync(directoryPath).isDirectory()) {
    fail(
      `${label} is not a directory: ${path.relative(repoRoot, directoryPath)}`,
    );
  }
}

function ensureInsideRepo(directoryPath, label) {
  const relativePath = path.relative(repoRoot, directoryPath);
  if (
    relativePath === "" ||
    relativePath.startsWith("..") ||
    path.isAbsolute(relativePath)
  ) {
    fail(`${label} must resolve inside the repository: ${directoryPath}`);
  }
}

ensureDirectory(desktopWebviewDir, "Desktop Reconstruction Webview Assets");

if (!existsSync(path.join(desktopWebviewDir, "index.html"))) {
  fail("Desktop Reconstruction Webview Assets are missing index.html.");
}

ensureInsideRepo(webWebviewDir, "Mirrored Web Client Asset Tree");
mkdirSync(webAppDir, { recursive: true });
rmSync(webWebviewDir, { force: true, recursive: true });
cpSync(desktopWebviewDir, webWebviewDir, {
  dereference: false,
  errorOnExist: false,
  force: true,
  recursive: true,
});

console.log(
  `Derived ${path.relative(repoRoot, webWebviewDir)} from ${path.relative(
    repoRoot,
    desktopWebviewDir,
  )}.`,
);
