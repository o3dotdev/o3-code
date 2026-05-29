import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  S as t,
  Tt as n,
  br as r,
  mn as i,
  st as a,
  ut as o,
  zn as s,
} from "./src-C.js";
import {
  Do as c,
  Ji as l,
  Js as u,
  No as d,
  Rs as f,
  To as p,
  Xi as m,
  Xs as h,
  aa as g,
  do as _,
  kn as v,
  ko as y,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as b, t as x } from "./jsx-runtime.js";
import { m as S, s as C } from "./shiki-highlight-provider-gate-BIldj-yk.js";
import { t as w } from "./clsx-BcPLHiun.js";
import {
  C as T,
  G as ee,
  J as E,
  L as D,
  S as O,
  U as k,
  X as A,
  Y as j,
  Z as M,
  _ as N,
  a as te,
  b as P,
  d as F,
  i as I,
  m as ne,
  p as L,
  u as R,
  w as z,
  wt as B,
  y as re,
} from "./setting-storage.js";
import { m as ie, n as ae } from "./chunk-LFPYN7LY.js";
import { r as oe, t as V } from "./product-logger-DusapRyT.js";
import { r as H } from "./toast-signal.js";
import { t as U } from "./tooltip-CDzchJxN.js";
import { t as W } from "./route-scope.js";
import { t as G } from "./use-collaboration-mode-CQFe-Ilp.js";
import { t as se } from "./button.js";
import { t as K } from "./spinner.js";
import { t as q } from "./link-external-BPZREBQk.js";
import { c as J } from "./use-permissions-mode.js";
import { t as ce } from "./proxy.js";
import { t as Y } from "./AnimatePresence-Dsr-oiZk.js";
import { t as le } from "./use-service-tier-settings.js";
import { t as ue } from "./x-C_RDKBp5.js";
import { c as X, i as de, s as fe, t as pe } from "./diff-view-mode.js";
import { i as me } from "./focus-composer.js";
import { t as he } from "./with-window.js";
import {
  a as ge,
  i as _e,
  l as ve,
  n as ye,
  r as be,
} from "./dialog-layout.js";
import { t as xe } from "./build-worktree-label-from-input.js";
import { r as Se } from "./pending-worktree-store-COXB8WW0.js";
import { n as Ce, t as we } from "./loading-page.js";
import { t as Te } from "./checkbox-DtuSNXXy.js";
import { r as Ee } from "./dropdown-DtQxMoJw.js";
import { t as De } from "./animations.js";
import { t as Oe } from "./chevron-NmAOI_v1.js";
import { t as ke } from "./format-relative-date-time.js";
import { t as Ae } from "./copy-to-clipboard-C2Mq2hN-.js";
import {
  c as je,
  i as Me,
  l as Ne,
  p as Pe,
  r as Fe,
  s as Ie,
} from "./pull-request-status-DcVXKzZN.js";
import { n as Le } from "./markdown-46SswYUq.js";
import { t as Re } from "./codex-BjFeJtxQ.js";
import { i as ze, n as Be, t as Ve } from "./pull-request-readonly-comment.js";
import { t as He } from "./format-short-local-date-time.js";
import { t as Ue } from "./pull-request-open.js";
import { t as We } from "./automation-queries-DCiNISnO.js";
import { t as Ge } from "./get-attached-heartbeat-automation-for-thread.js";
import { r as Ke } from "./local-environment-selection-DyGLYKsj.js";
import { t as qe } from "./arrow-up-fq4d26GH.js";
import { t as Je } from "./bullet-separator-DZkwhKzs.js";
import { t as Ye } from "./check-lg.js";
import { t as Xe } from "./toggle.js";
import {
  c as Ze,
  i as Qe,
  n as $e,
  o as et,
  s as tt,
} from "./review-header-toolbar.js";
import {
  a as nt,
  c as rt,
  i as it,
  n as at,
  r as ot,
  s as st,
  t as ct,
} from "./pull-request-code-review-comments-qcxIGUtE.js";
import { t as lt } from "./file-tree-search-input.js";
import { i as ut, o as dt, r as ft } from "./diff-unified-BETzamPI.js";
import { t as pt } from "./folders-DmG-RYpY.js";
import { t as mt } from "./summary-panel-row.js";
import { c as ht, r as gt, t as _t } from "./automation-schedule-CNorTxWd.js";
import {
  a as vt,
  c as yt,
  s as bt,
  t as xt,
} from "./use-is-pull-request-merge-helper-enabled-BEgcRHJE.js";
import { t as St } from "./segmented-toggle.js";
function Ct({ scope: e, event: t, intl: n, url: r }) {
  r &&
    Ae(r, t).then(
      () => {
        e.get(H).success(
          n.formatMessage({
            id: `pullRequests.copyPullRequestUrlSuccess`,
            defaultMessage: `Copied PR URL`,
            description: `Toast shown after copying a pull request URL to the clipboard`,
          }),
        );
      },
      () => {
        e.get(H).danger(
          n.formatMessage({
            id: `pullRequests.copyPullRequestUrlError`,
            defaultMessage: `Failed to copy PR URL`,
            description: `Toast shown when copying a pull request URL to the clipboard fails`,
          }),
        );
      },
    );
}
var Z = B(),
  Q = x();
function wt(e) {
  let t = (0, Z.c)(8),
    { children: n, color: r, disabled: i, tooltipContent: a, onClick: o } = e,
    s = r === void 0 ? `ghostMuted` : r,
    c;
  t[0] !== n || t[1] !== s || t[2] !== i || t[3] !== o
    ? ((c = (0, Q.jsx)(`span`, {
        className: `-me-1.5 inline-flex`,
        children: (0, Q.jsx)(se, {
          color: s,
          disabled: i,
          size: `composerSm`,
          onClick: o,
          children: n,
        }),
      })),
      (t[0] = n),
      (t[1] = s),
      (t[2] = i),
      (t[3] = o),
      (t[4] = c))
    : (c = t[4]);
  let l = c;
  if (!i) return l;
  let u;
  return (
    t[5] !== l || t[6] !== a
      ? ((u = (0, Q.jsx)(U, { tooltipContent: a, children: l })),
        (t[5] = l),
        (t[6] = a),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function Tt(e) {
  let t = (0, Z.c)(12),
    { canFix: n, checks: r, fixTooltipContent: i, onFixCheck: a } = e,
    o = n === void 0 ? !1 : n,
    s = ee(),
    c,
    l;
  if (t[0] !== o || t[1] !== r || t[2] !== i || t[3] !== s || t[4] !== a) {
    let e = Ie({
      canFix: o,
      checks: r,
      intl: s,
      onFixCheck: a,
      onOpenCheck: Et,
    });
    c = `flex flex-col gap-px`;
    let n;
    (t[7] === i
      ? (n = t[8])
      : ((n = (e, t) =>
          e.items.map((e, n) =>
            (0, Q.jsx)(
              mt,
              {
                actions:
                  e.action == null
                    ? void 0
                    : (0, Q.jsx)(wt, {
                        disabled: e.action.disabled === !0,
                        tooltipContent: i,
                        onClick: () => {
                          e.action?.onSelect?.();
                        },
                        children: e.action.label,
                      }),
                actionsVisible: e.action != null,
                icon: Dt(e.status),
                label: (0, Q.jsx)(U, {
                  tooltipContent: (0, Q.jsx)(kt, { status: e.status }),
                  children: (0, Q.jsx)(`span`, {
                    className: `text-token-text-tertiary`,
                    children: e.label,
                  }),
                }),
                onClick: e.onSelect,
              },
              `${t}:${n}`,
            ),
          )),
        (t[7] = i),
        (t[8] = n)),
      (l = e.flatMap(n)),
      (t[0] = o),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s),
      (t[4] = a),
      (t[5] = c),
      (t[6] = l));
  } else ((c = t[5]), (l = t[6]));
  let u;
  return (
    t[9] !== c || t[10] !== l
      ? ((u = (0, Q.jsx)(`div`, { className: c, children: l })),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function Et(e) {
  e.link != null && re.dispatchMessage(`open-in-browser`, { url: e.link });
}
function Dt(e) {
  switch (e) {
    case `failing`:
      return Ot(`text-token-charts-red`);
    case `pending`:
      return Ot(`text-token-charts-yellow`);
    case `skipped`:
      return Ot(`text-token-text-tertiary`);
    case `successful`:
      return Ot(`text-token-charts-green`);
    case `unknown`:
      return Ot(`text-token-text-tertiary`);
  }
}
function Ot(e) {
  return (0, Q.jsx)(`span`, {
    className: `inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center`,
    children: (0, Q.jsx)(et, { className: w(`icon-3xs`, e) }),
  });
}
function kt(e) {
  let t = (0, Z.c)(5),
    { status: n } = e;
  switch (n) {
    case `failing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(k, {
              id: `localConversation.pullRequest.actions.checks.tooltip.failed`,
              defaultMessage: `Failed test`,
              description: `Tooltip shown for an individual failed pull request check`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `pending`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(k, {
              id: `localConversation.pullRequest.actions.checks.tooltip.pending`,
              defaultMessage: `Pending test`,
              description: `Tooltip shown for an individual pending pull request check`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `skipped`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(k, {
              id: `localConversation.pullRequest.actions.checks.tooltip.skipped`,
              defaultMessage: `Skipped test`,
              description: `Tooltip shown for an individual skipped pull request check`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `successful`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(k, {
              id: `localConversation.pullRequest.actions.checks.tooltip.passed`,
              defaultMessage: `Passed test`,
              description: `Tooltip shown for an individual passed pull request check`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `unknown`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(k, {
              id: `localConversation.pullRequest.actions.checks.tooltip.unknown`,
              defaultMessage: `Unknown test status`,
              description: `Tooltip shown for an individual pull request check with unknown status`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
function At(e, { action: t, item: n, surface: r }) {
  V(e, {
    eventName: `codex_pull_request_action_clicked`,
    metadata: { action: t, surface: r, state: n.state, is_author: n.isAuthor },
  });
}
function jt(e, { item: t, surface: n }) {
  V(e, {
    eventName: `codex_pull_request_selected`,
    metadata: { surface: n, state: t.state, is_author: t.isAuthor },
  });
}
function Mt(e, { kind: t, surface: n }) {
  V(e, {
    eventName: `codex_pull_request_comment_posted`,
    metadata: { kind: t, surface: n },
  });
}
function Nt({ cwd: e, headBranch: t, hostId: n }) {
  return [`vscode`, `gh-pr-update`, e ?? null, t ?? null, n ?? null];
}
function Pt(e) {
  let t = (0, Z.c)(20),
    { cwd: n, headBranch: r, hostId: i, operationSource: a, onSuccess: o } = e,
    s = D(),
    c;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((c = Nt({ cwd: n, headBranch: r, hostId: i })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] !== r || t[5] !== o || t[6] !== s
    ? ((l = (e, t) => {
        if (e.status !== `success` || r == null) {
          o?.(e, t);
          return;
        }
        s.setQueryData(
          R(`gh-pr-body`, {
            cwd: t.cwd,
            headBranch: r,
            hostId: t.hostId,
            number: t.number,
            repo: t.repo,
          }),
          (e) => {
            if (e?.status !== `success`) return e;
            switch (t.action) {
              case `toggle-auto-merge`:
                return { ...e, isAutoMergeEnabled: t.enabled };
              case `mark-draft`:
                return { ...e, isDraft: !0 };
              case `mark-ready`:
                return { ...e, isDraft: !1 };
            }
          },
        );
        let n = (e) => {
          s.setQueryData(R(`gh-pr-status`, e), (e) => {
            if (e?.status !== `success`) return e;
            switch (t.action) {
              case `toggle-auto-merge`:
                return { ...e, isAutoMergeEnabled: t.enabled };
              case `mark-draft`:
                return { ...e, isDraft: !0 };
              case `mark-ready`:
                return { ...e, isDraft: !1 };
            }
          });
        };
        (n({ cwd: t.cwd, headBranch: r, hostId: t.hostId }),
          n({
            cwd: t.cwd,
            headBranch: r,
            hostId: t.hostId,
            number: t.number,
            repo: t.repo,
          }),
          Promise.all([
            s.invalidateQueries({ queryKey: R(`gh-pr-body`) }),
            s.invalidateQueries({ queryKey: R(`gh-pr-checks`) }),
            s.invalidateQueries({ queryKey: R(`gh-pr-comments`) }),
            s.invalidateQueries({
              queryKey: R(`gh-pr-status`, {
                cwd: t.cwd,
                headBranch: r,
                hostId: t.hostId,
              }),
            }),
            s.invalidateQueries({
              queryKey: R(`gh-pr-status`, {
                cwd: t.cwd,
                headBranch: r,
                hostId: t.hostId,
                number: t.number,
                repo: t.repo,
              }),
            }),
          ]),
          o?.(e, t));
      }),
      (t[4] = r),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] !== a || t[9] !== c || t[10] !== l
    ? ((u = { source: a, mutationKey: c, onSuccess: l }),
      (t[8] = a),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u))
    : (u = t[11]);
  let d = ne(`gh-pr-update`, u),
    f,
    p;
  t[12] !== i || t[13] !== d
    ? ((f = (e, t) => {
        d.mutate({ ...e, hostId: i }, t);
      }),
      (p = (e, t) => d.mutateAsync({ ...e, hostId: i }, t)),
      (t[12] = i),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p))
    : ((f = t[14]), (p = t[15]));
  let m;
  return (
    t[16] !== d || t[17] !== f || t[18] !== p
      ? ((m = { ...d, mutate: f, mutateAsync: p }),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
var Ft = 10;
function It(e) {
  return (
    e.isAuthor &&
    !e.canMerge &&
    (e.state === `failing` || e.state === `in_progress`)
  );
}
function Lt({
  automationStatus: e,
  hasConversation: t,
  isAutomationsQueryError: n,
  isAutomationsLoading: r,
  isTaskStarting: i,
}) {
  return i || e === `ACTIVE` || (t && (r || n));
}
function Rt({ includeReviewComments: e, item: t, repo: n }) {
  return [
    m,
    ``,
    ...Wt({ item: t, repo: n }),
    ``,
    `Goal: get this pull request merge-ready, enable auto-merge if needed, and keep working until it is merged.`,
    `Work in this new worktree only. Do not modify unrelated branches or worktrees.`,
    `Resolve merge conflicts between the PR branch and the base branch.`,
    `Inspect the latest PR checks with gh before changing code.`,
    ...Gt(e),
    `After each code change, run the narrowest useful verification for the files or failures you touched.`,
    `Commit and push fixes to the PR branch when they are ready.`,
    `After pushing any needed fixes, enable auto-merge for this PR if it is available and not already enabled, using the repository's accepted merge method.`,
    `When the PR is mergeable and all required checks pass, merge it if auto-merge is unavailable or did not merge it. If permissions or branch protection prevent auto-merge or manual merging, report the exact blocker.`,
    `Do not treat auto-merge being enabled, checks passing, or the PR becoming mergeable as completion. The stop condition is that the PR is merged.`,
    `If you merge the PR in this turn, delete the heartbeat automation before your final response.`,
    `The app has already attached a 10-minute heartbeat automation to this thread. Do not create, suggest, or ask for another automation.`,
    `Do not sleep or wait inside the turn. A heartbeat automation will restart this task every 10 minutes.`,
    ``,
    l,
    Ut(e),
  ].join(`
`);
}
function zt({ includeReviewComments: e, item: t, name: n, repo: r }) {
  return {
    name: n,
    prompt: Vt({ includeReviewComments: e, item: t, repo: r }),
    rrule: Ht(),
  };
}
function Bt(e) {
  return {
    id: e.id,
    kind: `heartbeat`,
    name: e.name,
    prompt: e.prompt,
    status: `ACTIVE`,
    targetThreadId: e.targetThreadId,
    model: null,
    reasoningEffort: null,
    rrule: e.rrule,
  };
}
function Vt({ includeReviewComments: e, item: t, repo: n }) {
  return [
    `Continue getting this pull request merge-ready, keep auto-merge enabled if needed, and stop only after it is merged.`,
    ``,
    ...Wt({ item: t, repo: n }),
    ``,
    `This is a heartbeat turn. Re-check the current PR state with gh. If the PR is already merged, delete the heartbeat automation before your final response.`,
    `Resolve any current merge conflicts with the base branch.`,
    ...Gt(e),
    `Run the narrowest useful verification for any code you change, then commit and push fixes to the PR branch.`,
    `After pushing any needed fixes, enable auto-merge for this PR if it is available and not already enabled, using the repository's accepted merge method.`,
    `When the PR is mergeable and all required checks pass, merge it if auto-merge is unavailable or did not merge it. If permissions or branch protection prevent auto-merge or manual merging, report the exact blocker.`,
    `Do not sleep or wait for CI inside the turn. Finish after the useful work for this check-in; the heartbeat will wake the thread again in 10 minutes if needed.`,
    `This turn was triggered by the existing 10-minute heartbeat automation. Do not create, suggest, or ask for another automation.`,
    `Do not stop just because auto-merge is enabled, checks pass, or the PR can merge. Stop only once the PR is merged; then delete the heartbeat automation before your final response.`,
    `If the PR is closed without merging, report that blocker and delete the heartbeat automation.`,
  ].join(`
`);
}
function Ht() {
  return _t({ ...gt(), intervalHours: 1, intervalMinutes: Ft });
}
function Ut(e) {
  return e
    ? `Track CI and address comments until all CI is passing, comments are addressed, and the PR is merged`
    : `Track CI until all CI is passing and the PR is merged`;
}
function Wt({ item: e, repo: t }) {
  return [
    `Repository: ` + (t ?? e.repo ?? `the current repository`),
    `Pull request: #` + e.number,
    `Branch: ` + e.headBranch + ` -> ` + e.baseBranch,
    `URL: ` + e.url,
  ];
}
function Gt(e) {
  return [
    `Fix only CI failures that are caused by this PR's changes or are required for this PR to pass.`,
    `Do not change code for unrelated main-branch failures, infrastructure outages, external service failures, or flakes that are not caused by this PR. If a failure is unrelated or blocked by missing access, report that exact blocker.`,
    `Keep fixes small and directly tied to the PR. Do not do unrelated refactors.`,
    Kt(e),
    qt(),
  ];
}
function Kt(e) {
  return e
    ? `Also inspect unresolved PR review comments with gh and address every actionable comment with the smallest safe change. If a comment is outdated, unclear, or should not be changed, explain why instead of guessing.`
    : `Inspect unresolved PR review comments and propose fixes in your summary, but do not change code solely to address comments unless the same change is needed for CI or conflict resolution.`;
}
function qt() {
  return [
    `This is a PR auto-fix task. In your final response, include one hidden progress directive if you fixed PR-related CI or resolved merge conflicts during the turn.`,
    `Use ::${v}{ciJobsFixed=1 mergeConflictsResolved=1} with the actual counts for this turn.`,
    `Do not count unrelated flakes, attempted fixes, or work that was already counted in an earlier turn.`,
  ].join(`
`);
}
function Jt({ conversationId: e, pendingWorktreeId: t }) {
  return e == null ? (t == null ? null : o(t)) : a(e);
}
function Yt(e) {
  let t = (0, Z.c)(31),
    { hostId: n, item: r, onSuccess: a, repo: s } = e,
    c = A(O),
    l = ee(),
    d = ie(),
    { createPendingWorktree: f } = Se(),
    p;
  t[0] !== n || t[1] !== r.cwd
    ? ((p = { conversationId: null, cwdOverride: r.cwd, hostId: n }),
      (t[0] = n),
      (t[1] = r.cwd),
      (t[2] = p))
    : (p = t[2]);
  let { agentMode: m, isAgentModePending: g } = J(p),
    { activeMode: _ } = G(null),
    { serviceTierSettings: v } = le(null),
    y;
  t[3] !== n || t[4] !== r.cwd
    ? ((y = { hostId: n, workspaceRoot: r.cwd }),
      (t[3] = n),
      (t[4] = r.cwd),
      (t[5] = y))
    : (y = t[5]);
  let { resolvedConfigPath: b } = Ke(y),
    x;
  t[6] !== _ ||
  t[7] !== m ||
  t[8] !== f ||
  t[9] !== n ||
  t[10] !== l ||
  t[11] !== r ||
  t[12] !== s ||
  t[13] !== b ||
  t[14] !== v
    ? ((x = async (e) => {
        let t = Rt({ includeReviewComments: e, item: r, repo: s }),
          i = [{ type: `text`, text: t, text_elements: [] }],
          { config: a } = await h(`read-config-for-host`, {
            hostId: n,
            includeLayers: !1,
            cwd: r.cwd,
          }),
          o = {
            input: i,
            commentAttachments: [],
            workspaceRoots: [r.cwd],
            cwd: r.cwd,
            fileAttachments: [],
            addedFiles: [],
            agentMode: m,
            model: null,
            serviceTier: v.serviceTier,
            reasoningEffort: null,
            collaborationMode: _,
            config: u(a),
          },
          c = l.formatMessage(
            {
              id: `pullRequestsPage.mergeHelper.heartbeatName`,
              defaultMessage: `Merge PR #{number}`,
              description: `Name for the heartbeat automation that keeps working on a pull request until it can be merged`,
            },
            { number: r.number },
          );
        return f({
          hostId: n,
          label: xe(i),
          initialThreadTitle: `Codex Merge PR #${r.number}`,
          sourceWorkspaceRoot: r.cwd,
          startingState: { type: `branch`, branchName: r.headBranch },
          localEnvironmentConfigPath: b,
          launchMode: `start-conversation`,
          prompt: t,
          startConversationParamsInput: o,
          sourceConversationId: null,
          sourceCollaborationMode: null,
          heartbeatAutomation: zt({
            includeReviewComments: e,
            item: r,
            name: c,
            repo: s,
          }),
        });
      }),
      (t[6] = _),
      (t[7] = m),
      (t[8] = f),
      (t[9] = n),
      (t[10] = l),
      (t[11] = r),
      (t[12] = s),
      (t[13] = b),
      (t[14] = v),
      (t[15] = x))
    : (x = t[15]);
  let S;
  t[16] !== r.url || t[17] !== d || t[18] !== a || t[19] !== c
    ? ((S = (e) => {
        (yt(c, { pendingWorktreeId: e, pullRequestUrl: r.url }), a(), d(o(e)));
      }),
      (t[16] = r.url),
      (t[17] = d),
      (t[18] = a),
      (t[19] = c),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== l || t[22] !== c
    ? ((C = (e) => {
        (T.error(`Error starting pull request merge helper`, {
          safe: {},
          sensitive: { error: e },
        }),
          c.get(H).danger(
            l.formatMessage(
              {
                id: `pullRequestsPage.mergeHelper.startError`,
                defaultMessage: `Could not start Codex merge task{br}{error}`,
                description: `Toast shown when Codex cannot start a worktree task for a pull request`,
              },
              { br: (0, Q.jsx)(`br`, {}), error: i(e) },
            ),
          ));
      }),
      (t[21] = l),
      (t[22] = c),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== x || t[25] !== S || t[26] !== C
    ? ((w = { mutationFn: x, onSuccess: S, onError: C }),
      (t[24] = x),
      (t[25] = S),
      (t[26] = C),
      (t[27] = w))
    : (w = t[27]);
  let E = z(w),
    D;
  return (
    t[28] !== g || t[29] !== E
      ? ((D = { ...E, isAgentModePending: g }),
        (t[28] = g),
        (t[29] = E),
        (t[30] = D))
      : (D = t[30]),
    D
  );
}
var $ = e(b(), 1);
function Xt(e) {
  let t = (0, Z.c)(102),
    {
      className: n,
      hostId: r,
      item: i,
      repo: a,
      size: o,
      stopPropagation: s,
      surface: l,
    } = e,
    u = o === void 0 ? `default` : o,
    f = s === void 0 ? !1 : s,
    m = l === void 0 ? `pull_request_page` : l,
    h = A(O),
    g = M(oe),
    _ = D(),
    v = E(vt, i.url),
    b = M(v.conversationId$),
    x = M(v.pendingWorktreeId$),
    S = M(We),
    C = ee(),
    w = ie(),
    T = M(bt),
    [j, N] = (0, $.useState)(!1),
    [te, P] = (0, $.useState)(!1),
    F;
  t[0] !== C || t[1] !== g || t[2] !== _ || t[3] !== h
    ? ((F = (e) => {
        (g.trackStructuredEvent(c, {
          action: p.CODEX_AUTOMATION_ACTION_UPDATED,
          source: d.CODEX_AUTOMATION_SOURCE_PR_MERGE_HELPER,
          success: !0,
          ...ht(e.item),
        }),
          _.invalidateQueries({ queryKey: R(`list-automations`) }),
          h.get(H).success(
            C.formatMessage({
              id: `pullRequestsPage.mergeHelper.resumeSuccess`,
              defaultMessage: `Resumed Codex merge`,
              description: `Toast shown when the paused Codex merge task automation is resumed`,
            }),
          ));
      }),
      (t[0] = C),
      (t[1] = g),
      (t[2] = _),
      (t[3] = h),
      (t[4] = F))
    : (F = t[4]);
  let I;
  t[5] !== C || t[6] !== g || t[7] !== h
    ? ((I = (e, t) => {
        (g.trackStructuredEvent(c, {
          action: p.CODEX_AUTOMATION_ACTION_UPDATED,
          source: d.CODEX_AUTOMATION_SOURCE_PR_MERGE_HELPER,
          success: !1,
          ...ht(t),
          failureReason:
            e.message ===
            `Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.`
              ? y.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION
              : y.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
        }),
          h.get(H).danger(
            C.formatMessage({
              id: `pullRequestsPage.mergeHelper.resumeError`,
              defaultMessage: `Could not resume Codex merge`,
              description: `Toast shown when the paused Codex merge task automation cannot be resumed`,
            }),
            { description: e.message },
          ));
      }),
      (t[5] = C),
      (t[6] = g),
      (t[7] = h),
      (t[8] = I))
    : (I = t[8]);
  let L;
  t[9] !== F || t[10] !== I
    ? ((L = { onSuccess: F, onError: I }), (t[9] = F), (t[10] = I), (t[11] = L))
    : (L = t[11]);
  let z = ne(`automation-update`, L),
    B = (0, $.useId)(),
    re = r ?? i.hostId ?? `local`,
    ae = S.data,
    V = S.isLoading || S.isFetching,
    W,
    G,
    K;
  if (
    t[12] !== ae?.items ||
    t[13] !== S.isError ||
    t[14] !== V ||
    t[15] !== b ||
    t[16] !== x
  ) {
    W = Ge({
      automations: ae?.items ?? [],
      conversationId: b,
      includePausedAutomations: !0,
    });
    let e = b == null && x != null;
    ((G = W?.status === `PAUSED`),
      (K = Lt({
        automationStatus: W?.status,
        hasConversation: b != null,
        isAutomationsLoading: V,
        isAutomationsQueryError: S.isError,
        isTaskStarting: e,
      })),
      (t[12] = ae?.items),
      (t[13] = S.isError),
      (t[14] = V),
      (t[15] = b),
      (t[16] = x),
      (t[17] = W),
      (t[18] = G),
      (t[19] = K));
  } else ((W = t[17]), (G = t[18]), (K = t[19]));
  let q = K,
    J;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = () => {
        P(!1);
      }),
      (t[20] = J))
    : (J = t[20]);
  let ce;
  t[21] !== i || t[22] !== a || t[23] !== re
    ? ((ce = { hostId: re, item: i, onSuccess: J, repo: a }),
      (t[21] = i),
      (t[22] = a),
      (t[23] = re),
      (t[24] = ce))
    : (ce = t[24]);
  let Y = Yt(ce),
    le = Y.isPending || Y.isAgentModePending,
    ue = Y.isPending || z.isPending || (!G && !q && Y.isAgentModePending),
    X;
  t[25] !== W ||
  t[26] !== q ||
  t[27] !== G ||
  t[28] !== i ||
  t[29] !== w ||
  t[30] !== z ||
  t[31] !== h ||
  t[32] !== T ||
  t[33] !== Y ||
  t[34] !== f ||
  t[35] !== m ||
  t[36] !== b ||
  t[37] !== x
    ? ((X = (e) => {
        if ((f && e.stopPropagation(), G && W != null)) {
          (At(h, { action: `merge_with_codex_resumed`, item: i, surface: m }),
            z.mutate(Bt(W)));
          return;
        }
        if (q) {
          let e = Jt({ conversationId: b, pendingWorktreeId: x });
          e != null &&
            (At(h, {
              action: `merge_with_codex_task_opened`,
              item: i,
              surface: m,
            }),
            w(e));
          return;
        }
        if (!Y.isAgentModePending) {
          if (T) {
            (At(h, { action: `merge_with_codex_started`, item: i, surface: m }),
              Y.mutate(!1));
            return;
          }
          (At(h, {
            action: `merge_with_codex_dialog_opened`,
            item: i,
            surface: m,
          }),
            N(!1),
            P(!0));
        }
      }),
      (t[25] = W),
      (t[26] = q),
      (t[27] = G),
      (t[28] = i),
      (t[29] = w),
      (t[30] = z),
      (t[31] = h),
      (t[32] = T),
      (t[33] = Y),
      (t[34] = f),
      (t[35] = m),
      (t[36] = b),
      (t[37] = x),
      (t[38] = X))
    : (X = t[38]);
  let de = X,
    fe;
  t[39] !== j || t[40] !== i || t[41] !== h || t[42] !== Y || t[43] !== m
    ? ((fe = (e) => {
        (e.preventDefault(),
          !Y.isAgentModePending &&
            (At(h, { action: `merge_with_codex_started`, item: i, surface: m }),
            Y.mutate(j)));
      }),
      (t[39] = j),
      (t[40] = i),
      (t[41] = h),
      (t[42] = Y),
      (t[43] = m),
      (t[44] = fe))
    : (fe = t[44]);
  let pe = fe,
    me;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Q.jsx)(k, {
        id: `pullRequestsPage.mergeHelper.buttonTooltip`,
        defaultMessage: `Starts an automation to watch PR CI`,
        description: `Tooltip explaining that the Merge with Codex pull request button starts an automation to watch pull request CI`,
      })),
      (t[45] = me))
    : (me = t[45]);
  let he;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Q.jsx)(Re, { className: `icon-xxs` })), (t[46] = he))
    : (he = t[46]);
  let xe;
  t[47] !== q || t[48] !== G
    ? ((xe = G
        ? (0, Q.jsx)(k, {
            id: `pullRequestsPage.mergeHelper.resumeButton`,
            defaultMessage: `Resume Codex merge`,
            description: `Button label that resumes a paused Codex task working on a blocked pull request`,
          })
        : q
          ? (0, Q.jsx)(k, {
              id: `pullRequestsPage.mergeHelper.openTaskButton`,
              defaultMessage: `Open Codex task`,
              description: `Button label that opens the Codex task working on a blocked pull request`,
            })
          : (0, Q.jsx)(k, {
              id: `pullRequestsPage.mergeHelper.button`,
              defaultMessage: `Merge with Codex`,
              description: `Button label that starts a Codex worktree task to fix a blocked pull request and merge it`,
            })),
      (t[47] = q),
      (t[48] = G),
      (t[49] = xe))
    : (xe = t[49]);
  let Se;
  t[50] !== n || t[51] !== de || t[52] !== ue || t[53] !== u || t[54] !== xe
    ? ((Se = (0, Q.jsx)(U, {
        tooltipContent: me,
        children: (0, Q.jsxs)(se, {
          className: n,
          color: `secondary`,
          loading: ue,
          size: u,
          onClick: de,
          children: [he, xe],
        }),
      })),
      (t[50] = n),
      (t[51] = de),
      (t[52] = ue),
      (t[53] = u),
      (t[54] = xe),
      (t[55] = Se))
    : (Se = t[55]);
  let Ce;
  t[56] === Y.isPending
    ? (Ce = t[57])
    : ((Ce = (e) => {
        !e && !Y.isPending && P(!1);
      }),
      (t[56] = Y.isPending),
      (t[57] = Ce));
  let we, Ee;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, Q.jsx)(Re, { className: `icon-sm text-token-foreground` })),
      (Ee = (0, Q.jsx)(k, {
        id: `pullRequestsPage.mergeHelper.dialog.title`,
        defaultMessage: `Let Codex finish this PR?`,
        description: `Title for a confirmation dialog before starting a Codex task to fix and merge a pull request`,
      })),
      (t[58] = we),
      (t[59] = Ee))
    : ((we = t[58]), (Ee = t[59]));
  let De;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, Q.jsx)(_e, {
        icon: we,
        title: Ee,
        subtitle: (0, Q.jsxs)(`ul`, {
          className: `list-disc space-y-1 pl-5`,
          children: [
            (0, Q.jsx)(`li`, {
              children: (0, Q.jsx)(k, {
                id: `pullRequestsPage.mergeHelper.dialog.autoMerge`,
                defaultMessage: `Turn on auto-merge if needed`,
                description: `Bullet explaining that Codex will enable auto-merge for the pull request if needed`,
              }),
            }),
            (0, Q.jsx)(`li`, {
              children: (0, Q.jsx)(k, {
                id: `pullRequestsPage.mergeHelper.dialog.checkCi`,
                defaultMessage: `Check CI every 10 minutes`,
                description: `Bullet explaining that Codex will periodically check CI status for the pull request`,
              }),
            }),
            (0, Q.jsx)(`li`, {
              children: (0, Q.jsx)(k, {
                id: `pullRequestsPage.mergeHelper.dialog.fixCi`,
                defaultMessage: `Push fixes only for CI failures caused by this PR`,
                description: `Bullet explaining that Codex will only fix CI failures related to the pull request`,
              }),
            }),
          ],
        }),
        subtitleSize: `sm`,
      })),
      (t[60] = De))
    : (De = t[60]);
  let Oe;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, Q.jsx)(`span`, {
        className: `text-sm text-token-foreground`,
        children: (0, Q.jsx)(k, {
          id: `pullRequestsPage.mergeHelper.dialog.addressComments`,
          defaultMessage: `Auto address feedback`,
          description: `Toggle label that lets Codex automatically fix pull request feedback`,
        }),
      })),
      (t[61] = Oe))
    : (Oe = t[61]);
  let ke;
  t[62] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, Q.jsxs)(`span`, {
        className: `flex flex-col gap-1`,
        children: [
          Oe,
          (0, Q.jsx)(`span`, {
            className: `text-xs text-token-description-foreground`,
            children: (0, Q.jsx)(k, {
              id: `pullRequestsPage.mergeHelper.dialog.addressCommentsDescription`,
              defaultMessage: `Codex will reply to comments and make appropriate fixes`,
              description: `Helper text explaining the optional pull request feedback toggle`,
            }),
          }),
        ],
      })),
      (t[62] = ke))
    : (ke = t[62]);
  let Ae = Y.isPending,
    je;
  t[63] === C
    ? (je = t[64])
    : ((je = C.formatMessage({
        id: `pullRequestsPage.mergeHelper.dialog.addressCommentsAriaLabel`,
        defaultMessage: `Auto address PR feedback`,
        description: `Accessible label for the pull request feedback toggle`,
      })),
      (t[63] = C),
      (t[64] = je));
  let Me;
  t[65] !== j || t[66] !== Y.isPending || t[67] !== je
    ? ((Me = (0, Q.jsx)(ge, {
        className: `gap-3 !pt-0`,
        children: (0, Q.jsxs)(`label`, {
          className: `flex items-center justify-between gap-4`,
          children: [
            ke,
            (0, Q.jsx)(Xe, {
              checked: j,
              disabled: Ae,
              ariaLabel: je,
              size: `sm`,
              onChange: N,
            }),
          ],
        }),
      })),
      (t[65] = j),
      (t[66] = Y.isPending),
      (t[67] = je),
      (t[68] = Me))
    : (Me = t[68]);
  let Ne;
  t[69] === h
    ? (Ne = t[70])
    : ((Ne = (e) => {
        h.set(bt, e);
      }),
      (t[69] = h),
      (t[70] = Ne));
  let Pe;
  t[71] !== T || t[72] !== B || t[73] !== Y.isPending || t[74] !== Ne
    ? ((Pe = (0, Q.jsx)(Te, {
        id: B,
        checked: T,
        disabled: Y.isPending,
        onCheckedChange: Ne,
      })),
      (t[71] = T),
      (t[72] = B),
      (t[73] = Y.isPending),
      (t[74] = Ne),
      (t[75] = Pe))
    : (Pe = t[75]);
  let Fe;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, Q.jsx)(`span`, {
        className: `text-sm text-token-foreground`,
        children: (0, Q.jsx)(k, {
          id: `pullRequestsPage.mergeHelper.dialog.skipFuture`,
          defaultMessage: `Don't show this again`,
          description: `Checkbox label to skip future PR merge-helper confirmation dialogs`,
        }),
      })),
      (t[76] = Fe))
    : (Fe = t[76]);
  let Ie;
  t[77] !== B || t[78] !== Pe
    ? ((Ie = (0, Q.jsxs)(`label`, {
        className: `relative mr-auto flex items-center gap-3`,
        htmlFor: B,
        children: [Pe, Fe],
      })),
      (t[77] = B),
      (t[78] = Pe),
      (t[79] = Ie))
    : (Ie = t[79]);
  let Le, ze;
  t[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = () => {
        P(!1);
      }),
      (ze = (0, Q.jsx)(k, {
        id: `pullRequestsPage.mergeHelper.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for the PR merge-helper confirmation dialog`,
      })),
      (t[80] = Le),
      (t[81] = ze))
    : ((Le = t[80]), (ze = t[81]));
  let Be;
  t[82] === Y.isPending
    ? (Be = t[83])
    : ((Be = (0, Q.jsx)(se, {
        color: `secondary`,
        disabled: Y.isPending,
        onClick: Le,
        children: ze,
      })),
      (t[82] = Y.isPending),
      (t[83] = Be));
  let Ve;
  t[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (0, Q.jsx)(k, {
        id: `pullRequestsPage.mergeHelper.dialog.start`,
        defaultMessage: `Start`,
        description: `Primary button for the PR merge-helper confirmation dialog`,
      })),
      (t[84] = Ve))
    : (Ve = t[84]);
  let He;
  t[85] === le
    ? (He = t[86])
    : ((He = (0, Q.jsx)(se, {
        color: `primary`,
        loading: le,
        type: `submit`,
        children: Ve,
      })),
      (t[85] = le),
      (t[86] = He));
  let Ue;
  t[87] !== Ie || t[88] !== Be || t[89] !== He
    ? ((Ue = (0, Q.jsxs)(be, { children: [Ie, Be, He] })),
      (t[87] = Ie),
      (t[88] = Be),
      (t[89] = He),
      (t[90] = Ue))
    : (Ue = t[90]);
  let Ke;
  t[91] !== pe || t[92] !== Me || t[93] !== Ue
    ? ((Ke = (0, Q.jsxs)(ye, {
        as: `form`,
        className: `gap-3`,
        onSubmit: pe,
        children: [De, Me, Ue],
      })),
      (t[91] = pe),
      (t[92] = Me),
      (t[93] = Ue),
      (t[94] = Ke))
    : (Ke = t[94]);
  let qe;
  t[95] !== te || t[96] !== Ce || t[97] !== Ke
    ? ((qe = (0, Q.jsx)(ve, {
        open: te,
        showDialogClose: !1,
        size: `compact`,
        onOpenChange: Ce,
        children: Ke,
      })),
      (t[95] = te),
      (t[96] = Ce),
      (t[97] = Ke),
      (t[98] = qe))
    : (qe = t[98]);
  let Je;
  return (
    t[99] !== Se || t[100] !== qe
      ? ((Je = (0, Q.jsxs)(Q.Fragment, { children: [Se, qe] })),
        (t[99] = Se),
        (t[100] = qe),
        (t[101] = Je))
      : (Je = t[101]),
    Je
  );
}
function Zt(e) {
  let n = (0, Z.c)(96),
    { hostId: r, item: i, pullRequestBody: a, request: o, surface: s } = e,
    c = s === void 0 ? `pull_request_page` : s,
    l = A(O),
    u = ee(),
    d = D(),
    f = xt(),
    [p, m] = (0, $.useState)(!1),
    h = te(t.pullRequestMergeMethod),
    g;
  n[0] !== r ||
  n[1] !== i.cwd ||
  n[2] !== i.headBranch ||
  n[3] !== i.number ||
  n[4] !== a?.repo ||
  n[5] !== d ||
  n[6] !== o
    ? ((g = async () => {
        await Promise.all([
          d.invalidateQueries({ queryKey: R(`gh-pr-board`) }),
          d.invalidateQueries({ queryKey: R(`gh-pr-body`, o) }),
          d.invalidateQueries({ queryKey: R(`gh-pr-checks`, o) }),
          d.invalidateQueries({ queryKey: R(`gh-pr-comments`, o) }),
          d.invalidateQueries({
            queryKey: R(`gh-pr-status`, {
              cwd: i.cwd,
              headBranch: i.headBranch,
              hostId: r,
            }),
          }),
          d.invalidateQueries({
            queryKey: R(`gh-pr-status`, {
              cwd: i.cwd,
              headBranch: i.headBranch,
              hostId: r,
              number: i.number,
              repo: a?.repo ?? o.repo ?? null,
            }),
          }),
        ]);
      }),
      (n[0] = r),
      (n[1] = i.cwd),
      (n[2] = i.headBranch),
      (n[3] = i.number),
      (n[4] = a?.repo),
      (n[5] = d),
      (n[6] = o),
      (n[7] = g))
    : (g = n[7]);
  let _ = g,
    v;
  n[8] !== _ || n[9] !== h || n[10] !== l
    ? ((v = (e) => {
        (async () => {
          (await _(),
            e &&
              h !== `squash` &&
              (await I(l, t.pullRequestMergeMethod, `squash`)),
            m(!1));
        })();
      }),
      (n[8] = _),
      (n[9] = h),
      (n[10] = l),
      (n[11] = v))
    : (v = n[11]);
  let y = v,
    b;
  n[12] !== r || n[13] !== i.cwd || n[14] !== i.headBranch
    ? ((b = {
        cwd: i.cwd,
        headBranch: i.headBranch,
        hostId: r,
        operationSource: `pull_request_board`,
      }),
      (n[12] = r),
      (n[13] = i.cwd),
      (n[14] = i.headBranch),
      (n[15] = b))
    : (b = n[15]);
  let x = tt(b),
    S;
  n[16] !== r || n[17] !== i.cwd || n[18] !== i.headBranch
    ? ((S = {
        cwd: i.cwd,
        headBranch: i.headBranch,
        hostId: r,
        operationSource: `pull_request_board`,
      }),
      (n[16] = r),
      (n[17] = i.cwd),
      (n[18] = i.headBranch),
      (n[19] = S))
    : (S = n[19]);
  let C = Pt(S),
    w;
  n[20] !== r || n[21] !== i.cwd || n[22] !== i.headBranch
    ? ((w = {
        cwd: i.cwd,
        headBranch: i.headBranch,
        hostId: r,
        operationSource: `pull_request_board`,
      }),
      (n[20] = r),
      (n[21] = i.cwd),
      (n[22] = i.headBranch),
      (n[23] = w))
    : (w = n[23]);
  let T = Pt(w),
    E = a != null,
    j = a?.isDraft ?? i.state === `draft`,
    M = i.state === `merged` || a?.hasOpenPr === !1,
    N = a?.isAutoMergeEnabled === !0,
    P = !E || M || j || a?.canMerge !== !0 || x.isPending,
    F = !E || M || (!N && j) || C.isPending,
    ne = !E || M || T.isPending,
    L;
  n[24] !== j ||
  n[25] !== M ||
  n[26] !== E ||
  n[27] !== i ||
  n[28] !== a ||
  n[29] !== f
    ? ((L = f && E && !M && !j && a.canMerge !== !0 && It(i)),
      (n[24] = j),
      (n[25] = M),
      (n[26] = E),
      (n[27] = i),
      (n[28] = a),
      (n[29] = f),
      (n[30] = L))
    : (L = n[30]);
  let z = L,
    B = p ? `squash` : (h ?? `merge`),
    re;
  n[31] !== T ||
  n[32] !== u ||
  n[33] !== i ||
  n[34] !== a ||
  n[35] !== y ||
  n[36] !== l ||
  n[37] !== c
    ? ((re = () => {
        if (a == null) return;
        let e = a.isDraft ? `mark-ready` : `mark-draft`;
        (At(l, {
          action: a.isDraft ? `mark_ready` : `mark_draft`,
          item: i,
          surface: c,
        }),
          T.mutate(
            { action: e, cwd: i.cwd, number: i.number, repo: a.repo },
            {
              onSuccess: (t) => {
                if (t.status !== `success`) {
                  l.get(H).danger(t.error);
                  return;
                }
                (l.get(H).success(Qt(e, u)), y(!1));
              },
            },
          ));
      }),
      (n[31] = T),
      (n[32] = u),
      (n[33] = i),
      (n[34] = a),
      (n[35] = y),
      (n[36] = l),
      (n[37] = c),
      (n[38] = re))
    : (re = n[38]);
  let ie = re,
    ae;
  n[39] !== C ||
  n[40] !== u ||
  n[41] !== i ||
  n[42] !== a ||
  n[43] !== y ||
  n[44] !== l ||
  n[45] !== B ||
  n[46] !== p ||
  n[47] !== c
    ? ((ae = (e) => {
        a != null &&
          (At(l, {
            action: e ? `enable_auto_merge` : `disable_auto_merge`,
            item: i,
            surface: c,
          }),
          C.mutate(
            {
              action: `toggle-auto-merge`,
              cwd: i.cwd,
              enabled: e,
              mergeMethod: B,
              number: i.number,
              repo: a.repo,
            },
            {
              onSuccess: (t) => {
                if (t.status !== `success`) {
                  $t({
                    scope: l,
                    error: t.error,
                    intl: u,
                    mergeMethod: B,
                    onSquashRetry: () => {
                      e && m(!0);
                    },
                  });
                  return;
                }
                (l.get(H).success(Qt(`toggle-auto-merge`, u)), y(p && e));
              },
            },
          ));
      }),
      (n[39] = C),
      (n[40] = u),
      (n[41] = i),
      (n[42] = a),
      (n[43] = y),
      (n[44] = l),
      (n[45] = B),
      (n[46] = p),
      (n[47] = c),
      (n[48] = ae))
    : (ae = n[48]);
  let oe = ae,
    V;
  n[49] !== u ||
  n[50] !== i ||
  n[51] !== x ||
  n[52] !== a ||
  n[53] !== y ||
  n[54] !== l ||
  n[55] !== B ||
  n[56] !== p ||
  n[57] !== c
    ? ((V = () => {
        a != null &&
          (At(l, { action: `merge`, item: i, surface: c }),
          x.mutate(
            { cwd: i.cwd, mergeMethod: B, number: i.number, repo: a.repo },
            {
              onSuccess: (e) => {
                if (e.status !== `success`) {
                  $t({
                    scope: l,
                    error: e.error,
                    intl: u,
                    mergeMethod: B,
                    onSquashRetry: () => {
                      m(!0);
                    },
                  });
                  return;
                }
                (l.get(H).success(
                  u.formatMessage({
                    id: `pullRequestsPage.detail.merge.success`,
                    defaultMessage: `Merged pull request`,
                    description: `Toast shown after merging the selected pull request from the PR side panel`,
                  }),
                ),
                  y(p));
              },
            },
          ));
      }),
      (n[49] = u),
      (n[50] = i),
      (n[51] = x),
      (n[52] = a),
      (n[53] = y),
      (n[54] = l),
      (n[55] = B),
      (n[56] = p),
      (n[57] = c),
      (n[58] = V))
    : (V = n[58]);
  let U = V;
  if (!i.isAuthor) return null;
  let W;
  n[59] === j
    ? (W = n[60])
    : ((W = j
        ? (0, Q.jsx)(k, {
            id: `pullRequestsPage.detail.actions.markReady`,
            defaultMessage: `Ready for review`,
            description: `Button label that converts a draft pull request into a ready pull request`,
          })
        : (0, Q.jsx)(k, {
            id: `pullRequestsPage.detail.actions.markDraft`,
            defaultMessage: `Convert to draft`,
            description: `Button label that converts a ready pull request into a draft pull request`,
          })),
      (n[59] = j),
      (n[60] = W));
  let G;
  n[61] !== T.isPending || n[62] !== ne || n[63] !== ie || n[64] !== W
    ? ((G = (0, Q.jsx)(se, {
        color: `outline`,
        disabled: ne,
        loading: T.isPending,
        size: `toolbar`,
        onClick: ie,
        children: W,
      })),
      (n[61] = T.isPending),
      (n[62] = ne),
      (n[63] = ie),
      (n[64] = W),
      (n[65] = G))
    : (G = n[65]);
  let q;
  n[66] === C.isPending
    ? (q = n[67])
    : ((q = C.isPending ? (0, Q.jsx)(K, { className: `icon-xxs` }) : null),
      (n[66] = C.isPending),
      (n[67] = q));
  let J;
  n[68] === q
    ? (J = n[69])
    : ((J = (0, Q.jsx)(`span`, {
        className: `inline-flex w-3 justify-center`,
        children: q,
      })),
      (n[68] = q),
      (n[69] = J));
  let ce;
  n[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, Q.jsx)(k, {
        id: `pullRequestsPage.detail.actions.autoMerge`,
        defaultMessage: `Auto-merge`,
        description: `Label for the pull request auto-merge toggle`,
      })),
      (n[70] = ce))
    : (ce = n[70]);
  let Y;
  n[71] === u
    ? (Y = n[72])
    : ((Y = u.formatMessage({
        id: `pullRequestsPage.detail.actions.autoMerge.ariaLabel`,
        defaultMessage: `Enable auto-merge`,
        description: `Accessible label for the pull request auto-merge toggle`,
      })),
      (n[71] = u),
      (n[72] = Y));
  let le;
  n[73] !== F || n[74] !== oe || n[75] !== N || n[76] !== Y
    ? ((le = (0, Q.jsx)(Xe, {
        checked: N,
        disabled: F,
        ariaLabel: Y,
        size: `sm`,
        onChange: oe,
      })),
      (n[73] = F),
      (n[74] = oe),
      (n[75] = N),
      (n[76] = Y),
      (n[77] = le))
    : (le = n[77]);
  let ue;
  n[78] !== J || n[79] !== le
    ? ((ue = (0, Q.jsxs)(`label`, {
        className: `flex items-center gap-2 text-xs text-token-description-foreground`,
        children: [J, ce, le],
      })),
      (n[78] = J),
      (n[79] = le),
      (n[80] = ue))
    : (ue = n[80]);
  let X;
  n[81] !== z ||
  n[82] !== U ||
  n[83] !== r ||
  n[84] !== i ||
  n[85] !== P ||
  n[86] !== a?.repo ||
  n[87] !== o ||
  n[88] !== c
    ? ((X = z
        ? (0, Q.jsx)(he, {
            electron: !0,
            children: (0, Q.jsx)(Xt, {
              hostId: r,
              item: i,
              repo: a?.repo ?? o.repo ?? null,
              size: `toolbar`,
              surface: c,
            }),
          })
        : (0, Q.jsx)(se, {
            color: `primary`,
            disabled: P,
            size: `toolbar`,
            onClick: U,
            children: (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.actions.merge`,
              defaultMessage: `Merge`,
              description: `Button label that merges the selected pull request`,
            }),
          })),
      (n[81] = z),
      (n[82] = U),
      (n[83] = r),
      (n[84] = i),
      (n[85] = P),
      (n[86] = a?.repo),
      (n[87] = o),
      (n[88] = c),
      (n[89] = X))
    : (X = n[89]);
  let de;
  n[90] !== ue || n[91] !== X
    ? ((de = (0, Q.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-end gap-3`,
        children: [ue, X],
      })),
      (n[90] = ue),
      (n[91] = X),
      (n[92] = de))
    : (de = n[92]);
  let fe;
  return (
    n[93] !== G || n[94] !== de
      ? ((fe = (0, Q.jsxs)(`div`, {
          className: `flex flex-wrap items-center justify-between gap-3 px-1`,
          children: [G, de],
        })),
        (n[93] = G),
        (n[94] = de),
        (n[95] = fe))
      : (fe = n[95]),
    fe
  );
}
function Qt(e, t) {
  switch (e) {
    case `toggle-auto-merge`:
      return t.formatMessage({
        id: `pullRequestsPage.detail.actions.enableAutoMerge.success`,
        defaultMessage: `Updated auto-merge`,
        description: `Toast shown after updating auto-merge for the selected pull request`,
      });
    case `mark-draft`:
      return t.formatMessage({
        id: `pullRequestsPage.detail.actions.markDraft.success`,
        defaultMessage: `Converted pull request to draft`,
        description: `Toast shown after converting the selected pull request to a draft`,
      });
    case `mark-ready`:
      return t.formatMessage({
        id: `pullRequestsPage.detail.actions.markReady.success`,
        defaultMessage: `Marked pull request ready for review`,
        description: `Toast shown after marking the selected draft pull request ready for review`,
      });
  }
}
function $t({ scope: e, error: t, intl: n, mergeMethod: r, onSquashRetry: i }) {
  if (
    r === `merge` &&
    /merge commits are not allowed on this repository/i.test(t)
  ) {
    (i(),
      e.get(H).danger(
        n.formatMessage({
          id: `pullRequestsPage.detail.actions.repoRestrictionError`,
          defaultMessage: `Merge commits are disabled in this repository`,
          description: `Toast title shown when a pull request merge action fails because the repository disallows merge commits`,
        }),
        {
          description: n.formatMessage({
            id: `pullRequestsPage.detail.actions.repoRestrictionError.description`,
            defaultMessage: `Try again to use squash merge. If that succeeds, Codex will save squash as your default PR merge method`,
            description: `Toast description shown when retrying a pull request merge action with squash could resolve a repository policy failure`,
          }),
        },
      ));
    return;
  }
  e.get(H).danger(t);
}
var en = 12,
  tn = 160,
  nn = 0.5,
  rn = 720,
  an = 0.9,
  on = 150,
  sn = { version: 0, listeners: new Set() },
  cn = (0, $.createContext)(null);
function ln(e) {
  let t = (0, Z.c)(165),
    {
      id: n,
      left: r,
      right: i,
      className: a,
      leftClassName: o,
      rightClassName: s,
      handleClassName: c,
      defaultLeftPercent: l,
      minLeftWidth: u,
      minRightWidth: d,
      handleWidth: p,
      drawerBreakpoint: m,
      isLeftOpen: h,
      isRightOpen: g,
      onLeftOpenChange: _,
      onRightOpenChange: v,
    } = e,
    y = u === void 0 ? tn : u,
    b = d === void 0 ? tn : d,
    x = p === void 0 ? en : p,
    S = m === void 0 ? rn : m,
    C = h === void 0 ? !0 : h,
    T = g === void 0 ? !0 : g,
    ee = un(),
    E = i != null,
    D = E ? T : !1,
    O = E ? C : !0,
    k = f(),
    A = `${n}:split-left-width`,
    j = k.getItem(A, NaN),
    M = Number.isFinite(j) && j <= 1,
    N;
  t[0] === l ? (N = t[1]) : ((N = _n(l)), (t[0] = l), (t[1] = N));
  let te = M ? gn(j) : N,
    [P, F] = (0, $.useState)(0),
    [I, ne] = (0, $.useState)(!1),
    L = (0, $.useRef)(null),
    R = (0, $.useRef)(null),
    z = (0, $.useRef)(null),
    B = (0, $.useRef)(null),
    re = (0, $.useRef)(!1),
    ie = (0, $.useRef)(null),
    ae = (0, $.useRef)(null),
    oe = (0, $.useRef)(null),
    V = (0, $.useRef)(null),
    H = (0, $.useRef)(null),
    U = (0, $.useRef)(te),
    W = (0, $.useRef)(0),
    G = (0, $.useRef)(M ? gn(j) : null),
    se = E && !O && D,
    K = S > 0 && E && P > 0 && P <= S && !se,
    q = K ? 0 : x,
    J;
  t[2] === F
    ? (J = t[3])
    : ((J = () => {
        let e = L.current;
        if (!e) return;
        let t = e.getBoundingClientRect().width;
        F(t);
      }),
      (t[2] = F),
      (t[3] = J));
  let ce;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = []), (t[4] = ce))
    : (ce = t[4]),
    (0, $.useLayoutEffect)(J, ce));
  let Y;
  t[5] === F
    ? (Y = t[6])
    : ((Y = () => {
        let e = L.current;
        if (!e || typeof ResizeObserver > `u`) return;
        let t = new ResizeObserver((e) => {
          F(e[0]?.contentRect.width ?? 0);
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (t[5] = F),
      (t[6] = Y));
  let le;
  (t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = []), (t[7] = le))
    : (le = t[7]),
    (0, $.useEffect)(Y, le));
  let ue, X;
  (t[8] !== P || t[9] !== E || t[10] !== C || t[11] !== T || t[12] !== _
    ? ((ue = () => {
        !P || !E || (!C && !T && _?.(!0));
      }),
      (X = [P, E, C, T, _]),
      (t[8] = P),
      (t[9] = E),
      (t[10] = C),
      (t[11] = T),
      (t[12] = _),
      (t[13] = ue),
      (t[14] = X))
    : ((ue = t[13]), (X = t[14])),
    (0, $.useEffect)(ue, X));
  let de;
  t[15] !== P ||
  t[16] !== S ||
  t[17] !== q ||
  t[18] !== O ||
  t[19] !== D ||
  t[20] !== se ||
  t[21] !== E ||
  t[22] !== C ||
  t[23] !== T ||
  t[24] !== U ||
  t[25] !== y ||
  t[26] !== b ||
  t[27] !== k ||
  t[28] !== A
    ? ((de = () => {
        let e = L.current;
        if (!e) return;
        let t = P || e.getBoundingClientRect().width;
        if (!t) return;
        let n = ie.current,
          r = ae.current,
          i = (n != null && Math.abs(n - t) >= 1) || (r != null && r !== O);
        re.current
          ? i && dn([oe, V, H], z)
          : (dn([oe, V, H], z), (re.current = !0));
        let a = () => {
          ((ie.current = t), (ae.current = O));
        };
        if (S > 0 && E && t <= S && !se) {
          (wn({
            containerWidth: t,
            minRightWidth: b,
            isOpen: D,
            node: e,
            rafRef: R,
          }),
            a());
          return;
        }
        let o = mn(t);
        if (!E) {
          (En({
            containerWidth: t,
            handleWidth: 0,
            nextLeftWidth: t,
            rightWidth: 0,
            rightTranslate: 0,
            node: e,
            rafRef: R,
            opts: { immediate: !0 },
          }),
            a());
          return;
        }
        if (!D) {
          let { rightWidth: n, boundedLeftRatio: r } = Sn({
            containerWidth: t,
            minLeftWidth: y,
            minRightWidth: b,
            leftWidth: o * gn(U.current),
          });
          U.current = r;
          let i = xn(W.current > 0 ? W.current : n, o);
          ((W.current = i),
            En({
              containerWidth: t,
              handleWidth: 0,
              nextLeftWidth: t,
              rightWidth: i,
              rightTranslate: i,
              node: e,
              rafRef: R,
              opts: { immediate: !0 },
            }),
            a());
          return;
        }
        if (!C) {
          let n = o;
          ((W.current = n),
            En({
              containerWidth: t,
              handleWidth: q,
              nextLeftWidth: 0,
              rightWidth: n,
              rightTranslate: 0,
              node: e,
              rafRef: R,
              opts: { immediate: !0 },
            }),
            a());
          return;
        }
        let {
          boundedLeftWidth: s,
          rightWidth: c,
          boundedLeftRatio: l,
        } = Sn({
          containerWidth: t,
          minLeftWidth: y,
          minRightWidth: b,
          leftWidth: o * gn(U.current),
        });
        ((W.current = c),
          (U.current = l),
          C && T && Tn(k, A, G, l),
          En({
            containerWidth: t,
            handleWidth: q,
            nextLeftWidth: s,
            rightWidth: c,
            rightTranslate: 0,
            node: e,
            rafRef: R,
            opts: { immediate: !0 },
          }),
          a());
        let u = R.current;
        return () => {
          (u != null &&
            (cancelAnimationFrame(u), R.current === u && (R.current = null)),
            z.current != null &&
              (cancelAnimationFrame(z.current), (z.current = null)));
        };
      }),
      (t[15] = P),
      (t[16] = S),
      (t[17] = q),
      (t[18] = O),
      (t[19] = D),
      (t[20] = se),
      (t[21] = E),
      (t[22] = C),
      (t[23] = T),
      (t[24] = U),
      (t[25] = y),
      (t[26] = b),
      (t[27] = k),
      (t[28] = A),
      (t[29] = de))
    : (de = t[29]);
  let fe;
  (t[30] !== P ||
  t[31] !== S ||
  t[32] !== q ||
  t[33] !== O ||
  t[34] !== D ||
  t[35] !== se ||
  t[36] !== E ||
  t[37] !== ee ||
  t[38] !== K ||
  t[39] !== C ||
  t[40] !== I ||
  t[41] !== T ||
  t[42] !== y ||
  t[43] !== b ||
  t[44] !== k ||
  t[45] !== A
    ? ((fe = [P, O, D, q, S, se, E, K, C, T, I, y, b, ee, k, A]),
      (t[30] = P),
      (t[31] = S),
      (t[32] = q),
      (t[33] = O),
      (t[34] = D),
      (t[35] = se),
      (t[36] = E),
      (t[37] = ee),
      (t[38] = K),
      (t[39] = C),
      (t[40] = I),
      (t[41] = T),
      (t[42] = y),
      (t[43] = b),
      (t[44] = k),
      (t[45] = A),
      (t[46] = fe))
    : (fe = t[46]),
    (0, $.useLayoutEffect)(de, fe));
  let pe;
  t[47] !== P ||
  t[48] !== K ||
  t[49] !== C ||
  t[50] !== T ||
  t[51] !== _ ||
  t[52] !== v ||
  t[53] !== ne
    ? ((pe = (e) => {
        if (e.button !== 0) return;
        let t = L.current,
          n = hn(P, t);
        K ||
          !t ||
          !n ||
          (e.preventDefault(),
          e.currentTarget.setPointerCapture(e.pointerId),
          (B.current = t.getBoundingClientRect().left),
          C || _?.(!0),
          T || v?.(!0),
          ne(!0));
      }),
      (t[47] = P),
      (t[48] = K),
      (t[49] = C),
      (t[50] = T),
      (t[51] = _),
      (t[52] = v),
      (t[53] = ne),
      (t[54] = pe))
    : (pe = t[54]);
  let me = pe,
    he;
  t[55] !== P ||
  t[56] !== q ||
  t[57] !== C ||
  t[58] !== I ||
  t[59] !== T ||
  t[60] !== U ||
  t[61] !== y ||
  t[62] !== b ||
  t[63] !== ne ||
  t[64] !== k ||
  t[65] !== A
    ? ((he = () => {
        if (!I) return;
        let e = (e) => {
            e.preventDefault();
            let t = L.current,
              n = hn(P, t);
            if (!t || !n) return;
            let {
              boundedLeftWidth: r,
              rightWidth: i,
              boundedLeftRatio: a,
            } = Sn({
              containerWidth: n,
              minLeftWidth: y,
              minRightWidth: b,
              leftWidth: pn(e, t, B),
            });
            ((W.current = i),
              (U.current = a),
              En({
                containerWidth: n,
                handleWidth: q,
                nextLeftWidth: r,
                rightWidth: i,
                rightTranslate: 0,
                node: t,
                rafRef: R,
              }));
          },
          t = (e) => {
            e.preventDefault();
            let t = L.current,
              n = hn(P, t);
            if (!t || !n) {
              ne(!1);
              return;
            }
            let {
              boundedLeftWidth: r,
              rightWidth: i,
              boundedLeftRatio: a,
            } = Sn({
              containerWidth: n,
              minLeftWidth: y,
              minRightWidth: b,
              leftWidth: pn(e, t, B),
            });
            ((W.current = i),
              (U.current = a),
              En({
                containerWidth: n,
                handleWidth: q,
                nextLeftWidth: r,
                rightWidth: i,
                rightTranslate: 0,
                node: t,
                rafRef: R,
                opts: { immediate: !0 },
              }),
              C && T && Tn(k, A, G, a),
              (B.current = null),
              ne(!1));
          },
          n = () => {
            ((B.current = null), ne(!1));
          };
        return (
          window.addEventListener(`pointermove`, e),
          window.addEventListener(`pointerup`, t),
          window.addEventListener(`pointercancel`, t),
          window.addEventListener(`blur`, n),
          () => {
            (window.removeEventListener(`pointermove`, e),
              window.removeEventListener(`pointerup`, t),
              window.removeEventListener(`pointercancel`, t),
              window.removeEventListener(`blur`, n),
              (B.current = null));
          }
        );
      }),
      (t[55] = P),
      (t[56] = q),
      (t[57] = C),
      (t[58] = I),
      (t[59] = T),
      (t[60] = U),
      (t[61] = y),
      (t[62] = b),
      (t[63] = ne),
      (t[64] = k),
      (t[65] = A),
      (t[66] = he))
    : (he = t[66]);
  let ge;
  (t[67] !== P ||
  t[68] !== q ||
  t[69] !== C ||
  t[70] !== I ||
  t[71] !== T ||
  t[72] !== y ||
  t[73] !== b ||
  t[74] !== k ||
  t[75] !== A
    ? ((ge = [P, q, C, I, T, y, b, k, A]),
      (t[67] = P),
      (t[68] = q),
      (t[69] = C),
      (t[70] = I),
      (t[71] = T),
      (t[72] = y),
      (t[73] = b),
      (t[74] = k),
      (t[75] = A),
      (t[76] = ge))
    : (ge = t[76]),
    (0, $.useEffect)(he, ge));
  let _e;
  t[77] !== P ||
  t[78] !== q ||
  t[79] !== E ||
  t[80] !== K ||
  t[81] !== C ||
  t[82] !== T ||
  t[83] !== U ||
  t[84] !== y ||
  t[85] !== b ||
  t[86] !== _ ||
  t[87] !== v
    ? ((_e = (e) => {
        if (e === `left`) {
          if (!C) return;
          (fn([oe, V, H], z), _?.(!1));
          let e = L.current,
            t = hn(P, e);
          if (!e || !t) return;
          let n = mn(t);
          ((W.current = n),
            En({
              containerWidth: t,
              handleWidth: q,
              nextLeftWidth: 0,
              rightWidth: n,
              rightTranslate: 0,
              node: e,
              rafRef: R,
              opts: { immediate: !0 },
            }));
          return;
        }
        if (!T || !E) return;
        (fn([oe, V, H], z), v?.(!1));
        let t = L.current,
          n = hn(P, t);
        if (!t || !n) return;
        if (K) {
          wn({
            containerWidth: n,
            minRightWidth: b,
            isOpen: !1,
            node: t,
            rafRef: R,
          });
          return;
        }
        let r = mn(n),
          { rightWidth: i, boundedLeftRatio: a } = Sn({
            containerWidth: n,
            minLeftWidth: y,
            minRightWidth: b,
            leftWidth: r * gn(U.current),
          });
        U.current = a;
        let o = xn(W.current > 0 ? W.current : i, r);
        ((W.current = o),
          En({
            containerWidth: n,
            handleWidth: 0,
            nextLeftWidth: n,
            rightWidth: o,
            rightTranslate: o,
            node: t,
            rafRef: R,
            opts: { immediate: !0 },
          }));
      }),
      (t[77] = P),
      (t[78] = q),
      (t[79] = E),
      (t[80] = K),
      (t[81] = C),
      (t[82] = T),
      (t[83] = U),
      (t[84] = y),
      (t[85] = b),
      (t[86] = _),
      (t[87] = v),
      (t[88] = _e))
    : (_e = t[88]);
  let ve = _e,
    ye;
  t[89] !== P ||
  t[90] !== q ||
  t[91] !== E ||
  t[92] !== K ||
  t[93] !== C ||
  t[94] !== T ||
  t[95] !== U ||
  t[96] !== y ||
  t[97] !== b ||
  t[98] !== _ ||
  t[99] !== v ||
  t[100] !== k ||
  t[101] !== A
    ? ((ye = (e) => {
        let t = L.current,
          n = hn(P, t);
        if (!t || !n) return;
        if (e === `left`) {
          if (C) return;
          (fn([oe, V, H], z), _?.(!0));
          let {
            boundedLeftWidth: e,
            rightWidth: r,
            boundedLeftRatio: i,
          } = Sn({
            containerWidth: n,
            minLeftWidth: y,
            minRightWidth: b,
            leftWidth: mn(n) * gn(U.current),
          });
          ((U.current = i),
            T && Tn(k, A, G, i),
            (W.current = r),
            En({
              containerWidth: n,
              handleWidth: q,
              nextLeftWidth: e,
              rightWidth: r,
              rightTranslate: 0,
              node: t,
              rafRef: R,
              opts: { immediate: !0 },
            }));
          return;
        }
        if (T || !E) return;
        if ((fn([oe, V, H], z), v?.(!0), K)) {
          wn({
            containerWidth: n,
            minRightWidth: b,
            isOpen: !0,
            node: t,
            rafRef: R,
          });
          return;
        }
        let {
          boundedLeftWidth: r,
          rightWidth: i,
          boundedLeftRatio: a,
        } = Sn({
          containerWidth: n,
          minLeftWidth: y,
          minRightWidth: b,
          leftWidth: mn(n) * gn(U.current),
        });
        ((U.current = a),
          C && Tn(k, A, G, a),
          (W.current = i),
          En({
            containerWidth: n,
            handleWidth: q,
            nextLeftWidth: r,
            rightWidth: i,
            rightTranslate: 0,
            node: t,
            rafRef: R,
            opts: { immediate: !0 },
          }));
      }),
      (t[89] = P),
      (t[90] = q),
      (t[91] = E),
      (t[92] = K),
      (t[93] = C),
      (t[94] = T),
      (t[95] = U),
      (t[96] = y),
      (t[97] = b),
      (t[98] = _),
      (t[99] = v),
      (t[100] = k),
      (t[101] = A),
      (t[102] = ye))
    : (ye = t[102]);
  let be = ye,
    xe;
  t[103] !== ve || t[104] !== be || t[105] !== C || t[106] !== T
    ? ((xe = (e) => {
        if (e === `left`) {
          if (C) {
            ve(`left`);
            return;
          }
          be(`left`);
          return;
        }
        if (T) {
          ve(`right`);
          return;
        }
        be(`right`);
      }),
      (t[103] = ve),
      (t[104] = be),
      (t[105] = C),
      (t[106] = T),
      (t[107] = xe))
    : (xe = t[107]);
  let Se = xe,
    Ce;
  t[108] !== ve ||
  t[109] !== O ||
  t[110] !== D ||
  t[111] !== be ||
  t[112] !== I ||
  t[113] !== Se
    ? ((Ce = {
        isLeftOpen: O,
        isRightOpen: D,
        isResizing: I,
        collapse: ve,
        expand: be,
        toggle: Se,
      }),
      (t[108] = ve),
      (t[109] = O),
      (t[110] = D),
      (t[111] = be),
      (t[112] = I),
      (t[113] = Se),
      (t[114] = Ce))
    : (Ce = t[114]);
  let we = Ce,
    Te = E && !K && O && D,
    Ee = `min(calc(100% - ${x}px), max(0px, ${O && D ? `calc(var(--split-left-width, 100%) - (${x}px / 2))` : `calc(100% - (${x}px / 2))`}))`,
    De = I && `cursor-col-resize`,
    Oe;
  t[115] !== a || t[116] !== De
    ? ((Oe = w(
        `group/split-view relative h-full w-full min-w-0 overflow-hidden`,
        De,
        a,
      )),
      (t[115] = a),
      (t[116] = De),
      (t[117] = Oe))
    : (Oe = t[117]);
  let ke = !O && `pointer-events-none`,
    Ae;
  t[118] !== o || t[119] !== ke
    ? ((Ae = w(
        `absolute inset-y-0 left-0 min-w-0 overflow-hidden [will-change:width]`,
        ke,
        `duration-relaxed ease-basic`,
        o,
      )),
      (t[118] = o),
      (t[119] = ke),
      (t[120] = Ae))
    : (Ae = t[120]);
  let je = I ? `none` : `width`,
    Me;
  t[121] === je
    ? (Me = t[122])
    : ((Me = {
        width: `var(--split-left-width, 100%)`,
        contain: `strict`,
        transitionProperty: je,
      }),
      (t[121] = je),
      (t[122] = Me));
  let Ne = O ? `visible` : `hidden`,
    Pe = `${n}-left`,
    Fe;
  t[123] !== r || t[124] !== Ne || t[125] !== Pe
    ? ((Fe = (0, Q.jsx)(`div`, {
        className: `h-full min-w-0`,
        children: (0, Q.jsx)($.Activity, { mode: Ne, name: Pe, children: r }),
      })),
      (t[123] = r),
      (t[124] = Ne),
      (t[125] = Pe),
      (t[126] = Fe))
    : (Fe = t[126]);
  let Ie;
  t[127] !== Ae || t[128] !== Me || t[129] !== Fe
    ? ((Ie = (0, Q.jsx)(`div`, {
        ref: oe,
        className: Ae,
        style: Me,
        children: Fe,
      })),
      (t[127] = Ae),
      (t[128] = Me),
      (t[129] = Fe),
      (t[130] = Ie))
    : (Ie = t[130]);
  let Le;
  t[131] !== O ||
  t[132] !== c ||
  t[133] !== Ee ||
  t[134] !== me ||
  t[135] !== x ||
  t[136] !== E ||
  t[137] !== K ||
  t[138] !== Te ||
  t[139] !== I
    ? ((Le =
        E && !K && O
          ? (0, Q.jsx)(`div`, {
              ref: V,
              role: `separator`,
              "aria-orientation": `vertical`,
              className: w(
                `group absolute inset-y-0 z-20 select-none touch-none`,
                `cursor-col-resize duration-relaxed ease-basic [will-change:left]`,
                Te ? `opacity-100` : `opacity-0 pointer-events-none`,
                c,
              ),
              style: {
                width: `${x}px`,
                left: Ee,
                transitionProperty: I ? `none` : `left, opacity`,
              },
              onPointerDown: me,
              children: (0, Q.jsx)(`div`, {
                className: w(
                  `pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-token-border transition-colors duration-relaxed ease-basic`,
                  I
                    ? `bg-token-foreground/25`
                    : `group-hover:bg-token-foreground/25 group-active:bg-token-foreground/25`,
                ),
              }),
            })
          : null),
      (t[131] = O),
      (t[132] = c),
      (t[133] = Ee),
      (t[134] = me),
      (t[135] = x),
      (t[136] = E),
      (t[137] = K),
      (t[138] = Te),
      (t[139] = I),
      (t[140] = Le))
    : (Le = t[140]);
  let Re = K
      ? `main-surface z-30 shadow-[-16px_0_32px_rgba(0,0,0,0.28)]`
      : `z-10`,
    ze = D ? `opacity-100` : `opacity-0`,
    Be = !D && `pointer-events-none`,
    Ve;
  t[141] !== s || t[142] !== Re || t[143] !== ze || t[144] !== Be
    ? ((Ve = w(
        `absolute inset-y-0 min-w-0 overflow-hidden [will-change:transform]`,
        Re,
        ze,
        Be,
        `duration-relaxed ease-basic`,
        s,
      )),
      (t[141] = s),
      (t[142] = Re),
      (t[143] = ze),
      (t[144] = Be),
      (t[145] = Ve))
    : (Ve = t[145]);
  let He = I ? `none` : `width, transform, opacity`,
    Ue;
  t[146] === He
    ? (Ue = t[147])
    : ((Ue = {
        width: `var(--split-right-width, 0px)`,
        minWidth: 0,
        maxWidth: `var(--split-right-width, 0px)`,
        right: 0,
        transform: `translateX(var(--split-right-translate, 0px))`,
        contain: `strict`,
        transitionProperty: He,
      }),
      (t[146] = He),
      (t[147] = Ue));
  let We;
  t[148] !== D || t[149] !== E || t[150] !== n || t[151] !== i
    ? ((We = E
        ? (0, Q.jsx)(`div`, {
            className: `h-full min-w-0`,
            children: (0, Q.jsx)($.Activity, {
              mode: D ? `visible` : `hidden`,
              name: `${n}-right`,
              children: (0, Q.jsx)(`div`, {
                className: w(
                  `h-full w-full min-w-0 transition-opacity duration-relaxed ease-basic`,
                  D ? `opacity-100` : `opacity-0`,
                ),
                style: { transitionDelay: D ? `${on}ms` : `0ms` },
                children: i,
              }),
            }),
          })
        : null),
      (t[148] = D),
      (t[149] = E),
      (t[150] = n),
      (t[151] = i),
      (t[152] = We))
    : (We = t[152]);
  let Ge;
  t[153] !== Ve || t[154] !== Ue || t[155] !== We
    ? ((Ge = (0, Q.jsx)(`div`, {
        ref: H,
        className: Ve,
        style: Ue,
        children: We,
      })),
      (t[153] = Ve),
      (t[154] = Ue),
      (t[155] = We),
      (t[156] = Ge))
    : (Ge = t[156]);
  let Ke;
  t[157] !== Oe || t[158] !== Ie || t[159] !== Le || t[160] !== Ge
    ? ((Ke = (0, Q.jsxs)(`div`, {
        ref: L,
        className: Oe,
        children: [Ie, Le, Ge],
      })),
      (t[157] = Oe),
      (t[158] = Ie),
      (t[159] = Le),
      (t[160] = Ge),
      (t[161] = Ke))
    : (Ke = t[161]);
  let qe;
  return (
    t[162] !== we || t[163] !== Ke
      ? ((qe = (0, Q.jsx)(cn.Provider, { value: we, children: Ke })),
        (t[162] = we),
        (t[163] = Ke),
        (t[164] = qe))
      : (qe = t[164]),
    qe
  );
}
function un() {
  let e = (0, Z.c)(2),
    [t, n] = (0, $.useState)(sn.version),
    r,
    i;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = () => {}), (i = []), (e[0] = r), (e[1] = i))
      : ((r = e[0]), (i = e[1])),
    (0, $.useEffect)(r, i),
    t
  );
}
function dn(e, t) {
  for (let t of e) t.current?.style.setProperty(`transition`, `none`);
  (t.current != null && cancelAnimationFrame(t.current),
    (t.current = requestAnimationFrame(() => {
      t.current = requestAnimationFrame(() => {
        for (let t of e) t.current?.style.removeProperty(`transition`);
        t.current = null;
      });
    })));
}
function fn(e, t) {
  t.current != null && (cancelAnimationFrame(t.current), (t.current = null));
  for (let t of e) t.current?.style.removeProperty(`transition`);
}
function pn(e, t, n) {
  let r = n.current;
  return (
    r ?? ((r = t.getBoundingClientRect().left), (n.current = r)),
    e.clientX - r
  );
}
function mn(e) {
  return Math.max(0, e);
}
function hn(e, t) {
  return e || (t?.getBoundingClientRect().width ?? 0);
}
function gn(e) {
  return Math.min(Math.max(e, 0), 1);
}
function _n(e) {
  return e == null ? nn : gn(e / 100);
}
function vn(e, t) {
  return e === 0 ? 0 : gn(t / e);
}
function yn(e, t, n) {
  let r = mn(e),
    i = r - n;
  return i <= t ? Math.max(0, r) : Math.max(t, i);
}
function bn(e, t, n, r) {
  let i = mn(t);
  if (i === 0) return 0;
  let a = Math.min(n, i),
    o = yn(t, n, r);
  return o <= a ? Math.max(0, i) : Math.min(Math.max(e, a), o);
}
function xn(e, t) {
  return Math.min(Math.max(e, 0), t);
}
function Sn({
  containerWidth: e,
  minLeftWidth: t,
  minRightWidth: n,
  leftWidth: r,
}) {
  let i = mn(e),
    a = bn(r, e, t, n),
    o = xn(Math.max(0, i - a), i);
  return {
    openAvailableWidth: i,
    boundedLeftWidth: a,
    boundedLeftRatio: vn(i, a),
    rightWidth: o,
  };
}
function Cn(e, t) {
  let n = Math.min(t, e),
    r = e * an;
  return xn(Math.max(n, r), e);
}
function wn({
  containerWidth: e,
  minRightWidth: t,
  isOpen: n,
  node: r,
  rafRef: i,
}) {
  let a = Cn(e, t);
  En({
    containerWidth: e,
    handleWidth: 0,
    nextLeftWidth: e,
    rightWidth: a,
    rightTranslate: n ? 0 : a,
    node: r,
    rafRef: i,
    opts: { immediate: !0 },
  });
}
function Tn(e, t, n, r) {
  n.current !== r && (e.setItem(t, r), (n.current = r));
}
function En({
  containerWidth: e,
  handleWidth: t,
  nextLeftWidth: n,
  rightWidth: r,
  rightTranslate: i,
  node: a,
  rafRef: o,
  opts: s,
}) {
  let c = mn(e),
    l = Math.min(Math.max(n, 0), c),
    u = Math.max(0, c - l),
    d = xn(r ?? u, c),
    f = xn(i ?? 0, d),
    p = () => {
      (a.style.setProperty(`--split-left-width`, `${l}px`),
        a.style.setProperty(`--split-handle-width`, `${t}px`),
        a.style.setProperty(`--split-right-width`, `${d}px`),
        a.style.setProperty(`--split-right-translate`, `${f}px`));
    };
  if (
    (o.current != null && (cancelAnimationFrame(o.current), (o.current = null)),
    s?.immediate)
  ) {
    p();
    return;
  }
  o.current = requestAnimationFrame(p);
}
function Dn(e) {
  let t = (0, Z.c)(23),
    {
      comments: n,
      commentAuthorAvatarUrl: r,
      commentAuthorLabel: i,
      cwd: a,
      diffMode: o,
      file: s,
      hostConfig: c,
      readonlyComments: l,
      submittingCommentKeys: u,
      onCommentsChange: d,
    } = e,
    f = A(W),
    p = M(de),
    m = M(X),
    h = s.metadata.type !== `deleted`,
    g;
  t[0] !== n || t[1] !== d
    ? ((g = (e) => {
        d([
          ...n,
          {
            ...e,
            content: [{ content_type: `text`, text: `` }],
            replyToReviewThreadId: e.reviewThreadId ?? null,
          },
        ]);
      }),
      (t[0] = n),
      (t[1] = d),
      (t[2] = g))
    : (g = t[2]);
  let _ = s.metadata.additionLines ? `line-info` : `metadata`,
    v;
  t[3] !== f || t[4] !== m
    ? ((v = () => {
        f.set(X, !m);
      }),
      (t[3] = f),
      (t[4] = m),
      (t[5] = v))
    : (v = t[5]);
  let y;
  return (
    t[6] !== r ||
    t[7] !== i ||
    t[8] !== n ||
    t[9] !== a ||
    t[10] !== o ||
    t[11] !== s ||
    t[12] !== c ||
    t[13] !== d ||
    t[14] !== l ||
    t[15] !== p ||
    t[16] !== u ||
    t[17] !== h ||
    t[18] !== g ||
    t[19] !== _ ||
    t[20] !== v ||
    t[21] !== m
      ? ((y = (0, Q.jsx)(ft, {
          cwd: a,
          defaultOpen: h,
          diff: s,
          diffViewWrap: m,
          expandScope: `pull-request-review`,
          enableComments: !0,
          comments: n,
          readonlyComments: l,
          submittingCommentKeys: u,
          commentAuthorAvatarUrl: r,
          commentAuthorLabel: i,
          onCommentsChange: d,
          onReadonlyCommentReply: g,
          hostConfig: c,
          hunkSeparators: _,
          loadFullContent: !1,
          metrics: rt,
          onToggleWrap: v,
          richPreviewEnabled: p,
          roundedCorners: !0,
          stickyHeader: !0,
          viewType: o,
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = n),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s),
        (t[12] = c),
        (t[13] = d),
        (t[14] = l),
        (t[15] = p),
        (t[16] = u),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _),
        (t[20] = v),
        (t[21] = m),
        (t[22] = y))
      : (y = t[22]),
    y
  );
}
var On = F(O, `gh-current-user`, (e) => ({
    params: { hostId: e },
    staleTime: N.ONE_MINUTE,
  })),
  kn = 25,
  An = 100,
  jn = 50,
  Mn = 0,
  Nn = `pull-request-code-review-file-tree-left`;
function Pn(e) {
  let t = (0, Z.c)(50),
    { isFileTreeOpen: n, onFileTreeOpenChange: r } = e,
    i = A(W),
    a = ee(),
    o = M(pe),
    s = M(X),
    c = M(de),
    l = M(fe),
    u = M(dt),
    [d, f] = (0, $.useState)(!0),
    p = ut(f, `pull-request-review`),
    m;
  t[0] !== a || t[1] !== n
    ? ((m = n
        ? a.formatMessage({
            id: `pullRequestsPage.codeReview.hideFileTree`,
            defaultMessage: `Hide file tree`,
            description: `Tooltip to hide the pull request code review file tree`,
          })
        : a.formatMessage({
            id: `pullRequestsPage.codeReview.showFileTree`,
            defaultMessage: `Show file tree`,
            description: `Tooltip to show the pull request code review file tree`,
          })),
      (t[0] = a),
      (t[1] = n),
      (t[2] = m))
    : (m = t[2]);
  let h = m,
    g;
  t[3] === i
    ? (g = t[4])
    : ((g = (e) => {
        i.set(pe, e === `left` ? `unified` : `split`);
      }),
      (t[3] = i),
      (t[4] = g));
  let _;
  t[5] !== i || t[6] !== s
    ? ((_ = () => {
        i.set(X, !s);
      }),
      (t[5] = i),
      (t[6] = s),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] !== d || t[9] !== p
    ? ((v = () => {
        p(!d);
      }),
      (t[8] = d),
      (t[9] = p),
      (t[10] = v))
    : (v = t[10]);
  let y;
  t[11] !== c || t[12] !== i
    ? ((y = () => {
        i.set(de, !c);
      }),
      (t[11] = c),
      (t[12] = i),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== i || t[15] !== l
    ? ((b = () => {
        i.set(fe, !l);
      }),
      (t[14] = i),
      (t[15] = l),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== u || t[18] !== i
    ? ((x = () => {
        i.set(dt, !u);
      }),
      (t[17] = u),
      (t[18] = i),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== o ||
  t[21] !== d ||
  t[22] !== u ||
  t[23] !== c ||
  t[24] !== g ||
  t[25] !== _ ||
  t[26] !== v ||
  t[27] !== y ||
  t[28] !== b ||
  t[29] !== x ||
  t[30] !== l ||
  t[31] !== s
    ? ((S = {
        diffMode: o,
        onSelectDiffMode: g,
        wrap: s,
        onToggleWrap: _,
        hideWhitespace: !1,
        onToggleHideWhitespace: Fn,
        expanded: d,
        onToggleExpanded: v,
        richPreviewEnabled: c,
        onToggleRichPreview: y,
        wordDiffsEnabled: l,
        onToggleWordDiffs: b,
        loadFullFilesEnabled: u,
        onToggleLoadFullFiles: x,
      }),
      (t[20] = o),
      (t[21] = d),
      (t[22] = u),
      (t[23] = c),
      (t[24] = g),
      (t[25] = _),
      (t[26] = v),
      (t[27] = y),
      (t[28] = b),
      (t[29] = x),
      (t[30] = l),
      (t[31] = s),
      (t[32] = S))
    : (S = t[32]);
  let C = S,
    w;
  t[33] === C
    ? (w = t[34])
    : ((w = (0, Q.jsx)($e, {
        diffControls: C,
        showHideWhitespace: !1,
        showLoadFullFiles: !1,
      })),
      (t[33] = C),
      (t[34] = w));
  let T = n ? `secondary` : `ghost`,
    E;
  t[35] !== n || t[36] !== r
    ? ((E = () => {
        r(!n);
      }),
      (t[35] = n),
      (t[36] = r),
      (t[37] = E))
    : (E = t[37]);
  let D;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(pt, { className: `icon-xs` })), (t[38] = D))
    : (D = t[38]);
  let O;
  t[39] !== h || t[40] !== n || t[41] !== T || t[42] !== E
    ? ((O = (0, Q.jsx)(se, {
        "aria-label": h,
        "aria-pressed": n,
        color: T,
        size: `toolbar`,
        uniform: !0,
        onClick: E,
        children: D,
      })),
      (t[39] = h),
      (t[40] = n),
      (t[41] = T),
      (t[42] = E),
      (t[43] = O))
    : (O = t[43]);
  let k;
  t[44] !== h || t[45] !== O
    ? ((k = (0, Q.jsx)(U, { tooltipContent: h, delayOpen: !0, children: O })),
      (t[44] = h),
      (t[45] = O),
      (t[46] = k))
    : (k = t[46]);
  let j;
  return (
    t[47] !== k || t[48] !== w
      ? ((j = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-px`,
          children: [w, k],
        })),
        (t[47] = k),
        (t[48] = w),
        (t[49] = j))
      : (j = t[49]),
    j
  );
}
function Fn() {}
function In({
  cwd: e,
  hostId: t,
  isFileTreeOpen: n,
  number: r,
  onFileTreeOpenChange: i,
  readonlyComments: a,
  repo: o,
  onCommentPosted: s,
  surface: c = `pull_request_page`,
}) {
  let l = A(O),
    u = _(t ?? `local`),
    d = ee(),
    f = M(pe),
    p = (0, $.useRef)(new Map()),
    [m, h] = (0, $.useState)(),
    [v, y] = (0, $.useState)({}),
    [b, x] = (0, $.useState)(null),
    [w, T] = (0, $.useState)(``),
    E = (0, $.useRef)(new Map()),
    [D, te] = (0, $.useState)(() => new Set()),
    { data: P } = j(On, t),
    F = (0, $.useCallback)((e, t) => {
      let n = g(e);
      te((e) => {
        if (e.has(n) === t) return e;
        let r = new Set(e);
        return (t ? r.add(n) : r.delete(n), r);
      });
    }, []),
    I = (0, $.useCallback)(
      (e) => {
        let t = ct(e),
          n = E.current.get(t);
        (E.current.delete(t), n != null && F(n, !1));
      },
      [F],
    ),
    R = (0, $.useCallback)((e) => {
      let t = g(e),
        n = e.position.path;
      y((e) => ({ ...e, [n]: (e[n] ?? []).filter((e) => g(e) !== t) }));
    }, []),
    z = ne(`gh-pr-comment`, {
      source: `pull_request_board`,
      onError: (e, t) => {
        (x(e.message), I(t));
      },
      onSuccess: async (e, t) => {
        let n = E.current.get(ct(t));
        if (e.status === `error`) {
          (x(e.error), I(t));
          return;
        }
        (l.get(H).success(
          d.formatMessage({
            id: `pullRequestsPage.codeReview.commentPosted`,
            defaultMessage: `Posted comment to GitHub`,
            description: `Toast shown after posting a pull request code review comment`,
          }),
        ),
          Mt(l, {
            kind:
              t.replyToReviewThreadId == null
                ? `code_review_comment`
                : `code_review_reply`,
            surface: c,
          }));
        try {
          (await s?.(), n != null && R(n));
        } finally {
          I(t);
        }
      },
    }),
    { data: B, isLoading: re } = L(`gh-pr-diff`, {
      source: `pull_request_board`,
      params: { cwd: e, hostId: t, number: r, repo: o ?? null },
      queryConfig: {
        refetchOnWindowFocus: `always`,
        staleTime: N.FIVE_SECONDS,
      },
    }),
    [ie] = (0, $.useState)(() => new S()),
    ae = (0, $.useCallback)(
      (e) => {
        if (e != null) {
          ie.setup(e);
          return;
        }
        ie.cleanUp();
      },
      [ie],
    ),
    oe = (0, $.useCallback)((e, t) => {
      if (t == null) {
        p.current.delete(e);
        return;
      }
      p.current.set(e, t);
    }, []),
    V = B?.status === `success` ? me(B.unifiedDiff) : [],
    U = V.map((e) => e.metadata.name),
    W = P?.status === `success` ? P.avatarUrl : void 0,
    G =
      P?.status === `success`
        ? P.login
        : d.formatMessage({
            id: `pullRequestsPage.codeReview.githubCommentAuthor`,
            defaultMessage: `GitHub comment`,
            description: `Author label shown for pending GitHub PR diff comments`,
          }),
    se = w.trim().length === 0 ? U : U.filter((e) => e.includes(w.trim())),
    K = (0, $.useMemo)(
      () =>
        a == null || a.length === 0
          ? void 0
          : ot({ comments: a, filePaths: U, workspaceRoot: e }),
      [e, U, a],
    );
  function q(e) {
    (h(e), p.current.get(e)?.scrollIntoView({ block: `start` }));
  }
  let J = (0, $.useCallback)(
      (n) => {
        let i = {
          body: at(n),
          cwd: e,
          hostId: t,
          ...(n.replyToReviewThreadId == null
            ? { inlineComment: nt(n) }
            : { replyToReviewThreadId: n.replyToReviewThreadId }),
          number: r,
          repo: o ?? null,
        };
        (E.current.set(ct(i), n), F(n, !0), z.mutate(i));
      },
      [e, t, r, z, o, F],
    ),
    ce = (0, $.useCallback)(
      (e, t) => {
        let n = it({ currentComments: v[e] ?? [], nextComments: t });
        (x(null), y((n) => ({ ...n, [e]: t })));
        for (let e of n) J(e);
      },
      [v, J],
    );
  return re
    ? (0, Q.jsx)(we, {})
    : B?.status === `success`
      ? V.length === 0
        ? (0, Q.jsx)(Ln, {
            children: (0, Q.jsx)(k, {
              id: `pullRequestsPage.codeReview.empty`,
              defaultMessage: `No code changes`,
              description: `Empty state shown when a pull request has no code changes`,
            }),
          })
        : (0, Q.jsxs)(C.Provider, {
            value: ie,
            children: [
              b == null
                ? null
                : (0, Q.jsx)(`div`, {
                    className: `mx-4 mb-2 rounded-lg border border-token-charts-red/40 bg-token-charts-red/10 px-3 py-2 text-sm text-token-charts-red`,
                    children: b,
                  }),
              (0, Q.jsx)(ln, {
                id: Nn,
                className: `min-h-0 flex-1`,
                defaultLeftPercent: kn,
                drawerBreakpoint: Mn,
                isLeftOpen: n,
                leftClassName: `pl-4`,
                left: (0, Q.jsxs)(`div`, {
                  className: `flex h-full min-h-0 flex-col`,
                  children: [
                    (0, Q.jsx)(`div`, {
                      className: `shrink-0 pb-1`,
                      children: (0, Q.jsx)(lt, {
                        inputId: `pull-request-review-file-search`,
                        onQueryChange: T,
                        searchQuery: w,
                      }),
                    }),
                    (0, Q.jsx)(`div`, {
                      className: `min-h-0 flex-1`,
                      children: (0, Q.jsx)(st, {
                        activePath: m,
                        commentCountByPath: K,
                        cwd: e,
                        onSelectPath: q,
                        entries: se.map((e) => ({ displayPath: e, path: e })),
                      }),
                    }),
                  ],
                }),
                minLeftWidth: jn,
                minRightWidth: An,
                onLeftOpenChange: i,
                right: (0, Q.jsx)(`div`, {
                  ref: ae,
                  className: `flex h-full min-w-0 flex-1 flex-col overflow-x-hidden overflow-y-auto pr-4 pb-3 pl-2 [overflow-anchor:none]`,
                  children: (0, Q.jsx)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: V.map((t) =>
                      (0, Q.jsx)(
                        `div`,
                        {
                          ref: (e) => {
                            oe(t.metadata.name, e);
                          },
                          children: (0, Q.jsx)(Dn, {
                            comments: v[t.metadata.name] ?? [],
                            commentAuthorAvatarUrl: W,
                            commentAuthorLabel: G,
                            cwd: e,
                            diffMode: f,
                            file: t,
                            hostConfig: u,
                            readonlyComments: a,
                            submittingCommentKeys: D,
                            onCommentsChange: (e) => {
                              ce(t.metadata.name, e);
                            },
                          }),
                        },
                        t.metadata.name,
                      ),
                    ),
                  }),
                }),
              }),
            ],
          })
      : (0, Q.jsx)(Ln, {
          children: (0, Q.jsx)(k, {
            id: `pullRequestsPage.codeReview.error`,
            defaultMessage: `Couldn’t load pull request diff`,
            description: `Error shown when the pull request code review diff cannot be loaded`,
          }),
        });
}
function Ln(e) {
  let t = (0, Z.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`div`, {
          className: `flex h-full items-center justify-center px-4 py-8 text-sm text-token-description-foreground`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Rn(e) {
  let t = (0, Z.c)(36),
    {
      autoFocus: n,
      hostId: r,
      item: i,
      onCancel: a,
      onCommentPosted: o,
      replyToAuthorLogin: c,
      replyToReviewThreadId: l,
      repo: u,
      surface: d,
    } = e,
    f = n === void 0 ? !1 : n,
    p = d === void 0 ? `pull_request_page` : d,
    m = A(O),
    h = ee(),
    [g, _] = (0, $.useState)(``),
    [v, y] = (0, $.useState)(null),
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { source: `pull_request_board` }), (t[0] = b))
    : (b = t[0]);
  let x = ne(`gh-pr-comment`, b),
    { data: S } = j(On, r),
    C;
  t[1] === g ? (C = t[2]) : ((C = g.trim()), (t[1] = g), (t[2] = C));
  let T = C,
    E = l != null,
    D;
  t[3] !== r ||
  t[4] !== E ||
  t[5] !== i ||
  t[6] !== x ||
  t[7] !== o ||
  t[8] !== l ||
  t[9] !== u ||
  t[10] !== m ||
  t[11] !== p ||
  t[12] !== T
    ? ((D = async (e) => {
        if ((e.preventDefault(), !T || x.isPending)) return;
        y(null);
        let t = await x
          .mutateAsync({
            body: T,
            cwd: s(i.cwd),
            hostId: r,
            number: i.number,
            ...(l == null ? {} : { replyToReviewThreadId: l }),
            repo: u,
          })
          .catch(Bn);
        if (t.status === `error`) {
          y(t.error);
          return;
        }
        (Mt(m, { kind: E ? `reply` : `comment`, surface: p }),
          _(``),
          await o().catch(zn));
      }),
      (t[3] = r),
      (t[4] = E),
      (t[5] = i),
      (t[6] = x),
      (t[7] = o),
      (t[8] = l),
      (t[9] = u),
      (t[10] = m),
      (t[11] = p),
      (t[12] = T),
      (t[13] = D))
    : (D = t[13]);
  let k = D,
    M = S?.status === `success` ? S : void 0,
    N;
  t[14] !== h || t[15] !== M
    ? ((N = Un({ intl: h, user: M })), (t[14] = h), (t[15] = M), (t[16] = N))
    : (N = t[16]);
  let te = N,
    P = E && `w-full`,
    F;
  t[17] === P
    ? (F = t[18])
    : ((F = w(`flex flex-col gap-2`, P)), (t[17] = P), (t[18] = F));
  let I;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => {
        (_(e), y(null));
      }),
      (t[19] = I))
    : (I = t[19]);
  let L = !T,
    R;
  t[20] !== te ||
  t[21] !== f ||
  t[22] !== g ||
  t[23] !== E ||
  t[24] !== x.isPending ||
  t[25] !== a ||
  t[26] !== c ||
  t[27] !== L
    ? ((R = (0, Q.jsx)(Vn, {
        autoFocus: f,
        authorAvatar: te,
        body: g,
        isPending: x.isPending,
        isReply: E,
        onBodyChange: I,
        onCancel: a,
        replyToAuthorLogin: c,
        submitDisabled: L,
      })),
      (t[20] = te),
      (t[21] = f),
      (t[22] = g),
      (t[23] = E),
      (t[24] = x.isPending),
      (t[25] = a),
      (t[26] = c),
      (t[27] = L),
      (t[28] = R))
    : (R = t[28]);
  let z;
  t[29] === v
    ? (z = t[30])
    : ((z =
        v == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `px-1 text-sm text-token-charts-red`,
              children: v,
            })),
      (t[29] = v),
      (t[30] = z));
  let B;
  return (
    t[31] !== k || t[32] !== R || t[33] !== z || t[34] !== F
      ? ((B = (0, Q.jsxs)(`form`, {
          className: F,
          onSubmit: k,
          children: [R, z],
        })),
        (t[31] = k),
        (t[32] = R),
        (t[33] = z),
        (t[34] = F),
        (t[35] = B))
      : (B = t[35]),
    B
  );
}
function zn() {}
function Bn(e) {
  return { status: `error`, error: e.message };
}
function Vn(e) {
  let t = (0, Z.c)(40),
    {
      authorAvatar: n,
      autoFocus: r,
      body: i,
      isPending: a,
      isReply: o,
      onBodyChange: s,
      onCancel: c,
      replyToAuthorLogin: l,
      submitDisabled: u,
    } = e,
    d = ee(),
    f;
  t[0] !== d || t[1] !== o
    ? ((f = o
        ? d.formatMessage({
            id: `pullRequestsPage.detail.commentReplyInput.submit`,
            defaultMessage: `Post reply`,
            description: `Accessible label for posting a pull request activity reply`,
          })
        : d.formatMessage({
            id: `pullRequestsPage.detail.commentInput.submit`,
            defaultMessage: `Post comment`,
            description: `Accessible label for posting a pull request detail comment`,
          })),
      (t[0] = d),
      (t[1] = o),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] !== d || t[4] !== o
    ? ((m = o
        ? d.formatMessage({
            id: `pullRequestsPage.detail.commentReplyInput.ariaLabel`,
            defaultMessage: `Pull request reply`,
            description: `Accessible label for the pull request detail reply composer`,
          })
        : d.formatMessage({
            id: `pullRequestsPage.detail.commentInput.ariaLabel`,
            defaultMessage: `Pull request comment`,
            description: `Accessible label for the pull request detail comment composer`,
          })),
      (t[3] = d),
      (t[4] = o),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    g;
  t[6] !== d || t[7] !== o || t[8] !== l
    ? ((g = o
        ? d.formatMessage(
            {
              id: `pullRequestsPage.detail.commentReplyInput.placeholder`,
              defaultMessage: `Reply to {author}…`,
              description: `Placeholder shown when replying to a pull request activity comment`,
            },
            {
              author:
                l ??
                d.formatMessage({
                  id: `pullRequestsPage.detail.commentReplyInput.unknownAuthor`,
                  defaultMessage: `comment`,
                  description: `Fallback reply target label for the pull request activity reply composer`,
                }),
            },
          )
        : d.formatMessage({
            id: `pullRequestsPage.detail.commentInput.placeholder`,
            defaultMessage: `Leave a comment…`,
            description: `Placeholder shown in the pull request detail comment composer`,
          })),
      (t[6] = d),
      (t[7] = o),
      (t[8] = l),
      (t[9] = g))
    : (g = t[9]);
  let _ = g,
    v = o
      ? `border-t border-token-border/24 px-3 py-2`
      : `rounded-[12px] border border-token-border bg-token-bg-secondary px-3 py-3`,
    y;
  t[10] === v
    ? (y = t[11])
    : ((y = w(`flex min-w-0 items-center gap-2`, v)), (t[10] = v), (t[11] = y));
  let b;
  t[12] === s
    ? (b = t[13])
    : ((b = (e) => {
        s(e.currentTarget.value);
      }),
      (t[12] = s),
      (t[13] = b));
  let x;
  t[14] !== r ||
  t[15] !== i ||
  t[16] !== h ||
  t[17] !== a ||
  t[18] !== _ ||
  t[19] !== b
    ? ((x = (0, Q.jsx)(`textarea`, {
        "aria-label": h,
        autoFocus: r,
        className: `min-h-7 min-w-0 flex-1 resize-none bg-transparent text-base leading-7 text-token-foreground outline-none placeholder:text-token-input-placeholder-foreground`,
        disabled: a,
        placeholder: _,
        rows: 1,
        value: i,
        onChange: b,
        onKeyDown: Hn,
      })),
      (t[14] = r),
      (t[15] = i),
      (t[16] = h),
      (t[17] = a),
      (t[18] = _),
      (t[19] = b),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] !== d || t[22] !== c
    ? ((S =
        c == null
          ? null
          : (0, Q.jsx)(U, {
              delayDuration: 250,
              tooltipContent: d.formatMessage({
                id: `pullRequestsPage.detail.commentReplyInput.cancelTooltip`,
                defaultMessage: `Cancel reply`,
                description: `Tooltip for closing a pull request activity reply composer`,
              }),
              children: (0, Q.jsx)(se, {
                "aria-label": d.formatMessage({
                  id: `pullRequestsPage.detail.commentReplyInput.cancel`,
                  defaultMessage: `Cancel`,
                  description: `Button label for closing a pull request activity reply composer`,
                }),
                color: `ghost`,
                size: `composerSm`,
                uniform: !0,
                onClick: c,
                children: (0, Q.jsx)(ue, { className: `icon-xs` }),
              }),
            })),
      (t[21] = d),
      (t[22] = c),
      (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] === a
    ? (C = t[25])
    : ((C = a ? null : (0, Q.jsx)(qe, { className: `icon-xs` })),
      (t[24] = a),
      (t[25] = C));
  let T;
  t[26] !== a || t[27] !== u || t[28] !== p || t[29] !== C
    ? ((T = (0, Q.jsx)(se, {
        "aria-label": p,
        color: `primary`,
        disabled: u,
        loading: a,
        size: `composerSm`,
        type: `submit`,
        uniform: !0,
        children: C,
      })),
      (t[26] = a),
      (t[27] = u),
      (t[28] = p),
      (t[29] = C),
      (t[30] = T))
    : (T = t[30]);
  let E;
  t[31] !== p || t[32] !== T
    ? ((E = (0, Q.jsx)(U, {
        delayDuration: 250,
        tooltipContent: p,
        children: T,
      })),
      (t[31] = p),
      (t[32] = T),
      (t[33] = E))
    : (E = t[33]);
  let D;
  return (
    t[34] !== n || t[35] !== E || t[36] !== y || t[37] !== x || t[38] !== S
      ? ((D = (0, Q.jsxs)(`div`, { className: y, children: [n, x, S, E] })),
        (t[34] = n),
        (t[35] = E),
        (t[36] = y),
        (t[37] = x),
        (t[38] = S),
        (t[39] = D))
      : (D = t[39]),
    D
  );
}
function Hn(e) {
  (e.metaKey || e.ctrlKey) &&
    e.key === `Enter` &&
    (e.preventDefault(), e.currentTarget.form?.requestSubmit());
}
function Un({ intl: e, user: t }) {
  let n =
    t?.login ??
    e.formatMessage({
      id: `pullRequestsPage.detail.commentReplyInput.fallbackAuthor`,
      defaultMessage: `GitHub`,
      description: `Fallback avatar text for the pull request activity reply composer`,
    });
  return (0, Q.jsx)(Be, {
    children:
      t?.avatarUrl == null
        ? (0, Q.jsx)(`span`, {
            className: `flex size-6 items-center justify-center rounded-full border border-token-border/20 bg-token-bg-primary/60 text-xs font-semibold text-token-foreground`,
            children: n.slice(0, 1).toUpperCase(),
          })
        : (0, Q.jsx)(`img`, {
            alt: e.formatMessage(
              {
                id: `pullRequestsPage.detail.commentReplyInput.avatarAlt`,
                defaultMessage: `{author} avatar`,
                description: `Alt text for the current GitHub user's avatar on a pull request reply composer`,
              },
              { author: n },
            ),
            className: `size-6 rounded-full border border-token-border/14 object-cover`,
            src: t.avatarUrl,
          }),
  });
}
function Wn(e) {
  let t = (0, Z.c)(24),
    { item: n } = e,
    r = E(vt, n.url),
    i = M(r.conversationId$),
    a = M(r.pendingWorktreeId$),
    o = M(r.ciJobsFixed$),
    s = M(r.mergeConflictsResolved$),
    c = M(We),
    l = c.data,
    u,
    d,
    f;
  if (t[0] !== l?.items || t[1] !== i || t[2] !== a) {
    let e = Ge({
      automations: l?.items ?? [],
      conversationId: i,
      includePausedAutomations: !0,
    });
    u = i == null && a != null;
    let n;
    (t[6] !== i || t[7] !== a
      ? ((n = Jt({ conversationId: i, pendingWorktreeId: a })),
        (t[6] = i),
        (t[7] = a),
        (t[8] = n))
      : (n = t[8]),
      (f = n),
      (d = Gn({ automationStatus: e?.status, isTaskStarting: u })),
      (t[0] = l?.items),
      (t[1] = i),
      (t[2] = a),
      (t[3] = u),
      (t[4] = d),
      (t[5] = f));
  } else ((u = t[3]), (d = t[4]), (f = t[5]));
  let p = d;
  if ((i == null && a == null) || (!u && c.isLoading) || p == null) return null;
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(Ee.SectionLabel, {
        children: (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.mergeHelperTask`,
          defaultMessage: `Codex task`,
          description: `Section title for the Codex task working on a pull request`,
        }),
      })),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(Re, { className: `icon-xs shrink-0` })), (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === p
    ? (g = t[12])
    : ((g = (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2 text-sm text-token-foreground`,
        children: [
          h,
          (0, Q.jsx)(`span`, {
            className: `truncate`,
            children: (0, Q.jsx)(Kn, { status: p }),
          }),
        ],
      })),
      (t[11] = p),
      (t[12] = g));
  let _;
  t[13] !== o || t[14] !== s
    ? ((_ = (0, Q.jsx)(Jn, { ciJobsFixed: o, mergeConflictsResolved: s })),
      (t[13] = o),
      (t[14] = s),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] !== g || t[17] !== _
    ? ((v = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-1`,
        children: [g, _],
      })),
      (t[16] = g),
      (t[17] = _),
      (t[18] = v))
    : (v = t[18]);
  let y;
  t[19] === f
    ? (y = t[20])
    : ((y = (0, Q.jsx)(qn, { taskRoute: f })), (t[19] = f), (t[20] = y));
  let b;
  return (
    t[21] !== v || t[22] !== y
      ? ((b = (0, Q.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [
            m,
            (0, Q.jsx)(Ee.Message, {
              compact: !0,
              children: (0, Q.jsxs)(`div`, {
                className: `flex min-w-0 items-center justify-between gap-3`,
                children: [v, y],
              }),
            }),
          ],
        })),
        (t[21] = v),
        (t[22] = y),
        (t[23] = b))
      : (b = t[23]),
    b
  );
}
function Gn({ automationStatus: e, isTaskStarting: t }) {
  switch (t ? `STARTING` : e) {
    case `STARTING`:
      return `STARTING`;
    case `ACTIVE`:
      return `ACTIVE`;
    case `PAUSED`:
      return `PAUSED`;
    case `DELETED`:
    case void 0:
      return null;
  }
}
function Kn(e) {
  let t = (0, Z.c)(3),
    { status: n } = e;
  switch (n) {
    case `STARTING`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.mergeHelperTask.starting`,
              defaultMessage: `Starting Codex task`,
              description: `Status text shown while a Codex task is starting for a pull request`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `PAUSED`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.mergeHelperTask.paused`,
              defaultMessage: `Codex task is paused`,
              description: `Status text shown when the Codex task heartbeat for a pull request is paused`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `ACTIVE`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.mergeHelperTask.active`,
              defaultMessage: `Codex is working on this PR`,
              description: `Status text shown while Codex is working on a pull request`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function qn(e) {
  let t = (0, Z.c)(7),
    { taskRoute: n } = e,
    r = ie(),
    i = n == null,
    a;
  t[0] !== r || t[1] !== n
    ? ((a = () => {
        n != null && r(n);
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(k, {
        id: `pullRequestsPage.detail.mergeHelperTask.open`,
        defaultMessage: `Open`,
        description: `Button label that opens the Codex task working on a pull request`,
      })),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== i || t[5] !== a
      ? ((s = (0, Q.jsx)(se, {
          color: `secondary`,
          disabled: i,
          size: `composerSm`,
          onClick: a,
          children: o,
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Jn(e) {
  let t = (0, Z.c)(14),
    { ciJobsFixed: n, mergeConflictsResolved: r } = e,
    i = n > 0,
    a = r > 0;
  if (!i && !a) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`span`, {
            className: `text-xs text-token-description-foreground`,
            children: (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.mergeHelperTask.noProgress`,
              defaultMessage: `No fixes reported yet`,
              description: `Progress text shown before a PR auto-fix task reports fixes`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  t[1] !== n || t[2] !== i
    ? ((o = i
        ? (0, Q.jsx)(`span`, {
            children: (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.mergeHelperTask.ciJobsFixed`,
              defaultMessage: `{count, plural, one {# CI job fixed} other {# CI jobs fixed}}`,
              description: `Progress text showing how many CI jobs the PR auto-fix task fixed`,
              values: { count: n },
            }),
          })
        : null),
      (t[1] = n),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== i || t[5] !== a
    ? ((s = i && a ? (0, Q.jsx)(Je, { className: `shrink-0` }) : null),
      (t[4] = i),
      (t[5] = a),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] !== a || t[8] !== r
    ? ((c = a
        ? (0, Q.jsx)(`span`, {
            children: (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.mergeHelperTask.conflictsResolved`,
              defaultMessage: `{count, plural, one {# conflict resolved} other {# conflicts resolved}}`,
              description: `Progress text showing how many merge conflicts the PR auto-fix task resolved`,
              values: { count: r },
            }),
          })
        : null),
      (t[7] = a),
      (t[8] = r),
      (t[9] = c))
    : (c = t[9]);
  let l;
  return (
    t[10] !== o || t[11] !== s || t[12] !== c
      ? ((l = (0, Q.jsxs)(`span`, {
          className: `flex min-w-0 flex-wrap items-center gap-1 text-xs text-token-description-foreground`,
          children: [o, s, c],
        })),
        (t[10] = o),
        (t[11] = s),
        (t[12] = c),
        (t[13] = l))
      : (l = t[13]),
    l
  );
}
function Yn(e) {
  let t = (0, Z.c)(112),
    {
      hostId: n,
      item: r,
      onClose: i,
      relatedThreads: a,
      repo: o,
      showViewToggle: s,
      surface: c,
    } = e,
    l = s === void 0 ? !0 : s,
    u = c === void 0 ? `pull_request_page` : c,
    d = A(W),
    f = ee(),
    [p, m] = (0, $.useState)(`pull-request`),
    h = l ? p : `pull-request`,
    [g, _] = (0, $.useState)(!1),
    v;
  t[0] !== n || t[1] !== r || t[2] !== o
    ? ((v = hr({ hostId: n, item: r, repo: o })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = v))
    : (v = t[3]);
  let y = v,
    b = h === `code-review`,
    x;
  t[4] === b
    ? (x = t[5])
    : ((x = { enabled: b, intervalMs: N.ONE_MINUTE, staleTime: N.ONE_MINUTE }),
      (t[4] = b),
      (t[5] = x));
  let S;
  t[6] !== y || t[7] !== x
    ? ((S = { source: `pull_request_board`, params: y, queryConfig: x }),
      (t[6] = y),
      (t[7] = x),
      (t[8] = S))
    : (S = t[8]);
  let { data: C, refetch: T } = L(`gh-pr-comments`, S),
    E;
  t[9] === C
    ? (E = t[10])
    : ((E = C?.status === `success` ? C.commentAttachments : []),
      (t[9] = C),
      (t[10] = E));
  let D = E,
    O;
  t[11] !== f || t[12] !== r || t[13] !== d || t[14] !== u
    ? ((O = function (e) {
        (At(d, { action: `copy_url`, item: r, surface: u }),
          Ct({ scope: d, event: e, intl: f, url: r.url }));
      }),
      (t[11] = f),
      (t[12] = r),
      (t[13] = d),
      (t[14] = u),
      (t[15] = O))
    : (O = t[15]);
  let j = O,
    M;
  t[16] !== j || t[17] !== d.value.pathname
    ? ((M = () => {
        d.value.pathname === `/pull-requests` && j();
      }),
      (t[16] = j),
      (t[17] = d.value.pathname),
      (t[18] = M))
    : (M = t[18]);
  let te;
  (t[19] !== f ||
  t[20] !== r.isAuthor ||
  t[21] !== r.state ||
  t[22] !== r.url ||
  t[23] !== d ||
  t[24] !== u
    ? ((te = [f, r.isAuthor, r.state, r.url, d, u]),
      (t[19] = f),
      (t[20] = r.isAuthor),
      (t[21] = r.state),
      (t[22] = r.url),
      (t[23] = d),
      (t[24] = u),
      (t[25] = te))
    : (te = t[25]),
    P(`copy-working-directory`, M, te));
  let F;
  t[26] === r.state
    ? (F = t[27])
    : ((F = (0, Q.jsx)(Fe, { className: `icon-sm shrink-0`, state: r.state })),
      (t[26] = r.state),
      (t[27] = F));
  let I;
  t[28] === r.title
    ? (I = t[29])
    : ((I = (0, Q.jsx)(`div`, {
        className: `truncate text-base leading-6 font-medium text-token-foreground`,
        children: r.title,
      })),
      (t[28] = r.title),
      (t[29] = I));
  let ne;
  t[30] === r.number
    ? (ne = t[31])
    : ((ne = (0, Q.jsx)(`div`, {
        className: `shrink-0 text-sm font-medium text-token-description-foreground`,
        children: (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.pullRequestNumber`,
          defaultMessage: `#{number}`,
          description: `Pull request number shown next to the selected pull request title in the details panel`,
          values: { number: r.number },
        }),
      })),
      (t[30] = r.number),
      (t[31] = ne));
  let R;
  t[32] !== I || t[33] !== ne
    ? ((R = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [I, ne],
      })),
      (t[32] = I),
      (t[33] = ne),
      (t[34] = R))
    : (R = t[34]);
  let z;
  t[35] !== F || t[36] !== R
    ? ((z = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [F, R],
      })),
      (t[35] = F),
      (t[36] = R),
      (t[37] = z))
    : (z = t[37]);
  let B;
  t[38] === r.headBranch
    ? (B = t[39])
    : ((B = (0, Q.jsx)(`span`, {
        className: `truncate`,
        children: r.headBranch,
      })),
      (t[38] = r.headBranch),
      (t[39] = B));
  let ie;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Q.jsx)(`span`, { className: `shrink-0`, children: `->` })),
      (t[40] = ie))
    : (ie = t[40]);
  let ae;
  t[41] === r.baseBranch
    ? (ae = t[42])
    : ((ae = (0, Q.jsx)(`span`, {
        className: `truncate`,
        children: r.baseBranch,
      })),
      (t[41] = r.baseBranch),
      (t[42] = ae));
  let oe;
  t[43] !== B || t[44] !== ae
    ? ((oe = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1 pl-6 text-xs text-token-description-foreground`,
        children: [B, ie, ae],
      })),
      (t[43] = B),
      (t[44] = ae),
      (t[45] = oe))
    : (oe = t[45]);
  let V;
  t[46] !== z || t[47] !== oe
    ? ((V = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-1`,
        children: [z, oe],
      })),
      (t[46] = z),
      (t[47] = oe),
      (t[48] = V))
    : (V = t[48]);
  let H;
  t[49] === f
    ? (H = t[50])
    : ((H = f.formatMessage({
        id: `pullRequests.copyPullRequestUrl`,
        defaultMessage: `Copy PR URL`,
        description: `Tooltip for a button that copies a pull request URL to the clipboard`,
      })),
      (t[49] = f),
      (t[50] = H));
  let G;
  t[51] === f
    ? (G = t[52])
    : ((G = f.formatMessage({
        id: `pullRequestsPage.detail.copyPullRequestUrl.ariaLabel`,
        defaultMessage: `Copy pull request URL`,
        description: `Accessible label for the button that copies the selected pull request URL`,
      })),
      (t[51] = f),
      (t[52] = G));
  let K;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Q.jsx)(Qe, { className: `icon-xs` })), (t[53] = K))
    : (K = t[53]);
  let J;
  t[54] !== j || t[55] !== G
    ? ((J = (0, Q.jsx)(se, {
        "aria-label": G,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        onClick: j,
        children: K,
      })),
      (t[54] = j),
      (t[55] = G),
      (t[56] = J))
    : (J = t[56]);
  let ce;
  t[57] !== H || t[58] !== J
    ? ((ce = (0, Q.jsx)(U, { tooltipContent: H, children: J })),
      (t[57] = H),
      (t[58] = J),
      (t[59] = ce))
    : (ce = t[59]);
  let Y;
  t[60] === f
    ? (Y = t[61])
    : ((Y = f.formatMessage({
        id: `pullRequestsPage.detail.openPullRequest.tooltip`,
        defaultMessage: `Open pull request on GitHub`,
        description: `Tooltip for the button that opens the selected pull request on GitHub`,
      })),
      (t[60] = f),
      (t[61] = Y));
  let le;
  t[62] === f
    ? (le = t[63])
    : ((le = f.formatMessage({
        id: `pullRequestsPage.detail.openPullRequest`,
        defaultMessage: `Open pull request on GitHub`,
        description: `Accessible label for the button that opens the selected pull request on GitHub`,
      })),
      (t[62] = f),
      (t[63] = le));
  let X;
  t[64] !== r || t[65] !== d || t[66] !== u
    ? ((X = () => {
        (At(d, { action: `open_in_browser`, item: r, surface: u }),
          re.dispatchMessage(`open-in-browser`, { url: r.url }));
      }),
      (t[64] = r),
      (t[65] = d),
      (t[66] = u),
      (t[67] = X))
    : (X = t[67]);
  let de;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Q.jsx)(q, { className: `icon-xs` })), (t[68] = de))
    : (de = t[68]);
  let fe;
  t[69] !== le || t[70] !== X
    ? ((fe = (0, Q.jsx)(se, {
        "aria-label": le,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        onClick: X,
        children: de,
      })),
      (t[69] = le),
      (t[70] = X),
      (t[71] = fe))
    : (fe = t[71]);
  let pe;
  t[72] !== Y || t[73] !== fe
    ? ((pe = (0, Q.jsx)(U, { tooltipContent: Y, children: fe })),
      (t[72] = Y),
      (t[73] = fe),
      (t[74] = pe))
    : (pe = t[74]);
  let me;
  t[75] === f
    ? (me = t[76])
    : ((me = f.formatMessage({
        id: `pullRequestsPage.detail.closePanel`,
        defaultMessage: `Close pull request details`,
        description: `Accessible label for the button that closes the pull request detail panel`,
      })),
      (t[75] = f),
      (t[76] = me));
  let he;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Q.jsx)(ue, { className: `icon-xs` })), (t[77] = he))
    : (he = t[77]);
  let ge;
  t[78] !== i || t[79] !== me
    ? ((ge = (0, Q.jsx)(se, {
        "aria-label": me,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        onClick: i,
        children: he,
      })),
      (t[78] = i),
      (t[79] = me),
      (t[80] = ge))
    : (ge = t[80]);
  let _e;
  t[81] !== ce || t[82] !== pe || t[83] !== ge
    ? ((_e = (0, Q.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-1`,
        children: [ce, pe, ge],
      })),
      (t[81] = ce),
      (t[82] = pe),
      (t[83] = ge),
      (t[84] = _e))
    : (_e = t[84]);
  let ve;
  t[85] !== V || t[86] !== _e
    ? ((ve = (0, Q.jsxs)(`div`, {
        className: `flex shrink-0 items-center justify-between gap-3 border-b border-token-border px-4 py-4`,
        children: [V, _e],
      })),
      (t[85] = V),
      (t[86] = _e),
      (t[87] = ve))
    : (ve = t[87]);
  let ye;
  t[88] !== h ||
  t[89] !== f ||
  t[90] !== g ||
  t[91] !== r ||
  t[92] !== d ||
  t[93] !== p ||
  t[94] !== l ||
  t[95] !== u
    ? ((ye = l
        ? (0, Q.jsxs)(`div`, {
            className: w(
              `flex shrink-0 items-center justify-between gap-3 px-4 py-3`,
              h === `pull-request` ? `border-b border-token-border` : null,
            ),
            children: [
              (0, Q.jsx)(St, {
                ariaLabel: f.formatMessage({
                  id: `pullRequestsPage.detail.viewToggle.ariaLabel`,
                  defaultMessage: `Pull request detail views`,
                  description: `Accessible label for the pull request detail panel view toggle`,
                }),
                options: [
                  {
                    id: `pull-request`,
                    label: (0, Q.jsx)(k, {
                      id: `pullRequestsPage.detail.viewToggle.pullRequest`,
                      defaultMessage: `PR`,
                      description: `Tab label for the pull request details view`,
                    }),
                  },
                  {
                    id: `code-review`,
                    label: (0, Q.jsx)(k, {
                      id: `pullRequestsPage.detail.viewToggle.codeReview`,
                      defaultMessage: `Code review`,
                      description: `Tab label for the pull request code review view`,
                    }),
                  },
                ],
                selectedColor: `secondary`,
                selectedId: p,
                size: `toolbar`,
                unselectedColor: `ghost`,
                onSelect: (e) => {
                  (e !== p &&
                    At(d, {
                      action:
                        e === `pull-request`
                          ? `open_pull_request_view`
                          : `open_code_review_view`,
                      item: r,
                      surface: u,
                    }),
                    m(e));
                },
              }),
              h === `code-review`
                ? (0, Q.jsx)(Pn, { isFileTreeOpen: g, onFileTreeOpenChange: _ })
                : null,
            ],
          })
        : null),
      (t[88] = h),
      (t[89] = f),
      (t[90] = g),
      (t[91] = r),
      (t[92] = d),
      (t[93] = p),
      (t[94] = l),
      (t[95] = u),
      (t[96] = ye))
    : (ye = t[96]);
  let be;
  t[97] !== h ||
  t[98] !== n ||
  t[99] !== g ||
  t[100] !== r ||
  t[101] !== D ||
  t[102] !== T ||
  t[103] !== a ||
  t[104] !== o ||
  t[105] !== y ||
  t[106] !== u
    ? ((be = (0, Q.jsx)(`div`, {
        className: `flex min-h-0 flex-1 flex-col`,
        children:
          h === `code-review`
            ? (0, Q.jsx)(`div`, {
                className: `flex min-h-0 flex-1 flex-col`,
                children: (0, Q.jsx)(`div`, {
                  className: `min-h-0 flex-1`,
                  children: (0, Q.jsx)(In, {
                    cwd: r.cwd,
                    hostId: n,
                    isFileTreeOpen: g,
                    number: r.number,
                    onCommentPosted: T,
                    onFileTreeOpenChange: _,
                    readonlyComments: D,
                    repo: o,
                    surface: u,
                  }),
                }),
              })
            : (0, Q.jsx)(Xn, {
                hostId: n,
                item: r,
                relatedThreads: a,
                request: y,
                surface: u,
              }),
      })),
      (t[97] = h),
      (t[98] = n),
      (t[99] = g),
      (t[100] = r),
      (t[101] = D),
      (t[102] = T),
      (t[103] = a),
      (t[104] = o),
      (t[105] = y),
      (t[106] = u),
      (t[107] = be))
    : (be = t[107]);
  let xe;
  return (
    t[108] !== ve || t[109] !== ye || t[110] !== be
      ? ((xe = (0, Q.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [ve, ye, be],
        })),
        (t[108] = ve),
        (t[109] = ye),
        (t[110] = be),
        (t[111] = xe))
      : (xe = t[111]),
    xe
  );
}
function Xn(e) {
  let t = (0, Z.c)(26),
    { hostId: n, item: r, relatedThreads: i, request: a, surface: o } = e,
    s = xt(),
    c;
  t[0] === a
    ? (c = t[1])
    : ((c = (0, Q.jsx)($n, { request: a })), (t[0] = a), (t[1] = c));
  let l;
  t[2] !== r || t[3] !== s
    ? ((l = s ? (0, Q.jsx)(Wn, { item: r }) : null),
      (t[2] = r),
      (t[3] = s),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === i
    ? (u = t[6])
    : ((u = (0, Q.jsx)(Zn, { threads: i })), (t[5] = i), (t[6] = u));
  let d, f;
  t[7] === a
    ? ((d = t[8]), (f = t[9]))
    : ((d = (0, Q.jsx)(er, { request: a })),
      (f = (0, Q.jsx)(tr, { request: a })),
      (t[7] = a),
      (t[8] = d),
      (t[9] = f));
  let p, m, h;
  t[10] !== n || t[11] !== r || t[12] !== a || t[13] !== o
    ? ((p = (0, Q.jsx)(ir, { hostId: n, item: r, request: a, surface: o })),
      (m = (0, Q.jsx)(ar, { hostId: n, item: r, request: a, surface: o })),
      (h = (0, Q.jsx)(or, { hostId: n, item: r, request: a, surface: o })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = a),
      (t[13] = o),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h))
    : ((p = t[14]), (m = t[15]), (h = t[16]));
  let g;
  return (
    t[17] !== c ||
    t[18] !== l ||
    t[19] !== u ||
    t[20] !== d ||
    t[21] !== f ||
    t[22] !== p ||
    t[23] !== m ||
    t[24] !== h
      ? ((g = (0, Q.jsxs)(`div`, {
          className: `flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 py-4`,
          children: [c, l, u, d, f, p, m, h],
        })),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u),
        (t[20] = d),
        (t[21] = f),
        (t[22] = p),
        (t[23] = m),
        (t[24] = h),
        (t[25] = g))
      : (g = t[25]),
    g
  );
}
function Zn(e) {
  let t = (0, Z.c)(5),
    { threads: n } = e;
  if (n.length === 0) return null;
  let r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(Ee.SectionLabel, {
        children: (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.relatedThreads`,
          defaultMessage: `Related chats`,
          description: `Section title for threads related to the selected pull request`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n ? (i = t[2]) : ((i = n.map(Qn)), (t[1] = n), (t[2] = i));
  let a;
  return (
    t[3] === i
      ? (a = t[4])
      : ((a = (0, Q.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [
            r,
            (0, Q.jsx)(`div`, {
              className: `flex flex-col gap-1 px-[var(--padding-row-x)] py-1 text-sm`,
              children: i,
            }),
          ],
        })),
        (t[3] = i),
        (t[4] = a)),
    a
  );
}
function Qn(e) {
  return (0, Q.jsx)(
    ae,
    {
      className: `min-w-0 cursor-interaction truncate rounded-md py-1 text-token-text-link-foreground hover:bg-token-list-hover-background hover:underline`,
      to: `/local/${e.id}`,
      children: e.title?.trim().length
        ? e.title
        : (0, Q.jsx)(k, {
            id: `pullRequestsPage.detail.relatedThreads.untitled`,
            defaultMessage: `Untitled chat`,
            description: `Fallback label for a related thread with no title`,
          }),
    },
    e.id,
  );
}
function $n(e) {
  let t = (0, Z.c)(16),
    { request: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { intervalMs: N.ONE_MINUTE, staleTime: N.ONE_MINUTE }), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = { source: `pull_request_board`, params: n, queryConfig: r }),
      (t[1] = n),
      (t[2] = i));
  let {
      data: a,
      error: o,
      isError: s,
      isFetching: c,
      isLoading: l,
    } = L(`gh-pr-body`, i),
    u = a?.status === `success` ? a.body : ``;
  if (s) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.body.errorTitle`,
          defaultMessage: `Couldn’t load pull request description`,
          description: `Title shown when loading a pull request description fails`,
        })),
        (t[3] = e))
      : (e = t[3]);
    let n;
    t[4] === o ? (n = t[5]) : ((n = Tr(o)), (t[4] = o), (t[5] = n));
    let r;
    return (
      t[6] === n
        ? (r = t[7])
        : ((r = (0, Q.jsx)(Er, { title: e, description: n })),
          (t[6] = n),
          (t[7] = r)),
      r
    );
  }
  if (l || a == null) {
    let e;
    return (
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(gr, {})), (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  let d;
  t[9] === c
    ? (d = t[10])
    : ((d = c
        ? (0, Q.jsx)(wr, {
            label: (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.body.refreshing`,
              defaultMessage: `Refreshing description`,
              description: `Accessible label shown while refreshing the pull request description`,
            }),
          })
        : null),
      (t[9] = c),
      (t[10] = d));
  let f;
  t[11] === u
    ? (f = t[12])
    : ((f =
        u.trim().length > 0
          ? (0, Q.jsx)(Le, {
              allowBasicHtml: !0,
              cwd: null,
              mediaPresentation: `scrollable`,
              children: ze(u),
            })
          : (0, Q.jsx)(`div`, {
              className: `text-sm text-token-description-foreground`,
              children: (0, Q.jsx)(k, {
                id: `pullRequestsPage.detail.noBody`,
                defaultMessage: `No description provided`,
                description: `Empty-state text shown when the selected pull request has no body`,
              }),
            })),
      (t[11] = u),
      (t[12] = f));
  let p;
  return (
    t[13] !== d || t[14] !== f
      ? ((p = (0, Q.jsxs)(`div`, {
          className: `vertical-scroll-fade-mask-bottom relative flex h-[20rem] shrink-0 flex-col gap-2 overflow-y-auto px-1 py-1 pr-2 [--edge-fade-distance:2rem]`,
          children: [d, f],
        })),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function er(e) {
  let t = (0, Z.c)(21),
    { request: n } = e,
    r = ee(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { intervalMs: N.ONE_MINUTE, staleTime: N.ONE_MINUTE }), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === n
    ? (a = t[2])
    : ((a = { source: `pull_request_board`, params: n, queryConfig: i }),
      (t[1] = n),
      (t[2] = a));
  let {
    data: o,
    error: s,
    isError: c,
    isFetching: l,
    isLoading: u,
  } = L(`gh-pr-comments`, a);
  if (c) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.reviewers.errorTitle`,
          defaultMessage: `Couldn’t load reviewers`,
          description: `Title shown when loading pull request reviewers fails`,
        })),
        (t[3] = e))
      : (e = t[3]);
    let n;
    t[4] === s ? (n = t[5]) : ((n = Tr(s)), (t[4] = s), (t[5] = n));
    let r;
    return (
      t[6] === n
        ? (r = t[7])
        : ((r = (0, Q.jsx)(Er, { title: e, description: n })),
          (t[6] = n),
          (t[7] = r)),
      r
    );
  }
  if (u || o == null) {
    let e;
    return (
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(_r, {})), (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  let d;
  t[9] === l
    ? (d = t[10])
    : ((d = l
        ? (0, Q.jsx)(wr, {
            label: (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.reviewers.refreshing`,
              defaultMessage: `Refreshing reviewers`,
              description: `Accessible label shown while refreshing pull request reviewers`,
            }),
          })
        : null),
      (t[9] = l),
      (t[10] = d));
  let f;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(k, {
        id: `pullRequestsPage.detail.noReviewers`,
        defaultMessage: `No requested reviewers`,
        description: `Empty-state text shown when the selected pull request has no reviewers`,
      })),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] !== o.reviewers || t[13] !== r
    ? ((p = Ze(o.reviewers, r)),
      (t[12] = o.reviewers),
      (t[13] = r),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(xr, {})), (t[15] = m))
    : (m = t[15]);
  let h;
  t[16] === p
    ? (h = t[17])
    : ((h = (0, Q.jsx)(Pe, { emptyMessage: f, groups: p, title: m })),
      (t[16] = p),
      (t[17] = h));
  let g;
  return (
    t[18] !== d || t[19] !== h
      ? ((g = (0, Q.jsxs)(`div`, {
          className: `relative flex max-w-[220px] flex-col`,
          children: [d, h],
        })),
        (t[18] = d),
        (t[19] = h),
        (t[20] = g))
      : (g = t[20]),
    g
  );
}
function tr(e) {
  let t = (0, Z.c)(17),
    { request: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { intervalMs: N.ONE_MINUTE, staleTime: N.ONE_MINUTE }), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = { source: `pull_request_board`, params: n, queryConfig: r }),
      (t[1] = n),
      (t[2] = i));
  let {
    data: a,
    error: o,
    isError: s,
    isFetching: c,
    isLoading: l,
  } = L(`gh-pr-checks`, i);
  if (s) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.checks.errorTitle`,
          defaultMessage: `Couldn’t load CI checks`,
          description: `Title shown when loading pull request CI checks fails`,
        })),
        (t[3] = e))
      : (e = t[3]);
    let n;
    t[4] === o ? (n = t[5]) : ((n = Tr(o)), (t[4] = o), (t[5] = n));
    let r;
    return (
      t[6] === n
        ? (r = t[7])
        : ((r = (0, Q.jsx)(Er, { title: e, description: n })),
          (t[6] = n),
          (t[7] = r)),
      r
    );
  }
  if (l || a == null) {
    let e;
    return (
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(vr, {})), (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  let u;
  t[9] === c
    ? (u = t[10])
    : ((u = c
        ? (0, Q.jsx)(wr, {
            label: (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.checks.refreshing`,
              defaultMessage: `Refreshing CI checks`,
              description: `Accessible label shown while refreshing pull request CI checks`,
            }),
          })
        : null),
      (t[9] = c),
      (t[10] = u));
  let d;
  t[11] !== a.checks || t[12] !== a.ciStatus
    ? ((d = (0, Q.jsx)(nr, { checks: a.checks, ciStatus: a.ciStatus })),
      (t[11] = a.checks),
      (t[12] = a.ciStatus),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== u || t[15] !== d
      ? ((f = (0, Q.jsxs)(`div`, {
          className: `relative flex flex-col px-[var(--padding-row-x)]`,
          children: [u, d],
        })),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f))
      : (f = t[16]),
    f
  );
}
function nr(e) {
  let t = (0, Z.c)(23),
    { checks: n, ciStatus: r } = e,
    [i, a] = (0, $.useState)(!1);
  if (n.length === 0) return null;
  let o;
  t[0] === r ? (o = t[1]) : ((o = je({ ciStatus: r })), (t[0] = r), (t[1] = o));
  let s;
  t[2] === r ? (s = t[3]) : ((s = Ne(r)), (t[2] = r), (t[3] = s));
  let c = i ? 180 : 0,
    l;
  t[4] === c ? (l = t[5]) : ((l = { rotate: c }), (t[4] = c), (t[5] = l));
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(Oe, { className: `icon-2xs` })), (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === l
    ? (d = t[8])
    : ((d = (0, Q.jsx)(ce.span, {
        "aria-hidden": !0,
        className: `inline-flex items-center text-token-foreground/40`,
        initial: !1,
        animate: l,
        transition: De,
        children: u,
      })),
      (t[7] = l),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () => {
        a(rr);
      }),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== i || t[11] !== o || t[12] !== s || t[13] !== d
    ? ((p = (0, Q.jsx)(mt, {
        ariaExpanded: i,
        icon: o,
        label: s,
        trailing: d,
        onClick: f,
      })),
      (t[10] = i),
      (t[11] = o),
      (t[12] = s),
      (t[13] = d),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] !== n || t[16] !== i
    ? ((m = i
        ? (0, Q.jsx)(
            ce.div,
            {
              initial: { height: 0, opacity: 0, marginTop: 0 },
              animate: { height: `auto`, opacity: 1, marginTop: 0 },
              exit: { height: 0, opacity: 0, marginTop: 0 },
              transition: De,
              className: `z-10`,
              children: (0, Q.jsx)(Tt, { checks: n }),
            },
            `checks`,
          )
        : null),
      (t[15] = n),
      (t[16] = i),
      (t[17] = m))
    : (m = t[17]);
  let h;
  t[18] === m
    ? (h = t[19])
    : ((h = (0, Q.jsx)(Y, { initial: !1, children: m })),
      (t[18] = m),
      (t[19] = h));
  let g;
  return (
    t[20] !== h || t[21] !== p
      ? ((g = (0, Q.jsxs)(`div`, {
          className: `relative z-10 flex flex-col`,
          children: [p, h],
        })),
        (t[20] = h),
        (t[21] = p),
        (t[22] = g))
      : (g = t[22]),
    g
  );
}
function rr(e) {
  return !e;
}
function ir(e) {
  let t = (0, Z.c)(36),
    { hostId: n, item: r, request: i, surface: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { intervalMs: N.ONE_MINUTE, staleTime: N.ONE_MINUTE }), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === i
    ? (s = t[2])
    : ((s = { source: `pull_request_board`, params: i, queryConfig: o }),
      (t[1] = i),
      (t[2] = s));
  let {
      data: c,
      error: l,
      isError: u,
      isFetching: d,
      isLoading: f,
      refetch: p,
    } = L(`gh-pr-comments`, s),
    m = d && c != null,
    h;
  t[3] === m
    ? (h = t[4])
    : ((h = (0, Q.jsx)(Sr, { isFetching: m })), (t[3] = m), (t[4] = h));
  let g = h;
  if (u) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.activity.errorTitle`,
          defaultMessage: `Couldn’t load pull request activity`,
          description: `Title shown when loading pull request activity fails`,
        })),
        (t[5] = e))
      : (e = t[5]);
    let n;
    t[6] === l ? (n = t[7]) : ((n = Tr(l)), (t[6] = l), (t[7] = n));
    let r;
    return (
      t[8] === n
        ? (r = t[9])
        : ((r = (0, Q.jsx)(Er, { title: e, description: n })),
          (t[8] = n),
          (t[9] = r)),
      r
    );
  }
  if (f || c == null) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(yr, {})), (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  if (c.activityItems.length === 0) {
    let e;
    t[11] === g
      ? (e = t[12])
      : ((e = (0, Q.jsx)(Ee.SectionLabel, { children: g })),
        (t[11] = g),
        (t[12] = e));
    let n;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(Ee.Message, {
          compact: !0,
          children: (0, Q.jsx)(k, {
            id: `pullRequestsPage.detail.noComments`,
            defaultMessage: `No activity`,
            description: `Empty-state text shown when the selected pull request has no activity`,
          }),
        })),
        (t[13] = n))
      : (n = t[13]);
    let r;
    return (
      t[14] === e
        ? (r = t[15])
        : ((r = (0, Q.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [e, n],
          })),
          (t[14] = e),
          (t[15] = r)),
      r
    );
  }
  let _;
  t[16] === g
    ? (_ = t[17])
    : ((_ = (0, Q.jsx)(Ee.SectionLabel, { children: g })),
      (t[16] = g),
      (t[17] = _));
  let v;
  if (
    t[18] !== c.activityItems ||
    t[19] !== c.repo ||
    t[20] !== n ||
    t[21] !== r ||
    t[22] !== p ||
    t[23] !== a
  ) {
    let e;
    (t[25] !== c.repo ||
    t[26] !== n ||
    t[27] !== r ||
    t[28] !== p ||
    t[29] !== a
      ? ((e = (e) =>
          (0, Q.jsx)(
            sr,
            {
              hostId: n,
              item: e,
              onCommentPosted: p,
              pullRequestItem: r,
              repo: c.repo,
              surface: a,
            },
            `${e.type}:${e.id}`,
          )),
        (t[25] = c.repo),
        (t[26] = n),
        (t[27] = r),
        (t[28] = p),
        (t[29] = a),
        (t[30] = e))
      : (e = t[30]),
      (v = c.activityItems.map(e)),
      (t[18] = c.activityItems),
      (t[19] = c.repo),
      (t[20] = n),
      (t[21] = r),
      (t[22] = p),
      (t[23] = a),
      (t[24] = v));
  } else v = t[24];
  let y;
  t[31] === v
    ? (y = t[32])
    : ((y = (0, Q.jsx)(`div`, {
        className: `flex flex-col gap-3`,
        children: v,
      })),
      (t[31] = v),
      (t[32] = y));
  let b;
  return (
    t[33] !== _ || t[34] !== y
      ? ((b = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-3`,
          children: [_, y],
        })),
        (t[33] = _),
        (t[34] = y),
        (t[35] = b))
      : (b = t[35]),
    b
  );
}
function ar(e) {
  let t = (0, Z.c)(9),
    { hostId: n, item: r, request: i, surface: a } = e,
    o = D(),
    s = i.repo ?? null,
    c;
  t[0] !== o || t[1] !== i
    ? ((c = async () => {
        await o.invalidateQueries({ queryKey: R(`gh-pr-comments`, i) });
      }),
      (t[0] = o),
      (t[1] = i),
      (t[2] = c))
    : (c = t[2]);
  let l;
  return (
    t[3] !== n || t[4] !== r || t[5] !== a || t[6] !== s || t[7] !== c
      ? ((l = (0, Q.jsx)(Rn, {
          hostId: n,
          item: r,
          repo: s,
          surface: a,
          onCommentPosted: c,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = a),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function or(e) {
  let t = (0, Z.c)(21),
    { hostId: n, item: r, request: i, surface: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { intervalMs: N.ONE_MINUTE, staleTime: N.ONE_MINUTE }), (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === i
    ? (s = t[2])
    : ((s = { source: `pull_request_board`, params: i, queryConfig: o }),
      (t[1] = i),
      (t[2] = s));
  let {
    data: c,
    error: l,
    isError: u,
    isFetching: d,
    isLoading: f,
  } = L(`gh-pr-body`, s);
  if (!r.isAuthor) return null;
  if (u) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.actions.errorTitle`,
          defaultMessage: `Couldn’t load pull request actions`,
          description: `Title shown when loading pull request actions fails`,
        })),
        (t[3] = e))
      : (e = t[3]);
    let n;
    t[4] === l ? (n = t[5]) : ((n = Tr(l)), (t[4] = l), (t[5] = n));
    let r;
    return (
      t[6] === n
        ? (r = t[7])
        : ((r = (0, Q.jsx)(Er, { title: e, description: n })),
          (t[6] = n),
          (t[7] = r)),
      r
    );
  }
  let p;
  t[8] !== d || t[9] !== f
    ? ((p =
        d && !f
          ? (0, Q.jsx)(wr, {
              label: (0, Q.jsx)(k, {
                id: `pullRequestsPage.detail.actions.refreshing`,
                defaultMessage: `Refreshing actions`,
                description: `Accessible label shown while refreshing pull request actions`,
              }),
            })
          : null),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m = `${r.number}:${r.headBranch}`,
    h = c ?? null,
    g;
  t[11] !== n ||
  t[12] !== r ||
  t[13] !== i ||
  t[14] !== a ||
  t[15] !== m ||
  t[16] !== h
    ? ((g = (0, Q.jsx)(
        Zt,
        { hostId: n, item: r, pullRequestBody: h, request: i, surface: a },
        m,
      )),
      (t[11] = n),
      (t[12] = r),
      (t[13] = i),
      (t[14] = a),
      (t[15] = m),
      (t[16] = h),
      (t[17] = g))
    : (g = t[17]);
  let _;
  return (
    t[18] !== p || t[19] !== g
      ? ((_ = (0, Q.jsxs)(`div`, {
          className: `relative flex flex-col gap-2`,
          children: [p, g],
        })),
        (t[18] = p),
        (t[19] = g),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
function sr(e) {
  let t = (0, Z.c)(19),
    {
      hostId: n,
      item: r,
      onCommentPosted: i,
      pullRequestItem: a,
      repo: o,
      surface: s,
    } = e,
    [c, l] = (0, $.useState)(!1);
  if (r.type === `event`) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, Q.jsx)(lr, { item: r })), (t[0] = r), (t[1] = e)),
      e
    );
  }
  let u;
  t[2] !== n ||
  t[3] !== c ||
  t[4] !== r ||
  t[5] !== i ||
  t[6] !== a ||
  t[7] !== o ||
  t[8] !== s
    ? ((u =
        r.reviewThreadId == null
          ? null
          : c
            ? (0, Q.jsx)(Rn, {
                autoFocus: !0,
                hostId: n,
                item: a,
                onCancel: () => {
                  l(!1);
                },
                onCommentPosted: async () => {
                  (l(!1), await i());
                },
                replyToAuthorLogin: r.authorLogin,
                replyToReviewThreadId: r.reviewThreadId,
                repo: o,
                surface: s,
              })
            : (0, Q.jsx)(cr, {
                item: r,
                onReply: () => {
                  l(!0);
                },
              })),
      (t[2] = n),
      (t[3] = c),
      (t[4] = r),
      (t[5] = i),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== c ||
    t[11] !== r.authorAvatarUrl ||
    t[12] !== r.authorLogin ||
    t[13] !== r.body ||
    t[14] !== r.createdAt ||
    t[15] !== r.replies ||
    t[16] !== r.url ||
    t[17] !== u
      ? ((d = (0, Q.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (0, Q.jsx)(Ve, {
            authorLogin: r.authorLogin,
            authorAvatarUrl: r.authorAvatarUrl,
            body: r.body,
            bodyClassName: `max-h-96 overflow-y-auto`,
            createdAt: r.createdAt,
            metadataAccessory: u,
            surface: `card`,
            url: r.url,
            replies: r.replies,
            metadataAccessoryFlush: c,
          }),
        })),
        (t[10] = c),
        (t[11] = r.authorAvatarUrl),
        (t[12] = r.authorLogin),
        (t[13] = r.body),
        (t[14] = r.createdAt),
        (t[15] = r.replies),
        (t[16] = r.url),
        (t[17] = u),
        (t[18] = d))
      : (d = t[18]),
    d
  );
}
function cr(e) {
  let t = (0, Z.c)(10),
    { item: n, onReply: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = mr(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = (0, Q.jsx)(`div`, { className: `min-w-0 truncate`, children: a })),
      (t[2] = a),
      (t[3] = o));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(k, {
        id: `pullRequestsPage.detail.activityComment.reply`,
        defaultMessage: `Reply`,
        description: `Button label for replying to a pull request activity comment`,
      })),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === r
    ? (c = t[6])
    : ((c = (0, Q.jsx)(se, {
        color: `ghost`,
        size: `composerSm`,
        onClick: r,
        children: s,
      })),
      (t[5] = r),
      (t[6] = c));
  let l;
  return (
    t[7] !== o || t[8] !== c
      ? ((l = (0, Q.jsxs)(`div`, {
          className: `flex w-full min-w-0 items-center justify-between gap-3`,
          children: [o, c],
        })),
        (t[7] = o),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function lr(e) {
  let t = (0, Z.c)(31),
    { item: n } = e,
    r = ee(),
    i;
  t[0] !== r || t[1] !== n.actorLogin
    ? ((i =
        n.actorLogin ??
        r.formatMessage({
          id: `pullRequestsPage.detail.activityUnknownActor`,
          defaultMessage: `someone`,
          description: `Fallback actor label for a pull request timeline activity event`,
        })),
      (t[0] = r),
      (t[1] = n.actorLogin),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o,
    s,
    c;
  if (t[3] !== n.event) {
    let { Icon: e, iconClassName: r } = pr(n.event);
    ((c = `flex items-center gap-3 px-1 py-1 text-sm text-token-description-foreground`),
      (o = e),
      (s = w(`icon-sm shrink-0`, r)),
      (t[3] = n.event),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  } else ((o = t[4]), (s = t[5]), (c = t[6]));
  let l;
  t[7] !== o || t[8] !== s
    ? ((l = (0, Q.jsx)(o, { className: s })),
      (t[7] = o),
      (t[8] = s),
      (t[9] = l))
    : (l = t[9]);
  let u;
  t[10] !== a || t[11] !== n
    ? ((u = (0, Q.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, Q.jsx)(ur, { actorLabel: a, item: n }),
      })),
      (t[10] = a),
      (t[11] = n),
      (t[12] = u))
    : (u = t[12]);
  let d;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(`span`, {
        className: `shrink-0`,
        "aria-hidden": `true`,
        children: (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.activitySeparator`,
          defaultMessage: `·`,
          description: `Visual separator between a pull request activity event and its timestamp`,
        }),
      })),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] === n.createdAt
    ? (f = t[15])
    : ((f = He(n.createdAt)), (t[14] = n.createdAt), (t[15] = f));
  let p;
  t[16] === n.createdAt
    ? (p = t[17])
    : ((p = (0, Q.jsx)(`span`, {
        className: `inline`,
        children: (0, Q.jsx)(ke, { dateString: n.createdAt }),
      })),
      (t[16] = n.createdAt),
      (t[17] = p));
  let m;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(`span`, {
        className: `ms-1 inline`,
        children: (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.activityRelativeTimeAgo`,
          defaultMessage: `ago`,
          description: `Relative time suffix shown after a pull request timeline activity event timestamp`,
        }),
      })),
      (t[18] = m))
    : (m = t[18]);
  let h;
  t[19] === p
    ? (h = t[20])
    : ((h = (0, Q.jsxs)(`span`, { className: `shrink-0`, children: [p, m] })),
      (t[19] = p),
      (t[20] = h));
  let g;
  t[21] !== h || t[22] !== f
    ? ((g = (0, Q.jsx)(U, {
        delayDuration: 250,
        tooltipContent: f,
        children: h,
      })),
      (t[21] = h),
      (t[22] = f),
      (t[23] = g))
    : (g = t[23]);
  let _;
  t[24] !== g || t[25] !== u
    ? ((_ = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5`,
        children: [u, d, g],
      })),
      (t[24] = g),
      (t[25] = u),
      (t[26] = _))
    : (_ = t[26]);
  let v;
  return (
    t[27] !== _ || t[28] !== c || t[29] !== l
      ? ((v = (0, Q.jsxs)(`div`, { className: c, children: [l, _] })),
        (t[27] = _),
        (t[28] = c),
        (t[29] = l),
        (t[30] = v))
      : (v = t[30]),
    v
  );
}
function ur(e) {
  let t = (0, Z.c)(10),
    { actorLabel: n, item: r } = e,
    i = ee(),
    a;
  t[0] !== i || t[1] !== r.event
    ? ((a = dr(r.event, i)), (t[0] = i), (t[1] = r.event), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === o
    ? (s = t[4])
    : ((s = (0, Q.jsx)(`span`, { children: o })), (t[3] = o), (t[4] = s));
  let c;
  t[5] === n
    ? (c = t[6])
    : ((c = (0, Q.jsx)(fr, { children: n })), (t[5] = n), (t[6] = c));
  let l;
  return (
    t[7] !== s || t[8] !== c
      ? ((l = (0, Q.jsxs)(`span`, {
          className: `inline-flex gap-1`,
          children: [s, c],
        })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function dr(e, t) {
  switch (e) {
    case `approved`:
      return t.formatMessage({
        id: `pullRequestsPage.detail.activityApproved`,
        defaultMessage: `Approved by`,
        description: `Timeline event text shown before the actor who approved the pull request`,
      });
    case `changes_requested`:
      return t.formatMessage({
        id: `pullRequestsPage.detail.activityChangesRequested`,
        defaultMessage: `Changes requested by`,
        description: `Timeline event text shown before the actor who requested changes on the pull request`,
      });
    case `merged`:
      return t.formatMessage({
        id: `pullRequestsPage.detail.activityMerged`,
        defaultMessage: `Merged by`,
        description: `Timeline event text shown before the actor who merged the pull request`,
      });
    case `opened`:
      return t.formatMessage({
        id: `pullRequestsPage.detail.activityOpened`,
        defaultMessage: `Opened by`,
        description: `Timeline event text shown before the actor who opened the pull request`,
      });
  }
}
function fr(e) {
  let t = (0, Z.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`span`, {
          className: `font-medium text-token-foreground`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function pr(e) {
  switch (e) {
    case `approved`:
      return { Icon: Ye, iconClassName: `text-token-charts-green` };
    case `changes_requested`:
      return { Icon: ue, iconClassName: `text-token-charts-red` };
    case `merged`:
      return { Icon: Me, iconClassName: `text-token-charts-purple` };
    case `opened`:
      return { Icon: Ue, iconClassName: `text-token-charts-green` };
  }
}
function mr(e) {
  return e.path == null || e.line == null
    ? null
    : (0, Q.jsx)(`span`, {
        className: `min-w-0 truncate text-left`,
        children: (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.activityCommentLocation`,
          defaultMessage: `{path}:{line}`,
          description: `Footer label for a pull request timeline comment on a changed file`,
          values: { line: e.line, path: e.path },
        }),
      });
}
function hr({ hostId: e, item: t, repo: n }) {
  return {
    cwd: t.cwd,
    headBranch: t.headBranch,
    hostId: e,
    number: t.number,
    repo: n ?? null,
  };
}
function gr() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsxs)(`div`, {
          "aria-busy": `true`,
          className: `flex h-[20rem] shrink-0 items-center justify-center px-1 py-6 pr-2`,
          children: [
            (0, Q.jsx)(`span`, {
              className: `sr-only`,
              children: (0, Q.jsx)(k, {
                id: `pullRequestsPage.detail.body.loading`,
                defaultMessage: `Loading description`,
                description: `Accessible loading label shown while the pull request description loads`,
              }),
            }),
            (0, Q.jsx)(Ce, { className: `size-8` }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function _r() {
  let e = (0, Z.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Q.jsx)(Ee.SectionLabel, { children: (0, Q.jsx)(xr, {}) })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsxs)(`div`, {
          "aria-busy": `true`,
          className: `flex max-w-[220px] flex-col`,
          children: [
            t,
            (0, Q.jsx)(`div`, {
              className: `flex max-h-[104px] flex-col overflow-y-auto`,
              children: (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-2 px-[var(--padding-row-x)] py-[var(--padding-row-y)]`,
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(k, {
                      id: `pullRequestsPage.detail.reviewers.loading`,
                      defaultMessage: `Loading reviewers`,
                      description: `Accessible loading label shown while pull request reviewers load`,
                    }),
                  }),
                  (0, Q.jsx)(Cr, { className: `h-5 w-40` }),
                ],
              }),
            }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function vr() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`div`, {
          "aria-busy": `true`,
          className: `relative z-10 flex flex-col px-[var(--padding-row-x)]`,
          children: (0, Q.jsx)(mt, {
            icon: (0, Q.jsx)(K, {
              className: `icon-sm shrink-0 text-token-text-tertiary`,
            }),
            label: (0, Q.jsx)(k, {
              id: `pullRequestsPage.detail.checks.loading`,
              defaultMessage: `Loading CI checks`,
              description: `Loading row shown while pull request CI checks load`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function yr() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsxs)(`div`, {
          "aria-busy": `true`,
          className: `flex flex-col gap-3`,
          children: [
            (0, Q.jsx)(Ee.SectionLabel, { children: (0, Q.jsx)(Sr, {}) }),
            (0, Q.jsx)(br, {}),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function br() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-3 rounded-lg border border-token-border bg-token-main-surface-primary px-3 py-3`,
          children: [
            (0, Q.jsx)(`span`, {
              className: `sr-only`,
              children: (0, Q.jsx)(k, {
                id: `pullRequestsPage.detail.activity.loadingAuthor`,
                defaultMessage: `Loading activity`,
                description: `Accessible loading label shown while pull request activity loads`,
              }),
            }),
            (0, Q.jsx)(Cr, { className: `w-32` }),
            (0, Q.jsx)(Cr, { className: `w-11/12` }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function xr() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(k, {
          id: `pullRequestsPage.detail.reviewers`,
          defaultMessage: `Reviewers`,
          description: `Section title for pull request reviewers`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Sr(e) {
  let t = (0, Z.c)(5),
    { isFetching: n } = e,
    r = n === void 0 ? !1 : n,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(k, {
        id: `pullRequestsPage.detail.activity`,
        defaultMessage: `Activity`,
        description: `Section title for pull request activity`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = r
        ? (0, Q.jsx)(K, {
            className: `icon-xxs text-token-description-foreground`,
          })
        : null),
      (t[1] = r),
      (t[2] = a));
  let o;
  return (
    t[3] === a
      ? (o = t[4])
      : ((o = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [i, a],
        })),
        (t[3] = a),
        (t[4] = o)),
    o
  );
}
function Cr(e) {
  let t = (0, Z.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = w(
        `loading-shimmer block h-4 min-w-0 rounded-sm opacity-60 [background-clip:border-box] [-webkit-background-clip:border-box]`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, Q.jsx)(`span`, {
          ...r,
          "aria-hidden": `true`,
          className: i,
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function wr(e) {
  let t = (0, Z.c)(3),
    { label: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(K, { className: `icon-xxs` })), (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Q.jsxs)(`div`, {
          className: `pointer-events-none absolute top-1 right-1 z-10 flex justify-end px-1 text-token-description-foreground`,
          children: [
            r,
            (0, Q.jsx)(`span`, { className: `sr-only`, children: n }),
          ],
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function Tr(e) {
  return (
    e?.message ??
    (0, Q.jsx)(k, {
      id: `pullRequestsPage.detail.section.errorDescription`,
      defaultMessage: `Check your GitHub CLI auth and try again`,
      description: `Fallback description shown when loading part of the pull request details fails`,
    })
  );
}
function Er(e) {
  let t = (0, Z.c)(7),
    { description: n, title: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Q.jsx)(Ee.SectionLabel, {
        className: `px-0 py-0`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, Q.jsx)(`div`, {
        className: `text-sm text-token-description-foreground`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-xl border border-token-border bg-token-bg-fog px-3 py-3`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var Dr = [`unmet_checks`, `draft`, `ready`, `merged`],
  Or = {
    authored: `is:pr author:@me`,
    review: `is:pr is:open review-requested:@me`,
  };
function kr({ gitOrigins: e, workspaceGroups: t }) {
  let i = new Map(
      e.flatMap((e) => (e.originUrl == null ? [] : [[r(e.dir), e.originUrl]])),
    ),
    a = new Map();
  for (let e of t) {
    let t = e.repositoryData?.ownerRepo;
    if (t == null || e.path == null) continue;
    let o = i.get(r(e.path));
    if (o == null) continue;
    let s = n(o);
    if (s == null) continue;
    let c = `${t.owner}/${t.repoName}`,
      l = `${s.owner}/${s.repo}`,
      u = s.host === `github.com` ? l : `${s.host}/${l}`,
      d = { cwd: e.path, hostId: e.hostId, key: u, label: c, repo: u },
      f = a.get(u);
    (f == null ||
      Rr({
        currentCwd: f.option.cwd,
        currentIsCodexWorktree: f.isCodexWorktree,
        nextCwd: d.cwd,
        nextIsCodexWorktree: e.isCodexWorktree,
      })) &&
      a.set(u, { isCodexWorktree: e.isCodexWorktree, option: d });
  }
  return Array.from(a.values())
    .map((e) => e.option)
    .sort((e, t) => e.label.localeCompare(t.label));
}
function Ar({ repoOptions: e, requestedRepoKey: t }) {
  return t === `all` ? null : (e.find((e) => e.key === t) ?? e[0] ?? null);
}
function jr(e) {
  return Dr.map((t) => ({ key: t, items: e.filter((e) => zr(e, t)) })).filter(
    (e) => e.items.length > 0,
  );
}
function Mr(e) {
  let t = new Map();
  for (let n of e) {
    let e = n.gitInfo?.branch?.trim();
    if (!e) continue;
    let r = t.get(e) ?? [];
    (r.push({ id: n.id, title: n.title, updatedAt: n.updatedAt }), t.set(e, r));
  }
  return new Map(
    Array.from(t.entries()).map(([e, t]) => [
      e,
      t
        .sort((e, t) => t.updatedAt - e.updatedAt)
        .map(({ id: e, title: t }) => ({ id: e, title: t })),
    ]),
  );
}
function Nr(e) {
  return Or[e];
}
function Pr(e) {
  return e === `review` ? `review` : `authored`;
}
function Fr({ searchQuery: e, selectedFilterView: t }) {
  return t === `authored` && e.trim() === Nr(`authored`) ? null : e;
}
function Ir({
  items: e,
  selectedPullRequestNumber: t,
  selectedPullRequestUrl: n,
}) {
  return n == null
    ? (e.find((e) => e.number === t) ?? null)
    : (e.find((e) => e.url === n) ?? null);
}
function Lr(e) {
  if (e == null) return null;
  let t = Number(e);
  return !Number.isInteger(t) || t <= 0 ? null : t;
}
function Rr({
  currentCwd: e,
  currentIsCodexWorktree: t,
  nextCwd: n,
  nextIsCodexWorktree: r,
}) {
  return t === r
    ? e.length === n.length
      ? n.localeCompare(e) < 0
      : n.length > e.length
    : !r;
}
function zr(e, t) {
  switch (t) {
    case `draft`:
    case `merged`:
    case `ready`:
      return e.state === t;
    case `unmet_checks`:
      return e.state === `failing` || e.state === `in_progress`;
  }
}
export {
  Fr as a,
  Lr as c,
  Xt as d,
  It as f,
  wt as h,
  Nr as i,
  Ar as l,
  jt as m,
  Mr as n,
  Pr as o,
  At as p,
  kr as r,
  Ir as s,
  jr as t,
  Yn as u,
};
//# sourceMappingURL=pull-request-board-model.js.map
