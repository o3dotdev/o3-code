import { t as e } from "./jsx-runtime.js";
import { t } from "./clsx-BcPLHiun.js";
import { T as n, U as r, _ as i, wt as a } from "./setting-storage.js";
import { t as o } from "./request-DWZTrEAr.js";
import { t as s } from "./use-auth.js";
import { t as c } from "./use-debounced-value-BtOJx-Vp.js";
import { t as l } from "./button.js";
import { t as u } from "./spinner.js";
import { t as d } from "./x-C_RDKBp5.js";
import { t as f } from "./check-md.js";
import { r as p, t as m } from "./dropdown-DtQxMoJw.js";
import { t as h } from "./chevron-NmAOI_v1.js";
import { t as g } from "./list-navigation-DnxNfoPi.js";
var _ = a(),
  v = e();
function y(e) {
  let t = (0, _.c)(30),
    { options: n, renderLabel: r, value: i, onChange: a } = e,
    o;
  if (t[0] !== n || t[1] !== i) {
    let e;
    (t[3] === i
      ? (e = t[4])
      : ((e = (e) => e.value === i), (t[3] = i), (t[4] = e)),
      (o = n.find(e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o));
  } else o = t[2];
  let s = o?.Icon,
    c;
  t[5] === s
    ? (c = t[6])
    : ((c =
        s == null
          ? null
          : (0, v.jsx)(s, { "aria-hidden": !0, className: `icon-xs` })),
      (t[5] = s),
      (t[6] = c));
  let l;
  t[7] === c
    ? (l = t[8])
    : ((l = (0, v.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10`,
        children: c,
      })),
      (t[7] = c),
      (t[8] = l));
  let u;
  t[9] !== r || t[10] !== i
    ? ((u = r(i)), (t[9] = r), (t[10] = i), (t[11] = u))
    : (u = t[11]);
  let d;
  t[12] === u
    ? (d = t[13])
    : ((d = (0, v.jsx)(`span`, { className: `truncate`, children: u })),
      (t[12] = u),
      (t[13] = d));
  let g;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, v.jsx)(h, {
        "aria-hidden": !0,
        className: `icon-xs shrink-0 text-token-description-foreground`,
      })),
      (t[14] = g))
    : (g = t[14]);
  let y;
  t[15] !== l || t[16] !== d
    ? ((y = (0, v.jsxs)(`button`, {
        type: `button`,
        className: `flex min-w-0 cursor-interaction items-center gap-3 text-left text-base`,
        children: [l, d, g],
      })),
      (t[15] = l),
      (t[16] = d),
      (t[17] = y))
    : (y = t[17]);
  let b;
  if (t[18] !== a || t[19] !== n || t[20] !== r || t[21] !== i) {
    let e;
    (t[23] !== a || t[24] !== r || t[25] !== i
      ? ((e = (e) =>
          (0, v.jsx)(
            p.Item,
            {
              LeftIcon: e.Icon,
              RightIcon: e.value === i ? f : void 0,
              onSelect: () => {
                a(e.value);
              },
              children: r(e.value),
            },
            e.value,
          )),
        (t[23] = a),
        (t[24] = r),
        (t[25] = i),
        (t[26] = e))
      : (e = t[26]),
      (b = n.map(e)),
      (t[18] = a),
      (t[19] = n),
      (t[20] = r),
      (t[21] = i),
      (t[22] = b));
  } else b = t[22];
  let x;
  return (
    t[27] !== y || t[28] !== b
      ? ((x = (0, v.jsx)(m, {
          align: `start`,
          contentWidth: `menu`,
          triggerButton: y,
          children: b,
        })),
        (t[27] = y),
        (t[28] = b),
        (t[29] = x))
      : (x = t[29]),
    x
  );
}
function b(e) {
  let t = (0, _.c)(22),
    {
      actions: n,
      cancelAction: i,
      disabled: a,
      hasPendingAccessChange: o,
      hasPendingInvitees: s,
      idleActions: c,
      isSaving: d,
      savingAriaLabel: f,
      size: p,
      spinnerClassName: m,
    } = e,
    h;
  t[0] !== o || t[1] !== s
    ? ((h = S({ hasPendingAccessChange: o, hasPendingInvitees: s })),
      (t[0] = o),
      (t[1] = s),
      (t[2] = h))
    : (h = t[2]);
  let g = h;
  if (g == null) return c ?? null;
  let y;
  t[3] !== i || t[4] !== a || t[5] !== d || t[6] !== p
    ? ((y =
        i == null
          ? null
          : (0, v.jsx)(l, {
              color: `secondary`,
              disabled: a || d,
              size: p,
              onClick: i.onClick,
              children: (0, v.jsx)(r, {
                id: `shareDialog.primaryAction.cancel`,
                defaultMessage: `Cancel`,
                description: `Button label for cancelling staged changes in a share dialog`,
              }),
            })),
      (t[3] = i),
      (t[4] = a),
      (t[5] = d),
      (t[6] = p),
      (t[7] = y))
    : (y = t[7]);
  let b = d ? f : void 0,
    C = a || d,
    w = n[g],
    T = n[g],
    E;
  t[8] !== g || t[9] !== d || t[10] !== m
    ? ((E = d ? (0, v.jsx)(u, { className: m }) : (0, v.jsx)(x, { action: g })),
      (t[8] = g),
      (t[9] = d),
      (t[10] = m),
      (t[11] = E))
    : (E = t[11]);
  let D;
  t[12] !== p ||
  t[13] !== b ||
  t[14] !== C ||
  t[15] !== w.onClick ||
  t[16] !== T.type ||
  t[17] !== E
    ? ((D = (0, v.jsx)(l, {
        "aria-label": b,
        color: `primary`,
        disabled: C,
        size: p,
        onClick: w.onClick,
        type: T.type,
        children: E,
      })),
      (t[12] = p),
      (t[13] = b),
      (t[14] = C),
      (t[15] = w.onClick),
      (t[16] = T.type),
      (t[17] = E),
      (t[18] = D))
    : (D = t[18]);
  let O;
  return (
    t[19] !== y || t[20] !== D
      ? ((O = (0, v.jsxs)(v.Fragment, { children: [y, D] })),
        (t[19] = y),
        (t[20] = D),
        (t[21] = O))
      : (O = t[21]),
    O
  );
}
function x(e) {
  let t = (0, _.c)(2),
    { action: n } = e;
  switch (n) {
    case `invite`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, v.jsx)(r, {
              id: `shareDialog.primaryAction.invite`,
              defaultMessage: `Invite`,
              description: `Button label for inviting selected people or groups in a share dialog`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `share`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, v.jsx)(r, {
              id: `shareDialog.primaryAction.save`,
              defaultMessage: `Save`,
              description: `Button label for saving a share dialog access change`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
function S({ hasPendingAccessChange: e, hasPendingInvitees: t }) {
  return !e && !t ? null : e && !t ? `share` : `invite`;
}
function C(e) {
  return e.name ?? e.email ?? e.id;
}
function w(e) {
  return {
    chipLabel: e.email ?? void 0,
    id: e.account_user_id,
    label: C(e),
    secondaryLabel: e.email ?? void 0,
    user: e,
  };
}
function T({
  currentAccountUserId: e,
  existingAccountUserIds: t,
  selectedAccountUserIds: n,
  workspaceUsers: r,
}) {
  let i = new Set(t),
    a = new Set(n);
  return r?.filter(
    (t) =>
      t.account_user_id !== e &&
      !i.has(t.account_user_id) &&
      !a.has(t.account_user_id),
  );
}
function E(e) {
  let n = (0, _.c)(46),
    {
      ariaLabel: r,
      emptyMessage: i,
      getRemoveLabel: a,
      options: o,
      placeholder: s,
      query: c,
      selectedOptions: l,
      trailingContent: f,
      onQueryChange: p,
      onRemoveOption: m,
      onSelectOption: h,
    } = e,
    y;
  n[0] === c ? (y = n[1]) : ((y = c.trim()), (n[0] = c), (n[1] = y));
  let b = y.length > 0,
    x;
  n[2] !== p || n[3] !== h
    ? ((x = (e) => {
        (h(e), p(``));
      }),
      (n[2] = p),
      (n[3] = h),
      (n[4] = x))
    : (x = n[4]);
  let S;
  n[5] === p
    ? (S = n[6])
    : ((S = () => {
        p(``);
      }),
      (n[5] = p),
      (n[6] = S));
  let C;
  n[7] !== b || n[8] !== o || n[9] !== x || n[10] !== S
    ? ((C = { items: o, isActive: b, onSelect: x, onEscape: S }),
      (n[7] = b),
      (n[8] = o),
      (n[9] = x),
      (n[10] = S),
      (n[11] = C))
    : (C = n[11]);
  let {
      highlightedIndex: w,
      listRef: T,
      getInputProps: E,
      getItemProps: D,
    } = g(C),
    O;
  if (n[12] !== a || n[13] !== m || n[14] !== l) {
    let e;
    (n[16] !== a || n[17] !== m
      ? ((e = (e) =>
          (0, v.jsxs)(
            `span`,
            {
              className: `inline-flex min-w-0 items-center gap-1 rounded-md bg-token-badge-background px-1 py-[1px] text-sm text-token-badge-foreground`,
              children: [
                (0, v.jsx)(`span`, {
                  className: `truncate`,
                  children: e.chipLabel ?? e.label,
                }),
                (0, v.jsx)(`button`, {
                  type: `button`,
                  "aria-label": a(e),
                  className: `cursor-interaction rounded-sm text-token-description-foreground hover:text-token-foreground`,
                  onClick: () => {
                    m(e);
                  },
                  children: (0, v.jsx)(d, {
                    "aria-hidden": !0,
                    className: `icon-2xs`,
                  }),
                }),
              ],
            },
            e.id,
          )),
        (n[16] = a),
        (n[17] = m),
        (n[18] = e))
      : (e = n[18]),
      (O = l.map(e)),
      (n[12] = a),
      (n[13] = m),
      (n[14] = l),
      (n[15] = O));
  } else O = n[15];
  let k;
  n[19] === b
    ? (k = n[20])
    : ((k = (e) => {
        b && e.key === `Enter` && e.preventDefault();
      }),
      (n[19] = b),
      (n[20] = k));
  let A;
  n[21] !== E || n[22] !== k
    ? ((A = E({ onKeyDown: k })), (n[21] = E), (n[22] = k), (n[23] = A))
    : (A = n[23]);
  let j = l.length === 0 ? s : void 0,
    M;
  n[24] === p
    ? (M = n[25])
    : ((M = (e) => {
        p(e.currentTarget.value);
      }),
      (n[24] = p),
      (n[25] = M));
  let N;
  n[26] !== r || n[27] !== c || n[28] !== A || n[29] !== j || n[30] !== M
    ? ((N = (0, v.jsx)(`input`, {
        ...A,
        "aria-label": r,
        className: `min-w-36 flex-1 bg-transparent outline-none placeholder:text-token-input-placeholder-foreground`,
        placeholder: j,
        value: c,
        onChange: M,
      })),
      (n[26] = r),
      (n[27] = c),
      (n[28] = A),
      (n[29] = j),
      (n[30] = M),
      (n[31] = N))
    : (N = n[31]);
  let P;
  n[32] !== N || n[33] !== O || n[34] !== f
    ? ((P = (0, v.jsxs)(`div`, {
        className: `flex min-h-[30px] w-full flex-wrap items-center gap-1 rounded-md border border-token-input-border bg-token-input-background px-2 py-1 text-base text-token-input-foreground focus-within:border-token-focus-border`,
        children: [O, N, f],
      })),
      (n[32] = N),
      (n[33] = O),
      (n[34] = f),
      (n[35] = P))
    : (P = n[35]);
  let F;
  n[36] !== i ||
  n[37] !== D ||
  n[38] !== w ||
  n[39] !== b ||
  n[40] !== T ||
  n[41] !== o
    ? ((F = b
        ? (0, v.jsx)(`div`, {
            className: `absolute z-10 mt-2 w-full overflow-hidden rounded-md border border-token-border bg-token-dropdown-background shadow-sm`,
            children: (0, v.jsx)(`div`, {
              ref: T,
              className: t(
                `flex max-h-64 flex-col overflow-y-auto p-1`,
                o == null && `min-h-64`,
              ),
              role: `listbox`,
              children:
                o == null
                  ? (0, v.jsx)(`div`, {
                      className: `flex flex-1 items-center justify-center text-token-description-foreground`,
                      children: (0, v.jsx)(u, { className: `icon-xs` }),
                    })
                  : o.length === 0
                    ? (0, v.jsx)(`div`, {
                        className: `px-2 py-1.5 text-sm text-token-input-placeholder-foreground`,
                        children: i,
                      })
                    : o.map((e, n) =>
                        (0, v.jsxs)(
                          `button`,
                          {
                            type: `button`,
                            ...D(n),
                            "aria-selected": n === w,
                            className: t(
                              `cursor-interaction flex w-full flex-col rounded-sm px-2 py-1.5 text-left hover:bg-token-list-hover-background`,
                              n === w && `bg-token-list-hover-background`,
                            ),
                            role: `option`,
                            children: [
                              (0, v.jsx)(`span`, {
                                className: `text-sm text-token-foreground`,
                                children: e.label,
                              }),
                              e.secondaryLabel == null
                                ? null
                                : (0, v.jsx)(`span`, {
                                    className: `text-sm text-token-description-foreground`,
                                    children: e.secondaryLabel,
                                  }),
                            ],
                          },
                          e.id,
                        ),
                      ),
            }),
          })
        : null),
      (n[36] = i),
      (n[37] = D),
      (n[38] = w),
      (n[39] = b),
      (n[40] = T),
      (n[41] = o),
      (n[42] = F))
    : (F = n[42]);
  let I;
  return (
    n[43] !== P || n[44] !== F
      ? ((I = (0, v.jsxs)(`div`, { className: `relative`, children: [P, F] })),
        (n[43] = P),
        (n[44] = F),
        (n[45] = I))
      : (I = n[45]),
    I
  );
}
function D(e) {
  let t = (0, _.c)(23),
    {
      options: n,
      renderLabel: r,
      removeLabel: i,
      triggerButtonClassName: a,
      value: o,
      onChange: s,
      onRemoveAccess: c,
    } = e,
    l =
      a === void 0
        ? `flex cursor-interaction items-center gap-1 rounded-md border border-token-border px-2 py-1 text-sm text-token-foreground`
        : a,
    u;
  t[0] !== r || t[1] !== o
    ? ((u = r(o)), (t[0] = r), (t[1] = o), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, v.jsx)(h, {
        "aria-hidden": !0,
        className: `icon-xs text-token-description-foreground`,
      })),
      (t[3] = d))
    : (d = t[3]);
  let g;
  t[4] !== u || t[5] !== l
    ? ((g = (0, v.jsxs)(`button`, {
        type: `button`,
        className: l,
        children: [u, d],
      })),
      (t[4] = u),
      (t[5] = l),
      (t[6] = g))
    : (g = t[6]);
  let y;
  if (t[7] !== s || t[8] !== n || t[9] !== r || t[10] !== o) {
    let e;
    (t[12] !== s || t[13] !== r || t[14] !== o
      ? ((e = (e) =>
          (0, v.jsx)(
            p.Item,
            {
              disabled: e.disabled,
              RightIcon: e.value === o ? f : void 0,
              tooltipText: e.tooltipText,
              onSelect: () => {
                s?.(e.value);
              },
              children: r(e.value),
            },
            e.value,
          )),
        (t[12] = s),
        (t[13] = r),
        (t[14] = o),
        (t[15] = e))
      : (e = t[15]),
      (y = n.map(e)),
      (t[7] = s),
      (t[8] = n),
      (t[9] = r),
      (t[10] = o),
      (t[11] = y));
  } else y = t[11];
  let b;
  t[16] !== c || t[17] !== i
    ? ((b =
        c == null
          ? null
          : (0, v.jsxs)(v.Fragment, {
              children: [
                (0, v.jsx)(p.Separator, {}),
                (0, v.jsx)(p.Item, {
                  onSelect: c,
                  children: (0, v.jsx)(`span`, {
                    className: `text-token-error-foreground`,
                    children: i,
                  }),
                }),
              ],
            })),
      (t[16] = c),
      (t[17] = i),
      (t[18] = b))
    : (b = t[18]);
  let x;
  return (
    t[19] !== g || t[20] !== y || t[21] !== b
      ? ((x = (0, v.jsxs)(m, {
          align: `end`,
          contentWidth: `menu`,
          triggerButton: g,
          children: [y, b],
        })),
        (t[19] = g),
        (t[20] = y),
        (t[21] = b),
        (t[22] = x))
      : (x = t[22]),
    x
  );
}
function O(e) {
  let t = (0, _.c)(15),
    { label: n, avatarLabel: r, secondaryLabel: i, trailingContent: a } = e,
    o = r === void 0 ? n : r,
    s;
  t[0] === o ? (s = t[1]) : ((s = k(o)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, v.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-sm font-medium text-token-foreground`,
        children: s,
      })),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] === n
    ? (l = t[5])
    : ((l = (0, v.jsx)(`div`, {
        className: `truncate text-base`,
        children: n,
      })),
      (t[4] = n),
      (t[5] = l));
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u =
        i == null
          ? null
          : (0, v.jsx)(`div`, {
              className: `truncate text-sm text-token-description-foreground`,
              children: i,
            })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] !== l || t[9] !== u
    ? ((d = (0, v.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [l, u],
      })),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== c || t[12] !== d || t[13] !== a
      ? ((f = (0, v.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [c, d, a],
        })),
        (t[11] = c),
        (t[12] = d),
        (t[13] = a),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function k(e) {
  return e
    .split(` `)
    .map((e) => e[0])
    .join(``)
    .slice(0, 2)
    .toUpperCase();
}
function A(e) {
  let t = (0, _.c)(12),
    { accountId: r, authMethod: a } = s(),
    l;
  t[0] === e ? (l = t[1]) : ((l = e.trim()), (t[0] = e), (t[1] = l));
  let u = c(l, 200),
    d;
  t[2] !== r || t[3] !== u
    ? ((d = [`workspace-users`, r, u]), (t[2] = r), (t[3] = u), (t[4] = d))
    : (d = t[4]);
  let f = a === `chatgpt` && r != null && u.length > 0,
    p;
  t[5] !== r || t[6] !== u
    ? ((p = async () => {
        if (r == null) throw Error(`account id is required`);
        return (
          await o.safeGet(`/accounts/{account_id}/users`, {
            parameters: {
              path: { account_id: r },
              query: { limit: 10, offset: 0, query: u },
            },
          })
        ).items;
      }),
      (t[5] = r),
      (t[6] = u),
      (t[7] = p))
    : (p = t[7]);
  let m;
  return (
    t[8] !== d || t[9] !== f || t[10] !== p
      ? ((m = { queryKey: d, enabled: f, queryFn: p, staleTime: i.ONE_MINUTE }),
        (t[8] = d),
        (t[9] = f),
        (t[10] = p),
        (t[11] = m))
      : (m = t[11]),
    n(m)
  );
}
export {
  T as a,
  b as c,
  E as i,
  y as l,
  O as n,
  w as o,
  D as r,
  C as s,
  A as t,
};
//# sourceMappingURL=use-workspace-users.js.map
