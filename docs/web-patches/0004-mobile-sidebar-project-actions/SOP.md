# Mobile Sidebar Project Actions SOP

## Goal

Keep project row action icons visible in the Mirrored Web Client on touch browser layouts by adding stable browser-only classes to the project row action wrappers and using bridge-injected CSS to reveal them on coarse-pointer surfaces.

## Non-Goals

- Do not mutate Desktop Reconstruction Webview Assets under `apps/desktop/app/webview`.
- Do not change project row data, menu contents, new-chat behavior, collapse state, or keyboard navigation.
- Do not change thread row hover actions, timestamps, shortcut badges, or section-header controls.
- Do not force project actions visible on hover-capable desktop browser layouts.

## Dependencies

- `0001-mobile-shell-viewport-and-scroll` should remain applied because this patch relies on bridge HTML injection for browser-only CSS.

## Allowed Surfaces

- `apps/web/app/webview/assets/app-main.js`
- `packages/bridge/src/html-injection.mjs`
- `packages/bridge/test/html-injection.test.mjs`
- `docs/web-patches/0004-mobile-sidebar-project-actions/**`
- `docs/web-patches/README.md`

## Discovery

1. Find the project action renderer in `apps/web/app/webview/assets/app-main.js` by searching for `function SC(e)`, `newThreadLabel`, and `group-hover/folder-row:opacity-100`.
2. Confirm the renderer still creates local and remote project menu wrappers, a collapsed/active status overlay, and the new-chat icon wrapper in the same right-side project action area.
3. Confirm `injectBridgeShell` still injects `#o3-code-bridge-shell-style` before renderer startup.

## Application

1. Add or preserve Web Patch markers with id `mobile-sidebar-project-actions` around only the copied asset class additions in `SC`.
2. Add stable classes for:
   - project menu action wrappers;
   - the new-chat action wrapper;
   - the project status overlay that shares the new-chat slot.
3. Preserve existing upstream hover/focus classes and dropdown open behavior.
4. Add bridge-injected CSS under `@media (hover: none) and (pointer: coarse)` that:
   - sets the project menu and new-chat action wrappers to `opacity: 1`;
   - hides the project status overlay;
   - leaves desktop browser hover-capable layouts unchanged.
5. Update bridge HTML injection tests to assert the media query and selectors are injected.

## Validation

- Run `node --check apps/web/app/webview/assets/app-main.js`.
- Run `node --check packages/bridge/src/html-injection.mjs`.
- Run `pnpm --dir packages/bridge test`.
- Run `pnpm web-patches:check`.
- Run `pnpm format:check`.
- Validate Web Access on a coarse-pointer/mobile browser viewport: project rows show project menu and new-chat icons at rest, and an active/collapsed status overlay does not cover the new-chat icon.
- Validate Web Access on a hover-capable desktop browser viewport: project row action visibility remains hover/focus driven.

## Failure Conditions

- Stop if upstream already provides touch-visible project row actions.
- Stop if project row actions move out of `app-main.js` and no stable bundled renderer anchor exists.
- Stop if exposing the actions requires changing thread rows or section headers.
