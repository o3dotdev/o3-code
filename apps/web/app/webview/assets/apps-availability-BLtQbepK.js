import { Xs as e } from "./app-server-manager-signals-DkRDRgNB.js";
import {
  C as t,
  G as n,
  L as r,
  S as i,
  V as a,
  X as o,
  Y as s,
  w as c,
  wt as l,
} from "./setting-storage.js";
import { t as u } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import { C as d, s as f } from "./config-queries-BBeTQbuo.js";
import { n as p } from "./apps-queries-CmwRqoKz.js";
import { r as m } from "./toast-signal.js";
var h = l(),
  g = `apps`,
  _ = a({
    enableSuccess: {
      id: `apps.enable.success`,
      defaultMessage: `{appName} app enabled`,
      description: `Toast shown after successfully enabling an app`,
    },
    disableSuccess: {
      id: `apps.disable.success`,
      defaultMessage: `{appName} app disabled`,
      description: `Toast shown after successfully disabling an app`,
    },
    updateError: {
      id: `apps.update.error`,
      defaultMessage: `Failed to update app`,
      description: `Toast shown when enabling or disabling an app fails`,
    },
  });
function v(a) {
  let l = (0, h.c)(28),
    g = a?.hostId ?? `local`,
    v = o(i),
    { data: b } = s(d, g),
    x = r(),
    S = u(),
    C = n(),
    w;
  l[0] === g ? (w = l[1]) : ((w = p(g)), (l[0] = g), (l[1] = w));
  let T = w,
    E;
  l[2] !== T || l[3] !== S
    ? ((E = async () => {
        await Promise.all([S(T), S(f), S([`user-saved-config`])]);
      }),
      (l[2] = T),
      (l[3] = S),
      (l[4] = E))
    : (E = l[4]);
  let D = E,
    O;
  l[5] !== g ||
  l[6] !== b?.configWriteTarget?.expectedVersion ||
  l[7] !== b?.configWriteTarget?.filePath
    ? ((O = async (t) => {
        let { appId: n, enabled: r } = t;
        await e(`batch-write-config-value`, {
          hostId: g,
          edits: y({ appId: n, enabled: r }),
          filePath: b?.configWriteTarget?.filePath ?? null,
          expectedVersion: b?.configWriteTarget?.expectedVersion ?? null,
          reloadUserConfig: !0,
        });
      }),
      (l[5] = g),
      (l[6] = b?.configWriteTarget?.expectedVersion),
      (l[7] = b?.configWriteTarget?.filePath),
      (l[8] = O))
    : (O = l[8]);
  let k;
  l[9] !== T || l[10] !== x
    ? ((k = async (e) => {
        let { appId: t, enabled: n } = e;
        await x.cancelQueries({ queryKey: T });
        let r = x.getQueryData(T);
        return (
          r &&
            x.setQueryData(
              T,
              r.map((e) =>
                e.id !== t || e.isEnabled === n ? e : { ...e, isEnabled: n },
              ),
            ),
          { previousApps: r }
        );
      }),
      (l[9] = T),
      (l[10] = x),
      (l[11] = k))
    : (k = l[11]);
  let A, j;
  l[12] !== T || l[13] !== C || l[14] !== x || l[15] !== v
    ? ((A = (e, t) => {
        let { appId: n, enabled: r } = t,
          i = x.getQueryData(T)?.find((e) => e.id === n)?.name ?? n;
        v.get(m).success(
          C.formatMessage(r ? _.enableSuccess : _.disableSuccess, {
            appName: i,
          }),
        );
      }),
      (j = (e, n, r) => {
        (t.error(`Failed to update app enablement`, {
          safe: {},
          sensitive: { error: e },
        }),
          v.get(m).danger(C.formatMessage(_.updateError)),
          r?.previousApps && x.setQueryData(T, r.previousApps));
      }),
      (l[12] = T),
      (l[13] = C),
      (l[14] = x),
      (l[15] = v),
      (l[16] = A),
      (l[17] = j))
    : ((A = l[16]), (j = l[17]));
  let M;
  l[18] !== D || l[19] !== O || l[20] !== k || l[21] !== A || l[22] !== j
    ? ((M = {
        mutationFn: O,
        onMutate: k,
        onSuccess: A,
        onError: j,
        onSettled: D,
      }),
      (l[18] = D),
      (l[19] = O),
      (l[20] = k),
      (l[21] = A),
      (l[22] = j),
      (l[23] = M))
    : (M = l[23]);
  let N = c(M),
    P = N.isPending ? (N.variables?.appId ?? null) : null,
    F;
  return (
    l[24] !== N.isPending || l[25] !== N.mutateAsync || l[26] !== P
      ? ((F = {
          setAppEnabled: N.mutateAsync,
          isUpdating: N.isPending,
          updatingAppId: P,
        }),
        (l[24] = N.isPending),
        (l[25] = N.mutateAsync),
        (l[26] = P),
        (l[27] = F))
      : (F = l[27]),
    F
  );
}
function y({ appId: e, enabled: t }) {
  return [{ keyPath: `${g}.${e}.enabled`, value: t, mergeStrategy: `upsert` }];
}
export { v as t };
//# sourceMappingURL=apps-availability-BLtQbepK.js.map
