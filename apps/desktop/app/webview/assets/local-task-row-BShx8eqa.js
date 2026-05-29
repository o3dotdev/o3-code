import { s as e } from "./chunk-Bj-mKKzh.js";
import { H as t, U as n } from "./src-C.js";
import {
  C as r,
  E as i,
  La as a,
  T as o,
  Va as s,
  Xs as c,
  _t as l,
  bt as u,
  do as d,
  eo as f,
  g as p,
  h as m,
  ii as h,
  st as g,
  w as _,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as v, t as y } from "./jsx-runtime.js";
import { t as b } from "./clsx-BcPLHiun.js";
import {
  G as ee,
  L as x,
  S as te,
  U as S,
  V as ne,
  X as re,
  Y as C,
  w,
  wt as ie,
  y as T,
} from "./setting-storage.js";
import { m as ae } from "./chunk-LFPYN7LY.js";
import { t as E } from "./branch.js";
import { t as oe } from "./request-DWZTrEAr.js";
import { r as D } from "./toast-signal.js";
import { t as O } from "./tooltip-CDzchJxN.js";
import { t as k } from "./button.js";
import { t as se } from "./spinner.js";
import { t as ce } from "./use-codex-home.js";
import { n as le } from "./local-conversation-title-signals-bVA-f9H8.js";
import { t as A } from "./info-B8GAwpK6.js";
import { t as j } from "./with-window.js";
import { t as ue } from "./folder.js";
import { t as de } from "./use-navigate-to-local-conversation.js";
import { n as fe, t as pe } from "./local-task-row-signals-BzazYVei.js";
import { t as me } from "./context-menu.js";
import { t as he } from "./clock-BflmlnpZ.js";
import { r as ge } from "./thread-actions.js";
import { t as M } from "./archive-DxqnmQgI.js";
import { t as N } from "./format-relative-date-time.js";
import { t as P } from "./worktree-D_6WAQVb.js";
import { a as F, i as I, r as L, t as R } from "./thread-env-icon.js";
import { t as z } from "./workspace-root-icon.js";
import { t as B } from "./warning.js";
import { t as _e } from "./use-is-background-subagents-enabled-B.js";
import { t as ve } from "./use-git-current-branch.js";
import { t as V } from "./get-project-name.js";
var H = ie(),
  U = y();
function ye(e) {
  let t = (0, H.c)(4),
    { onOpenSettings: n } = e;
  switch (`electron`) {
    case `chrome-extension`:
    case `extension`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(S, {
              id: `codex.archiveInfo.extension`,
              defaultMessage: `View archived chats in your .codex folder.`,
              description: `Info message shown after archiving a Codex conversation or task in the extension`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `browser`:
    case `electron`: {
      let e;
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(S, {
            id: `codex.archiveInfo.settingsLink`,
            defaultMessage: `Settings`,
            description: `Link label to open the archived chats settings page`,
          })),
          (t[1] = e))
        : (e = t[1]);
      let r;
      return (
        t[2] === n
          ? (r = t[3])
          : ((r = (0, U.jsx)(S, {
              id: `codex.archiveInfo.electron`,
              defaultMessage: `View archived chats in {settingsLink}`,
              description: `Info message shown after archiving a Codex conversation or task in the electron app`,
              values: {
                settingsLink: (0, U.jsx)(`button`, {
                  className: `text-token-link underline-offset-2 hover:underline`,
                  type: `button`,
                  onClick: n,
                  children: e,
                }),
              },
            })),
            (t[2] = n),
            (t[3] = r)),
        r
      );
    }
  }
}
function be(e) {
  return (
    e === `worktree` ||
    e === `cloud` ||
    e === `remote` ||
    e === `remote-worktree`
  );
}
function xe(e) {
  let t = (0, H.c)(4),
    { envType: n } = e;
  switch (n) {
    case `worktree`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(S, {
              id: `codex.taskRowLayout.hoverCard.worktree`,
              defaultMessage: `Worktree`,
              description: `Environment label shown in a sidebar row hover card`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `cloud`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(S, {
              id: `codex.taskRowLayout.hoverCard.cloudTask`,
              defaultMessage: `Cloud task`,
              description: `Environment label shown in a sidebar row hover card`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `remote`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(S, {
              id: `codex.taskRowLayout.hoverCard.remote`,
              defaultMessage: `Remote`,
              description: `Environment label shown in a sidebar row hover card`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `remote-worktree`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, U.jsx)(S, {
              id: `codex.taskRowLayout.hoverCard.remoteWorktree`,
              defaultMessage: `Remote worktree`,
              description: `Environment label shown in a sidebar row hover card`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function Se(e) {
  let t = (0, H.c)(21),
    {
      envTooltip: n,
      envType: r,
      className: i,
      hostId: a,
      disableTooltip: o,
    } = e,
    s = o === void 0 ? !1 : o,
    c = be(r) ? r : null;
  if (!c) return null;
  let l = n != null && n !== ``,
    u = s || l,
    d;
  bb0: switch (c) {
    case `remote`: {
      if (a == null) return null;
      let e;
      (t[0] !== i || t[1] !== u || t[2] !== a
        ? ((e = (0, U.jsx)(L, { className: i, disableTooltip: u, hostId: a })),
          (t[0] = i),
          (t[1] = u),
          (t[2] = a),
          (t[3] = e))
        : (e = t[3]),
        (d = e));
      break bb0;
    }
    case `remote-worktree`: {
      if (a == null) return null;
      let e;
      (t[4] !== i || t[5] !== u || t[6] !== a
        ? ((e = (0, U.jsx)(I, { className: i, disableTooltip: u, hostId: a })),
          (t[4] = i),
          (t[5] = u),
          (t[6] = a),
          (t[7] = e))
        : (e = t[7]),
        (d = e));
      break bb0;
    }
    case `worktree`: {
      let e;
      (t[8] !== i || t[9] !== u
        ? ((e = (0, U.jsx)(F, { className: i, disableTooltip: u })),
          (t[8] = i),
          (t[9] = u),
          (t[10] = e))
        : (e = t[10]),
        (d = e));
      break bb0;
    }
    case `cloud`: {
      let e;
      (t[11] !== i || t[12] !== u
        ? ((e = (0, U.jsx)(R, { className: i, disableTooltip: u })),
          (t[11] = i),
          (t[12] = u),
          (t[13] = e))
        : (e = t[13]),
        (d = e));
    }
  }
  let f;
  t[14] !== s || t[15] !== n || t[16] !== l || t[17] !== d
    ? ((f = l && !s ? (0, U.jsx)(O, { tooltipContent: n, children: d }) : d),
      (t[14] = s),
      (t[15] = n),
      (t[16] = l),
      (t[17] = d),
      (t[18] = f))
    : (f = t[18]);
  let p = f,
    m;
  return (
    t[19] === p
      ? (m = t[20])
      : ((m = (0, U.jsx)(`span`, {
          className: `flex shrink-0 items-center align-middle text-sm`,
          children: p,
        })),
        (t[19] = p),
        (t[20] = m)),
    m
  );
}
var W = e(v(), 1);
function Ce(e) {
  let t = (0, H.c)(11),
    { hideProjectRow: n, projectLabel: r, sections: i, threadTitle: a } = e,
    o = n === void 0 ? !1 : n,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s =
        a != null && a !== ``
          ? (0, U.jsx)(`div`, {
              className: `truncate pb-0.5 text-base leading-6 font-medium text-token-foreground`,
              children: a,
            })
          : null),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] !== o || t[3] !== r
    ? ((c =
        !o && r != null && r !== ``
          ? (0, U.jsx)(K, {
              row: {
                id: `project`,
                icon: (0, U.jsx)(z, {
                  isCodexWorktree: !1,
                  isGitRepository: !1,
                  isOpen: !0,
                }),
                label: r,
              },
            })
          : null),
      (t[2] = o),
      (t[3] = r),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === i ? (l = t[6]) : ((l = i.map(we)), (t[5] = i), (t[6] = l));
  let u;
  return (
    t[7] !== s || t[8] !== c || t[9] !== l
      ? ((u = (0, U.jsxs)(`div`, {
          className: `flex w-fit max-w-[min(20rem,calc(100vw-16px))] min-w-56 flex-col gap-1 px-row-x py-1.5 text-token-foreground`,
          children: [s, c, l],
        })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function we(e) {
  return (0, U.jsx)(
    `div`,
    { className: `flex min-w-0 flex-col gap-1`, children: e.rows.map(G) },
    e.id,
  );
}
function G(e) {
  return (0, U.jsx)(K, { row: e }, e.id);
}
function K(e) {
  let t = (0, H.c)(16),
    { row: n } = e,
    r;
  t[0] === n.icon
    ? (r = t[1])
    : ((r = (0, W.cloneElement)(n.icon, {
        className: b(`icon-xs`, n.icon.props.className),
      })),
      (t[0] = n.icon),
      (t[1] = r));
  let i = r,
    a = n.allowWrap ? `items-start` : `h-5 items-center`,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = b(`flex min-w-0 gap-1.5 text-sm leading-5`, a)),
      (t[2] = a),
      (t[3] = o));
  let s;
  t[4] === i
    ? (s = t[5])
    : ((s = (0, U.jsx)(`span`, {
        className: `flex h-5 w-4 shrink-0 items-center justify-center text-token-description-foreground`,
        children: i,
      })),
      (t[4] = i),
      (t[5] = s));
  let c = n.allowWrap
      ? `whitespace-normal`
      : `overflow-hidden text-ellipsis whitespace-nowrap`,
    l =
      n.tone === `danger`
        ? `text-token-editor-warning-foreground`
        : `text-token-foreground`,
    u;
  t[6] !== c || t[7] !== l
    ? ((u = b(`block min-w-0 flex-1 leading-5`, c, l)),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] !== n.label || t[10] !== u
    ? ((d = (0, U.jsx)(`span`, { className: u, children: n.label })),
      (t[9] = n.label),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== o || t[13] !== s || t[14] !== d
      ? ((f = (0, U.jsxs)(`div`, { className: o, children: [s, d] })),
        (t[12] = o),
        (t[13] = s),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function Te(e) {
  let t = (0, H.c)(4),
    { statusState: n } = e;
  if ((n.unreadCount ?? 0) > 0) {
    let e = n.unreadCount ?? 0,
      r;
    return (
      t[0] === e
        ? (r = t[1])
        : ((r = (0, U.jsx)(Ee, { count: e })), (t[0] = e), (t[1] = r)),
      r
    );
  }
  if (n.type === `loading`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(De, {})), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (n.unread === !0) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(q, {})), (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  return null;
}
function Ee(e) {
  let t = (0, H.c)(3),
    { count: n } = e,
    r = n > 99 ? `99+` : n,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = {
        backgroundColor: `color-mix(in srgb, var(--vscode-textLink-foreground) 18%, transparent)`,
        boxShadow: `inset 0 0 0 1px color-mix(in srgb, var(--vscode-textLink-foreground) 72%, transparent)`,
        color: `var(--vscode-textLink-foreground)`,
      }),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] === r
      ? (a = t[2])
      : ((a = (0, U.jsx)(`div`, {
          className: `relative flex h-5 min-w-5 shrink-0 items-center justify-center`,
          children: (0, U.jsx)(`span`, {
            className: `flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] leading-none font-semibold`,
            style: i,
            children: r,
          }),
        })),
        (t[1] = r),
        (t[2] = a)),
    a
  );
}
function q() {
  let e = (0, H.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, U.jsx)(`div`, {
          className: `relative flex size-5 shrink-0 items-center justify-center text-token-description-foreground`,
          children: (0, U.jsx)(`span`, {
            className: `icon-xs relative scale-50`,
            children: (0, U.jsx)(`span`, {
              className: `absolute inset-0 rounded-full`,
              style: { backgroundColor: `var(--vscode-textLink-foreground)` },
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function De() {
  let e = (0, H.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, U.jsx)(`div`, {
          className: `relative flex size-5 shrink-0 items-center justify-center text-token-foreground/70`,
          children: (0, U.jsx)(se, {
            className: `icon-xs shrink-0`,
            animationDurationMs: 2e3,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Oe = `icon-2xs`,
  ke = `absolute right-0 top-0 z-10 flex h-full items-center justify-center mr-0.5 pr-0.5`;
function Ae(e) {
  let t = (0, H.c)(147),
    {
      title: n,
      hoverCardContent: r,
      chips: i,
      iconBadges: a,
      metaContent: o,
      overlayMetaContent: s,
      metaState: c,
      hideInlineBadgesOnHover: l,
      isActive: u,
      onClick: d,
      onDoubleClick: f,
      onArchive: p,
      archiveAriaLabel: m,
      archiveConfirmLabel: h,
      statusState: g,
      statusIndicatorReplacesMeta: _,
      useStableTrailingRail: v,
      envType: y,
      envTooltip: ee,
      disableEnvTooltip: x,
      pulseEnvIcon: te,
      envIconLocation: S,
      disabled: ne,
      blurOnClick: re,
      idleIndicatorNode: C,
      indicatorRestNode: w,
      indicatorHoverNode: ie,
      reserveLeadingSlot: T,
      additionalHoverActionCount: ae,
      priorityIndicatorNode: E,
      onContextMenu: oe,
      renderActions: D,
      onHoverCardOpenChange: k,
      metaHidden: se,
      rowContentClassName: ce,
      className: le,
      hostId: A,
      dataAttributes: j,
    } = e,
    ue;
  t[0] === i
    ? (ue = t[1])
    : ((ue = i === void 0 ? [] : i), (t[0] = i), (t[1] = ue));
  let de = ue,
    fe;
  t[2] === a
    ? (fe = t[3])
    : ((fe = a === void 0 ? [] : a), (t[2] = a), (t[3] = fe));
  let pe = fe,
    me = c === void 0 ? `default` : c,
    he = l === void 0 ? !1 : l,
    ge = u === void 0 ? !1 : u,
    M = _ === void 0 ? !1 : _,
    N = v === void 0 ? !1 : v,
    P = S === void 0 ? `end` : S,
    F = ne === void 0 ? !1 : ne,
    I = re === void 0 ? !1 : re,
    L = T === void 0 ? !1 : T,
    R = ae === void 0 ? 0 : ae,
    z = se === void 0 ? !1 : se,
    { type: B, unread: _e } = g,
    ve = _e === void 0 ? !1 : _e,
    [V, ye] = (0, W.useState)(!1),
    [be, xe] = (0, W.useState)(!1),
    [Ce, we] = (0, W.useState)(!1),
    G = typeof p == `function`,
    K = s != null,
    Ee = V && G,
    q = Ee && D == null,
    De = Ee && D != null,
    Oe = G && !V,
    ke = !q,
    Ae = R + (G ? 1 : 0),
    J =
      D == null
        ? `group-focus-within:opacity-0 group-hover:opacity-0`
        : `group-hover:opacity-0`,
    Y = M && (B === `loading` || ve),
    Ie = C ?? w,
    X;
  t[4] !== E || t[5] !== q || t[6] !== J || t[7] !== Y || t[8] !== B
    ? ((X =
        B === `error` && !q && E == null && !Y
          ? (0, U.jsx)(Me, { statusType: B, className: J })
          : null),
      (t[4] = E),
      (t[5] = q),
      (t[6] = J),
      (t[7] = Y),
      (t[8] = B),
      (t[9] = X))
    : (X = t[9]);
  let Le = X,
    Z = null;
  if (ke && (!Y || (N && !K)) && (!V || D != null) && o != null) {
    let e = N && !K && `shrink-0`,
      n;
    t[10] !== J || t[11] !== e
      ? ((n = b(J, e)), (t[10] = J), (t[11] = e), (t[12] = n))
      : (n = t[12]);
    let r;
    (t[13] !== o || t[14] !== me || t[15] !== n
      ? ((r = (0, U.jsx)(Ne, { className: n, content: o, metaState: me })),
        (t[13] = o),
        (t[14] = me),
        (t[15] = n),
        (t[16] = r))
      : (r = t[16]),
      (Z = r));
  }
  let Re = E ?? Le ?? Ie,
    Q = L || Re != null || ie != null,
    ze = Re,
    Be = E == null ? ie : null,
    Ve = B !== `loading` && !ve,
    He;
  t[17] === G
    ? (He = t[18])
    : ((He = () => {
        G && ye(!0);
      }),
      (t[17] = G),
      (t[18] = He));
  let $ = He,
    Ue;
  t[19] === p
    ? (Ue = t[20])
    : ((Ue = () => {
        (ye(!1), p?.());
      }),
      (t[19] = p),
      (t[20] = Ue));
  let We = Ue,
    Ge;
  t[21] !== m || t[22] !== $ || t[23] !== Oe || t[24] !== N
    ? ((Ge = Oe
        ? (0, U.jsx)(Fe, {
            archiveAriaLabel: m,
            onArchive: $,
            useStableTrailingRail: N,
          })
        : null),
      (t[21] = m),
      (t[22] = $),
      (t[23] = Oe),
      (t[24] = N),
      (t[25] = Ge))
    : (Ge = t[25]);
  let Ke = Ge,
    qe;
  t[26] !== Q || t[27] !== Be || t[28] !== ze || t[29] !== Ve
    ? ((qe = Q
        ? (0, U.jsx)(`div`, {
            className: `w-4`,
            children: (0, U.jsxs)(`div`, {
              className: `relative flex items-center justify-center`,
              children: [
                ze
                  ? (0, U.jsx)(`span`, {
                      className: b(
                        `flex items-center justify-center`,
                        Be &&
                          (Ve
                            ? `group-focus-within:opacity-0 group-hover:opacity-0`
                            : `group-hover:opacity-0`),
                      ),
                      children: ze,
                    })
                  : null,
                Be
                  ? (0, U.jsx)(`span`, {
                      className: b(
                        `flex items-center justify-center opacity-0 pointer-events-none`,
                        Ve
                          ? `group-focus-within:opacity-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-hover:pointer-events-auto`
                          : `group-hover:opacity-100 group-hover:pointer-events-auto`,
                        ze ? `absolute inset-0` : `relative`,
                      ),
                      children: Be,
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[26] = Q),
      (t[27] = Be),
      (t[28] = ze),
      (t[29] = Ve),
      (t[30] = qe))
    : (qe = t[30]);
  let Je = qe,
    Ye;
  t[31] !== q || t[32] !== g || t[33] !== B || t[34] !== ve
    ? ((Ye =
        !q && (B === `loading` || ve)
          ? (0, U.jsx)(Te, { statusState: g })
          : null),
      (t[31] = q),
      (t[32] = g),
      (t[33] = B),
      (t[34] = ve),
      (t[35] = Ye))
    : (Ye = t[35]);
  let Xe = Ye,
    Ze;
  t[36] !== Ke ||
  t[37] !== G ||
  t[38] !== We ||
  t[39] !== V ||
  t[40] !== K ||
  t[41] !== D ||
  t[42] !== $
    ? ((Ze = K
        ? null
        : D
          ? D({
              requestArchive: $,
              confirmArchive: We,
              confirmingArchive: V,
              canArchive: G,
            })
          : Ke),
      (t[36] = Ke),
      (t[37] = G),
      (t[38] = We),
      (t[39] = V),
      (t[40] = K),
      (t[41] = D),
      (t[42] = $),
      (t[43] = Ze))
    : (Ze = t[43]);
  let Qe = Ze,
    $e;
  t[44] !== Qe || t[45] !== D
    ? (($e =
        D != null && Qe != null
          ? (0, U.jsx)(`div`, {
              className: `contents`,
              onPointerEnter: () => {
                xe(!0);
              },
              onPointerLeave: () => {
                xe(!1);
              },
              children: Qe,
            })
          : Qe),
      (t[44] = Qe),
      (t[45] = D),
      (t[46] = $e))
    : ($e = t[46]);
  let et = $e,
    tt;
  t[47] !== Qe ||
  t[48] !== K ||
  t[49] !== Z ||
  t[50] !== J ||
  t[51] !== Xe ||
  t[52] !== Y ||
  t[53] !== N
    ? ((tt = Xe
        ? (0, U.jsx)(`span`, {
            className: b(
              `flex size-5 shrink-0 items-center justify-center -mr-1`,
              N && Y && Z != null && `absolute right-0`,
              K && `invisible`,
              Qe != null && J,
            ),
            children: Xe,
          })
        : null),
      (t[47] = Qe),
      (t[48] = K),
      (t[49] = Z),
      (t[50] = J),
      (t[51] = Xe),
      (t[52] = Y),
      (t[53] = N),
      (t[54] = tt))
    : (tt = t[54]);
  let nt = tt,
    rt;
  t[55] !== x || t[56] !== ee || t[57] !== y || t[58] !== A || t[59] !== te
    ? ((rt =
        y === `worktree` ||
        y === `cloud` ||
        y === `remote` ||
        y === `remote-worktree`
          ? (0, U.jsx)(Se, {
              className: te ? `animate-pulse` : void 0,
              disableTooltip: x,
              envTooltip: ee,
              envType: y,
              hostId: A,
            })
          : null),
      (t[55] = x),
      (t[56] = ee),
      (t[57] = y),
      (t[58] = A),
      (t[59] = te),
      (t[60] = rt))
    : (rt = t[60]);
  let it = rt,
    at = ke && (K || Z || Xe || q),
    ot;
  Qe != null &&
    (D != null || !N || !at) &&
    (Ae >= 3
      ? (ot =
          D == null
            ? `group-focus-within:min-w-20 group-hover:min-w-20`
            : `group-hover:min-w-20 group-has-[:focus-visible]:min-w-20`)
      : Ae === 2
        ? (ot =
            D == null
              ? `group-focus-within:min-w-12 group-hover:min-w-12`
              : `group-hover:min-w-12 group-has-[:focus-visible]:min-w-12`)
        : Ae === 1 &&
          (ot =
            D == null
              ? `group-focus-within:min-w-5 group-hover:min-w-5`
              : `group-hover:min-w-5 group-has-[:focus-visible]:min-w-5`));
  let st;
  t[61] !== V || t[62] !== F || t[63] !== d
    ? ((st = (e) => {
        F ||
          V ||
          e.defaultPrevented ||
          (e.currentTarget === e.target &&
            (e.key === `Enter` || e.key === ` `) &&
            (e.preventDefault(), d()));
      }),
      (t[61] = V),
      (t[62] = F),
      (t[63] = d),
      (t[64] = st))
    : (st = t[64]);
  let ct = st,
    lt;
  t[65] !== I || t[66] !== V || t[67] !== F || t[68] !== d
    ? ((lt = (e) => {
        if (!F) {
          if (V) {
            (e.preventDefault(), e.stopPropagation());
            return;
          }
          e.defaultPrevented || (d(), I && e.currentTarget.blur());
        }
      }),
      (t[65] = I),
      (t[66] = V),
      (t[67] = F),
      (t[68] = d),
      (t[69] = lt))
    : (lt = t[69]);
  let ut = lt,
    dt;
  t[70] !== V || t[71] !== F || t[72] !== f
    ? ((dt = (e) => {
        if (!F) {
          if (V) {
            (e.preventDefault(), e.stopPropagation());
            return;
          }
          e.defaultPrevented || f?.(e);
        }
      }),
      (t[70] = V),
      (t[71] = F),
      (t[72] = f),
      (t[73] = dt))
    : (dt = t[73]);
  let ft = dt,
    pt = F && `pointer-events-none opacity-60`,
    mt = ge && `bg-token-list-hover-background`,
    ht;
  t[74] !== le || t[75] !== pt || t[76] !== mt
    ? ((ht = b(
        `group relative h-token-nav-row cursor-interaction rounded-lg px-row-x py-row-y text-sm hover:bg-token-list-hover-background focus-visible:outline-offset-[-2px]`,
        pt,
        mt,
        le,
      )),
      (t[74] = le),
      (t[75] = pt),
      (t[76] = mt),
      (t[77] = ht))
    : (ht = t[77]);
  let gt = ht,
    _t = r != null && r !== !1 && r !== ``,
    vt = typeof n == `string` || typeof n == `number` ? String(n) : void 0,
    yt;
  t[78] !== vt || t[79] !== n
    ? ((yt = (0, U.jsx)(
        `span`,
        {
          className: `min-w-0 flex-1 truncate select-none`,
          "data-thread-title": !0,
          draggable: !1,
          children: n,
        },
        vt,
      )),
      (t[78] = vt),
      (t[79] = n),
      (t[80] = yt))
    : (yt = t[80]);
  let bt = yt,
    xt;
  t[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xt = () => {
        (ye(!1), xe(!1));
      }),
      (t[81] = xt))
    : (xt = t[81]);
  let St = F ? -1 : 0,
    Ct = ge ? `page` : void 0,
    wt =
      De &&
      `[mask-image:linear-gradient(to_left,transparent_0,transparent_72px,black_80px)]`,
    Tt;
  t[82] === wt
    ? (Tt = t[83])
    : ((Tt = b(`flex h-full w-full items-center text-sm leading-4`, wt)),
      (t[82] = wt),
      (t[83] = Tt));
  let Et = Je != null && `ml-1.5`,
    Dt;
  t[84] === Et
    ? (Dt = t[85])
    : ((Dt = b(`flex min-w-0 flex-1 items-center gap-2 pl-0.5`, Et)),
      (t[84] = Et),
      (t[85] = Dt));
  let Ot = P === `start` && it,
    kt = ge ? `text-[var(--vscode-foreground)]` : `text-token-foreground`,
    At;
  t[86] !== ce || t[87] !== kt
    ? ((At = b(
        `flex min-w-0 flex-1 self-stretch items-center gap-2 text-base leading-5`,
        kt,
        ce,
      )),
      (t[86] = ce),
      (t[87] = kt),
      (t[88] = At))
    : (At = t[88]);
  let jt = P === `middle` && it,
    Mt;
  t[89] !== At || t[90] !== jt || t[91] !== bt
    ? ((Mt = (0, U.jsxs)(`div`, {
        className: At,
        "data-thread-title-trigger": !0,
        children: [bt, jt],
      })),
      (t[89] = At),
      (t[90] = jt),
      (t[91] = bt),
      (t[92] = Mt))
    : (Mt = t[92]);
  let Nt = P === `end` && !q ? it : null,
    Pt = he ? J : void 0,
    Ft;
  t[93] !== de || t[94] !== pe || t[95] !== q || t[96] !== Nt || t[97] !== Pt
    ? ((Ft = (0, U.jsx)(je, {
        chips: de,
        envIconNode: Nt,
        iconBadges: pe,
        hideInlineBadges: q,
        className: Pt,
      })),
      (t[93] = de),
      (t[94] = pe),
      (t[95] = q),
      (t[96] = Nt),
      (t[97] = Pt),
      (t[98] = Ft))
    : (Ft = t[98]);
  let It;
  t[99] !== Dt || t[100] !== Ot || t[101] !== Mt || t[102] !== Ft
    ? ((It = (0, U.jsxs)(`div`, { className: Dt, children: [Ot, Mt, Ft] })),
      (t[99] = Dt),
      (t[100] = Ot),
      (t[101] = Mt),
      (t[102] = Ft),
      (t[103] = It))
    : (It = t[103]);
  let Lt = N && `relative mr-[var(--task-row-trailing-inset)]`,
    Rt = at && `min-w-[26px]`,
    zt;
  t[104] !== ot || t[105] !== Lt || t[106] !== Rt
    ? ((zt = b(`ml-[3px] flex items-center justify-end gap-1`, Lt, Rt, ot)),
      (t[104] = ot),
      (t[105] = Lt),
      (t[106] = Rt),
      (t[107] = zt))
    : (zt = t[107]);
  let Bt;
  t[108] !== h ||
  t[109] !== V ||
  t[110] !== K ||
  t[111] !== z ||
  t[112] !== Z ||
  t[113] !== p ||
  t[114] !== s ||
  t[115] !== D ||
  t[116] !== q ||
  t[117] !== nt ||
  t[118] !== Y ||
  t[119] !== N
    ? ((Bt = q
        ? (0, U.jsx)(Pe, {
            label: h,
            onConfirm: (e) => {
              (e.stopPropagation(), ye(!1), p?.());
            },
          })
        : (0, U.jsxs)(U.Fragment, {
            children: [
              s,
              Z &&
                (0, U.jsx)(`div`, {
                  className: b(((N && Y) || z || K || (D && V)) && `invisible`),
                  children: Z,
                }),
              nt,
            ],
          })),
      (t[108] = h),
      (t[109] = V),
      (t[110] = K),
      (t[111] = z),
      (t[112] = Z),
      (t[113] = p),
      (t[114] = s),
      (t[115] = D),
      (t[116] = q),
      (t[117] = nt),
      (t[118] = Y),
      (t[119] = N),
      (t[120] = Bt))
    : (Bt = t[120]);
  let Vt;
  t[121] !== zt || t[122] !== Bt
    ? ((Vt = (0, U.jsx)(`div`, { className: zt, children: Bt })),
      (t[121] = zt),
      (t[122] = Bt),
      (t[123] = Vt))
    : (Vt = t[123]);
  let Ht;
  t[124] !== Je || t[125] !== Tt || t[126] !== It || t[127] !== Vt
    ? ((Ht = (0, U.jsxs)(`div`, { className: Tt, children: [Je, It, Vt] })),
      (t[124] = Je),
      (t[125] = Tt),
      (t[126] = It),
      (t[127] = Vt),
      (t[128] = Ht))
    : (Ht = t[128]);
  let Ut;
  t[129] !== gt ||
  t[130] !== j ||
  t[131] !== ct ||
  t[132] !== ut ||
  t[133] !== ft ||
  t[134] !== et ||
  t[135] !== oe ||
  t[136] !== St ||
  t[137] !== Ct ||
  t[138] !== Ht
    ? ((Ut = (0, U.jsxs)(`div`, {
        ...j,
        className: gt,
        onClick: ut,
        onDoubleClick: ft,
        onContextMenu: oe,
        onPointerLeave: xt,
        onKeyDown: ct,
        role: `button`,
        tabIndex: St,
        "aria-current": Ct,
        children: [et, Ht],
      })),
      (t[129] = gt),
      (t[130] = j),
      (t[131] = ct),
      (t[132] = ut),
      (t[133] = ft),
      (t[134] = et),
      (t[135] = oe),
      (t[136] = St),
      (t[137] = Ct),
      (t[138] = Ht),
      (t[139] = Ut))
    : (Ut = t[139]);
  let Wt = Ut;
  if (!_t) return Wt;
  let Gt = be && !Ce,
    Kt;
  t[140] === k
    ? (Kt = t[141])
    : ((Kt = (e) => {
        (we(e), k?.(e));
      }),
      (t[140] = k),
      (t[141] = Kt));
  let qt;
  return (
    t[142] !== r || t[143] !== Wt || t[144] !== Gt || t[145] !== Kt
      ? ((qt = (0, U.jsx)(O, {
          disabled: Gt,
          onOpenChange: Kt,
          side: `right`,
          align: `start`,
          alignOffset: 0,
          sideOffset: 2,
          variant: `hoverCard`,
          tooltipContent: r,
          children: Wt,
        })),
        (t[142] = r),
        (t[143] = Wt),
        (t[144] = Gt),
        (t[145] = Kt),
        (t[146] = qt))
      : (qt = t[146]),
    qt
  );
}
function je(e) {
  let t = (0, H.c)(22),
    {
      className: n,
      chips: r,
      envIconNode: i,
      iconBadges: a,
      hideInlineBadges: o,
    } = e,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = r === void 0 ? [] : r), (t[0] = r), (t[1] = s));
  let c = s,
    l;
  t[2] === a
    ? (l = t[3])
    : ((l = a === void 0 ? [] : a), (t[2] = a), (t[3] = l));
  let u = l,
    d = o === void 0 ? !1 : o,
    f;
  t[4] === c ? (f = t[5]) : ((f = c.flatMap(Y)), (t[4] = c), (t[5] = f));
  let p = f,
    m;
  t[6] === u ? (m = t[7]) : ((m = u.flatMap(J)), (t[6] = u), (t[7] = m));
  let h = m,
    g;
  t[8] !== p || t[9] !== d
    ? ((g = d ? [] : p), (t[8] = p), (t[9] = d), (t[10] = g))
    : (g = t[10]);
  let _ = g;
  if (_.length === 0 && i == null && h.length === 0) return null;
  let v;
  t[11] === n
    ? (v = t[12])
    : ((v = b(`flex min-w-[24px] items-center justify-end gap-2`, n)),
      (t[11] = n),
      (t[12] = v));
  let y;
  t[13] === _
    ? (y = t[14])
    : ((y =
        _.length > 0
          ? (0, U.jsx)(`div`, {
              className: `flex items-center gap-1`,
              children: _,
            })
          : null),
      (t[13] = _),
      (t[14] = y));
  let ee;
  t[15] !== i || t[16] !== h
    ? ((ee =
        i != null || h.length > 0
          ? (0, U.jsxs)(`div`, {
              className: `flex items-center gap-1.5`,
              children: [h, i],
            })
          : null),
      (t[15] = i),
      (t[16] = h),
      (t[17] = ee))
    : (ee = t[17]);
  let x;
  return (
    t[18] !== y || t[19] !== ee || t[20] !== v
      ? ((x = (0, U.jsxs)(`div`, { className: v, children: [y, ee] })),
        (t[18] = y),
        (t[19] = ee),
        (t[20] = v),
        (t[21] = x))
      : (x = t[21]),
    x
  );
}
function J(e) {
  let {
    id: t,
    icon: n,
    ariaLabel: r,
    className: i,
    onClick: a,
    tooltipContent: o,
  } = e;
  if (!(0, W.isValidElement)(n)) return [];
  let s = (0, W.cloneElement)(n, { className: b(Oe, n.props.className) }),
    c =
      a == null
        ? (0, U.jsx)(
            `span`,
            {
              className: b(
                `flex shrink-0 items-center text-token-description-foreground`,
                i,
              ),
              children: s,
            },
            t,
          )
        : (0, U.jsx)(
            `button`,
            {
              type: `button`,
              className: b(
                `focus-visible:outline-token-focus-ring flex shrink-0 items-center justify-center rounded-md text-token-description-foreground hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2`,
                i,
              ),
              "aria-label": r,
              onClick: (e) => {
                (e.stopPropagation(), a());
              },
              children: s,
            },
            t,
          );
  return o != null && o !== ``
    ? [
        (0, U.jsx)(
          O,
          {
            tooltipContent: o,
            children: (0, U.jsx)(`span`, {
              className: b(`flex shrink-0 items-center`, i),
              children: c,
            }),
          },
          t,
        ),
      ]
    : [c];
}
function Y(e) {
  let { id: t, label: n } = e;
  return n == null
    ? []
    : [
        (0, U.jsx)(
          `span`,
          {
            className: `inline-flex max-w-[150px] items-center truncate rounded-full bg-token-charts-green/20 py-0.5 pr-2.5 pl-2 text-sm text-token-charts-green`,
            children: n,
          },
          t,
        ),
      ];
}
function Me(e) {
  let t = (0, H.c)(5),
    { className: n, statusType: r } = e;
  if (r !== `error`) return null;
  let i;
  t[0] === n
    ? (i = t[1])
    : ((i = b(
        `relative flex size-5 shrink-0 items-center justify-center text-token-description-foreground`,
        n,
      )),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, U.jsx)(A, {
        className: `icon-xs shrink-0 text-token-error-foreground`,
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === i
      ? (o = t[4])
      : ((o = (0, U.jsx)(`div`, { className: i, children: a })),
        (t[3] = i),
        (t[4] = o)),
    o
  );
}
function Ne(e) {
  let t = (0, H.c)(6),
    { className: n, content: r, metaState: i } = e;
  if (r == null) return null;
  let a =
      i === `loading` ? `loading-shimmer-pure-text min-w-[72px]` : `truncate`,
    o;
  t[0] !== n || t[1] !== a
    ? ((o = b(
        `text-token-description-foreground text-sm leading-4 empty:hidden tabular-nums overflow-visible`,
        a,
        `text-right`,
        n,
      )),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] !== r || t[4] !== o
      ? ((s = (0, U.jsx)(`div`, { className: o, children: r })),
        (t[3] = r),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function Pe(e) {
  let t = (0, H.c)(5),
    { label: n, onConfirm: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i =
        n ??
        (0, U.jsx)(S, {
          id: `codex.taskRowLayout.confirm`,
          defaultMessage: `Confirm`,
          description: `Confirmation button for archiving a task`,
        })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, U.jsx)(k, {
          size: `composerSm`,
          color: `danger`,
          className: `!h-auto !border-none !py-0`,
          onClick: r,
          children: i,
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Fe(e) {
  let t = (0, H.c)(11),
    { onArchive: n, archiveAriaLabel: r, useStableTrailingRail: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i ? { right: `var(--task-row-trailing-inset)` } : void 0),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === n
    ? (o = t[3])
    : ((o = (e) => {
        (e.stopPropagation(), n?.());
      }),
      (t[2] = n),
      (t[3] = o));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, U.jsx)(M, { className: `icon-xs` })), (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] !== r || t[6] !== o
    ? ((c = (0, U.jsx)(`button`, {
        type: `button`,
        className: `focus-visible:outline-token-focus-ring pointer-events-none flex h-5 w-5 items-center justify-center rounded-md opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-50 hover:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2`,
        onClick: o,
        "aria-label": r,
        children: s,
      })),
      (t[5] = r),
      (t[6] = o),
      (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] !== a || t[9] !== c
      ? ((l = (0, U.jsx)(`div`, { className: ke, style: a, children: c })),
        (t[8] = a),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function Ie(e) {
  let t = (0, H.c)(14),
    { onArchiveStart: n, onArchiveSuccess: r, onArchiveError: i } = e,
    [a, o] = (0, W.useState)(!1),
    s = n != null || r != null || i != null,
    c;
  t[0] !== n || t[1] !== s
    ? ((c = () => {
        s ? n?.() : o(!0);
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === r
    ? (u = t[4])
    : ((u = () => {
        r?.();
      }),
      (t[3] = r),
      (t[4] = u));
  let d = u,
    f;
  t[5] !== i || t[6] !== s
    ? ((f = () => {
        s ? i?.() : o(!1);
      }),
      (t[5] = i),
      (t[6] = s),
      (t[7] = f))
    : (f = t[7]);
  let p = f,
    m;
  return (
    t[8] !== a || t[9] !== l || t[10] !== p || t[11] !== d || t[12] !== s
      ? ((m = {
          archived: a,
          usesExternalArchiveHandling: s,
          beginArchive: l,
          handleArchiveSuccess: d,
          handleArchiveError: p,
        }),
        (t[8] = a),
        (t[9] = l),
        (t[10] = p),
        (t[11] = d),
        (t[12] = s),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function X(e) {
  let t = (0, H.c)(81),
    {
      task: n,
      onClose: r,
      onSelect: i,
      isActive: a,
      envIconLocation: o,
      useStableTrailingRail: s,
      statusIndicatorReplacesMeta: c,
      idleIndicatorNode: l,
      indicatorRestNode: u,
      indicatorHoverNode: d,
      reserveLeadingSlot: f,
      additionalHoverActionCount: p,
      renderActions: m,
      hideInlineBadgesOnHover: g,
      metaHidden: _,
      metaContent: v,
      overlayMetaContent: y,
      extraIconBadges: b,
      hoverCardProjectLabel: ne,
      hoverCardSections: C,
      hideHoverCardProjectRow: ie,
      contextMenuItems: T,
      onArchiveStart: E,
      onArchiveSuccess: O,
      onArchiveError: k,
      dataAttributes: se,
    } = e,
    ce = a === void 0 ? !1 : a,
    le = o === void 0 ? `end` : o,
    A = s === void 0 ? !1 : s,
    j = c === void 0 ? !1 : c,
    ue = f === void 0 ? !1 : f,
    de = p === void 0 ? 0 : p,
    fe = g === void 0 ? !1 : g,
    pe = _ === void 0 ? !1 : _,
    he = ie === void 0 ? !1 : ie,
    ge = re(te),
    M = ee(),
    P = ae(),
    F = x(),
    I,
    L,
    R;
  if (t[0] !== P || t[1] !== r || t[2] !== i || t[3] !== n) {
    L = () => {
      (i?.(), r(), P(`/remote/${I}`));
    };
    let { id: e, title: a } = n;
    ((R = a),
      (I = e),
      (t[0] = P),
      (t[1] = r),
      (t[2] = i),
      (t[3] = n),
      (t[4] = I),
      (t[5] = L),
      (t[6] = R));
  } else ((I = t[4]), (L = t[5]), (R = t[6]));
  let z = n.task_status_display?.latest_turn_status_display?.turn_status,
    B = z === `in_progress` || z === `pending`,
    _e = z === `failed`,
    ve = n.updated_at ?? n.created_at ?? null,
    V,
    be,
    W;
  t[7] !== _e || t[8] !== B || t[9] !== v || t[10] !== ve
    ? ((W = ve ? new Date(ve * 1e3) : null),
      (V = B ? `loading` : _e ? `error` : `idle`),
      (be = v ?? (W ? (0, U.jsx)(N, { dateString: W.toISOString() }) : null)),
      (t[7] = _e),
      (t[8] = B),
      (t[9] = v),
      (t[10] = ve),
      (t[11] = V),
      (t[12] = be),
      (t[13] = W))
    : ((V = t[11]), (be = t[12]), (W = t[13]));
  let we = be,
    G = W ? `default` : B ? `loading` : `default`,
    K = !B && !!W,
    Te;
  t[14] !== k || t[15] !== E || t[16] !== O
    ? ((Te = { onArchiveStart: E, onArchiveSuccess: O, onArchiveError: k }),
      (t[14] = k),
      (t[15] = E),
      (t[16] = O),
      (t[17] = Te))
    : (Te = t[17]);
  let {
      archived: Ee,
      usesExternalArchiveHandling: q,
      beginArchive: De,
      handleArchiveSuccess: Oe,
      handleArchiveError: ke,
    } = Ie(Te),
    je;
  t[18] === I
    ? (je = t[19])
    : ((je = () =>
        oe.safePost(`/wham/tasks/{task_id}/archive`, {
          parameters: { path: { task_id: I } },
        })),
      (t[18] = I),
      (t[19] = je));
  let J;
  t[20] !== Oe || t[21] !== I || t[22] !== P || t[23] !== F || t[24] !== ge
    ? ((J = () => {
        (Oe(),
          ge.get(D).info(
            (0, U.jsx)(ye, {
              onOpenSettings: () => {
                P(`/settings/data-controls`);
              },
            }),
            { id: `archive-task` },
          ),
          F.invalidateQueries({ queryKey: [`tasks`] }),
          F.invalidateQueries({ queryKey: [`task`, I] }));
      }),
      (t[20] = Oe),
      (t[21] = I),
      (t[22] = P),
      (t[23] = F),
      (t[24] = ge),
      (t[25] = J))
    : (J = t[25]);
  let Y;
  t[26] !== ke || t[27] !== M || t[28] !== ge
    ? ((Y = () => {
        (ke(),
          ge.get(D).danger(
            M.formatMessage({
              id: `cloudTaskRow.archiveError`,
              defaultMessage: `Failed to archive task`,
              description: `Error message when archiving a Codex task`,
            }),
          ));
      }),
      (t[26] = ke),
      (t[27] = M),
      (t[28] = ge),
      (t[29] = Y))
    : (Y = t[29]);
  let Me;
  t[30] !== je || t[31] !== J || t[32] !== Y
    ? ((Me = { mutationFn: je, onSuccess: J, onError: Y }),
      (t[30] = je),
      (t[31] = J),
      (t[32] = Y),
      (t[33] = Me))
    : (Me = t[33]);
  let Ne = w(Me),
    Pe;
  t[34] !== Ne || t[35] !== De
    ? ((Pe = () => {
        (De(), Ne.mutate());
      }),
      (t[34] = Ne),
      (t[35] = De),
      (t[36] = Pe))
    : (Pe = t[36]);
  let Fe = Pe;
  if (Ee && !q) return null;
  let X;
  t[37] === R
    ? (X = t[38])
    : ((X =
        h(R ?? ``) ||
        (0, U.jsx)(S, {
          id: `codex.taskRow.title`,
          defaultMessage: `New chat`,
          description: `Default title for a Codex thread that doesn't have a title`,
        })),
      (t[37] = R),
      (t[38] = X));
  let Z = X,
    Re;
  t[39] !== he || t[40] !== ne || t[41] !== C || t[42] !== Z
    ? ((Re =
        ne != null && ne !== ``
          ? (0, U.jsx)(Ce, {
              projectLabel: ne,
              hideProjectRow: he,
              sections: [
                {
                  id: `environment`,
                  rows: [
                    {
                      id: `environment`,
                      icon: (0, U.jsx)(Se, {
                        envType: `cloud`,
                        disableTooltip: !0,
                      }),
                      label: (0, U.jsx)(xe, { envType: `cloud` }),
                    },
                  ],
                },
                ...(C ?? []),
              ],
              threadTitle: Z,
            })
          : null),
      (t[39] = he),
      (t[40] = ne),
      (t[41] = C),
      (t[42] = Z),
      (t[43] = Re))
    : (Re = t[43]);
  let Q = Re,
    ze;
  t[44] !== V || t[45] !== n.has_unread_turn
    ? ((ze = { type: V, unread: n.has_unread_turn }),
      (t[44] = V),
      (t[45] = n.has_unread_turn),
      (t[46] = ze))
    : (ze = t[46]);
  let Be = (j || B) && v == null,
    Ve = K ? Fe : null,
    He;
  t[47] === M
    ? (He = t[48])
    : ((He = M.formatMessage(Le.archiveTask)), (t[47] = M), (t[48] = He));
  let $;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($ = (0, U.jsx)(S, {
        id: `codex.cloudTaskRow.confirmArchiveTask`,
        defaultMessage: `Confirm`,
        description: `Confirmation button for archiving a cloud task`,
      })),
      (t[49] = $))
    : ($ = t[49]);
  let Ue;
  t[50] !== de ||
  t[51] !== se ||
  t[52] !== le ||
  t[53] !== b ||
  t[54] !== fe ||
  t[55] !== Q ||
  t[56] !== l ||
  t[57] !== d ||
  t[58] !== u ||
  t[59] !== ce ||
  t[60] !== pe ||
  t[61] !== G ||
  t[62] !== L ||
  t[63] !== y ||
  t[64] !== m ||
  t[65] !== ue ||
  t[66] !== ze ||
  t[67] !== Be ||
  t[68] !== Ve ||
  t[69] !== He ||
  t[70] !== we ||
  t[71] !== Z ||
  t[72] !== A
    ? ((Ue = (0, U.jsx)(Ae, {
        isActive: ce,
        onClick: L,
        idleIndicatorNode: l,
        indicatorRestNode: u,
        indicatorHoverNode: d,
        reserveLeadingSlot: ue,
        additionalHoverActionCount: de,
        statusState: ze,
        statusIndicatorReplacesMeta: Be,
        useStableTrailingRail: A,
        envType: `cloud`,
        envIconLocation: le,
        title: Z,
        hoverCardContent: Q,
        iconBadges: b,
        hideInlineBadgesOnHover: fe,
        metaHidden: pe,
        metaContent: we,
        overlayMetaContent: y,
        metaState: G,
        onArchive: Ve,
        archiveAriaLabel: He,
        archiveConfirmLabel: $,
        renderActions: m,
        dataAttributes: se,
      })),
      (t[50] = de),
      (t[51] = se),
      (t[52] = le),
      (t[53] = b),
      (t[54] = fe),
      (t[55] = Q),
      (t[56] = l),
      (t[57] = d),
      (t[58] = u),
      (t[59] = ce),
      (t[60] = pe),
      (t[61] = G),
      (t[62] = L),
      (t[63] = y),
      (t[64] = m),
      (t[65] = ue),
      (t[66] = ze),
      (t[67] = Be),
      (t[68] = Ve),
      (t[69] = He),
      (t[70] = we),
      (t[71] = Z),
      (t[72] = A),
      (t[73] = Ue))
    : (Ue = t[73]);
  let We = Ue;
  if (T === void 0 || (T.length === 0 && !K)) return We;
  let Ge;
  t[74] !== K || t[75] !== T || t[76] !== Fe
    ? ((Ge = () => {
        let e = [...T];
        return (
          K &&
            e.push({
              id: `archive-task`,
              message: Le.archiveTask,
              onSelect: Fe,
            }),
          e
        );
      }),
      (t[74] = K),
      (t[75] = T),
      (t[76] = Fe),
      (t[77] = Ge))
    : (Ge = t[77]);
  let Ke = Ge,
    qe;
  return (
    t[78] !== Ke || t[79] !== We
      ? ((qe = (0, U.jsx)(me, { getItems: Ke, children: We })),
        (t[78] = Ke),
        (t[79] = We),
        (t[80] = qe))
      : (qe = t[80]),
    qe
  );
}
var Le = ne({
    archiveTask: {
      id: `codex.cloudTaskRow.archiveTask`,
      defaultMessage: `Archive task`,
      description: `Label for archiving a cloud task`,
    },
  }),
  Z = `.codex/worktrees/`;
function Re({ codexHome: e, worktreePath: t }) {
  let n = Q(t, e);
  return n == null ? a(t) : (n[ze(n) - 1] ?? a(t));
}
function Q(e, n) {
  let r = s(e).replace(/\/+$/, ``),
    i = r.toLowerCase();
  if (n != null) {
    let e = s(t(n)).replace(/\/+$/, ``).toLowerCase();
    if (i === e || i.startsWith(`${e}/`))
      return r.slice(e.length).split(`/`).filter(Boolean);
  }
  let a = i.lastIndexOf(Z);
  return a === -1
    ? null
    : r
        .slice(a + 17)
        .split(`/`)
        .filter(Boolean);
}
function ze(e) {
  return e.length >= 2 && /^[0-9a-f]{4,}$/i.test(e[0]) ? 2 : 1;
}
function Be({
  branchMismatchWarning: e,
  branchName: t,
  branchTooltipContent: r,
  codexHome: i,
  workspaceIcon: a,
  workspacePath: o,
}) {
  let s = t?.trim() || null,
    c = o != null && n(o, i) ? Re({ codexHome: i, worktreePath: o }) : null,
    l = [];
  return (
    s != null &&
      l.push({
        id: `branch`,
        icon: (0, U.jsx)(E, {}),
        label:
          r == null
            ? s
            : (0, U.jsx)(O, {
                tooltipContent: r,
                children: (0, U.jsx)(`span`, { children: s }),
              }),
      }),
    e != null &&
      l.push({
        allowWrap: !0,
        id: `branch-mismatch`,
        icon: (0, U.jsx)(B, {
          className: `text-token-editor-warning-foreground`,
        }),
        label: e,
        tone: `danger`,
      }),
    c != null &&
      l.push({ id: `worktree`, icon: a ?? (0, U.jsx)(P, {}), label: c }),
    l.length > 0 ? l : void 0
  );
}
function Ve(e) {
  let t = (0, H.c)(50),
    {
      task: n,
      envIconLocation: r,
      useStableTrailingRail: i,
      statusIndicatorReplacesMeta: a,
      isActive: o,
      hasAttention: s,
      indicatorRestNode: c,
      indicatorHoverNode: l,
      reserveLeadingSlot: u,
      additionalHoverActionCount: d,
      renderActions: f,
      hoverCardProjectLabel: p,
      metaContent: m,
      overlayMetaContent: g,
      onClick: _,
      onDoubleClick: v,
      onArchive: y,
      onContextMenu: b,
      dataAttributes: x,
    } = e,
    te = r === void 0 ? `end` : r,
    ne = i === void 0 ? !1 : i,
    re = a === void 0 ? !1 : a,
    C = o === void 0 ? !1 : o,
    w = s === void 0 ? !1 : s,
    ie = u === void 0 ? !1 : u,
    T = d === void 0 ? 0 : d,
    E = ee(),
    oe = ae(),
    D = ce(n.hostId),
    O = n.phase === `failed`,
    k = n.phase === `queued` || n.phase === `creating`,
    se;
  t[0] !== m || t[1] !== n.createdAt
    ? ((se =
        m ??
        (0, U.jsx)(N, { dateString: new Date(n.createdAt).toISOString() })),
      (t[0] = m),
      (t[1] = n.createdAt),
      (t[2] = se))
    : (se = t[2]);
  let le = se,
    A;
  t[3] !== w || t[4] !== O || t[5] !== k
    ? ((A = k
        ? { type: `loading`, unread: w }
        : O
          ? { type: `error`, unread: w }
          : { type: `idle`, unread: w }),
      (t[3] = w),
      (t[4] = O),
      (t[5] = k),
      (t[6] = A))
    : (A = t[6]);
  let j = A,
    ue = n.startingState.type === `branch` ? n.startingState.branchName : null,
    de = n.worktreeGitRoot ?? n.worktreeWorkspaceRoot,
    fe;
  t[7] !== D || t[8] !== ue || t[9] !== de
    ? ((fe = Be({ branchName: ue, codexHome: D, workspacePath: de })),
      (t[7] = D),
      (t[8] = ue),
      (t[9] = de),
      (t[10] = fe))
    : (fe = t[10]);
  let pe = fe,
    me;
  t[11] !== O || t[12] !== n.label
    ? ((me = O
        ? (0, U.jsx)(S, {
            id: `recentTasks.worktreeInitFailedTitle`,
            defaultMessage: `Worktree init failed`,
            description: `Worktree row title when the init script fails`,
          })
        : h(n.label)),
      (t[11] = O),
      (t[12] = n.label),
      (t[13] = me))
    : (me = t[13]);
  let he = me,
    M;
  t[14] !== pe || t[15] !== p || t[16] !== he
    ? ((M =
        p != null && p !== ``
          ? (0, U.jsx)(Ce, {
              projectLabel: p,
              sections: [{ id: `environment`, rows: pe ?? [] }],
              threadTitle: he,
            })
          : null),
      (t[14] = pe),
      (t[15] = p),
      (t[16] = he),
      (t[17] = M))
    : (M = t[17]);
  let P = M,
    F;
  t[18] !== oe || t[19] !== _ || t[20] !== n.id
    ? ((F = () => {
        if (_) {
          _();
          return;
        }
        oe(`/worktree-init-v2/${n.id}`);
      }),
      (t[18] = oe),
      (t[19] = _),
      (t[20] = n.id),
      (t[21] = F))
    : (F = t[21]);
  let I = F,
    L = re && m == null,
    R;
  t[22] !== E || t[23] !== y
    ? ((R = y ? E.formatMessage(ge.archiveThread) : void 0),
      (t[22] = E),
      (t[23] = y),
      (t[24] = R))
    : (R = t[24]);
  let z;
  t[25] === y
    ? (z = t[26])
    : ((z = y
        ? (0, U.jsx)(S, {
            id: `codex.localTaskRow.confirmArchiveTask`,
            defaultMessage: `Confirm`,
            description: `Confirmation button for archiving a local task`,
          })
        : void 0),
      (t[25] = y),
      (t[26] = z));
  let B;
  return (
    t[27] !== T ||
    t[28] !== x ||
    t[29] !== te ||
    t[30] !== I ||
    t[31] !== P ||
    t[32] !== l ||
    t[33] !== c ||
    t[34] !== C ||
    t[35] !== k ||
    t[36] !== y ||
    t[37] !== b ||
    t[38] !== v ||
    t[39] !== g ||
    t[40] !== f ||
    t[41] !== ie ||
    t[42] !== j ||
    t[43] !== L ||
    t[44] !== R ||
    t[45] !== z ||
    t[46] !== le ||
    t[47] !== he ||
    t[48] !== ne
      ? ((B = (0, U.jsx)(Ae, {
          isActive: C,
          title: he,
          hoverCardContent: P,
          metaContent: le,
          overlayMetaContent: g,
          envType: `worktree`,
          envIconLocation: te,
          pulseEnvIcon: k,
          statusIndicatorReplacesMeta: L,
          useStableTrailingRail: ne,
          indicatorRestNode: c,
          indicatorHoverNode: l,
          reserveLeadingSlot: ie,
          additionalHoverActionCount: T,
          renderActions: f,
          statusState: j,
          onArchive: y,
          archiveAriaLabel: R,
          archiveConfirmLabel: z,
          onClick: I,
          onDoubleClick: v,
          onContextMenu: b,
          dataAttributes: x,
        })),
        (t[27] = T),
        (t[28] = x),
        (t[29] = te),
        (t[30] = I),
        (t[31] = P),
        (t[32] = l),
        (t[33] = c),
        (t[34] = C),
        (t[35] = k),
        (t[36] = y),
        (t[37] = b),
        (t[38] = v),
        (t[39] = g),
        (t[40] = f),
        (t[41] = ie),
        (t[42] = j),
        (t[43] = L),
        (t[44] = R),
        (t[45] = z),
        (t[46] = le),
        (t[47] = he),
        (t[48] = ne),
        (t[49] = B))
      : (B = t[49]),
    B
  );
}
function He({
  codexHome: e,
  cwd: t,
  hideRemoteHostEnvIcon: r,
  hostId: i,
  isGrouped: a,
}) {
  let o = !r && i != null && i !== `local`,
    s = n(t, e);
  return o
    ? s
      ? `remote-worktree`
      : `remote`
    : s
      ? `worktree`
      : a
        ? `localGrouped`
        : void 0;
}
function $(e) {
  let t = (0, H.c)(29),
    {
      conversationId: n,
      displayCwd: a,
      hasAttachedHeartbeatAutomation: o,
      heartbeatAutomationTooltipContent: s,
      hideProjectMetadata: c,
      hideProjectRow: l,
      hideRemoteHostEnvIcon: f,
      hoverCardSections: m,
      isAutomationRun: h,
      isGrouped: g,
      shouldFetchHoverBranch: _,
      threadTitle: v,
    } = e,
    y = o === void 0 ? !1 : o,
    b = c === void 0 ? !1 : c,
    x = l === void 0 ? !1 : l,
    te = f === void 0 ? !1 : f,
    S = h === void 0 ? !1 : h,
    ne = g === void 0 ? !1 : g,
    re = _ === void 0 ? !1 : _,
    w = ee(),
    ie = C(p, n),
    T = a ?? ie,
    ae = C(r, n),
    E = C(i, n),
    oe = d(E ?? `local`),
    D = ce(E ?? `local`),
    O = C(u, n) === `projectless`,
    k = He({
      codexHome: D,
      cwd: T,
      hideRemoteHostEnvIcon: te,
      hostId: E,
      isGrouped: ne,
    }),
    se =
      !O &&
      T != null &&
      (k == null ||
        k === `worktree` ||
        k === `remote-worktree` ||
        k === `localGrouped`),
    le;
  t[0] === w
    ? (le = t[1])
    : ((le = w.formatMessage({
        id: `sidebarElectron.threadHoverCardChatProject`,
        defaultMessage: `Chat`,
        description: `Fallback project label for a sidebar thread hover card when it does not belong to a project or workspace`,
      })),
      (t[0] = w),
      (t[1] = le));
  let A = le,
    j;
  t[2] !== T || t[3] !== b || t[4] !== A || t[5] !== O
    ? ((j = b || O || T == null ? A : (V(T) ?? T)),
      (t[2] = T),
      (t[3] = b),
      (t[4] = A),
      (t[5] = O),
      (t[6] = j))
    : (j = t[6]);
  let de = j,
    fe = se && re,
    pe;
  t[7] === fe
    ? (pe = t[8])
    : ((pe = { enabled: fe, staleTime: 0 }), (t[7] = fe), (t[8] = pe));
  let me = ve(T, oe, `local_thread_hover_card`, pe),
    ge = k === `remote` || k === `remote-worktree` ? null : (T ?? null),
    M =
      ae != null && me.data != null && ae !== me.data
        ? w.formatMessage({
            id: `codex.localTaskRow.hoverCardBranchMismatch`,
            defaultMessage: `Chat branch is based on what branch was active when last worked on this chat`,
            description: `Tooltip shown when the checked out branch differs from the chat branch in the task hover card`,
          })
        : void 0,
    N =
      M == null
        ? void 0
        : w.formatMessage({
            id: `codex.localTaskRow.hoverCardBranchMismatchWarning`,
            defaultMessage: `Chat branch reflects active branch when last used; sending a message will update chat branch`,
            description: `Warning text shown when the checked out branch differs from the chat branch in the task hover card`,
          }),
    P = se
      ? Be({
          branchMismatchWarning: N,
          branchName: ae ?? me.data ?? null,
          branchTooltipContent: M,
          codexHome: D,
          workspaceIcon:
            k === `worktree` || k === `remote-worktree`
              ? void 0
              : (0, U.jsx)(ue, {}),
          workspacePath: T,
        })
      : void 0,
    F;
  t[9] !== y || t[10] !== s || t[11] !== w || t[12] !== S
    ? ((F =
        S || y
          ? [
              {
                id: `automation`,
                icon: (0, U.jsx)(he, { className: `shrink-0` }),
                label:
                  s ??
                  w.formatMessage({
                    id: `codex.localTaskRow.automation`,
                    defaultMessage: `Automation chat`,
                    description: `Accessible label for the automation thread icon`,
                  }),
              },
            ]
          : []),
      (t[9] = y),
      (t[10] = s),
      (t[11] = w),
      (t[12] = S),
      (t[13] = F))
    : (F = t[13]);
  let I = F,
    L =
      P ??
      (be(k)
        ? [
            {
              id: `environment`,
              icon: (0, U.jsx)(Se, {
                envType: k,
                hostId: E ?? void 0,
                disableTooltip: !0,
              }),
              label: ge ?? (0, U.jsx)(xe, { envType: k }),
            },
          ]
        : []),
    R;
  t[14] === L
    ? (R = t[15])
    : ((R = { id: `environment`, rows: L }), (t[14] = L), (t[15] = R));
  let z;
  t[16] === m ? (z = t[17]) : ((z = m ?? []), (t[16] = m), (t[17] = z));
  let B;
  t[18] === I
    ? (B = t[19])
    : ((B = { id: `automation`, rows: I }), (t[18] = I), (t[19] = B));
  let _e;
  t[20] !== R || t[21] !== z || t[22] !== B
    ? ((_e = [R, ...z, B].filter(Ue)),
      (t[20] = R),
      (t[21] = z),
      (t[22] = B),
      (t[23] = _e))
    : (_e = t[23]);
  let ye = _e,
    W;
  return (
    t[24] !== x || t[25] !== de || t[26] !== ye || t[27] !== v
      ? ((W = (0, U.jsx)(Ce, {
          projectLabel: de,
          hideProjectRow: x,
          sections: ye,
          threadTitle: v,
        })),
        (t[24] = x),
        (t[25] = de),
        (t[26] = ye),
        (t[27] = v),
        (t[28] = W))
      : (W = t[28]),
    W
  );
}
function Ue(e) {
  return e.rows.length > 0;
}
function We(e) {
  let t = (0, H.c)(8),
    {
      align: n,
      alignOffset: r,
      children: i,
      hoverCardContent: a,
      onOpenChange: o,
      side: s,
      sideOffset: c,
    } = e,
    l = n === void 0 ? `start` : n,
    u = r === void 0 ? 0 : r,
    d = s === void 0 ? `bottom` : s,
    f = c === void 0 ? 6 : c;
  if (a == null) return i;
  let p;
  return (
    t[0] !== l ||
    t[1] !== u ||
    t[2] !== i ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== d ||
    t[6] !== f
      ? ((p = (0, U.jsx)(O, {
          onOpenChange: o,
          side: d,
          align: l,
          alignOffset: u,
          sideOffset: f,
          variant: `hoverCard`,
          tooltipContent: a,
          children: i,
        })),
        (t[0] = l),
        (t[1] = u),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o),
        (t[5] = d),
        (t[6] = f),
        (t[7] = p))
      : (p = t[7]),
    p
  );
}
function Ge(e) {
  return (0, U.jsx)(j, {
    browser: !0,
    electron: !0,
    children: (0, U.jsx)($, { ...e }),
  });
}
function Ke(e) {
  let t = (0, H.c)(98),
    {
      conversationId: n,
      conversationRoute: r,
      displayCwd: a,
      onSelect: s,
      onClick: u,
      onBeforeNavigate: d,
      onDoubleClick: h,
      isActive: v,
      isGrouped: y,
      envIconLocation: b,
      useStableTrailingRail: x,
      statusIndicatorReplacesMeta: ne,
      hideInlineBadgesOnHover: w,
      idleIndicatorNode: ie,
      indicatorRestNode: T,
      indicatorHoverNode: ae,
      reserveLeadingSlot: E,
      additionalHoverActionCount: oe,
      priorityIndicatorNode: O,
      onContextMenu: k,
      renderActions: se,
      metaHidden: A,
      extraIconBadges: j,
      onArchiveStart: ue,
      onArchiveSuccess: me,
      onArchiveError: ge,
      rowContentClassName: M,
      titleOverride: N,
      hoverCardSections: P,
      disableHoverCard: F,
      forceLoadingIndicator: I,
      blurOnClick: L,
      hasPendingChildApproval: R,
      hideRemoteHostEnvIcon: z,
      disableEnvTooltip: B,
      className: ve,
      disabled: V,
      isAutomationRun: be,
      hasAttachedHeartbeatAutomation: xe,
      heartbeatAutomationTooltipContent: Se,
      metaContent: Ce,
      overlayMetaContent: we,
      dataAttributes: G,
    } = e,
    K = v === void 0 ? !1 : v,
    Te = y === void 0 ? !1 : y,
    Ee = x === void 0 ? !1 : x,
    q = ne === void 0 ? !1 : ne,
    De = w === void 0 ? !1 : w,
    Oe = E === void 0 ? !1 : E,
    ke = oe === void 0 ? 0 : oe,
    je = A === void 0 ? !1 : A,
    J = F === void 0 ? !1 : F,
    Y = I === void 0 ? !1 : I,
    Me = L === void 0 ? !1 : L,
    Ne = R === void 0 ? !1 : R,
    Pe = z === void 0 ? !1 : z,
    Fe = V === void 0 ? !1 : V,
    X = be === void 0 ? !1 : be,
    Le = xe === void 0 ? !1 : xe,
    Z = re(te),
    Re = de(),
    Q = ee(),
    ze = C(_, n),
    Be = C(m, n),
    Ve = C(p, n),
    $ = a ?? Ve,
    Ue = C(o, n),
    We = C(l, n),
    Ke = C(i, n),
    Ye = ce(Ke ?? `local`),
    Xe = C(pe, n),
    Ze = C(fe, n),
    Qe = C(g, n),
    $e = C(le, n),
    et;
  t[0] !== ge || t[1] !== ue || t[2] !== me
    ? ((et = { onArchiveStart: ue, onArchiveSuccess: me, onArchiveError: ge }),
      (t[0] = ge),
      (t[1] = ue),
      (t[2] = me),
      (t[3] = et))
    : (et = t[3]);
  let {
      archived: tt,
      usesExternalArchiveHandling: nt,
      beginArchive: rt,
      handleArchiveSuccess: it,
      handleArchiveError: at,
    } = Ie(et),
    ot = _e(),
    st;
  t[4] === Qe ? (st = t[5]) : ((st = f(Qe)), (t[4] = Qe), (t[5] = st));
  let ct = ot && st?.parentThreadId != null,
    lt = Y ? `loading` : Ze,
    ut;
  t[6] !== $e || t[7] !== N
    ? ((ut = (0, U.jsx)(Je, { title: $e, titleOverride: N })),
      (t[6] = $e),
      (t[7] = N),
      (t[8] = ut))
    : (ut = t[8]);
  let dt = ut,
    [ft, pt] = (0, W.useState)(!1),
    mt;
  t[9] !== Ue || t[10] !== ct || t[11] !== lt || t[12] !== We
    ? ((mt =
        lt === `loading`
          ? {
              type: `loading`,
              unread: ct ? !1 : Ue === !0,
              unreadCount: ct ? 0 : (We ?? 0),
            }
          : {
              type: lt,
              unread: ct ? !1 : Ue === !0,
              unreadCount: ct ? 0 : (We ?? 0),
            }),
      (t[9] = Ue),
      (t[10] = ct),
      (t[11] = lt),
      (t[12] = We),
      (t[13] = mt))
    : (mt = t[13]);
  let ht = mt,
    gt;
  t[14] !== rt ||
  t[15] !== n ||
  t[16] !== at ||
  t[17] !== it ||
  t[18] !== Q ||
  t[19] !== ct ||
  t[20] !== Z
    ? ((gt = () => {
        (rt(),
          c(`archive-conversation`, { conversationId: n })
            .then(() => {
              it();
              let e = qe;
              ct ||
                Z.get(D).info((0, U.jsx)(ye, { onOpenSettings: e }), {
                  id: `archive-thread`,
                });
            })
            .catch(() => {
              (at(),
                Z.get(D).danger(
                  Q.formatMessage({
                    id: `localTaskRow.archiveError`,
                    defaultMessage: `Failed to archive conversation`,
                    description: `Error message when archiving a local Codex conversation`,
                  }),
                ));
            }));
      }),
      (t[14] = rt),
      (t[15] = n),
      (t[16] = at),
      (t[17] = it),
      (t[18] = Q),
      (t[19] = ct),
      (t[20] = Z),
      (t[21] = gt))
    : (gt = t[21]);
  let _t = gt,
    vt;
  t[22] !== Ne || t[23] !== Xe
    ? ((vt =
        Xe === `approval` || Ne
          ? {
              id: `awaiting-approval`,
              label: (0, U.jsx)(S, {
                id: `codex.localTaskRow.awaitingApproval`,
                defaultMessage: `Awaiting approval`,
                description: `Chip indicating a local task is waiting for user approval`,
              }),
            }
          : Xe === `response`
            ? {
                id: `awaiting-response`,
                label: (0, U.jsx)(S, {
                  id: `codex.localTaskRow.awaitingResponse`,
                  defaultMessage: `Awaiting response`,
                  description: `Chip indicating a local task is waiting for user response`,
                }),
              }
            : null),
      (t[22] = Ne),
      (t[23] = Xe),
      (t[24] = vt))
    : (vt = t[24]);
  let yt = vt,
    bt;
  t[25] === yt
    ? (bt = t[26])
    : ((bt = yt == null ? [] : [yt]), (t[25] = yt), (t[26] = bt));
  let xt = bt,
    St;
  t[27] !== Le || t[28] !== Se || t[29] !== Q || t[30] !== X
    ? ((St =
        X || Le
          ? {
              id: `automation`,
              icon: (0, U.jsx)(he, { className: `shrink-0` }),
              ariaLabel: X
                ? Q.formatMessage({
                    id: `codex.localTaskRow.automation`,
                    defaultMessage: `Automation chat`,
                    description: `Accessible label for the automation thread icon`,
                  })
                : Q.formatMessage({
                    id: `codex.localTaskRow.attachedHeartbeatAutomation`,
                    defaultMessage: `Heartbeat automation attached`,
                    description: `Accessible label for the heartbeat automation icon shown on a chat with an attached heartbeat automation`,
                  }),
              tooltipContent: Le ? Se : null,
            }
          : null),
      (t[27] = Le),
      (t[28] = Se),
      (t[29] = Q),
      (t[30] = X),
      (t[31] = St))
    : (St = t[31]);
  let Ct = St,
    wt = j;
  if (Ct != null) {
    let e;
    (t[32] !== Ct || t[33] !== j
      ? ((e = j == null ? [Ct] : [...j, Ct]),
        (t[32] = Ct),
        (t[33] = j),
        (t[34] = e))
      : (e = t[34]),
      (wt = e));
  }
  let Tt;
  t[35] !== Ye || t[36] !== $ || t[37] !== Pe || t[38] !== Ke || t[39] !== Te
    ? ((Tt = He({
        codexHome: Ye,
        cwd: $,
        hideRemoteHostEnvIcon: Pe,
        hostId: Ke,
        isGrouped: Te,
      })),
      (t[35] = Ye),
      (t[36] = $),
      (t[37] = Pe),
      (t[38] = Ke),
      (t[39] = Te),
      (t[40] = Tt))
    : (Tt = t[40]);
  let Et = Tt,
    Dt = Et === `remote` || Et === `remote-worktree` ? null : $,
    Ot;
  t[41] !== n ||
  t[42] !== J ||
  t[43] !== a ||
  t[44] !== Le ||
  t[45] !== Se ||
  t[46] !== Pe ||
  t[47] !== P ||
  t[48] !== X ||
  t[49] !== Te ||
  t[50] !== ft ||
  t[51] !== dt
    ? ((Ot = J
        ? null
        : Ge({
            conversationId: n,
            displayCwd: a,
            hasAttachedHeartbeatAutomation: Le,
            heartbeatAutomationTooltipContent: Se,
            hideProjectRow: Te,
            hideRemoteHostEnvIcon: Pe,
            hoverCardSections: P,
            isAutomationRun: X,
            isGrouped: Te,
            shouldFetchHoverBranch: ft,
            threadTitle: dt,
          })),
      (t[41] = n),
      (t[42] = J),
      (t[43] = a),
      (t[44] = Le),
      (t[45] = Se),
      (t[46] = Pe),
      (t[47] = P),
      (t[48] = X),
      (t[49] = Te),
      (t[50] = ft),
      (t[51] = dt),
      (t[52] = Ot))
    : (Ot = t[52]);
  let kt = Ot;
  if ((tt && !nt) || ze !== !0 || Be == null) return null;
  let At = Ke ?? void 0,
    jt;
  t[53] !== n ||
  t[54] !== r ||
  t[55] !== Re ||
  t[56] !== d ||
  t[57] !== u ||
  t[58] !== s
    ? ((jt = () => {
        (d?.(),
          Re(n, r),
          (0, W.startTransition)(() => {
            (s?.(), u?.());
          }));
      }),
      (t[53] = n),
      (t[54] = r),
      (t[55] = Re),
      (t[56] = d),
      (t[57] = u),
      (t[58] = s),
      (t[59] = jt))
    : (jt = t[59]);
  let Mt = wt,
    Nt;
  t[60] === Q
    ? (Nt = t[61])
    : ((Nt = Q.formatMessage({
        id: `codex.localTaskRow.archiveTask`,
        defaultMessage: `Archive chat`,
        description: `Label for archiving a local thread`,
      })),
      (t[60] = Q),
      (t[61] = Nt));
  let Pt;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pt = (0, U.jsx)(S, {
        id: `codex.localTaskRow.confirmArchiveTask`,
        defaultMessage: `Confirm`,
        description: `Confirmation button for archiving a local task`,
      })),
      (t[62] = Pt))
    : (Pt = t[62]);
  let Ft;
  return (
    t[63] !== ke ||
    t[64] !== Me ||
    t[65] !== xt ||
    t[66] !== ve ||
    t[67] !== G ||
    t[68] !== B ||
    t[69] !== Fe ||
    t[70] !== b ||
    t[71] !== Dt ||
    t[72] !== Et ||
    t[73] !== _t ||
    t[74] !== De ||
    t[75] !== kt ||
    t[76] !== wt ||
    t[77] !== ie ||
    t[78] !== ae ||
    t[79] !== T ||
    t[80] !== K ||
    t[81] !== Ce ||
    t[82] !== je ||
    t[83] !== k ||
    t[84] !== h ||
    t[85] !== we ||
    t[86] !== O ||
    t[87] !== se ||
    t[88] !== Oe ||
    t[89] !== M ||
    t[90] !== q ||
    t[91] !== ht ||
    t[92] !== At ||
    t[93] !== jt ||
    t[94] !== Nt ||
    t[95] !== dt ||
    t[96] !== Ee
      ? ((Ft = (0, U.jsx)(Ae, {
          hostId: At,
          className: ve,
          isActive: K,
          idleIndicatorNode: ie,
          indicatorRestNode: T,
          indicatorHoverNode: ae,
          reserveLeadingSlot: Oe,
          additionalHoverActionCount: ke,
          priorityIndicatorNode: O,
          rowContentClassName: M,
          onContextMenu: k,
          onClick: jt,
          onDoubleClick: h,
          disabled: Fe,
          statusState: ht,
          statusIndicatorReplacesMeta: q,
          useStableTrailingRail: Ee,
          envType: Et,
          envIconLocation: b,
          disableEnvTooltip: B,
          envTooltip: Dt,
          hoverCardContent: kt,
          blurOnClick: Me,
          title: dt,
          chips: xt,
          iconBadges: Mt,
          hideInlineBadgesOnHover: De,
          metaHidden: je,
          metaContent: Ce,
          overlayMetaContent: we,
          onArchive: _t,
          onHoverCardOpenChange: pt,
          dataAttributes: G,
          archiveAriaLabel: Nt,
          archiveConfirmLabel: Pt,
          renderActions: se,
        })),
        (t[63] = ke),
        (t[64] = Me),
        (t[65] = xt),
        (t[66] = ve),
        (t[67] = G),
        (t[68] = B),
        (t[69] = Fe),
        (t[70] = b),
        (t[71] = Dt),
        (t[72] = Et),
        (t[73] = _t),
        (t[74] = De),
        (t[75] = kt),
        (t[76] = wt),
        (t[77] = ie),
        (t[78] = ae),
        (t[79] = T),
        (t[80] = K),
        (t[81] = Ce),
        (t[82] = je),
        (t[83] = k),
        (t[84] = h),
        (t[85] = we),
        (t[86] = O),
        (t[87] = se),
        (t[88] = Oe),
        (t[89] = M),
        (t[90] = q),
        (t[91] = ht),
        (t[92] = At),
        (t[93] = jt),
        (t[94] = Nt),
        (t[95] = dt),
        (t[96] = Ee),
        (t[97] = Ft))
      : (Ft = t[97]),
    Ft
  );
}
function qe() {
  T.dispatchHostMessage({
    type: `navigate-to-route`,
    path: `/settings/data-controls`,
  });
}
function Je(e) {
  let t = (0, H.c)(3),
    { title: n, titleOverride: r } = e;
  if (typeof r != `string` && r != null) return r;
  if (n != null) return n;
  let i;
  t[0] === r ? (i = t[1]) : ((i = r?.trim() ?? ``), (t[0] = r), (t[1] = i));
  let a = i;
  if (a.length > 0) return a;
  let o;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, U.jsx)(S, {
          id: `codex.taskRow.title`,
          defaultMessage: `New chat`,
          description: `Default title for a Codex thread that doesn't have a title`,
        })),
        (t[2] = o))
      : (o = t[2]),
    o
  );
}
export { X as a, Te as c, Ve as i, $ as n, Ie as o, We as r, ke as s, Ke as t };
//# sourceMappingURL=local-task-row-BShx8eqa.js.map
