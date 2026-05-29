import { U as e } from "./app-server-manager-signals-DkRDRgNB.js";
import { Q as t } from "./setting-storage.js";
import { t as n } from "./route-scope.js";
var r = t(n, ({ get: t, scope: n }) => {
  if (!(`conversationId` in n.value)) return null;
  let r = t(e, n.value.conversationId);
  return r?.turnId == null
    ? null
    : { threadId: n.value.conversationId, turnId: r.turnId };
});
export { r as t };
//# sourceMappingURL=codex-analytics-attribution.js.map
