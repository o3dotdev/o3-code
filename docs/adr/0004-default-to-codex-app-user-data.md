# Default to O3 Code User Data

O3 Code defaults local Electron runs to `~/Library/Application Support/O3 Code`
instead of the installed Codex App profile. This avoids launching a repo-local
app that shares state with `/Applications/Codex.app` while macOS still treats it
as a separate app.

On macOS, `pnpm start` also refuses to launch when the installed Codex app or
another O3 Code dev app is already running. This keeps the default workflow to
one visible desktop app. Set `O3_CODE_ALLOW_PARALLEL_DESKTOP=1` only when a
parallel local app is intentional.

`CODEX_ELECTRON_USER_DATA_PATH` remains available for custom profiles. Set
`O3_CODE_USE_CODEX_USER_DATA=1` only when a local run intentionally needs to
reuse `~/Library/Application Support/Codex`.
