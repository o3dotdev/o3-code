# Local Patches

This file tracks every intentional in-place change made to source or assets copied from the installed Codex App.

## Patch 0001: Redirect `process.resourcesPath` to repo-local resources

- **File**: `app/.vite/build/bootstrap.js`
- **Source material**: extracted from `/Applications/Codex.app/Contents/Resources/app.asar`
- **Applied during extraction**: yes
- **Reason**: pnpm runs the app through Electron from `node_modules`. In that mode, Electron sets `process.resourcesPath` to its own package resources directory, not this repo's copied `resources/` directory. Native add-ons and helper assets that resolve through `process.resourcesPath` then fail to load from the copied app resources.

### Change

Prepended the bootstrap with:

```js
const localResourcesPath = process.env.CODEX_ELECTRON_RESOURCES_PATH?.trim();
localResourcesPath &&
  Object.defineProperty(process, `resourcesPath`, {
    value: localResourcesPath,
    configurable: !0,
  });
```

### Runtime contract

`scripts/start.mjs` sets `CODEX_ELECTRON_RESOURCES_PATH` to `<repo>/resources` before launching Electron.

### Verification

After this patch, `pnpm start` reached renderer mount, app-server handshake, appshot hotkey registration, and browser-use native pipe startup using repo-local helper binaries and native resources.
