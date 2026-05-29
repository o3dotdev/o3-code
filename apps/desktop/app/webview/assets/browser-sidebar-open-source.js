var e = new Map(),
  t = new Map(),
  n = new Map(),
  r = new Map(),
  i = new Map(),
  a = new Map(),
  o = new Map(),
  s = new Map();
function c(t, n) {
  let r = I(t, n),
    i = e.get(r);
  return i == null ? null : (e.delete(r), i);
}
function l(t, n) {
  return e.get(I(t, n)) ?? null;
}
function u(e, n) {
  let r = I(e, n),
    i = t.get(r);
  return i == null ? null : (t.delete(r), i);
}
function d(e, n) {
  return t.get(I(e, n)) ?? null;
}
function f(t, n) {
  L(e, t, n);
}
function p(e, n) {
  L(t, e, n);
}
function m(t, n, r) {
  e.set(I(t, n), r);
}
function h(e, n, r) {
  t.set(I(e, n), r);
}
function g(e, t) {
  return n.get(I(e, t)) ?? null;
}
function _(e, t) {
  L(n, e, t);
}
function v(e, t, r) {
  n.set(I(e, t), r);
}
function y(e, t) {
  return r.get(I(e, t)) ?? null;
}
function b(e, t) {
  return i.get(I(e, t)) ?? null;
}
function x(e, t) {
  L(r, e, t);
}
function S(e, t) {
  L(i, e, t);
}
function C(e, t, n) {
  r.set(I(e, t), n);
}
function w(e, t, n) {
  i.set(I(e, t), n);
}
function T(
  e,
  t,
  {
    adoptionLease: n,
    adoptedWebContentsId: r,
    initialUrl: i,
    initiator: a,
    source: o,
  },
) {
  if (
    (o != null && m(e, t, o),
    a != null && h(e, t, a),
    i == null ? _(e, t) : v(e, t, i),
    n != null && r != null)
  ) {
    (C(e, t, n), w(e, t, r));
    return;
  }
  (x(e, t), S(e, t));
}
function E(e) {
  let t = a.get(e) ?? [];
  return (a.delete(e), t);
}
function D(e) {
  a.delete(e);
}
function O(e) {
  let t = o.get(e) ?? new Set();
  return (o.delete(e), [...t]);
}
function k(e, t) {
  (M(e, t), j(e, t));
  let n = o.get(e);
  if (n == null) {
    o.set(e, new Set([t]));
    return;
  }
  n.add(t);
}
function A(e, t) {
  if ((M(e, t), t == null)) {
    (D(e), o.delete(e));
    return;
  }
  (o.get(e)?.delete(t), j(e, t));
}
function j(e, t) {
  let n = a.get(e);
  if (n == null) return;
  let r = n.filter((e) => e.browserTabId !== t);
  if (r.length === 0) {
    a.delete(e);
    return;
  }
  a.set(e, r);
}
function M(e, t) {
  (p(e, t), f(e, t), _(e, t), x(e, t), S(e, t));
}
function N(e, t) {
  o.get(e)?.delete(t.browserTabId);
  let n = a.get(e);
  if (n == null) {
    a.set(e, [t]);
    return;
  }
  let r = n.findIndex((e) => e.browserTabId === t.browserTabId);
  if (r === -1) {
    n.push(t);
    return;
  }
  n[r] = t;
}
function P(e, t) {
  let n = s.get(e);
  if (n == null) {
    s.set(e, new Set([t]));
    return;
  }
  n.add(t);
}
function F(e) {
  let t = s.get(e);
  return t == null ? [] : (s.delete(e), [...t]);
}
function I(e, t) {
  return `${e}\0${t}`;
}
function L(e, t, n) {
  if (n != null) {
    e.delete(I(t, n));
    return;
  }
  let r = `${t}\0`;
  for (let t of e.keys()) t.startsWith(r) && e.delete(t);
}
export {
  k as _,
  F as a,
  O as c,
  d,
  l as f,
  T as g,
  P as h,
  x as i,
  E as l,
  y as m,
  A as n,
  u as o,
  g as p,
  _ as r,
  c as s,
  S as t,
  b as u,
  N as v,
};
//# sourceMappingURL=browser-sidebar-open-source.js.map
