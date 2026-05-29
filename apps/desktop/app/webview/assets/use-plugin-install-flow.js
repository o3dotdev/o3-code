import { s as e } from "./chunk-Bj-mKKzh.js";
import { Di as t, Hi as n, qi as r, vr as i, xr as a } from "./src-C.js";
import {
  Xs as o,
  fo as s,
  ur as c,
  wo as l,
  za as u,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as d, t as f } from "./jsx-runtime.js";
import {
  $ as p,
  C as m,
  G as h,
  L as g,
  S as _,
  T as v,
  U as y,
  V as b,
  X as x,
  Y as S,
  _ as C,
  l as w,
  u as T,
  w as ee,
  wt as E,
  y as D,
} from "./setting-storage.js";
import { f as te } from "./chunk-LFPYN7LY.js";
import { t as O } from "./queryOptions-DGhYrySA.js";
import { o as ne, p as k } from "./statsig--EYRNU53.js";
import { t as A } from "./request-DWZTrEAr.js";
import { t as re } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import { C as j, c as M } from "./config-queries-BBeTQbuo.js";
import { r as ie } from "./remote-connection-visibility.js";
import {
  g as N,
  h as ae,
  m as P,
  s as F,
  y as I,
} from "./apps-queries-CmwRqoKz.js";
import { t as L } from "./connector-logo.js";
import { r as R } from "./toast-signal.js";
import { t as oe } from "./tooltip-CDzchJxN.js";
import { t as se } from "./button.js";
import { t as z } from "./use-codex-home.js";
import { t as B } from "./apps-DwfMzB5Q.js";
import { t as V } from "./plugin-install-store-Daxzgjai.js";
import { t as ce } from "./use-platform.js";
import { i as H, n as le, r as U } from "./use-is-plugins-enabled.js";
import {
  d as ue,
  f as de,
  n as W,
  o as fe,
  p as G,
  s as pe,
} from "./use-plugins-jIZrcuZQ.js";
import { l as me, n as he } from "./dialog-layout.js";
import { a as K, o as q, s as J } from "./plugins-availability-txQMPSuC.js";
import { n as ge, r as _e } from "./plugin-config-edits-DUMiyKty.js";
import { m as ve } from "./links.js";
import { t as Y } from "./badge.js";
import { t as ye } from "./openai-blossom-CXnPbecc.js";
import { n as be, t as xe } from "./filesystem-media-src.js";
import { t as Se } from "./use-skills.js";
import { n as Ce, t as we } from "./check-plugin-availability.js";
import { r as Te } from "./plugin-detail-queries.js";
import { t as Ee } from "./toggle.js";
import { i as De, n as Oe } from "./app-connect-oauth-Cy-gX8IV.js";
import { o as ke, r as Ae } from "./computer-use-app-approvals-query.js";
import { t as je } from "./hooks-settings-queries-BUP-44jb.js";
var X = E();
function Me() {
  let e = (0, X.c)(3),
    [t] = s(`remote_control_connections_state`),
    n = ie(),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = Ne({ remoteControlConnectionsState: t, slingshotEnabled: n })),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function Ne({ remoteControlConnectionsState: e, slingshotEnabled: t }) {
  return t && (e?.available ?? !0) && e?.accessRequired !== !0;
}
function Pe({
  selectedConnectionsTab: e,
  showControlOtherDevices: t,
  showControlThisMacTab: n,
  showRemoteControlConnectionsSection: r,
  showRemoteSshConnections: i,
  showTabbedSshPage: a,
}) {
  return r
    ? e === `control-this-mac` && !n
      ? t
        ? `access-other-devices`
        : `ssh`
      : e === `access-other-devices` && !t
        ? n
          ? `control-this-mac`
          : `ssh`
        : e === `ssh` && !a
          ? t
            ? `access-other-devices`
            : `control-this-mac`
          : e
    : i
      ? `ssh`
      : `access-other-devices`;
}
var Fe = p(
    _,
    (e, { get: t }) =>
      t(k, `2296472986`) &&
      Ne({
        remoteControlConnectionsState: l(t, `remote_control_connections_state`),
        slingshotEnabled: t(k, `1042620455`),
      }) &&
      t(M, e).data?.requirements?.computerUse?.allowLockedComputerUse !== !1,
  ),
  Z = e(d()),
  Q = f(),
  Ie = (e) =>
    (0, Q.jsxs)(`svg`, {
      width: 18,
      height: 18,
      viewBox: `0 0 18 18`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M12.6673 9.45374C13.7358 9.45407 14.5577 10.3579 14.5579 11.4156V11.8239C15.1086 11.929 15.5247 12.4134 15.5247 12.9948V15.0504C15.5245 15.7084 14.9913 16.2418 14.3333 16.2418H11.0003C10.3423 16.2418 9.8081 15.7084 9.80789 15.0504V12.9948C9.80789 12.4134 10.2248 11.9291 10.7757 11.8239V11.4156C10.7759 10.3577 11.5984 9.45374 12.6673 9.45374ZM11.0003 12.8531C10.9221 12.8532 10.8587 12.9165 10.8587 12.9948V15.0504C10.8589 15.1285 10.9222 15.192 11.0003 15.192H14.3333C14.4114 15.192 14.4747 15.1285 14.4749 15.0504V12.9948C14.4749 12.9165 14.4115 12.8531 14.3333 12.8531H11.0003ZM12.6673 10.5045C12.2277 10.5045 11.8267 10.887 11.8264 11.4156V11.8024H13.5081V11.4156C13.5079 10.8873 13.1066 10.5049 12.6673 10.5045Z`,
          fill: `currentColor`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M8.2659 9.84534C8.55342 9.80818 8.81657 10.011 8.85379 10.2985C8.89088 10.5859 8.68813 10.8491 8.40067 10.8864C6.26147 11.1628 4.57997 12.9025 4.39188 15.068C4.36673 15.3568 4.11136 15.5706 3.82254 15.5455C3.53398 15.5202 3.32001 15.2658 3.345 14.9772C3.57594 12.3179 5.63935 10.1848 8.2659 9.84534Z`,
          fill: `currentColor`,
        }),
        (0, Q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M9.00028 2.31116C10.757 2.3113 12.1809 3.73602 12.1809 5.4928C12.1809 7.2495 10.757 8.67332 9.00028 8.67346C7.24346 8.67346 5.81872 7.24959 5.81863 5.4928C5.81863 3.73593 7.24341 2.31116 9.00028 2.31116ZM9.00028 3.36194C7.82331 3.36194 6.86942 4.31583 6.86942 5.4928C6.8695 6.66969 7.82336 7.62366 9.00028 7.62366C10.1771 7.62351 11.131 6.6696 11.1311 5.4928C11.1311 4.31592 10.1771 3.36208 9.00028 3.36194Z`,
          fill: `currentColor`,
        }),
      ],
    });
function Le({ browserExtensionId: e }) {
  return O({
    queryKey:
      e == null
        ? [`chrome-extension-installed-read`, `missing`]
        : T(`chrome-extension-installed-read`, { extensionId: e }),
    queryFn: async () =>
      e == null
        ? { installed: !1 }
        : w(`chrome-extension-installed-read`, { params: { extensionId: e } }),
    staleTime: C.FIVE_SECONDS,
  });
}
function Re(e) {
  return e?.installed === !0;
}
function ze(e) {
  let t = (0, X.c)(10),
    { browserExtensionId: n } = e,
    r = n != null,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = Le({ browserExtensionId: n })), (t[0] = n), (t[1] = i));
  let a;
  t[2] !== r || t[3] !== i
    ? ((a = {
        enabled: r,
        refetchOnWindowFocus: !0,
        staleTime: C.FIVE_SECONDS,
        ...i,
      }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a))
    : (a = t[4]);
  let { data: o, isLoading: s } = v(a),
    c;
  t[5] === o ? (c = t[6]) : ((c = Re(o)), (t[5] = o), (t[6] = c));
  let l = n != null && s,
    u;
  return (
    t[7] !== c || t[8] !== l
      ? ((u = { isConnected: c, isLoading: l }),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Be = `assets/google-chrome.png`,
  Ve = `scripts/extension-id.json`,
  He = `https://chromewebstore.google.com/detail/codex/`,
  Ue = t([`chrome`, `chrome-dev`, `chrome-internal`]),
  We = n({ extensionId: r().trim().min(1) });
async function Ge({ codexHome: e, hostId: t, plugin: n, queryClient: r }) {
  try {
    let i = Ye(e, n);
    if (i == null) return [];
    let a = { hostId: t, path: i };
    return await r.fetchQuery({
      queryFn: async () => {
        let t = await w(`read-file`, { params: a });
        return [
          Ze({
            codexHome: e,
            extensionId: We.parse(JSON.parse(t.contents)).extensionId,
            plugin: n,
          }),
        ];
      },
      queryKey: $e(a),
      retry: !1,
      staleTime: C.INFINITE,
    });
  } catch (e) {
    return (
      m.warning(`Failed to read plugin browser extension setup`, {
        safe: {},
        sensitive: { error: e, pluginId: n.plugin.id },
      }),
      []
    );
  }
}
function Ke(e) {
  let t = (0, X.c)(17),
    { enabled: n, hostId: r, plugin: i } = e,
    a = z(r),
    o,
    s,
    c,
    l;
  t[0] !== a || t[1] !== n || t[2] !== r || t[3] !== i
    ? ((o = Ye(a, i)),
      (l = v),
      (s = n && o != null),
      (c =
        o == null
          ? [`plugins`, `browser-extension-setup`, `missing`]
          : $e({ hostId: r, path: o })),
      (t[0] = a),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l))
    : ((o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]));
  let u;
  t[8] !== a || t[9] !== o || t[10] !== r || t[11] !== i
    ? ((u = async () => {
        if (o == null || i == null) return [];
        let e = await w(`read-file`, { params: { hostId: r, path: o } });
        return [
          Ze({
            codexHome: a,
            extensionId: We.parse(JSON.parse(e.contents)).extensionId,
            plugin: i,
          }),
        ];
      }),
      (t[8] = a),
      (t[9] = o),
      (t[10] = r),
      (t[11] = i),
      (t[12] = u))
    : (u = t[12]);
  let d;
  t[13] !== s || t[14] !== c || t[15] !== u
    ? ((d = {
        enabled: s,
        queryKey: c,
        queryFn: u,
        retry: !1,
        staleTime: C.INFINITE,
      }),
      (t[13] = s),
      (t[14] = c),
      (t[15] = u),
      (t[16] = d))
    : (d = t[16]);
  let { data: f } = l(d);
  return f;
}
async function qe({
  authPolicy: e,
  codexHome: t,
  hostId: n,
  plugin: r,
  queryClient: i,
  windowType: a,
}) {
  if (e !== `ON_INSTALL` || a !== `electron` || Xe(r) == null) return [];
  let o = await Ge({
    codexHome:
      t ?? (await w(`codex-home`, { params: { hostId: n } })).codexHome,
    hostId: n,
    plugin: await Je({ hostId: n, plugin: r }),
    queryClient: i,
  });
  return (
    await Promise.all(
      o.map(async (e) => ({
        browserExtension: e,
        needsSetup: !Re(
          await i.fetchQuery({
            ...Le({ browserExtensionId: e.id }),
            staleTime: 0,
          }),
        ),
      })),
    )
  )
    .filter(({ needsSetup: e }) => e)
    .map(({ browserExtension: e }) => e);
}
async function Je({ hostId: e, plugin: t }) {
  try {
    return W((await o(`read-plugin`, { hostId: e, ...fe(t) })).plugin);
  } catch (e) {
    return (
      m.warning(`Failed to read installed plugin browser extension setup`, {
        safe: {},
        sensitive: { error: e, pluginId: t.plugin.id },
      }),
      t
    );
  }
}
function Ye(e, t) {
  return e == null || t?.plugin.source.type !== `local` || Xe(t) == null
    ? null
    : u(
        i({
          codexHome: e,
          localVersion: t.plugin.localVersion,
          marketplaceName: t.marketplaceName,
          pluginName: t.plugin.name,
        }),
        Ve,
      );
}
function Xe(e) {
  let t = Ue.safeParse(e.plugin.name);
  return !t.success || !e.plugin.id.startsWith(`${t.data}@`) ? null : t.data;
}
function Ze({ codexHome: e, extensionId: t, plugin: n }) {
  return {
    iconUrl:
      Qe(
        e == null || n.plugin.source.type !== `local`
          ? null
          : u(
              i({
                codexHome: e,
                localVersion: n.plugin.localVersion,
                marketplaceName: n.marketplaceName,
                pluginName: n.plugin.name,
              }),
              Be,
            ),
      ) ?? Qe(n.logoPath),
    id: t,
    name: `Codex Chrome Extension`,
    url: `${He}${t}`,
  };
}
function Qe(e) {
  let t = e?.trim();
  if (t == null || t.length === 0) return null;
  let n = t.toLowerCase();
  return n.startsWith(`app:`) ||
    n.startsWith(`data:`) ||
    n.startsWith(`http:`) ||
    n.startsWith(`https:`) ||
    n.startsWith(`/@fs`)
    ? t
    : a(t)
      ? window.location.protocol === `http:` ||
        window.location.protocol === `https:`
        ? be(t)
        : xe(t)
      : null;
}
function $e({ hostId: e, path: t }) {
  return [`plugins`, `browser-extension-setup`, e, t];
}
var et = b({
    codexChromeDescription: {
      id: `plugins.installModal.browserExtension.description`,
      defaultMessage: `Install this extension in Chrome to let Codex connect to your browser`,
      description: `Description for the required Chrome browser extension in the plugin finish setup modal`,
    },
  }),
  tt = `OAI-Product-Sku`,
  nt = `CODEX`,
  rt = /\[([^\]]+)\]\(([^)]+)\)/g;
function it(e) {
  let t = (0, X.c)(82),
    {
      hostId: n,
      isInstalling: r,
      onConnectRequiredApp: i,
      onInstall: a,
      onOpenChange: o,
      session: s,
    } = e,
    c = r === void 0 ? !1 : r,
    [l, u] = (0, Z.useState)(null),
    [d, f] = (0, Z.useState)(null),
    { platform: p } = ce(),
    m = S(Fe, n),
    h = s.kind === `closed` ? null : s.plugin,
    g;
  t[0] !== n || t[1] !== s.kind || t[2] !== s.plugin
    ? ((g =
        s.kind === `details` ? { hostId: n, ...fe(s.plugin) } : { hostId: n }),
      (t[0] = n),
      (t[1] = s.kind),
      (t[2] = s.plugin),
      (t[3] = g))
    : (g = t[3]);
  let { blockedReason: _, isLoading: b } = Ce(g),
    x = h != null && we(h.plugin) ? `disabled-by-admin` : _,
    w = x != null,
    T = x === `disabled-by-admin`,
    ee = h?.marketplacePath ?? null,
    E;
  t[4] === h
    ? (E = t[5])
    : ((E = h == null ? null : pe(h)), (t[4] = h), (t[5] = E));
  let D = h?.remoteMarketplaceName ?? null,
    te = h != null,
    O;
  t[6] !== n || t[7] !== ee || t[8] !== E || t[9] !== D || t[10] !== te
    ? ((O = {
        hostId: n,
        marketplacePath: ee,
        pluginName: E,
        remoteMarketplaceName: D,
        enabled: te,
      }),
      (t[6] = n),
      (t[7] = ee),
      (t[8] = E),
      (t[9] = D),
      (t[10] = te),
      (t[11] = O))
    : (O = t[11]);
  let { plugin: ne } = Te(O),
    k = ne?.apps,
    A = s.kind === `details` && s.plugin.plugin.authPolicy === `ON_INSTALL`,
    re = k != null && k.length > 0,
    j;
  t[12] === k ? (j = t[13]) : ((j = k?.map(ct)), (t[12] = k), (t[13] = j));
  let M;
  t[14] === j
    ? (M = t[15])
    : ((M = [`plugins`, `install-modal`, `disclosure`, j]),
      (t[14] = j),
      (t[15] = M));
  let ie = A && re,
    N;
  t[16] === k
    ? (N = t[17])
    : ((N = async () => {
        if (k == null) throw Error(`plugin detail apps are required`);
        let e = await Promise.all(k.map(st));
        return {
          blurbs: Nt(e.flatMap(ot)),
          personalizationToggles: e.flatMap(at),
        };
      }),
      (t[16] = k),
      (t[17] = N));
  let ae;
  t[18] !== ie || t[19] !== N || t[20] !== M
    ? ((ae = {
        queryKey: M,
        enabled: ie,
        staleTime: C.FIVE_MINUTES,
        queryFn: N,
      }),
      (t[18] = ie),
      (t[19] = N),
      (t[20] = M),
      (t[21] = ae))
    : (ae = t[21]);
  let { data: P, isLoading: F } = v(ae);
  if (s.kind === `closed`) return null;
  let I = s.kind === `needsApps` ? `needsApps` : `details`,
    L = s.plugin,
    R,
    z,
    B,
    V;
  if (
    t[22] !== m ||
    t[23] !== P?.personalizationToggles ||
    t[24] !== d ||
    t[25] !== l ||
    t[26] !== I ||
    t[27] !== p ||
    t[28] !== L.plugin.id ||
    t[29] !== A
  ) {
    R = l?.pluginId === L.plugin.id ? l.modes : {};
    let e;
    (t[34] !== m || t[35] !== I || t[36] !== p || t[37] !== L.plugin.id
      ? ((e = I === `details` && p === `macOS` && m && ue(L.plugin.id)),
        (t[34] = m),
        (t[35] = I),
        (t[36] = p),
        (t[37] = L.plugin.id),
        (t[38] = e))
      : (e = t[38]),
      (B = e),
      (z = d?.pluginId === L.plugin.id ? d.enabled : !0),
      (V = Pt({
        draftModes: R,
        personalizationToggles: A ? P?.personalizationToggles : void 0,
      })),
      (t[22] = m),
      (t[23] = P?.personalizationToggles),
      (t[24] = d),
      (t[25] = l),
      (t[26] = I),
      (t[27] = p),
      (t[28] = L.plugin.id),
      (t[29] = A),
      (t[30] = R),
      (t[31] = z),
      (t[32] = B),
      (t[33] = V));
  } else ((R = t[30]), (z = t[31]), (B = t[32]), (V = t[33]));
  let H = V,
    le = A && re && F,
    U;
  t[39] !== c || t[40] !== o
    ? ((U = (e) => {
        (!e && c) || (e || (u(null), f(null)), o(e));
      }),
      (t[39] = c),
      (t[40] = o),
      (t[41] = U))
    : (U = t[41]);
  let de = !c,
    W;
  t[42] !== I || t[43] !== L
    ? ((W = (0, Q.jsx)(lt, { phase: I, plugin: L })),
      (t[42] = I),
      (t[43] = L),
      (t[44] = W))
    : (W = t[44]);
  let G;
  t[45] !== R ||
  t[46] !== H ||
  t[47] !== P ||
  t[48] !== n ||
  t[49] !== z ||
  t[50] !== F ||
  t[51] !== i ||
  t[52] !== I ||
  t[53] !== L ||
  t[54] !== ne ||
  t[55] !== s.kind ||
  t[56] !== s.requiredApps ||
  t[57] !== s.requiredBrowserExtensions ||
  t[58] !== B
    ? ((G =
        I === `details`
          ? (0, Q.jsx)(ut, {
              appPersonalizationModes: H,
              disclosureData: P,
              hostId: n,
              installLockedComputerUse: z,
              isLoadingDisclosureData: F,
              onAppPersonalizationModeChange: (e) => {
                let { appId: t, mode: n } = e;
                u({ modes: { ...R, [t]: n }, pluginId: L.plugin.id });
              },
              onInstallLockedComputerUseChange: (e) => {
                f({ enabled: e, pluginId: L.plugin.id });
              },
              plugin: L,
              pluginDetail: ne,
              showLockedComputerUseInstall: B,
            })
          : (0, Q.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                (0, Q.jsx)(bt, { plugin: L }),
                (0, Q.jsx)(St, {
                  onConnectRequiredApp: i,
                  requiredApps: s.kind === `needsApps` ? s.requiredApps : [],
                }),
                (0, Q.jsx)(Ct, {
                  requiredBrowserExtensions:
                    s.kind === `needsApps` ? s.requiredBrowserExtensions : [],
                }),
              ],
            })),
      (t[45] = R),
      (t[46] = H),
      (t[47] = P),
      (t[48] = n),
      (t[49] = z),
      (t[50] = F),
      (t[51] = i),
      (t[52] = I),
      (t[53] = L),
      (t[54] = ne),
      (t[55] = s.kind),
      (t[56] = s.requiredApps),
      (t[57] = s.requiredBrowserExtensions),
      (t[58] = B),
      (t[59] = G))
    : (G = t[59]);
  let K;
  t[60] !== H ||
  t[61] !== x ||
  t[62] !== z ||
  t[63] !== b ||
  t[64] !== T ||
  t[65] !== c ||
  t[66] !== le ||
  t[67] !== w ||
  t[68] !== a ||
  t[69] !== I ||
  t[70] !== L ||
  t[71] !== B
    ? ((K =
        I === `details`
          ? (0, Q.jsx)(oe, {
              tooltipContent:
                x === `connector-unavailable`
                  ? (0, Q.jsx)(y, {
                      id: `plugins.install.connectorUnavailable`,
                      defaultMessage: `App unavailable`,
                      description: `Tooltip shown when plugin install is unavailable because the plugin's apps are not available in the current app directory`,
                    })
                  : null,
              disabled: x !== `connector-unavailable`,
              children: (0, Q.jsx)(`div`, {
                className: `flex w-full`,
                children: (0, Q.jsx)(se, {
                  color: `primary`,
                  size: `large`,
                  className: `w-full justify-center`,
                  disabled: w || b || le,
                  loading: c,
                  onClick: () => {
                    a(H, B ? z : void 0);
                  },
                  children: c
                    ? (0, Q.jsx)(y, {
                        id: `plugins.installModal.installing`,
                        defaultMessage: `Installing {pluginName}`,
                        description: `Button label in the plugin install modal while installation is in progress`,
                        values: { pluginName: q(L) },
                      })
                    : T
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            (0, Q.jsx)(Ie, { className: `icon-sm` }),
                            (0, Q.jsx)(y, {
                              id: `plugins.detail.disabledByAdminButton`,
                              defaultMessage: `Disabled by admin`,
                              description: `Install button label shown when plugin install is unavailable because all included connectors are disabled by admin`,
                            }),
                          ],
                        })
                      : (0, Q.jsx)(y, {
                          id: `plugins.installModal.install`,
                          defaultMessage: `Install {pluginName}`,
                          description: `Install button label in the plugin install modal`,
                          values: { pluginName: q(L) },
                        }),
                }),
              }),
            })
          : null),
      (t[60] = H),
      (t[61] = x),
      (t[62] = z),
      (t[63] = b),
      (t[64] = T),
      (t[65] = c),
      (t[66] = le),
      (t[67] = w),
      (t[68] = a),
      (t[69] = I),
      (t[70] = L),
      (t[71] = B),
      (t[72] = K))
    : (K = t[72]);
  let J;
  t[73] !== W || t[74] !== G || t[75] !== K
    ? ((J = (0, Q.jsxs)(he, {
        className: `max-h-[calc(100vh-4rem)] gap-6 overflow-y-auto px-6 pt-8 pb-6`,
        children: [W, G, K],
      })),
      (t[73] = W),
      (t[74] = G),
      (t[75] = K),
      (t[76] = J))
    : (J = t[76]);
  let ge;
  return (
    t[77] !== c || t[78] !== U || t[79] !== de || t[80] !== J
      ? ((ge = (0, Q.jsx)(me, {
          open: !0,
          onOpenChange: U,
          shouldIgnoreClickOutside: c,
          showDialogClose: de,
          size: `wide`,
          contentClassName: `max-h-[calc(100vh-4rem)] overflow-hidden`,
          children: J,
        })),
        (t[77] = c),
        (t[78] = U),
        (t[79] = de),
        (t[80] = J),
        (t[81] = ge))
      : (ge = t[81]),
    ge
  );
}
function at(e) {
  let { app: t, connectorTos: n } = e;
  return n.personalization_toggle_blurb == null
    ? []
    : [
        {
          appId: t.id,
          appName: t.name,
          blurb: n.personalization_toggle_blurb,
          defaultMode: n.personalization_default ?? `NO_PERSONALIZATION`,
        },
      ];
}
function ot(e) {
  let { connectorTos: t } = e;
  return t.blurbs;
}
async function st(e) {
  return {
    app: e,
    connectorTos: await A.safeGet(`/aip/connectors/{connector_id}/tos`, {
      parameters: { path: { connector_id: e.id } },
      additionalHeaders: { [tt]: nt },
    }),
  };
}
function ct(e) {
  return e.id;
}
function lt(e) {
  let t = (0, X.c)(21),
    { phase: n, plugin: r } = e,
    i;
  t[0] === r.plugin.interface?.developerName
    ? (i = t[1])
    : ((i = r.plugin.interface?.developerName?.trim()),
      (t[0] = r.plugin.interface?.developerName),
      (t[1] = i));
  let a = i,
    o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(`span`, {
        className: `flex size-14 shrink-0 items-center justify-center rounded-xl bg-black text-white shadow-sm`,
        children: (0, Q.jsx)(ye, { className: `size-12` }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsxs)(`span`, {
        className: `flex items-center gap-1`,
        children: [
          (0, Q.jsx)(`span`, {
            className: `size-1.5 rounded-full bg-token-border-default`,
          }),
          (0, Q.jsx)(`span`, {
            className: `size-1.5 rounded-full bg-token-border-default`,
          }),
          (0, Q.jsx)(`span`, {
            className: `size-1.5 rounded-full bg-token-border-default`,
          }),
        ],
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === r ? (c = t[5]) : ((c = q(r)), (t[4] = r), (t[5] = c));
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(B, { className: `icon-md text-token-text-secondary` })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== r.logoPath || t[8] !== c
    ? ((u = (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [
          o,
          s,
          (0, Q.jsx)(`span`, {
            className: `bg-token-surface-tertiary flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-token-border-default shadow-sm`,
            children: (0, Q.jsx)(L, {
              alt: c,
              className: `size-full object-contain`,
              logoUrl: r.logoPath,
              fallback: l,
            }),
          }),
        ],
      })),
      (t[7] = r.logoPath),
      (t[8] = c),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== n || t[11] !== r
    ? ((d = (0, Q.jsx)(`div`, {
        className: `heading-dialog font-semibold`,
        children:
          n === `details`
            ? (0, Q.jsx)(y, {
                id: `plugins.installModal.title`,
                defaultMessage: `Install {pluginName}`,
                description: `Title shown in the plugin install modal before installation starts`,
                values: { pluginName: q(r) },
              })
            : (0, Q.jsx)(y, {
                id: `plugins.installModal.finishSetup.title`,
                defaultMessage: `Finish setting up {pluginName}`,
                description: `Title shown in the plugin install modal when additional app connections are required`,
                values: { pluginName: q(r) },
              }),
      })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = d))
    : (d = t[12]);
  let f;
  t[13] === a
    ? (f = t[14])
    : ((f = a
        ? (0, Q.jsx)(`div`, {
            className: `text-sm text-token-text-secondary`,
            children: (0, Q.jsx)(y, {
              id: `plugins.installModal.developedBy`,
              defaultMessage: `Developed by {developerName}`,
              description: `Developer subtitle shown in the plugin install modal`,
              values: { developerName: a },
            }),
          })
        : null),
      (t[13] = a),
      (t[14] = f));
  let p;
  t[15] !== d || t[16] !== f
    ? ((p = (0, Q.jsxs)(`div`, {
        className: `flex flex-col items-center gap-1 text-center`,
        children: [d, f],
      })),
      (t[15] = d),
      (t[16] = f),
      (t[17] = p))
    : (p = t[17]);
  let m;
  return (
    t[18] !== u || t[19] !== p
      ? ((m = (0, Q.jsxs)(`div`, {
          className: `flex flex-col items-center gap-4`,
          children: [u, p],
        })),
        (t[18] = u),
        (t[19] = p),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function ut(e) {
  let t = (0, X.c)(37),
    {
      appPersonalizationModes: n,
      disclosureData: r,
      hostId: i,
      installLockedComputerUse: a,
      isLoadingDisclosureData: o,
      onAppPersonalizationModeChange: s,
      onInstallLockedComputerUseChange: c,
      plugin: l,
      pluginDetail: u,
      showLockedComputerUseInstall: d,
    } = e,
    f;
  t[0] === l ? (f = t[1]) : ((f = Ft(l)), (t[0] = l), (t[1] = f));
  let p = f,
    m;
  t[2] === l.plugin.interface?.capabilities
    ? (m = t[3])
    : ((m = l.plugin.interface?.capabilities ?? []),
      (t[2] = l.plugin.interface?.capabilities),
      (t[3] = m));
  let h = m,
    g = (u?.apps.length ?? 0) > 0 && u?.summary.authPolicy === `ON_INSTALL`,
    _;
  t[4] !== l || t[5] !== g
    ? ((_ = g ? null : (0, Q.jsx)(At, { plugin: l })),
      (t[4] = l),
      (t[5] = g),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] !== p || t[8] !== g
    ? ((v =
        !g && p
          ? (0, Q.jsxs)($, {
              children: [
                (0, Q.jsx)(`div`, {
                  className: `text-sm font-medium text-token-text-primary`,
                  children: (0, Q.jsx)(y, {
                    id: `plugins.installModal.about`,
                    defaultMessage: `About`,
                    description: `Section title for the plugin description in the plugin install modal`,
                  }),
                }),
                (0, Q.jsx)(`div`, {
                  className: `max-h-40 overflow-y-auto pr-1 text-sm text-token-text-secondary`,
                  children: p,
                }),
              ],
            })
          : null),
      (t[7] = p),
      (t[8] = g),
      (t[9] = v))
    : (v = t[9]);
  let b;
  t[10] !== i || t[11] !== l || t[12] !== u || t[13] !== g
    ? ((b =
        !g && u != null
          ? (0, Q.jsx)(ft, { hostId: i, plugin: l, pluginDetail: u })
          : null),
      (t[10] = i),
      (t[11] = l),
      (t[12] = u),
      (t[13] = g),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] !== a || t[16] !== c || t[17] !== u || t[18] !== g || t[19] !== d
    ? ((x =
        !g && u != null && d
          ? (0, Q.jsx)(vt, { enabled: a, onChange: c })
          : null),
      (t[15] = a),
      (t[16] = c),
      (t[17] = u),
      (t[18] = g),
      (t[19] = d),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== h || t[22] !== g
    ? ((S =
        !g && h.length > 0
          ? (0, Q.jsxs)($, {
              children: [
                (0, Q.jsx)(`div`, {
                  className: `text-sm font-medium text-token-text-primary`,
                  children: (0, Q.jsx)(y, {
                    id: `plugins.installModal.capabilities`,
                    defaultMessage: `Capabilities`,
                    description: `Section title for the capability list in the plugin install modal`,
                  }),
                }),
                (0, Q.jsx)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: h.map(dt),
                }),
              ],
            })
          : null),
      (t[21] = h),
      (t[22] = g),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] !== n || t[25] !== r || t[26] !== o || t[27] !== s || t[28] !== g
    ? ((C = g
        ? (0, Q.jsx)(xt, {
            appPersonalizationModes: n,
            disclosureData: r,
            isLoadingDisclosureData: o,
            onAppPersonalizationModeChange: s,
          })
        : null),
      (t[24] = n),
      (t[25] = r),
      (t[26] = o),
      (t[27] = s),
      (t[28] = g),
      (t[29] = C))
    : (C = t[29]);
  let w;
  return (
    t[30] !== _ ||
    t[31] !== v ||
    t[32] !== b ||
    t[33] !== x ||
    t[34] !== S ||
    t[35] !== C
      ? ((w = (0, Q.jsxs)(`div`, {
          className: `rounded-2xl border border-token-border-default px-4 py-2`,
          children: [_, v, b, x, S, C],
        })),
        (t[30] = _),
        (t[31] = v),
        (t[32] = b),
        (t[33] = x),
        (t[34] = S),
        (t[35] = C),
        (t[36] = w))
      : (w = t[36]),
    w
  );
}
function dt(e) {
  return (0, Q.jsx)(
    Y,
    {
      className: `border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary`,
      children: e,
    },
    e,
  );
}
function ft(e) {
  let t = (0, X.c)(20),
    { hostId: n, plugin: r, pluginDetail: i } = e,
    a;
  t[0] !== n || t[1] !== r
    ? ((a = { enabled: !0, hostId: n, plugin: r }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o = Ke(a),
    s = i.apps,
    c,
    l,
    u,
    d,
    f;
  if (
    t[3] !== o ||
    t[4] !== i.apps ||
    t[5] !== i.mcpServers ||
    t[6] !== i.skills
  ) {
    f = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = [
        {
          id: `apps`,
          items: s.map(_t),
          title: (0, Q.jsx)(y, {
            id: `plugins.installModal.includes.apps`,
            defaultMessage: `Apps`,
            description: `Label for bundled apps in the plugin install modal`,
          }),
        },
        {
          id: `browserExtensions`,
          items: (o ?? []).map(gt),
          title: (0, Q.jsx)(y, {
            id: `plugins.installModal.includes.browserExtensions`,
            defaultMessage: `Browser extensions`,
            description: `Label for bundled browser extensions in the plugin install modal`,
          }),
        },
        {
          id: `skills`,
          items: i.skills.map(ht),
          title: (0, Q.jsx)(y, {
            id: `plugins.installModal.includes.skills`,
            defaultMessage: `Skills`,
            description: `Label for bundled skills in the plugin install modal`,
          }),
        },
        {
          id: `mcpServers`,
          items: i.mcpServers,
          title: (0, Q.jsx)(y, {
            id: `plugins.installModal.includes.mcpServers`,
            defaultMessage: `MCP servers`,
            description: `Label for bundled MCP servers in the plugin install modal`,
          }),
        },
      ].filter(mt);
      if (e.length === 0) {
        f = null;
        break bb0;
      }
      ((c = $),
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((d = (0, Q.jsx)(`div`, {
              className: `text-sm font-medium text-token-text-primary`,
              children: (0, Q.jsx)(y, {
                id: `plugins.installModal.includes`,
                defaultMessage: `Includes`,
                description: `Section title for bundled apps, skills, and MCP servers in the plugin install modal`,
              }),
            })),
            (t[12] = d))
          : (d = t[12]),
        (l = `flex flex-col gap-3`),
        (u = e.map(pt)));
    }
    ((t[3] = o),
      (t[4] = i.apps),
      (t[5] = i.mcpServers),
      (t[6] = i.skills),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f));
  } else ((c = t[7]), (l = t[8]), (u = t[9]), (d = t[10]), (f = t[11]));
  if (f !== Symbol.for(`react.early_return_sentinel`)) return f;
  let p;
  t[13] !== l || t[14] !== u
    ? ((p = (0, Q.jsx)(`div`, { className: l, children: u })),
      (t[13] = l),
      (t[14] = u),
      (t[15] = p))
    : (p = t[15]);
  let m;
  return (
    t[16] !== c || t[17] !== d || t[18] !== p
      ? ((m = (0, Q.jsxs)(c, { children: [d, p] })),
        (t[16] = c),
        (t[17] = d),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
function pt(e) {
  return (0, Q.jsxs)(
    `div`,
    {
      className: `flex flex-col gap-2`,
      children: [
        (0, Q.jsx)(`div`, {
          className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
          children: e.title,
        }),
        (0, Q.jsx)(`div`, {
          className: `flex flex-wrap gap-2`,
          children: e.items.map((t) =>
            (0, Q.jsx)(
              Y,
              {
                className: `border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary`,
                children: t,
              },
              `${e.id}-${t}`,
            ),
          ),
        }),
      ],
    },
    e.id,
  );
}
function mt(e) {
  return e.items.length > 0;
}
function ht(e) {
  return It(e);
}
function gt(e) {
  return e.name;
}
function _t(e) {
  return e.name;
}
function vt(e) {
  let t = (0, X.c)(8),
    { enabled: n, onChange: r } = e,
    i = h(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(`div`, {
        className: `text-sm font-medium text-token-text-primary`,
        children: (0, Q.jsx)(y, {
          id: `plugins.installModal.lockedComputerUse.title`,
          defaultMessage: `Locked Computer Use`,
          description: `Title for the Locked Computer Use install option in the plugin install modal`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          a,
          (0, Q.jsx)(`div`, {
            className: `text-sm text-token-text-secondary`,
            children: (0, Q.jsx)(y, {
              id: `plugins.installModal.lockedComputerUse.description`,
              defaultMessage: `Let Codex use your Mac when it's locked. <a>Learn more</a>`,
              description: `Description for the Locked Computer Use install option in the plugin install modal`,
              values: { a: yt },
            }),
          }),
        ],
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === i
    ? (s = t[3])
    : ((s = i.formatMessage({
        id: `plugins.installModal.lockedComputerUse.toggle`,
        defaultMessage: `Install Locked Computer Use`,
        description: `Accessible label for the Locked Computer Use install option in the plugin install modal`,
      })),
      (t[2] = i),
      (t[3] = s));
  let c;
  return (
    t[4] !== n || t[5] !== r || t[6] !== s
      ? ((c = (0, Q.jsx)($, {
          children: (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-between gap-4`,
            children: [
              o,
              (0, Q.jsx)(Ee, { checked: n, ariaLabel: s, onChange: r }),
            ],
          }),
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function yt(e) {
  return (0, Q.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: ve,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function bt(e) {
  let t = (0, X.c)(2),
    { plugin: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`div`, {
          className: `rounded-2xl border border-token-border-default px-4 py-2`,
          children: (0, Q.jsx)(At, { plugin: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function xt(e) {
  let t = (0, X.c)(6),
    {
      appPersonalizationModes: n,
      disclosureData: r,
      isLoadingDisclosureData: i,
      onAppPersonalizationModeChange: a,
    } = e;
  if (i) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)($, { children: (0, Q.jsx)(Et, {}) })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (
    r == null ||
    (r.blurbs.length === 0 && r.personalizationToggles.length === 0)
  )
    return null;
  let o;
  return (
    t[1] !== n ||
    t[2] !== r.blurbs ||
    t[3] !== r.personalizationToggles ||
    t[4] !== a
      ? ((o = (0, Q.jsx)($, {
          children: (0, Q.jsx)(Ot, {
            appPersonalizationModes: n,
            blurbs: r.blurbs,
            onAppPersonalizationModeChange: a,
            personalizationToggles: r.personalizationToggles,
          }),
        })),
        (t[1] = n),
        (t[2] = r.blurbs),
        (t[3] = r.personalizationToggles),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function St(e) {
  let t = (0, X.c)(8),
    { onConnectRequiredApp: n, requiredApps: r } = e;
  if (r.length === 0) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(`div`, {
        className: `text-base font-semibold text-token-text-primary`,
        children: (0, Q.jsx)(y, {
          id: `plugins.installModal.requiredApps`,
          defaultMessage: `Required apps`,
          description: `Section title for apps that need to be connected after plugin install`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  if (t[1] !== n || t[2] !== r) {
    let e;
    (t[4] === n
      ? (e = t[5])
      : ((e = (e) =>
          (0, Q.jsxs)(
            `div`,
            {
              className: `flex items-center justify-between gap-3 border-t border-token-border-default py-3 first:border-none first:pt-0 last:pb-0`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `flex min-w-0 flex-1 items-center gap-3`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      className: `bg-token-surface-tertiary flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border-default`,
                      children: (0, Q.jsx)(L, {
                        alt: e.name,
                        className: `size-full object-contain`,
                        logoUrl: e.logoUrl,
                        fallback: (0, Q.jsx)(B, {
                          className: `icon-md text-token-text-secondary`,
                        }),
                      }),
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `min-w-0 flex-1`,
                      children: [
                        (0, Q.jsx)(`div`, {
                          className: `truncate text-sm font-medium text-token-text-primary`,
                          children: e.name,
                        }),
                        e.description
                          ? (0, Q.jsx)(`div`, {
                              className: `mt-1 text-sm text-token-text-secondary`,
                              children: e.description,
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, Q.jsx)(se, {
                  color: e.status === `connected` ? `outline` : `primary`,
                  size: `medium`,
                  disabled: e.status !== `pending`,
                  loading:
                    e.status === `launching` ||
                    e.status === `waitingForCallback`,
                  className: `min-w-24 shrink-0 justify-center`,
                  onClick: () => {
                    n(e.appId);
                  },
                  children: kt(e.status),
                }),
              ],
            },
            e.appId,
          )),
        (t[4] = n),
        (t[5] = e)),
      (a = r.map(e)),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[6] === a
      ? (o = t[7])
      : ((o = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-3`,
          children: [
            i,
            (0, Q.jsx)(`div`, { className: `flex flex-col`, children: a }),
          ],
        })),
        (t[6] = a),
        (t[7] = o)),
    o
  );
}
function Ct(e) {
  let t = (0, X.c)(5),
    { requiredBrowserExtensions: n } = e;
  if (n.length === 0) return null;
  let r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(`div`, {
        className: `text-base font-semibold text-token-text-primary`,
        children: (0, Q.jsx)(y, {
          id: `plugins.installModal.requiredBrowserExtensions`,
          defaultMessage: `Required browser extensions`,
          description: `Section title for browser extensions that need to be opened after plugin install`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n ? (i = t[2]) : ((i = n.map(wt)), (t[1] = n), (t[2] = i));
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-3`,
          children: [
            r,
            (0, Q.jsx)(`div`, { className: `flex flex-col`, children: i }),
          ],
        })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
function wt(e) {
  return (0, Q.jsxs)(
    `div`,
    {
      className: `flex items-center justify-between gap-3 border-t border-token-border-default py-3 first:border-none first:pt-0 last:pb-0`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 items-center gap-3`,
          children: [
            (0, Q.jsx)(L, {
              alt: e.name,
              className: `size-10 shrink-0`,
              fallback: (0, Q.jsx)(B, {
                className: `size-10 text-token-text-secondary`,
              }),
              logoUrl: e.iconUrl,
            }),
            (0, Q.jsxs)(`div`, {
              className: `min-w-0 flex-1`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `truncate text-sm font-medium text-token-text-primary`,
                  children: e.name,
                }),
                (0, Q.jsx)(`div`, {
                  className: `mt-1 text-sm text-token-text-secondary`,
                  children: (0, Q.jsx)(y, { ...et.codexChromeDescription }),
                }),
              ],
            }),
          ],
        }),
        (0, Q.jsx)(se, {
          color: `primary`,
          size: `medium`,
          className: `min-w-24 shrink-0 justify-center`,
          onClick: () => {
            D.dispatchMessage(`open-in-browser`, { url: e.url });
          },
          children: (0, Q.jsx)(y, {
            id: `plugins.installModal.openBrowserExtension`,
            defaultMessage: `Open`,
            description: `Button label to open a browser extension setup URL`,
          }),
        }),
      ],
    },
    e.id,
  );
}
function Tt(e) {
  let t = (0, X.c)(10),
    { children: n, url: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = r?.trim()), (t[0] = r), (t[1] = i));
  let a = i;
  if (!a) {
    let e;
    return (
      t[2] === n
        ? (e = t[3])
        : ((e = (0, Q.jsx)(Q.Fragment, { children: n })),
          (t[2] = n),
          (t[3] = e)),
      e
    );
  }
  let o;
  t[4] === a
    ? (o = t[5])
    : ((o = (e) => {
        (e.preventDefault(), D.dispatchMessage(`open-in-browser`, { url: a }));
      }),
      (t[4] = a),
      (t[5] = o));
  let s;
  return (
    t[6] !== n || t[7] !== a || t[8] !== o
      ? ((s = (0, Q.jsx)(`a`, {
          href: a,
          className: `underline underline-offset-2 hover:no-underline`,
          onClick: o,
          children: n,
        })),
        (t[6] = n),
        (t[7] = a),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Et() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`div`, {
          children: Array.from({ length: 3 }).map(Dt),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Dt(e, t) {
  return (0, Q.jsxs)(
    `div`,
    {
      className: `flex flex-col gap-1 border-t border-token-border-default py-2.5 first:border-none first:pt-0 last:pb-0`,
      children: [
        (0, Q.jsx)(`div`, {
          className: `h-3 w-36 rounded bg-token-border-default`,
        }),
        (0, Q.jsx)(`div`, {
          className: `h-2.5 w-full rounded bg-token-border-default`,
        }),
        (0, Q.jsx)(`div`, {
          className: `h-2.5 w-4/5 rounded bg-token-border-default`,
        }),
      ],
    },
    t,
  );
}
function Ot(e) {
  let t = (0, X.c)(17),
    {
      appPersonalizationModes: n,
      blurbs: r,
      onAppPersonalizationModeChange: i,
      personalizationToggles: a,
    } = e,
    o = h(),
    s;
  if (t[0] !== n || t[1] !== o || t[2] !== i || t[3] !== a) {
    let e;
    (t[5] !== n || t[6] !== o || t[7] !== i
      ? ((e = (e) =>
          (0, Q.jsxs)(
            `div`,
            {
              className: `flex items-start justify-between gap-4 border-t border-token-border-default py-2.5 first:border-none first:pt-0 last:pb-0`,
              children: [
                (0, Q.jsxs)(`div`, {
                  className: `min-w-0 flex-1`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `font-medium text-token-text-primary`,
                      children: e.blurb.title,
                    }),
                    (0, Q.jsx)(`div`, { children: Mt(e.blurb.description) }),
                  ],
                }),
                (0, Q.jsx)(Ee, {
                  checked: n[e.appId] === `PERSONALIZE_ALWAYS`,
                  ariaLabel: o.formatMessage(
                    {
                      id: `plugins.installModal.personalizationToggle`,
                      defaultMessage: `Allow ChatGPT to use reference memories and chats for {appName}`,
                      description: `Accessible label for the personalization toggle in the plugin install modal`,
                    },
                    { appName: e.appName },
                  ),
                  onChange: (t) => {
                    i({
                      appId: e.appId,
                      mode: t ? `PERSONALIZE_ALWAYS` : `NO_PERSONALIZATION`,
                    });
                  },
                }),
              ],
            },
            e.appId,
          )),
        (t[5] = n),
        (t[6] = o),
        (t[7] = i),
        (t[8] = e))
      : (e = t[8]),
      (s = a.map(e)),
      (t[0] = n),
      (t[1] = o),
      (t[2] = i),
      (t[3] = a),
      (t[4] = s));
  } else s = t[4];
  let c;
  if (t[9] !== r || t[10] !== a.length) {
    let e;
    (t[12] === a.length
      ? (e = t[13])
      : ((e = (e, t) =>
          (0, Q.jsxs)(
            `div`,
            {
              className:
                a.length > 0 || t > 0
                  ? `flex flex-col gap-1 border-t border-token-border-default py-2.5 last:pb-0`
                  : `flex flex-col gap-1 py-2.5 first:pt-0 last:pb-0`,
              children: [
                (0, Q.jsx)(`div`, {
                  className: `font-medium text-token-text-primary`,
                  children: e.title,
                }),
                (0, Q.jsx)(`div`, { children: Mt(e.description) }),
              ],
            },
            `${e.title}-${t}`,
          )),
        (t[12] = a.length),
        (t[13] = e)),
      (c = r.map(e)),
      (t[9] = r),
      (t[10] = a.length),
      (t[11] = c));
  } else c = t[11];
  let l;
  return (
    t[14] !== s || t[15] !== c
      ? ((l = (0, Q.jsxs)(`div`, {
          className: `text-sm text-token-text-secondary`,
          children: [s, c],
        })),
        (t[14] = s),
        (t[15] = c),
        (t[16] = l))
      : (l = t[16]),
    l
  );
}
function kt(e) {
  switch (e) {
    case `connected`:
      return (0, Q.jsx)(y, {
        id: `plugins.installModal.requiredApps.connected`,
        defaultMessage: `Connected`,
        description: `Button label shown for a required app that is already connected`,
      });
    case `launching`:
    case `waitingForCallback`:
      return (0, Q.jsx)(y, {
        id: `plugins.installModal.requiredApps.connecting`,
        defaultMessage: `Opened link`,
        description: `Button label shown after the required app connection flow has been opened`,
      });
    case `pending`:
      return (0, Q.jsx)(y, {
        id: `plugins.installModal.requiredApps.connect`,
        defaultMessage: `Connect`,
        description: `Button label shown for a required app that still needs to be connected`,
      });
  }
}
function At(e) {
  let t = (0, X.c)(14),
    { plugin: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = q(n)), (t[0] = n), (t[1] = r));
  let i;
  t[2] === r
    ? (i = t[3])
    : ((i = (0, Q.jsx)(`div`, {
        className: `text-sm font-medium text-token-text-primary`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = i));
  let a;
  t[4] === n.marketplaceName
    ? (a = t[5])
    : ((a =
        n.marketplaceName.length > 0
          ? (0, Q.jsx)(Y, {
              className: `border border-token-border-default bg-transparent px-1.5 py-0.5 text-xs font-medium text-token-text-secondary`,
              children: n.marketplaceName,
            })
          : null),
      (t[4] = n.marketplaceName),
      (t[5] = a));
  let o;
  t[6] !== i || t[7] !== a
    ? ((o = (0, Q.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: [i, a],
      })),
      (t[6] = i),
      (t[7] = a),
      (t[8] = o))
    : (o = t[8]);
  let s;
  t[9] === n
    ? (s = t[10])
    : ((s = (0, Q.jsx)(jt, { plugin: n })), (t[9] = n), (t[10] = s));
  let c;
  return (
    t[11] !== o || t[12] !== s
      ? ((c = (0, Q.jsxs)($, { children: [o, s] })),
        (t[11] = o),
        (t[12] = s),
        (t[13] = c))
      : (c = t[13]),
    c
  );
}
function jt(e) {
  let t = (0, X.c)(11),
    { plugin: n } = e,
    r;
  t[0] === n.plugin.interface?.developerName
    ? (r = t[1])
    : ((r = n.plugin.interface?.developerName?.trim()),
      (t[0] = n.plugin.interface?.developerName),
      (t[1] = r));
  let i = r,
    a;
  t[2] === n.plugin.interface?.category
    ? (a = t[3])
    : ((a = n.plugin.interface?.category?.trim()),
      (t[2] = n.plugin.interface?.category),
      (t[3] = a));
  let o = a;
  if (i == null && o == null) return null;
  let s;
  t[4] === i
    ? (s = t[5])
    : ((s = i
        ? (0, Q.jsx)(`div`, {
            children: (0, Q.jsx)(y, {
              id: `plugins.installModal.metadata.developer`,
              defaultMessage: `By {developerName}`,
              description: `Developer metadata shown in the plugin install modal`,
              values: { developerName: i },
            }),
          })
        : null),
      (t[4] = i),
      (t[5] = s));
  let c;
  t[6] === o
    ? (c = t[7])
    : ((c = o
        ? (0, Q.jsx)(`div`, {
            children: (0, Q.jsx)(y, {
              id: `plugins.installModal.metadata.category`,
              defaultMessage: `Category: {category}`,
              description: `Category metadata shown in the plugin install modal`,
              values: { category: o },
            }),
          })
        : null),
      (t[6] = o),
      (t[7] = c));
  let l;
  return (
    t[8] !== s || t[9] !== c
      ? ((l = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-1 text-sm text-token-text-secondary`,
          children: [s, c],
        })),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function $(e) {
  let t = (0, X.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`div`, {
          className: `flex flex-col gap-2 border-b border-token-border-default py-3 last:border-none`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Mt(e) {
  let t = [],
    n = 0,
    r;
  for (; (r = rt.exec(e)) != null; ) {
    r.index > n && t.push(e.slice(n, r.index));
    let [i, a, o] = r,
      s = o.trim();
    if (s.length === 0) {
      (t.push(a), (n = r.index + i.length));
      continue;
    }
    (t.push((0, Q.jsx)(Tt, { url: s, children: a }, `${s}-${r.index}`)),
      (n = r.index + i.length));
  }
  return (
    n < e.length && t.push(e.slice(n)),
    t.length === 0 ? e : t.length === 1 ? t[0] : t
  );
}
function Nt(e) {
  let t = new Set();
  return e.flatMap((e) => {
    let n = `${e.title}\u0000${e.description}`;
    return t.has(n)
      ? []
      : (t.add(n), [{ description: e.description, title: e.title }]);
  });
}
function Pt({ draftModes: e, personalizationToggles: t }) {
  let n = { ...e };
  if (t == null) return n;
  for (let e of t) n[e.appId] ??= e.defaultMode;
  return n;
}
function Ft(e) {
  return (
    e.plugin.interface?.longDescription?.trim() ||
    e.plugin.interface?.shortDescription?.trim() ||
    e.description?.trim() ||
    null
  );
}
function It(e) {
  return (
    e.interface?.displayName?.trim() || c(e.name.split(`:`).pop() || e.name)
  );
}
function Lt({ forceReloadPlugins: e, hostId: t }) {
  let n = x(_),
    r = h(),
    i = te(),
    a = g(),
    c = z(t),
    l = n.query.snapshot(Ae),
    u = re(),
    [, d] = s(`composer_prefill`),
    f = ne(`2761268526`),
    { data: p } = S(j, t),
    {
      clearPendingAppConnect: v,
      isAppConnectPending: y,
      markAppConnectOAuthPending: b,
    } = Oe(),
    {
      closePluginInstall: C,
      markRequiredAppStatus: w,
      openPluginInstall: T,
      session: E,
      setPluginInstallNeedsApps: O,
    } = V(),
    { data: k = [], hardRefetchAppsList: A } = F({
      enabled: E.kind === `needsApps`,
      hostId: t,
    }),
    M = H({ hostId: t }),
    ie = le({ hostId: t }),
    L = U({ hostId: t }),
    oe = M.available,
    se = ie.available,
    B = L.available,
    [ce, W] = (0, Z.useState)({}),
    [pe, me] = (0, Z.useState)(!1),
    he = ee({
      mutationFn: async (e) => {
        let n = await o(`install-plugin`, { hostId: t, ...fe(e) });
        return (
          await J({
            hostId: t,
            marketplacePath: e.marketplacePath,
            pluginName: e.plugin.name,
          }),
          n
        );
      },
    }),
    ve = pe || he.isPending,
    Y = Rt({ apps: k, isAppConnectPending: y, session: E }),
    ye =
      Y.kind === `needsApps` &&
      Y.requiredBrowserExtensions.length === 0 &&
      Y.requiredApps.length > 0 &&
      Y.requiredApps.every((e) => e.status === `connected`),
    be = (0, Z.useEffectEvent)((t) => {
      C();
      let i = t.postInstallComposerPrefill?.trim();
      (i && d({ text: i }),
        n.get(R).success(
          r.formatMessage(
            {
              id: `plugins.install.ready`,
              defaultMessage: `{pluginName} is ready.`,
              description: `Toast shown when all required apps are connected for a plugin install flow`,
            },
            { pluginName: q(t.plugin) },
          ),
        ),
        e().catch((e) => {
          m.error(`Failed to refresh plugins after plugin app setup`, {
            safe: {},
            sensitive: { error: e },
          });
        }));
    });
  (0, Z.useEffect)(() => {
    !ye || Y.kind !== `needsApps` || be(Y);
  }, [ye, Y]);
  async function xe(e, o) {
    if (e.status !== `pending`) return;
    let s = e.installUrl?.trim();
    if (!f && s) {
      D.dispatchMessage(`open-in-browser`, { url: s });
      return;
    }
    (v({ appId: e.appId }), w({ appId: e.appId, status: `launching` }));
    let c = await I({
      app: { id: e.appId, installUrl: e.installUrl, name: e.name },
      openInBrowser: (e) => {
        D.dispatchMessage(`open-in-browser`, { url: e });
      },
      personalizationMode: o?.[e.appId] ?? ce[e.appId] ?? `NO_PERSONALIZATION`,
      queryClient: a,
    });
    switch (c.kind) {
      case `connected-directly`:
        (w({ appId: e.appId, status: `connected` }),
          n.get(R).success(N({ appName: e.name, intl: r })));
        try {
          await De({ hostId: t, queryClient: a, refreshAppsList: A });
        } catch (e) {
          m.error(`Failed to refresh apps after direct plugin app connect`, {
            safe: {},
            sensitive: { error: e },
          });
        }
        return;
      case `oauth-started`:
        (w({ appId: e.appId, status: `waitingForCallback` }),
          b({
            app: { id: e.appId, name: e.name },
            hostId: t,
            redirectUrl: c.redirectUrl,
            returnTo: `${i.pathname}${i.search}${i.hash}`,
            resumeTarget: { kind: `plugin-install` },
          }),
          n.get(R).info(ae({ intl: r })));
        return;
      case `browser-fallback`:
        w({ appId: e.appId, status: `pending` });
        return;
      case `failed`:
        (w({ appId: e.appId, status: `pending` }), n.get(R).danger(P(r)));
        return;
    }
  }
  return {
    closePluginInstall: () => {
      ve || (W({}), he.reset(), C());
    },
    connectRequiredApp: async (e) => {
      if (Y.kind !== `needsApps`) return;
      let t = Y.requiredApps.find((t) => t.appId === e);
      t == null ||
        t.status === `connected` ||
        t.status === `launching` ||
        t.status === `waitingForCallback` ||
        (await xe(t));
    },
    installPlugin: async (i = {}, s = !1) => {
      if (ve || E.kind !== `details`) return;
      let f = E.plugin;
      if (!oe && ue(f.plugin.id)) {
        C();
        return;
      }
      if (!se && G(f.plugin.id)) {
        C();
        return;
      }
      if (!B && de(f.plugin.id)) {
        C();
        return;
      }
      me(!0);
      try {
        let h;
        try {
          h = await he.mutateAsync(f);
        } catch (e) {
          (m.error(`Failed to install plugin`, {
            safe: {},
            sensitive: { error: e },
          }),
            n.get(R).danger(
              r.formatMessage({
                id: `plugins.install.error`,
                defaultMessage: `Failed to install plugin`,
                description: `Toast shown when installing a plugin fails`,
              }),
            ));
          return;
        }
        let g = _e(f.plugin.id);
        if (
          (g != null &&
            (await K(n, g, !1),
            await o(`batch-write-config-value`, {
              hostId: t,
              edits: ge({ pluginId: f.plugin.id, enabled: !0 }),
              filePath: p?.configWriteTarget?.filePath ?? null,
              expectedVersion: null,
              reloadUserConfig: !0,
            })),
          s && ue(f.plugin.id))
        ) {
          let e = !1;
          try {
            let t = await ke(!0);
            (l.setData((e) => ({
              computerIconDataURL: e?.computerIconDataURL ?? null,
              enabled: t,
              lockIconDataURL: e?.lockIconDataURL ?? null,
            })),
              (e = t !== !0));
          } catch (t) {
            (m.error(`Failed to enable Locked Computer Use after install`, {
              safe: {},
              sensitive: { error: t },
            }),
              (e = !0));
          }
          e &&
            n.get(R).danger(
              r.formatMessage({
                id: `plugins.install.lockedComputerUseError`,
                defaultMessage: `Installed Computer Use, but failed to enable Locked Computer Use`,
                description: `Toast shown when Computer Use installs but Locked Computer Use cannot be enabled`,
              }),
            );
        }
        try {
          await e();
        } catch (e) {
          (m.error(`Failed to refresh plugins after install`, {
            safe: {},
            sensitive: { error: e },
          }),
            n.get(R).danger(
              r.formatMessage(
                {
                  id: `plugins.install.refreshError`,
                  defaultMessage: `Installed {pluginName}, but failed to refresh the plugin list`,
                  description: `Toast shown when a plugin installs successfully but the plugin list refresh fails`,
                },
                { pluginName: q(f) },
              ),
            ));
        }
        (await Promise.all([u(Se), u(je)]), W(i));
        let _ = await qe({
          authPolicy: h.authPolicy,
          codexHome: c,
          hostId: t,
          plugin: f,
          queryClient: a,
          windowType: `electron`,
        });
        if (
          h.authPolicy === `ON_USE` ||
          (h.appsNeedingAuth.length === 0 && _.length === 0)
        ) {
          let e = E.postInstallComposerPrefill?.trim();
          (e && d({ text: e }),
            n.get(R).success(
              r.formatMessage(
                {
                  id: `plugins.install.success`,
                  defaultMessage: `{pluginName} plugin installed`,
                  description: `Toast shown after a plugin is installed`,
                },
                { pluginName: q(f) },
              ),
            ),
            C());
          return;
        }
        (O({ apps: h.appsNeedingAuth, browserExtensions: _ }),
          h.authPolicy === `ON_INSTALL` &&
            h.appsNeedingAuth.length === 1 &&
            _.length === 0 &&
            (await xe(
              {
                appId: h.appsNeedingAuth[0].id,
                installUrl: h.appsNeedingAuth[0].installUrl,
                name: h.appsNeedingAuth[0].name,
                status: `pending`,
              },
              i,
            )));
      } finally {
        me(!1);
      }
    },
    isInstalling: ve,
    openPluginInstall: (e, t = {}) => {
      ve ||
        (!oe && ue(e.plugin.id)) ||
        (!se && G(e.plugin.id)) ||
        (!B && de(e.plugin.id)) ||
        (W({}), he.reset(), T(e, t));
    },
    session: Y,
  };
}
function Rt({ apps: e, isAppConnectPending: t, session: n }) {
  if (n.kind !== `needsApps`) return n;
  let r = new Map();
  return (
    e.forEach((e) => {
      r.set(e.id, e);
    }),
    {
      kind: `needsApps`,
      postInstallComposerPrefill: n.postInstallComposerPrefill,
      plugin: n.plugin,
      requiredBrowserExtensions: n.requiredBrowserExtensions,
      requiredApps: n.requiredApps.map((e) => {
        let n = r.get(e.app.id),
          i = e.status;
        return (
          n?.isAccessible === !0
            ? (i = `connected`)
            : e.status === `waitingForCallback` &&
              !t(e.app.id) &&
              (i = `pending`),
          {
            appId: e.app.id,
            description: n?.description ?? e.app.description,
            installUrl: n?.installUrl ?? e.app.installUrl,
            logoUrl: n?.logoUrl ?? null,
            name: n?.name ?? e.app.name,
            status: i,
          }
        );
      }),
    }
  );
}
export {
  ze as a,
  Pe as c,
  Ke as i,
  Me as l,
  it as n,
  Ie as o,
  et as r,
  Fe as s,
  Lt as t,
};
//# sourceMappingURL=use-plugin-install-flow.js.map
