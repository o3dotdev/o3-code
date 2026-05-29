import { wt as e } from "./setting-storage.js";
import { d as t, o as n, u as r } from "./statsig--EYRNU53.js";
import { t as i } from "./use-auth.js";
var a = e(),
  o = `2478676115`,
  s = `3503973010`,
  c = `show_dropdown_entry_point`;
function l() {
  let e = (0, a.c)(3),
    { authMethod: r, isLoading: s } = i(),
    c = t(),
    l = n(o),
    u = s || (r === `chatgpt` && c),
    d = r === `chatgpt` && l,
    f;
  return (
    e[0] !== u || e[1] !== d
      ? ((f = { isProfileVisibilityLoading: u, isProfileVisible: d }),
        (e[0] = u),
        (e[1] = d),
        (e[2] = f))
      : (f = e[2]),
    f
  );
}
function u() {
  let e = (0, a.c)(3),
    { authMethod: t } = i(),
    l = n(o),
    u = r(s);
  if (t !== `chatgpt`) return !1;
  let d;
  return (
    e[0] !== l || e[1] !== u
      ? ((d = l && u.get(c, !1)), (e[0] = l), (e[1] = u), (e[2] = d))
      : (d = e[2]),
    d
  );
}
export { l as n, u as t };
//# sourceMappingURL=profile-visibility.js.map
