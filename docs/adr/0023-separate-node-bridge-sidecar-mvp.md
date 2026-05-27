# Separate Node Bridge Sidecar For MVP

The MVP Bridge Mode server will run as a separate repo-owned Node Bridge Sidecar process managed by the Desktop Reconstruction. The sidecar serves the Mirrored Web Client, owns HTTP/WSS routing, connects privately to the Electron control port, injects bridge hooks, and routes Bridge Envelopes.

The supervisor must launch the sidecar with a Node executable, preferably the bundled runtime path already supplied to desktop startup. It must not use Electron's `process.execPath`, because inside the desktop app that path is a GUI Electron host and can create an extra Dock app.

This avoids patching Electron main just to host the bridge server and keeps iteration outside preserved Codex App source material. Packaging can later decide whether the sidecar remains separate or is embedded under a tighter supervisor.
