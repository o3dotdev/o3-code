import { C as e } from "./src-C.js";
import { a as t, wt as n } from "./setting-storage.js";
var r = n();
function i() {
  let n = (0, r.c)(2),
    i = t(e.composerEnterBehavior),
    a;
  return (
    n[0] === i
      ? (a = n[1])
      : ((a = { enterBehavior: i }), (n[0] = i), (n[1] = a)),
    a
  );
}
export { i as t };
//# sourceMappingURL=use-enter-behavior.js.map
