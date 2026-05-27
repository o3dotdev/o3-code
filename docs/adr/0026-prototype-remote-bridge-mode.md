# Prototype Remote Bridge Mode

Superseded by ADR-0028 for the product path. Remote Bridge Mode is no longer exposed through `pnpm start:web`; future remote exposure should be designed as an app-owned Web access mode with pairing, authentication, and authorization.

`pnpm start:web` remains local-only by default. For browser/mobile microphone
testing, `O3_CODE_BRIDGE_REMOTE=1` may expose the Bridge Sidecar on the LAN over
HTTPS without pairing, authentication, authorization, or E2EE.

This is an explicit prototype exception to the local-only MVP decision in
ADR-0022. Electron CDP must still default to `127.0.0.1`; only the sidecar web
surface becomes remotely reachable.

The launcher must print a warning when remote mode is enabled. A future
production remote bridge must replace this with a real access-control model.
