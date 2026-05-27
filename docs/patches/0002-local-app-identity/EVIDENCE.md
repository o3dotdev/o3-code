# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.519.81530`
- Build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Known Sites

- `scripts/start.mjs`
- `apps/desktop/app/.vite/build/bootstrap.js`
- `apps/desktop/app/.vite/build/main-BS7yenMI.js`
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

- `bootstrap.js` applies `O3_CODE_APP_NAME` immediately after upstream `app.setName(...)`.
- `main-BS7yenMI.js` lets Dock icon lookup prefer `O3_CODE_APP_ICON_PATH` when the file exists.
- `main-BS7yenMI.js` prepends `O3_CODE_TRAY_TEMPLATE_PATH` to the macOS tray template candidates.
- Patch Marker id: `local-app-identity`.

## Validation Notes

- `pnpm generate:icons` succeeded and regenerated O3 Code icon assets.
- `node --check apps/desktop/app/.vite/build/main-BS7yenMI.js` passed.
- `pnpm start` launches the cached macOS Electron host as `O3 Code.app`.
- Bridge sidecars are spawned with the bundled Node executable instead of the Electron host, so they do not create a second Dock tile.
- The app uses the O3 Code user data directory by default: `/Users/maksimzayats/Library/Application Support/O3 Code`.
