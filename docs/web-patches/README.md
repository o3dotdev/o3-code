# Mirrored Web Client Patches

Mirrored Web Client Patches describe browser-only O3 Code intent that must survive Source Refresh work from newer Codex App source material.

The Mirrored Web Client Asset Tree is rebuilt from the patched Desktop Reconstruction Webview Assets before these patches are applied. Web Patch SOPs are authoritative for browser-only bundled renderer changes. A Source Refresh replaces copied upstream material, runs Normalization, applies Desktop Reconstruction Patch SOPs, rebuilds the Mirrored Web Client Asset Tree, and then an AI refresh agent reapplies each active Web Patch SOP one by one while recording fresh Patch Evidence.

## Active Patches

No active Mirrored Web Client Patches have been defined yet.

Web Patches use an independent numeric sequence under `docs/web-patches/`. A Web Patch ID is ordered only relative to other Web Patches, after all Desktop Reconstruction patches have already been applied and after the Mirrored Web Client Asset Tree has been rebuilt.

Create Web Patch SOPs by behavioral area, not by individual bundled string replacement. A browser behavior may require HTML injection, Bridge Shim support, and one or more bundled asset edits; keep those together when they serve one durable browser-only intent.

## SOP Shape

Each Web Patch folder should contain:

- `README.md` for status and intent
- `SOP.md` for the AI migration procedure
- `EVIDENCE.md` for the current release's known sites, anchors, patch shape, and validation notes

`SOP.md` should include:

- `Goal`
- `Non-Goals`
- `Dependencies`, when another Web Patch must be applied first
- `Discovery`
- `Application`
- `Validation`
- `Failure Conditions`

## Source Refresh Contract

During Source Refresh:

1. Replace copied Desktop Reconstruction source and runtime material from the newer Codex App.
2. Run `pnpm normalize`.
3. Apply active Desktop Reconstruction Patch SOPs in numeric order.
4. Rebuild the Mirrored Web Client Asset Tree at `apps/web/app/webview` with `pnpm derive:web`.
5. Apply active Web Patch SOPs in numeric order.
6. Update each Web Patch's `EVIDENCE.md` with the new release's discovered sites and validation notes.
7. Validate the Mirrored Web Client through Bridge Mode.

Do not preserve old browser-patched files when rebuilding the Mirrored Web Client Asset Tree. `pnpm derive:web` should delete only `apps/web/app/webview`, copy `apps/desktop/app/webview` into it, and stop. Rebuild the browser baseline from the patched Desktop Reconstruction Webview Assets, then reapply browser-only intent from Web Patch SOPs.

## Marker Contract

Every copied-source Web Patch region should use paired boundary markers with the same Web Patch ID:

```js
// o3-code-web-patch-begin: mobile-shell-viewport-and-scroll
// patched code
// o3-code-web-patch-end: mobile-shell-viewport-and-scroll
```

Use the Web Patch folder slug as the marker ID, without the numeric prefix. For `docs/web-patches/0001-mobile-shell-viewport-and-scroll/`, the marker ID is `mobile-shell-viewport-and-scroll`.

Web Patch Marker comments must be standalone lines. Only leading whitespace may appear before the `//`; do not place a marker after syntax such as `:`, `,`, `)`, or a patched expression. Keep markers scoped to the smallest changed expression or statement that remains readable; if expression syntax makes that awkward, use a small parenthesized expression rather than wrapping a whole unrelated function.

Do not use a single marker for multi-line Web Patches. The boundary markers define the exact browser-only region to preserve or migrate.

## Validation

Web Patch Marker validation is separate from `pnpm normalize:check`. Normalization applies only to copied Desktop Reconstruction source material. Web Patch validation should use a dedicated command, expected as `pnpm web-patches:check`, that validates `o3-code-web-patch-begin` and `o3-code-web-patch-end` marker placement under `apps/web/app/webview` without formatting or mutating the derived tree.
