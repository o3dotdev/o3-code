# 0002 local-app-identity

## Status

Active

## Markers

- `o3-code-patch-begin: local-app-identity`
- `o3-code-patch-end: local-app-identity`

## Intent

When O3 Code runs through `pnpm start`, the visible app should identify as O3 Code instead of the generic Electron host app or the upstream Codex App. This Patch applies Local App Identity only: visible name, Dock icon, and tray template icon for repo-local runs.

It deliberately does not change the Codex App bundle identifier, URL scheme, default user data directory, or preserved in-app Codex artwork.

## Changed Sites

- `scripts/start.mjs`
- `apps/desktop/app/.vite/build/bootstrap.js`
- `apps/desktop/app/.vite/build/main-DVEWN1ng.js`
- `apps/desktop/branding/o3-code-icon/`
- `apps/desktop/resources/electron.icns`
- `apps/desktop/resources/icon.icns`
- `apps/desktop/resources/o3-code-icon.png`
- `apps/desktop/resources/codexTemplate.png`
- `apps/desktop/resources/codexTemplate@2x.png`

## Upstream Anchors

Find the bootstrap entry declared by `apps/desktop/app/package.json` as `main`. In the extracted Codex App source for version `26.519.41501`, that entry is `apps/desktop/app/.vite/build/bootstrap.js`.

The app name is set near startup through `app.setName(...)`. O3 Code overrides it only when `O3_CODE_APP_NAME` is present.

Dock icon handling lives in the main bundle function that calls `app.dock?.setIcon(...)`. O3 Code checks `O3_CODE_APP_ICON_PATH` before upstream build-flavor icon lookup.

Tray template icon handling lives in the main bundle function that builds the native tray icon path list. O3 Code checks `O3_CODE_TRAY_TEMPLATE_PATH` before upstream packaged and source-tree candidates.

## Patch Shape

`scripts/start.mjs` supplies:

- `O3_CODE_APP_NAME=O3 Code`
- `O3_CODE_APP_ICON_PATH=<resources>/o3-code-icon.png`
- `O3_CODE_TRAY_TEMPLATE_PATH=<resources>/codexTemplate.png`

On macOS, `scripts/start.mjs` also launches through a repo-local cached copy of the Electron host bundle at `node_modules/.cache/o3-code-electron/electron-<version>/O3 Code.app`. This is necessary because macOS reports the host executable name as the visible application process name before Electron runtime naming can help. The cached host bundle uses O3 Code display metadata, an `O3 Code` host executable name, and O3 icon resources, but it is not the Codex App bundle identity.

Launching through a copied `.app` host makes Electron report `app.isPackaged === true` during `pnpm start`. The resources-path redirect Patch remains required so packaged-mode lookups still resolve to repo-local runtime resources.

The bootstrap Patch applies `app.setName(...)` from `O3_CODE_APP_NAME` after upstream sets the build-flavor name.

The main-process Patch lets the Dock icon and tray icon resolve from explicit O3 Code paths during `pnpm start` runs.

Icon assets are generated from `apps/desktop/branding/o3-code-icon/source/o3-glyph.svg` by `pnpm generate:icons`. The generated review sheet is `apps/desktop/branding/o3-code-icon/generated/o3-code-icon-preview.png`.

## Migration Notes

When refreshing from a newer Codex App bundle, compare upstream icon resources and main-process icon loading before reapplying this Patch. Upstream may introduce new visible icon surfaces, new resource filenames, or different tray/Dock logic.

After refresh:

- inspect top-level files under `Resources/` for new app, tray, or template icon resources
- search the refreshed main bundle for `dock?.setIcon`, `new Tray`, `codexTemplate`, `nativeImage.createFromPath`, and `app.setName`
- keep the cached macOS host bundle metadata in `scripts/start.mjs` aligned with the intended visible O3 Code name
- rerun `pnpm generate:icons` after confirming which runtime filenames should receive O3 outputs
- preserve the existing bundle identifier, URL scheme, and Codex App User Data Directory unless a separate identity decision is made

If upstream starts supporting explicit local icon/name overrides, this Patch may be removed after verifying `pnpm start` still presents O3 Code consistently.

## Verification

`pnpm generate:icons` creates the app icon, tray template PNGs, `.icns` file, contact-sheet preview, and runtime resource copies.

`scripts/start.mjs` sets the local identity environment variables before launching Electron.
