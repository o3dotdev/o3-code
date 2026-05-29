import { t as e } from "./jsx-runtime.js";
import { t } from "./clsx-BcPLHiun.js";
import { wt as n } from "./setting-storage.js";
var r = n(),
  i = e();
function a(e) {
  let n = (0, r.c)(46),
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
    g,
    _;
  n[0] === e
    ? ((a = n[1]),
      (o = n[2]),
      (s = n[3]),
      (c = n[4]),
      (l = n[5]),
      (u = n[6]),
      (d = n[7]),
      (f = n[8]),
      (p = n[9]),
      (m = n[10]),
      (h = n[11]),
      (g = n[12]),
      (_ = n[13]))
    : (({
        title: g,
        backSlot: o,
        subtitle: f,
        children: s,
        fullWidth: m,
        contentClassName: l,
        subtitleClassName: p,
        titleStackClassName: _,
        action: a,
        actionPlacement: h,
        ref: u,
        className: c,
        ...d
      } = e),
      (n[0] = e),
      (n[1] = a),
      (n[2] = o),
      (n[3] = s),
      (n[4] = c),
      (n[5] = l),
      (n[6] = u),
      (n[7] = d),
      (n[8] = f),
      (n[9] = p),
      (n[10] = m),
      (n[11] = h),
      (n[12] = g),
      (n[13] = _));
  let v = m === void 0 ? !1 : m,
    y = h === void 0 ? `header` : h,
    b;
  n[14] === g
    ? (b = n[15])
    : ((b = g
        ? (0, i.jsx)(`div`, {
            className: `electron:heading-lg heading-base truncate`,
            children: g,
          })
        : null),
      (n[14] = g),
      (n[15] = b));
  let x = b,
    S;
  n[16] !== f || n[17] !== p
    ? ((S = f
        ? (0, i.jsx)(`div`, {
            className: t(
              `text-base text-token-text-secondary`,
              p ?? `truncate`,
            ),
            children: f,
          })
        : null),
      (n[16] = f),
      (n[17] = p),
      (n[18] = S))
    : (S = n[18]);
  let C = S,
    w;
  n[19] !== a ||
  n[20] !== y ||
  n[21] !== f ||
  n[22] !== C ||
  n[23] !== g ||
  n[24] !== x ||
  n[25] !== _
    ? ((w =
        !g && !f && !a
          ? null
          : y === `subtitle` && C
            ? (0, i.jsx)(`div`, {
                className: `pb-panel`,
                children: (0, i.jsxs)(`div`, {
                  className: t(
                    `flex min-w-0 flex-col`,
                    _ ?? `gap-1.5 pb-panel`,
                  ),
                  children: [
                    x,
                    (0, i.jsxs)(`div`, {
                      className: `flex items-center justify-between gap-3`,
                      children: [
                        (0, i.jsx)(`div`, {
                          className: `min-w-0 flex-1`,
                          children: C,
                        }),
                        a
                          ? (0, i.jsx)(`div`, {
                              className: `shrink-0`,
                              children: a,
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              })
            : (0, i.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 pb-panel`,
                children: [
                  (0, i.jsxs)(`div`, {
                    className: t(
                      `flex min-w-0 flex-1 flex-col`,
                      _ ?? `gap-1.5 pb-panel`,
                    ),
                    children: [x, C],
                  }),
                  a
                    ? (0, i.jsx)(`div`, { className: `shrink-0`, children: a })
                    : null,
                ],
              })),
      (n[19] = a),
      (n[20] = y),
      (n[21] = f),
      (n[22] = C),
      (n[23] = g),
      (n[24] = x),
      (n[25] = _),
      (n[26] = w))
    : (w = n[26]);
  let T = w,
    E;
  n[27] === c
    ? (E = n[28])
    : ((E = t(`main-surface flex h-full min-h-0 flex-col`, c)),
      (n[27] = c),
      (n[28] = E));
  let D;
  n[29] === o
    ? (D = n[30])
    : ((D = (0, i.jsx)(`div`, {
        className: `draggable flex items-center px-panel electron:h-toolbar extension:h-toolbar-sm`,
        children: o,
      })),
      (n[29] = o),
      (n[30] = D));
  let O = v
      ? null
      : `max-w-2xl electron:min-w-[calc(320px*var(--codex-window-zoom))]`,
    k;
  n[31] !== l || n[32] !== O
    ? ((k = t(`mx-auto flex w-full flex-col`, O, l)),
      (n[31] = l),
      (n[32] = O),
      (n[33] = k))
    : (k = n[33]);
  let A;
  n[34] === s
    ? (A = n[35])
    : ((A = (0, i.jsx)(`div`, {
        className: `flex flex-col gap-[var(--padding-panel)]`,
        children: s,
      })),
      (n[34] = s),
      (n[35] = A));
  let j;
  n[36] !== A || n[37] !== k || n[38] !== T
    ? ((j = (0, i.jsx)(`div`, {
        className: `scrollbar-stable flex-1 overflow-y-auto p-panel`,
        children: (0, i.jsxs)(`div`, { className: k, children: [T, A] }),
      })),
      (n[36] = A),
      (n[37] = k),
      (n[38] = T),
      (n[39] = j))
    : (j = n[39]);
  let M;
  return (
    n[40] !== u || n[41] !== d || n[42] !== j || n[43] !== E || n[44] !== D
      ? ((M = (0, i.jsxs)(`div`, {
          ref: u,
          className: E,
          ...d,
          children: [D, j],
        })),
        (n[40] = u),
        (n[41] = d),
        (n[42] = j),
        (n[43] = E),
        (n[44] = D),
        (n[45] = M))
      : (M = n[45]),
    M
  );
}
export { a as t };
//# sourceMappingURL=settings-content-layout.js.map
