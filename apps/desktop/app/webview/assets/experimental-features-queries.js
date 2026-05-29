import { Gn as e } from "./src-C.js";
import { Xs as t } from "./app-server-manager-signals-DkRDRgNB.js";
import {
  C as n,
  L as r,
  S as i,
  _ as a,
  nt as o,
  w as s,
  wt as c,
} from "./setting-storage.js";
import { t as l } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import { s as u } from "./config-queries-BBeTQbuo.js";
var d = `memories`;
function f(e, t) {
  return t || e.some((e) => e.name === `memories` && e.enabled);
}
var p = `chronicle`,
  m = c(),
  h = 100,
  g = [`experimental-features`, `list`],
  _ = o(i, (e) => ({
    queryKey: [...g, e],
    queryFn: async () => {
      let r = async (n) => {
        let i = await t(`list-experimental-features`, {
          hostId: e,
          cursor: n,
          limit: h,
        });
        return i.nextCursor == null
          ? i.data
          : [...i.data, ...(await r(i.nextCursor))];
      };
      try {
        return await r(null);
      } catch (e) {
        return (
          n.error(`Failed to load experimental features`, {
            safe: { error: String(e) },
            sensitive: {},
          }),
          []
        );
      }
    },
    staleTime: a.ONE_MINUTE,
  }));
function v(i) {
  let a = (0, m.c)(17),
    { hostId: o } = i,
    c = r(),
    d;
  a[0] === o ? (d = a[1]) : ((d = [...g, o]), (a[0] = o), (a[1] = d));
  let f = d,
    p = l(),
    h;
  a[2] === o
    ? (h = a[3])
    : ((h = async (n) => {
        let { featureName: r, enabled: i } = n;
        return t(`batch-write-config-value`, {
          hostId: o,
          edits: [{ keyPath: e(r), value: i, mergeStrategy: `upsert` }],
          filePath: null,
          expectedVersion: null,
        });
      }),
      (a[2] = o),
      (a[3] = h));
  let _, v;
  a[4] !== f || a[5] !== c
    ? ((_ = (e) => {
        let { featureName: t, enabled: n } = e,
          r = c.getQueryData(f);
        return (
          r &&
            c.setQueryData(
              f,
              r.map((e) => (e.name === t ? { ...e, enabled: n } : e)),
            ),
          { previousFeatures: r }
        );
      }),
      (v = (e, t, r) => {
        (n.error(`Failed to update experimental feature`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          r?.previousFeatures && c.setQueryData(f, r.previousFeatures));
      }),
      (a[4] = f),
      (a[5] = c),
      (a[6] = _),
      (a[7] = v))
    : ((_ = a[6]), (v = a[7]));
  let y;
  a[8] !== f || a[9] !== p || a[10] !== c
    ? ((y = async (e, t, n) => {
        await Promise.all([
          c.invalidateQueries({ queryKey: f }),
          n.featureName === `memories` ? p(u) : Promise.resolve(),
        ]);
      }),
      (a[8] = f),
      (a[9] = p),
      (a[10] = c),
      (a[11] = y))
    : (y = a[11]);
  let b;
  return (
    a[12] !== h || a[13] !== _ || a[14] !== v || a[15] !== y
      ? ((b = { mutationFn: h, onMutate: _, onError: v, onSettled: y }),
        (a[12] = h),
        (a[13] = _),
        (a[14] = v),
        (a[15] = y),
        (a[16] = b))
      : (b = a[16]),
    s(b)
  );
}
export { d as a, p as i, _ as n, f as o, v as r, g as t };
//# sourceMappingURL=experimental-features-queries.js.map
