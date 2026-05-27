# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.519.81530`
- Build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Known Sites

- `apps/desktop/app/webview/assets/statsig.js`
- `apps/desktop/app/webview/assets/use-is-thread-realtime-enabled.js`
- `apps/desktop/app/webview/assets/debug-modal-B8xDbX-9.js`
- `apps/desktop/app/webview/assets/app-server-manager-signals.js`

## Known Gate

- `2380644311`

## Patch Shape

- Patch `0003` installs the forced boolean gate set.
- This Patch adds only `2380644311` to that set.
- Patch Marker id: `realtime-voice-statsig-override`.

## Validation Notes

- `use-is-thread-realtime-enabled.js` still gates positive realtime availability with `2380644311` and keeps `REALTIME_VOICE_MODE_DEBUG_DISABLED` upstream-driven.
- `debug-modal-B8xDbX-9.js` still reports `Statsig gate` and `Effective voice mode` from the same gate plus the debug disabled override.
- `node --check apps/desktop/app/webview/assets/statsig.js` passed.
- `pnpm start` logged `realtime_conversation` in enabled features after app-server initialization.
