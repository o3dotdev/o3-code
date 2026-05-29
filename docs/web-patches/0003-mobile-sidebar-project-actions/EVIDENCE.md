# Mobile Sidebar Project Actions Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Source version: `26.527.30818`
- Source build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`
- Mirrored Web Client asset: `apps/web/app/webview/assets/app-main.js`

## Discovered Sites

- Project action renderer in `apps/web/app/webview/assets/app-main.js`, around
  the project-row component whose shared hover-visibility class is
  `_ = f ? "opacity-100" : "opacity-0 group-hover/folder-row:opacity-100"`.
- Local project menu wrapper renders component `Bw`; remote wrapper renders
  `Uw`; the collapsed/active status overlay uses
  `group-hover/folder-row:hidden`; the new-chat wrapper uses `ei("inline-flex", _)`.
- Browser shell CSS injection: `packages/bridge/src/html-injection.mjs`.
- Bridge HTML injection tests: `packages/bridge/test/html-injection.test.mjs`.

## Patch Shape

- Reapplied four Web Patch marker regions (`mobile-sidebar-project-actions`) in
  the freshly-derived chunk. This release's minified names: jsx `Q`, clsx `ei`,
  shared hover class `_`.
- Added stable `o3-code-sidebar-project-menu-action` (local and remote menu
  wrappers), `o3-code-sidebar-project-new-chat-action` (new-chat wrapper), and
  `o3-code-sidebar-project-status-overlay` (status overlay) classes while
  preserving upstream hover/focus and dropdown-open visibility.
- Coarse-pointer CSS that forces these visible and hides the overlay is
  repo-owned in `html-injection.mjs` and survives `pnpm derive:web`.

## Validation

- `node --check apps/web/app/webview/assets/app-main.js` passed.
- `node --check packages/bridge/src/html-injection.mjs` passed.
- `pnpm --filter @o3dotdev/code-bridge test` passed (63 tests).
- `pnpm web-patches:check` passed; this patch contributes 4 of the 5 copied-asset
  Web Patch regions.
- `pnpm format:check` passed.

## Unresolved Risk

- Manual Web Access validation in an installed iPad PWA or equivalent
  coarse-pointer session with real sidebar data is still recommended to confirm
  project row actions are visible at rest.
