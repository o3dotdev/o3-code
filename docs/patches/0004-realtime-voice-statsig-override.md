# 0004 realtime-voice-statsig-override

## Status

Active

## Markers

- `o3-code-patch-begin: realtime-voice-statsig-override`
- `o3-code-patch-end: realtime-voice-statsig-override`

## Intent

O3 Code should force only the realtime voice Statsig gate enabled so local runs can exercise realtime voice without depending on upstream rollout state.

This Patch depends on [0003 statsig-gate-overrides](./0003-statsig-gate-overrides.md). It owns the product decision to override gate `2380644311`; the shared override mechanism remains separate.

## Changed Sites

- `apps/desktop/app/webview/assets/statsig-CpJRDK88.js`

## Upstream Anchors

Realtime voice reads Statsig gate `2380644311` through the shared Statsig wrapper. Current anchors include:

- `apps/desktop/app/webview/assets/use-is-thread-realtime-enabled-CIkhHWOc.js`
- `apps/desktop/app/webview/assets/debug-modal-DvczLWeq.js`

## Patch Shape

The Patch adds the realtime voice gate name to the local forced-gate set:

```js
// o3-code-patch-begin: realtime-voice-statsig-override
o3CodeForcedFeatureGates.add(`2380644311`);
// o3-code-patch-end: realtime-voice-statsig-override
```

No other gate names belong in this Patch. If another product surface needs a local override, create a separate Patch Record and add a separate marker-delimited entry.

## Migration Notes

When refreshing from a newer Codex App bundle, verify that realtime voice still reads gate `2380644311` or update this Patch to the new gate name after confirming the feature semantics.

Do not broaden this Patch to all Statsig gates. Negative gates and kill switches, such as app sunset gate `2929582856`, must keep their upstream result.

## Verification

`node --check apps/desktop/app/webview/assets/statsig-CpJRDK88.js`

Realtime voice debug should report `Statsig gate: Enabled` and `Effective voice mode: Enabled` unless the `realtime-voice-mode-debug-disabled` override is set.
