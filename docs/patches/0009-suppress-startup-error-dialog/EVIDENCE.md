# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.527.30818`
- Build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Sites

- `apps/desktop/app/.vite/build/bootstrap.js`
  - Patch ID: `suppress-startup-error-dialog`
  - Guard added at the top of the startup-error handler `async function b(e)`
    (the function that builds the sparkle button list and calls
    `dialog.showMessageBox({ type: "error", ... })`).
  - When `O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG === "1"`, logs
    `O3 Code failed to start: <message>` and calls `r.app.quit()` (electron is
    bound to `r` in this build), then returns before the dialog.
- `packages/code/src/supervisor.ts`
  - Repo-owned Package Launcher; defaults `O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG`
    to `"1"` (unchanged by the Source Refresh).

## Patch Shape

- Copied-source Patch Marker id: `suppress-startup-error-dialog`.
- Bootstrap-only; one marked region.

## Validation Notes

- `node --check apps/desktop/app/.vite/build/bootstrap.js`: passed.
- `pnpm normalize:check`: passed.
- `packages/code/src/supervisor.ts` still sets
  `O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG: process.env.O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG || "1"`.
