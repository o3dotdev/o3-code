# O3 Code

O3 Code is the repo-local reconstruction of the installed macOS Codex App. The context exists to preserve the app's source material, make it runnable from the repository, and provide a place for later project-specific patches and extensions.

## Language

**Codex App**:
The installed macOS desktop application used as the upstream source material for this repo.
_Avoid_: app bundle, desktop app, upstream app

**O3 Code**:
The repo-local Electron project reconstructed from the Codex App.
_Avoid_: clone, fork, extracted app

**Patch**:
A deliberate local change applied to O3 Code after the upstream source material has been preserved.
_Avoid_: tweak, hack, modification

## Example Dialogue

Dev: "Should I change this file in the Codex App?"

Domain expert: "No. Treat the Codex App as source material and make the change as a Patch in O3 Code."
