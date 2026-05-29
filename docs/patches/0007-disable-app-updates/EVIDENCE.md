# Evidence

## Current Release

- Codex source version: `26.527.30818`
- Build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Sites

- `scripts/start.mjs`
  - Sets `O3_CODE_DISABLE_APP_UPDATES=1` by default for `pnpm start`
    (repo-owned; unchanged by the Source Refresh).
- `apps/desktop/app/.vite/build/main.js`
  - Patch ID: `disable-app-updates` (11 marked regions).
  - Adds module-scope `o3CodeAppUpdatesDisabled()` (treats any value except `0`
    as disabled), defined after `var Z0 = { enabled: !1, running: !1, state:
    "disabled" };`.
  - Renderer "ready" handler (`r.send(I, {...})`): forces `isUpdateReady` false,
    `lifecycleState` `idle`, and `installProgressPercent` null when disabled.
  - Command switch: ignores `check-app-update` and `install-app-update` when
    disabled.
  - Startup wiring: forces the `shouldIncludeSparkle` (`p`) and
    `shouldIncludeUpdater` (`m`) booleans to false before the
    `bootstrap handoff complete` trace, so menu/startup updater wiring is off.
  - Sparkle bridge callbacks (`u({ onInstallProgressChanged, onUpdateReadyChanged,
    onUpdateLifecycleStateChanged, onInstallUpdatesRequested, isTrustedIpcEvent })`):
    suppresses install-progress broadcasts, forces ready/lifecycle to
    false/`idle`, and ignores native install requests when disabled.

## Environment Inputs

- `O3_CODE_DISABLE_APP_UPDATES=1` by default from `scripts/start.mjs`.
- `O3_CODE_DISABLE_APP_UPDATES=0` allows upstream updater behavior for explicit
  debugging.

## Patch Shape

- Copied-source Patch Marker id: `disable-app-updates`.
- Main-process only. Renderer bundles are unchanged because the header button is
  already controlled by main-process update state.
- Module refs in the refreshed bundle: electron `i`. The startup function is
  `async function $0()`; sparkle include = `p`, updater include = `m`,
  windowServices = `P`, win32 = `k`, install handler = `ie`, isTrustedIpcEvent =
  `F`.

## Validation Notes

- `node --check apps/desktop/app/.vite/build/main.js`: passed.
- `node --check scripts/start.mjs`: passed.
- `pnpm normalize:check`: passed.
- `pnpm native-binaries:check`: passed.
- 11 `disable-app-updates` marker pairs present, matching the prior release's
  region count.
- Bounded `pnpm start` smoke (run in the validation pass) is expected to log
  `enableSparkle=false` / `enableUpdater=false` and reach app-server `connected`.
