import { s as e } from "./chunk-Bj-mKKzh.js";
import { R as t, U as n } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as r } from "./jsx-runtime.js";
import {
  S as i,
  X as a,
  Y as o,
  Z as s,
  wt as c,
  y as l,
} from "./setting-storage.js";
import { o as u } from "./statsig--EYRNU53.js";
import { h as d } from "./process-manager-target.js";
import {
  a as f,
  i as p,
  n as m,
  r as h,
  t as g,
} from "./heartbeat-automation-permissions-DKKzssYc.js";
var _ = c(),
  v = e(r(), 1);
function y(e) {
  let r = (0, _.c)(17),
    { conversationId: c } = e,
    y = a(i),
    b = u(`1488233300`),
    x = o(d, c),
    S = o(t, c),
    C = o(f, c),
    w = s(p)?.[c],
    T;
  r[0] !== w ||
  r[1] !== c ||
  r[2] !== x.isEligible ||
  r[3] !== x.reason ||
  r[4] !== b ||
  r[5] !== S ||
  r[6] !== y
    ? ((T = () => {
        let e = y.get(n, c),
          t = m(e),
          r = h(e, w);
        (b && t != null && y.set(p, (e) => g(e ?? {}, c, t)),
          l.dispatchMessage(`heartbeat-automation-thread-state-changed`, {
            threadId: b ? c : null,
            isEligible: b && x.isEligible,
            collaborationMode: b ? S : null,
            permissions: b ? r : null,
            reason: b ? x.reason : null,
          }));
      }),
      (r[0] = w),
      (r[1] = c),
      (r[2] = x.isEligible),
      (r[3] = x.reason),
      (r[4] = b),
      (r[5] = S),
      (r[6] = y),
      (r[7] = T))
    : (T = r[7]);
  let E;
  return (
    r[8] !== w ||
    r[9] !== c ||
    r[10] !== x.isEligible ||
    r[11] !== x.reason ||
    r[12] !== b ||
    r[13] !== C ||
    r[14] !== S ||
    r[15] !== y
      ? ((E = [w, c, x.isEligible, x.reason, C, b, S, y]),
        (r[8] = w),
        (r[9] = c),
        (r[10] = x.isEligible),
        (r[11] = x.reason),
        (r[12] = b),
        (r[13] = C),
        (r[14] = S),
        (r[15] = y),
        (r[16] = E))
      : (E = r[16]),
    (0, v.useEffect)(T, E),
    null
  );
}
export { y as t };
//# sourceMappingURL=heartbeat-automation-thread-bridge.js.map
