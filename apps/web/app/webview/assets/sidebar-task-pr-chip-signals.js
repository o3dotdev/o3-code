import {
  Ar as e,
  S as t,
  U as n,
  a as r,
  br as i,
  ji as a,
  kr as o,
  mn as s,
  o as c,
  qi as l,
  r as u,
  s as d,
  zn as f,
} from "./src-C.js";
import {
  Bt as ee,
  C as te,
  E as p,
  Gt as ne,
  Ht as re,
  Ii as ie,
  It as ae,
  Jt as oe,
  Li as m,
  Lt as se,
  Pi as ce,
  Qt as le,
  Rt as ue,
  Vt as de,
  Wt as fe,
  Yt as pe,
  Zt as me,
  an as he,
  dn as ge,
  er as _e,
  g as h,
  in as g,
  po as ve,
  un as ye,
  uo as be,
  wo as xe,
  zt as _,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { t as Se } from "./jsx-runtime.js";
import { t as Ce } from "./clsx-BcPLHiun.js";
import {
  $ as v,
  C as y,
  Q as b,
  S as x,
  V as we,
  _ as Te,
  at as Ee,
  d as De,
  et as Oe,
  l as S,
  t as ke,
} from "./setting-storage.js";
import { p as Ae } from "./statsig--EYRNU53.js";
import { l as je, o as Me, w as Ne } from "./sidebar-signals.js";
import { t as Pe } from "./app-intl-signal.js";
import { _ as Fe, n as Ie, t as Le } from "./sidebar-thread-list-signals.js";
import { t as Re } from "./clock-BflmlnpZ.js";
import { o as C, s as w } from "./thread-actions.js";
import { n as ze } from "./format-automation-next-run-label.js";
import { l as Be, n as T, r as Ve } from "./pull-request-status-DcVXKzZN.js";
import { n as He } from "./pull-request-status-utils.js";
import { n as Ue, t as We } from "./pull-request-visual-state.js";
import { t as Ge } from "./gh-cli-status-query-DoYMwBhd.js";
var E = `custom:`;
function D(e) {
  return `${E}${e}`;
}
function O(e) {
  return e.startsWith(E) ? e.slice(7) : null;
}
function k({
  sectionOrder: e,
  customSectionIds: t,
  includeCloudSection: n,
  showChatsFirst: r,
}) {
  let i = qe(t),
    a = r ? [`chats`, `threads`] : [`threads`, `chats`],
    o = n ? [`cloud`, ...a] : a;
  if (e == null) return [...i, ...o];
  let s = new Set([...i, ...o]),
    c = new Set(),
    l = e.filter((e) => (!s.has(e) || c.has(e) ? !1 : (c.add(e), !0))),
    u = i.filter((e) => !c.has(e));
  if (u.length > 0) {
    let e = -1;
    for (let t = l.length - 1; t >= 0; --t)
      if (O(l[t]) != null) {
        e = t;
        break;
      }
    l.splice(e + 1, 0, ...u);
  }
  if (n && !c.has(`cloud`)) {
    let e = l.findIndex((e) => e === `threads` || e === `chats`);
    (l.splice(e === -1 ? l.length : e, 0, `cloud`), c.add(`cloud`));
  }
  for (let e of o) c.has(e) || l.push(e);
  return l;
}
function Ke({
  sectionOrder: e,
  visibleSectionKeys: t,
  nextVisibleSectionKeys: n,
}) {
  return Ye(t, n)
    ? Je({ sectionOrder: e, visibleSectionKeys: t, nextVisibleSectionKeys: n })
    : e;
}
function qe(e) {
  let t = new Set();
  return e.flatMap((e) => (t.has(e) ? [] : (t.add(e), [D(e)])));
}
function Je({
  sectionOrder: e,
  visibleSectionKeys: t,
  nextVisibleSectionKeys: n,
}) {
  let r = new Set(t),
    i = 0;
  return e.map((e) => {
    if (!r.has(e)) return e;
    let t = n[i];
    return ((i += 1), t ?? e);
  });
}
function Ye(e, t) {
  if (e.length !== t.length) return !1;
  let n = new Set(t);
  return e.every((e) => n.has(e));
}
function Xe({ sections: e, drop: t }) {
  return t == null
    ? e
    : t.targetContainerId === `pinned` ||
        t.targetContainerId === `chats` ||
        t.targetContainerId.startsWith(`project:`)
      ? le({ sections: e, threadId: t.threadId })
      : t.targetContainerId.startsWith(`custom:`)
        ? me({
            sections: e,
            sectionId: t.targetContainerId.slice(7),
            threadId: t.threadId,
            beforeThreadId: t.beforeThreadId,
          })
        : e;
}
var A = Ee(x, null),
  Ze = Ee(x, null),
  Qe = b(x, ({ get: e }) => e(Ae, `2413345355`)),
  $e = b(x, ({ get: e }) => e(ie, o.SIDEBAR_CUSTOM_SECTIONS)),
  j = b(x, ({ get: e }) => (e(Qe) ? ce(e, o.SIDEBAR_CUSTOM_SECTIONS) : [])),
  et = b(x, ({ get: e }) => e($e).isFetched),
  M = b(x, ({ get: e }) => Xe({ sections: e(j), drop: e(Ze) })),
  tt = b(x, ({ get: e }) => {
    let t = e(M),
      n = k({
        sectionOrder: e(Ne),
        customSectionIds: t.map((e) => e.id),
        includeCloudSection: !1,
        showChatsFirst: e(Me),
      }),
      r = new Map(t.map((e) => [e.id, e]));
    return n.flatMap((e) => {
      let t = O(e);
      if (t == null) return [];
      let n = r.get(t);
      return n == null ? [] : [n];
    });
  }),
  nt = Oe(x, ({ sectionId: e, currentThreadKey: t }) => {
    let n = [];
    return b(x, ({ get: r }) => {
      let i = r(M).find((t) => t.id === e);
      if (i == null) return ((n = []), n);
      let { allSidebarThreadKeys: a } = r(
          r(Ie, { currentConversationId: ye(t) }),
        ),
        o = oe({
          items: r(r(Le, a)),
          threadIds: i.threadIds,
          sortKey: i.sortKey,
        });
      return ((n = rt(n, o)), n);
    });
  });
function rt(e, t) {
  if (e.length !== t.length) return t;
  for (let n = 0; n < t.length; n += 1) if (e[n] !== t[n]) return t;
  return e;
}
function it(e) {
  return { threadIds: L(e) };
}
function at({ tasks: e, order: t }) {
  if (t == null) return e;
  let n = t.sortKey == null ? t : I(e, t.sortKey),
    r = new Map();
  for (let t of e) {
    let e = R(t);
    if (e != null) {
      let n = r.get(e);
      n == null ? r.set(e, [t]) : n.push(t);
    }
  }
  let i = ct(n.threadIds, r),
    a = [],
    o = new Set(i),
    s = new Set(),
    c = 0;
  for (let t of e) {
    let e = R(t);
    if (e == null || !o.has(e)) {
      a.push(t);
      continue;
    }
    if (s.has(e)) continue;
    s.add(e);
    let n = i[c];
    if (((c += 1), n == null)) continue;
    let l = r.get(n);
    l != null && a.push(...l);
  }
  return a;
}
function N({
  order: e,
  tasks: t,
  visibleThreadIds: n,
  nextVisibleThreadIds: r,
}) {
  return {
    threadIds: he({
      threadIds: (e == null
        ? it(t)
        : e.sortKey == null
          ? F({ order: e, tasks: t })
          : I(t, e.sortKey)
      ).threadIds,
      visibleThreadIds: n,
      nextVisibleThreadIds: r,
    }),
  };
}
function P({ order: e, tasks: t, threadId: n, beforeThreadId: r }) {
  let i = e == null ? L(t) : F({ order: e, tasks: t }).threadIds,
    a = i.filter((e) => e !== n),
    o = r == null ? 0 : a.indexOf(r),
    s = o === -1 ? a.length : o,
    c = [...a.slice(0, s), n, ...a.slice(s)];
  return g(i, c) ? { threadIds: i } : { threadIds: c };
}
function F({ order: e, tasks: t }) {
  let n = st(e.threadIds, L(t));
  return n === e.threadIds ? e : { threadIds: n };
}
function I(e, t) {
  return {
    threadIds: L(
      e
        .flatMap((e, n) =>
          R(e) == null ? [] : [{ task: e, timestamp: ot(e, t), index: n }],
        )
        .sort((e, t) => t.timestamp - e.timestamp || e.index - t.index)
        .map(({ task: e }) => e),
    ),
  };
}
function L(e) {
  let t = [],
    n = new Set();
  for (let r of e) {
    let e = R(r);
    e == null || n.has(e) || (n.add(e), t.push(e));
  }
  return t;
}
function R(e) {
  return ge(e.key);
}
function ot(e, t) {
  switch (e.kind) {
    case `local`:
      return t === `updated_at`
        ? e.conversation.updatedAt
        : e.conversation.createdAt;
    case `remote`:
      return (
        ((t === `updated_at`
          ? (e.task.updated_at ?? e.task.created_at)
          : (e.task.created_at ?? e.task.updated_at)) ?? 0) * 1e3
      );
    case `pending-worktree`:
      return 0;
  }
}
function st(e, t) {
  let n = new Set(e),
    r = t.filter((e) => !n.has(e));
  return r.length === 0 ? e : [...e, ...r];
}
function ct(e, t) {
  let n = new Set();
  return e.filter((e) => (!t.has(e) || n.has(e) ? !1 : (n.add(e), !0)));
}
function lt({ currentCwd: e, targetGroup: t, worktreeWorkspaceRoot: n }) {
  let r = n ?? t.path;
  return {
    projectKind: `local`,
    projectId: t.projectId,
    ...(r == null ? {} : { path: r }),
    pendingCoreUpdate: r != null && i(e ?? ``) !== i(r),
  };
}
async function z(e, t, n) {
  if (n.path == null) return null;
  let r = f(n.path);
  if (r == null) return null;
  try {
    return (
      await _e(`git`).request({
        method: `resolve-worktree-for-thread`,
        params: {
          cwd: r,
          conversationId: t,
          hostConfig: xe(e.get, `host_config`) ?? be(`local`, null),
          operationSource: `sidebar_threads_section`,
        },
      })
    ).worktreeWorkspaceRoot;
  } catch (e) {
    return (
      y.warning(`Failed to resolve an existing worktree for moved thread.`, {
        safe: {},
        sensitive: { error: s(e) },
      }),
      null
    );
  }
}
var B = Promise.resolve(),
  V = Promise.resolve();
function ut(e, t) {
  return K(e, (e) =>
    N({
      order: e,
      tasks: t.tasks,
      visibleThreadIds: t.visibleThreadIds,
      nextVisibleThreadIds: t.nextVisibleThreadIds,
    }),
  );
}
function dt(e, t) {
  return q(e, (e) => ({
    ...e,
    [t.projectId]: N({
      order: e[t.projectId] ?? null,
      tasks: t.tasks,
      visibleThreadIds: t.visibleThreadIds,
      nextVisibleThreadIds: t.nextVisibleThreadIds,
    }),
  }));
}
function H(e, t) {
  return q(e, (e) => {
    let n = e;
    for (let [r, i] of Object.entries(e)) {
      if (r === t.projectId) continue;
      let a = i.threadIds.filter((e) => e !== t.threadId);
      a.length !== i.threadIds.length &&
        (n === e && (n = { ...e }), (n[r] = { ...i, threadIds: a }));
    }
    let r = n[t.projectId] ?? null,
      i = P({
        order: r,
        tasks: t.tasks,
        threadId: t.threadId,
        beforeThreadId: t.beforeThreadId,
      });
    return r != null && g(r.threadIds, i.threadIds)
      ? n
      : { ...n, [t.projectId]: i };
  });
}
function ft(e, t) {
  return Promise.all([
    K(e, (e) =>
      P({
        order: e,
        tasks: t.tasks,
        threadId: t.threadId,
        beforeThreadId: t.beforeThreadId,
      }),
    ),
    q(e, (e) => {
      let n = e;
      for (let [r, i] of Object.entries(e)) {
        let a = i.threadIds.filter((e) => e !== t.threadId);
        a.length !== i.threadIds.length &&
          (n === e && (n = { ...e }), (n[r] = { ...i, threadIds: a }));
      }
      return n;
    }),
  ]).then(() => void 0);
}
function pt(e, t, n) {
  return K(e, (e) => W(U(e, I(t, n)), n));
}
function mt(e, t) {
  return K(e, (e) => G(e, t));
}
function ht(e, t, n) {
  return q(e, (e) => {
    let r = e;
    for (let i of t) {
      let t = e[i.projectId] ?? null,
        a = W(U(t, I(i.tasks, n)), n);
      a !== t && (r === e && (r = { ...e }), (r[i.projectId] = a));
    }
    return r;
  });
}
function gt(e, t) {
  return q(e, (e) => {
    let n = e;
    for (let r of t) {
      let t = e[r.projectId] ?? null,
        i = G(t, r.tasks);
      i == null || i === t || (n === e && (n = { ...e }), (n[r.projectId] = i));
    }
    return n;
  });
}
function U(e, t) {
  return e != null && g(e.threadIds, t.threadIds) ? e : t;
}
function W(e, t) {
  return e.sortKey === t ? e : { ...e, sortKey: t };
}
function G(e, t) {
  return e == null || e.sortKey == null ? e : I(t, e.sortKey);
}
function K(e, t) {
  let n = async () => {
      let { value: n } = await S(`get-global-state`, {
          params: { key: o.SIDEBAR_CHAT_THREAD_ORDER },
        }),
        r = n ?? null,
        i = t(r);
      i == null || i === r || (await m(e, o.SIDEBAR_CHAT_THREAD_ORDER, i));
    },
    r = B.then(n, n);
  return ((B = r.catch(() => {})), r);
}
function q(t, n) {
  let r = async () => {
      let { value: r } = await S(`get-global-state`, {
          params: { key: o.SIDEBAR_PROJECT_THREAD_ORDERS },
        }),
        i = r ?? e(o.SIDEBAR_PROJECT_THREAD_ORDERS),
        a = n(i);
      a !== i && (await m(t, o.SIDEBAR_PROJECT_THREAD_ORDERS, a));
    },
    i = V.then(r, r);
  return ((V = i.catch(() => {})), i);
}
var _t = a(l()),
  vt = Promise.resolve(),
  yt = Promise.resolve();
function J(e, t) {
  let n = async () => {
      let { value: n } = await S(`get-global-state`, {
          params: { key: o.THREAD_PROJECT_ASSIGNMENTS },
        }),
        i = d(n);
      c(i[t.threadId], t.assignment) ||
        (await m(
          e,
          o.THREAD_PROJECT_ASSIGNMENTS,
          r({
            assignments: i,
            conversationId: t.threadId,
            assignment: t.assignment,
          }),
        ));
    },
    i = vt.then(n, n);
  return ((vt = i.catch(() => {})), i);
}
function bt(e, t) {
  let n = async () => {
      let { value: n } = await S(`get-global-state`, {
          params: { key: o.PROJECTLESS_THREAD_IDS },
        }),
        r = _t.safeParse(n).data ?? [];
      r.includes(t.threadId) !== t.projectless &&
        (await m(
          e,
          o.PROJECTLESS_THREAD_IDS,
          t.projectless
            ? [...r, t.threadId]
            : r.filter((e) => e !== t.threadId),
        ));
    },
    r = yt.then(n, n);
  return ((yt = r.catch(() => {})), r);
}
function xt({
  drop: e,
  allProjectGroups: t,
  allSidebarItems: r,
  codexHome: i,
  targetWorktreeWorkspaceRoot: a,
  threadProjectAssignments: o,
}) {
  if (
    e.targetContainerId !== `chats` &&
    !e.targetContainerId.startsWith(`project:`)
  )
    return null;
  let s = r.find(
    (t) => t.task.kind === `local` && t.task.conversation.id === e.threadId,
  )?.task;
  if (s?.kind !== `local`) return null;
  let c = t.find((e) => e.threadKeys.includes(s.key)),
    l = u({
      cwd: s.conversation.cwd ?? null,
      assignment: o?.[s.conversation.id],
    });
  if (c == null || !n(l ?? ``, i ?? void 0)) return null;
  if (e.targetContainerId === `chats`) return { sourceProjectLabel: c.label };
  let d = e.targetContainerId.slice(8),
    f = t.find((e) => e.projectId === d);
  return f == null || f.projectId === c.projectId || a != null || !St(s, f)
    ? null
    : { sourceProjectLabel: c.label };
}
function St(e, t) {
  let n = t.projectKind === `remote` ? t.hostId : ve,
    r = e.conversation.hostId ?? `local`;
  return n != null && n === r;
}
function Ct(e, { sectionId: t, threadId: n, included: r, isPinned: i }) {
  let a = re(e, { sectionId: t, threadId: n, included: r });
  return X(r && i ? C(e, n, a) : a);
}
function wt(e, { emoji: t, name: n, threadId: r, wasPinned: i }) {
  let a = ae(e, { sectionId: ne(), emoji: t, name: n, threadId: r });
  return X(r != null && i ? C(e, r, a) : a);
}
function Tt(e, { sectionId: t, emoji: n, name: r }) {
  return X(fe(e, { sectionId: t, emoji: n, name: r }));
}
function Et(e, t) {
  return X(se(e, t));
}
function Y(e, t) {
  (document.dispatchEvent(new PointerEvent(`pointercancel`)), e.set(A, t));
}
function Dt(e) {
  e.set(A, null);
}
function Ot(e, { emoji: t, name: n }) {
  let r = e.get(A);
  r != null &&
    (r.kind === `create`
      ? wt(e, {
          emoji: t,
          name: n,
          threadId: r.threadId,
          wasPinned: r.wasPinned,
        })
      : Tt(e, { sectionId: r.sectionId, emoji: t, name: n }),
    Dt(e));
}
function kt(e, t) {
  (je(e, t, !1), Et(e, t));
}
function At(e, t) {
  return X(ee(e, t));
}
function jt(e, t) {
  return X(de(e, t));
}
async function Mt(
  e,
  t,
  {
    allProjectGroups: n,
    allSidebarItems: r,
    recentChatItems: i,
    targetWorktreeWorkspaceRoot: a,
  },
) {
  let {
    threadId: o,
    sourceContainerId: s,
    targetContainerId: c,
    beforeThreadId: l,
  } = t;
  if (c === `pinned`) return w(e, o, !0, l);
  let u = r.find((e) => ge(e.task.key) === o)?.task;
  if (u == null || u.kind === `pending-worktree`) return Promise.resolve();
  if (c === `chats`)
    return Z(
      Promise.all([
        J(e, { threadId: o, assignment: null }),
        bt(e, { threadId: o, projectless: !0 }),
        ft(e, {
          tasks: [...i.map((e) => e.task), u],
          threadId: o,
          beforeThreadId: l,
        }),
        _(e, o),
        s === `pinned` ? w(e, o, !1) : Promise.resolve(),
      ]).then(() => void 0),
    );
  if (c.startsWith(`project:`)) {
    let t = c.slice(8),
      i = n.find((e) => e.projectId === t);
    if (i == null) return Promise.resolve();
    if (u.kind === `remote`)
      return Z(
        Promise.all([
          J(e, {
            threadId: o,
            assignment:
              i.projectKind === `remote`
                ? {
                    projectKind: `remote`,
                    projectId: i.projectId,
                    path: i.path,
                    hostId: i.hostId,
                    pendingCoreUpdate: !1,
                  }
                : {
                    projectKind: `local`,
                    projectId: i.projectId,
                    path: i.path,
                    pendingCoreUpdate: !1,
                  },
          }),
          H(e, {
            projectId: i.projectId,
            tasks: [
              ...Fe(i.threadKeys, new Map(r.map((e) => [e.task.key, e]))),
              u,
            ],
            threadId: o,
            beforeThreadId: l,
          }),
          _(e, o),
          s === `pinned` ? w(e, o, !1) : Promise.resolve(),
        ]).then(() => void 0),
      );
    if (!St(u, i)) return Promise.resolve();
    let d;
    if (i.projectKind === `remote`) {
      if (i.hostId == null) return Promise.resolve();
      d = {
        projectKind: `remote`,
        projectId: i.projectId,
        path: i.path,
        hostId: i.hostId,
        pendingCoreUpdate: !0,
      };
    } else
      d = lt({
        currentCwd: u.conversation.cwd,
        targetGroup: i,
        worktreeWorkspaceRoot:
          a === void 0 ? await z(e, u.conversation.id, i) : a,
      });
    return Z(
      Promise.all([
        J(e, { threadId: o, assignment: d }),
        bt(e, { threadId: o, projectless: !1 }),
        H(e, {
          projectId: i.projectId,
          tasks: [
            ...Fe(i.threadKeys, new Map(r.map((e) => [e.task.key, e]))),
            u,
          ],
          threadId: o,
          beforeThreadId: l,
        }),
        _(e, o),
        s === `pinned` ? w(e, o, !1) : Promise.resolve(),
      ]).then(() => void 0),
    );
  }
  let d = ue(e, { sectionId: c.slice(7), threadId: o, beforeThreadId: l });
  return X(s === `pinned` ? C(e, o, d) : d);
}
function X(e) {
  return e.catch((e) => {
    y.error(`Failed to save sidebar custom sections`, {
      safe: {},
      sensitive: { error: s(e) },
    });
  });
}
function Z(e) {
  return e.catch((e) => {
    y.error(`Failed to save thread project assignment`, {
      safe: {},
      sensitive: { error: s(e) },
    });
  });
}
var Q = we({
  moveTo: {
    id: `sidebarElectron.customSection.moveTo`,
    defaultMessage: `Move to`,
    description: `Context menu item that opens the submenu for changing a chat's sidebar section membership`,
  },
  pinned: {
    id: `sidebarElectron.customSection.pinned`,
    defaultMessage: `Pinned`,
    description: `Context menu item to add a chat to the pinned sidebar section`,
  },
  removeFromPinned: {
    id: `sidebarElectron.customSection.removeFromPinned`,
    defaultMessage: `Remove from Pinned`,
    description: `Context menu item to remove a chat from the pinned sidebar section`,
  },
  customSection: {
    id: `sidebarElectron.customSection.section`,
    defaultMessage: `{section}`,
    description: `Context menu item to add a chat to a custom sidebar section`,
  },
  removeFromCustomSection: {
    id: `sidebarElectron.customSection.removeFromSection`,
    defaultMessage: `Remove from {section}`,
    description: `Context menu item to remove a chat from a custom sidebar section`,
  },
  newSection: {
    id: `sidebarElectron.customSection.newSection`,
    defaultMessage: `New section…`,
    description: `Context menu item to create a custom sidebar section`,
  },
  editSection: {
    id: `sidebarElectron.customSection.editSection`,
    defaultMessage: `Edit section`,
    description: `Menu item to edit a custom sidebar section`,
  },
  deleteSection: {
    id: `sidebarElectron.customSection.deleteSection`,
    defaultMessage: `Delete section`,
    description: `Menu item to delete a custom sidebar section`,
  },
  sortBy: {
    id: `sidebarElectron.sortMenu.title`,
    defaultMessage: `Sort by`,
    description: `Header for sidebar thread sort dropdown`,
  },
  sortCreated: {
    id: `sidebarElectron.sortMenu.created`,
    defaultMessage: `Created`,
    description: `Sort option to show threads by creation date`,
  },
  sortUpdated: {
    id: `sidebarElectron.sortMenu.updated`,
    defaultMessage: `Updated`,
    description: `Sort option to show threads by last updated time`,
  },
});
function Nt({
  threadId: e,
  isPinned: t,
  sections: n,
  onPinnedChange: r,
  onSectionMembershipChange: i,
  onCreateSection: a,
}) {
  let o = [
    {
      id: t ? `remove-from-pinned` : `add-to-pinned`,
      message: t ? Q.removeFromPinned : Q.pinned,
      onSelect: () => {
        r(!t);
      },
    },
  ];
  for (let t of n) {
    let n = t.threadIds.includes(e);
    o.push({
      id: n
        ? `remove-from-custom-section:${t.id}`
        : `add-to-custom-section:${t.id}`,
      message: n ? Q.removeFromCustomSection : Q.customSection,
      messageValues: { section: pe(t) },
      onSelect: () => {
        i(t.id, !n);
      },
    });
  }
  return (
    n.length > 0 &&
      o.push({ id: `custom-section-separator`, type: `separator` }),
    o.push({ id: `new-custom-section`, message: Q.newSection, onSelect: a }),
    [{ id: `add-to-section`, message: Q.moveTo, submenu: o }]
  );
}
function Pt({ onCreateSection: e }) {
  return [{ id: `new-custom-section`, message: Q.newSection, onSelect: e }];
}
function Ft(e, { threadId: t, isPinned: n, sections: r }) {
  return Nt({
    threadId: t,
    isPinned: n,
    sections: r,
    onPinnedChange: (n) => {
      w(e, t, n);
    },
    onSectionMembershipChange: (r, i) => {
      Ct(e, { sectionId: r, threadId: t, included: i, isPinned: n });
    },
    onCreateSection: () => {
      Y(e, { kind: `create`, threadId: t, wasPinned: n });
    },
  });
}
function It(e) {
  return Pt({
    onCreateSection: () => {
      Y(e, { kind: `create`, threadId: null, wasPinned: !1 });
    },
  });
}
var $ = Se(),
  Lt = 5.75,
  Rt = 2 * Math.PI * Lt,
  zt = 1.5;
function Bt({ className: e = `icon-sm shrink-0`, checks: t }) {
  let n = Vt(t),
    r = Ce(`text-token-description-foreground`, e);
  if (n.length === 0) return (0, $.jsx)(ze, { className: r });
  let i = n.length > 1 ? zt : 0,
    a = 0;
  return (0, $.jsx)(`svg`, {
    "aria-hidden": !0,
    className: r,
    fill: `none`,
    viewBox: `0 0 18 18`,
    children: (0, $.jsx)(`g`, {
      transform: `rotate(-90 9 9)`,
      children: n.map((e) => {
        let t = Rt * e.ratio,
          n = `${Math.max(t - i, 0.001)} ${Rt}`,
          r = -(a + i / 2);
        return (
          (a += t),
          (0, $.jsx)(
            `circle`,
            {
              cx: `9`,
              cy: `9`,
              r: Lt,
              stroke: e.color,
              strokeDasharray: n,
              strokeDashoffset: r,
              strokeLinecap: `butt`,
              strokeWidth: `1.7`,
            },
            e.key,
          )
        );
      }),
    }),
  });
}
function Vt(e) {
  let t = e.length;
  if (t === 0) return [];
  let n = {
    failing: e.filter((e) => e.status === `failing`).length,
    passing: e.filter((e) => e.status === `passing`).length,
    pending: e.filter((e) => e.status === `pending`).length,
    skipped: e.filter((e) => e.status === `skipped`).length,
    unknown: e.filter((e) => e.status === `unknown`).length,
  };
  return [
    {
      color: `var(--color-token-charts-green)`,
      count: n.passing,
      key: `passing`,
    },
    {
      color: `var(--color-token-charts-red)`,
      count: n.failing,
      key: `failing`,
    },
    {
      color: `var(--color-token-charts-yellow)`,
      count: n.pending,
      key: `pending`,
    },
    {
      color: `var(--color-token-description-foreground)`,
      count: n.skipped + n.unknown,
      key: `skipped`,
    },
  ]
    .filter((e) => e.count > 0)
    .map((e) => ({ color: e.color, key: e.key, ratio: e.count / t }));
}
var Ht = De(
    x,
    `gh-pr-status`,
    ({ cwd: e, enabled: t, headBranch: n, hostId: r }) => ({
      enabled: t,
      source: `sidebar_task_pr_chip`,
      params: { cwd: f(e ?? `/`), headBranch: n ?? ``, hostId: r },
      staleTime: Te.ONE_MINUTE,
    }),
  ),
  Ut = b(x, ({ get: e }) => {
    let n = e(Ae, `2553306736`);
    return ke(e, t.showSidebarPrIcons) ?? n;
  }),
  Wt = v(x, (e, { get: t }) => (!t(Ut) || e == null ? null : qt(e, t(Pe)))),
  Gt = v(x, (e, { get: t }) => {
    if (!t(Ut)) return null;
    let n =
        e != null &&
        t(h, e) != null &&
        t(te, e) != null &&
        t(Ge, t(p, e) ?? void 0) === `available`,
      r = t(Ht, {
        cwd: t(h, e) ?? null,
        enabled: n,
        headBranch: t(te, e) ?? null,
        hostId: t(p, e) ?? void 0,
      });
    if (!n || r.isLoading || r.isError) return null;
    let i = r.data?.status === `success` ? r.data : null;
    if (i == null) return null;
    let a = We({ hasOpenPr: i.hasOpenPr, isDraft: i.isDraft, url: i.url });
    return a == null
      ? null
      : Jt(
          a,
          Ue({ canMerge: i.canMerge, ciStatus: i.ciStatus, status: a }),
          i.checks,
          i.ciStatus,
          t(Pe),
        );
  });
function Kt(e) {
  if (e == null) return null;
  let t = e.task.pull_requests?.[0]?.pull_request ?? null;
  return t ? He(t) : null;
}
function qt(e, t) {
  let n = Yt(e, t);
  return {
    hoverCardSection: {
      id: `pr`,
      rows: [{ id: `pr-status`, icon: (0, $.jsx)(T, { status: e }), label: n }],
    },
    iconBadge: {
      id: `pr-status`,
      icon: (0, $.jsx)(T, { status: e }),
      tooltipContent: null,
    },
  };
}
function Jt(e, t, n, r, i) {
  return {
    hoverCardSection: {
      id: `pr`,
      rows: [
        {
          id: `pr-status`,
          icon: (0, $.jsx)(T, { status: e }),
          label: Yt(e, i),
        },
        {
          id: `checks-summary`,
          icon:
            r === `none`
              ? (0, $.jsx)(Re, {})
              : (0, $.jsx)(Bt, { checks: n, className: `icon-2xs shrink-0` }),
          label: Be(r),
        },
      ],
    },
    iconBadge: {
      id: `pr-status`,
      icon: (0, $.jsx)(Ve, { state: t }),
      tooltipContent: null,
    },
  };
}
function Yt(e, t) {
  switch (e) {
    case `draft`:
      return t.formatMessage({
        id: `sidebar.taskRow.pr.draft`,
        defaultMessage: `Draft PR`,
        description: `Tooltip shown for a draft pull request badge`,
      });
    case `open`:
      return t.formatMessage({
        id: `sidebar.taskRow.pr.open`,
        defaultMessage: `Open PR`,
        description: `Tooltip shown for an open pull request badge`,
      });
    case `merged`:
      return t.formatMessage({
        id: `sidebar.taskRow.pr.merged`,
        defaultMessage: `Merged PR`,
        description: `Tooltip shown for a merged pull request badge`,
      });
    case `closed`:
      return t.formatMessage({
        id: `sidebar.taskRow.pr.closed`,
        defaultMessage: `Closed PR`,
        description: `Tooltip shown for a closed pull request badge`,
      });
  }
}
export {
  M as A,
  tt as C,
  j as D,
  nt as E,
  O as M,
  k as N,
  Qe as O,
  Ke as P,
  at as S,
  A as T,
  ut as _,
  Ft as a,
  ht as b,
  kt as c,
  At as d,
  Ot as f,
  gt as g,
  mt as h,
  It as i,
  D as j,
  et as k,
  Mt as l,
  xt as m,
  Gt as n,
  Q as o,
  jt as p,
  Wt as r,
  Dt as s,
  Kt as t,
  Y as u,
  dt as v,
  Ze as w,
  z as x,
  pt as y,
};
//# sourceMappingURL=sidebar-task-pr-chip-signals.js.map
