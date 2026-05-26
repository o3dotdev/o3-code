# Privileged State Boundary

The Mirrored Web Client will own browser interaction state, but privileged app capability execution remains inside the local Desktop Reconstruction. Browser-origin renderer messages must be routed through the sidecar into the Electron Bridge Host rather than creating independent browser-side app-server, terminal, file, or native capability clients.

This avoids a second backend competing with the Desktop Reconstruction over the same user data and local resources. It also keeps capability behavior aligned with existing Electron main-process and app-server paths while the web UI mirrors the desktop renderer.
