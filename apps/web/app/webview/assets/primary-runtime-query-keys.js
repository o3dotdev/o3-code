import { F as e, I as t, P as n } from "./src-C.js";
import { C as r, y as i } from "./setting-storage.js";
async function a(e) {
  try {
    let t = await e.updateUserAsync(e.getContext().user);
    t.success ||
      r.warning(`Failed to refresh Codex runtime config from Statsig`, {
        safe: {},
        sensitive: { updateDetails: t },
      });
  } catch (e) {
    r.warning(`Failed to refresh Codex runtime config from Statsig`, {
      safe: {},
      sensitive: { error: e },
    });
  }
  s(o(e));
}
function o(i) {
  let a = i.getLayer(`2096615506`).get(n, e),
    o = t.safeParse(a);
  return (
    o.success ||
      r.info(`Invalid Codex runtime install config; using default runtime`, {
        safe: {},
        sensitive: { runtimeInstallConfig: a, error: o.error },
      }),
    {
      source: a === e ? `default` : `statsig-layer`,
      value: o.success ? o.data : e,
    }
  );
}
function s(e) {
  (r.info(`Codex runtime config selected`, {
    safe: { artifact: n, source: e.source },
    sensitive: { runtimeInstallConfig: e.value },
  }),
    i.dispatchMessage(`codex-runtimes-config-changed`, { config: c(e.value) }));
}
function c(e) {
  return { runtimes: { [n]: e } };
}
var l = [`app-host`, `primary-runtime`, `update-status`];
function u(e) {
  return [`app-host`, `primary-runtime`, `diagnostics`, e];
}
export { a, s as i, u as n, o as r, l as t };
//# sourceMappingURL=primary-runtime-query-keys.js.map
