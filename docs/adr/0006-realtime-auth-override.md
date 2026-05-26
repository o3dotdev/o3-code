# Realtime Auth Override

## Status

Accepted

O3 Code will treat realtime voice authentication as a scoped override instead of a global login mode change. Realtime voice setup may use API Key Auth while the rest of the Codex App Server session remains on Account Auth, because the current account-backed ChatGPT backend route for realtime call creation may be unavailable even when ordinary Codex App requests work.

This preserves account-backed Codex behavior for normal requests while giving realtime voice an explicit path to the public API. The rejected alternative is switching the whole app-server session to API Key Auth, which would make all endpoints follow the API-key provider and lose the account-auth behavior the Desktop Reconstruction is meant to preserve.

The override will require a Realtime API Key from the dedicated `O3_CODE_REALTIME_API_KEY` environment variable instead of silently reusing a general `OPENAI_API_KEY`, `CODEX_API_KEY`, stored API-key auth, or provider API key. When `O3_CODE_REALTIME_API_KEY` is set, realtime voice uses it even if the main Codex session is already using API Key Auth; when it is absent, realtime voice does not borrow credentials from another auth path. Realtime voice can create public API usage and should therefore require explicit opt-in for routing and spend.

The Realtime API Base URL will come from `O3_CODE_REALTIME_BASE_URL` when set and otherwise default to `https://api.openai.com/v1`. This base URL applies only to realtime voice setup; ordinary Codex App Server traffic continues to use the configured account-backed route when Account Auth is active.

The override covers every realtime voice setup path, including direct realtime websocket sessions, WebRTC `realtime/calls` creation, and the WebRTC sideband websocket join. This keeps all realtime voice transport setup on the same realtime-scoped credential and prevents WebRTC startup from falling back to the ChatGPT backend route.
