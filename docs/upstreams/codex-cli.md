# Codex CLI Upstream

O3 Code uses `o3dotdev/o3-codex` as the editable Codex CLI/app-server source checkout for the runtime `codex` binary.

## Location

- Checkout: `upstream/codex/`
- Origin remote: `https://github.com/o3dotdev/o3-codex.git`
- Upstream remote: `https://github.com/openai/codex.git`
- Work branch: `o3/main`
- Current pin: `8a94430bb273623be42b68f144f1ab1df343bb53`
- Runtime binary: `apps/desktop/resources/codex`

## Edit Workflow

```sh
pnpm codex:setup
cd upstream/codex
git status
```

`pnpm codex:setup` initializes the submodule, checks out `o3/main`, and configures the OpenAI Codex upstream remote.

Commits made inside `upstream/codex/` belong to `o3dotdev/o3-codex`, not the O3 Code repo. After committing there, return to the O3 Code repo and commit the changed submodule pointer when O3 Code should pin that new Codex CLI commit.

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

## Build Workflow

```sh
pnpm codex:build
```

The build script runs Cargo from `upstream/codex/codex-rs`, builds package `codex-cli` bin `codex` in release mode, and copies the result to `apps/desktop/resources/codex`.

Commit `apps/desktop/resources/codex` only when O3 Code should run that rebuilt binary by default from checkout.

## Sync Workflow

```sh
cd upstream/codex
git fetch upstream
git checkout o3/main
git rebase upstream/main
cargo test --manifest-path codex-rs/Cargo.toml -p codex-core realtime

cd ../..
pnpm codex:build
pnpm start
```

When sync succeeds, commit both the submodule pointer and the rebuilt runtime binary in O3 Code if the binary should become the default local runtime.

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

After the Codex CLI commit is ready, rebuild the runtime binary from the O3 Code repo with `pnpm codex:build` and verify `pnpm start` no longer reports 404s from `https://chatgpt.com/backend-api/codex/realtime/calls` when realtime voice is started with `O3_CODE_REALTIME_API_KEY` set.
