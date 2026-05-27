import assert from "node:assert/strict";
import test from "node:test";

import {
  STRICT_VIEWPORT_CONTENT,
  injectBridgeShell,
} from "../src/html-injection.mjs";

const html = `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  assert.match(injected, /--o3-code-viewport-height/);
  assert.match(injected, /--o3-code-shell-height/);
  assert.match(injected, /--o3-code-measured-viewport-top-offset/);
  assert.match(injected, /--o3-code-viewport-bottom-offset/);
  assert.match(injected, /--o3-code-viewport-bottom-inset/);
  assert.match(injected, /html,\nbody,\n#root/);
  assert.match(injected, /html body\[data-scroll-locked\]/);
  assert.match(injected, /@media \(hover: none\) and \(pointer: coarse\)/);
  assert.match(injected, /width: 100vw !important/);
  assert.match(injected, /max-width: 100vw !important/);
  assert.match(injected, /zoom: 1 !important/);
  assert.match(injected, /o3-code-sidebar-project-menu-action/);
  assert.match(injected, /o3-code-sidebar-project-new-chat-action/);
  assert.match(injected, /opacity: 1 !important/);
  assert.match(injected, /o3-code-sidebar-project-status-overlay/);
  assert.match(injected, /display: none !important/);
  assert.match(
    injected,
    /@media \(max-width: 700px\), \(hover: none\) and \(pointer: coarse\)/,
  );
  assert.match(injected, /o3-code-request-input-option-description/);
  assert.match(injected, /o3-code-request-input-option-info/);
  assert.match(injected, /o3-code-request-input-option-shortcuts/);
  assert.match(injected, /o3-code-request-input-option-label/);
  assert.match(injected, /white-space: normal !important/);
  assert.match(injected, /app-shell-left-panel/);
  assert.match(injected, /color-token-editor-background/);
  assert.match(injected, /background: inherit !important/);
  assert.match(injected, /--spacing-token-safe-header-left: 0px !important/);
  assert.match(injected, /--spacing-token-safe-header-right: 0px !important/);
  assert.match(injected, /header\[data-app-shell-header-edge-scroll\]/);
  assert.match(injected, /padding-inline-start: 0\.625rem !important/);
  assert.match(injected, /-webkit-app-region: no-drag !important/);
});

test("injectBridgeShell replaces packaged viewport metadata with strict mobile viewport", () => {
  const injected = injectBridgeShell(html);

  assert.match(
    injected,
    new RegExp(
      `<meta name="viewport" content="${escapeRegExp(STRICT_VIEWPORT_CONTENT)}" />`,
    ),
  );
  assert.doesNotMatch(injected, /width=device-width, initial-scale=1\.0/);
});

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
