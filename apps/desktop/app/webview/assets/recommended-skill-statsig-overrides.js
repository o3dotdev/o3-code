import { Gi as e, Hi as t, Yi as n, qi as r } from "./src-C.js";
import { wt as i } from "./setting-storage.js";
import { a } from "./statsig--EYRNU53.js";
var o = i(),
  s = `1852350085`,
  c = r().refine((e) => e.trim().length > 0),
  l = t({ skill_markdown_by_id: e(r(), n()).optional() }).catch({
    skill_markdown_by_id: {},
  });
function u() {
  let e = (0, o.c)(2),
    { value: t } = a(s),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = d(t)), (e[0] = t), (e[1] = n)), n);
}
function d(e) {
  let t = {},
    n = l.parse(e);
  for (let [e, r] of Object.entries(n.skill_markdown_by_id ?? {})) {
    let n = c.safeParse(r);
    n.success && (t[e] = n.data);
  }
  return t;
}
function f(e, t) {
  return e[t];
}
export { u as n, f as t };
//# sourceMappingURL=recommended-skill-statsig-overrides.js.map
