# SOP

## Goal

Force only the realtime voice availability gate enabled for O3 Code local runs.

## Non-Goals

- Do not broaden this Patch to all Statsig gates.
- Do not disable realtime debug kill switches.
- Do not bypass microphone permission, account state, or app-server errors.
- Do not route realtime network calls; that is owned by the app-server/auth Patch path.

## Dependencies

- [0003 Statsig Gate Overrides](../0003-statsig-gate-overrides/)

## Discovery

1. Locate the realtime voice availability hook or equivalent product decision.
2. Search for current anchors:
   - `REALTIME_VOICE_MODE_DEBUG_DISABLED`
   - realtime voice debug modal labels
   - previous gate id `2380644311`
   - app-server realtime methods such as `thread/realtime/start`
3. Confirm the candidate gate controls positive realtime voice UI availability.
4. Confirm separate debug or kill-switch controls still exist and stay upstream-driven.

## Application

Add only the confirmed realtime voice positive gate to the forced-gate set installed by Patch 0003.

Use Patch Markers with patch id `realtime-voice-statsig-override` around copied-source changes.

## Validation

- The patched Statsig chunk passes `node --check`.
- Realtime voice debug reports `Statsig gate: Enabled`.
- Realtime voice debug reports `Effective voice mode: Enabled` unless the debug disabled override is set.
- The UI can still surface app-server errors from realtime startup.

## Failure Conditions

Stop when the realtime voice gate cannot be confidently identified, when upstream removes the feature, or when enabling the gate would bypass a negative safety condition instead of a positive rollout condition.
