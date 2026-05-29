import { Bn as e, Yr as t } from "./src-C.js";
import { Xs as n } from "./app-server-manager-signals-DkRDRgNB.js";
import { C as r, l as i } from "./setting-storage.js";
import { t as a } from "./build-start-conversation-params-DHCgiUKY.js";
import { v as o } from "./browser-sidebar-open-source.js";
import { n as s } from "./set-pinned-thread-CqaOWPwd.js";
async function c({ entry: e, workspaceRoot: t }) {
  if (e.launchMode === `fork-conversation`)
    return e.targetTurnId == null
      ? n(`fork-conversation-from-latest`, {
          hostId: e.hostId,
          conversationId: e.sourceConversationId,
          cwd: t,
          workspaceRoots: [t],
          collaborationMode: e.sourceCollaborationMode,
        })
      : n(`fork-conversation-from-turn`, {
          conversationId: e.sourceConversationId,
          targetTurnId: e.targetTurnId,
          cwd: t,
          workspaceRoots: [t],
          collaborationMode: e.sourceCollaborationMode,
        });
  if (e.launchMode !== `start-conversation`)
    throw Error(`Unsupported launch mode: ${e.launchMode}`);
  return n(`start-conversation`, {
    hostId: e.hostId,
    ...a({ ...e.startConversationParamsInput, workspaceRoots: [t], cwd: t }),
    skipAutoTitleGeneration: e.initialThreadTitle != null,
  });
}
async function l({ entry: t, conversationId: a, hostConfig: o }) {
  if (t.worktreeGitRoot != null)
    try {
      await i(`worktree-set-owner-thread`, {
        params: {
          hostId: o.id,
          worktree: e(t.worktreeGitRoot),
          conversationId: a,
        },
      });
    } catch (e) {
      r.warning(
        `Worktree created and conversation started, but failed to set worktree owner metadata: {}`,
        { safe: {}, sensitive: { error: e } },
      );
    }
  if (t.isPinned)
    try {
      await s(a, !0, t.pinnedBeforeThreadId);
    } catch (e) {
      r.warning(
        `Worktree conversation started, but failed to set pinned metadata: {}`,
        { safe: {}, sensitive: { error: e } },
      );
    }
  t.launchMode === `start-conversation` &&
    t.threadGoalObjective != null &&
    (await n(`set-thread-goal`, {
      appendTranscriptItem: !1,
      conversationId: a,
      hostId: o.id,
      objective: t.threadGoalObjective,
    }));
  let c = (t.initialThreadTitle ?? (t.labelEdited ? t.label : ``)).trim();
  c.length !== 0 &&
    (await n(`set-thread-title`, { conversationId: a, title: c }));
}
function u(e, n) {
  e.browserTransferSourceConversationId != null &&
    o(n, {
      browserTabId: e.browserTransferSourceBrowserTabId ?? t(`${n}:legacy`),
      transferSourceBrowserTabId:
        e.browserTransferSourceBrowserTabId ??
        t(`${e.browserTransferSourceConversationId}:legacy`),
      transferSourceConversationId: e.browserTransferSourceConversationId,
    });
}
export { c as n, u as r, l as t };
//# sourceMappingURL=pending-worktree-conversation-DdUXOIat.js.map
