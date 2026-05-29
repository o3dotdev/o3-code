import {
  L as e,
  S as t,
  Z as n,
  _ as r,
  f as i,
  u as a,
  wt as o,
  y as s,
} from "./setting-storage.js";
var c = o(),
  l = i(t, `inbox-items`, {
    enabled: !0,
    params: { limit: 200 },
    refetchInterval: r.ONE_MINUTE,
    staleTime: r.ONE_MINUTE,
  });
function u() {
  let t = (0, c.c)(11),
    r = e(),
    i = n(l),
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = (e) => {
        (r.setQueryData(a(`inbox-items`, { limit: 200 }), (t) =>
          t == null
            ? t
            : {
                ...t,
                items: t.items.map((t) =>
                  t.id === e && t.readAt == null
                    ? { ...t, readAt: Date.now() }
                    : t,
                ),
              },
        ),
          s.dispatchMessage(`inbox-item-set-read-state`, {
            id: e,
            isRead: !0,
          }));
      }),
      (t[0] = r),
      (t[1] = o));
  let u = o,
    d;
  t[2] === r
    ? (d = t[3])
    : ((d = (e) => {
        (r.setQueryData(a(`inbox-items`, { limit: 200 }), (t) =>
          t == null
            ? t
            : {
                ...t,
                items: t.items.map((t) =>
                  t.id === e && t.readAt != null ? { ...t, readAt: null } : t,
                ),
              },
        ),
          s.dispatchMessage(`inbox-item-set-read-state`, {
            id: e,
            isRead: !1,
          }));
      }),
      (t[2] = r),
      (t[3] = d));
  let f = d,
    p;
  t[4] === i.data?.items
    ? (p = t[5])
    : ((p = i.data?.items ?? []), (t[4] = i.data?.items), (t[5] = p));
  let m;
  return (
    t[6] !== i.isLoading || t[7] !== u || t[8] !== f || t[9] !== p
      ? ((m = { items: p, isLoading: i.isLoading, markRead: u, markUnread: f }),
        (t[6] = i.isLoading),
        (t[7] = u),
        (t[8] = f),
        (t[9] = p),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
export { u as t };
//# sourceMappingURL=use-automation-history-items.js.map
