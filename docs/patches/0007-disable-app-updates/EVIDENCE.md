# Evidence

## Current Release

- Codex source version: `26.519.81530`
- Build: `3178`

## Sites

- `scripts/start.mjs`
  - Sets `O3_CODE_DISABLE_APP_UPDATES=1` by default for `pnpm start`.
- `apps/desktop/app/.vite/build/main.js`
  - Patch ID: `disable-app-updates`
  - Adds `o3CodeAppUpdatesDisabled()`.
  - Forces startup `enableSparkle` and `enableUpdater` wiring off when disabled.
  - Sends renderer update-ready state as false and lifecycle state as `idle`.
  - Suppresses install-progress, check-update, install-update, and native
    install-request paths when disabled.

## Environment Inputs

- `O3_CODE_DISABLE_APP_UPDATES=1` by default from `scripts/start.mjs`.
- `O3_CODE_DISABLE_APP_UPDATES=0` allows upstream updater behavior for explicit
  debugging.

## Observed Trigger

- Installed Codex App metadata:
  - `CFBundleShortVersionString=26.519.81530`
  - `CFBundleVersion=3178`
- Current Codex appcast latest item:
  - `sparkle:shortVersionString=26.519.81530`
  - `sparkle:version=3178`
- Repo-local O3 Code host bundle metadata:
  - `CFBundleShortVersionString=42.1.0`
  - `CFBundleVersion=42.1.0`

The installed Codex App did not appear outdated relative to the appcast. The
repo-local host bundle did. This explains why the upstream `Update` control
could appear in O3 Code while the real Codex App did not show it.

## Patch Shape

- Copied-source Patch Marker id: `disable-app-updates`.
- Main-process only. Renderer bundles are unchanged because the header button is
  already controlled by main-process update state.

## Validation Notes

- `node --check apps/desktop/app/.vite/build/main.js`: passed.
- `node --check scripts/start.mjs`: passed.
- `pnpm format:check`: passed.
- `pnpm native-binaries:check`: passed.
- `pnpm normalize:check`: passed, no changes needed.
- `git diff --check`: passed.
- Bounded `pnpm start` smoke launched the app. Startup logs showed
  `enableSparkle=false` and `enableUpdater=false`, and the app-server connection
  reached `connected`.
