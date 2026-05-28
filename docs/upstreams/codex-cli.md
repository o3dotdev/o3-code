# Codex CLI Upstream

O3 Code keeps `o3dotdev/o3-codex` as an optional source reference checkout for Codex CLI/app-server behavior. Runtime app-server launch goes through the App Server Router and delegates to the user's External Codex CLI.

## Location

- Checkout: `upstream/codex/`
- Origin remote: `https://github.com/o3dotdev/o3-codex.git`
- Upstream remote: `https://github.com/openai/codex.git`
- Work branch: `o3/main`
- Current pin: `8a94430bb273623be42b68f144f1ab1df343bb53`
- Runtime CLI: external `codex` on `PATH`, or `O3_CODE_UPSTREAM_CODEX_PATH`

## Edit Workflow

```sh
pnpm codex:setup
cd upstream/codex
git status
```

`pnpm codex:setup` initializes the submodule, checks out `o3/main`, and configures the OpenAI Codex upstream remote.

Commits made inside `upstream/codex/` belong to `o3dotdev/o3-codex`, not the O3 Code repo. After committing there, return to the O3 Code repo and commit the changed submodule pointer when O3 Code should pin that source reference.

The `upstream` remote is configured for fetching OpenAI Codex only; push O3 changes to `origin`.

```sh
cd upstream/codex
git add codex-rs
git commit -m "fix(realtime): route voice setup through realtime api key"
git push -u origin o3/main

cd ../..
git add upstream/codex
git commit -m "chore(codex): pin realtime auth override"
```

## Sync Workflow

```sh
cd upstream/codex
git fetch upstream
git checkout o3/main
git rebase upstream/main
cargo test --manifest-path codex-rs/Cargo.toml -p codex-core realtime
```

When sync succeeds, commit the submodule pointer in O3 Code if the source reference should move. To exercise a locally built CLI, build it from `upstream/codex` and run O3 Code with `O3_CODE_UPSTREAM_CODEX_PATH` pointing at that external binary.

## Realtime Auth Override Plan

O3 Code keeps normal Codex App Server traffic on the configured session, such as ChatGPT Account Auth, while realtime voice setup uses a realtime-scoped API key route.

Environment variables:

- `O3_CODE_REALTIME_API_KEY` is required for realtime voice setup.
- `O3_CODE_REALTIME_BASE_URL` is optional and defaults to `https://api.openai.com/v1`.

The override must not read `OPENAI_API_KEY`, `CODEX_API_KEY`, stored API-key auth, or provider `env_key` as a realtime fallback. It applies to direct realtime websocket sessions, WebRTC `realtime/calls` creation, and the WebRTC sideband websocket join. Non-realtime model requests, models, files, memories, plugins, analytics, and account flows must continue to use the configured provider/auth route.

Implementation touchpoints in `upstream/codex/`:

- `codex-rs/core/src/realtime_conversation.rs`: resolve the realtime-scoped provider and API key from `O3_CODE_REALTIME_*`, build authorization headers from that key, and pass the same resolved route through websocket and WebRTC starts.
- `codex-rs/core/src/client.rs`: let WebRTC `realtime/calls` creation use the realtime-scoped provider/auth supplied by realtime startup instead of `ModelClient::current_client_setup()`.
- `codex-rs/login/src/auth/manager.rs` or a realtime-local helper: add non-empty env readers for the `O3_CODE_REALTIME_*` variables without changing general login behavior.
- `codex-rs/core/tests/suite/realtime_conversation.rs`: replace the ChatGPT-auth `OPENAI_API_KEY` fallback test with `O3_CODE_REALTIME_API_KEY`, and add coverage that WebRTC call creation posts to the realtime API base URL rather than the ChatGPT backend.

Validation:

```sh
cargo test --manifest-path codex-rs/Cargo.toml -p codex-core realtime_conversation
cargo test --manifest-path codex-rs/Cargo.toml -p codex-api realtime_call
```

After the Codex CLI commit is ready, build the CLI from `upstream/codex`, run `pnpm start` with `O3_CODE_UPSTREAM_CODEX_PATH` pointing at that binary, and verify realtime voice behavior with `O3_CODE_REALTIME_API_KEY` set.
