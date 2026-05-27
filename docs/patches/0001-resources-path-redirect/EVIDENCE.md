# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.519.81530`
- Build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Known Sites

- `apps/desktop/app/package.json` declares `.vite/build/bootstrap.js` as `main`.
- `apps/desktop/app/.vite/build/bootstrap.js` loads first-party chunks before `main-BS7yenMI.js`.
- `apps/desktop/app/.vite/build/main-BS7yenMI.js` has upstream `CODEX_ELECTRON_RESOURCES_PATH` handling, but too late for bootstrap imports.

## Patch Shape

- `bootstrap.js` reads `CODEX_ELECTRON_RESOURCES_PATH`, trims it, and redefines `process.resourcesPath` before first-party `require(...)` calls.
- Patch Marker id: `resources-path-redirect`.

## Validation Notes

- `scripts/start.mjs` still sets `CODEX_ELECTRON_RESOURCES_PATH` to repo-local `apps/desktop/resources`.
- `node --check apps/desktop/app/.vite/build/bootstrap.js` passed.
- `pnpm start` reached app-server handshake, renderer route mount, appshot hotkey registration, and browser-use native pipe startup using repo-local runtime resources.
