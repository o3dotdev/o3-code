import { ss as e } from "./app-server-manager-signals-7MlBpIlX.js";
import { xt as t, y as n } from "./setting-storage-kJblH-wH.js";
import { i as r } from "./use-permissions-mode-BBZBxA7Q.js";
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
//# sourceMappingURL=use-start-new-conversation-B-ccKQqp.js.map
