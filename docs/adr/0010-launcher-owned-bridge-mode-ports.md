# Launcher-Owned Bridge Mode Ports

Superseded in part by ADR-0028 and ADR-0029. Bridge Mode startup is now desktop-owned, the sidecar Web Access Port is persistent, and the private Electron CDP Bridge Port remains dynamic and loopback-only.

Bridge Mode will be started by a repo-owned launcher instead of requiring the user to manually launch Electron with a fixed debugging port. The launcher allocates loopback-only Bridge Ports for the sidecar HTTP/WSS endpoint and the private Electron control connection, then starts Electron with the selected control port and starts the sidecar with the selected web endpoint.

The CDP control connection must not use the default `9222` port and must not bind publicly. Dynamic ports reduce accidental collision and avoid making the privileged control surface predictable, while explicit environment overrides can still exist for debugging.
