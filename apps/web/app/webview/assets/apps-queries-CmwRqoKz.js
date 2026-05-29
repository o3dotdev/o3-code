import { s as e } from "./chunk-Bj-mKKzh.js";
import { Xs as t, gn as n } from "./app-server-manager-signals-DkRDRgNB.js";
import {
  C as r,
  L as i,
  S as a,
  T as o,
  Y as s,
  _ as c,
  g as l,
  l as u,
  nt as d,
  w as f,
  wt as p,
} from "./setting-storage.js";
import { t as m } from "./useQueries-tUeWkfvR.js";
import { t as h } from "./request-DWZTrEAr.js";
import { t as g } from "./use-auth.js";
import { t as _ } from "./startCase.js";
import { n as v } from "./experimental-features-queries.js";
var y = `connectors://`,
  b = `light`,
  x = `dark`;
function S(e) {
  let t = e?.trim();
  if (t == null || t.length === 0 || !t.startsWith(y)) return null;
  let n = t.slice(13),
    r = ((n.split(/[?#]/u)[0] ?? ``).split(`/`)[0] ?? ``).trim();
  if (r.length === 0) return null;
  let i = n.split(`?`)[1]?.split(`#`)[0] ?? ``;
  return {
    connectorId: r,
    theme: new URLSearchParams(i).get(`theme`)?.toLowerCase() === x ? x : b,
  };
}
function C({ connectorId: e, theme: t }) {
  return `${e}:${t}`;
}
async function w({ connectorId: e, theme: t }) {
  let n = await l
    .getInstance()
    .get(`/aip/connectors/${encodeURIComponent(e)}/logo?theme=${t}`);
  return `data:${n.body.contentType};base64,${n.body.base64}`;
}
var T = `OAI-Product-Sku`,
  E = `CODEX`,
  D = `codex`,
  O = [`mcp-settings`, `app-connect`];
function k(e, { includeActions: t = !1 } = {}) {
  return {
    queryKey: [...O, e, t],
    staleTime: c.FIVE_MINUTES,
    queryFn: async () =>
      h.safeGet(`/aip/connectors/{connector_id}`, {
        parameters: {
          path: { connector_id: e },
          query: { include_logo: !1, include_actions: t },
        },
        additionalHeaders: { [T]: E },
      }),
  };
}
function A(e) {
  let t = e.installUrl?.trim();
  if (!t) return null;
  let n = new URL(t);
  return ((n.hash = F(e.id)), n.toString());
}
async function ee({
  app: e,
  callbackMode: t = `native`,
  connector: n,
  openInBrowser: i,
  personalizationMode: a,
  queryClient: o,
}) {
  let s = n;
  if (s == null)
    try {
      s = await o.fetchQuery(k(e.id));
    } catch (t) {
      return (
        r.error(`Failed to resolve app connect flow`, {
          safe: { appId: e.id },
          sensitive: { error: t },
        }),
        I({ app: e, openInBrowser: i })
          ? { kind: `browser-fallback` }
          : { kind: `failed` }
      );
    }
  if (s == null) return { kind: `failed` };
  let c = ie(s);
  if (re(s) || c === `UNSUPPORTED`)
    return I({ app: e, openInBrowser: i })
      ? { kind: `browser-fallback` }
      : { kind: `failed` };
  try {
    let n = a == null ? void 0 : { personalized: a };
    if (c === `NONE`)
      return (
        await h.safePost(`/aip/connectors/links/noauth`, {
          requestBody: {
            connector_id: s.id,
            name: s.name,
            action_names: [],
            tool_settings: n,
          },
          additionalHeaders: { [T]: E },
        }),
        { kind: `connected-directly` }
      );
    let r = t === `browser` ? oe(e) : await ae(),
      o = (
        await h.safePost(`/aip/connectors/links/oauth`, {
          requestBody: {
            connector_id: s.id,
            name: s.name,
            action_names: null,
            callback_url: r,
            post_auth_url: se(e),
            tool_settings: n,
          },
          additionalHeaders: { [T]: E },
        })
      ).redirect_url?.trim();
    if (!o) throw Error(`OAuth redirect URL missing in connector response.`);
    return (i(o), { kind: `oauth-started`, redirectUrl: o });
  } catch (t) {
    return (
      r.error(`Failed to connect app {}`, {
        safe: { templateArgs: [e.id] },
        sensitive: { error: t },
      }),
      I({ app: e, openInBrowser: i })
        ? { kind: `browser-fallback` }
        : { kind: `failed` }
    );
  }
}
function te({ intl: e }) {
  return e.formatMessage({
    id: `settings.mcp.appConnectModal.oauthStartedElectron`,
    defaultMessage: `Finish connecting in your browser.`,
    description: `Toast shown after starting OAuth from MCP settings app connect modal`,
  });
}
function ne({ appName: e, intl: t }) {
  return t.formatMessage(
    {
      id: `settings.mcp.appConnectModal.connected`,
      defaultMessage: `{appName} is now connected.`,
      description: `Toast shown when a no-auth app is connected directly from MCP settings`,
    },
    { appName: e },
  );
}
function j(e) {
  return e.formatMessage({
    id: `settings.mcp.appConnectModal.connectFailed`,
    defaultMessage: `Failed to connect app.`,
    description: `Toast shown when starting an app connection fails`,
  });
}
function M(e) {
  return e.formatMessage({
    id: `settings.mcp.appConnectModal.installUrlMissing`,
    defaultMessage: `This app does not provide a browser setup URL right now.`,
    description: `Toast shown when app connect fallback is attempted but no install URL is available`,
  });
}
function N(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e,
    n = t.properties;
  if (n && typeof n == `object`) return Object.keys(n).length > 0;
  let r = t.required;
  return !!(Array.isArray(r) && r.length > 0);
}
function re(e) {
  return N(e.link_params_schema);
}
function ie(e) {
  return e.supported_auth.some((e) => e.type === `OAUTH`)
    ? `OAUTH`
    : e.supported_auth.some((e) => e.type === `NONE`)
      ? `NONE`
      : `UNSUPPORTED`;
}
async function ae() {
  let { callbackUrl: e } = await u(`app-connect-oauth-callback-url`);
  return e;
}
function oe(e) {
  return P(e) + `/connector_platform_oauth_redirect`;
}
function se(e) {
  let t = A(e);
  if (t != null) return t;
  let n = new URL(`/gpts/editor`, P(e));
  return ((n.hash = F(e.id)), n.toString());
}
function ce(e) {
  let t = e.installUrl?.trim();
  if (!t) return null;
  let n = new URL(t);
  return ((n.hash = F(e.id, { addConnectorLink: !0 })), n.toString());
}
function P(e) {
  let t = e.installUrl?.trim();
  return t ? new URL(t).origin : `https://chatgpt.com`;
}
function F(e, { addConnectorLink: t = !1 } = {}) {
  let n = new URLSearchParams([[`connector`, e]]);
  return (
    t && n.set(`add-connector-link`, `true`),
    n.set(`product-sku`, E),
    n.set(`referrer`, D),
    `settings/Connectors?${n.toString()}`
  );
}
function I({ app: e, openInBrowser: t }) {
  let n = ce(e);
  return n == null ? !1 : (t(n), !0);
}
var le = e(_(), 1),
  ue = e(n(), 1);
function de({ actions: e }) {
  return e
    .filter((e) => e.is_enabled !== !1)
    .map((e) => ({
      accessBadges: L(e),
      description: e.description,
      name: e.name,
      visibility: z(e.visibility),
    }))
    .sort((e, t) => e.name.localeCompare(t.name));
}
function L(e) {
  return (0, ue.default)([
    e.is_read_only === !0 ? `READ` : R(e.visibility),
    e.is_open_world === !0 ? `OPEN WORLD` : null,
    e.is_destructive === !0 ? `DESTRUCTIVE` : null,
  ]).flatMap((e) => (e == null ? [] : [e]));
}
function R(e) {
  let t = z(e);
  return t == null ? `WRITE` : `${t} WRITE`;
}
function z(e) {
  let t = e?.trim();
  return t == null || t.length === 0
    ? null
    : (0, le.default)(t.replace(/[:/_.-]+/g, ` `)).toUpperCase();
}
var B = p();
function V(e) {
  let t = (0, B.c)(4),
    { hostId: n } = e,
    { data: r } = s(v, n),
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r === void 0 ? [] : r), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  return (
    t[2] === a ? (o = t[3]) : ((o = a.some(H)), (t[2] = a), (t[3] = o)),
    o
  );
}
function H(e) {
  return e.name === `apps` && e.enabled;
}
var fe = 1e3,
  pe = [`apps`, `link`],
  me = [`connector-logo-data-url`],
  U = [`connector-logos`],
  he = [`apps`, `list`],
  ge = d(a, ({ hostId: e, isQueryEnabled: t }) => ({
    queryKey: X(e),
    queryFn: async () => Y({ forceRefetch: !1, hostId: e }),
    enabled: t,
    notifyOnChangeProps: [
      `data`,
      `dataUpdatedAt`,
      `error`,
      `fetchStatus`,
      `status`,
    ],
    retry: !1,
    staleTime: c.FIVE_MINUTES,
  }));
async function W({ hostId: e, queryClient: t }) {
  let n = await Y({ forceRefetch: !0, hostId: e });
  return (t.setQueryData(X(e), n), n);
}
function G(e) {
  let t = (0, B.c)(27),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { enabled: r, hostId: a } = n,
    s = r === void 0 ? !0 : r,
    l = a ?? `local`,
    u = g(),
    d;
  t[2] === l ? (d = t[3]) : ((d = { hostId: l }), (t[2] = l), (t[3] = d));
  let p = V(d),
    m = i(),
    h = !u.isLoading && u.userId != null,
    _;
  t[4] === l ? (_ = t[5]) : ((_ = X(l)), (t[4] = l), (t[5] = _));
  let v;
  t[6] === l
    ? (v = t[7])
    : ((v = async () => Y({ forceRefetch: !1, hostId: l })),
      (t[6] = l),
      (t[7] = v));
  let y = s && p && h,
    b;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = [`data`, `dataUpdatedAt`, `error`, `fetchStatus`, `status`]),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] !== _ || t[10] !== v || t[11] !== y
    ? ((x = {
        queryKey: _,
        queryFn: v,
        enabled: y,
        notifyOnChangeProps: b,
        retry: !1,
        staleTime: c.FIVE_MINUTES,
      }),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y),
      (t[12] = x))
    : (x = t[12]);
  let S = o(x),
    C;
  t[13] !== l || t[14] !== m
    ? ((C = {
        retry: !1,
        onMutate: async () => {
          await m.cancelQueries({ queryKey: X(l) });
        },
        mutationFn: async () => W({ hostId: l, queryClient: m }),
      }),
      (t[13] = l),
      (t[14] = m),
      (t[15] = C))
    : (C = t[15]);
  let w = f(C),
    T = w.error != null && w.submittedAt > S.dataUpdatedAt ? w.error : null,
    E;
  t[16] !== p || t[17] !== S
    ? ((E = p ? S.data : []), (t[16] = p), (t[17] = S), (t[18] = E))
    : (E = t[18]);
  let D;
  t[19] === w
    ? (D = t[20])
    : ((D = async () => w.mutateAsync()), (t[19] = w), (t[20] = D));
  let O = T ?? S.error ?? null,
    k;
  return (
    t[21] !== w.isPending ||
    t[22] !== S ||
    t[23] !== E ||
    t[24] !== D ||
    t[25] !== O
      ? ((k = {
          ...S,
          data: E,
          hardRefetchAppsList: D,
          isHardRefetchingAppsList: w.isPending,
          loadError: O,
        }),
        (t[21] = w.isPending),
        (t[22] = S),
        (t[23] = E),
        (t[24] = D),
        (t[25] = O),
        (t[26] = k))
      : (k = t[26]),
    k
  );
}
function _e(e) {
  let t = (0, B.c)(12),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { enabled: r, hostId: i } = n,
    a = r === void 0 ? !0 : r,
    o = i ?? `local`,
    s;
  t[2] !== a || t[3] !== o
    ? ((s = { enabled: a, hostId: o }), (t[2] = a), (t[3] = o), (t[4] = s))
    : (s = t[4]);
  let c = G(s),
    l = a ? c.data : void 0,
    u;
  t[5] !== l || t[6] !== a || t[7] !== o
    ? ((u = { apps: l, enabled: a, hostId: o }),
      (t[5] = l),
      (t[6] = a),
      (t[7] = o),
      (t[8] = u))
    : (u = t[8]);
  let d = K(u);
  if (l == null) return c;
  let f;
  return (
    t[9] !== c || t[10] !== d
      ? ((f = { ...c, data: d }), (t[9] = c), (t[10] = d), (t[11] = f))
      : (f = t[11]),
    f
  );
}
function K(e) {
  let t = (0, B.c)(16),
    { apps: n, enabled: r, hostId: a } = e,
    s = r === void 0 ? !0 : r,
    l = a ?? `local`,
    u = i(),
    d = s ? n : void 0,
    f;
  t[0] === d
    ? (f = t[1])
    : ((f = d == null ? void 0 : Te(d)), (t[0] = d), (t[1] = f));
  let p = f,
    m;
  t[2] !== p || t[3] !== l
    ? ((m = Q(l, p)), (t[2] = p), (t[3] = l), (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== p || t[6] !== u
    ? ((h = async () => {
        if (p == null) throw Error(`connector logo requests are required`);
        return Ee({ queryClient: u, requests: p });
      }),
      (t[5] = p),
      (t[6] = u),
      (t[7] = h))
    : (h = t[7]);
  let g = p != null && p.length > 0,
    _;
  t[8] !== m || t[9] !== h || t[10] !== g
    ? ((_ = { queryKey: m, queryFn: h, enabled: g, staleTime: c.INFINITE }),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _))
    : (_ = t[11]);
  let v = o(_),
    y;
  bb0: {
    if (d == null) {
      y = void 0;
      break bb0;
    }
    let e, n;
    (t[12] !== d || t[13] !== v.data
      ? ((e = !1),
        (n = d.map((t) => {
          let n = $({
              logoUrl: t.logoUrl,
              connectorLogoDataUrlByCacheKey: v.data,
            }),
            r = $({
              logoUrl: t.logoUrlDark,
              connectorLogoDataUrlByCacheKey: v.data,
            });
          return n === t.logoUrl && r === t.logoUrlDark
            ? t
            : ((e = !0), { ...t, logoUrl: n, logoUrlDark: r });
        })),
        (t[12] = d),
        (t[13] = v.data),
        (t[14] = e),
        (t[15] = n))
      : ((e = t[14]), (n = t[15])),
      (y = e ? n : d));
  }
  let b = y;
  if (d != null) return b;
}
function ve(e) {
  let t = (0, B.c)(2),
    n;
  t[0] === e ? (n = t[1]) : ((n = Z(e)), (t[0] = e), (t[1] = n));
  let { data: r } = o(n);
  return r ?? void 0;
}
function q(e) {
  let t = (0, B.c)(8),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { hostId: r } = n,
    i;
  t[2] === r ? (i = t[3]) : ((i = { hostId: r }), (t[2] = r), (t[3] = i));
  let { data: a } = G(i),
    o;
  t[4] === a
    ? (o = t[5])
    : ((o = a === void 0 ? [] : a), (t[4] = a), (t[5] = o));
  let s = o,
    c;
  return (t[6] === s ? (c = t[7]) : ((c = we(s)), (t[6] = s), (t[7] = c)), c);
}
function ye(e) {
  let t = (0, B.c)(7),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { hostId: r } = n,
    i;
  t[2] === r ? (i = t[3]) : ((i = { hostId: r }), (t[2] = r), (t[3] = i));
  let a = q(i),
    o;
  return (
    t[4] !== a || t[5] !== r
      ? ((o = { apps: a, hostId: r }), (t[4] = a), (t[5] = r), (t[6] = o))
      : (o = t[6]),
    K(o) ?? a
  );
}
function be(e) {
  let t = (0, B.c)(5),
    n = e ?? ``,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = k(n, { includeActions: !0 })), (t[0] = n), (t[1] = r));
  let i = e != null,
    a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = { ...r, enabled: i, staleTime: c.FIVE_MINUTES, select: xe }),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    o(a)
  );
}
function xe(e) {
  let { actions: t } = e;
  return de({ actions: t });
}
function Se(e) {
  let t = (0, B.c)(7),
    n;
  t[0] === e ? (n = t[1]) : ((n = e.map(Ce)), (t[0] = e), (t[1] = n));
  let r;
  t[2] === n ? (r = t[3]) : ((r = { queries: n }), (t[2] = n), (t[3] = r));
  let i = m(r),
    a;
  return (
    t[4] !== e || t[5] !== i
      ? ((a = new Map()),
        i.forEach((t, n) => {
          let r = t.data?.owner_profile?.email?.trim();
          r == null || r.length === 0 || a.set(e[n], r);
        }),
        (t[4] = e),
        (t[5] = i),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
function Ce(e) {
  return {
    queryKey: [...pe, e],
    queryFn: async () =>
      (
        await h.safeGet(`/aip/connectors/{connector_id}/link`, {
          parameters: { path: { connector_id: e } },
        })
      ).link,
    retry: !1,
    staleTime: c.FIVE_MINUTES,
  };
}
function we(e) {
  return e.filter((e) => e.isAccessible && e.isEnabled);
}
async function J({ forceRefetch: e, hostId: n }) {
  try {
    let r = async (i) => {
      let a = await t(`list-apps`, {
        hostId: n,
        cursor: i,
        limit: fe,
        forceRefetch: e,
      });
      return a.nextCursor == null
        ? a.data
        : [...a.data, ...(await r(a.nextCursor))];
    };
    return await r(null);
  } catch (e) {
    throw (
      r.error(`Failed to load apps list`, {
        safe: { error: String(e) },
        sensitive: {},
      }),
      e instanceof Error ? e : Error(String(e))
    );
  }
}
async function Y({ forceRefetch: e, hostId: t }) {
  try {
    return await J({ forceRefetch: e, hostId: t });
  } catch {
    return J({ forceRefetch: e, hostId: t });
  }
}
function X(e) {
  return [...he, e];
}
function Z(e) {
  return {
    queryKey: [...me, C(e)],
    queryFn: async () => {
      try {
        return await w(e);
      } catch {
        return null;
      }
    },
    retry: !1,
    staleTime: c.INFINITE,
  };
}
function Q(e, t) {
  return t == null ? [...U, e] : [...U, e, ...t.map((e) => C(e))];
}
function Te(e) {
  let t = new Map();
  return (
    e.forEach((e) => {
      let n = S(e.logoUrl);
      n != null && t.set(C(n), n);
      let r = S(e.logoUrlDark);
      r != null && t.set(C(r), r);
    }),
    Array.from(t.values())
  );
}
async function Ee({ queryClient: e, requests: t }) {
  let n = await Promise.all(
      t.map(async (t) => ({
        cacheKey: C(t),
        dataUrl: await e.fetchQuery(Z(t)),
      })),
    ),
    r = new Map();
  return (
    n.forEach((e) => {
      e.dataUrl != null && r.set(e.cacheKey, e.dataUrl);
    }),
    r
  );
}
function $({ logoUrl: e, connectorLogoDataUrlByCacheKey: t }) {
  let n = e?.trim();
  if (n == null || n.length === 0) return null;
  let r = S(n);
  return r == null ? n : (t?.get(C(r)) ?? n);
}
export {
  M as _,
  be as a,
  S as b,
  K as c,
  ye as d,
  V as f,
  ne as g,
  te as h,
  Se as i,
  ve as l,
  j as m,
  X as n,
  G as o,
  k as p,
  W as r,
  _e as s,
  ge as t,
  q as u,
  A as v,
  ee as y,
};
//# sourceMappingURL=apps-queries-CmwRqoKz.js.map
