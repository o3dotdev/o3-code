# Mobile Request Input Option Descriptions Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Source version: `26.527.30818`
- Source build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Discovered Sites

- Request-input option row renderer: `apps/web/app/webview/assets/pending-request-item-panel.js`
- Browser shell CSS injection: `packages/bridge/src/html-injection.mjs`
- Bridge HTML injection tests: `packages/bridge/test/html-injection.test.mjs`

## Patch Shape

- Reapplied Web Patch markers (`mobile-request-input-option-descriptions`) around
  the request-input option row children in the freshly-derived chunk. This
  release's minified names: jsx `$`, clsx `l`, tooltip `P`, info icon `H`,
  selected badge `fe`, FormattedMessage `m`.
- Added stable `o3-code-request-input-option-*` classes for the option body,
  label, info icon, inline description, and shortcut arrows; the label-area
  wrapper switches from `$.jsx` to `$.jsxs` to carry the inline description span.
- Preserved the upstream hover tooltip; added a hidden inline description span.
- Bridge-injected CSS that reveals inline descriptions and wraps labels on narrow
  or coarse-pointer layouts is repo-owned in `html-injection.mjs` and survives
  `pnpm derive:web`.

## Validation

- `node --check apps/web/app/webview/assets/pending-request-item-panel.js` passed.
- `node --check packages/bridge/src/html-injection.mjs` passed.
- `pnpm --filter @o3dotdev/code-bridge test` passed (63 tests).
- `pnpm web-patches:check` passed; this patch contributes 1 of the 5 copied-asset
  Web Patch regions.
- `pnpm format:check` passed.

## Unresolved Risk

- Manual Web Access validation against a freshly restarted Bridge Sidecar at
  desktop and mobile/coarse browser sizes is still recommended for the live
  plan-mode prompt layout.
