# Browser Sidebar Iframe Renderer SOP

## Goal

Render browser sidebar content inside the Mirrored Web Client on ordinary
browsers, including iPad Safari/PWA mode, by using an iframe instead of
Electron's `<webview>` tag and by updating the frame URL whenever host browser
state snapshots change.

## Non-Goals

- Do not mutate Desktop Reconstruction Webview Assets under
  `apps/desktop/app/webview`.
- Do not change the Electron browser sidebar, BrowserView, or browser-use host
  runtime.
- Do not add a generic HTTP proxy, rewrite arbitrary page content, or bypass
  `X-Frame-Options` / `frame-ancestors`.
- Do not expose Web Access over LAN, Tailscale, or public interfaces.

## Allowed Surfaces

- `apps/web/app/webview/assets/browser-sidebar-manager.js`
- `docs/web-patches/0003-browser-sidebar-iframe-renderer/**`
- `docs/web-patches/README.md`

## Discovery

1. Confirm `apps/web/app/webview/assets/browser-sidebar-manager.js` still
   defines the browser sidebar manager class that creates
   `document.createElement("webview")`.
2. Confirm `setSnapshot` still receives `browser-sidebar-state` snapshots and
   creates the hidden page element when `snapshot.tabType === WEB`.
3. Confirm the visible browser tab still attaches the manager's element through
   `thread-side-panel-tabs-*.js` and sends browser commands to the desktop host.

## Application

1. In the Mirrored Web Client asset only, change the browser sidebar page element
   from `<webview>` to `<iframe>`.
2. Add iframe attributes needed by common local apps: no border, fullscreen,
   camera, microphone, geolocation, and clipboard permissions.
3. Add a `setUrl` method and call it from `setSnapshot` so browser-side display
   follows host navigation, reloads, and address-bar changes.
4. Preserve empty URLs as `about:blank`.
5. When the target URL uses a loopback hostname and the web client itself is
   loaded from a non-loopback host, rewrite only the hostname to
   `window.location.hostname`. This lets an iPad that reached the Mac through an
   already-approved tunnel try the same target port on that Mac instead of
   resolving `localhost` on the iPad.
6. Wrap all copied asset changes with
   `browser-sidebar-iframe-renderer` Web Patch markers.

## Validation

- Run `node --check apps/web/app/webview/assets/browser-sidebar-manager.js`.
- Run `pnpm web-patches:check`.
- Run `pnpm format:check`.
- Validate Web Access in a desktop browser and in iPad Safari/PWA mode against a
  local test page that allows framing. Navigate through the browser sidebar and
  verify page content appears and URL changes update the iframe.

## Failure Conditions

- Stop if upstream replaces the browser sidebar with a browser-native renderer.
- Stop if the desired target page blocks iframe embedding; that requires a
  separate product/security decision about proxying, not this patch.
- Stop if iPad access requires changing Web Access from loopback-only serving.
