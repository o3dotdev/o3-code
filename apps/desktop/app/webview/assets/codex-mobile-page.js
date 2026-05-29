import { s as e } from "./chunk-Bj-mKKzh.js";
import { kr as t } from "./src-C.js";
import { $s as n } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as r, t as i } from "./jsx-runtime.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./core.esm.js";
import "./marked.esm-BR-H6018.js";
import { wt as a } from "./setting-storage.js";
import { m as o } from "./chunk-LFPYN7LY.js";
import "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./app-server-manager-hooks.js";
import { t as s } from "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./codex-api-bK--r_2t.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import "./use-debounced-value-BtOJx-Vp.js";
import "./apps-queries-CmwRqoKz.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./use-is-dark-BHkhnHe-.js";
import "./connector-logo.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip-CDzchJxN.js";
import "./route-scope.js";
import "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./remote-projects.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as c } from "./app-shell-D4HBgUPf.js";
import "./apps-DwfMzB5Q.js";
import "./chats-DoviPPWc.js";
import "./x-C_RDKBp5.js";
import "./projectless-thread.js";
import "./plugin-install-store-Daxzgjai.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins-jIZrcuZQ.js";
import "./browser-sidebar-manager.js";
import "./app-shell-tab-controller-BTWycTBb.js";
import "./info-B8GAwpK6.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./use-plugin-install-flow.js";
import "./dialog-layout.js";
import "./plugins-availability-txQMPSuC.js";
import "./plugin-config-edits-DUMiyKty.js";
import "./local-projects.js";
import "./run-command.js";
import "./modal-controller-state.js";
import "./open-project-setup-dialog-cJXYMFtk.js";
import "./folder.js";
import "./use-stable-callback.js";
import "./electron-menu-shortcuts.js";
import "./use-register-command.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm-BRPfvPzy.js";
import "./use-resize-observer-DCpyQHos.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./command-keybindings-C3NM9T-L.js";
import "./expand.js";
import "./keyboard-modifier-state-BKqcycjV.js";
import "./arrow-left.js";
import "./use-window-controls-safe-area.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./codex-api-error-CsUcWied.js";
import "./links.js";
import "./check-circle-hJ_ggIqT.js";
import "./phone-B4TY4-zj.js";
import "./badge.js";
import "./globe-CnvlclXd.js";
import "./remote-host-globe-icon-DwUovbza.js";
import "./cloud-BOSNAJnX.js";
import "./macbook.js";
import "./worktree-D_6WAQVb.js";
import "./thread-env-icon.js";
import "./chrome-ZI-wJE1V.js";
import "./openai-blossom-CXnPbecc.js";
import "./filesystem-media-src.js";
import "./use-skills.js";
import "./check-plugin-availability.js";
import "./plugin-detail-queries.js";
import "./toggle.js";
import "./app-connect-oauth-Cy-gX8IV.js";
import "./computer-use-app-approvals-query.js";
import "./hooks-settings-queries-BUP-44jb.js";
import "./thread-page-header.js";
import "./sun.js";
import "./local-remote-control-enabled-sync.js";
import { n as l, o as u } from "./codex-mobile-setup-dialog-es3uf3kp.js";
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
