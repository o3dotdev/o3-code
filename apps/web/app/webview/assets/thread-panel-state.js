import {
  D as e,
  E as t,
  Z as n,
  _ as r,
  g as i,
  v as a,
} from "./app-shell-state.js";
import { n as o, t as s } from "./app-shell-tab-controller-BTWycTBb.js";
function c(e) {
  return e === `bottom` ? s : o;
}
function l(r, o, { activateFallbackTab: s, allowEmpty: l } = {}) {
  let u = c(o),
    d = r.get(u.tabs$),
    f = null;
  if (o === `bottom`) {
    let t = r.get(e);
    f = t === `bottom-panel` ? null : t;
  }
  return d.length === 0 && l !== !0
    ? !1
    : (s === !0 &&
        r.get(u.activeTab$) == null &&
        u.activateTab(r, d[0]?.tabId ?? null),
      o === `bottom`
        ? (f != null && r.set(t, f), i(r, !0), n(r, `bottom-panel`))
        : a(r, !0),
      !0);
}
function u(a, o) {
  if (o === `bottom`) {
    let r = a.get(e) === `bottom-panel` ? a.get(t) : null;
    (i(a, !1), r != null && n(a, r));
    return;
  }
  r(a, !1, { restoreFullWidthOnNextOpen: !0 });
}
function d(e, t, n, r) {
  return r() ? (c(t).activateTab(e, n), l(e, t)) : !1;
}
export { d as i, c as n, l as r, u as t };
//# sourceMappingURL=thread-panel-state.js.map
