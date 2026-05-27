const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./register-app-actions-CwsLhsY3.js",
      "./chunk-Bj-mKKzh.js",
      "./setting-storage-kJblH-wH.js",
      "./src-BLHmAhbF.js",
      "./jsx-runtime-CiQ1k8xo.js",
      "./tslib.es6-PiNIxp0T.js",
      "./app-server-manager-signals-7MlBpIlX.js",
      "./preload-helper-I1wKxk_B.js",
      "./statsig-BwN76nAo.js",
      "./lib-lxn9i81G.js",
      "./marked.esm-B1dI5d9h.js",
      "./v4-Bk0goSq-.js",
      "./score-query-match-BVCuhDNS.js",
      "./product-logger-CekQ0CO0.js",
      "./parsePatchFiles-CgUV3U9g.js",
      "./chrome-theme-C3NmvE0H.js",
      "./error-boundary-DjHOvo0v.js",
      "./chunk-LFPYN7LY-CkfOxD5s.js",
      "./button-BynxeNRW.js",
      "./clsx-DDuZWq6Y.js",
      "./spinner-avFWYgza.js",
      "./reduced-motion-preference-DnjdGHz7.js",
      "./with-window-BCZl6ce7.js",
      "./use-platform-DMNwb8i8.js",
      "./use-os-info-Cetdxuhy.js",
      "./download-Cf0FyA1Y.js",
      "./info-B8KL--OU.js",
      "./thread-page-bottom-panel-state-DZYvoqqn.js",
      "./app-shell-state-SfLRxSEg.js",
      "./single-value-BlnX0NEI.js",
      "./route-scope-VKCI3pUD.js",
      "./app-shell-tab-controller-BpCuB_Nz.js",
      "./focus-composer-C5T4PQQ-.js",
      "./terminal-CNbIwMET.js",
      "./app-intl-signal-D9zjNves.js",
      "./local-conversation-title-signals-Djs4uIji.js",
      "./check-git-index-for-changes-Cr4dfcAI.js",
      "./thread-context-qjluNZCo.js",
      "./use-webview-execution-target-CQ1S7BlH.js",
      "./device-connections-DCJ4ZSVH.js",
      "./remote-projects-T90XwaVV.js",
      "./use-global-state-DUocq5mo.js",
      "./thread-context-inputs-D4zJFWk0.js",
      "./font-settings-D-vhQ1CB.js",
      "./terminal-service-Bp-7B5CU.js",
      "./use-resolved-theme-variant-BUW9gTru.js",
      "./thread-panel-state-DHCQ3R55.js",
      "./thread-page-bottom-panel-state-kHJ-D0s7.css",
      "./sumBy-DwNjP9En.js",
      "./window-app-action-helpers-B7Tx2lfM.js",
      "./browser-sidebar-manager-DjV9_67c.js",
      "./review-navigation-model-WMoHh_PB.js",
      "./parse-diff-Dz2d_bqB.js",
      "./diff-view-mode-CX3llj32.js",
      "./git-current-branch-query-S_9xbqZm.js",
      "./hash-code-B86OmoeT.js",
      "./plugin-config-edits-BRpk4PuG.js",
      "./sidebar-thread-keys-OliDnuRp.js",
      "./get-build-flavor-DDOtCsji.js",
    ]),
) => i.map((i) => d[i]);
import { di as e, gi as t } from "./src-BLHmAhbF.js";
import { t as n } from "./preload-helper-I1wKxk_B.js";
import { y as r } from "./setting-storage-kJblH-wH.js";
import { t as i } from "./window-app-action-helpers-B7Tx2lfM.js";
import { r as a } from "./open-project-setup-dialog-CAfG73Jf.js";
var o = e({ type: t() }).passthrough();
async function s(e, t = {}) {
  let r = c(e),
    { appActionRegistry: i } = await n(
      async () => {
        let { appActionRegistry: e } = await import(
          `./register-app-actions-CwsLhsY3.js`
        );
        return { appActionRegistry: e };
      },
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58,
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
      `toggleTerminal`,
      () => {
        s({ type: `windows.terminal.toggle`, windowId: i });
      },
    ],
    [
      `openBrowserTab`,
      () => {
        r.dispatchHostMessage({
          type: `toggle-browser-panel`,
          open: !0,
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
//# sourceMappingURL=run-command-Ddybecyf.js.map
