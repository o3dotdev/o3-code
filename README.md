# O3 Code

O3 Code is a repo-local reconstruction of the installed macOS Codex App.

## Run

```sh
pnpm install
pnpm codex:setup
pnpm start
```

`pnpm start` runs the extracted Electron app from `apps/desktop/app/` and points it at repo-local runtime resources in `apps/desktop/resources/`.

By default, runtime user data is shared with the installed Codex App at `~/Library/Application Support/Codex`, so local runs use the same Electron profile, auth session, and app state as the installed app. Override that with `CODEX_ELECTRON_USER_DATA_PATH` when an isolated or custom profile is needed.

The launcher also sets `ELECTRON_RENDERER_URL` to the extracted `apps/desktop/app/webview/index.html`; without that override, the unpackaged main process tries to load its development server URL.

## Normalize

```sh
pnpm normalize
pnpm normalize:check
```

`pnpm normalize` rewrites copied app source into a patch-friendly baseline. During Source Refresh work, run it after replacing copied Codex App source material and before applying Patch SOPs.

## Codex CLI

```sh
pnpm codex:setup
pnpm codex:build
```

The Codex CLI/app-server source is checked out at `upstream/codex/` from `o3dotdev/o3-codex`. `pnpm codex:build` builds the `codex` binary from that checkout and installs it to `apps/desktop/resources/codex`, which is the binary used by `pnpm start`.

## Layout

- `apps/desktop/app/` - extracted `Resources/app.asar` source bundle.
- `apps/desktop/branding/o3-code-icon/` - source and generated review outputs for O3 Code local identity icons.
- `apps/desktop/branding/original-codex-icon/` - high-resolution reference export of the original Codex Dock icon.
- `apps/desktop/resources/` - copied runtime resources from `Codex.app/Contents/Resources`, excluding the original `app.asar`.
- `apps/desktop/metadata/Info.plist` - original macOS bundle metadata.
- `packages/` - future shared workspace packages.
- `docs/agents/` - repo configuration for agent skills.
- `docs/adr/` - architectural decisions for durable extraction choices.
- `docs/patches/` - one Patch SOP folder per local Patch.
- `docs/source-refresh.md` - Source Refresh procedure for replacing upstream app material and reapplying Patch SOPs.
- `docs/upstreams/` - source pins and sync notes for non-Electron upstream material.
- `upstream/codex/` - pinned Codex CLI/app-server source checkout.

## Source

- Source app: `/Applications/Codex.app`
- Version: `26.519.81530`
- Build: `3178`
