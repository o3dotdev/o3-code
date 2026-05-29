import { Ni as e, ji as t, qi as n } from "./src-C.js";
import { Q as r, Xs as i } from "./app-server-manager-signals-DkRDRgNB.js";
import { S as a, Y as o, _ as s, nt as c, wt as l } from "./setting-storage.js";
import { a as u } from "./statsig--EYRNU53.js";
import { n as d } from "./use-auth.js";
import { r as f } from "./models-and-reasoning-efforts-qLdGz-ul.js";
var p = l(),
  m = [],
  h = { availableModels: new Set(m), useHiddenModels: !1, defaultModel: f };
function g() {
  let e = (0, p.c)(2),
    { value: t } = u(`107580212`),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = _(t)), (e[0] = t), (e[1] = n)), n);
}
function _(r) {
  let i = t(n()).safeParse(r.available_models),
    a = e().safeParse(r.use_hidden_models),
    o = n().safeParse(r.default_model);
  return {
    availableModels: new Set(i.success ? i.data : m),
    useHiddenModels: a.success ? a.data : h.useHiddenModels,
    defaultModel: o.success ? o.data : h.defaultModel,
  };
}
var v = 100,
  y = [`models`, `list`];
function b(e, t, n = v) {
  return [...y, e, t ?? `no-auth`, n];
}
var x = c(
  a,
  (
    {
      availableModels: e,
      authMethod: t,
      defaultModel: n,
      hostId: a,
      isAuthLoading: o,
      limit: c,
      shouldUseAvailabilityAllowlist: l,
    },
    { get: u },
  ) => ({
    queryKey: b(a, t, c),
    enabled: u(r).includes(a) && !o,
    staleTime: s.FIVE_MINUTES,
    queryFn: () =>
      i(`list-models-for-host`, {
        hostId: a,
        includeHidden: !0,
        cursor: null,
        limit: c,
      }),
    select: ({ data: r }) => {
      let i = [],
        a = new Set(e),
        o = null;
      return (
        r.forEach((e) => {
          if (l ? a.has(e.model) : !e.hidden) {
            let n =
              t === `copilot`
                ? [
                    e.supportedReasoningEfforts.find(
                      (e) => e.reasoningEffort === `medium`,
                    ) ?? {
                      reasoningEffort: `medium`,
                      description: `medium effort`,
                    },
                  ]
                : [...e.supportedReasoningEfforts];
            (i.push({ ...e, supportedReasoningEfforts: n }),
              e.isDefault && (o = e));
          }
        }),
        (o ??= i.find((e) => e.model === n) ?? null),
        { models: i, defaultModel: o }
      );
    },
  }),
);
function S(e) {
  let t = (0, p.c)(10),
    n = e?.hostId ?? `local`,
    r = e?.limit ?? v,
    i = d(n),
    a = i?.authMethod ?? null,
    s = i?.isLoading ?? !1,
    c = g(),
    l;
  t[0] === c.availableModels
    ? (l = t[1])
    : ((l = Array.from(c.availableModels).sort()),
      (t[0] = c.availableModels),
      (t[1] = l));
  let u = c.useHiddenModels && a !== `amazonBedrock`,
    f;
  return (
    t[2] !== a ||
    t[3] !== n ||
    t[4] !== s ||
    t[5] !== r ||
    t[6] !== c.defaultModel ||
    t[7] !== l ||
    t[8] !== u
      ? ((f = {
          availableModels: l,
          authMethod: a,
          defaultModel: c.defaultModel,
          hostId: n,
          isAuthLoading: s,
          limit: r,
          shouldUseAvailabilityAllowlist: u,
        }),
        (t[2] = a),
        (t[3] = n),
        (t[4] = s),
        (t[5] = r),
        (t[6] = c.defaultModel),
        (t[7] = l),
        (t[8] = u),
        (t[9] = f))
      : (f = t[9]),
    o(x, f)
  );
}
function C(e) {
  return e !== `pending`;
}
export { S as n, g as r, C as t };
//# sourceMappingURL=model-queries-CVdTsyPv.js.map
