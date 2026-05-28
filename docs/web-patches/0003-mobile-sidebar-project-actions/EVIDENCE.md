# Mobile Sidebar Project Actions Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Source version: `26.519.81530`
- Source build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`
- Mirrored Web Client asset: `apps/web/app/webview/assets/app-main.js`

## Discovered Sites

- Project action renderer: `function SC(e)` in `apps/web/app/webview/assets/app-main.js`.
- Local and remote project menu wrappers use `opacity-0 group-hover/folder-row:opacity-100` through the shared project action class expression.
- The new-chat wrapper uses the same hover-only project action class expression.
- The collapsed/active project status overlay occupies the same right-side slot and hides on project-row hover.
- Browser shell CSS injection: `packages/bridge/src/html-injection.mjs`.
- Bridge HTML injection tests: `packages/bridge/test/html-injection.test.mjs`.

## Patch Shape

- Added Web Patch markers with id `mobile-sidebar-project-actions` around the project action class additions in the Mirrored Web Client asset.
- Added stable `o3-code-sidebar-project-*` classes for project menu action wrappers, the new-chat action wrapper, and the project status overlay.
- Preserved existing upstream hover/focus and dropdown-open visibility classes.
- Added bridge-injected coarse-pointer CSS that forces project menu and new-chat actions visible and hides the status overlay on touch layouts.
- Added bridge test assertions for the injected selectors and touch-only CSS.

## Validation

- `node --check apps/web/app/webview/assets/app-main.js` passed.
- `node --check packages/bridge/src/html-injection.mjs` passed.
- `pnpm --dir packages/bridge test` passed.
- `pnpm web-patches:check` passed with 5 total copied-asset Web Patch regions, including this patch's four project action class regions.
- `pnpm format:check` passed.
- Web Access CSS smoke passed through a temporary Bridge Sidecar at `http://127.0.0.1:51741/`: the served page contained `#o3-code-bridge-shell-style`, the coarse-pointer media query, the project menu/new-chat opacity rules, and the status-overlay `display: none` rule.

## Unresolved Risk

- Manual Web Access validation in an installed iPad PWA or equivalent coarse-pointer browser session with real sidebar data is still needed to confirm project row actions are visible at rest in the real sidebar state.

## Refresh Validation 2026-05-28

- `pnpm derive:web` rebuilt the Mirrored Web Client Asset Tree and the
  `mobile-sidebar-project-actions` generated-asset regions were reapplied in
  `apps/web/app/webview/assets/app-main.js`.
- `node --check apps/web/app/webview/assets/app-main.js` passed.
- `pnpm --dir packages/bridge test` passed: 63 tests.
- `pnpm web-patches:check` passed with 5 total Web Patch regions.
- `pnpm format:check` passed.
