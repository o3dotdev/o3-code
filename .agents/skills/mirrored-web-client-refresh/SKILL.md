---
name: mirrored-web-client-refresh
description: Rebuild and patch O3 Code's Mirrored Web Client after Desktop Reconstruction patches are already applied. Use when asked to refresh, derive, migrate, or reapply browser-only web UI fixes for apps/web/app/webview without replacing the installed Codex App source.
---

# Mirrored Web Client Refresh

Rebuild O3 Code's committed Mirrored Web Client Asset Tree from the already patched Desktop Reconstruction Webview Assets, then reapply browser-only Web Patch SOPs with AI judgment.

Use this skill for the web phase of a Source Refresh, or for a later session that starts after the Desktop Reconstruction source, Normalization, and Desktop Reconstruction Patch SOPs are already complete.

## Language Guardrails

- Treat `apps/desktop/app/webview` as the Desktop Reconstruction Webview Assets.
- Treat `apps/web/app/webview` as the committed Mirrored Web Client Asset Tree.
- Treat `docs/web-patches/*/SOP.md` as the authority for browser-only behavior that must survive refreshes.
- Treat installed PWA or home-screen mode as the primary supported mobile target for mobile-specific Web Patches.
- Do not describe the web tree as a separate frontend product. It is a derived browser asset tree.
- Do not update installed Codex App material or `upstream/codex` in this skill.
- Do not preserve old browser-patched files when rebuilding the web tree.

Read `CONTEXT.md`, `docs/web-patches/README.md`, `docs/adr/0024-derived-mirrored-web-client-asset-tree.md`, `docs/adr/0025-mobile-pwa-primary-web-target.md`, and active `docs/web-patches/*/SOP.md` files before changing web assets.

## Workflow

1. Preflight.
   - Inspect `git status --short --branch`.
   - Confirm Desktop Reconstruction patches are already applied for the current source version.
   - Confirm no unrelated user work under `apps/web/app/webview` would be overwritten.
2. Rebuild the Mirrored Web Client Asset Tree.
   - Run `pnpm derive:web`.
   - The command should delete only `apps/web/app/webview`, copy patched `apps/desktop/app/webview` into `apps/web/app/webview`, and stop.
   - Do not run `pnpm normalize` over `apps/web/app/webview`.
   - If the command does not exist yet, stop before manual rebuild unless the user explicitly asked for implementation work.
3. Reapply active Web Patch SOPs in numeric order.
   - Load one `docs/web-patches/000*/SOP.md` at a time.
   - Do not create placeholder Web Patch SOP folders; create a SOP only when implementing a concrete browser-only fix with real anchors, non-goals, validation, and evidence.
   - Rediscover the refreshed browser asset site from the SOP anchors.
   - Apply the smallest browser-only patch with required Web Patch Markers.
   - Update that web patch's `EVIDENCE.md` immediately with source version/build, discovered sites, patch shape, and validation notes.
   - Stop for human review when an SOP failure condition is met.
4. Validate.
   - Run focused static checks such as `node --check` for changed JavaScript chunks when useful.
   - Run `pnpm web-patches:check` when the command exists.
   - Treat `pnpm web-patches:check` as marker-placement-only until real Web Patch folders exist and folder-to-marker validation can prove useful.
   - Run or add tests beside repo-owned code when the Web Patch changes `packages/bridge/**`, `scripts/**`, or another support package.
   - Run any validation listed by each Web Patch SOP.
   - Enable Web access from the running desktop app and confirm the Bridge Sidecar serves the Mirrored Web Client from `apps/web/app/webview`.
   - For visual, layout, route, scroll, viewport, or interaction Web Patches, collect browser evidence such as screenshots or explicit viewport inspection and record it in `EVIDENCE.md`.
   - For mobile-specific Web Patches, prioritize installed PWA or home-screen mode evidence; ordinary mobile browser tab evidence is optional unless the SOP explicitly requires it.
   - PWA evidence may be documented manual verification at first when automation cannot faithfully emulate installed mode.
5. Review.
   - Inspect `git diff --stat` and key changed files.
   - Keep web derivation, Web Patch reapplication, evidence, and tooling/docs changes reviewable as separate commit candidates when the diff is large.

## Web Patch Migration Rules

- Start from the SOP goal and non-goals, not from old filenames.
- Use old Web Patch Markers only as historical hints.
- Prefer normalized canonical chunk names inherited from `apps/desktop/app/webview`; expect hashed names only for collision groups that Normalization could not safely canonicalize.
- Keep Web Patch Markers as standalone lines with the same web patch id:

```js
// o3-code-web-patch-begin: patch-id
// patched code
// o3-code-web-patch-end: patch-id
```

- Use Web Patch Markers only in copied or derived bundled assets under `apps/web/app/webview`, not in repo-owned support code.
- Keep changes browser-only in `apps/web/app/webview` by default.
- Change repo-owned support files such as `packages/bridge/**` or `scripts/**` only when the SOP explicitly names those allowed surfaces.
- If the Desktop Reconstruction now provides the browser behavior before derivation, stop and ask before removing the Web Patch.
- If a Web Patch goal no longer maps to identifiable browser asset behavior, stop and ask.
- Do not broaden a Web Patch to "make it work" outside its SOP non-goals.

## Evidence Standard

Each Web Patch `EVIDENCE.md` update should record:

- source app path, version, build, and app.asar hash when available
- refreshed file/chunk locations discovered by the SOP
- exact local patch shape and marker ids
- validation commands and outcomes
- any unresolved risk or reason human review is needed

Keep evidence concise and release-specific.
