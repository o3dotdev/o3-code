import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  Q as t,
  Xs as n,
  _ as r,
  a as i,
  at as a,
  b as o,
  c as s,
  ks as c,
  o as l,
  po as u,
  r as d,
  s as f,
  x as p,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as m } from "./jsx-runtime.js";
import {
  C as h,
  L as g,
  S as _,
  T as v,
  X as y,
  Y as b,
  Z as x,
  _ as S,
  wt as C,
} from "./setting-storage.js";
import { p as w } from "./statsig--EYRNU53.js";
import { t as T } from "./remote-connection-visibility.js";
import { D as E, k as D } from "./sidebar-signals.js";
var O = class {
    constructor(e) {
      this.scope = e;
    }
    addManager(e) {
      let n = e.getHostId();
      (this.scope.set(t, (e) => (e.includes(n) ? e : [...e, n])),
        this.scope.set(d, n, e),
        this.scope.set(l, n, c(e)),
        this.scope.set(s, (e) => e + 1));
    }
    addRegistryCallback(e) {
      let t = !1;
      return this.scope.watch((n) => {
        (n.get(s), t ? e() : (t = !0));
      });
    }
    deleteManager(e) {
      (this.scope.set(t, (t) => t.filter((t) => t !== e)),
        this.scope.set(l, e, null),
        this.scope.set(d, e, null),
        a(this.scope, {
          error: null,
          hostId: e,
          source: `registry_delete_manager`,
          state: `disconnected`,
        }),
        this.scope.set(s, (e) => e + 1));
    }
    getAll() {
      return this.scope.get(f);
    }
    getDefault() {
      return this.scope.get(r);
    }
    getForConversationId(e) {
      let t = this.getMaybeForConversationId(e);
      if (t != null) return t;
      throw Error(`No AppServerManager registered for conversationId: ${e}`);
    }
    getForHostId(e) {
      return this.scope.get(t).includes(e) ? this.scope.get(l, e) : null;
    }
    getImplForHostId(e) {
      return this.scope.get(t).includes(e) ? this.scope.get(d, e) : null;
    }
    getForHostIdOrThrow(e) {
      let t = this.getForHostId(e);
      if (t != null) return t;
      throw Error(`No AppServerManager registered for hostId: ${e}`);
    }
    getForHostIdOrThrowWhenDefaultHost(e) {
      let t = this.getForHostId(e);
      if (t != null) return t;
      if (e === `local`)
        throw Error(`No AppServerManager registered for hostId: ${e}`);
      return null;
    }
    getMaybeForConversationId(e) {
      return p(this.scope, e);
    }
    notifyRegistryChanged() {
      this.scope.set(s, (e) => e + 1);
    }
  },
  k = C(),
  A = e(m(), 1);
function j({ appServerRegistry: e, enabledRemoteHostIds: t }) {
  let n = e.getDefault().getHostId();
  return e
    .getAll()
    .filter((e) => (e.getHostId() === n ? !0 : t.has(e.getHostId())));
}
function M(e, t) {
  let n = t.getDefault().getHostId();
  return t.getAll().filter((t) => {
    let r = t.getHostId();
    if (r === n) return !0;
    let { error: i, state: a } = o(e, r);
    return a === `connected` || i?.code === `login-required`;
  });
}
function N(e) {
  return () => {
    for (let t of e) t();
  };
}
function P({ appServerRegistry: e, onStoreChange: t, subscribeToManager: n }) {
  let r = new Map(),
    i = () => {
      let i = e.getAll(),
        a = new Set(i.map((e) => e.getHostId()));
      for (let [e, { unsubscribe: t }] of r) a.has(e) || (t(), r.delete(e));
      for (let e of i) {
        let i = e.getHostId(),
          a = r.get(i);
        a?.manager !== e &&
          (a?.unsubscribe(), r.set(i, { manager: e, unsubscribe: n(e, t) }));
      }
    };
  return (
    i(),
    N([
      e.addRegistryCallback(() => {
        (i(), t());
      }),
      () => {
        for (let { unsubscribe: e } of r.values()) e();
      },
    ])
  );
}
function F(e, t) {
  return P({
    appServerRegistry: e,
    onStoreChange: t,
    subscribeToManager: (e, t) =>
      N([e.addAnyConversationCallback(t), e.addAnyConversationMetaCallback(t)]),
  });
}
function I({ appServerRegistry: e, enabledRemoteHostIds: t, sortKey: n }) {
  return j({ appServerRegistry: e, enabledRemoteHostIds: t })
    .flatMap((e) => e.getRecentConversations())
    .sort((e, t) => {
      switch (n) {
        case `created_at`:
          return t.createdAt - e.createdAt;
        case `updated_at`:
          return t.updatedAt - e.updatedAt;
      }
    });
}
async function L({
  scope: e,
  appServerRegistry: t,
  enabledRemoteHostIds: r,
  sortKey: i,
}) {
  return (
    await Promise.all(
      M(e, t).map((e) =>
        n(`refresh-recent-conversations-for-host`, {
          hostId: e.getHostId(),
          sortKey: i,
        }),
      ),
    ),
    I({ appServerRegistry: t, enabledRemoteHostIds: r, sortKey: i })
  );
}
function R({
  scope: e,
  appServerRegistry: t,
  sortKey: r,
  refreshesInFlightHostIds: i,
}) {
  for (let a of M(e, t)) {
    let e = a.getHostId();
    a.hasFetchedRecentConversations ||
      i.has(e) ||
      (i.add(e),
      n(`refresh-recent-conversations-for-host`, { hostId: e, sortKey: r })
        .catch((t) => {
          h.warning(`recent_conversations_refresh_failed`, {
            safe: { hostId: e, sortKey: r },
            sensitive: { error: t },
          });
        })
        .finally(() => {
          i.delete(e);
        }));
  }
}
function z(e) {
  return new Set(JSON.parse(e));
}
function B(e) {
  return JSON.stringify(Array.from(e).sort((e, t) => e.localeCompare(t)));
}
function V() {
  let e = (0, k.c)(5),
    t = y(_),
    n;
  e[0] === t ? (n = e[1]) : ((n = () => new O(t)), (e[0] = t), (e[1] = n));
  let [r] = (0, A.useState)(n),
    i,
    a;
  return (
    e[2] === r
      ? ((i = e[3]), (a = e[4]))
      : ((i = (e) => r.addRegistryCallback(e)),
        (a = () => r),
        (e[2] = r),
        (e[3] = i),
        (e[4] = a)),
    (0, A.useSyncExternalStore)(i, a)
  );
}
function H(e) {
  let t = (0, k.c)(5),
    n = V(),
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (e) => n.addRegistryCallback(e)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] !== n || t[3] !== e
      ? ((i = () => n.getForHostId(e)), (t[2] = n), (t[3] = e), (t[4] = i))
      : (i = t[4]),
    (0, A.useSyncExternalStore)(r, i)
  );
}
function U(e) {
  let t = H(e);
  if (t == null) throw Error(`AppServerManager for host ${e} not found`);
  return t;
}
function W(e) {
  let t = (0, k.c)(6),
    n = b(i, e),
    r = V(),
    a;
  t[0] !== r || t[1] !== e
    ? ((a = (t) => (e == null ? r.addRegistryCallback(t) : F(r, t))),
      (t[0] = r),
      (t[1] = e),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] !== r || t[4] !== e
    ? ((s = () => (e == null ? r.getDefault() : r.getForConversationId(e))),
      (t[3] = r),
      (t[4] = e),
      (t[5] = s))
    : (s = t[5]);
  let c = (0, A.useSyncExternalStore)(o, s);
  return n ?? c;
}
function G(e) {
  let t = (0, k.c)(6),
    n = b(i, e),
    r = V(),
    a;
  t[0] !== r || t[1] !== e
    ? ((a = (t) => (e == null ? K : F(r, t))),
      (t[0] = r),
      (t[1] = e),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] !== r || t[4] !== e
    ? ((s = () => (e == null ? null : r.getMaybeForConversationId(e))),
      (t[3] = r),
      (t[4] = e),
      (t[5] = s))
    : (s = t[5]);
  let c = (0, A.useSyncExternalStore)(o, s);
  return n ?? c;
}
function K() {}
function q(e) {
  let t = U(u);
  return G(e) ?? t;
}
function J() {
  let e = (0, k.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = {
          queryKeyPrefix: `recent-conversations`,
          subscribeToManager: Y,
        }),
        (e[0] = t))
      : (t = e[0]),
    Q(t)
  );
}
function Y(e, t) {
  return e.addAnyConversationCallback(() => {
    t();
  });
}
function X() {
  let e = (0, k.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = {
          queryKeyPrefix: `recent-conversations-meta`,
          subscribeToManager: Z,
        }),
        (e[0] = t))
      : (t = e[0]),
    Q(t)
  );
}
function Z(e, t) {
  return e.addAnyConversationMetaCallback(() => {
    t();
  });
}
function Q(e) {
  let t = (0, k.c)(24),
    { queryKeyPrefix: n, subscribeToManager: r } = e,
    i = y(_),
    a = V(),
    { enabledRemoteHostIdSet: o } = T(),
    s;
  t[0] === o ? (s = t[1]) : ((s = B(o)), (t[0] = o), (t[1] = s));
  let c = s,
    l = b(w, `2413345355`),
    u = x(E),
    d = l ? D : u,
    f = g(),
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = new Set()), (t[2] = p))
    : (p = t[2]);
  let m = (0, A.useRef)(p),
    h,
    C;
  (t[3] !== a ||
  t[4] !== c ||
  t[5] !== f ||
  t[6] !== n ||
  t[7] !== i ||
  t[8] !== d ||
  t[9] !== r
    ? ((h = () => {
        let e = () => {
          let e = z(c);
          (f.setQueryData(
            [n, d, c],
            I({ appServerRegistry: a, enabledRemoteHostIds: e, sortKey: d }),
          ),
            R({
              scope: i,
              appServerRegistry: a,
              sortKey: d,
              refreshesInFlightHostIds: m.current,
            }));
        };
        return (
          e(),
          P({ appServerRegistry: a, onStoreChange: e, subscribeToManager: r })
        );
      }),
      (C = [a, c, f, n, i, d, r]),
      (t[3] = a),
      (t[4] = c),
      (t[5] = f),
      (t[6] = n),
      (t[7] = i),
      (t[8] = d),
      (t[9] = r),
      (t[10] = h),
      (t[11] = C))
    : ((h = t[10]), (C = t[11])),
    (0, A.useEffect)(h, C));
  let O;
  t[12] !== c || t[13] !== n || t[14] !== d
    ? ((O = [n, d, c]), (t[12] = c), (t[13] = n), (t[14] = d), (t[15] = O))
    : (O = t[15]);
  let j;
  t[16] !== a || t[17] !== c || t[18] !== i || t[19] !== d
    ? ((j = async () =>
        L({
          scope: i,
          appServerRegistry: a,
          enabledRemoteHostIds: z(c),
          sortKey: d,
        })),
      (t[16] = a),
      (t[17] = c),
      (t[18] = i),
      (t[19] = d),
      (t[20] = j))
    : (j = t[20]);
  let M;
  return (
    t[21] !== O || t[22] !== j
      ? ((M = {
          queryKey: O,
          refetchOnWindowFocus: `always`,
          staleTime: S.INFINITE,
          structuralSharing: $,
          queryFn: j,
        }),
        (t[21] = O),
        (t[22] = j),
        (t[23] = M))
      : (M = t[23]),
    v(M)
  );
}
function $(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === t.length &&
    e.every((e, n) => e === t[n])
    ? e
    : t;
}
function ee(e) {
  let t = (0, k.c)(3),
    n = U(e === void 0 ? u : e),
    r,
    i;
  return (
    t[0] === n
      ? ((r = t[1]), (i = t[2]))
      : ((r = (e) => n.addConfigNoticeCallback(e)),
        (i = () => n.getConfigNotices()),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i)),
    (0, A.useSyncExternalStore)(r, i)
  );
}
export { U as a, X as c, H as i, W as n, V as o, q as r, J as s, ee as t };
//# sourceMappingURL=app-server-manager-hooks.js.map
