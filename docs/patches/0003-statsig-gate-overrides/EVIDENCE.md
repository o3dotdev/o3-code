# Evidence

## Current Release

- Codex App version: `26.519.41501`
- Build: `3044`

## Known Sites

- `apps/desktop/app/webview/assets/statsig-CpJRDK88.js`

## Known Anchors

- `useFeatureGate`
- `useGateValue`
- `useStatsigClient`
- gate-backed atom calls to `client.checkGate(...)`
- direct helpers that return `client.checkGate(...)`

## Known Patch Shape

```js
// o3-code-patch-begin: statsig-gate-overrides
var o3CodeForcedFeatureGates = new Set();
function o3CodeShouldForceFeatureGate(e) {
  return o3CodeForcedFeatureGates.has(e);
}
function o3CodeCheckGate(e, t, n) {
  try {
    let r = e?.checkGate?.(t, n) === !0;
    return o3CodeShouldForceFeatureGate(t) ? !0 : r;
  } catch {
    return o3CodeShouldForceFeatureGate(t);
  }
}
// o3-code-patch-end: statsig-gate-overrides
```

## Validation Notes

The current patched chunk passes syntax validation. The shared plumbing has no product gate names without a dependent Patch.
