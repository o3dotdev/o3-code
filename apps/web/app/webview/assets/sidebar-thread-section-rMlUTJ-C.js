import { s as e } from "./chunk-Bj-mKKzh.js";
import { U as t, zn as n } from "./src-C.js";
import {
  E as r,
  K as i,
  T as a,
  Xs as o,
  bt as s,
  cn as c,
  ct as l,
  ec as u,
  fn as d,
  ft as f,
  g as p,
  ht as m,
  j as h,
  ln as g,
  m as _,
  mn as v,
  nt as y,
  pt as b,
  q as x,
  sn as ee,
  un as S,
  vt as C,
  yt as w,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as T, t as E } from "./jsx-runtime.js";
import { t as D } from "./clsx-BcPLHiun.js";
import {
  $ as O,
  B as k,
  G as A,
  S as j,
  U as M,
  V as N,
  X as te,
  Y as P,
  Z as F,
  at as I,
  m as L,
  wt as R,
} from "./setting-storage.js";
import { m as ne } from "./chunk-LFPYN7LY.js";
import { o as z } from "./statsig--EYRNU53.js";
import { T as B, c as V, t as H } from "./sidebar-signals.js";
import { r as re } from "./toast-signal.js";
import { r as ie, t as U } from "./tooltip-CDzchJxN.js";
import { t as W } from "./button.js";
import { t as ae } from "./spinner.js";
import { t as oe } from "./use-codex-home.js";
import { t as se } from "./open-workspace-file-WgoEFjrv.js";
import { t as G } from "./use-platform.js";
import { t as ce } from "./local-conversation-title-signals-bVA-f9H8.js";
import { h as le } from "./window-app-action-helpers.js";
import { r as ue } from "./pending-worktree-store-COXB8WW0.js";
import { r as de } from "./modal-controller-state.js";
import { a as fe } from "./open-project-setup-dialog-cJXYMFtk.js";
import {
  d as pe,
  f as me,
  g as he,
  h as ge,
  m as _e,
  p as ve,
  t as ye,
  u as be,
} from "./local-conversation-background-terminals-model.js";
import { t as K } from "./use-stable-callback.js";
import { h as xe } from "./sidebar-project-group-signals-CEQTKcIf.js";
import {
  a as Se,
  c as Ce,
  d as we,
  l as Te,
  o as Ee,
  s as De,
  u as Oe,
} from "./sidebar-thread-list-signals.js";
import { t as ke } from "./context-menu.js";
import { n as Ae } from "./use-start-new-conversation.js";
import {
  C as je,
  O as Me,
  a as Ne,
  k as Pe,
  n as Fe,
  r as Ie,
  t as Le,
} from "./sidebar-task-pr-chip-signals.js";
import { a as Re, r as q, s as ze } from "./thread-actions.js";
import { t as J } from "./archive-DxqnmQgI.js";
import { t as Be } from "./use-app-server-connection-state.js";
import { t as Ve } from "./format-relative-date-time.js";
import {
  a as He,
  i as Ue,
  o as We,
  s as Ge,
  t as Ke,
} from "./local-task-row-BShx8eqa.js";
import { r as qe, t as Je } from "./format-automation-next-run-label.js";
import { t as Ye } from "./automation-queries-DCiNISnO.js";
import { t as Xe } from "./get-attached-heartbeat-automation-for-thread.js";
import { t as Y } from "./stop.js";
import { n as Ze, o as Qe, y as $e } from "./realtime-controller-pdTEzsRt.js";
import { t as et } from "./local-environment-selection-DyGLYKsj.js";
import { n as tt, t as nt } from "./fork-conversation-actions-BTbUVcRb.js";
function rt(e, t, n) {
  let r = S(e);
  if (r != null) {
    t(r);
    return;
  }
  n(v(e));
}
function it(e, t) {
  let n = S(t);
  n != null &&
    he.start(`thread_switch_completed`, {
      conversationId: n,
      needsResume: e.get(_, n),
    });
}
function at(e, t) {
  e.get(H) !== t && (it(e, t), V(e, t));
}
var X = R(),
  Z = E();
function ot() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(`div`, {
          "aria-hidden": !0,
          className: `relative h-0 before:absolute before:inset-x-2 before:top-0 before:h-0.5 before:-translate-y-1/2 before:rounded before:bg-token-border/80 before:content-['']`,
          role: `presentation`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var st = e(T(), 1);
function ct(e) {
  let t = (0, X.c)(43),
    {
      items: n,
      getKey: r,
      renderRow: i,
      className: a,
      ariaLabel: o,
      footerItems: s,
      emptyState: c,
      emptyStateClassName: l,
      itemClassName: u,
      itemWrapper: d,
      renderBeforeItem: f,
      afterItemsNode: p,
    } = e,
    m;
  t[0] === s
    ? (m = t[1])
    : ((m = s === void 0 ? [] : s), (t[0] = s), (t[1] = m));
  let h = m,
    [g, _] = (0, st.useState)(ut),
    v;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        _((t) => {
          if (t.has(e)) return t;
          let n = new Set(t);
          return (n.add(e), n);
        });
      }),
      (t[2] = v))
    : (v = t[2]);
  let y = v,
    b;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (e) => {
        _((t) => {
          if (!t.has(e)) return t;
          let n = new Set(t);
          return (n.delete(e), n);
        });
      }),
      (t[3] = b))
    : (b = t[3]);
  let x = b,
    ee = lt,
    S;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = { onArchiveStart: y, onArchiveSuccess: ee, onArchiveError: x }),
      (t[4] = S))
    : (S = t[4]);
  let C = S,
    w;
  if (t[5] !== r || t[6] !== g || t[7] !== n) {
    let e;
    (t[9] !== r || t[10] !== g
      ? ((e = (e) => !g.has(r(e))), (t[9] = r), (t[10] = g), (t[11] = e))
      : (e = t[11]),
      (w = n.filter(e)),
      (t[5] = r),
      (t[6] = g),
      (t[7] = n),
      (t[8] = w));
  } else w = t[8];
  let T = w,
    E;
  t[12] === a
    ? (E = t[13])
    : ((E = D(`flex flex-col`, a)), (t[12] = a), (t[13] = E));
  let O;
  if (
    t[14] !== r ||
    t[15] !== u ||
    t[16] !== d ||
    t[17] !== f ||
    t[18] !== i ||
    t[19] !== T
  ) {
    let e;
    (t[21] !== r || t[22] !== u || t[23] !== d || t[24] !== f || t[25] !== i
      ? ((e = (e) => {
          let t = r(e),
            n = i(e, C),
            a = f?.(e);
          return d == null
            ? (0, Z.jsxs)(
                st.Fragment,
                {
                  children: [
                    a,
                    (0, Z.jsx)(`div`, {
                      className: u,
                      role: `listitem`,
                      children: n,
                    }),
                  ],
                },
                t,
              )
            : (0, Z.jsxs)(
                st.Fragment,
                {
                  children: [
                    a,
                    (0, Z.jsx)(d, { className: u, item: e, children: n }),
                  ],
                },
                t,
              );
        }),
        (t[21] = r),
        (t[22] = u),
        (t[23] = d),
        (t[24] = f),
        (t[25] = i),
        (t[26] = e))
      : (e = t[26]),
      (O = T.map(e)),
      (t[14] = r),
      (t[15] = u),
      (t[16] = d),
      (t[17] = f),
      (t[18] = i),
      (t[19] = T),
      (t[20] = O));
  } else O = t[20];
  let k;
  t[27] !== c || t[28] !== l || t[29] !== n.length
    ? ((k =
        n.length === 0 && c
          ? (0, Z.jsx)(`div`, { className: l, children: c })
          : null),
      (t[27] = c),
      (t[28] = l),
      (t[29] = n.length),
      (t[30] = k))
    : (k = t[30]);
  let A;
  if (t[31] !== h || t[32] !== u) {
    let e;
    (t[34] === u
      ? (e = t[35])
      : ((e = (e) =>
          (0, Z.jsx)(
            `div`,
            {
              className: D(u, e.className),
              role: `listitem`,
              children: e.node,
            },
            e.key,
          )),
        (t[34] = u),
        (t[35] = e)),
      (A = h.map(e)),
      (t[31] = h),
      (t[32] = u),
      (t[33] = A));
  } else A = t[33];
  let j;
  return (
    t[36] !== p ||
    t[37] !== o ||
    t[38] !== A ||
    t[39] !== E ||
    t[40] !== O ||
    t[41] !== k
      ? ((j = (0, Z.jsxs)(`div`, {
          className: E,
          role: `list`,
          "aria-label": o,
          children: [O, p, k, A],
        })),
        (t[36] = p),
        (t[37] = o),
        (t[38] = A),
        (t[39] = E),
        (t[40] = O),
        (t[41] = k),
        (t[42] = j))
      : (j = t[42]),
    j
  );
}
function lt(e) {}
function ut() {
  return new Set();
}
function dt(e) {
  let t = (0, X.c)(11),
    { badge: n } = e,
    r;
  t[0] === n.icon
    ? (r = t[1])
    : ((r = (0, st.cloneElement)(n.icon, {
        className: D(`icon-2xs block shrink-0`, n.icon.props.className),
      })),
      (t[0] = n.icon),
      (t[1] = r));
  let i = r,
    a = n.ariaLabel,
    o;
  t[2] === n.className
    ? (o = t[3])
    : ((o = D(
        `flex h-5 w-5 items-center justify-center leading-none`,
        n.className,
      )),
      (t[2] = n.className),
      (t[3] = o));
  let s;
  t[4] !== n.ariaLabel || t[5] !== i || t[6] !== o
    ? ((s = (0, Z.jsx)(`span`, { "aria-label": a, className: o, children: i })),
      (t[4] = n.ariaLabel),
      (t[5] = i),
      (t[6] = o),
      (t[7] = s))
    : (s = t[7]);
  let c = s;
  if (n.tooltipContent == null || n.tooltipContent === ``) return c;
  let l;
  return (
    t[8] !== n.tooltipContent || t[9] !== c
      ? ((l = (0, Z.jsx)(U, { tooltipContent: n.tooltipContent, children: c })),
        (t[8] = n.tooltipContent),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var ft = `flex items-center gap-2.5 opacity-0 group-hover:opacity-100 [&:has(:focus-visible)]:opacity-100`;
function pt(e) {
  let t = (0, X.c)(10),
    { actions: n, confirmAction: r, className: i, tooltipSide: a } = e,
    o = a === void 0 ? `right` : a;
  if (n.length === 0 && r?.active !== !0) return null;
  let s = r?.active && `opacity-100`,
    c;
  t[0] !== i || t[1] !== s
    ? ((c = D(ft, s, i)), (t[0] = i), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== n || t[4] !== r || t[5] !== o
    ? ((l = r?.active
        ? (0, Z.jsx)(W, {
            className: `!h-auto !py-0`,
            color: `danger`,
            size: `composerSm`,
            "aria-label": r.ariaLabel,
            onClick: (e) => {
              (e.stopPropagation(), r.onConfirm());
            },
            onPointerDown: ht,
            children: r.label,
          })
        : n.map((e) => {
            let t = e.label == null,
              n = (0, Z.jsxs)(W, {
                color: e.color ?? `ghostMuted`,
                size: e.size ?? (t ? `icon` : `composerSm`),
                className: D(
                  t &&
                    e.size == null &&
                    `!h-5 !w-5 !p-0 opacity-50 hover:opacity-100 focus-visible:opacity-100 [&>svg]:!h-4 [&>svg]:!w-4`,
                  e.buttonClassName,
                ),
                "aria-label": e.ariaLabel,
                onClick: (t) => {
                  (t.stopPropagation(), e.onClick());
                },
                onPointerDown: mt,
                children: [e.label, e.icon],
              });
            return t
              ? (0, Z.jsx)(
                  U,
                  { side: o, tooltipContent: e.ariaLabel, children: n },
                  e.id,
                )
              : (0, Z.jsx)(`div`, { children: n }, e.id);
          })),
      (t[3] = n),
      (t[4] = r),
      (t[5] = o),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== c || t[8] !== l
      ? ((u = (0, Z.jsx)(`div`, { className: c, children: l })),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function mt(e) {
  e.stopPropagation();
}
function ht(e) {
  e.stopPropagation();
}
function gt(e) {
  switch (e) {
    case `macOS`:
      return _t.finder;
    case `windows`:
      return _t.explorer;
    case `linux`:
      return _t.fileManager;
  }
}
var _t = N({
    finder: {
      id: `sidebarElectron.openWorkspaceRootInFinder`,
      defaultMessage: `Reveal in Finder`,
      description: `Menu item to reveal a folder in Finder`,
    },
    explorer: {
      id: `sidebarElectron.openWorkspaceRootInExplorer`,
      defaultMessage: `Open in Explorer`,
      description: `Menu item to open a folder in File Explorer`,
    },
    fileManager: {
      id: `sidebarElectron.openWorkspaceRootInFileManager`,
      defaultMessage: `Open in File Manager`,
      description: `Menu item to open a folder in the system file manager`,
    },
  }),
  vt = I(j, !1);
function yt({ scope: e, canToggleActiveStatus: t, showActiveStatus: n }) {
  if (!t) return [];
  let r = () => {
    e.set(vt, !n);
  };
  return n
    ? [
        {
          id: `toggle-active-status`,
          message: k({
            id: `codex.sidebarTaskRow.hideActiveStatus`,
            defaultMessage: `Hide active status`,
            description: `Development-only context menu action that hides active/resumed state dots on sidebar thread rows`,
          }),
          onSelect: r,
        },
      ]
    : [
        {
          id: `toggle-active-status`,
          message: k({
            id: `codex.sidebarTaskRow.showActiveStatus`,
            defaultMessage: `Show active status`,
            description: `Development-only context menu action that shows active/resumed state dots on sidebar thread rows`,
          }),
          onSelect: r,
        },
      ];
}
var Q = {
    active: `bg-token-charts-green`,
    follower: `bg-token-charts-purple`,
    inactive: `bg-token-charts-yellow`,
    "needs-resume": `bg-token-charts-red`,
    "read-only": `bg-token-charts-orange`,
  },
  bt = {
    active: `Subscribed: active`,
    follower: `Subscribed: follower`,
    inactive: `Subscribed: idle`,
    "needs-resume": `Needs resume`,
    "read-only": `Read-only snapshot`,
  };
function xt(e) {
  let t = (0, X.c)(13),
    { className: n, conversationId: r } = e,
    a = P(y, r),
    o = P(l, r),
    s = P(f, r),
    c = St({
      latestTurnStatus: P(i, r),
      resumeState: a,
      streamRole: o,
      threadRuntimeStatus: s,
    }),
    u = bt[c],
    d;
  t[0] === n
    ? (d = t[1])
    : ((d = D(`flex size-3 items-center justify-center`, n)),
      (t[0] = n),
      (t[1] = d));
  let p = Q[c],
    m;
  t[2] === p
    ? (m = t[3])
    : ((m = D(`block size-2 rounded-full`, p)), (t[2] = p), (t[3] = m));
  let h;
  t[4] === m
    ? (h = t[5])
    : ((h = (0, Z.jsx)(`span`, { className: m })), (t[4] = m), (t[5] = h));
  let g;
  t[6] !== d || t[7] !== h || t[8] !== u
    ? ((g = (0, Z.jsx)(`span`, { className: d, "aria-label": u, children: h })),
      (t[6] = d),
      (t[7] = h),
      (t[8] = u),
      (t[9] = g))
    : (g = t[9]);
  let _;
  return (
    t[10] !== g || t[11] !== u
      ? ((_ = (0, Z.jsx)(U, { tooltipContent: u, children: g })),
        (t[10] = g),
        (t[11] = u),
        (t[12] = _))
      : (_ = t[12]),
    _
  );
}
function St({
  latestTurnStatus: e,
  resumeState: t,
  streamRole: n,
  threadRuntimeStatus: r,
}) {
  return n == null
    ? t === `needs_resume`
      ? `needs-resume`
      : `read-only`
    : n.role === `follower`
      ? `follower`
      : r?.type === `active` || e === `inProgress`
        ? `active`
        : `inactive`;
}
var Ct = O(j, (e, { get: t }) => {
  let n = t(m, e);
  return n != null && ye(n).length > 0;
});
function wt(e) {
  let t = (0, X.c)(24),
    {
      requestArchive: n,
      confirmArchive: r,
      confirmingArchive: i,
      canArchive: a,
      pinAction: o,
      stopBackgroundTerminalsAction: s,
    } = e,
    c = A();
  if (!a && o == null && s == null) return null;
  let l;
  t[0] !== o || t[1] !== s
    ? ((l =
        s == null
          ? []
          : [
              {
                id: `thread-stop-background-terminals-action`,
                ariaLabel: s.ariaLabel,
                icon: (0, Z.jsx)(Y, {
                  className: o == null ? void 0 : `translate-x-0.5`,
                }),
                onClick: s.onClick,
              },
            ]),
      (t[0] = o),
      (t[1] = s),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === o
    ? (u = t[4])
    : ((u =
        o == null
          ? []
          : [
              {
                id: `thread-pin-action`,
                ariaLabel: o.ariaLabel,
                icon: (0, Z.jsx)(qe, { className: `translate-x-px` }),
                onClick: o.onClick,
              },
            ]),
      (t[3] = o),
      (t[4] = u));
  let d;
  t[5] !== a || t[6] !== c || t[7] !== n
    ? ((d = a
        ? [
            {
              id: `thread-primary-action`,
              ariaLabel: c.formatMessage(q.archiveThread),
              icon: (0, Z.jsx)(J, {}),
              onClick: n,
            },
          ]
        : []),
      (t[5] = a),
      (t[6] = c),
      (t[7] = n),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== l || t[10] !== u || t[11] !== d
    ? ((f = [...l, ...u, ...d]),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f))
    : (f = t[12]);
  let p;
  t[13] !== a || t[14] !== r || t[15] !== i || t[16] !== c
    ? ((p = a
        ? {
            active: i,
            ariaLabel: c.formatMessage({
              id: `codex.taskRowLayout.confirm`,
              defaultMessage: `Confirm`,
              description: `Confirmation button for archiving a task`,
            }),
            label: (0, Z.jsx)(M, {
              id: `codex.taskRowLayout.confirm`,
              defaultMessage: `Confirm`,
              description: `Confirmation button for archiving a task`,
            }),
            onConfirm: r,
          }
        : void 0),
      (t[13] = a),
      (t[14] = r),
      (t[15] = i),
      (t[16] = c),
      (t[17] = p))
    : (p = t[17]);
  let m = i && `pl-1 opacity-100`,
    h;
  t[18] === m ? (h = t[19]) : ((h = D(Ge, m)), (t[18] = m), (t[19] = h));
  let g;
  return (
    t[20] !== f || t[21] !== p || t[22] !== h
      ? ((g = (0, Z.jsx)(pt, {
          actions: f,
          confirmAction: p,
          className: h,
          tooltipSide: `right`,
        })),
        (t[20] = f),
        (t[21] = p),
        (t[22] = h),
        (t[23] = g))
      : (g = t[23]),
    g
  );
}
function Tt(e) {
  let i = (0, X.c)(130),
    {
      conversationId: c,
      displayCwd: l,
      isPinned: d,
      canPin: f,
      showPinActionOnHover: m,
      labelColor: g,
      modelProvider: _,
      onStartNewThread: v,
      onArchiveStart: y,
      onArchiveSuccess: b,
      onArchiveError: x,
      threadWorkspaceRootHint: ee,
      ...S
    } = e,
    C = d === void 0 ? !1 : d,
    T = f === void 0 ? !0 : f,
    E = m === void 0 ? !1 : m,
    D = g === void 0 ? null : g,
    O = te(j),
    k = ne(),
    [N, I] = (0, st.useState)(!1),
    R = A(),
    B = P(p, c),
    V = P(a, c),
    H = P(Ct, c) ?? !1,
    ie = P(r, c),
    W = oe(ie ?? `local`),
    ae = F(Ze),
    le = F(Qe),
    me = z(`2337831332`),
    he = F(vt),
    ye = P(ce, c),
    xe = P(w, c),
    Se = P(s, c),
    Ce = P(h, c) ?? !1,
    we = F(Me),
    Te = F(Pe),
    Ee = F(je),
    {
      archiveThread: De,
      markThreadAsUnread: Oe,
      renameThread: Ae,
      copyWorkingDirectory: Fe,
      copySessionId: Ie,
      copyAppLink: Le,
    } = Re(),
    { platform: J } = G(),
    Be = L(`open-file`),
    Ve;
  i[0] !== x || i[1] !== y || i[2] !== b
    ? ((Ve = { onArchiveStart: y, onArchiveSuccess: b, onArchiveError: x }),
      (i[0] = x),
      (i[1] = y),
      (i[2] = b),
      (i[3] = Ve))
    : (Ve = i[3]);
  let {
      archived: He,
      usesExternalArchiveHandling: Ue,
      beginArchive: Ge,
      handleArchiveSuccess: qe,
      handleArchiveError: Je,
    } = We(Ve),
    {
      isActive: Y,
      onDoubleClick: rt,
      extraIconBadges: it,
      priorityIndicatorNode: at,
      ...ot
    } = S,
    { createPendingWorktree: ct } = ue(),
    lt = u(et),
    ut;
  i[4] === c
    ? (ut = i[5])
    : ((ut = { conversationId: c }), (i[4] = c), (i[5] = ut));
  let { canOpenThreadInNewWindow: dt, openThreadInNewWindow: ft } = be(ut),
    pt = Se !== `projectless`,
    mt;
  i[6] !== W || i[7] !== B
    ? ((mt = t(B, W)), (i[6] = W), (i[7] = B), (i[8] = mt))
    : (mt = i[8]);
  let ht = mt,
    _t = B != null,
    Q =
      Se === `projectless` && (B == null || B === `~`) ? (xe ?? ee ?? null) : B,
    bt =
      me && he
        ? { id: `active-status`, icon: (0, Z.jsx)(xt, { conversationId: c }) }
        : null,
    St = null,
    Tt;
  i[9] !== c || i[10] !== B || i[11] !== k || i[12] !== O
    ? ((Tt = async () => {
        let e = await nt(O, {
          sourceConversationId: c,
          sourceWorkspaceRoot: B,
        });
        e != null && k(`/local/${e}`);
      }),
      (i[9] = c),
      (i[10] = B),
      (i[11] = k),
      (i[12] = O),
      (i[13] = Tt))
    : (Tt = i[13]);
  let Dt = Tt,
    Ot;
  i[14] !== c ||
  i[15] !== ct ||
  i[16] !== B ||
  i[17] !== lt ||
  i[18] !== k ||
  i[19] !== O
    ? ((Ot = async () => {
        let e = await tt(O, {
          createPendingWorktree: ct,
          localEnvironmentSelectionsByWorkspace: lt,
          sourceConversationId: c,
          sourceWorkspaceRoot: B,
        });
        e != null && k(`/worktree-init-v2/${e}`);
      }),
      (i[14] = c),
      (i[15] = ct),
      (i[16] = B),
      (i[17] = lt),
      (i[18] = k),
      (i[19] = O),
      (i[20] = Ot))
    : (Ot = i[20]);
  let kt = Ot;
  if (ae === c && le !== `inactive`) {
    let e;
    i[21] === R
      ? (e = i[22])
      : ((e = R.formatMessage({
          id: `sidebarTaskRow.realtimeStatus`,
          defaultMessage: `Realtime voice active`,
          description: `Accessible label and tooltip for the sidebar icon shown on the thread with an active realtime voice session`,
        })),
        (i[21] = R),
        (i[22] = e));
    let t = e,
      n;
    i[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Z.jsx)($e, { className: `icon-2xs shrink-0` })), (i[23] = n))
      : (n = i[23]);
    let r;
    i[24] === t
      ? (r = i[25])
      : ((r = (0, Z.jsx)(`span`, {
          className: `flex h-5 w-5 shrink-0 items-center justify-center`,
          role: `img`,
          "aria-label": t,
          children: n,
        })),
        (i[24] = t),
        (i[25] = r));
    let a;
    (i[26] !== t || i[27] !== r
      ? ((a = (0, Z.jsx)(U, { tooltipContent: t, children: r })),
        (i[26] = t),
        (i[27] = r),
        (i[28] = a))
      : (a = i[28]),
      (St = a));
  }
  let At = it;
  bt != null && (At = it == null ? [bt] : [...it, bt]);
  let { data: jt } = F(Ye),
    Mt;
  i[29] !== jt?.items || i[30] !== c
    ? ((Mt = Xe({ automations: jt?.items ?? [], conversationId: c })),
      (i[29] = jt?.items),
      (i[30] = c),
      (i[31] = Mt))
    : (Mt = i[31]);
  let Nt = Mt,
    Pt = Nt?.name ?? null,
    $ = Pt != null,
    Ft;
  i[32] === Nt
    ? (Ft = i[33])
    : ((Ft = Nt == null ? null : (0, Z.jsx)(Et, { automation: Nt })),
      (i[32] = Nt),
      (i[33] = Ft));
  let It = Ft,
    Lt;
  i[34] !== De ||
  i[35] !== Ge ||
  i[36] !== c ||
  i[37] !== Je ||
  i[38] !== qe ||
  i[39] !== Y ||
  i[40] !== v
    ? ((Lt = () => {
        (Ge(),
          De({
            conversationId: c,
            onArchiveSuccess: () => {
              (qe(), Y && v?.());
            },
            onArchiveError: Je,
          }));
      }),
      (i[34] = De),
      (i[35] = Ge),
      (i[36] = c),
      (i[37] = Je),
      (i[38] = qe),
      (i[39] = Y),
      (i[40] = v),
      (i[41] = Lt))
    : (Lt = i[41]);
  let Rt = Lt,
    zt;
  i[42] !== Rt || i[43] !== $ || i[44] !== I
    ? ((zt = () => {
        if ($) {
          I(!0);
          return;
        }
        Rt();
      }),
      (i[42] = Rt),
      (i[43] = $),
      (i[44] = I),
      (i[45] = zt))
    : (zt = i[45]);
  let Bt = K(zt),
    Vt;
  i[46] !== Rt || i[47] !== I
    ? ((Vt = () => {
        (I(!1), Rt());
      }),
      (i[46] = Rt),
      (i[47] = I),
      (i[48] = Vt))
    : (Vt = i[48]);
  let Ht = Vt,
    Ut;
  i[49] !== c || i[50] !== O
    ? ((Ut = () => {
        o(`clean-background-terminals`, { conversationId: c }).catch(() => {
          O.get(re).danger(
            (0, Z.jsx)(M, {
              id: `codex.localConversation.backgroundTerminals.cleanError`,
              defaultMessage: `Unable to stop background terminals`,
              description: `Toast shown when cleaning background terminals from the thread summary panel fails`,
            }),
          );
        });
      }),
      (i[49] = c),
      (i[50] = O),
      (i[51] = Ut))
    : (Ut = i[51]);
  let Wt = K(Ut),
    Gt;
  i[52] !== c || i[53] !== D || i[54] !== Ae || i[55] !== O || i[56] !== ye
    ? ((Gt = () => {
        (document.dispatchEvent(new PointerEvent(`pointercancel`)),
          de(O, fe, {
            initialValue: ye ?? ``,
            initialColor: null,
            showColorPicker: !1,
            onSave: (e, t) => {
              Ae({ conversationId: c, title: e });
            },
          }));
      }),
      (i[52] = c),
      (i[53] = D),
      (i[54] = Ae),
      (i[55] = O),
      (i[56] = ye),
      (i[57] = Gt))
    : (Gt = i[57]);
  let Kt = Gt,
    qt;
  i[58] !== Q || i[59] !== Be
    ? ((qt = () => {
        Q &&
          se({
            path: Q,
            cwd: n(Q),
            target: `fileManager`,
            openFile: Be.mutate,
          });
      }),
      (i[58] = Q),
      (i[59] = Be),
      (i[60] = qt))
    : (qt = i[60]);
  let Jt = qt,
    Yt;
  i[61] !== Kt || i[62] !== Y || i[63] !== rt
    ? ((Yt = (e) => {
        (rt?.(e),
          !e.defaultPrevented &&
            Y &&
            e.target?.closest(`[data-thread-title]`) &&
            Kt());
      }),
      (i[61] = Kt),
      (i[62] = Y),
      (i[63] = rt),
      (i[64] = Yt))
    : (Yt = i[64]);
  let Xt = K(Yt),
    Zt;
  i[65] !== _t ||
  i[66] !== dt ||
  i[67] !== T ||
  i[68] !== c ||
  i[69] !== Le ||
  i[70] !== Ie ||
  i[71] !== Fe ||
  i[72] !== Te ||
  i[73] !== Q ||
  i[74] !== Dt ||
  i[75] !== kt ||
  i[76] !== Bt ||
  i[77] !== Jt ||
  i[78] !== Kt ||
  i[79] !== V ||
  i[80] !== ie ||
  i[81] !== C ||
  i[82] !== Ce ||
  i[83] !== me ||
  i[84] !== ht ||
  i[85] !== Oe ||
  i[86] !== ft ||
  i[87] !== Ee ||
  i[88] !== J ||
  i[89] !== O ||
  i[90] !== he ||
  i[91] !== pt ||
  i[92] !== we
    ? ((Zt = () => [
        ...(T
          ? we && Te
            ? Ne(O, { threadId: c, isPinned: C, sections: Ee })
            : [
                ve({
                  isPinned: C,
                  onPinnedChange: (e) => {
                    ze(O, c, e);
                  },
                }),
              ]
          : []),
        { id: `rename-thread`, message: q.renameThread, onSelect: Kt },
        { id: `archive-thread`, message: q.archiveThread, onSelect: Bt },
        {
          id: `mark-thread-unread`,
          message: q.markThreadUnread,
          enabled: V !== !0,
          onSelect: () => {
            Oe({ conversationId: c });
          },
        },
        ...yt({ scope: O, canToggleActiveStatus: me, showActiveStatus: he }),
        { id: `thread-actions-separator`, type: `separator` },
        ...(ie == null || ie === `local`
          ? [
              {
                id: `open-thread-folder`,
                message: gt(J),
                enabled: !!Q,
                onSelect: Jt,
              },
            ]
          : []),
        {
          id: `copy-cwd`,
          message: q.copyWorkingDirectory,
          enabled: !!Q,
          onSelect: () => {
            Fe(Q);
          },
        },
        {
          id: `copy-session-id`,
          message: q.copySessionId,
          onSelect: () => {
            Ie(c);
          },
        },
        {
          id: `copy-app-link`,
          message: q.copyAppLink,
          onSelect: () => {
            Le(c);
          },
        },
        ...(pt
          ? [
              { id: `fork-actions-separator`, type: `separator` },
              {
                id: `fork-into-local`,
                message: ht ? q.forkIntoSameWorktree : q.forkIntoLocal,
                enabled: !Ce,
                onSelect: () => {
                  Dt();
                },
              },
              {
                id: `fork-into-worktree`,
                message: q.forkIntoWorktree,
                enabled: !Ce && _t,
                onSelect: () => {
                  kt();
                },
              },
            ]
          : []),
        ...(dt
          ? [
              { id: `new-window-separator`, type: `separator` },
              {
                id: `open-thread-new-window`,
                message: q.openInNewWindow,
                onSelect: ft,
              },
            ]
          : []),
      ]),
      (i[65] = _t),
      (i[66] = dt),
      (i[67] = T),
      (i[68] = c),
      (i[69] = Le),
      (i[70] = Ie),
      (i[71] = Fe),
      (i[72] = Te),
      (i[73] = Q),
      (i[74] = Dt),
      (i[75] = kt),
      (i[76] = Bt),
      (i[77] = Jt),
      (i[78] = Kt),
      (i[79] = V),
      (i[80] = ie),
      (i[81] = C),
      (i[82] = Ce),
      (i[83] = me),
      (i[84] = ht),
      (i[85] = Oe),
      (i[86] = ft),
      (i[87] = Ee),
      (i[88] = J),
      (i[89] = O),
      (i[90] = he),
      (i[91] = pt),
      (i[92] = we),
      (i[93] = Zt))
    : (Zt = i[93]);
  let Qt = K(Zt),
    $t = E && T,
    en;
  i[94] !== c ||
  i[95] !== Bt ||
  i[96] !== Wt ||
  i[97] !== $ ||
  i[98] !== H ||
  i[99] !== R ||
  i[100] !== C ||
  i[101] !== O ||
  i[102] !== $t
    ? ((en = (e) => {
        let {
          requestArchive: t,
          confirmArchive: n,
          confirmingArchive: r,
          canArchive: i,
        } = e;
        return !i && !$t && !H
          ? null
          : (0, Z.jsx)(wt, {
              requestArchive: $ ? Bt : t,
              confirmArchive: n,
              confirmingArchive: $ ? !1 : r,
              canArchive: i,
              pinAction: $t
                ? {
                    ariaLabel: R.formatMessage(C ? ge : _e),
                    onClick: () => {
                      ze(O, c, !C);
                    },
                  }
                : void 0,
              stopBackgroundTerminalsAction: H
                ? {
                    ariaLabel: R.formatMessage({
                      id: `codex.localConversation.backgroundTerminals.stop`,
                      defaultMessage: `Stop all background terminals`,
                      description: `Aria label for button that stops all background terminals from the thread summary panel`,
                    }),
                    onClick: Wt,
                  }
                : void 0,
            });
      }),
      (i[94] = c),
      (i[95] = Bt),
      (i[96] = Wt),
      (i[97] = $),
      (i[98] = H),
      (i[99] = R),
      (i[100] = C),
      (i[101] = O),
      (i[102] = $t),
      (i[103] = en))
    : (en = i[103]);
  let tn = en;
  if (He && !Ue) return null;
  let nn = St ?? at,
    rn = ($t ? 1 : 0) + (H ? 1 : 0),
    an;
  i[104] !== c ||
  i[105] !== l ||
  i[106] !== Xt ||
  i[107] !== $ ||
  i[108] !== It ||
  i[109] !== Y ||
  i[110] !== x ||
  i[111] !== y ||
  i[112] !== b ||
  i[113] !== tn ||
  i[114] !== ot ||
  i[115] !== At ||
  i[116] !== nn ||
  i[117] !== rn
    ? ((an = (0, Z.jsx)(Ke, {
        conversationId: c,
        displayCwd: l,
        disableEnvTooltip: !0,
        isActive: Y,
        hasAttachedHeartbeatAutomation: $,
        heartbeatAutomationTooltipContent: It,
        priorityIndicatorNode: nn,
        extraIconBadges: At,
        additionalHoverActionCount: rn,
        renderActions: tn,
        onArchiveStart: y,
        onArchiveSuccess: b,
        onArchiveError: x,
        onDoubleClick: Xt,
        ...ot,
      })),
      (i[104] = c),
      (i[105] = l),
      (i[106] = Xt),
      (i[107] = $),
      (i[108] = It),
      (i[109] = Y),
      (i[110] = x),
      (i[111] = y),
      (i[112] = b),
      (i[113] = tn),
      (i[114] = ot),
      (i[115] = At),
      (i[116] = nn),
      (i[117] = rn),
      (i[118] = an))
    : (an = i[118]);
  let on;
  i[119] !== Qt || i[120] !== an
    ? ((on = (0, Z.jsx)(ke, { getItems: Qt, children: an })),
      (i[119] = Qt),
      (i[120] = an),
      (i[121] = on))
    : (on = i[121]);
  let sn;
  i[122] !== Ht || i[123] !== Pt || i[124] !== N || i[125] !== I
    ? ((sn = N
        ? (0, Z.jsx)(pe, {
            heartbeatAutomationName: Pt,
            open: !0,
            onOpenChange: I,
            onConfirm: Ht,
          })
        : null),
      (i[122] = Ht),
      (i[123] = Pt),
      (i[124] = N),
      (i[125] = I),
      (i[126] = sn))
    : (sn = i[126]);
  let cn;
  return (
    i[127] !== on || i[128] !== sn
      ? ((cn = (0, Z.jsxs)(Z.Fragment, { children: [on, sn] })),
        (i[127] = on),
        (i[128] = sn),
        (i[129] = cn))
      : (cn = i[129]),
    cn
  );
}
function Et(e) {
  let t = (0, X.c)(6),
    { automation: n } = e,
    r = A(),
    i;
  t[0] !== n.nextRunAt || t[1] !== n.status || t[2] !== r
    ? ((i = Je({ intl: r, nextRunAt: n.nextRunAt, status: n.status })),
      (t[0] = n.nextRunAt),
      (t[1] = n.status),
      (t[2] = r),
      (t[3] = i))
    : (i = t[3]);
  let a;
  return (
    t[4] === i
      ? (a = t[5])
      : ((a = (0, Z.jsx)(M, {
          id: `sidebarTaskRow.heartbeatAutomation.nextRun`,
          defaultMessage: `Next run: {nextRunLabel}`,
          description: `Tooltip shown on the heartbeat automation icon for a sidebar thread row`,
          values: { nextRunLabel: i },
        })),
        (t[4] = i),
        (t[5] = a)),
    a
  );
}
var Dt = (0, st.memo)(function (e) {
  let t = (0, X.c)(31),
    {
      threadKey: n,
      disableHoverCard: r,
      isGrouped: i,
      hideRemoteHostEnvIcon: a,
      onActivateGroup: o,
      onStartNewConversation: s,
      projectRouteContext: c,
      showRemoteActionsMenu: l,
      showPinActionOnHover: u,
      shortcutLabel: d,
      onArchiveStart: f,
      onArchiveSuccess: p,
      onArchiveError: m,
    } = e,
    h = r === void 0 ? !1 : r,
    g = i === void 0 ? !1 : i,
    _ = a === void 0 ? !1 : a,
    v = l === void 0 ? !1 : l,
    y = u === void 0 ? !1 : u,
    b = P(B, n),
    x = P(Te, n),
    ee = P(Ce, n),
    S = P(Se, n),
    C = P(De, n),
    w = P(Ee, n),
    T;
  t[0] !== f || t[1] !== n
    ? ((T = () => {
        f(n);
      }),
      (t[0] = f),
      (t[1] = n),
      (t[2] = T))
    : (T = t[2]);
  let E = K(T),
    D;
  t[3] !== p || t[4] !== n
    ? ((D = () => {
        p(n);
      }),
      (t[3] = p),
      (t[4] = n),
      (t[5] = D))
    : (D = t[5]);
  let O = K(D),
    k;
  t[6] !== m || t[7] !== n
    ? ((k = () => {
        m(n);
      }),
      (t[6] = m),
      (t[7] = n),
      (t[8] = k))
    : (k = t[8]);
  let A = K(k),
    j;
  t[9] !== S ||
  t[10] !== h ||
  t[11] !== w ||
  t[12] !== A ||
  t[13] !== E ||
  t[14] !== O ||
  t[15] !== _ ||
  t[16] !== C ||
  t[17] !== ee ||
  t[18] !== g ||
  t[19] !== x ||
  t[20] !== o ||
  t[21] !== s ||
  t[22] !== c ||
  t[23] !== d ||
  t[24] !== y ||
  t[25] !== v
    ? ((j = {
        isPinned: x,
        isAutomationRun: ee,
        automationDisplayName: S,
        disableHoverCard: h,
        isGrouped: g,
        hideRemoteHostEnvIcon: _,
        onActivateGroup: o,
        onStartNewConversation: s,
        projectRouteContext: c,
        showRemoteActionsMenu: v,
        showPinActionOnHover: y,
        shortcutLabel: d,
        hoverCardProjectLabel: C,
        displayCwd: w,
        onArchiveStart: E,
        onArchiveSuccess: O,
        onArchiveError: A,
      }),
      (t[9] = S),
      (t[10] = h),
      (t[11] = w),
      (t[12] = A),
      (t[13] = E),
      (t[14] = O),
      (t[15] = _),
      (t[16] = C),
      (t[17] = ee),
      (t[18] = g),
      (t[19] = x),
      (t[20] = o),
      (t[21] = s),
      (t[22] = c),
      (t[23] = d),
      (t[24] = y),
      (t[25] = v),
      (t[26] = j))
    : (j = t[26]);
  let M = j,
    N;
  return (
    t[27] !== M || t[28] !== b || t[29] !== n
      ? ((N = (0, Z.jsx)(Ot, { threadKey: n, isActive: b, ...M })),
        (t[27] = M),
        (t[28] = b),
        (t[29] = n),
        (t[30] = N))
      : (N = t[30]),
    N
  );
});
function Ot(e) {
  let t = (0, X.c)(8),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ threadKey: i, isActive: r, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = P(xe, i);
  if (a == null) return null;
  let o;
  return (
    t[4] !== n || t[5] !== a || t[6] !== r
      ? ((o = (0, Z.jsx)(kt, { entry: a, isActive: r, ...n })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = r),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
function kt(e) {
  let t = (0, X.c)(83),
    {
      entry: n,
      isPinned: i,
      isAutomationRun: o,
      automationDisplayName: l,
      isActive: u,
      disableHoverCard: f,
      isGrouped: p,
      hideRemoteHostEnvIcon: m,
      onActivateGroup: h,
      onStartNewConversation: _,
      projectRouteContext: v,
      showRemoteActionsMenu: y,
      showPinActionOnHover: S,
      shortcutLabel: w,
      hoverCardProjectLabel: T,
      displayCwd: E,
      onArchiveStart: O,
      onArchiveSuccess: k,
      onArchiveError: M,
    } = e,
    N = f === void 0 ? !1 : f,
    I = p === void 0 ? !1 : p,
    L = m === void 0 ? !1 : m,
    R = y === void 0 ? !1 : y,
    z = S === void 0 ? !1 : S,
    B = te(j),
    V = F(Me),
    H = F(Pe),
    re = F(je),
    U = A(),
    W = ne(),
    {
      cancelPendingWorktree: ae,
      renamePendingWorktree: oe,
      setPendingWorktreePinned: se,
    } = ue(),
    G = n.kind === `local` ? n.conversationId : null,
    ce = P(a, G) ?? !1,
    pe = P(C, G),
    he = P(r, G);
  P(x, G);
  let ye = P(s, G),
    be = P(b, G),
    K = P(we, G),
    xe = n.kind === `remote` ? n : null,
    Se;
  t[0] === xe ? (Se = t[1]) : ((Se = Le(xe)), (t[0] = xe), (t[1] = Se));
  let Ce = P(Ie, Se),
    Te = P(Fe, G),
    Ee = P(Oe, G),
    De = n.kind === `remote` ? Ce : Te,
    Re = De?.iconBadge ?? null,
    J = N ? void 0 : T,
    We = Ae(),
    Ke;
  t[2] === Re
    ? (Ke = t[3])
    : ((Ke = Re == null ? null : (0, Z.jsx)(dt, { badge: Re })),
      (t[2] = Re),
      (t[3] = Ke));
  let qe = Ke,
    Je;
  t[4] === w
    ? (Je = t[5])
    : ((Je =
        w == null
          ? void 0
          : (0, Z.jsx)(`div`, {
              className: D(Ge, `text-token-description-foreground`),
              children: (0, Z.jsx)(ie, { keysLabel: w }),
            })),
      (t[4] = w),
      (t[5] = Je));
  let Ye = Je,
    Xe;
  t[6] !== N || t[7] !== De
    ? ((Xe = !N && De != null ? [De.hoverCardSection] : void 0),
      (t[6] = N),
      (t[7] = De),
      (t[8] = Xe))
    : (Xe = t[8]);
  let Y = Xe,
    Ze = n.kind === `local` ? he : null,
    { state: Qe } = Be(Ze ?? `local`),
    $e =
      n.kind === `local` &&
      ye === `project` &&
      Ze != null &&
      Ze !== `local` &&
      Qe !== `connected`,
    et;
  t[9] !== ae ||
  t[10] !== J ||
  t[11] !== U ||
  t[12] !== u ||
  t[13] !== I ||
  t[14] !== i ||
  t[15] !== W ||
  t[16] !== h ||
  t[17] !== O ||
  t[18] !== k ||
  t[19] !== oe ||
  t[20] !== B ||
  t[21] !== se ||
  t[22] !== Ye ||
  t[23] !== z
    ? ((et = function (e) {
        let t = e.pendingWorktree,
          n = c(t.id),
          r = () => {
            (O(), ae(t.id), k());
          },
          a = () => {
            (document.dispatchEvent(new PointerEvent(`pointercancel`)),
              de(B, fe, {
                initialValue: t.label,
                onSave: (e) => {
                  let n = e.trim(),
                    r = t.label.trim();
                  n.length === 0 || n === r || oe(t.id, n);
                },
              }));
          },
          o = U.formatMessage(i ? ge : _e),
          s = z
            ? { rest: null, hover: null }
            : me({
                isPinned: i,
                hasUnreadTurn: !1,
                ariaLabel: o,
                onPin: () => {
                  se(t.id, !0);
                },
                onUnpin: () => {
                  se(t.id, !1);
                },
              }),
          l = h
            ? () => {
                (at(B, n), h(), W(`/worktree-init-v2/${t.id}`));
              }
            : void 0;
        return (0, Z.jsx)(ke, {
          getItems: () => [
            i
              ? {
                  id: `unpin-thread`,
                  message: ge,
                  onSelect: () => {
                    se(t.id, !1);
                  },
                }
              : {
                  id: `pin-thread`,
                  message: _e,
                  onSelect: () => {
                    se(t.id, !0);
                  },
                },
            { id: `rename-thread`, message: q.renameThread, onSelect: a },
            ...(t.phase === `failed`
              ? [
                  {
                    id: `archive-thread`,
                    message: q.archiveThread,
                    onSelect: r,
                  },
                ]
              : []),
          ],
          children: (0, Z.jsx)(Ue, {
            task: t,
            isActive: u,
            hasAttention: t.needsAttention,
            statusIndicatorReplacesMeta: !0,
            indicatorRestNode: s.rest,
            indicatorHoverNode: s.hover,
            reserveLeadingSlot: I,
            additionalHoverActionCount: z ? 1 : 0,
            renderActions: z
              ? (e) => {
                  let {
                    requestArchive: n,
                    confirmArchive: r,
                    confirmingArchive: a,
                    canArchive: s,
                  } = e;
                  return (0, Z.jsx)(wt, {
                    requestArchive: n,
                    confirmArchive: r,
                    confirmingArchive: a,
                    canArchive: s,
                    pinAction: {
                      ariaLabel: o,
                      onClick: () => {
                        se(t.id, !i);
                      },
                    },
                  });
                }
              : void 0,
            overlayMetaContent: Ye,
            hoverCardProjectLabel: J,
            onClick: l,
            onDoubleClick: (e) => {
              e.defaultPrevented ||
                (u && e.target?.closest(`[data-thread-title]`) && a());
            },
            onArchive: r,
            dataAttributes: le.sidebarThreadRow({
              active: u,
              hostId: t.hostId,
              id: n,
              kind: `pending-worktree`,
              pinned: i,
              title: t.label,
            }),
          }),
        });
      }),
      (t[9] = ae),
      (t[10] = J),
      (t[11] = U),
      (t[12] = u),
      (t[13] = I),
      (t[14] = i),
      (t[15] = W),
      (t[16] = h),
      (t[17] = O),
      (t[18] = k),
      (t[19] = oe),
      (t[20] = B),
      (t[21] = se),
      (t[22] = Ye),
      (t[23] = z),
      (t[24] = et))
    : (et = t[24]);
  let tt = et,
    nt;
  t[25] !== H ||
  t[26] !== J ||
  t[27] !== U ||
  t[28] !== u ||
  t[29] !== I ||
  t[30] !== i ||
  t[31] !== M ||
  t[32] !== O ||
  t[33] !== k ||
  t[34] !== re ||
  t[35] !== Y ||
  t[36] !== qe ||
  t[37] !== B ||
  t[38] !== Ye ||
  t[39] !== z ||
  t[40] !== R ||
  t[41] !== V
    ? ((nt = function (e) {
        let t = g(e.task.id),
          n = i || I || e.task.has_unread_turn,
          r = U.formatMessage(i ? ge : _e),
          a = z
            ? { rest: null, hover: null }
            : me({
                isPinned: i,
                hasUnreadTurn: !n && e.task.has_unread_turn,
                ariaLabel: r,
                onPin: () => {
                  ze(B, e.task.id, !0);
                },
                onUnpin: () => {
                  ze(B, e.task.id, !1);
                },
              }),
          o =
            V && H
              ? Ne(B, { threadId: e.task.id, isPinned: i, sections: re })
              : [
                  ve({
                    isPinned: i,
                    onPinnedChange: (t) => {
                      ze(B, e.task.id, t);
                    },
                  }),
                ];
        return (0, Z.jsx)(He, {
          task: e.task,
          isActive: u,
          onSelect: () => {
            at(B, t);
          },
          onClose: At,
          contextMenuItems: o,
          envIconLocation: `end`,
          statusIndicatorReplacesMeta: n,
          idleIndicatorNode: qe,
          indicatorRestNode: a.rest,
          indicatorHoverNode: a.hover ?? a.rest,
          reserveLeadingSlot: I,
          additionalHoverActionCount: z ? 1 : 0,
          hideInlineBadgesOnHover: z,
          overlayMetaContent: Ye,
          onArchiveStart: O,
          onArchiveSuccess: k,
          onArchiveError: M,
          hoverCardProjectLabel: J,
          hoverCardSections: Y,
          hideHoverCardProjectRow: I,
          dataAttributes: le.sidebarThreadRow({
            active: u,
            hostId: null,
            id: t,
            kind: `remote`,
            pinned: i,
            title: e.task.title ?? ``,
          }),
          renderActions:
            R || z
              ? (t) => {
                  let {
                    requestArchive: n,
                    confirmArchive: a,
                    confirmingArchive: o,
                    canArchive: s,
                  } = t;
                  return !s && !z
                    ? null
                    : (0, Z.jsx)(wt, {
                        requestArchive: n,
                        confirmArchive: a,
                        confirmingArchive: o,
                        canArchive: s,
                        pinAction: z
                          ? {
                              ariaLabel: r,
                              onClick: () => {
                                ze(B, e.task.id, !i);
                              },
                            }
                          : void 0,
                      });
                }
              : void 0,
        });
      }),
      (t[25] = H),
      (t[26] = J),
      (t[27] = U),
      (t[28] = u),
      (t[29] = I),
      (t[30] = i),
      (t[31] = M),
      (t[32] = O),
      (t[33] = k),
      (t[34] = re),
      (t[35] = Y),
      (t[36] = qe),
      (t[37] = B),
      (t[38] = Ye),
      (t[39] = z),
      (t[40] = R),
      (t[41] = V),
      (t[42] = nt))
    : (nt = t[42]);
  let rt = nt,
    it;
  t[43] !== l ||
  t[44] !== N ||
  t[45] !== $e ||
  t[46] !== E ||
  t[47] !== L ||
  t[48] !== U ||
  t[49] !== u ||
  t[50] !== o ||
  t[51] !== I ||
  t[52] !== i ||
  t[53] !== ce ||
  t[54] !== he ||
  t[55] !== Ee ||
  t[56] !== null ||
  t[57] !== be ||
  t[58] !== pe ||
  t[59] !== ye ||
  t[60] !== h ||
  t[61] !== M ||
  t[62] !== O ||
  t[63] !== k ||
  t[64] !== _ ||
  t[65] !== Y ||
  t[66] !== qe ||
  t[67] !== v ||
  t[68] !== B ||
  t[69] !== Ye ||
  t[70] !== z ||
  t[71] !== We ||
  t[72] !== K
    ? ((it = function (e) {
        let t = ce,
          n = z && !0,
          r = n || i || ye === `project`,
          a = I ? h : void 0,
          s = _ ?? We,
          c = e.conversationId,
          f = ee(c),
          p =
            v == null
              ? void 0
              : d({
                  conversationId: c,
                  hostId: v.hostId,
                  projectId: v.projectId,
                }),
          m = n
            ? { rest: null, hover: null }
            : me({
                isPinned: i,
                hasUnreadTurn: !r && t,
                ariaLabel: U.formatMessage(i ? ge : _e),
                onPin: () => {
                  ze(B, c, !0);
                },
                onUnpin: () => {
                  ze(B, c, !1);
                },
              }),
          g = l,
          y = be ?? (typeof g == `string` ? g : ``),
          b =
            pe == null
              ? void 0
              : (0, Z.jsx)(Ve, { dateString: new Date(pe).toISOString() });
        return (0, Z.jsx)(Tt, {
          conversationId: c,
          conversationRoute: p,
          isAutomationRun: o,
          hasPendingChildApproval: !1,
          isActive: u,
          envIconLocation: `end`,
          hideRemoteHostEnvIcon: L,
          statusIndicatorReplacesMeta: r,
          hideInlineBadgesOnHover: n,
          idleIndicatorNode: qe,
          indicatorRestNode: m.rest,
          indicatorHoverNode: m.hover ?? m.rest,
          reserveLeadingSlot: I,
          metaContent: b,
          overlayMetaContent: Ye,
          titleOverride: g,
          threadWorkspaceRootHint: K,
          hoverCardSections: Y,
          disableHoverCard: N,
          displayCwd: E,
          isPinned: i,
          canPin: !0,
          labelColor: null,
          modelProvider: null,
          showPinActionOnHover: n,
          isGrouped: I,
          disabled: $e,
          onStartNewThread: s,
          onBeforeNavigate: a,
          onSelect: () => {
            at(B, f);
          },
          onArchiveStart: O,
          onArchiveSuccess: k,
          onArchiveError: M,
          dataAttributes: le.sidebarThreadRow({
            active: u,
            hostId: he ?? `local`,
            id: f,
            kind: `local`,
            pinned: i,
            title: y,
          }),
        });
      }),
      (t[43] = l),
      (t[44] = N),
      (t[45] = $e),
      (t[46] = E),
      (t[47] = L),
      (t[48] = U),
      (t[49] = u),
      (t[50] = o),
      (t[51] = I),
      (t[52] = i),
      (t[53] = ce),
      (t[54] = he),
      (t[55] = Ee),
      (t[56] = null),
      (t[57] = be),
      (t[58] = pe),
      (t[59] = ye),
      (t[60] = h),
      (t[61] = M),
      (t[62] = O),
      (t[63] = k),
      (t[64] = _),
      (t[65] = Y),
      (t[66] = qe),
      (t[67] = v),
      (t[68] = B),
      (t[69] = Ye),
      (t[70] = z),
      (t[71] = We),
      (t[72] = K),
      (t[73] = it))
    : (it = t[73]);
  let ot = it;
  switch (n.kind) {
    case `pending-worktree`: {
      let e;
      return (
        t[74] !== n || t[75] !== tt
          ? ((e = tt(n)), (t[74] = n), (t[75] = tt), (t[76] = e))
          : (e = t[76]),
        e
      );
    }
    case `remote`: {
      let e;
      return (
        t[77] !== n || t[78] !== rt
          ? ((e = rt(n)), (t[77] = n), (t[78] = rt), (t[79] = e))
          : (e = t[79]),
        e
      );
    }
    case `local`: {
      let e;
      return (
        t[80] !== n || t[81] !== ot
          ? ((e = ot(n)), (t[80] = n), (t[81] = ot), (t[82] = e))
          : (e = t[82]),
        e
      );
    }
  }
}
function At() {}
var jt = O(j, (e) => {
    let t =
      !e.isExpanded &&
      e.maxItems != null &&
      Nt({
        threadKeys: e.threadKeys,
        currentThreadKey: e.currentThreadKey,
        maxItems: e.maxItems,
      });
    return {
      isForceExpanded: t,
      listEntries: (e.maxItems != null && !e.isExpanded && !t
        ? e.threadKeys.slice(0, e.maxItems)
        : e.threadKeys
      ).map((e) => ({ type: `thread`, threadKey: e })),
      visibleCount: e.threadKeys.length,
    };
  }),
  Mt = O(j, (e, { get: t }) => {
    let n = t(H);
    return n != null && e.includes(n) ? n : null;
  });
function Nt({ threadKeys: e, currentThreadKey: t, maxItems: n }) {
  return t == null ? !1 : e.indexOf(t) >= n;
}
var Pt = (0, st.createContext)(null);
function $() {
  return (0, st.useContext)(Pt);
}
function Ft({ shortcutLabels: e, shortcutThreadKeys: t }) {
  let n = new Map();
  for (let [r, i] of t.entries()) {
    let t = e[r];
    t != null && n.set(i, t);
  }
  return n;
}
function It(e) {
  let t = (0, X.c)(61),
    {
      threadKeys: n,
      ariaLabel: r,
      itemClassName: i,
      itemWrapper: a,
      footerItems: o,
      emptyState: s,
      emptyStateClassName: c,
      isLoading: l,
      rowOptions: u,
      currentThreadKey: d,
      dropIndicatorTarget: f,
      maxItems: p,
      showMoreLabel: m,
      showLessLabel: h,
      expanded: g,
      onExpandedChange: _,
      className: v,
    } = e,
    y = l === void 0 ? !1 : l,
    b = P(Mt, n),
    x = $(),
    ee = d === void 0 ? b : d,
    [S, C] = (0, st.useState)(!1),
    w = g ?? S,
    T;
  t[0] !== g || t[1] !== _
    ? ((T = (e) => {
        (g ?? C(e), _?.(e));
      }),
      (t[0] = g),
      (t[1] = _),
      (t[2] = T))
    : (T = t[2]);
  let E = T,
    O = p ?? null,
    k;
  t[3] !== w || t[4] !== ee || t[5] !== O || t[6] !== n
    ? ((k = {
        threadKeys: n,
        currentThreadKey: ee,
        isExpanded: w,
        maxItems: O,
      }),
      (t[3] = w),
      (t[4] = ee),
      (t[5] = O),
      (t[6] = n),
      (t[7] = k))
    : (k = t[7]);
  let A = P(jt, k),
    j;
  t[8] === a
    ? (j = t[9])
    : ((j = (e) => {
        let { item: t, className: n, children: r } = e;
        return a == null
          ? (0, Z.jsx)(`div`, { className: n, children: r })
          : (0, Z.jsx)(a, {
              threadKey: t.threadKey,
              className: n,
              children: r,
            });
      }),
      (t[8] = a),
      (t[9] = j));
  let M = j,
    N = p != null,
    te = p ?? 0,
    F;
  t[10] === o ? (F = t[11]) : ((F = o ?? []), (t[10] = o), (t[11] = F));
  let I;
  if (
    t[12] !== N ||
    t[13] !== w ||
    t[14] !== te ||
    t[15] !== A ||
    t[16] !== E ||
    t[17] !== h ||
    t[18] !== m ||
    t[19] !== F
  ) {
    if (((I = [...F]), N && A.visibleCount > te && !w && !A.isForceExpanded)) {
      let e;
      t[21] === E
        ? (e = t[22])
        : ((e = () => {
            E(!0);
          }),
          (t[21] = E),
          (t[22] = e));
      let n;
      (t[23] !== m || t[24] !== e
        ? ((n = {
            key: `show-more`,
            className: `px-8 py-1`,
            node: (0, Z.jsx)(W, {
              className: `-ml-2 text-token-description-foreground hover:text-token-foreground`,
              color: `ghostMuted`,
              size: `default`,
              onClick: e,
              children: m,
            }),
          }),
          (t[23] = m),
          (t[24] = e),
          (t[25] = n))
        : (n = t[25]),
        I.push(n));
    }
    if (N && A.visibleCount > te && w && !A.isForceExpanded) {
      let e;
      t[26] === E
        ? (e = t[27])
        : ((e = () => {
            E(!1);
          }),
          (t[26] = E),
          (t[27] = e));
      let n;
      (t[28] !== h || t[29] !== e
        ? ((n = {
            key: `show-less`,
            className: `px-8 py-1`,
            node: (0, Z.jsx)(W, {
              className: `-ml-2 text-token-description-foreground hover:text-token-foreground`,
              color: `ghostMuted`,
              size: `default`,
              onClick: e,
              children: h,
            }),
          }),
          (t[28] = h),
          (t[29] = e),
          (t[30] = n))
        : (n = t[30]),
        I.push(n));
    }
    ((t[12] = N),
      (t[13] = w),
      (t[14] = te),
      (t[15] = A),
      (t[16] = E),
      (t[17] = h),
      (t[18] = m),
      (t[19] = F),
      (t[20] = I));
  } else I = t[20];
  if (y) {
    let e;
    return (
      t[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(`div`, {
            className: `flex items-center justify-center py-4`,
            children: (0, Z.jsx)(ae, {}),
          })),
          (t[31] = e))
        : (e = t[31]),
      e
    );
  }
  if (n.length === 0 && s) {
    let e;
    return (
      t[32] !== s || t[33] !== c
        ? ((e = (0, Z.jsx)(`div`, { className: c, children: s })),
          (t[32] = s),
          (t[33] = c),
          (t[34] = e))
        : (e = t[34]),
      e
    );
  }
  let L;
  t[35] === v
    ? (L = t[36])
    : ((L = D(`isolate flex flex-col [contain:layout_paint]`, v)),
      (t[35] = v),
      (t[36] = L));
  let R = a == null ? void 0 : M,
    ne,
    z;
  t[37] === f
    ? ((ne = t[38]), (z = t[39]))
    : ((z = (e) =>
        f?.beforeThreadKey != null && e.threadKey === f.beforeThreadKey
          ? (0, Z.jsx)(ot, {})
          : null),
      (ne = f != null && f.beforeThreadKey == null ? (0, Z.jsx)(ot, {}) : null),
      (t[37] = f),
      (t[38] = ne),
      (t[39] = z));
  let B;
  t[40] !== u?.disableHoverCard ||
  t[41] !== u?.hideRemoteHostEnvIcon ||
  t[42] !== u?.isGrouped ||
  t[43] !== u?.onActivateGroup ||
  t[44] !== u?.onStartNewConversation ||
  t[45] !== u?.showPinActionOnHover ||
  t[46] !== u?.showRemoteActionsMenu ||
  t[47] !== x
    ? ((B = (e, t) =>
        (0, Z.jsx)(Dt, {
          threadKey: e.threadKey,
          disableHoverCard: u?.disableHoverCard,
          isGrouped: u?.isGrouped,
          hideRemoteHostEnvIcon: u?.hideRemoteHostEnvIcon,
          onArchiveStart: t.onArchiveStart,
          onArchiveSuccess: t.onArchiveSuccess,
          onArchiveError: t.onArchiveError,
          onActivateGroup: u?.onActivateGroup,
          onStartNewConversation: u?.onStartNewConversation,
          showRemoteActionsMenu: u?.showRemoteActionsMenu,
          showPinActionOnHover: u?.showPinActionOnHover,
          shortcutLabel: x?.get(e.threadKey),
        })),
      (t[40] = u?.disableHoverCard),
      (t[41] = u?.hideRemoteHostEnvIcon),
      (t[42] = u?.isGrouped),
      (t[43] = u?.onActivateGroup),
      (t[44] = u?.onStartNewConversation),
      (t[45] = u?.showPinActionOnHover),
      (t[46] = u?.showRemoteActionsMenu),
      (t[47] = x),
      (t[48] = B))
    : (B = t[48]);
  let V;
  t[49] !== r ||
  t[50] !== i ||
  t[51] !== I ||
  t[52] !== A.listEntries ||
  t[53] !== ne ||
  t[54] !== B ||
  t[55] !== R ||
  t[56] !== z
    ? ((V = (0, Z.jsx)(ct, {
        items: A.listEntries,
        getKey: Lt,
        ariaLabel: r,
        itemClassName: i,
        itemWrapper: R,
        renderBeforeItem: z,
        afterItemsNode: ne,
        footerItems: I,
        renderRow: B,
      })),
      (t[49] = r),
      (t[50] = i),
      (t[51] = I),
      (t[52] = A.listEntries),
      (t[53] = ne),
      (t[54] = B),
      (t[55] = R),
      (t[56] = z),
      (t[57] = V))
    : (V = t[57]);
  let H;
  return (
    t[58] !== V || t[59] !== L
      ? ((H = (0, Z.jsx)(`div`, { className: L, children: V })),
        (t[58] = V),
        (t[59] = L),
        (t[60] = H))
      : (H = t[60]),
    H
  );
}
function Lt(e) {
  return e.threadKey;
}
export {
  dt as a,
  rt as c,
  gt as i,
  it as l,
  Pt as n,
  ot as o,
  Ft as r,
  at as s,
  It as t,
};
//# sourceMappingURL=sidebar-thread-section-rMlUTJ-C.js.map
