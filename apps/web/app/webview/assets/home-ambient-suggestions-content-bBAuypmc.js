import { s as e } from "./chunk-Bj-mKKzh.js";
import { O as t } from "./src-C.js";
import {
  $s as n,
  Js as r,
  Xs as i,
  ec as a,
  fo as o,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as s, t as c } from "./jsx-runtime.js";
import { t as l } from "./clsx-BcPLHiun.js";
import "./react-dom-CvzHKZGB.js";
import "./marked.esm-BR-H6018.js";
import {
  $ as u,
  B as d,
  G as f,
  S as p,
  U as m,
  X as h,
  Y as g,
  Z as _,
  a as v,
  m as y,
  wt as b,
} from "./setting-storage.js";
import { m as x } from "./chunk-LFPYN7LY.js";
import { n as S, t as C } from "./known-app-icon.js";
import "./branch.js";
import "./github-mark-BbpRNXQM.js";
import "./google-drive.js";
import "./notion-hFEWPyiF.js";
import { t as w } from "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import { o as T } from "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import { t as ee } from "./use-auth.js";
import { p as E } from "./codex-api-bK--r_2t.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import "./use-debounced-value-BtOJx-Vp.js";
import { c as te, f as ne, t as re } from "./apps-queries-CmwRqoKz.js";
import "./startCase.js";
import "./experimental-features-queries.js";
import "./use-is-dark-BHkhnHe-.js";
import { t as D } from "./connector-logo.js";
import { r as ie } from "./toast-signal.js";
import "./window-zoom-context.js";
import { n as O, t as ae } from "./tooltip-CDzchJxN.js";
import { t as oe } from "./build-start-conversation-params-DHCgiUKY.js";
import "./route-scope.js";
import "./prompt-text-DuAhtLDu.js";
import "./use-environment.js";
import { p as se } from "./composer-view-state-JRNwOfub.js";
import "./mention-item.js";
import { n as k, t as ce } from "./skill-utils.js";
import { t as le } from "./use-collaboration-mode-CQFe-Ilp.js";
import { t as ue } from "./use-model-settings-BGTYyORt.js";
import "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./link-external-BPZREBQk.js";
import "./open-config-toml-button.js";
import "./open-workspace-file-WgoEFjrv.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import { n as de } from "./model-queries-CVdTsyPv.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./collaboration-mode-queries.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import { c as fe } from "./use-permissions-mode.js";
import "./composer-footer-C_v29uwU.js";
import { n as A, r as pe, t as me } from "./home-row-layout-DTvEYEfe.js";
import "./app-shell-state.js";
import { d as he, n as ge, o as _e } from "./onboarding-state.js";
import { t as ve } from "./use-service-tier-settings.js";
import { t as ye } from "./apps-DwfMzB5Q.js";
import { t as j } from "./chats-DoviPPWc.js";
import { t as be } from "./x-C_RDKBp5.js";
import { n as M, r as xe } from "./projectless-thread.js";
import { r as Se } from "./skus-JiYadAsS.js";
import { t as Ce } from "./plugin-install-store-Daxzgjai.js";
import "./use-platform.js";
import "./use-is-plugins-enabled.js";
import "./browser-sidebar-availability.js";
import { m as we, o as Te } from "./use-plugins-jIZrcuZQ.js";
import { n as Ee } from "./ambient-suggestions-connected-apps-consent.js";
import {
  a as De,
  c as Oe,
  d as ke,
  f as Ae,
  i as je,
  l as Me,
  o as Ne,
  r as N,
  t as Pe,
  u as Fe,
} from "./home-onboarding-assistant-tutorial-card.js";
import { t as Ie } from "./check-circle-filled.js";
import "./recommended-skill-statsig-overrides.js";
var P = b(),
  F = e(s(), 1),
  I = 3,
  Le = d({
    id: `home.connectAppsRow`,
    defaultMessage: `Connect your favorite apps to Codex`,
    description: `Home page row that opens the plugins and apps browser`,
  }),
  L = {
    engineering: [
      {
        appIds: [`github`, `linear`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.engineering.debugIssue.title`,
          defaultMessage: `Debug an issue`,
          description: `Short home prompt title for engineering role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.engineering.debugIssue.prompt`,
          defaultMessage: `Use GitHub, Linear, or my uploaded logs/code to investigate a bug, PR, build failure, or issue I choose. If missing, ask what to inspect. Identify likely root cause, fix path, and tests.`,
          description: `Long home prompt for engineering issue debugging`,
        }),
      },
      {
        appIds: [`github`, `linear`, `file-word-document`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.engineering.planImplementation.title`,
          defaultMessage: `Plan implementation`,
          description: `Short home prompt title for engineering role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.engineering.planImplementation.prompt`,
          defaultMessage: `Use GitHub, Linear, or my uploaded spec to plan implementation for a feature or bug. If I have not named one, ask me which issue. Include likely files, edge cases, and test plan.`,
          description: `Long home prompt for engineering implementation planning`,
        }),
      },
      {
        appIds: [`github`, `file-word-document`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.engineering.reviewPr.title`,
          defaultMessage: `Review a PR`,
          description: `Short home prompt title for engineering role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.engineering.reviewPr.prompt`,
          defaultMessage: `Use GitHub or an uploaded diff to review a specific PR. If no PR is provided, ask which PR to review. Check correctness, risk, edge cases, missing tests, and alignment with the issue or spec.`,
          description: `Long home prompt for engineering PR review`,
        }),
      },
    ],
    product_management: [
      {
        appIds: [`file-word-document`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.product.reviewPrd.title`,
          defaultMessage: `Review a PRD`,
          description: `Short home prompt title for product management role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.product.reviewPrd.prompt`,
          defaultMessage: `If I uploaded or attached a PRD, use that first. Otherwise ask me which PRD, feature, or product area to review. Critique it for unclear requirements, missing metrics, risks, open questions, and next decisions.`,
          description: `Long home prompt for product PRD review`,
        }),
      },
      {
        appIds: [`linear`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.product.prepLaunch.title`,
          defaultMessage: `Prep a launch`,
          description: `Short home prompt title for product management role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.product.prepLaunch.prompt`,
          defaultMessage: `Use Linear or my uploaded context to prep a launch-readiness brief. If I have not named the launch, ask me which one. Summarize blockers, owners, risks, unresolved decisions, and next actions.`,
          description: `Long home prompt for product launch prep`,
        }),
      },
      {
        appIds: [`gmail`, `slack`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.product.summarizeStakeholderAsks.title`,
          defaultMessage: `Summarize stakeholder asks`,
          description: `Short home prompt title for product management role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.product.summarizeStakeholderAsks.prompt`,
          defaultMessage: `Use Gmail, Slack, or my uploaded notes to summarize stakeholder asks on a product topic I choose. If missing, ask for the topic. Group asks by theme and recommend what to do next.`,
          description: `Long home prompt for product stakeholder asks`,
        }),
      },
    ],
    finance: [
      {
        appIds: [`google-calendar`, `google-drive`, `gmail`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.finance.prepReview.title`,
          defaultMessage: `Prep a finance review`,
          description: `Short home prompt title for finance role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.finance.prepReview.prompt`,
          defaultMessage: `Use Google Calendar, Google Drive, Gmail, or my uploaded docs to prep for a finance review, budget, forecast, close item, or model I choose. If missing, ask which topic. Summarize key numbers, risks, decisions, and likely questions.`,
          description: `Long home prompt for finance review prep`,
        }),
      },
      {
        appIds: [`gmail`, `slack`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.finance.triageAsks.title`,
          defaultMessage: `Triage finance asks`,
          description: `Short home prompt title for finance role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.finance.triageAsks.prompt`,
          defaultMessage: `Use Gmail, Slack, or my uploaded notes to find finance asks for a topic I choose. Create a tracker with requester, ask, amount if mentioned, deadline, status, missing info, and next step.`,
          description: `Long home prompt for finance ask triage`,
        }),
      },
      {
        appIds: [`google-drive`, `file-spreadsheet`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.finance.reviewModel.title`,
          defaultMessage: `Review a model`,
          description: `Short home prompt title for finance role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.finance.reviewModel.prompt`,
          defaultMessage: `Use Google Drive or my uploaded spreadsheet/model to review a forecast, budget, close package, or results file. Summarize what changed, what looks off, follow-ups, and a leadership-ready narrative.`,
          description: `Long home prompt for finance model review`,
        }),
      },
    ],
    marketing: [
      {
        appIds: [`file-word-document`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.marketing.reviewBrief.title`,
          defaultMessage: `Review a campaign brief`,
          description: `Short home prompt title for marketing role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.marketing.reviewBrief.prompt`,
          defaultMessage: `If I uploaded or attached a campaign brief, use that first. Otherwise ask me which campaign, launch, audience, or message to review. Summarize positioning, gaps, risks, open questions, and next assets needed.`,
          description: `Long home prompt for marketing campaign brief review`,
        }),
      },
      {
        appIds: [`slack`, `gmail`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.marketing.feedbackDirection.title`,
          defaultMessage: `Turn feedback into direction`,
          description: `Short home prompt title for marketing role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.marketing.feedbackDirection.prompt`,
          defaultMessage: `Use Slack, Gmail, or my uploaded feedback to analyze campaign feedback for a topic I choose. Separate signal from noise, identify repeated concerns, and recommend messaging changes.`,
          description: `Long home prompt for marketing feedback synthesis`,
        }),
      },
      {
        appIds: [`google-drive`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.marketing.assetConcepts.title`,
          defaultMessage: `Draft asset concepts`,
          description: `Short home prompt title for marketing role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.marketing.assetConcepts.prompt`,
          defaultMessage: `Use Google Drive or my uploaded brief to create 3 asset concepts for a campaign or audience I choose. Include audience, message, visual direction, headline copy, and channel fit.`,
          description: `Long home prompt for marketing asset concepts`,
        }),
      },
    ],
    sales: [
      {
        appIds: [`google-calendar`, `gmail`, `google-drive`, `slack`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.sales.prepCustomerMeeting.title`,
          defaultMessage: `Prep a customer meeting`,
          description: `Short home prompt title for sales role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.sales.prepCustomerMeeting.prompt`,
          defaultMessage: `Use Google Calendar, Gmail, Google Drive, Slack, or my uploaded account notes to prep for a customer meeting I choose. If missing, ask which account. Give me context, buyer priorities, talk track, objections, risks, and next steps.`,
          description: `Long home prompt for sales meeting prep`,
        }),
      },
      {
        appIds: [`gmail`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.sales.draftFollowUp.title`,
          defaultMessage: `Draft a follow-up`,
          description: `Short home prompt title for sales role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.sales.draftFollowUp.prompt`,
          defaultMessage: `Use Gmail or my uploaded meeting notes to draft a follow-up for an account or prospect I choose. Summarize context, infer buyer priorities, identify missing info, and write the follow-up.`,
          description: `Long home prompt for sales follow-up drafting`,
        }),
      },
      {
        appIds: [`slack`, `gmail`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.sales.inspectDealRisk.title`,
          defaultMessage: `Inspect deal risk`,
          description: `Short home prompt title for sales role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.sales.inspectDealRisk.prompt`,
          defaultMessage: `Use Slack, Gmail, or my uploaded notes to inspect a deal, account, or territory I choose. Create a risk table with latest signal, risk, owner, next action, and suggested message.`,
          description: `Long home prompt for sales deal risk inspection`,
        }),
      },
    ],
    operations: [
      {
        appIds: [`google-calendar`, `google-drive`, `slack`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.strategy.prepOperatingReview.title`,
          defaultMessage: `Prep an operating review`,
          description: `Short home prompt title for strategy and operations role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.strategy.prepOperatingReview.prompt`,
          defaultMessage: `Use Google Calendar, Google Drive, Slack, or my uploaded docs to prep an operating review for an initiative I choose. If missing, ask which initiative. Summarize goals, blockers, owners, decisions needed, escalation points, and next steps.`,
          description: `Long home prompt for strategy and operations review prep`,
        }),
      },
      {
        appIds: [`google-drive`, `slack`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.strategy.mapDependencies.title`,
          defaultMessage: `Map dependencies`,
          description: `Short home prompt title for strategy and operations role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.strategy.mapDependencies.prompt`,
          defaultMessage: `Use Google Drive, Slack, or my uploaded project plan to map dependencies for a workstream I choose. Include owner, status, risk, dependency, decision needed, and recommended next action.`,
          description: `Long home prompt for strategy dependency mapping`,
        }),
      },
      {
        appIds: [`gmail`, `slack`, `google-calendar`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.strategy.prioritizeStakeholderAsks.title`,
          defaultMessage: `Prioritize stakeholder asks`,
          description: `Short home prompt title for strategy and operations role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.strategy.prioritizeStakeholderAsks.prompt`,
          defaultMessage: `Use Gmail, Slack, Google Calendar, or my uploaded notes to summarize stakeholder asks for an initiative I choose. Prioritize them by urgency, impact, and deadline, then suggest responses.`,
          description: `Long home prompt for strategy stakeholder ask prioritization`,
        }),
      },
    ],
    data_science: [
      {
        appIds: [`google-drive`, `slack`, `github`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.dataScience.investigateMetric.title`,
          defaultMessage: `Investigate a metric`,
          description: `Short home prompt title for data science role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.dataScience.investigateMetric.prompt`,
          defaultMessage: `Use Google Drive, Slack, GitHub, or my uploaded data/readout to investigate a metric, experiment, or dashboard I choose. If missing, ask which one. Summarize the business question, evidence, caveats, likely drivers, and next analysis.`,
          description: `Long home prompt for data science metric investigation`,
        }),
      },
      {
        appIds: [`github`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.dataScience.reviewNotebook.title`,
          defaultMessage: `Review a notebook`,
          description: `Short home prompt title for data science role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.dataScience.reviewNotebook.prompt`,
          defaultMessage: `Use GitHub or my uploaded notebook/code to review a notebook, model, pipeline, or data issue. Explain what changed, why it matters, what could break, and how to validate it.`,
          description: `Long home prompt for data science notebook review`,
        }),
      },
      {
        appIds: [`gmail`, `slack`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.dataScience.triageRequests.title`,
          defaultMessage: `Triage analysis requests`,
          description: `Short home prompt title for data science role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.dataScience.triageRequests.prompt`,
          defaultMessage: `Use Gmail, Slack, or my uploaded notes to triage data science requests for an area I choose. Rank them by business impact, urgency, data availability, ambiguity, and recommended priority.`,
          description: `Long home prompt for data science analysis request triage`,
        }),
      },
    ],
    design: [
      {
        appIds: [`figma`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.design.critiqueDesign.title`,
          defaultMessage: `Critique a design`,
          description: `Short home prompt title for design role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.design.critiqueDesign.prompt`,
          defaultMessage: `Use Figma or my uploaded screenshot/prototype to critique a design, flow, or screen I choose. Review hierarchy, interaction clarity, accessibility, edge cases, and product goal alignment, then suggest 5 improvements.`,
          description: `Long home prompt for design critique`,
        }),
      },
      {
        appIds: [`slack`, `gmail`, `figma`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.design.synthesizeFeedback.title`,
          defaultMessage: `Synthesize design feedback`,
          description: `Short home prompt title for design role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.design.synthesizeFeedback.prompt`,
          defaultMessage: `Use Slack, Gmail, Figma, or my uploaded feedback to synthesize feedback for a design project I choose. Group themes, identify contradictions, recommend what to accept or push back on, and draft an alignment reply.`,
          description: `Long home prompt for design feedback synthesis`,
        }),
      },
      {
        appIds: [`google-drive`, `figma`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.design.reviewSpec.title`,
          defaultMessage: `Review spec to design`,
          description: `Short home prompt title for design role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.design.reviewSpec.prompt`,
          defaultMessage: `Use Google Drive, Figma, or my uploaded spec/design to compare a product spec with the design. Identify mismatches, missing states, UX risks, and decisions needed before handoff.`,
          description: `Long home prompt for design spec review`,
        }),
      },
    ],
    student: [
      {
        appIds: [`google-calendar`, `gmail`, `google-drive`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.student.studyPlan.title`,
          defaultMessage: `Build a study plan`,
          description: `Short home prompt title for student role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.student.studyPlan.prompt`,
          defaultMessage: `Use Google Calendar, Gmail, Google Drive, or my uploaded syllabus/notes to build a study plan for a class, exam, assignment, or paper I choose. If missing, ask which one. Include deadlines, priorities, and daily next steps.`,
          description: `Long home prompt for student study planning`,
        }),
      },
      {
        appIds: [`github`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.student.debugAssignment.title`,
          defaultMessage: `Debug my assignment`,
          description: `Short home prompt title for student role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.student.debugAssignment.prompt`,
          defaultMessage: `Use GitHub or my uploaded code/course materials to help debug a coding assignment or project. Explain the issue in plain English, suggest a fix path, and list what to test.`,
          description: `Long home prompt for student assignment debugging`,
        }),
      },
      {
        appIds: [`gmail`, `google-drive`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.student.summarizeMaterials.title`,
          defaultMessage: `Summarize class materials`,
          description: `Short home prompt title for student role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.student.summarizeMaterials.prompt`,
          defaultMessage: `Use Gmail, Google Drive, or my uploaded lecture notes/readings to summarize a class topic I choose. Pull out key concepts, deadlines, assignments, and what I should study next.`,
          description: `Long home prompt for student material summary`,
        }),
      },
    ],
    something_else: [
      {
        appIds: [`slack`, `gmail`, `google-drive`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.other.summarizeUpdates.title`,
          defaultMessage: `Summarize updates`,
          description: `Short home prompt title for other role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.other.summarizeUpdates.prompt`,
          defaultMessage: `Summarize updates across Slack, Gmail, and docs, then draft a to-do list for me`,
          description: `Long home prompt for summarizing updates`,
        }),
      },
      {
        appIds: [`gmail`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.other.draftFollowUps.title`,
          defaultMessage: `Draft follow-ups`,
          description: `Short home prompt title for other role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.other.draftFollowUps.prompt`,
          defaultMessage: `Review recent unread Gmail messages and draft personalized follow-ups`,
          description: `Long home prompt for drafting follow-ups`,
        }),
      },
      {
        appIds: [`google-calendar`, `gmail`, `google-drive`, `slack`],
        titleMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.other.prepMeetings.title`,
          defaultMessage: `Prep for meetings`,
          description: `Short home prompt title for other role onboarding`,
        }),
        promptMessage: d({
          id: `electron.onboarding.welcomeV2.roleCopy.other.prepMeetings.prompt`,
          defaultMessage: `Prep me for today's meetings using Google Calendar, Gmail, Google Drive, and Slack: context, agenda items, and key decisions`,
          description: `Long home prompt for meeting prep`,
        }),
      },
    ],
  };
function R(e) {
  return e === `default` ? `engineering` : e in L ? e : `something_else`;
}
function z(e) {
  let t = e.length > 0 ? e : [`something_else`];
  return Array.from(new Set(t.map(R)));
}
function Re({ roles: e }) {
  return {
    connectAppsRowMessage: Le,
    role: R(e[0] ?? `something_else`),
    suggestionPrompts: B({ roles: e, promptsByRole: L }),
  };
}
function B({ roles: e, promptsByRole: t, limit: n = I }) {
  let r = z(e).map((e) => t[e]),
    i = r.map(() => 0),
    a = [],
    o = new Set();
  for (let [e, t] of r.entries()) {
    let r = t[i[e]];
    if (
      ((i[e] += 1), !(!r || o.has(r)) && (o.add(r), a.push(r), a.length >= n))
    )
      return a;
  }
  for (; a.length < n; ) {
    let e = !1;
    for (let t = 0; t < r.length; t += 1) {
      let s = r[t][i[t]];
      if (
        ((i[t] += 1),
        !(!s || o.has(s)) && (o.add(s), a.push(s), (e = !0), a.length >= n))
      )
        break;
    }
    if (!e) break;
  }
  return a;
}
function ze({ sourceId: e, prompts: t }) {
  return t.slice(0, 3).map(({ appIds: t, prompt: n, title: r }, i) => ({
    id: `welcome-v2-role-${e}-${i + 1}`,
    title: r,
    description: r,
    prompt: n,
    appIds: t ?? [],
    status: `pending`,
    createdAtMs: 0,
    updatedAtMs: 0,
    analyticsType: `onboarding_starter`,
    homeAction: { type: `fill-composer` },
    showTooltip: !1,
    source: `default`,
  }));
}
function Be(e) {
  let t = (0, P.c)(10),
    { enabled: n } = e,
    r = f(),
    i = a(he),
    o = i.roles.length > 0 || i.workMode != null;
  if (!n || !o) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { connectAppsRowLabel: null, suggestions: [] }), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let s, c;
  if (t[1] !== r || t[2] !== i.roles) {
    let e = Re({ roles: i.roles });
    s = r.formatMessage(e.connectAppsRowMessage);
    let n;
    (t[5] === r
      ? (n = t[6])
      : ((n = (e) => ({
          appIds: e.appIds,
          prompt: r.formatMessage(e.promptMessage),
          title: r.formatMessage(e.titleMessage),
        })),
        (t[5] = r),
        (t[6] = n)),
      (c = ze({ sourceId: e.role, prompts: e.suggestionPrompts.map(n) })),
      (t[1] = r),
      (t[2] = i.roles),
      (t[3] = s),
      (t[4] = c));
  } else ((s = t[3]), (c = t[4]));
  let l;
  return (
    t[7] !== s || t[8] !== c
      ? ((l = { connectAppsRowLabel: s, suggestions: c }),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
var V = d({
    id: `electron.onboarding.pluginSuggestions.common.connectMessaging.title`,
    defaultMessage: `Connect messaging`,
    description: `Role-based plugin suggestion card title for connecting a messaging app`,
  }),
  H = d({
    id: `electron.onboarding.pluginSuggestions.common.connectMessages.title`,
    defaultMessage: `Connect messages`,
    description: `Role-based plugin suggestion card title for connecting a messaging app`,
  }),
  U = d({
    id: `electron.onboarding.pluginSuggestions.common.connectEmail.title`,
    defaultMessage: `Connect email`,
    description: `Role-based plugin suggestion card title for connecting an email app`,
  }),
  W = d({
    id: `electron.onboarding.pluginSuggestions.common.connectFiles.title`,
    defaultMessage: `Connect files`,
    description: `Role-based plugin suggestion card title for connecting a file storage app`,
  }),
  G = d({
    id: `electron.onboarding.pluginSuggestions.common.connectCalendar.title`,
    defaultMessage: `Connect calendar`,
    description: `Role-based plugin suggestion card title for connecting a calendar app`,
  }),
  Ve = [
    {
      mailProvider: `google`,
      pluginName: `slack`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.slack.subtext`,
        defaultMessage: `Catch up on engineering threads`,
        description: `Role-based plugin suggestion card subtext for engineers`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.slack.starterPrompt`,
        defaultMessage: `Use Slack to catch me up on engineering discussions needing attention`,
        description: `Prompt to prefill after connecting Slack from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `teams`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.teams.subtext`,
        defaultMessage: `Catch up on engineering threads`,
        description: `Role-based plugin suggestion card subtext for engineers`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.teams.starterPrompt`,
        defaultMessage: `Use Teams to catch me up on engineering discussions needing attention`,
        description: `Prompt to prefill after connecting Teams from the role-based plugin suggestion card`,
      }),
    },
    {
      pluginName: `github`,
      titleMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.github.title`,
        defaultMessage: `Connect GitHub`,
        description: `Role-based plugin suggestion card title for engineers`,
      }),
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.github.subtext`,
        defaultMessage: `Review PRs, code, and CI checks`,
        description: `Role-based plugin suggestion card subtext for engineers`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.github.starterPrompt`,
        defaultMessage: `Use GitHub to review my open PRs and call out risks and failing checks`,
        description: `Prompt to prefill after connecting GitHub from the role-based plugin suggestion card`,
      }),
    },
    {
      pluginName: `linear`,
      titleMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.linear.title`,
        defaultMessage: `Connect Linear`,
        description: `Role-based plugin suggestion card title for engineers`,
      }),
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.linear.subtext`,
        defaultMessage: `Track bugs and implementation work`,
        description: `Role-based plugin suggestion card subtext for engineers`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.linear.starterPrompt`,
        defaultMessage: `Use Linear to summarize my active engineering issues and what is blocked`,
        description: `Prompt to prefill after connecting Linear from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `gmail`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.gmail.subtext`,
        defaultMessage: `Monitor build alerts`,
        description: `Role-based plugin suggestion card subtext for engineers`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.gmail.starterPrompt`,
        defaultMessage: `Check my email inbox for failed builds, deploy alerts, and CI issues needing attention.`,
        description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-email`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.outlookEmail.subtext`,
        defaultMessage: `Monitor build alerts`,
        description: `Role-based plugin suggestion card subtext for engineers`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.engineering.outlookEmail.starterPrompt`,
        defaultMessage: `Check my email inbox for failed builds, deploy alerts, and CI issues needing attention.`,
        description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
      }),
    },
  ],
  K = [
    {
      pluginName: `linear`,
      titleMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.linear.title`,
        defaultMessage: `Connect Linear`,
        description: `Role-based plugin suggestion card title for product management users`,
      }),
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.linear.subtext`,
        defaultMessage: `Track product work and blockers`,
        description: `Role-based plugin suggestion card subtext for product management users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.linear.starterPrompt`,
        defaultMessage: `Use Linear to summarize active product work, blockers, and decisions`,
        description: `Prompt to prefill after connecting Linear from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `slack`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.slack.subtext`,
        defaultMessage: `Catch up on product discussions`,
        description: `Role-based plugin suggestion card subtext for product management users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.slack.starterPrompt`,
        defaultMessage: `Use Slack to summarize product feedback, decisions, and blockers`,
        description: `Prompt to prefill after connecting Slack from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `teams`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.teams.subtext`,
        defaultMessage: `Catch up on product discussions`,
        description: `Role-based plugin suggestion card subtext for product management users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.teams.starterPrompt`,
        defaultMessage: `Use Teams to summarize product feedback, decisions, and blockers`,
        description: `Prompt to prefill after connecting Teams from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-drive`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.googleDrive.subtext`,
        defaultMessage: `Review PRDs, research, and launch plans`,
        description: `Role-based plugin suggestion card subtext for product management users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.googleDrive.starterPrompt`,
        defaultMessage: `Use Google Drive to review PRDs, research, and launch plans`,
        description: `Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `sharepoint`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.sharepoint.subtext`,
        defaultMessage: `Review PRDs, research, and launch plans`,
        description: `Role-based plugin suggestion card subtext for product management users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.sharepoint.starterPrompt`,
        defaultMessage: `Use SharePoint to review PRDs, research, and launch plans`,
        description: `Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `gmail`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.gmail.subtext`,
        defaultMessage: `Summarize stakeholder requests from my inbox`,
        description: `Role-based plugin suggestion card subtext for product management users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.gmail.starterPrompt`,
        defaultMessage: `Use Gmail to summarize things in my inbox that need my attention`,
        description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-email`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.outlookEmail.subtext`,
        defaultMessage: `Summarize stakeholder requests from my inbox`,
        description: `Role-based plugin suggestion card subtext for product management users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.productManagement.outlookEmail.starterPrompt`,
        defaultMessage: `Use Outlook to summarize things in my inbox that need my attention`,
        description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
      }),
    },
  ],
  q = [
    {
      mailProvider: `google`,
      pluginName: `slack`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.slack.subtext`,
        defaultMessage: `Catch up on finance planning threads`,
        description: `Role-based plugin suggestion card subtext for finance users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.slack.starterPrompt`,
        defaultMessage: `Use Slack to summarize recent finance decisions, asks, and owners`,
        description: `Prompt to prefill after connecting Slack from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `teams`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.teams.subtext`,
        defaultMessage: `Catch up on finance planning threads`,
        description: `Role-based plugin suggestion card subtext for finance users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.teams.starterPrompt`,
        defaultMessage: `Use Teams to summarize recent finance decisions, asks, and owners`,
        description: `Prompt to prefill after connecting Teams from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `gmail`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.gmail.subtext`,
        defaultMessage: `Summarize budget and approval asks`,
        description: `Role-based plugin suggestion card subtext for finance users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.gmail.starterPrompt`,
        defaultMessage: `Use Gmail to pull out finance asks and approvals from my inbox`,
        description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-email`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.outlookEmail.subtext`,
        defaultMessage: `Summarize budget and approval asks`,
        description: `Role-based plugin suggestion card subtext for finance users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.outlookEmail.starterPrompt`,
        defaultMessage: `Use Outlook Email to pull out finance asks and approvals from my inbox`,
        description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-drive`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.googleDrive.subtext`,
        defaultMessage: `Review results, models, and plans`,
        description: `Role-based plugin suggestion card subtext for finance users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.googleDrive.starterPrompt`,
        defaultMessage: `Use Google Drive to review the latest results and flag deltas`,
        description: `Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `sharepoint`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.sharepoint.subtext`,
        defaultMessage: `Review results, models, and plans`,
        description: `Role-based plugin suggestion card subtext for finance users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.sharepoint.starterPrompt`,
        defaultMessage: `Use SharePoint to review the latest results and flag deltas`,
        description: `Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-calendar`,
      titleMessage: G,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.googleCalendar.subtext`,
        defaultMessage: `Prep for finance meetings`,
        description: `Role-based plugin suggestion card subtext for finance users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.googleCalendar.starterPrompt`,
        defaultMessage: `Use Google Calendar to prep me for upcoming finance reviews with context and questions`,
        description: `Prompt to prefill after connecting Google Calendar from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-calendar`,
      titleMessage: G,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.outlookCalendar.subtext`,
        defaultMessage: `Prep for finance meetings`,
        description: `Role-based plugin suggestion card subtext for finance users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.finance.outlookCalendar.starterPrompt`,
        defaultMessage: `Use Outlook Calendar to prep me for upcoming finance reviews with context and questions`,
        description: `Prompt to prefill after connecting Outlook Calendar from the role-based plugin suggestion card`,
      }),
    },
  ],
  He = [
    {
      mailProvider: `google`,
      pluginName: `slack`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.slack.subtext`,
        defaultMessage: `Catch up on launch discussions in Slack`,
        description: `Role-based plugin suggestion card subtext for marketing users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.slack.starterPrompt`,
        defaultMessage: `Use Slack to summarize campaign feedback, decisions, and blockers`,
        description: `Prompt to prefill after connecting Slack from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `teams`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.teams.subtext`,
        defaultMessage: `Catch up on launch discussions in Teams`,
        description: `Role-based plugin suggestion card subtext for marketing users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.teams.starterPrompt`,
        defaultMessage: `Use Teams to summarize campaign feedback, decisions, and blockers`,
        description: `Prompt to prefill after connecting Teams from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `gmail`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.gmail.subtext`,
        defaultMessage: `Summarize campaign requests in email`,
        description: `Role-based plugin suggestion card subtext for marketing users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.gmail.starterPrompt`,
        defaultMessage: `Use Gmail to summarize partner, agency, and campaign asks`,
        description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-email`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.outlookEmail.subtext`,
        defaultMessage: `Summarize campaign requests in email`,
        description: `Role-based plugin suggestion card subtext for marketing users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.outlookEmail.starterPrompt`,
        defaultMessage: `Use Outlook Email to summarize partner, agency, and campaign asks`,
        description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-drive`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.googleDrive.subtext`,
        defaultMessage: `Review briefs and messaging docs`,
        description: `Role-based plugin suggestion card subtext for marketing users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.googleDrive.starterPrompt`,
        defaultMessage: `Use Google Drive to review campaign briefs and open questions`,
        description: `Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `sharepoint`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.sharepoint.subtext`,
        defaultMessage: `Review briefs and messaging docs`,
        description: `Role-based plugin suggestion card subtext for marketing users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.sharepoint.starterPrompt`,
        defaultMessage: `Use SharePoint to review campaign briefs and open questions`,
        description: `Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card`,
      }),
    },
    {
      pluginName: `canva`,
      titleMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.canva.title`,
        defaultMessage: `Connect Canva`,
        description: `Role-based plugin suggestion card title for marketing users`,
      }),
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.canva.subtext`,
        defaultMessage: `Create and refine launch assets`,
        description: `Role-based plugin suggestion card subtext for marketing users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.marketing.canva.starterPrompt`,
        defaultMessage: `Use Canva to draft launch asset concepts from the campaign brief`,
        description: `Prompt to prefill after connecting Canva from the role-based plugin suggestion card`,
      }),
    },
  ],
  J = [
    {
      mailProvider: `google`,
      pluginName: `gmail`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.gmail.subtext`,
        defaultMessage: `Reply to prospects and customers`,
        description: `Role-based plugin suggestion card subtext for sales users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.gmail.starterPrompt`,
        defaultMessage: `Use Gmail to draft follow-ups for my highest-priority prospects`,
        description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-email`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.outlookEmail.subtext`,
        defaultMessage: `Reply to prospects and customers`,
        description: `Role-based plugin suggestion card subtext for sales users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.outlookEmail.starterPrompt`,
        defaultMessage: `Use Outlook Email to draft follow-ups for my highest-priority prospects`,
        description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-calendar`,
      titleMessage: G,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.googleCalendar.subtext`,
        defaultMessage: `Prep for customer meetings`,
        description: `Role-based plugin suggestion card subtext for sales users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.googleCalendar.starterPrompt`,
        defaultMessage: `Use Google Calendar to prep me for upcoming customer calls with context and talk tracks`,
        description: `Prompt to prefill after connecting Google Calendar from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-calendar`,
      titleMessage: G,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.outlookCalendar.subtext`,
        defaultMessage: `Prep for customer meetings`,
        description: `Role-based plugin suggestion card subtext for sales users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.outlookCalendar.starterPrompt`,
        defaultMessage: `Use Outlook Calendar to prep me for upcoming customer calls with context and talk tracks`,
        description: `Prompt to prefill after connecting Outlook Calendar from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-drive`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.googleDrive.subtext`,
        defaultMessage: `Review account plans and decks`,
        description: `Role-based plugin suggestion card subtext for sales users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.googleDrive.starterPrompt`,
        defaultMessage: `Use Google Drive to review account plans and key materials`,
        description: `Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `sharepoint`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.sharepoint.subtext`,
        defaultMessage: `Review account plans and decks`,
        description: `Role-based plugin suggestion card subtext for sales users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.sharepoint.starterPrompt`,
        defaultMessage: `Use SharePoint to review account plans and key materials`,
        description: `Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `slack`,
      titleMessage: H,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.slack.subtext`,
        defaultMessage: `Catch up on deal discussions`,
        description: `Role-based plugin suggestion card subtext for sales users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.slack.starterPrompt`,
        defaultMessage: `Use Slack to summarize account threads and deal risks`,
        description: `Prompt to prefill after connecting Slack from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `teams`,
      titleMessage: H,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.teams.subtext`,
        defaultMessage: `Catch up on deal discussions`,
        description: `Role-based plugin suggestion card subtext for sales users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.sales.teams.starterPrompt`,
        defaultMessage: `Use Teams to summarize account threads and deal risks`,
        description: `Prompt to prefill after connecting Teams from the role-based plugin suggestion card`,
      }),
    },
  ],
  Ue = [
    {
      mailProvider: `google`,
      pluginName: `slack`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.slack.subtext`,
        defaultMessage: `Track decisions and blockers from messaging`,
        description: `Role-based plugin suggestion card subtext for operations users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.slack.starterPrompt`,
        defaultMessage: `Use Slack to summarize cross-functional decisions, blockers, and owners`,
        description: `Prompt to prefill after connecting Slack from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `teams`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.teams.subtext`,
        defaultMessage: `Track decisions and blockers from messaging`,
        description: `Role-based plugin suggestion card subtext for operations users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.teams.starterPrompt`,
        defaultMessage: `Use Teams to summarize cross-functional decisions, blockers, and owners`,
        description: `Prompt to prefill after connecting Teams from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-calendar`,
      titleMessage: G,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.googleCalendar.subtext`,
        defaultMessage: `Prep for upcoming operating reviews`,
        description: `Role-based plugin suggestion card subtext for operations users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.googleCalendar.starterPrompt`,
        defaultMessage: `Use Google Calendar to prep me for planning meetings and operating reviews`,
        description: `Prompt to prefill after connecting Google Calendar from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-calendar`,
      titleMessage: G,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.outlookCalendar.subtext`,
        defaultMessage: `Prep for upcoming operating reviews`,
        description: `Role-based plugin suggestion card subtext for operations users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.outlookCalendar.starterPrompt`,
        defaultMessage: `Use Outlook Calendar to prep me for planning meetings and operating reviews`,
        description: `Prompt to prefill after connecting Outlook Calendar from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-drive`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.googleDrive.subtext`,
        defaultMessage: `Review project plans`,
        description: `Role-based plugin suggestion card subtext for operations users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.googleDrive.starterPrompt`,
        defaultMessage: `Use Google Drive to review project plans and surface risks`,
        description: `Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `sharepoint`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.sharepoint.subtext`,
        defaultMessage: `Review project plans`,
        description: `Role-based plugin suggestion card subtext for operations users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.sharepoint.starterPrompt`,
        defaultMessage: `Use SharePoint to review project plans and surface risks`,
        description: `Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `gmail`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.gmail.subtext`,
        defaultMessage: `Summarize stakeholder asks from email`,
        description: `Role-based plugin suggestion card subtext for operations users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.gmail.starterPrompt`,
        defaultMessage: `Use Gmail to summarize exec and stakeholder requests`,
        description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-email`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.outlookEmail.subtext`,
        defaultMessage: `Summarize stakeholder asks from email`,
        description: `Role-based plugin suggestion card subtext for operations users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.operations.outlookEmail.starterPrompt`,
        defaultMessage: `Use Outlook Email to summarize exec and stakeholder requests`,
        description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
      }),
    },
  ],
  We = [
    {
      pluginName: `github`,
      titleMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.github.title`,
        defaultMessage: `Connect GitHub`,
        description: `Role-based plugin suggestion card title for data science users`,
      }),
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.github.subtext`,
        defaultMessage: `Inspect notebooks, models, and pipelines`,
        description: `Role-based plugin suggestion card subtext for data science users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.github.starterPrompt`,
        defaultMessage: `Use GitHub to review recent notebook and pipeline changes and explain what changed`,
        description: `Prompt to prefill after connecting GitHub from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `gmail`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.gmail.subtext`,
        defaultMessage: `Summarize analysis requests`,
        description: `Role-based plugin suggestion card subtext for data science users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.gmail.starterPrompt`,
        defaultMessage: `Use Gmail to summarize data requests from my inbox`,
        description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-email`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.outlookEmail.subtext`,
        defaultMessage: `Summarize analysis requests`,
        description: `Role-based plugin suggestion card subtext for data science users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.outlookEmail.starterPrompt`,
        defaultMessage: `Use Outlook Email to summarize data requests from my inbox`,
        description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-drive`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.googleDrive.subtext`,
        defaultMessage: `Review experiments and readouts`,
        description: `Role-based plugin suggestion card subtext for data science users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.googleDrive.starterPrompt`,
        defaultMessage: `Use Google Drive to review experiment docs and metric definitions`,
        description: `Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `sharepoint`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.sharepoint.subtext`,
        defaultMessage: `Review experiments and readouts`,
        description: `Role-based plugin suggestion card subtext for data science users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.sharepoint.starterPrompt`,
        defaultMessage: `Use SharePoint to review experiment docs and metric definitions`,
        description: `Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `slack`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.slack.subtext`,
        defaultMessage: `Catch up on metric questions`,
        description: `Role-based plugin suggestion card subtext for data science users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.slack.starterPrompt`,
        defaultMessage: `Use Slack to summarize metric discussions and open analysis asks`,
        description: `Prompt to prefill after connecting Slack from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `teams`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.teams.subtext`,
        defaultMessage: `Catch up on metric questions`,
        description: `Role-based plugin suggestion card subtext for data science users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.dataScience.teams.starterPrompt`,
        defaultMessage: `Use Teams to summarize metric discussions and open analysis asks`,
        description: `Prompt to prefill after connecting Teams from the role-based plugin suggestion card`,
      }),
    },
  ],
  Y = [
    {
      pluginName: `figma`,
      titleMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.figma.title`,
        defaultMessage: `Connect Figma`,
        description: `Role-based plugin suggestion card title for design users`,
      }),
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.figma.subtext`,
        defaultMessage: `Review designs and prototypes`,
        description: `Role-based plugin suggestion card subtext for design users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.figma.starterPrompt`,
        defaultMessage: `Use Figma to review the latest design and identify unresolved UX decisions`,
        description: `Prompt to prefill after connecting Figma from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `slack`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.slack.subtext`,
        defaultMessage: `Catch up on design feedback`,
        description: `Role-based plugin suggestion card subtext for design users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.slack.starterPrompt`,
        defaultMessage: `Use Slack to summarize design feedback and decisions`,
        description: `Prompt to prefill after connecting Slack from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `teams`,
      titleMessage: V,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.teams.subtext`,
        defaultMessage: `Catch up on design feedback`,
        description: `Role-based plugin suggestion card subtext for design users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.teams.starterPrompt`,
        defaultMessage: `Use Teams to summarize design feedback and decisions`,
        description: `Prompt to prefill after connecting Teams from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-drive`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.googleDrive.subtext`,
        defaultMessage: `Review specs, briefs, and research`,
        description: `Role-based plugin suggestion card subtext for design users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.googleDrive.starterPrompt`,
        defaultMessage: `Use Google Drive to review specs and research notes`,
        description: `Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `sharepoint`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.sharepoint.subtext`,
        defaultMessage: `Review specs, briefs, and research`,
        description: `Role-based plugin suggestion card subtext for design users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.sharepoint.starterPrompt`,
        defaultMessage: `Use SharePoint to review specs and research notes`,
        description: `Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `gmail`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.gmail.subtext`,
        defaultMessage: `Summarize stakeholder feedback`,
        description: `Role-based plugin suggestion card subtext for design users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.gmail.starterPrompt`,
        defaultMessage: `Use Gmail to summarize design feedback and requests from my inbox`,
        description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-email`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.outlookEmail.subtext`,
        defaultMessage: `Summarize stakeholder feedback`,
        description: `Role-based plugin suggestion card subtext for design users`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.design.outlookEmail.starterPrompt`,
        defaultMessage: `Use Outlook Email to summarize design feedback and requests from my inbox`,
        description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
      }),
    },
  ],
  X = [
    {
      pluginName: `github`,
      titleMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.github.title`,
        defaultMessage: `Connect GitHub`,
        description: `Role-based plugin suggestion card title for students`,
      }),
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.github.subtext`,
        defaultMessage: `Debug code and projects`,
        description: `Role-based plugin suggestion card subtext for students`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.github.starterPrompt`,
        defaultMessage: `Use GitHub to debug my project and explain the fix in plain English`,
        description: `Prompt to prefill after connecting GitHub from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `gmail`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.gmail.subtext`,
        defaultMessage: `Summarize updates for classes from email`,
        description: `Role-based plugin suggestion card subtext for students`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.gmail.starterPrompt`,
        defaultMessage: `Use Gmail to summarize class emails and deadlines for this week`,
        description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-email`,
      titleMessage: U,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.outlookEmail.subtext`,
        defaultMessage: `Summarize updates for classes from email`,
        description: `Role-based plugin suggestion card subtext for students`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.outlookEmail.starterPrompt`,
        defaultMessage: `Use Outlook Email to summarize class emails and deadlines for this week`,
        description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-drive`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.googleDrive.subtext`,
        defaultMessage: `Review notes, readings, and papers`,
        description: `Role-based plugin suggestion card subtext for students`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.googleDrive.starterPrompt`,
        defaultMessage: `Use Google Drive to summarize lecture notes and study materials for a topic`,
        description: `Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `sharepoint`,
      titleMessage: W,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.sharepoint.subtext`,
        defaultMessage: `Review notes, readings, and papers`,
        description: `Role-based plugin suggestion card subtext for students`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.sharepoint.starterPrompt`,
        defaultMessage: `Use SharePoint to summarize lecture notes and study materials for a topic`,
        description: `Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `google`,
      pluginName: `google-calendar`,
      titleMessage: G,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.googleCalendar.subtext`,
        defaultMessage: `Track due dates and study blocks`,
        description: `Role-based plugin suggestion card subtext for students`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.googleCalendar.starterPrompt`,
        defaultMessage: `Use Google Calendar to build a plan around upcoming deadlines and exams`,
        description: `Prompt to prefill after connecting Google Calendar from the role-based plugin suggestion card`,
      }),
    },
    {
      mailProvider: `microsoft`,
      pluginName: `outlook-calendar`,
      titleMessage: G,
      subtextMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.outlookCalendar.subtext`,
        defaultMessage: `Track due dates and study blocks`,
        description: `Role-based plugin suggestion card subtext for students`,
      }),
      starterPromptMessage: d({
        id: `electron.onboarding.pluginSuggestions.student.outlookCalendar.starterPrompt`,
        defaultMessage: `Use Outlook Calendar to build a plan around upcoming deadlines and exams`,
        description: `Prompt to prefill after connecting Outlook Calendar from the role-based plugin suggestion card`,
      }),
    },
  ],
  Ge = {
    data_science: We,
    default: Ve,
    design: Y,
    engineering: Ve,
    finance: q,
    marketing: He,
    operations: Ue,
    product_management: K,
    sales: J,
    something_else: [
      {
        mailProvider: `google`,
        pluginName: `slack`,
        titleMessage: V,
        subtextMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.slack.subtext`,
          defaultMessage: `Get context from recent team discussions`,
          description: `Role-based plugin suggestion card subtext for users selecting something else`,
        }),
        starterPromptMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.slack.starterPrompt`,
          defaultMessage: `Use Slack to catch me up on recent decisions and open questions`,
          description: `Prompt to prefill after connecting Slack from the role-based plugin suggestion card`,
        }),
      },
      {
        mailProvider: `microsoft`,
        pluginName: `teams`,
        titleMessage: V,
        subtextMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.teams.subtext`,
          defaultMessage: `Get context from recent team discussions`,
          description: `Role-based plugin suggestion card subtext for users selecting something else`,
        }),
        starterPromptMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.teams.starterPrompt`,
          defaultMessage: `Use Teams to catch me up on recent decisions and open questions`,
          description: `Prompt to prefill after connecting Teams from the role-based plugin suggestion card`,
        }),
      },
      {
        mailProvider: `google`,
        pluginName: `gmail`,
        titleMessage: U,
        subtextMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.gmail.subtext`,
          defaultMessage: `Summarize stakeholder asks from email`,
          description: `Role-based plugin suggestion card subtext for users selecting something else`,
        }),
        starterPromptMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.gmail.starterPrompt`,
          defaultMessage: `Use Gmail to summarize exec and stakeholder requests`,
          description: `Prompt to prefill after connecting Gmail from the role-based plugin suggestion card`,
        }),
      },
      {
        mailProvider: `microsoft`,
        pluginName: `outlook-email`,
        titleMessage: U,
        subtextMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.outlookEmail.subtext`,
          defaultMessage: `Summarize stakeholder asks from email`,
          description: `Role-based plugin suggestion card subtext for users selecting something else`,
        }),
        starterPromptMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.outlookEmail.starterPrompt`,
          defaultMessage: `Use Outlook Email to summarize exec and stakeholder requests`,
          description: `Prompt to prefill after connecting Outlook Email from the role-based plugin suggestion card`,
        }),
      },
      {
        mailProvider: `google`,
        pluginName: `google-drive`,
        titleMessage: W,
        subtextMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.googleDrive.subtext`,
          defaultMessage: `Review results, research, and plans`,
          description: `Role-based plugin suggestion card subtext for users selecting something else`,
        }),
        starterPromptMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.googleDrive.starterPrompt`,
          defaultMessage: `Use Google Drive to review the latest results and research, and flag opportunities`,
          description: `Prompt to prefill after connecting Google Drive from the role-based plugin suggestion card`,
        }),
      },
      {
        mailProvider: `microsoft`,
        pluginName: `sharepoint`,
        titleMessage: W,
        subtextMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.sharepoint.subtext`,
          defaultMessage: `Review results, research, and plans`,
          description: `Role-based plugin suggestion card subtext for users selecting something else`,
        }),
        starterPromptMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.sharepoint.starterPrompt`,
          defaultMessage: `Use SharePoint to review the latest results and research, and flag opportunities`,
          description: `Prompt to prefill after connecting SharePoint from the role-based plugin suggestion card`,
        }),
      },
      {
        mailProvider: `google`,
        pluginName: `google-calendar`,
        titleMessage: G,
        subtextMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.googleCalendar.subtext`,
          defaultMessage: `Prep for upcoming meetings`,
          description: `Role-based plugin suggestion card subtext for users selecting something else`,
        }),
        starterPromptMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.googleCalendar.starterPrompt`,
          defaultMessage: `Use Google Calendar to prep me for planning meetings and project reviews`,
          description: `Prompt to prefill after connecting Google Calendar from the role-based plugin suggestion card`,
        }),
      },
      {
        mailProvider: `microsoft`,
        pluginName: `outlook-calendar`,
        titleMessage: G,
        subtextMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.outlookCalendar.subtext`,
          defaultMessage: `Prep for upcoming meetings`,
          description: `Role-based plugin suggestion card subtext for users selecting something else`,
        }),
        starterPromptMessage: d({
          id: `electron.onboarding.pluginSuggestions.somethingElse.outlookCalendar.starterPrompt`,
          defaultMessage: `Use Outlook Calendar to prep me for planning meetings and project reviews`,
          description: `Prompt to prefill after connecting Outlook Calendar from the role-based plugin suggestion card`,
        }),
      },
    ],
    student: X,
  };
function Ke({
  intl: e,
  mailProvider: t,
  plan: n = null,
  plugins: r = [],
  roles: i,
}) {
  let a = i[0] ?? `something_else`,
    o = t === `other` ? (Se(n) ? `microsoft` : `google`) : t;
  return Ge[a].flatMap((t) => {
    let n = r.find((e) => e.plugin.name === t.pluginName);
    return n == null || (t.mailProvider != null && t.mailProvider !== o)
      ? []
      : [
          {
            id: `onboarding-plugin-${a}-${t.pluginName}`,
            title: e.formatMessage(t.titleMessage),
            description: e.formatMessage(t.subtextMessage),
            prompt: e.formatMessage(t.starterPromptMessage),
            appIds: [t.pluginName],
            status: `pending`,
            createdAtMs: 0,
            updatedAtMs: 0,
            analyticsType: `onboarding_starter`,
            homeAction: { type: `connect-plugin-onboarding`, plugin: n },
            showTooltip: !0,
            source: `default`,
          },
        ];
  });
}
function qe(e) {
  let t = new Map();
  for (let n of e) {
    let e = [n.id, Z(n.id), Z(n.name), ...(n.pluginDisplayNames ?? []).map(Z)];
    n.id.startsWith(`connector_`) && e.push(Z(n.id.slice(10)));
    for (let r of e) r.length > 0 && !t.has(r) && t.set(r, n);
  }
  return t;
}
var Je = u(p, (e, { get: t }) => {
  let n = t(re, e).data;
  return n == null ? void 0 : qe(n);
});
function Ye(e, t) {
  let n = new Set();
  for (let r of t) {
    let t = e.get(r) ?? e.get(Z(r));
    t != null && n.add(t);
  }
  return Array.from(n);
}
function Xe(e) {
  let t = (0, P.c)(8),
    { appIds: n, enabled: r, hostId: i } = e,
    a = r === void 0 ? !0 : r,
    o = i ?? `local`,
    s = ee(),
    c;
  t[0] === o ? (c = t[1]) : ((c = { hostId: o }), (t[0] = o), (t[1] = c));
  let l = ne(c),
    u = a && l && !s.isLoading && s.userId != null,
    d;
  t[2] !== o || t[3] !== u
    ? ((d = { hostId: o, isQueryEnabled: u }),
      (t[2] = o),
      (t[3] = u),
      (t[4] = d))
    : (d = t[4]);
  let f = g(Je, d);
  if (f == null) return;
  let p;
  return (
    t[5] !== f || t[6] !== n
      ? ((p = Ye(f, n)), (t[5] = f), (t[6] = n), (t[7] = p))
      : (p = t[7]),
    p
  );
}
function Ze(e) {
  for (let t of e) return C(t) == null;
  return !1;
}
function Z(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`);
}
var Qe = 0,
  $e = `life-science-research`,
  et = `ncbi-blast-skill`,
  tt = new Set([
    `gpt-rosalind`,
    `gpt-rosalind-preview`,
    `heisenberg`,
    `life-sciences`,
  ]),
  nt = `BLAST this protein sequence and return the top hits MQIFVKTLTGKTITLEVEPSDTIENVKAKIQDKEGIPPDQQRLIFAGKQLEDGRTLSDYNIQKESTLHLVLRLRGG`,
  rt = [
    `Evaluate whether LRRK2 is a credible therapeutic target for Parkinson's disease.`,
    ``,
    `Spawn parallel subagents and treat each as an independent evidence lane. At minimum, create subagents for:`,
    `1. Human genetics - causal evidence, GWAS, rare variants, locus-to-gene`,
    `2. Disease biology - mechanism fit and pathway relevance`,
    `3. Expression context - tissue, cell type, disease-relevant expression`,
    `4. Direction of effect - whether inhibition or activation is supported`,
    `5. Safety / tolerability| - constraint, essentiality, on-target risk`,
    `6. Tractability - modality fit, structure, druggability`,
    `7. Clinical landscape - prior programs, competition, biomarker strategy`,
    ``,
    `Return:`,
    `- a short executive verdict: Prioritize / Conditional / Deprioritize`,
    `- a pillar-by-pillar scorecard with confidence and key caveats`,
    `- an overall target validation score`,
    `- the top risks / contradictions`,
    `- the most important next experiment or analysis`,
    ``,
    `Be skeptical, concise, and explicit about uncertainty. Separate causal evidence, mechanistic plausibility, and therapeutic actionability.`,
  ].join(`
`),
  it = [
    `You are a translational assay scientist optimizing a drug-discovery assay that is giving mixed or unstable results.`,
    ``,
    `The assay is a 96-well Ba/F3-EGFR cellular phospho-ERK luminescence inhibition assay with CMPD-327. Your job is to separate likely technical noise from real biology, recommend the smallest protocol changes that materially improve signal and reproducibility, and generate a compact, presentation-ready output.`,
    ``,
    `Generate local artifacts in the current working directory, including at minimum:`,
    ``,
    "1. `plate_qc_overview.png`",
    "   - a plate QC overview with clear `accept`, `salvage`, or `reject` labeling",
    `   - thresholds or annotations explaining why each plate was classified that way`,
    ``,
    "2. `dose_response_curves.png`",
    `   - dose-response curves for each variant`,
    `   - per-well or per-replicate points shown`,
    `   - included vs excluded wells clearly distinguished`,
    `   - control-normalized fitting`,
    `   - if a curve is not bracketed, label it clearly instead of forcing a precise IC50`,
    ``,
    `Also generate:`,
    `- a short optimization memo`,
    `- a small summary table of plate decisions`,
    `- a compact explanation of which wells were excluded and why`,
    `- any code needed to reproduce the figures`,
    ``,
    `Analysis Rules`,
    ``,
    `- Reconstruct well-level sample positions from the embedded payload.`,
    "- `layout.doses_nM` gives the dose order.",
    "- `layout.replicate_1_columns` and `layout.replicate_2_columns` map the two technical replicates to plate columns.",
    "- `layout.row_to_variant` maps plate rows to variants.",
    "- Edge wells are columns `1` and `12`.",
    "- For each plate and variant, `samples[variant]` contains:",
    "  - first array = replicate 1 net RLU values ordered by `doses_nM`",
    "  - second array = replicate 2 net RLU values ordered by `doses_nM`",
    "- `issue_tags` are hints about likely technical artifacts, not the final answer.",
    `- Use the provided plate QC table for overview and cross-checks, but derive the dose-response analysis from the reconstructed plate data and controls.`,
    `- Prefer the smallest protocol changes that address the dominant failure modes.`,
    ``,
    `Embedded Data`,
    ``,
    "```json",
    JSON.stringify(
      {
        assay: `96-well Ba/F3-EGFR cellular phospho-ERK luminescence inhibition assay with CMPD-327`,
        minimal_metadata: {
          incubation_hours: 20,
          plate_seal: `none`,
          dispense_method: `manual multichannel`,
          edge_wells_used: !0,
        },
        layout: {
          doses_nM: [3, 10, 30, 100, 300, 1e3],
          replicate_1_columns: [1, 2, 3, 4, 5, 6],
          replicate_2_columns: [7, 8, 9, 10, 11, 12],
          row_to_variant: {
            B: `EGFR_WT`,
            C: `EGFR_L858R`,
            D: `EGFR_T790M`,
            E: `EGFR_C797S`,
            F: `EGFR_T790M_C797S`,
            G: `EGFR_G796D`,
          },
          edge_columns: [1, 12],
        },
        plate_qc: [
          {
            plate_id: `P1`,
            z_prime: 0.717,
            dmso_cv_pct: 7.2,
            high_ctrl_cv_pct: 7.2,
            blank_mean_net_rlu: 695,
            matched_edge_bias_pct: 3.6,
            matched_column12_bias_pct: -0.6,
            mean_replicate_cv_pct: 4.7,
          },
          {
            plate_id: `P2`,
            z_prime: 0.165,
            dmso_cv_pct: 18.7,
            high_ctrl_cv_pct: 24.9,
            blank_mean_net_rlu: 688.2,
            matched_edge_bias_pct: 22.9,
            matched_column12_bias_pct: 25.2,
            mean_replicate_cv_pct: 9.6,
          },
          {
            plate_id: `P3`,
            z_prime: 0.537,
            dmso_cv_pct: 11.8,
            high_ctrl_cv_pct: 11.2,
            blank_mean_net_rlu: 1247.2,
            matched_edge_bias_pct: 18,
            matched_column12_bias_pct: 24.5,
            mean_replicate_cv_pct: 6.9,
          },
        ],
        operator_notes: [
          `Plate P2 sat on the bench slightly longer than intended before incubation.`,
          `Controls were concentrated on the plate edges for convenience.`,
          `A few wells on the far-right side of Plate P3 looked bubbly after dispense.`,
          `No adhesive seal was used during incubation.`,
          `The team reported that the assay worked overall, but plate-to-plate potency estimates felt unstable.`,
        ],
        plates: {
          P1: {
            controls: {
              dmso: [
                41017.09, 43330.81, 41105.2, 41429.35, 35220.52, 44887.32,
                39000.94, 39128.58,
              ],
              high: [
                4623.54, 5664.08, 5496.58, 5204.96, 5267.91, 5603.54, 5214.81,
                5881.64,
              ],
              blank: [
                737.12, 661.46, 721.15, 631.41, 664.53, 747.34, 654.22, 742.77,
              ],
            },
            samples: {
              EGFR_C797S: [
                [41590.79, 40553.03, 41739.13, 34010.45, 31512.27, 21531.92],
                [41614.15, 40901.71, 41567.31, 40977.12, 29653.66, 19688.35],
              ],
              EGFR_G796D: [
                [53857.13, 41733.49, 39495.48, 34260.84, 29643.7, 20607.23],
                [40493.83, 40806.44, 42736.9, 32553.45, 27329.13, 20182.03],
              ],
              EGFR_L858R: [
                [43988.38, 38715.75, 27797.69, 15901.74, 8418.65, 6667.54],
                [42580.36, 41604.11, 34354.3, 13803.6, 9051.5, 6790.57],
              ],
              EGFR_T790M: [
                [37463.25, 38803.2, 38067.8, 32387.95, 22040.1, 12656.06],
                [39782.46, 40883.04, 37980.98, 31754.39, 21218.54, 12974.49],
              ],
              EGFR_T790M_C797S: [
                [48038.04, 41774.41, 41114.25, 40758.59, 38480.96, 31834.89],
                [45281.86, 41967.02, 48258.96, 39564.83, 36502.14, 35022.91],
              ],
              EGFR_WT: [
                [42876.82, 34480.13, 28111.53, 16843.69, 9983.17, 6811.41],
                [38874.4, 33162.82, 31014.36, 16394.41, 10115.28, 6307.75],
              ],
            },
          },
          P2: {
            controls: {
              dmso: [
                48418.99, 64590.46, 35278.71, 41390.47, 46064.47, 47572.78,
                55895.87, 55889.24,
              ],
              high: [
                10716.22, 10788.41, 7053.48, 7972.23, 5389.3, 11330.28, 8318.82,
                7152.18,
              ],
              blank: [
                721.5, 771.13, 659.86, 686.36, 669.08, 511.26, 639.52, 846.98,
              ],
            },
            samples: {
              EGFR_C797S: [
                [38574.72, 43461.38, 39128.36, 36761.35, 27852.97, 23431.67],
                [40963.35, 42436.03, 42424.25, 37080.9, 31891.8, 26102.99],
              ],
              EGFR_G796D: [
                [50231.25, 49434.18, 36723.57, 34020, 29802.1, 17980.09],
                [43053.39, 44667.21, 41914.99, 40825.26, 31838.43, 25216.01],
              ],
              EGFR_L858R: [
                [60021.09, 37634.69, 28504.02, 18910.43, 9740.18, 6760.41],
                [44291.58, 33634.08, 36257.87, 17437.72, 9742.21, 11826.52],
              ],
              EGFR_T790M: [
                [68314.34, 41230.19, 40462.34, 30385.04, 24452.28, 14006.37],
                [43268.41, 46219.03, 47079.98, 33016.57, 24660.81, 13155.44],
              ],
              EGFR_T790M_C797S: [
                [41757.58, 43150.48, 46354.72, 44522.97, 38118.19, 30115.76],
                [45284.3, 43650.54, 50205.14, 35024.61, 40422.36, 32616.33],
              ],
              EGFR_WT: [
                [48204.59, 37119, 34611.38, 17924.73, 10830.35, 7632.01],
                [38039.09, 46344.75, 31294.07, 17051.06, 10693, 9335.5],
              ],
            },
            issue_tags: {
              A1: `edge_evaporation`,
              A2: `edge_evaporation`,
              A3: `edge_evaporation`,
              A4: `edge_evaporation`,
              A5: `poor_high_control_separation`,
              A6: `poor_high_control_separation`,
              A7: `poor_high_control_separation`,
              A8: `poor_high_control_separation`,
              B1: `edge_evaporation`,
              B12: `edge_evaporation`,
              C1: `edge_evaporation`,
              C12: `edge_evaporation`,
              D1: `edge_evaporation`,
              D12: `edge_evaporation`,
              E1: `edge_evaporation`,
              E12: `edge_evaporation`,
              F1: `edge_evaporation`,
              F12: `edge_evaporation`,
              G1: `edge_evaporation`,
              G12: `edge_evaporation`,
              H1: `edge_evaporation`,
              H2: `edge_evaporation`,
              H3: `edge_evaporation`,
              H4: `edge_evaporation`,
              H5: `poor_high_control_separation`,
              H6: `poor_high_control_separation`,
              H7: `poor_high_control_separation`,
              H8: `poor_high_control_separation`,
            },
          },
          P3: {
            controls: {
              dmso: [
                33858.4, 38195.88, 38303.09, 42099.59, 46993.51, 37565.92,
                44793.34, 46928.69,
              ],
              high: [
                5301.89, 5462.17, 5424.84, 5482.29, 5952.36, 6482.39, 4480.46,
                6261.95,
              ],
              blank: [
                754.17, 748.12, 714.92, 4891.26, 791.64, 619.76, 775.49, 682.55,
              ],
            },
            samples: {
              EGFR_C797S: [
                [41957.31, 39366.72, 37922.81, 39415.34, 29183.75, 18740.25],
                [38538.26, 43838.55, 41072.36, 35808.42, 31697.34, 21736.73],
              ],
              EGFR_G796D: [
                [45479.5, 35037.2, 37989.65, 36674.59, 26748.64, 18770.23],
                [40290.5, 37767.67, 39988.87, 37050.26, 31412.13, 27192.71],
              ],
              EGFR_L858R: [
                [47788.96, 35644.59, 31172.32, 15737.21, 9075.43, 7044.8],
                [43062.55, 39469.7, 29809.57, 15233.11, 9705.58, 7115.11],
              ],
              EGFR_T790M: [
                [50168.28, 37410.08, 37818.79, 31637.46, 22773.14, 13412.42],
                [44648.59, 33479.66, 41036.7, 30558.01, 20378.58, 12105.33],
              ],
              EGFR_T790M_C797S: [
                [45229.87, 39646.31, 41546.66, 38687.5, 37753.54, 25545.69],
                [40799.43, 39841.43, 41583.87, 38148.46, 39858.74, 41118.53],
              ],
              EGFR_WT: [
                [43777.65, 36741.76, 27198.58, 15750.43, 11024.56, 6691.11],
                [38627.31, 37238.9, 26932.74, 16015.78, 9686.14, 8952.54],
              ],
            },
            issue_tags: {
              A12: `blank_contamination`,
              B12: `column12_dispense_issue;bubble_or_low_volume`,
              C12: `column12_dispense_issue`,
              D12: `column12_dispense_issue`,
              E12: `column12_dispense_issue`,
              F12: `column12_dispense_issue`,
              G12: `column12_dispense_issue`,
            },
          },
        },
      },
      null,
      2,
    ),
    "```",
  ].join(`
`);
function at(e, t) {
  return [e, t].some((e) => {
    let t = ct(e);
    return tt.has(t);
  });
}
function ot({ intl: e }) {
  return [
    st({
      id: `default-life-sciences-blast`,
      title: e.formatMessage({
        id: `home.ambientSuggestions.default.lifeSciences.blast.title`,
        defaultMessage: `BLAST a sample protein sequence and return the top hits using the NCBI BLAST skill`,
        description: `Life Sciences default ambient suggestion title`,
      }),
      prompt: nt,
      skillNameToMention: et,
    }),
    st({
      id: `default-life-sciences-lrrk2`,
      title: e.formatMessage({
        id: `home.ambientSuggestions.default.lifeSciences.lrrk2.title`,
        defaultMessage: `Assess LRRK2 as a Parkinson's target via parallel evidence lanes with subagents`,
        description: `Life Sciences default ambient suggestion title`,
      }),
      prompt: rt,
    }),
    st({
      id: `default-life-sciences-assay`,
      title: e.formatMessage({
        id: `home.ambientSuggestions.default.lifeSciences.assay.title`,
        defaultMessage: `Optimize a sample 96-well luminescence inhibition assay with CMPD-327`,
        description: `Life Sciences default ambient suggestion title`,
      }),
      prompt: it,
    }),
  ];
}
function st({ id: e, prompt: t, skillNameToMention: n, title: r }) {
  return {
    id: e,
    title: r,
    description: ``,
    prompt: t,
    appIds: [],
    status: `pending`,
    createdAtMs: Qe,
    updatedAtMs: Qe,
    homeAction: {
      type: `start-thread`,
      pluginNameToInstall: $e,
      ...(n == null ? {} : { skillNameToMention: n }),
    },
    showTooltip: !1,
    source: `default`,
  };
}
function ct(e) {
  return (e ?? ``)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`)
    .replace(/^-|-$/g, ``);
}
var lt = 3;
function ut({
  dismissedDefaultSuggestionIds: e,
  generatedSuggestions: t,
  intl: n,
  onboardingSuggestions: r = [],
  selectedModel: i,
  selectedModelDisplayName: a = null,
}) {
  let o = t.map((e) => ({
    ...e,
    analyticsType: `generated`,
    homeAction: { type: `fill-composer` },
    source: `generated`,
  }));
  return r.some((e) => e.homeAction.type === `connect-plugin-onboarding`)
    ? r.slice(0, lt)
    : (o.push(...r.filter((t) => !e.includes(t.id))),
      at(i, a) && o.push(...ot({ intl: n }).filter((t) => !e.includes(t.id))),
      o.slice(0, lt));
}
function Q(e) {
  return {
    source: e.source,
    action: e.homeAction.type,
    thread_action: `new-thread`,
  };
}
var $ = c();
function dt(e) {
  let t = (0, P.c)(31),
    {
      suggestions: n,
      leadingCard: r,
      appByAmbientSuggestionAppId: i,
      disabled: a,
      dismissAction: o,
    } = e,
    s = a === void 0 ? !1 : a,
    c = h(p),
    u = ee(),
    d = _(se),
    { openPluginInstall: f } = Ce(),
    m = n.length + (r == null ? 0 : 1),
    g = m >= 2 && `[@container_(min-width:212px)]:grid-cols-2`,
    v = m === 3 && `[@container_(min-width:324px)]:grid-cols-3`,
    y = m >= 4 && `[@container_(min-width:436px)]:grid-cols-4`,
    b;
  t[0] !== g || t[1] !== v || t[2] !== y
    ? ((b = l(`grid grid-cols-1 items-stretch gap-3`, g, v, y)),
      (t[0] = g),
      (t[1] = v),
      (t[2] = y),
      (t[3] = b))
    : (b = t[3]);
  let x;
  if (
    t[4] !== i ||
    t[5] !== u ||
    t[6] !== d ||
    t[7] !== s ||
    t[8] !== f ||
    t[9] !== c ||
    t[10] !== n
  ) {
    let e;
    (t[12] !== i ||
    t[13] !== u ||
    t[14] !== d ||
    t[15] !== s ||
    t[16] !== f ||
    t[17] !== c
      ? ((e = (e, t) => {
          let n =
            e.homeAction.plugin.plugin.installed &&
            e.homeAction.plugin.plugin.enabled;
          return (0, $.jsxs)(
            `button`,
            {
              type: `button`,
              className: l(
                `relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left`,
                n || s
                  ? `cursor-default`
                  : `cursor-interaction enabled:hover:bg-token-foreground/[0.02]`,
                s && !n && `opacity-70`,
                !n && `shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]`,
              ),
              disabled: s || n,
              onClick: () => {
                (w(c, {
                  eventName: `codex_onboarding_starter_prompt_selected`,
                  metadata: {
                    prompt_id: e.id,
                    prompt_index: t,
                    prompt_type: e.analyticsType ?? e.source,
                    mode: d,
                    user_id: u.userId ?? void 0,
                    workspace_id: u.accountId ?? void 0,
                  },
                }),
                  w(c, {
                    eventName: `codex_ambient_suggestion_clicked`,
                    metadata: Q(e),
                  }),
                  f(e.homeAction.plugin, {
                    postInstallComposerPrefill: e.prompt,
                  }));
              },
              children: [
                (0, $.jsx)(`span`, {
                  className: l(
                    `flex h-5 shrink-0 items-center`,
                    n && `opacity-30`,
                  ),
                  children: ft(e, i),
                }),
                (0, $.jsxs)(`span`, {
                  className: l(
                    `flex w-full min-w-0 flex-col gap-1 text-base`,
                    n && `opacity-30`,
                  ),
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `line-clamp-1 leading-[18px] text-token-text-primary`,
                      children: e.title,
                    }),
                    (0, $.jsx)(`span`, {
                      className: `line-clamp-3 leading-[18px] text-token-text-tertiary`,
                      children: e.description,
                    }),
                  ],
                }),
                n
                  ? (0, $.jsx)(Ie, {
                      "aria-hidden": `true`,
                      className: `absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]`,
                    })
                  : null,
              ],
            },
            e.id,
          );
        }),
        (t[12] = i),
        (t[13] = u),
        (t[14] = d),
        (t[15] = s),
        (t[16] = f),
        (t[17] = c),
        (t[18] = e))
      : (e = t[18]),
      (x = n.map(e)),
      (t[4] = i),
      (t[5] = u),
      (t[6] = d),
      (t[7] = s),
      (t[8] = f),
      (t[9] = c),
      (t[10] = n),
      (t[11] = x));
  } else x = t[11];
  let S;
  t[19] !== r || t[20] !== b || t[21] !== x
    ? ((S = (0, $.jsxs)(`div`, { className: b, children: [r, x] })),
      (t[19] = r),
      (t[20] = b),
      (t[21] = x),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(be, { className: `icon-2xs` })), (t[23] = C))
    : (C = t[23]);
  let T;
  t[24] !== o.ariaLabel || t[25] !== o.disabled || t[26] !== o.onClick
    ? ((T = (0, $.jsx)(`button`, {
        type: `button`,
        "aria-label": o.ariaLabel,
        className: `absolute top-4 right-0 cursor-interaction rounded-xl p-1 text-token-text-tertiary opacity-0 group-hover:opacity-100 hover:bg-token-foreground/5 hover:text-token-text-primary hover:opacity-100 focus-visible:opacity-100`,
        disabled: o.disabled,
        onClick: o.onClick,
        children: C,
      })),
      (t[24] = o.ariaLabel),
      (t[25] = o.disabled),
      (t[26] = o.onClick),
      (t[27] = T))
    : (T = t[27]);
  let E;
  return (
    t[28] !== S || t[29] !== T
      ? ((E = (0, $.jsxs)(`div`, {
          className: `group @container relative mx-auto w-full max-w-3xl min-w-0 px-8 pt-4`,
          children: [S, T],
        })),
        (t[28] = S),
        (t[29] = T),
        (t[30] = E))
      : (E = t[30]),
    E
  );
}
function ft(e, t) {
  let n = e.homeAction.plugin.plugin.name,
    r = C(n);
  if (r != null)
    return (0, $.jsx)(r, {
      "aria-hidden": !0,
      className: `size-5 shrink-0 object-contain`,
    });
  let i = e.homeAction.plugin.logoPath;
  if (i)
    return (0, $.jsx)(D, {
      alt: ``,
      className: `size-5 shrink-0 object-contain`,
      logoUrl: i,
      fallback: (0, $.jsx)(`span`, {
        className: `size-5 shrink-0 object-contain`,
      }),
    });
  let a = t?.get(Z(n)),
    o = a == null ? null : S(a);
  return o == null
    ? (0, $.jsx)(D, {
        alt: ``,
        className: `size-5 shrink-0 object-contain`,
        logoUrl: a?.logoUrl ?? null,
        logoDarkUrl: a?.logoUrlDark ?? null,
        fallback: (0, $.jsx)(`span`, {
          className: `block size-5 rounded bg-token-foreground/15`,
        }),
      })
    : (0, $.jsx)(o, {
        "aria-hidden": !0,
        className: `size-5 shrink-0 object-contain`,
      });
}
var pt = 750,
  mt = new Set([
    `figma`,
    `file-csv`,
    `file-pdf`,
    `file-presentation`,
    `file-spreadsheet`,
    `file-word-document`,
    `gmail`,
    `google-calendar`,
    `google-drive`,
    `slack`,
  ]),
  ht = `opacity-85`;
function gt({
  generatedSuggestionsEnabled: e,
  hostId: r,
  onLocalConversationCreated: i,
  projectRoot: s,
}) {
  let c = h(p),
    l = f(),
    u = x(),
    d = g(N, { hostId: r, projectRoot: s }),
    b = g(Ae, { hostId: r, projectRoot: s }),
    S = g(De, { hostId: r, projectRoot: s }),
    C = g(Me, { hostId: r, projectRoot: s }),
    { openPluginInstall: ne } = Ce(),
    [, re] = o(`composer_prefill`),
    { agentMode: D, isAgentModePending: O } = fe({
      conversationId: null,
      cwdOverride: s,
      hostId: r,
    }),
    ae = _(se),
    { activeMode: oe } = le(null),
    { modelSettings: k } = ue(null),
    { serviceTierSettings: ce } = ve(null),
    A = ee(),
    { data: pe } = E(),
    me = v(t.enabled) === !0,
    ye = a(he),
    j = a(ge),
    [be, M] = n(_e),
    xe = T(`4132970629`),
    Se = T(`4214671466`),
    { connectAppsRowLabel: Te, suggestions: Ne } = Be({ enabled: s === `~` }),
    Ie =
      _(Ee) === !1
        ? _t({
            dismissAction: {
              ariaLabel: l.formatMessage({
                id: `home.connectAppsRow.dismiss`,
                defaultMessage: `Dismiss connect apps row`,
                description: `Accessible label for dismissing the home page row that opens the plugins and apps browser`,
              }),
              onClick: () => {
                c.set(Ee, !0);
              },
            },
            label: Te,
            navigate: u,
          })
        : void 0,
    P = e ? !me || S : !0,
    I = (be && xe && P) || j,
    { data: Le } = de({ hostId: r }),
    L = Le?.models.find((e) => e.model === k.model)?.displayName ?? null,
    R = P && at(k.model, L),
    z = Dt(A.email),
    Re = g(Oe, { domain: z, enabled: I && z != null }),
    B = we(r, [], { enabled: I || R }),
    { availablePlugins: ze } = B,
    V = Re.data?.provider ?? (z == null || Re.isError ? `other` : null),
    H =
      I && V != null && !B.isLoading
        ? Ke({
            intl: l,
            mailProvider: V,
            plan: pe?.plan_type ?? A.planAtLogin,
            plugins: ze,
            roles: ye.roles,
          })
        : [],
    U = I && (Se || j),
    W = C?.includes(`onboarding-assistant`) ?? !1,
    G =
      (H.length > 0 || U) &&
      H.every((e) =>
        e.homeAction.type === `connect-plugin-onboarding`
          ? e.homeAction.plugin.plugin.installed &&
            e.homeAction.plugin.plugin.enabled
          : !1,
      ) &&
      (!U || W);
  (0, F.useEffect)(() => {
    I && G && M(!1);
  }, [G, M, I]);
  let Ve = H.length > 0,
    K = ut({
      dismissedDefaultSuggestionIds: C ?? [],
      generatedSuggestions: e && me ? b : [],
      intl: l,
      onboardingSuggestions: Ve ? H : Ne,
      selectedModel: k.model,
      selectedModelDisplayName: L,
    }),
    q = s != null && P,
    He =
      K.length > 0 &&
      K.every((e) => e.homeAction.type === `connect-plugin-onboarding`),
    J = q ? K : [],
    Ue = q && (He || J.some(({ appIds: e }) => Ze(e))),
    We = Xe({
      appIds: J.flatMap(({ appIds: e }) => e),
      enabled: Ue,
      hostId: r,
    }),
    Y = te({ apps: We, enabled: Ue && We != null, hostId: r }),
    X = J.map((e) => e.id).join(`,`),
    Ge = J.map(Et).join(`,`),
    Je = (0, F.useRef)(null),
    Ye = y(`ambient-suggestion-set-status`, {
      onMutate: (e) => {
        Fe(
          c,
          { hostId: r, projectRoot: e.projectRoot },
          e.suggestionId,
          e.status,
        );
      },
      onSuccess: (e, t) => {
        c.query.setData(je, { hostId: r, projectRoot: t.projectRoot }, e);
      },
    }),
    Z = (e, t) => {
      if (e.source === `default`) {
        ke(c, { hostId: r, projectRoot: s }, e.id, t);
        return;
      }
      s != null &&
        Ye.mutate({ hostId: r, projectRoot: s, suggestionId: e.id, status: t });
    };
  if (
    ((0, F.useEffect)(() => {
      J.length === 0 ||
        Je.current === X ||
        ((Je.current = X),
        w(c, {
          eventName: `codex_onboarding_starter_prompts_displayed`,
          metadata: {
            prompt_ids: X,
            prompt_types: Ge,
            prompt_count: J.length,
            user_id: A.userId ?? void 0,
            workspace_id: A.accountId ?? void 0,
          },
        }));
    }, [A.accountId, A.userId, c, J.length, X, Ge]),
    !q || J.length === 0)
  )
    return null;
  let Qe = async (e) => {
    if (O) return;
    c.set(N, { hostId: r, projectRoot: s }, e.id);
    let t = J.findIndex((t) => t.id === e.id);
    (w(c, {
      eventName: `codex_onboarding_starter_prompt_selected`,
      metadata: {
        prompt_id: e.id,
        prompt_index: t,
        prompt_type: Et(e),
        mode: ae,
        user_id: A.userId ?? void 0,
        workspace_id: A.accountId ?? void 0,
      },
    }),
      w(c, { eventName: `codex_ambient_suggestion_clicked`, metadata: Q(e) }));
    try {
      switch (e.homeAction.type) {
        case `fill-composer`:
          (Z(e, `accepted`), re({ text: e.prompt }));
          break;
        case `connect-plugin-onboarding`:
          ne(e.homeAction.plugin, { postInstallComposerPrefill: e.prompt });
          break;
        case `start-thread`: {
          if (s == null) break;
          let t = await xt({
              pluginName: e.homeAction.pluginNameToInstall,
              plugins: ze,
              refetchPlugins: B.refetch,
            }),
            n = await Ct({
              forceReloadPlugins: B.forceReload,
              hostId: r,
              invalidateSkills: () => {
                c.queryClient.invalidateQueries({ queryKey: [`skills`] });
              },
              plugin: t,
            }),
            a = await wt({
              hostId: r,
              prompt: e.prompt,
              skillName: e.homeAction.skillNameToMention,
              skillsResponse: n,
            });
          (await Tt({
            agentMode: D,
            collaborationMode: oe,
            hostId: r,
            onLocalConversationCreated: i,
            projectRoot: s,
            serviceTier: ce.serviceTier,
            prompt: a,
          }),
            Z(e, `accepted`));
          break;
        }
      }
    } catch {
      c.get(ie).danger(
        (0, $.jsx)(m, {
          id: `home.ambientSuggestions.startError`,
          defaultMessage: `Unable to start this suggestion`,
          description: `Toast shown when launching an ambient suggestion fails`,
        }),
        { id: `ambient-suggestion-start-error` },
      );
    } finally {
      c.set(N, { hostId: r, projectRoot: s }, null);
    }
  };
  return K.every((e) => e.homeAction.type === `connect-plugin-onboarding`)
    ? (0, $.jsx)(dt, {
        suggestions: K,
        leadingCard: U
          ? (0, $.jsx)(Pe, {
              completed: W,
              hostId: r,
              onLocalConversationCreated: i,
              projectRoot: s,
            })
          : void 0,
        appByAmbientSuggestionAppId: Y == null ? void 0 : qe(Y),
        disabled: O,
        dismissAction: {
          ariaLabel: l.formatMessage({
            id: `home.ambientSuggestions.dismissOnboardingPluginSuggestions`,
            defaultMessage: `Dismiss onboarding plugin suggestions`,
            description: `Accessible label for permanently dismissing the onboarding plugin suggestion cards`,
          }),
          disabled: O,
          onClick: () => {
            M(!1);
          },
        },
      })
    : (0, $.jsx)(yt, {
        suggestions: K,
        apps: Y,
        activeSuggestionId: d,
        disabled: O,
        trailingAction: Ie,
        onStartSuggestion: (e) => {
          Qe(e);
        },
        onDismissSuggestion: (e) => {
          (c.set(N, { hostId: r, projectRoot: s }, e.id),
            w(c, {
              eventName: `codex_ambient_suggestion_dismissed`,
              metadata: Q(e),
            }));
          try {
            Z(e, `dismissed`);
          } finally {
            c.set(N, { hostId: r, projectRoot: s }, null);
          }
        },
        onShowSuggestionTooltip: (e) => {
          w(c, {
            eventName: `codex_ambient_suggestion_tooltip_shown`,
            metadata: Q(e),
          });
        },
      });
}
function _t({ dismissAction: e, label: t, navigate: n }) {
  return {
    dismissAction: e,
    icon: (0, $.jsx)(ye, { className: `icon-xs shrink-0` }),
    label: t ?? (0, $.jsx)(m, { ...Le }),
    onClick: () => {
      n(`/skills`);
    },
  };
}
function vt(e) {
  let t = (0, P.c)(20),
    {
      dismissAction: n,
      disabled: r,
      icon: i,
      label: a,
      onClick: o,
      onTooltipShown: s,
      tooltipContent: c,
    } = e,
    u = r === void 0 ? !1 : r,
    d;
  t[0] === i
    ? (d = t[1])
    : ((d = (0, $.jsx)(A, { "aria-hidden": `true`, children: i })),
      (t[0] = i),
      (t[1] = d));
  let f;
  t[2] === a
    ? (f = t[3])
    : ((f = (0, $.jsx)(pe, { children: a })), (t[2] = a), (t[3] = f));
  let p;
  t[4] !== d || t[5] !== f
    ? ((p = (0, $.jsxs)(me, { children: [d, f] })),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== u || t[8] !== o || t[9] !== p
    ? ((m = (0, $.jsx)(`button`, {
        type: `button`,
        className: `flex min-w-0 flex-1 cursor-interaction py-row-y pr-1 pl-3.5 text-left text-token-description-foreground outline-hidden enabled:group-focus-within:text-token-foreground enabled:group-hover:text-token-foreground disabled:cursor-default disabled:opacity-70`,
        disabled: u,
        onClick: o,
        children: p,
      })),
      (t[7] = u),
      (t[8] = o),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let h = m,
    g;
  t[11] !== h || t[12] !== s || t[13] !== c
    ? ((g =
        c == null
          ? h
          : (0, $.jsx)(O, {
              children: (0, $.jsx)(ae, {
                delayDuration: pt,
                side: `top`,
                align: `center`,
                onOpenChange: (e) => {
                  e && s?.();
                },
                tooltipBodyClassName: `text-token-text-primary leading-5`,
                tooltipMaxWidth: `min(420px, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
                tooltipContent: c,
                children: h,
              }),
            })),
      (t[11] = h),
      (t[12] = s),
      (t[13] = c),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] === n
    ? (_ = t[16])
    : ((_ =
        n == null
          ? null
          : (0, $.jsx)(`button`, {
              type: `button`,
              className: l(
                `user-select-none no-drag mr-2 flex size-4 shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground opacity-0 group-hover:opacity-100 hover:bg-token-list-hover-background hover:opacity-100 focus:opacity-100 focus:outline-none`,
                n.disabled === !0 && `!opacity-40`,
              ),
              "aria-label": n.ariaLabel,
              disabled: n.disabled,
              onClick: n.onClick,
              children: (0, $.jsx)(be, { className: `icon-2xs` }),
            })),
      (t[15] = n),
      (t[16] = _));
  let v;
  return (
    t[17] !== g || t[18] !== _
      ? ((v = (0, $.jsxs)(`div`, {
          className: `group flex min-w-0 items-center py-1.5`,
          children: [g, _],
        })),
        (t[17] = g),
        (t[18] = _),
        (t[19] = v))
      : (v = t[19]),
    v
  );
}
function yt(e) {
  let t = (0, P.c)(19),
    {
      suggestions: n,
      apps: r,
      activeSuggestionId: i,
      disabled: a,
      trailingAction: o,
      onStartSuggestion: s,
      onDismissSuggestion: c,
      onShowSuggestionTooltip: l,
    } = e,
    u = a === void 0 ? !1 : a,
    d = f(),
    p,
    m,
    h;
  if (
    t[0] !== i ||
    t[1] !== r ||
    t[2] !== u ||
    t[3] !== d ||
    t[4] !== c ||
    t[5] !== l ||
    t[6] !== s ||
    t[7] !== n ||
    t[8] !== o
  ) {
    let e = r == null ? void 0 : qe(r);
    ((p = o != null && n.length > 0),
      (m = `mx-auto -my-1.5 flex w-full min-w-0 flex-col divide-y divide-token-border/70`),
      (h = n.map((t) => {
        let n = t.id === i,
          r = t.title.charAt(0).toLocaleUpperCase() + t.title.slice(1),
          a;
        for (let n of new Set(t.appIds)) {
          let t = C(n);
          if (t != null) {
            a = { appId: n, Icon: t };
            break;
          }
          let r = e?.get(n);
          if (r?.logoUrl != null || r?.logoUrlDark != null) {
            a = { appId: n, app: r };
            break;
          }
        }
        return (0, $.jsx)(
          vt,
          {
            dismissAction: {
              ariaLabel: d.formatMessage(
                {
                  id: `home.ambientSuggestions.dismissSuggestion`,
                  defaultMessage: `Dismiss {title}`,
                  description: `Accessible label for dismissing an ambient suggestion row`,
                },
                { title: r },
              ),
              disabled: n,
              onClick: () => {
                c(t);
              },
            },
            disabled: u || n,
            icon: bt(a),
            label: r,
            onClick: () => {
              s(t);
            },
            onTooltipShown: () => {
              l?.(t);
            },
            tooltipContent:
              t.showTooltip === !1
                ? void 0
                : (0, $.jsx)(Ot, { description: t.description }),
          },
          t.id,
        );
      })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = u),
      (t[3] = d),
      (t[4] = c),
      (t[5] = l),
      (t[6] = s),
      (t[7] = n),
      (t[8] = o),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h));
  } else ((p = t[9]), (m = t[10]), (h = t[11]));
  let g;
  t[12] !== p || t[13] !== o
    ? ((g = p
        ? (0, $.jsx)(vt, {
            dismissAction: o.dismissAction,
            icon: o.icon,
            label: o.label,
            onClick: o.onClick,
          })
        : null),
      (t[12] = p),
      (t[13] = o),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== m || t[16] !== h || t[17] !== g
      ? ((_ = (0, $.jsxs)(`div`, { className: m, children: [h, g] })),
        (t[15] = m),
        (t[16] = h),
        (t[17] = g),
        (t[18] = _))
      : (_ = t[18]),
    _
  );
}
function bt(e) {
  return e == null
    ? (0, $.jsx)(j, { className: `icon-xs shrink-0` })
    : e.Icon == null
      ? (0, $.jsx)(D, {
          alt: ``,
          className: l(`icon-xs shrink-0 object-contain`, ht),
          logoUrl: e.app?.logoUrl,
          logoDarkUrl: e.app?.logoUrlDark,
          fallback: (0, $.jsx)(j, { className: `icon-xs shrink-0` }),
        })
      : (0, $.jsx)(e.Icon, {
          className: l(
            `icon-xs shrink-0 object-contain`,
            mt.has(e.appId) && ht,
          ),
        });
}
async function xt({ pluginName: e, plugins: t, refetchPlugins: n }) {
  return e == null ? null : (St(t, e) ?? St((await n()).availablePlugins, e));
}
function St(e, t) {
  let n = e.filter(
    (e) =>
      !(e.plugin.installed && e.plugin.enabled) &&
      [
        e.plugin.id,
        e.plugin.name,
        e.displayName,
        e.marketplaceDisplayName,
      ].some((e) => {
        let n = Z(e ?? ``);
        return n === t || n.startsWith(t + `-`);
      }),
  );
  return (
    n.find((e) => Z(e.marketplaceName).startsWith(`openai`)) ?? n[0] ?? null
  );
}
async function Ct({
  forceReloadPlugins: e,
  hostId: t,
  invalidateSkills: n,
  plugin: r,
}) {
  if (r == null) return null;
  await i(`install-plugin`, { hostId: t, ...Te(r) });
  let [, a] = await Promise.all([
    e(),
    i(`list-skills-for-host`, { forceReload: !0, hostId: t }),
  ]);
  return (n(), a);
}
async function wt({ hostId: e, prompt: t, skillName: n, skillsResponse: r }) {
  if (n == null) return t;
  let a = ce(
    r ?? (await i(`list-skills-for-host`, { forceReload: !0, hostId: e })),
    n,
  );
  return a == null ? t : `${t} ${k({ name: n, path: a.path })}`;
}
async function Tt({
  agentMode: e,
  collaborationMode: t,
  hostId: n,
  onLocalConversationCreated: a,
  projectRoot: o,
  serviceTier: s,
  prompt: c,
}) {
  let l = [o],
    u = xe(l),
    d = [{ type: `text`, text: c, text_elements: [] }],
    f = await M(l, { prompt: c }),
    p = f.cwd ?? o;
  if (u && f.projectlessOutputDirectory == null)
    throw Error(`No projectless output directory found`);
  let { config: m } = await i(`read-config-for-host`, {
    hostId: n,
    includeLayers: !1,
    cwd: p,
  });
  await a(
    await i(`start-conversation`, {
      hostId: n,
      ...oe({
        input: d,
        workspaceRoots: f.workspaceRoots,
        cwd: p,
        fileAttachments: [],
        addedFiles: [],
        agentMode: e,
        model: null,
        serviceTier: s,
        reasoningEffort: null,
        collaborationMode: t,
        config: r(m),
        ...(u
          ? {
              workspaceKind: `projectless`,
              projectlessOutputDirectory: f.projectlessOutputDirectory,
            }
          : { workspaceKind: `project` }),
      }),
    }),
  );
}
function Et(e) {
  return e.analyticsType ?? e.source;
}
function Dt(e) {
  if (e == null) return null;
  let t = e.lastIndexOf(`@`);
  return t <= 0 || t === e.length - 1
    ? null
    : e
        .slice(t + 1)
        .trim()
        .toLowerCase();
}
function Ot({ description: e }) {
  let t = e.split(/(`[^`]+`)/g);
  return t.length === 1
    ? e
    : t.map((e, t) =>
        e.startsWith("`") && e.endsWith("`")
          ? (0, $.jsx)(
              `code`,
              {
                className: `inline rounded-sm border border-token-border bg-token-foreground/5 px-1 font-mono text-[10px] leading-[14px] text-token-text-secondary`,
                children: e.slice(1, -1),
              },
              t,
            )
          : e,
      );
}
function kt(e) {
  let t = (0, P.c)(11),
    { enabled: n, hostId: r, projectRoot: i, routeEntryKey: a } = e,
    o = h(p),
    s;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o
    ? ((s = () => {
        n &&
          i != null &&
          o.query.fetch(je, { hostId: r, projectRoot: i }).catch(At);
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = s))
    : (s = t[4]);
  let c;
  (t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o
    ? ((c = [n, r, i, a, o]),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i),
      (t[8] = a),
      (t[9] = o),
      (t[10] = c))
    : (c = t[10]),
    (0, F.useEffect)(s, c));
}
function At() {}
function jt(e) {
  let t = (0, P.c)(9),
    { enabled: n, hostId: r, plan: i, projectRoot: a } = e,
    o = h(p),
    s;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o
    ? ((s = () => {
        n &&
          a != null &&
          o.query.fetch(Ne, { hostId: r, plan: i, projectRoot: a }).catch(Mt);
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s))
    : (s = t[5]);
  let c = (0, F.useEffectEvent)(s),
    l;
  t[6] === c
    ? (l = t[7])
    : ((l = () => {
        if (window.electronBridge?.sendMessageFromView != null)
          return () => {
            globalThis.setTimeout(c, 0);
          };
      }),
      (t[6] = c),
      (t[7] = l));
  let u;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = []), (t[8] = u))
    : (u = t[8]),
    (0, F.useEffect)(l, u));
}
function Mt() {}
function Nt(e) {
  let t = (0, P.c)(15),
    {
      generatedSuggestionsEnabled: n,
      hostId: r,
      onLocalConversationCreated: i,
      plan: a,
      projectRoot: o,
      routeEntryKey: s,
    } = e,
    c;
  (t[0] !== n || t[1] !== r || t[2] !== o || t[3] !== s
    ? ((c = { enabled: n, hostId: r, projectRoot: o, routeEntryKey: s }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s),
      (t[4] = c))
    : (c = t[4]),
    kt(c));
  let l;
  (t[5] !== n || t[6] !== r || t[7] !== a || t[8] !== o
    ? ((l = { enabled: n, hostId: r, plan: a, projectRoot: o }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = o),
      (t[9] = l))
    : (l = t[9]),
    jt(l));
  let u;
  return (
    t[10] !== n || t[11] !== r || t[12] !== i || t[13] !== o
      ? ((u = (0, $.jsx)(gt, {
          generatedSuggestionsEnabled: n,
          hostId: r,
          onLocalConversationCreated: i,
          projectRoot: o,
        })),
        (t[10] = n),
        (t[11] = r),
        (t[12] = i),
        (t[13] = o),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
export { Nt as HomeAmbientSuggestionsContent };
//# sourceMappingURL=home-ambient-suggestions-content-bBAuypmc.js.map
