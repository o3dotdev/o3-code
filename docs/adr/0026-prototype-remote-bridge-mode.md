# Prototype Remote Bridge Mode

Superseded by ADR-0028 for the product path. Remote Bridge Mode is no longer exposed through `pnpm start:web`; future remote exposure should be designed as an app-owned Web access mode with pairing, authentication, and authorization.

`pnpm start:web` and `O3_CODE_BRIDGE_REMOTE=1` have been removed as product
surfaces. Web access is controlled by the running Desktop Reconstruction and is
localhost-only for the MVP. A future production remote bridge must replace this
with a real access-control model before LAN, tunnel, relay, or public exposure
returns.
