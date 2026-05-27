# SOP

## Goal

Apply repo-owned O3 Code name and icon surfaces during repo-local runs without making the default development path look like a second installed Codex app in the Dock.

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
5. Inspect copied runtime resources for new icon filenames or icon-loading behavior introduced by upstream.

## Application

1. Keep `scripts/start.mjs` as the source of opt-in local identity environment variables:
   - `O3_CODE_APP_NAME`
   - `O3_CODE_APP_ICON_PATH`
   - `O3_CODE_TRAY_TEMPLATE_PATH`
2. Inject default O3 Code name/icon environment variables only when `O3_CODE_USE_LOCAL_APP_IDENTITY=1` or `O3_CODE_USE_LOCAL_APP_BUNDLE=1` is set.
3. Keep the repo-local cached macOS host bundle named `O3 Code.app` available behind `O3_CODE_USE_LOCAL_APP_BUNDLE=1` for explicit local identity checks.
4. Override `app.setName(...)` from `O3_CODE_APP_NAME` after upstream sets its build-flavor name.
5. Let Dock and tray icon lookup prefer explicit O3 Code paths when the corresponding environment variables are present.
6. Regenerate icons with `pnpm generate:icons` when source icon assets or target runtime filenames change.

Use Patch Markers with patch id `local-app-identity` around copied-source changes.

## Validation

- `pnpm generate:icons` succeeds.
- `pnpm start` uses the normal Electron host and does not inject O3 Code name/icon overrides by default.
- `O3_CODE_USE_LOCAL_APP_IDENTITY=1 pnpm start` uses O3 Code runtime name/icon overrides.
- `O3_CODE_USE_LOCAL_APP_BUNDLE=1 pnpm start` shows the O3 Code app name in the macOS host process.
- In opt-in local identity mode, the Dock icon and tray icon use O3 Code assets.
- The app still uses the configured O3 Code User Data Directory unless explicitly overridden.

## Failure Conditions

Stop when upstream introduces a new visible identity surface that cannot be safely mapped, or when applying the Patch would change bundle identity instead of Local App Identity.
