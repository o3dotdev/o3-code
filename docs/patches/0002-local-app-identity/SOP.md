# SOP

## Goal

Apply the visible O3 Code name and icon surfaces during repo-local runs.

## Non-Goals

- Do not change the Codex App bundle identifier.
- Do not change the URL scheme.
- Do not change the default Codex App User Data Directory.
- Do not replace preserved in-app Codex artwork unless a separate Patch owns that change.

## Discovery

1. Find the bootstrap entry declared by `apps/desktop/app/package.json` as `main`.
2. Locate startup code that calls `app.setName(...)`.
3. Locate main-process Dock icon handling, usually around `app.dock?.setIcon(...)`.
4. Locate tray template icon handling, usually around `new Tray`, `codexTemplate`, or `nativeImage.createFromPath`.
5. Inspect copied non-native resources for new icon filenames or icon-loading behavior introduced by upstream.

## Application

1. Keep `scripts/start.mjs` as the source of local identity environment variables:
   - `O3_CODE_APP_NAME`
   - `O3_CODE_APP_ICON_PATH`
   - `O3_CODE_TRAY_TEMPLATE_PATH`
2. On macOS, launch through a repo-local cached copy of the Electron host bundle named `O3 Code.app`.
3. Run non-windowed sidecars through the bundled Node executable, not through the Electron host bundle.
4. Override `app.setName(...)` from `O3_CODE_APP_NAME` after upstream sets its build-flavor name.
5. Let Dock and tray icon lookup prefer explicit O3 Code paths when the corresponding environment variables are present.
6. Regenerate icons with `pnpm generate:icons` when source icon assets or target runtime filenames change.

Use Patch Markers with patch id `local-app-identity` around copied-source changes.

## Validation

- `pnpm generate:icons` succeeds.
- `pnpm start` shows the O3 Code app name in the macOS host process.
- Bridge sidecar processes use Node and do not create a second Dock tile.
- The Dock icon and tray icon use O3 Code assets.
- The app still uses the configured O3 Code User Data Directory unless explicitly overridden.

## Failure Conditions

Stop when upstream introduces a new visible identity surface that cannot be safely mapped, or when applying the Patch would change bundle identity instead of Local App Identity.
