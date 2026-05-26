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

**Patch**:
A deliberate local change applied to O3 Code after the upstream source material has been preserved.
_Avoid_: tweak, hack, modification

**Patch Marker**:
A paired inline boundary placed around a Patch site so the local intent and exact changed region remain discoverable after source refreshes and chunk renames.
_Avoid_: comment, note, TODO

**Patch Record**:
The durable explanation of one Patch, stored separately from copied source so future refresh work can load and reason about that Patch in isolation.
_Avoid_: ledger entry, changelog item, note

**Patch Recipe**:
The executable application and verification artifact for one Patch, stored separately from copied source so source refresh work can fail loudly when the expected upstream anchors no longer match.
_Avoid_: patch script, replacement script, codemod

**Normalization**:
A deterministic, broad rewrite of preserved upstream source material that creates a patch-friendly baseline without expressing local product intent.
_Avoid_: patch, cleanup, refactor

**Source Refresh**:
The operation that replaces preserved upstream source material from a newer Codex App release before Normalization and Patch Recipes rebuild the local O3 Code state.
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
The API key explicitly designated for the Realtime Auth Override.
_Avoid_: default API key, inherited key, shell key

## Example Dialogue

Dev: "Should I change this file in the Codex App?"

Domain expert: "No. Treat the Codex App as source material and make the change as a Patch in O3 Code."

Dev: "Should formatting copied assets be listed as a Patch?"

Domain expert: "No. Formatting preserved upstream material is Normalization; reserve Patch for local intent we need to preserve across refreshes."

Dev: "If chunk filenames change, how will we find our local changes?"

Domain expert: "Use begin and end Patch Markers around the changed region and keep the explanation outside the code."

Dev: "Where should the full explanation for a Patch live?"

Domain expert: "Put it in a Patch Record, one file per Patch, so refresh agents can load only the relevant context."

Dev: "How do we reapply a Patch after refreshing Codex App source material?"

Domain expert: "Run its Patch Recipe after Normalization, and treat a missing or ambiguous upstream anchor as a Patch migration failure."

Dev: "Can I preserve the edited copied files during a newer Codex App update?"

Domain expert: "No. A Source Refresh may replace copied source material, then rebuild O3 Code by running Normalization and Patch Recipes."

Dev: "Should I patch the compiled `codex` binary directly?"

Domain expert: "No. Edit the Codex CLI Upstream, build a new binary, and install that binary into Runtime Resources."

Dev: "Should O3 Code default to its own isolated Electron user data?"

Domain expert: "No. Use the Codex App User Data Directory by default, and override it only when an isolated or custom profile is needed."

Dev: "Does Local App Identity mean changing bundle IDs or the Codex App User Data Directory?"

Domain expert: "No. Local App Identity only covers the visible name and icon surfaces for repo-local runs."

Dev: "Should I switch O3 Code entirely to API Key Auth so realtime voice works?"

Domain expert: "No. Use a Realtime Auth Override so realtime voice can use API Key Auth without changing the rest of the Account Auth session."

Dev: "Can the Realtime Auth Override just pick up whatever OpenAI API key is already in my shell?"

Domain expert: "No. Provide a Realtime API Key explicitly so realtime voice routing and spend are intentional."
