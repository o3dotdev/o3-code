# 0006 Web Access Settings

## Status

Active.

## Intent

Expose Bridge Mode as an app-owned **Web access** setting in the Desktop
Reconstruction instead of the removed `pnpm start:web` product path.

The patch persists O3 Code Web access intent under `~/.o3/code/config.json`,
starts and stops the repo-owned Bridge Sidecar from the running desktop app, and
keeps the Mirrored Web Client endpoint localhost-only.

The settings page may also show Tailscale Serve commands for mobile access.
Those commands are user-run guidance only; O3 Code does not change its bridge
listener or expose the sidecar outside `127.0.0.1`.
