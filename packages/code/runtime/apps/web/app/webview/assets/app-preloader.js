import { t as e } from "./jsx-runtime.js";
import { xt as t } from "./setting-storage.js";
import { t as n } from "./loading-page.js";
var r = t(),
  i = e();
function a(e) {
  let t = (0, r.c)(2),
    { debugName: a } = e,
    o;
  return (
    t[0] === a
      ? (o = t[1])
      : ((o = (0, i.jsx)(n, { debugName: a })), (t[0] = a), (t[1] = o)),
    o
  );
}
export { a as t };
//# sourceMappingURL=app-preloader.js.map
