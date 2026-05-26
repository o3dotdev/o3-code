# Patch SOPs For Bundled Source

## Status

Accepted

O3 Code will treat Patch SOPs as the authority for bundled Electron source changes. Source Refresh work replaces copied upstream material, runs Normalization, and then has an AI refresh agent reapply each Patch SOP one by one while recording fresh Patch Evidence.

This supersedes executable patch scripts as the primary patch mechanism. Bundled app chunks can move, rename, or change structure between releases, so exact snippet scripts are too literal to carry durable intent; SOPs preserve the goal, discovery process, non-goals, validation steps, and failure conditions that a future agent needs when the bundle shape changes.
