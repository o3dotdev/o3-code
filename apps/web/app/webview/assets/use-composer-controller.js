import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t } from "./jsx-runtime.js";
import { wt as n } from "./setting-storage.js";
import { a as r, i } from "./dist-Cp6055if.js";
var a = new r(`transactionEventPlugin`),
  o = `prosemirrorDispatchTransaction`;
function s(e, t) {
  let { eventTarget: n } = a.getState(e.state);
  return (
    n.addEventListener(o, t),
    () => {
      n.removeEventListener(o, t);
    }
  );
}
function c(e) {
  return new i({
    key: a,
    state: {
      init() {
        return { eventTarget: e };
      },
      apply(e, t) {
        return t;
      },
    },
  });
}
var l = e(t(), 1),
  u = (0, l.createContext)(null),
  d = n(),
  f = () => {
    let e = (0, l.useContext)(u);
    if (!e)
      throw Error(
        `useComposerController must be used within a ComposerControllerScope`,
      );
    return e;
  },
  p = (e, t) => {
    let n = (0, d.c)(6),
      r;
    n[0] === e.view
      ? (r = n[1])
      : ((r = (t) => s(e.view, t)), (n[0] = e.view), (n[1] = r));
    let i, a;
    return (
      n[2] !== e || n[3] !== t
        ? ((i = () => t(e)),
          (a = () => t(e)),
          (n[2] = e),
          (n[3] = t),
          (n[4] = i),
          (n[5] = a))
        : ((i = n[4]), (a = n[5])),
      (0, l.useSyncExternalStore)(r, i, a)
    );
  };
export { o as a, s as i, p as n, c as o, u as r, f as t };
//# sourceMappingURL=use-composer-controller.js.map
