# Evidence

## Current Release

- Codex App version: `26.519.41501`
- Build: `3044`

## Known Sites

- `scripts/start.mjs`
- `apps/desktop/app/.vite/build/bootstrap.js`
- `apps/desktop/app/.vite/build/main-DVEWN1ng.js`
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

## Validation Notes

`scripts/start.mjs` launches a cached macOS Electron host bundle at `node_modules/.cache/o3-code-electron/electron-<version>/O3 Code.app`. This makes Electron report `app.isPackaged === true`, so the resources path redirect remains required.
