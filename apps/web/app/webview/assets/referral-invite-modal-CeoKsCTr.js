import { s as e } from "./chunk-Bj-mKKzh.js";
import { Hi as t, Ji as n, ji as r, qi as i } from "./src-C.js";
import {
  as as a,
  is as o,
  os as s,
  rs as c,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as l, t as u } from "./jsx-runtime.js";
import { t as d } from "./clsx-BcPLHiun.js";
import { G as ee, U as f, Z as p, h as m, wt as h } from "./setting-storage.js";
import { r as g } from "./product-logger-DusapRyT.js";
import { u as _ } from "./statsig--EYRNU53.js";
import { _ as v, p as y, u as b, x } from "./codex-api-bK--r_2t.js";
import { t as S } from "./button.js";
import { t as C } from "./proxy.js";
import { t as te } from "./x-C_RDKBp5.js";
import { d as w, l as ne, n as re, u as ie } from "./dialog-layout.js";
import { t as T } from "./gradient.js";
import { t as E } from "./codex-BjFeJtxQ.js";
import { t as D } from "./app-DWO4dx-p.js";
import { t as O } from "./check-lg.js";
var k = `` + new URL(`referral-modal-background.png`, import.meta.url).href,
  A = h(),
  j = e(l(), 1),
  M = u(),
  N = 3,
  P = 10,
  F = 236,
  I = 1e3 / 60,
  ae = 32,
  L = 0.94,
  R = 0.02,
  oe = 4,
  se = 2,
  ce = 0.45,
  le = 0.55,
  z = 80,
  B = [
    { x: 0, y: 0, rotate: -2 },
    { x: 15, y: 0, rotate: 1 },
    { x: 30, y: 0, rotate: 3 },
  ];
function V(e) {
  let t = (0, A.c)(22),
    { credits: n, onSelectedCreditIdChange: r } = e,
    i = ee(),
    [a, o] = (0, j.useState)(!1),
    [s, c] = (0, j.useState)(!1),
    [l, u] = (0, j.useState)(null),
    [f, p] = (0, j.useState)(!1),
    [m, h] = (0, j.useState)(null),
    [g, _] = (0, j.useState)(null),
    [v, y] = (0, j.useState)(null),
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = []), (t[0] = b))
    : (b = t[0]);
  let [x, S] = (0, j.useState)(b),
    [te, w] = (0, j.useState)(ue),
    [ne, re] = (0, j.useState)(0),
    [ie, T] = (0, j.useState)(!1),
    E = (0, j.useRef)(new Set()),
    D = (0, j.useRef)([]),
    O = (0, j.useRef)(null),
    k = (0, j.useRef)(0),
    F = (0, j.useRef)(null),
    V = (0, j.useRef)(null),
    K = (0, j.useRef)(null),
    me = (0, j.useRef)(null),
    he = (0, j.useRef)(!1),
    ge;
  t[1] === i ? (ge = t[2]) : ((ge = (e) => G(e, i)), (t[1] = i), (t[2] = ge));
  let _e = n.map(ge),
    ve;
  t[3] === x
    ? (ve = t[4])
    : ((ve = (e) => !x.some((t) => t === e.id)), (t[3] = x), (t[4] = ve));
  let q = [
      ...x.map((e) => _e.find((t) => t.id === e)).filter(W),
      ..._e.filter(ve),
    ],
    J = q.length > 1,
    Y = q.slice(0, P),
    ye = Y.find((e) => e.id === m) ?? Y[0],
    X =
      Y.find((e) => e.id === g && e.id !== ye?.id) ??
      Y.find((e) => e.id !== ye?.id),
    be = [
      ye,
      X,
      Y.find((e) => e.id === v && e.id !== ye?.id && e.id !== X?.id) ??
        Y.find((e) => e.id !== ye?.id && e.id !== X?.id),
    ].filter(U),
    Z = f ? Y.filter((e) => !te.has(e.id)) : be,
    xe = s && l !== `collapsing`,
    Se = a
      ? i.formatMessage({
          id: `codex.rateLimitResetModal.collapseResetCards`,
          defaultMessage: `Collapse rate limit reset cards`,
          description: `Label for collapsing expanded rate limit reset cards`,
        })
      : i.formatMessage(
          {
            id: `codex.rateLimitResetModal.expandResetCards`,
            defaultMessage: `Show all {count} rate limit reset cards`,
            description: `Label for expanding rate limit reset cards`,
          },
          { count: Math.min(_e.length, P) },
        ),
    Ce = () => {
      V.current != null &&
        (window.cancelAnimationFrame(V.current), (V.current = null));
    },
    we = () => {
      K.current != null && (window.clearTimeout(K.current), (K.current = null));
    },
    Te = (e) => {
      let { minimum: t, maximum: n } = pe({
          cardCount: Y.length,
          stripWidth: me.current?.clientWidth ?? 0,
        }),
        r = Math.min(Math.max(e, t), n);
      return ((k.current = r), re(r), r);
    },
    Ee = (e) => {
      Ce();
      let t = e,
        n = null,
        r = (e) => {
          let i = n == null ? I : Math.min(e - n, ae),
            a = k.current;
          n = e;
          let o = Te(a + t * i);
          if (((t *= L ** (i / I)), Math.abs(t) < R || o === a)) {
            ((V.current = null), T(!1));
            return;
          }
          V.current = window.requestAnimationFrame(r);
        };
      Math.abs(e) >= R ? (V.current = window.requestAnimationFrame(r)) : T(!1);
    },
    De = (e) => {
      l !== `collapsing` ||
        E.current.has(e) ||
        (E.current.add(e),
        E.current.size === Y.length - N &&
          (S(D.current), u(null), w(new Set(E.current)), p(!1)));
    },
    Oe;
  (t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = []), (t[5] = Oe))
    : (Oe = t[5]),
    (0, j.useEffect)(
      () => () => {
        (V.current != null && window.cancelAnimationFrame(V.current),
          O.current != null && window.cancelAnimationFrame(O.current),
          K.current != null && window.clearTimeout(K.current));
      },
      Oe,
    ));
  let ke = (e) => {
      if (he.current) {
        he.current = !1;
        return;
      }
      if ((Ce(), we(), T(!1), a)) {
        let t = e ?? ye?.id,
          n = Math.max(
            q.findIndex((e) => e.id === t),
            0,
          ),
          i = n > 0 ? [q[n], ...q.slice(0, n), ...q.slice(n + 1)] : q,
          a = i.slice(0, P),
          s = a[0];
        (s != null && (h(s.id), r(s.id), (D.current = i.map(H))),
          _(a[1]?.id ?? null),
          y(a[2]?.id ?? null),
          u(`collapsing`),
          E.current.clear(),
          w(new Set()),
          o(!1));
        return;
      }
      (u(`expanding`),
        Te(0),
        E.current.clear(),
        w(new Set()),
        p(!0),
        (O.current = window.requestAnimationFrame(() => {
          ((O.current = null), o(!0));
        })));
    },
    Ae = (e) => {
      !a ||
        e.button !== 0 ||
        (Ce(),
        we(),
        T(!0),
        (F.current = {
          pointerId: e.pointerId,
          startX: e.clientX,
          startScrollLeft: k.current,
          lastX: e.clientX,
          lastTimestamp: e.timeStamp,
          velocity: 0,
          dragged: !1,
        }));
    },
    je = (e) => {
      c(!0);
      let t = F.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = e.clientX - t.startX;
      if (
        (!t.dragged &&
          Math.abs(n) > oe &&
          ((t.dragged = !0),
          (he.current = !0),
          e.currentTarget.setPointerCapture(e.pointerId)),
        t.dragged)
      ) {
        (e.preventDefault(), Te(t.startScrollLeft - n));
        let r = Math.max(e.timeStamp - t.lastTimestamp, 1),
          i = Math.min(Math.max((t.lastX - e.clientX) / r, -se), se);
        ((t.velocity = t.velocity * ce + i * le),
          (t.lastX = e.clientX),
          (t.lastTimestamp = e.timeStamp));
      }
    },
    Me = (e) => {
      let t = F.current;
      t == null ||
        t.pointerId !== e.pointerId ||
        (e.currentTarget.hasPointerCapture(e.pointerId) &&
          e.currentTarget.releasePointerCapture(e.pointerId),
        (F.current = null),
        t.dragged
          ? (Ee(t.velocity),
            window.setTimeout(() => {
              he.current = !1;
            }, 0))
          : T(!1));
    },
    Ne = (e) => {
      if (!a) {
        e.preventDefault();
        return;
      }
      let t = e.deltaX === 0 ? (e.shiftKey ? e.deltaY : 0) : e.deltaX;
      t !== 0 &&
        (e.preventDefault(),
        Ce(),
        we(),
        T(!0),
        Te(k.current + t),
        (K.current = window.setTimeout(() => {
          ((K.current = null), T(!1));
        }, z)));
    },
    Pe = a ? `cursor-grab touch-none active:cursor-grabbing` : `touch-none`,
    Fe;
  t[6] === Pe
    ? (Fe = t[7])
    : ((Fe = d(`relative z-10 overflow-hidden pt-2 pb-10`, Pe)),
      (t[6] = Pe),
      (t[7] = Fe));
  let Ie, Q;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = () => {
        c(!0);
      }),
      (Q = () => {
        c(!1);
      }),
      (t[8] = Ie),
      (t[9] = Q))
    : ((Ie = t[8]), (Q = t[9]));
  let Le = Z.map((e) => {
      let t = Y.findIndex((t) => t.id === e.id),
        n = a ? null : be.findIndex((t) => t.id === e.id),
        r = n === -1 ? null : n,
        i = r == null ? null : xe ? B[r] : B[0],
        o = !a && r == null,
        s = a && l === `expanding`,
        c = l === `collapsing`,
        d = (i?.y ?? 0) - (xe ? 4 : 0);
      return (0, M.jsx)(
        C.div,
        {
          className: `col-start-1 row-start-1 justify-self-center`,
          initial: !1,
          animate: a
            ? { x: fe(t) - ne, y: 0, rotate: 0, opacity: 1, scale: 1 }
            : {
                x: i?.x ?? 0,
                y: c
                  ? [
                      0,
                      r === 0 ? -6 : -10,
                      r === 0 ? -1 : -2,
                      r === 0 ? -2 : -4,
                      d,
                    ]
                  : d,
                rotate: i?.rotate ?? -2,
                opacity: o ? 0 : 1,
                scale: o ? 0.985 : 1,
              },
          transition:
            a && ie
              ? { duration: 0 }
              : s
                ? {
                    type: `tween`,
                    duration: 0.4,
                    ease: [0.23, 1, 0.32, 1],
                    opacity: {
                      duration: 0.14,
                      delay: Math.max(t - N, 0) * 0.012,
                    },
                  }
                : {
                    type: `spring`,
                    stiffness: a ? 260 : 330,
                    damping: a ? 29 : 28,
                    mass: a ? 0.8 : 0.85,
                    delay: a ? t * 0.015 : 0,
                    opacity: {
                      duration: 0.18,
                      delay: a
                        ? Math.max(t - N, 0) * 0.018
                        : o
                          ? (Y.length - t - 1) * 0.014
                          : 0,
                    },
                    ...(c
                      ? {
                          y: {
                            duration: 0.46,
                            ease: `easeInOut`,
                            times: [0, 0.22, 0.46, 0.68, 1],
                          },
                        }
                      : {}),
                  },
          style: {
            zIndex: a
              ? P - t
              : r === 0
                ? 30
                : r === 1
                  ? 20
                  : r === 2
                    ? 10
                    : 9 - t,
          },
          onAnimationComplete: () => {
            (a && l === `expanding` && t === Y.length - 1 && u(null),
              r == null && l === `collapsing` && De(e.id),
              !a &&
                l === `collapsing` &&
                Y.length <= N &&
                r === be.length - 1 &&
                (S(D.current), u(null), p(!1)));
          },
          children: (0, M.jsx)(de, {
            card: e,
            isExpanded: a,
            shouldShowShadow: a || r === 0,
            onToggle:
              a || (r != null && !o && J)
                ? () => {
                    ke(e.id);
                  }
                : void 0,
            toggleLabel: Se,
          }),
        },
        e.id,
      );
    }),
    Re;
  t[10] === Le
    ? (Re = t[11])
    : ((Re = (0, M.jsx)(`div`, {
        className: `grid min-w-full select-none`,
        children: Le,
      })),
      (t[10] = Le),
      (t[11] = Re));
  let ze;
  return (
    t[12] !== me ||
    t[13] !== Ae ||
    t[14] !== Me ||
    t[15] !== je ||
    t[16] !== Ne ||
    t[17] !== Re ||
    t[18] !== Fe ||
    t[19] !== Ie ||
    t[20] !== Q
      ? ((ze = (0, M.jsx)(`div`, {
          ref: me,
          className: Fe,
          onPointerDown: Ae,
          onPointerMove: je,
          onPointerUp: Me,
          onPointerCancel: Me,
          onPointerEnter: Ie,
          onPointerLeave: Q,
          onWheel: Ne,
          children: Re,
        })),
        (t[12] = me),
        (t[13] = Ae),
        (t[14] = Me),
        (t[15] = je),
        (t[16] = Ne),
        (t[17] = Re),
        (t[18] = Fe),
        (t[19] = Ie),
        (t[20] = Q),
        (t[21] = ze))
      : (ze = t[21]),
    ze
  );
}
function H(e) {
  return e.id;
}
function U(e) {
  return e != null;
}
function W(e) {
  return e != null;
}
function ue() {
  return new Set();
}
function de(e) {
  let t = (0, A.c)(36),
    {
      card: n,
      isExpanded: r,
      shouldShowShadow: i,
      onToggle: a,
      toggleLabel: o,
    } = e,
    s = i && `shadow-[0_10px_28px_rgba(0,0,0,0.06)]`,
    c =
      a != null &&
      `cursor-interaction [--cursor-interaction:pointer] focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
    l;
  t[0] !== s || t[1] !== c
    ? ((l = d(
        `w-[224px] max-w-[calc(100vw-72px)] shrink-0 rounded-2xl bg-token-bg-primary p-3 text-left`,
        s,
        c,
      )),
      (t[0] = s),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === r
    ? (u = t[4])
    : ((u = r ? { y: -4 } : void 0), (t[3] = r), (t[4] = u));
  let ee;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = { type: `spring`, stiffness: 520, damping: 34, mass: 0.7 }),
      (t[5] = ee))
    : (ee = t[5]);
  let p = a == null ? void 0 : `button`,
    m = a == null ? void 0 : 0,
    h = a == null ? void 0 : r,
    g = a == null ? void 0 : o,
    _;
  t[6] === a
    ? (_ = t[7])
    : ((_ = (e) => {
        a != null &&
          (e.key === `Enter` || e.key === ` `) &&
          (e.preventDefault(), a());
      }),
      (t[6] = a),
      (t[7] = _));
  let v;
  t[8] !== n.profileImageUrl || t[9] !== n.username
    ? ((v =
        n.profileImageUrl == null
          ? (0, M.jsx)(`span`, {
              className: `flex size-5 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-[9px] font-medium text-token-foreground`,
              children: n.username.replace(/^@/, ``).slice(0, 2).toUpperCase(),
            })
          : (0, M.jsx)(`img`, {
              alt: ``,
              className: `size-5 shrink-0 rounded-full object-cover`,
              draggable: !1,
              src: n.profileImageUrl,
            })),
      (t[8] = n.profileImageUrl),
      (t[9] = n.username),
      (t[10] = v))
    : (v = t[10]);
  let y;
  t[11] === n.username
    ? (y = t[12])
    : ((y = (0, M.jsx)(`div`, {
        className: `truncate text-sm leading-5 font-medium text-token-text-primary`,
        children: n.username,
      })),
      (t[11] = n.username),
      (t[12] = y));
  let b;
  t[13] !== v || t[14] !== y
    ? ((b = (0, M.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [v, y],
      })),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, M.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1.5 text-xs font-normal text-token-text-secondary`,
        children: [
          (0, M.jsx)(`span`, {
            children: (0, M.jsx)(f, {
              id: `codex.rateLimitResetModal.cardBrand`,
              defaultMessage: `Codex`,
              description: `Brand label shown on a Codex rate limit reset card`,
            }),
          }),
          (0, M.jsx)(E, {
            className: `size-4 text-token-text-secondary opacity-70`,
          }),
        ],
      })),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] === b
    ? (S = t[18])
    : ((S = (0, M.jsxs)(`div`, {
        className: `mb-2 flex items-center justify-between gap-3`,
        children: [b, x],
      })),
      (t[17] = b),
      (t[18] = S));
  let te;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, M.jsxs)(`div`, {
        className: `relative h-[164px] overflow-hidden rounded-xl bg-[#49c5ef]`,
        children: [
          (0, M.jsx)(`img`, {
            alt: ``,
            className: `absolute inset-0 size-full object-cover opacity-80`,
            draggable: !1,
            src: k,
          }),
          (0, M.jsx)(`img`, {
            alt: ``,
            className: `absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_16px_rgba(44,94,201,0.28)]`,
            draggable: !1,
            src: D,
          }),
        ],
      })),
      (t[19] = te))
    : (te = t[19]);
  let w;
  t[20] === n.title
    ? (w = t[21])
    : ((w = (0, M.jsx)(`h3`, {
        className: `mt-3 mb-0 text-sm leading-5 font-medium text-token-text-primary`,
        children: n.title,
      })),
      (t[20] = n.title),
      (t[21] = w));
  let ne;
  t[22] === n.description
    ? (ne = t[23])
    : ((ne = (0, M.jsx)(`p`, {
        className: `mt-1 mb-0 text-sm leading-5 font-normal text-token-text-secondary`,
        children: n.description,
      })),
      (t[22] = n.description),
      (t[23] = ne));
  let re;
  return (
    t[24] !== a ||
    t[25] !== _ ||
    t[26] !== S ||
    t[27] !== w ||
    t[28] !== ne ||
    t[29] !== l ||
    t[30] !== u ||
    t[31] !== p ||
    t[32] !== m ||
    t[33] !== h ||
    t[34] !== g
      ? ((re = (0, M.jsxs)(C.article, {
          className: l,
          whileHover: u,
          transition: ee,
          role: p,
          tabIndex: m,
          "aria-expanded": h,
          "aria-label": g,
          onClick: a,
          onKeyDown: _,
          children: [S, te, w, ne],
        })),
        (t[24] = a),
        (t[25] = _),
        (t[26] = S),
        (t[27] = w),
        (t[28] = ne),
        (t[29] = l),
        (t[30] = u),
        (t[31] = p),
        (t[32] = m),
        (t[33] = h),
        (t[34] = g),
        (t[35] = re))
      : (re = t[35]),
    re
  );
}
function fe(e) {
  return Math.ceil(e / 2) * F * (e % 2 == 0 ? -1 : 1);
}
function pe({ cardCount: e, stripWidth: t }) {
  let n = Math.max(t / 2 - F / 2, 0);
  return {
    minimum: Math.min(-Math.floor((e - 1) / 2) * F + n, 0),
    maximum: Math.max(Math.ceil((e - 1) / 2) * F - n, 0),
  };
}
function G(e, t) {
  let n = e.profile_user_id?.trim(),
    r = e.title?.trim(),
    i = e.description?.trim(),
    a = e.profile_image_url?.trim();
  return {
    id: e.id,
    profileImageUrl: a == null || a.length === 0 ? null : a,
    username:
      n == null || n.length === 0
        ? `Codex Team`
        : n.startsWith(`@`)
          ? n
          : `@${n}`,
    title:
      r == null || r.length === 0
        ? t.formatMessage({
            id: `codex.rateLimitResetModal.cardFallbackTitle`,
            defaultMessage: `One rate limit reset`,
            description: `Fallback title for a Codex rate limit reset card when the backend omits one`,
          })
        : r,
    description:
      i == null || i.length === 0
        ? t.formatMessage({
            id: `codex.rateLimitResetModal.cardFallbackDescription`,
            defaultMessage: `You have one rate limit reset ready to be redeemed`,
            description: `Fallback description for a Codex rate limit reset card when the backend omits one`,
          })
        : i,
  };
}
function K(e) {
  let t = (0, A.c)(67),
    {
      errorMessage: n,
      initialAvailableCount: r,
      isRateLimitReached: i,
      isResetting: a,
      onClose: o,
      onReset: s,
    } = e,
    c = ee(),
    l = (0, j.useId)(),
    [u, d] = (0, j.useState)(null),
    { data: p, error: m, isLoading: h } = x(),
    g = p?.available_count ?? r ?? 0,
    _,
    v;
  t[0] !== p?.credits || t[1] !== u
    ? ((_ = p?.credits.filter(me) ?? []),
      (v = _.find((e) => e.id === u)?.id ?? _[0]?.id),
      (t[0] = p?.credits),
      (t[1] = u),
      (t[2] = _),
      (t[3] = v))
    : ((_ = t[2]), (v = t[3]));
  let y = v,
    b = h || a || g === 0 || y == null,
    C;
  if (h) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(`div`, {
          className: `mx-8 h-[276px] animate-pulse rounded-2xl bg-token-bg-secondary`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (C = e));
  } else if (p == null && m != null) C = null;
  else if (_.length === 0) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(`div`, {
          className: `mx-8 flex h-[276px] items-center justify-center rounded-2xl bg-token-bg-secondary px-6 text-sm text-token-text-secondary shadow-[0_12px_28px_rgba(0,0,0,0.12)]`,
          children: (0, M.jsx)(f, {
            id: `codex.rateLimitResetModal.noResets`,
            defaultMessage: `No rate limit resets are available`,
            description: `Empty state shown when no Codex rate limit resets are available`,
          }),
        })),
        (t[5] = e))
      : (e = t[5]),
      (C = e));
  } else {
    let e;
    (t[6] === _
      ? (e = t[7])
      : ((e = (0, M.jsx)(V, { credits: _, onSelectedCreditIdChange: d })),
        (t[6] = _),
        (t[7] = e)),
      (C = e));
  }
  let T;
  t[8] === o
    ? (T = t[9])
    : ((T = (e) => {
        e || o();
      }),
      (t[8] = o),
      (t[9] = T));
  let E;
  t[10] === a
    ? (E = t[11])
    : ((E = (e) => {
        a && e.preventDefault();
      }),
      (t[10] = a),
      (t[11] = E));
  let D;
  t[12] !== l || t[13] !== E
    ? ((D = { "aria-describedby": l, onEscapeKeyDown: E }),
      (t[12] = l),
      (t[13] = E),
      (t[14] = D))
    : (D = t[14]);
  let O;
  t[15] !== y || t[16] !== g || t[17] !== s
    ? ((O = (e) => {
        (e.preventDefault(), y != null && s(y, g));
      }),
      (t[15] = y),
      (t[16] = g),
      (t[17] = s),
      (t[18] = O))
    : (O = t[18]);
  let k;
  t[19] === c
    ? (k = t[20])
    : ((k = c.formatMessage({
        id: `codex.rateLimitResetModal.close`,
        defaultMessage: `Close`,
        description: `Aria label for closing the Codex rate limit reset modal`,
      })),
      (t[19] = c),
      (t[20] = k));
  let N;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, M.jsx)(te, { className: `size-4 stroke-[2.2]` })), (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] !== a || t[23] !== o || t[24] !== k
    ? ((P = (0, M.jsx)(`button`, {
        type: `button`,
        disabled: a,
        onClick: o,
        "aria-label": k,
        className: `no-drag absolute top-7 right-7 z-[2] inline-flex size-7 cursor-interaction items-center justify-center rounded-full border-0 bg-transparent text-token-text-secondary transition-colors hover:text-token-text-primary disabled:pointer-events-none disabled:opacity-40`,
        children: N,
      })),
      (t[22] = a),
      (t[23] = o),
      (t[24] = k),
      (t[25] = P))
    : (P = t[25]);
  let F;
  t[26] !== g || t[27] !== i
    ? ((F = (0, M.jsx)(w, {
        asChild: !0,
        children: (0, M.jsx)(`h2`, {
          className: `heading-lg m-0 text-token-text-primary`,
          children: i
            ? (0, M.jsx)(f, {
                id: `codex.rateLimitResetModal.heading.rateLimitReached`,
                defaultMessage: `You're out of Codex messages`,
                description: `Heading for the Codex rate limit reset modal when the user has reached their usage limit`,
              })
            : (0, M.jsx)(f, {
                id: `codex.rateLimitResetModal.heading.available`,
                defaultMessage: `You have {availableCount, plural, one {# rate limit reset} other {# rate limit resets}}`,
                description: `Heading for the Codex rate limit reset modal opened from available saved resets`,
                values: { availableCount: g },
              }),
        }),
      })),
      (t[26] = g),
      (t[27] = i),
      (t[28] = F))
    : (F = t[28]);
  let I;
  t[29] === i
    ? (I = t[30])
    : ((I = i
        ? (0, M.jsx)(f, {
            id: `codex.rateLimitResetModal.description.rateLimitReached`,
            defaultMessage: `Use one now to build uninterrupted`,
            description: `Description shown when Codex rate limit resets are available after reaching a usage limit`,
          })
        : (0, M.jsx)(f, {
            id: `codex.rateLimitResetModal.description.available`,
            defaultMessage: `Use one now to continue building uninterrupted.`,
            description: `Description shown when the rate limit reset modal is opened from saved resets`,
          })),
      (t[29] = i),
      (t[30] = I));
  let ae;
  t[31] !== l || t[32] !== I
    ? ((ae = (0, M.jsx)(ie, {
        className: `mt-3 max-w-[640px] text-sm leading-5 text-token-text-secondary`,
        id: l,
        children: I,
      })),
      (t[31] = l),
      (t[32] = I),
      (t[33] = ae))
    : (ae = t[33]);
  let L;
  t[34] === C
    ? (L = t[35])
    : ((L = (0, M.jsx)(`div`, {
        className: `relative mt-8 min-h-[316px] w-full max-w-[min(calc(100vw-48px),1180px)]`,
        children: C,
      })),
      (t[34] = C),
      (t[35] = L));
  let R;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, M.jsx)(f, {
        id: `codex.rateLimitResetModal.resetRateLimit`,
        defaultMessage: `Reset rate limit`,
        description: `Button label for redeeming a Codex rate limit reset`,
      })),
      (t[36] = R))
    : (R = t[36]);
  let oe;
  t[37] !== b || t[38] !== a
    ? ((oe = (0, M.jsx)(S, {
        className: `h-10 w-full justify-center border-0`,
        disabled: b,
        loading: a,
        size: `large`,
        type: `submit`,
        children: R,
      })),
      (t[37] = b),
      (t[38] = a),
      (t[39] = oe))
    : (oe = t[39]);
  let se;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, M.jsx)(f, {
        id: `codex.rateLimitResetModal.saveForLater`,
        defaultMessage: `Save for later`,
        description: `Button label for closing the Codex rate limit reset modal without redeeming`,
      })),
      (t[40] = se))
    : (se = t[40]);
  let ce;
  t[41] !== a || t[42] !== o
    ? ((ce = (0, M.jsx)(`button`, {
        type: `button`,
        disabled: a,
        onClick: o,
        className: `cursor-interaction border-0 bg-transparent p-0 text-sm leading-5 font-normal text-token-text-primary underline decoration-current underline-offset-4 transition-colors hover:text-token-text-secondary disabled:pointer-events-none disabled:opacity-40`,
        children: se,
      })),
      (t[41] = a),
      (t[42] = o),
      (t[43] = ce))
    : (ce = t[43]);
  let le;
  t[44] === m
    ? (le = t[45])
    : ((le =
        m == null
          ? null
          : (0, M.jsx)(`p`, {
              "aria-live": `polite`,
              className: `m-0 text-sm leading-normal text-token-error-foreground`,
              children: (0, M.jsx)(f, {
                id: `codex.rateLimitResetModal.loadError`,
                defaultMessage: `Couldn’t load rate limit resets. Please try again`,
                description: `Error shown when loading Codex rate limit resets fails`,
              }),
            })),
      (t[44] = m),
      (t[45] = le));
  let z;
  t[46] === n
    ? (z = t[47])
    : ((z =
        n == null
          ? null
          : (0, M.jsx)(`p`, {
              "aria-live": `polite`,
              className: `m-0 text-sm leading-normal text-token-error-foreground`,
              children: n,
            })),
      (t[46] = n),
      (t[47] = z));
  let B;
  t[48] !== oe || t[49] !== ce || t[50] !== le || t[51] !== z
    ? ((B = (0, M.jsxs)(`div`, {
        className: `mt-4 flex w-full max-w-[272px] flex-col items-center gap-4`,
        children: [oe, ce, le, z],
      })),
      (t[48] = oe),
      (t[49] = ce),
      (t[50] = le),
      (t[51] = z),
      (t[52] = B))
    : (B = t[52]);
  let H;
  t[53] !== ae || t[54] !== L || t[55] !== B || t[56] !== F
    ? ((H = (0, M.jsxs)(`div`, {
        className: `my-auto flex w-full flex-col items-center text-center`,
        children: [F, ae, L, B],
      })),
      (t[53] = ae),
      (t[54] = L),
      (t[55] = B),
      (t[56] = F),
      (t[57] = H))
    : (H = t[57]);
  let U;
  t[58] !== H || t[59] !== O || t[60] !== P
    ? ((U = (0, M.jsxs)(re, {
        as: `form`,
        className: `relative min-h-[100dvh] items-center overflow-x-hidden bg-token-bg-primary !px-6 !py-8 text-token-foreground`,
        onSubmit: O,
        children: [P, H],
      })),
      (t[58] = H),
      (t[59] = O),
      (t[60] = P),
      (t[61] = U))
    : (U = t[61]);
  let W;
  return (
    t[62] !== a || t[63] !== T || t[64] !== U || t[65] !== D
      ? ((W = (0, M.jsx)(ne, {
          open: !0,
          onOpenChange: T,
          shouldIgnoreClickOutside: a,
          contentClassName: `fixed inset-0 !top-0 !left-0 !z-[2147483647] h-[100dvh] w-screen max-w-none !translate-x-0 !translate-y-0 overflow-y-auto rounded-none bg-token-bg-primary p-0 shadow-none ring-0 backdrop-blur-none`,
          contentProps: D,
          showDialogClose: !1,
          unstyledContent: !0,
          children: U,
        })),
        (t[62] = a),
        (t[63] = T),
        (t[64] = U),
        (t[65] = D),
        (t[66] = W))
      : (W = t[66]),
    W
  );
}
function me(e) {
  return e.status === `available`;
}
function he(e) {
  let t = (0, A.c)(46),
    {
      availableCount: n,
      errorMessage: r,
      isResetDisabled: i,
      isResetting: a,
      onClose: o,
      onReset: s,
    } = e,
    c = ee(),
    l = (0, j.useId)(),
    u;
  t[0] === o
    ? (u = t[1])
    : ((u = (e) => {
        e || o();
      }),
      (t[0] = o),
      (t[1] = u));
  let d;
  t[2] === a
    ? (d = t[3])
    : ((d = (e) => {
        a && e.preventDefault();
      }),
      (t[2] = a),
      (t[3] = d));
  let p;
  t[4] !== l || t[5] !== d
    ? ((p = { "aria-describedby": l, onEscapeKeyDown: d }),
      (t[4] = l),
      (t[5] = d),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === s
    ? (m = t[8])
    : ((m = (e) => {
        (e.preventDefault(), s());
      }),
      (t[7] = s),
      (t[8] = m));
  let h, g;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, M.jsx)(`img`, {
        alt: ``,
        className: `absolute inset-0 size-full object-cover`,
        draggable: !1,
        src: k,
      })),
      (g = (0, M.jsx)(`img`, {
        alt: ``,
        className: `absolute top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_6px_16px_rgba(44,94,201,0.28)]`,
        draggable: !1,
        src: D,
      })),
      (t[9] = h),
      (t[10] = g))
    : ((h = t[9]), (g = t[10]));
  let _;
  t[11] === c
    ? (_ = t[12])
    : ((_ = c.formatMessage({
        id: `codex.rateLimitResetPromptModal.close`,
        defaultMessage: `Close`,
        description: `Aria label for closing the Codex reset usage prompt modal`,
      })),
      (t[11] = c),
      (t[12] = _));
  let v;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, M.jsx)(te, { className: `size-4 stroke-[2.4]` })), (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== a || t[15] !== o || t[16] !== _
    ? ((y = (0, M.jsxs)(`div`, {
        className: `relative h-48 overflow-hidden`,
        children: [
          h,
          g,
          (0, M.jsx)(`button`, {
            type: `button`,
            disabled: a,
            onClick: o,
            "aria-label": _,
            className: `absolute top-5 right-5 inline-flex size-9 cursor-interaction items-center justify-center rounded-full border-0 bg-white/60 text-[#5d5d5d] transition-colors hover:bg-white/80 hover:text-[#202123] disabled:pointer-events-none disabled:opacity-30`,
            children: v,
          }),
        ],
      })),
      (t[14] = a),
      (t[15] = o),
      (t[16] = _),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, M.jsx)(w, {
        asChild: !0,
        children: (0, M.jsx)(`h2`, {
          className: `heading-xl m-0 font-semibold text-token-text-primary`,
          children: (0, M.jsx)(f, {
            id: `codex.rateLimitResetPromptModal.heading`,
            defaultMessage: `Do you want to reset your usage?`,
            description: `Heading for the compact Codex rate limit reset prompt modal`,
          }),
        }),
      })),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] === n
    ? (x = t[20])
    : ((x = (0, M.jsx)(f, {
        id: `codex.rateLimitResetPromptModal.description`,
        defaultMessage: `Keep working uninterrupted when you reset your rate limits. You have {availableCount, plural, one {# reset} other {# resets}} available.`,
        description: `Description for the compact Codex rate limit reset prompt modal`,
        values: { availableCount: n },
      })),
      (t[19] = n),
      (t[20] = x));
  let C;
  t[21] !== l || t[22] !== x
    ? ((C = (0, M.jsx)(ie, {
        className: `m-0 max-w-[400px] text-base leading-normal tracking-normal text-token-text-secondary`,
        id: l,
        children: x,
      })),
      (t[21] = l),
      (t[22] = x),
      (t[23] = C))
    : (C = t[23]);
  let T;
  t[24] === n
    ? (T = t[25])
    : ((T = (0, M.jsx)(`div`, {
        className: `inline-flex h-7 items-center rounded-full bg-[#eeedff] px-3 text-xs leading-4 font-medium text-[#4f46e5] dark:bg-[color-mix(in_srgb,#4f46e5_24%,transparent)] dark:text-[#a5b4fc]`,
        children: (0, M.jsx)(f, {
          id: `codex.rateLimitResetPromptModal.availableResets`,
          defaultMessage: `{availableCount, plural, one {# reset available} other {# resets available}}`,
          description: `Pill showing available resets in the compact Codex rate limit reset prompt modal`,
          values: { availableCount: n },
        }),
      })),
      (t[24] = n),
      (t[25] = T));
  let E;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, M.jsx)(f, {
        id: `codex.rateLimitResetPromptModal.resetUsage`,
        defaultMessage: `Reset usage`,
        description: `Button label for redeeming a reset in the compact Codex rate limit reset prompt modal`,
      })),
      (t[26] = E))
    : (E = t[26]);
  let O;
  t[27] !== i || t[28] !== a
    ? ((O = (0, M.jsx)(S, {
        className: `mt-2 h-10 w-full justify-center border-0`,
        disabled: i,
        loading: a,
        size: `large`,
        type: `submit`,
        children: E,
      })),
      (t[27] = i),
      (t[28] = a),
      (t[29] = O))
    : (O = t[29]);
  let N;
  t[30] === r
    ? (N = t[31])
    : ((N =
        r == null
          ? null
          : (0, M.jsx)(`p`, {
              "aria-live": `polite`,
              className: `m-0 text-sm leading-normal text-token-error-foreground`,
              children: r,
            })),
      (t[30] = r),
      (t[31] = N));
  let P;
  t[32] !== C || t[33] !== T || t[34] !== O || t[35] !== N
    ? ((P = (0, M.jsxs)(`div`, {
        className: `flex flex-col items-center gap-5 px-8 pt-8 pb-8 text-center`,
        children: [b, C, T, O, N],
      })),
      (t[32] = C),
      (t[33] = T),
      (t[34] = O),
      (t[35] = N),
      (t[36] = P))
    : (P = t[36]);
  let F;
  t[37] !== P || t[38] !== m || t[39] !== y
    ? ((F = (0, M.jsxs)(re, {
        as: `form`,
        className: `relative overflow-hidden rounded-[28px] bg-token-dropdown-background !p-0 text-token-foreground shadow-[0_8px_36px_rgba(0,0,0,0.12)]`,
        onSubmit: m,
        children: [y, P],
      })),
      (t[37] = P),
      (t[38] = m),
      (t[39] = y),
      (t[40] = F))
    : (F = t[40]);
  let I;
  return (
    t[41] !== a || t[42] !== u || t[43] !== F || t[44] !== p
      ? ((I = (0, M.jsx)(ne, {
          open: !0,
          onOpenChange: u,
          shouldIgnoreClickOutside: a,
          overlayClassName: `!bg-[color-mix(in_srgb,var(--color-token-bg-primary)_64%,transparent)]`,
          contentClassName: `max-h-[calc(100dvh_-_32px)] !overflow-visible !rounded-[28px] !bg-transparent !p-0 !shadow-none !backdrop-blur-none`,
          contentProps: p,
          showDialogClose: !1,
          children: F,
        })),
        (t[41] = a),
        (t[42] = u),
        (t[43] = F),
        (t[44] = p),
        (t[45] = I))
      : (I = t[45]),
    I
  );
}
var ge = `1038162578`,
  _e = `3648137593`,
  ve = `modal`;
function q(e) {
  let t = (0, A.c)(5),
    { data: n } = y(),
    r = n?.structure?.toLowerCase(),
    i = null;
  if (
    (r === `workspace` ? (i = _e) : r === `personal` && (i = ge), i == null)
  ) {
    let n;
    return (
      t[0] === e
        ? (n = t[1])
        : ((n = (0, M.jsx)(Y, { ...e, componentType: ve })),
          (t[0] = e),
          (t[1] = n)),
      n
    );
  }
  let a;
  return (
    t[2] !== i || t[3] !== e
      ? ((a = (0, M.jsx)(J, { ...e, layerName: i })),
        (t[2] = i),
        (t[3] = e),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function J(e) {
  let t = (0, A.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ layerName: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = _(n).get(`component_type`, ve) === `card_stack` ? `card_stack` : ve,
    a;
  return (
    t[3] !== i || t[4] !== r
      ? ((a = (0, M.jsx)(Y, { ...r, componentType: i })),
        (t[3] = i),
        (t[4] = r),
        (t[5] = a))
      : (a = t[5]),
    a
  );
}
function Y(e) {
  let t = (0, A.c)(27),
    {
      componentType: n,
      initialAvailableCount: r,
      isRateLimitReached: i,
      onClose: a,
      onResetComplete: o,
    } = e,
    s = ee(),
    [c] = (0, j.useState)(ye),
    [l, u] = (0, j.useState)(null),
    d = b(),
    f = d.isPending,
    p;
  t[0] !== f || t[1] !== a
    ? ((p = () => {
        f || a();
      }),
      (t[0] = f),
      (t[1] = a),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h;
  t[3] !== d ||
  t[4] !== r ||
  t[5] !== s ||
  t[6] !== f ||
  t[7] !== a ||
  t[8] !== o ||
  t[9] !== c
    ? ((h = async (e, t) => {
        let n = t === void 0 ? (r ?? 0) : t;
        if (!(f || n === 0)) {
          u(null);
          try {
            let t = await d.mutateAsync({ creditId: e, redeemRequestId: c });
            if (t.code !== `reset`) {
              u(X(t.code, s));
              return;
            }
            (a(), o(Math.max(n - 1, 0)));
          } catch {
            u(
              s.formatMessage({
                id: `codex.rateLimitResetModal.error`,
                defaultMessage: `Couldn’t reset usage. Please try again`,
                description: `Error shown when resetting Codex usage fails`,
              }),
            );
          }
        }
      }),
      (t[3] = d),
      (t[4] = r),
      (t[5] = s),
      (t[6] = f),
      (t[7] = a),
      (t[8] = o),
      (t[9] = c),
      (t[10] = h))
    : (h = t[10]);
  let g = h;
  if (n !== `card_stack`) {
    let e = r ?? 0,
      n = f || (r ?? 0) === 0,
      i;
    t[11] === g ? (i = t[12]) : ((i = () => g()), (t[11] = g), (t[12] = i));
    let a;
    return (
      t[13] !== l ||
      t[14] !== m ||
      t[15] !== f ||
      t[16] !== e ||
      t[17] !== n ||
      t[18] !== i
        ? ((a = (0, M.jsx)(he, {
            availableCount: e,
            errorMessage: l,
            isResetDisabled: n,
            isResetting: f,
            onClose: m,
            onReset: i,
          })),
          (t[13] = l),
          (t[14] = m),
          (t[15] = f),
          (t[16] = e),
          (t[17] = n),
          (t[18] = i),
          (t[19] = a))
        : (a = t[19]),
      a
    );
  }
  let _;
  return (
    t[20] !== l ||
    t[21] !== m ||
    t[22] !== g ||
    t[23] !== r ||
    t[24] !== i ||
    t[25] !== f
      ? ((_ = (0, M.jsx)(K, {
          errorMessage: l,
          initialAvailableCount: r,
          isRateLimitReached: i,
          isResetting: f,
          onClose: m,
          onReset: g,
        })),
        (t[20] = l),
        (t[21] = m),
        (t[22] = g),
        (t[23] = r),
        (t[24] = i),
        (t[25] = f),
        (t[26] = _))
      : (_ = t[26]),
    _
  );
}
function ye() {
  return crypto.randomUUID();
}
function X(e, t) {
  switch (e) {
    case `already_redeemed`:
      return t.formatMessage({
        id: `codex.rateLimitResetModal.alreadyRedeemed`,
        defaultMessage: `This reset was already used`,
        description: `Error shown when a Codex rate limit reset request was already redeemed`,
      });
    case `no_credit`:
      return t.formatMessage({
        id: `codex.rateLimitResetModal.noCredit`,
        defaultMessage: `No resets are available`,
        description: `Error shown when the user has no Codex rate limit resets available`,
      });
    case `nothing_to_reset`:
      return t.formatMessage({
        id: `codex.rateLimitResetModal.nothingToReset`,
        defaultMessage: `Your usage does not need a reset right now`,
        description: `Error shown when the user's Codex usage does not need a rate limit reset`,
      });
  }
}
var be = (e) =>
    (0, M.jsxs)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, M.jsx)(`path`, {
          d: `M3.333 8.333h13.334v8.334H3.333V8.333Z`,
          stroke: `currentColor`,
          strokeWidth: 1.5,
          strokeLinejoin: `round`,
        }),
        (0, M.jsx)(`path`, {
          d: `M2.5 5.833h15v2.5h-15v-2.5Z`,
          stroke: `currentColor`,
          strokeWidth: 1.5,
          strokeLinejoin: `round`,
        }),
        (0, M.jsx)(`path`, {
          d: `M10 5.833v10.834`,
          stroke: `currentColor`,
          strokeWidth: 1.5,
          strokeLinecap: `round`,
        }),
        (0, M.jsx)(`path`, {
          d: `M10 5.833H7.917A2.083 2.083 0 1 1 10 3.75v2.083Z`,
          stroke: `currentColor`,
          strokeWidth: 1.5,
          strokeLinejoin: `round`,
        }),
        (0, M.jsx)(`path`, {
          d: `M10 5.833h2.083A2.083 2.083 0 1 0 10 3.75v2.083Z`,
          stroke: `currentColor`,
          strokeWidth: 1.5,
          strokeLinejoin: `round`,
        }),
      ],
    }),
  Z = {
    mark: `_mark_12b76_1`,
    markSuccess: `_markSuccess_12b76_5`,
    render: `_render_12b76_10`,
    markSubmitting: `_markSubmitting_12b76_14`,
    referralModalSubmittingHover: `_referralModalSubmittingHover_12b76_1`,
    renderSubmitting: `_renderSubmitting_12b76_18`,
    referralModalSubmittingTilt: `_referralModalSubmittingTilt_12b76_1`,
    markSendAnimating: `_markSendAnimating_12b76_22`,
    referralModalMarkSend: `_referralModalMarkSend_12b76_1`,
    renderSendAnimating: `_renderSendAnimating_12b76_26`,
    referralModalRenderSend: `_referralModalRenderSend_12b76_1`,
    backdrop: `_backdrop_12b76_30`,
    backdropSuccess: `_backdropSuccess_12b76_34`,
    backdropImage: `_backdropImage_12b76_38`,
    successBackdrop: `_successBackdrop_12b76_44`,
    successBackdropVisible: `_successBackdropVisible_12b76_49`,
    form: `_form_12b76_53`,
    formHidden: `_formHidden_12b76_61`,
    successPanel: `_successPanel_12b76_68`,
    successPanelVisible: `_successPanelVisible_12b76_76`,
    successIcon: `_successIcon_12b76_84`,
    successTitle: `_successTitle_12b76_85`,
    successDescription: `_successDescription_12b76_86`,
    successButton: `_successButton_12b76_87`,
    successIconVisible: `_successIconVisible_12b76_99`,
    successTitleVisible: `_successTitleVisible_12b76_100`,
    successDescriptionVisible: `_successDescriptionVisible_12b76_101`,
    successButtonVisible: `_successButtonVisible_12b76_102`,
    referralModalReducedMarkSend: `_referralModalReducedMarkSend_12b76_1`,
    referralModalReducedRenderSend: `_referralModalReducedRenderSend_12b76_1`,
  },
  xe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  Se = 100,
  Ce = 1,
  we = 5,
  Te = t({
    detail: n([
      i(),
      t({ message: i().optional(), failed_emails: r(i()).optional() }),
    ]).optional(),
  });
function Ee(e) {
  let t = (0, A.c)(241),
    {
      grantAmount: n,
      onClose: r,
      referralRedemptionAction: i,
      referralBeaconType: a,
      referralGrantType: o,
      referralKey: l,
    } = e,
    u = ee(),
    m = p(g),
    { data: h } = y(),
    _ = (0, j.useId)(),
    b = (0, j.useId)(),
    [x, C] = (0, j.useState)(``),
    re;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = []), (t[0] = re))
    : (re = t[0]);
  let [E, k] = (0, j.useState)(re),
    N;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = []), (t[1] = N))
    : (N = t[1]);
  let [P, F] = (0, j.useState)(N),
    [I, ae] = (0, j.useState)(`idle`),
    [L, R] = (0, j.useState)(null),
    oe = v(),
    se;
  t[2] === x ? (se = t[3]) : ((se = x.trim()), (t[2] = x), (t[3] = se));
  let ce = se.length > 0,
    le = E.length > 0,
    z = !(E.length < we),
    B = oe.isPending || I === `submitting`,
    V = I === `sendAnimation`,
    H = I === `success`,
    U = B || V,
    W = U || H,
    ue = L?.type === `error`,
    de = L?.type === `error` && L.reason === `maxEmails`,
    fe = `${_}-status`,
    pe;
  t[4] === h?.structure
    ? (pe = t[5])
    : ((pe = h?.structure?.toLowerCase()), (t[4] = h?.structure), (t[5] = pe));
  let G = pe === `personal`,
    K;
  t[6] !== z || t[7] !== u || t[8] !== L || t[9] !== G
    ? ((K = L?.type === `error` ? L.message : z ? Be(u, G) : null),
      (t[6] = z),
      (t[7] = u),
      (t[8] = L),
      (t[9] = G),
      (t[10] = K))
    : (K = t[10]);
  let me = K,
    he = me == null ? void 0 : fe,
    ge;
  t[11] === P ? (ge = t[12]) : ((ge = new Set(P)), (t[11] = P), (t[12] = ge));
  let _e = ge,
    ve;
  t[13] === o ? (ve = t[14]) : ((ve = Le(o)), (t[13] = o), (t[14] = ve));
  let q = ve,
    J = n ?? (q === `rateLimitReset` ? Ce : Se),
    Y = J * 2,
    ye;
  t[15] !== m || t[16] !== a || t[17] !== l || t[18] !== q
    ? ((ye = (e) => {
        m.trackStructuredEvent(s, {
          ...e,
          referralBeaconType: a ?? void 0,
          referralRewardType: q,
          referralKey: l,
        });
      }),
      (t[15] = m),
      (t[16] = a),
      (t[17] = l),
      (t[18] = q),
      (t[19] = ye))
    : (ye = t[19]);
  let X = ye,
    xe;
  t[20] === X
    ? (xe = t[21])
    : ((xe = () => {
        X({ action: c.CODEX_REFERRAL_INVITE_MODAL_ACTION_SHOWN });
      }),
      (t[20] = X),
      (t[21] = xe));
  let Te = (0, j.useEffectEvent)(xe),
    Ee;
  t[22] === Te
    ? (Ee = t[23])
    : ((Ee = () => {
        Te();
      }),
      (t[22] = Te),
      (t[23] = Ee));
  let Q;
  (t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = []), (t[24] = Q))
    : (Q = t[24]),
    (0, j.useEffect)(Ee, Q));
  let ze;
  t[25] !== U || t[26] !== X || t[27] !== r
    ? ((ze = () => {
        U ||
          (X({ action: c.CODEX_REFERRAL_INVITE_MODAL_ACTION_CLOSE_CLICKED }),
          r());
      }),
      (t[25] = U),
      (t[26] = X),
      (t[27] = r),
      (t[28] = ze))
    : (ze = t[28]);
  let We = ze,
    Ge;
  t[29] !== E || t[30] !== u || t[31] !== G
    ? ((Ge = (e) => {
        let t = Re(e);
        if (t.length === 0) return { blockedByLimit: !1, emails: E };
        let n = new Set(E.map(je)),
          r = t.filter((e) => {
            let t = e.toLowerCase();
            return n.has(t) ? !1 : (n.add(t), !0);
          }),
          i = we - E.length,
          a = r.slice(0, i),
          o = r.slice(i),
          s = [...E, ...a],
          c = s.filter(Ae);
        return (
          k(s),
          C(o.join(`, `)),
          F(c),
          c.length > 0
            ? R({ type: `error`, message: Ve(c, u), reason: `invalidEmails` })
            : o.length > 0
              ? R({ type: `error`, message: Be(u, G), reason: `maxEmails` })
              : R(null),
          { blockedByLimit: o.length > 0, emails: s }
        );
      }),
      (t[29] = E),
      (t[30] = u),
      (t[31] = G),
      (t[32] = Ge))
    : (Ge = t[32]);
  let $ = Ge,
    Ke;
  t[33] !== E || t[34] !== u
    ? ((Ke = (e) => {
        let t = E.filter((t) => t !== e),
          n = t.filter(ke);
        (k(t),
          F(n),
          n.length > 0
            ? R({ type: `error`, message: Ve(n, u), reason: `invalidEmails` })
            : R(null));
      }),
      (t[33] = E),
      (t[34] = u),
      (t[35] = Ke))
    : (Ke = t[35]);
  let qe = Ke,
    Je;
  t[36] !== $ ||
  t[37] !== x ||
  t[38] !== E ||
  t[39] !== ce ||
  t[40] !== u ||
  t[41] !== oe ||
  t[42] !== X ||
  t[43] !== l
    ? ((Je = async () => {
        (R(null), F([]));
        let e = ce ? $(x) : { blockedByLimit: !1, emails: E };
        if (e.blockedByLimit) return;
        let t = e.emails;
        if (t.length === 0) return;
        let n = t.filter(Oe);
        if (n.length > 0) {
          (F(n),
            R({ type: `error`, message: Ve(n, u), reason: `invalidEmails` }));
          return;
        }
        (X({
          action: c.CODEX_REFERRAL_INVITE_MODAL_ACTION_SEND_CLICKED,
          emailCount: t.length,
        }),
          ae(`submitting`));
        try {
          let e = await oe.mutateAsync({ emails: t, referralKey: l });
          (X({
            action: c.CODEX_REFERRAL_INVITE_MODAL_ACTION_SEND_SUCCEEDED,
            emailCount: e.invites.length,
          }),
            R({ type: `success`, emails: e.invites.map(De) }),
            ae(`sendAnimation`));
        } catch (e) {
          let n = Ue(e),
            r =
              n?.failedEmails != null && n.failedEmails.length > 0
                ? n.failedEmails
                : t;
          (ae(`idle`),
            F(r),
            n != null &&
              X({
                action: c.CODEX_REFERRAL_INVITE_MODAL_ACTION_BACKEND_ERROR,
                emailCount: t.length,
                failedEmailCount: r.length,
                errorType: n.backendErrorAnalytics.errorType,
                errorResponsibility:
                  n.backendErrorAnalytics.errorResponsibility,
                httpStatus: n.backendErrorAnalytics.httpStatus,
                hasBackendDetail: n.backendErrorAnalytics.hasBackendDetail,
              }),
            R({
              type: `error`,
              message: He(r, u, n?.message),
              reason: `failedInvite`,
            }));
        }
      }),
      (t[36] = $),
      (t[37] = x),
      (t[38] = E),
      (t[39] = ce),
      (t[40] = u),
      (t[41] = oe),
      (t[42] = X),
      (t[43] = l),
      (t[44] = Je))
    : (Je = t[44]);
  let Ye = Je,
    Xe;
  t[45] !== $ || t[46] !== x || t[47] !== E || t[48] !== Ye || t[49] !== qe
    ? ((Xe = (e) => {
        if (e.key === `Enter`) {
          if ((e.preventDefault(), Re(x).length === 0)) {
            Ye();
            return;
          }
          $(x);
          return;
        }
        if (e.key === `,`) {
          (e.preventDefault(), $(x));
          return;
        }
        if (e.key === `Backspace` && x.length === 0) {
          let e = E[E.length - 1];
          e != null && qe(e);
        }
      }),
      (t[45] = $),
      (t[46] = x),
      (t[47] = E),
      (t[48] = Ye),
      (t[49] = qe),
      (t[50] = Xe))
    : (Xe = t[50]);
  let Ze = Xe,
    Qe;
  t[51] === $
    ? (Qe = t[52])
    : ((Qe = (e) => {
        let t = e.clipboardData.getData(`text`);
        Re(t).length <= 1 || (e.preventDefault(), $(t));
      }),
      (t[51] = $),
      (t[52] = Qe));
  let $e = Qe,
    et;
  t[53] !== $ || t[54] !== x
    ? ((et = () => {
        $(x);
      }),
      (t[53] = $),
      (t[54] = x),
      (t[55] = et))
    : (et = t[55]);
  let tt = et,
    nt;
  t[56] === I
    ? (nt = t[57])
    : ((nt = () => {
        I === `sendAnimation` && ae(`success`);
      }),
      (t[56] = I),
      (t[57] = nt));
  let rt = nt,
    it;
  t[58] === We
    ? (it = t[59])
    : ((it = (e) => {
        e || We();
      }),
      (t[58] = We),
      (t[59] = it));
  let at;
  t[60] === U
    ? (at = t[61])
    : ((at = (e) => {
        U && e.preventDefault();
      }),
      (t[60] = U),
      (t[61] = at));
  let ot;
  t[62] !== b || t[63] !== at
    ? ((ot = { "aria-describedby": b, onEscapeKeyDown: at }),
      (t[62] = b),
      (t[63] = at),
      (t[64] = ot))
    : (ot = t[64]);
  let st;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = d(
        `relative isolate h-full w-full overflow-hidden rounded-[24px] bg-[var(--referral-modal-surface)] text-[var(--referral-modal-primary)] shadow-[0_4px_32px_rgba(0,0,0,0.1)] transition-colors duration-300`,
        `[--referral-modal-surface:var(--color-token-dropdown-background)] [--referral-modal-primary:var(--color-token-text-primary)] [--referral-modal-secondary:var(--color-token-text-secondary)] [--referral-modal-border:var(--color-token-border)] [--referral-modal-focus:var(--color-token-focus-border)] [--referral-modal-button-background:var(--color-token-foreground)] [--referral-modal-button-foreground:var(--color-token-dropdown-background)] [--referral-modal-reward-background:#eeedff] [--referral-modal-reward-foreground:#4f46e5]`,
        `[.dark_&]:[--referral-modal-reward-background:color-mix(in_srgb,#4f46e5_24%,transparent)] [.dark_&]:[--referral-modal-reward-foreground:#a5b4fc] [.electron-dark_&]:[--referral-modal-reward-background:color-mix(in_srgb,#4f46e5_24%,transparent)] [.electron-dark_&]:[--referral-modal-reward-foreground:#a5b4fc]`,
      )),
      (t[65] = st))
    : (st = t[65]);
  let ct = H && Z.backdropSuccess,
    lt;
  t[66] === ct
    ? (lt = t[67])
    : ((lt = d(
        Z.backdrop,
        `pointer-events-none absolute inset-0 z-0 bg-white`,
        ct,
      )),
      (t[66] = ct),
      (t[67] = lt));
  let ut;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = (0, M.jsx)(`img`, {
        alt: ``,
        className: d(Z.backdropImage, `size-full object-cover object-center`),
        draggable: !1,
        src: T,
      })),
      (t[68] = ut))
    : (ut = t[68]);
  let dt;
  t[69] === lt
    ? (dt = t[70])
    : ((dt = (0, M.jsx)(`div`, {
        "aria-hidden": !0,
        className: lt,
        children: ut,
      })),
      (t[69] = lt),
      (t[70] = dt));
  let ft = H && Z.successBackdropVisible,
    pt;
  t[71] === ft
    ? (pt = t[72])
    : ((pt = d(
        Z.successBackdrop,
        `pointer-events-none absolute inset-0 z-0 bg-[var(--referral-modal-surface)]`,
        ft,
      )),
      (t[71] = ft),
      (t[72] = pt));
  let mt;
  t[73] === pt
    ? (mt = t[74])
    : ((mt = (0, M.jsx)(`div`, { "aria-hidden": !0, className: pt })),
      (t[73] = pt),
      (t[74] = mt));
  let ht;
  t[75] !== L?.type || t[76] !== G || t[77] !== H
    ? ((ht = (0, M.jsx)(w, {
        asChild: !0,
        children: (0, M.jsx)(`h2`, {
          className: `sr-only`,
          children:
            H && L?.type === `success`
              ? (0, M.jsx)(Fe, {})
              : (0, M.jsx)(Me, { isPersonalAccount: G }),
        }),
      })),
      (t[75] = L?.type),
      (t[76] = G),
      (t[77] = H),
      (t[78] = ht))
    : (ht = t[78]);
  let gt = B && Z.markSubmitting,
    _t = V && Z.markSendAnimating,
    vt = H && Z.markSuccess,
    yt;
  t[79] !== gt || t[80] !== _t || t[81] !== vt
    ? ((yt = d(
        Z.mark,
        `absolute left-[calc(50%_-_62px)] top-[calc(50%_-_62px)] size-[124px]`,
        gt,
        _t,
        vt,
      )),
      (t[79] = gt),
      (t[80] = _t),
      (t[81] = vt),
      (t[82] = yt))
    : (yt = t[82]);
  let bt = B && Z.renderSubmitting,
    xt = V && Z.renderSendAnimating,
    St;
  t[83] !== bt || t[84] !== xt
    ? ((St = d(
        Z.render,
        `block size-full object-contain drop-shadow-[0_2px_5px_rgba(44,94,201,0.23)]`,
        bt,
        xt,
      )),
      (t[83] = bt),
      (t[84] = xt),
      (t[85] = St))
    : (St = t[85]);
  let Ct;
  t[86] !== rt || t[87] !== St
    ? ((Ct = (0, M.jsx)(`img`, {
        alt: ``,
        className: St,
        draggable: !1,
        onAnimationEnd: rt,
        src: D,
      })),
      (t[86] = rt),
      (t[87] = St),
      (t[88] = Ct))
    : (Ct = t[88]);
  let wt;
  t[89] !== yt || t[90] !== Ct
    ? ((wt = (0, M.jsx)(`div`, { className: yt, children: Ct })),
      (t[89] = yt),
      (t[90] = Ct),
      (t[91] = wt))
    : (wt = t[91]);
  let Tt;
  t[92] !== We || t[93] !== u || t[94] !== U || t[95] !== V || t[96] !== H
    ? ((Tt = V
        ? null
        : (0, M.jsx)(`button`, {
            type: `button`,
            disabled: U,
            onClick: We,
            "aria-label": u.formatMessage({
              id: `codex.referralInviteModal.close`,
              defaultMessage: `Close`,
              description: `Aria label for closing the Codex referral invite modal`,
            }),
            className: d(
              `cursor-interaction absolute right-5 top-5 z-[3] inline-flex size-9 items-center justify-center rounded-full border-0 bg-transparent text-[#5d5d5d] transition-[opacity,background-color,color] duration-200 disabled:pointer-events-none disabled:opacity-30`,
              H
                ? `text-token-text-secondary hover:bg-token-bg-primary/60 hover:text-token-text-primary`
                : `hover:bg-[rgba(255,255,255,0.48)] hover:text-[#202123]`,
            ),
            children: (0, M.jsx)(te, { className: `size-4 stroke-[2.4]` }),
          })),
      (t[92] = We),
      (t[93] = u),
      (t[94] = U),
      (t[95] = V),
      (t[96] = H),
      (t[97] = Tt))
    : (Tt = t[97]);
  let Et;
  t[98] !== wt || t[99] !== Tt
    ? ((Et = (0, M.jsxs)(`div`, {
        className: `relative z-[1] h-48`,
        "aria-hidden": !0,
        children: [wt, Tt],
      })),
      (t[98] = wt),
      (t[99] = Tt),
      (t[100] = Et))
    : (Et = t[100]);
  let Dt = V || H,
    Ot = (V || H) && `pointer-events-none`,
    kt = (V || H) && Z.formHidden,
    At;
  t[101] !== Ot || t[102] !== kt
    ? ((At = d(
        Z.form,
        `relative z-[1] flex flex-col gap-5 rounded-b-[24px] bg-[var(--referral-modal-surface)] px-6 pb-6 pt-6`,
        Ot,
        kt,
      )),
      (t[101] = Ot),
      (t[102] = kt),
      (t[103] = At))
    : (At = t[103]);
  let jt;
  t[104] === Ye
    ? (jt = t[105])
    : ((jt = (e) => {
        (e.preventDefault(), Ye());
      }),
      (t[104] = Ye),
      (t[105] = jt));
  let Mt;
  t[106] === G
    ? (Mt = t[107])
    : ((Mt = (0, M.jsx)(`h2`, {
        className: `heading-xl m-0 font-semibold text-[var(--referral-modal-primary)]`,
        children: (0, M.jsx)(Me, { isPersonalAccount: G }),
      })),
      (t[106] = G),
      (t[107] = Mt));
  let Nt = H ? void 0 : b,
    Pt;
  t[108] !== G || t[109] !== q || t[110] !== J || t[111] !== Y
    ? ((Pt = (0, M.jsx)(Ne, {
        credits: J,
        grantAmount: J,
        isPersonalAccount: G,
        rewardType: q,
        totalCredits: Y,
      })),
      (t[108] = G),
      (t[109] = q),
      (t[110] = J),
      (t[111] = Y),
      (t[112] = Pt))
    : (Pt = t[112]);
  let Ft;
  t[113] !== Nt || t[114] !== Pt
    ? ((Ft = (0, M.jsx)(ie, {
        className: `m-0 max-w-[400px] text-base leading-normal tracking-normal text-[var(--referral-modal-secondary)]`,
        id: Nt,
        children: Pt,
      })),
      (t[113] = Nt),
      (t[114] = Pt),
      (t[115] = Ft))
    : (Ft = t[115]);
  let It;
  t[116] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((It = (0, M.jsx)(be, { className: `size-3.5` })), (t[116] = It))
    : (It = t[116]);
  let Lt;
  t[117] !== q || t[118] !== J
    ? ((Lt = (0, M.jsxs)(`div`, {
        className: `inline-flex h-7 items-center gap-1.5 rounded-full bg-[var(--referral-modal-reward-background)] px-2.5 text-xs leading-4 font-medium text-[var(--referral-modal-reward-foreground)]`,
        children: [It, (0, M.jsx)(Pe, { grantAmount: J, rewardType: q })],
      })),
      (t[117] = q),
      (t[118] = J),
      (t[119] = Lt))
    : (Lt = t[119]);
  let Rt;
  t[120] !== Mt || t[121] !== Ft || t[122] !== Lt
    ? ((Rt = (0, M.jsxs)(`div`, {
        className: `flex flex-col items-center gap-3 text-center`,
        children: [Mt, Ft, Lt],
      })),
      (t[120] = Mt),
      (t[121] = Ft),
      (t[122] = Lt),
      (t[123] = Rt))
    : (Rt = t[123]);
  let zt;
  t[124] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = (0, M.jsx)(f, {
        id: `codex.referralInviteModal.emailLabel`,
        defaultMessage: `Email`,
        description: `Label for the email field in the Codex referral invite modal`,
      })),
      (t[124] = zt))
    : (zt = t[124]);
  let Bt;
  t[125] === _
    ? (Bt = t[126])
    : ((Bt = (0, M.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: _,
        children: zt,
      })),
      (t[125] = _),
      (t[126] = Bt));
  let Vt =
      ue &&
      `border-token-error-foreground shadow-[0_0_0_2px_color-mix(in_srgb,var(--color-token-error-foreground)_18%,transparent)]`,
    Ht;
  t[127] === Vt
    ? (Ht = t[128])
    : ((Ht = d(
        `flex min-h-11 w-full flex-wrap items-center gap-1.5 rounded-lg border border-[var(--referral-modal-border)] bg-token-input-background px-2 py-1.5 outline-none focus-within:border-[var(--referral-modal-focus)]`,
        Vt,
      )),
      (t[127] = Vt),
      (t[128] = Ht));
  let Ut;
  if (
    t[129] !== E ||
    t[130] !== _e ||
    t[131] !== u ||
    t[132] !== W ||
    t[133] !== qe
  ) {
    let e;
    (t[135] !== _e || t[136] !== u || t[137] !== W || t[138] !== qe
      ? ((e = (e) =>
          (0, M.jsxs)(
            `span`,
            {
              className: d(
                `inline-flex min-h-7 max-w-full items-center gap-1.5 rounded-lg bg-[color-mix(in_srgb,var(--referral-modal-primary)_7%,transparent)] py-0 pl-2.5 pr-1.5 text-sm leading-5 text-[var(--referral-modal-primary)]`,
                _e.has(e) &&
                  `bg-[color-mix(in_srgb,var(--color-token-error-foreground)_12%,transparent)] text-token-error-foreground shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--color-token-error-foreground)_30%,transparent)]`,
              ),
              children: [
                (0, M.jsx)(`span`, {
                  className: `overflow-hidden text-ellipsis whitespace-nowrap`,
                  children: e,
                }),
                (0, M.jsx)(`button`, {
                  "aria-label": u.formatMessage(
                    {
                      id: `codex.referralInviteModal.removeEmail`,
                      defaultMessage: `Remove {email}`,
                      description: `Aria label for removing an email from the Codex referral invite modal`,
                    },
                    { email: e },
                  ),
                  className: d(
                    `cursor-interaction inline-flex size-[18px] items-center justify-center rounded-full border-0 bg-transparent p-0 text-current disabled:cursor-default disabled:opacity-50`,
                  ),
                  disabled: W,
                  onClick: () => {
                    qe(e);
                  },
                  type: `button`,
                  children: (0, M.jsx)(te, {
                    className: `size-3.5 stroke-[2.4]`,
                  }),
                }),
              ],
            },
            e,
          )),
        (t[135] = _e),
        (t[136] = u),
        (t[137] = W),
        (t[138] = qe),
        (t[139] = e))
      : (e = t[139]),
      (Ut = E.map(e)),
      (t[129] = E),
      (t[130] = _e),
      (t[131] = u),
      (t[132] = W),
      (t[133] = qe),
      (t[134] = Ut));
  } else Ut = t[134];
  let Wt;
  t[140] !== de || t[141] !== z || t[142] !== u || t[143] !== G
    ? ((Wt = (e) => {
        let t = e.target.value;
        (C(t),
          z && t.trim().length > 0
            ? R({ type: `error`, message: Be(u, G), reason: `maxEmails` })
            : de && R(null));
      }),
      (t[140] = de),
      (t[141] = z),
      (t[142] = u),
      (t[143] = G),
      (t[144] = Wt))
    : (Wt = t[144]);
  let Gt;
  t[145] !== le || t[146] !== z || t[147] !== u
    ? ((Gt = z
        ? u.formatMessage({
            id: `codex.referralInviteModal.maxEmailsPlaceholder`,
            defaultMessage: `Maximum reached`,
            description: `Placeholder shown when the Codex referral invite modal email input has reached the maximum number of emails`,
          })
        : le
          ? void 0
          : u.formatMessage({
              id: `codex.referralInviteModal.emailPlaceholder`,
              defaultMessage: `Add emails`,
              description: `Placeholder for the email field in the Codex referral invite modal`,
            })),
      (t[145] = le),
      (t[146] = z),
      (t[147] = u),
      (t[148] = Gt))
    : (Gt = t[148]);
  let Kt;
  t[149] !== he ||
  t[150] !== x ||
  t[151] !== _ ||
  t[152] !== tt ||
  t[153] !== Ze ||
  t[154] !== $e ||
  t[155] !== ue ||
  t[156] !== W ||
  t[157] !== Wt ||
  t[158] !== Gt
    ? ((Kt = (0, M.jsx)(`input`, {
        autoFocus: !0,
        "aria-describedby": he,
        "aria-invalid": ue,
        className: `h-8 min-w-[120px] flex-[1_1_140px] border-0 bg-transparent px-1 py-0 text-sm leading-5 text-token-input-foreground caret-[var(--referral-modal-primary)] outline-none placeholder:text-token-input-placeholder-foreground disabled:opacity-70`,
        disabled: W,
        id: _,
        inputMode: `email`,
        onBlur: tt,
        onChange: Wt,
        onKeyDown: Ze,
        onPaste: $e,
        placeholder: Gt,
        type: `text`,
        value: x,
      })),
      (t[149] = he),
      (t[150] = x),
      (t[151] = _),
      (t[152] = tt),
      (t[153] = Ze),
      (t[154] = $e),
      (t[155] = ue),
      (t[156] = W),
      (t[157] = Wt),
      (t[158] = Gt),
      (t[159] = Kt))
    : (Kt = t[159]);
  let qt;
  t[160] !== ue || t[161] !== Ht || t[162] !== Ut || t[163] !== Kt
    ? ((qt = (0, M.jsxs)(`div`, {
        "aria-invalid": ue,
        className: Ht,
        children: [Ut, Kt],
      })),
      (t[160] = ue),
      (t[161] = Ht),
      (t[162] = Ut),
      (t[163] = Kt),
      (t[164] = qt))
    : (qt = t[164]);
  let Jt;
  t[165] !== me || t[166] !== ue || t[167] !== fe
    ? ((Jt =
        me == null
          ? null
          : (0, M.jsx)(`p`, {
              "aria-live": `polite`,
              className: d(
                `m-0 text-xs leading-normal`,
                ue
                  ? `text-token-error-foreground`
                  : `text-[var(--referral-modal-secondary)]`,
              ),
              id: fe,
              children: me,
            })),
      (t[165] = me),
      (t[166] = ue),
      (t[167] = fe),
      (t[168] = Jt))
    : (Jt = t[168]);
  let Yt;
  t[169] !== qt || t[170] !== Jt
    ? ((Yt = (0, M.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [qt, Jt],
      })),
      (t[169] = qt),
      (t[170] = Jt),
      (t[171] = Yt))
    : (Yt = t[171]);
  let Xt = (!le && !ce) || W,
    Zt;
  t[172] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Zt = (0, M.jsx)(f, {
        id: `codex.referralInviteModal.send`,
        defaultMessage: `Send`,
        description: `Send button label in the Codex referral invite modal`,
      })),
      (t[172] = Zt))
    : (Zt = t[172]);
  let Qt;
  t[173] !== B || t[174] !== Xt
    ? ((Qt = (0, M.jsx)(S, {
        className: `h-10 w-full justify-center border-0 bg-[var(--referral-modal-button-background)] text-[var(--referral-modal-button-foreground)] hover:bg-[color-mix(in_srgb,var(--referral-modal-button-background)_80%,transparent)]`,
        disabled: Xt,
        loading: B,
        type: `submit`,
        children: Zt,
      })),
      (t[173] = B),
      (t[174] = Xt),
      (t[175] = Qt))
    : (Qt = t[175]);
  let $t;
  t[176] !== Bt || t[177] !== Yt || t[178] !== Qt
    ? (($t = (0, M.jsxs)(`div`, {
        className: `flex flex-col gap-6`,
        children: [Bt, Yt, Qt],
      })),
      (t[176] = Bt),
      (t[177] = Yt),
      (t[178] = Qt),
      (t[179] = $t))
    : ($t = t[179]);
  let en;
  t[180] !== Dt ||
  t[181] !== At ||
  t[182] !== jt ||
  t[183] !== Rt ||
  t[184] !== $t
    ? ((en = (0, M.jsxs)(`form`, {
        "aria-hidden": Dt,
        className: At,
        noValidate: !0,
        onSubmit: jt,
        children: [Rt, $t],
      })),
      (t[180] = Dt),
      (t[181] = At),
      (t[182] = jt),
      (t[183] = Rt),
      (t[184] = $t),
      (t[185] = en))
    : (en = t[185]);
  let tn = !H,
    nn = H && Z.successPanelVisible,
    rn;
  t[186] === nn
    ? (rn = t[187])
    : ((rn = d(
        Z.successPanel,
        `pointer-events-none absolute inset-0 z-[2] flex size-full flex-col items-center justify-start gap-3 px-6 pt-28 pb-6`,
        nn,
      )),
      (t[186] = nn),
      (t[187] = rn));
  let an = H && Z.successIconVisible,
    on;
  t[188] === an
    ? (on = t[189])
    : ((on = d(
        Z.successIcon,
        `flex size-10 items-center justify-center rounded-full bg-[var(--referral-modal-button-background)] text-[var(--referral-modal-button-foreground)]`,
        an,
      )),
      (t[188] = an),
      (t[189] = on));
  let sn;
  t[190] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((sn = (0, M.jsx)(O, { className: `size-5` })), (t[190] = sn))
    : (sn = t[190]);
  let cn;
  t[191] === on
    ? (cn = t[192])
    : ((cn = (0, M.jsx)(`div`, {
        className: on,
        "aria-hidden": `true`,
        children: sn,
      })),
      (t[191] = on),
      (t[192] = cn));
  let ln = H && Z.successTitleVisible,
    un;
  t[193] === ln
    ? (un = t[194])
    : ((un = d(
        Z.successTitle,
        `heading-xl m-0 w-[min(100%,400px)] text-center font-semibold text-[var(--referral-modal-primary)]`,
        ln,
      )),
      (t[193] = ln),
      (t[194] = un));
  let dn;
  t[195] === L?.type
    ? (dn = t[196])
    : ((dn = L?.type === `success` ? (0, M.jsx)(Fe, {}) : null),
      (t[195] = L?.type),
      (t[196] = dn));
  let fn;
  t[197] !== un || t[198] !== dn
    ? ((fn = (0, M.jsx)(`h2`, { className: un, children: dn })),
      (t[197] = un),
      (t[198] = dn),
      (t[199] = fn))
    : (fn = t[199]);
  let pn = H && Z.successDescriptionVisible,
    mn;
  t[200] === pn
    ? (mn = t[201])
    : ((mn = d(
        Z.successDescription,
        `m-0 w-[min(100%,400px)] text-center text-base leading-normal tracking-normal text-[var(--referral-modal-secondary)]`,
        pn,
      )),
      (t[200] = pn),
      (t[201] = mn));
  let hn = H ? b : void 0,
    gn = L?.type === `success` ? L.emails.length : 1,
    _n;
  t[202] !== G || t[203] !== i || t[204] !== q || t[205] !== J || t[206] !== gn
    ? ((_n = (0, M.jsx)(Ie, {
        count: gn,
        credits: J,
        grantAmount: J,
        isPersonalAccount: G,
        redemptionAction: i,
        rewardType: q,
      })),
      (t[202] = G),
      (t[203] = i),
      (t[204] = q),
      (t[205] = J),
      (t[206] = gn),
      (t[207] = _n))
    : (_n = t[207]);
  let vn;
  t[208] !== mn || t[209] !== hn || t[210] !== _n
    ? ((vn = (0, M.jsx)(`p`, { className: mn, id: hn, children: _n })),
      (t[208] = mn),
      (t[209] = hn),
      (t[210] = _n),
      (t[211] = vn))
    : (vn = t[211]);
  let yn = H ? `pointer-events-auto` : `pointer-events-none`,
    bn = H && Z.successButtonVisible,
    xn;
  t[212] !== yn || t[213] !== bn
    ? ((xn = d(
        Z.successButton,
        `mt-auto h-10 w-full justify-center border-0 bg-[var(--referral-modal-button-background)] text-[var(--referral-modal-button-foreground)] hover:bg-[color-mix(in_srgb,var(--referral-modal-button-background)_80%,transparent)]`,
        yn,
        bn,
      )),
      (t[212] = yn),
      (t[213] = bn),
      (t[214] = xn))
    : (xn = t[214]);
  let Sn;
  t[215] !== X || t[216] !== r
    ? ((Sn = () => {
        (X({ action: c.CODEX_REFERRAL_INVITE_MODAL_ACTION_DONE_CLICKED }), r());
      }),
      (t[215] = X),
      (t[216] = r),
      (t[217] = Sn))
    : (Sn = t[217]);
  let Cn;
  t[218] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Cn = (0, M.jsx)(f, {
        id: `codex.referralInviteModal.done`,
        defaultMessage: `Done`,
        description: `Button label for closing the Codex referral invite success modal`,
      })),
      (t[218] = Cn))
    : (Cn = t[218]);
  let wn;
  t[219] !== xn || t[220] !== Sn
    ? ((wn = (0, M.jsx)(S, {
        className: xn,
        onClick: Sn,
        type: `button`,
        children: Cn,
      })),
      (t[219] = xn),
      (t[220] = Sn),
      (t[221] = wn))
    : (wn = t[221]);
  let Tn;
  t[222] !== tn ||
  t[223] !== rn ||
  t[224] !== cn ||
  t[225] !== fn ||
  t[226] !== vn ||
  t[227] !== wn
    ? ((Tn = (0, M.jsxs)(`div`, {
        "aria-hidden": tn,
        "aria-live": `polite`,
        className: rn,
        children: [cn, fn, vn, wn],
      })),
      (t[222] = tn),
      (t[223] = rn),
      (t[224] = cn),
      (t[225] = fn),
      (t[226] = vn),
      (t[227] = wn),
      (t[228] = Tn))
    : (Tn = t[228]);
  let En;
  t[229] !== dt ||
  t[230] !== mt ||
  t[231] !== ht ||
  t[232] !== Et ||
  t[233] !== en ||
  t[234] !== Tn
    ? ((En = (0, M.jsxs)(`section`, {
        className: st,
        children: [dt, mt, ht, Et, en, Tn],
      })),
      (t[229] = dt),
      (t[230] = mt),
      (t[231] = ht),
      (t[232] = Et),
      (t[233] = en),
      (t[234] = Tn),
      (t[235] = En))
    : (En = t[235]);
  let Dn;
  return (
    t[236] !== U || t[237] !== it || t[238] !== ot || t[239] !== En
      ? ((Dn = (0, M.jsx)(ne, {
          open: !0,
          onOpenChange: it,
          shouldIgnoreClickOutside: U,
          size: `default`,
          overlayClassName: `!bg-[color-mix(in_srgb,var(--color-token-bg-primary)_64%,transparent)]`,
          contentClassName: `max-h-[calc(100dvh_-_32px)] !overflow-visible !rounded-[24px] !bg-transparent !p-0 !shadow-none !backdrop-blur-none`,
          contentProps: ot,
          showDialogClose: !1,
          children: En,
        })),
        (t[236] = U),
        (t[237] = it),
        (t[238] = ot),
        (t[239] = En),
        (t[240] = Dn))
      : (Dn = t[240]),
    Dn
  );
}
function De(e) {
  return e.email;
}
function Oe(e) {
  return !ze(e);
}
function ke(e) {
  return !ze(e);
}
function Ae(e) {
  return !ze(e);
}
function je(e) {
  return e.toLowerCase();
}
function Me(e) {
  let t = (0, A.c)(2),
    { isPersonalAccount: n } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, M.jsx)(f, {
            id: `codex.referralInviteModal.personalTitle`,
            defaultMessage: `Invite a friend`,
            description: `Title for the Codex referral invite modal in a personal account`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let r;
  return (
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, M.jsx)(f, {
          id: `codex.referralInviteModal.workspaceTitle`,
          defaultMessage: `Invite a coworker`,
          description: `Title for the Codex referral invite modal in a workspace account`,
        })),
        (t[1] = r))
      : (r = t[1]),
    r
  );
}
function Ne(e) {
  let t = (0, A.c)(9),
    {
      credits: n,
      grantAmount: r,
      isPersonalAccount: i,
      rewardType: a,
      totalCredits: o,
    } = e;
  if (a === `rateLimitReset`) {
    if (i) {
      let e;
      return (
        t[0] === r
          ? (e = t[1])
          : ((e = (0, M.jsx)(f, {
              id: `codex.referralInviteModal.rateLimitDescription.personal`,
              defaultMessage: `When your friend joins and sends their first message, you’ll get {grantAmount, plural, one {a rate limit reset} other {{grantAmount, number} rate limit resets}} to use any time you want`,
              description: `Description for the Codex referral invite modal in a personal account when the referral reward is a rate limit reset`,
              values: { grantAmount: r },
            })),
            (t[0] = r),
            (t[1] = e)),
        e
      );
    }
    let e;
    return (
      t[2] === r
        ? (e = t[3])
        : ((e = (0, M.jsx)(f, {
            id: `codex.referralInviteModal.rateLimitDescription.workspace`,
            defaultMessage: `When your coworker joins and sends their first message, you’ll get {grantAmount, plural, one {a rate limit reset} other {{grantAmount, number} rate limit resets}} to use any time you want`,
            description: `Description for the Codex referral invite modal in a workspace account when the referral reward is a rate limit reset`,
            values: { grantAmount: r },
          })),
          (t[2] = r),
          (t[3] = e)),
      e
    );
  }
  if (i) {
    let e;
    return (
      t[4] === n
        ? (e = t[5])
        : ((e = (0, M.jsx)(f, {
            id: `codex.referralInviteModal.creditsDescription.personal`,
            defaultMessage: `When your friend joins and sends their first message, you’ll each get {credits, number} credits to use in Codex`,
            description: `Description for the Codex referral invite modal in a personal account when the referral reward is credits`,
            values: { credits: n },
          })),
          (t[4] = n),
          (t[5] = e)),
      e
    );
  }
  let s;
  return (
    t[6] !== n || t[7] !== o
      ? ((s = (0, M.jsx)(f, {
          id: `codex.referralInviteModal.creditsDescription.workspace`,
          defaultMessage: `When your coworker joins and sends their first message, you’ll each get {credits, number} credits ({totalCredits, number} total) added to the workspace pool`,
          description: `Description for the Codex referral invite modal in a workspace account when the referral reward is credits`,
          values: { credits: n, totalCredits: o },
        })),
        (t[6] = n),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function Pe(e) {
  let t = (0, A.c)(4),
    { grantAmount: n, rewardType: r } = e;
  if (r === `rateLimitReset`) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, M.jsx)(f, {
            id: `codex.referralInviteModal.rateLimitRewardPill`,
            defaultMessage: `{grantAmount, number} {grantAmount, plural, one {rate limit reset} other {rate limit resets}} per invite`,
            description: `Reward pill shown in the Codex referral invite modal when the referral reward is a rate limit reset`,
            values: { grantAmount: n },
          })),
          (t[0] = n),
          (t[1] = e)),
      e
    );
  }
  let i;
  return (
    t[2] === n
      ? (i = t[3])
      : ((i = (0, M.jsx)(f, {
          id: `codex.referralInviteModal.rewardPill`,
          defaultMessage: `Get {grantAmount, number} credits each`,
          description: `Reward pill shown in the Codex referral invite modal`,
          values: { grantAmount: n },
        })),
        (t[2] = n),
        (t[3] = i)),
    i
  );
}
function Fe() {
  let e = (0, A.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, M.jsx)(f, {
          id: `codex.referralInviteModal.successTitle`,
          defaultMessage: `Invite sent`,
          description: `Success message shown after one or more Codex referral invites are sent`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ie(e) {
  let t = (0, A.c)(24),
    {
      count: n,
      credits: r,
      grantAmount: i,
      isPersonalAccount: a,
      redemptionAction: o,
      rewardType: s,
    } = e;
  if (s === `rateLimitReset`) {
    if (o === `codex_login`) {
      if (a) {
        let e;
        t[0] === i
          ? (e = t[1])
          : ((e = (0, M.jsx)(Q, { grantAmount: i })), (t[0] = i), (t[1] = e));
        let r;
        return (
          t[2] !== n || t[3] !== e
            ? ((r = (0, M.jsx)(f, {
                id: `codex.referralInviteModal.rateLimitSuccessDescription.personal.codexLogin`,
                defaultMessage: `Once your {count, plural, one {friend logs} other {friends log}} into Codex, you’ll each get {reward} so you can get even more work done`,
                description: `Description shown after a Codex referral invite is sent in a personal account when the referral reward is a rate limit reset and the friend needs to log into Codex`,
                values: { count: n, reward: e },
              })),
              (t[2] = n),
              (t[3] = e),
              (t[4] = r))
            : (r = t[4]),
          r
        );
      }
      let e;
      t[5] === i
        ? (e = t[6])
        : ((e = (0, M.jsx)(Q, { grantAmount: i })), (t[5] = i), (t[6] = e));
      let r;
      return (
        t[7] !== n || t[8] !== e
          ? ((r = (0, M.jsx)(f, {
              id: `codex.referralInviteModal.rateLimitSuccessDescription.workspace.codexLogin`,
              defaultMessage: `Once your {count, plural, one {coworker logs} other {coworkers log}} into Codex, you’ll each get {reward} so you can get even more work done`,
              description: `Description shown after a Codex referral invite is sent in a workspace account when the referral reward is a rate limit reset and the coworker needs to log into Codex`,
              values: { count: n, reward: e },
            })),
            (t[7] = n),
            (t[8] = e),
            (t[9] = r))
          : (r = t[9]),
        r
      );
    }
    if (a) {
      let e;
      t[10] === i
        ? (e = t[11])
        : ((e = (0, M.jsx)(Q, { grantAmount: i })), (t[10] = i), (t[11] = e));
      let r;
      return (
        t[12] !== n || t[13] !== e
          ? ((r = (0, M.jsx)(f, {
              id: `codex.referralInviteModal.rateLimitSuccessDescription.personal`,
              defaultMessage: `Once your {count, plural, one {friend joins and sends} other {friends join and send}} their first message, you’ll each get {reward} so you can get even more work done`,
              description: `Description shown after a Codex referral invite is sent in a personal account when the referral reward is a rate limit reset`,
              values: { count: n, reward: e },
            })),
            (t[12] = n),
            (t[13] = e),
            (t[14] = r))
          : (r = t[14]),
        r
      );
    }
    let e;
    t[15] === i
      ? (e = t[16])
      : ((e = (0, M.jsx)(Q, { grantAmount: i })), (t[15] = i), (t[16] = e));
    let r;
    return (
      t[17] !== n || t[18] !== e
        ? ((r = (0, M.jsx)(f, {
            id: `codex.referralInviteModal.rateLimitSuccessDescription.workspace`,
            defaultMessage: `Once your {count, plural, one {coworker joins and sends} other {coworkers join and send}} their first message, you’ll each get {reward} so you can get even more work done`,
            description: `Description shown after a Codex referral invite is sent in a workspace account when the referral reward is a rate limit reset`,
            values: { count: n, reward: e },
          })),
          (t[17] = n),
          (t[18] = e),
          (t[19] = r))
        : (r = t[19]),
      r
    );
  }
  if (a) {
    let e;
    return (
      t[20] === r
        ? (e = t[21])
        : ((e = (0, M.jsx)(f, {
            id: `codex.referralInviteModal.creditsSuccessDescription.personal`,
            defaultMessage: `Once your friend joins and sends their first message, you’ll each get {credits, number} credits to use in Codex`,
            description: `Description shown after a Codex referral invite is sent in a personal account when the referral reward is credits`,
            values: { credits: r },
          })),
          (t[20] = r),
          (t[21] = e)),
      e
    );
  }
  let c;
  return (
    t[22] === r
      ? (c = t[23])
      : ((c = (0, M.jsx)(f, {
          id: `codex.referralInviteModal.creditsSuccessDescription.workspace`,
          defaultMessage: `Once your coworker joins and sends their first message, you’ll each get {credits, number} credits added to the workspace pool`,
          description: `Description shown after a Codex referral invite is sent in a workspace account when the referral reward is credits`,
          values: { credits: r },
        })),
        (t[22] = r),
        (t[23] = c)),
    c
  );
}
function Q(e) {
  let t = (0, A.c)(2),
    { grantAmount: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, M.jsx)(f, {
          id: `codex.referralInviteModal.rateLimitResetReward`,
          defaultMessage: `{grantAmount, plural, one {one rate limit reset} other {{grantAmount, number} rate limit resets}}`,
          description: `Rate limit reset reward amount in the Codex referral invite success modal`,
          values: { grantAmount: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Le(e) {
  switch (e) {
    case `rate_limit_reset_credit`:
      return `rateLimitReset`;
    case `workspace_credits`:
    case null:
    case void 0:
      return `credits`;
  }
}
function Re(e) {
  return e
    .split(/[\s,;]+/)
    .map((e) => e.trim())
    .filter((e) => e.length > 0);
}
function ze(e) {
  return xe.test(e);
}
function Be(e, t) {
  return t
    ? e.formatMessage(
        {
          id: `codex.referralInviteModal.maxEmailsError.personal`,
          defaultMessage: `You can invite up to {maxEmails, number} friends at a time. Remove one to add another.`,
          description: `Inline message shown when the Codex referral invite modal in a personal account reaches the maximum number of emails`,
        },
        { maxEmails: we },
      )
    : e.formatMessage(
        {
          id: `codex.referralInviteModal.maxEmailsError.workspace`,
          defaultMessage: `You can invite up to {maxEmails, number} coworkers at a time. Remove one to add another.`,
          description: `Inline message shown when the Codex referral invite modal in a workspace account reaches the maximum number of emails`,
        },
        { maxEmails: we },
      );
}
function Ve(e, t) {
  return t.formatMessage(
    {
      id: `codex.referralInviteModal.invalidEmailsError`,
      defaultMessage: `Fix these emails: {emails}`,
      description: `Error shown when one or more entered referral invite emails are invalid`,
    },
    { emails: e.join(`, `) },
  );
}
function He(e, t, n) {
  return n == null
    ? t.formatMessage(
        {
          id: `codex.referralInviteModal.failedEmailsError`,
          defaultMessage: `Couldn’t send invites to: {emails}`,
          description: `Error shown when one or more Codex referral invite emails fail to send`,
        },
        { emails: e.join(`, `) },
      )
    : t.formatMessage(
        {
          id: `codex.referralInviteModal.failedEmailsDetailedError`,
          defaultMessage: `{message}: {emails}`,
          description: `Error shown when the backend returns a specific reason that one or more Codex referral invite emails failed`,
        },
        { message: n, emails: e.join(`, `) },
      );
}
function Ue(e) {
  if (!(e instanceof m)) return null;
  try {
    let t = Te.safeParse(JSON.parse(e.message));
    if (!t.success)
      return {
        backendErrorAnalytics: We({ hasBackendDetail: !1, status: e.status }),
        failedEmails: void 0,
        message: void 0,
      };
    let n = t.data.detail != null;
    return typeof t.data.detail == `string`
      ? {
          backendErrorAnalytics: We({
            hasBackendDetail: n,
            message: t.data.detail,
            status: e.status,
          }),
          failedEmails: void 0,
          message: t.data.detail,
        }
      : {
          backendErrorAnalytics: We({
            hasBackendDetail: n,
            message: t.data.detail?.message,
            status: e.status,
          }),
          failedEmails: t.data.detail?.failed_emails,
          message: t.data.detail?.message,
        };
  } catch {
    return {
      backendErrorAnalytics: We({ hasBackendDetail: !1, status: e.status }),
      failedEmails: void 0,
      message: void 0,
    };
  }
}
function We({ hasBackendDetail: e, message: t, status: n }) {
  let r = Ge({ message: t, status: n });
  return {
    errorResponsibility: $(r),
    errorType: r,
    hasBackendDetail: e,
    httpStatus: n,
  };
}
function Ge({ message: e, status: t }) {
  return Ke(e)
    ? o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_REFERRAL_ALREADY_EXISTS
    : t === 400
      ? o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_VALIDATION_FAILED
      : t === 401
        ? o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_AUTHENTICATION_REQUIRED
        : t === 403
          ? o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_PERMISSION_DENIED
          : t === 409
            ? o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_REFERRAL_ALREADY_EXISTS
            : t === 429
              ? o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_RATE_LIMITED
              : t >= 500 && t < 600
                ? o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_BACKEND_ISSUE
                : o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_UNKNOWN_BACKEND_ERROR;
}
function $(e) {
  switch (e) {
    case o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_AUTHENTICATION_REQUIRED:
    case o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_PERMISSION_DENIED:
    case o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_RATE_LIMITED:
    case o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_REFERRAL_ALREADY_EXISTS:
    case o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_VALIDATION_FAILED:
      return a.CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_USER;
    case o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_BACKEND_ISSUE:
    case o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_UNKNOWN_BACKEND_ERROR:
      return a.CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_SYSTEM;
    case o.CODEX_REFERRAL_INVITE_MODAL_BACKEND_ERROR_TYPE_UNSPECIFIED:
    case o.UNRECOGNIZED:
      return a.CODEX_REFERRAL_INVITE_MODAL_ERROR_RESPONSIBILITY_UNSPECIFIED;
  }
}
function Ke(e) {
  return e == null ? !1 : /already/i.test(e) && /(referral|invite)/i.test(e);
}
export { q as n, Ee as t };
//# sourceMappingURL=referral-invite-modal-CeoKsCTr.js.map
