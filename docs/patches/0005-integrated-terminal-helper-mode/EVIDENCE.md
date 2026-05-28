# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.519.81530`
- Build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Findings

- The installed app stores `app.asar.unpacked/node_modules/node-pty/build/Release/spawn-helper`.
- O3 Code no longer keeps repo-local `node-pty` native payloads.
- `scripts/start.mjs` creates an ignored symlink from `apps/desktop/app/node_modules/node-pty` to the installed Codex App unpacked `node_modules/node-pty`.

## Validation

- `pnpm native-binaries:check` passes.
- Electron-runtime `node-pty` smoke test still needs to be rerun after a full desktop launch validation.
