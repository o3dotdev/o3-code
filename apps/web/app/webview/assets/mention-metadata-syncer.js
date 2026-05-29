import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { t as r } from "./clsx-BcPLHiun.js";
import { G as i, U as a, wt as o } from "./setting-storage.js";
import { o as s } from "./statsig--EYRNU53.js";
import { d as c } from "./apps-queries-CmwRqoKz.js";
import { _ as l } from "./mention-item.js";
import { t as u } from "./x-C_RDKBp5.js";
import { m as d } from "./use-plugins-jIZrcuZQ.js";
import { t as f } from "./chevron-NmAOI_v1.js";
import { d as p, t as m } from "./use-native-apps.electron.js";
import { n as h } from "./get-file-icon.js";
import { n as g } from "./use-skills.js";
import { t as _ } from "./image-preview-dialog.js";
import { t as v } from "./attachment-remove-button-BPMNqRUa.js";
import { n as y } from "./use-composer-controller.js";
function b(e) {
  return (e ?? 140) + 8;
}
var x = o(),
  S = e(t(), 1),
  C = n();
function w(e) {
  let t = (0, x.c)(94),
    {
      appIconSrc: n,
      appName: o,
      accessibilityText: s,
      previewEnabled: c,
      previewIndex: l,
      previewItems: u,
      screenshotAlt: d,
      screenshotSrc: f,
      transitionSnapshotHeight: p,
      transitionSnapshotSrc: m,
      variant: h,
      windowTitle: g,
      onRemove: y,
    } = e,
    w = c === void 0 ? !0 : c,
    O = l === void 0 ? 0 : l,
    A = h === void 0 ? `composer` : h,
    j = i(),
    [M, te] = (0, S.useState)(!1),
    [ne, N] = (0, S.useState)(!1),
    [P, re] = (0, S.useState)(O),
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    U,
    W,
    G,
    K,
    q,
    J,
    Y,
    X;
  if (
    t[0] !== s ||
    t[1] !== n ||
    t[2] !== o ||
    t[3] !== P ||
    t[4] !== j ||
    t[5] !== ne ||
    t[6] !== y ||
    t[7] !== w ||
    t[8] !== O ||
    t[9] !== u ||
    t[10] !== d ||
    t[11] !== f ||
    t[12] !== p ||
    t[13] !== m ||
    t[14] !== A ||
    t[15] !== g
  ) {
    let e = k({ appName: o, windowTitle: g }),
      i = d ?? ``,
      a;
    t[32] !== s || t[33] !== f || t[34] !== i
      ? ((a = { alt: i, accessibilityText: s, src: f }),
        (t[32] = s),
        (t[33] = f),
        (t[34] = i),
        (t[35] = a))
      : (a = t[35]);
    let c = a,
      l;
    t[36] !== c || t[37] !== u
      ? ((l = u ?? [c]), (t[36] = c), (t[37] = u), (t[38] = l))
      : (l = t[38]);
    let h = l;
    I = h[P] ?? c;
    let _;
    (t[39] === I.accessibilityText
      ? (_ = t[40])
      : ((_ = I.accessibilityText?.trim() ?? ``),
        (t[39] = I.accessibilityText),
        (t[40] = _)),
      (F = _),
      (R = F.length > 0),
      (z = ne && R),
      (V = P > 0 ? P - 1 : null),
      (B = P + 1 < h.length ? P + 1 : null));
    let x = m != null && m.length > 0,
      S = p ?? 140,
      T;
    t[41] !== p || t[42] !== A
      ? ((T = A === `composer` ? b(p) : void 0),
        (t[41] = p),
        (t[42] = A),
        (t[43] = T))
      : (T = t[43]);
    let E = T,
      M;
    (t[44] === O
      ? (M = t[45])
      : ((M = (e) => {
          (e && re(O), N(!1), te(e));
        }),
        (t[44] = O),
        (t[45] = M)),
      (L = M));
    let Z;
    t[46] !== n ||
    t[47] !== x ||
    t[48] !== S ||
    t[49] !== d ||
    t[50] !== f ||
    t[51] !== m ||
    t[52] !== A
      ? ((Z =
          A === `thread`
            ? (0, C.jsx)(ee, {
                appIconSrc: n,
                screenshotAlt: d,
                screenshotSrc: f,
              })
            : (0, C.jsx)(D, {
                hasTransitionSnapshot: x,
                renderedSnapshotHeight: S,
                transitionSnapshotSrc: m,
              })),
        (t[46] = n),
        (t[47] = x),
        (t[48] = S),
        (t[49] = d),
        (t[50] = f),
        (t[51] = m),
        (t[52] = A),
        (t[53] = Z))
      : (Z = t[53]);
    let ie = Z,
      Q = A === `thread` ? `pt-[10px]` : null,
      $ = w ? `cursor-interaction` : `cursor-default`;
    (t[54] !== Q || t[55] !== $
      ? ((G = r(
          `group/appshot relative flex w-[232px] flex-shrink-0 flex-col items-center overflow-visible rounded-2xl pb-2 hover:bg-token-bg-appshot focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:ring-inset`,
          Q,
          $,
        )),
        (t[54] = Q),
        (t[55] = $),
        (t[56] = G))
      : (G = t[56]),
      t[57] === E
        ? (K = t[58])
        : ((K = E == null ? void 0 : { height: E }), (t[57] = E), (t[58] = K)),
      (q = w ? `button` : void 0),
      (J = w ? e : void 0),
      (Y = w ? 0 : void 0),
      t[59] !== L || t[60] !== w
        ? ((X = w
            ? (e) => {
                (e.key === `Enter` || e.key === ` `) &&
                  (e.preventDefault(), L(!0));
              }
            : void 0),
          (t[59] = L),
          (t[60] = w),
          (t[61] = X))
        : (X = t[61]),
      (H = ie),
      (U =
        A === `thread`
          ? (0, C.jsx)(`div`, {
              className: `mt-1 w-full truncate text-center text-[13px] leading-[17px] font-medium text-token-text-primary`,
              children: e,
            })
          : null),
      (W = y
        ? (0, C.jsx)(v, {
            className: `pointer-events-none top-1.5 right-1.5 z-20 opacity-0 group-hover/appshot:pointer-events-auto group-hover/appshot:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100`,
            ariaLabel: j.formatMessage(
              {
                id: `appshotAttachment.removeAriaLabel`,
                defaultMessage: `Remove {title}`,
                description: `Aria label for the remove appshot attachment button`,
              },
              { title: e },
            ),
            onRemove: y,
          })
        : null),
      (t[0] = s),
      (t[1] = n),
      (t[2] = o),
      (t[3] = P),
      (t[4] = j),
      (t[5] = ne),
      (t[6] = y),
      (t[7] = w),
      (t[8] = O),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m),
      (t[14] = A),
      (t[15] = g),
      (t[16] = F),
      (t[17] = I),
      (t[18] = L),
      (t[19] = R),
      (t[20] = z),
      (t[21] = B),
      (t[22] = V),
      (t[23] = H),
      (t[24] = U),
      (t[25] = W),
      (t[26] = G),
      (t[27] = K),
      (t[28] = q),
      (t[29] = J),
      (t[30] = Y),
      (t[31] = X));
  } else
    ((F = t[16]),
      (I = t[17]),
      (L = t[18]),
      (R = t[19]),
      (z = t[20]),
      (B = t[21]),
      (V = t[22]),
      (H = t[23]),
      (U = t[24]),
      (W = t[25]),
      (G = t[26]),
      (K = t[27]),
      (q = t[28]),
      (J = t[29]),
      (Y = t[30]),
      (X = t[31]));
  let Z;
  t[62] !== H ||
  t[63] !== U ||
  t[64] !== W ||
  t[65] !== G ||
  t[66] !== K ||
  t[67] !== q ||
  t[68] !== J ||
  t[69] !== Y ||
  t[70] !== X
    ? ((Z = (0, C.jsxs)(`div`, {
        className: G,
        style: K,
        role: q,
        "aria-label": J,
        tabIndex: Y,
        onKeyDown: X,
        children: [H, U, W],
      })),
      (t[62] = H),
      (t[63] = U),
      (t[64] = W),
      (t[65] = G),
      (t[66] = K),
      (t[67] = q),
      (t[68] = J),
      (t[69] = Y),
      (t[70] = X),
      (t[71] = Z))
    : (Z = t[71]);
  let ie = Z;
  if (!w) return ie;
  let Q;
  t[72] !== F || t[73] !== z
    ? ((Q = z ? (0, C.jsx)(E, { accessibilityText: F }) : void 0),
      (t[72] = F),
      (t[73] = z),
      (t[74] = Q))
    : (Q = t[74]);
  let $ = !z,
    ae;
  t[75] !== R || t[76] !== j || t[77] !== z
    ? ((ae = R
        ? {
            active: z,
            ariaLabel: z
              ? j.formatMessage({
                  id: `appshotAttachment.showVisualPreview`,
                  defaultMessage: `Show screenshot`,
                  description: `Aria label for switching the appshot lightbox from accessibility text back to the screenshot`,
                })
              : j.formatMessage({
                  id: `appshotAttachment.showAccessibilityText`,
                  defaultMessage: `Show accessibility text`,
                  description: `Aria label for switching the appshot lightbox from the screenshot to accessibility text`,
                }),
            label: (0, C.jsx)(a, {
              id: `appshotAttachment.viewAccessibilityText`,
              defaultMessage: `View text`,
              description: `Label for the appshot lightbox button that toggles the accessibility text preview`,
            }),
            onClick: () => {
              N(T);
            },
          }
        : void 0),
      (t[75] = R),
      (t[76] = j),
      (t[77] = z),
      (t[78] = ae))
    : (ae = t[78]);
  let oe;
  t[79] === V
    ? (oe = t[80])
    : ((oe =
        V == null
          ? void 0
          : () => {
              (re(V), N(!1));
            }),
      (t[79] = V),
      (t[80] = oe));
  let se;
  t[81] === B
    ? (se = t[82])
    : ((se =
        B == null
          ? void 0
          : () => {
              (re(B), N(!1));
            }),
      (t[81] = B),
      (t[82] = se));
  let ce;
  return (
    t[83] !== ie ||
    t[84] !== I.alt ||
    t[85] !== I.src ||
    t[86] !== L ||
    t[87] !== M ||
    t[88] !== Q ||
    t[89] !== $ ||
    t[90] !== ae ||
    t[91] !== oe ||
    t[92] !== se
      ? ((ce = (0, C.jsx)(_, {
          src: I.src,
          alt: I.alt,
          open: M,
          onOpenChange: L,
          downloadSrc: I.src,
          imageDraggable: !1,
          previewContent: Q,
          showZoomControls: $,
          toolbarLeadingAction: ae,
          onPreviousImage: oe,
          onNextImage: se,
          triggerContent: ie,
        })),
        (t[83] = ie),
        (t[84] = I.alt),
        (t[85] = I.src),
        (t[86] = L),
        (t[87] = M),
        (t[88] = Q),
        (t[89] = $),
        (t[90] = ae),
        (t[91] = oe),
        (t[92] = se),
        (t[93] = ce))
      : (ce = t[93]),
    ce
  );
}
function T(e) {
  return !e;
}
function E(e) {
  let t = (0, x.c)(3),
    { accessibilityText: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, C.jsx)(`div`, {
        className: `flex items-center border-b border-token-border px-5 py-3 font-sans text-sm text-token-description-foreground select-none`,
        children: (0, C.jsx)(`div`, {
          className: `min-w-0 truncate`,
          children: (0, C.jsx)(a, {
            id: `appshotAttachment.accessibilityTextPreviewTitle`,
            defaultMessage: `plaintext`,
            description: `Title shown above accessibility text in the appshot lightbox`,
          }),
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, C.jsxs)(`div`, {
          className: `m-auto flex h-[min(72vh,44rem)] w-[min(78vw,56rem)] max-w-full flex-col overflow-hidden rounded-3xl border border-token-border bg-token-dropdown-background/95 text-token-foreground shadow-2xl ring-[0.5px] ring-token-border backdrop-blur-xl`,
          children: [
            r,
            (0, C.jsx)(`div`, {
              className: `min-h-0 flex-1 overflow-y-auto bg-token-main-surface-primary px-5 py-4`,
              children: (0, C.jsx)(`pre`, {
                className: `text-size-chat m-0 font-sans leading-relaxed break-words whitespace-pre-wrap text-token-text-primary extension:leading-normal`,
                children: n,
              }),
            }),
          ],
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function D(e) {
  let t = (0, x.c)(9),
    {
      hasTransitionSnapshot: n,
      renderedSnapshotHeight: r,
      transitionSnapshotSrc: i,
    } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = { height: r }), (t[0] = r), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((o = n
        ? (0, C.jsx)(`img`, {
            src: i ?? void 0,
            alt: ``,
            "aria-hidden": !0,
            className: `object-contain`,
            style: { height: r, width: 232 },
            draggable: !1,
          })
        : (0, C.jsx)(`span`, {
            "aria-hidden": !0,
            className: `block`,
            style: { height: r, width: 232 },
          })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = o))
    : (o = t[5]);
  let s;
  return (
    t[6] !== a || t[7] !== o
      ? ((s = (0, C.jsx)(`div`, {
          className: `relative flex w-full items-center justify-center`,
          style: a,
          children: o,
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function ee(e) {
  let t = (0, x.c)(17),
    { appIconSrc: n, screenshotAlt: r, screenshotSrc: i } = e,
    [a, o] = (0, S.useState)(null),
    s;
  t[0] === a ? (s = t[1]) : ((s = O(a)), (t[0] = a), (t[1] = s));
  let c = s,
    l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { height: 140, width: 232 }), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === c
    ? (u = t[4])
    : ((u = {
        filter: `drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.3))`,
        height: c,
        paddingInline: 12,
        width: 256,
        WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.21) 79%, rgba(0,0,0,0) 100%)`,
        maskImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.21) 79%, rgba(0,0,0,0) 100%)`,
      }),
      (t[3] = c),
      (t[4] = u));
  let d = r ?? ``,
    f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (e) => {
        let t = e.currentTarget;
        o({ height: t.naturalHeight, width: t.naturalWidth });
      }),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] !== i || t[7] !== d
    ? ((p = (0, C.jsx)(`img`, {
        src: i,
        alt: d,
        className: `max-h-full max-w-full object-contain`,
        draggable: !1,
        onLoad: f,
      })),
      (t[6] = i),
      (t[7] = d),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== u || t[10] !== p
    ? ((m = (0, C.jsx)(`div`, {
        className: `flex items-end justify-center`,
        style: u,
        children: p,
      })),
      (t[9] = u),
      (t[10] = p),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === n
    ? (h = t[13])
    : ((h =
        n != null && n.length > 0
          ? (0, C.jsx)(`img`, {
              src: n,
              alt: ``,
              "aria-hidden": !0,
              className: `absolute bottom-0 left-1/2 size-6 -translate-x-1/2 object-contain`,
              draggable: !1,
            })
          : null),
      (t[12] = n),
      (t[13] = h));
  let g;
  return (
    t[14] !== m || t[15] !== h
      ? ((g = (0, C.jsxs)(`div`, {
          className: `relative flex items-end justify-center`,
          style: l,
          children: [m, h],
        })),
        (t[14] = m),
        (t[15] = h),
        (t[16] = g))
      : (g = t[16]),
    g
  );
}
function O(e) {
  if (e == null || e.height <= 0 || e.width <= 0) return 140;
  let t = Math.min(232 / e.width, 140 / e.height);
  return e.height * t;
}
function k({ appName: e, windowTitle: t }) {
  let n = t?.trim();
  return n != null && n.length > 0 ? n : e;
}
function A(e) {
  let t = (0, x.c)(45),
    n,
    i,
    a,
    o,
    s,
    c,
    l,
    d,
    f;
  t[0] === e
    ? ((n = t[1]),
      (i = t[2]),
      (a = t[3]),
      (o = t[4]),
      (s = t[5]),
      (c = t[6]),
      (l = t[7]),
      (d = t[8]),
      (f = t[9]))
    : (({
        Icon: n,
        children: i,
        onRemove: s,
        onRemoveAriaLabel: c,
        onClick: o,
        layout: f,
        className: a,
        ref: d,
        ...l
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = d),
      (t[9] = f));
  let p = (f === void 0 ? `pill` : f) === `card`,
    m;
  t[10] === s
    ? (m = t[11])
    : ((m = (e) => {
        (e.key !== `Enter` && e.key !== ` `) ||
          (e.preventDefault(), e.stopPropagation(), s?.());
      }),
      (t[10] = s),
      (t[11] = m));
  let h = m,
    g = p
      ? `border-token-border inline-flex w-fit max-w-64 flex-shrink-0 items-center gap-2.5 overflow-visible rounded-lg border bg-token-input-background p-3 pr-8 text-left shadow-sm`
      : `bg-token-dropdown-background border-token-border hover:bg-token-menu-background inline-flex max-w-[320px] items-center gap-1 rounded-full border px-2 py-1.5 text-sm`,
    _ = o && `cursor-interaction`,
    v = !o && `cursor-default`,
    y;
  t[12] !== a || t[13] !== g || t[14] !== _ || t[15] !== v
    ? ((y = r(
        `text-token-foreground group relative transition-colors duration-200`,
        g,
        _,
        v,
        a,
      )),
      (t[12] = a),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y))
    : (y = t[16]);
  let b = p
      ? `flex size-10 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary`
      : `text-token-input-placeholder-foreground`,
    S;
  t[17] === b
    ? (S = t[18])
    : ((S = r(`flex-shrink-0`, b)), (t[17] = b), (t[18] = S));
  let w = p ? `size-6` : `icon-2xs`,
    T;
  t[19] === w ? (T = t[20]) : ((T = r(w)), (t[19] = w), (t[20] = T));
  let E;
  t[21] !== n || t[22] !== T
    ? ((E = (0, C.jsx)(n, { className: T })),
      (t[21] = n),
      (t[22] = T),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== E || t[25] !== S
    ? ((D = (0, C.jsx)(`div`, { className: S, children: E })),
      (t[24] = E),
      (t[25] = S),
      (t[26] = D))
    : (D = t[26]);
  let ee = p
      ? `text-size-chat truncate font-medium text-token-foreground`
      : `truncate pr-1 text-sm font-medium`,
    O;
  t[27] === ee
    ? (O = t[28])
    : ((O = r(`relative min-w-0 flex-1`, ee)), (t[27] = ee), (t[28] = O));
  let k;
  t[29] !== i || t[30] !== O
    ? ((k = (0, C.jsx)(`div`, { className: O, children: i })),
      (t[29] = i),
      (t[30] = O),
      (t[31] = k))
    : (k = t[31]);
  let A;
  t[32] !== h || t[33] !== p || t[34] !== s || t[35] !== c
    ? ((A =
        s &&
        (0, C.jsx)(`div`, {
          role: `button`,
          tabIndex: 0,
          onClick: (e) => {
            (e.stopPropagation(), s());
          },
          onKeyDown: h,
          className: r(
            `flex cursor-interaction items-center justify-center`,
            p
              ? `absolute top-2 right-2 size-4 rounded-full bg-token-foreground text-token-dropdown-background shadow-sm`
              : `pointer-events-none absolute top-1/2 right-1 h-5 w-5 -translate-y-1/2 rounded-full border border-token-border bg-token-menu-background opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 hover:bg-[color-mix(in_srgb,var(--color-token-menu-background)_88%,var(--color-token-foreground))] focus-visible:pointer-events-auto focus-visible:bg-[color-mix(in_srgb,var(--color-token-menu-background)_88%,var(--color-token-foreground))] focus-visible:opacity-100`,
          ),
          "aria-label": c,
          children: (0, C.jsx)(u, {
            className: r(p ? `icon-xxs` : `icon-2xs text-token-foreground`),
          }),
        })),
      (t[32] = h),
      (t[33] = p),
      (t[34] = s),
      (t[35] = c),
      (t[36] = A))
    : (A = t[36]);
  let j;
  return (
    t[37] !== o ||
    t[38] !== l ||
    t[39] !== d ||
    t[40] !== D ||
    t[41] !== k ||
    t[42] !== A ||
    t[43] !== y
      ? ((j = (0, C.jsxs)(`button`, {
          ref: d,
          type: `button`,
          className: y,
          onClick: o,
          ...l,
          children: [D, k, A],
        })),
        (t[37] = o),
        (t[38] = l),
        (t[39] = d),
        (t[40] = D),
        (t[41] = k),
        (t[42] = A),
        (t[43] = y),
        (t[44] = j))
      : (j = t[44]),
    j
  );
}
var j = { default: `px-4 py-3`, compact: `p-2`, extraCompact: `p-1.5` },
  M = {
    default: `py-3 pr-10 pl-4`,
    compact: `py-2 pr-8 pl-2`,
    extraCompact: `py-1.5 pr-10 pl-1.5`,
  },
  te = {
    default: `text-size-chat-sm`,
    medium: `text-base`,
    toolbar: `h-token-button-composer text-base leading-[18px]`,
  },
  ne = { default: `px-2 py-1`, medium: `px-4 py-1.5`, toolbar: `px-2 py-0` };
function N(e) {
  let t = (0, x.c)(8),
    { as: n, children: i, className: a } = e,
    o = n === void 0 ? `div` : n,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = r(
        `flex max-w-full flex-col overflow-hidden rounded-lg border border-token-border bg-token-dropdown-background/50 text-token-foreground shadow-sm extension:bg-token-input-background/50`,
        a,
      )),
      (t[0] = a),
      (t[1] = s));
  let c = s;
  if (o === `span`) {
    let e;
    return (
      t[2] !== i || t[3] !== c
        ? ((e = (0, C.jsx)(`span`, { className: c, children: i })),
          (t[2] = i),
          (t[3] = c),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let l;
  return (
    t[5] !== i || t[6] !== c
      ? ((l = (0, C.jsx)(`div`, { className: c, children: i })),
        (t[5] = i),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function P(e) {
  let t = (0, x.c)(16),
    {
      className: n,
      icon: i,
      padding: a,
      reserveTrailingSpace: o,
      subtitle: s,
      title: c,
      titleTooltip: l,
      trailing: u,
    } = e,
    d = a === void 0 ? `default` : a,
    f = o !== void 0 && o ? M[d] : j[d],
    p;
  t[0] !== n || t[1] !== f
    ? ((p = r(`flex min-w-0 items-center gap-2.5 text-left`, f, n)),
      (t[0] = n),
      (t[1] = f),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] !== c || t[4] !== l
    ? ((m = (0, C.jsx)(`span`, {
        className: `text-size-chat truncate font-medium text-token-foreground`,
        title: l,
        children: c,
      })),
      (t[3] = c),
      (t[4] = l),
      (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] === s
    ? (h = t[7])
    : ((h =
        s == null
          ? null
          : (0, C.jsx)(`span`, {
              className: `text-size-chat-sm truncate text-token-text-secondary`,
              children: s,
            })),
      (t[6] = s),
      (t[7] = h));
  let g;
  t[8] !== m || t[9] !== h
    ? ((g = (0, C.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 flex-col`,
        children: [m, h],
      })),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g))
    : (g = t[10]);
  let _;
  return (
    t[11] !== i || t[12] !== p || t[13] !== g || t[14] !== u
      ? ((_ = (0, C.jsxs)(`span`, { className: p, children: [i, g, u] })),
        (t[11] = i),
        (t[12] = p),
        (t[13] = g),
        (t[14] = u),
        (t[15] = _))
      : (_ = t[15]),
    _
  );
}
function re(e) {
  let t = (0, x.c)(13),
    {
      label: n,
      matchDropdownWidth: i,
      matchDropdownWidthLabel: a,
      size: o,
      showChevron: s,
    } = e,
    c = i === void 0 ? !1 : i,
    l = o === void 0 ? `default` : o,
    u = s === void 0 ? !1 : s,
    d = te[l],
    p;
  t[0] === d
    ? (p = t[1])
    : ((p = r(
        `flex shrink-0 items-center overflow-hidden rounded-lg border border-token-border text-token-foreground`,
        d,
      )),
      (t[0] = d),
      (t[1] = p));
  let m;
  t[2] !== n || t[3] !== c || t[4] !== a || t[5] !== l
    ? ((m = c
        ? (0, C.jsxs)(`span`, {
            className: r(`grid`, ne[l]),
            children: [
              (0, C.jsxs)(`span`, {
                "aria-hidden": !0,
                className: `invisible col-start-1 row-start-1 flex items-center gap-1`,
                children: [
                  a ?? n,
                  (0, C.jsx)(f, { className: `icon-2xs shrink-0` }),
                ],
              }),
              (0, C.jsx)(`span`, {
                className: `col-start-1 row-start-1 flex items-center justify-center`,
                children: n,
              }),
            ],
          })
        : (0, C.jsx)(`span`, {
            className: r(`flex items-center font-medium`, ne[l]),
            children: n,
          })),
      (t[2] = n),
      (t[3] = c),
      (t[4] = a),
      (t[5] = l),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] === u
    ? (h = t[8])
    : ((h = u
        ? (0, C.jsx)(`span`, {
            className: `flex self-stretch border-l border-token-border px-1.5`,
            children: (0, C.jsx)(f, {
              className: `icon-2xs self-center text-token-text-tertiary`,
            }),
          })
        : null),
      (t[7] = u),
      (t[8] = h));
  let g;
  return (
    t[9] !== p || t[10] !== m || t[11] !== h
      ? ((g = (0, C.jsxs)(`span`, { className: p, children: [m, h] })),
        (t[9] = p),
        (t[10] = m),
        (t[11] = h),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
function F(e) {
  let t = (0, x.c)(9),
    { children: n, isExpanded: i, onClick: a } = e,
    o = i && `rotate-180`,
    s;
  t[0] === o ? (s = t[1]) : ((s = r(`icon-xs`, o)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, C.jsx)(f, { className: s })), (t[2] = s), (t[3] = c));
  let l;
  return (
    t[4] !== n || t[5] !== i || t[6] !== a || t[7] !== c
      ? ((l = (0, C.jsxs)(`button`, {
          type: `button`,
          "aria-expanded": i,
          className: `text-size-chat flex h-10 cursor-interaction items-center justify-center gap-1 text-token-text-tertiary hover:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`,
          onClick: a,
          children: [n, c],
        })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = a),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function I(e) {
  let t = (0, x.c)(52),
    {
      filename: n,
      onRemove: r,
      onRemoveAriaLabel: o,
      onClick: s,
      lineInfo: c,
      Icon: l,
      layout: u,
      subtitle: d,
    } = e,
    f = u === void 0 ? `pill` : u,
    p = i(),
    m;
  t[0] !== l || t[1] !== n
    ? ((m = l ?? h(n)), (t[0] = l), (t[1] = n), (t[2] = m))
    : (m = t[2]);
  let g = m,
    _,
    y;
  if (
    t[3] !== g ||
    t[4] !== n ||
    t[5] !== p ||
    t[6] !== f ||
    t[7] !== c ||
    t[8] !== s ||
    t[9] !== r ||
    t[10] !== o ||
    t[11] !== d
  ) {
    y = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = L(n),
        i;
      if (
        (t[14] !== n || t[15] !== p || t[16] !== r || t[17] !== o
          ? ((i =
              o ??
              (r
                ? p.formatMessage(
                    {
                      id: `fileAttachment.removeAriaLabel`,
                      defaultMessage: `Remove {filename}`,
                      description: `Aria label for the remove file attachment button`,
                    },
                    { filename: n },
                  )
                : void 0)),
            (t[14] = n),
            (t[15] = p),
            (t[16] = r),
            (t[17] = o),
            (t[18] = i))
          : (i = t[18]),
        (_ = i),
        f === `card`)
      ) {
        let i;
        t[19] !== n || t[20] !== s
          ? ((i = s
              ? (0, C.jsx)(`button`, {
                  type: `button`,
                  className: `absolute inset-0 cursor-interaction bg-transparent group-hover/file-attachment:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`,
                  onClick: s,
                  "aria-label": n,
                })
              : null),
            (t[19] = n),
            (t[20] = s),
            (t[21] = i))
          : (i = t[21]);
        let a;
        t[22] === g
          ? (a = t[23])
          : ((a = (0, C.jsx)(`span`, {
              className: `flex size-10 shrink-0 items-center justify-center rounded-lg bg-token-bg-secondary text-token-text-secondary`,
              children: (0, C.jsx)(g, { className: `size-6` }),
            })),
            (t[22] = g),
            (t[23] = a));
        let o = r != null,
          l;
        t[24] === n
          ? (l = t[25])
          : ((l = (0, C.jsx)(`span`, {
              className: `block max-w-32 truncate`,
              children: n,
            })),
            (t[24] = n),
            (t[25] = l));
        let u = d ?? R(e, c, p),
          f;
        t[26] !== a || t[27] !== o || t[28] !== l || t[29] !== u
          ? ((f = (0, C.jsx)(P, {
              className: `pointer-events-none relative z-10 h-full`,
              icon: a,
              padding: `extraCompact`,
              reserveTrailingSpace: o,
              title: l,
              subtitle: u,
            })),
            (t[26] = a),
            (t[27] = o),
            (t[28] = l),
            (t[29] = u),
            (t[30] = f))
          : (f = t[30]);
        let m;
        t[31] !== r || t[32] !== _
          ? ((m = r
              ? (0, C.jsx)(v, {
                  className: `top-1 right-1 z-20`,
                  ariaLabel: _,
                  onRemove: r,
                })
              : null),
            (t[31] = r),
            (t[32] = _),
            (t[33] = m))
          : (m = t[33]);
        let h;
        (t[34] !== f || t[35] !== m || t[36] !== i
          ? ((h = (0, C.jsxs)(N, {
              as: `span`,
              className: `group/file-attachment relative w-fit max-w-64 flex-shrink-0 bg-token-input-background`,
              children: [i, f, m],
            })),
            (t[34] = f),
            (t[35] = m),
            (t[36] = i),
            (t[37] = h))
          : (h = t[37]),
          (y = h));
        break bb0;
      }
    }
    ((t[3] = g),
      (t[4] = n),
      (t[5] = p),
      (t[6] = f),
      (t[7] = c),
      (t[8] = s),
      (t[9] = r),
      (t[10] = o),
      (t[11] = d),
      (t[12] = _),
      (t[13] = y));
  } else ((_ = t[12]), (y = t[13]));
  if (y !== Symbol.for(`react.early_return_sentinel`)) return y;
  let b;
  t[38] === n
    ? (b = t[39])
    : ((b = (0, C.jsx)(`span`, { className: `truncate`, children: n })),
      (t[38] = n),
      (t[39] = b));
  let S;
  t[40] === c
    ? (S = t[41])
    : ((S = c
        ? (0, C.jsx)(`span`, {
            className: `shrink-0 font-normal text-token-input-placeholder-foreground`,
            children: (0, C.jsx)(a, {
              id: `fileAttachment.lineInfo`,
              defaultMessage: `{lineInfo}`,
              description: `Line range or number for a file attachment, no surrounding punctuation`,
              values: { lineInfo: c },
            }),
          })
        : null),
      (t[40] = c),
      (t[41] = S));
  let w;
  t[42] !== b || t[43] !== S
    ? ((w = (0, C.jsxs)(`span`, {
        className: `flex max-w-full min-w-0 items-center gap-1`,
        children: [b, S],
      })),
      (t[42] = b),
      (t[43] = S),
      (t[44] = w))
    : (w = t[44]);
  let T;
  return (
    t[45] !== g ||
    t[46] !== f ||
    t[47] !== s ||
    t[48] !== r ||
    t[49] !== _ ||
    t[50] !== w
      ? ((T = (0, C.jsx)(A, {
          Icon: g,
          onClick: s,
          onRemove: r,
          layout: f,
          onRemoveAriaLabel: _,
          children: w,
        })),
        (t[45] = g),
        (t[46] = f),
        (t[47] = s),
        (t[48] = r),
        (t[49] = _),
        (t[50] = w),
        (t[51] = T))
      : (T = t[51]),
    T
  );
}
function L(e) {
  let t = e.lastIndexOf(`.`);
  return t <= 0 || t === e.length - 1 ? null : e.slice(t + 1).toUpperCase();
}
function R(e, t, n) {
  return e == null
    ? (t ?? null)
    : t == null
      ? e
      : n.formatMessage(
          {
            id: `fileAttachment.cardSubtitle`,
            defaultMessage: `{extension} · {lineInfo}`,
            description: `File attachment subtitle showing file extension and attached line range`,
          },
          { extension: e, lineInfo: t },
        );
}
function z(e, t) {
  return t
    ? e.replace(/(?:\s+\(\s*\d+(?:-\d+)?\s*\)|\s+\d+(?:-\d+)?)(\s*)$/, ``)
    : e;
}
function B(e) {
  let t = (0, x.c)(17),
    { composerController: n, hostId: r, roots: i, shouldLoadPlugins: a } = e,
    o;
  t[0] === r ? (o = t[1]) : ((o = { hostId: r }), (t[0] = r), (t[1] = o));
  let s = c(o),
    l = y(n, V),
    u = a || l,
    { isLoading: d, skills: f } = g(i, r),
    p,
    m;
  (t[2] !== s || t[3] !== n || t[4] !== d || t[5] !== f
    ? ((p = () => {
        d || n.syncMentionMetadata({ skills: f, apps: s });
      }),
      (m = [s, n, d, f]),
      (t[2] = s),
      (t[3] = n),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p),
      (t[7] = m))
    : ((p = t[6]), (m = t[7])),
    (0, S.useEffect)(p, m));
  let h;
  return (
    t[8] !== s ||
    t[9] !== n ||
    t[10] !== l ||
    t[11] !== r ||
    t[12] !== d ||
    t[13] !== i ||
    t[14] !== u ||
    t[15] !== f
      ? ((h = u
          ? (0, C.jsx)(H, {
              apps: s,
              composerController: n,
              hostId: r,
              includeRemoteCatalog: l,
              roots: i,
              skillsReady: !d,
              skills: f,
            })
          : null),
        (t[8] = s),
        (t[9] = n),
        (t[10] = l),
        (t[11] = r),
        (t[12] = d),
        (t[13] = i),
        (t[14] = u),
        (t[15] = f),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
function V(e) {
  return e.hasPluginBackedMentions();
}
function H(e) {
  let t = (0, x.c)(16),
    {
      apps: n,
      composerController: r,
      hostId: a,
      includeRemoteCatalog: o,
      roots: c,
      skillsReady: u,
      skills: f,
    } = e,
    h = i(),
    g = s(`1269116100`),
    _;
  t[0] !== o || t[1] !== g
    ? ((_ =
        g && o
          ? { additionalMarketplaceKinds: [`shared-with-me`] }
          : { includeRemoteCatalog: o }),
      (t[0] = o),
      (t[1] = g),
      (t[2] = _))
    : (_ = t[2]);
  let { availablePlugins: v } = d(a, c, _),
    y;
  t[3] === v ? (y = t[4]) : ((y = p(v)), (t[3] = v), (t[4] = y));
  let b = y != null,
    C;
  t[5] === b ? (C = t[6]) : ((C = { enabled: b }), (t[5] = b), (t[6] = C));
  let { nativeApps: w } = m(C),
    T,
    E;
  return (
    t[7] !== n ||
    t[8] !== v ||
    t[9] !== r ||
    t[10] !== h ||
    t[11] !== w ||
    t[12] !== f ||
    t[13] !== u
      ? ((T = () => {
          u &&
            r.syncMentionMetadata({
              skills: f,
              apps: n,
              plugins: v,
              nativeApps: w,
              pluginMentionLabels: l(h),
            });
        }),
        (E = [n, r, h, w, v, f, u]),
        (t[7] = n),
        (t[8] = v),
        (t[9] = r),
        (t[10] = h),
        (t[11] = w),
        (t[12] = f),
        (t[13] = u),
        (t[14] = T),
        (t[15] = E))
      : ((T = t[14]), (E = t[15])),
    (0, S.useEffect)(T, E),
    null
  );
}
export {
  F as a,
  A as c,
  N as i,
  w as l,
  z as n,
  re as o,
  I as r,
  P as s,
  B as t,
  b as u,
};
//# sourceMappingURL=mention-metadata-syncer.js.map
