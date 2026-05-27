# Source Refresh

Source Refresh updates O3 Code from a newer installed Codex App release. The refresh starts from clean upstream material and rebuilds O3 Code intent through Patch SOPs.

## Procedure

1. Start a refresh branch from the current O3 Code base branch.
2. Replace copied Codex App material with the newer release material.
3. Update source metadata such as app version and build number.
4. Run `pnpm normalize`.
5. Reapply each active Desktop Reconstruction Patch SOP in numeric order.
6. Record fresh Patch Evidence for each Desktop Reconstruction Patch.
7. Run `pnpm derive:web` to rebuild the committed Mirrored Web Client Asset Tree at `apps/web/app/webview` from the patched Desktop Reconstruction Webview Assets.
8. Reapply each active Web Patch SOP in numeric order.
9. Record fresh Patch Evidence for each Web Patch.
10. Run `pnpm web-patches:check` when available.
11. Run `pnpm start` and validate the Desktop Reconstruction.
12. Run `pnpm start:web` and validate the Mirrored Web Client.
13. Open a PR that shows the upstream refresh, normalization, reapplied Patches, derived web tree, Web Patches, and evidence updates.

Do not merge refreshed material into the existing copied source tree. Replace copied source and runtime material as upstream input, then rebuild local O3 Code behavior from the Patch SOPs. Do not preserve old browser-patched files when rebuilding the Mirrored Web Client Asset Tree; derive the browser baseline from patched desktop assets, then reapply browser-only intent from Web Patch SOPs.

Launcher scripts should derive the default `CODEX_BUILD_NUMBER` from package metadata. Source Refresh should not leave `scripts/start.mjs` or `scripts/start-web.mjs` pinned to an older literal build number.

## Commit Shape

Prefer separate commits when the diff is large enough to benefit from review separation:

```text
chore(upstream): refresh desktop app source
chore(normalize): normalize refreshed desktop app source
patch(resources): reapply resources path redirect
patch(identity): reapply local app identity
patch(flags): reapply statsig gate override support
patch(flags): reapply realtime voice gate override
chore(web): derive mirrored web client assets
patch(web): reapply browser UI compatibility patches
docs(patches): update refresh evidence
```

## Failure Conditions

Stop and ask for human review when:

- a Patch SOP's goal no longer maps to an identifiable upstream behavior
- the discovered upstream code contradicts the Patch's non-goals
- validation cannot prove that the Patch works
- applying the Patch would require changing a durable domain decision
- a Patch appears unnecessary because upstream now supports the behavior directly
- a Web Patch appears unnecessary because the derived browser asset tree now supports the behavior directly
