import { s as e } from "./chunk-Bj-mKKzh.js";
import { O as t, Si as n } from "./src-C.js";
import {
  $s as r,
  Di as i,
  Ps as a,
  ec as o,
  fo as s,
  po as c,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as l, t as u } from "./jsx-runtime.js";
import { t as d } from "./clsx-BcPLHiun.js";
import {
  G as f,
  S as p,
  U as m,
  X as h,
  Y as g,
  Z as _,
  a as v,
  at as y,
  i as b,
  p as x,
  rt as S,
  wt as C,
  y as w,
} from "./setting-storage.js";
import { f as T, m as E } from "./chunk-LFPYN7LY.js";
import { t as D } from "./product-logger-DusapRyT.js";
import { c as O, d as k, o as A } from "./statsig--EYRNU53.js";
import { t as j } from "./request-DWZTrEAr.js";
import { r as M } from "./remote-connection-visibility.js";
import { t as N } from "./use-auth.js";
import { p as P } from "./codex-api-bK--r_2t.js";
import { o as F } from "./apps-queries-CmwRqoKz.js";
import { n as I, r as L } from "./experimental-features-queries.js";
import { t as R } from "./use-model-settings-BGTYyORt.js";
import { t as ee } from "./button.js";
import { n as te } from "./model-queries-CVdTsyPv.js";
import { n as ne } from "./use-webview-execution-target.js";
import { h as re, r as ie, t as z } from "./onboarding-state.js";
import { t as ae } from "./use-service-tier-settings.js";
import { t as B } from "./x-C_RDKBp5.js";
import { t as V } from "./skus-JiYadAsS.js";
import { t as oe } from "./use-platform.js";
import {
  r as H,
  t as se,
} from "./ambient-suggestions-connected-apps-consent.js";
import { t as ce } from "./app-intl-signal.js";
import { t as U } from "./with-window.js";
import { t as le } from "./use-is-remote-host-DScyzh-e.js";
import { n as ue, t as de } from "./use-fast-mode-personalized-estimate.js";
import { i as fe, t as pe } from "./use-is-fast-mode-enabled.js";
import { t as me } from "./lightning-bolt.js";
import { t as he } from "./badge.js";
import { t as W } from "./remote-connections-onboarding-signals-DC4B63E5.js";
import { t as ge } from "./globe-CnvlclXd.js";
import { t as _e } from "./face.js";
import { t as ve } from "./use-is-background-subagents-enabled-B.js";
import { t as ye } from "./use-active-conversation-id.js";
import { t as be } from "./app-DWO4dx-p.js";
import { t as xe } from "./banner.js";
var G = C(),
  K = u();
function q(e) {
  let t = (0, G.c)(13),
    { action: n } = e,
    r = n.icon,
    i = n.color ?? `primary`,
    a = n.size ?? `composerSm`,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = r ? (0, K.jsx)(r, { className: `icon-xs` }) : null),
      (t[0] = r),
      (t[1] = o));
  let s;
  return (
    t[2] !== n.ariaLabel ||
    t[3] !== n.className ||
    t[4] !== n.disabled ||
    t[5] !== n.label ||
    t[6] !== n.loading ||
    t[7] !== n.onClick ||
    t[8] !== n.uniform ||
    t[9] !== i ||
    t[10] !== a ||
    t[11] !== o
      ? ((s = (0, K.jsxs)(ee, {
          "aria-label": n.ariaLabel,
          className: n.className,
          color: i,
          disabled: n.disabled,
          loading: n.loading,
          onClick: n.onClick,
          size: a,
          uniform: n.uniform,
          children: [o, n.label],
        })),
        (t[2] = n.ariaLabel),
        (t[3] = n.className),
        (t[4] = n.disabled),
        (t[5] = n.label),
        (t[6] = n.loading),
        (t[7] = n.onClick),
        (t[8] = n.uniform),
        (t[9] = i),
        (t[10] = a),
        (t[11] = o),
        (t[12] = s))
      : (s = t[12]),
    s
  );
}
function J(e) {
  let t = (0, G.c)(51),
    {
      actionsClassName: n,
      actionsPlacement: r,
      badge: i,
      bodyClassName: a,
      className: o,
      description: s,
      dismissAction: c,
      leadingClassName: l,
      leadingVisual: u,
      primaryAction: f,
      secondaryAction: p,
      title: m,
    } = e,
    h = r === void 0 ? `aside` : r,
    g = f != null || p != null || c != null,
    _;
  t[0] !== n || t[1] !== h || t[2] !== c || t[3] !== f || t[4] !== p
    ? ((_ = (e) =>
        (0, K.jsxs)(`div`, {
          className: d(
            `flex items-center gap-2`,
            h === `body` || h === `bodyOnNarrow`
              ? `mt-3 justify-start`
              : `self-center max-[400px]:w-full max-[400px]:justify-center max-[400px]:self-stretch`,
            n,
            e,
          ),
          children: [
            p ? (0, K.jsx)(q, { action: p }) : null,
            f ? (0, K.jsx)(q, { action: f }) : null,
            c ? (0, K.jsx)(q, { action: c }) : null,
          ],
        })),
      (t[0] = n),
      (t[1] = h),
      (t[2] = c),
      (t[3] = f),
      (t[4] = p),
      (t[5] = _))
    : (_ = t[5]);
  let v = _,
    y;
  t[6] !== h || t[7] !== g || t[8] !== v
    ? ((y = g && h === `body` ? v() : null),
      (t[6] = h),
      (t[7] = g),
      (t[8] = v),
      (t[9] = y))
    : (y = t[9]);
  let b = y,
    x;
  t[10] !== h || t[11] !== g || t[12] !== v
    ? ((x = g && h === `bodyOnNarrow` ? v(`hidden max-[400px]:flex`) : null),
      (t[10] = h),
      (t[11] = g),
      (t[12] = v),
      (t[13] = x))
    : (x = t[13]);
  let S = x,
    C;
  t[14] !== h || t[15] !== g || t[16] !== v
    ? ((C = g && h === `aside` ? v() : null),
      (t[14] = h),
      (t[15] = g),
      (t[16] = v),
      (t[17] = C))
    : (C = t[17]);
  let w = C,
    T;
  t[18] !== h || t[19] !== g || t[20] !== v
    ? ((T = g && h === `bodyOnNarrow` ? v(`max-[400px]:hidden`) : null),
      (t[18] = h),
      (t[19] = g),
      (t[20] = v),
      (t[21] = T))
    : (T = t[21]);
  let E = T,
    D;
  t[22] === o
    ? (D = t[23])
    : ((D = d(
        `!rounded-3xl border-token-border/50 bg-token-input-background/70 px-3 py-3 pr-3 text-sm dark:!border-token-border/50`,
        o,
      )),
      (t[22] = o),
      (t[23] = D));
  let O;
  t[24] !== l || t[25] !== u
    ? ((O = u
        ? (0, K.jsx)(`div`, {
            className: d(
              `text-token-text-secondary ml-1 flex h-6 w-6 shrink-0 items-center justify-center self-center`,
              l,
            ),
            children: u,
          })
        : null),
      (t[24] = l),
      (t[25] = u),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] === m
    ? (k = t[28])
    : ((k = (0, K.jsx)(`div`, {
        className: `min-w-0 text-base font-medium text-token-text-primary`,
        children: m,
      })),
      (t[27] = m),
      (t[28] = k));
  let A;
  t[29] === i
    ? (A = t[30])
    : ((A = i
        ? (0, K.jsx)(he, {
            className: `border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary`,
            children: i,
          })
        : null),
      (t[29] = i),
      (t[30] = A));
  let j;
  t[31] !== A || t[32] !== k
    ? ((j = (0, K.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: [k, A],
      })),
      (t[31] = A),
      (t[32] = k),
      (t[33] = j))
    : (j = t[33]);
  let M;
  t[34] === a
    ? (M = t[35])
    : ((M = d(
        `text-token-text-secondary mt-0.5 text-base leading-relaxed text-pretty`,
        a,
      )),
      (t[34] = a),
      (t[35] = M));
  let N;
  t[36] !== s || t[37] !== M
    ? ((N = (0, K.jsx)(`div`, { className: M, children: s })),
      (t[36] = s),
      (t[37] = M),
      (t[38] = N))
    : (N = t[38]);
  let P;
  t[39] !== b || t[40] !== S || t[41] !== j || t[42] !== N
    ? ((P = (0, K.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [j, N, b, S],
      })),
      (t[39] = b),
      (t[40] = S),
      (t[41] = j),
      (t[42] = N),
      (t[43] = P))
    : (P = t[43]);
  let F;
  t[44] !== P || t[45] !== O
    ? ((F = (0, K.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2 max-[400px]:items-start`,
        children: [O, P],
      })),
      (t[44] = P),
      (t[45] = O),
      (t[46] = F))
    : (F = t[46]);
  let I = w ?? E ?? void 0,
    L;
  return (
    t[47] !== F || t[48] !== I || t[49] !== D
      ? ((L = (0, K.jsx)(xe, {
          layout: `horizontal`,
          stackOnNarrow: !0,
          className: D,
          content: F,
          customCtas: I,
        })),
        (t[47] = F),
        (t[48] = I),
        (t[49] = D),
        (t[50] = L))
      : (L = t[50]),
    L
  );
}
function Se(e) {
  let t = (0, G.c)(12),
    { onDismiss: n, onDisable: r } = e,
    i,
    a,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, K.jsx)(m, {
        id: `home.ambientSuggestions.connectedAppsConsent.title`,
        defaultMessage: `Personalize Codex`,
        description: `Title for the ambient suggestions connected apps home banner`,
      })),
      (a = (0, K.jsx)(m, {
        id: `home.ambientSuggestions.connectedAppsConsent.body`,
        defaultMessage: `Codex suggests what to do next by searching project files and connected apps`,
        description: `Body for the ambient suggestions connected apps home banner`,
      })),
      (o = (0, K.jsx)(_e, { className: `icon-sm` })),
      (s = (0, K.jsx)(m, {
        id: `home.ambientSuggestions.connectedAppsConsent.disable`,
        defaultMessage: `Disable`,
        description: `Button label for disabling ambient suggestions from the home banner`,
      })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s))
    : ((i = t[0]), (a = t[1]), (o = t[2]), (s = t[3]));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = {
        label: s,
        onClick: r,
        color: `ghost`,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[4] = r),
      (t[5] = c));
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, K.jsx)(m, {
        id: `home.ambientSuggestions.connectedAppsConsent.ok`,
        defaultMessage: `OK`,
        description: `Button label for accepting the ambient suggestions connected apps home banner`,
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === n
    ? (u = t[8])
    : ((u = {
        label: l,
        onClick: n,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[7] = n),
      (t[8] = u));
  let d;
  return (
    t[9] !== c || t[10] !== u
      ? ((d = (0, K.jsx)(J, {
          title: i,
          description: a,
          leadingVisual: o,
          secondaryAction: c,
          primaryAction: u,
        })),
        (t[9] = c),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Ce() {
  let e = (0, G.c)(13),
    r = h(p),
    { authMethod: i, email: a, isLoading: o, planAtLogin: s } = N(),
    l = i === `chatgpt`,
    u;
  e[0] === l
    ? (u = e[1])
    : ((u = { queryConfig: { enabled: l } }), (e[0] = l), (e[1] = u));
  let { data: d, isLoading: f } = x(`account-info`, u),
    m = _(H),
    g = m != null,
    y = A(`2425897452`),
    S = k(),
    C = v(t.enabled),
    w = n({ authMethod: i, email: d?.email ?? a, plan: d?.plan ?? s }),
    T = y && w && C === !0 && m === !1,
    { data: E, isLoading: D } = F({ enabled: T, hostId: c }),
    O;
  e[2] === E
    ? (O = e[3])
    : ((O = E === void 0 ? [] : E), (e[2] = E), (e[3] = O));
  let j = O,
    M;
  e[4] === j ? (M = e[5]) : ((M = se(j)), (e[4] = j), (e[5] = M));
  let P = we({
      hasConnectedApps: M.length > 0,
      isLoadingApps: D,
      isLoadingEligibilityInputs: o || !g || S || f,
      shouldLoadApps: T,
    }),
    I,
    L;
  e[6] === r
    ? ((I = e[7]), (L = e[8]))
    : ((I = () => {
        r.set(H, !0);
      }),
      (L = () => {
        (r.set(H, !0), b(r, t.enabled, !1));
      }),
      (e[6] = r),
      (e[7] = I),
      (e[8] = L));
  let R;
  return (
    e[9] !== I || e[10] !== L || e[11] !== P
      ? ((R = { ...P, onDismiss: I, onDisable: L }),
        (e[9] = I),
        (e[10] = L),
        (e[11] = P),
        (e[12] = R))
      : (R = e[12]),
    R
  );
}
function we({
  hasConnectedApps: e,
  isLoadingApps: t,
  isLoadingEligibilityInputs: n,
  shouldLoadApps: r,
}) {
  let i = n || (r && t);
  return { isEligible: !i && r && e, isLoading: i };
}
var Y = e(l(), 1),
  Te = y(p, null),
  X = y(p, !1),
  Ee = y(p, () => new Set()),
  De = y(p, () => new Set()),
  Oe = y(p, null),
  ke = S(p, ({ get: e }) => {
    let t = e(Te);
    return {
      queryKey: [`codex-app-home-beacon`, t, e(ce).locale],
      enabled: e(X),
      refetchOnMount: !1,
      refetchOnReconnect: !1,
      refetchOnWindowFocus: !1,
      retry: !1,
      staleTime: 6e4,
      queryFn: async () => ({
        accountId: t,
        response: await j.safeGet(`/beacons/home`, {
          additionalHeaders: { "Cache-Control": `no-store` },
          parameters: { query: { product: `codex` } },
        }),
      }),
      select: Me,
    };
  });
function Ae({ actionId: e, beaconId: t }) {
  return `${t}:${e}`;
}
function je(e) {
  let t = e.beacon_ui_response;
  return t?.ui_info.type === `beacon_banner_info`
    ? { ...t, ui_info: t.ui_info }
    : null;
}
function Me({ accountId: e, response: t }) {
  return t.beacon_ui_response == null
    ? { accountId: e, beacon: null, shouldKeepLastServedBeacon: !0 }
    : { accountId: e, beacon: je(t), shouldKeepLastServedBeacon: !1 };
}
function Ne(e) {
  let t = Pe(e.action_v2);
  return t != null && Fe(t) ? t : null;
}
function Pe(e) {
  return `url` in e && e.url != null
    ? e.url
    : `web_url` in e && e.web_url != null
      ? e.web_url
      : null;
}
function Fe(e) {
  return (
    e.startsWith(`http://`) ||
    e.startsWith(`https://`) ||
    (e.startsWith(`/`) && !e.startsWith(`//`))
  );
}
function Ie({ accountId: e, authMethod: t, isAuthLoading: n }) {
  return !n && t === `chatgpt` && e != null;
}
function Le({ isAuthLoading: e }) {
  return e;
}
async function Z(e, t, n) {
  try {
    await j.safePost(`/beacons/event`, {
      requestBody:
        n == null
          ? { beacon_id: e.beacon_id, event_type: t }
          : { beacon_id: e.beacon_id, event_type: t, event_cta_id: n },
    });
  } catch {}
}
function Q(e, t) {
  return `${e}:${t}`;
}
function Re(e, t, n) {
  let r = Q(t, n.beacon_id);
  e.get(Ee).has(r) ||
    (e.set(Ee, (e) => {
      let t = new Set(e);
      return (t.add(r), t);
    }),
    Z(n, `view`));
}
function ze(e, t, n) {
  let r = Q(t, n.beacon_id);
  (e.set(De, (e) => {
    let t = new Set(e);
    return (t.add(r), t);
  }),
    Z(n, `dismiss`));
}
function Be() {
  let e = (0, G.c)(30),
    t = h(p),
    { accountId: n, authMethod: r, isLoading: i, userId: a } = N(),
    { data: o } = P(),
    s = O(),
    c = _(De),
    l = _(ke),
    u = _(X),
    d = _(Oe),
    f,
    m;
  if (
    e[0] !== n ||
    e[1] !== r ||
    e[2] !== o?.id ||
    e[3] !== i ||
    e[4] !== s ||
    e[5] !== a
  ) {
    let t = s.getContext().user?.customIDs?.account_id;
    ((f = n ?? o?.id ?? t ?? a ?? null),
      (m = Ie({ accountId: f, authMethod: r, isAuthLoading: i })),
      (e[0] = n),
      (e[1] = r),
      (e[2] = o?.id),
      (e[3] = i),
      (e[4] = s),
      (e[5] = a),
      (e[6] = f),
      (e[7] = m));
  } else ((f = e[6]), (m = e[7]));
  let g = m,
    v;
  e[8] === i
    ? (v = e[9])
    : ((v = Le({ isAuthLoading: i })), (e[8] = i), (e[9] = v));
  let y = v,
    b,
    x;
  (e[10] !== f || e[11] !== t || e[12] !== g
    ? ((b = () => {
        (t.set(Te, f), t.set(X, g));
      }),
      (x = [f, t, g]),
      (e[10] = f),
      (e[11] = t),
      (e[12] = g),
      (e[13] = b),
      (e[14] = x))
    : ((b = e[13]), (x = e[14])),
    (0, Y.useLayoutEffect)(b, x));
  let S, C;
  (e[15] !== l.data || e[16] !== t
    ? ((S = () => {
        l.data?.accountId != null &&
          l.data.beacon != null &&
          t.set(Oe, { accountId: l.data.accountId, beacon: l.data.beacon });
      }),
      (C = [l.data, t]),
      (e[15] = l.data),
      (e[16] = t),
      (e[17] = S),
      (e[18] = C))
    : ((S = e[17]), (C = e[18])),
    (0, Y.useLayoutEffect)(S, C));
  let w =
      l.data?.accountId === f
        ? (l.data.beacon ??
          (l.data.shouldKeepLastServedBeacon && d?.accountId === f
            ? d.beacon
            : null))
        : null,
    T;
  if (e[19] !== c || e[20] !== w || e[21] !== f || e[22] !== g) {
    let t = w != null && f != null ? Q(f, w.beacon_id) : null;
    ((T = g && w != null && t != null && !c.has(t) ? w : null),
      (e[19] = c),
      (e[20] = w),
      (e[21] = f),
      (e[22] = g),
      (e[23] = T));
  } else T = e[23];
  let E = T,
    D = y || E != null,
    k = E != null,
    A = y || (g && (!u || l.isLoading)),
    j;
  return (
    e[24] !== E || e[25] !== f || e[26] !== D || e[27] !== k || e[28] !== A
      ? ((j = {
          accountId: f,
          beacon: E,
          isEligible: k,
          isLoading: A,
          shouldSuppressVanillaPromos: D,
        }),
        (e[24] = E),
        (e[25] = f),
        (e[26] = D),
        (e[27] = k),
        (e[28] = A),
        (e[29] = j))
      : (j = e[29]),
    j
  );
}
function Ve(e) {
  let t = (0, G.c)(13),
    { accountId: n, beacon: r, localActionHandlers: i } = e,
    a = h(p),
    o,
    s;
  (t[0] !== n || t[1] !== r || t[2] !== a
    ? ((o = () => {
        Re(a, n, r);
      }),
      (s = [n, r, a]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s))
    : ((o = t[3]), (s = t[4])),
    (0, Y.useEffect)(o, s));
  let c;
  t[5] !== n || t[6] !== r || t[7] !== a
    ? ((c = () => {
        ze(a, n, r);
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== r || t[10] !== i || t[11] !== c
      ? ((l = (0, K.jsx)(He, {
          beacon: r,
          localActionHandlers: i,
          onDismiss: c,
        })),
        (t[9] = r),
        (t[10] = i),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function He(e) {
  let t = (0, G.c)(26),
    { beacon: n, localActionHandlers: r, onDismiss: i } = e,
    a = f(),
    o = E(),
    s,
    c,
    l,
    u,
    d,
    p,
    m;
  if (t[0] !== n || t[1] !== r || t[2] !== o) {
    let e = n.action_items.find(We),
      i = n.action_items.find(Ue),
      a = (e) => {
        if (e == null || e.text == null) return;
        let t = r?.[Ae({ actionId: e.id, beaconId: n.beacon_id })],
          i = Ne(e);
        if (!(i == null && t == null))
          return {
            label: e.text,
            onClick: () => {
              if (
                (Z(n, `click`, e.id),
                t?.({ action: e, beacon: n }) !== !0 && i != null)
              ) {
                if (!i.startsWith(`/`)) {
                  w.dispatchMessage(`open-in-browser`, { url: i });
                  return;
                }
                o(i);
              }
            },
            className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
          };
      };
    ((s = J),
      (c = n.ui_info.title),
      (l = n.ui_info.description),
      t[10] === n.ui_info.icon_image_url
        ? (u = t[11])
        : ((u = n.ui_info.icon_image_url
            ? (0, K.jsx)(`img`, {
                alt: ``,
                src: n.ui_info.icon_image_url,
                className: `h-8 w-8 shrink-0`,
              })
            : void 0),
          (t[10] = n.ui_info.icon_image_url),
          (t[11] = u)),
      (d = `ml-0 h-8 w-8`),
      (p = a(e)),
      (m = a(i)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m));
  } else
    ((s = t[3]),
      (c = t[4]),
      (l = t[5]),
      (u = t[6]),
      (d = t[7]),
      (p = t[8]),
      (m = t[9]));
  let h;
  t[12] === a
    ? (h = t[13])
    : ((h = a.formatMessage({
        id: `codexAppHomeBeaconAnnouncement.dismiss`,
        defaultMessage: `Dismiss Codex beacon banner`,
        description: `Accessible label for dismissing the backend-driven Codex app home banner`,
      })),
      (t[12] = a),
      (t[13] = h));
  let g;
  t[14] !== i || t[15] !== h
    ? ((g = {
        ariaLabel: h,
        color: `ghost`,
        icon: B,
        onClick: i,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[14] = i),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== s ||
    t[18] !== c ||
    t[19] !== l ||
    t[20] !== u ||
    t[21] !== d ||
    t[22] !== p ||
    t[23] !== m ||
    t[24] !== g
      ? ((_ = (0, K.jsx)(s, {
          title: c,
          description: l,
          leadingVisual: u,
          leadingClassName: d,
          primaryAction: p,
          secondaryAction: m,
          dismissAction: g,
        })),
        (t[17] = s),
        (t[18] = c),
        (t[19] = l),
        (t[20] = u),
        (t[21] = d),
        (t[22] = p),
        (t[23] = m),
        (t[24] = g),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
function Ue(e) {
  return e.type === `secondary`;
}
function We(e) {
  return e.type == null || e.type === `primary`;
}
function Ge(e) {
  let t = (0, G.c)(16),
    { message: n, setHasSeenAppUpsellBanner: r } = e,
    i = f(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, K.jsx)(m, {
        id: `codex.appUpsellBanner.title`,
        defaultMessage: `Codex app`,
        description: `Title shown in the app upsell banner`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, K.jsx)(`img`, {
        alt: ``,
        src: be,
        className: `h-8 w-8 shrink-0`,
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, K.jsx)(m, {
        id: `codex.appUpsellBanner.download`,
        defaultMessage: `Download`,
        description: `Primary action label to download the Codex app`,
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r
    ? (c = t[4])
    : ((c = {
        label: s,
        onClick: () => {
          (r(!0),
            w.dispatchMessage(`open-in-browser`, {
              url: `https://persistent.oaistatic.com/codex-app-prod/Codex.dmg`,
            }));
        },
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[3] = r),
      (t[4] = c));
  let l;
  t[5] === i
    ? (l = t[6])
    : ((l = i.formatMessage({
        id: `codex.appUpsellBanner.dismissLabel`,
        defaultMessage: `Dismiss Codex app banner`,
        description: `Accessible label for dismissing the Codex app upsell banner`,
      })),
      (t[5] = i),
      (t[6] = l));
  let u;
  t[7] === r
    ? (u = t[8])
    : ((u = () => {
        r(!0);
      }),
      (t[7] = r),
      (t[8] = u));
  let d;
  t[9] !== l || t[10] !== u
    ? ((d = {
        ariaLabel: l,
        color: `ghost`,
        icon: B,
        onClick: u,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let p;
  return (
    t[12] !== n || t[13] !== c || t[14] !== d
      ? ((p = (0, K.jsx)(J, {
          title: a,
          description: n,
          leadingVisual: o,
          leadingClassName: `ml-0 h-8 w-8`,
          primaryAction: c,
          dismissAction: d,
        })),
        (t[12] = n),
        (t[13] = c),
        (t[14] = d),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
var Ke = a(`has-seen-app-upsell-banner`, !1);
function qe(e) {
  let t = (0, G.c)(6),
    { platform: n, isLoading: r } = oe(),
    { authMethod: i, planAtLogin: a, isLoading: o } = N(),
    s = i === `chatgpt`,
    c = i === `apikey`,
    l = s || c,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = { queryConfig: { enabled: l } }), (t[0] = l), (t[1] = u));
  let { data: d, isLoading: f } = x(`account-info`, u),
    p = i === `copilot`,
    h = n === `macOS`,
    g = d?.plan ?? a,
    _ = g === V.FREE || g === V.GO,
    v = !e && (o || r || (s && f)),
    y = null;
  if (!v && h && !e && !p && i && d && ((s && !_) || c)) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(m, {
          id: `codex.appUpsellBanner.cbpApi.message`,
          defaultMessage: `Build faster with the Codex app. Download now or {learnMoreLink}`,
          description: `Message shown in the app upsell banner for paid ChatGPT and API key users`,
          values: {
            learnMoreLink: (0, K.jsx)(`a`, {
              className: `text-token-link focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none`,
              href: `https://chatgpt.com/codex`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              children: (0, K.jsx)(m, {
                id: `codex.appUpsellBanner.learnMoreLowercase`,
                defaultMessage: `learn more`,
                description: `Lowercase learn more link text in the app upsell banner`,
              }),
            }),
          },
        })),
        (t[2] = e))
      : (e = t[2]),
      (y = e));
  }
  let b;
  return (
    t[3] !== v || t[4] !== y
      ? ((b = { isLoading: v, message: y }), (t[3] = v), (t[4] = y), (t[5] = b))
      : (b = t[5]),
    b
  );
}
function Je() {
  let e = (0, G.c)(5),
    [t, n] = r(Ke),
    { isLoading: i, message: a } = qe(t),
    o = a != null,
    s;
  return (
    e[0] !== i || e[1] !== a || e[2] !== n || e[3] !== o
      ? ((s = {
          isEligible: o,
          isLoading: i,
          message: a,
          setHasSeenAppUpsellBanner: n,
        }),
        (e[0] = i),
        (e[1] = a),
        (e[2] = n),
        (e[3] = o),
        (e[4] = s))
      : (s = e[4]),
    s
  );
}
function Ye(e) {
  let t = (0, G.c)(27),
    {
      content: n,
      fastModeModel: r,
      intl: a,
      isSubmitting: o,
      modelSettings: s,
      setHasSeenFastModeHomeBanner: c,
      setIsSubmitting: l,
      setModelAndReasoningEffort: u,
      setServiceTier: d,
    } = e,
    f = h(p),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, K.jsx)(m, {
        id: `codex.fastModeHomeBanner.title`,
        defaultMessage: `Enable Fast mode`,
        description: `Title shown in the Fast mode home banner`,
      })),
      (t[0] = g))
    : (g = t[0]);
  let _, v;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, K.jsx)(me, { className: `icon-sm text-[#FFC93C]` })),
      (v = (0, K.jsx)(m, {
        id: `codex.fastModeHomeBanner.cta.primary`,
        defaultMessage: `Enable now`,
        description: `Primary CTA shown in the Fast mode home banner`,
      })),
      (t[1] = _),
      (t[2] = v))
    : ((_ = t[1]), (v = t[2]));
  let y;
  t[3] !== r ||
  t[4] !== s ||
  t[5] !== f ||
  t[6] !== c ||
  t[7] !== l ||
  t[8] !== u ||
  t[9] !== d
    ? ((y = () => {
        if (r == null) return;
        (l(!0), D(f, { eventName: `codex_fast_mode_banner_cta_clicked` }));
        let e =
          s.model === r.model
            ? Promise.resolve()
            : u(r.model, s.reasoningEffort);
        Promise.all([d(i(r)?.id ?? `priority`, `home_banner`), e]).finally(
          () => {
            (c(!0), l(!1));
          },
        );
      }),
      (t[3] = r),
      (t[4] = s),
      (t[5] = f),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = y))
    : (y = t[10]);
  let b;
  t[11] !== o || t[12] !== y
    ? ((b = {
        label: v,
        onClick: y,
        disabled: o,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[11] = o),
      (t[12] = y),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] === a
    ? (x = t[15])
    : ((x = a.formatMessage({
        id: `codex.fastModeHomeBanner.dismissLabel`,
        defaultMessage: `Dismiss Fast mode banner`,
        description: `Accessible label for dismissing the Fast mode home banner`,
      })),
      (t[14] = a),
      (t[15] = x));
  let S;
  t[16] !== f || t[17] !== c
    ? ((S = () => {
        (D(f, { eventName: `codex_fast_mode_banner_dismissed` }), c(!0));
      }),
      (t[16] = f),
      (t[17] = c),
      (t[18] = S))
    : (S = t[18]);
  let C;
  t[19] !== o || t[20] !== x || t[21] !== S
    ? ((C = {
        ariaLabel: x,
        color: `ghost`,
        icon: B,
        onClick: S,
        disabled: o,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[19] = o),
      (t[20] = x),
      (t[21] = S),
      (t[22] = C))
    : (C = t[22]);
  let w;
  return (
    t[23] !== n || t[24] !== b || t[25] !== C
      ? ((w = (0, K.jsx)(J, {
          title: g,
          description: n,
          leadingVisual: _,
          primaryAction: b,
          dismissAction: C,
        })),
        (t[23] = n),
        (t[24] = b),
        (t[25] = C),
        (t[26] = w))
      : (w = t[26]),
    w
  );
}
var Xe = a(`has-seen-fast-mode-home-banner`, !1);
function Ze() {
  let e = (0, G.c)(19),
    t = h(p),
    n = f(),
    i = pe(),
    { data: a } = te(),
    [o, s] = r(Xe),
    { modelSettings: c, setModelAndReasoningEffort: l } = R(),
    { serviceTierSettings: u, setServiceTier: d } = ae(),
    [g, _] = (0, Y.useState)(!1),
    v = (0, Y.useRef)(!1),
    y = a?.models,
    b;
  e[0] === y ? (b = e[1]) : ((b = fe(y)), (e[0] = y), (e[1] = b));
  let x = b,
    S = i && x != null && !o && u.effectiveServiceTier == null && !u.isLoading,
    { estimate: C, estimateStatus: w } = ue(S),
    T = !o && S && w !== `ready` && w !== `failed`,
    E = S && w === `ready` && C != null,
    O,
    k;
  (e[2] !== E || e[3] !== t
    ? ((O = () => {
        !E ||
          v.current ||
          ((v.current = !0),
          D(t, { eventName: `codex_fast_mode_banner_viewed` }));
      }),
      (k = [t, E]),
      (e[2] = E),
      (e[3] = t),
      (e[4] = O),
      (e[5] = k))
    : ((O = e[4]), (k = e[5])),
    (0, Y.useEffect)(O, k));
  let A;
  e[6] === C
    ? (A = e[7])
    : ((A =
        C == null
          ? null
          : (0, K.jsx)(m, {
              ...de.bodyPersonalized,
              values: {
                threadCountLabel: C.threadCountLabel,
                duration: C.savedDuration,
              },
            })),
      (e[6] = C),
      (e[7] = A));
  let j = A,
    M;
  return (
    e[8] !== j ||
    e[9] !== x ||
    e[10] !== n ||
    e[11] !== E ||
    e[12] !== T ||
    e[13] !== g ||
    e[14] !== c ||
    e[15] !== s ||
    e[16] !== l ||
    e[17] !== d
      ? ((M = {
          content: j,
          intl: n,
          isEligible: E,
          isLoading: T,
          isSubmitting: g,
          fastModeModel: x,
          modelSettings: c,
          setHasSeenFastModeHomeBanner: s,
          setIsSubmitting: _,
          setModelAndReasoningEffort: l,
          setServiceTier: d,
        }),
        (e[8] = j),
        (e[9] = x),
        (e[10] = n),
        (e[11] = E),
        (e[12] = T),
        (e[13] = g),
        (e[14] = c),
        (e[15] = s),
        (e[16] = l),
        (e[17] = d),
        (e[18] = M))
      : (M = e[18]),
    M
  );
}
var Qe = (e) =>
    (0, K.jsxs)(`svg`, {
      width: 28,
      height: 28,
      viewBox: `0 0 28 28`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, K.jsx)(`path`, {
          d: `M13.8875 14.6895C17.2961 14.853 20.1743 17.5201 20.1743 20.4947C20.1743 20.9923 19.7708 21.3958 19.2732 21.3958C18.7755 21.3958 18.3721 20.9923 18.3721 20.4947C18.3721 18.6736 16.4459 16.6172 13.8134 16.4905L13.5567 16.4839C10.7939 16.4839 8.74141 18.6169 8.74141 20.4947C8.74139 20.9923 8.33792 21.3958 7.84028 21.3958C7.34264 21.3958 6.93917 20.9923 6.93914 20.4947C6.93914 17.4267 10.0053 14.6816 13.5567 14.6816L13.8875 14.6895Z`,
          fill: `currentColor`,
        }),
        (0, K.jsx)(`path`, {
          d: `M5.41872 15.0296C5.72112 15.0467 6.0168 15.0882 6.30266 15.1527C6.78787 15.2622 7.09341 15.7445 6.98413 16.2298C6.87471 16.7152 6.39104 17.0205 5.90568 16.9113C5.71567 16.8685 5.51926 16.8393 5.31816 16.8279L5.11438 16.8226C3.18178 16.8226 1.80227 18.3144 1.80227 19.5419C1.80217 20.0394 1.39858 20.4429 0.901136 20.443C0.403544 20.443 0.00010128 20.0395 0 19.5419C0 17.1243 2.39317 15.0203 5.11438 15.0204L5.41872 15.0296Z`,
          fill: `currentColor`,
        }),
        (0, K.jsx)(`path`, {
          d: `M21.9925 15.0204C24.7137 15.0203 27.1069 17.1243 27.1069 19.5419C27.1067 20.0395 26.7033 20.443 26.2057 20.443C25.7083 20.4429 25.3047 20.0394 25.3046 19.5419C25.3046 18.3144 23.9251 16.8226 21.9925 16.8226L21.7887 16.8279C21.5876 16.8393 21.3912 16.8685 21.2012 16.9113C20.7158 17.0205 20.2321 16.7152 20.1227 16.2298C20.0134 15.7445 20.319 15.2622 20.8042 15.1527C21.09 15.0882 21.3857 15.0467 21.6881 15.0296L21.9925 15.0204Z`,
          fill: `currentColor`,
        }),
        (0, K.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M4.64727 6.86514C6.58541 6.86514 8.15639 8.4363 8.15654 10.3744C8.15639 12.3125 6.58541 13.8837 4.64727 13.8837C2.70925 13.8835 1.13814 12.3124 1.138 10.3744C1.13814 8.43639 2.70924 6.86528 4.64727 6.86514ZM4.64727 8.66741C3.70455 8.66755 2.94041 9.43169 2.94027 10.3744C2.94041 11.3171 3.70455 12.0813 4.64727 12.0814C5.5901 12.0814 6.35412 11.3172 6.35426 10.3744C6.35412 9.43161 5.5901 8.66741 4.64727 8.66741Z`,
          fill: `currentColor`,
        }),
        (0, K.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M22.4596 6.86514C24.3976 6.86528 25.9687 8.43639 25.9689 10.3744C25.9687 12.3124 24.3976 13.8835 22.4596 13.8837C20.5214 13.8837 18.9505 12.3125 18.9503 10.3744C18.9505 8.4363 20.5214 6.86514 22.4596 6.86514ZM22.4596 8.66741C21.5167 8.66741 20.7527 9.43161 20.7526 10.3744C20.7527 11.3172 21.5167 12.0814 22.4596 12.0814C23.4023 12.0813 24.1664 11.3171 24.1666 10.3744C24.1664 9.43169 23.4023 8.66755 22.4596 8.66741Z`,
          fill: `currentColor`,
        }),
        (0, K.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M13.5567 5.87402C15.7382 5.87402 17.5066 7.64249 17.5066 9.82394C17.5066 12.0054 15.7382 13.7738 13.5567 13.7738C11.3753 13.7738 9.60682 12.0054 9.60682 9.82394C9.60682 7.64249 11.3753 5.87402 13.5567 5.87402ZM13.5567 7.67629C12.3706 7.67629 11.4091 8.6378 11.4091 9.82394C11.4091 11.0101 12.3706 11.9716 13.5567 11.9716C14.7429 11.9716 15.7044 11.0101 15.7044 9.82394C15.7044 8.6378 14.7429 7.6763 13.5567 7.67629Z`,
          fill: `currentColor`,
        }),
      ],
    }),
  $e = `multi_agent`,
  et = a(`has-seen-multi-agent-composer-banner`, !1);
function tt() {
  let e = (0, G.c)(5),
    { hostId: t } = ne(ye()),
    n = ve(),
    [i] = r(et),
    { data: a, isLoading: o } = g(I, t),
    s;
  e[0] === a ? (s = e[1]) : ((s = a?.some(nt) ?? !1), (e[0] = a), (e[1] = s));
  let c = s,
    l = n && !i && o,
    u = n && !i && !c,
    d;
  return (
    e[2] !== l || e[3] !== u
      ? ((d = { isEligible: u, isLoading: l }),
        (e[2] = l),
        (e[3] = u),
        (e[4] = d))
      : (d = e[4]),
    d
  );
}
function nt(e) {
  return e.name === $e && e.enabled;
}
var rt = `multi_agent`;
function it(e) {
  let t = (0, G.c)(31),
    { onTryNow: n } = e,
    i = h(p),
    a = f(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { hostId: c }), (t[0] = o))
    : (o = t[0]);
  let l = L(o),
    [, u] = s(`composer_prefill`),
    [d, g] = r(et),
    [_, v] = (0, Y.useState)(!1),
    y = (0, Y.useRef)(!1),
    b = !d,
    x,
    S;
  if (
    (t[1] !== b || t[2] !== i
      ? ((x = () => {
          !b ||
            y.current ||
            ((y.current = !0),
            D(i, { eventName: `codex_multi_agent_banner_viewed` }));
        }),
        (S = [i, b]),
        (t[1] = b),
        (t[2] = i),
        (t[3] = x),
        (t[4] = S))
      : ((x = t[3]), (S = t[4])),
    (0, Y.useEffect)(x, S),
    !b)
  )
    return null;
  let C, w, T, E;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, K.jsx)(m, {
        id: `codex.multiAgentComposerBanner.title`,
        defaultMessage: `Subagents in Codex`,
        description: `Title shown in the multi-agent composer banner`,
      })),
      (w = (0, K.jsx)(m, {
        id: `codex.multiAgentComposerBanner.body`,
        defaultMessage: `Delegate work to subagents that work in parallel. Note: may increase token usage.`,
        description: `Body shown in the multi-agent composer banner`,
      })),
      (T = (0, K.jsx)(Qe, { className: `icon-sm` })),
      (E = (0, K.jsx)(m, {
        id: `codex.multiAgentComposerBanner.cta.primary`,
        defaultMessage: `Try now`,
        description: `Primary CTA shown in the multi-agent composer banner`,
      })),
      (t[5] = C),
      (t[6] = w),
      (t[7] = T),
      (t[8] = E))
    : ((C = t[5]), (w = t[6]), (T = t[7]), (E = t[8]));
  let O;
  t[9] !== a ||
  t[10] !== n ||
  t[11] !== i ||
  t[12] !== u ||
  t[13] !== l ||
  t[14] !== g
    ? ((O = () => {
        v(!0);
        let e = a.formatMessage({
          id: `composer.multiAgentBanner.tryNow.prompt`,
          defaultMessage: `Spawn a subagent to explore this repo.`,
          description: `Prompt inserted when the user clicks Try now on the multi-agent composer banner`,
        });
        (D(i, {
          eventName: `codex_multi_agent_banner_cta_clicked`,
          metadata: { action: `try_now` },
        }),
          l.mutateAsync({ featureName: rt, enabled: !0 }).finally(() => {
            (n ? n() : u({ text: e }), g(!0), v(!1));
          }));
      }),
      (t[9] = a),
      (t[10] = n),
      (t[11] = i),
      (t[12] = u),
      (t[13] = l),
      (t[14] = g),
      (t[15] = O))
    : (O = t[15]);
  let k;
  t[16] !== _ || t[17] !== O
    ? ((k = {
        label: E,
        onClick: O,
        disabled: _,
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[16] = _),
      (t[17] = O),
      (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] === a
    ? (A = t[20])
    : ((A = a.formatMessage({
        id: `codex.multiAgentComposerBanner.dismissLabel`,
        defaultMessage: `Dismiss subagent banner`,
        description: `Accessible label for dismissing the multi-agent composer banner`,
      })),
      (t[19] = a),
      (t[20] = A));
  let j;
  t[21] !== i || t[22] !== g
    ? ((j = () => {
        (D(i, { eventName: `codex_multi_agent_banner_dismissed` }), g(!0));
      }),
      (t[21] = i),
      (t[22] = g),
      (t[23] = j))
    : (j = t[23]);
  let M;
  t[24] !== _ || t[25] !== A || t[26] !== j
    ? ((M = {
        ariaLabel: A,
        color: `ghost`,
        icon: B,
        onClick: j,
        disabled: _,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[24] = _),
      (t[25] = A),
      (t[26] = j),
      (t[27] = M))
    : (M = t[27]);
  let N;
  return (
    t[28] !== M || t[29] !== k
      ? ((N = (0, K.jsx)(J, {
          title: C,
          description: w,
          leadingVisual: T,
          primaryAction: k,
          dismissAction: M,
        })),
        (t[28] = M),
        (t[29] = k),
        (t[30] = N))
      : (N = t[30]),
    N
  );
}
function at(e) {
  for (let [t, n] of e.entries()) {
    if (n.isEligible) return t;
    if (n.isLoading) return;
  }
  return null;
}
function $({ entries: e }) {
  let t = (0, Y.useRef)(void 0),
    n = t.current;
  if (n === void 0) {
    let r = at(e);
    r !== void 0 && ((t.current = r), (n = r));
  }
  if (n == null) return null;
  let r = e[n];
  return r == null || r.isLoading || !r.isEligible ? null : r.content;
}
function ot(e) {
  let t = (0, G.c)(17),
    { navigate: n } = e,
    r = h(p),
    i = f(),
    a,
    o,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, K.jsx)(m, {
        id: `remoteConnections.homeBanner.title`,
        defaultMessage: `Let Codex work while you’re away`,
        description: `Title shown in the remote connections banner above the home composer`,
      })),
      (o = (0, K.jsx)(m, {
        id: `remoteConnections.homeBanner.body`,
        defaultMessage: `Run your chats on a remote machine and pick back up when you return`,
        description: `Body shown in the remote connections banner above the home composer`,
      })),
      (s = (0, K.jsx)(ge, { className: `icon-sm` })),
      (c = (0, K.jsx)(m, {
        id: `remoteConnections.homeBanner.primary`,
        defaultMessage: `Add Connections`,
        description: `Primary CTA shown in the remote connections banner above the home composer`,
      })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s),
      (t[3] = c))
    : ((a = t[0]), (o = t[1]), (s = t[2]), (c = t[3]));
  let l;
  t[4] !== n || t[5] !== r
    ? ((l = {
        label: c,
        onClick: () => {
          (r.set(W, !0), n(`/settings/connections`));
        },
        className: `px-3 max-[400px]:flex-1 max-[400px]:justify-center`,
      }),
      (t[4] = n),
      (t[5] = r),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === i
    ? (u = t[8])
    : ((u = i.formatMessage({
        id: `remoteConnections.homeBanner.dismiss`,
        defaultMessage: `Dismiss remote connections banner`,
        description: `Accessible label for dismissing the remote connections banner above the home composer`,
      })),
      (t[7] = i),
      (t[8] = u));
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d = () => {
        r.set(W, !0);
      }),
      (t[9] = r),
      (t[10] = d));
  let g;
  t[11] !== u || t[12] !== d
    ? ((g = {
        ariaLabel: u,
        color: `ghost`,
        icon: B,
        onClick: d,
        uniform: !0,
        className: `!border-transparent text-token-description-foreground hover:text-token-foreground`,
      }),
      (t[11] = u),
      (t[12] = d),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== l || t[15] !== g
      ? ((_ = (0, K.jsx)(J, {
          title: a,
          description: o,
          leadingVisual: s,
          primaryAction: l,
          dismissAction: g,
        })),
        (t[14] = l),
        (t[15] = g),
        (t[16] = _))
      : (_ = t[16]),
    _
  );
}
function st() {
  let e = (0, G.c)(6),
    t = E(),
    n = _(W) ?? !1,
    r = M(),
    i = le(),
    [a] = s(`remote_connections`),
    o;
  e[0] === a ? (o = e[1]) : ((o = a?.some(ct) ?? !1), (e[0] = a), (e[1] = o));
  let c = o,
    l = !n && a === void 0,
    u = !l && r && !i && a != null && !n && c,
    d;
  return (
    e[2] !== l || e[3] !== t || e[4] !== u
      ? ((d = { isEligible: u, isLoading: l, navigate: t }),
        (e[2] = l),
        (e[3] = t),
        (e[4] = u),
        (e[5] = d))
      : (d = e[5]),
    d
  );
}
function ct(e) {
  return e.source === `discovered`;
}
function lt() {
  let e = (0, G.c)(21),
    t = T(),
    n = E(),
    r = o(ie),
    i;
  e[0] !== r || e[1] !== t.pathname
    ? ((i = re({
        hideFirstNewThreadOnboardingPromos: r,
        pathname: t.pathname,
      })),
      (e[0] = r),
      (e[1] = t.pathname),
      (e[2] = i))
    : (i = e[2]);
  let a = i,
    s,
    c;
  e[3] === t.search
    ? ((s = e[4]), (c = e[5]))
    : ((s = new URLSearchParams(t.search)),
      (c = s.get(z)),
      (e[3] = t.search),
      (e[4] = s),
      (e[5] = c));
  let l = c === `1`,
    u;
  e[6] !== t.hash ||
  e[7] !== t.pathname ||
  e[8] !== t.state ||
  e[9] !== n ||
  e[10] !== s
    ? ((u = () => {
        if (!s.has(`welcomeV2Onboarding`)) return;
        s.delete(z);
        let e = s.toString();
        n(
          {
            pathname: t.pathname,
            search: e === `` ? `` : `?${e}`,
            hash: t.hash,
          },
          { replace: !0, state: t.state },
        );
      }),
      (e[6] = t.hash),
      (e[7] = t.pathname),
      (e[8] = t.state),
      (e[9] = n),
      (e[10] = s),
      (e[11] = u))
    : (u = e[11]);
  let d = u,
    f;
  e[12] !== d || e[13] !== l || e[14] !== a
    ? ((f = (0, K.jsx)(U, {
        electron: !0,
        children: (0, K.jsx)(ut, {
          clearWelcomeV2OnboardingParam: d,
          isFromWelcomeV2Onboarding: l,
          shouldHideOnboardingPromos: a,
        }),
      })),
      (e[12] = d),
      (e[13] = l),
      (e[14] = a),
      (e[15] = f))
    : (f = e[15]);
  let p;
  e[16] === a
    ? (p = e[17])
    : ((p = (0, K.jsx)(U, {
        extension: !0,
        children: (0, K.jsx)(dt, { shouldHideOnboardingPromos: a }),
      })),
      (e[16] = a),
      (e[17] = p));
  let m;
  return (
    e[18] !== f || e[19] !== p
      ? ((m = (0, K.jsxs)(K.Fragment, { children: [f, p] })),
        (e[18] = f),
        (e[19] = p),
        (e[20] = m))
      : (m = e[20]),
    m
  );
}
function ut(e) {
  let t = (0, G.c)(41),
    {
      clearWelcomeV2OnboardingParam: n,
      isFromWelcomeV2Onboarding: r,
      shouldHideOnboardingPromos: i,
    } = e,
    { onDismiss: a, onDisable: o } = Ce(),
    s = Be(),
    c = st(),
    l = tt(),
    u = Ze(),
    d = !s.shouldSuppressVanillaPromos,
    f;
  t[0] !== n || t[1] !== a
    ? ((f = () => {
        (a(), n());
      }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== n || t[4] !== o
    ? ((p = () => {
        (o(), n());
      }),
      (t[3] = n),
      (t[4] = o),
      (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] !== f || t[7] !== p
    ? ((m = (0, K.jsx)(Se, { onDismiss: f, onDisable: p })),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] !== r || t[10] !== m
    ? ((h = { isEligible: r, isLoading: !1, content: m }),
      (t[9] = r),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g = !i && s.isEligible,
    _ = !i && s.isLoading,
    v;
  t[12] !== s.accountId || t[13] !== s.beacon
    ? ((v =
        s.beacon != null && s.accountId != null
          ? (0, K.jsx)(Ve, { accountId: s.accountId, beacon: s.beacon })
          : null),
      (t[12] = s.accountId),
      (t[13] = s.beacon),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== g || t[16] !== _ || t[17] !== v
    ? ((y = { isEligible: g, isLoading: _, content: v }),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b = !i && d && c.isEligible,
    x = !i && d && c.isLoading,
    S;
  t[19] === c.navigate
    ? (S = t[20])
    : ((S = (0, K.jsx)(ot, { navigate: c.navigate })),
      (t[19] = c.navigate),
      (t[20] = S));
  let C;
  t[21] !== x || t[22] !== S || t[23] !== b
    ? ((C = { isEligible: b, isLoading: x, content: S }),
      (t[21] = x),
      (t[22] = S),
      (t[23] = b),
      (t[24] = C))
    : (C = t[24]);
  let w = !i && d && l.isEligible,
    T = !i && d && l.isLoading,
    E;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, K.jsx)(it, {})), (t[25] = E))
    : (E = t[25]);
  let D;
  t[26] !== w || t[27] !== T
    ? ((D = { isEligible: w, isLoading: T, content: E }),
      (t[26] = w),
      (t[27] = T),
      (t[28] = D))
    : (D = t[28]);
  let O = !i && d && u.isEligible,
    k = !i && d && u.isLoading,
    A;
  t[29] === u
    ? (A = t[30])
    : ((A = u.content == null ? null : (0, K.jsx)(Ye, { ...u })),
      (t[29] = u),
      (t[30] = A));
  let j;
  t[31] !== O || t[32] !== k || t[33] !== A
    ? ((j = { isEligible: O, isLoading: k, content: A }),
      (t[31] = O),
      (t[32] = k),
      (t[33] = A),
      (t[34] = j))
    : (j = t[34]);
  let M;
  return (
    t[35] !== C || t[36] !== D || t[37] !== j || t[38] !== h || t[39] !== y
      ? ((M = (0, K.jsx)($, { entries: [h, y, C, D, j] })),
        (t[35] = C),
        (t[36] = D),
        (t[37] = j),
        (t[38] = h),
        (t[39] = y),
        (t[40] = M))
      : (M = t[40]),
    M
  );
}
function dt(e) {
  let t = (0, G.c)(21),
    { shouldHideOnboardingPromos: n } = e,
    r = Je(),
    i = tt(),
    a = Ze(),
    o = !n && r.isEligible,
    s = !n && r.isLoading,
    c;
  t[0] !== r.message || t[1] !== r.setHasSeenAppUpsellBanner
    ? ((c =
        r.message == null
          ? null
          : (0, K.jsx)(Ge, {
              message: r.message,
              setHasSeenAppUpsellBanner: r.setHasSeenAppUpsellBanner,
            })),
      (t[0] = r.message),
      (t[1] = r.setHasSeenAppUpsellBanner),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== o || t[4] !== s || t[5] !== c
    ? ((l = { isEligible: o, isLoading: s, content: c }),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u = !n && i.isEligible,
    d = !n && i.isLoading,
    f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, K.jsx)(it, {})), (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = { isEligible: u, isLoading: d, content: f }),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p))
    : (p = t[10]);
  let m = !n && a.isEligible,
    h = !n && a.isLoading,
    g;
  t[11] === a
    ? (g = t[12])
    : ((g = a.content == null ? null : (0, K.jsx)(Ye, { ...a })),
      (t[11] = a),
      (t[12] = g));
  let _;
  t[13] !== h || t[14] !== g || t[15] !== m
    ? ((_ = { isEligible: m, isLoading: h, content: g }),
      (t[13] = h),
      (t[14] = g),
      (t[15] = m),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== _ || t[18] !== l || t[19] !== p
      ? ((v = (0, K.jsx)($, { entries: [l, p, _] })),
        (t[17] = _),
        (t[18] = l),
        (t[19] = p),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
export { lt as t };
//# sourceMappingURL=home-announcements-0lEwuuui.js.map
