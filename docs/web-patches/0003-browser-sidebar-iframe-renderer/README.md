# Browser Sidebar Iframe Renderer

## Status

Active.

## Intent

The Mirrored Web Client runs in ordinary browsers, where Electron's `<webview>`
tag does not render page contents and many real sites block iframing. This patch
replaces the browser-side sidebar page element with an iframe for frameable
local pages, keeps its `src` synced from host snapshots, and overlays a CDP
screenshot paint layer from the real Electron browser target so blocked pages
still display.

## Current Scope

This is a browser-only rendering patch plus repo-owned bridge support. It does
not change the Desktop Reconstruction browser sidebar runtime and does not expose
Web Access over LAN or Tailscale.
