import {
  Hi as e,
  Ri as t,
  ct as n,
  gt as r,
  nt as i,
  pt as a,
} from "./src-C.js";
import { o } from "./use-plugins-jIZrcuZQ.js";
var s = e({ openedFromPluginsPage: t(!0).optional() }).passthrough();
function c(e, t) {
  return n({
    hostId: t?.hostId,
    pluginId: e.plugin.id,
    ...o(e),
    source: t?.source,
  });
}
function l({
  explicitMarketplacePath: e,
  explicitPluginName: t,
  explicitRemoteMarketplaceName: n,
  routeParams: r,
}) {
  let i = e != null || n != null;
  return {
    directMarketplacePath: i ? (e ?? null) : (r?.marketplacePath ?? null),
    directPluginName: t ?? r?.pluginName ?? null,
    directRemoteMarketplaceName: i
      ? (n ?? null)
      : (r?.remoteMarketplaceName ?? null),
  };
}
function u({ plugins: e, requestedPluginId: t }) {
  if (a(t)) {
    let n = e.find((e) => g(e, t));
    if (n != null) return n;
  }
  return e.find((e) => h(e, t)) ?? null;
}
function d(e) {
  let t = new URLSearchParams(e),
    n = t.get(`marketplacePath`)?.trim(),
    r = t.get(`remoteMarketplaceName`)?.trim(),
    a = t.get(`pluginName`)?.trim(),
    o = t.get(`hostId`)?.trim() || null,
    s = t.get(`source`)?.trim(),
    c = !!n || !!r;
  return (n && r) || (c && !a) || (!c && a)
    ? null
    : {
        marketplacePath: n || null,
        pluginName: a || null,
        remoteMarketplaceName: r || null,
        hostId: o,
        source: s === `manage` ? i : null,
      };
}
function f(e) {
  if (typeof e != `object` || !e) return null;
  let t = Reflect.get(e, `pluginDetailDeepLinkMode`);
  return t === `share` || t === `view` ? t : null;
}
function p() {
  return { openedFromPluginsPage: !0 };
}
function m(e) {
  let t = s.safeParse(e);
  return t.success && t.data.openedFromPluginsPage === !0;
}
function h(e, t) {
  return a(t)
    ? e.plugin.source.type === `remote` &&
        e.plugin.remotePluginId != null &&
        r(e.plugin.remotePluginId, t)
    : e.plugin.id === t;
}
function g(e, t) {
  return (
    e.plugin.source.type === `local` &&
    e.plugin.shareContext?.remotePluginId != null &&
    r(e.plugin.shareContext.remotePluginId, t)
  );
}
export { c as a, m as i, l as n, u as o, f as r, d as s, p as t };
//# sourceMappingURL=plugin-detail-route-utils.js.map
