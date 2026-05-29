import { s as e } from "./chunk-Bj-mKKzh.js";
import "./app-server-manager-signals-DkRDRgNB.js";
import { n as t, t as n } from "./jsx-runtime.js";
import {
  C as r,
  G as i,
  L as a,
  S as o,
  T as s,
  U as c,
  X as ee,
  _ as te,
  w as ne,
  wt as l,
  y as u,
} from "./setting-storage.js";
import { r as re } from "./chunk-LFPYN7LY.js";
import { o as ie } from "./statsig--EYRNU53.js";
import { t as d } from "./request-DWZTrEAr.js";
import {
  _ as f,
  g as ae,
  h as oe,
  m as p,
  v as se,
  y as ce,
} from "./apps-queries-CmwRqoKz.js";
import { t as le } from "./connector-logo.js";
import { r as ue } from "./toast-signal.js";
import { t as de } from "./button.js";
import { t as fe } from "./spinner.js";
import { t as pe } from "./check-circle-filled.js";
import { l as me, n as he } from "./dialog-layout.js";
import { t as ge } from "./openai-blossom-CXnPbecc.js";
import { t as m } from "./toggle.js";
import { n as _e } from "./app-connect-oauth-Cy-gX8IV.js";
import { t as ve } from "./connected-apps.js";
import { t as ye } from "./arrow-top-right.js";
var be = l(),
  xe = e(t(), 1);
function Se(e) {
  let t = (0, be.c)(16),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { hostId: r, onConnectStarted: i } = n,
    a = (0, xe.useContext)(re),
    o = r ?? `local`,
    s = ie(`2761268526`),
    {
      clearPendingAppConnect: c,
      isAppConnectPending: ee,
      markAppConnectOAuthPending: te,
    } = _e(),
    [ne, l] = (0, xe.useState)(null),
    u = Ce,
    d;
  t[2] !== c || t[3] !== s || t[4] !== i
    ? ((d = async (e) => {
        if ((c({ appId: e.id }), i?.(e), !s && e.installUrl?.trim())) {
          u(e.installUrl);
          return;
        }
        l(e);
      }),
      (t[2] = c),
      (t[3] = s),
      (t[4] = i),
      (t[5] = d))
    : (d = t[5]);
  let f = d,
    ae;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = () => {
        l(null);
      }),
      (t[6] = ae))
    : (ae = t[6]);
  let oe = ae,
    p;
  t[7] !== o || t[8] !== a?.location || t[9] !== te
    ? ((p = (e) => {
        let { app: t, redirectUrl: n } = e;
        te({ app: t, hostId: o, redirectUrl: n, returnTo: we(a?.location) });
      }),
      (t[7] = o),
      (t[8] = a?.location),
      (t[9] = te),
      (t[10] = p))
    : (p = t[10]);
  let se = p,
    ce;
  return (
    t[11] !== ne || t[12] !== se || t[13] !== f || t[14] !== ee
      ? ((ce = {
          connectingApp: ne,
          clearConnectingApp: oe,
          handleAppConnectOAuthStarted: se,
          handleConnectApp: f,
          handleOpenAppUrl: u,
          isAppConnectPending: ee,
        }),
        (t[11] = ne),
        (t[12] = se),
        (t[13] = f),
        (t[14] = ee),
        (t[15] = ce))
      : (ce = t[15]),
    ce
  );
}
function Ce(e) {
  let t = e?.trim();
  t && u.dispatchMessage(`open-in-browser`, { url: t });
}
function we(e) {
  return e == null
    ? `${window.location.pathname}${window.location.search}${window.location.hash}`
    : `${e.pathname}${e.search}${e.hash}`;
}
var h = n(),
  Te = `OAI-Product-Sku`,
  Ee = `CODEX`,
  g = /\[([^\]]+)\]\(([^)]+)\)/g;
function De(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e,
    n = t.properties;
  if (n && typeof n == `object`) return Object.keys(n).length > 0;
  let r = t.required;
  return !!(Array.isArray(r) && r.length > 0);
}
function Oe(e) {
  return e.supported_auth.some((e) => e.type === `OAUTH`)
    ? `OAUTH`
    : e.supported_auth.some((e) => e.type === `NONE`)
      ? `NONE`
      : `UNSUPPORTED`;
}
function ke(e) {
  return (
    e?.branding?.developer?.trim() || e?.app_metadata?.developer?.trim() || null
  );
}
function _(e) {
  let t = [],
    n = 0,
    r;
  for (; (r = g.exec(e)) != null; ) {
    r.index > n && t.push(e.slice(n, r.index));
    let [i, a, o] = r,
      s = o.trim();
    if (s.length === 0) {
      (t.push(a), (n = r.index + i.length));
      continue;
    }
    (t.push(
      (0, h.jsx)(
        `a`,
        {
          href: s,
          target: `_blank`,
          rel: `noreferrer`,
          className: `underline`,
          onClick: (e) => {
            (e.preventDefault(),
              u.dispatchMessage(`open-in-browser`, { url: s }));
          },
          children: a,
        },
        `${s}-${r.index}`,
      ),
    ),
      (n = r.index + i.length));
  }
  return (
    n < e.length && t.push(e.slice(n)),
    t.length === 0 ? e : t.length === 1 ? t[0] : t
  );
}
function Ae() {
  let e = (0, be.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, h.jsx)(`div`, {
          className: `rounded-2xl border border-token-border-default px-4 py-2`,
          children: Array.from({ length: 3 }).map(v),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function v(e, t) {
  return (0, h.jsxs)(
    `div`,
    {
      className: `flex flex-col gap-1 border-b border-token-border-default py-2.5 last:border-none`,
      children: [
        (0, h.jsx)(`div`, {
          className: `h-3 w-36 rounded bg-token-border-default`,
        }),
        (0, h.jsx)(`div`, {
          className: `h-2.5 w-full rounded bg-token-border-default`,
        }),
        (0, h.jsx)(`div`, {
          className: `h-2.5 w-4/5 rounded bg-token-border-default`,
        }),
      ],
    },
    t,
  );
}
function je(e) {
  let t = (0, be.c)(7),
    { blurbs: n, personalizationToggle: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i =
        r == null
          ? null
          : (0, h.jsxs)(`div`, {
              className: `flex items-start justify-between gap-4 border-b border-token-border-default py-2.5 last:border-none`,
              children: [
                (0, h.jsxs)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: [
                    (0, h.jsx)(`div`, {
                      className: `text-sm font-medium text-token-text-primary`,
                      children: r.blurb.title,
                    }),
                    (0, h.jsx)(`div`, {
                      className: `text-xs text-token-text-secondary`,
                      children: _(r.blurb.description),
                    }),
                  ],
                }),
                (0, h.jsx)(m, {
                  checked: r.checked,
                  disabled: r.disabled,
                  ariaLabel: r.ariaLabel,
                  onChange: r.onChange,
                }),
              ],
            })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n ? (a = t[3]) : ((a = n.map(y)), (t[2] = n), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, h.jsxs)(`div`, {
          className: `rounded-2xl border border-token-border-default px-4 py-2`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function y(e, t) {
  return (0, h.jsxs)(
    `div`,
    {
      className: `flex flex-col gap-1 border-b border-token-border-default py-2.5 last:border-none`,
      children: [
        (0, h.jsx)(`div`, {
          className: `text-sm font-medium text-token-text-primary`,
          children: e.title,
        }),
        (0, h.jsx)(`div`, {
          className: `text-xs text-token-text-secondary`,
          children: _(e.description),
        }),
      ],
    },
    `${e.title}-${t}`,
  );
}
function Me(e) {
  let t = (0, be.c)(170),
    {
      app: n,
      connectApp: l,
      closeOnFailedConnect: re,
      isCompletingConnection: ie,
      onOpenChange: m,
      onConnected: _e,
      onOAuthStarted: Se,
      showResultToasts: Ce,
    } = e,
    we = re === void 0 ? !1 : re,
    g = ie === void 0 ? !1 : ie,
    _ = Ce === void 0 ? !0 : Ce,
    v = ee(o),
    y = i(),
    Me = a(),
    [Pe, Fe] = (0, xe.useState)(null),
    Ie = n != null,
    b = n?.id ?? ``,
    Le;
  t[0] === m
    ? (Le = t[1])
    : ((Le = (e) => {
        (e || Fe(null), m(e));
      }),
      (t[0] = m),
      (t[1] = Le));
  let x = Le,
    S;
  t[2] === b
    ? (S = t[3])
    : ((S = [`mcp-settings`, `app-connect`, b]), (t[2] = b), (t[3] = S));
  let Re = Ie && n != null,
    C;
  t[4] === n
    ? (C = t[5])
    : ((C = async () => {
        if (n == null) throw Error(`Expected app metadata to be present.`);
        return d.safeGet(`/aip/connectors/{connector_id}`, {
          parameters: {
            path: { connector_id: n.id },
            query: { include_logo: !1, include_actions: !1 },
          },
          additionalHeaders: { [Te]: Ee },
        });
      }),
      (t[4] = n),
      (t[5] = C));
  let ze;
  t[6] !== S || t[7] !== Re || t[8] !== C
    ? ((ze = {
        queryKey: S,
        enabled: Re,
        staleTime: te.FIVE_MINUTES,
        queryFn: C,
      }),
      (t[6] = S),
      (t[7] = Re),
      (t[8] = C),
      (t[9] = ze))
    : (ze = t[9]);
  let w = s(ze),
    T = w.data,
    E;
  t[10] === b
    ? (E = t[11])
    : ((E = [`mcp-settings`, `app-connect`, `tos`, b]),
      (t[10] = b),
      (t[11] = E));
  let Be = Ie && n != null,
    D;
  t[12] === n
    ? (D = t[13])
    : ((D = async () => {
        if (n == null) throw Error(`Expected app metadata to be present.`);
        return d.safeGet(`/aip/connectors/{connector_id}/tos`, {
          parameters: { path: { connector_id: n.id } },
          additionalHeaders: { [Te]: Ee },
        });
      }),
      (t[12] = n),
      (t[13] = D));
  let Ve;
  t[14] !== Be || t[15] !== D || t[16] !== E
    ? ((Ve = {
        queryKey: E,
        enabled: Be,
        staleTime: te.FIVE_MINUTES,
        queryFn: D,
      }),
      (t[14] = Be),
      (t[15] = D),
      (t[16] = E),
      (t[17] = Ve))
    : (Ve = t[17]);
  let O = s(Ve),
    k = w.isPending,
    He;
  t[18] === T
    ? (He = t[19])
    : ((He = T == null ? `UNSUPPORTED` : Oe(T)), (t[18] = T), (t[19] = He));
  let A = He,
    Ue;
  t[20] === T
    ? (Ue = t[21])
    : ((Ue = T == null ? !1 : De(T.link_params_schema)),
      (t[20] = T),
      (t[21] = Ue));
  let We = Ue,
    j =
      l == null && !k && (w.isError || T == null || We || A === `UNSUPPORTED`),
    Ge;
  t[22] !== n?.installUrl || t[23] !== x || t[24] !== y || t[25] !== v
    ? ((Ge = (e) => {
        let { closeModal: t, showMissingUrlToast: r } = e === void 0 ? {} : e,
          i = t === void 0 ? !0 : t,
          a = r === void 0 ? !0 : r,
          o = n?.installUrl?.trim();
        if (!o) {
          if (!a) return;
          v.get(ue).danger(f(y));
          return;
        }
        (u.dispatchMessage(`open-in-browser`, { url: o }), i && x(!1));
      }),
      (t[22] = n?.installUrl),
      (t[23] = x),
      (t[24] = y),
      (t[25] = v),
      (t[26] = Ge))
    : (Ge = t[26]);
  let M = Ge,
    Ke;
  t[27] !== n || t[28] !== y || t[29] !== m || t[30] !== v
    ? ((Ke = () => {
        if (n == null) return;
        let e = se(n);
        if (!e) {
          v.get(ue).danger(f(y));
          return;
        }
        (u.dispatchMessage(`open-in-browser`, { url: e }), m(!1));
      }),
      (t[27] = n),
      (t[28] = y),
      (t[29] = m),
      (t[30] = v),
      (t[31] = Ke))
    : (Ke = t[31]);
  let qe = Ke,
    Je;
  t[32] !== n ||
  t[33] !== we ||
  t[34] !== x ||
  t[35] !== y ||
  t[36] !== _e ||
  t[37] !== Se ||
  t[38] !== v ||
  t[39] !== _
    ? ((Je = (e) => {
        switch (e.kind) {
          case `connected-directly`:
            (_ &&
              v.get(ue).success(
                ae({
                  appName:
                    n?.name ??
                    y.formatMessage({
                      id: `settings.mcp.appConnectModal.fallbackAppName`,
                      defaultMessage: `App`,
                      description: `Fallback app name used in app connect success toasts`,
                    }),
                  intl: y,
                }),
              ),
              _e && Promise.resolve(_e()),
              x(!1));
            return;
          case `oauth-started`:
            (n != null &&
              Se?.({
                app: { id: n.id, name: n.name },
                redirectUrl: e.redirectUrl,
              }),
              v.get(ue).info(oe({ intl: y })),
              x(!1));
            return;
          case `browser-fallback`:
            x(!1);
            return;
          case `failed`:
            (_ && v.get(ue).danger(n?.installUrl?.trim() ? p(y) : f(y)),
              we && x(!1));
            return;
        }
      }),
      (t[32] = n),
      (t[33] = we),
      (t[34] = x),
      (t[35] = y),
      (t[36] = _e),
      (t[37] = Se),
      (t[38] = v),
      (t[39] = _),
      (t[40] = Je))
    : (Je = t[40]);
  let Ye;
  t[41] !== n?.id || t[42] !== y || t[43] !== v
    ? ((Ye = (e) => {
        (r.error(`Failed to connect app {}`, {
          safe: { templateArgs: [n?.id ?? `unknown`] },
          sensitive: { error: e },
        }),
          v.get(ue).danger(p(y)));
      }),
      (t[41] = n?.id),
      (t[42] = y),
      (t[43] = v),
      (t[44] = Ye))
    : (Ye = t[44]);
  let N = ne({
      mutationFn: async () => {
        if (n == null) throw Error(`Expected app metadata to be present.`);
        return l == null
          ? ce({
              app: { id: n.id, installUrl: n.installUrl, name: n.name },
              connector: T,
              openInBrowser: Ne,
              personalizationMode: it,
              queryClient: Me,
            })
          : (await l({ app: n, personalizationMode: it }))
            ? { kind: `connected-directly` }
            : { kind: `failed` };
      },
      onSuccess: Je,
      onError: Ye,
    }),
    P = N.isPending || g;
  if (n == null) return null;
  let F = n.isAccessible && !g,
    I = T?.name ?? n.name,
    Xe;
  t[45] === T ? (Xe = t[46]) : ((Xe = ke(T)), (t[45] = T), (t[46] = Xe));
  let Ze = Xe,
    L;
  t[47] === y
    ? (L = t[48])
    : ((L = y.formatMessage({
        id: `settings.mcp.appConnectModal.permissionsTitle`,
        defaultMessage: `Permissions always respected`,
        description: `Fallback permissions blurb title`,
      })),
      (t[47] = y),
      (t[48] = L));
  let R;
  t[49] === y
    ? (R = t[50])
    : ((R = y.formatMessage({
        id: `settings.mcp.appConnectModal.permissionsDescription`,
        defaultMessage: `ChatGPT is strictly limited to permissions you've explicitly set. Disable access anytime to revoke permissions.`,
        description: `Fallback permissions blurb description`,
      })),
      (t[49] = y),
      (t[50] = R));
  let z;
  t[51] !== L || t[52] !== R
    ? ((z = { title: L, description: R }),
      (t[51] = L),
      (t[52] = R),
      (t[53] = z))
    : (z = t[53]);
  let B;
  t[54] === y
    ? (B = t[55])
    : ((B = y.formatMessage({
        id: `settings.mcp.appConnectModal.dataTitle`,
        defaultMessage: `How ChatGPT uses data`,
        description: `Fallback data usage blurb title`,
      })),
      (t[54] = y),
      (t[55] = B));
  let V;
  t[56] === y
    ? (V = t[57])
    : ((V = y.formatMessage({
        id: `settings.mcp.appConnectModal.dataDescription`,
        defaultMessage: `By default, we do not train on your data. Data from this connector may be used to provide you relevant and useful information.`,
        description: `Fallback data usage blurb description`,
      })),
      (t[56] = y),
      (t[57] = V));
  let H;
  t[58] !== B || t[59] !== V
    ? ((H = { title: B, description: V }),
      (t[58] = B),
      (t[59] = V),
      (t[60] = H))
    : (H = t[60]);
  let U;
  t[61] === y
    ? (U = t[62])
    : ((U = y.formatMessage({
        id: `settings.mcp.appConnectModal.riskTitle`,
        defaultMessage: `Connectors may introduce risk`,
        description: `Fallback risk blurb title`,
      })),
      (t[61] = y),
      (t[62] = U));
  let W;
  t[63] === y
    ? (W = t[64])
    : ((W = y.formatMessage({
        id: `settings.mcp.appConnectModal.riskDescription`,
        defaultMessage: `Connectors are designed to respect your privacy, but sites may attempt to steal your data.`,
        description: `Fallback risk blurb description`,
      })),
      (t[63] = y),
      (t[64] = W));
  let G;
  t[65] !== U || t[66] !== W
    ? ((G = { title: U, description: W }),
      (t[65] = U),
      (t[66] = W),
      (t[67] = G))
    : (G = t[67]);
  let Qe;
  t[68] !== z || t[69] !== H || t[70] !== G
    ? ((Qe = [z, H, G]), (t[68] = z), (t[69] = H), (t[70] = G), (t[71] = Qe))
    : (Qe = t[71]);
  let $e = Qe,
    et;
  t[72] === O.data?.blurbs
    ? (et = t[73])
    : ((et = O.data?.blurbs ?? []), (t[72] = O.data?.blurbs), (t[73] = et));
  let tt = et,
    nt = O.data?.personalization_toggle_blurb ?? null,
    rt =
      Pe?.connectorId === b
        ? Pe.enabled
        : O.data?.personalization_default === `PERSONALIZE_ALWAYS`,
    it = nt == null ? void 0 : rt ? `PERSONALIZE_ALWAYS` : `NO_PERSONALIZATION`,
    at = tt.length > 0 ? tt : $e,
    ot;
  t[74] !== b ||
  t[75] !== I ||
  t[76] !== y ||
  t[77] !== F ||
  t[78] !== P ||
  t[79] !== rt ||
  t[80] !== nt ||
  t[81] !== j
    ? ((ot =
        !F && !j && nt != null
          ? {
              ariaLabel: y.formatMessage(
                {
                  id: `settings.mcp.appConnectModal.personalizationToggle`,
                  defaultMessage: `Allow ChatGPT to use reference memories and chats for {appName}`,
                  description: `Accessible label for the personalization toggle in the app connect modal`,
                },
                { appName: I },
              ),
              blurb: nt,
              checked: rt,
              disabled: P,
              onChange: (e) => {
                Fe({ connectorId: b, enabled: e });
              },
            }
          : null),
      (t[74] = b),
      (t[75] = I),
      (t[76] = y),
      (t[77] = F),
      (t[78] = P),
      (t[79] = rt),
      (t[80] = nt),
      (t[81] = j),
      (t[82] = ot))
    : (ot = t[82]);
  let st = ot,
    ct;
  t[83] !== N ||
  t[84] !== F ||
  t[85] !== k ||
  t[86] !== P ||
  t[87] !== M ||
  t[88] !== qe ||
  t[89] !== j
    ? ((ct = () => {
        if (!(k || P)) {
          if (F) {
            qe();
            return;
          }
          if (j) {
            M();
            return;
          }
          N.mutate();
        }
      }),
      (t[83] = N),
      (t[84] = F),
      (t[85] = k),
      (t[86] = P),
      (t[87] = M),
      (t[88] = qe),
      (t[89] = j),
      (t[90] = ct))
    : (ct = t[90]);
  let lt = ct,
    ut;
  t[91] !== n.installUrl ||
  t[92] !== l ||
  t[93] !== g ||
  t[94] !== F ||
  t[95] !== k ||
  t[96] !== A ||
  t[97] !== j
    ? ((ut =
        l == null &&
        !k &&
        !g &&
        !F &&
        !j &&
        A === `OAUTH` &&
        !!n.installUrl?.trim()),
      (t[91] = n.installUrl),
      (t[92] = l),
      (t[93] = g),
      (t[94] = F),
      (t[95] = k),
      (t[96] = A),
      (t[97] = j),
      (t[98] = ut))
    : (ut = t[98]);
  let dt = ut,
    ft = F || (!g && !j && A === `OAUTH`),
    pt;
  t[99] !== l ||
  t[100] !== w.isError ||
  t[101] !== g ||
  t[102] !== k ||
  t[103] !== A ||
  t[104] !== We
    ? ((pt = g
        ? (0, h.jsxs)(`span`, {
            className: `flex items-center justify-center gap-2`,
            children: [
              (0, h.jsx)(fe, { className: `icon-xs` }),
              (0, h.jsx)(c, {
                id: `settings.mcp.appConnectModal.completingConnection`,
                defaultMessage: `Finishing connection…`,
                description: `Message shown while an app connection OAuth callback is still completing in the background`,
              }),
            ],
          })
        : k
          ? (0, h.jsxs)(`span`, {
              className: `flex items-center justify-center gap-2`,
              children: [
                (0, h.jsx)(fe, { className: `icon-xs` }),
                (0, h.jsx)(c, {
                  id: `settings.mcp.appConnectModal.loading`,
                  defaultMessage: `Loading connection details...`,
                  description: `Message shown while app connector details are loading in the app connect modal`,
                }),
              ],
            })
          : w.isError && l == null
            ? (0, h.jsx)(c, {
                id: `settings.mcp.appConnectModal.loadError`,
                defaultMessage: `Could not load this app's connection details. Continue in browser.`,
                description: `Message shown when app connector details fail to load in app connect modal`,
              })
            : We && l == null
              ? (0, h.jsx)(c, {
                  id: `settings.mcp.appConnectModal.browserRequiredLinkParams`,
                  defaultMessage: `This app needs extra setup fields, so connection continues in browser.`,
                  description: `Message shown when app requires link params and must connect in browser`,
                })
              : A === `UNSUPPORTED` && l == null
                ? (0, h.jsx)(c, {
                    id: `settings.mcp.appConnectModal.browserRequiredAuth`,
                    defaultMessage: `This app uses an auth method that currently opens in browser.`,
                    description: `Message shown when app auth type is not supported in modal flow`,
                  })
                : null),
      (t[99] = l),
      (t[100] = w.isError),
      (t[101] = g),
      (t[102] = k),
      (t[103] = A),
      (t[104] = We),
      (t[105] = pt))
    : (pt = t[105]);
  let mt = pt,
    ht;
  t[106] !== I || t[107] !== g || t[108] !== F || t[109] !== A || t[110] !== j
    ? ((ht = g
        ? (0, h.jsx)(c, {
            id: `settings.mcp.appConnectModal.completingConnectionButton`,
            defaultMessage: `Finishing connection…`,
            description: `Primary button label shown while an app connection OAuth callback is still completing in the background`,
          })
        : F
          ? (0, h.jsx)(c, {
              id: `settings.mcp.appConnectModal.manageOnChatGpt`,
              defaultMessage: `Manage on ChatGPT`,
              description: `Primary button label shown when an app is already connected and can be managed on ChatGPT`,
            })
          : j
            ? (0, h.jsx)(c, {
                id: `settings.mcp.appConnectModal.openInBrowser`,
                defaultMessage: `Open in browser`,
                description: `Primary button label when app connect needs to continue in browser`,
              })
            : A === `OAUTH`
              ? (0, h.jsx)(c, {
                  id: `settings.mcp.appConnectModal.continueToApp`,
                  defaultMessage: `Continue to {appName}`,
                  description: `Primary button label for OAuth connectors in app connect modal`,
                  values: { appName: I },
                })
              : (0, h.jsx)(c, {
                  id: `settings.mcp.appConnectModal.connectToApp`,
                  defaultMessage: `Connect {appName}`,
                  description: `Primary button label for no-auth connectors in app connect modal`,
                  values: { appName: I },
                })),
      (t[106] = I),
      (t[107] = g),
      (t[108] = F),
      (t[109] = A),
      (t[110] = j),
      (t[111] = ht))
    : (ht = t[111]);
  let gt = ht,
    _t;
  t[112] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = (0, h.jsx)(`span`, {
        className: `flex size-14 shrink-0 items-center justify-center rounded-xl bg-black text-white shadow-sm`,
        children: (0, h.jsx)(ge, { className: `size-12` }),
      })),
      (t[112] = _t))
    : (_t = t[112]);
  let vt;
  t[113] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = (0, h.jsxs)(`span`, {
        className: `flex items-center gap-1`,
        children: [
          (0, h.jsx)(`span`, {
            className: `size-1.5 rounded-full bg-token-border-default`,
          }),
          (0, h.jsx)(`span`, {
            className: `size-1.5 rounded-full bg-token-border-default`,
          }),
          (0, h.jsx)(`span`, {
            className: `size-1.5 rounded-full bg-token-border-default`,
          }),
        ],
      })),
      (t[113] = vt))
    : (vt = t[113]);
  let K;
  t[114] !== n.name || t[115] !== y
    ? ((K = y.formatMessage(
        {
          id: `settings.mcp.appConnectModal.logoAlt`,
          defaultMessage: `{appName} logo`,
          description: `Alt text for connector logo in app connect modal`,
        },
        { appName: n.name },
      )),
      (t[114] = n.name),
      (t[115] = y),
      (t[116] = K))
    : (K = t[116]);
  let yt = n.logoUrl ?? T?.logo_url ?? null,
    bt = n.logoUrlDark ?? T?.logo_url_dark ?? null,
    xt;
  t[117] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xt = (0, h.jsx)(ve, {
        className: `icon-sm text-token-text-secondary`,
      })),
      (t[117] = xt))
    : (xt = t[117]);
  let q;
  t[118] !== K || t[119] !== yt || t[120] !== bt
    ? ((q = (0, h.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [
          _t,
          vt,
          (0, h.jsx)(`span`, {
            className: `bg-token-surface-tertiary flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-token-border-default shadow-sm`,
            children: (0, h.jsx)(le, {
              alt: K,
              className: `size-full object-contain`,
              logoUrl: yt,
              logoDarkUrl: bt,
              fallback: xt,
            }),
          }),
        ],
      })),
      (t[118] = K),
      (t[119] = yt),
      (t[120] = bt),
      (t[121] = q))
    : (q = t[121]);
  let J;
  t[122] === I
    ? (J = t[123])
    : ((J = (0, h.jsx)(`div`, {
        className: `heading-dialog font-semibold`,
        children: (0, h.jsx)(c, {
          id: `settings.mcp.appConnectModal.title`,
          defaultMessage: `Connect {appName}`,
          description: `Title for the modal that connects an app from MCP settings`,
          values: { appName: I },
        }),
      })),
      (t[122] = I),
      (t[123] = J));
  let Y;
  t[124] === Ze
    ? (Y = t[125])
    : ((Y = Ze
        ? (0, h.jsx)(`div`, {
            className: `text-sm text-token-text-secondary`,
            children: (0, h.jsx)(c, {
              id: `settings.mcp.appConnectModal.developedBy`,
              defaultMessage: `Developed by {developer}`,
              description: `Developer subtitle shown in app connect modal`,
              values: { developer: Ze },
            }),
          })
        : null),
      (t[124] = Ze),
      (t[125] = Y));
  let X;
  t[126] !== J || t[127] !== Y
    ? ((X = (0, h.jsxs)(`div`, {
        className: `flex flex-col items-center gap-1 text-center`,
        children: [J, Y],
      })),
      (t[126] = J),
      (t[127] = Y),
      (t[128] = X))
    : (X = t[128]);
  let St;
  t[129] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((St = (0, h.jsxs)(`div`, {
        className: `flex items-center gap-2 text-base text-token-charts-green`,
        children: [
          (0, h.jsx)(pe, { className: `icon-sm shrink-0` }),
          (0, h.jsx)(c, {
            id: `settings.mcp.appConnectModal.adminApproved`,
            defaultMessage: `Approved by your admin`,
            description: `Admin approval stamp text shown in app connect modal`,
          }),
        ],
      })),
      (t[129] = St))
    : (St = t[129]);
  let Z;
  t[130] !== q || t[131] !== X
    ? ((Z = (0, h.jsxs)(`div`, {
        className: `flex flex-col items-center gap-4`,
        children: [q, X, St],
      })),
      (t[130] = q),
      (t[131] = X),
      (t[132] = Z))
    : (Z = t[132]);
  let Q;
  t[133] !== O.isPending || t[134] !== k || t[135] !== st || t[136] !== at
    ? ((Q =
        k || O.isPending
          ? (0, h.jsx)(Ae, {})
          : (0, h.jsx)(je, { blurbs: at, personalizationToggle: st })),
      (t[133] = O.isPending),
      (t[134] = k),
      (t[135] = st),
      (t[136] = at),
      (t[137] = Q))
    : (Q = t[137]);
  let Ct;
  t[138] === mt
    ? (Ct = t[139])
    : ((Ct = mt
        ? (0, h.jsx)(`div`, {
            className: `text-center text-sm text-token-description-foreground`,
            children: mt,
          })
        : null),
      (t[138] = mt),
      (t[139] = Ct));
  let wt = k || g,
    Tt;
  t[140] === ft
    ? (Tt = t[141])
    : ((Tt = ft ? (0, h.jsx)(ye, { className: `icon-xs` }) : null),
      (t[140] = ft),
      (t[141] = Tt));
  let Et;
  t[142] !== gt || t[143] !== Tt
    ? ((Et = (0, h.jsxs)(`span`, {
        className: `flex items-center gap-1`,
        children: [gt, Tt],
      })),
      (t[142] = gt),
      (t[143] = Tt),
      (t[144] = Et))
    : (Et = t[144]);
  let Dt;
  t[145] !== lt || t[146] !== P || t[147] !== wt || t[148] !== Et
    ? ((Dt = (0, h.jsx)(de, {
        color: `primary`,
        size: `large`,
        className: `w-full justify-center`,
        loading: P,
        disabled: wt,
        onClick: lt,
        children: Et,
      })),
      (t[145] = lt),
      (t[146] = P),
      (t[147] = wt),
      (t[148] = Et),
      (t[149] = Dt))
    : (Dt = t[149]);
  let Ot;
  t[150] !== dt || t[151] !== N.isPending || t[152] !== M
    ? ((Ot = dt
        ? (0, h.jsx)(de, {
            color: `ghost`,
            size: `large`,
            className: `w-full justify-center`,
            disabled: N.isPending,
            onClick: () => {
              M({ closeModal: !0 });
            },
            children: (0, h.jsx)(c, {
              id: `settings.mcp.appConnectModal.advancedSettings`,
              defaultMessage: `Advanced settings (opens ChatGPT.com)`,
              description: `Secondary action label for opening advanced connector settings`,
            }),
          })
        : null),
      (t[150] = dt),
      (t[151] = N.isPending),
      (t[152] = M),
      (t[153] = Ot))
    : (Ot = t[153]);
  let kt;
  t[154] !== Dt || t[155] !== Ot
    ? ((kt = (0, h.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [Dt, Ot],
      })),
      (t[154] = Dt),
      (t[155] = Ot),
      (t[156] = kt))
    : (kt = t[156]);
  let At;
  t[157] !== k || t[158] !== j
    ? ((At =
        j && !k
          ? (0, h.jsx)(`div`, {
              className: `text-center text-xs text-token-description-foreground`,
              children: (0, h.jsx)(c, {
                id: `settings.mcp.appConnectModal.browserFallbackDescription`,
                defaultMessage: `This connector needs setup in your browser.`,
                description: `Helper text shown when app connect falls back to browser flow`,
              }),
            })
          : null),
      (t[157] = k),
      (t[158] = j),
      (t[159] = At))
    : (At = t[159]);
  let $;
  t[160] !== Z ||
  t[161] !== Q ||
  t[162] !== Ct ||
  t[163] !== kt ||
  t[164] !== At
    ? (($ = (0, h.jsxs)(he, {
        className: `gap-6 px-6 pt-8 pb-6`,
        children: [Z, Q, Ct, kt, At],
      })),
      (t[160] = Z),
      (t[161] = Q),
      (t[162] = Ct),
      (t[163] = kt),
      (t[164] = At),
      (t[165] = $))
    : ($ = t[165]);
  let jt;
  return (
    t[166] !== x || t[167] !== Ie || t[168] !== $
      ? ((jt = (0, h.jsx)(me, {
          open: Ie,
          onOpenChange: x,
          size: `wide`,
          children: $,
        })),
        (t[166] = x),
        (t[167] = Ie),
        (t[168] = $),
        (t[169] = jt))
      : (jt = t[169]),
    jt
  );
}
function Ne(e) {
  u.dispatchMessage(`open-in-browser`, { url: e });
}
export { Se as n, Me as t };
//# sourceMappingURL=app-connect-modal.js.map
