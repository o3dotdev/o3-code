# Mobile Request Input Option Descriptions SOP

## Goal

Preserve browser-readable request-input option descriptions by adding stable browser-only classes and an inline description element to option rows, then using bridge-injected CSS to show those descriptions on narrow or coarse-pointer layouts.

## Non-Goals

- Do not mutate Desktop Reconstruction Webview Assets under `apps/desktop/app/webview`.
- Do not change request-input data, submission behavior, keyboard navigation, or tooltip content.
- Do not remove desktop browser hover tooltips.
- Do not broaden this patch beyond request-input option rows.

## Dependencies

- `0001-mobile-shell-viewport-and-scroll` should remain applied because this patch relies on bridge HTML injection for browser-only CSS.

## Allowed Surfaces

- `apps/web/app/webview/assets/pending-request-item-panel.js`
- `packages/bridge/src/html-injection.mjs`
- `packages/bridge/test/html-injection.test.mjs`

## Discovery

1. Find the request-input option row renderer in `apps/web/app/webview/assets/pending-request-item-panel.js` by searching for `requestInputPanel.optionIndex`, `tooltipContent`, and `requestInputPanel.selectedBadge`.
2. Confirm the row still renders option labels, optional description tooltips, selected badges, and selected-row arrow shortcuts in one `W.map(...)` radiogroup block.
3. Confirm `injectBridgeShell` still injects `#o3-code-bridge-shell-style` before renderer startup.

## Application

1. Add or preserve Web Patch markers with id `mobile-request-input-option-descriptions` around only the option-row children changed for browser layout.
2. Add stable O3 Code classes for the option body, label, hover info icon, inline description, and shortcut arrows.
3. Preserve the existing tooltip component and desktop label truncation.
4. Add bridge-injected CSS under `@media (max-width: 700px), (hover: none) and (pointer: coarse)` that:
   - shows `.o3-code-request-input-option-description`;
   - hides `.o3-code-request-input-option-info` and `.o3-code-request-input-option-shortcuts`;
   - allows `.o3-code-request-input-option-label` to wrap.
5. Update bridge HTML injection tests to assert the media query and selectors are injected.

## Validation

- Run `node --check apps/web/app/webview/assets/pending-request-item-panel.js`.
- Run `node --check packages/bridge/src/html-injection.mjs`.
- Run `pnpm --dir packages/bridge test`.
- Run `pnpm web-patches:check`.
- Run `pnpm format:check`.
- Validate Web Access at desktop and mobile/coarse layouts: desktop keeps the info-icon hover tooltip; narrow or touch browser layouts show descriptions inline without overlap.

## Failure Conditions

- Stop if the installed renderer already provides equivalent inline mobile descriptions.
- Stop if the option row renderer no longer has a stable localized patch site.
- Stop if making descriptions visible requires changing request-input state, answers, or submission behavior.
