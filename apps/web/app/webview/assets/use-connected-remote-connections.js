import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t } from "./app-server-manager-signals-DkRDRgNB.js";
import { $ as n, S as r, Y as i, wt as a } from "./setting-storage.js";
import { t as o } from "./sortBy.js";
var s = a(),
  c = e(o(), 1),
  l = n(r, (e, { get: n }) => {
    if (e != null) return Object.fromEntries(e.map((e) => [e, n(t, e)]));
  });
function u(e) {
  let t = (0, s.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = e == null ? void 0 : (0, c.default)(e.map(d))),
        (t[0] = e),
        (t[1] = n)),
    i(l, n)
  );
}
function d(e) {
  let { hostId: t } = e;
  return t;
}
function f(e) {
  let t = (0, s.c)(5),
    n = u(e);
  if (e == null || n == null) return;
  let r;
  if (t[0] !== n || t[1] !== e) {
    let i;
    (t[3] === n
      ? (i = t[4])
      : ((i = (e) => n[e.hostId] === `connected`), (t[3] = n), (t[4] = i)),
      (r = e.filter(i)),
      (t[0] = n),
      (t[1] = e),
      (t[2] = r));
  } else r = t[2];
  return r;
}
export { u as n, f as t };
//# sourceMappingURL=use-connected-remote-connections.js.map
