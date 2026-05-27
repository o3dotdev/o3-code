# Mobile Shell Viewport And Scroll SOP

## Goal

Preserve the visible chat shell in the Mirrored Web Client by locking the browser page viewport and recovering only top-level page scroll drift. Small iOS overlays such as selection/copy popups and accessory bars must not resize or move the shell; full keyboard-sized occlusion may resize it so the composer remains usable. Internal renderer scrollers, especially reversed thread transcript scrollers, must keep their own scroll positions.

## Non-Goals

- Do not mutate Desktop Reconstruction Webview Assets under `apps/desktop/app/webview`.
- Do not reorder chat turns or normalize thread hydration data.
- Do not snap, scroll, reverse, or otherwise reposition `.thread-scroll-container`.
- Do not patch generated files under `apps/web/app/webview` unless repo-owned bridge injection cannot provide the behavior.

## Allowed Surfaces

- `packages/bridge/src/html-injection.mjs`
- `packages/bridge/public/bridge-shim.js`
- `packages/bridge/test/**`

## Discovery

1. Confirm the sidecar serves `apps/web/app/webview` through `packages/bridge/src/sidecar.mjs`.
2. Confirm `injectBridgeShell` still injects `/bridge-shim.js` and `#o3-code-bridge-shell-style` before renderer startup.
3. Confirm the renderer still uses a browser-hosted shell where page-level scroll drift can visually move fixed content.

## Application

1. Replace packaged viewport metadata in served HTML with strict mobile viewport metadata.
2. Inject shell-lock CSS for `html`, `body`, `#root`, and `#root > *`.
3. Install browser shim guards that:
   - update `--o3-code-viewport-height`, `--o3-code-shell-height`, `--o3-code-measured-viewport-top-offset`, `--o3-code-viewport-bottom-offset`, and `--o3-code-viewport-bottom-inset`;
   - cache stable non-keyboard touch viewport height and ignore small transient visual viewport decreases;
   - shrink the shell only for keyboard-sized bottom occlusion;
   - recover `window`, `documentElement`, `scrollingElement`, and `body` scroll drift;
   - run recovery across visual viewport, focus, scroll, pointer/click/touch, context menu, selection, page show, orientation, focusout, and scroll-lock/popover mutation triggers;
   - prevent pinch/gesture zoom and page rubber-band without consuming valid internal scroller movement.

## Validation

- Run `pnpm --dir packages/bridge test`.
- Run `node --check packages/bridge/public/bridge-shim.js`.
- Run `pnpm web-patches:check`.
- Run `pnpm format:check`.
- Manually validate Web Access in mobile Safari or installed PWA mode: select/copy chat text, tap whitespace between messages, open the iOS accessory/formatting bar, open/close popovers, focus/blur composer, and verify chat messages remain visible without reload.

## Failure Conditions

- Stop if the installed renderer adds its own equivalent browser shell lock and bridge injection would conflict.
- Stop if recovery requires moving `.thread-scroll-container` or mutating conversation state.
- Stop if generated webview chunks must be patched; create explicit Web Patch markers and evidence before doing so.
