import { kr as e } from "./src-C.js";
import {
  E as t,
  Li as n,
  Pi as r,
  fo as i,
  g as a,
  n as o,
  po as s,
  uo as c,
  wo as l,
} from "./app-server-manager-signals-DkRDRgNB.js";
import {
  C as u,
  Q as d,
  S as f,
  Y as p,
  Z as m,
  wt as h,
} from "./setting-storage.js";
import { t as g } from "./thread-context-inputs-DBrOekVr.js";
import { r as _ } from "./device-connections.js";
import { r as v } from "./remote-projects.js";
var y = {
  connected: 0,
  restarting: 1,
  error: 2,
  connecting: 3,
  disconnected: 4,
};
function b(e, t) {
  return [...e]
    .map((e, t) => ({ connection: e, index: t }))
    .sort((e, n) => {
      let r = y[t[e.connection.hostId] ?? `disconnected`],
        i = y[t[n.connection.hostId] ?? `disconnected`];
      return r === i ? e.index - n.index : r - i;
    })
    .map(({ connection: e }) => e);
}
var x = `[remote-connections/selection]`,
  S = d(f, ({ get: t }) => {
    let n = l(t, `remote_connections`),
      i = l(t, `remote_control_connections`),
      a = n == null || i == null,
      s = _({
        addedRemoteControlEnvIds: r(t, e.ADDED_REMOTE_CONTROL_ENV_IDS),
        remoteSshConnections: n ?? [],
        remoteControlConnections: i ?? [],
      }),
      c = b(s, Object.fromEntries(s.map((e) => [e.hostId, t(o, e.hostId)]))),
      u = r(t, e.SELECTED_REMOTE_HOST_ID) ?? null,
      d = a
        ? u
        : (c.find((e) => e.hostId === u)?.hostId ?? c[0]?.hostId ?? null);
    return {
      isRemoteConnectionsLoading: a,
      persistedSelectedRemoteHostId: u,
      remoteConnections: s,
      selectedRemoteConnection: c.find((e) => e.hostId === d) ?? null,
      selectedRemoteHostId: d,
      sortedRemoteConnections: c,
    };
  });
function C(t) {
  let r;
  return t.watch(({ get: i }) => {
    let a = i(S);
    if (
      (r === a.persistedSelectedRemoteHostId && (r = void 0),
      a.isRemoteConnectionsLoading ||
        a.persistedSelectedRemoteHostId === a.selectedRemoteHostId ||
        a.sortedRemoteConnections.length === 0 ||
        r === a.selectedRemoteHostId)
    )
      return;
    u.info(`${x} persisted_selection_reconciled`, {
      safe: {
        availableConnectionCount: a.sortedRemoteConnections.length,
        selectedConnectionState:
          a.selectedRemoteConnection == null ? `cleared` : `selected`,
      },
      sensitive: {
        persistedSelectedRemoteHostId: a.persistedSelectedRemoteHostId,
        selectedRemoteHostId: a.selectedRemoteHostId,
      },
    });
    let o = a.selectedRemoteHostId;
    ((r = o),
      n(t, e.SELECTED_REMOTE_HOST_ID, o ?? void 0).catch((e) => {
        throw (r === o && (r = void 0), e);
      }));
  });
}
var w = h();
function T({
  activeWorkspaceRoot: e,
  conversationCwd: t,
  conversationHostId: n,
  selectedRemoteProject: r,
}) {
  return t
    ? { cwd: t === `~` ? null : t, hostId: n ?? `local` }
    : r == null
      ? { cwd: e === `~` ? null : e, hostId: s }
      : { cwd: r.remotePath, hostId: r.hostId };
}
function E(e) {
  let n = (0, w.c)(14),
    r = e === void 0 ? null : e,
    o = p(a, r),
    s = p(t, r),
    { data: l, isLoading: u } = m(g),
    { remoteConnections: d } = m(S),
    { selectedRemoteProject: f } = v(),
    [h] = i(`host_config`),
    _ = l?.roots?.[0] ?? null,
    y;
  n[0] !== _ || n[1] !== o || n[2] !== s || n[3] !== f
    ? ((y = T({
        activeWorkspaceRoot: _,
        conversationCwd: o,
        conversationHostId: s,
        selectedRemoteProject: f,
      })),
      (n[0] = _),
      (n[1] = o),
      (n[2] = s),
      (n[3] = f),
      (n[4] = y))
    : (y = n[4]);
  let b = y,
    x;
  n[5] !== h || n[6] !== d || n[7] !== b
    ? ((x = h && b.hostId === h.id ? h : c(b.hostId, d)),
      (n[5] = h),
      (n[6] = d),
      (n[7] = b),
      (n[8] = x))
    : (x = n[8]);
  let C = x,
    E;
  return (
    n[9] !== _ || n[10] !== C || n[11] !== u || n[12] !== b
      ? ((E = {
          activeWorkspaceRoot: _,
          isActiveWorkspaceRootLoading: u,
          hostConfig: C,
          ...b,
        }),
        (n[9] = _),
        (n[10] = C),
        (n[11] = u),
        (n[12] = b),
        (n[13] = E))
      : (E = n[13]),
    E
  );
}
export { C as i, E as n, S as r, T as t };
//# sourceMappingURL=use-webview-execution-target.js.map
