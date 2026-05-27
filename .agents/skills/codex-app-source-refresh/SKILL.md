---
name: codex-app-source-refresh
description: Refresh O3 Code from a newer installed macOS Codex App release. Use when asked to update, bump, sync, or source-refresh the repo-local Desktop Reconstruction from /Applications/Codex.app or another installed Codex App, then normalize, reapply Patch SOPs with AI judgment, record Patch Evidence, and validate pnpm-run app behavior.
---

# Codex App Source Refresh

Refresh O3 Code from a newer installed Codex App by treating the installed app as read-only upstream material. The helper scripts can inventory and replace copied upstream material, but patch migration is always AI-owned through the repo's Patch SOPs.

## Language Guardrails

- Call the work a `Source Refresh`, not a version bump or sync.
- Treat `Codex App` as the installed macOS app used as upstream source material.
- Treat `O3 Code` as the repo-local Electron reconstruction.
- Treat copied app source and runtime files as replaceable upstream input.
- Treat `Patch SOPs` as the authority for local behavior that must survive refreshes.
- Do not update `Codex CLI Upstream` unless the user explicitly asks; it is a separate upstream boundary.

Read the repo's `CONTEXT.md`, `docs/source-refresh.md`, `docs/patches/README.md`, and active `docs/patches/*/SOP.md` files before changing source material.

## Workflow

1. Preflight the repo and installed app.
   - Run `scripts/inventory_codex_app.py --repo <repo> --source <Codex.app>`.
   - Confirm the installed app version/build is newer or intentionally selected.
   - Confirm the current branch is an intentional refresh branch and the repo is clean before replacement.
   - Inspect `git status --short --branch` yourself; do not rely only on script output.
2. Replace upstream material.
   - Run `scripts/refresh_codex_app.py --repo <repo> --source <Codex.app> --yes`.
   - The script extracts `Resources/app.asar`, overlays unpacked app files, copies runtime resources, copies `Info.plist`, and updates mechanical source metadata.
   - If the script stops, inspect the reason and decide; do not work around guardrails casually.
3. Normalize copied source.
   - Run `pnpm normalize`.
   - If normalization fails, fix only normalization/tooling issues needed for the refreshed copied material.
4. Reapply active Patch SOPs in numeric order.
   - Load one `SOP.md` at a time.
   - Rediscover the refreshed upstream site from the SOP anchors.
   - Apply the smallest local patch with required Patch Markers.
   - Update that patch's `EVIDENCE.md` immediately with version/build, discovered sites, patch shape, and validation notes.
   - Stop for human review when an SOP failure condition is met.
5. Regenerate repo-owned local assets when the SOP says so.
   - For Local App Identity, run `pnpm generate:icons` after upstream replacement if icon resources were removed or refreshed.
6. Validate.
   - Run `pnpm normalize:check`.
   - Run focused static checks such as `node --check` for changed JavaScript chunks when useful.
   - Run `pnpm start` and confirm the Desktop Reconstruction reaches renderer mount and app-server handshake.
   - Validate each Patch SOP's stated checks; do not mark evidence complete from generic app launch alone.
7. Review and commit shape.
   - Inspect `git diff --stat` and key changed files.
   - Prefer separated commits for upstream replacement, normalization, patch reapplication, evidence/docs, and generated local assets when the diff is large.

## Helper Scripts

Use scripts as assistants, not decision-makers.

- `scripts/inventory_codex_app.py`: reads the installed app plist, app.asar metadata, repo metadata, current branch, dirty state, and active Patch SOPs.
- `scripts/refresh_codex_app.py`: guarded replacement of copied Codex App material and mechanical metadata only.

The refresh script intentionally does not run `pnpm normalize`, does not migrate patches, does not update Patch Evidence, does not update `upstream/codex`, and does not commit.

## Replacement Scope

Replace only these upstream-owned targets:

- `apps/desktop/app/` from extracted `Contents/Resources/app.asar`, plus unpacked app files overlaid from `app.asar.unpacked`
- `apps/desktop/resources/` from `Contents/Resources/` except raw `app.asar`
- `apps/desktop/metadata/Info.plist`
- mechanical source metadata in root `package.json`, `apps/desktop/app/package.json`, and `docs/extraction.md`

Do not delete repo-owned folders such as `apps/desktop/branding`, `packages`, `scripts`, `docs`, or `upstream/codex`.

## AI-Owned Patch Migration

For every active patch:

- Start from the SOP goal and non-goals, not from old filenames.
- Use old Patch Markers only as historical hints.
- Expect bundled chunk names to change.
- Keep Patch Markers as standalone lines with the same patch id.
- Preserve upstream behavior by default; local behavior must be narrow and explicit.
- If upstream now provides the same behavior directly, stop and ask before removing the patch.
- If a patch goal no longer maps to identifiable upstream behavior, stop and ask.

## Evidence Standard

Each `EVIDENCE.md` update should record:

- source app path, version, build, and app.asar hash
- refreshed file/chunk locations discovered by the SOP
- exact local patch shape and marker ids
- validation commands and outcomes
- any unresolved risk or reason human review is needed

Do not leave evidence as a scratch log. Keep it concise and release-specific.
