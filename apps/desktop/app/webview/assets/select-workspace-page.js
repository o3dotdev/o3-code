import { s as e } from "./chunk-Bj-mKKzh.js";
import { U as t } from "./src-C.js";
import {
  $s as n,
  Ba as r,
  Ia as i,
  Ua as a,
  po as o,
  sn as s,
  tc as c,
  xa as l,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as u, t as d } from "./jsx-runtime.js";
import { t as f } from "./clsx-BcPLHiun.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import {
  G as p,
  L as m,
  S as h,
  U as g,
  X as _,
  Y as v,
  Z as y,
  b,
  c as x,
  p as S,
  pt as C,
  wt as w,
  y as T,
} from "./setting-storage.js";
import { m as ee } from "./chunk-LFPYN7LY.js";
import { t as E } from "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import { s as D } from "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import { u as O } from "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import { t as k } from "./use-auth.js";
import "./codex-api-bK--r_2t.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import "./use-debounced-value-BtOJx-Vp.js";
import "./window-zoom-context.js";
import "./tooltip-CDzchJxN.js";
import "./route-scope.js";
import { t as te } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import { t as ne } from "./spinner.js";
import { n as A } from "./use-codex-home.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./remote-projects.js";
import "./proxy.js";
import "./app-shell-state.js";
import { a as re, i as ie } from "./onboarding-state.js";
import "./projectless-thread.js";
import "./use-platform.js";
import "./with-window.js";
import "./use-is-remote-host-DScyzh-e.js";
import { r as ae } from "./local-projects.js";
import "./folder.js";
import { a as oe, p as se } from "./sidebar-project-groups.js";
import "./_defineProperty.js";
import "./check-md.js";
import "./chevron-right.js";
import "./checkbox-DtuSNXXy.js";
import "./minus.js";
import "./search.js";
import { n as ce, t as j } from "./add-project-menu-items.js";
import "./dropdown-DtQxMoJw.js";
import "./plus.js";
import { t as le } from "./use-is-background-subagents-enabled-B.js";
import { n as ue } from "./is-subagent-conversation-BDD-JXTj.js";
import { u as M } from "./workspace-onboarding-experiment.js";
import { i as de, t as fe } from "./workspace-onboarding-controller.js";
import {
  a as pe,
  i as N,
  n as P,
  r as F,
  t as me,
} from "./onboarding-shell.js";
var I = e(u(), 1);
function he(e, t) {
  let n = m(t),
    r = n.getQueryCache();
  return I.useSyncExternalStore(
    I.useCallback((e) => r.subscribe(C.batchCalls(e)), [r]),
    () => n.isFetching(e),
    () => n.isFetching(e),
  );
}
var L = w(),
  R = e(l(), 1),
  z = d();
function B() {
  let e = (0, L.c)(112),
    t = _(h),
    r = k(),
    i = ee(),
    a = p(),
    [o, s] = n(re),
    l = c(ie),
    { data: u, isFetching: d } = D(),
    f = u === void 0 ? [] : u,
    m = le(),
    g;
  e[0] === m ? (g = e[1]) : ((g = (e) => !ue(e, m)), (e[0] = m), (e[1] = g));
  let S = f.filter(g).map(we),
    { data: C, isFetching: w } = y(O),
    { data: te, isFetching: ne } = v(se, {
      params: { dirs: (0, R.default)(Oe(S), Ce).sort(Se) },
      source: `onboarding_workspace_select`,
    }),
    { data: oe, isFetching: ce } = A(),
    {
      autoLaunchAction: j,
      isRemoteHost: M,
      setWorkspaceOnboardingAutoLaunchApplied: N,
      workspaceOnboardingExperimentArm: P,
    } = de(),
    F;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = []), (e[2] = F))
    : (F = e[2]);
  let [me, B] = (0, I.useState)(F),
    V;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = {}), (e[3] = V))
    : (V = e[3]);
  let [H, U] = (0, I.useState)(V),
    [W, G] = (0, I.useState)(!1),
    [je, K] = (0, I.useState)(null),
    Me = (0, I.useRef)(!1),
    Ne;
  e[4] === a
    ? (Ne = e[5])
    : ((Ne = a.formatMessage({
        id: `electron.onboarding.workspace.skip.error.unknown`,
        defaultMessage: `Unknown error`,
        description: `Fallback error message when onboarding skip fails without details`,
      })),
      (e[4] = a),
      (e[5] = Ne));
  let Pe = Ne,
    Fe = (0, I.useRef)(0),
    q = C?.roots,
    Ie = q != null && q.length > 0,
    Le = ke({ tasks: S, gitOrigins: te?.origins, codexHome: oe?.codexHome }),
    Re = (0, R.default)([...(q ?? []), ...Le, ...me], xe).sort(be),
    ze;
  e[6] === C?.labels
    ? (ze = e[7])
    : ((ze = (e) => {
        let t = C?.labels?.[e]?.trim();
        return t ? { root: e, label: t } : { root: e, label: Ae(e) };
      }),
      (e[6] = C?.labels),
      (e[7] = ze));
  let J = Re.map(ze),
    Y = J.map(ye),
    Be;
  e[8] === H ? (Be = e[9]) : ((Be = (e) => !!H[e]), (e[8] = H), (e[9] = Be));
  let X = Y.filter(Be),
    Ve =
      Y.length > 0 && X.length === Y.length
        ? !0
        : X.length > 0 && X.length < Y.length
          ? `indeterminate`
          : !1,
    He;
  (e[10] !== r.accountId ||
  e[11] !== r.userId ||
  e[12] !== Y ||
  e[13] !== t ||
  e[14] !== H ||
  e[15] !== B ||
  e[16] !== U ||
  e[17] !== P
    ? ((He = (e) => {
        B((t) => (0, R.default)([...t, e.root], ve));
        let n = { ...H, [e.root]: !0 };
        U(n);
        let i = Y.includes(e.root);
        E(t, {
          eventName: `codex_onboarding_workspace_selection_changed`,
          metadata: {
            action: `toggle_root`,
            selected_workspaces_count: De(n, Y) + (i ? 0 : 1),
            total_workspaces_count: i ? Y.length : Y.length + 1,
            experiment_arm: P,
            checked: !0,
            user_id: r.userId ?? void 0,
            workspace_id: r.accountId ?? void 0,
          },
        });
      }),
      (e[10] = r.accountId),
      (e[11] = r.userId),
      (e[12] = Y),
      (e[13] = t),
      (e[14] = H),
      (e[15] = B),
      (e[16] = U),
      (e[17] = P),
      (e[18] = He))
    : (He = e[18]),
    b(`workspace-root-option-picked`, He));
  let Ue;
  (e[19] !== r.accountId ||
  e[20] !== r.userId ||
  e[21] !== Y.length ||
  e[22] !== t ||
  e[23] !== G ||
  e[24] !== l ||
  e[25] !== s ||
  e[26] !== K ||
  e[27] !== Pe ||
  e[28] !== P
    ? ((Ue = (e) => {
        if ((G(!1), e.success)) {
          (E(t, {
            eventName: `codex_onboarding_workspace_continue_clicked`,
            metadata: {
              selected_workspaces_count: 1,
              total_workspaces_count: Y.length,
              auto_navigated: !1,
              experiment_arm: P,
              user_id: r.userId ?? void 0,
              workspace_id: r.accountId ?? void 0,
            },
          }),
            E(t, {
              eventName: `codex_onboarding_completed`,
              metadata: { selected_workspaces_count: 1, experiment_arm: P },
            }),
            K(null),
            l(Math.floor(Date.now() / 1e3)),
            s(`auto`));
          return;
        }
        K(e.error ?? Pe);
      }),
      (e[19] = r.accountId),
      (e[20] = r.userId),
      (e[21] = Y.length),
      (e[22] = t),
      (e[23] = G),
      (e[24] = l),
      (e[25] = s),
      (e[26] = K),
      (e[27] = Pe),
      (e[28] = P),
      (e[29] = Ue))
    : (Ue = e[29]),
    b(`electron-onboarding-skip-workspace-result`, Ue));
  let We;
  e[30] !== r.accountId ||
  e[31] !== r.userId ||
  e[32] !== Ie ||
  e[33] !== t ||
  e[34] !== K ||
  e[35] !== P
    ? ((We = () => {
        (K(null),
          E(t, {
            eventName: `codex_onboarding_workspace_add_clicked`,
            metadata: {
              has_existing_workspaces: Ie,
              source: `onboarding_modal`,
              experiment_arm: P,
              user_id: r.userId ?? void 0,
              workspace_id: r.accountId ?? void 0,
            },
          }),
          T.dispatchMessage(`electron-pick-workspace-root-option`, {}));
      }),
      (e[30] = r.accountId),
      (e[31] = r.userId),
      (e[32] = Ie),
      (e[33] = t),
      (e[34] = K),
      (e[35] = P),
      (e[36] = We))
    : (We = e[36]);
  let Ge = We,
    Ke;
  e[37] !== W || e[38] !== G || e[39] !== K || e[40] !== P
    ? ((Ke = () => {
        if (W) return;
        (K(null), G(!0));
        let e = fe(P);
        T.dispatchMessage(
          `electron-onboarding-skip-workspace`,
          e == null ? {} : { projectName: e },
        );
      }),
      (e[37] = W),
      (e[38] = G),
      (e[39] = K),
      (e[40] = P),
      (e[41] = Ke))
    : (Ke = e[41]);
  let Z = Ke,
    qe;
  e[42] === Z
    ? (qe = e[43])
    : ((qe = () => {
        Z();
      }),
      (e[42] = Z),
      (e[43] = qe));
  let Je = (0, I.useEffectEvent)(qe),
    Ye;
  e[44] !== r.accountId ||
  e[45] !== r.userId ||
  e[46] !== Y ||
  e[47] !== t ||
  e[48] !== H ||
  e[49] !== B ||
  e[50] !== U ||
  e[51] !== K ||
  e[52] !== P
    ? ((Ye = (e, n) => {
        (K(null), B((t) => (0, R.default)([...t, e], _e)));
        let i = { ...H, [e]: n };
        (U(i),
          E(t, {
            eventName: `codex_onboarding_workspace_selection_changed`,
            metadata: {
              action: `toggle_root`,
              checked: n,
              selected_workspaces_count: De(i, Y),
              total_workspaces_count: Y.length,
              experiment_arm: P,
              user_id: r.userId ?? void 0,
              workspace_id: r.accountId ?? void 0,
            },
          }));
      }),
      (e[44] = r.accountId),
      (e[45] = r.userId),
      (e[46] = Y),
      (e[47] = t),
      (e[48] = H),
      (e[49] = B),
      (e[50] = U),
      (e[51] = K),
      (e[52] = P),
      (e[53] = Ye))
    : (Ye = e[53]);
  let Xe = Ye,
    Ze;
  e[54] !== r.accountId ||
  e[55] !== r.userId ||
  e[56] !== Y ||
  e[57] !== t ||
  e[58] !== H ||
  e[59] !== U ||
  e[60] !== K ||
  e[61] !== P
    ? ((Ze = (e) => {
        K(null);
        let n = { ...H };
        for (let t of Y) n[t] = e;
        (U(n),
          E(t, {
            eventName: `codex_onboarding_workspace_selection_changed`,
            metadata: {
              action: `select_all`,
              checked: e,
              selected_workspaces_count: De(n, Y),
              total_workspaces_count: Y.length,
              experiment_arm: P,
              user_id: r.userId ?? void 0,
              workspace_id: r.accountId ?? void 0,
            },
          }));
      }),
      (e[54] = r.accountId),
      (e[55] = r.userId),
      (e[56] = Y),
      (e[57] = t),
      (e[58] = H),
      (e[59] = U),
      (e[60] = K),
      (e[61] = P),
      (e[62] = Ze))
    : (Ze = e[62]);
  let Qe = Ze,
    $e;
  e[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = { queryKey: [x, `paths-exist`] }), (e[63] = $e))
    : ($e = e[63]);
  let et = he($e),
    Q = d || w || ne || ce || et > 0,
    tt = J.length > 0,
    nt = X.length > 0,
    rt = Ie || Le.length > 0,
    it = !rt && !Q && !tt,
    at = (0, I.useRef)(!1),
    ot;
  e[64] !== Je || e[65] !== Q || e[66] !== j || e[67] !== N
    ? ((ot = () => {
        Me.current ||
          Q ||
          j !== `select_workspace_skip_to_playground` ||
          ((Me.current = !0), N(!0), Je());
      }),
      (e[64] = Je),
      (e[65] = Q),
      (e[66] = j),
      (e[67] = N),
      (e[68] = ot))
    : (ot = e[68]);
  let st;
  (e[69] !== Q || e[70] !== j || e[71] !== N
    ? ((st = [Q, j, N]), (e[69] = Q), (e[70] = j), (e[71] = N), (e[72] = st))
    : (st = e[72]),
    (0, I.useEffect)(ot, st));
  let ct;
  e[73] !== r.accountId ||
  e[74] !== r.userId ||
  e[75] !== i ||
  e[76] !== o ||
  e[77] !== Y.length ||
  e[78] !== q ||
  e[79] !== t ||
  e[80] !== l ||
  e[81] !== s ||
  e[82] !== P
    ? ((ct = (e, n) => {
        (E(t, {
          eventName: `codex_onboarding_workspace_continue_clicked`,
          metadata: {
            selected_workspaces_count: e.length,
            total_workspaces_count: Y.length,
            auto_navigated: n,
            experiment_arm: P,
            user_id: r.userId ?? void 0,
            workspace_id: r.accountId ?? void 0,
          },
        }),
          E(t, {
            eventName: `codex_onboarding_completed`,
            metadata: {
              selected_workspaces_count: e.length,
              experiment_arm: P,
            },
          }));
        let a = e;
        (l(Math.floor(Date.now() / 1e3)),
          o === `workspace` &&
            q != null &&
            (a = (0, R.default)([...q, ...e], ge)),
          T.dispatchMessage(`electron-update-workspace-root-options`, {
            roots: a,
          }),
          s(`auto`),
          (Fe.current += 1),
          ae.select(t, { path: e[0], projectId: e[0] }),
          i(`/`, { replace: !0, state: { focusComposerNonce: Fe.current } }));
      }),
      (e[73] = r.accountId),
      (e[74] = r.userId),
      (e[75] = i),
      (e[76] = o),
      (e[77] = Y.length),
      (e[78] = q),
      (e[79] = t),
      (e[80] = l),
      (e[81] = s),
      (e[82] = P),
      (e[83] = ct))
    : (ct = e[83]);
  let $ = ct,
    lt,
    ut;
  (e[84] !== $ || e[85] !== rt || e[86] !== Q || e[87] !== X
    ? ((lt = () => {
        rt ||
          at.current ||
          Q ||
          (X.length !== 0 && ((at.current = !0), $(X, !0)));
      }),
      (ut = [$, rt, Q, X]),
      (e[84] = $),
      (e[85] = rt),
      (e[86] = Q),
      (e[87] = X),
      (e[88] = lt),
      (e[89] = ut))
    : ((lt = e[88]), (ut = e[89])),
    (0, I.useEffect)(lt, ut));
  let dt;
  e[90] !== $ || e[91] !== X || e[92] !== K
    ? ((dt = () => {
        (K(null), $(X, !1));
      }),
      (e[90] = $),
      (e[91] = X),
      (e[92] = K),
      (e[93] = dt))
    : (dt = e[93]);
  let ft = dt,
    pt;
  return (
    e[94] !== J ||
    e[95] !== ft ||
    e[96] !== Ge ||
    e[97] !== Z ||
    e[98] !== Qe ||
    e[99] !== Xe ||
    e[100] !== tt ||
    e[101] !== nt ||
    e[102] !== a ||
    e[103] !== Q ||
    e[104] !== M ||
    e[105] !== W ||
    e[106] !== Ve ||
    e[107] !== X ||
    e[108] !== it ||
    e[109] !== je ||
    e[110] !== P
      ? ((pt = (0, z.jsx)(pe, {
          children: it
            ? (0, z.jsx)(Te, {
                workspaceOnboardingExperimentArm: P,
                isRemoteHost: M,
                handleOpenFolder: Ge,
                handleSkip: Z,
                isSkipPending: W,
                skipErrorMessage: je,
              })
            : (0, z.jsx)(Ee, {
                isLoadingRoots: Q,
                hasAvailableRoots: tt,
                availableOptions: J,
                selectedRoots: X,
                selectAllState: Ve === `indeterminate` ? !1 : Ve,
                handleToggleSelectAll: Qe,
                handleToggleWorkspace: Xe,
                intl: a,
                handleOpenFolder: Ge,
                hasSelectedRoots: nt,
                isRemoteHost: M,
                handleSkip: Z,
                isSkipPending: W,
                skipErrorMessage: je,
                handleContinue: ft,
                workspaceOnboardingExperimentArm: P,
              }),
        })),
        (e[94] = J),
        (e[95] = ft),
        (e[96] = Ge),
        (e[97] = Z),
        (e[98] = Qe),
        (e[99] = Xe),
        (e[100] = tt),
        (e[101] = nt),
        (e[102] = a),
        (e[103] = Q),
        (e[104] = M),
        (e[105] = W),
        (e[106] = Ve),
        (e[107] = X),
        (e[108] = it),
        (e[109] = je),
        (e[110] = P),
        (e[111] = pt))
      : (pt = e[111]),
    pt
  );
}
function ge(e) {
  return r(e);
}
function _e(e) {
  return r(e);
}
function ve(e) {
  return r(e);
}
function ye(e) {
  return e.root;
}
function be(e, t) {
  return e.localeCompare(t);
}
function xe(e) {
  return r(e);
}
function Se(e, t) {
  return e.localeCompare(t);
}
function Ce(e) {
  return r(e);
}
function we(e) {
  return { kind: `local`, key: s(e.id), at: e.createdAt, conversation: e };
}
function V(e) {
  let t = (0, L.c)(7),
    { children: n, showIcon: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r
        ? (0, z.jsx)(ce, { className: `h-10 w-10`, "aria-hidden": `true` })
        : null),
      (t[0] = r),
      (t[1] = i));
  let a, o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, z.jsx)(g, {
        id: `electron.onboarding.workspace.title`,
        defaultMessage: `Select a project`,
        description: `Title on the desktop onboarding workspace selection page`,
      })),
      (o = (0, z.jsx)(g, {
        id: `electron.onboarding.workspace.subtitle`,
        defaultMessage: `Codex will be able to edit files and run commands in selected folders.`,
        description: `Subtitle on the desktop onboarding workspace selection page`,
      })),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3]));
  let s;
  return (
    t[4] !== n || t[5] !== i
      ? ((s = (0, z.jsx)(N, {
          className: `max-w-[330px]`,
          icon: i,
          textClassName: `gap-6`,
          title: a,
          subtitle: o,
          children: n,
        })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Te(e) {
  let t = (0, L.c)(14),
    {
      workspaceOnboardingExperimentArm: n,
      isRemoteHost: r,
      handleOpenFolder: i,
      handleSkip: a,
      isSkipPending: o,
      skipErrorMessage: s,
    } = e,
    c = M(n) ? `outline` : `primary`,
    l;
  t[0] !== i || t[1] !== a || t[2] !== r || t[3] !== c
    ? ((l = (0, z.jsx)(H, {
        className: `w-full justify-center py-2.5`,
        color: c,
        isRemoteHost: r,
        onStartFromScratch: a,
        onUseExistingFolder: i,
      })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = r),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== a || t[6] !== r || t[7] !== o || t[8] !== s || t[9] !== n
    ? ((u = r
        ? null
        : (0, z.jsx)(U, {
            handleSkip: a,
            isSkipPending: o,
            skipErrorMessage: s,
            workspaceOnboardingExperimentArm: n,
          })),
      (t[5] = a),
      (t[6] = r),
      (t[7] = o),
      (t[8] = s),
      (t[9] = n),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== l || t[12] !== u
      ? ((d = (0, z.jsx)(V, {
          showIcon: !0,
          children: (0, z.jsxs)(`div`, {
            className: `flex w-full flex-col gap-3`,
            children: [l, u],
          }),
        })),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function H(e) {
  let t = (0, L.c)(10),
    {
      className: n,
      color: r,
      isRemoteHost: i,
      onStartFromScratch: a,
      onUseExistingFolder: o,
      size: s,
    } = e,
    c = i ? o : void 0,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, z.jsx)(g, {
        id: `electron.onboarding.workspace.openFolder`,
        defaultMessage: `Add project`,
        description: `Button label to add a workspace during desktop onboarding`,
      })),
      (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] !== n || t[2] !== r || t[3] !== s || t[4] !== c
    ? ((u = (0, z.jsx)(te, {
        className: n,
        color: r,
        size: s,
        onClick: c,
        children: l,
      })),
      (t[1] = n),
      (t[2] = r),
      (t[3] = s),
      (t[4] = c),
      (t[5] = u))
    : (u = t[5]);
  let d = u;
  if (i) return d;
  let f;
  return (
    t[6] !== a || t[7] !== o || t[8] !== d
      ? ((f = (0, z.jsx)(j, {
          triggerButton: d,
          onStartFromScratch: a,
          onUseExistingFolder: o,
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = d),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
function Ee(e) {
  let t = (0, L.c)(40),
    {
      isLoadingRoots: n,
      hasAvailableRoots: r,
      availableOptions: i,
      selectedRoots: a,
      selectAllState: o,
      handleToggleSelectAll: s,
      handleToggleWorkspace: c,
      intl: l,
      handleOpenFolder: u,
      handleContinue: d,
      hasSelectedRoots: p,
      isRemoteHost: m,
      handleSkip: h,
      isSkipPending: _,
      skipErrorMessage: v,
      workspaceOnboardingExperimentArm: y,
    } = e,
    b;
  t[0] === a ? (b = t[1]) : ((b = new Set(a)), (t[0] = a), (t[1] = b));
  let x = b,
    S;
  t[2] === n
    ? (S = t[3])
    : ((S = n
        ? (0, z.jsxs)(`div`, {
            className: `bg-token-surface-primary flex w-full items-center justify-center gap-2 rounded-2xl border border-token-border px-5 py-6`,
            children: [
              (0, z.jsx)(ne, { className: `h-4 w-4 text-token-foreground` }),
              (0, z.jsx)(`span`, {
                className: `text-sm text-token-description-foreground`,
                children: (0, z.jsx)(g, {
                  id: `electron.onboarding.workspace.loading`,
                  defaultMessage: `Loading projects…`,
                  description: `Loading state while onboarding workspace options are fetched`,
                }),
              }),
            ],
          })
        : null),
      (t[2] = n),
      (t[3] = S));
  let C;
  t[4] !== i ||
  t[5] !== s ||
  t[6] !== c ||
  t[7] !== r ||
  t[8] !== l ||
  t[9] !== n ||
  t[10] !== m ||
  t[11] !== o ||
  t[12] !== x
    ? ((C = r
        ? (0, z.jsxs)(P, {
            className: f(n && `pointer-events-none opacity-50`),
            ariaLabel: l.formatMessage({
              id: `electron.onboarding.workspace.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the available workspaces list during onboarding`,
            }),
            children: [
              (0, z.jsx)(F, {
                checkboxId: `workspace-root-select-all`,
                checkboxClassName: me,
                checked: o,
                disabled: n,
                onCheckedChange: (e) => {
                  s(e);
                },
                label: (0, z.jsx)(g, {
                  id: `electron.onboarding.workspace.selectAll`,
                  defaultMessage: `Select all`,
                  description: `Checkbox label for selecting all workspaces during onboarding`,
                }),
              }),
              i.map((e, t) =>
                (0, z.jsx)(
                  W,
                  {
                    index: t,
                    isDisabled: n,
                    isSelected: x.has(e.root),
                    skipExistenceCheck: m,
                    option: e,
                    onToggle: c,
                  },
                  e.root,
                ),
              ),
            ],
          })
        : (0, z.jsx)(`div`, {
            className: `text-center text-sm text-token-description-foreground`,
            children: (0, z.jsx)(g, {
              id: `electron.onboarding.workspace.empty`,
              defaultMessage: `Add a project to continue.`,
              description: `Empty state shown when no workspaces are selected during onboarding`,
            }),
          })),
      (t[4] = i),
      (t[5] = s),
      (t[6] = c),
      (t[7] = r),
      (t[8] = l),
      (t[9] = n),
      (t[10] = m),
      (t[11] = o),
      (t[12] = x),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] !== S || t[15] !== C
    ? ((w = (0, z.jsxs)(`div`, {
        className: `flex w-full flex-col gap-2`,
        children: [S, C],
      })),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] !== u || t[18] !== h || t[19] !== m
    ? ((T = (0, z.jsx)(H, {
        className: `flex-1 justify-center border-token-button-border bg-transparent text-base leading-6 font-medium whitespace-nowrap enabled:hover:bg-token-foreground/5`,
        color: `outline`,
        size: `large`,
        isRemoteHost: m,
        onStartFromScratch: h,
        onUseExistingFolder: u,
      })),
      (t[17] = u),
      (t[18] = h),
      (t[19] = m),
      (t[20] = T))
    : (T = t[20]);
  let ee = !p || n,
    E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, z.jsx)(g, {
        id: `electron.onboarding.workspace.continue`,
        defaultMessage: `Continue`,
        description: `Button label to continue after selecting workspaces during onboarding`,
      })),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== d || t[23] !== ee
    ? ((D = (0, z.jsx)(te, {
        className: `flex-1 justify-center text-base leading-6 font-medium`,
        color: `primary`,
        size: `large`,
        disabled: ee,
        onClick: d,
        children: E,
      })),
      (t[22] = d),
      (t[23] = ee),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] !== T || t[26] !== D
    ? ((O = (0, z.jsxs)(`div`, {
        className: `flex w-full items-center gap-4`,
        children: [T, D],
      })),
      (t[25] = T),
      (t[26] = D),
      (t[27] = O))
    : (O = t[27]);
  let k;
  t[28] !== h || t[29] !== m || t[30] !== _ || t[31] !== v || t[32] !== y
    ? ((k = m
        ? null
        : (0, z.jsx)(U, {
            handleSkip: h,
            isSkipPending: _,
            skipErrorMessage: v,
            workspaceOnboardingExperimentArm: y,
          })),
      (t[28] = h),
      (t[29] = m),
      (t[30] = _),
      (t[31] = v),
      (t[32] = y),
      (t[33] = k))
    : (k = t[33]);
  let A;
  t[34] !== k || t[35] !== O
    ? ((A = (0, z.jsxs)(`div`, {
        className: `flex w-full flex-col gap-3`,
        children: [O, k],
      })),
      (t[34] = k),
      (t[35] = O),
      (t[36] = A))
    : (A = t[36]);
  let re;
  return (
    t[37] !== A || t[38] !== w
      ? ((re = (0, z.jsx)(V, {
          showIcon: !1,
          children: (0, z.jsxs)(`div`, {
            className: `flex w-full flex-col gap-4`,
            children: [w, A],
          }),
        })),
        (t[37] = A),
        (t[38] = w),
        (t[39] = re))
      : (re = t[39]),
    re
  );
}
function U(e) {
  let t = (0, L.c)(14),
    {
      handleSkip: n,
      isSkipPending: r,
      skipErrorMessage: i,
      workspaceOnboardingExperimentArm: a,
    } = e,
    o;
  t[0] === a ? (o = t[1]) : ((o = M(a)), (t[0] = a), (t[1] = o));
  let s = o,
    c;
  t[2] === i
    ? (c = t[3])
    : ((c =
        i == null
          ? null
          : (0, z.jsx)(`div`, {
              className: `text-center text-sm text-token-error-foreground`,
              children: (0, z.jsx)(g, {
                id: `electron.onboarding.workspace.skip.error`,
                defaultMessage: `Couldn't create a new project: {message}`,
                description: `Error shown when creating a new project fails during onboarding`,
                values: { message: i },
              }),
            })),
      (t[2] = i),
      (t[3] = c));
  let l;
  t[4] !== r || t[5] !== s
    ? ((l = r
        ? s
          ? (0, z.jsx)(g, {
              id: `electron.onboarding.workspace.skipping.playground`,
              defaultMessage: `Opening playground…`,
              description: `Button label shown while opening Playground during onboarding workspace flow`,
            })
          : (0, z.jsx)(g, {
              id: `electron.onboarding.workspace.skipping`,
              defaultMessage: `Creating a new project…`,
              description: `Button label shown while creating a new project during onboarding`,
            })
        : s
          ? (0, z.jsx)(g, {
              id: `electron.onboarding.workspace.skip.playground`,
              defaultMessage: `Continue to playground`,
              description: `Button label to continue to Playground during onboarding`,
            })
          : (0, z.jsx)(g, {
              id: `electron.onboarding.workspace.skip`,
              defaultMessage: `Skip`,
              description: `Button label to skip workspace selection during onboarding`,
            })),
      (t[4] = r),
      (t[5] = s),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== n || t[8] !== r || t[9] !== l
    ? ((u = (0, z.jsx)(te, {
        className: `w-full justify-center text-base leading-6 font-medium`,
        color: `ghost`,
        size: `large`,
        disabled: r,
        onClick: n,
        children: l,
      })),
      (t[7] = n),
      (t[8] = r),
      (t[9] = l),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== c || t[12] !== u
      ? ((d = (0, z.jsxs)(`div`, {
          className: `flex w-full flex-col items-center gap-2`,
          children: [c, u],
        })),
        (t[11] = c),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
function W(e) {
  let t = (0, L.c)(21),
    {
      index: n,
      isDisabled: i,
      isSelected: s,
      skipExistenceCheck: c,
      option: l,
      onToggle: u,
    } = e,
    d = l.root,
    f;
  t[0] === d ? (f = t[1]) : ((f = a(d)), (t[0] = d), (t[1] = f));
  let p = f,
    m = r(d).replace(/\/+$/, ``),
    h,
    g;
  t[2] === d
    ? ((h = t[3]), (g = t[4]))
    : ((h = { hostId: o, paths: [d] }),
      (g = { existingPaths: [d] }),
      (t[2] = d),
      (t[3] = h),
      (t[4] = g));
  let _ = !c,
    v;
  t[5] === _ ? (v = t[6]) : ((v = { enabled: _ }), (t[5] = _), (t[6] = v));
  let y;
  t[7] !== h || t[8] !== g || t[9] !== v
    ? ((y = { params: h, placeholderData: g, queryConfig: v }),
      (t[7] = h),
      (t[8] = g),
      (t[9] = v),
      (t[10] = y))
    : (y = t[10]);
  let { data: b } = S(`paths-exist`, y);
  if (
    !(c || (b?.existingPaths ?? []).some((e) => r(e).replace(/\/+$/, ``) === m))
  )
    return null;
  let x = `workspace-root-${n}`,
    C;
  t[11] !== u || t[12] !== d
    ? ((C = (e) => {
        u(d, e);
      }),
      (t[11] = u),
      (t[12] = d),
      (t[13] = C))
    : (C = t[13]);
  let w;
  return (
    t[14] !== x ||
    t[15] !== p ||
    t[16] !== i ||
    t[17] !== s ||
    t[18] !== l.label ||
    t[19] !== C
      ? ((w = (0, z.jsx)(F, {
          checkboxId: x,
          checkboxClassName: me,
          checked: s,
          disabled: i,
          onCheckedChange: C,
          label: l.label,
          description: p,
        })),
        (t[14] = x),
        (t[15] = p),
        (t[16] = i),
        (t[17] = s),
        (t[18] = l.label),
        (t[19] = C),
        (t[20] = w))
      : (w = t[20]),
    w
  );
}
function De(e, t) {
  let n = 0;
  for (let r of t) e[r] && (n += 1);
  return n;
}
function Oe(e) {
  let t = [];
  return (
    (e ?? []).forEach((e) => {
      switch (e.kind) {
        case `local`: {
          let n = e.conversation.cwd;
          n && t.push(n);
          return;
        }
        case `pending-worktree`: {
          let n =
            e.pendingWorktree.startConversationParamsInput?.cwd ??
            e.pendingWorktree.sourceWorkspaceRoot;
          n && t.push(n);
          return;
        }
        case `remote`:
          return;
      }
    }),
    t
  );
}
function ke({ tasks: e, gitOrigins: n, codexHome: i }) {
  let a = Oe(e);
  if (a.length === 0) return [];
  let o = n ?? [];
  return (0, R.default)(
    a
      .map((e) => {
        let n = oe(e, o);
        return !n?.root || !t(n.root, i)
          ? e
          : (o.reduce(
              (e, r) =>
                !n.originUrl || r.originUrl !== n.originUrl || t(r.root, i)
                  ? e
                  : e
                    ? r.root.length > e.length
                      ? r.root
                      : e
                    : r.root,
              null,
            ) ?? n.root);
      })
      .filter((e) => !!e),
    (e) => r(e).replace(/\/+$/, ``),
  );
}
function Ae(e) {
  return i(e);
}
export { B as SelectWorkspacePage };
//# sourceMappingURL=select-workspace-page.js.map
