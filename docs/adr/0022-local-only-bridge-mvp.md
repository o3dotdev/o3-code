# Local-Only Bridge MVP

Bridge Mode will be local-only for the MVP. The sidecar web endpoint and the private Electron control connection must bind to loopback addresses, and remote access from LAN devices, tunnels, relays, or the public internet is out of scope until pairing, authentication, and authorization are designed.

This keeps the unauthenticated MVP acceptable for development while preserving the later path to mobile, LAN, or remote access.

ADR-0026 adds an explicit unauthenticated HTTPS LAN prototype mode for
browser/mobile microphone testing. The default Bridge Mode remains local-only.
