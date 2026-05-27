import { o as e } from "./statsig.js";
import { t } from "./use-platform.js";
function n() {
  let { platform: n } = t(),
    r = e(`1304276663`);
  return n === `macOS` && r;
}
export { n as t };
//# sourceMappingURL=use-is-appshot-available.js.map
