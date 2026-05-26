# 0003 statsig-gate-overrides

## Status

Active

## Markers

- `o3-code-patch-begin: statsig-gate-overrides`
- `o3-code-patch-end: statsig-gate-overrides`

## Intent

O3 Code should have a narrow local mechanism for overriding selected boolean Statsig feature gates while preserving upstream evaluation for every gate by default. This Patch only installs the shared override plumbing; it does not choose which product feature gates are enabled.

This Patch preserves upstream gate read side effects where practical. Dynamic configs, layers, experiments, parameter stores, and analytics logging remain upstream-driven.

## Changed Sites

- `apps/desktop/app/webview/assets/statsig-CpJRDK88.js`

## Upstream Anchors

Find the shared Statsig webview chunk imported as `statsig-*.js` by renderer assets.

In the extracted Codex App source for version `26.519.41501`, the shared wrapper exports gate helpers from `apps/desktop/app/webview/assets/statsig-CpJRDK88.js`. The relevant anchors are the wrapper paths around:

- `useFeatureGate`
- `useGateValue`
- `useStatsigClient`
- the gate-backed atom that calls `client.checkGate(...)`
- the direct helper that returns `client.checkGate(...)`

## Patch Shape

The Patch routes boolean gate APIs through helper functions that call upstream `checkGate(...)` and `getFeatureGate(...)` when available. The helper then returns the upstream result unless another Patch has added the gate name to `o3CodeForcedFeatureGates`.

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

Every changed call site is wrapped in paired Patch Markers. Marker comments are standalone `//` lines around the smallest changed expression or statement.

## Migration Notes

When refreshing from a newer Codex App bundle, preserve this override mechanism in the shared Statsig wrapper or equivalent feature-gate abstraction. Do not add product gate names in this Patch; each forced gate needs its own Patch Record that explains the product behavior being unlocked.

Verify that non-overridden gates preserve upstream behavior. In particular, the app sunset gate `2929582856` must not be forced enabled by this mechanism.

## Verification

`node --check apps/desktop/app/webview/assets/statsig-CpJRDK88.js`
