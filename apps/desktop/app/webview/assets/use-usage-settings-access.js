import { _ as e, p as t, wt as n } from "./setting-storage.js";
import { d as r, o as i, u as a } from "./statsig--EYRNU53.js";
import { t as o } from "./use-auth.js";
import { p as s } from "./codex-api-bK--r_2t.js";
import { n as c, t as l } from "./skus-JiYadAsS.js";
var u = n(),
  d = `1636924626`,
  f = `enable_free_go_usage_settings`;
function p() {
  let n = (0, u.c)(21),
    { authMethod: l, isLoading: p } = o(),
    h = l === `chatgpt`,
    _ = a(d),
    v = i(`3909937021`),
    y = r(),
    { data: b, isLoading: x, hasEverErrored: S } = s(),
    C;
  n[0] === h
    ? (C = n[1])
    : ((C = { queryConfig: { enabled: h, staleTime: e.ONE_MINUTE } }),
      (n[0] = h),
      (n[1] = C));
  let { data: w, isLoading: T } = t(`account-info`, C),
    E = b?.plan_type ?? (!x || S ? w?.plan : void 0),
    D;
  n[2] === E ? (D = n[3]) : ((D = g(E)), (n[2] = E), (n[3] = D));
  let O = D,
    k,
    A,
    j,
    M;
  if (
    n[4] !== l ||
    n[5] !== S ||
    n[6] !== h ||
    n[7] !== x ||
    n[8] !== O ||
    n[9] !== v ||
    n[10] !== y ||
    n[11] !== E ||
    n[12] !== _
  ) {
    let e = c(E),
      t = h && O && !y ? _.get(f, !1) : !1,
      r = h && e && !y && v;
    ((k = h && x && !S),
      (j = h && O && y),
      (A = h && e && y),
      (M = m({
        authMethod: l,
        plan: E,
        isFreeGoUsageSettingsEnabled: t,
        isEnterpriseUsageSettingsEnabled: r,
      })),
      (n[4] = l),
      (n[5] = S),
      (n[6] = h),
      (n[7] = x),
      (n[8] = O),
      (n[9] = v),
      (n[10] = y),
      (n[11] = E),
      (n[12] = _),
      (n[13] = k),
      (n[14] = A),
      (n[15] = j),
      (n[16] = M));
  } else ((k = n[13]), (A = n[14]), (j = n[15]), (M = n[16]));
  let N = p || (h && T) || k || j || A,
    P;
  return (
    n[17] !== E || n[18] !== M || n[19] !== N
      ? ((P = { ...M, isUsageSettingsAccessLoading: N, plan: E }),
        (n[17] = E),
        (n[18] = M),
        (n[19] = N),
        (n[20] = P))
      : (P = n[20]),
    P
  );
}
function m({
  authMethod: e,
  plan: t,
  isFreeGoUsageSettingsEnabled: n,
  isEnterpriseUsageSettingsEnabled: r = !1,
}) {
  let i = e === `chatgpt`,
    a = i && h(t),
    o = g(t),
    s = c(t);
  return {
    canManageCreditSettings: a,
    isUsageSettingsVisible: a || (i && o && n) || (i && s && r),
  };
}
function h(e) {
  return e === l.PLUS || e === l.PRO || e === l.PROLITE;
}
function g(e) {
  return e === l.FREE || e === l.GO;
}
export { p as t };
//# sourceMappingURL=use-usage-settings-access.js.map
