# O3 Code

O3 Code is a repo-local reconstruction of the installed macOS Codex App.

## Run

```sh
pnpm install
pnpm start
```

`pnpm start` runs the extracted Electron app from `app/` and points it at repo-local runtime resources in `resources/`.

By default, runtime user data is stored in `.codex-user-data/` so this checkout does not share the installed app's user data directory. Override that with `CODEX_ELECTRON_USER_DATA_PATH` when needed.

The launcher also sets `ELECTRON_RENDERER_URL` to the extracted `app/webview/index.html`; without that override, the unpackaged main process tries to load its development server URL.

## Normalize

```sh
pnpm normalize
pnpm normalize:check
```

`pnpm normalize` rewrites copied app source into a patch-friendly baseline. Run it after refreshing copied Codex App source material and before applying local Patch Records.

## Layout

- `app/` - extracted `Resources/app.asar` source bundle.
- `resources/` - copied runtime resources from `Codex.app/Contents/Resources`, excluding the original `app.asar`.
- `metadata/Info.plist` - original macOS bundle metadata.
- `docs/agents/` - repo configuration for agent skills.
- `docs/adr/` - architectural decisions for durable extraction choices.
- `docs/patches/` - one Patch Record per local Patch.

## Source

- Source app: `/Applications/Codex.app`
- Version: `26.519.41501`
- Build: `3044`
