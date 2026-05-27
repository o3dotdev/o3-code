import { Ta as e, wa as t } from "./app-server-manager-signals.js";
import { S as n, X as r, Y as i, nt as a, xt as o } from "./setting-storage.js";
import { t as s } from "./use-connected-remote-connections.js";
import { n as c } from "./settings-host-selection.js";
var l = o(),
  u = a(n, e);
function d() {
  let e = (0, l.c)(12),
    a = i(n),
    [o] = t(`remote_connections`),
    d = s(o),
    p = r(u),
    m;
  e[0] === o ? (m = e[1]) : ((m = o?.map(f)), (e[0] = o), (e[1] = m));
  let h;
  e[2] !== d || e[3] !== p
    ? ((h = c(p, d)), (e[2] = d), (e[3] = p), (e[4] = h))
    : (h = e[4]);
  let g;
  e[5] === a
    ? (g = e[6])
    : ((g = (e) => {
        a.set(u, e);
      }),
      (e[5] = a),
      (e[6] = g));
  let _;
  return (
    e[7] !== d || e[8] !== m || e[9] !== h || e[10] !== g
      ? ((_ = {
          connectedRemoteConnections: d,
          remoteConnectionHostIds: m,
          selectedHostId: h,
          setSelectedHostId: g,
        }),
        (e[7] = d),
        (e[8] = m),
        (e[9] = h),
        (e[10] = g),
        (e[11] = _))
      : (_ = e[11]),
    _
  );
}
function f(e) {
  return e.hostId;
}
export { d as t };
//# sourceMappingURL=settings-host-context.js.map
