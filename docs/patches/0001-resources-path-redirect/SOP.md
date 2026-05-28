# SOP

## Goal

Ensure the Desktop Reconstruction resolves native runtime resources from the installed Codex App when launched through `pnpm start`.

## Non-Goals

- Do not change the signed Codex App bundle.
- Do not change Electron's installed package resources.
- Do not redirect arbitrary user data or config paths.
- Do not reintroduce checked-in native runtime binaries.

## Discovery

1. Find the Electron bootstrap entry declared by `apps/desktop/app/package.json` as `main`.
2. Confirm it runs before first-party bundled modules are imported or required.
3. Search for any upstream handling of `process.resourcesPath` or local resource overrides.

## Application

Add a minimal early guard that reads `CODEX_ELECTRON_RESOURCES_PATH`, trims it, and redefines `process.resourcesPath` when the value is present. Keep the change before bundled module loading.

Use Patch Markers with patch id `resources-path-redirect` around the local source change.

## Validation

- `scripts/start.mjs` sets `CODEX_ELECTRON_RESOURCES_PATH` to the resolved Codex App `Contents/Resources`.
- `pnpm start` reaches renderer mount and app-server handshake.
- Native helper lookups use the installed Codex App Native Resource Provider.

## Failure Conditions

Stop when upstream already provides a correct local resources override, or when the bootstrap path cannot be identified before bundled modules load.
