import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import {
  defaultMirroredWebviewDir,
  repoRoot,
  resolveBridgeWebviewDir,
} from "../src/paths.mjs";

test("Bridge Sidecar defaults to the derived Mirrored Web Client Asset Tree", () => {
  assert.equal(
    defaultMirroredWebviewDir,
    path.join(repoRoot, "apps", "web", "app", "webview"),
  );
  assert.equal(resolveBridgeWebviewDir({}), defaultMirroredWebviewDir);
});

test("Bridge Sidecar accepts an explicit webview directory override", () => {
  assert.equal(
    resolveBridgeWebviewDir({ O3_CODE_BRIDGE_WEBVIEW_DIR: "tmp/webview" }),
    path.resolve("tmp/webview"),
  );
});
