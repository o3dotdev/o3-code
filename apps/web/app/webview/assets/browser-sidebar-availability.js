import { jr as e } from "./src-C.js";
import { v as t } from "./app-server-manager-signals-DkRDRgNB.js";
import { $ as n, Q as r, S as i, at as a } from "./setting-storage.js";
import { p as o } from "./statsig--EYRNU53.js";
import { n as s } from "./experimental-features-queries.js";
var c = `in_app_browser`,
  l = a(i, () => ({})),
  u = r(i, ({ get: e }) => {
    let { data: n } = e(s, e(t)),
      r = n?.find((e) => e.name === c);
    return n != null && r?.enabled !== !1;
  }),
  d = r(i, ({ get: e }) => e(o, `1714131075`) && y()),
  f = d,
  p = n(i, (e, { get: t }) => {
    let n = t(l)[e] ?? [];
    return t(f) || n.length > 0;
  }),
  m = n(i, ({ browserTabId: e, conversationId: t }, { get: n }) => {
    let r = n(l)[t] ?? [];
    return n(f) || r.includes(e);
  });
function h(e, t, n) {
  e.set(l, (e) => {
    let r = e[t] ?? [];
    return r.includes(n) ? e : { ...e, [t]: [...r, n] };
  });
}
function g(e, t, n) {
  e.set(l, (e) => {
    let r = e[t] ?? [];
    if (!r.includes(n)) return e;
    let i = r.filter((e) => e !== n);
    if (i.length === 0) {
      let { [t]: n, ...r } = e;
      return r;
    }
    return { ...e, [t]: i };
  });
}
function _(e, t) {
  e.set(l, (e) => {
    if (e[t] == null) return e;
    let { [t]: n, ...r } = e;
    return r;
  });
}
function v(e, t, n) {
  return e.get(l)[t]?.includes(n) === !0;
}
function y() {
  return (
    window.electronBridge?.usesOwlAppShell?.() ??
    e.usesOwlAppShellByDefault(`prod`)
  );
}
export {
  v as a,
  p as c,
  u as i,
  d as l,
  _ as n,
  f as o,
  h as r,
  m as s,
  g as t,
};
//# sourceMappingURL=browser-sidebar-availability.js.map
