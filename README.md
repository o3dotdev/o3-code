<picture>
  <img src="docs/assets/o3-code-readme-banner.svg" alt="O3 Code desktop app with a companion phone view" width="100%">
</picture>

# O3 Code

**Codex as a local app, with realtime voice and a browser view.**

O3 Code turns the Codex desktop experience into an npm-launched local project
you can install, inspect, and shape. It enables realtime voice for local runs,
adds an O3 Code identity, and serves a browser companion for using the same
experience from your phone, tablet, or side screen.

[Install](#install) ·
[Contribute](CONTRIBUTING.md)

## Key Features

- **Realtime voice runtime.** O3 Code enables the realtime voice gate for local
  runs, so voice workflows can be exercised without waiting on upstream rollout
  state.
- **Browser view for O3 Code.** Web access serves a Mirrored Web Client on
  localhost, giving phone, tablet, and desktop browsers a companion view into
  the same local O3 Code workflow.
- **Voice mode where the browser is.** The voice runtime and browser view are
  designed to meet: keep the desktop app as the local capability host, then use
  the browser view when you want voice on a mobile or side-screen surface.

## Install

Install and start O3 Code:

```sh
npm install -g @o3dotdev/code && o3-code
```

Global install makes `o3-code status`, `o3-code logs`, `o3-code restart`, and
`o3-code stop` available from your shell.

Try without installing:

```sh
npx @o3dotdev/code
```

O3 Code expects the official Codex Desktop app to be installed on the same Mac
so native runtime resources can be resolved from it.

## What You Get

- A local Codex surface, branded and run as O3 Code.
- Realtime voice enabled for the local runtime.
- Local Web access for a mirrored browser experience.
- Isolated O3 Code app state by default, with opt-in reuse of an existing Codex
  profile when you need it.
- A refreshable foundation for carrying local O3 Code improvements forward as
  Codex App releases move.

## Why O3 Code

Codex is most useful when it feels close to the work: native terminal support,
local files, project context, and a UI that stays out of the way. O3 Code keeps
that local workflow easy to start from npm while leaving room to improve the
voice and browser companion experience.

## Contributing

Developer setup, architecture notes, source refresh flow, and patch guidance
live in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

O3 Code is released under the [MIT License](LICENSE).
