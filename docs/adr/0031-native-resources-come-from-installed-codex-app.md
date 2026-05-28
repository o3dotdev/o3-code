# 0031 Native Resources Come From Installed Codex App

## Status

Accepted

## Context

O3 Code is moving toward npm/NPX-owned JavaScript, O3-owned assets, router code, and patch metadata. Checked-in Codex-owned runtime resources make the repo and any future npm package large, platform-specific, and responsible for redistributing Codex App material.

The repo still needs the Desktop Reconstruction to run locally. The preserved Electron source expects `process.resourcesPath` to contain Codex App resources such as `node`, `node_repl`, native add-ons, plugin helper binaries, and the app-server executable.

## Decision

O3 Code does not keep Codex-owned runtime resources in the repo. The default Native Resource Provider is the user's installed official Codex Desktop app:

1. Resolve Codex.app from `O3_CODE_CODEX_APP_PATH`, otherwise `/Applications/Codex.app`.
2. Point `CODEX_ELECTRON_RESOURCES_PATH` at `Codex.app/Contents/Resources`.
3. Point `CODEX_BROWSER_USE_NODE_PATH` and `CODEX_NODE_REPL_PATH` at the installed app's `node` and `node_repl`.
4. Create ignored runtime symlinks for native Node packages that Node resolves from `apps/desktop/app/node_modules`: `better-sqlite3`, `node-pty`, and `objc-js`.
5. Keep O3-owned icons, the extracted JS source, preserved web assets, package code, and docs in the repo.

The App Server Router keeps `O3_CODE_UPSTREAM_CODEX_PATH` as the explicit first choice, then searches `PATH`, then falls back to `Codex.app/Contents/Resources/codex`.

## Consequences

The repo no longer contains the checked-in Codex CLI, app-server-runtime binaries, native add-ons, helper apps, plugins, notices, sounds, asset catalogs, locale folders, or native plugin prebuilds.

Users must install the official Codex Desktop app, or set `O3_CODE_CODEX_APP_PATH` to a valid Codex.app. Startup must fail with install guidance when the Native Resource Provider is missing.

Source Refresh must skip Codex-owned runtime resources. The refresh copies source and metadata, then relies on the installed app for runtime material. Repo-local `apps/desktop/resources/` is reserved for O3-owned local identity assets.

`electron` remains a development/runtime dependency for local repo launches. If future npm distribution requires no downloaded native binary at all, O3 Code will need a separate launcher model that runs through the installed Codex.app Electron runtime instead of the npm `electron` package.
