# SOP

## Goal

Hide the shared bottom composer overlay while the right side panel is expanded
to full width, and restore it when the panel returns to regular width.

## Non-Goals

- Do not change the "Expand panel" / "Restore panel width" toggle
  (`codex.rightPanel.expandFullWidth`, `codex.rightPanel.restoreWidth`).
- Do not change right panel width math in `app-shell-state.js`.
- Do not hide or alter the composer in the normal (non-full-width) split layout.
- Do not collapse the static `--right-panel-composer-overlay-reserve` strip.
- Do not add a separate Mirrored Web Client Patch; the web asset mirrors the
  same marked region.

## Dependencies

- None. Independent of Patches 0001-0008.

## Discovery

The composer is a single shared overlay component rendered by every conversation
surface (local and remote conversation pages, the new-thread panel, and both
hotkey windows). The right-panel-full-width state is mirrored into a
composer-scope atom, so the composer can read it directly. Minified names change
on Source Refresh; rediscover the anchors as follows.

1. Open the bundled composer asset under
   `apps/desktop/app/webview/assets/composer.js`.
2. Find the full-width atom: search for `isRightPanelFullWidth`. It appears in a
   derived-atom getter and in a dictation/pairing selector. The boolean atom
   feeding it is the module-level signal declared just above (currently `Sl`),
   exported from the composer module.
   - Cross-check the mirror in
     `apps/desktop/app/webview/assets/app-main.js`: it does
     `set(<composerFullWidthAtom>, get(<appShellStateFullWidthSignal>))`, where
     the app-shell-state signal is the one the "Expand panel" toggle flips in
     `app-shell.js`.
3. Find the shared composer component: it is the export imported as the composer
   element by the conversation pages and rendered with prop
   `aboveComposerContentLayout` (default `floating`). Search for
   `aboveComposerContentLayout` / `floating` (currently function `ey`).
   - Note: the composer module also exports an unrelated SVG icon; do not target
     it.
4. Find an existing top-of-function atom-value hook read in that component
   (currently `R = Y($n)`); reuse the same hook to read the full-width atom.
5. Find the component's single render `return` (a comma expression returning the
   built `div`); gate its returned value.

## Application

Add two paired Patch Marker regions with patch id
`composer-hidden-when-right-panel-full-width` in the shared composer component.

1. Read the full-width atom as an unconditional hook alongside the existing
   top-of-function hook reads, so hook order stays stable on every render:

   ```text
   R = Y($n),
   // o3-code-patch-begin: composer-hidden-when-right-panel-full-width
   isRightPanelFullWidthHidden = Y(Sl),
   // o3-code-patch-end: composer-hidden-when-right-panel-full-width
   z;
   ```

2. Gate the component's returned value so it yields `null` when full width is
   active, leaving all hooks and React-Compiler cache writes intact (gate the
   value, not an early `return`):

   ```text
   : (He = t[90]),
   // o3-code-patch-begin: composer-hidden-when-right-panel-full-width
   isRightPanelFullWidthHidden ? null : He
   // o3-code-patch-end: composer-hidden-when-right-panel-full-width
   );
   ```

Apply the same two marked regions to the mirrored web asset under
`apps/web/app/webview/assets/composer.js` so Bridge-served browser UI matches
desktop behavior until the next `pnpm derive:web` refresh (which re-copies the
patched desktop asset, markers included). No separate web patch is needed.

## Validation

- `node --check apps/desktop/app/webview/assets/composer.js` succeeds.
- `node --check apps/web/app/webview/assets/composer.js` succeeds.
- `pnpm normalize:check` succeeds.
- `pnpm web-patches:check` succeeds.
- `pnpm format:check` succeeds.
- Manual smoke (`pnpm start`): open a conversation, open a right side panel tab
  (terminal/browser), click "Expand panel", and confirm the bottom composer
  disappears; click "Restore panel width" and confirm the composer reappears and
  still accepts input. Confirm the normal split layout still shows the composer.

## Failure Conditions

Stop if the composer no longer routes all surfaces through one shared overlay
component, or if the right-panel-full-width state is no longer mirrored into a
composer-scope atom (so the composer can no longer read full width without new
wiring).
