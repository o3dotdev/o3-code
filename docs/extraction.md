# Extraction Notes

The current extraction came from `/Applications/Codex.app`, version `26.519.41501`, build `3044`.

Copied material:

- `Resources/app.asar` extracted into `app/`
- `Resources/app.asar.unpacked/` copied into `resources/app.asar.unpacked/`
- `Resources/native/` copied into `resources/native/`
- `Resources/plugins/` copied into `resources/plugins/`
- top-level helper binaries, icons, sounds, notices, asset catalogs, and locale folders copied into `resources/`
- `Contents/Info.plist` copied into `metadata/Info.plist`

The signed macOS outer bundle, helper apps, frameworks, and code signature are not copied. Electron is provided by pnpm using the same version declared by the extracted app package.

Local runner patch:

- `app/.vite/build/bootstrap.js` reads `CODEX_ELECTRON_RESOURCES_PATH` before loading the main bundle and points `process.resourcesPath` at repo-local `resources/`. This keeps native add-on lookups on the copied runtime resources instead of Electron's npm package resources directory.

Every in-place change to copied source is tracked in `docs/local-patches.md`.
