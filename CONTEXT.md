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
A loopback-only network port dynamically assigned during Bridge Mode for either the sidecar web endpoint or the private Electron control connection.
_Avoid_: default debugging port, public port, fixed port

**Bridge Shim**:
Repo-owned browser-side code that lets the Mirrored Web Client talk to Bridge Mode without changing preserved Codex App source material.
_Avoid_: renderer patch, web rewrite, injected hack

**Webview Assets**:
The preserved browser-rendered files under `apps/desktop/app/webview` that the Desktop Reconstruction loads as its primary UI.
_Avoid_: web app source, copied frontend, separate web build

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

**Bridge Sidecar**:
The repo-owned Node process managed by Bridge Mode that serves the Mirrored Web Client, owns WebSocket routing, and privately connects to the Electron control port.
_Avoid_: Electron main patch, embedded bridge server, frontend server

**Patch**:
A deliberate local change applied to O3 Code after the upstream source material has been preserved.
_Avoid_: tweak, hack, modification

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
The files copied from the Codex App that O3 Code needs at runtime, excluding the signed macOS outer bundle and Electron frameworks.
_Avoid_: app bundle, binary mirror

**Codex CLI Upstream**:
The pinned source checkout used to build the `codex` app-server binary consumed by the Desktop Reconstruction.
_Avoid_: package, loose clone, binary source

**Codex App User Data Directory**:
The installed Codex App's Electron user data directory, shared by default with O3 Code when running the Desktop Reconstruction locally.
_Avoid_: original app folder, app bundle, upstream folder

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

**Realtime API Key**:
The only API key eligible for the Realtime Auth Override, separate from any general OpenAI or Codex API key used by other auth paths.
_Avoid_: default API key, inherited key, shell key

**Realtime API Base URL**:
The OpenAI-compatible API origin explicitly designated for the Realtime Auth Override.
_Avoid_: app server URL, ChatGPT backend URL, general base URL

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

Domain expert: "No. Edit the Codex CLI Upstream, build a new binary, and install that binary into Runtime Resources."

Dev: "Should O3 Code default to its own isolated Electron user data?"

Domain expert: "No. Use the Codex App User Data Directory by default, and override it only when an isolated or custom profile is needed."

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

Domain expert: "No. Serve the preserved Webview Assets and inject a Bridge Shim so the browser uses the same UI material as the Desktop Reconstruction."

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

Dev: "Should the MVP bridge server run inside Electron main?"

Domain expert: "No. Use a repo-owned Bridge Sidecar process first, managed by the Bridge Mode launcher."

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
