# 0009 Agent Runtime Terminal Threads

## Status

Planned

## Intent

O3 Code should let the composer choose an Agent Runtime. The default `Codex App` runtime keeps the normal chat UI, while terminal runtimes such as `Claude Code` and `Codex CLI` create normal local conversations that render a full-height terminal surface and launch the selected CLI with the chosen model, permission, collaboration, and resume settings.

The Patch uses normal local conversation identity for sidebar, routing, title, archive, and workspace behavior. Terminal runtimes add Agent Runtime metadata keyed by conversation id plus a durable External Agent Session UUID so the CLI can resume after terminal process loss or app restart.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
