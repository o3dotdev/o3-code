# Evidence

## Current Release

- Codex App version: `26.519.41501`
- Build: `3044`

## Known Sites

- `apps/desktop/app/webview/assets/statsig-CpJRDK88.js`
- `apps/desktop/app/webview/assets/use-is-thread-realtime-enabled-CIkhHWOc.js`
- `apps/desktop/app/webview/assets/debug-modal-DvczLWeq.js`

## Known Gate

- `2380644311`

## Known Patch Shape

```js
// o3-code-patch-begin: realtime-voice-statsig-override
o3CodeForcedFeatureGates.add(`2380644311`);
// o3-code-patch-end: realtime-voice-statsig-override
```

## Validation Notes

Realtime voice debug should report `Statsig gate: Enabled` and `Effective voice mode: Enabled` unless the `realtime-voice-mode-debug-disabled` override is set.
