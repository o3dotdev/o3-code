import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { t as r } from "./clsx-BcPLHiun.js";
import { wt as i } from "./setting-storage.js";
import { b as a, l as o } from "./apps-queries-CmwRqoKz.js";
import { t as s } from "./use-is-dark-BHkhnHe-.js";
var c = i(),
  l = e(t(), 1),
  u = n();
function d(e) {
  let t = (0, c.c)(20),
    { alt: n, className: i, logoUrl: o, logoDarkUrl: d, fallback: p } = e,
    g = s() === !0,
    _,
    v,
    y,
    b,
    x;
  if (t[0] !== i || t[1] !== p || t[2] !== g || t[3] !== d || t[4] !== o) {
    x = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (
        ((v = r(`rounded-2xs`, i)),
        (y = f({ logoUrl: o, logoDarkUrl: d, isDarkTheme: g })),
        (_ = (0, l.cloneElement)(p, { className: r(v, p.props.className) })),
        y == null)
      ) {
        x = _;
        break bb0;
      }
      b = a(y);
    }
    ((t[0] = i),
      (t[1] = p),
      (t[2] = g),
      (t[3] = d),
      (t[4] = o),
      (t[5] = _),
      (t[6] = v),
      (t[7] = y),
      (t[8] = b),
      (t[9] = x));
  } else ((_ = t[5]), (v = t[6]), (y = t[7]), (b = t[8]), (x = t[9]));
  if (x !== Symbol.for(`react.early_return_sentinel`)) return x;
  let S = b;
  if (S != null) {
    let e;
    return (
      t[10] !== n || t[11] !== S || t[12] !== _ || t[13] !== v
        ? ((e = (0, u.jsx)(m, {
            className: v,
            alt: n,
            connectorLogoRequest: S,
            fallback: _,
          })),
          (t[10] = n),
          (t[11] = S),
          (t[12] = _),
          (t[13] = v),
          (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  let C;
  return (
    t[15] !== n || t[16] !== _ || t[17] !== v || t[18] !== y
      ? ((C = (0, u.jsx)(h, { alt: n, className: v, src: y, fallback: _ }, y)),
        (t[15] = n),
        (t[16] = _),
        (t[17] = v),
        (t[18] = y),
        (t[19] = C))
      : (C = t[19]),
    C
  );
}
function f({ logoUrl: e, logoDarkUrl: t, isDarkTheme: n }) {
  let r = p(e),
    i = p(t);
  return n ? (i ?? r) : (r ?? i);
}
function p(e) {
  let t = e?.trim();
  return t == null || t.length === 0 ? null : t;
}
function m(e) {
  let t = (0, c.c)(5),
    { className: n, alt: r, connectorLogoRequest: i, fallback: a } = e,
    s = o(i);
  if (s == null) return a;
  let l;
  return (
    t[0] !== r || t[1] !== n || t[2] !== s || t[3] !== a
      ? ((l = (0, u.jsx)(h, { className: n, alt: r, fallback: a, src: s }, s)),
        (t[0] = r),
        (t[1] = n),
        (t[2] = s),
        (t[3] = a),
        (t[4] = l))
      : (l = t[4]),
    l
  );
}
function h(e) {
  let t = (0, c.c)(5),
    { alt: n, className: r, src: i, fallback: a } = e,
    [o, s] = (0, l.useState)(!1);
  if (o) return a;
  let d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = () => {
        s(!0);
      }),
      (t[0] = d))
    : (d = t[0]);
  let f;
  return (
    t[1] !== n || t[2] !== r || t[3] !== i
      ? ((f = (0, u.jsx)(`img`, { alt: n, className: r, src: i, onError: d })),
        (t[1] = n),
        (t[2] = r),
        (t[3] = i),
        (t[4] = f))
      : (f = t[4]),
    f
  );
}
export { d as t };
//# sourceMappingURL=connector-logo.js.map
