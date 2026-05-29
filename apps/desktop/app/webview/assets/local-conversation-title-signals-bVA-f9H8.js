import {
  ht as e,
  lt as t,
  ni as n,
  pt as r,
  ri as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { $ as a, S as o } from "./setting-storage.js";
var s = a(o, (t, { get: i }) =>
    t == null ? null : n({ id: t, title: i(r, t), turns: i(e, t) }),
  ),
  c = a(o, (n, { get: r }) =>
    n == null ? null : (r(s, n) ?? i(n, r(e, r(t, n)))),
  );
export { c as n, s as t };
//# sourceMappingURL=local-conversation-title-signals-bVA-f9H8.js.map
