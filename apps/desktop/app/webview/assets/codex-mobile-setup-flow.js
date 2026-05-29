import { s as e } from "./chunk-Bj-mKKzh.js";
import { Hi as t, Ni as n, kr as r } from "./src-C.js";
import {
  $s as i,
  Li as a,
  Pt as o,
  po as s,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as c, t as l } from "./jsx-runtime.js";
import {
  S as u,
  U as d,
  X as ee,
  Y as f,
  Z as p,
  h as m,
  l as h,
  nt as g,
  rt as _,
  w as v,
  wt as y,
  y as b,
} from "./setting-storage.js";
import { m as te } from "./chunk-LFPYN7LY.js";
import { t as ne } from "./product-logger-DusapRyT.js";
import { t as x } from "./request-DWZTrEAr.js";
import { t as re } from "./app-shell-D4HBgUPf.js";
import { t as S } from "./thread-page-header.js";
import { n as C, t as w } from "./local-remote-control-enabled-sync.js";
import {
  o as ie,
  r as T,
  t as ae,
} from "./codex-mobile-setup-dialog-es3uf3kp.js";
import { t as oe } from "./chatgpt-token-auth.browser.js";
var E = 100,
  D = t({ mfa_enabled_v2: n() }),
  O = class extends Error {},
  k = class extends Error {},
  A = class extends Error {};
async function j({ clientId: e }) {
  await R(() =>
    x.safeDelete(`/wham/remote/control/clients/{client_id}`, {
      parameters: { path: { client_id: e } },
    }),
  );
}
async function M() {
  return (await R(() => x.safeGet(`/wham/remote/control/mfa_requirement`)))
    .requirement;
}
async function N() {
  return D.parse(await x.safeGet(`/accounts/mfa_info`)).mfa_enabled_v2;
}
async function P(e = null) {
  let t = await R(() =>
    x.safeGet(`/wham/remote/control/clients`, {
      parameters: { query: { cursor: e, limit: E } },
    }),
  );
  return t.items.some(L) ? !0 : t.cursor == null ? !1 : P(t.cursor);
}
async function F() {
  return I(null);
}
async function I(e) {
  let t = await R(() =>
      x.safeGet(`/wham/remote/control/clients`, {
        parameters: { query: { cursor: e, limit: E } },
      }),
    ),
    n = t.items.filter(L);
  return t.cursor == null ? n : n.concat(await I(t.cursor));
}
function L(e) {
  return e.enrollment_status !== `pending_enrollment`;
}
async function R(e) {
  try {
    return await e();
  } catch (e) {
    throw e instanceof m
      ? e.status === 404
        ? new k()
        : e.status === 403
          ? new A(e.message)
          : e.status === 401
            ? (oe(),
              new O(
                `ChatGPT auth is required to load remote control environments.`,
              ))
            : Error(`Remote control request failed (${e.status}): ${e.message}`)
      : e;
  }
}
function z(e, t) {
  if (e != null) return t == null ? e : e.filter((e) => e.client_id !== t);
}
function B(e, t) {
  return e?.some((e) => !t.has(e.client_id)) === !0
    ? t.size === 0 && e.length === 1
      ? `connected`
      : `dismiss`
    : null;
}
var V = 3e4,
  H = _(u, () => ({
    queryKey: [`remote-control-clients`],
    queryFn: F,
    staleTime: V,
  })),
  se = g(u, (e) => ({
    enabled: e,
    queryKey: [`remote-control-clients`],
    queryFn: F,
    refetchInterval: e ? 1e3 : !1,
    staleTime: 0,
  })),
  U = g(
    u,
    ({ existingClientIds: e, localRemoteControlClientId: t, waiting: n }) => ({
      enabled: n,
      queryKey: [`remote-control-clients`],
      queryFn: F,
      refetchInterval: (r) =>
        !n || e == null ? !1 : B(z(r.state.data, t), e) == null ? 1e3 : !1,
      staleTime: 0,
    }),
    { key: W },
  );
function W({
  existingClientIds: e,
  localRemoteControlClientId: t,
  waiting: n,
}) {
  return JSON.stringify({
    existingClientIds: e == null ? null : Array.from(e).sort(),
    localRemoteControlClientId: t,
    waiting: n,
  });
}
var ce = y();
function le(e) {
  let t = (0, ce.c)(3),
    { hostId: n } = e,
    r = ee(u),
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = {
          mutationFn: async (e) =>
            n === `local`
              ? (await h(`set-local-remote-control-enabled`, {
                  params: { enabled: e },
                }),
                w(r, e, { force: !0 }))
              : C(r, n, e),
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    v(i)
  );
}
var G = 3e4,
  ue = _(u, () => ({
    queryKey: [`remote-control-mfa-requirement`],
    queryFn: M,
    retry: !1,
    staleTime: G,
  })),
  de = _(u, ({ get: e }) => ({
    enabled: e(ue).data === `required`,
    queryKey: [`remote-control-mfa-enabled`],
    queryFn: N,
    refetchOnWindowFocus: `always`,
    staleTime: 0,
  })),
  fe = _(u, ({ get: e }) => ({
    enabled: e(o, s),
    queryKey: [`codex-mobile-setup-resume-client`],
    queryFn: () => P(),
    staleTime: 0,
  }));
function pe({
  remoteControlHostEnabled: e,
  hasEnrolledRemoteControlClient: t,
}) {
  return e ? (t ? `connected` : `waiting`) : `initial`;
}
function me(e) {
  return e.some((e) => e instanceof O);
}
var K = e(c(), 1),
  q = l();
function J(e) {
  let t = (0, ce.c)(75),
    { onClose: n, variant: c } = e,
    l = ee(u),
    d = te(),
    m = (0, K.useRef)(null),
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = { hostId: s }), (t[0] = h))
    : (h = t[0]);
  let g = le(h),
    _ = f(o, s),
    [y] = i(ie),
    b = p(fe),
    [x, re] = (0, K.useState)(null),
    S;
  t[1] !== _ || t[2] !== x || t[3] !== b.data
    ? ((S =
        x ??
        pe({
          remoteControlHostEnabled: _,
          hasEnrolledRemoteControlClient: b.data,
        })),
      (t[1] = _),
      (t[2] = x),
      (t[3] = b.data),
      (t[4] = S))
    : (S = t[4]);
  let C = S,
    w = f(se, C === `waiting`),
    T = p(ue),
    oe = C === `waiting` && w.data?.length ? `connected` : C,
    E = p(de),
    D = y === `auto` ? (C === `mfa-required` && E.data ? `allow-host` : oe) : y,
    O;
  t[5] !== D || t[6] !== l || t[7] !== c
    ? ((O = (e) => {
        ne(l, {
          eventName: `codex_remote_control_onboarding_action_clicked`,
          metadata: { action: e, step: D, surface: c },
        });
      }),
      (t[5] = D),
      (t[6] = l),
      (t[7] = c),
      (t[8] = O))
    : (O = t[8]);
  let k = O,
    A,
    j;
  (t[9] !== D || t[10] !== l || t[11] !== c
    ? ((A = () => {
        let e = `${c}:${D}`;
        m.current !== e &&
          ((m.current = e),
          ne(l, {
            eventName: `codex_remote_control_onboarding_step_viewed`,
            metadata: { step: D, surface: c },
          }));
      }),
      (j = [D, l, c]),
      (t[9] = D),
      (t[10] = l),
      (t[11] = c),
      (t[12] = A),
      (t[13] = j))
    : ((A = t[12]), (j = t[13])),
    (0, K.useEffect)(A, j));
  let M, N;
  (t[14] !== D || t[15] !== l
    ? ((M = () => {
        D === `connected` && a(l, r.CODEX_MOBILE_SETUP_COMPLETED, !0);
      }),
      (N = [D, l]),
      (t[14] = D),
      (t[15] = l),
      (t[16] = M),
      (t[17] = N))
    : ((M = t[16]), (N = t[17])),
    (0, K.useEffect)(M, N));
  let F;
  t[18] !== E || t[19] !== l
    ? ((F = async () =>
        (await l.query.fetch(ue)) === `required` ? E.data === !1 : !1),
      (t[18] = E),
      (t[19] = l),
      (t[20] = F))
    : (F = t[20]);
  let I;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => {
        re(e ? `mfa-required` : `allow-host`);
      }),
      (t[21] = I))
    : (I = t[21]);
  let L;
  t[22] === F
    ? (L = t[23])
    : ((L = { mutationFn: F, onSuccess: I }), (t[22] = F), (t[23] = L));
  let R = v(L),
    z;
  t[24] === g
    ? (z = t[25])
    : ((z = async () => {
        let e = await P();
        return (await g.mutateAsync(!0), e ? `connected` : `waiting`);
      }),
      (t[24] = g),
      (t[25] = z));
  let B;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        re(e);
      }),
      (t[26] = B))
    : (B = t[26]);
  let V;
  t[27] === z
    ? (V = t[28])
    : ((V = { mutationFn: z, onSuccess: B }), (t[27] = z), (t[28] = V));
  let H = v(V),
    U;
  t[29] !== H.error ||
  t[30] !== R.error ||
  t[31] !== T.error ||
  t[32] !== w.error ||
  t[33] !== b.error
    ? ((U = me([b.error, w.error, T.error, R.error, H.error])),
      (t[29] = H.error),
      (t[30] = R.error),
      (t[31] = T.error),
      (t[32] = w.error),
      (t[33] = b.error),
      (t[34] = U))
    : (U = t[34]);
  let W = U,
    G,
    J;
  (t[35] !== d || t[36] !== W
    ? ((G = () => {
        W && d(`/login`, { replace: !0 });
      }),
      (J = [d, W]),
      (t[35] = d),
      (t[36] = W),
      (t[37] = G),
      (t[38] = J))
    : ((G = t[37]), (J = t[38])),
    (0, K.useEffect)(G, J));
  let Y =
    R.isPending ||
    H.isPending ||
    g.isPending ||
    (T.data === `required` && E.isLoading);
  if ((y === `auto` && x == null && _ && b.isLoading) || W) return null;
  if (c === `dialog`) {
    let e;
    t[39] !== H || t[40] !== k
      ? ((e = () => {
          (k(`allow_host`), H.mutate());
        }),
        (t[39] = H),
        (t[40] = k),
        (t[41] = e))
      : (e = t[41]);
    let r;
    t[42] === n
      ? (r = t[43])
      : ((r = (e) => {
          e || n();
        }),
        (t[42] = n),
        (t[43] = r));
    let i;
    t[44] !== n || t[45] !== k
      ? ((i = () => {
          (k(`skip`), n());
        }),
        (t[44] = n),
        (t[45] = k),
        (t[46] = i))
      : (i = t[46]);
    let a;
    t[47] !== R || t[48] !== k
      ? ((a = () => {
          (k(`start_setup`), R.mutate());
        }),
        (t[47] = R),
        (t[48] = k),
        (t[49] = a))
      : (a = t[49]);
    let o;
    return (
      t[50] !== R.isError ||
      t[51] !== D ||
      t[52] !== Y ||
      t[53] !== e ||
      t[54] !== r ||
      t[55] !== i ||
      t[56] !== a
        ? ((o = (0, q.jsx)(ae, {
            open: !0,
            showStartSetupError: R.isError,
            setupInProgress: Y,
            step: D,
            onAllowHost: e,
            onOpenChange: r,
            onSkip: i,
            onStartSetup: a,
          })),
          (t[50] = R.isError),
          (t[51] = D),
          (t[52] = Y),
          (t[53] = e),
          (t[54] = r),
          (t[55] = i),
          (t[56] = a),
          (t[57] = o))
        : (o = t[57]),
      o
    );
  }
  let X;
  t[58] !== H || t[59] !== k
    ? ((X = () => {
        (k(`allow_host`), H.mutate());
      }),
      (t[58] = H),
      (t[59] = k),
      (t[60] = X))
    : (X = t[60]);
  let Z;
  t[61] !== n || t[62] !== k
    ? ((Z = () => {
        (k(`skip`), n());
      }),
      (t[61] = n),
      (t[62] = k),
      (t[63] = Z))
    : (Z = t[63]);
  let Q;
  t[64] !== R || t[65] !== k
    ? ((Q = () => {
        (k(`start_setup`), R.mutate());
      }),
      (t[64] = R),
      (t[65] = k),
      (t[66] = Q))
    : (Q = t[66]);
  let $;
  return (
    t[67] !== R.isError ||
    t[68] !== n ||
    t[69] !== D ||
    t[70] !== Y ||
    t[71] !== X ||
    t[72] !== Z ||
    t[73] !== Q
      ? (($ = (0, q.jsx)(he, {
          showStartSetupError: R.isError,
          setupInProgress: Y,
          step: D,
          onAllowHost: X,
          onFinishSetup: n,
          onSkip: Z,
          onStartSetup: Q,
        })),
        (t[67] = R.isError),
        (t[68] = n),
        (t[69] = D),
        (t[70] = Y),
        (t[71] = X),
        (t[72] = Z),
        (t[73] = Q),
        (t[74] = $))
      : ($ = t[74]),
    $
  );
}
function he(e) {
  let t = (0, ce.c)(26),
    {
      onAllowHost: n,
      onFinishSetup: r,
      onSkip: i,
      onStartSetup: a,
      setupInProgress: o,
      showStartSetupError: s,
      step: c,
    } = e,
    l = ee(u),
    f = te(),
    p;
  t[0] !== l || t[1] !== c
    ? ((p = (e) => {
        ne(l, {
          eventName: `codex_remote_control_onboarding_action_clicked`,
          metadata: { action: e, step: c, surface: `page` },
        });
      }),
      (t[0] = l),
      (t[1] = c),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h;
  t[3] === c
    ? (h = t[4])
    : ((h =
        c === `allow-host` || c === `mfa-required` || c === `waiting`
          ? (0, q.jsx)(re.Header, {
              children: (0, q.jsx)(S, {
                start: (0, q.jsx)(d, {
                  id: `codexMobile.setupPage.title`,
                  defaultMessage: `Set up Codex Mobile`,
                  description: `Toolbar title shown during Codex mobile setup`,
                }),
              }),
            })
          : null),
      (t[3] = c),
      (t[4] = h));
  let g;
  t[5] === m
    ? (g = t[6])
    : ((g = () => {
        (m(`continue_on_chatgpt`),
          b.dispatchMessage(`open-in-browser`, {
            url: `https://chatgpt.com/#settings/Security`,
          }));
      }),
      (t[5] = m),
      (t[6] = g));
  let _;
  t[7] !== r || t[8] !== m
    ? ((_ = () => {
        (m(`finish_setup`), r());
      }),
      (t[7] = r),
      (t[8] = m),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] !== f || t[11] !== m
    ? ((v = () => {
        (m(`manage_connections`), f(`/settings/connections`));
      }),
      (t[10] = f),
      (t[11] = m),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] !== n ||
  t[14] !== i ||
  t[15] !== a ||
  t[16] !== o ||
  t[17] !== s ||
  t[18] !== c ||
  t[19] !== g ||
  t[20] !== _ ||
  t[21] !== v
    ? ((y = (0, q.jsx)(T, {
        onAllowHost: n,
        onContinueOnChatGPT: g,
        onFinishSetup: _,
        onManageConnections: v,
        onSkip: i,
        onStartSetup: a,
        setupInProgress: o,
        showStartSetupError: s,
        step: c,
        variant: `page`,
      })),
      (t[13] = n),
      (t[14] = i),
      (t[15] = a),
      (t[16] = o),
      (t[17] = s),
      (t[18] = c),
      (t[19] = g),
      (t[20] = _),
      (t[21] = v),
      (t[22] = y))
    : (y = t[22]);
  let x;
  return (
    t[23] !== h || t[24] !== y
      ? ((x = (0, q.jsxs)(q.Fragment, { children: [h, y] })),
        (t[23] = h),
        (t[24] = y),
        (t[25] = x))
      : (x = t[25]),
    x
  );
}
export { B as a, j as c, U as i, le as n, z as o, H as r, O as s, J as t };
//# sourceMappingURL=codex-mobile-setup-flow.js.map
