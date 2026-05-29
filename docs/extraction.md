# Extraction Notes

The current extraction came from `/Applications/Codex.app`, version `26.527.30818`, build `3370`.

Copied material:

- `Resources/app.asar` extracted into `apps/desktop/app/`
- `Contents/Info.plist` copied into `apps/desktop/metadata/Info.plist`

Codex-owned runtime resources such as plugins, sounds, notices, asset catalogs,
locale folders, helper apps, frameworks, code signatures, native add-ons,
helper executables, and plugin prebuilds are not copied. The Electron host and
all Codex App runtime material are resolved from the installed Codex App at
launch.

Electron host: O3 Code does not use an npm `electron` package. It launches the
Desktop Reconstruction under the installed Codex App's own Electron executable
(`Codex.app/Contents/MacOS/<bundle name>`, resolved by
`resolveCodexAppElectronExecutable`). The Codex App ships a custom Electron
framework whose native add-ons are built against that framework's exact V8, and
the framework decouples its Node ABI (`NODE_MODULE_VERSION`) from its
Chromium/V8 version, so no public npm `electron` release matches both. In
`26.527.30818` the framework is Chromium 148 (V8 ~14.8) while its raw-V8
`better-sqlite3` add-on is `NODE_MODULE_VERSION 143`: npm `electron` 40 matches
the ABI but its Chromium 144 V8 makes the add-on jump to a null V8 vtable and
segfault the renderer, while npm `electron` 42 matches the V8 but fails the ABI
load check. Running the installed framework in place preserves its
hardened-runtime code signature, and its library validation still loads the
Codex-team-signed native modules. See
`docs/adr/0033-run-under-installed-codex-app-electron-framework.md`.

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
