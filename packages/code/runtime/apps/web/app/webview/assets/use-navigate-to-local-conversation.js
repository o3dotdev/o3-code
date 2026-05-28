import { s as e } from "./chunk.js";
import { Z as t, pr as n } from "./src-BLHmAhbF.js";
import { t as r } from "./react-dom.js";
import { xt as i } from "./setting-storage.js";
import { f as a } from "./chunk-LFPYN7LY.js";
import { t as o } from "./use-stable-callback.js";
var s = i(),
  c = e(r(), 1);
function l() {
  let e = (0, s.c)(2),
    r = a(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = (e, i) => {
          let a = n(e),
            o = i ?? t(a);
          (0, c.flushSync)(() => {
            r(o);
          });
        }),
        (e[0] = r),
        (e[1] = i)),
    o(i)
  );
}
export { l as t };
//# sourceMappingURL=use-navigate-to-local-conversation.js.map
