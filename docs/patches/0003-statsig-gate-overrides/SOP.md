# SOP

## Goal

Install a narrow local mechanism for forcing selected boolean Statsig gates enabled during O3 Code local runs.

## Non-Goals

- Do not force all Statsig gates.
- Do not override dynamic configs, layers, experiments, or parameter stores.
- Do not suppress upstream analytics or side effects unless unavoidable.
- Do not add product gate names in this Patch.
- Do not force negative gates or kill switches such as app sunset behavior.

## Discovery

1. Find the shared renderer Statsig wrapper, usually a `statsig-*.js` chunk.
2. Search for hooks and helpers around:
   - `useFeatureGate`
   - `useGateValue`
   - `useStatsigClient`
   - direct `client.checkGate(...)` calls
   - direct `client.getFeatureGate(...)` calls
3. Identify all boolean gate read paths that product code may use.
4. Confirm dynamic configs and non-boolean evaluations are not routed through the same forced-gate path.

## Application

1. Add a local forced-gate set.
2. Route boolean gate reads through helpers that call upstream evaluation first when possible.
3. Return the upstream result unless the gate name is explicitly present in the forced-gate set.
4. Keep the forced-gate set empty in this Patch.

Use Patch Markers with patch id `statsig-gate-overrides` around copied-source changes.

## Validation

- The patched Statsig chunk passes `node --check`.
- Non-overridden gates keep upstream behavior.
- The app sunset gate `2929582856` is not forced enabled.
- A separate product Patch can add one gate to the forced-gate set without changing shared plumbing.

## Failure Conditions

Stop when upstream replaces Statsig with another feature-gate abstraction, when boolean gate reads cannot be safely isolated, or when preserving upstream side effects is impossible without broader behavior changes.
