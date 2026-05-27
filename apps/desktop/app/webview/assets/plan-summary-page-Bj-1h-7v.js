import "./src-BLHmAhbF.js";
import "./app-server-manager-signals-7MlBpIlX.js";
import { t as e } from "./jsx-runtime-CiQ1k8xo.js";
import "./react-dom-De86Q4ix.js";
import "./Combination-CmOISuqp.js";
import "./katex-BzX-JuVf.js";
import "./marked.esm-B1dI5d9h.js";
import { xt as t } from "./setting-storage-kJblH-wH.js";
import { u as n } from "./chunk-LFPYN7LY-CkfOxD5s.js";
import "./known-app-icon-Bs-e4BaZ.js";
import "./branch-DGCKHu9Z.js";
import "./github-mark-BJLszk3j.js";
import "./google-drive-Btpy1LZU.js";
import "./notion-C3io6wcI.js";
import "./product-logger-CekQ0CO0.js";
import "./statsig-BwN76nAo.js";
import "./app-server-manager-hooks-BUQb1vpx.js";
import "./use-global-state-DUocq5mo.js";
import "./invalidate-queries-and-broadcast-CPrIeBVQ.js";
import "./thread-context-inputs-D4zJFWk0.js";
import "./config-queries-2cSUtzNR.js";
import "./remote-connection-visibility-BqsxCDqm.js";
import "./sidebar-signals-oDf-ZfE3.js";
import "./use-auth-BSv8Pelr.js";
import "./use-is-dark-YP6LF-lA.js";
import "./window-zoom-context-BgcP82Wr.js";
import "./tooltip-Bb9X8NK-.js";
import "./route-scope-VKCI3pUD.js";
import "./mention-item-qEZjEnZz.js";
import "./button-BynxeNRW.js";
import "./reduced-motion-preference-DnjdGHz7.js";
import "./spinner-avFWYgza.js";
import "./use-codex-home-B1p9XqNi.js";
import "./use-os-info-Cetdxuhy.js";
import "./open-workspace-file-C38053al.js";
import "./send-open-file-request-Bu7p9tqM.js";
import "./mime-types-BwyLizga.js";
import "./proxy-HwxlKevX.js";
import "./apps-RXjrknWx.js";
import "./x-DMqExXY8.js";
import "./use-platform-DMNwb8i8.js";
import "./experimental-features-queries-Css_qmsY.js";
import "./use-is-plugins-enabled-M47TXC7m.js";
import "./use-plugins-C8ZDLcLG.js";
import "./apps-queries-Bm5YDQ9P.js";
import "./startCase-DlqWBRV1.js";
import "./uniq-ckcXPYOW.js";
import "./terminal-CNbIwMET.js";
import "./info-B8KL--OU.js";
import "./error-boundary-DjHOvo0v.js";
import "./download-Cf0FyA1Y.js";
import "./with-window-BCZl6ce7.js";
import "./window-app-action-helpers-B7Tx2lfM.js";
import "./dialog-layout-DNf4TEex.js";
import "./run-command-Ddybecyf.js";
import "./use-stable-callback-Csm0_jZ8.js";
import "./use-skills-CbLuUp1e.js";
import "./modal-controller-state--RuEytMA.js";
import "./open-project-setup-dialog-CAfG73Jf.js";
import "./check-md-I6RRy8DL.js";
import "./chevron-right-DcOUsgCQ.js";
import "./context-menu-BCAQgMeT.js";
import "./arrow-left-NB8jxLlJ.js";
import "./thinking-shimmer-CLzKdQiD.js";
import "./badge-DJ3VoZ_p.js";
import "./bug-CW5XFoH5.js";
import "./chat-DM7GVpMz.js";
import "./skills-DDrC9ydQ.js";
import "./globe-D1xFoTfu.js";
import "./chevron-CEHg0DRl.js";
import "./folder-DnqvPFV1.js";
import "./markdown-75WV5XlN.js";
import "./external-markdown-link-FX2-4fyk.js";
import "./use-native-apps.electron-BW2g2D_P.js";
import "./get-file-icon-BhUOAJbT.js";
import "./code-CyPGA_lW.js";
import "./json-DAjHKBV7.js";
import "./image-square-DaLHX1Fp.js";
import "./notebook-CT245P4p.js";
import "./settings.cog-CViPO9-c.js";
import "./mcp-BsWU3xbP.js";
import "./chrome-joSxUo6t.js";
import "./codex-1JQAUibh.js";
import "./openai-blossom-BF9MooFr.js";
import "./pencil-BZadhLrp.js";
import "./filesystem-media-src-CmokDu12.js";
import "./inline-mentions-CbDcUfAO.js";
import "./code-snippet-DrPKGV4s.js";
import "./tailwind-styled-components.esm-Ck5todVw.js";
import "./copy-BLEBbe48.js";
import "./copy-button-BHvcmCXa.js";
import "./minus-D-AnULF0.js";
import "./plus-PQBYSO-0.js";
import "./image-preview-dialog-DSlWCEr3.js";
import "./markdown-surface-DJAkLMiu.js";
import "./arrow-top-right-DAJEunDk.js";
import "./feedback-form-dialog-BZv3Fod0.js";
import { t as r } from "./plan-summary-item-content-bh4yD4m8.js";
var i = t(),
  a = e();
function o() {
  let e = (0, i.c)(4),
    t = n().state;
  if (!t?.planContent || !t?.conversationId) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, a.jsx)(c, {})), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let r;
  return (
    e[1] !== t.conversationId || e[2] !== t.planContent
      ? ((r = (0, a.jsx)(s, {
          planContent: t.planContent,
          conversationId: t.conversationId,
        })),
        (e[1] = t.conversationId),
        (e[2] = t.planContent),
        (e[3] = r))
      : (r = e[3]),
    r
  );
}
function s(e) {
  let t = (0, i.c)(5),
    { planContent: n, conversationId: o } = e,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = {
        type: `assistant-message`,
        content: n,
        sentAtMs: null,
        completed: !0,
        phase: null,
        structuredOutput: void 0,
      }),
      (t[0] = n),
      (t[1] = s));
  let c;
  return (
    t[2] !== o || t[3] !== s
      ? ((c = (0, a.jsx)(`div`, {
          className: `overflow-y-auto p-[var(--padding-panel)]`,
          children: (0, a.jsx)(r, {
            item: s,
            conversationId: o,
            cwd: null,
            showOpenButton: !1,
          }),
        })),
        (t[2] = o),
        (t[3] = s),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
function c() {
  let e = (0, i.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, a.jsxs)(`div`, {
        className: `flex items-center gap-3 border-b border-token-border/60 px-4 py-3`,
        children: [
          (0, a.jsx)(`div`, {
            className: `size-8 rounded-lg bg-token-foreground/10`,
          }),
          (0, a.jsx)(`div`, {
            className: `h-4 w-24 rounded bg-token-foreground/20`,
          }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, a.jsx)(`div`, {
          className: `p-[var(--padding-panel)]`,
          children: (0, a.jsxs)(`div`, {
            className: `animate-pulse overflow-hidden rounded-2xl border border-token-border bg-token-editor-background/50`,
            children: [
              t,
              (0, a.jsxs)(`div`, {
                className: `space-y-3 px-4 py-4`,
                children: [
                  (0, a.jsx)(`div`, {
                    className: `h-3 w-5/6 rounded bg-token-foreground/10`,
                  }),
                  (0, a.jsx)(`div`, {
                    className: `h-3 w-4/6 rounded bg-token-foreground/10`,
                  }),
                  (0, a.jsx)(`div`, {
                    className: `h-3 w-3/6 rounded bg-token-foreground/10`,
                  }),
                ],
              }),
            ],
          }),
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
export { o as PlanSummaryPage };
//# sourceMappingURL=plan-summary-page-Bj-1h-7v.js.map
