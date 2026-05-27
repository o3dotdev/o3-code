# O3 Code State Root

O3 Code-owned persistent settings and runtime state should live under `~/.o3/code`, separate from the Codex App User Data Directory that the Desktop Reconstruction shares by default. This keeps local O3 Code product configuration, such as Bridge Mode access settings, out of the upstream Codex App profile while giving future settings one stable root instead of scattering state across CLI-specific files or Electron profile storage.
