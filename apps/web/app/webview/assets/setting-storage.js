import { s as e, t } from "./chunk-Bj-mKKzh.js";
import { Rn as n, Ut as r } from "./src-C.js";
import { n as i, t as a } from "./jsx-runtime.js";
import { a as o, o as s, r as c, t as l } from "./tslib.es6.js";
var u = t((e) => {
    var t = i().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    e.c = function (e) {
      return t.H.useMemoCache(e);
    };
  }),
  d = t((e, t) => {
    t.exports = u();
  });
function f(e) {
  return `init` in e;
}
function p(e) {
  return !!e.write;
}
function m(e) {
  return `v` in e || `e` in e;
}
function h(e) {
  if (`e` in e) throw e.e;
  return e.v;
}
function g(e) {
  return typeof e?.then == `function`;
}
function _(e, t, n) {
  if (!n.p.has(e)) {
    n.p.add(e);
    let r = () => n.p.delete(e);
    t.then(r, r);
  }
}
function v(e, t, n) {
  let r = new Set();
  for (let t of n.get(e)?.t || []) r.add(t);
  for (let e of t.p) r.add(e);
  return r;
}
var y = () => {
    let e = new Set(),
      t = () => e.forEach((e) => e());
    return ((t.add = (t) => (e.add(t), () => e.delete(t))), t);
  },
  b = () => {
    let e = {},
      t = new WeakMap(),
      n = (n) => {
        var r, i;
        ((r = t.get(e)) == null || r.forEach((e) => e(n)),
          (i = t.get(n)) == null || i.forEach((e) => e()));
      };
    return (
      (n.add = (n, r) => {
        let i = n || e,
          a = t.get(i);
        return (
          a || ((a = new Set()), t.set(i, a)),
          a.add(r),
          () => {
            (a.delete(r), a.size || t.delete(i));
          }
        );
      }),
      n
    );
  };
function x(e) {
  return (
    (e.i ||= b()),
    (e.r ||= b()),
    (e.c ||= b()),
    (e.m ||= b()),
    (e.u ||= b()),
    (e.f ||= y()),
    e
  );
}
var S = (e, t, ...n) => t.read(...n),
  C = (e, t, ...n) => t.write(...n),
  w = (e, t) => t.INTERNAL_onInit?.call(t, e),
  T = (e, t, n) => t.onMount?.call(t, n),
  E = (e, t) => {
    var n;
    let r = O(e),
      i = r[0],
      a = r[6],
      o = r[9],
      s = i.get(t);
    return (
      s ||
        ((s = { d: new Map(), p: new Set(), n: 0 }),
        i.set(t, s),
        (n = a.i) == null || n.call(a, t),
        o?.(e, t)),
      s
    );
  },
  D = (e) => {
    let t = O(e),
      n = t[1],
      r = t[3],
      i = t[4],
      a = t[5],
      o = t[6],
      s = t[13],
      c = [],
      l = (e) => {
        try {
          e();
        } catch (e) {
          c.push(e);
        }
      };
    do {
      o.f && l(o.f);
      let t = new Set(),
        c = t.add.bind(t);
      (r.forEach((e) => n.get(e)?.l.forEach(c)),
        r.clear(),
        a.forEach(c),
        a.clear(),
        i.forEach(c),
        i.clear(),
        t.forEach(l),
        r.size && s(e));
    } while (r.size || a.size || i.size);
    if (c.length) throw AggregateError(c);
  },
  ee = (e) => {
    let t = O(e),
      n = t[1],
      r = t[2],
      i = t[3],
      a = t[11],
      o = t[14],
      s = t[17],
      c = [],
      l = new WeakSet(),
      u = new WeakSet(),
      d = Array.from(i);
    for (; d.length; ) {
      let t = d[d.length - 1],
        i = a(e, t);
      if (u.has(t)) {
        d.pop();
        continue;
      }
      if (l.has(t)) {
        (r.get(t) === i.n && c.push([t, i]), u.add(t), d.pop());
        continue;
      }
      l.add(t);
      for (let e of v(t, i, n)) l.has(e) || d.push(e);
    }
    for (let t = c.length - 1; t >= 0; --t) {
      let [n, a] = c[t],
        l = !1;
      for (let e of a.d.keys())
        if (e !== n && i.has(e)) {
          l = !0;
          break;
        }
      (l && (r.set(n, a.n), o(e, n), s(e, n)), r.delete(n));
    }
  },
  te = (e, t) => {
    var n, r;
    let i = O(e),
      a = i[1],
      o = i[2],
      s = i[3],
      c = i[6],
      l = i[7],
      u = i[11],
      d = i[12],
      v = i[13],
      y = i[14],
      b = i[16],
      x = i[17],
      S = i[20],
      C = i[26],
      w = i[28],
      T = u(e, t),
      E = w[0];
    if (m(T)) {
      if ((a.has(t) && o.get(t) !== T.n) || T.m === E) return ((T.m = E), T);
      let n = !1;
      for (let [t, r] of T.d)
        if (y(e, t).n !== r) {
          n = !0;
          break;
        }
      if (!n) return ((T.m = E), T);
    }
    let D = !0,
      ee = new Set(T.d.keys()),
      te = new Map(),
      ne = () => {
        for (let e of ee) te.has(e) || T.d.delete(e);
      },
      re = () => {
        if (a.has(t)) {
          let n = !s.size;
          (x(e, t), n && (v(e), d(e)));
        }
      },
      ie = (n) => {
        var r;
        if (n === t) {
          let t = u(e, n);
          if (!m(t))
            if (f(n)) S(e, n, n.init);
            else throw Error(`no atom init`);
          return h(t);
        }
        let i = y(e, n);
        try {
          return h(i);
        } finally {
          (te.set(n, i.n),
            T.d.set(n, i.n),
            g(T.v) && _(t, T.v, i),
            a.has(t) && ((r = a.get(n)) == null || r.t.add(t)),
            D || re());
        }
      },
      ae,
      oe,
      se = {
        get signal() {
          return ((ae ||= new AbortController()), ae.signal);
        },
        get setSelf() {
          return (
            !oe &&
              p(t) &&
              (oe = (...n) => {
                if (!D)
                  try {
                    return b(e, t, ...n);
                  } finally {
                    (v(e), d(e));
                  }
              }),
            oe
          );
        },
      },
      ce = T.n,
      le = o.get(t) === ce;
    try {
      let r = l(e, t, ie, se);
      if ((S(e, t, r), g(r))) {
        C(e, r, () => ae?.abort());
        let t = () => {
          (ne(), re());
        };
        r.then(t, t);
      } else ne();
      return ((n = c.r) == null || n.call(c, t), (T.m = E), T);
    } catch (e) {
      return (delete T.v, (T.e = e), ++T.n, (T.m = E), T);
    } finally {
      ((D = !1),
        T.n !== ce &&
          le &&
          (o.set(t, T.n), s.add(t), (r = c.c) == null || r.call(c, t)));
    }
  },
  ne = (e, t) => {
    let n = O(e),
      r = n[1],
      i = n[2],
      a = n[11],
      o = [t];
    for (; o.length; ) {
      let t = o.pop(),
        n = a(e, t);
      for (let s of v(t, n, r)) {
        let t = a(e, s);
        i.get(s) !== t.n && (i.set(s, t.n), o.push(s));
      }
    }
  },
  re = (e, t, ...n) => {
    let r = O(e),
      i = r[3],
      a = r[6],
      o = r[8],
      s = r[11],
      c = r[12],
      l = r[13],
      u = r[14],
      d = r[15],
      p = r[16],
      m = r[17],
      g = r[20],
      _ = r[28],
      v = !0,
      y = (t) => h(u(e, t)),
      b = (n, ...r) => {
        var o;
        let u = s(e, n);
        try {
          if (n === t) {
            if (!f(n)) throw Error(`atom not writable`);
            let t = u.n,
              s = r[0];
            (g(e, n, s),
              m(e, n),
              t !== u.n &&
                (++_[0], i.add(n), d(e, n), (o = a.c) == null || o.call(a, n)));
            return;
          } else return p(e, n, ...r);
        } finally {
          v || (l(e), c(e));
        }
      };
    try {
      return o(e, t, y, b, ...n);
    } finally {
      v = !1;
    }
  },
  ie = (e, t) => {
    var n;
    let r = O(e),
      i = r[1],
      a = r[3],
      o = r[6],
      s = r[11],
      c = r[15],
      l = r[18],
      u = r[19],
      d = s(e, t),
      f = i.get(t);
    if (f) {
      for (let [r, i] of d.d)
        if (!f.d.has(r)) {
          let u = s(e, r);
          (l(e, r).t.add(t),
            f.d.add(r),
            i !== u.n &&
              (a.add(r), c(e, r), (n = o.c) == null || n.call(o, r)));
        }
      for (let n of f.d) d.d.has(n) || (f.d.delete(n), u(e, n)?.t.delete(t));
    }
  },
  ae = (e, t) => {
    var n;
    let r = O(e),
      i = r[1],
      a = r[4],
      o = r[6],
      s = r[10],
      c = r[11],
      l = r[12],
      u = r[13],
      d = r[14],
      f = r[16],
      m = r[18],
      h = c(e, t),
      g = i.get(t);
    if (!g) {
      d(e, t);
      for (let n of h.d.keys()) m(e, n).t.add(t);
      ((g = { l: new Set(), d: new Set(h.d.keys()), t: new Set() }),
        i.set(t, g),
        p(t) &&
          a.add(() => {
            let n = !0,
              r = (...r) => {
                try {
                  return f(e, t, ...r);
                } finally {
                  n || (u(e), l(e));
                }
              };
            try {
              let i = s(e, t, r);
              i &&
                (g.u = () => {
                  n = !0;
                  try {
                    i();
                  } finally {
                    n = !1;
                  }
                });
            } finally {
              n = !1;
            }
          }),
        (n = o.m) == null || n.call(o, t));
    }
    return g;
  },
  oe = (e, t) => {
    var n;
    let r = O(e),
      i = r[1],
      a = r[5],
      o = r[6],
      s = r[11],
      c = r[19],
      l = s(e, t),
      u = i.get(t);
    if (!u || u.l.size) return u;
    let d = !1;
    for (let e of u.t)
      if (i.get(e)?.d.has(t)) {
        d = !0;
        break;
      }
    if (!d) {
      (u.u && a.add(u.u), (u = void 0), i.delete(t));
      for (let n of l.d.keys()) c(e, n)?.t.delete(t);
      (n = o.u) == null || n.call(o, t);
      return;
    }
    return u;
  },
  se = (e, t, n) => {
    let r = O(e),
      i = r[11],
      a = r[27],
      o = i(e, t),
      s = `v` in o,
      c = o.v;
    if (g(n)) for (let r of o.d.keys()) _(t, n, i(e, r));
    ((o.v = n),
      delete o.e,
      (!s || !Object.is(c, o.v)) && (++o.n, g(c) && a(e, c)));
  },
  ce = (e, t) => {
    let n = O(e)[14];
    return h(n(e, t));
  },
  le = (e, t, ...n) => {
    let r = O(e),
      i = r[3],
      a = r[12],
      o = r[13],
      s = r[16],
      c = i.size;
    try {
      return s(e, t, ...n);
    } finally {
      i.size !== c && (o(e), a(e));
    }
  },
  ue = (e, t, n) => {
    let r = O(e),
      i = r[12],
      a = r[18],
      o = r[19],
      s = a(e, t).l;
    return (
      s.add(n),
      i(e),
      () => {
        (s.delete(n), o(e, t), i(e));
      }
    );
  },
  de = (e, t, n) => {
    let r = O(e)[25],
      i = r.get(t);
    if (!i) {
      ((i = new Set()), r.set(t, i));
      let e = () => r.delete(t);
      t.then(e, e);
    }
    i.add(n);
  },
  fe = (e, t) => {
    O(e)[25]
      .get(t)
      ?.forEach((e) => e());
  },
  pe = new WeakMap(),
  O = (e) => pe.get(e);
function me(e) {
  let t = O(e),
    n = t[24];
  return n ? n(t) : t;
}
function he(...e) {
  let t = {
      get(e) {
        let n = O(t)[21];
        return n(t, e);
      },
      set(e, ...n) {
        let r = O(t)[22];
        return r(t, e, ...n);
      },
      sub(e, n) {
        let r = O(t)[23];
        return r(t, e, n);
      },
    },
    n = [
      new WeakMap(),
      new WeakMap(),
      new WeakMap(),
      new Set(),
      new Set(),
      new Set(),
      {},
      S,
      C,
      w,
      T,
      E,
      D,
      ee,
      te,
      ne,
      re,
      ie,
      ae,
      oe,
      se,
      ce,
      le,
      ue,
      void 0,
      new WeakMap(),
      de,
      fe,
      [0],
    ].map((t, n) => e[n] || t);
  return (pe.set(t, Object.freeze(n)), t);
}
var ge = 0;
function k(e, t) {
  let n = `atom${++ge}`,
    r = {
      toString() {
        return n;
      },
    };
  return (
    typeof e == `function`
      ? (r.read = e)
      : ((r.init = e), (r.read = _e), (r.write = ve)),
    t && (r.write = t),
    r
  );
}
function _e(e) {
  return e(this);
}
function ve(e, t, n) {
  return t(this, typeof n == `function` ? n(e(this)) : n);
}
var ye;
function be() {
  return ye ? ye() : he();
}
var xe;
function Se() {
  return ((xe ||= be()), xe);
}
function Ce() {
  return typeof process < `u` && !1;
}
function we(e) {
  let t = k(() => []),
    n = k(function (e) {
      let [r, i, a] = e(t);
      a.has(n) && (r.forEach(e), ++i.n);
    });
  return (
    (n.effect = e),
    (n.INTERNAL_onInit = (e) => {
      let r = new Set(),
        i = 0,
        a = !1,
        o = !1,
        s = !1,
        c;
      function l() {
        if (i) return;
        r.clear();
        let t = !0,
          u = (i) => {
            if (s) return e.get(i);
            if (i === n) {
              let t = _(e, i);
              if (!m(t))
                if (f(i)) T(e, i, i.init);
                else throw Error(`no atom init`);
              return h(t);
            }
            let a = b(e, i);
            try {
              return h(a);
            } finally {
              (D.d.set(i, a.n),
                d.get(i)?.t.add(n),
                t ? r.add(i) : d.has(i) && (w(e, n), y(e), v(e)));
            }
          };
        u.peek = e.get;
        let x = (r, ...a) => {
          let o = _(e, r);
          try {
            if ((++i, r === n)) {
              if (!f(r)) throw Error(`atom not writable`);
              let t = o.n,
                n = a[0];
              (T(e, r, n), w(e, r), t !== o.n && (p.add(r), g.c?.(r), S(e, r)));
              return;
            } else return C(e, r, ...a);
          } finally {
            (t || (y(e), v(e)), --i);
          }
        };
        x.recurse = (t, ...r) => {
          if (s) {
            if (Ce()) throw Error(`set.recurse is not allowed in cleanup`);
            return;
          }
          try {
            return ((a = !0), w(e, n), x(t, ...r));
          } finally {
            (y(e), (a = !1), o && ((o = !1), l()));
          }
        };
        try {
          c?.();
          let e = n.effect(u, x);
          if (typeof e != `function`) return;
          c = () => {
            if (!i)
              try {
                return ((t = !0), (s = !0), e());
              } finally {
                ((t = !1), (s = !1), (c = void 0));
              }
          };
        } finally {
          ((t = !1),
            r.forEach((t) => {
              D.d.set(t, _(e, t).n);
            }),
            w(e, n),
            y(e));
        }
      }
      let u = me(e),
        d = u[1],
        p = u[3],
        g = x(u[6]),
        _ = u[11],
        v = u[12],
        y = u[13],
        b = u[14],
        S = u[15],
        C = u[16],
        w = u[17],
        T = u[20],
        E = Ee(e, g),
        D = _(e, n);
      ((D.v = void 0),
        Object.assign(e.get(t), [r, D, d]),
        g.c.add(n, function () {
          p.delete(n);
        }),
        g.m.add(n, function () {
          (E.add(l), c && E.delete(c));
        }),
        g.u.add(n, function () {
          (E.delete(l), c && E.add(c));
        }),
        g.c.add(n, function () {
          a ? (o = !0) : E.add(l);
        }));
    }),
    Ce() &&
      (Object.defineProperty(t, `debugLabel`, {
        get: () => (n.debugLabel ? `${n.debugLabel}:ref` : void 0),
        configurable: !0,
        enumerable: !0,
      }),
      (t.debugPrivate = !0)),
    n
  );
}
var Te = new WeakMap();
function Ee(e, t) {
  let n = Te.get(e);
  return (
    n ||
      ((n = new Set()),
      Te.set(e, n),
      t.f.add(function () {
        for (let e of n) (n.delete(e), e());
      })),
    n
  );
}
var De = new WeakMap();
function Oe(e, t = Se()) {
  De.has(t) || De.set(t, new Map());
  let n = De.get(t),
    r = n.get(e);
  if (!r) {
    let i = we(e),
      a = t.sub(i, () => {});
    ((r = () => {
      a &&= (n.delete(e), n.size === 0 && De.delete(t), void a());
    }),
      n.set(e, r));
  }
  return r;
}
var A = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ke = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  j = new (class {
    #e = ke;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function Ae(e) {
  setTimeout(e, 0);
}
var M = typeof window > `u` || `Deno` in globalThis;
function N() {}
function je(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Me(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Ne(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function P(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function F(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Pe(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Ie(o, t.options)) return !1;
    } else if (!Le(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Fe(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (I(t.options.mutationKey) !== I(a)) return !1;
    } else if (!Le(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Ie(e, t) {
  return (t?.queryKeyHashFn || I)(e);
}
function I(e) {
  return JSON.stringify(e, (e, t) =>
    He(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function Le(e, t) {
  return e === t
    ? !0
    : typeof e == typeof t &&
        e &&
        t &&
        typeof e == `object` &&
        typeof t == `object`
      ? Object.keys(t).every((n) => Le(e[n], t[n]))
      : !1;
}
var Re = Object.prototype.hasOwnProperty;
function ze(e, t) {
  if (e === t) return e;
  let n = Ve(e) && Ve(t);
  if (!n && !(He(e) && He(t))) return t;
  let r = (n ? e : Object.keys(e)).length,
    i = n ? t : Object.keys(t),
    a = i.length,
    o = n ? Array(a) : {},
    s = 0;
  for (let c = 0; c < a; c++) {
    let a = n ? c : i[c],
      l = e[a],
      u = t[a];
    if (l === u) {
      ((o[a] = l), (n ? c < r : Re.call(e, a)) && s++);
      continue;
    }
    if (
      l === null ||
      u === null ||
      typeof l != `object` ||
      typeof u != `object`
    ) {
      o[a] = u;
      continue;
    }
    let d = ze(l, u);
    ((o[a] = d), d === l && s++);
  }
  return r === a && s === r ? e : o;
}
function Be(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Ve(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function He(e) {
  if (!Ue(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !Ue(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Ue(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function We(e) {
  return new Promise((t) => {
    j.setTimeout(t, e);
  });
}
function Ge(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : ze(e, t);
}
function Ke(e) {
  return e;
}
function qe(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Je(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Ye = Symbol();
function Xe(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Ye
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function Ze(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
var Qe = new (class extends A {
  #e;
  #t;
  #n;
  constructor() {
    (super(),
      (this.#n = (e) => {
        if (!M && window.addEventListener) {
          let t = () => e();
          return (
            window.addEventListener(`visibilitychange`, t, !1),
            () => {
              window.removeEventListener(`visibilitychange`, t);
            }
          );
        }
      }));
  }
  onSubscribe() {
    this.#t || this.setEventListener(this.#n);
  }
  onUnsubscribe() {
    this.hasListeners() || (this.#t?.(), (this.#t = void 0));
  }
  setEventListener(e) {
    ((this.#n = e),
      this.#t?.(),
      (this.#t = e((e) => {
        typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
      })));
  }
  setFocused(e) {
    this.#e !== e && ((this.#e = e), this.onFocus());
  }
  onFocus() {
    let e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    return typeof this.#e == `boolean`
      ? this.#e
      : globalThis.document?.visibilityState !== `hidden`;
  }
})();
function $e() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var et = Ae;
function tt() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = et,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var L = tt(),
  nt = new (class extends A {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (!M && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function rt(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function it(e) {
  return (e ?? `online`) === `online` ? nt.isOnline() : !0;
}
var at = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function ot(e) {
  let t = !1,
    n = 0,
    r,
    i = $e(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new at(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      Qe.isFocused() &&
      (e.networkMode === `always` || nt.isOnline()) &&
      e.canRun(),
    u = () => it(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (M ? 0 : 3),
            o = e.retryDelay ?? rt,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            We(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var st = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      (this.clearGcTimeout(),
        Me(this.gcTime) &&
          (this.#e = j.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime)));
    }
    updateGcTime(e) {
      this.gcTime = Math.max(this.gcTime || 0, e ?? (M ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e &&= (j.clearTimeout(this.#e), void 0);
    }
  },
  ct = class extends st {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(e) {
      (super(),
        (this.#o = !1),
        (this.#a = e.defaultOptions),
        this.setOptions(e.options),
        (this.observers = []),
        (this.#r = e.client),
        (this.#n = this.#r.getQueryCache()),
        (this.queryKey = e.queryKey),
        (this.queryHash = e.queryHash),
        (this.#e = ut(this.options)),
        (this.state = e.state ?? this.#e),
        this.scheduleGc());
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#i?.promise;
    }
    setOptions(e) {
      if (
        ((this.options = { ...this.#a, ...e }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        let e = ut(this.options);
        e.data !== void 0 &&
          (this.setData(e.data, { updatedAt: e.dataUpdatedAt, manual: !0 }),
          (this.#e = e));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === `idle` &&
        this.#n.remove(this);
    }
    setData(e, t) {
      let n = Ge(this.state.data, e, this.options);
      return (
        this.#s({
          data: n,
          type: `success`,
          dataUpdatedAt: t?.updatedAt,
          manual: t?.manual,
        }),
        n
      );
    }
    setState(e, t) {
      this.#s({ type: `setState`, state: e, setStateOptions: t });
    }
    cancel(e) {
      let t = this.#i?.promise;
      return (this.#i?.cancel(e), t ? t.then(N).catch(N) : Promise.resolve());
    }
    destroy() {
      (super.destroy(), this.cancel({ silent: !0 }));
    }
    reset() {
      (this.destroy(), this.setState(this.#e));
    }
    isActive() {
      return this.observers.some((e) => F(e.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Ye ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => P(e.options.staleTime, this) === `static`)
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((e) => e.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(e = 0) {
      return this.state.data === void 0
        ? !0
        : e === `static`
          ? !1
          : this.state.isInvalidated
            ? !0
            : !Ne(this.state.dataUpdatedAt, e);
    }
    onFocus() {
      (this.observers
        .find((e) => e.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue());
    }
    onOnline() {
      (this.observers
        .find((e) => e.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#i?.continue());
    }
    addObserver(e) {
      this.observers.includes(e) ||
        (this.observers.push(e),
        this.clearGcTimeout(),
        this.#n.notify({ type: `observerAdded`, query: this, observer: e }));
    }
    removeObserver(e) {
      this.observers.includes(e) &&
        ((this.observers = this.observers.filter((t) => t !== e)),
        this.observers.length ||
          (this.#i &&
            (this.#o ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: `observerRemoved`, query: this, observer: e }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#s({ type: `invalidate` });
    }
    async fetch(e, t) {
      if (
        this.state.fetchStatus !== `idle` &&
        this.#i?.status() !== `rejected`
      ) {
        if (this.state.data !== void 0 && t?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#i) return (this.#i.continueRetry(), this.#i.promise);
      }
      if ((e && this.setOptions(e), !this.options.queryFn)) {
        let e = this.observers.find((e) => e.options.queryFn);
        e && this.setOptions(e.options);
      }
      let n = new AbortController(),
        r = (e) => {
          Object.defineProperty(e, `signal`, {
            enumerable: !0,
            get: () => ((this.#o = !0), n.signal),
          });
        },
        i = () => {
          let e = Xe(this.options, t),
            n = (() => {
              let e = {
                client: this.#r,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return (r(e), e);
            })();
          return (
            (this.#o = !1),
            this.options.persister ? this.options.persister(e, n, this) : e(n)
          );
        },
        a = (() => {
          let e = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#r,
            state: this.state,
            fetchFn: i,
          };
          return (r(e), e);
        })();
      (this.options.behavior?.onFetch(a, this),
        (this.#t = this.state),
        (this.state.fetchStatus === `idle` ||
          this.state.fetchMeta !== a.fetchOptions?.meta) &&
          this.#s({ type: `fetch`, meta: a.fetchOptions?.meta }),
        (this.#i = ot({
          initialPromise: t?.initialPromise,
          fn: a.fetchFn,
          onCancel: (e) => {
            (e instanceof at &&
              e.revert &&
              this.setState({ ...this.#t, fetchStatus: `idle` }),
              n.abort());
          },
          onFail: (e, t) => {
            this.#s({ type: `failed`, failureCount: e, error: t });
          },
          onPause: () => {
            this.#s({ type: `pause` });
          },
          onContinue: () => {
            this.#s({ type: `continue` });
          },
          retry: a.options.retry,
          retryDelay: a.options.retryDelay,
          networkMode: a.options.networkMode,
          canRun: () => !0,
        })));
      try {
        let e = await this.#i.start();
        if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(e),
          this.#n.config.onSuccess?.(e, this),
          this.#n.config.onSettled?.(e, this.state.error, this),
          e
        );
      } catch (e) {
        if (e instanceof at) {
          if (e.silent) return this.#i.promise;
          if (e.revert) {
            if (this.state.data === void 0) throw e;
            return this.state.data;
          }
        }
        throw (
          this.#s({ type: `error`, error: e }),
          this.#n.config.onError?.(e, this),
          this.#n.config.onSettled?.(this.state.data, e, this),
          e
        );
      } finally {
        this.scheduleGc();
      }
    }
    #s(e) {
      ((this.state = ((t) => {
        switch (e.type) {
          case `failed`:
            return {
              ...t,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case `pause`:
            return { ...t, fetchStatus: `paused` };
          case `continue`:
            return { ...t, fetchStatus: `fetching` };
          case `fetch`:
            return {
              ...t,
              ...lt(t.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case `success`:
            let n = {
              ...t,
              data: e.data,
              dataUpdateCount: t.dataUpdateCount + 1,
              dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: `success`,
              ...(!e.manual && {
                fetchStatus: `idle`,
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return ((this.#t = e.manual ? n : void 0), n);
          case `error`:
            let r = e.error;
            return {
              ...t,
              error: r,
              errorUpdateCount: t.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: t.fetchFailureCount + 1,
              fetchFailureReason: r,
              fetchStatus: `idle`,
              status: `error`,
            };
          case `invalidate`:
            return { ...t, isInvalidated: !0 };
          case `setState`:
            return { ...t, ...e.state };
        }
      })(this.state)),
        L.batch(() => {
          (this.observers.forEach((e) => {
            e.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: `updated`, action: e }));
        }));
    }
  };
function lt(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: it(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function ut(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var dt = class extends A {
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#s = null),
      (this.#o = $e()),
      this.bindMethods(),
      this.setOptions(t));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      pt(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return mt(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return mt(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this));
  }
  setOptions(e) {
    let t = this.options,
      n = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof F(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      t._defaulted &&
        !Be(this.options, t) &&
        this.#e.getQueryCache().notify({
          type: `observerOptionsUpdated`,
          query: this.#t,
          observer: this,
        }));
    let r = this.hasListeners();
    (r && ht(this.#t, n, this.options, t) && this.#h(),
      this.updateResult(),
      r &&
        (this.#t !== n ||
          F(this.options.enabled, this.#t) !== F(t.enabled, this.#t) ||
          P(this.options.staleTime, this.#t) !== P(t.staleTime, this.#t)) &&
        this.#g());
    let i = this.#_();
    r &&
      (this.#t !== n ||
        F(this.options.enabled, this.#t) !== F(t.enabled, this.#t) ||
        i !== this.#p) &&
      this.#v(i);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      n = this.createResult(t, e);
    return (
      _t(this, n) &&
        ((this.#r = n), (this.#a = this.options), (this.#i = this.#t.state)),
      n
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (e, n) => (
        this.trackProp(n),
        t?.(n),
        n === `promise` &&
          (this.trackProp(`data`),
          !this.options.experimental_prefetchInRender &&
            this.#o.status === `pending` &&
            this.#o.reject(
              Error(
                `experimental_prefetchInRender feature flag is not enabled`,
              ),
            )),
        Reflect.get(e, n)
      ),
    });
  }
  trackProp(e) {
    this.#m.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    let t = this.#e.defaultQueryOptions(e),
      n = this.#e.getQueryCache().build(this.#e, t);
    return n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return this.#h({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #h(e) {
    this.#S();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(N)), t);
  }
  #g() {
    this.#b();
    let e = P(this.options.staleTime, this.#t);
    if (M || this.#r.isStale || !Me(e)) return;
    let t = Ne(this.#r.dataUpdatedAt, e) + 1;
    this.#d = j.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, t);
  }
  #_() {
    return (
      (typeof this.options.refetchInterval == `function`
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(e) {
    (this.#x(),
      (this.#p = e),
      !(
        M ||
        F(this.options.enabled, this.#t) === !1 ||
        !Me(this.#p) ||
        this.#p === 0
      ) &&
        (this.#f = j.setInterval(() => {
          (this.options.refetchIntervalInBackground || Qe.isFocused()) &&
            this.#h();
        }, this.#p)));
  }
  #y() {
    (this.#g(), this.#v(this.#_()));
  }
  #b() {
    this.#d &&= (j.clearTimeout(this.#d), void 0);
  }
  #x() {
    this.#f &&= (j.clearInterval(this.#f), void 0);
  }
  createResult(e, t) {
    let n = this.#t,
      r = this.options,
      i = this.#r,
      a = this.#i,
      o = this.#a,
      s = e === n ? this.#n : e.state,
      { state: c } = e,
      l = { ...c },
      u = !1,
      d;
    if (t._optimisticResults) {
      let i = this.hasListeners(),
        a = !i && pt(e, t),
        o = i && ht(e, n, t, r);
      ((a || o) && (l = { ...l, ...lt(c.data, e.options) }),
        t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`));
    }
    let { error: f, errorUpdatedAt: p, status: m } = l;
    d = l.data;
    let h = !1;
    if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
      let e;
      (i?.isPlaceholderData && t.placeholderData === o?.placeholderData
        ? ((e = i.data), (h = !0))
        : (e =
            typeof t.placeholderData == `function`
              ? t.placeholderData(this.#u?.state.data, this.#u)
              : t.placeholderData),
        e !== void 0 && ((m = `success`), (d = Ge(i?.data, e, t)), (u = !0)));
    }
    if (t.select && d !== void 0 && !h)
      if (i && d === a?.data && t.select === this.#c) d = this.#l;
      else
        try {
          ((this.#c = t.select),
            (d = t.select(d)),
            (d = Ge(i?.data, d, t)),
            (this.#l = d),
            (this.#s = null));
        } catch (e) {
          this.#s = e;
        }
    this.#s && ((f = this.#s), (d = this.#l), (p = Date.now()), (m = `error`));
    let g = l.fetchStatus === `fetching`,
      _ = m === `pending`,
      v = m === `error`,
      y = _ && g,
      b = d !== void 0,
      x = {
        status: m,
        fetchStatus: l.fetchStatus,
        isPending: _,
        isSuccess: m === `success`,
        isError: v,
        isInitialLoading: y,
        isLoading: y,
        data: d,
        dataUpdatedAt: l.dataUpdatedAt,
        error: f,
        errorUpdatedAt: p,
        failureCount: l.fetchFailureCount,
        failureReason: l.fetchFailureReason,
        errorUpdateCount: l.errorUpdateCount,
        isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
        isFetchedAfterMount:
          l.dataUpdateCount > s.dataUpdateCount ||
          l.errorUpdateCount > s.errorUpdateCount,
        isFetching: g,
        isRefetching: g && !_,
        isLoadingError: v && !b,
        isPaused: l.fetchStatus === `paused`,
        isPlaceholderData: u,
        isRefetchError: v && b,
        isStale: gt(e, t),
        refetch: this.refetch,
        promise: this.#o,
        isEnabled: F(t.enabled, e) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      let t = (e) => {
          x.status === `error`
            ? e.reject(x.error)
            : x.data !== void 0 && e.resolve(x.data);
        },
        r = () => {
          t((this.#o = x.promise = $e()));
        },
        i = this.#o;
      switch (i.status) {
        case `pending`:
          e.queryHash === n.queryHash && t(i);
          break;
        case `fulfilled`:
          (x.status === `error` || x.data !== i.value) && r();
          break;
        case `rejected`:
          (x.status !== `error` || x.error !== i.reason) && r();
          break;
      }
    }
    return x;
  }
  updateResult() {
    let e = this.#r,
      t = this.createResult(this.#t, this.options);
    ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      !Be(t, e) &&
        ((this.#r = t),
        this.#C({
          listeners: (() => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              n = typeof t == `function` ? t() : t;
            if (n === `all` || (!n && !this.#m.size)) return !0;
            let r = new Set(n ?? this.#m);
            return (
              this.options.throwOnError && r.add(`error`),
              Object.keys(this.#r).some((t) => {
                let n = t;
                return this.#r[n] !== e[n] && r.has(n);
              })
            );
          })(),
        })));
  }
  #S() {
    let e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    let t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#y());
  }
  #C(e) {
    L.batch(() => {
      (e.listeners &&
        this.listeners.forEach((e) => {
          e(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: `observerResultsUpdated` }));
    });
  }
};
function ft(e, t) {
  return (
    F(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === `error` && t.retryOnMount === !1)
  );
}
function pt(e, t) {
  return ft(e, t) || (e.state.data !== void 0 && mt(e, t, t.refetchOnMount));
}
function mt(e, t, n) {
  if (F(t.enabled, e) !== !1 && P(t.staleTime, e) !== `static`) {
    let r = typeof n == `function` ? n(e) : n;
    return r === `always` || (r !== !1 && gt(e, t));
  }
  return !1;
}
function ht(e, t, n, r) {
  return (
    (e !== t || F(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== `error`) &&
    gt(e, n)
  );
}
function gt(e, t) {
  return F(t.enabled, e) !== !1 && e.isStaleByTime(P(t.staleTime, e));
}
function _t(e, t) {
  return !Be(e.getCurrentResult(), t);
}
function vt(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Object.defineProperty(e, `signal`, {
                enumerable: !0,
                get: () => (
                  t.signal.aborted
                    ? (n = !0)
                    : t.signal.addEventListener(`abort`, () => {
                        n = !0;
                      }),
                  t.signal
                ),
              });
            },
            u = Xe(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject();
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = await u(
                  (() => {
                    let e = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: i ? `backward` : `forward`,
                      meta: t.options.meta,
                    };
                    return (l(e), e);
                  })(),
                ),
                { maxPages: o } = t.options,
                s = i ? Je : qe;
              return {
                pages: s(e.pages, a, o),
                pageParams: s(e.pageParams, r, o),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? bt : yt,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : yt(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            ))
        : (t.fetchFn = l);
    },
  };
}
function yt(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function bt(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
function xt(e, t) {
  return t ? yt(e, t) != null : !1;
}
function St(e, t) {
  return !t || !e.getPreviousPageParam ? !1 : bt(e, t) != null;
}
var Ct = class extends st {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || wt()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = ot({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          await this.#n.config.onMutate?.(e, this, n));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        throw (
          await this.#n.config.onError?.(t, e, this.state.context, this, n),
          await this.options.onError?.(t, e, this.state.context, n),
          await this.#n.config.onSettled?.(
            void 0,
            t,
            this.state.variables,
            this.state.context,
            this,
            n,
          ),
          await this.options.onSettled?.(void 0, t, e, this.state.context, n),
          t
        );
      } finally {
        this.#i({ type: `error`, error: t });
      }
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    ((this.state = ((t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    })(this.state)),
      L.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function wt() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var Tt = class extends A {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new Ct({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = Et(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = Et(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = Et(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    } else return !0;
  }
  runNext(e) {
    let t = Et(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    L.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => Fe(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Fe(e, t));
  }
  notify(e) {
    L.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return L.batch(() => Promise.all(e.map((e) => e.continue().catch(N))));
  }
};
function Et(e) {
  return e.options.scope?.id;
}
var Dt = class extends A {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(e, t) {
      (super(),
        (this.#e = e),
        this.setOptions(t),
        this.bindMethods(),
        this.#i());
    }
    bindMethods() {
      ((this.mutate = this.mutate.bind(this)),
        (this.reset = this.reset.bind(this)));
    }
    setOptions(e) {
      let t = this.options;
      ((this.options = this.#e.defaultMutationOptions(e)),
        Be(this.options, t) ||
          this.#e.getMutationCache().notify({
            type: `observerOptionsUpdated`,
            mutation: this.#n,
            observer: this,
          }),
        t?.mutationKey &&
        this.options.mutationKey &&
        I(t.mutationKey) !== I(this.options.mutationKey)
          ? this.reset()
          : this.#n?.state.status === `pending` &&
            this.#n.setOptions(this.options));
    }
    onUnsubscribe() {
      this.hasListeners() || this.#n?.removeObserver(this);
    }
    onMutationUpdate(e) {
      (this.#i(), this.#a(e));
    }
    getCurrentResult() {
      return this.#t;
    }
    reset() {
      (this.#n?.removeObserver(this), (this.#n = void 0), this.#i(), this.#a());
    }
    mutate(e, t) {
      return (
        (this.#r = t),
        this.#n?.removeObserver(this),
        (this.#n = this.#e.getMutationCache().build(this.#e, this.options)),
        this.#n.addObserver(this),
        this.#n.execute(e)
      );
    }
    #i() {
      let e = this.#n?.state ?? wt();
      this.#t = {
        ...e,
        isPending: e.status === `pending`,
        isSuccess: e.status === `success`,
        isError: e.status === `error`,
        isIdle: e.status === `idle`,
        mutate: this.mutate,
        reset: this.reset,
      };
    }
    #a(e) {
      L.batch(() => {
        if (this.#r && this.hasListeners()) {
          let t = this.#t.variables,
            n = this.#t.context,
            r = {
              client: this.#e,
              meta: this.options.meta,
              mutationKey: this.options.mutationKey,
            };
          e?.type === `success`
            ? (this.#r.onSuccess?.(e.data, t, n, r),
              this.#r.onSettled?.(e.data, null, t, n, r))
            : e?.type === `error` &&
              (this.#r.onError?.(e.error, t, n, r),
              this.#r.onSettled?.(void 0, e.error, t, n, r));
        }
        this.listeners.forEach((e) => {
          e(this.#t);
        });
      });
    }
  },
  Ot = class extends A {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Ie(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new ct({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      L.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => Pe(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => Pe(e, t)) : t;
    }
    notify(e) {
      L.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      L.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      L.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  kt = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Ot()),
        (this.#t = e.mutationCache || new Tt()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = Qe.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = nt.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(P(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = je(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return L.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      L.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return L.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = L.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(N).catch(N);
    }
    invalidateQueries(e, t = {}) {
      return L.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = L.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(N)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(N);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(P(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(N).catch(N);
    }
    fetchInfiniteQuery(e) {
      return ((e.behavior = vt(e.pages)), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(N).catch(N);
    }
    ensureInfiniteQueryData(e) {
      return ((e.behavior = vt(e.pages)), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return nt.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(I(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          Le(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(I(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          Le(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= Ie(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === Ye && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  At = k(new kt());
function jt(e, t = (e) => e(At)) {
  let n = k(0),
    r = k(t),
    i = k(() => new WeakMap()),
    a = k((t) => {
      let n = t(r),
        a = n.defaultQueryOptions(e(t)),
        o = t(i).get(n);
      return ((a._optimisticResults = `optimistic`), o?.setOptions(a), Mt(a));
    }),
    o = k((e) => {
      let t = e(r),
        n = e(i).get(t);
      if (n != null) return n;
      let o = new dt(t, e(a));
      return (e(i).set(t, o), o);
    }),
    s = k((e) => {
      let t = e(r),
        n = e(o),
        i = e(a),
        s = k(n.getOptimisticResult(i));
      return (
        (s.onMount = (e) => {
          let r = n.getCurrentQuery();
          t.getQueryCache().find({ exact: !0, queryKey: r.queryKey }) !== r &&
            (n.setOptions(i), e(n.getCurrentResult()));
          let a = n.subscribe(L.batchCalls(e));
          return () => {
            (n.getCurrentResult().isError && n.getCurrentQuery().reset(), a());
          };
        }),
        s
      );
    });
  return k(
    (e) => {
      e(n);
      let t = e(o),
        r = e(a),
        i = e(e(s));
      if (Nt(r, i)) return t.fetchOptimistic(r);
      if (
        Pt({
          result: i,
          query: t.getCurrentQuery(),
          throwOnError: r.throwOnError,
        })
      )
        throw i.error;
      return i;
    },
    (e, t) => {
      t(n, (e) => e + 1);
    },
  );
}
function Mt(e) {
  return e.suspense && typeof e.staleTime != `number`
    ? { ...e, staleTime: 1e3 }
    : e;
}
function Nt(e, t) {
  return !!e?.suspense && t.isPending;
}
function Pt({ result: e, throwOnError: t, query: n }) {
  return e.isError && !e.isFetching && Ft(t, [e.error, n]);
}
function Ft(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
var R = e(i(), 1),
  It = new WeakMap(),
  Lt = new WeakMap(),
  Rt = 0;
function zt(e, t, n, r) {
  r?.debugLabel != null &&
    ((Rt += 1),
    Bt(e, {
      atom: t,
      familyKey: r?.familyKey,
      id: Rt,
      kind: n,
      label: r.debugLabel,
      scopeKey: e.key,
      scopeName: e.token.__scopeBrand,
      writeValue: r?.writeValue,
    }));
}
function Bt(e, t) {
  (e.debugEntries.add(t), qt(e.store).add(e));
  let n = It.get(e.store);
  n?.entries != null && (n.entries.add(t), Yt(n));
}
function Vt(e) {
  if (e.debugEntries.size === 0) return;
  let t = It.get(e.store);
  if (t?.entries != null) {
    for (let n of e.debugEntries) t.entries.delete(n);
    Yt(t);
  }
  e.debugEntries.clear();
}
function Ht(e) {
  let t = Kt(e),
    n = Jt(e, t);
  return (
    (0, R.useSyncExternalStore)(
      (e) => (
        t.listeners.add(e),
        () => {
          (t.listeners.delete(e),
            t.listeners.size === 0 &&
              queueMicrotask(() => {
                t.listeners.size === 0 && (t.entries = null);
              }));
        }
      ),
      () => t.version,
      () => t.version,
    ),
    [...n].sort(Ut)
  );
}
function Ut(e, t) {
  return e.id - t.id;
}
function Wt(e) {
  Lt.get(e.store)?.delete(e);
}
function Gt(e, t, n) {
  e.set(t, n);
}
function Kt(e) {
  let t = It.get(e);
  if (t != null) return t;
  let n = { entries: null, listeners: new Set(), version: 0 };
  return (It.set(e, n), n);
}
function qt(e) {
  let t = Lt.get(e);
  if (t != null) return t;
  let n = new Set();
  return (Lt.set(e, n), n);
}
function Jt(e, t) {
  if (t.entries != null) return t.entries;
  let n = new Set();
  for (let t of qt(e)) for (let e of t.debugEntries) n.add(e);
  return ((t.entries = n), n);
}
function Yt(e) {
  e.version += 1;
  for (let t of e.listeners) t();
}
function Xt(e, t) {
  e.imperativeReadAtoms.add(t);
}
function Zt(e) {
  (Vt(e), Wt(e));
  for (let t of e.retainedScopeEntries.values())
    for (let { node: e } of t.values()) Zt(e);
  e.retainedScopeEntries.clear();
}
function Qt(e, t, n) {
  if (n != null) return n(t);
  if (!e.imperativeReadAtoms.has(t)) return e.store.get(t);
  let r = [],
    i = e;
  for (; i != null; ) ((i.imperativeReadDepth += 1), r.push(i), (i = i.parent));
  try {
    let n = e.store.sub(t, () => {});
    try {
      return e.store.get(t);
    } finally {
      n();
    }
  } finally {
    for (let e of r) --e.imperativeReadDepth;
  }
}
function $t(e, t, n, r) {
  let i = {
    cache: e,
    resolve(e, a) {
      let o = B(e, a, t),
        s = i.cache === `signal` ? o.signalBindings : o.cachedBindings,
        c = s.get(i);
      if (c !== void 0) return c;
      let l = n(o, a);
      return (s.set(i, l), r?.(l, o, a), l);
    },
    scope: t,
  };
  return i;
}
function en(e, t, n) {
  return function (r, i) {
    if (i !== void 0 || arguments.length === 2) {
      let a = r,
        o = B(t, e, a.scope);
      return fn(a) ? a.read(o, e, i, n) : a.resolve(o, e, i);
    }
    if (dn(r)) return n != null && r.store === t.store ? n(r.atom) : r.get();
    let a = B(t, e, r.scope);
    return Qt(a, r.resolve(a, e), n);
  };
}
function tn(e, t, n, r) {
  if (dn(n)) return r != null && n.store === e.store ? r(n.atom) : n.get();
  let i = B(e, t, n.scope);
  return Qt(i, n.resolve(i, t), r);
}
function nn(e, t) {
  return function (n, r, i) {
    if (gn(n)) {
      let a = n.resolve(t, e, r);
      V(a.store, a.atom, i);
      return;
    }
    let a = B(t, e, n.scope);
    V(a.store, n.resolve(a, e), r);
  };
}
function rn(e, t) {
  return (n, r) => {
    let i = new Map();
    return (a) => {
      let o = an(a, r);
      if (i.has(o)) return i.get(o);
      let s = cn(e, t, a),
        c = n(a, {
          derived: s.derived,
          family: s.family,
          get: s.get,
          signal: s.signal,
          signalFamily: s.signalFamily,
          scope: H(e.token, t, e),
        });
      return (i.set(o, c), c);
    };
  };
}
function an(e, t) {
  if (t?.key != null) return t.key(e);
  if (!Array.isArray(e) && !sn(e)) return e;
  let n =
    sn(e) && t?.excludeFieldsFromKey != null
      ? new Set(t.excludeFieldsFromKey)
      : void 0;
  return JSON.stringify(on(e, n));
}
function on(e, t) {
  if (Array.isArray(e)) return e.map((e) => on(e));
  if (!sn(e)) return e;
  let n = {};
  for (let r of Object.keys(e).sort()) t?.has(r) || (n[r] = on(e[r]));
  return n;
}
function sn(e) {
  if (typeof e != `object` || !e) return !1;
  let t = Object.getPrototypeOf(e);
  return t === Object.prototype || t == null;
}
function cn(e, t, n, r) {
  return {
    derived: (i) => {
      let a = k((r) =>
        i((e) => r(e.atom), Object.assign(vn(e.token, t, e, r), { key: n })),
      );
      return (
        Xt(e, a),
        zt(e, a, `family-derived`, { debugLabel: r, familyKey: n }),
        un(e, a)
      );
    },
    family: rn(e, t),
    get: en(t, e),
    signal: (i, a) => {
      let o = k(
          typeof i == `function`
            ? i(Object.assign(vn(e.token, t, e), { key: n }))
            : i,
        ),
        s = a?.onMount;
      return (
        s != null &&
          (Xt(e, o),
          (o.onMount = (r) =>
            s(
              (e) => {
                r(e);
              },
              Object.assign(H(e.token, t, e), { key: n }),
            ) ?? void 0)),
        zt(e, o, `family-signal`, {
          debugLabel: r,
          familyKey: n,
          writeValue: (t) => {
            Gt(e.store, o, t);
          },
        }),
        ln(e, o)
      );
    },
    signalFamily: (n, r, i) =>
      rn(e, t)(
        (e, { get: t, scope: i, signal: a }) =>
          a(
            typeof n == `function`
              ? n(e, {
                  get: t,
                  get queryClient() {
                    return i.queryClient;
                  },
                  scope: i,
                })
              : n,
            r,
          ),
        i,
      ),
  };
}
function ln(e, t) {
  return {
    atom: t,
    get() {
      return Qt(e, t);
    },
    set(n) {
      V(e.store, t, n);
    },
    subscribe(n) {
      return e.store.sub(t, n);
    },
    store: e.store,
  };
}
function un(e, t) {
  return {
    atom: t,
    get() {
      return Qt(e, t);
    },
    subscribe(n) {
      return e.store.sub(t, n);
    },
    store: e.store,
  };
}
function dn(e) {
  return typeof e == `object` && !!e && `atom` in e && `store` in e;
}
function fn(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `kind` in e &&
    (e.kind === `readable-family` || e.kind === `signal-family`)
  );
}
function pn(e, t) {
  return {
    async cancel(n, r, i, a) {
      let [o, s, c] = mn(e, n, r, i, a);
      await U(e, o, t).cancel(s, c);
    },
    getData(n, r) {
      return U(e, z(e, n, r), t).getData();
    },
    getOptions(n, r) {
      return U(e, z(e, n, r), t).getOptions();
    },
    async fetch(n, r) {
      return U(e, z(e, n, r), t).fetch();
    },
    async getOrFetch(n, r) {
      return U(e, z(e, n, r), t).getOrFetch();
    },
    async invalidate(n, r, i, a) {
      let [o, s, c] = mn(e, n, r, i, a);
      await U(e, o, t).invalidate(s, c);
    },
    setData(n, r, i, a) {
      let [o, s, c] = mn(e, n, r, i, a);
      return U(e, o, t).setData(s, c);
    },
    snapshot(n, r) {
      return U(e, z(e, n, r), t);
    },
  };
}
function z(e, t, n) {
  return fn(t) ? t.resolve(e.node, e.chain, n) : t;
}
function mn(e, t, n, r, i) {
  return fn(t) ? [z(e, t, n), r, i] : [z(e, t), n, r];
}
function hn(e) {
  return dn(e) && `set` in e;
}
function gn(e) {
  return (
    typeof e == `object` && !!e && `kind` in e && e.kind === `signal-family`
  );
}
function _n(e) {
  return En(e);
}
function vn(e, t, n, r) {
  return {
    get queryClient() {
      if (n.queryClient == null) throw Error(`Missing query client`);
      return n.queryClient;
    },
    scope: H(e, t, n, r),
  };
}
function yn(e, t, n) {
  return Object.assign(vn(t.token, e, t, n), { get: en(e, t, n) });
}
function bn(e, t) {
  (e.parent != null && bn(e.parent, t), t(e.contextVersionAtom));
}
function xn(e, t) {
  let n = new Map(),
    r = t.parent;
  for (; r != null; ) {
    let t = e.get(r.id);
    if (t == null) break;
    (n.set(r.id, t), (r = r.parent));
  }
  return n;
}
function Sn(e, t) {
  let n = e;
  for (; n != null; ) {
    if (n.token === t) return n;
    n = n.parent;
  }
  throw Error(`Missing scope instance`);
}
function B(e, t, n) {
  return t.get(n.id) ?? Sn(e, n);
}
function Cn(e, t) {
  let n = e.get(t.id);
  if (n == null) throw Error(`Missing scope instance`);
  return n;
}
function V(e, t, n) {
  e.set(t, n);
}
function H(e, t, n, r) {
  let i = r == null ? _n(n) : void 0,
    a = {
      chain: t,
      get: en(t, n, r),
      node: n,
      query: pn({ chain: t, node: n }, r),
      get queryClient() {
        if (n.queryClient == null) throw Error(`Missing query client`);
        return n.queryClient;
      },
      scope: e,
      get value() {
        return ((i ??= (r != null && bn(n, r), _n(n))), i);
      },
    };
  function o(e, r, i) {
    if (hn(e)) {
      V(e.store, e.atom, r);
      return;
    }
    nn(t, n)(e, r, i);
  }
  function s(r) {
    return Oe((i) => r(H(e, t, n, i)), n.store);
  }
  function c(e) {
    return wn(s, e);
  }
  return ((a.set = o), (a.watch = s), (a.when = c), a);
}
function wn(e, t) {
  return new Promise((n) => {
    let r = null,
      i = !1;
    ((r = e((e) => {
      if (t(e)) {
        if ((n(), r == null)) {
          i = !0;
          return;
        }
        r();
      }
    })),
      i && r());
  });
}
function Tn(e, t, n) {
  let r = B(e.node, e.chain, t.scope);
  if (r.queryClient == null) throw Error(`Missing query client`);
  return {
    queryClient: r.queryClient,
    queryOptions: t.getOptions(yn(e.chain, r, n)),
  };
}
function U(e, t, n) {
  let r = Tn(e, t, n);
  return {
    queryKey: r.queryOptions.queryKey,
    async cancel(e, t) {
      await r.queryClient.cancelQueries(
        { ...e, queryKey: r.queryOptions.queryKey },
        t,
      );
    },
    getData() {
      return r.queryClient.getQueryData(r.queryOptions.queryKey);
    },
    getOptions() {
      return r.queryOptions;
    },
    fetch() {
      return r.queryClient.fetchQuery(r.queryOptions);
    },
    getOrFetch() {
      return r.queryClient.fetchQuery(r.queryOptions);
    },
    async invalidate(e, t) {
      await r.queryClient.invalidateQueries(
        { ...e, queryKey: r.queryOptions.queryKey },
        t,
      );
    },
    setData(e, t) {
      return r.queryClient.setQueryData(r.queryOptions.queryKey, e, t);
    },
  };
}
function En(e) {
  let t = e.parent == null ? void 0 : En(e.parent);
  return t == null ? e.value : { ...t, ...e.value };
}
function Dn(e, t) {
  return {
    __scopeBrand: e,
    getKey: t?.key,
    id: Symbol(),
    parent: t?.parent,
    retain: t?.retain,
  };
}
function On(e, t, n) {
  let r = $t(
    `signal`,
    e,
    (r, i) => {
      let a = k(typeof t == `function` ? t(vn(e, i, r)) : t),
        o = n?.onMount;
      return (
        o != null &&
          (Xt(r, a),
          (a.onMount = (t) =>
            o(
              (e) => {
                t(e);
              },
              H(e, i, r),
            ) ?? void 0)),
        a
      );
    },
    (e, t) => {
      zt(t, e, `signal`, {
        debugLabel: r.debugLabel,
        writeValue: (n) => {
          Gt(t.store, e, n);
        },
      });
    },
  );
  return r;
}
function kn(e, t, n) {
  let r = {
    resolve(i, a, o) {
      let s = i.token === e ? i : B(i, a, e),
        c = s.familyBindings.get(r);
      c ?? ((c = new Map()), s.familyBindings.set(r, c));
      let l = an(o, n);
      if (c.has(l)) return c.get(l);
      let u = cn(s, a, o, r.debugLabel),
        d = t(o, {
          derived: u.derived,
          family: u.family,
          get: u.get,
          signal: u.signal,
          signalFamily: u.signalFamily,
          scope: H(e, a, s),
        });
      return (c.set(l, d), d);
    },
    scope: e,
  };
  return r;
}
function An(e, t, n, r) {
  return Fn(
    kn(
      e,
      (e, { get: r, scope: i, signal: a }) =>
        a(
          typeof t == `function`
            ? t(e, {
                get: r,
                get queryClient() {
                  return i.queryClient;
                },
                scope: i,
              })
            : t,
          n,
        ),
      r,
    ),
    `signal-family`,
  );
}
function jn(e, t, n) {
  return Fn(kn(e, (n) => Pn(e, (e) => t(n, e)), n));
}
function Mn(e, t, n) {
  return Fn(kn(e, (n) => In(e, (e) => t(n, e)), n));
}
function Nn(e, t, n) {
  return Fn(kn(e, (n) => Ln(e, (e) => t(n, e)), n));
}
function Pn(e, t) {
  let n = $t(
    `cached`,
    e,
    (e, n) => {
      let r = k((r) => t(yn(n, e, r)));
      return (Xt(e, r), r);
    },
    (e, t) => {
      zt(t, e, `derived`, { debugLabel: n.debugLabel });
    },
  );
  return n;
}
function Fn(e, t = `readable-family`) {
  return Object.assign(e, {
    kind: t,
    read(t, n, r, i) {
      return tn(t, n, e.resolve(t, n, r), i);
    },
  });
}
function In(e, t) {
  let n = $t(
    `cached`,
    e,
    (e, n) => {
      if (e.queryClient == null)
        throw Error(`querySignal requires a QueryClient on Scope`);
      let r = jt(
        (r) => {
          let i = t(yn(n, e, r)),
            a = i.enabled,
            o = (t) =>
              e.imperativeReadDepth > 0
                ? !1
                : typeof a == `function`
                  ? a(t)
                  : (a ?? !0);
          return { ...i, enabled: o, refetchOnMount: !1 };
        },
        () => e.queryClient,
      );
      return (Xt(e, r), r);
    },
    (e, t) => {
      zt(t, e, `query`, { debugLabel: n.debugLabel });
    },
  );
  return Object.assign(n, { getOptions: t });
}
function Ln(e, t) {
  let n = $t(
    `cached`,
    e,
    (e, n) => {
      if (e.queryClient == null)
        throw Error(`mutationSignal requires a QueryClient on Scope`);
      let r = k({
          data: void 0,
          error: null,
          status: `idle`,
          variables: void 0,
        }),
        i = 0;
      return k((a) => {
        let o = a(r),
          s = async (a, o) => {
            let s = t(yn(n, e)),
              c = {
                client: e.queryClient,
                meta: s.meta,
                mutationKey: s.mutationKey,
              },
              l = ++i;
            e.store.set(r, {
              data: void 0,
              error: null,
              status: `pending`,
              variables: a,
            });
            let u, d;
            try {
              ((u = await s.onMutate?.(a, c)),
                (d = await s.mutationFn?.(a, c)));
            } catch (t) {
              let n = t;
              throw (
                l === i &&
                  e.store.set(r, {
                    data: void 0,
                    error: n,
                    status: `error`,
                    variables: a,
                  }),
                await s.onError?.(n, a, u, c),
                await s.onSettled?.(void 0, n, a, u, c),
                o?.onError?.(n, a, u, c),
                o?.onSettled?.(void 0, n, a, u, c),
                t
              );
            }
            return (
              l === i &&
                e.store.set(r, {
                  data: d,
                  error: null,
                  status: `success`,
                  variables: a,
                }),
              await s.onSuccess?.(d, a, u, c),
              await s.onSettled?.(d, null, a, u, c),
              o?.onSuccess?.(d, a, u, c),
              o?.onSettled?.(d, null, a, u, c),
              d
            );
          };
        return {
          ...o,
          isError: o.status === `error`,
          isIdle: o.status === `idle`,
          isPending: o.status === `pending`,
          isSuccess: o.status === `success`,
          mutate: (e, t) => {
            s(e, t).catch(() => {});
          },
          mutateAsync: s,
        };
      });
    },
    (e, t) => {
      zt(t, e, `mutation`, { debugLabel: n.debugLabel });
    },
  );
  return n;
}
function Rn(e, t) {
  return Oe((n) => t(H(e.scope, e.chain, e.node, n)), e.node.store);
}
function zn(e, t) {
  return wn((t) => Rn(e, t), t);
}
function Bn(e, t, n, r) {
  if (gn(t)) {
    let i = t.resolve(e.node, e.chain, n);
    V(i.store, i.atom, r);
    return;
  }
  if (hn(t)) {
    V(t.store, t.atom, n);
    return;
  }
  let i = B(e.node, e.chain, t.scope);
  V(i.store, t.resolve(i, e.chain), n);
}
var Vn = d(),
  Hn = e(r(), 1),
  Un = a(),
  Wn = (0, R.createContext)(new Map()),
  Gn = (0, R.createContext)(void 0),
  Kn = {},
  qn = 0;
function Jn(e) {
  let t = (0, Vn.c)(3),
    { children: n, queryClient: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, Un.jsx)(Gn.Provider, { value: r, children: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Yn({ children: e, scope: t, value: n }) {
  let r = (0, R.useContext)(Wn),
    i = (0, R.useContext)(Gn),
    a = t.parent == null ? void 0 : r.get(t.parent.id),
    o = n ?? Kn,
    s = t.getKey == null ? JSON.stringify(o) : t.getKey(o),
    c = or(),
    l = (0, R.useRef)(null);
  if (t.parent != null && a == null) throw Error(`Missing parent scope`);
  let u =
      t.retain == null || a == null
        ? void 0
        : Qn({
            parentScope: a,
            providedValue: o,
            queryClient: i,
            scope: t,
            scopeKey: s,
          }),
    d = u != null && !(0, Hn.default)(u.node.value, o),
    f = a?.queryClient ?? i,
    p =
      u == null || (!d && u.node.queryClient === f)
        ? u?.node
        : {
            ...u.node,
            cachedBindings: d ? new Map() : u.node.cachedBindings,
            queryClient: f,
            value: o,
          };
  if (
    c.current == null ||
    c.current.node.token !== t ||
    !Object.is(c.current.node.key, s) ||
    c.current.parent !== a ||
    (u != null && c.current.retainedEntry !== u) ||
    (p != null && c.current.node !== p)
  ) {
    let e =
        p ??
        Xn({
          parentScope: a,
          providedValue: o,
          queryClient: i,
          scope: t,
          scopeKey: s,
        }),
      n = xn(r, t);
    (n.set(t.id, e),
      (c.current = { chain: n, node: e, parent: a, retainedEntry: u }));
  } else c.current.retainedEntry = u;
  (
    u == null
      ? Zn({
          node: c.current.node,
          parentScope: a,
          providedValue: o,
          queryClient: i,
        })
      : d
  )
    ? (u ?? c.current.node.cachedBindings.clear(),
      (l.current = {
        atom: c.current.node.contextVersionAtom,
        store: c.current.node.store,
      }))
    : (l.current = null);
  let m = c.current.retainedEntry,
    h = c.current.node;
  return (
    (0, R.useLayoutEffect)(() => {
      let e = l.current;
      e != null && (e.store.set(e.atom, (e) => e + 1), (l.current = null));
    }),
    (0, R.useLayoutEffect)(() => {
      if (m != null && a != null) {
        let e = a.retainedScopeEntries.get(t);
        (e ?? ((e = new Map()), a.retainedScopeEntries.set(t, e)),
          e.set(s, m),
          m.node !== h &&
            ((m.node.cachedBindings = h.cachedBindings),
            (m.node.queryClient = h.queryClient),
            (m.node.value = h.value)));
        return;
      }
      return () => {
        Zt(h);
      };
    }, [h, m, a, t, s]),
    (0, R.useLayoutEffect)(() => {
      if (!(m == null || a == null))
        return (
          (m.mountedCount += 1),
          (m.lastUsed = tr()),
          $n(a, t),
          () => {
            (--m.mountedCount, (m.lastUsed = tr()), $n(a, t));
          }
        );
    }, [m, a, t]),
    (0, Un.jsx)(Wn.Provider, { value: c.current.chain, children: e })
  );
}
function Xn({
  parentScope: e,
  providedValue: t,
  queryClient: n,
  scope: r,
  scopeKey: i,
}) {
  return {
    cachedBindings: new Map(),
    contextVersionAtom: k(0),
    debugEntries: new Set(),
    familyBindings: new Map(),
    imperativeReadAtoms: new WeakSet(),
    imperativeReadDepth: 0,
    key: i,
    parent: e,
    queryClient: e?.queryClient ?? n,
    retainedScopeEntries: new Map(),
    signalBindings: new Map(),
    store: e?.store ?? be(),
    token: r,
    value: t,
  };
}
function Zn({ node: e, parentScope: t, providedValue: n, queryClient: r }) {
  let i = !(0, Hn.default)(e.value, n);
  return ((e.queryClient = t?.queryClient ?? r), (e.value = n), i);
}
function Qn({
  parentScope: e,
  providedValue: t,
  queryClient: n,
  scope: r,
  scopeKey: i,
}) {
  return (
    e.retainedScopeEntries.get(r)?.get(i) ?? {
      lastUsed: 0,
      mountedCount: 0,
      node: Xn({
        parentScope: e,
        providedValue: t,
        queryClient: n,
        scope: r,
        scopeKey: i,
      }),
    }
  );
}
function $n(e, t) {
  let n = t.retain?.max;
  if (n == null) return;
  let r = e.retainedScopeEntries.get(t);
  if (r != null)
    for (; r.size > n; ) {
      let e = er(r);
      if (e == null) return;
      (r.delete(e.key), Zt(e.entry.node));
    }
}
function er(e) {
  let t = null;
  for (let [n, r] of e)
    r.mountedCount > 0 ||
      ((t == null || r.lastUsed < t.entry.lastUsed) &&
        (t = { entry: r, key: n }));
  return t;
}
function tr() {
  return ((qn += 1), qn);
}
function nr(e) {
  if (dn(e)) {
    let t = (0, R.useCallback)((t) => e.subscribe(t), [e]),
      n = (0, R.useCallback)(() => e.store.get(e.atom), [e]);
    return (0, R.useSyncExternalStore)(t, n, n);
  }
  let t = (0, R.useContext)(Wn),
    n = Cn(t, e.scope),
    r = e.resolve(n, t),
    i = (0, R.useCallback)((e) => n.store.sub(r, e), [r, n.store]),
    a = (0, R.useCallback)(() => n.store.get(r), [r, n.store]);
  return (0, R.useSyncExternalStore)(i, a, a);
}
function rr(e, t) {
  let n = (0, Vn.c)(4),
    r = (0, R.useContext)(Wn),
    i;
  if (n[0] !== r || n[1] !== e || n[2] !== t) {
    let a = Cn(r, e.scope);
    ((i = e.resolve(a, r, t)), (n[0] = r), (n[1] = e), (n[2] = t), (n[3] = i));
  } else i = n[3];
  return i;
}
function ir(e, t) {
  return nr(rr(e, t));
}
function ar(e) {
  let t = (0, R.useContext)(Wn),
    n = Cn(t, e),
    r = _n(n),
    i = (0, R.useRef)(null);
  if (i.current == null || i.current.node !== n) {
    let a = {
      chain: t,
      node: n,
      get queryClient() {
        if (n.queryClient == null) throw Error(`Missing query client`);
        return n.queryClient;
      },
      scope: e,
      value: r,
    };
    function o(e, t) {
      if (t !== void 0 || arguments.length === 2) {
        let n = e,
          r = Cn(a.chain, n.scope);
        return fn(n) ? n.read(r, a.chain, t) : n.resolve(r, a.chain, t);
      }
      if (dn(e)) return e.get();
      let n = e,
        r = Cn(a.chain, n.scope);
      return Qt(r, n.resolve(r, a.chain));
    }
    function s(e) {
      return Rn(a, e);
    }
    function c(e) {
      return zn(a, e);
    }
    function l(e, t, n) {
      Bn(a, e, t, n);
    }
    ((a.get = o),
      (a.query = pn(a)),
      (a.set = l),
      (a.watch = s),
      (a.when = c),
      (i.current = a));
  } else ((i.current.chain = t), (i.current.value = r));
  return i.current;
}
function or() {
  return (0, R.useRef)(null);
}
function W(e, t) {
  var n = t && t.cache ? t.cache : gr,
    r = t && t.serializer ? t.serializer : mr;
  return (t && t.strategy ? t.strategy : dr)(e, { cache: n, serializer: r });
}
function sr(e) {
  return e == null || typeof e == `number` || typeof e == `boolean`;
}
function cr(e, t, n, r) {
  var i = sr(r) ? r : n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.call(this, r)), t.set(i, a)), a);
}
function lr(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3),
    i = n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.apply(this, r)), t.set(i, a)), a);
}
function ur(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function dr(e, t) {
  var n = e.length === 1 ? cr : lr;
  return ur(e, this, n, t.cache.create(), t.serializer);
}
function fr(e, t) {
  return ur(e, this, lr, t.cache.create(), t.serializer);
}
function pr(e, t) {
  return ur(e, this, cr, t.cache.create(), t.serializer);
}
var mr = function () {
    return JSON.stringify(arguments);
  },
  hr = (function () {
    function e() {
      this.cache = Object.create(null);
    }
    return (
      (e.prototype.get = function (e) {
        return this.cache[e];
      }),
      (e.prototype.set = function (e, t) {
        this.cache[e] = t;
      }),
      e
    );
  })(),
  gr = {
    create: function () {
      return new hr();
    },
  },
  G = { variadic: fr, monadic: pr },
  K;
(function (e) {
  ((e[(e.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = `EXPECT_ARGUMENT_CLOSING_BRACE`),
    (e[(e.EMPTY_ARGUMENT = 2)] = `EMPTY_ARGUMENT`),
    (e[(e.MALFORMED_ARGUMENT = 3)] = `MALFORMED_ARGUMENT`),
    (e[(e.EXPECT_ARGUMENT_TYPE = 4)] = `EXPECT_ARGUMENT_TYPE`),
    (e[(e.INVALID_ARGUMENT_TYPE = 5)] = `INVALID_ARGUMENT_TYPE`),
    (e[(e.EXPECT_ARGUMENT_STYLE = 6)] = `EXPECT_ARGUMENT_STYLE`),
    (e[(e.INVALID_NUMBER_SKELETON = 7)] = `INVALID_NUMBER_SKELETON`),
    (e[(e.INVALID_DATE_TIME_SKELETON = 8)] = `INVALID_DATE_TIME_SKELETON`),
    (e[(e.EXPECT_NUMBER_SKELETON = 9)] = `EXPECT_NUMBER_SKELETON`),
    (e[(e.EXPECT_DATE_TIME_SKELETON = 10)] = `EXPECT_DATE_TIME_SKELETON`),
    (e[(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
      `UNCLOSED_QUOTE_IN_ARGUMENT_STYLE`),
    (e[(e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
      `EXPECT_SELECT_ARGUMENT_OPTIONS`),
    (e[(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
      `EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE`),
    (e[(e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
      `INVALID_PLURAL_ARGUMENT_OFFSET_VALUE`),
    (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
      `EXPECT_SELECT_ARGUMENT_SELECTOR`),
    (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
      `EXPECT_PLURAL_ARGUMENT_SELECTOR`),
    (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
      `EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT`),
    (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
      `EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT`),
    (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
      `INVALID_PLURAL_ARGUMENT_SELECTOR`),
    (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
      `DUPLICATE_PLURAL_ARGUMENT_SELECTOR`),
    (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
      `DUPLICATE_SELECT_ARGUMENT_SELECTOR`),
    (e[(e.MISSING_OTHER_CLAUSE = 22)] = `MISSING_OTHER_CLAUSE`),
    (e[(e.INVALID_TAG = 23)] = `INVALID_TAG`),
    (e[(e.INVALID_TAG_NAME = 25)] = `INVALID_TAG_NAME`),
    (e[(e.UNMATCHED_CLOSING_TAG = 26)] = `UNMATCHED_CLOSING_TAG`),
    (e[(e.UNCLOSED_TAG = 27)] = `UNCLOSED_TAG`));
})((K ||= {}));
var q;
(function (e) {
  ((e[(e.literal = 0)] = `literal`),
    (e[(e.argument = 1)] = `argument`),
    (e[(e.number = 2)] = `number`),
    (e[(e.date = 3)] = `date`),
    (e[(e.time = 4)] = `time`),
    (e[(e.select = 5)] = `select`),
    (e[(e.plural = 6)] = `plural`),
    (e[(e.pound = 7)] = `pound`),
    (e[(e.tag = 8)] = `tag`));
})((q ||= {}));
var _r;
(function (e) {
  ((e[(e.number = 0)] = `number`), (e[(e.dateTime = 1)] = `dateTime`));
})((_r ||= {}));
function vr(e) {
  return e.type === q.literal;
}
function yr(e) {
  return e.type === q.argument;
}
function br(e) {
  return e.type === q.number;
}
function xr(e) {
  return e.type === q.date;
}
function Sr(e) {
  return e.type === q.time;
}
function Cr(e) {
  return e.type === q.select;
}
function wr(e) {
  return e.type === q.plural;
}
function Tr(e) {
  return e.type === q.pound;
}
function Er(e) {
  return e.type === q.tag;
}
function Dr(e) {
  return !!(e && typeof e == `object` && e.type === _r.number);
}
function Or(e) {
  return !!(e && typeof e == `object` && e.type === _r.dateTime);
}
var kr = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
  Ar =
    /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function jr(e) {
  var t = {};
  return (
    e.replace(Ar, function (e) {
      var n = e.length;
      switch (e[0]) {
        case `G`:
          t.era = n === 4 ? `long` : n === 5 ? `narrow` : `short`;
          break;
        case `y`:
          t.year = n === 2 ? `2-digit` : `numeric`;
          break;
        case `Y`:
        case `u`:
        case `U`:
        case `r`:
          throw RangeError(
            "`Y/u/U/r` (year) patterns are not supported, use `y` instead",
          );
        case `q`:
        case `Q`:
          throw RangeError("`q/Q` (quarter) patterns are not supported");
        case `M`:
        case `L`:
          t.month = [`numeric`, `2-digit`, `short`, `long`, `narrow`][n - 1];
          break;
        case `w`:
        case `W`:
          throw RangeError("`w/W` (week) patterns are not supported");
        case `d`:
          t.day = [`numeric`, `2-digit`][n - 1];
          break;
        case `D`:
        case `F`:
        case `g`:
          throw RangeError(
            "`D/F/g` (day) patterns are not supported, use `d` instead",
          );
        case `E`:
          t.weekday = n === 4 ? `long` : n === 5 ? `narrow` : `short`;
          break;
        case `e`:
          if (n < 4)
            throw RangeError("`e..eee` (weekday) patterns are not supported");
          t.weekday = [`short`, `long`, `narrow`, `short`][n - 4];
          break;
        case `c`:
          if (n < 4)
            throw RangeError("`c..ccc` (weekday) patterns are not supported");
          t.weekday = [`short`, `long`, `narrow`, `short`][n - 4];
          break;
        case `a`:
          t.hour12 = !0;
          break;
        case `b`:
        case `B`:
          throw RangeError(
            "`b/B` (period) patterns are not supported, use `a` instead",
          );
        case `h`:
          ((t.hourCycle = `h12`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `H`:
          ((t.hourCycle = `h23`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `K`:
          ((t.hourCycle = `h11`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `k`:
          ((t.hourCycle = `h24`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `j`:
        case `J`:
        case `C`:
          throw RangeError(
            "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead",
          );
        case `m`:
          t.minute = [`numeric`, `2-digit`][n - 1];
          break;
        case `s`:
          t.second = [`numeric`, `2-digit`][n - 1];
          break;
        case `S`:
        case `A`:
          throw RangeError(
            "`S/A` (second) patterns are not supported, use `s` instead",
          );
        case `z`:
          t.timeZoneName = n < 4 ? `short` : `long`;
          break;
        case `Z`:
        case `O`:
        case `v`:
        case `V`:
        case `X`:
        case `x`:
          throw RangeError(
            "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead",
          );
      }
      return ``;
    }),
    t
  );
}
var Mr = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Nr(e) {
  if (e.length === 0) throw Error(`Number skeleton cannot be empty`);
  for (
    var t = e.split(Mr).filter(function (e) {
        return e.length > 0;
      }),
      n = [],
      r = 0,
      i = t;
    r < i.length;
    r++
  ) {
    var a = i[r].split(`/`);
    if (a.length === 0) throw Error(`Invalid number skeleton`);
    for (var o = a[0], s = a.slice(1), c = 0, l = s; c < l.length; c++)
      if (l[c].length === 0) throw Error(`Invalid number skeleton`);
    n.push({ stem: o, options: s });
  }
  return n;
}
function Pr(e) {
  return e.replace(/^(.*?)-/, ``);
}
var Fr = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
  Ir = /^(@+)?(\+|#+)?[rs]?$/g,
  Lr = /(\*)(0+)|(#+)(0+)|(0+)/g,
  Rr = /^(0+)$/;
function zr(e) {
  var t = {};
  return (
    e[e.length - 1] === `r`
      ? (t.roundingPriority = `morePrecision`)
      : e[e.length - 1] === `s` && (t.roundingPriority = `lessPrecision`),
    e.replace(Ir, function (e, n, r) {
      return (
        typeof r == `string`
          ? r === `+`
            ? (t.minimumSignificantDigits = n.length)
            : n[0] === `#`
              ? (t.maximumSignificantDigits = n.length)
              : ((t.minimumSignificantDigits = n.length),
                (t.maximumSignificantDigits =
                  n.length + (typeof r == `string` ? r.length : 0)))
          : ((t.minimumSignificantDigits = n.length),
            (t.maximumSignificantDigits = n.length)),
        ``
      );
    }),
    t
  );
}
function Br(e) {
  switch (e) {
    case `sign-auto`:
      return { signDisplay: `auto` };
    case `sign-accounting`:
    case `()`:
      return { currencySign: `accounting` };
    case `sign-always`:
    case `+!`:
      return { signDisplay: `always` };
    case `sign-accounting-always`:
    case `()!`:
      return { signDisplay: `always`, currencySign: `accounting` };
    case `sign-except-zero`:
    case `+?`:
      return { signDisplay: `exceptZero` };
    case `sign-accounting-except-zero`:
    case `()?`:
      return { signDisplay: `exceptZero`, currencySign: `accounting` };
    case `sign-never`:
    case `+_`:
      return { signDisplay: `never` };
  }
}
function Vr(e) {
  var t;
  if (
    (e[0] === `E` && e[1] === `E`
      ? ((t = { notation: `engineering` }), (e = e.slice(2)))
      : e[0] === `E` && ((t = { notation: `scientific` }), (e = e.slice(1))),
    t)
  ) {
    var n = e.slice(0, 2);
    if (
      (n === `+!`
        ? ((t.signDisplay = `always`), (e = e.slice(2)))
        : n === `+?` && ((t.signDisplay = `exceptZero`), (e = e.slice(2))),
      !Rr.test(e))
    )
      throw Error(`Malformed concise eng/scientific notation`);
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Hr(e) {
  return Br(e) || {};
}
function Ur(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case `percent`:
      case `%`:
        t.style = `percent`;
        continue;
      case `%x100`:
        ((t.style = `percent`), (t.scale = 100));
        continue;
      case `currency`:
        ((t.style = `currency`), (t.currency = i.options[0]));
        continue;
      case `group-off`:
      case `,_`:
        t.useGrouping = !1;
        continue;
      case `precision-integer`:
      case `.`:
        t.maximumFractionDigits = 0;
        continue;
      case `measure-unit`:
      case `unit`:
        ((t.style = `unit`), (t.unit = Pr(i.options[0])));
        continue;
      case `compact-short`:
      case `K`:
        ((t.notation = `compact`), (t.compactDisplay = `short`));
        continue;
      case `compact-long`:
      case `KK`:
        ((t.notation = `compact`), (t.compactDisplay = `long`));
        continue;
      case `scientific`:
        t = l(
          l(l({}, t), { notation: `scientific` }),
          i.options.reduce(function (e, t) {
            return l(l({}, e), Hr(t));
          }, {}),
        );
        continue;
      case `engineering`:
        t = l(
          l(l({}, t), { notation: `engineering` }),
          i.options.reduce(function (e, t) {
            return l(l({}, e), Hr(t));
          }, {}),
        );
        continue;
      case `notation-simple`:
        t.notation = `standard`;
        continue;
      case `unit-width-narrow`:
        ((t.currencyDisplay = `narrowSymbol`), (t.unitDisplay = `narrow`));
        continue;
      case `unit-width-short`:
        ((t.currencyDisplay = `code`), (t.unitDisplay = `short`));
        continue;
      case `unit-width-full-name`:
        ((t.currencyDisplay = `name`), (t.unitDisplay = `long`));
        continue;
      case `unit-width-iso-code`:
        t.currencyDisplay = `symbol`;
        continue;
      case `scale`:
        t.scale = parseFloat(i.options[0]);
        continue;
      case `rounding-mode-floor`:
        t.roundingMode = `floor`;
        continue;
      case `rounding-mode-ceiling`:
        t.roundingMode = `ceil`;
        continue;
      case `rounding-mode-down`:
        t.roundingMode = `trunc`;
        continue;
      case `rounding-mode-up`:
        t.roundingMode = `expand`;
        continue;
      case `rounding-mode-half-even`:
        t.roundingMode = `halfEven`;
        continue;
      case `rounding-mode-half-down`:
        t.roundingMode = `halfTrunc`;
        continue;
      case `rounding-mode-half-up`:
        t.roundingMode = `halfExpand`;
        continue;
      case `integer-width`:
        if (i.options.length > 1)
          throw RangeError(
            `integer-width stems only accept a single optional option`,
          );
        i.options[0].replace(Lr, function (e, n, r, i, a, o) {
          if (n) t.minimumIntegerDigits = r.length;
          else if (i && a)
            throw Error(`We currently do not support maximum integer digits`);
          else if (o)
            throw Error(`We currently do not support exact integer digits`);
          return ``;
        });
        continue;
    }
    if (Rr.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Fr.test(i.stem)) {
      if (i.options.length > 1)
        throw RangeError(
          `Fraction-precision stems only accept a single optional option`,
        );
      i.stem.replace(Fr, function (e, n, r, i, a, o) {
        return (
          r === `*`
            ? (t.minimumFractionDigits = n.length)
            : i && i[0] === `#`
              ? (t.maximumFractionDigits = i.length)
              : a && o
                ? ((t.minimumFractionDigits = a.length),
                  (t.maximumFractionDigits = a.length + o.length))
                : ((t.minimumFractionDigits = n.length),
                  (t.maximumFractionDigits = n.length)),
          ``
        );
      });
      var a = i.options[0];
      a === `w`
        ? (t = l(l({}, t), { trailingZeroDisplay: `stripIfInteger` }))
        : a && (t = l(l({}, t), zr(a)));
      continue;
    }
    if (Ir.test(i.stem)) {
      t = l(l({}, t), zr(i.stem));
      continue;
    }
    var o = Br(i.stem);
    o && (t = l(l({}, t), o));
    var s = Vr(i.stem);
    s && (t = l(l({}, t), s));
  }
  return t;
}
var Wr = {
  "001": [`H`, `h`],
  419: [`h`, `H`, `hB`, `hb`],
  AC: [`H`, `h`, `hb`, `hB`],
  AD: [`H`, `hB`],
  AE: [`h`, `hB`, `hb`, `H`],
  AF: [`H`, `hb`, `hB`, `h`],
  AG: [`h`, `hb`, `H`, `hB`],
  AI: [`H`, `h`, `hb`, `hB`],
  AL: [`h`, `H`, `hB`],
  AM: [`H`, `hB`],
  AO: [`H`, `hB`],
  AR: [`h`, `H`, `hB`, `hb`],
  AS: [`h`, `H`],
  AT: [`H`, `hB`],
  AU: [`h`, `hb`, `H`, `hB`],
  AW: [`H`, `hB`],
  AX: [`H`],
  AZ: [`H`, `hB`, `h`],
  BA: [`H`, `hB`, `h`],
  BB: [`h`, `hb`, `H`, `hB`],
  BD: [`h`, `hB`, `H`],
  BE: [`H`, `hB`],
  BF: [`H`, `hB`],
  BG: [`H`, `hB`, `h`],
  BH: [`h`, `hB`, `hb`, `H`],
  BI: [`H`, `h`],
  BJ: [`H`, `hB`],
  BL: [`H`, `hB`],
  BM: [`h`, `hb`, `H`, `hB`],
  BN: [`hb`, `hB`, `h`, `H`],
  BO: [`h`, `H`, `hB`, `hb`],
  BQ: [`H`],
  BR: [`H`, `hB`],
  BS: [`h`, `hb`, `H`, `hB`],
  BT: [`h`, `H`],
  BW: [`H`, `h`, `hb`, `hB`],
  BY: [`H`, `h`],
  BZ: [`H`, `h`, `hb`, `hB`],
  CA: [`h`, `hb`, `H`, `hB`],
  CC: [`H`, `h`, `hb`, `hB`],
  CD: [`hB`, `H`],
  CF: [`H`, `h`, `hB`],
  CG: [`H`, `hB`],
  CH: [`H`, `hB`, `h`],
  CI: [`H`, `hB`],
  CK: [`H`, `h`, `hb`, `hB`],
  CL: [`h`, `H`, `hB`, `hb`],
  CM: [`H`, `h`, `hB`],
  CN: [`H`, `hB`, `hb`, `h`],
  CO: [`h`, `H`, `hB`, `hb`],
  CP: [`H`],
  CR: [`h`, `H`, `hB`, `hb`],
  CU: [`h`, `H`, `hB`, `hb`],
  CV: [`H`, `hB`],
  CW: [`H`, `hB`],
  CX: [`H`, `h`, `hb`, `hB`],
  CY: [`h`, `H`, `hb`, `hB`],
  CZ: [`H`],
  DE: [`H`, `hB`],
  DG: [`H`, `h`, `hb`, `hB`],
  DJ: [`h`, `H`],
  DK: [`H`],
  DM: [`h`, `hb`, `H`, `hB`],
  DO: [`h`, `H`, `hB`, `hb`],
  DZ: [`h`, `hB`, `hb`, `H`],
  EA: [`H`, `h`, `hB`, `hb`],
  EC: [`h`, `H`, `hB`, `hb`],
  EE: [`H`, `hB`],
  EG: [`h`, `hB`, `hb`, `H`],
  EH: [`h`, `hB`, `hb`, `H`],
  ER: [`h`, `H`],
  ES: [`H`, `hB`, `h`, `hb`],
  ET: [`hB`, `hb`, `h`, `H`],
  FI: [`H`],
  FJ: [`h`, `hb`, `H`, `hB`],
  FK: [`H`, `h`, `hb`, `hB`],
  FM: [`h`, `hb`, `H`, `hB`],
  FO: [`H`, `h`],
  FR: [`H`, `hB`],
  GA: [`H`, `hB`],
  GB: [`H`, `h`, `hb`, `hB`],
  GD: [`h`, `hb`, `H`, `hB`],
  GE: [`H`, `hB`, `h`],
  GF: [`H`, `hB`],
  GG: [`H`, `h`, `hb`, `hB`],
  GH: [`h`, `H`],
  GI: [`H`, `h`, `hb`, `hB`],
  GL: [`H`, `h`],
  GM: [`h`, `hb`, `H`, `hB`],
  GN: [`H`, `hB`],
  GP: [`H`, `hB`],
  GQ: [`H`, `hB`, `h`, `hb`],
  GR: [`h`, `H`, `hb`, `hB`],
  GT: [`h`, `H`, `hB`, `hb`],
  GU: [`h`, `hb`, `H`, `hB`],
  GW: [`H`, `hB`],
  GY: [`h`, `hb`, `H`, `hB`],
  HK: [`h`, `hB`, `hb`, `H`],
  HN: [`h`, `H`, `hB`, `hb`],
  HR: [`H`, `hB`],
  HU: [`H`, `h`],
  IC: [`H`, `h`, `hB`, `hb`],
  ID: [`H`],
  IE: [`H`, `h`, `hb`, `hB`],
  IL: [`H`, `hB`],
  IM: [`H`, `h`, `hb`, `hB`],
  IN: [`h`, `H`],
  IO: [`H`, `h`, `hb`, `hB`],
  IQ: [`h`, `hB`, `hb`, `H`],
  IR: [`hB`, `H`],
  IS: [`H`],
  IT: [`H`, `hB`],
  JE: [`H`, `h`, `hb`, `hB`],
  JM: [`h`, `hb`, `H`, `hB`],
  JO: [`h`, `hB`, `hb`, `H`],
  JP: [`H`, `K`, `h`],
  KE: [`hB`, `hb`, `H`, `h`],
  KG: [`H`, `h`, `hB`, `hb`],
  KH: [`hB`, `h`, `H`, `hb`],
  KI: [`h`, `hb`, `H`, `hB`],
  KM: [`H`, `h`, `hB`, `hb`],
  KN: [`h`, `hb`, `H`, `hB`],
  KP: [`h`, `H`, `hB`, `hb`],
  KR: [`h`, `H`, `hB`, `hb`],
  KW: [`h`, `hB`, `hb`, `H`],
  KY: [`h`, `hb`, `H`, `hB`],
  KZ: [`H`, `hB`],
  LA: [`H`, `hb`, `hB`, `h`],
  LB: [`h`, `hB`, `hb`, `H`],
  LC: [`h`, `hb`, `H`, `hB`],
  LI: [`H`, `hB`, `h`],
  LK: [`H`, `h`, `hB`, `hb`],
  LR: [`h`, `hb`, `H`, `hB`],
  LS: [`h`, `H`],
  LT: [`H`, `h`, `hb`, `hB`],
  LU: [`H`, `h`, `hB`],
  LV: [`H`, `hB`, `hb`, `h`],
  LY: [`h`, `hB`, `hb`, `H`],
  MA: [`H`, `h`, `hB`, `hb`],
  MC: [`H`, `hB`],
  MD: [`H`, `hB`],
  ME: [`H`, `hB`, `h`],
  MF: [`H`, `hB`],
  MG: [`H`, `h`],
  MH: [`h`, `hb`, `H`, `hB`],
  MK: [`H`, `h`, `hb`, `hB`],
  ML: [`H`],
  MM: [`hB`, `hb`, `H`, `h`],
  MN: [`H`, `h`, `hb`, `hB`],
  MO: [`h`, `hB`, `hb`, `H`],
  MP: [`h`, `hb`, `H`, `hB`],
  MQ: [`H`, `hB`],
  MR: [`h`, `hB`, `hb`, `H`],
  MS: [`H`, `h`, `hb`, `hB`],
  MT: [`H`, `h`],
  MU: [`H`, `h`],
  MV: [`H`, `h`],
  MW: [`h`, `hb`, `H`, `hB`],
  MX: [`h`, `H`, `hB`, `hb`],
  MY: [`hb`, `hB`, `h`, `H`],
  MZ: [`H`, `hB`],
  NA: [`h`, `H`, `hB`, `hb`],
  NC: [`H`, `hB`],
  NE: [`H`],
  NF: [`H`, `h`, `hb`, `hB`],
  NG: [`H`, `h`, `hb`, `hB`],
  NI: [`h`, `H`, `hB`, `hb`],
  NL: [`H`, `hB`],
  NO: [`H`, `h`],
  NP: [`H`, `h`, `hB`],
  NR: [`H`, `h`, `hb`, `hB`],
  NU: [`H`, `h`, `hb`, `hB`],
  NZ: [`h`, `hb`, `H`, `hB`],
  OM: [`h`, `hB`, `hb`, `H`],
  PA: [`h`, `H`, `hB`, `hb`],
  PE: [`h`, `H`, `hB`, `hb`],
  PF: [`H`, `h`, `hB`],
  PG: [`h`, `H`],
  PH: [`h`, `hB`, `hb`, `H`],
  PK: [`h`, `hB`, `H`],
  PL: [`H`, `h`],
  PM: [`H`, `hB`],
  PN: [`H`, `h`, `hb`, `hB`],
  PR: [`h`, `H`, `hB`, `hb`],
  PS: [`h`, `hB`, `hb`, `H`],
  PT: [`H`, `hB`],
  PW: [`h`, `H`],
  PY: [`h`, `H`, `hB`, `hb`],
  QA: [`h`, `hB`, `hb`, `H`],
  RE: [`H`, `hB`],
  RO: [`H`, `hB`],
  RS: [`H`, `hB`, `h`],
  RU: [`H`],
  RW: [`H`, `h`],
  SA: [`h`, `hB`, `hb`, `H`],
  SB: [`h`, `hb`, `H`, `hB`],
  SC: [`H`, `h`, `hB`],
  SD: [`h`, `hB`, `hb`, `H`],
  SE: [`H`],
  SG: [`h`, `hb`, `H`, `hB`],
  SH: [`H`, `h`, `hb`, `hB`],
  SI: [`H`, `hB`],
  SJ: [`H`],
  SK: [`H`],
  SL: [`h`, `hb`, `H`, `hB`],
  SM: [`H`, `h`, `hB`],
  SN: [`H`, `h`, `hB`],
  SO: [`h`, `H`],
  SR: [`H`, `hB`],
  SS: [`h`, `hb`, `H`, `hB`],
  ST: [`H`, `hB`],
  SV: [`h`, `H`, `hB`, `hb`],
  SX: [`H`, `h`, `hb`, `hB`],
  SY: [`h`, `hB`, `hb`, `H`],
  SZ: [`h`, `hb`, `H`, `hB`],
  TA: [`H`, `h`, `hb`, `hB`],
  TC: [`h`, `hb`, `H`, `hB`],
  TD: [`h`, `H`, `hB`],
  TF: [`H`, `h`, `hB`],
  TG: [`H`, `hB`],
  TH: [`H`, `h`],
  TJ: [`H`, `h`],
  TL: [`H`, `hB`, `hb`, `h`],
  TM: [`H`, `h`],
  TN: [`h`, `hB`, `hb`, `H`],
  TO: [`h`, `H`],
  TR: [`H`, `hB`],
  TT: [`h`, `hb`, `H`, `hB`],
  TW: [`hB`, `hb`, `h`, `H`],
  TZ: [`hB`, `hb`, `H`, `h`],
  UA: [`H`, `hB`, `h`],
  UG: [`hB`, `hb`, `H`, `h`],
  UM: [`h`, `hb`, `H`, `hB`],
  US: [`h`, `hb`, `H`, `hB`],
  UY: [`h`, `H`, `hB`, `hb`],
  UZ: [`H`, `hB`, `h`],
  VA: [`H`, `h`, `hB`],
  VC: [`h`, `hb`, `H`, `hB`],
  VE: [`h`, `H`, `hB`, `hb`],
  VG: [`h`, `hb`, `H`, `hB`],
  VI: [`h`, `hb`, `H`, `hB`],
  VN: [`H`, `h`],
  VU: [`h`, `H`],
  WF: [`H`, `hB`],
  WS: [`h`, `H`],
  XK: [`H`, `hB`, `h`],
  YE: [`h`, `hB`, `hb`, `H`],
  YT: [`H`, `hB`],
  ZA: [`H`, `h`, `hb`, `hB`],
  ZM: [`h`, `hb`, `H`, `hB`],
  ZW: [`H`, `h`],
  "af-ZA": [`H`, `h`, `hB`, `hb`],
  "ar-001": [`h`, `hB`, `hb`, `H`],
  "ca-ES": [`H`, `h`, `hB`],
  "en-001": [`h`, `hb`, `H`, `hB`],
  "en-HK": [`h`, `hb`, `H`, `hB`],
  "en-IL": [`H`, `h`, `hb`, `hB`],
  "en-MY": [`h`, `hb`, `H`, `hB`],
  "es-BR": [`H`, `h`, `hB`, `hb`],
  "es-ES": [`H`, `h`, `hB`, `hb`],
  "es-GQ": [`H`, `h`, `hB`, `hb`],
  "fr-CA": [`H`, `h`, `hB`],
  "gl-ES": [`H`, `h`, `hB`],
  "gu-IN": [`hB`, `hb`, `h`, `H`],
  "hi-IN": [`hB`, `h`, `H`],
  "it-CH": [`H`, `h`, `hB`],
  "it-IT": [`H`, `h`, `hB`],
  "kn-IN": [`hB`, `h`, `H`],
  "ml-IN": [`hB`, `h`, `H`],
  "mr-IN": [`hB`, `hb`, `h`, `H`],
  "pa-IN": [`hB`, `hb`, `h`, `H`],
  "ta-IN": [`hB`, `h`, `hb`, `H`],
  "te-IN": [`hB`, `h`, `H`],
  "zu-ZA": [`H`, `hB`, `hb`, `h`],
};
function Gr(e, t) {
  for (var n = ``, r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === `j`) {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; ) (a++, r++);
      var o = 1 + (a & 1),
        s = a < 2 ? 1 : 3 + (a >> 1),
        c = `a`,
        l = Kr(t);
      for ((l == `H` || l == `k`) && (s = 0); s-- > 0; ) n += c;
      for (; o-- > 0; ) n = l + n;
    } else i === `J` ? (n += `H`) : (n += i);
  }
  return n;
}
function Kr(e) {
  var t = e.hourCycle;
  if (
    (t === void 0 &&
      e.hourCycles &&
      e.hourCycles.length &&
      (t = e.hourCycles[0]),
    t)
  )
    switch (t) {
      case `h24`:
        return `k`;
      case `h23`:
        return `H`;
      case `h12`:
        return `h`;
      case `h11`:
        return `K`;
      default:
        throw Error(`Invalid hourCycle`);
    }
  var n = e.language,
    r;
  return (
    n !== `root` && (r = e.maximize().region),
    (Wr[r || ``] || Wr[n || ``] || Wr[`${n}-001`] || Wr[`001`])[0]
  );
}
var qr = RegExp(`^${kr.source}*`),
  Jr = RegExp(`${kr.source}*\$`);
function J(e, t) {
  return { start: e, end: t };
}
var Yr = !!String.prototype.startsWith && `_a`.startsWith(`a`, 1),
  Xr = !!String.fromCodePoint,
  Zr = !!Object.fromEntries,
  Qr = !!String.prototype.codePointAt,
  $r = !!String.prototype.trimStart,
  ei = !!String.prototype.trimEnd,
  ti = Number.isSafeInteger
    ? Number.isSafeInteger
    : function (e) {
        return (
          typeof e == `number` &&
          isFinite(e) &&
          Math.floor(e) === e &&
          Math.abs(e) <= 9007199254740991
        );
      },
  ni = !0;
try {
  ni =
    li(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`).exec(`a`)?.[0] ===
    `a`;
} catch {
  ni = !1;
}
var ri = Yr
    ? function (e, t, n) {
        return e.startsWith(t, n);
      }
    : function (e, t, n) {
        return e.slice(n, n + t.length) === t;
      },
  ii = Xr
    ? String.fromCodePoint
    : function () {
        for (var e = [...arguments], t = ``, n = e.length, r = 0, i; n > r; ) {
          if (((i = e[r++]), i > 1114111))
            throw RangeError(i + ` is not a valid code point`);
          t +=
            i < 65536
              ? String.fromCharCode(i)
              : String.fromCharCode(
                  ((i -= 65536) >> 10) + 55296,
                  (i % 1024) + 56320,
                );
        }
        return t;
      },
  ai = Zr
    ? Object.fromEntries
    : function (e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
          var i = r[n],
            a = i[0];
          t[a] = i[1];
        }
        return t;
      },
  oi = Qr
    ? function (e, t) {
        return e.codePointAt(t);
      }
    : function (e, t) {
        var n = e.length;
        if (!(t < 0 || t >= n)) {
          var r = e.charCodeAt(t),
            i;
          return r < 55296 ||
            r > 56319 ||
            t + 1 === n ||
            (i = e.charCodeAt(t + 1)) < 56320 ||
            i > 57343
            ? r
            : ((r - 55296) << 10) + (i - 56320) + 65536;
        }
      },
  si = $r
    ? function (e) {
        return e.trimStart();
      }
    : function (e) {
        return e.replace(qr, ``);
      },
  ci = ei
    ? function (e) {
        return e.trimEnd();
      }
    : function (e) {
        return e.replace(Jr, ``);
      };
function li(e, t) {
  return new RegExp(e, t);
}
var ui;
if (ni) {
  var di = li(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`);
  ui = function (e, t) {
    return ((di.lastIndex = t), di.exec(e)[1] ?? ``);
  };
} else
  ui = function (e, t) {
    for (var n = []; ; ) {
      var r = oi(e, t);
      if (r === void 0 || gi(r) || _i(r)) break;
      (n.push(r), (t += r >= 65536 ? 2 : 1));
    }
    return ii.apply(void 0, n);
  };
var fi = (function () {
  function e(e, t) {
    (t === void 0 && (t = {}),
      (this.message = e),
      (this.position = { offset: 0, line: 1, column: 1 }),
      (this.ignoreTag = !!t.ignoreTag),
      (this.locale = t.locale),
      (this.requiresOtherClause = !!t.requiresOtherClause),
      (this.shouldParseSkeletons = !!t.shouldParseSkeletons));
  }
  return (
    (e.prototype.parse = function () {
      if (this.offset() !== 0) throw Error(`parser can only be used once`);
      return this.parseMessage(0, ``, !1);
    }),
    (e.prototype.parseMessage = function (e, t, n) {
      for (var r = []; !this.isEOF(); ) {
        var i = this.char();
        if (i === 123) {
          var a = this.parseArgument(e, n);
          if (a.err) return a;
          r.push(a.val);
        } else if (i === 125 && e > 0) break;
        else if (i === 35 && (t === `plural` || t === `selectordinal`)) {
          var o = this.clonePosition();
          (this.bump(),
            r.push({ type: q.pound, location: J(o, this.clonePosition()) }));
        } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
          if (n) break;
          return this.error(
            K.UNMATCHED_CLOSING_TAG,
            J(this.clonePosition(), this.clonePosition()),
          );
        } else if (i === 60 && !this.ignoreTag && pi(this.peek() || 0)) {
          var a = this.parseTag(e, t);
          if (a.err) return a;
          r.push(a.val);
        } else {
          var a = this.parseLiteral(e, t);
          if (a.err) return a;
          r.push(a.val);
        }
      }
      return { val: r, err: null };
    }),
    (e.prototype.parseTag = function (e, t) {
      var n = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if ((this.bumpSpace(), this.bumpIf(`/>`)))
        return {
          val: {
            type: q.literal,
            value: `<${r}/>`,
            location: J(n, this.clonePosition()),
          },
          err: null,
        };
      if (this.bumpIf(`>`)) {
        var i = this.parseMessage(e + 1, t, !0);
        if (i.err) return i;
        var a = i.val,
          o = this.clonePosition();
        if (this.bumpIf(`</`)) {
          if (this.isEOF() || !pi(this.char()))
            return this.error(K.INVALID_TAG, J(o, this.clonePosition()));
          var s = this.clonePosition();
          return r === this.parseTagName()
            ? (this.bumpSpace(),
              this.bumpIf(`>`)
                ? {
                    val: {
                      type: q.tag,
                      value: r,
                      children: a,
                      location: J(n, this.clonePosition()),
                    },
                    err: null,
                  }
                : this.error(K.INVALID_TAG, J(o, this.clonePosition())))
            : this.error(K.UNMATCHED_CLOSING_TAG, J(s, this.clonePosition()));
        } else return this.error(K.UNCLOSED_TAG, J(n, this.clonePosition()));
      } else return this.error(K.INVALID_TAG, J(n, this.clonePosition()));
    }),
    (e.prototype.parseTagName = function () {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && hi(this.char()); ) this.bump();
      return this.message.slice(e, this.offset());
    }),
    (e.prototype.parseLiteral = function (e, t) {
      for (var n = this.clonePosition(), r = ``; ; ) {
        var i = this.tryParseQuote(t);
        if (i) {
          r += i;
          continue;
        }
        var a = this.tryParseUnquoted(e, t);
        if (a) {
          r += a;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          r += o;
          continue;
        }
        break;
      }
      var s = J(n, this.clonePosition());
      return { val: { type: q.literal, value: r, location: s }, err: null };
    }),
    (e.prototype.tryParseLeftAngleBracket = function () {
      return !this.isEOF() &&
        this.char() === 60 &&
        (this.ignoreTag || !mi(this.peek() || 0))
        ? (this.bump(), `<`)
        : null;
    }),
    (e.prototype.tryParseQuote = function (e) {
      if (this.isEOF() || this.char() !== 39) return null;
      switch (this.peek()) {
        case 39:
          return (this.bump(), this.bump(), `'`);
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === `plural` || e === `selectordinal`) break;
          return null;
        default:
          return null;
      }
      this.bump();
      var t = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39) (t.push(39), this.bump());
          else {
            this.bump();
            break;
          }
        else t.push(n);
        this.bump();
      }
      return ii.apply(void 0, t);
    }),
    (e.prototype.tryParseUnquoted = function (e, t) {
      if (this.isEOF()) return null;
      var n = this.char();
      return n === 60 ||
        n === 123 ||
        (n === 35 && (t === `plural` || t === `selectordinal`)) ||
        (n === 125 && e > 0)
        ? null
        : (this.bump(), ii(n));
    }),
    (e.prototype.parseArgument = function (e, t) {
      var n = this.clonePosition();
      if ((this.bump(), this.bumpSpace(), this.isEOF()))
        return this.error(
          K.EXPECT_ARGUMENT_CLOSING_BRACE,
          J(n, this.clonePosition()),
        );
      if (this.char() === 125)
        return (
          this.bump(),
          this.error(K.EMPTY_ARGUMENT, J(n, this.clonePosition()))
        );
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(K.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
      if ((this.bumpSpace(), this.isEOF()))
        return this.error(
          K.EXPECT_ARGUMENT_CLOSING_BRACE,
          J(n, this.clonePosition()),
        );
      switch (this.char()) {
        case 125:
          return (
            this.bump(),
            {
              val: {
                type: q.argument,
                value: r,
                location: J(n, this.clonePosition()),
              },
              err: null,
            }
          );
        case 44:
          return (
            this.bump(),
            this.bumpSpace(),
            this.isEOF()
              ? this.error(
                  K.EXPECT_ARGUMENT_CLOSING_BRACE,
                  J(n, this.clonePosition()),
                )
              : this.parseArgumentOptions(e, t, r, n)
          );
        default:
          return this.error(K.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
      }
    }),
    (e.prototype.parseIdentifierIfPossible = function () {
      var e = this.clonePosition(),
        t = this.offset(),
        n = ui(this.message, t),
        r = t + n.length;
      return (
        this.bumpTo(r),
        { value: n, location: J(e, this.clonePosition()) }
      );
    }),
    (e.prototype.parseArgumentOptions = function (e, t, n, r) {
      var i = this.clonePosition(),
        a = this.parseIdentifierIfPossible().value,
        o = this.clonePosition();
      switch (a) {
        case ``:
          return this.error(K.EXPECT_ARGUMENT_TYPE, J(i, o));
        case `number`:
        case `date`:
        case `time`:
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(`,`)) {
            this.bumpSpace();
            var c = this.clonePosition(),
              u = this.parseSimpleArgStyleIfPossible();
            if (u.err) return u;
            var d = ci(u.val);
            if (d.length === 0)
              return this.error(
                K.EXPECT_ARGUMENT_STYLE,
                J(this.clonePosition(), this.clonePosition()),
              );
            s = { style: d, styleLocation: J(c, this.clonePosition()) };
          }
          var f = this.tryParseArgumentClose(r);
          if (f.err) return f;
          var p = J(r, this.clonePosition());
          if (s && ri(s?.style, `::`, 0)) {
            var m = si(s.style.slice(2));
            if (a === `number`) {
              var u = this.parseNumberSkeletonFromString(m, s.styleLocation);
              return u.err
                ? u
                : {
                    val: {
                      type: q.number,
                      value: n,
                      location: p,
                      style: u.val,
                    },
                    err: null,
                  };
            } else {
              if (m.length === 0)
                return this.error(K.EXPECT_DATE_TIME_SKELETON, p);
              var h = m;
              this.locale && (h = Gr(m, this.locale));
              var d = {
                type: _r.dateTime,
                pattern: h,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? jr(h) : {},
              };
              return {
                val: {
                  type: a === `date` ? q.date : q.time,
                  value: n,
                  location: p,
                  style: d,
                },
                err: null,
              };
            }
          }
          return {
            val: {
              type: a === `number` ? q.number : a === `date` ? q.date : q.time,
              value: n,
              location: p,
              style: s?.style ?? null,
            },
            err: null,
          };
        case `plural`:
        case `selectordinal`:
        case `select`:
          var g = this.clonePosition();
          if ((this.bumpSpace(), !this.bumpIf(`,`)))
            return this.error(K.EXPECT_SELECT_ARGUMENT_OPTIONS, J(g, l({}, g)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(),
            v = 0;
          if (a !== `select` && _.value === `offset`) {
            if (!this.bumpIf(`:`))
              return this.error(
                K.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                J(this.clonePosition(), this.clonePosition()),
              );
            this.bumpSpace();
            var u = this.tryParseDecimalInteger(
              K.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
              K.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
            );
            if (u.err) return u;
            (this.bumpSpace(),
              (_ = this.parseIdentifierIfPossible()),
              (v = u.val));
          }
          var y = this.tryParsePluralOrSelectOptions(e, a, t, _);
          if (y.err) return y;
          var f = this.tryParseArgumentClose(r);
          if (f.err) return f;
          var b = J(r, this.clonePosition());
          return a === `select`
            ? {
                val: {
                  type: q.select,
                  value: n,
                  options: ai(y.val),
                  location: b,
                },
                err: null,
              }
            : {
                val: {
                  type: q.plural,
                  value: n,
                  options: ai(y.val),
                  offset: v,
                  pluralType: a === `plural` ? `cardinal` : `ordinal`,
                  location: b,
                },
                err: null,
              };
        default:
          return this.error(K.INVALID_ARGUMENT_TYPE, J(i, o));
      }
    }),
    (e.prototype.tryParseArgumentClose = function (e) {
      return this.isEOF() || this.char() !== 125
        ? this.error(
            K.EXPECT_ARGUMENT_CLOSING_BRACE,
            J(e, this.clonePosition()),
          )
        : (this.bump(), { val: !0, err: null });
    }),
    (e.prototype.parseSimpleArgStyleIfPossible = function () {
      for (var e = 0, t = this.clonePosition(); !this.isEOF(); )
        switch (this.char()) {
          case 39:
            this.bump();
            var n = this.clonePosition();
            if (!this.bumpUntil(`'`))
              return this.error(
                K.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                J(n, this.clonePosition()),
              );
            this.bump();
            break;
          case 123:
            ((e += 1), this.bump());
            break;
          case 125:
            if (e > 0) --e;
            else
              return {
                val: this.message.slice(t.offset, this.offset()),
                err: null,
              };
            break;
          default:
            this.bump();
            break;
        }
      return { val: this.message.slice(t.offset, this.offset()), err: null };
    }),
    (e.prototype.parseNumberSkeletonFromString = function (e, t) {
      var n = [];
      try {
        n = Nr(e);
      } catch {
        return this.error(K.INVALID_NUMBER_SKELETON, t);
      }
      return {
        val: {
          type: _r.number,
          tokens: n,
          location: t,
          parsedOptions: this.shouldParseSkeletons ? Ur(n) : {},
        },
        err: null,
      };
    }),
    (e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, r) {
      for (
        var i, a = !1, o = [], s = new Set(), c = r.value, l = r.location;
        ;
      ) {
        if (c.length === 0) {
          var u = this.clonePosition();
          if (t !== `select` && this.bumpIf(`=`)) {
            var d = this.tryParseDecimalInteger(
              K.EXPECT_PLURAL_ARGUMENT_SELECTOR,
              K.INVALID_PLURAL_ARGUMENT_SELECTOR,
            );
            if (d.err) return d;
            ((l = J(u, this.clonePosition())),
              (c = this.message.slice(u.offset, this.offset())));
          } else break;
        }
        if (s.has(c))
          return this.error(
            t === `select`
              ? K.DUPLICATE_SELECT_ARGUMENT_SELECTOR
              : K.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
            l,
          );
        (c === `other` && (a = !0), this.bumpSpace());
        var f = this.clonePosition();
        if (!this.bumpIf(`{`))
          return this.error(
            t === `select`
              ? K.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
              : K.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
            J(this.clonePosition(), this.clonePosition()),
          );
        var p = this.parseMessage(e + 1, t, n);
        if (p.err) return p;
        var m = this.tryParseArgumentClose(f);
        if (m.err) return m;
        (o.push([c, { value: p.val, location: J(f, this.clonePosition()) }]),
          s.add(c),
          this.bumpSpace(),
          (i = this.parseIdentifierIfPossible()),
          (c = i.value),
          (l = i.location));
      }
      return o.length === 0
        ? this.error(
            t === `select`
              ? K.EXPECT_SELECT_ARGUMENT_SELECTOR
              : K.EXPECT_PLURAL_ARGUMENT_SELECTOR,
            J(this.clonePosition(), this.clonePosition()),
          )
        : this.requiresOtherClause && !a
          ? this.error(
              K.MISSING_OTHER_CLAUSE,
              J(this.clonePosition(), this.clonePosition()),
            )
          : { val: o, err: null };
    }),
    (e.prototype.tryParseDecimalInteger = function (e, t) {
      var n = 1,
        r = this.clonePosition();
      this.bumpIf(`+`) || (this.bumpIf(`-`) && (n = -1));
      for (var i = !1, a = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          ((i = !0), (a = a * 10 + (o - 48)), this.bump());
        else break;
      }
      var s = J(r, this.clonePosition());
      return i
        ? ((a *= n), ti(a) ? { val: a, err: null } : this.error(t, s))
        : this.error(e, s);
    }),
    (e.prototype.offset = function () {
      return this.position.offset;
    }),
    (e.prototype.isEOF = function () {
      return this.offset() === this.message.length;
    }),
    (e.prototype.clonePosition = function () {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column,
      };
    }),
    (e.prototype.char = function () {
      var e = this.position.offset;
      if (e >= this.message.length) throw Error(`out of bound`);
      var t = oi(this.message, e);
      if (t === void 0)
        throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
      return t;
    }),
    (e.prototype.error = function (e, t) {
      return {
        val: null,
        err: { kind: e, message: this.message, location: t },
      };
    }),
    (e.prototype.bump = function () {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10
          ? ((this.position.line += 1),
            (this.position.column = 1),
            (this.position.offset += 1))
          : ((this.position.column += 1),
            (this.position.offset += e < 65536 ? 1 : 2));
      }
    }),
    (e.prototype.bumpIf = function (e) {
      if (ri(this.message, e, this.offset())) {
        for (var t = 0; t < e.length; t++) this.bump();
        return !0;
      }
      return !1;
    }),
    (e.prototype.bumpUntil = function (e) {
      var t = this.offset(),
        n = this.message.indexOf(e, t);
      return n >= 0
        ? (this.bumpTo(n), !0)
        : (this.bumpTo(this.message.length), !1);
    }),
    (e.prototype.bumpTo = function (e) {
      if (this.offset() > e)
        throw Error(
          `targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`,
        );
      for (e = Math.min(e, this.message.length); ; ) {
        var t = this.offset();
        if (t === e) break;
        if (t > e)
          throw Error(
            `targetOffset ${e} is at invalid UTF-16 code unit boundary`,
          );
        if ((this.bump(), this.isEOF())) break;
      }
    }),
    (e.prototype.bumpSpace = function () {
      for (; !this.isEOF() && gi(this.char()); ) this.bump();
    }),
    (e.prototype.peek = function () {
      if (this.isEOF()) return null;
      var e = this.char(),
        t = this.offset();
      return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
    }),
    e
  );
})();
function pi(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function mi(e) {
  return pi(e) || e === 47;
}
function hi(e) {
  return (
    e === 45 ||
    e === 46 ||
    (e >= 48 && e <= 57) ||
    e === 95 ||
    (e >= 97 && e <= 122) ||
    (e >= 65 && e <= 90) ||
    e == 183 ||
    (e >= 192 && e <= 214) ||
    (e >= 216 && e <= 246) ||
    (e >= 248 && e <= 893) ||
    (e >= 895 && e <= 8191) ||
    (e >= 8204 && e <= 8205) ||
    (e >= 8255 && e <= 8256) ||
    (e >= 8304 && e <= 8591) ||
    (e >= 11264 && e <= 12271) ||
    (e >= 12289 && e <= 55295) ||
    (e >= 63744 && e <= 64975) ||
    (e >= 65008 && e <= 65533) ||
    (e >= 65536 && e <= 983039)
  );
}
function gi(e) {
  return (
    (e >= 9 && e <= 13) ||
    e === 32 ||
    e === 133 ||
    (e >= 8206 && e <= 8207) ||
    e === 8232 ||
    e === 8233
  );
}
function _i(e) {
  return (
    (e >= 33 && e <= 35) ||
    e === 36 ||
    (e >= 37 && e <= 39) ||
    e === 40 ||
    e === 41 ||
    e === 42 ||
    e === 43 ||
    e === 44 ||
    e === 45 ||
    (e >= 46 && e <= 47) ||
    (e >= 58 && e <= 59) ||
    (e >= 60 && e <= 62) ||
    (e >= 63 && e <= 64) ||
    e === 91 ||
    e === 92 ||
    e === 93 ||
    e === 94 ||
    e === 96 ||
    e === 123 ||
    e === 124 ||
    e === 125 ||
    e === 126 ||
    e === 161 ||
    (e >= 162 && e <= 165) ||
    e === 166 ||
    e === 167 ||
    e === 169 ||
    e === 171 ||
    e === 172 ||
    e === 174 ||
    e === 176 ||
    e === 177 ||
    e === 182 ||
    e === 187 ||
    e === 191 ||
    e === 215 ||
    e === 247 ||
    (e >= 8208 && e <= 8213) ||
    (e >= 8214 && e <= 8215) ||
    e === 8216 ||
    e === 8217 ||
    e === 8218 ||
    (e >= 8219 && e <= 8220) ||
    e === 8221 ||
    e === 8222 ||
    e === 8223 ||
    (e >= 8224 && e <= 8231) ||
    (e >= 8240 && e <= 8248) ||
    e === 8249 ||
    e === 8250 ||
    (e >= 8251 && e <= 8254) ||
    (e >= 8257 && e <= 8259) ||
    e === 8260 ||
    e === 8261 ||
    e === 8262 ||
    (e >= 8263 && e <= 8273) ||
    e === 8274 ||
    e === 8275 ||
    (e >= 8277 && e <= 8286) ||
    (e >= 8592 && e <= 8596) ||
    (e >= 8597 && e <= 8601) ||
    (e >= 8602 && e <= 8603) ||
    (e >= 8604 && e <= 8607) ||
    e === 8608 ||
    (e >= 8609 && e <= 8610) ||
    e === 8611 ||
    (e >= 8612 && e <= 8613) ||
    e === 8614 ||
    (e >= 8615 && e <= 8621) ||
    e === 8622 ||
    (e >= 8623 && e <= 8653) ||
    (e >= 8654 && e <= 8655) ||
    (e >= 8656 && e <= 8657) ||
    e === 8658 ||
    e === 8659 ||
    e === 8660 ||
    (e >= 8661 && e <= 8691) ||
    (e >= 8692 && e <= 8959) ||
    (e >= 8960 && e <= 8967) ||
    e === 8968 ||
    e === 8969 ||
    e === 8970 ||
    e === 8971 ||
    (e >= 8972 && e <= 8991) ||
    (e >= 8992 && e <= 8993) ||
    (e >= 8994 && e <= 9e3) ||
    e === 9001 ||
    e === 9002 ||
    (e >= 9003 && e <= 9083) ||
    e === 9084 ||
    (e >= 9085 && e <= 9114) ||
    (e >= 9115 && e <= 9139) ||
    (e >= 9140 && e <= 9179) ||
    (e >= 9180 && e <= 9185) ||
    (e >= 9186 && e <= 9254) ||
    (e >= 9255 && e <= 9279) ||
    (e >= 9280 && e <= 9290) ||
    (e >= 9291 && e <= 9311) ||
    (e >= 9472 && e <= 9654) ||
    e === 9655 ||
    (e >= 9656 && e <= 9664) ||
    e === 9665 ||
    (e >= 9666 && e <= 9719) ||
    (e >= 9720 && e <= 9727) ||
    (e >= 9728 && e <= 9838) ||
    e === 9839 ||
    (e >= 9840 && e <= 10087) ||
    e === 10088 ||
    e === 10089 ||
    e === 10090 ||
    e === 10091 ||
    e === 10092 ||
    e === 10093 ||
    e === 10094 ||
    e === 10095 ||
    e === 10096 ||
    e === 10097 ||
    e === 10098 ||
    e === 10099 ||
    e === 10100 ||
    e === 10101 ||
    (e >= 10132 && e <= 10175) ||
    (e >= 10176 && e <= 10180) ||
    e === 10181 ||
    e === 10182 ||
    (e >= 10183 && e <= 10213) ||
    e === 10214 ||
    e === 10215 ||
    e === 10216 ||
    e === 10217 ||
    e === 10218 ||
    e === 10219 ||
    e === 10220 ||
    e === 10221 ||
    e === 10222 ||
    e === 10223 ||
    (e >= 10224 && e <= 10239) ||
    (e >= 10240 && e <= 10495) ||
    (e >= 10496 && e <= 10626) ||
    e === 10627 ||
    e === 10628 ||
    e === 10629 ||
    e === 10630 ||
    e === 10631 ||
    e === 10632 ||
    e === 10633 ||
    e === 10634 ||
    e === 10635 ||
    e === 10636 ||
    e === 10637 ||
    e === 10638 ||
    e === 10639 ||
    e === 10640 ||
    e === 10641 ||
    e === 10642 ||
    e === 10643 ||
    e === 10644 ||
    e === 10645 ||
    e === 10646 ||
    e === 10647 ||
    e === 10648 ||
    (e >= 10649 && e <= 10711) ||
    e === 10712 ||
    e === 10713 ||
    e === 10714 ||
    e === 10715 ||
    (e >= 10716 && e <= 10747) ||
    e === 10748 ||
    e === 10749 ||
    (e >= 10750 && e <= 11007) ||
    (e >= 11008 && e <= 11055) ||
    (e >= 11056 && e <= 11076) ||
    (e >= 11077 && e <= 11078) ||
    (e >= 11079 && e <= 11084) ||
    (e >= 11085 && e <= 11123) ||
    (e >= 11124 && e <= 11125) ||
    (e >= 11126 && e <= 11157) ||
    e === 11158 ||
    (e >= 11159 && e <= 11263) ||
    (e >= 11776 && e <= 11777) ||
    e === 11778 ||
    e === 11779 ||
    e === 11780 ||
    e === 11781 ||
    (e >= 11782 && e <= 11784) ||
    e === 11785 ||
    e === 11786 ||
    e === 11787 ||
    e === 11788 ||
    e === 11789 ||
    (e >= 11790 && e <= 11798) ||
    e === 11799 ||
    (e >= 11800 && e <= 11801) ||
    e === 11802 ||
    e === 11803 ||
    e === 11804 ||
    e === 11805 ||
    (e >= 11806 && e <= 11807) ||
    e === 11808 ||
    e === 11809 ||
    e === 11810 ||
    e === 11811 ||
    e === 11812 ||
    e === 11813 ||
    e === 11814 ||
    e === 11815 ||
    e === 11816 ||
    e === 11817 ||
    (e >= 11818 && e <= 11822) ||
    e === 11823 ||
    (e >= 11824 && e <= 11833) ||
    (e >= 11834 && e <= 11835) ||
    (e >= 11836 && e <= 11839) ||
    e === 11840 ||
    e === 11841 ||
    e === 11842 ||
    (e >= 11843 && e <= 11855) ||
    (e >= 11856 && e <= 11857) ||
    e === 11858 ||
    (e >= 11859 && e <= 11903) ||
    (e >= 12289 && e <= 12291) ||
    e === 12296 ||
    e === 12297 ||
    e === 12298 ||
    e === 12299 ||
    e === 12300 ||
    e === 12301 ||
    e === 12302 ||
    e === 12303 ||
    e === 12304 ||
    e === 12305 ||
    (e >= 12306 && e <= 12307) ||
    e === 12308 ||
    e === 12309 ||
    e === 12310 ||
    e === 12311 ||
    e === 12312 ||
    e === 12313 ||
    e === 12314 ||
    e === 12315 ||
    e === 12316 ||
    e === 12317 ||
    (e >= 12318 && e <= 12319) ||
    e === 12320 ||
    e === 12336 ||
    e === 64830 ||
    e === 64831 ||
    (e >= 65093 && e <= 65094)
  );
}
function vi(e) {
  e.forEach(function (e) {
    if ((delete e.location, Cr(e) || wr(e)))
      for (var t in e.options)
        (delete e.options[t].location, vi(e.options[t].value));
    else
      (br(e) && Dr(e.style)) || ((xr(e) || Sr(e)) && Or(e.style))
        ? delete e.style.location
        : Er(e) && vi(e.children);
  });
}
function yi(e, t) {
  (t === void 0 && (t = {}),
    (t = l({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t)));
  var n = new fi(e, t).parse();
  if (n.err) {
    var r = SyntaxError(K[n.err.kind]);
    throw (
      (r.location = n.err.location),
      (r.originalMessage = n.err.message),
      r
    );
  }
  return (t?.captureLocation || vi(n.val), n.val);
}
var Y;
(function (e) {
  ((e.MISSING_VALUE = `MISSING_VALUE`),
    (e.INVALID_VALUE = `INVALID_VALUE`),
    (e.MISSING_INTL_API = `MISSING_INTL_API`));
})((Y ||= {}));
var X = (function (e) {
    c(t, e);
    function t(t, n, r) {
      var i = e.call(this, t) || this;
      return ((i.code = n), (i.originalMessage = r), i);
    }
    return (
      (t.prototype.toString = function () {
        return `[formatjs Error: ${this.code}] ${this.message}`;
      }),
      t
    );
  })(Error),
  bi = (function (e) {
    c(t, e);
    function t(t, n, r, i) {
      return (
        e.call(
          this,
          `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join(`", "`)}"`,
          Y.INVALID_VALUE,
          i,
        ) || this
      );
    }
    return t;
  })(X),
  xi = (function (e) {
    c(t, e);
    function t(t, n, r) {
      return (
        e.call(
          this,
          `Value for "${t}" must be of type ${n}`,
          Y.INVALID_VALUE,
          r,
        ) || this
      );
    }
    return t;
  })(X),
  Si = (function (e) {
    c(t, e);
    function t(t, n) {
      return (
        e.call(
          this,
          `The intl string context variable "${t}" was not provided to the string "${n}"`,
          Y.MISSING_VALUE,
          n,
        ) || this
      );
    }
    return t;
  })(X),
  Z;
(function (e) {
  ((e[(e.literal = 0)] = `literal`), (e[(e.object = 1)] = `object`));
})((Z ||= {}));
function Ci(e) {
  return e.length < 2
    ? e
    : e.reduce(function (e, t) {
        var n = e[e.length - 1];
        return (
          !n || n.type !== Z.literal || t.type !== Z.literal
            ? e.push(t)
            : (n.value += t.value),
          e
        );
      }, []);
}
function wi(e) {
  return typeof e == `function`;
}
function Ti(e, t, n, r, i, a, o) {
  if (e.length === 1 && vr(e[0]))
    return [{ type: Z.literal, value: e[0].value }];
  for (var s = [], c = 0, l = e; c < l.length; c++) {
    var u = l[c];
    if (vr(u)) {
      s.push({ type: Z.literal, value: u.value });
      continue;
    }
    if (Tr(u)) {
      typeof a == `number` &&
        s.push({ type: Z.literal, value: n.getNumberFormat(t).format(a) });
      continue;
    }
    var d = u.value;
    if (!(i && d in i)) throw new Si(d, o);
    var f = i[d];
    if (yr(u)) {
      ((!f || typeof f == `string` || typeof f == `number`) &&
        (f = typeof f == `string` || typeof f == `number` ? String(f) : ``),
        s.push({
          type: typeof f == `string` ? Z.literal : Z.object,
          value: f,
        }));
      continue;
    }
    if (xr(u)) {
      var p =
        typeof u.style == `string`
          ? r.date[u.style]
          : Or(u.style)
            ? u.style.parsedOptions
            : void 0;
      s.push({ type: Z.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (Sr(u)) {
      var p =
        typeof u.style == `string`
          ? r.time[u.style]
          : Or(u.style)
            ? u.style.parsedOptions
            : r.time.medium;
      s.push({ type: Z.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (br(u)) {
      var p =
        typeof u.style == `string`
          ? r.number[u.style]
          : Dr(u.style)
            ? u.style.parsedOptions
            : void 0;
      (p && p.scale && (f *= p.scale || 1),
        s.push({ type: Z.literal, value: n.getNumberFormat(t, p).format(f) }));
      continue;
    }
    if (Er(u)) {
      var m = u.children,
        h = u.value,
        g = i[h];
      if (!wi(g)) throw new xi(h, `function`, o);
      var _ = g(
        Ti(m, t, n, r, i, a).map(function (e) {
          return e.value;
        }),
      );
      (Array.isArray(_) || (_ = [_]),
        s.push.apply(
          s,
          _.map(function (e) {
            return {
              type: typeof e == `string` ? Z.literal : Z.object,
              value: e,
            };
          }),
        ));
    }
    if (Cr(u)) {
      var v = u.options[f] || u.options.other;
      if (!v) throw new bi(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, Ti(v.value, t, n, r, i));
      continue;
    }
    if (wr(u)) {
      var v = u.options[`=${f}`];
      if (!v) {
        if (!Intl.PluralRules)
          throw new X(
            `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
            Y.MISSING_INTL_API,
            o,
          );
        var y = n
          .getPluralRules(t, { type: u.pluralType })
          .select(f - (u.offset || 0));
        v = u.options[y] || u.options.other;
      }
      if (!v) throw new bi(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, Ti(v.value, t, n, r, i, f - (u.offset || 0)));
      continue;
    }
  }
  return Ci(s);
}
function Ei(e, t) {
  return t
    ? l(
        l(l({}, e || {}), t || {}),
        Object.keys(e).reduce(function (n, r) {
          return ((n[r] = l(l({}, e[r]), t[r] || {})), n);
        }, {}),
      )
    : e;
}
function Di(e, t) {
  return t
    ? Object.keys(e).reduce(
        function (n, r) {
          return ((n[r] = Ei(e[r], t[r])), n);
        },
        l({}, e),
      )
    : e;
}
function Oi(e) {
  return {
    create: function () {
      return {
        get: function (t) {
          return e[t];
        },
        set: function (t, n) {
          e[t] = n;
        },
      };
    },
  };
}
function ki(e) {
  return (
    e === void 0 && (e = { number: {}, dateTime: {}, pluralRules: {} }),
    {
      getNumberFormat: W(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          return new ((e = Intl.NumberFormat).bind.apply(
            e,
            s([void 0], t, !1),
          ))();
        },
        { cache: Oi(e.number), strategy: G.variadic },
      ),
      getDateTimeFormat: W(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          return new ((e = Intl.DateTimeFormat).bind.apply(
            e,
            s([void 0], t, !1),
          ))();
        },
        { cache: Oi(e.dateTime), strategy: G.variadic },
      ),
      getPluralRules: W(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          return new ((e = Intl.PluralRules).bind.apply(
            e,
            s([void 0], t, !1),
          ))();
        },
        { cache: Oi(e.pluralRules), strategy: G.variadic },
      ),
    }
  );
}
var Ai = (function () {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var a = this;
      if (
        ((this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
        (this.format = function (e) {
          var t = a.formatToParts(e);
          if (t.length === 1) return t[0].value;
          var n = t.reduce(function (e, t) {
            return (
              !e.length ||
              t.type !== Z.literal ||
              typeof e[e.length - 1] != `string`
                ? e.push(t.value)
                : (e[e.length - 1] += t.value),
              e
            );
          }, []);
          return n.length <= 1 ? n[0] || `` : n;
        }),
        (this.formatToParts = function (e) {
          return Ti(
            a.ast,
            a.locales,
            a.formatters,
            a.formats,
            e,
            void 0,
            a.message,
          );
        }),
        (this.resolvedOptions = function () {
          return {
            locale:
              a.resolvedLocale?.toString() ||
              Intl.NumberFormat.supportedLocalesOf(a.locales)[0],
          };
        }),
        (this.getAst = function () {
          return a.ast;
        }),
        (this.locales = n),
        (this.resolvedLocale = e.resolveLocale(n)),
        typeof t == `string`)
      ) {
        if (((this.message = t), !e.__parse))
          throw TypeError(
            "IntlMessageFormat.__parse must be set to process `message` of type `string`",
          );
        var s = i || {};
        s.formatters;
        var c = o(s, [`formatters`]);
        this.ast = e.__parse(t, l(l({}, c), { locale: this.resolvedLocale }));
      } else this.ast = t;
      if (!Array.isArray(this.ast))
        throw TypeError(`A message must be provided as a String or AST.`);
      ((this.formats = Di(e.formats, r)),
        (this.formatters = (i && i.formatters) || ki(this.formatterCache)));
    }
    return (
      Object.defineProperty(e, `defaultLocale`, {
        get: function () {
          return (
            (e.memoizedDefaultLocale ||=
              new Intl.NumberFormat().resolvedOptions().locale),
            e.memoizedDefaultLocale
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.memoizedDefaultLocale = null),
      (e.resolveLocale = function (e) {
        if (Intl.Locale !== void 0) {
          var t = Intl.NumberFormat.supportedLocalesOf(e);
          return t.length > 0
            ? new Intl.Locale(t[0])
            : new Intl.Locale(typeof e == `string` ? e : e[0]);
        }
      }),
      (e.__parse = yi),
      (e.formats = {
        number: {
          integer: { maximumFractionDigits: 0 },
          currency: { style: `currency` },
          percent: { style: `percent` },
        },
        date: {
          short: { month: `numeric`, day: `numeric`, year: `2-digit` },
          medium: { month: `short`, day: `numeric`, year: `numeric` },
          long: { month: `long`, day: `numeric`, year: `numeric` },
          full: {
            weekday: `long`,
            month: `long`,
            day: `numeric`,
            year: `numeric`,
          },
        },
        time: {
          short: { hour: `numeric`, minute: `numeric` },
          medium: { hour: `numeric`, minute: `numeric`, second: `numeric` },
          long: {
            hour: `numeric`,
            minute: `numeric`,
            second: `numeric`,
            timeZoneName: `short`,
          },
          full: {
            hour: `numeric`,
            minute: `numeric`,
            second: `numeric`,
            timeZoneName: `short`,
          },
        },
      }),
      e
    );
  })(),
  ji;
(function (e) {
  ((e.FORMAT_ERROR = `FORMAT_ERROR`),
    (e.UNSUPPORTED_FORMATTER = `UNSUPPORTED_FORMATTER`),
    (e.INVALID_CONFIG = `INVALID_CONFIG`),
    (e.MISSING_DATA = `MISSING_DATA`),
    (e.MISSING_TRANSLATION = `MISSING_TRANSLATION`));
})((ji ||= {}));
var Mi = (function (e) {
    c(t, e);
    function t(n, r, i) {
      var a = this,
        o = i ? (i instanceof Error ? i : Error(String(i))) : void 0;
      return (
        (a =
          e.call(
            this,
            `[@formatjs/intl Error ${n}] ${r}
${
  o
    ? `
${o.message}
${o.stack}`
    : ``
}`,
          ) || this),
        (a.code = n),
        typeof Error.captureStackTrace == `function` &&
          Error.captureStackTrace(a, t),
        a
      );
    }
    return t;
  })(Error),
  Ni = (function (e) {
    c(t, e);
    function t(t, n) {
      return e.call(this, ji.UNSUPPORTED_FORMATTER, t, n) || this;
    }
    return t;
  })(Mi),
  Pi = (function (e) {
    c(t, e);
    function t(t, n) {
      return e.call(this, ji.INVALID_CONFIG, t, n) || this;
    }
    return t;
  })(Mi),
  Fi = (function (e) {
    c(t, e);
    function t(t, n) {
      return e.call(this, ji.MISSING_DATA, t, n) || this;
    }
    return t;
  })(Mi),
  Q = (function (e) {
    c(t, e);
    function t(t, n, r) {
      var i =
        e.call(
          this,
          ji.FORMAT_ERROR,
          `${t}
Locale: ${n}
`,
          r,
        ) || this;
      return ((i.locale = n), i);
    }
    return t;
  })(Mi),
  Ii = (function (e) {
    c(t, e);
    function t(t, n, r, i) {
      var a =
        e.call(
          this,
          `${t}
MessageID: ${r?.id}
Default Message: ${r?.defaultMessage}
Description: ${r?.description}
`,
          n,
          i,
        ) || this;
      return ((a.descriptor = r), (a.locale = n), a);
    }
    return t;
  })(Q),
  Li = (function (e) {
    c(t, e);
    function t(t, n) {
      var r =
        e.call(
          this,
          ji.MISSING_TRANSLATION,
          `Missing message: "${t.id}" for locale "${n}", using ${
            t.defaultMessage
              ? `default message (${
                  typeof t.defaultMessage == `string`
                    ? t.defaultMessage
                    : t.defaultMessage
                        .map(function (e) {
                          return e.value ?? JSON.stringify(e);
                        })
                        .join()
                })`
              : `id`
          } as fallback.`,
        ) || this;
      return ((r.descriptor = t), r);
    }
    return t;
  })(Mi);
function Ri(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function zi(e, t, n) {
  return (
    n === void 0 && (n = {}),
    t.reduce(function (t, r) {
      return (r in e ? (t[r] = e[r]) : r in n && (t[r] = n[r]), t);
    }, {})
  );
}
var Bi = {
  formats: {},
  messages: {},
  timeZone: void 0,
  defaultLocale: `en`,
  defaultFormats: {},
  fallbackOnEmptyString: !0,
  onError: function (e) {},
  onWarn: function (e) {},
};
function Vi() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {},
  };
}
function Hi(e) {
  return {
    create: function () {
      return {
        get: function (t) {
          return e[t];
        },
        set: function (t, n) {
          e[t] = n;
        },
      };
    },
  };
}
function Ui(e) {
  e === void 0 && (e = Vi());
  var t = Intl.RelativeTimeFormat,
    n = Intl.ListFormat,
    r = Intl.DisplayNames,
    i = W(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        return new ((e = Intl.DateTimeFormat).bind.apply(
          e,
          s([void 0], t, !1),
        ))();
      },
      { cache: Hi(e.dateTime), strategy: G.variadic },
    ),
    a = W(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        return new ((e = Intl.NumberFormat).bind.apply(
          e,
          s([void 0], t, !1),
        ))();
      },
      { cache: Hi(e.number), strategy: G.variadic },
    ),
    o = W(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        return new ((e = Intl.PluralRules).bind.apply(e, s([void 0], t, !1)))();
      },
      { cache: Hi(e.pluralRules), strategy: G.variadic },
    );
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: W(
      function (e, t, n, r) {
        return new Ai(
          e,
          t,
          n,
          l(
            {
              formatters: {
                getNumberFormat: a,
                getDateTimeFormat: i,
                getPluralRules: o,
              },
            },
            r || {},
          ),
        );
      },
      { cache: Hi(e.message), strategy: G.variadic },
    ),
    getRelativeTimeFormat: W(
      function () {
        var e = [...arguments];
        return new (t.bind.apply(t, s([void 0], e, !1)))();
      },
      { cache: Hi(e.relativeTime), strategy: G.variadic },
    ),
    getPluralRules: o,
    getListFormat: W(
      function () {
        var e = [...arguments];
        return new (n.bind.apply(n, s([void 0], e, !1)))();
      },
      { cache: Hi(e.list), strategy: G.variadic },
    ),
    getDisplayNames: W(
      function () {
        var e = [...arguments];
        return new (r.bind.apply(r, s([void 0], e, !1)))();
      },
      { cache: Hi(e.displayNames), strategy: G.variadic },
    ),
  };
}
function Wi(e, t, n, r) {
  var i = e && e[t],
    a;
  if ((i && (a = i[n]), a)) return a;
  r(new Ni(`No ${t} format named: ${n}`));
}
function Gi(e, t) {
  return Object.keys(e).reduce(function (n, r) {
    return ((n[r] = l({ timeZone: t }, e[r])), n);
  }, {});
}
function Ki(e, t) {
  return Object.keys(l(l({}, e), t)).reduce(function (n, r) {
    return ((n[r] = l(l({}, e[r] || {}), t[r] || {})), n);
  }, {});
}
function qi(e, t) {
  if (!t) return e;
  var n = Ai.formats;
  return l(l(l({}, n), e), {
    date: Ki(Gi(n.date, t), Gi(e.date || {}, t)),
    time: Ki(Gi(n.time, t), Gi(e.time || {}, t)),
  });
}
var Ji = function (e, t, n, r, i) {
    var a = e.locale,
      o = e.formats,
      s = e.messages,
      c = e.defaultLocale,
      u = e.defaultFormats,
      d = e.fallbackOnEmptyString,
      f = e.onError,
      p = e.timeZone,
      m = e.defaultRichTextElements;
    n === void 0 && (n = { id: `` });
    var h = n.id,
      g = n.defaultMessage;
    Ri(
      !!h,
      `[@formatjs/intl] An \`id\` must be provided to format a message. You can either:
1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)
or [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR
2. Configure your \`eslint\` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)
to autofix this issue`,
    );
    var _ = String(h),
      v = s && Object.prototype.hasOwnProperty.call(s, _) && s[_];
    if (Array.isArray(v) && v.length === 1 && v[0].type === q.literal)
      return v[0].value;
    if (!r && v && typeof v == `string` && !m)
      return v.replace(/'\{(.*?)\}'/gi, `{$1}`);
    if (((r = l(l({}, m), r || {})), (o = qi(o, p)), (u = qi(u, p)), !v)) {
      if (d === !1 && v === ``) return v;
      if (
        ((!g || (a && a.toLowerCase() !== c.toLowerCase())) && f(new Li(n, a)),
        g)
      )
        try {
          var y = t.getMessageFormat(g, c, u, i);
          return y.format(r);
        } catch (e) {
          return (
            f(
              new Ii(
                `Error formatting default message for: "${_}", rendering default message verbatim`,
                a,
                n,
                e,
              ),
            ),
            typeof g == `string` ? g : _
          );
        }
      return _;
    }
    try {
      var y = t.getMessageFormat(v, a, o, l({ formatters: t }, i || {}));
      return y.format(r);
    } catch (e) {
      f(
        new Ii(
          `Error formatting message: "${_}", using ${g ? `default message` : `id`} as fallback.`,
          a,
          n,
          e,
        ),
      );
    }
    if (g)
      try {
        var y = t.getMessageFormat(g, c, u, i);
        return y.format(r);
      } catch (e) {
        f(
          new Ii(
            `Error formatting the default message for: "${_}", rendering message verbatim`,
            a,
            n,
            e,
          ),
        );
      }
    return typeof v == `string` ? v : typeof g == `string` ? g : _;
  },
  Yi = [
    `formatMatcher`,
    `timeZone`,
    `hour12`,
    `weekday`,
    `era`,
    `year`,
    `month`,
    `day`,
    `hour`,
    `minute`,
    `second`,
    `timeZoneName`,
    `hourCycle`,
    `dateStyle`,
    `timeStyle`,
    `calendar`,
    `numberingSystem`,
    `fractionalSecondDigits`,
  ];
function Xi(e, t, n, r) {
  var i = e.locale,
    a = e.formats,
    o = e.onError,
    s = e.timeZone;
  r === void 0 && (r = {});
  var c = r.format,
    u = l(l({}, s && { timeZone: s }), c && Wi(a, t, c, o)),
    d = zi(r, Yi, u);
  return (
    t === `time` &&
      !d.hour &&
      !d.minute &&
      !d.second &&
      !d.timeStyle &&
      !d.dateStyle &&
      (d = l(l({}, d), { hour: `numeric`, minute: `numeric` })),
    n(i, d)
  );
}
function Zi(e, t) {
  var n = [...arguments].slice(2),
    r = n[0],
    i = n[1],
    a = i === void 0 ? {} : i,
    o = typeof r == `string` ? new Date(r || 0) : r;
  try {
    return Xi(e, `date`, t, a).format(o);
  } catch (t) {
    e.onError(new Q(`Error formatting date.`, e.locale, t));
  }
  return String(o);
}
function Qi(e, t) {
  var n = [...arguments].slice(2),
    r = n[0],
    i = n[1],
    a = i === void 0 ? {} : i,
    o = typeof r == `string` ? new Date(r || 0) : r;
  try {
    return Xi(e, `time`, t, a).format(o);
  } catch (t) {
    e.onError(new Q(`Error formatting time.`, e.locale, t));
  }
  return String(o);
}
function $i(e, t) {
  var n = [...arguments].slice(2),
    r = n[0],
    i = n[1],
    a = n[2],
    o = a === void 0 ? {} : a,
    s = typeof r == `string` ? new Date(r || 0) : r,
    c = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return Xi(e, `dateTimeRange`, t, o).formatRange(s, c);
  } catch (t) {
    e.onError(new Q(`Error formatting date time range.`, e.locale, t));
  }
  return String(s);
}
function ea(e, t) {
  var n = [...arguments].slice(2),
    r = n[0],
    i = n[1],
    a = i === void 0 ? {} : i,
    o = typeof r == `string` ? new Date(r || 0) : r;
  try {
    return Xi(e, `date`, t, a).formatToParts(o);
  } catch (t) {
    e.onError(new Q(`Error formatting date.`, e.locale, t));
  }
  return [];
}
function ta(e, t) {
  var n = [...arguments].slice(2),
    r = n[0],
    i = n[1],
    a = i === void 0 ? {} : i,
    o = typeof r == `string` ? new Date(r || 0) : r;
  try {
    return Xi(e, `time`, t, a).formatToParts(o);
  } catch (t) {
    e.onError(new Q(`Error formatting time.`, e.locale, t));
  }
  return [];
}
var na = [`style`, `type`, `fallback`, `languageDisplay`];
function ra(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  Intl.DisplayNames ||
    a(
      new X(
        `Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,
        Y.MISSING_INTL_API,
      ),
    );
  var o = zi(r, na);
  try {
    return t(i, o).of(n);
  } catch (e) {
    a(new Q(`Error formatting display name.`, i, e));
  }
}
var ia = [`type`, `style`],
  aa = Date.now();
function oa(e) {
  return `${aa}_${e}_${aa}`;
}
function sa(e, t, n, r) {
  r === void 0 && (r = {});
  var i = ca(e, t, n, r).reduce(function (e, t) {
    var n = t.value;
    return (
      typeof n == `string` && typeof e[e.length - 1] == `string`
        ? (e[e.length - 1] += n)
        : e.push(n),
      e
    );
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? `` : i;
}
function ca(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.ListFormat ||
      a(
        new X(
          `Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,
          Y.MISSING_INTL_API,
        ),
      ));
  var o = zi(r, ia);
  try {
    var s = {},
      c = Array.from(n).map(function (e, t) {
        if (typeof e == `object` && e) {
          var n = oa(t);
          return ((s[n] = e), n);
        }
        return String(e);
      });
    return t(i, o)
      .formatToParts(c)
      .map(function (e) {
        return e.type === `literal`
          ? e
          : l(l({}, e), { value: s[e.value] || e.value });
      });
  } catch (e) {
    a(new Q(`Error formatting list.`, i, e));
  }
  return n;
}
var la = [`type`];
function ua(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.PluralRules ||
      a(
        new X(
          `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
          Y.MISSING_INTL_API,
        ),
      ));
  var o = zi(r, la);
  try {
    return t(i, o).select(n);
  } catch (e) {
    a(new Q(`Error formatting plural.`, i, e));
  }
  return `other`;
}
var da = [`numeric`, `style`];
function fa(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (!!o && Wi(i, `relative`, o, a)) || {};
  return t(r, zi(n, da, s));
}
function pa(e, t, n, r, i) {
  (i === void 0 && (i = {}),
    (r ||= `second`),
    Intl.RelativeTimeFormat ||
      e.onError(
        new X(
          `Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,
          Y.MISSING_INTL_API,
        ),
      ));
  try {
    return fa(e, t, i).format(n, r);
  } catch (t) {
    e.onError(new Q(`Error formatting relative time.`, e.locale, t));
  }
  return String(n);
}
var ma = [
  `style`,
  `currency`,
  `unit`,
  `unitDisplay`,
  `useGrouping`,
  `minimumIntegerDigits`,
  `minimumFractionDigits`,
  `maximumFractionDigits`,
  `minimumSignificantDigits`,
  `maximumSignificantDigits`,
  `compactDisplay`,
  `currencyDisplay`,
  `currencySign`,
  `notation`,
  `signDisplay`,
  `unit`,
  `unitDisplay`,
  `numberingSystem`,
  `trailingZeroDisplay`,
  `roundingPriority`,
  `roundingIncrement`,
  `roundingMode`,
];
function ha(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (o && Wi(i, `number`, o, a)) || {};
  return t(r, zi(n, ma, s));
}
function ga(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return ha(e, t, r).format(n);
  } catch (t) {
    e.onError(new Q(`Error formatting number.`, e.locale, t));
  }
  return String(n);
}
function _a(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return ha(e, t, r).formatToParts(n);
  } catch (t) {
    e.onError(new Q(`Error formatting number.`, e.locale, t));
  }
  return [];
}
function va(e) {
  return typeof (e ? e[Object.keys(e)[0]] : void 0) == `string`;
}
function ya(e) {
  e.onWarn &&
    e.defaultRichTextElements &&
    va(e.messages || {}) &&
    e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function ba(e, t) {
  var n = Ui(t),
    r = l(l({}, Bi), e),
    i = r.locale,
    a = r.defaultLocale,
    o = r.onError;
  return (
    i
      ? !Intl.NumberFormat.supportedLocalesOf(i).length && o
        ? o(
            new Fi(
              `Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
        : !Intl.DateTimeFormat.supportedLocalesOf(i).length &&
          o &&
          o(
            new Fi(
              `Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
      : (o &&
          o(
            new Pi(
              `"locale" was not configured, using "${a}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`,
            ),
          ),
        (r.locale = r.defaultLocale || `en`)),
    ya(r),
    l(l({}, r), {
      formatters: n,
      formatNumber: ga.bind(null, r, n.getNumberFormat),
      formatNumberToParts: _a.bind(null, r, n.getNumberFormat),
      formatRelativeTime: pa.bind(null, r, n.getRelativeTimeFormat),
      formatDate: Zi.bind(null, r, n.getDateTimeFormat),
      formatDateToParts: ea.bind(null, r, n.getDateTimeFormat),
      formatTime: Qi.bind(null, r, n.getDateTimeFormat),
      formatDateTimeRange: $i.bind(null, r, n.getDateTimeFormat),
      formatTimeToParts: ta.bind(null, r, n.getDateTimeFormat),
      formatPlural: ua.bind(null, r, n.getPluralRules),
      formatMessage: Ji.bind(null, r, n),
      $t: Ji.bind(null, r, n),
      formatList: sa.bind(null, r, n.getListFormat),
      formatListToParts: ca.bind(null, r, n.getListFormat),
      formatDisplayName: ra.bind(null, r, n.getDisplayNames),
    })
  );
}
function xa(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function Sa(e) {
  xa(
    e,
    "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.",
  );
}
var Ca = l(l({}, Bi), { textComponent: R.Fragment }),
  wa = function (e, t) {
    return R.isValidElement(e) ? R.cloneElement(e, { key: t }) : e;
  },
  Ta = function (e) {
    return R.Children.map(e, wa) ?? [];
  };
function Ea(e) {
  return function (t) {
    return e(Ta(t));
  };
}
function Da(e, t) {
  if (e === t) return !0;
  if (!e || !t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t),
    i = n.length;
  if (r.length !== i) return !1;
  for (var a = 0; a < i; a++) {
    var o = n[a];
    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o)) return !1;
  }
  return !0;
}
var Oa = t((e) => {
    var t = typeof Symbol == `function` && Symbol.for,
      n = t ? Symbol.for(`react.element`) : 60103,
      r = t ? Symbol.for(`react.portal`) : 60106,
      i = t ? Symbol.for(`react.fragment`) : 60107,
      a = t ? Symbol.for(`react.strict_mode`) : 60108,
      o = t ? Symbol.for(`react.profiler`) : 60114,
      s = t ? Symbol.for(`react.provider`) : 60109,
      c = t ? Symbol.for(`react.context`) : 60110,
      l = t ? Symbol.for(`react.async_mode`) : 60111,
      u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
      d = t ? Symbol.for(`react.forward_ref`) : 60112,
      f = t ? Symbol.for(`react.suspense`) : 60113,
      p = t ? Symbol.for(`react.suspense_list`) : 60120,
      m = t ? Symbol.for(`react.memo`) : 60115,
      h = t ? Symbol.for(`react.lazy`) : 60116,
      g = t ? Symbol.for(`react.block`) : 60121,
      _ = t ? Symbol.for(`react.fundamental`) : 60117,
      v = t ? Symbol.for(`react.responder`) : 60118,
      y = t ? Symbol.for(`react.scope`) : 60119;
    function b(e) {
      if (typeof e == `object` && e) {
        var t = e.$$typeof;
        switch (t) {
          case n:
            switch (((e = e.type), e)) {
              case l:
              case u:
              case i:
              case o:
              case a:
              case f:
                return e;
              default:
                switch (((e &&= e.$$typeof), e)) {
                  case c:
                  case d:
                  case h:
                  case m:
                  case s:
                    return e;
                  default:
                    return t;
                }
            }
          case r:
            return t;
        }
      }
    }
    function x(e) {
      return b(e) === u;
    }
    ((e.AsyncMode = l),
      (e.ConcurrentMode = u),
      (e.ContextConsumer = c),
      (e.ContextProvider = s),
      (e.Element = n),
      (e.ForwardRef = d),
      (e.Fragment = i),
      (e.Lazy = h),
      (e.Memo = m),
      (e.Portal = r),
      (e.Profiler = o),
      (e.StrictMode = a),
      (e.Suspense = f),
      (e.isAsyncMode = function (e) {
        return x(e) || b(e) === l;
      }),
      (e.isConcurrentMode = x),
      (e.isContextConsumer = function (e) {
        return b(e) === c;
      }),
      (e.isContextProvider = function (e) {
        return b(e) === s;
      }),
      (e.isElement = function (e) {
        return typeof e == `object` && !!e && e.$$typeof === n;
      }),
      (e.isForwardRef = function (e) {
        return b(e) === d;
      }),
      (e.isFragment = function (e) {
        return b(e) === i;
      }),
      (e.isLazy = function (e) {
        return b(e) === h;
      }),
      (e.isMemo = function (e) {
        return b(e) === m;
      }),
      (e.isPortal = function (e) {
        return b(e) === r;
      }),
      (e.isProfiler = function (e) {
        return b(e) === o;
      }),
      (e.isStrictMode = function (e) {
        return b(e) === a;
      }),
      (e.isSuspense = function (e) {
        return b(e) === f;
      }),
      (e.isValidElementType = function (e) {
        return (
          typeof e == `string` ||
          typeof e == `function` ||
          e === i ||
          e === u ||
          e === o ||
          e === a ||
          e === f ||
          e === p ||
          (typeof e == `object` &&
            !!e &&
            (e.$$typeof === h ||
              e.$$typeof === m ||
              e.$$typeof === s ||
              e.$$typeof === c ||
              e.$$typeof === d ||
              e.$$typeof === _ ||
              e.$$typeof === v ||
              e.$$typeof === y ||
              e.$$typeof === g))
        );
      }),
      (e.typeOf = b));
  }),
  ka = t((e, t) => {
    t.exports = Oa();
  });
e(
  t((e, t) => {
    var n = ka(),
      r = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      a = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      o = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      s = {};
    ((s[n.ForwardRef] = a), (s[n.Memo] = o));
    function c(e) {
      return n.isMemo(e) ? o : s[e.$$typeof] || r;
    }
    var l = Object.defineProperty,
      u = Object.getOwnPropertyNames,
      d = Object.getOwnPropertySymbols,
      f = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      m = Object.prototype;
    function h(e, t, n) {
      if (typeof t != `string`) {
        if (m) {
          var r = p(t);
          r && r !== m && h(e, r, n);
        }
        var a = u(t);
        d && (a = a.concat(d(t)));
        for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
          var _ = a[g];
          if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
            var v = f(t, _);
            try {
              l(e, _, v);
            } catch {}
          }
        }
      }
      return e;
    }
    t.exports = h;
  })(),
);
var Aa =
  typeof window < `u` && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__
    ? window.__REACT_INTL_CONTEXT__ ||
      (window.__REACT_INTL_CONTEXT__ = R.createContext(null))
    : R.createContext(null);
Aa.Consumer;
var ja = Aa.Provider,
  Ma = Aa;
function Na() {
  var e = R.useContext(Ma);
  return (Sa(e), e);
}
var Pa;
(function (e) {
  ((e.formatDate = `FormattedDate`),
    (e.formatTime = `FormattedTime`),
    (e.formatNumber = `FormattedNumber`),
    (e.formatList = `FormattedList`),
    (e.formatDisplayName = `FormattedDisplayName`));
})((Pa ||= {}));
var Fa;
(function (e) {
  ((e.formatDate = `FormattedDateParts`),
    (e.formatTime = `FormattedTimeParts`),
    (e.formatNumber = `FormattedNumberParts`),
    (e.formatList = `FormattedListParts`));
})((Fa ||= {}));
var Ia = function (e) {
  var t = Na(),
    n = e.value,
    r = e.children,
    i = o(e, [`value`, `children`]);
  return r(t.formatNumberToParts(n, i));
};
((Ia.displayName = `FormattedNumberParts`),
  (Ia.displayName = `FormattedNumberParts`));
function La(e) {
  var t = function (t) {
    var n = Na(),
      r = t.value,
      i = t.children,
      a = o(t, [`value`, `children`]),
      s = typeof r == `string` ? new Date(r || 0) : r;
    return i(
      e === `formatDate`
        ? n.formatDateToParts(s, a)
        : n.formatTimeToParts(s, a),
    );
  };
  return ((t.displayName = Fa[e]), t);
}
function Ra(e) {
  var t = function (t) {
    var n = Na(),
      r = t.value,
      i = t.children,
      a = o(t, [`value`, `children`]),
      s = n[e](r, a);
    if (typeof i == `function`) return i(s);
    var c = n.textComponent || R.Fragment;
    return R.createElement(c, null, s);
  };
  return ((t.displayName = Pa[e]), t);
}
function za(e) {
  return (
    e &&
    Object.keys(e).reduce(function (t, n) {
      var r = e[n];
      return ((t[n] = wi(r) ? Ea(r) : r), t);
    }, {})
  );
}
var Ba = function (e, t, n, r) {
    var i = [...arguments].slice(4),
      a = za(r),
      o = Ji.apply(void 0, s([e, t, n, a], i, !1));
    return Array.isArray(o) ? Ta(o) : o;
  },
  Va = function (e, t) {
    var n = e.defaultRichTextElements,
      r = o(e, [`defaultRichTextElements`]),
      i = za(n),
      a = ba(l(l(l({}, Ca), r), { defaultRichTextElements: i }), t),
      s = {
        locale: a.locale,
        timeZone: a.timeZone,
        fallbackOnEmptyString: a.fallbackOnEmptyString,
        formats: a.formats,
        defaultLocale: a.defaultLocale,
        defaultFormats: a.defaultFormats,
        messages: a.messages,
        onError: a.onError,
        defaultRichTextElements: i,
      };
    return l(l({}, a), {
      formatMessage: Ba.bind(null, s, a.formatters),
      $t: Ba.bind(null, s, a.formatters),
    });
  };
function Ha(e, t) {
  var n = e.values,
    r = o(e, [`values`]),
    i = t.values,
    a = o(t, [`values`]);
  return Da(i, n) && Da(r, a);
}
function Ua(e) {
  var t = Na(),
    n = t.formatMessage,
    r = t.textComponent,
    i = r === void 0 ? R.Fragment : r,
    a = e.id,
    o = e.description,
    s = e.defaultMessage,
    c = e.values,
    l = e.children,
    u = e.tagName,
    d = u === void 0 ? i : u,
    f = e.ignoreTag,
    p = n({ id: a, description: o, defaultMessage: s }, c, { ignoreTag: f });
  return typeof l == `function`
    ? l(Array.isArray(p) ? p : [p])
    : d
      ? R.createElement(d, null, p)
      : R.createElement(R.Fragment, null, p);
}
Ua.displayName = `FormattedMessage`;
var Wa = R.memo(Ua, Ha);
Wa.displayName = `MemoizedFormattedMessage`;
function Ga(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    fallbackOnEmptyString: e.fallbackOnEmptyString,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    onWarn: e.onWarn,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
    defaultRichTextElements: e.defaultRichTextElements,
  };
}
var Ka = (function (e) {
  c(t, e);
  function t() {
    var t = (e !== null && e.apply(this, arguments)) || this;
    return (
      (t.cache = Vi()),
      (t.state = {
        cache: t.cache,
        intl: Va(Ga(t.props), t.cache),
        prevConfig: Ga(t.props),
      }),
      t
    );
  }
  return (
    (t.getDerivedStateFromProps = function (e, t) {
      var n = t.prevConfig,
        r = t.cache,
        i = Ga(e);
      return Da(n, i) ? null : { intl: Va(i, r), prevConfig: i };
    }),
    (t.prototype.render = function () {
      return (
        Sa(this.state.intl),
        R.createElement(ja, { value: this.state.intl }, this.props.children)
      );
    }),
    (t.displayName = `IntlProvider`),
    (t.defaultProps = Ca),
    t
  );
})(R.PureComponent);
function qa(e) {
  return e;
}
function Ja(e) {
  return e;
}
var Ya = Ra(`formatDate`);
Ra(`formatTime`);
var Xa = Ra(`formatNumber`);
(Ra(`formatList`), Ra(`formatDisplayName`), La(`formatDate`), La(`formatTime`));
var Za = R.createContext(void 0),
  Qa = (e) => {
    let t = R.useContext(Za);
    if (e) return e;
    if (!t)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  $a = ({ client: e, children: t }) => (
    R.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, Un.jsx)(Za.Provider, { value: e, children: t })
  ),
  eo = R.createContext(!1),
  to = () => R.useContext(eo);
eo.Provider;
function no() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var ro = R.createContext(no()),
  io = () => R.useContext(ro),
  ao = (e, t) => {
    (e.suspense || e.throwOnError || e.experimental_prefetchInRender) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  oo = (e) => {
    R.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  so = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: i,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((i && e.data === void 0) || Ze(n, [e.error, r])),
  co = (e) => {
    if (e.suspense) {
      let t = 1e3,
        n = (e) => (e === `static` ? e : Math.max(e ?? t, t)),
        r = e.staleTime;
      ((e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r)),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t)));
    }
  },
  lo = (e, t) => e.isLoading && e.isFetching && !t,
  uo = (e, t) => e?.suspense && t.isPending,
  fo = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function po(e, t, n) {
  let r = to(),
    i = io(),
    a = Qa(n),
    o = a.defaultQueryOptions(e);
  (a.getDefaultOptions().queries?._experimental_beforeQuery?.(o),
    (o._optimisticResults = r ? `isRestoring` : `optimistic`),
    co(o),
    ao(o, i),
    oo(i));
  let s = !a.getQueryCache().get(o.queryHash),
    [c] = R.useState(() => new t(a, o)),
    l = c.getOptimisticResult(o),
    u = !r && e.subscribed !== !1;
  if (
    (R.useSyncExternalStore(
      R.useCallback(
        (e) => {
          let t = u ? c.subscribe(L.batchCalls(e)) : N;
          return (c.updateResult(), t);
        },
        [c, u],
      ),
      () => c.getCurrentResult(),
      () => c.getCurrentResult(),
    ),
    R.useEffect(() => {
      c.setOptions(o);
    }, [o, c]),
    uo(o, l))
  )
    throw fo(o, c, i);
  if (
    so({
      result: l,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: a.getQueryCache().get(o.queryHash),
      suspense: o.suspense,
    })
  )
    throw l.error;
  return (
    a.getDefaultOptions().queries?._experimental_afterQuery?.(o, l),
    o.experimental_prefetchInRender &&
      !M &&
      lo(l, r) &&
      (s ? fo(o, c, i) : a.getQueryCache().get(o.queryHash)?.promise)
        ?.catch(N)
        .finally(() => {
          c.updateResult();
        }),
    o.notifyOnChangeProps ? l : c.trackResult(l)
  );
}
function mo(e, t) {
  return po(e, dt, t);
}
function ho(e, t) {
  let n = Qa(t),
    [r] = R.useState(() => new Dt(n, e));
  R.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  let i = R.useSyncExternalStore(
      R.useCallback((e) => r.subscribe(L.batchCalls(e)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult(),
    ),
    a = R.useCallback(
      (e, t) => {
        r.mutate(e, t).catch(N);
      },
      [r],
    );
  if (i.error && Ze(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: a, mutateAsync: i.mutate };
}
var go = null;
function _o(e) {
  go = e;
}
function vo(e) {
  go?.(`log-message`, e);
}
var yo = {
  trace: (e, t) => {
    bo(`trace`, e, t);
  },
  debug: (e, t) => {
    bo(`debug`, e, t);
  },
  info: (e, t) => {
    bo(`info`, e, t);
  },
  warning: (e, t) => {
    bo(`warning`, e, t);
  },
  error: (e, t) => {
    bo(`error`, e, t);
  },
};
function bo(e, t, n) {
  vo({ level: e, message: t, ...(n == null ? {} : { tags: xo(n) }) });
}
function xo(e) {
  return { ...e, sensitive: e.sensitive ?? {} };
}
var So = Dn(`AppScope`),
  Co = `null`;
function wo(e) {
  return To(e, window);
}
function To(e, t) {
  let n = e.source,
    r = t.location.origin;
  if (
    !(n == null || n === t) ||
    (n === t && r !== `` && r !== Co && e.origin !== r)
  )
    return null;
  let i = e.data;
  return typeof i != `object` || !i || !Eo(i) ? null : i;
}
function Eo(e) {
  return typeof e.type == `string`;
}
var Do,
  Oo = {
    postMessage: (e) => {
      let t = !1,
        n = window.electronBridge;
      if (n?.sendMessageFromView) {
        let r = e;
        (n.sendMessageFromView(r).catch((t) => {
          r.type !== `log-message` &&
            yo.warning(`Failed to send message from view`, {
              safe: { type: r.type },
              sensitive: { message: e, error: t },
            });
        }),
          (t = !0));
      }
      let r = new CustomEvent(`codex-message-from-view`, { detail: e });
      (t && (r.__codexForwardedViaBridge = !0), window.dispatchEvent(r));
    },
    getState: () => Do,
    setState: (e) => {
      Do = e;
    },
  },
  $ = class e {
    static instance = null;
    static getInstance() {
      return ((this.instance ??= new e()), this.instance);
    }
    handlers = new Map();
    constructor() {
      ((this.dispatchMessage = this.dispatchMessage.bind(this)),
        (this.handleMessage = this.handleMessage.bind(this)),
        window.addEventListener(`message`, (e) => {
          this.handleMessage(e);
        }));
    }
    dispatchMessage(e, t) {
      if (Oo == null) throw Error(`VS Code API is unavailable`);
      Oo.postMessage({ ...t, type: e });
    }
    deliverMessage(e, t) {
      let n = this.handlers.get(e);
      if (!n) return;
      let r = (e, t) => {
        this.dispatchMessage(e, t);
      };
      for (let e of n) e(t, r);
    }
    dispatchHostMessage(e) {
      this.deliverMessage(e.type, e);
    }
    handleMessage(e) {
      let t = wo(e);
      t != null && this.deliverMessage(t.type, t);
    }
    subscribe(e, t) {
      let n = this.handlers.get(e) ?? new Set();
      return (
        n.add(t),
        this.handlers.set(e, n),
        () => {
          let n = this.handlers.get(e);
          n && (n.delete(t), n.size === 0 && this.handlers.delete(e));
        }
      );
    }
  };
function ko(e, t, n) {
  let r = (0, Vn.c)(9),
    i;
  r[0] === n
    ? (i = r[1])
    : ((i = n === void 0 ? [] : n), (r[0] = n), (r[1] = i));
  let a = i,
    o;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = $.getInstance()), (r[2] = o))
    : (o = r[2]);
  let s = o,
    c = (0, R.useEffectEvent)(t),
    l;
  r[3] !== c || r[4] !== e
    ? ((l = () => {
        let t = s.subscribe(e, c);
        return () => t();
      }),
      (r[3] = c),
      (r[4] = e),
      (r[5] = l))
    : (l = r[5]);
  let u;
  (r[6] !== a || r[7] !== e
    ? ((u = [s, e, ...a]), (r[6] = a), (r[7] = e), (r[8] = u))
    : (u = r[8]),
    (0, R.useEffect)(l, u));
}
var Ao = $.getInstance();
_o((e, t) => {
  Ao.dispatchMessage(e, t);
});
var jo = {
    FIVE_SECONDS: 5e3,
    FIFTEEN_SECONDS: 15e3,
    THIRTY_SECONDS: 3e4,
    ONE_MINUTE: 6e4,
    FIVE_MINUTES: 5 * 6e4,
    TEN_MINUTES: 10 * 6e4,
    SIX_HOURS: 360 * 6e4,
    INFINITE: 1 / 0,
  },
  Mo = class extends Error {
    constructor(e, t, n) {
      (super(e), (this.status = t), (this.errorCode = n));
    }
  },
  No = class e {
    static instance = null;
    static getInstance() {
      return ((this.instance ??= new e()), this.instance);
    }
    messageCounter = 0;
    pendingRequests = new Map();
    streamHandlers = new Map();
    constructor() {
      ((this.onFetchResponse = this.onFetchResponse.bind(this)),
        $.getInstance().subscribe(`fetch-response`, (e) => {
          this.onFetchResponse(e);
        }),
        (this.onFetchStreamEvent = this.onFetchStreamEvent.bind(this)),
        (this.onFetchStreamError = this.onFetchStreamError.bind(this)),
        (this.onFetchStreamComplete = this.onFetchStreamComplete.bind(this)),
        $.getInstance().subscribe(`fetch-stream-event`, (e) => {
          this.onFetchStreamEvent(e);
        }),
        $.getInstance().subscribe(`fetch-stream-error`, (e) => {
          this.onFetchStreamError(e);
        }),
        $.getInstance().subscribe(`fetch-stream-complete`, (e) => {
          this.onFetchStreamComplete(e);
        }));
    }
    onFetchResponse(e) {
      let t = this.pendingRequests.get(e.requestId);
      if (t)
        switch ((this.pendingRequests.delete(e.requestId), e.responseType)) {
          case `success`:
            try {
              e.status >= 200 && e.status < 300
                ? t.resolve({
                    status: e.status,
                    headers: e.headers,
                    body: JSON.parse(e.bodyJsonString),
                  })
                : t.reject(new Mo(e.bodyJsonString, e.status));
            } catch (e) {
              t.reject(
                e instanceof Error
                  ? e
                  : Error(
                      typeof e == `string`
                        ? e
                        : (JSON.stringify(e) ?? `Unknown error`),
                    ),
              );
            }
            break;
          case `error`:
            t.reject(new Mo(e.error, e.status, e.errorCode));
            break;
        }
    }
    onFetchStreamEvent(e) {
      let t = this.streamHandlers.get(e.requestId);
      t && t.onEvent?.(e);
    }
    onFetchStreamError(e) {
      let t = this.streamHandlers.get(e.requestId);
      t && (t.onError?.(e), this.streamHandlers.delete(e.requestId));
    }
    onFetchStreamComplete(e) {
      let t = this.streamHandlers.get(e.requestId);
      t && (t.onComplete?.(e), this.streamHandlers.delete(e.requestId));
    }
    async get(e, t, n) {
      return this.sendRequest(`GET`, e, { headers: t, signal: n });
    }
    async post(e, t, n, r) {
      return this.sendRequest(`POST`, e, { body: t, headers: n, signal: r });
    }
    async put(e, t, n, r) {
      return this.sendRequest(`PUT`, e, { body: t, headers: n, signal: r });
    }
    stream(e, t, n = {}) {
      let r = (++this.messageCounter).toString();
      return (
        this.streamHandlers.set(r, {
          onEvent: n.onEvent,
          onError: n.onError,
          onComplete: n.onComplete,
        }),
        $.getInstance().dispatchMessage(`fetch-stream`, {
          requestId: r,
          url: t,
          method: e,
          headers: n.headers,
          body: n.body,
        }),
        r
      );
    }
    cancelStream(e) {
      $.getInstance().dispatchMessage(`cancel-fetch-stream`, { requestId: e });
    }
    async sendRequest(e, t, n) {
      let r = (++this.messageCounter).toString();
      n?.signal?.addEventListener(`abort`, () => {
        $.getInstance().dispatchMessage(`cancel-fetch`, { requestId: r });
      });
      let i = {
        requestId: r,
        method: e,
        url: t,
        headers: n?.headers,
        body: n?.body,
      };
      return new Promise((e, t) => {
        (this.pendingRequests.set(r, { resolve: e, reject: t }),
          $.getInstance().dispatchMessage(`fetch`, i));
      });
    }
  },
  Po = `vscode`;
function Fo(e, t, n) {
  return [
    Po,
    e,
    ...(n == null ? [] : Array.isArray(n) ? n : [n]),
    t ? JSON.stringify(t) : void 0,
  ].filter((e) => e !== void 0);
}
function Io(e, t, ...[n]) {
  return Lo(e, t, n);
}
function Lo(e, t, n) {
  let { cacheKey: r, params: i, select: a, source: o, ...s } = n ?? {};
  return In(e, () => ({
    ...s,
    queryFn: () => Vo(t, i, a, void 0, o),
    queryKey: Fo(t, i, r),
  }));
}
function Ro(e, t, n) {
  return Mn(e, (e) => {
    let r = n?.(e),
      i = r != null && `params` in r ? r.params : void 0,
      a = r != null && `params` in r ? i : e,
      o = r?.cacheKey,
      s = r?.select,
      c = r?.source;
    return {
      ...(r == null
        ? {}
        : (() => {
            let { cacheKey: e, params: t, select: n, source: i, ...a } = r;
            return a;
          })()),
      queryFn: () => Vo(t, a, s, void 0, c),
      queryKey: Fo(t, a, o),
    };
  });
}
function zo(...e) {
  let t = (0, Vn.c)(29),
    [n, r] = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = r ?? {}), (t[0] = r), (t[1] = i));
  let { params: a, queryConfig: o, placeholderData: s, source: c } = i,
    l;
  t[2] === o ? (l = t[3]) : ((l = o ?? {}), (t[2] = o), (t[3] = l));
  let {
      cacheKey: u,
      intervalMs: d,
      refetchIntervalInBackground: f,
      enabled: p,
      gcTime: m,
      refetchOnMount: h,
      refetchOnWindowFocus: g,
      staleTime: _,
      initialData: v,
    } = l,
    y = _ ?? jo.FIVE_SECONDS,
    b;
  t[4] !== u || t[5] !== a || t[6] !== n
    ? ((b = Fo(n, a, u)), (t[4] = u), (t[5] = a), (t[6] = n), (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== a || t[9] !== c || t[10] !== n
    ? ((x = async () =>
        (
          await No.getInstance().post(
            `vscode://codex/${n}`,
            JSON.stringify(a),
            Uo(c),
          )
        ).body),
      (t[8] = a),
      (t[9] = c),
      (t[10] = n),
      (t[11] = x))
    : (x = t[11]);
  let S = r?.select,
    C;
  t[12] === v
    ? (C = t[13])
    : ((C = v === void 0 ? {} : { initialData: v }), (t[12] = v), (t[13] = C));
  let w;
  t[14] === s
    ? (w = t[15])
    : ((w = s === void 0 ? {} : { placeholderData: s }),
      (t[14] = s),
      (t[15] = w));
  let T;
  return (
    t[16] !== p ||
    t[17] !== m ||
    t[18] !== d ||
    t[19] !== f ||
    t[20] !== h ||
    t[21] !== g ||
    t[22] !== y ||
    t[23] !== b ||
    t[24] !== x ||
    t[25] !== S ||
    t[26] !== C ||
    t[27] !== w
      ? ((T = {
          queryKey: b,
          queryFn: x,
          select: S,
          refetchInterval: d,
          refetchIntervalInBackground: f,
          refetchOnMount: h,
          refetchOnWindowFocus: g,
          enabled: p,
          gcTime: m,
          staleTime: y,
          ...C,
          ...w,
        }),
        (t[16] = p),
        (t[17] = m),
        (t[18] = d),
        (t[19] = f),
        (t[20] = h),
        (t[21] = g),
        (t[22] = y),
        (t[23] = b),
        (t[24] = x),
        (t[25] = S),
        (t[26] = C),
        (t[27] = w),
        (t[28] = T))
      : (T = t[28]),
    mo(T)
  );
}
async function Bo(...e) {
  let [t, n] = e,
    { params: r, select: i, signal: a, source: o } = n ?? {};
  return Vo(t, r, i, a, o);
}
async function Vo(e, t, n, r, i) {
  let a = (
    await No.getInstance().post(
      `vscode://codex/${e}`,
      JSON.stringify(t),
      Uo(i),
      r,
    )
  ).body;
  return n ? n(a) : a;
}
function Ho(e, t) {
  let n = (0, Vn.c)(6),
    r = t?.source,
    i;
  n[0] !== r || n[1] !== e
    ? ((i = async (t) =>
        (
          await No.getInstance().post(
            `vscode://codex/${e}`,
            JSON.stringify(t),
            Uo(r),
          )
        ).body),
      (n[0] = r),
      (n[1] = e),
      (n[2] = i))
    : (i = n[2]);
  let a;
  return (
    n[3] !== t || n[4] !== i
      ? ((a = { mutationFn: i, ...t, networkMode: `always` }),
        (n[3] = t),
        (n[4] = i),
        (n[5] = a))
      : (a = n[5]),
    ho(a)
  );
}
function Uo(e) {
  if (e != null) return { [n]: e };
}
var Wo = Io(So, `get-settings`, { staleTime: jo.FIVE_SECONDS });
function Go(e) {
  return nr(Wo).data?.values[e.key] ?? e.default;
}
function Ko() {
  return nr(Wo).isLoading;
}
function qo(e, t) {
  return e(Wo).data?.values[t.key] ?? t.default;
}
async function Jo(e, t, n, r) {
  let i = e.query.snapshot(Wo);
  await i.cancel();
  let a = i.getData(),
    o = r?.optimistic ?? !0;
  o && i.setData({ values: { ...a?.values, [t.key]: n } });
  try {
    (await Zo(t, n), o || i.setData({ values: { ...a?.values, [t.key]: n } }));
  } catch (e) {
    throw (i.setData(a), e);
  } finally {
    (await i.invalidate(),
      Ao.dispatchMessage(`query-cache-invalidate`, {
        queryKey: [...i.queryKey],
      }));
  }
}
function Yo(e, t, n) {
  let r = e.query.snapshot(Wo),
    i = r.getData();
  r.setData({ values: { ...i?.values, [t.key]: n } });
}
async function Xo(e) {
  return (
    (await Bo(`get-setting`, { params: { key: e.key } })).value ?? e.default
  );
}
async function Zo(e, t) {
  await Bo(`set-setting`, { params: { key: e.key, value: t } });
}
export {
  jn as $,
  lo as A,
  Ja as B,
  yo as C,
  me as Ct,
  co as D,
  po as E,
  to as F,
  Na as G,
  Ka as H,
  $a as I,
  rr as J,
  Jn as K,
  Qa as L,
  so as M,
  oo as N,
  fo as O,
  io as P,
  Pn as Q,
  Ya as R,
  So as S,
  Se as St,
  mo as T,
  Wa as U,
  qa as V,
  Va as W,
  ar as X,
  ir as Y,
  nr as Z,
  jo as _,
  ze as _t,
  Go as a,
  On as at,
  ko as b,
  k as bt,
  Po as c,
  kt as ct,
  Ro as d,
  vt as dt,
  kn as et,
  Io as f,
  dt as ft,
  No as g,
  N as gt,
  Mo as h,
  Ke as ht,
  Jo as i,
  Dn as it,
  ao as j,
  uo as k,
  Bo as l,
  xt as lt,
  Ho as m,
  Qe as mt,
  Xo as n,
  Mn as nt,
  Ko as o,
  An as ot,
  zo as p,
  L as pt,
  Yn as q,
  Yo as r,
  In as rt,
  Zo as s,
  Ht as st,
  qo as t,
  Nn as tt,
  Fo as u,
  St as ut,
  $ as v,
  Be as vt,
  ho as w,
  d as wt,
  wo as x,
  be as xt,
  Ao as y,
  A as yt,
  Xa as z,
};
//# sourceMappingURL=setting-storage.js.map
