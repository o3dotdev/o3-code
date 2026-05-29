# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.527.30818`
- Build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Known Sites

- `scripts/start.mjs`
- `apps/desktop/app/.vite/build/bootstrap.js`
- `apps/desktop/app/.vite/build/main.js`
- `apps/desktop/branding/o3-code-icon/`
- `apps/desktop/resources/electron.icns`
- `apps/desktop/resources/icon.icns`
- `apps/desktop/resources/o3-code-icon.png`
- `apps/desktop/resources/codexTemplate.png`
- `apps/desktop/resources/codexTemplate@2x.png`

## Current Environment Inputs

- `O3_CODE_APP_NAME=O3 Code`
- `O3_CODE_APP_ICON_PATH=<resources>/o3-code-icon.png`
- `O3_CODE_TRAY_TEMPLATE_PATH=<resources>/codexTemplate.png`

## Patch Shape

- `bootstrap.js` applies `O3_CODE_APP_NAME` immediately after the upstream
  `app.setName(...)` call (now `r.app.setName(e.dt(S))`).
- `main.js` Dock-icon resolver (arrow `x = () => { switch (t) { ... } }`, base
  dir `(0, o.join)(m, "electron", "src", "icons")`) returns
  `O3_CODE_APP_ICON_PATH` first when the file exists; the upstream Prod flavor
  otherwise returns `null`, so the O3 Code icon drives `app.dock.setIcon`.
- `main.js` macOS tray builder (`async function A0(e, t)` under
  `process.platform === "darwin"`) prepends `O3_CODE_TRAY_TEMPLATE_PATH` to the
  `codexTemplate.png` candidate list.
- Patch Marker id: `local-app-identity`.

## Validation Notes

- Icon-loading filenames are unchanged from the prior release
  (`icon-dev-dark.png`, `icon-agent.png`, `codexTemplate.png`); no new upstream
  icon surface, and O3-owned `apps/desktop/resources/*` were not replaced by the
  Source Refresh, so no icon regeneration was required.
- `node --check apps/desktop/app/.vite/build/main.js` passed.
- `node --check apps/desktop/app/.vite/build/bootstrap.js` passed.
- `pnpm generate:icons` succeeds and leaves O3 Code icon assets unchanged.
- `pnpm start` launches the cached macOS Electron host as `O3 Code.app`; Bridge
  sidecars use the bundled Node executable, so they do not create a second Dock
  tile; the app uses the O3 Code user data directory by default.
