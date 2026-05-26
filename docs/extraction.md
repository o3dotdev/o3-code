# Extraction Notes

The current extraction came from `/Applications/Codex.app`, version `26.519.41501`, build `3044`.

Copied material:

- `Resources/app.asar` extracted into `apps/desktop/app/`
- `Resources/app.asar.unpacked/` copied into `apps/desktop/resources/app.asar.unpacked/`
- `Resources/native/` copied into `apps/desktop/resources/native/`
- `Resources/plugins/` copied into `apps/desktop/resources/plugins/`
- top-level helper binaries, icons, sounds, notices, asset catalogs, and locale folders copied into `apps/desktop/resources/`
- `Contents/Info.plist` copied into `apps/desktop/metadata/Info.plist`

The signed macOS outer bundle, helper apps, frameworks, and code signature are not copied. Electron is provided by pnpm using the same version declared by the extracted app package.

Normalization:

- `pnpm normalize` runs after copied source material is preserved and before any Patch is applied.
- Normalization rewrites Prettier-parseable copied app source into a patch-friendly baseline.

Source Refresh:

- newer Codex App source material may replace the previously copied source tree
- after replacement, run Normalization and then Patch Recipes to rebuild local O3 Code intent
- commit the final patched source tree so `pnpm start` remains runnable from checkout

Local runner patch:

- `apps/desktop/app/.vite/build/bootstrap.js` reads `CODEX_ELECTRON_RESOURCES_PATH` before loading the main bundle and points `process.resourcesPath` at repo-local `apps/desktop/resources/`. This keeps native add-on lookups on the copied runtime resources instead of Electron's npm package resources directory.
- O3 Code applies Local App Identity for repo-local runs through `docs/patches/0002-local-app-identity.md`. When refreshing from a newer Codex App, compare upstream icon resources and icon-loading code before reapplying generated O3 assets, because upstream may introduce new icon surfaces or filenames.

Every Patch to copied source is tracked in `docs/patches/` and should have a matching Patch Recipe.
