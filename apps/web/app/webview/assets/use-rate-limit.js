import { s as e } from "./chunk-Bj-mKKzh.js";
import { _n as t } from "./app-server-manager-signals-DkRDRgNB.js";
import { n, t as r } from "./jsx-runtime.js";
import { t as i } from "./clsx-BcPLHiun.js";
import {
  G as a,
  L as o,
  S as s,
  T as c,
  U as l,
  X as u,
  _ as d,
  p as f,
  w as p,
  wt as m,
  y as h,
} from "./setting-storage.js";
import { t as g } from "./google-drive.js";
import { t as _ } from "./product-logger-DusapRyT.js";
import { c as v, i as y } from "./statsig--EYRNU53.js";
import { t as b } from "./request-DWZTrEAr.js";
import { p as x } from "./codex-api-bK--r_2t.js";
import { t as S } from "./button.js";
import { t as C } from "./proxy.js";
import { i as w, t as T } from "./skus-JiYadAsS.js";
import { d as E, l as D, n as ee, u as te } from "./dialog-layout.js";
import { t as ne } from "./lightning-bolt.js";
import { r as O } from "./modal-controller-state.js";
import { t as k } from "./codex-api-error-CsUcWied.js";
import { a as A, r as re } from "./links.js";
import { t as j } from "./conversation-starter-card.js";
function M(e) {
  return e === `failed` || e === `payment_declined`;
}
var N = m(),
  P = [`usage-settings`, `auto-top-up`],
  F = [`usage-settings`, `accounts-check`],
  I = [`usage-settings`, `auto-top-up-pricing`],
  ie = [`usage-settings`, `plan-pricing`],
  ae = [`usage-settings`, `workspace-monthly-usage`],
  L = [`usage-settings`, `workspace-admin-requests`],
  oe = 100,
  se = `US`,
  ce = `Current user monthly cap is not available.`,
  le = [`usage-settings`, `add-credits-nudge-email`],
  R = `v4-2023-04-27`;
function ue(e) {
  let t = (0, N.c)(2),
    { enabled: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = {
          queryKey: P,
          queryFn: _e,
          enabled: n,
          staleTime: d.ONE_MINUTE,
          refetchOnWindowFocus: !1,
          select: Se,
        }),
        (t[0] = n),
        (t[1] = r)),
    c(r)
  );
}
function z(e) {
  let t = (0, N.c)(8),
    { enabled: n } = e,
    { data: r, isLoading: i } = x(),
    a = r?.id ?? null,
    o;
  t[0] === a ? (o = t[1]) : ((o = [...F, R, a]), (t[0] = a), (t[1] = o));
  let s = n && !i && r != null,
    l;
  t[2] === r
    ? (l = t[3])
    : ((l = (e) =>
        r ? (e.accounts?.[r.id]?.entitlement?.billing_currency ?? null) : null),
      (t[2] = r),
      (t[3] = l));
  let u;
  return (
    t[4] !== o || t[5] !== s || t[6] !== l
      ? ((u = {
          queryKey: o,
          enabled: s,
          staleTime: d.INFINITE,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: ge,
          select: l,
        }),
        (t[4] = o),
        (t[5] = s),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    c(u)
  );
}
function de(e) {
  let t = (0, N.c)(8),
    { enabled: n } = e,
    { data: r, isLoading: i } = x(),
    a = r?.id ?? null,
    o;
  t[0] === a ? (o = t[1]) : ((o = [...F, R, a]), (t[0] = a), (t[1] = o));
  let s = n && !i && r != null,
    l;
  t[2] === r
    ? (l = t[3])
    : ((l = (e) =>
        r
          ? (e.accounts?.[r.id]?.last_active_subscription
              .purchase_origin_platform ?? null)
          : null),
      (t[2] = r),
      (t[3] = l));
  let u;
  return (
    t[4] !== o || t[5] !== s || t[6] !== l
      ? ((u = {
          queryKey: o,
          enabled: s,
          staleTime: d.INFINITE,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: ge,
          select: l,
        }),
        (t[4] = o),
        (t[5] = s),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    c(u)
  );
}
function B(e) {
  let t = (0, N.c)(10),
    { enabled: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = { enabled: n }), (t[0] = n), (t[1] = r));
  let { accountId: i, isLoading: a } = J(r),
    o;
  t[2] === i ? (o = t[3]) : ((o = [...ae, i]), (t[2] = i), (t[3] = o));
  let s = n && !a && i != null,
    l;
  t[4] === i
    ? (l = t[5])
    : ((l = async () => {
        if (i == null) return null;
        try {
          return await b.safeGet(
            `/accounts/{account_id}/spend-controls/current-user/monthly-usage`,
            { parameters: { path: { account_id: i } } },
          );
        } catch (e) {
          let t = e;
          if (t instanceof Error && k(t)?.message === ce) return null;
          throw t;
        }
      }),
      (t[4] = i),
      (t[5] = l));
  let u;
  return (
    t[6] !== o || t[7] !== s || t[8] !== l
      ? ((u = {
          queryKey: o,
          enabled: s,
          staleTime: d.ONE_MINUTE,
          refetchOnMount: `always`,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: l,
        }),
        (t[6] = o),
        (t[7] = s),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    c(u)
  );
}
function V(e) {
  let t = (0, N.c)(10),
    { enabled: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = { enabled: n }), (t[0] = n), (t[1] = r));
  let { accountId: i, isLoading: a } = J(r),
    o;
  t[2] === i ? (o = t[3]) : ((o = [...L, i]), (t[2] = i), (t[3] = o));
  let s = n && !a && i != null,
    l;
  t[4] === i
    ? (l = t[5])
    : ((l = async () => (i == null ? null : Y(i))), (t[4] = i), (t[5] = l));
  let u;
  return (
    t[6] !== o || t[7] !== s || t[8] !== l
      ? ((u = {
          queryKey: o,
          enabled: s,
          staleTime: d.ONE_MINUTE,
          refetchOnMount: `always`,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: l,
        }),
        (t[6] = o),
        (t[7] = s),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    c(u)
  );
}
function fe(e) {
  let t = (0, N.c)(8),
    { billingCurrency: n, enabled: r } = e,
    i = n ?? null,
    a;
  t[0] === i ? (a = t[1]) : ((a = [...I, i]), (t[0] = i), (t[1] = a));
  let o = r && n != null,
    s;
  t[2] === n
    ? (s = t[3])
    : ((s = async () => {
        if (n == null) return null;
        let e = await b.safeGet(
            `/checkout_pricing_config/configs/{country_code}`,
            { parameters: { path: { country_code: n } } },
          ),
          t = e.currency_config?.amount_per_credit;
        return t == null || t <= 0
          ? null
          : {
              amountPerCredit: t,
              currencyCode: e.currency_config?.symbol_code ?? n,
              minorUnitExponent: e.currency_config?.minor_unit_exponent ?? null,
            };
      }),
      (t[2] = n),
      (t[3] = s));
  let l;
  return (
    t[4] !== a || t[5] !== o || t[6] !== s
      ? ((l = {
          queryKey: a,
          enabled: o,
          staleTime: d.INFINITE,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: s,
        }),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s),
        (t[7] = l))
      : (l = t[7]),
    c(l)
  );
}
function H(e) {
  let t = (0, N.c)(8),
    { billingCurrency: n, enabled: r } = e,
    i = n ?? se,
    a;
  t[0] === i ? (a = t[1]) : ((a = [...ie, i]), (t[0] = i), (t[1] = a));
  let o = r && n !== void 0,
    s;
  t[2] === i
    ? (s = t[3])
    : ((s = async () => {
        let e = (
          await b.safeGet(`/checkout_pricing_config/configs/{country_code}`, {
            parameters: { path: { country_code: i } },
          })
        ).currency_config;
        if (e?.symbol_code == null) return null;
        let t =
          e.business_currency_override != null &&
          e.business_currency_override !== e.symbol_code
            ? (
                await b.safeGet(
                  `/checkout_pricing_config/configs/{country_code}`,
                  {
                    parameters: {
                      path: { country_code: e.business_currency_override },
                    },
                  },
                )
              ).currency_config
            : e;
        return {
          currencyCode: e.symbol_code,
          businessCurrencyCode: t?.symbol_code ?? e.symbol_code,
          minorUnitExponent: e.minor_unit_exponent ?? null,
          businessMinorUnitExponent: t?.minor_unit_exponent ?? null,
          monthlyAmounts: {
            free: e.free?.month?.amount ?? null,
            go: e.go?.month?.amount ?? null,
            plus: e.plus?.month?.amount ?? null,
            prolite: e.prolite?.month?.amount ?? null,
            pro: e.pro?.month?.amount ?? null,
            business: t?.business?.year?.amount ?? null,
          },
        };
      }),
      (t[2] = i),
      (t[3] = s));
  let l;
  return (
    t[4] !== a || t[5] !== o || t[6] !== s
      ? ((l = {
          queryKey: a,
          enabled: o,
          staleTime: d.INFINITE,
          refetchOnWindowFocus: !1,
          retry: !1,
          queryFn: s,
        }),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s),
        (t[7] = l))
      : (l = t[7]),
    c(l)
  );
}
function U() {
  let e = (0, N.c)(16),
    t = u(s),
    n = o(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = [...P, `enable`]), (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] !== n || e[2] !== t
    ? ((i = {
        mutationKey: r,
        mutationFn: G,
        onSuccess: (e) => {
          M(e.immediate_top_up_status) ||
            X({ scope: t, queryClient: n, response: e });
        },
      }),
      (e[1] = n),
      (e[2] = t),
      (e[3] = i))
    : (i = e[3]);
  let a = p(i),
    c;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = [...P, `update`]), (e[4] = c))
    : (c = e[4]);
  let l;
  e[5] !== n || e[6] !== t
    ? ((l = {
        mutationKey: c,
        mutationFn: W,
        onSuccess: (e) => {
          M(e.immediate_top_up_status) ||
            X({ scope: t, queryClient: n, response: e });
        },
      }),
      (e[5] = n),
      (e[6] = t),
      (e[7] = l))
    : (l = e[7]);
  let d = p(l),
    f;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = [...P, `disable`]), (e[8] = f))
    : (f = e[8]);
  let m;
  e[9] !== n || e[10] !== t
    ? ((m = {
        mutationKey: f,
        mutationFn: pe,
        onSuccess: (e) => {
          X({ scope: t, queryClient: n, response: e });
        },
      }),
      (e[9] = n),
      (e[10] = t),
      (e[11] = m))
    : (m = e[11]);
  let h = p(m),
    g;
  return (
    e[12] !== h || e[13] !== a || e[14] !== d
      ? ((g = {
          enableAutoTopUpMutation: a,
          updateAutoTopUpMutation: d,
          disableAutoTopUpMutation: h,
        }),
        (e[12] = h),
        (e[13] = a),
        (e[14] = d),
        (e[15] = g))
      : (g = e[15]),
    g
  );
}
function pe() {
  return be();
}
function W(e) {
  return ye(e);
}
function G(e) {
  return ve(e);
}
function me() {
  let e = (0, N.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { mutationKey: le, mutationFn: K }), (e[0] = t))
      : (t = e[0]),
    p(t)
  );
}
function K(e) {
  return xe(e);
}
function q() {
  let e = (0, N.c)(11),
    t = o(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = { enabled: !0 }), (e[0] = n))
    : (n = e[0]);
  let { accountId: r } = J(n),
    i,
    a;
  e[1] === r
    ? ((i = e[2]), (a = e[3]))
    : ((i = [...L, r, `save`]),
      (a = async (e) => {
        let { justification: t, requestId: n } = e;
        if (r == null)
          throw Error(`Cannot save workspace admin request without account`);
        if (n == null) {
          let e = { justification: t };
          return b.safePost(`/accounts/{account_id}/workspace_admin_requests`, {
            parameters: { path: { account_id: r } },
            requestBody: e,
          });
        }
        let i = { justification: t };
        return b.safePatch(
          `/accounts/{account_id}/workspace_admin_requests/{request_id}`,
          {
            parameters: { path: { account_id: r, request_id: n } },
            requestBody: i,
          },
        );
      }),
      (e[1] = r),
      (e[2] = i),
      (e[3] = a));
  let s;
  e[4] !== r || e[5] !== t
    ? ((s = (e) => {
        (t.setQueryData([...L, r], (t) => he(t, e)),
          t.invalidateQueries({ queryKey: [...L, r] }));
      }),
      (e[4] = r),
      (e[5] = t),
      (e[6] = s))
    : (s = e[6]);
  let c;
  return (
    e[7] !== i || e[8] !== a || e[9] !== s
      ? ((c = { mutationKey: i, mutationFn: a, onSuccess: s }),
        (e[7] = i),
        (e[8] = a),
        (e[9] = s),
        (e[10] = c))
      : (c = e[10]),
    p(c)
  );
}
function J(e) {
  let t = (0, N.c)(8),
    { enabled: n } = e,
    { data: r, isLoading: i, hasEverErrored: a } = x(),
    o = r?.id == null && (!i || a),
    s = n && o,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = { queryConfig: { enabled: s, staleTime: d.ONE_MINUTE } }),
      (t[0] = s),
      (t[1] = c));
  let { data: l, isLoading: u } = f(`account-info`, c);
  if (r?.id != null) {
    let e;
    return (
      t[2] === r.id
        ? (e = t[3])
        : ((e = { accountId: r.id, isLoading: !1 }), (t[2] = r.id), (t[3] = e)),
      e
    );
  }
  if (!o) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { accountId: void 0, isLoading: !0 }), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let p = l?.accountId,
    m;
  return (
    t[5] !== u || t[6] !== p
      ? ((m = { accountId: p, isLoading: u }),
        (t[5] = u),
        (t[6] = p),
        (t[7] = m))
      : (m = t[7]),
    m
  );
}
async function Y(e) {
  let t = [],
    n = new Set(),
    r = null;
  for (;;) {
    let i = await b.safeGet(`/accounts/{account_id}/workspace_admin_requests`, {
      parameters: { path: { account_id: e }, query: { cursor: r, limit: oe } },
    });
    t.push(...(i.items ?? []));
    let a = i.cursor ?? null;
    if (a == null || n.has(a)) return { items: t, cursor: a };
    (n.add(a), (r = a));
  }
}
function X({ scope: e, queryClient: n, response: r }) {
  (n.setQueryData(P, r),
    r.immediate_top_up_status === `succeeded` && e.query.invalidate(t));
}
function he(e, t) {
  if (e == null) return { items: [t], cursor: null };
  let n = e.items.findIndex((e) => e.id === t.id);
  return n === -1
    ? { ...e, items: [t, ...e.items] }
    : { ...e, items: e.items.map((e, r) => (r === n ? t : e)) };
}
function ge() {
  return b.safeGet(`/accounts/check/{version}`, {
    parameters: { path: { version: R } },
  });
}
async function _e() {
  return b.safeGet(`/subscriptions/auto_top_up/settings`);
}
async function ve(e) {
  return b.safePost(`/subscriptions/auto_top_up/enable`, { requestBody: e });
}
async function ye(e) {
  let t = {
    recharge_threshold: e.recharge_threshold,
    recharge_target: e.recharge_target,
    recharge_monthly_limit: e.recharge_monthly_limit,
  };
  return b.safePost(`/subscriptions/auto_top_up/update`, { requestBody: t });
}
async function be() {
  return b.safePost(`/subscriptions/auto_top_up/disable`);
}
async function xe(e) {
  return b.safePost(`/accounts/send_add_credits_nudge_email`, {
    requestBody: e,
  });
}
function Se(e) {
  return {
    isEnabled: e.is_enabled,
    rechargeThreshold: e.recharge_threshold ?? null,
    rechargeTarget: e.recharge_target ?? null,
    rechargeMonthlyLimit: e.recharge_monthly_limit ?? null,
  };
}
var Z = 1440,
  Ce = 7 * Z,
  we = 30 * Z,
  Te = 365 * Z,
  Ee = 60 * Z,
  De = 90;
function Oe(e) {
  return e != null && (e.windowDurationMins ?? 0) > 0;
}
function ke(e, t = new Date()) {
  let n = Re(e);
  return n ? Math.floor((n.getTime() - t.getTime()) / 1e3) : null;
}
function Ae(e) {
  let { primary: t, secondary: n } = e ?? { primary: null, secondary: null },
    r = t?.usedPercent ?? 0,
    i = n?.usedPercent ?? 0,
    a = t?.windowDurationMins ?? 0,
    o = n?.windowDurationMins ?? 0,
    s = Math.max(r, i);
  return s < De
    ? null
    : i > r || (r === i && o > a)
      ? {
          severity: s >= 100 ? `blocked` : `warning`,
          usedPercent: i,
          remainingPercent: je(i),
          windowMinutes: o,
          resetsAt: n?.resetsAt ?? null,
        }
      : s === r
        ? {
            severity: s >= 100 ? `blocked` : `warning`,
            usedPercent: r,
            remainingPercent: je(r),
            windowMinutes: a,
            resetsAt: t?.resetsAt ?? null,
          }
        : null;
}
function je(e) {
  return Number.isFinite(e) ? Math.min(Math.max(100 - e, 0), 100) : 100;
}
function Me(e) {
  if (!Number.isFinite(e)) return `–`;
  let t = Math.min(Math.max(e, 0), 100);
  return `${Math.round(t)}%`;
}
function Ne({ intl: e, minutes: t, variant: n = `summary` }) {
  let r = t ?? 0,
    i = Pe(r, Te);
  if (i != null)
    return n === `summary`
      ? e.formatMessage(
          {
            id: `composer.mode.rateLimit.annualDynamicTitle`,
            defaultMessage: `{years, plural, one {Annual} other {{years} Years}}`,
            description: `Dynamic annual rate limit label (title case)`,
          },
          { years: i },
        )
      : e.formatMessage(
          {
            id: `composer.mode.rateLimit.annualDynamicSentence`,
            defaultMessage: `{years, plural, one {annual limit} other {{years} year limit}}`,
            description: `Dynamic annual rate limit label (sentence case)`,
          },
          { years: i },
        );
  let a = Pe(r, we);
  if (a != null)
    return n === `summary`
      ? e.formatMessage(
          {
            id: `composer.mode.rateLimit.monthlyDynamicTitle`,
            defaultMessage: `{months, plural, one {Monthly} other {{months} Months}}`,
            description: `Dynamic monthly rate limit label (title case)`,
          },
          { months: a },
        )
      : e.formatMessage(
          {
            id: `composer.mode.rateLimit.monthlyDynamicSentence`,
            defaultMessage: `{months, plural, one {monthly limit} other {{months} month limit}}`,
            description: `Dynamic monthly rate limit label (sentence case)`,
          },
          { months: a },
        );
  if (r >= 10079) {
    let t = Math.ceil(r / Ce);
    return n === `summary`
      ? e.formatMessage(
          {
            id: `composer.mode.rateLimit.weeklyDynamicTitle`,
            defaultMessage: `{weeks, plural, one {Weekly} other {{weeks} Weeks}}`,
            description: `Dynamic weekly rate limit label (title case)`,
          },
          { weeks: t },
        )
      : e.formatMessage(
          {
            id: `composer.mode.rateLimit.weeklyDynamicSentence`,
            defaultMessage: `{weeks, plural, one {weekly limit} other {{weeks} week limit}}`,
            description: `Dynamic weekly rate limit label (sentence case)`,
          },
          { weeks: t },
        );
  }
  if (r >= 1439) {
    let t = Math.ceil(r / Z);
    return e.formatMessage(
      {
        id: `composer.mode.rateLimit.day`,
        defaultMessage: `{days}d`,
        description: `Daily rate limit label`,
      },
      { days: t },
    );
  }
  if (r >= 60) {
    let t = Math.ceil(r / 60);
    return e.formatMessage(
      {
        id: `composer.mode.rateLimit.hour`,
        defaultMessage: `{hours}h`,
        description: `Hourly rate limit label`,
      },
      { hours: t },
    );
  }
  if (r > 0) {
    let t = Math.ceil(r);
    return e.formatMessage(
      {
        id: `composer.mode.rateLimit.minute`,
        defaultMessage: `{minutes}m`,
        description: `Minute rate limit label`,
      },
      { minutes: t },
    );
  }
  return e.formatMessage({
    id: `composer.mode.rateLimit.heading`,
    defaultMessage: `Usage remaining`,
    description: `Rate limit summary heading`,
  });
}
function Pe(e, t) {
  if (!Number.isFinite(e) || e <= 0) return null;
  let n = Math.max(1, Math.round(e / t));
  return Fe(e, n * t) ? n : null;
}
function Fe(e, t) {
  return e >= t * 0.95 && e <= t * 1.05;
}
function Ie(e, t = new Date()) {
  let n = Math.floor((e.getTime() - t.getTime()) / 1e3);
  return n <= 0
    ? new Intl.RelativeTimeFormat(void 0, { numeric: `auto` }).format(
        0,
        `second`,
      )
    : n < Ee
      ? new Intl.DateTimeFormat(void 0, { timeStyle: `short` }).format(e)
      : new Intl.DateTimeFormat(void 0, {
          month: `short`,
          day: `numeric`,
        }).format(e);
}
function Le(e) {
  return {
    date: new Intl.DateTimeFormat(void 0, {
      month: `short`,
      day: `numeric`,
    }).format(e),
    time: new Intl.DateTimeFormat(void 0, { timeStyle: `short` }).format(e),
  };
}
function Re(e) {
  if (e == null || !Number.isFinite(e)) return null;
  let t = e * 1e3;
  return Number.isFinite(t) ? new Date(t) : null;
}
var ze = `https://chatgpt.com/codex/purchase/plus?checkout_from=codex_app`,
  Be = `https://chatgpt.com/codex/purchase/pro5x?checkout_from=codex_app`,
  Ve = `https://chatgpt.com/codex/purchase/pro?checkout_from=codex_app`,
  He = `https://chatgpt.com/codex/purchase/codex_team?checkout_from=codex_app`,
  Ue = `https://chatgpt.com/codex/purchase/team?checkout_from=codex_app`,
  We = `https://chatgpt.com/#settings/Billing`,
  Ge = `https://help.openai.com/en/articles/7905690-how-to-cancel-your-apple-subscription-for-chatgpt-in-the-chatgpt-ios-app`,
  Ke = `https://help.openai.com/en/articles/8258076-how-to-cancel-a-subscription-in-the-chatgpt-android-app`,
  qe = { [T.FREE]: 0, [T.GO]: 1, [T.PLUS]: 2, [T.PROLITE]: 3, [T.PRO]: 4 };
function Je(e) {
  return e === `chatgpt_mobile_ios` || e === `sora_mobile_ios`
    ? `ios`
    : e === `chatgpt_mobile_android`
      ? `android`
      : null;
}
function Ye(e) {
  if (!$e(e)) return null;
  switch (e) {
    case T.FREE:
      return { displayPlan: `free`, pricePlan: e, cta: `upgrade` };
    case T.GO:
      return { displayPlan: `go`, pricePlan: e, cta: `upgrade` };
    case T.PLUS:
      return { displayPlan: `plus`, pricePlan: e, cta: `view` };
    case T.PROLITE:
    case T.PRO:
      return { displayPlan: `pro`, pricePlan: e, cta: `view` };
  }
}
function Xe(e) {
  return e === T.GO || e === T.PLUS || e === T.PROLITE || e === T.PRO;
}
function Ze({ currentPlan: e, targetPlan: t }) {
  return e === t ? `current` : qe[t] < qe[e] ? `downgrade` : `upgrade`;
}
function Qe({ currentPlan: e, targetPlan: t }) {
  let n = Ze({ currentPlan: e, targetPlan: t });
  return n === `current`
    ? null
    : n === `downgrade`
      ? `https://chatgpt.com/codex/downgrade/${t === T.PROLITE ? `pro5x` : t}`
      : t === T.PLUS
        ? ze
        : t === T.PROLITE
          ? Be
          : Ve;
}
function $e(e) {
  return (
    e === T.FREE || e === T.GO || e === T.PLUS || e === T.PROLITE || e === T.PRO
  );
}
var et = e(n(), 1),
  Q = r();
function tt(e) {
  let t = (0, N.c)(18),
    { ariaLabel: n, className: r, options: a, selectedId: o, onSelect: s } = e,
    c = (0, et.useId)(),
    l;
  t[0] === r
    ? (l = t[1])
    : ((l = i(`bg-token-foreground/10 inline-grid gap-1 rounded-2xl p-1`, r)),
      (t[0] = r),
      (t[1] = l));
  let u = `repeat(${a.length}, minmax(0, 1fr))`,
    d;
  t[2] === u
    ? (d = t[3])
    : ((d = { gridTemplateColumns: u }), (t[2] = u), (t[3] = d));
  let f;
  if (t[4] !== c || t[5] !== s || t[6] !== a || t[7] !== o) {
    let e;
    (t[9] !== c || t[10] !== s || t[11] !== o
      ? ((e = (e) => {
          let t = e.id === o;
          return (0, Q.jsxs)(
            `button`,
            {
              className: i(
                `cursor-interaction relative isolate min-w-0 rounded-xl px-3 py-1.5 text-sm font-medium transition-transform duration-150 active:scale-[0.98]`,
                t ? `text-black` : `text-token-text-secondary`,
              ),
              type: `button`,
              "aria-label": e.ariaLabel,
              "aria-pressed": t,
              onClick: () => {
                s(e.id);
              },
              children: [
                t
                  ? (0, Q.jsx)(C.span, {
                      layoutId: c,
                      className: `absolute inset-0 -z-10 rounded-xl bg-white shadow-sm`,
                      transition: { type: `spring`, duration: 0.28, bounce: 0 },
                    })
                  : null,
                e.label,
              ],
            },
            e.id,
          );
        }),
        (t[9] = c),
        (t[10] = s),
        (t[11] = o),
        (t[12] = e))
      : (e = t[12]),
      (f = a.map(e)),
      (t[4] = c),
      (t[5] = s),
      (t[6] = a),
      (t[7] = o),
      (t[8] = f));
  } else f = t[8];
  let p;
  return (
    t[13] !== n || t[14] !== l || t[15] !== d || t[16] !== f
      ? ((p = (0, Q.jsx)(`div`, {
          className: l,
          role: `group`,
          "aria-label": n,
          style: d,
          children: f,
        })),
        (t[13] = n),
        (t[14] = l),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
var nt = `show_logged_in_pricing_page`;
function rt(e) {
  let t = (0, N.c)(3),
    { logExposure: n } = e,
    r = v(),
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = () =>
          y(r, `337040058`, { disableExposureLog: !n }).get(nt, !1) ? A : re),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function it({ intl: e, amount: t, currencyCode: n, minorUnitExponent: r }) {
  return t == null
    ? null
    : e.formatNumber(t, {
        style: `currency`,
        currency: n,
        currencyDisplay: `narrowSymbol`,
        trailingZeroDisplay: `stripIfInteger`,
        minimumFractionDigits: r ?? void 0,
        maximumFractionDigits: r ?? void 0,
      });
}
function at(e) {
  let t = (0, N.c)(94),
    {
      currentPlan: n,
      pricingInfo: r,
      getPlansUrl: o,
      onCtaClick: s,
      onOpenChange: c,
      onOpenUrl: u,
      open: d,
    } = e,
    f = a(),
    [p, m] = (0, et.useState)(`personal`),
    [h, g] = (0, et.useState)(n === T.PRO ? T.PRO : T.PROLITE),
    _ = n === T.GO || n === T.PLUS || n === T.PROLITE || n === T.PRO,
    v;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(E, {
        className: `text-lg font-medium`,
        children: (0, Q.jsx)(l, {
          id: `settings.usage.upgradePlan.title`,
          defaultMessage: `Upgrade plan`,
          description: `Title for the plan upgrade dialog`,
        }),
      })),
      (t[0] = v))
    : (v = t[0]);
  let y;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(te, {
        className: `sr-only`,
        children: (0, Q.jsx)(l, {
          id: `settings.usage.upgradePlan.description`,
          defaultMessage: `Compare personal and business plans`,
          description: `Screen reader description for the plan upgrade dialog`,
        }),
      })),
      (t[1] = y))
    : (y = t[1]);
  let b;
  t[2] === f
    ? (b = t[3])
    : ((b = f.formatMessage({
        id: `settings.usage.upgradePlan.tabs.ariaLabel`,
        defaultMessage: `Choose plan category`,
        description: `Aria label for the plan category toggle`,
      })),
      (t[2] = f),
      (t[3] = b));
  let x;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = {
        id: `personal`,
        label: (0, Q.jsx)(l, {
          id: `settings.usage.upgradePlan.tabs.personal`,
          defaultMessage: `Personal`,
          description: `Label for personal plans tab`,
        }),
      }),
      (t[4] = x))
    : (x = t[4]);
  let S;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = [
        x,
        {
          id: `business`,
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.tabs.business`,
            defaultMessage: `Business`,
            description: `Label for business plans tab`,
          }),
        },
      ]),
      (t[5] = S))
    : (S = t[5]);
  let C;
  t[6] !== b || t[7] !== p
    ? ((C = (0, Q.jsx)(tt, {
        ariaLabel: b,
        className: `w-fit`,
        selectedId: p,
        onSelect: m,
        options: S,
      })),
      (t[6] = b),
      (t[7] = p),
      (t[8] = C))
    : (C = t[8]);
  let w = p !== `personal`,
    ne = p !== `personal` && `invisible pointer-events-none`,
    O;
  t[9] === ne
    ? (O = t[10])
    : ((O = i(`col-start-1 row-start-1 grid gap-2.5 md:grid-cols-3`, ne)),
      (t[9] = ne),
      (t[10] = O));
  let k;
  t[11] !== n ||
  t[12] !== o ||
  t[13] !== f ||
  t[14] !== s ||
  t[15] !== u ||
  t[16] !== r ||
  t[17] !== _
    ? ((k = _
        ? null
        : (0, Q.jsx)(ct, {
            currentPlan: n,
            targetPlan: T.FREE,
            price: ht({ intl: f, pricingInfo: r, plan: T.FREE }),
            title: (0, Q.jsx)(l, {
              id: `settings.usage.upgradePlan.personal.free.title`,
              defaultMessage: `Free`,
              description: `Title for the Free personal plan card`,
            }),
            features: [
              {
                icon: (0, Q.jsx)(_t, {}),
                label: (0, Q.jsx)(l, {
                  id: `settings.usage.upgradePlan.personal.free.usage`,
                  defaultMessage: `Limited Codex usage`,
                  description: `Usage feature on the Free personal plan card`,
                }),
              },
              {
                icon: (0, Q.jsx)(vt, {}),
                label: (0, Q.jsx)(l, {
                  id: `settings.usage.upgradePlan.personal.free.model`,
                  defaultMessage: `GPT-5.3`,
                  description: `Model feature on the Free personal plan card`,
                }),
              },
            ],
            getPlansUrl: o,
            onCtaClick: s,
            onOpenUrl: u,
          })),
      (t[11] = n),
      (t[12] = o),
      (t[13] = f),
      (t[14] = s),
      (t[15] = u),
      (t[16] = r),
      (t[17] = _),
      (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] !== f || t[20] !== r
    ? ((A = ht({ intl: f, pricingInfo: r, plan: T.PLUS })),
      (t[19] = f),
      (t[20] = r),
      (t[21] = A))
    : (A = t[21]);
  let re, j;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.personal.plus.title`,
        defaultMessage: `Plus`,
        description: `Title for the Plus personal plan card`,
      })),
      (j = [
        {
          icon: (0, Q.jsx)(_t, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.personal.plus.usage`,
            defaultMessage: `Enhanced Codex usage`,
            description: `Usage feature on the Plus personal plan card`,
          }),
        },
        {
          icon: (0, Q.jsx)(vt, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.personal.plus.model`,
            defaultMessage: `GPT-5.5 Thinking`,
            description: `Model feature on the Plus personal plan card`,
          }),
        },
        {
          icon: (0, Q.jsx)(yt, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.personal.plus.workspace`,
            defaultMessage: `Connect to Google Workspace`,
            description: `Workspace feature on the Plus personal plan card`,
          }),
        },
      ]),
      (t[22] = re),
      (t[23] = j))
    : ((re = t[22]), (j = t[23]));
  let M;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.more.plus`,
        defaultMessage: `View more details for Plus plan`,
        description: `Screen reader label for the Plus plan details link`,
      })),
      (t[24] = M))
    : (M = t[24]);
  let P;
  t[25] !== n || t[26] !== o || t[27] !== s || t[28] !== u || t[29] !== A
    ? ((P = (0, Q.jsx)(ct, {
        currentPlan: n,
        targetPlan: T.PLUS,
        price: A,
        title: re,
        features: j,
        getPlansUrl: o,
        onCtaClick: s,
        onOpenUrl: u,
        planDetailsLabel: M,
      })),
      (t[25] = n),
      (t[26] = o),
      (t[27] = s),
      (t[28] = u),
      (t[29] = A),
      (t[30] = P))
    : (P = t[30]);
  let F;
  t[31] !== n ||
  t[32] !== o ||
  t[33] !== f ||
  t[34] !== s ||
  t[35] !== u ||
  t[36] !== r ||
  t[37] !== h ||
  t[38] !== _
    ? ((F = _
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(ct, {
                currentPlan: n,
                targetPlan: T.PROLITE,
                price: ht({ intl: f, pricingInfo: r, plan: T.PROLITE }),
                title: (0, Q.jsx)(ut, {
                  tier: (0, Q.jsx)(l, {
                    id: `settings.usage.upgradePlan.personal.proLite.tier`,
                    defaultMessage: `5x`,
                    description: `Tier suffix for the Pro 5x personal plan card`,
                  }),
                }),
                features: dt(T.PROLITE),
                getPlansUrl: o,
                onCtaClick: s,
                onOpenUrl: u,
                planDetailsLabel: (0, Q.jsx)(ft, { plan: T.PROLITE }),
              }),
              (0, Q.jsx)(ct, {
                currentPlan: n,
                targetPlan: T.PRO,
                price: ht({ intl: f, pricingInfo: r, plan: T.PRO }),
                title: (0, Q.jsx)(ut, {
                  tier: (0, Q.jsx)(l, {
                    id: `settings.usage.upgradePlan.personal.pro.tier`,
                    defaultMessage: `20x`,
                    description: `Tier suffix for the Pro 20x personal plan card`,
                  }),
                }),
                features: dt(T.PRO),
                getPlansUrl: o,
                onCtaClick: s,
                onOpenUrl: u,
                planDetailsLabel: (0, Q.jsx)(ft, { plan: T.PRO }),
              }),
            ],
          })
        : (0, Q.jsx)(ct, {
            currentPlan: n,
            targetPlan: h,
            price: ht({ intl: f, pricingInfo: r, plan: h }),
            title: (0, Q.jsxs)(`div`, {
              className: `flex items-center justify-between gap-4`,
              children: [
                (0, Q.jsx)(l, {
                  id: `settings.usage.upgradePlan.personal.pro.title`,
                  defaultMessage: `Pro`,
                  description: `Title for the Pro personal plan card`,
                }),
                (0, Q.jsx)(tt, {
                  ariaLabel: f.formatMessage({
                    id: `settings.usage.upgradePlan.personal.proTier.ariaLabel`,
                    defaultMessage: `Choose Pro plan tier`,
                    description: `Aria label for the Pro tier toggle`,
                  }),
                  className: `shrink-0`,
                  selectedId: h,
                  onSelect: g,
                  options: [
                    {
                      id: T.PROLITE,
                      label: (0, Q.jsx)(l, {
                        id: `settings.usage.upgradePlan.personal.proTier.fiveX`,
                        defaultMessage: `5x`,
                        description: `Label for the Pro 5x tier toggle`,
                      }),
                    },
                    {
                      id: T.PRO,
                      label: (0, Q.jsx)(l, {
                        id: `settings.usage.upgradePlan.personal.proTier.twentyX`,
                        defaultMessage: `20x`,
                        description: `Label for the Pro 20x tier toggle`,
                      }),
                    },
                  ],
                }),
              ],
            }),
            features: dt(h),
            getPlansUrl: o,
            onCtaClick: s,
            onOpenUrl: u,
            planDetailsLabel: (0, Q.jsx)(ft, { plan: h }),
          })),
      (t[31] = n),
      (t[32] = o),
      (t[33] = f),
      (t[34] = s),
      (t[35] = u),
      (t[36] = r),
      (t[37] = h),
      (t[38] = _),
      (t[39] = F))
    : (F = t[39]);
  let I;
  t[40] !== k || t[41] !== P || t[42] !== F || t[43] !== w || t[44] !== O
    ? ((I = (0, Q.jsxs)(`div`, {
        "aria-hidden": w,
        className: O,
        children: [k, P, F],
      })),
      (t[40] = k),
      (t[41] = P),
      (t[42] = F),
      (t[43] = w),
      (t[44] = O),
      (t[45] = I))
    : (I = t[45]);
  let ie = p !== `business`,
    ae = p !== `business` && `invisible pointer-events-none`,
    L;
  t[46] === ae
    ? (L = t[47])
    : ((L = i(`col-start-1 row-start-1 grid gap-2.5 md:grid-cols-2`, ae)),
      (t[46] = ae),
      (t[47] = L));
  let oe, se, ce, le, R, ue;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.codex.title`,
        defaultMessage: `Business`,
        description: `Title for the Codex Business plan card`,
      })),
      (se = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.codex.subtitle`,
        defaultMessage: `Codex`,
        description: `Subtitle for the Codex Business plan card`,
      })),
      (ce = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.codex.price`,
        defaultMessage: `Usage pricing`,
        description: `Price label for the Codex Business plan card`,
      })),
      (le = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.codex.description`,
        defaultMessage: `No fixed seat. Pay as you go based on usage`,
        description: `Description for the Codex Business plan card`,
      })),
      (R = [
        {
          icon: (0, Q.jsx)(_t, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.business.codex.usage`,
            defaultMessage: `Pay-as-you-go usage`,
            description: `Usage feature on the Codex Business plan card`,
          }),
        },
        {
          icon: (0, Q.jsx)(vt, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.business.codex.model`,
            defaultMessage: `GPT-5.5 Thinking`,
            description: `Model feature on the Codex Business plan card`,
          }),
        },
        {
          icon: (0, Q.jsx)(yt, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.business.codex.workspace`,
            defaultMessage: `Connect to Google Workspace`,
            description: `Workspace feature on the Codex Business plan card`,
          }),
        },
        {
          icon: (0, Q.jsx)(bt, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.business.codex.security`,
            defaultMessage: `Enhanced security and admin controls`,
            description: `Security feature on the Codex Business plan card`,
          }),
        },
      ]),
      (ue = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.addWorkspace`,
        defaultMessage: `Add Business workspace`,
        description: `CTA to add a business workspace`,
      })),
      (t[48] = oe),
      (t[49] = se),
      (t[50] = ce),
      (t[51] = le),
      (t[52] = R),
      (t[53] = ue))
    : ((oe = t[48]),
      (se = t[49]),
      (ce = t[50]),
      (le = t[51]),
      (R = t[52]),
      (ue = t[53]));
  let z;
  t[54] === u
    ? (z = t[55])
    : ((z = () => {
        u(He);
      }),
      (t[54] = u),
      (t[55] = z));
  let de;
  t[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.more.businessCodex`,
        defaultMessage: `View more details for Business Codex plan`,
        description: `Screen reader label for the Business Codex plan details link`,
      })),
      (t[56] = de))
    : (de = t[56]);
  let B;
  t[57] !== o || t[58] !== s || t[59] !== u || t[60] !== z
    ? ((B = (0, Q.jsx)(lt, {
        title: oe,
        subtitle: se,
        priceLabel: ce,
        description: le,
        features: R,
        cta: ue,
        onClick: z,
        targetPlan: T.SELF_SERVE_BUSINESS_USAGE_BASED,
        getPlansUrl: o,
        onCtaClick: s,
        onOpenUrl: u,
        planDetailsLabel: de,
      })),
      (t[57] = o),
      (t[58] = s),
      (t[59] = u),
      (t[60] = z),
      (t[61] = B))
    : (B = t[61]);
  let V, fe;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.team.title`,
        defaultMessage: `Business`,
        description: `Title for the ChatGPT and Codex Business plan card`,
      })),
      (fe = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.team.subtitle`,
        defaultMessage: `ChatGPT & Codex`,
        description: `Subtitle for the ChatGPT and Codex Business plan card`,
      })),
      (t[62] = V),
      (t[63] = fe))
    : ((V = t[62]), (fe = t[63]));
  let H;
  t[64] !== f || t[65] !== r
    ? ((H = gt({ intl: f, pricingInfo: r })),
      (t[64] = f),
      (t[65] = r),
      (t[66] = H))
    : (H = t[66]);
  let U, pe, W;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.team.description`,
        defaultMessage: `When billed annually. Minimum of 2 users`,
        description: `Description for the ChatGPT and Codex Business plan card`,
      })),
      (pe = [
        {
          icon: (0, Q.jsx)(_t, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.business.team.usage`,
            defaultMessage: `Enhanced Codex usage`,
            description: `Usage feature on the ChatGPT and Codex Business plan card`,
          }),
        },
        {
          icon: (0, Q.jsx)(vt, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.business.team.model`,
            defaultMessage: `GPT-5.5 Thinking`,
            description: `Model feature on the ChatGPT and Codex Business plan card`,
          }),
        },
        {
          icon: (0, Q.jsx)(yt, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.business.team.workspace`,
            defaultMessage: `Connect to Google Workspace`,
            description: `Workspace feature on the ChatGPT and Codex Business plan card`,
          }),
        },
        {
          icon: (0, Q.jsx)(bt, {}),
          label: (0, Q.jsx)(l, {
            id: `settings.usage.upgradePlan.business.team.security`,
            defaultMessage: `Enhanced security and admin controls`,
            description: `Security feature on the ChatGPT and Codex Business plan card`,
          }),
        },
      ]),
      (W = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.addWorkspace`,
        defaultMessage: `Add Business workspace`,
        description: `CTA to add a business workspace`,
      })),
      (t[67] = U),
      (t[68] = pe),
      (t[69] = W))
    : ((U = t[67]), (pe = t[68]), (W = t[69]));
  let G;
  t[70] === u
    ? (G = t[71])
    : ((G = () => {
        u(Ue);
      }),
      (t[70] = u),
      (t[71] = G));
  let me;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.more.businessTeam`,
        defaultMessage: `View more details for Business ChatGPT and Codex plan`,
        description: `Screen reader label for the Business ChatGPT and Codex plan details link`,
      })),
      (t[72] = me))
    : (me = t[72]);
  let K;
  t[73] !== o || t[74] !== s || t[75] !== u || t[76] !== H || t[77] !== G
    ? ((K = (0, Q.jsx)(lt, {
        title: V,
        subtitle: fe,
        priceLabel: H,
        description: U,
        features: pe,
        cta: W,
        onClick: G,
        targetPlan: T.SELF_SERVE_BUSINESS,
        getPlansUrl: o,
        onCtaClick: s,
        onOpenUrl: u,
        planDetailsLabel: me,
      })),
      (t[73] = o),
      (t[74] = s),
      (t[75] = u),
      (t[76] = H),
      (t[77] = G),
      (t[78] = K))
    : (K = t[78]);
  let q;
  t[79] !== ie || t[80] !== L || t[81] !== B || t[82] !== K
    ? ((q = (0, Q.jsxs)(`div`, {
        "aria-hidden": ie,
        className: L,
        children: [B, K],
      })),
      (t[79] = ie),
      (t[80] = L),
      (t[81] = B),
      (t[82] = K),
      (t[83] = q))
    : (q = t[83]);
  let J;
  t[84] !== I || t[85] !== q
    ? ((J = (0, Q.jsxs)(`div`, { className: `grid`, children: [I, q] })),
      (t[84] = I),
      (t[85] = q),
      (t[86] = J))
    : (J = t[86]);
  let Y;
  t[87] !== J || t[88] !== C
    ? ((Y = (0, Q.jsxs)(ee, {
        className: `max-h-[calc(100vh-2rem)] gap-3 overflow-y-auto px-5 py-4`,
        children: [v, y, C, J],
      })),
      (t[87] = J),
      (t[88] = C),
      (t[89] = Y))
    : (Y = t[89]);
  let X;
  return (
    t[90] !== c || t[91] !== d || t[92] !== Y
      ? ((X = (0, Q.jsx)(D, {
          open: d,
          onOpenChange: c,
          contentClassName: `!w-[min(800px,calc(100vw-2rem))]`,
          children: Y,
        })),
        (t[90] = c),
        (t[91] = d),
        (t[92] = Y),
        (t[93] = X))
      : (X = t[93]),
    X
  );
}
function ot(e) {
  let t = (0, N.c)(24),
    { currentPlan: n, onClose: r, source: i } = e,
    a = u(s),
    { data: o } = x(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { enabled: !0 }), (t[0] = c))
    : (c = t[0]);
  let { data: l } = z(c),
    d;
  t[1] === l
    ? (d = t[2])
    : ((d = { billingCurrency: l, enabled: !0 }), (t[1] = l), (t[2] = d));
  let { data: f } = H(d),
    p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { logExposure: !1 }), (t[3] = p))
    : (p = t[3]);
  let m = rt(p),
    h = o?.plan_type,
    g,
    v;
  (t[4] !== n || t[5] !== h || t[6] !== r
    ? ((g = () => {
        h != null && h !== n.toString() && r();
      }),
      (v = [n, h, r]),
      (t[4] = n),
      (t[5] = h),
      (t[6] = r),
      (t[7] = g),
      (t[8] = v))
    : ((g = t[7]), (v = t[8])),
    (0, et.useEffect)(g, v));
  let y, b;
  (t[9] !== a || t[10] !== i
    ? ((y = () => {
        _(a, {
          eventName: `codex_upgrade_plan_modal_shown`,
          metadata: { source: i },
        });
      }),
      (b = [a, i]),
      (t[9] = a),
      (t[10] = i),
      (t[11] = y),
      (t[12] = b))
    : ((y = t[11]), (b = t[12])),
    (0, et.useEffect)(y, b));
  let S = f ?? null,
    C;
  t[13] !== a || t[14] !== i
    ? ((C = (e, t) => {
        _(a, {
          eventName: `codex_upgrade_plan_modal_cta_clicked`,
          metadata: { cta_action: e, source: i, target_plan: t },
        });
      }),
      (t[13] = a),
      (t[14] = i),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] === r
    ? (w = t[17])
    : ((w = (e) => {
        e || r();
      }),
      (t[16] = r),
      (t[17] = w));
  let T;
  return (
    t[18] !== n || t[19] !== m || t[20] !== w || t[21] !== S || t[22] !== C
      ? ((T = (0, Q.jsx)(at, {
          open: !0,
          currentPlan: n,
          pricingInfo: S,
          getPlansUrl: m,
          onCtaClick: C,
          onOpenChange: w,
          onOpenUrl: st,
        })),
        (t[18] = n),
        (t[19] = m),
        (t[20] = w),
        (t[21] = S),
        (t[22] = C),
        (t[23] = T))
      : (T = t[23]),
    T
  );
}
function st(e) {
  h.dispatchMessage(`open-in-browser`, { url: e });
}
function ct(e) {
  let t = (0, N.c)(29),
    {
      currentPlan: n,
      features: r,
      getPlansUrl: i,
      onCtaClick: a,
      onOpenUrl: o,
      planDetailsLabel: s,
      price: c,
      targetPlan: u,
      title: d,
    } = e,
    f;
  t[0] !== n || t[1] !== u
    ? ((f = Ze({ currentPlan: n, targetPlan: u })),
      (t[0] = n),
      (t[1] = u),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] !== n || t[4] !== u
    ? ((m = Qe({ currentPlan: n, targetPlan: u })),
      (t[3] = n),
      (t[4] = u),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    g;
  t[6] !== i || t[7] !== o || t[8] !== s
    ? ((g =
        s == null
          ? null
          : (0, Q.jsx)(mt, { detailsLabel: s, getPlansUrl: i, onOpenUrl: o })),
      (t[6] = i),
      (t[7] = o),
      (t[8] = s),
      (t[9] = g))
    : (g = t[9]);
  let _ = p === `upgrade` ? `primary` : `outline`,
    v = p === `current`,
    y;
  t[10] !== p || t[11] !== a || t[12] !== o || t[13] !== u || t[14] !== h
    ? ((y = () => {
        h == null || p === `current` || (a(p, u), o(h));
      }),
      (t[10] = p),
      (t[11] = a),
      (t[12] = o),
      (t[13] = u),
      (t[14] = h),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] === p
    ? (b = t[17])
    : ((b =
        p === `current`
          ? (0, Q.jsx)(l, {
              id: `settings.usage.upgradePlan.current`,
              defaultMessage: `Current plan`,
              description: `Disabled CTA label for the user's current plan`,
            })
          : p === `downgrade`
            ? (0, Q.jsx)(l, {
                id: `settings.usage.upgradePlan.downgrade`,
                defaultMessage: `Downgrade`,
                description: `CTA label for moving to a lower-tier plan`,
              })
            : (0, Q.jsx)(l, {
                id: `settings.usage.upgradePlan.upgrade`,
                defaultMessage: `Upgrade plan`,
                description: `CTA label for moving to a higher-tier plan`,
              })),
      (t[16] = p),
      (t[17] = b));
  let x;
  t[18] !== _ || t[19] !== v || t[20] !== y || t[21] !== b
    ? ((x = (0, Q.jsx)(S, {
        className: `w-full justify-center`,
        color: _,
        disabled: v,
        size: `large`,
        onClick: y,
        children: b,
      })),
      (t[18] = _),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b),
      (t[22] = x))
    : (x = t[22]);
  let C;
  return (
    t[23] !== r || t[24] !== c || t[25] !== g || t[26] !== x || t[27] !== d
      ? ((C = (0, Q.jsx)(pt, {
          title: d,
          priceLabel: c,
          features: r,
          featureSlotCount: 3,
          detailsLink: g,
          footer: x,
        })),
        (t[23] = r),
        (t[24] = c),
        (t[25] = g),
        (t[26] = x),
        (t[27] = d),
        (t[28] = C))
      : (C = t[28]),
    C
  );
}
function lt(e) {
  let t = (0, N.c)(19),
    {
      cta: n,
      description: r,
      features: i,
      getPlansUrl: a,
      onCtaClick: o,
      onClick: s,
      onOpenUrl: c,
      planDetailsLabel: l,
      priceLabel: u,
      subtitle: d,
      targetPlan: f,
      title: p,
    } = e,
    m;
  t[0] !== a || t[1] !== c || t[2] !== l
    ? ((m = (0, Q.jsx)(mt, { detailsLabel: l, getPlansUrl: a, onOpenUrl: c })),
      (t[0] = a),
      (t[1] = c),
      (t[2] = l),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] !== s || t[5] !== o || t[6] !== f
    ? ((h = () => {
        (o(`upgrade`, f), s());
      }),
      (t[4] = s),
      (t[5] = o),
      (t[6] = f),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== n || t[9] !== h
    ? ((g = (0, Q.jsx)(S, {
        className: `w-full justify-center`,
        size: `large`,
        onClick: h,
        children: n,
      })),
      (t[8] = n),
      (t[9] = h),
      (t[10] = g))
    : (g = t[10]);
  let _;
  return (
    t[11] !== r ||
    t[12] !== i ||
    t[13] !== u ||
    t[14] !== d ||
    t[15] !== m ||
    t[16] !== g ||
    t[17] !== p
      ? ((_ = (0, Q.jsx)(pt, {
          title: p,
          subtitle: d,
          priceLabel: u,
          priceLabelSize: `compact`,
          description: r,
          features: i,
          featureSlotCount: 4,
          detailsLink: m,
          footer: g,
        })),
        (t[11] = r),
        (t[12] = i),
        (t[13] = u),
        (t[14] = d),
        (t[15] = m),
        (t[16] = g),
        (t[17] = p),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function ut(e) {
  let t = (0, N.c)(3),
    { tier: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.personal.pro.title`,
        defaultMessage: `Pro`,
        description: `Title for the Pro personal plan card`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            r,
            (0, Q.jsx)(`span`, {
              className: `font-normal text-token-text-secondary`,
              children: n,
            }),
          ],
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function dt(e) {
  return [
    {
      icon: (0, Q.jsx)(_t, {}),
      label:
        e === T.PROLITE
          ? (0, Q.jsx)(l, {
              id: `settings.usage.upgradePlan.personal.proLite.usage`,
              defaultMessage: `5x more usage than Plus`,
              description: `Usage feature for the Pro 5x plan card`,
            })
          : (0, Q.jsx)(l, {
              id: `settings.usage.upgradePlan.personal.pro.usage`,
              defaultMessage: `20x more usage than Plus`,
              description: `Usage feature for the Pro 20x plan card`,
            }),
    },
    {
      icon: (0, Q.jsx)(vt, {}),
      label: (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.personal.pro.model`,
        defaultMessage: `GPT-5.5 Pro`,
        description: `Model feature on the Pro personal plan card`,
      }),
    },
    {
      icon: (0, Q.jsx)(yt, {}),
      label: (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.personal.pro.workspace`,
        defaultMessage: `Connect to Google Workspace`,
        description: `Workspace feature on the Pro personal plan card`,
      }),
    },
  ];
}
function ft(e) {
  let t = (0, N.c)(2),
    { plan: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n === T.PROLITE
            ? (0, Q.jsx)(l, {
                id: `settings.usage.upgradePlan.more.proLite`,
                defaultMessage: `View more details for Pro 5x plan`,
                description: `Screen reader label for the Pro 5x plan details link`,
              })
            : (0, Q.jsx)(l, {
                id: `settings.usage.upgradePlan.more.pro`,
                defaultMessage: `View more details for Pro 20x plan`,
                description: `Screen reader label for the Pro 20x plan details link`,
              })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function pt(e) {
  let t = (0, N.c)(41),
    {
      description: n,
      detailsLink: r,
      features: a,
      featureSlotCount: o,
      footer: s,
      priceLabel: c,
      priceLabelSize: l,
      subtitle: u,
      title: d,
    } = e,
    f = l === void 0 ? `large` : l,
    p = f === `large` && `h-10 justify-center`,
    m;
  t[0] === p
    ? (m = t[1])
    : ((m = i(`flex flex-col gap-1`, p)), (t[0] = p), (t[1] = m));
  let h;
  t[2] === d
    ? (h = t[3])
    : ((h = (0, Q.jsx)(`div`, {
        className: `text-base font-semibold text-token-text-primary`,
        children: d,
      })),
      (t[2] = d),
      (t[3] = h));
  let g;
  t[4] === u
    ? (g = t[5])
    : ((g =
        u == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `text-sm font-medium text-token-text-secondary`,
              children: u,
            })),
      (t[4] = u),
      (t[5] = g));
  let _;
  t[6] !== m || t[7] !== h || t[8] !== g
    ? ((_ = (0, Q.jsxs)(`div`, { className: m, children: [h, g] })),
      (t[6] = m),
      (t[7] = h),
      (t[8] = g),
      (t[9] = _))
    : (_ = t[9]);
  let v = f === `large` && `h-12 justify-center`,
    y;
  t[10] === v
    ? (y = t[11])
    : ((y = i(`mt-3 flex flex-col`, v)), (t[10] = v), (t[11] = y));
  let b;
  t[12] !== c || t[13] !== f
    ? ((b =
        c == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: i(
                `text-token-text-primary`,
                f === `large`
                  ? `text-2xl font-normal`
                  : `text-base font-medium`,
              ),
              children: c,
            })),
      (t[12] = c),
      (t[13] = f),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === n
    ? (x = t[16])
    : ((x =
        n == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `mt-1 text-xs text-token-text-secondary`,
              children: n,
            })),
      (t[15] = n),
      (t[16] = x));
  let S;
  t[17] !== x || t[18] !== y || t[19] !== b
    ? ((S = (0, Q.jsxs)(`div`, { className: y, children: [b, x] })),
      (t[17] = x),
      (t[18] = y),
      (t[19] = b),
      (t[20] = S))
    : (S = t[20]);
  let C;
  if (t[21] !== o || t[22] !== a || t[23] !== f) {
    let e;
    (t[25] !== a || t[26] !== f
      ? ((e = (e, t) => {
          let n = a[t];
          return (0, Q.jsx)(
            `div`,
            {
              className: i(
                `flex items-center gap-3 text-sm text-token-text-primary`,
                f === `large` ? `h-10` : `h-8`,
              ),
              children:
                n == null
                  ? null
                  : (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(`span`, {
                          className: `inline-flex h-6 w-6 shrink-0 items-center justify-center`,
                          children: n.icon,
                        }),
                        (0, Q.jsx)(`span`, { children: n.label }),
                      ],
                    }),
            },
            t,
          );
        }),
        (t[25] = a),
        (t[26] = f),
        (t[27] = e))
      : (e = t[27]),
      (C = (0, Q.jsx)(`div`, {
        className: `mt-3 flex flex-col`,
        children: Array.from({ length: o }, e),
      })),
      (t[21] = o),
      (t[22] = a),
      (t[23] = f),
      (t[24] = C));
  } else C = t[24];
  let w = r == null ? `pt-8` : `gap-3`,
    T;
  t[28] === w
    ? (T = t[29])
    : ((T = i(`mt-3 flex flex-col`, w)), (t[28] = w), (t[29] = T));
  let E;
  t[30] === r
    ? (E = t[31])
    : ((E =
        r == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `flex h-5 items-center`,
              children: r,
            })),
      (t[30] = r),
      (t[31] = E));
  let D;
  t[32] !== s || t[33] !== T || t[34] !== E
    ? ((D = (0, Q.jsxs)(`div`, { className: T, children: [E, s] })),
      (t[32] = s),
      (t[33] = T),
      (t[34] = E),
      (t[35] = D))
    : (D = t[35]);
  let ee;
  return (
    t[36] !== S || t[37] !== C || t[38] !== D || t[39] !== _
      ? ((ee = (0, Q.jsxs)(`section`, {
          className: `flex h-full min-h-0 flex-col rounded-2xl border border-token-border p-4`,
          children: [_, S, C, D],
        })),
        (t[36] = S),
        (t[37] = C),
        (t[38] = D),
        (t[39] = _),
        (t[40] = ee))
      : (ee = t[40]),
    ee
  );
}
function mt(e) {
  let t = (0, N.c)(9),
    { detailsLabel: n, getPlansUrl: r, onOpenUrl: i } = e,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = () => {
        i(r());
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(`span`, {
        "aria-hidden": `true`,
        children: (0, Q.jsx)(l, {
          id: `settings.usage.upgradePlan.more`,
          defaultMessage: `+ more`,
          description: `Link to view more plan details from a plan card`,
        }),
      })),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] === n
    ? (s = t[5])
    : ((s = (0, Q.jsx)(`span`, { className: `sr-only`, children: n })),
      (t[4] = n),
      (t[5] = s));
  let c;
  return (
    t[6] !== a || t[7] !== s
      ? ((c = (0, Q.jsxs)(`button`, {
          className: `w-fit cursor-interaction border-0 bg-transparent p-0 text-sm text-token-text-primary underline underline-offset-2`,
          type: `button`,
          onClick: a,
          children: [o, s],
        })),
        (t[6] = a),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function ht({ intl: e, plan: t, pricingInfo: n }) {
  return n == null
    ? null
    : it({
        intl: e,
        amount: n.monthlyAmounts[t],
        currencyCode: n.currencyCode,
        minorUnitExponent: n.minorUnitExponent,
      });
}
function gt({ intl: e, pricingInfo: t }) {
  if (t == null) return null;
  let n = it({
    intl: e,
    amount: t.monthlyAmounts.business,
    currencyCode: t.businessCurrencyCode,
    minorUnitExponent: t.businessMinorUnitExponent,
  });
  return n == null
    ? null
    : (0, Q.jsx)(l, {
        id: `settings.usage.upgradePlan.business.team.price`,
        defaultMessage: `{price} / user / month`,
        description: `Localized monthly per-user price for the ChatGPT and Codex Business plan`,
        values: { price: n },
      });
}
function _t() {
  let e = (0, N.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(j, {
          className: `icon-sm`,
          name: `bubble-on-bubble`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function vt() {
  let e = (0, N.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(ne, {
          className: `icon-sm text-token-charts-yellow`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function yt() {
  let e = (0, N.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(g, { className: `icon-sm` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function bt() {
  let e = (0, N.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(j, { className: `icon-base`, name: `shield` })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var xt = `1640366510`;
function St() {
  let e = (0, N.c)(2),
    t = v(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = (e) => {
          let { scope: n, currentPlan: r, source: i } = e;
          return r == null ||
            !y(t, xt, { disableExposureLog: !1 }).get(`enabled`, !1)
            ? !1
            : (wt(n, r, i), !0);
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function Ct() {
  let e = (0, N.c)(2),
    t = St(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = (e) => {
          let { scope: n, currentPlan: r, getPricingUrl: i, source: a } = e;
          t({ scope: n, currentPlan: r, source: a }) ||
            h.dispatchMessage(`open-in-browser`, { url: i() });
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function wt(e, t, n) {
  O(e, ot, { currentPlan: t, source: n });
}
function Tt(e) {
  return e?.rate_limit ?? null;
}
function Et(e) {
  return e?.credits ?? null;
}
function Dt(e) {
  let t = Tt(e),
    n = [];
  return (
    t?.primary_window && n.push(t.primary_window),
    t?.secondary_window && n.push(t.secondary_window),
    n
  );
}
function Ot(e) {
  let t = Dt(e);
  return t.length === 0
    ? null
    : t.reduce((e, t) =>
        !e || t.used_percent > e.used_percent
          ? t
          : t.used_percent < e.used_percent
            ? e
            : t.reset_at > e.reset_at
              ? t
              : (t.reset_at, e.reset_at, e),
      );
}
function kt(e) {
  return Ot(e)?.reset_at ?? null;
}
function At(e) {
  if (e?.rate_limit_reached_type != null) return !0;
  let t = Tt(e),
    n =
      w(e?.plan_type) &&
      e?.credits?.unlimited === !1 &&
      e?.credits?.has_credits === !1;
  return !!(t?.limit_reached === !0 || t?.allowed === !1 || n || Ft(e));
}
function jt({ rateLimitStatus: e, isWorkspaceAccount: t }) {
  let n = e?.rate_limit_reached_type?.type,
    r = n != null && n !== `rate_limit_reached`;
  return t && Pt(e) && !Ft(e) && !r;
}
function Mt({ rateLimitStatus: e, isWorkspaceAccount: t }) {
  return t && Ft(e);
}
function Nt({
  rateLimitStatus: e,
  isWorkspaceAccount: t,
  isCreditsEnabled: n,
}) {
  let r = !t && Pt(e);
  return (
    n &&
    !Mt({ rateLimitStatus: e, isWorkspaceAccount: t }) &&
    At(e) &&
    !r &&
    !jt({ rateLimitStatus: e, isWorkspaceAccount: t })
  );
}
function Pt(e) {
  let t = Et(e);
  return t?.unlimited === !0 || t?.has_credits === !0;
}
function Ft(e) {
  return e?.spend_control?.reached === !0;
}
function It(e) {
  let t = e?.rate_limit;
  return t?.limit_reached === !0 || t?.allowed === !1;
}
function Lt(e, t) {
  let n = new Date(),
    r = new Date(t * 1e3);
  return r.getFullYear() === n.getFullYear() &&
    r.getMonth() === n.getMonth() &&
    r.getDate() === n.getDate()
    ? r.toLocaleTimeString(e.locale, { timeStyle: `short` })
    : r.toLocaleString(e.locale, { timeStyle: `short`, dateStyle: `medium` });
}
var Rt = 60;
function zt(e) {
  return e == null
    ? null
    : {
        usedPercent: e.used_percent ?? 0,
        windowMinutes:
          e.limit_window_seconds == null ? null : e.limit_window_seconds / Rt,
        resetAt: e.reset_at ?? null,
      };
}
var Bt = `codex`;
function Vt(e, t, n, r = null) {
  return {
    limitId: null,
    limitName: r,
    primary: en(e?.primary_window),
    secondary: en(e?.secondary_window),
    credits: tn(t),
    planType: nn(n),
    rateLimitReachedType: null,
  };
}
function Ht(e) {
  if (e == null) return null;
  let t = e.rate_limit_name;
  if (t == null) return null;
  let n = t.trim();
  return n.length > 0 ? n : null;
}
function Ut(e) {
  if (e == null) return [];
  let t = [],
    n = Ht(e),
    r = Vt(e.rate_limit, e.credits, e.plan_type, n);
  r && t.push({ limitName: null, snapshot: r, blocked: At(e) });
  let i = e.additional_rate_limits;
  if (Array.isArray(i))
    for (let n of i) {
      if (!n?.rate_limit) continue;
      let r = n.limit_name?.trim() ?? null;
      if (r == null || r.length === 0) continue;
      let i = Vt(n.rate_limit, null, e.plan_type, r);
      i && t.push({ limitName: r, snapshot: i, blocked: It(n) });
    }
  return t;
}
function Wt(e, { activeLimitName: t, selectedModel: n } = {}) {
  if (e.length === 0) return e;
  let r = $(n),
    i = $(t),
    a = r ?? (i && !Zt(i) ? i : null);
  return a
    ? e.filter((e) => (e.limitName == null ? !0 : $(e.limitName) === a))
    : e.filter((e) => e.limitName == null);
}
function Gt(e, { activeLimitName: t, selectedModel: n } = {}) {
  if (e.length === 0) return null;
  let r = e.find((e) => e.limitName == null) ?? null,
    i = Qt(e, n),
    a = Qt(e, t),
    o = r?.blocked !== !0;
  return o && i?.blocked === !0
    ? i
    : o && a?.blocked === !0 && !Zt(a.limitName)
      ? a
      : (r ?? i ?? a ?? e[0] ?? null);
}
function Kt(e, t = {}) {
  let n = Gt(e, t);
  return n == null ? null : Ae(n.snapshot);
}
function qt(e) {
  return $t(e)?.resetsAt ?? null;
}
function Jt(e, t = {}) {
  if (e == null || At(e)) return !1;
  let n = t.activeLimitName ?? Ht(e),
    r = e.additional_rate_limits;
  if (!Array.isArray(r)) return n != null && !Zt(n);
  let i = $(t.selectedModel);
  return i != null && r.some((e) => (It(e) ? $(e.limit_name) === i : !1))
    ? !0
    : n != null && !Zt(n);
}
function Yt(e, t) {
  if (e == null) return !1;
  let n = $(t);
  if (n == null) return !1;
  let r = e.additional_rate_limits;
  return Array.isArray(r)
    ? r.some((e) => (It(e) ? $(e.limit_name) === n : !1))
    : !1;
}
function Xt(e) {
  return e.coreRateLimitBlocked
    ? `upsell`
    : e.selectedModelRateLimitReached
      ? `model_limit`
      : `none`;
}
function Zt(e) {
  return e == null ? !0 : e.trim().toLowerCase() === Bt;
}
function $(e) {
  if (e == null) return null;
  let t = e
    .trim()
    .toLowerCase()
    .replace(/[_\s.]+/g, `-`);
  return t.length > 0 ? t : null;
}
function Qt(e, t) {
  let n = $(t);
  return n == null ? null : (e.find((e) => $(e.limitName) === n) ?? null);
}
function $t(e) {
  if (e == null) return null;
  let t = [e.snapshot.primary, e.snapshot.secondary].filter((e) => e != null);
  return t.length === 0
    ? null
    : t.reduce((e, t) =>
        t.usedPercent > e.usedPercent
          ? t
          : t.usedPercent < e.usedPercent
            ? e
            : (t.resetsAt ?? -1 / 0) > (e.resetsAt ?? -1 / 0)
              ? t
              : e,
      );
}
function en(e) {
  let t = zt(e);
  return t == null
    ? null
    : {
        usedPercent: t.usedPercent,
        windowDurationMins: t.windowMinutes,
        resetsAt: t.resetAt,
      };
}
function tn(e) {
  return e
    ? {
        hasCredits: e.has_credits,
        unlimited: e.unlimited,
        balance: e.balance ?? null,
      }
    : null;
}
function nn(e) {
  if (!e) return null;
  switch (e) {
    case `free`:
    case `plus`:
    case `pro`:
      return e;
    case `team`:
    case `self_serve_business_usage_based`:
      return `team`;
    case `business`:
    case `enterprise_cbp_usage_based`:
      return `business`;
    case `enterprise`:
    case `edu`:
      return e;
    case `hc`:
      return `enterprise`;
    case `education`:
    case `k12`:
      return `edu`;
    case `go`:
    case `guest`:
    case `free_workspace`:
    case `quorum`:
      return `unknown`;
    default:
      return `unknown`;
  }
}
export {
  M as $,
  Z as A,
  ke as B,
  rt as C,
  Je as D,
  Ge as E,
  Ne as F,
  fe as G,
  Re as H,
  Le as I,
  H as J,
  U as K,
  Ie as L,
  Ce as M,
  Te as N,
  Ye as O,
  Me as P,
  B as Q,
  Ae as R,
  it as S,
  We as T,
  me as U,
  Oe as V,
  z as W,
  q as X,
  de as Y,
  V as Z,
  Nt as _,
  Xt as a,
  Ct as b,
  Ht as c,
  Jt as d,
  Vt as f,
  Mt as g,
  Pt as h,
  Gt as i,
  we as j,
  Xe as k,
  Zt as l,
  kt as m,
  Qt as n,
  Ut as o,
  Lt as p,
  ue as q,
  Kt as r,
  qt as s,
  Wt as t,
  Yt as u,
  jt as v,
  Ke as w,
  St as x,
  wt as y,
  je as z,
};
//# sourceMappingURL=use-rate-limit.js.map
