# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.519.81530`
- Build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Known Sites

- `apps/desktop/app/webview/assets/statsig-BwN76nAo.js`

## Known Anchors

- `useFeatureGate`
- `useGateValue`
- `useStatsigClient`
- `StatsigClient._getFeatureGateImpl(...)`
- gate-backed atom calls to `client.checkGate(...)`
- direct helpers that return `client.checkGate(...)`

## Patch Shape

- The shared Statsig chunk defines an empty `o3CodeForcedBooleanStatsigGates` set and an `o3CodeMaybeForceFeatureGate(...)` helper.
- `StatsigClient._getFeatureGateImpl(...)` still performs upstream gate evaluation, exposure enqueueing, and gate evaluation event emission before returning a forced copy only when the gate name is explicitly present.
- This Patch does not add product gate names; Patch `0004` owns the realtime voice gate.
- Patch Marker id: `statsig-gate-overrides`.

## Validation Notes

- `node --check apps/desktop/app/webview/assets/statsig-BwN76nAo.js` passed.
- `pnpm normalize:check` passed.
- The app sunset gate `2929582856` remains outside the forced-gate set.
