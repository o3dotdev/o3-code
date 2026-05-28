# Mobile Request Input Option Descriptions Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Source version: `26.519.81530`
- Source build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Discovered Sites

- Request-input option row renderer: `apps/web/app/webview/assets/pending-request-item-panel.js`
- Browser shell CSS injection: `packages/bridge/src/html-injection.mjs`
- Bridge HTML injection tests: `packages/bridge/test/html-injection.test.mjs`

## Patch Shape

- Added Web Patch markers with id `mobile-request-input-option-descriptions` around the request-input option row children changed in the Mirrored Web Client asset.
- Added stable `o3-code-request-input-option-*` classes for option body, label, info icon, inline description, and shortcut arrows.
- Preserved the existing hover tooltip while adding a hidden inline description span.
- Added bridge-injected CSS that shows inline descriptions and wraps labels on narrow or coarse-pointer browser layouts, while hiding hover-only info icons and selected-row shortcut arrows there.
- Added bridge test assertions for the injected media query and selectors.

## Validation

- `node --check apps/web/app/webview/assets/pending-request-item-panel.js` passed.
- `node --check packages/bridge/src/html-injection.mjs` passed.
- `pnpm --dir packages/bridge test` passed.
- `pnpm web-patches:check` passed with 5 total copied-asset Web Patch regions, including this patch's request-input option row region.
- `pnpm format:check` passed.
- Browser fixture validation through a temporary loopback server passed at a mobile viewport: inline description computed as `display: block`, info icon and shortcut arrows computed as `display: none`, and label whitespace computed as `normal`.

## Unresolved Risk

- Manual Web Access validation against a freshly restarted Bridge Sidecar is still required to confirm real plan-mode prompt layout at desktop and mobile/coarse browser sizes. The currently running Web Access sidecar on port `51304` was started before this patch, so it did not include the updated bridge-injected stylesheet.

## Refresh Validation 2026-05-28

- `pnpm derive:web` rebuilt the Mirrored Web Client Asset Tree and the
  `mobile-request-input-option-descriptions` generated-asset region was
  reapplied in `apps/web/app/webview/assets/pending-request-item-panel.js`.
- `node --check apps/web/app/webview/assets/pending-request-item-panel.js`
  passed.
- `pnpm --dir packages/bridge test` passed: 63 tests.
- `pnpm web-patches:check` passed with 5 total Web Patch regions.
- `pnpm format:check` passed.
