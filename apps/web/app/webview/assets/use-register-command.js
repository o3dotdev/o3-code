import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t } from "./jsx-runtime.js";
import { S as n, X as r, at as i, wt as a } from "./setting-storage.js";
import { n as o } from "./run-command.js";
var s = {},
  c = i(n, !1),
  l = i(n, s);
function u(e, t) {
  return e[t]?.length ?? 0;
}
var d = a(),
  f = e(t(), 1);
function p(e, t, i) {
  let a = (0, d.c)(16),
    s;
  a[0] === i
    ? (s = a[1])
    : ((s = i === void 0 ? {} : i), (a[0] = i), (a[1] = s));
  let { enabled: c, keyboardHandler: u, menuItem: p } = s,
    g = c === void 0 ? !0 : c,
    _ = r(n),
    v;
  a[2] !== t || a[3] !== u
    ? ((v = (e) => {
        if (e != null && u?.(e) === !1) return !1;
        t();
      }),
      (a[2] = t),
      (a[3] = u),
      (a[4] = v))
    : (v = a[4]);
  let y = (0, f.useEffectEvent)(v),
    b;
  a[5] !== g || a[6] !== y || a[7] !== e || a[8] !== p || a[9] !== _
    ? ((b = () => {
        if (!g) return;
        let t = p == null ? {} : { menuItem: p },
          n = o(e, y);
        return (
          _.set(l, (n) => m(n, e, t)),
          () => {
            (n(), _.set(l, (n) => h(n, e, t)));
          }
        );
      }),
      (a[5] = g),
      (a[6] = y),
      (a[7] = e),
      (a[8] = p),
      (a[9] = _),
      (a[10] = b))
    : (b = a[10]);
  let x;
  (a[11] !== g || a[12] !== e || a[13] !== p || a[14] !== _
    ? ((x = [g, e, p, _]),
      (a[11] = g),
      (a[12] = e),
      (a[13] = p),
      (a[14] = _),
      (a[15] = x))
    : (x = a[15]),
    (0, f.useEffect)(b, x));
}
function m(e, t, n) {
  return { ...e, [t]: [...(e[t] ?? []), n] };
}
function h(e, t, n) {
  let r = e[t];
  if (r == null) return e;
  let i = r.lastIndexOf(n);
  if (i === -1) return e;
  if (r.length === 1) {
    let n = { ...e };
    return (delete n[t], n);
  }
  let a = [...r];
  return (a.splice(i, 1), { ...e, [t]: a });
}
export { l as i, u as n, c as r, p as t };
//# sourceMappingURL=use-register-command.js.map
