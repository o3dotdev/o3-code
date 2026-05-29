import { $ as e, Q as t, S as n, _ as r, f as i } from "./setting-storage.js";
import { d as a, f as o, n as s, u as c } from "./electron-menu-shortcuts.js";
var l = [
    `thread1`,
    `thread2`,
    `thread3`,
    `thread4`,
    `thread5`,
    `thread6`,
    `thread7`,
    `thread8`,
    `thread9`,
  ],
  u = i(n, `codex-command-keymap-state`, {
    enabled: !0,
    staleTime: r.ONE_MINUTE,
  }),
  d = e(
    n,
    (e, { get: t }) => (c(e), [...a({ commandId: e, keymapState: t(u).data })]),
  ),
  f = e(n, (e, { get: t }) => t(d, e)[0] ?? null),
  p = e(n, (e, { get: t }) => t(d, e).map((e) => s(e))),
  m = e(n, (e, { get: t }) => t(p, e)[0] ?? null),
  h = t(n, ({ get: e }) => l.map((t) => e(m, t))),
  g = e(
    n,
    (e, { get: t }) => t(u).data?.bindings.some((t) => t.command === e) === !0,
  );
function _(e) {
  return o({ commandId: e }).length > 0;
}
function v(e, t) {
  return a({ commandId: e, keymapState: t }).map((e) => ({
    accelerator: e,
    label: s(e),
  }));
}
export { m as a, _ as c, f as i, g as n, h as o, u as r, v as s, d as t };
//# sourceMappingURL=command-keybindings-C3NM9T-L.js.map
