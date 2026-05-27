import { gn as e } from "./app-server-manager-signals-7MlBpIlX.js";
import { J as t, xt as n } from "./setting-storage-kJblH-wH.js";
import { n as r } from "./git-current-branch-query-S_9xbqZm.js";
var i = n();
function a(n, a, o, s) {
  let c = (0, i.c)(7),
    l = n ?? null,
    u;
  c[0] === s ? (u = c[1]) : ((u = e(s, null)), (c[0] = s), (c[1] = u));
  let d;
  return (
    c[2] !== a || c[3] !== o || c[4] !== l || c[5] !== u
      ? ((d = { cwd: l, hostConfig: a, operationSource: o, ...u }),
        (c[2] = a),
        (c[3] = o),
        (c[4] = l),
        (c[5] = u),
        (c[6] = d))
      : (d = c[6]),
    t(r, d)
  );
}
export { a as t };
//# sourceMappingURL=use-git-current-branch-DDdUA-cN.js.map
