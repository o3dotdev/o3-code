import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { format, resolveConfig } from "prettier";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const roots = [
  "apps/desktop/app/.vite/build",
  "apps/desktop/app/webview",
  "apps/desktop/app/native-menu-locales",
  "apps/desktop/app/package.json",
];

const prettierExtensions = new Set([".css", ".html", ".js", ".json", ".mjs"]);
const svgExtension = ".svg";
const skippedDirectories = new Set(["node_modules"]);
const checkMode = process.argv.includes("--check");
const files = [];

function collect(path) {
  const absolutePath = resolve(repoRoot, path);
  const stats = statSync(absolutePath);

  if (stats.isFile()) {
    if (
      prettierExtensions.has(extname(absolutePath)) ||
      extname(absolutePath) === svgExtension
    ) {
      files.push(absolutePath);
    }
    return;
  }

  if (!stats.isDirectory()) {
    return;
  }

  for (const entry of readdirSync(absolutePath, { withFileTypes: true })) {
    if (entry.isDirectory() && skippedDirectories.has(entry.name)) {
      continue;
    }
    collect(join(absolutePath, entry.name));
  }
}

function postprocess(file, source) {
  if (extname(file) !== ".css") {
    return source;
  }

  return source.replaceAll(/(--[\w-]+:)\s+(!important;)/g, "$1 $2");
}

for (const root of roots) {
  collect(root);
}

files.sort();

const changedFiles = [];
const config = (await resolveConfig(repoRoot)) ?? {};

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const parserConfig = extname(file) === svgExtension ? { parser: "html" } : {};
  const formatted = postprocess(
    file,
    await format(source, {
      ...config,
      ...parserConfig,
      filepath: file,
    }),
  );

  if (formatted === source) {
    continue;
  }

  changedFiles.push(file);
  if (!checkMode) {
    writeFileSync(file, formatted);
  }
}

if (changedFiles.length === 0) {
  console.log(`Normalized ${files.length} files; no changes needed.`);
  process.exit(0);
}

if (checkMode) {
  console.error(`Normalization needed for ${changedFiles.length} file(s):`);
  for (const file of changedFiles) {
    console.error(`- ${file.slice(repoRoot.length + 1)}`);
  }
  process.exit(1);
}

console.log(
  `Normalized ${files.length} files; changed ${changedFiles.length}.`,
);
