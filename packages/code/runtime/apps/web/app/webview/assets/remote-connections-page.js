import "./src-BLHmAhbF.js";
import "./app-server-manager-signals.js";
import { t as e } from "./jsx-runtime.js";
import "./marked.esm.js";
import { xt as t } from "./setting-storage.js";
import { r as n } from "./chunk-LFPYN7LY.js";
import "./product-logger.js";
import "./statsig.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import { n as r } from "./remote-connection-visibility.js";
var i = t(),
  a = e();
function o() {
  let e = (0, i.c)(2);
  if (!r()) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, a.jsx)(n, { to: `/`, replace: !0 })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let t;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, a.jsx)(n, { to: `/settings/connections`, replace: !0 })),
        (e[1] = t))
      : (t = e[1]),
    t
  );
}
export { o as RemoteConnectionsPage };
//# sourceMappingURL=remote-connections-page.js.map
