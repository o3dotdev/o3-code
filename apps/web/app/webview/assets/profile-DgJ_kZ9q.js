import { s as e } from "./chunk-Bj-mKKzh.js";
import { Hi as t, qi as n } from "./src-C.js";
import "./app-server-manager-signals-DkRDRgNB.js";
import { n as r, t as i } from "./jsx-runtime.js";
import { t as a } from "./clsx-BcPLHiun.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import {
  G as o,
  S as s,
  U as c,
  V as l,
  X as u,
  Z as d,
  _ as f,
  p as ee,
  wt as p,
} from "./setting-storage.js";
import { t as m } from "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import { t as h } from "./use-auth.js";
import { p as g } from "./codex-api-bK--r_2t.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import "./use-debounced-value-BtOJx-Vp.js";
import "./window-zoom-context.js";
import { t as _ } from "./tooltip-CDzchJxN.js";
import { t as te } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import { t as ne } from "./proxy.js";
import { t as re } from "./use-reduced-motion.js";
import "./x-C_RDKBp5.js";
import "./with-window.js";
import {
  a as ie,
  d as ae,
  i as oe,
  l as se,
  n as ce,
  r as v,
  u as le,
} from "./dialog-layout.js";
import { t as y } from "./codex-api-error-CsUcWied.js";
import { t as ue } from "./pencil.js";
import {
  _ as b,
  a as de,
  c as x,
  d as S,
  f as C,
  g as w,
  h as fe,
  i as pe,
  l as me,
  m as T,
  n as E,
  o as D,
  p as O,
  r as k,
  s as A,
  t as j,
  u as M,
  v as N,
  y as P,
} from "./profile-queries.js";
import { t as F } from "./settings-content-layout.js";
import { i as I, o as he, r as L, t as R } from "./codex-avatar.js";
import { t as ge } from "./lock.js";
import { t as z } from "./question-mark-circle-DK-zln_X.js";
var B = p(),
  V = e(r()),
  H = i(),
  _e = (e) =>
    (0, H.jsx)(`svg`, {
      width: 16,
      height: 16,
      viewBox: `0 0 16 16`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, H.jsx)(`path`, {
        d: `M11.6002 7.46777L11.7072 7.47871C11.9497 7.52826 12.1322 7.74266 12.1322 7.9998C12.1322 8.25695 11.9497 8.47135 11.7072 8.5209L11.6002 8.53184H4.4002C4.10638 8.53184 3.86816 8.29362 3.86816 7.9998C3.86816 7.70599 4.10638 7.46777 4.4002 7.46777H11.6002Z`,
        fill: `currentColor`,
      }),
    }),
  ve = (e) =>
    (0, H.jsx)(`svg`, {
      width: 16,
      height: 16,
      viewBox: `0 0 16 16`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, H.jsx)(`path`, {
        d: `M7.46816 11.6002V8.53223H4.4002C4.10638 8.53223 3.86816 8.29401 3.86816 8.0002C3.86816 7.70638 4.10638 7.46816 4.4002 7.46816H7.46816V4.4002C7.46816 4.10638 7.70638 3.86816 8.0002 3.86816C8.29401 3.86816 8.53223 4.10638 8.53223 4.4002V7.46816H11.6002L11.7072 7.4791C11.9497 7.52865 12.1322 7.74305 12.1322 8.0002C12.1322 8.25734 11.9497 8.47174 11.7072 8.52129L11.6002 8.53223H8.53223V11.6002C8.53223 11.894 8.29401 12.1322 8.0002 12.1322C7.70638 12.1322 7.46816 11.894 7.46816 11.6002Z`,
        fill: `currentColor`,
      }),
    }),
  U = 220,
  ye = 360,
  W = 512,
  be = (ye - U) / 2,
  G = U / 2,
  K = ye / 2,
  q = K - 32,
  xe = 2,
  Se = `radial-gradient(circle at center, transparent 0 ${G - 0.5}px, black ${G}px ${q}px, transparent ${K}px)`;
function Ce(e) {
  let t = (0, B.c)(96),
    { source: n, onCancel: r, onSave: i } = e,
    a = o(),
    [s, l] = (0, V.useState)(null),
    [u, d] = (0, V.useState)(null),
    [f, ee] = (0, V.useState)(!1),
    p;
  t[0] === s
    ? (p = t[1])
    : ((p = s == null ? 1 : Te(s.naturalWidth, s.naturalHeight)),
      (t[0] = s),
      (t[1] = p));
  let m = p,
    h = s == null ? 1 : s.zoom / m,
    g;
  t[2] !== s || t[3] !== m
    ? ((g = (e) => {
        s != null && l(Ee(s, m * e));
      }),
      (t[2] = s),
      (t[3] = m),
      (t[4] = g))
    : (g = t[4]);
  let _ = g,
    ne;
  t[5] !== s || t[6] !== f || t[7] !== i || t[8] !== n
    ? ((ne = async () => {
        if (!(s == null || f)) {
          ee(!0);
          try {
            let e = await De(n, s);
            (ee(!1), i(e));
          } catch {
            ee(!1);
          }
        }
      }),
      (t[5] = s),
      (t[6] = f),
      (t[7] = i),
      (t[8] = n),
      (t[9] = ne))
    : (ne = t[9]);
  let re = ne,
    y;
  t[10] !== f || t[11] !== r
    ? ((y = (e) => {
        !e && !f && r();
      }),
      (t[10] = f),
      (t[11] = r),
      (t[12] = y))
    : (y = t[12]);
  let ue = !f,
    b;
  t[13] === re
    ? (b = t[14])
    : ((b = (e) => {
        (e.preventDefault(), re());
      }),
      (t[13] = re),
      (t[14] = b));
  let de;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, H.jsx)(ae, {
        className: `sr-only`,
        children: (0, H.jsx)(c, { ...ke.title }),
      })),
      (t[15] = de))
    : (de = t[15]);
  let x;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, H.jsx)(le, {
        className: `sr-only`,
        children: (0, H.jsx)(c, {
          id: `profile.photoCrop.description`,
          defaultMessage: `Drag the image to reposition it, and adjust zoom with the slider`,
          description: `Description for the profile picture crop dialog`,
        }),
      })),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, H.jsx)(oe, { title: (0, H.jsx)(c, { ...ke.title }) })),
      (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { maxWidth: ye }), (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] !== s || t[20] !== n.dataUrl
    ? ((w =
        s == null
          ? null
          : (0, H.jsx)(`div`, {
              "aria-hidden": !0,
              className: `pointer-events-none absolute inset-0 z-0 overflow-hidden`,
              style: { WebkitMaskImage: Se, maskImage: Se },
              children: (0, H.jsxs)(`div`, {
                className: `absolute top-0 left-0 overflow-hidden`,
                style: {
                  height: s.naturalHeight * s.zoom,
                  transform: `translate(${be + s.offsetX}px, ${be + s.offsetY}px)`,
                  width: s.naturalWidth * s.zoom,
                },
                children: [
                  (0, H.jsx)(`img`, {
                    src: n.dataUrl,
                    alt: ``,
                    className: `block max-w-none select-none`,
                    draggable: !1,
                    style: {
                      filter: `blur(${xe}px)`,
                      height: `calc(100% + ${xe * 2}px)`,
                      transform: `translate(${-xe}px, ${-xe}px)`,
                      width: `calc(100% + ${xe * 2}px)`,
                    },
                  }),
                  (0, H.jsx)(`div`, {
                    className: `absolute inset-0 bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_80%,transparent)]`,
                  }),
                ],
              }),
            })),
      (t[19] = s),
      (t[20] = n.dataUrl),
      (t[21] = w))
    : (w = t[21]);
  let fe;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = { height: U, width: U }), (t[22] = fe))
    : (fe = t[22]);
  let pe;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (e) => {
        l(we(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight));
      }),
      (t[23] = pe))
    : (pe = t[23]);
  let me;
  t[24] === s
    ? (me = t[25])
    : ((me = (e) => {
        s != null &&
          (e.currentTarget.setPointerCapture(e.pointerId),
          d({
            offsetX: s.offsetX,
            offsetY: s.offsetY,
            pointerId: e.pointerId,
            pointerX: e.clientX,
            pointerY: e.clientY,
          }));
      }),
      (t[24] = s),
      (t[25] = me));
  let T;
  t[26] === u
    ? (T = t[27])
    : ((T = (e) => {
        u != null &&
          e.pointerId === u.pointerId &&
          l((t) =>
            t == null
              ? t
              : {
                  ...t,
                  offsetX: Y(
                    u.offsetX + e.clientX - u.pointerX,
                    t.naturalWidth,
                    t.zoom,
                  ),
                  offsetY: Y(
                    u.offsetY + e.clientY - u.pointerY,
                    t.naturalHeight,
                    t.zoom,
                  ),
                },
          );
      }),
      (t[26] = u),
      (t[27] = T));
  let E, D;
  t[28] === u?.pointerId
    ? ((E = t[29]), (D = t[30]))
    : ((E = (e) => {
        e.pointerId === u?.pointerId && d(null);
      }),
      (D = (e) => {
        e.pointerId === u?.pointerId && d(null);
      }),
      (t[28] = u?.pointerId),
      (t[29] = E),
      (t[30] = D));
  let O;
  t[31] === s
    ? (O = t[32])
    : ((O =
        s == null
          ? void 0
          : {
              height: s.naturalHeight * s.zoom,
              transform: `translate(${s.offsetX}px, ${s.offsetY}px)`,
              width: s.naturalWidth * s.zoom,
            }),
      (t[31] = s),
      (t[32] = O));
  let k;
  t[33] !== n.dataUrl ||
  t[34] !== me ||
  t[35] !== T ||
  t[36] !== E ||
  t[37] !== D ||
  t[38] !== O
    ? ((k = (0, H.jsx)(`div`, {
        className: `relative z-10 overflow-hidden rounded-full bg-token-bg-secondary ring-1 ring-token-border-light`,
        style: fe,
        children: (0, H.jsx)(`img`, {
          src: n.dataUrl,
          alt: ``,
          className: `absolute top-0 left-0 max-h-none max-w-none cursor-interaction touch-none select-none`,
          draggable: !1,
          onLoad: pe,
          onPointerDown: me,
          onPointerMove: T,
          onPointerUp: E,
          onPointerCancel: D,
          style: O,
        }),
      })),
      (t[33] = n.dataUrl),
      (t[34] = me),
      (t[35] = T),
      (t[36] = E),
      (t[37] = D),
      (t[38] = O),
      (t[39] = k))
    : (k = t[39]);
  let A;
  t[40] !== w || t[41] !== k
    ? ((A = (0, H.jsx)(ie, {
        className: `items-center`,
        children: (0, H.jsxs)(`div`, {
          className: `relative isolate flex aspect-square w-full items-center justify-center`,
          style: C,
          children: [w, k],
        }),
      })),
      (t[40] = w),
      (t[41] = k),
      (t[42] = A))
    : (A = t[42]);
  let j;
  t[43] === a
    ? (j = t[44])
    : ((j = a.formatMessage({
        id: `profile.photoCrop.zoomOut`,
        defaultMessage: `Zoom out`,
        description: `Accessible label for the profile picture zoom out button`,
      })),
      (t[43] = a),
      (t[44] = j));
  let M = s == null || f || h <= 1,
    N;
  t[45] !== _ || t[46] !== h
    ? ((N = () => {
        _(Math.max(1, h - 0.1));
      }),
      (t[45] = _),
      (t[46] = h),
      (t[47] = N))
    : (N = t[47]);
  let P;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, H.jsx)(_e, { className: `icon-sm` })), (t[48] = P))
    : (P = t[48]);
  let F;
  t[49] !== j || t[50] !== M || t[51] !== N
    ? ((F = (0, H.jsx)(te, {
        "aria-label": j,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: M,
        size: `iconSm`,
        onClick: N,
        children: P,
      })),
      (t[49] = j),
      (t[50] = M),
      (t[51] = N),
      (t[52] = F))
    : (F = t[52]);
  let I;
  t[53] === a
    ? (I = t[54])
    : ((I = a.formatMessage({
        id: `profile.photoCrop.zoomLabel`,
        defaultMessage: `Zoom profile picture`,
        description: `Accessible label for the profile picture crop zoom slider`,
      })),
      (t[53] = a),
      (t[54] = I));
  let he = s == null || f,
    L;
  t[55] === _
    ? (L = t[56])
    : ((L = (e) => {
        _(Number(e.target.value));
      }),
      (t[55] = _),
      (t[56] = L));
  let R;
  t[57] !== I || t[58] !== he || t[59] !== L || t[60] !== h
    ? ((R = (0, H.jsx)(`input`, {
        type: `range`,
        "aria-label": I,
        className: `h-0.5 flex-1 appearance-none rounded-full bg-token-border-light [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-token-border-heavy [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm-stronger [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:mt-[-9px] [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-token-border-heavy [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm-stronger`,
        disabled: he,
        min: 1,
        max: 3,
        step: 0.01,
        value: h,
        onChange: L,
      })),
      (t[57] = I),
      (t[58] = he),
      (t[59] = L),
      (t[60] = h),
      (t[61] = R))
    : (R = t[61]);
  let ge;
  t[62] === a
    ? (ge = t[63])
    : ((ge = a.formatMessage({
        id: `profile.photoCrop.zoomIn`,
        defaultMessage: `Zoom in`,
        description: `Accessible label for the profile picture zoom in button`,
      })),
      (t[62] = a),
      (t[63] = ge));
  let z = s == null || f || h >= 3,
    W;
  t[64] !== _ || t[65] !== h
    ? ((W = () => {
        _(Math.min(3, h + 0.1));
      }),
      (t[64] = _),
      (t[65] = h),
      (t[66] = W))
    : (W = t[66]);
  let G;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, H.jsx)(ve, { className: `icon-sm` })), (t[67] = G))
    : (G = t[67]);
  let K;
  t[68] !== ge || t[69] !== z || t[70] !== W
    ? ((K = (0, H.jsx)(te, {
        "aria-label": ge,
        className: `!size-5 !p-0`,
        color: `ghost`,
        disabled: z,
        size: `iconSm`,
        onClick: W,
        children: G,
      })),
      (t[68] = ge),
      (t[69] = z),
      (t[70] = W),
      (t[71] = K))
    : (K = t[71]);
  let q;
  t[72] !== F || t[73] !== R || t[74] !== K
    ? ((q = (0, H.jsx)(ie, {
        className: `relative z-10 items-center`,
        children: (0, H.jsxs)(`div`, {
          className: `flex w-full max-w-[276px] items-center gap-5`,
          children: [F, R, K],
        }),
      })),
      (t[72] = F),
      (t[73] = R),
      (t[74] = K),
      (t[75] = q))
    : (q = t[75]);
  let Ce;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, H.jsx)(c, {
        id: `profile.photoCrop.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that cancels profile picture cropping`,
      })),
      (t[76] = Ce))
    : (Ce = t[76]);
  let J;
  t[77] !== f || t[78] !== r
    ? ((J = (0, H.jsx)(te, {
        color: `ghost`,
        disabled: f,
        onClick: r,
        children: Ce,
      })),
      (t[77] = f),
      (t[78] = r),
      (t[79] = J))
    : (J = t[79]);
  let X = s == null,
    Oe;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, H.jsx)(c, {
        id: `profile.photoCrop.save`,
        defaultMessage: `Save`,
        description: `Button that saves a cropped profile picture`,
      })),
      (t[80] = Oe))
    : (Oe = t[80]);
  let Z;
  t[81] !== f || t[82] !== X
    ? ((Z = (0, H.jsx)(te, {
        type: `submit`,
        color: `primary`,
        disabled: X,
        loading: f,
        children: Oe,
      })),
      (t[81] = f),
      (t[82] = X),
      (t[83] = Z))
    : (Z = t[83]);
  let Q;
  t[84] !== J || t[85] !== Z
    ? ((Q = (0, H.jsxs)(v, { children: [J, Z] })),
      (t[84] = J),
      (t[85] = Z),
      (t[86] = Q))
    : (Q = t[86]);
  let $;
  t[87] !== A || t[88] !== q || t[89] !== Q || t[90] !== b
    ? (($ = (0, H.jsxs)(ce, {
        as: `form`,
        className: `gap-5`,
        onSubmit: b,
        children: [de, x, S, A, q, Q],
      })),
      (t[87] = A),
      (t[88] = q),
      (t[89] = Q),
      (t[90] = b),
      (t[91] = $))
    : ($ = t[91]);
  let Ae;
  return (
    t[92] !== y || t[93] !== $ || t[94] !== ue
      ? ((Ae = (0, H.jsx)(se, {
          open: !0,
          onOpenChange: y,
          showDialogClose: ue,
          size: `default`,
          children: $,
        })),
        (t[92] = y),
        (t[93] = $),
        (t[94] = ue),
        (t[95] = Ae))
      : (Ae = t[95]),
    Ae
  );
}
function we(e, t) {
  let n = Te(e, t);
  return {
    naturalHeight: t,
    naturalWidth: e,
    offsetX: J(e, n),
    offsetY: J(t, n),
    zoom: n,
  };
}
function Te(e, t) {
  return Math.max(U / e, U / t);
}
function J(e, t) {
  return (U - e * t) / 2;
}
function Y(e, t, n) {
  return Math.min(0, Math.max(U - t * n, e));
}
function Ee(e, t) {
  let n = (U / 2 - e.offsetX) / e.zoom,
    r = (U / 2 - e.offsetY) / e.zoom;
  return {
    ...e,
    offsetX: Y(U / 2 - n * t, e.naturalWidth, t),
    offsetY: Y(U / 2 - r * t, e.naturalHeight, t),
    zoom: t,
  };
}
async function De(e, t) {
  let n = await X(e.dataUrl),
    r = document.createElement(`canvas`);
  ((r.height = W), (r.width = W));
  let i = r.getContext(`2d`);
  if (i == null) throw Error(`Unable to create profile photo crop canvas`);
  i.drawImage(
    n,
    -t.offsetX / t.zoom,
    -t.offsetY / t.zoom,
    U / t.zoom,
    U / t.zoom,
    0,
    0,
    W,
    W,
  );
  let a = Z(e.contentType),
    o = r.toDataURL(a, 0.92),
    s = await Oe(r, a);
  return { photo: new File([s], e.filename, { type: s.type }), previewUrl: o };
}
function X(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.onload = () => {
      t(r);
    }),
      (r.onerror = () => {
        n(Error(`Unable to load profile photo`));
      }),
      (r.src = e));
  });
}
function Oe(e, t) {
  return new Promise((n, r) => {
    e.toBlob(
      (e) => {
        if (e == null) {
          r(Error(`Unable to crop profile photo`));
          return;
        }
        n(e);
      },
      t,
      0.92,
    );
  });
}
function Z(e) {
  return e === `image/png` || e === `image/webp` ? e : `image/jpeg`;
}
var ke = l({
    title: {
      id: `profile.photoCrop.title`,
      defaultMessage: `Adjust your image`,
      description: `Title for the profile picture crop dialog`,
    },
  }),
  Q = `_profileLoadingBlock_1lb04_1`,
  $ = `_profilePhotoEditBadge_1lb04_22`,
  Ae = `_profilePhotoInput_1lb04_28`,
  je = {
    profileLoadingBlock: Q,
    "profile-loading-page-sweep": `_profile-loading-page-sweep_1lb04_1`,
    profilePhotoEditBadge: $,
    profilePhotoInput: Ae,
  },
  Me = 12,
  Ne = {
    0: `bg-[var(--profile-usage-level-0)]`,
    1: `bg-[var(--profile-usage-level-1)]`,
    2: `bg-[var(--profile-usage-level-2)]`,
    3: `bg-[var(--profile-usage-level-3)]`,
    4: `bg-[var(--profile-usage-level-4)]`,
  },
  Pe = `bg-[color-mix(in_srgb,var(--color-token-primary)_78%,transparent)]`,
  Fe = `bg-[var(--color-token-primary)] ring-1 ring-[color-mix(in_srgb,var(--color-token-primary)_55%,transparent)]`,
  Ie = `bg-[color-mix(in_srgb,var(--color-token-primary)_14%,var(--profile-usage-level-0))]`,
  Le = t({ type: n(), msg: n() }),
  Re = `·`,
  ze = [
    `totalTextTokens`,
    `peakTokens`,
    `longestTaskDurationMs`,
    `currentStreakDays`,
    `longestStreakDays`,
  ];
function Be({ today: e = new Date() }) {
  let t = u(s),
    n = (0, V.useRef)(!1),
    r = o(),
    i = re(),
    { accountId: l, authMethod: p, planAtLogin: ie, userId: ae } = h(),
    { data: oe } = g(),
    { data: se } = ee(`account-info`, {
      queryConfig: { enabled: p === `chatgpt` && !0, staleTime: f.ONE_MINUTE },
    }),
    { data: ce } = d(L),
    v = O(e),
    le = w(v),
    y = dt(v),
    x = l ?? se?.accountId ?? null,
    S = ae ?? se?.userId ?? null,
    C = E({ accountId: x, enabled: p === `chatgpt`, userId: S }),
    D = k({ accountId: x, userId: S }),
    j = de({ accountId: x, userId: S }),
    R = D.isPending || j.isPending,
    z = pe({ accountId: x, userId: S }),
    { selectedAvatar: B } = I(he(ce?.avatars)),
    [_e, ve] = (0, V.useState)(null),
    [U, ye] = (0, V.useState)(null),
    [W, be] = (0, V.useState)(`daily`),
    [G, K] = (0, V.useState)(null),
    [q, xe] = (0, V.useState)(null),
    [Se, we] = (0, V.useState)(null),
    [Te, J] = (0, V.useState)(!1),
    Y = C.isLoading,
    Ee = C.data == null && C.isError,
    De = B.id.startsWith(`custom:`),
    X = Y ? null : (U ?? C.data?.imageUrl ?? oe?.profile_picture_url ?? null),
    Oe = X != null && X !== _e,
    Z = C.data?.username?.trim() || null,
    ke = Y ? null : (C.data?.displayName ?? Z ?? oe?.name ?? null),
    Q = M({
      accountStructure: oe?.structure,
      plan: oe?.plan_type ?? se?.plan ?? ie,
      workspaceName: oe?.name,
    }),
    $ = C.data?.summary,
    Ae = $?.longestTaskDurationMs,
    je = C.data?.dailyUsage,
    Me =
      Ee || je == null
        ? null
        : {
            cells: fe({ dailyUsage: je, todayIso: v, view: W }),
            dailyValues: N({ dailyUsage: je, todayIso: v }),
            weeklyTotals: P({ dailyUsage: je, todayIso: v }),
            cumulativeTotals: b({ dailyUsage: je, todayIso: v }),
          },
    Le = r.formatMessage({
      id: `profile.tokenUsage.chartLabel`,
      defaultMessage: `Token usage chart`,
      description: `Accessible label for the token usage dot chart`,
    }),
    ze = (e, t) => {
      K((n) => (t ? e : n === e ? null : n));
    };
  return (
    (0, V.useEffect)(() => {
      n.current ||
        ((n.current = !0),
        m(t, {
          eventName: `codex_profile_page_viewed`,
          metadata: { profile_owner: `self` },
        }));
    }, [t]),
    (0, H.jsxs)(F, {
      ref: xe,
      className: `relative`,
      fullWidth: !0,
      backSlot: (0, H.jsxs)(`div`, {
        className: `flex w-full items-center justify-between`,
        children: [
          (0, H.jsx)(`div`, {
            className: `text-base font-normal text-token-text-primary`,
            children: (0, H.jsx)(c, {
              id: `profile.header`,
              defaultMessage: `Profile`,
              description: `Header title for the profile page`,
            }),
          }),
          (0, H.jsxs)(`div`, {
            className: `no-drag -mr-2 flex items-center gap-2`,
            children: [
              (0, H.jsx)(_, {
                delayDuration: 0,
                tooltipContent: (0, H.jsx)(c, {
                  id: `profile.privateTooltip`,
                  defaultMessage: `Your profile is only visible to you`,
                  description: `Tooltip explaining private profile visibility`,
                }),
                children: (0, H.jsxs)(`span`, {
                  tabIndex: 0,
                  className: `focus-visible:ring-token-focus flex h-7 cursor-default items-center gap-1.5 rounded-lg px-2 text-base text-token-text-secondary outline-none focus-visible:ring-1`,
                  children: [
                    (0, H.jsx)(ge, { className: `icon-xs` }),
                    (0, H.jsx)(c, {
                      id: `profile.private`,
                      defaultMessage: `Private`,
                      description: `Private visibility badge label`,
                    }),
                  ],
                }),
              }),
              (0, H.jsxs)(te, {
                "aria-label": r.formatMessage({
                  id: `profile.editProfileLabel`,
                  defaultMessage: `Edit profile`,
                  description: `Accessible label for opening the edit profile dialog`,
                }),
                className: `h-7`,
                color: `ghostActive`,
                disabled: Y,
                size: `toolbar`,
                onClick: () => {
                  (m(t, { eventName: `codex_profile_edit_opened` }), J(!0));
                },
                children: [
                  (0, H.jsx)(ue, { "aria-hidden": !0, className: `icon-xs` }),
                  (0, H.jsx)(c, {
                    id: `profile.editProfile`,
                    defaultMessage: `Edit`,
                    description: `Button label for opening the edit profile dialog`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      contentClassName: `max-w-[732px] pt-12`,
      children: [
        (0, H.jsxs)(`div`, {
          className: `flex flex-col gap-10`,
          children: [
            (0, H.jsx)(`section`, {
              "aria-busy": Y || void 0,
              className: `flex flex-col items-center`,
              children: Y
                ? (0, H.jsx)(Ze, { avatar: B, showsPet: De })
                : (0, H.jsxs)(H.Fragment, {
                    children: [
                      (0, H.jsxs)(`div`, {
                        className: `relative mb-4 size-20`,
                        children: [
                          (0, H.jsxs)(`label`, {
                            "aria-disabled": z.isPending,
                            className: a(
                              `group relative flex size-20 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                              z.isPending
                                ? `cursor-default opacity-70`
                                : `cursor-interaction`,
                            ),
                            children: [
                              Oe
                                ? (0, H.jsx)(`img`, {
                                    src: X,
                                    alt: ``,
                                    className: `size-20 rounded-full object-cover`,
                                    onError: () => {
                                      ve(X);
                                    },
                                  })
                                : (0, H.jsx)(`div`, {
                                    className: `flex size-20 items-center justify-center rounded-full bg-token-text-tertiary text-[28px] font-normal text-token-button-foreground`,
                                    children: me(ke),
                                  }),
                              (0, H.jsx)(`span`, {
                                className: a(
                                  `pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-black/45 text-white opacity-0 dark:bg-black/60 electron-dark:bg-black/60`,
                                  !z.isPending &&
                                    `group-focus-within:opacity-100 group-hover:opacity-100`,
                                ),
                                children: (0, H.jsx)(ue, {
                                  "aria-hidden": !0,
                                  className: `icon-sm`,
                                }),
                              }),
                              (0, H.jsx)(`input`, {
                                type: `file`,
                                accept: `image/*`,
                                "aria-label": r.formatMessage({
                                  id: `profile.photoInputLabel`,
                                  defaultMessage: `Change profile picture`,
                                  description: `Accessible label for the profile photo upload input`,
                                }),
                                className: `sr-only`,
                                disabled: z.isPending,
                                onClick: () => {
                                  m(t, {
                                    eventName: `codex_profile_inline_photo_change_started`,
                                  });
                                },
                                onChange: (e) => {
                                  let n = e.currentTarget.files?.[0];
                                  ((e.currentTarget.value = ``),
                                    n != null &&
                                      (m(t, {
                                        eventName: `codex_profile_inline_photo_change_image_selected`,
                                      }),
                                      Xe(n).then(we, () => {
                                        (m(t, {
                                          eventName: `codex_profile_inline_photo_change_failed`,
                                        }),
                                          we(null));
                                      })));
                                },
                              }),
                            ],
                          }),
                          De
                            ? (0, H.jsx)(`div`, {
                                className: `absolute -right-8 -bottom-2 flex size-14 items-center justify-center`,
                                children: (0, H.jsx)(_t, { avatar: B }),
                              })
                            : null,
                        ],
                      }),
                      (0, H.jsx)(`div`, {
                        className: `flex w-full justify-center`,
                        children: (0, H.jsx)(`h1`, {
                          className: `flex h-10 w-full items-center justify-center text-center text-[24px] leading-8 font-normal tracking-[0.072px] text-token-text-primary`,
                          children: (0, H.jsx)(`span`, {
                            className: `block max-w-full min-w-0 truncate px-2`,
                            children:
                              ke ??
                              (0, H.jsx)(c, {
                                id: `profile.nameFallback`,
                                defaultMessage: `Codex user`,
                                description: `Fallback profile display name`,
                              }),
                          }),
                        }),
                      }),
                      Z != null || Q != null
                        ? (0, H.jsx)(`div`, {
                            className: `mt-1 flex min-h-7 items-center gap-1.5 text-sm leading-5 text-token-text-tertiary`,
                            children:
                              Z == null
                                ? Q == null
                                  ? null
                                  : (0, H.jsx)(Ue, { accountLabel: Q })
                                : (0, H.jsxs)(H.Fragment, {
                                    children: [
                                      (0, H.jsx)(`span`, {
                                        className: `max-w-[240px] min-w-0 truncate`,
                                        children: (0, H.jsx)(c, {
                                          id: `profile.usernameValue`,
                                          defaultMessage: `@{username}`,
                                          description: `Profile username shown with an at-sign prefix`,
                                          values: { username: Z },
                                        }),
                                      }),
                                      Q == null
                                        ? null
                                        : (0, H.jsxs)(H.Fragment, {
                                            children: [
                                              (0, H.jsx)(`span`, {
                                                "aria-hidden": !0,
                                                className: `text-token-text-tertiary/50`,
                                                children: Re,
                                              }),
                                              (0, H.jsx)(Ue, {
                                                accountLabel: Q,
                                              }),
                                            ],
                                          }),
                                    ],
                                  }),
                          })
                        : null,
                    ],
                  }),
            }),
            (0, H.jsx)(`section`, {
              className: `flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-token-border-light bg-transparent`,
              children: (0, H.jsx)(`div`, {
                className: `flex w-full items-center`,
                children: Y
                  ? (0, H.jsx)($e, {})
                  : Ee
                    ? (0, H.jsx)(tt, {})
                    : (0, H.jsxs)(H.Fragment, {
                        children: [
                          (0, H.jsx)(ot, {
                            value: ct(r, $?.totalTextTokens),
                            label: (0, H.jsx)(c, {
                              id: `profile.stats.lifetimeTokens`,
                              defaultMessage: `Lifetime tokens`,
                              description: `Label for lifetime token usage on the profile page`,
                            }),
                          }),
                          (0, H.jsx)(st, {}),
                          (0, H.jsx)(ot, {
                            value: ct(r, $?.peakTokens),
                            label: (0, H.jsx)(c, {
                              id: `profile.stats.peakTokens`,
                              defaultMessage: `Peak tokens`,
                              description: `Label for peak token usage on the profile page`,
                            }),
                          }),
                          (0, H.jsx)(st, {}),
                          Ae == null
                            ? null
                            : (0, H.jsxs)(H.Fragment, {
                                children: [
                                  (0, H.jsx)(ot, {
                                    value: A(r, Ae),
                                    label: (0, H.jsx)(c, {
                                      id: `profile.stats.longestTask`,
                                      defaultMessage: `Longest task`,
                                      description: `Label for longest task duration on the profile page`,
                                    }),
                                  }),
                                  (0, H.jsx)(st, {}),
                                ],
                              }),
                          (0, H.jsx)(ot, {
                            value: lt(r, $?.currentStreakDays),
                            label: (0, H.jsx)(c, {
                              id: `profile.stats.currentStreak`,
                              defaultMessage: `Current streak`,
                              description: `Label for current usage streak on the profile page`,
                            }),
                          }),
                          (0, H.jsx)(st, {}),
                          (0, H.jsx)(ot, {
                            value: lt(r, $?.longestStreakDays),
                            label: (0, H.jsx)(c, {
                              id: `profile.stats.longestStreak`,
                              defaultMessage: `Longest streak`,
                              description: `Label for longest usage streak on the profile page`,
                            }),
                          }),
                        ],
                      }),
              }),
            }),
            (0, H.jsxs)(`section`, {
              className: `flex flex-col gap-3`,
              children: [
                (0, H.jsxs)(`div`, {
                  className: `flex items-center justify-between text-sm leading-5`,
                  children: [
                    (0, H.jsx)(`h2`, {
                      className: `font-medium text-token-text-primary`,
                      children: (0, H.jsx)(c, {
                        id: `profile.tokenUsage.title`,
                        defaultMessage: `Token activity`,
                        description: `Heading above the token usage chart`,
                      }),
                    }),
                    (0, H.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, H.jsx)(gt, {
                          active: W === `daily`,
                          disabled: Y,
                          onSelect: () => {
                            be(`daily`);
                          },
                          children: (0, H.jsx)(c, {
                            id: `profile.tokenUsage.daily`,
                            defaultMessage: `Daily`,
                            description: `Daily token usage chart tab`,
                          }),
                        }),
                        (0, H.jsx)(gt, {
                          active: W === `weekly`,
                          disabled: Y,
                          onSelect: () => {
                            be(`weekly`);
                          },
                          children: (0, H.jsx)(c, {
                            id: `profile.tokenUsage.weekly`,
                            defaultMessage: `Weekly`,
                            description: `Weekly token usage chart tab`,
                          }),
                        }),
                        (0, H.jsx)(gt, {
                          active: W === `cumulative`,
                          disabled: Y,
                          onSelect: () => {
                            be(`cumulative`);
                          },
                          children: (0, H.jsx)(c, {
                            id: `profile.tokenUsage.cumulative`,
                            defaultMessage: `Cumulative`,
                            description: `Cumulative token usage chart tab`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Y
                  ? (0, H.jsx)(nt, {
                      columnCount: le,
                      monthLabelCount: y.length,
                    })
                  : Me == null
                    ? (0, H.jsx)(at, {})
                    : (0, H.jsxs)(`div`, {
                        className: `flex flex-col gap-2 [--profile-usage-level-0:var(--color-token-border-light)] [--profile-usage-level-1:color-mix(in_srgb,var(--color-token-primary)_22%,transparent)] [--profile-usage-level-2:color-mix(in_srgb,var(--color-token-primary)_42%,transparent)] [--profile-usage-level-3:color-mix(in_srgb,var(--color-token-primary)_68%,transparent)] [--profile-usage-level-4:var(--color-token-primary)]`,
                        role: `img`,
                        "aria-label": Le,
                        children: [
                          (0, H.jsxs)(`div`, {
                            className: `relative`,
                            children: [
                              (0, H.jsx)(`div`, {
                                className: `grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px] overflow-hidden`,
                                style: {
                                  gridTemplateColumns: `repeat(${le}, minmax(1px, 1fr))`,
                                },
                                children: Me.cells.map((e, t) => {
                                  let n = T(t, v);
                                  if (W === `daily` && n > v) return null;
                                  let r = Math.floor(t / 7),
                                    o = W !== `daily`,
                                    s = o && G === `${W}:${r}`,
                                    c = Ne[e];
                                  o && e > 0
                                    ? (c = s ? Fe : Pe)
                                    : s && (c = Ie);
                                  let l = (0, H.jsx)(
                                    `div`,
                                    {
                                      className: `aspect-square w-full`,
                                      children: (0, H.jsx)(ne.div, {
                                        animate: { opacity: 1, scale: 1 },
                                        className: a(
                                          `size-full rounded-[4px] transition-colors duration-500 ease-out [corner-shape:superellipse(1.5)]`,
                                          c,
                                        ),
                                        initial: i
                                          ? !1
                                          : { opacity: 0, scale: 0.7 },
                                        transition: i
                                          ? { duration: 0 }
                                          : {
                                              delay: ut(t),
                                              duration: 0.52,
                                              ease: [0.22, 1, 0.36, 1],
                                            },
                                      }),
                                    },
                                    `${W}-${t}`,
                                  );
                                  if (W !== `daily`) return l;
                                  let u = `daily:${t}`;
                                  return (0, H.jsx)(
                                    _,
                                    {
                                      delayDuration: 0,
                                      open: G === u,
                                      onOpenChange: (e) => {
                                        ze(u, e);
                                      },
                                      portalContainer: q,
                                      tooltipContent: (0, H.jsx)(pt, {
                                        dateIso: n,
                                        tokenCount: Me.dailyValues[t] ?? 0,
                                        todayIso: v,
                                      }),
                                      children: l,
                                    },
                                    `${W}-${t}`,
                                  );
                                }),
                              }),
                              W === `weekly` || W === `cumulative`
                                ? (0, H.jsx)(`div`, {
                                    className: `pointer-events-none absolute inset-0 flex`,
                                    children: (W === `weekly`
                                      ? Me.weeklyTotals
                                      : Me.cumulativeTotals
                                    ).map((e, t) => {
                                      let n = T(t * 7, v),
                                        r = `${W}:${t}`;
                                      return (0, H.jsx)(
                                        _,
                                        {
                                          delayDuration: 0,
                                          open: G === r,
                                          onOpenChange: (e) => {
                                            ze(r, e);
                                          },
                                          portalContainer: q,
                                          tooltipContent: (0, H.jsx)(mt, {
                                            chartView: W,
                                            tokenCount: e,
                                            weekStartIso: n,
                                          }),
                                          children: (0, H.jsx)(`div`, {
                                            "aria-hidden": !0,
                                            className: `pointer-events-auto h-full min-w-px flex-1`,
                                          }),
                                        },
                                        r,
                                      );
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          (0, H.jsx)(`div`, {
                            className: `flex items-center justify-between text-xs leading-4 text-token-text-tertiary`,
                            children: y.map((e) =>
                              (0, H.jsx)(
                                `span`,
                                {
                                  children: r.formatDate(new Date(e), {
                                    month: `short`,
                                    timeZone: `UTC`,
                                  }),
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
              ],
            }),
          ],
        }),
        Se == null
          ? null
          : (0, H.jsx)(Ce, {
              source: Se,
              onCancel: () => {
                we(null);
              },
              onSave: (e) => {
                (we(null),
                  ye(e.previewUrl),
                  z.mutate(e.photo, {
                    onError: () => {
                      (m(t, {
                        eventName: `codex_profile_inline_photo_change_failed`,
                      }),
                        ye(null));
                    },
                    onSuccess: () => {
                      (m(t, {
                        eventName: `codex_profile_inline_photo_change_succeeded`,
                      }),
                        ve(null),
                        ye(null));
                    },
                  }));
              },
            }),
        Te
          ? (0, H.jsx)(Ve, {
              displayName: ke,
              failedProfileImageUrl: _e,
              isPhotoSaving: z.isPending,
              isTextSaving: R,
              profileImageUrl: X,
              username: Z,
              onCancel: () => {
                J(!1);
              },
              onProfileImageError: ve,
              onSaveError: (e) => {
                m(t, {
                  eventName: `codex_profile_edit_save_failed`,
                  metadata: e,
                });
              },
              onPhotoChangeImageSelected: () => {
                m(t, {
                  eventName: `codex_profile_edit_modal_photo_change_image_selected`,
                });
              },
              onPhotoChangeStarted: () => {
                m(t, {
                  eventName: `codex_profile_edit_modal_photo_change_started`,
                });
              },
              onSaveProfile: async (e) => {
                (await D.mutateAsync(e), ve(null));
              },
              onSaveSuccess: () => {
                m(t, { eventName: `codex_profile_edit_save_succeeded` });
              },
              onSaveUsername: (e) => j.mutateAsync(e),
            })
          : null,
      ],
    })
  );
}
function Ve({
  displayName: e,
  failedProfileImageUrl: t,
  isPhotoSaving: n,
  isTextSaving: r,
  onCancel: i,
  onPhotoChangeImageSelected: s,
  onPhotoChangeStarted: l,
  onProfileImageError: u,
  onSaveError: d,
  onSaveProfile: f,
  onSaveSuccess: ee,
  onSaveUsername: p,
  profileImageUrl: m,
  username: h,
}) {
  let g = o(),
    _ = (0, V.useId)(),
    ne = (0, V.useId)(),
    re = (0, V.useId)(),
    y = (0, V.useId)(),
    [b, de] = (0, V.useState)(e ?? ``),
    [w, fe] = (0, V.useState)(h ?? ``),
    [pe, T] = (0, V.useState)(null),
    [E, D] = (0, V.useState)(null),
    [O, k] = (0, V.useState)(null),
    [A, M] = (0, V.useState)(null),
    [N, P] = (0, V.useState)(null),
    [F, I] = (0, V.useState)(null),
    [he, L] = (0, V.useState)(!1),
    R = he || r || n,
    ge = C(w),
    z = R || b.trim().length === 0 || !ge.ok,
    B = pe?.previewUrl ?? m,
    _e = B != null && B !== t,
    ve = h?.trim() ?? ``,
    U = async () => {
      if (z) return;
      (k(null), M(null), P(null), I(null));
      let t = b.trim(),
        n = x(w),
        r = e?.trim() ?? ``;
      (de(t), fe(n));
      let a = t.length > 0 && t !== r,
        o = n !== ve,
        s = pe != null,
        c = {},
        l = 0,
        u = null;
      if ((a && ((c.displayName = t), (l += 1)), o)) {
        let e = C(n);
        if (!e.ok) {
          M(Ye(e.reason, g));
          return;
        }
        u = e.username;
      }
      if ((s && ((c.photo = pe.photo), (l += 1)), u == null && l === 0)) {
        i();
        return;
      }
      L(!0);
      let m = `not_attempted`,
        h = `not_attempted`;
      try {
        (u != null && ((m = `failed`), await p(u), (m = `succeeded`)),
          l > 0 && ((h = `failed`), await f(c), (h = `succeeded`)),
          ee(),
          i());
      } catch (e) {
        if (
          (d({
            profile_details_update_api_status: h,
            username_update_api_status: m,
          }),
          m === `failed`)
        ) {
          M(Ge(e, g));
          return;
        }
        if (e instanceof j) {
          P(Ke(e.uploadError, g));
          return;
        }
        if (l > 1) {
          I(qe(e, g));
          return;
        }
        if (a) {
          k(We(e, g));
          return;
        }
        P(Ke(e, g));
      } finally {
        L(!1);
      }
    };
  return (0, H.jsxs)(H.Fragment, {
    children: [
      (0, H.jsx)(se, {
        open: !0,
        onOpenChange: (e) => {
          !e && !R && i();
        },
        contentProps: {
          onOpenAutoFocus: (e) => {
            (e.preventDefault(),
              e.currentTarget instanceof HTMLElement &&
                e.currentTarget.focus());
          },
          tabIndex: -1,
        },
        showDialogClose: !1,
        size: `default`,
        children: (0, H.jsxs)(ce, {
          as: `form`,
          className: `gap-0`,
          onSubmit: (e) => {
            (e.preventDefault(), U());
          },
          children: [
            (0, H.jsx)(ie, {
              children: (0, H.jsx)(oe, {
                title: (0, H.jsx)(ae, {
                  className: `contents`,
                  children: (0, H.jsx)(c, {
                    id: `profile.editProfileTitle`,
                    defaultMessage: `Edit profile`,
                    description: `Title for the edit profile dialog`,
                  }),
                }),
                subtitle: (0, H.jsx)(le, {
                  className: `sr-only`,
                  children: (0, H.jsx)(c, {
                    id: `profile.editProfileDescription`,
                    defaultMessage: `Update your profile picture, display name, and username`,
                    description: `Accessible description for the edit profile dialog`,
                  }),
                }),
              }),
            }),
            (0, H.jsx)(ie, {
              className: `items-center pt-6`,
              children: (0, H.jsxs)(`label`, {
                "aria-disabled": R,
                className: a(
                  `relative flex size-32 rounded-full outline-none focus-within:ring-1 focus-within:ring-token-focus-border`,
                  je.profilePhotoInput,
                  R ? `cursor-default opacity-70` : `cursor-interaction`,
                ),
                children: [
                  _e
                    ? (0, H.jsx)(`img`, {
                        src: B,
                        alt: ``,
                        className: `size-32 rounded-full object-cover`,
                        onError: () => {
                          u(B);
                        },
                      })
                    : (0, H.jsx)(`div`, {
                        className: `flex size-32 items-center justify-center rounded-full bg-token-text-tertiary text-[40px] font-normal text-token-button-foreground`,
                        children: me(b),
                      }),
                  (0, H.jsx)(`span`, {
                    className: a(
                      `absolute right-1 bottom-1 flex size-9 items-center justify-center rounded-full text-white`,
                      je.profilePhotoEditBadge,
                    ),
                    children: (0, H.jsx)(ue, {
                      "aria-hidden": !0,
                      className: `icon-sm`,
                    }),
                  }),
                  (0, H.jsx)(`input`, {
                    type: `file`,
                    accept: `image/*`,
                    "aria-label": g.formatMessage({
                      id: `profile.photoInputLabel`,
                      defaultMessage: `Change profile picture`,
                      description: `Accessible label for the profile photo upload input`,
                    }),
                    className: `sr-only`,
                    disabled: R,
                    onClick: l,
                    onChange: (e) => {
                      let t = e.currentTarget.files?.[0];
                      ((e.currentTarget.value = ``),
                        t != null &&
                          (s(),
                          Xe(t).then(D, () => {
                            D(null);
                          })));
                    },
                  }),
                ],
              }),
            }),
            (0, H.jsx)(ie, {
              className: `pt-8`,
              children: (0, H.jsxs)(`div`, {
                className: `divide-y-[0.5px] divide-token-border overflow-hidden rounded-lg border border-token-border`,
                children: [
                  (0, H.jsxs)(`div`, {
                    className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
                    children: [
                      (0, H.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, H.jsx)(`label`, {
                            htmlFor: ne,
                            className: `text-sm leading-5 text-token-text-primary`,
                            children: (0, H.jsx)(c, {
                              id: `profile.nameInputLabel`,
                              defaultMessage: `Display name`,
                              description: `Accessible label for the editable profile display name`,
                            }),
                          }),
                          O == null
                            ? null
                            : (0, H.jsx)(`div`, {
                                id: _,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: O,
                              }),
                        ],
                      }),
                      (0, H.jsx)(`div`, {
                        className: `flex h-10 min-w-0 items-center rounded-lg border border-token-input-border bg-token-input-background px-3 focus-within:border-token-focus-border`,
                        children: (0, H.jsx)(`input`, {
                          id: ne,
                          "aria-describedby": O == null ? void 0 : _,
                          "aria-invalid": O != null,
                          className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                          disabled: R,
                          maxLength: 64,
                          onChange: (e) => {
                            (de(e.target.value), k(null), I(null));
                          },
                          onFocus: (e) => {
                            e.currentTarget.select();
                          },
                          spellCheck: !1,
                          value: b,
                        }),
                      }),
                    ],
                  }),
                  (0, H.jsxs)(`div`, {
                    className: `grid min-h-[72px] grid-cols-[minmax(0,1fr)_minmax(0,220px)] items-center gap-4 px-4 py-3`,
                    children: [
                      (0, H.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, H.jsxs)(`div`, {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, H.jsx)(`label`, {
                                htmlFor: y,
                                className: `text-sm leading-5 text-token-text-primary`,
                                children: (0, H.jsx)(c, {
                                  id: `profile.usernameInputLabel`,
                                  defaultMessage: `Username`,
                                  description: `Accessible label for the editable profile username`,
                                }),
                              }),
                              A == null ? null : (0, H.jsx)(He, {}),
                            ],
                          }),
                          A == null
                            ? null
                            : (0, H.jsx)(`div`, {
                                id: re,
                                className: `text-sm leading-5 text-token-error-foreground`,
                                role: `alert`,
                                children: A,
                              }),
                        ],
                      }),
                      (0, H.jsxs)(`div`, {
                        className: `flex h-10 min-w-0 items-center gap-0.5 rounded-lg border border-token-input-border bg-token-input-background px-3 text-base leading-6 focus-within:border-token-focus-border`,
                        children: [
                          (0, H.jsx)(`span`, {
                            "aria-hidden": !0,
                            className: `text-token-text-tertiary`,
                            children: (0, H.jsx)(c, {
                              id: `profile.usernamePrefix`,
                              defaultMessage: `@`,
                              description: `Prefix shown before a profile username`,
                            }),
                          }),
                          (0, H.jsx)(`input`, {
                            id: y,
                            "aria-describedby": A == null ? void 0 : re,
                            "aria-invalid": A != null,
                            className: `min-w-0 flex-1 bg-transparent text-base leading-6 text-token-input-foreground outline-none`,
                            disabled: R,
                            maxLength: 20,
                            onChange: (e) => {
                              let t = S(e.target.value),
                                n = C(t);
                              (fe(t),
                                M(n.ok ? null : Ye(n.reason, g)),
                                I(null));
                            },
                            onFocus: (e) => {
                              e.currentTarget.select();
                            },
                            spellCheck: !1,
                            value: w,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            N != null || F != null
              ? (0, H.jsx)(ie, {
                  className: `pt-3`,
                  children: (0, H.jsxs)(`div`, {
                    className: `flex flex-col gap-1.5`,
                    children: [
                      N == null
                        ? null
                        : (0, H.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: N,
                          }),
                      F == null
                        ? null
                        : (0, H.jsx)(`div`, {
                            className: `text-sm leading-5 text-token-error-foreground`,
                            role: `alert`,
                            children: F,
                          }),
                    ],
                  }),
                })
              : null,
            (0, H.jsx)(ie, {
              className: `pt-5`,
              children: (0, H.jsxs)(v, {
                children: [
                  (0, H.jsx)(te, {
                    color: `ghost`,
                    disabled: R,
                    onClick: i,
                    children: (0, H.jsx)(c, {
                      id: `profile.editProfileCancel`,
                      defaultMessage: `Cancel`,
                      description: `Button that cancels profile editing`,
                    }),
                  }),
                  (0, H.jsx)(te, {
                    type: `submit`,
                    disabled: z,
                    loading: he,
                    children: (0, H.jsx)(c, {
                      id: `profile.editProfileSave`,
                      defaultMessage: `Save`,
                      description: `Button that saves profile edits`,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      E == null
        ? null
        : (0, H.jsx)(Ce, {
            source: E,
            onCancel: () => {
              D(null);
            },
            onSave: (e) => {
              (T(e), D(null), P(null), I(null));
            },
          }),
    ],
  });
}
function He() {
  let e = (0, B.c)(6),
    t = o(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, H.jsx)(c, {
        id: `profile.usernameHelper`,
        defaultMessage: `Use 3-20 lowercase letters, numbers, periods, underscores, or hyphens`,
        description: `Helper text explaining allowed username characters`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === t
    ? (r = e[2])
    : ((r = t.formatMessage({
        id: `profile.usernameRequirementsLabel`,
        defaultMessage: `Username requirements`,
        description: `Accessible label for the username requirements tooltip trigger`,
      })),
      (e[1] = t),
      (e[2] = r));
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, H.jsx)(z, { "aria-hidden": !0, className: `icon-2xs` })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  return (
    e[4] === r
      ? (a = e[5])
      : ((a = (0, H.jsx)(_, {
          side: `top`,
          tooltipContent: n,
          children: (0, H.jsx)(`button`, {
            type: `button`,
            "aria-label": r,
            className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full border-0 bg-transparent p-0 text-token-text-tertiary outline-none hover:text-token-text-primary focus-visible:ring-1 focus-visible:ring-token-focus-border`,
            children: i,
          }),
        })),
        (e[4] = r),
        (e[5] = a)),
    a
  );
}
function Ue(e) {
  let t = (0, B.c)(2),
    { accountLabel: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, H.jsx)(`span`, {
          className: `inline-flex h-6 items-center rounded-lg border border-token-border-light px-[5px] text-xs leading-4 text-token-text-tertiary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function We(e, t) {
  return (
    Je(e) ??
    t.formatMessage({
      id: `profile.displayNameUpdateError`,
      defaultMessage: `Unable to update display name`,
      description: `Fallback error shown when profile display name update fails`,
    })
  );
}
function Ge(e, t) {
  return e instanceof D
    ? Ye(e.reason, t)
    : (Je(e) ??
        t.formatMessage({
          id: `profile.usernameUpdateError`,
          defaultMessage: `Unable to update username`,
          description: `Fallback error shown when profile username update fails`,
        }));
}
function Ke(e, t) {
  return (
    Je(e) ??
    t.formatMessage({
      id: `profile.photoUpdateError`,
      defaultMessage: `Unable to update profile picture`,
      description: `Fallback error shown when profile picture update fails`,
    })
  );
}
function qe(e, t) {
  return (
    Je(e) ??
    t.formatMessage({
      id: `profile.updateError`,
      defaultMessage: `Unable to update profile`,
      description: `Fallback error shown when profile update fails`,
    })
  );
}
function Je(e) {
  if (e instanceof Error) {
    let t = y(e);
    if (t != null) return t.message;
    if (e.message.length > 0) {
      try {
        let t = Le.safeParse(JSON.parse(e.message));
        if (t.success) return t.data.msg;
      } catch {}
      return e.message;
    }
  }
  return null;
}
function Ye(e, t) {
  switch (e) {
    case `empty`:
      return t.formatMessage({
        id: `profile.usernameValidation.empty`,
        defaultMessage: `Enter a username`,
        description: `Error shown when submitting an empty profile username`,
      });
    case `invalidCharacters`:
      return t.formatMessage({
        id: `profile.usernameValidation.invalidCharacters`,
        defaultMessage: `Use only lowercase letters, numbers, periods, underscores, or hyphens`,
        description: `Error shown when a profile username contains unsupported characters`,
      });
    case `tooLong`:
      return t.formatMessage({
        id: `profile.usernameValidation.tooLong`,
        defaultMessage: `Username must be 20 characters or fewer`,
        description: `Error shown when a profile username is too long`,
      });
    case `tooShort`:
      return t.formatMessage({
        id: `profile.usernameValidation.tooShort`,
        defaultMessage: `Username must be at least 3 characters long`,
        description: `Error shown when a profile username is too short`,
      });
  }
}
function Xe(e) {
  return new Promise((t, n) => {
    let r = new FileReader();
    ((r.onerror = () => {
      n(r.error ?? Error(`Unable to read profile photo`));
    }),
      (r.onload = () => {
        if (typeof r.result != `string`) {
          n(Error(`Unable to read profile photo`));
          return;
        }
        t({
          contentType: e.type.trim() || `image/jpeg`,
          dataUrl: r.result,
          filename: e.name.trim() || `profile-photo.jpg`,
        });
      }),
      r.readAsDataURL(e));
  });
}
function Ze(e) {
  let t = (0, B.c)(8),
    { avatar: n, showsPet: r } = e,
    i,
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, H.jsx)(Qe, {
        className: `absolute top-0 left-[72px] size-20 rounded-full`,
      })),
      (a = (0, H.jsx)(Qe, {
        className: `absolute top-[100px] left-0 h-8 w-56 rounded-lg`,
      })),
      (o = (0, H.jsx)(Qe, {
        className: `absolute top-[140px] left-12 h-7 w-32 rounded-lg`,
      })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : ((i = t[0]), (a = t[1]), (o = t[2]));
  let s;
  t[3] !== n || t[4] !== r
    ? ((s = r
        ? (0, H.jsx)(`div`, {
            className: `absolute top-8 left-32 flex size-14 items-center justify-center`,
            children: (0, H.jsx)(_t, { avatar: n }),
          })
        : null),
      (t[3] = n),
      (t[4] = r),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] === s
      ? (c = t[7])
      : ((c = (0, H.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `relative h-[168px] w-56`,
          children: [i, a, o, s],
        })),
        (t[6] = s),
        (t[7] = c)),
    c
  );
}
function Qe(e) {
  let t = (0, B.c)(4),
    { className: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = a(je.profileLoadingBlock, `block`, n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, H.jsx)(`span`, { "aria-hidden": !0, className: r })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function $e() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(H.Fragment, { children: ze.map(et) })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function et(e, t) {
  return (0, H.jsxs)(
    V.Fragment,
    {
      children: [
        t > 0 ? (0, H.jsx)(st, {}) : null,
        (0, H.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center gap-1 overflow-hidden px-3 py-2.5`,
          children: [
            (0, H.jsx)(Qe, { className: `h-5 w-12 rounded-md` }),
            (0, H.jsx)(Qe, { className: `h-5 w-20 rounded-md` }),
          ],
        }),
      ],
    },
    e,
  );
}
function tt() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(`div`, {
          className: `flex min-h-[60px] w-full items-center justify-center px-4 py-3 text-center text-sm text-token-text-tertiary`,
          children: (0, H.jsx)(c, {
            id: `profile.stats.unavailable`,
            defaultMessage: `Profile stats unavailable`,
            description: `Empty state shown when profile stats fail to load`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function nt(e) {
  let t = (0, B.c)(12),
    { columnCount: n, monthLabelCount: r } = e,
    i = `repeat(${n}, minmax(1px, 1fr))`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = { gridTemplateColumns: i }), (t[0] = i), (t[1] = a));
  let o;
  t[2] === n
    ? (o = t[3])
    : ((o = Array.from({ length: n * 7 }, it)), (t[2] = n), (t[3] = o));
  let s;
  t[4] !== a || t[5] !== o
    ? ((s = (0, H.jsx)(`div`, {
        className: `grid grid-flow-col grid-rows-[repeat(7,minmax(1px,1fr))] gap-[3px] overflow-hidden`,
        style: a,
        children: o,
      })),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === r
    ? (c = t[8])
    : ((c = (0, H.jsx)(`div`, {
        className: `flex items-center justify-between`,
        children: Array.from({ length: r }, rt),
      })),
      (t[7] = r),
      (t[8] = c));
  let l;
  return (
    t[9] !== s || t[10] !== c
      ? ((l = (0, H.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `flex flex-col gap-2`,
          children: [s, c],
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function rt(e, t) {
  return (0, H.jsx)(Qe, { className: `h-4 w-6 rounded-md` }, t);
}
function it(e, t) {
  return (0, H.jsx)(Qe, { className: `aspect-square w-full rounded-[4px]` }, t);
}
function at() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(`div`, {
          className: `flex min-h-40 items-center justify-center rounded-2xl border border-token-border-light px-4 text-center text-sm text-token-text-tertiary`,
          children: (0, H.jsx)(c, {
            id: `profile.tokenUsage.unavailable`,
            defaultMessage: `Token usage unavailable`,
            description: `Empty state shown when profile token usage fails to load`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ot(e) {
  let t = (0, B.c)(7),
    { label: n, value: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, H.jsx)(`div`, {
        className: `w-full truncate leading-5 text-token-text-primary`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, H.jsx)(`div`, {
        className: `w-full truncate leading-5 text-token-text-secondary`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, H.jsxs)(`div`, {
          className: `flex min-w-px flex-1 flex-col items-center justify-center overflow-hidden px-3 py-2.5 text-center text-sm tracking-[-0.154px]`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function st() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(`div`, {
          className: `my-3 w-px shrink-0 self-stretch rounded-sm bg-token-border-light`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ct(e, t) {
  return e.formatNumber(Math.max(0, Math.round(t ?? 0)), {
    maximumFractionDigits: 1,
    notation: `compact`,
  });
}
function lt(e, t) {
  return e.formatMessage(
    {
      id: `profile.stats.dayStreakValue`,
      defaultMessage: `{days, plural, one {# day} other {# days}}`,
      description: `Formatted day count for profile streak stats`,
    },
    { days: Math.max(0, Math.round(t ?? 0)) },
  );
}
function ut(e) {
  let t = e % 7;
  return (Math.floor(e / 7) * 8 + t * 12) / 1e3;
}
function dt(e) {
  let t = T(0, e),
    n = new Date(`${e}T00:00:00.000Z`),
    r = n.getUTCMonth(),
    i = n.getUTCFullYear(),
    a = Math.min(Me, ft(t, e) + 1);
  return Array.from({ length: a }, (e, t) => {
    let n = t - (a - 1);
    return new Date(Date.UTC(i, r + n, 1)).toISOString();
  });
}
function ft(e, t) {
  let n = new Date(`${e}T00:00:00.000Z`),
    r = new Date(`${t}T00:00:00.000Z`);
  return (
    (r.getUTCFullYear() - n.getUTCFullYear()) * 12 +
    r.getUTCMonth() -
    n.getUTCMonth()
  );
}
function pt(e) {
  let t = (0, B.c)(10),
    { dateIso: n, tokenCount: r, todayIso: i } = e,
    a = o(),
    s;
  t[0] !== n || t[1] !== a || t[2] !== i
    ? ((s = ht({ dateIso: n, intl: a, todayIso: i })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = i),
      (t[3] = s))
    : (s = t[3]);
  let l;
  t[4] !== a || t[5] !== r
    ? ((l = ct(a, r)), (t[4] = a), (t[5] = r), (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== s || t[8] !== l
      ? ((u = (0, H.jsx)(c, {
          id: `profile.tokenUsage.cellTooltip`,
          defaultMessage: `{tokens} tokens on {date}`,
          description: `Tooltip for a token usage chart cell`,
          values: { date: s, tokens: l },
        })),
        (t[7] = s),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function mt(e) {
  let t = (0, B.c)(10),
    { chartView: n, tokenCount: r, weekStartIso: i } = e,
    a = o(),
    s;
  t[0] !== a || t[1] !== r
    ? ((s = ct(a, r)), (t[0] = a), (t[1] = r), (t[2] = s))
    : (s = t[2]);
  let l = s,
    u;
  t[3] !== a || t[4] !== i
    ? ((u = a.formatDate(new Date(`${i}T00:00:00.000Z`), {
        day: `numeric`,
        month: `short`,
        timeZone: `UTC`,
        year: `numeric`,
      })),
      (t[3] = a),
      (t[4] = i),
      (t[5] = u))
    : (u = t[5]);
  let d = u,
    f;
  return (
    t[6] !== n || t[7] !== l || t[8] !== d
      ? ((f =
          n === `weekly`
            ? (0, H.jsx)(c, {
                id: `profile.tokenUsage.weekTooltip`,
                defaultMessage: `{tokens} tokens on week of {weekStart}`,
                description: `Tooltip for a weekly token usage chart column`,
                values: { tokens: l, weekStart: d },
              })
            : (0, H.jsx)(c, {
                id: `profile.tokenUsage.cumulativeWeekTooltip`,
                defaultMessage: `{tokens} tokens through week of {weekStart}`,
                description: `Tooltip for a cumulative token usage chart column`,
                values: { tokens: l, weekStart: d },
              })),
        (t[6] = n),
        (t[7] = l),
        (t[8] = d),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
function ht({ dateIso: e, intl: t, todayIso: n }) {
  let r = new Date(`${e}T00:00:00.000Z`),
    i = t.formatDate(r, { day: `numeric`, month: `short`, timeZone: `UTC` }),
    a = r.getUTCFullYear();
  return a === Number(n.slice(0, 4)) ? i : `${i}, ${a}`;
}
function gt(e) {
  let t = (0, B.c)(10),
    { active: n, children: r, disabled: i, onSelect: o } = e,
    s = i ? `cursor-default` : `cursor-interaction`,
    c = n ? `text-token-text-primary` : `text-token-text-tertiary`,
    l =
      !n &&
      !i &&
      `hover:bg-token-list-hover-background hover:text-token-text-primary focus-visible:bg-token-list-hover-background focus-visible:text-token-text-primary`,
    u;
  t[0] !== s || t[1] !== c || t[2] !== l
    ? ((u = a(
        `rounded-md px-1.5 py-0.5 text-sm leading-5 outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border`,
        s,
        c,
        l,
      )),
      (t[0] = s),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u))
    : (u = t[3]);
  let d;
  return (
    t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== o || t[8] !== u
      ? ((d = (0, H.jsx)(`button`, {
          type: `button`,
          className: u,
          "aria-pressed": n,
          disabled: i,
          onClick: o,
          children: r,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = i),
        (t[7] = o),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function _t(e) {
  let t = (0, B.c)(9),
    { avatar: n } = e,
    [r, i] = (0, V.useState)(!1),
    a,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = () => {
        i(!0);
      }),
      (o = () => {
        i(!1);
      }),
      (t[0] = a),
      (t[1] = o))
    : ((a = t[0]), (o = t[1]));
  let s = r ? `jumping` : `idle`,
    c;
  t[2] !== n.assetRef || t[3] !== n.spritesheetUrl || t[4] !== s
    ? ((c = (0, H.jsx)(R, {
        assetRef: n.assetRef,
        className: `scale-75`,
        spritesheetUrl: n.spritesheetUrl,
        state: s,
      })),
      (t[2] = n.assetRef),
      (t[3] = n.spritesheetUrl),
      (t[4] = s),
      (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] !== n.id || t[7] !== c
      ? ((l = (0, H.jsx)(`div`, {
          className: `flex size-14 shrink-0 items-center justify-center overflow-visible`,
          "data-avatar-id": n.id,
          onPointerEnter: a,
          onPointerLeave: o,
          children: c,
        })),
        (t[6] = n.id),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
export { Be as Profile };
//# sourceMappingURL=profile-DgJ_kZ9q.js.map
