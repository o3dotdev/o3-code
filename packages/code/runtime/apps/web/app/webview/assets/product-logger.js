import { S as e, nt as t } from "./setting-storage.js";
var n = {
    logProductEvent: () => {},
    trackStructuredEvent: async () => {},
    trackCounter: async () => {},
    flush: async () => {},
    submitCodexAnalyticsEvent: null,
  },
  r = t(e, n);
function i(e, t) {
  e.get(r).logProductEvent(t);
}
export { n, r, i as t };
//# sourceMappingURL=product-logger.js.map
