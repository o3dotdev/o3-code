import { s as e } from "./chunk-Bj-mKKzh.js";
import { d as t, kr as n } from "./src-C.js";
import { Li as r } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as i } from "./jsx-runtime.js";
import { S as a, X as o, wt as s } from "./setting-storage.js";
import { t as c } from "./use-global-state.js";
var l = s(),
  u = e(i(), 1);
function d(e, n, r) {
  if (n == null || e == null) return null;
  let i = t(r);
  return e.find((e) => e.hostId === n && t(e.remotePath) === i) ?? null;
}
function f(e, t) {
  r(e, n.ACTIVE_REMOTE_PROJECT_ID, t ?? void 0);
}
function p(e, t) {
  return r(e, n.REMOTE_PROJECTS, t);
}
function m() {
  let e = (0, l.c)(21),
    t = o(a),
    { data: i, isLoading: s } = c(n.REMOTE_PROJECTS),
    { data: d } = c(n.ACTIVE_REMOTE_PROJECT_ID),
    m;
  e[0] === i ? (m = e[1]) : ((m = i ?? []), (e[0] = i), (e[1] = m));
  let h = m,
    g;
  e[2] !== h || e[3] !== d
    ? ((g = h.find((e) => e.id === d) ?? null),
      (e[2] = h),
      (e[3] = d),
      (e[4] = g))
    : (g = e[4]);
  let _ = g,
    v,
    y;
  (e[5] !== s || e[6] !== t || e[7] !== _ || e[8] !== d
    ? ((v = () => {
        s || d == null || _ != null || r(t, n.ACTIVE_REMOTE_PROJECT_ID, void 0);
      }),
      (y = [s, t, _, d]),
      (e[5] = s),
      (e[6] = t),
      (e[7] = _),
      (e[8] = d),
      (e[9] = v),
      (e[10] = y))
    : ((v = e[9]), (y = e[10])),
    (0, u.useEffect)(v, y));
  let b = d ?? null,
    x;
  e[11] === t ? (x = e[12]) : ((x = (e) => f(t, e)), (e[11] = t), (e[12] = x));
  let S;
  e[13] === t ? (S = e[14]) : ((S = (e) => p(t, e)), (e[13] = t), (e[14] = S));
  let C;
  return (
    e[15] !== h || e[16] !== _ || e[17] !== b || e[18] !== x || e[19] !== S
      ? ((C = {
          selectedRemoteProject: _,
          selectedRemoteProjectId: b,
          setSelectedRemoteProjectId: x,
          remoteProjects: h,
          setRemoteProjects: S,
        }),
        (e[15] = h),
        (e[16] = _),
        (e[17] = b),
        (e[18] = x),
        (e[19] = S),
        (e[20] = C))
      : (C = e[20]),
    C
  );
}
export { f as n, m as r, d as t };
//# sourceMappingURL=remote-projects.js.map
