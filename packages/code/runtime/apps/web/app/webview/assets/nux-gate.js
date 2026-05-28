import { t as e } from "./jsx-runtime.js";
import { xt as t } from "./setting-storage.js";
import { r as n } from "./chunk-LFPYN7LY.js";
import { t as r } from "./app-preloader.js";
import { t as i } from "./use-nux.js";
var a = t(),
  o = e();
function s(e) {
  let t = (0, a.c)(4),
    { children: s } = e,
    c = i();
  if (c == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, o.jsx)(r, {})), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (c !== `none`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, o.jsx)(n, { to: `/first-run`, replace: !0 })), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let l;
  return (
    t[2] === s
      ? (l = t[3])
      : ((l = (0, o.jsx)(o.Fragment, { children: s })), (t[2] = s), (t[3] = l)),
    l
  );
}
export { s as t };
//# sourceMappingURL=nux-gate.js.map
