import { s as e } from "./chunk-Bj-mKKzh.js";
import { Xr as t } from "./src-C.js";
import { n, t as r } from "./jsx-runtime.js";
import { t as i } from "./clsx-BcPLHiun.js";
import { wt as a } from "./setting-storage.js";
import { t as o } from "./data-url-from-svg.js";
import { a as s } from "./browser-sidebar-comment-light-dismiss.js";
var c = a(),
  l = e(n(), 1),
  u = [0, 0.25, 0.5, 0.75, 1],
  d = 100;
function f(e) {
  let t = (0, c.c)(19),
    { containerRef: n, pageSelector: r, totalPages: i } = e,
    [a, o] = (0, l.useState)(1),
    s = (0, l.useRef)(null),
    f = (0, l.useRef)(null),
    g = m(a, i),
    _,
    v;
  (t[0] !== n || t[1] !== r || t[2] !== i
    ? ((_ = () => {
        let e = n.current;
        if (e == null || i < 1 || typeof IntersectionObserver > `u`) return;
        let t = p(e, r);
        if (t.length === 0) return;
        let a = new Map(),
          c = new IntersectionObserver(
            (n) => {
              for (let e of n) a.set(e.target, e.intersectionRatio);
              let r = h({
                container: e,
                pageElements: t,
                pageVisibilityByElement: a,
              });
              r != null &&
                ((s.current != null && r !== s.current) ||
                  (r === s.current &&
                    ((s.current = null), f.current?.(), (f.current = null)),
                  o(r)));
            },
            { root: e, threshold: u },
          );
        for (let e of t) (a.set(e, 0), c.observe(e));
        let l = h({
          container: e,
          pageElements: t,
          pageVisibilityByElement: a,
        });
        return (
          l != null && o(l),
          () => {
            (c.disconnect(),
              (s.current = null),
              f.current?.(),
              (f.current = null));
          }
        );
      }),
      (v = [n, r, i]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = _),
      (t[4] = v))
    : ((_ = t[3]), (v = t[4])),
    (0, l.useEffect)(_, v));
  let y;
  t[5] !== n || t[6] !== r
    ? ((y = (e) => {
        let t = n.current;
        if (t == null) return;
        let i = p(t, r).at(e - 1);
        if (i == null) return;
        (f.current?.(), (f.current = null), (s.current = e));
        let a = null,
          c = () => {
            (a != null && (clearTimeout(a), (a = null)),
              t.removeEventListener(`scroll`, u));
          },
          l = () => {
            if (s.current !== e) return;
            ((s.current = null), c());
            let n = h({
              container: t,
              pageElements: p(t, r),
              pageVisibilityByElement: new Map(),
            });
            n != null && o(n);
          },
          u = () => {
            (a != null && clearTimeout(a), (a = setTimeout(l, d)));
          };
        ((f.current = c),
          i.scrollIntoView({ behavior: `smooth`, block: `start` }),
          o(e),
          u(),
          t.addEventListener(`scroll`, u));
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = y))
    : (y = t[7]);
  let b = y,
    x;
  t[8] !== g || t[9] !== b
    ? ((x = () => {
        let e = g - 1;
        e < 1 || b(e);
      }),
      (t[8] = g),
      (t[9] = b),
      (t[10] = x))
    : (x = t[10]);
  let S = x,
    C;
  t[11] !== g || t[12] !== b || t[13] !== i
    ? ((C = () => {
        let e = g + 1;
        e > i || b(e);
      }),
      (t[11] = g),
      (t[12] = b),
      (t[13] = i),
      (t[14] = C))
    : (C = t[14]);
  let w = C,
    T;
  return (
    t[15] !== g || t[16] !== w || t[17] !== S
      ? ((T = { currentPage: g, goToNextPage: w, goToPreviousPage: S }),
        (t[15] = g),
        (t[16] = w),
        (t[17] = S),
        (t[18] = T))
      : (T = t[18]),
    T
  );
}
function p(e, t) {
  return Array.from(e.querySelectorAll(t));
}
function m(e, t) {
  return Math.min(Math.max(e, 1), Math.max(t, 1));
}
function h({ container: e, pageElements: t, pageVisibilityByElement: n }) {
  if (t.length === 0) return null;
  let r = 0,
    i = -1;
  for (let [e, a] of t.entries()) {
    let t = n.get(a) ?? 0;
    t > i && ((i = t), (r = e));
  }
  if (i > 0) return r + 1;
  let a = e.getBoundingClientRect().top,
    o = 0,
    s = 1 / 0;
  for (let [e, n] of t.entries()) {
    let t = Math.abs(n.getBoundingClientRect().top - a);
    t < s && ((s = t), (o = e));
  }
  return o + 1;
}
var g = r(),
  _ = (e) =>
    (0, g.jsx)(`svg`, {
      width: 26,
      height: 25,
      viewBox: `0 0 26 25`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, g.jsx)(`path`, {
        d: `M12.6504 0.824799C6.21496 0.824799 0.825466 5.77554 0.825195 12.0885C0.825245 14.2375 1.46183 16.2421 2.55176 17.943L2.02148 20.235L1.99316 20.3756C1.77603 21.655 2.78945 22.7791 4.02832 22.7691L4.0791 22.8209L4.53418 22.7047L7.12305 22.0426C8.77593 22.8778 10.6577 23.3531 12.6504 23.3531C19.086 23.3531 24.4754 18.4014 24.4756 12.0885C24.4753 5.77554 19.0858 0.824799 12.6504 0.824799Z`,
        fill: `currentColor`,
        stroke: `white`,
        strokeWidth: 1.65,
      }),
    }),
  v = `<svg
  width="26"
  height="25"
  viewBox="0 0 26 25"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.6504 0.824799C6.21496 0.824799 0.825466 5.77554 0.825195 12.0885C0.825245 14.2375 1.46183 16.2421 2.55176 17.943L2.02148 20.235L1.99316 20.3756C1.77603 21.655 2.78945 22.7791 4.02832 22.7691L4.0791 22.8209L4.53418 22.7047L7.12305 22.0426C8.77593 22.8778 10.6577 23.3531 12.6504 23.3531C19.086 23.3531 24.4754 18.4014 24.4756 12.0885C24.4753 5.77554 19.0858 0.824799 12.6504 0.824799Z"
    fill="currentColor"
    stroke="white"
    stroke-width="1.65"
  />
</svg>
`,
  y = `#2563eb`,
  b = o(v.replace(`currentColor`, y)),
  x = `var(--color-text-accent, var(--color-accent-blue, #2563eb))`,
  S = `color-mix(in srgb, var(--color-text-accent, var(--color-accent-blue, #2563eb)) 20%, transparent)`,
  C = y,
  w = `url("${b}") 13 12, crosshair`,
  T = t;
function E(e) {
  return { x: e.x + e.width, y: e.y };
}
function D(e) {
  let t = e.getBoundingClientRect();
  return {
    height: e.offsetHeight || t.height,
    width: e.offsetWidth || t.width,
  };
}
function O({ layer: e, markerPoint: t, pageSize: n }) {
  if (e == null || n.width <= 0 || n.height <= 0) return null;
  let r = e.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return null;
  let i = e.ownerDocument.defaultView ?? window,
    a = r.left + (t.x / n.width) * r.width,
    o = r.top + (t.y / n.height) * r.height,
    s = Math.max(16, i.innerWidth - 294 - 16),
    c = Math.max(16, i.innerHeight - 120 - 16),
    l = A(o - 44 / 2, 16, c),
    u = a + 27,
    d = a - 27 - 294;
  for (let e of [u, d]) if (e >= 16 && e <= s) return { x: e, y: k(l) };
  let f = A(a - 294 / 2, 16, s),
    p = o + 27;
  return p <= c ? { x: f, y: k(p) } : { x: f, y: k(A(o - 27 - 120, 16, c)) };
}
function k(e) {
  let t = T - 120;
  return e - Math.min(t, Math.max(e - 16, 0));
}
function A(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var j = 32,
  M = 294,
  N = 30,
  P = `var(--color-token-dropdown-background, var(--color-token-main-surface-primary, white))`,
  F = `var(--color-token-foreground, var(--color-token-text-primary, rgb(38, 38, 38)))`,
  I = `var(--color-token-border-default, var(--color-token-border-light, rgba(13, 13, 13, 0.08)))`,
  L = { color: `white`, fontFamily: `var(--font-sans)` },
  R = `pointer-events-none fixed z-[1000] cursor-auto paged-annotation-editor-enter`;
function z(e) {
  let t = (0, c.c)(8),
    { pageSize: n, rect: r, testId: i } = e,
    a = `${(r.height / n.height) * 100}%`,
    o = `${(r.x / n.width) * 100}%`,
    s = `${(r.y / n.height) * 100}%`,
    l = `${(r.width / n.width) * 100}%`,
    u;
  t[0] !== a || t[1] !== o || t[2] !== s || t[3] !== l
    ? ((u = {
        backgroundColor: S,
        borderColor: x,
        height: a,
        left: o,
        top: s,
        width: l,
      }),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s),
      (t[3] = l),
      (t[4] = u))
    : (u = t[4]);
  let d;
  return (
    t[5] !== u || t[6] !== i
      ? ((d = (0, g.jsx)(`div`, {
          className: `pointer-events-none absolute box-border border-2 border-solid shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)]`,
          "data-testid": i,
          style: u,
        })),
        (t[5] = u),
        (t[6] = i),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
function B(e) {
  let t = (0, c.c)(23),
    {
      ariaLabel: n,
      draft: r,
      draftTestId: a,
      isSelected: o,
      label: s,
      onClick: l,
      onPreviewHide: u,
      onPreviewShow: d,
      pageSize: f,
      point: p,
      testId: m,
    } = e,
    h = r === void 0 ? !1 : r,
    v = o === void 0 ? !1 : o,
    y;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, g.jsx)(_, { className: `absolute inset-0 size-full` })),
      (t[0] = y))
    : (y = t[0]);
  let b;
  t[1] === s
    ? (b = t[2])
    : ((b = (0, g.jsxs)(g.Fragment, {
        children: [
          y,
          (0, g.jsx)(`span`, {
            className: `pointer-events-none relative z-10 -translate-x-px -translate-y-px font-sans text-[10px] leading-none font-bold text-white`,
            style: L,
            children: s,
          }),
        ],
      })),
      (t[1] = s),
      (t[2] = b));
  let S = b,
    C = `${(p.x / f.width) * 100}%`,
    w = `${(p.y / f.height) * 100}%`,
    T;
  t[3] !== C || t[4] !== w
    ? ((T = { color: x, height: 30, left: C, top: w, width: 30 }),
      (t[3] = C),
      (t[4] = w),
      (t[5] = T))
    : (T = t[5]);
  let E = T;
  if (!h && d != null && u != null) {
    let e = v && `scale-105`,
      r;
    t[6] === e
      ? (r = t[7])
      : ((r = i(
          `absolute flex -translate-x-1/2 -translate-y-1/2 cursor-interaction items-center justify-center border-0 bg-transparent p-0 focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
          `font-sans`,
          e,
        )),
        (t[6] = e),
        (t[7] = r));
    let a;
    t[8] === l
      ? (a = t[9])
      : ((a = (e) => {
          (e.preventDefault(), e.stopPropagation(), l?.());
        }),
        (t[8] = l),
        (t[9] = a));
    let o;
    return (
      t[10] !== n ||
      t[11] !== S ||
      t[12] !== u ||
      t[13] !== d ||
      t[14] !== E ||
      t[15] !== a ||
      t[16] !== r ||
      t[17] !== m
        ? ((o = (0, g.jsx)(`button`, {
            type: `button`,
            "aria-label": n,
            className: r,
            "data-testid": m,
            style: E,
            onPointerDown: V,
            onMouseEnter: d,
            onMouseLeave: u,
            onFocus: d,
            onBlur: u,
            onClick: a,
            children: S,
          })),
          (t[10] = n),
          (t[11] = S),
          (t[12] = u),
          (t[13] = d),
          (t[14] = E),
          (t[15] = a),
          (t[16] = r),
          (t[17] = m),
          (t[18] = o))
        : (o = t[18]),
      o
    );
  }
  let D = h ? a : void 0,
    O;
  return (
    t[19] !== S || t[20] !== E || t[21] !== D
      ? ((O = (0, g.jsx)(`div`, {
          className: `pointer-events-none absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center border-0 bg-transparent p-0 font-sans`,
          "data-testid": D,
          style: E,
          children: S,
        })),
        (t[19] = S),
        (t[20] = E),
        (t[21] = D),
        (t[22] = O))
      : (O = t[22]),
    O
  );
}
function V(e) {
  return e.stopPropagation();
}
function H(e) {
  let t = (0, c.c)(14),
    { body: n, layer: r, pageSize: i, point: a, testId: o } = e,
    s;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((s = U({ layer: r, pageSize: i, point: a })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = s))
    : (s = t[3]);
  let l = s;
  if (l == null) return null;
  let u;
  t[4] === l
    ? (u = t[5])
    : ((u = {
        ...l,
        backgroundColor: P,
        borderColor: I,
        color: F,
        height: j,
        width: `fit-content`,
        backdropFilter: `blur(8px)`,
        WebkitBackdropFilter: `blur(8px)`,
      }),
      (t[4] = l),
      (t[5] = u));
  let d;
  t[6] === n ? (d = t[7]) : ((d = W(n)), (t[6] = n), (t[7] = d));
  let f;
  t[8] === d
    ? (f = t[9])
    : ((f = (0, g.jsx)(`div`, {
        className: `min-w-0 overflow-hidden leading-5 text-ellipsis whitespace-nowrap text-inherit`,
        children: d,
      })),
      (t[8] = d),
      (t[9] = f));
  let p;
  return (
    t[10] !== u || t[11] !== f || t[12] !== o
      ? ((p = (0, g.jsx)(`div`, {
          className: `pointer-events-none absolute z-[5] flex items-center overflow-hidden rounded-lg border px-2 py-1 font-sans text-sm shadow-lg select-none`,
          "data-testid": o,
          style: u,
          children: f,
        })),
        (t[10] = u),
        (t[11] = f),
        (t[12] = o),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function U({ layer: e, pageSize: t, point: n }) {
  if (e == null || t.width <= 0 || t.height <= 0) return null;
  let { height: r, width: i } = D(e),
    a = (n.x / t.width) * i,
    o = (n.y / t.height) * r,
    s = Math.min(M, Math.max(1, i - 32)),
    c = N / 2 + 12,
    l = G(a, 16 + s / 2, Math.max(16 + s / 2, i - 16 - s / 2)),
    u = o - c - j;
  if (u >= 16)
    return { left: l, maxWidth: s, top: u, transform: `translateX(-50%)` };
  let d = o + c;
  return d + j <= r - 16
    ? { left: l, maxWidth: s, top: d, transform: `translateX(-50%)` }
    : {
        left: l,
        maxWidth: s,
        top: G(u, 16, Math.max(16, r - j - 16)),
        transform: `translateX(-50%)`,
      };
}
function W(e) {
  return s(e).map((e, t) => {
    switch (e.type) {
      case `text`:
        return e.text;
      case `mention`:
        return (0, g.jsx)(
          `strong`,
          { className: `font-semibold`, children: e.label },
          `paged-annotation-comment-preview-mention-${t}`,
        );
    }
  });
}
function G(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
export {
  C as a,
  O as c,
  z as i,
  E as l,
  H as n,
  w as o,
  B as r,
  T as s,
  R as t,
  f as u,
};
//# sourceMappingURL=paged-annotation-comment-ui.js.map
