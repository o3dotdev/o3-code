# Replay Patches With Recipes

## Status

Accepted

Source Refresh may replace preserved Codex App source material instead of preserving the previously edited copied files. O3 Code rebuilds local intent by running Normalization and then Patch Recipes, with the final patched source tree committed for runnable development.

Patch Recipes use semantic file discovery when chunk names or bundle placement may move, but they apply strict exact snippet replacements inside matched files. This favors loud migration failures over broad AST transforms because normalized bundled JavaScript has unstable local names and wrapper shapes, and a structure-based transform can match the wrong behavior without noticing.

Each active Patch has one Patch Record for intent and migration notes, one Patch Recipe for apply/check behavior, and one or more Patch Marker regions when copied source text is changed. Recipes are idempotent only in the narrow sense that they can apply to a clean normalized source tree or verify an already-applied exact marker-delimited result; partial, ambiguous, duplicated, or drifted matches are Patch migration failures.
