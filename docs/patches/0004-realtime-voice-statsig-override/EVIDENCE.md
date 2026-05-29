# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.527.30818`
- Build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Known Sites

- `apps/desktop/app/webview/assets/statsig--EYRNU53.js`
- `apps/desktop/app/webview/assets/use-is-thread-realtime-enabled-DgNYbuij.js`
- `apps/desktop/app/webview/assets/debug-modal-T4gHjvtL.js`
- `apps/desktop/app/webview/assets/app-server-manager-signals-DkRDRgNB.js`

## Known Gate

- `2380644311`

## Patch Shape

- Patch `0003` installs the forced boolean gate set.
- This Patch adds only `2380644311` to that set.
- Patch Marker id: `realtime-voice-statsig-override`.

## Validation Notes

- `use-is-thread-realtime-enabled-DgNYbuij.js` still gates positive realtime
  availability with `2380644311` and keeps `REALTIME_VOICE_MODE_DEBUG_DISABLED`
  upstream-driven: the hook returns `t("2380644311") && data !== true`, so the
  forced gate enables availability without bypassing the debug kill switch.
- `debug-modal-T4gHjvtL.js` still reports the realtime gate and effective voice
  mode from `2380644311` plus the debug disabled override.
- `app-server-manager-signals-DkRDRgNB.js` still reads `2380644311` for the
  realtime conversation feature flag.
- `node --check apps/desktop/app/webview/assets/statsig--EYRNU53.js` passed.
- `pnpm start` is expected to log `realtime_conversation` in enabled features
  after app-server initialization.
