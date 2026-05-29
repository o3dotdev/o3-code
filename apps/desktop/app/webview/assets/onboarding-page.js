import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  D as t,
  Di as n,
  Fi as r,
  Hi as i,
  Ni as a,
  O as o,
  Ri as s,
  ji as c,
  qi as l,
  y as u,
  zn as d,
} from "./src-C.js";
import {
  ec as f,
  po as p,
  tc as m,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as h, t as g } from "./jsx-runtime.js";
import { t as _ } from "./clsx-BcPLHiun.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import {
  B as v,
  C as y,
  G as b,
  L as x,
  S,
  U as C,
  X as w,
  Z as T,
  at as E,
  i as D,
  it as ee,
  l as te,
  q as ne,
  u as O,
  wt as re,
  y as ie,
} from "./setting-storage.js";
import { m as ae } from "./chunk-LFPYN7LY.js";
import { t as k } from "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import { c as oe, d as se, n as A } from "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import { t as ce } from "./use-auth.js";
import "./codex-api-bK--r_2t.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import "./use-debounced-value-BtOJx-Vp.js";
import "./experimental-features-queries.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import { t as le } from "./tooltip-CDzchJxN.js";
import "./route-scope.js";
import { t as j } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./remote-projects.js";
import { n as ue, t as de } from "./thread-detail-level.js";
import "./app-shell-state.js";
import {
  a as M,
  d as fe,
  i as pe,
  o as me,
  p as N,
  r as he,
  s as P,
  t as F,
  u as I,
} from "./onboarding-state.js";
import "./apps-DwfMzB5Q.js";
import "./x-C_RDKBp5.js";
import "./projectless-thread.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import "./use-plugins-jIZrcuZQ.js";
import { r as L } from "./ambient-suggestions-connected-apps-consent.js";
import "./check-circle-filled.js";
import "./terminal.js";
import { t as R } from "./info-B8GAwpK6.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./use-is-remote-host-DScyzh-e.js";
import "./dialog-layout.js";
import "./local-projects.js";
import "./run-command.js";
import "./modal-controller-state.js";
import "./open-project-setup-dialog-cJXYMFtk.js";
import "./folder.js";
import "./_defineProperty.js";
import "./use-register-command.js";
import "./homepage-logo.js";
import "./loading-page.js";
import { t as ge } from "./check-md.js";
import { t as _e } from "./select-project.js";
import "./checkbox-DtuSNXXy.js";
import "./minus.js";
import { i as ve, r as ye, t as be } from "./external-agent-config-gates.js";
import {
  n as xe,
  r as Se,
} from "./external-agent-onboarding-import-status-BfhmUEsC.js";
import "./clock-BflmlnpZ.js";
import "./search.js";
import "./skills-BUMAZe_D.js";
import "./globe-CnvlclXd.js";
import "./json-CRHyc9De.js";
import "./image-square-CGEtcnWp.js";
import "./settings.cog.js";
import "./codex-BjFeJtxQ.js";
import "./use-skills.js";
import "./sortBy.js";
import { t as Ce } from "./toggle.js";
import { t as we } from "./permissions-mode-visibility.js";
import { t as Te } from "./arrow-up-right-lg-C37BA3DV.js";
import "./folders-DmG-RYpY.js";
import "./workspace-onboarding-experiment.js";
import { r as Ee } from "./workspace-onboarding-controller.js";
import { t as De } from "./app-preloader.js";
import {
  a as Oe,
  b as ke,
  c as Ae,
  l as z,
  r as je,
  t as Me,
} from "./external-agent-import-step.js";
import "./hooks-Cw0VrjI0.js";
import { t as B } from "./codex-app-ga-logo-B-zXdz0-.js";
import { a as Ne } from "./onboarding-shell.js";
import { t as Pe } from "./animated-icon.js";
import "./tasks-DNCFvQEW.js";
var V = re(),
  Fe = [
    `animals`,
    `fitness`,
    `school`,
    `art_creative`,
    `beauty_style`,
    `science`,
    `money`,
    `gaming`,
    `music`,
    `sports`,
    `coding`,
    `other`,
  ];
function Ie(e, t) {
  return e.includes(t) ? e.filter((e) => e !== t) : [...e, t];
}
var Le = [
    `default`,
    `engineering`,
    `product_management`,
    `finance`,
    `marketing`,
    `sales`,
    `operations`,
    `data_science`,
    `design`,
    `student`,
    `something_else`,
  ],
  Re = [`coding`, `non_coding`],
  ze = [`claude-code`, `claude-cowork`],
  H = {
    Start: `start`,
    TeenWelcome: `teen-welcome`,
    TeenInterests: `teen-interests`,
    TeenPrompts: `teen-prompts`,
    RoleSelection: `role-selection`,
    AgentMigrationSourceSelection: `agent-migration-source-selection`,
    AgentMigrationItemSelection: `agent-migration-item-selection`,
    Complete: `complete`,
  },
  Be = r(`step`, [
    i({ step: s(H.TeenWelcome) }),
    i({ step: s(H.TeenInterests), interests: c(n(Fe)) }),
    i({ step: s(H.TeenPrompts), prompt: l().optional() }),
    i({
      step: s(H.RoleSelection),
      roles: c(n(Le)),
      personalizedSuggestionsEnabled: a(),
      workMode: n(Re).nullable(),
    }),
    i({
      step: s(H.AgentMigrationSourceSelection),
      providerIds: c(n(ze)),
      skipped: a().optional(),
    }),
    i({
      step: s(H.AgentMigrationItemSelection),
      action: n([`imported`, `skipped`]),
    }),
  ]),
  U = ee(`OnboardingScope`, { parent: S }),
  W = E(U, () => H.Start),
  G = E(U, () => null),
  K = E(U, () => null),
  q = E(U, () => null),
  J = e(h(), 1);
function Ve(e, t) {
  k(e, { eventName: `codex_onboarding_step_viewed`, metadata: { step: t } });
}
function He(e, t) {
  k(e, {
    eventName: `codex_onboarding_step_continue_clicked`,
    metadata: { step: t },
  });
}
function Ue(e, t) {
  k(e, { eventName: `codex_onboarding_step_skipped`, metadata: { step: t } });
}
var We = 14,
  Ge = 13;
function Ke() {
  let e = (0, V.c)(13),
    n = w(S),
    r = m(fe),
    i = ae(),
    a = x(),
    s = f(M),
    c = m(M),
    l = m(P),
    h = m(I),
    g = m(he),
    _ = m(me),
    v = m(pe),
    y = f(N)?.arm ?? `control`,
    b;
  return (
    e[0] !== i ||
    e[1] !== s ||
    e[2] !== a ||
    e[3] !== n ||
    e[4] !== g ||
    e[5] !== v ||
    e[6] !== c ||
    e[7] !== _ ||
    e[8] !== l ||
    e[9] !== h ||
    e[10] !== r ||
    e[11] !== y
      ? ((b = (e, f) => {
          let m = e.personalizedSuggestionsEnabled ?? !0,
            b = e.workMode !== `non_coding`,
            x = Ye(e.workMode);
          (r(e),
            k(n, {
              eventName: `codex_onboarding_completed`,
              metadata: {
                selected_workspaces_count: 0,
                experiment_arm: y,
                personalized_suggestions_enabled: m,
              },
            }),
            D(n, u.conversationDetailMode, x.threadDetailLevel)
              .catch(Je)
              .finally(() => {
                let e = s === `welcome`;
                (c(`auto`),
                  l(!1),
                  h(!0),
                  g(!0),
                  _(!0),
                  v(Math.floor(Date.now() / 1e3)),
                  e || _e(n, null),
                  i(`/?${F}=1`, {
                    replace: !0,
                    state:
                      f?.focusComposer !== !0 && f?.prefillPrompt == null
                        ? void 0
                        : {
                            focusComposerNonce: Date.now(),
                            prefillPrompt: f.prefillPrompt,
                          },
                  }));
              }),
            x.fontSizes != null &&
              (D(n, t.sansFontSize, x.fontSizes.sans),
              D(n, t.codeFontSize, x.fontSizes.code)),
            n.set(we, { "guardian-approvals": b, "full-access": b }),
            m && n.set(L, !0),
            (async () => {
              (await D(n, o.enabled, m),
                m &&
                  (await te(`ambient-suggestions-refresh`, {
                    params: { hostId: p, projectRoot: d(`~`) },
                  }),
                  await Promise.all([
                    a.invalidateQueries({ queryKey: O(`ambient-suggestions`) }),
                    a.invalidateQueries({
                      queryKey: O(`ambient-suggestions-refresh`),
                    }),
                  ])));
            })().catch(qe));
        }),
        (e[0] = i),
        (e[1] = s),
        (e[2] = a),
        (e[3] = n),
        (e[4] = g),
        (e[5] = v),
        (e[6] = c),
        (e[7] = _),
        (e[8] = l),
        (e[9] = h),
        (e[10] = r),
        (e[11] = y),
        (e[12] = b))
      : (b = e[12]),
    b
  );
}
function qe(e) {
  y.error(`Failed to refresh ambient suggestions after onboarding`, {
    safe: {},
    sensitive: { error: e },
  });
}
function Je(e) {
  y.error(`Failed to persist welcome v2 onboarding configuration`, {
    safe: {},
    sensitive: { error: e },
  });
}
function Ye(e) {
  return e === `non_coding`
    ? { threadDetailLevel: ue, fontSizes: { sans: We, code: Ge } }
    : { threadDetailLevel: de, fontSizes: null };
}
function Xe(e) {
  let t = (0, V.c)(21),
    { isAdvancingOnboarding: n } = e,
    r = ce(),
    i = x(),
    a = oe(),
    o = se(),
    s = r.authMethod === `chatgpt`,
    c;
  t[0] === s ? (c = t[1]) : ((c = { enabled: s }), (t[0] = s), (t[1] = c));
  let { isLoading: l, shouldUseTeenOnboarding: u } = Ee(c),
    d;
  t[2] === a ? (d = t[3]) : ((d = A(a, ve)), (t[2] = a), (t[3] = d));
  let f = d,
    p;
  t[4] === a ? (p = t[5]) : ((p = A(a, be)), (t[4] = a), (t[5] = p));
  let m = p,
    h = o || l || n,
    g;
  t[6] === a ? (g = t[7]) : ((g = A(a, ye)), (t[6] = a), (t[7] = g));
  let _;
  t[8] !== m || t[9] !== f || t[10] !== i
    ? ((_ = async () =>
        f ? Ae({ isCoworkMigrationEnabled: m, queryClient: i }) : !1),
      (t[8] = m),
      (t[9] = f),
      (t[10] = i),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] !== m || t[13] !== f || t[14] !== g || t[15] !== _
    ? ((v = {
        isImportEnabled: f,
        isCoworkMigrationEnabled: m,
        awaitsCompletion: g,
        shouldShow: _,
      }),
      (t[12] = m),
      (t[13] = f),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== u || t[18] !== h || t[19] !== v
      ? ((y = { isLoading: h, shouldShowTeenOnboarding: u, agentMigration: v }),
        (t[17] = u),
        (t[18] = h),
        (t[19] = v),
        (t[20] = y))
      : (y = t[20]),
    y
  );
}
var Ze = {
    roles: [`student`],
    personalizedSuggestionsEnabled: !1,
    workMode: `coding`,
  },
  Qe = {
    [H.Start]: null,
    [H.TeenWelcome]: `teen_welcome`,
    [H.TeenInterests]: `teen_interests`,
    [H.TeenPrompts]: `teen_prompts`,
    [H.RoleSelection]: `role_selection`,
    [H.AgentMigrationSourceSelection]: `agent_migration_source_selection`,
    [H.AgentMigrationItemSelection]: `agent_migration_item_selection`,
    [H.Complete]: null,
  };
async function $e(
  e,
  { completeOnboarding: t, logStepViewed: n, onboardingContext: r, result: i },
) {
  let a = e.get(W);
  if (a === H.Complete) return;
  let o;
  (i != null && (o = Be.parse(i)), o != null && it(e, o));
  let s = await et({ currentStep: a, onboardingContext: r, result: o });
  if (e.get(W) !== a || (s !== a && nt(e, s, n), s !== H.Complete)) return;
  if (o?.step === H.TeenPrompts) {
    t(Ze, { focusComposer: !0, prefillPrompt: o.prompt });
    return;
  }
  let c = e.get(G);
  (o?.step === H.RoleSelection && (c = o), c != null && t(rt(c)));
}
async function et({ currentStep: e, onboardingContext: t, result: n }) {
  if (t.isLoading) return e;
  switch (e) {
    case H.Start:
      return t.shouldShowTeenOnboarding ? H.TeenWelcome : H.RoleSelection;
    case H.TeenWelcome:
      return H.TeenInterests;
    case H.TeenInterests:
      return H.TeenPrompts;
    case H.TeenPrompts:
      return H.Complete;
    case H.RoleSelection:
      return (await t.agentMigration.shouldShow())
        ? H.AgentMigrationSourceSelection
        : H.Complete;
    case H.AgentMigrationSourceSelection:
    case H.AgentMigrationItemSelection:
      return tt({ currentStep: e, result: n });
    case H.Complete:
      return H.Complete;
  }
}
function tt({ currentStep: e, result: t }) {
  switch (e) {
    case H.AgentMigrationSourceSelection:
      return t?.step === H.AgentMigrationSourceSelection &&
        t.skipped !== !0 &&
        t.providerIds.length > 0
        ? H.AgentMigrationItemSelection
        : H.Complete;
    case H.AgentMigrationItemSelection:
      return H.Complete;
  }
}
function nt(e, t, n) {
  e.set(W, t);
  let r = Qe[t];
  r != null && n(r);
}
function rt(e) {
  return {
    roles: e.roles,
    personalizedSuggestionsEnabled: e.personalizedSuggestionsEnabled,
    workMode: e.workMode,
  };
}
function it(e, t) {
  switch (
    (y.debug(`[onboarding-flow] store result`, {
      safe: { resultStep: t.step },
    }),
    t.step)
  ) {
    case H.TeenWelcome:
      return;
    case H.TeenInterests:
      e.set(K, t);
      return;
    case H.TeenPrompts:
      return;
    case H.RoleSelection:
      e.set(G, t);
      return;
    case H.AgentMigrationSourceSelection:
      e.set(q, t);
      return;
    case H.AgentMigrationItemSelection:
      return;
  }
}
async function at({
  scope: e,
  awaitsCompletion: t,
  importSelection: n,
  importStatus: r,
  onComplete: i,
  onImportStarted: a,
  setImportStatus: o,
}) {
  if (r.status !== `importing`) {
    if (t && r.status === `success`) {
      i();
      return;
    }
    if ((o({ status: `importing` }), a(), !t)) {
      (Se(e, n), i());
      return;
    }
    try {
      (await xe(e, n), o({ status: `success` }));
    } catch {
      o({ status: `error` });
    }
  }
}
var Y = g();
function X(e) {
  let t = (0, V.c)(9),
    { name: n, onComplete: r, children: i } = e,
    a = w(S),
    o;
  t[0] !== n || t[1] !== r || t[2] !== a
    ? ((o = (e) => {
        (e.skipped === !0 ? Ue(a, n) : He(a, n), r(e));
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  t[4] !== i || t[5] !== s
    ? ((c = i({ completeStep: s })), (t[4] = i), (t[5] = s), (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] === c
      ? (l = t[8])
      : ((l = (0, Y.jsx)(Y.Fragment, { children: c })), (t[7] = c), (t[8] = l)),
    l
  );
}
function ot(e) {
  let t = (0, V.c)(27),
    { agentMigrationContext: n, providerIds: r, onContinue: i } = e,
    a = w(S),
    o = f(N),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { status: `idle` }), (t[0] = s))
    : (s = t[0]);
  let [c, l] = (0, J.useState)(s),
    u;
  t[1] !== n.isCoworkMigrationEnabled || t[2] !== n.isImportEnabled
    ? ((u = {
        enabled: n.isImportEnabled,
        isCoworkMigrationEnabled: n.isCoworkMigrationEnabled,
      }),
      (t[1] = n.isCoworkMigrationEnabled),
      (t[2] = n.isImportEnabled),
      (t[3] = u))
    : (u = t[3]);
  let d = z(u),
    p;
  t[4] !== d || t[5] !== r
    ? ((p = d.getSummaryForProviders(r)), (t[4] = d), (t[5] = r), (t[6] = p))
    : (p = t[6]);
  let m = p,
    h;
  t[7] !== a || t[8] !== o?.arm
    ? ((h = (e) => {
        k(a, {
          eventName: `codex_onboarding_external_agent_import_event`,
          metadata: { ...e, experiment_arm: o?.arm },
        });
      }),
      (t[7] = a),
      (t[8] = o?.arm),
      (t[9] = h))
    : (h = t[9]);
  let g = h;
  if (m == null) return null;
  let _;
  t[10] !== d ||
  t[11] !== n.awaitsCompletion ||
  t[12] !== c ||
  t[13] !== i ||
  t[14] !== r ||
  t[15] !== a
    ? ((_ = (e) => {
        let { result: t, skipped: o } = e;
        if (o === !0 || t == null) {
          i({ step: H.AgentMigrationItemSelection, action: `skipped` });
          return;
        }
        at({
          awaitsCompletion: n.awaitsCompletion,
          importSelection: () => d.importSelection(t, r),
          importStatus: c,
          onComplete: () => {
            i({ step: H.AgentMigrationItemSelection, action: `imported` });
          },
          onImportStarted: st,
          scope: a,
          setImportStatus: l,
        });
      }),
      (t[10] = d),
      (t[11] = n.awaitsCompletion),
      (t[12] = c),
      (t[13] = i),
      (t[14] = r),
      (t[15] = a),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  t[17] !== d.isImporting ||
  t[18] !== d.providerIds ||
  t[19] !== c.status ||
  t[20] !== g ||
  t[21] !== r ||
  t[22] !== m
    ? ((v = (e) => {
        let { completeStep: t } = e;
        return (0, Y.jsx)(Me, {
          hasError: c.status === `error`,
          isComplete: c.status === `success`,
          isPending: d.isImporting || c.status === `importing`,
          logShownOnMount: !1,
          detectedProviderIds: d.providerIds,
          providerIds: r,
          summary: m,
          onContinue: (e) => {
            t({ result: e });
          },
          onEvent: g,
          onSkip: () => {
            t({ result: null, skipped: !0 });
          },
        });
      }),
      (t[17] = d.isImporting),
      (t[18] = d.providerIds),
      (t[19] = c.status),
      (t[20] = g),
      (t[21] = r),
      (t[22] = m),
      (t[23] = v))
    : (v = t[23]);
  let y;
  return (
    t[24] !== _ || t[25] !== v
      ? ((y = (0, Y.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary text-token-foreground`,
          children: (0, Y.jsx)(`div`, {
            className: `flex w-full max-w-3xl flex-col items-center justify-start`,
            children: (0, Y.jsx)(X, {
              name: `agent_migration_item_selection`,
              onComplete: _,
              children: v,
            }),
          }),
        })),
        (t[24] = _),
        (t[25] = v),
        (t[26] = y))
      : (y = t[26]),
    y
  );
}
function st() {}
function ct(e) {
  let t = (0, V.c)(6),
    { agentMigrationContext: n, onContinue: r } = e,
    i;
  t[0] !== n.isCoworkMigrationEnabled || t[1] !== n.isImportEnabled
    ? ((i = {
        enabled: n.isImportEnabled,
        isCoworkMigrationEnabled: n.isCoworkMigrationEnabled,
      }),
      (t[0] = n.isCoworkMigrationEnabled),
      (t[1] = n.isImportEnabled),
      (t[2] = i))
    : (i = t[2]);
  let a = z(i);
  if (a.summary == null) return null;
  let o;
  return (
    t[3] !== a || t[4] !== r
      ? ((o = (0, Y.jsx)(lt, {
          agentMigration: a,
          onContinue: r,
          summary: a.summary,
        })),
        (t[3] = a),
        (t[4] = r),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function lt(e) {
  let t = (0, V.c)(21),
    { agentMigration: n, onContinue: r, summary: i } = e,
    a = w(S),
    o = f(N),
    s = (0, J.useRef)(!1),
    c;
  t[0] !== a || t[1] !== o?.arm
    ? ((c = (e) => {
        k(a, {
          eventName: `codex_onboarding_external_agent_import_event`,
          metadata: { ...e, experiment_arm: o?.arm },
        });
      }),
      (t[0] = a),
      (t[1] = o?.arm),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] !== n.providerIds || t[4] !== l || t[5] !== i
    ? ((u = (e) => {
        l({
          source: `first_time_onboarding`,
          action: e,
          ...Oe(i, je(i), n.providerIds),
        });
      }),
      (t[3] = n.providerIds),
      (t[4] = l),
      (t[5] = i),
      (t[6] = u))
    : (u = t[6]);
  let d = u,
    p;
  t[7] === d
    ? (p = t[8])
    : ((p = () => {
        d(`shown`);
      }),
      (t[7] = d),
      (t[8] = p));
  let m = (0, J.useEffectEvent)(p),
    h;
  t[9] === m
    ? (h = t[10])
    : ((h = () => {
        s.current || ((s.current = !0), m());
      }),
      (t[9] = m),
      (t[10] = h));
  let g;
  (t[11] === i ? (g = t[12]) : ((g = [i]), (t[11] = i), (t[12] = g)),
    (0, J.useEffect)(h, g));
  let _;
  t[13] === r
    ? (_ = t[14])
    : ((_ = (e) => {
        let { result: t } = e;
        return r(t);
      }),
      (t[13] = r),
      (t[14] = _));
  let v;
  t[15] !== n || t[16] !== d
    ? ((v = (e) => {
        let { completeStep: t } = e;
        return (0, Y.jsx)(ke, {
          providerIds: n.providerIds,
          onContinue: (e) => {
            let r = n.getSummaryForProviders(e) == null;
            (r && d(`skipped`),
              t({
                result: {
                  step: H.AgentMigrationSourceSelection,
                  providerIds: e,
                  ...(r ? { skipped: !0 } : {}),
                },
                skipped: r,
              }));
          },
          onSkip: () => {
            (d(`skipped`),
              t({
                result: {
                  step: H.AgentMigrationSourceSelection,
                  providerIds: [],
                  skipped: !0,
                },
                skipped: !0,
              }));
          },
        });
      }),
      (t[15] = n),
      (t[16] = d),
      (t[17] = v))
    : (v = t[17]);
  let y;
  return (
    t[18] !== _ || t[19] !== v
      ? ((y = (0, Y.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary text-token-foreground`,
          children: (0, Y.jsx)(`div`, {
            className: `flex w-full max-w-3xl flex-col items-center justify-start`,
            children: (0, Y.jsx)(X, {
              name: `agent_migration_source_selection`,
              onComplete: _,
              children: v,
            }),
          }),
        })),
        (t[18] = _),
        (t[19] = v),
        (t[20] = y))
      : (y = t[20]),
    y
  );
}
var ut = [
    {
      id: `engineering`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.engineering`,
        defaultMessage: `Engineering`,
        description: `Welcome v2 role option for engineering users`,
      }),
    },
    {
      id: `product_management`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.product`,
        defaultMessage: `Product`,
        description: `Welcome v2 role option for product management users`,
      }),
    },
    {
      id: `finance`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.finance`,
        defaultMessage: `Finance`,
        description: `Welcome v2 role option for finance users`,
      }),
    },
    {
      id: `marketing`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.marketing`,
        defaultMessage: `Marketing`,
        description: `Welcome v2 role option for marketing users`,
      }),
    },
    {
      id: `sales`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.sales`,
        defaultMessage: `Sales`,
        description: `Welcome v2 role option for sales users`,
      }),
    },
    {
      id: `operations`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.operations`,
        defaultMessage: `Operations`,
        description: `Welcome v2 role option for operations users`,
      }),
    },
    {
      id: `data_science`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.dataScience`,
        defaultMessage: `Data Science`,
        description: `Welcome v2 role option for data science users`,
      }),
    },
    {
      id: `design`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.design`,
        defaultMessage: `Design`,
        description: `Welcome v2 role option for design users`,
      }),
    },
    {
      id: `student`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.student`,
        defaultMessage: `Student`,
        description: `Welcome v2 role option for student users`,
      }),
    },
    {
      id: `something_else`,
      label: (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.role.somethingElse`,
        defaultMessage: `Something else`,
        description: `Welcome v2 role option for users who don't fit into the other categories`,
      }),
    },
  ],
  dt = `default`,
  ft = new Set([`default`, `engineering`, `data_science`]);
function Z(e) {
  return e.some((e) => ft.has(e)) ? `coding` : `non_coding`;
}
function pt(e) {
  let t = (0, V.c)(23),
    { isAdvancePending: n, onContinue: r } = e,
    i = n === void 0 ? !1 : n,
    a = w(S),
    o = f(N),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { roles: [], personalizedSuggestionsEnabled: !0, workMode: null }),
      (t[0] = s))
    : (s = t[0]);
  let [c, l] = (0, J.useState)(s),
    u;
  t[1] !== a || t[2] !== o?.arm
    ? ((u = (e) => {
        let { role: t, selected: n, state: r } = e;
        k(a, {
          eventName: `codex_onboarding_welcome_option_toggled`,
          metadata: {
            step: `role`,
            option: t,
            selected: n,
            selected_roles: r.roles.join(`,`),
            selected_work_mode: r.workMode ?? void 0,
            experiment_arm: o?.arm,
          },
        });
      }),
      (t[1] = a),
      (t[2] = o?.arm),
      (t[3] = u))
    : (u = t[3]);
  let d = u,
    p;
  t[4] !== a || t[5] !== o?.arm
    ? ((p = (e) => {
        k(a, {
          eventName: `codex_onboarding_welcome_skip_clicked`,
          metadata: {
            step: `role`,
            selected_roles: e.roles.join(`,`),
            selected_work_mode: e.workMode ?? void 0,
            experiment_arm: o?.arm,
          },
        });
      }),
      (t[4] = a),
      (t[5] = o?.arm),
      (t[6] = p))
    : (p = t[6]);
  let m = p,
    h;
  t[7] !== c || t[8] !== d
    ? ((h = (e) => {
        let t = !c.roles.includes(e),
          n = t ? [...c.roles, e] : c.roles.filter((t) => t !== e),
          r = { ...c, roles: n, workMode: Z(n) };
        (l(r), d({ role: e, selected: t, state: r }));
      }),
      (t[7] = c),
      (t[8] = d),
      (t[9] = h))
    : (h = t[9]);
  let g = h,
    v;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        l((t) => ({ ...t, personalizedSuggestionsEnabled: e }));
      }),
      (t[10] = v))
    : (v = t[10]);
  let y = v,
    b = c.roles.length > 0 && !i,
    x = !i,
    T;
  t[11] === r
    ? (T = t[12])
    : ((T = (e) => {
        let { result: t } = e;
        return r(t);
      }),
      (t[11] = r),
      (t[12] = T));
  let E;
  t[13] !== b ||
  t[14] !== x ||
  t[15] !== c.personalizedSuggestionsEnabled ||
  t[16] !== c.roles ||
  t[17] !== m ||
  t[18] !== g
    ? ((E = (e) => {
        let { completeStep: t } = e;
        return (0, Y.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary text-token-foreground`,
          children: (0, Y.jsx)(`div`, {
            className: `flex w-full max-w-3xl flex-col items-center justify-start`,
            children: (0, Y.jsxs)(`div`, {
              className: `flex w-full max-w-[400px] flex-col items-center overflow-hidden rounded-2xl p-10`,
              children: [
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col items-center text-center`,
                  children: [
                    (0, Y.jsx)(`img`, {
                      src: B,
                      className: `size-12 shrink-0`,
                      draggable: !1,
                      alt: ``,
                      "aria-hidden": `true`,
                    }),
                    (0, Y.jsx)(`h1`, {
                      className: `mt-4 text-[28px] leading-[34px] font-normal whitespace-nowrap text-token-foreground max-[540px]:whitespace-normal`,
                      children: (0, Y.jsx)(C, {
                        id: `electron.onboarding.welcomeV2.role.title`,
                        defaultMessage: `What type of work do you do?`,
                        description: `Welcome v2 role selection title`,
                      }),
                    }),
                    (0, Y.jsx)(`p`, {
                      className: `mt-2 text-[16px] leading-6 text-token-description-foreground`,
                      children: (0, Y.jsx)(C, {
                        id: `electron.onboarding.welcomeV2.role.subtitle`,
                        defaultMessage: `Customize Codex to fit the way you work`,
                        description: `Welcome v2 role selection subtitle`,
                      }),
                    }),
                  ],
                }),
                (0, Y.jsx)(`div`, {
                  className: `mt-8 grid w-full grid-cols-2 gap-2`,
                  children: ut.map((e) =>
                    (0, Y.jsx)(
                      mt,
                      {
                        option: e,
                        selected: c.roles.includes(e.id),
                        onClick: () => g(e.id),
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, Y.jsx)(ht, {
                  checked: c.personalizedSuggestionsEnabled,
                  onChange: y,
                }),
                (0, Y.jsxs)(`div`, {
                  className: `mt-8 flex w-full max-w-xs flex-col items-center gap-3`,
                  children: [
                    (0, Y.jsx)(`button`, {
                      className: _(
                        `flex w-full items-center justify-center rounded-full border border-transparent px-4 py-3 text-[14px] leading-5 font-medium text-token-dropdown-background`,
                        b
                          ? `cursor-interaction bg-token-foreground hover:bg-token-foreground/80`
                          : `cursor-not-allowed bg-token-foreground/30`,
                      ),
                      type: `button`,
                      disabled: !b,
                      onClick: () => {
                        t({
                          result: {
                            step: H.RoleSelection,
                            roles: c.roles,
                            personalizedSuggestionsEnabled:
                              c.personalizedSuggestionsEnabled,
                            workMode: Z(c.roles),
                          },
                        });
                      },
                      children: (0, Y.jsx)(C, {
                        id: `electron.onboarding.welcomeV2.continue`,
                        defaultMessage: `Continue`,
                        description: `Welcome v2 continue button label`,
                      }),
                    }),
                    (0, Y.jsx)(`button`, {
                      type: `button`,
                      className: _(
                        `inline-flex items-center justify-center px-2 py-2 text-[14px] font-medium text-token-description-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
                        x
                          ? `cursor-interaction hover:text-token-foreground`
                          : `cursor-not-allowed opacity-50`,
                      ),
                      disabled: !x,
                      onClick: () => {
                        let e = [dt],
                          n = {
                            roles: e,
                            personalizedSuggestionsEnabled: !1,
                            workMode: Z(e),
                          };
                        (m(n),
                          t({
                            result: {
                              step: H.RoleSelection,
                              roles: n.roles,
                              personalizedSuggestionsEnabled:
                                n.personalizedSuggestionsEnabled,
                              workMode: n.workMode,
                            },
                            skipped: !0,
                          }));
                      },
                      children: (0, Y.jsx)(C, {
                        id: `electron.onboarding.welcomeV2.skip`,
                        defaultMessage: `Skip`,
                        description: `Welcome v2 skip button label`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }),
      (t[13] = b),
      (t[14] = x),
      (t[15] = c.personalizedSuggestionsEnabled),
      (t[16] = c.roles),
      (t[17] = m),
      (t[18] = g),
      (t[19] = E))
    : (E = t[19]);
  let D;
  return (
    t[20] !== T || t[21] !== E
      ? ((D = (0, Y.jsx)(X, {
          name: `role_selection`,
          onComplete: T,
          children: E,
        })),
        (t[20] = T),
        (t[21] = E),
        (t[22] = D))
      : (D = t[22]),
    D
  );
}
function mt(e) {
  let t = (0, V.c)(12),
    { option: n, selected: r, onClick: i } = e,
    a = r
      ? `border-token-foreground/20 bg-token-foreground/[0.06]`
      : `border-token-border bg-token-main-surface-primary hover:bg-token-foreground/[0.03]`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = _(
        `relative flex h-10 min-w-0 items-center justify-center overflow-hidden rounded-xl border px-3 py-2 text-center text-[14px] leading-5 font-normal text-token-foreground`,
        a,
      )),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === n.label
    ? (s = t[3])
    : ((s = (0, Y.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: n.label,
      })),
      (t[2] = n.label),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r
        ? (0, Y.jsx)(ge, {
            className: `absolute left-2 size-4 text-token-foreground`,
            "aria-hidden": `true`,
          })
        : null),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== r || t[8] !== o || t[9] !== s || t[10] !== c
      ? ((l = (0, Y.jsxs)(`button`, {
          type: `button`,
          className: o,
          "aria-pressed": r,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function ht(e) {
  let t = (0, V.c)(25),
    { checked: n, onChange: r } = e,
    i = b(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage({
        id: `electron.onboarding.welcomeV2.personalizedSuggestions.toggle`,
        defaultMessage: `Enable personalized suggestions`,
        description: `Accessible label for the welcome v2 personalized suggestions toggle`,
      })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r || t[4] !== a
    ? ((o = (0, Y.jsx)(Ce, { checked: n, ariaLabel: a, onChange: r })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] !== n || t[7] !== r
    ? ((s = () => r(!n)), (t[6] = n), (t[7] = r), (t[8] = s))
    : (s = t[8]);
  let c;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Y.jsx)(C, {
        id: `electron.onboarding.welcomeV2.personalizedSuggestions.title`,
        defaultMessage: `Suggest personalized tasks`,
        description: `Title for the welcome v2 personalized suggestions toggle`,
      })),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] !== n || t[11] !== s
    ? ((l = (0, Y.jsx)(`button`, {
        type: `button`,
        className: `cursor-interaction text-sm leading-5 font-normal text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
        "aria-pressed": n,
        onClick: s,
        children: c,
      })),
      (t[10] = n),
      (t[11] = s),
      (t[12] = l))
    : (l = t[12]);
  let u;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Y.jsx)(`span`, {
        className: `block !text-white`,
        children: (0, Y.jsx)(C, {
          id: `electron.onboarding.welcomeV2.personalizedSuggestions.description`,
          defaultMessage: `Codex can suggest what to do next by searching project files and connected apps`,
          description: `Tooltip for the welcome v2 personalized suggestions toggle`,
        }),
      })),
      (t[13] = u))
    : (u = t[13]);
  let d;
  t[14] === i
    ? (d = t[15])
    : ((d = i.formatMessage({
        id: `electron.onboarding.welcomeV2.personalizedSuggestions.info`,
        defaultMessage: `About personalized suggestions`,
        description: `Accessible label for the welcome v2 personalized suggestions info tooltip`,
      })),
      (t[14] = i),
      (t[15] = d));
  let f;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Y.jsx)(R, { className: `size-4`, "aria-hidden": `true` })),
      (t[16] = f))
    : (f = t[16]);
  let p;
  t[17] === d
    ? (p = t[18])
    : ((p = (0, Y.jsx)(le, {
        side: `top`,
        sideOffset: 6,
        delayDuration: 0,
        tooltipClassName: `!border-transparent !bg-black px-1.5 py-1.5 text-center text-xs leading-4 font-medium !text-white shadow-lg`,
        tooltipBodyClassName: `!text-white`,
        tooltipMaxWidth: `17rem`,
        tooltipContent: u,
        children: (0, Y.jsx)(`button`, {
          type: `button`,
          className: `inline-flex size-4 items-center justify-center rounded-full text-token-text-tertiary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
          "aria-label": d,
          children: f,
        }),
      })),
      (t[17] = d),
      (t[18] = p));
  let m;
  t[19] !== l || t[20] !== p
    ? ((m = (0, Y.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [l, p],
      })),
      (t[19] = l),
      (t[20] = p),
      (t[21] = m))
    : (m = t[21]);
  let h;
  return (
    t[22] !== m || t[23] !== o
      ? ((h = (0, Y.jsxs)(`div`, {
          className: `mt-7 flex items-center justify-center gap-2`,
          children: [o, m],
        })),
        (t[22] = m),
        (t[23] = o),
        (t[24] = h))
      : (h = t[24]),
    h
  );
}
var gt = [
  {
    id: `animals`,
    emoji: `🐶`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.animals`,
      defaultMessage: `Animals`,
      description: `Teen onboarding interest option for animals`,
    }),
  },
  {
    id: `fitness`,
    emoji: `💪`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.fitness`,
      defaultMessage: `Fitness`,
      description: `Teen onboarding interest option for fitness`,
    }),
  },
  {
    id: `school`,
    emoji: `📖`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.school`,
      defaultMessage: `School`,
      description: `Teen onboarding interest option for school`,
    }),
  },
  {
    id: `art_creative`,
    emoji: `🎨`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.artCreative`,
      defaultMessage: `Art & Creative`,
      description: `Teen onboarding interest option for art and creative work`,
    }),
  },
  {
    id: `beauty_style`,
    emoji: `💄`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.beautyStyle`,
      defaultMessage: `Beauty & Style`,
      description: `Teen onboarding interest option for beauty and style`,
    }),
  },
  {
    id: `science`,
    emoji: `🧪`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.science`,
      defaultMessage: `Science`,
      description: `Teen onboarding interest option for science`,
    }),
  },
  {
    id: `money`,
    emoji: `💸`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.money`,
      defaultMessage: `Money`,
      description: `Teen onboarding interest option for money`,
    }),
  },
  {
    id: `gaming`,
    emoji: `👾`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.gaming`,
      defaultMessage: `Gaming`,
      description: `Teen onboarding interest option for gaming`,
    }),
  },
  {
    id: `music`,
    emoji: `🎵`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.music`,
      defaultMessage: `Music`,
      description: `Teen onboarding interest option for music`,
    }),
  },
  {
    id: `sports`,
    emoji: `🏀`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.sports`,
      defaultMessage: `Sports`,
      description: `Teen onboarding interest option for sports`,
    }),
  },
  {
    id: `coding`,
    emoji: `🧑‍💻`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.coding`,
      defaultMessage: `Coding`,
      description: `Teen onboarding interest option for coding`,
    }),
  },
  {
    id: `other`,
    emoji: `🔎`,
    label: (0, Y.jsx)(C, {
      id: `electron.onboarding.teenWelcome.interest.other`,
      defaultMessage: `Other`,
      description: `Teen onboarding interest option for something else`,
    }),
  },
];
function _t(e) {
  let t = (0, V.c)(14),
    { selectedInterests: n, onToggleInterest: r, onNext: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(`img`, {
        src: B,
        className: `size-12 shrink-0`,
        draggable: !1,
        alt: ``,
        "aria-hidden": `true`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(`h1`, {
        className: `mt-4 text-center text-[28px] leading-[34px] font-normal tracking-[0.38px] text-token-foreground`,
        children: (0, Y.jsx)(C, {
          id: `electron.onboarding.teenWelcome.interests.title`,
          defaultMessage: `What are you into right now?`,
          description: `Title on the teen onboarding interest picker page`,
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(`p`, {
        className: `mt-2 text-center text-base leading-6 text-token-description-foreground`,
        children: (0, Y.jsx)(C, {
          id: `electron.onboarding.teenWelcome.interests.subtitle`,
          defaultMessage: `Pick your interests and we’ll suggest things to build`,
          description: `Subtitle on the teen onboarding interest picker page`,
        }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== r || t[4] !== n
    ? ((c = gt.map((e) =>
        (0, Y.jsx)(
          vt,
          {
            option: e,
            selected: n.includes(e.id),
            onClick: () => {
              r(e.id);
            },
          },
          e.id,
        ),
      )),
      (t[3] = r),
      (t[4] = n),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === c
    ? (l = t[7])
    : ((l = (0, Y.jsx)(`div`, {
        className: `mt-8 flex w-full flex-wrap items-center justify-center gap-3 px-6`,
        children: c,
      })),
      (t[6] = c),
      (t[7] = l));
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Y.jsx)(C, {
        id: `electron.onboarding.teenWelcome.interests.next`,
        defaultMessage: `Next`,
        description: `Button label on the teen onboarding interest picker page`,
      })),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === i
    ? (d = t[10])
    : ((d = (0, Y.jsx)(j, {
        className: `mt-8 h-10 w-80 justify-center rounded-full border-transparent px-4 py-0 text-sm leading-5 font-medium`,
        color: `primary`,
        size: `default`,
        onClick: i,
        children: u,
      })),
      (t[9] = i),
      (t[10] = d));
  let f;
  return (
    t[11] !== l || t[12] !== d
      ? ((f = (0, Y.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary px-6 py-12 text-token-foreground`,
          children: (0, Y.jsxs)(`main`, {
            className: `flex w-full max-w-[600px] flex-col items-center`,
            children: [a, o, s, l, d],
          }),
        })),
        (t[11] = l),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function vt(e) {
  let t = (0, V.c)(12),
    { option: n, selected: r, onClick: i } = e,
    a = r
      ? `border-token-foreground bg-token-foreground/5`
      : `border-token-border bg-token-main-surface-primary hover:bg-token-foreground/[0.03]`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = _(
        `flex h-12 shrink-0 cursor-interaction items-center gap-2.5 rounded-[10px] border px-[13px] py-2.5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
        a,
      )),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === n.emoji
    ? (s = t[3])
    : ((s = (0, Y.jsx)(`span`, {
        className: `text-xl leading-5 tracking-[-0.18px] text-token-description-foreground`,
        "aria-hidden": `true`,
        children: n.emoji,
      })),
      (t[2] = n.emoji),
      (t[3] = s));
  let c;
  t[4] === n.label
    ? (c = t[5])
    : ((c = (0, Y.jsx)(`span`, {
        className: `text-base leading-6 tracking-[-0.32px] text-token-foreground`,
        children: n.label,
      })),
      (t[4] = n.label),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== r || t[8] !== o || t[9] !== s || t[10] !== c
      ? ((l = (0, Y.jsxs)(`button`, {
          type: `button`,
          className: o,
          "aria-pressed": r,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Q(e) {
  let t = (0, V.c)(9),
    { onContinue: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = []), (t[0] = r))
    : (r = t[0]);
  let [i, a] = (0, J.useState)(r),
    o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (e) => {
        a((t) => Ie(t, e));
      }),
      (t[1] = o))
    : (o = t[1]);
  let s = o,
    c;
  t[2] === n
    ? (c = t[3])
    : ((c = (e) => {
        let { result: t } = e;
        n(t);
      }),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] === i
    ? (l = t[5])
    : ((l = (e) => {
        let { completeStep: t } = e;
        return (0, Y.jsx)(_t, {
          selectedInterests: i,
          onToggleInterest: s,
          onNext: () => {
            t({ result: { step: H.TeenInterests, interests: i } });
          },
        });
      }),
      (t[4] = i),
      (t[5] = l));
  let u;
  return (
    t[6] !== c || t[7] !== l
      ? ((u = (0, Y.jsx)(X, {
          name: `teen_interests`,
          onComplete: c,
          children: l,
        })),
        (t[6] = c),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
var yt = [
  {
    id: `dodging-game`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.dodgingGame.title`,
      defaultMessage: `Dodging Game`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.dodgingGame.description`,
      defaultMessage: `Build a game you can play in your browser.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.dodgingGame.prompt`,
      defaultMessage: `Build me a browser game where I control a character, dodge obstacles, collect points, and try to beat my high score. Make it colorful and easy to play.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`gaming`, `coding`],
    thumbnail: {
      emoji: `🎮`,
      className: `bg-[linear-gradient(135deg,#DFF6FF_0%,#BEE6FF_100%)]`,
    },
  },
  {
    id: `study-web-app`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.studyWebApp.title`,
      defaultMessage: `Study web app`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.studyWebApp.description`,
      defaultMessage: `Turn your notes into flashcards and quizzes.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.studyWebApp.prompt`,
      defaultMessage: `Create a study web app where I can paste notes, turn them into flashcards, quiz myself, and track what I need to review next.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`school`, `science`, `coding`],
    thumbnail: {
      emoji: `📚`,
      className: `bg-[linear-gradient(135deg,#E7FFF2_0%,#C9F3D9_100%)]`,
    },
  },
  {
    id: `outfit-picker`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.outfitPicker.title`,
      defaultMessage: `Outfit picker`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.outfitPicker.description`,
      defaultMessage: `Get outfit ideas based on your style, plans, and weather.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.outfitPicker.prompt`,
      defaultMessage: `Make an outfit picker app that asks about my style, plans, and the weather, then suggests outfit ideas and lets me save favorites.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`beauty_style`, `art_creative`],
    thumbnail: {
      emoji: `👟`,
      className: `bg-[linear-gradient(135deg,#FFF3F7_0%,#F6DDE8_100%)]`,
    },
  },
  {
    id: `pet-care-tracker`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.petCareTracker.title`,
      defaultMessage: `Pet care tracker`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.petCareTracker.description`,
      defaultMessage: `Track feeding, walks, and reminders for a pet.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.petCareTracker.prompt`,
      defaultMessage: `Build a pet care tracker where I can log feeding, walks, training, and reminders for my pet. Add a cute dashboard and streaks.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`animals`],
    thumbnail: {
      emoji: `🐶`,
      className: `bg-[linear-gradient(135deg,#FFF6DE_0%,#F9DFB4_100%)]`,
    },
  },
  {
    id: `animal-avatar-maker`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.animalAvatarMaker.title`,
      defaultMessage: `Animal avatar maker`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.animalAvatarMaker.description`,
      defaultMessage: `Design cute animal characters and profile pictures.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.animalAvatarMaker.prompt`,
      defaultMessage: `Build an animal avatar maker where I can design cute animal characters, choose colors and accessories, and save profile pictures.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`animals`, `art_creative`],
    thumbnail: {
      emoji: `🐾`,
      className: `bg-[linear-gradient(135deg,#F9F0FF_0%,#FFD9EF_100%)]`,
    },
  },
  {
    id: `workout-planner`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.workoutPlanner.title`,
      defaultMessage: `Workout planner`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.workoutPlanner.description`,
      defaultMessage: `Plan workouts and track progress over time.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.workoutPlanner.prompt`,
      defaultMessage: `Create a workout planner for teens with beginner-friendly workouts, rest days, progress tracking, and encouraging reminders.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`fitness`, `sports`],
    thumbnail: {
      emoji: `💪`,
      className: `bg-[linear-gradient(135deg,#EBFFF6_0%,#BEEBD7_100%)]`,
    },
  },
  {
    id: `song-idea-board`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.songIdeaBoard.title`,
      defaultMessage: `Song idea board`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.songIdeaBoard.description`,
      defaultMessage: `Organize lyrics, moods, and playlist inspiration.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.songIdeaBoard.prompt`,
      defaultMessage: `Make a music idea board where I can save song concepts, lyric fragments, moods, cover art ideas, and playlists that inspire me.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`music`, `art_creative`],
    thumbnail: {
      emoji: `🎵`,
      className: `bg-[linear-gradient(135deg,#F2EDFF_0%,#D7CAFF_100%)]`,
    },
  },
  {
    id: `budget-helper`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.budgetHelper.title`,
      defaultMessage: `Budget helper`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.budgetHelper.description`,
      defaultMessage: `Track savings goals and spending habits.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.budgetHelper.prompt`,
      defaultMessage: `Build a simple budget helper where I can track spending, savings goals, chores or job money, and see how long until I can afford something.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`money`, `school`],
    thumbnail: {
      emoji: `💸`,
      className: `bg-[linear-gradient(135deg,#F1FFE6_0%,#D5F2B6_100%)]`,
    },
  },
  {
    id: `science-fair-lab`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.scienceFairLab.title`,
      defaultMessage: `Science fair lab`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.scienceFairLab.description`,
      defaultMessage: `Plan an experiment and organize observations.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.scienceFairLab.prompt`,
      defaultMessage: `Create a science fair project planner that helps me choose a question, write a hypothesis, track observations, and prepare a presentation.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`science`, `school`],
    thumbnail: {
      emoji: `🧪`,
      className: `bg-[linear-gradient(135deg,#EAFBFF_0%,#C3EDF6_100%)]`,
    },
  },
  {
    id: `team-stats-dashboard`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.teamStatsDashboard.title`,
      defaultMessage: `Team stats dashboard`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.teamStatsDashboard.description`,
      defaultMessage: `Track games, players, and season highlights.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.teamStatsDashboard.prompt`,
      defaultMessage: `Build a sports team dashboard where I can track games, player stats, highlights, practice goals, and season progress.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`sports`, `fitness`],
    thumbnail: {
      emoji: `🏀`,
      className: `bg-[linear-gradient(135deg,#FFF0E6_0%,#FFD3B8_100%)]`,
    },
  },
  {
    id: `portfolio-gallery`,
    titleMessage: v({
      id: `electron.onboarding.teenPrompts.portfolioGallery.title`,
      defaultMessage: `Portfolio gallery`,
      description: `Title for a teen onboarding example prompt`,
    }),
    descriptionMessage: v({
      id: `electron.onboarding.teenPrompts.portfolioGallery.description`,
      defaultMessage: `Show off art, photos, writing, or projects.`,
      description: `Description for a teen onboarding example prompt`,
    }),
    promptMessage: v({
      id: `electron.onboarding.teenPrompts.portfolioGallery.prompt`,
      defaultMessage: `Make a personal portfolio gallery where I can show my art, photos, writing, projects, and a short bio in a clean visual layout.`,
      description: `Prompt inserted from a teen onboarding example card`,
    }),
    interests: [`art_creative`, `coding`],
    thumbnail: {
      emoji: `🎨`,
      className: `bg-[linear-gradient(135deg,#FFF0FA_0%,#EFD1FF_100%)]`,
    },
  },
];
function bt(e) {
  let t = (0, V.c)(34),
    { selectedInterests: n, onContinue: r } = e,
    i = b(),
    a,
    o,
    s,
    c,
    l,
    u,
    d;
  if (t[0] !== i || t[1] !== r || t[2] !== n) {
    let e = xt(n);
    ((d = `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary px-6 py-12 text-token-foreground`),
      (s = `flex w-full max-w-[768px] flex-col items-center`),
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((c = (0, Y.jsx)(`img`, {
            src: B,
            className: `size-12 shrink-0`,
            draggable: !1,
            alt: ``,
            "aria-hidden": `true`,
          })),
          (t[10] = c))
        : (c = t[10]),
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((l = (0, Y.jsx)(`h1`, {
            className: `mt-4 text-center text-[28px] leading-[34px] font-normal tracking-[0.38px] text-token-foreground`,
            children: (0, Y.jsx)(C, {
              id: `electron.onboarding.teenPrompts.title`,
              defaultMessage: `See what Codex can do`,
              description: `Heading above teen onboarding example prompt cards`,
            }),
          })),
          (t[11] = l))
        : (l = t[11]),
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((u = (0, Y.jsx)(`p`, {
            className: `mt-2 max-w-[688px] text-center text-base leading-6 text-token-description-foreground`,
            children: (0, Y.jsx)(C, {
              id: `electron.onboarding.teenPrompts.subtitle`,
              defaultMessage: `Here are some ideas for your first project. Choose an idea, or start with one of your own.`,
              description: `Subtitle above teen onboarding example prompt cards`,
            }),
          })),
          (t[12] = u))
        : (u = t[12]),
      (a = `mt-6 grid w-full grid-cols-1 gap-4 min-[760px]:grid-cols-3`));
    let f;
    (t[13] !== i || t[14] !== r
      ? ((f = (e) =>
          (0, Y.jsx)(
            St,
            {
              prompt: e,
              onUsePrompt: () => {
                r(i.formatMessage(e.promptMessage));
              },
            },
            e.id,
          )),
        (t[13] = i),
        (t[14] = r),
        (t[15] = f))
      : (f = t[15]),
      (o = e.map(f)),
      (t[0] = i),
      (t[1] = r),
      (t[2] = n),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d));
  } else
    ((a = t[3]),
      (o = t[4]),
      (s = t[5]),
      (c = t[6]),
      (l = t[7]),
      (u = t[8]),
      (d = t[9]));
  let f;
  t[16] !== a || t[17] !== o
    ? ((f = (0, Y.jsx)(`div`, { className: a, children: o })),
      (t[16] = a),
      (t[17] = o),
      (t[18] = f))
    : (f = t[18]);
  let p;
  t[19] === r
    ? (p = t[20])
    : ((p = () => {
        r();
      }),
      (t[19] = r),
      (t[20] = p));
  let m;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsx)(C, {
        id: `electron.onboarding.teenPrompts.writeOwnPrompt`,
        defaultMessage: `Write my own prompt`,
        description: `Button label for skipping teen onboarding example prompts`,
      })),
      (t[21] = m))
    : (m = t[21]);
  let h;
  t[22] === p
    ? (h = t[23])
    : ((h = (0, Y.jsx)(`button`, {
        className: `mt-8 h-10 cursor-interaction px-4 text-sm leading-5 font-normal text-token-description-foreground hover:text-token-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
        type: `button`,
        onClick: p,
        children: m,
      })),
      (t[22] = p),
      (t[23] = h));
  let g;
  t[24] !== h ||
  t[25] !== s ||
  t[26] !== c ||
  t[27] !== l ||
  t[28] !== u ||
  t[29] !== f
    ? ((g = (0, Y.jsxs)(`main`, { className: s, children: [c, l, u, f, h] })),
      (t[24] = h),
      (t[25] = s),
      (t[26] = c),
      (t[27] = l),
      (t[28] = u),
      (t[29] = f),
      (t[30] = g))
    : (g = t[30]);
  let _;
  return (
    t[31] !== g || t[32] !== d
      ? ((_ = (0, Y.jsx)(`div`, { className: d, children: g })),
        (t[31] = g),
        (t[32] = d),
        (t[33] = _))
      : (_ = t[33]),
    _
  );
}
function xt(e) {
  return yt
    .map((t, n) => ({
      prompt: t,
      index: n,
      matchCount: t.interests.filter((t) => e.includes(t)).length,
    }))
    .sort((e, t) =>
      t.matchCount === e.matchCount
        ? e.index - t.index
        : t.matchCount - e.matchCount,
    )
    .slice(0, 3)
    .map(({ prompt: e }) => e);
}
function St(e) {
  let t = (0, V.c)(21),
    { prompt: n, onUsePrompt: r } = e,
    i;
  t[0] === n.thumbnail.className
    ? (i = t[1])
    : ((i = _(
        `flex h-[125px] items-center justify-center overflow-hidden rounded-t-2xl`,
        n.thumbnail.className,
      )),
      (t[0] = n.thumbnail.className),
      (t[1] = i));
  let a;
  t[2] === n.thumbnail.emoji
    ? (a = t[3])
    : ((a = (0, Y.jsx)(`div`, {
        className: `flex size-20 items-center justify-center rounded-2xl bg-white/70 text-[42px] shadow-lg`,
        children: n.thumbnail.emoji,
      })),
      (t[2] = n.thumbnail.emoji),
      (t[3] = a));
  let o;
  t[4] !== i || t[5] !== a
    ? ((o = (0, Y.jsx)(`div`, {
        className: i,
        "aria-hidden": `true`,
        children: a,
      })),
      (t[4] = i),
      (t[5] = a),
      (t[6] = o))
    : (o = t[6]);
  let s;
  t[7] === n.titleMessage
    ? (s = t[8])
    : ((s = (0, Y.jsx)(`h3`, {
        className: `text-sm leading-5 font-medium tracking-[-0.24px] text-token-foreground`,
        children: (0, Y.jsx)(C, { ...n.titleMessage }),
      })),
      (t[7] = n.titleMessage),
      (t[8] = s));
  let c;
  t[9] === n.descriptionMessage
    ? (c = t[10])
    : ((c = (0, Y.jsx)(`p`, {
        className: `mt-0.5 min-h-10 text-sm leading-5 tracking-[-0.3px] text-token-description-foreground`,
        children: (0, Y.jsx)(C, { ...n.descriptionMessage }),
      })),
      (t[9] = n.descriptionMessage),
      (t[10] = c));
  let l;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(C, {
        id: `electron.onboarding.teenPrompts.usePrompt`,
        defaultMessage: `Use prompt`,
        description: `Button label for selecting a teen onboarding example prompt`,
      })),
      (t[11] = l))
    : (l = t[11]);
  let u;
  t[12] === r
    ? (u = t[13])
    : ((u = (0, Y.jsx)(j, {
        className: `mt-4 h-9 w-full justify-center rounded-full px-4 py-0 text-sm leading-5 font-medium`,
        color: `secondary`,
        size: `default`,
        onClick: r,
        children: l,
      })),
      (t[12] = r),
      (t[13] = u));
  let d;
  t[14] !== s || t[15] !== c || t[16] !== u
    ? ((d = (0, Y.jsxs)(`div`, {
        className: `flex flex-1 flex-col px-4 py-3`,
        children: [s, c, u],
      })),
      (t[14] = s),
      (t[15] = c),
      (t[16] = u),
      (t[17] = d))
    : (d = t[17]);
  let f;
  return (
    t[18] !== o || t[19] !== d
      ? ((f = (0, Y.jsxs)(`article`, {
          className: `flex min-w-0 flex-col overflow-hidden rounded-2xl border border-token-border bg-token-main-surface-primary`,
          children: [o, d],
        })),
        (t[18] = o),
        (t[19] = d),
        (t[20] = f))
      : (f = t[20]),
    f
  );
}
function Ct(e) {
  let t = (0, V.c)(7),
    { selectedInterests: n, onContinue: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (e) => {
        let { result: t } = e;
        r(t);
      }),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (e) => {
        let { completeStep: t } = e;
        return (0, Y.jsx)(bt, {
          selectedInterests: n,
          onContinue: (e) => {
            t({
              result:
                e == null
                  ? { step: H.TeenPrompts }
                  : { step: H.TeenPrompts, prompt: e },
              skipped: e == null,
            });
          },
        });
      }),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Y.jsx)(X, {
          name: `teen_prompts`,
          onComplete: i,
          children: a,
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function wt(e) {
  let t = (0, V.c)(10),
    { onContinue: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Y.jsx)(Pe, {
        className: `text-token-foreground`,
        animation: `hello`,
        animated: !1,
        size: 64,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Y.jsx)(`h1`, {
        className: `heading-xl mt-4 text-center font-semibold text-token-foreground`,
        children: (0, Y.jsx)(C, {
          id: `electron.onboarding.teenWelcome.title`,
          defaultMessage: `Welcome to Codex`,
          description: `Title on the teen onboarding welcome page`,
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a, o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(`p`, {
        className: `mt-2 max-w-sm text-center text-lg leading-6 text-token-description-foreground`,
        children: (0, Y.jsx)(C, {
          id: `electron.onboarding.teenWelcome.subtitle`,
          defaultMessage: `Turn your ideas into web apps, games, and tools just for you—even with no coding experience.`,
          description: `Subtitle on the teen onboarding welcome page`,
        }),
      })),
      (o = (0, Y.jsx)(Et, {})),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3]));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(C, {
        id: `electron.onboarding.teenWelcome.continue`,
        defaultMessage: `Get started`,
        description: `Button label on the teen onboarding welcome page`,
      })),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === n
    ? (c = t[6])
    : ((c = (0, Y.jsx)(j, {
        className: `mt-8 h-12 w-80 justify-center rounded-full border-transparent px-4 py-0 text-base leading-5 font-semibold`,
        color: `primary`,
        size: `default`,
        onClick: n,
        children: s,
      })),
      (t[5] = n),
      (t[6] = c));
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsxs)(`button`, {
        className: `mt-3 flex h-10 cursor-interaction items-center gap-2 text-base leading-5 font-semibold text-token-foreground hover:underline`,
        type: `button`,
        onClick: Tt,
        children: [
          (0, Y.jsx)(C, {
            id: `electron.onboarding.teenWelcome.learnMore`,
            defaultMessage: `Learn more about what Codex can do`,
            description: `Link label on the teen onboarding welcome page`,
          }),
          (0, Y.jsx)(Te, { className: `icon-sm` }),
        ],
      })),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] === c
      ? (u = t[9])
      : ((u = (0, Y.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center bg-token-main-surface-primary px-8 py-12`,
          children: (0, Y.jsxs)(`main`, {
            className: `flex w-full flex-col items-center`,
            children: [r, i, a, o, c, l],
          }),
        })),
        (t[8] = c),
        (t[9] = u)),
    u
  );
}
function Tt() {
  ie.dispatchMessage(`open-in-browser`, { url: `https://openai.com/codex/` });
}
function Et() {
  let e = (0, V.c)(4),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Y.jsxs)($, {
        className: `top-[13px] left-0 h-[121px] w-[170px] -rotate-[12deg] bg-[#F9ECF3]`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `absolute inset-x-5 top-5 h-10 rounded bg-[#FFF8FC]`,
          }),
          (0, Y.jsx)(`div`, {
            className: `absolute right-4 bottom-4 left-4 h-8 rounded bg-[#F3DDE9]`,
          }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Y.jsxs)($, {
        className: `top-[14px] right-0 h-[120px] w-[170px] rotate-[12deg] bg-[#F8F8DE]`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `absolute inset-x-4 top-4 h-12 rounded bg-[#FFFFF0]`,
          }),
          (0, Y.jsx)(`div`, {
            className: `absolute right-6 bottom-5 left-6 h-7 rounded bg-[#E9E9B6]`,
          }),
        ],
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Y.jsxs)($, {
        className: `top-[54px] left-1/2 h-[108px] w-[162px] -translate-x-1/2 bg-[#CFE0FF]`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `absolute inset-x-3 top-3 h-[72px] rounded bg-[linear-gradient(180deg,#FBFDFF_0%,#D9E8FF_100%)]`,
          }),
          (0, Y.jsx)(`div`, {
            className: `absolute right-4 bottom-3 left-4 h-4 rounded-full bg-white/75`,
          }),
        ],
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Y.jsxs)(`div`, {
          className: `relative mt-8 h-[177px] w-[320px]`,
          "aria-hidden": `true`,
          children: [
            t,
            n,
            r,
            (0, Y.jsx)(`div`, {
              className: `absolute bottom-0 left-1/2 flex h-6 -translate-x-1/2 items-center rounded-full bg-token-main-surface-primary px-3 text-xs leading-3 font-medium text-token-foreground shadow-xl`,
              children: (0, Y.jsx)(C, {
                id: `electron.onboarding.teenWelcome.previewPrompt`,
                defaultMessage: `Build a studying app`,
                description: `Prompt shown in the decorative preview on the teen onboarding welcome page`,
              }),
            }),
          ],
        })),
        (e[3] = i))
      : (i = e[3]),
    i
  );
}
function $(e) {
  let t = (0, V.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = _(
        `absolute overflow-hidden rounded-2xl border border-token-border/50 shadow-2xl`,
        r,
      )),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Y.jsx)(`div`, { className: i, children: n })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Dt(e) {
  let t = (0, V.c)(2),
    { onContinue: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Y.jsx)(X, {
          name: `teen_welcome`,
          onComplete: (e) => {
            let { result: t } = e;
            n(t);
          },
          children: Ot,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ot(e) {
  let { completeStep: t } = e;
  return (0, Y.jsx)(wt, {
    onContinue: () => {
      t({ result: { step: H.TeenWelcome } });
    },
  });
}
function kt(e) {
  let t = (0, V.c)(18),
    { currentStep: n, onboardingContext: r, onContinue: i } = e,
    a = T(K),
    o = T(q);
  switch (n) {
    case H.Start: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(De, { debugName: `OnboardingLoadingPage` })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case H.TeenWelcome: {
      let e;
      return (
        t[1] === i
          ? (e = t[2])
          : ((e = (0, Y.jsx)(Dt, { onContinue: i })), (t[1] = i), (t[2] = e)),
        e
      );
    }
    case H.TeenInterests: {
      let e;
      return (
        t[3] === i
          ? (e = t[4])
          : ((e = (0, Y.jsx)(Q, { onContinue: i })), (t[3] = i), (t[4] = e)),
        e
      );
    }
    case H.TeenPrompts: {
      if (a == null) return null;
      let e;
      return (
        t[5] !== i || t[6] !== a.interests
          ? ((e = (0, Y.jsx)(Ct, {
              selectedInterests: a.interests,
              onContinue: i,
            })),
            (t[5] = i),
            (t[6] = a.interests),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case H.RoleSelection: {
      let e;
      return (
        t[8] !== i || t[9] !== r.isLoading
          ? ((e = (0, Y.jsx)(pt, {
              isAdvancePending: r.isLoading,
              onContinue: i,
            })),
            (t[8] = i),
            (t[9] = r.isLoading),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case H.AgentMigrationSourceSelection: {
      let e;
      return (
        t[11] !== i || t[12] !== r.agentMigration
          ? ((e = (0, Y.jsx)(ct, {
              agentMigrationContext: r.agentMigration,
              onContinue: i,
            })),
            (t[11] = i),
            (t[12] = r.agentMigration),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    case H.AgentMigrationItemSelection: {
      if (o == null) return null;
      let e;
      return (
        t[14] !== o.providerIds || t[15] !== i || t[16] !== r.agentMigration
          ? ((e = (0, Y.jsx)(ot, {
              agentMigrationContext: r.agentMigration,
              providerIds: o.providerIds,
              onContinue: i,
            })),
            (t[14] = o.providerIds),
            (t[15] = i),
            (t[16] = r.agentMigration),
            (t[17] = e))
          : (e = t[17]),
        e
      );
    }
    case H.Complete:
      return null;
  }
}
function At() {
  let e = (0, V.c)(21),
    t = w(U),
    n = T(W),
    r = Ke(),
    [i, a] = (0, J.useState)(!1),
    o;
  e[0] === i
    ? (o = e[1])
    : ((o = { isAdvancingOnboarding: i }), (e[0] = i), (e[1] = o));
  let s = Xe(o),
    c;
  e[2] !== r || e[3] !== s || e[4] !== t
    ? ((c = (e) =>
        $e(t, {
          completeOnboarding: r,
          logStepViewed: (e) => Ve(t, e),
          onboardingContext: s,
          result: e,
        })),
      (e[2] = r),
      (e[3] = s),
      (e[4] = t),
      (e[5] = c))
    : (c = e[5]);
  let l = c,
    u;
  e[6] === l
    ? (u = e[7])
    : ((u = () => {
        l();
      }),
      (e[6] = l),
      (e[7] = u));
  let d = (0, J.useEffectEvent)(u),
    f;
  e[8] !== d || e[9] !== n || e[10] !== s.isLoading
    ? ((f = () => {
        n !== H.Start || s.isLoading || d();
      }),
      (e[8] = d),
      (e[9] = n),
      (e[10] = s.isLoading),
      (e[11] = f))
    : (f = e[11]);
  let p;
  (e[12] !== n || e[13] !== s.isLoading
    ? ((p = [n, s.isLoading]), (e[12] = n), (e[13] = s.isLoading), (e[14] = p))
    : (p = e[14]),
    (0, J.useEffect)(f, p));
  let m;
  e[15] === l
    ? (m = e[16])
    : ((m = (e) => {
        (a(!0),
          l(e).finally(() => {
            a(!1);
          }));
      }),
      (e[15] = l),
      (e[16] = m));
  let h = m,
    g;
  return (
    e[17] !== n || e[18] !== h || e[19] !== s
      ? ((g = (0, Y.jsx)(kt, {
          currentStep: n,
          onboardingContext: s,
          onContinue: h,
        })),
        (e[17] = n),
        (e[18] = h),
        (e[19] = s),
        (e[20] = g))
      : (g = e[20]),
    g
  );
}
function jt() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(Ne, {
          fullBleed: !0,
          children: (0, Y.jsx)(ne, { scope: U, children: (0, Y.jsx)(At, {}) }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { jt as OnboardingPage };
//# sourceMappingURL=onboarding-page.js.map
