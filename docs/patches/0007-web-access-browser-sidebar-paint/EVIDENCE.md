# Evidence

## Current Release

- Codex source version: `26.519.81530`
- Build: `3178`

## Sites

- `apps/desktop/app/.vite/build/preload.js`
  - Patch ID: `web-access-browser-sidebar-paint`
  - Exposes `electronBridge.captureBrowserSidebarPaint`.
- `apps/desktop/app/.vite/build/main.js`
  - Patch ID: `web-access-browser-sidebar-paint`
  - Registers trusted IPC for `o3-code:browser-sidebar:capture-paint`.
  - Adds `capturePageForWebAccess` on the browser sidebar manager.
  - Captures the real guest through `webContents.debugger` when available.
  - Falls back to an offscreen Electron renderer for iframe-blocked pages when
    the hidden sidebar guest cannot paint.

## Repo-Owned Support

- `packages/bridge/src/cdp-client.mjs`
- `packages/bridge/src/sidecar.mjs`
- `packages/bridge/test/cdp-client.test.mjs`

## Validation

- `node --check apps/desktop/app/.vite/build/preload.js` passed.
- `node --check apps/desktop/app/.vite/build/main.js` passed.
- Runtime validation with `pnpm start` and Google navigation:
  `/bridge/browser-page-screenshot?conversationId=new-conversation&url=https%3A%2F%2Fwww.google.com%2F`
  returned `HTTP/1.1 200 OK` with `content-type: image/png`.
- The output file was verified as `PNG image data, 2560 x 1800`.
- Browser verification opened `http://127.0.0.1:51304/` and confirmed the
  Mirrored Web Client loaded.
- `pnpm --dir packages/bridge test` passed: 62 tests.
- `pnpm web-patches:check` passed: 1182 web asset files, 19 Web Patch regions.
- `pnpm normalize:check` passed: 1260 files, no changes needed.
- `pnpm format:check` passed.
- `git diff --check` passed.
