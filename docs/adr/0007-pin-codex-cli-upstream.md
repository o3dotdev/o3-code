# Pin Codex CLI Upstream

## Status

Superseded by ADR 0030 for runtime app-server launch behavior.

O3 Code previously kept Codex CLI/app-server source as a pinned upstream checkout instead of patching the compiled `codex` binary directly. The checked-out source lived under `upstream/codex/`, and the built binary was installed into Runtime Resources so the Desktop Reconstruction could run through the same runtime resource path.

This creates a second upstream boundary next to the extracted Codex App material: Electron source continues to use Normalization and Patch SOPs, while Rust CLI/app-server changes use normal git commits in the `o3dotdev/o3-codex` fork. The tradeoff is submodule workflow overhead, but the source-level patch is reviewable, rebuildable, and syncable with upstream OpenAI Codex.
