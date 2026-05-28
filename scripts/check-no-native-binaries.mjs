import { closeSync, lstatSync, openSync, readSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const scanRoots = [
  path.join(repoRoot, "apps", "desktop", "app"),
  path.join(repoRoot, "apps", "desktop", "resources"),
  path.join(repoRoot, "packages"),
  path.join(repoRoot, "scripts"),
];

const nativeExtensions = new Set([".dll", ".dylib", ".exe", ".node", ".so"]);
const binaryMagicChecks = [
  (bytes) => bytes.length >= 4 && bytes.readUInt32BE(0) === 0xcafebabe,
  (bytes) => bytes.length >= 4 && bytes.readUInt32BE(0) === 0xcafed00d,
  (bytes) => bytes.length >= 4 && bytes.readUInt32BE(0) === 0xfeedface,
  (bytes) => bytes.length >= 4 && bytes.readUInt32BE(0) === 0xfeedfacf,
  (bytes) => bytes.length >= 4 && bytes.readUInt32LE(0) === 0xfeedface,
  (bytes) => bytes.length >= 4 && bytes.readUInt32LE(0) === 0xfeedfacf,
  (bytes) =>
    bytes.length >= 4 &&
    bytes[0] === 0x7f &&
    bytes[1] === 0x45 &&
    bytes[2] === 0x4c &&
    bytes[3] === 0x46,
  (bytes) => bytes.length >= 2 && bytes[0] === 0x4d && bytes[1] === 0x5a,
];

const violations = [];

for (const root of scanRoots) {
  scan(root);
}

if (violations.length > 0) {
  console.error("Native binary resources are not allowed in O3 Code:");
  for (const violation of violations) {
    console.error(`- ${path.relative(repoRoot, violation)}`);
  }
  process.exit(1);
}

function scan(candidate) {
  let stat;
  try {
    stat = lstatSync(candidate);
  } catch {
    return;
  }

  if (stat.isSymbolicLink()) {
    return;
  }

  if (stat.isDirectory()) {
    for (const entry of readdirSync(candidate)) {
      scan(path.join(candidate, entry));
    }
    return;
  }

  if (!stat.isFile()) {
    return;
  }

  if (nativeExtensions.has(path.extname(candidate))) {
    violations.push(candidate);
    return;
  }

  const prefix = readPrefix(candidate);
  if (binaryMagicChecks.some((check) => check(prefix))) {
    violations.push(candidate);
  }
}

function readPrefix(candidate) {
  const buffer = Buffer.alloc(8);
  const fd = openSync(candidate, "r");
  try {
    const bytesRead = readSync(fd, buffer, 0, buffer.length, 0);
    return buffer.subarray(0, bytesRead);
  } finally {
    closeSync(fd);
  }
}
