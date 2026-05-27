import { x as e } from "./src-BLHmAhbF.js";
import { S as t, Z as n, nt as r, t as i } from "./setting-storage-kJblH-wH.js";
var a = `(prefers-reduced-motion: reduce)`,
  o = r(t, u()),
  s = n(t, ({ get: t }) => i(t, e.reducedMotionPreference)),
  c = n(t, ({ get: e }) =>
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
//# sourceMappingURL=reduced-motion-preference-DnjdGHz7.js.map
