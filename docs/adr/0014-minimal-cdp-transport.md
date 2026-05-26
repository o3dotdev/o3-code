# Minimal CDP Transport

Bridge Mode will use CDP as a private transport into the Electron renderer, not as a general UI automation layer. The MVP should attach to the renderer, install bridge hooks with runtime evaluation or bindings, call exposed renderer/preload methods when requested, and relay app messages between the Electron renderer and the sidecar.

The MVP should avoid DOM clicking, keyboard automation, screenshots, broad page control, and network interception unless a specific bridge gap proves they are required. This keeps the Transparent Remote Renderer Bridge focused on product capability mirroring instead of turning CDP into a second desktop automation system.
