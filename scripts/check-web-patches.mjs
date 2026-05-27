#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const webviewRoot = resolve(repoRoot, "apps", "web", "app", "webview");
const scannedExtensions = new Set([".css", ".html", ".js", ".json", ".mjs"]);
const skippedDirectories = new Set(["node_modules"]);
const markerLinePattern =
  /^\s*\/\/ o3-code-web-patch-(begin|end): ([a-z0-9-]+)\s*$/;
const markerTextPattern = /o3-code-web-patch-(?:begin|end):/;

const files = [];
const invalidMarkers = [];
const markerStack = [];
const markerPairs = [];

function fail(message) {
  console.error(message);
  process.exit(1);
}

function relativePath(file) {
  return file.slice(repoRoot.length + 1);
}

function collect(path) {
  const stats = statSync(path);

  if (stats.isFile()) {
    if (scannedExtensions.has(extname(path))) {
      files.push(path);
    }
    return;
  }

  if (!stats.isDirectory()) {
    return;
  }

  for (const entry of readdirSync(path, { withFileTypes: true })) {
    if (entry.isDirectory() && skippedDirectories.has(entry.name)) {
      continue;
    }
    collect(join(path, entry.name));
  }
}

function validateMarkers(file) {
  const source = readFileSync(file, "utf8");
  const lines = source.split("\n");

  lines.forEach((line, index) => {
    if (!markerTextPattern.test(line)) {
      return;
    }

    const match = line.match(markerLinePattern);
    if (!match) {
      invalidMarkers.push({
        file,
        line: index + 1,
        message: "marker must be a standalone line with a lowercase patch id",
        text: line.trim(),
      });
      return;
    }

    const [, boundary, patchId] = match;
    if (boundary === "begin") {
      markerStack.push({ file, line: index + 1, patchId });
      return;
    }

    const current = markerStack.pop();
    if (!current) {
      invalidMarkers.push({
        file,
        line: index + 1,
        message: "end marker has no matching begin marker",
        text: line.trim(),
      });
      return;
    }

    if (current.file !== file || current.patchId !== patchId) {
      invalidMarkers.push({
        file,
        line: index + 1,
        message: `end marker does not match begin marker at ${relativePath(
          current.file,
        )}:${current.line}`,
        text: line.trim(),
      });
      return;
    }

    markerPairs.push({ file, patchId });
  });
}

if (!existsSync(webviewRoot)) {
  fail(`Missing Mirrored Web Client Asset Tree: ${relativePath(webviewRoot)}`);
}

collect(webviewRoot);
files.sort();

for (const file of files) {
  validateMarkers(file);
}

for (const marker of markerStack) {
  invalidMarkers.push({
    file: marker.file,
    line: marker.line,
    message: "begin marker has no matching end marker",
    text: `o3-code-web-patch-begin: ${marker.patchId}`,
  });
}

if (invalidMarkers.length > 0) {
  console.error(
    `Invalid Web Patch Marker placement in ${invalidMarkers.length} location(s):`,
  );
  for (const marker of invalidMarkers) {
    console.error(
      `- ${relativePath(marker.file)}:${marker.line}: ${marker.message}: ${marker.text}`,
    );
  }
  process.exit(1);
}

console.log(
  `Checked ${files.length} web asset files; found ${markerPairs.length} Web Patch region(s).`,
);
