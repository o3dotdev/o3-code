# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.519.81530`
- Build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Findings

- The installed app stores `app.asar.unpacked/node_modules/node-pty/build/Release/spawn-helper` with mode `755`.
- The refreshed app-local copy at `apps/desktop/app/node_modules/node-pty/build/Release/spawn-helper` has mode `755`.
- The refreshed resources copy at `apps/desktop/resources/app.asar.unpacked/node_modules/node-pty/build/Release/spawn-helper` has mode `755`.
- `scripts/start.mjs` still repairs missing executable bits for local `spawn-helper` copies before Electron starts.

## Validation

- `git ls-files --stage` reports `100755` for both refreshed repo-local `spawn-helper` copies.
- Electron-runtime `node-pty` smoke test spawned the user's shell, printed `READY`, and exited cleanly.
- `pnpm start` reached renderer mount and app-server handshake without a `node-pty` helper spawn error.
