import {
  existsSync,
  readFileSync,
  readdirSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { format, resolveConfig } from "prettier";

const scriptRepoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = resolve(process.env.O3_NORMALIZE_REPO_ROOT ?? scriptRepoRoot);
const roots = [
  "apps/desktop/app/.vite/build",
  "apps/desktop/app/webview",
  "apps/desktop/app/native-menu-locales",
  "apps/desktop/app/package.json",
];
const canonicalFilenameDirectories = [
  "apps/desktop/app/.vite/build",
  "apps/desktop/app/webview/assets",
];
const referenceRewriteRoots = [
  "apps/desktop/app/.vite/build",
  "apps/desktop/app/webview",
];

const prettierExtensions = new Set([".css", ".html", ".js", ".json", ".mjs"]);
const referenceRewriteExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".mjs",
]);
const svgExtension = ".svg";
const skippedDirectories = new Set(["node_modules"]);
const checkMode = process.argv.includes("--check");
const files = [];
const patchMarkerPattern = /^\s*\/\/ o3-code-patch-(?:begin|end): /m;
const patchMarkerLinePattern =
  /^\s*\/\/ o3-code-patch-(?:begin|end): [a-z0-9-]+\s*$/;
const invalidPatchMarkers = [];

function relativeToRepo(path) {
  return relative(repoRoot, path);
}

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

function collectTextFiles(path, target) {
  const absolutePath = resolve(repoRoot, path);
  const stats = statSync(absolutePath);

  if (stats.isFile()) {
    if (referenceRewriteExtensions.has(extname(absolutePath))) {
      target.push(absolutePath);
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
    collectTextFiles(join(absolutePath, entry.name), target);
  }
}

function canonicalAssetCandidate(filename) {
  const extension = extname(filename);
  if (extension.length === 0) {
    return null;
  }

  const stem = filename.slice(0, -extension.length);
  const wasmMatch = stem.match(/^(.+)\.[a-z0-9]{10}$/);
  if (extension === ".wasm" && wasmMatch) {
    return {
      canonicalName: `${wasmMatch[1]}${extension}`,
      canonicalStem: wasmMatch[1],
      extension,
    };
  }

  const viteMatch = stem.match(/^(.+)-([A-Za-z0-9_]{6,12})$/);
  if (!viteMatch) {
    return null;
  }

  const hash = viteMatch[2];
  if (
    !/[A-Z]/.test(hash) ||
    !/[0-9_-]/.test(hash) ||
    /^[A-Z0-9_]+$/.test(hash)
  ) {
    return null;
  }

  const canonical = `${viteMatch[1]}${extension}`;
  return canonical === filename
    ? null
    : {
        canonicalName: canonical,
        canonicalStem: viteMatch[1],
        extension,
      };
}

function collectCanonicalFilenameOperations() {
  const renames = [];
  const collisions = [];

  for (const directory of canonicalFilenameDirectories) {
    const absoluteDirectory = resolve(repoRoot, directory);
    if (!existsSync(absoluteDirectory)) {
      continue;
    }

    const entries = readdirSync(absoluteDirectory, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .sort();
    const groups = new Map();
    const existingNames = new Set(entries);

    for (const filename of entries) {
      const candidate = canonicalAssetCandidate(filename);
      if (candidate === null) {
        continue;
      }

      const group = groups.get(candidate.canonicalName) ?? [];
      group.push(filename);
      for (const sibling of entries) {
        if (
          sibling !== filename &&
          extname(sibling) === candidate.extension &&
          sibling.startsWith(`${candidate.canonicalStem}-`) &&
          !group.includes(sibling)
        ) {
          group.push(sibling);
        }
      }
      groups.set(candidate.canonicalName, group);
    }

    for (const [canonicalName, filenames] of [...groups.entries()].sort()) {
      const uniqueFilenames = [...new Set(filenames)].sort();
      if (uniqueFilenames.length > 1 || existingNames.has(canonicalName)) {
        collisions.push({
          canonicalName,
          directory,
          filenames: uniqueFilenames,
        });
        continue;
      }

      const [filename] = uniqueFilenames;
      renames.push({
        directory,
        from: resolve(absoluteDirectory, filename),
        fromName: filename,
        to: resolve(absoluteDirectory, canonicalName),
        toName: canonicalName,
      });
    }
  }

  return { collisions, renames };
}

function printSkippedCanonicalFilenameCollisions(collisions) {
  if (collisions.length === 0) {
    return;
  }

  console.warn(
    `Skipped ${collisions.length} hashed filename collision group(s):`,
  );
  for (const collision of collisions) {
    console.warn(
      `- ${collision.directory}/${collision.canonicalName}: ${collision.filenames.join(", ")}`,
    );
  }
}

function rewriteReferences(renameOperations) {
  const rewrites = [];
  if (renameOperations.length === 0) {
    return rewrites;
  }

  const textFiles = [];
  for (const root of referenceRewriteRoots) {
    collectTextFiles(root, textFiles);
  }

  for (const file of [...new Set(textFiles)].sort()) {
    const source = readFileSync(file, "utf8");
    let rewritten = source;

    for (const operation of renameOperations) {
      rewritten = rewritten.replaceAll(operation.fromName, operation.toName);
    }

    if (rewritten === source) {
      continue;
    }

    rewrites.push(file);
    if (!checkMode) {
      writeFileSync(file, rewritten);
    }
  }

  return rewrites;
}

function canonicalizeGeneratedFilenames() {
  const { collisions, renames } = collectCanonicalFilenameOperations();
  printSkippedCanonicalFilenameCollisions(collisions);

  if (renames.length === 0) {
    return { renames, rewrites: [] };
  }

  if (!checkMode) {
    for (const operation of renames) {
      renameSync(operation.from, operation.to);
    }
  }

  return {
    renames,
    rewrites: rewriteReferences(renames),
  };
}

function postprocess(file, source) {
  if (extname(file) !== ".css") {
    return source;
  }

  return source.replaceAll(/(--[\w-]+:)\s+(!important;)/g, "$1 $2");
}

function validatePatchMarkers(file, source) {
  const lines = source.split("\n");
  lines.forEach((line, index) => {
    if (
      line.includes("o3-code-patch-begin:") ||
      line.includes("o3-code-patch-end:")
    ) {
      if (!patchMarkerLinePattern.test(line)) {
        invalidPatchMarkers.push({
          file,
          line: index + 1,
          text: line,
        });
      }
    }
  });
}

const canonicalization = canonicalizeGeneratedFilenames();

for (const root of roots) {
  collect(root);
}

files.sort();

const changedFiles = [];
const config = (await resolveConfig(repoRoot)) ?? {};

for (const file of files) {
  const source = readFileSync(file, "utf8");
  validatePatchMarkers(file, source);
  if (patchMarkerPattern.test(source)) {
    continue;
  }

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

if (invalidPatchMarkers.length > 0) {
  console.error(
    `Invalid Patch Marker placement in ${invalidPatchMarkers.length} location(s):`,
  );
  for (const marker of invalidPatchMarkers) {
    console.error(
      `- ${marker.file.slice(repoRoot.length + 1)}:${marker.line}: ${marker.text.trim()}`,
    );
  }
  process.exit(1);
}

if (checkMode && canonicalization.renames.length > 0) {
  console.error(
    `Filename canonicalization needed for ${canonicalization.renames.length} file(s):`,
  );
  for (const operation of canonicalization.renames) {
    console.error(
      `- ${relativeToRepo(operation.from)} -> ${relativeToRepo(operation.to)}`,
    );
  }
  if (canonicalization.rewrites.length > 0) {
    console.error(
      `Reference rewrite needed for ${canonicalization.rewrites.length} file(s):`,
    );
    for (const file of canonicalization.rewrites) {
      console.error(`- ${relativeToRepo(file)}`);
    }
  }
  process.exit(1);
}

if (
  changedFiles.length === 0 &&
  canonicalization.renames.length === 0 &&
  canonicalization.rewrites.length === 0
) {
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
  `Normalized ${files.length} files; formatted ${changedFiles.length}; renamed ${canonicalization.renames.length}; rewrote references in ${canonicalization.rewrites.length}.`,
);
