import { Ia as e } from "./app-server-manager-signals-DkRDRgNB.js";
import { t } from "./jsx-runtime.js";
import { wt as n } from "./setting-storage.js";
import { t as r } from "./mcp-capability-view-frame-BVZUfJnz.js";
function i(t, n) {
  let r = e(t),
    i = null,
    a = 0;
  for (let e of n)
    for (let t of e.extensions) {
      let n = l(t);
      u(r, n) && n.length > a && ((i = e), (a = n.length));
    }
  return i;
}
function a(t, n) {
  return { primaryFile: { name: e(t), uri: n } };
}
function o(e, t, n) {
  return { extension: c(e, t), text: n };
}
function s(e, t) {
  return (
    t.startsWith(`codex-resource://`) && (e === t || e.startsWith(`${t}/`))
  );
}
function c(t, n) {
  return (
    n.extensions
      .map(l)
      .filter((n) => u(e(t), n))
      .sort((e, t) => t.length - e.length)[0] ?? ``
  );
}
function l(e) {
  return e.trim().replace(/^\.+/, ``).toLowerCase();
}
function u(e, t) {
  return t.length > 0 && e.toLowerCase().endsWith(`.${t}`);
}
var d = n(),
  f = t();
function p(e) {
  let t = (0, d.c)(15),
    {
      className: n,
      filePath: i,
      fileViewer: c,
      instanceId: l,
      readResourceText: u,
    } = e,
    p;
  bb0: {
    if (l != null) {
      p = l;
      break bb0;
    }
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = crypto.randomUUID()), (t[0] = e))
      : (e = t[0]),
      (p = `codex-resource://${e}`));
  }
  let m = p,
    h;
  t[1] !== i || t[2] !== m
    ? ((h = a(i, m)), (t[1] = i), (t[2] = m), (t[3] = h))
    : (h = t[3]);
  let g = h,
    _;
  t[4] !== i || t[5] !== c || t[6] !== u || t[7] !== m
    ? ((_ = async (e) => (s(e, m) ? o(i, c, await u()) : null)),
      (t[4] = i),
      (t[5] = c),
      (t[6] = u),
      (t[7] = m),
      (t[8] = _))
    : (_ = t[8]);
  let v = _,
    y;
  return (
    t[9] !== n || t[10] !== c || t[11] !== v || t[12] !== m || t[13] !== g
      ? ((y = (0, f.jsx)(r, {
          className: n,
          instanceId: m,
          readHostResource: v,
          toolArguments: g,
          view: c,
        })),
        (t[9] = n),
        (t[10] = c),
        (t[11] = v),
        (t[12] = m),
        (t[13] = g),
        (t[14] = y))
      : (y = t[14]),
    y
  );
}
export { s as a, a as i, i as n, o as r, p as t };
//# sourceMappingURL=mcp-capability-file-viewer-frame-DKPiqjwC.js.map
