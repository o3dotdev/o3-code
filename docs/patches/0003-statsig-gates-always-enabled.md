# 0003 statsig-gates-always-enabled

## Status

Active

## Markers

- `o3-code-patch-begin: statsig-gates-always-enabled`
- `o3-code-patch-end: statsig-gates-always-enabled`

## Intent

O3 Code should treat boolean Statsig feature gates as enabled so local runs are not blocked by upstream rollout decisions. This Patch preserves upstream gate read side effects where practical, then forces the effective boolean result to enabled.

This Patch does not replace Statsig dynamic configs, layers, experiments, parameter stores, or analytics logging. Those values carry structured payloads and should continue to come from upstream evaluation.

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

Every changed call site is wrapped in paired Patch Markers, not only the helper definitions. Marker comments are standalone `//` lines around the smallest changed expression or statement. When a changed expression lives inside syntax such as a ternary branch, the Patch wraps the narrow containing `return` statement so the markers still stay on their own lines instead of appearing after `:` or inline with code.

The Normalization script skips copied source files with Patch Markers and validates that marker comments remain standalone lines, preserving this scoped marker layout.

The Patch routes boolean gate APIs through helper functions that call upstream `checkGate(...)` and `getFeatureGate(...)` when available, then force boolean gate results to enabled:

```js
// o3-code-patch-begin: statsig-gates-always-enabled
return n == null ? !0 : o3CodeCheckGate(n, t);
// o3-code-patch-end: statsig-gates-always-enabled
```

The helper block is also marker-delimited:

```js
// o3-code-patch-begin: statsig-gates-always-enabled
function o3CodeCheckGate(e, t, n) {
  try {
    e?.checkGate?.(t, n);
  } catch {}
  return !0;
}
function o3CodeGetFeatureGate(e, t, n) {
  try {
    return o3CodeForceFeatureGate(e?.getFeatureGate?.(t, n));
  } catch {
    return o3CodeForceFeatureGate(null, t);
  }
}
function o3CodeForceFeatureGate(e, t) {
  return e && typeof e == `object`
    ? { ...e, value: !0 }
    : {
        name: t ?? ``,
        details: { reason: `O3CodeAlwaysEnabled` },
        ruleID: ``,
        __evaluation: null,
        value: !0,
        idType: null,
      };
}
// o3-code-patch-end: statsig-gates-always-enabled
```

The shared wrapper routes each boolean gate API through those helpers inside its own marker pair. `getFeatureGate(...)` keeps the upstream object shape and metadata when available, but overrides `value` to `true`.

## Migration Notes

When refreshing from a newer Codex App bundle, preserve this behavior in the shared Statsig wrapper or equivalent feature-gate abstraction. Do not force dynamic configs, layers, experiments, parameter stores, or log events unless a separate Patch explicitly decides how to handle their structured values.

Search for renderer gate reads such as `checkGate`, `getFeatureGate`, `useGateValue`, and `useFeatureGate`. Each migrated gate read should be surrounded by the `statsig-gates-always-enabled` begin/end markers so refresh agents can distinguish local routing from preserved upstream code. Also verify that realtime voice still reads the gate named `2380644311` through the shared gate path.

If upstream replaces Statsig with another boolean gate provider, migrate the Patch to the new provider boundary rather than individual feature call sites.

## Verification

`node --check apps/desktop/app/webview/assets/statsig-CpJRDK88.js`

Realtime voice debug should report `Statsig gate: Enabled` and `Effective voice mode: Enabled` unless the `realtime-voice-mode-debug-disabled` override is set.
