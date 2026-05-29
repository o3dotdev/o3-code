# 0009 Suppress Startup Error Dialog

## Status

Active

## Intent

When O3 Code is launched through the npm Package Launcher (`packages/code`), the
launcher supervises the Desktop Reconstruction process and reports failures
itself. The upstream Codex App, on a fatal startup error, shows a blocking
native error dialog (with update/quit buttons) before quitting. That dialog
breaks headless/launcher-managed runs.

This Patch makes the bootstrap startup-error handler quit cleanly (after logging
to stderr) instead of showing the native dialog when
`O3_CODE_SUPPRESS_STARTUP_ERROR_DIALOG=1`. The Package Launcher
(`packages/code/src/supervisor.ts`) sets this variable to `"1"` by default; the
upstream dialog still appears when the variable is unset or `0`.

This Patch was previously applied to copied source (added with the npm Package
Launcher) without an accompanying SOP folder. The folder was created during the
`26.527.30818` Source Refresh to make the local intent survive future refreshes.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
