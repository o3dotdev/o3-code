# Patches

Patches describe local intent that must survive Source Refresh work from newer Codex App source material. Each active Patch has one Patch Record for human intent and migration notes, plus one Patch Recipe for apply/check behavior.

Patch Recipes are authoritative for exact snippets and failure conditions. Patch Records may summarize or excerpt the Patch Shape, but they should not duplicate executable matching logic.

## Active Patches

| Patch                                                                             | Markers                                                                                                       | Summary                                                                                                 |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [0001 resources-path-redirect](./0001-resources-path-redirect.md)                 | `o3-code-patch-begin: resources-path-redirect` / `o3-code-patch-end: resources-path-redirect`                 | Redirects `process.resourcesPath` to repo-local runtime resources when running through pnpm Electron.   |
| [0002 local-app-identity](./0002-local-app-identity.md)                           | `o3-code-patch-begin: local-app-identity` / `o3-code-patch-end: local-app-identity`                           | Applies the O3 Code visible app name and icon surfaces for repo-local runs.                             |
| [0003 statsig-gate-overrides](./0003-statsig-gate-overrides.md)                   | `o3-code-patch-begin: statsig-gate-overrides` / `o3-code-patch-end: statsig-gate-overrides`                   | Adds a local boolean Statsig gate override mechanism while preserving upstream gate results by default. |
| [0004 realtime-voice-statsig-override](./0004-realtime-voice-statsig-override.md) | `o3-code-patch-begin: realtime-voice-statsig-override` / `o3-code-patch-end: realtime-voice-statsig-override` | Forces only the realtime voice Statsig gate enabled.                                                    |

## Record Shape

Each Patch Record should include:

- `Status`
- `Markers`
- `Intent`
- `Changed Sites`
- `Upstream Anchors`
- `Patch Shape / Recipe`
- `Migration Notes`
- `Verification`

## Recipe Contract

Patch Recipes run after Normalization. A recipe should be able to apply to clean normalized source or verify an already-applied exact marker-delimited result. It should fail loudly when an upstream anchor is missing, duplicated, partially applied, or otherwise drifted.

Use semantic file discovery when chunk filenames or bundle placement may move, then use strict exact snippet replacements inside matched files. Do not use broad AST transforms for bundled copied source unless a future ADR changes this decision.

Every active Patch Record should have a matching Patch Recipe, and every Patch Recipe should declare its Patch ID, matching record path, and dependencies on earlier Patch IDs. Numeric filenames define the default recipe order, while declared dependencies make hidden ordering requirements explicit.

## Marker Contract

Every inline Patch region should use paired boundary markers with the same Patch ID:

```js
// o3-code-patch-begin: patch-id
// patched code
// o3-code-patch-end: patch-id
```

Patch Marker comments must be standalone lines. Only leading whitespace may appear before the `//`; do not place a marker after syntax such as `:`, `,`, `)`, or a patched expression. Keep markers scoped to the smallest changed expression or statement that remains readable; if expression syntax makes that awkward, use a small parenthesized expression rather than wrapping a whole unrelated function.

`pnpm normalize` skips copied source files that contain Patch Markers so formatter output does not move marker comments away from scoped local changes. It still validates marker placement and fails if a marker is not a standalone line.

Do not use a single marker for multi-line Patches. The boundary markers define the exact local region to preserve or migrate.
