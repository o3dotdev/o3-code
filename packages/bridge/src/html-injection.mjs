export const STRICT_VIEWPORT_CONTENT =
  "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover";
const STRICT_VIEWPORT_META = `<meta name="viewport" content="${STRICT_VIEWPORT_CONTENT}" />`;
const VIEWPORT_META_RE = /<meta\b(?=[^>]*\bname=["']viewport["'])[^>]*>/i;

const BRIDGE_SHELL_STYLE = `
/* Bridge Mode runs Electron renderer chrome in an ordinary browser surface. */
:root {
  --o3-code-viewport-height: 100vh;
  --o3-code-measured-viewport-top-offset: 0px;
  --o3-code-viewport-bottom-offset: 0px;
  --o3-code-viewport-bottom-inset: calc(
    env(safe-area-inset-bottom, 0px) + var(--o3-code-viewport-bottom-offset, 0px)
  );
  --o3-code-shell-height: var(--o3-code-viewport-height, 100vh);
}

@supports (height: 100dvh) {
  :root {
    --o3-code-viewport-height: 100dvh;
  }
}

html,
body,
#root {
  width: 100%;
  height: 100vh;
  height: var(--o3-code-viewport-height, 100vh) !important;
  min-height: 100vh;
  min-height: var(--o3-code-viewport-height, 100vh) !important;
  margin: 0;
  overflow: hidden !important;
  overscroll-behavior: none !important;
}

body {
  position: fixed;
  inset: 0;
  touch-action: manipulation;
}

#root {
  box-sizing: border-box;
}

#root > * {
  height: var(--o3-code-shell-height, 100vh) !important;
  max-height: var(--o3-code-shell-height, 100vh) !important;
}

@media (hover: none) and (pointer: coarse) {
  #root > * {
    --codex-window-zoom: 1 !important;
    width: 100vw !important;
    max-width: 100vw !important;
    zoom: 1 !important;
  }
}

@media (max-width: 700px), (hover: none) and (pointer: coarse) {
  .o3-code-request-input-option-description {
    display: block !important;
  }

  .o3-code-request-input-option-info,
  .o3-code-request-input-option-shortcuts {
    display: none !important;
  }

  .o3-code-request-input-option-label {
    overflow: visible !important;
    text-overflow: clip !important;
    white-space: normal !important;
  }
}

html body[data-scroll-locked] {
  --removed-body-scroll-bar-size: 0px !important;
  position: fixed !important;
  inset: 0 !important;
  width: 100% !important;
  height: var(--o3-code-viewport-height, 100vh) !important;
  min-height: var(--o3-code-viewport-height, 100vh) !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  overscroll-behavior: none !important;
}

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
  const withStrictViewport = withRelaxedCsp.match(VIEWPORT_META_RE)
    ? withRelaxedCsp.replace(VIEWPORT_META_RE, STRICT_VIEWPORT_META)
    : withRelaxedCsp.replace(/<head>/i, `<head>\n    ${STRICT_VIEWPORT_META}`);
  const shimUrl = debug ? "/bridge-shim.js?debug=1" : "/bridge-shim.js";

  return withStrictViewport.replace(
    /<head>/i,
    `<head>\n    <script src="${shimUrl}"></script>\n    <style id="o3-code-bridge-shell-style">${BRIDGE_SHELL_STYLE}</style>`,
  );
}
