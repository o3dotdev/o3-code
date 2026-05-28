# Realtime Auth Override

## Status

Accepted

O3 Code will treat realtime voice authentication as a scoped override instead of a global login mode change. Realtime voice setup may use API Key Auth while the rest of the Codex App Server session remains on Account Auth, because the current account-backed ChatGPT backend route for realtime call creation may be unavailable even when ordinary Codex App requests work.

This preserves account-backed Codex behavior for normal requests while giving realtime voice an explicit path to the public API. The rejected alternative is switching the whole app-server session to API Key Auth, which would make all endpoints follow the API-key provider and lose the account-auth behavior the Desktop Reconstruction is meant to preserve.

The override will require a Realtime API Key from the dedicated `O3_CODE_REALTIME_API_KEY` environment variable instead of silently reusing a general `OPENAI_API_KEY`, `CODEX_API_KEY`, stored API-key auth, or provider API key. When `O3_CODE_REALTIME_API_KEY` is set, realtime voice uses it even if the main Codex session is already using API Key Auth; when it is absent, realtime voice does not borrow credentials from another auth path. Realtime voice can create public API usage and should therefore require explicit opt-in for routing and spend.

The Realtime API Base URL will come from `O3_CODE_REALTIME_BASE_URL` when set and otherwise default to `https://api.openai.com/v1`. This base URL applies only to realtime voice setup; ordinary Codex App Server traffic continues to use the configured account-backed route when Account Auth is active.

The policy target is for the override to cover every realtime voice setup path, including direct realtime websocket sessions, WebRTC `realtime/calls` creation, and the WebRTC sideband websocket join. When O3 Code owns the Codex app-server implementation, all realtime voice setup should use the same realtime-scoped credential so WebRTC startup cannot fall back to the ChatGPT backend route.

When O3 Code delegates to the External Codex CLI without patching it, the first implementation is WebSocket-only. Official Codex exposes `experimental_realtime_ws_base_url` for the direct realtime websocket connection, but it does not expose a matching no-fork API-key/base-URL override for WebRTC call creation and sideband auth. In that shape, O3 Code forces the realtime transport to WebSocket when the Realtime Auth Override is active, and treats WebRTC support as deferred until Codex exposes suitable realtime call routing knobs or O3 Code owns a deeper app-server realtime implementation.

The External Codex CLI implementation uses a loopback-only Realtime Proxy that accepts only realtime websocket upgrades, preserves realtime path/query details, strips inbound auth, and injects the Realtime API Key only on the upstream connection. Proxy diagnostics must describe routes and failures without logging API keys or authorization headers.

When the Realtime Auth Override is active, O3 Code appends process-scoped Codex config overrides after user-provided app-server arguments so the realtime websocket base URL and websocket transport selection win for that run without editing the user's Codex config. Compatibility checks are behavior-based rather than pinned to a hardcoded Codex version, and startup fails before launching Codex when the realtime base URL is malformed or uses an unsupported scheme.

The Realtime Proxy lifecycle is tied to the delegated External Codex CLI app-server process. It starts before Codex is spawned, supports multiple concurrent realtime websocket tunnels, writes only redacted diagnostics to stderr, and leaves stdout reserved for app-server protocol bytes. If the Realtime Proxy cannot start while the override is active, O3 Code fails closed instead of launching Codex with partial realtime routing.
