# Browser Shell Branding Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Source version: `26.519.81530`
- Source build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Discovered Sites

- Browser shell HTML injection: `packages/bridge/src/html-injection.mjs`
- Bridge HTML injection tests: `packages/bridge/test/html-injection.test.mjs`
- Upstream browser shell title and startup loader: `apps/web/app/webview/index.html`

## Patch Shape

- Added Bridge injection for O3 Code browser title, app metadata, favicon, and Apple touch icon.
- Added Bridge-injected startup loader CSS that uses the O3 Code mark and hides the upstream Codex startup mark before React loads.
- Added bridge test assertions for title, metadata, icon links, and startup branding CSS.
- Added no copied-asset Web Patch markers because this patch is implemented in repo-owned Bridge code.

## Validation

- `node --check packages/bridge/src/html-injection.mjs` passed.
- `pnpm --filter @o3dotdev/code-bridge test` passed.
- `pnpm web-patches:check` passed.
- `pnpm format:check` passed.

## Unresolved Risk

- Manual Web Access validation is still required to confirm the browser tab favicon and startup splash appearance in the real sidecar-served page.
