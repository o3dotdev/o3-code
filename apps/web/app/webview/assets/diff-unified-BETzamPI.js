import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  Br as t,
  Fa as n,
  Qn as r,
  Ra as i,
  Va as a,
  da as o,
  do as s,
  er as c,
  kt as l,
  po as u,
  zr as d,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as f, t as p } from "./jsx-runtime.js";
import { c as m, n as h } from "./shiki-highlight-provider-gate-BIldj-yk.js";
import { t as g } from "./clsx-BcPLHiun.js";
import {
  C as _,
  G as v,
  J as y,
  L as ee,
  S as te,
  U as b,
  X as ne,
  Z as x,
  et as S,
  wt as C,
} from "./setting-storage.js";
import { t as re } from "./tooltip-CDzchJxN.js";
import { t as w } from "./button.js";
import { t as T } from "./link-external-BPZREBQk.js";
import { t as ie } from "./proxy.js";
import { t as ae } from "./AnimatePresence-Dsr-oiZk.js";
import { t as oe } from "./use-platform.js";
import { s as se } from "./diff-view-mode.js";
import { a as ce, o as le } from "./focus-composer.js";
import { t as E } from "./file-diff-DOHfgomY.js";
import { t as ue } from "./hash-code.js";
import { t as D } from "./error-boundary.js";
import { g as de, h as fe } from "./window-app-action-helpers.js";
import { t as O } from "./use-stable-callback.js";
import { t as pe } from "./minus.js";
import { t as me } from "./chevron-NmAOI_v1.js";
import { t as he } from "./copy-to-clipboard-C2Mq2hN-.js";
import { t as ge } from "./plus.js";
import { n as _e } from "./diff-stats.js";
import { t as k } from "./undo.js";
import {
  a as A,
  c as ve,
  d as j,
  f as M,
  i as N,
  l as P,
  n as ye,
  o as be,
  r as F,
  s as I,
  t as L,
  u as xe,
} from "./use-diff-annotations.js";
var Se = { loadingResultsShimmer: `_loadingResultsShimmer_1d0pm_1` },
  R = C(),
  z = p(),
  Ce = { sm: `h-3`, md: `h-3.5`, lg: `h-4` },
  we = 2147483647;
function Te(e) {
  let t = (0, R.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, "aria-hidden": i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = i === void 0 ? !0 : i,
    o;
  t[4] === n
    ? (o = t[5])
    : ((o = g(Se.loadingResultsShimmer, `rounded-md`, n)),
      (t[4] = n),
      (t[5] = o));
  let s;
  return (
    t[6] !== a || t[7] !== r || t[8] !== o
      ? ((s = (0, z.jsx)(`div`, { ...r, "aria-hidden": a, className: o })),
        (t[6] = a),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Ee(e) {
  let t = (0, R.c)(17),
    {
      className: n,
      lineClassName: r,
      lines: i,
      maxWidth: a,
      minWidth: o,
      seed: s,
      size: c,
    } = e,
    l = i === void 0 ? 3 : i,
    u = a === void 0 ? 100 : a,
    d = o === void 0 ? 55 : o,
    f = s === void 0 ? `shimmer-lines` : s,
    p = c === void 0 ? `md` : c,
    m;
  t[0] !== l || t[1] !== u || t[2] !== d || t[3] !== f
    ? ((m = B({ count: l, maxWidth: u, minWidth: d, seed: f })),
      (t[0] = l),
      (t[1] = u),
      (t[2] = d),
      (t[3] = f),
      (t[4] = m))
    : (m = t[4]);
  let h = m,
    _;
  t[5] === n
    ? (_ = t[6])
    : ((_ = g(`flex w-full flex-col items-start gap-2`, n)),
      (t[5] = n),
      (t[6] = _));
  let v;
  if (t[7] !== r || t[8] !== h || t[9] !== p) {
    let e;
    (t[11] !== r || t[12] !== p
      ? ((e = (e, t) =>
          (0, z.jsx)(
            Te,
            { className: g(Ce[p], r), style: { width: `${De(e)}%` } },
            t,
          )),
        (t[11] = r),
        (t[12] = p),
        (t[13] = e))
      : (e = t[13]),
      (v = h.map(e)),
      (t[7] = r),
      (t[8] = h),
      (t[9] = p),
      (t[10] = v));
  } else v = t[10];
  let y;
  return (
    t[14] !== _ || t[15] !== v
      ? ((y = (0, z.jsx)(`div`, { className: _, children: v })),
        (t[14] = _),
        (t[15] = v),
        (t[16] = y))
      : (y = t[16]),
    y
  );
}
function B({ count: e, maxWidth: t, minWidth: n, seed: r }) {
  let i = De(Math.min(n, t)),
    a = De(Math.max(n, t)),
    o = a - i,
    s = Oe(`${r}:${e}:${i}:${a}`);
  return Array.from(
    { length: Math.max(0, e) },
    () => ((s = ke(s)), i + (s / we) * o),
  );
}
function De(e) {
  return Math.max(1, Math.min(100, e));
}
function Oe(e) {
  let t = 0;
  for (let n = 0; n < e.length; n += 1) t = (t * 31 + e.charCodeAt(n)) % we;
  return t === 0 ? 1 : t;
}
function ke(e) {
  return (e * 48271) % we;
}
function Ae(e) {
  let n = (0, R.c)(22),
    {
      diffViewProps: r,
      filePath: i,
      previewPath: a,
      imagePreview: o,
      hasNoChanges: s,
      isBinary: c,
      isDeletion: l,
      isRenameWithoutChanges: u,
      richPreviewEnabled: f,
    } = e,
    p;
  n[0] === r
    ? (p = n[1])
    : ((p = (0, z.jsx)(je, { ...r })), (n[0] = r), (n[1] = p));
  let m = p,
    h = c ? `binary` : u ? `rename-without-changes` : `empty`,
    g;
  n[2] === h
    ? (g = n[3])
    : ((g = (0, z.jsx)(Ne, { kind: h })), (n[2] = h), (n[3] = g));
  let _ = g,
    v,
    y;
  n[4] !== i || n[5] !== l || n[6] !== f
    ? ((v = t(i)),
      (y = d({
        filePath: i,
        imagePreviewMode: v,
        isDeletion: l,
        richPreviewEnabled: f,
      })),
      (n[4] = i),
      (n[5] = l),
      (n[6] = f),
      (n[7] = v),
      (n[8] = y))
    : ((v = n[7]), (y = n[8]));
  let ee = y;
  if (ee === `markdown`) {
    let e;
    return (
      n[9] !== m || n[10] !== r.diffViewClassName || n[11] !== a
        ? ((e = (0, z.jsx)(j, {
            className: r.diffViewClassName,
            path: a,
            fallback: m,
          })),
          (n[9] = m),
          (n[10] = r.diffViewClassName),
          (n[11] = a),
          (n[12] = e))
        : (e = n[12]),
      e
    );
  }
  if (ee === `image`) {
    let e = v === `always` ? _ : m,
      t = v === `always`,
      i;
    return (
      n[13] !== r.diffViewClassName || n[14] !== o || n[15] !== e || n[16] !== t
        ? ((i = (0, z.jsx)(M, {
            className: r.diffViewClassName,
            imagePreview: o,
            fallback: e,
            showMissingPreview: t,
          })),
          (n[13] = r.diffViewClassName),
          (n[14] = o),
          (n[15] = e),
          (n[16] = t),
          (n[17] = i))
        : (i = n[17]),
      i
    );
  }
  if (ee === `pdf`) {
    let e;
    return (
      n[18] !== r.diffViewClassName || n[19] !== _ || n[20] !== o
        ? ((e = (0, z.jsx)(xe, {
            className: r.diffViewClassName,
            imagePreview: o,
            fallback: _,
            showMissingPreview: !0,
          })),
          (n[18] = r.diffViewClassName),
          (n[19] = _),
          (n[20] = o),
          (n[21] = e))
        : (e = n[21]),
      e
    );
  }
  return s || c ? _ : m;
}
function je(e) {
  let t = (0, R.c)(25),
    n,
    r,
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]))
    : (({
        disableScrollAnchor: r,
        diffViewClassName: n,
        viewType: s,
        wrapLines: c,
        hunkSeparators: i,
        ...a
      } = e),
      (o = Pe(a.fileDiff, a.metrics)),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c));
  let l = o,
    u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, z.jsx)(Me, {})), (t[8] = u))
    : (u = t[8]);
  let d = r && `[overflow-anchor:none]`,
    f;
  t[9] !== n || t[10] !== d
    ? ((f = g(`relative overflow-clip [contain:content]`, d, n)),
      (t[9] = n),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p = s === `split` ? `split` : `unified`,
    m = c ? `wrap` : `scroll`,
    h = i ?? `simple`,
    _;
  t[12] !== l || t[13] !== a.fileDiff
    ? ((_ = { ...a.fileDiff, cacheKey: l }),
      (t[12] = l),
      (t[13] = a.fileDiff),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] !== a ||
  t[16] !== f ||
  t[17] !== p ||
  t[18] !== m ||
  t[19] !== h ||
  t[20] !== _
    ? ((v = (0, z.jsx)(E, {
        className: f,
        diffStyle: p,
        overflow: m,
        hunkSeparators: h,
        ...a,
        fileDiff: _,
      })),
      (t[15] = a),
      (t[16] = f),
      (t[17] = p),
      (t[18] = m),
      (t[19] = h),
      (t[20] = _),
      (t[21] = v))
    : (v = t[21]);
  let y;
  return (
    t[22] !== l || t[23] !== v
      ? ((y = (0, z.jsx)(D, { name: `FileDiff`, fallback: u, children: v }, l)),
        (t[22] = l),
        (t[23] = v),
        (t[24] = y))
      : (y = t[24]),
    y
  );
}
function Me() {
  let e = (0, R.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, z.jsx)(`div`, {
          className: `flex items-center bg-token-main-surface-primary px-3 py-4 text-sm text-token-text-secondary`,
          children: (0, z.jsx)(b, {
            id: `codex.diff.renderFailed`,
            defaultMessage: `Diff failed to render`,
            description: `Placeholder text shown when a file diff renderer crashes`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ne(e) {
  let t = (0, R.c)(2),
    { kind: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, z.jsx)(`div`, {
          className: `flex h-full justify-center bg-token-editor-background py-4 text-sm text-token-text-secondary empty:hidden`,
          children:
            n === `binary`
              ? (0, z.jsx)(b, {
                  id: `wham.diff.binaryFile`,
                  defaultMessage: `Binary file not shown`,
                  description: `Text shown when a binary file is not shown.`,
                })
              : n === `rename-without-changes`
                ? (0, z.jsx)(b, {
                    id: `codex.diff.fileRenamedWithoutChanges`,
                    defaultMessage: `File renamed without changes`,
                    description: `Text shown when a file was renamed without content changes.`,
                  })
                : (0, z.jsx)(b, {
                    id: `wham.diff.noContent`,
                    defaultMessage: `No content`,
                    description: `Text shown when a file is empty.`,
                  }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Pe(e, t) {
  return [
    e.cacheKey,
    t?.hunkLineCount,
    t?.lineHeight,
    t?.diffHeaderHeight,
    t?.hunkSeparatorHeight,
    t?.fileGap,
    e.name,
    e.isPartial ? `partial` : `full`,
    e.additionLines.length,
    e.deletionLines.length,
    e.hunks.length,
    ...e.hunks.map(
      (e) =>
        `${e.additionStart}:${e.additionCount}:${e.additionLines}:${e.deletionStart}:${e.deletionCount}:${e.deletionLines}`,
    ),
    ue(
      [...e.additionLines, ...e.deletionLines].join(`
`),
    ),
  ].join(`:`);
}
var Fe = l(`load-full-files`, !0),
  Ie = l(`skip-revert-confirmation`, !1),
  V = 250;
function H(e) {
  let t = e.closest(de.timelineScroll);
  if (t == null) return;
  let n = e.getBoundingClientRect().top,
    r = null,
    i = () => {
      e.isConnected && (t.scrollTop += e.getBoundingClientRect().top - n);
    },
    a = () => {
      r ??= window.requestAnimationFrame(() => {
        ((r = null), i());
      });
    },
    o = () => {
      (r != null && (window.cancelAnimationFrame(r), (r = null)), i());
    },
    s = e.closest(`[data-turn-key]`),
    c = null;
  (s != null &&
    typeof ResizeObserver < `u` &&
    ((c = new ResizeObserver(o)), c.observe(s)),
    a(),
    window.setTimeout(() => {
      (r != null && window.cancelAnimationFrame(r), c?.disconnect());
    }, V));
}
function U(e) {
  let t = (0, R.c)(28),
    { action: n, scope: r, onClick: i } = e,
    a = v(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, z.jsx)(k, { className: `icon-2xs` })), (t[0] = o))
    : (o = t[0]);
  let s = o;
  if (n === `stage`) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, z.jsx)(ge, { className: `icon-2xs` })), (t[1] = e))
      : (e = t[1]),
      (s = e));
  } else if (n === `unstage`) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, z.jsx)(pe, { className: `icon-2xs` })), (t[2] = e))
      : (e = t[2]),
      (s = e));
  }
  let c;
  if (r === `file`)
    if (n === `stage`) {
      let e;
      (t[3] === a
        ? (e = t[4])
        : ((e = a.formatMessage({
            id: `diff.actionButton.stageFile`,
            defaultMessage: `Stage file`,
            description: `Tooltip to stage a file using a git action`,
          })),
          (t[3] = a),
          (t[4] = e)),
        (c = e));
    } else if (n === `unstage`) {
      let e;
      (t[5] === a
        ? (e = t[6])
        : ((e = a.formatMessage({
            id: `diff.actionButton.unstageFile`,
            defaultMessage: `Unstage file`,
            description: `Tooltip to unstage a file using a git action`,
          })),
          (t[5] = a),
          (t[6] = e)),
        (c = e));
    } else {
      let e;
      (t[7] === a
        ? (e = t[8])
        : ((e = a.formatMessage({
            id: `diff.actionButton.revertFile`,
            defaultMessage: `Revert file`,
            description: `Tooltip to revert a file using a git action`,
          })),
          (t[7] = a),
          (t[8] = e)),
        (c = e));
    }
  else if (r === `hunk`)
    if (n === `stage`) {
      let e;
      (t[9] === a
        ? (e = t[10])
        : ((e = a.formatMessage({
            id: `diff.actionButton.stageHunk`,
            defaultMessage: `Stage`,
            description: `Tooltip to stage a hunk using a git action`,
          })),
          (t[9] = a),
          (t[10] = e)),
        (c = e));
    } else if (n === `unstage`) {
      let e;
      (t[11] === a
        ? (e = t[12])
        : ((e = a.formatMessage({
            id: `diff.actionButton.unstageHunk`,
            defaultMessage: `Unstage`,
            description: `Tooltip to unstage a hunk using a git action`,
          })),
          (t[11] = a),
          (t[12] = e)),
        (c = e));
    } else {
      let e;
      (t[13] === a
        ? (e = t[14])
        : ((e = a.formatMessage({
            id: `diff.actionButton.revertHunk`,
            defaultMessage: `Revert`,
            description: `Tooltip to revert a hunk using a git action`,
          })),
          (t[13] = a),
          (t[14] = e)),
        (c = e));
    }
  else if (r === `section`)
    if (n === `stage`) {
      let e;
      (t[15] === a
        ? (e = t[16])
        : ((e = a.formatMessage({
            id: `diff.actionButton.stageSection`,
            defaultMessage: `Stage all`,
            description: `Tooltip to stage a section using a git action`,
          })),
          (t[15] = a),
          (t[16] = e)),
        (c = e));
    } else if (n === `unstage`) {
      let e;
      (t[17] === a
        ? (e = t[18])
        : ((e = a.formatMessage({
            id: `diff.actionButton.unstageSection`,
            defaultMessage: `Unstage all`,
            description: `Tooltip to unstage a section using a git action`,
          })),
          (t[17] = a),
          (t[18] = e)),
        (c = e));
    } else {
      let e;
      (t[19] === a
        ? (e = t[20])
        : ((e = a.formatMessage({
            id: `diff.actionButton.revertSection`,
            defaultMessage: `Revert all`,
            description: `Tooltip to revert a section using a git action`,
          })),
          (t[19] = a),
          (t[20] = e)),
        (c = e));
    }
  let l;
  t[21] !== s || t[22] !== i || t[23] !== c
    ? ((l = (0, z.jsx)(w, {
        color: `ghost`,
        size: `composerSm`,
        uniform: !0,
        "aria-label": c,
        onClick: i,
        children: s,
      })),
      (t[21] = s),
      (t[22] = i),
      (t[23] = c),
      (t[24] = l))
    : (l = t[24]);
  let u;
  return (
    t[25] !== l || t[26] !== c
      ? ((u = (0, z.jsx)(re, { tooltipContent: c, children: l })),
        (t[25] = l),
        (t[26] = c),
        (t[27] = u))
      : (u = t[27]),
    u
  );
}
var Le = /[ \t\r\n\f\v]/g;
function Re() {
  return { type: `success`, lines: [] };
}
function ze(e, t, n, { ignoreWhitespace: r = !1 } = {}) {
  let i = Be(e, t, n, r);
  return i == null
    ? null
    : {
        ...e,
        ...i,
        isPartial: !1,
        deletionLines: t,
        additionLines: n,
        cacheKey: `${e.cacheKey ?? e.name}:full:${e.prevObjectId ?? `none`}:${e.newObjectId ?? `none`}`,
      };
}
function Be(e, t, n, r) {
  let i = t.length,
    a = n.length,
    o = [],
    s = 0,
    c = 0,
    l = 0,
    u = 0;
  for (let d of e.hunks) {
    let f = Math.max(d.additionStart - 1, 0),
      p = Math.max(d.deletionStart - 1, 0),
      m = f - l,
      h = p - u;
    if (
      m < 0 ||
      h < 0 ||
      m !== h ||
      f + d.additionCount > a ||
      p + d.deletionCount > i
    )
      return null;
    if (!He(t, n, u, l, m, r))
      return (Ve(e, `collapsed_context_mismatch`), null);
    let g = f,
      _ = p,
      v = [];
    for (let i of d.hunkContent) {
      let a = i.type === `context` ? i.lines : i.additions,
        o = i.type === `context` ? i.lines : i.deletions;
      if (
        !He(e.deletionLines, t, i.deletionLineIndex, _, o, r) ||
        !He(e.additionLines, n, i.additionLineIndex, g, a, r)
      )
        return null;
      (v.push({ ...i, additionLineIndex: g, deletionLineIndex: _ }),
        (g += a),
        (_ += o));
    }
    (o.push({
      ...d,
      collapsedBefore: m,
      additionLineIndex: f,
      deletionLineIndex: p,
      hunkContent: v,
      splitLineStart: s + m,
      unifiedLineStart: c + m,
    }),
      (s += m + d.splitLineCount),
      (c += m + d.unifiedLineCount),
      (l = f + d.additionCount),
      (u = p + d.deletionCount));
  }
  if (o.length > 0) {
    let o = a - l,
      d = i - u;
    if (o < 0 || d < 0) return (Ve(e, `negative_trailing_context`), null);
    if (o !== d) return (Ve(e, `trailing_context_line_count_mismatch`), null);
    if (!He(t, n, u, l, o, r))
      return (Ve(e, `trailing_context_mismatch`), null);
    ((s += o), (c += o));
  }
  return { hunks: o, splitLineCount: s, unifiedLineCount: c };
}
function Ve(e, t) {
  _.warning(`code_diff_full_content_metadata_rejected`, {
    safe: { reason: t },
    sensitive: { fileName: e.name },
  });
}
function He(e, t, n, r, i, a) {
  for (let o = 0; o < i; o += 1) {
    let i = e[n + o],
      s = t[r + o];
    if (i == null || s == null || !Ue(i, s, a)) return !1;
  }
  return !0;
}
function Ue(e, t, n) {
  return n ? e.replace(Le, ``) === t.replace(Le, ``) : e === t;
}
var We = S(te, (e, { signal: t }) => ({
  fullDiffMetadata$: t(null),
  fullContentLoadFailed$: t(!1),
  fullContentUnavailable$: t(!1),
  isLoadingFullContent$: t(!1),
  key: e,
}));
async function Ge(e, t) {
  let n = e.get(We, t.key);
  if (
    !(
      n.fullDiffMetadata$.get() != null ||
      n.fullContentUnavailable$.get() ||
      n.isLoadingFullContent$.get()
    )
  ) {
    (n.isLoadingFullContent$.set(!0),
      n.fullContentLoadFailed$.set(!1),
      n.fullContentUnavailable$.set(!1));
    try {
      let e = await qe({
        diff: t.diff,
        hostConfig: t.hostConfig,
        ignoreWhitespace: t.ignoreWhitespace,
        nextFallbackToDisk: t.nextFallbackToDisk,
        workspaceRoot: t.workspaceRoot,
      });
      switch (e.type) {
        case `success`:
          n.fullDiffMetadata$.set(e.metadata);
          break;
        case `unavailable`:
          n.fullContentUnavailable$.set(!0);
          break;
        case `error`:
          n.fullContentLoadFailed$.set(!0);
          break;
      }
    } catch {
      n.fullContentLoadFailed$.set(!0);
    } finally {
      n.isLoadingFullContent$.set(!1);
    }
  }
}
function Ke({
  diff: e,
  hostConfig: t,
  ignoreWhitespace: n,
  loadFullFilesEnabled: i,
  nextFallbackToDisk: a,
  workspaceRoot: o,
}) {
  return `${e.metadata.cacheKey ?? `${e.metadata.name}:${e.metadata.prevObjectId ?? `none`}:${e.metadata.newObjectId ?? `none`}:${e.additions}:${e.deletions}`}:${o ?? ``}:${r(t)}:${a ? `next-disk-fallback` : `next-object-only`}:${n ? `ignore-whitespace` : `exact-whitespace`}:${i ? `full` : `partial`}`;
}
async function qe({
  diff: e,
  hostConfig: t,
  ignoreWhitespace: n,
  nextFallbackToDisk: r,
  workspaceRoot: i,
}) {
  if (!i) return { type: `error` };
  let a = e.metadata.prevName ?? e.metadata.name,
    o = e.metadata.name,
    s = e.metadata.type !== `new` && a !== `/dev/null`,
    l = e.metadata.type !== `deleted` && o !== `/dev/null`,
    u = s
      ? c(`git`).request({
          method: `cat-file`,
          params: {
            cwd: i,
            path: a,
            oid: e.metadata.prevObjectId ?? null,
            fallbackToDisk: !1,
            hostConfig: t,
            operationSource: `thread_diff`,
          },
        })
      : Promise.resolve(Re()),
    d = l
      ? c(`git`).request({
          method: `cat-file`,
          params: {
            cwd: i,
            path: o,
            oid: e.metadata.newObjectId ?? null,
            fallbackToDisk: r || e.metadata.newObjectId == null,
            hostConfig: t,
            operationSource: `thread_diff`,
          },
        })
      : Promise.resolve(Re()),
    [f, p] = await Promise.all([u, d]);
  if (f.type === `error` || p.type === `error`) return { type: `error` };
  let m = ze(e.metadata, f.lines, p.lines, { ignoreWhitespace: n });
  return m == null ? { type: `unavailable` } : { type: `success`, metadata: m };
}
function Je(e) {
  let t = e.additionStart,
    n = e.deletionStart,
    r = null;
  for (let i of e.hunkContent) {
    if (i.type === `context`) {
      ((t += i.lines), (n += i.lines));
      continue;
    }
    let a = Ye({
        side: `additions`,
        start: t,
        count: i.additions,
        noEofLineNumber: e.noEOFCRAdditions
          ? e.additionStart + e.additionCount - 1
          : null,
      }),
      o = Ye({
        side: `deletions`,
        start: n,
        count: i.deletions,
        noEofLineNumber: e.noEOFCRDeletions
          ? e.deletionStart + e.deletionCount - 1
          : null,
      });
    ((t += i.additions), (n += i.deletions));
    let s = a ?? o;
    s != null && (r = s);
  }
  return r;
}
function Ye({ side: e, start: t, count: n, noEofLineNumber: r }) {
  if (n === 0) return null;
  let i = t + n - 1,
    a = i === r ? i - 1 : i;
  return a < t ? null : { side: e, lineNumber: a };
}
var W = e(f(), 1),
  G = `wham-toggle-all-diffs`;
function Xe(e, t) {
  let n = (0, R.c)(6),
    r,
    i;
  (n[0] !== e || n[1] !== t
    ? ((r = () => {
        let n = function (n) {
          let r = n.detail.scope;
          (t && r !== t) || (!t && r) || e(n.detail.open);
        };
        return (
          window.addEventListener(G, n),
          () => {
            window.removeEventListener(G, n);
          }
        );
      }),
      (i = [e, t]),
      (n[0] = e),
      (n[1] = t),
      (n[2] = r),
      (n[3] = i))
    : ((r = n[2]), (i = n[3])),
    (0, W.useEffect)(r, i));
  let a;
  return (
    n[4] === t
      ? (a = n[5])
      : ((a = (e) => {
          let n = { open: e, scope: t },
            r = new CustomEvent(G, { detail: n });
          window.dispatchEvent(r);
        }),
        (n[4] = t),
        (n[5] = a)),
    a
  );
}
var Ze = 2e3,
  K = 3,
  Qe = 3,
  $e = 24;
function et(e) {
  let t = (0, R.c)(166),
    {
      containerClassName: r,
      diffViewClassName: s,
      diff: c,
      viewType: l,
      stickyHeader: u,
      hunkSeparators: d,
      enableComments: f,
      allowCommentDrafts: p,
      comments: m,
      modelComments: _,
      readonlyComments: b,
      submittingCommentKeys: S,
      onCommentsChange: C,
      commentAuthorLabel: re,
      commentAuthorAvatarUrl: w,
      onReadonlyCommentReply: T,
      defaultOpen: ie,
      diffViewWrap: se,
      showHunkActions: ce,
      onHunkAction: le,
      onPostRender: E,
      hunkActionsVariant: ue,
      cwd: D,
      richPreviewEnabled: de,
      roundedCorners: fe,
      background: pe,
      diffSurface: me,
      disableNativeContextMenu: ge,
      onRequestChanges: _e,
      onCopyPath: k,
      onToggleWrap: j,
      expandScope: M,
      conversationId: F,
      hostConfig: L,
      loadFullContent: xe,
      fullContentNextFallbackToDisk: Se,
      fullContentIgnoreWhitespace: Ce,
      metrics: we,
      displayPathOverride: Te,
      isLoading: Ee,
      openFilePathOverride: B,
      onLoadRetry: De,
      showLoadError: Oe,
      headerOpenAction: ke,
      headerVariant: Ae,
      showHeaderDiffStats: je,
      preserveHeaderPositionOnToggle: Me,
    } = e,
    Ne = f === void 0 ? !1 : f,
    Pe = p === void 0 ? Ne : p,
    Fe = ie === void 0 ? !0 : ie,
    Ie = se === void 0 ? !1 : se,
    V = ce === void 0 ? !1 : ce,
    U = ue === void 0 ? `unstaged` : ue,
    Le = de === void 0 ? !1 : de,
    Re = fe === void 0 ? !0 : fe,
    ze = pe === void 0 ? !0 : pe,
    Be = me === void 0 ? `main` : me,
    Ve = ge === void 0 ? !1 : ge,
    He = xe === void 0 ? !0 : xe,
    Ue = Se === void 0 ? !1 : Se,
    We = Ce === void 0 ? !1 : Ce,
    Ge = Ee === void 0 ? !1 : Ee,
    Ke = Oe === void 0 ? !1 : Oe,
    qe = Ae === void 0 ? `default` : Ae,
    Je = je === void 0 ? !0 : je,
    Ye = Me === void 0 ? !1 : Me,
    G = ne(te),
    Ze;
  t[0] !== Fe || t[1] !== c
    ? ((Ze = () => Fe && c.metadata.type !== `deleted`),
      (t[0] = Fe),
      (t[1] = c),
      (t[2] = Ze))
    : (Ze = t[2]);
  let [K, Qe] = (0, W.useState)(Ze),
    [$e, et] = (0, W.useState)(Ie),
    it = (0, W.useRef)(null),
    at = (0, W.useRef)(null),
    st = (0, W.useRef)(nt),
    ct = ee(),
    { platform: lt } = oe(),
    ut = Xe(Qe, M),
    dt = v(),
    ft = c.metadata.type === `new`,
    pt = c.metadata.type === `deleted`,
    mt = c.metadata.name,
    ht;
  t[3] !== D || t[4] !== mt
    ? ((ht = mt && mt !== `/dev/null` ? o(mt, D) : mt),
      (t[3] = D),
      (t[4] = mt),
      (t[5] = ht))
    : (ht = t[5]);
  let gt = ht,
    q = Te ?? gt ?? mt ?? ``,
    _t;
  t[6] === q
    ? (_t = t[7])
    : ((_t = q && !i(q) ? q : null), (t[6] = q), (t[7] = _t));
  let vt = _t,
    J,
    yt;
  t[8] !== D || t[9] !== c.metadata.prevName || t[10] !== c.metadata.type
    ? ((J =
        (c.metadata.type === `rename-pure` ||
          c.metadata.type === `rename-changed`) &&
        c.metadata.prevName != null
          ? o(c.metadata.prevName, D)
          : null),
      (yt = J == null ? null : (a(J).split(`/`).pop() ?? J)),
      (t[8] = D),
      (t[9] = c.metadata.prevName),
      (t[10] = c.metadata.type),
      (t[11] = J),
      (t[12] = yt))
    : ((J = t[11]), (yt = t[12]));
  let bt = yt,
    Y;
  bb0: {
    if (B !== void 0) {
      if (B == null) {
        Y = null;
        break bb0;
      }
      let e = lt === `windows`,
        r;
      (t[13] !== B || t[14] !== e
        ? ((r = n(``, B, e)), (t[13] = B), (t[14] = e), (t[15] = r))
        : (r = t[15]),
        (Y = r));
      break bb0;
    }
    if (gt === `/dev/null` || !D) {
      Y = gt;
      break bb0;
    }
    let e = lt === `windows`,
      r;
    (t[16] !== D || t[17] !== e || t[18] !== gt
      ? ((r = n(D, gt, e)), (t[16] = D), (t[17] = e), (t[18] = gt), (t[19] = r))
      : (r = t[19]),
      (Y = r));
  }
  let X = Y,
    xt;
  t[20] === q
    ? (xt = t[21])
    : ((xt = a(q).split(`/`).pop() ?? q), (t[20] = q), (t[21] = xt));
  let St = xt,
    Ct = J == null ? q : `${J} -> ${q}`,
    Z = bt == null ? St : `${bt} -> ${St}`,
    Q = L?.id,
    wt,
    Tt;
  (t[22] === Ie
    ? ((wt = t[23]), (Tt = t[24]))
    : ((wt = () => {
        et(Ie);
      }),
      (Tt = [Ie]),
      (t[22] = Ie),
      (t[23] = wt),
      (t[24] = Tt)),
    (0, W.useEffect)(wt, Tt));
  let Et = D ?? null,
    Dt;
  t[25] !== Q || t[26] !== X || t[27] !== Et
    ? ((Dt = { cwd: Et, hostId: Q, openPath: X }),
      (t[25] = Q),
      (t[26] = X),
      (t[27] = Et),
      (t[28] = Dt))
    : (Dt = t[28]);
  let Ot = x(y(N, Dt).preferredTargetOverride$),
    kt;
  t[29] !== D || t[30] !== Q || t[31] !== X || t[32] !== ct
    ? ((kt = async () => {
        try {
          return await A({
            cwd: D ?? null,
            hostId: Q,
            openPath: X,
            queryClient: ct,
          });
        } catch {
          return null;
        }
      }),
      (t[29] = D),
      (t[30] = Q),
      (t[31] = X),
      (t[32] = ct),
      (t[33] = kt))
    : (kt = t[33]);
  let At = O(kt),
    jt = !!X && X !== `/dev/null`,
    Mt;
  t[34] !== k || t[35] !== X
    ? ((Mt = () => {
        if (!(!X || X === `/dev/null`)) {
          if (k) {
            k(X);
            return;
          }
          he(X);
        }
      }),
      (t[34] = k),
      (t[35] = X),
      (t[36] = Mt))
    : (Mt = t[36]);
  let Nt = Mt,
    Pt;
  t[37] === j
    ? (Pt = t[38])
    : ((Pt = () => {
        if (j) {
          j();
          return;
        }
        et(tt);
      }),
      (t[37] = j),
      (t[38] = Pt));
  let Ft = Pt,
    $ = pt ? (c.firstDeletionLine ?? 1) : (c.firstAdditionLine ?? 1),
    It;
  t[39] !== D || t[40] !== Q || t[41] !== X || t[42] !== G
    ? ((It = (e) => {
        let { lineNumber: t, event: n } = e;
        X &&
          (n.metaKey || n.ctrlKey) &&
          I(G, { path: X, line: t, cwd: D ?? null, hostId: Q });
      }),
      (t[39] = D),
      (t[40] = Q),
      (t[41] = X),
      (t[42] = G),
      (t[43] = It))
    : (It = t[43]);
  let Lt = O(It),
    Rt;
  t[44] !== D || t[45] !== $ || t[46] !== Q || t[47] !== X || t[48] !== G
    ? ((Rt = (e, t, n) => {
        if (!X) return;
        let r = it.current ?? $;
        ((it.current = null),
          ve(G, {
            cwd: D ?? null,
            hostId: Q,
            line: r,
            openPath: X,
            appPath: n,
            persistPreferred: t,
            target: e,
          }));
      }),
      (t[44] = D),
      (t[45] = $),
      (t[46] = Q),
      (t[47] = X),
      (t[48] = G),
      (t[49] = Rt))
    : (Rt = t[49]);
  let zt = O(Rt),
    Bt;
  t[50] !== D ||
  t[51] !== $ ||
  t[52] !== Q ||
  t[53] !== At ||
  t[54] !== X ||
  t[55] !== Ot ||
  t[56] !== G
    ? ((Bt = () => {
        X &&
          (async () => {
            let { primaryTarget: e } = be({
              data: await At(),
              preferredTargetOverride: Ot,
            });
            if (e != null) {
              ve(G, {
                cwd: D ?? null,
                hostId: Q,
                line: $,
                openPath: X,
                persistPreferred: !1,
                target: e.target,
                appPath: e.appPath,
              });
              return;
            }
            I(G, { cwd: D ?? null, hostId: Q, line: $, path: X });
          })();
      }),
      (t[50] = D),
      (t[51] = $),
      (t[52] = Q),
      (t[53] = At),
      (t[54] = X),
      (t[55] = Ot),
      (t[56] = G),
      (t[57] = Bt))
    : (Bt = t[57]);
  let Vt = Bt,
    Ht;
  t[58] === Lt
    ? (Ht = t[59])
    : ((Ht = (e) => {
        Lt(e);
      }),
      (t[58] = Lt),
      (t[59] = Ht));
  let Ut = Ht,
    Wt;
  t[60] === Lt
    ? (Wt = t[61])
    : ((Wt = (e) => {
        Lt(e);
      }),
      (t[60] = Lt),
      (t[61] = Wt));
  let Gt = Wt,
    Kt;
  t[62] !== ut || t[63] !== K || t[64] !== Ye
    ? ((Kt = (e) => {
        let t = !K;
        if ((Ye && e != null && H(e.currentTarget), e?.altKey)) {
          ut(t);
          return;
        }
        Qe(t);
      }),
      (t[62] = ut),
      (t[63] = K),
      (t[64] = Ye),
      (t[65] = Kt))
    : (Kt = t[65]);
  let qt = O(Kt),
    Jt;
  t[66] !== D ||
  t[67] !== $ ||
  t[68] !== Q ||
  t[69] !== X ||
  t[70] !== G ||
  t[71] !== qt
    ? ((Jt = (e) => {
        (e.stopPropagation(), qt(e));
      }),
      (t[66] = D),
      (t[67] = $),
      (t[68] = Q),
      (t[69] = X),
      (t[70] = G),
      (t[71] = qt),
      (t[72] = Jt))
    : (Jt = t[72]);
  let Yt = O(Jt),
    Xt;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xt = () => {
        st.current();
      }),
      (t[73] = Xt))
    : (Xt = t[73]);
  let Zt = Xt,
    Qt;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qt = (e) => {
        it.current = P(
          typeof e.nativeEvent.composedPath == `function`
            ? e.nativeEvent.composedPath()
            : [e.target],
        );
      }),
      (t[74] = Qt))
    : (Qt = t[74]);
  let $t = Qt,
    en;
  t[75] === vt
    ? (en = t[76])
    : ((en =
        vt == null
          ? void 0
          : () => {
              he(vt);
            }),
      (t[75] = vt),
      (t[76] = en));
  let tn = Re && `rounded-lg`,
    nn;
  t[77] !== r || t[78] !== tn
    ? ((nn = g(`group/file-diff flex flex-col overflow-clip`, tn, r)),
      (t[77] = r),
      (t[78] = tn),
      (t[79] = nn))
    : (nn = t[79]);
  let rn;
  t[80] !== ze || t[81] !== Be
    ? ((rn = h(ze, Be)), (t[80] = ze), (t[81] = Be), (t[82] = rn))
    : (rn = t[82]);
  let an = `var(--codex-diffs-surface-override, ${rn})`,
    on = ze ? `var(--codex-diffs-surface)` : void 0,
    sn;
  t[83] !== an || t[84] !== on
    ? ((sn = { "--codex-diffs-surface": an, backgroundColor: on }),
      (t[83] = an),
      (t[84] = on),
      (t[85] = sn))
    : (sn = t[85]);
  let cn;
  t[86] !== c.metadata.name || t[87] !== le
    ? ((cn = (e) => {
        le?.({ path: c.metadata.name, action: e, scope: `file` });
      }),
      (t[86] = c.metadata.name),
      (t[87] = le),
      (t[88] = cn))
    : (cn = t[88]);
  let ln = jt,
    un;
  t[89] === dt
    ? (un = t[90])
    : ((un = dt.formatMessage({
        id: `diff.fileHeader.toggle`,
        defaultMessage: `Toggle file diff`,
        description: `Button label for toggling the file diff section`,
      })),
      (t[89] = dt),
      (t[90] = un));
  let dn;
  t[91] !== c ||
  t[92] !== Yt ||
  t[93] !== Vt ||
  t[94] !== Z ||
  t[95] !== Ct ||
  t[96] !== ke ||
  t[97] !== qe ||
  t[98] !== U ||
  t[99] !== ft ||
  t[100] !== pt ||
  t[101] !== K ||
  t[102] !== Je ||
  t[103] !== V ||
  t[104] !== u ||
  t[105] !== cn ||
  t[106] !== ln ||
  t[107] !== un ||
  t[108] !== qt ||
  t[109] !== gt
    ? ((dn = (0, z.jsx)(rt, {
        diff: c,
        displayFileName: Z,
        displayPath: Ct,
        isDeletion: pt,
        isAddition: ft,
        onFileNameClick: Yt,
        onOpenInEditor: Vt,
        headerOpenAction: ke,
        onFileToggle: qt,
        onFileAction: cn,
        open: K,
        stickyHeader: u,
        showOpenInButton: ln,
        showDiffStats: Je,
        toggleAriaLabel: un,
        workspaceRelativePath: gt,
        showHunkActions: V,
        hunkActionsVariant: U,
        headerVariant: qe,
      })),
      (t[91] = c),
      (t[92] = Yt),
      (t[93] = Vt),
      (t[94] = Z),
      (t[95] = Ct),
      (t[96] = ke),
      (t[97] = qe),
      (t[98] = U),
      (t[99] = ft),
      (t[100] = pt),
      (t[101] = K),
      (t[102] = Je),
      (t[103] = V),
      (t[104] = u),
      (t[105] = cn),
      (t[106] = ln),
      (t[107] = un),
      (t[108] = qt),
      (t[109] = gt),
      (t[110] = dn))
    : (dn = t[110]);
  let fn;
  t[111] !== Pe ||
  t[112] !== jt ||
  t[113] !== w ||
  t[114] !== re ||
  t[115] !== m ||
  t[116] !== F ||
  t[117] !== D ||
  t[118] !== c ||
  t[119] !== s ||
  t[120] !== Ne ||
  t[121] !== We ||
  t[122] !== Ue ||
  t[123] !== Ut ||
  t[124] !== Gt ||
  t[125] !== Vt ||
  t[126] !== L ||
  t[127] !== U ||
  t[128] !== d ||
  t[129] !== Ge ||
  t[130] !== He ||
  t[131] !== we ||
  t[132] !== _ ||
  t[133] !== C ||
  t[134] !== le ||
  t[135] !== De ||
  t[136] !== E ||
  t[137] !== T ||
  t[138] !== _e ||
  t[139] !== K ||
  t[140] !== X ||
  t[141] !== b ||
  t[142] !== Le ||
  t[143] !== V ||
  t[144] !== Ke ||
  t[145] !== S ||
  t[146] !== l ||
  t[147] !== $e
    ? ((fn = K
        ? (0, z.jsx)(ot, {
            canOpenFile: jt,
            comments: m,
            modelComments: _,
            conversationId: F,
            cwd: D,
            diff: c,
            diffViewClassName: s,
            enableComments: Ne,
            allowCommentDrafts: Pe,
            handleLineClick: Ut,
            handleLineNumberClick: Gt,
            hostConfig: L,
            hoveredLineRef: at,
            hunkActionsVariant: U,
            hunkSeparators: d,
            loadFullContent: He,
            fullContentNextFallbackToDisk: Ue,
            fullContentIgnoreWhitespace: We,
            readonlyComments: b,
            submittingCommentKeys: S,
            onCommentsChange: C,
            commentAuthorLabel: re,
            commentAuthorAvatarUrl: w,
            isLoading: Ge,
            onReadonlyCommentReply: T,
            onLoadRetry: De,
            onHunkAction: le,
            onPostRender: E,
            onOpenInEditor: Vt,
            onRequestChanges: _e,
            openFilePath: X ?? null,
            open: K,
            requestChangesRef: st,
            richPreviewEnabled: Le,
            showHunkActions: V,
            showLoadError: Ke,
            viewType: l,
            wrapLines: $e,
            metrics: we,
          })
        : null),
      (t[111] = Pe),
      (t[112] = jt),
      (t[113] = w),
      (t[114] = re),
      (t[115] = m),
      (t[116] = F),
      (t[117] = D),
      (t[118] = c),
      (t[119] = s),
      (t[120] = Ne),
      (t[121] = We),
      (t[122] = Ue),
      (t[123] = Ut),
      (t[124] = Gt),
      (t[125] = Vt),
      (t[126] = L),
      (t[127] = U),
      (t[128] = d),
      (t[129] = Ge),
      (t[130] = He),
      (t[131] = we),
      (t[132] = _),
      (t[133] = C),
      (t[134] = le),
      (t[135] = De),
      (t[136] = E),
      (t[137] = T),
      (t[138] = _e),
      (t[139] = K),
      (t[140] = X),
      (t[141] = b),
      (t[142] = Le),
      (t[143] = V),
      (t[144] = Ke),
      (t[145] = S),
      (t[146] = l),
      (t[147] = $e),
      (t[148] = fn))
    : (fn = t[148]);
  let pn;
  t[149] === fn
    ? (pn = t[150])
    : ((pn = (0, z.jsx)(ae, { children: fn })), (t[149] = fn), (t[150] = pn));
  let mn;
  t[151] !== nn || t[152] !== sn || t[153] !== dn || t[154] !== pn
    ? ((mn = (0, z.jsxs)(`div`, {
        onContextMenu: $t,
        className: nn,
        style: sn,
        children: [dn, pn],
      })),
      (t[151] = nn),
      (t[152] = sn),
      (t[153] = dn),
      (t[154] = pn),
      (t[155] = mn))
    : (mn = t[155]);
  let hn;
  return (
    t[156] !== jt ||
    t[157] !== Ve ||
    t[158] !== zt ||
    t[159] !== Nt ||
    t[160] !== Ft ||
    t[161] !== At ||
    t[162] !== Ot ||
    t[163] !== en ||
    t[164] !== mn
      ? ((hn = (0, z.jsx)(ye, {
          canOpenFile: jt,
          loadOpenTargets: At,
          preferredTargetOverride: Ot,
          onRequestChanges: Zt,
          onCopyPath: Nt,
          onCopyRelativePath: en,
          onToggleWrap: Ft,
          handleOpenInTarget: zt,
          disableNative: Ve,
          children: mn,
        })),
        (t[156] = jt),
        (t[157] = Ve),
        (t[158] = zt),
        (t[159] = Nt),
        (t[160] = Ft),
        (t[161] = At),
        (t[162] = Ot),
        (t[163] = en),
        (t[164] = mn),
        (t[165] = hn))
      : (hn = t[165]),
    hn
  );
}
function tt(e) {
  return !e;
}
function nt() {}
function rt(e) {
  let t = (0, R.c)(72),
    {
      diff: n,
      displayFileName: r,
      displayPath: i,
      headerOpenAction: a,
      headerVariant: o,
      hunkActionsVariant: s,
      isAddition: c,
      isDeletion: l,
      onFileAction: u,
      onFileNameClick: d,
      onOpenInEditor: f,
      onFileToggle: p,
      open: m,
      showDiffStats: h,
      showOpenInButton: _,
      showHunkActions: v,
      stickyHeader: y,
      toggleAriaLabel: ee,
      workspaceRelativePath: te,
    } = e,
    b = o === `full-review`,
    ne;
  t[0] === m
    ? (ne = t[1])
    : ((ne = fe.reviewFileToggle(m)), (t[0] = m), (t[1] = ne));
  let x;
  t[2] === p
    ? (x = t[3])
    : ((x = (e) => {
        (e.stopPropagation(), p(e));
      }),
      (t[2] = p),
      (t[3] = x));
  let S = m ? `rotate-180` : `rotate-0`,
    C;
  t[4] === S
    ? (C = t[5])
    : ((C = g(`icon-2xs transition-transform duration-200`, S)),
      (t[4] = S),
      (t[5] = C));
  let T;
  t[6] === C
    ? (T = t[7])
    : ((T = (0, z.jsx)(me, { className: C })), (t[6] = C), (t[7] = T));
  let ie;
  t[8] !== ne || t[9] !== x || t[10] !== T || t[11] !== ee
    ? ((ie = (0, z.jsx)(w, {
        ...ne,
        className: `bg-transparent text-token-foreground`,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        "aria-label": ee,
        onClick: x,
        children: T,
      })),
      (t[8] = ne),
      (t[9] = x),
      (t[10] = T),
      (t[11] = ee),
      (t[12] = ie))
    : (ie = t[12]);
  let ae = ie,
    oe = y && `z-10 sticky top-0`,
    se;
  t[13] === oe
    ? (se = t[14])
    : ((se = g(
        `cursor-interaction select-none focus-visible:outline-none`,
        oe,
      )),
      (t[13] = oe),
      (t[14] = se));
  let ce;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = { backgroundColor: `var(--codex-diffs-surface)` }), (t[15] = ce))
    : (ce = t[15]);
  let le = b ? `px-2 py-[2px]` : void 0,
    E;
  t[16] === b
    ? (E = t[17])
    : ((E = b
        ? {
            "--codex-diffs-separator-surface": `color-mix(
                  in srgb,
                  var(--codex-diffs-surface) 88%,
                  var(--color-token-foreground)
                )`,
          }
        : { backgroundColor: `var(--codex-diffs-header-surface)` }),
      (t[16] = b),
      (t[17] = E));
  let ue = b
      ? `rounded-[6px] py-0.5 px-0.5 hover:bg-[var(--codex-diffs-separator-surface)]`
      : `px-[var(--codex-diffs-header-padding-x,1rem)] py-[var(--codex-diffs-header-padding-y,0.25rem)] hover:bg-token-list-hover-background/30`,
    D;
  t[18] === ue
    ? (D = t[19])
    : ((D = g(
        `group/diff-header text-size-chat @container/diff-header relative flex items-center gap-2`,
        ue,
      )),
      (t[18] = ue),
      (t[19] = D));
  let de = b ? ae : null,
    O;
  t[20] === i
    ? (O = t[21])
    : ((O = (0, z.jsx)(`span`, { className: `font-mono`, children: i })),
      (t[20] = i),
      (t[21] = O));
  let pe = !te || te === `/dev/null`,
    he;
  t[22] === r
    ? (he = t[23])
    : ((he = (0, z.jsx)(`span`, {
        className: `min-w-0 truncate [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:hidden`,
        children: r,
      })),
      (t[22] = r),
      (t[23] = he));
  let ge;
  t[24] === i
    ? (ge = t[25])
    : ((ge = (0, z.jsx)(`span`, {
        className: `hidden min-w-0 truncate [direction:ltr] [unicode-bidi:plaintext] @xs/diff-header:inline`,
        children: i,
      })),
      (t[24] = i),
      (t[25] = ge));
  let k;
  t[26] !== d || t[27] !== pe || t[28] !== he || t[29] !== ge
    ? ((k = (0, z.jsxs)(`button`, {
        type: `button`,
        className: `min-w-0 cursor-interaction truncate text-start text-token-text-primary select-text [direction:rtl]`,
        disabled: pe,
        onClick: d,
        children: [he, ge],
      })),
      (t[26] = d),
      (t[27] = pe),
      (t[28] = he),
      (t[29] = ge),
      (t[30] = k))
    : (k = t[30]);
  let A;
  t[31] !== O || t[32] !== k
    ? ((A = (0, z.jsx)(re, {
        tooltipContent: O,
        delayDuration: 200,
        children: k,
      })),
      (t[31] = O),
      (t[32] = k),
      (t[33] = A))
    : (A = t[33]);
  let ve;
  t[34] === c
    ? (ve = t[35])
    : ((ve = c
        ? (0, z.jsx)(`span`, {
            className: `mb-0.5 text-token-text-link-foreground`,
            children: (0, z.jsx)(`span`, {
              className: `inline-block h-1.5 w-1.5 rounded-full bg-current`,
            }),
          })
        : null),
      (t[34] = c),
      (t[35] = ve));
  let j;
  t[36] === l
    ? (j = t[37])
    : ((j = l
        ? (0, z.jsx)(`span`, {
            className: `mb-0.5 text-token-charts-red`,
            children: (0, z.jsx)(`span`, {
              className: `inline-block h-1.5 w-1.5 rounded-full bg-current`,
            }),
          })
        : null),
      (t[36] = l),
      (t[37] = j));
  let M;
  t[38] !== A || t[39] !== ve || t[40] !== j
    ? ((M = (0, z.jsxs)(`div`, {
        className: `text-size-chat flex min-w-0 flex-1 items-center gap-2 text-token-text-primary`,
        children: [A, ve, j],
      })),
      (t[38] = A),
      (t[39] = ve),
      (t[40] = j),
      (t[41] = M))
    : (M = t[41]);
  let N;
  t[42] !== s || t[43] !== u || t[44] !== v
    ? ((N = v ? (0, z.jsx)(mt, { onFileAction: u, variant: s }) : null),
      (t[42] = s),
      (t[43] = u),
      (t[44] = v),
      (t[45] = N))
    : (N = t[45]);
  let P;
  t[46] !== n || t[47] !== i || t[48] !== h
    ? ((P = h
        ? (0, z.jsx)(
            `span`,
            {
              className: `flex shrink-0 items-center`,
              children: (0, z.jsx)(_e, {
                linesAdded: n.additions,
                linesRemoved: n.deletions,
              }),
            },
            i,
          )
        : null),
      (t[46] = n),
      (t[47] = i),
      (t[48] = h),
      (t[49] = P))
    : (P = t[49]);
  let ye;
  t[50] !== a || t[51] !== f || t[52] !== _
    ? ((ye = _
        ? (0, z.jsx)(it, { headerOpenAction: a, onOpenInEditor: f })
        : null),
      (t[50] = a),
      (t[51] = f),
      (t[52] = _),
      (t[53] = ye))
    : (ye = t[53]);
  let be = b ? null : ae,
    F;
  t[54] !== N || t[55] !== P || t[56] !== ye || t[57] !== be
    ? ((F = (0, z.jsxs)(`div`, {
        className: `ms-auto flex items-center gap-1`,
        children: [N, P, ye, be],
      })),
      (t[54] = N),
      (t[55] = P),
      (t[56] = ye),
      (t[57] = be),
      (t[58] = F))
    : (F = t[58]);
  let I;
  t[59] !== D || t[60] !== de || t[61] !== M || t[62] !== F
    ? ((I = (0, z.jsxs)(`div`, { className: D, children: [de, M, F] })),
      (t[59] = D),
      (t[60] = de),
      (t[61] = M),
      (t[62] = F),
      (t[63] = I))
    : (I = t[63]);
  let L;
  t[64] !== le || t[65] !== E || t[66] !== I
    ? ((L = (0, z.jsx)(`div`, { className: le, style: E, children: I })),
      (t[64] = le),
      (t[65] = E),
      (t[66] = I),
      (t[67] = L))
    : (L = t[67]);
  let xe;
  return (
    t[68] !== p || t[69] !== L || t[70] !== se
      ? ((xe = (0, z.jsx)(`div`, {
          role: `button`,
          onClick: p,
          className: se,
          style: ce,
          children: L,
        })),
        (t[68] = p),
        (t[69] = L),
        (t[70] = se),
        (t[71] = xe))
      : (xe = t[71]),
    xe
  );
}
function it(e) {
  let t = (0, R.c)(21),
    { headerOpenAction: n, onOpenInEditor: r } = e,
    i = v(),
    a;
  t[0] !== n?.ariaLabel || t[1] !== i
    ? ((a =
        n?.ariaLabel ??
        i.formatMessage({
          id: `codex.diff.fileHeader.openInIcon`,
          defaultMessage: `Open file`,
          description: `Accessible label for the icon button in the diff file header that opens the current file`,
        })),
      (t[0] = n?.ariaLabel),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] !== n?.tooltip || t[4] !== i
    ? ((s =
        n?.tooltip ??
        i.formatMessage({
          id: `codex.diff.fileHeader.openIn.tooltip`,
          defaultMessage: `Open in editor`,
          description: `Tooltip for the icon button in the diff file header that opens the current file`,
        })),
      (t[3] = n?.tooltip),
      (t[4] = i),
      (t[5] = s))
    : (s = t[5]);
  let c = s,
    l =
      n == null &&
      `opacity-0 transition-opacity duration-200 group-hover/file-diff:opacity-100`,
    u;
  t[6] === l ? (u = t[7]) : ((u = g(`shrink-0`, l)), (t[6] = l), (t[7] = u));
  let d;
  t[8] !== n || t[9] !== r
    ? ((d = (e) => {
        if ((e.stopPropagation(), n != null)) {
          n.onClick();
          return;
        }
        r();
      }),
      (t[8] = n),
      (t[9] = r),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, z.jsx)(T, { className: `icon-2xs` })), (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] !== o || t[13] !== d
    ? ((p = (0, z.jsx)(w, {
        className: `bg-transparent text-token-foreground`,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        "aria-label": o,
        onClick: d,
        children: f,
      })),
      (t[12] = o),
      (t[13] = d),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] !== c || t[16] !== p
    ? ((m = (0, z.jsx)(re, { tooltipContent: c, children: p })),
      (t[15] = c),
      (t[16] = p),
      (t[17] = m))
    : (m = t[17]);
  let h;
  return (
    t[18] !== u || t[19] !== m
      ? ((h = (0, z.jsx)(`div`, { className: u, onClick: at, children: m })),
        (t[18] = u),
        (t[19] = m),
        (t[20] = h))
      : (h = t[20]),
    h
  );
}
function at(e) {
  return e.stopPropagation();
}
function ot(e) {
  let t = (0, R.c)(136),
    {
      canOpenFile: n,
      comments: r,
      modelComments: i,
      conversationId: a,
      cwd: o,
      diff: c,
      diffViewClassName: l,
      enableComments: d,
      allowCommentDrafts: f,
      handleLineClick: p,
      handleLineNumberClick: h,
      hostConfig: g,
      hoveredLineRef: _,
      hunkActionsVariant: v,
      hunkSeparators: ee,
      loadFullContent: b,
      fullContentNextFallbackToDisk: S,
      fullContentIgnoreWhitespace: C,
      metrics: re,
      readonlyComments: w,
      submittingCommentKeys: T,
      onCommentsChange: ae,
      commentAuthorLabel: oe,
      commentAuthorAvatarUrl: E,
      isLoading: ue,
      onReadonlyCommentReply: D,
      onLoadRetry: de,
      onHunkAction: fe,
      onPostRender: O,
      onOpenInEditor: pe,
      onRequestChanges: me,
      openFilePath: he,
      open: ge,
      requestChangesRef: _e,
      richPreviewEnabled: k,
      showHunkActions: A,
      showLoadError: ve,
      viewType: j,
      wrapLines: M,
    } = e,
    N = ne(te),
    P = m(),
    ye = x(se),
    be = x(Fe),
    [I, xe] = (0, W.useState)(null),
    Se;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = () => {
        xe(null);
      }),
      (t[0] = Se))
    : (Se = t[0]);
  let Ce = Se,
    we = s(u),
    Te = (0, W.useRef)(null),
    Ee = (0, W.useRef)(!1),
    B = g ?? we,
    De = c.additions + c.deletions,
    Oe;
  t[1] === c ? (Oe = t[2]) : ((Oe = ce(c)), (t[1] = c), (t[2] = Oe));
  let ke = Oe,
    je = De > Ze,
    Me = je || !ye ? `none` : `word-alt`,
    Ne = c.additions === 0 && c.deletions === 0,
    Pe = Ne && c.metadata.type === `rename-pure`,
    Ie = ke,
    V;
  t[3] !== o ||
  t[4] !== c ||
  t[5] !== C ||
  t[6] !== S ||
  t[7] !== be ||
  t[8] !== B
    ? ((V = Ke({
        diff: c,
        hostConfig: B,
        ignoreWhitespace: C,
        loadFullFilesEnabled: be,
        nextFallbackToDisk: S,
        workspaceRoot: o,
      })),
      (t[3] = o),
      (t[4] = c),
      (t[5] = C),
      (t[6] = S),
      (t[7] = be),
      (t[8] = B),
      (t[9] = V))
    : (V = t[9]);
  let H = y(We, V),
    U = x(H.fullDiffMetadata$),
    Le = x(H.fullContentLoadFailed$),
    Re = x(H.fullContentUnavailable$),
    ze = x(H.isLoadingFullContent$),
    Be =
      b &&
      be &&
      o != null &&
      ge &&
      c.metadata.isPartial &&
      !c.isBinary &&
      !Ne &&
      !Ie &&
      U == null &&
      !Le &&
      !Re &&
      !ze,
    Ve;
  t[10] !== o ||
  t[11] !== c ||
  t[12] !== H.key ||
  t[13] !== C ||
  t[14] !== S ||
  t[15] !== B ||
  t[16] !== N
    ? ((Ve = () => {
        ((Ee.current = !0),
          Ge(N, {
            diff: c,
            hostConfig: B,
            ignoreWhitespace: C,
            key: H.key,
            nextFallbackToDisk: S,
            workspaceRoot: o,
          }));
      }),
      (t[10] = o),
      (t[11] = c),
      (t[12] = H.key),
      (t[13] = C),
      (t[14] = S),
      (t[15] = B),
      (t[16] = N),
      (t[17] = Ve))
    : (Ve = t[17]);
  let He = Ve,
    Ue;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = () => {
        Ee.current = !1;
      }),
      (t[18] = Ue))
    : (Ue = t[18]);
  let qe;
  (t[19] === H.key
    ? (qe = t[20])
    : ((qe = [H.key]), (t[19] = H.key), (t[20] = qe)),
    (0, W.useEffect)(Ue, qe));
  let Ye, G;
  (t[21] !== o ||
  t[22] !== c ||
  t[23] !== H.key ||
  t[24] !== C ||
  t[25] !== S ||
  t[26] !== B ||
  t[27] !== N ||
  t[28] !== Be
    ? ((Ye = () => {
        if (!Be || Ee.current) return;
        let e = Te.current;
        if (e == null) return;
        let t = new IntersectionObserver((e) => {
          e.some(ct) &&
            ((Ee.current = !0),
            t.disconnect(),
            Ge(N, {
              diff: c,
              hostConfig: B,
              ignoreWhitespace: C,
              key: H.key,
              nextFallbackToDisk: S,
              workspaceRoot: o,
            }));
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (G = [o, c, C, S, H.key, B, N, Be]),
      (t[21] = o),
      (t[22] = c),
      (t[23] = H.key),
      (t[24] = C),
      (t[25] = S),
      (t[26] = B),
      (t[27] = N),
      (t[28] = Be),
      (t[29] = Ye),
      (t[30] = G))
    : ((Ye = t[29]), (G = t[30])),
    (0, W.useEffect)(Ye, G));
  let Xe = U ?? c.metadata,
    K;
  t[31] !== ke || t[32] !== U
    ? ((K = U == null ? ke : le(U)), (t[31] = ke), (t[32] = U), (t[33] = K))
    : (K = t[33]);
  let Qe = K,
    $e;
  t[34] !== je || t[35] !== Xe
    ? (($e = je ? { ...Xe, lang: `text` } : Xe),
      (t[34] = je),
      (t[35] = Xe),
      (t[36] = $e))
    : ($e = t[36]);
  let et = $e,
    tt = v === `staged` ? null : he,
    nt;
  t[37] !== o || t[38] !== c || t[39] !== v || t[40] !== tt || t[41] !== B.id
    ? ((nt = gt({
        diff: c,
        openFilePath: tt,
        cwd: o,
        hostId: B.id,
        hunkActionsVariant: v,
      })),
      (t[37] = o),
      (t[38] = c),
      (t[39] = v),
      (t[40] = tt),
      (t[41] = B.id),
      (t[42] = nt))
    : (nt = t[42]);
  let rt = nt,
    it = c.metadata.type === `new`,
    at = c.metadata.type === `deleted`,
    ot;
  t[43] !== f ||
  t[44] !== E ||
  t[45] !== oe ||
  t[46] !== r ||
  t[47] !== a ||
  t[48] !== o ||
  t[49] !== c.metadata.name ||
  t[50] !== d ||
  t[51] !== i ||
  t[52] !== ae ||
  t[53] !== D ||
  t[54] !== w ||
  t[55] !== T
    ? ((ot = {
        diffPath: c.metadata.name,
        workspaceRoot: o,
        enableComments: d,
        allowCommentDrafts: f,
        comments: r,
        modelComments: i,
        readonlyComments: w,
        submittingCommentKeys: T,
        onCommentsChange: ae,
        commentAuthorLabel: oe,
        commentAuthorAvatarUrl: E,
        onReadonlyCommentReply: D,
        onSelectionClear: Ce,
        conversationId: a,
      }),
      (t[43] = f),
      (t[44] = E),
      (t[45] = oe),
      (t[46] = r),
      (t[47] = a),
      (t[48] = o),
      (t[49] = c.metadata.name),
      (t[50] = d),
      (t[51] = i),
      (t[52] = ae),
      (t[53] = D),
      (t[54] = w),
      (t[55] = T),
      (t[56] = ot))
    : (ot = t[56]);
  let {
      annotations: mt,
      annotationKeys: q,
      addDraftComment: _t,
      renderCommentAnnotation: J,
    } = L(ot),
    yt;
  bb0: {
    if (!A || it || at) {
      let e;
      (t[57] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = []), (t[57] = e))
        : (e = t[57]),
        (yt = e));
      break bb0;
    }
    let e;
    (t[58] !== c.metadata.hunks || t[59] !== c.metadata.name
      ? ((e = []),
        c.metadata.hunks.forEach((t, n) => {
          let r = Je(t);
          r &&
            e.push({
              side: r.side,
              lineNumber: r.lineNumber,
              metadata: {
                kind: `hunk-actions`,
                path: c.metadata.name,
                hunkIndex: n,
              },
            });
        }),
        (t[58] = c.metadata.hunks),
        (t[59] = c.metadata.name),
        (t[60] = e))
      : (e = t[60]),
      (yt = e));
  }
  let bt = yt,
    Y;
  t[61] !== mt || t[62] !== d || t[63] !== bt || t[64] !== A
    ? ((Y = []),
      A && Y.push(...bt),
      d && Y.push(...mt),
      (t[61] = mt),
      (t[62] = d),
      (t[63] = bt),
      (t[64] = A),
      (t[65] = Y))
    : (Y = t[65]);
  let X = Y,
    xt;
  t[66] === _
    ? (xt = t[67])
    : ((xt = (e) => {
        let { annotationSide: t, lineNumber: n } = e;
        _.current = { lineNumber: n, side: t };
      }),
      (t[66] = _),
      (t[67] = xt));
  let St = xt,
    Ct;
  t[68] === _
    ? (Ct = t[69])
    : ((Ct = () => {
        _.current = null;
      }),
      (t[68] = _),
      (t[69] = Ct));
  let Z = Ct,
    Q;
  t[70] !== _t ||
  t[71] !== f ||
  t[72] !== q ||
  t[73] !== c ||
  t[74] !== _ ||
  t[75] !== me
    ? ((Q = () => {
        if (!f) return;
        let e = _.current;
        if (!e) return;
        let t = F(e.side, e.lineNumber);
        q.has(t) ||
          (_t({
            side: e.side,
            lineNumber: e.lineNumber,
            localDiffHunk: vt(c, e.side, e.lineNumber),
          }),
          me?.());
      }),
      (t[70] = _t),
      (t[71] = f),
      (t[72] = q),
      (t[73] = c),
      (t[74] = _),
      (t[75] = me),
      (t[76] = Q))
    : (Q = t[76]);
  let wt = Q,
    Tt,
    Et;
  (t[77] !== wt || t[78] !== _e
    ? ((Tt = () => (
        (_e.current = wt),
        () => {
          _e.current === wt && (_e.current = st);
        }
      )),
      (Et = [wt, _e]),
      (t[77] = wt),
      (t[78] = _e),
      (t[79] = Tt),
      (t[80] = Et))
    : ((Tt = t[79]), (Et = t[80])),
    (0, W.useEffect)(Tt, Et));
  let Dt;
  t[81] !== v || t[82] !== fe || t[83] !== J
    ? ((Dt = (e) => {
        let t = e.metadata;
        return t
          ? t.kind === `hunk-actions`
            ? (0, z.jsx)(ht, {
                path: t.path,
                hunkIndex: t.hunkIndex,
                onHunkAction: fe,
                variant: v,
              })
            : J(e)
          : null;
      }),
      (t[81] = v),
      (t[82] = fe),
      (t[83] = J),
      (t[84] = Dt))
    : (Dt = t[84]);
  let Ot = Dt,
    kt;
  t[85] !== _t || t[86] !== f || t[87] !== q || t[88] !== c
    ? ((kt = (e) => {
        if (!f) return;
        let t = e,
          n = t.endSide ?? t.side;
        if (n == null) return;
        window.requestAnimationFrame(() => {
          xe({ ...t });
        });
        let r = t.endSide != null && t.endSide !== t.side,
          i = r ? t.end : Math.max(t.start, t.end),
          a = F(n, i);
        q.has(a) ||
          _t({
            side: n,
            lineNumber: i,
            ...(t.start !== t.end || r
              ? { startLine: r ? t.start : Math.min(t.start, t.end) }
              : {}),
            ...(r && t.side != null ? { startSide: t.side } : {}),
            localDiffHunk: vt(c, n, i),
          });
      }),
      (t[85] = _t),
      (t[86] = f),
      (t[87] = q),
      (t[88] = c),
      (t[89] = kt))
    : (kt = t[89]);
  let At = kt,
    jt;
  t[90] !== f ||
  t[91] !== X ||
  t[92] !== n ||
  t[93] !== c ||
  t[94] !== l ||
  t[95] !== d ||
  t[96] !== et ||
  t[97] !== Le ||
  t[98] !== He ||
  t[99] !== At ||
  t[100] !== p ||
  t[101] !== St ||
  t[102] !== Z ||
  t[103] !== h ||
  t[104] !== Ne ||
  t[105] !== ee ||
  t[106] !== rt ||
  t[107] !== at ||
  t[108] !== ue ||
  t[109] !== ze ||
  t[110] !== Pe ||
  t[111] !== Me ||
  t[112] !== tt ||
  t[113] !== re ||
  t[114] !== de ||
  t[115] !== pe ||
  t[116] !== O ||
  t[117] !== Ot ||
  t[118] !== Qe ||
  t[119] !== k ||
  t[120] !== I ||
  t[121] !== A ||
  t[122] !== ve ||
  t[123] !== j ||
  t[124] !== P ||
  t[125] !== M
    ? ((jt = ue
        ? (0, z.jsx)(ut, { diff: c, lines: dt(c) })
        : ve
          ? (0, z.jsx)(ft, { onRetry: de })
          : Qe
            ? (0, z.jsx)(lt, { canOpenFile: n, onOpenInEditor: pe })
            : (0, z.jsxs)(z.Fragment, {
                children: [
                  Le ? (0, z.jsx)(pt, { onRetry: He }) : null,
                  (0, z.jsx)(Ae, {
                    diffViewProps: {
                      diffViewClassName: l,
                      disableScrollAnchor: P != null,
                      fileDiff: et,
                      isLoadingFullContent: ze,
                      metrics: re,
                      viewType: j,
                      wrapLines: M,
                      hunkSeparators: ee,
                      lineDiffType: Me,
                      expansionLineCount: 20,
                      enableLineSelection: f,
                      onLineEnter: St,
                      onLineLeave: Z,
                      onLineClick: p,
                      onLineNumberClick: h,
                      onLineSelected: xe,
                      selectedLines: I,
                      lineAnnotations: X,
                      renderAnnotation: A || d ? Ot : void 0,
                      onGutterUtilityClick: f ? At : void 0,
                      onPostRender: O,
                    },
                    filePath: c.metadata.name,
                    previewPath: tt,
                    imagePreview: rt,
                    hasNoChanges: Ne,
                    isRenameWithoutChanges: Pe,
                    isBinary: c.isBinary,
                    isDeletion: at,
                    richPreviewEnabled: k,
                  }),
                ],
              })),
      (t[90] = f),
      (t[91] = X),
      (t[92] = n),
      (t[93] = c),
      (t[94] = l),
      (t[95] = d),
      (t[96] = et),
      (t[97] = Le),
      (t[98] = He),
      (t[99] = At),
      (t[100] = p),
      (t[101] = St),
      (t[102] = Z),
      (t[103] = h),
      (t[104] = Ne),
      (t[105] = ee),
      (t[106] = rt),
      (t[107] = at),
      (t[108] = ue),
      (t[109] = ze),
      (t[110] = Pe),
      (t[111] = Me),
      (t[112] = tt),
      (t[113] = re),
      (t[114] = de),
      (t[115] = pe),
      (t[116] = O),
      (t[117] = Ot),
      (t[118] = Qe),
      (t[119] = k),
      (t[120] = I),
      (t[121] = A),
      (t[122] = ve),
      (t[123] = j),
      (t[124] = P),
      (t[125] = M),
      (t[126] = jt))
    : (jt = t[126]);
  let Mt = jt;
  if (P != null) {
    let e;
    return (
      t[127] !== Mt || t[128] !== Z
        ? ((e = (0, z.jsx)(`div`, {
            ref: Te,
            className: `relative overflow-hidden`,
            onMouseLeave: Z,
            children: Mt,
          })),
          (t[127] = Mt),
          (t[128] = Z),
          (t[129] = e))
        : (e = t[129]),
      e
    );
  }
  let Nt, Pt, Ft;
  t[130] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nt = { height: `auto`, opacity: 1 }),
      (Pt = { height: 0, opacity: 0 }),
      (Ft = { duration: 0, ease: `easeInOut` }),
      (t[130] = Nt),
      (t[131] = Pt),
      (t[132] = Ft))
    : ((Nt = t[130]), (Pt = t[131]), (Ft = t[132]));
  let $;
  return (
    t[133] !== Mt || t[134] !== Z
      ? (($ = (0, z.jsx)(ie.div, {
          ref: Te,
          initial: !1,
          animate: Nt,
          exit: Pt,
          transition: Ft,
          className: `relative overflow-hidden`,
          onMouseLeave: Z,
          children: Mt,
        })),
        (t[133] = Mt),
        (t[134] = Z),
        (t[135] = $))
      : ($ = t[135]),
    $
  );
}
function st() {}
function ct(e) {
  return e.isIntersecting;
}
function lt(e) {
  let t = (0, R.c)(6),
    { canOpenFile: n, onOpenInEditor: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, z.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: (0, z.jsx)(b, {
          id: `codex.diff.openInEditorPrompt.singleLine`,
          defaultMessage: `This file is too large to display here.`,
          description: `Single-line prompt shown in the diff view when a file is too large to render in-panel`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== n || t[2] !== r
    ? ((a = n
        ? (0, z.jsx)(w, {
            className: `shrink-0 px-1.5`,
            color: `ghost`,
            size: `toolbar`,
            onClick: r,
            children: (0, z.jsx)(b, {
              id: `codex.diff.openInEditorPrompt.openButton`,
              defaultMessage: `Open in editor`,
              description: `Button label shown in the large-diff prompt to open the file in an editor`,
            }),
          })
        : null),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, z.jsxs)(`div`, {
          className: `text-size-chat flex items-center gap-2 bg-token-editor-background px-3 py-2 text-token-description-foreground`,
          children: [i, a],
        })),
        (t[4] = a),
        (t[5] = o)),
    o
  );
}
function ut(e) {
  let t = (0, R.c)(4),
    { diff: n, lines: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, z.jsx)(`span`, {
        className: `sr-only`,
        children: (0, z.jsx)(b, {
          id: `codex.review.diff.loading`,
          defaultMessage: `Loading diff`,
          description: `Placeholder text shown while a review file diff is loading`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a = `diff-loading-${n.metadata.name}-${n.additions}-${n.deletions}`,
    o;
  return (
    t[1] !== r || t[2] !== a
      ? ((o = (0, z.jsx)(`div`, {
          className: `bg-token-main-surface-primary px-3 text-sm`,
          children: (0, z.jsxs)(`div`, {
            className: `w-full`,
            "aria-live": `polite`,
            role: `status`,
            children: [
              i,
              (0, z.jsx)(Ee, { lines: r, minWidth: 42, maxWidth: 96, seed: a }),
            ],
          }),
        })),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function dt(e) {
  return Math.min($e, Math.max(Qe, e.additions + e.deletions + 2 * K));
}
function ft(e) {
  let t = (0, R.c)(5),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, z.jsx)(`span`, {
        className: `text-token-text-secondary`,
        children: (0, z.jsx)(b, {
          id: `codex.review.diff.loadFailedAfterRetrying`,
          defaultMessage: `Diff failed to load after retrying`,
          description: `Placeholder text shown when a review file diff failed to load after automatic retries`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i =
        n == null
          ? null
          : (0, z.jsx)(w, {
              className: `shrink-0`,
              color: `outline`,
              onClick: n,
              size: `default`,
              children: (0, z.jsx)(b, {
                id: `codex.common.retry`,
                defaultMessage: `Retry`,
                description: `Retry button`,
              }),
            })),
      (t[1] = n),
      (t[2] = i));
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = (0, z.jsxs)(`div`, {
          className: `flex items-center gap-2 bg-token-main-surface-primary px-3 py-4 text-sm`,
          children: [r, i],
        })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
function pt(e) {
  let t = (0, R.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, z.jsx)(`span`, {
        className: `text-token-text-secondary`,
        children: (0, z.jsx)(b, {
          id: `codex.review.diff.fullContentLoadFailed`,
          defaultMessage: `Full file content failed to load`,
          description: `Inline notice shown when a partial diff could not be expanded to full file content`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, z.jsx)(b, {
        id: `codex.common.retry`,
        defaultMessage: `Retry`,
        description: `Retry button`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, z.jsxs)(`div`, {
          className: `flex items-center gap-2 bg-token-main-surface-primary px-3 py-2 text-sm`,
          children: [
            r,
            (0, z.jsx)(w, {
              className: `shrink-0`,
              color: `outline`,
              onClick: n,
              size: `default`,
              children: i,
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function mt(e) {
  let t = (0, R.c)(11),
    { variant: n, onFileAction: r } = e,
    i = n === `staged` ? `unstage` : `stage`,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (0, z.jsx)(U, {
        action: `revert`,
        scope: `file`,
        onClick: (e) => {
          (e.stopPropagation(), r?.(`revert`));
        },
      })),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] !== i || t[3] !== r
    ? ((o = (e) => {
        (e.stopPropagation(), r?.(i));
      }),
      (t[2] = i),
      (t[3] = r),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] !== i || t[6] !== o
    ? ((s = (0, z.jsx)(U, { scope: `file`, action: i, onClick: o })),
      (t[5] = i),
      (t[6] = o),
      (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== a || t[9] !== s
      ? ((c = (0, z.jsxs)(`div`, {
          className: `flex items-center opacity-0 transition-opacity group-hover/file-diff:opacity-100`,
          children: [a, s],
        })),
        (t[8] = a),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
function ht(e) {
  let t = (0, R.c)(15),
    { path: n, hunkIndex: r, onHunkAction: i, variant: a } = e,
    o = a === `staged` ? `unstage` : `stage`,
    s;
  t[0] !== r || t[1] !== i || t[2] !== n
    ? ((s = (0, z.jsx)(U, {
        action: `revert`,
        scope: `hunk`,
        onClick: (e) => {
          (e.stopPropagation(),
            i?.({ path: n, hunkIndex: r, action: `revert`, scope: `hunk` }));
        },
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = n),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] !== o || t[5] !== r || t[6] !== i || t[7] !== n
    ? ((c = (e) => {
        (e.stopPropagation(),
          i?.({ path: n, hunkIndex: r, action: o, scope: `hunk` }));
      }),
      (t[4] = o),
      (t[5] = r),
      (t[6] = i),
      (t[7] = n),
      (t[8] = c))
    : (c = t[8]);
  let l;
  t[9] !== o || t[10] !== c
    ? ((l = (0, z.jsx)(U, { scope: `hunk`, action: o, onClick: c })),
      (t[9] = o),
      (t[10] = c),
      (t[11] = l))
    : (l = t[11]);
  let u;
  return (
    t[12] !== s || t[13] !== l
      ? ((u = (0, z.jsxs)(`div`, {
          className: `pointer-events-none absolute -top-8.5 right-0.5 z-20 flex items-center gap-1 rounded-full bg-token-side-bar-background/90 px-0.5 py-0.5 opacity-0 shadow-sm ring-1 ring-token-border/60 transition-opacity group-hover/file-diff:pointer-events-auto group-hover/file-diff:opacity-100`,
          children: [s, l],
        })),
        (t[12] = s),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function gt({
  diff: e,
  openFilePath: t,
  cwd: n,
  hostId: r,
  hunkActionsVariant: i,
}) {
  let a = q(
      i === `unstaged`
        ? { cwd: n, hostId: r, path: e.oldPath, ref: `index` }
        : { cwd: n, hostId: r, path: e.oldPath, ref: `head` },
    ),
    o =
      i === `staged`
        ? q({ cwd: n, hostId: r, path: e.newPath, ref: `index` })
        : _t(t, r);
  return !a && !o ? null : { before: a, after: o };
}
function q({ cwd: e, hostId: t, path: n, ref: r }) {
  return !e || !n || n === `/dev/null`
    ? null
    : { kind: `git`, cwd: e, hostId: t, path: n, ref: r };
}
function _t(e, t) {
  return !e || e === `/dev/null`
    ? null
    : { kind: `worktree`, path: e, hostId: t };
}
function vt(e, t, n) {
  let r = e.metadata.hunks.find((e) =>
    t === `additions`
      ? J(n, e.additionStart, e.additionCount)
      : J(n, e.deletionStart, e.deletionCount),
  );
  if (!r) return;
  let i = [
    yt(
      r.hunkSpecs ??
        `@@ -${r.deletionStart ?? 0},${r.deletionCount ?? 0} +${r.additionStart ?? 0},${r.additionCount ?? 0} @@`,
    ),
  ];
  for (let t of r.hunkContent) {
    if (t.type === `context`) {
      let n = e.metadata.additionLines.slice(
        t.additionLineIndex,
        t.additionLineIndex + t.lines,
      );
      i.push(...n.map((e) => ` ${yt(e)}`));
      continue;
    }
    let n = e.metadata.deletionLines.slice(
        t.deletionLineIndex,
        t.deletionLineIndex + t.deletions,
      ),
      r = e.metadata.additionLines.slice(
        t.additionLineIndex,
        t.additionLineIndex + t.additions,
      );
    i.push(...n.map((e) => `-${yt(e)}`), ...r.map((e) => `+${yt(e)}`));
  }
  return i.join(`
`);
}
function J(e, t, n) {
  return t == null || n == null ? !1 : e >= t && e < t + n;
}
function yt(e) {
  return e.replace(/\r?\n$/, ``);
}
var bt = (e) =>
    (0, z.jsxs)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, z.jsx)(`rect`, {
          x: 3.5,
          y: 4.5,
          width: 17,
          height: 15,
          rx: 3,
          stroke: `currentColor`,
          strokeWidth: 2,
        }),
        (0, z.jsx)(`path`, {
          d: `M6 8C6 7.44772 6.44772 7 7 7H10.25C10.8023 7 11.25 7.44772 11.25 8V16C11.25 16.5523 10.8023 17 10.25 17H7C6.44772 17 6 16.5523 6 16V8Z`,
          fill: `#F84E63`,
          fillOpacity: 0.5,
        }),
        (0, z.jsx)(`path`, {
          d: `M12.75 8C12.75 7.44772 13.1977 7 13.75 7H17C17.5523 7 18 7.44772 18 8V16C18 16.5523 17.5523 17 17 17H13.75C13.1977 17 12.75 16.5523 12.75 16V8Z`,
          fill: `#36D958`,
          fillOpacity: 0.5,
        }),
      ],
    }),
  Y = (e) =>
    (0, z.jsxs)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, z.jsx)(`rect`, {
          x: 3.5,
          y: 4.5,
          width: 17,
          height: 15,
          rx: 3,
          stroke: `currentColor`,
          strokeWidth: 2,
        }),
        (0, z.jsx)(`path`, {
          d: `M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8V10.25C18 10.8023 17.5523 11.25 17 11.25H7C6.44772 11.25 6 10.8023 6 10.25V8Z`,
          fill: `#F84E63`,
          fillOpacity: 0.5,
        }),
        (0, z.jsx)(`path`, {
          d: `M6 13.75C6 13.1977 6.44772 12.75 7 12.75H17C17.5523 12.75 18 13.1977 18 13.75V16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16V13.75Z`,
          fill: `#36D958`,
          fillOpacity: 0.5,
        }),
      ],
    });
export { H as a, Xe as i, bt as n, Fe as o, et as r, Ie as s, Y as t };
//# sourceMappingURL=diff-unified-BETzamPI.js.map
