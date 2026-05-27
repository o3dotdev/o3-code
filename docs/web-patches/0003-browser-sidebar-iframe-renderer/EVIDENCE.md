# Browser Sidebar Iframe Renderer Evidence

## Current Release

- Source app: Codex `26.519.81530`
- Build number: `3178`
- Mirrored Web Client asset:
  `apps/web/app/webview/assets/browser-sidebar-manager.js`

## Anchors

- Browser sidebar manager creates the page element in class `L`:
  `document.createElement("webview")` in the derived baseline.
- Browser host snapshots enter through `setSnapshot`, with
  `r.tabType === e.WEB` creating or reusing the sidebar page element.
- Visible browser tab attachment remains owned by
  `thread-side-panel-tabs-BL2fcy4d.js` through `Ct.getWebview(...)` and
  `.sync(...)`.

## Patch Shape

- Replaced the browser-side `<webview>` element with an `<iframe>`.
- Added iframe permissions and a marker attribute for inspection.
- Added `setUrl` so snapshot URL changes update the displayed frame.
- Added loopback-host rewrite for remote browser clients that are already
  loading the Mirrored Web Client through a non-loopback host.
- Added a bridge-side `/bridge/browser-page-screenshot` endpoint backed by CDP
  `Page.captureScreenshot` against the real Electron browser page target.
- Added a non-interactive image paint overlay that polls the screenshot endpoint
  while the browser panel is visible.

## Validation

- `node --check apps/web/app/webview/assets/browser-sidebar-manager.js` passed.
- `node --check packages/bridge/src/cdp-client.mjs` passed.
- `node --check packages/bridge/src/sidecar.mjs` passed.
- `pnpm web-patches:check` passed.
- `pnpm format:check` passed.
- `pnpm --dir packages/bridge test` passed: 59 tests.

## Known Limits

- Pages that deny framing with `X-Frame-Options` or CSP `frame-ancestors` render
  through the screenshot paint layer, not through the iframe.
- The screenshot paint layer is observational. Direct page interaction still
  depends on the underlying iframe for frameable pages or future CDP input
  forwarding work for iframe-blocking pages.
- The loopback hostname rewrite only helps when the target server is reachable
  from the browser device at the same host and port. It does not add a proxy and
  does not change Web Access exposure.
