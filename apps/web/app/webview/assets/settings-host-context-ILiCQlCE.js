import { fo as e, po as t } from "./app-server-manager-signals-DkRDRgNB.js";
import { S as n, X as r, Z as i, at as a, wt as o } from "./setting-storage.js";
import { t as s } from "./use-connected-remote-connections.js";
function c(e, n) {
  return n == null || e === `local` || n.some((t) => t.hostId === e) ? e : t;
}
function l(e, t) {
  return e.filter((e) =>
    t === `local`
      ? e.projectKind === `local`
      : e.projectKind === `remote` && e.hostId === t,
  );
}
var u = o(),
  d = a(n, t);
function f() {
  let t = (0, u.c)(12),
    a = r(n),
    [o] = e(`remote_connections`),
    l = s(o),
    f = i(d),
    m;
  t[0] === o ? (m = t[1]) : ((m = o?.map(p)), (t[0] = o), (t[1] = m));
  let h;
  t[2] !== l || t[3] !== f
    ? ((h = c(f, l)), (t[2] = l), (t[3] = f), (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] === a
    ? (g = t[6])
    : ((g = (e) => {
        a.set(d, e);
      }),
      (t[5] = a),
      (t[6] = g));
  let _;
  return (
    t[7] !== l || t[8] !== m || t[9] !== h || t[10] !== g
      ? ((_ = {
          connectedRemoteConnections: l,
          remoteConnectionHostIds: m,
          selectedHostId: h,
          setSelectedHostId: g,
        }),
        (t[7] = l),
        (t[8] = m),
        (t[9] = h),
        (t[10] = g),
        (t[11] = _))
      : (_ = t[11]),
    _
  );
}
function p(e) {
  return e.hostId;
}
export { l as n, c as r, f as t };
//# sourceMappingURL=settings-host-context-ILiCQlCE.js.map
