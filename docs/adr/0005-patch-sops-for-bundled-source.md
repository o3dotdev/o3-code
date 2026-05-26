# Patch SOPs For Bundled Source

## Status

Accepted

O3 Code treats Patch SOPs as the authority for bundled Electron source changes. Source Refresh work replaces copied upstream material, runs Normalization, and then has an AI refresh agent reapply each Patch SOP one by one while recording fresh Patch Evidence.

Bundled app chunks can move, rename, or change structure between releases, so durable patch maintenance needs procedure-level intent rather than exact file assumptions. SOPs preserve the goal, discovery process, non-goals, validation steps, and failure conditions that a future agent needs when the bundle shape changes.
