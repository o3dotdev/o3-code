# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.527.30818`
- Build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Known Sites

- `apps/desktop/app/package.json` declares `.vite/build/bootstrap.js` as `main`.
- `apps/desktop/app/.vite/build/bootstrap.js` first-party requires are now
  `./src-B5wXNbcV.js`, `./src-DJzHq3CP.js`, and `./workspace-root-drop-handler.js`
  at the top of the file; the patch is placed before them.
- `apps/desktop/app/.vite/build/main.js` still carries upstream
  `CODEX_ELECTRON_RESOURCES_PATH` handling, but too late for bootstrap imports.

## Patch Shape

- `bootstrap.js` reads `CODEX_ELECTRON_RESOURCES_PATH`, trims it, and redefines
  `process.resourcesPath` before the first first-party `require(...)` calls.
- Patch Marker id: `resources-path-redirect`.

## Validation Notes

- `scripts/start.mjs` sets `CODEX_ELECTRON_RESOURCES_PATH` to resolved Codex App
  resources through `packages/codex-app-resources`.
- `node --check apps/desktop/app/.vite/build/bootstrap.js` passed.
- `node --check scripts/start.mjs` passed; the launcher resolves native runtime
  resources from the installed Codex App Native Resource Provider.
