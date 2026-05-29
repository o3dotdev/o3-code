import { D as e } from "./src-C.js";
import { Q as t, S as n, at as r, t as i } from "./setting-storage.js";
var a = `(prefers-reduced-motion: reduce)`,
  o = r(n, u()),
  s = t(n, ({ get: t }) => i(t, e.reducedMotionPreference)),
  c = t(n, ({ get: e }) =>
    l({ preference: e(s), systemPrefersReducedMotion: e(o) }),
  );
function l({ preference: e, systemPrefersReducedMotion: t }) {
  switch (e) {
    case `off`:
      return !1;
    case `on`:
      return !0;
    case `system`:
      return t;
  }
}
function u() {
  return typeof window > `u` || typeof window.matchMedia != `function`
    ? !1
    : window.matchMedia(a).matches;
}
function d() {
  return typeof window > `u` || typeof window.matchMedia != `function`
    ? null
    : window.matchMedia(a);
}
export { o as i, u as n, c as r, d as t };
//# sourceMappingURL=reduced-motion-preference-DE4zP-oH.js.map
