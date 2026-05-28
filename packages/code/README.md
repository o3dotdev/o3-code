# @o3dotdev/code

Run O3 Code from npm:

```sh
npx @o3dotdev/code
```

The package starts a local O3 Code run in the background, prints the local web URL, and shows the lifecycle commands:

```sh
o3-code status
o3-code logs --follow
o3-code restart
o3-code stop
```

The package ships the JS-only O3 Code runtime payload. Native Codex runtime resources are resolved from an installed Codex Desktop app.

Realtime MITM override is enabled by default when `O3_CODE_REALTIME_API_KEY` is set. If the key is missing, the launcher shows a warning and starts without the override.
