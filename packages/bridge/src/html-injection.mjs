const BRIDGE_SHELL_STYLE = `
/* Bridge Mode runs Electron renderer chrome in an ordinary browser surface. */
:root[data-codex-window-type="electron"]:not([data-codex-os="win32"]),
:root[data-codex-window-type="electron"]:not([data-codex-os="win32"]) body {
  background-color: var(--color-background-surface-under, #0d0d0d) !important;
}

:root[data-codex-window-type="electron"]:not([data-codex-os="win32"])
  .app-shell-left-panel {
  background: var(--color-token-editor-background, #212121) !important;
}

@supports (color: color-mix(in srgb, black, white)) {
  :root[data-codex-window-type="electron"]:not([data-codex-os="win32"])
    .app-shell-left-panel {
    background: color-mix(
      in srgb,
      var(--color-token-editor-background, #212121) 94%,
      var(--color-token-foreground, #ffffff) 6%
    ) !important;
  }
}

:root[data-codex-window-type="electron"]:not([data-codex-os="win32"])
  .app-shell-left-panel::after {
  background: inherit !important;
}

/* Browser-hosted windows do not need space reserved for macOS traffic lights. */
:root[data-codex-window-type="electron"] #root > * {
  --spacing-token-safe-header-left: 0px !important;
  --spacing-token-safe-header-right: 0px !important;
}

:root[data-codex-window-type="electron"]
  header[data-app-shell-header-edge-scroll]
  > [aria-hidden="true"].invisible:first-child,
:root[data-codex-window-type="electron"]
  header[data-app-shell-header-edge-scroll]
  > [aria-hidden="true"].invisible:first-child
  + [data-test-id="header-shell-slot"] {
  padding-inline-start: 0.625rem !important;
}

/* Native drag regions swallow pointer events in browser-hosted app windows. */
.startup-loader,
.draggable {
  -webkit-app-region: no-drag !important;
}
`;

export function injectBridgeShell(html, { debug = false } = {}) {
  const withRelaxedCsp = html.replace(
    "https://cdn.openai.com;",
    "https://cdn.openai.com ws: wss:;",
  );
  const shimUrl = debug ? "/bridge-shim.js?debug=1" : "/bridge-shim.js";

  return withRelaxedCsp.replace(
    /<head>/i,
    `<head>\n    <script src="${shimUrl}"></script>\n    <style id="o3-code-bridge-shell-style">${BRIDGE_SHELL_STYLE}</style>`,
  );
}
