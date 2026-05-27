import { s as e } from "./chunk.js";
import { or as t } from "./src-BLHmAhbF.js";
import "./app-server-manager-signals.js";
import { n, t as r } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./marked.esm.js";
import { b as i, xt as a } from "./setting-storage.js";
import { r as o } from "./chunk-LFPYN7LY.js";
import "./product-logger.js";
import "./statsig.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./_baseOrderBy.js";
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
import "./link-external.js";
import "./proxy.js";
import "./app-shell-state.js";
import "./onboarding-state.js";
import "./apps.js";
import "./chats.js";
import "./x.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled.js";
import { t as s } from "./get-build-flavor.js";
import "./use-plugins.js";
import "./apps-queries.js";
import "./startCase.js";
import "./uniq.js";
import "./info.js";
import "./download.js";
import { t as c } from "./with-window.js";
import "./use-resolved-theme-variant.js";
import "./window-app-action-helpers.js";
import "./plugin-config-edits.js";
import "./use-plugin-install-flow.js";
import "./dialog-layout.js";
import "./run-command.js";
import "./initial-route-atom.js";
import "./use-stable-callback.js";
import "./use-navigate-to-local-conversation.js";
import "./electron-menu-shortcuts.js";
import "./use-skills.js";
import "./modal-controller-state-.js";
import "./open-project-setup-dialog.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./arrow-left.js";
import "./_defineProperty.js";
import "./check-circle.js";
import "./phone.js";
import "./badge.js";
import "./search.js";
import "./types.js";
import "./mcp-capability-signals.js";
import "./remote-connections-onboarding-signals-C.js";
import "./dropdown.js";
import "./chevron.js";
import "./chrome.js";
import "./openai-blossom.js";
import "./filesystem-media-src.js";
import "./code-snippet.js";
import "./tailwind-styled-components.esm.js";
import "./copy.js";
import "./copy-button.js";
import "./minus-D.js";
import "./plus.js";
import "./image-preview-dialog.js";
import "./plugin-detail-page-utils.js";
import "./plugin-detail-queries.js";
import "./check-plugin-availability.js";
import "./sortBy.js";
import "./toggle.js";
import "./computer-use-app-approvals-query.js";
import "./bundled-plugin-auto-install-preference.js";
import "./app-connect-oauth.js";
import "./codex-api-error.js";
import "./hooks-settings-queries.js";
import "./file-tree-search-input.js";
import "./use-is-thread-realtime-enabled.js";
import "./arrow-up-right-lg.js";
import "./browser-sidebar-comment-mode-coachmark-state.js";
import "./use-workspace-file-search.js";
import "./codex-analytics-attribution.js";
import "./use-target-apps.js";
import "./workspace-directory-tree.js";
import "./workspace-onboarding-experiment.js";
import "./app-server-notification-debug-signals.js";
import "./primary-runtime-install-state.js";
import "./sun.js";
import "./plugins-availability.js";
import "./codex-mobile-setup-dialog.js";
import "./use-home-directory.js";
import "./cursor.js";
import "./segmented-toggle.js";
import { n as l } from "./debug-modal-B8xDbX-9.js";
import "./use-debug-panel.js";
var u = a(),
  d = e(n(), 1),
  f = r();
function p() {
  let e = (0, u.c)(4),
    [n, r] = (0, d.useState)(null),
    a;
  if (
    (e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (e) => {
          let { conversationId: t } = e;
          r(t);
        }),
        (e[0] = a))
      : (a = e[0]),
    i(`debug-window-origin-conversation-changed`, a),
    !t.allowDebugMenu(s()))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, f.jsx)(o, { to: `/`, replace: !0 })), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let p;
  return (
    e[2] === n
      ? (p = e[3])
      : ((p = (0, f.jsx)(c, {
          electron: !0,
          children: (0, f.jsx)(`main`, {
            className: `h-dvh w-full overflow-hidden bg-token-main-surface-primary text-token-foreground`,
            children: (0, f.jsx)(l, {
              conversationIdOverride: n,
              onClose: m,
              showHeader: !1,
              showPopOutButton: !1,
            }),
          }),
        })),
        (e[2] = n),
        (e[3] = p)),
    p
  );
}
function m() {
  return window.close();
}
export { p as DebugWindowPage };
//# sourceMappingURL=debug-window-page.js.map
