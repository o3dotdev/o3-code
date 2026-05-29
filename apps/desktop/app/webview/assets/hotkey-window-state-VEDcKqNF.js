import { S as e, rt as t } from "./setting-storage.js";
import { n } from "./rpc-DqwD0euc.js";
var r = [`hotkey-window-hotkey-state`],
  i = t(e, () => ({
    queryKey: r,
    queryFn: async () => {
      let e = n.hotkeyWindowHotkeys;
      return e == null
        ? {
            supported: !1,
            configuredHotkey: null,
            isGateEnabled: !1,
            isDevMode: !1,
            isDevOverrideEnabled: !1,
            isActive: !1,
          }
        : e.getState();
    },
  }));
export { i as n, r as t };
//# sourceMappingURL=hotkey-window-state-VEDcKqNF.js.map
