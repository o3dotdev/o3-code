import { $ as e, S as t, _ as n, d as r } from "./setting-storage.js";
var i = r(t, `gh-cli-status`, (e) => ({
    gcTime: n.INFINITE,
    params: { hostId: e },
    staleTime: (e) =>
      e.state.data?.isInstalled === !0 && e.state.data.isAuthenticated === !0
        ? n.INFINITE
        : n.FIVE_SECONDS,
  })),
  a = e(t, (e, { get: t }) => {
    let n = t(i, e);
    return n.isError
      ? `error`
      : n.data == null
        ? `loading`
        : n.data.isInstalled
          ? n.data.isAuthenticated
            ? `available`
            : `unauthenticated`
          : `missing`;
  });
function o(e, t) {
  e.query.invalidate(i, t);
}
export { o as n, a as t };
//# sourceMappingURL=gh-cli-status-query-DoYMwBhd.js.map
