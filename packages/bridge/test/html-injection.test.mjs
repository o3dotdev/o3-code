import assert from "node:assert/strict";
import test from "node:test";

import { injectBridgeShell } from "../src/html-injection.mjs";

const html = `<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Security-Policy" content="connect-src 'self' https://cdn.openai.com;" />
  </head>
  <body></body>
</html>`;

test("injectBridgeShell injects the bridge shim before renderer scripts", () => {
  const injected = injectBridgeShell(html);

  assert.match(injected, /<script src="\/bridge-shim\.js"><\/script>/);
  assert.equal(injected.includes("/bridge-shim.js?debug=1"), false);
});

test("injectBridgeShell supports debug shim loading", () => {
  const injected = injectBridgeShell(html, { debug: true });

  assert.match(injected, /<script src="\/bridge-shim\.js\?debug=1"><\/script>/);
});

test("injectBridgeShell relaxes CSP for bridge websocket traffic", () => {
  const injected = injectBridgeShell(html);

  assert.match(injected, /https:\/\/cdn\.openai\.com ws: wss:;/);
});

test("injectBridgeShell makes mac Electron chrome opaque in Bridge Mode", () => {
  const injected = injectBridgeShell(html);

  assert.match(injected, /o3-code-bridge-shell-style/);
  assert.match(injected, /app-shell-left-panel/);
  assert.match(injected, /color-token-editor-background/);
  assert.match(injected, /background: inherit !important/);
  assert.match(injected, /--spacing-token-safe-header-left: 0px !important/);
  assert.match(injected, /--spacing-token-safe-header-right: 0px !important/);
  assert.match(injected, /header\[data-app-shell-header-edge-scroll\]/);
  assert.match(injected, /padding-inline-start: 0\.625rem !important/);
  assert.match(injected, /-webkit-app-region: no-drag !important/);
});
