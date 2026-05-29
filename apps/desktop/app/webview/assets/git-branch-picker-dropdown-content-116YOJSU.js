import { s as e } from "./chunk-Bj-mKKzh.js";
import { Rt as t, S as n, zn as r } from "./src-C.js";
import {
  $n as i,
  Ba as a,
  Bn as o,
  C as s,
  H as c,
  Kn as l,
  Mn as u,
  Nn as d,
  Pn as f,
  Qn as p,
  Zn as m,
  da as h,
  er as g,
  ir as _,
  kt as v,
  pt as y,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as b, t as x } from "./jsx-runtime.js";
import { t as S } from "./clsx-BcPLHiun.js";
import {
  $ as C,
  G as ee,
  L as w,
  Q as T,
  S as E,
  U as D,
  V as O,
  X as te,
  Y as k,
  Z as ne,
  _ as A,
  a as re,
  at as j,
  it as ie,
  l as M,
  nt as ae,
  ot as N,
  t as oe,
  tt as P,
  u as se,
  w as ce,
  wt as le,
  y as ue,
} from "./setting-storage.js";
import { m as de } from "./chunk-LFPYN7LY.js";
import { t as fe } from "./branch.js";
import { r as pe, t as me } from "./product-logger-DusapRyT.js";
import { a as he } from "./thread-context-inputs-DBrOekVr.js";
import { t as ge } from "./use-debounced-value-BtOJx-Vp.js";
import { r as F } from "./toast-signal.js";
import { r as I, t as _e } from "./tooltip-CDzchJxN.js";
import { t as L } from "./route-scope.js";
import { s as ve } from "./prompt-text-DuAhtLDu.js";
import { i as R } from "./use-model-settings-BGTYyORt.js";
import { t as ye } from "./button.js";
import { t as be } from "./spinner.js";
import { t as xe } from "./proxy.js";
import { t as Se } from "./x-C_RDKBp5.js";
import { t as Ce } from "./sumBy-zUPwGmzt.js";
import { i as z, n as we } from "./git-current-branch-query.js";
import { t as B } from "./app-intl-signal.js";
import { t as Te } from "./with-window.js";
import { n as Ee } from "./check-git-index-for-changes-CjhXjmKx.js";
import { d as De, l as Oe, n as ke } from "./dialog-layout.js";
import { n as V } from "./electron-menu-shortcuts.js";
import { t as Ae } from "./check-md.js";
import { t as je } from "./checkbox-DtuSNXXy.js";
import { r as H, t as Me } from "./dropdown-DtQxMoJw.js";
import { t as Ne } from "./chevron-NmAOI_v1.js";
import { t as U } from "./copy-to-clipboard-C2Mq2hN-.js";
import { t as Pe } from "./copy-Cen6nDnP.js";
import { t as Fe } from "./plus.js";
import { n as Ie, t as Le } from "./gh-cli-status-query-DoYMwBhd.js";
import { n as Re } from "./dist-wT0ygyN1.js";
import { n as ze } from "./use-git-default-branch-gyzefibF.js";
import { n as Be } from "./diff-stats.js";
import { t as Ve } from "./send-to-cloud.js";
import { t as He } from "./codex-analytics-attribution.js";
import { i as Ue, r as We, t as Ge } from "./gh-pull-request-status-query.js";
function Ke(e) {
  let t = e?.modelContextWindow ?? null,
    n = e?.last.totalTokens ?? null;
  if (t == null || t <= 0 || n == null || n < 0)
    return {
      percent: null,
      usedTokens: null,
      contextWindow: null,
      remainingTokens: null,
    };
  let r = Math.min(n, t),
    i = (r / t) * 100;
  return Number.isFinite(i)
    ? {
        percent: i,
        usedTokens: r,
        contextWindow: t,
        remainingTokens: Math.max(t - r, 0),
      }
    : {
        percent: null,
        usedTokens: null,
        contextWindow: null,
        remainingTokens: null,
      };
}
var W = le();
function qe(e) {
  let t = (0, W.c)(31),
    { cwd: n, hostConfig: i, onErrorMessage: a, showErrorToast: o } = e,
    s = o === void 0 ? !1 : o,
    c = te(E),
    l = w(),
    u = ee(),
    d;
  t[0] === i ? (d = t[1]) : ((d = p(i)), (t[0] = i), (t[1] = d));
  let f = d,
    m = n ?? ``,
    h;
  t[2] !== f || t[3] !== m
    ? ((h = [`git`, `init-repo`, f, m]), (t[2] = f), (t[3] = m), (t[4] = h))
    : (h = t[4]);
  let _;
  t[5] !== n || t[6] !== i
    ? ((_ = async () => {
        if (n == null) throw Error(`Missing git context`);
        await g(`git`).request({
          method: `git-init-repo`,
          params: { cwd: r(n), hostConfig: i, operationSource: `review_model` },
        });
      }),
      (t[5] = n),
      (t[6] = i),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] !== n || t[9] !== f || t[10] !== u || t[11] !== l || t[12] !== c
    ? ((v = async () => {
        c.get(F).success(
          u.formatMessage({
            id: `codex.review.noDiff.gitInit.success`,
            defaultMessage: `Git repository created`,
            description: `Toast shown after creating a git repository from the diff empty state`,
          }),
        );
        let e = [l.invalidateQueries({ queryKey: se(`git-origins`) })];
        (n != null &&
          e.push(l.invalidateQueries({ queryKey: [`git`, `metadata`, f, n] })),
          await Promise.all(e));
      }),
      (t[8] = n),
      (t[9] = f),
      (t[10] = u),
      (t[11] = l),
      (t[12] = c),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== u || t[15] !== a || t[16] !== c || t[17] !== s
    ? ((y = (e) => {
        let t = e instanceof Error ? e.message : String(e);
        (s &&
          c.get(F).danger(
            u.formatMessage(
              {
                id: `codex.review.noDiff.gitInit.error`,
                defaultMessage: `Git init failed: {message}`,
                description: `Error text shown when git initialization fails from the diff empty state`,
              },
              { message: t },
            ),
          ),
          a?.(t));
      }),
      (t[14] = u),
      (t[15] = a),
      (t[16] = c),
      (t[17] = s),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== h || t[20] !== _ || t[21] !== v || t[22] !== y
    ? ((b = { mutationKey: h, mutationFn: _, onSuccess: v, onError: y }),
      (t[19] = h),
      (t[20] = _),
      (t[21] = v),
      (t[22] = y),
      (t[23] = b))
    : (b = t[23]);
  let x = ce(b),
    S;
  t[24] !== n || t[25] !== x
    ? ((S = async () => {
        if (!(n == null || x.isPending))
          try {
            await x.mutateAsync();
          } catch {
            return;
          }
      }),
      (t[24] = n),
      (t[25] = x),
      (t[26] = S))
    : (S = t[26]);
  let C = S,
    T = n != null,
    D;
  return (
    t[27] !== C || t[28] !== x.isPending || t[29] !== T
      ? ((D = {
          canCreateGitRepository: T,
          createGitRepository: C,
          isCreatingGitRepository: x.isPending,
        }),
        (t[27] = C),
        (t[28] = x.isPending),
        (t[29] = T),
        (t[30] = D))
      : (D = t[30]),
    D
  );
}
var Je = z({
    method: `branch-exists`,
    getParams: (e) => ({
      branch: e.branch,
      operationSource: e.operationSource,
      root: e.root,
    }),
    getOptions: () => ({ select: (e) => e.exists, staleTime: A.FIVE_SECONDS }),
  }).fromCwd$,
  Ye = { type: `loading` },
  Xe = { type: `error` },
  Ze = z({
    method: `upstream-branch`,
    getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
    getOptions: () => ({ refetchOnWindowFocus: !0, staleTime: 3e4 }),
  }),
  G = z({
    method: `branch-ahead-count`,
    getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
    getOptions: () => ({ refetchOnWindowFocus: !0, staleTime: 3e4 }),
  }),
  Qe = z({
    method: `default-branch`,
    getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
    getOptions: () => ({
      refetchOnWindowFocus: !0,
      select: (e) => e.branch,
      staleTime: 3e4,
    }),
  }),
  K = C(
    E,
    (e, { get: t }) => {
      let n = { ...e, enabled: !0 },
        r = t(m, { ...n, watchForGitInit: !1 }),
        i = t(Ze.fromCwd$, n),
        a = t(G.fromCwd$, n),
        o = t(Qe.fromCwd$, n);
      if (r.isError || i.isError || a.isError || o.isError) return Xe;
      if (!r.isSuccess || !i.isSuccess || !a.isSuccess || !o.isSuccess)
        return Ye;
      let s = r.data,
        c = i.data,
        l = a.data;
      return s == null || c == null || l == null
        ? Xe
        : {
            type: `success`,
            data: {
              gitRoot: s.root,
              branch: c.branch ?? null,
              defaultBranch: o.data ?? null,
              commitsAhead: l.commitsAhead,
              upstreamRef: c.upstream?.branch ?? null,
              isMainWorktree: et(s),
            },
          };
    },
    { excludeFieldsFromKey: [`operationSource`] },
  );
function $e(e, t) {
  let n = { ...t, enabled: !0 };
  return Promise.all([
    e.get(Ze.fromCwd$, n).refetch(),
    e.get(G.fromCwd$, n).refetch(),
  ]);
}
function et(e) {
  let t = a(e.root).replace(/\/+$/, ``),
    n = a(e.commonDir).replace(/\/+$/, ``);
  return n === t ? !0 : n === `${t}/.git`;
}
var tt = e(b()),
  q = x(),
  nt = (e) =>
    (0, q.jsxs)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, q.jsx)(`path`, {
          d: `M13.5013 10.0003C13.5013 8.06653 11.9341 6.49856 10.0003 6.49838C8.06641 6.49838 6.49837 8.06642 6.49837 10.0003C6.49855 11.9341 8.06652 13.5013 10.0003 13.5013C11.934 13.5011 13.5011 11.934 13.5013 10.0003ZM14.8314 10.0003C14.8312 12.6685 12.6685 14.8312 10.0003 14.8314C7.33198 14.8314 5.16847 12.6686 5.16829 10.0003C5.16829 7.33188 7.33187 5.1683 10.0003 5.1683C12.6686 5.16848 14.8314 7.33199 14.8314 10.0003Z`,
          fill: `currentColor`,
        }),
        (0, q.jsx)(`path`, {
          d: `M5 9.33497C5.36727 9.33497 5.66504 9.63274 5.66504 10C5.66504 10.3673 5.36727 10.665 5 10.665H1.25C0.882731 10.665 0.584961 10.3673 0.584961 10C0.584961 9.63274 0.882731 9.33497 1.25 9.33497H5Z`,
          fill: `currentColor`,
        }),
        (0, q.jsx)(`path`, {
          d: `M18.75 9.33497C19.1173 9.33497 19.415 9.63274 19.415 10C19.415 10.3673 19.1173 10.665 18.75 10.665H15C14.6327 10.665 14.335 10.3673 14.335 10C14.335 9.63274 14.6327 9.33497 15 9.33497H18.75Z`,
          fill: `currentColor`,
        }),
      ],
    });
function rt(e) {
  let t = (0, W.c)(3),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `changes-loading`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `review.commit.disabled.loadingDiff`,
              defaultMessage: `Loading diff…`,
              description: `Tooltip shown on the commit button while changes are loading`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `changes-unavailable`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `review.commit.disabled.unavailable`,
              defaultMessage: `Commit is unavailable right now`,
              description: `Fallback tooltip shown when commit is disabled for an unknown reason`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `no-changes`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `review.commit.disabled.noChanges`,
              defaultMessage: `No changes to commit`,
              description: `Tooltip shown when there are no changes to commit`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function it(e) {
  let t = (0, W.c)(3),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `branch-missing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.pushBranchMissing`,
              defaultMessage: `Branch information unavailable`,
              description: `Tooltip shown when branch info cannot be resolved`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `nothing-to-push`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.pushNothingToPush`,
              defaultMessage: `No new commits to push`,
              description: `Tooltip shown when there are no commits ahead of the remote`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `push-status-loading`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.pushStatusMissing`,
              defaultMessage: `Loading push status…`,
              description: `Tooltip shown when push status is loading`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function at(e) {
  let t = (0, W.c)(11),
    { reason: n } = e;
  if (n == null) return null;
  switch (n) {
    case `branch-missing`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestBranchMissing`,
              defaultMessage: `Branch information unavailable`,
              description: `Tooltip shown when create PR is disabled because the current branch cannot be determined`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `checking-existing-pr`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.viewPullRequestButtonLabel.loading`,
              defaultMessage: `Loading pull request…`,
              description: `Tooltip shown while the pull request URL is loading`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `default-branch-checked-out`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestSwitchBranch`,
              defaultMessage: `Checkout a feature branch before creating a PR`,
              description: `Tooltip shown when create PR is disabled because the default branch is active`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `default-branch-missing`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestDefaultBranchMissing`,
              defaultMessage: `Default branch information unavailable`,
              description: `Tooltip shown when create PR is disabled because the default branch cannot be determined`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `gh-auth-required`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestAuthGh`,
              defaultMessage: "Authenticate GitHub CLI: run `gh auth login`",
              description: `Tooltip shown when create PR is disabled because GitHub CLI is not authenticated`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `gh-cli-missing`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestInstallGh`,
              defaultMessage: `Install GitHub CLI (gh) to create PRs`,
              description: `Tooltip shown when create PR is disabled because GitHub CLI is missing`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `gh-status-loading`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestGhStatusMissing`,
              defaultMessage: `Loading GitHub CLI status…`,
              description: `Tooltip shown when create PR is disabled because the GitHub CLI status is loading`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `no-git-repository`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestNoRepo`,
              defaultMessage: `No git repository found`,
              description: `Tooltip shown when create PR is disabled because no git repository is detected`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `pull-request-exists`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestExistingPullRequest`,
              defaultMessage: `A pull request already exists for this branch`,
              description: `Tooltip shown when create PR is disabled because a PR already exists`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `push-status-loading`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestPushStatusMissing`,
              defaultMessage: `Loading push status…`,
              description: `Tooltip shown when create PR is disabled because the push status is loading`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `upstream-missing`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(D, {
              id: `localConversationPage.createPullRequestSetUpstream`,
              defaultMessage: `Push this branch before creating a PR`,
              description: `Tooltip shown when create PR is disabled because the branch has no upstream`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
  }
}
function ot(e) {
  let t = (0, W.c)(6),
    { blockedStep: n } = e;
  if (n == null) return null;
  switch (n.kind) {
    case `commit`: {
      let e;
      return (
        t[0] === n.reason
          ? (e = t[1])
          : ((e = (0, q.jsx)(rt, { reason: n.reason })),
            (t[0] = n.reason),
            (t[1] = e)),
        e
      );
    }
    case `push`: {
      let e;
      return (
        t[2] === n.reason
          ? (e = t[3])
          : ((e = (0, q.jsx)(it, { reason: n.reason })),
            (t[2] = n.reason),
            (t[3] = e)),
        e
      );
    }
    case `create-pr`: {
      let e;
      return (
        t[4] === n.reason
          ? (e = t[5])
          : ((e = (0, q.jsx)(at, { reason: n.reason })),
            (t[4] = n.reason),
            (t[5] = e)),
        e
      );
    }
  }
}
function st({
  commitsAhead: e,
  commitBlockedReason: t,
  createPullRequestAfterPushBlockedReason: n,
  createPullRequestBlockedReason: r,
  createsBranch: i,
  pushAfterCommitBlockedReason: a,
  pushBlockedReason: o,
}) {
  return i
    ? {
        canCommitPushAndCreatePullRequest: t == null && J(a) && J(n),
        canCreatePullRequest: !1,
        canPushAndCreatePullRequest: e > 0 && J(o) && J(n),
      }
    : {
        canCommitPushAndCreatePullRequest: t == null && a == null && n == null,
        canCreatePullRequest: r == null,
        canPushAndCreatePullRequest:
          (o == null ||
            (o === `nothing-to-push` && r === `upstream-missing`)) &&
          n == null,
      };
}
function ct({
  canCommitPushAndCreatePullRequest: e,
  canCreatePullRequest: t,
  canPushAndCreatePullRequest: n,
  createsBranch: r,
  includeLocalChanges: i,
}) {
  return i
    ? e
      ? `commit-push-and-create-pr`
      : n
        ? `push-and-create-pr`
        : t
          ? `create-pr`
          : `commit-push-and-create-pr`
    : r
      ? `push-and-create-pr`
      : `create-pr`;
}
function J(e) {
  return (
    e == null ||
    e === `branch-missing` ||
    e === `checking-existing-pr` ||
    e === `default-branch-checked-out` ||
    e === `push-status-loading`
  );
}
function lt({
  hasSomeUncommittedChanges: e,
  isChangesLoading: t,
  isChangesUnavailable: n,
}) {
  switch (!0) {
    case t:
      return `changes-loading`;
    case n:
      return `changes-unavailable`;
    case !e:
      return `no-changes`;
    case !0:
      return null;
  }
  return null;
}
function ut({ pushStatus: e, ignoreNothingToPush: t = !1 }) {
  switch (!0) {
    case !e:
      return `push-status-loading`;
    case !e?.branch:
      return `branch-missing`;
    case !t && e?.commitsAhead === 0:
      return `nothing-to-push`;
    case !0:
      return null;
  }
  return null;
}
function dt({
  ghCliAvailability: e,
  pushStatus: t,
  allowMissingUpstream: n = !1,
  hasOpenPr: r,
  isLoadingPRStatus: i,
}) {
  switch (!0) {
    case r:
      return `pull-request-exists`;
    case i:
      return `checking-existing-pr`;
    case e === `loading` || e === `error`:
      return `gh-status-loading`;
    case e === `missing`:
      return `gh-cli-missing`;
    case e === `unauthenticated`:
      return `gh-auth-required`;
    case !t:
      return `push-status-loading`;
    case !t?.gitRoot:
      return `no-git-repository`;
    case !t?.defaultBranch:
      return `default-branch-missing`;
    case !t?.branch:
      return `branch-missing`;
    case t?.branch === t?.defaultBranch:
      return `default-branch-checked-out`;
    case !n && !t?.upstreamRef:
      return `upstream-missing`;
    case !0:
      return null;
  }
  return null;
}
var ft = e(Ce(), 1);
function pt(e) {
  let t = e.flatMap((e) => (e?.type === `success` ? e.files : []));
  return t.length === 0
    ? null
    : {
        files: t.map((e) => ({
          path: e.path,
          additions: e.additions ?? 0,
          deletions: e.deletions ?? 0,
        })),
        totalAdditions: (0, ft.default)(t, (e) => e.additions ?? 0),
        totalDeletions: (0, ft.default)(t, (e) => e.deletions ?? 0),
      };
}
function mt(e, t) {
  let n = ht(e),
    r = t.flatMap((e) =>
      e?.type === `success`
        ? e.files.filter((e) =>
            [e.path, e.previousPath].some((e) => e != null && ht(e) === n),
          )
        : [],
    );
  return r.length === 0
    ? null
    : {
        linesAdded: (0, ft.default)(r, (e) => e.additions ?? 0),
        linesRemoved: (0, ft.default)(r, (e) => e.deletions ?? 0),
      };
}
function ht(e) {
  let t = e.trim(),
    n =
      (t.startsWith(`"`) && t.endsWith(`"`)) ||
      (t.startsWith(`'`) && t.endsWith(`'`))
        ? t.slice(1, -1)
        : t,
    r = n.startsWith(`./`) ? n.slice(2) : n;
  return r.startsWith(`a/`) || r.startsWith(`b/`) ? r.slice(2) : r;
}
var gt = ae(L, (e) =>
    d(
      `review-summary`,
      { commonDir: e.commonDir, root: e.root },
      e.source === `staged`
        ? {
            cwd: e.cwd,
            includeUntrackedFiles: !1,
            operationSource: `local_conversation_git_actions`,
            source: `staged`,
          }
        : {
            cwd: e.cwd,
            operationSource: `local_conversation_git_actions`,
            source: `unstaged`,
          },
      p(e.hostConfig),
      e.hostConfig,
      { staleTime: A.FIVE_SECONDS },
    ),
  ),
  _t = ae(L, (e) =>
    d(
      `status-summary`,
      { commonDir: e.commonDir, root: e.root },
      { cwd: e.cwd, operationSource: `local_conversation_git_actions` },
      p(e.hostConfig),
      e.hostConfig,
      { staleTime: A.FIVE_SECONDS },
    ),
  ),
  vt = C(L, (e, { get: t }) =>
    t(m, {
      cwd: e.cwd,
      enabled: !0,
      hostConfig: e.hostConfig,
      operationSource: `local_conversation_git_actions`,
      watchForGitInit: !1,
    }),
  ),
  yt = C(L, (e, { get: t }) => {
    let n = t(vt, e),
      r = n.data ?? null;
    return r == null
      ? l(n)
      : t(gt, {
          commonDir: r.commonDir,
          cwd: e.cwd,
          hostConfig: e.hostConfig,
          root: r.root,
          source: e.source,
        });
  }),
  bt = C(L, (e, { get: t }) => {
    let n = t(vt, e),
      r = n.data ?? null;
    return r == null
      ? l(n)
      : t(_t, {
          commonDir: r.commonDir,
          cwd: e.cwd,
          hostConfig: e.hostConfig,
          root: r.root,
        });
  }),
  xt = C(L, (e, { get: t }) => {
    let n = t(yt, { cwd: e.cwd, hostConfig: e.hostConfig, source: `staged` }),
      r = e.includeUnstaged
        ? t(yt, { cwd: e.cwd, hostConfig: e.hostConfig, source: `unstaged` })
        : null,
      i = pt(r == null ? [n.data] : [n.data, r.data]);
    return {
      hasSelectedChanges: (i?.files.length ?? 0) > 0,
      isFetching: n.isFetching || (r?.isFetching ?? !1),
      isLoading: n.isLoading || (r?.isLoading ?? !1),
      isUnavailable: n.data?.type === `error` || r?.data?.type === `error`,
      selectionSummary: i,
    };
  }),
  St = C(L, (e, { get: t }) => {
    let n = t(bt, e),
      r = n.data;
    if (r?.type === `error`) {
      let n = t(xt, e);
      return lt({
        hasSomeUncommittedChanges: n.hasSelectedChanges,
        isChangesLoading: n.isLoading,
        isChangesUnavailable: n.isUnavailable,
      });
    }
    return lt({
      hasSomeUncommittedChanges:
        r?.type === `success` &&
        r.stagedCount +
          (e.includeUnstaged ? r.unstagedCount + r.untrackedCount : 0) >
          0,
      isChangesLoading: n.isLoading,
      isChangesUnavailable: !1,
    });
  }),
  Ct = C(L, (e, { get: t }) => {
    let n = t(K, Et(e));
    return ut({ pushStatus: n.type === `success` ? n.data : void 0 });
  }),
  wt = C(L, (e, { get: t }) => {
    let n = t(K, Et(e));
    return ut({
      pushStatus: n.type === `success` ? n.data : void 0,
      ignoreNothingToPush: !0,
    });
  }),
  Tt = C(L, (e, { get: t }) => {
    let n = t(K, Et(e)),
      r = n.type === `success` ? n.data : void 0,
      i = t(St, { ...e, includeUnstaged: e.includeLocalChanges }),
      a = t(Ct, e),
      o = t(wt, e),
      s = Dt(e, r?.branch ?? ``),
      c = t(We, s),
      l = t(Le, e.hostConfig.id),
      u = t(Ge, s),
      d = dt({
        ghCliAvailability: l,
        hasOpenPr: u,
        isLoadingPRStatus: c.isLoading,
        pushStatus: r,
      }),
      f = dt({
        allowMissingUpstream: !0,
        ghCliAvailability: l,
        hasOpenPr: u,
        isLoadingPRStatus: c.isLoading,
        pushStatus: r,
      }),
      p = st({
        commitsAhead: r?.commitsAhead ?? 0,
        commitBlockedReason: i,
        createPullRequestAfterPushBlockedReason: f,
        createPullRequestBlockedReason: d,
        createsBranch: e.createsBranch,
        pushAfterCommitBlockedReason: o,
        pushBlockedReason: a,
      }),
      m = ct({
        ...p,
        createsBranch: e.createsBranch,
        includeLocalChanges: e.includeLocalChanges,
      });
    return {
      blockedStep: Ot({
        ...p,
        commitBlockedReason: i,
        createPullRequestAfterPushBlockedReason: f,
        createPullRequestBlockedReason: d,
        nextStep: m,
        pushAfterCommitBlockedReason: o,
        pushBlockedReason: a,
      }),
      nextStep: m,
    };
  });
function Et(e) {
  return {
    cwd: e.cwd,
    hostConfig: e.hostConfig,
    operationSource: `local_conversation_git_actions`,
  };
}
function Dt(e, t) {
  return {
    cwd: e.cwd,
    headBranch: t,
    hostId: e.hostConfig.id,
    operationSource: `local_conversation_git_actions`,
  };
}
function Ot({
  canCommitPushAndCreatePullRequest: e,
  canCreatePullRequest: t,
  canPushAndCreatePullRequest: n,
  commitBlockedReason: r,
  createPullRequestAfterPushBlockedReason: i,
  createPullRequestBlockedReason: a,
  nextStep: o,
  pushAfterCommitBlockedReason: s,
  pushBlockedReason: c,
}) {
  if (
    i === `gh-auth-required` ||
    i === `gh-cli-missing` ||
    i === `gh-status-loading`
  )
    return { kind: `create-pr`, reason: i };
  switch (o) {
    case `create-pr`:
      return !t && a != null ? { kind: `create-pr`, reason: a } : null;
    case `push-and-create-pr`:
      return n
        ? null
        : c == null
          ? i == null
            ? null
            : { kind: `create-pr`, reason: i }
          : { kind: `push`, reason: c };
    case `commit-push-and-create-pr`:
      return e
        ? null
        : r == null
          ? s == null
            ? i == null
              ? null
              : { kind: `create-pr`, reason: i }
            : { kind: `push`, reason: s }
          : { kind: `commit`, reason: r };
  }
}
var Y = N(E, (e) => null),
  X = N(E, (e) => ``),
  kt = v(`git-action-include-unstaged-changes`, !0),
  At = N(E, (e) => ``),
  jt = N(E, (e) => ``),
  Mt = N(E, (e) => !0);
function Nt(e, t) {
  (e.set(At, t, ``), e.set(jt, t, ``), e.set(Mt, t, !0));
}
function Pt({ currentBranch: e, storedThreadBranch: t }) {
  let n = e?.trim() ?? ``,
    r = t?.trim() ?? ``;
  return {
    currentBranchName: n,
    hasThreadBranchMismatch: n.length > 0 && r.length > 0 && n !== r,
    storedThreadBranchName: r,
  };
}
var Z = ie(`LocalGitActionsScope`, {
    key: ({ cwd: e, hostId: t }) => JSON.stringify([t, e]),
    parent: ve,
  }),
  Ft = j(Z, null),
  It = j(Z, null),
  Lt = C(L, (e, { get: t }) =>
    t(we, {
      cwd: e.cwd,
      enabled: !0,
      hostConfig: e.hostConfig,
      operationSource: `local_conversation_git_actions`,
      refetchOnWindowFocus: `always`,
      staleTime: null,
    }),
  ),
  Rt = C(L, (e, { get: t }) =>
    t(ze, {
      cwd: e.cwd,
      enabled: !0,
      hostConfig: e.hostConfig,
      operationSource: `local_conversation_git_actions`,
      refetchOnWindowFocus: !0,
      staleTime: 3e4,
    }),
  ),
  zt = C(L, (e, { get: t }) => {
    let n = t(Lt, e),
      r = t(K, {
        cwd: e.cwd,
        hostConfig: e.hostConfig,
        operationSource: `local_conversation_git_actions`,
      });
    return Pt({
      currentBranch:
        n.data ?? (r.type === `success` ? (r.data.branch ?? null) : null),
      storedThreadBranch: t(s, e.conversationId),
    }).currentBranchName;
  }),
  Bt = C(L, (e, { get: t }) => t(Ue, an(e, t(zt, e)))),
  Vt = C(L, (e, { get: t }) => t(Ge, an(e, t(zt, e)))),
  Ht = C(
    L,
    (e, { get: t }) =>
      Pt({
        currentBranch: t(zt, e),
        storedThreadBranch: t(s, e.conversationId),
      }).hasThreadBranchMismatch,
  ),
  Ut = C(L, (e, { get: t }) => {
    let n = t(Lt, e);
    return n.isSuccess && n.data == null;
  }),
  Wt = T(Z, ({ get: e, scope: t }) => ({
    codexWorktree: t.value.codexWorktree,
    conversationId: t.value.conversationId,
    cwd: t.value.cwd,
    hostConfig: e(he, t.value.hostId),
  })),
  Gt = T(Z, ({ get: e, scope: t }) =>
    e(Y, { cwd: t.value.cwd, hostId: t.value.hostId }),
  ),
  Kt = T(Z, ({ get: e }) => e(St, { ...e(Wt), includeUnstaged: !0 })),
  qt = C(L, (e, { get: t }) => {
    let n = t(Lt, e);
    if (!n.isSuccess) return `hidden`;
    let r = n.data?.trim() ?? ``,
      i = r.length === 0;
    if (i) {
      let n = t(K, {
          cwd: e.cwd,
          hostConfig: e.hostConfig,
          operationSource: `local_conversation_git_actions`,
        }),
        r = n.type === `success` ? n.data : null;
      if (
        t(St, { ...e, includeUnstaged: !0 }) != null &&
        (r?.commitsAhead ?? 0) === 0
      )
        return `hidden`;
    } else {
      let n = t(Rt, e).data;
      if (n == null || r === n) return `hidden`;
    }
    return t(Tt, {
      cwd: e.cwd,
      hostConfig: e.hostConfig,
      createsBranch: i,
      includeLocalChanges: t(Mt, { cwd: e.cwd, hostId: e.hostConfig.id }),
    }).blockedStep == null
      ? `enabled`
      : `disabled`;
  }),
  Jt = T(Z, ({ get: e }) => e(qt, e(Wt))),
  Yt = T(Z, ({ get: e }) => {
    let t = e(Wt),
      n = e(K, {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: `local_conversation_git_actions`,
      }),
      r = n.type === `success` ? n.data : void 0,
      i = e(Lt, t),
      a = i.isSuccess ? i.data : r?.branch;
    return t.codexWorktree && r != null && (!a || a === r.defaultBranch);
  }),
  Xt = T(Z, ({ get: e }) => e(Yt) && !e(Ut, e(Wt))),
  Zt = T(Z, ({ get: e }) => {
    let t = e(Wt),
      n = e(Kt),
      r = e(Ct, t),
      i = e(wt, t);
    return r == null || (n == null && i == null) || (e(Yt) && n == null)
      ? null
      : r;
  }),
  Qt = T(Z, ({ get: e }) => {
    let t = e(Wt);
    return e(Tt, {
      cwd: t.cwd,
      hostConfig: t.hostConfig,
      createsBranch: e(Yt) || e(Ut, t),
      includeLocalChanges: e(Mt, { cwd: t.cwd, hostId: t.hostConfig.id }),
    }).blockedStep;
  }),
  $t = T(Z, ({ get: e }) => {
    let t = e(Wt);
    return t.codexWorktree && e(Lt, t).isLoading;
  });
function en(e) {
  if (e.get(Yt)) {
    (e.set(It, `commit`), e.set(Ft, `worktree-branch-setup`));
    return;
  }
  e.set(Ft, `commit`);
}
function tn(e) {
  if (e.get(Xt)) {
    (e.set(It, `create-pr`), e.set(Ft, `worktree-branch-setup`));
    return;
  }
  e.set(Ft, `create-pr`);
}
function nn(e) {
  (e.set(It, null), e.set(Ft, `worktree-branch-setup`));
}
function rn(e) {
  let t = e.get(It) ?? `commit`;
  (e.set(It, null), e.set(Ft, t));
}
function an(e, t) {
  return {
    cwd: e.cwd,
    headBranch: t,
    hostId: e.hostConfig.id,
    operationSource: `local_conversation_git_actions`,
  };
}
function on(
  e,
  {
    branch: t,
    cwd: n,
    hostConfig: r,
    operationSource: i,
    refetchPullRequestStatus: a,
  },
) {
  if (($e(e, { cwd: n, hostConfig: r, operationSource: i }), a != null)) {
    a();
    return;
  }
  t != null &&
    e.queryClient.invalidateQueries({
      queryKey: se(`gh-pr-status`, { cwd: n, headBranch: t, hostId: r.id }),
    });
}
var sn = `Testing note: If you mention tests, include unit tests or UI testing frameworks only. Skip lint/tsc since CI runs those.`,
  cn = `Untracked changes are not included.`;
function ln({
  commitInstructions: e,
  diffError: t = null,
  draftMessage: n,
  oversizedDiffSummary: r = null,
  uncommittedDiff: i,
}) {
  let a = [],
    o = n.trim();
  o.length > 0 && a.push(`Draft message:\n${o}`);
  let s = un({ diffError: t, oversizedDiffSummary: r, uncommittedDiff: i });
  (s != null && a.push(s), a.length > 0 && a.push(sn));
  let c = e?.trim() ?? ``;
  return (
    c.length > 0 &&
      a.push(
        `Custom commit instructions (apply these to the commit message text only; do not change the required output format):\n${c}`,
      ),
    a.length === 0
      ? `Use the current thread context to infer the commit message.`
      : a.join(`

`)
  );
}
function un({ diffError: e, oversizedDiffSummary: t, uncommittedDiff: n }) {
  if (t != null)
    return [
      `Changes:`,
      `Diff too large to include inline.`,
      `Summary: ${t.filesChanged} changed files, +${t.linesAdded}/-${t.linesRemoved} lines.`,
      ``,
      cn,
    ].join(`
`);
  if (e?.type === `diff-too-large`)
    return [`Changes:`, `Diff too large to include inline.`, ``, cn].join(`
`);
  if (!n || n.trim().length === 0) return null;
  let r = [`Changes:`];
  return (
    r.push(n),
    r.push(cn),
    r.join(`
`)
  );
}
function dn(e) {
  return !e || e.type !== `success` ? null : e.unifiedDiff;
}
function fn(e) {
  if (e == null || e.trim().length === 0) return null;
  let t = 0,
    n = 0,
    r = 0,
    i = !1;
  for (let a of e.split(/\r?\n/)) {
    if (a.startsWith(`diff --git `)) {
      ((t += 1), (i = !1));
      continue;
    }
    if (a.startsWith(`@@`)) {
      i = !0;
      continue;
    }
    if (i) {
      if (a.startsWith(`+`)) {
        n += 1;
        continue;
      }
      a.startsWith(`-`) && (r += 1);
    }
  }
  return { filesChanged: t, linesAdded: n, linesRemoved: r };
}
var pn = 1e3,
  mn = 100;
function hn({
  pullRequestInstructions: e,
  uncommittedDiff: t,
  filePaths: n,
  baseBranch: r,
  headBranch: i,
}) {
  let a = [];
  (r || i) &&
    a.push(
      [`Branches:`, `- Head: ${i ?? `-`}`, `- Base: ${r ?? `-`}`].join(`
`),
    );
  let o = e?.trim() ?? ``;
  return (
    o.length > 0 &&
      a.push(
        `Pull request instructions (apply these to the title/body content only):\n${yn(o)}`,
      ),
    a.push(gn({ uncommittedDiff: t, filePaths: n })),
    a.join(`

`)
  );
}
function gn({ uncommittedDiff: e, filePaths: t }) {
  let n = e?.trim() ?? ``,
    r = (n.length > 0 ? _n(n) : 0) > pn,
    i = [`Changes:`];
  return n.length === 0 || r
    ? (i.push(vn(t)),
      i.join(`
`))
    : (i.push(n),
      i.join(`
`));
}
function _n(e) {
  return e.split(/\r?\n/).length;
}
function vn(e) {
  if (e.length === 0) return `- (no files listed)`;
  let t = e.slice(0, mn),
    n = e.length - t.length,
    r = t.map((e) => `- ${e}`);
  return (
    n > 0 && r.push(`\u2026and ${n} more`),
    r.join(`
`)
  );
}
function yn(e) {
  let t = e.match(/```/g);
  return t == null || t.length % 2 == 0 ? e : `${e}\n\`\`\``;
}
var bn = 80;
function xn({ conversationId: e, tokenUsageInfo: t }) {
  if (e == null) return null;
  let { percent: n } = Ke(t);
  return n == null || n < bn ? e : null;
}
function Sn(e) {
  let t = (0, W.c)(18),
    { command: n, output: r, message: i } = e,
    a;
  t[0] === r ? (a = t[1]) : ((a = r?.trim() ?? ``), (t[0] = r), (t[1] = a));
  let o = a,
    s;
  t[2] === i ? (s = t[3]) : ((s = i?.trim() ?? ``), (t[2] = i), (t[3] = s));
  let c = s,
    l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = `$`), (t[4] = l))
    : (l = t[4]);
  let u = l,
    d = n != null && n.length > 0,
    f = o.length > 0,
    p = c.length > 0 && c !== o;
  if (!d && !f && !p) return null;
  let m;
  t[5] !== n || t[6] !== d
    ? ((m = d
        ? (0, q.jsxs)(`div`, {
            className: `font-vscode-editor text-size-code-sm flex items-start gap-1.5 leading-5 text-token-description-foreground`,
            children: [
              (0, q.jsx)(`span`, {
                className: `shrink-0 select-none`,
                "aria-hidden": `true`,
                children: u,
              }),
              (0, q.jsx)(`pre`, {
                className: `m-0 whitespace-pre-wrap`,
                children: n,
              }),
            ],
          })
        : null),
      (t[5] = n),
      (t[6] = d),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== f || t[9] !== o
    ? ((h = f
        ? (0, q.jsx)(`div`, {
            className: `max-h-20 overflow-auto`,
            children: (0, q.jsx)(`pre`, {
              className: `font-vscode-editor text-size-code-sm m-0 whitespace-pre-wrap text-token-terminal-foreground`,
              children: o,
            }),
          })
        : null),
      (t[8] = f),
      (t[9] = o),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== p || t[12] !== c
    ? ((g = p
        ? (0, q.jsx)(`div`, {
            className: `text-size-chat-sm text-token-input-validation-error-foreground/85`,
            children: c,
          })
        : null),
      (t[11] = p),
      (t[12] = c),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== m || t[15] !== h || t[16] !== g
      ? ((_ = (0, q.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-lg border border-token-terminal-border bg-token-terminal-background px-2.5 py-1.5 pr-8`,
          children: [m, h, g],
        })),
        (t[14] = m),
        (t[15] = h),
        (t[16] = g),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
}
function Cn(e) {
  let t = (0, W.c)(35),
    { title: n, message: r, execOutput: i, actions: a, onClose: o } = e,
    s = ee(),
    c;
  t[0] === i?.output
    ? (c = t[1])
    : ((c = i?.output?.trim() ?? ``), (t[0] = i?.output), (t[1] = c));
  let l = c,
    u;
  t[2] === r ? (u = t[3]) : ((u = r?.trim() ?? ``), (t[2] = r), (t[3] = u));
  let d = u,
    f = i?.command != null && i.command.length > 0 ? `$ ${i.command}` : null,
    p = l.length > 0 ? l : null,
    m = d.length > 0 && d !== l ? d : null,
    h;
  t[4] !== f || t[5] !== p || t[6] !== m
    ? ((h = [f, p, m].filter(wn)),
      (t[4] = f),
      (t[5] = p),
      (t[6] = m),
      (t[7] = h))
    : (h = t[7]);
  let g = h.join(`
`),
    _;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, q.jsx)(`span`, {
        className: `h-2 w-2 shrink-0 rounded-full bg-token-input-validation-error-border`,
        "aria-hidden": `true`,
      })),
      (t[8] = _))
    : (_ = t[8]);
  let v;
  t[9] === n
    ? (v = t[10])
    : ((v = (0, q.jsx)(`div`, {
        className: `text-size-chat-sm min-w-0 flex-1 font-medium text-token-foreground`,
        children: n,
      })),
      (t[9] = n),
      (t[10] = v));
  let y;
  t[11] !== s || t[12] !== o
    ? ((y = o
        ? (0, q.jsx)(`button`, {
            type: `button`,
            onClick: o,
            className: `flex shrink-0 cursor-interaction rounded-full opacity-50 transition-opacity hover:bg-token-button-secondary-hover-background/5 hover:opacity-80`,
            "aria-label": s.formatMessage({
              id: `codex.alert.closeAriaLabel`,
              defaultMessage: `Close`,
              description: `Aria label for the close button on an alert/toast component`,
            }),
            children: (0, q.jsx)(Se, { className: `icon-xs` }),
          })
        : null),
      (t[11] = s),
      (t[12] = o),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== v || t[15] !== y
    ? ((b = (0, q.jsxs)(`div`, {
        className: `flex items-center gap-2.5 px-3 py-2.5`,
        children: [_, v, y],
      })),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b))
    : (b = t[16]);
  let x = i?.command,
    S = i?.output,
    C;
  t[17] !== r || t[18] !== x || t[19] !== S
    ? ((C = (0, q.jsx)(Sn, { command: x, output: S, message: r })),
      (t[17] = r),
      (t[18] = x),
      (t[19] = S),
      (t[20] = C))
    : (C = t[20]);
  let w;
  t[21] !== g || t[22] !== s
    ? ((w =
        g.length > 0
          ? (0, q.jsx)(`button`, {
              type: `button`,
              className: `absolute top-1 right-1 flex h-6 w-6 cursor-interaction items-center justify-center rounded-md text-token-description-foreground opacity-80 hover:bg-token-list-hover-background hover:opacity-100`,
              "aria-label": s.formatMessage({
                id: `codex.terminalToast.copyError`,
                defaultMessage: `Copy error`,
                description: `Aria label for copying terminal error content from a toast`,
              }),
              onClick: (e) => {
                U(g, e);
              },
              children: (0, q.jsx)(Pe, { className: `icon-2xs` }),
            })
          : null),
      (t[21] = g),
      (t[22] = s),
      (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] !== C || t[25] !== w
    ? ((T = (0, q.jsxs)(`div`, { className: `relative`, children: [C, w] })),
      (t[24] = C),
      (t[25] = w),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] === a
    ? (E = t[28])
    : ((E = a
        ? (0, q.jsx)(`div`, {
            className: `mt-2 flex items-center justify-end gap-2`,
            children: a,
          })
        : null),
      (t[27] = a),
      (t[28] = E));
  let D;
  t[29] !== T || t[30] !== E
    ? ((D = (0, q.jsxs)(`div`, {
        className: `border-t border-token-border/60 px-3 pt-2 pb-2.5`,
        children: [T, E],
      })),
      (t[29] = T),
      (t[30] = E),
      (t[31] = D))
    : (D = t[31]);
  let O;
  return (
    t[32] !== b || t[33] !== D
      ? ((O = (0, q.jsxs)(`div`, {
          className: `pointer-events-auto w-[min(390px,calc(100vw-32px))] overflow-hidden rounded-xl border border-token-border bg-token-dropdown-background text-start shadow-lg`,
          children: [b, D],
        })),
        (t[32] = b),
        (t[33] = D),
        (t[34] = O))
      : (O = t[34]),
    O
  );
}
function wn(e) {
  return e != null;
}
var Tn = 7,
  Q = O({
    commitErrorTitle: {
      id: `review.commit.error`,
      defaultMessage: `Failed to commit changes`,
      description: `Toast shown when a commit fails`,
    },
    commitSuccess: {
      id: `review.commit.successToast`,
      defaultMessage: `Committed to {branch}`,
      description: `Toast shown when a commit succeeds`,
    },
    commitMessageEmpty: {
      id: `review.commit.generate.emptyResponse`,
      defaultMessage: `Couldn't generate a commit message.`,
      description: `Toast shown when commit message generation returns no result`,
    },
    createBranchErrorTitle: {
      id: `review.commit.createBranchError`,
      defaultMessage: `Failed to create branch`,
      description: `Title for the error toast shown when creating a branch from a git action modal fails`,
    },
    checkoutBranchErrorTitle: {
      id: `review.commit.checkoutBranchError`,
      defaultMessage: `Failed to check out branch`,
      description: `Title for the error toast shown when checking out a branch from a git action modal fails`,
    },
    forcePushErrorTitle: {
      id: `localConversationPage.forcePushError`,
      defaultMessage: `Failed to force push`,
      description: `Error message when force push fails`,
    },
    pushErrorTitle: {
      id: `localConversationPage.pushError`,
      defaultMessage: `Failed to push changes`,
      description: `Error message when git push fails`,
    },
    createPullRequestErrorTitle: {
      id: `localConversationPage.createPullRequestError`,
      defaultMessage: `Failed to create pull request`,
      description: `Error message when creating a pull request fails`,
    },
    pullRequestGenerationError: {
      id: `localConversationPage.generatePullRequestMessageError`,
      defaultMessage: `Failed to generate pull request title and body`,
      description: `Error message shown when pull request generation fails in commit modal`,
    },
    pushSuccess: {
      id: `localConversationPage.commitAndPushToast`,
      defaultMessage: `Pushed {branch}`,
      description: `Toast shown when commit and push succeeds`,
    },
    unknownBranch: {
      id: `localConversationPage.gitAction.unknownBranch`,
      defaultMessage: `your branch`,
      description: `Fallback branch name for git action success toasts`,
    },
    committing: {
      id: `review.commit.disabled.committing`,
      defaultMessage: `Committing…`,
      description: `Tooltip shown on the commit button while committing`,
    },
    creatingPullRequest: {
      id: `localConversationPage.createPullRequestButtonLabel.loading`,
      defaultMessage: `Creating PR…`,
      description: `Label for create pull request action while it is running`,
    },
    pushing: {
      id: `localConversationPage.pushButtonLabel.loading`,
      defaultMessage: `Pushing changes…`,
      description: `Label for git push action while a push is running`,
    },
  });
function $({ toaster: e, title: t, message: n, execOutput: r }) {
  e.custom({
    duration: Tn,
    content: ({ close: e }) =>
      (0, q.jsx)(Cn, { title: t, message: n, execOutput: r, onClose: e }),
  });
}
function En(e, t) {
  let n = t?.trim() ?? ``;
  return n.length > 0 ? n : e.formatMessage(Q.unknownBranch);
}
function Dn(e) {
  switch (e) {
    case `committing`:
    case `generating-commit-message`:
      return Q.committing;
    case `creating-pr`:
      return Q.creatingPullRequest;
    case `pushing`:
      return Q.pushing;
  }
}
var On = 1e3,
  kn = `local_conversation_git_actions`,
  An = P(E, (e, { get: t, scope: n }) => {
    let r = { cwd: e.cwd, hostId: e.hostConfig.id },
      i = xn({
        conversationId: e.conversationId,
        tokenUsageInfo: t(c, e.conversationId),
      }),
      a = t(B),
      o = t(F);
    return {
      mutationKey: [
        `vscode`,
        `generate-commit-message`,
        e.cwd,
        e.hostConfig.id,
        i,
      ],
      mutationFn: async () => {
        let t = n.get(Y, r);
        if (t?.phase === `generating-commit-message`) return null;
        let s = n.get(X, r),
          c = t == null || t.workflow === `commit`;
        c &&
          n.set(Y, r, {
            workflow: `commit`,
            phase: `generating-commit-message`,
          });
        let l;
        try {
          l = await M(`generate-commit-message`, {
            params: {
              hostId: e.hostConfig.id,
              prompt: await Pn(n, e, s),
              cwd: e.cwd,
              conversationId: i,
            },
          });
        } catch (e) {
          return (
            o.danger(
              a.formatMessage(
                {
                  id: `review.commit.generate.failed`,
                  defaultMessage: `Failed to generate commit message: {error}`,
                  description: `Toast shown when commit message generation fails`,
                },
                { error: e instanceof Error ? e.message : String(e) },
              ),
            ),
            null
          );
        } finally {
          c &&
            n.get(Y, r)?.phase === `generating-commit-message` &&
            n.set(Y, r, t);
        }
        let u = l.message?.trim() ?? ``;
        return u.length === 0
          ? (o.danger(
              a.formatMessage({
                id: `review.commit.generate.emptyResponse`,
                defaultMessage: `Couldn't generate a commit message.`,
                description: `Toast shown when commit message generation returns no result`,
              }),
            ),
            null)
          : (Fn(n, r, s, u), u);
      },
    };
  }),
  jn = P(E, (e, { get: t, scope: n }) => {
    let r = { cwd: e.cwd, hostId: e.hostConfig.id },
      i = xn({
        conversationId: e.conversationId,
        tokenUsageInfo: t(c, e.conversationId),
      }),
      a = t(B),
      o = t(F);
    return {
      mutationKey: [
        `vscode`,
        `generate-commit-pull-request-message`,
        e.cwd,
        e.hostConfig.id,
        i,
      ],
      mutationFn: async () => {
        let t = n.get(X, r),
          s = n.get(At, r).trim(),
          c = n.get(jt, r).trim(),
          l = t.trim();
        if (l.length > 0 && s.length > 0 && c.length > 0)
          return { body: c, message: l, title: s };
        let u;
        try {
          let [r, a] = await Promise.all([Pn(n, e, t), Nn(n, e)]);
          if (a.trim().length === 0) return null;
          u = await M(`generate-commit-pull-request-message`, {
            params: {
              hostId: e.hostConfig.id,
              prompt: [
                `Commit message context:`,
                r,
                ``,
                `Pull request context:`,
                a,
              ].join(`
`),
              cwd: e.cwd,
              conversationId: i,
            },
          });
        } catch (e) {
          return (
            o.danger(
              a.formatMessage(
                {
                  id: `review.commitPullRequest.generate.failed`,
                  defaultMessage: `Failed to generate commit and pull request messages: {error}`,
                  description: `Toast shown when combined commit and pull request message generation fails`,
                },
                { error: e instanceof Error ? e.message : String(e) },
              ),
            ),
            null
          );
        }
        let d = l || u.message?.trim() || ``,
          f = s || u.title?.trim() || ``,
          p = c || u.body?.trim() || ``;
        return d.length === 0 || f.length === 0 || p.length === 0
          ? (o.danger(
              a.formatMessage({
                id: `review.commitPullRequest.generate.emptyResponse`,
                defaultMessage: `Couldn't generate commit and pull request messages`,
                description: `Toast shown when combined commit and pull request message generation returns no result`,
              }),
            ),
            null)
          : (Fn(n, r, t, d),
            s.length === 0 &&
              n.set(At, r, (e) => (e.trim().length === 0 ? f : e)),
            c.length === 0 &&
              n.set(jt, r, (e) => (e.trim().length === 0 ? p : e)),
            { body: p, message: d, title: f });
      },
    };
  }),
  Mn = P(E, (e, { get: t, scope: n }) => {
    let r = xn({
        conversationId: e.conversationId,
        tokenUsageInfo: t(c, e.conversationId),
      }),
      i = t(B),
      a = t(F);
    return {
      mutationKey: [
        `vscode`,
        `generate-pull-request-message`,
        e.cwd,
        e.hostConfig.id,
        r,
      ],
      mutationFn: async ({ body: t, title: o }) => {
        let s = t.trim(),
          c = o.trim();
        if (s.length > 0 && c.length > 0) return { body: s, title: c };
        let l = (await Nn(n, e)).trim();
        if (l.length === 0)
          return (
            a.danger(i.formatMessage(Q.pullRequestGenerationError)),
            null
          );
        let u;
        try {
          u = await M(`generate-pull-request-message`, {
            params: {
              hostId: e.hostConfig.id,
              prompt: l,
              cwd: e.cwd,
              conversationId: r,
            },
          });
        } catch {
          return (
            a.danger(i.formatMessage(Q.pullRequestGenerationError)),
            null
          );
        }
        let d = s || u.body?.trim() || ``,
          f = c || u.title?.trim() || ``;
        return d.length > 0 && f.length > 0
          ? { body: d, title: f }
          : (a.danger(i.formatMessage(Q.pullRequestGenerationError)), null);
      },
    };
  });
async function Nn(e, t) {
  let [r, i, a] = await Promise.all([
      g(`git`).request({
        method: `review-patch`,
        params: {
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: kn,
          source: `branch`,
        },
      }),
      g(`git`).request({
        method: `branch-metadata`,
        params: { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: kn },
      }),
      g(`git`).request({
        method: `review-summary`,
        params: {
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: kn,
          source: `branch`,
        },
      }),
    ]),
    o = e.get(K, { cwd: t.cwd, hostConfig: t.hostConfig, operationSource: kn }),
    s = o.type === `success` ? o.data : void 0;
  return hn({
    pullRequestInstructions: oe(e.get, n.pullRequestInstructions) ?? null,
    uncommittedDiff: r.diff.type === `success` ? r.diff.unifiedDiff : null,
    filePaths: a.type === `success` ? a.files.map((e) => e.path) : [],
    baseBranch: i.baseBranch ?? s?.defaultBranch ?? null,
    headBranch: i.branch ?? s?.branch ?? null,
  });
}
async function Pn(e, t, r) {
  let i = e.get(kt),
    a = await g(`git`).request({
      method: `commit-message-diff`,
      params: {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        includeUnstaged: i,
        operationSource: kn,
      },
    }),
    o = dn(a),
    s = a.type === `error` ? a.error : null,
    c = fn(o),
    l = c?.linesAdded ?? 0,
    u = c?.linesRemoved ?? 0,
    d =
      l + u > On
        ? { filesChanged: c?.filesChanged ?? 0, linesAdded: l, linesRemoved: u }
        : null;
  return ln({
    commitInstructions: oe(e.get, n.commitInstructions) ?? null,
    diffError: s,
    draftMessage: r,
    oversizedDiffSummary: d,
    uncommittedDiff: d == null ? o : null,
  });
}
function Fn(e, t, n, r) {
  let i = e.get(X, t);
  (i.trim().length === 0 || i === n) && e.set(X, t, r);
}
function In(e, t, n, r, i) {
  if (!t) return;
  let a = u({
    metadata: t,
    method: `branch-ahead-count`,
    params: { operationSource: r, root: t.root },
    hostKey: n,
  });
  (e.setQueryData(a, (e) => e && { ...e, commitsAhead: i(e.commitsAhead) }),
    e.invalidateQueries({ queryKey: a }));
}
function Ln(e, t, n, r) {
  In(e, t, n, r, (e) => e + 1);
}
function Rn(e, t, n, r) {
  In(e, t, n, r, () => 0);
}
var zn = P(
    E,
    (e, { queryClient: t, scope: n }) => {
      let r = p(e.hostConfig);
      return {
        mutationKey: [`git`, `commit`, e.cwd],
        mutationFn: (t) =>
          g(`git`).request({
            method: `commit`,
            params: {
              cwd: e.cwd,
              hostConfig: e.hostConfig,
              message: t.message,
              includeUnstaged: n.get(kt),
              commitAttribution: t.commitAttribution,
              operationSource: t.operationSource,
            },
          }),
        onSuccess: async (a, o) => {
          if (a.status !== `success`) return;
          me(n, { eventName: `codex_git_commit_succeeded` });
          let s = t.getQueryData(
            i(e.cwd, r, e.hostConfig, o.operationSource).queryKey,
          );
          (Ln(t, s, r, o.operationSource),
            Ee(),
            n.set(X, { cwd: e.cwd, hostId: e.hostConfig.id }, ``),
            s != null &&
              (await t.invalidateQueries({
                queryKey: f(s.commonDir, s.root, r),
              })));
        },
      };
    },
    { excludeFieldsFromKey: [`operationSource`] },
  ),
  Bn = P(
    E,
    (e, { scope: t }) => ({
      mutationKey: [`vscode`, `gh-pr-create`, e.cwd, e.hostId],
      mutationFn: (t) =>
        M(`gh-pr-create`, {
          params: {
            cwd: t.cwd,
            headBranch: t.headBranch,
            baseBranch: t.baseBranch,
            hostId: e.hostId,
            isDraft: t.isDraft,
            openInBrowser: t.openInBrowser,
            titleOverride: t.titleOverride,
            bodyOverride: t.bodyOverride,
          },
          source: t.operationSource,
        }),
      onSuccess: async (n, r) => {
        if (n.status !== `success`) {
          Ie(t, e.hostId);
          return;
        }
        if (r.openInBrowser === !0) return;
        me(t, { eventName: `codex_git_create_pr_succeeded` });
        let i = t.query.snapshot(We, {
          cwd: r.cwd,
          headBranch: r.headBranch,
          hostId: e.hostId,
          operationSource: r.operationSource,
        });
        (await i.cancel(),
          i.setData({
            activityItems: [],
            boardItem: null,
            body: r.bodyOverride?.trim() || ``,
            canMerge: !1,
            checks: [],
            ciStatus: `pending`,
            commentAttachments: [],
            hasOpenPr: !0,
            isDraft: r.isDraft ?? !1,
            mergeBlocker: `unknown`,
            number: n.number,
            repo: null,
            reviewers: {
              approved: [],
              commentCounts: [],
              commented: [],
              changesRequested: [],
              requested: [],
              unresolvedCommentCount: 0,
            },
            reviewStatus: `none`,
            status: `success`,
            title: r.titleOverride?.trim() || null,
            url: n.url,
          }),
          r.conversationId != null &&
            r.headBranch.trim().length > 0 &&
            _(r.conversationId, r.headBranch));
      },
      networkMode: `always`,
    }),
    { excludeFieldsFromKey: [`operationSource`] },
  ),
  Vn = P(
    E,
    (e, { queryClient: t, scope: n }) => {
      let r = p(e.hostConfig);
      return {
        mutationKey: [`vscode`, `git-push`, e.cwd, e.hostConfig.id],
        mutationFn: (t) =>
          M(`git-push`, {
            params: {
              cwd: t.cwd,
              force: t.force,
              hostId: e.hostConfig.id,
              refspec: t.refspec,
              setUpstream: t.setUpstream,
            },
            source: t.operationSource,
          }),
        onSuccess: (a, o) => {
          a.status === `success` &&
            (me(n, {
              eventName: `codex_git_push_succeeded`,
              metadata: { forced: o.force ?? !1 },
            }),
            o.analyticsAttribution != null &&
              n.get(pe).submitCodexAnalyticsEvent?.({
                ...o.analyticsAttribution,
                action: `push`,
                eventKind: `action`,
                metadata: { forced: o.force ?? !1 },
              }),
            Rn(
              t,
              t.getQueryData(
                i(e.cwd, r, e.hostConfig, o.operationSource).queryKey,
              ),
              r,
              o.operationSource,
            ));
        },
        networkMode: `always`,
      };
    },
    { excludeFieldsFromKey: [`operationSource`] },
  ),
  Hn = P(E, (e, { queryClient: t }) => {
    let n = p(e.hostConfig);
    return {
      mutationKey: [
        `vscode`,
        `git-create-and-checkout-branch`,
        e.cwd,
        e.hostConfig.id,
        e.operationSource,
      ],
      mutationFn: async (t) => {
        let n = await M(`git-create-branch`, {
          params: { ...t, cwd: e.cwd, hostId: e.hostConfig.id },
          source: e.operationSource,
        });
        if (n.status === `error`)
          return {
            status: `create-error`,
            error: n.error,
            execOutput: n.execOutput,
          };
        let r = await M(`git-checkout-branch`, {
          params: { branch: t.branch, cwd: e.cwd, hostId: e.hostConfig.id },
          source: e.operationSource,
        });
        return r.status === `error`
          ? {
              status: `checkout-error`,
              error: r.error,
              errorType: r.errorType,
              conflictedPaths: r.conflictedPaths,
              execOutput: r.execOutput,
            }
          : { status: `success`, branch: r.branch };
      },
      onSettled: (r, a, s) => {
        let c = t.getQueryData(
          i(e.cwd, n, e.hostConfig, e.operationSource).queryKey,
        );
        c != null &&
          (o(t, c, {
            changeType: s.mode === `synced` ? `synced-branch` : `head`,
            hostKey: n,
          }),
          r?.status === `success` &&
            s.mode === `synced` &&
            o(t, c, { changeType: `head`, hostKey: n }));
      },
      networkMode: `always`,
    };
  });
async function Un({
  scope: e,
  conversationId: t,
  cwd: n,
  hostConfig: r,
  operationSource: i,
  branch: a,
  mode: o,
}) {
  let s = e.get(F),
    c = e.get(B),
    l = c.formatMessage(Q.createBranchErrorTitle);
  try {
    let u = await e
      .get(Hn, { cwd: n, hostConfig: r, operationSource: i })
      .mutateAsync({ branch: a, failIfExists: !0, mode: o });
    switch (u.status) {
      case `success`:
        return (t != null && _(t, a), !0);
      case `create-error`:
        return (
          $({
            toaster: s,
            title: l,
            message: u.execOutput == null ? u.error : null,
            execOutput: u.execOutput,
          }),
          !1
        );
      case `checkout-error`:
        return (
          $({
            toaster: s,
            title: c.formatMessage(Q.checkoutBranchErrorTitle),
            message: u.execOutput == null ? u.error : null,
            execOutput: u.execOutput,
          }),
          !1
        );
    }
  } catch {
    return ($({ toaster: s, title: l, message: l }), !1);
  }
}
async function Wn({
  scope: e,
  cwd: t,
  hostConfig: n,
  resolveCommitMessage: r,
  commitAttribution: i,
  operationSource: a,
  allowNothingToCommit: o = !1,
}) {
  let s = e.get(F),
    c = e.get(B),
    l = await r();
  if (l == null) return !1;
  let u = l.trim();
  if (u.length === 0)
    return (s.danger(c.formatMessage(Q.commitMessageEmpty)), !1);
  try {
    let r = await e
      .get(zn, { cwd: t, hostConfig: n, operationSource: a })
      .mutateAsync({ message: u, commitAttribution: i, operationSource: a });
    if (r.status === `error`)
      return o && r.errorType === `nothing-to-commit`
        ? !0
        : ($({
            toaster: s,
            title: c.formatMessage(Q.commitErrorTitle),
            message: r.execOutput == null ? r.error : null,
            execOutput: r.execOutput,
          }),
          !1);
  } catch {
    return (
      $({
        toaster: s,
        title: c.formatMessage(Q.commitErrorTitle),
        message: null,
      }),
      !1
    );
  }
  return !0;
}
async function Gn({
  scope: e,
  cwd: t,
  hostConfig: n,
  pushStatus: r,
  analyticsAttribution: i,
  operationSource: a,
  forcePush: o = !1,
}) {
  let s = e.get(F),
    c = e.get(B),
    l = c.formatMessage(o ? Q.forcePushErrorTitle : Q.pushErrorTitle);
  if (r == null) return ($({ toaster: s, title: l, message: null }), !1);
  let u = { cwd: t, force: o };
  !r.upstreamRef &&
    r.branch &&
    ((u.refspec = `HEAD:refs/heads/${r.branch}`), (u.setUpstream = !0));
  try {
    let r = await e
      .get(Vn, { cwd: t, hostConfig: n, operationSource: a })
      .mutateAsync({ ...u, analyticsAttribution: i, operationSource: a });
    if (r.status === `error`)
      return (
        $({
          toaster: s,
          title: l,
          message:
            r.execOutput == null ? c.formatMessage(Q.pushErrorTitle) : null,
          execOutput: r.execOutput,
        }),
        !1
      );
  } catch {
    return ($({ toaster: s, title: l, message: null }), !1);
  }
  return !0;
}
async function Kn({
  scope: e,
  conversationId: t,
  cwd: n,
  hostConfig: r,
  pushStatus: i,
  createPullRequestAsDraft: a,
  operationSource: o,
  openInBrowser: s = !1,
  title: c,
  body: l,
}) {
  let u = e.get(F),
    d = e.get(B);
  if (i?.branch == null || i.defaultBranch == null)
    return (
      $({
        toaster: u,
        title: d.formatMessage(Q.createPullRequestErrorTitle),
        message: null,
      }),
      null
    );
  try {
    let f = await e
      .get(Bn, { cwd: n, hostId: r.id, operationSource: o })
      .mutateAsync({
        cwd: n,
        headBranch: i.branch,
        baseBranch: i.defaultBranch,
        isDraft: a,
        openInBrowser: s,
        titleOverride: c,
        bodyOverride: l,
        conversationId: t,
        operationSource: o,
      });
    return f.status === `success`
      ? (s &&
          f.url != null &&
          ue.dispatchMessage(`open-in-browser`, {
            url: f.url,
            useExternalBrowser: !0,
          }),
        { url: f.url })
      : ($({
          toaster: u,
          title: d.formatMessage(Q.createPullRequestErrorTitle),
          message: f.execOutput == null ? f.error : null,
          execOutput: f.execOutput,
        }),
        null);
  } catch {
    return (
      $({
        toaster: u,
        title: d.formatMessage(Q.createPullRequestErrorTitle),
        message: null,
      }),
      null
    );
  }
}
function qn(e) {
  if (t(e, `codex_git_commit`) !== !0) return null;
  let n = e?.commit_attribution;
  if (n == null) return n;
  if (typeof n != `string`) return;
  let r = n.trim();
  return r.length > 0 ? r : null;
}
async function Jn(e, t, n) {
  let r = { cwd: t.cwd, hostId: t.hostConfig.id };
  if (e.get(Y, r) != null) return !1;
  e.set(Y, r, {
    workflow: `commit`,
    phase: n.nextStep === `push` ? `pushing` : `committing`,
  });
  try {
    let i = e.get(K, {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: t.operationSource,
      }),
      a = i.type === `success` ? i.data : void 0,
      o = n.newBranch ?? a?.branch;
    if (n.newBranch != null) {
      if (
        !(await Un({
          scope: e,
          conversationId: t.conversationId,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: t.operationSource,
          branch: n.newBranch,
          mode: t.codexWorktree ? `synced` : `worktree`,
        }))
      )
        return !1;
      await $e(e, {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: t.operationSource,
      });
    }
    if (n.nextStep !== `push`) {
      if (
        n.newBranch == null &&
        t.operationSource === `local_conversation_git_actions` &&
        t.conversationId != null &&
        e.get(Ht, t)
      ) {
        let n = e.get(zt, t);
        n.length > 0 && _(t.conversationId, n);
      }
      if (
        (e.set(Y, r, { workflow: `commit`, phase: `committing` }),
        !(await Wn({
          scope: e,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          resolveCommitMessage: async () => {
            let n = e.get(X, r).trim();
            return n.length > 0
              ? n
              : e
                  .get(An, {
                    conversationId: t.conversationId,
                    cwd: t.cwd,
                    hostConfig: t.hostConfig,
                  })
                  .mutateAsync();
          },
          commitAttribution: qn(
            e.get(R, { cwd: t.cwd, hostId: t.hostConfig.id }).data,
          ),
          operationSource: t.operationSource,
        })))
      )
        return !1;
    }
    if (n.nextStep !== `commit`) {
      e.set(Y, r, { workflow: `commit`, phase: `pushing` });
      let n = e.get(K, {
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: t.operationSource,
        }),
        i = n.type === `success` ? n.data : void 0;
      if (
        ((o = i?.branch ?? o),
        !(await Gn({
          scope: e,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          pushStatus: i,
          analyticsAttribution: e.get(He),
          operationSource: t.operationSource,
        })))
      )
        return !1;
      on(e, {
        branch: o,
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: t.operationSource,
      });
    }
    let s = e.get(B);
    return (
      e
        .get(F)
        .success(
          s.formatMessage(
            n.nextStep === `commit` ? Q.commitSuccess : Q.pushSuccess,
            { branch: En(s, o) },
          ),
        ),
      !0
    );
  } finally {
    e.set(Y, r, null);
  }
}
async function Yn(e, t, n) {
  let r = { cwd: t.cwd, hostId: t.hostConfig.id };
  if (e.get(Y, r) != null) return !1;
  e.set(Y, r, {
    workflow: `create-pr`,
    phase:
      n.nextStep === `commit-push-and-create-pr`
        ? `generating-commit-message`
        : n.nextStep === `push-and-create-pr`
          ? `pushing`
          : `creating-pr`,
  });
  try {
    let i = e.get(Mt, r);
    e.set(kt, i);
    let a = e.get(K, {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: t.operationSource,
      }),
      o = a.type === `success` ? a.data : void 0,
      s = n.newBranch ?? o?.branch,
      c = o,
      l =
        n.nextStep === `commit-push-and-create-pr`
          ? await e
              .get(jn, {
                conversationId: t.conversationId,
                cwd: t.cwd,
                hostConfig: t.hostConfig,
              })
              .mutateAsync()
          : null;
    if (n.nextStep === `commit-push-and-create-pr` && l == null) return !1;
    if (n.newBranch != null) {
      if (
        !(await Un({
          scope: e,
          conversationId: t.conversationId,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          operationSource: t.operationSource,
          branch: n.newBranch,
          mode: t.codexWorktree ? `synced` : `worktree`,
        }))
      )
        return !1;
      await $e(e, {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: t.operationSource,
      });
    }
    if (n.nextStep === `commit-push-and-create-pr`) {
      if (n.newBranch == null && t.conversationId != null && e.get(Ht, t)) {
        let n = e.get(zt, t);
        n.length > 0 && _(t.conversationId, n);
      }
      if (
        (e.set(Y, r, { workflow: `create-pr`, phase: `committing` }),
        !(await Wn({
          scope: e,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          resolveCommitMessage: async () => l?.message ?? null,
          commitAttribution: qn(
            e.get(R, { cwd: t.cwd, hostId: t.hostConfig.id }).data,
          ),
          operationSource: t.operationSource,
          allowNothingToCommit: !0,
        })))
      )
        return !1;
    }
    if (n.nextStep !== `create-pr`) {
      e.set(Y, r, { workflow: `create-pr`, phase: `pushing` });
      let n = e.get(K, {
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: t.operationSource,
      });
      if (
        ((c = n.type === `success` ? n.data : void 0),
        (s = c?.branch ?? s),
        !(await Gn({
          scope: e,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
          pushStatus: c,
          analyticsAttribution: e.get(He),
          operationSource: t.operationSource,
        })))
      )
        return !1;
      on(e, {
        branch: s,
        cwd: t.cwd,
        hostConfig: t.hostConfig,
        operationSource: t.operationSource,
      });
    }
    e.set(Y, r, { workflow: `create-pr`, phase: `creating-pr` });
    let u =
      l ??
      (await e
        .get(Mn, {
          conversationId: t.conversationId,
          cwd: t.cwd,
          hostConfig: t.hostConfig,
        })
        .mutateAsync({ body: e.get(jt, r), title: e.get(At, r) }));
    if (u == null) return !1;
    let d = await Kn({
      scope: e,
      conversationId: t.conversationId,
      cwd: t.cwd,
      hostConfig: t.hostConfig,
      pushStatus: c,
      createPullRequestAsDraft: n.createPullRequestAsDraft,
      operationSource: t.operationSource,
      openInBrowser: n.openInBrowser,
      title: u.title,
      body: u.body,
    });
    return d == null || n.openInBrowser ? d != null : (Xn(e, s, d.url), !0);
  } finally {
    e.set(Y, r, null);
  }
}
function Xn(e, t, n) {
  e.get(F).success(
    (0, q.jsx)(D, {
      id: `localConversationPage.createPullRequestSuccessToast`,
      defaultMessage: `Created {prLabel} for {branch}`,
      description: `Toast shown when creating a pull request succeeds`,
      values: {
        branch: En(e.get(B), t),
        prLabel:
          n == null
            ? `PR`
            : (0, q.jsx)(`a`, {
                href: n,
                className: `cursor-interaction underline decoration-current decoration-[0.5px]`,
                target: `_blank`,
                rel: `noopener noreferrer`,
                onClick: (e) => {
                  (e.preventDefault(),
                    ue.dispatchMessage(`open-in-browser`, { url: n }));
                },
                children: `PR`,
              }),
      },
    }),
  );
}
var Zn = P(L, (e, { scope: t }) => ({
  mutationKey: [`local-git-workflow`, e.cwd, e.hostConfig.id],
  mutationFn: (n) => {
    switch (n.kind) {
      case `commit`:
        return Jn(t, e, n);
      case `create-pr`:
        return Yn(t, e, n);
    }
  },
  networkMode: `always`,
}));
function Qn(e) {
  let t = (0, W.c)(15),
    {
      branchAlreadyExists: n,
      disabled: r,
      placeholder: i,
      value: a,
      onChange: o,
    } = e,
    s = ee(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `localConversationPage.gitActions.branchNameLabel`,
        defaultMessage: `Branch name`,
        description: `Accessible label for a new Git action branch field`,
      })),
      (t[0] = s),
      (t[1] = c));
  let l;
  t[2] === o
    ? (l = t[3])
    : ((l = (e) => {
        o(e.target.value);
      }),
      (t[2] = o),
      (t[3] = l));
  let u;
  t[4] !== r || t[5] !== i || t[6] !== c || t[7] !== l || t[8] !== a
    ? ((u = (0, q.jsx)(`input`, {
        autoFocus: !0,
        className: `w-full bg-transparent text-token-input-foreground outline-none placeholder:text-token-description-foreground`,
        "aria-label": c,
        placeholder: i,
        value: a,
        disabled: r,
        onKeyDown: $n,
        onChange: l,
      })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c),
      (t[7] = l),
      (t[8] = a),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === n
    ? (d = t[11])
    : ((d = n
        ? (0, q.jsx)(`p`, {
            className: `text-xs text-token-error-foreground`,
            children: (0, q.jsx)(D, {
              id: `localConversationPage.gitActions.branchExistsError`,
              defaultMessage: `Branch already exists`,
              description: `Validation message shown when a new Git action branch already exists`,
            }),
          })
        : null),
      (t[10] = n),
      (t[11] = d));
  let f;
  return (
    t[12] !== u || t[13] !== d
      ? ((f = (0, q.jsxs)(`div`, {
          className: `flex flex-col gap-1 px-3 pt-2`,
          children: [u, d],
        })),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function $n(e) {
  e.key === `Enter` && !e.metaKey && !e.ctrlKey && e.stopPropagation();
}
var er = 5;
function tr({ branchPrefix: e, conversationTitle: t }) {
  let n = e?.trim() ?? ``,
    r = nr(t);
  return r.length === 0 ? n : `${n}${r}`;
}
function nr(e) {
  return e
    ? e
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .slice(0, er)
        .map((e) => e.replace(/[^a-z0-9]/g, ``))
        .filter((e) => e.length > 0)
        .join(`-`)
    : ``;
}
function rr(e) {
  let t = (0, W.c)(137),
    {
      open: r,
      onOpenChange: i,
      conversationId: a,
      cwd: o,
      hostConfig: s,
      codexWorktree: c,
      enablePushActions: l,
      operationSource: u,
      onStatusChange: d,
      onRequestReset: f,
    } = e,
    p = c === void 0 ? !1 : c,
    m = l === void 0 ? !1 : l,
    h = u === void 0 ? `commit_modal` : u,
    g = te(E),
    _ = ee(),
    [v, b] = (0, tt.useState)(null),
    [x, S] = (0, tt.useState)(null),
    C;
  t[0] !== o || t[1] !== s.id
    ? ((C = { cwd: o, hostId: s.id }), (t[0] = o), (t[1] = s.id), (t[2] = C))
    : (C = t[2]);
  let w = C,
    T = re(n.branchPrefix),
    O = k(y, a),
    A = ne(kt),
    j = k(X, w),
    ie = a ?? null,
    M;
  t[3] !== p || t[4] !== o || t[5] !== s || t[6] !== ie
    ? ((M = { codexWorktree: p, conversationId: ie, cwd: o, hostConfig: s }),
      (t[3] = p),
      (t[4] = o),
      (t[5] = s),
      (t[6] = ie),
      (t[7] = M))
    : (M = t[7]);
  let ae = M,
    N = k(zt, ae),
    oe = k(Ut, ae),
    P;
  t[8] !== o || t[9] !== s
    ? ((P = { cwd: o, hostConfig: s }), (t[8] = o), (t[9] = s), (t[10] = P))
    : (P = t[10]);
  let se = k(Ct, P),
    ce;
  t[11] !== o || t[12] !== s
    ? ((ce = { cwd: o, hostConfig: s }), (t[11] = o), (t[12] = s), (t[13] = ce))
    : (ce = t[13]);
  let le = k(wt, ce),
    ue;
  t[14] !== h || t[15] !== ae
    ? ((ue = { ...ae, operationSource: h }),
      (t[14] = h),
      (t[15] = ae),
      (t[16] = ue))
    : (ue = t[16]);
  let de = k(Zn, ue),
    pe;
  t[17] !== o || t[18] !== s || t[19] !== h
    ? ((pe = { cwd: o, hostConfig: s, operationSource: h }),
      (t[17] = o),
      (t[18] = s),
      (t[19] = h),
      (t[20] = pe))
    : (pe = t[20]);
  let me = k(K, pe),
    he = me.type === `success` ? me.data : void 0,
    F = k(Y, w),
    I = de.isPending || F != null,
    _e;
  t[21] !== o || t[22] !== s || t[23] !== A
    ? ((_e = { cwd: o, hostConfig: s, includeUnstaged: A }),
      (t[21] = o),
      (t[22] = s),
      (t[23] = A),
      (t[24] = _e))
    : (_e = t[24]);
  let L = k(xt, _e),
    ve;
  t[25] !== o || t[26] !== s || t[27] !== A
    ? ((ve = { cwd: o, hostConfig: s, includeUnstaged: A }),
      (t[25] = o),
      (t[26] = s),
      (t[27] = A),
      (t[28] = ve))
    : (ve = t[28]);
  let R = k(St, ve),
    ye;
  t[29] !== o || t[30] !== s
    ? ((ye = { cwd: o, hostConfig: s, includeUnstaged: !0 }),
      (t[29] = o),
      (t[30] = s),
      (t[31] = ye))
    : (ye = t[31]);
  let xe = k(St, ye),
    Se = null;
  he && (Se = he.branch ?? he.upstreamRef ?? null);
  let Ce;
  t[32] !== N || t[33] !== Se || t[34] !== oe
    ? ((Ce = !oe && N?.trim() ? N.trim() : oe ? null : Se),
      (t[32] = N),
      (t[33] = Se),
      (t[34] = oe),
      (t[35] = Ce))
    : (Ce = t[35]);
  let z = Ce,
    we = m,
    B = we && (v ?? oe),
    Te;
  t[36] !== T || t[37] !== O
    ? ((Te = tr({ branchPrefix: T, conversationTitle: O })),
      (t[36] = T),
      (t[37] = O),
      (t[38] = Te))
    : (Te = t[38]);
  let Ee = x ?? Te,
    ke;
  t[39] === Ee ? (ke = t[40]) : ((ke = Ee.trim()), (t[39] = Ee), (t[40] = ke));
  let V = ke,
    U = ge(V, 200),
    Pe;
  t[41] !== B || t[42] !== U || t[43] !== r
    ? ((Pe = r && B && U.length > 0 && !U.endsWith(`/`)),
      (t[41] = B),
      (t[42] = U),
      (t[43] = r),
      (t[44] = Pe))
    : (Pe = t[44]);
  let Ie = Pe,
    Le;
  t[45] !== o || t[46] !== U || t[47] !== s || t[48] !== h || t[49] !== Ie
    ? ((Le = {
        branch: U,
        cwd: o,
        enabled: Ie,
        hostConfig: s,
        operationSource: h,
      }),
      (t[45] = o),
      (t[46] = U),
      (t[47] = s),
      (t[48] = h),
      (t[49] = Ie),
      (t[50] = Le))
    : (Le = t[50]);
  let { data: ze } = k(Je, Le),
    Be = U === V && ze === !0,
    He;
  t[51] !== Be || t[52] !== B || t[53] !== V
    ? ((He = B && (V.length === 0 || V.endsWith(`/`) || Be)),
      (t[51] = Be),
      (t[52] = B),
      (t[53] = V),
      (t[54] = He))
    : (He = t[54]);
  let Ue = He,
    We = xe == null || xe === `changes-loading`,
    Ge = R == null && !I && !Ue,
    Ke = !I && !Ue && (B ? (he?.commitsAhead ?? 0) > 0 : se == null),
    qe = Ge && (B || le == null),
    Ye;
  t[55] !== m || t[56] !== _
    ? ((Ye = m
        ? _.formatMessage({
            id: `review.commit.form.commitAndPushTitle`,
            defaultMessage: `Commit or push`,
            description: `Title for the commit modal when commit and push actions are available`,
          })
        : _.formatMessage({
            id: `review.commit.form.commitTitle`,
            defaultMessage: `Commit`,
            description: `Title for the commit modal when only commit is available`,
          })),
      (t[55] = m),
      (t[56] = _),
      (t[57] = Ye))
    : (Ye = t[57]);
  let Xe = Ye,
    Ze;
  t[58] !== R ||
  t[59] !== B ||
  t[60] !== Ue ||
  t[61] !== I ||
  t[62] !== i ||
  t[63] !== f ||
  t[64] !== d ||
  t[65] !== V ||
  t[66] !== de
    ? ((Ze = (e) => {
        if (I || Ue || (e !== `push` && R != null)) return;
        (i(!1), d?.(`loading`));
        let t = B
          ? { kind: `commit`, newBranch: V, nextStep: e }
          : { kind: `commit`, nextStep: e };
        de.mutate(t, {
          onSuccess: (e) => {
            d?.(e ? `success` : `error`);
          },
          onSettled: f,
        });
      }),
      (t[58] = R),
      (t[59] = B),
      (t[60] = Ue),
      (t[61] = I),
      (t[62] = i),
      (t[63] = f),
      (t[64] = d),
      (t[65] = V),
      (t[66] = de),
      (t[67] = Ze))
    : (Ze = t[67]);
  let G = Ze,
    Qe;
  t[68] !== I || t[69] !== i || t[70] !== f
    ? ((Qe = (e) => {
        if (!e && !I) {
          f();
          return;
        }
        i(e);
      }),
      (t[68] = I),
      (t[69] = i),
      (t[70] = f),
      (t[71] = Qe))
    : (Qe = t[71]);
  let $e = Qe,
    et;
  t[72] === Xe
    ? (et = t[73])
    : ((et = (0, q.jsx)(De, { className: `sr-only`, children: Xe })),
      (t[72] = Xe),
      (t[73] = et));
  let at;
  t[74] !== we || t[75] !== Se || t[76] !== B || t[77] !== z || t[78] !== I
    ? ((at = (0, q.jsx)(`span`, {
        className: `flex min-w-0 items-center gap-2 text-token-description-foreground`,
        children: we
          ? (0, q.jsxs)(Me, {
              align: `start`,
              contentWidth: `xs`,
              disabled: I,
              triggerButton: (0, q.jsxs)(`button`, {
                type: `button`,
                className: `flex min-w-0 cursor-interaction items-center gap-2 text-token-description-foreground`,
                children: [
                  (0, q.jsx)(fe, { className: `icon-xs shrink-0` }),
                  (0, q.jsx)(`span`, {
                    className: `truncate`,
                    children: B
                      ? (0, q.jsx)(D, {
                          id: `review.commit.branchTarget.newBranch`,
                          defaultMessage: `New branch`,
                          description: `Label for selecting a new commit branch`,
                        })
                      : (z ??
                        (0, q.jsx)(D, {
                          id: `review.commit.form.commitTo.none`,
                          defaultMessage: `-`,
                          description: `Placeholder shown when no commit target is available`,
                        })),
                  }),
                  (0, q.jsx)(Ne, { className: `icon-2xs shrink-0` }),
                ],
              }),
              children: [
                (0, q.jsx)(H.SectionLabel, {
                  children: (0, q.jsx)(D, {
                    id: `review.commit.branchTarget.title`,
                    defaultMessage: `Commit to`,
                    description: `Heading for commit branch target options`,
                  }),
                }),
                z == null
                  ? null
                  : (0, q.jsx)(H.Item, {
                      LeftIcon: fe,
                      RightIcon: B ? void 0 : Ae,
                      onSelect: () => {
                        b(!1);
                      },
                      children: z,
                    }),
                (0, q.jsx)(H.Item, {
                  LeftIcon: Fe,
                  RightIcon: B ? Ae : void 0,
                  onSelect: () => {
                    b(!0);
                  },
                  children: (0, q.jsx)(D, {
                    id: `review.commit.branchTarget.newBranch`,
                    defaultMessage: `New branch`,
                    description: `Label for selecting a new commit branch`,
                  }),
                }),
              ],
            })
          : (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsx)(fe, { className: `icon-xs shrink-0` }),
                (0, q.jsx)(`span`, {
                  className: `truncate`,
                  children:
                    Se ??
                    (0, q.jsx)(D, {
                      id: `review.commit.form.commitTo.none`,
                      defaultMessage: `-`,
                      description: `Placeholder shown when no commit target is available`,
                    }),
                }),
              ],
            }),
      })),
      (t[74] = we),
      (t[75] = Se),
      (t[76] = B),
      (t[77] = z),
      (t[78] = I),
      (t[79] = at))
    : (at = t[79]);
  let ot;
  t[80] !== L || t[81] !== We
    ? ((ot = We
        ? (0, q.jsxs)(`span`, {
            className: `flex shrink-0 items-center gap-2`,
            children: [
              (0, q.jsx)(`span`, {
                className: `inline-flex size-4 shrink-0 items-center justify-center`,
                children:
                  L.isLoading || L.isFetching
                    ? (0, q.jsx)(be, {
                        className: `icon-xs text-token-description-foreground`,
                      })
                    : null,
              }),
              (0, q.jsx)(ar, {
                isLoading: L.isLoading,
                isUnavailable: L.isUnavailable,
                selectionSummary: L.selectionSummary,
              }),
            ],
          })
        : null),
      (t[80] = L),
      (t[81] = We),
      (t[82] = ot))
    : (ot = t[82]);
  let st;
  t[83] !== at || t[84] !== ot
    ? ((st = (0, q.jsxs)(`div`, {
        className: `flex h-9 items-center justify-between gap-3 px-3`,
        children: [at, ot],
      })),
      (t[83] = at),
      (t[84] = ot),
      (t[85] = st))
    : (st = t[85]);
  let ct;
  t[86] !== Be || t[87] !== Ee || t[88] !== T || t[89] !== B || t[90] !== I
    ? ((ct = B
        ? (0, q.jsx)(Qn, {
            branchAlreadyExists: Be,
            disabled: I,
            placeholder: T?.trim(),
            value: Ee,
            onChange: S,
          })
        : null),
      (t[86] = Be),
      (t[87] = Ee),
      (t[88] = T),
      (t[89] = B),
      (t[90] = I),
      (t[91] = ct))
    : (ct = t[91]);
  let J;
  t[92] !== B ||
  t[93] !== w ||
  t[94] !== A ||
  t[95] !== _ ||
  t[96] !== I ||
  t[97] !== j ||
  t[98] !== g ||
  t[99] !== We
    ? ((J = We
        ? (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(`textarea`, {
                autoFocus: !B,
                rows: 3,
                className: `h-20 w-full resize-none bg-transparent px-3 py-2 text-token-input-foreground outline-none`,
                "aria-label": _.formatMessage({
                  id: `review.commit.messageLabel`,
                  defaultMessage: `Commit message`,
                  description: `Label for commit message textarea`,
                }),
                placeholder: _.formatMessage({
                  id: `review.commit.autoGeneratePlaceholder`,
                  defaultMessage: `Commit message (leave blank to generate)…`,
                  description: `Placeholder for commit message fields that can be generated automatically`,
                }),
                value: j,
                disabled: I,
                onKeyDown: ir,
                onChange: (e) => {
                  g.set(X, w, e.target.value);
                },
              }),
              (0, q.jsxs)(`div`, {
                className: `relative flex items-center gap-2 px-3 pt-2 pb-3`,
                children: [
                  (0, q.jsx)(je, {
                    id: `commit-include-unstaged-changes`,
                    checked: A,
                    disabled: I,
                    onCheckedChange: (e) => {
                      g.set(kt, e);
                    },
                  }),
                  (0, q.jsx)(`label`, {
                    htmlFor: `commit-include-unstaged-changes`,
                    className: `text-token-foreground`,
                    children: (0, q.jsx)(D, {
                      id: `review.commit.selection.includeUnstagedChanges`,
                      defaultMessage: `Include unstaged changes`,
                      description: `Label for selecting unstaged changes in the commit modal`,
                    }),
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[92] = B),
      (t[93] = w),
      (t[94] = A),
      (t[95] = _),
      (t[96] = I),
      (t[97] = j),
      (t[98] = g),
      (t[99] = We),
      (t[100] = J))
    : (J = t[100]);
  let lt = !Ge,
    ut;
  t[101] === R
    ? (ut = t[102])
    : ((ut = (0, q.jsx)(rt, { reason: R })), (t[101] = R), (t[102] = ut));
  let dt;
  t[103] === G
    ? (dt = t[104])
    : ((dt = () => G(`commit`)), (t[103] = G), (t[104] = dt));
  let ft;
  t[105] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, q.jsx)(D, {
        id: `review.commit.nextSteps.commit`,
        defaultMessage: `Commit`,
        description: `Label for the commit-only option`,
      })),
      (t[105] = ft))
    : (ft = t[105]);
  let pt;
  t[106] !== I || t[107] !== lt || t[108] !== ut || t[109] !== dt
    ? ((pt = (0, q.jsx)(or, {
        Icon: nt,
        disabled: lt,
        loading: I,
        tooltipContent: ut,
        value: `commit`,
        onSelect: dt,
        children: ft,
      })),
      (t[106] = I),
      (t[107] = lt),
      (t[108] = ut),
      (t[109] = dt),
      (t[110] = pt))
    : (pt = t[110]);
  let mt;
  t[111] !== qe || t[112] !== R || t[113] !== m || t[114] !== le || t[115] !== G
    ? ((mt = m
        ? (0, q.jsx)(or, {
            Icon: Ve,
            disabled: !qe,
            loading: !1,
            tooltipContent:
              R == null
                ? (0, q.jsx)(it, { reason: le })
                : (0, q.jsx)(rt, { reason: R }),
            value: `commit-and-push`,
            onSelect: () => G(`commit-and-push`),
            children: (0, q.jsx)(D, {
              id: `review.commit.nextSteps.commitAndPush`,
              defaultMessage: `Commit and push`,
              description: `Label for the commit and push option`,
            }),
          })
        : null),
      (t[111] = qe),
      (t[112] = R),
      (t[113] = m),
      (t[114] = le),
      (t[115] = G),
      (t[116] = mt))
    : (mt = t[116]);
  let ht;
  t[117] !== Ke || t[118] !== m || t[119] !== se || t[120] !== G
    ? ((ht = m
        ? (0, q.jsx)(or, {
            Icon: Ve,
            disabled: !Ke,
            loading: !1,
            tooltipContent: (0, q.jsx)(it, { reason: se }),
            value: `push`,
            onSelect: () => G(`push`),
            children: (0, q.jsx)(D, {
              id: `review.commit.nextSteps.push`,
              defaultMessage: `Push`,
              description: `Label for the push-only option`,
            }),
          })
        : null),
      (t[117] = Ke),
      (t[118] = m),
      (t[119] = se),
      (t[120] = G),
      (t[121] = ht))
    : (ht = t[121]);
  let gt;
  t[122] !== pt || t[123] !== mt || t[124] !== ht
    ? ((gt = (0, q.jsx)(`div`, {
        className: `border-t border-token-border-default py-1`,
        children: (0, q.jsx)(Re.List, {
          children: (0, q.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [pt, mt, ht],
          }),
        }),
      })),
      (t[122] = pt),
      (t[123] = mt),
      (t[124] = ht),
      (t[125] = gt))
    : (gt = t[125]);
  let _t;
  t[126] !== Xe ||
  t[127] !== st ||
  t[128] !== ct ||
  t[129] !== J ||
  t[130] !== gt
    ? ((_t = (0, q.jsx)(`div`, {
        className: `command-menu-dialog contents`,
        children: (0, q.jsxs)(Re, {
          "data-codex-shortcut-capture": !0,
          className: `w-[420px] max-w-[92vw]`,
          label: Xe,
          shouldFilter: !1,
          loop: !0,
          children: [st, ct, J, gt],
        }),
      })),
      (t[126] = Xe),
      (t[127] = st),
      (t[128] = ct),
      (t[129] = J),
      (t[130] = gt),
      (t[131] = _t))
    : (_t = t[131]);
  let vt;
  return (
    t[132] !== $e || t[133] !== r || t[134] !== et || t[135] !== _t
      ? ((vt = (0, q.jsxs)(Oe, {
          open: r,
          showDialogClose: !1,
          unstyledContent: !0,
          onOpenChange: $e,
          children: [et, _t],
        })),
        (t[132] = $e),
        (t[133] = r),
        (t[134] = et),
        (t[135] = _t),
        (t[136] = vt))
      : (vt = t[136]),
    vt
  );
}
function ir(e) {
  e.key === `Enter` && !e.metaKey && !e.ctrlKey && e.stopPropagation();
}
function ar(e) {
  let t = (0, W.c)(2),
    { isLoading: n, isUnavailable: r, selectionSummary: i } = e;
  if (n || r) return null;
  let a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a = (0, q.jsx)(`span`, {
          className: `flex shrink-0 items-center gap-1 text-token-description-foreground`,
          children:
            i == null
              ? (0, q.jsx)(D, {
                  id: `localConversation.sync.modal.noChanges`,
                  defaultMessage: `No changes`,
                  description: `Label shown when there are no changes to sync`,
                })
              : (0, q.jsx)(Be, {
                  variant: `color`,
                  linesAdded: i.totalAdditions,
                  linesRemoved: i.totalDeletions,
                }),
        })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
function or(e) {
  let t = (0, W.c)(19),
    {
      children: n,
      Icon: r,
      disabled: i,
      loading: a,
      tooltipContent: o,
      value: s,
      onSelect: c,
    } = e,
    l;
  t[0] !== r || t[1] !== a
    ? ((l = a
        ? (0, q.jsx)(be, { className: `icon-xs shrink-0` })
        : (0, q.jsx)(r, { className: `icon-xs shrink-0` })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === n
    ? (u = t[4])
    : ((u = (0, q.jsx)(`span`, { className: `truncate`, children: n })),
      (t[3] = n),
      (t[4] = u));
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, q.jsx)(`span`, {
        className: `ml-auto shrink-0 opacity-80`,
        children: (0, q.jsx)(I, { keysLabel: V(`CmdOrCtrl+Enter`) }),
      })),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] !== l || t[7] !== u
    ? ((f = (0, q.jsxs)(`span`, {
        className: `flex w-full min-w-0 items-center gap-2`,
        children: [l, u, d],
      })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== i || t[10] !== c || t[11] !== f || t[12] !== s
    ? ((p = (0, q.jsx)(Re.Item, {
        disabled: i,
        value: s,
        onSelect: c,
        children: f,
      })),
      (t[9] = i),
      (t[10] = c),
      (t[11] = f),
      (t[12] = s),
      (t[13] = p))
    : (p = t[13]);
  let m = p;
  if (!i || o == null) return m;
  let h;
  t[14] === m
    ? (h = t[15])
    : ((h = (0, q.jsx)(`div`, { children: m })), (t[14] = m), (t[15] = h));
  let g;
  return (
    t[16] !== h || t[17] !== o
      ? ((g = (0, q.jsx)(_e, { tooltipContent: o, children: h })),
        (t[16] = h),
        (t[17] = o),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
function sr(e) {
  let t = (0, W.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ children: n, className: r, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a;
  t[4] === r ? (a = t[5]) : ((a = S(`gap-3`, r)), (t[4] = r), (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, q.jsx)(ke, { ...i, className: a, children: n })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function cr(e) {
  let t = (0, W.c)(13),
    { icon: n, isRefreshing: r, iconBackgroundTone: i, className: a } = e,
    o = r === void 0 ? !1 : r,
    s = i === void 0 ? `neutral` : i,
    c = `bg-token-editor-background`;
  (s === `success` && (c = `bg-token-charts-green/20`),
    s === `failure` && (c = `bg-token-charts-red/10`));
  let l;
  t[0] === a
    ? (l = t[1])
    : ((l = S(`flex items-start justify-between`, a)), (t[0] = a), (t[1] = l));
  let u;
  t[2] === c
    ? (u = t[3])
    : ((u = S(`flex h-9 w-9 items-center justify-center rounded-xl`, c)),
      (t[2] = c),
      (t[3] = u));
  let d;
  t[4] !== n || t[5] !== u
    ? ((d = (0, q.jsx)(`span`, { className: u, children: n })),
      (t[4] = n),
      (t[5] = u),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === o
    ? (f = t[8])
    : ((f = o
        ? (0, q.jsx)(be, {
            className: `icon-xs mt-0.5 text-token-description-foreground`,
          })
        : null),
      (t[7] = o),
      (t[8] = f));
  let p;
  return (
    t[9] !== l || t[10] !== d || t[11] !== f
      ? ((p = (0, q.jsxs)(`div`, { className: l, children: [d, f] })),
        (t[9] = l),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function lr(e) {
  let t = (0, W.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = S(`text-token-foreground heading-dialog font-semibold`, r)),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, q.jsx)(`div`, { className: i, children: n })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function ur(e) {
  let t = (0, W.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = S(`text-token-description-foreground flex flex-col gap-3`, r)),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, q.jsx)(`div`, { className: i, children: n })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function dr(e) {
  let t = (0, W.c)(18),
    { left: n, right: r, className: i } = e,
    a,
    o,
    s,
    c,
    l;
  if (t[0] !== i || t[1] !== n || t[2] !== r) {
    let e = (t, n) => {
        if (!tt.isValidElement(t)) return t;
        if (t.type === ye) {
          let e = t;
          return e.props.size == null ? tt.cloneElement(e, { size: n }) : e;
        }
        if (t.props.children == null) return t;
        let r = !1,
          i = tt.Children.map(t.props.children, (t) => {
            let i = e(t, n);
            return (i !== t && (r = !0), i);
          });
        if (!r) return t;
        let a = i;
        return (
          i != null && i.length === 1 && ([a] = i),
          tt.cloneElement(t, { children: a })
        );
      },
      u = (t) => {
        let i = e(n, t),
          a = e(r, t);
        return (0, q.jsxs)(q.Fragment, { children: [i ?? null, a] });
      };
    (t[8] === i
      ? (c = t[9])
      : ((c = S(`flex flex-1 items-center justify-between gap-2`, i)),
        (t[8] = i),
        (t[9] = c)),
      (l = (0, q.jsx)(Te, { electron: !0, children: u(`medium`) })),
      (a = Te),
      (o = !0),
      (s = u(`toolbar`)),
      (t[0] = i),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l));
  } else ((a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]));
  let u;
  t[10] !== a || t[11] !== o || t[12] !== s
    ? ((u = (0, q.jsx)(a, { extension: o, children: s })),
      (t[10] = a),
      (t[11] = o),
      (t[12] = s),
      (t[13] = u))
    : (u = t[13]);
  let d;
  return (
    t[14] !== c || t[15] !== l || t[16] !== u
      ? ((d = (0, q.jsxs)(`div`, { className: c, children: [l, u] })),
        (t[14] = c),
        (t[15] = l),
        (t[16] = u),
        (t[17] = d))
      : (d = t[17]),
    d
  );
}
function fr(e) {
  let t = (0, W.c)(15),
    { left: n, label: r, right: i, className: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = S(`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6`, a)),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, q.jsx)(`span`, {
        className: `flex h-4 w-4 flex-shrink-0 items-center justify-center`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = (0, q.jsx)(`span`, { className: `min-w-0`, children: r })),
      (t[4] = r),
      (t[5] = c));
  let l;
  t[6] !== s || t[7] !== c
    ? ((l = (0, q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [s, c],
      })),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === i
    ? (u = t[10])
    : ((u = i ?? (0, q.jsx)(`span`, {})), (t[9] = i), (t[10] = u));
  let d;
  return (
    t[11] !== o || t[12] !== l || t[13] !== u
      ? ((d = (0, q.jsxs)(`div`, { className: o, children: [l, u] })),
        (t[11] = o),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
function pr(e) {
  let t = (0, W.c)(16),
    { left: n, label: r, value: i, valueClassName: a, className: o } = e,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = S(`grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-6`, o)),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, q.jsx)(`span`, {
        className: `flex h-4 w-4 flex-shrink-0 items-center justify-center`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = c));
  let l;
  t[4] !== r || t[5] !== c
    ? ((l = (0, q.jsxs)(`span`, {
        className: `flex items-center gap-2 whitespace-nowrap`,
        children: [c, r],
      })),
      (t[4] = r),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === a
    ? (u = t[8])
    : ((u = S(`min-w-0 truncate text-right`, a)), (t[7] = a), (t[8] = u));
  let d;
  t[9] !== u || t[10] !== i
    ? ((d = (0, q.jsx)(`div`, { className: u, children: i })),
      (t[9] = u),
      (t[10] = i),
      (t[11] = d))
    : (d = t[11]);
  let f;
  return (
    t[12] !== s || t[13] !== l || t[14] !== d
      ? ((f = (0, q.jsxs)(`div`, { className: s, children: [l, d] })),
        (t[12] = s),
        (t[13] = l),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function mr(e) {
  let t = (0, W.c)(8),
    { children: n, ariaLabel: r, onClick: i, disabled: a, className: o } = e,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = S(`rounded-lg p-2`, o)), (t[0] = o), (t[1] = s));
  let c;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a || t[5] !== i || t[6] !== s
      ? ((c = (0, q.jsx)(ye, {
          color: `secondary`,
          size: `icon`,
          "aria-label": r,
          disabled: a,
          className: s,
          onClick: i,
          children: n,
        })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = i),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function hr(e) {
  let t = (0, W.c)(19),
    { file: n, workspaceRoot: r } = e,
    i,
    a;
  if (t[0] !== n.path || t[1] !== r) {
    let e = h(n.path, r),
      o = e.split(`/`);
    ((i = o.pop() ?? e),
      (a = o.join(`/`)),
      (t[0] = n.path),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  } else ((i = t[2]), (a = t[3]));
  let o = a,
    s = n.additions ?? 0,
    c = n.deletions ?? 0,
    l = n.additions != null || n.deletions != null,
    u;
  t[4] === i
    ? (u = t[5])
    : ((u = (0, q.jsx)(`span`, {
        className: `flex-shrink-0 font-medium text-token-foreground`,
        children: i,
      })),
      (t[4] = i),
      (t[5] = u));
  let d;
  t[6] === o
    ? (d = t[7])
    : ((d =
        o.length > 0
          ? (0, q.jsx)(`span`, {
              className: `min-w-0 truncate text-token-description-foreground`,
              children: o,
            })
          : null),
      (t[6] = o),
      (t[7] = d));
  let f;
  t[8] !== u || t[9] !== d
    ? ((f = (0, q.jsxs)(`div`, {
        className: `flex min-w-0 items-baseline gap-2 whitespace-nowrap`,
        children: [u, d],
      })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== s || t[12] !== c || t[13] !== l
    ? ((p = l
        ? (0, q.jsx)(Be, { variant: `color`, linesAdded: s, linesRemoved: c })
        : (0, q.jsx)(`span`, {})),
      (t[11] = s),
      (t[12] = c),
      (t[13] = l),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== n.path || t[16] !== f || t[17] !== p
      ? ((m = (0, q.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6`,
          title: n.path,
          children: [f, p],
        })),
        (t[15] = n.path),
        (t[16] = f),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
function gr(e) {
  let t = (0, W.c)(15),
    { title: n, files: r, workspaceRoot: i, className: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = S(`flex flex-col gap-2`, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, q.jsx)(`div`, {
        className: `text-token-description-foreground`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  if (t[4] !== r || t[5] !== i) {
    let e;
    (t[7] === i
      ? (e = t[8])
      : ((e = (e) => (0, q.jsx)(hr, { file: e, workspaceRoot: i }, e.path)),
        (t[7] = i),
        (t[8] = e)),
      (c = r.map(e)),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c));
  } else c = t[6];
  let l;
  t[9] === c
    ? (l = t[10])
    : ((l = (0, q.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: c,
      })),
      (t[9] = c),
      (t[10] = l));
  let u;
  return (
    t[11] !== o || t[12] !== s || t[13] !== l
      ? ((u = (0, q.jsxs)(`div`, { className: o, children: [s, l] })),
        (t[11] = o),
        (t[12] = s),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function _r(e) {
  let t = (0, W.c)(12),
    { expanded: n, children: r, className: i, scrollClassName: a } = e,
    o = n ? `open` : `collapsed`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = {
        open: { height: `auto`, opacity: 1 },
        collapsed: { height: 0, opacity: 0 },
      }),
      (t[0] = s))
    : (s = t[0]);
  let c, l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { duration: 0.25, ease: [0.16, 1, 0.3, 1] }),
      (l = { overflow: `hidden` }),
      (t[1] = c),
      (t[2] = l))
    : ((c = t[1]), (l = t[2]));
  let u;
  t[3] === a
    ? (u = t[4])
    : ((u = S(
        `vertical-scroll-fade-mask max-h-64 overflow-y-auto [--edge-fade-distance:2rem]`,
        a,
      )),
      (t[3] = a),
      (t[4] = u));
  let d;
  t[5] !== r || t[6] !== u
    ? ((d = (0, q.jsx)(`div`, { className: u, children: r })),
      (t[5] = r),
      (t[6] = u),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== i || t[9] !== o || t[10] !== d
      ? ((f = (0, q.jsx)(xe.div, {
          initial: !1,
          animate: o,
          variants: s,
          transition: c,
          style: l,
          className: i,
          children: d,
        })),
        (t[8] = i),
        (t[9] = o),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var vr = {
  Root: sr,
  Header: cr,
  Title: lr,
  RowContainer: ur,
  Footer: dr,
  Row: fr,
  KeyValueRow: pr,
  IconButton: mr,
  FileRow: hr,
  FileSection: gr,
  Expanded: _r,
};
function yr(e) {
  let t = (0, W.c)(6),
    { showSetPrefix: n } = e,
    r = n === void 0 ? !0 : n,
    i = de(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, q.jsx)(`span`, {
        className: `text-sm font-medium text-token-foreground`,
        children: (0, q.jsx)(D, {
          id: `localConversation.syncSetup.branchName`,
          defaultMessage: `Branch name`,
          description: `Title for the branch name input in the sync setup modal`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== i || t[2] !== r
    ? ((o = r
        ? (0, q.jsx)(`button`, {
            type: `button`,
            className: `text-sm text-token-description-foreground hover:text-token-foreground`,
            onClick: () => {
              i(`/settings/git-settings`);
            },
            children: (0, q.jsx)(D, {
              id: `localConversation.syncSetup.setPrefix`,
              defaultMessage: `Set prefix`,
              description: `Label for branch prefix configuration`,
            }),
          })
        : null),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o
      ? (s = t[5])
      : ((s = (0, q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [a, o],
        })),
        (t[4] = o),
        (t[5] = s)),
    s
  );
}
function br(e) {
  let t = (0, W.c)(52),
    {
      branches: n,
      selectedBranch: r,
      disabled: i,
      isError: a,
      isLoading: o,
      isSearchError: s,
      isSearchLoading: c,
      onClose: l,
      onRetry: u,
      onRetrySearch: d,
      onSearchQueryChange: f,
      onSelectBranch: p,
      renderBranchSubText: m,
      searchedBranches: h,
      searchQuery: g,
    } = e,
    _ = i === void 0 ? !1 : i,
    v = s === void 0 ? !1 : s,
    y = c === void 0 ? !1 : c,
    b = ee(),
    [x, S] = (0, tt.useState)(``),
    C = g ?? x,
    w,
    T,
    E,
    O;
  if (
    t[0] !== n ||
    t[1] !== _ ||
    t[2] !== a ||
    t[3] !== o ||
    t[4] !== v ||
    t[5] !== y ||
    t[6] !== u ||
    t[7] !== d ||
    t[8] !== p ||
    t[9] !== m ||
    t[10] !== C ||
    t[11] !== h ||
    t[12] !== r
  ) {
    let e = C.trim().toLowerCase();
    ((E = e.length > 0),
      (T =
        n == null
          ? void 0
          : E
            ? (h ?? n.filter((t) => t.toLowerCase().includes(e)))
            : n),
      (O = E ? y : o));
    let i = E ? v : a,
      s = E ? d : u;
    if (O) {
      let e;
      (t[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(H.Item, {
            disabled: !0,
            children: (0, q.jsxs)(`span`, {
              className: `inline-flex items-center gap-2`,
              children: [
                (0, q.jsx)(be, { className: `icon-xxs` }),
                (0, q.jsx)(D, {
                  id: `localConversation.syncSetup.branchesLoading`,
                  defaultMessage: `Loading branches…`,
                  description: `Label shown while loading branches`,
                }),
              ],
            }),
          })),
          (t[17] = e))
        : (e = t[17]),
        (w = e));
    } else if (i) {
      let e;
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(H.SectionLabel, {
            children: (0, q.jsx)(D, {
              id: `composer.reviewMode.branches.error`,
              defaultMessage: `Unable to load branches`,
              description: `Error message when branch list could not be loaded`,
            }),
          })),
          (t[18] = e))
        : (e = t[18]);
      let n;
      t[19] === s
        ? (n = t[20])
        : ((n =
            s == null
              ? null
              : (0, q.jsx)(H.Item, {
                  onSelect: () => {
                    s();
                  },
                  children: (0, q.jsx)(D, {
                    id: `composer.reviewMode.branches.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button for branch list error`,
                  }),
                })),
          (t[19] = s),
          (t[20] = n));
      let r;
      (t[21] === n
        ? (r = t[22])
        : ((r = (0, q.jsxs)(H.Section, {
            className: `flex flex-col gap-1`,
            children: [e, n],
          })),
          (t[21] = n),
          (t[22] = r)),
        (w = r));
    } else if (T == null || T.length === 0) {
      let e;
      (t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, q.jsx)(H.Item, {
            disabled: !0,
            children: (0, q.jsx)(D, {
              id: `localConversation.syncSetup.noBranches`,
              defaultMessage: `No branches found`,
              description: `Label shown when no branches are available`,
            }),
          })),
          (t[23] = e))
        : (e = t[23]),
        (w = e));
    } else {
      let e;
      (t[24] !== _ || t[25] !== p || t[26] !== m || t[27] !== r
        ? ((e = (e) =>
            (0, q.jsx)(
              xr,
              {
                branch: e,
                disabled: _,
                selected: e === r,
                subText: m?.(e) ?? null,
                onSelect: () => p(e),
              },
              e,
            )),
          (t[24] = _),
          (t[25] = p),
          (t[26] = m),
          (t[27] = r),
          (t[28] = e))
        : (e = t[28]),
        (w = (0, q.jsx)(H.Section, {
          className: `flex flex-col`,
          children: T.map(e),
        })));
    }
    ((t[0] = n),
      (t[1] = _),
      (t[2] = a),
      (t[3] = o),
      (t[4] = v),
      (t[5] = y),
      (t[6] = u),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m),
      (t[10] = C),
      (t[11] = h),
      (t[12] = r),
      (t[13] = w),
      (t[14] = T),
      (t[15] = E),
      (t[16] = O));
  } else ((w = t[13]), (T = t[14]), (E = t[15]), (O = t[16]));
  let te;
  t[29] === b
    ? (te = t[30])
    : ((te = b.formatMessage({
        id: `codex.composer.searchBranches`,
        defaultMessage: `Search branches`,
        description: `Placeholder for the branch search input`,
      })),
      (t[29] = b),
      (t[30] = te));
  let k;
  t[31] === f
    ? (k = t[32])
    : ((k = (e) => {
        let t = e.currentTarget.value;
        (S(t), f?.(t));
      }),
      (t[31] = f),
      (t[32] = k));
  let ne;
  t[33] !== _ ||
  t[34] !== T ||
  t[35] !== E ||
  t[36] !== l ||
  t[37] !== p ||
  t[38] !== r ||
  t[39] !== O
    ? ((ne = (e) => {
        if (e.key !== `Enter`) return;
        if ((e.preventDefault(), !E)) {
          l?.();
          return;
        }
        if (_ || O || T == null) return;
        let t = T.find((e) => e !== r) ?? T[0];
        t != null && p(t);
      }),
      (t[33] = _),
      (t[34] = T),
      (t[35] = E),
      (t[36] = l),
      (t[37] = p),
      (t[38] = r),
      (t[39] = O),
      (t[40] = ne))
    : (ne = t[40]);
  let A;
  t[41] !== C || t[42] !== te || t[43] !== k || t[44] !== ne
    ? ((A = (0, q.jsx)(H.SearchInput, {
        autoFocus: !1,
        placeholder: te,
        value: C,
        onChange: k,
        onKeyDown: ne,
      })),
      (t[41] = C),
      (t[42] = te),
      (t[43] = k),
      (t[44] = ne),
      (t[45] = A))
    : (A = t[45]);
  let re;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, q.jsx)(H.SectionLabel, {
        children: (0, q.jsx)(D, {
          id: `composer.remote.branchesSectionHeading`,
          defaultMessage: `Branches`,
          description: `Section heading for remote branch search results`,
        }),
      })),
      (t[46] = re))
    : (re = t[46]);
  let j;
  t[47] === w
    ? (j = t[48])
    : ((j = (0, q.jsxs)(`div`, {
        className: `vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto`,
        children: [re, w],
      })),
      (t[47] = w),
      (t[48] = j));
  let ie;
  return (
    t[49] !== A || t[50] !== j
      ? ((ie = (0, q.jsxs)(`div`, {
          className: `flex w-72 flex-col gap-1.5 overflow-hidden`,
          children: [A, j],
        })),
        (t[49] = A),
        (t[50] = j),
        (t[51] = ie))
      : (ie = t[51]),
    ie
  );
}
function xr(e) {
  let t = (0, W.c)(6),
    { branch: n, disabled: r, onSelect: i, selected: a, subText: o } = e,
    s = a ? Ae : void 0,
    c;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o || t[4] !== s
      ? ((c = (0, q.jsx)(H.Item, {
          LeftIcon: fe,
          tooltipText: n,
          tooltipSide: `top`,
          tooltipAlign: `start`,
          tooltipOpenWhen: `trigger-overflows`,
          disabled: r,
          RightIcon: s,
          subTextAllowWrap: !0,
          SubText: o,
          onSelect: i,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
export {
  en as A,
  Tt as B,
  Zt as C,
  Gt as D,
  Wt as E,
  jt as F,
  it as G,
  pt as H,
  At as I,
  Je as J,
  nt as K,
  Y as L,
  Pt as M,
  Nt as N,
  nn as O,
  X as P,
  Mt as R,
  Xt as S,
  qt as T,
  rt as U,
  mt as V,
  ot as W,
  Ke as X,
  qe as Y,
  Ut as _,
  tr as a,
  $t as b,
  Hn as c,
  Ft as d,
  rn as f,
  Ht as g,
  Vt as h,
  rr as i,
  Z as j,
  tn as k,
  Dn as l,
  Bt as m,
  yr as n,
  Qn as o,
  zt as p,
  K as q,
  vr as r,
  Zn as s,
  br as t,
  Cn as u,
  Kt as v,
  Jt as w,
  Yt as x,
  Qt as y,
  xt as z,
};
//# sourceMappingURL=git-branch-picker-dropdown-content-116YOJSU.js.map
