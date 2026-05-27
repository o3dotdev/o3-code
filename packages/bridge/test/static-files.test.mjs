import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import {
  resolveWebviewPath,
  shouldServeSpaFallback,
} from "../src/static-files.mjs";

test("resolveWebviewPath maps root to index within the webview dir", () => {
  const webviewDir = path.resolve("/tmp/o3-webview");

  assert.equal(
    resolveWebviewPath({ urlPathname: "/", webviewDir }),
    path.join(webviewDir, "index.html"),
  );
});

test("resolveWebviewPath rejects traversal outside the webview dir", () => {
  const webviewDir = path.resolve("/tmp/o3-webview");

  assert.equal(
    resolveWebviewPath({ urlPathname: "/../secret.txt", webviewDir }),
    null,
  );
});

test("shouldServeSpaFallback allows clean app routes", () => {
  assert.equal(
    shouldServeSpaFallback({
      method: "GET",
      urlPathname: "/settings/web-access",
    }),
    true,
  );
});

test("shouldServeSpaFallback rejects asset-like and non-GET routes", () => {
  assert.equal(
    shouldServeSpaFallback({
      method: "GET",
      urlPathname: "/assets/missing.js",
    }),
    false,
  );
  assert.equal(
    shouldServeSpaFallback({
      method: "POST",
      urlPathname: "/settings/web-access",
    }),
    false,
  );
});
