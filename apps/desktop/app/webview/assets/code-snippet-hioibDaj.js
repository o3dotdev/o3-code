const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["./highlight-code.js", "./chunk-Bj-mKKzh.js", "./core.js"]),
) => i.map((i) => d[i]);
import { s as e } from "./chunk-Bj-mKKzh.js";
import { t } from "./preload-helper.js";
import { n, t as r } from "./jsx-runtime.js";
import { t as i } from "./clsx-BcPLHiun.js";
import { G as a, wt as o } from "./setting-storage.js";
import { t as s } from "./use-is-dark-BHkhnHe-.js";
import { t as c } from "./tooltip-CDzchJxN.js";
import { t as l } from "./button.js";
import { t as u } from "./data-url-from-svg.js";
import { t as d } from "./copy-to-clipboard-C2Mq2hN-.js";
import { t as f } from "./copy-button.js";
var p =
  Number.isNaN ||
  function (e) {
    return typeof e == `number` && e !== e;
  };
function m(e, t) {
  return !!(e === t || (p(e) && p(t)));
}
function h(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!m(e[n], t[n])) return !1;
  return !0;
}
function g(e, t) {
  t === void 0 && (t = h);
  var n = null;
  function r() {
    var r = [...arguments];
    if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
    var i = e.apply(this, r);
    return ((n = { lastResult: i, lastArgs: r, lastThis: this }), i);
  }
  return (
    (r.clear = function () {
      n = null;
    }),
    r
  );
}
var _ = o(),
  v = r();
function y(e) {
  if (typeof document > `u`) throw Error(`not supported in SSR`);
  let t = document.createElement(`template`);
  return ((t.innerHTML = e), t.innerHTML);
}
var b = (e) => {
    let t = (0, _.c)(10),
      n,
      r;
    t[0] === e
      ? ((n = t[1]), (r = t[2]))
      : (({ svgString: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
    let i;
    t[3] === r ? (i = t[4]) : ((i = y(r)), (t[3] = r), (t[4] = i));
    let a = i;
    if (!a) return null;
    let o;
    t[5] === a ? (o = t[6]) : ((o = u(a)), (t[5] = a), (t[6] = o));
    let s;
    return (
      t[7] !== n || t[8] !== o
        ? ((s = (0, v.jsx)(`img`, { src: o, ...n })),
          (t[7] = n),
          (t[8] = o),
          (t[9] = s))
        : (s = t[9]),
      s
    );
  },
  x = e(n()),
  S = (e) =>
    (0, v.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: 20,
      height: 20,
      fill: `currentColor`,
      viewBox: `0 0 20 20`,
      ...e,
      children: (0, v.jsx)(`path`, {
        d: `M10.33 12.668c.367 0 .665.298.665.665l.002 3.333a.665.665 0 0 1-1.33.001l-.002-3.334c0-.367.298-.665.665-.665Zm3.364-5.639a.665.665 0 0 1 .94 0l2.5 2.5c.26.26.26.682 0 .942l-2.5 2.5a.666.666 0 0 1-.94-.942l1.365-1.364H3.33a.665.665 0 1 1 0-1.33h11.728l-1.365-1.364a.666.666 0 0 1 0-.942ZM10.33 2.668c.367 0 .665.298.665.665l.002 3.333a.665.665 0 0 1-1.33.001l-.002-3.334c0-.367.298-.665.665-.665Z`,
      }),
    }),
  C = (e) =>
    (0, v.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: 20,
      height: 20,
      fill: `currentColor`,
      viewBox: `0 0 20 20`,
      ...e,
      children: (0, v.jsx)(`path`, {
        d: `M15.672 2.668c.367 0 .665.298.665.665l-.002 13.333a.665.665 0 0 1-1.33 0l.002-13.333c0-.367.298-.665.665-.665ZM9.586 6.002a3.582 3.582 0 0 1 0 7.163H5.777l.949.948a.665.665 0 1 1-.94.94l-2.084-2.082a.667.667 0 0 1 0-.94l2.083-2.085a.666.666 0 0 1 .94.942l-.947.947h3.808a2.251 2.251 0 0 0 0-4.503H4.169a.666.666 0 0 1 0-1.33h5.417Z`,
      }),
    }),
  w = g(() =>
    t(
      () => import(`./highlight-code.js`),
      __vite__mapDeps([0, 1, 2]),
      import.meta.url,
    ),
  ),
  T = `
`,
  E = 120,
  D = x.memo(function (e) {
    let t = (0, _.c)(2),
      { html: n } = e,
      r;
    return (
      t[0] === n
        ? (r = t[1])
        : ((r = (0, v.jsx)(`span`, { dangerouslySetInnerHTML: { __html: n } })),
          (t[0] = n),
          (t[1] = r)),
      r
    );
  });
function O(e) {
  let t = (0, _.c)(46),
    {
      wrapperClassName: n,
      codeClassName: r,
      language: i,
      content: o,
      shouldWrapCode: s,
      removeTopBorderRadius: u,
      showActionBar: p,
      showStickyRightContent: m,
      codeContainerClassName: h,
      title: g,
      copyButtonText: y,
      onToggleWrapCode: O,
    } = e,
    k = s === void 0 ? !1 : s,
    A = p === void 0 ? !0 : p,
    j = m === void 0 ? !0 : m,
    re = (0, x.useRef)(null),
    ie = ee,
    M;
  t[0] === o
    ? (M = t[1])
    : ((M = (e) => {
        d(o, e);
      }),
      (t[0] = o),
      (t[1] = M));
  let N = M,
    P = a(),
    F;
  t[2] !== P || t[3] !== k
    ? ((F = k
        ? P.formatMessage({
            id: `codeSnippet.wrap.disable`,
            defaultMessage: `Disable word wrap`,
            description: `Button to disable word wrap for a code snippet`,
          })
        : P.formatMessage({
            id: `codeSnippet.wrap.enable`,
            defaultMessage: `Enable word wrap`,
            description: `Button to enable word wrap for a code snippet`,
          })),
      (t[2] = P),
      (t[3] = k),
      (t[4] = F))
    : (F = t[4]);
  let I = F,
    L = k ? C : S,
    [R, ae] = (0, x.useState)(null),
    z;
  t[5] !== o || t[6] !== i
    ? ((z = {
        disposed: !1,
        latestContent: o,
        latestLanguage: i,
        lastStartedAtMs: null,
        timeoutHandle: null,
      }),
      (t[5] = o),
      (t[6] = i),
      (t[7] = z))
    : (z = t[7]);
  let B = (0, x.useRef)(z),
    V,
    H;
  (t[8] !== o || t[9] !== i
    ? ((V = () => {
        let e = B.current;
        if (
          ((e.latestContent = o),
          (e.latestLanguage = i),
          e.timeoutHandle != null)
        )
          return;
        let t = performance.now(),
          n = e.lastStartedAtMs == null ? E : t - e.lastStartedAtMs,
          r = Math.max(0, E - n),
          a = () => {
            if (((e.timeoutHandle = null), e.disposed)) return;
            let t = e.latestContent,
              n = e.latestLanguage;
            ((e.lastStartedAtMs = performance.now()),
              w().then((r) => {
                if (!(e.disposed || r == null))
                  try {
                    ae(r.highlightCode(t, n));
                  } catch (e) {
                    let t = e;
                    if (
                      !(
                        t instanceof Error &&
                        /Unknown language/i.test(t.message)
                      )
                    )
                      throw t;
                  }
              }));
          };
        if (r === 0) {
          a();
          return;
        }
        e.timeoutHandle = setTimeout(a, r);
      }),
      (H = [o, i]),
      (t[8] = o),
      (t[9] = i),
      (t[10] = V),
      (t[11] = H))
    : ((V = t[10]), (H = t[11])),
    (0, x.useEffect)(V, H));
  let U, W;
  (t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = () => {
        let e = B.current;
        return (
          (e.disposed = !1),
          () => {
            ((e.disposed = !0),
              e.timeoutHandle != null &&
                (clearTimeout(e.timeoutHandle), (e.timeoutHandle = null)));
          }
        );
      }),
      (U = []),
      (t[12] = U),
      (t[13] = W))
    : ((U = t[12]), (W = t[13])),
    (0, x.useEffect)(W, U));
  let G;
  t[14] !== o || t[15] !== i
    ? ((G = i === `svg` || ((i === `xml` || i === `html`) && ne(o))),
      (t[14] = o),
      (t[15] = i),
      (t[16] = G))
    : (G = t[16]);
  let K = G,
    q;
  t[17] !== o || t[18] !== R
    ? ((q = R != null && o.startsWith(R.code) ? R : null),
      (t[17] = o),
      (t[18] = R),
      (t[19] = q))
    : (q = t[19]);
  let J = q,
    Y;
  if (t[20] !== o || t[21] !== J || t[22] !== K) {
    let e =
        J == null
          ? null
          : J.html.split(`
`),
      n;
    t[24] !== o || t[25] !== J
      ? ((n = J == null ? o : o.slice(J.code.length)),
        (t[24] = o),
        (t[25] = J),
        (t[26] = n))
      : (n = t[26]);
    let r = n;
    ((Y = K
      ? (0, v.jsx)(b, { svgString: o, className: `max-h-96 w-full` })
      : e == null
        ? (0, v.jsx)(`span`, { children: o })
        : (0, v.jsxs)(`span`, {
            children: [
              e.map((t, n) =>
                (0, v.jsxs)(
                  x.Fragment,
                  {
                    children: [
                      (0, v.jsx)(D, { html: t }),
                      n < e.length - 1 ? T : null,
                    ],
                  },
                  n,
                ),
              ),
              r ? (0, v.jsx)(`span`, { children: r }) : null,
            ],
          })),
      (t[20] = o),
      (t[21] = J),
      (t[22] = K),
      (t[23] = Y));
  } else Y = t[23];
  let X = Y,
    Z = g ?? i,
    Q;
  t[27] !== L ||
  t[28] !== y ||
  t[29] !== N ||
  t[30] !== P ||
  t[31] !== O ||
  t[32] !== k ||
  t[33] !== j ||
  t[34] !== I
    ? ((Q =
        j &&
        (0, v.jsxs)(`div`, {
          className: `flex items-center gap-px`,
          children: [
            O == null
              ? null
              : (0, v.jsx)(c, {
                  tooltipContent: I,
                  children: (0, v.jsx)(l, {
                    "aria-label": I,
                    "aria-pressed": k,
                    color: `ghost`,
                    size: `icon`,
                    className: k ? `hover:text-token-foreground` : void 0,
                    onClick: O,
                    children: (0, v.jsx)(L, { className: `icon-2xs` }),
                  }),
                }),
            (0, v.jsx)(f, {
              iconClassName: `icon-xs`,
              iconOnly: !0,
              buttonText:
                y ??
                P.formatMessage({
                  id: `copyButton.copyCode`,
                  defaultMessage: `Copy code`,
                  description: `Button to copy the contents of the code snippet to the clipboard`,
                }),
              onCopy: N,
            }),
          ],
        })),
      (t[27] = L),
      (t[28] = y),
      (t[29] = N),
      (t[30] = P),
      (t[31] = O),
      (t[32] = k),
      (t[33] = j),
      (t[34] = I),
      (t[35] = Q))
    : (Q = t[35]);
  let $;
  return (
    t[36] !== X ||
    t[37] !== r ||
    t[38] !== h ||
    t[39] !== u ||
    t[40] !== k ||
    t[41] !== A ||
    t[42] !== Z ||
    t[43] !== Q ||
    t[44] !== n
      ? (($ = (0, v.jsx)(te, {
          ref: re,
          title: Z,
          shouldWrapCode: k,
          stickyTitleRightContent: Q,
          codeClassName: r,
          codeContainerClassName: h,
          onCopy: ie,
          className: n,
          removeTopBorderRadius: u,
          showActionBar: A,
          children: X,
        })),
        (t[36] = X),
        (t[37] = r),
        (t[38] = h),
        (t[39] = u),
        (t[40] = k),
        (t[41] = A),
        (t[42] = Z),
        (t[43] = Q),
        (t[44] = n),
        (t[45] = $))
      : ($ = t[45]),
    $
  );
}
function ee(e) {
  (e.preventDefault(), e.stopPropagation());
  let t = window.getSelection()?.toString();
  t && d(t, e);
}
function te(e) {
  let t = (0, _.c)(22),
    {
      children: n,
      title: r,
      stickyTitleRightContent: a,
      shouldWrapCode: o,
      className: c,
      codeContainerClassName: l,
      codeClassName: u,
      ref: d,
      onCopy: f,
      removeTopBorderRadius: p,
      showActionBar: m,
    } = e,
    h = o === void 0 ? !1 : o,
    g = m === void 0 ? !0 : m,
    y = s(),
    b = y ? `dark` : `light`,
    x;
  t[0] !== c || t[1] !== b
    ? ((x = i(
        `relative w-full min-w-0 overflow-clip rounded-lg border contain-inline-size`,
        `bg-token-text-code-block-background border-token-input-background`,
        b,
        c,
      )),
      (t[0] = c),
      (t[1] = b),
      (t[2] = x))
    : (x = t[2]);
  let S = y ? `dark` : `light`,
    C;
  t[3] !== p || t[4] !== g || t[5] !== a || t[6] !== r
    ? ((C =
        g &&
        (0, v.jsxs)(k, {
          removeTopBorderRadius: p,
          children: [
            (0, v.jsx)(`div`, {
              className: `min-w-0 flex-1 truncate`,
              children: r,
            }),
            (0, v.jsx)(`div`, {
              className: `ml-auto flex shrink-0 items-center`,
              children: a,
            }),
          ],
        })),
      (t[3] = p),
      (t[4] = g),
      (t[5] = a),
      (t[6] = r),
      (t[7] = C))
    : (C = t[7]);
  let w;
  t[8] !== n || t[9] !== u || t[10] !== f || t[11] !== h
    ? ((w = (0, v.jsx)(j, {
        shouldWrap: h,
        className: u,
        onCopy: f,
        children: n,
      })),
      (t[8] = n),
      (t[9] = u),
      (t[10] = f),
      (t[11] = h),
      (t[12] = w))
    : (w = t[12]);
  let T;
  t[13] !== l || t[14] !== d || t[15] !== w
    ? ((T = (0, v.jsx)(A, { ref: d, className: l, children: w })),
      (t[13] = l),
      (t[14] = d),
      (t[15] = w),
      (t[16] = T))
    : (T = t[16]);
  let E;
  return (
    t[17] !== x || t[18] !== S || t[19] !== C || t[20] !== T
      ? ((E = (0, v.jsxs)(`div`, {
          className: x,
          "data-theme": S,
          children: [C, T],
        })),
        (t[17] = x),
        (t[18] = S),
        (t[19] = C),
        (t[20] = T),
        (t[21] = E))
      : (E = t[21]),
    E
  );
}
function k(e) {
  let t = (0, _.c)(10),
    n,
    r,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]))
    : (({ className: n, removeTopBorderRadius: a, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a));
  let o = !(a !== void 0 && a) && `rounded-t-lg`,
    s;
  t[4] !== n || t[5] !== o
    ? ((s = i(
        `flex items-center py-1 pe-2 ps-2 font-sans text-sm text-token-description-foreground select-none`,
        o,
        n,
      )),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== r || t[8] !== s
      ? ((c = (0, v.jsx)(`div`, { className: s, ...r })),
        (t[7] = r),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
var A = function (e) {
  let t = (0, _.c)(6),
    { children: n, className: r, ref: a } = e,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = i(`text-size-chat overflow-auto p-2`, r)), (t[0] = r), (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== a || t[4] !== o
      ? ((s = (0, v.jsx)(`div`, {
          ref: a,
          className: o,
          dir: `ltr`,
          children: n,
        })),
        (t[2] = n),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
};
function j(e) {
  let t = (0, _.c)(10),
    n,
    r,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]))
    : (({ className: n, shouldWrap: a, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a));
  let o = a ? `whitespace-pre-wrap!` : `whitespace-pre!`,
    s;
  t[4] !== n || t[5] !== o
    ? ((s = i(o, n)), (t[4] = n), (t[5] = o), (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== r || t[8] !== s
      ? ((c = (0, v.jsx)(`code`, { className: s, ...r })),
        (t[7] = r),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function ne(e) {
  return e.trim().startsWith(`<svg`);
}
export { C as n, S as r, O as t };
//# sourceMappingURL=code-snippet-hioibDaj.js.map
