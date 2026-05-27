# SOP

## Goal

Reapply desktop-owned Web access settings after a Source Refresh. Web access
must be distinct from Browser/browser-use settings, default off, persist under
`~/.o3/code/config.json`, and expose only `http://127.0.0.1:{port}/`.

## Non-Goals

- Do not restore `pnpm start:web`.
- Do not restore `O3_CODE_BRIDGE_REMOTE` or any LAN/Tailscale/public exposure.
- Do not add manual port editing.
- Do not create a Mirrored Web Client Patch unless browser-only behavior
  diverges from the Desktop Reconstruction.

## Dependencies

Apply after patches 0001-0005 and after repo-owned bridge support modules are
present under `packages/bridge/src`.

## Discovery

1. Find Desktop Reconstruction startup in `apps/desktop/app/.vite/build/bootstrap.js`
   around `n.app.setPath("userData", ...)`.
2. Find main startup in `apps/desktop/app/.vite/build/main-*.js` around
   `function uG({ moduleDir` and the call to `jW({ buildFlavor`.
3. Find preload in `apps/desktop/app/.vite/build/preload.js` around
   `contextBridge.exposeInMainWorld("electronBridge", w)`.
4. Find settings route registration in `apps/desktop/app/webview/assets/app-main-*.js`
   around the `wT` settings component map.
5. Find settings navigation in:
   - `settings-sections-*.js`
   - `settings-shared-*.js`
   - `settings-page-*.js`
6. Treat `apps/desktop/app/webview/assets/web-access-settings-o3code.js` as a
   repo-added settings chunk owned by this Patch. Source Refresh replacement of
   `apps/desktop/app` can delete it, so recreate it from this SOP instead of
   expecting upstream to provide it.

## Application

1. Ensure `packages/bridge/src/o3-code-config.mjs` defines tolerant
   `~/.o3/code/config.json` parsing, atomic writes, and the `webAccess` shape.
2. Ensure `packages/bridge/src/supervisor.mjs` starts/stops the sidecar, keeps
   status in memory, preserves the Web Access Port, and emits `off`, `starting`,
   `running`, and `failed` states with stable failure codes.
   The sidecar process must use the bundled Node executable, not Electron's
   `process.execPath`, so it cannot create an extra Dock app.
3. Patch `bootstrap.js` with `web-access-settings` markers to allocate a private
   loopback CDP port per app run and append Electron remote-debugging switches
   before app readiness.
4. Patch `main-*.js` with `web-access-settings` markers to import the repo-owned
   config and supervisor modules, register narrow Web access IPC handlers, and
   start the sidecar automatically when persisted config is enabled.
5. Patch `preload.js` with `web-access-settings` markers to expose only Web
   access config/status/update/retry/reset/open IPC methods.
6. Patch preserved settings assets with `web-access-settings` markers to add a
   `web-access` route and App-level navigation entry near Connections.
7. Create or restore
   `apps/desktop/app/webview/assets/web-access-settings-o3code.js` as the Web
   access settings page chunk imported by the patched route map. Keep it in the
   Desktop Reconstruction Webview Assets so `pnpm derive:web` copies it to the
   Mirrored Web Client Asset Tree.
8. Remove `start:web` from `package.json` and keep `scripts/start-web.mjs`
   deleted.

## Validation

- `pnpm --dir packages/bridge test`
- `pnpm format:check`
- `pnpm normalize:check`
- `pnpm web-patches:check`
- `pnpm derive:web`
- Smoke desktop settings at `/settings/web-access`, toggle Web access, and
  verify the running URL is `http://127.0.0.1:{port}/`.

## Failure Conditions

Stop for human review if upstream removes the preserved settings route model,
preload no longer exposes `electronBridge`, Electron CDP cannot be configured
before app readiness, or Web access would require non-localhost exposure.
