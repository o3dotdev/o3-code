# SOP

## Goal

Disable upstream Codex App update checks, update-ready renderer state, and
update installation prompts during O3 Code repo-local runs.

## Non-Goals

- Do not remove upstream updater source code.
- Do not change the installed Codex App's updater or appcast configuration.
- Do not implement an O3 Code update mechanism in this Patch.

## Dependencies

- Apply after Patch 0001 Resources Path Redirect so the distinction between
  installed Codex App resources and O3 Code runtime behavior is preserved.

## Discovery

1. Find the copied main-process bundle under `apps/desktop/app/.vite/build/`.
2. Locate Sparkle/updater startup state, usually around
   `shouldIncludeSparkle(...)`, `shouldIncludeUpdater(...)`, or
   `enableSparkle`.
3. Locate renderer update state messages:
   - `app-update-ready-changed`
   - `app-update-lifecycle-state-changed`
   - `app-update-install-progress-changed`
4. Locate renderer IPC commands:
   - `check-app-update`
   - `install-app-update`
5. Locate updater callback registration, usually through
   `setSparkleBridgeHandlers`.

## Application

1. Keep `scripts/start.mjs` as the source of the local default
   `O3_CODE_DISABLE_APP_UPDATES=1`.
2. Add a small copied-source helper named `o3CodeAppUpdatesDisabled()` that
   treats any value except `0` as disabled.
3. When disabled:
   - force `shouldIncludeSparkle` and `shouldIncludeUpdater` results to false
     for menu/startup wiring;
   - send `isUpdateReady: false` to renderer windows;
   - send update lifecycle state `idle`;
   - suppress install progress broadcasts;
   - ignore `check-app-update` and `install-app-update`;
   - ignore native update install requests from Sparkle callbacks.

Use Patch Markers with patch id `disable-app-updates` around copied-source
changes.

## Validation

- `node --check apps/desktop/app/.vite/build/main.js` succeeds.
- `pnpm format:check` succeeds.
- `pnpm native-binaries:check` succeeds.
- `pnpm start` does not show the header `Update` button when the installed
  Codex App has an available upstream update.
- `O3_CODE_DISABLE_APP_UPDATES=0 pnpm start` remains available for upstream
  updater comparison only.

## Failure Conditions

Stop if upstream moves update state entirely into the renderer or an external
native process and there is no main-process boundary where O3 Code can suppress
the update lifecycle without broad renderer rewrites.
