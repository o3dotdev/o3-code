const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./register-app-actions.js",
      "./setting-storage.js",
      "./chunk-Bj-mKKzh.js",
      "./src-C.js",
      "./jsx-runtime.js",
      "./tslib.es6.js",
      "./app-server-manager-signals-DkRDRgNB.js",
      "./preload-helper.js",
      "./statsig--EYRNU53.js",
      "./rpc-DqwD0euc.js",
      "./lib-DHgYfVJN.js",
      "./marked.esm-BR-H6018.js",
      "./v4.js",
      "./product-logger-DusapRyT.js",
      "./request-DWZTrEAr.js",
      "./diff-view-mode.js",
      "./route-scope.js",
      "./chunk-LFPYN7LY.js",
      "./error-boundary.js",
      "./button.js",
      "./clsx-BcPLHiun.js",
      "./spinner.js",
      "./reduced-motion-preference-DE4zP-oH.js",
      "./with-window.js",
      "./use-platform.js",
      "./use-os-info-CpFtQpVC.js",
      "./os-info-CLWbGRUe.js",
      "./download.js",
      "./info-B8GAwpK6.js",
      "./thread-page-bottom-panel-state.js",
      "./xterm-display-helpers.js",
      "./xterm-display-helpers-kHJ-D0s7.css",
      "./app-shell-state.js",
      "./single-value.js",
      "./app-shell-tab-controller-BTWycTBb.js",
      "./focus-composer.js",
      "./sumBy-zUPwGmzt.js",
      "./terminal.js",
      "./app-intl-signal.js",
      "./local-conversation-title-signals-bVA-f9H8.js",
      "./check-git-index-for-changes-CjhXjmKx.js",
      "./thread-context-CaET2O8s.js",
      "./use-webview-execution-target.js",
      "./device-connections.js",
      "./remote-projects.js",
      "./use-global-state.js",
      "./thread-context-inputs-DBrOekVr.js",
      "./font-settings-thBBJzjN.js",
      "./use-resolved-theme-variant.js",
      "./thread-panel-state.js",
      "./window-app-action-helpers.js",
      "./browser-sidebar-manager.js",
      "./review-navigation-model-DMRVNxCn.js",
      "./git-current-branch-query.js",
      "./hash-code.js",
    ]),
) => i.map((i) => d[i]);
import { Hi as e, qi as t } from "./src-C.js";
import { t as n } from "./preload-helper.js";
import { y as r } from "./setting-storage.js";
import { t as i } from "./window-app-action-helpers.js";
import { i as a } from "./open-project-setup-dialog-cJXYMFtk.js";
var o = e({ type: t() }).passthrough();
async function s(e, t = {}) {
  let r = c(e),
    { appActionRegistry: i } = await n(
      async () => {
        let { appActionRegistry: e } = await import(
          `./register-app-actions.js`
        );
        return { appActionRegistry: e };
      },
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
      ]),
      import.meta.url,
    ),
    { type: a } = r,
    o = i.get(a);
  if (o == null) throw Error(`Unsupported app action: ${a}`);
  return o(r, t);
}
function c(e) {
  try {
    return o.parse(e);
  } catch (t) {
    throw Error(
      `Invalid app action envelope: ${JSON.stringify(e, null, 2)}\n${t instanceof Error ? t.message : String(t)}`,
    );
  }
}
var l = new Map([
    [
      `newThread`,
      () => {
        s({ type: `windows.show_home`, windowId: i });
      },
    ],
    [
      `quickChat`,
      () => {
        r.dispatchHostMessage({ type: `new-quick-chat` });
      },
    ],
    [
      `archiveThread`,
      () => {
        r.dispatchHostMessage({ type: `archive-thread` });
      },
    ],
    [
      `toggleThreadPin`,
      () => {
        r.dispatchHostMessage({ type: `toggle-thread-pin` });
      },
    ],
    [
      `openAvatarOverlay`,
      () => {
        r.dispatchMessage(`avatar-overlay-open`, {});
      },
    ],
    [
      `settings`,
      () => {
        r.dispatchHostMessage({ type: `navigate-to-route`, path: `/settings` });
      },
    ],
    [
      `mcpSettings`,
      () => {
        r.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/settings/mcp-settings`,
        });
      },
    ],
    [
      `personalitySettings`,
      () => {
        r.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/settings/personalization`,
        });
      },
    ],
    [
      `keyboardShortcuts`,
      () => {
        r.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/settings/keyboard-shortcuts`,
        });
      },
    ],
    [
      `manageTasks`,
      () => {
        r.dispatchHostMessage({
          type: `navigate-to-route`,
          path: `/automations`,
          state: { automationMode: `create` },
        });
      },
    ],
    [
      `openSkills`,
      () => {
        r.dispatchHostMessage({ type: `navigate-to-route`, path: `/skills` });
      },
    ],
    [
      `openFolder`,
      () => {
        a();
      },
    ],
    [
      `toggleSidebar`,
      () => {
        s({ type: `windows.sidebar.toggle`, windowId: i });
      },
    ],
    [
      `toggleBottomPanel`,
      () => {
        r.dispatchHostMessage({ type: `toggle-bottom-panel` });
      },
    ],
    [
      `toggleTerminal`,
      () => {
        s({ type: `windows.terminal.toggle`, windowId: i });
      },
    ],
    [
      `openBrowserTab`,
      () => {
        r.dispatchHostMessage({
          type: `open-browser-tab`,
          source: `manual`,
          initiator: `toggle_browser_command`,
        });
      },
    ],
    [
      `toggleBrowserPanel`,
      () => {
        r.dispatchHostMessage({
          type: `toggle-browser-panel`,
          source: `manual`,
          initiator: `toggle_browser_command`,
        });
      },
    ],
    [
      `toggleSidePanel`,
      () => {
        s({ type: `windows.review.toggle`, windowId: i });
      },
    ],
    [
      `toggleFileTreePanel`,
      () => {
        r.dispatchHostMessage({ type: `toggle-file-tree-panel` });
      },
    ],
    [
      `findInThread`,
      () => {
        r.dispatchHostMessage({ type: `find-in-thread` });
      },
    ],
    [
      `navigateBack`,
      () => {
        r.dispatchHostMessage({ type: `navigate-back` });
      },
    ],
    [
      `navigateForward`,
      () => {
        r.dispatchHostMessage({ type: `navigate-forward` });
      },
    ],
    [
      `logOut`,
      () => {
        r.dispatchHostMessage({ type: `log-out` });
      },
    ],
  ]),
  u = new Map();
function d(e, t) {
  let n = u.get(e) ?? [];
  return (
    n.push(t),
    u.set(e, n),
    () => {
      let n = u.get(e);
      if (!n) return;
      let r = n.lastIndexOf(t);
      r !== -1 && (n.splice(r, 1), n.length === 0 && u.delete(e));
    }
  );
}
function f(e) {
  h(e);
}
function p(e, t) {
  return h(e, t);
}
function m(e) {
  return g(e) != null;
}
function h(e, t) {
  let n = u.get(e)?.at(-1);
  if (n != null) return n(t) !== !1;
  let r = g(e);
  return r == null ? !1 : (r(), !0);
}
function g(e) {
  for (let [t, n] of l) if (t === e) return n;
}
export { s as a, p as i, d as n, f as r, m as t };
//# sourceMappingURL=run-command.js.map
