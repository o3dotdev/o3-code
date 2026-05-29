import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { t as r } from "./clsx-BcPLHiun.js";
import { t as i } from "./react-dom-CvzHKZGB.js";
import {
  a,
  c as o,
  l as s,
  n as c,
  o as l,
  s as u,
} from "./floating-ui.react-dom.js";
import { wt as d } from "./setting-storage.js";
import { n as f } from "./window-zoom-context.js";
import { t as p } from "./tooltip-dismiss.js";
var m = d(),
  h = n();
function g(e) {
  let t = (0, m.c)(6),
    { keysLabel: n, variant: i, className: a } = e,
    o =
      (i === void 0 ? `default` : i) === `button`
        ? `h-4 min-w-4 items-center justify-center !px-1.5 !py-0 !leading-4`
        : `!px-1.5 !py-0.5 !leading-none`,
    s;
  t[0] !== a || t[1] !== o
    ? ((s = r(
        `inline-flex !rounded-md !border-0 !bg-current/10 !font-sans !text-xs !text-current !shadow-none`,
        o,
        a,
      )),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let c;
  return (
    t[3] !== n || t[4] !== s
      ? ((c = (0, h.jsx)(`kbd`, { className: s, children: n })),
        (t[3] = n),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
var _ = e(t(), 1),
  v = e(i(), 1),
  y = 700,
  b = 300,
  x = `default`,
  S = 100,
  C = `[data-tooltip-overflow-target]`,
  w = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
    toJSON() {
      return {};
    },
  },
  T = (0, _.createContext)(void 0),
  E = (0, _.createContext)(null),
  ee = (0, _.createContext)(null);
function D(e) {
  let t = (0, m.c)(22),
    { delayDuration: n, skipDelayDuration: r, children: i } = e,
    a = n === void 0 ? y : n,
    o = r === void 0 ? b : r,
    [s, c] = (0, _.useState)(null),
    [l, u] = (0, _.useState)(null),
    [d, f] = (0, _.useState)(null),
    [g, v] = (0, _.useState)(!1),
    S = (0, _.useRef)(null),
    C = (0, _.useRef)(!0),
    w = (0, _.useRef)(null),
    D;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        w.current == null ||
          typeof window > `u` ||
          (window.clearTimeout(w.current), (w.current = null));
      }),
      (t[0] = D))
    : (D = t[0]);
  let k = D,
    A;
  t[1] === o
    ? (A = t[2])
    : ((A = (e, t) => {
        let n = t === void 0 ? x : t;
        if (C.current) {
          if (((S.current = e), u(e), k(), e != null)) {
            (f(n), v(!0));
            return;
          }
          if (o === 0 || typeof window > `u`) {
            (f(null), v(!1));
            return;
          }
          w.current = window.setTimeout(() => {
            ((w.current = null), f(null), v(!1));
          }, o);
        }
      }),
      (t[1] = o),
      (t[2] = A));
  let j = A,
    M;
  t[3] === j
    ? (M = t[4])
    : ((M = (e) => {
        S.current === e && j(null);
      }),
      (t[3] = j),
      (t[4] = M));
  let N = M,
    P;
  t[5] !== d || t[6] !== l || t[7] !== N || t[8] !== j || t[9] !== g
    ? ((P = {
        activeSkipDelayKey: d,
        activeTooltipId: l,
        clearActiveTooltipId: N,
        setActiveTooltipId: j,
        skipDelayActive: g,
      }),
      (t[5] = d),
      (t[6] = l),
      (t[7] = N),
      (t[8] = j),
      (t[9] = g),
      (t[10] = P))
    : (P = t[10]);
  let F = P,
    I,
    L;
  (t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        if (typeof window > `u`) return;
        C.current = !0;
        let e = () => {
          (c(O), (S.current = null), u(null), f(null), k(), v(!1));
        };
        return (
          window.addEventListener(p, e),
          () => {
            ((C.current = !1), window.removeEventListener(p, e), k());
          }
        );
      }),
      (L = [k]),
      (t[11] = I),
      (t[12] = L))
    : ((I = t[11]), (L = t[12])),
    (0, _.useEffect)(I, L));
  let R;
  t[13] !== F || t[14] !== i
    ? ((R = (0, h.jsx)(ee.Provider, { value: F, children: i })),
      (t[13] = F),
      (t[14] = i),
      (t[15] = R))
    : (R = t[15]);
  let z;
  t[16] !== a || t[17] !== R
    ? ((z = (0, h.jsx)(E.Provider, { value: a, children: R })),
      (t[16] = a),
      (t[17] = R),
      (t[18] = z))
    : (z = t[18]);
  let B;
  return (
    t[19] !== s || t[20] !== z
      ? ((B = (0, h.jsx)(T.Provider, { value: s, children: z })),
        (t[19] = s),
        (t[20] = z),
        (t[21] = B))
      : (B = t[21]),
    B
  );
}
function O(e) {
  return (e ?? 0) + 1;
}
function k(e) {
  let t = (0, m.c)(13),
    n = (0, _.useContext)(T),
    r = (0, _.useContext)(E),
    i = (0, _.useRef)(n),
    a = e.open !== void 0,
    o = e.onOpenChange,
    s,
    c;
  if (
    (t[0] !== n || t[1] !== a || t[2] !== o
      ? ((s = () => {
          i.current !== n && ((i.current = n), !(n == null || !a) && o?.(!1));
        }),
        (c = [n, a, o]),
        (t[0] = n),
        (t[1] = a),
        (t[2] = o),
        (t[3] = s),
        (t[4] = c))
      : ((s = t[3]), (c = t[4])),
    (0, _.useEffect)(s, c),
    e.disabled || e.tooltipContent == null)
  ) {
    let n;
    return (
      t[7] === e.children
        ? (n = t[8])
        : ((n = (0, h.jsx)(h.Fragment, { children: e.children })),
          (t[7] = e.children),
          (t[8] = n)),
      n
    );
  }
  let l = a ? void 0 : (n ?? void 0),
    u = e.delayDuration ?? r ?? y,
    d;
  return (
    t[9] !== e || t[10] !== l || t[11] !== u
      ? ((d = (0, h.jsx)(A, { ...e, delayDuration: u }, l)),
        (t[9] = e),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function A({
  children: e,
  delayOpen: t,
  open: n,
  defaultOpen: i,
  onOpenChange: a,
  tooltipContent: o,
  shortcut: s,
  sideOffset: c = 2,
  side: l = `top`,
  variant: u = `tooltip`,
  align: d = `center`,
  alignOffset: f,
  disablePadding: p = !1,
  disabled: m,
  triggerAsChild: v = !0,
  triggerRef: y,
  closeOnTriggerBlur: b = !0,
  delayDuration: C,
  interactive: w = !1,
  tooltipClassName: T,
  tooltipBodyClassName: E,
  tooltipMaxWidth: D,
  skipDelayKey: O = x,
  openWhen: k = `always`,
  portalContainer: A,
  className: M,
  ref: z,
  ...B
}) {
  let V = (0, _.useId)(),
    [te, ne] = (0, _.useState)(i === !0),
    H = (0, _.useRef)(null),
    U = (0, _.useRef)(null),
    W = (0, _.useRef)(null),
    G = (0, _.useContext)(ee),
    re = G?.clearActiveTooltipId,
    ie = n !== void 0,
    K = n ?? te;
  (0, _.useEffect)(
    () => () => {
      (typeof window < `u` &&
        (U.current != null &&
          (window.clearTimeout(U.current), (U.current = null)),
        W.current != null &&
          (window.clearTimeout(W.current), (W.current = null))),
        re?.(V));
    },
    [re, V],
  );
  let q = (0, _.useCallback)(
      (e) => {
        (ie || ne(e),
          e ? G?.setActiveTooltipId(V, O) : G?.clearActiveTooltipId(V),
          a?.(e));
      },
      [G, ie, a, O, V],
    ),
    J = (0, _.useCallback)(() => {
      U.current == null ||
        typeof window > `u` ||
        (window.clearTimeout(U.current), (U.current = null));
    }, []),
    Y = (0, _.useCallback)(() => {
      W.current == null ||
        typeof window > `u` ||
        (window.clearTimeout(W.current), (W.current = null));
    }, []),
    ae = (e) => {
      if (
        (Y(),
        !(K || U.current != null) &&
          !(k === `trigger-overflows` && !F(H.current)))
      ) {
        if (e === 0 || typeof window > `u`) {
          q(!0);
          return;
        }
        U.current = window.setTimeout(() => {
          ((U.current = null),
            !(k === `trigger-overflows` && !F(H.current)) && q(!0));
        }, e);
      }
    },
    X = (0, _.useCallback)(() => {
      (J(), Y(), K && q(!1));
    }, [Y, J, K, q]),
    oe = () => {
      if ((J(), Y(), typeof window > `u`)) {
        X();
        return;
      }
      W.current = window.setTimeout(() => {
        ((W.current = null), X());
      }, S);
    };
  (0, _.useEffect)(() => {
    G?.activeTooltipId == null || G.activeTooltipId === V || !K || X();
  }, [G?.activeTooltipId, X, K, V]);
  let se = (e) => {
      if (e.pointerType === `touch`) return;
      let n = C ?? 0;
      (t && (n = 250),
        G?.skipDelayActive === !0 && G.activeSkipDelayKey === O && (n = 0),
        ae(n));
    },
    ce = K ? `delayed-open` : `closed`,
    Z = {
      "aria-describedby": K ? V : void 0,
      "data-state": ce,
      onBlur(e) {
        b && X();
      },
      onContextMenu(e) {
        (J(), X());
      },
      onFocus(e) {
        N(e) && ae(0);
      },
      onKeyDown(e) {
        e.key === `Escape` && X();
      },
      onPointerEnter(e) {
        se(e);
      },
      onPointerLeave(e) {
        if ((J(), w)) {
          oe();
          return;
        }
        X();
      },
      onPointerMove(e) {
        se(e);
      },
    },
    Q = {
      ...B,
      ...Z,
      className: M,
      onBlur(e) {
        (B.onBlur?.(e), Z.onBlur?.(e));
      },
      onContextMenu(e) {
        (B.onContextMenu?.(e), Z.onContextMenu?.(e));
      },
      onFocus(e) {
        (B.onFocus?.(e), Z.onFocus?.(e));
      },
      onKeyDown(e) {
        (B.onKeyDown?.(e), Z.onKeyDown?.(e));
      },
      onPointerEnter(e) {
        (B.onPointerEnter?.(e), Z.onPointerEnter?.(e));
      },
      onPointerLeave(e) {
        (B.onPointerLeave?.(e), Z.onPointerLeave?.(e));
      },
      onPointerMove(e) {
        (B.onPointerMove?.(e), Z.onPointerMove?.(e));
      },
    },
    le = (e) => {
      H.current = e;
    },
    $ = (e) => {
      (le(e), I(z, e));
    },
    ue;
  return (
    (ue = v
      ? (0, _.isValidElement)(e)
        ? typeof e.type == `string`
          ? (0, _.cloneElement)(e, {
              ...Q,
              "aria-describedby": P(
                e.props[`aria-describedby`],
                Z[`aria-describedby`],
              ),
              className: r(e.props.className, M),
              ref: (t) => {
                ($(t), I(e.props.ref, t), L(y, t));
              },
              onBlur: (t) => {
                (e.props.onBlur?.(t), Q.onBlur?.(t));
              },
              onContextMenu: (t) => {
                (e.props.onContextMenu?.(t), Q.onContextMenu?.(t));
              },
              onFocus: (t) => {
                (e.props.onFocus?.(t), Q.onFocus?.(t));
              },
              onKeyDown: (t) => {
                (e.props.onKeyDown?.(t), Q.onKeyDown?.(t));
              },
              onPointerEnter: (t) => {
                (e.props.onPointerEnter?.(t), Q.onPointerEnter?.(t));
              },
              onPointerLeave: (t) => {
                (e.props.onPointerLeave?.(t), Q.onPointerLeave?.(t));
              },
              onPointerMove: (t) => {
                (e.props.onPointerMove?.(t), Q.onPointerMove?.(t));
              },
            })
          : (0, h.jsx)(`span`, {
              ref: (e) => {
                let t = e?.firstElementChild ?? null;
                $(R(t) ? t : e);
              },
              ...Q,
              className: r(`contents`, M),
              children: e,
            })
        : (0, h.jsx)(`span`, { ref: $, ...Q, children: e })
      : (0, h.jsx)(`button`, {
          ref: (e) => {
            ($(e), L(y, e));
          },
          type: `button`,
          ...Q,
          children: e,
        })),
    (0, h.jsxs)(h.Fragment, {
      children: [
        ue,
        K
          ? (0, h.jsx)(j, {
              id: V,
              align: d,
              alignOffset: f,
              className: T,
              disablePadding: p,
              maxWidth: D,
              onPointerEnter: w ? Y : void 0,
              onPointerLeave: w ? X : void 0,
              portalContainer: A,
              referenceElementRef: H,
              side: l,
              sideOffset: c,
              variant: u,
              children: (0, h.jsxs)(`div`, {
                className: r(
                  `flex items-center gap-2`,
                  u === `hoverCard` && `min-h-0 flex-1`,
                ),
                children: [
                  (0, h.jsx)(`div`, {
                    className: r(
                      `min-w-0`,
                      u === `hoverCard` && `flex min-h-0 w-full`,
                      E,
                    ),
                    children: o,
                  }),
                  s ? (0, h.jsx)(g, { keysLabel: s }) : null,
                ],
              }),
            })
          : null,
      ],
    })
  );
}
function j({
  align: e,
  alignOffset: t,
  children: n,
  className: i,
  disablePadding: d,
  id: p,
  maxWidth: m,
  onPointerEnter: g,
  onPointerLeave: y,
  portalContainer: b,
  referenceElementRef: x,
  side: S,
  sideOffset: C,
  variant: T,
}) {
  let E = f(),
    [ee] = (0, _.useState)(() => ({
      get contextElement() {
        return x.current ?? void 0;
      },
      getBoundingClientRect() {
        return x.current?.getBoundingClientRect() ?? w;
      },
    })),
    D = o({
      elements: { reference: ee },
      open: !0,
      placement: M(S, e),
      middleware: [
        a({ mainAxis: C, crossAxis: t }),
        c({ padding: 8 }),
        l({ padding: 8 }),
        u({
          padding: 8,
          apply({
            availableWidth: e,
            availableHeight: t,
            elements: n,
            rects: r,
          }) {
            (n.floating.style.setProperty(
              `--radix-tooltip-trigger-width`,
              `${Math.max(0, r.reference.width)}px`,
            ),
              n.floating.style.setProperty(
                `--radix-tooltip-content-available-width`,
                `${Math.max(0, e)}px`,
              ),
              n.floating.style.setProperty(
                `--radix-tooltip-content-available-height`,
                `${Math.max(0, t)}px`,
              ));
          },
        }),
      ],
      whileElementsMounted: s,
    });
  return typeof document > `u`
    ? null
    : (0, v.createPortal)(
        (0, h.jsx)(`div`, {
          id: p,
          ref: D.refs.setFloating,
          role: `tooltip`,
          className: r(
            T === `hoverCard`
              ? `bg-token-dropdown-background/90 text-token-foreground ring-token-border z-50 m-px flex w-fit select-none flex-col rounded-xl text-sm whitespace-normal break-words shadow-xl-spread ring-[0.5px] backdrop-blur-sm`
              : `bg-token-dropdown-background text-token-foreground border-token-border z-50 w-fit select-none rounded-lg border text-sm whitespace-normal break-words`,
            T === `tooltip` && !d && `px-2 py-1`,
            i,
          ),
          style: {
            ...D.floatingStyles,
            zoom: b == null && E !== 1 ? E : void 0,
            maxWidth:
              m ??
              `min(20rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
            maxHeight: `min(var(--radix-tooltip-content-available-height), calc(100vh - 16px))`,
          },
          onPointerEnter: g,
          onPointerLeave: y,
          children: n,
        }),
        b ?? document.body,
      );
}
function M(e, t) {
  return t == null || t === `center` ? e : `${e}-${t}`;
}
function N(e) {
  try {
    return e.currentTarget.matches(`:focus-visible`);
  } catch {
    return !1;
  }
}
function P(e, t) {
  return e == null ? t : t == null ? e : `${e} ${t}`;
}
function F(e) {
  let t = e?.querySelector(C) ?? e;
  return (
    t != null &&
    (t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight)
  );
}
function I(e, t) {
  if (e != null) {
    if (typeof e == `function`) {
      e(t);
      return;
    }
    e.current = t;
  }
}
function L(e, t) {
  if (e != null && !(t != null && !z(t))) {
    if (typeof e == `function`) {
      e(t);
      return;
    }
    e.current = t;
  }
}
function R(e) {
  let t = e?.ownerDocument.defaultView;
  return t == null ? e instanceof HTMLElement : e instanceof t.HTMLElement;
}
function z(e) {
  let t = e?.ownerDocument.defaultView;
  return t == null
    ? e instanceof HTMLButtonElement
    : e instanceof t.HTMLButtonElement;
}
export { D as n, g as r, k as t };
//# sourceMappingURL=tooltip-CDzchJxN.js.map
