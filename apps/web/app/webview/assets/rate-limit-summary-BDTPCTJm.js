import { t as e } from "./jsx-runtime.js";
import { t } from "./clsx-BcPLHiun.js";
import { G as n, U as r, wt as i } from "./setting-storage.js";
import { o as a } from "./statsig--EYRNU53.js";
import { t as o } from "./link-external-BPZREBQk.js";
import { t as s } from "./chevron-right.js";
import {
  F as c,
  H as l,
  L as u,
  P as d,
  V as f,
  l as p,
  r as m,
  z as h,
} from "./use-rate-limit.js";
import { n as g, r as _ } from "./dropdown-DtQxMoJw.js";
import { t as v } from "./bullet-separator-DZkwhKzs.js";
import { t as y } from "./speedometer.js";
var b = i(),
  x = e();
function S(e) {
  let t = (0, b.c)(6),
    { minutes: r, variant: i } = e,
    a = n(),
    o;
  t[0] !== a || t[1] !== r || t[2] !== i
    ? ((o = c({ intl: a, minutes: r, variant: i })),
      (t[0] = a),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o
      ? (s = t[5])
      : ((s = (0, x.jsx)(x.Fragment, { children: o })), (t[4] = o), (t[5] = s)),
    s
  );
}
function C(e) {
  let i = (0, b.c)(77),
    {
      rateLimits: c,
      activeLimitName: l,
      planType: u,
      suppressUpsell: f,
      selectedModel: h,
      availableRateLimitResetCount: v,
      onRateLimitResetClick: S,
      onPlanUpgradeClick: C,
      layout: w,
    } = e,
    T = v === void 0 ? 0 : v,
    E = w === void 0 ? `default` : w,
    D = n(),
    O = a(`1767204071`);
  if (c.length === 0 && T === 0) return null;
  let k, A, j, M, N, P, F, I, L, R, z;
  if (
    i[0] !== l ||
    i[1] !== D ||
    i[2] !== O ||
    i[3] !== E ||
    i[4] !== u ||
    i[5] !== c ||
    i[6] !== h ||
    i[7] !== f
  ) {
    let e = m(c, { activeLimitName: l, selectedModel: h }),
      t;
    (i[19] !== l || i[20] !== f
      ? ((t = f ?? !p(l)), (i[19] = l), (i[20] = f), (i[21] = t))
      : (t = i[21]),
      (M = t),
      (j = E === `compact`),
      (A = g),
      (k = _.Item),
      (I = y),
      (L = s),
      i[22] !== D || i[23] !== O || i[24] !== u
        ? ((R =
            O && ne(u)
              ? D.formatMessage({
                  id: `composer.mode.rateLimit.proPromoTooltip`,
                  defaultMessage: `Upgrade to Pro for boosted Codex limits through May 31`,
                  description: `Limited-time Pro rate limit promotion shown as a tooltip on the rate limit summary menu item`,
                })
              : void 0),
          (i[22] = D),
          (i[23] = O),
          (i[24] = u),
          (i[25] = R))
        : (R = i[25]),
      (z = `left`),
      (N = `flex items-center gap-1`),
      i[26] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((P = (0, x.jsx)(r, {
            id: `composer.mode.rateLimit.heading`,
            defaultMessage: `Usage remaining`,
            description: `Rate limit summary heading`,
          })),
          (i[26] = P))
        : (P = i[26]),
      (F =
        e &&
        (0, x.jsx)(`span`, {
          className: `whitespace-nowrap text-token-input-placeholder-foreground opacity-60`,
          children: d(e.remainingPercent),
        })),
      (i[0] = l),
      (i[1] = D),
      (i[2] = O),
      (i[3] = E),
      (i[4] = u),
      (i[5] = c),
      (i[6] = h),
      (i[7] = f),
      (i[8] = k),
      (i[9] = A),
      (i[10] = j),
      (i[11] = M),
      (i[12] = N),
      (i[13] = P),
      (i[14] = F),
      (i[15] = I),
      (i[16] = L),
      (i[17] = R),
      (i[18] = z));
  } else
    ((k = i[8]),
      (A = i[9]),
      (j = i[10]),
      (M = i[11]),
      (N = i[12]),
      (P = i[13]),
      (F = i[14]),
      (I = i[15]),
      (L = i[16]),
      (R = i[17]),
      (z = i[18]));
  let B;
  i[27] !== N || i[28] !== P || i[29] !== F
    ? ((B = (0, x.jsxs)(`span`, { className: N, children: [P, F] })),
      (i[27] = N),
      (i[28] = P),
      (i[29] = F),
      (i[30] = B))
    : (B = i[30]);
  let V;
  i[31] !== k ||
  i[32] !== B ||
  i[33] !== I ||
  i[34] !== L ||
  i[35] !== R ||
  i[36] !== z
    ? ((V = (0, x.jsx)(k, {
        LeftIcon: I,
        RightIcon: L,
        tooltipText: R,
        tooltipSide: z,
        children: B,
      })),
      (i[31] = k),
      (i[32] = B),
      (i[33] = I),
      (i[34] = L),
      (i[35] = R),
      (i[36] = z),
      (i[37] = V))
    : (V = i[37]);
  let re = j
      ? `grid-cols-[minmax(0,1fr)_auto] gap-x-3 pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]`
      : `grid-cols-[auto_1fr] gap-x-16 px-[var(--padding-row-x)]`,
    H;
  i[38] === re
    ? (H = i[39])
    : ((H = t(`grid items-center gap-y-1.5 py-1`, re)),
      (i[38] = re),
      (i[39] = H));
  let U;
  if (i[40] !== j || i[41] !== c) {
    let e;
    (i[43] === j
      ? (e = i[44])
      : ((e = (e, t) => {
          let n = p(e.limitName) ? null : e.limitName;
          return (0, x.jsx)(
            ee,
            { rateLimit: e.snapshot, limitName: n, compact: j },
            `${e.limitName ?? `default`}-${t}`,
          );
        }),
        (i[43] = j),
        (i[44] = e)),
      (U = c.map(e)),
      (i[40] = j),
      (i[41] = c),
      (i[42] = U));
  } else U = i[42];
  let W;
  i[45] !== H || i[46] !== U
    ? ((W = (0, x.jsx)(`div`, { className: H, children: U })),
      (i[45] = H),
      (i[46] = U),
      (i[47] = W))
    : (W = i[47]);
  let G;
  i[48] !== j || i[49] !== C || i[50] !== u || i[51] !== M
    ? ((G =
        !M &&
        (0, x.jsx)(te, {
          planType: u,
          className: t(
            j &&
              `pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]`,
          ),
          onPlanUpgradeClick: C,
        })),
      (i[48] = j),
      (i[49] = C),
      (i[50] = u),
      (i[51] = M),
      (i[52] = G))
    : (G = i[52]);
  let K;
  i[53] !== T || i[54] !== j || i[55] !== S
    ? ((K =
        T > 0
          ? (0, x.jsx)(_.Item, {
              RightIcon: s,
              className: t(
                j &&
                  `pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]`,
              ),
              onClick: S,
              children: (0, x.jsx)(r, {
                id: `composer.mode.rateLimit.resetsAvailable`,
                defaultMessage: `{availableRateLimitResetCount, plural, one {# reset available} other {# resets available}}`,
                description: `Menu item for opening available rate limit resets`,
                values: { availableRateLimitResetCount: T },
              }),
            })
          : null),
      (i[53] = T),
      (i[54] = j),
      (i[55] = S),
      (i[56] = K))
    : (K = i[56]);
  let ie = j ? `icon-xs text-token-description-foreground` : void 0,
    ae =
      j && `pl-[calc(var(--padding-row-x)+1.25rem)] pr-[var(--padding-row-x)]`,
    q;
  i[57] === ae ? (q = i[58]) : ((q = t(ae)), (i[57] = ae), (i[58] = q));
  let oe = j ? `text-token-foreground` : `text-token-description-foreground`,
    J;
  i[59] === oe ? (J = i[60]) : ((J = t(oe)), (i[59] = oe), (i[60] = J));
  let Y;
  i[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, x.jsx)(r, {
        id: `composer.mode.local.learnMore`,
        defaultMessage: `Learn more`,
        description: `Learn more about rate limits`,
      })),
      (i[61] = Y))
    : (Y = i[61]);
  let X;
  i[62] === J
    ? (X = i[63])
    : ((X = (0, x.jsx)(`span`, { className: J, children: Y })),
      (i[62] = J),
      (i[63] = X));
  let Z;
  i[64] !== ie || i[65] !== q || i[66] !== X
    ? ((Z = (0, x.jsx)(_.Item, {
        RightIcon: o,
        rightIconClassName: ie,
        className: q,
        href: `https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan#h_8dd84c836b`,
        children: X,
      })),
      (i[64] = ie),
      (i[65] = q),
      (i[66] = X),
      (i[67] = Z))
    : (Z = i[67]);
  let Q;
  i[68] !== W || i[69] !== G || i[70] !== K || i[71] !== Z
    ? ((Q = (0, x.jsxs)(`div`, {
        className: `flex flex-col text-sm`,
        children: [W, G, K, Z],
      })),
      (i[68] = W),
      (i[69] = G),
      (i[70] = K),
      (i[71] = Z),
      (i[72] = Q))
    : (Q = i[72]);
  let $;
  return (
    i[73] !== A || i[74] !== V || i[75] !== Q
      ? (($ = (0, x.jsx)(A, { trigger: V, children: Q })),
        (i[73] = A),
        (i[74] = V),
        (i[75] = Q),
        (i[76] = $))
      : ($ = i[76]),
    $
  );
}
function ee(e) {
  let n = (0, b.c)(19),
    { rateLimit: i, limitName: a, compact: o } = e,
    s = i?.primary,
    c;
  n[0] === s ? (c = n[1]) : ((c = f(s)), (n[0] = s), (n[1] = c));
  let l = c,
    u = i?.secondary,
    d;
  n[2] === u ? (d = n[3]) : ((d = f(u)), (n[2] = u), (n[3] = d));
  let p = d;
  if (!l && !p) return null;
  let m;
  n[4] !== o || n[5] !== a
    ? ((m =
        a != null &&
        (0, x.jsx)(`span`, {
          title: T(a),
          className: t(
            `text-token-foreground col-span-2 min-w-0 truncate font-medium`,
            o ? `mt-1` : `mt-2`,
          ),
          children: (0, x.jsx)(r, {
            id: `composer.mode.rateLimit.modelSectionLabel`,
            defaultMessage: `{modelName} limit:`,
            description: `Section label shown before model-specific rate limit windows in summaries`,
            values: { modelName: T(a) },
          }),
        })),
      (n[4] = o),
      (n[5] = a),
      (n[6] = m))
    : (m = n[6]);
  let h;
  n[7] !== o || n[8] !== i || n[9] !== l
    ? ((h = l && (0, x.jsx)(w, { bucket: i.primary ?? null, compact: o })),
      (n[7] = o),
      (n[8] = i),
      (n[9] = l),
      (n[10] = h))
    : (h = n[10]);
  let g;
  n[11] !== o || n[12] !== i || n[13] !== p
    ? ((g = p && (0, x.jsx)(w, { bucket: i.secondary ?? null, compact: o })),
      (n[11] = o),
      (n[12] = i),
      (n[13] = p),
      (n[14] = g))
    : (g = n[14]);
  let _;
  return (
    n[15] !== m || n[16] !== h || n[17] !== g
      ? ((_ = (0, x.jsxs)(x.Fragment, { children: [m, h, g] })),
        (n[15] = m),
        (n[16] = h),
        (n[17] = g),
        (n[18] = _))
      : (_ = n[18]),
    _
  );
}
function w(e) {
  let n = (0, b.c)(35),
    { bucket: r, compact: i } = e;
  if (!f(r)) return null;
  let a;
  if (n[0] !== r.resetsAt) {
    let e = l(r.resetsAt ?? null);
    ((a = e == null ? null : u(e)), (n[0] = r.resetsAt), (n[1] = a));
  } else a = n[1];
  let o = a,
    s,
    c,
    p,
    m;
  if (n[2] !== r.usedPercent || n[3] !== r.windowDurationMins || n[4] !== i) {
    let e = h(r.usedPercent ?? 0),
      a = i && `flex min-w-0 items-center gap-1`,
      o;
    n[9] === a
      ? (o = n[10])
      : ((o = t(`text-token-foreground font-medium`, a)),
        (n[9] = a),
        (n[10] = o));
    let l = i && `shrink-0`,
      u;
    n[11] === l ? (u = n[12]) : ((u = t(l)), (n[11] = l), (n[12] = u));
    let f = r.windowDurationMins ?? null,
      g;
    n[13] === f
      ? (g = n[14])
      : ((g = (0, x.jsx)(S, { minutes: f })), (n[13] = f), (n[14] = g));
    let _;
    (n[15] !== g || n[16] !== u
      ? ((_ = (0, x.jsx)(`span`, { className: u, children: g })),
        (n[15] = g),
        (n[16] = u),
        (n[17] = _))
      : (_ = n[17]),
      n[18] !== _ || n[19] !== o
        ? ((m = (0, x.jsx)(`span`, { className: o, children: _ })),
          (n[18] = _),
          (n[19] = o),
          (n[20] = m))
        : (m = n[20]));
    let v = i
      ? `min-w-0 items-center justify-end`
      : `w-full min-w-0 items-center justify-end overflow-hidden`;
    (n[21] === v
      ? (p = n[22])
      : ((p = t(`text-token-description-foreground flex gap-1 text-end`, v)),
        (n[21] = v),
        (n[22] = p)),
      (s = `shrink-0`),
      (c = d(e)),
      (n[2] = r.usedPercent),
      (n[3] = r.windowDurationMins),
      (n[4] = i),
      (n[5] = s),
      (n[6] = c),
      (n[7] = p),
      (n[8] = m));
  } else ((s = n[5]), (c = n[6]), (p = n[7]), (m = n[8]));
  let g;
  n[23] !== s || n[24] !== c
    ? ((g = (0, x.jsx)(`span`, { className: s, children: c })),
      (n[23] = s),
      (n[24] = c),
      (n[25] = g))
    : (g = n[25]);
  let _;
  n[26] === o
    ? (_ = n[27])
    : ((_ =
        o &&
        (0, x.jsxs)(x.Fragment, {
          children: [
            (0, x.jsx)(`span`, {
              className: `shrink-0`,
              children: (0, x.jsx)(v, {}),
            }),
            (0, x.jsx)(`span`, {
              title: o,
              className: t(
                `text-token-description-foreground flex items-center gap-1`,
                `min-w-0 truncate text-right`,
              ),
              children: o,
            }),
          ],
        })),
      (n[26] = o),
      (n[27] = _));
  let y;
  n[28] !== p || n[29] !== g || n[30] !== _
    ? ((y = (0, x.jsxs)(`span`, { className: p, children: [g, _] })),
      (n[28] = p),
      (n[29] = g),
      (n[30] = _),
      (n[31] = y))
    : (y = n[31]);
  let C;
  return (
    n[32] !== m || n[33] !== y
      ? ((C = (0, x.jsxs)(x.Fragment, { children: [m, y] })),
        (n[32] = m),
        (n[33] = y),
        (n[34] = C))
      : (C = n[34]),
    C
  );
}
function T(e) {
  return e.replace(/_/g, `-`);
}
function te(e) {
  let t = (0, b.c)(15),
    { planType: n, className: i, onPlanUpgradeClick: a } = e;
  switch (n) {
    case `free`:
    case `go`: {
      let e;
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, x.jsx)(r, {
            id: `composer.mode.upgradeToPlus`,
            defaultMessage: `Upgrade to Plus`,
            description: `Upgrade to Plus message for free plan`,
          })),
          (t[0] = e))
        : (e = t[0]);
      let n;
      return (
        t[1] !== i || t[2] !== a
          ? ((n = (0, x.jsx)(_.Item, {
              RightIcon: o,
              className: i,
              href: `https://openai.com/chatgpt/pricing`,
              onClick: a,
              children: e,
            })),
            (t[1] = i),
            (t[2] = a),
            (t[3] = n))
          : (n = t[3]),
        n
      );
    }
    case `plus`: {
      let e;
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, x.jsx)(r, {
            id: `composer.mode.upgradeToPro`,
            defaultMessage: `Upgrade to Pro`,
            description: `Upgrade to Pro`,
          })),
          (t[4] = e))
        : (e = t[4]);
      let n;
      return (
        t[5] !== i || t[6] !== a
          ? ((n = (0, x.jsx)(_.Item, {
              RightIcon: o,
              className: i,
              href: `https://openai.com/chatgpt/pricing`,
              onClick: a,
              children: e,
            })),
            (t[5] = i),
            (t[6] = a),
            (t[7] = n))
          : (n = t[7]),
        n
      );
    }
    case `prolite`: {
      let e;
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, x.jsx)(r, {
            id: `composer.mode.upgradeForMoreUsage`,
            defaultMessage: `Upgrade for more usage`,
            description: `Upgrade for more usage`,
          })),
          (t[8] = e))
        : (e = t[8]);
      let n;
      return (
        t[9] !== i || t[10] !== a
          ? ((n = (0, x.jsx)(_.Item, {
              RightIcon: o,
              className: i,
              href: `https://openai.com/chatgpt/pricing`,
              onClick: a,
              children: e,
            })),
            (t[9] = i),
            (t[10] = a),
            (t[11] = n))
          : (n = t[11]),
        n
      );
    }
    case `team`:
    case `self_serve_business_usage_based`:
    case `business`:
    case `enterprise_cbp_usage_based`:
    case `education`:
    case `quorum`:
    case `enterprise`:
    case `edu`:
    case `hc`:
    case `finserv`: {
      let e;
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, x.jsx)(`span`, {
            className: `text-token-description-foreground`,
            children: (0, x.jsx)(r, {
              id: `composer.mode.contactAdmin`,
              defaultMessage: `To get more access, contact your admin`,
              description: `Suggest contacting admin for increased access`,
            }),
          })),
          (t[12] = e))
        : (e = t[12]);
      let n;
      return (
        t[13] === i
          ? (n = t[14])
          : ((n = (0, x.jsx)(_.Item, {
              className: i,
              allowWrap: !0,
              children: e,
            })),
            (t[13] = i),
            (t[14] = n)),
        n
      );
    }
    case `pro`:
    case `free_workspace`:
    case `guest`:
    case `k12`:
    case void 0:
      return null;
  }
}
function ne(e) {
  switch (e) {
    case `free`:
    case `go`:
    case `plus`:
      return !0;
    case `prolite`:
    case `pro`:
    case `team`:
    case `self_serve_business_usage_based`:
    case `business`:
    case `enterprise_cbp_usage_based`:
    case `education`:
    case `quorum`:
    case `enterprise`:
    case `edu`:
    case `hc`:
    case `finserv`:
    case `free_workspace`:
    case `guest`:
    case `k12`:
    case void 0:
      return !1;
  }
}
export { C as t };
//# sourceMappingURL=rate-limit-summary-BDTPCTJm.js.map
