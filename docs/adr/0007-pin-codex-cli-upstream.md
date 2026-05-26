# Pin Codex CLI Upstream

## Status

Accepted

O3 Code will keep Codex CLI/app-server source as a pinned upstream checkout instead of patching the compiled `codex` binary directly. The checked-out source lives under `upstream/codex/`, and the built binary is installed into `apps/desktop/resources/codex` so the Desktop Reconstruction continues to run through the same runtime resource path.

This creates a second upstream boundary next to the extracted Codex App material: Electron source continues to use Normalization and Patch Recipes, while Rust CLI/app-server changes use normal git commits in the `o3dotdev/o3-codex` fork. The tradeoff is submodule workflow overhead, but the source-level patch is reviewable, rebuildable, and syncable with upstream OpenAI Codex.
