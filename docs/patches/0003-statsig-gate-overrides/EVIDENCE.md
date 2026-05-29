# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.527.30818`
- Build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Known Sites

- `apps/desktop/app/webview/assets/statsig--EYRNU53.js` (canonical `statsig.js`
  name stayed hashed this release because it is in a normalization collision
  group).

## Known Anchors

- `useFeatureGate`
- `useGateValue`
- `useStatsigClient`
- `StatsigClient._getFeatureGateImpl(...)`
- gate-backed atom calls to `client.checkGate(...)`
- direct helpers that return `client.checkGate(...)`

## Patch Shape

- The shared Statsig chunk defines an empty `o3CodeForcedBooleanStatsigGates`
  set and an `o3CodeMaybeForceFeatureGate(...)` helper, inserted between the
  chunk imports and the first `var l = t((e) => {` module factory.
- `StatsigClient._getFeatureGateImpl(e, t)` still runs upstream gate evaluation,
  exposure enqueueing (`_enqueueExposure`), and `gate_evaluation` event emission,
  then returns `o3CodeMaybeForceFeatureGate(e, s)` so a forced copy is returned
  only when the gate name is explicitly present.
- This Patch does not add product gate names; Patch `0004` owns the realtime
  voice gate.
- Patch Marker id: `statsig-gate-overrides`.

## Validation Notes

- `node --check apps/desktop/app/webview/assets/statsig--EYRNU53.js` passed.
- `pnpm normalize:check` passed.
- The app sunset gate `2929582856` is not present in the forced-gate set.
