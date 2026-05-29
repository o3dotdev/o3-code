import { s as e } from "./chunk-Bj-mKKzh.js";
import { zr as t } from "./src-C.js";
import {
  $s as n,
  Gs as r,
  Ps as i,
  cn as a,
  ln as o,
  ni as s,
  sn as c,
  w as l,
  xa as u,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as d, t as f } from "./jsx-runtime.js";
import { t as p } from "./clsx-BcPLHiun.js";
import {
  C as m,
  G as h,
  U as g,
  V as _,
  Y as v,
  Z as y,
  h as b,
  wt as x,
  y as S,
} from "./setting-storage.js";
import { f as C, m as w, p as T } from "./chunk-LFPYN7LY.js";
import { o as E } from "./statsig--EYRNU53.js";
import { s as D } from "./app-server-manager-hooks.js";
import { D as O, k } from "./sidebar-signals.js";
import { t as A } from "./use-auth.js";
import { C as j, D as M, E as N, m as P } from "./codex-api-bK--r_2t.js";
import { t as F } from "./tooltip-CDzchJxN.js";
import { i as I } from "./use-environment.js";
import { t as L } from "./button.js";
import { t as ee } from "./spinner.js";
import { t as R } from "./x-C_RDKBp5.js";
import { n as z } from "./local-conversation-title-signals-bVA-f9H8.js";
import { t as B } from "./with-window.js";
import { i as V, r as H } from "./pending-worktree-store-COXB8WW0.js";
import { r as U } from "./run-command.js";
import { t as W } from "./use-stable-callback.js";
import { t as te } from "./check-md.js";
import { a as G } from "./command-keybindings-C3NM9T-L.js";
import { t as ne } from "./arrow-left.js";
import { n as re } from "./use-start-new-conversation.js";
import { t as ie } from "./compose.js";
import { a as ae, r as K, t as q } from "./dropdown-DtQxMoJw.js";
import { i as oe, n as se, t as ce } from "./popover.js";
import { t as J } from "./chevron-NmAOI_v1.js";
import { t as Y } from "./format-relative-date-time.js";
import { a as X, i as le, t as ue } from "./local-task-row-BShx8eqa.js";
import { t as de } from "./use-is-background-subagents-enabled-B.js";
import { t as fe } from "./profile-dropdown-CNm7g-4O.js";
import { n as pe } from "./is-subagent-conversation-BDD-JXTj.js";
import { t as me } from "./history-BwxRjoaE.js";
import { t as he } from "./dock-CDRDKrMD.js";
var Z = x(),
  Q = f();
function ge() {
  let e = (0, Z.c)(12),
    t = re(),
    n = h(),
    r = v(G, `newThread`),
    i;
  e[0] === t
    ? (i = e[1])
    : ((i = (e) => {
        e.defaultPrevented || t();
      }),
      (e[0] = t),
      (e[1] = i));
  let a = i,
    o;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(g, { ..._e.newChat })), (e[2] = o))
    : (o = e[2]);
  let s;
  e[3] === n
    ? (s = e[4])
    : ((s = n.formatMessage(_e.newChat)), (e[3] = n), (e[4] = s));
  let c;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(ie, { className: `icon-xs` })), (e[5] = c))
    : (c = e[5]);
  let l;
  e[6] !== a || e[7] !== s
    ? ((l = (0, Q.jsx)(L, {
        color: `ghost`,
        size: `icon`,
        onClick: a,
        "aria-label": s,
        children: c,
      })),
      (e[6] = a),
      (e[7] = s),
      (e[8] = l))
    : (l = e[8]);
  let u;
  return (
    e[9] !== r || e[10] !== l
      ? ((u = (0, Q.jsx)(F, { tooltipContent: o, shortcut: r, children: l })),
        (e[9] = r),
        (e[10] = l),
        (e[11] = u))
      : (u = e[11]),
    u
  );
}
var _e = _({
  newChat: {
    id: `localConversationPage.newChat`,
    defaultMessage: `New chat`,
    description: `Label for starting a new chat`,
  },
});
function ve(e, t) {
  switch (e.kind) {
    case `remote`:
      return t.remote(e);
    case `local`:
      return t.local(e);
    case `pending-worktree`:
      return t[`pending-worktree`](e);
  }
}
var ye = e(u(), 1);
function be(e) {
  let t = (0, Z.c)(23),
    { mergedTasks: n, tasksQuery: r } = e,
    i = w(),
    a = C(),
    { cancelPendingWorktree: o } = H();
  if (r.isLoading && n.length === 0) return null;
  let s = r.error instanceof b && r.error.status === 404;
  if (r.isError && n.length === 0 && !s) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(g, {
          id: `codex.recentTasksMenu.errorCloud.inline`,
          defaultMessage: `Failed to load cloud tasks.`,
          description: `Inline error indicator for cloud tasks in recent feed`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === r
      ? (n = t[2])
      : ((n = () => {
          r.refetch();
        }),
        (t[1] = r),
        (t[2] = n));
    let i;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(g, {
          id: `codex.common.retry`,
          defaultMessage: `Retry`,
          description: `Retry button`,
        })),
        (t[3] = i))
      : (i = t[3]);
    let a;
    return (
      t[4] === n
        ? (a = t[5])
        : ((a = (0, Q.jsxs)(`div`, {
            className: `mb-2 flex items-center gap-2 text-base text-token-input-placeholder-foreground`,
            children: [
              e,
              (0, Q.jsx)(L, {
                size: `default`,
                color: `outline`,
                onClick: n,
                children: i,
              }),
            ],
          })),
          (t[4] = n),
          (t[5] = a)),
      a
    );
  }
  if (n.length === 0) return null;
  let c;
  t[6] === n ? (c = t[7]) : (n.filter(Se), (c = n), (t[6] = n), (t[7] = c));
  let l = c,
    u;
  if (t[8] !== o || t[9] !== a || t[10] !== i || t[11] !== l) {
    let e;
    (t[13] !== o || t[14] !== a || t[15] !== i
      ? ((e = (e) =>
          ve(e, {
            remote: (e) =>
              (0, Q.jsx)(
                X,
                {
                  useStableTrailingRail: !0,
                  isActive: a.pathname === `/remote/${e.task.id}`,
                  task: e.task,
                  onClose: xe,
                },
                e.key,
              ),
            local: (e) =>
              (0, Q.jsx)(
                ue,
                {
                  useStableTrailingRail: !0,
                  isActive: a.pathname === `/local/${e.conversation.id}`,
                  conversationId: e.conversation.id,
                  statusIndicatorReplacesMeta: !0,
                  metaContent:
                    e.conversation.createdAt == null
                      ? void 0
                      : (0, Q.jsx)(Y, {
                          dateString: new Date(
                            e.conversation.createdAt,
                          ).toISOString(),
                        }),
                  onClick: () => {
                    i(`/local/${e.conversation.id}`);
                  },
                },
                e.key,
              ),
            "pending-worktree": (e) =>
              (0, Q.jsx)(
                le,
                {
                  useStableTrailingRail: !0,
                  task: e.pendingWorktree,
                  hasAttention: e.pendingWorktree.needsAttention,
                  statusIndicatorReplacesMeta: !0,
                  onClick: () => {
                    i(`/worktree-init-v2/${e.pendingWorktree.id}`);
                  },
                  onArchive: () => {
                    o(e.pendingWorktree.id);
                  },
                },
                e.key,
              ),
          })),
        (t[13] = o),
        (t[14] = a),
        (t[15] = i),
        (t[16] = e))
      : (e = t[16]),
      (u = l.map(e)),
      (t[8] = o),
      (t[9] = a),
      (t[10] = i),
      (t[11] = l),
      (t[12] = u));
  } else u = t[12];
  let d;
  t[17] !== n.length || t[18] !== !1
    ? ((d = !1), (t[17] = n.length), (t[18] = !1), (t[19] = d))
    : (d = t[19]);
  let f;
  return (
    t[20] !== u || t[21] !== d
      ? ((f = (0, Q.jsxs)(`div`, {
          className: `group/inline -mx-[var(--padding-row-x)] flex flex-col gap-px rounded-xl pb-1 transition-colors [--task-row-trailing-inset:calc(var(--spacing)*1.5)]`,
          children: [u, d],
        })),
        (t[20] = u),
        (t[21] = d),
        (t[22] = f))
      : (f = t[22]),
    f
  );
}
function xe() {}
function Se(e) {
  if (e.kind === `remote`) {
    let t = e.task.task_status_display?.latest_turn_status_display?.turn_status;
    return (
      e.task.has_unread_turn === !0 || t === `in_progress` || t === `pending`
    );
  }
  return e.kind === `local` && e.conversation.hasUnreadTurn
    ? !0
    : e.kind === `local`
      ? r(e.conversation)
      : e.kind === `pending-worktree`;
}
function Ce(e, t) {
  return typeof e == `string` && e.toLowerCase().includes(t);
}
var we = i(`cloudTasksEnvironmentFilterId`, null);
function Te(e) {
  let t = (0, Z.c)(15),
    { searchQuery: n, onQueryChange: r, autoFocus: i } = e,
    a = i === void 0 ? !1 : i,
    o = h(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: `recent-tasks-search`,
        children: (0, Q.jsx)(g, {
          id: `codex.recentTasksMenu.search`,
          defaultMessage: `Search recent tasks`,
          description: `Label for the recent tasks menu search input`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === r
    ? (c = t[2])
    : ((c = (e) => r(e.target.value)), (t[1] = r), (t[2] = c));
  let l;
  t[3] === o
    ? (l = t[4])
    : ((l = o.formatMessage({
        id: `codex.recentTasksMenu.search`,
        defaultMessage: `Search recent tasks`,
        description: `Label for the recent tasks menu search input`,
      })),
      (t[3] = o),
      (t[4] = l));
  let u;
  t[5] !== o || t[6] !== r || t[7] !== n.length
    ? ((u =
        n.length > 0
          ? (0, Q.jsx)(`button`, {
              type: `button`,
              className: `flex items-center justify-center text-token-input-placeholder-foreground transition-colors hover:text-token-foreground`,
              onClick: () => r(``),
              "aria-label": o.formatMessage({
                id: `codex.recentTasksMenu.clearSearch`,
                defaultMessage: `Clear search`,
                description: `Button label to clear the recent tasks menu search input`,
              }),
              children: (0, Q.jsx)(R, { className: `icon-2xs` }),
            })
          : null),
      (t[5] = o),
      (t[6] = r),
      (t[7] = n.length),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== a || t[10] !== n || t[11] !== c || t[12] !== l || t[13] !== u
      ? ((d = (0, Q.jsxs)(`div`, {
          children: [
            s,
            (0, Q.jsx)(ae, {
              id: `recent-tasks-search`,
              autoFocus: a,
              value: n,
              onChange: c,
              placeholder: l,
              trailingContent: u,
            }),
          ],
        })),
        (t[9] = a),
        (t[10] = n),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function Ee() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`div`, {
          className: `flex h-48 items-center justify-center text-sm text-token-input-placeholder-foreground`,
          children: (0, Q.jsx)(g, {
            id: `codex.recentTasksMenu.empty`,
            defaultMessage: `No chats yet`,
            description: `Empty state for recent tasks menu`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var De = `w-full justify-between !px-[var(--padding-row-x)] !py-[var(--padding-row-y)] text-left`,
  $ = e(d(), 1);
function Oe(e) {
  let t = (0, Z.c)(64),
    { className: r } = e,
    i = h(),
    [a, o] = (0, $.useState)(!1),
    [s, c] = (0, $.useState)(``),
    [l, u] = n(we),
    d = I(),
    { data: f, isLoading: m, isError: _, refetch: v } = M(),
    y;
  t[0] === s ? (y = t[1]) : ((y = s.trim()), (t[0] = s), (t[1] = y));
  let b = y.length > 0,
    x;
  t[2] === b ? (x = t[3]) : ((x = { enabled: b }), (t[2] = b), (t[3] = x));
  let { data: S, isLoading: C, isError: w, refetch: T } = P(s, x),
    E;
  if (t[4] !== s || t[5] !== f || t[6] !== S || t[7] !== d) {
    bb0: {
      let e = s.trim(),
        n = e.length > 0 ? (S ?? []) : (f ?? []);
      if (e.length === 0 && d) {
        let e;
        t[9] === d
          ? (e = t[10])
          : ((e = (e) => e.id === d.id), (t[9] = d), (t[10] = e));
        let r = n.find(e);
        if (!r) {
          E = n;
          break bb0;
        }
        let i;
        (t[11] === d
          ? (i = t[12])
          : ((i = (e) => e.id !== d.id), (t[11] = d), (t[12] = i)),
          (E = [r, ...n.filter(i)]));
        break bb0;
      }
      E = n;
    }
    ((t[4] = s), (t[5] = f), (t[6] = S), (t[7] = d), (t[8] = E));
  } else E = t[8];
  let D = E,
    O;
  t[13] !== l || t[14] !== f
    ? ((O = f?.find((e) => e.id === l) ?? null),
      (t[13] = l),
      (t[14] = f),
      (t[15] = O))
    : (O = t[15]);
  let k = O,
    A;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(g, {
        id: `codex.recentTasksMenu.filterTooltip`,
        defaultMessage: `Filter tasks by environment`,
        description: `Tooltip explaining the environment filter button`,
      })),
      (t[16] = A))
    : (A = t[16]);
  let j = l ? `default` : `icon`,
    N;
  t[17] === r ? (N = t[18]) : ((N = p(`mr-1`, r)), (t[17] = r), (t[18] = N));
  let R;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(he, { className: `icon-2xs` })), (t[19] = R))
    : (R = t[19]);
  let z;
  t[20] !== l || t[21] !== k
    ? ((z =
        !!l &&
        k?.label &&
        (0, Q.jsx)(`span`, { className: `text-sm`, children: k.label })),
      (t[20] = l),
      (t[21] = k),
      (t[22] = z))
    : (z = t[22]);
  let B;
  t[23] === z
    ? (B = t[24])
    : ((B = (0, Q.jsxs)(`span`, {
        className: `flex items-center gap-1.5`,
        children: [R, z],
      })),
      (t[23] = z),
      (t[24] = B));
  let V;
  t[25] !== B || t[26] !== j || t[27] !== N
    ? ((V = (0, Q.jsx)(oe, {
        asChild: !0,
        children: (0, Q.jsx)(F, {
          tooltipContent: A,
          children: (0, Q.jsx)(L, {
            color: `ghost`,
            size: j,
            className: N,
            children: B,
          }),
        }),
      })),
      (t[25] = B),
      (t[26] = j),
      (t[27] = N),
      (t[28] = V))
    : (V = t[28]);
  let H;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Q.jsx)(`div`, {
        className: `pb-1 text-xs tracking-wide text-token-input-placeholder-foreground uppercase`,
        children: (0, Q.jsx)(g, {
          id: `codex.recentTasksMenu.filterCloudTasks`,
          defaultMessage: `Filter cloud tasks`,
          description: `Title for environment filter menu in recent tasks`,
        }),
      })),
      (t[29] = H))
    : (H = t[29]);
  let U = !l,
    W;
  t[30] === u
    ? (W = t[31])
    : ((W = () => {
        (u(null), o(!1));
      }),
      (t[30] = u),
      (t[31] = W));
  let te;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Q.jsx)(g, {
        id: `codex.recentTasksMenu.filterAll`,
        defaultMessage: `All`,
        description: `All environments filter option`,
      })),
      (t[32] = te))
    : (te = t[32]);
  let G;
  t[33] !== U || t[34] !== W
    ? ((G = (0, Q.jsx)(ke, { isSelected: U, onClick: W, children: te })),
      (t[33] = U),
      (t[34] = W),
      (t[35] = G))
    : (G = t[35]);
  let ne;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, Q.jsx)(K.Separator, {})), (t[36] = ne))
    : (ne = t[36]);
  let re;
  t[37] === i
    ? (re = t[38])
    : ((re = i.formatMessage({
        id: `composer.searchEnvironments`,
        defaultMessage: `Search environments`,
        description: `Search environments placeholder`,
      })),
      (t[37] = i),
      (t[38] = re));
  let ie;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (e) => c(e.currentTarget.value)), (t[39] = ie))
    : (ie = t[39]);
  let ae;
  t[40] !== s || t[41] !== re
    ? ((ae = (0, Q.jsx)(K.Section, {
        className: `my-1`,
        children: (0, Q.jsx)(K.SearchInput, {
          placeholder: re,
          value: s,
          onChange: ie,
        }),
      })),
      (t[40] = s),
      (t[41] = re),
      (t[42] = ae))
    : (ae = t[42]);
  let q;
  t[43] !== l ||
  t[44] !== s ||
  t[45] !== _ ||
  t[46] !== m ||
  t[47] !== w ||
  t[48] !== C ||
  t[49] !== D ||
  t[50] !== v ||
  t[51] !== T ||
  t[52] !== u
    ? ((q =
        s.trim().length > 0 && w
          ? (0, Q.jsxs)(K.Message, {
              className: `flex w-full items-center justify-center gap-2`,
              children: [
                (0, Q.jsx)(`span`, {
                  children: (0, Q.jsx)(g, {
                    id: `codex.environments.searchError`,
                    defaultMessage: `Failed to search environments.`,
                    description: `Error shown when environment search fails`,
                  }),
                }),
                (0, Q.jsx)(L, {
                  size: `default`,
                  color: `outline`,
                  onClick: () => {
                    T();
                  },
                  children: (0, Q.jsx)(g, {
                    id: `codex.common.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button`,
                  }),
                }),
              ],
            })
          : s.trim().length === 0 && _
            ? (0, Q.jsxs)(K.Message, {
                className: `flex w-full items-center justify-center gap-2`,
                children: [
                  (0, Q.jsx)(`span`, {
                    children: (0, Q.jsx)(g, {
                      id: `codex.environments.listError`,
                      defaultMessage: `Failed to load environments.`,
                      description: `Error shown when listing environments fails`,
                    }),
                  }),
                  (0, Q.jsx)(L, {
                    size: `default`,
                    color: `outline`,
                    onClick: () => {
                      v();
                    },
                    children: (0, Q.jsx)(g, {
                      id: `codex.common.retry`,
                      defaultMessage: `Retry`,
                      description: `Retry button`,
                    }),
                  }),
                ],
              })
            : D?.length > 0
              ? D.map((e) =>
                  (0, Q.jsx)(
                    ke,
                    {
                      isSelected: e.id === l,
                      onClick: () => {
                        (u(e.id), o(!1));
                      },
                      children: e.label,
                    },
                    e.id,
                  ),
                )
              : C || m
                ? (0, Q.jsx)(ee, {
                    className: `icon-xxs my-2 self-center text-token-description-foreground`,
                  })
                : (0, Q.jsx)(K.Message, {
                    centered: !0,
                    children: (0, Q.jsx)(g, {
                      id: `codex.environments.noEnvironmentsFound`,
                      defaultMessage: `No environments found`,
                      description: `Message shown when no Codex environments were found`,
                    }),
                  })),
      (t[43] = l),
      (t[44] = s),
      (t[45] = _),
      (t[46] = m),
      (t[47] = w),
      (t[48] = C),
      (t[49] = D),
      (t[50] = v),
      (t[51] = T),
      (t[52] = u),
      (t[53] = q))
    : (q = t[53]);
  let J;
  t[54] === q
    ? (J = t[55])
    : ((J = (0, Q.jsx)(K.Section, {
        className: `flex max-h-[140px] flex-col overflow-y-auto pb-1`,
        children: q,
      })),
      (t[54] = q),
      (t[55] = J));
  let Y;
  t[56] !== G || t[57] !== ae || t[58] !== J
    ? ((Y = (0, Q.jsx)(se, {
        className: `w-[240px]`,
        side: `top`,
        children: (0, Q.jsxs)(`div`, {
          className: `flex max-w-full flex-col py-1`,
          children: [H, G, ne, ae, J],
        }),
      })),
      (t[56] = G),
      (t[57] = ae),
      (t[58] = J),
      (t[59] = Y))
    : (Y = t[59]);
  let X;
  return (
    t[60] !== a || t[61] !== V || t[62] !== Y
      ? ((X = (0, Q.jsxs)(ce, { open: a, onOpenChange: o, children: [V, Y] })),
        (t[60] = a),
        (t[61] = V),
        (t[62] = Y),
        (t[63] = X))
      : (X = t[63]),
    X
  );
}
function ke(e) {
  let t = (0, Z.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    a = r && `font-medium`,
    o;
  t[0] === a ? (o = t[1]) : ((o = p(De, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Q.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r
        ? (0, Q.jsx)(te, { className: `icon-2xs shrink-0 opacity-75` })
        : null),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== o || t[8] !== s || t[9] !== c
      ? ((l = (0, Q.jsxs)(L, {
          color: `ghostActive`,
          size: `medium`,
          className: o,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var Ae = _({
  recent: {
    id: `codex.recentTasksMenu.recent`,
    defaultMessage: `All tasks`,
    description: `Menu title for recent Codex tasks`,
  },
  cloud: {
    id: `codex.recentTasksMenu.cloud`,
    defaultMessage: `Cloud tasks`,
    description: `Menu title for cloud Codex tasks`,
  },
  local: {
    id: `codex.recentTasksMenu.local`,
    defaultMessage: `Local tasks`,
    description: `Menu title for local Codex tasks`,
  },
});
function je(e) {
  let t = (0, Z.c)(31),
    { filter: n, onSelect: r } = e,
    i = Ae[n],
    [a, o] = (0, $.useState)(!1),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (0, Q.jsx)(`span`, { children: (0, Q.jsx)(g, { ...i }) })),
      (t[0] = i),
      (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(J, { className: `icon-2xs` })), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === s
    ? (l = t[4])
    : ((l = (0, Q.jsx)(oe, {
        asChild: !0,
        children: (0, Q.jsxs)(`button`, {
          type: `button`,
          className: `flex items-center gap-1 px-2 pt-2 text-sm font-medium text-token-input-placeholder-foreground hover:text-token-foreground`,
          children: [s, c],
        }),
      })),
      (t[3] = s),
      (t[4] = l));
  let u = n === `recent`,
    d;
  t[5] === r
    ? (d = t[6])
    : ((d = () => {
        (r(`recent`), o(!1));
      }),
      (t[5] = r),
      (t[6] = d));
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(g, {
        id: `codex.recentTasksMenu.recent`,
        defaultMessage: `All tasks`,
        description: `Menu title for recent Codex tasks`,
      })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = (0, Q.jsx)(Ne, { isSelected: u, onClick: d, children: f })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p))
    : (p = t[10]);
  let m = n === `cloud`,
    h;
  t[11] === r
    ? (h = t[12])
    : ((h = () => {
        (r(`cloud`), o(!1));
      }),
      (t[11] = r),
      (t[12] = h));
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(g, {
        id: `codex.recentTasksMenu.cloud`,
        defaultMessage: `Cloud tasks`,
        description: `Menu title for cloud Codex tasks`,
      })),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== m || t[15] !== h
    ? ((v = (0, Q.jsx)(Ne, { isSelected: m, onClick: h, children: _ })),
      (t[14] = m),
      (t[15] = h),
      (t[16] = v))
    : (v = t[16]);
  let y = n === `local`,
    b;
  t[17] === r
    ? (b = t[18])
    : ((b = () => {
        (r(`local`), o(!1));
      }),
      (t[17] = r),
      (t[18] = b));
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(g, {
        id: `codex.recentTasksMenu.local`,
        defaultMessage: `Local tasks`,
        description: `Menu title for local Codex tasks`,
      })),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== y || t[21] !== b
    ? ((S = (0, Q.jsx)(Ne, { isSelected: y, onClick: b, children: x })),
      (t[20] = y),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== v || t[24] !== S || t[25] !== p
    ? ((C = (0, Q.jsx)(se, {
        className: `w-[220px]`,
        onOpenAutoFocus: Me,
        children: (0, Q.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [p, v, S],
        }),
      })),
      (t[23] = v),
      (t[24] = S),
      (t[25] = p),
      (t[26] = C))
    : (C = t[26]);
  let w;
  return (
    t[27] !== a || t[28] !== C || t[29] !== l
      ? ((w = (0, Q.jsxs)(ce, { open: a, onOpenChange: o, children: [l, C] })),
        (t[27] = a),
        (t[28] = C),
        (t[29] = l),
        (t[30] = w))
      : (w = t[30]),
    w
  );
}
function Me(e) {
  e.preventDefault();
}
function Ne(e) {
  let t = (0, Z.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    a = r && `font-medium`,
    o;
  t[0] === a ? (o = t[1]) : ((o = p(De, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Q.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r
        ? (0, Q.jsx)(te, { className: `icon-2xs shrink-0 opacity-75` })
        : null),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== o || t[8] !== s || t[9] !== c
      ? ((l = (0, Q.jsxs)(L, {
          color: `ghostActive`,
          size: `medium`,
          className: o,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function Pe() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`div`, {
          className: `flex h-48 items-center justify-center text-sm text-token-input-placeholder-foreground`,
          children: (0, Q.jsx)(g, {
            id: `codex.recentTasksMenu.searchEmpty`,
            defaultMessage: `No result`,
            description: `Empty state for recent tasks menu search results`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Fe({ conversation: e, isBackgroundSubagentsEnabled: t }) {
  return !pe(e, t);
}
function Ie(e, t, n) {
  let r = V(),
    i = E(`2413345355`),
    a = y(O),
    o = i ? k : a,
    s = de(),
    c = (0, $.useRef)(new Map());
  return (0, $.useMemo)(() => {
    let i = Re(
      Le({
        tasks: e,
        localConversations: t,
        pendingWorktrees: r,
        envForFilter: n,
        threadSortKey: o,
        isBackgroundSubagentsEnabled: s,
      }),
      c.current,
    );
    return ((c.current = new Map(i.map((e) => [e.key, e]))), i);
  }, [e, n, s, t, r, o]);
}
function Le({
  tasks: e,
  localConversations: t,
  pendingWorktrees: n,
  envForFilter: r,
  threadSortKey: i,
  isBackgroundSubagentsEnabled: s,
}) {
  let l = e ?? [],
    u = t.filter((e) =>
      Fe({ conversation: e, isBackgroundSubagentsEnabled: s }),
    ),
    d = (0, ye.default)(
      r
        ? l.filter((e) => e.task_status_display?.environment_label === r.label)
        : l,
      `id`,
    ).map((e) => {
      let t =
        i === `updated_at`
          ? (e.updated_at ?? e.created_at ?? 0)
          : (e.created_at ?? e.updated_at ?? 0);
      return { kind: `remote`, key: o(e.id), at: t * 1e3, task: e };
    }),
    f = u.map((e) => {
      let t = i === `updated_at` ? e.updatedAt : e.createdAt;
      Number.isFinite(t) ||
        m.error(`local conversation has invalid createdAt or updatedAt`);
      let n = Number.isFinite(t)
        ? t
        : Number.isFinite(e.createdAt)
          ? e.createdAt
          : 0;
      return { kind: `local`, key: c(e.id), at: n, conversation: e };
    }),
    p = n.map((e) => ({
      kind: `pending-worktree`,
      key: a(e.id),
      at: e.createdAt,
      pendingWorktree: e,
    }));
  return [...d, ...f, ...p].sort((e, t) => t.at - e.at);
}
function Re(e, t) {
  return e.map((e) => {
    let n = t.get(e.key);
    if (n == null || n.at !== e.at) return e;
    switch (e.kind) {
      case `remote`:
        return n.kind === `remote` && n.task === e.task ? n : e;
      case `local`:
        return n.kind === `local` && n.conversation === e.conversation ? n : e;
      case `pending-worktree`:
        return n.kind === `pending-worktree` &&
          n.pendingWorktree === e.pendingWorktree
          ? n
          : e;
    }
  });
}
var ze = i(`recent-tasks-filter`, `recent`);
function Be(e) {
  let t = (0, Z.c)(31),
    {
      cloudtasksQuery: r,
      localConversations: i,
      onClose: a,
      autoFocusSearch: o,
    } = e,
    c = o === void 0 ? !1 : o,
    l = h(),
    { authMethod: u } = A(),
    [d, f] = n(ze),
    [p] = n(we),
    m = T(`/local/:conversationId`)?.params?.conversationId ?? null,
    { data: _ } = M(),
    v = de(),
    y;
  t[0] !== p || t[1] !== _
    ? ((y = _?.find((e) => e.id === p) ?? null),
      (t[0] = p),
      (t[1] = _),
      (t[2] = y))
    : (y = t[2]);
  let b = y,
    x;
  t[3] === v
    ? (x = t[4])
    : ((x = (e) => Fe({ conversation: e, isBackgroundSubagentsEnabled: v })),
      (t[3] = v),
      (t[4] = x));
  let S = i.filter(x),
    C = Ie(r.data, i, b),
    [w, E] = (0, $.useState)(``),
    D = (0, $.useDeferredValue)(w).trim().toLowerCase(),
    O = D.length > 0,
    k = C.filter(Ve),
    j = O
      ? k.filter((e) => {
          let { task: t } = e;
          return Ce(t.title, D);
        })
      : k,
    N = O ? S.filter((e) => Ce(s(e), D)) : S,
    P = O
      ? C.filter((e) =>
          e.kind === `remote`
            ? Ce(e.task.title, D)
            : e.kind === `local`
              ? Ce(s(e.conversation), D)
              : Ce(We(e.pendingWorktree, l), D),
        )
      : C,
    F;
  t[5] !== c || t[6] !== w
    ? ((F = (0, Q.jsx)(K.Section, {
        children: (0, Q.jsx)(Te, {
          searchQuery: w,
          onQueryChange: E,
          autoFocus: c,
        }),
      })),
      (t[5] = c),
      (t[6] = w),
      (t[7] = F))
    : (F = t[7]);
  let I;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(`div`, {
        className: `mx-2 border-t-[0.5px] border-token-border`,
        "aria-hidden": !0,
      })),
      (t[8] = I))
    : (I = t[8]);
  let R;
  t[9] !== u || t[10] !== d || t[11] !== f
    ? ((R =
        u === `chatgpt` &&
        (0, Q.jsxs)(K.Section, {
          className: `flex items-center justify-between px-[var(--padding-row-x)]`,
          children: [
            (0, Q.jsx)(je, { filter: d, onSelect: f }),
            d !== `local` && (0, Q.jsx)(Oe, {}),
          ],
        })),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = R))
    : (R = t[12]);
  let z = K,
    B =
      d === `cloud` &&
      (r.isError
        ? (0, Q.jsx)(Ke, {
            onRetry: () => {
              r.refetch();
            },
          })
        : r.isLoading
          ? (0, Q.jsx)(Ge, {})
          : j.length === 0
            ? O
              ? (0, Q.jsx)(Pe, {})
              : (0, Q.jsx)(Ee, {})
            : j.map((e) => (0, Q.jsx)(X, { task: e.task, onClose: a }, e.key))),
    V =
      d === `local` &&
      (N.length
        ? N.map((e) =>
            (0, Q.jsx)(
              He,
              {
                conversationId: e.id,
                updatedAt: e.updatedAt,
                isActive: m === e.id,
                onClose: a,
              },
              e.id,
            ),
          )
        : O
          ? (0, Q.jsx)(Pe, {})
          : (0, Q.jsx)(Ee, {})),
    H;
  t[13] !== m ||
  t[14] !== r ||
  t[15] !== d ||
  t[16] !== P ||
  t[17] !== O ||
  t[18] !== C.length ||
  t[19] !== a
    ? ((H =
        d === `recent` &&
        (r.isError && C.length === 0
          ? (0, Q.jsx)(Ke, {
              onRetry: () => {
                r.refetch();
              },
            })
          : r.isLoading && C.length === 0
            ? (0, Q.jsx)(Ge, {})
            : P.length === 0
              ? O
                ? (0, Q.jsx)(Pe, {})
                : (0, Q.jsx)(Ee, {})
              : (0, Q.jsxs)(Q.Fragment, {
                  children: [
                    r.isError &&
                      (0, Q.jsxs)(`div`, {
                        className: `mx-1 my-1 flex items-center justify-between gap-2 px-1 text-base text-token-foreground`,
                        children: [
                          (0, Q.jsx)(g, {
                            id: `codex.recentTasksMenu.errorCloud.inline`,
                            defaultMessage: `Failed to load cloud tasks.`,
                            description: `Inline error indicator for cloud tasks in recent feed`,
                          }),
                          (0, Q.jsx)(L, {
                            size: `default`,
                            color: `outline`,
                            onClick: () => {
                              r.refetch();
                            },
                            children: (0, Q.jsx)(g, {
                              id: `codex.common.retry`,
                              defaultMessage: `Retry`,
                              description: `Retry button`,
                            }),
                          }),
                        ],
                      }),
                    r.isPending &&
                      !C.length &&
                      (0, Q.jsx)(`div`, {
                        className: `mx-1 my-1 flex items-center gap-2 text-sm text-token-input-placeholder-foreground`,
                        children: (0, Q.jsx)(ee, { className: `icon-xs` }),
                      }),
                    P.map((e) =>
                      (0, Q.jsx)(
                        Ue,
                        {
                          item: e,
                          isActive:
                            e.kind === `local` && m === e.conversation.id,
                          onClose: a,
                        },
                        e.key,
                      ),
                    ),
                  ],
                }))),
      (t[13] = m),
      (t[14] = r),
      (t[15] = d),
      (t[16] = P),
      (t[17] = O),
      (t[18] = C.length),
      (t[19] = a),
      (t[20] = H))
    : (H = t[20]);
  let U;
  t[21] !== B || t[22] !== V || t[23] !== H || t[24] !== z.Section
    ? ((U = (0, Q.jsxs)(z.Section, {
        className: `vertical-scroll-fade-mask flex max-h-[60vh] flex-col gap-0 overflow-y-auto pb-1`,
        children: [B, V, H],
      })),
      (t[21] = B),
      (t[22] = V),
      (t[23] = H),
      (t[24] = z.Section),
      (t[25] = U))
    : (U = t[25]);
  let W;
  return (
    t[26] !== U || t[27] !== F || t[28] !== I || t[29] !== R
      ? ((W = (0, Q.jsxs)(`div`, {
          className: `flex max-h-[300px] w-[calc(var(--radix-popper-available-width)_-_var(--padding-panel))] flex-col gap-1`,
          children: [F, I, R, U],
        })),
        (t[26] = U),
        (t[27] = F),
        (t[28] = I),
        (t[29] = R),
        (t[30] = W))
      : (W = t[30]),
    W
  );
}
function Ve(e) {
  return e.kind === `remote`;
}
var He = (0, $.memo)(function (e) {
    let t = (0, Z.c)(7),
      { conversationId: n, updatedAt: r, isActive: i, onClose: a } = e,
      o;
    t[0] === r
      ? (o = t[1])
      : ((o =
          r == null
            ? void 0
            : (0, Q.jsx)(Y, { dateString: new Date(r).toISOString() })),
        (t[0] = r),
        (t[1] = o));
    let s;
    return (
      t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== o
        ? ((s = (0, Q.jsx)(ue, {
            conversationId: n,
            isActive: i,
            metaContent: o,
            onClick: a,
          })),
          (t[2] = n),
          (t[3] = i),
          (t[4] = a),
          (t[5] = o),
          (t[6] = s))
        : (s = t[6]),
      s
    );
  }),
  Ue = (0, $.memo)(function (e) {
    let t = (0, Z.c)(20),
      { item: n, isActive: r, onClose: i } = e,
      { cancelPendingWorktree: a } = H();
    switch (n.kind) {
      case `remote`: {
        let e;
        return (
          t[0] !== n.task || t[1] !== i
            ? ((e = (0, Q.jsx)(X, { task: n.task, onClose: i })),
              (t[0] = n.task),
              (t[1] = i),
              (t[2] = e))
            : (e = t[2]),
          e
        );
      }
      case `local`: {
        let e;
        t[3] === n.conversation.updatedAt
          ? (e = t[4])
          : ((e =
              n.conversation.updatedAt == null
                ? void 0
                : (0, Q.jsx)(Y, {
                    dateString: new Date(
                      n.conversation.updatedAt,
                    ).toISOString(),
                  })),
            (t[3] = n.conversation.updatedAt),
            (t[4] = e));
        let a;
        return (
          t[5] !== r || t[6] !== n.conversation.id || t[7] !== i || t[8] !== e
            ? ((a = (0, Q.jsx)(ue, {
                conversationId: n.conversation.id,
                isActive: r,
                metaContent: e,
                onClick: i,
              })),
              (t[5] = r),
              (t[6] = n.conversation.id),
              (t[7] = i),
              (t[8] = e),
              (t[9] = a))
            : (a = t[9]),
          a
        );
      }
      case `pending-worktree`: {
        let e;
        t[10] !== n.pendingWorktree.id || t[11] !== i
          ? ((e = () => {
              (S.dispatchHostMessage({
                type: `navigate-to-route`,
                path: `/worktree-init-v2/${n.pendingWorktree.id}`,
              }),
                i());
            }),
            (t[10] = n.pendingWorktree.id),
            (t[11] = i),
            (t[12] = e))
          : (e = t[12]);
        let r;
        t[13] !== a || t[14] !== n.pendingWorktree.id
          ? ((r = () => {
              a(n.pendingWorktree.id);
            }),
            (t[13] = a),
            (t[14] = n.pendingWorktree.id),
            (t[15] = r))
          : (r = t[15]);
        let o;
        return (
          t[16] !== n.pendingWorktree || t[17] !== e || t[18] !== r
            ? ((o = (0, Q.jsx)(le, {
                task: n.pendingWorktree,
                hasAttention: n.pendingWorktree.needsAttention,
                onClick: e,
                onArchive: r,
              })),
              (t[16] = n.pendingWorktree),
              (t[17] = e),
              (t[18] = r),
              (t[19] = o))
            : (o = t[19]),
          o
        );
      }
    }
  });
function We(e, t) {
  let n = e.label?.trim();
  return n && n.length > 0
    ? n
    : e.phase === `failed`
      ? t.formatMessage({
          id: `recentTasks.worktreeInitFailedTitle`,
          defaultMessage: `Worktree init failed`,
          description: `Worktree row title when the init script fails`,
        })
      : t.formatMessage({
          id: `recentTasks.worktreeSettingUpTitle`,
          defaultMessage: `Setting up worktree`,
          description: `Worktree row title while init is pending`,
        });
}
function Ge() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`div`, {
          className: `flex h-48 items-center justify-center gap-2 text-sm text-token-input-placeholder-foreground`,
          children: (0, Q.jsx)(ee, { className: `icon-xs` }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ke(e) {
  let t = (0, Z.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(g, {
        id: `codex.recentTasksMenu.errorCloud`,
        defaultMessage: `Failed to load tasks.`,
        description: `Error state for cloud tasks in recent tasks menu`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(g, {
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
      : ((a = (0, Q.jsxs)(`div`, {
          className: `flex h-48 items-center justify-center gap-3 text-sm text-token-input-placeholder-foreground`,
          children: [
            r,
            (0, Q.jsx)(L, {
              size: `default`,
              color: `outline`,
              onClick: n,
              children: i,
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function qe() {
  let e = (0, Z.c)(46),
    t = h(),
    { authMethod: n } = A(),
    r = C(),
    { data: i } = D(),
    a = de(),
    [o, s] = (0, $.useState)(!1),
    c;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = () => {
        s(!1);
      }),
      (e[0] = c))
    : (c = e[0]);
  let l = W(c),
    u = o && n === `chatgpt`,
    d;
  e[1] === u
    ? (d = e[2])
    : ((d = { taskFilter: `current`, limit: 20, enabled: u }),
      (e[1] = u),
      (e[2] = d));
  let f = N(d),
    p;
  e[3] === f.data
    ? (p = e[4])
    : ((p = f.data ?? []), (e[3] = f.data), (e[4] = p));
  let m;
  e[5] === p ? (m = e[6]) : ((m = p.filter(Ye)), (e[5] = p), (e[6] = m));
  let _ = m,
    v;
  if (e[7] !== i || e[8] !== a) {
    let t;
    (e[10] === a
      ? (t = e[11])
      : ((t = (e) => Fe({ conversation: e, isBackgroundSubagentsEnabled: a })),
        (e[10] = a),
        (e[11] = t)),
      (v = (i ?? []).filter(t).filter(Je)),
      (e[7] = i),
      (e[8] = a),
      (e[9] = v));
  } else v = e[9];
  let y = v,
    b = _.length + y.length,
    x = r.pathname !== `/` && b > 0,
    S;
  e[12] !== n || e[13] !== o || e[14] !== f
    ? ((S = () => {
        o && n === `chatgpt` && f.refetch();
      }),
      (e[12] = n),
      (e[13] = o),
      (e[14] = f),
      (e[15] = S))
    : (S = e[15]);
  let w;
  (e[16] === o ? (w = e[17]) : ((w = [o]), (e[16] = o), (e[17] = w)),
    (0, $.useEffect)(S, w));
  let T, E;
  (e[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        let e = (e) => s(!0);
        return (
          window.addEventListener(`open-recent-tasks-menu`, e),
          () => window.removeEventListener(`open-recent-tasks-menu`, e)
        );
      }),
      (E = []),
      (e[18] = T),
      (e[19] = E))
    : ((T = e[18]), (E = e[19])),
    (0, $.useEffect)(T, E));
  let O;
  e[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(g, {
        id: `codex.recentTasksMenu.tooltip`,
        defaultMessage: `Task history`,
        description: `Tooltip text for recent tasks menu`,
      })),
      (e[20] = O))
    : (O = e[20]);
  let k;
  e[21] !== b || e[22] !== t
    ? ((k = t.formatMessage(
        {
          id: `codex.recentTasksMenu.trigger`,
          defaultMessage: `Recent tasks. {count, plural, one {# in progress} other {# in progress}}`,
          description: `Accessible label for opening the recent tasks menu`,
        },
        { count: b },
      )),
      (e[21] = b),
      (e[22] = t),
      (e[23] = k))
    : (k = e[23]);
  let j;
  e[24] === x
    ? (j = e[25])
    : ((j = x
        ? (0, Q.jsx)(`span`, {
            className: `relative inline-flex size-4 justify-center`,
            children: (0, Q.jsx)(ee, { className: `icon-xs` }),
          })
        : (0, Q.jsx)(me, { className: `icon-xs hover:opacity-80` })),
      (e[24] = x),
      (e[25] = j));
  let M;
  e[26] !== b || e[27] !== t
    ? ((M = t.formatMessage(
        {
          id: `codex.recentTasksMenu.count`,
          defaultMessage: `{count, plural, =0 {No tasks in progress} one {# task in progress} other {# tasks in progress}}`,
          description: `Live region text announcing in-progress task count for recent tasks trigger`,
        },
        { count: b },
      )),
      (e[26] = b),
      (e[27] = t),
      (e[28] = M))
    : (M = e[28]);
  let P;
  e[29] === M
    ? (P = e[30])
    : ((P = (0, Q.jsx)(`span`, {
        className: `sr-only`,
        "aria-live": `polite`,
        "aria-atomic": `true`,
        children: M,
      })),
      (e[29] = M),
      (e[30] = P));
  let I;
  e[31] !== k || e[32] !== j || e[33] !== P
    ? ((I = (0, Q.jsx)(F, {
        tooltipContent: O,
        children: (0, Q.jsxs)(L, {
          color: `ghost`,
          size: `icon`,
          "aria-label": k,
          children: [j, P],
        }),
      })),
      (e[31] = k),
      (e[32] = j),
      (e[33] = P),
      (e[34] = I))
    : (I = e[34]);
  let R;
  e[35] === i ? (R = e[36]) : ((R = i ?? []), (e[35] = i), (e[36] = R));
  let z;
  e[37] !== l || e[38] !== o || e[39] !== f || e[40] !== R
    ? ((z = (0, Q.jsx)(Be, {
        cloudtasksQuery: f,
        localConversations: R,
        onClose: l,
        autoFocusSearch: o,
      })),
      (e[37] = l),
      (e[38] = o),
      (e[39] = f),
      (e[40] = R),
      (e[41] = z))
    : (z = e[41]);
  let B;
  return (
    e[42] !== o || e[43] !== I || e[44] !== z
      ? ((B = (0, Q.jsx)(q, {
          contentClassName: `!pb-0 mt-[9px]`,
          triggerButton: I,
          open: o,
          onOpenChange: s,
          children: z,
        })),
        (e[42] = o),
        (e[43] = I),
        (e[44] = z),
        (e[45] = B))
      : (B = e[45]),
    B
  );
}
function Je(e) {
  return r(e);
}
function Ye(e) {
  let t = e.task_status_display?.latest_turn_status_display?.turn_status;
  return t === `in_progress` || t === `pending`;
}
function Xe(e) {
  let t = (0, Z.c)(39),
    { className: n, title: r, onBack: i, trailing: a } = e,
    o = C(),
    s = i ?? Qe,
    c = o.pathname === `/`,
    l = Ze,
    { data: u } = D(),
    d = c,
    f;
  t[0] === d
    ? (f = t[1])
    : ((f = { taskFilter: `current`, limit: 20, enabled: d }),
      (t[0] = d),
      (t[1] = f));
  let m = N(f),
    h;
  t[2] === u ? (h = t[3]) : ((h = u ?? []), (t[2] = u), (t[3] = h));
  let g = Ie(m.data, h, null),
    _;
  t[4] === n
    ? (_ = t[5])
    : ((_ = p(`draggable extension:px-panel`, n)), (t[4] = n), (t[5] = _));
  let v = `justify-between`,
    y;
  t[6] === v
    ? (y = t[7])
    : ((y = p(`flex items-center electron:h-toolbar extension:py-row-y`, v)),
      (t[6] = v),
      (t[7] = y));
  let b;
  t[8] !== i || t[9] !== !1
    ? ((b = null), (t[8] = i), (t[9] = !1), (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] !== s || t[12] !== g || t[13] !== r
    ? ((x = (0, Q.jsx)(`div`, {
        className: `mr-3 line-clamp-1 flex min-w-0 flex-1 items-center gap-1 truncate`,
        style: { viewTransitionName: `header-title` },
        children: r
          ? (0, Q.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-1`,
              children: [
                (0, Q.jsx)(et, { onClick: s }),
                (0, Q.jsx)(L, {
                  color: `ghostActive`,
                  type: `button`,
                  onClick: l,
                  className: `min-w-0 flex-1 truncate !px-0 !py-0 text-left text-sm text-token-foreground hover:!bg-transparent hover:opacity-80 electron:font-medium`,
                  children: (0, Q.jsx)(`span`, {
                    className: `truncate`,
                    children: r,
                  }),
                }),
              ],
            })
          : (0, Q.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, Q.jsx)($e, {
                mergedTasks: g,
                onBack: s,
                showBackButton: !0,
              }),
            }),
      })),
      (t[11] = s),
      (t[12] = g),
      (t[13] = r),
      (t[14] = x))
    : (x = t[14]);
  let S;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(qe, {})), (t[15] = S))
    : (S = t[15]);
  let w;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(B, { extension: !0, children: (0, Q.jsx)(fe, {}) })),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] === !0
    ? (T = t[18])
    : ((T = (0, Q.jsx)(ge, {})), (t[17] = !0), (t[18] = T));
  let E;
  t[19] === T
    ? (E = t[20])
    : ((E = (0, Q.jsx)(B, {
        chromeExtension: !0,
        extension: !0,
        children: (0, Q.jsx)(`div`, {
          className: `flex flex-shrink-0 items-center`,
          children: (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [S, w, T],
          }),
        }),
      })),
      (t[19] = T),
      (t[20] = E));
  let O;
  t[21] !== E || t[22] !== a
    ? ((O = (0, Q.jsxs)(`div`, {
        className: `flex flex-shrink-0 items-center gap-1`,
        children: [a, E],
      })),
      (t[21] = E),
      (t[22] = a),
      (t[23] = O))
    : (O = t[23]);
  let k;
  t[24] !== O || t[25] !== y || t[26] !== b || t[27] !== x
    ? ((k = (0, Q.jsxs)(`div`, { className: y, children: [b, x, O] })),
      (t[24] = O),
      (t[25] = y),
      (t[26] = b),
      (t[27] = x),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] !== c || t[30] !== g || t[31] !== m
    ? ((A =
        c &&
        (0, Q.jsx)(`div`, {
          children: (0, Q.jsx)(be, { tasksQuery: m, mergedTasks: g }),
        })),
      (t[29] = c),
      (t[30] = g),
      (t[31] = m),
      (t[32] = A))
    : (A = t[32]);
  let j;
  t[33] === A
    ? (j = t[34])
    : ((j = (0, Q.jsx)(B, { extension: !0, children: A })),
      (t[33] = A),
      (t[34] = j));
  let M;
  return (
    t[35] !== k || t[36] !== j || t[37] !== _
      ? ((M = (0, Q.jsxs)(`div`, { className: _, children: [k, j] })),
        (t[35] = k),
        (t[36] = j),
        (t[37] = _),
        (t[38] = M))
      : (M = t[38]),
    M
  );
}
function Ze() {
  window.dispatchEvent(new CustomEvent(`open-recent-tasks-menu`));
}
function Qe() {
  U(`newThread`);
}
function $e(e) {
  let n = (0, Z.c)(21),
    { mergedTasks: r, onBack: i, showBackButton: a } = e,
    o = C().pathname === `/`,
    s = T(`/local/:conversationId`)?.params?.conversationId ?? null,
    c;
  n[0] === s
    ? (c = n[1])
    : ((c = s == null ? null : t(s)), (n[0] = s), (n[1] = c));
  let u = c,
    d = T(`/remote/:taskId`)?.params?.taskId ?? null,
    { data: f } = j(d),
    p = v(l, u),
    m = v(z, u);
  if (d && f?.task?.title) {
    let e;
    n[2] !== i || n[3] !== a
      ? ((e = a ? (0, Q.jsx)(et, { onClick: i }) : null),
        (n[2] = i),
        (n[3] = a),
        (n[4] = e))
      : (e = n[4]);
    let t;
    n[5] === f.task.title
      ? (t = n[6])
      : ((t = (0, Q.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base text-token-foreground`,
          children: f.task.title,
        })),
        (n[5] = f.task.title),
        (n[6] = t));
    let r;
    return (
      n[7] !== e || n[8] !== t
        ? ((r = (0, Q.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [e, t],
          })),
          (n[7] = e),
          (n[8] = t),
          (n[9] = r))
        : (r = n[9]),
      r
    );
  }
  if (u && p) {
    let e;
    n[10] !== i || n[11] !== a
      ? ((e = a ? (0, Q.jsx)(et, { onClick: i }) : null),
        (n[10] = i),
        (n[11] = a),
        (n[12] = e))
      : (e = n[12]);
    let t;
    n[13] === m
      ? (t = n[14])
      : ((t =
          m ||
          (0, Q.jsx)(g, {
            id: `codex.taskRow.title`,
            defaultMessage: `New chat`,
            description: `Default title for a Codex thread that doesn't have a title`,
          })),
        (n[13] = m),
        (n[14] = t));
    let r;
    n[15] === t
      ? (r = n[16])
      : ((r = (0, Q.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base text-token-foreground`,
          children: t,
        })),
        (n[15] = t),
        (n[16] = r));
    let o;
    return (
      n[17] !== e || n[18] !== r
        ? ((o = (0, Q.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [e, r],
          })),
          (n[17] = e),
          (n[18] = r),
          (n[19] = o))
        : (o = n[19]),
      o
    );
  }
  if (o) {
    if (r.length === 0) return null;
    let e;
    return (
      n[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(g, {
            id: `header.recentChats`,
            defaultMessage: `Tasks`,
            description: `Header label for recent tasks`,
          })),
          (n[20] = e))
        : (e = n[20]),
      e
    );
  }
  return null;
}
function et(e) {
  let t = (0, Z.c)(7),
    { onClick: n } = e,
    r = h(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(g, { ...tt.backButton })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = r.formatMessage(tt.backButton)), (t[1] = r), (t[2] = a));
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(ne, { className: `size-3` })), (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== n || t[5] !== a
      ? ((s = (0, Q.jsx)(B, {
          chromeExtension: !0,
          extension: !0,
          children: (0, Q.jsx)(F, {
            tooltipContent: i,
            children: (0, Q.jsx)(L, {
              color: `ghost`,
              size: `icon`,
              onClick: n,
              className: `opacity-70 hover:bg-transparent hover:opacity-100 focus:bg-transparent active:bg-transparent`,
              "aria-label": a,
              children: o,
            }),
          }),
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var tt = _({
  backButton: {
    id: `header.back`,
    defaultMessage: `Back`,
    description: `Back button label for returning to the previous screen`,
  },
});
export { Xe as t };
//# sourceMappingURL=header-Bgvtt60z.js.map
