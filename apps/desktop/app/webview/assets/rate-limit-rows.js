import { s as e } from "./chunk-Bj-mKKzh.js";
import { ea as t } from "./src-C.js";
import { _n as n } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as r, t as i } from "./jsx-runtime.js";
import { t as a } from "./clsx-BcPLHiun.js";
import {
  G as o,
  S as s,
  U as c,
  X as l,
  Z as u,
  w as d,
  wt as f,
  y as p,
} from "./setting-storage.js";
import { c as m, i as h } from "./statsig--EYRNU53.js";
import { t as g } from "./request-DWZTrEAr.js";
import { r as _ } from "./toast-signal.js";
import { t as v } from "./button.js";
import { a as y, d as b, i as x, l as S, n as C } from "./dialog-layout.js";
import { r as w } from "./modal-controller-state.js";
import {
  $ as T,
  A as E,
  G as D,
  K as O,
  M as k,
  V as A,
  W as j,
  q as M,
} from "./use-rate-limit.js";
import { t as N } from "./checkbox-DtuSNXXy.js";
function P({ intl: e, amount: t, currencyCode: n, currencyFractionDigits: r }) {
  let i = r ?? F({ intl: e, currencyCode: n });
  return e.formatNumber(t, {
    style: `currency`,
    currency: n,
    minimumFractionDigits: i,
    maximumFractionDigits: i,
  });
}
function F({ intl: e, currencyCode: t }) {
  return (
    e.formatters
      .getNumberFormat(e.locale, { style: `currency`, currency: t })
      .resolvedOptions().maximumFractionDigits ?? 0
  );
}
var ee = [500, 1e3, 2e3],
  I = 1e3;
function te(e) {
  if (!e.isEnabled) return String(ee[0]);
  let t = R(e.rechargeTarget ?? ``);
  return t.kind === `valid` ? String(t.value) : String(ee[0]);
}
function ne(e) {
  if (!e.isEnabled) return `125`;
  let t = R(e.rechargeThreshold ?? ``);
  return t.kind === `valid` ? String(t.value) : `125`;
}
function re(e) {
  return e.isEnabled
    ? e.rechargeMonthlyLimit == null
      ? ``
      : L(e.rechargeMonthlyLimit)
    : ``;
}
function ie(e) {
  let t = R(e);
  switch (t.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return t.value < 125 ? `below-minimum` : null;
  }
}
function ae({ minimumBalance: e, targetBalance: t }) {
  let n = ie(t);
  if (n != null) return n;
  let r = R(e),
    i = R(t);
  return r.kind === `valid` && i.kind === `valid` && i.value - r.value < 125
    ? `target-balance-below-minimum`
    : null;
}
function oe(e) {
  if (e == null || e.minorUnitExponent == null || e.amountPerCredit <= 0)
    return 250;
  let t = e.amountPerCredit * 10 ** e.minorUnitExponent,
    n = Math.ceil(I / t);
  return Math.max(250, pe(n, 250));
}
function se({ value: e, pricingInfo: t }) {
  let n = R(e);
  switch (n.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return n.value < oe(t)
        ? `below-minimum`
        : n.value % 250 == 0
          ? null
          : `invalid-increment`;
  }
}
function ce({
  value: e,
  pricingInfo: t,
  groupSeparator: n,
  decimalSeparator: r,
}) {
  let i = le({
    value: e,
    pricingInfo: t,
    groupSeparator: n,
    decimalSeparator: r,
  });
  if (i == null) return null;
  let a = Math.round(i);
  return Math.abs(i - a) > 1e-6 ? null : String(a);
}
function le({
  value: e,
  pricingInfo: t,
  groupSeparator: n,
  decimalSeparator: r,
}) {
  let i = L(e)
    .replaceAll(n, ``)
    .replaceAll(r, `.`)
    .replace(/[^\d.]/g, ``);
  if (!/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(i)) return null;
  let a = Number.parseFloat(i);
  return t == null || t.amountPerCredit <= 0 || !Number.isFinite(a) || a <= 0
    ? null
    : a / t.amountPerCredit;
}
function ue({ monthlyLimit: e, targetBalance: t }) {
  let n = R(e),
    r = R(t);
  switch (n.kind) {
    case `missing`:
      return null;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return r.kind === `valid` && n.value < r.value
        ? `monthly-limit-below-target`
        : null;
  }
}
function de({ minimumBalance: e, targetBalance: t, monthlyLimit: n }) {
  if (
    ie(e) != null ||
    ae({ minimumBalance: e, targetBalance: t }) != null ||
    ue({ monthlyLimit: n, targetBalance: t }) != null
  )
    return null;
  let r = Number.parseInt(L(e), 10),
    i = Number.parseInt(L(t), 10),
    a = L(n);
  return {
    recharge_threshold: String(r),
    recharge_target: String(i),
    recharge_monthly_limit: a.length > 0 ? a : null,
  };
}
function fe({ isEnabled: e, serverState: t, savePayload: n }) {
  return e
    ? n == null
      ? null
      : t.isEnabled
        ? n.recharge_threshold !== t.rechargeThreshold ||
          n.recharge_target !== t.rechargeTarget ||
          n.recharge_monthly_limit !== t.rechargeMonthlyLimit
          ? `update`
          : null
        : `enable`
    : t.isEnabled
      ? `disable`
      : null;
}
function L(e) {
  return e?.trim() ?? ``;
}
function R(e) {
  let t = L(e);
  return t.length === 0
    ? { kind: `missing` }
    : /^\d+$/.test(t)
      ? { kind: `valid`, value: Number.parseInt(t, 10) }
      : { kind: `invalid` };
}
function pe(e, t) {
  return Math.ceil(e / t) * t;
}
function me({ intl: e, creditQuantity: t, pricingInfo: n }) {
  return Number.isFinite(t)
    ? P({
        intl: e,
        amount: t * n.amountPerCredit,
        currencyCode: n.currencyCode,
        currencyFractionDigits: n.minorUnitExponent,
      })
    : null;
}
function z({ intl: e, creditQuantity: t, pricingInfo: n }) {
  let r = _e({ intl: e, amount: t * n.amountPerCredit, pricingInfo: n });
  return r == null
    ? null
    : r
        .filter((e) => e.type !== `currency`)
        .map((e) => e.value)
        .join(``)
        .trim();
}
function he({ intl: e, pricingInfo: t }) {
  return (
    _e({ intl: e, amount: 0, pricingInfo: t })?.find(
      (e) => e.type === `currency`,
    )?.value ?? null
  );
}
function B({ intl: e, creditQuantity: t, pricingInfo: n }) {
  if (!Number.isFinite(t)) return null;
  let r = t * n.amountPerCredit;
  return P({
    intl: e,
    amount: r,
    currencyCode: n.currencyCode,
    currencyFractionDigits: Number.isInteger(r) ? 0 : n.minorUnitExponent,
  });
}
function ge({ intl: e, creditBalance: t, rechargeTarget: n, pricingInfo: r }) {
  let i = Number.parseInt(L(n), 10);
  if (!Number.isFinite(i)) return null;
  let a = Math.max(0, Math.floor(Number(t ?? 0))),
    o = Math.max(0, i - a);
  return o === 0 ? null : me({ intl: e, creditQuantity: o, pricingInfo: r });
}
function _e({ intl: e, amount: t, pricingInfo: n }) {
  return Number.isFinite(t)
    ? e.formatters
        .getNumberFormat(e.locale, {
          style: `currency`,
          currency: n.currencyCode,
          minimumFractionDigits: n.minorUnitExponent ?? void 0,
          maximumFractionDigits: n.minorUnitExponent ?? void 0,
        })
        .formatToParts(t)
    : null;
}
var V = f(),
  H = e(r(), 1),
  U = i();
function ve(e) {
  let t = (0, V.c)(41),
    {
      intl: n,
      value: r,
      selection: i,
      pricingInfo: o,
      error: s,
      minimumQuantity: l,
      quantityStep: u,
      onChange: d,
      onSelectionChange: f,
      onInvalidCurrencyDraftChange: p,
      onBlur: m,
    } = e,
    h;
  t[0] === r ? (h = t[1]) : ((h = L(r)), (t[0] = r), (t[1] = h));
  let g = h,
    _ = i === `preset`,
    v;
  t[2] !== n ||
  t[3] !== _ ||
  t[4] !== d ||
  t[5] !== f ||
  t[6] !== o ||
  t[7] !== g
    ? ((v = ee.map((e) =>
        (0, U.jsx)(
          be,
          {
            creditQuantity: e,
            pricingInfo: o,
            isSelected: _ && String(e) === g,
            intl: n,
            onClick: () => {
              (f(`preset`), d(String(e)));
            },
          },
          e,
        ),
      )),
      (t[2] = n),
      (t[3] = _),
      (t[4] = d),
      (t[5] = f),
      (t[6] = o),
      (t[7] = g),
      (t[8] = v))
    : (v = t[8]);
  let y = !_,
    b = _ ? `border border-token-border` : `border-2 border-token-text-primary`,
    x;
  t[9] === b
    ? (x = t[10])
    : ((x = a(
        `cursor-interaction flex h-[72px] items-center justify-center rounded-xl px-4 text-base`,
        b,
      )),
      (t[9] = b),
      (t[10] = x));
  let S;
  t[11] !== _ || t[12] !== d || t[13] !== f
    ? ((S = () => {
        _ && (f(`custom`), d(``));
      }),
      (t[11] = _),
      (t[12] = d),
      (t[13] = f),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, U.jsx)(c, {
        id: `settings.usage.creditReload.amount.other`,
        defaultMessage: `Other`,
        description: `Option label for entering a custom reload amount`,
      })),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== y || t[17] !== x || t[18] !== S
    ? ((w = (0, U.jsx)(`button`, {
        type: `button`,
        "aria-pressed": y,
        className: x,
        onClick: S,
        children: C,
      })),
      (t[16] = y),
      (t[17] = x),
      (t[18] = S),
      (t[19] = w))
    : (w = t[19]);
  let T;
  t[20] !== v || t[21] !== w
    ? ((T = (0, U.jsxs)(`div`, {
        className: `grid grid-cols-4 gap-2`,
        children: [v, w],
      })),
      (t[20] = v),
      (t[21] = w),
      (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] !== s ||
  t[24] !== n ||
  t[25] !== _ ||
  t[26] !== l ||
  t[27] !== m ||
  t[28] !== d ||
  t[29] !== p ||
  t[30] !== o ||
  t[31] !== r
    ? ((E = _
        ? null
        : (0, U.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [
              (0, U.jsx)(`label`, {
                className: `text-sm text-token-text-primary`,
                children: (0, U.jsx)(c, {
                  id: `settings.usage.creditReload.amount.other`,
                  defaultMessage: `Other`,
                  description: `Option label for entering a custom reload amount`,
                }),
              }),
              (0, U.jsx)(W, {
                intl: n,
                value: r,
                pricingInfo: o,
                placeholder:
                  z({ intl: n, creditQuantity: l, pricingInfo: o }) ?? ``,
                hasError: s != null,
                ariaLabel: n.formatMessage({
                  id: `settings.usage.creditReload.amount.other.ariaLabel`,
                  defaultMessage: `Custom reload amount`,
                  description: `Accessible label for the custom reload amount input`,
                }),
                showCreditQuantity: !0,
                onInvalidCurrencyDraftChange: p,
                onBlur: m,
                onChange: d,
              }),
            ],
          })),
      (t[23] = s),
      (t[24] = n),
      (t[25] = _),
      (t[26] = l),
      (t[27] = m),
      (t[28] = d),
      (t[29] = p),
      (t[30] = o),
      (t[31] = r),
      (t[32] = E))
    : (E = t[32]);
  let D;
  t[33] !== s || t[34] !== l || t[35] !== u
    ? ((D =
        s == null
          ? null
          : (0, U.jsx)(ye, {
              fieldError: s,
              minimumQuantity: l,
              quantityStep: u,
            })),
      (t[33] = s),
      (t[34] = l),
      (t[35] = u),
      (t[36] = D))
    : (D = t[36]);
  let O;
  return (
    t[37] !== E || t[38] !== D || t[39] !== T
      ? ((O = (0, U.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [T, E, D],
        })),
        (t[37] = E),
        (t[38] = D),
        (t[39] = T),
        (t[40] = O))
      : (O = t[40]),
    O
  );
}
function W(e) {
  let t = (0, V.c)(39),
    {
      intl: n,
      value: r,
      pricingInfo: i,
      placeholder: o,
      hasError: s,
      ariaLabel: l,
      showCreditQuantity: u,
      onChange: d,
      onInvalidCurrencyDraftChange: f,
      onBlur: p,
    } = e,
    m = u === void 0 ? !1 : u,
    [h, g] = (0, H.useState)(null),
    _,
    v,
    y,
    b;
  if (t[0] !== h || t[1] !== n || t[2] !== i || t[3] !== m || t[4] !== r) {
    let e = m
      ? z({
          intl: n,
          creditQuantity: Number.parseInt(L(r), 10),
          pricingInfo: i,
        })
      : B({
          intl: n,
          creditQuantity: Number.parseInt(L(r), 10),
          pricingInfo: i,
        });
    ((y = h ?? e ?? r),
      (v = m && y.length > 0 ? he({ intl: n, pricingInfo: i }) : null),
      (_ = xe({ intl: n, value: y, pricingInfo: i })),
      (b = Se({ intl: n, value: y, pricingInfo: i })),
      (t[0] = h),
      (t[1] = n),
      (t[2] = i),
      (t[3] = m),
      (t[4] = r),
      (t[5] = _),
      (t[6] = v),
      (t[7] = y),
      (t[8] = b));
  } else ((_ = t[5]), (v = t[6]), (y = t[7]), (b = t[8]));
  let x = b,
    S = m && `pr-28`,
    C = v != null && `pl-7`,
    w;
  t[9] !== S || t[10] !== C
    ? ((w = a(
        `bg-token-input-background text-token-text-primary placeholder:text-token-input-placeholder-foreground h-8 w-full rounded-xl border border-token-border px-3 text-left text-sm tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-token-focus`,
        S,
        C,
        `aria-invalid:border-token-error-foreground aria-invalid:ring-token-error-foreground/20`,
      )),
      (t[9] = S),
      (t[10] = C),
      (t[11] = w))
    : (w = t[11]);
  let T;
  t[12] !== _ || t[13] !== h || t[14] !== p || t[15] !== f
    ? ((T = () => {
        ((h == null || _ != null) && g(null),
          f?.(h != null && h.length > 0 && _ == null),
          p());
      }),
      (t[12] = _),
      (t[13] = h),
      (t[14] = p),
      (t[15] = f),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] !== n || t[18] !== d || t[19] !== f || t[20] !== i
    ? ((E = (e) => {
        let t = e.currentTarget.value;
        if (!K({ intl: n, value: t, pricingInfo: i })) return;
        g(t);
        let r = xe({ intl: n, value: t, pricingInfo: i });
        (f?.(t.length > 0 && r == null), d(r ?? ``));
      }),
      (t[17] = n),
      (t[18] = d),
      (t[19] = f),
      (t[20] = i),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== l ||
  t[23] !== y ||
  t[24] !== s ||
  t[25] !== o ||
  t[26] !== w ||
  t[27] !== T ||
  t[28] !== E
    ? ((D = (0, U.jsx)(`input`, {
        value: y,
        placeholder: o,
        inputMode: `decimal`,
        "aria-label": l,
        "aria-invalid": s,
        className: w,
        onBlur: T,
        onChange: E,
      })),
      (t[22] = l),
      (t[23] = y),
      (t[24] = s),
      (t[25] = o),
      (t[26] = w),
      (t[27] = T),
      (t[28] = E),
      (t[29] = D))
    : (D = t[29]);
  let O;
  t[30] === v
    ? (O = t[31])
    : ((O =
        v == null
          ? null
          : (0, U.jsx)(`span`, {
              className: `pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-token-text-secondary`,
              children: v,
            })),
      (t[30] = v),
      (t[31] = O));
  let k;
  t[32] !== x || t[33] !== m
    ? ((k =
        m && x != null
          ? (0, U.jsx)(`span`, {
              className: `pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-token-text-secondary`,
              children: (0, U.jsx)(c, {
                id: `settings.usage.creditReload.amount.credits`,
                defaultMessage: `{creditQuantity, number} credits`,
                description: `Credit count shown below a reload amount price`,
                values: { creditQuantity: x },
              }),
            })
          : null),
      (t[32] = x),
      (t[33] = m),
      (t[34] = k))
    : (k = t[34]);
  let A;
  return (
    t[35] !== k || t[36] !== D || t[37] !== O
      ? ((A = (0, U.jsxs)(`div`, {
          className: `relative`,
          children: [D, O, k],
        })),
        (t[35] = k),
        (t[36] = D),
        (t[37] = O),
        (t[38] = A))
      : (A = t[38]),
    A
  );
}
function ye(e) {
  let t = (0, V.c)(24),
    { fieldError: n, minimumQuantity: r, quantityStep: i } = e,
    a = r === void 0 ? 125 : r,
    o = i === void 0 ? null : i;
  if (n == null) return null;
  let s;
  t[0] === n
    ? (s = t[1])
    : ((s =
        n === `missing`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.error.missing`,
              defaultMessage: `Enter an amount`,
              description: `Validation message when a credit reload amount is missing`,
            })
          : null),
      (t[0] = n),
      (t[1] = s));
  let l;
  t[2] === n
    ? (l = t[3])
    : ((l =
        n === `not-whole-number`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.error.wholeNumber`,
              defaultMessage: `Enter a whole number of credits`,
              description: `Validation message when a credit reload amount is not a whole number`,
            })
          : null),
      (t[2] = n),
      (t[3] = l));
  let u;
  t[4] === n
    ? (u = t[5])
    : ((u =
        n === `invalid-currency-amount`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.error.invalidCurrencyAmount`,
              defaultMessage: `Enter an amount that converts to a whole number of credits`,
              description: `Validation message when a typed currency amount does not convert to a whole number of credits`,
            })
          : null),
      (t[4] = n),
      (t[5] = u));
  let d;
  t[6] !== n || t[7] !== a
    ? ((d =
        n === `below-minimum`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.error.minimum`,
              defaultMessage: `Enter at least {minimumQuantity, number} credits`,
              description: `Validation message when a credit reload amount is below the minimum`,
              values: { minimumQuantity: a },
            })
          : null),
      (t[6] = n),
      (t[7] = a),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== n || t[10] !== o
    ? ((f =
        n === `invalid-increment`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.error.increment`,
              defaultMessage: `Enter credits in increments of {quantityStep, number}`,
              description: `Validation message when a one-time reload amount is outside the allowed increment`,
              values: { quantityStep: o },
            })
          : null),
      (t[9] = n),
      (t[10] = o),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === n
    ? (p = t[13])
    : ((p =
        n === `monthly-limit-below-target`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.error.monthlyLimit`,
              defaultMessage: `Set the monthly limit high enough to cover one reload`,
              description: `Validation message when the monthly limit cannot cover one reload`,
            })
          : null),
      (t[12] = n),
      (t[13] = p));
  let m;
  t[14] === n
    ? (m = t[15])
    : ((m =
        n === `target-balance-below-minimum`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.error.targetBalance`,
              defaultMessage: `Set the target balance at least {minimumQuantity, number} credits above the minimum balance`,
              description: `Validation message when the auto reload target balance is not above the minimum balance`,
              values: { minimumQuantity: 125 },
            })
          : null),
      (t[14] = n),
      (t[15] = m));
  let h;
  return (
    t[16] !== s ||
    t[17] !== l ||
    t[18] !== u ||
    t[19] !== d ||
    t[20] !== f ||
    t[21] !== p ||
    t[22] !== m
      ? ((h = (0, U.jsxs)(`p`, {
          className: `text-sm text-token-error-foreground`,
          children: [s, l, u, d, f, p, m],
        })),
        (t[16] = s),
        (t[17] = l),
        (t[18] = u),
        (t[19] = d),
        (t[20] = f),
        (t[21] = p),
        (t[22] = m),
        (t[23] = h))
      : (h = t[23]),
    h
  );
}
function be(e) {
  let t = (0, V.c)(18),
    {
      creditQuantity: n,
      pricingInfo: r,
      isSelected: i,
      intl: o,
      onClick: s,
    } = e,
    l;
  t[0] !== n || t[1] !== o || t[2] !== r
    ? ((l = B({ intl: o, creditQuantity: n, pricingInfo: r })),
      (t[0] = n),
      (t[1] = o),
      (t[2] = r),
      (t[3] = l))
    : (l = t[3]);
  let u = l,
    d = i ? `border-2 border-token-text-primary` : `border border-token-border`,
    f;
  t[4] === d
    ? (f = t[5])
    : ((f = a(
        `cursor-interaction flex h-[72px] flex-col items-center justify-center rounded-xl px-3 text-center`,
        d,
      )),
      (t[4] = d),
      (t[5] = f));
  let p;
  t[6] === u
    ? (p = t[7])
    : ((p =
        u ??
        (0, U.jsx)(c, {
          id: `settings.usage.creditReload.amount.pending`,
          defaultMessage: `—`,
          description: `Placeholder shown while a reload amount price is loading`,
        })),
      (t[6] = u),
      (t[7] = p));
  let m;
  t[8] === p
    ? (m = t[9])
    : ((m = (0, U.jsx)(`span`, {
        className: `text-base font-medium text-token-text-primary`,
        children: p,
      })),
      (t[8] = p),
      (t[9] = m));
  let h;
  t[10] === n
    ? (h = t[11])
    : ((h = (0, U.jsx)(`span`, {
        className: `text-xs text-token-text-secondary`,
        children: (0, U.jsx)(c, {
          id: `settings.usage.creditReload.amount.credits`,
          defaultMessage: `{creditQuantity, number} credits`,
          description: `Credit count shown below a reload amount price`,
          values: { creditQuantity: n },
        }),
      })),
      (t[10] = n),
      (t[11] = h));
  let g;
  return (
    t[12] !== i || t[13] !== s || t[14] !== f || t[15] !== m || t[16] !== h
      ? ((g = (0, U.jsxs)(`button`, {
          type: `button`,
          "aria-pressed": i,
          className: f,
          onClick: s,
          children: [m, h],
        })),
        (t[12] = i),
        (t[13] = s),
        (t[14] = f),
        (t[15] = m),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function xe({ intl: e, value: t, pricingInfo: n }) {
  let r = t.trim();
  if (r.length === 0) return ``;
  let { groupSeparator: i, decimalSeparator: a } = G({
    intl: e,
    pricingInfo: n,
  });
  return ce({
    value: r,
    pricingInfo: n,
    groupSeparator: i,
    decimalSeparator: a,
  });
}
function Se({ intl: e, value: t, pricingInfo: n }) {
  let r = t.trim();
  if (r.length === 0) return null;
  let { groupSeparator: i, decimalSeparator: a } = G({
    intl: e,
    pricingInfo: n,
  });
  return le({
    value: r,
    pricingInfo: n,
    groupSeparator: i,
    decimalSeparator: a,
  });
}
function G({ intl: e, pricingInfo: t }) {
  let n = e.formatters
    .getNumberFormat(e.locale, {
      style: `currency`,
      currency: t.currencyCode,
      minimumFractionDigits: t.minorUnitExponent ?? void 0,
      maximumFractionDigits: t.minorUnitExponent ?? void 0,
    })
    .formatToParts(12345.6);
  return {
    groupSeparator: n.find((e) => e.type === `group`)?.value ?? `,`,
    decimalSeparator: n.find((e) => e.type === `decimal`)?.value ?? `.`,
  };
}
function K({ intl: e, value: t, pricingInfo: n }) {
  let { groupSeparator: r, decimalSeparator: i } = G({
      intl: e,
      pricingInfo: n,
    }),
    a = he({ intl: e, pricingInfo: n }),
    o = 0;
  for (let e of t)
    if (
      !(
        /^\d$/.test(e) ||
        e === r ||
        e.trim().length === 0 ||
        (a != null && a.includes(e))
      ) &&
      !(e === i && ((o += 1), o <= 1))
    )
      return !1;
  return !0;
}
function Ce(e) {
  let t = (0, V.c)(47),
    {
      intl: n,
      minimumBalance: r,
      monthlyLimit: i,
      pricingInfo: o,
      minimumBalanceError: s,
      monthlyLimitError: l,
      hasImmediateTopUpFailure: u,
      immediateTopUpFailureAmount: d,
      isManagePaymentPending: f,
      onMinimumBalanceChange: p,
      onInvalidMinimumBalanceCurrencyDraftChange: m,
      onMinimumBalanceBlur: h,
      onMonthlyLimitChange: g,
      onInvalidMonthlyLimitCurrencyDraftChange: _,
      onMonthlyLimitBlur: v,
      onOpenManagePayment: y,
    } = e,
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, U.jsx)(`label`, {
        className: `text-sm text-token-text-primary`,
        children: (0, U.jsx)(c, {
          id: `settings.usage.creditReload.minimumBalance`,
          defaultMessage: `Minimum balance`,
          description: `Label shown above the minimum balance input`,
        }),
      })),
      (t[0] = b))
    : (b = t[0]);
  let x = s != null,
    S;
  t[1] === n
    ? (S = t[2])
    : ((S = n.formatMessage({
        id: `settings.usage.creditReload.minimumBalance.ariaLabel`,
        defaultMessage: `Minimum balance`,
        description: `Accessible label for the minimum balance input`,
      })),
      (t[1] = n),
      (t[2] = S));
  let C;
  t[3] !== n ||
  t[4] !== r ||
  t[5] !== m ||
  t[6] !== h ||
  t[7] !== p ||
  t[8] !== o ||
  t[9] !== x ||
  t[10] !== S
    ? ((C = (0, U.jsx)(W, {
        intl: n,
        value: r,
        pricingInfo: o,
        placeholder: ``,
        hasError: x,
        ariaLabel: S,
        onInvalidCurrencyDraftChange: m,
        onBlur: h,
        onChange: p,
      })),
      (t[3] = n),
      (t[4] = r),
      (t[5] = m),
      (t[6] = h),
      (t[7] = p),
      (t[8] = o),
      (t[9] = x),
      (t[10] = S),
      (t[11] = C))
    : (C = t[11]);
  let w;
  t[12] === s
    ? (w = t[13])
    : ((w = s == null ? null : (0, U.jsx)(ye, { fieldError: s })),
      (t[12] = s),
      (t[13] = w));
  let T;
  t[14] !== C || t[15] !== w
    ? ((T = (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [b, C, w],
      })),
      (t[14] = C),
      (t[15] = w),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, U.jsx)(c, {
        id: `settings.usage.creditReload.spendLimit`,
        defaultMessage: `Maximum monthly spend`,
        description: `Label shown above the monthly reload spend limit`,
      })),
      (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, U.jsxs)(`label`, {
        className: `flex items-center gap-1 text-sm text-token-text-primary`,
        children: [
          E,
          (0, U.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: (0, U.jsx)(c, {
              id: `settings.usage.creditReload.spendLimit.optional`,
              defaultMessage: `(Optional)`,
              description: `Helper label marking the monthly reload spend limit as optional`,
            }),
          }),
        ],
      })),
      (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] === n
    ? (O = t[20])
    : ((O = n.formatMessage({
        id: `settings.usage.creditReload.spendLimit.placeholder`,
        defaultMessage: `No limit`,
        description: `Placeholder shown when no monthly reload spend limit is set`,
      })),
      (t[19] = n),
      (t[20] = O));
  let k = l != null,
    A;
  t[21] === n
    ? (A = t[22])
    : ((A = n.formatMessage({
        id: `settings.usage.creditReload.spendLimit.ariaLabel`,
        defaultMessage: `Monthly reload spend limit`,
        description: `Accessible label for the monthly reload spend limit input`,
      })),
      (t[21] = n),
      (t[22] = A));
  let j;
  t[23] !== n ||
  t[24] !== i ||
  t[25] !== _ ||
  t[26] !== v ||
  t[27] !== g ||
  t[28] !== o ||
  t[29] !== k ||
  t[30] !== A ||
  t[31] !== O
    ? ((j = (0, U.jsx)(W, {
        intl: n,
        value: i,
        pricingInfo: o,
        placeholder: O,
        hasError: k,
        ariaLabel: A,
        showCreditQuantity: !0,
        onInvalidCurrencyDraftChange: _,
        onBlur: v,
        onChange: g,
      })),
      (t[23] = n),
      (t[24] = i),
      (t[25] = _),
      (t[26] = v),
      (t[27] = g),
      (t[28] = o),
      (t[29] = k),
      (t[30] = A),
      (t[31] = O),
      (t[32] = j))
    : (j = t[32]);
  let M;
  t[33] === l
    ? (M = t[34])
    : ((M = l == null ? null : (0, U.jsx)(ye, { fieldError: l })),
      (t[33] = l),
      (t[34] = M));
  let N;
  t[35] !== j || t[36] !== M
    ? ((N = (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [D, j, M],
      })),
      (t[35] = j),
      (t[36] = M),
      (t[37] = N))
    : (N = t[37]);
  let P;
  t[38] !== u || t[39] !== d || t[40] !== f || t[41] !== y
    ? ((P = u
        ? (0, U.jsx)(`div`, {
            className: `rounded-2xl border border-token-error-foreground/20 bg-token-input-validation-error-background/20 px-4 py-3 text-sm leading-5 text-token-text-primary`,
            children:
              d == null
                ? (0, U.jsx)(c, {
                    id: `settings.usage.creditReload.immediateTopUpFailure.generic`,
                    defaultMessage: `The initial reload failed. <managePayment>Update your payment method</managePayment>`,
                    description: `Inline error shown when the initial auto reload purchase fails`,
                    values: {
                      managePayment: (e) =>
                        (0, U.jsx)(`button`, {
                          type: `button`,
                          className: a(
                            `cursor-interaction font-medium underline underline-offset-2`,
                            f && `pointer-events-none opacity-60`,
                          ),
                          disabled: f,
                          onClick: y,
                          children: e,
                        }),
                    },
                  })
                : (0, U.jsx)(c, {
                    id: `settings.usage.creditReload.immediateTopUpFailure.amount`,
                    defaultMessage: `The initial reload for an estimated {amount} failed. <managePayment>Update your payment method</managePayment>`,
                    description: `Inline error shown when the initial auto reload purchase fails with a price estimate`,
                    values: {
                      amount: d,
                      managePayment: (e) =>
                        (0, U.jsx)(`button`, {
                          type: `button`,
                          className: a(
                            `cursor-interaction font-medium underline underline-offset-2`,
                            f && `pointer-events-none opacity-60`,
                          ),
                          disabled: f,
                          onClick: y,
                          children: e,
                        }),
                    },
                  }),
          })
        : null),
      (t[38] = u),
      (t[39] = d),
      (t[40] = f),
      (t[41] = y),
      (t[42] = P))
    : (P = t[42]);
  let F;
  return (
    t[43] !== N || t[44] !== P || t[45] !== T
      ? ((F = (0, U.jsxs)(U.Fragment, { children: [T, N, P] })),
        (t[43] = N),
        (t[44] = P),
        (t[45] = T),
        (t[46] = F))
      : (F = t[46]),
    F
  );
}
var we = { duration: 3 },
  q = `https://help.openai.com/en/articles/20001106-codex-rate-card`,
  J = `min-w-[88px] justify-center`;
function Te(e) {
  let t = (0, V.c)(35),
    {
      creditDetails: n,
      pricingInfo: r,
      onOpenChange: i,
      dialogDescriptionId: a,
    } = e,
    s = o(),
    [l, u] = (0, H.useState)(String(ee[0])),
    [d, f] = (0, H.useState)(`preset`),
    [p, m] = (0, H.useState)(!1),
    [h, g] = (0, H.useState)(!1),
    _;
  t[0] !== h || t[1] !== r || t[2] !== l
    ? ((_ = h ? `invalid-currency-amount` : se({ value: l, pricingInfo: r })),
      (t[0] = h),
      (t[1] = r),
      (t[2] = l),
      (t[3] = _))
    : (_ = t[3]);
  let b = _,
    x;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, U.jsx)(c, {
        id: `settings.usage.creditReload.oneTimePurchase.title`,
        defaultMessage: `One time credit purchase`,
        description: `Title for the one time credit purchase modal`,
      })),
      (t[4] = x))
    : (x = t[4]);
  let S = x,
    C;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, U.jsx)(c, {
        id: `settings.usage.creditReload.oneTimePurchase.description`,
        defaultMessage: `Purchase credits so you can continue using Codex if your usage runs out. <link>View rate card</link>`,
        description: `Description for the one time credit purchase modal`,
        values: { link: Ee },
      })),
      (t[5] = C))
    : (C = t[5]);
  let w = C,
    T;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, U.jsx)(c, {
        id: `settings.usage.creditReload.oneTimePurchase.screenReaderDescription`,
        defaultMessage: `Purchase credits so you can continue using Codex if your usage runs out. View rate card`,
        description: `Screen reader description for the one time credit purchase modal`,
      })),
      (t[6] = T))
    : (T = t[6]);
  let E = T,
    D = b != null,
    O;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, U.jsx)(c, {
        id: `settings.usage.creditReload.continueToCheckout`,
        defaultMessage: `Continue to checkout`,
        description: `Button label to open checkout from a credit purchase modal`,
      })),
      (t[7] = O))
    : (O = t[7]);
  let k;
  t[8] === D
    ? (k = t[9])
    : ((k = (0, U.jsx)(v, {
        color: `primary`,
        type: `submit`,
        className: J,
        disabled: D,
        children: O,
      })),
      (t[8] = D),
      (t[9] = k));
  let A;
  t[10] !== n || t[11] !== s || t[12] !== r || t[13] !== k
    ? ((A = (0, U.jsx)(Ie, {
        intl: s,
        creditDetails: n,
        pricingInfo: r,
        actions: k,
      })),
      (t[10] = n),
      (t[11] = s),
      (t[12] = r),
      (t[13] = k),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] !== i || t[16] !== l || t[17] !== b
    ? ((j = () => {
        (m(!0), b ?? Re({ quantity: l, onOpenChange: i }));
      }),
      (t[15] = i),
      (t[16] = l),
      (t[17] = b),
      (t[18] = j))
    : (j = t[18]);
  let M = p ? b : null,
    N;
  t[19] === r ? (N = t[20]) : ((N = oe(r)), (t[19] = r), (t[20] = N));
  let P;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => {
        (g(!1), f(e));
      }),
      (t[21] = P))
    : (P = t[21]);
  let F;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = () => {
        m(!0);
      }),
      (t[22] = F))
    : (F = t[22]);
  let I;
  t[23] !== d ||
  t[24] !== s ||
  t[25] !== r ||
  t[26] !== l ||
  t[27] !== M ||
  t[28] !== N
    ? ((I = (0, U.jsx)(y, {
        className: `gap-3 pt-4`,
        children: (0, U.jsx)(ve, {
          intl: s,
          value: l,
          selection: d,
          pricingInfo: r,
          error: M,
          minimumQuantity: N,
          quantityStep: 250,
          onChange: u,
          onSelectionChange: P,
          onInvalidCurrencyDraftChange: g,
          onBlur: F,
        }),
      })),
      (t[23] = d),
      (t[24] = s),
      (t[25] = r),
      (t[26] = l),
      (t[27] = M),
      (t[28] = N),
      (t[29] = I))
    : (I = t[29]);
  let te;
  return (
    t[30] !== a || t[31] !== I || t[32] !== A || t[33] !== j
      ? ((te = (0, U.jsx)(Ve, {
          dialogDescriptionId: a,
          screenReaderTitle: S,
          screenReaderDescription: E,
          headerTitle: S,
          headerSubtitle: w,
          footer: A,
          onSubmit: j,
          children: I,
        })),
        (t[30] = a),
        (t[31] = I),
        (t[32] = A),
        (t[33] = j),
        (t[34] = te))
      : (te = t[34]),
    te
  );
}
function Ee(e) {
  return (0, U.jsx)(Fe, { children: e });
}
function De(e) {
  let t = (0, V.c)(149),
    {
      variant: n,
      serverState: r,
      creditDetails: i,
      pricingInfo: a,
      enableAutoTopUpMutation: u,
      updateAutoTopUpMutation: f,
      disableAutoTopUpMutation: p,
      onOpenChange: m,
      dialogDescriptionId: h,
    } = e,
    g = l(s),
    v = o(),
    b;
  t[0] === r ? (b = t[1]) : ((b = te(r)), (t[0] = r), (t[1] = b));
  let x = b,
    [S, C] = (0, H.useState)(x),
    [w, E] = (0, H.useState)(Be(x) ? `preset` : `custom`),
    D;
  t[2] === r ? (D = t[3]) : ((D = ne(r)), (t[2] = r), (t[3] = D));
  let [O, k] = (0, H.useState)(D),
    A;
  t[4] === r ? (A = t[5]) : ((A = () => re(r)), (t[4] = r), (t[5] = A));
  let [j, M] = (0, H.useState)(A),
    [P, F] = (0, H.useState)(!0),
    [ee, I] = (0, H.useState)(!1),
    [ce, le] = (0, H.useState)(!1),
    [L, R] = (0, H.useState)(!1),
    [pe, me] = (0, H.useState)(!1),
    [z, he] = (0, H.useState)(!1),
    [B, _e] = (0, H.useState)(!1),
    [W, ye] = (0, H.useState)(!1),
    [be, xe] = (0, H.useState)(null),
    Se = u.isPending || f.isPending,
    G = p.isPending,
    K = Se || G,
    q = n === `add-credits` && !P,
    J;
  t[6] !== pe || t[7] !== q || t[8] !== O || t[9] !== a || t[10] !== S
    ? ((J = pe
        ? `invalid-currency-amount`
        : q
          ? se({ value: S, pricingInfo: a })
          : ae({ minimumBalance: O, targetBalance: S })),
      (t[6] = pe),
      (t[7] = q),
      (t[8] = O),
      (t[9] = a),
      (t[10] = S),
      (t[11] = J))
    : (J = t[11]);
  let Te = J,
    Ee;
  t[12] !== z || t[13] !== O
    ? ((Ee = z ? `invalid-currency-amount` : ie(O)),
      (t[12] = z),
      (t[13] = O),
      (t[14] = Ee))
    : (Ee = t[14]);
  let De = Ee,
    Pe;
  t[15] !== B || t[16] !== j || t[17] !== S
    ? ((Pe = B
        ? `invalid-currency-amount`
        : ue({ monthlyLimit: j, targetBalance: S })),
      (t[15] = B),
      (t[16] = j),
      (t[17] = S),
      (t[18] = Pe))
    : (Pe = t[18]);
  let Fe = Pe,
    Y,
    Le;
  t[19] !== z ||
  t[20] !== B ||
  t[21] !== O ||
  t[22] !== j ||
  t[23] !== r ||
  t[24] !== S
    ? ((Y =
        z || B
          ? null
          : de({ minimumBalance: O, targetBalance: S, monthlyLimit: j })),
      (Le = fe({ isEnabled: !0, serverState: r, savePayload: Y })),
      (t[19] = z),
      (t[20] = B),
      (t[21] = O),
      (t[22] = j),
      (t[23] = r),
      (t[24] = S),
      (t[25] = Y),
      (t[26] = Le))
    : ((Y = t[25]), (Le = t[26]));
  let X = Le,
    He = K || (q ? Te != null : X == null),
    Ue = K || X == null,
    We;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = () => {
        (ye(!1), xe(null));
      }),
      (t[27] = We))
    : (We = t[27]);
  let Ge = We,
    Ke;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = [`usage-settings`, `credit-reload`, `manage-payment`]),
      (t[28] = Ke))
    : (Ke = t[28]);
  let qe;
  t[29] !== v || t[30] !== g
    ? ((qe = {
        mutationKey: Ke,
        mutationFn: Ae,
        onSuccess: ke,
        onError: () => {
          g.get(_).danger(
            v.formatMessage({
              id: `settings.usage.creditReload.managePayment.error`,
              defaultMessage: `Unable to open payment settings right now. Please try again`,
              description: `Error shown when opening the manage payment flow from the combined reload dialog fails`,
            }),
            we,
          );
        },
      }),
      (t[29] = v),
      (t[30] = g),
      (t[31] = qe))
    : (qe = t[31]);
  let Je = d(qe),
    Ye;
  t[32] !== i ||
  t[33] !== u ||
  t[34] !== v ||
  t[35] !== K ||
  t[36] !== q ||
  t[37] !== m ||
  t[38] !== a ||
  t[39] !== X ||
  t[40] !== Y ||
  t[41] !== g ||
  t[42] !== S ||
  t[43] !== Te ||
  t[44] !== f
    ? ((Ye = async () => {
        if ((I(!0), q)) {
          Te ?? Re({ quantity: S, onOpenChange: m });
          return;
        }
        if ((le(!0), R(!0), !(X == null || K)))
          try {
            if ((Ge(), Y == null)) return;
            if (
              T(
                (X === `enable`
                  ? await u.mutateAsync(Y)
                  : await f.mutateAsync(Y)
                ).immediate_top_up_status,
              )
            ) {
              (ye(!0),
                xe(
                  ge({
                    intl: v,
                    creditBalance: i?.balance,
                    rechargeTarget: Y.recharge_target,
                    pricingInfo: a,
                  }),
                ));
              return;
            }
            (ze({ scope: g, intl: v, intent: X, kind: `success` }), m(!1));
          } catch {
            ze({ scope: g, intl: v, intent: X, kind: `danger` });
          }
      }),
      (t[32] = i),
      (t[33] = u),
      (t[34] = v),
      (t[35] = K),
      (t[36] = q),
      (t[37] = m),
      (t[38] = a),
      (t[39] = X),
      (t[40] = Y),
      (t[41] = g),
      (t[42] = S),
      (t[43] = Te),
      (t[44] = f),
      (t[45] = Ye))
    : (Ye = t[45]);
  let Xe = Ye,
    Ze;
  t[46] !== p || t[47] !== v || t[48] !== m || t[49] !== g
    ? ((Ze = async () => {
        try {
          (await p.mutateAsync(),
            ze({ scope: g, intl: v, intent: `disable`, kind: `success` }),
            m(!1));
        } catch {
          ze({ scope: g, intl: v, intent: `disable`, kind: `danger` });
        }
      }),
      (t[46] = p),
      (t[47] = v),
      (t[48] = m),
      (t[49] = g),
      (t[50] = Ze))
    : (Ze = t[50]);
  let Qe = Ze,
    Z,
    Q,
    $e;
  bb0: switch (n) {
    case `add-credits`: {
      let e;
      (t[51] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(c, {
            id: `settings.usage.creditReload.addCredits.title`,
            defaultMessage: `Add credits`,
            description: `Title for the add credits modal`,
          })),
          (t[51] = e))
        : (e = t[51]),
        (Z = e));
      let n;
      (t[52] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, U.jsx)(c, {
            id: `settings.usage.creditReload.addCredits.description`,
            defaultMessage: `Credits power Codex. Valid for 12 months. <link>View rate card</link>`,
            description: `Description for the add credits modal`,
            values: { link: Oe },
          })),
          (t[52] = n))
        : (n = t[52]),
        (Q = n));
      let r;
      (t[53] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, U.jsx)(c, {
            id: `settings.usage.creditReload.addCredits.screenReaderDescription`,
            defaultMessage: `Credits power Codex. Valid for 12 months. View rate card`,
            description: `Screen reader description for the add credits modal`,
          })),
          (t[53] = r))
        : (r = t[53]),
        ($e = r));
      break bb0;
    }
    case `setup-auto-reload`: {
      let e;
      (t[54] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(c, {
            id: `settings.usage.creditReload.autoReload.setup.title`,
            defaultMessage: `Set up auto-reload`,
            description: `Title for the auto reload setup modal`,
          })),
          (t[54] = e))
        : (e = t[54]),
        (Z = e));
      let n;
      (t[55] !== v || t[56] !== O || t[57] !== j || t[58] !== a || t[59] !== S
        ? ((n = (0, U.jsx)(Ne, {
            intl: v,
            targetBalance: S,
            minimumBalance: O,
            monthlyLimit: j,
            pricingInfo: a,
          })),
          (t[55] = v),
          (t[56] = O),
          (t[57] = j),
          (t[58] = a),
          (t[59] = S),
          (t[60] = n))
        : (n = t[60]),
        (Q = n));
      let r;
      (t[61] !== v || t[62] !== O || t[63] !== j || t[64] !== a || t[65] !== S
        ? ((r = (0, U.jsx)(Ne, {
            intl: v,
            targetBalance: S,
            minimumBalance: O,
            monthlyLimit: j,
            pricingInfo: a,
            rateCardLinkMode: `text`,
          })),
          (t[61] = v),
          (t[62] = O),
          (t[63] = j),
          (t[64] = a),
          (t[65] = S),
          (t[66] = r))
        : (r = t[66]),
        ($e = r));
      break bb0;
    }
    case `manage-auto-reload`: {
      let e;
      (t[67] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(c, {
            id: `settings.usage.creditReload.autoReload.manage.title`,
            defaultMessage: `Manage auto-reload`,
            description: `Title for the auto reload management modal`,
          })),
          (t[67] = e))
        : (e = t[67]),
        (Z = e));
      let n;
      (t[68] !== v || t[69] !== O || t[70] !== j || t[71] !== a || t[72] !== S
        ? ((n = (0, U.jsx)(Ne, {
            intl: v,
            targetBalance: S,
            minimumBalance: O,
            monthlyLimit: j,
            pricingInfo: a,
          })),
          (t[68] = v),
          (t[69] = O),
          (t[70] = j),
          (t[71] = a),
          (t[72] = S),
          (t[73] = n))
        : (n = t[73]),
        (Q = n));
      let r;
      (t[74] !== v || t[75] !== O || t[76] !== j || t[77] !== a || t[78] !== S
        ? ((r = (0, U.jsx)(Ne, {
            intl: v,
            targetBalance: S,
            minimumBalance: O,
            monthlyLimit: j,
            pricingInfo: a,
            rateCardLinkMode: `text`,
          })),
          (t[74] = v),
          (t[75] = O),
          (t[76] = j),
          (t[77] = a),
          (t[78] = S),
          (t[79] = r))
        : (r = t[79]),
        ($e = r));
    }
  }
  let et;
  t[80] === m
    ? (et = t[81])
    : ((et = () => {
        m(!1);
      }),
      (t[80] = m),
      (t[81] = et));
  let tt;
  t[82] === Qe
    ? (tt = t[83])
    : ((tt = () => {
        Qe();
      }),
      (t[82] = Qe),
      (t[83] = tt));
  let nt;
  t[84] !== K ||
  t[85] !== He ||
  t[86] !== Ue ||
  t[87] !== G ||
  t[88] !== q ||
  t[89] !== Se ||
  t[90] !== et ||
  t[91] !== tt ||
  t[92] !== n
    ? ((nt = (0, U.jsx)(je, {
        variant: n,
        isOneTimeAddCreditsPurchase: q,
        isSavePending: Se,
        isDisablePending: G,
        isActionPending: K,
        isAddCreditsSubmitDisabled: He,
        isAutoReloadSettingsSubmitDisabled: Ue,
        onCancel: et,
        onTurnOff: tt,
      })),
      (t[84] = K),
      (t[85] = He),
      (t[86] = Ue),
      (t[87] = G),
      (t[88] = q),
      (t[89] = Se),
      (t[90] = et),
      (t[91] = tt),
      (t[92] = n),
      (t[93] = nt))
    : (nt = t[93]);
  let rt;
  t[94] !== i || t[95] !== v || t[96] !== a || t[97] !== nt
    ? ((rt = (0, U.jsx)(Ie, {
        intl: v,
        creditDetails: i,
        pricingInfo: a,
        actions: nt,
      })),
      (t[94] = i),
      (t[95] = v),
      (t[96] = a),
      (t[97] = nt),
      (t[98] = rt))
    : (rt = t[98]);
  let it;
  t[99] === Xe
    ? (it = t[100])
    : ((it = () => {
        Xe();
      }),
      (t[99] = Xe),
      (t[100] = it));
  let at = ee ? Te : null,
    ot;
  t[101] !== q || t[102] !== a
    ? ((ot = q ? oe(a) : 125), (t[101] = q), (t[102] = a), (t[103] = ot))
    : (ot = t[103]);
  let st = q ? 250 : null,
    ct,
    lt;
  t[104] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (e) => {
        (Ge(), C(e));
      }),
      (lt = (e) => {
        (me(!1), E(e));
      }),
      (t[104] = ct),
      (t[105] = lt))
    : ((ct = t[104]), (lt = t[105]));
  let ut;
  t[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = () => {
        I(!0);
      }),
      (t[106] = ut))
    : (ut = t[106]);
  let dt;
  t[107] !== w ||
  t[108] !== v ||
  t[109] !== a ||
  t[110] !== at ||
  t[111] !== ot ||
  t[112] !== st ||
  t[113] !== S
    ? ((dt = (0, U.jsx)(ve, {
        intl: v,
        value: S,
        selection: w,
        pricingInfo: a,
        error: at,
        minimumQuantity: ot,
        quantityStep: st,
        onChange: ct,
        onSelectionChange: lt,
        onInvalidCurrencyDraftChange: me,
        onBlur: ut,
      })),
      (t[107] = w),
      (t[108] = v),
      (t[109] = a),
      (t[110] = at),
      (t[111] = ot),
      (t[112] = st),
      (t[113] = S),
      (t[114] = dt))
    : (dt = t[114]);
  let ft;
  t[115] !== v ||
  t[116] !== K ||
  t[117] !== P ||
  t[118] !== O ||
  t[119] !== j ||
  t[120] !== a ||
  t[121] !== S ||
  t[122] !== n
    ? ((ft =
        n === `add-credits`
          ? (0, U.jsxs)(`div`, {
              className: `relative flex min-w-0 items-center gap-3`,
              children: [
                (0, U.jsx)(N, {
                  id: `credit-reload-add-credits-auto-reload`,
                  className: `!border-token-text-primary data-[state=checked]:!border-token-text-primary data-[state=checked]:!bg-token-text-primary data-[state=checked]:!text-token-main-surface-primary`,
                  checked: P,
                  disabled: K,
                  onCheckedChange: (e) => {
                    (Ge(), F(e));
                  },
                }),
                (0, U.jsxs)(`div`, {
                  className: `flex min-w-0 flex-col gap-0.5`,
                  children: [
                    (0, U.jsx)(`label`, {
                      htmlFor: `credit-reload-add-credits-auto-reload`,
                      className: `cursor-interaction text-sm font-medium text-token-text-primary`,
                      children: (0, U.jsx)(c, {
                        id: `settings.usage.creditReload.autoReload.checkbox`,
                        defaultMessage: `Auto-reload`,
                        description: `Checkbox label for adding auto reload while buying credits`,
                      }),
                    }),
                    P
                      ? (0, U.jsx)(Me, {
                          intl: v,
                          targetBalance: S,
                          minimumBalance: O,
                          monthlyLimit: j,
                          pricingInfo: a,
                        })
                      : (0, U.jsx)(`p`, {
                          className: `text-sm leading-5 text-token-text-secondary`,
                          children: (0, U.jsx)(c, {
                            id: `settings.usage.creditReload.autoReload.checkboxDescription`,
                            defaultMessage: `Automatically add credits when your balance runs low`,
                            description: `Description for the optional auto reload checkbox in the add credits modal`,
                          }),
                        }),
                  ],
                }),
              ],
            })
          : null),
      (t[115] = v),
      (t[116] = K),
      (t[117] = P),
      (t[118] = O),
      (t[119] = j),
      (t[120] = a),
      (t[121] = S),
      (t[122] = n),
      (t[123] = ft))
    : (ft = t[123]);
  let pt;
  t[124] !== W ||
  t[125] !== be ||
  t[126] !== v ||
  t[127] !== q ||
  t[128] !== O ||
  t[129] !== De ||
  t[130] !== j ||
  t[131] !== Fe ||
  t[132] !== Je ||
  t[133] !== a ||
  t[134] !== ce ||
  t[135] !== L
    ? ((pt = q
        ? null
        : (0, U.jsx)(Ce, {
            intl: v,
            minimumBalance: O,
            monthlyLimit: j,
            pricingInfo: a,
            minimumBalanceError: ce ? De : null,
            monthlyLimitError: L ? Fe : null,
            hasImmediateTopUpFailure: W,
            immediateTopUpFailureAmount: be,
            isManagePaymentPending: Je.isPending,
            onMinimumBalanceChange: (e) => {
              (Ge(), k(e));
            },
            onInvalidMinimumBalanceCurrencyDraftChange: he,
            onMinimumBalanceBlur: () => {
              (le(!0), I(!0));
            },
            onMonthlyLimitChange: (e) => {
              (Ge(), M(e));
            },
            onInvalidMonthlyLimitCurrencyDraftChange: _e,
            onMonthlyLimitBlur: () => {
              R(!0);
            },
            onOpenManagePayment: () => {
              Je.mutate();
            },
          })),
      (t[124] = W),
      (t[125] = be),
      (t[126] = v),
      (t[127] = q),
      (t[128] = O),
      (t[129] = De),
      (t[130] = j),
      (t[131] = Fe),
      (t[132] = Je),
      (t[133] = a),
      (t[134] = ce),
      (t[135] = L),
      (t[136] = pt))
    : (pt = t[136]);
  let $;
  t[137] !== dt || t[138] !== ft || t[139] !== pt
    ? (($ = (0, U.jsxs)(y, {
        className: `gap-4 pt-4`,
        children: [dt, ft, pt],
      })),
      (t[137] = dt),
      (t[138] = ft),
      (t[139] = pt),
      (t[140] = $))
    : ($ = t[140]);
  let mt;
  return (
    t[141] !== Q ||
    t[142] !== h ||
    t[143] !== $e ||
    t[144] !== rt ||
    t[145] !== it ||
    t[146] !== $ ||
    t[147] !== Z
      ? ((mt = (0, U.jsx)(Ve, {
          dialogDescriptionId: h,
          screenReaderTitle: Z,
          screenReaderDescription: $e,
          headerTitle: Z,
          headerSubtitle: Q,
          footer: rt,
          onSubmit: it,
          children: $,
        })),
        (t[141] = Q),
        (t[142] = h),
        (t[143] = $e),
        (t[144] = rt),
        (t[145] = it),
        (t[146] = $),
        (t[147] = Z),
        (t[148] = mt))
      : (mt = t[148]),
    mt
  );
}
function Oe(e) {
  return (0, U.jsx)(Fe, { children: e });
}
function ke(e) {
  p.dispatchMessage(`open-in-browser`, { url: e.url });
}
async function Ae() {
  return await g.safeGet(`/payments/customer_portal`);
}
function je(e) {
  let t = (0, V.c)(19),
    {
      variant: n,
      isOneTimeAddCreditsPurchase: r,
      isSavePending: i,
      isDisablePending: a,
      isActionPending: o,
      isAddCreditsSubmitDisabled: s,
      isAutoReloadSettingsSubmitDisabled: l,
      onCancel: u,
      onTurnOff: d,
    } = e;
  if (n === `add-credits`) {
    let e;
    t[0] === r
      ? (e = t[1])
      : ((e = r
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.continueToCheckout`,
              defaultMessage: `Continue to checkout`,
              description: `Button label to open checkout from a credit purchase modal`,
            })
          : (0, U.jsx)(c, {
              id: `settings.usage.creditReload.autoReload.enable`,
              defaultMessage: `Enable auto-reload`,
              description: `Button label to enable automatic reload from the add credits modal`,
            })),
        (t[0] = r),
        (t[1] = e));
    let n;
    return (
      t[2] !== s || t[3] !== i || t[4] !== e
        ? ((n = (0, U.jsx)(v, {
            color: `primary`,
            type: `submit`,
            className: J,
            loading: i,
            disabled: s,
            children: e,
          })),
          (t[2] = s),
          (t[3] = i),
          (t[4] = e),
          (t[5] = n))
        : (n = t[5]),
      n
    );
  }
  let f;
  t[6] !== o || t[7] !== a || t[8] !== u || t[9] !== d || t[10] !== n
    ? ((f =
        n === `manage-auto-reload`
          ? (0, U.jsx)(v, {
              color: `outline`,
              loading: a,
              disabled: o,
              onClick: d,
              children: (0, U.jsx)(c, {
                id: `settings.usage.creditReload.autoReload.turnOff`,
                defaultMessage: `Turn off`,
                description: `Button label to turn off auto reload`,
              }),
            })
          : (0, U.jsx)(v, {
              color: `outline`,
              disabled: o,
              onClick: u,
              children: (0, U.jsx)(c, {
                id: `settings.usage.creditReload.cancel`,
                defaultMessage: `Cancel`,
                description: `Button label to close the credit reload dialog`,
              }),
            })),
      (t[6] = o),
      (t[7] = a),
      (t[8] = u),
      (t[9] = d),
      (t[10] = n),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, U.jsx)(c, {
        id: `settings.usage.creditReload.autoReload.save`,
        defaultMessage: `Save`,
        description: `Button label to save automatic reload settings`,
      })),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== l || t[14] !== i
    ? ((m = (0, U.jsx)(v, {
        color: `primary`,
        type: `submit`,
        className: J,
        loading: i,
        disabled: l,
        children: p,
      })),
      (t[13] = l),
      (t[14] = i),
      (t[15] = m))
    : (m = t[15]);
  let h;
  return (
    t[16] !== f || t[17] !== m
      ? ((h = (0, U.jsxs)(U.Fragment, { children: [f, m] })),
        (t[16] = f),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function Me(e) {
  let t = (0, V.c)(16),
    {
      intl: n,
      targetBalance: r,
      minimumBalance: i,
      monthlyLimit: a,
      pricingInfo: o,
    } = e,
    s;
  t[0] !== n || t[1] !== i || t[2] !== o
    ? ((s = B({
        intl: n,
        creditQuantity: Number.parseInt(L(i), 10),
        pricingInfo: o,
      })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s))
    : (s = t[3]);
  let l = s,
    u;
  t[4] !== n || t[5] !== o || t[6] !== r
    ? ((u = B({
        intl: n,
        creditQuantity: Number.parseInt(L(r), 10),
        pricingInfo: o,
      })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = r),
      (t[7] = u))
    : (u = t[7]);
  let d = u,
    f;
  t[8] !== n || t[9] !== a || t[10] !== o
    ? ((f = B({
        intl: n,
        creditQuantity: Number.parseInt(L(a), 10),
        pricingInfo: o,
      })),
      (t[8] = n),
      (t[9] = a),
      (t[10] = o),
      (t[11] = f))
    : (f = t[11]);
  let p = f,
    m;
  return (
    t[12] !== p || t[13] !== d || t[14] !== l
      ? ((m = (0, U.jsx)(`p`, {
          className: `text-sm leading-5 text-token-text-secondary`,
          children:
            l == null || d == null
              ? (0, U.jsx)(c, {
                  id: `settings.usage.creditReload.autoReload.description.pending`,
                  defaultMessage: `If your balance falls below the minimum, Codex will automatically reload your credits`,
                  description: `Fallback description shown while pricing is loading`,
                })
              : p == null
                ? (0, U.jsx)(c, {
                    id: `settings.usage.creditReload.autoReload.description.noLimit`,
                    defaultMessage: `When my balance hits {thresholdAmount}, top up to {targetAmount}, with no monthly maximum`,
                    description: `Description explaining how automatic reload works without a monthly limit`,
                    values: { thresholdAmount: l, targetAmount: d },
                  })
                : (0, U.jsx)(c, {
                    id: `settings.usage.creditReload.autoReload.description`,
                    defaultMessage: `When my balance hits {thresholdAmount}, top up to {targetAmount}, up to {monthlyLimitAmount} per month`,
                    description: `Description explaining how automatic reload works`,
                    values: {
                      thresholdAmount: l,
                      targetAmount: d,
                      monthlyLimitAmount: p,
                    },
                  }),
        })),
        (t[12] = p),
        (t[13] = d),
        (t[14] = l),
        (t[15] = m))
      : (m = t[15]),
    m
  );
}
function Ne(e) {
  let t = (0, V.c)(11),
    {
      intl: n,
      targetBalance: r,
      minimumBalance: i,
      monthlyLimit: a,
      pricingInfo: o,
      rateCardLinkMode: s,
    } = e,
    c = s === void 0 ? `button` : s,
    l;
  t[0] !== n || t[1] !== i || t[2] !== a || t[3] !== o || t[4] !== r
    ? ((l = (0, U.jsx)(Me, {
        intl: n,
        targetBalance: r,
        minimumBalance: i,
        monthlyLimit: a,
        pricingInfo: o,
      })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = r),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === c
    ? (u = t[7])
    : ((u =
        c === `button`
          ? (0, U.jsx)(Fe, { children: (0, U.jsx)(Pe, {}) })
          : (0, U.jsx)(Pe, {})),
      (t[6] = c),
      (t[7] = u));
  let d;
  return (
    t[8] !== l || t[9] !== u
      ? ((d = (0, U.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          children: [l, u],
        })),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function Pe() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, U.jsx)(c, {
          id: `settings.usage.creditReload.viewRateCard`,
          defaultMessage: `View rate card`,
          description: `Button label to view the Codex credit rate card`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Fe(e) {
  let t = (0, V.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, U.jsx)(`button`, {
          type: `button`,
          className: `cursor-interaction text-left text-token-link`,
          onClick: Y,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Y() {
  p.dispatchMessage(`open-in-browser`, { url: q });
}
function Ie(e) {
  let t = (0, V.c)(12),
    { intl: n, creditDetails: r, pricingInfo: i, actions: a } = e,
    o;
  t[0] !== r || t[1] !== n || t[2] !== i
    ? ((o = Le({ intl: n, creditDetails: r, pricingInfo: i })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    l;
  t[4] !== r?.unlimited || t[5] !== s
    ? ((l = (0, U.jsx)(`span`, {
        className: `text-xs text-token-text-secondary`,
        children: r?.unlimited
          ? (0, U.jsx)(c, {
              id: `settings.usage.credit.remaining.unlimited`,
              defaultMessage: `Unlimited credit`,
              description: `Title shown when the account has unlimited credit`,
            })
          : s == null
            ? (0, U.jsx)(c, {
                id: `settings.usage.creditReload.currentBalance.unavailable`,
                defaultMessage: `Current balance unavailable`,
                description: `Fallback shown when the current credits balance cannot be loaded in a credit reload modal footer`,
              })
            : (0, U.jsx)(c, {
                id: `settings.usage.creditReload.currentBalance`,
                defaultMessage: `Current balance: {balance}`,
                description: `Current credits balance shown in a credit reload modal footer`,
                values: { balance: s },
              }),
      })),
      (t[4] = r?.unlimited),
      (t[5] = s),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === a
    ? (u = t[8])
    : ((u = (0, U.jsx)(`div`, {
        className: `flex shrink-0 items-center gap-2`,
        children: a,
      })),
      (t[7] = a),
      (t[8] = u));
  let d;
  return (
    t[9] !== l || t[10] !== u
      ? ((d = (0, U.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [l, u],
        })),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Le({ intl: e, creditDetails: t, pricingInfo: n }) {
  return t == null || t.unlimited
    ? null
    : (B({
        intl: e,
        creditQuantity: Math.floor(Number(t.balance ?? 0)),
        pricingInfo: n,
      }) ?? e.formatNumber(0));
}
function Re({ quantity: e, onOpenChange: n }) {
  (p.dispatchMessage(`open-in-browser`, {
    url: `${t}/purchase/credits?quantity=${encodeURIComponent(L(e))}`,
  }),
    n(!1));
}
function ze({ scope: e, intl: t, intent: n, kind: r }) {
  let i;
  switch (n) {
    case `enable`:
      i =
        r === `success`
          ? t.formatMessage({
              id: `settings.usage.creditReload.autoReload.enable.success`,
              defaultMessage: `Enabled auto-reload`,
              description: `Toast shown when enabling auto reload succeeds`,
            })
          : t.formatMessage({
              id: `settings.usage.creditReload.autoReload.enable.error`,
              defaultMessage: `Failed to enable auto-reload`,
              description: `Toast shown when enabling auto reload fails`,
            });
      break;
    case `update`:
      i =
        r === `success`
          ? t.formatMessage({
              id: `settings.usage.creditReload.autoReload.update.success`,
              defaultMessage: `Updated auto-reload settings`,
              description: `Toast shown when updating auto reload succeeds`,
            })
          : t.formatMessage({
              id: `settings.usage.creditReload.autoReload.update.error`,
              defaultMessage: `Failed to update auto-reload`,
              description: `Toast shown when updating auto reload fails`,
            });
      break;
    case `disable`:
      i =
        r === `success`
          ? t.formatMessage({
              id: `settings.usage.creditReload.autoReload.disable.success`,
              defaultMessage: `Disabled auto-reload`,
              description: `Toast shown when disabling auto reload succeeds`,
            })
          : t.formatMessage({
              id: `settings.usage.creditReload.autoReload.disable.error`,
              defaultMessage: `Failed to disable auto-reload`,
              description: `Toast shown when disabling auto reload fails`,
            });
  }
  if (r === `success`) {
    e.get(_).success(i, we);
    return;
  }
  e.get(_).danger(i, we);
}
function Be(e) {
  let t = L(e);
  return ee.some((e) => String(e) === t);
}
function Ve(e) {
  let t = (0, V.c)(19),
    {
      dialogDescriptionId: n,
      screenReaderTitle: r,
      screenReaderDescription: i,
      headerTitle: a,
      headerSubtitle: o,
      footer: s,
      onSubmit: c,
      children: l,
    } = e,
    u;
  t[0] === c
    ? (u = t[1])
    : ((u = (e) => {
        (e.preventDefault(), c());
      }),
      (t[0] = c),
      (t[1] = u));
  let d;
  t[2] === r
    ? (d = t[3])
    : ((d = (0, U.jsx)(b, {
        asChild: !0,
        children: (0, U.jsx)(`h2`, { className: `sr-only`, children: r }),
      })),
      (t[2] = r),
      (t[3] = d));
  let f;
  t[4] !== n || t[5] !== i
    ? ((f = (0, U.jsx)(`div`, { id: n, className: `sr-only`, children: i })),
      (t[4] = n),
      (t[5] = i),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== o || t[8] !== a
    ? ((p = (0, U.jsx)(y, {
        children: (0, U.jsx)(x, { title: a, subtitle: o, titleSize: `base` }),
      })),
      (t[7] = o),
      (t[8] = a),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === s
    ? (m = t[11])
    : ((m = (0, U.jsx)(y, { className: `pt-4`, children: s })),
      (t[10] = s),
      (t[11] = m));
  let h;
  return (
    t[12] !== l ||
    t[13] !== u ||
    t[14] !== d ||
    t[15] !== f ||
    t[16] !== p ||
    t[17] !== m
      ? ((h = (0, U.jsxs)(C, {
          as: `form`,
          className: `gap-0 px-4 py-4`,
          onSubmit: u,
          children: [d, f, p, l, m],
        })),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function X(e) {
  let t = (0, V.c)(25),
    n = (0, H.useId)(),
    r = e.state === `loading` || e.state === `error`,
    i =
      !r &&
      e.variant !== `one-time-purchase` &&
      (e.enableAutoTopUpMutation.isPending ||
        e.updateAutoTopUpMutation.isPending ||
        e.disableAutoTopUpMutation.isPending),
    a;
  if (r) {
    let r = e.state === `error` ? e.onRetry : void 0,
      i;
    t[0] === e
      ? (i = t[1])
      : ((i = () => {
          e.onOpenChange(!1);
        }),
        (t[0] = e),
        (t[1] = i));
    let o;
    (t[2] !== n ||
    t[3] !== e.state ||
    t[4] !== e.variant ||
    t[5] !== r ||
    t[6] !== i
      ? ((o = (0, U.jsx)(Ue, {
          variant: e.variant,
          state: e.state,
          dialogDescriptionId: n,
          onRetry: r,
          onClose: i,
        })),
        (t[2] = n),
        (t[3] = e.state),
        (t[4] = e.variant),
        (t[5] = r),
        (t[6] = i),
        (t[7] = o))
      : (o = t[7]),
      (a = o));
  } else if (e.variant === `one-time-purchase`) {
    let r;
    (t[8] !== n || t[9] !== e
      ? ((r = (0, U.jsx)(Te, { ...e, dialogDescriptionId: n })),
        (t[8] = n),
        (t[9] = e),
        (t[10] = r))
      : (r = t[10]),
      (a = r));
  } else {
    let r;
    (t[11] !== n || t[12] !== e
      ? ((r = (0, U.jsx)(De, { ...e, dialogDescriptionId: n })),
        (t[11] = n),
        (t[12] = e),
        (t[13] = r))
      : (r = t[13]),
      (a = r));
  }
  let o;
  t[14] === n
    ? (o = t[15])
    : ((o = { "aria-describedby": n, onOpenAutoFocus: He }),
      (t[14] = n),
      (t[15] = o));
  let s;
  t[16] !== i || t[17] !== e
    ? ((s = (t) => {
        (i && !t) || e.onOpenChange(t);
      }),
      (t[16] = i),
      (t[17] = e),
      (t[18] = s))
    : (s = t[18]);
  let c;
  return (
    t[19] !== a || t[20] !== i || t[21] !== e.open || t[22] !== o || t[23] !== s
      ? ((c = (0, U.jsx)(S, {
          open: e.open,
          size: `default`,
          contentClassName: `w-[580px] max-w-[calc(100vw-2rem)]`,
          contentProps: o,
          shouldIgnoreClickOutside: i,
          onOpenChange: s,
          children: a,
        })),
        (t[19] = a),
        (t[20] = i),
        (t[21] = e.open),
        (t[22] = o),
        (t[23] = s),
        (t[24] = c))
      : (c = t[24]),
    c
  );
}
function He(e) {
  e.preventDefault();
}
function Ue(e) {
  let t = (0, V.c)(28),
    {
      variant: n,
      state: r,
      dialogDescriptionId: i,
      onRetry: a,
      onClose: o,
    } = e,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s =
        n === `one-time-purchase`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.oneTimePurchase.title`,
              defaultMessage: `One time credit purchase`,
              description: `Title for the one time credit purchase modal`,
            })
          : n === `setup-auto-reload`
            ? (0, U.jsx)(c, {
                id: `settings.usage.creditReload.autoReload.setup.title`,
                defaultMessage: `Set up auto-reload`,
                description: `Title for the auto reload setup modal`,
              })
            : n === `manage-auto-reload`
              ? (0, U.jsx)(c, {
                  id: `settings.usage.creditReload.autoReload.manage.title`,
                  defaultMessage: `Manage auto-reload`,
                  description: `Title for the auto reload management modal`,
                })
              : (0, U.jsx)(c, {
                  id: `settings.usage.creditReload.addCredits.title`,
                  defaultMessage: `Add credits`,
                  description: `Title for the add credits modal`,
                })),
      (t[0] = n),
      (t[1] = s));
  let l = s,
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = (0, U.jsx)(b, {
        asChild: !0,
        children: (0, U.jsx)(`h2`, { className: `sr-only`, children: l }),
      })),
      (t[2] = l),
      (t[3] = u));
  let d;
  t[4] === n
    ? (d = t[5])
    : ((d =
        n === `one-time-purchase`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.oneTimePurchase.screenReaderDescription`,
              defaultMessage: `Purchase credits so you can continue using Codex if your usage runs out. View rate card`,
              description: `Screen reader description for the one time credit purchase modal`,
            })
          : n === `add-credits`
            ? (0, U.jsx)(c, {
                id: `settings.usage.creditReload.addCredits.screenReaderDescription`,
                defaultMessage: `Credits power Codex. Valid for 12 months. View rate card`,
                description: `Screen reader description for the add credits modal`,
              })
            : (0, U.jsx)(c, {
                id: `settings.usage.creditReload.autoReload.modalDescription`,
                defaultMessage: `Automatically add credits when your balance runs low`,
                description: `Description for the automatic reload modal`,
              })),
      (t[4] = n),
      (t[5] = d));
  let f;
  t[6] !== i || t[7] !== d
    ? ((f = (0, U.jsx)(`p`, { id: i, className: `sr-only`, children: d })),
      (t[6] = i),
      (t[7] = d),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] === r
    ? (p = t[10])
    : ((p =
        r === `error`
          ? (0, U.jsx)(c, {
              id: `settings.usage.creditReload.load.error`,
              defaultMessage: `Could not load credit settings`,
              description: `Error shown when the combined credit reload dialog cannot load`,
            })
          : (0, U.jsx)(c, {
              id: `settings.usage.creditReload.load.loading`,
              defaultMessage: `Loading credit settings…`,
              description: `Loading label shown while the combined credit reload dialog loads`,
            })),
      (t[9] = r),
      (t[10] = p));
  let m;
  t[11] !== p || t[12] !== l
    ? ((m = (0, U.jsx)(y, {
        children: (0, U.jsx)(x, { title: l, subtitle: p, titleSize: `base` }),
      })),
      (t[11] = p),
      (t[12] = l),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] !== a || t[15] !== r
    ? ((h =
        r === `error` && a != null
          ? (0, U.jsx)(v, {
              color: `outline`,
              onClick: a,
              children: (0, U.jsx)(c, {
                id: `settings.usage.creditReload.load.retry`,
                defaultMessage: `Retry`,
                description: `Retry button for the combined credit reload dialog`,
              }),
            })
          : null),
      (t[14] = a),
      (t[15] = r),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, U.jsx)(c, {
        id: `settings.usage.creditReload.load.cancel`,
        defaultMessage: `Cancel`,
        description: `Button label to close the combined credit reload dialog`,
      })),
      (t[17] = g))
    : (g = t[17]);
  let _;
  t[18] === o
    ? (_ = t[19])
    : ((_ = (0, U.jsx)(v, { color: `outline`, onClick: o, children: g })),
      (t[18] = o),
      (t[19] = _));
  let S;
  t[20] !== h || t[21] !== _
    ? ((S = (0, U.jsx)(y, {
        className: `pt-4`,
        children: (0, U.jsxs)(`div`, {
          className: `flex justify-end gap-3`,
          children: [h, _],
        }),
      })),
      (t[20] = h),
      (t[21] = _),
      (t[22] = S))
    : (S = t[22]);
  let w;
  return (
    t[23] !== S || t[24] !== u || t[25] !== f || t[26] !== m
      ? ((w = (0, U.jsxs)(C, {
          className: `gap-0 px-4 py-4`,
          children: [u, f, m, S],
        })),
        (t[23] = S),
        (t[24] = u),
        (t[25] = f),
        (t[26] = m),
        (t[27] = w))
      : (w = t[27]),
    w
  );
}
function We(e) {
  let t = (0, V.c)(43),
    { onClose: r, variant: i } = e,
    { data: a } = u(n),
    o = i !== `one-time-purchase`,
    s;
  t[0] === o ? (s = t[1]) : ((s = { enabled: o }), (t[0] = o), (t[1] = s));
  let { data: c, isError: l, refetch: d } = M(s),
    {
      enableAutoTopUpMutation: f,
      updateAutoTopUpMutation: p,
      disableAutoTopUpMutation: m,
    } = O(),
    h;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { enabled: !0 }), (t[2] = h))
    : (h = t[2]);
  let { data: g, isPending: _, isError: v, refetch: y } = j(h),
    b;
  t[3] === g
    ? (b = t[4])
    : ((b = { billingCurrency: g, enabled: !0 }), (t[3] = g), (t[4] = b));
  let { data: x, isPending: S, isError: C, refetch: w } = D(b),
    T = _ || S,
    E;
  t[5] !== y || t[6] !== w
    ? ((E = () => {
        (y(), w());
      }),
      (t[5] = y),
      (t[6] = w),
      (t[7] = E))
    : (E = t[7]);
  let k = E,
    A;
  t[8] === r
    ? (A = t[9])
    : ((A = (e) => {
        e || r();
      }),
      (t[8] = r),
      (t[9] = A));
  let N = A;
  if (i === `one-time-purchase`) {
    if (T) {
      let e;
      return (
        t[10] !== N || t[11] !== i
          ? ((e = (0, U.jsx)(X, {
              open: !0,
              variant: i,
              state: `loading`,
              onOpenChange: N,
            })),
            (t[10] = N),
            (t[11] = i),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
    if (v || C || g == null || x == null) {
      let e;
      return (
        t[13] !== N || t[14] !== k || t[15] !== i
          ? ((e = (0, U.jsx)(X, {
              open: !0,
              variant: i,
              state: `error`,
              onRetry: k,
              onOpenChange: N,
            })),
            (t[13] = N),
            (t[14] = k),
            (t[15] = i),
            (t[16] = e))
          : (e = t[16]),
        e
      );
    }
    let e = a?.credits ?? null,
      n;
    return (
      t[17] !== x || t[18] !== N || t[19] !== e || t[20] !== i
        ? ((n = (0, U.jsx)(X, {
            open: !0,
            variant: i,
            creditDetails: e,
            pricingInfo: x,
            onOpenChange: N,
          })),
          (t[17] = x),
          (t[18] = N),
          (t[19] = e),
          (t[20] = i),
          (t[21] = n))
        : (n = t[21]),
      n
    );
  }
  if (c == null) {
    let e;
    return (
      t[22] !== N || t[23] !== l || t[24] !== d || t[25] !== i
        ? ((e = l
            ? (0, U.jsx)(X, {
                open: !0,
                variant: i,
                state: `error`,
                onRetry: () => {
                  d();
                },
                onOpenChange: N,
              })
            : (0, U.jsx)(X, {
                open: !0,
                variant: i,
                state: `loading`,
                onOpenChange: N,
              })),
          (t[22] = N),
          (t[23] = l),
          (t[24] = d),
          (t[25] = i),
          (t[26] = e))
        : (e = t[26]),
      e
    );
  }
  if (T) {
    let e;
    return (
      t[27] !== N || t[28] !== i
        ? ((e = (0, U.jsx)(X, {
            open: !0,
            variant: i,
            state: `loading`,
            onOpenChange: N,
          })),
          (t[27] = N),
          (t[28] = i),
          (t[29] = e))
        : (e = t[29]),
      e
    );
  }
  if (v || C || g == null || x == null) {
    let e;
    return (
      t[30] !== N || t[31] !== k || t[32] !== i
        ? ((e = (0, U.jsx)(X, {
            open: !0,
            variant: i,
            state: `error`,
            onRetry: k,
            onOpenChange: N,
          })),
          (t[30] = N),
          (t[31] = k),
          (t[32] = i),
          (t[33] = e))
        : (e = t[33]),
      e
    );
  }
  let P = a?.credits ?? null,
    F;
  return (
    t[34] !== x ||
    t[35] !== c ||
    t[36] !== m ||
    t[37] !== f ||
    t[38] !== N ||
    t[39] !== P ||
    t[40] !== p ||
    t[41] !== i
      ? ((F = (0, U.jsx)(X, {
          open: !0,
          variant: i,
          serverState: c,
          creditDetails: P,
          pricingInfo: x,
          enableAutoTopUpMutation: f,
          updateAutoTopUpMutation: p,
          disableAutoTopUpMutation: m,
          onOpenChange: N,
        })),
        (t[34] = x),
        (t[35] = c),
        (t[36] = m),
        (t[37] = f),
        (t[38] = N),
        (t[39] = P),
        (t[40] = p),
        (t[41] = i),
        (t[42] = F))
      : (F = t[42]),
    F
  );
}
var Ge = `1721641661`;
function Ke({ intent: e, isCombinedModalEnabled: t }) {
  return t
    ? `combined-modal`
    : e === `purchase`
      ? `legacy-purchase`
      : `legacy-auto-reload`;
}
function qe({ intent: e, isAutoReloadEnabled: t }) {
  return e === `purchase`
    ? t
      ? `one-time-purchase`
      : `add-credits`
    : t
      ? `manage-auto-reload`
      : `setup-auto-reload`;
}
function Je() {
  let e = (0, V.c)(3),
    t = l(s),
    n = m(),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = (e) => {
          let r = h(n, Ge, { disableExposureLog: !1 }).get(`enabled`, !1);
          if (
            Ke({ intent: e.intent, isCombinedModalEnabled: r }) ===
            `combined-modal`
          ) {
            w(t, We, {
              variant: qe({
                intent: e.intent,
                isAutoReloadEnabled: e.isAutoReloadEnabled,
              }),
            });
            return;
          }
          if (e.intent === `purchase`) {
            p.dispatchMessage(`open-in-browser`, { url: e.legacyUrl });
            return;
          }
          e.openLegacyAutoReload();
        }),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
var Ye = 300,
  Xe = k,
  Ze = 30 * E;
function Qe({ entry: e, keyPrefix: t }) {
  let n = [
    { bucket: e.snapshot.primary, role: `primary` },
    { bucket: e.snapshot.secondary, role: `secondary` },
  ]
    .filter((e) => A(e.bucket))
    .sort(
      (e, t) =>
        (e.bucket.windowDurationMins ?? 0) - (t.bucket.windowDurationMins ?? 0),
    );
  if (n.length === 0) return [];
  let r = new Map();
  return n.map(({ bucket: n, role: i }, a) => {
    let o = Z(n, i, a),
      s = r.get(o) ?? 0;
    return (
      r.set(o, s + 1),
      {
        key: `${t}-${s === 0 ? o : `${o}-${i}`}`,
        bucket: n,
        limitName: e.limitName,
      }
    );
  });
}
function Z(e, t, n) {
  let r = e.windowDurationMins ?? 0;
  return Math.abs(r - Ye) <= 1
    ? `five-hour`
    : Math.abs(r - Xe) <= 1
      ? `weekly`
      : Math.abs(r - Ze) <= 1
        ? `monthly`
        : `${t}-${n}-${r}`;
}
export { P as i, Je as n, B as r, Qe as t };
//# sourceMappingURL=rate-limit-rows.js.map
