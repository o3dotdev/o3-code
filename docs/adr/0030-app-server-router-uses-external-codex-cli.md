# App Server Router Uses External Codex CLI

O3 Code will stop shipping a repo-built `codex` app-server binary in Runtime Resources. The Desktop Reconstruction will launch an O3 Code-owned App Server Router in the existing app-server launch position, and the App Server Router will delegate to the user's External Codex CLI by default, with `O3_CODE_UPSTREAM_CODEX_PATH` as an explicit environment override for deterministic external CLI selection.

This replaces the previous runtime-binary and pinned source checkout decisions. The previous approach made Codex CLI behavior reproducible from the repo, but it also made O3 Code responsible for rebuilding, shipping, refreshing, and documenting a large app-server boundary. The new boundary keeps O3 Code-specific behavior in the App Server Router while treating the official `codex` command as a user-installed dependency.

Resolution order is:

1. `O3_CODE_UPSTREAM_CODEX_PATH`
2. `PATH`
3. `Codex.app/Contents/Resources/codex`, where Codex.app is resolved by `O3_CODE_CODEX_APP_PATH` or `/Applications/Codex.app`

The tradeoff is that startup now depends on a valid external Codex CLI or installed Codex Desktop app, so failure modes must be explicit and actionable. Native runtime resource ownership is covered by [0031 Native Resources Come From Installed Codex App](./0031-native-resources-come-from-installed-codex-app.md).
