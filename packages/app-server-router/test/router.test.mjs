import assert from "node:assert/strict";
import { PassThrough, Readable, Writable } from "node:stream";
import { chmod, mkdir, mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { proxyToExternalCodex } from "../src/router.mjs";

test("proxyToExternalCodex proxies bytes and args to external codex", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const binDir = path.join(root, "bin");
  await writeExecutable(
    binDir,
    "codex",
    ["#!/bin/sh", "printf 'args:%s\\n' \"$*\" >&2", "/bin/cat", ""].join("\n"),
  );

  const stdin = new PassThrough();
  const stdout = createCollectingWritable();
  const stderr = createCollectingWritable();
  stdin.end("json-rpc-line\n");

  const result = await proxyToExternalCodex({
    argv: ["app-server", "--analytics-default-enabled"],
    env: { ...process.env, PATH: binDir },
    stdin,
    stdout,
    stderr,
    routerExecutablePath: path.join(root, "o3-app-server-router"),
  });

  assert.deepEqual(result, { code: 0, signal: null });
  assert.equal(stdout.body, "json-rpc-line\n");
  assert.equal(stderr.body, "args:app-server --analytics-default-enabled\n");
});

test("proxyToExternalCodex propagates child exit code", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const binDir = path.join(root, "bin");
  await writeExecutable(binDir, "codex", "#!/bin/sh\nexit 7\n");

  const result = await proxyToExternalCodex({
    argv: ["--version"],
    env: { ...process.env, PATH: binDir },
    stdin: Readable.from([]),
    stdout: createCollectingWritable(),
    stderr: createCollectingWritable(),
    routerExecutablePath: path.join(root, "o3-app-server-router"),
  });

  assert.deepEqual(result, { code: 7, signal: null });
});

async function writeExecutable(directory, name, body) {
  await mkdir(directory, { recursive: true });
  const filePath = path.join(directory, name);
  await writeFile(filePath, body, "utf8");
  await chmod(filePath, 0o755);
  return filePath;
}

function createCollectingWritable() {
  const chunks = [];
  const writable = new Writable({
    write(chunk, _encoding, callback) {
      chunks.push(Buffer.from(chunk));
      callback();
    },
  });

  Object.defineProperty(writable, "body", {
    get() {
      return Buffer.concat(chunks).toString("utf8");
    },
  });

  return writable;
}
