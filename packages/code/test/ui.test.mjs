import assert from "node:assert/strict";
import test from "node:test";

import { renderStartupProgressBar } from "../dist/bin.mjs";

test("startup progress bar renders bounded phase progress", () => {
  assert.equal(renderStartupProgressBar(0, 7, 10), "[----------]");
  assert.equal(renderStartupProgressBar(3, 7, 10), "[####------]");
  assert.equal(renderStartupProgressBar(7, 7, 10), "[##########]");
  assert.equal(renderStartupProgressBar(9, 7, 10), "[##########]");
});
