import { t as e } from "./jsx-runtime.js";
import { U as t, V as n, wt as r } from "./setting-storage.js";
import { t as i } from "./button.js";
import { a, d as o, i as s, l as c, n as l, r as u } from "./dialog-layout.js";
var d = r(),
  f = e(),
  p = n({
    disable: {
      id: `plugins.card.uninstallConfirm.disable`,
      defaultMessage: `Disable plugin`,
      description: `Disable button label for the plugin remove dialog`,
    },
    confirmTitle: {
      id: `plugins.card.uninstallConfirm.title`,
      defaultMessage: `Uninstall {name} plugin?`,
      description: `Title for the plugin uninstall confirmation dialog`,
    },
    removeTitle: {
      id: `plugins.detail.removeDialog.title`,
      defaultMessage: `Remove {name} plugin from Codex`,
      description: `Title for the plugin remove dialog on the detail page`,
    },
    confirmDescription: {
      id: `plugins.card.uninstallConfirm.description`,
      defaultMessage: `This will uninstall the plugin, but it will not uninstall any bundled apps.`,
      description: `Description for the plugin uninstall confirmation dialog`,
    },
    removeDescription: {
      id: `plugins.detail.removeDialog.description`,
      defaultMessage: `This removes the plugin from Codex. Bundled apps will remain installed.`,
      description: `Description for the plugin remove dialog on the detail page`,
    },
    cancel: {
      id: `plugins.card.uninstallConfirm.cancel`,
      defaultMessage: `Cancel`,
      description: `Cancel button label for the plugin uninstall dialog`,
    },
    confirm: {
      id: `plugins.card.uninstallConfirm.confirm`,
      defaultMessage: `Uninstall`,
      description: `Confirm button label for the plugin uninstall dialog`,
    },
    removeConfirm: {
      id: `plugins.detail.removeDialog.confirm`,
      defaultMessage: `Remove from Codex`,
      description: `Confirm button label for the plugin remove dialog on the detail page`,
    },
  });
function m(e) {
  let n = (0, d.c)(39),
    {
      dialogMode: r,
      isDisabling: m,
      isUninstalling: h,
      onDisable: g,
      onConfirm: _,
      onOpenChange: v,
      open: y,
      pluginDisplayName: b,
    } = e,
    x = (r === void 0 ? `card` : r) === `detail`,
    S;
  n[0] !== b || n[1] !== x
    ? ((S = x
        ? (0, f.jsx)(t, {
            ...p.removeTitle,
            values: {
              name: (0, f.jsx)(
                `strong`,
                {
                  className: `font-semibold text-token-text-primary`,
                  children: b,
                },
                `plugin-name`,
              ),
            },
          })
        : (0, f.jsx)(t, {
            ...p.confirmTitle,
            values: {
              name: (0, f.jsx)(
                `strong`,
                {
                  className: `font-semibold text-token-text-primary`,
                  children: b,
                },
                `plugin-name`,
              ),
            },
          })),
      (n[0] = b),
      (n[1] = x),
      (n[2] = S))
    : (S = n[2]);
  let C = S,
    w;
  n[3] === x
    ? (w = n[4])
    : ((w = x
        ? (0, f.jsx)(t, { ...p.removeDescription })
        : (0, f.jsx)(t, { ...p.confirmDescription })),
      (n[3] = x),
      (n[4] = w));
  let T = w,
    E;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { "aria-describedby": void 0 }), (n[5] = E))
    : (E = n[5]);
  let D;
  n[6] === C
    ? (D = n[7])
    : ((D = (0, f.jsx)(o, { className: `sr-only`, children: C })),
      (n[6] = C),
      (n[7] = D));
  let O;
  n[8] !== T || n[9] !== C
    ? ((O = (0, f.jsx)(a, {
        children: (0, f.jsx)(s, {
          title: C,
          subtitle: T,
          subtitleClassName: `mt-2`,
        }),
      })),
      (n[8] = T),
      (n[9] = C),
      (n[10] = O))
    : (O = n[10]);
  let k;
  n[11] === v
    ? (k = n[12])
    : ((k = () => {
        v(!1);
      }),
      (n[11] = v),
      (n[12] = k));
  let A;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, f.jsx)(t, { ...p.cancel })), (n[13] = A))
    : (A = n[13]);
  let j;
  n[14] === k
    ? (j = n[15])
    : ((j = (0, f.jsx)(i, { color: `outline`, onClick: k, children: A })),
      (n[14] = k),
      (n[15] = j));
  let M;
  n[16] !== m || n[17] !== g
    ? ((M =
        g == null
          ? null
          : (0, f.jsx)(i, {
              color: `outline`,
              loading: m ?? !1,
              onClick: () => {
                g();
              },
              children: (0, f.jsx)(t, { ...p.disable }),
            })),
      (n[16] = m),
      (n[17] = g),
      (n[18] = M))
    : (M = n[18]);
  let N;
  n[19] === _
    ? (N = n[20])
    : ((N = () => {
        _();
      }),
      (n[19] = _),
      (n[20] = N));
  let P = x ? p.removeConfirm : p.confirm,
    F;
  n[21] === P
    ? (F = n[22])
    : ((F = (0, f.jsx)(t, { ...P })), (n[21] = P), (n[22] = F));
  let I;
  n[23] !== h || n[24] !== N || n[25] !== F
    ? ((I = (0, f.jsx)(i, {
        color: `danger`,
        loading: h,
        onClick: N,
        children: F,
      })),
      (n[23] = h),
      (n[24] = N),
      (n[25] = F),
      (n[26] = I))
    : (I = n[26]);
  let L;
  n[27] !== M || n[28] !== I || n[29] !== j
    ? ((L = (0, f.jsx)(a, {
        children: (0, f.jsxs)(u, { children: [j, M, I] }),
      })),
      (n[27] = M),
      (n[28] = I),
      (n[29] = j),
      (n[30] = L))
    : (L = n[30]);
  let R;
  n[31] !== L || n[32] !== D || n[33] !== O
    ? ((R = (0, f.jsxs)(l, { children: [D, O, L] })),
      (n[31] = L),
      (n[32] = D),
      (n[33] = O),
      (n[34] = R))
    : (R = n[34]);
  let z;
  return (
    n[35] !== v || n[36] !== y || n[37] !== R
      ? ((z = (0, f.jsx)(c, {
          open: y,
          contentProps: E,
          onOpenChange: v,
          children: R,
        })),
        (n[35] = v),
        (n[36] = y),
        (n[37] = R),
        (n[38] = z))
      : (z = n[38]),
    z
  );
}
export { m as t };
//# sourceMappingURL=plugin-uninstall-dialog-CbLRaTbu.js.map
