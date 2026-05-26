# SOP

## Goal

Keep the integrated terminal native `spawn-helper` executable in repo-local Electron runs.

## Non-Goals

- Do not modify the installed macOS app.
- Do not replace `node-pty` binaries.
- Do not change terminal UI toggle behavior unless backend startup is already healthy.

## Dependencies

None.

## Discovery

1. Locate all `node-pty/build/Release/spawn-helper` copies in the refreshed tree.
2. Compare file mode with the installed app's unpacked helper.
3. Confirm the app-resolved helper path used by local Electron startup is executable.
4. Reproduce with an Electron-runtime `node-pty` smoke test if terminal startup still fails.

## Application

1. Set executable mode on `apps/desktop/app/node_modules/node-pty/build/Release/spawn-helper`.
2. Keep `scripts/start.mjs` repairing missing executable bits for local `spawn-helper` copies before Electron starts.
3. If a future refresh moves the app-resolved `node-pty` path, update the launcher helper path list to include the new location.

## Validation

- `git ls-files --stage` reports mode `100755` for the app-local `spawn-helper`.
- An Electron-runtime `node-pty` smoke test can spawn the user's shell and keep it alive.
- `pnpm start` can open an integrated terminal from Cmd+J or the bottom panel without immediately closing.

## Failure Conditions

Stop when `spawn-helper` is executable but `node-pty` still fails before attach; capture the new error and open a separate terminal backend patch.
