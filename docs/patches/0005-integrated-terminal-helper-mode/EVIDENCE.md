# Evidence

## Current Release

- Source version: `26.519.41501`
- Build number: `3044`

## Findings

- The installed app stores `app.asar.unpacked/node_modules/node-pty/build/Release/spawn-helper` with mode `755`.
- The repo-local app copy stored `apps/desktop/app/node_modules/node-pty/build/Release/spawn-helper` with mode `644`.
- Local Electron resolves `node-pty` from `apps/desktop/app/node_modules`, so the non-executable helper caused `posix_spawnp failed`.
- The renderer then removed the terminal session mapping after the backend error, which closed the bottom panel.

## Validation

- After setting the helper executable and adding the launcher guard, an Electron-runtime `node-pty` smoke test spawned `/bin/zsh`, accepted `echo READY`, and remained alive until the test killed it.
