import { Q as e, X as t, Y as n, Z as r, rt as i, zr as a } from "./src-C.js";
import { S as o, it as s } from "./setting-storage.js";
import { u as c } from "./chunk-LFPYN7LY.js";
var l = s(`RouteScope`, {
  key: (e) => `${e.pathname}${e.search ?? ``}`,
  parent: o,
  retain: { max: 20 },
});
function u(e) {
  return e.routeKind === `local-thread` ? e.conversationId : null;
}
function d(e) {
  switch (e.routeKind) {
    case `home`:
      return a(`new-conversation`);
    case `new-thread-panel`:
      return a(`panel-new-conversation`);
    case `local-thread`:
      return e.conversationId;
    case `remote-thread`:
      return e.taskId;
    case `other`:
      return null;
  }
}
function f({ pathname: o, routeTemplate: s, search: l = `` }) {
  let u = c(e, o)?.params.conversationId ?? c(r, o)?.params.conversationId;
  if (u != null) {
    let e = new URLSearchParams(l),
      t = e.get(`projectId`),
      n = e.get(`hostId`);
    return {
      conversationId: a(u),
      pathname: o,
      projectContext: t == null ? null : { hostId: n, projectId: t },
      routeKind: `local-thread`,
      routeTemplate: s,
      search: l,
    };
  }
  let d = c(i, o)?.params.taskId ?? c(t, o)?.params.taskId;
  return d == null
    ? o === `/` || o === `/hotkey-window`
      ? { pathname: o, routeKind: `home`, routeTemplate: s, search: l }
      : o === `/extension/panel/new` || o === n
        ? {
            pathname: o,
            routeKind: `new-thread-panel`,
            routeTemplate: s,
            search: l,
          }
        : { pathname: o, routeKind: `other`, routeTemplate: s, search: l }
    : {
        pathname: o,
        routeKind: `remote-thread`,
        routeTemplate: s,
        search: l,
        taskId: d,
      };
}
export { d as i, f as n, u as r, l as t };
//# sourceMappingURL=route-scope.js.map
