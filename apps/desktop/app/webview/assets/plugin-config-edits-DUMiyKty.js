import {
  dr as e,
  fr as t,
  ft as n,
  gr as r,
  mr as i,
  ur as a,
} from "./src-C.js";
`${r}${e}`;
var o = `${a}@${e}`;
function s(e) {
  let r = n(e);
  if (!(r == null || !i(r))) return t(e.slice(0, e.length - r.length - 1));
}
function c({ pluginId: e, enabled: t }) {
  return [
    { keyPath: `plugins.${e}.enabled`, value: t, mergeStrategy: `upsert` },
  ];
}
export { c as n, s as r, o as t };
//# sourceMappingURL=plugin-config-edits-DUMiyKty.js.map
