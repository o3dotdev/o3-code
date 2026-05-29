import {
  $s as e,
  ec as t,
  qs as n,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { t as r } from "./v4.js";
import { bt as i, wt as a } from "./setting-storage.js";
var o = a(),
  s = i({ activeOperationId: null, operations: [] });
function c(e) {
  return {
    ...e,
    status: `queued`,
    targetConversationId: null,
    steps: p(e.stepIds),
    errorMessage: null,
    warningMessage: null,
    execOutput: null,
    hasUnseenTerminalState: !1,
  };
}
function l() {
  return t(s);
}
function u(e) {
  let { operations: t } = l();
  if (e == null) return null;
  for (let n = t.length - 1; n >= 0; --n) {
    let r = t[n];
    if (r.sourceConversationId === e || r.targetConversationId === e) return r;
  }
  return null;
}
function d() {
  let t = (0, o.c)(19),
    [, i] = e(s),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (e) => {
        let t = {
          id: r(),
          direction: `to-worktree`,
          status: `queued`,
          sourceConversationId: e.sourceConversationId,
          targetConversationId: null,
          sourceBranch: e.sourceBranch,
          localBranch: e.localBranch,
          worktreeBranch: e.worktreeBranch,
          stepIds: e.stepIds,
          steps: p(e.stepIds),
          request: e.request,
          errorMessage: null,
          warningMessage: null,
          execOutput: null,
          hasUnseenTerminalState: !1,
          composerViewState: e.composerViewState,
        };
        return (
          i((e) => ({
            activeOperationId: null,
            operations: [...e.operations, t],
          })),
          t
        );
      }),
      (t[0] = i),
      (t[1] = a));
  let c = a,
    l;
  t[2] === i
    ? (l = t[3])
    : ((l = (e) => {
        let t = {
          id: r(),
          direction: `to-local`,
          status: `queued`,
          sourceConversationId: e.sourceConversationId,
          targetConversationId: null,
          sourceBranch: e.sourceBranch,
          localBranch: e.localBranch,
          worktreeBranch: null,
          stepIds: e.stepIds,
          steps: p(e.stepIds),
          request: e.request,
          errorMessage: null,
          warningMessage: null,
          execOutput: null,
          hasUnseenTerminalState: !1,
          composerViewState: e.composerViewState,
        };
        return (
          i((e) => ({
            activeOperationId: null,
            operations: [...e.operations, t],
          })),
          t
        );
      }),
      (t[2] = i),
      (t[3] = l));
  let u = l,
    d;
  t[4] === i
    ? (d = t[5])
    : ((d = (e, t) => {
        i((r) => ({
          ...r,
          operations: r.operations.map((r) => (r.id === e ? n(r, t) : r)),
        }));
      }),
      (t[4] = i),
      (t[5] = d));
  let m = d,
    h;
  t[6] === i
    ? (h = t[7])
    : ((h = (e) => {
        i((t) => ({
          activeOperationId:
            t.activeOperationId === e ? null : t.activeOperationId,
          operations: t.operations.filter((t) => t.id !== e),
        }));
      }),
      (t[6] = i),
      (t[7] = h));
  let g = h,
    _;
  t[8] === i
    ? (_ = t[9])
    : ((_ = (e) => {
        i((t) => ({
          activeOperationId: e,
          operations: t.operations.map((t) =>
            t.id === e ? { ...t, hasUnseenTerminalState: !1 } : t,
          ),
        }));
      }),
      (t[8] = i),
      (t[9] = _));
  let v = _,
    y;
  t[10] === i
    ? (y = t[11])
    : ((y = () => {
        i(f);
      }),
      (t[10] = i),
      (t[11] = y));
  let b = y,
    x;
  return (
    t[12] !== u ||
    t[13] !== c ||
    t[14] !== b ||
    t[15] !== v ||
    t[16] !== g ||
    t[17] !== m
      ? ((x = {
          addToWorktreeOperation: c,
          addToLocalOperation: u,
          updateOperation: m,
          removeOperation: g,
          openOperation: v,
          closeActiveOperation: b,
        }),
        (t[12] = u),
        (t[13] = c),
        (t[14] = b),
        (t[15] = v),
        (t[16] = g),
        (t[17] = m),
        (t[18] = x))
      : (x = t[18]),
    x
  );
}
function f(e) {
  return { ...e, activeOperationId: null };
}
function p(e) {
  return e.map((e) => ({ id: e, status: `pending` }));
}
export { l as i, d as n, u as r, c as t };
//# sourceMappingURL=thread-handoff-store.js.map
