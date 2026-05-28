# SOP

## Goal

Retired. Integrated terminal native `spawn-helper` now comes from the installed Codex App Native Resource Provider instead of a checked-in repo-local copy.

## Non-Goals

- Do not modify the installed macOS app.
- Do not replace `node-pty` binaries.
- Do not reintroduce checked-in native `node-pty` payloads.
- Do not change terminal UI toggle behavior unless backend startup is already healthy.

## Dependencies

None.

## Discovery

1. Confirm `scripts/start.mjs` links `apps/desktop/app/node_modules/node-pty` to the installed Codex App unpacked `node_modules/node-pty`.
2. Confirm `pnpm native-binaries:check` does not find repo-local `node-pty` native payloads.
3. Reproduce with an Electron-runtime `node-pty` smoke test if terminal startup fails.

## Application

No app-source patch should be applied. Keep this patch retired unless O3 Code intentionally changes the Native Resource Provider boundary.

## Validation

- `pnpm native-binaries:check` passes.
- An Electron-runtime `node-pty` smoke test can spawn the user's shell and keep it alive.
- `pnpm start` can open an integrated terminal from Cmd+J or the bottom panel without immediately closing.

## Failure Conditions

Stop when `spawn-helper` is executable but `node-pty` still fails before attach; capture the new error and open a separate terminal backend patch.
