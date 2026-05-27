import { J as e, xt as t } from "./setting-storage.js";
import { n } from "./thread-context-inputs.js";
var r = t();
function i(t) {
  let i = (0, r.c)(2),
    a;
  return (
    i[0] === t
      ? (a = i[1])
      : ((a = t == null ? void 0 : { hostId: t }), (i[0] = t), (i[1] = a)),
    e(n, a)
  );
}
function a(e) {
  return i(e).data?.codexHome;
}
export { i as n, a as t };
//# sourceMappingURL=use-codex-home.js.map
