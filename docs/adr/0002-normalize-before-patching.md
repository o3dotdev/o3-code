# 0002 Normalize Before Patching

## Status

Accepted

## Context

O3 Code preserves source material copied from bundled Codex App releases. The copied source is optimized for bundling, not for review or local patch maintenance: JavaScript and JSON are often minified, filenames may include content hashes, and future releases may move behavior between chunks.

Local Patches need to survive source refreshes. Applying or reviewing those Patches directly against minified upstream material makes the important local intent hard to find and hard to migrate.

## Decision

Run Normalization immediately after preserving upstream source material and before applying any Patch.

Normalization uses Prettier on copied app source files that Prettier can parse:

- `apps/desktop/app/.vite/build`
- `apps/desktop/app/webview`
- `apps/desktop/app/native-menu-locales`
- `apps/desktop/app/package.json`

Before formatting, Normalization canonicalizes generated Vite asset filenames under `apps/desktop/app/.vite/build` and `apps/desktop/app/webview/assets` when the hash-stripped target is unique in that directory. It rewrites references in copied text assets under `apps/desktop/app/.vite/build` and `apps/desktop/app/webview`, including files that contain Patch Markers. Ambiguous collision groups keep their hashed filenames and are logged by the normalizer.

Normalization skips copied source files that already contain Patch Markers. Patch regions are manually maintained so the markers remain close to the scoped local change and do not get moved into less reviewable syntax by a formatter. The Normalization script still validates Patch Marker placement in those files.

The Normalization script applies a deterministic post-process for generated CSS custom properties with empty `!important` values, because raw Prettier output for that bundle shape is not idempotent.

Keep Normalization separate from repo-authored formatting. Use `pnpm normalize` for copied source material and `pnpm format` for repo-authored docs and scripts.

## Consequences

Patch diffs are reviewed against a stable, readable baseline instead of bundled/minified source.

Most generated asset diffs are reviewed as modifications to stable canonical filenames instead of delete/add churn. Some generated assets remain hashed when multiple files would otherwise map to the same canonical name.

Refresh work should preserve this order: extract or copy source material, run Normalization, then apply or migrate Patch SOPs.

The normalized repository will differ mechanically from the installed Codex App source material. The original installed app remains the read-only upstream reference.

Binary assets, native modules, dependency folders, plists, and other non-Prettier formats are not normalized by this decision.
