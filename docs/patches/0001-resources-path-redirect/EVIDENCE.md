# Evidence

## Current Release

- Codex App version: `26.519.41501`
- Build: `3044`

## Known Sites

- `apps/desktop/app/.vite/build/bootstrap.js`

## Known Patch Shape

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

## Validation Notes

The current patched tree has reached renderer mount, app-server handshake, appshot hotkey registration, and browser-use native pipe startup using repo-local helper binaries and native resources.
