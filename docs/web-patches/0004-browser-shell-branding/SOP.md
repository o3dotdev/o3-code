# Browser Shell Branding SOP

## Goal

Keep the browser-served shell branded as O3 Code by rewriting served HTML metadata and startup splash styling through Bridge HTML injection.

## Non-Goals

- Do not mutate Desktop Reconstruction Webview Assets under `apps/desktop/app/webview`.
- Do not rewrite broad in-app Codex copy, onboarding copy, localized strings, or React-rendered product names.
- Do not patch generated files under `apps/web/app/webview` unless Bridge injection can no longer reach shell metadata or startup splash styling.

## Dependencies

- `0001-mobile-shell-viewport-and-scroll` should remain applied because this patch relies on the same Bridge HTML injection path.

## Allowed Surfaces

- `packages/bridge/src/html-injection.mjs`
- `packages/bridge/test/html-injection.test.mjs`
- `docs/web-patches/0004-browser-shell-branding/**`
- `docs/web-patches/README.md`

## Discovery

1. Confirm the sidecar serves browser HTML through `packages/bridge/src/sidecar.mjs` and `injectBridgeShell`.
2. Confirm the upstream `apps/web/app/webview/index.html` still has browser shell metadata or startup splash surfaces that identify as Codex.
3. Confirm O3 Code icon source remains available through repo-owned desktop branding assets or the existing bridge injection constants.

## Application

1. Rewrite or inject `<title>O3 Code</title>` in served browser HTML.
2. Rewrite or inject browser install metadata for `application-name` and `apple-mobile-web-app-title`.
3. Rewrite or inject favicon and Apple touch icon links using the O3 Code icon.
4. Add Bridge-injected CSS that replaces the pre-React startup loader's Codex mark with the O3 Code mark.
5. Preserve all in-app renderer strings and behavior.

## Validation

- Run `node --check packages/bridge/src/html-injection.mjs`.
- Run `pnpm --filter @o3dotdev/code-bridge test`.
- Run `pnpm web-patches:check`.
- Run `pnpm format:check`.
- Validate Web Access in a browser: the tab title reads O3 Code, favicon uses the O3 Code mark, and the loading splash does not show the Codex mark.

## Failure Conditions

- Stop if upstream removes the startup loader or changes it so Bridge-injected CSS cannot target it safely.
- Stop if browser branding requires changing Electron desktop identity or broad React-rendered product copy.
