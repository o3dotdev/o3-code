import { Ps as e, ec as t } from "./app-server-manager-signals-DkRDRgNB.js";
var n = e(`environment`, null),
  r = () => t(n);
function i(e) {
  return Array.isArray(e?.repos) ? e.repos[0] : void 0;
}
function a(e) {
  if (e == null) return null;
  let t = i(e);
  return t == null ? null : ((e.repo_map ?? {})[t] ?? null);
}
export { r as i, a as n, i as r, n as t };
//# sourceMappingURL=use-environment.js.map
