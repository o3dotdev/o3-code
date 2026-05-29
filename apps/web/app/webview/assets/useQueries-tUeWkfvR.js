import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t } from "./jsx-runtime.js";
import {
  A as n,
  D as r,
  F as i,
  L as a,
  M as o,
  N as s,
  O as c,
  P as l,
  _t as u,
  ft as d,
  gt as f,
  j as p,
  k as m,
  pt as h,
  vt as g,
  yt as _,
} from "./setting-storage.js";
function v(e, t) {
  let n = new Set(t);
  return e.filter((e) => !n.has(e));
}
function y(e, t, n) {
  let r = e.slice(0);
  return ((r[t] = n), r);
}
var b = class extends _ {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    #c = [];
    constructor(e, t, n) {
      (super(),
        (this.#e = e),
        (this.#r = n),
        (this.#n = []),
        (this.#i = []),
        (this.#t = []),
        this.setQueries(t));
    }
    onSubscribe() {
      this.listeners.size === 1 &&
        this.#i.forEach((e) => {
          e.subscribe((t) => {
            this.#f(e, t);
          });
        });
    }
    onUnsubscribe() {
      this.listeners.size || this.destroy();
    }
    destroy() {
      ((this.listeners = new Set()),
        this.#i.forEach((e) => {
          e.destroy();
        }));
    }
    setQueries(e, t) {
      ((this.#n = e),
        (this.#r = t),
        h.batch(() => {
          let e = this.#i,
            t = this.#d(this.#n);
          ((this.#c = t),
            t.forEach((e) => e.observer.setOptions(e.defaultedQueryOptions)));
          let n = t.map((e) => e.observer),
            r = n.map((e) => e.getCurrentResult()),
            i = e.length !== n.length,
            a = n.some((t, n) => t !== e[n]),
            o = i || a,
            s = o
              ? !0
              : r.some((e, t) => {
                  let n = this.#t[t];
                  return !n || !g(e, n);
                });
          (!o && !s) ||
            (o && (this.#i = n),
            (this.#t = r),
            this.hasListeners() &&
              (o &&
                (v(e, n).forEach((e) => {
                  e.destroy();
                }),
                v(n, e).forEach((e) => {
                  e.subscribe((t) => {
                    this.#f(e, t);
                  });
                })),
              this.#p()));
        }));
    }
    getCurrentResult() {
      return this.#t;
    }
    getQueries() {
      return this.#i.map((e) => e.getCurrentQuery());
    }
    getObservers() {
      return this.#i;
    }
    getOptimisticResult(e, t) {
      let n = this.#d(e),
        r = n.map((e) =>
          e.observer.getOptimisticResult(e.defaultedQueryOptions),
        );
      return [r, (e) => this.#u(e ?? r, t), () => this.#l(r, n)];
    }
    #l(e, t) {
      return t.map((n, r) => {
        let i = e[r];
        return n.defaultedQueryOptions.notifyOnChangeProps
          ? i
          : n.observer.trackResult(i, (e) => {
              t.forEach((t) => {
                t.observer.trackProp(e);
              });
            });
      });
    }
    #u(e, t) {
      return t
        ? ((!this.#a || this.#t !== this.#s || t !== this.#o) &&
            ((this.#o = t), (this.#s = this.#t), (this.#a = u(this.#a, t(e)))),
          this.#a)
        : e;
    }
    #d(e) {
      let t = new Map(this.#i.map((e) => [e.options.queryHash, e])),
        n = [];
      return (
        e.forEach((e) => {
          let r = this.#e.defaultQueryOptions(e),
            i = t.get(r.queryHash);
          i
            ? n.push({ defaultedQueryOptions: r, observer: i })
            : n.push({ defaultedQueryOptions: r, observer: new d(this.#e, r) });
        }),
        n
      );
    }
    #f(e, t) {
      let n = this.#i.indexOf(e);
      n !== -1 && ((this.#t = y(this.#t, n, t)), this.#p());
    }
    #p() {
      if (this.hasListeners()) {
        let e = this.#a,
          t = this.#l(this.#t, this.#c);
        e !== this.#u(t, this.#r?.combine) &&
          h.batch(() => {
            this.listeners.forEach((e) => {
              e(this.#t);
            });
          });
      }
    }
  },
  x = e(t(), 1);
function S({ queries: e, ...t }, u) {
  let g = a(u),
    _ = i(),
    v = l(),
    y = x.useMemo(
      () =>
        e.map((e) => {
          let t = g.defaultQueryOptions(e);
          return ((t._optimisticResults = _ ? `isRestoring` : `optimistic`), t);
        }),
      [e, g, _],
    );
  (y.forEach((e) => {
    (r(e), p(e, v));
  }),
    s(v));
  let [S] = x.useState(() => new b(g, y, t)),
    [C, w, T] = S.getOptimisticResult(y, t.combine),
    E = !_ && t.subscribed !== !1;
  (x.useSyncExternalStore(
    x.useCallback((e) => (E ? S.subscribe(h.batchCalls(e)) : f), [S, E]),
    () => S.getCurrentResult(),
    () => S.getCurrentResult(),
  ),
    x.useEffect(() => {
      S.setQueries(y, t);
    }, [y, t, S]));
  let D = C.some((e, t) => m(y[t], e))
    ? C.flatMap((e, t) => {
        let r = y[t];
        if (r) {
          let t = new d(g, r);
          if (m(r, e)) return c(r, t, v);
          n(e, _) && c(r, t, v);
        }
        return [];
      })
    : [];
  if (D.length > 0) throw Promise.all(D);
  let O = C.find((e, t) => {
    let n = y[t];
    return (
      n &&
      o({
        result: e,
        errorResetBoundary: v,
        throwOnError: n.throwOnError,
        query: g.getQueryCache().get(n.queryHash),
        suspense: n.suspense,
      })
    );
  });
  if (O?.error) throw O.error;
  return w(T());
}
export { S as t };
//# sourceMappingURL=useQueries-tUeWkfvR.js.map
