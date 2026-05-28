# Realtime Auth Override

## Status

Accepted

O3 Code treats realtime voice authentication as a scoped override instead of a global login mode change. Realtime voice setup may use API Key Auth while the rest of the Codex App Server session remains on Account Auth, because the account-backed ChatGPT backend route for realtime call creation can fail even when ordinary Codex App requests work.

The override requires a Realtime API Key from `O3_CODE_REALTIME_API_KEY`. It must not silently reuse `OPENAI_API_KEY`, `CODEX_API_KEY`, stored API-key auth, provider API keys, or Account Auth credentials, because realtime voice can create public API usage and spend. The Realtime API Base URL comes from `O3_CODE_REALTIME_BASE_URL`, accepts an HTTP(S) origin or `/v1` base URL, and otherwise defaults to `https://api.openai.com/v1`.

The policy target is for the override to cover every realtime voice setup path: direct realtime websocket setup, WebRTC `realtime/calls` creation, and the WebRTC sideband websocket join. The current Desktop Reconstruction webview starts voice through WebRTC, so a direct websocket-only implementation is not sufficient for the product path.

While O3 Code delegates app-server behavior to an unpatched External Codex CLI, the no-fork implementation uses a process-scoped Realtime MITM Proxy built on Mockttp. The App Server Router starts the proxy before spawning the External Codex CLI, binds it to `127.0.0.1` on an ephemeral port, generates private Realtime MITM CA trust material for that run, exposes the proxy only to the child process with `HTTP_PROXY` and `HTTPS_PROXY`, and exposes the generated CA only to the child process with `CODEX_CA_CERTIFICATE`. The child process preserves the inherited environment, including `SSL_CERT_FILE`, except for the scoped proxy and CA variables. O3 Code must not mutate the parent process environment, install the Realtime MITM CA into the system trust store, or write it into the Codex App User Data Directory.

The Realtime MITM Proxy intercepts only the delegated child process's proxied traffic, passes non-realtime traffic through unchanged, and rewrites only realtime setup requests required by the override. For WebRTC call creation, it translates the ChatGPT backend JSON request shape for `/backend-api/codex/realtime/calls` into the public API multipart `/v1/realtime/calls` request shape, injects the Realtime API Key upstream, preserves SDP/session semantics, and relays the upstream status, body, and response headers after filtering hop-by-hop headers. For sideband websocket setup, it routes the join through the Realtime API Base URL with the same Realtime API Key instead of account-backed ChatGPT credentials, preserving the call path suffix and query.

The existing Realtime WebSocket Proxy remains useful only for direct websocket setup and tests. It is not the primary no-fork path for the Desktop Reconstruction voice UI, because that UI currently creates a browser `RTCPeerConnection` and sends `thread/realtime/start` with WebRTC SDP.

Security constraints are part of the decision. Proxy diagnostics must be redacted, stdout must remain reserved for app-server protocol bytes, captured request and response bodies must not be logged by default, generated private keys and CA material must live under O3 Code-owned runtime or temp state with restrictive permissions, and proxy failure while the override is active must fail closed instead of falling back to account-backed realtime setup.

Rejected alternatives remain: switching the whole app-server session to API Key Auth loses the account-backed behavior the Desktop Reconstruction is meant to preserve; forcing `realtime.transport="websocket"` does not match the current desktop voice path; requiring a patched/local Codex CLI can validate behavior quickly but makes O3 Code depend on a forked app-server boundary.
