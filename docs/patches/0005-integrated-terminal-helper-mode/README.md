# 0005 Integrated Terminal Helper Mode

## Status

Retired

## Intent

O3 Code local Electron runs previously preserved the executable bit on the repo-local `node-pty` `spawn-helper` binary used by the integrated terminal.

This patch is retired because O3 Code no longer keeps checked-in native `node-pty` payloads. The launcher links `node-pty` from the installed Codex App Native Resource Provider instead.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
