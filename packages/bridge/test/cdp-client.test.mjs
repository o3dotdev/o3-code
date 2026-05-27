import assert from "node:assert/strict";
import test from "node:test";

import {
  parseImageDataUrl,
  pickBrowserPageTarget,
  withTimeout,
} from "../src/cdp-client.mjs";

test("pickBrowserPageTarget ignores the bridge host renderer", () => {
  const target = pickBrowserPageTarget({
    targetUrl: "file:///repo/apps/desktop/app/webview/index.html",
    url: "https://example.test/",
    targets: [
      {
        type: "page",
        url: "file:///repo/apps/desktop/app/webview/index.html",
        webSocketDebuggerUrl: "ws://host-renderer",
      },
      {
        type: "page",
        url: "https://example.test/",
        webSocketDebuggerUrl: "ws://browser-page",
      },
    ],
  });

  assert.equal(target.webSocketDebuggerUrl, "ws://browser-page");
});

test("pickBrowserPageTarget falls back to same hostname after redirects", () => {
  const target = pickBrowserPageTarget({
    targetUrl: "file:///repo/apps/desktop/app/webview/index.html",
    url: "https://google.com/",
    targets: [
      {
        type: "page",
        url: "https://www.google.com/search?q=o3",
        webSocketDebuggerUrl: "ws://google-page",
      },
    ],
  });

  assert.equal(target.webSocketDebuggerUrl, "ws://google-page");

  const exactHostTarget = pickBrowserPageTarget({
    targetUrl: "file:///repo/apps/desktop/app/webview/index.html",
    url: "https://www.google.com/",
    targets: [
      {
        type: "page",
        url: "https://www.google.com/search?q=o3",
        webSocketDebuggerUrl: "ws://google-page",
      },
    ],
  });

  assert.equal(exactHostTarget.webSocketDebuggerUrl, "ws://google-page");
});

test("pickBrowserPageTarget rejects unsupported urls", () => {
  const target = pickBrowserPageTarget({
    targetUrl: "file:///repo/apps/desktop/app/webview/index.html",
    url: "about:blank",
    targets: [
      {
        type: "page",
        url: "about:blank",
        webSocketDebuggerUrl: "ws://blank-page",
      },
    ],
  });

  assert.equal(target, null);
});

test("parseImageDataUrl extracts png payloads", () => {
  assert.deepEqual(parseImageDataUrl("data:image/png;base64,aGVsbG8="), {
    data: "aGVsbG8=",
    mimeType: "image/png",
  });
});

test("parseImageDataUrl rejects non-base64 image urls", () => {
  assert.equal(parseImageDataUrl("https://example.test/image.png"), null);
  assert.equal(parseImageDataUrl("data:image/png,not-base64"), null);
});

test("withTimeout rejects stalled promises", async () => {
  await assert.rejects(
    withTimeout(new Promise(() => {}), 1, "timed out"),
    /timed out/,
  );
});
