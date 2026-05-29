import { s as e } from "./chunk-Bj-mKKzh.js";
import { Hi as t, Ri as n, qi as r } from "./src-C.js";
import {
  Js as i,
  Li as a,
  Q as o,
  R as s,
  Xs as c,
  w as l,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as u } from "./jsx-runtime.js";
import {
  $ as d,
  C as f,
  G as p,
  L as m,
  S as h,
  T as g,
  X as _,
  Y as v,
  _ as y,
  nt as b,
  wt as x,
} from "./setting-storage.js";
import { t as S } from "./queryOptions-DGhYrySA.js";
import { t as C } from "./use-global-state.js";
import { t as w } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import { u as T } from "./config-queries-BBeTQbuo.js";
import { n as E } from "./use-auth.js";
import { r as D } from "./toast-signal.js";
import { n as O } from "./open-config-toml-button.js";
import { n as k } from "./models-and-reasoning-efforts-qLdGz-ul.js";
import { n as A, r as j } from "./model-queries-CVdTsyPv.js";
import { n as M } from "./use-webview-execution-target.js";
var N = [`user-saved-config`];
function P({ queryClient: e, hostId: t, cwd: n, enabled: r }) {
  return S({
    enabled: r,
    queryFn: async () => {
      try {
        return i((await T(e, t, n, !1)).config);
      } catch {
        return null;
      }
    },
    queryKey: [...N, t, n],
    staleTime: y.FIVE_MINUTES,
  });
}
var F = b(h, ({ cwd: e, hostId: t }, { get: n, queryClient: r }) =>
    P({ queryClient: r, hostId: t, cwd: e, enabled: n(o).includes(t) }),
  ),
  I = t({ code: n(-32600), message: r().min(1) });
function L(e) {
  return I.safeParse(e).success;
}
function R(e, t) {
  return (e === `none` ||
    e === `minimal` ||
    e === `low` ||
    e === `medium` ||
    e === `high` ||
    e === `xhigh`) &&
    t.includes(e)
    ? e
    : k;
}
function z(e, t) {
  return e?.find((e) => e.model === t);
}
function B({
  userSavedModelString: e,
  userSavedReasoningEffort: t,
  listModelsData: n,
}) {
  let r = e ? z(n?.models, e) : (n?.defaultModel ?? z(n?.models, `gpt-5.5`)),
    i = r?.supportedReasoningEfforts?.map((e) => e.reasoningEffort),
    a = t && i && i.includes(t) ? t : r?.defaultReasoningEffort;
  return {
    model: r ? r.model : (e ?? `gpt-5.5`),
    reasoningEffort:
      a ?? t ?? n?.defaultModel?.defaultReasoningEffort ?? `medium`,
    profile: null,
    isLoading: !1,
  };
}
var V = x(),
  H = e(u(), 1);
function U(e, t) {
  return [...N, e, t];
}
function W() {
  let e = (0, V.c)(3),
    t = j(),
    { data: n, isLoading: r } = C(`copilot-default-model`),
    i = n ?? t.defaultModel,
    a;
  return (
    e[0] !== r || e[1] !== i
      ? ((a = {
          model: i,
          reasoningEffort: `medium`,
          profile: null,
          isLoading: r,
        }),
        (e[0] = r),
        (e[1] = i),
        (e[2] = a))
      : (a = e[2]),
    a
  );
}
var G = d(h, (e, { get: t }) => t(o).includes(e));
function K(e) {
  let t = (0, V.c)(45),
    { hostId: n, cwd: r, isHostRegistered: i } = e,
    a = _(h).queryClient,
    o;
  t[0] === n ? (o = t[1]) : ((o = { hostId: n }), (t[0] = n), (t[1] = o));
  let { data: s, isLoading: c } = A(o),
    l;
  t[2] !== r || t[3] !== n || t[4] !== i || t[5] !== a
    ? ((l = P({ queryClient: a, hostId: n, cwd: r, enabled: i })),
      (t[2] = r),
      (t[3] = n),
      (t[4] = i),
      (t[5] = a),
      (t[6] = l))
    : (l = t[6]);
  let { data: u, dataUpdatedAt: d, isLoading: p } = g(l),
    m;
  t[7] !== r || t[8] !== n
    ? ((m = { hostId: n, cwd: r }), (t[7] = r), (t[8] = n), (t[9] = m))
    : (m = t[9]);
  let { data: y, dataUpdatedAt: b, isLoading: x } = v(F, m),
    S;
  t[10] !== r ||
  t[11] !== n ||
  t[12] !== i ||
  t[13] !== x ||
  t[14] !== p ||
  t[15] !== y?.model ||
  t[16] !== y?.model_reasoning_effort ||
  t[17] !== b ||
  t[18] !== a ||
  t[19] !== u?.model ||
  t[20] !== u?.model_reasoning_effort ||
  t[21] !== d
    ? ((S = () => {
        let e = a.getQueryCache().find({ exact: !0, queryKey: U(n, r) }),
          t = e?.state.dataUpdatedAt ?? 0,
          o = u?.model ?? null,
          s = u?.model_reasoning_effort ?? null,
          c = y?.model ?? null,
          l = y?.model_reasoning_effort ?? null;
        if (t === 0 || d !== t || b === t || (o === c && s === l)) return;
        let m = setTimeout(() => {
          f.warning(`model_settings.config_query_diverged`, {
            safe: {
              cacheDataUpdatedAt: t,
              directDataUpdatedAt: d,
              directIsLoading: p,
              isHostRegistered: i,
              maitaiDataUpdatedAt: b,
              maitaiIsLoading: x,
              observerCount: e?.getObserversCount() ?? 0,
            },
            sensitive: {
              cwd: r,
              directModel: o,
              directReasoningEffort: s,
              hostId: n,
              maitaiModel: c,
              maitaiReasoningEffort: l,
            },
          });
        });
        return () => {
          clearTimeout(m);
        };
      }),
      (t[10] = r),
      (t[11] = n),
      (t[12] = i),
      (t[13] = x),
      (t[14] = p),
      (t[15] = y?.model),
      (t[16] = y?.model_reasoning_effort),
      (t[17] = b),
      (t[18] = a),
      (t[19] = u?.model),
      (t[20] = u?.model_reasoning_effort),
      (t[21] = d),
      (t[22] = S))
    : (S = t[22]);
  let C;
  (t[23] !== r ||
  t[24] !== n ||
  t[25] !== i ||
  t[26] !== x ||
  t[27] !== p ||
  t[28] !== y ||
  t[29] !== b ||
  t[30] !== a ||
  t[31] !== u ||
  t[32] !== d
    ? ((C = [r, n, i, x, p, y, b, a, u, d]),
      (t[23] = r),
      (t[24] = n),
      (t[25] = i),
      (t[26] = x),
      (t[27] = p),
      (t[28] = y),
      (t[29] = b),
      (t[30] = a),
      (t[31] = u),
      (t[32] = d),
      (t[33] = C))
    : (C = t[33]),
    (0, H.useEffect)(S, C));
  let w = u?.model ?? null,
    T = u?.model_reasoning_effort ?? null,
    E;
  t[34] !== s || t[35] !== w || t[36] !== T
    ? ((E = B({
        userSavedModelString: w,
        userSavedReasoningEffort: T,
        listModelsData: s,
      })),
      (t[34] = s),
      (t[35] = w),
      (t[36] = T),
      (t[37] = E))
    : (E = t[37]);
  let D = E;
  if (u == null) {
    let e = p || c,
      n;
    return (
      t[38] !== e || t[39] !== D
        ? ((n = { ...D, isLoading: e }), (t[38] = e), (t[39] = D), (t[40] = n))
        : (n = t[40]),
      n
    );
  }
  let O = u.model == null || u.model_reasoning_effort == null,
    k = typeof u.profile == `string` ? u.profile : null,
    j = O && c,
    M;
  return (
    t[41] !== j || t[42] !== k || t[43] !== D
      ? ((M = { ...D, profile: k, isLoading: j }),
        (t[41] = j),
        (t[42] = k),
        (t[43] = D),
        (t[44] = M))
      : (M = t[44]),
    M
  );
}
function q(e) {
  let t = (0, V.c)(5),
    { hostId: n, cwd: r } = e,
    i = m(),
    a = w(),
    o;
  return (
    t[0] !== r || t[1] !== n || t[2] !== a || t[3] !== i
      ? ((o = async () => {
          let e = U(n, r);
          (await i.cancelQueries({ queryKey: e, exact: !0 }), await a(e));
        }),
        (t[0] = r),
        (t[1] = n),
        (t[2] = a),
        (t[3] = i),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function J(e, t) {
  return L(t)
    ? e.formatMessage(
        {
          id: `composer.modelSettings.errorConfigValidation`,
          defaultMessage: `Couldn’t update model settings. Check your config.toml.{br}{br}{message}`,
          description: `Error shown when updating model settings fails because the configuration is invalid`,
        },
        { br: (0, H.createElement)(`br`), message: t.message },
      )
    : e.formatMessage({
        id: `composer.modelSettings.errorGeneric`,
        defaultMessage: `Couldn’t update model settings`,
        description: `Error shown when updating model settings fails for a non-auth reason`,
      });
}
function Y(e = null) {
  let t = _(h),
    n = t.queryClient,
    r = M(e),
    i = r.hostId,
    o = v(G, i),
    u = E(i),
    d = p(),
    m = r.cwd,
    g = K({ hostId: i, cwd: m, isHostRegistered: o }),
    y = W(),
    b = v(l, e),
    x = v(s, e),
    S = x?.settings.model ?? null,
    C = S != null && S.trim().length > 0 ? S : null,
    w = u?.authMethod === `copilot`,
    T = (0, H.useCallback)(
      async (t, n) =>
        e == null || !b
          ? !1
          : (await c(`set-model-and-reasoning-for-next-turn`, {
              conversationId: e,
              model: t,
              reasoningEffort: n,
            }),
            !0),
      [e, b],
    ),
    k = b
      ? {
          model: C ?? g.model,
          reasoningEffort: x?.settings.reasoning_effort ?? null,
          profile: g.profile,
          isLoading: g.isLoading && C == null,
        }
      : w
        ? y
        : g,
    A = q({ hostId: i, cwd: m }),
    j = (0, H.useCallback)(
      (e) => {
        f.error(`Failed to update model and reasoning effort`, {
          safe: {},
          sensitive: { error: e },
        });
        let n = t.get(D),
          r = J(d, e);
        if (L(e)) {
          n.danger(r, {
            id: `composer.modelSettings.updateError`,
            description: (0, H.createElement)(
              `div`,
              { className: `mt-4` },
              (0, H.createElement)(O, { hostId: i }),
            ),
          });
          return;
        }
        n.danger(r, { id: `composer.modelSettings.updateError` });
      },
      [i, d, t],
    );
  return {
    setModelAndReasoningEffortForNextTurn: (0, H.useCallback)(
      async (e, t) => {
        try {
          if (!(await T(e, t)))
            throw Error(`No conversation available for next-turn model update`);
        } catch (e) {
          throw (j(e), e);
        }
      },
      [T, j],
    ),
    setModelAndReasoningEffort: (0, H.useCallback)(
      async (e, r) => {
        let s = null,
          l;
        try {
          if (await T(e, r)) return;
          if (w) {
            a(t, `copilot-default-model`, e);
            return;
          }
          if (
            (f.info(`Setting default model and reasoning effort`, {
              safe: { newModel: e, newEffort: r, profile: g.profile },
            }),
            !o)
          )
            return;
          ((s = U(i, m)),
            await n.cancelQueries({ exact: !0, queryKey: s }),
            (l = n.getQueryData(s)),
            n.setQueryData(s, (t) =>
              t == null
                ? t
                : Object.assign(structuredClone(t), {
                    model: e,
                    model_reasoning_effort: r,
                  }),
            ),
            await c(`set-default-model-config-for-host`, {
              hostId: i,
              model: e,
              reasoningEffort: r,
              profile: g.profile,
            }),
            await A(),
            await t.query.fetch(F, { hostId: i, cwd: m }));
        } catch (e) {
          (s != null && n.setQueryData(s, l), j(e));
        }
      },
      [w, T, g.profile, A, o, i, n, t, j, m],
    ),
    modelSettings: k,
  };
}
export { F as i, z as n, R as r, Y as t };
//# sourceMappingURL=use-model-settings-BGTYyORt.js.map
