import { v as e } from "./src-BLHmAhbF.js";
import { Ca as t, v as n } from "./app-server-manager-signals-7MlBpIlX.js";
import {
  J as r,
  S as i,
  X as a,
  Z as o,
  a as s,
  xt as c,
} from "./setting-storage-kJblH-wH.js";
import { o as l } from "./statsig-BwN76nAo.js";
import { t as u } from "./use-platform-DMNwb8i8.js";
import { n as d } from "./experimental-features-queries-Css_qmsY.js";
var f = c();
function p(e) {
  let t = (0, f.c)(10),
    { hostId: n, featureName: i, defaultEnabled: a } = e,
    o = a === void 0 ? !0 : a,
    { data: s, isLoading: c } = r(d, n),
    l;
  t[0] === s
    ? (l = t[1])
    : ((l = s === void 0 ? [] : s), (t[0] = s), (t[1] = l));
  let u = l,
    p;
  if (t[2] !== i || t[3] !== u) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) => e.name === i), (t[5] = i), (t[6] = e)),
      (p = u.find(e)),
      (t[2] = i),
      (t[3] = u),
      (t[4] = p));
  } else p = t[4];
  let m = p?.enabled ?? o,
    h;
  return (
    t[7] !== c || t[8] !== m
      ? ((h = { enabled: m, isLoading: c }), (t[7] = c), (t[8] = m), (t[9] = h))
      : (h = t[9]),
    h
  );
}
function m(e) {
  return e === `macOS` || e === `windows`;
}
function h(e) {
  let n = (0, f.c)(15),
    { enabled: r, hostId: i } = e,
    a = r === void 0 ? !0 : r,
    { isLoading: o, platform: s } = u(),
    c = t(i).kind === `local`,
    d = l(`1506311413`),
    h;
  n[0] === i
    ? (h = n[1])
    : ((h = { featureName: `computer_use`, hostId: i }),
      (n[0] = i),
      (n[1] = h));
  let _ = p(h),
    v;
  n[2] !== _.enabled ||
  n[3] !== _.isLoading ||
  n[4] !== a ||
  n[5] !== d ||
  n[6] !== c ||
  n[7] !== o ||
  n[8] !== s
    ? ((v = g({
        enabled: a,
        isComputerUseFeatureEnabled: _.enabled,
        isComputerUseFeatureLoading: _.isLoading,
        isComputerUseGateEnabled: d,
        isHostCompatiblePlatform: m(s),
        isHostLocal: c,
        isPlatformLoading: o,
        windowType: `electron`,
      })),
      (n[2] = _.enabled),
      (n[3] = _.isLoading),
      (n[4] = a),
      (n[5] = d),
      (n[6] = c),
      (n[7] = o),
      (n[8] = s),
      (n[9] = v))
    : (v = n[9]);
  let y = v,
    b = y === `available`,
    x = y === `loading` && _.isLoading,
    S = y === `loading`,
    C;
  return (
    n[10] !== y || n[11] !== b || n[12] !== x || n[13] !== S
      ? ((C = { available: b, isFetching: x, isLoading: S, reason: y }),
        (n[10] = y),
        (n[11] = b),
        (n[12] = x),
        (n[13] = S),
        (n[14] = C))
      : (C = n[14]),
    C
  );
}
function g({
  enabled: e,
  isComputerUseFeatureEnabled: t,
  isComputerUseFeatureLoading: n,
  isComputerUseGateEnabled: r,
  isHostCompatiblePlatform: i,
  isHostLocal: a,
  isPlatformLoading: o,
  windowType: s,
}) {
  return e
    ? s === `electron`
      ? a
        ? r
          ? o
            ? `loading`
            : i
              ? n
                ? `loading`
                : t
                  ? `available`
                  : `config-requirement-disabled`
              : `unsupported-platform`
          : `statsig-disabled`
        : `remote-host`
      : `window-type-disabled`
    : `disabled`;
}
function _(e) {
  let t = (0, f.c)(6),
    { hostId: n, isHostLocal: r, windowType: i } = e,
    a = i === void 0 ? `electron` : i,
    o = l(`410065390`),
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = { featureName: `browser_use_external`, hostId: n }),
      (t[0] = n),
      (t[1] = s));
  let c = p(s),
    u = a === `chrome-extension` || (o && c.enabled && !c.isLoading),
    d = r && u,
    m = a === `chrome-extension` ? !1 : c.isLoading,
    h;
  return (
    t[2] !== u || t[3] !== d || t[4] !== m
      ? ((h = { allowed: u, available: d, isLoading: m }),
        (t[2] = u),
        (t[3] = d),
        (t[4] = m),
        (t[5] = h))
      : (h = t[5]),
    h
  );
}
var v = `in_app_browser`,
  y = o(i, ({ get: e }) => {
    let { data: t } = e(e(d, e(n))),
      r = t?.find((e) => e.name === v);
    return t != null && r?.enabled !== !1;
  });
function b(t) {
  let n = (0, f.c)(13),
    { hostId: r } = t,
    i = a(y),
    o = l(`410262010`),
    c;
  n[0] === r
    ? (c = n[1])
    : ((c = { featureName: `browser_use`, hostId: r }), (n[0] = r), (n[1] = c));
  let u = p(c),
    d = s(e.runCodexInWsl),
    m = u.enabled && !u.isLoading,
    h = u.isLoading,
    g = d === !0,
    _;
  n[2] !== o || n[3] !== i || n[4] !== m || n[5] !== h || n[6] !== g
    ? ((_ = x({
        isBrowserAgentGateEnabled: o,
        isBrowserSidebarEnabled: i,
        isBrowserUseEnabled: m,
        isLoading: h,
        runCodexInWsl: g,
        windowType: `electron`,
      })),
      (n[2] = o),
      (n[3] = i),
      (n[4] = m),
      (n[5] = h),
      (n[6] = g),
      (n[7] = _))
    : (_ = n[7]);
  let v = _,
    b = v === `available`,
    S = v === `available`,
    C = v === `loading`,
    w;
  return (
    n[8] !== v || n[9] !== b || n[10] !== S || n[11] !== C
      ? ((w = { allowed: b, available: S, isLoading: C, reason: v }),
        (n[8] = v),
        (n[9] = b),
        (n[10] = S),
        (n[11] = C),
        (n[12] = w))
      : (w = n[12]),
    w
  );
}
function x({
  isBrowserAgentGateEnabled: e,
  isBrowserSidebarEnabled: t,
  isBrowserUseEnabled: n,
  isLoading: r,
  runCodexInWsl: i,
  windowType: a,
}) {
  return a === `chrome-extension`
    ? `window-type-disabled`
    : r
      ? `loading`
      : t
        ? e
          ? n
            ? i
              ? `wsl-disabled`
              : `available`
            : `config-requirement-disabled`
          : `statsig-disabled`
        : `browser-pane-disabled`;
}
var S = `plugins`;
function C(e) {
  let t = (0, f.c)(4),
    { hostId: n } = e,
    { data: i } = r(d, n),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i === void 0 ? [] : i), (t[0] = i), (t[1] = a));
  let o = a,
    s;
  return (
    t[2] === o ? (s = t[3]) : ((s = o.find(w)), (t[2] = o), (t[3] = s)),
    s?.enabled ?? !0
  );
}
function w(e) {
  return e.name === S;
}
export { h as a, _ as i, b as n, p as o, y as r, C as t };
//# sourceMappingURL=use-is-plugins-enabled-M47TXC7m.js.map
