# 0001 Runtime Resources Only

## Status

Accepted

## Context

The installed macOS Codex App contains a signed Electron `.app` bundle. The repo needs to preserve the app source material and assets while making the app runnable and patchable through pnpm.

## Decision

Copy and extract the runtime resources only:

- extract `Resources/app.asar` into `apps/desktop/app/`
- copy `Resources/app.asar.unpacked`, `Resources/native`, `Resources/plugins`, helper binaries, icons, sounds, notices, asset catalogs, and locale resources into `apps/desktop/resources/`
- use the `electron` npm package from pnpm for the Electron runtime

Do not copy `Contents/Frameworks`, helper `.app` bundles, `_CodeSignature`, or the signed outer `.app` bundle.

## Consequences

The repo stays focused on patchable source material and runtime assets instead of mirroring a signed binary application bundle.

Running the app requires a launcher that points Electron at the repo-local `apps/desktop/resources/` directory.

Rebuilding a distributable signed macOS app will be a separate packaging step later.
