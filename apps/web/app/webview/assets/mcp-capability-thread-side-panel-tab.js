import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t } from "./jsx-runtime.js";
import { i as n } from "./route-scope.js";
import { t as r } from "./apps-DwfMzB5Q.js";
import { n as i } from "./app-shell-tab-controller-BTWycTBb.js";
import { _ as a, t as o } from "./mcp-capability-view-frame-BVZUfJnz.js";
var s = e(t(), 1);
function c(
  e,
  t,
  {
    activate: c = !0,
    instanceId: u = crypto.randomUUID(),
    isPreview: d,
    readHostResource: f,
    tabId: p = l(t, u),
    title: m = t.title,
    toolArguments: h,
  } = {},
) {
  return n(e.value) == null
    ? null
    : (i.openTab(e, o, {
        icon: (0, s.createElement)(r, { className: `icon-xs shrink-0` }),
        id: p,
        props: {
          instanceId: u,
          ...(f == null ? {} : { readHostResource: f }),
          ...(h == null ? {} : { toolArguments: h }),
          view: t,
        },
        title: m,
        activate: c,
        ...(d == null ? {} : { isPreview: d }),
      }),
      c && a(e),
      p);
}
function l(e, t) {
  return `mcp-capability:${e.pluginId}:${e.server}:${e.tool.name}:${t}`;
}
export { c as t };
//# sourceMappingURL=mcp-capability-thread-side-panel-tab.js.map
