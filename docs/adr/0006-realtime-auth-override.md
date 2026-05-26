# Realtime Auth Override

## Status

Accepted

O3 Code will treat realtime voice authentication as a scoped override instead of a global login mode change. Realtime voice setup may use API Key Auth while the rest of the Codex App Server session remains on Account Auth, because the current account-backed ChatGPT backend route for realtime call creation may be unavailable even when ordinary Codex App requests work.

This preserves account-backed Codex behavior for normal requests while giving realtime voice an explicit path to the public API. The rejected alternative is switching the whole app-server session to API Key Auth, which would make all endpoints follow the API-key provider and lose the account-auth behavior the Desktop Reconstruction is meant to preserve.

The override will require a Realtime API Key from a dedicated source instead of silently reusing a general `OPENAI_API_KEY`. Realtime voice can create public API usage and should therefore require explicit opt-in for routing and spend.
