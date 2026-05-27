---
name: codex-app-source-refresh
description: Refresh O3 Code from a newer installed macOS Codex App release. Use when asked to update, bump, sync, or source-refresh the repo-local Desktop Reconstruction from /Applications/Codex.app or another installed Codex App, then normalize, reapply Desktop Reconstruction Patch SOPs, rebuild the Mirrored Web Client Asset Tree, reapply Web Patch SOPs, record evidence, and validate pnpm-run desktop and web behavior.
---

# Codex App Source Refresh

Refresh O3 Code from a newer installed Codex App by treating the installed app as read-only upstream material. The helper scripts can inventory and replace copied upstream material, but patch migration is always AI-owned through the repo's Desktop Reconstruction Patch SOPs and Mirrored Web Client Web Patch SOPs.

## Language Guardrails

- Call the work a `Source Refresh`, not a version bump or sync.
- Treat `Codex App` as the installed macOS app used as upstream source material.
- Treat `O3 Code` as the repo-local Electron reconstruction.
- Treat copied app source and runtime files as replaceable upstream input.
- Treat `Patch SOPs` as the authority for Desktop Reconstruction behavior that must survive refreshes.
- Treat `Web Patch SOPs` as the authority for Mirrored Web Client behavior that must survive refreshes.
- Treat `apps/web/app/webview` as a derived, committed Mirrored Web Client Asset Tree rebuilt from the patched Desktop Reconstruction Webview Assets.
- Do not update `Codex CLI Upstream` unless the user explicitly asks; it is a separate upstream boundary.

Read the repo's `CONTEXT.md`, `docs/source-refresh.md`, `docs/patches/README.md`, `docs/web-patches/README.md`, active `docs/patches/*/SOP.md`, and active `docs/web-patches/*/SOP.md` files before changing source material.

## Workflow

1. Preflight the repo and installed app.
   - Run `uv run --script scripts/inventory_codex_app.py --repo <repo> --source <Codex.app>`.
   - Confirm the installed app version/build is newer or intentionally selected.
   - Confirm the current branch is an intentional refresh branch and the repo is clean before replacement.
   - Inspect `git status --short --branch` yourself; do not rely only on script output.
2. Replace upstream material.
   - Run `uv run --script scripts/refresh_codex_app.py --repo <repo> --source <Codex.app> --yes`.
   - The script extracts `Resources/app.asar`, overlays unpacked app files, copies runtime resources, copies `Info.plist`, and updates mechanical source metadata.
   - If the script stops, inspect the reason and decide; do not work around guardrails casually.
3. Normalize copied source.
   - Run `pnpm normalize`.
   - If normalization fails, fix only normalization/tooling issues needed for the refreshed copied material.
4. Reapply active Desktop Reconstruction Patch SOPs in numeric order.
   - Load one `SOP.md` at a time, or delegate exactly one SOP at a time through the sequential sub-agent protocol below.
   - Rediscover the refreshed upstream site from the SOP anchors.
   - Apply the smallest local patch with required Patch Markers.
   - Update that patch's `EVIDENCE.md` immediately with version/build, discovered sites, patch shape, and validation notes.
   - Stop for human review when an SOP failure condition is met.
5. Regenerate repo-owned local assets when the SOP says so.
   - For Local App Identity, run `pnpm generate:icons` after upstream replacement if icon resources were removed or refreshed.
6. Rebuild the Mirrored Web Client Asset Tree.
   - Run `pnpm derive:web`.
   - The derivation step deletes only `apps/web/app/webview`, copies the already patched Desktop Reconstruction Webview Assets into `apps/web/app/webview`, and stops.
   - Do not preserve browser-patched files from the previous web tree during derivation.
7. Reapply active Web Patch SOPs in numeric order.
   - Load one `docs/web-patches/000*/SOP.md` at a time, or delegate exactly one Web Patch SOP at a time through the sequential sub-agent protocol below.
   - Rediscover the refreshed browser asset site from the SOP anchors.
   - Apply the smallest browser-only patch with required Web Patch Markers.
   - Update that web patch's `EVIDENCE.md` immediately with version/build, discovered sites, patch shape, and validation notes.
   - Stop for human review when an SOP failure condition is met.
8. Validate.
   - Run `pnpm normalize:check`.
   - Run focused static checks such as `node --check` for changed JavaScript chunks when useful.
   - Run `pnpm web-patches:check` when the command exists.
   - Run `pnpm start` and confirm the Desktop Reconstruction reaches renderer mount and app-server handshake.
   - Run `pnpm start:web` and confirm the Mirrored Web Client loads from `apps/web/app/webview` through Bridge Mode.
   - Validate each Patch SOP and Web Patch SOP's stated checks; do not mark evidence complete from generic app launch alone.
9. Review and commit shape.
   - Inspect `git diff --stat` and key changed files.
   - Prefer separated commits for upstream replacement, normalization, desktop patch reapplication, web tree derivation, web patch reapplication, evidence/docs, and generated local assets when the diff is large.

## Helper Scripts

Use scripts as assistants, not decision-makers.

- `scripts/inventory_codex_app.py`: `uv run --script` helper that reads the installed app plist, app.asar metadata, repo metadata, current branch, dirty state, and active Patch SOPs.
- `scripts/refresh_codex_app.py`: `uv run --script` helper for guarded replacement of copied Codex App material and mechanical metadata only.

The refresh script intentionally does not run `pnpm normalize`, does not migrate patches, does not update Patch Evidence, does not update `upstream/codex`, and does not commit.

## Sequential Sub-Agent Protocol

Use sub-agents only when the user explicitly asks for delegated patch work and the current environment supports sub-agents. The main session remains the orchestrator.

Main-session responsibilities:

- Perform preflight, upstream replacement, and `pnpm normalize` before delegation.
- Build the ordered Patch SOP list from `docs/patches/000*/SOP.md`.
- Build the ordered Web Patch SOP list from `docs/web-patches/000*/SOP.md` after rebuilding `apps/web/app/webview`.
- Start only one patch sub-agent at a time; wait for its final report and inspect marker placement, `git diff --stat`, touched files, and updated `EVIDENCE.md` before starting the next.
- Pass the next sub-agent a concise carry-forward summary from earlier patch reports, especially dependency completion, changed files, marker ids, validation results, and unresolved risks.
- Resolve conflicts, decide whether to stop on failure conditions, and run final cross-patch validation.

Patch sub-agent handoff packet:

- patch id and SOP path
- release metadata: source app path, version, build, and app.asar hash
- dependencies satisfied or dependency summary needed for this patch
- goal, non-goals, required anchors, marker id, and failure conditions from the SOP
- allowed files or surfaces for this patch
- validation checklist and evidence fields required
- concise carry-forward context from prior patch reports

Patch sub-agent contract:

- Own exactly one Patch SOP or Web Patch SOP folder and its `EVIDENCE.md`.
- Read only the repo context needed for that SOP: `CONTEXT.md`, the relevant patch index (`docs/patches/README.md` or `docs/web-patches/README.md`), the assigned `README.md`, the assigned `SOP.md`, that patch's `EVIDENCE.md`, relevant prior summary, and refreshed source anchors.
- Re-discover the patch site in the refreshed source; do not blindly copy old patched code.
- Apply only the assigned patch and required evidence update.
- Do not run broad final validation, commit, push, change unrelated patches, or update `upstream/codex`.
- Stop and report instead of editing when an SOP failure condition is met, when upstream appears to provide the patch behavior directly, or when the patch would need to broaden scope to "make it work."

Each patch sub-agent final report must include:

- status: `applied`, `skipped-human-review`, or `failed`
- patch id and SOP path
- files changed
- discovered refreshed sites and anchors
- exact patch shape and evidence update summary
- Patch Marker ids added or preserved
- validation commands run and outcomes
- blockers, failure conditions, or risks for the main session
- dependency impact or context the next patch sub-agent should know

If sub-agents are unavailable, run the same one-SOP-at-a-time protocol locally and keep the same report shape in notes before moving to the next patch.

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

For every active Web Patch:

- Start from the SOP goal and non-goals, not from old filenames.
- Use old Web Patch Markers only as historical hints.
- Expect bundled browser chunk names to change.
- Keep Web Patch Markers as standalone lines with the same web patch id.
- Keep changes browser-only in `apps/web/app/webview` or repo-owned bridge support files named by the SOP.
- If the Desktop Reconstruction now directly supports the browser behavior before derivation, stop and ask before removing the Web Patch.
- If a Web Patch goal no longer maps to identifiable browser asset behavior, stop and ask.

## Evidence Standard

Each `EVIDENCE.md` update should record:

- source app path, version, build, and app.asar hash
- refreshed file/chunk locations discovered by the SOP
- exact local patch shape and marker ids
- validation commands and outcomes
- any unresolved risk or reason human review is needed

Do not leave evidence as a scratch log. Keep it concise and release-specific.
