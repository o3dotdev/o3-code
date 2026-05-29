import { U as e, kt as t } from "./app-server-manager-signals-DkRDRgNB.js";
import { $ as n, S as r } from "./setting-storage.js";
var i = t(`heartbeat-thread-permissions-by-id`, {});
function a(e) {
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
function o(e) {
  return e?.turnId == null || e.params.collaborationMode == null
    ? null
    : a(e.params);
}
function s(e, t) {
  return o(e) ?? t ?? null;
}
var c = n(r, (t, { get: n }) => {
  let r = o(n(e, t));
  return r == null ? null : JSON.stringify(r);
});
function l(e, t, n) {
  return n == null || JSON.stringify(e[t]) === JSON.stringify(n)
    ? e
    : { ...e, [t]: n };
}
export { c as a, i, o as n, s as r, l as t };
//# sourceMappingURL=heartbeat-automation-permissions-DKKzssYc.js.map
