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
- Added a bridge-side `/bridge/browser-page-screenshot` endpoint that first
  asks the Desktop process for browser-sidebar paint through patch
  `0007-web-access-browser-sidebar-paint`, then falls back to CDP target
  capture when Electron exposes a separate page target.
- Added a non-interactive image paint overlay that polls the screenshot endpoint
  only for known iframe-blocking hosts. Frameable pages stay on the live iframe
  surface.

## Validation

- `node --check apps/web/app/webview/assets/browser-sidebar-manager.js` passed.
- `node --check packages/bridge/src/cdp-client.mjs` passed.
- `node --check packages/bridge/src/sidecar.mjs` passed.
- `pnpm web-patches:check` passed.
- `pnpm format:check` passed.
- `curl --max-time 20 http://127.0.0.1:51304/bridge/browser-page-screenshot?conversationId=new-conversation&url=https%3A%2F%2Fwww.google.com%2F`
  returned `HTTP/1.1 200 OK` with `content-type: image/png`.
- After the offscreen debugger fallback update, the captured Google paint was
  verified as `PNG image data, 1280 x 900`.
- `curl -I -L https://t3.codes` showed no `X-Frame-Options` or
  `frame-ancestors` response header, so this host should render through the live
  iframe path rather than screenshot paint.
- Browser verification opened `http://127.0.0.1:51304/` and confirmed the
  Mirrored Web Client loaded.
- `pnpm --dir packages/bridge test` passed: 62 tests.
- `pnpm web-patches:check` passed: 1182 web asset files, 19 Web Patch regions.
- `pnpm normalize:check` passed: 1260 files, no changes needed.
- `pnpm format:check` passed.
- `git diff --check` passed.

## Known Limits

- Known pages that deny framing with `X-Frame-Options` or CSP `frame-ancestors`
  render through the screenshot paint layer, not through the iframe. Other pages
  keep live iframe rendering as the primary path.
- The screenshot paint layer is observational. Direct page interaction still
  depends on the underlying iframe for frameable pages or future CDP input
  forwarding work for iframe-blocking pages.
- The loopback hostname rewrite only helps when the target server is reachable
  from the browser device at the same host and port. It does not add a proxy and
  does not change Web Access exposure.
