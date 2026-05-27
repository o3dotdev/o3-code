import { s as e } from "./chunk.js";
import { ir as t } from "./src-BLHmAhbF.js";
import { is as n } from "./app-server-manager-signals.js";
import { n as r, t as i } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./core.esm.js";
import "./marked.esm.js";
import { xt as a } from "./setting-storage.js";
import { f as o } from "./chunk-LFPYN7LY.js";
import "./product-logger.js";
import "./statsig.js";
import "./app-server-manager-hooks.js";
import { t as s } from "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip.js";
import "./route-scope.js";
import "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./proxy.js";
import "./app-shell-state.js";
import "./app-shell-panel-animation.js";
import { t as c } from "./app-shell.js";
import "./apps.js";
import "./chats.js";
import "./x.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled.js";
import "./use-plugins.js";
import "./apps-queries.js";
import "./startCase.js";
import "./uniq.js";
import "./browser-sidebar-manager.js";
import "./app-shell-tab-controller.js";
import "./info.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./plugin-config-edits.js";
import "./use-plugin-install-flow.js";
import "./dialog-layout.js";
import "./run-command.js";
import "./use-stable-callback.js";
import "./electron-menu-shortcuts.js";
import "./use-skills.js";
import "./modal-controller-state-.js";
import "./open-project-setup-dialog.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm.js";
import "./use-resize-observer.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./expand.js";
import "./keyboard-modifier-state.js";
import "./thread-side-panel-browser-tab-state.js";
import "./command-keybindings.js";
import "./arrow-left.js";
import "./use-window-controls-safe-area.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./check-circle.js";
import "./phone.js";
import "./badge.js";
import "./globe.js";
import "./remote-host-globe-icon.js";
import "./cloud.js";
import "./macbook.js";
import "./worktree.js";
import "./thread-env-icon.js";
import "./chrome.js";
import "./openai-blossom.js";
import "./filesystem-media-src.js";
import "./plugin-detail-page-utils.js";
import "./plugin-detail-queries.js";
import "./check-plugin-availability.js";
import "./toggle.js";
import "./computer-use-app-approvals-query.js";
import "./bundled-plugin-auto-install-preference.js";
import "./app-connect-oauth.js";
import "./codex-api-error.js";
import "./hooks-settings-queries.js";
import "./thread-page-header.js";
import "./sun.js";
import "./local-remote-control-enabled-sync.js";
import "./plugins-availability.js";
import { n as l, o as u } from "./codex-mobile-setup-dialog.js";
import "./chatgpt-token-auth.browser.js";
import { t as d } from "./codex-mobile-setup-flow.js";
import "./use-home-directory.js";
import "./cursor.js";
import "./segmented-toggle.js";
var f = a(),
  p = e(r(), 1),
  m = i();
function h() {
  let e = (0, f.c)(2),
    { data: n, isLoading: r } = s(t.CODEX_MOBILE_SETUP_COMPLETED);
  if (r) return null;
  let i;
  return (
    e[0] === n
      ? (i = e[1])
      : ((i = (0, m.jsx)(g, { hasCompletedCodexMobileSetup: n })),
        (e[0] = n),
        (e[1] = i)),
    i
  );
}
function g(e) {
  let t = (0, f.c)(6),
    { hasCompletedCodexMobileSetup: r } = e,
    i = o(),
    [a] = n(u),
    [s] = (0, p.useState)(!r);
  if (s || a !== `auto`) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, m.jsx)(c.MainContentLayout, { layout: `full-bleed` })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    return (
      t[1] === i
        ? (n = t[2])
        : ((n = (0, m.jsxs)(m.Fragment, {
            children: [
              e,
              (0, m.jsx)(d, {
                onClose: () => {
                  i(`/`);
                },
                variant: `page`,
              }),
            ],
          })),
          (t[1] = i),
          (t[2] = n)),
      n
    );
  }
  let h;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, m.jsx)(c.MainContentLayout, { layout: `full-bleed` })),
      (t[3] = h))
    : (h = t[3]);
  let g;
  return (
    t[4] === i
      ? (g = t[5])
      : ((g = (0, m.jsxs)(m.Fragment, {
          children: [
            h,
            (0, m.jsx)(l, {
              onManageConnections: () => {
                i(`/settings/connections`);
              },
            }),
          ],
        })),
        (t[4] = i),
        (t[5] = g)),
    g
  );
}
export { h as CodexMobilePage };
//# sourceMappingURL=codex-mobile-page.js.map
