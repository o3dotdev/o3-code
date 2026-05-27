# Bridge Mode MVP Plan

This plan captures the agreed MVP path for exposing O3 Code through a browser while the local Desktop Reconstruction is running.

## Goal

Build a Local-Only Bridge that lets a browser run the Mirrored Web Client from the derived Mirrored Web Client Asset Tree and use the local Desktop Reconstruction as the Bridge Host for privileged capabilities.

The MVP proves that a normal local thread can be started from the browser and streamed back through the existing app-server path.

## Architecture

```txt
Browser
  Mirrored Web Client from apps/web/app/webview
  Bridge Shim
  WSS to Bridge Sidecar

Bridge Sidecar
  serves Mirrored Web Client Asset Tree with Bridge Shim
  owns Active Web Session
  routes Bridge Envelopes
  privately connects to Electron CDP

Desktop Reconstruction in Bridge Mode
  visible renderer as Transport Host Renderer for MVP
  existing electronBridge / IPC / main process
  existing Codex app-server capabilities
```

## MVP Defaults

- `pnpm start:web` owns Bridge Mode startup.
- Bridge Mode uses dynamic loopback-only Bridge Ports.
- The Bridge Sidecar is a separate repo-owned Node process.
- Bridge code uses plain Node ESM `.mjs` for MVP.
- The browser loads the derived Mirrored Web Client Asset Tree with an injected Bridge Shim.
- The sidecar uses Minimal CDP Transport to attach to the primary renderer and install hooks.
- The visible Desktop Reconstruction renderer is the Transport Host Renderer for MVP.
- One Active Web Session is allowed; a newer browser connection replaces the old one.
- Replacing or disconnecting the Active Web Session detaches browser transport without cancelling local work.
- New browser sessions hydrate through normal app queries plus a Bridge Sync Pulse.
- Browser-selected files become Bridge-Staged Files before the Desktop Reconstruction receives local file references.
- Desktop-Hosted Native UI is acceptable for MVP.
- Remote access remains out of the default MVP path. `O3_CODE_BRIDGE_REMOTE=1`
  enables an unauthenticated HTTPS LAN prototype for browser/mobile microphone
  testing only.

## Repo Layout

```txt
packages/bridge/
  package.json
  src/
    sidecar.mjs
    cdp-client.mjs
    router.mjs
  public/
    bridge-shim.js

scripts/start-web.mjs
```

Root script:

```json
{
  "start:web": "node scripts/start-web.mjs"
}
```

## Launcher Behavior

`scripts/start-web.mjs` should:

1. Allocate a dynamic sidecar HTTP/WSS Bridge Port on `127.0.0.1`.
2. Allocate a dynamic Electron CDP Bridge Port on `127.0.0.1`.
3. Start the Bridge Sidecar with the selected ports and repo paths.
4. Start Electron with `--remote-debugging-address=127.0.0.1` and the selected CDP port.
5. Print the Mirrored Web Client URL.
6. Open the default browser unless `O3_CODE_BRIDGE_NO_OPEN=1`.
7. Tear down the sidecar if Electron exits.
8. Tear down Bridge Mode if the sidecar fails.

Debug-only environment overrides may exist for the sidecar and CDP ports, but fixed ports are not defaults.

Prototype mobile mode:

- `O3_CODE_BRIDGE_REMOTE=1 pnpm start:web` binds the sidecar to `0.0.0.0`,
  serves the browser URL over HTTPS, and prints a LAN URL.
- Electron CDP remains bound to `127.0.0.1` unless `O3_CODE_BRIDGE_CDP_HOST`
  is explicitly overridden.
- `O3_CODE_BRIDGE_CERT_PATH` and `O3_CODE_BRIDGE_KEY_PATH` may provide a custom
  certificate. Without them, the launcher generates a reusable local self-signed
  certificate for localhost, loopback, and detected LAN IPv4 addresses.
- This mode has no pairing, authentication, authorization, or E2EE. Use it only
  on trusted networks.

## Sidecar Responsibilities

- Serve the Mirrored Web Client Asset Tree from `apps/web/app/webview`.
- Inject or preload `bridge-shim.js`.
- Accept one Active Web Session over WS locally or WSS in prototype mobile mode.
- Replace the old Active Web Session when a new browser connects.
- Route Bridge Envelopes without mutating Codex App renderer payloads.
- Suppress message echoes by source/session/message identity.
- Connect to the Electron CDP endpoint and select the primary webview renderer target.
- Install Electron renderer hooks for outbound messages and `window.electronBridge` calls.
- Stage browser-uploaded files in a local Bridge Mode temp directory.
- Clean staged temp files on launcher exit.
- Log lifecycle, CDP attach, session replacement, message type counts, and errors without logging sensitive payloads by default.

## CDP Scope

Use CDP only as a private renderer transport:

- attach to the primary renderer whose URL matches the preserved webview URL;
- install bridge bindings/hooks;
- evaluate calls needed to proxy the renderer contract;
- receive renderer-origin messages.

Do not use CDP for MVP DOM clicking, keyboard automation, screenshot streaming, broad network interception, or remote-desktop behavior.

## Bridge Shim Responsibilities

- Provide the browser-side equivalent of the Electron preload surface.
- Proxy `window.electronBridge` method calls to the sidecar.
- Forward app messages over WSS.
- Dispatch inbound app messages as normal renderer `message` events.
- Handle browser file selection by staging files through the sidecar.
- Return `null` for local file paths unless a file has been Bridge-staged.

## Smoke Test

The first successful slice is:

1. Run `pnpm start:web`.
2. Browser loads the O3 Code UI from the Mirrored Web Client Asset Tree.
3. Start a normal local thread from the browser.
4. The request travels through the Bridge Sidecar into the Electron Bridge Host.
5. Existing app-server logic starts the thread.
6. Streamed thread events return to the browser UI.

Terminal, browser-sidebar, native dialogs, uploads, and reconnect behavior should be transported through the same generic bridge, but they do not need to be polished before the first end-to-end local-thread smoke test.

## Later Work

- Pairing, authentication, and authorization for remote Bridge Mode.
- Hardened LAN, mobile, tunnel, or relay access.
- Dedicated hidden Bridge Host renderer.
- Concurrent web sessions.
- Browser-native replacements for selected native dialogs and menus.
- Packaged distribution and lifecycle integration.
- TypeScript or build tooling if the bridge outgrows plain Node ESM.
