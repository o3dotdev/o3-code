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

- The Desktop Reconstruction owns Bridge Mode startup from a persistent Web access setting.
- Web access is off by default for new and existing local state.
- Web access uses a persistent randomly assigned localhost Bridge Port for the
  sidecar web endpoint.
- The private Electron CDP Bridge Port remains dynamic per app run.
- The Bridge Sidecar is a separate repo-owned Node process.
- Desktop startup uses the bundled Node executable for the Bridge Sidecar, not
  Electron's `process.execPath`, so the sidecar cannot create a Dock app.
- Bridge code uses plain Node ESM `.mjs` for MVP.
- The browser loads the derived Mirrored Web Client Asset Tree with an injected Bridge Shim.
- The sidecar uses Minimal CDP Transport to attach to the primary renderer and install hooks.
- The visible Desktop Reconstruction renderer is the Transport Host Renderer for MVP.
- One Active Web Session is allowed; a newer browser connection replaces the old one.
- Replacing or disconnecting the Active Web Session detaches browser transport without cancelling local work.
- New browser sessions hydrate through normal app queries plus a Bridge Sync Pulse.
- Browser-selected files become Bridge-Staged Files before the Desktop Reconstruction receives local file references.
- Desktop-Hosted Native UI is acceptable for MVP.
- Remote access remains out of the default MVP path. Future exposure modes such
  as LAN or Tailscale require an explicit access-control design before they
  become user-facing settings.

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
```

## Desktop Startup Behavior

The user-facing settings section should be named **Web access** to avoid
confusion with existing Browser and browser-use settings.

Place Web access under app-level settings near Connections and before the
existing Browser section. Use a distinct network-style icon, preferably an
existing globe/link icon from the bundled assets, rather than reusing the
Browser app-window icon.

When Web access is enabled, the Desktop Reconstruction should:

1. Resolve or allocate the persistent sidecar HTTP/WSS Web Access Port on
   `127.0.0.1`.
2. Allocate a dynamic Electron CDP Bridge Port on `127.0.0.1`.
3. Start the Bridge Sidecar with the selected ports and repo paths.
4. Ensure Electron exposes CDP on `127.0.0.1` using the selected control port.
5. Surface the Mirrored Web Client URL in settings.
6. Tear down the sidecar when Web access is disabled or the app exits.
7. Tear down Bridge Mode if the sidecar fails.

The Web access setting should apply immediately. If CDP cannot be enabled after
Electron startup, the Desktop Reconstruction should allocate its private
loopback CDP Bridge Port during app startup and keep the user-facing Web access
state tied to Bridge Sidecar startup and shutdown.

If the Bridge Sidecar crashes while Web access is enabled, the persistent
setting should remain enabled. Runtime status should move to `failed` and expose
a retry action instead of silently disabling the user's intent.

Allocate `webAccess.port` the first time Web access is enabled. If a persisted
Web Access Port is unavailable on a later app run, do not silently reassign it;
report a port-unavailable failure so the user understands why the stable URL is
not serving.

Retry should keep the same persisted Web Access Port and try to restart Bridge
Mode. Reset port should be the explicit recovery path for port-unavailable
failures. Turning Web access off should stop the Bridge Sidecar but keep the
persisted Web Access Port for the next enable.

Debug-only environment overrides may exist for the sidecar and CDP ports, but fixed ports are not defaults. The old `pnpm start:web` product path should be removed rather than kept as a parallel way to start Bridge Mode.

## Settings Surface

The MVP Web access page should provide:

- a primary `Enable Web access` toggle;
- a read-only `Localhost` exposure mode;
- runtime status values for off, starting, running, and failed;
- the current Mirrored Web Client URL only when running;
- copy and open actions for the running URL;
- a secondary reset-port action only when Web access is stopped or failed.

Do not show LAN, Tailscale, relay, pairing, authentication, or authorization
controls until those modes exist. Do not expose manual custom port editing in
the MVP.

When running, show `http://127.0.0.1:{port}/` as the canonical Web access URL.
Provide Copy URL and Open actions only while the endpoint is running. Open
should launch the system browser, not the in-app browser.

## Persistent Config

O3 Code persistent config should live at `~/.o3/code/config.json`. The Web
access intent should be stored under a top-level `webAccess` key:

```json
{
  "webAccess": {
    "enabled": false,
    "exposure": "localhost",
    "port": null
  }
}
```

Use tolerant parsing with defaults and ignore unknown keys. Do not add a schema
version until there is a real incompatible migration to perform. Persist user
intent and the randomly assigned Web Access Port. Runtime values such as status,
private CDP port, process IDs, and failure details should remain in memory.

Setting changes should be written atomically before applying runtime changes to
the supervisor. If runtime startup fails, the persisted `enabled` intent should
remain true while runtime status reports `failed`.

The Web Access Port is stable across restarts unless the user explicitly resets
it. Resetting clears the persisted port so the next enable or retry can allocate
a new random localhost port.

## Desktop IPC

The Desktop Reconstruction should expose a narrow O3 Code-owned IPC surface for
Web access settings and runtime state:

- read and patch the Web access config;
- read current runtime status;
- subscribe to config and status changes;
- retry or restart Web access after a failure.

Do not route this through Codex app-server configuration. Web access is O3
Code-owned desktop state, not upstream Codex App configuration.

Runtime status should use a discriminated shape equivalent to:

```ts
{ state: "off" }
{ state: "starting" }
{ state: "running"; url: string; port: number }
{ state: "failed"; reason: string; code?: string }
```

Failure codes should be stable for UI and tests, starting with
`port_unavailable`, `sidecar_exit`, and `cdp_unavailable`. The status should
also include a human-readable reason for display. App shutdown should remove
temporary Bridge Mode staging files but keep the O3 Code config and persisted
Web Access Port.

## Patch Strategy

Implement Web access settings as a Desktop Reconstruction Patch. The Patch
should cover preserved settings UI edits, Electron main/preload integration, and
the app-owned Bridge Mode lifecycle hooks needed for Web access to work from the
desktop app.

Keep reusable O3 Code support logic in repo-owned modules with tests. Use Patch
Markers only in volatile preserved Desktop Reconstruction assets, including
Electron main/preload chunks and Webview Assets. After applying the desktop
patch, run `pnpm derive:web` so the Mirrored Web Client Asset Tree receives the
same settings route. Do not create a separate Web Patch unless browser-only
behavior diverges from the Desktop Reconstruction.

Remove the old `pnpm start:web` product path and its `O3_CODE_BRIDGE_REMOTE`
LAN prototype behavior. The persisted `webAccess.exposure` enum should keep the
future path open, but the MVP user-facing and runtime behavior is localhost-only.

Create a Desktop Reconstruction Patch SOP for this work, likely
`docs/patches/0006-web-access-settings/`. The SOP should document rediscovery
anchors for settings navigation, the Web access settings page, preload IPC, main
startup/CDP integration, and validation.

Implementation should proceed in focused slices:

1. Add repo-owned O3 Code config module and tests.
2. Add repo-owned Bridge Mode supervisor module and tests.
3. Integrate desktop startup and private loopback CDP setup.
4. Add preload IPC API.
5. Patch the settings UI.
6. Remove `start:web`.
7. Run `pnpm derive:web` and validate.

Update `packages/bridge/src/runtime-config.mjs` so app-owned Bridge Mode uses
explicit localhost sidecar and CDP hosts/ports from the supervisor. Remove the
remote-mode product path. Migrate any still-useful bridge-supervisor logic out
of `scripts/start-web.mjs` before deleting the script. Update `README.md` and
other docs so `start:web` is no longer advertised.

## Validation

Implementation validation should cover:

- O3 Code config defaulting and tolerant parsing;
- atomic config writes;
- localhost-only Bridge runtime config;
- Bridge Mode supervisor status transitions for off, starting, running, and
  failed;
- Patch Marker validation;
- `pnpm derive:web`;
- browser or visual verification of the Web access settings UI.

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
- Clean staged temp files on Bridge Mode shutdown.
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

1. Run `pnpm start`.
2. Enable Web access in desktop settings.
3. Browser loads the O3 Code UI from the Mirrored Web Client Asset Tree.
4. Start a normal local thread from the browser.
5. The request travels through the Bridge Sidecar into the Electron Bridge Host.
6. Existing app-server logic starts the thread.
7. Streamed thread events return to the browser UI.

Terminal, browser-sidebar, native dialogs, uploads, and reconnect behavior should be transported through the same generic bridge, but they do not need to be polished before the first end-to-end local-thread smoke test.

## Later Work

- Pairing, authentication, and authorization for remote Bridge Mode.
- Hardened LAN, mobile, tunnel, or relay access.
- Dedicated hidden Bridge Host renderer.
- Concurrent web sessions.
- Browser-native replacements for selected native dialogs and menus.
- Packaged distribution and lifecycle integration.
- TypeScript or build tooling if the bridge outgrows plain Node ESM.
