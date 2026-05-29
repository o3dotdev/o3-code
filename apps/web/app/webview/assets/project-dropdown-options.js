import { zn as e } from "./src-C.js";
import { t } from "./jsx-runtime.js";
import { t as n } from "./clsx-BcPLHiun.js";
import { G as r, U as i, wt as a } from "./setting-storage.js";
import { t as o } from "./remote-connection-visibility.js";
import { t as s } from "./tooltip-CDzchJxN.js";
import { t as c } from "./button.js";
import { t as l } from "./chats-DoviPPWc.js";
import { t as u } from "./info-B8GAwpK6.js";
import { t as ee } from "./folder.js";
import { t as d } from "./check-md.js";
import { r as f, t as p } from "./dropdown-DtQxMoJw.js";
import { t as m } from "./chevron-NmAOI_v1.js";
import { t as te } from "./worktree-D_6WAQVb.js";
import { t as h } from "./use-connected-remote-connections.js";
var ne = a(),
  g = t();
function _(t) {
  let a = (0, ne.c)(40),
    {
      selectedRoots: _,
      options: b,
      placeholder: re,
      align: ie,
      className: x,
      showIcon: ae,
      includeChats: S,
      selectionMode: C,
      localOnlyTooltip: w,
      onChange: T,
    } = t,
    E = ie === void 0 ? `start` : ie,
    D = ae === void 0 ? !0 : ae,
    O = S === void 0 ? !0 : S,
    k = C === void 0 ? `multiple` : C,
    A = r(),
    j = e(`~`),
    { remoteConnections: oe } = o(),
    M = h(oe).length > 0,
    N = A.formatMessage({
      id: `components.projectDropdown.projectless`,
      defaultMessage: `Chats`,
      description: `Label for selecting the chats target in the project dropdown`,
    }),
    se = O ? [{ value: j, label: N }, ...b] : b,
    P = new Map(se.map(v)),
    F = _.filter((e) => P.has(e)),
    I = new Set(F),
    ce = F[0] == null ? void 0 : P.get(F[0]),
    L =
      F.length > 1
        ? A.formatMessage(
            {
              id: `components.projectDropdown.multiple`,
              defaultMessage: `{count} projects`,
              description: `Label shown in the project dropdown when multiple projects are selected`,
            },
            { count: F.length },
          )
        : (ce?.label ?? _[0] ?? re),
    R = O && I.has(j),
    z = R ? l : ce?.isCodexWorktree === !0 ? te : ee,
    B;
  a[0] === A
    ? (B = a[1])
    : ((B = A.formatMessage({
        id: `components.projectDropdown.ariaLabel`,
        defaultMessage: `Project`,
        description: `Aria label for project dropdown`,
      })),
      (a[0] = A),
      (a[1] = B));
  let V;
  a[2] === x ? (V = a[3]) : ((V = n(`min-w-0`, x)), (a[2] = x), (a[3] = V));
  let H;
  a[4] !== z || a[5] !== D
    ? ((H = D ? (0, g.jsx)(z, { className: `icon-xs shrink-0` }) : null),
      (a[4] = z),
      (a[5] = D),
      (a[6] = H))
    : (H = a[6]);
  let U;
  a[7] === L
    ? (U = a[8])
    : ((U = (0, g.jsx)(`span`, {
        className: `truncate text-left text-token-foreground`,
        children: L,
      })),
      (a[7] = L),
      (a[8] = U));
  let W;
  a[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, g.jsx)(m, {
        className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
      })),
      (a[9] = W))
    : (W = a[9]);
  let G;
  a[10] !== B || a[11] !== V || a[12] !== H || a[13] !== U
    ? ((G = (0, g.jsxs)(c, {
        "aria-label": B,
        size: `composerSm`,
        color: `ghost`,
        className: V,
        children: [H, U, W],
      })),
      (a[10] = B),
      (a[11] = V),
      (a[12] = H),
      (a[13] = U),
      (a[14] = G))
    : (G = a[14]);
  let K;
  a[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, g.jsx)(i, {
        id: `components.projectDropdown.title`,
        defaultMessage: `Project`,
        description: `Header label above project options`,
      })),
      (a[15] = K))
    : (K = a[15]);
  let q;
  a[16] !== M || a[17] !== A || a[18] !== w
    ? ((q = M
        ? (0, g.jsx)(s, {
            tooltipContent: w,
            side: `top`,
            align: `center`,
            children: (0, g.jsx)(`button`, {
              type: `button`,
              className: `inline-flex shrink-0 items-center justify-center text-token-description-foreground hover:text-token-foreground`,
              "aria-label": A.formatMessage({
                id: `components.projectDropdown.localOnlyTooltipLabel`,
                defaultMessage: `Project availability details`,
                description: `Aria label for the project local-only info tooltip trigger`,
              }),
              children: (0, g.jsx)(u, { className: `icon-2xs` }),
            }),
          })
        : null),
      (a[16] = M),
      (a[17] = A),
      (a[18] = w),
      (a[19] = q))
    : (q = a[19]);
  let J;
  a[20] === q
    ? (J = a[21])
    : ((J = (0, g.jsx)(f.Title, {
        children: (0, g.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-1`,
          children: [K, q],
        }),
      })),
      (a[20] = q),
      (a[21] = J));
  let Y = b.map((e) =>
      (0, g.jsx)(
        y,
        {
          option: e,
          selectedRoots: F,
          selectedRootSet: I,
          selectionMode: k,
          onChange: T,
        },
        e.value,
      ),
    ),
    X;
  a[22] === b.length
    ? (X = a[23])
    : ((X =
        b.length === 0
          ? (0, g.jsx)(`div`, {
              className: `text-token-muted-foreground px-3 py-2 text-sm`,
              children: (0, g.jsx)(i, {
                id: `components.projectDropdown.empty`,
                defaultMessage: `No project folders available`,
                description: `Fallback label when no project options are available`,
              }),
            })
          : null),
      (a[22] = b.length),
      (a[23] = X));
  let Z;
  a[24] !== Y || a[25] !== X
    ? ((Z = (0, g.jsxs)(f.Section, {
        className: `flex flex-col [--edge-fade-distance:1.5rem]`,
        children: [Y, X],
      })),
      (a[24] = Y),
      (a[25] = X),
      (a[26] = Z))
    : (Z = a[26]);
  let Q;
  a[27] !== j ||
  a[28] !== N ||
  a[29] !== O ||
  a[30] !== R ||
  a[31] !== T ||
  a[32] !== k
    ? ((Q = O
        ? (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(f.Separator, {}),
              (0, g.jsx)(f.Section, {
                className: `flex flex-col`,
                children: (0, g.jsx)(f.Item, {
                  LeftIcon: l,
                  RightIcon: R ? d : void 0,
                  onSelect: () => {
                    T(k === `single` || !R ? [j] : []);
                  },
                  children: N,
                }),
              }),
            ],
          })
        : null),
      (a[27] = j),
      (a[28] = N),
      (a[29] = O),
      (a[30] = R),
      (a[31] = T),
      (a[32] = k),
      (a[33] = Q))
    : (Q = a[33]);
  let $;
  return (
    a[34] !== E || a[35] !== G || a[36] !== J || a[37] !== Z || a[38] !== Q
      ? (($ = (0, g.jsxs)(p, {
          align: E,
          contentWidth: `workspace`,
          contentMaxHeight: `tall`,
          contentClassName: `pb-2`,
          triggerButton: G,
          children: [J, Z, Q],
        })),
        (a[34] = E),
        (a[35] = G),
        (a[36] = J),
        (a[37] = Z),
        (a[38] = Q),
        (a[39] = $))
      : ($ = a[39]),
    $
  );
}
function v(e) {
  return [e.value, e];
}
function y(t) {
  let n = (0, ne.c)(22),
    {
      option: r,
      selectedRoots: i,
      selectedRootSet: a,
      selectionMode: o,
      onChange: s,
    } = t,
    c = r.isCodexWorktree === !0 ? te : ee,
    l,
    u;
  n[0] !== r.value || n[1] !== a
    ? ((l = e(r.value)),
      (u = a.has(l)),
      (n[0] = r.value),
      (n[1] = a),
      (n[2] = l),
      (n[3] = u))
    : ((l = n[2]), (u = n[3]));
  let p = u,
    m = p ? d : void 0,
    h;
  n[4] !== p || n[5] !== l || n[6] !== s || n[7] !== i || n[8] !== o
    ? ((h = () => {
        if (o === `single`) {
          s([l]);
          return;
        }
        s(p ? i.filter((e) => e !== l) : [...i, l]);
      }),
      (n[4] = p),
      (n[5] = l),
      (n[6] = s),
      (n[7] = i),
      (n[8] = o),
      (n[9] = h))
    : (h = n[9]);
  let _;
  n[10] === r.label
    ? (_ = n[11])
    : ((_ = (0, g.jsx)(`span`, { children: r.label })),
      (n[10] = r.label),
      (n[11] = _));
  let v;
  n[12] === r.description
    ? (v = n[13])
    : ((v = r.description
        ? (0, g.jsx)(`span`, {
            className: `truncate text-sm text-token-description-foreground`,
            children: r.description,
          })
        : null),
      (n[12] = r.description),
      (n[13] = v));
  let y;
  n[14] !== _ || n[15] !== v
    ? ((y = (0, g.jsxs)(`div`, {
        className: `flex items-center gap-1`,
        children: [_, v],
      })),
      (n[14] = _),
      (n[15] = v),
      (n[16] = y))
    : (y = n[16]);
  let b;
  return (
    n[17] !== c || n[18] !== m || n[19] !== h || n[20] !== y
      ? ((b = (0, g.jsx)(f.Item, {
          LeftIcon: c,
          RightIcon: m,
          onSelect: h,
          children: y,
        })),
        (n[17] = c),
        (n[18] = m),
        (n[19] = h),
        (n[20] = y),
        (n[21] = b))
      : (b = n[21]),
    b
  );
}
function b({ workspaceGroups: e, roots: t, formatRootLabel: n }) {
  return e
    ? e
        .filter((e) => e.projectKind === `local` && e.path != null)
        .map((e) => {
          let t = e.repositoryData?.rootFolder ?? void 0,
            n = t != null && t !== e.label;
          return {
            value: e.path,
            label: e.label,
            description: n ? t : void 0,
            isCodexWorktree: e.isCodexWorktree,
          };
        })
    : t.map((e) => ({ value: e, label: n(e) }));
}
export { _ as n, b as t };
//# sourceMappingURL=project-dropdown-options.js.map
