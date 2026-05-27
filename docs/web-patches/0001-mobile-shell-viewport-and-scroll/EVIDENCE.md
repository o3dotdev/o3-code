# Mobile Shell Viewport And Scroll Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Source version: `26.519.81530`
- Source build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Discovered Sites

- Browser shell HTML injection: `packages/bridge/src/html-injection.mjs`
- Browser bridge shim: `packages/bridge/public/bridge-shim.js`
- Sidecar serving path: `packages/bridge/src/sidecar.mjs`

## Patch Shape

- Replaced served viewport metadata with strict mobile viewport metadata.
- Added shell-lock CSS for top-level browser page containers.
- Added bridge shim recovery for top-level page scroll drift after viewport, pointer/click/touch, context menu, selection, focus, page show, orientation, scroll-lock, popover, and `thread-stream-state-changed` changes.
- Added stable touch viewport baseline handling so iOS accessory/formatting bars and small visual viewport decreases do not resize the shell, while keyboard-sized occlusion still shrinks the shell.
- Added tests proving reversed transcript scrollers are preserved while top-level page drift is reset, including outbound and inbound thread stream state updates.

## Validation

- `pnpm --dir packages/bridge test` passed.
- `node --check packages/bridge/public/bridge-shim.js` passed.
- `pnpm web-patches:check` passed with 5 total copied-asset Web Patch regions; this patch adds no copied-asset marker region because it is implemented in repo-owned bridge code.
- `pnpm format:check` passed.
- `git diff --check` passed.

## Unresolved Risk

- Manual iPad Safari or installed PWA validation is still required because automated unit tests cannot reproduce Safari text selection/copy and accessory-bar viewport drift exactly.
