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
