# 0002 Local App Identity

## Status

Active

## Intent

When O3 Code runs through `pnpm start`, the visible app should identify as O3 Code instead of the generic Electron host app or the upstream Codex App. This Patch applies Local App Identity only: visible name, Dock icon, and tray template icon for repo-local runs.

It deliberately does not change the Codex App bundle identifier, URL scheme, default user data directory, or preserved in-app Codex artwork.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
