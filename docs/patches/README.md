# Patch Records

Patch Records describe local intent that must survive refreshes from newer Codex App source material. Each Patch has one Markdown file so future agents can load only the relevant record.

## Active Patches

| Patch                                                             | Markers                                                                                       | Summary                                                                                               |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [0001 resources-path-redirect](./0001-resources-path-redirect.md) | `o3-code-patch-begin: resources-path-redirect` / `o3-code-patch-end: resources-path-redirect` | Redirects `process.resourcesPath` to repo-local runtime resources when running through pnpm Electron. |
| [0002 local-app-identity](./0002-local-app-identity.md)           | `o3-code-patch-begin: local-app-identity` / `o3-code-patch-end: local-app-identity`           | Applies the O3 Code visible app name and icon surfaces for repo-local runs.                           |

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

Do not use a single marker for multi-line Patches. The boundary markers define the exact local region to preserve or migrate.
