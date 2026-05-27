# Mobile Shell Viewport And Scroll Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Source version: `26.519.81530`
- Source build: `3178`

## Discovered Sites

- Browser shell HTML injection: `packages/bridge/src/html-injection.mjs`
- Browser bridge shim: `packages/bridge/public/bridge-shim.js`
- Sidecar serving path: `packages/bridge/src/sidecar.mjs`

## Patch Shape

- Replaced served viewport metadata with strict mobile viewport metadata.
- Added shell-lock CSS for top-level browser page containers.
- Added bridge shim recovery for top-level page scroll drift after viewport, pointer/click/touch, context menu, selection, focus, page show, orientation, scroll-lock, and popover changes.
- Added stable touch viewport baseline handling so iOS accessory/formatting bars and small visual viewport decreases do not resize the shell, while keyboard-sized occlusion still shrinks the shell.
- Added tests proving reversed transcript scrollers are preserved while top-level page drift is reset.

## Validation

- `pnpm --dir packages/bridge test` passed.
- `node --check packages/bridge/public/bridge-shim.js` passed.
- `pnpm web-patches:check` passed with 0 copied-asset marker regions, as this patch is implemented in repo-owned bridge code.
- `pnpm format:check` passed.
- `git diff --check` passed.

## Unresolved Risk

- Manual iPad Safari or installed PWA validation is still required because automated unit tests cannot reproduce Safari text selection/copy and accessory-bar viewport drift exactly.
