# 0007 Web Access Browser Sidebar Paint

## Status

Active.

## Intent

Expose a narrow desktop-owned capture method for Bridge Mode so the Mirrored Web
Client can display the real Electron browser sidebar guest when normal browser
iframes are blocked by site frame policy or CSP.

The patch does not make Web access remotely reachable. It only lets the
localhost Bridge Sidecar ask the already-running Desktop Reconstruction for a
PNG capture of the sidebar page for the current conversation.

When the sidebar guest is hidden and cannot be captured directly, the Desktop
process uses a short-lived offscreen Electron renderer for the same URL so
iframe-blocking pages still have pixels in the Mirrored Web Client.
