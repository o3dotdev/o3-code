# Patches

Patches describe local O3 Code intent that must survive Source Refresh work from newer Codex App source material.

Patch SOPs are authoritative for bundled Electron source changes. A Source Refresh replaces copied upstream material, runs Normalization, and then an AI refresh agent reapplies each active Patch SOP one by one while recording fresh Patch Evidence.

## Active Patches

| Patch                                                                           | Summary                                                                                                 |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [0001 resources path redirect](./0001-resources-path-redirect/)                 | Redirects `process.resourcesPath` to repo-local runtime resources when running through pnpm Electron.   |
| [0002 local app identity](./0002-local-app-identity/)                           | Applies the O3 Code visible app name and icon surfaces for repo-local runs.                             |
| [0003 statsig gate overrides](./0003-statsig-gate-overrides/)                   | Adds a local boolean Statsig gate override mechanism while preserving upstream gate results by default. |
| [0004 realtime voice statsig override](./0004-realtime-voice-statsig-override/) | Forces only the realtime voice Statsig gate enabled.                                                    |
| [0005 integrated terminal helper mode](./0005-integrated-terminal-helper-mode/) | Preserves executable mode for the local integrated terminal native spawn helper.                        |
| [0006 web access settings](./0006-web-access-settings/)                         | Adds desktop-owned localhost Web access settings and Bridge Mode lifecycle control.                     |

## SOP Shape

Each Patch folder should contain:

- `README.md` for status and intent
- `SOP.md` for the AI migration procedure
- `EVIDENCE.md` for the current release's known sites, anchors, patch shape, and validation notes

`SOP.md` should include:

- `Goal`
- `Non-Goals`
- `Dependencies`, when another Patch must be applied first
- `Discovery`
- `Application`
- `Validation`
- `Failure Conditions`

## Source Refresh Contract

During Source Refresh:

1. Replace copied upstream source and runtime material from the newer Codex App.
2. Run `pnpm normalize`.
3. Apply active Patch SOPs in numeric order.
4. Update each Patch's `EVIDENCE.md` with the new release's discovered sites and validation notes.
5. Commit the final patched source tree so `pnpm start` remains runnable from checkout.

Do not merge refreshed material into the existing copied source tree. Rebuild local behavior from SOPs.

## Marker Contract

Every copied-source Patch region should use paired boundary markers with the same Patch ID:

```js
// o3-code-patch-begin: patch-id
// patched code
// o3-code-patch-end: patch-id
```

Patch Marker comments must be standalone lines. Only leading whitespace may appear before the `//`; do not place a marker after syntax such as `:`, `,`, `)`, or a patched expression. Keep markers scoped to the smallest changed expression or statement that remains readable; if expression syntax makes that awkward, use a small parenthesized expression rather than wrapping a whole unrelated function.

`pnpm normalize` skips copied source files that contain Patch Markers so formatter output does not move marker comments away from scoped local changes. It still validates marker placement and fails if a marker is not a standalone line.

Do not use a single marker for multi-line Patches. The boundary markers define the exact local region to preserve or migrate.
