# Extraction Notes

The current extraction came from `/Applications/Codex.app`, version `26.527.30818`, build `3370`.

Copied material:

- `Resources/app.asar` extracted into `apps/desktop/app/`
- `Contents/Info.plist` copied into `apps/desktop/metadata/Info.plist`

Codex-owned runtime resources such as plugins, sounds, notices, asset catalogs,
locale folders, helper apps, frameworks, code signatures, native add-ons,
helper executables, and plugin prebuilds are not copied. Electron is provided by
pnpm. Codex App runtime material is resolved from the installed Codex App at
launch.

Electron host version: because O3 Code runs its own Electron but loads the
installed Codex App's native modules (`better-sqlite3`, `node-pty`, `objc-js`)
through `scripts/start.mjs`, the repo's `electron` dependency must match the
installed app's native-module ABI (`NODE_MODULE_VERSION`), not the `electron`
devDependency declared in the extracted app `package.json`. These can diverge:
in `26.527.30818` the app framework is Electron 42 (Chromium 148) but its native
modules are built for `NODE_MODULE_VERSION 143` (Electron 40), so the repo pins
`electron` to `40.x`. Determine the target each refresh from the app's
`app.asar.unpacked/node_modules/better-sqlite3/build/Release/better_sqlite3.node`
(its `NODE_MODULE_VERSION`) and pick the matching Electron major.

Normalization:

- `pnpm normalize` runs after copied source material is preserved and before any Patch is applied.
- Normalization rewrites Prettier-parseable copied app source into a patch-friendly baseline.

Source Refresh:

- newer Codex App source material may replace the copied source tree
- after replacement, run Normalization and then reapply each Patch SOP one by one
- record fresh Patch Evidence for each reapplied Patch
- commit the final patched source tree so `pnpm start` remains runnable from checkout

Local runner patch:

- `apps/desktop/app/.vite/build/bootstrap.js` reads `CODEX_ELECTRON_RESOURCES_PATH` before loading the main bundle and points `process.resourcesPath` at the installed Codex App's `Contents/Resources`. This keeps native add-on and helper lookups on the official Codex App runtime instead of Electron's npm package resources directory or checked-in O3 Code files.
- `scripts/start.mjs` creates ignored `apps/desktop/app/node_modules` symlinks for native Node packages so Node package resolution reaches the installed Codex App copies without committing their compiled payloads.
- O3 Code applies Local App Identity for repo-local runs through `docs/patches/0002-local-app-identity/`. When refreshing from a newer Codex App, compare upstream icon resources and icon-loading code before reapplying generated O3 assets, because upstream may introduce new icon surfaces or filenames.

Every Patch to copied source is tracked in `docs/patches/` and should have a Patch SOP.
