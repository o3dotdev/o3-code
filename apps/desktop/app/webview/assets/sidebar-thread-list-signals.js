import { kr as e, r as t, zr as n } from "./src-C.js";
import {
  Ia as r,
  K as i,
  Pi as a,
  dn as o,
  hn as s,
  ln as c,
  mt as l,
  nt as u,
  sn as d,
  un as f,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { t as p } from "./jsx-runtime.js";
import {
  $ as m,
  Q as h,
  S as g,
  U as _,
  _ as v,
  et as y,
  f as ee,
} from "./setting-storage.js";
import { t as te } from "./app-intl-signal.js";
import {
  d as b,
  g as x,
  l as S,
  v as C,
} from "./sidebar-project-group-signals-CEQTKcIf.js";
import { t as w } from "./pinned-threads-query-DYArLI-i.js";
var T = p();
function E({
  projectSidebarEnabled: e,
  organizeMode: t,
  showProjectsTitle: n,
  showRecent: r,
}) {
  return e
    ? r
      ? (0, T.jsx)(_, {
          id: `sidebarElectron.allChatsNavLink`,
          defaultMessage: `All chats`,
          description: `Section label above the chronological list of all chats in the sidebar`,
        })
      : t === `connection`
        ? (0, T.jsx)(_, {
            id: `sidebarElectron.connectionsNavLink`,
            defaultMessage: `Connections`,
            description: `Section label above connection thread groups in the sidebar`,
          })
        : n
          ? (0, T.jsx)(_, {
              id: `sidebarElectron.projectsNavLink`,
              defaultMessage: `Projects`,
              description: `Section label above project thread groups in the sidebar`,
            })
          : (0, T.jsx)(_, {
              id: `sidebarElectron.recentNavLink`,
              defaultMessage: `Chats`,
              description: `Section label above recent threads list in the sidebar`,
            })
    : (0, T.jsx)(_, {
        id: `sidebarElectron.cloudTasksNavLink`,
        defaultMessage: `Codex Cloud`,
        description: `Section label above cloud tasks in the browser sidebar`,
      });
}
function ne({
  projectSidebarEnabled: e,
  organizeMode: t,
  showProjectsTitle: n,
  showRecent: r,
}) {
  return e
    ? r
      ? `All chats`
      : t === `connection`
        ? `Connections`
        : n
          ? `Projects`
          : `Chats`
    : `Codex Cloud`;
}
function re({
  intl: e,
  organizeMode: t,
  projectSidebarEnabled: n,
  showProjectsTitle: r,
  showRecent: i,
}) {
  return n
    ? i
      ? e.formatMessage({
          id: `sidebarElectron.allChatsNavLink`,
          defaultMessage: `All chats`,
          description: `Section label above the chronological list of all chats in the sidebar`,
        })
      : t === `connection`
        ? e.formatMessage({
            id: `sidebarElectron.connectionsNavLink`,
            defaultMessage: `Connections`,
            description: `Section label above connection thread groups in the sidebar`,
          })
        : r
          ? e.formatMessage({
              id: `sidebarElectron.projectsNavLink`,
              defaultMessage: `Projects`,
              description: `Section label above project thread groups in the sidebar`,
            })
          : e.formatMessage({
              id: `sidebarElectron.recentNavLink`,
              defaultMessage: `Chats`,
              description: `Section label above recent threads list in the sidebar`,
            })
    : `Codex Cloud`;
}
function D(e, t) {
  return e
    .map((e, t) => ({ group: e, index: t }))
    .sort((e, n) => {
      let r = k(e.group.threadKeys, t)[0]?.at ?? -1 / 0,
        i = k(n.group.threadKeys, t)[0]?.at ?? -1 / 0;
      return r === i ? e.index - n.index : i - r;
    })
    .map(({ group: e }) => e);
}
function ie(e, t, n) {
  let r = new Map(t.map((e) => [e.projectId, e]));
  return D(
    e.map((e) => r.get(e.projectId) ?? e),
    n,
  );
}
function O(e, t) {
  return e.flatMap((e) => {
    let n = t.get(e);
    return n == null ? [] : [n];
  });
}
function k(e, t) {
  return O(e, t).map((e) => e.task);
}
function A({ projectThreadOrders: e, projectIds: t }) {
  if (e == null || t.length === 0) return null;
  let n = null;
  for (let r of t) {
    let t = e[r]?.sortKey ?? null;
    if (t == null) return null;
    if (n == null) {
      n = t;
      continue;
    }
    if (n !== t) return null;
  }
  return n;
}
function j({
  chatLabel: e,
  task: t,
  projectLabelByThreadKey: n,
  projectlessThreadIds: i,
}) {
  let a = n.get(t.key)?.trim();
  if (a) return a;
  if (
    (t.kind === `local` &&
      (t.conversation.workspaceKind === `projectless` ||
        i?.has(t.conversation.id) === !0)) ||
    (t.kind === `remote` && i?.has(t.task.id) === !0)
  )
    return e;
  if (t.kind === `local`)
    return (t.conversation.cwd ? r(t.conversation.cwd) : ``) || e;
  if (t.kind === `remote`)
    return t.task.task_status_display?.environment_label ?? e;
  let o =
    t.pendingWorktree.sourceWorkspaceRoot ??
    t.pendingWorktree.worktreeWorkspaceRoot ??
    t.pendingWorktree.worktreeGitRoot;
  return o ? r(o) : e;
}
function M(e) {
  return e.map((e) => ({
    task: e,
    isPinned: !1,
    isAutomationRun: !1,
    automationDisplayName: null,
  }));
}
function N({ items: e, projectlessThreadIds: t }) {
  return e.filter((e) => {
    switch (e.task.kind) {
      case `local`:
        return (
          e.task.conversation.workspaceKind === `projectless` ||
          t?.has(e.task.conversation.id) === !0
        );
      case `remote`:
        return t?.has(e.task.task.id) === !0;
      case `pending-worktree`:
        return !1;
    }
  });
}
function P(e) {
  return new Map(e.flatMap((e) => e.threadKeys.map((t) => [t, e.label])));
}
var F = [],
  I = [],
  L = ee(g, `inbox-items`, {
    params: { limit: 200 },
    refetchInterval: v.ONE_MINUTE,
    staleTime: v.FIVE_SECONDS,
  }),
  R = h(g, ({ get: e }) => e(w).data?.threadIds ?? I),
  z = h(g, ({ get: e }) => J(e(L).data?.items ?? F)),
  B = h(g, ({ get: t }) => {
    let n = a(t, e.THREAD_PROJECT_ASSIGNMENTS),
      r = a(t, e.PROJECTLESS_THREAD_IDS);
    return P(
      t(S, {
        threadKeys: t(x),
        enabled: !0,
        threadProjectAssignments: n,
        projectlessThreadIds: r,
      }).groups,
    );
  }),
  V = m(g, (e, { get: t }) => {
    let n = s(e);
    switch (n?.kind) {
      case `pending-worktree`:
        return t(b, n.pendingWorktreeId)?.isPinned === !0;
      case `local`:
      case `remote`: {
        let n = o(e);
        return n != null && t(R).includes(n);
      }
      case void 0:
        return !1;
    }
  }),
  H = m(g, (e, { get: t }) => {
    let n = f(e);
    return n != null && t(z).automationThreadIds.has(n);
  }),
  U = m(g, (e, { get: t }) => {
    let n = f(e);
    return n == null ? null : (t(z).automationDisplayNames.get(n) ?? null);
  }),
  W = m(g, (t, { get: n }) => {
    let r = n(C, t);
    if (r == null) return null;
    let i = a(n, e.PROJECTLESS_THREAD_IDS);
    return j({
      chatLabel: n(te).formatMessage({
        id: `sidebarElectron.threadHoverCardChatProject`,
        defaultMessage: `Chat`,
        description: `Fallback project label for a sidebar thread hover card when it does not belong to a project or workspace`,
      }),
      task: r,
      projectLabelByThreadKey: n(B),
      projectlessThreadIds: i == null ? void 0 : new Set(i),
    });
  }),
  G = m(g, (n, { get: r }) => {
    let i = r(C, n);
    return i?.kind === `local`
      ? t({
          cwd: i.conversation.cwd ?? null,
          assignment: a(r, e.THREAD_PROJECT_ASSIGNMENTS)?.[i.conversation.id],
        })
      : null;
  }),
  K = m(g, (t, { get: n }) =>
    t == null ? null : (a(n, e.THREAD_WORKSPACE_ROOT_HINTS)?.[t] ?? null),
  ),
  q = m(g, (t, { get: n }) =>
    t == null
      ? null
      : (a(n, e.SIDEBAR_THREAD_METADATA)?.[t]?.labelColor ?? null),
  );
function J(e) {
  let t = new Set(),
    n = new Map();
  for (let r of e)
    r.automationId == null ||
      r.threadId == null ||
      (t.add(r.threadId), n.set(r.threadId, r.automationName ?? ``));
  return { automationThreadIds: t, automationDisplayNames: n };
}
function ae(e, t) {
  let n = e(u, t);
  if (n == null || n === `needs_resume`) return !1;
  let r = e(l, t);
  return r == null ? !1 : r === 0 ? n === `resuming` : e(i, t) === `inProgress`;
}
var Y = [],
  X = [],
  Z = { allSidebarThreadKeys: X, pinnedThreadKeys: X, unpinnedThreadKeys: X },
  oe = y(g, (e) => {
    let t = Z;
    return h(
      g,
      ({ get: n }) => (
        (t = le(
          t,
          $({
            get: n,
            threadKeys: n(x),
            pinnedThreadIds: n(R),
            currentConversationId: e.currentConversationId,
          }),
        )),
        t
      ),
    );
  }),
  se = y(g, (e) => {
    let t = Y;
    return h(g, ({ get: n }) =>
      e.length === 0
        ? ((t = Y), Y)
        : ((t = ce(
            t,
            e.flatMap((e) => {
              let t = n(C, e);
              return t == null
                ? []
                : [
                    {
                      task: t,
                      isPinned: n(V, e),
                      isAutomationRun: n(H, e),
                      automationDisplayName: n(U, e),
                    },
                  ];
            }),
          )),
          t),
    );
  });
function ce(e, t) {
  if (e.length !== t.length) return t;
  for (let n = 0; n < t.length; n += 1) {
    let r = e[n],
      i = t[n];
    if (
      r == null ||
      i == null ||
      r.task !== i.task ||
      r.isPinned !== i.isPinned ||
      r.isAutomationRun !== i.isAutomationRun ||
      r.automationDisplayName !== i.automationDisplayName
    )
      return t;
  }
  return e;
}
function le(e, t) {
  let n = Q(e.allSidebarThreadKeys, t.allSidebarThreadKeys),
    r = Q(e.pinnedThreadKeys, t.pinnedThreadKeys),
    i = Q(e.unpinnedThreadKeys, t.unpinnedThreadKeys);
  return n === e.allSidebarThreadKeys &&
    r === e.pinnedThreadKeys &&
    i === e.unpinnedThreadKeys
    ? e
    : { allSidebarThreadKeys: n, pinnedThreadKeys: r, unpinnedThreadKeys: i };
}
function Q(e, t) {
  if (e.length !== t.length) return t;
  for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return t;
  return e;
}
function $({ get: e, threadKeys: t, pinnedThreadIds: r }) {
  if (t.length === 0) return Z;
  let i = new Set(t),
    a = [];
  for (let n of t) s(n)?.kind === `pending-worktree` && e(V, n) && a.push(n);
  for (let e of r) {
    let t = d(n(e));
    if (i.has(t)) {
      a.push(t);
      continue;
    }
    let r = c(e);
    i.has(r) && a.push(r);
  }
  let l = new Set(a),
    u = new Set(r),
    f = t.filter((e) => {
      if (l.has(e)) return !1;
      let t = o(e);
      return t == null || !u.has(t);
    });
  return {
    allSidebarThreadKeys: [...a, ...f],
    pinnedThreadKeys: a,
    unpinnedThreadKeys: f,
  };
}
export {
  ie as S,
  k as _,
  U as a,
  E as b,
  H as c,
  K as d,
  M as f,
  A as g,
  O as h,
  R as i,
  V as l,
  N as m,
  oe as n,
  G as o,
  P as p,
  ae as r,
  W as s,
  se as t,
  q as u,
  ne as v,
  D as x,
  re as y,
};
//# sourceMappingURL=sidebar-thread-list-signals.js.map
