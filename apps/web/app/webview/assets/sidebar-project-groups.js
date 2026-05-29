import { s as e, t } from "./chunk-Bj-mKKzh.js";
import { $t as n, U as r, br as i } from "./src-C.js";
import {
  Ks as a,
  gn as o,
  io as s,
  po as c,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { C as l, S as u, _ as d, d as f } from "./setting-storage.js";
import { t as p } from "./_baseEach.js";
import { n as m } from "./parse-owner-repo.js";
import { t as h } from "./remote-projects.js";
import { t as g } from "./_defineProperty.js";
var _ = f(u, `git-origins`, ({ params: e, source: t }) => ({
    enabled: e?.dirs == null || e.dirs.length > 0,
    params: e,
    source: t,
    staleTime: d.FIVE_SECONDS,
  })),
  v = t((e, t) => {
    function n(e) {
      for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
        var i = e[t];
        r[i[0]] = i[1];
      }
      return r;
    }
    t.exports = n;
  }),
  y = t((e, t) => {
    var n = g();
    function r(e, t, r) {
      t == `__proto__` && n
        ? n(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    t.exports = r;
  }),
  b = t((e, t) => {
    function n(e, t, n, r) {
      for (var i = -1, a = e == null ? 0 : e.length; ++i < a; ) {
        var o = e[i];
        t(r, o, n(o), e);
      }
      return r;
    }
    t.exports = n;
  }),
  x = t((e, t) => {
    var n = p();
    function r(e, t, r, i) {
      return (
        n(e, function (e, n, a) {
          t(i, e, r(e), a);
        }),
        i
      );
    }
    t.exports = r;
  }),
  S = t((e, t) => {
    var r = b(),
      i = x(),
      a = s(),
      o = n();
    function c(e, t) {
      return function (n, s) {
        var c = o(n) ? r : i,
          l = t ? t() : {};
        return c(n, e, a(s, 2), l);
      };
    }
    t.exports = c;
  }),
  C = t((e, t) => {
    var n = y(),
      r = S(),
      i = Object.prototype.hasOwnProperty;
    t.exports = r(function (e, t, r) {
      i.call(e, r) ? e[r].push(t) : n(e, r, [t]);
    });
  }),
  w = e(v(), 1),
  T = e(C(), 1),
  E = e(a(), 1),
  D = e(o(), 1);
function O(e, t) {
  let n = new Set(e.map((e) => e.projectId)),
    r = (t ?? []).filter((e) => n.has(e)),
    i = new Set(r);
  return [...e.map((e) => e.projectId).filter((e) => !i.has(e)), ...r];
}
function k(e, t) {
  let n = O(e, t),
    r = new Map(n.map((e, t) => [e, t]));
  return [...e].sort(
    (e, t) =>
      (r.get(e.projectId) ?? 2 ** 53 - 1) - (r.get(t.projectId) ?? 2 ** 53 - 1),
  );
}
function A(e, t) {
  let n = new Set(t),
    r = [],
    i = [];
  for (let t of e) n.has(t.projectId) ? r.push(t) : i.push(t);
  return { pinnedGroups: r, unpinnedGroups: i };
}
function j({ groups: e, hiddenTaskKeys: t }) {
  return t.size === 0
    ? e
    : e.flatMap((e) => {
        if (e.threadKeys.length === 0) return [e];
        let n = e.threadKeys.filter((e) => !t.has(e));
        return [{ ...e, threadKeys: n }];
      });
}
function M(e, t, n) {
  let a = (0, w.default)(t.map((e) => [i(e.dir), e]));
  return (e?.roots ?? []).map((o) => {
    let s = i(o),
      c = r(o, n),
      l =
        (e?.labels?.[o] ?? e?.labels?.[s] ?? ``).trim() ||
        (0, E.default)(B(o)) ||
        ``,
      u = a[s] ?? void 0,
      d = u?.originUrl ? m(u.originUrl) : null;
    return u && P(u)
      ? {
          projectId: o,
          projectKind: `local`,
          label: l,
          path: o,
          repositoryData: {
            ownerRepo: d,
            repoPath: z(o, t).join(`/`),
            rootFolder: (0, E.default)(B(u.root)) ?? ``,
          },
          isCodexWorktree: c,
          threadKeys: [],
        }
      : {
          projectId: o,
          projectKind: `local`,
          label: l,
          path: o,
          repositoryData: null,
          isCodexWorktree: c,
          threadKeys: [],
        };
  });
}
function N(e) {
  return Object.values(e ?? {}).map((e) => ({
    isCodexWorktree: !1,
    isLocalProject: !0,
    label: e.name.trim() || e.id,
    projectId: e.id,
    projectKind: `local`,
    repositoryData: null,
    threadKeys: [],
  }));
}
function P(e) {
  return e.originUrl != null || e.commonDir != null;
}
function F(e, t) {
  let n = new Map(t.map((e) => [e.hostId, e.displayName]));
  return e.map((e) => ({
    groupId: e.id,
    projectId: e.id,
    projectKind: `remote`,
    hostId: e.hostId,
    hostDisplayName: n.get(e.hostId) ?? null,
    label: e.label,
    path: e.remotePath,
    repositoryData: null,
    isCodexWorktree: !1,
    threadKeys: [],
  }));
}
function I(e, t, n, r, a, o) {
  let s = (0, w.default)(
      (r ?? []).flatMap(({ dir: e, originUrl: t }) => {
        let n = t ? m(t) : null;
        return n ? [[i(e), n]] : [];
      }),
    ),
    c = (0, T.default)(t ?? [], (e) => e.label),
    l = new Map();
  for (let e of n) e.projectKind === `local` && V(e) && l.set(i(e.path), e);
  return (
    e.forEach((e) => {
      if (e.kind === `local`)
        W(e, n, l, r, o?.gitOriginsByHostId, a, o?.primaryHostId, o);
      else if (e.kind === `remote`) {
        let t = G(o?.threadProjectAssignments?.[e.task.id], n);
        if (t != null) {
          t.threadKeys.push(e.key);
          return;
        }
        if (o?.projectlessThreadIds?.has(e.task.id) === !0) return;
        $(e, c, n);
      } else e.kind === `pending-worktree` && Q(e, s, n, l);
    }),
    n
  );
}
function L(e, t) {
  return !!(e && t && e.owner === t.owner && e.repoName === t.repoName);
}
function R(e, t) {
  let n = i(e).replace(/\/+$/, ``);
  return t.find((e) => i(e.dir).replace(/\/+$/, ``) === n) ?? null;
}
function z(e, t) {
  let n = R(e, t ?? []);
  if (!n?.root) return [];
  let r = B(i(e)),
    a = B(i(n.root));
  return r.slice(a.length);
}
function B(e) {
  return e.split(/[/\\]+/).filter(Boolean);
}
function V(e) {
  return e.path != null;
}
function H(e, t) {
  return e.get(i(t)) ?? null;
}
function U(e, t) {
  return e.has(i(t));
}
var W = (e, t, n, i, a, o, s = c, u) => {
  let d = e.cwd;
  if (!d || !B(d).length) {
    l.warning(`No cwd found for local task`, {
      safe: { conversationId: e.conversationId },
      sensitive: {},
    });
    return;
  }
  let f = d,
    p = e.hostId,
    m = u?.threadProjectAssignments?.[e.conversationId],
    g =
      m != null &&
      (m.projectKind === `local`
        ? e.hostId == null || e.hostId === s
        : m.hostId != null && (e.hostId ?? s) === m.hostId)
        ? G(m, t)
        : null;
  if (g != null) {
    g.threadKeys.push(e.key);
    return;
  }
  if (
    e.workspaceKind === `projectless` ||
    u?.projectlessThreadIds?.has(e.conversationId) === !0
  )
    return;
  let _ = p != null && p !== `local`,
    v = u?.remoteProjects;
  if (
    _ &&
    ((u?.enabledRemoteHostIds && !u.enabledRemoteHostIds.has(p)) ||
      !v?.some((e) => e.hostId === p))
  )
    return;
  let y = J({
    gitOrigins: i,
    gitOriginsByHostId: a,
    hostId: p ?? void 0,
    primaryHostId: s,
  });
  if (r(d, o) || (_ && Y(d, y))) {
    let r = X(d, e.conversationId, t, n, y, u?.threadWorkspaceRootHints);
    r && (f = r);
  }
  let b = v == null ? null : h(v, p ?? void 0, f);
  if (b != null) {
    let n = t.find((e) => e.projectId === b.id) ?? null;
    if (n != null) {
      n.threadKeys.push(e.key);
      return;
    }
  }
  if (_) return;
  let x = H(n, f);
  x &&
    (x.threadKeys.push(e.key),
    f !== d &&
      u?.onDiscoverThreadWorkspaceRootHint?.(e.conversationId, x.path));
};
function G(e, t) {
  return e == null
    ? null
    : (t.find((t) =>
        t.projectId !== e.projectId || t.projectKind !== e.projectKind
          ? !1
          : e.projectKind === `local`
            ? !0
            : t.hostId === e.hostId && t.path === e.path,
      ) ?? null);
}
function K(e, t, n, r) {
  let i = new Set(r.map((e) => e.hostId)),
    a = new Map([[t, (n ?? []).filter((e) => e !== `~`)]]),
    o = (e, t) => {
      let n = a.get(e);
      a.set(e, n == null ? [t] : [...n, t]);
    };
  for (let n of e) {
    if (n.kind === `local`) {
      if (n.workspaceKind === `projectless` || n.cwd === `~`) continue;
      let e = n.hostId ?? t,
        r = n.cwd;
      if (!r || (e !== t && !i.has(e))) continue;
      o(e, r);
      continue;
    }
    if (n.kind === `pending-worktree`) {
      let e = n.pendingWorktree.hostId,
        r = n.pendingWorktree.sourceWorkspaceRoot;
      if (!r || (e !== t && !i.has(e))) continue;
      o(e, r);
    }
  }
  for (let e of r) o(e.hostId, e.remotePath);
  return Array.from(a.entries())
    .map(([e, t]) => ({
      hostId: e,
      dirs: (0, D.default)(t).sort((e, t) => e.localeCompare(t)),
    }))
    .filter(({ hostId: e, dirs: n }) => e === t || n.length > 0);
}
function q(e, t) {
  let n = new Map(t.map(({ hostId: e, dirs: t }) => [e, new Set(t.map(i))]));
  return e
    .map(({ hostId: e, dirs: t }) => ({
      hostId: e,
      dirs: t.filter((t) => !n.get(e)?.has(i(t))),
    }))
    .filter(({ dirs: e }) => e.length > 0);
}
function J({
  gitOrigins: e,
  gitOriginsByHostId: t,
  hostId: n,
  primaryHostId: r,
}) {
  return n && t?.[n] ? t[n] : n && t && n !== r ? [] : (e ?? []);
}
function Y(e, t) {
  let n = R(e, t ?? []);
  return n?.commonDir
    ? i(n.commonDir).replace(/\/+$/, ``) !==
        `${i(n.root).replace(/\/+$/, ``)}/.git`
    : !1;
}
function X(e, t, n, r, a, o) {
  if (U(r, e)) return null;
  let s = o?.[t],
    c = s ? H(r, s) : null;
  if (!a) return c?.path ?? null;
  let l = R(e, a);
  if (!l) return c?.path ?? null;
  let u = l.originUrl ?? null,
    d = l.commonDir ?? null;
  if (!u && !d) return null;
  let f = (e) =>
      e ? (u ? e.originUrl === u : d ? e.commonDir === d : !1) : !1,
    p = i(e),
    m = z(e, a).join(`/`),
    h = n.flatMap((e) => {
      if (!V(e)) return [];
      let t = i(e.path);
      if (e.isCodexWorktree && p !== t) return [];
      let n = R(e.path, a);
      return n != null && f(n) ? [e] : [];
    }),
    g = h.filter((e) => e.repositoryData?.repoPath === m),
    _ = (0, E.default)(B(l.root)) ?? ``,
    v = Z(g, _);
  if (v) return v.path;
  let y = g[0];
  if (y) return y.path;
  if (c && h.includes(c)) return c.path;
  let b = h.filter((e) => e.repositoryData?.repoPath === ``),
    x = Z(b, _);
  if (x) return x.path;
  let S = b[0];
  if (S) return S.path;
  let C = h[0];
  return C ? C.path : null;
}
function Z(e, t) {
  let n = e.filter((e) => e.repositoryData?.rootFolder === t);
  return n.length === 1 ? n[0] : null;
}
function Q(e, t, n, r) {
  let a = e.pendingWorktree,
    o =
      a.startConversationParamsInput?.workspaceRoots[0] ??
      a.startConversationParamsInput?.cwd ??
      a.sourceWorkspaceRoot;
  if (!o) {
    l.warning(`No original clone cwd found for pending worktree task`, {
      safe: { pendingWorktreeId: a.id },
      sensitive: {},
    });
    return;
  }
  let s = t[i(o)] ?? null,
    c =
      a.hostId === `local`
        ? H(r, o)
        : (n.find(
            (e) =>
              e.projectKind === `remote` &&
              e.hostId === a.hostId &&
              i(e.path) === i(o),
          ) ?? null);
  c &&
    ((s &&
      c.repositoryData?.ownerRepo != null &&
      !L(c.repositoryData.ownerRepo, s)) ||
      c.threadKeys.push(e.key));
}
function $(e, t, n) {
  let r = te(e, t),
    i = ne(r);
  if (!i) {
    l.warning(`No owner repo found for remote task`, {
      safe: { taskId: e.task.id },
      sensitive: {},
    });
    return;
  }
  let a = i.repoName.toLowerCase();
  (
    n.find(
      (e) =>
        L(e.repositoryData?.ownerRepo, i) &&
        e.repositoryData?.repoPath === `` &&
        e.repositoryData?.rootFolder?.toLowerCase() === a,
    ) ??
    null ??
    n.find((e) => L(e.repositoryData?.ownerRepo, i)) ??
    ee(i, r, n)
  ).threadKeys.push(e.key);
}
function ee(e, t, n) {
  let r = {
    projectId: `cloud:${e.owner}/${e.repoName}`,
    projectKind: `remote`,
    cloudEnvironment: t ?? void 0,
    label: e.repoName,
    path: `${e.owner}/${e.repoName}`,
    repositoryData: { ownerRepo: e, repoPath: ``, rootFolder: e.repoName },
    isCodexWorktree: !1,
    threadKeys: [],
  };
  return (n.push(r), r);
}
function te(e, t) {
  let n = e.task.task_status_display?.environment_label;
  return n ? (t[n]?.[0] ?? null) : null;
}
function ne(e) {
  if (!e) return null;
  let t = e.repos?.[0],
    n = t ? e.repo_map?.[t]?.clone_url : null;
  return n ? (m(n) ?? null) : null;
}
export {
  R as a,
  A as c,
  S as d,
  y as f,
  M as i,
  j as l,
  F as n,
  q as o,
  _ as p,
  I as r,
  K as s,
  N as t,
  k as u,
};
//# sourceMappingURL=sidebar-project-groups.js.map
