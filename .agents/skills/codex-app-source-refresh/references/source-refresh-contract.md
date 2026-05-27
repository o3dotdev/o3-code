# Source Refresh Contract

This reference summarizes the O3 Code refresh contract so agents can load it without repeatedly expanding all project docs.

The installed macOS Codex App is read-only upstream material. O3 Code is the repo-local Electron reconstruction. A Source Refresh replaces copied app source and runtime material, then rebuilds local intent through Normalization, Desktop Reconstruction Patch SOPs, and Mirrored Web Client Web Patch SOPs.

Order:

1. Inventory the installed app and repo state.
2. Replace copied upstream material from the selected Codex App.
3. Update mechanical source metadata.
4. Run `pnpm normalize`.
5. Reapply active Desktop Reconstruction Patch SOPs in numeric order.
6. Update each desktop patch's `EVIDENCE.md` immediately after applying and validating it.
7. Run `pnpm derive:web` to rebuild the committed Mirrored Web Client Asset Tree at `apps/web/app/webview` from the patched Desktop Reconstruction Webview Assets.
8. Reapply active Web Patch SOPs from `docs/web-patches/` in numeric order.
9. Update each web patch's `EVIDENCE.md` immediately after applying and validating it.
10. Run `pnpm normalize:check`, `pnpm web-patches:check` when available, focused static checks, `pnpm start`, and `pnpm start:web`.

Do not merge new upstream material into the existing copied tree. Replace it, then rebuild local behavior from SOPs. Do not preserve old browser-patched files when rebuilding `apps/web/app/webview`; derive the browser baseline from patched desktop assets and then reapply Web Patch SOPs.

Do not create placeholder Web Patch SOP folders. Create them only with concrete browser-only fixes, real anchors, non-goals, validation, and evidence. Keep `pnpm web-patches:check` marker-placement-only until real Web Patch folders exist and folder-to-marker validation becomes useful.

Do not update `upstream/codex` during a Codex App Source Refresh. Codex CLI Upstream is a separate boundary.

Sub-agent orchestration:

- Use sub-agents for patch migration only when the user explicitly asks and the environment supports them.
- The main session performs preflight, replacement, normalization, desktop patch sequencing, web tree derivation, web patch sequencing, diff review, final validation, and stop/go decisions.
- Run patch sub-agents sequentially, never in parallel, because later patches may depend on earlier refreshed sites or marker placement.
- Each patch sub-agent owns exactly one `docs/patches/000*/SOP.md` plus that patch's `EVIDENCE.md`.
- Each web patch sub-agent owns exactly one `docs/web-patches/000*/SOP.md` plus that web patch's `EVIDENCE.md`.
- Each patch sub-agent gets a fixed handoff packet: patch id, SOP path, release metadata, dependency summary, goal/non-goals, required anchors, allowed files or surfaces, marker id, validation checklist, failure conditions, evidence fields, and concise carry-forward context.
- Each patch sub-agent must report `applied`, `skipped-human-review`, or `failed`; changed files; discovered anchors; exact patch shape; marker ids; validation results; evidence update summary; blockers; and context for the next patch.

Failure conditions:

- an SOP goal no longer maps to identifiable upstream behavior
- upstream now directly supports the patch goal
- a patch would need to violate its non-goals
- validation cannot prove the patch works
- applying a patch would change an accepted durable domain decision
