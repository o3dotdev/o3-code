# Replay Patches With Recipes

## Status

Superseded by ADR-0008

O3 Code previously treated executable patch scripts as the primary way to rebuild local intent after a Source Refresh. That approach is no longer active because bundled Electron source can change file names, chunk structure, and local symbol shapes between releases.

Current refresh work follows ADR-0008: Patch SOPs are authoritative, and AI refresh agents reapply each Patch from documented intent, discovery steps, validation, and failure conditions.
