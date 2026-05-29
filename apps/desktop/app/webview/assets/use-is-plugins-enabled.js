import { C as e } from "./src-C.js";
import { Y as t, Z as n, a as r, wt as i } from "./setting-storage.js";
import { o as a } from "./statsig--EYRNU53.js";
import { n as o } from "./experimental-features-queries.js";
import { t as s } from "./use-platform.js";
import { i as c } from "./browser-sidebar-availability.js";
var l = i();
function u(e) {
  let n = (0, l.c)(10),
    { hostId: r, featureName: i, defaultEnabled: a } = e,
    s = a === void 0 ? !0 : a,
    { data: c, isLoading: u } = t(o, r),
    d;
  n[0] === c
    ? (d = n[1])
    : ((d = c === void 0 ? [] : c), (n[0] = c), (n[1] = d));
  let f = d,
    p;
  if (n[2] !== i || n[3] !== f) {
    let e;
    (n[5] === i
      ? (e = n[6])
      : ((e = (e) => e.name === i), (n[5] = i), (n[6] = e)),
      (p = f.find(e)),
      (n[2] = i),
      (n[3] = f),
      (n[4] = p));
  } else p = n[4];
  let m = p?.enabled ?? s,
    h;
  return (
    n[7] !== u || n[8] !== m
      ? ((h = { enabled: m, isLoading: u }), (n[7] = u), (n[8] = m), (n[9] = h))
      : (h = n[9]),
    h
  );
}
function d(e) {
  return e === `macOS` || e === `windows`;
}
function f(e) {
  let t = (0, l.c)(14),
    { enabled: n, hostId: r } = e,
    i = n === void 0 ? !0 : n,
    { isLoading: o, platform: c } = s(),
    f = a(`1506311413`),
    m;
  t[0] === r
    ? (m = t[1])
    : ((m = { featureName: `computer_use`, hostId: r }),
      (t[0] = r),
      (t[1] = m));
  let h = u(m),
    g;
  t[2] !== h.enabled ||
  t[3] !== h.isLoading ||
  t[4] !== i ||
  t[5] !== f ||
  t[6] !== o ||
  t[7] !== c
    ? ((g = p({
        enabled: i,
        isComputerUseFeatureEnabled: h.enabled,
        isComputerUseFeatureLoading: h.isLoading,
        isComputerUseGateEnabled: f,
        isHostCompatiblePlatform: d(c),
        isPlatformLoading: o,
        windowType: `electron`,
      })),
      (t[2] = h.enabled),
      (t[3] = h.isLoading),
      (t[4] = i),
      (t[5] = f),
      (t[6] = o),
      (t[7] = c),
      (t[8] = g))
    : (g = t[8]);
  let _ = g,
    v = _ === `available`,
    y = _ === `loading` && h.isLoading,
    b = _ === `loading`,
    x;
  return (
    t[9] !== _ || t[10] !== v || t[11] !== y || t[12] !== b
      ? ((x = { available: v, isFetching: y, isLoading: b, reason: _ }),
        (t[9] = _),
        (t[10] = v),
        (t[11] = y),
        (t[12] = b),
        (t[13] = x))
      : (x = t[13]),
    x
  );
}
function p({
  enabled: e,
  isComputerUseFeatureEnabled: t,
  isComputerUseFeatureLoading: n,
  isComputerUseGateEnabled: r,
  isHostCompatiblePlatform: i,
  isPlatformLoading: a,
  windowType: o,
}) {
  return e
    ? o === `electron`
      ? r
        ? a
          ? `loading`
          : i
            ? n
              ? `loading`
              : t
                ? `available`
                : `config-requirement-disabled`
            : `unsupported-platform`
        : `statsig-disabled`
      : `window-type-disabled`
    : `disabled`;
}
function m(e) {
  let t = (0, l.c)(5),
    { hostId: n, windowType: r } = e,
    i = r === void 0 ? `electron` : r,
    o = a(`410065390`),
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = { featureName: `browser_use_external`, hostId: n }),
      (t[0] = n),
      (t[1] = s));
  let c = u(s),
    d = i === `chrome-extension` || (o && c.enabled && !c.isLoading),
    f = i === `chrome-extension` ? !1 : c.isLoading,
    p;
  return (
    t[2] !== d || t[3] !== f
      ? ((p = { allowed: d, available: d, isLoading: f }),
        (t[2] = d),
        (t[3] = f),
        (t[4] = p))
      : (p = t[4]),
    p
  );
}
function h(t) {
  let i = (0, l.c)(13),
    { hostId: o } = t,
    s = n(c),
    d = a(`410262010`),
    f;
  i[0] === o
    ? (f = i[1])
    : ((f = { featureName: `browser_use`, hostId: o }), (i[0] = o), (i[1] = f));
  let p = u(f),
    m = r(e.runCodexInWsl),
    h = p.enabled && !p.isLoading,
    _ = p.isLoading,
    v = m === !0,
    y;
  i[2] !== d || i[3] !== s || i[4] !== h || i[5] !== _ || i[6] !== v
    ? ((y = g({
        isBrowserAgentGateEnabled: d,
        isBrowserSidebarEnabled: s,
        isBrowserUseEnabled: h,
        isLoading: _,
        runCodexInWsl: v,
        windowType: `electron`,
      })),
      (i[2] = d),
      (i[3] = s),
      (i[4] = h),
      (i[5] = _),
      (i[6] = v),
      (i[7] = y))
    : (y = i[7]);
  let b = y,
    x = b === `available`,
    S = b === `available`,
    C = b === `loading`,
    w;
  return (
    i[8] !== b || i[9] !== x || i[10] !== S || i[11] !== C
      ? ((w = { allowed: x, available: S, isLoading: C, reason: b }),
        (i[8] = b),
        (i[9] = x),
        (i[10] = S),
        (i[11] = C),
        (i[12] = w))
      : (w = i[12]),
    w
  );
}
function g({
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
var _ = `plugins`;
function v(e) {
  let n = (0, l.c)(4),
    { hostId: r } = e,
    { data: i } = t(o, r),
    a;
  n[0] === i
    ? (a = n[1])
    : ((a = i === void 0 ? [] : i), (n[0] = i), (n[1] = a));
  let s = a,
    c;
  return (
    n[2] === s ? (c = n[3]) : ((c = s.find(y)), (n[2] = s), (n[3] = c)),
    c?.enabled ?? !0
  );
}
function y(e) {
  return e.name === _;
}
export { u as a, f as i, h as n, m as r, v as t };
//# sourceMappingURL=use-is-plugins-enabled.js.map
