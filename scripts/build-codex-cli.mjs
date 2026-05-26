import { execFileSync, spawnSync } from "node:child_process";
import {
  chmodSync,
  copyFileSync,
  existsSync,
  renameSync,
  rmSync,
  statSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const codexRoot = join(repoRoot, "upstream", "codex");
const manifestPath = join(codexRoot, "codex-rs", "Cargo.toml");
const builtBinary = join(codexRoot, "codex-rs", "target", "release", "codex");
const runtimeBinary = join(repoRoot, "apps", "desktop", "resources", "codex");

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!existsSync(manifestPath)) {
  fail(
    "Missing Codex CLI source checkout. Run `git submodule update --init --recursive` first.",
  );
}

const build = spawnSync(
  "cargo",
  [
    "build",
    "--manifest-path",
    manifestPath,
    "-p",
    "codex-cli",
    "--bin",
    "codex",
    "--release",
  ],
  {
    cwd: codexRoot,
    stdio: "inherit",
  },
);

if (build.error) {
  fail(`Failed to run cargo: ${build.error.message}`);
}

if (build.status !== 0) {
  process.exit(build.status ?? 1);
}

if (!existsSync(builtBinary) || !statSync(builtBinary).isFile()) {
  fail(`Cargo completed but did not produce ${builtBinary}`);
}

const temporaryRuntimeBinary = `${runtimeBinary}.${process.pid}.tmp`;
rmSync(temporaryRuntimeBinary, { force: true });
copyFileSync(builtBinary, temporaryRuntimeBinary);
chmodSync(temporaryRuntimeBinary, 0o755);
renameSync(temporaryRuntimeBinary, runtimeBinary);

const version = execFileSync(runtimeBinary, ["--version"], {
  encoding: "utf8",
}).trim();

console.log(`Installed ${version} to ${runtimeBinary}`);
