import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  $s as t,
  Da as n,
  Ps as r,
  R as i,
  Xs as a,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as o } from "./jsx-runtime.js";
import { C as s, Y as c, bt as l, wt as u } from "./setting-storage.js";
import { r as d } from "./app-server-manager-hooks.js";
import { n as f } from "./tooltip-dismiss.js";
import { t as p } from "./use-model-settings-BGTYyORt.js";
import { t as m } from "./collaboration-mode-queries.js";
var h = r(`skip-full-access-confirm`, !1),
  g = r(`composer-best-of-n`, 1),
  _ = r(`prompt-history`, []),
  v = r(`composer-auto-context-enabled`, !0),
  y = l(null),
  b = l({}),
  x = u(),
  S = e(o(), 1);
function C(e) {
  let r = (0, x.c)(48),
    o = e === void 0 ? null : e,
    l = c(i, o),
    u = d(o),
    { modelSettings: h } = p(o),
    [g, _] = t(y),
    v;
  r[0] === u ? (v = r[1]) : ((v = u.getHostId()), (r[0] = u), (r[1] = v));
  let { data: b, isFetching: C } = c(m, v),
    w;
  r[2] !== h.model || r[3] !== h.reasoningEffort
    ? ((w = {
        mode: n,
        settings: {
          model: h.model,
          reasoning_effort: h.reasoningEffort,
          developer_instructions: null,
        },
      }),
      (r[2] = h.model),
      (r[3] = h.reasoningEffort),
      (r[4] = w))
    : (w = r[4]);
  let T = w,
    E = !C && !h.isLoading,
    D = l,
    O = D?.mode ?? g ?? `default`,
    k,
    A;
  if (
    r[5] !== b ||
    r[6] !== T ||
    r[7] !== h.model ||
    r[8] !== h.reasoningEffort ||
    r[9] !== O ||
    r[10] !== D
  ) {
    let e;
    (r[13] !== h.model || r[14] !== h.reasoningEffort
      ? ((e = (e) => {
          if (e.mode == null) return [];
          let t = {
            mode: e.mode,
            settings: {
              model: e.model,
              reasoning_effort: e.reasoning_effort,
              developer_instructions: null,
            },
          };
          return [
            {
              ...t,
              settings: {
                ...t.settings,
                model: h.model,
                reasoning_effort: h.reasoningEffort,
              },
            },
          ];
        }),
        (r[13] = h.model),
        (r[14] = h.reasoningEffort),
        (r[15] = e))
      : (e = r[15]),
      (k = (b ?? []).flatMap(e)),
      (A = D ?? k.find((e) => e.mode === O) ?? T),
      (r[5] = b),
      (r[6] = T),
      (r[7] = h.model),
      (r[8] = h.reasoningEffort),
      (r[9] = O),
      (r[10] = D),
      (r[11] = k),
      (r[12] = A));
  } else ((k = r[11]), (A = r[12]));
  let j = A,
    M;
  r[16] !== T || r[17] !== k
    ? ((M = (e) => (e ? k.find((t) => t.mode === e) : null) ?? T),
      (r[16] = T),
      (r[17] = k),
      (r[18] = M))
    : (M = r[18]);
  let N = M,
    P;
  r[19] !== o || r[20] !== N || r[21] !== _
    ? ((P = (e) => {
        if ((f(), o)) {
          try {
            a(`set-latest-collaboration-mode-for-conversation`, {
              conversationId: o,
              collaborationMode: N(e),
            }).catch((e) => {
              s.error(`Failed to set collaboration mode`, {
                safe: { conversationId: o },
                sensitive: { error: e },
              });
            });
          } catch (e) {
            let t = e;
            s.error(`Failed to set collaboration mode`, {
              safe: { conversationId: o },
              sensitive: { error: t },
            });
          }
          return;
        }
        _(e);
      }),
      (r[19] = o),
      (r[20] = N),
      (r[21] = _),
      (r[22] = P))
    : (P = r[22]);
  let F = P,
    I;
  r[23] !== k || r[24] !== O || r[25] !== F
    ? ((I = () => {
        let e = k.find((e) => e.mode === O)?.mode ?? `default`;
        e !== O && F(e);
      }),
      (r[23] = k),
      (r[24] = O),
      (r[25] = F),
      (r[26] = I))
    : (I = r[26]);
  let L = (0, S.useEffectEvent)(I),
    R;
  r[27] !== E || r[28] !== k.length || r[29] !== L
    ? ((R = () => {
        E && k.length > 0 && L();
      }),
      (r[27] = E),
      (r[28] = k.length),
      (r[29] = L),
      (r[30] = R))
    : (R = r[30]);
  let z;
  (r[31] !== E || r[32] !== k
    ? ((z = [k, E]), (r[31] = E), (r[32] = k), (r[33] = z))
    : (z = r[33]),
    (0, S.useEffect)(R, z));
  let B;
  r[34] !== j.settings || r[35] !== h.model || r[36] !== h.reasoningEffort
    ? ((B = {
        ...j.settings,
        model: h.model,
        reasoning_effort: h.reasoningEffort,
      }),
      (r[34] = j.settings),
      (r[35] = h.model),
      (r[36] = h.reasoningEffort),
      (r[37] = B))
    : (B = r[37]);
  let V;
  r[38] !== j || r[39] !== B
    ? ((V = { ...j, settings: B }), (r[38] = j), (r[39] = B), (r[40] = V))
    : (V = r[40]);
  let H = !E,
    U;
  return (
    r[41] !== N ||
    r[42] !== k ||
    r[43] !== O ||
    r[44] !== F ||
    r[45] !== V ||
    r[46] !== H
      ? ((U = {
          modes: k,
          activeMode: V,
          selectedMode: O,
          getModeForSelection: N,
          setSelectedMode: F,
          isLoading: H,
        }),
        (r[41] = N),
        (r[42] = k),
        (r[43] = O),
        (r[44] = F),
        (r[45] = V),
        (r[46] = H),
        (r[47] = U))
      : (U = r[47]),
    U
  );
}
export { _ as a, b as i, g as n, h as o, v as r, C as t };
//# sourceMappingURL=use-collaboration-mode-CQFe-Ilp.js.map
