import {
  Gn as e,
  Jn as t,
  Kn as n,
  Nn as r,
  Qn as i,
  qn as a,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { $ as o, S as s, nt as c } from "./setting-storage.js";
function l({ getOptions: l, getParams: u, method: d }) {
  let f = c(
      s,
      (e) =>
        r(
          d,
          { commonDir: e.commonDir, root: e.root },
          u(e),
          i(e.hostConfig),
          e.hostConfig,
          { enabled: e.enabled, ...l?.(e) },
        ),
      { excludeFieldsFromKey: [`operationSource`] },
    ),
    p = o(
      s,
      (e, { get: t }) => (
        t(
          t(a, {
            commonDir: e.commonDir,
            enabled: e.enabled,
            hostConfig: e.hostConfig,
            operationSource: e.operationSource,
            root: e.root,
          }),
        ),
        t(f, e)
      ),
      { excludeFieldsFromKey: [`operationSource`] },
    );
  return {
    fromCwd$: o(
      s,
      (r, { get: i }) => {
        if (!r.enabled || r.cwd == null) return e();
        let a = i(t, {
            cwd: r.cwd,
            enabled: r.enabled,
            hostConfig: r.hostConfig,
            operationSource: r.operationSource,
            watchForGitInit: !1,
          }),
          o = a.data ?? null;
        if (o == null) return n(a);
        let { cwd: s, ...c } = r;
        return i(p, { ...c, commonDir: o.commonDir, root: o.root });
      },
      { excludeFieldsFromKey: [`operationSource`] },
    ),
    fromMetadata$: p,
    queryByMetadata$: f,
  };
}
var u = l({
    method: `current-branch`,
    getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
    getOptions: (e) => ({
      refetchOnWindowFocus: e.refetchOnWindowFocus,
      select: (e) => e.branch,
      ...(e.staleTime == null ? {} : { staleTime: e.staleTime }),
    }),
  }),
  d = u.fromMetadata$,
  f = u.fromCwd$,
  p = o(s, (e, { get: t }) => t(f, e).data ?? null);
export { l as i, f as n, p as r, d as t };
//# sourceMappingURL=git-current-branch-query.js.map
