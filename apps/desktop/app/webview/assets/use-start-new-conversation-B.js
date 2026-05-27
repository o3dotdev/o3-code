import { ss as e } from "./app-server-manager-signals.js";
import { xt as t, y as n } from "./setting-storage.js";
import { i as r } from "./use-permissions-mode.js";
var i = t();
function a() {
  let t = (0, i.c)(2),
    n = e(),
    a;
  return (
    t[0] === n
      ? (a = t[1])
      : ((a = (e, t) => {
          (r(n), o(e, t));
        }),
        (t[0] = n),
        (t[1] = a)),
    a
  );
}
function o(e, t) {
  let r = { ...e, focusComposerNonce: Date.now() };
  n.dispatchHostMessage({ type: `navigate-to-route`, path: `/`, state: r });
}
export { a as t };
//# sourceMappingURL=use-start-new-conversation-B.js.map
