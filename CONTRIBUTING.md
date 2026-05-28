# Contributing to O3 Code

O3 Code reconstructs the installed macOS Codex App into a repo-local Electron
project that can be installed, formatted, patched, refreshed, and run through
`pnpm`.

Keep the root [README.md](README.md) focused on the public product story. Put
developer setup, architecture, and source refresh details here or in `docs/`.

## Development Setup

Requirements:

- macOS
- Node.js with Corepack
- `pnpm` 11.1.0, as declared in `package.json`
- The official `codex` CLI installed outside this repo and available on `PATH`,
  or an explicit `O3_CODE_UPSTREAM_CODEX_PATH`

Start the local app:

```sh
pnpm install
pnpm start
```

`pnpm start` runs the extracted Electron app from `apps/desktop/app/` and points
it at repo-local runtime resources in `apps/desktop/resources/`. App-server
traffic starts through `@o3dotdev/app-server-router`, which delegates to the
external `codex` CLI.

Local Electron runs use `~/Library/Application Support/O3 Code` by default so
they do not collide with the installed Codex App profile. Set
`CODEX_ELECTRON_USER_DATA_PATH` for a custom profile, or set
`O3_CODE_USE_CODEX_USER_DATA=1` only when you intentionally need to reuse
`~/Library/Application Support/Codex`.

## Useful Commands

```sh
pnpm format
pnpm format:check
pnpm normalize
pnpm normalize:check
pnpm derive:web
pnpm web-patches:check
pnpm app-server-router:test
```

- `pnpm normalize` rewrites preserved Codex App source into the patch-friendly
  baseline.
- `pnpm derive:web` rebuilds the Mirrored Web Client Asset Tree from the patched
  Desktop Reconstruction webview assets.
- `pnpm app-server-router:test` runs the App Server Router package tests.

## Project Architecture

```txt
apps/desktop/app/          preserved Electron app source from the Codex App
apps/desktop/resources/    runtime resources used by repo-local app runs
apps/desktop/metadata/     copied macOS bundle metadata
apps/web/app/webview/      derived Mirrored Web Client asset tree
packages/app-server-router/ App-server launch facade for the external Codex CLI
packages/bridge/           Bridge Sidecar, Bridge Shim, and Web access support
scripts/                   repo maintenance, normalization, and launcher tools
docs/adr/                  durable architectural decisions
docs/patches/              Desktop Reconstruction Patch SOPs and evidence
docs/web-patches/          Mirrored Web Client Patch SOPs and evidence
```

The installed Codex App is read-only upstream material. O3 Code preserves copied
source and runtime assets, then layers local intent through documented Patches
that can be rediscovered and reapplied during future refreshes.

## Core Concepts

- **Desktop Reconstruction** is the repo-local Electron app reconstructed from
  the installed Codex App.
- **Mirrored Web Client** is the browser-facing asset tree derived from the
  patched desktop webview assets.
- **Bridge Mode** lets the browser-facing client use the local Desktop
  Reconstruction as the privileged capability host.
- **Patch** means intentional O3 Code behavior layered onto preserved Codex App
  source.
- **Normalization** is deterministic cleanup of preserved source material. It is
  not product intent.
- **Source Refresh** replaces preserved upstream material from a newer Codex App
  release, then rebuilds O3 Code behavior through Normalization and Patch SOPs.

Use [CONTEXT.md](CONTEXT.md) for project language and
[docs/adr/](docs/adr/) for durable decisions.

## Patch Workflow

When changing preserved Codex App source or derived webview assets:

1. Identify whether the change is a Desktop Reconstruction Patch or a Mirrored
   Web Client Patch.
2. Keep the changed region small and focused.
3. Add or update the owning SOP and evidence under `docs/patches/` or
   `docs/web-patches/`.
4. Use paired Patch Markers only in volatile preserved or derived bundled
   source.
5. Run the relevant checks before opening a PR.

Do not patch the compiled `codex` binary directly. Put O3 Code-specific
app-server behavior in `packages/app-server-router/`, and use
`O3_CODE_UPSTREAM_CODEX_PATH` only to point at an explicit external `codex`
executable when `PATH` selection is not enough.

## Source Refresh Workflow

For a Codex App refresh, follow [docs/source-refresh.md](docs/source-refresh.md).
The short version is:

1. Replace copied Codex App source and runtime material from the new release.
2. Update source metadata such as app version and build number.
3. Run `pnpm normalize`.
4. Reapply active Desktop Reconstruction Patch SOPs in numeric order.
5. Record fresh Patch Evidence.
6. Run `pnpm derive:web`.
7. Reapply active Web Patch SOPs in numeric order.
8. Record fresh Web Patch Evidence.
9. Validate desktop and web behavior.

Do not merge new upstream material into old copied trees. Replace upstream input
first, then rebuild local O3 Code intent from SOPs.

## Issue Tracker

Issues and PRDs are tracked in GitHub Issues for `o3dotdev/o3-code`.

Use the repo labels documented in [docs/agents/triage-labels.md](docs/agents/triage-labels.md):

- `needs-triage`
- `needs-info`
- `ready-for-agent`
- `ready-for-human`
- `wontfix`

## Pull Request Checklist

Before opening a PR:

- Keep the public README focused on users and selling points.
- Move developer detail into this file or `docs/`.
- Run `pnpm format:check`.
- Run `pnpm normalize:check` when copied Desktop Reconstruction source is
  touched.
- Run `pnpm web-patches:check` when Mirrored Web Client assets are touched.
- Update Patch SOPs, Patch Evidence, ADRs, or `CONTEXT.md` when the change
  alters durable project behavior.
