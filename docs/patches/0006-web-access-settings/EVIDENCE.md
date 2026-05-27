# Evidence

## Current Release

- Codex source version: `26.519.81530`
- Build: `3178`

## Sites

- `apps/desktop/app/.vite/build/bootstrap.js`
  - Patch ID: `web-access-settings`
  - Allocates a per-run loopback CDP port before app readiness.
- `apps/desktop/app/.vite/build/main.js`
  - Patch ID: `web-access-settings`
  - Registers Web access IPC and starts the Bridge Mode supervisor.
- `apps/desktop/app/.vite/build/preload.js`
  - Patch ID: `web-access-settings`
  - Exposes `electronBridge.webAccess`.
- `apps/desktop/app/webview/assets/app-main.js`
  - Patch ID: `web-access-settings`
  - Adds the `web-access` settings route.
- `apps/desktop/app/webview/assets/settings-sections.js`
  - Patch ID: `web-access-settings`
  - Adds the Web access navigation section.
- `apps/desktop/app/webview/assets/settings-shared.js`
  - Patch ID: `web-access-settings`
  - Adds Web access navigation and section labels.
- `apps/desktop/app/webview/assets/settings-page.js`
  - Patch ID: `web-access-settings`
  - Places Web access under App settings near Connections.
- `apps/desktop/app/webview/assets/web-access-settings-o3code.js`
  - Patch-owned settings page chunk.
  - Source Refresh can delete this repo-added file when replacing
    `apps/desktop/app`; Patch 0006 recreates it before `pnpm derive:web`.

## Repo-Owned Support

- `packages/bridge/src/o3-code-config.mjs`
- `packages/bridge/src/supervisor.mjs`
- `packages/bridge/src/runtime-config.mjs`
- `packages/bridge/src/sidecar.mjs`
- `packages/bridge/src/static-files.mjs`

## Validation Notes

- `pnpm format:check`: passed.
- `pnpm --dir packages/bridge test`: passed, 41 tests.
- `pnpm normalize:check`: passed.
- `pnpm web-patches:check`: passed, 0 Web Patch regions.
- `pnpm derive:web`: completed.
- `node --check`: passed for patched desktop bundles, Web access settings
  chunk, supervisor, sidecar, and static file helper.
- Main data dir smoke:
  - `pnpm start` launched without Web access startup modals.
  - Enabling Web access through desktop preload IPC persisted
    `~/.o3/code/config.json`.
  - Supervisor reported `running` at `http://127.0.0.1:51304/`.
  - `http://127.0.0.1:51304/healthz` returned OK.
  - `http://127.0.0.1:51304/settings/web-access` returned the injected
    mirrored client shell with `200 OK`.
  - Missing asset requests under `/assets/` still returned `404`.
- Follow-up cleanup confirmed Bridge sidecars are spawned with the bundled Node
  executable instead of Electron's `process.execPath`, preventing a second Dock
  app while Web access is running.
