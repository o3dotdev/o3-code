import { i as e } from "./src-C.js";
import {
  E as t,
  Qn as n,
  g as r,
  tt as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { Q as a } from "./setting-storage.js";
import {
  a as o,
  c as s,
  o as c,
  r as l,
  s as u,
  t as d,
} from "./thread-context-inputs-DBrOekVr.js";
import { t as f } from "./route-scope.js";
import { t as p } from "./use-webview-execution-target.js";
var m = a(f, ({ get: n, scope: a }) => {
    switch (a.value.routeKind) {
      case `home`:
      case `new-thread-panel`: {
        let e = n(i, null),
          { cwd: t, hostId: r } = p({
            activeWorkspaceRoot: n(d).data?.roots?.[0] ?? null,
            conversationCwd: null,
            conversationHostId: null,
            selectedRemoteProject: n(u),
          });
        return { cwd: t, hostId: r || e };
      }
      case `local-thread`: {
        let o = n(s)?.[a.value.conversationId],
          l =
            a.value.projectContext == null
              ? null
              : b({
                  defaultHostId: n(i, null),
                  hostId: a.value.projectContext.hostId,
                  projectId: a.value.projectContext.projectId,
                  remoteProjects: n(c),
                });
        return {
          cwd:
            l?.cwd ??
            o?.path ??
            n(r, a.value.conversationId) ??
            n(d).data?.roots?.[0] ??
            null,
          hostId:
            l?.hostId ??
            (o == null ? null : e(o)) ??
            n(t, a.value.conversationId) ??
            n(i, a.value.conversationId),
        };
      }
      case `remote-thread`:
        return { cwd: null, hostId: n(i, null) };
      case `other`:
        throw Error(`Thread context is unavailable for non-thread routes`);
    }
  }),
  h = a(f, ({ get: e, scope: t }) => {
    switch (t.value.routeKind) {
      case `home`:
      case `new-thread-panel`:
      case `local-thread`:
      case `remote-thread`:
        return e(l).data?.codexHome ?? null;
      case `other`:
        throw Error(`Thread context is unavailable for non-thread routes`);
    }
  }),
  g = a(f, ({ get: e }) => e(m).cwd),
  _ = a(f, ({ get: e }) => e(m).hostId),
  v = a(f, ({ get: e }) => e(o, e(_))),
  y = a(f, ({ get: e }) => n(e(v)));
function b({ defaultHostId: e, hostId: t, projectId: n, remoteProjects: r }) {
  return t == null
    ? { cwd: n, hostId: e }
    : { cwd: r.find((e) => e.id === n)?.remotePath ?? null, hostId: t };
}
export { y as a, _ as i, g as n, v as r, h as t };
//# sourceMappingURL=thread-context-CaET2O8s.js.map
