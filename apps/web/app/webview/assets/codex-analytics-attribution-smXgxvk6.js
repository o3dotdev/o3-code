import { V as e } from "./app-server-manager-signals-7MlBpIlX.js";
import { Z as t } from "./setting-storage-kJblH-wH.js";
import { t as n } from "./route-scope-VKCI3pUD.js";
var r = t(n, ({ get: t, scope: n }) => {
  if (!(`conversationId` in n.value)) return null;
  let r = t(t(e, n.value.conversationId));
  return r?.turnId == null
    ? null
    : { threadId: n.value.conversationId, turnId: r.turnId };
});
export { r as t };
//# sourceMappingURL=codex-analytics-attribution-smXgxvk6.js.map
