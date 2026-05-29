import { zn as e } from "./src-C.js";
import {
  $ as t,
  S as n,
  _ as r,
  _t as i,
  l as a,
  nt as o,
  u as s,
} from "./setting-storage.js";
import { t as c } from "./gh-cli-status-query-DoYMwBhd.js";
var l = o(n, (t, { get: n }) => ({
    enabled:
      t.cwd != null &&
      t.headBranch.length > 0 &&
      n(c, t.hostId) === `available`,
    queryFn: () =>
      a(`gh-pr-status`, {
        source: t.operationSource,
        params: {
          cwd: e(t.cwd ?? `/`),
          headBranch: t.headBranch,
          hostId: t.hostId,
        },
      }),
    queryKey: s(`gh-pr-status`, {
      cwd: e(t.cwd ?? `/`),
      headBranch: t.headBranch,
      hostId: t.hostId,
    }),
    staleTime: h(t.operationSource),
    structuralSharing: p,
  })),
  u = t(n, (e, { get: t }) => {
    let n = t(l, e);
    return n.isError
      ? { type: `error` }
      : n.isLoading || n.data == null
        ? { type: `loading` }
        : n.data.status === `not-found`
          ? { type: `not-found` }
          : { type: `success`, data: n.data };
  }),
  d = t(n, (e, { get: t }) => {
    let n = t(l, e);
    return n.data?.status === `success` && n.data.hasOpenPr;
  }),
  f = t(n, (e, { get: t }) => {
    let n = t(l, e);
    return n.data?.status === `success` ? n.data.url : null;
  });
function p(e, t) {
  return m(e) &&
    e.mergeBlocker === `conflicts` &&
    m(t) &&
    e.url != null &&
    e.url === t.url &&
    t.mergeBlocker === `unknown`
    ? i(e, { ...t, mergeBlocker: `conflicts` })
    : i(e, t);
}
function m(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `status` in e &&
    e.status === `success` &&
    `mergeBlocker` in e &&
    `url` in e
  );
}
function h(e) {
  return e === `sidebar_task_pr_chip`
    ? r.ONE_MINUTE
    : e === `local_conversation_git_summary`
      ? r.FIFTEEN_SECONDS
      : r.FIVE_SECONDS;
}
export { f as i, u as n, l as r, d as t };
//# sourceMappingURL=gh-pull-request-status-query.js.map
