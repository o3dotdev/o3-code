# Source Refresh Contract

This reference summarizes the O3 Code refresh contract so agents can load it without repeatedly expanding all project docs.

The installed macOS Codex App is read-only upstream material. O3 Code is the repo-local Electron reconstruction. A Source Refresh replaces copied app source and runtime material, then rebuilds local intent through Normalization and Patch SOPs.

Order:

1. Inventory the installed app and repo state.
2. Replace copied upstream material from the selected Codex App.
3. Update mechanical source metadata.
4. Run `pnpm normalize`.
5. Reapply active Patch SOPs in numeric order.
6. Update each patch's `EVIDENCE.md` immediately after applying and validating it.
7. Run `pnpm normalize:check`, focused static checks, and `pnpm start`.

Do not merge new upstream material into the existing copied tree. Replace it, then rebuild local behavior from SOPs.

Do not update `upstream/codex` during a Codex App Source Refresh. Codex CLI Upstream is a separate boundary.

Failure conditions:

- an SOP goal no longer maps to identifiable upstream behavior
- upstream now directly supports the patch goal
- a patch would need to violate its non-goals
- validation cannot prove the patch works
- applying a patch would change an accepted durable domain decision
