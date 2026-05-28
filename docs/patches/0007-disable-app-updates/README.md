# 0007 Disable App Updates

## Status

Active

## Intent

O3 Code repo-local runs must not expose upstream Codex App update UI or install
flows. The app may use installed Codex App resources as a Native Resource
Provider, but that must not let Sparkle update state make the O3 Code header
show an upstream `Update` button or let an O3 Code window quit into an upstream
Codex update installation.

The observed trigger was not that the installed Codex App needed an update. The
installed Codex App matched the latest appcast entry, while the repo-local O3
Code host bundle still had Electron's bundle version metadata. Once Sparkle
could initialize against Codex's appcast from an O3 Code run, it compared the
repo-local host bundle metadata rather than the installed Codex App metadata.

By default, `pnpm start` sets `O3_CODE_DISABLE_APP_UPDATES=1`. Setting
`O3_CODE_DISABLE_APP_UPDATES=0` is a debugging escape hatch for comparing
upstream updater behavior.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
