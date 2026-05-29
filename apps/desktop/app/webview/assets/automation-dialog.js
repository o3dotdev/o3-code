import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  bi as t,
  fi as n,
  gi as r,
  hi as i,
  vi as a,
  yi as o,
  zr as s,
} from "./src-C.js";
import {
  ni as c,
  po as l,
  v as u,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as d, t as f } from "./jsx-runtime.js";
import { t as p } from "./clsx-BcPLHiun.js";
import {
  B as m,
  G as h,
  U as g,
  V as _,
  Y as v,
  Z as y,
  wt as b,
} from "./setting-storage.js";
import { o as x } from "./statsig--EYRNU53.js";
import { c as S } from "./app-server-manager-hooks.js";
import { C } from "./config-queries-BBeTQbuo.js";
import { d as w } from "./apps-queries-CmwRqoKz.js";
import { t as T } from "./tooltip-CDzchJxN.js";
import { t as E } from "./button.js";
import { n as D } from "./model-queries-CVdTsyPv.js";
import { m as O } from "./use-plugins-jIZrcuZQ.js";
import { t as k } from "./info-B8GAwpK6.js";
import { i as A } from "./locale-resolver-CfTzWTiS.js";
import {
  a as j,
  i as M,
  l as N,
  n as P,
  r as F,
  t as I,
} from "./dialog-layout.js";
import {
  a as L,
  i as ee,
  n as R,
  o as z,
  r as te,
  s as B,
  t as ne,
  u as re,
} from "./reasoning-minimal-DZ-l40pu.js";
import { t as V } from "./pinned-threads-query-DYArLI-i.js";
import { t as ie } from "./check-md.js";
import { _ as ae } from "./links.js";
import { n as oe, t as se } from "./conversation-starter-card.js";
import { t as H } from "./clock-BflmlnpZ.js";
import { r as U, t as ce } from "./dropdown-DtQxMoJw.js";
import { i as le, n as W, t as ue } from "./popover.js";
import { t as G } from "./chevron-NmAOI_v1.js";
import { t as de } from "./worktree-D_6WAQVb.js";
import { r as K } from "./format-automation-next-run-label.js";
import { d as fe, t as pe } from "./use-native-apps.electron.js";
import { n as me } from "./use-skills.js";
import { t as he } from "./automation-queries-DCiNISnO.js";
import { t as ge } from "./laptop.js";
import {
  a as _e,
  c as ve,
  i as ye,
  o as be,
  r as xe,
} from "./prompt-editor-.js";
import { t as Se } from "./at-mention-list-C6rdlW9Y.js";
import { i as Ce } from "./use-composer-controller.js";
import { t as we } from "./anchored-autocomplete-overlay.js";
import { n as Te, t as Ee } from "./project-dropdown-options.js";
import {
  a as De,
  d as Oe,
  f as ke,
  l as Ae,
  n as je,
  s as Me,
} from "./automation-schedule-CNorTxWd.js";
import {
  f as Ne,
  g as Pe,
  h as Fe,
  m as Ie,
  p as Le,
  r as Re,
  v as ze,
  y as Be,
} from "./automation-shared-BaYmxTav.js";
import { n as Ve } from "./home-use-cases-data.js";
function He(e) {
  let t = i(e ?? []);
  return t == null
    ? { model: n, reasoningEffort: null, profile: null, isLoading: !0 }
    : {
        model: t.model,
        reasoningEffort: a({ model: t, reasoningEffort: null }),
        profile: null,
        isLoading: !1,
      };
}
function Ue({ model: e, models: t }) {
  let n = r(t ?? [], e);
  return n?.displayName ? re(n.displayName) : (e ?? ``);
}
var q = b(),
  J = f();
function We(e) {
  let t = (0, q.c)(9),
    { draft: n, action: r } = e,
    i = h(),
    a,
    o;
  if (t[0] !== n || t[1] !== i) {
    o = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let { missingRequirements: e } = Le(n);
      if (e.length === 0) {
        o = null;
        break bb0;
      }
      let r;
      t[4] === i
        ? (r = t[5])
        : ((r = (e, t) =>
            Ge({
              intl: i,
              requirement: e,
              position: t === 0 ? `initial` : `continuation`,
            })),
          (t[4] = i),
          (t[5] = r));
      let s = e.map(r);
      a = i.formatList(s, { type: `conjunction` });
    }
    ((t[0] = n), (t[1] = i), (t[2] = a), (t[3] = o));
  } else ((a = t[2]), (o = t[3]));
  if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
  let s = a,
    c;
  return (
    t[6] !== r || t[7] !== s
      ? ((c =
          r === `create`
            ? (0, J.jsx)(g, {
                id: `settings.automations.saveTooltip.combined.create`,
                defaultMessage: `{requirements} to create`,
                description: `Tooltip on the disabled automation create button combining all missing requirements`,
                values: { requirements: s },
              })
            : (0, J.jsx)(g, {
                id: `settings.automations.saveTooltip.combined.save`,
                defaultMessage: `{requirements} to save`,
                description: `Tooltip on the disabled automation save button combining all missing requirements`,
                values: { requirements: s },
              })),
        (t[6] = r),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function Ge({ intl: e, requirement: t, position: n }) {
  switch (t) {
    case `name`:
      return n === `initial`
        ? e.formatMessage({
            id: `settings.automations.saveTooltip.name.initial`,
            defaultMessage: `Create title`,
            description: `Tooltip requirement shown first when the automation title is missing`,
          })
        : e.formatMessage({
            id: `settings.automations.saveTooltip.name.continuation`,
            defaultMessage: `create title`,
            description: `Tooltip requirement shown after the first item when the automation title is missing`,
          });
    case `prompt`:
      return n === `initial`
        ? e.formatMessage({
            id: `settings.automations.saveTooltip.prompt.initial`,
            defaultMessage: `Add prompt`,
            description: `Tooltip requirement shown first when the automation prompt is missing`,
          })
        : e.formatMessage({
            id: `settings.automations.saveTooltip.prompt.continuation`,
            defaultMessage: `add prompt`,
            description: `Tooltip requirement shown after the first item when the automation prompt is missing`,
          });
    case `cwd`:
      return n === `initial`
        ? e.formatMessage({
            id: `settings.automations.saveTooltip.cwd.initial`,
            defaultMessage: `Select project`,
            description: `Tooltip requirement shown first when the automation project selection is missing`,
          })
        : e.formatMessage({
            id: `settings.automations.saveTooltip.cwd.continuation`,
            defaultMessage: `select project`,
            description: `Tooltip requirement shown after the first item when the automation project selection is missing`,
          });
    case `thread`:
      return n === `initial`
        ? e.formatMessage({
            id: `settings.automations.saveTooltip.thread.initial`,
            defaultMessage: `Select chat`,
            description: `Tooltip requirement shown first when the heartbeat automation thread selection is missing`,
          })
        : e.formatMessage({
            id: `settings.automations.saveTooltip.thread.continuation`,
            defaultMessage: `select chat`,
            description: `Tooltip requirement shown after the first item when the heartbeat automation thread selection is missing`,
          });
    case `executionEnvironment`:
      return n === `initial`
        ? e.formatMessage({
            id: `settings.automations.saveTooltip.executionEnvironment.initial`,
            defaultMessage: `Choose where to run it`,
            description: `Tooltip requirement shown first when the automation execution environment is missing`,
          })
        : e.formatMessage({
            id: `settings.automations.saveTooltip.executionEnvironment.continuation`,
            defaultMessage: `choose where to run it`,
            description: `Tooltip requirement shown after the first item when the automation execution environment is missing`,
          });
    case `model`:
      return n === `initial`
        ? e.formatMessage({
            id: `settings.automations.saveTooltip.model.initial`,
            defaultMessage: `Choose a model`,
            description: `Tooltip requirement shown first when the automation model is missing`,
          })
        : e.formatMessage({
            id: `settings.automations.saveTooltip.model.continuation`,
            defaultMessage: `choose a model`,
            description: `Tooltip requirement shown after the first item when the automation model is missing`,
          });
    case `schedule`:
      return n === `initial`
        ? e.formatMessage({
            id: `settings.automations.saveTooltip.schedule.initial`,
            defaultMessage: `Fix the schedule`,
            description: `Tooltip requirement shown first when the automation schedule is invalid`,
          })
        : e.formatMessage({
            id: `settings.automations.saveTooltip.schedule.continuation`,
            defaultMessage: `fix the schedule`,
            description: `Tooltip requirement shown after the first item when the automation schedule is invalid`,
          });
  }
}
var Y = [`MO`, `TU`, `WE`, `TH`, `FR`, `SA`, `SU`],
  Ke = [`MO`, `TU`, `WE`, `TH`, `FR`];
function X({
  mode: e,
  weekdays: t,
  time: n,
  intervalHours: r = 24,
  intervalMinutes: i = null,
  customRrule: a = ``,
}) {
  return {
    mode: e,
    intervalHours: r,
    intervalMinutes: i,
    weekdays: t,
    time: n,
    customRrule: a,
  };
}
var Z = _({
    defaultDraftName: {
      id: `inbox.rightPanel.quickStart.home.defaultDraftName`,
      defaultMessage: `Automation`,
      description: `Fallback draft name for home automation templates`,
    },
    dailyBugScanDraftName: {
      id: `inbox.rightPanel.quickStart.home.dailyBugScan.draftName`,
      defaultMessage: `Daily bug scan`,
      description: `Draft name for the daily bug scan automation template`,
    },
    weeklyReleaseNotesDraftName: {
      id: `inbox.rightPanel.quickStart.home.weeklyReleaseNotes.draftName`,
      defaultMessage: `Weekly release notes`,
      description: `Draft name for the weekly release notes automation template`,
    },
    dailyStandupDraftName: {
      id: `inbox.rightPanel.quickStart.home.dailyStandup.draftName`,
      defaultMessage: `Standup summary`,
      description: `Draft name for the daily standup automation template`,
    },
    nightlyCiReportDraftName: {
      id: `inbox.rightPanel.quickStart.home.nightlyCiReport.draftName`,
      defaultMessage: `Nightly CI report`,
      description: `Draft name for the nightly CI automation template`,
    },
    dailyClassicGameDraftName: {
      id: `inbox.rightPanel.quickStart.home.dailyClassicGame.draftName`,
      defaultMessage: `Daily classic game`,
      description: `Draft name for the daily classic game automation template`,
    },
    skillProgressionMapDraftName: {
      id: `inbox.rightPanel.quickStart.home.skillProgressionMap.draftName`,
      defaultMessage: `Skill progression map`,
      description: `Draft name for the skill progression map automation template`,
    },
    weeklyEngineeringSummaryDraftName: {
      id: `inbox.rightPanel.quickStart.home.weeklyEngineeringSummary.draftName`,
      defaultMessage: `Weekly engineering summary`,
      description: `Draft name for the weekly engineering summary automation template`,
    },
    performanceRegressionWatchDraftName: {
      id: `inbox.rightPanel.quickStart.home.performanceRegressionWatch.draftName`,
      defaultMessage: `Performance regression watch`,
      description: `Draft name for the performance regression watch automation template`,
    },
    dependencySdkDriftDraftName: {
      id: `inbox.rightPanel.quickStart.home.dependencySdkDrift.draftName`,
      defaultMessage: `Dependency and SDK drift`,
      description: `Draft name for the dependency and SDK drift automation template`,
    },
    testGapDetectionDraftName: {
      id: `inbox.rightPanel.quickStart.home.testGapDetection.draftName`,
      defaultMessage: `Test gap detection`,
      description: `Draft name for the test gap detection automation template`,
    },
    preReleaseCheckDraftName: {
      id: `inbox.rightPanel.quickStart.home.preReleaseCheck.draftName`,
      defaultMessage: `Pre-release check`,
      description: `Draft name for the pre-release check automation template`,
    },
    agentsDocsSyncDraftName: {
      id: `inbox.rightPanel.quickStart.home.agentsDocsSync.draftName`,
      defaultMessage: `Update AGENTS.md`,
      description: `Draft name for the AGENTS.md sync automation template`,
    },
    weeklyPrSummaryDraftName: {
      id: `inbox.rightPanel.quickStart.home.weeklyPrSummary.draftName`,
      defaultMessage: `Weekly PR summary`,
      description: `Draft name for the weekly PR summary automation template`,
    },
    issueTriageDraftName: {
      id: `inbox.rightPanel.quickStart.home.issueTriage.draftName`,
      defaultMessage: `Issue triage`,
      description: `Draft name for the issue triage automation template`,
    },
    ciMonitorDraftName: {
      id: `inbox.rightPanel.quickStart.home.ciMonitor.draftName`,
      defaultMessage: `CI monitor`,
      description: `Draft name for the CI monitor automation template`,
    },
    dependencySweepDraftName: {
      id: `inbox.rightPanel.quickStart.home.dependencySweep.draftName`,
      defaultMessage: `Dependency sweep`,
      description: `Draft name for the dependency sweep automation template`,
    },
    performanceAuditDraftName: {
      id: `inbox.rightPanel.quickStart.home.performanceAudit.draftName`,
      defaultMessage: `Performance audit`,
      description: `Draft name for the performance audit automation template`,
    },
    changelogUpdateDraftName: {
      id: `inbox.rightPanel.quickStart.home.changelogUpdate.draftName`,
      defaultMessage: `Update changelog`,
      description: `Draft name for the changelog update automation template`,
    },
  }),
  qe = X({ mode: `daily`, weekdays: Y, time: `09:00` }),
  Je = new Map([
    [`daily-bug-scan`, Z.dailyBugScanDraftName],
    [`weekly-release-notes`, Z.weeklyReleaseNotesDraftName],
    [`daily-standup`, Z.dailyStandupDraftName],
    [`nightly-ci-report`, Z.nightlyCiReportDraftName],
    [`daily-classic-game`, Z.dailyClassicGameDraftName],
    [`skill-progression-map`, Z.skillProgressionMapDraftName],
    [`weekly-engineering-summary`, Z.weeklyEngineeringSummaryDraftName],
    [`performance-regression-watch`, Z.performanceRegressionWatchDraftName],
    [`dependency-sdk-drift`, Z.dependencySdkDriftDraftName],
    [`test-gap-detection`, Z.testGapDetectionDraftName],
    [`pre-release-check`, Z.preReleaseCheckDraftName],
    [`agents-docs-sync`, Z.agentsDocsSyncDraftName],
    [`weekly-pr-summary`, Z.weeklyPrSummaryDraftName],
    [`issue-triage`, Z.issueTriageDraftName],
    [`ci-monitor`, Z.ciMonitorDraftName],
    [`dependency-sweep`, Z.dependencySweepDraftName],
    [`performance-audit`, Z.performanceAuditDraftName],
    [`changelog-update`, Z.changelogUpdateDraftName],
  ]),
  Ye = new Map([
    [`daily-bug-scan`, X({ mode: `daily`, weekdays: Y, time: `09:00` })],
    [
      `weekly-release-notes`,
      X({ mode: `weekly`, weekdays: [`FR`], time: `09:00` }),
    ],
    [`daily-standup`, X({ mode: `weekdays`, weekdays: Ke, time: `09:00` })],
    [`nightly-ci-report`, X({ mode: `daily`, weekdays: Y, time: `21:00` })],
    [`daily-classic-game`, X({ mode: `daily`, weekdays: Y, time: `14:00` })],
    [
      `skill-progression-map`,
      X({ mode: `weekly`, weekdays: [`FR`], time: `10:00` }),
    ],
    [
      `weekly-engineering-summary`,
      X({ mode: `weekly`, weekdays: [`FR`], time: `16:00` }),
    ],
    [
      `performance-regression-watch`,
      X({ mode: `daily`, weekdays: Y, time: `09:00` }),
    ],
    [`dependency-sdk-drift`, X({ mode: `daily`, weekdays: Y, time: `11:00` })],
    [`test-gap-detection`, X({ mode: `daily`, weekdays: Y, time: `15:00` })],
    [
      `pre-release-check`,
      X({ mode: `weekly`, weekdays: [`TH`], time: `13:00` }),
    ],
    [
      `agents-docs-sync`,
      X({ mode: `weekly`, weekdays: [`FR`], time: `11:00` }),
    ],
    [
      `weekly-pr-summary`,
      X({ mode: `weekly`, weekdays: [`MO`], time: `09:00` }),
    ],
    [`issue-triage`, X({ mode: `weekdays`, weekdays: Ke, time: `09:30` })],
    [
      `ci-monitor`,
      X({
        mode: `custom`,
        intervalHours: 2,
        weekdays: Ke,
        time: `09:00`,
        customRrule: `RRULE:FREQ=HOURLY;INTERVAL=2;BYMINUTE=0;BYDAY=MO,TU,WE,TH,FR`,
      }),
    ],
    [
      `dependency-sweep`,
      X({
        mode: `custom`,
        intervalHours: 720,
        weekdays: Y,
        time: `09:00`,
        customRrule: `RRULE:FREQ=HOURLY;INTERVAL=720;BYMINUTE=0;BYDAY=MO,TU,WE,TH,FR,SA,SU`,
      }),
    ],
    [
      `performance-audit`,
      X({ mode: `weekly`, weekdays: [`MO`], time: `14:00` }),
    ],
    [
      `changelog-update`,
      X({ mode: `weekly`, weekdays: [`FR`], time: `16:00` }),
    ],
  ]),
  Xe = Ve().map((e) => ({
    id: e.id,
    iconName: e.iconName,
    nameMessage: Je.get(e.id) ?? Z.defaultDraftName,
    promptMessage: e.automationPromptMessage ?? e.promptMessage,
    scheduleConfig: Ye.get(e.id) ?? qe,
  }));
function Ze(e) {
  let t = (0, q.c)(6),
    { onSelectAction: n, columns: r } = e,
    i = r === void 0 ? `responsive` : r,
    a = h(),
    o =
      i === `two`
        ? `grid w-full grid-cols-2 gap-4`
        : `grid w-full gap-4 md:grid-cols-2`,
    s;
  t[0] !== a || t[1] !== n
    ? ((s = Xe.map((e) =>
        (0, J.jsx)(
          oe,
          {
            className: `w-full`,
            icon: (0, J.jsx)(se, { name: e.iconName }),
            mode: `local`,
            onSelect: (t) => {
              n({
                name: a.formatMessage(e.nameMessage),
                prompt: t,
                scheduleConfig: e.scheduleConfig,
              });
            },
            prompt: a.formatMessage(e.promptMessage),
          },
          e.id,
        ),
      )),
      (t[0] = a),
      (t[1] = n),
      (t[2] = s))
    : (s = t[2]);
  let c;
  return (
    t[3] !== o || t[4] !== s
      ? ((c = (0, J.jsx)(`div`, { className: o, children: s })),
        (t[3] = o),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function Qe(e) {
  return e == null || e === `local`;
}
function $e(e) {
  let n = (0, q.c)(14),
    { data: r } = y(he),
    { data: i } = y(V),
    { data: a } = S(),
    o;
  if (n[0] !== r?.items || n[1] !== e) {
    let i;
    (n[3] === e
      ? (i = n[4])
      : ((i = (n) =>
          !t(n) ||
          n.status !== `ACTIVE` ||
          n.targetThreadId.trim().length === 0 ||
          n.targetThreadId === e
            ? []
            : [n.targetThreadId]),
        (n[3] = e),
        (n[4] = i)),
      (o = new Set((r?.items ?? []).flatMap(i))),
      (n[0] = r?.items),
      (n[1] = e),
      (n[2] = o));
  } else o = n[2];
  let l = o,
    u,
    d;
  if (n[5] !== l || n[6] !== a || n[7] !== i?.threadIds || n[8] !== e) {
    let t = new Map((a ?? []).filter(nt).map(tt)),
      r = i?.threadIds ?? [],
      o = new Set(r),
      f = r.flatMap((e) => {
        let n = t.get(e);
        return n == null
          ? []
          : [
              {
                threadId: n.id,
                title: c(n) ?? e,
                createdAt: n.createdAt ?? null,
                isPinned: !0,
                isUnavailable: l.has(e),
              },
            ];
      });
    if (e != null && e.length > 0 && !o.has(e)) {
      let n = t.get(e);
      f.unshift({
        threadId: s(n?.id ?? e),
        title: (n == null ? null : c(n)) ?? e,
        createdAt: n?.createdAt ?? null,
        isPinned: !1,
        isUnavailable: l.has(e),
      });
    }
    ((u = f),
      (d = f.some(et)),
      (n[5] = l),
      (n[6] = a),
      (n[7] = i?.threadIds),
      (n[8] = e),
      (n[9] = u),
      (n[10] = d));
  } else ((u = n[9]), (d = n[10]));
  let f;
  return (
    n[11] !== u || n[12] !== d
      ? ((f = { options: u, hasPinnedThreads: d }),
        (n[11] = u),
        (n[12] = d),
        (n[13] = f))
      : (f = n[13]),
    f
  );
}
function et(e) {
  return e.isPinned;
}
function tt(e) {
  return [String(e.id), e];
}
function nt(e) {
  return Qe(e.hostId);
}
var Q = e(d(), 1),
  rt = 300,
  it = `var(--cubic-enter)`;
function at({
  children: e,
  initialOverlayOpen: t = !1,
  baseContent: n,
  overlayContent: r,
  overlayHeader: i,
  overlayHeightOffset: a,
  minHeight: o,
  sizeDurationMs: s = rt,
  baseFadeDurationMs: c = rt,
  overlayFadeDurationMs: l,
  overlayHeaderFadeDurationMs: u = l,
  sizeEasing: d = it,
  baseContentClassName: f,
  overlayContentClassName: m,
  overlayHeaderClassName: h,
}) {
  let [g, _] = (0, Q.useState)(t),
    [v, y] = (0, Q.useState)(t),
    [b, x] = (0, Q.useState)(!t),
    S = (0, Q.useRef)(null),
    C = (0, Q.useRef)([]),
    [w, T] = (0, Q.useState)(null),
    E = () => {
      (C.current.forEach((e) => {
        clearTimeout(e);
      }),
        (C.current = []));
    },
    D = (e) => {
      (E(), y(!1));
      let t = setTimeout(() => {
          (_(!1), e?.());
        }, l),
        n = setTimeout(() => {
          x(!0);
        }, l + s);
      C.current.push(t, n);
    },
    O = () => {
      D();
    },
    k = (e) => {
      D(e);
    },
    A = () => {
      (E(), y(!1), x(!1));
      let e = setTimeout(() => {
          _(!0);
        }, c),
        t = setTimeout(() => {
          y(!0);
        }, c + s);
      C.current.push(e, t);
    };
  ((0, Q.useLayoutEffect)(() => {
    let e = S.current;
    if (e == null) return;
    let t = () => {
      T(e.scrollHeight);
    };
    if ((t(), typeof ResizeObserver > `u`)) return;
    let n = new ResizeObserver(() => {
      t();
    });
    return (
      n.observe(e),
      () => {
        n.disconnect();
      }
    );
  }, []),
    (0, Q.useEffect)(
      () => () => {
        E();
      },
      [],
    ));
  let j = g ? Math.max((w ?? o) + a, o) : w,
    M = {
      isOverlayOpen: g,
      openOverlay: A,
      closeOverlay: O,
      closeOverlayAndThen: k,
    },
    N = typeof n == `function` ? n(M) : n;
  return (0, J.jsxs)(`div`, {
    className: `relative`,
    style: j == null ? void 0 : { height: j, transition: `height ${s}ms ${d}` },
    children: [
      e?.(M),
      i
        ? (0, J.jsx)(`div`, {
            className: p(
              `absolute inset-x-0 top-0 z-10 transition-opacity`,
              v ? `opacity-100` : `opacity-0`,
              h,
            ),
            style: { transitionDuration: `${u}ms` },
            children: i,
          })
        : null,
      (0, J.jsx)(`div`, {
        ref: S,
        className: p(
          `w-full transition-opacity`,
          b ? `opacity-100` : `pointer-events-none opacity-0`,
          f,
        ),
        style: { transitionDuration: `${c}ms` },
        children: N,
      }),
      (0, J.jsx)(`div`, {
        className: p(
          `absolute inset-0 transition-opacity`,
          v ? `opacity-100` : `pointer-events-none opacity-0`,
          m,
        ),
        style: { minHeight: o, transitionDuration: `${l}ms` },
        children: r(M),
      }),
    ],
  });
}
var ot = `flex flex-col gap-2`,
  $ = `bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full rounded-md border border-token-input-border px-2.5 py-1.5 text-base outline-none focus:border-token-focus-border`,
  st = `text-token-input-foreground placeholder:text-token-input-placeholder-foreground m-0 w-full min-w-0 appearance-none bg-transparent p-0 text-lg leading-tight outline-none`,
  ct = p(
    `text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full text-base outline-none`,
    `min-h-[16rem] max-h-[32rem]`,
    `[&_.ProseMirror]:leading-relaxed`,
    `extension:[&_.ProseMirror]:leading-normal`,
    `[&_.ProseMirror]:px-0`,
    `[&_.ProseMirror]:py-0`,
  ),
  lt = p(
    `text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full text-base outline-none`,
    `min-h-[16rem] max-h-[32rem]`,
    `[&_.ProseMirror]:leading-relaxed`,
    `extension:[&_.ProseMirror]:leading-normal`,
    `[&_.ProseMirror]:px-0`,
    `[&_.ProseMirror]:py-0`,
  ),
  ut = p(
    `text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full text-base outline-none`,
    `min-h-[16rem] max-h-none overflow-visible`,
    `[&_.ProseMirror]:leading-relaxed`,
    `extension:[&_.ProseMirror]:leading-normal`,
    `[&_.ProseMirror]:px-0`,
    `[&_.ProseMirror]:py-0`,
  ),
  dt = 360,
  ft = 208,
  pt = 160,
  mt = 220,
  ht = 260,
  gt = 208,
  _t = { none: ne, minimal: ne, low: te, medium: R, high: ee, xhigh: L },
  vt = [
    {
      id: `hourly`,
      labelMessage: m({
        id: `settings.automations.scheduleMode.hourly`,
        defaultMessage: `Hourly`,
        description: `Dropdown label for an hourly automation schedule`,
      }),
    },
    {
      id: `daily`,
      labelMessage: m({
        id: `settings.automations.scheduleMode.daily`,
        defaultMessage: `Daily`,
        description: `Dropdown label for a daily automation schedule`,
      }),
    },
    {
      id: `weekdays`,
      labelMessage: m({
        id: `settings.automations.scheduleMode.weekdays`,
        defaultMessage: `Weekdays`,
        description: `Dropdown label for a weekdays-only automation schedule`,
      }),
    },
    {
      id: `weekly`,
      labelMessage: m({
        id: `settings.automations.scheduleMode.weekly`,
        defaultMessage: `Weekly`,
        description: `Dropdown label for a weekly automation schedule`,
      }),
    },
    {
      id: `custom`,
      labelMessage: m({
        id: `settings.automations.scheduleMode.custom`,
        defaultMessage: `Custom`,
        description: `Dropdown label for a custom automation schedule`,
      }),
    },
  ],
  yt = [
    {
      id: `hourly`,
      labelMessage: m({
        id: `settings.automations.scheduleMode.interval`,
        defaultMessage: `Interval`,
        description: `Dropdown label for a heartbeat automation interval schedule`,
      }),
    },
    ...vt.filter((e) => e.id !== `hourly`),
  ],
  bt = 1440,
  xt = 15,
  St = Array.from({ length: bt / xt }, (e, t) => {
    let n = t * xt;
    return Me(Math.floor(n / 60), n % 60);
  }),
  Ct = [
    {
      id: `local`,
      icon: ge,
      labelMessage: m({
        id: `settings.automations.executionEnvironment.local`,
        defaultMessage: `Local`,
        description: `Dropdown label for running automations locally in the selected project`,
      }),
      tooltipMessage: m({
        id: `settings.automations.executionEnvironment.local.help`,
        defaultMessage: `Runs directly in the selected project directory without creating a worktree.`,
        description: `Tooltip explaining local execution mode for automations`,
      }),
    },
    {
      id: `worktree`,
      icon: de,
      labelMessage: m({
        id: `settings.automations.executionEnvironment.worktree`,
        defaultMessage: `Worktree`,
        description: `Dropdown label for running automations in a worktree`,
      }),
      tooltipMessage: m({
        id: `settings.automations.executionEnvironment.worktree.help`,
        defaultMessage: `Runs in a dedicated Git worktree created from the selected project, keeping your current checkout untouched.`,
        description: `Tooltip explaining worktree execution mode for automations`,
      }),
    },
    {
      id: `thread`,
      icon: K,
      labelMessage: m({
        id: `settings.automations.destination.thread`,
        defaultMessage: `Chat`,
        description: `Dropdown label for sending heartbeat automations into a pinned thread`,
      }),
      tooltipMessage: m({
        id: `settings.automations.destination.thread.help`,
        defaultMessage: `Sends messages directly into the selected chat instead of running in a project folder or worktree`,
        description: `Tooltip explaining thread destination for automations`,
      }),
    },
  ],
  wt = [
    {
      id: `MO`,
      labelMessage: m({
        id: `settings.automations.rrule.weekday.mon`,
        defaultMessage: `Mo`,
        description: `RRULE weekday short label`,
      }),
      longLabelMessage: m({
        id: `settings.automations.rrule.weekday.monday`,
        defaultMessage: `Monday`,
        description: `RRULE weekday long label`,
      }),
    },
    {
      id: `TU`,
      labelMessage: m({
        id: `settings.automations.rrule.weekday.tue`,
        defaultMessage: `Tu`,
        description: `RRULE weekday short label`,
      }),
      longLabelMessage: m({
        id: `settings.automations.rrule.weekday.tuesday`,
        defaultMessage: `Tuesday`,
        description: `RRULE weekday long label`,
      }),
    },
    {
      id: `WE`,
      labelMessage: m({
        id: `settings.automations.rrule.weekday.wed`,
        defaultMessage: `We`,
        description: `RRULE weekday short label`,
      }),
      longLabelMessage: m({
        id: `settings.automations.rrule.weekday.wednesday`,
        defaultMessage: `Wednesday`,
        description: `RRULE weekday long label`,
      }),
    },
    {
      id: `TH`,
      labelMessage: m({
        id: `settings.automations.rrule.weekday.thu`,
        defaultMessage: `Th`,
        description: `RRULE weekday short label`,
      }),
      longLabelMessage: m({
        id: `settings.automations.rrule.weekday.thursday`,
        defaultMessage: `Thursday`,
        description: `RRULE weekday long label`,
      }),
    },
    {
      id: `FR`,
      labelMessage: m({
        id: `settings.automations.rrule.weekday.fri`,
        defaultMessage: `Fr`,
        description: `RRULE weekday short label`,
      }),
      longLabelMessage: m({
        id: `settings.automations.rrule.weekday.friday`,
        defaultMessage: `Friday`,
        description: `RRULE weekday long label`,
      }),
    },
    {
      id: `SA`,
      labelMessage: m({
        id: `settings.automations.rrule.weekday.sat`,
        defaultMessage: `Sa`,
        description: `RRULE weekday short label`,
      }),
      longLabelMessage: m({
        id: `settings.automations.rrule.weekday.saturday`,
        defaultMessage: `Saturday`,
        description: `RRULE weekday long label`,
      }),
    },
    {
      id: `SU`,
      labelMessage: m({
        id: `settings.automations.rrule.weekday.sun`,
        defaultMessage: `Su`,
        description: `RRULE weekday short label`,
      }),
      longLabelMessage: m({
        id: `settings.automations.rrule.weekday.sunday`,
        defaultMessage: `Sunday`,
        description: `RRULE weekday long label`,
      }),
    },
  ];
function Tt(e) {
  let t = (0, q.c)(13),
    { id: n, value: r, autoFocus: i, onChange: a } = e,
    o = h(),
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = o.formatMessage({
        id: `settings.automations.nameLabel`,
        defaultMessage: `Name`,
        description: `Label for automation name input`,
      })),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c = o.formatMessage({
        id: `settings.automations.namePlaceholder`,
        defaultMessage: `Automation title`,
        description: `Placeholder for automation name input`,
      })),
      (t[2] = o),
      (t[3] = c));
  let l;
  t[4] === a
    ? (l = t[5])
    : ((l = (e) => {
        a(e.target.value);
      }),
      (t[4] = a),
      (t[5] = l));
  let u;
  return (
    t[6] !== i ||
    t[7] !== n ||
    t[8] !== s ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== r
      ? ((u = (0, J.jsx)(`input`, {
          id: n,
          "data-testid": `automation-title-input`,
          autoFocus: i,
          className: st,
          "aria-label": s,
          value: r,
          placeholder: c,
          onChange: l,
        })),
        (t[6] = i),
        (t[7] = n),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = r),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function Et(e) {
  let t = (0, q.c)(11),
    { isReadOnlySandbox: n, isDangerFullAccess: r } = e,
    i = h(),
    a;
  t[0] !== r || t[1] !== n
    ? ((a = (0, J.jsx)(Ft, { isReadOnlySandbox: n, isDangerFullAccess: r })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i
    ? (o = t[4])
    : ((o = i.formatMessage({
        id: `settings.automations.banner.tooltipLabel`,
        defaultMessage: `Automation sandbox details`,
        description: `Aria label for the automation sandbox details tooltip trigger`,
      })),
      (t[3] = i),
      (t[4] = o));
  let s;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(k, { className: `icon-sm` })), (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === o
    ? (c = t[7])
    : ((c = (0, J.jsx)(`button`, {
        type: `button`,
        className: `inline-flex shrink-0 items-center justify-center text-token-description-foreground hover:text-token-foreground`,
        "aria-label": o,
        children: s,
      })),
      (t[6] = o),
      (t[7] = c));
  let l;
  return (
    t[8] !== a || t[9] !== c
      ? ((l = (0, J.jsx)(T, {
          tooltipContent: a,
          side: `top`,
          align: `center`,
          interactive: !0,
          tooltipClassName: `max-w-md text-center`,
          children: c,
        })),
        (t[8] = a),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function Dt(e) {
  let t = (0, q.c)(11),
    {
      children: n,
      open: r,
      onOpenChange: i,
      showDialogClose: a,
      size: o,
      contentClassName: s,
      contentProps: c,
      dialogCloseClassName: l,
    } = e,
    u = a === void 0 ? !0 : a,
    d = o === void 0 ? `default` : o,
    f;
  t[0] === s
    ? (f = t[1])
    : ((f = p(`flex max-h-[95vh] flex-col overflow-hidden`, s)),
      (t[0] = s),
      (t[1] = f));
  let m;
  return (
    t[2] !== n ||
    t[3] !== c ||
    t[4] !== l ||
    t[5] !== i ||
    t[6] !== r ||
    t[7] !== u ||
    t[8] !== d ||
    t[9] !== f
      ? ((m = (0, J.jsx)(N, {
          open: r,
          onOpenChange: i,
          showDialogClose: u,
          dialogCloseClassName: l,
          size: d,
          contentClassName: f,
          contentProps: c,
          children: n,
        })),
        (t[2] = n),
        (t[3] = c),
        (t[4] = l),
        (t[5] = i),
        (t[6] = r),
        (t[7] = u),
        (t[8] = d),
        (t[9] = f),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
function Ot(e) {
  let t = (0, q.c)(2),
    { onSelectTemplateDraft: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, J.jsx)(Ze, { columns: `two`, onSelectAction: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function kt(e) {
  let t = (0, q.c)(16),
    {
      composer: n,
      initialTemplatePickerOpen: r,
      onSelectTemplateDraft: i,
      reserveDialogCloseSpace: a,
    } = e,
    o = r === void 0 ? !1 : r,
    s = a === void 0 ? !1 : a,
    c = h(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = (e) => {
        let { isOverlayOpen: t, openOverlay: n, closeOverlay: r } = e,
          i = t
            ? c.formatMessage({
                id: `settings.automations.modal.collapse`,
                defaultMessage: `Collapse automation modal`,
                description: `Aria label for the automation modal button when leaving template mode`,
              })
            : c.formatMessage({
                id: `settings.automations.modal.expand`,
                defaultMessage: `Expand automation modal`,
                description: `Aria label for the automation modal button when entering template mode`,
              });
        return (0, J.jsx)(E, {
          type: `button`,
          "data-testid": `automation-template-toggle-button`,
          "aria-label": i,
          color: `outline`,
          size: `toolbar`,
          className: `shrink-0`,
          onClick: () => {
            if (t) {
              r();
              return;
            }
            n();
          },
          children: t
            ? (0, J.jsx)(g, {
                id: `settings.automations.modal.createNew`,
                defaultMessage: `Set up manually`,
                description: `Label for the automation modal button when template mode is active`,
              })
            : (0, J.jsx)(g, {
                id: `settings.automations.modal.useTemplate`,
                defaultMessage: `Use template`,
                description: `Label for the automation modal button when composer mode is active`,
              }),
        });
      }),
      (t[0] = c),
      (t[1] = l));
  let u = l,
    d;
  t[2] !== n || t[3] !== u
    ? ((d = (e) => {
        let { isOverlayOpen: t, openOverlay: r, closeOverlay: i } = e;
        return n(u({ isOverlayOpen: t, openOverlay: r, closeOverlay: i }));
      }),
      (t[2] = n),
      (t[3] = u),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === i
    ? (f = t[6])
    : ((f = (e) => {
        let { closeOverlayAndThen: t } = e;
        return (0, J.jsx)(`div`, {
          className: `flex h-full flex-col px-5 pt-[4rem] pb-4`,
          children: (0, J.jsx)(`div`, {
            className: `vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto`,
            children: (0, J.jsx)(Ot, {
              onSelectTemplateDraft: (e) => {
                t(() => {
                  i(e);
                });
              },
            }),
          }),
        });
      }),
      (t[5] = i),
      (t[6] = f));
  let m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, J.jsx)(`div`, {
        className: `px-5 pt-5 pb-3`,
        children: (0, J.jsx)(`div`, {
          className: `min-w-0 pr-32 text-lg leading-tight whitespace-nowrap text-token-foreground`,
          children: (0, J.jsx)(g, {
            id: `settings.automations.modal.templateTitle`,
            defaultMessage: `Automation templates`,
            description: `Title shown in the automation modal when template mode is active`,
          }),
        }),
      })),
      (t[7] = m))
    : (m = t[7]);
  let _;
  t[8] !== u || t[9] !== s
    ? ((_ = (e) => {
        let { isOverlayOpen: t, openOverlay: n, closeOverlay: r } = e;
        return t
          ? (0, J.jsx)(`div`, {
              className: p(`absolute top-5 z-20`, s ? `right-14` : `right-4`),
              children: u({
                isOverlayOpen: t,
                openOverlay: n,
                closeOverlay: r,
              }),
            })
          : null;
      }),
      (t[8] = u),
      (t[9] = s),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  return (
    t[11] !== o || t[12] !== d || t[13] !== f || t[14] !== _
      ? ((v = (0, J.jsx)(at, {
          initialOverlayOpen: o,
          baseContent: d,
          overlayContent: f,
          overlayHeader: m,
          overlayHeightOffset: ft,
          minHeight: dt,
          baseFadeDurationMs: pt,
          sizeDurationMs: mt,
          overlayFadeDurationMs: ht,
          overlayHeaderFadeDurationMs: gt,
          overlayHeaderClassName: `pointer-events-none`,
          children: _,
        })),
        (t[11] = o),
        (t[12] = d),
        (t[13] = f),
        (t[14] = _),
        (t[15] = v))
      : (v = t[15]),
    v
  );
}
function At(e) {
  let t = (0, q.c)(110),
    {
      draft: n,
      setDraft: i,
      canSave: o,
      isEditing: s,
      isSaving: c,
      onDelete: d,
      roots: f,
      formatRootLabel: m,
      workspaceGroups: _,
      onSubmit: b,
      onCancel: S,
      formId: k,
      variant: A,
      open: N,
      onOpenChange: L,
      forceShowNameInput: ee,
      dialogSize: R,
      expandPrompt: z,
      allowedKinds: te,
    } = e,
    B = A === void 0 ? `inline` : A,
    ne = R === void 0 ? `xxwide` : R,
    re = z === void 0 ? !1 : z,
    V = h(),
    ie = (0, Q.useRef)(null),
    ae = (0, Q.useRef)(null),
    oe = (0, Q.useId)(),
    se = ee ?? (!s || B === `dialog`),
    [H] = (0, Q.useState)(Pt),
    U;
  t[0] === n ? (U = t[1]) : ((U = Be(n)), (t[0] = n), (t[1] = U));
  let ce = U,
    le = n.cwds.length > 0 && !ce ? n.cwds : f,
    W = _e(H),
    ue = ye(H),
    G;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = { hostId: l }), (t[2] = G))
    : (G = t[2]);
  let de = w(G),
    { availablePlugins: K } = O(l, le),
    he;
  t[3] === K ? (he = t[4]) : ((he = fe(K)), (t[3] = K), (t[4] = he));
  let ge = he != null,
    xe;
  t[5] === ge
    ? (xe = t[6])
    : ((xe = { enabled: ge }), (t[5] = ge), (t[6] = xe));
  let { nativeApps: De } = pe(xe),
    { skills: Oe } = me(le),
    ke,
    Ae;
  (t[7] !== de || t[8] !== K || t[9] !== Oe || t[10] !== De || t[11] !== H
    ? ((Ae = () => {
        H.syncMentionMetadata({
          skills: Oe,
          apps: de,
          plugins: K,
          nativeApps: De,
        });
      }),
      (ke = [de, K, Oe, De, H]),
      (t[7] = de),
      (t[8] = K),
      (t[9] = Oe),
      (t[10] = De),
      (t[11] = H),
      (t[12] = ke),
      (t[13] = Ae))
    : ((ke = t[12]), (Ae = t[13])),
    (0, Q.useEffect)(Ae, ke));
  let je, Me;
  (t[14] !== n.prompt || t[15] !== H
    ? ((je = () => {
        H.getText() !== n.prompt && H.setPromptText(n.prompt);
      }),
      (Me = [n.prompt, H]),
      (t[14] = n.prompt),
      (t[15] = H),
      (t[16] = je),
      (t[17] = Me))
    : ((je = t[16]), (Me = t[17])),
    (0, Q.useEffect)(je, Me));
  let Le, Ve;
  (t[18] !== H || t[19] !== i
    ? ((Le = () =>
        Ce(H.view, () => {
          let e = H.getText();
          i((t) => (t.prompt === e ? t : { ...t, prompt: e }));
        })),
      (Ve = [H, i]),
      (t[18] = H),
      (t[19] = i),
      (t[20] = Le),
      (t[21] = Ve))
    : ((Le = t[20]), (Ve = t[21])),
    (0, Q.useEffect)(Le, Ve));
  let He;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = () => {
        ie.current?.requestSubmit();
      }),
      (t[22] = He))
    : (He = t[22]);
  let Ue = He,
    Ge,
    Y;
  if (t[23] !== m || t[24] !== V || t[25] !== f || t[26] !== _) {
    let e;
    t[29] === m
      ? (e = t[30])
      : ((e = (e, t) => m(e).localeCompare(m(t))), (t[29] = m), (t[30] = e));
    let n = [...f].sort(e),
      r;
    (t[31] === V
      ? (r = t[32])
      : ((r = V.formatMessage({
          id: `settings.automations.cwdPlaceholder`,
          defaultMessage: `Choose a folder`,
          description: `Placeholder for cwd select input`,
        })),
        (t[31] = V),
        (t[32] = r)),
      (Y = r),
      (Ge = Ee({ workspaceGroups: _, roots: n, formatRootLabel: m })),
      (t[23] = m),
      (t[24] = V),
      (t[25] = f),
      (t[26] = _),
      (t[27] = Ge),
      (t[28] = Y));
  } else ((Ge = t[27]), (Y = t[28]));
  let Ke = Ge,
    X;
  t[33] === V
    ? (X = t[34])
    : ((X = V.formatMessage({
        id: `settings.automations.projectDropdown.localOnlyTooltip`,
        defaultMessage: `Automations can only be created for local projects`,
        description: `Tooltip explaining why automation project options only include local projects when remote connections are connected`,
      })),
      (t[33] = V),
      (t[34] = X));
  let Z = X,
    { data: qe } = D(),
    { data: Je } = v(C, y(u)),
    Ye = x(`1488233300`),
    Xe = (te ?? (Ye ? [`cron`, `heartbeat`] : [`cron`])).includes(`heartbeat`),
    { options: Ze, hasPinnedThreads: Qe } = $e(n.targetThreadId),
    et = Je?.config.sandbox_mode === `read-only`,
    tt = Je?.config.sandbox_mode === `danger-full-access`,
    nt = n.scheduleConfig,
    rt = nt.mode,
    it;
  t[35] !== o || t[36] !== n || t[37] !== s
    ? ((it = o
        ? null
        : (0, J.jsx)(We, { draft: n, action: s ? `save` : `create` })),
      (t[35] = o),
      (t[36] = n),
      (t[37] = s),
      (t[38] = it))
    : (it = t[38]);
  let at = it,
    $ = n.kind === `heartbeat`,
    st;
  t[39] === n ? (st = t[40]) : ((st = Ne(n)), (t[39] = n), (t[40] = st));
  let dt = st,
    ft = Ie({ allowThreadDestination: Xe }),
    pt;
  t[41] === i
    ? (pt = t[42])
    : ((pt = (e) => {
        i((t) => ({
          ...t,
          rawRrule: null,
          scheduleConfig: e,
          scheduleDirty: !0,
        }));
      }),
      (t[41] = i),
      (t[42] = pt));
  let mt = pt,
    ht = B === `dialog` ? j : `div`,
    gt = B === `dialog` ? P : `div`,
    _t = B === `dialog` ? void 0 : `flex flex-col gap-4`,
    vt = re ? ut : B === `dialog` ? ct : lt,
    yt;
  t[43] !== oe || t[44] !== n.name || t[45] !== i
    ? ((yt = (e) =>
        (0, J.jsx)(Tt, {
          id: oe,
          autoFocus: e,
          value: n.name,
          onChange: (e) => {
            i((t) => ({ ...t, name: e }));
          },
        })),
      (t[43] = oe),
      (t[44] = n.name),
      (t[45] = i),
      (t[46] = yt))
    : (yt = t[46]);
  let bt = yt,
    xt = n.name.length > 0 || n.prompt.length > 0,
    St;
  t[47] === i
    ? (St = t[48])
    : ((St = () => {
        i(Nt);
      }),
      (t[47] = i),
      (t[48] = St));
  let Ct = St,
    wt,
    Ot;
  if (
    t[49] !== gt ||
    t[50] !== ht ||
    t[51] !== Z ||
    t[52] !== ft ||
    t[53] !== _t ||
    t[54] !== o ||
    t[55] !== Ct ||
    t[56] !== ne ||
    t[57] !== n.cwds ||
    t[58] !== n.model ||
    t[59] !== n.reasoningEffort ||
    t[60] !== n.targetThreadId ||
    t[61] !== k ||
    t[62] !== xt ||
    t[63] !== Qe ||
    t[64] !== Ze ||
    t[65] !== V ||
    t[66] !== ce ||
    t[67] !== tt ||
    t[68] !== s ||
    t[69] !== $ ||
    t[70] !== et ||
    t[71] !== c ||
    t[72] !== qe?.models ||
    t[73] !== W.addMention ||
    t[74] !== W.closeAutocomplete ||
    t[75] !== W.handleMentionEvent ||
    t[76] !== W.setSelectedMention ||
    t[77] !== W.ui ||
    t[78] !== le ||
    t[79] !== S ||
    t[80] !== d ||
    t[81] !== L ||
    t[82] !== b ||
    t[83] !== N ||
    t[84] !== H ||
    t[85] !== vt ||
    t[86] !== bt ||
    t[87] !== at ||
    t[88] !== nt ||
    t[89] !== rt ||
    t[90] !== dt ||
    t[91] !== i ||
    t[92] !== se ||
    t[93] !== ue ||
    t[94] !== mt ||
    t[95] !== B ||
    t[96] !== Ke ||
    t[97] !== Y
  ) {
    Ot = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = (e) =>
        (0, J.jsx)(`form`, {
          id: k,
          ref: ie,
          className: `flex flex-col gap-0`,
          onSubmit: b,
          children: (0, J.jsxs)(gt, {
            className: _t,
            children: [
              B === `dialog` && s
                ? (0, J.jsx)(ht, {
                    className: `gap-1`,
                    children: (0, J.jsx)(M, {
                      title: (0, J.jsx)(g, {
                        id: `settings.automations.dialog.editTitle`,
                        defaultMessage: `Edit automation`,
                        description: `Dialog title for editing an automation`,
                      }),
                      subtitle: null,
                    }),
                  })
                : null,
              B === `dialog` && !s && se
                ? (0, J.jsx)(ht, {
                    className: `gap-1`,
                    children: (0, J.jsxs)(`div`, {
                      className: `flex items-center justify-between gap-4`,
                      children: [
                        (0, J.jsx)(`div`, {
                          className: `min-w-0 flex-1`,
                          children: bt(!0),
                        }),
                        (0, J.jsxs)(`div`, {
                          className: `flex items-center gap-2 pr-10`,
                          children: [
                            (0, J.jsx)(Et, {
                              isReadOnlySandbox: et,
                              isDangerFullAccess: tt,
                            }),
                            xt
                              ? (0, J.jsx)(E, {
                                  color: `ghost`,
                                  size: `toolbar`,
                                  onClick: Ct,
                                  children: (0, J.jsx)(g, {
                                    id: `settings.automations.clear`,
                                    defaultMessage: `Clear`,
                                    description: `Button label for clearing the automation title and prompt`,
                                  }),
                                })
                              : null,
                            e,
                          ],
                        }),
                      ],
                    }),
                  })
                : null,
              se && B !== `dialog`
                ? (0, J.jsx)(ht, { className: ot, children: bt(!s) })
                : null,
              (0, J.jsx)(ht, {
                className: ot,
                children: (0, J.jsxs)(`div`, {
                  ref: ae,
                  className: `relative`,
                  children: [
                    (0, J.jsx)(we, {
                      anchorRef: ae,
                      composerController: H,
                      isActive: W.ui?.active ?? !1,
                      mentionUiState: W.ui,
                      placement: `bottom`,
                      portalRoot: `body`,
                      zIndexClassName: `z-[10000]`,
                      children: (0, J.jsx)(Se, {
                        hostId: l,
                        onAddContext: W.addMention,
                        onRequestClose: W.closeAutocomplete,
                        onUpdateSelectedMention: W.setSelectedMention,
                        query: W.ui?.query ?? ``,
                        roots: le,
                        skillRoots: le,
                        source: W.ui?.source ?? null,
                      }),
                    }),
                    (0, J.jsx)(be, {
                      autocomplete: ue,
                      roots: le,
                      composerController: H,
                      portalRoot: `body`,
                      zIndexClassName: `z-[10000]`,
                    }),
                    (0, J.jsx)(ve, {
                      className: vt,
                      composerController: H,
                      ariaLabel: V.formatMessage({
                        id: `settings.automations.promptLabel`,
                        defaultMessage: `Prompt`,
                        description: `Label for automation prompt input`,
                      }),
                      minHeight: `14rem`,
                      disableAutoFocus: se && !s,
                      placeholder: V.formatMessage({
                        id: `settings.automations.promptPlaceholder`,
                        defaultMessage: `Add prompt e.g. look for crashes in $sentry`,
                        description: `Placeholder text for automations prompt input`,
                      }),
                      onMentionHandler: W.handleMentionEvent,
                      onSkillMentionHandler: ue.handleMentionEvent,
                      onSubmit: Ue,
                    }),
                  ],
                }),
              }),
              B === `dialog`
                ? (0, J.jsx)(ht, {
                    children: (0, J.jsxs)(F, {
                      className: p(I, `min-w-0`),
                      children: [
                        s && d
                          ? (0, J.jsx)(E, {
                              color: `ghost`,
                              size: `toolbar`,
                              onClick: d,
                              children: (0, J.jsx)(g, {
                                id: `settings.automations.delete`,
                                defaultMessage: `Delete`,
                                description: `Button label for deleting an automation`,
                              }),
                            })
                          : null,
                        (0, J.jsxs)(`div`, {
                          className: `flex min-w-0 flex-1 items-center gap-2`,
                          children: [
                            ce
                              ? null
                              : (0, J.jsx)(Xt, {
                                  selectedId: dt,
                                  optionIds: ft,
                                  className: `shrink-0`,
                                  onSelect: (e) => {
                                    i((t) => Pe(t, e));
                                  },
                                  ariaLabel: V.formatMessage({
                                    id: `settings.automations.executionEnvironment.ariaLabel`,
                                    defaultMessage: `Execution environment`,
                                    description: `Aria label for execution environment dropdown`,
                                  }),
                                }),
                            $
                              ? (0, J.jsx)(Yt, {
                                  selectedThreadId: n.targetThreadId,
                                  options: Ze,
                                  hasPinnedThreads: Qe,
                                  className: `max-w-56 min-w-0 shrink`,
                                  onSelect: (e) => {
                                    i((t) =>
                                      ze({
                                        draft: t,
                                        threadId: e.threadId,
                                        title: e.title,
                                      }),
                                    );
                                  },
                                })
                              : (0, J.jsx)(Te, {
                                  selectedRoots: n.cwds,
                                  options: Ke,
                                  placeholder: Y,
                                  className: `max-w-56 min-w-0 shrink`,
                                  localOnlyTooltip: Z,
                                  onChange: (e) => {
                                    i((t) => Fe(t, e));
                                  },
                                }),
                            (0, J.jsx)(Rt, {
                              scheduleMode: rt,
                              scheduleConfig: nt,
                              className: `max-w-52 min-w-0 shrink`,
                              intervalStyle: $ ? `heartbeat` : `default`,
                              onUpdateScheduleDraft: mt,
                            }),
                            $
                              ? null
                              : (0, J.jsx)(qt, {
                                  selectedModel: n.model,
                                  className: `shrink-0`,
                                  showLabel: !1,
                                  showChevron: !1,
                                  onSelect: (e) => {
                                    i((t) => ({
                                      ...t,
                                      model: e,
                                      reasoningEffort: a({
                                        model: r(qe?.models ?? [], e),
                                        reasoningEffort: t.reasoningEffort,
                                      }),
                                    }));
                                  },
                                }),
                            $
                              ? null
                              : (0, J.jsx)(Jt, {
                                  model: n.model,
                                  reasoningEffort: n.reasoningEffort,
                                  className: `shrink-0`,
                                  showLabel: !1,
                                  showChevron: !1,
                                  onSelect: (e) => {
                                    i((t) => ({ ...t, reasoningEffort: e }));
                                  },
                                }),
                          ],
                        }),
                        (0, J.jsxs)(`div`, {
                          className: `flex shrink-0 items-center gap-2`,
                          children: [
                            (0, J.jsx)(E, {
                              color: `ghost`,
                              onClick: S,
                              children: (0, J.jsx)(g, {
                                id: `settings.automations.cancel`,
                                defaultMessage: `Cancel`,
                                description: `Cancel button label for automations dialog`,
                              }),
                            }),
                            (0, J.jsx)(T, {
                              tooltipContent: at,
                              disabled: o || c || at == null,
                              children: (0, J.jsx)(`span`, {
                                className: `inline-flex`,
                                children: (0, J.jsx)(E, {
                                  color: `primary`,
                                  type: `submit`,
                                  loading: c,
                                  disabled: !o,
                                  className: `disabled:cursor-default`,
                                  children: (0, J.jsx)(g, {
                                    id: `settings.automations.save`,
                                    defaultMessage: `Save`,
                                    description: `Save button label for automations dialog`,
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : null,
            ],
          }),
        });
      if (B === `dialog`) {
        let n = N ?? !1,
          r;
        t[100] === i
          ? (r = t[101])
          : ((r = (e) => {
              i((t) => Re(t, e));
            }),
            (t[100] = i),
            (t[101] = r));
        let a = r,
          o;
        t[102] === ue.ui?.active
          ? (o = t[103])
          : ((o = (e) => {
              ue.ui?.active && e.preventDefault();
            }),
            (t[102] = ue.ui?.active),
            (t[103] = o));
        let c = s ? void 0 : jt,
          l;
        t[104] === s
          ? (l = t[105])
          : ((l = s ? void 0 : { height: `auto` }), (t[104] = s), (t[105] = l));
        let u;
        (t[106] !== o || t[107] !== c || t[108] !== l
          ? ((u = { onEscapeKeyDown: o, onPointerDownOutside: c, style: l }),
            (t[106] = o),
            (t[107] = c),
            (t[108] = l),
            (t[109] = u))
          : (u = t[109]),
          (Ot = (0, J.jsx)(Dt, {
            open: n,
            onOpenChange: L ?? Mt,
            size: ne,
            dialogCloseClassName: s ? void 0 : `top-[22px]`,
            contentProps: u,
            children: s
              ? e()
              : (0, J.jsx)(kt, {
                  composer: e,
                  onSelectTemplateDraft: a,
                  reserveDialogCloseSpace: !0,
                }),
          })));
        break bb0;
      }
      wt = e();
    }
    ((t[49] = gt),
      (t[50] = ht),
      (t[51] = Z),
      (t[52] = ft),
      (t[53] = _t),
      (t[54] = o),
      (t[55] = Ct),
      (t[56] = ne),
      (t[57] = n.cwds),
      (t[58] = n.model),
      (t[59] = n.reasoningEffort),
      (t[60] = n.targetThreadId),
      (t[61] = k),
      (t[62] = xt),
      (t[63] = Qe),
      (t[64] = Ze),
      (t[65] = V),
      (t[66] = ce),
      (t[67] = tt),
      (t[68] = s),
      (t[69] = $),
      (t[70] = et),
      (t[71] = c),
      (t[72] = qe?.models),
      (t[73] = W.addMention),
      (t[74] = W.closeAutocomplete),
      (t[75] = W.handleMentionEvent),
      (t[76] = W.setSelectedMention),
      (t[77] = W.ui),
      (t[78] = le),
      (t[79] = S),
      (t[80] = d),
      (t[81] = L),
      (t[82] = b),
      (t[83] = N),
      (t[84] = H),
      (t[85] = vt),
      (t[86] = bt),
      (t[87] = at),
      (t[88] = nt),
      (t[89] = rt),
      (t[90] = dt),
      (t[91] = i),
      (t[92] = se),
      (t[93] = ue),
      (t[94] = mt),
      (t[95] = B),
      (t[96] = Ke),
      (t[97] = Y),
      (t[98] = wt),
      (t[99] = Ot));
  } else ((wt = t[98]), (Ot = t[99]));
  return Ot === Symbol.for(`react.early_return_sentinel`) ? wt : Ot;
}
function jt(e) {
  e.preventDefault();
}
function Mt() {}
function Nt(e) {
  return { ...e, name: ``, prompt: `` };
}
function Pt() {
  return xe(``, {
    defaultTextKind: `prompt`,
    enableFileMentions: !0,
    enableSkillMentions: !0,
    enterBehavior: `newline`,
  });
}
function Ft(e) {
  let t = (0, q.c)(3),
    { isReadOnlySandbox: n, isDangerFullAccess: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(`div`, {
            className: `flex flex-col gap-1`,
            children: (0, J.jsx)(`p`, {
              className: `text-token-error-foreground`,
              children: (0, J.jsx)(g, {
                id: `settings.automations.banner.danger`,
                defaultMessage: `Automations run with your default sandbox settings, which are currently set to Full Access. Running background automations with Full Access carries elevated risk, as Codex may modify files, run commands, and access network without asking. Consider updating sandbox settings to workspace write, and using <rulesDocsLink>rules</rulesDocsLink> to selectively define which commands the agent can run with full access.`,
                description: `Warning shown in the automation create modal when dangerous sandbox mode is enabled`,
                values: { rulesDocsLink: Lt },
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, J.jsx)(`div`, {
          className: `flex flex-col gap-1`,
          children: (0, J.jsx)(`p`, {
            children: n
              ? (0, J.jsx)(g, {
                  id: `settings.automations.banner.defaultHowTo.readOnly`,
                  defaultMessage: `Automations run with your default sandbox settings, which are set to read-only. Tool calls will fail if they require modifying files, accessing network, or working with apps on your computer. Consider updating sandbox settings to workspace write.`,
                  description: `Follow-up guidance shown in the automation create modal when default sandbox mode is read-only`,
                })
              : (0, J.jsx)(g, {
                  id: `settings.automations.banner.defaultHowTo.default`,
                  defaultMessage: `Automations run with your default sandbox settings. Tool calls will fail if they require modifying files outside the workspace, accessing network, or working with apps on your computer. You can selectively allowlist commands to run outside the sandbox using <rulesDocsLink>rules</rulesDocsLink>.`,
                  description: `Follow-up guidance shown in the automation create modal when default sandbox mode is workspace write`,
                  values: { rulesDocsLink: It },
                }),
          }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function It(e) {
  return (0, J.jsx)(`a`, {
    className: `text-token-link underline-offset-2 hover:underline`,
    href: ae,
    rel: `noreferrer`,
    target: `_blank`,
    children: Array.isArray(e) ? e.join(``) : e,
  });
}
function Lt(e) {
  return (0, J.jsx)(`a`, {
    className: `text-token-error-foreground underline underline-offset-2 hover:underline`,
    href: ae,
    rel: `noreferrer`,
    target: `_blank`,
    children: Array.isArray(e) ? e.join(``) : e,
  });
}
function Rt(e) {
  let t = (0, q.c)(88),
    {
      scheduleMode: n,
      scheduleConfig: r,
      align: i,
      className: a,
      showIcon: o,
      intervalStyle: s,
      onUpdateScheduleDraft: c,
    } = e,
    l = i === void 0 ? `start` : i,
    u = o === void 0 ? !0 : o,
    d = s === void 0 ? `default` : s,
    f = h(),
    m;
  t[0] !== f || t[1] !== r
    ? ((m = Kt({ scheduleConfig: r, intl: f })),
      (t[0] = f),
      (t[1] = r),
      (t[2] = m))
    : (m = t[2]);
  let _ = m,
    v = r.weekdays[0] ?? wt[0].id,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    D,
    O,
    k,
    A,
    j;
  if (
    t[3] !== l ||
    t[4] !== a ||
    t[5] !== d ||
    t[6] !== f ||
    t[7] !== c ||
    t[8] !== r ||
    t[9] !== n ||
    t[10] !== _ ||
    t[11] !== v ||
    t[12] !== u
  ) {
    let e = wt.find((e) => e.id === v) ?? wt[0],
      i;
    (t[25] !== c || t[26] !== r
      ? ((i = (e) => {
          c({ ...r, ...e });
        }),
        (t[25] = c),
        (t[26] = r),
        (t[27] = i))
      : (i = t[27]),
      (j = i));
    let o = d === `heartbeat`,
      s = o ? yt : vt,
      m = s.length > 1,
      h = o && n === `hourly`,
      M = n === `hourly` && o;
    x = n === `daily` || n === `weekdays` || n === `weekly`;
    let N = h ? (r.intervalMinutes ?? 30) : r.intervalHours,
      P;
    t[28] !== N || t[29] !== f || t[30] !== h
      ? ((P = h
          ? N === 1
            ? f.formatMessage({
                id: `settings.automations.scheduleIntervalMinuteSuffix`,
                defaultMessage: `minute`,
                description: `Singular suffix label for the heartbeat automation interval minutes input`,
              })
            : f.formatMessage({
                id: `settings.automations.scheduleIntervalMinutesSuffix`,
                defaultMessage: `minutes`,
                description: `Plural suffix label for the heartbeat automation interval minutes input`,
              })
          : f.formatMessage({
              id: `settings.automations.scheduleIntervalHoursSuffix`,
              defaultMessage: `hours`,
              description: `Suffix label for the automation interval hours input`,
            })),
        (t[28] = N),
        (t[29] = f),
        (t[30] = h),
        (t[31] = P))
      : (P = t[31]);
    let F = P,
      I;
    t[32] !== f || t[33] !== h
      ? ((I = h
          ? f.formatMessage({
              id: `settings.automations.scheduleIntervalMinutes`,
              defaultMessage: `Interval minutes`,
              description: `Accessible label for the heartbeat interval minutes input`,
            })
          : f.formatMessage({
              id: `settings.automations.scheduleIntervalHours`,
              defaultMessage: `Interval hours`,
              description: `Accessible label for the automation interval hours input`,
            })),
        (t[32] = f),
        (t[33] = h),
        (t[34] = I))
      : (I = t[34]);
    let L = I,
      ee =
        n === `custom`
          ? `!w-96 min-w-96`
          : o
            ? `!w-56 min-w-56`
            : `!w-40 min-w-40`;
    b = ue;
    let R;
    t[35] === a
      ? (R = t[36])
      : ((R = p(`min-w-0`, a)), (t[35] = a), (t[36] = R));
    let z;
    t[37] === u
      ? (z = t[38])
      : ((z = u ? (0, J.jsx)(H, { className: `icon-xs shrink-0` }) : null),
        (t[37] = u),
        (t[38] = z));
    let te;
    t[39] === _
      ? (te = t[40])
      : ((te = (0, J.jsx)(`span`, {
          className: `truncate text-left text-token-foreground`,
          children: _,
        })),
        (t[39] = _),
        (t[40] = te));
    let B;
    (t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((B = (0, J.jsx)(G, {
          className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
        })),
        (t[41] = B))
      : (B = t[41]),
      t[42] !== R || t[43] !== z || t[44] !== te
        ? ((w = (0, J.jsx)(le, {
            asChild: !0,
            children: (0, J.jsxs)(E, {
              color: `ghost`,
              size: `composerSm`,
              className: R,
              children: [z, te, B],
            }),
          })),
          (t[42] = R),
          (t[43] = z),
          (t[44] = te),
          (t[45] = w))
        : (w = t[45]),
      (y = W),
      (S = l),
      (C = ee),
      (T = `flex w-full flex-col gap-1`),
      t[46] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((D = (0, J.jsx)(U.Title, {
            children: (0, J.jsx)(g, {
              id: `settings.automations.schedulePopoverTitle`,
              defaultMessage: `Schedule`,
              description: `Header label above automation schedule controls`,
            }),
          })),
          (t[46] = D))
        : (D = t[46]),
      t[47] !== f ||
      t[48] !== c ||
      t[49] !== r ||
      t[50] !== n ||
      t[51] !== s ||
      t[52] !== m
        ? ((O = m
            ? (0, J.jsx)(Zt, {
                ariaLabel: f.formatMessage({
                  id: `settings.automations.scheduleModeLabel`,
                  defaultMessage: `Schedule type`,
                  description: `Aria label for schedule type dropdown`,
                }),
                className: `w-full`,
                options: s.map((e) => ({
                  id: e.id,
                  label: f.formatMessage(e.labelMessage),
                })),
                selectedId: n,
                selectedLabel: f.formatMessage(
                  (s.find((e) => e.id === n) ?? s[0]).labelMessage,
                ),
                onSelect: (e) => {
                  c(je(r, e));
                },
              })
            : null),
          (t[47] = f),
          (t[48] = c),
          (t[49] = r),
          (t[50] = n),
          (t[51] = s),
          (t[52] = m),
          (t[53] = O))
        : (O = t[53]),
      t[54] !== L ||
      t[55] !== F ||
      t[56] !== N ||
      t[57] !== h ||
      t[58] !== n ||
      t[59] !== M ||
      t[60] !== j
        ? ((k =
            n === `hourly` && M
              ? (0, J.jsxs)(`label`, {
                  className: `text-token-secondary flex items-center gap-2 px-[var(--padding-row-x)] text-sm`,
                  children: [
                    (0, J.jsx)(`span`, {
                      className: `shrink-0`,
                      children: (0, J.jsx)(g, {
                        id: `settings.automations.scheduleIntervalLabel`,
                        defaultMessage: `Every`,
                        description: `Label for the automation interval input`,
                      }),
                    }),
                    (0, J.jsx)(`input`, {
                      "aria-label": L,
                      className: p($, `w-20 text-sm`),
                      inputMode: `numeric`,
                      pattern: `[0-9]*`,
                      type: `text`,
                      defaultValue: String(N),
                      onChange: (e) => {
                        let t = e.currentTarget.value.replaceAll(/[^0-9]/g, ``);
                        if (((e.currentTarget.value = t), t.length === 0))
                          return;
                        if (h) {
                          let e = ke(Number(t));
                          if (e == null) return;
                          j({ intervalMinutes: e });
                          return;
                        }
                        let n = Oe(Number(t));
                        n != null && j({ intervalHours: n });
                      },
                      onBlur: (e) => {
                        e.currentTarget.value.length === 0 &&
                          (e.currentTarget.value = String(N));
                      },
                    }),
                    (0, J.jsx)(`span`, { className: `shrink-0`, children: F }),
                  ],
                })
              : null),
          (t[54] = L),
          (t[55] = F),
          (t[56] = N),
          (t[57] = h),
          (t[58] = n),
          (t[59] = M),
          (t[60] = j),
          (t[61] = k))
        : (k = t[61]),
      (A =
        n === `weekly`
          ? (0, J.jsx)(Zt, {
              ariaLabel: f.formatMessage({
                id: `settings.automations.scheduleWeekday`,
                defaultMessage: `Day`,
                description: `Accessible label for the weekly automation day selector`,
              }),
              className: `w-full`,
              options: wt.map((e) => ({
                id: e.id,
                label: f.formatMessage(e.longLabelMessage),
              })),
              selectedId: e.id,
              selectedLabel: f.formatMessage(e.longLabelMessage),
              onSelect: (e) => {
                j({ weekdays: [e] });
              },
            })
          : null),
      (t[3] = l),
      (t[4] = a),
      (t[5] = d),
      (t[6] = f),
      (t[7] = c),
      (t[8] = r),
      (t[9] = n),
      (t[10] = _),
      (t[11] = v),
      (t[12] = u),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C),
      (t[18] = w),
      (t[19] = T),
      (t[20] = D),
      (t[21] = O),
      (t[22] = k),
      (t[23] = A),
      (t[24] = j));
  } else
    ((y = t[13]),
      (b = t[14]),
      (x = t[15]),
      (S = t[16]),
      (C = t[17]),
      (w = t[18]),
      (T = t[19]),
      (D = t[20]),
      (O = t[21]),
      (k = t[22]),
      (A = t[23]),
      (j = t[24]));
  let M;
  t[62] !== r.time || t[63] !== x || t[64] !== j
    ? ((M = x
        ? (0, J.jsx)(zt, {
            value: r.time,
            onChange: (e) => {
              j({ time: e });
            },
          })
        : null),
      (t[62] = r.time),
      (t[63] = x),
      (t[64] = j),
      (t[65] = M))
    : (M = t[65]);
  let N;
  t[66] !== f || t[67] !== r.customRrule || t[68] !== n || t[69] !== j
    ? ((N =
        n === `custom`
          ? (0, J.jsx)(`input`, {
              "aria-label": f.formatMessage({
                id: `settings.automations.scheduleCustomLabel`,
                defaultMessage: `Custom RRULE`,
                description: `Accessible label for the custom RRULE automation schedule editor`,
              }),
              className: p($, `w-full text-sm font-mono`),
              placeholder: f.formatMessage({
                id: `settings.automations.scheduleCustomPlaceholder`,
                defaultMessage: `RRULE:FREQ=MONTHLY;BYMONTHDAY=1;BYHOUR=9;BYMINUTE=0`,
                description: `Placeholder text for the custom automation RRULE editor`,
              }),
              spellCheck: !1,
              value: r.customRrule,
              onChange: (e) => {
                j({ customRrule: e.currentTarget.value });
              },
            })
          : null),
      (t[66] = f),
      (t[67] = r.customRrule),
      (t[68] = n),
      (t[69] = j),
      (t[70] = N))
    : (N = t[70]);
  let P;
  t[71] !== M ||
  t[72] !== N ||
  t[73] !== T ||
  t[74] !== D ||
  t[75] !== O ||
  t[76] !== k ||
  t[77] !== A
    ? ((P = (0, J.jsxs)(`div`, { className: T, children: [D, O, k, A, M, N] })),
      (t[71] = M),
      (t[72] = N),
      (t[73] = T),
      (t[74] = D),
      (t[75] = O),
      (t[76] = k),
      (t[77] = A),
      (t[78] = P))
    : (P = t[78]);
  let F;
  t[79] !== y || t[80] !== S || t[81] !== C || t[82] !== P
    ? ((F = (0, J.jsx)(y, { align: S, className: C, children: P })),
      (t[79] = y),
      (t[80] = S),
      (t[81] = C),
      (t[82] = P),
      (t[83] = F))
    : (F = t[83]);
  let I;
  return (
    t[84] !== b || t[85] !== w || t[86] !== F
      ? ((I = (0, J.jsxs)(b, { children: [w, F] })),
        (t[84] = b),
        (t[85] = w),
        (t[86] = F),
        (t[87] = I))
      : (I = t[87]),
    I
  );
}
function zt(e) {
  let t = (0, q.c)(32),
    { value: n, onChange: r } = e,
    i = h(),
    [a, o] = (0, Q.useState)(!1),
    s;
  t[0] === n ? (s = t[1]) : ((s = Wt(n)), (t[0] = n), (t[1] = s));
  let c = s,
    l;
  t[2] === i
    ? (l = t[3])
    : ((l = i.formatMessage({
        id: `settings.automations.scheduleTime`,
        defaultMessage: `Time`,
        description: `Accessible label for the automation schedule time input`,
      })),
      (t[2] = i),
      (t[3] = l));
  let u = l,
    d;
  t[4] !== i || t[5] !== a
    ? ((d = a
        ? i.formatMessage({
            id: `settings.automations.hideTimePicker`,
            defaultMessage: `Hide time picker`,
            description: `Accessible label for closing the schedule time picker`,
          })
        : i.formatMessage({
            id: `settings.automations.showTimePicker`,
            defaultMessage: `Show time picker`,
            description: `Accessible label for opening the schedule time picker`,
          })),
      (t[4] = i),
      (t[5] = a),
      (t[6] = d))
    : (d = t[6]);
  let f = d,
    m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = p(
        $,
        `w-full !pr-8 text-sm [&::-webkit-calendar-picker-indicator]:hidden`,
      )),
      (t[7] = m))
    : (m = t[7]);
  let g;
  t[8] === r
    ? (g = t[9])
    : ((g = (e) => {
        r(e.target.value);
      }),
      (t[8] = r),
      (t[9] = g));
  let _;
  t[10] !== u || t[11] !== g || t[12] !== n
    ? ((_ = (0, J.jsx)(`input`, {
        "aria-label": u,
        className: m,
        type: `time`,
        value: n,
        onChange: g,
      })),
      (t[10] = u),
      (t[11] = g),
      (t[12] = n),
      (t[13] = _))
    : (_ = t[13]);
  let v = a ? `ghostActive` : `ghost`,
    y,
    b;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        o(Ut);
      }),
      (b = (0, J.jsx)(H, { className: `icon-2xs` })),
      (t[14] = y),
      (t[15] = b))
    : ((y = t[14]), (b = t[15]));
  let x;
  t[16] !== a || t[17] !== v || t[18] !== f
    ? ((x = (0, J.jsx)(E, {
        "aria-label": f,
        "aria-expanded": a,
        color: v,
        className: `absolute top-1/2 right-[5px] -translate-y-1/2`,
        size: `icon`,
        onClick: y,
        children: b,
      })),
      (t[16] = a),
      (t[17] = v),
      (t[18] = f),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== x || t[21] !== _
    ? ((S = (0, J.jsxs)(`div`, {
        className: `relative w-full`,
        children: [_, x],
      })),
      (t[20] = x),
      (t[21] = _),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== i || t[24] !== a || t[25] !== r || t[26] !== c || t[27] !== n
    ? ((C = a
        ? (0, J.jsx)(`div`, {
            className: `overflow-y-scroll overscroll-contain rounded-lg border border-token-border bg-token-input-background/70 p-1`,
            style: {
              maxHeight: `min(14rem, max(3.5rem, calc(var(--radix-popover-content-available-height) - 9rem)))`,
            },
            onWheel: Ht,
            children: St.map((e) => {
              let t = Gt(e, i);
              return (0, J.jsx)(
                `button`,
                {
                  ref: e === c ? Vt : void 0,
                  type: `button`,
                  "aria-label": i.formatMessage(
                    {
                      id: `settings.automations.timePicker.setTime`,
                      defaultMessage: `Set time to {time}`,
                      description: `Accessible label for selecting a time in the schedule time picker`,
                    },
                    { time: t },
                  ),
                  "aria-pressed": e === n,
                  className: p(
                    `cursor-interaction flex h-7 w-full items-center rounded-md px-2 text-left text-sm tabular-nums outline-none focus:bg-token-list-hover-background`,
                    e === n
                      ? `bg-token-list-hover-background text-token-foreground`
                      : `text-token-secondary hover:bg-token-list-hover-background`,
                  ),
                  onMouseDown: Bt,
                  onClick: () => {
                    (r(e), o(!1));
                  },
                  children: t,
                },
                e,
              );
            }),
          })
        : null),
      (t[23] = i),
      (t[24] = a),
      (t[25] = r),
      (t[26] = c),
      (t[27] = n),
      (t[28] = C))
    : (C = t[28]);
  let w;
  return (
    t[29] !== S || t[30] !== C
      ? ((w = (0, J.jsxs)(`div`, {
          className: `flex w-full flex-col gap-1`,
          children: [S, C],
        })),
        (t[29] = S),
        (t[30] = C),
        (t[31] = w))
      : (w = t[31]),
    w
  );
}
function Bt(e) {
  e.preventDefault();
}
function Vt(e) {
  e?.scrollIntoView({ block: `center`, inline: `nearest` });
}
function Ht(e) {
  e.stopPropagation();
}
function Ut(e) {
  return !e;
}
function Wt(e) {
  let t = Ae(e);
  if (!t) return null;
  let n = t.hour * 60 + t.minute,
    r = (Math.floor(n / xt) * xt) % bt;
  return Me(Math.floor(r / 60), r % 60);
}
function Gt(e, t) {
  let n = Ae(e);
  return n
    ? t.formatTime(new Date(2024, 0, 1, n.hour, n.minute), {
        hour: `numeric`,
        minute: `2-digit`,
      })
    : e;
}
function Kt({ scheduleConfig: e, intl: t }) {
  if (e.mode === `custom`)
    return t.formatMessage({
      id: `settings.automations.scheduleMode.custom`,
      defaultMessage: `Custom`,
      description: `Dropdown label for a custom automation schedule`,
    });
  let n = t.formatMessage({
    id: `settings.automations.rruleSummaryFallback`,
    defaultMessage: `Custom schedule`,
    description: `Fallback label when RRULE summary cannot be generated`,
  });
  return De(e, t) ?? n;
}
function qt(e) {
  let t = (0, q.c)(34),
    {
      selectedModel: n,
      align: r,
      className: i,
      showLabel: a,
      showIcon: o,
      showChevron: s,
      onSelect: c,
    } = e,
    l = r === void 0 ? `start` : r,
    u = a === void 0 ? !0 : a,
    d = o === void 0 ? !0 : o,
    f = s === void 0 ? !0 : s,
    m = h(),
    { data: _ } = D(),
    v;
  t[0] === m.locale
    ? (v = t[1])
    : ((v = A(m.locale)), (t[0] = m.locale), (t[1] = v));
  let y = v,
    b = _?.models == null,
    x;
  t[2] === m
    ? (x = t[3])
    : ((x = m.formatMessage({
        id: `settings.automations.model.ariaLabel`,
        defaultMessage: `Model`,
        description: `Aria label for automation model dropdown`,
      })),
      (t[2] = m),
      (t[3] = x));
  let S;
  t[4] === i ? (S = t[5]) : ((S = p(`min-w-0`, i)), (t[4] = i), (t[5] = S));
  let C;
  t[6] === d
    ? (C = t[7])
    : ((C = d ? (0, J.jsx)(B, { className: `icon-xs shrink-0` }) : null),
      (t[6] = d),
      (t[7] = C));
  let w;
  t[8] !== m || t[9] !== _?.models || t[10] !== n || t[11] !== u
    ? ((w = u
        ? (0, J.jsx)(`span`, {
            className: `truncate text-left text-token-foreground`,
            children:
              n != null && n.trim().length > 0
                ? Ue({ model: n, models: _?.models })
                : m.formatMessage({
                    id: `settings.automations.model.loading`,
                    defaultMessage: `Loading model`,
                    description: `Fallback label while automation model options are loading`,
                  }),
          })
        : null),
      (t[8] = m),
      (t[9] = _?.models),
      (t[10] = n),
      (t[11] = u),
      (t[12] = w))
    : (w = t[12]);
  let T;
  t[13] === f
    ? (T = t[14])
    : ((T = f
        ? (0, J.jsx)(G, {
            className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
          })
        : null),
      (t[13] = f),
      (t[14] = T));
  let O;
  t[15] !== w || t[16] !== T || t[17] !== x || t[18] !== S || t[19] !== C
    ? ((O = (0, J.jsxs)(E, {
        "aria-label": x,
        size: `composerSm`,
        color: `ghost`,
        className: S,
        children: [C, w, T],
      })),
      (t[15] = w),
      (t[16] = T),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C),
      (t[20] = O))
    : (O = t[20]);
  let k;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, J.jsx)(U.Title, {
        children: (0, J.jsx)(g, {
          id: `settings.automations.model.title`,
          defaultMessage: `Model`,
          description: `Header label above automation model options`,
        }),
      })),
      (t[21] = k))
    : (k = t[21]);
  let j;
  t[22] !== _?.models || t[23] !== c || t[24] !== n || t[25] !== y
    ? ((j = _?.models.map((e) =>
        (0, J.jsx)(
          U.Item,
          {
            LeftIcon: B,
            RightIcon: e.model === n ? ie : void 0,
            tooltipText: y ? (e.description ?? void 0) : void 0,
            onSelect: () => {
              c(e.model);
            },
            children: (0, J.jsx)(`span`, {
              className: `truncate`,
              children: re(e.displayName || e.model),
            }),
          },
          e.model,
        ),
      )),
      (t[22] = _?.models),
      (t[23] = c),
      (t[24] = n),
      (t[25] = y),
      (t[26] = j))
    : (j = t[26]);
  let M;
  t[27] === j
    ? (M = t[28])
    : ((M = (0, J.jsx)(U.Section, {
        className: `flex flex-col [--edge-fade-distance:1.5rem]`,
        children: j,
      })),
      (t[27] = j),
      (t[28] = M));
  let N;
  return (
    t[29] !== l || t[30] !== O || t[31] !== M || t[32] !== b
      ? ((N = (0, J.jsxs)(ce, {
          align: l,
          contentWidth: `workspace`,
          contentMaxHeight: `tall`,
          disabled: b,
          triggerButton: O,
          children: [k, M],
        })),
        (t[29] = l),
        (t[30] = O),
        (t[31] = M),
        (t[32] = b),
        (t[33] = N))
      : (N = t[33]),
    N
  );
}
function Jt(e) {
  let t = (0, q.c)(65),
    {
      model: n,
      reasoningEffort: i,
      align: s,
      className: c,
      showLabel: l,
      showIcon: u,
      showChevron: d,
      onSelect: f,
    } = e,
    m = s === void 0 ? `start` : s,
    _ = l === void 0 ? !0 : l,
    v = u === void 0 ? !0 : u,
    y = d === void 0 ? !0 : d,
    b = h(),
    { data: x } = D(),
    S;
  t[0] !== x?.models || t[1] !== n || t[2] !== i
    ? ((S = a({ model: r(x?.models ?? [], n), reasoningEffort: i })),
      (t[0] = x?.models),
      (t[1] = n),
      (t[2] = i),
      (t[3] = S))
    : (S = t[3]);
  let C = S,
    w = C == null ? R : _t[C],
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I;
  if (
    t[4] !== w ||
    t[5] !== m ||
    t[6] !== c ||
    t[7] !== b ||
    t[8] !== x?.models ||
    t[9] !== n ||
    t[10] !== f ||
    t[11] !== C ||
    t[12] !== y ||
    t[13] !== v ||
    t[14] !== _
  ) {
    let e = o(x?.models ?? [], n),
      r;
    t[24] === C
      ? (r = t[25])
      : ((r =
          C == null
            ? (0, J.jsx)(g, {
                id: `settings.automations.reasoning.loading`,
                defaultMessage: `Loading reasoning`,
                description: `Fallback label while automation reasoning options are loading`,
              })
            : (0, J.jsx)(g, {
                id: `settings.automations.reasoning.compactTooltip`,
                defaultMessage: `{reasoning} reasoning`,
                description: `Tooltip shown for the compact automation reasoning trigger`,
                values: { reasoning: (0, J.jsx)(z, { effort: C }) },
              })),
        (t[24] = C),
        (t[25] = r));
    let i = r,
      a;
    t[26] === b
      ? (a = t[27])
      : ((a = b.formatMessage({
          id: `settings.automations.reasoning.ariaLabel`,
          defaultMessage: `Reasoning`,
          description: `Aria label for automation reasoning effort dropdown`,
        })),
        (t[26] = b),
        (t[27] = a));
    let s;
    t[28] === c
      ? (s = t[29])
      : ((s = p(`min-w-0`, c)), (t[28] = c), (t[29] = s));
    let l;
    t[30] !== w || t[31] !== v
      ? ((l = v ? (0, J.jsx)(w, { className: `icon-xs shrink-0` }) : null),
        (t[30] = w),
        (t[31] = v),
        (t[32] = l))
      : (l = t[32]);
    let u;
    t[33] !== b || t[34] !== C || t[35] !== _
      ? ((u = _
          ? (0, J.jsx)(`span`, {
              className: `truncate text-left text-token-foreground`,
              children:
                C == null
                  ? b.formatMessage({
                      id: `settings.automations.reasoning.loading`,
                      defaultMessage: `Loading reasoning`,
                      description: `Fallback label while automation reasoning options are loading`,
                    })
                  : (0, J.jsx)(z, { effort: C }),
            })
          : null),
        (t[33] = b),
        (t[34] = C),
        (t[35] = _),
        (t[36] = u))
      : (u = t[36]);
    let d;
    t[37] === y
      ? (d = t[38])
      : ((d = y
          ? (0, J.jsx)(G, {
              className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
            })
          : null),
        (t[37] = y),
        (t[38] = d));
    let h;
    t[39] !== a || t[40] !== s || t[41] !== l || t[42] !== u || t[43] !== d
      ? ((h = (0, J.jsxs)(E, {
          "aria-label": a,
          size: `composerSm`,
          color: `ghost`,
          className: s,
          children: [l, u, d],
        })),
        (t[39] = a),
        (t[40] = s),
        (t[41] = l),
        (t[42] = u),
        (t[43] = d),
        (t[44] = h))
      : (h = t[44]);
    let S = h;
    ((k = ce),
      (F = m),
      (I = `sm`),
      (A = n == null || e.length === 0),
      t[45] !== i || t[46] !== _ || t[47] !== S
        ? ((j = _ ? S : (0, J.jsx)(T, { tooltipContent: i, children: S })),
          (t[45] = i),
          (t[46] = _),
          (t[47] = S),
          (t[48] = j))
        : (j = t[48]),
      t[49] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((M = (0, J.jsx)(U.Title, {
            children: (0, J.jsx)(g, {
              id: `settings.automations.reasoning.title`,
              defaultMessage: `Reasoning`,
              description: `Header label above automation reasoning options`,
            }),
          })),
          (t[49] = M))
        : (M = t[49]),
      (O = U.Section),
      (N = `flex flex-col [--edge-fade-distance:1.5rem]`));
    let D;
    (t[50] !== f || t[51] !== C
      ? ((D = (e) => {
          let t = _t[e.reasoningEffort];
          return (0, J.jsx)(
            U.Item,
            {
              LeftIcon: t,
              RightIcon: e.reasoningEffort === C ? ie : void 0,
              onSelect: () => {
                f(e.reasoningEffort);
              },
              children: (0, J.jsx)(z, { effort: e.reasoningEffort }),
            },
            e.reasoningEffort,
          );
        }),
        (t[50] = f),
        (t[51] = C),
        (t[52] = D))
      : (D = t[52]),
      (P = e.map(D)),
      (t[4] = w),
      (t[5] = m),
      (t[6] = c),
      (t[7] = b),
      (t[8] = x?.models),
      (t[9] = n),
      (t[10] = f),
      (t[11] = C),
      (t[12] = y),
      (t[13] = v),
      (t[14] = _),
      (t[15] = O),
      (t[16] = k),
      (t[17] = A),
      (t[18] = j),
      (t[19] = M),
      (t[20] = N),
      (t[21] = P),
      (t[22] = F),
      (t[23] = I));
  } else
    ((O = t[15]),
      (k = t[16]),
      (A = t[17]),
      (j = t[18]),
      (M = t[19]),
      (N = t[20]),
      (P = t[21]),
      (F = t[22]),
      (I = t[23]));
  let L;
  t[53] !== O || t[54] !== N || t[55] !== P
    ? ((L = (0, J.jsx)(O, { className: N, children: P })),
      (t[53] = O),
      (t[54] = N),
      (t[55] = P),
      (t[56] = L))
    : (L = t[56]);
  let ee;
  return (
    t[57] !== k ||
    t[58] !== A ||
    t[59] !== j ||
    t[60] !== M ||
    t[61] !== L ||
    t[62] !== F ||
    t[63] !== I
      ? ((ee = (0, J.jsxs)(k, {
          align: F,
          contentWidth: I,
          disabled: A,
          triggerButton: j,
          children: [M, L],
        })),
        (t[57] = k),
        (t[58] = A),
        (t[59] = j),
        (t[60] = M),
        (t[61] = L),
        (t[62] = F),
        (t[63] = I),
        (t[64] = ee))
      : (ee = t[64]),
    ee
  );
}
function Yt(e) {
  let t = (0, q.c)(41),
    {
      selectedThreadId: n,
      options: r,
      hasPinnedThreads: i,
      align: a,
      className: o,
      showIcon: s,
      disabled: c,
      onSelect: l,
    } = e,
    u = a === void 0 ? `start` : a,
    d = s === void 0 ? !0 : s,
    f = c === void 0 ? !1 : c,
    m = h(),
    _ = f || r.length === 0,
    v;
  t[0] !== r || t[1] !== n
    ? ((v = r.find((e) => e.threadId === n) ?? null),
      (t[0] = r),
      (t[1] = n),
      (t[2] = v))
    : (v = t[2]);
  let y = v,
    b;
  t[3] !== m || t[4] !== y?.title
    ? ((b =
        y?.title ??
        m.formatMessage({
          id: `settings.automations.heartbeatThread.placeholder`,
          defaultMessage: `Choose a pinned chat`,
          description: `Placeholder for heartbeat automation thread selector`,
        })),
      (t[3] = m),
      (t[4] = y?.title),
      (t[5] = b))
    : (b = t[5]);
  let x = b,
    S;
  t[6] === m
    ? (S = t[7])
    : ((S = m.formatMessage({
        id: `settings.automations.heartbeatThread.ariaLabel`,
        defaultMessage: `Target chat`,
        description: `Aria label for heartbeat automation thread selector`,
      })),
      (t[6] = m),
      (t[7] = S));
  let C;
  t[8] === o ? (C = t[9]) : ((C = p(`min-w-0`, o)), (t[8] = o), (t[9] = C));
  let w;
  t[10] === d
    ? (w = t[11])
    : ((w = d ? (0, J.jsx)(K, { className: `icon-xs shrink-0` }) : null),
      (t[10] = d),
      (t[11] = w));
  let T;
  t[12] === x
    ? (T = t[13])
    : ((T = (0, J.jsx)(`span`, {
        className: `truncate text-left text-token-foreground`,
        children: x,
      })),
      (t[12] = x),
      (t[13] = T));
  let D;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, J.jsx)(G, {
        className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
      })),
      (t[14] = D))
    : (D = t[14]);
  let O;
  t[15] !== _ || t[16] !== S || t[17] !== C || t[18] !== w || t[19] !== T
    ? ((O = (0, J.jsxs)(E, {
        "aria-label": S,
        size: `composerSm`,
        color: `ghost`,
        className: C,
        disabled: _,
        children: [w, T, D],
      })),
      (t[15] = _),
      (t[16] = S),
      (t[17] = C),
      (t[18] = w),
      (t[19] = T),
      (t[20] = O))
    : (O = t[20]);
  let k;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, J.jsx)(U.Title, {
        children: (0, J.jsx)(g, {
          id: `settings.automations.heartbeatThread.title`,
          defaultMessage: `Target chat`,
          description: `Header label above heartbeat automation thread options`,
        }),
      })),
      (t[21] = k))
    : (k = t[21]);
  let A;
  if (t[22] !== m || t[23] !== l || t[24] !== r || t[25] !== n) {
    let e;
    (t[27] !== m || t[28] !== l || t[29] !== n
      ? ((e = (e) =>
          (0, J.jsx)(
            U.Item,
            {
              LeftIcon: K,
              RightIcon: e.threadId === n ? ie : void 0,
              disabled: e.isUnavailable,
              onSelect: () => {
                l(e);
              },
              children: (0, J.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-1`,
                children: [
                  (0, J.jsx)(`span`, {
                    className: `truncate`,
                    children: e.title,
                  }),
                  e.isPinned
                    ? null
                    : (0, J.jsx)(`span`, {
                        className: `truncate text-sm text-token-description-foreground`,
                        children: (0, J.jsx)(g, {
                          id: `settings.automations.heartbeatThread.unpinned`,
                          defaultMessage: `unpinned`,
                          description: `Label for a selected heartbeat thread that is no longer pinned`,
                        }),
                      }),
                  e.createdAt == null
                    ? null
                    : (0, J.jsx)(`span`, {
                        className: `truncate text-sm text-token-description-foreground`,
                        children: m.formatDate(new Date(e.createdAt), {
                          dateStyle: `medium`,
                        }),
                      }),
                ],
              }),
            },
            e.threadId,
          )),
        (t[27] = m),
        (t[28] = l),
        (t[29] = n),
        (t[30] = e))
      : (e = t[30]),
      (A = r.map(e)),
      (t[22] = m),
      (t[23] = l),
      (t[24] = r),
      (t[25] = n),
      (t[26] = A));
  } else A = t[26];
  let j;
  t[31] === i
    ? (j = t[32])
    : ((j = i
        ? null
        : (0, J.jsx)(`div`, {
            className: `text-token-muted-foreground px-3 py-2 text-sm`,
            children: (0, J.jsx)(g, {
              id: `settings.automations.heartbeatThread.empty`,
              defaultMessage: `Pin a local chat first to use heartbeat automations`,
              description: `Empty-state label when no pinned local threads are available for heartbeat automations`,
            }),
          })),
      (t[31] = i),
      (t[32] = j));
  let M;
  t[33] !== A || t[34] !== j
    ? ((M = (0, J.jsxs)(U.Section, {
        className: `flex flex-col [--edge-fade-distance:1.5rem]`,
        children: [A, j],
      })),
      (t[33] = A),
      (t[34] = j),
      (t[35] = M))
    : (M = t[35]);
  let N;
  return (
    t[36] !== u || t[37] !== _ || t[38] !== O || t[39] !== M
      ? ((N = (0, J.jsxs)(ce, {
          align: u,
          contentWidth: `workspace`,
          contentMaxHeight: `tall`,
          disabled: _,
          triggerButton: O,
          children: [k, M],
        })),
        (t[36] = u),
        (t[37] = _),
        (t[38] = O),
        (t[39] = M),
        (t[40] = N))
      : (N = t[40]),
    N
  );
}
function Xt(e) {
  let t = (0, q.c)(41),
    {
      selectedId: n,
      optionIds: r,
      align: i,
      className: a,
      showLabel: o,
      showIcon: s,
      ariaLabel: c,
      onSelect: l,
    } = e,
    u = i === void 0 ? `start` : i,
    d = o === void 0 ? !0 : o,
    f = s === void 0 ? !0 : s,
    m = h(),
    _,
    v,
    y,
    b,
    x,
    S,
    C;
  if (
    t[0] !== u ||
    t[1] !== c ||
    t[2] !== a ||
    t[3] !== m ||
    t[4] !== l ||
    t[5] !== r ||
    t[6] !== n ||
    t[7] !== f ||
    t[8] !== d
  ) {
    let e;
    t[16] === r
      ? (e = t[17])
      : ((e = (e) => r?.includes(e.id) ?? !0), (t[16] = r), (t[17] = e));
    let i = Ct.filter(e),
      o = i.find((e) => e.id === n) ?? Ct.find((e) => e.id === n) ?? i[0],
      s = o.icon,
      h = m.formatMessage(
        {
          id: `settings.automations.executionEnvironment.compactTooltip`,
          defaultMessage: `Run in {environment}`,
          description: `Tooltip shown for the compact automation execution environment trigger`,
        },
        { environment: m.formatMessage(o.labelMessage) },
      ),
      w;
    t[18] === a
      ? (w = t[19])
      : ((w = p(`min-w-0`, a)), (t[18] = a), (t[19] = w));
    let D = f ? (0, J.jsx)(s, { className: `icon-xs shrink-0` }) : null,
      O = d
        ? (0, J.jsx)(`span`, {
            className: `truncate text-left text-token-foreground`,
            children: m.formatMessage(o.labelMessage),
          })
        : null,
      k;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((k = (0, J.jsx)(G, {
          className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
        })),
        (t[20] = k))
      : (k = t[20]);
    let A;
    t[21] !== c || t[22] !== w || t[23] !== D || t[24] !== O
      ? ((A = (0, J.jsxs)(E, {
          "aria-label": c,
          size: `composerSm`,
          color: `ghost`,
          className: w,
          children: [D, O, k],
        })),
        (t[21] = c),
        (t[22] = w),
        (t[23] = D),
        (t[24] = O),
        (t[25] = A))
      : (A = t[25]);
    let j = A;
    ((_ = ce),
      (x = u),
      (S = `sm`),
      (C = d ? j : (0, J.jsx)(T, { tooltipContent: h, children: j })),
      (v = `flex flex-col`),
      t[26] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((y = (0, J.jsx)(U.Title, {
            children: (0, J.jsx)(g, {
              id: `settings.automations.executionEnvironment.menuTitle`,
              defaultMessage: `Run in`,
              description: `Header label above automation execution environment options`,
            }),
          })),
          (t[26] = y))
        : (y = t[26]));
    let M;
    (t[27] !== m || t[28] !== l || t[29] !== n
      ? ((M = (e) => {
          let t = e.icon;
          return (0, J.jsx)(
            U.Item,
            {
              onSelect: () => {
                l(e.id);
              },
              LeftIcon: t,
              RightIcon: e.id === n ? ie : void 0,
              tooltipText: m.formatMessage(e.tooltipMessage),
              children: m.formatMessage(e.labelMessage),
            },
            e.id,
          );
        }),
        (t[27] = m),
        (t[28] = l),
        (t[29] = n),
        (t[30] = M))
      : (M = t[30]),
      (b = i.map(M)),
      (t[0] = u),
      (t[1] = c),
      (t[2] = a),
      (t[3] = m),
      (t[4] = l),
      (t[5] = r),
      (t[6] = n),
      (t[7] = f),
      (t[8] = d),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C));
  } else
    ((_ = t[9]),
      (v = t[10]),
      (y = t[11]),
      (b = t[12]),
      (x = t[13]),
      (S = t[14]),
      (C = t[15]));
  let w;
  t[31] !== v || t[32] !== y || t[33] !== b
    ? ((w = (0, J.jsxs)(`div`, { className: v, children: [y, b] })),
      (t[31] = v),
      (t[32] = y),
      (t[33] = b),
      (t[34] = w))
    : (w = t[34]);
  let D;
  return (
    t[35] !== _ || t[36] !== w || t[37] !== x || t[38] !== S || t[39] !== C
      ? ((D = (0, J.jsx)(_, {
          align: x,
          contentWidth: S,
          triggerButton: C,
          children: w,
        })),
        (t[35] = _),
        (t[36] = w),
        (t[37] = x),
        (t[38] = S),
        (t[39] = C),
        (t[40] = D))
      : (D = t[40]),
    D
  );
}
function Zt(e) {
  let t = (0, q.c)(19),
    {
      ariaLabel: n,
      className: r,
      options: i,
      selectedId: a,
      selectedLabel: o,
      onSelect: s,
    } = e,
    c;
  t[0] === r
    ? (c = t[1])
    : ((c = p(
        $,
        `flex items-center justify-between gap-2 text-left text-sm`,
        r,
      )),
      (t[0] = r),
      (t[1] = c));
  let l;
  t[2] === o
    ? (l = t[3])
    : ((l = (0, J.jsx)(`span`, { className: `truncate`, children: o })),
      (t[2] = o),
      (t[3] = l));
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsx)(G, {
        className: `icon-xxs shrink-0 text-token-description-foreground`,
      })),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] !== n || t[6] !== c || t[7] !== l
    ? ((d = (0, J.jsxs)(`button`, {
        "aria-label": n,
        className: c,
        type: `button`,
        children: [l, u],
      })),
      (t[5] = n),
      (t[6] = c),
      (t[7] = l),
      (t[8] = d))
    : (d = t[8]);
  let f;
  if (t[9] !== s || t[10] !== i || t[11] !== a) {
    let e;
    (t[13] !== s || t[14] !== a
      ? ((e = (e) =>
          (0, J.jsx)(
            U.Item,
            {
              onSelect: () => {
                s(e.id);
              },
              RightIcon: e.id === a ? ie : void 0,
              children: e.label,
            },
            e.id,
          )),
        (t[13] = s),
        (t[14] = a),
        (t[15] = e))
      : (e = t[15]),
      (f = i.map(e)),
      (t[9] = s),
      (t[10] = i),
      (t[11] = a),
      (t[12] = f));
  } else f = t[12];
  let m;
  return (
    t[16] !== d || t[17] !== f
      ? ((m = (0, J.jsx)(ce, {
          contentWidth: `sm`,
          contentClassName: `w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)]`,
          triggerButton: d,
          children: f,
        })),
        (t[16] = d),
        (t[17] = f),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
export {
  Jt as a,
  Xt as c,
  $e as d,
  We as f,
  qt as i,
  Yt as l,
  Dt as n,
  Et as o,
  He as p,
  At as r,
  Tt as s,
  kt as t,
  Rt as u,
};
//# sourceMappingURL=automation-dialog.js.map
