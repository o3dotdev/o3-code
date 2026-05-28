# Browser Shell Branding

## Status

Active.

## Intent

Identify the browser-served O3 Code shell as O3 Code before the renderer loads. This patch owns browser title, install metadata, favicon links, and the startup splash mark served through Bridge Mode. The startup mark is injected as inline SVG so first paint does not depend on a CSS background image.

## Scope

- Applies only to browser-served shell metadata and pre-React startup branding.
- Leaves Electron desktop webview source and broad in-app Codex product copy unchanged.
- Uses repo-owned Bridge HTML injection instead of patching copied renderer assets.
