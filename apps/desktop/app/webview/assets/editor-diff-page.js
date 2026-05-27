import { s as e } from "./chunk.js";
import { Cn as t } from "./src-BLHmAhbF.js";
import "./app-server-manager-signals.js";
import { n, t as r } from "./jsx-runtime.js";
import "./codex-diff-css.js";
import "./react-dom.js";
import "./Combination.js";
import "./katex-BzX-JuVf.js";
import "./marked.esm.js";
import "./pdf-DbRVTnv1.js";
import { H as i, W as a, X as o, Y as s, xt as c } from "./setting-storage.js";
import { u as l } from "./chunk-LFPYN7LY.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./notion.js";
import "./product-logger.js";
import "./statsig.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import { t as ee } from "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./codex-api.js";
import "./_baseOrderBy.js";
import "./parse-owner-repo.js";
import "./use-debounced-value.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./window-zoom-context.js";
import { t as u } from "./tooltip.js";
import { t as d } from "./route-scope.js";
import "./prompt-text.js";
import "./mention-item.js";
import { t as f } from "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-workspace-file.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./proxy.js";
import "./apps.js";
import "./x.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled.js";
import "./use-plugins.js";
import "./apps-queries.js";
import "./startCase.js";
import "./uniq.js";
import "./chrome-theme.js";
import "./parsePatchFiles.js";
import { t as p } from "./parse-diff.js";
import "./file-diff.js";
import "./sumBy.js";
import { i as m, t as h } from "./diff-view-mode.js";
import "./focus-composer.js";
import "./terminal.js";
import "./info.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./use-resolved-theme-variant.js";
import "./window-app-action-helpers.js";
import "./dialog-layout.js";
import "./run-command.js";
import "./use-stable-callback.js";
import "./use-skills.js";
import "./modal-controller-state-.js";
import "./open-project-setup-dialog.js";
import "./use-resize-observer.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./arrow-left.js";
import "./_defineProperty.js";
import "./badge.js";
import "./bug.js";
import "./chat.js";
import "./skills.js";
import "./globe.js";
import "./chevron.js";
import "./folder.js";
import "./markdown-75WV5XlN.js";
import "./external-markdown-link.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code.js";
import { t as te } from "./json-DAjHKBV7.js";
import { t as ne } from "./image-square.js";
import "./notebook.js";
import "./settings.cog.js";
import "./mcp.js";
import "./chrome.js";
import "./codex.js";
import "./openai-blossom.js";
import "./pencil.js";
import "./filesystem-media-src.js";
import "./inline-mentions.js";
import "./code-snippet.js";
import "./tailwind-styled-components.esm.js";
import "./copy.js";
import "./copy-button.js";
import "./minus-D.js";
import "./plus.js";
import "./image-preview-dialog.js";
import "./use-diff-annotations.js";
import "./use-is-background-subagents-enabled.js";
import "./arrow-up.js";
import "./sortBy.js";
import "./prompt-editor.js";
/* empty css                    */ import "./use-at-mention-sections.js";
import "./diff-stats-.js";
import "./use-composer-controller.js";
import "./undo.js";
import "./format-skill-scope.js";
import "./list-navigation.js";
import { t as re } from "./use-diff-comment-sources.js";
import "./use-workspace-file-search.js";
import { n as g, r as _, t as v } from "./diff-unified.js";
import "./rich-preview-primitives.js";
import "./markdown-surface.js";
import "./anchored-autocomplete-overlay.js";
import "./use-autocomplete-overlay-placement.js";
import { t as y } from "./segmented-toggle.js";
import { t as b } from "./diff-summary.js";
var x = c(),
  S = e(n(), 1),
  C = r(),
  ie = 25,
  ae = 2e3;
function w() {
  let e = (0, x.c)(5),
    t = E();
  if (`error` in t) {
    let n;
    return (
      e[0] === t.error
        ? (n = e[1])
        : ((n = (0, C.jsx)(`div`, {
            className: `p-4 text-token-error-foreground`,
            children: t.error,
          })),
          (e[0] = t.error),
          (e[1] = n)),
      n
    );
  }
  let n;
  return (
    e[2] !== t.conversationId || e[3] !== t.diffContent
      ? ((n = (0, C.jsx)(T, {
          diffContent: t.diffContent,
          conversationId: t.conversationId,
        })),
        (e[2] = t.conversationId),
        (e[3] = t.diffContent),
        (e[4] = n))
      : (n = e[4]),
    n
  );
}
function T(e) {
  let n = (0, x.c)(61),
    { diffContent: r, conversationId: c } = e,
    g = s(d),
    v;
  n[0] === c
    ? (v = n[1])
    : ((v = { conversationId: c, enablePullRequestComments: !1 }),
      (n[0] = c),
      (n[1] = v));
  let { commentProps: S } = re(v),
    w;
  n[2] === r ? (w = n[3]) : ((w = p(r)), (n[2] = r), (n[3] = w));
  let T = w,
    E;
  n[4] === T ? (E = n[5]) : ((E = b(T)), (n[4] = T), (n[5] = E));
  let ce = E,
    D = o(h),
    O = o(m),
    k = a(),
    { data: le } = o(ee),
    A = l().state?.cwd || le?.roots?.[0],
    { fileCount: j, linesAdded: M, linesDeleted: N } = ce,
    P = j <= ie && M + N <= ae,
    F;
  n[6] === j
    ? (F = n[7])
    : ((F = (0, C.jsx)(`span`, {
        className: `text-token-input-foreground`,
        children: (0, C.jsx)(i, {
          id: `codex.diffView.filesChanged`,
          defaultMessage: `{fileCount, plural, one {# file changed} other {# files changed}}`,
          description: `Label for the number of files changed in DiffView`,
          values: { fileCount: j },
        }),
      })),
      (n[6] = j),
      (n[7] = F));
  let I;
  n[8] !== M || n[9] !== N
    ? ((I =
        (M > 0 || N > 0) &&
        (0, C.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            (0, C.jsx)(`span`, {
              className: `text-token-charts-green`,
              children: (0, C.jsx)(i, {
                id: `codex.diffView.linesAdded`,
                defaultMessage: `+{linesAdded}`,
                description: `Label for lines added in DiffView`,
                values: { linesAdded: M },
              }),
            }),
            (0, C.jsx)(`span`, {
              className: `text-token-charts-red`,
              children: (0, C.jsx)(i, {
                id: `codex.diffView.linesDeleted`,
                defaultMessage: `-{linesDeleted}`,
                description: `Label for lines deleted in DiffView`,
                values: { linesDeleted: N },
              }),
            }),
          ],
        })),
      (n[8] = M),
      (n[9] = N),
      (n[10] = I))
    : (I = n[10]);
  let L;
  n[11] !== F || n[12] !== I
    ? ((L = (0, C.jsxs)(`div`, {
        className: `flex items-center gap-2 text-sm`,
        children: [F, I],
      })),
      (n[11] = F),
      (n[12] = I),
      (n[13] = L))
    : (L = n[13]);
  let R;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = { id: `left`, label: (0, C.jsx)(oe, { className: `icon-xs` }) }),
      (n[14] = R))
    : (R = n[14]);
  let z;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = [
        R,
        { id: `right`, label: (0, C.jsx)(se, { className: `icon-xs` }) },
      ]),
      (n[15] = z))
    : (z = n[15]);
  let B = D === `unified` ? `left` : `right`,
    V;
  n[16] === g
    ? (V = n[17])
    : ((V = (e) => g.set(h, e === `left` ? `unified` : `split`)),
      (n[16] = g),
      (n[17] = V));
  let H;
  n[18] !== V || n[19] !== B
    ? ((H = (0, C.jsx)(y, {
        options: z,
        selectedId: B,
        onSelect: V,
        size: `toolbar`,
      })),
      (n[18] = V),
      (n[19] = B),
      (n[20] = H))
    : (H = n[20]);
  let U;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, C.jsx)(i, {
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (n[21] = U))
    : (U = n[21]);
  let W;
  n[22] === k
    ? (W = n[23])
    : ((W = k.formatMessage({
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (n[22] = k),
      (n[23] = W));
  let G = O ? `ghostActive` : `ghost`,
    K;
  n[24] !== O || n[25] !== g
    ? ((K = () => g.set(m, !O)), (n[24] = O), (n[25] = g), (n[26] = K))
    : (K = n[26]);
  let q;
  n[27] === O
    ? (q = n[28])
    : ((q = O
        ? (0, C.jsx)(ne, {
            className: `icon-xs text-token-description-foreground`,
          })
        : (0, C.jsx)(te, {
            className: `icon-xs text-token-description-foreground`,
          })),
      (n[27] = O),
      (n[28] = q));
  let J;
  n[29] !== O || n[30] !== W || n[31] !== G || n[32] !== K || n[33] !== q
    ? ((J = (0, C.jsx)(u, {
        tooltipContent: U,
        children: (0, C.jsx)(f, {
          "aria-label": W,
          "aria-pressed": O,
          color: G,
          size: `icon`,
          onClick: K,
          children: q,
        }),
      })),
      (n[29] = O),
      (n[30] = W),
      (n[31] = G),
      (n[32] = K),
      (n[33] = q),
      (n[34] = J))
    : (J = n[34]);
  let Y;
  n[35] !== H || n[36] !== J
    ? ((Y = (0, C.jsxs)(`div`, {
        className: `flex items-center gap-1`,
        children: [H, J],
      })),
      (n[35] = H),
      (n[36] = J),
      (n[37] = Y))
    : (Y = n[37]);
  let X;
  n[38] !== Y || n[39] !== L
    ? ((X = (0, C.jsxs)(`div`, {
        className: `flex items-center justify-between py-2 pr-2 pl-6`,
        children: [L, Y],
      })),
      (n[38] = Y),
      (n[39] = L),
      (n[40] = X))
    : (X = n[40]);
  let Z;
  if (
    n[41] !== S ||
    n[42] !== c ||
    n[43] !== A ||
    n[44] !== T ||
    n[45] !== D ||
    n[46] !== O ||
    n[47] !== P
  ) {
    let e;
    (n[49] !== S ||
    n[50] !== c ||
    n[51] !== A ||
    n[52] !== D ||
    n[53] !== O ||
    n[54] !== P
      ? ((e = (e, n) =>
          (0, C.jsx)(
            _,
            {
              diff: e,
              hunkSeparators: `line-info`,
              viewType: D,
              richPreviewEnabled: O,
              stickyHeader: !0,
              diffViewWrap: !1,
              defaultOpen: P,
              cwd: A == null ? void 0 : t(A),
              conversationId: c,
              fullContentNextFallbackToDisk: !0,
              ...S,
            },
            n,
          )),
        (n[49] = S),
        (n[50] = c),
        (n[51] = A),
        (n[52] = D),
        (n[53] = O),
        (n[54] = P),
        (n[55] = e))
      : (e = n[55]),
      (Z = T.map(e)),
      (n[41] = S),
      (n[42] = c),
      (n[43] = A),
      (n[44] = T),
      (n[45] = D),
      (n[46] = O),
      (n[47] = P),
      (n[48] = Z));
  } else Z = n[48];
  let Q;
  n[56] === Z
    ? (Q = n[57])
    : ((Q = (0, C.jsx)(`div`, {
        className: `flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0`,
        children: Z,
      })),
      (n[56] = Z),
      (n[57] = Q));
  let $;
  return (
    n[58] !== X || n[59] !== Q
      ? (($ = (0, C.jsxs)(`div`, {
          className: `flex h-full flex-col`,
          children: [X, Q],
        })),
        (n[58] = X),
        (n[59] = Q),
        (n[60] = $))
      : ($ = n[60]),
    $
  );
}
function E() {
  let e = a(),
    t = l();
  return (0, S.useMemo)(() => {
    let n = t.state;
    if (n?.unifiedDiff && n.conversationId)
      try {
        return {
          diffContent: n.unifiedDiff,
          conversationId: n.conversationId ?? null,
        };
      } catch {
        return {
          error: e.formatMessage({
            id: `codex.diffView.failedToDecodeBase64Diff`,
            defaultMessage: `Couldn’t load this diff`,
            description: `Error message displayed when the diff cannot be decoded`,
          }),
        };
      }
    return {
      error: e.formatMessage({
        id: `codex.diffView.noDiffData`,
        defaultMessage: `No diff available`,
        description: `Error message displayed when there is no diff data`,
      }),
    };
  }, [e, t.state]);
}
function oe(e) {
  let t = (0, x.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, C.jsx)(i, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let a;
  return (
    t[1] === n
      ? (a = t[2])
      : ((a = (0, C.jsx)(u, {
          tooltipContent: r,
          children: (0, C.jsx)(v, { className: n }),
        })),
        (t[1] = n),
        (t[2] = a)),
    a
  );
}
function se(e) {
  let t = (0, x.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, C.jsx)(i, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let a;
  return (
    t[1] === n
      ? (a = t[2])
      : ((a = (0, C.jsx)(u, {
          tooltipContent: r,
          children: (0, C.jsx)(g, { className: n }),
        })),
        (t[1] = n),
        (t[2] = a)),
    a
  );
}
export { w as EditorDiffPage };
//# sourceMappingURL=editor-diff-page.js.map
