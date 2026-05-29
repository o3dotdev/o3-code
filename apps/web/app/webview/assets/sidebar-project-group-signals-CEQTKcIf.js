import { s as e } from "./chunk-Bj-mKKzh.js";
import { br as t, kr as n } from "./src-C.js";
import {
  C as r,
  E as i,
  Ii as a,
  K as o,
  Li as s,
  Pi as c,
  T as l,
  Z as u,
  a as d,
  bt as f,
  cn as p,
  et as m,
  ft as h,
  g,
  h as _,
  hn as v,
  j as ee,
  ln as y,
  lt as b,
  mt as x,
  n as S,
  nt as C,
  po as w,
  pt as te,
  sn as ne,
  st as re,
  v as T,
  vt as ie,
  wo as E,
  xa as ae,
} from "./app-server-manager-signals-DkRDRgNB.js";
import {
  $ as D,
  Q as O,
  S as k,
  _ as A,
  d as j,
  et as M,
  h as oe,
  ht as se,
  rt as ce,
} from "./setting-storage.js";
import { t as le } from "./request-DWZTrEAr.js";
import { n as N, u as P } from "./thread-context-inputs-DBrOekVr.js";
import { r as ue } from "./device-connections.js";
import { D as F } from "./sidebar-signals.js";
import { n as de } from "./local-task-row-signals-BzazYVei.js";
import {
  i as fe,
  n as pe,
  o as me,
  p as I,
  r as he,
  s as L,
  t as R,
  u as ge,
} from "./sidebar-project-groups.js";
var _e = e(ae(), 1),
  ve = [],
  ye = [],
  be = [],
  xe = [],
  z = [],
  B = [],
  Se = [],
  V = { type: `loading` },
  Ce = { type: `idle`, unread: !0 },
  H = xe,
  U = B,
  W = B,
  G = ce(k, () => ({
    enabled: !0,
    placeholderData: se,
    queryFn: async () => {
      try {
        return (
          await le.safeGet(`/wham/tasks/list`, {
            parameters: { query: { limit: 20, task_filter: `current` } },
          })
        ).items;
      } catch (e) {
        if (
          e instanceof oe &&
          (e.status === 401 || e.status === 403 || e.status === 404)
        )
          return [];
        throw e;
      }
    },
    queryKey: [`tasks`, 20, `current`],
    refetchInterval: (e) =>
      e.state.data?.some((e) => {
        let t = e.task_status_display?.latest_turn_status_display?.turn_status;
        return t === `pending` || t === `in_progress`;
      })
        ? 15e3
        : 6e4,
    refetchIntervalInBackground: !0,
    staleTime: A.ONE_MINUTE,
  })),
  K = O(k, ({ get: e }) => He(e)),
  we = O(k, ({ get: e }) =>
    He(e)
      .filter((e) => e.autoConnect)
      .sort((e, t) => e.hostId.localeCompare(t.hostId)),
  ),
  q = O(k, ({ get: e }) => new Set(e(we).map((e) => e.hostId))),
  Te = O(k, ({ get: e }) => Ue(e).map((e) => e.id)),
  J = D(k, (e, { get: t }) => Ue(t).find((t) => t.id === e) ?? null),
  Ee = O(k, ({ get: e }) => {
    let t = e(F),
      n = [w, ...e(q)],
      r = new Set(),
      i = [];
    for (let a of n)
      for (let n of e(u, a))
        r.has(n) ||
          (e(b, n) ??
            (r.add(n), i.push({ conversationId: n, at: Le(e, n, t) })));
    return i.length === 0
      ? ((H = xe), H)
      : (i.sort((e, t) => t.at - e.at),
        (H = Z(
          H,
          i.map((e) => e.conversationId),
        )),
        H);
  }),
  De = D(k, (e, { get: t }) => t(G).data?.find((t) => t.id === e) ?? null),
  Oe = M(k, (e) => {
    let t = null;
    return O(k, ({ get: n }) => {
      let a = n(F),
        s = n(_, e),
        c = n(ie, e),
        u = n(C, e),
        p = n(x, e) ?? 0,
        v = n(o, e),
        y = n(g, e),
        b = n(r, e),
        S = n(l, e),
        w = n(i, e),
        T = n(ee, e),
        E = n(m, e),
        ae = n(re, e),
        D = n(h, e),
        O = n(te, e),
        k = n(f, e),
        A = n(d, e)?.getConversation(e) ?? null;
      if (A == null) return ((t = null), null);
      let j = {
        kind: `local`,
        key: ne(A.id),
        at: Ve(a === `updated_at` ? c : s, s),
        conversation: A,
        isInProgress: Re({ latestTurnStatus: v, resumeState: u, turnCount: p }),
      };
      return t != null &&
        t.key === j.key &&
        t.at === j.at &&
        t.isInProgress === j.isInProgress &&
        t.conversation.cwd === y &&
        t.conversation.gitInfo?.branch === b &&
        t.conversation.hasUnreadTurn === S &&
        (t.conversation.hostId ?? null) === w &&
        ze(t) === T &&
        t.conversation.requests === E &&
        (t.conversation.source ?? null) === ae &&
        (t.conversation.threadRuntimeStatus ?? null) === D &&
        t.conversation.title === O &&
        (t.conversation.workspaceKind ?? null) === k
        ? t
        : ((t = j), j);
    });
  }),
  ke = M(k, (e) => {
    let t = null;
    return O(k, ({ get: n }) => {
      let r = n(De, e);
      if (r == null) return ((t = null), null);
      let i = { kind: `remote`, key: y(r.id), at: Be(r, n(F)), task: r };
      return t != null && t.key === i.key && t.at === i.at && t.task === i.task
        ? t
        : ((t = i), i);
    });
  }),
  Ae = M(k, (e) => {
    let t = null;
    return O(k, ({ get: n }) => {
      let r = n(J, e);
      if (r == null) return ((t = null), null);
      let i = {
        kind: `pending-worktree`,
        key: p(r.id),
        at: r.createdAt,
        pendingWorktree: r,
      };
      return t != null &&
        t.key === i.key &&
        t.at === i.at &&
        t.pendingWorktree === i.pendingWorktree
        ? t
        : ((t = i), i);
    });
  }),
  Y = D(k, (e, { get: t }) => {
    let n = v(e);
    switch (n?.kind) {
      case `local`:
        return t(t(Oe, n.conversationId));
      case `remote`:
        return t(t(ke, n.taskId));
      case `pending-worktree`:
        return t(t(Ae, n.pendingWorktreeId));
      case void 0:
        return null;
    }
  }),
  je = D(k, (e, { get: t }) => {
    let n = v(e);
    switch (n?.kind) {
      case `local`:
        return (t(d, n.conversationId)?.getConversation(n.conversationId) ??
          null) == null
          ? null
          : {
              kind: `local`,
              key: n.key,
              conversationId: n.conversationId,
              cwd: t(g, n.conversationId),
              gitBranch: t(r, n.conversationId),
              hostId: t(i, n.conversationId),
              source: t(re, n.conversationId),
              workspaceKind: t(f, n.conversationId),
            };
      case `remote`:
        return t(t(ke, n.taskId));
      case `pending-worktree`:
        return t(t(Ae, n.pendingWorktreeId));
      case void 0:
        return null;
    }
  }),
  Me = O(k, ({ get: e }) => {
    let t = e(F),
      n = (0, _e.default)(e(G).data ?? Se, `id`).map((e) => ({
        key: y(e.id),
        at: Be(e, t),
      })),
      r = e(Ee).map((n) => ({ key: ne(n), at: Le(e, n, t) })),
      i = e(Te).flatMap((t) => {
        let n = e(J, t);
        return n == null ? [] : [{ key: p(n.id), at: n.createdAt }];
      });
    return Ie([...n, ...r, ...i]);
  }),
  Ne = O(
    k,
    ({ get: e }) => (
      (W = Z(
        W,
        e(Me).filter((t) => {
          let n = e(Y, t);
          switch (n?.kind) {
            case `local`:
              return n.conversation.hasUnreadTurn === !0;
            case `remote`:
              return n.task.has_unread_turn === !0;
            case `pending-worktree`:
            case void 0:
              return !1;
          }
        }),
      )),
      W
    ),
  ),
  Pe = M(k, (e) => {
    let t = z;
    return O(k, ({ get: n }) =>
      e.length === 0
        ? ((t = z), z)
        : ((t = Z(
            t,
            e.flatMap((e) => {
              let t = n(Y, e);
              return t == null ? [] : [t];
            }),
          )),
          t),
    );
  }),
  Fe = D(k, (e, { get: t }) => {
    let n = !1;
    for (let r of e) {
      let e = v(r);
      switch (e?.kind) {
        case `local`:
          if (t(de, e.conversationId) === `loading`) return V;
          t(l, e.conversationId) === !0 && (n = !0);
          break;
        case `remote`: {
          let r = t(De, e.taskId),
            i = r?.task_status_display?.latest_turn_status_display?.turn_status;
          if (i === `in_progress` || i === `pending`) return V;
          r?.has_unread_turn === !0 && (n = !0);
          break;
        }
        case `pending-worktree`:
        case void 0:
          break;
      }
    }
    return n ? Ce : null;
  }),
  X = D(k, (e, { get: t }) =>
    e.flatMap((e) => {
      let n = t(je, e);
      return n == null ? [] : [n];
    }),
  );
function Ie(e) {
  return e.length === 0
    ? ((U = B), U)
    : ((U = Z(
        U,
        e
          .slice()
          .sort((e, t) => t.at - e.at)
          .map((e) => e.key),
      )),
      U);
}
function Z(e, t) {
  if (e.length !== t.length) return t;
  for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return t;
  return e;
}
function Le(e, t, n) {
  let r = e(_, t),
    i = e(ie, t);
  return Ve(n === `updated_at` ? i : r, r);
}
function Re({ latestTurnStatus: e, resumeState: t, turnCount: n }) {
  return t == null || t === `needs_resume`
    ? !1
    : n === 0
      ? t === `resuming`
      : e === `inProgress`;
}
function ze(e) {
  return e.conversation.turns.at(-1)?.status === `inProgress`;
}
function Be(e, t) {
  return (
    (t === `updated_at`
      ? (e.updated_at ?? e.created_at ?? 0)
      : (e.created_at ?? e.updated_at ?? 0)) * 1e3
  );
}
function Ve(e, t) {
  return e != null && Number.isFinite(e)
    ? e
    : t != null && Number.isFinite(t)
      ? t
      : 0;
}
function He(e) {
  return ue({
    addedRemoteControlEnvIds: c(e, n.ADDED_REMOTE_CONTROL_ENV_IDS),
    remoteSshConnections: E(e, `remote_connections`) ?? be,
    remoteControlConnections: E(e, `remote_control_connections`) ?? ye,
  });
}
function Ue(e) {
  return E(e, `pending_worktrees`) ?? ve;
}
function We({ entries: e, remoteConnections: t }) {
  let n = [],
    r = new Map(),
    i = new Map(t.map((e) => [e.hostId, e.displayName]));
  for (let t of e) {
    let e = Je(t, i, r);
    (e.threadKeys.length === 0 && n.push(e), e.threadKeys.push(t.key));
  }
  return n;
}
function Ge({ groups: e, remoteConnections: t }) {
  let n = new Set(e.map((e) => e.key)),
    r = [];
  for (let e of t) {
    let t = `host:${e.hostId}`;
    n.has(t) ||
      (n.add(t),
      r.push({
        key: t,
        kind: `remote`,
        hostId: e.hostId,
        hostDisplayName: e.displayName,
        threadKeys: [],
      }));
  }
  return [...e, ...r];
}
function Ke(e, t) {
  let n = new Set(e.map((e) => e.key)),
    r = (t ?? []).filter((e) => n.has(e)),
    i = new Set(r);
  for (let t of e) i.has(t.key) || (r.push(t.key), i.add(t.key));
  return r;
}
function qe(e, t) {
  let n = Ke(e, t),
    r = new Map(n.map((e, t) => [e, t]));
  return [...e].sort(
    (e, t) => (r.get(e.key) ?? 2 ** 53 - 1) - (r.get(t.key) ?? 2 ** 53 - 1),
  );
}
function Je(e, t, n) {
  let r = Ye(e, n);
  if (r != null) return r;
  let i = Xe(e, t);
  return (n.set(i.key, i), i);
}
function Ye(e, t) {
  switch (e.kind) {
    case `local`: {
      let n = e.hostId;
      return n != null && n !== `local`
        ? (t.get(`host:${n}`) ?? null)
        : (t.get(`local`) ?? null);
    }
    case `remote`:
      return t.get(`cloud`) ?? null;
    case `pending-worktree`: {
      let n = e.pendingWorktree.hostId;
      return n === `local`
        ? (t.get(`local`) ?? null)
        : (t.get(`host:${n}`) ?? null);
    }
  }
}
function Xe(e, t) {
  switch (e.kind) {
    case `local`: {
      let n = e.hostId;
      return n != null && n !== `local`
        ? {
            key: `host:${n}`,
            kind: `remote`,
            hostId: n,
            hostDisplayName: t.get(n) ?? null,
            threadKeys: [],
          }
        : {
            key: `local`,
            kind: `local`,
            hostId: null,
            hostDisplayName: null,
            threadKeys: [],
          };
    }
    case `remote`:
      return {
        key: `cloud`,
        kind: `cloud`,
        hostId: null,
        hostDisplayName: null,
        threadKeys: [],
      };
    case `pending-worktree`: {
      let n = e.pendingWorktree.hostId;
      return n === `local`
        ? {
            key: `local`,
            kind: `local`,
            hostId: null,
            hostDisplayName: null,
            threadKeys: [],
          }
        : {
            key: `host:${n}`,
            kind: `remote`,
            hostId: n,
            hostDisplayName: t.get(n) ?? null,
            threadKeys: [],
          };
    }
  }
}
var Ze = [],
  Qe = [],
  Q = [],
  $e = [],
  et = O(k, ({ get: e }) => [
    ...(E(e, `remote_connections`) ?? $e),
    ...(E(e, `remote_control_connections`) ?? $e),
  ]),
  tt = ce(k, () => ({
    queryKey: [`environments`],
    queryFn: async () => {
      try {
        return await le.safeGet(`/wham/environments`);
      } catch (e) {
        if (
          e instanceof oe &&
          (e.status === 401 || e.status === 403 || e.status === 404)
        )
          return [];
        throw e;
      }
    },
    placeholderData: se,
    staleTime: A.ONE_MINUTE,
  })),
  nt = j(k, `paths-exist`, (e) => ({
    enabled: e.length > 0,
    params: { hostId: w, paths: e },
    staleTime: A.FIVE_SECONDS,
  })),
  rt = O(k, ({ get: e }) => {
    let t = e(T);
    return e(I, {
      params: {
        hostId: t,
        dirs:
          L([], t, e(P).data?.roots, []).find(({ hostId: e }) => e === t)
            ?.dirs ?? Qe,
      },
      source: `sidebar_workspace_groups`,
    });
  }),
  it = O(k, ({ get: e }) => {
    let t = e(P).data,
      r = e(rt).data?.origins ?? Q,
      i = ht(e);
    return ge(
      [
        ...fe(t, r, e(N, void 0).data?.codexHome),
        ...R(c(e, n.LOCAL_PROJECTS)),
        ...pe(i, e(K)),
      ],
      c(e, n.PROJECT_ORDER),
    );
  }),
  at = O(k, ({ get: e }) => e(P).data?.roots),
  ot = O(k, ({ get: e }) => e(P).data?.labels ?? {}),
  st = D(k, (e, { get: r }) => {
    let i = r(P),
      a = i.data?.roots,
      o = i.data?.labels ?? {},
      s = {
        groups: [],
        isWorkspaceRootOptionsLoading: !1,
        workspaceRootOptions: a,
        workspaceRootLabels: o,
        discoveredThreadWorkspaceRootHints: {},
      };
    if (!e.enabled) return s;
    let l = r(T),
      u = r(X, e.threadKeys).filter(
        (e) =>
          !(
            e.kind === `pending-worktree` &&
            e.pendingWorktree.launchMode === `create-stable-worktree`
          ),
      ),
      d = ht(r),
      f = d.filter((e) => r(S, e.hostId) === `connected`),
      p = L([], l, a, f),
      m = r(rt),
      h = p.map(({ hostId: e, dirs: t }) =>
        e === l
          ? m
          : r(I, {
              params: { hostId: e, dirs: t },
              source: `sidebar_workspace_task_groups_workspace_dirs`,
            }),
      ),
      g = Object.fromEntries(
        p.map(({ hostId: e }, t) => [e, h[t]?.data?.origins ?? Q]),
      );
    if (h.length > 0 && i.isLoading && h.every((e) => e.isLoading))
      return { ...s, isWorkspaceRootOptionsLoading: !0 };
    let _ = L(u, l, a, f),
      v = me(_, p),
      ee = v.map(({ hostId: e, dirs: t }) =>
        r(I, {
          params: { hostId: e, dirs: t },
          source: `sidebar_workspace_task_groups_task_dirs`,
        }),
      ),
      y = Object.fromEntries(
        v.map(({ hostId: e }, t) => [e, ee[t]?.data?.origins ?? Q]),
      ),
      b = Object.fromEntries(
        _.map(({ hostId: e }) => {
          let n = new Map((g[e] ?? Q).map((e) => [t(e.dir), e]));
          return (
            y[e]?.forEach((e) => {
              n.set(t(e.dir), e);
            }),
            [e, Array.from(n.values())]
          );
        }),
      ),
      x = ge(
        [
          ...fe(i.data, g[l] ?? Q, r(N, void 0).data?.codexHome),
          ...R(c(r, n.LOCAL_PROJECTS)),
          ...pe(d, r(K)),
        ],
        c(r, n.PROJECT_ORDER),
      ),
      C = {},
      w = u.some((e) => e.kind === `remote`),
      te =
        e.projectlessThreadIds == null
          ? void 0
          : new Set(e.projectlessThreadIds);
    return {
      groups:
        u.length === 0
          ? x
          : he(
              u,
              w ? (r(tt).data ?? Ze) : Ze,
              x,
              Object.values(b).flat(),
              r(N, void 0).data?.codexHome,
              {
                gitOriginsByHostId: b,
                primaryHostId: l,
                remoteProjects: d,
                enabledRemoteHostIds: r(q),
                threadProjectAssignments: e.threadProjectAssignments,
                projectlessThreadIds: te,
                threadWorkspaceRootHints: c(r, n.THREAD_WORKSPACE_ROOT_HINTS),
                onDiscoverThreadWorkspaceRootHint: (e, t) => {
                  C[e] = t;
                },
              },
            ),
      isWorkspaceRootOptionsLoading: !1,
      workspaceRootOptions: a,
      workspaceRootLabels: o,
      discoveredThreadWorkspaceRootHints: C,
    };
  }),
  ct = D(k, (e, { get: t }) => {
    let r = t(et).filter((e) => t(S, e.hostId) === `connected`);
    return qe(
      Ge({
        groups: We({ entries: t(X, e), remoteConnections: t(et) }),
        remoteConnections: r,
      }),
      c(t, n.CONNECTION_GROUP_ORDER),
    );
  }),
  lt = D(k, (e, { get: t }) =>
    gt(e.groupIds, c(t, $(e.organizeMode)), e.organizeMode),
  ),
  ut = D(k, (e, { get: n }) => {
    let r = e ?? [],
      i = n(nt, r).data;
    return {
      existingWorkspaceRootSet: new Set(
        (i?.existingPaths ?? []).map((e) => t(e).replace(/\/+$/, ``)),
      ),
      hasPathsExistResult: i != null,
      workspaceRootSet: new Set(r),
    };
  });
function dt(e, t) {
  let r = Object.entries(t);
  if (r.length === 0 || e.get(a, n.THREAD_WORKSPACE_ROOT_HINTS).isLoading)
    return;
  let i = { ...c(e.get, n.THREAD_WORKSPACE_ROOT_HINTS) },
    o = !1;
  for (let [e, t] of r) i[e] !== t && ((i[e] = t), (o = !0));
  o && s(e, n.THREAD_WORKSPACE_ROOT_HINTS, i);
}
async function ft(e, t, n, r) {
  if (!_t(n, r)) return;
  let i = pt(t, n, r, c(e.get, $(t)));
  await s(e, $(t), i);
}
function pt(e, t, n, r) {
  let i = gt(t, r, e),
    a = new Set(t),
    o = 0;
  return i.map((e) => {
    if (!a.has(e)) return e;
    let t = n[o];
    return ((o += 1), t ?? e);
  });
}
function mt(e, n) {
  if (e.projectKind !== `local` || e.path == null) return !1;
  let r = t(e.path).replace(/\/+$/, ``);
  return !(
    n.workspaceRootSet.has(e.path) &&
    n.hasPathsExistResult &&
    n.existingWorkspaceRootSet.has(r)
  );
}
function ht(e) {
  let t = c(e, n.REMOTE_PROJECTS) ?? [],
    r = e(q);
  return t.filter((e) => r.has(e.hostId));
}
function $(e) {
  switch (e) {
    case `connection`:
      return n.CONNECTION_GROUP_ORDER;
    case `project`:
      return n.PROJECT_ORDER;
  }
}
function gt(e, t, n) {
  if (n === `project`) return e;
  let r = new Set(e),
    i = (t ?? []).filter((e) => r.has(e)),
    a = new Set(i);
  for (let t of e) a.has(t) || (i.push(t), a.add(t));
  return i;
}
function _t(e, t) {
  if (e.length !== t.length) return !1;
  let n = new Set(t);
  return e.every((e) => n.has(e));
}
export {
  Fe as _,
  lt as a,
  Ne as b,
  at as c,
  J as d,
  G as f,
  Me as g,
  je as h,
  ct as i,
  st as l,
  X as m,
  dt as n,
  ut as o,
  K as p,
  ft as r,
  ot as s,
  mt as t,
  it as u,
  Y as v,
  Pe as y,
};
//# sourceMappingURL=sidebar-project-group-signals-CEQTKcIf.js.map
