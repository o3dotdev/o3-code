import { s as e } from "./chunk-Bj-mKKzh.js";
import { ea as t } from "./src-C.js";
import { _n as n } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as r, t as i } from "./jsx-runtime.js";
import { t as a } from "./clsx-BcPLHiun.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
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
import "./google-drive.js";
import "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import { t as m } from "./request-DWZTrEAr.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./codex-api-bK--r_2t.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import "./use-debounced-value-BtOJx-Vp.js";
import "./use-is-dark-BHkhnHe-.js";
import { r as h } from "./toast-signal.js";
import "./window-zoom-context.js";
import { t as g } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import { t as _ } from "./spinner.js";
import "./proxy.js";
import "./x-C_RDKBp5.js";
import { n as v, t as y } from "./skus-JiYadAsS.js";
import "./with-window.js";
import {
  a as b,
  d as x,
  i as S,
  l as C,
  n as w,
  r as T,
} from "./dialog-layout.js";
import "./lightning-bolt.js";
import "./modal-controller-state.js";
import "./check-md.js";
import "./codex-api-error-CsUcWied.js";
import {
  $ as E,
  A as D,
  D as O,
  E as k,
  G as ee,
  H as A,
  J as j,
  K as M,
  L as N,
  O as P,
  Q as te,
  S as F,
  T as I,
  W as ne,
  X as L,
  Y as re,
  Z as ie,
  k as R,
  n as ae,
  o as oe,
  q as z,
  w as se,
  y as B,
  z as V,
} from "./use-rate-limit.js";
import "./checkbox-DtuSNXXy.js";
import "./minus.js";
import { i as H, n as ce, r as U, t as W } from "./rate-limit-rows.js";
import "./links.js";
import "./conversation-starter-card.js";
import "./chevron-NmAOI_v1.js";
import { t as G } from "./banner.js";
import { i as K } from "./settings-shared-BTHmEeQY.js";
import { t as le } from "./settings-content-layout.js";
import { n as ue } from "./settings-row.js";
import { n as q, t as J } from "./settings-group.js";
import { t as de } from "./settings-empty-state-Bec-Sn2w.js";
import { t as fe } from "./useForm-BsmKTTLN.js";
import { t as pe } from "./use-usage-settings-access.js";
var Y = f(),
  X = e(r(), 1);
function Z(e) {
  return e == null ? `` : e.trim();
}
function me({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = ve(e),
    r = ve(t),
    i = ye(n),
    a = be({ parsedThreshold: n, parsedTarget: r });
  return {
    rechargeThresholdError: i,
    rechargeTargetError: a,
    isValid: i == null && a == null,
  };
}
function he({ draftState: e, serverState: t, isSaving: n }) {
  let r = me({
      rechargeThreshold: e.rechargeThreshold,
      rechargeTarget: e.rechargeTarget,
    }),
    i = ge({ draftState: e, serverState: t }),
    a = Q({ draftState: e, serverState: t, validation: r });
  return {
    validation: r,
    hasChanges: i,
    saveIntent: a,
    isSaveEnabled: i && a !== `none` && !n,
  };
}
function Q({ draftState: e, serverState: t, validation: n }) {
  return e.isEnabled
    ? n.isValid
      ? t.isEnabled
        ? Z(e.rechargeThreshold) === Z(t.rechargeThreshold) &&
          Z(e.rechargeTarget) === Z(t.rechargeTarget)
          ? `none`
          : `update`
        : `enable`
      : `none`
    : t.isEnabled
      ? `disable`
      : `none`;
}
function ge({ draftState: e, serverState: t }) {
  return e.isEnabled === t.isEnabled
    ? !e.isEnabled && !t.isEnabled
      ? !1
      : Z(e.rechargeThreshold) !== Z(t.rechargeThreshold) ||
        Z(e.rechargeTarget) !== Z(t.rechargeTarget)
    : !0;
}
function _e({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = Z(e),
    r = Z(t);
  if (!/^\d+$/.test(n) || !/^\d+$/.test(r)) return null;
  let i = Number.parseInt(n, 10),
    a = Number.parseInt(r, 10);
  return a < i ? null : a - i;
}
function ve(e) {
  let t = Z(e);
  return t.length === 0
    ? { kind: `missing` }
    : /^\d+$/.test(t)
      ? { kind: `valid`, value: Number.parseInt(t, 10) }
      : { kind: `invalid` };
}
function ye(e) {
  switch (e.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return e.value < 125 ? `below-threshold-minimum` : null;
  }
}
function be({ parsedThreshold: e, parsedTarget: t }) {
  switch (t.kind) {
    case `missing`:
      return `missing`;
    case `invalid`:
      return `not-whole-number`;
    case `valid`:
      return e.kind === `valid` && t.value - e.value < 125
        ? `target-difference-too-small`
        : null;
  }
}
var $ = i(),
  xe = { duration: 3 },
  Se = `125`,
  Ce = `250`,
  we = `${t}/settings/usage?credit_modal=true`,
  Te = `https://help.openai.com/en/articles/20001106-codex-rate-card`,
  Ee = `min-w-[88px] justify-center`;
function De(e) {
  let t = (0, Y.c)(43),
    {
      serverState: n,
      creditDetails: r,
      enableAutoTopUpMutation: i,
      updateAutoTopUpMutation: a,
      disableAutoTopUpMutation: s,
    } = e,
    l = o(),
    u = ce(),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { enabled: !0 }), (t[0] = d))
    : (d = t[0]);
  let { data: f } = ne(d),
    p;
  t[1] === f
    ? (p = t[2])
    : ((p = { billingCurrency: f, enabled: !0 }), (t[1] = f), (t[2] = p));
  let { data: m } = ee(p),
    [h, _] = (0, X.useState)(!1),
    v;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(c, {
        id: `settings.usage.credit.balance.title`,
        defaultMessage: `Credits balance`,
        description: `Title for the credits balance section`,
      })),
      (t[3] = v))
    : (v = t[3]);
  let y;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(J.Header, {
        className: `pb-3 [&>div>div]:!text-sm`,
        title: v,
        subtitle: (0, $.jsx)(c, {
          id: `settings.usage.credit.balance.description`,
          defaultMessage: `Buy credits or turn on auto-reload to continue using Codex if you hit a limit. <link>Learn more</link>`,
          description: `Description for the credits balance section in usage settings`,
          values: { link: Oe },
        }),
      })),
      (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] !== r || t[6] !== m || t[7] !== l
    ? ((b = Ye({ intl: l, creditDetails: r, pricingInfo: m })),
      (t[5] = r),
      (t[6] = m),
      (t[7] = l),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] === b
    ? (x = t[10])
    : ((x = (0, $.jsx)(`div`, {
        className: `text-sm text-token-text-primary`,
        children: b,
      })),
      (t[9] = b),
      (t[10] = x));
  let S, C;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(c, {
        id: `settings.usage.credit.balance.current`,
        defaultMessage: `Current balance`,
        description: `Label below the current credits balance amount`,
      })),
      (C = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 rounded-full bg-current`,
      })),
      (t[11] = S),
      (t[12] = C))
    : ((S = t[11]), (C = t[12]));
  let w;
  t[13] !== u || t[14] !== n.isEnabled
    ? ((w = () => {
        u({
          intent: `auto-reload`,
          isAutoReloadEnabled: n.isEnabled,
          openLegacyAutoReload: () => {
            _(!0);
          },
        });
      }),
      (t[13] = u),
      (t[14] = n.isEnabled),
      (t[15] = w))
    : (w = t[15]);
  let T;
  t[16] === n.isEnabled
    ? (T = t[17])
    : ((T = n.isEnabled
        ? (0, $.jsx)(c, {
            id: `settings.usage.credit.balance.manageAutoReload`,
            defaultMessage: `Manage auto-reload`,
            description: `Button label to manage active auto reload from the credits balance section`,
          })
        : (0, $.jsx)(c, {
            id: `settings.usage.credit.balance.setupAutoReload`,
            defaultMessage: `Set up auto-reload`,
            description: `Button label to set up auto reload from the credits balance section`,
          })),
      (t[16] = n.isEnabled),
      (t[17] = T));
  let E;
  t[18] !== T || t[19] !== w
    ? ((E = (0, $.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-x-1 text-sm text-token-text-secondary`,
        children: [
          S,
          C,
          (0, $.jsx)(`button`, {
            type: `button`,
            className: `cursor-interaction text-token-text-link-foreground`,
            onClick: w,
            children: T,
          }),
        ],
      })),
      (t[18] = T),
      (t[19] = w),
      (t[20] = E))
    : (E = t[20]);
  let D;
  t[21] !== E || t[22] !== x
    ? ((D = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-1`,
        children: [x, E],
      })),
      (t[21] = E),
      (t[22] = x),
      (t[23] = D))
    : (D = t[23]);
  let O;
  t[24] !== u || t[25] !== n.isEnabled
    ? ((O = () => {
        u({
          intent: `purchase`,
          isAutoReloadEnabled: n.isEnabled,
          legacyUrl: we,
        });
      }),
      (t[24] = u),
      (t[25] = n.isEnabled),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(c, {
        id: `settings.usage.credit.balance.buyCredits`,
        defaultMessage: `Buy credits`,
        description: `Button label to open the credit purchase flow`,
      })),
      (t[27] = k))
    : (k = t[27]);
  let A;
  t[28] === O
    ? (A = t[29])
    : ((A = (0, $.jsx)(g, { color: `outline`, onClick: O, children: k })),
      (t[28] = O),
      (t[29] = A));
  let j;
  t[30] !== D || t[31] !== A
    ? ((j = (0, $.jsxs)(J, {
        children: [
          y,
          (0, $.jsx)(J.Content, {
            children: (0, $.jsx)(q, {
              children: (0, $.jsxs)(`div`, {
                className: `flex items-center justify-between gap-4 p-4`,
                children: [D, A],
              }),
            }),
          }),
        ],
      })),
      (t[30] = D),
      (t[31] = A),
      (t[32] = j))
    : (j = t[32]);
  let M;
  t[33] !== r ||
  t[34] !== s ||
  t[35] !== i ||
  t[36] !== h ||
  t[37] !== n ||
  t[38] !== a
    ? ((M = h
        ? (0, $.jsx)(Ae, {
            open: h,
            serverState: n,
            creditDetails: r,
            enableAutoTopUpMutation: i,
            updateAutoTopUpMutation: a,
            disableAutoTopUpMutation: s,
            onOpenChange: _,
          })
        : null),
      (t[33] = r),
      (t[34] = s),
      (t[35] = i),
      (t[36] = h),
      (t[37] = n),
      (t[38] = a),
      (t[39] = M))
    : (M = t[39]);
  let N;
  return (
    t[40] !== j || t[41] !== M
      ? ((N = (0, $.jsxs)($.Fragment, { children: [j, M] })),
        (t[40] = j),
        (t[41] = M),
        (t[42] = N))
      : (N = t[42]),
    N
  );
}
function Oe(e) {
  return (0, $.jsx)(`a`, {
    href: Te,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `inline-flex cursor-interaction text-token-text-link-foreground`,
    onClick: ke,
    children: e,
  });
}
function ke(e) {
  (e.preventDefault(), p.dispatchMessage(`open-in-browser`, { url: Te }));
}
function Ae(e) {
  let t = (0, Y.c)(72),
    {
      open: n,
      serverState: r,
      creditDetails: i,
      enableAutoTopUpMutation: a,
      updateAutoTopUpMutation: u,
      disableAutoTopUpMutation: f,
      onOpenChange: p,
    } = e,
    m = l(s),
    _ = o(),
    v;
  t[0] === n ? (v = t[1]) : ((v = { enabled: n }), (t[0] = n), (t[1] = v));
  let { data: y, isPending: D } = ne(v),
    O;
  t[2] !== y || t[3] !== n
    ? ((O = { billingCurrency: y, enabled: n }),
      (t[2] = y),
      (t[3] = n),
      (t[4] = O))
    : (O = t[4]);
  let { data: k, isPending: A } = ee(O),
    j = D || A,
    M = (0, X.useId)(),
    N = (0, X.useId)(),
    P = (0, X.useId)(),
    te = (0, X.useId)(),
    F = a.isPending || u.isPending,
    I = f.isPending,
    L = F || I,
    [re, ie] = (0, X.useState)(null),
    [R, ae] = (0, X.useState)(!1),
    oe;
  t[5] !== _ || t[6] !== m
    ? ((oe = (e) => {
        m.get(h).danger(st(e, _), xe);
      }),
      (t[5] = _),
      (t[6] = m),
      (t[7] = oe))
    : (oe = t[7]);
  let z = oe,
    se;
  t[8] !== _ || t[9] !== m
    ? ((se = (e) => {
        m.get(h).success(ct(e, _), xe);
      }),
      (t[8] = _),
      (t[9] = m),
      (t[10] = se))
    : (se = t[10]);
  let B = se,
    V;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = () => {
        (ae(!1), ie(null));
      }),
      (t[11] = V))
    : (V = t[11]);
  let H = V,
    ce;
  t[12] !== k || t[13] !== i?.balance || t[14] !== _
    ? ((ce = (e) => {
        let { draftState: t } = e;
        (ae(!0),
          ie(
            Qe({
              intl: _,
              creditBalance: i?.balance,
              rechargeThreshold: t.rechargeThreshold,
              rechargeTarget: t.rechargeTarget,
              pricingInfo: k,
            })?.amount ?? null,
          ));
      }),
      (t[12] = k),
      (t[13] = i?.balance),
      (t[14] = _),
      (t[15] = ce))
    : (ce = t[15]);
  let U = ce,
    W;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = [`usage-settings`, `auto-top-up`, `manage-payment`]), (t[16] = W))
    : (W = t[16]);
  let G;
  t[17] !== _ || t[18] !== m
    ? ((G = {
        mutationKey: W,
        mutationFn: Le,
        onSuccess: Ie,
        onError: () => {
          m.get(h).danger(
            _.formatMessage({
              id: `settings.usage.autoTopUp.managePayment.error`,
              defaultMessage: `Unable to open payment settings right now. Please try again.`,
              description: `Error shown when opening the manage payment flow from the auto top up settings dialog fails`,
            }),
            xe,
          );
        },
      }),
      (t[17] = _),
      (t[18] = m),
      (t[19] = G))
    : (G = t[19]);
  let K = d(G),
    le;
  t[20] === K
    ? (le = t[21])
    : ((le = () => {
        K.isPending || K.mutate();
      }),
      (t[20] = K),
      (t[21] = le));
  let ue = le,
    q = r.rechargeThreshold ?? Se,
    J = r.rechargeTarget ?? Ce,
    de;
  t[22] !== q || t[23] !== J
    ? ((de = { isEnabled: !0, rechargeThreshold: q, rechargeTarget: J }),
      (t[22] = q),
      (t[23] = J),
      (t[24] = de))
    : (de = t[24]);
  let pe;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = { onChange: Fe, onSubmit: Pe }), (t[25] = pe))
    : (pe = t[25]);
  let Z;
  t[26] !== a ||
  t[27] !== U ||
  t[28] !== L ||
  t[29] !== p ||
  t[30] !== r ||
  t[31] !== z ||
  t[32] !== B ||
  t[33] !== u
    ? ((Z = async (e) => {
        let { value: t } = e,
          n = he({ draftState: t, serverState: r, isSaving: L });
        if (n.isSaveEnabled)
          switch (n.saveIntent) {
            case `disable`:
            case `none`:
              return;
            case `enable`:
              try {
                if (
                  (H(), E((await a.mutateAsync(lt(t))).immediate_top_up_status))
                ) {
                  U({ draftState: t });
                  return;
                }
                (B(`enable`), p(!1));
              } catch {
                z(`enable`);
              }
              return;
            case `update`:
              try {
                if (
                  (H(), E((await u.mutateAsync(lt(t))).immediate_top_up_status))
                ) {
                  U({ draftState: t });
                  return;
                }
                (B(`update`), p(!1));
              } catch {
                z(`update`);
              }
              return;
          }
      }),
      (t[26] = a),
      (t[27] = U),
      (t[28] = L),
      (t[29] = p),
      (t[30] = r),
      (t[31] = z),
      (t[32] = B),
      (t[33] = u),
      (t[34] = Z))
    : (Z = t[34]);
  let me;
  t[35] !== de || t[36] !== Z
    ? ((me = { defaultValues: de, validators: pe, onSubmit: Z }),
      (t[35] = de),
      (t[36] = Z),
      (t[37] = me))
    : (me = t[37]);
  let Q = fe(me),
    ge;
  t[38] !== L || t[39] !== p
    ? ((ge = (e) => {
        (L && !e) || (e || H(), p(e));
      }),
      (t[38] = L),
      (t[39] = p),
      (t[40] = ge))
    : (ge = t[40]);
  let _e = ge,
    ve;
  t[41] !== f ||
  t[42] !== p ||
  t[43] !== r.isEnabled ||
  t[44] !== z ||
  t[45] !== B
    ? ((ve = async () => {
        if (r.isEnabled)
          try {
            (await f.mutateAsync(), B(`disable`), p(!1));
          } catch {
            z(`disable`);
          }
      }),
      (t[41] = f),
      (t[42] = p),
      (t[43] = r.isEnabled),
      (t[44] = z),
      (t[45] = B),
      (t[46] = ve))
    : (ve = t[46]);
  let ye = ve,
    be;
  t[47] !== k ||
  t[48] !== i?.balance ||
  t[49] !== N ||
  t[50] !== M ||
  t[51] !== Q ||
  t[52] !== _e ||
  t[53] !== ye ||
  t[54] !== ue ||
  t[55] !== R ||
  t[56] !== re ||
  t[57] !== _ ||
  t[58] !== L ||
  t[59] !== j ||
  t[60] !== I ||
  t[61] !== F ||
  t[62] !== p ||
  t[63] !== n ||
  t[64] !== K.isPending ||
  t[65] !== r ||
  t[66] !== te ||
  t[67] !== P
    ? ((be = (e) => {
        let { values: t, submissionAttempts: a } = e,
          o = he({ draftState: t, serverState: r, isSaving: L }),
          s = Qe({
            intl: _,
            creditBalance: i?.balance,
            rechargeThreshold: t.rechargeThreshold,
            rechargeTarget: t.rechargeTarget,
            pricingInfo: k,
          }),
          l =
            !R &&
            s != null &&
            (o.saveIntent === `enable` || o.saveIntent === `update`)
              ? {
                  saveIntent: o.saveIntent,
                  amount: s.amount,
                  creditCount: s.creditCount,
                }
              : null;
        return (0, $.jsx)(C, {
          open: n,
          size: `default`,
          contentClassName: `w-[536px] max-w-[calc(100vw-2rem)]`,
          contentProps: { "aria-describedby": N, onOpenAutoFocus: Me },
          shouldIgnoreClickOutside: L,
          onOpenChange: _e,
          children: (0, $.jsx)(`form`, {
            onSubmit: (e) => {
              (e.preventDefault(), Q.handleSubmit());
            },
            children: (0, $.jsxs)(w, {
              className: `gap-0 px-6 py-6`,
              children: [
                (0, $.jsx)(x, {
                  asChild: !0,
                  children: (0, $.jsx)(`h2`, {
                    id: M,
                    className: `sr-only`,
                    children: _.formatMessage({
                      id: `settings.usage.autoTopUp.dialog.title`,
                      defaultMessage: `Auto-reload credits`,
                      description: `Title for the auto top up settings dialog`,
                    }),
                  }),
                }),
                (0, $.jsx)(`p`, {
                  id: N,
                  className: `sr-only`,
                  children: _.formatMessage({
                    id: `settings.usage.autoTopUp.dialog.description`,
                    defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                    description: `Description shown below the inputs in the auto top up settings dialog`,
                  }),
                }),
                (0, $.jsx)(b, {
                  children: (0, $.jsx)(S, {
                    title: (0, $.jsx)(c, {
                      id: `settings.usage.autoTopUp.dialog.title`,
                      defaultMessage: `Auto-reload credits`,
                      description: `Title for the auto top up settings dialog`,
                    }),
                  }),
                }),
                (0, $.jsxs)(b, {
                  className: `gap-5`,
                  children: [
                    (0, $.jsx)(Q.Field, {
                      name: `rechargeThreshold`,
                      children: (e) => {
                        let t =
                          a > 0 || e.state.meta.isBlurred
                            ? et(e.state.meta.errors)
                            : null;
                        return (0, $.jsx)(Ke, {
                          id: P,
                          label: (0, $.jsx)(c, {
                            id: `settings.usage.autoTopUp.threshold.label`,
                            defaultMessage: `Minimum balance`,
                            description: `Label for the auto top up threshold input in the dialog`,
                          }),
                          value: e.state.value,
                          placeholder: `125`,
                          disabled: L,
                          hasError: t != null,
                          helperText: (0, $.jsx)(c, {
                            id: `settings.usage.autoTopUp.threshold.helper`,
                            defaultMessage: `Auto reload triggers when your credit balance goes below this amount.`,
                            description: `Helper text shown below the minimum balance input in the auto top up dialog`,
                          }),
                          footerContent: it({
                            fieldError: t,
                            fieldName: `threshold`,
                            intl: _,
                          }),
                          footerTone: `error`,
                          ariaLabel: _.formatMessage({
                            id: `settings.usage.autoTopUp.threshold.ariaLabel`,
                            defaultMessage: `Auto-reload minimum balance`,
                            description: `Aria label for the auto top up threshold input`,
                          }),
                          onBlur: e.handleBlur,
                          onChange: (t) => {
                            (H(), e.handleChange(t));
                          },
                        });
                      },
                    }),
                    (0, $.jsx)(Q.Field, {
                      name: `rechargeTarget`,
                      children: (e) => {
                        let n =
                            a > 0 || e.state.meta.isBlurred
                              ? tt(e.state.meta.errors)
                              : null,
                          r = Ze({
                            intl: _,
                            rechargeThreshold: t.rechargeThreshold,
                            rechargeTarget: e.state.value,
                            pricingInfo: k,
                          });
                        return (0, $.jsx)(Ke, {
                          id: te,
                          label: (0, $.jsx)(c, {
                            id: `settings.usage.autoTopUp.target.label`,
                            defaultMessage: `Target balance`,
                            description: `Label for the auto top up target balance input in the dialog`,
                          }),
                          value: e.state.value,
                          placeholder: `250`,
                          disabled: L,
                          hasError: n != null,
                          helperText: (0, $.jsx)(c, {
                            id: `settings.usage.autoTopUp.target.helper`,
                            defaultMessage: `Auto reload brings your credit balance back up to this amount.`,
                            description: `Helper text shown below the target balance input in the auto top up dialog`,
                          }),
                          footerContent:
                            n == null
                              ? j
                                ? (0, $.jsx)(qe, { intl: _ })
                                : r == null
                                  ? null
                                  : (0, $.jsx)(c, {
                                      id: `settings.usage.autoTopUp.target.equivalent`,
                                      defaultMessage: `Minimum {creditCount, number} credit will be purchased, equivalent to <strong>{amount}</strong>`,
                                      description: `Message shown below the target balance input with the estimated minimum billing amount`,
                                      values: {
                                        creditCount: r.creditCount,
                                        amount: r.amount,
                                        strong: je,
                                      },
                                    })
                              : it({
                                  fieldError: n,
                                  fieldName: `target`,
                                  intl: _,
                                }),
                          footerTone: n == null ? `secondary` : `error`,
                          ariaLabel: _.formatMessage({
                            id: `settings.usage.autoTopUp.target.ariaLabel`,
                            defaultMessage: `Auto-reload target balance`,
                            description: `Aria label for the auto top up target balance input`,
                          }),
                          onBlur: e.handleBlur,
                          onChange: (t) => {
                            (H(), e.handleChange(t));
                          },
                        });
                      },
                    }),
                    (0, $.jsx)(`div`, {
                      className: `text-sm leading-5 text-token-text-secondary`,
                      children: (0, $.jsx)(c, {
                        id: `settings.usage.autoTopUp.dialog.description`,
                        defaultMessage: `OpenAI will charge your payment method automatically when you reach your minimum balance.`,
                        description: `Description shown below the inputs in the auto top up settings dialog`,
                      }),
                    }),
                    l == null
                      ? null
                      : (0, $.jsx)(Re, {
                          saveIntent: l.saveIntent,
                          amount: l.amount,
                          creditCount: l.creditCount,
                        }),
                    R
                      ? (0, $.jsx)(Ve, {
                          amount: re,
                          isManagePaymentPending: K.isPending,
                          onManagePaymentClick: ue,
                        })
                      : null,
                  ],
                }),
                (0, $.jsx)(b, {
                  className: `pt-7`,
                  children: (0, $.jsxs)(T, {
                    children: [
                      r.isEnabled
                        ? (0, $.jsx)(g, {
                            color: `outline`,
                            className: Ee,
                            loading: I,
                            disabled: L,
                            onClick: () => {
                              ye();
                            },
                            children: (0, $.jsx)(c, {
                              id: `settings.usage.autoTopUp.disable`,
                              defaultMessage: `Turn off`,
                              description: `Button label to disable auto top up`,
                            }),
                          })
                        : (0, $.jsx)(g, {
                            color: `outline`,
                            className: Ee,
                            disabled: L,
                            onClick: () => {
                              p(!1);
                            },
                            children: (0, $.jsx)(c, {
                              id: `settings.usage.autoTopUp.cancel`,
                              defaultMessage: `Cancel`,
                              description: `Button label to close the auto top up dialog without saving`,
                            }),
                          }),
                      (0, $.jsx)(g, {
                        color: `primary`,
                        type: `submit`,
                        className: Ee,
                        loading: F,
                        disabled: !o.isSaveEnabled,
                        children: r.isEnabled
                          ? (0, $.jsx)(c, {
                              id: `settings.usage.autoTopUp.save`,
                              defaultMessage: `Save`,
                              description: `Button label to save auto top up settings`,
                            })
                          : (0, $.jsx)(c, {
                              id: `settings.usage.autoTopUp.enable`,
                              defaultMessage: `Turn on`,
                              description: `Button label to enable auto top up`,
                            }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }),
      (t[47] = k),
      (t[48] = i?.balance),
      (t[49] = N),
      (t[50] = M),
      (t[51] = Q),
      (t[52] = _e),
      (t[53] = ye),
      (t[54] = ue),
      (t[55] = R),
      (t[56] = re),
      (t[57] = _),
      (t[58] = L),
      (t[59] = j),
      (t[60] = I),
      (t[61] = F),
      (t[62] = p),
      (t[63] = n),
      (t[64] = K.isPending),
      (t[65] = r),
      (t[66] = te),
      (t[67] = P),
      (t[68] = be))
    : (be = t[68]);
  let we;
  return (
    t[69] !== Q.Subscribe || t[70] !== be
      ? ((we = (0, $.jsx)(Q.Subscribe, { selector: Ne, children: be })),
        (t[69] = Q.Subscribe),
        (t[70] = be),
        (t[71] = we))
      : (we = t[71]),
    we
  );
}
function je(e) {
  return (0, $.jsx)(`span`, {
    className: `font-medium text-token-text-primary`,
    children: e,
  });
}
function Me(e) {
  e.preventDefault();
}
function Ne(e) {
  return { values: e.values, submissionAttempts: e.submissionAttempts };
}
function Pe(e) {
  let { value: t } = e;
  return $e(t);
}
function Fe(e) {
  let { value: t } = e;
  return $e(t);
}
function Ie(e) {
  window.open(e.url, `_blank`, `noopener,noreferrer`);
}
async function Le() {
  return await m.safeGet(`/payments/customer_portal`);
}
function Re(e) {
  let t = (0, Y.c)(4),
    { saveIntent: n, amount: r, creditCount: i } = e,
    a;
  return (
    t[0] !== r || t[1] !== i || t[2] !== n
      ? ((a = (0, $.jsx)(G, {
          type: `normal`,
          layout: `vertical`,
          content:
            n === `enable`
              ? (0, $.jsx)(c, {
                  id: `settings.usage.autoTopUp.immediateTopUpNotice.enable`,
                  defaultMessage: `Enabling auto reload will trigger a one-time purchase of {creditCount, number} credit to reach your target balance. Estimated cost: <strong>{amount}</strong>.`,
                  description: `Informational banner shown before enabling auto top up when a one-time immediate top up will occur`,
                  values: { amount: r, creditCount: i, strong: Be },
                })
              : (0, $.jsx)(c, {
                  id: `settings.usage.autoTopUp.immediateTopUpNotice.update`,
                  defaultMessage: `Updating your settings will trigger a one-time purchase of {creditCount, number} credit with an estimated cost of <strong>{amount}</strong>.`,
                  description: `Informational banner shown before updating auto top up when a one-time immediate top up will occur`,
                  values: { amount: r, creditCount: i, strong: ze },
                }),
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function ze(e) {
  return (0, $.jsx)(`span`, {
    className: `font-medium text-token-text-primary`,
    children: e,
  });
}
function Be(e) {
  return (0, $.jsx)(`span`, {
    className: `font-medium text-token-text-primary`,
    children: e,
  });
}
function Ve(e) {
  let t = (0, Y.c)(4),
    { amount: n, isManagePaymentPending: r, onManagePaymentClick: i } = e,
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((o = (0, $.jsx)(G, {
          type: `error`,
          layout: `vertical`,
          content:
            n == null
              ? (0, $.jsx)(c, {
                  id: `settings.usage.autoTopUp.immediateTopUpFailure.generic`,
                  defaultMessage: `The initial top-up failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>`,
                  description: `Inline error shown in the auto top up settings dialog when the initial top up attempt fails without a price estimate`,
                  values: {
                    actionLine: Ge,
                    managePayment: (e) =>
                      (0, $.jsx)(`a`, {
                        href: `#`,
                        className: a(
                          `font-medium underline underline-offset-2`,
                          r && `pointer-events-none opacity-60`,
                        ),
                        "aria-disabled": r,
                        onClick: (e) => {
                          (e.preventDefault(), i());
                        },
                        children: e,
                      }),
                    purchaseCredit: We,
                  },
                })
              : (0, $.jsx)(c, {
                  id: `settings.usage.autoTopUp.immediateTopUpFailure.amount`,
                  defaultMessage: `The initial top-up for an estimated {amount} failed. <actionLine><managePayment>Update your payment method</managePayment> or <purchaseCredit>purchase credit directly</purchaseCredit>.</actionLine>`,
                  description: `Inline error shown in the auto top up settings dialog when the initial top up attempt fails and a price estimate is available`,
                  values: {
                    amount: n,
                    actionLine: Ue,
                    managePayment: (e) =>
                      (0, $.jsx)(`a`, {
                        href: `#`,
                        className: a(
                          `font-medium underline underline-offset-2`,
                          r && `pointer-events-none opacity-60`,
                        ),
                        "aria-disabled": r,
                        onClick: (e) => {
                          (e.preventDefault(), i());
                        },
                        children: e,
                      }),
                    purchaseCredit: He,
                  },
                }),
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function He(e) {
  return (0, $.jsx)(`a`, {
    href: we,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `font-medium underline underline-offset-2`,
    children: e,
  });
}
function Ue(e) {
  return (0, $.jsx)(`div`, { className: `mt-1`, children: e });
}
function We(e) {
  return (0, $.jsx)(`a`, {
    href: we,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `font-medium underline underline-offset-2`,
    children: e,
  });
}
function Ge(e) {
  return (0, $.jsx)(`div`, { className: `mt-1`, children: e });
}
function Ke(e) {
  let t = (0, Y.c)(22),
    {
      id: n,
      label: r,
      value: i,
      placeholder: o,
      disabled: s,
      hasError: c,
      helperText: l,
      footerContent: u,
      footerTone: d,
      ariaLabel: f,
      onChange: p,
      onBlur: m,
    } = e,
    h = d === void 0 ? `secondary` : d,
    g;
  t[0] !== n || t[1] !== r
    ? ((g = (0, $.jsx)(`label`, {
        htmlFor: n,
        className: `text-lg text-token-text-secondary`,
        children: r,
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = g))
    : (g = t[2]);
  let _;
  t[3] === l
    ? (_ = t[4])
    : ((_ = l
        ? (0, $.jsx)(`div`, {
            className: `text-sm leading-4 text-token-text-secondary`,
            children: l,
          })
        : null),
      (t[3] = l),
      (t[4] = _));
  let v;
  t[5] !== f ||
  t[6] !== s ||
  t[7] !== c ||
  t[8] !== n ||
  t[9] !== m ||
  t[10] !== p ||
  t[11] !== o ||
  t[12] !== i
    ? ((v = (0, $.jsx)(Je, {
        id: n,
        value: i,
        placeholder: o,
        disabled: s,
        hasError: c,
        ariaLabel: f,
        onBlur: m,
        onChange: p,
      })),
      (t[5] = f),
      (t[6] = s),
      (t[7] = c),
      (t[8] = n),
      (t[9] = m),
      (t[10] = p),
      (t[11] = o),
      (t[12] = i),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== u || t[15] !== h
    ? ((y =
        u == null
          ? null
          : (0, $.jsx)(`div`, {
              className: a(
                `text-sm`,
                h === `error`
                  ? `text-token-error-foreground`
                  : `text-token-text-secondary`,
              ),
              children: u,
            })),
      (t[14] = u),
      (t[15] = h),
      (t[16] = y))
    : (y = t[16]);
  let b;
  return (
    t[17] !== g || t[18] !== _ || t[19] !== v || t[20] !== y
      ? ((b = (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [g, _, v, y],
        })),
        (t[17] = g),
        (t[18] = _),
        (t[19] = v),
        (t[20] = y),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
function qe(e) {
  let t = (0, Y.c)(5),
    { intl: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = n.formatMessage({
        id: `settings.usage.autoTopUp.target.equivalent.loading`,
        defaultMessage: `Loading price`,
        description: `Accessible label announced while the auto top up price estimate is loading`,
      })),
      (t[0] = n),
      (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(_, {
        className: `icon-xxs text-token-description-foreground`,
      })),
      (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, $.jsx)(`span`, {
          role: `status`,
          "aria-label": r,
          className: `inline-flex items-center`,
          children: i,
        })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function Je(e) {
  let t = (0, Y.c)(12),
    {
      id: n,
      value: r,
      placeholder: i,
      disabled: o,
      hasError: s,
      ariaLabel: c,
      onChange: l,
      onBlur: u,
    } = e,
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = a(
        `bg-token-input-background text-token-text-primary placeholder:text-token-input-placeholder-foreground h-10 w-full rounded-lg border border-token-border px-3 text-left text-sm tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-token-focus`,
        `aria-invalid:border-token-error-foreground aria-invalid:ring-token-error-foreground/20`,
      )),
      (t[0] = d))
    : (d = t[0]);
  let f;
  t[1] === l
    ? (f = t[2])
    : ((f = (e) => {
        l(e.currentTarget.value);
      }),
      (t[1] = l),
      (t[2] = f));
  let p;
  return (
    t[3] !== c ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== n ||
    t[7] !== u ||
    t[8] !== i ||
    t[9] !== f ||
    t[10] !== r
      ? ((p = (0, $.jsx)(`input`, {
          id: n,
          value: r,
          placeholder: i,
          disabled: o,
          inputMode: `numeric`,
          pattern: `[0-9]*`,
          "aria-label": c,
          "aria-invalid": s,
          className: d,
          onChange: f,
          onBlur: u,
        })),
        (t[3] = c),
        (t[4] = o),
        (t[5] = s),
        (t[6] = n),
        (t[7] = u),
        (t[8] = i),
        (t[9] = f),
        (t[10] = r),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function Ye({ intl: e, creditDetails: t, pricingInfo: n }) {
  let r = e.formatMessage({
    id: `settings.usage.credit.remaining.unavailable`,
    defaultMessage: `Credit remaining unavailable`,
    description: `Fallback title shown when the remaining credit is unavailable`,
  });
  return t == null
    ? r
    : t.unlimited
      ? e.formatMessage({
          id: `settings.usage.credit.remaining.unlimited`,
          defaultMessage: `Unlimited credit`,
          description: `Title shown when the account has unlimited credit`,
        })
      : n == null
        ? r
        : (U({ intl: e, creditQuantity: Xe(t.balance), pricingInfo: n }) ?? r);
}
function Xe(e) {
  return Math.floor(Number(e ?? 0));
}
function Ze({
  intl: e,
  rechargeThreshold: t,
  rechargeTarget: n,
  pricingInfo: r,
}) {
  if (r == null) return null;
  let i = _e({ rechargeThreshold: t, rechargeTarget: n });
  return i == null
    ? null
    : {
        creditCount: i,
        amount: H({
          intl: e,
          amount: i * r.amountPerCredit,
          currencyCode: r.currencyCode,
          currencyFractionDigits: r.minorUnitExponent,
        }),
      };
}
function Qe({
  intl: e,
  creditBalance: t,
  rechargeThreshold: n,
  rechargeTarget: r,
  pricingInfo: i,
}) {
  if (i == null) return null;
  let a = Xe(t),
    o = Number(Z(n)),
    s = Number(Z(r));
  if (a >= o) return null;
  let c = Math.ceil(s - a);
  return c <= 0
    ? null
    : {
        amount: H({
          intl: e,
          amount: c * i.amountPerCredit,
          currencyCode: i.currencyCode,
          currencyFractionDigits: i.minorUnitExponent,
        }),
        creditCount: c,
      };
}
function $e({ rechargeThreshold: e, rechargeTarget: t }) {
  let n = me({ rechargeThreshold: e, rechargeTarget: t });
  if (!(n.rechargeThresholdError == null && n.rechargeTargetError == null))
    return {
      fields: {
        rechargeThreshold: n.rechargeThresholdError ?? void 0,
        rechargeTarget: n.rechargeTargetError ?? void 0,
      },
    };
}
function et(e) {
  if (e == null) return null;
  for (let t of e) if (nt(t)) return t;
  return null;
}
function tt(e) {
  if (e == null) return null;
  for (let t of e) if (rt(t)) return t;
  return null;
}
function nt(e) {
  return (
    e === `missing` ||
    e === `not-whole-number` ||
    e === `below-threshold-minimum`
  );
}
function rt(e) {
  return (
    e === `missing` ||
    e === `not-whole-number` ||
    e === `target-difference-too-small`
  );
}
function it(e) {
  if (e.fieldError == null) return null;
  switch (e.fieldName) {
    case `threshold`:
      return at(e.fieldError, e.intl);
    case `target`:
      return ot(e.fieldError, e.intl);
  }
}
function at(e, t) {
  switch (e) {
    case `missing`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.missing`,
        defaultMessage: `Enter a minimum balance (at least 125 credits).`,
        description: `Validation message when the auto top up threshold is empty`,
      });
    case `not-whole-number`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.wholeNumber`,
        defaultMessage: `Minimum balance must be a whole number.`,
        description: `Validation message when the auto top up threshold is not a whole number`,
      });
    case `below-threshold-minimum`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.threshold.error.minimum`,
        defaultMessage: `Set the minimum balance to at least 125 credits.`,
        description: `Validation message when the auto top up threshold is below the minimum allowed value`,
      });
  }
}
function ot(e, t) {
  switch (e) {
    case `missing`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.missing`,
        defaultMessage: `Enter a target balance.`,
        description: `Validation message when the auto top up target balance is empty`,
      });
    case `not-whole-number`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.wholeNumber`,
        defaultMessage: `Target balance must be a whole number.`,
        description: `Validation message when the auto top up target balance is not a whole number`,
      });
    case `target-difference-too-small`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.target.error.minimumDifference`,
        defaultMessage: `Set the target balance to at least 125 credits above the minimum balance.`,
        description: `Validation message when the auto top up target balance is too close to the minimum balance`,
      });
  }
}
function st(e, t) {
  switch (e) {
    case `enable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.enable.error`,
        defaultMessage: `Failed to enable auto reload`,
        description: `Toast shown when enabling auto top up fails`,
      });
    case `update`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.update.error`,
        defaultMessage: `Failed to update auto reload`,
        description: `Toast shown when updating auto top up fails`,
      });
    case `disable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.disable.error`,
        defaultMessage: `Failed to disable auto reload`,
        description: `Toast shown when disabling auto top up fails`,
      });
    case `none`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.save.error`,
        defaultMessage: `Failed to save auto reload settings`,
        description: `Fallback toast shown when saving auto top up settings fails`,
      });
  }
}
function ct(e, t) {
  switch (e) {
    case `enable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.enable.success`,
        defaultMessage: `Enabled auto reload`,
        description: `Toast shown when enabling auto top up succeeds`,
      });
    case `update`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.update.success`,
        defaultMessage: `Updated auto reload settings`,
        description: `Toast shown when updating auto top up succeeds`,
      });
    case `disable`:
      return t.formatMessage({
        id: `settings.usage.autoTopUp.disable.success`,
        defaultMessage: `Disabled auto reload`,
        description: `Toast shown when disabling auto top up succeeds`,
      });
  }
}
function lt(e) {
  return {
    recharge_threshold: Z(e.rechargeThreshold),
    recharge_target: Z(e.rechargeTarget),
  };
}
function ut(e) {
  let t = (0, Y.c)(17),
    { plan: n } = e,
    r = l(s),
    i = o(),
    a = P(n),
    u = a != null,
    d;
  t[0] === u ? (d = t[1]) : ((d = { enabled: u }), (t[0] = u), (t[1] = d));
  let { data: f } = ne(d),
    p = a != null,
    m;
  t[2] !== f || t[3] !== p
    ? ((m = { billingCurrency: f, enabled: p }),
      (t[2] = f),
      (t[3] = p),
      (t[4] = m))
    : (m = t[4]);
  let { data: h } = j(m);
  if (a == null) return null;
  let _ =
      h == null
        ? null
        : F({
            intl: i,
            amount: h.monthlyAmounts[a.pricePlan],
            currencyCode: h.currencyCode,
            minorUnitExponent: h.minorUnitExponent,
          }),
    v;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(c, {
          id: `settings.usage.plan.title`,
          defaultMessage: `Your plan`,
          description: `Title for the current plan section in usage settings`,
        }),
      })),
      (t[5] = v))
    : (v = t[5]);
  let y;
  t[6] === _
    ? (y = t[7])
    : ((y =
        _ == null
          ? null
          : (0, $.jsx)(`span`, {
              className: `text-token-text-secondary`,
              children: (0, $.jsx)(c, {
                id: `settings.usage.plan.price`,
                defaultMessage: `({price}/mo)`,
                description: `Localized monthly price next to the current plan name`,
                values: { price: _ },
              }),
            })),
      (t[6] = _),
      (t[7] = y));
  let b = a.cta === `upgrade` ? `primary` : `outline`,
    x;
  t[8] !== r || t[9] !== a.pricePlan
    ? ((x = () => {
        B(r, a.pricePlan, `usage_settings_plan_row`);
      }),
      (t[8] = r),
      (t[9] = a.pricePlan),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] === a.cta
    ? (S = t[12])
    : ((S =
        a.cta === `upgrade`
          ? (0, $.jsx)(c, {
              id: `settings.usage.plan.upgrade`,
              defaultMessage: `Upgrade plan`,
              description: `CTA to open the upgrade plan dialog`,
            })
          : (0, $.jsx)(c, {
              id: `settings.usage.plan.view`,
              defaultMessage: `View plans`,
              description: `CTA to open the plan selection dialog`,
            })),
      (t[11] = a.cta),
      (t[12] = S));
  let C;
  return (
    t[13] !== b || t[14] !== x || t[15] !== S
      ? ((C = (0, $.jsx)(g, {
          color: b,
          size: `toolbar`,
          onClick: x,
          children: S,
        })),
        (t[13] = b),
        (t[14] = x),
        (t[15] = S),
        (t[16] = C))
      : (C = t[16]),
    (0, $.jsxs)(J, {
      children: [
        v,
        (0, $.jsx)(J.Content, {
          children: (0, $.jsx)(q, {
            children: (0, $.jsx)(ue, {
              className: `gap-6`,
              label: (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [pt(a.displayPlan), y],
              }),
              description: mt(a.pricePlan),
              control: C,
            }),
          }),
        }),
      ],
    })
  );
}
function dt(e) {
  let t = (0, Y.c)(9),
    { plan: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = R(n)), (t[0] = n), (t[1] = r));
  let i;
  t[2] === r ? (i = t[3]) : ((i = { enabled: r }), (t[2] = r), (t[3] = i));
  let { data: a } = re(i);
  if (!R(n)) return null;
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(c, {
          id: `settings.usage.cancelPlan.title`,
          defaultMessage: `Cancel plan`,
          description: `Title for the cancel plan section in usage settings`,
        }),
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === a ? (s = t[6]) : ((s = O(a)), (t[5] = a), (t[6] = s));
  let l;
  return (
    t[7] === s
      ? (l = t[8])
      : ((l = (0, $.jsxs)(J, {
          children: [
            o,
            (0, $.jsx)(J.Content, {
              className: `text-sm text-token-text-secondary`,
              children: (0, $.jsx)(`p`, {
                children: (0, $.jsx)(ft, { platform: s }),
              }),
            }),
          ],
        })),
        (t[7] = s),
        (t[8] = l)),
    l
  );
}
function ft(e) {
  let t = (0, Y.c)(8),
    { platform: n } = e,
    r = n === `ios` ? k : n === `android` ? se : I,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (e) =>
        (0, $.jsx)(`a`, {
          className: `cursor-interaction text-token-text-link-foreground`,
          href: r,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: (e) => {
            (e.preventDefault(), ht(r));
          },
          children: e,
        })),
      (t[0] = r),
      (t[1] = i));
  let a = i;
  switch (n) {
    case null: {
      let e;
      return (
        t[2] === a
          ? (e = t[3])
          : ((e = (0, $.jsx)(c, {
              id: `settings.usage.cancelPlan.webDescription`,
              defaultMessage: `Your subscription is managed through ChatGPT. Go to <cancel>billing</cancel> to cancel your plan`,
              description: `Description shown when a ChatGPT-managed subscription can be canceled through web billing settings`,
              values: { cancel: a },
            })),
            (t[2] = a),
            (t[3] = e)),
        e
      );
    }
    case `ios`: {
      let e;
      return (
        t[4] === a
          ? (e = t[5])
          : ((e = (0, $.jsx)(c, {
              id: `settings.usage.cancelPlan.appleDescription`,
              defaultMessage: `Your subscription is managed through your Apple account. You'll need to <cancel>cancel via iOS</cancel>`,
              description: `Description shown when an Apple-managed subscription must be canceled through iOS`,
              values: { cancel: a },
            })),
            (t[4] = a),
            (t[5] = e)),
        e
      );
    }
    case `android`: {
      let e;
      return (
        t[6] === a
          ? (e = t[7])
          : ((e = (0, $.jsx)(c, {
              id: `settings.usage.cancelPlan.googlePlayDescription`,
              defaultMessage: `Your subscription is managed through your Google Play account. You'll need to <cancel>cancel via Android</cancel>`,
              description: `Description shown when a Google Play-managed subscription must be canceled through Android`,
              values: { cancel: a },
            })),
            (t[6] = a),
            (t[7] = e)),
        e
      );
    }
  }
}
function pt(e) {
  switch (e) {
    case `free`:
      return (0, $.jsx)(c, {
        id: `settings.usage.plan.free`,
        defaultMessage: `Free plan`,
        description: `Name of the Free plan in usage settings`,
      });
    case `go`:
      return (0, $.jsx)(c, {
        id: `settings.usage.plan.go`,
        defaultMessage: `Go plan`,
        description: `Name of the Go plan in usage settings`,
      });
    case `plus`:
      return (0, $.jsx)(c, {
        id: `settings.usage.plan.plus`,
        defaultMessage: `Plus plan`,
        description: `Name of the Plus plan in usage settings`,
      });
    case `pro`:
      return (0, $.jsx)(c, {
        id: `settings.usage.plan.pro`,
        defaultMessage: `Pro plan`,
        description: `Name of the Pro plan in usage settings`,
      });
  }
}
function mt(e) {
  switch (e) {
    case y.FREE:
      return (0, $.jsx)(c, {
        id: `settings.usage.plan.free.description`,
        defaultMessage: `Limited Codex usage, GPT-5.3`,
        description: `Description for the Free plan in usage settings`,
      });
    case y.GO:
      return (0, $.jsx)(c, {
        id: `settings.usage.plan.go.description`,
        defaultMessage: `Limited Codex usage, GPT-5.3`,
        description: `Description for the Go plan in usage settings`,
      });
    case y.PLUS:
      return (0, $.jsx)(c, {
        id: `settings.usage.plan.plus.description`,
        defaultMessage: `Expanded Codex usage, GPT-5.5 Thinking`,
        description: `Description for the Plus plan in usage settings`,
      });
    case y.PROLITE:
      return (0, $.jsx)(c, {
        id: `settings.usage.plan.proLite.description`,
        defaultMessage: `5x more usage than Plus, GPT-5.5 Pro`,
        description: `Description for the Pro 5x plan in usage settings`,
      });
    case y.PRO:
      return (0, $.jsx)(c, {
        id: `settings.usage.plan.pro.description`,
        defaultMessage: `20x more usage than Plus, GPT-5.5 Pro`,
        description: `Description for the Pro 20x plan in usage settings`,
      });
  }
}
function ht(e) {
  p.dispatchMessage(`open-in-browser`, { url: e });
}
var gt = `gpt-5.3-codex-spark`,
  _t = 300,
  vt = 30 * D,
  yt = `account_user_spend_controls`,
  bt = `account_user.credit_limits`;
function xt(e) {
  let t = (0, Y.c)(14),
    {
      rateLimitStatus: n,
      showEnterpriseMonthlyUsageLimit: r,
      canRequestEnterpriseMonthlyUsageLimit: i,
      workspaceMonthlyUsage: a,
      workspaceAdminRequests: o,
      isWorkspaceAdminRequestsLoading: s,
      isSavingWorkspaceAdminRequest: l,
      saveWorkspaceAdminRequest: u,
    } = e,
    d = r === void 0 ? !1 : r,
    f = i === void 0 ? !1 : i,
    p = a === void 0 ? null : a,
    m = o === void 0 ? null : o,
    h = s === void 0 ? !1 : s,
    g = l === void 0 ? !1 : l,
    _,
    v,
    y;
  if (
    t[0] !== f ||
    t[1] !== g ||
    t[2] !== h ||
    t[3] !== n ||
    t[4] !== u ||
    t[5] !== d ||
    t[6] !== m ||
    t[7] !== p
  ) {
    y = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = oe(n),
        t = Ot(e, null),
        r = d ? jt(p) : At({ rateLimitStatus: n, coreUsageLimitRows: t }),
        i = r == null ? t : t.filter(wt),
        a = Ot(e, gt),
        o = d && f,
        s = d && r == null && i.length === 0;
      if (r == null && i.length === 0 && a.length === 0 && !s && !o) {
        y = null;
        break bb0;
      }
      ((_ =
        r != null || i.length > 0 || s || o
          ? (0, $.jsxs)(J, {
              children: [
                (0, $.jsx)(J.Header, {
                  title: (0, $.jsx)(c, {
                    id: `settings.usage.limits.title`,
                    defaultMessage: `General usage limits`,
                    description: `Title for the usage limits section in usage settings`,
                  }),
                }),
                (0, $.jsxs)(J.Content, {
                  children: [
                    (0, $.jsxs)(q, {
                      children: [
                        r == null
                          ? null
                          : (0, $.jsx)(Et, { usageLimit: r }, r.key),
                        s
                          ? (0, $.jsx)(de, {
                              children: (0, $.jsx)(c, {
                                id: `settings.usage.limits.monthly.none`,
                                defaultMessage: `You don't currently have a monthly usage limit.`,
                                description: `Empty state shown when an enterprise user has no monthly usage limit`,
                              }),
                            })
                          : null,
                        i.map(Ct),
                      ],
                    }),
                    o
                      ? (0, $.jsx)(Tt, {
                          pendingRequest: Mt(m),
                          isLoading: h,
                          isSaving: g,
                          saveWorkspaceAdminRequest: u,
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null),
        (v =
          a.length > 0
            ? (0, $.jsxs)(J, {
                children: [
                  (0, $.jsx)(J.Header, {
                    title: (0, $.jsx)(c, {
                      id: `settings.usage.limits.spark.title`,
                      defaultMessage: `GPT-5.3-Codex-Spark usage limits`,
                      description: `Title for the GPT-5.3-Codex-Spark usage limits section`,
                    }),
                  }),
                  (0, $.jsx)(J.Content, {
                    children: (0, $.jsx)(q, { children: a.map(St) }),
                  }),
                ],
              })
            : null));
    }
    ((t[0] = f),
      (t[1] = g),
      (t[2] = h),
      (t[3] = n),
      (t[4] = u),
      (t[5] = d),
      (t[6] = m),
      (t[7] = p),
      (t[8] = _),
      (t[9] = v),
      (t[10] = y));
  } else ((_ = t[8]), (v = t[9]), (y = t[10]));
  if (y !== Symbol.for(`react.early_return_sentinel`)) return y;
  let b;
  return (
    t[11] !== _ || t[12] !== v
      ? ((b = (0, $.jsxs)($.Fragment, { children: [_, v] })),
        (t[11] = _),
        (t[12] = v),
        (t[13] = b))
      : (b = t[13]),
    b
  );
}
function St(e) {
  return (0, $.jsx)(Dt, { rateLimitRow: e }, e.key);
}
function Ct(e) {
  return (0, $.jsx)(Dt, { rateLimitRow: e }, e.key);
}
function wt(e) {
  return !Ft(e);
}
function Tt(e) {
  let t = (0, Y.c)(28),
    {
      pendingRequest: n,
      isLoading: r,
      isSaving: i,
      saveWorkspaceAdminRequest: a,
    } = e,
    u = l(s),
    d = o(),
    [f, p] = (0, X.useState)(!1),
    [m, _] = (0, X.useState)(n?.justification ?? ``),
    v;
  t[0] !== d || t[1] !== m || t[2] !== n || t[3] !== a || t[4] !== u
    ? ((v = () => {
        let e = m.trim();
        if (e.length === 0) {
          u.get(h).warning(
            d.formatMessage({
              id: `settings.usage.limits.requestMissingJustification`,
              defaultMessage: `Enter a justification to submit your request.`,
              description: `Toast shown when a workspace usage limit request is missing a justification`,
            }),
          );
          return;
        }
        a?.({ justification: e, requestId: n?.id })
          .then(() => {
            (u.get(h).success(
              d.formatMessage(
                n == null
                  ? {
                      id: `settings.usage.limits.requestSaved`,
                      defaultMessage: `Request submitted`,
                      description: `Toast shown when a workspace usage limit request is submitted`,
                    }
                  : {
                      id: `settings.usage.limits.requestUpdated`,
                      defaultMessage: `Request updated`,
                      description: `Toast shown when a workspace usage limit request is updated`,
                    },
              ),
            ),
              p(!1));
          })
          .catch(() => {
            u.get(h).danger(
              d.formatMessage({
                id: `settings.usage.limits.requestSaveError`,
                defaultMessage: `Could not save your request. Please try again.`,
                description: `Toast shown when a workspace usage limit request cannot be saved`,
              }),
            );
          });
      }),
      (t[0] = d),
      (t[1] = m),
      (t[2] = n),
      (t[3] = a),
      (t[4] = u),
      (t[5] = v))
    : (v = t[5]);
  let y = v,
    b;
  t[6] === n
    ? (b = t[7])
    : ((b =
        n == null
          ? null
          : (0, $.jsx)(`div`, {
              className: `text-sm text-token-text-secondary`,
              children: (0, $.jsx)(c, {
                id: `settings.usage.limits.requestPending`,
                defaultMessage: `Your request is pending admin review.`,
                description: `Status text for a pending workspace usage limit request`,
              }),
            })),
      (t[6] = n),
      (t[7] = b));
  let x = a == null,
    S;
  t[8] === n?.justification
    ? (S = t[9])
    : ((S = () => {
        (_(n?.justification ?? ``), p(!0));
      }),
      (t[8] = n?.justification),
      (t[9] = S));
  let C;
  t[10] === n
    ? (C = t[11])
    : ((C =
        n == null
          ? (0, $.jsx)(c, {
              id: `settings.usage.limits.requestIncrease`,
              defaultMessage: `Request limit increase`,
              description: `Button to request a workspace monthly usage limit increase`,
            })
          : (0, $.jsx)(c, {
              id: `settings.usage.limits.updatePendingRequest`,
              defaultMessage: `Update pending request`,
              description: `Button to update an existing pending workspace usage limit request`,
            })),
      (t[10] = n),
      (t[11] = C));
  let w;
  t[12] !== r || t[13] !== x || t[14] !== S || t[15] !== C
    ? ((w = (0, $.jsx)(g, {
        color: `primary`,
        size: `medium`,
        className: `self-start rounded-full`,
        loading: r,
        disabled: x,
        onClick: S,
        children: C,
      })),
      (t[12] = r),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] !== y ||
  t[18] !== d ||
  t[19] !== f ||
  t[20] !== i ||
  t[21] !== m ||
  t[22] !== n
    ? ((T = f
        ? (0, $.jsx)(q, {
            className: `mt-1 w-full`,
            children: (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-3 p-3`,
              children: [
                (0, $.jsxs)(`label`, {
                  className: `flex flex-col gap-1.5 text-sm font-medium text-token-text-primary`,
                  children: [
                    (0, $.jsx)(c, {
                      id: `settings.usage.limits.requestJustificationLabel`,
                      defaultMessage: `Justification`,
                      description: `Label for the workspace usage limit request justification`,
                    }),
                    (0, $.jsx)(`textarea`, {
                      value: m,
                      rows: 3,
                      placeholder: d.formatMessage({
                        id: `settings.usage.limits.requestJustificationPlaceholder`,
                        defaultMessage: `Tell your admin why you need more credits.`,
                        description: `Placeholder for the workspace usage limit request justification`,
                      }),
                      className: `min-h-20 resize-none rounded-md border border-token-border bg-token-input-background px-3 py-2 text-sm leading-5 text-token-text-primary outline-none placeholder:text-token-text-tertiary focus:border-token-border-heavy`,
                      onChange: (e) => {
                        _(e.target.value);
                      },
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex justify-end gap-2`,
                  children: [
                    (0, $.jsx)(g, {
                      color: `secondary`,
                      size: `default`,
                      onClick: () => {
                        p(!1);
                      },
                      children: (0, $.jsx)(c, {
                        id: `settings.usage.limits.requestCancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button for the workspace usage limit request form`,
                      }),
                    }),
                    (0, $.jsx)(g, {
                      color: `primary`,
                      size: `default`,
                      loading: i,
                      onClick: y,
                      children:
                        n == null
                          ? (0, $.jsx)(c, {
                              id: `settings.usage.limits.requestSave`,
                              defaultMessage: `Submit request`,
                              description: `Submit button for a workspace usage limit request`,
                            })
                          : (0, $.jsx)(c, {
                              id: `settings.usage.limits.requestUpdate`,
                              defaultMessage: `Update request`,
                              description: `Submit button for updating a pending workspace usage limit request`,
                            }),
                    }),
                  ],
                }),
              ],
            }),
          })
        : null),
      (t[17] = y),
      (t[18] = d),
      (t[19] = f),
      (t[20] = i),
      (t[21] = m),
      (t[22] = n),
      (t[23] = T))
    : (T = t[23]);
  let E;
  return (
    t[24] !== b || t[25] !== w || t[26] !== T
      ? ((E = (0, $.jsxs)(`div`, {
          className: `mt-2 flex flex-col items-start gap-2`,
          children: [b, w, T],
        })),
        (t[24] = b),
        (t[25] = w),
        (t[26] = T),
        (t[27] = E))
      : (E = t[27]),
    E
  );
}
function Et(e) {
  let t = (0, Y.c)(46),
    { usageLimit: n } = e,
    r = o(),
    i;
  t[0] === n.usedPercent
    ? (i = t[1])
    : ((i = zt(n.usedPercent)), (t[0] = n.usedPercent), (t[1] = i));
  let a = i,
    s,
    l,
    u,
    d,
    f,
    p,
    m;
  if (
    t[2] !== r ||
    t[3] !== n.limitCredits ||
    t[4] !== n.remainingPercent ||
    t[5] !== n.resetAt ||
    t[6] !== n.usedCredits
  ) {
    let e = zt(n.remainingPercent),
      i;
    if (t[14] !== n.resetAt) {
      let e = A(n.resetAt);
      ((i = e == null ? null : N(e)), (t[14] = n.resetAt), (t[15] = i));
    } else i = t[15];
    let a = i,
      o;
    (t[16] !== r || t[17] !== n.limitCredits || t[18] !== n.usedCredits
      ? ((o =
          n.usedCredits == null || n.limitCredits == null
            ? null
            : r.formatMessage(
                {
                  id: `settings.usage.limits.monthly.creditsUsed`,
                  defaultMessage: `{used} of {limit} credits used`,
                  description: `Usage summary for monthly usage limit credits that have been used`,
                },
                { used: Lt(r, n.usedCredits), limit: Lt(r, n.limitCredits) },
              )),
        (t[16] = r),
        (t[17] = n.limitCredits),
        (t[18] = n.usedCredits),
        (t[19] = o))
      : (o = t[19]),
      (m = o));
    let h;
    (t[20] === a
      ? (h = t[21])
      : ((h =
          a == null
            ? null
            : (0, $.jsx)(c, {
                id: `settings.usage.limits.window.resetAt`,
                defaultMessage: `Resets {time}`,
                description: `Description showing when a usage limit window resets`,
                values: { time: a },
              })),
        (t[20] = a),
        (t[21] = h)),
      (s = h),
      (p = `p-4`),
      (d = `flex items-center justify-between gap-4`),
      t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((f = (0, $.jsx)(`div`, {
            className: `text-sm font-semibold text-token-text-primary`,
            children: (0, $.jsx)(c, {
              id: `settings.usage.limits.monthly.label`,
              defaultMessage: `Monthly usage limit`,
              description: `Label for a monthly usage limit row`,
            }),
          })),
          (t[22] = f))
        : (f = t[22]),
      (l = `shrink-0 text-sm text-token-text-secondary tabular-nums`),
      (u = r.formatMessage(
        {
          id: `settings.usage.limits.monthly.progress.remaining`,
          defaultMessage: `{remaining}% remaining`,
          description: `Remaining percentage shown next to usage progress`,
        },
        { remaining: r.formatNumber(e, { maximumFractionDigits: 0 }) },
      )),
      (t[2] = r),
      (t[3] = n.limitCredits),
      (t[4] = n.remainingPercent),
      (t[5] = n.resetAt),
      (t[6] = n.usedCredits),
      (t[7] = s),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m));
  } else
    ((s = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]));
  let h;
  t[23] !== l || t[24] !== u
    ? ((h = (0, $.jsx)(`div`, { className: l, children: u })),
      (t[23] = l),
      (t[24] = u),
      (t[25] = h))
    : (h = t[25]);
  let g;
  t[26] !== d || t[27] !== f || t[28] !== h
    ? ((g = (0, $.jsxs)(`div`, { className: d, children: [f, h] })),
      (t[26] = d),
      (t[27] = f),
      (t[28] = h),
      (t[29] = g))
    : (g = t[29]);
  let _;
  t[30] === r
    ? (_ = t[31])
    : ((_ = r.formatMessage({
        id: `settings.usage.limits.monthly.progress.ariaLabel`,
        defaultMessage: `Monthly usage used`,
        description: `Aria label for monthly usage limit progress`,
      })),
      (t[30] = r),
      (t[31] = _));
  let v = `${a}%`,
    y;
  t[32] === v
    ? (y = t[33])
    : ((y = (0, $.jsx)(`div`, {
        className: `bg-[#0285FF]`,
        style: { width: v },
      })),
      (t[32] = v),
      (t[33] = y));
  let b;
  t[34] !== y || t[35] !== _ || t[36] !== a
    ? ((b = (0, $.jsx)(`div`, {
        role: `progressbar`,
        "aria-label": _,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": a,
        className: `mt-4 flex h-2 overflow-hidden rounded-full bg-[#DFDFDF]`,
        children: y,
      })),
      (t[34] = y),
      (t[35] = _),
      (t[36] = a),
      (t[37] = b))
    : (b = t[37]);
  let x;
  t[38] !== s || t[39] !== m
    ? ((x =
        m != null || s != null
          ? (0, $.jsxs)(`div`, {
              className: `mt-5 flex items-center justify-between gap-3`,
              children: [
                (0, $.jsx)(`div`, {
                  className: `text-xs text-token-text-tertiary`,
                  children: m,
                }),
                (0, $.jsx)(`div`, {
                  className: `shrink-0 text-end text-xs text-token-text-tertiary`,
                  children: s,
                }),
              ],
            })
          : null),
      (t[38] = s),
      (t[39] = m),
      (t[40] = x))
    : (x = t[40]);
  let S;
  return (
    t[41] !== b || t[42] !== x || t[43] !== p || t[44] !== g
      ? ((S = (0, $.jsxs)(`div`, { className: p, children: [g, b, x] })),
        (t[41] = b),
        (t[42] = x),
        (t[43] = p),
        (t[44] = g),
        (t[45] = S))
      : (S = t[45]),
    S
  );
}
function Dt(e) {
  let t = (0, Y.c)(14),
    { rateLimitRow: n } = e,
    r;
  if (t[0] !== n.bucket.resetsAt) {
    let e = A(n.bucket.resetsAt ?? null);
    ((r = e == null ? null : N(e)), (t[0] = n.bucket.resetsAt), (t[1] = r));
  } else r = t[1];
  let i = r,
    a;
  t[2] === i
    ? (a = t[3])
    : ((a =
        i == null
          ? null
          : (0, $.jsx)(c, {
              id: `settings.usage.limits.window.resetAt`,
              defaultMessage: `Resets {time}`,
              description: `Description showing when a usage limit window resets`,
              values: { time: i },
            })),
      (t[2] = i),
      (t[3] = a));
  let o = a,
    s = n.bucket.usedPercent ?? 0,
    l;
  t[4] === s ? (l = t[5]) : ((l = V(s)), (t[4] = s), (t[5] = l));
  let u = l,
    d;
  t[6] === n ? (d = t[7]) : ((d = kt(n)), (t[6] = n), (t[7] = d));
  let f;
  t[8] === u
    ? (f = t[9])
    : ((f = (0, $.jsx)(Rt, { remainingPercent: u })), (t[8] = u), (t[9] = f));
  let p;
  return (
    t[10] !== o || t[11] !== d || t[12] !== f
      ? ((p = (0, $.jsx)(ue, {
          className: `gap-6`,
          label: d,
          description: o,
          control: f,
        })),
        (t[10] = o),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function Ot(e, t) {
  let n = t == null ? (e.find((e) => e.limitName == null) ?? null) : ae(e, t);
  return n == null ? [] : W({ entry: n, keyPrefix: t ?? `core` });
}
function kt(e) {
  let t = e.bucket.windowDurationMins ?? 0;
  return Ft(e)
    ? (0, $.jsx)(c, {
        id: `settings.usage.limits.monthly.label`,
        defaultMessage: `Monthly usage limit`,
        description: `Label for a monthly usage limit row`,
      })
    : It(t, _t)
      ? (0, $.jsx)(c, {
          id: `settings.usage.limits.fiveHour.label`,
          defaultMessage: `5 hour usage limit`,
          description: `Label for the 5-hour usage limit row`,
        })
      : It(t, 10080)
        ? (0, $.jsx)(c, {
            id: `settings.usage.limits.week.label`,
            defaultMessage: `Weekly usage limit`,
            description: `Label for a weekly usage limit row`,
          })
        : It(t, 1440)
          ? (0, $.jsx)(c, {
              id: `settings.usage.limits.day.label`,
              defaultMessage: `Daily usage limit`,
              description: `Label for a daily usage limit row`,
            })
          : (0, $.jsx)(c, {
              id: `settings.usage.limits.genericWindow.label`,
              defaultMessage: `Usage limit`,
              description: `Generic label for a usage limit row`,
            });
}
function At({ rateLimitStatus: e, coreUsageLimitRows: t }) {
  let n = e?.spend_control?.individual_limit ?? null;
  if (n != null)
    return {
      key: `spend-control-monthly`,
      usedPercent: n.used_percent,
      remainingPercent: n.remaining_percent,
      resetAt: n.reset_at,
      usedCredits: n.used,
      limitCredits: n.limit,
    };
  let r = t.find(Ft) ?? null;
  if (r == null) return null;
  let i = r.bucket.usedPercent ?? 0;
  return {
    key: r.key,
    usedPercent: i,
    remainingPercent: V(i),
    resetAt: r.bucket.resetsAt ?? null,
    usedCredits: null,
    limitCredits: null,
  };
}
function jt(e) {
  let t = e?.effective_monthly_limit?.limit ?? null,
    n = e?.current_month_usage ?? null;
  if (t == null || n == null || t < 0) return null;
  let r = t === 0 ? 100 : zt((n / t) * 100);
  return {
    key: `workspace-monthly`,
    usedPercent: r,
    remainingPercent: zt(100 - r),
    resetAt: null,
    usedCredits: String(n),
    limitCredits: String(t),
  };
}
function Mt(e) {
  return e?.items.find((e) => e.status === `pending` && Nt(e) != null) ?? null;
}
function Nt(e) {
  return e.payloads.find(Pt) ?? null;
}
function Pt(e) {
  return (
    e.kind === `spend_limit` &&
    e.target.source === yt &&
    e.target.source_id === bt
  );
}
function Ft(e) {
  return It(e.bucket.windowDurationMins ?? 0, vt);
}
function It(e, t) {
  return !Number.isFinite(e) || e <= 0 ? !1 : Math.abs(e - t) <= t * 0.05;
}
function Lt(e, t) {
  let n = Number(t);
  return Number.isFinite(n)
    ? e.formatNumber(Math.max(n, 0), {
        minimumFractionDigits: 0,
        maximumFractionDigits: n >= 10 ? 0 : 2,
      })
    : t;
}
function Rt(e) {
  let t = (0, Y.c)(16),
    { remainingPercent: n } = e,
    r = o(),
    i;
  t[0] === n ? (i = t[1]) : ((i = zt(n)), (t[0] = n), (t[1] = i));
  let s = i,
    c;
  t[2] === r
    ? (c = t[3])
    : ((c = r.formatMessage({
        id: `settings.usage.limits.progress.ariaLabel`,
        defaultMessage: `Usage remaining`,
        description: `Aria label for usage remaining progress bars`,
      })),
      (t[2] = r),
      (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = a(
        `h-1.5 w-24 overflow-hidden rounded-full [&::-webkit-progress-bar]:bg-token-foreground/10 [&::-webkit-progress-value]:bg-token-foreground [&::-moz-progress-bar]:bg-token-foreground`,
        `[&::-ms-fill]:bg-token-foreground`,
      )),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== s || t[6] !== c
    ? ((u = (0, $.jsx)(`progress`, {
        max: 100,
        value: s,
        "aria-label": c,
        className: l,
      })),
      (t[5] = s),
      (t[6] = c),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] !== s || t[9] !== r
    ? ((d = r.formatMessage(
        {
          id: `settings.usage.limits.progress.remaining`,
          defaultMessage: `{remaining}% left`,
          description: `Remaining percentage shown next to usage progress`,
        },
        { remaining: r.formatNumber(s, { maximumFractionDigits: 0 }) },
      )),
      (t[8] = s),
      (t[9] = r),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] === d
    ? (f = t[12])
    : ((f = (0, $.jsx)(`span`, {
        className: `w-[72px] text-right text-sm text-token-text-secondary tabular-nums`,
        children: d,
      })),
      (t[11] = d),
      (t[12] = f));
  let p;
  return (
    t[13] !== u || t[14] !== f
      ? ((p = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [u, f],
        })),
        (t[13] = u),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function zt(e) {
  return Number.isFinite(e) ? Math.max(0, Math.min(100, e)) : 0;
}
function Bt() {
  let e = (0, Y.c)(55),
    {
      canManageCreditSettings: t,
      isUsageSettingsVisible: r,
      isUsageSettingsAccessLoading: i,
      plan: a,
    } = pe(),
    o;
  e[0] === a ? (o = e[1]) : ((o = v(a)), (e[0] = a), (e[1] = o));
  let s = o,
    l = s && r && !i,
    { data: d, isLoading: f, isError: p, refetch: m } = u(n),
    h;
  e[2] === t ? (h = e[3]) : ((h = { enabled: t }), (e[2] = t), (e[3] = h));
  let { data: _, isLoading: y, isError: b, refetch: x } = z(h),
    S;
  e[4] === l ? (S = e[5]) : ((S = { enabled: l }), (e[4] = l), (e[5] = S));
  let { data: C, isLoading: w, isError: T, refetch: E } = te(S),
    D =
      C?.effective_monthly_limit?.limit != null &&
      C.effective_monthly_limit.limit >= 0,
    O = l && D,
    k;
  e[6] === O ? (k = e[7]) : ((k = { enabled: O }), (e[6] = O), (e[7] = k));
  let { data: ee, isLoading: A, isError: j, refetch: N } = ie(k),
    P = L(),
    {
      enableAutoTopUpMutation: F,
      updateAutoTopUpMutation: I,
      disableAutoTopUpMutation: ne,
    } = M(),
    re;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, $.jsx)(K, { slug: `usage` })), (e[8] = re))
    : (re = e[8]);
  let R = re;
  if (!r && !i) return null;
  let ae = !r && i,
    oe = s
      ? (w && C == null) || (D && A && ee == null)
      : (t && y && _ == null) || (f && d == null),
    se = s
      ? (T && C == null) || (D && j && ee == null)
      : (t && b && _ == null) || (p && d == null);
  if (ae || se || oe) {
    let n,
      r = null;
    if (ae) {
      let t;
      (e[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(c, {
            id: `settings.usage.access.loading`,
            defaultMessage: `Checking subscription…`,
            description: `Loading label while checking whether Usage settings should be visible`,
          })),
          (e[9] = t))
        : (t = e[9]),
        (n = t));
    } else if (se) {
      let i;
      (e[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, $.jsx)(c, {
            id: `settings.usage.load.error`,
            defaultMessage: `Could not load usage settings.`,
            description: `Error label shown when usage settings cannot be fetched`,
          })),
          (e[10] = i))
        : (i = e[10]),
        (n = i));
      let a;
      e[11] !== t ||
      e[12] !== D ||
      e[13] !== s ||
      e[14] !== x ||
      e[15] !== m ||
      e[16] !== N ||
      e[17] !== E
        ? ((a = () => {
            Promise.all(s ? (D ? [E(), N()] : [E()]) : t ? [x(), m()] : [m()]);
          }),
          (e[11] = t),
          (e[12] = D),
          (e[13] = s),
          (e[14] = x),
          (e[15] = m),
          (e[16] = N),
          (e[17] = E),
          (e[18] = a))
        : (a = e[18]);
      let o;
      e[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((o = (0, $.jsx)(c, {
            id: `settings.usage.load.retry`,
            defaultMessage: `Retry`,
            description: `Retry button for usage settings fetch errors`,
          })),
          (e[19] = o))
        : (o = e[19]);
      let l;
      (e[20] === a
        ? (l = e[21])
        : ((l = (0, $.jsx)(g, {
            color: `secondary`,
            size: `toolbar`,
            onClick: a,
            children: o,
          })),
          (e[20] = a),
          (e[21] = l)),
        (r = l));
    } else {
      let t;
      (e[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(c, {
            id: `settings.usage.load.loading`,
            defaultMessage: `Loading usage settings…`,
            description: `Loading label while usage settings are being fetched`,
          })),
          (e[22] = t))
        : (t = e[22]),
        (n = t));
    }
    let i;
    return (
      e[23] !== r || e[24] !== n
        ? ((i = (0, $.jsx)(Ut, { title: R, rowLabel: n, rowControl: r })),
          (e[23] = r),
          (e[24] = n),
          (e[25] = i))
        : (i = e[25]),
      i
    );
  }
  if (t && _ == null) return null;
  if (s) {
    let t, n;
    e[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(c, {
          id: `settings.usage.enterprise.title`,
          defaultMessage: `Usage limits`,
          description: `Title for enterprise usage limits settings`,
        })),
        (n = (0, $.jsx)(c, {
          id: `settings.usage.enterprise.subtitle`,
          defaultMessage: `See your usage within the limits defined by your administrator.`,
          description: `Subtitle for enterprise usage limits settings`,
        })),
        (e[26] = t),
        (e[27] = n))
      : ((t = e[26]), (n = e[27]));
    let r = d ?? null,
      i = C ?? null,
      a = ee ?? null,
      o;
    return (
      e[28] !== D ||
      e[29] !== A ||
      e[30] !== a ||
      e[31] !== r ||
      e[32] !== i ||
      e[33] !== P.isPending ||
      e[34] !== P.mutateAsync
        ? ((o = (0, $.jsx)(le, {
            title: t,
            subtitle: n,
            subtitleClassName: `whitespace-normal`,
            titleStackClassName: `gap-2 pb-1`,
            children: (0, $.jsx)(xt, {
              rateLimitStatus: r,
              showEnterpriseMonthlyUsageLimit: !0,
              canRequestEnterpriseMonthlyUsageLimit: D,
              workspaceMonthlyUsage: i,
              workspaceAdminRequests: a,
              isWorkspaceAdminRequestsLoading: A,
              isSavingWorkspaceAdminRequest: P.isPending,
              saveWorkspaceAdminRequest: P.mutateAsync,
            }),
          })),
          (e[28] = D),
          (e[29] = A),
          (e[30] = a),
          (e[31] = r),
          (e[32] = i),
          (e[33] = P.isPending),
          (e[34] = P.mutateAsync),
          (e[35] = o))
        : (o = e[35]),
      o
    );
  }
  let B;
  e[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsx)(Vt, {})), (e[36] = B))
    : (B = e[36]);
  let V;
  e[37] === a
    ? (V = e[38])
    : ((V = (0, $.jsx)(ut, { plan: a })), (e[37] = a), (e[38] = V));
  let H;
  e[39] !== _ ||
  e[40] !== t ||
  e[41] !== ne ||
  e[42] !== F ||
  e[43] !== d?.credits ||
  e[44] !== I
    ? ((H =
        t && _ != null
          ? (0, $.jsx)(De, {
              serverState: _,
              creditDetails: d?.credits ?? null,
              enableAutoTopUpMutation: F,
              updateAutoTopUpMutation: I,
              disableAutoTopUpMutation: ne,
            })
          : null),
      (e[39] = _),
      (e[40] = t),
      (e[41] = ne),
      (e[42] = F),
      (e[43] = d?.credits),
      (e[44] = I),
      (e[45] = H))
    : (H = e[45]);
  let ce = d ?? null,
    U;
  e[46] === ce
    ? (U = e[47])
    : ((U = (0, $.jsx)(xt, { rateLimitStatus: ce })),
      (e[46] = ce),
      (e[47] = U));
  let W;
  e[48] === a
    ? (W = e[49])
    : ((W = (0, $.jsx)(dt, { plan: a })), (e[48] = a), (e[49] = W));
  let G;
  return (
    e[50] !== U || e[51] !== W || e[52] !== V || e[53] !== H
      ? ((G = (0, $.jsxs)(le, {
          title: R,
          subtitle: B,
          subtitleClassName: `whitespace-normal`,
          titleStackClassName: `gap-2 pb-1`,
          children: [V, H, U, W],
        })),
        (e[50] = U),
        (e[51] = W),
        (e[52] = V),
        (e[53] = H),
        (e[54] = G))
      : (G = e[54]),
    G
  );
}
function Vt() {
  let e = (0, Y.c)(1),
    t = Ht,
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(c, {
          id: `settings.usage.subtitle`,
          defaultMessage: `To view invoices, change your payment method, and take other actions, visit <settings>settings</settings> on Web`,
          description: `Subtitle pointing users to ChatGPT billing settings for broader billing actions`,
          values: {
            settings: (e) =>
              (0, $.jsx)(`a`, {
                className: `inline-flex cursor-interaction text-token-text-link-foreground`,
                href: I,
                target: `_blank`,
                rel: `noreferrer`,
                onClick: t,
                children: e,
              }),
          },
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
function Ht(e) {
  (e.preventDefault(), p.dispatchMessage(`open-in-browser`, { url: I }));
}
function Ut(e) {
  let t = (0, Y.c)(6),
    { title: n, rowLabel: r, rowControl: i } = e,
    a;
  t[0] !== i || t[1] !== r
    ? ((a = (0, $.jsx)(J, {
        children: (0, $.jsx)(J.Content, {
          children: (0, $.jsx)(q, {
            children: (0, $.jsx)(ue, {
              className: `gap-6`,
              label: r,
              control: i,
            }),
          }),
        }),
      })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== a || t[4] !== n
      ? ((o = (0, $.jsx)(le, { title: n, children: a })),
        (t[3] = a),
        (t[4] = n),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
export { Bt as UsageSettings };
//# sourceMappingURL=usage-settings.js.map
