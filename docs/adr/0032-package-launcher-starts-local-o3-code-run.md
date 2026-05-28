# Package Launcher Starts Local O3 Code Run

The `@o3dotdev/code` npm package exposes a JS-only Package Launcher whose bare `npx @o3dotdev/code` invocation starts or reuses a background local O3 Code run, then prints a React terminal status panel with the local URL, process state, logs, and lifecycle commands. The npm payload includes the repo-owned launcher, terminal UI, bridge/router packages, O3-owned assets, and the preserved JavaScript and webview asset material required to run the Desktop Reconstruction and Mirrored Web Client. The package does not redistribute Codex-owned runtime material; it keeps the JS-Only O3 Code Package boundary from ADR-0031 and stores launcher-owned runtime state under the O3 Code State Root from ADR-0027.

The first command surface is intentionally small: `start`, `stop`, `restart`, `status`, and `logs`. Browser UI work remains the Mirrored Web Client rather than a separate npm control panel.
