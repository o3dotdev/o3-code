# SOP

## Goal

Reapply the desktop-owned browser sidebar paint capture used by Bridge Mode
after a Source Refresh. The Bridge Sidecar must be able to request a screenshot
of the real Electron browser sidebar guest for one conversation without relying
on Electron remote-debugging target discovery for guest webviews.

## Non-Goals

- Do not expose browser page pixels outside the existing localhost Bridge
  Sidecar path.
- Do not replace the native Electron browser sidebar runtime.
- Do not make iframe-blocking pages directly interactive in the Mirrored Web
  Client; this patch is the desktop capture primitive only.
- Do not broaden the preload bridge beyond this one capture method.

## Dependencies

Apply after Patch 0006 Web Access Settings.

## Discovery

1. Find `apps/desktop/app/.vite/build/preload.js` near the object exposed as
   `electronBridge`.
2. Find Desktop Reconstruction main IPC setup in
   `apps/desktop/app/.vite/build/main.js` around `function AW({`.
3. Find the browser sidebar manager method
   `captureScreenshotToClipboard(ownerWebContents, conversationId)`.
4. Confirm that browser sidebar guest state is still reachable through
   `tA(this.windows, ownerWebContents, conversationId)?.view.webContents`.

## Application

1. Patch `preload.js` with `web-access-browser-sidebar-paint` markers to expose
   `electronBridge.captureBrowserSidebarPaint(payload)`.
2. Patch `main.js` with `web-access-browser-sidebar-paint` markers to register
   `o3-code:browser-sidebar:capture-paint` through trusted IPC only.
3. Patch the browser sidebar manager with `capturePageForWebAccess(...)` that
   resolves the guest `webContents` and returns a
   `data:image/png;base64,...` URL plus URL/title/dimensions.
4. Capture in this order:
   - Guest `webContents.debugger` with `Page.captureScreenshot`.
   - A short-lived offscreen Electron `BrowserWindow` pointed at the same URL
     for hidden-guest or iframe-blocked pages.
   - Guest `webContents.capturePage()` as the final fallback.
5. Return `null` for missing, destroyed, or empty page captures and log/report
   capture failures as non-fatal.

## Validation

- `node --check apps/desktop/app/.vite/build/preload.js`
- `node --check apps/desktop/app/.vite/build/main.js`
- `pnpm normalize:check`
- Run Bridge Mode and verify
  `/bridge/browser-page-screenshot?conversationId=...&url=https://www.google.com/`
  returns `200 image/png` after the Electron sidebar has navigated to Google.

## Failure Conditions

Stop for human review if the browser sidebar no longer stores guest
`webContents` by owner/conversation or if preload no longer exposes an
`electronBridge` object that the Bridge Sidecar can call through the visible
renderer.
