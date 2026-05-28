# 0001 Runtime Resources Only

## Status

Superseded by [0031 Native Resources Come From Installed Codex App](./0031-native-resources-come-from-installed-codex-app.md)

## Context

The installed macOS Codex App contains a signed Electron `.app` bundle. The repo needs to preserve the app source material and assets while making the app runnable and patchable through pnpm.

## Original Decision

Copy and extract the runtime resources only:

- extract `Resources/app.asar` into `apps/desktop/app/`
- copy `Resources/app.asar.unpacked`, `Resources/native`, `Resources/plugins`, helper binaries, icons, sounds, notices, asset catalogs, and locale resources into `apps/desktop/resources/`
- use the `electron` npm package from pnpm for the Electron runtime

Do not copy `Contents/Frameworks`, helper `.app` bundles, `_CodeSignature`, or the signed outer `.app` bundle.

## Consequences

This decision is superseded. O3 Code still does not mirror the signed binary application bundle, but it also no longer keeps host-native compiled runtime binaries in `apps/desktop/resources/`. Native runtime material now comes from the installed Codex App.

Running the app requires a launcher that points Electron at the repo-local `apps/desktop/resources/` directory.

Rebuilding a distributable signed macOS app will be a separate packaging step later.
