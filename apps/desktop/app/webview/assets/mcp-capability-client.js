import { Ot as e } from "./src-C.js";
import { l as t } from "./setting-storage.js";
import { _ as n, n as r, p as i } from "./mcp-capability-signals-DAPblgpG.js";
async function a(e, t, i, a, o) {
  return n.parse(
    await c(e.get(r, t), i, a, {
      method: `resources/read`,
      params: { uri: o },
    }),
  );
}
async function o(t, n, i, a) {
  let o = t.get(r, n);
  return Promise.all(
    i.map(async ({ pluginId: t, server: n }) => {
      try {
        return {
          items: e.mentionSearch.responseSchema.parse(
            await c(
              o,
              t,
              n,
              e.mentionSearch.requestSchema.parse({
                method: e.mentionSearch.method,
                params: a,
              }),
            ),
          ).items,
          server: n,
        };
      } catch {
        return { items: [], server: n };
      }
    }),
  );
}
async function s(e, t, n, a, o, s) {
  return i.parse(
    await c(e.get(r, t), n, a, {
      method: `tools/call`,
      params: { arguments: s, name: o },
    }),
  );
}
async function c(e, n, r, i) {
  let a = l(e, n);
  return t(`call-app-plugin-request`, {
    params: {
      hostId: a.hostId,
      pluginId: n,
      pluginPath: a.pluginPath,
      server: r,
      ...i,
    },
  });
}
function l(e, t) {
  let n = e.find((e) => e.pluginId === t);
  if (n == null) throw Error(`MCP capability plugin '${t}' is not loaded.`);
  return n;
}
export { a as n, o as r, s as t };
//# sourceMappingURL=mcp-capability-client.js.map
