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

**Normalization**:
A deterministic, broad rewrite of preserved upstream source material that creates a patch-friendly baseline without expressing local product intent.
_Avoid_: patch, cleanup, refactor

**Runtime Resources**:
The files copied from the Codex App that O3 Code needs at runtime, excluding the signed macOS outer bundle and Electron frameworks.
_Avoid_: app bundle, binary mirror

**Codex App User Data Directory**:
The installed Codex App's Electron user data directory, shared by default with O3 Code when running the Desktop Reconstruction locally.
_Avoid_: original app folder, app bundle, upstream folder

**Local App Identity**:
The visible O3 Code name and icon surface used by the Desktop Reconstruction during repo-local runs, without changing Codex App protocol, bundle, or user data identity.
_Avoid_: rebrand, bundle identity, product identity

## Example Dialogue

Dev: "Should I change this file in the Codex App?"

Domain expert: "No. Treat the Codex App as source material and make the change as a Patch in O3 Code."

Dev: "Should formatting copied assets be listed as a Patch?"

Domain expert: "No. Formatting preserved upstream material is Normalization; reserve Patch for local intent we need to preserve across refreshes."

Dev: "If chunk filenames change, how will we find our local changes?"

Domain expert: "Use begin and end Patch Markers around the changed region and keep the explanation outside the code."

Dev: "Where should the full explanation for a Patch live?"

Domain expert: "Put it in a Patch Record, one file per Patch, so refresh agents can load only the relevant context."

Dev: "Should O3 Code default to its own isolated Electron user data?"

Domain expert: "No. Use the Codex App User Data Directory by default, and override it only when an isolated or custom profile is needed."

Dev: "Does Local App Identity mean changing bundle IDs or the Codex App User Data Directory?"

Domain expert: "No. Local App Identity only covers the visible name and icon surfaces for repo-local runs."
