# Desktop-Owned Bridge Mode Startup

Bridge Mode should be started and supervised by the running Desktop Reconstruction rather than by a separate `pnpm start:web` command. This makes Web access an app setting with persistent state, keeps Bridge Sidecar lifecycle tied to the desktop app, and removes the command-line launcher as a product surface while preserving dynamic loopback Bridge Ports for the sidecar endpoint and private Electron control connection.
