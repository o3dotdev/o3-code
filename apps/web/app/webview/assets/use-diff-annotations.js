import { s as e, t } from "./chunk-Bj-mKKzh.js";
import {
  Va as n,
  aa as r,
  fa as i,
  fo as a,
  po as o,
  ua as s,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as c, t as l } from "./jsx-runtime.js";
import { t as u } from "./clsx-BcPLHiun.js";
import {
  O as d,
  R as f,
  Y as p,
  o as m,
  p as h,
  s as g,
} from "./pdf-DDdRP0ey.js";
import {
  B as _,
  G as v,
  S as y,
  U as b,
  Z as x,
  _ as S,
  et as C,
  f as w,
  l as T,
  p as E,
  u as D,
  wt as O,
} from "./setting-storage.js";
import { u as k } from "./thread-context-inputs-DBrOekVr.js";
import { p as A } from "./codex-api-bK--r_2t.js";
import { u as j } from "./apps-queries-CmwRqoKz.js";
import { t as M } from "./tooltip-CDzchJxN.js";
import { t as N } from "./button.js";
import { t as P } from "./open-workspace-file-WgoEFjrv.js";
import { t as F } from "./mime-types.js";
import { t as I } from "./focus-composer.js";
import { t as ee } from "./error-boundary.js";
import { n as L } from "./use-resize-observer-DCpyQHos.js";
import { t as R } from "./chevron-right.js";
import { t as z } from "./context-menu.js";
import { t as B } from "./copy-to-clipboard-C2Mq2hN-.js";
import { t as V } from "./codex-BjFeJtxQ.js";
import { n as te, r as H, t as U } from "./open-target-selection.js";
import { n as W } from "./use-skills.js";
import { r as ne, t as G } from "./pull-request-readonly-comment.js";
import { t as K } from "./arrow-up-fq4d26GH.js";
import {
  a as q,
  c as re,
  i as J,
  n as ie,
  o as ae,
  t as oe,
} from "./prompt-editor-.js";
import { t as se } from "./at-mention-list-C6rdlW9Y.js";
import { i as ce } from "./use-composer-controller.js";
import { n as le, r as Y, t as ue } from "./rich-preview-primitives.js";
import { n as de, t as fe } from "./markdown-surface-vWOcyIeh.js";
import { t as pe } from "./anchored-autocomplete-overlay.js";
import { t as me } from "./use-autocomplete-overlay-placement-uVAiOuYR.js";
var X = O(),
  Z = l();
function he(e) {
  let t = (0, X.c)(14),
    { className: n, showAfterOnly: r, after: i, before: a } = e,
    o;
  t[0] === n
    ? (o = t[1])
    : ((o = u(`relative overflow-auto`, n)), (t[0] = n), (t[1] = o));
  let s = r ? `grid-cols-1` : `grid-cols-2`,
    c;
  t[2] === s ? (c = t[3]) : ((c = u(`grid gap-px`, s)), (t[2] = s), (t[3] = c));
  let l;
  t[4] !== i || t[5] !== a || t[6] !== r
    ? ((l = r ? i : (0, Z.jsxs)(Z.Fragment, { children: [a, i] })),
      (t[4] = i),
      (t[5] = a),
      (t[6] = r),
      (t[7] = l))
    : (l = t[7]);
  let d;
  t[8] !== c || t[9] !== l
    ? ((d = (0, Z.jsx)(`div`, { className: c, children: l })),
      (t[8] = c),
      (t[9] = l),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== o || t[12] !== d
      ? ((f = (0, Z.jsx)(`div`, { className: o, children: d })),
        (t[11] = o),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
var ge = e(F(), 1);
function _e(e) {
  let t = (0, X.c)(28),
    n = e?.kind === `git`,
    r = e?.kind === `worktree` ? e : null,
    i = e?.path ?? ``,
    a = i.length > 0 && i !== `/dev/null`,
    s = n ? (e?.cwd ?? null) : null,
    c = n ? (e?.hostId ?? `local`) : o,
    l = n ? i : ``,
    u = n ? (e?.ref ?? `head`) : `head`,
    d;
  t[0] !== s || t[1] !== c || t[2] !== l || t[3] !== u
    ? ((d = { cwd: s, hostId: c, path: l, ref: u }),
      (t[0] = s),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u),
      (t[4] = d))
    : (d = t[4]);
  let f = n && a,
    p;
  t[5] === f ? (p = t[6]) : ((p = { enabled: f }), (t[5] = f), (t[6] = p));
  let m;
  t[7] !== d || t[8] !== p
    ? ((m = { params: d, queryConfig: p }), (t[7] = d), (t[8] = p), (t[9] = m))
    : (m = t[9]);
  let { data: h, isLoading: g, isError: _ } = E(`read-git-file-binary`, m),
    v = n ? `` : i,
    y = r?.hostId ?? `local`,
    b;
  t[10] !== v || t[11] !== y
    ? ((b = { path: v, hostId: y }), (t[10] = v), (t[11] = y), (t[12] = b))
    : (b = t[12]);
  let x = !n && a,
    S;
  t[13] === x ? (S = t[14]) : ((S = { enabled: x }), (t[13] = x), (t[14] = S));
  let C;
  t[15] !== b || t[16] !== S
    ? ((C = { params: b, queryConfig: S }),
      (t[15] = b),
      (t[16] = S),
      (t[17] = C))
    : (C = t[17]);
  let { data: w, isLoading: T, isError: D } = E(`read-file-binary`, C);
  if (!a) {
    let e;
    return (
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { dataUrl: null, isLoading: !1, isError: !1 }), (t[18] = e))
        : (e = t[18]),
      e
    );
  }
  let O = n ? h?.contentsBase64 : w?.contentsBase64,
    k;
  t[19] === i
    ? (k = t[20])
    : ((k = i ? (0, ge.lookup)(i) : !1), (t[19] = i), (t[20] = k));
  let A = k,
    j = typeof A == `string` ? A : `application/octet-stream`;
  if (!O) {
    let e = n ? g : T,
      r = n ? _ : D,
      i;
    return (
      t[21] !== e || t[22] !== r
        ? ((i = { dataUrl: null, isLoading: e, isError: r }),
          (t[21] = e),
          (t[22] = r),
          (t[23] = i))
        : (i = t[23]),
      i
    );
  }
  let M = `data:${j};base64,${O}`,
    N = n ? g : T,
    P = n ? _ : D,
    F;
  return (
    t[24] !== M || t[25] !== N || t[26] !== P
      ? ((F = { dataUrl: M, isLoading: N, isError: P }),
        (t[24] = M),
        (t[25] = N),
        (t[26] = P),
        (t[27] = F))
      : (F = t[27]),
    F
  );
}
function ve(e) {
  let t = (0, X.c)(13),
    { imagePreview: n, className: r, fallback: i, showMissingPreview: a } = e,
    o = v(),
    s = _e(n?.before ?? null),
    c = _e(n?.after ?? null),
    l = s.dataUrl != null || c.dataUrl != null || s.isLoading || c.isLoading;
  if (!n || (!a && !l)) return i;
  let u;
  t[0] === o
    ? (u = t[1])
    : ((u = o.formatMessage({
        id: `codex.diffView.imagePreviewAlt`,
        defaultMessage: `Image preview`,
        description: `Alt text for image previews in the diff view`,
      })),
      (t[0] = o),
      (t[1] = u));
  let d = u,
    f = n.before == null && n.after != null,
    p;
  t[2] !== s || t[3] !== d
    ? ((p = (0, Z.jsx)(ye, { preview: s, alt: d })),
      (t[2] = s),
      (t[3] = d),
      (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] !== c || t[6] !== d
    ? ((m = (0, Z.jsx)(ye, { preview: c, alt: d })),
      (t[5] = c),
      (t[6] = d),
      (t[7] = m))
    : (m = t[7]);
  let h;
  return (
    t[8] !== r || t[9] !== f || t[10] !== p || t[11] !== m
      ? ((h = (0, Z.jsx)(he, {
          className: r,
          showAfterOnly: f,
          before: p,
          after: m,
        })),
        (t[8] = r),
        (t[9] = f),
        (t[10] = p),
        (t[11] = m),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
function ye(e) {
  let t = (0, X.c)(5),
    { preview: n, alt: r } = e,
    i;
  if (
    t[0] !== r ||
    t[1] !== n.dataUrl ||
    t[2] !== n.isError ||
    t[3] !== n.isLoading
  ) {
    let e = n.dataUrl?.startsWith(`data:image/svg+xml;`);
    ((i = (0, Z.jsx)(Y, {
      children: n.isLoading
        ? (0, Z.jsx)(ue, { className: `text-xs` })
        : n.dataUrl != null && !n.isError
          ? (0, Z.jsx)(`img`, {
              className: u(
                `max-h-full max-w-full rounded-sm object-contain shadow-sm`,
                e && `h-full w-full bg-white p-3`,
              ),
              src: n.dataUrl,
              alt: r,
            })
          : (0, Z.jsx)(le, {
              children: (0, Z.jsx)(b, {
                id: `codex.diffView.imagePreviewEmpty`,
                defaultMessage: `No image`,
                description: `Placeholder text when an image preview is unavailable`,
              }),
            }),
    })),
      (t[0] = r),
      (t[1] = n.dataUrl),
      (t[2] = n.isError),
      (t[3] = n.isLoading),
      (t[4] = i));
  } else i = t[4];
  return i;
}
function be(e) {
  let t = (0, X.c)(23),
    { path: n, className: r, fallback: i, hostId: a, scrollable: o } = e,
    s = o === void 0 ? !1 : o,
    c = n != null && n.length > 0 && n !== `/dev/null`,
    l = n ?? ``,
    d;
  t[0] === a
    ? (d = t[1])
    : ((d = a == null ? {} : { hostId: a }), (t[0] = a), (t[1] = d));
  let f;
  t[2] !== l || t[3] !== d
    ? ((f = { path: l, ...d }), (t[2] = l), (t[3] = d), (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] === c ? (p = t[6]) : ((p = { enabled: c }), (t[5] = c), (t[6] = p));
  let m;
  t[7] !== f || t[8] !== p
    ? ((m = { params: f, queryConfig: p }), (t[7] = f), (t[8] = p), (t[9] = m))
    : (m = t[9]);
  let { data: h, isLoading: g, isError: _ } = E(`read-file`, m),
    v = h?.contents ?? null;
  if (!c) return i;
  if (g) {
    let e = s ? `overflow-auto` : `overflow-clip`,
      n;
    t[10] !== r || t[11] !== e
      ? ((n = u(`relative`, e, r)), (t[10] = r), (t[11] = e), (t[12] = n))
      : (n = t[12]);
    let i;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Z.jsx)(ue, { className: `justify-center py-6 text-sm` })),
        (t[13] = i))
      : (i = t[13]);
    let a;
    return (
      t[14] === n
        ? (a = t[15])
        : ((a = (0, Z.jsx)(`div`, { className: n, children: i })),
          (t[14] = n),
          (t[15] = a)),
      a
    );
  }
  if (v == null || v.length === 0 || _) return i;
  let y = s ? `normal` : `subtle`,
    b = s ? `auto` : `clip`,
    x;
  t[16] === v
    ? (x = t[17])
    : ((x = (0, Z.jsx)(de, { enableMetadataPreview: !0, markdown: v })),
      (t[16] = v),
      (t[17] = x));
  let S;
  return (
    t[18] !== r || t[19] !== y || t[20] !== b || t[21] !== x
      ? ((S = (0, Z.jsx)(fe, {
          background: y,
          className: r,
          overflow: b,
          children: x,
        })),
        (t[18] = r),
        (t[19] = y),
        (t[20] = b),
        (t[21] = x),
        (t[22] = S))
      : (S = t[22]),
    S
  );
}
var xe = Object.prototype.hasOwnProperty;
function Se(e, t, n) {
  for (n of e.keys()) if (Ce(n, t)) return n;
}
function Ce(e, t) {
  var n, r, i;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && Ce(e[r], t[r]); );
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((i = r),
          (i && typeof i == `object` && ((i = Se(t, i)), !i)) || !t.has(i))
        )
          return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((i = r[0]),
          (i && typeof i == `object` && ((i = Se(t, i)), !i)) ||
            !Ce(r[1], t.get(i)))
        )
          return !1;
      return !0;
    }
    if (n === ArrayBuffer) ((e = new Uint8Array(e)), (t = new Uint8Array(t)));
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e.getInt8(r) === t.getInt8(r); );
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
      return r === -1;
    }
    if (!n || typeof e == `object`) {
      for (n in ((r = 0), e))
        if (
          (xe.call(e, n) && ++r && !xe.call(t, n)) ||
          !(n in t) ||
          !Ce(e[n], t[n])
        )
          return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
function we(e) {
  let t = !1;
  return {
    promise: new Promise((n, r) => {
      e.then((e) => !t && n(e)).catch((e) => !t && r(e));
    }),
    cancel() {
      t = !0;
    },
  };
}
var Te = [`onCopy`, `onCut`, `onPaste`],
  Ee = [`onCompositionEnd`, `onCompositionStart`, `onCompositionUpdate`],
  De = [`onFocus`, `onBlur`],
  Oe = [`onInput`, `onInvalid`, `onReset`, `onSubmit`],
  ke = [`onLoad`, `onError`],
  Ae = [`onKeyDown`, `onKeyPress`, `onKeyUp`],
  je = [
    `onAbort`,
    `onCanPlay`,
    `onCanPlayThrough`,
    `onDurationChange`,
    `onEmptied`,
    `onEncrypted`,
    `onEnded`,
    `onError`,
    `onLoadedData`,
    `onLoadedMetadata`,
    `onLoadStart`,
    `onPause`,
    `onPlay`,
    `onPlaying`,
    `onProgress`,
    `onRateChange`,
    `onSeeked`,
    `onSeeking`,
    `onStalled`,
    `onSuspend`,
    `onTimeUpdate`,
    `onVolumeChange`,
    `onWaiting`,
  ],
  Me = [
    `onClick`,
    `onContextMenu`,
    `onDoubleClick`,
    `onMouseDown`,
    `onMouseEnter`,
    `onMouseLeave`,
    `onMouseMove`,
    `onMouseOut`,
    `onMouseOver`,
    `onMouseUp`,
  ],
  Ne = [
    `onDrag`,
    `onDragEnd`,
    `onDragEnter`,
    `onDragExit`,
    `onDragLeave`,
    `onDragOver`,
    `onDragStart`,
    `onDrop`,
  ],
  Pe = [`onSelect`],
  Fe = [`onTouchCancel`, `onTouchEnd`, `onTouchMove`, `onTouchStart`],
  Ie = [
    `onPointerDown`,
    `onPointerMove`,
    `onPointerUp`,
    `onPointerCancel`,
    `onGotPointerCapture`,
    `onLostPointerCapture`,
    `onPointerEnter`,
    `onPointerLeave`,
    `onPointerOver`,
    `onPointerOut`,
  ],
  Le = [`onScroll`],
  Re = [`onWheel`],
  ze = [`onAnimationStart`, `onAnimationEnd`, `onAnimationIteration`],
  Be = [`onTransitionEnd`],
  Ve = [`onToggle`],
  He = [`onChange`],
  Ue = [
    ...Te,
    ...Ee,
    ...De,
    ...Oe,
    ...ke,
    ...Ae,
    ...je,
    ...Me,
    ...Ne,
    ...Pe,
    ...Fe,
    ...Ie,
    ...Le,
    ...Re,
    ...ze,
    ...Be,
    ...He,
    ...Ve,
  ];
function We(e, t) {
  let n = {};
  for (let r of Ue) {
    let i = e[r];
    i && (t ? (n[r] = (e) => i(e, t(r))) : (n[r] = i));
  }
  return n;
}
var Ge = !0,
  Ke = `Invariant failed`;
function Q(e, t) {
  if (!e) {
    if (Ge) throw Error(Ke);
    var n = typeof t == `function` ? t() : t,
      r = n ? `${Ke}: ${n}` : Ke;
    throw Error(r);
  }
}
var qe = t((e, t) => {
    var n = !1,
      r = function () {};
    if (n) {
      var i = function (e, t) {
        var n = arguments.length;
        t = Array(n > 1 ? n - 1 : 0);
        for (var r = 1; r < n; r++) t[r - 1] = arguments[r];
        var i = 0,
          a =
            `Warning: ` +
            e.replace(/%s/g, function () {
              return t[i++];
            });
        typeof console < `u` && console.error(a);
        try {
          throw Error(a);
        } catch {}
      };
      r = function (e, t, n) {
        var r = arguments.length;
        n = Array(r > 2 ? r - 2 : 0);
        for (var a = 2; a < r; a++) n[a - 2] = arguments[a];
        if (t === void 0)
          throw Error(
            "`warning(condition, format, ...args)` requires a warning message argument",
          );
        e || i.apply(null, [t].concat(n));
      };
    }
    t.exports = r;
  }),
  $ = e(c(), 1),
  Je = (0, $.createContext)(null),
  Ye = `noopener noreferrer nofollow`,
  Xe = class {
    constructor() {
      ((this.externalLinkEnabled = !0),
        (this.externalLinkRel = void 0),
        (this.externalLinkTarget = void 0),
        (this.isInPresentationMode = !1),
        (this.pdfDocument = void 0),
        (this.pdfViewer = void 0));
    }
    setDocument(e) {
      this.pdfDocument = e;
    }
    setViewer(e) {
      this.pdfViewer = e;
    }
    setExternalLinkRel(e) {
      this.externalLinkRel = e;
    }
    setExternalLinkTarget(e) {
      this.externalLinkTarget = e;
    }
    setHash() {}
    setHistory() {}
    get pagesCount() {
      return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }
    get page() {
      return (
        Q(this.pdfViewer, `PDF viewer is not initialized.`),
        this.pdfViewer.currentPageNumber || 0
      );
    }
    set page(e) {
      (Q(this.pdfViewer, `PDF viewer is not initialized.`),
        (this.pdfViewer.currentPageNumber = e));
    }
    get rotation() {
      return 0;
    }
    set rotation(e) {}
    addLinkAttributes(e, t, n) {
      ((e.href = t),
        (e.rel = this.externalLinkRel || Ye),
        (e.target = n ? `_blank` : this.externalLinkTarget || ``));
    }
    goToDestination(e) {
      return new Promise((t) => {
        (Q(this.pdfDocument, `PDF document not loaded.`),
          Q(e, `Destination is not specified.`),
          typeof e == `string`
            ? this.pdfDocument.getDestination(e).then(t)
            : Array.isArray(e)
              ? t(e)
              : e.then(t));
      }).then((e) => {
        Q(Array.isArray(e), `"${e}" is not a valid destination array.`);
        let t = e[0];
        new Promise((e) => {
          (Q(this.pdfDocument, `PDF document not loaded.`),
            t instanceof Object
              ? this.pdfDocument
                  .getPageIndex(t)
                  .then((t) => {
                    e(t);
                  })
                  .catch(() => {
                    Q(!1, `"${t}" is not a valid page reference.`);
                  })
              : typeof t == `number`
                ? e(t)
                : Q(!1, `"${t}" is not a valid destination reference.`));
        }).then((t) => {
          let n = t + 1;
          (Q(this.pdfViewer, `PDF viewer is not initialized.`),
            Q(
              n >= 1 && n <= this.pagesCount,
              `"${n}" is not a valid page number.`,
            ),
            this.pdfViewer.scrollPageIntoView({
              dest: e,
              pageIndex: t,
              pageNumber: n,
            }));
        });
      });
    }
    goToPage(e) {
      let t = e - 1;
      (Q(this.pdfViewer, `PDF viewer is not initialized.`),
        Q(e >= 1 && e <= this.pagesCount, `"${e}" is not a valid page number.`),
        this.pdfViewer.scrollPageIntoView({ pageIndex: t, pageNumber: e }));
    }
    goToXY() {}
    cachePageRef() {}
    getDestinationHash() {
      return `#`;
    }
    getAnchorUrl() {
      return `#`;
    }
    executeNamedAction() {}
    executeSetOCGState() {}
    isPageVisible() {
      return !0;
    }
    isPageCached() {
      return !0;
    }
    navigateTo(e) {
      this.goToDestination(e);
    }
  };
function Ze({ children: e, type: t }) {
  return (0, Z.jsx)(`div`, {
    className: `react-pdf__message react-pdf__message--${t}`,
    children: e,
  });
}
var Qe = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
function $e(e, t) {
  switch (t.type) {
    case `RESOLVE`:
      return { value: t.value, error: void 0 };
    case `REJECT`:
      return { value: !1, error: t.error };
    case `RESET`:
      return { value: void 0, error: void 0 };
    default:
      return e;
  }
}
function et() {
  return (0, $.useReducer)($e, { value: void 0, error: void 0 });
}
var tt = e(qe(), 1),
  nt = typeof window < `u`,
  rt = nt && window.location.protocol === `file:`;
function it(e) {
  return e !== void 0;
}
function at(e) {
  return it(e) && e !== null;
}
function ot(e) {
  return typeof e == `string`;
}
function st(e) {
  return e instanceof ArrayBuffer;
}
function ct(e) {
  return (
    Q(nt, `isBlob can only be used in a browser environment`),
    e instanceof Blob
  );
}
function lt(e) {
  return ot(e) && /^data:/.test(e);
}
function ut(e) {
  Q(lt(e), `Invalid data URI.`);
  let [t = ``, n = ``] = e.split(`,`);
  return t.split(`;`).indexOf(`base64`) === -1 ? unescape(n) : atob(n);
}
function dt() {
  return (nt && window.devicePixelRatio) || 1;
}
var ft = `On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.`;
function pt() {
  (0, tt.default)(
    !rt,
    `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${ft}`,
  );
}
function mt(e) {
  e?.cancel && e.cancel();
}
function ht(e, t) {
  return (
    Object.defineProperty(e, `width`, {
      get() {
        return this.getViewport({ scale: t }).width;
      },
      configurable: !0,
    }),
    Object.defineProperty(e, `height`, {
      get() {
        return this.getViewport({ scale: t }).height;
      },
      configurable: !0,
    }),
    Object.defineProperty(e, `originalWidth`, {
      get() {
        return this.getViewport({ scale: 1 }).width;
      },
      configurable: !0,
    }),
    Object.defineProperty(e, `originalHeight`, {
      get() {
        return this.getViewport({ scale: 1 }).height;
      },
      configurable: !0,
    }),
    e
  );
}
function gt(e) {
  return (
    e.name === `AbortException` || e.name === `RenderingCancelledException`
  );
}
function _t(e) {
  return new Promise((t, n) => {
    let r = new FileReader();
    ((r.onload = () => {
      if (!r.result) return n(Error(`Error while reading a file.`));
      t(r.result);
    }),
      (r.onerror = (e) => {
        if (!e.target) return n(Error(`Error while reading a file.`));
        let { error: t } = e.target;
        if (!t) return n(Error(`Error while reading a file.`));
        switch (t.code) {
          case t.NOT_FOUND_ERR:
            return n(Error(`Error while reading a file: File not found.`));
          case t.SECURITY_ERR:
            return n(Error(`Error while reading a file: Security error.`));
          case t.ABORT_ERR:
            return n(Error(`Error while reading a file: Aborted.`));
          default:
            return n(Error(`Error while reading a file.`));
        }
      }),
      r.readAsArrayBuffer(e));
  });
}
var { PDFDataRangeTransport: vt } = p,
  yt = (e, t) => {
    switch (t) {
      case Qe.NEED_PASSWORD:
        e(prompt(`Enter the password to open this PDF file.`));
        break;
      case Qe.INCORRECT_PASSWORD:
        e(prompt(`Invalid password. Please try again.`));
        break;
      default:
    }
  };
function bt(e) {
  return (
    typeof e == `object` && !!e && (`data` in e || `range` in e || `url` in e)
  );
}
var xt = (0, $.forwardRef)(function (
  {
    children: e,
    className: t,
    error: n = `Failed to load PDF file.`,
    externalLinkRel: r,
    externalLinkTarget: i,
    file: a,
    inputRef: o,
    imageResourcesPath: s,
    loading: c = `Loading PDF…`,
    noData: l = `No PDF file specified.`,
    onItemClick: d,
    onLoadError: p,
    onLoadProgress: m,
    onLoadSuccess: h,
    onPassword: g = yt,
    onSourceError: _,
    onSourceSuccess: v,
    options: y,
    renderMode: b,
    rotate: x,
    scale: S,
    ...C
  },
  w,
) {
  let [T, E] = et(),
    { value: D, error: O } = T,
    [k, A] = et(),
    { value: j, error: M } = k,
    N = (0, $.useRef)(new Xe()),
    P = (0, $.useRef)([]),
    F = (0, $.useRef)(void 0),
    I = (0, $.useRef)(void 0);
  (a &&
    a !== F.current &&
    bt(a) &&
    ((0, tt.default)(
      !Ce(a, F.current),
      `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`,
    ),
    (F.current = a)),
    y &&
      y !== I.current &&
      ((0, tt.default)(
        !Ce(y, I.current),
        `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`,
      ),
      (I.current = y)));
  let ee = (0, $.useRef)({
    scrollPageIntoView: (e) => {
      let { dest: t, pageNumber: n, pageIndex: r = n - 1 } = e;
      if (d) {
        d({ dest: t, pageIndex: r, pageNumber: n });
        return;
      }
      let i = P.current[r];
      if (i) {
        i.scrollIntoView();
        return;
      }
      (0, tt.default)(
        !1,
        `An internal link leading to page ${n} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`,
      );
    },
  });
  (0, $.useImperativeHandle)(
    w,
    () => ({ linkService: N, pages: P, viewer: ee }),
    [],
  );
  function L() {
    v && v();
  }
  function R() {
    O && ((0, tt.default)(!1, O.toString()), _ && _(O));
  }
  function z() {
    E({ type: `RESET` });
  }
  (0, $.useEffect)(z, [a, E]);
  let B = (0, $.useCallback)(async () => {
    if (!a) return null;
    if (typeof a == `string`)
      return lt(a) ? { data: ut(a) } : (pt(), { url: a });
    if (a instanceof vt) return { range: a };
    if (st(a)) return { data: a };
    if (nt && ct(a)) return { data: await _t(a) };
    if (
      (Q(
        typeof a == `object`,
        `Invalid parameter in file, need either Uint8Array, string or a parameter object`,
      ),
      Q(bt(a), `Invalid parameter object: need either .data, .range or .url`),
      `url` in a && typeof a.url == `string`)
    ) {
      if (lt(a.url)) {
        let { url: e, ...t } = a;
        return { data: ut(e), ...t };
      }
      pt();
    }
    return a;
  }, [a]);
  ((0, $.useEffect)(() => {
    let e = we(B());
    return (
      e.promise
        .then((e) => {
          E({ type: `RESOLVE`, value: e });
        })
        .catch((e) => {
          E({ type: `REJECT`, error: e });
        }),
      () => {
        mt(e);
      }
    );
  }, [B, E]),
    (0, $.useEffect)(() => {
      if (D !== void 0) {
        if (D === !1) {
          R();
          return;
        }
        L();
      }
    }, [D]));
  function V() {
    j && (h && h(j), (P.current = Array(j.numPages)), N.current.setDocument(j));
  }
  function te() {
    M && ((0, tt.default)(!1, M.toString()), p && p(M));
  }
  ((0, $.useEffect)(
    function () {
      A({ type: `RESET` });
    },
    [A, D],
  ),
    (0, $.useEffect)(
      function () {
        if (!D) return;
        let e = f(y ? { ...D, ...y } : D);
        (m && (e.onProgress = m), g && (e.onPassword = g));
        let t = e;
        return (
          t.promise
            .then((e) => {
              t.destroyed || A({ type: `RESOLVE`, value: e });
            })
            .catch((e) => {
              t.destroyed || A({ type: `REJECT`, error: e });
            }),
          () => {
            t.destroy();
          }
        );
      },
      [y, A, D],
    ),
    (0, $.useEffect)(() => {
      if (j !== void 0) {
        if (j === !1) {
          te();
          return;
        }
        V();
      }
    }, [j]),
    (0, $.useEffect)(
      function () {
        (N.current.setViewer(ee.current),
          N.current.setExternalLinkRel(r),
          N.current.setExternalLinkTarget(i));
      },
      [r, i],
    ));
  let H = (0, $.useCallback)((e, t) => {
      P.current[e] = t;
    }, []),
    U = (0, $.useCallback)((e) => {
      delete P.current[e];
    }, []),
    W = (0, $.useMemo)(
      () => ({
        imageResourcesPath: s,
        linkService: N.current,
        onItemClick: d,
        pdf: j,
        registerPage: H,
        renderMode: b,
        rotate: x,
        scale: S,
        unregisterPage: U,
      }),
      [s, d, j, H, b, x, S, U],
    ),
    ne = (0, $.useMemo)(() => We(C, () => j), [C, j]);
  function G() {
    function t(e) {
      return !!e?.pdf;
    }
    if (!t(W)) throw Error(`pdf is undefined`);
    let n = typeof e == `function` ? e(W) : e;
    return (0, Z.jsx)(Je.Provider, { value: W, children: n });
  }
  function K() {
    return a
      ? j == null
        ? (0, Z.jsx)(Ze, {
            type: `loading`,
            children: typeof c == `function` ? c() : c,
          })
        : j === !1
          ? (0, Z.jsx)(Ze, {
              type: `error`,
              children: typeof n == `function` ? n() : n,
            })
          : G()
      : (0, Z.jsx)(Ze, {
          type: `no-data`,
          children: typeof l == `function` ? l() : l,
        });
  }
  return (0, Z.jsx)(`div`, {
    className: u(`react-pdf__Document`, t),
    ref: o,
    ...ne,
    children: K(),
  });
});
function St() {
  return (0, $.useContext)(Je);
}
function Ct() {
  var e = [...arguments].filter(Boolean);
  return e.length <= 1
    ? e[0] || null
    : function (t) {
        for (var n = 0, r = e; n < r.length; n++) {
          var i = r[n];
          typeof i == `function` ? i(t) : i && (i.current = t);
        }
      };
}
var wt = (0, $.createContext)(null);
function Tt() {
  return (0, $.useContext)(wt);
}
function Et() {
  let e = St(),
    t = Tt();
  Q(t, `Unable to find Page context.`);
  let {
    filterAnnotations: n,
    imageResourcesPath: r,
    linkService: i,
    onGetAnnotationsError: a,
    onGetAnnotationsSuccess: o,
    onRenderAnnotationLayerError: s,
    onRenderAnnotationLayerSuccess: c,
    page: l,
    pdf: d,
    renderForms: f,
    rotate: p,
    scale: h = 1,
  } = { ...e, ...t };
  (Q(
    d,
    "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.",
  ),
    Q(l, `Attempted to load page annotations, but no page was specified.`),
    Q(
      i,
      `Attempted to load page annotations, but no linkService was specified.`,
    ));
  let [g, _] = et(),
    { value: v, error: y } = g,
    b = (0, $.useRef)(null);
  (0, tt.default)(
    Number.parseInt(
      window
        .getComputedStyle(document.body)
        .getPropertyValue(`--react-pdf-annotation-layer`),
      10,
    ) === 1,
    `AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations`,
  );
  function x() {
    v && o && o(v);
  }
  function S() {
    y && ((0, tt.default)(!1, y.toString()), a && a(y));
  }
  ((0, $.useEffect)(
    function () {
      _({ type: `RESET` });
    },
    [_, l],
  ),
    (0, $.useEffect)(
      function () {
        if (!l) return;
        let e = we(l.getAnnotations()),
          t = e;
        return (
          e.promise
            .then((e) => {
              _({ type: `RESOLVE`, value: e });
            })
            .catch((e) => {
              _({ type: `REJECT`, error: e });
            }),
          () => {
            mt(t);
          }
        );
      },
      [_, l],
    ),
    (0, $.useEffect)(() => {
      if (v !== void 0) {
        if (v === !1) {
          S();
          return;
        }
        x();
      }
    }, [v]));
  function C() {
    c && c();
  }
  function w(e) {
    ((0, tt.default)(!1, `${e}`), s && s(e));
  }
  let T = (0, $.useMemo)(
    () => l.getViewport({ scale: h, rotation: p }),
    [l, p, h],
  );
  return (
    (0, $.useEffect)(
      function () {
        if (!d || !l || !i || !v) return;
        let { current: e } = b;
        if (!e) return;
        let t = T.clone({ dontFlip: !0 }),
          a = {
            accessibilityManager: null,
            annotationCanvasMap: null,
            annotationEditorUIManager: null,
            annotationStorage: d.annotationStorage,
            commentManager: null,
            div: e,
            l10n: null,
            linkService: i,
            page: l,
            structTreeLayer: null,
            viewport: t,
          },
          o = {
            annotations: n ? n({ annotations: v }) : v,
            annotationStorage: d.annotationStorage,
            div: e,
            imageResourcesPath: r,
            linkService: i,
            page: l,
            renderForms: f,
            viewport: t,
          };
        e.innerHTML = ``;
        try {
          (new m(a).render(o), C());
        } catch (e) {
          w(e);
        }
        return () => {};
      },
      [v, n, r, i, l, d, f, T],
    ),
    (0, Z.jsx)(`div`, {
      className: u(`react-pdf__Page__annotations`, `annotationLayer`),
      ref: b,
    })
  );
}
var Dt = {
    Document: null,
    DocumentFragment: null,
    Part: `group`,
    Sect: `group`,
    Div: `group`,
    Aside: `note`,
    NonStruct: `none`,
    P: null,
    H: `heading`,
    Title: null,
    FENote: `note`,
    Sub: `group`,
    Lbl: null,
    Span: null,
    Em: null,
    Strong: null,
    Link: `link`,
    Annot: `note`,
    Form: `form`,
    Ruby: null,
    RB: null,
    RT: null,
    RP: null,
    Warichu: null,
    WT: null,
    WP: null,
    L: `list`,
    LI: `listitem`,
    LBody: null,
    Table: `table`,
    TR: `row`,
    TH: `columnheader`,
    TD: `cell`,
    THead: `columnheader`,
    TBody: null,
    TFoot: null,
    Caption: null,
    Figure: `figure`,
    Formula: null,
    Artifact: null,
  },
  Ot = /^H(\d+)$/;
function kt(e) {
  return e in Dt;
}
function At(e) {
  return `children` in e;
}
function jt(e) {
  return At(e)
    ? e.children.length === 1 && 0 in e.children && `id` in e.children[0]
    : !1;
}
function Mt(e) {
  let t = {};
  if (At(e)) {
    let { role: n } = e,
      r = n.match(Ot);
    if (r) ((t.role = `heading`), (t[`aria-level`] = Number(r[1])));
    else if (kt(n)) {
      let e = Dt[n];
      e && (t.role = e);
    }
  }
  return t;
}
function Nt(e) {
  let t = {};
  if (At(e)) {
    if (
      (e.alt !== void 0 && (t[`aria-label`] = e.alt),
      e.lang !== void 0 && (t.lang = e.lang),
      jt(e))
    ) {
      let [n] = e.children;
      if (n) {
        let e = Nt(n);
        return { ...t, ...e };
      }
    }
  } else `id` in e && (t[`aria-owns`] = e.id);
  return t;
}
function Pt(e) {
  return e ? { ...Mt(e), ...Nt(e) } : null;
}
function Ft({ className: e, node: t }) {
  let n = (0, $.useMemo)(() => Pt(t), [t]),
    r = (0, $.useMemo)(
      () =>
        !At(t) || jt(t)
          ? null
          : t.children.map((e, t) => (0, Z.jsx)(Ft, { node: e }, t)),
      [t],
    );
  return (0, Z.jsx)(`span`, { className: e, ...n, children: r });
}
function It() {
  let e = Tt();
  Q(e, `Unable to find Page context.`);
  let { onGetStructTreeError: t, onGetStructTreeSuccess: n } = e,
    [r, i] = et(),
    { value: a, error: o } = r,
    { customTextRenderer: s, page: c } = e;
  function l() {
    a && n && n(a);
  }
  function u() {
    o && ((0, tt.default)(!1, o.toString()), t && t(o));
  }
  return (
    (0, $.useEffect)(
      function () {
        i({ type: `RESET` });
      },
      [i, c],
    ),
    (0, $.useEffect)(
      function () {
        if (s || !c) return;
        let e = we(c.getStructTree()),
          t = e;
        return (
          e.promise
            .then((e) => {
              i({ type: `RESOLVE`, value: e });
            })
            .catch((e) => {
              i({ type: `REJECT`, error: e });
            }),
          () => mt(t)
        );
      },
      [s, c, i],
    ),
    (0, $.useEffect)(() => {
      if (a !== void 0) {
        if (a === !1) {
          u();
          return;
        }
        l();
      }
    }, [a]),
    a
      ? (0, Z.jsx)(Ft, {
          className: `react-pdf__Page__structTree structTree`,
          node: a,
        })
      : null
  );
}
var Lt = g;
function Rt(e) {
  let t = Tt();
  Q(t, `Unable to find Page context.`);
  let {
      _className: n,
      canvasBackground: r,
      devicePixelRatio: i = dt(),
      onRenderError: a,
      onRenderSuccess: o,
      page: s,
      renderForms: c,
      renderTextLayer: l,
      rotate: u,
      scale: d,
    } = { ...t, ...e },
    { canvasRef: f } = e;
  Q(s, `Attempted to render page canvas, but no page was specified.`);
  let p = (0, $.useRef)(null);
  function m() {
    s && o && o(ht(s, d));
  }
  function h(e) {
    gt(e) || ((0, tt.default)(!1, e.toString()), a && a(e));
  }
  let g = (0, $.useMemo)(
      () => s.getViewport({ scale: d * i, rotation: u }),
      [i, s, u, d],
    ),
    _ = (0, $.useMemo)(
      () => s.getViewport({ scale: d, rotation: u }),
      [s, u, d],
    );
  (0, $.useEffect)(
    function () {
      if (!s) return;
      s.cleanup();
      let { current: e } = p;
      if (!e) return;
      ((e.width = g.width),
        (e.height = g.height),
        (e.style.width = `${Math.floor(_.width)}px`),
        (e.style.height = `${Math.floor(_.height)}px`),
        (e.style.visibility = `hidden`));
      let t = {
        annotationMode: c ? Lt.ENABLE_FORMS : Lt.ENABLE,
        canvas: e,
        canvasContext: e.getContext(`2d`, { alpha: !1 }),
        viewport: g,
      };
      r && (t.background = r);
      let n = s.render(t),
        i = n;
      return (
        n.promise
          .then(() => {
            ((e.style.visibility = ``), m());
          })
          .catch(h),
        () => mt(i)
      );
    },
    [r, s, c, g, _],
  );
  let v = (0, $.useCallback)(() => {
    let { current: e } = p;
    e && ((e.width = 0), (e.height = 0));
  }, []);
  return (
    (0, $.useEffect)(() => v, [v]),
    (0, Z.jsx)(`canvas`, {
      className: `${n}__canvas`,
      dir: `ltr`,
      ref: Ct(f, p),
      style: { display: `block`, userSelect: `none` },
      children: l ? (0, Z.jsx)(It, {}) : null,
    })
  );
}
function zt(e) {
  return `str` in e;
}
function Bt() {
  let e = Tt();
  Q(e, `Unable to find Page context.`);
  let {
    customTextRenderer: t,
    onGetTextError: n,
    onGetTextSuccess: r,
    onRenderTextLayerError: i,
    onRenderTextLayerSuccess: a,
    page: o,
    pageIndex: s,
    pageNumber: c,
    rotate: l,
    scale: f,
  } = e;
  Q(o, `Attempted to load page text content, but no page was specified.`);
  let [p, m] = et(),
    { value: h, error: g } = p,
    _ = (0, $.useRef)(null);
  (0, tt.default)(
    Number.parseInt(
      window
        .getComputedStyle(document.body)
        .getPropertyValue(`--react-pdf-text-layer`),
      10,
    ) === 1,
    `TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer`,
  );
  function v() {
    h && r && r(h);
  }
  function y() {
    g && ((0, tt.default)(!1, g.toString()), n && n(g));
  }
  ((0, $.useEffect)(
    function () {
      m({ type: `RESET` });
    },
    [o, m],
  ),
    (0, $.useEffect)(
      function () {
        if (!o) return;
        let e = we(o.getTextContent()),
          t = e;
        return (
          e.promise
            .then((e) => {
              m({ type: `RESOLVE`, value: e });
            })
            .catch((e) => {
              m({ type: `REJECT`, error: e });
            }),
          () => mt(t)
        );
      },
      [o, m],
    ),
    (0, $.useEffect)(() => {
      if (h !== void 0) {
        if (h === !1) {
          y();
          return;
        }
        v();
      }
    }, [h]));
  let b = (0, $.useCallback)(() => {
      a && a();
    }, [a]),
    x = (0, $.useCallback)(
      (e) => {
        gt(e) || ((0, tt.default)(!1, e.toString()), i && i(e));
      },
      [i],
    );
  function S() {
    let e = _.current;
    e && e.classList.add(`selecting`);
  }
  function C() {
    let e = _.current;
    e && e.classList.remove(`selecting`);
  }
  let w = (0, $.useMemo)(
    () => o.getViewport({ scale: f, rotation: l }),
    [o, l, f],
  );
  return (
    (0, $.useLayoutEffect)(
      function () {
        if (!o || !h) return;
        let { current: e } = _;
        if (!e) return;
        e.innerHTML = ``;
        let n = new d({
            container: e,
            textContentSource: o.streamTextContent({
              includeMarkedContent: !0,
            }),
            viewport: w,
          }),
          r = n;
        return (
          n
            .render()
            .then(() => {
              let n = document.createElement(`div`);
              ((n.className = `endOfContent`), e.append(n));
              let r = e.querySelectorAll(`[role="presentation"]`);
              if (t) {
                let e = 0;
                h.items.forEach((n, i) => {
                  if (!zt(n)) return;
                  let a = r[e];
                  a &&
                    ((a.innerHTML = t({
                      pageIndex: s,
                      pageNumber: c,
                      itemIndex: i,
                      ...n,
                    })),
                    (e += n.str && n.hasEOL ? 2 : 1));
                });
              }
              b();
            })
            .catch(x),
          () => mt(r)
        );
      },
      [t, x, b, o, s, c, h, w],
    ),
    (0, Z.jsx)(`div`, {
      className: u(`react-pdf__Page__textContent`, `textLayer`),
      onMouseUp: C,
      onMouseDown: S,
      ref: _,
    })
  );
}
var Vt = 1;
function Ht(e) {
  let {
      _className: t = `react-pdf__Page`,
      _enableRegisterUnregisterPage: n = !0,
      canvasBackground: r,
      canvasRef: i,
      children: a,
      className: o,
      customRenderer: s,
      customTextRenderer: c,
      devicePixelRatio: l,
      error: d = `Failed to load the page.`,
      filterAnnotations: f,
      height: p,
      inputRef: m,
      loading: h = `Loading page…`,
      noData: g = `No page specified.`,
      onGetAnnotationsError: _,
      onGetAnnotationsSuccess: v,
      onGetStructTreeError: y,
      onGetStructTreeSuccess: b,
      onGetTextError: x,
      onGetTextSuccess: S,
      onLoadError: C,
      onLoadSuccess: w,
      onRenderAnnotationLayerError: T,
      onRenderAnnotationLayerSuccess: E,
      onRenderError: D,
      onRenderSuccess: O,
      onRenderTextLayerError: k,
      onRenderTextLayerSuccess: A,
      pageIndex: j,
      pageNumber: M,
      pdf: N,
      registerPage: P,
      renderAnnotationLayer: F = !0,
      renderForms: I = !1,
      renderMode: ee = `canvas`,
      renderTextLayer: L = !0,
      rotate: R,
      scale: z = Vt,
      unregisterPage: B,
      width: V,
      ...te
    } = { ...St(), ...e },
    [H, U] = et(),
    { value: W, error: ne } = H,
    G = (0, $.useRef)(null);
  Q(
    N,
    "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.",
  );
  let K = at(M) ? M - 1 : (j ?? null),
    q = M ?? (at(j) ? j + 1 : null),
    re = R ?? (W ? W.rotate : null),
    J = (0, $.useMemo)(() => {
      if (!W) return null;
      let e = 1,
        t = z ?? Vt;
      if (V || p) {
        let t = W.getViewport({ scale: 1, rotation: re });
        V ? (e = V / t.width) : p && (e = p / t.height);
      }
      return t * e;
    }, [p, W, re, z, V]);
  (0, $.useEffect)(
    function () {
      return () => {
        at(K) && n && B && B(K);
      };
    },
    [n, N, K, B],
  );
  function ie() {
    if (w) {
      if (!W || !J) return;
      w(ht(W, J));
    }
    if (n && P) {
      if (!at(K) || !G.current) return;
      P(K, G.current);
    }
  }
  function ae() {
    ne && ((0, tt.default)(!1, ne.toString()), C && C(ne));
  }
  ((0, $.useEffect)(
    function () {
      U({ type: `RESET` });
    },
    [U, N, K],
  ),
    (0, $.useEffect)(
      function () {
        if (!N || !q) return;
        let e = we(N.getPage(q)),
          t = e;
        return (
          e.promise
            .then((e) => {
              U({ type: `RESOLVE`, value: e });
            })
            .catch((e) => {
              U({ type: `REJECT`, error: e });
            }),
          () => mt(t)
        );
      },
      [U, N, q],
    ),
    (0, $.useEffect)(() => {
      if (W !== void 0) {
        if (W === !1) {
          ae();
          return;
        }
        ie();
      }
    }, [W, J]));
  let oe = (0, $.useMemo)(
      () =>
        at(K) && q && at(re) && at(J)
          ? {
              _className: t,
              canvasBackground: r,
              customTextRenderer: c,
              devicePixelRatio: l,
              filterAnnotations: f,
              onGetAnnotationsError: _,
              onGetAnnotationsSuccess: v,
              onGetStructTreeError: y,
              onGetStructTreeSuccess: b,
              onGetTextError: x,
              onGetTextSuccess: S,
              onRenderAnnotationLayerError: T,
              onRenderAnnotationLayerSuccess: E,
              onRenderError: D,
              onRenderSuccess: O,
              onRenderTextLayerError: k,
              onRenderTextLayerSuccess: A,
              page: W,
              pageIndex: K,
              pageNumber: q,
              renderForms: I,
              renderTextLayer: L,
              rotate: re,
              scale: J,
            }
          : null,
      [t, r, c, l, f, _, v, y, b, x, S, T, E, D, O, k, A, W, K, q, I, L, re, J],
    ),
    se = (0, $.useMemo)(
      () => We(te, () => W && (J ? ht(W, J) : void 0)),
      [te, W, J],
    ),
    ce = `${K}@${J}/${re}`;
  function le() {
    switch (ee) {
      case `custom`:
        return (
          Q(
            s,
            `renderMode was set to "custom", but no customRenderer was passed.`,
          ),
          (0, Z.jsx)(s, {}, `${ce}_custom`)
        );
      case `none`:
        return null;
      default:
        return (0, Z.jsx)(Rt, { canvasRef: i }, `${ce}_canvas`);
    }
  }
  function Y() {
    return L ? (0, Z.jsx)(Bt, {}, `${ce}_text`) : null;
  }
  function ue() {
    return F ? (0, Z.jsx)(Et, {}, `${ce}_annotations`) : null;
  }
  function de() {
    function e(e) {
      return !!e?.page;
    }
    if (!e(oe)) throw Error(`page is undefined`);
    let t = typeof a == `function` ? a(oe) : a;
    return (0, Z.jsxs)(wt.Provider, {
      value: oe,
      children: [le(), Y(), ue(), t],
    });
  }
  function fe() {
    return q
      ? N === null || W == null
        ? (0, Z.jsx)(Ze, {
            type: `loading`,
            children: typeof h == `function` ? h() : h,
          })
        : N === !1 || W === !1
          ? (0, Z.jsx)(Ze, {
              type: `error`,
              children: typeof d == `function` ? d() : d,
            })
          : de()
      : (0, Z.jsx)(Ze, {
          type: `no-data`,
          children: typeof g == `function` ? g() : g,
        });
  }
  return (0, Z.jsx)(`div`, {
    className: u(t, o),
    "data-page-number": q,
    ref: Ct(m, G),
    style: {
      "--scale-round-x": `1px`,
      "--scale-round-y": `1px`,
      "--scale-factor": `1`,
      "--user-unit": `${J}`,
      "--total-scale-factor": `calc(var(--scale-factor) * var(--user-unit))`,
      backgroundColor: r || `white`,
      position: `relative`,
      minWidth: `min-content`,
      minHeight: `min-content`,
    },
    ...se,
    children: fe(),
  });
}
var Ut = `pointer-events-none absolute right-0.5 top-0.5 z-20 flex items-center gap-0.5 rounded-full bg-token-side-bar-background/90 px-0.5 py-0.5 shadow-sm ring-1 ring-token-border/60 opacity-0 transition-opacity group-hover/pdf-preview:pointer-events-auto group-hover/pdf-preview:opacity-100 group-focus-within/pdf-preview:pointer-events-auto group-focus-within/pdf-preview:opacity-100`;
function Wt(e) {
  let t = (0, X.c)(27),
    {
      canGoToNextPage: n,
      canGoToPreviousPage: r,
      currentPage: i,
      onNextPage: a,
      onPreviousPage: o,
      totalPages: s,
    } = e,
    c = v(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `codex.diffView.pdfPreview.previousPage`,
        defaultMessage: `Previous page`,
        description: `Tooltip for navigating to the previous page in PDF preview`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u = l,
    d;
  t[2] === c
    ? (d = t[3])
    : ((d = c.formatMessage({
        id: `codex.diffView.pdfPreview.nextPage`,
        defaultMessage: `Next page`,
        description: `Tooltip for navigating to the next page in PDF preview`,
      })),
      (t[2] = c),
      (t[3] = d));
  let f = d,
    p = !r,
    m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(R, { className: `icon-2xs rotate-180` })), (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== o || t[6] !== u || t[7] !== p
    ? ((h = (0, Z.jsx)(N, {
        color: `ghost`,
        size: `composerSm`,
        uniform: !0,
        "aria-label": u,
        disabled: p,
        onClick: o,
        children: m,
      })),
      (t[5] = o),
      (t[6] = u),
      (t[7] = p),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== u || t[10] !== h
    ? ((g = (0, Z.jsx)(M, { tooltipContent: u, children: h })),
      (t[9] = u),
      (t[10] = h),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== i || t[13] !== s
    ? ((_ = (0, Z.jsx)(`span`, {
        className: `px-0.5 text-center text-sm text-token-text-secondary tabular-nums`,
        children: (0, Z.jsx)(b, {
          id: `codex.diffView.pdfPreview.pageIndicator`,
          defaultMessage: `{current}/{total}`,
          description: `Current page indicator for PDF preview`,
          values: { current: i, total: s },
        }),
      })),
      (t[12] = i),
      (t[13] = s),
      (t[14] = _))
    : (_ = t[14]);
  let y = !n,
    x;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(R, { className: `icon-2xs` })), (t[15] = x))
    : (x = t[15]);
  let S;
  t[16] !== f || t[17] !== a || t[18] !== y
    ? ((S = (0, Z.jsx)(N, {
        color: `ghost`,
        size: `composerSm`,
        uniform: !0,
        "aria-label": f,
        disabled: y,
        onClick: a,
        children: x,
      })),
      (t[16] = f),
      (t[17] = a),
      (t[18] = y),
      (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] !== f || t[21] !== S
    ? ((C = (0, Z.jsx)(M, { tooltipContent: f, children: S })),
      (t[20] = f),
      (t[21] = S),
      (t[22] = C))
    : (C = t[22]);
  let w;
  return (
    t[23] !== C || t[24] !== g || t[25] !== _
      ? ((w = (0, Z.jsxs)(`div`, { className: Ut, children: [g, _, C] })),
        (t[23] = C),
        (t[24] = g),
        (t[25] = _),
        (t[26] = w))
      : (w = t[26]),
    w
  );
}
function Gt() {
  let e = (0, X.c)(11),
    [t, n] = (0, $.useState)(1),
    [r, i] = (0, $.useState)(null),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (e) => {
        let { numPages: t } = e;
        (i(t), n((e) => (e > t ? t : e)));
      }),
      (e[0] = a))
    : (a = e[0]);
  let o = a,
    s;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = () => {
        n(Kt);
      }),
      (e[1] = s))
    : (s = e[1]);
  let c = s,
    l;
  e[2] === r
    ? (l = e[3])
    : ((l = () => {
        n((e) => (r != null && e < r ? e + 1 : e));
      }),
      (e[2] = r),
      (e[3] = l));
  let u = l,
    d = t > 1,
    f = r != null && t < r,
    p = r != null && r > 1,
    m;
  return (
    e[4] !== f ||
    e[5] !== d ||
    e[6] !== u ||
    e[7] !== r ||
    e[8] !== t ||
    e[9] !== p
      ? ((m = {
          canGoToNextPage: f,
          canGoToPreviousPage: d,
          goToNextPage: u,
          goToPreviousPage: c,
          handlePdfLoadSuccess: o,
          numPages: r,
          pageNumber: t,
          showPager: p,
        }),
        (e[4] = f),
        (e[5] = d),
        (e[6] = u),
        (e[7] = r),
        (e[8] = t),
        (e[9] = p),
        (e[10] = m))
      : (m = e[10]),
    m
  );
}
function Kt(e) {
  return e > 1 ? e - 1 : e;
}
var qt = new URL(
  `` + new URL(`pdf.worker.min.mjs`, import.meta.url).href,
  `` + import.meta.url,
).toString();
h.workerSrc !== qt && (h.workerSrc = qt);
function Jt(e) {
  let t = (0, X.c)(15),
    { imagePreview: n, className: r, fallback: i, showMissingPreview: a } = e,
    o = _e(n?.before ?? null),
    s = _e(n?.after ?? null),
    c = o.dataUrl != null || s.dataUrl != null || o.isLoading || s.isLoading;
  if (!n || (!a && !c)) return i;
  let l = n.before == null && n.after != null,
    u;
  t[0] === n.before
    ? (u = t[1])
    : ((u = Zt(n.before)), (t[0] = n.before), (t[1] = u));
  let d = u,
    f;
  t[2] === n.after
    ? (f = t[3])
    : ((f = Zt(n.after)), (t[2] = n.after), (t[3] = f));
  let p = f,
    m = `pdf-before-${d}`,
    h;
  t[4] !== o || t[5] !== m
    ? ((h = (0, Z.jsx)(Yt, { preview: o }, m)),
      (t[4] = o),
      (t[5] = m),
      (t[6] = h))
    : (h = t[6]);
  let g = `pdf-after-${p}`,
    _;
  t[7] !== s || t[8] !== g
    ? ((_ = (0, Z.jsx)(Yt, { preview: s }, g)),
      (t[7] = s),
      (t[8] = g),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  return (
    t[10] !== r || t[11] !== l || t[12] !== h || t[13] !== _
      ? ((v = (0, Z.jsx)(he, {
          className: r,
          showAfterOnly: l,
          before: h,
          after: _,
        })),
        (t[10] = r),
        (t[11] = l),
        (t[12] = h),
        (t[13] = _),
        (t[14] = v))
      : (v = t[14]),
    v
  );
}
function Yt(e) {
  let t = (0, X.c)(20),
    { preview: n } = e,
    [r, i] = (0, $.useState)(null),
    {
      canGoToNextPage: a,
      canGoToPreviousPage: o,
      goToNextPage: s,
      goToPreviousPage: c,
      handlePdfLoadSuccess: l,
      numPages: d,
      pageNumber: f,
      showPager: p,
    } = Gt(),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (e) => {
        let t = Math.floor(e.contentRect.width);
        i((e) => (e === t ? e : t));
      }),
      (t[0] = m))
    : (m = t[0]);
  let h = L(m),
    g;
  t[1] !== l ||
  t[2] !== h ||
  t[3] !== f ||
  t[4] !== r ||
  t[5] !== n.dataUrl ||
  t[6] !== n.isError ||
  t[7] !== n.isLoading
    ? ((g = (0, Z.jsx)(Y, {
        children: n.isLoading
          ? (0, Z.jsx)(ue, { className: `text-xs` })
          : n.dataUrl != null && !n.isError
            ? (0, Z.jsx)(`div`, {
                ref: h,
                className: `w-full max-w-full`,
                children: (0, Z.jsx)(ee, {
                  name: `PdfPreviewPanel`,
                  fallback: (0, Z.jsx)(Xt, {}),
                  children: (0, Z.jsx)(xt, {
                    file: n.dataUrl,
                    loading: null,
                    onLoadSuccess: l,
                    error: (0, Z.jsx)(Xt, {}),
                    noData: (0, Z.jsx)(le, {
                      className: `text-center`,
                      children: (0, Z.jsx)(b, {
                        id: `codex.diffView.pdfPreviewEmpty`,
                        defaultMessage: `No PDF preview`,
                        description: `Placeholder text when PDF preview data is unavailable`,
                      }),
                    }),
                    children: (0, Z.jsx)(Ht, {
                      className: u(`overflow-hidden rounded-sm shadow-sm`),
                      pageNumber: f,
                      width: r != null && r > 0 ? r : void 0,
                      renderAnnotationLayer: !1,
                      renderTextLayer: !1,
                    }),
                  }),
                }),
              })
            : (0, Z.jsx)(le, {
                className: `text-center`,
                children: (0, Z.jsx)(b, {
                  id: `codex.diffView.pdfPreviewEmpty`,
                  defaultMessage: `No PDF preview`,
                  description: `Placeholder text when PDF preview data is unavailable`,
                }),
              }),
      })),
      (t[1] = l),
      (t[2] = h),
      (t[3] = f),
      (t[4] = r),
      (t[5] = n.dataUrl),
      (t[6] = n.isError),
      (t[7] = n.isLoading),
      (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] !== a ||
  t[10] !== o ||
  t[11] !== s ||
  t[12] !== c ||
  t[13] !== d ||
  t[14] !== f ||
  t[15] !== p
    ? ((_ = p
        ? (0, Z.jsx)(Wt, {
            canGoToNextPage: a,
            canGoToPreviousPage: o,
            currentPage: f,
            totalPages: d ?? 1,
            onNextPage: s,
            onPreviousPage: c,
          })
        : null),
      (t[9] = a),
      (t[10] = o),
      (t[11] = s),
      (t[12] = c),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== g || t[18] !== _
      ? ((v = (0, Z.jsxs)(`div`, {
          className: `group/pdf-preview relative`,
          children: [g, _],
        })),
        (t[17] = g),
        (t[18] = _),
        (t[19] = v))
      : (v = t[19]),
    v
  );
}
function Xt() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(le, {
          className: `text-center`,
          children: (0, Z.jsx)(b, {
            id: `codex.diffView.pdfPreviewError`,
            defaultMessage: `Unable to render PDF preview`,
            description: `Placeholder text when PDF content cannot be rendered`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Zt(e) {
  return e
    ? e.kind === `git`
      ? `${e.kind}:${e.hostId}:${e.cwd}:${e.ref}:${e.path}`
      : `${e.kind}:${e.hostId}:${e.path}`
    : `none`;
}
function Qt(e) {
  for (let t of e) {
    if (!(t instanceof HTMLElement)) continue;
    let e = t.getAttribute(`data-line`) ?? t.getAttribute(`data-column-number`);
    if (e == null) continue;
    let n = Number.parseInt(e, 10);
    if (!Number.isNaN(n)) return n;
  }
  return null;
}
function $t({ data: e, preferredTargetOverride: t }) {
  let n = t ?? e?.preferredTarget,
    r = e?.availableTargets ?? [],
    i =
      t == null
        ? (e?.targets ?? [])
        : (e?.targets ?? []).map((e) => ({
            ...e,
            default: e.target === t ? !0 : void 0,
          }));
  return {
    visibleTargets: te({
      targets: i,
      availableTargets: r,
      includeHiddenTargets: !0,
      mode: e?.mode,
    }),
    primaryTarget: H({
      preferredTarget: n ?? null,
      targets: i,
      availableTargets: r,
      mode: e?.mode,
    }),
  };
}
var en = C(
  y,
  ({ cwd: e, hostId: t, openPath: n }, { signal: r }) => {
    let i = w(y, `open-in-targets`, {
      enabled: !0,
      params: { cwd: e, hostId: t, path: n },
      staleTime: S.ONE_MINUTE,
    });
    return { preferredTargetOverride$: r(void 0), query$: i };
  },
  {
    key: ({ cwd: e, hostId: t, openPath: n }) =>
      `${t ?? ``}:${e ?? ``}:${n ?? ``}`,
  },
);
async function tn(e, t) {
  P(t);
}
async function nn({ cwd: e, hostId: t, openPath: n, queryClient: r }) {
  return (e ?? n)
    ? r.fetchQuery({
        queryKey: D(`open-in-targets`, { cwd: e, hostId: t, path: n }),
        queryFn: () =>
          T(`open-in-targets`, { params: { cwd: e, hostId: t, path: n } }),
        staleTime: S.ONE_MINUTE,
      })
    : null;
}
async function rn(e, t) {
  let n = t.openPath ?? t.cwd;
  n &&
    (t.persistPreferred &&
      e
        .get(en, { cwd: t.cwd, hostId: t.hostId, openPath: t.openPath })
        .preferredTargetOverride$.set(t.target),
    await tn(e, {
      column: t.column,
      cwd: t.cwd,
      hostId: t.hostId,
      line: t.line,
      path: n,
      appPath: t.appPath,
      persistPreferredTargetPath:
        t.persistPreferred && t.cwd != null ? t.cwd : void 0,
      target: t.target,
    }));
}
var an = (e, t) => `${e}:${t}`;
function on(e) {
  let t = (0, X.c)(13),
    {
      canOpenFile: n,
      loadOpenTargets: r,
      preferredTargetOverride: i,
      onRequestChanges: a,
      onCopyPath: o,
      onCopyRelativePath: s,
      onToggleWrap: c,
      handleOpenInTarget: l,
    } = e,
    u;
  t[0] !== n ||
  t[1] !== l ||
  t[2] !== r ||
  t[3] !== o ||
  t[4] !== s ||
  t[5] !== a ||
  t[6] !== c ||
  t[7] !== i
    ? ((u = async () => {
        let { primaryTarget: e, visibleTargets: t } = $t({
            data: r ? await r() : null,
            preferredTargetOverride: i,
          }),
          u = [
            {
              id: `request-changes`,
              message: _({
                id: `wham.diff.contextMenu.requestChanges`,
                defaultMessage: `Request changes`,
                description: `Context menu option for requesting changes on a diff file`,
              }),
              onSelect: a,
            },
          ];
        return (
          e &&
            (u.push({
              id: `open-primary`,
              message: _({
                id: `wham.diff.contextMenu.openInTarget`,
                defaultMessage: `Open in {target}`,
                description: `Context menu option to open a file in the primary target`,
              }),
              messageValues: { target: e.label },
              icon: e.icon,
              onSelect: () => l(e.target, !1, e.appPath),
            }),
            u.push({
              id: `open-with`,
              message: _({
                id: `wham.diff.contextMenu.openWith`,
                defaultMessage: `Open with`,
                description: `Context menu option to select an alternate open target`,
              }),
              submenu: t.map((e) => ({
                id: e.id,
                message: _({
                  id: `wham.diff.contextMenu.openInTargetSubmenu`,
                  defaultMessage: `{target}`,
                  description: `Context menu option to open a file in the target app`,
                }),
                messageValues: { target: e.label },
                icon: e.icon,
                onSelect: () => l(e.target, U(e), e.appPath),
              })),
            })),
          e && u.push({ id: `section-separator-1`, type: `separator` }),
          u.push(
            {
              id: `copy-selection`,
              message: _({
                id: `wham.diff.contextMenu.copySelection`,
                defaultMessage: `Copy selection`,
                description: `Context menu option to copy selected text`,
              }),
              enabled: !1,
            },
            {
              id: `copy-path`,
              message: _({
                id: `wham.diff.contextMenu.copyPath`,
                defaultMessage: `Copy path`,
                description: `Context menu option to copy the file path`,
              }),
              enabled: n,
              onSelect: o,
            },
          ),
          s != null &&
            u.push({
              id: `copy-relative-path`,
              message: _({
                id: `wham.diff.contextMenu.copyRelativePath`,
                defaultMessage: `Copy relative path`,
                description: `Context menu option to copy the relative file path`,
              }),
              onSelect: s,
            }),
          u.push({
            id: `toggle-wrap`,
            message: _({
              id: `wham.diff.contextMenu.toggleWrap`,
              defaultMessage: `Toggle line wrap`,
              description: `Context menu option to toggle line wrapping in the diff view`,
            }),
            onSelect: c,
          }),
          u
        );
      }),
      (t[0] = n),
      (t[1] = l),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s),
      (t[5] = a),
      (t[6] = c),
      (t[7] = i),
      (t[8] = u))
    : (u = t[8]);
  let d = u,
    f;
  t[9] === d
    ? (f = t[10])
    : ((f = async () => {
        let e = window.getSelection()?.toString()?.trim() ?? ``,
          t = !!e,
          n = () => {
            t && B(e);
          };
        return (await d()).map((e) =>
          e.id === `copy-selection` ? { ...e, enabled: t, onSelect: n } : e,
        );
      }),
      (t[9] = d),
      (t[10] = f));
  let p = f,
    m;
  return (
    t[11] === p
      ? (m = t[12])
      : ((m = { getItems: p }), (t[11] = p), (t[12] = m)),
    m
  );
}
function sn(e) {
  let t = (0, X.c)(8),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, disableNative: r, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let { getItems: a } = on(i),
    o;
  return (
    t[4] !== n || t[5] !== r || t[6] !== a
      ? ((o = (0, Z.jsx)(z, { getItems: a, disableNative: r, children: n })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
function cn(e) {
  let t = (0, X.c)(9),
    [n, r] = a(`diff_comment_drafts`),
    i;
  t[0] !== n || t[1] !== e
    ? ((i = e ? (n?.[e] ?? {}) : {}), (t[0] = n), (t[1] = e), (t[2] = i))
    : (i = t[2]);
  let o = i,
    s;
  t[3] !== e || t[4] !== r
    ? ((s = (t) => {
        e &&
          r((n) => {
            let r = n?.[e] ?? {},
              i = t(r);
            if (i === r) return n;
            let a = { ...n };
            return Object.keys(i).length === 0
              ? (delete a[e], a)
              : ((a[e] = i), a);
          });
      }),
      (t[3] = e),
      (t[4] = r),
      (t[5] = s))
    : (s = t[5]);
  let c = s,
    l;
  return (
    t[6] !== o || t[7] !== c
      ? ((l = { drafts: o, updateDrafts: c }),
        (t[6] = o),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
var ln = u(
  `text-token-text-primary font-sans w-full !min-h-0 p-0`,
  `[&_.ProseMirror]:w-full`,
  `[&_.ProseMirror]:leading-relaxed`,
  `extension:[&_.ProseMirror]:leading-normal`,
  `[&_.ProseMirror]:font-sans`,
  `[&_.ProseMirror]:px-0`,
  `[&_.ProseMirror]:py-0`,
);
function un(e) {
  let t = (0, X.c)(107),
    {
      filePath: n,
      workspaceRoot: r,
      side: i,
      lineNumber: a,
      startLine: o,
      startSide: c,
      localDiffHunk: l,
      authorLabel: u,
      authorAvatarUrl: d,
      onSubmit: f,
      onDelete: p,
      onClose: m,
      initialComment: h,
      onUnsavedChange: g,
      isSubmitting: _,
      readOnly: y,
    } = e,
    x = _ === void 0 ? !1 : _,
    S = y === void 0 ? !1 : y,
    C;
  t[0] === h ? (C = t[1]) : ((C = h ? s(h) : ``), (t[0] = h), (t[1] = C));
  let w = C,
    T = h?.position.start_line ?? o ?? a,
    E = h?.position.line ?? a,
    [D, O] = (0, $.useState)(w),
    [k, j] = (0, $.useState)(!h && !S),
    M = (0, $.useRef)(null),
    P = (0, $.useRef)(null),
    F = (0, $.useRef)(h != null),
    { data: ee } = A(),
    L = v(),
    R,
    z,
    B;
  t[2] !== d || t[3] !== u || t[4] !== ee?.profile_picture_url || t[5] !== L
    ? ((z =
        u ??
        L.formatMessage({
          id: `code.diffComment.localCommentAuthor`,
          defaultMessage: `Local comment`,
          description: `Author label shown for local diff comments`,
        })),
      (R = d ?? ee?.profile_picture_url ?? null),
      (B = L.formatMessage(
        {
          id: `code.diffComment.authorAvatarAlt`,
          defaultMessage: `{author} avatar`,
          description: `Alt text for the current user's avatar on a local diff comment`,
        },
        { author: z },
      )),
      (t[2] = d),
      (t[3] = u),
      (t[4] = ee?.profile_picture_url),
      (t[5] = L),
      (t[6] = R),
      (t[7] = z),
      (t[8] = B))
    : ((R = t[6]), (z = t[7]), (B = t[8]));
  let te = B,
    H;
  t[9] !== te || t[10] !== R
    ? ((H =
        R == null
          ? (0, Z.jsx)(`span`, {
              className: `flex size-6 shrink-0 items-center justify-center rounded-full border border-token-border/20 bg-token-bg-primary/60 text-token-foreground`,
              children: (0, Z.jsx)(V, { className: `icon-xs` }),
            })
          : (0, Z.jsx)(`img`, {
              alt: te,
              className: `size-6 shrink-0 rounded-full border border-token-border/14 object-cover`,
              src: R,
            })),
      (t[9] = te),
      (t[10] = R),
      (t[11] = H))
    : (H = t[11]);
  let U = H,
    W;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = oe()), (t[12] = W))
    : (W = t[12]);
  let G = W,
    q;
  (t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = () => {
        G.view.isDestroyed || G.destroy();
      }),
      (t[13] = q))
    : (q = t[13]),
    ie(q));
  let re;
  t[14] === S
    ? (re = t[15])
    : ((re = (e) => {
        if (S) return;
        let t = e.target;
        t &&
          (t.closest(`.ProseMirror,button,input,select,a,[role='button']`) ||
            (e.preventDefault(), G.focus()));
      }),
      (t[14] = S),
      (t[15] = re));
  let J = re,
    ae,
    se;
  (t[16] === w
    ? ((ae = t[17]), (se = t[18]))
    : ((se = () => {
        if (G.getText() === w) {
          O((e) => (e === w ? e : w));
          return;
        }
        (G.setPromptText(w), O(w));
      }),
      (ae = [G, w]),
      (t[16] = w),
      (t[17] = ae),
      (t[18] = se)),
    (0, $.useEffect)(se, ae));
  let ce, le;
  (t[19] === h
    ? ((ce = t[20]), (le = t[21]))
    : ((ce = () => {
        let e = h != null;
        (!F.current && e && (j(!1), G.view.dom.blur()), (F.current = e));
      }),
      (le = [G, h]),
      (t[19] = h),
      (t[20] = ce),
      (t[21] = le)),
    (0, $.useEffect)(ce, le));
  let Y;
  if (t[22] !== D || t[23] !== h || t[24] !== w || t[25] !== S) {
    if (((Y = !1), !S))
      if (h) Y = D !== w;
      else {
        let e;
        (t[27] === D ? (e = t[28]) : ((e = D.trim()), (t[27] = D), (t[28] = e)),
          (Y = e.length > 0));
      }
    ((t[22] = D), (t[23] = h), (t[24] = w), (t[25] = S), (t[26] = Y));
  } else Y = t[26];
  let ue;
  t[29] !== Y || t[30] !== g
    ? ((ue = () => {
        g && P.current !== Y && ((P.current = Y), g(Y));
      }),
      (t[29] = Y),
      (t[30] = g),
      (t[31] = ue))
    : (ue = t[31]);
  let de;
  (t[32] !== Y || t[33] !== g
    ? ((de = [Y, g]), (t[32] = Y), (t[33] = g), (t[34] = de))
    : (de = t[34]),
    (0, $.useEffect)(ue, de));
  let fe;
  t[35] !== D ||
  t[36] !== n ||
  t[37] !== h ||
  t[38] !== x ||
  t[39] !== a ||
  t[40] !== l ||
  t[41] !== m ||
  t[42] !== f ||
  t[43] !== S ||
  t[44] !== i ||
  t[45] !== o ||
  t[46] !== c
    ? ((fe = () => {
        S ||
          x ||
          (D &&
            (f(
              h
                ? { ...h, content: [{ content_type: `text`, text: D }] }
                : {
                    type: `comment`,
                    content: [{ content_type: `text`, text: D }],
                    position: {
                      side: i === `deletions` ? `left` : `right`,
                      path: n,
                      line: a,
                      ...(o != null && (o !== a || c !== i)
                        ? { start_line: o }
                        : {}),
                      ...(c != null && c !== i
                        ? { start_side: c === `deletions` ? `left` : `right` }
                        : {}),
                    },
                    ...(l == null ? {} : { localDiffHunk: l }),
                  },
            ),
            j(!1),
            G.view.dom.blur(),
            m?.(),
            I()));
      }),
      (t[35] = D),
      (t[36] = n),
      (t[37] = h),
      (t[38] = x),
      (t[39] = a),
      (t[40] = l),
      (t[41] = m),
      (t[42] = f),
      (t[43] = S),
      (t[44] = i),
      (t[45] = o),
      (t[46] = c),
      (t[47] = fe))
    : (fe = t[47]);
  let pe = fe,
    me;
  t[48] === p
    ? (me = t[49])
    : ((me = () => {
        (p?.(), I());
      }),
      (t[48] = p),
      (t[49] = me));
  let he = me;
  if (!S && h?.replyToReviewThreadId != null) {
    let e;
    t[50] === L
      ? (e = t[51])
      : ((e = L.formatMessage({
          id: `code.diffComment.reply.placeholder`,
          defaultMessage: `Reply…`,
          description: `Placeholder for a pull request review reply`,
        })),
        (t[50] = L),
        (t[51] = e));
    let n;
    t[52] !== D ||
    t[53] !== pe ||
    t[54] !== h ||
    t[55] !== w ||
    t[56] !== m ||
    t[57] !== e ||
    t[58] !== r
      ? ((n = (0, Z.jsx)(`div`, {
          className: `min-w-0 flex-1`,
          children: (0, Z.jsx)(mn, {
            commentEditor: G,
            commentText: D,
            disableAutoFocus: !1,
            initialComment: h,
            initialCommentText: w,
            workspaceRoot: r,
            containerRef: M,
            onTextChange: O,
            onEscape: m,
            onSubmit: pe,
            placeholder: e,
          }),
        })),
        (t[52] = D),
        (t[53] = pe),
        (t[54] = h),
        (t[55] = w),
        (t[56] = m),
        (t[57] = e),
        (t[58] = r),
        (t[59] = n))
      : (n = t[59]);
    let i;
    t[60] === L
      ? (i = t[61])
      : ((i = L.formatMessage({
          id: `code.diffComment.reply.submit`,
          defaultMessage: `Post reply`,
          description: `Accessible label for posting a pull request reply`,
        })),
        (t[60] = L),
        (t[61] = i));
    let a;
    t[62] === D ? (a = t[63]) : ((a = D.trim()), (t[62] = D), (t[63] = a));
    let o = !a,
      s;
    t[64] === x
      ? (s = t[65])
      : ((s = x ? null : (0, Z.jsx)(K, { className: `icon-xs` })),
        (t[64] = x),
        (t[65] = s));
    let c;
    t[66] !== pe || t[67] !== x || t[68] !== i || t[69] !== o || t[70] !== s
      ? ((c = (0, Z.jsx)(N, {
          "aria-label": i,
          color: `primary`,
          disabled: o,
          loading: x,
          size: `composerSm`,
          uniform: !0,
          onClick: pe,
          children: s,
        })),
        (t[66] = pe),
        (t[67] = x),
        (t[68] = i),
        (t[69] = o),
        (t[70] = s),
        (t[71] = c))
      : (c = t[71]);
    let l;
    return (
      t[72] !== U || t[73] !== n || t[74] !== c
        ? ((l = (0, Z.jsx)(`div`, {
            ref: M,
            className: `w-full max-w-3xl min-w-0 px-1.5 pb-1.5 font-sans`,
            children: (0, Z.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-2 rounded-lg border border-token-border/24 bg-token-bg-secondary px-2.5 py-2 focus-within:border-token-text-secondary`,
              children: [U, n, c],
            }),
          })),
          (t[72] = U),
          (t[73] = n),
          (t[74] = c),
          (t[75] = l))
        : (l = t[75]),
      l
    );
  }
  let ge;
  t[76] !== D ||
  t[77] !== pe ||
  t[78] !== h ||
  t[79] !== w ||
  t[80] !== L ||
  t[81] !== m ||
  t[82] !== S ||
  t[83] !== r
    ? ((ge = (0, Z.jsx)(`div`, {
        className: `flex flex-col gap-2 p-3`,
        children: S
          ? (0, Z.jsx)(dn, {
              commentEditor: G,
              placeholder: L.formatMessage({
                id: `code.diff.requestChange`,
                defaultMessage: `Request change`,
                description: `Placeholder for code diff request change`,
              }),
            })
          : (0, Z.jsx)(mn, {
              commentEditor: G,
              commentText: D,
              initialComment: h,
              initialCommentText: w,
              workspaceRoot: r,
              containerRef: M,
              onTextChange: O,
              onEscape: m,
              onSubmit: pe,
              onShowButtons: () => {
                j(!0);
              },
              onHideButtons: () => {
                j(!1);
              },
              placeholder: L.formatMessage({
                id: `code.diff.requestChange`,
                defaultMessage: `Request change`,
                description: `Placeholder for code diff request change`,
              }),
            }),
      })),
      (t[76] = D),
      (t[77] = pe),
      (t[78] = h),
      (t[79] = w),
      (t[80] = L),
      (t[81] = m),
      (t[82] = S),
      (t[83] = r),
      (t[84] = ge))
    : (ge = t[84]);
  let _e;
  t[85] !== D ||
  t[86] !== he ||
  t[87] !== pe ||
  t[88] !== h ||
  t[89] !== w ||
  t[90] !== x ||
  t[91] !== m ||
  t[92] !== p ||
  t[93] !== S ||
  t[94] !== k
    ? ((_e =
        !S && (k || x || p != null)
          ? (0, Z.jsxs)(`div`, {
              className: `flex w-full items-center justify-between gap-2`,
              children: [
                p != null && !k && !x ? (0, Z.jsx)(`div`, {}) : null,
                p != null && k && !x
                  ? (0, Z.jsx)(N, {
                      color: `danger`,
                      size: `toolbar`,
                      onClick: he,
                      children: (0, Z.jsx)(b, {
                        id: `code.diffComment.delete`,
                        defaultMessage: `Delete`,
                        description: `Delete a comment`,
                      }),
                    })
                  : k || x
                    ? (0, Z.jsx)(`div`, {})
                    : null,
                k || x
                  ? (0, Z.jsxs)(`div`, {
                      className: `flex items-center justify-end gap-2`,
                      children: [
                        k && !x
                          ? (0, Z.jsx)(N, {
                              color: `ghost`,
                              size: `toolbar`,
                              onClick: () => {
                                (m?.(), j(!1), h && (O(w), G.setPromptText(w)));
                              },
                              children: (0, Z.jsx)(b, {
                                id: `code.diffComment.cancel`,
                                defaultMessage: `Cancel`,
                                description: `Cancel a comment`,
                              }),
                            })
                          : null,
                        (0, Z.jsx)(N, {
                          color: `primary`,
                          size: `toolbar`,
                          disabled: !D,
                          loading: x,
                          onClick: pe,
                          children: h
                            ? (0, Z.jsx)(b, {
                                id: `code.diffComment.save`,
                                defaultMessage: `Save`,
                                description: `Save a comment`,
                              })
                            : (0, Z.jsx)(b, {
                                id: `code.diffComment.comment`,
                                defaultMessage: `Comment`,
                                description: `Comment on a code diff`,
                              }),
                        }),
                      ],
                    })
                  : p == null
                    ? null
                    : (0, Z.jsx)(N, {
                        color: `ghost`,
                        size: `toolbar`,
                        onClick: he,
                        children: (0, Z.jsx)(b, {
                          id: `code.diffComment.delete`,
                          defaultMessage: `Delete`,
                          description: `Delete a comment`,
                        }),
                      }),
              ],
            })
          : null),
      (t[85] = D),
      (t[86] = he),
      (t[87] = pe),
      (t[88] = h),
      (t[89] = w),
      (t[90] = x),
      (t[91] = m),
      (t[92] = p),
      (t[93] = S),
      (t[94] = k),
      (t[95] = _e))
    : (_e = t[95]);
  let ve;
  t[96] !== E || t[97] !== T || t[98] !== i
    ? ((ve = (0, Z.jsx)(`div`, {
        className: `text-xs leading-4 text-token-description-foreground`,
        children:
          T === E
            ? (0, Z.jsx)(b, {
                id: `code.diffComment.line`,
                defaultMessage: `Comment on line {line}`,
                description: `Line label shown on a local diff comment`,
                values: { line: `${i === `deletions` ? `L` : `R`}${E}` },
              })
            : (0, Z.jsx)(b, {
                id: `code.diffComment.lineRange`,
                defaultMessage: `Comment on lines {startLine} to {endLine}`,
                description: `Line range label shown on a local diff comment`,
                values: {
                  endLine: `${i === `deletions` ? `L` : `R`}${E}`,
                  startLine: `${i === `deletions` ? `L` : `R`}${T}`,
                },
              }),
      })),
      (t[96] = E),
      (t[97] = T),
      (t[98] = i),
      (t[99] = ve))
    : (ve = t[99]);
  let ye;
  return (
    t[100] !== U ||
    t[101] !== z ||
    t[102] !== J ||
    t[103] !== ge ||
    t[104] !== _e ||
    t[105] !== ve
      ? ((ye = (0, Z.jsx)(`div`, {
          ref: M,
          className: `w-full max-w-3xl min-w-0 gap-2 p-1.5 font-sans`,
          children: (0, Z.jsx)(ne, {
            authorAvatar: U,
            authorLabel: z,
            body: ge,
            className: `shadow-sm`,
            footer: _e,
            headerAccessory: ve,
            onPointerDownCapture: J,
          }),
        })),
        (t[100] = U),
        (t[101] = z),
        (t[102] = J),
        (t[103] = ge),
        (t[104] = _e),
        (t[105] = ve),
        (t[106] = ye))
      : (ye = t[106]),
    ye
  );
}
function dn(e) {
  let t = (0, X.c)(7),
    { commentEditor: n, placeholder: r } = e,
    i;
  t[0] === n.view
    ? (i = t[1])
    : ((i = () => {
        n.view.isDestroyed || n.view.setProps({ editable: pn });
      }),
      (t[0] = n.view),
      (t[1] = i));
  let a;
  (t[2] === n ? (a = t[3]) : ((a = [n]), (t[2] = n), (t[3] = a)),
    (0, $.useEffect)(i, a));
  let o;
  return (
    t[4] !== n || t[5] !== r
      ? ((o = (0, Z.jsx)(re, {
          className: ln,
          composerController: n,
          disableAutoFocus: !0,
          minHeight: `0`,
          placeholder: r,
          onSubmit: fn,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function fn() {}
function pn() {
  return !1;
}
function mn(e) {
  let t = (0, X.c)(56),
    {
      commentEditor: n,
      commentText: r,
      disableAutoFocus: i,
      initialComment: a,
      initialCommentText: s,
      workspaceRoot: c,
      containerRef: l,
      onTextChange: u,
      onEscape: d,
      onSubmit: f,
      onShowButtons: p,
      onHideButtons: m,
      placeholder: h,
    } = e,
    g = (0, $.useRef)(null),
    _ = hn(c),
    v = q(n),
    y = J(n),
    b = v.ui?.active ?? !1,
    x;
  t[0] === b
    ? (x = t[1])
    : ((x = { anchorRef: g, isActive: b }), (t[0] = b), (t[1] = x));
  let S = me(x),
    C = y.ui?.active ?? !1,
    w;
  t[2] === C
    ? (w = t[3])
    : ((w = { anchorRef: g, isActive: C }), (t[2] = C), (t[3] = w));
  let T = me(w),
    E;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { hostId: o }), (t[4] = E))
    : (E = t[4]);
  let D = j(E),
    { skills: O } = W(_),
    k,
    A;
  (t[5] !== n || t[6] !== u
    ? ((k = () =>
        ce(n.view, () => {
          u(n.getText());
        })),
      (A = [n, u]),
      (t[5] = n),
      (t[6] = u),
      (t[7] = k),
      (t[8] = A))
    : ((k = t[7]), (A = t[8])),
    (0, $.useEffect)(k, A));
  let M, N;
  (t[9] !== D || t[10] !== O || t[11] !== n
    ? ((M = () => {
        n.syncMentionMetadata({ skills: O, apps: D });
      }),
      (N = [D, O, n]),
      (t[9] = D),
      (t[10] = O),
      (t[11] = n),
      (t[12] = M),
      (t[13] = N))
    : ((M = t[12]), (N = t[13])),
    (0, $.useEffect)(M, N));
  let P;
  t[14] !== n.view.dom || t[15] !== d
    ? ((P = () => {
        let e = (e) => {
            e.key === `Escape` &&
              (e.defaultPrevented || (e.preventDefault(), d?.()));
          },
          t = n.view.dom;
        return (
          t.addEventListener(`keydown`, e),
          () => {
            t.removeEventListener(`keydown`, e);
          }
        );
      }),
      (t[14] = n.view.dom),
      (t[15] = d),
      (t[16] = P))
    : (P = t[16]);
  let F;
  (t[17] !== n || t[18] !== d
    ? ((F = [n, d]), (t[17] = n), (t[18] = d), (t[19] = F))
    : (F = t[19]),
    (0, $.useEffect)(P, F));
  let I;
  t[20] !== r || t[21] !== l || t[22] !== a || t[23] !== s || t[24] !== m
    ? ((I = (e) => {
        let t = e.relatedTarget;
        a && r === s && (!t || !l.current?.contains(t)) && m?.();
      }),
      (t[20] = r),
      (t[21] = l),
      (t[22] = a),
      (t[23] = s),
      (t[24] = m),
      (t[25] = I))
    : (I = t[25]);
  let ee = v.ui?.active ?? !1,
    L = v.ui?.query ?? ``,
    R = v.ui?.source ?? null,
    z;
  t[26] !== v.addMention ||
  t[27] !== v.closeAutocomplete ||
  t[28] !== v.setSelectedMention ||
  t[29] !== _ ||
  t[30] !== L ||
  t[31] !== R
    ? ((z = (0, Z.jsx)(se, {
        hostId: o,
        onAddContext: v.addMention,
        onRequestClose: v.closeAutocomplete,
        onUpdateSelectedMention: v.setSelectedMention,
        query: L,
        roots: _,
        skillRoots: _,
        source: R,
      })),
      (t[26] = v.addMention),
      (t[27] = v.closeAutocomplete),
      (t[28] = v.setSelectedMention),
      (t[29] = _),
      (t[30] = L),
      (t[31] = R),
      (t[32] = z))
    : (z = t[32]);
  let B;
  t[33] !== S || t[34] !== n || t[35] !== v.ui || t[36] !== ee || t[37] !== z
    ? ((B = (0, Z.jsx)(pe, {
        anchorRef: g,
        composerController: n,
        isActive: ee,
        mentionUiState: v.ui,
        placement: S,
        children: z,
      })),
      (t[33] = S),
      (t[34] = n),
      (t[35] = v.ui),
      (t[36] = ee),
      (t[37] = z),
      (t[38] = B))
    : (B = t[38]);
  let V;
  t[39] !== _ || t[40] !== y || t[41] !== T
    ? ((V = (0, Z.jsx)(ae, {
        autocomplete: y,
        roots: _,
        anchorRef: g,
        placement: T,
        zIndexClassName: `z-[60]`,
      })),
      (t[39] = _),
      (t[40] = y),
      (t[41] = T),
      (t[42] = V))
    : (V = t[42]);
  let te = i ?? !!a,
    H;
  t[43] !== n ||
  t[44] !== v.handleMentionEvent ||
  t[45] !== f ||
  t[46] !== h ||
  t[47] !== y.handleMentionEvent ||
  t[48] !== te
    ? ((H = (0, Z.jsx)(re, {
        className: ln,
        composerController: n,
        disableAutoFocus: te,
        minHeight: `0`,
        placeholder: h,
        onMentionHandler: v.handleMentionEvent,
        onSkillMentionHandler: y.handleMentionEvent,
        onSubmit: f,
      })),
      (t[43] = n),
      (t[44] = v.handleMentionEvent),
      (t[45] = f),
      (t[46] = h),
      (t[47] = y.handleMentionEvent),
      (t[48] = te),
      (t[49] = H))
    : (H = t[49]);
  let U;
  return (
    t[50] !== p || t[51] !== I || t[52] !== B || t[53] !== V || t[54] !== H
      ? ((U = (0, Z.jsxs)(`div`, {
          ref: g,
          className: `relative`,
          onFocus: p,
          onBlur: I,
          children: [B, V, H],
        })),
        (t[50] = p),
        (t[51] = I),
        (t[52] = B),
        (t[53] = V),
        (t[54] = H),
        (t[55] = U))
      : (U = t[55]),
    U
  );
}
function hn(e) {
  let t = (0, X.c)(2),
    { data: n } = x(k);
  n?.roots;
  let r;
  bb0: {
    if (e != null) {
      let n;
      (t[0] === e ? (n = t[1]) : ((n = [e]), (t[0] = e), (t[1] = n)), (r = n));
      break bb0;
    }
    r = n?.roots;
  }
  return r;
}
function gn(e) {
  let t = (0, X.c)(51),
    {
      diffPath: a,
      workspaceRoot: o,
      enableComments: s,
      allowCommentDrafts: c,
      comments: l,
      modelComments: u,
      readonlyComments: d,
      submittingCommentKeys: f,
      onCommentsChange: p,
      commentAuthorLabel: m,
      commentAuthorAvatarUrl: h,
      onReadonlyCommentReply: g,
      onSelectionClear: _,
      conversationId: y,
    } = e,
    x = c === void 0 ? s : c,
    S = (0, $.useId)(),
    C = v(),
    w;
  t[0] === C
    ? (w = t[1])
    : ((w = C.formatMessage({
        id: `code.diffComment.modelCommentAuthor`,
        defaultMessage: `Codex`,
        description: `Author label shown for model-authored local diff comments`,
      })),
      (t[0] = C),
      (t[1] = w));
  let T = w,
    E;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = new Set()), (t[2] = E))
    : (E = t[2]);
  let D = (0, $.useRef)(E),
    { updateDrafts: O } = cn(y ?? null),
    k,
    A;
  (t[3] !== y || t[4] !== O
    ? ((k = () => {
        if (!y) return;
        let e = D.current;
        return () => {
          e.size !== 0 &&
            (O((t) => {
              let n = { ...t },
                r = !1;
              for (let t of e) t in n && ((r = !0), delete n[t]);
              return r ? n : t;
            }),
            e.clear());
        };
      }),
      (A = [y, O]),
      (t[3] = y),
      (t[4] = O),
      (t[5] = k),
      (t[6] = A))
    : ((k = t[5]), (A = t[6])),
    (0, $.useEffect)(k, A));
  let j;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = {}), (t[7] = j))
    : (j = t[7]);
  let [M, P] = (0, $.useState)(j),
    F;
  if (
    t[8] !== l ||
    t[9] !== a ||
    t[10] !== s ||
    t[11] !== u ||
    t[12] !== d ||
    t[13] !== o
  ) {
    bb0: {
      if (!s) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = []), (t[15] = e))
          : (e = t[15]),
          (F = e));
        break bb0;
      }
      let e = new Set((l ?? []).map(Sn)),
        n = new Set((d ?? []).map(xn)),
        c = (l ?? []).flatMap((e) =>
          n.has(r(e)) ? [] : [{ comment: e, source: `user` }],
        ),
        f = (d ?? []).map((t) => ({
          attached: e.has(r(t)),
          comment: t,
          source: `readonly`,
        })),
        p = (u ?? []).map(bn),
        m = [...c, ...f, ...p];
      if (m.length === 0) {
        let e;
        (t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = []), (t[16] = e))
          : (e = t[16]),
          (F = e));
        break bb0;
      }
      F = m
        .filter((e) => {
          let { comment: t } = e;
          return i(t.position.path, a, o);
        })
        .map(yn);
    }
    ((t[8] = l),
      (t[9] = a),
      (t[10] = s),
      (t[11] = u),
      (t[12] = d),
      (t[13] = o),
      (t[14] = F));
  } else F = t[14];
  let I = F,
    ee;
  bb1: {
    if (!x) {
      let e;
      (t[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = []), (t[17] = e))
        : (e = t[17]),
        (ee = e));
      break bb1;
    }
    let e;
    (t[18] === M
      ? (e = t[19])
      : ((e = Object.entries(M).map(vn)), (t[18] = M), (t[19] = e)),
      (ee = e));
  }
  let L = ee,
    R;
  bb2: {
    if (!s) {
      let e;
      (t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = []), (t[20] = e))
        : (e = t[20]),
        (R = e));
      break bb2;
    }
    let e;
    (t[21] !== I || t[22] !== L
      ? ((e = [...I, ...L]), (t[21] = I), (t[22] = L), (t[23] = e))
      : (e = t[23]),
      (R = e));
  }
  let z = R,
    B;
  if (t[24] !== I || t[25] !== M) {
    B = new Set();
    for (let e of I) B.add(an(e.side, e.lineNumber));
    let e;
    t[27] === M
      ? (e = t[28])
      : ((e = Object.entries(M)), (t[27] = M), (t[28] = e));
    for (let [t] of e) B.add(t);
    ((t[24] = I), (t[25] = M), (t[26] = B));
  } else B = t[26];
  let V = B,
    te;
  t[29] !== x || t[30] !== a
    ? ((te = (e) => {
        let {
          lineNumber: t,
          side: r,
          startLine: i,
          startSide: o,
          localDiffHunk: s,
        } = e;
        if (!x) return;
        let c = an(r, t);
        P((e) => {
          if (e[c]) return e;
          let l = n(a);
          return {
            ...e,
            [c]: {
              side: r,
              lineNumber: t,
              path: l,
              ...(i != null && (i !== t || o !== r) ? { startLine: i } : {}),
              ...(o != null && o !== r ? { startSide: o } : {}),
              ...(s == null ? {} : { localDiffHunk: s }),
            },
          };
        });
      }),
      (t[29] = x),
      (t[30] = a),
      (t[31] = te))
    : (te = t[31]);
  let H = te,
    U;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (e) => {
        P((t) => {
          if (!(e in t)) return t;
          let n = { ...t };
          return (delete n[e], n);
        });
      }),
      (t[32] = U))
    : (U = t[32]);
  let W = U,
    ne;
  t[33] !== h ||
  t[34] !== m ||
  t[35] !== l ||
  t[36] !== y ||
  t[37] !== S ||
  t[38] !== T ||
  t[39] !== p ||
  t[40] !== g ||
  t[41] !== _ ||
  t[42] !== f ||
  t[43] !== O ||
  t[44] !== o
    ? ((ne = (e) => {
        let t = function (e, t) {
            if (y) {
              if (t) {
                (O((t) => (e in t ? t : { ...t, [e]: !0 })), D.current.add(e));
                return;
              }
              (O((t) => {
                if (!(e in t)) return t;
                let n = { ...t };
                return (delete n[e], n);
              }),
                D.current.delete(e));
            }
          },
          n = e.metadata;
        if (!n) return null;
        let i = Cn({
          instanceId: S,
          path: n.kind === `comment` ? n.comment.position.path : n.path,
          side: e.side,
          lineNumber: e.lineNumber,
        });
        switch (n.kind) {
          case `comment`: {
            if (n.source === `readonly`) {
              let e = n.attached === !0,
                t = r(n.comment),
                i =
                  `url` in n.comment && typeof n.comment.url == `string`
                    ? n.comment.url
                    : null,
                a = n.comment.reviewThreadId ?? null,
                o =
                  g != null &&
                  a != null &&
                  !(l ?? []).some((e) => e.replyToReviewThreadId === a),
                s;
              return (
                (s =
                  g == null
                    ? (0, Z.jsx)(N, {
                        color: e ? `ghost` : `primary`,
                        size: `toolbar`,
                        onClick: (i) => {
                          (i.preventDefault(),
                            i.stopPropagation(),
                            p?.(
                              e
                                ? (l ?? []).filter((e) => r(e) !== t)
                                : [...(l ?? []), n.comment],
                            ));
                        },
                        children: e
                          ? (0, Z.jsx)(b, {
                              id: `localConversation.pullRequest.actions.comments.remove`,
                              defaultMessage: `Remove`,
                              description: `Action button shown on an attached pull request comment in a diff`,
                            })
                          : (0, Z.jsx)(b, {
                              id: `localConversation.pullRequest.actions.comments.address`,
                              defaultMessage: `Add to chat`,
                              description: `Action button shown on an individual review comment in the comments flyout`,
                            }),
                      })
                    : o
                      ? (0, Z.jsx)(N, {
                          color: `primary`,
                          size: `toolbar`,
                          onClick: (e) => {
                            (e.preventDefault(),
                              e.stopPropagation(),
                              g(n.comment));
                          },
                          children: (0, Z.jsx)(b, {
                            id: `pullRequestsPage.codeReview.comment.reply`,
                            defaultMessage: `Reply`,
                            description: `Action button shown on a pull request review comment in the code review tab`,
                          }),
                        })
                      : null),
                (0, Z.jsx)(`div`, {
                  className: `w-full max-w-3xl min-w-0 gap-2 p-1.5 font-sans whitespace-normal`,
                  children: (0, Z.jsx)(G, {
                    comment: n.comment,
                    metadataAccessory: s,
                    showDiffLocation: !0,
                    surface: `card`,
                    url: i,
                  }),
                })
              );
            }
            if (n.source === `model`)
              return (0, Z.jsx)(un, {
                filePath: n.comment.position.path,
                workspaceRoot: o,
                side: e.side,
                lineNumber: e.lineNumber,
                initialComment: n.comment,
                readOnly: !0,
                authorLabel: T,
                authorAvatarUrl: null,
                onSubmit: _n,
              });
            let a = f?.has(r(n.comment)) === !0;
            return (0, Z.jsx)(un, {
              filePath: n.comment.position.path,
              workspaceRoot: o,
              side: e.side,
              lineNumber: e.lineNumber,
              initialComment: n.comment,
              authorLabel: m,
              authorAvatarUrl: h,
              isSubmitting: a,
              onUnsavedChange: (e) => {
                t(i, e);
              },
              onSubmit: (e) => {
                t(i, !1);
                let r = (l ?? []).map((t) => (t === n.comment ? e : t));
                p?.(r);
              },
              onDelete: () => {
                (t(i, !1), _?.(), p?.(l?.filter((e) => e !== n.comment) ?? []));
              },
            });
          }
          case `draft-comment`:
            return (0, Z.jsx)(un, {
              filePath: n.path,
              workspaceRoot: o,
              side: e.side,
              lineNumber: e.lineNumber,
              startLine: n.startLine,
              startSide: n.startSide,
              localDiffHunk: n.localDiffHunk,
              authorLabel: m,
              authorAvatarUrl: h,
              onUnsavedChange: (e) => {
                t(i, e);
              },
              onSubmit: (e) => {
                (t(i, !1), _?.(), p?.([...(l ?? []), e]), W(n.key));
              },
              onClose: () => {
                (t(i, !1), _?.(), W(n.key));
              },
            });
        }
      }),
      (t[33] = h),
      (t[34] = m),
      (t[35] = l),
      (t[36] = y),
      (t[37] = S),
      (t[38] = T),
      (t[39] = p),
      (t[40] = g),
      (t[41] = _),
      (t[42] = f),
      (t[43] = O),
      (t[44] = o),
      (t[45] = ne))
    : (ne = t[45]);
  let K = ne,
    q;
  return (
    t[46] !== H || t[47] !== V || t[48] !== z || t[49] !== K
      ? ((q = {
          annotations: z,
          annotationKeys: V,
          addDraftComment: H,
          renderCommentAnnotation: K,
        }),
        (t[46] = H),
        (t[47] = V),
        (t[48] = z),
        (t[49] = K),
        (t[50] = q))
      : (q = t[50]),
    q
  );
}
function _n() {}
function vn(e) {
  let [t, n] = e;
  return {
    side: n.side,
    lineNumber: n.lineNumber,
    metadata: {
      kind: `draft-comment`,
      key: t,
      path: n.path,
      startLine: n.startLine,
      startSide: n.startSide,
      localDiffHunk: n.localDiffHunk,
    },
  };
}
function yn(e) {
  let { attached: t, comment: n, source: r } = e;
  return {
    side: n.position.side === `left` ? `deletions` : `additions`,
    lineNumber: n.position.line,
    metadata: {
      kind: `comment`,
      ...(t == null ? {} : { attached: t }),
      comment: n,
      source: r,
    },
  };
}
function bn(e) {
  return { comment: e, source: `model` };
}
function xn(e) {
  return r(e);
}
function Sn(e) {
  return r(e);
}
function Cn({ instanceId: e, path: t, side: r, lineNumber: i }) {
  return `${e}::${n(t)}::${an(r, i)}`;
}
export {
  nn as a,
  rn as c,
  be as d,
  ve as f,
  en as i,
  Qt as l,
  sn as n,
  $t as o,
  an as r,
  tn as s,
  gn as t,
  Jt as u,
};
//# sourceMappingURL=use-diff-annotations.js.map
