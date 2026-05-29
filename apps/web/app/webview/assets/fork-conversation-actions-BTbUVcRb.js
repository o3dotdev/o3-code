import {
  R as e,
  Xs as t,
  j as n,
  tt as r,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { C as i, l as a } from "./setting-storage.js";
import { r as o } from "./toast-signal.js";
import { t as s } from "./app-intl-signal.js";
import { r as c } from "./thread-actions.js";
import { n as l } from "./local-environment-selection-DyGLYKsj.js";
async function u(a, { sourceConversationId: l, sourceWorkspaceRoot: u }) {
  if (l == null || a.get(n, l)) return null;
  try {
    let n = a.get(r, l),
      i = a.get(e, l);
    return await t(`fork-conversation-from-latest`, {
      hostId: n,
      conversationId: l,
      cwd: u ?? void 0,
      workspaceRoots: u == null ? void 0 : [u],
      collaborationMode: i,
    });
  } catch (e) {
    return (
      i.error(`Error forking local task`, {
        safe: {},
        sensitive: { error: e },
      }),
      a.get(o).danger(a.get(s).formatMessage(c.forkThreadError)),
      null
    );
  }
}
async function d(
  t,
  {
    createPendingWorktree: i,
    localEnvironmentSelectionsByWorkspace: l,
    sourceConversationId: u,
    sourceWorkspaceRoot: d,
  },
) {
  if (u == null || d == null || t.get(n, u)) return null;
  let p = t.get(r, u),
    m = await a(`git-origins`, {
      params: { dirs: [d], hostId: p },
      source: `fork_conversation_actions`,
    });
  if (
    (m.origins.find((e) => e.dir === d)?.root ?? m.origins[0]?.root ?? null) ==
    null
  )
    return (
      t.get(o).danger(t.get(s).formatMessage(c.forkThreadRequiresGitRepo)),
      null
    );
  let h = await f({
      hostId: p,
      localEnvironmentSelectionsByWorkspace: l,
      sourceWorkspaceRoot: d,
    }),
    g = t.get(s),
    _ = t.get(e, u);
  return i({
    hostId: p,
    label: g.formatMessage(c.forkPendingWorktreeTitle),
    sourceWorkspaceRoot: d,
    startingState: { type: `working-tree` },
    localEnvironmentConfigPath: h,
    launchMode: `fork-conversation`,
    prompt: g.formatMessage(c.forkPendingWorktreePrompt),
    startConversationParamsInput: null,
    sourceConversationId: u,
    sourceCollaborationMode: _,
    targetTurnId: null,
  });
}
async function f({
  hostId: e,
  localEnvironmentSelectionsByWorkspace: t,
  sourceWorkspaceRoot: n,
}) {
  let r = e ?? `local`;
  try {
    let { environments: e } = await a(`local-environments`, {
      params: { hostId: r, workspaceRoot: n },
    });
    return l({
      canValidateSelection: !0,
      environments: e,
      hostId: r,
      selectionsByWorkspace: t,
      workspaceRoot: n,
    }).resolvedConfigPath;
  } catch {
    return l({
      canValidateSelection: !1,
      environments: [],
      hostId: r,
      selectionsByWorkspace: t,
      workspaceRoot: n,
    }).resolvedConfigPath;
  }
}
export { d as n, u as t };
//# sourceMappingURL=fork-conversation-actions-BTbUVcRb.js.map
