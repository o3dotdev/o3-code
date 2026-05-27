# Browser Sidebar Iframe Renderer

## Status

Active.

## Intent

The Mirrored Web Client runs in ordinary browsers, where Electron's `<webview>`
tag does not render page contents and many real sites block iframing. This patch
replaces the browser-side sidebar page element with an iframe for frameable
local pages, keeps its `src` synced from host snapshots, and enables a
screenshot paint layer from the real Electron browser sidebar guest only for
known iframe-blocking pages.

## Current Scope

This is a browser rendering patch plus repo-owned bridge support. Iframe-blocked
pages depend on Desktop Reconstruction Patch
`0007-web-access-browser-sidebar-paint`. It does not expose Web Access over LAN
or Tailscale.
