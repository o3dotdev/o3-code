import { Q as e, S as t, Z as n } from "./setting-storage.js";
import { i as r } from "./git-current-branch-query.js";
var i = r({
    method: `submodule-paths`,
    getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
    getOptions: (e) => ({
      refetchOnWindowFocus: e.refetchOnWindowFocus,
      select: (e) => e.paths,
      staleTime: e.staleTime,
    }),
  }).fromCwd$,
  a = e(t, (e) => n(t, ({ get: t }) => t(t(i, e)).data ?? null));
export { a as n, i as t };
//# sourceMappingURL=git-submodule-paths-query.js.map
