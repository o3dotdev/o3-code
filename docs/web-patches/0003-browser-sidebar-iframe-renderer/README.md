# Browser Sidebar Iframe Renderer

## Status

Active.

## Intent

The Mirrored Web Client runs in ordinary browsers, where Electron's `<webview>`
tag does not render page contents. This patch replaces the browser-side sidebar
page element with an iframe, keeps its `src` synced from host snapshots, and
rewrites loopback page hosts to the current web client host when the web client
is reached from another device.

## Current Scope

This is a browser-only rendering patch. It does not change the Desktop
Reconstruction browser sidebar runtime and does not expose Web Access over LAN or
Tailscale.
