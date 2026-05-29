import {
  J as e,
  W as t,
  di as n,
  et as r,
  ft as i,
  j as a,
  nt as o,
  ui as s,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { $ as c, S as l, ot as u } from "./setting-storage.js";
var d = u(l, (e) => []),
  f = c(l, (e, { get: t }) => t(d, e).some((e) => t(a, e) === !0));
function p(e, t, n) {
  e.set(d, t, (e) => [...e, n]);
}
function m(e, t, n) {
  e.set(d, t, (e) => e.filter((e) => e !== n));
}
var h = c(l, (e, { get: n }) =>
    _({
      hasInProgressSideChat: n(f, e),
      isResponseInProgress: n(a, e),
      resumeState: n(o, e),
      threadRuntimeStatus: n(i, e),
      latestTurnHasSystemError: n(t, e) === !0,
    }),
  ),
  g = c(l, (t, { get: n }) =>
    v({
      pendingRequestType: n(e, t)?.type ?? null,
      requests: n(r, t),
      resumeState: n(o, t),
      threadRuntimeStatus: n(i, t),
    }),
  );
function _({
  hasInProgressSideChat: e,
  isResponseInProgress: t,
  latestTurnHasSystemError: n,
  resumeState: r,
  threadRuntimeStatus: i,
}) {
  return e
    ? `loading`
    : i?.type === `systemError`
      ? `error`
      : r === `needs_resume`
        ? i?.type === `active`
          ? `loading`
          : `idle`
        : n
          ? `error`
          : t === !0
            ? `loading`
            : `idle`;
}
function v({
  pendingRequestType: e,
  requests: t,
  resumeState: r,
  threadRuntimeStatus: i,
}) {
  return t == null || r == null
    ? null
    : r === `needs_resume`
      ? i?.type === `active` &&
        i.activeFlags.includes(`waitingOnApproval`) &&
        s(t)
        ? `approval`
        : i?.type === `active` && i.activeFlags.includes(`waitingOnUserInput`)
          ? `response`
          : null
      : n(e)
        ? `approval`
        : e === `userInput`
          ? `response`
          : null;
}
export { m as i, h as n, p as r, g as t };
//# sourceMappingURL=local-task-row-signals-BzazYVei.js.map
