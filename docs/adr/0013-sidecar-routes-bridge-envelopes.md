# Sidecar Routes Bridge Envelopes

Bridge Mode will use the sidecar as the single cross-runtime message router between the browser renderer and Electron renderer. Each bridged message carries a Bridge Envelope with source, session, and message identity metadata, while the Codex App renderer payload remains unchanged.

The router suppresses echoes so a runtime does not receive its own bridged message as a new local event. Keeping route metadata outside app payloads preserves compatibility with the Desktop Reconstruction's existing message contract and reduces Source Refresh coupling.
