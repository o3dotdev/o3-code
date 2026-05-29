import { Q as e, S as t, at as n } from "./setting-storage.js";
var r = n(t, !1),
  i = n(t, !1),
  a = n(t, !1),
  o = n(t, !1),
  s = e(t, ({ get: e }) => e(a) || e(i));
function c(e) {
  (e.set(r, !1), e.set(i, !1), e.set(a, !1), e.set(o, !1));
}
function l(e, { altKey: t, ctrlKey: n, metaKey: s, shiftKey: c }) {
  (e.set(r, t), e.set(i, n), e.set(a, s), e.set(o, c));
}
export { l as a, a as i, r as n, s as r, c as t };
//# sourceMappingURL=keyboard-modifier-state-BKqcycjV.js.map
