import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  gn as t,
  kt as n,
  na as r,
  ta as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { y as a } from "./setting-storage.js";
var o = e(t(), 1),
  s = { BROWSE: `browse`, COMMENT: `comment` },
  c = n(`browser-sidebar-bottom-reserve-collapsed-v1`, !1);
function l({
  browserTabId: e,
  browserConversationId: t,
  fallbackBrowserConversationId: n,
  comments: s,
  onCommentsChange: c,
}) {
  let l = t ?? n;
  if (l == null || !s.some(r)) return !1;
  c([]);
  let u = s.filter(r),
    d = (0, o.default)(u.map(i).filter((e) => e != null)),
    f = u.some((e) => i(e) == null);
  if ((e != null && f && !d.includes(e) && d.push(e), d.length === 0))
    return (
      a.dispatchMessage(`browser-sidebar-command`, {
        ...(e == null ? {} : { browserTabId: e }),
        conversationId: l,
        command: { type: `clear-comments` },
      }),
      !0
    );
  for (let e of d)
    a.dispatchMessage(`browser-sidebar-command`, {
      browserTabId: e,
      conversationId: l,
      command: { type: `clear-comments` },
    });
  return !0;
}
export { c as n, l as r, s as t };
//# sourceMappingURL=browser-sidebar-state-BftrCPEH.js.map
