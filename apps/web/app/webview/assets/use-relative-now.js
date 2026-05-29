import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t } from "./jsx-runtime.js";
var n = e(t(), 1),
  r = 6e4,
  i = new Date(),
  a = new Set(),
  o = null;
function s() {
  return (0, n.useSyncExternalStore)(f, p, p);
}
function c() {
  for (let e of a) e();
}
function l() {
  ((i = new Date()), c());
}
function u() {
  o != null ||
    typeof window > `u` ||
    (l(),
    (o = window.setInterval(() => {
      l();
    }, r)));
}
function d() {
  o != null && (window.clearInterval(o), (o = null));
}
function f(e) {
  return (
    a.add(e),
    a.size === 1 && u(),
    () => {
      (a.delete(e), a.size === 0 && d());
    }
  );
}
function p() {
  return i;
}
export { s as t };
//# sourceMappingURL=use-relative-now.js.map
