import { Xs as e, v as t } from "./app-server-manager-signals-DkRDRgNB.js";
import { S as n, _ as r, nt as i, rt as a } from "./setting-storage.js";
var o = [`plan`, `default`];
function s(e) {
  let t = e.mode;
  return t == null || t === `plan` || t === `default`
    ? e
    : { ...e, mode: `default` };
}
function c(e, t) {
  let n = {};
  for (let t of e) {
    let e = s(t);
    e.mode == null || n[e.mode] || (n[e.mode] = e);
  }
  let r = [];
  for (let e of t) {
    let t = n[e];
    t && r.push(t);
  }
  return r;
}
function l(t) {
  return {
    queryKey: [`collaboration-modes`, `list`, t],
    staleTime: r.INFINITE,
    queryFn: async () =>
      c((await e(`list-collaboration-modes`, { hostId: t })).data, o),
  };
}
var u = i(n, (e) => l(e)),
  d = a(n, ({ get: e }) => l(e(t)));
export { d as n, u as t };
//# sourceMappingURL=collaboration-mode-queries.js.map
