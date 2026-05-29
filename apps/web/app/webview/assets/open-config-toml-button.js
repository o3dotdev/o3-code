import { s as e } from "./chunk-Bj-mKKzh.js";
import { C as t, Dr as n } from "./src-C.js";
import { t as r } from "./jsx-runtime.js";
import { U as i, V as a, a as o, l as s, wt as c } from "./setting-storage.js";
import { t as l } from "./button.js";
import { t as u } from "./use-codex-home.js";
import { t as d } from "./use-os-info-CpFtQpVC.js";
import { t as f } from "./link-external-BPZREBQk.js";
import { t as p } from "./open-workspace-file-WgoEFjrv.js";
var m = a({
  openConfigToml: {
    id: `codex.profileDropdown.openConfigToml`,
    defaultMessage: `Open config.toml`,
    description: `Action to open the MCP configuration file`,
  },
  openConfigTomlWsl: {
    id: `codex.profileDropdown.openConfigToml.wsl`,
    defaultMessage: `Open config.toml in WSL environment`,
    description: `Action to open the MCP configuration file inside Windows Subsystem for Linux`,
  },
});
async function h(e) {
  p({
    path: e.path,
    cwd: null,
    hostId: e.hostId,
    target: await g(e.hostId),
    ...(e.range == null
      ? {}
      : { line: e.range.start.line, column: e.range.start.column }),
  });
}
async function g(e) {
  try {
    return (await s(`open-in-targets`, { params: { cwd: null, hostId: e } }))
      .preferredTarget;
  } catch {
    return;
  }
}
var _ = c(),
  v = e(n(), 1),
  y = r();
function b(e) {
  let t = (0, _.c)(7),
    { hostId: n } = e,
    { configPath: r, label: i } = S(n),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = () => {
        r != null && h({ hostId: n, path: r });
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o = r == null,
    s;
  return (
    t[3] !== i || t[4] !== a || t[5] !== o
      ? ((s = (0, y.jsx)(l, {
          color: `secondary`,
          size: `toolbar`,
          className: `inline-flex w-fit`,
          onClick: a,
          disabled: o,
          children: i,
        })),
        (t[3] = i),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function x(e) {
  let t = (0, _.c)(8),
    { hostId: n } = e,
    { configPath: r, label: i } = S(n),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = () => {
        r != null && h({ hostId: n, path: r });
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o = r == null,
    s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, y.jsx)(f, {
        className: `icon-xxs shrink-0`,
        "aria-hidden": !0,
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  return (
    t[4] !== i || t[5] !== a || t[6] !== o
      ? ((c = (0, y.jsxs)(`button`, {
          type: `button`,
          className: `inline-flex cursor-interaction items-center gap-1 text-start font-medium text-token-text-secondary hover:text-token-text-primary disabled:cursor-not-allowed disabled:opacity-50`,
          onClick: a,
          disabled: o,
          children: [i, s],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function S(e) {
  let n = (0, _.c)(7),
    { data: r } = d(),
    a = o(t.runCodexInWsl),
    s = u(e),
    c = r?.platform === `win32` && r?.hasWsl && a,
    l;
  n[0] === s
    ? (l = n[1])
    : ((l = s == null ? null : v.default.join(s, `config.toml`)),
      (n[0] = s),
      (n[1] = l));
  let f = l,
    p;
  n[2] === c
    ? (p = n[3])
    : ((p = c
        ? (0, y.jsx)(i, { ...m.openConfigTomlWsl })
        : (0, y.jsx)(i, { ...m.openConfigToml })),
      (n[2] = c),
      (n[3] = p));
  let h = p,
    g;
  return (
    n[4] !== f || n[5] !== h
      ? ((g = { configPath: f, label: h }), (n[4] = f), (n[5] = h), (n[6] = g))
      : (g = n[6]),
    g
  );
}
export { x as n, h as r, b as t };
//# sourceMappingURL=open-config-toml-button.js.map
