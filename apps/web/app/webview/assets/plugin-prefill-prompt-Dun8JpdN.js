import { hr as e } from "./app-server-manager-signals-7MlBpIlX.js";
import { g as t } from "./mention-item-qEZjEnZz.js";
function n(e) {
  return e?.map((e) => e.trim()).find((e) => e.length > 0) ?? null;
}
function r({ defaultPrompt: n, pluginDisplayName: r, pluginId: i }) {
  return `${`[@${r}](${e(t(i))})`} ${n?.trim() ?? ``}`;
}
export { n, r as t };
//# sourceMappingURL=plugin-prefill-prompt-Dun8JpdN.js.map
