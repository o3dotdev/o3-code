import { Mt as e, V as t } from "./app-server-manager-signals-7MlBpIlX.js";
import { Q as n, S as r, Z as i } from "./setting-storage-kJblH-wH.js";
var a = e(`heartbeat-thread-permissions-by-id`, {});
function o(e) {
  return e?.approvalPolicy == null ||
    e.approvalsReviewer == null ||
    e.sandboxPolicy == null
    ? null
    : {
        approvalPolicy: e.approvalPolicy,
        approvalsReviewer: e.approvalsReviewer,
        sandboxPolicy: e.sandboxPolicy,
      };
}
function s(e) {
  return e?.turnId == null || e.params.collaborationMode == null
    ? null
    : o(e.params);
}
function c(e, t) {
  return s(e) ?? t ?? null;
}
var l = n(r, (e) =>
  i(r, ({ get: n }) => {
    let r = s(n(n(t, e)));
    return r == null ? null : JSON.stringify(r);
  }),
);
function u(e, t, n) {
  return n == null || JSON.stringify(e[t]) === JSON.stringify(n)
    ? e
    : { ...e, [t]: n };
}
export { l as a, a as i, s as n, c as r, u as t };
//# sourceMappingURL=heartbeat-automation-permissions-u_SkHJ25.js.map
