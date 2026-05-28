import { pa as e } from "./app-server-manager-signals.js";
function t(t) {
  return e(t?.source)?.parentThreadId != null;
}
function n(e, n) {
  return !n && t(e);
}
export { n, t };
//# sourceMappingURL=is-subagent-conversation.js.map
