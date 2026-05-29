# SOP

## Goal

When `O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG=1`, make the Desktop Reconstruction
bootstrap quit cleanly on a fatal startup error (after logging the error to
stderr) instead of showing the upstream native startup-error dialog, so the npm
Package Launcher can own failure reporting.

## Non-Goals

- Do not change the upstream error dialog behavior when the variable is unset
  or `0`.
- Do not suppress error logging; the failure must still be written to stderr.
- Do not change the bootstrap import/startup flow or the update install paths
  reachable from the dialog.
- Do not set the environment variable from copied source; the Package Launcher
  owns the default.

## Dependencies

None. Independent of the other bootstrap patches, but the marker lives in the
same `bootstrap.js` startup-error handler.

## Discovery

1. Find the Electron bootstrap entry declared by `apps/desktop/app/package.json`
   as `main` (`.vite/build/bootstrap.js`).
2. Locate the startup-error handler invoked from the `whenReady` catch block
   that imports and runs the main app. It builds a button list from
   `sparkleManager.getIsUpdateReady()` / `hasUpdater()` and calls
   `dialog.showMessageBox({ type: "error", ... })`.
3. Confirm the electron module binding used by the handler (e.g. `r.app` /
   `n.app`) so the early quit uses the same binding.

## Application

Add an early guard at the very top of the startup-error handler body, before the
sparkle/button/dialog logic:

- if `process.env.O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG === "1"`, log
  `O3 Code failed to start: <message>` to `console.error`, call `app.quit()`,
  and `return`.

Use Patch Markers with patch id `suppress-startup-error-dialog` around the guard.

## Validation

- `node --check apps/desktop/app/.vite/build/bootstrap.js` succeeds.
- `pnpm normalize:check` succeeds (marker placement valid).
- `packages/code/src/supervisor.ts` still defaults
  `O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG` to `"1"`.
- With the variable unset/`0`, the upstream native startup-error dialog path is
  unchanged.

## Failure Conditions

Stop when upstream removes the bootstrap startup-error dialog handler, when the
handler no longer runs before the dialog is shown, or when the Package Launcher
no longer relies on suppressing the dialog.
