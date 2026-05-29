import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  Hs as t,
  kt as n,
  zs as r,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as i } from "./jsx-runtime.js";
import { Q as a, S as o, at as s, ot as c } from "./setting-storage.js";
import { t as l } from "./route-scope.js";
import { r as u } from "./reduced-motion-preference-DE4zP-oH.js";
import {
  Et as d,
  G as f,
  K as p,
  Q as m,
  St as h,
  Y as g,
  _t as _,
  at as ee,
  bt as te,
  c as v,
  d as y,
  et as ne,
  h as b,
  it as x,
  kt as S,
  l as C,
  n as w,
  nt as re,
  ot as T,
  q as E,
  t as D,
  tt as ie,
  u as ae,
} from "./single-value.js";
var oe = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function se(e, t) {
  return _(e) ? e[oe(0, e.length, t)] : e;
}
var ce = class {
  constructor(e) {
    ((this.stop = () => this.runAll(`stop`)),
      (this.animations = e.filter(Boolean)));
  }
  get finished() {
    return Promise.all(this.animations.map((e) => e.finished));
  }
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, t) {
    for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
  }
  attachTimeline(e) {
    let t = this.animations.map((t) => t.attachTimeline(e));
    return () => {
      t.forEach((e, t) => {
        (e && e(), this.animations[t].stop());
      });
    };
  }
  get time() {
    return this.getAll(`time`);
  }
  set time(e) {
    this.setAll(`time`, e);
  }
  get speed() {
    return this.getAll(`speed`);
  }
  set speed(e) {
    this.setAll(`speed`, e);
  }
  get state() {
    return this.getAll(`state`);
  }
  get startTime() {
    return this.getAll(`startTime`);
  }
  get duration() {
    return le(this.animations, `duration`);
  }
  get iterationDuration() {
    return le(this.animations, `iterationDuration`);
  }
  runAll(e) {
    this.animations.forEach((t) => t[e]());
  }
  play() {
    this.runAll(`play`);
  }
  pause() {
    this.runAll(`pause`);
  }
  cancel() {
    this.runAll(`cancel`);
  }
  complete() {
    this.runAll(`complete`);
  }
};
function le(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    i !== null && i > n && (n = i);
  }
  return n;
}
var ue = class extends ce {
  then(e, t) {
    return this.finished.finally(e).then(() => {});
  }
};
function O(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function de(e, t, n, r) {
  return typeof e == `string` && O(t)
    ? m(e, n, r)
    : e instanceof NodeList
      ? Array.from(e)
      : Array.isArray(e)
        ? e
        : [e];
}
function fe(e, t, n) {
  return e * (t + 1);
}
function pe(e, t, n, r) {
  return typeof t == `number`
    ? t
    : t.startsWith(`-`) || t.startsWith(`+`)
      ? Math.max(0, e + parseFloat(t))
      : t === `<`
        ? n
        : t.startsWith(`<`)
          ? Math.max(0, n + parseFloat(t.slice(1)))
          : (r.get(t) ?? e);
}
function me(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (S(e, i), r--);
  }
}
function he(e, t, n, r, i, a) {
  me(e, i, a);
  for (let o = 0; o < t.length; o++)
    e.push({ value: t[o], at: T(i, a, r[o]), easing: se(n, o) });
}
function ge(e, t) {
  for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
function _e(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
        ? -1
        : 0
    : e.at - t.at;
}
var ve = `easeInOut`,
  ye = 20;
function be(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let a = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    c = {},
    l = new Map(),
    u = 0,
    p = 0,
    m = 0;
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    if (typeof o == `string`) {
      l.set(o, p);
      continue;
    } else if (!Array.isArray(o)) {
      l.set(o.name, pe(p, o.at, u, l));
      continue;
    }
    let [h, g, _ = {}] = o;
    _.at !== void 0 && (p = pe(p, _.at, u, l));
    let v = 0,
      y = (e, n, r, o = 0, s = 0) => {
        let c = xe(e),
          {
            delay: l = 0,
            times: u = ie(c),
            type: f = `keyframes`,
            repeat: h,
            repeatType: g,
            repeatDelay: _ = 0,
            ...y
          } = n,
          { ease: b = t.ease || `easeOut`, duration: x } = n,
          S = typeof l == `function` ? l(o, s) : l,
          C = c.length,
          w = ne(f) ? f : i?.[f || `keyframes`];
        if (C <= 2 && w) {
          let e = 100;
          if (C === 2 && we(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let t = { ...y };
          x !== void 0 && (t.duration = te(x));
          let n = ee(t, e, w);
          ((b = n.ease), (x = n.duration));
        }
        x ??= a;
        let T = p + S;
        u.length === 1 && u[0] === 0 && (u[1] = 1);
        let E = u.length - c.length;
        if ((E > 0 && re(u, E), c.length === 1 && c.unshift(null), h)) {
          (d(
            h < ye,
            `Repeat count too high, must be less than 20`,
            `repeat-count-high`,
          ),
            (x = fe(x, h)));
          let e = [...c],
            t = [...u];
          b = Array.isArray(b) ? [...b] : [b];
          let n = [...b];
          for (let r = 0; r < h; r++) {
            c.push(...e);
            for (let i = 0; i < e.length; i++)
              (u.push(t[i] + (r + 1)),
                b.push(i === 0 ? `linear` : se(n, i - 1)));
          }
          ge(u, h);
        }
        let D = T + x;
        (he(r, c, b, u, T, D), (v = Math.max(S + x, v)), (m = Math.max(D, m)));
      };
    if (f(h)) {
      let e = k(h, s);
      y(g, _, A(`default`, e));
    } else {
      let e = de(h, g, r, c),
        t = e.length;
      for (let n = 0; n < t; n++) {
        ((g = g), (_ = _));
        let r = e[n],
          i = k(r, s);
        for (let e in g) y(g[e], Se(_, e), A(e, i), n, t);
      }
    }
    ((u = p), (p += v));
  }
  return (
    s.forEach((e, r) => {
      for (let i in e) {
        let a = e[i];
        a.sort(_e);
        let s = [],
          c = [],
          l = [];
        for (let e = 0; e < a.length; e++) {
          let { at: t, value: n, easing: r } = a[e];
          (s.push(n), c.push(h(0, m, t)), l.push(r || `easeOut`));
        }
        (c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(ve)),
          c[c.length - 1] !== 1 && (c.push(1), s.push(null)),
          o.has(r) || o.set(r, { keyframes: {}, transition: {} }));
        let u = o.get(r);
        ((u.keyframes[i] = s),
          (u.transition[i] = { ...t, duration: m, ease: l, times: c, ...n }));
      }
    }),
    o
  );
}
function k(e, t) {
  return (!t.has(e) && t.set(e, {}), t.get(e));
}
function A(e, t) {
  return (t[e] || (t[e] = []), t[e]);
}
function xe(e) {
  return Array.isArray(e) ? e : [e];
}
function Se(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
var Ce = (e) => typeof e == `number`,
  we = (e) => e.every(Ce);
function Te(e, t) {
  return e in t;
}
var Ee = class extends ae {
  constructor() {
    (super(...arguments), (this.type = `object`));
  }
  readValueFromInstance(e, t) {
    if (Te(t, e)) {
      let n = e[t];
      if (typeof n == `string` || typeof n == `number`) return n;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(e, t) {
    delete t.output[e];
  }
  measureInstanceViewportBox() {
    return b();
  }
  build(e, t) {
    Object.assign(e.output, t);
  }
  renderInstance(e, { output: t }) {
    Object.assign(e, t);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
function De(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = E(e) && !p(e) ? new v(t) : new C(t);
  (n.mount(e), y.set(e, n));
}
function Oe(e) {
  let t = new Ee({
    presenceContext: null,
    props: {},
    visualState: { renderState: { output: {} }, latestValues: {} },
  });
  (t.mount(e), y.set(e, t));
}
function ke(e, t) {
  return f(e) || typeof e == `number` || (typeof e == `string` && !O(t));
}
function j(e, t, n, r) {
  let i = [];
  if (ke(e, t)) i.push(D(e, (O(t) && t.default) || t, n && (n.default || n)));
  else {
    let a = de(e, t, r),
      o = a.length;
    d(!!o, `No valid elements provided.`, `no-valid-elements`);
    for (let e = 0; e < o; e++) {
      let r = a[e];
      d(
        r !== null,
        `You're trying to perform an animation on null. Ensure that selectors are correctly finding elements and refs are correctly hydrated.`,
        `animate-null`,
      );
      let s = r instanceof Element ? De : Oe;
      y.has(r) || s(r);
      let c = y.get(r),
        l = { ...n };
      (`delay` in l &&
        typeof l.delay == `function` &&
        (l.delay = l.delay(e, o)),
        i.push(...w(c, { ...t, transition: l }, {})));
    }
  }
  return i;
}
function Ae(e, t, n) {
  let r = [];
  return (
    be(e, t, n, { spring: x }).forEach(({ keyframes: e, transition: t }, n) => {
      r.push(...j(n, e, t));
    }),
    r
  );
}
function je(e) {
  return Array.isArray(e) && e.some(Array.isArray);
}
function Me(e) {
  function t(t, n, r) {
    let i = [],
      a;
    if (je(t)) i = Ae(t, n, e);
    else {
      let { onComplete: o, ...s } = r || {};
      (typeof o == `function` && (a = o), (i = j(t, n, s, e)));
    }
    let o = new ue(i);
    return (
      a && o.finished.then(a),
      e &&
        (e.animations.push(o),
        o.finished.then(() => {
          S(e.animations, o);
        })),
      o
    );
  }
  return t;
}
var M = Me(),
  Ne = `app-shell:right-panel-width:v2`,
  Pe = 352;
function N(e) {
  return `${Ne}:${e}`;
}
function P(e, t, n = `regular`) {
  let r = Number.isFinite(e) ? e : 600,
    i = L(t, n);
  return Math.max(Math.min(320, i), Math.min(r, i));
}
function Fe({
  defaultWidth: e,
  mainContentWidth: t,
  storageKey: n,
  widthMode: i,
}) {
  let a = r(n, null);
  return a == null || !Number.isFinite(a)
    ? F(e, t, i)
    : a <= 1
      ? R(a)
      : F(a, t, i);
}
function Ie({ mainContentWidth: e, storageKey: n, width: r, widthMode: i }) {
  t(n, F(r, e, i));
}
function F(e, t, n = `regular`) {
  let r = Le(t, n),
    i = r.maximum - r.minimum;
  return i === 0 ? 0 : R((P(e, t, n) - r.minimum) / i);
}
function I(e, t, n = `regular`) {
  let r = Le(t, n);
  return P(r.minimum + R(e) * (r.maximum - r.minimum), t, n);
}
function L(e, t) {
  return t === `full` ? Math.max(320, e) : Math.max(320, e - Pe);
}
function Le(e, t) {
  let n = L(e, t);
  return { maximum: n, minimum: Math.min(320, n) };
}
function R(e) {
  return Math.max(0, Math.min(1, e));
}
var Re = e(i(), 1),
  z = { type: `spring`, duration: 0.5, bounce: 0.1 },
  ze = 0.5;
function Be(e) {
  return e * ze;
}
function Ve({
  isRightPanelOpen: e,
  mainContentWidth: t,
  rightPanelWidthMode: n,
  rightPanelWidthRatio: r,
}) {
  return e ? Math.max(0, t - I(r, t, n)) : t;
}
var He = (0, Re.createContext)(null);
function Ue() {
  let e = (0, Re.useContext)(He);
  if (e == null) throw Error(`AppShellLayoutMotionContext is missing`);
  return e;
}
var We = `main`,
  Ge = s(l, null),
  Ke = s(l, null),
  qe = s(l, null),
  Je = s(l, null),
  Ye = s(l, null),
  B = s(l, !1),
  Xe = s(l, null),
  Ze = s(l, null),
  Qe = a(
    l,
    ({ get: e, scope: t }) =>
      e(Ze) ?? { defaultWidth: 600, storageKey: N(t.value.routeTemplate) },
  ),
  $e = s(l, null),
  et = s(l, null),
  tt = s(l, null),
  nt = s(l, null),
  rt = s(l, null),
  it = s(l, `default`),
  V = s(l, `main`),
  at = s(l, We),
  H = s(l, !1),
  U = s(l, null);
function ot(e, t) {
  e.get(V) !== t && e.set(V, t);
}
function st(e, t) {
  e.get(H) !== t && e.set(H, t);
}
function ct(e, t) {
  e.get(U) !== t && e.set(U, t);
}
function W() {
  let e = s(l, []),
    t = c(l, (e) => null);
  return {
    entries$: a(l, ({ get: n }) =>
      n(e)
        .map((e) => ({ action: n(t, e), actionId: e }))
        .filter((e) => e.action != null)
        .sort((e, t) => e.action.order - t.action.order)
        .map(({ action: e, actionId: t }) => ({
          align: e.align,
          actionId: t,
          node: e.node,
          order: e.order,
        })),
    ),
    byId: t,
    ids$: e,
  };
}
function lt() {
  let e = s(l, []),
    t = c(l, (e) => null);
  return {
    byId: t,
    entries$: a(l, ({ get: n }) =>
      n(e).flatMap((e) => {
        let r = n(t, e);
        return r == null ? [] : [r];
      }),
    ),
    ids$: e,
  };
}
var ut = W(),
  dt = W(),
  ft = W(),
  pt = lt(),
  mt = ut.entries$,
  ht = dt.entries$,
  gt = ft.entries$,
  _t = pt.entries$,
  vt = { center: ut, left: dt, right: ft },
  yt = 520,
  bt = `sidebar-width`;
function xt() {
  return G(r(bt, 300));
}
function St(e) {
  t(bt, G(e));
}
function G(e) {
  return Number.isFinite(e) ? Math.min(Math.max(e, 240), yt) : 300;
}
var Ct = `app-shell-bottom-panel-launcher-visible`,
  wt = 100,
  K = s(o, !0),
  q = s(o, !1),
  Tt = s(o, !1, {
    onMount: (e, t) => {
      let n = null,
        r = () => {
          n != null && (window.clearTimeout(n), (n = null));
        },
        i = t.watch(({ get: t }) => {
          if (t(K) || !t(q)) {
            (r(), e(!1));
            return;
          }
          n ??= window.setTimeout(() => {
            ((n = null), e(!0));
          }, wt);
        });
      return () => {
        (r(), i());
      };
    },
  }),
  Et = s(o, () => new g(1)),
  Dt = s(o, xt),
  Ot = n(Ct, !0),
  kt = s(l, !1),
  At = s(l, () => new g(0)),
  jt = s(l, !1),
  J = s(l, () => new g(0)),
  Y = s(l, !1),
  X = s(l, !1),
  Mt = s(o, !0),
  Nt = s(o, !1),
  Z = s(o, () => new g(0)),
  Pt = s(o, 250);
function Ft(e, t, n = {}) {
  (e.set(K, t), t && e.set(q, !1));
  let r = e.get(Et);
  if ((r.stop(), n.animate === !1)) {
    r.set(t ? 1 : 0);
    return;
  }
  $(r, t, e.get(u));
}
function It(e, t) {
  e.set(q, t);
}
function Lt(e, t) {
  e.set(Ot, t);
}
function Rt() {
  r(`app-shell-bottom-panel-launcher-visible`, void 0) ?? t(Ct, !1);
}
function zt(e, t) {
  (e.set(kt, t), $(e.get(At), t, e.get(u)));
}
function Q(e, t, n = {}) {
  e.set(jt, t);
  let r = e.get(J);
  if ((r.stop(), $(r, t, e.get(u)), t)) {
    e.get(X) && (e.set(B, !0), e.set(X, !1));
    return;
  }
  (e.set(Y, !1),
    e.set(X, n.restoreFullWidthOnNextOpen === !0 && e.get(B)),
    e.set(B, !1));
}
function Bt(e, t) {
  if (t) {
    (e.set(Y, !0), Q(e, !0));
    return;
  }
  Q(e, !1);
}
function Vt(e, t, n = {}) {
  (e.set(Nt, t), Ht(e.get(Z), t, e.get(u), n));
}
function Ht(e, t, n, r) {
  if ((e.stop(), r.animate === !1 || n)) {
    e.set(t ? 1 : 0);
    return;
  }
  M(e, t ? 1 : 0, z);
}
function $(e, t, n) {
  let r = t ? 1 : 0;
  if (n) {
    e.set(r);
    return;
  }
  M(e, r, z);
}
export {
  st as $,
  $e as A,
  gt as B,
  xt as C,
  V as D,
  at as E,
  vt as F,
  Ke as G,
  it as H,
  mt as I,
  Ye as J,
  Je as K,
  pt as L,
  tt as M,
  nt as N,
  U as O,
  rt as P,
  ct as Q,
  _t as R,
  Mt as S,
  St as T,
  Ge as U,
  B as V,
  Xe as W,
  Ze as X,
  Qe as Y,
  ot as Z,
  Q as _,
  jt as a,
  N as at,
  It as b,
  K as c,
  F as ct,
  Z as d,
  z as et,
  Nt as f,
  zt as g,
  Lt as h,
  J as i,
  Ue as it,
  et as j,
  H as k,
  Dt as l,
  Ie as lt,
  Rt as m,
  Ot as n,
  Ve as nt,
  Y as o,
  Fe as ot,
  Pt as p,
  qe as q,
  kt as r,
  Be as rt,
  Et as s,
  I as st,
  At as t,
  He as tt,
  Tt as u,
  M as ut,
  Bt as v,
  G as w,
  Vt as x,
  Ft as y,
  ht as z,
};
//# sourceMappingURL=app-shell-state.js.map
