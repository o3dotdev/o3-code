# 0001 Resources Path Redirect

## Status

Active

## Intent

When O3 Code runs through pnpm Electron, Electron sets `process.resourcesPath` to its own package resources directory. The extracted Codex App source expects native add-ons and helper assets to resolve from Codex App resources, so O3 Code needs to point `process.resourcesPath` at the installed Codex App's `Contents/Resources` before the main bundle loads.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
