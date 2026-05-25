# 0001 resources-path-redirect

## Status

Active

## Markers

- `o3-code-patch-begin: resources-path-redirect`
- `o3-code-patch-end: resources-path-redirect`

## Intent

When O3 Code runs through pnpm Electron, Electron sets `process.resourcesPath` to its own package resources directory. The extracted Codex App source expects native add-ons and helper assets to resolve from the copied app resources, so O3 Code needs to point `process.resourcesPath` at repo-local `apps/desktop/resources/` before the main bundle loads.

## Changed Sites

- `apps/desktop/app/.vite/build/bootstrap.js`

## Upstream Anchors

Find the bootstrap entry declared by `apps/desktop/app/package.json` as `main`. In the extracted Codex App source for version `26.519.41501`, that entry is `apps/desktop/app/.vite/build/bootstrap.js`.

The Patch must run before the bootstrap imports or requires other bundled modules that may resolve paths through `process.resourcesPath`.

## Patch Shape

Prepended the bootstrap entry with a compact guard that reads `CODEX_ELECTRON_RESOURCES_PATH`, trims it, and redefines `process.resourcesPath` when the value is present.

```js
// o3-code-patch-begin: resources-path-redirect
const localResourcesPath = process.env.CODEX_ELECTRON_RESOURCES_PATH?.trim();
localResourcesPath &&
  Object.defineProperty(process, `resourcesPath`, {
    value: localResourcesPath,
    configurable: !0,
  });
// o3-code-patch-end: resources-path-redirect
```

## Migration Notes

When refreshing from a newer Codex App bundle, preserve this behavior in whichever file becomes the Electron main/bootstrap entry. Do not rely on the exact chunk filename. Prefer placing the Patch before any first-party bundle imports.

If upstream starts setting `process.resourcesPath` correctly for unpackaged local execution, this Patch may be removed after verification.

## Verification

`scripts/start.mjs` sets `CODEX_ELECTRON_RESOURCES_PATH` to `<repo>/apps/desktop/resources` before launching Electron.

After this Patch, `pnpm start` reached renderer mount, app-server handshake, appshot hotkey registration, and browser-use native pipe startup using repo-local helper binaries and native resources.
