import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { t as r } from "./clsx-BcPLHiun.js";
import {
  a as i,
  c as a,
  i as o,
  l as s,
  n as c,
  o as l,
  r as u,
  s as d,
  t as ee,
  u as te,
} from "./dist-dALQ7PpJ.js";
import { G as ne, U as f, wt as p } from "./setting-storage.js";
import { n as re } from "./window-zoom-context.js";
import { t as ie } from "./tooltip-CDzchJxN.js";
import { t as ae } from "./use-stable-callback.js";
import { t as oe } from "./check-md.js";
import { t as se } from "./chevron-right.js";
var ce = p(),
  m = e(t(), 1),
  h = n();
function g(e, t) {
  return e.map((e) => {
    if (e.type === `separator`)
      return { ...e, nativeLabel: ``, submenu: void 0 };
    let n = e.submenu ? g(e.submenu, t) : void 0,
      r = e.message ? t(e.message, e.messageValues) : e.id,
      i = e.tooltipMessage
        ? t(e.tooltipMessage, e.tooltipMessageValues)
        : void 0;
    return { ...e, nativeLabel: r, nativeTooltip: i, submenu: n };
  });
}
function le(e) {
  return e.map((e) => ({
    id: e.id,
    type: e.type === `separator` ? `separator` : void 0,
    label:
      e.type === `separator`
        ? ``
        : e.type === `checkbox` && e.checked === !0
          ? `\u2713 ${e.nativeLabel}`
          : e.nativeLabel,
    icon: e.icon,
    enabled: e.enabled ?? !0,
    toolTip: e.nativeTooltip,
    submenu: e.submenu ? le(e.submenu) : void 0,
  }));
}
function ue(e, t) {
  for (let n of e)
    if (n.type !== `separator`) {
      if (n.id === t) return n;
      if (n.submenu) {
        let e = ue(n.submenu, t);
        if (e) return e;
      }
    }
}
function de(e) {
  return `then` in e && typeof e.then == `function`;
}
function fe(e) {
  let t = (0, ce.c)(83),
    {
      items: n,
      getItems: p,
      children: oe,
      disableNative: se,
      awaitBeforeOpen: fe,
      onBeforeOpen: _,
    } = e,
    v = fe === void 0 ? !0 : fe,
    y = ne(),
    b = re(),
    x = !se && window.electronBridge?.showContextMenu != null,
    S;
  t[0] === n ? (S = t[1]) : ((S = n ?? []), (t[0] = n), (t[1] = S));
  let C;
  t[2] !== y.formatMessage || t[3] !== S
    ? ((C = g(S, y.formatMessage)),
      (t[2] = y.formatMessage),
      (t[3] = S),
      (t[4] = C))
    : (C = t[4]);
  let [w, he] = m.useState(C),
    T;
  t[5] === y.formatMessage
    ? (T = t[6])
    : ((T = (e) => {
        let t = g(e, y.formatMessage);
        return (he(t), t);
      }),
      (t[5] = y.formatMessage),
      (t[6] = T));
  let E = T,
    D;
  t[7] !== p || t[8] !== n || t[9] !== E
    ? ((D = () => {
        let e = p ? p() : (n ?? []);
        return de(e) ? (he([]), e.then(E), []) : E(e);
      }),
      (t[7] = p),
      (t[8] = n),
      (t[9] = E),
      (t[10] = D))
    : (D = t[10]);
  let O = D,
    k;
  t[11] !== v || t[12] !== _ || t[13] !== O
    ? ((k = () => {
        if (!v) {
          let e = O(),
            t = _?.();
          return (t != null && Promise.resolve(t).then(O), e);
        }
        let e = _?.();
        return (e != null && Promise.resolve(e).then(O), O());
      }),
      (t[11] = v),
      (t[12] = _),
      (t[13] = O),
      (t[14] = k))
    : (k = t[14]);
  let A = k,
    j;
  t[15] !== p || t[16] !== n || t[17] !== _ || t[18] !== E
    ? ((j = async () => (await _?.(), E(await (p ? p() : (n ?? []))))),
      (t[15] = p),
      (t[16] = n),
      (t[17] = _),
      (t[18] = E),
      (t[19] = j))
    : (j = t[19]);
  let ge = j,
    M;
  t[20] !== p || t[21] !== y.formatMessage || t[22] !== n
    ? ((M = () => {
        p || he(g(n ?? [], y.formatMessage));
      }),
      (t[20] = p),
      (t[21] = y.formatMessage),
      (t[22] = n),
      (t[23] = M))
    : (M = t[23]);
  let N;
  (t[24] !== p || t[25] !== y || t[26] !== n
    ? ((N = [p, y, n]), (t[24] = p), (t[25] = y), (t[26] = n), (t[27] = N))
    : (N = t[27]),
    m.useEffect(M, N));
  let P;
  t[28] === w
    ? (P = t[29])
    : ((P = (e, t) => {
        ue(t === void 0 ? w : t, e)?.onSelect?.();
      }),
      (t[28] = w),
      (t[29] = P));
  let _e = P,
    F = pe,
    I;
  t[30] !== v || t[31] !== _e || t[32] !== A || t[33] !== ge || t[34] !== x
    ? ((I = async (e) => {
        if (!x) return;
        e.preventDefault();
        let t = v ? await ge() : A(),
          n = (await window.electronBridge?.showContextMenu?.(le(t)))?.id;
        n && _e(n, t);
      }),
      (t[30] = v),
      (t[31] = _e),
      (t[32] = A),
      (t[33] = ge),
      (t[34] = x),
      (t[35] = I))
    : (I = t[35]);
  let ve = ae(I),
    L = oe,
    ye = L.props.onContextMenu,
    R;
  t[36] !== ye || t[37] !== ve || t[38] !== x
    ? ((R = (e) => {
        if ((ye?.(e), x)) {
          ve(e);
          return;
        }
        e.stopPropagation();
      }),
      (t[36] = ye),
      (t[37] = ve),
      (t[38] = x),
      (t[39] = R))
    : (R = t[39]);
  let z = ae(R);
  if (x) {
    let e;
    if (t[40] !== L || t[41] !== z) {
      let n;
      (t[43] === z
        ? (n = t[44])
        : ((n = { onContextMenu: z }), (t[43] = z), (t[44] = n)),
        (e = m.cloneElement(L, n)),
        (t[40] = L),
        (t[41] = z),
        (t[42] = e));
    } else e = t[42];
    return e;
  }
  let B;
  if (t[45] !== L || t[46] !== z) {
    let e;
    (t[48] === z
      ? (e = t[49])
      : ((e = { onContextMenu: z }), (t[48] = z), (t[49] = e)),
      (B = m.cloneElement(L, e)),
      (t[45] = L),
      (t[46] = z),
      (t[47] = B));
  } else B = t[47];
  let V = B,
    H,
    U,
    W,
    G,
    K,
    q,
    J,
    Y,
    X;
  if (t[50] !== A || t[51] !== w || t[52] !== V || t[53] !== b) {
    let e = (t) =>
      t.map((t) =>
        t.type === `separator`
          ? (0, h.jsx)(
              l,
              { className: `mx-1 my-1 border-t border-token-border/60` },
              t.id,
            )
          : t.type === `checkbox`
            ? (0, h.jsx)(
                ie,
                {
                  tooltipContent: t.tooltipMessage
                    ? (0, h.jsx)(f, {
                        ...t.tooltipMessage,
                        values: t.tooltipMessageValues,
                      })
                    : null,
                  children: (0, h.jsx)(ee, {
                    checked: t.checked ?? !1,
                    className: r(
                      `text-token-foreground outline-hidden rounded-lg p-1.5 text-sm cursor-interaction hover:bg-token-list-hover-background focus:bg-token-list-hover-background`,
                      t.enabled === !1 && `cursor-default opacity-50`,
                    ),
                    disabled: t.enabled === !1,
                    onCheckedChange: () => {
                      t.onSelect?.();
                    },
                    children: (0, h.jsx)(me, {
                      checked: t.checked === !0,
                      label: F(t),
                      showCheckbox: !0,
                    }),
                  }),
                },
                t.id,
              )
            : t.submenu
              ? (0, h.jsxs)(
                  d,
                  {
                    children: [
                      (0, h.jsx)(s, {
                        className: `flex cursor-interaction items-center justify-between gap-1.5 rounded-lg p-1.5 text-sm text-token-foreground outline-hidden hover:bg-token-list-hover-background focus:bg-token-list-hover-background`,
                        disabled: t.enabled === !1,
                        children: (0, h.jsx)(me, {
                          icon: t.icon,
                          label: F(t),
                          showChevron: !0,
                        }),
                      }),
                      (0, h.jsx)(o, {
                        children: (0, h.jsx)(a, {
                          className: `z-50 m-px flex min-w-[200px] flex-col rounded-xl bg-token-dropdown-background/90 p-1 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-sm select-none`,
                          collisionPadding: 6,
                          style: { zoom: b === 1 ? void 0 : b },
                          children: e(t.submenu),
                        }),
                      }),
                    ],
                  },
                  t.id,
                )
              : (0, h.jsx)(
                  ie,
                  {
                    tooltipContent: t.tooltipMessage
                      ? (0, h.jsx)(f, {
                          ...t.tooltipMessage,
                          values: t.tooltipMessageValues,
                        })
                      : null,
                    children: (0, h.jsx)(u, {
                      className: r(
                        `text-token-foreground outline-hidden rounded-lg p-1.5 text-sm cursor-interaction hover:bg-token-list-hover-background focus:bg-token-list-hover-background`,
                        t.enabled === !1 && `cursor-default opacity-50`,
                      ),
                      onSelect: (e) => {
                        if (t.enabled === !1) {
                          e.preventDefault();
                          return;
                        }
                        t.onSelect?.();
                      },
                      "aria-disabled": t.enabled === !1,
                      children: (0, h.jsx)(me, { icon: t.icon, label: F(t) }),
                    }),
                  },
                  t.id,
                ),
      );
    ((W = i),
      t[63] === A
        ? (Y = t[64])
        : ((Y = (e) => {
            e && A();
          }),
          (t[63] = A),
          (t[64] = Y)),
      t[65] === V
        ? (X = t[66])
        : ((X = (0, h.jsx)(te, { asChild: !0, children: V })),
          (t[65] = V),
          (t[66] = X)),
      (U = o),
      (H = c),
      (G = `z-50 m-px flex min-w-[180px] flex-col rounded-xl bg-token-dropdown-background/90 p-1 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-sm select-none`),
      (K = 6));
    let n = b === 1 ? void 0 : b;
    (t[67] === n ? (q = t[68]) : ((q = { zoom: n }), (t[67] = n), (t[68] = q)),
      (J = e(w)),
      (t[50] = A),
      (t[51] = w),
      (t[52] = V),
      (t[53] = b),
      (t[54] = H),
      (t[55] = U),
      (t[56] = W),
      (t[57] = G),
      (t[58] = K),
      (t[59] = q),
      (t[60] = J),
      (t[61] = Y),
      (t[62] = X));
  } else
    ((H = t[54]),
      (U = t[55]),
      (W = t[56]),
      (G = t[57]),
      (K = t[58]),
      (q = t[59]),
      (J = t[60]),
      (Y = t[61]),
      (X = t[62]));
  let Z;
  t[69] !== H || t[70] !== G || t[71] !== K || t[72] !== q || t[73] !== J
    ? ((Z = (0, h.jsx)(H, {
        className: G,
        collisionPadding: K,
        style: q,
        children: J,
      })),
      (t[69] = H),
      (t[70] = G),
      (t[71] = K),
      (t[72] = q),
      (t[73] = J),
      (t[74] = Z))
    : (Z = t[74]);
  let Q;
  t[75] !== U || t[76] !== Z
    ? ((Q = (0, h.jsx)(U, { children: Z })),
      (t[75] = U),
      (t[76] = Z),
      (t[77] = Q))
    : (Q = t[77]);
  let $;
  return (
    t[78] !== W || t[79] !== Y || t[80] !== X || t[81] !== Q
      ? (($ = (0, h.jsxs)(W, { onOpenChange: Y, children: [X, Q] })),
        (t[78] = W),
        (t[79] = Y),
        (t[80] = X),
        (t[81] = Q),
        (t[82] = $))
      : ($ = t[82]),
    $
  );
}
function pe(e) {
  return e.message
    ? (0, h.jsx)(f, { ...e.message, values: e.messageValues })
    : e.id;
}
function me(e) {
  let t = (0, ce.c)(15),
    { checked: n, icon: r, label: i, showCheckbox: a, showChevron: o } = e,
    s;
  t[0] !== n || t[1] !== a
    ? ((s = a
        ? (0, h.jsx)(`span`, {
            className: `icon-sm flex shrink-0 items-center justify-center`,
            children: n
              ? (0, h.jsx)(oe, { "aria-hidden": !0, className: `icon-xs` })
              : null,
          })
        : null),
      (t[0] = n),
      (t[1] = a),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== r || t[4] !== i
    ? ((c = r
        ? (0, h.jsx)(`img`, {
            alt: typeof i == `string` ? i : ``,
            src: r,
            className: `icon-sm`,
          })
        : null),
      (t[3] = r),
      (t[4] = i),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === i
    ? (l = t[7])
    : ((l = (0, h.jsx)(`span`, { className: `truncate`, children: i })),
      (t[6] = i),
      (t[7] = l));
  let u;
  t[8] === o
    ? (u = t[9])
    : ((u = o
        ? (0, h.jsx)(se, { className: `icon-xs ml-auto opacity-50` })
        : null),
      (t[8] = o),
      (t[9] = u));
  let d;
  return (
    t[10] !== s || t[11] !== c || t[12] !== l || t[13] !== u
      ? ((d = (0, h.jsxs)(`span`, {
          className: `flex w-full items-center gap-1.5`,
          children: [s, c, l, u],
        })),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
export { fe as t };
//# sourceMappingURL=context-menu.js.map
