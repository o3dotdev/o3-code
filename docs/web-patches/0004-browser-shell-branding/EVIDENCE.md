# Browser Shell Branding Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Source version: `26.527.30818`
- Source build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Discovered Sites

- Browser shell HTML injection: `packages/bridge/src/html-injection.mjs`
- Bridge HTML injection tests: `packages/bridge/test/html-injection.test.mjs`
- Upstream browser shell title and startup loader:
  `apps/web/app/webview/index.html`

This patch is implemented entirely in repo-owned bridge code, so it survives
`pnpm derive:web` without a marked region in the derived asset tree.

## Patch Shape

- Bridge injection for O3 Code browser title, app metadata, favicon, and Apple
  touch icon.
- Bridge injection that replaces the upstream pre-React startup mark with an
  inline O3 Code SVG before React loads.
- Bridge Shell CSS and Bridge Shim fallback text for long pre-React startup
  waits.

## Validation

- The refreshed derived `apps/web/app/webview/index.html` still exposes the
  anchors the injection targets:
  - `<title>Codex</title>` (matched by `TITLE_RE`, rewritten to `O3 Code`).
  - `startup-loader__logo` / `startup-loader__base` / `startup-loader__overlay`
    (matched by the startup-loader replacement regex).
- `node --check packages/bridge/src/html-injection.mjs` passed.
- `pnpm --filter @o3dotdev/code-bridge test` passed (63 tests).
- `pnpm web-patches:check` passed.
- `pnpm format:check` passed.

## Unresolved Risk

- Manual Web Access validation of the live browser tab favicon and startup splash
  appearance in the sidecar-served page is still recommended.
