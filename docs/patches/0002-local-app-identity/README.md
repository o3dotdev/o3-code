# 0002 Local App Identity

## Status

Active

## Intent

When O3 Code runs through `pnpm start`, repo-owned code can supply O3 Code name and icon surfaces for local identity checks. The visible name/icon overrides and macOS host app bundle identity are opt-in so the default development path does not create a second O3/Codex-looking Dock app while the installed Codex app is running.

It deliberately does not change the Codex App bundle identifier, URL scheme, default user data directory, or preserved in-app Codex artwork.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
