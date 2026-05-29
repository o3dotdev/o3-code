import { s as e } from "./chunk-Bj-mKKzh.js";
import { $s as t, ec as n } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as r } from "./jsx-runtime.js";
import { Z as i, wt as a } from "./setting-storage.js";
import { n as o, s } from "./statsig--EYRNU53.js";
import { u as c } from "./thread-context-inputs-DBrOekVr.js";
import { y as l } from "./codex-api-bK--r_2t.js";
import { f as u, p as d } from "./onboarding-state.js";
import { t as f } from "./use-is-remote-host-DScyzh-e.js";
import {
  c as p,
  d as m,
  i as h,
  l as g,
  o as _,
  r as v,
  s as y,
} from "./workspace-onboarding-experiment.js";
var b = a(),
  x = e(r(), 1);
function S({ onboardingTarget: e, assignment: t, evaluateExperimentArm: n }) {
  return t == null ? (e === `workspace` ? n() : `control`) : t.arm;
}
function C() {
  let e = (0, b.c)(5),
    t = n(d),
    r;
  e[0] === t ? (r = e[1]) : ((r = y(t) ? t : null), (e[0] = t), (e[1] = r));
  let i = r,
    a = i?.arm ?? `control`,
    o;
  return (
    e[2] !== a || e[3] !== i
      ? ((o = {
          workspaceOnboardingExperimentAssignment: i,
          workspaceOnboardingExperimentArm: a,
        }),
        (e[2] = a),
        (e[3] = i),
        (e[4] = o))
      : (o = e[4]),
    o
  );
}
function w(e) {
  let n = (0, b.c)(17),
    { onboardingTarget: r } = e,
    [i, a] = t(d),
    o;
  n[0] === i ? (o = n[1]) : ((o = y(i) ? i : null), (n[0] = i), (n[1] = o));
  let c = o,
    { client: l } = s(),
    u;
  n[2] === l ? (u = n[3]) : ((u = () => _(l)), (n[2] = l), (n[3] = u));
  let f;
  n[4] !== r || n[5] !== u || n[6] !== c
    ? ((f = S({
        onboardingTarget: r,
        assignment: c,
        evaluateExperimentArm: u,
      })),
      (n[4] = r),
      (n[5] = u),
      (n[6] = c),
      (n[7] = f))
    : (f = n[7]);
  let p = f,
    m,
    g;
  (n[8] !== r || n[9] !== a || n[10] !== l || n[11] !== c
    ? ((m = () => {
        r === `workspace` &&
          c == null &&
          a({ arm: _(l), assignedAtMs: Date.now(), experimentName: h });
      }),
      (g = [r, a, l, c]),
      (n[8] = r),
      (n[9] = a),
      (n[10] = l),
      (n[11] = c),
      (n[12] = m),
      (n[13] = g))
    : ((m = n[12]), (g = n[13])),
    (0, x.useEffect)(m, g));
  let v;
  return (
    n[14] !== p || n[15] !== c
      ? ((v = {
          workspaceOnboardingExperimentAssignment: c,
          workspaceOnboardingExperimentArm: p,
        }),
        (n[14] = p),
        (n[15] = c),
        (n[16] = v))
      : (v = n[16]),
    v
  );
}
function T({ onboardingTarget: e, arm: t, isRemoteHost: n }) {
  return e === `workspace` && !n && g(t);
}
function E(e) {
  let t = (0, b.c)(13),
    { enabled: n } = e,
    { client: r, isLoading: i } = s(),
    a;
  t[0] !== n || t[1] !== r
    ? ((a = n && o(r, `1482884768`)), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let c = a,
    u;
  t[3] === c ? (u = t[4]) : ((u = { enabled: c }), (t[3] = c), (t[4] = u));
  let d = l(u),
    f = d.data?.age_status === `under_18`;
  if (!n) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { isLoading: !1, shouldUseTeenOnboarding: !1 }), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let p = i || (c && d.isLoading),
    m;
  t[6] !== c || t[7] !== f || t[8] !== r
    ? ((m = c && f && o(r, `3150044490`)),
      (t[6] = c),
      (t[7] = f),
      (t[8] = r),
      (t[9] = m))
    : (m = t[9]);
  let h;
  return (
    t[10] !== p || t[11] !== m
      ? ((h = { isLoading: p, shouldUseTeenOnboarding: m }),
        (t[10] = p),
        (t[11] = m),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
function D({
  arm: e,
  isRemoteHost: t,
  isLoadingRoots: n,
  hasPersistedRoots: r,
  autoLaunchApplied: i,
}) {
  return t || n || r || i
    ? `none`
    : g(e)
      ? `home_open_picker_or_create_default`
      : p(e)
        ? `select_workspace_skip_to_playground`
        : `none`;
}
function O() {
  let e = (0, b.c)(15),
    { workspaceOnboardingExperimentArm: n } = C(),
    r = f(),
    [a, o] = t(u),
    { data: s, isLoading: l } = i(c),
    d = (s?.roots?.length ?? 0) > 0,
    p;
  e[0] !== d || e[1] !== l || e[2] !== r || e[3] !== a || e[4] !== n
    ? ((p = D({
        arm: n,
        isRemoteHost: r,
        isLoadingRoots: l,
        hasPersistedRoots: d,
        autoLaunchApplied: a,
      })),
      (e[0] = d),
      (e[1] = l),
      (e[2] = r),
      (e[3] = a),
      (e[4] = n),
      (e[5] = p))
    : (p = e[5]);
  let m = p,
    h;
  return (
    e[6] !== m ||
    e[7] !== d ||
    e[8] !== l ||
    e[9] !== r ||
    e[10] !== o ||
    e[11] !== a ||
    e[12] !== n ||
    e[13] !== s
      ? ((h = {
          workspaceOnboardingExperimentArm: n,
          isRemoteHost: r,
          workspaceOnboardingAutoLaunchApplied: a,
          setWorkspaceOnboardingAutoLaunchApplied: o,
          workspaceRootOptions: s,
          isLoadingWorkspaceRootOptions: l,
          hasPersistedRoots: d,
          autoLaunchAction: m,
        }),
        (e[6] = m),
        (e[7] = d),
        (e[8] = l),
        (e[9] = r),
        (e[10] = o),
        (e[11] = a),
        (e[12] = n),
        (e[13] = s),
        (e[14] = h))
      : (h = e[14]),
    h
  );
}
function k(e) {
  if (m(e)) return v;
}
export { w as a, O as i, T as n, E as r, k as t };
//# sourceMappingURL=workspace-onboarding-controller.js.map
