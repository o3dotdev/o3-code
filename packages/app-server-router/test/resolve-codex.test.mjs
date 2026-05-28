import assert from "node:assert/strict";
import { chmod, mkdir, mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  resolveExternalCodex,
  UPSTREAM_CODEX_PATH_ENV,
} from "../src/resolve-codex.mjs";

test("resolveExternalCodex prefers O3_CODE_UPSTREAM_CODEX_PATH", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const first = await writeExecutable(root, "first-codex");
  const secondDir = path.join(root, "bin");
  const second = await writeExecutable(secondDir, "codex");

  assert.equal(
    resolveExternalCodex({
      env: {
        PATH: secondDir,
        [UPSTREAM_CODEX_PATH_ENV]: first,
      },
      routerExecutablePath: path.join(root, "router"),
    }),
    first,
  );
  assert.notEqual(first, second);
});

test("resolveExternalCodex finds codex on PATH", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const binDir = path.join(root, "bin");
  const codex = await writeExecutable(binDir, "codex");

  assert.equal(
    resolveExternalCodex({
      env: { PATH: binDir },
      routerExecutablePath: path.join(root, "router"),
    }),
    codex,
  );
});

test("resolveExternalCodex falls back to installed Codex.app resources", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const codex = await writeExecutable(root, "codex");

  assert.equal(
    resolveExternalCodex({
      env: { PATH: "" },
      resolveCodexApp: () => ({ codexPath: codex }),
      routerExecutablePath: path.join(root, "router"),
    }),
    codex,
  );
});

test("resolveExternalCodex fails when no external codex is available", () => {
  assert.throws(
    () =>
      resolveExternalCodex({
        env: { PATH: "" },
        resolveCodexApp: () => {
          throw Error("missing app");
        },
        routerExecutablePath: "/tmp/o3-app-server-router",
      }),
    /Unable to locate external Codex CLI/,
  );
});

async function writeExecutable(directory, name) {
  await mkdir(directory, { recursive: true });
  const filePath = path.join(directory, name);
  await writeFile(filePath, "#!/bin/sh\nexit 0\n", "utf8");
  await chmod(filePath, 0o755);
  return filePath;
}
