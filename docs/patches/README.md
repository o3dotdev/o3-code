# Patch Records

Patch Records describe local intent that must survive refreshes from newer Codex App source material. Each Patch has one Markdown file so future agents can load only the relevant record.

## Active Patches

| Patch                                                                       | Markers                                                                                                 | Summary                                                                                                           |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [0001 resources-path-redirect](./0001-resources-path-redirect.md)           | `o3-code-patch-begin: resources-path-redirect` / `o3-code-patch-end: resources-path-redirect`           | Redirects `process.resourcesPath` to repo-local runtime resources when running through pnpm Electron.             |
| [0002 local-app-identity](./0002-local-app-identity.md)                     | `o3-code-patch-begin: local-app-identity` / `o3-code-patch-end: local-app-identity`                     | Applies the O3 Code visible app name and icon surfaces for repo-local runs.                                       |
| [0003 statsig-gates-always-enabled](./0003-statsig-gates-always-enabled.md) | `o3-code-patch-begin: statsig-gates-always-enabled` / `o3-code-patch-end: statsig-gates-always-enabled` | Makes boolean Statsig gates evaluate as enabled in O3 Code while leaving configs, layers, and experiments intact. |

## Record Shape

Each Patch Record should include:

- `Status`
- `Markers`
- `Intent`
- `Changed Sites`
- `Upstream Anchors`
- `Patch Shape`
- `Migration Notes`
- `Verification`

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
