import { kr as e } from "./src-C.js";
import {
  Pi as t,
  po as n,
  uo as r,
  wo as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import {
  $ as a,
  Q as o,
  S as s,
  _ as c,
  d as l,
  f as u,
  ht as d,
} from "./setting-storage.js";
var f = o(s, ({ get: e }) => i(e, `host_config`) ?? null),
  p = o(s, ({ get: e }) => [
    ...(i(e, `remote_connections`) ?? []),
    ...(i(e, `remote_control_connections`) ?? []),
  ]),
  m = l(s, `codex-home`, () => ({ staleTime: c.FIVE_SECONDS })),
  h = o(s, ({ get: e }) => e(m, void 0)),
  g = l(s, `home-directory`, () => ({ staleTime: c.FIVE_SECONDS })),
  _ = u(s, `active-workspace-roots`, {
    placeholderData: d,
    staleTime: c.FIVE_SECONDS,
  }),
  v = l(s, `workspace-root-options`, () => ({
    placeholderData: d,
    staleTime: c.INFINITE,
  })),
  y = u(s, `workspace-root-options`, {
    params: { hostId: n },
    placeholderData: d,
    staleTime: c.INFINITE,
  }),
  b = o(s, ({ get: n }) => t(n, e.REMOTE_PROJECTS) ?? []),
  x = o(s, ({ get: n }) => {
    let r = n(b),
      i = t(n, e.ACTIVE_REMOTE_PROJECT_ID);
    return i == null ? null : (r.find((e) => e.id === i) ?? null);
  }),
  S = o(s, ({ get: n }) => t(n, e.THREAD_PROJECT_ASSIGNMENTS)),
  C = a(s, (e, { get: t }) => {
    let n = t(f);
    return n != null && e === n.id ? n : r(e, t(p));
  });
export {
  C as a,
  S as c,
  g as i,
  v as l,
  m as n,
  b as o,
  h as r,
  x as s,
  _ as t,
  y as u,
};
//# sourceMappingURL=thread-context-inputs-DBrOekVr.js.map
