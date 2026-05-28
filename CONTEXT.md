# O3 Code

O3 Code is the repo-local reconstruction of the installed macOS Codex App. The context exists to preserve the app's source material, make it runnable from the repository, and provide a place for later project-specific patches and extensions.

## Language

**Codex App**:
The installed macOS desktop application used as the upstream source material for this repo.
_Avoid_: app bundle, desktop app, upstream app

**O3 Code**:
The repo-local Electron project reconstructed from the Codex App.
_Avoid_: clone, fork, extracted app

**Desktop Reconstruction**:
The local app context within O3 Code that preserves and runs the Codex App source material with its companion runtime material.
_Avoid_: app bundle, desktop clone, extracted app

**Mirrored Web Client**:
The browser-facing O3 Code experience that presents the same user workflows as the Desktop Reconstruction instead of a separate command-only control panel.
_Avoid_: web clone, web rewrite, command-only web UI

**Transparent Remote Renderer Bridge**:
The O3 Code bridge model where a remote browser session receives the Desktop Reconstruction's full renderer capability surface instead of a curated subset of feature adapters.
_Avoid_: feature bridge, partial API bridge, IPC mirror

**Bridge Host**:
The local Desktop Reconstruction participant that gives a Mirrored Web Client access to the Codex App capability surface without making the visible desktop window the product surface.
_Avoid_: remote desktop, visible app controller, pixel stream

**Bridge Mode**:
The O3 Code run mode where the Desktop Reconstruction exposes a control surface for a Mirrored Web Client while the local app is running.
_Avoid_: normal app launch, remote desktop mode, web server mode

**Bridge Port**:
A loopback-only network port used by Bridge Mode for either the sidecar web endpoint or the private Electron control connection.
_Avoid_: default debugging port, public port, fixed port

**Web Access Port**:
The persistent loopback Bridge Port used for the Mirrored Web Client endpoint across Desktop Reconstruction restarts.
_Avoid_: CDP port, debugging port, ephemeral browser port

**Bridge Shim**:
Repo-owned browser-side code that lets the Mirrored Web Client talk to Bridge Mode without changing preserved Codex App source material.
_Avoid_: renderer patch, web rewrite, injected hack

**Webview Assets**:
The preserved browser-rendered files under `apps/desktop/app/webview` that the Desktop Reconstruction loads as its primary UI.
_Avoid_: web app source, copied frontend, separate web build

**Mirrored Web Client Asset Tree**:
The browser-owned UI asset tree derived from the patched Desktop Reconstruction Webview Assets before Mirrored Web Client Patches are applied.
_Avoid_: separate frontend product, hand-authored web app, web fork

**Bridge Envelope**:
Sidecar-owned metadata wrapped around an unchanged Codex App renderer message so Bridge Mode can route messages across browser and Electron runtimes without changing the app payload.
_Avoid_: app message mutation, bridged payload type, IPC wrapper

**Minimal CDP Transport**:
The Bridge Mode use of Chrome DevTools Protocol only to attach to the Electron renderer, install message hooks, and relay renderer calls.
_Avoid_: UI automation, pixel streaming, broad CDP control

**Privileged State Boundary**:
The Bridge Mode rule that privileged app capability execution belongs to the local Desktop Reconstruction, while the Mirrored Web Client owns browser interaction state.
_Avoid_: browser app-server client, duplicate backend, direct native web access

**Transport Host Renderer**:
The Desktop Reconstruction renderer used by Bridge Mode to relay capability messages, even if it also visibly renders the desktop UI during the MVP.
_Avoid_: second user surface, remote-controlled desktop, hidden renderer requirement

**Active Web Session**:
The single browser connection currently allowed to control a Bridge Mode instance during the MVP.
_Avoid_: multi-client session, shared web control, rejected reconnect

**Detached Web Session**:
A former Active Web Session whose browser connection has closed or been replaced while local Desktop Reconstruction work continues.
_Avoid_: cancelled session, stopped app run, killed browser session

**Bridge Sync Pulse**:
The initial Bridge Mode notification set that gives a new Active Web Session current host and shared-object status before normal app queries finish.
_Avoid_: full state snapshot, custom hydration dump, serialized app state

**Bridge-Staged File**:
A browser-selected file whose bytes have been copied into local Bridge Mode storage so the Desktop Reconstruction can handle it as a local file.
_Avoid_: fake file path, browser path passthrough, direct filesystem file

**Desktop-Hosted Native UI**:
Native macOS dialogs, menus, or OS surfaces shown by the local Desktop Reconstruction during Bridge Mode on behalf of the Mirrored Web Client.
_Avoid_: browser-native menu, remote-rendered dialog, fake native UI

**Local-Only Bridge**:
The MVP Bridge Mode exposure where the Mirrored Web Client and private Electron control connection are available only on the local machine loopback interface.
_Avoid_: LAN bridge, public bridge, remote tunnel

**Web Access**:
The user-facing Desktop Reconstruction setting that controls whether Bridge Mode exposes the Mirrored Web Client on the local machine.
_Avoid_: browser access, Browser settings, start-web

**Bridge Sidecar**:
The repo-owned Node process managed by Bridge Mode that serves the Mirrored Web Client, owns WebSocket routing, and privately connects to the Electron control port.
_Avoid_: Electron main patch, embedded bridge server, frontend server

**Patch**:
A deliberate local change applied to O3 Code after the upstream source material has been preserved.
_Avoid_: tweak, hack, modification

**Mirrored Web Client Patch**:
A Patch whose local intent applies only to the browser-facing Mirrored Web Client Asset Tree and must not change the Desktop Reconstruction product surface.
_Avoid_: frontend rewrite, desktop patch, shared UI patch

**Web Patch Marker**:
A paired inline boundary placed around a Mirrored Web Client Patch site inside the Mirrored Web Client Asset Tree so browser-only intent remains discoverable after derivation and source refreshes.
_Avoid_: bridge source marker, desktop patch marker, normal comment

**Patch Marker**:
A paired inline boundary placed around a Patch site so the local intent and exact changed region remain discoverable after source refreshes and chunk renames.
_Avoid_: comment, note, TODO

**Patch SOP**:
The authoritative migration procedure for one Patch, written for an AI refresh agent to rediscover, reapply, and validate the Patch after a Source Refresh.
_Avoid_: script, prompt

**Patch Evidence**:
The release-specific notes that record where a Patch was found and how it was validated during one Source Refresh.
_Avoid_: log, scratch notes

**Normalization**:
A deterministic, broad rewrite of preserved upstream source material that creates a patch-friendly baseline without expressing local product intent.
_Avoid_: patch, cleanup, refactor

**Source Refresh**:
The operation that replaces preserved upstream source material from a newer Codex App release before Normalization and Patch SOPs rebuild the local O3 Code state.
_Avoid_: sync, vendor update, recopy

**Runtime Resources**:
Codex App resource material needed by the Desktop Reconstruction at runtime and supplied by the Official Codex App Runtime unless explicitly owned by O3 Code.
_Avoid_: repo resource mirror, bundled runtime, app bundle

**O3-Owned Assets**:
O3 Code identity or product assets that are intentionally local to O3 Code rather than preserved from the Codex App.
_Avoid_: copied upstream resources, runtime resource mirror, preserved assets

**Official Codex App Runtime**:
The installed Codex Desktop app on the user's machine, used as the source for Codex App runtime resource material.
_Avoid_: bundled runtime, checked-in binary set, repo resource mirror

**Native Resource Provider**:
The resolved Codex.app resources directory that supplies Codex App runtime resource material for a local O3 Code launch.
_Avoid_: vendored binaries, repo resources, npm payload

**JS-Only O3 Code Package**:
The packaging boundary where O3 Code owns JavaScript, O3-Owned Assets, UI assets, router code, docs, and patch metadata while excluding Codex-owned runtime resource material.
_Avoid_: native app distribution, binary bundle, full Codex repack

**Package Launcher**:
The npm-distributed O3 Code command surface that starts and manages a local O3 Code run while preserving the JS-Only O3 Code Package boundary.
_Avoid_: app bundle launcher, native installer, bundled runtime launcher

**Package Runtime Payload**:
The JS-only O3 Code material included with the Package Launcher so it can run locally without a repo checkout while still relying on the Native Resource Provider for Codex-owned runtime resources.
_Avoid_: bundled app, native runtime payload, full Codex package

**External Codex CLI**:
The user-installed official `codex` command that O3 Code expects to find outside its Runtime Resources.
_Avoid_: bundled codex, repo-built codex, source checkout, router binary

**App Server Router**:
The O3 Code-owned participant that stands in the Desktop Reconstruction's Codex app-server launch position while preserving the existing app-server protocol boundary and delegating to the External Codex CLI.
_Avoid_: Codex fork, browser app-server client, alternate backend

**Codex App User Data Directory**:
The installed Codex App's Electron user data directory, shared by default with O3 Code when running the Desktop Reconstruction locally.
_Avoid_: original app folder, app bundle, upstream folder

**O3 Code State Root**:
The O3 Code-owned filesystem root for persistent local settings and runtime state that are not part of the Codex App user profile.
_Avoid_: Codex App User Data Directory, Electron profile, repo cache

**Local App Identity**:
The visible O3 Code name and icon surface used by the Desktop Reconstruction during repo-local runs, without changing Codex App protocol, bundle, or user data identity.
_Avoid_: rebrand, bundle identity, product identity

**Account Auth**:
The Codex App authentication mode that uses a user's ChatGPT account session for Codex App Server requests.
_Avoid_: login, SIWC, user auth

**API Key Auth**:
The Codex App authentication mode that uses an OpenAI-compatible API key for Codex App Server requests.
_Avoid_: token auth, key login, env auth

**Realtime Auth Override**:
A scoped O3 Code policy that allows realtime voice setup to use API Key Auth while the rest of the Codex App Server session remains on Account Auth.
_Avoid_: hybrid login, mixed auth, realtime key hack

**Realtime WebSocket Proxy**:
The O3 Code-owned realtime-only forwarding participant for direct realtime websocket setup.
_Avoid_: Realtime Proxy, general proxy, Codex fork

**Realtime MITM Proxy**:
The O3 Code-owned, process-scoped HTTPS interception participant for applying the Realtime Auth Override to delegated External Codex CLI realtime setup.
_Avoid_: Realtime WebSocket Proxy, general proxy, account proxy

**Realtime API Key**:
The only API key eligible for the Realtime Auth Override, separate from any general OpenAI or Codex API key used by other auth paths.
_Avoid_: default API key, inherited key, shell key

**Realtime API Base URL**:
The OpenAI-compatible API origin or `/v1` base URL explicitly designated for the Realtime Auth Override.
_Avoid_: app server URL, ChatGPT backend URL, general base URL

**Realtime MITM CA**:
The O3 Code-generated private certificate authority trusted only by the delegated External Codex CLI process when the Realtime MITM Proxy is active.
_Avoid_: system CA, user-installed root, shared trust material

## Example Dialogue

Dev: "Should I change this file in the Codex App?"

Domain expert: "No. Treat the Codex App as source material and make the change as a Patch in O3 Code."

Dev: "Should formatting copied assets be listed as a Patch?"

Domain expert: "No. Formatting preserved upstream material is Normalization; reserve Patch for local intent we need to preserve across refreshes."

Dev: "If chunk filenames change, how will we find our local changes?"

Domain expert: "Follow the Patch SOP. Patch Markers show the last applied site, but the SOP owns rediscovery and validation."

Dev: "Where should the full migration procedure for a Patch live?"

Domain expert: "Put it in the Patch SOP, one folder per Patch, so an AI refresh agent can load only the relevant procedure and evidence."

Dev: "How do we reapply a Patch after refreshing Codex App source material?"

Domain expert: "Replace upstream material, run Normalization, then reapply each Patch SOP one by one and record fresh Patch Evidence."

Dev: "Can I preserve the edited copied files during a newer Codex App update?"

Domain expert: "No. A Source Refresh may replace copied source material, then rebuild O3 Code by running Normalization and Patch SOPs."

Dev: "Should I patch the compiled `codex` binary directly?"

Domain expert: "No. Keep the External Codex CLI outside Runtime Resources and put O3 Code-specific app-server behavior behind the App Server Router."

Dev: "Should O3 Code commit native add-ons, helper apps, `node`, `node_repl`, plugins, notices, asset catalogs, sounds, or locale folders from the Codex App?"

Domain expert: "No. Use the installed Codex App as the Native Resource Provider for Codex-owned Runtime Resources, and keep only O3-Owned Assets in the repo."

Dev: "Should O3 Code keep a local Codex CLI source checkout for reference or CLI patches?"

Domain expert: "No. Treat Codex CLI/app-server behavior as an external dependency selected through `PATH` or `O3_CODE_UPSTREAM_CODEX_PATH`."

Dev: "Should O3 Code default to its own isolated Electron user data?"

Domain expert: "No. Use the Codex App User Data Directory by default, and override it only when an isolated or custom profile is needed."

Dev: "Should an O3 Code-only setting live in the Codex App User Data Directory?"

Domain expert: "No. Put O3 Code-owned settings under the O3 Code State Root so local product intent is separate from the shared Codex App profile."

Dev: "Should the web version be a separate control panel?"

Domain expert: "No. Build a Mirrored Web Client so the browser presents the same user workflows as the Desktop Reconstruction."

Dev: "Should we add a separate bridge endpoint for every desktop feature?"

Domain expert: "No. Use a Transparent Remote Renderer Bridge so new renderer capabilities are mirrored by default instead of needing a new feature adapter."

Dev: "Should the web client just stream or control the visible desktop window?"

Domain expert: "No. The Mirrored Web Client owns the browser UI, while a Bridge Host provides access to the local Desktop Reconstruction capability surface."

Dev: "Does the web bridge work when O3 Code is not running?"

Domain expert: "No. The first implementation requires Bridge Mode so the local Desktop Reconstruction can act as the Bridge Host."

Dev: "Can Bridge Mode just use the default Chrome debugging port?"

Domain expert: "No. Use dynamically assigned loopback-only Bridge Ports so the sidecar and Electron control connection are not predictable public surfaces."

Dev: "Should the first web bridge patch preserved Electron chunks?"

Domain expert: "No. Start with a repo-owned Bridge Shim and sidecar, and add a Patch only when preserved source is missing a necessary hook."

Dev: "Should the Mirrored Web Client have its own frontend build?"

Domain expert: "No. Serve the Mirrored Web Client Asset Tree derived from patched Webview Assets, then apply browser-only Mirrored Web Client Patches there."

Dev: "Can the bridge add routing fields directly to app messages?"

Domain expert: "No. Keep Codex App message payloads unchanged and carry routing data in a Bridge Envelope."

Dev: "Should Bridge Mode drive the desktop UI with clicks and screenshots?"

Domain expert: "No. Use Minimal CDP Transport for renderer message relay, not UI automation or pixel streaming."

Dev: "Can the Mirrored Web Client open its own app-server connection?"

Domain expert: "No. Keep privileged app execution behind the Privileged State Boundary in the local Desktop Reconstruction."

Dev: "Are the browser and desktop window both first-class active user surfaces in Bridge Mode?"

Domain expert: "No. In the MVP, the browser is the intended user surface and the local Desktop Reconstruction renderer is the Transport Host Renderer."

Dev: "Can multiple browsers control one Bridge Mode instance at the same time?"

Domain expert: "No. Bridge Mode has one Active Web Session in the MVP, and a newer browser connection replaces the old one."

Dev: "Should replacing the Active Web Session stop local Codex work?"

Domain expert: "No. The old browser becomes a Detached Web Session while local turns, terminals, and app tasks continue in the Desktop Reconstruction."

Dev: "Should Bridge Mode build a custom full-state serializer for reconnects?"

Domain expert: "No. New Active Web Sessions hydrate through normal app queries plus a Bridge Sync Pulse for current host and shared-object status."

Dev: "Can the Mirrored Web Client pretend a browser-selected file has a local path?"

Domain expert: "No. Browser-selected files become Bridge-Staged Files before the Desktop Reconstruction receives local file references."

Dev: "Should the MVP reimplement macOS dialogs and menus in the browser?"

Domain expert: "No. Use Desktop-Hosted Native UI first, then replace specific surfaces with browser-native equivalents when remote ergonomics require it."

Dev: "Can the unauthenticated MVP be reachable from another device or the internet?"

Domain expert: "No. Keep it as a Local-Only Bridge until pairing, authentication, and authorization are designed."

Dev: "Should users run a separate start-web command to use Bridge Mode?"

Domain expert: "No. Use Web Access in the Desktop Reconstruction settings so Bridge Mode is app-owned and persistent."

Dev: "Should the MVP bridge server run inside Electron main?"

Domain expert: "No. Use a repo-owned Bridge Sidecar process first, managed by the Desktop Reconstruction."

Dev: "Does Local App Identity mean changing bundle IDs or the Codex App User Data Directory?"

Domain expert: "No. Local App Identity only covers the visible name and icon surfaces for repo-local runs."

Dev: "Should I switch O3 Code entirely to API Key Auth so realtime voice works?"

Domain expert: "No. Use a Realtime Auth Override so realtime voice can use API Key Auth without changing the rest of the Account Auth session."

Dev: "Can the Realtime Auth Override just pick up whatever OpenAI API key is already in my shell?"

Domain expert: "No. Provide a Realtime API Key explicitly so realtime voice routing and spend are intentional."

Dev: "If O3 Code is already using API Key Auth, can realtime voice borrow that key?"

Domain expert: "No. Realtime voice uses the Realtime API Key or it does not use the Realtime Auth Override."

Dev: "Should realtime voice use the same base URL as the ChatGPT-backed Codex App Server session?"

Domain expert: "No. Use a Realtime API Base URL for realtime voice, while Account Auth continues to use the ChatGPT-backed Codex App Server route."

Dev: "Can WebRTC realtime call creation keep using the ChatGPT-backed Codex App Server route?"

Domain expert: "No. The Realtime Auth Override covers realtime websocket setup, WebRTC call creation, and the WebRTC sideband websocket join."

Dev: "Can the External Codex CLI implementation use the Realtime WebSocket Proxy for WebRTC?"

Domain expert: "No. The Realtime WebSocket Proxy only covers direct websocket setup. Use a process-scoped Realtime MITM Proxy for WebRTC while O3 Code still delegates to an External Codex CLI without native realtime routing knobs."

Dev: "Should the Realtime MITM CA be installed into the system trust store?"

Domain expert: "No. Generate trust material for the Realtime MITM Proxy and expose it only to the delegated External Codex CLI process."
