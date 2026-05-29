# Evidence

## Current Release

- Codex source version: `26.519.81530`
- Build: `3178`

## Sites

- `apps/desktop/app/webview/assets/composer.js`
  - Patch ID: `composer-hidden-when-right-panel-full-width`
  - Reads the right-panel-full-width atom (`Sl`) as a hook in the shared composer
    component (`ey`) and gates the component's returned value to `null` when full
    width is active.
- `apps/web/app/webview/assets/composer.js`
  - Patch ID: `composer-hidden-when-right-panel-full-width`
  - Mirrors the same two marked regions for Bridge-served browser UI.

## Anchors

- Full-width atom: `var Sl = Vt(J, !1)` in the composer module, mirrored from the
  app-shell-state full-width signal in `app-main.js` via
  `e.set($c, e.get(Lo))` (`$c` is the composer's full-width atom export, `Lo` is
  the app-shell-state full-width signal flipped by the "Expand panel" toggle).
- Shared composer component: `function ey(e)`, with default
  `aboveComposerContentLayout` of `floating`.
- Hook read added next to `R = Y($n)`.
- Return gate applied at the `: (He = t[90]), He` comma-expression return.

## Patch Shape

- When `isRightPanelFullWidth` is true, the composer component returns `null`
  (renders nothing) after still running all hooks and cache writes; restoring the
  panel re-renders the composer unchanged.
- When false, the composer renders unchanged.
- The static `--right-panel-composer-overlay-reserve` (~1.5rem) strip is left
  untouched; the dynamic `--right-panel-composer-overlay-height` falls back to
  `0px` once the composer renders nothing.

## Validation Notes

- `node --check apps/desktop/app/webview/assets/composer.js`: passed.
- `node --check apps/web/app/webview/assets/composer.js`: passed.
- `pnpm normalize:check`: passed (1260 files; no changes needed; marker
  placement validated).
- `pnpm web-patches:check`: passed (5 existing Web Patch regions; the desktop
  patch markers in the mirrored web asset are not counted as Web Patches).
- `pnpm format:check`: passed.
- Manual full-width composer smoke (`pnpm start`): not run in this automated
  pass.
