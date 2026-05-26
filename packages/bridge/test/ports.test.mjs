import assert from "node:assert/strict";
import test from "node:test";

import { allocateLoopbackPort, parsePortOverride } from "../src/ports.mjs";

test("allocateLoopbackPort returns a dynamic loopback TCP port", async () => {
  const port = await allocateLoopbackPort();

  assert.equal(Number.isInteger(port), true);
  assert.equal(port > 0, true);
  assert.equal(port <= 65535, true);
});

test("parsePortOverride accepts empty values and valid ports", () => {
  assert.equal(parsePortOverride(undefined, "PORT"), null);
  assert.equal(parsePortOverride("", "PORT"), null);
  assert.equal(parsePortOverride(" 49152 ", "PORT"), 49152);
});

test("parsePortOverride rejects invalid values", () => {
  assert.throws(() => parsePortOverride("0", "PORT"), /PORT/);
  assert.throws(() => parsePortOverride("65536", "PORT"), /PORT/);
  assert.throws(() => parsePortOverride("abc", "PORT"), /PORT/);
});
