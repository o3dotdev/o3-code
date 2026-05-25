# Default to Codex App User Data

O3 Code defaults local Electron runs to the Codex App User Data Directory instead of a repo-local profile. This trades isolation for fidelity: `pnpm start` should behave like the installed Codex App by reusing the same profile, auth session, and app state, while `CODEX_ELECTRON_USER_DATA_PATH` remains available for isolated or custom profiles.
