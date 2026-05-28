import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

import { normalizeDefaultStartArgv } from "../dist/bin.mjs";
import packageJson from "../package.json" with { type: "json" };

test("bare invocation defaults to start", () => {
  assert.deepEqual(normalizeDefaultStartArgv(["node", "o3-code"]), [
    "node",
    "o3-code",
    "start",
  ]);
});

test("options on bare invocation are passed to start", () => {
  assert.deepEqual(
    normalizeDefaultStartArgv(["node", "o3-code", "--foreground"]),
    ["node", "o3-code", "start", "--foreground"],
  );
});

test("explicit commands are preserved", () => {
  assert.deepEqual(
    normalizeDefaultStartArgv(["node", "o3-code", "logs", "--follow"]),
    ["node", "o3-code", "logs", "--follow"],
  );
});

test("root help is preserved", () => {
  assert.deepEqual(normalizeDefaultStartArgv(["node", "o3-code", "--help"]), [
    "node",
    "o3-code",
    "--help",
  ]);
});

test("root version reports package version", () => {
  const output = execFileSync(process.execPath, ["dist/bin.mjs", "--version"], {
    encoding: "utf8",
  });
  assert.equal(output.trim(), packageJson.version);
});
