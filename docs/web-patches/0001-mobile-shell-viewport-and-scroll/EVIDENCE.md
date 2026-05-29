# Mobile Shell Viewport And Scroll Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Source version: `26.527.30818`
- Source build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Discovered Sites

- Browser shell HTML injection: `packages/bridge/src/html-injection.mjs`
- Browser bridge shim: `packages/bridge/public/bridge-shim.js`
- Sidecar serving path: `packages/bridge/src/sidecar.mjs`

These are repo-owned support files, so the patch survives `pnpm derive:web`
without a marked region in the derived asset tree.

## Patch Shape

- Replaces served viewport metadata with strict mobile viewport metadata.
- Adds shell-lock CSS for top-level browser page containers.
- Bridge shim recovers top-level page scroll drift; reversed thread transcript
  scrollers are preserved.

## Validation

- The viewport injection regex `VIEWPORT_META_RE` still matches the refreshed
  derived `apps/web/app/webview/index.html` `<meta name="viewport" ...>` tag.
- `pnpm --filter @o3dotdev/code-bridge test` passed (63 tests).
- `node --check packages/bridge/public/bridge-shim.js` passed.
- `pnpm web-patches:check` passed (5 copied-asset Web Patch regions; this patch
  adds none because it lives in repo-owned bridge code).
- `pnpm format:check` passed.

## Unresolved Risk

- Manual iPad Safari / installed PWA validation of selection/copy and accessory
  bar viewport drift is still recommended; automated tests cannot reproduce
  Safari gesture behavior exactly.
