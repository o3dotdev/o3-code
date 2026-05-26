# 0005 Integrated Terminal Helper Mode

## Status

Active

## Intent

O3 Code local Electron runs should preserve the executable bit on the `node-pty` `spawn-helper` binary used by the integrated terminal.

Without this mode bit, `node-pty` fails with `posix_spawnp failed`, the terminal session never attaches, and the renderer closes the bottom panel because the session mapping disappears.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
