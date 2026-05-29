# 0033 Run Under Installed Codex App Electron Framework

## Status

Accepted. Completes the launcher path anticipated by [0031 Native Resources Come From Installed Codex App](./0031-native-resources-come-from-installed-codex-app.md) and supersedes the npm `electron` runtime choice from [0001 Runtime Resources Only](./0001-runtime-resources-only.md).

## Context

The Desktop Reconstruction loads the installed Codex App's native add-ons (`better-sqlite3`, `node-pty`, `objc-js`) through `scripts/start.mjs` and the `@o3dotdev/code` Package Launcher. Earlier launchers ran a repo-local npm `electron` host and pinned its version to the installed app's native-module ABI (`NODE_MODULE_VERSION`).

That strategy breaks for the Codex App's custom Electron framework. In `26.527.30818` the framework is Chromium 148 (V8 ~14.8) but its `better-sqlite3` add-on is a raw-V8 add-on stamped `NODE_MODULE_VERSION 143`. The framework deliberately decouples its Node ABI from its Chromium/V8 version, so no public npm `electron` release matches both:

- npm `electron` 40 has ABI 143 but Chromium 144 (V8 14.4). The ABI load check passes, then the raw-V8 add-on calls through a V8 vtable slot that does not exist in the older V8 — the instruction pointer jumps to `0x0` and the renderer process segfaults.
- npm `electron` 42 has Chromium 148 (V8 ~14.8) but ABI 146. The add-on load is rejected outright (`NODE_MODULE_VERSION 143` vs `146`).

Matching only the ABI number is necessary but not sufficient for a raw-V8 add-on; the V8 build must also match. The only host that satisfies the add-on is the framework it was compiled against.

The installed Codex App is signed with a hardened runtime, is not sandboxed, and does not set `disable-library-validation`. Library validation therefore loads only native code signed by the Codex team (`2DC432GLL2`) — which the symlinked native modules already are — or platform binaries.

## Decision

O3 Code runs the Desktop Reconstruction under the installed Codex App's own Electron executable instead of an npm `electron` package.

1. `packages/codex-app-resources` resolves the executable with `resolveCodexAppElectronExecutable`: `Codex.app/Contents/MacOS/<bundle name>` (honoring `O3_CODE_CODEX_APP_PATH`).
2. Both launchers — `scripts/start.mjs` and the `@o3dotdev/code` supervisor — spawn that executable with the reconstructed app directory as the app path.
3. The signed Codex bundle launches in place, unmodified, preserving its code signature and library validation. The native modules it loads are the same Codex-team-signed payloads resolved per ADR-0031.
4. Local App Identity (name, dock icon, user data root) continues to come from patch 0002 at runtime, so the running app still presents as O3 Code without rebranding the bundle.
5. The npm `electron` dependency is removed from the repo and the package.

## Consequences

The repo no longer downloads, copies, or rebrands an npm Electron bundle, and `pnpm-workspace.yaml` no longer needs to allow Electron's install build script. The runtime ABI now tracks the installed Codex App automatically on every Source Refresh; there is no npm Electron version to determine or pin per release.

Users must have the official Codex Desktop app installed (already required by ADR-0031). Because the running process is the Codex bundle, the macOS app-menu bold title reflects the Codex bundle's `CFBundleName` until a future packaging step builds a standalone signed O3 Code bundle; the dock name and icon are still O3 Code via patch 0002.

Source Refresh no longer determines or pins an npm Electron ABI. It must still verify `pnpm start` reaches renderer mount with the SQLite database accessible, because the installed framework — not a static check — is the source of truth for native-module compatibility.
