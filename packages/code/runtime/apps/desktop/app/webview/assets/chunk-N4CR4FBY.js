const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dagre-6UL2VRFP.js",
      "./dist-Dkaf81wL.js",
      "./chunk.js",
      "./chunk-JA3XYJ7Z.js",
      "./src-DXdm7MTq.js",
      "./string.js",
      "./chunk-S3R3BYOJ.js",
      "./monotone.js",
      "./math.js",
      "./chunk-ABZYJK2D.js",
      "./preload-helper.js",
      "./isArrayLikeObject.js",
      "./marked.esm.js",
      "./dagre.js",
      "./graphlib.js",
      "./isEmpty.js",
      "./_baseUniq.js",
      "./_basePickBy.js",
      "./clone.js",
      "./chunk-ATLVNIR6.js",
      "./chunk-CVBHYZKI.js",
      "./chunk-HN2XXSSU.js",
      "./chunk-JZLCHNYA.js",
      "./chunk-QXUST7PY.js",
      "./line.js",
      "./path.js",
      "./array.js",
      "./cose-bilkent-S5V4N54A.js",
      "./cytoscape.esm.js",
    ]),
) => i.map((i) => d[i]);
import { t as e } from "./preload-helper.js";
import { u as t } from "./chunk-S3R3BYOJ.js";
import { i as n, r } from "./src-DXdm7MTq.js";
import { s as i, y as a } from "./chunk-ABZYJK2D.js";
import { a as o, i as s, s as c } from "./chunk-JZLCHNYA.js";
import { a as l, i as u, n as d, r as f } from "./chunk-QXUST7PY.js";
var p = {
    common: i,
    getConfig: a,
    insertCluster: s,
    insertEdge: d,
    insertEdgeLabel: f,
    insertMarkers: u,
    insertNode: o,
    interpolateToCurve: t,
    labelHelper: c,
    log: n,
    positionEdgeLabel: l,
  },
  m = {},
  h = r((e) => {
    for (let t of e) m[t.name] = t;
  }, `registerLayoutLoaders`);
r(() => {
  h([
    {
      name: `dagre`,
      loader: r(
        async () =>
          await e(
            () => import(`./dagre-6UL2VRFP.js`),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24, 25, 26,
            ]),
            import.meta.url,
          ),
        `loader`,
      ),
    },
    ...[
      {
        name: `cose-bilkent`,
        loader: r(
          async () =>
            await e(
              () => import(`./cose-bilkent-S5V4N54A.js`),
              __vite__mapDeps([27, 2, 28, 4, 5]),
              import.meta.url,
            ),
          `loader`,
        ),
      },
    ],
  ]);
}, `registerDefaultLayoutLoaders`)();
var g = r(async (e, t) => {
    if (!(e.layoutAlgorithm in m))
      throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
    let n = m[e.layoutAlgorithm];
    return (await n.loader()).render(e, t, p, { algorithm: n.algorithm });
  }, `render`),
  _ = r((e = ``, { fallback: t = `dagre` } = {}) => {
    if (e in m) return e;
    if (t in m)
      return (
        n.warn(
          `Layout algorithm ${e} is not registered. Using ${t} as fallback.`,
        ),
        t
      );
    throw Error(`Both layout algorithms ${e} and ${t} are not registered.`);
  }, `getRegisteredLayoutAlgorithm`);
export { h as n, g as r, _ as t };
//# sourceMappingURL=chunk-N4CR4FBY.js.map
