const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./mermaid-diagram.js",
      "./chunk-Bj-mKKzh.js",
      "./preload-helper.js",
      "./setting-storage.js",
      "./src-C.js",
      "./jsx-runtime.js",
      "./tslib.es6.js",
      "./dist-OQR0lEt7.js",
      "./esm.js",
      "./clsx-BcPLHiun.js",
      "./src-BHeH9bp0.js",
      "./string.js",
      "./chunk-AGHRB4JF-CwjJfTB_.js",
      "./chunk-ABZYJK2D-DSLQAJWr.js",
      "./invert.js",
      "./isEmpty-hl33V4on.js",
      "./isArrayLikeObject.js",
      "./chunk-S3R3BYOJ.js",
      "./step.js",
      "./math-CnpFeCbl.js",
      "./monotone.js",
      "./marked.esm-BR-H6018.js",
      "./chunk-ATLVNIR6.js",
      "./chunk-CVBHYZKI.js",
      "./chunk-EXTU4WIE-PYLurCvb.js",
      "./chunk-HN2XXSSU-J1M-o__Q.js",
      "./chunk-JA3XYJ7Z.js",
      "./chunk-JZLCHNYA.js",
      "./rough.esm-k7zZ13IR.js",
      "./chunk-KS23V3DP.js",
      "./chunk-MI3HLSF2.js",
      "./chunk-N4CR4FBY-BeIHswHY.js",
      "./chunk-QXUST7PY.js",
      "./line-DcJPiuto.js",
      "./path-8PN3RO0R.js",
      "./array-CPI_glx8.js",
      "./react-dom-CvzHKZGB.js",
      "./Serializer.js",
      "./window-zoom-context.js",
      "./button.js",
      "./spinner.js",
      "./reduced-motion-preference-DE4zP-oH.js",
      "./copy-button.js",
      "./tooltip-CDzchJxN.js",
      "./floating-ui.react-dom.js",
      "./tooltip-dismiss.js",
      "./check-md.js",
      "./copy-Cen6nDnP.js",
      "./expand.js",
      "./copy-to-clipboard-C2Mq2hN-.js",
      "./use-is-dark-BHkhnHe-.js",
    ]),
) => i.map((i) => d[i]);
import { s as e } from "./chunk-Bj-mKKzh.js";
import { xr as t } from "./src-C.js";
import {
  An as n,
  Cn as r,
  Dn as i,
  En as a,
  Jr as o,
  On as s,
  Sn as c,
  Tn as l,
  Yr as u,
  _r as d,
  br as f,
  jn as p,
  kn as m,
  kt as h,
  nr as g,
  po as _,
  vn as v,
  vr as y,
  wn as b,
  xn as x,
  xr as S,
  yn as C,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { t as w } from "./preload-helper.js";
import { n as T, t as E } from "./jsx-runtime.js";
import { t as D } from "./clsx-BcPLHiun.js";
import { t as O } from "./react-dom-CvzHKZGB.js";
import { c as k } from "./katex-C2KDRoso.js";
import {
  G as ee,
  S as A,
  T as j,
  U as M,
  X as N,
  Z as P,
  p as F,
  wt as I,
} from "./setting-storage.js";
import { m as L } from "./chunk-LFPYN7LY.js";
import { o as te } from "./statsig--EYRNU53.js";
import { t as R } from "./request-DWZTrEAr.js";
import { t as z } from "./use-is-dark-BHkhnHe-.js";
import { C as B, S as ne, o as re, w as ie, x as V } from "./mention-item.js";
import { t as H } from "./button.js";
import { t as U } from "./spinner.js";
import { t as ae } from "./mime-types.js";
import { t as oe } from "./error-boundary.js";
import { t as se } from "./chevron-right.js";
import { t as ce } from "./badge.js";
import { t as le } from "./chat.js";
import { t as ue } from "./copy-to-clipboard-C2Mq2hN-.js";
import { o as de, t as fe } from "./external-markdown-link-DVRKkYqo.js";
import { t as pe } from "./image-square-CGEtcnWp.js";
import { t as me } from "./filesystem-media-src.js";
import {
  a as he,
  i as ge,
  l as W,
  n as _e,
  r as ve,
  s as ye,
  t as G,
} from "./inline-mentions.js";
import { t as K } from "./code-snippet-hioibDaj.js";
import { t as be } from "./copy-button.js";
import { t as xe } from "./image-preview-dialog.js";
var q = `.katex`,
  Se = `.katex-mathml`,
  Ce = `.katex-mathml + .katex-html`,
  we = `.katex-display annotation`,
  Te = `annotation[encoding="application/x-tex"]`,
  J = [`\\(`, `\\)`],
  Ee = [
    `\\[
`,
    `
\\]`,
  ];
function De(e, t = e.ownerDocument.getSelection()) {
  if (t == null || t.rangeCount === 0 || t.isCollapsed) return null;
  let n = t.getRangeAt(0).cloneRange();
  if (!ke(n, e)) return null;
  Ae(n);
  let r = n.cloneContents(),
    i = je(r),
    a = Ne(r);
  if (!i && !a) return null;
  let o = Me(r),
    s = Ie(o),
    c = Re(o);
  return c.length > 0 ? { htmlText: s, plainText: c } : null;
}
function Oe(e) {
  let t = e.commonAncestorContainer;
  if (t.nodeType === Node.TEXT_NODE && Ue(t, q) == null) return null;
  let n = e.cloneRange();
  Ae(n);
  let r = n.cloneContents();
  return je(r) ? (Me(r).textContent ?? ``).trim() : null;
}
function ke(e, t) {
  return t.contains(e.startContainer) && t.contains(e.endContainer);
}
function Ae(e) {
  let t = Ue(e.startContainer, q);
  t != null && e.setStartBefore(t);
  let n = Ue(e.endContainer, q);
  n != null && e.setEndAfter(n);
}
function je(e) {
  return e.querySelector(Se) != null;
}
function Me(e) {
  for (let t of Array.from(e.querySelectorAll(Ce))) t.remove();
  for (let t of Array.from(e.querySelectorAll(Se))) {
    let e = t.querySelector(Te);
    e != null &&
      ((e.textContent = `${J[0]}${e.textContent ?? ``}${J[1]}`),
      t.replaceWith(e));
  }
  for (let t of Array.from(e.querySelectorAll(we))) {
    let e = t.textContent ?? ``;
    t.textContent = `${Ee[0]}${Fe(e)}${Ee[1]}`;
  }
  return (Pe(e), e);
}
function Ne(e) {
  let t = !1;
  for (let n of Array.from(
    e.querySelectorAll(`button, [data-file-reference]`),
  )) {
    let r = n.textContent ?? ``;
    r.trim().length !== 0 &&
      (n.replaceWith(e.ownerDocument.createTextNode(r)), (t = !0));
  }
  return t;
}
function Pe(e) {
  for (let t of [`.katex-display`, q])
    for (let n of Array.from(e.querySelectorAll(t)))
      n.querySelector(Ce) ??
        n.replaceWith(e.ownerDocument.createTextNode(n.textContent ?? ``));
}
function Fe(e) {
  return e.startsWith(J[0]) && e.endsWith(J[1])
    ? e.slice(J[0].length, e.length - J[1].length)
    : e;
}
function Ie(e) {
  return Array.from(e.childNodes).map(Le).join(``);
}
function Le(e) {
  return e.nodeType === Node.TEXT_NODE
    ? (e.textContent ?? ``)
    : e instanceof Element
      ? e.outerHTML
      : ``;
}
function Re(e) {
  return Array.from(e.childNodes).map(ze).join(``).trim();
}
function ze(e) {
  if (e.nodeType === Node.TEXT_NODE) return e.textContent ?? ``;
  if (!(e instanceof Element)) return ``;
  switch (e.tagName) {
    case `TABLE`:
      return Ve(e);
    case `TR`:
      return `${He(e)}\n`;
    case `THEAD`:
    case `TBODY`:
    case `TFOOT`:
      return Array.from(e.children).map(ze).join(``);
    case `BR`:
      return `
`;
    case `P`:
    case `DIV`:
    case `LI`:
      return `${Be(e)}\n`;
    default:
      return Be(e);
  }
}
function Be(e) {
  return Array.from(e.childNodes).map(ze).join(``);
}
function Ve(e) {
  return Array.from(e.querySelectorAll(`tr`)).map(He).join(`
`);
}
function He(e) {
  return Array.from(e.children)
    .filter((e) => e.tagName === `TH` || e.tagName === `TD`)
    .map((e) => Be(e).trim())
    .join(`	`);
}
function Ue(e, t) {
  return (e instanceof Element ? e : e.parentElement)?.closest(t) ?? null;
}
var Y = I(),
  X = e(T(), 1),
  We = e(O(), 1),
  Z = E(),
  Ge = new Set([`auto`, `clip`, `hidden`, `overlay`, `scroll`]),
  Ke = 100,
  qe = `data-selected-text-overlay-target`,
  Je = `[${qe}]`;
function Ye(e) {
  let t = (0, Y.c)(22),
    {
      bottomBoundarySelector: n,
      children: r,
      className: i,
      portalTargetSelector: a,
      targetContainer: o,
      targetSelector: s,
    } = e,
    c = s === void 0 ? Je : s,
    l = (0, X.useRef)(null),
    u = (0, X.useRef)(!1),
    d = (0, X.useRef)(null),
    f = (0, X.useRef)(null),
    [p, m] = (0, X.useState)(null),
    h,
    g;
  if (
    (t[0] !== n || t[1] !== a || t[2] !== o || t[3] !== c
      ? ((h = () => {
          let e = a == null ? void 0 : (o?.querySelector(a) ?? void 0),
            t = null,
            r = () => {
              l.current != null &&
                (window.cancelAnimationFrame(l.current), (l.current = null));
            },
            i = () => {
              let t = Xe(n, e, o, c);
              Ze(f.current, t) || ((f.current = t), m(t));
            },
            s = () => {
              (r(),
                (l.current = window.requestAnimationFrame(() => {
                  ((l.current = null), i());
                })));
            },
            p = () => {
              let e = window.getSelection();
              u.current ||
                e == null ||
                e.rangeCount === 0 ||
                e.isCollapsed ||
                s();
            },
            h = () => {
              (t != null && window.clearTimeout(t),
                (t = window.setTimeout(() => {
                  ((t = null), p());
                }, Ke)));
            },
            g = (t) => {
              let n = window.getSelection();
              if (
                !(u.current || n == null || n.rangeCount === 0 || n.isCollapsed)
              ) {
                if (
                  e != null &&
                  e.contains(n.getRangeAt(0).commonAncestorContainer)
                ) {
                  let r = t.target;
                  if (!(r instanceof Node && e.contains(r))) {
                    h();
                    return;
                  }
                  if (!n.getRangeAt(0).intersectsNode(r)) return;
                }
                s();
              }
            },
            _ = (e) => {
              let t = e.target;
              (t instanceof Node && d.current?.contains(t)) ||
                ((u.current = !0), r(), (f.current = null), m(null));
            },
            v = () => {
              ((u.current = !1), s());
            },
            y = () => {
              if (u.current) {
                (r(), (f.current = null), m(null));
                return;
              }
              s();
            };
          return (
            s(),
            document.addEventListener(`selectionchange`, y),
            window.addEventListener(`keyup`, s),
            window.addEventListener(`pointerdown`, _),
            window.addEventListener(`pointerup`, v),
            window.addEventListener(`pointercancel`, v),
            window.addEventListener(`resize`, p),
            window.addEventListener(`scroll`, g, !0),
            () => {
              (t != null && window.clearTimeout(t),
                r(),
                document.removeEventListener(`selectionchange`, y),
                window.removeEventListener(`keyup`, s),
                window.removeEventListener(`pointerdown`, _),
                window.removeEventListener(`pointerup`, v),
                window.removeEventListener(`pointercancel`, v),
                window.removeEventListener(`resize`, p),
                window.removeEventListener(`scroll`, g, !0));
            }
          );
        }),
        (g = [n, a, o, c]),
        (t[0] = n),
        (t[1] = a),
        (t[2] = o),
        (t[3] = c),
        (t[4] = h),
        (t[5] = g))
      : ((h = t[4]), (g = t[5])),
    (0, X.useEffect)(h, g),
    p == null)
  )
    return null;
  let _ = p.portalTarget == null ? `fixed z-30` : `absolute z-[1]`,
    v;
  t[6] !== i || t[7] !== _
    ? ((v = D(`pointer-events-none -translate-x-1/2 -translate-y-full`, _, i)),
      (t[6] = i),
      (t[7] = _),
      (t[8] = v))
    : (v = t[8]);
  let y = p.rect.left + p.rect.width / 2,
    b = p.rect.top - 8,
    x;
  t[9] !== y || t[10] !== b
    ? ((x = { left: y, top: b }), (t[9] = y), (t[10] = b), (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] !== r || t[13] !== p
    ? ((S = r(p)), (t[12] = r), (t[13] = p), (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== v || t[16] !== x || t[17] !== S
    ? ((C = (0, Z.jsx)(`div`, { ref: d, className: v, style: x, children: S })),
      (t[15] = v),
      (t[16] = x),
      (t[17] = S),
      (t[18] = C))
    : (C = t[18]);
  let w = p.portalTarget ?? document.body,
    T;
  return (
    t[19] !== C || t[20] !== w
      ? ((T = (0, We.createPortal)(C, w)),
        (t[19] = C),
        (t[20] = w),
        (t[21] = T))
      : (T = t[21]),
    T
  );
}
function Xe(e, t, n, r) {
  let i = window.getSelection();
  if (i == null || i.rangeCount === 0 || i.isCollapsed) return null;
  let a = i.toString().trim();
  if (a.length === 0) return null;
  let o = i.getRangeAt(0);
  if (n != null && !n.contains(o.commonAncestorContainer)) return null;
  let s = Qe(o, r, a);
  if (s == null || (n != null && !n.contains(s))) return null;
  let c = t?.contains(s) === !0 ? t : void 0,
    l = e == null ? null : n?.querySelector(e),
    u = it(
      o,
      l instanceof HTMLElement ? l.getBoundingClientRect().top : void 0,
    );
  if (u == null) return null;
  let d = c?.getBoundingClientRect();
  return {
    portalTarget: c,
    rect:
      d == null
        ? u
        : new DOMRect(u.left - d.left, u.top - d.top, u.width, u.height),
    selectedText: Oe(o)?.trim() ?? a,
    target: s,
    targetId: s.getAttribute(qe),
  };
}
function Ze(e, t) {
  return (
    e != null &&
    t != null &&
    e.portalTarget === t.portalTarget &&
    e.selectedText === t.selectedText &&
    e.target === t.target &&
    e.targetId === t.targetId &&
    e.rect.left === t.rect.left &&
    e.rect.top === t.rect.top &&
    e.rect.width === t.rect.width &&
    e.rect.height === t.rect.height
  );
}
function Qe(e, t, n) {
  let r = rt(n),
    i = $e(e, t).filter((t) => rt(nt(e, t)) === r);
  return i.length === 1 ? i[0] : null;
}
function $e(e, t) {
  let n = new Set(),
    r =
      e.commonAncestorContainer instanceof Element
        ? e.commonAncestorContainer
        : e.commonAncestorContainer.parentElement;
  for (let r of st(e)) {
    if (r == null) continue;
    let e = tt(r, t);
    e != null && n.add(e);
  }
  let i = r?.closest(t);
  return (i instanceof HTMLElement && n.add(i), Array.from(n));
}
function et(e, t) {
  return e instanceof Element ? (e.childNodes[t] ?? null) : null;
}
function tt(e, t) {
  let n = (e instanceof Element ? e : e.parentElement)?.closest(t);
  return n instanceof HTMLElement ? n : null;
}
function nt(e, t) {
  let n = document.createRange();
  n.selectNodeContents(t);
  let r = e.cloneRange();
  return (
    r.compareBoundaryPoints(Range.START_TO_START, n) < 0 &&
      r.setStart(n.startContainer, n.startOffset),
    r.compareBoundaryPoints(Range.END_TO_END, n) > 0 &&
      r.setEnd(n.endContainer, n.endOffset),
    r.toString()
  );
}
function rt(e) {
  return e.replace(/\s+/g, ``);
}
function it(e, t) {
  let n = at(e);
  if (
    n == null ||
    (t != null && ((n.bottom = Math.min(n.bottom, t)), n.bottom <= n.top))
  )
    return null;
  let r = [];
  for (let t of Array.from(e.getClientRects())) {
    if (!ft(t)) continue;
    if (t.top < n.top) return null;
    let e = ut(t, n);
    e != null && r.push(e);
  }
  if (r.length === 0) {
    let t = e.getBoundingClientRect();
    return !ft(t) || t.top < n.top ? null : ut(t, n);
  }
  return dt(r);
}
function at(e) {
  let t = {
    bottom: window.innerHeight,
    left: 0,
    right: window.innerWidth,
    top: 0,
  };
  for (let n of ot(e))
    if (((t = ct(t, n)), t.right <= t.left || t.bottom <= t.top)) return null;
  return t;
}
function ot(e) {
  let t = new Set();
  for (let n of st(e)) {
    if (n == null) continue;
    let e = n instanceof Element ? n : n.parentElement;
    for (; e != null; )
      (e instanceof HTMLElement && t.add(e), (e = e.parentElement));
  }
  return Array.from(t);
}
function st(e) {
  return [
    e.startContainer,
    e.endContainer,
    e.commonAncestorContainer,
    et(e.startContainer, e.startOffset),
    et(e.endContainer, e.endOffset - 1),
  ];
}
function ct(e, t) {
  let n = window.getComputedStyle(t),
    r = lt(n.overflowX || n.overflow),
    i = lt(n.overflowY || n.overflow);
  if (!r && !i) return e;
  let a = t.getBoundingClientRect();
  return {
    bottom: i ? Math.min(e.bottom, a.bottom) : e.bottom,
    left: r ? Math.max(e.left, a.left) : e.left,
    right: r ? Math.min(e.right, a.right) : e.right,
    top: i ? Math.max(e.top, a.top) : e.top,
  };
}
function lt(e) {
  return e.split(/\s+/).some((e) => Ge.has(e));
}
function ut(e, t) {
  let n = Math.max(e.left, t.left),
    r = Math.max(e.top, t.top),
    i = Math.min(e.right, t.right),
    a = Math.min(e.bottom, t.bottom);
  return n >= i || r >= a ? null : new DOMRect(n, r, i - n, a - r);
}
function dt(e) {
  let t = Math.min(...e.map((e) => e.left)),
    n = Math.min(...e.map((e) => e.top)),
    r = Math.max(...e.map((e) => e.right)),
    i = Math.max(...e.map((e) => e.bottom));
  return new DOMRect(t, n, r - t, i - n);
}
function ft(e) {
  return e.width > 0 && e.height > 0;
}
var pt = /^(https?|ircs?|mailto|xmpp|codex)$/i,
  mt = /^data:(?:image|video)\//i;
function ht(e) {
  let t = d(e),
    n = y(S(e));
  return n || t != null || ne(e) || ie(e) || V(e) || B(e) || re(e) != null
    ? n
      ? e
      : (t ?? e)
    : _t(e);
}
function gt(e) {
  let t = d(e);
  return mt.test(e) || t != null ? (t ?? e) : _t(e);
}
function _t(e) {
  let t = e.indexOf(`:`),
    n = e.indexOf(`?`),
    r = e.indexOf(`#`),
    i = e.indexOf(`/`);
  if (
    t === -1 ||
    (i !== -1 && t > i) ||
    (n !== -1 && t > n) ||
    (r !== -1 && t > r) ||
    pt.test(e.slice(0, t))
  )
    return e;
}
var vt = `data-markdown-raw-link-label`;
function yt(e, t) {
  return (0, Z.jsx)(t.components?.hr ?? `hr`, {}, e);
}
function bt(e, t, n) {
  return (0, Z.jsx)(
    n.components?.p ?? `p`,
    { children: n.renderInlineTokens(e.tokens, t) },
    t,
  );
}
function xt(e, t, n) {
  return e.tokens == null
    ? (n.renderText?.(e.text, t, e) ?? e.text)
    : n.renderInlineTokens(e.tokens, t);
}
function St(e, t, n) {
  return (0, Z.jsx)(
    n.components?.strong ?? `strong`,
    { children: n.renderInlineTokens(e.tokens, t) },
    t,
  );
}
function Ct(e, t, n) {
  return (0, Z.jsx)(
    n.components?.em ?? `em`,
    { children: n.renderInlineTokens(e.tokens, t) },
    t,
  );
}
function wt(e, t, n) {
  return (0, Z.jsx)(
    n.components?.del ?? `del`,
    { children: n.renderInlineTokens(e.tokens, t) },
    t,
  );
}
function Tt(e, t, n) {
  return (0, Z.jsx)(
    n.components?.code ?? `code`,
    { inline: !0, children: e.text },
    t,
  );
}
function Et(e, t, n) {
  return (0, Z.jsx)(
    n.components?.a ?? `a`,
    {
      [vt]: e.text,
      href: ht(e.href),
      title: e.title ?? void 0,
      children: n.renderInlineTokens(e.tokens, t),
    },
    t,
  );
}
function Dt(e, t, n) {
  return (0, Z.jsx)(
    n.components?.img ?? `img`,
    { alt: e.text, src: gt(e.href), title: e.title ?? void 0 },
    t,
  );
}
function Ot(e, t, n) {
  return (0, Z.jsx)(
    n.components?.pre ?? `pre`,
    {
      children: (0, Z.jsx)(n.components?.code ?? `code`, {
        className: D(e.lang && `language-${e.lang}`),
        inline: !1,
        children: e.text,
      }),
    },
    t,
  );
}
function kt(e, t, n) {
  return (0, Z.jsx)(
    n.components?.blockquote ?? `blockquote`,
    { children: n.renderTokens(e.tokens) },
    t,
  );
}
function At(e, t) {
  return (0, Z.jsx)(
    `span`,
    {
      dangerouslySetInnerHTML: {
        __html: k.renderToString(e.text, {
          displayMode: e.display,
          strict: `ignore`,
          throwOnError: !1,
        }),
      },
    },
    t,
  );
}
var jt = h(`markdownCodeBlockWordWrap`, !1),
  Mt = (0, X.lazy)(async () => {
    let { MermaidDiagram: e } = await w(
      async () => {
        let { MermaidDiagram: e } = await import(`./mermaid-diagram.js`);
        return { MermaidDiagram: e };
      },
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
      ]),
      import.meta.url,
    );
    return { default: e };
  });
function Nt(e) {
  let t = (0, Y.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ fallback: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] !== n || t[4] !== r
    ? ((i = (0, Z.jsx)(Mt, { fallback: n, ...r })),
      (t[3] = n),
      (t[4] = r),
      (t[5] = i))
    : (i = t[5]);
  let a;
  return (
    t[6] !== n || t[7] !== i
      ? ((a = (0, Z.jsx)(X.Suspense, { fallback: n, children: i })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a))
      : (a = t[8]),
    a
  );
}
function Pt(e) {
  let t = (0, Y.c)(22),
    { className: n, content: r, onAddSelectedTextToChat: i } = e,
    a = z(),
    o;
  t[0] !== r || t[1] !== i
    ? ((o = () => {
        let e = r.trim();
        e.length !== 0 && i?.(e);
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] === r
    ? (c = t[4])
    : ((c = (e) => {
        ue(r, e);
      }),
      (t[3] = r),
      (t[4] = c));
  let l = c,
    u;
  t[5] === n
    ? (u = t[6])
    : ((u = D(
        `relative w-full min-w-0 overflow-clip rounded-lg border border-token-border bg-transparent contain-inline-size`,
        n,
      )),
      (t[5] = n),
      (t[6] = u));
  let d = a ? `dark` : `light`,
    f;
  t[7] !== s || t[8] !== i
    ? ((f =
        i == null
          ? null
          : (0, Z.jsxs)(H, {
              color: `outline`,
              size: `composer`,
              onMouseDown: Ft,
              onClick: s,
              children: [
                (0, Z.jsx)(le, {
                  "aria-hidden": `true`,
                  className: `icon-2xs`,
                }),
                (0, Z.jsx)(M, {
                  id: `selectedTextOverlay.addToCodex`,
                  defaultMessage: `Add to chat`,
                  description: `Button label for adding currently selected text from an overlay anchored to that selection to the chat`,
                }),
              ],
            })),
      (t[7] = s),
      (t[8] = i),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === l
    ? (p = t[11])
    : ((p = (0, Z.jsx)(be, {
        className: `ml-auto`,
        iconClassName: `icon-xs`,
        iconOnly: !0,
        onCopy: l,
      })),
      (t[10] = l),
      (t[11] = p));
  let m;
  t[12] !== f || t[13] !== p
    ? ((m = (0, Z.jsxs)(`div`, {
        className: `flex items-center px-2 pt-2 pb-2 font-sans text-sm text-token-description-foreground select-none`,
        children: [f, p],
      })),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] === r
    ? (h = t[16])
    : ((h = (0, Z.jsx)(`div`, {
        className: `text-size-chat overflow-auto px-4 pt-2 pb-4 whitespace-pre-wrap`,
        dir: `ltr`,
        children: r,
      })),
      (t[15] = r),
      (t[16] = h));
  let g;
  return (
    t[17] !== u || t[18] !== d || t[19] !== m || t[20] !== h
      ? ((g = (0, Z.jsxs)(`div`, {
          className: u,
          "data-theme": d,
          children: [m, h],
        })),
        (t[17] = u),
        (t[18] = d),
        (t[19] = m),
        (t[20] = h),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
function Ft(e) {
  e.preventDefault();
}
var It = /^\[((?:\\.|[^\]\n])+)\]\(((?:\\.|[^)\n])+)\)$/;
function Lt({
  className: e,
  content: t,
  cwd: n,
  hostId: r,
  key: i,
  onFileLinkOpen: a,
  openFileLinksInSidePanel: o,
}) {
  let s = t.startsWith(`@`) ? t.slice(1) : null;
  if (s != null && f(s))
    return (0, Z.jsx)(
      he,
      {
        className: e,
        reference: S(s),
        cwd: n,
        hostId: r,
        onOpen: a,
        openInSidePanel: o,
      },
      i,
    );
  let c = zt(t);
  if (c != null) {
    let t = ge({
      className: e,
      cwd: n,
      hostId: r,
      href: c.href,
      label: c.label,
      onFileLinkOpen: a,
      openFileLinksInSidePanel: o,
    });
    if (t != null) return t;
  }
  return _e(t)
    ? (0, Z.jsx)(ye, { label: ve(t) }, i)
    : (0, Z.jsx)(
        `span`,
        { className: D(`inline-markdown`, W.inlineMarkdown, e), children: t },
        i,
      );
}
function Rt(e) {
  return e == null || e === `text` || e === `md` || e === `markdown`;
}
function zt(e) {
  let t = e.match(It);
  if (t == null) return null;
  let n = o(t[1]?.trim() ?? ``),
    r = u(t[2]?.trim() ?? ``);
  return n.length === 0 || r.length === 0 ? null : { href: r, label: n };
}
function Bt(e) {
  let t = (0, Y.c)(29),
    {
      allowWideBlocks: n,
      content: r,
      forceCodeBlockWordWrap: i,
      language: a,
      onAddSelectedTextToChat: o,
      renderImmediately: s,
      renderCodeBlocksAsWritingBlocks: c,
    } = e,
    l = Rt(a),
    u = i && l ? `always` : l ? `user-controlled` : `off`;
  if (c && l) {
    let e;
    t[0] !== r || t[1] !== o
      ? ((e = () =>
          (0, Z.jsx)(Pt, {
            className: W.codeBlock,
            content: r,
            onAddSelectedTextToChat: o,
          })),
        (t[0] = r),
        (t[1] = o),
        (t[2] = e))
      : (e = t[2]);
    let n;
    return (
      t[3] !== r || t[4] !== a || t[5] !== s || t[6] !== e
        ? ((n = (0, Z.jsx)(Ht, {
            content: r,
            language: a,
            renderImmediately: s,
            renderVisible: e,
          })),
          (t[3] = r),
          (t[4] = a),
          (t[5] = s),
          (t[6] = e),
          (t[7] = n))
        : (n = t[7]),
      n
    );
  }
  if (a === `mermaid`) {
    let e = n && W.wideBlock,
      i;
    t[8] === e ? (i = t[9]) : ((i = D(W.codeBlock, e)), (t[8] = e), (t[9] = i));
    let o = n ? `mermaid` : void 0,
      c;
    t[10] !== n || t[11] !== r
      ? ((c = () =>
          (0, Z.jsx)(Nt, {
            className: D(W.codeBlock, n && W.wideBlock),
            code: r,
            fallback: (0, Z.jsx)(K, {
              wrapperClassName: W.codeBlock,
              content: r,
              language: `plaintext`,
            }),
            wideBlockKind: n ? `mermaid` : void 0,
          })),
        (t[10] = n),
        (t[11] = r),
        (t[12] = c))
      : (c = t[12]);
    let l;
    return (
      t[13] !== r ||
      t[14] !== a ||
      t[15] !== s ||
      t[16] !== i ||
      t[17] !== o ||
      t[18] !== c
        ? ((l = (0, Z.jsx)(Ht, {
            className: i,
            content: r,
            language: a,
            renderImmediately: s,
            wideBlockKind: o,
            renderVisible: c,
          })),
          (t[13] = r),
          (t[14] = a),
          (t[15] = s),
          (t[16] = i),
          (t[17] = o),
          (t[18] = c),
          (t[19] = l))
        : (l = t[19]),
      l
    );
  }
  let d;
  t[20] !== u || t[21] !== r || t[22] !== a
    ? ((d = () =>
        (0, Z.jsx)(Vt, {
          wrapperClassName: W.codeBlock,
          content: r,
          language: a,
          codeBlockWordWrap: u,
        })),
      (t[20] = u),
      (t[21] = r),
      (t[22] = a),
      (t[23] = d))
    : (d = t[23]);
  let f;
  return (
    t[24] !== r || t[25] !== a || t[26] !== s || t[27] !== d
      ? ((f = (0, Z.jsx)(Ht, {
          content: r,
          language: a,
          renderImmediately: s,
          renderVisible: d,
        })),
        (t[24] = r),
        (t[25] = a),
        (t[26] = s),
        (t[27] = d),
        (t[28] = f))
      : (f = t[28]),
    f
  );
}
function Vt(e) {
  let t = (0, Y.c)(11),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ codeBlockWordWrap: n, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r));
  let i = N(A),
    a = P(jt),
    o = n === `always` || (n === `user-controlled` && a),
    s;
  t[3] !== n || t[4] !== i || t[5] !== a
    ? ((s =
        n === `user-controlled`
          ? () => {
              i.set(jt, !a);
            }
          : void 0),
      (t[3] = n),
      (t[4] = i),
      (t[5] = a),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== r || t[8] !== o || t[9] !== s
      ? ((c = (0, Z.jsx)(K, { ...r, shouldWrapCode: o, onToggleWrapCode: s })),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
function Ht(e) {
  let t = (0, Y.c)(2),
    n;
  if (t[0] !== e) {
    let { renderImmediately: r, ...i } = e;
    ((n = r ? i.renderVisible() : (0, Z.jsx)(Ut, { ...i })),
      (t[0] = e),
      (t[1] = n));
  } else n = t[1];
  return n;
}
function Ut(e) {
  let t = (0, Y.c)(14),
    { className: n, content: r, renderVisible: i, wideBlockKind: a } = e,
    o = (0, X.useRef)(null),
    [s, c] = (0, X.useState)(!1),
    l,
    u;
  if (
    (t[0] === s
      ? ((l = t[1]), (u = t[2]))
      : ((l = () => {
          if (s) return;
          let e = o.current;
          if (e == null) return;
          if (typeof IntersectionObserver > `u`) {
            setTimeout(() => {
              c(!0);
            }, 0);
            return;
          }
          let t = new IntersectionObserver(
            (e) => {
              e.some(Wt) && (c(!0), t.disconnect());
            },
            { rootMargin: `600px 0px` },
          );
          return (
            t.observe(e),
            () => {
              t.disconnect();
            }
          );
        }),
        (u = [s]),
        (t[0] = s),
        (t[1] = l),
        (t[2] = u)),
    (0, X.useEffect)(l, u),
    s)
  ) {
    let e;
    return (t[3] === i ? (e = t[4]) : ((e = i()), (t[3] = i), (t[4] = e)), e);
  }
  let d;
  t[5] === n ? (d = t[6]) : ((d = D(W.codeBlock, n)), (t[5] = n), (t[6] = d));
  let f = a == null ? void 0 : `true`,
    p;
  t[7] === r
    ? (p = t[8])
    : ((p = (0, Z.jsx)(`pre`, {
        className: W.codeBlockPlaceholder,
        children: (0, Z.jsx)(`code`, { children: r }),
      })),
      (t[7] = r),
      (t[8] = p));
  let m;
  return (
    t[9] !== d || t[10] !== f || t[11] !== p || t[12] !== a
      ? ((m = (0, Z.jsx)(`div`, {
          ref: o,
          className: d,
          "data-wide-markdown-block": f,
          "data-wide-markdown-block-kind": a,
          children: p,
        })),
        (t[9] = d),
        (t[10] = f),
        (t[11] = p),
        (t[12] = a),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function Wt(e) {
  return e.isIntersecting;
}
var Gt = e(ae(), 1),
  Kt = /^data:(?:image|video)\//i,
  qt = `img.shields.io`,
  Jt = `/badge/`;
function Yt(e) {
  return !Kt.test(e) && !t(e)
    ? `image`
    : (Xt(e)?.startsWith(`video/`) ?? !1)
      ? `video`
      : `image`;
}
function Xt(e) {
  let t = e.match(/^data:([^;,]+)/i);
  if (t != null) return t[1] ?? null;
  let n = (0, Gt.lookup)(e);
  return typeof n == `string` ? n : null;
}
function Zt(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  return t.protocol !== `https:` ||
    t.hostname !== qt ||
    !t.pathname.startsWith(Jt)
    ? null
    : (t.pathname.match(/^\/badge\/(P[0-9]+)(?:-|$)/)?.[1] ?? null);
}
function Qt(e) {
  return e === `P0`
    ? `bg-token-charts-red text-white`
    : e === `P1`
      ? `bg-token-charts-orange text-white`
      : `bg-token-foreground/5 text-token-foreground`;
}
function $t({ contentsBase64: e, mimeType: t, path: n }) {
  return `data:${t ?? Xt(n) ?? `application/octet-stream`};base64,${e}`;
}
function en(e) {
  return e.startsWith(`//`) ? !0 : tn(e);
}
function tn(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return !1;
  }
  return t.protocol === `http:` || t.protocol === `https:`;
}
var nn = new Set([`openai.com`, `chatgpt.com`, `chat.com`]),
  rn = 500;
function an(e, t) {
  let n = (0, Y.c)(3),
    r = cn(e, rn),
    i = sn(r, t),
    a = i.isPending || (t && e != null && r !== e),
    o;
  return (
    n[0] !== i.safeUrl || n[1] !== a
      ? ((o = { safeUrl: i.safeUrl, isPending: a }),
        (n[0] = i.safeUrl),
        (n[1] = a),
        (n[2] = o))
      : (o = n[2]),
    o
  );
}
function on(e) {
  if (e == null) return !1;
  try {
    let t = de(new URL(e).hostname).domain;
    return t != null && nn.has(t);
  } catch {
    return !1;
  }
}
function sn(e, t) {
  let n = (0, Y.c)(15),
    r = e == null,
    i;
  n[0] !== r || n[1] !== e
    ? ((i = !r && on(e)), (n[0] = r), (n[1] = e), (n[2] = i))
    : (i = n[2]);
  let a = i,
    o,
    s;
  n[3] === e
    ? ((o = n[4]), (s = n[5]))
    : ((o = [`markdown-safe-url`, e]),
      (s = async () => {
        if (e == null)
          throw Error(`Unexpected missing safe markdown URL input`);
        return R.safePost(`/ecosystem/url_safe`, {
          requestBody: { resolved_pineapple_uri: null, url: e },
        });
      }),
      (n[3] = e),
      (n[4] = o),
      (n[5] = s));
  let c = t && !r && !a,
    l;
  n[6] !== o || n[7] !== s || n[8] !== c
    ? ((l = {
        queryKey: o,
        queryFn: s,
        enabled: c,
        retry: !1,
        staleTime: 1 / 0,
      }),
      (n[6] = o),
      (n[7] = s),
      (n[8] = c),
      (n[9] = l))
    : (l = n[9]);
  let u = j(l);
  if (!t) {
    let e;
    return (
      n[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { safeUrl: void 0, isPending: !1 }), (n[10] = e))
        : (e = n[10]),
      e
    );
  }
  if (r) {
    let e;
    return (
      n[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { safeUrl: void 0, isPending: !1 }), (n[11] = e))
        : (e = n[11]),
      e
    );
  }
  let d = a || u.data?.safe === !0 ? e : void 0,
    f;
  return (
    n[12] !== u.isLoading || n[13] !== d
      ? ((f = { safeUrl: d, isPending: u.isLoading }),
        (n[12] = u.isLoading),
        (n[13] = d),
        (n[14] = f))
      : (f = n[14]),
    f
  );
}
function cn(e, t) {
  let n = (0, Y.c)(4),
    [r, i] = (0, X.useState)(void 0),
    a,
    o;
  return (
    n[0] !== t || n[1] !== e
      ? ((a = () => {
          let n = window.setTimeout(() => {
            i(e);
          }, t);
          return () => {
            window.clearTimeout(n);
          };
        }),
        (o = [t, e]),
        (n[0] = t),
        (n[1] = e),
        (n[2] = a),
        (n[3] = o))
      : ((a = n[2]), (o = n[3])),
    (0, X.useEffect)(a, o),
    r === e ? e : void 0
  );
}
var ln = `my-3 block h-auto rounded-md object-contain shadow-md`,
  un = D(ln, `border border-token-border`),
  dn = `max-h-[12.5rem] max-w-[12.5rem]`,
  fn = `max-h-[10rem] w-auto max-w-full`,
  pn = `data-markdown-image-preview-trigger`;
function mn(e) {
  let t = (0, Y.c)(80),
    {
      allowWide: n,
      alt: r,
      animateEnter: i,
      className: a,
      hostId: o,
      mediaPresentation: s,
      rootRef: c,
      src: l,
      title: u,
    } = e,
    f = n === void 0 ? !1 : n,
    p = i === void 0 ? !1 : i,
    m = ee(),
    [h, g] = (0, X.useState)(!1),
    [_, v] = (0, X.useState)(null),
    [y, b] = (0, X.useState)(null),
    x = l ?? ``,
    S = d(x),
    C = x.length > 0,
    w = Zt(x),
    T;
  t[0] === x ? (T = t[1]) : ((T = Yt(x)), (t[0] = x), (t[1] = T));
  let E = T,
    O = E === `video`,
    k;
  t[2] === x ? (k = t[3]) : ((k = x.startsWith(`//`)), (t[2] = x), (t[3] = k));
  let A = S != null && !k,
    j = an(x, w == null && C && E === `image` && !A && tn(x)),
    M = w == null && C && !A && en(x) && j.safeUrl == null && !j.isPending,
    N = A && O ? me(S) : null,
    P = !O && A,
    { data: I, isLoading: L } = F(`read-file-binary`, {
      params: { path: P ? (S ?? x) : ``, hostId: o },
      queryConfig: { enabled: P, gcTime: 1 / 0, staleTime: 1 / 0 },
    });
  if (!C) return null;
  if (w != null)
    return (0, Z.jsx)(ce, {
      className: D(
        Qt(w),
        `size-6 justify-center rounded-md p-0 align-bottom text-sm leading-none font-normal tabular-nums whitespace-nowrap uppercase`,
      ),
      children: w,
    });
  let te = I?.contentsBase64 ?? null,
    R =
      j.safeUrl ??
      N ??
      (P && te != null
        ? $t({
            contentsBase64: te,
            mimeType: I?.mimeType ?? null,
            path: S ?? x,
          })
        : x),
    z = r ?? ``,
    B = A && !O,
    ne = A && O && N == null,
    re = M || (P && te == null && !L) || y === R,
    ie = _?.items[_.index] ?? null,
    V = ie?.src ?? R,
    H = ie?.alt ?? z,
    U = _ != null && _.index > 0 ? _.index - 1 : null,
    ae = _ != null && _.index + 1 < _.items.length ? _.index + 1 : null,
    oe;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (e) => {
        v((t) => (t == null ? null : { ...t, index: e }));
      }),
      (t[4] = oe))
    : (oe = t[4]);
  let se = oe,
    le;
  t[5] !== m || t[6] !== z
    ? ((le =
        z ||
        m.formatMessage({
          id: `markdown.videoPlayer`,
          defaultMessage: `Video`,
          description: `Accessible label for a markdown video when no alt text is provided`,
        })),
      (t[5] = m),
      (t[6] = z),
      (t[7] = le))
    : (le = t[7]);
  let ue = le,
    de;
  t[8] !== m || t[9] !== z
    ? ((de =
        z ||
        m.formatMessage({
          id: `markdown.videoUnavailable`,
          defaultMessage: `Video unavailable`,
          description: `Accessible label for a markdown video fallback when the video fails to load and no alt text is provided`,
        })),
      (t[8] = m),
      (t[9] = z),
      (t[10] = de))
    : (de = t[10]);
  let fe = de,
    pe;
  t[11] !== m || t[12] !== z
    ? ((pe =
        z ||
        m.formatMessage({
          id: `markdown.imagePreviewButton`,
          defaultMessage: `Open image preview`,
          description: `Accessible label for a markdown image button when no alt text is provided`,
        })),
      (t[11] = m),
      (t[12] = z),
      (t[13] = pe))
    : (pe = t[13]);
  let he = pe,
    ge;
  t[14] !== m || t[15] !== z
    ? ((ge =
        z ||
        m.formatMessage({
          id: `markdown.imageUnavailable`,
          defaultMessage: `Image unavailable`,
          description: `Accessible label for a markdown image fallback when the image fails to load and no alt text is provided`,
        })),
      (t[14] = m),
      (t[15] = z),
      (t[16] = ge))
    : (ge = t[16]);
  let _e = ge,
    ve;
  t[17] !== m || t[18] !== z
    ? ((ve =
        z ||
        m.formatMessage({
          id: `markdown.imageLoading`,
          defaultMessage: `Image loading`,
          description: `Accessible label for a markdown image placeholder while image bytes are loading and no alt text is provided`,
        })),
      (t[17] = m),
      (t[18] = z),
      (t[19] = ve))
    : (ve = t[19]);
  let ye = ve;
  if ((P && L && te == null) || j.isPending) {
    if (s !== `scrollable`) return null;
    let e = O ? ue : ye,
      n;
    return (
      t[20] !== f || t[21] !== s || t[22] !== B || t[23] !== e || t[24] !== u
        ? ((n = (0, Z.jsx)(hn, {
            allowWide: f,
            isLoading: !0,
            label: e,
            mediaPresentation: s,
            title: u,
            useDefaultImageSize: B,
          })),
          (t[20] = f),
          (t[21] = s),
          (t[22] = B),
          (t[23] = e),
          (t[24] = u),
          (t[25] = n))
        : (n = t[25]),
      n
    );
  }
  if (ne || re) {
    let e = O ? fe : _e,
      n;
    return (
      t[26] !== f || t[27] !== s || t[28] !== B || t[29] !== e || t[30] !== u
        ? ((n = (0, Z.jsx)(hn, {
            allowWide: f,
            label: e,
            mediaPresentation: s,
            title: u,
            useDefaultImageSize: B,
          })),
          (t[26] = f),
          (t[27] = s),
          (t[28] = B),
          (t[29] = e),
          (t[30] = u),
          (t[31] = n))
        : (n = t[31]),
      n
    );
  }
  if (O) {
    let e = f
        ? `max-h-[var(--markdown-wide-block-max-height)] w-auto max-w-full`
        : `max-h-[min(48vh,32rem)] max-w-[min(100%,44rem)]`,
      n;
    t[32] !== a || t[33] !== e
      ? ((n = D(ln, e, a)), (t[32] = a), (t[33] = e), (t[34] = n))
      : (n = t[34]);
    let r;
    t[35] === R
      ? (r = t[36])
      : ((r = () => {
          b(R);
        }),
        (t[35] = R),
        (t[36] = r));
    let i;
    return (
      t[37] !== R || t[38] !== n || t[39] !== r || t[40] !== u || t[41] !== ue
        ? ((i = (0, Z.jsx)(`video`, {
            className: n,
            src: R,
            title: u,
            "aria-label": ue,
            controls: !0,
            preload: `metadata`,
            onError: r,
          })),
          (t[37] = R),
          (t[38] = n),
          (t[39] = r),
          (t[40] = u),
          (t[41] = ue),
          (t[42] = i))
        : (i = t[42]),
      i
    );
  }
  let G;
  t[43] === U
    ? (G = t[44])
    : ((G =
        U == null
          ? void 0
          : () => {
              se(U);
            }),
      (t[43] = U),
      (t[44] = G));
  let K;
  t[45] === ae
    ? (K = t[46])
    : ((K =
        ae == null
          ? void 0
          : () => {
              se(ae);
            }),
      (t[45] = ae),
      (t[46] = K));
  let be =
      s === `scrollable`
        ? `block max-h-[min(70vh,40rem)] max-w-full overflow-auto rounded-md`
        : f
          ? `inline-block max-w-full`
          : `inline-block max-w-[min(100%,44rem)]`,
    q;
  t[47] === be
    ? (q = t[48])
    : ((q = D(`cursor-zoom-in border-0 bg-transparent p-0 align-top`, be)),
      (t[47] = be),
      (t[48] = q));
  let Se;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = { [pn]: `true` }), (t[49] = Se))
    : (Se = t[49]);
  let Ce;
  t[50] !== z || t[51] !== R || t[52] !== c
    ? ((Ce = (e) => {
        v(
          gn({
            fallbackItem: { src: R, alt: z },
            root: c.current,
            trigger: e.currentTarget,
          }),
        );
      }),
      (t[50] = z),
      (t[51] = R),
      (t[52] = c),
      (t[53] = Ce))
    : (Ce = t[53]);
  let we;
  t[54] !== f || t[55] !== p || t[56] !== a || t[57] !== s || t[58] !== B
    ? ((we = D(
        un,
        s === `scrollable`
          ? `max-h-none !max-w-none w-auto`
          : f && B
            ? fn
            : [dn, `h-auto w-auto`],
        p && W.imageEnter,
        a,
      )),
      (t[54] = f),
      (t[55] = p),
      (t[56] = a),
      (t[57] = s),
      (t[58] = B),
      (t[59] = we))
    : (we = t[59]);
  let Te;
  t[60] === R
    ? (Te = t[61])
    : ((Te = () => {
        b(R);
      }),
      (t[60] = R),
      (t[61] = Te));
  let J;
  t[62] !== z || t[63] !== R || t[64] !== we || t[65] !== Te || t[66] !== u
    ? ((J = (0, Z.jsx)(`img`, {
        className: we,
        src: R,
        alt: z,
        title: u,
        loading: `lazy`,
        onError: Te,
      })),
      (t[62] = z),
      (t[63] = R),
      (t[64] = we),
      (t[65] = Te),
      (t[66] = u),
      (t[67] = J))
    : (J = t[67]);
  let Ee;
  t[68] !== he || t[69] !== q || t[70] !== Ce || t[71] !== J
    ? ((Ee = (0, Z.jsx)(`button`, {
        type: `button`,
        className: q,
        "aria-label": he,
        ...Se,
        onClick: Ce,
        children: J,
      })),
      (t[68] = he),
      (t[69] = q),
      (t[70] = Ce),
      (t[71] = J),
      (t[72] = Ee))
    : (Ee = t[72]);
  let De;
  return (
    t[73] !== h ||
    t[74] !== H ||
    t[75] !== V ||
    t[76] !== G ||
    t[77] !== K ||
    t[78] !== Ee
      ? ((De = (0, Z.jsx)(xe, {
          src: V,
          alt: H,
          open: h,
          onOpenChange: g,
          caption: H,
          contentMaxWidthClassName: `max-w-[min(90vw,var(--markdown-wide-block-max-width))]`,
          downloadSrc: V,
          onPreviousImage: G,
          onNextImage: K,
          triggerContent: Ee,
        })),
        (t[73] = h),
        (t[74] = H),
        (t[75] = V),
        (t[76] = G),
        (t[77] = K),
        (t[78] = Ee),
        (t[79] = De))
      : (De = t[79]),
    De
  );
}
function hn(e) {
  let t = (0, Y.c)(9),
    {
      allowWide: n,
      isLoading: r,
      label: i,
      mediaPresentation: a,
      title: o,
      useDefaultImageSize: s,
    } = e,
    c = r === void 0 ? !1 : r,
    l =
      a === `scrollable`
        ? `w-full min-h-40 max-h-[min(70vh,40rem)]`
        : n
          ? s !== void 0 && s
            ? fn
            : `max-h-[var(--markdown-wide-block-max-height)] w-fit max-w-full`
          : `max-h-[min(48vh,32rem)] max-w-[min(100%,44rem)]`,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = D(
        ln,
        l,
        `bg-token-toolbar-hover-background text-token-description-foreground inline-flex min-h-24 min-w-24 max-w-full cursor-default items-center justify-center border-0 p-0`,
      )),
      (t[0] = l),
      (t[1] = u));
  let d;
  t[2] === c
    ? (d = t[3])
    : ((d = c
        ? (0, Z.jsx)(U, { className: `icon-md` })
        : (0, Z.jsx)(pe, { className: `icon-lg` })),
      (t[2] = c),
      (t[3] = d));
  let f;
  return (
    t[4] !== i || t[5] !== u || t[6] !== d || t[7] !== o
      ? ((f = (0, Z.jsx)(`button`, {
          type: `button`,
          disabled: !0,
          className: u,
          "aria-label": i,
          title: o,
          children: d,
        })),
        (t[4] = i),
        (t[5] = u),
        (t[6] = d),
        (t[7] = o),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
function gn({ fallbackItem: e, root: t, trigger: n }) {
  let r = t == null ? [] : Array.from(t.querySelectorAll(`[${pn}="true"]`)),
    i = [],
    a = null;
  for (let e of r) {
    let t = e.querySelector(`img`),
      r = t?.currentSrc || t?.getAttribute(`src`) || ``;
    r.length !== 0 &&
      (e === n && (a = i.length), i.push({ src: r, alt: t?.alt ?? `` }));
  }
  return a == null ? { items: [e], index: 0 } : { items: i, index: a };
}
var _n = /^\s*$/;
function vn(e) {
  return X.Children.toArray(e)
    .map((e) =>
      typeof e == `string` || typeof e == `number`
        ? String(e)
        : (0, X.isValidElement)(e)
          ? vn(e.props.children)
          : ``,
    )
    .join(``);
}
function yn(e, t) {
  if (t == null) return null;
  let n = X.Children.toArray(e).filter(
    (e) =>
      !(
        (typeof e == `string` && _n.test(e)) ||
        ((0, X.isValidElement)(e) && e.type === `br`)
      ),
  );
  if (n.length === 0) return null;
  let r = [];
  for (let e of n) {
    if (!(0, X.isValidElement)(e) || e.type !== t) return null;
    r.push(e);
  }
  return r;
}
function bn({
  allowWideBlocks: e,
  animateImageEnter: t,
  cwd: n,
  forceCodeBlockWordWrap: r,
  hideCodeBlocks: i,
  hostId: a,
  mediaPresentation: o,
  rootRef: s,
  textClassName: c,
}) {
  let l = {
    strong({ children: e }) {
      return (0, Z.jsx)(`strong`, { className: `font-semibold`, children: e });
    },
    code: xn({
      allowWideBlocks: e,
      cwd: n,
      forceCodeBlockWordWrap: r,
      hideCodeBlocks: i,
      hostId: a,
      openFileLinksInSidePanel: !1,
      renderCodeBlocksAsWritingBlocks: !1,
    }),
    pre({ children: e }) {
      return (0, Z.jsx)(Z.Fragment, { children: e });
    },
    p({ children: t }) {
      let n = e ? yn(t, l.img) : null;
      if (
        n != null &&
        n.length > 1 &&
        n.every((e) => Yt(e.props.src ?? ``) === `image`)
      )
        return (0, Z.jsx)(`p`, {
          className: D(c, W.paragraph, W.mediaParagraph, W.mediaGridParagraph),
          "data-markdown-image-grid": `true`,
          children: n.map((e, t) =>
            (0, X.cloneElement)(e, {
              key: `${e.props.src ?? `media`}-${t}`,
              allowWide: !0,
            }),
          ),
        });
      if (n != null && n.length === 1) {
        let [e] = n,
          t = Yt(e.props.src ?? ``),
          r = t === `image`;
        return (0, Z.jsx)(`p`, {
          className: D(c, W.paragraph, W.mediaParagraph, r && W.mediaWideBlock),
          "data-wide-markdown-block": r ? `true` : void 0,
          "data-wide-markdown-block-kind": r ? t : void 0,
          children: (0, X.cloneElement)(e, {
            key: `${e.props.src ?? `media`}-0`,
            allowWide: r,
          }),
        });
      }
      return (0, Z.jsx)(`p`, { className: D(c, W.paragraph), children: t });
    },
    h1({ children: e }) {
      return (0, Z.jsx)(`h1`, {
        className: D(W.heading, W.heading1),
        children: e,
      });
    },
    h2({ children: e }) {
      return (0, Z.jsx)(`h2`, {
        className: D(W.heading, W.heading2),
        children: e,
      });
    },
    h3({ children: e }) {
      return (0, Z.jsx)(`h3`, {
        className: D(W.heading, W.heading3),
        children: e,
      });
    },
    h4({ children: e }) {
      return (0, Z.jsx)(`h4`, {
        className: D(W.heading, W.heading4),
        children: e,
      });
    },
    h5({ children: e }) {
      return (0, Z.jsx)(`h5`, {
        className: D(W.heading, W.heading5),
        children: e,
      });
    },
    h6({ children: e }) {
      return (0, Z.jsx)(`h6`, {
        className: D(W.heading, W.heading6),
        children: e,
      });
    },
    ul({ children: e, className: t }) {
      let n = t?.includes(`contains-task-list`) ?? !1;
      return (0, Z.jsx)(`ul`, {
        className: D(c, W.list, n ? W.taskList : W.unorderedList, t),
        children: e,
      });
    },
    ol({ children: e, className: t, start: n }) {
      return (t?.includes(`contains-task-list`) ?? !1) && Cn(e)
        ? (0, Z.jsx)(`ol`, {
            className: D(c, W.list, W.taskList, t),
            children: e,
          })
        : (0, Z.jsx)(`ol`, {
            className: D(c, W.list, W.orderedList, t),
            start: n,
            children: e,
          });
    },
    li({ children: e, className: t }) {
      let n = t?.includes(`task-list-item`) ?? !1;
      return (0, Z.jsx)(`li`, {
        className: D(c, W.listItem, n && W.taskListItem, t),
        children: e,
      });
    },
    a: Sn({
      conversationId: null,
      cwd: n,
      hostId: a,
      isBrowserSidebarEnabled: !1,
      openFileLinksInSidePanel: !1,
    }),
    img(e) {
      return (0, Z.jsx)(mn, {
        ...e,
        animateEnter: t,
        hostId: a,
        mediaPresentation: o,
        rootRef: s,
      });
    },
    blockquote({ children: e }) {
      return (0, Z.jsx)(`blockquote`, {
        className: D(c, W.blockquote),
        children: e,
      });
    },
    hr() {
      return (0, Z.jsx)(`hr`, { className: W.horizontalRule });
    },
    table({ children: e }) {
      return (0, Z.jsx)(`div`, {
        className: W.tableContainer,
        children: (0, Z.jsx)(`div`, {
          className: W.tableWrapper,
          children: (0, Z.jsx)(`table`, {
            className: D(c, W.table),
            children: e,
          }),
        }),
      });
    },
    thead({ children: e }) {
      return (0, Z.jsx)(`thead`, { className: W.tableHead, children: e });
    },
    tbody({ children: e }) {
      return (0, Z.jsx)(`tbody`, { className: W.tableBody, children: e });
    },
    tr({ children: e }) {
      return (0, Z.jsx)(`tr`, { className: W.tableRow, children: e });
    },
    th({ children: e }) {
      return (0, Z.jsx)(`th`, { className: W.tableHeaderCell, children: e });
    },
    td({ children: e }) {
      return (0, Z.jsx)(`td`, { className: W.tableCell, children: e });
    },
  };
  return l;
}
function xn({
  allowWideBlocks: e,
  cwd: t,
  forceCodeBlockWordWrap: n,
  hideCodeBlocks: r,
  hostId: i = _,
  onAddSelectedTextToChat: a,
  onFileLinkOpen: o,
  openFileLinksInSidePanel: s,
  renderCodeBlocksImmediately: c = !1,
  renderCodeBlocksAsWritingBlocks: l,
}) {
  return function ({ className: u, children: d, inline: f }) {
    let p = vn(d);
    if (f)
      return Lt({
        className: u,
        content: p,
        cwd: t ?? null,
        hostId: i,
        onFileLinkOpen: o,
        openFileLinksInSidePanel: s,
      });
    if (r) return null;
    let m = u
      ?.split(` `)
      .find((e) => e.startsWith(`language-`))
      ?.slice(9);
    return (0, Z.jsx)(Bt, {
      allowWideBlocks: e,
      content: p,
      forceCodeBlockWordWrap: n,
      language: m,
      onAddSelectedTextToChat: a,
      renderImmediately: c,
      renderCodeBlocksAsWritingBlocks: l,
    });
  };
}
function Sn({
  conversationId: e,
  cwd: t,
  hostId: n = _,
  isBrowserSidebarEnabled: r,
  onFileLinkOpen: i,
  openFileLinksInSidePanel: a,
}) {
  return function ({ href: o, children: s, [vt]: c }) {
    let l = typeof c == `string` ? c.trim() : vn(s).trim();
    if (o != null) {
      let e = ge({
        cwd: t ?? null,
        hostId: n,
        href: o,
        label: l,
        onFileLinkOpen: i,
        openFileLinksInSidePanel: a,
      });
      if (e != null) return e;
    }
    return (0, Z.jsx)(fe, {
      conversationId: e,
      href: o,
      isBrowserSidebarEnabled: r,
      originHostId: n,
      children: s,
    });
  };
}
function Cn(e) {
  let t = X.Children.toArray(e).filter((e) => (0, X.isValidElement)(e));
  return t.length === 0
    ? !1
    : t.every((e) => e.props.className?.includes(`task-list-item`) ?? !1);
}
function wn(e, t, n) {
  let r = n.directives?.[e.name];
  return r == null
    ? e.raw
    : (0, Z.jsx)(
        r,
        {
          name: e.name,
          attributes: e.attributes,
          rawText: e.text,
          children:
            e.tokens == null ? void 0 : n.renderInlineTokens(e.tokens, t),
        },
        t,
      );
}
var Tn = [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`];
function En(e, t, n) {
  let r = n.renderInlineTokens(e.tokens, t),
    i = Tn[e.depth - 1];
  return i == null
    ? (0, Z.jsx)(n.components?.p ?? `p`, { children: r }, t)
    : (0, Z.jsx)(n.components?.[i] ?? i, { children: r }, t);
}
function Dn(e, t, n) {
  let r = e.items.some((e) => e.task) ? `contains-task-list` : void 0;
  return e.ordered
    ? (0, Z.jsx)(
        n.components?.ol ?? `ol`,
        {
          className: r,
          start: e.start === `` ? void 0 : e.start,
          children: n.renderTokens(e.items),
        },
        t,
      )
    : (0, Z.jsx)(
        n.components?.ul ?? `ul`,
        { className: r, children: n.renderTokens(e.items) },
        t,
      );
}
function On(e, t, n) {
  return (0, Z.jsxs)(
    n.components?.li ?? `li`,
    {
      className: e.task ? `task-list-item` : void 0,
      children: [
        e.task
          ? (0, Z.jsx)(`input`, {
              type: `checkbox`,
              checked: !!e.checked,
              disabled: !0,
            })
          : null,
        n.renderTokens(e.tokens),
      ],
    },
    t,
  );
}
function kn(e, t, n) {
  let r = n.components?.table ?? `table`,
    i = n.components?.thead ?? `thead`,
    a = n.components?.tbody ?? `tbody`,
    o = n.components?.tr ?? `tr`,
    s = n.components?.th ?? `th`,
    c = n.components?.td ?? `td`;
  return (0, Z.jsxs)(
    r,
    {
      children: [
        (0, Z.jsx)(i, {
          children: (0, Z.jsx)(o, {
            children: e.header.map((e, r) =>
              (0, Z.jsx)(
                s,
                {
                  align: e.align ?? void 0,
                  children: n.renderInlineTokens(e.tokens, `${t}-header-${r}`),
                },
                `header-${r}`,
              ),
            ),
          }),
        }),
        (0, Z.jsx)(a, {
          children: e.rows.map((e, r) =>
            (0, Z.jsx)(
              o,
              {
                children: e.map((e, i) =>
                  (0, Z.jsx)(
                    c,
                    {
                      align: e.align ?? void 0,
                      children: n.renderInlineTokens(
                        e.tokens,
                        `${t}-cell-${r}-${i}`,
                      ),
                    },
                    `cell-${r}-${i}`,
                  ),
                ),
              },
              `row-${r}`,
            ),
          ),
        }),
      ],
    },
    t,
  );
}
var An = new Set([
  `blockquote`,
  `br`,
  `code`,
  `codespan`,
  `def`,
  `del`,
  `em`,
  `escape`,
  `heading`,
  `hr`,
  `html`,
  `image`,
  `link`,
  `list`,
  `list_item`,
  `paragraph`,
  `space`,
  `strong`,
  `table`,
  `text`,
]);
function jn(e, t) {
  let n = {
    ...t,
    renderTokens(e) {
      return Nn(e, n);
    },
    renderInlineTokens(e, t) {
      return n.allowBasicHtml === !0
        ? Mn(e, t, n)
        : e.map((e, r) => Pn(e, `${t}-${e.type}-${r}`, n));
    },
  };
  return n.renderTokens(e);
}
function Mn(e, t, n) {
  let r = [];
  for (let i = 0; i < e.length; i += 1) {
    let a = e[i],
      o = n.allowBasicHtml === !0 ? Ln(a) : null,
      s = o == null ? null : Rn(e, i + 1, o);
    if (o != null && s != null) {
      let a = e.slice(i + 1, s),
        c = `${t}-${o}-${i}`;
      (r.push(In(o, Mn(a, c, n), c, a)), (i = s));
      continue;
    }
    r.push(Pn(a, `${t}-${a.type}-${i}`, n));
  }
  return r;
}
function Nn(e, t) {
  return e.map((e, n) => Pn(e, `${e.type}-${n}`, t));
}
function Pn(e, t, n) {
  if (Hn(e)) return wn(e, t, n);
  if (Un(e)) return At(e, t);
  if (!Wn(e)) return Kn(e);
  switch (e.type) {
    case `space`:
      return null;
    case `hr`:
      return yt(t, n);
    case `heading`:
      return En(e, t, n);
    case `paragraph`:
      return bt(e, t, n);
    case `text`:
      return xt(e, t, n);
    case `escape`:
      return e.text;
    case `strong`:
      return St(e, t, n);
    case `em`:
      return Ct(e, t, n);
    case `del`:
      return wt(e, t, n);
    case `codespan`:
      return Tt(e, t, n);
    case `br`:
      return (0, Z.jsx)(`br`, {}, t);
    case `link`:
      return Et(e, t, n);
    case `image`:
      return Dt(e, t, n);
    case `code`:
      return Ot(e, t, n);
    case `blockquote`:
      return kt(e, t, n);
    case `list`:
      return Dn(e, t, n);
    case `list_item`:
      return On(e, t, n);
    case `table`:
      return kn(e, t, n);
    case `html`:
      return Fn(e.raw, t, n.allowBasicHtml === !0);
    case `def`:
      return null;
  }
}
function Fn(e, t, n) {
  return /^<br\s*\/?>$/i.test(e.trim())
    ? (0, Z.jsx)(`br`, {}, t)
    : n
      ? null
      : e;
}
function In(e, t, n, r) {
  switch (e) {
    case `b`:
      return (0, Z.jsx)(`b`, { children: t }, n);
    case `del`:
      return (0, Z.jsx)(`del`, { children: t }, n);
    case `em`:
      return (0, Z.jsx)(`em`, { children: t }, n);
    case `i`:
      return (0, Z.jsx)(`i`, { children: t }, n);
    case `s`:
      return (0, Z.jsx)(`s`, { children: t }, n);
    case `strong`:
      return (0, Z.jsx)(`strong`, { children: t }, n);
    case `sub`:
      return Bn(r)
        ? (0, Z.jsx)(`span`, { children: t }, n)
        : (0, Z.jsx)(`sub`, { children: t }, n);
    case `sup`:
      return (0, Z.jsx)(`sup`, { children: t }, n);
    case `u`:
      return (0, Z.jsx)(`u`, { children: t }, n);
  }
}
function Ln(e) {
  if (!Gn(e)) return null;
  let t = e.raw
    .trim()
    .match(/^<([a-z]+)>$/i)?.[1]
    ?.toLowerCase();
  return t != null && Vn(t) ? t : null;
}
function Rn(e, t, n) {
  let r = 0;
  for (let i = t; i < e.length; i += 1) {
    let t = e[i];
    if (Ln(t) === n) {
      r += 1;
      continue;
    }
    if (zn(t, n)) {
      if (r === 0) return i;
      --r;
    }
  }
  return null;
}
function zn(e, t) {
  return Gn(e) && e.raw.trim().toLowerCase() === `</${t}>`;
}
function Bn(e) {
  return e.some((e) =>
    e.type === `image` &&
    `href` in e &&
    typeof e.href == `string` &&
    Zt(e.href) != null
      ? !0
      : `tokens` in e && Array.isArray(e.tokens) && Bn(e.tokens),
  );
}
function Vn(e) {
  return (
    e === `b` ||
    e === `del` ||
    e === `em` ||
    e === `i` ||
    e === `s` ||
    e === `strong` ||
    e === `sub` ||
    e === `sup` ||
    e === `u`
  );
}
function Hn(e) {
  return (
    e.type === `codexDirective` &&
    `name` in e &&
    typeof e.name == `string` &&
    `attributes` in e &&
    e.attributes != null &&
    typeof e.attributes == `object`
  );
}
function Un(e) {
  return (
    e.type === `math` &&
    `text` in e &&
    typeof e.text == `string` &&
    `display` in e &&
    typeof e.display == `boolean`
  );
}
function Wn(e) {
  return An.has(e.type);
}
function Gn(e) {
  return Wn(e) && e.type === `html`;
}
function Kn(e) {
  return `raw` in e && typeof e.raw == `string` ? e.raw : ``;
}
function qn({
  allowBasicHtml: e = !1,
  allowWideBlocks: t = !1,
  animateMarkdown: n = !1,
  className: r,
  components: i,
  cwd: a = null,
  directives: o,
  forceCodeBlockWordWrap: s = !1,
  hideCodeBlocks: c,
  hostId: l = _,
  mediaPresentation: u = `default`,
  renderText: d,
  textClassName: f,
  tokens: p,
}) {
  let m = (0, X.useId)(),
    h = (0, X.useRef)(null),
    g = (0, X.useMemo)(
      () => ({
        allowWideBlocks: t,
        animateImageEnter: n,
        cwd: a,
        forceCodeBlockWordWrap: s,
        hideCodeBlocks: c,
        hostId: l,
        mediaPresentation: u,
        rootRef: h,
        textClassName: f,
      }),
      [t, n, a, s, c, l, u, f],
    ),
    v = (0, X.useMemo)(() => bn(g), [g]);
  return (
    (0, X.useEffect)(() => {
      let e = h.current;
      if (e == null) return;
      let t = e.ownerDocument,
        n = (t) => {
          Jn(t, e);
        };
      return (
        t.addEventListener(`copy`, n, { capture: !0 }),
        () => {
          t.removeEventListener(`copy`, n, { capture: !0 });
        }
      );
    }, []),
    (0, Z.jsx)(`div`, {
      ref: h,
      [qe]: m,
      className: D(
        `[&>*:first-child]:mt-0`,
        W.markdownContent,
        n && W.markdownRoot,
        r,
      ),
      children: jn(p, {
        allowBasicHtml: e,
        components: { ...v, ...i },
        directives: o,
        renderText: d,
      }),
    })
  );
}
function Jn(e, t) {
  if (e.clipboardData == null || e.defaultPrevented) return;
  let n = De(t);
  n != null &&
    (e.clipboardData.setData(`text/html`, n.htmlText),
    e.clipboardData.setData(`text/plain`, n.plainText),
    e.preventDefault());
}
var Yn = /^\s*$/;
function Xn({
  cwd: e,
  fadeSegmentStartIndex: t = 0,
  fadeTextParts: n,
  fadeText: r = !1,
  hostId: i = _,
  keyPrefix: a,
  onFileLinkOpen: o,
  openFileLinksInSidePanel: s = !1,
  segmenter: c = null,
  text: l,
}) {
  let u = n == null ? G(l) : null;
  if (!r && n == null && u == null) return l;
  let d =
    n ?? Qn({ segmentText: (e) => (r ? nr(e, c) : [e]), mentions: u, text: l });
  return !r && d.length === 1 && d[0]?.kind === `text` && d[0].segments[0] === l
    ? l
    : $n({
        cwd: e,
        fadeSegmentStartIndex: t,
        fadeText: r,
        hostId: i,
        keyPrefix: a,
        onFileLinkOpen: o,
        openFileLinksInSidePanel: s,
        parts: d,
      });
}
function Zn({ segmenter: e, text: t }) {
  return Qn({ segmentText: (t) => nr(t, e), mentions: G(t), text: t });
}
function Qn({ mentions: e, segmentText: t, text: n }) {
  if (e == null) return [{ kind: `text`, segments: t(n) }];
  let r = [],
    i = 0;
  for (let a of e)
    (a.index > i && r.push({ kind: `text`, segments: t(n.slice(i, a.index)) }),
      r.push({ kind: `mention`, content: a.content, index: a.index }),
      (i = a.index + a.content.length));
  return (i < n.length && r.push({ kind: `text`, segments: t(n.slice(i)) }), r);
}
function $n({
  cwd: e,
  fadeSegmentStartIndex: t,
  fadeText: n,
  hostId: r,
  keyPrefix: i,
  onFileLinkOpen: a,
  openFileLinksInSidePanel: o,
  parts: s,
}) {
  let c = [],
    l = t;
  for (let t of s) {
    if (t.kind === `text`) {
      (c.push(
        ...tr({ fadeText: n, fadeSegmentStartIndex: l, segments: t.segments }),
      ),
        (l += t.segments.length));
      continue;
    }
    (c.push(
      er({
        content: t.content,
        cwd: e ?? null,
        fadeText: n,
        fadeSegmentIndex: l,
        hostId: r,
        key: `${i}-mention-${t.index}`,
        onFileLinkOpen: a,
        openFileLinksInSidePanel: o,
      }),
    ),
      (l += 1));
  }
  return c;
}
function er({
  content: e,
  cwd: t,
  fadeText: n,
  fadeSegmentIndex: r,
  hostId: i,
  key: a,
  onFileLinkOpen: o,
  openFileLinksInSidePanel: s,
}) {
  let c = Lt({
    content: e,
    cwd: t,
    hostId: i,
    key: n ? void 0 : a,
    onFileLinkOpen: o,
    openFileLinksInSidePanel: s,
  });
  return n
    ? (0, Z.jsx)(`span`, { className: W.fadeIn, children: c }, `fade-${r}`)
    : c;
}
function tr({ fadeText: e, fadeSegmentStartIndex: t, segments: n }) {
  return e
    ? n.map((e, n) => {
        let r = t + n;
        return (0, Z.jsx)(
          `span`,
          { className: W.fadeIn, children: e },
          `fade-${r}`,
        );
      })
    : n;
}
function nr(e, t) {
  if (ar(e)) return rr(e);
  if (t == null) {
    let t = Array.from(e.match(/\s*\S+(?:\s+|$)/g) ?? []);
    return t.length > 0 || e.length === 0 ? t : [e];
  }
  let n = [];
  for (let { segment: r, isWordLike: i } of t.segment(e)) {
    if (Yn.test(r) || !i) {
      let e = Math.max(n.length - 1, 0);
      ((n[e] ??= ``), (n[e] += r));
      continue;
    }
    n.push(r);
  }
  return n;
}
function rr(e) {
  let t = [],
    n = 0;
  for (; n < e.length; ) {
    if (ir(e, n)) {
      let r = n;
      for (; ir(e, n); ) n += 1;
      t.push(e.slice(r, n));
      continue;
    }
    let r = Math.max(t.length - 1, 0);
    ((t[r] ??= ``), (t[r] += e[n]), (n += 1));
  }
  return t;
}
function ir(e, t) {
  if (t >= e.length) return !1;
  let n = e.charCodeAt(t);
  return (n >= 48 && n <= 57) || (n >= 65 && n <= 90) || (n >= 97 && n <= 122);
}
function ar(e) {
  for (let t = 0; t < e.length; t += 1) if (e.charCodeAt(t) > 127) return !1;
  return !0;
}
function or(e) {
  let t = (0, Y.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(`div`, {
        className: `mb-2 font-medium text-token-text-primary`,
        children: (0, Z.jsx)(M, {
          id: `markdown.renderError.title`,
          defaultMessage: `Markdown couldn't render`,
          description: `Error message shown when Markdown content fails to render`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(M, {
        id: `markdown.renderError.retry`,
        defaultMessage: `Try again`,
        description: `Button label to retry rendering Markdown content`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, Z.jsxs)(`div`, {
          className: `rounded-md border border-token-border bg-token-foreground/5 px-3 py-2 text-sm text-token-text-secondary`,
          children: [
            r,
            (0, Z.jsx)(H, {
              color: `secondary`,
              size: `default`,
              onClick: n,
              children: i,
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
var sr = new Map([
    [`.env`, `code`],
    [`.env.example`, `code`],
    [`.env.local`, `code`],
    [`.gitignore`, `code`],
    [`.npmrc`, `code`],
    [`.prettierignore`, `code`],
    [`.prettierrc`, `json`],
    [`cargo.lock`, `rust`],
    [`cargo.toml`, `rust`],
    [`changelog`, `document`],
    [`dockerfile`, `code`],
    [`license`, `document`],
    [`license.md`, `document`],
    [`makefile`, `code`],
    [`package-lock.json`, `json`],
    [`package.json`, `json`],
    [`readme`, `document`],
    [`readme.md`, `document`],
    [`requirements.txt`, `python`],
    [`tsconfig.json`, `json`],
    [`yarn.lock`, `json`],
  ]),
  cr = new Map([
    [`adoc`, `document`],
    [`asciidoc`, `document`],
    [`avif`, `image`],
    [`bash`, `code`],
    [`bmp`, `image`],
    [`c`, `c-plus`],
    [`cc`, `c-plus`],
    [`cfg`, `code`],
    [`conf`, `code`],
    [`cpp`, `c-plus`],
    [`csv`, `spreadsheet`],
    [`css`, `code`],
    [`cxx`, `c-plus`],
    [`doc`, `document`],
    [`docx`, `document`],
    [`gif`, `image`],
    [`go`, `code`],
    [`h`, `c-plus`],
    [`har`, `json`],
    [`heic`, `image`],
    [`heif`, `image`],
    [`hh`, `c-plus`],
    [`hpp`, `c-plus`],
    [`htm`, `html`],
    [`html`, `html`],
    [`hxx`, `c-plus`],
    [`ico`, `image`],
    [`ini`, `code`],
    [`ipynb`, `notebook`],
    [`java`, `java`],
    [`jpeg`, `image`],
    [`jpg`, `image`],
    [`js`, `javascript`],
    [`json`, `json`],
    [`json5`, `json`],
    [`jsonl`, `json`],
    [`jsx`, `react`],
    [`key`, `presentation`],
    [`less`, `code`],
    [`lock`, `json`],
    [`log`, `document`],
    [`m`, `c-plus`],
    [`markdown`, `document`],
    [`md`, `document`],
    [`mdx`, `document`],
    [`mjs`, `javascript`],
    [`mts`, `typescript`],
    [`numbers`, `spreadsheet`],
    [`ods`, `spreadsheet`],
    [`odt`, `document`],
    [`odp`, `presentation`],
    [`pages`, `document`],
    [`parquet`, `spreadsheet`],
    [`pdf`, `document`],
    [`php`, `php`],
    [`phtml`, `php`],
    [`png`, `image`],
    [`ppt`, `presentation`],
    [`pptx`, `presentation`],
    [`ps1`, `code`],
    [`psd`, `image`],
    [`py`, `python`],
    [`pyi`, `python`],
    [`rb`, `code`],
    [`rs`, `rust`],
    [`rst`, `document`],
    [`rtf`, `document`],
    [`sass`, `code`],
    [`scss`, `code`],
    [`sh`, `code`],
    [`sql`, `code`],
    [`svg`, `image`],
    [`tex`, `document`],
    [`tif`, `image`],
    [`tiff`, `image`],
    [`toml`, `code`],
    [`ts`, `typescript`],
    [`tsv`, `spreadsheet`],
    [`tsx`, `react`],
    [`txt`, `document`],
    [`vue`, `react`],
    [`webmanifest`, `json`],
    [`webp`, `image`],
    [`xls`, `spreadsheet`],
    [`xlsx`, `spreadsheet`],
    [`xhtml`, `html`],
    [`xml`, `code`],
    [`yaml`, `code`],
    [`yml`, `code`],
    [`zsh`, `code`],
  ]);
function lr(e) {
  let t = e.split(/[\\/]/).pop()?.toLowerCase() ?? ``,
    n = sr.get(t);
  if (n != null) return n;
  let r = ur(t);
  return r.length === 0 ? `file` : (cr.get(r) ?? `file`);
}
function ur(e) {
  let t = e.lastIndexOf(`.`);
  return t <= 0 ? `` : e.slice(t + 1);
}
function dr(e) {
  let t = (0, Y.c)(21),
    {
      cwd: n,
      hostId: r,
      path: i,
      lineRangeStart: a,
      lineRangeEnd: o,
      openInSidePanel: s,
    } = e,
    c = s === void 0 ? !1 : s,
    l = ee();
  if (typeof i != `string` || i.trim().length === 0) return null;
  let u, d, f, p, m;
  if (t[0] !== l || t[1] !== o || t[2] !== a || t[3] !== i) {
    ((p = _r(a)), (d = _r(o)), (f = hr(i)));
    let e = gr(f),
      n = lr(i),
      r = e.length === 0 ? fr(n, l) : null;
    m = pr(l, p, d, mr(n));
    let s =
      m == null
        ? null
        : l.formatMessage(
            {
              id: `markdown.fileCitation.lineLabelDisplay`,
              defaultMessage: `({lineLabel})`,
              description: `Line label shown inside parentheses in a file citation chip`,
            },
            { lineLabel: m },
          );
    ((u = f),
      r != null && s != null
        ? (u = l.formatMessage(
            {
              id: `markdown.fileCitation.ariaLabelWithTypeAndLine`,
              defaultMessage: `{fileName}, {fileTypeLabel} {lineLabel}`,
              description: `Accessible label for an extensionless file citation chip with line information`,
            },
            { fileName: f, fileTypeLabel: r, lineLabel: s },
          ))
        : r == null
          ? s != null &&
            (u = l.formatMessage(
              {
                id: `markdown.fileCitation.ariaLabelWithLine`,
                defaultMessage: `{fileName} {lineLabel}`,
                description: `Accessible label for a file citation chip with line information`,
              },
              { fileName: f, lineLabel: s },
            ))
          : (u = l.formatMessage(
              {
                id: `markdown.fileCitation.ariaLabelWithType`,
                defaultMessage: `{fileName}, {fileTypeLabel}`,
                description: `Accessible label for an extensionless file citation chip`,
              },
              { fileName: f, fileTypeLabel: r },
            )),
      (t[0] = l),
      (t[1] = o),
      (t[2] = a),
      (t[3] = i),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m));
  } else ((u = t[4]), (d = t[5]), (f = t[6]), (p = t[7]), (m = t[8]));
  let h = m == null ? f : `${f} (${m})`,
    g;
  t[9] !== d || t[10] !== p || t[11] !== i
    ? ((g = { path: i, line: p, endLine: d }),
      (t[9] = d),
      (t[10] = p),
      (t[11] = i),
      (t[12] = g))
    : (g = t[12]);
  let _;
  return (
    t[13] !== u ||
    t[14] !== n ||
    t[15] !== h ||
    t[16] !== r ||
    t[17] !== c ||
    t[18] !== i ||
    t[19] !== g
      ? ((_ = (0, Z.jsx)(he, {
          reference: g,
          ariaLabel: u,
          label: h,
          tooltipText: i,
          cwd: n,
          hostId: r,
          openInSidePanel: c,
        })),
        (t[13] = u),
        (t[14] = n),
        (t[15] = h),
        (t[16] = r),
        (t[17] = c),
        (t[18] = i),
        (t[19] = g),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
function fr(e, t) {
  switch (e) {
    case `c-plus`:
    case `code`:
    case `html`:
    case `java`:
    case `javascript`:
    case `json`:
    case `notebook`:
    case `php`:
    case `python`:
    case `react`:
    case `rust`:
    case `typescript`:
      return t.formatMessage({
        id: `markdown.fileCitation.artifactType.code`,
        defaultMessage: `Code`,
        description: `Fallback file type label for a code file citation with no extension`,
      });
    case `document`:
      return t.formatMessage({
        id: `markdown.fileCitation.artifactType.document`,
        defaultMessage: `Document`,
        description: `Fallback file type label for a document file citation with no extension`,
      });
    case `file`:
      return t.formatMessage({
        id: `markdown.fileCitation.artifactType.file`,
        defaultMessage: `File`,
        description: `Fallback file type label for a file citation with no extension`,
      });
    case `image`:
      return t.formatMessage({
        id: `markdown.fileCitation.artifactType.image`,
        defaultMessage: `Image`,
        description: `Fallback file type label for an image file citation with no extension`,
      });
    case `presentation`:
      return t.formatMessage({
        id: `markdown.fileCitation.artifactType.presentation`,
        defaultMessage: `Presentation`,
        description: `Fallback file type label for a presentation file citation with no extension`,
      });
    case `spreadsheet`:
      return t.formatMessage({
        id: `markdown.fileCitation.artifactType.spreadsheet`,
        defaultMessage: `Spreadsheet`,
        description: `Fallback file type label for a spreadsheet file citation with no extension`,
      });
  }
}
function pr(e, t, n, r) {
  return t == null
    ? null
    : n != null && n !== t
      ? e.formatMessage(
          {
            id: `markdown.fileCitation.linesLabel`,
            defaultMessage: `lines {line}-{endLine}`,
            description: `Line range label shown inside a file citation chip`,
          },
          { endLine: n, line: t },
        )
      : !r && t === 1
        ? null
        : e.formatMessage(
            {
              id: `markdown.fileCitation.lineLabel`,
              defaultMessage: `line {line}`,
              description: `Single line label shown inside a file citation chip`,
            },
            { line: t },
          );
}
function mr(e) {
  switch (e) {
    case `c-plus`:
    case `code`:
    case `html`:
    case `java`:
    case `javascript`:
    case `json`:
    case `notebook`:
    case `php`:
    case `python`:
    case `react`:
    case `rust`:
    case `typescript`:
      return !0;
    case `document`:
    case `file`:
    case `image`:
    case `presentation`:
    case `spreadsheet`:
      return !1;
  }
}
function hr(e) {
  return e.split(/[\\/]/).pop() ?? e;
}
function gr(e) {
  let t = e.lastIndexOf(`.`);
  return t <= 0 || t === e.length - 1 ? `` : e.slice(t);
}
function _r(e) {
  if (typeof e == `number`) return Number.isFinite(e) && e > 0 ? e : void 0;
  if (typeof e != `string`) return;
  let t = Number.parseInt(e, 10);
  return Number.isNaN(t) || t <= 0 ? void 0 : t;
}
function Q(e, t) {
  let n = e[t];
  return typeof n == `string` ? n : void 0;
}
function vr({ cwd: e, hostId: t = _, openFileLinksInSidePanel: r = !1 }) {
  return {
    [n]({ attributes: n }) {
      return (0, Z.jsx)(dr, {
        cwd: e ?? null,
        hostId: t,
        path: Q(n, `path`),
        lineRangeStart: Q(n, `lineRangeStart`) ?? Q(n, `line_range_start`),
        lineRangeEnd: Q(n, `lineRangeEnd`) ?? Q(n, `line_range_end`),
        openInSidePanel: r,
      });
    },
  };
}
function yr() {
  return {
    [c]({ attributes: e, children: t }) {
      return (0, Z.jsxs)(`details`, {
        className: `group my-3 rounded-xl border border-token-border/30 bg-token-bg-secondary/15 px-4 py-3`,
        open: Q(e, `open`) === `true`,
        children: [
          (0, Z.jsxs)(`summary`, {
            className: `text-size-chat flex cursor-interaction list-none items-center gap-1.5 font-medium text-token-foreground marker:hidden [&::-webkit-details-marker]:hidden`,
            children: [
              (0, Z.jsx)(se, {
                className: `icon-2xs shrink-0 transition-transform group-open:rotate-90`,
              }),
              Q(e, `summary`),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: `pt-2 [&>*:last-child]:mb-0`,
            children: t,
          }),
        ],
      });
    },
  };
}
function br() {
  return {
    [v]: $,
    [C]: $,
    [x]: $,
    [i]: $,
    [r]: $,
    [b]: $,
    [a]: $,
    [l]: $,
    [m]: $,
  };
}
function $() {
  return null;
}
function xr(e) {
  let t = (0, Y.c)(13),
    { title: n, prompt: r } = e,
    i = L(),
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`span`, {
        className: `text-sm text-token-text-tertiary`,
        children: (0, Z.jsx)(M, {
          id: `wham.whamProposedTask.title`,
          defaultMessage: `Suggested task`,
          description: `Label for a card that suggests a follow up Codex task`,
        }),
      })),
      (o = D(`text-sm font-medium`)),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Z.jsxs)(`div`, {
        className: `flex flex-1 flex-col`,
        children: [a, (0, Z.jsx)(`span`, { className: o, children: n })],
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] !== i || t[5] !== r
    ? ((c = () => {
        i(`/`, { state: { prefillPrompt: r } });
      }),
      (t[4] = i),
      (t[5] = r),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(M, {
        id: `wham.whamProposedTask.useSuggestion`,
        defaultMessage: `Use suggestion`,
        description: `Button to open the Composer with a prefilled prompt from a suggestion`,
      })),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === c
    ? (u = t[9])
    : ((u = (0, Z.jsx)(`div`, {
        className: `flex items-center gap-2 text-sm`,
        children: (0, Z.jsx)(H, { color: `outline`, onClick: c, children: l }),
      })),
      (t[8] = c),
      (t[9] = u));
  let d;
  return (
    t[10] !== s || t[11] !== u
      ? ((d = (0, Z.jsxs)(`div`, {
          className: `mt-1 mb-3 flex w-full items-center rounded-xl border border-token-input-border bg-token-bg-primary px-3 py-3`,
          children: [s, u],
        })),
        (t[10] = s),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function Sr() {
  return {
    [p]({ attributes: e, rawText: t }) {
      return (0, Z.jsx)(xr, { title: Q(e, `title`) ?? ``, prompt: t ?? `` });
    },
  };
}
function Cr({
  cwd: e,
  enableInlineDil: t,
  hostId: n,
  openFileLinksInSidePanel: r,
}) {
  return {
    ...vr({ cwd: e, hostId: n, openFileLinksInSidePanel: r }),
    ...Sr(),
    ...yr(),
    ...br(),
  };
}
function wr({
  allowWideBlocks: e,
  conversationId: t,
  cwd: n,
  forceCodeBlockWordWrap: r,
  hideCodeBlocks: i,
  hostId: a,
  isBrowserSidebarEnabled: o,
  onAddSelectedTextToChat: s,
  onFileLinkOpen: c,
  openFileLinksInSidePanel: l,
  renderCodeBlocksImmediately: u,
  renderCodeBlocksAsWritingBlocks: d,
}) {
  return {
    a: Sn({
      conversationId: t,
      cwd: n,
      hostId: a,
      isBrowserSidebarEnabled: o,
      onFileLinkOpen: c,
      openFileLinksInSidePanel: l ?? !1,
    }),
    code: xn({
      allowWideBlocks: e,
      cwd: n,
      forceCodeBlockWordWrap: r,
      hideCodeBlocks: i,
      hostId: a,
      onAddSelectedTextToChat: s,
      onFileLinkOpen: c,
      openFileLinksInSidePanel: l ?? !1,
      renderCodeBlocksImmediately: u,
      renderCodeBlocksAsWritingBlocks: d,
    }),
  };
}
function Tr(e, t) {
  return e;
}
function Er(e) {
  switch (e?.kind ?? `chat`) {
    case `assistant-message`:
      return W.markdownText;
    case `chat`:
      return W.markdownText;
    case `small`:
      return W.markdownTextSmall;
  }
}
function Dr(e) {
  let t = (0, Y.c)(5),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = (0, Z.jsx)(kr, { ...e })), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] !== e.children || t[3] !== n
      ? ((r = (0, Z.jsx)(oe, {
          name: `Markdown`,
          resetKey: e.children,
          fallback: Or,
          children: n,
        })),
        (t[2] = e.children),
        (t[3] = n),
        (t[4] = r))
      : (r = t[4]),
    r
  );
}
function Or(e) {
  return (0, Z.jsx)(or, {
    onRetry: () => {
      e.resetError();
    },
  });
}
function kr(e) {
  let t = (0, Y.c)(66),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    _,
    v,
    y,
    b;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]),
      (h = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (b = t[18]))
    : (({
        allowWideBlocks: p,
        children: n,
        components: r,
        conversationId: m,
        cwd: i,
        directives: a,
        extensions: o,
        forceCodeBlockWordWrap: h,
        hideCodeBlocks: s,
        hostId: c,
        isBrowserSidebarEnabled: _,
        onAddSelectedTextToChat: l,
        onFileLinkOpen: u,
        openFileLinksInSidePanel: d,
        renderCodeBlocksImmediately: v,
        renderCodeBlocksAsWritingBlocks: y,
        textStyle: b,
        ...f
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m),
      (t[14] = h),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b));
  let x = p === void 0 ? !1 : p,
    S = m === void 0 ? null : m,
    C = h === void 0 ? !1 : h,
    w = _ === void 0 ? !1 : _,
    T = v === void 0 ? !1 : v,
    E = y === void 0 ? !1 : y,
    D = te(`2957382457`),
    O;
  t[19] !== n || t[20] !== D || t[21] !== o
    ? ((O = g(Tr(n, D), o)), (t[19] = n), (t[20] = D), (t[21] = o), (t[22] = O))
    : (O = t[22]);
  let k = O,
    ee;
  t[23] === b ? (ee = t[24]) : ((ee = Er(b)), (t[23] = b), (t[24] = ee));
  let A = ee,
    j;
  t[25] !== i || t[26] !== D || t[27] !== c || t[28] !== d
    ? ((j = Cr({
        cwd: i,
        enableInlineDil: D,
        hostId: c,
        openFileLinksInSidePanel: d,
      })),
      (t[25] = i),
      (t[26] = D),
      (t[27] = c),
      (t[28] = d),
      (t[29] = j))
    : (j = t[29]);
  let M;
  t[30] !== a || t[31] !== j
    ? ((M = { ...j, ...a }), (t[30] = a), (t[31] = j), (t[32] = M))
    : (M = t[32]);
  let N = M,
    P;
  t[33] !== x ||
  t[34] !== S ||
  t[35] !== i ||
  t[36] !== C ||
  t[37] !== s ||
  t[38] !== c ||
  t[39] !== w ||
  t[40] !== l ||
  t[41] !== u ||
  t[42] !== d ||
  t[43] !== E ||
  t[44] !== T
    ? ((P = wr({
        allowWideBlocks: x,
        conversationId: S,
        cwd: i,
        forceCodeBlockWordWrap: C,
        hideCodeBlocks: s,
        hostId: c,
        isBrowserSidebarEnabled: w,
        onAddSelectedTextToChat: l,
        onFileLinkOpen: u,
        openFileLinksInSidePanel: d,
        renderCodeBlocksImmediately: T,
        renderCodeBlocksAsWritingBlocks: E,
      })),
      (t[33] = x),
      (t[34] = S),
      (t[35] = i),
      (t[36] = C),
      (t[37] = s),
      (t[38] = c),
      (t[39] = w),
      (t[40] = l),
      (t[41] = u),
      (t[42] = d),
      (t[43] = E),
      (t[44] = T),
      (t[45] = P))
    : (P = t[45]);
  let F;
  t[46] !== r || t[47] !== P
    ? ((F = { ...P, ...r }), (t[46] = r), (t[47] = P), (t[48] = F))
    : (F = t[48]);
  let I = F,
    L;
  t[49] !== i || t[50] !== c || t[51] !== u || t[52] !== d
    ? ((L = (e, t) =>
        Xn({
          cwd: i,
          hostId: c,
          keyPrefix: t,
          onFileLinkOpen: u,
          openFileLinksInSidePanel: d ?? !1,
          text: e,
        })),
      (t[49] = i),
      (t[50] = c),
      (t[51] = u),
      (t[52] = d),
      (t[53] = L))
    : (L = t[53]);
  let R = L,
    z;
  return (
    t[54] !== x ||
    t[55] !== i ||
    t[56] !== C ||
    t[57] !== s ||
    t[58] !== c ||
    t[59] !== I ||
    t[60] !== N ||
    t[61] !== f ||
    t[62] !== R ||
    t[63] !== A ||
    t[64] !== k
      ? ((z = (0, Z.jsx)(qn, {
          ...f,
          allowWideBlocks: x,
          components: I,
          cwd: i,
          directives: N,
          forceCodeBlockWordWrap: C,
          hideCodeBlocks: s,
          hostId: c,
          renderText: R,
          textClassName: A,
          tokens: k,
        })),
        (t[54] = x),
        (t[55] = i),
        (t[56] = C),
        (t[57] = s),
        (t[58] = c),
        (t[59] = I),
        (t[60] = N),
        (t[61] = f),
        (t[62] = R),
        (t[63] = A),
        (t[64] = k),
        (t[65] = z))
      : (z = t[65]),
    z
  );
}
var Ar = 500,
  jr = new Map(),
  Mr = new WeakMap();
function Nr(e, t) {
  let n = { segmentCount: 0, textByToken: new WeakMap() };
  return (Pr(e, t, n), { textByToken: n.textByToken });
}
function Pr(e, t, n) {
  for (let r of e) Fr(r, t, n);
}
function Fr(e, t, n) {
  if (zr(e)) {
    let r = Ir(e.text, t);
    (n.textByToken.set(e, { parts: r, startIndex: n.segmentCount }),
      (n.segmentCount += Rr(r)));
    return;
  }
  if (`tokens` in e && Array.isArray(e.tokens)) {
    Pr(e.tokens, t, n);
    return;
  }
  if (e.type === `list`) {
    Pr(e.items, t, n);
    return;
  }
  if (e.type === `table`) {
    for (let r of e.header) Pr(r.tokens, t, n);
    for (let r of e.rows) for (let e of r) Pr(e.tokens, t, n);
  }
}
function Ir(e, t) {
  let n = Lr(t),
    r = n.get(e);
  if (r != null) return r;
  let i = Zn({ segmenter: t, text: e });
  if ((n.set(e, i), n.size > Ar)) {
    let e = n.keys().next().value;
    typeof e == `string` && n.delete(e);
  }
  return i;
}
function Lr(e) {
  if (e == null) return jr;
  let t = Mr.get(e);
  if (t != null) return t;
  let n = new Map();
  return (Mr.set(e, n), n);
}
function Rr(e) {
  let t = 0;
  for (let n of e) {
    if (n.kind === `text`) {
      t += n.segments.length;
      continue;
    }
    t += 1;
  }
  return t;
}
function zr(e) {
  return (
    e.type === `text` &&
    `text` in e &&
    typeof e.text == `string` &&
    !(`tokens` in e && Array.isArray(e.tokens))
  );
}
var Br = /\[([^\]\n]+)\]\(([^)\n]+)$/,
  Vr = /(^|\n)[^\S\n]*!\[[^\]\n]*(?:\](?:\([^)\n]*)?)?\s*$/,
  Hr = /^\s/;
function Ur(e) {
  if (e.length === 0 || (e.includes("`") && $r(e))) return e;
  if (e.includes("```") && Qr(e)) return Wr(e);
  let t = e.includes(`![`) ? Gr(e) : e;
  return (
    (t = t.includes(`](`) ? Kr(t) : t),
    (t = qr(t, `**`)),
    (t = qr(t, `*`)),
    t
  );
}
function Wr(e) {
  return e.endsWith(`
`)
    ? `${e}\`\`\``
    : `${e}\n\`\`\``;
}
function Gr(e) {
  return e.replace(Vr, (e, t) => t);
}
function Kr(e) {
  let t = e.match(Br);
  return t ? (f(t[2]) || d(t[2]) != null ? e.replace(Br, `$1`) : `${e})`) : e;
}
function qr(e, t) {
  if (!e.includes(t) || Jr(e, t) % 2 == 0) return e;
  let n = Yr(e, t);
  if (n < 0) return e;
  let r = e.slice(n + t.length);
  return r.length === 0 ||
    Hr.test(r) ||
    r.includes(`
`) ||
    $r(r)
    ? e
    : `${e}${t}`;
}
function Jr(e, t) {
  let n = 0;
  for (let r = 0; r <= e.length - t.length; ) {
    if (e.startsWith(t, r) && !Xr(e, r) && !Zr(e, r, t)) {
      ((n += 1), (r += t.length));
      continue;
    }
    r += 1;
  }
  return n;
}
function Yr(e, t) {
  for (let n = e.length - t.length; n >= 0; --n)
    if (e.startsWith(t, n) && !Xr(e, n) && !Zr(e, n, t)) return n;
  return -1;
}
function Xr(e, t) {
  let n = 0;
  for (let r = t - 1; r >= 0 && e[r] === `\\`; --r) n += 1;
  return n % 2 == 1;
}
function Zr(e, t, n) {
  if (n.length !== 1) return !1;
  let r = n;
  return e[t - 1] === r || e[t + 1] === r;
}
function Qr(e) {
  return ei(e, "```") % 2 == 1;
}
function $r(e) {
  let t = 0;
  for (let n = 0; n < e.length; ) {
    if (e.startsWith("```", n)) {
      for (n += 3; n < e.length && !e.startsWith("```", n); ) n += 1;
      n < e.length && (n += 3);
      continue;
    }
    (e[n] === "`" && !Xr(e, n) && (t += 1), (n += 1));
  }
  return t % 2 == 1;
}
function ei(e, t) {
  let n = 0;
  for (let r = 0; r <= e.length - t.length; ) {
    if (e.startsWith(t, r) && !Xr(e, r)) {
      ((n += 1), (r += t.length));
      continue;
    }
    r += 1;
  }
  return n;
}
var ti = 100;
function ni() {
  return { prefixTokens: new Map(), prefixTokensByExtensions: new WeakMap() };
}
function ri(e, t, n) {
  let r = ai(e);
  if (r === 0) return g(e, t);
  let i = e.slice(0, r),
    a = e.slice(r);
  return [...ii(i, t, n), ...g(a, t)];
}
function ii(e, t, n) {
  let r = oi(t, n),
    i = r.get(e);
  if (i != null) return i;
  let a = ``,
    o = null;
  for (let [t, n] of r)
    t.length > a.length && e.startsWith(t) && ((a = t), (o = n));
  let s = o == null ? g(e, t) : [...o, ...g(e.slice(a.length), t)];
  if ((r.set(e, s), r.size > ti)) {
    let e = r.keys().next().value;
    typeof e == `string` && r.delete(e);
  }
  return s;
}
function ai(e) {
  if (
    !e.includes(`

`)
  )
    return 0;
  let t = 0,
    n = null,
    r = 0,
    i = !1,
    a = 0;
  for (; a <= e.length; ) {
    let o = e.indexOf(
        `
`,
        a,
      ),
      s = o === -1 ? e.length : o,
      c = o === -1 ? e.length : o + 1,
      l = e.slice(a, s).replace(/\r$/, ``),
      u = l.trimStart();
    if (
      (n != null && u.length > 0 && si(l)
        ? ((t = n), (n = null))
        : u.length > 0 && (n = null),
      ci(u) ? (i = !i) : !i && li(u) ? (r += 1) : !i && r > 0 && ui(u) && --r,
      !i && r === 0 && u.length === 0 && o !== -1 && (n = c),
      o === -1)
    )
      break;
    a = c;
  }
  return t;
}
function oi(e, t) {
  if (e == null) return t.prefixTokens;
  let n = t.prefixTokensByExtensions.get(e);
  if (n != null) return n;
  let r = new Map();
  return (t.prefixTokensByExtensions.set(e, r), r);
}
function si(e) {
  return (
    !/^[\t ]/.test(e) &&
    !/^[-+*][\t ]+/.test(e) &&
    !/^\d+\.[\t ]+/.test(e) &&
    !e.startsWith(`>`)
  );
}
function ci(e) {
  return /^(```|~~~)/.test(e);
}
function li(e) {
  return /^:::[a-zA-Z]/.test(e);
}
function ui(e) {
  return /^:::[ \t]*$/.test(e);
}
function di(e) {
  let t = (0, Y.c)(5),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = (0, Z.jsx)(pi, { ...e })), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] !== e.children || t[3] !== n
      ? ((r = (0, Z.jsx)(oe, {
          name: `StreamingMarkdown`,
          resetKey: e.children,
          fallback: fi,
          children: n,
        })),
        (t[2] = e.children),
        (t[3] = n),
        (t[4] = r))
      : (r = t[4]),
    r
  );
}
function fi(e) {
  return (0, Z.jsx)(or, {
    onRetry: () => {
      e.resetError();
    },
  });
}
function pi(e) {
  let t = (0, Y.c)(76),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    _,
    v,
    y,
    b,
    x;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]),
      (h = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (b = t[18]),
      (x = t[19]))
    : (({
        children: n,
        isStreaming: l,
        allowWideBlocks: m,
        components: r,
        conversationId: h,
        cwd: i,
        directives: a,
        extensions: o,
        forceCodeBlockWordWrap: _,
        hideCodeBlocks: s,
        hostId: c,
        isBrowserSidebarEnabled: v,
        onAddSelectedTextToChat: u,
        onFileLinkOpen: d,
        openFileLinksInSidePanel: f,
        renderCodeBlocksImmediately: y,
        renderCodeBlocksAsWritingBlocks: b,
        textStyle: x,
        ...p
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m),
      (t[14] = h),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b),
      (t[19] = x));
  let S = m === void 0 ? !1 : m,
    C = h === void 0 ? null : h,
    w = _ === void 0 ? !1 : _,
    T = v === void 0 ? !1 : v,
    E = y === void 0 ? !1 : y,
    D = b === void 0 ? !1 : b,
    O = te(`2957382457`),
    k;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = ni()), (t[20] = k))
    : (k = t[20]);
  let ee = k,
    A;
  try {
    let e;
    (t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = new Intl.Segmenter(void 0, { granularity: `word` })), (t[21] = e))
      : (e = t[21]),
      (A = e));
  } catch {
    A = null;
  }
  let j = A,
    M;
  if (t[22] !== n || t[23] !== O || t[24] !== o || t[25] !== l) {
    let e = Tr(n, O),
      r = l ? Ur(mi(e)) : e;
    ((M = l ? ri(r, o, ee) : g(r, o)),
      (t[22] = n),
      (t[23] = O),
      (t[24] = o),
      (t[25] = l),
      (t[26] = M));
  } else M = t[26];
  let N = M,
    P;
  t[27] === x ? (P = t[28]) : ((P = Er(x)), (t[27] = x), (t[28] = P));
  let F = P,
    I;
  t[29] !== l || t[30] !== N
    ? ((I = l ? Nr(N, j) : void 0), (t[29] = l), (t[30] = N), (t[31] = I))
    : (I = t[31]);
  let L = I,
    R;
  t[32] !== i || t[33] !== O || t[34] !== c || t[35] !== f
    ? ((R = Cr({
        cwd: i,
        enableInlineDil: O,
        hostId: c,
        openFileLinksInSidePanel: f,
      })),
      (t[32] = i),
      (t[33] = O),
      (t[34] = c),
      (t[35] = f),
      (t[36] = R))
    : (R = t[36]);
  let z;
  t[37] !== a || t[38] !== R
    ? ((z = { ...R, ...a }), (t[37] = a), (t[38] = R), (t[39] = z))
    : (z = t[39]);
  let B = z,
    ne;
  t[40] !== S ||
  t[41] !== C ||
  t[42] !== i ||
  t[43] !== w ||
  t[44] !== s ||
  t[45] !== c ||
  t[46] !== T ||
  t[47] !== u ||
  t[48] !== d ||
  t[49] !== f ||
  t[50] !== D ||
  t[51] !== E
    ? ((ne = wr({
        allowWideBlocks: S,
        conversationId: C,
        cwd: i,
        forceCodeBlockWordWrap: w,
        hideCodeBlocks: s,
        hostId: c,
        isBrowserSidebarEnabled: T,
        onAddSelectedTextToChat: u,
        onFileLinkOpen: d,
        openFileLinksInSidePanel: f,
        renderCodeBlocksImmediately: E,
        renderCodeBlocksAsWritingBlocks: D,
      })),
      (t[40] = S),
      (t[41] = C),
      (t[42] = i),
      (t[43] = w),
      (t[44] = s),
      (t[45] = c),
      (t[46] = T),
      (t[47] = u),
      (t[48] = d),
      (t[49] = f),
      (t[50] = D),
      (t[51] = E),
      (t[52] = ne))
    : (ne = t[52]);
  let re;
  t[53] !== r || t[54] !== ne
    ? ((re = { ...ne, ...r }), (t[53] = r), (t[54] = ne), (t[55] = re))
    : (re = t[55]);
  let ie = re,
    V;
  t[56] !== i ||
  t[57] !== L?.textByToken ||
  t[58] !== c ||
  t[59] !== l ||
  t[60] !== d ||
  t[61] !== f
    ? ((V = (e, t, n) => {
        let r = L?.textByToken.get(n);
        return Xn({
          cwd: i,
          fadeSegmentStartIndex: r?.startIndex,
          fadeText: l,
          fadeTextParts: r?.parts,
          hostId: c,
          keyPrefix: t,
          onFileLinkOpen: d,
          openFileLinksInSidePanel: f ?? !1,
          segmenter: j,
          text: e,
        });
      }),
      (t[56] = i),
      (t[57] = L?.textByToken),
      (t[58] = c),
      (t[59] = l),
      (t[60] = d),
      (t[61] = f),
      (t[62] = V))
    : (V = t[62]);
  let H = V,
    U;
  return (
    t[63] !== S ||
    t[64] !== i ||
    t[65] !== w ||
    t[66] !== s ||
    t[67] !== c ||
    t[68] !== l ||
    t[69] !== ie ||
    t[70] !== B ||
    t[71] !== p ||
    t[72] !== H ||
    t[73] !== F ||
    t[74] !== N
      ? ((U = (0, Z.jsx)(qn, {
          ...p,
          allowWideBlocks: S,
          animateMarkdown: l,
          components: ie,
          cwd: i,
          directives: B,
          forceCodeBlockWordWrap: w,
          hideCodeBlocks: s,
          hostId: c,
          renderText: H,
          textClassName: F,
          tokens: N,
        })),
        (t[63] = S),
        (t[64] = i),
        (t[65] = w),
        (t[66] = s),
        (t[67] = c),
        (t[68] = l),
        (t[69] = ie),
        (t[70] = B),
        (t[71] = p),
        (t[72] = H),
        (t[73] = F),
        (t[74] = N),
        (t[75] = U))
      : (U = t[75]),
    U
  );
}
function mi(e) {
  return e.includes(`::`)
    ? e
        .split(
          `
`,
        )
        .filter((e) => !hi(e)).join(`
`)
    : e;
}
function hi(e) {
  let t = e.trimStart();
  if (!t.startsWith(`::`) || t.startsWith(`:::`)) return !1;
  let n = 2;
  for (; gi(t.charCodeAt(n)); ) n += 1;
  return n === 2 ? !1 : s.has(t.slice(2, n));
}
function gi(e) {
  return (
    (e >= 65 && e <= 90) ||
    (e >= 97 && e <= 122) ||
    (e >= 48 && e <= 57) ||
    e === 45 ||
    e === 95
  );
}
export { Dr as n, Ye as r, di as t };
//# sourceMappingURL=markdown-46SswYUq.js.map
