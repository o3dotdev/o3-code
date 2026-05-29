import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  Ps as t,
  ec as n,
  tc as r,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as i } from "./jsx-runtime.js";
import {
  C as a,
  S as o,
  T as s,
  X as c,
  Z as l,
  _ as u,
  at as d,
  bt as f,
  h as p,
  p as m,
  wt as h,
} from "./setting-storage.js";
import { o as g } from "./statsig--EYRNU53.js";
import { t as _ } from "./request-DWZTrEAr.js";
import { t as v } from "./use-auth.js";
import { h as y } from "./codex-api-bK--r_2t.js";
import { r as b } from "./skus-JiYadAsS.js";
import { r as x } from "./local-projects.js";
import { t as S } from "./sortBy.js";
import { t as C } from "./score-query-match.js";
var w = h(),
  T = e(i(), 1),
  E = t(`codexCloudAccess`, null),
  D = d(o, () => null);
function O() {
  let e = (0, w.c)(6),
    { authMethod: t } = v(),
    r = n(E),
    i = l(D);
  if (t !== `chatgpt`) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = { access: `disabled` }), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let a = i ?? `loading`;
  if ((a === `loading` || a === `error`) && r != null) {
    let t;
    return (
      e[2] === r ? (t = e[3]) : ((t = { access: r }), (e[2] = r), (e[3] = t)),
      t
    );
  }
  let o;
  return (
    e[4] === a ? (o = e[5]) : ((o = { access: a }), (e[4] = a), (e[5] = o)),
    o
  );
}
function k() {
  return (A(), null);
}
function A(e) {
  let t = (0, w.c)(14),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { enabled: i } = n,
    a = i === void 0 ? !0 : i,
    l = c(o),
    { authMethod: d } = v(),
    f = r(E),
    h = a && d === `chatgpt`,
    x;
  t[2] === h
    ? (x = t[3])
    : ((x = { queryConfig: { enabled: h } }), (t[2] = h), (t[3] = x));
  let { data: S, isLoading: C, isError: O } = m(`account-info`, x),
    k = S?.plan ?? void 0,
    A = b(k),
    M;
  t[4] === S?.accountId
    ? (M = t[5])
    : ((M = async () =>
        _.safeGet(`/accounts/{account_id}/settings`, {
          parameters: { path: { account_id: S?.accountId ?? `` } },
        })),
      (t[4] = S?.accountId),
      (t[5] = M));
  let {
      data: N,
      isLoading: P,
      isError: F,
    } = s({
      queryKey: [`accounts`, `settings`, S?.accountId],
      enabled: a && !!S?.accountId && A && d === `chatgpt`,
      queryFn: M,
      staleTime: u.ONE_MINUTE,
    }),
    I = a && d === `chatgpt`,
    L;
  t[6] === I ? (L = t[7]) : ((L = { enabled: I }), (t[6] = I), (t[7] = L));
  let { data: R, isLoading: z, error: B } = y(L),
    V = g(`1907601843`),
    H = C || P || z,
    U = B instanceof p && B.status === 404,
    W = j(k, d, {
      isLoading: H,
      hasErrors: O || (A && F) || (!!B && !U),
      needsOnboarding: V ? U : R?.length === 0 || U,
      hasWorkspaceEnabledCodex: !A || (N?.beta_settings?.wham_access ?? !1),
    }),
    G,
    K;
  (t[8] !== W || t[9] !== a || t[10] !== l || t[11] !== f
    ? ((G = () => {
        a && (l.set(D, W), W !== `loading` && W !== `error` && f(W));
      }),
      (K = [W, a, l, f]),
      (t[8] = W),
      (t[9] = a),
      (t[10] = l),
      (t[11] = f),
      (t[12] = G),
      (t[13] = K))
    : ((G = t[12]), (K = t[13])),
    (0, T.useEffect)(G, K));
}
function j(
  e,
  t,
  {
    isLoading: n,
    hasErrors: r,
    needsOnboarding: i,
    hasWorkspaceEnabledCodex: o,
    hasLoggedDisabledRef: s,
  },
) {
  let c = b(e),
    l = (e) => {
      s && !s.current && (a.info(e), (s.current = !0));
    };
  return t === `chatgpt`
    ? n
      ? `loading`
      : r
        ? `error`
        : c && !o
          ? (l(
              `Codex Cloud access disabled because workspace has not enabled Codex.`,
            ),
            `disabled`)
          : i
            ? `enabled_needs_setup`
            : `enabled`
    : (l(
        `Codex Cloud access disabled because user is not logged in via ChatGPT.`,
      ),
      `disabled`);
}
var M = d(o, null);
function N(e, t) {
  let n = `~`;
  return (
    t != null &&
      (n = t.projectKind === `remote` ? t.path : x.getThreadStartCwd(t)),
    e.set(M, n),
    n
  );
}
var P = e(S(), 1),
  F = f([]),
  I = f(!1),
  L = /^\s*\/[^/\r\n]*\s*$/;
function R(e) {
  let t = (0, w.c)(22),
    n,
    i;
  t[0] === e
    ? ((n = t[1]), (i = t[2]))
    : (({ dependencies: i, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = i));
  let a;
  t[3] === i
    ? (a = t[4])
    : ((a = i === void 0 ? [] : i), (t[3] = i), (t[4] = a));
  let o = a,
    s = r(F),
    c;
  t[5] !== n || t[6] !== s
    ? ((c = () => {
        s((e) =>
          (0, P.default)([...e.filter((e) => e.id !== n.id), n].filter(V), [
            B,
            z,
          ]),
        );
      }),
      (t[5] = n),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l;
  (t[8] !== n.description ||
  t[9] !== n.enabled ||
  t[10] !== n.group ||
  t[11] !== n.id ||
  t[12] !== n.presentation ||
  t[13] !== n.requiresEmptyComposer ||
  t[14] !== n.title ||
  t[15] !== o ||
  t[16] !== s
    ? ((l = [
        n.id,
        n.title,
        n.description,
        n.enabled,
        n.requiresEmptyComposer,
        n.presentation,
        s,
        n.group,
        ...o,
      ]),
      (t[8] = n.description),
      (t[9] = n.enabled),
      (t[10] = n.group),
      (t[11] = n.id),
      (t[12] = n.presentation),
      (t[13] = n.requiresEmptyComposer),
      (t[14] = n.title),
      (t[15] = o),
      (t[16] = s),
      (t[17] = l))
    : (l = t[17]),
    (0, T.useEffect)(c, l));
  let u, d;
  (t[18] !== n.id || t[19] !== s
    ? ((u = () => () => {
        s((e) => e.filter((e) => e.id !== n.id));
      }),
      (d = [n.id, s]),
      (t[18] = n.id),
      (t[19] = s),
      (t[20] = u),
      (t[21] = d))
    : ((u = t[20]), (d = t[21])),
    (0, T.useEffect)(u, d));
}
function z(e) {
  return e.title;
}
function B(e) {
  return e.group ?? ``;
}
function V(e) {
  return e.enabled !== !1;
}
function H(e, t) {
  let n = t.trim();
  if (n.length === 0) return e;
  let r = new Map();
  return (
    e.forEach((e) => {
      let t = e.group ?? null;
      r.has(t) || r.set(t, r.size);
    }),
    (0, P.default)(
      e
        .map((e) => ({ command: e, score: C(e.title, n) }))
        .filter((e) => e.score > 0),
      [
        (e) => r.get(e.command.group ?? null) ?? 2 ** 53 - 1,
        (e) => -e.score,
        (e) => e.command.title,
      ],
    ).map((e) => e.command)
  );
}
function U(e, t) {
  return t ? e.filter((e) => !e.requiresEmptyComposer) : e;
}
function W(e) {
  return e.trim().length === 0 ? !1 : !L.test(e);
}
function G({
  attachedRemoteHostId: e,
  browserRemoteHostId: t,
  followUpType: n,
  selectedRemoteProjectHostId: r,
}) {
  return e ?? (n === `local` ? null : (r ?? t));
}
function K({
  composerMode: e,
  draftRemoteHostId: t,
  followUpType: n,
  hasStartedBranchConversation: r,
}) {
  return (
    e === `local` && t !== `local` && n !== `local` && (!r || n === `cloud`)
  );
}
export {
  H as a,
  R as c,
  k as d,
  O as f,
  F as i,
  M as l,
  K as n,
  U as o,
  I as r,
  W as s,
  G as t,
  N as u,
};
//# sourceMappingURL=local-remote-selection-DqDRxu-D.js.map
