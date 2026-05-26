# Serve Webview Assets With Bridge Shim

The Mirrored Web Client will initially serve the preserved Webview Assets from `apps/desktop/app/webview` and inject a repo-owned Bridge Shim instead of creating a separate frontend build. The shim provides the browser equivalent of the Electron preload surface and forwards renderer messages through Bridge Mode.

This keeps the web UI tied to the same source material as the Desktop Reconstruction and avoids a second frontend product surface. If preserved renderer code depends on Electron-only behavior that cannot be shimmed, that specific gap can become a Patch.
