# Repo-Owned Bridge Shim First

The first Bridge Mode implementation should live in repo-owned launcher, sidecar, and Bridge Shim code, not as an immediate Patch to preserved Codex App source material. O3 Code can use CDP and browser-side shims to validate the Transparent Remote Renderer Bridge while avoiding unnecessary Source Refresh maintenance.

A Patch remains acceptable if validation proves the preserved renderer lacks a stable hook needed for full capability mirroring. Until then, keep bridge-specific implementation outside copied upstream chunks.
