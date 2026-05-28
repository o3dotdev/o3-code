# 0003 Monorepo Desktop Boundary

## Status

Accepted

## Context

O3 Code needs room for future workspace packages without mixing repo-authored package code with preserved Codex App source material. The desktop reconstruction also has companion runtime resources and bundle metadata that are meaningful only for that app.

## Decision

Use a pnpm monorepo with `apps/` and `packages/`. Keep the desktop reconstruction together under `apps/desktop/`: extracted app source in `apps/desktop/app/`, O3-owned local identity assets in `apps/desktop/resources/`, and copied bundle metadata in `apps/desktop/metadata/`.

Keep `packages/` present with `.gitkeep` until shared packages are introduced.

## Consequences

Root-level scripts and documentation refer to the desktop app through the `apps/desktop/` boundary. Future shared packages can be added under `packages/` without changing the preserved desktop source layout.
