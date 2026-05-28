export const STRICT_VIEWPORT_CONTENT =
  "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover";
const O3_CODE_APP_NAME = "O3 Code";
const STRICT_VIEWPORT_META = `<meta name="viewport" content="${STRICT_VIEWPORT_CONTENT}" />`;
const VIEWPORT_META_RE = /<meta\b(?=[^>]*\bname=["']viewport["'])[^>]*>/i;
const TITLE_RE = /<title\b[^>]*>[\s\S]*?<\/title>/i;
const HEAD_RE = /<head>/i;
const STARTUP_LOADER_LOGO_RE =
  /(<div\b(?=[^>]*\bclass=["']startup-loader__logo["'])[^>]*>)[\s\S]*?<div\b(?=[^>]*\bclass=["']startup-loader__overlay["'])[^>]*><\/div>\s*<\/div>/i;
const BRIDGE_BRANDING_EXISTING_TAG_RE =
  /\s*<(?:meta\b(?=[^>]*\bname=["'](?:application-name|apple-mobile-web-app-title)["'])[^>]*|link\b(?=[^>]*\brel=["'][^"']*(?:icon|apple-touch-icon)[^"']*["'])[^>]*)>/gi;
const O3_CODE_ICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <rect x="64" y="64" width="896" height="896" rx="208" fill="#050505"/>
  <svg x="84" y="300" width="856" height="424" viewBox="176 350 672 332" color="#ffffff">
    <path fill="currentColor" stroke="currentColor" stroke-width="18" stroke-linejoin="round" d="M407.000488,640.381348 C385.172546,640.315918 363.820984,640.860291 342.522583,640.034424 C314.054535,638.930298 286.634064,633.116333 262.455658,616.920593 C230.132126,595.268738 213.282043,564.518677 209.637650,526.085571 C207.368576,502.156281 211.018738,479.259888 221.540787,457.644562 C235.494492,428.979584 258.129578,409.830505 287.668915,398.515594 C307.201752,391.033661 327.617981,388.147034 348.359314,387.798889 C371.347534,387.413025 394.352966,387.392242 417.340393,387.802399 C442.164917,388.245361 466.500580,391.803619 489.111816,402.882721 C527.205261,421.547791 550.042053,451.915375 556.099060,493.862793 C561.090820,528.432983 554.769653,560.991943 533.515991,589.533813 C512.990417,617.097961 484.392090,631.225708 451.259216,637.138428 C436.811554,639.716614 422.180511,640.560913 407.000488,640.381348 M231.975769,579.545715 C242.408585,595.901672 256.196136,608.625427 273.212341,617.939575 C297.111359,631.021118 323.168335,634.928833 349.840607,635.558167 C371.486053,636.068909 393.159790,635.996460 414.808502,635.561768 C432.285400,635.210938 449.708435,633.727905 466.636017,628.755371 C496.416718,620.007019 520.475037,603.560974 536.463806,576.495605 C549.119446,555.072571 553.767212,531.659851 552.671082,506.989197 C551.712219,485.410278 545.887573,465.192505 533.821960,447.248810 C513.325317,416.766479 483.673462,400.751556 447.975891,395.339294 C414.703979,390.294830 381.154388,392.428680 347.710846,392.567444 C335.759827,392.617035 323.795166,393.919983 312.016541,396.401855 C284.183228,402.266571 259.933624,414.427429 241.033127,436.224518 C207.583130,474.800934 205.677628,537.711426 231.975769,579.545715 z"/>
    <path fill="currentColor" stroke="currentColor" stroke-width="18" stroke-linejoin="round" d="M771.080688,399.783234 C791.864319,410.431702 803.948486,426.805756 805.044373,450.011749 C806.286011,476.302734 791.902100,497.114716 767.112122,506.316284 C760.576294,508.742249 753.958435,510.916718 746.944946,512.050781 C754.155640,513.714539 761.407776,514.952698 768.427979,517.138245 C788.382629,523.350403 804.425781,534.049194 810.248291,555.465759 C817.562500,582.368958 805.770935,608.865295 780.595886,623.303284 C769.331055,629.763611 757.184753,633.822571 744.461548,635.910095 C715.772461,640.617188 687.078125,640.649170 658.625916,634.207092 C640.577820,630.120667 624.385742,622.254333 611.553223,608.464417 C600.497803,596.584290 594.478821,582.415955 592.651489,566.386719 C592.473022,564.821228 591.812256,562.786865 594.365356,562.488159 C596.586914,562.228210 597.048706,563.824768 597.305359,565.652893 C602.704407,604.101929 627.774170,622.960815 663.262146,630.237793 C692.428467,636.218506 721.895752,635.919312 751.062134,629.543701 C766.037476,626.270081 779.718201,620.102112 791.204346,609.403748 C814.867188,587.364014 816.586670,538.421692 771.899841,523.175232 C757.230347,518.170288 742.131165,515.878357 726.793945,515.444458 C709.145325,514.945190 691.473633,515.265259 673.811951,515.215393 C672.148376,515.210693 670.480408,515.162231 668.822998,515.028687 C667.529480,514.924377 666.622925,514.243103 666.572388,512.830200 C666.522217,511.426666 667.347473,510.633240 668.643616,510.469940 C670.455627,510.241699 672.287170,510.060547 674.111145,510.052490 C690.273254,509.980896 706.443237,510.250336 722.595764,509.832581 C741.400330,509.346252 759.652771,506.366669 776.263916,496.522949 C807.409607,478.066132 808.045166,432.202423 780.128113,411.028809 C767.870789,401.732330 753.846741,396.812805 738.753723,394.774048 C709.070984,390.764557 679.540771,390.690216 650.916687,400.796356 C622.831726,410.712189 606.202576,430.492126 602.202454,460.365021 C601.924133,462.443024 601.952087,465.335693 598.820374,464.765472 C595.968750,464.246216 597.098022,461.687500 597.377625,459.799927 C602.626892,424.365814 623.798523,401.647003 660.997375,392.851105 C692.947815,385.296234 725.014282,385.465881 756.865112,394.013885 C761.705566,395.312927 766.247864,397.429016 771.080688,399.783234 z"/>
  </svg>
</svg>`;
const O3_CODE_LOADER_SVG = O3_CODE_ICON_SVG.replace(
  "<svg ",
  '<svg class="startup-loader__base o3-code-startup-loader__glyph" aria-hidden="true" ',
);
const O3_CODE_ICON_DATA_URL = `data:image/svg+xml,${encodeURIComponent(
  O3_CODE_ICON_SVG,
)}`;
const BRIDGE_BRANDING_METADATA = `
    <meta name="application-name" content="${O3_CODE_APP_NAME}" />
    <meta name="apple-mobile-web-app-title" content="${O3_CODE_APP_NAME}" />
    <link rel="icon" type="image/svg+xml" href="${O3_CODE_ICON_DATA_URL}" />
    <link rel="apple-touch-icon" href="${O3_CODE_ICON_DATA_URL}" />`;

const BRIDGE_SHELL_STYLE = `
/* Bridge Mode runs Electron renderer chrome in an ordinary browser surface. */
/* Browser shell branding. */
.startup-loader {
  flex-direction: column;
  gap: 0.75rem;
}

.startup-loader__logo {
  display: flex;
  align-items: center;
  justify-content: center;
}

.o3-code-startup-loader__glyph {
  position: static !important;
  inset: auto !important;
  display: block;
  width: 100%;
  height: 100%;
}

.o3-code-startup-status {
  min-height: 1.25rem;
  color: var(--color-token-text-secondary, rgb(117 117 117));
  font:
    500 0.8125rem/1.25 system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  opacity: 0;
  text-align: center;
  transition: opacity 180ms ease-out;
}

.o3-code-startup-status[data-visible="true"] {
  opacity: 0.82;
}

/* Mobile shell viewport and scroll recovery. */
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

  /* Mobile sidebar project actions. */
  .o3-code-sidebar-project-menu-action,
  .o3-code-sidebar-project-new-chat-action {
    opacity: 1 !important;
  }

  .o3-code-sidebar-project-status-overlay {
    display: none !important;
  }
}

/* Mobile request-input option descriptions. */
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
  const withBridgeBranding = injectBridgeBranding(withStrictViewport);
  const withStartupBranding = injectStartupLoaderBranding(withBridgeBranding);
  const shimUrl = debug ? "/bridge-shim.js?debug=1" : "/bridge-shim.js";

  return withStartupBranding.replace(
    /<head>/i,
    `<head>\n    <script src="${shimUrl}"></script>\n    <style id="o3-code-bridge-shell-style">${BRIDGE_SHELL_STYLE}</style>`,
  );
}

function injectBridgeBranding(html) {
  const withoutConflictingBranding = html.replace(
    BRIDGE_BRANDING_EXISTING_TAG_RE,
    "",
  );
  const withTitle = withoutConflictingBranding.match(TITLE_RE)
    ? withoutConflictingBranding.replace(
        TITLE_RE,
        `<title>${O3_CODE_APP_NAME}</title>`,
      )
    : withoutConflictingBranding.replace(
        HEAD_RE,
        `<head>\n    <title>${O3_CODE_APP_NAME}</title>`,
      );

  return withTitle.replace(HEAD_RE, `<head>${BRIDGE_BRANDING_METADATA}`);
}

function injectStartupLoaderBranding(html) {
  return html.replace(
    STARTUP_LOADER_LOGO_RE,
    `$1\n          ${O3_CODE_LOADER_SVG}\n        </div>`,
  );
}
