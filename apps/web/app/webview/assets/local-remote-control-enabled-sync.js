import {
  Ft as e,
  Xs as t,
  po as n,
} from "./app-server-manager-signals-DkRDRgNB.js";
async function r(n, r, i, { shouldApplyStatus: a = () => !0 } = {}) {
  let o = await t(`set-remote-control-enabled-for-host`, {
    enabled: i,
    hostId: r,
  });
  return (a() && e(n, r, o), o);
}
var i,
  a,
  o = 0,
  s;
async function c(e, t, { force: l = !1 } = {}) {
  if (((a = t), s?.enabled === t)) return s.promise;
  if (!l && i === t) return null;
  let u = ++o,
    d = r(e, n, t, { shouldApplyStatus: () => u === o });
  s = { enabled: t, promise: d };
  try {
    let n = await d;
    return u === o
      ? ((i = t), n)
      : (a != null && a !== t && (await c(e, a, { force: !0 })), n);
  } catch (e) {
    throw (u === o && i === t && (i = void 0), e);
  } finally {
    s?.promise === d && (s = void 0);
  }
}
export { r as n, c as t };
//# sourceMappingURL=local-remote-control-enabled-sync.js.map
