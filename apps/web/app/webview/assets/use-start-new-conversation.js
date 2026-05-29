import { nc as e } from "./app-server-manager-signals-DkRDRgNB.js";
import { S as t, X as n, wt as r, y as i } from "./setting-storage.js";
import { i as a } from "./use-permissions-mode.js";
import { t as o } from "./select-project.js";
var s = r();
function c() {
  let r = (0, s.c)(3),
    i = n(t),
    a = e(),
    o;
  return (
    r[0] !== i || r[1] !== a
      ? ((o = (e) => {
          l(i, a, e);
        }),
        (r[0] = i),
        (r[1] = a),
        (r[2] = o))
      : (o = r[2]),
    o
  );
}
function l(e, t, n) {
  a(t);
  let { activeProject: r, startInSidebar: s, ...c } = n ?? {};
  r !== void 0 && o(e, r);
  let l = { ...c, focusComposerNonce: Date.now() };
  i.dispatchHostMessage({ type: `navigate-to-route`, path: `/`, state: l });
}
export { c as n, l as t };
//# sourceMappingURL=use-start-new-conversation.js.map
