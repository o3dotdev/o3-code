import { mn as e } from "./app-server-manager-signals.js";
import { xt as t } from "./setting-storage.js";
var n = t();
function r(t, r, i, a) {
  let o = (0, n.c)(2),
    s;
  return (
    o[0] === i
      ? (s = o[1])
      : ((s = (e) => {
          let { root: t } = e;
          return { operationSource: i, root: t };
        }),
        (o[0] = i),
        (o[1] = s)),
    e(t, r, `base-branch`, s, i, a)
  );
}
export { r as t };
//# sourceMappingURL=use-git-base-branch.js.map
