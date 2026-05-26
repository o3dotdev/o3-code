# Transparent Remote Renderer Bridge

O3 Code will build the Mirrored Web Client around a Transparent Remote Renderer Bridge instead of a curated set of feature-specific bridge endpoints. The bridge should preserve the Desktop Reconstruction's renderer capability surface as fully as possible so terminal, browser-sidebar, worker, fetch, app-server, file, native-dialog, notification, and future renderer-driven features can work without a new adapter for each feature.

The rejected alternative is a command-only or feature-adapter bridge. That would be narrower initially, but it would create a second product backend and would likely break during Source Refreshes whenever the Codex App introduces a new renderer capability or changes how an existing capability is routed.

Authentication and authorization for bridge access are intentionally out of scope for the first planning pass. The current decision is about product parity and capability coverage; a later decision must define how remote access to that full capability surface is protected.
