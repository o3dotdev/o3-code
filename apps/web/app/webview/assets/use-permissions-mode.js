import { Bt as e, Ft as t, It as n, Nt as r, zt as i } from "./src-C.js";
import {
  $s as a,
  Ws as o,
  fo as s,
  g as c,
  ht as l,
} from "./app-server-manager-signals-DkRDRgNB.js";
import {
  $ as u,
  S as d,
  Y as f,
  Z as p,
  bt as m,
  wt as h,
} from "./setting-storage.js";
import { o as g } from "./statsig--EYRNU53.js";
import { t as _ } from "./thread-context-inputs-DBrOekVr.js";
import { c as v, v as y } from "./config-queries-BBeTQbuo.js";
import { i as b } from "./thread-detail-level.js";
import { i as x, n as S, r as C } from "./permissions-mode-defaults.js";
var w = h(),
  T = { isSet: !1, value: null },
  E = m(null),
  D = m(!1),
  O = m(T),
  k = o((e) => m(null)),
  A = o((e) => m(!1)),
  j = o((e) => m(T)),
  M = u(d, (e, { get: t }) => t(l, e)?.at(-1)?.params ?? null);
function N(e, { requirements: r, resolvedConfig: i }) {
  switch (e) {
    case `STEPS_PROSE`:
      return n(`granular`, r) && t(i ?? void 0, `granular`) === `granular`
        ? `granular`
        : `auto`;
    case `STEPS_COMMANDS`:
      return `auto`;
  }
}
function P(e) {
  if (e == null) return !0;
  let t =
      e.allowedSandboxModes == null ||
      e.allowedSandboxModes.includes(`workspace-write`),
    n =
      e.allowedApprovalPolicies == null ||
      e.allowedApprovalPolicies.includes(`on-request`),
    r =
      e.allowedApprovalsReviewers == null ||
      e.allowedApprovalsReviewers.includes(`user`) ||
      e.allowedApprovalsReviewers.includes(`auto_review`);
  return t && n && r;
}
function F(t, n) {
  let r = N(t, n);
  if (P(n.requirements)) return r;
  let i = e(n.requirements);
  return (
    i.find((e) => e !== `full-access`) ??
    (i.includes(`full-access`) ? `full-access` : r)
  );
}
function ee(e, t, n) {
  let r = t[e];
  return r === `auto` || r === `granular` ? n : (r ?? n);
}
function te(e) {
  let { conversationId: t, stateScope: n } = e,
    r = n === void 0 ? `composer` : n;
  return !L() || r === `global-default` ? `global-default` : (t ?? `draft`);
}
function I(e) {
  let t = (0, w.c)(8),
    n = f(M, e),
    i = n?.approvalPolicy ?? void 0,
    a = n?.approvalsReviewer ?? void 0,
    o = n?.sandboxPolicy ?? void 0,
    s;
  t[0] !== i || t[1] !== a || t[2] !== o
    ? ((s = r({ approvalPolicy: i, approvalsReviewer: a, sandboxPolicy: o })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l = null;
  c != null && c !== `full-access` && c !== `custom` && (l = c);
  let u = c != null,
    d;
  return (
    t[4] !== c || t[5] !== l || t[6] !== u
      ? ((d = {
          hasLatestTurnSelection: u,
          latestTurnMode: c,
          latestTurnPreferredNonFullAccessMode: l,
        }),
        (t[4] = c),
        (t[5] = l),
        (t[6] = u),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
function L() {
  return g(`3736891373`);
}
function R() {
  return g(`2846336681`);
}
function ne(e) {
  let t = (0, w.c)(16),
    { conversationId: r, hostId: a, cwdOverride: o } = e,
    l = f(c, r),
    { data: u } = p(_),
    d = o !== void 0,
    m = d ? (o ?? null) : (l ?? u?.roots?.[0] ?? null),
    h = d && m == null,
    [g] = s(`statsig_default_enable_features`),
    b = d ? `preserve-null` : `fallback-to-workspace`,
    x = !h,
    S;
  t[0] !== a || t[1] !== b || t[2] !== x
    ? ((S = { hostId: a, cwdMode: b, enabled: x }),
      (t[0] = a),
      (t[1] = b),
      (t[2] = x),
      (t[3] = S))
    : (S = t[3]);
  let { data: C, isPending: T } = y(m, S),
    { data: E, isPending: D } = f(v, a),
    O = E?.requirements ?? null,
    k = C?.config ?? null,
    A;
  t[4] !== D || t[5] !== O
    ? ((A = D || n(`auto`, O) || n(`guardian-approvals`, O)),
      (t[4] = D),
      (t[5] = O),
      (t[6] = A))
    : (A = t[6]);
  let j = A,
    M;
  t[7] !== g || t[8] !== j || t[9] !== k
    ? ((M = j && i(k ?? void 0) !== !1 && g === void 0),
      (t[7] = g),
      (t[8] = j),
      (t[9] = k),
      (t[10] = M))
    : (M = t[10]);
  let N = h || D || T || M,
    P = g?.guardian_approval === !0,
    F;
  return (
    t[11] !== O || t[12] !== k || t[13] !== N || t[14] !== P
      ? ((F = {
          isConfigDataPending: N,
          isGuardianApprovalEnabledByStatsig: P,
          requirements: O,
          resolvedConfig: k,
        }),
        (t[11] = O),
        (t[12] = k),
        (t[13] = N),
        (t[14] = P),
        (t[15] = F))
      : (F = t[15]),
    F
  );
}
function z(e) {
  let t = (0, w.c)(48),
    { conversationId: n, cwdOverride: r, hostId: i, stateScope: o } = e,
    s = o === void 0 ? `composer` : o,
    l = f(c, n),
    { data: u } = p(_),
    d = r !== void 0,
    m = d ? (r ?? null) : (l ?? u?.roots?.[0] ?? null),
    h = d && m == null,
    g = b(),
    v;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((v = { conversationId: n, cwdOverride: r, hostId: i }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = v))
    : (v = t[3]);
  let y = ne(v),
    x = F(g, y),
    C;
  t[4] !== n || t[5] !== s
    ? ((C = { conversationId: n, stateScope: s }),
      (t[4] = n),
      (t[5] = s),
      (t[6] = C))
    : (C = t[6]);
  let T = te(C),
    [O, j] = a(S),
    [M, N] = a(E),
    [P, L] = a(D),
    R;
  t[7] === n
    ? (R = t[8])
    : ((R = n == null ? E : k(n)), (t[7] = n), (t[8] = R));
  let [z, B] = a(R),
    V;
  t[9] === n
    ? (V = t[10])
    : ((V = n == null ? D : A(n)), (t[9] = n), (t[10] = V));
  let [re, H] = a(V),
    { hasLatestTurnSelection: ie, latestTurnMode: ae } = I(n),
    U = ee(i, O, x),
    W = O[i],
    G =
      (h || y.isConfigDataPending) &&
      (W == null || W === `auto` || W === `granular`),
    K;
  t[11] !== O || t[12] !== i
    ? ((K = Object.hasOwn(O, i)), (t[11] = O), (t[12] = i), (t[13] = K))
    : (K = t[13]);
  let q = K;
  if (T === `draft`) {
    let e = M ?? U,
      n = P || q,
      r = M == null && G,
      i;
    t[14] !== N || t[15] !== L
      ? ((i = (e) => {
          (N(e), L(!0));
        }),
        (t[14] = N),
        (t[15] = L),
        (t[16] = i))
      : (i = t[16]);
    let a;
    return (
      t[17] !== L || t[18] !== i || t[19] !== e || t[20] !== n || t[21] !== r
        ? ((a = {
            agentMode: e,
            hasSetInitialAgentMode: n,
            isAgentModePending: r,
            shouldSendPermissionOverrides: !0,
            setAgentMode: i,
            setHasSetInitialAgentMode: L,
          }),
          (t[17] = L),
          (t[18] = i),
          (t[19] = e),
          (t[20] = n),
          (t[21] = r),
          (t[22] = a))
        : (a = t[22]),
      a
    );
  }
  if (T === `global-default`) {
    let e;
    t[23] !== O || t[24] !== i || t[25] !== j
      ? ((e = (e) => {
          O[i] !== e && j({ ...O, [i]: e });
        }),
        (t[23] = O),
        (t[24] = i),
        (t[25] = j),
        (t[26] = e))
      : (e = t[26]);
    let n;
    t[27] !== O || t[28] !== U || t[29] !== i || t[30] !== j
      ? ((n = (e) => {
          e && j({ ...O, [i]: U });
        }),
        (t[27] = O),
        (t[28] = U),
        (t[29] = i),
        (t[30] = j),
        (t[31] = n))
      : (n = t[31]);
    let r;
    return (
      t[32] !== q || t[33] !== U || t[34] !== G || t[35] !== e || t[36] !== n
        ? ((r = {
            agentMode: U,
            hasSetInitialAgentMode: q,
            isAgentModePending: G,
            shouldSendPermissionOverrides: !0,
            setAgentMode: e,
            setHasSetInitialAgentMode: n,
          }),
          (t[32] = q),
          (t[33] = U),
          (t[34] = G),
          (t[35] = e),
          (t[36] = n),
          (t[37] = r))
        : (r = t[37]),
      r
    );
  }
  let J = z ?? ae ?? x,
    Y = re || ie,
    X = z == null && ae == null && (h || y.isConfigDataPending),
    Z = z != null,
    Q;
  t[38] !== H || t[39] !== B
    ? ((Q = (e) => {
        (B(e), H(!0));
      }),
      (t[38] = H),
      (t[39] = B),
      (t[40] = Q))
    : (Q = t[40]);
  let $;
  return (
    t[41] !== H ||
    t[42] !== Z ||
    t[43] !== Q ||
    t[44] !== J ||
    t[45] !== Y ||
    t[46] !== X
      ? (($ = {
          agentMode: J,
          hasSetInitialAgentMode: Y,
          isAgentModePending: X,
          shouldSendPermissionOverrides: Z,
          setAgentMode: Q,
          setHasSetInitialAgentMode: H,
        }),
        (t[41] = H),
        (t[42] = Z),
        (t[43] = Q),
        (t[44] = J),
        (t[45] = Y),
        (t[46] = X),
        (t[47] = $))
      : ($ = t[47]),
    $
  );
}
function B(e) {
  let t = (0, w.c)(30),
    { conversationId: n, cwdOverride: r, hostId: i, stateScope: o } = e,
    s = o === void 0 ? `composer` : o,
    c;
  t[0] !== n || t[1] !== s
    ? ((c = { conversationId: n, stateScope: s }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = te(c),
    [u, d] = a(C),
    [f, p] = a(O),
    m;
  t[3] === n
    ? (m = t[4])
    : ((m = n == null ? O : j(n)), (t[3] = n), (t[4] = m));
  let [h, g] = a(m),
    {
      hasLatestTurnSelection: _,
      latestTurnMode: v,
      latestTurnPreferredNonFullAccessMode: y,
    } = I(n),
    b;
  t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== s
    ? ((b = { conversationId: n, cwdOverride: r, hostId: i, stateScope: s }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i),
      (t[8] = s),
      (t[9] = b))
    : (b = t[9]);
  let { agentMode: S } = z(b),
    T;
  t[10] !== i || t[11] !== u
    ? ((T = x(i, u)), (t[10] = i), (t[11] = u), (t[12] = T))
    : (T = t[12]);
  let E = T;
  if (l === `draft`) {
    let e = f.isSet ? f.value : E,
      n;
    t[13] === p
      ? (n = t[14])
      : ((n = (e) => {
          p({ isSet: !0, value: e });
        }),
        (t[13] = p),
        (t[14] = n));
    let r;
    return (
      t[15] !== e || t[16] !== n
        ? ((r = {
            preferredNonFullAccessMode: e,
            setPreferredNonFullAccessMode: n,
          }),
          (t[15] = e),
          (t[16] = n),
          (t[17] = r))
        : (r = t[17]),
      r
    );
  }
  if (l === `global-default`) {
    let e;
    t[18] !== i || t[19] !== u || t[20] !== d
      ? ((e = (e) => {
          d({ ...u, [i]: e });
        }),
        (t[18] = i),
        (t[19] = u),
        (t[20] = d),
        (t[21] = e))
      : (e = t[21]);
    let n;
    return (
      t[22] !== E || t[23] !== e
        ? ((n = {
            preferredNonFullAccessMode: E,
            setPreferredNonFullAccessMode: e,
          }),
          (t[22] = E),
          (t[23] = e),
          (t[24] = n))
        : (n = t[24]),
      n
    );
  }
  let D = h.isSet ? h.value : _ && S === v ? y : null,
    k;
  t[25] === g
    ? (k = t[26])
    : ((k = (e) => {
        g({ isSet: !0, value: e });
      }),
      (t[25] = g),
      (t[26] = k));
  let A;
  return (
    t[27] !== D || t[28] !== k
      ? ((A = {
          preferredNonFullAccessMode: D,
          setPreferredNonFullAccessMode: k,
        }),
        (t[27] = D),
        (t[28] = k),
        (t[29] = A))
      : (A = t[29]),
    A
  );
}
function V(e) {
  (e.set(E, null), e.set(O, T), e.set(D, !1));
}
function re(e, t, n, r) {
  (e.set(k(t), e.get(E) ?? r),
    e.set(j(t), { isSet: !0, value: H(e, n) }),
    e.set(A(t), !0));
}
function H(e, t) {
  let n = e.get(O);
  return n.isSet ? n.value : x(t, e.get(C));
}
export { R as a, z as c, V as i, re as n, ne as o, N as r, B as s, P as t };
//# sourceMappingURL=use-permissions-mode.js.map
