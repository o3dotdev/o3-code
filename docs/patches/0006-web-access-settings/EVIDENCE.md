# Evidence

## Current Release

- Codex source version: `26.527.30818`
- Build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Sites

- `apps/desktop/app/.vite/build/bootstrap.js`
  - Patch ID: `web-access-settings`
  - `o3CodeAllocateBridgeCdpPort()` (uses path `i`, child_process `a`) defined
    before the update-label map; the per-run CDP allocation IIFE
    (`r.app.commandLine.appendSwitch`) runs after `setPath("userData", ...)` and
    before app readiness.
- `apps/desktop/app/.vite/build/main.js`
  - Patch ID: `web-access-settings`
  - Web access channels, Tailscale mobile-access helpers, and
    `o3CodeCreateWebAccessController(...)` inserted at module scope before the
    `DoubleCommand`/appshot code. Module refs remapped to this build: electron
    `i`, path `o`, fs `c`, url `b`.
  - `await o3CodeCreateWebAccessController({ desktopRoot: N.desktopRoot,
    disposables: j, isTrustedIpcEvent: F, repoRoot: N.repoRoot })` called inside
    the async startup function `$0` (`N = yX({ moduleDir: __dirname })`), right
    after the `BY({ buildFlavor, getContextForWebContents, isTrustedIpcEvent })`
    call.
- `apps/desktop/app/.vite/build/preload.js`
  - Patch ID: `web-access-settings`
  - `o3CodeWebAccessChannels`/`o3CodeSubscribe`/`o3CodeWebAccessBridge` defined
    before the exposed `D` object; `webAccess: o3CodeWebAccessBridge` added to
    `D`, still exposed via `contextBridge.exposeInMainWorld("electronBridge", D)`.
- `apps/desktop/app/webview/assets/app-main.js`
  - Patch ID: `web-access-settings`
  - `"web-access"` lazy route added before `"local-environments"` in the
    `$.lazy` settings route map, importing `./web-access-settings-o3code.js`.
- `apps/desktop/app/webview/assets/settings-sections-1YVifu-Z.js`
  - Patch ID: `web-access-settings`
  - `{ slug: "web-access" }` added after `connections`.
- `apps/desktop/app/webview/assets/settings-shared-BTHmEeQY.js`
  - Patch ID: `web-access-settings`
  - `"web-access"` nav title entry added after `connections`; `case "web-access"`
    section-title added before `case "plugins-settings"` (`(0, d.jsx)(n, {...})`).
- `apps/desktop/app/webview/assets/settings-page-BEeldfPH.js`
  - Patch ID: `web-access-settings`
  - Five regions: route-component map (`"web-access": U`), the flat slug order,
    the App-heading slug group (near Connections), the visibility switch
    (`case "web-access": return true;`), and the loading-state fall-through group.
- `apps/desktop/app/webview/assets/web-access-settings-o3code.js`
  - Patch-owned settings page chunk, recreated from SOP after the Source Refresh
    deleted it. Imports re-resolved for this build:
    - `wrapReactModule` from `./chunk-Bj-mKKzh.js` (was `./chunk.js`)
    - `SettingsRow`/`SettingsValueRow` from `./settings-row.js` (was
      `./settings-row-D.js`)
    - `SettingsSurface` from `./settings-group.js` export `n` (the
      `settings-surface.js` chunk was merged into `settings-group.js`; the
      surface component is byte-identical to the prior release).
  - Shows localhost Web access status plus user-run Tailscale Serve commands for
    private tailnet mobile access.

## Repo-Owned Support

- `packages/bridge/src/o3-code-config.mjs`
- `packages/bridge/src/supervisor.mjs`
- `packages/bridge/src/runtime-config.mjs`
- `packages/bridge/src/sidecar.mjs`
- `packages/bridge/src/static-files.mjs`

(Repo-owned; not replaced by the Source Refresh.)

## Validation Notes

- `start:web` is absent from `package.json` and `scripts/start-web.mjs` remains
  deleted.
- `node --check` passed for `bootstrap.js`, `main.js`, `preload.js`,
  `app-main.js`, `settings-sections-1YVifu-Z.js`, `settings-shared-BTHmEeQY.js`,
  `settings-page-BEeldfPH.js`, and `web-access-settings-o3code.js`.
- All eight imports in `web-access-settings-o3code.js` resolve to existing
  chunks with the named exports present.
- `pnpm normalize:check` passed.
- `pnpm --dir packages/bridge test`, `pnpm format:check`, `pnpm web-patches:check`,
  `pnpm derive:web`, and a desktop `/settings/web-access` smoke are run in the
  validation pass.
