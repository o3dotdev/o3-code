import { Ct as e, mn as t } from "./src-C.js";
import {
  Xs as n,
  in as r,
  zt as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import {
  C as a,
  G as o,
  S as s,
  V as c,
  X as l,
  Z as u,
  wt as d,
} from "./setting-storage.js";
import { r as f } from "./toast-signal.js";
import { t as p } from "./pinned-threads-query-DYArLI-i.js";
import { n as m } from "./set-pinned-thread-CqaOWPwd.js";
import { t as h } from "./copy-to-clipboard-C2Mq2hN-.js";
async function g(t, n, a, o) {
  let s = t.query.snapshot(p),
    c = s.getData(),
    l =
      c == null
        ? null
        : {
            threadIds: a
              ? e({
                  threadIds: c.threadIds,
                  threadId: n,
                  beforeThreadId: o ?? null,
                })
              : c.threadIds.filter((e) => e !== n),
          };
  l != null && s.setData(l);
  let u = !1;
  try {
    (o === void 0 ? await m(n, a) : await m(n, a, o),
      (u = a),
      a && (await i(t, n)));
  } catch (e) {
    let t = s.getData();
    if (
      (l != null && t != null && r(t.threadIds, l.threadIds) && s.setData(c), u)
    )
      try {
        await m(n, !1);
      } catch (e) {
        v(e);
      }
    v(e);
  }
}
async function _(e, t, n) {
  await n;
  try {
    await m(t, !1);
  } catch (n) {
    try {
      await i(e, t);
    } catch (e) {
      v(e);
    }
    throw n;
  }
}
function v(e) {
  a.error(`Failed to update sidebar thread membership`, {
    safe: {},
    sensitive: { error: t(e) },
  });
}
var y = d(),
  b = c({
    archiveThreadError: {
      id: `sidebarElectron.archiveThreadError`,
      defaultMessage: `Failed to archive chat`,
      description: `Error message when archiving a local thread`,
    },
    interruptThreadError: {
      id: `sidebarElectron.interruptThreadError`,
      defaultMessage: `Failed to stop chat`,
      description: `Error message when stopping an in-progress local thread`,
    },
    renameThreadError: {
      id: `sidebarElectron.renameThreadError`,
      defaultMessage: `Failed to rename chat`,
      description: `Error message when renaming a local thread`,
    },
    copyWorkingDirectory: {
      id: `threadHeader.copyWorkingDirectory`,
      defaultMessage: `Copy working directory`,
      description: `Menu item to copy the current working directory`,
    },
    copyWorkingDirectorySuccess: {
      id: `threadHeader.copyWorkingDirectorySuccess`,
      defaultMessage: `Copied working directory`,
      description: `Toast shown after copying the current working directory to the clipboard`,
    },
    copyWorkingDirectoryError: {
      id: `threadHeader.copyWorkingDirectoryError`,
      defaultMessage: `Failed to copy working directory`,
      description: `Toast shown when copying the current working directory to the clipboard fails`,
    },
    copySessionId: {
      id: `threadHeader.copySessionId`,
      defaultMessage: `Copy session ID`,
      description: `Menu item to copy the current session ID`,
    },
    copyAppLink: {
      id: `threadHeader.copyAppLink`,
      defaultMessage: `Copy deeplink`,
      description: `Menu item to copy a deeplink to this thread`,
    },
    copyConversationMarkdown: {
      id: `threadHeader.copyConversationMarkdown`,
      defaultMessage: `Copy as Markdown`,
      description: `Menu item to copy the current conversation as Markdown`,
    },
    copyConversationMarkdownSuccess: {
      id: `threadHeader.copyConversationMarkdownSuccess`,
      defaultMessage: `Copied conversation as Markdown`,
      description: `Toast shown after copying the current conversation as Markdown to the clipboard`,
    },
    copyConversationMarkdownError: {
      id: `threadHeader.copyConversationMarkdownError`,
      defaultMessage: `Failed to copy conversation as Markdown`,
      description: `Toast shown when copying the current conversation as Markdown to the clipboard fails`,
    },
    openInNewWindow: {
      id: `threadHeader.openInNewWindow`,
      defaultMessage: `Open in new window`,
      description: `Menu item to open the current thread in a new window`,
    },
    moreActions: {
      id: `threadHeader.moreActions`,
      defaultMessage: `Chat actions`,
      description: `Aria label for thread actions dropdown`,
    },
    renameThread: {
      id: `sidebarElectron.renameThread`,
      defaultMessage: `Rename chat`,
      description: `Menu item to rename a local thread`,
    },
    archiveThread: {
      id: `sidebarElectron.archiveThread`,
      defaultMessage: `Archive chat`,
      description: `Menu item to archive a local thread`,
    },
    addAutomation: {
      id: `sidebarElectron.addAutomation`,
      defaultMessage: `Add automation…`,
      description: `Menu item to create a new heartbeat automation attached to a local thread`,
    },
    editAutomation: {
      id: `sidebarElectron.editAutomation`,
      defaultMessage: `Edit automation…`,
      description: `Menu item to edit the heartbeat automation attached to a local thread`,
    },
    markThreadUnread: {
      id: `sidebarElectron.markThreadUnread`,
      defaultMessage: `Mark as unread`,
      description: `Menu item to mark a local thread as unread`,
    },
    forkIntoLocal: {
      id: `threadHeader.forkIntoLocal`,
      defaultMessage: `Fork into local`,
      description: `Menu item to fork a local thread into the current workspace`,
    },
    forkIntoSameWorktree: {
      id: `threadHeader.forkIntoSameWorktree`,
      defaultMessage: `Fork into same worktree`,
      description: `Menu item to fork a worktree thread into the same worktree`,
    },
    forkIntoWorktree: {
      id: `threadHeader.forkIntoWorktree`,
      defaultMessage: `Fork into new worktree`,
      description: `Menu item to fork a local thread into a new worktree`,
    },
    forkThreadError: {
      id: `threadHeader.forkThreadError`,
      defaultMessage: `Failed to fork chat`,
      description: `Error message shown when forking a local thread fails`,
    },
    forkThreadRequiresGitRepo: {
      id: `threadHeader.forkThreadRequiresGitRepo`,
      defaultMessage: `Fork into new worktree requires a git repository`,
      description: `Error message shown when trying to fork into a worktree outside a git repository`,
    },
    forkPendingWorktreeTitle: {
      id: `threadHeader.forkPendingWorktreeTitle`,
      defaultMessage: `Forked conversation`,
      description: `Default pending worktree label when forking a conversation from a thread menu`,
    },
    forkPendingWorktreePrompt: {
      id: `threadHeader.forkPendingWorktreePrompt`,
      defaultMessage: `Fork this conversation into a new worktree.`,
      description: `Prompt text shown on the worktree init page for thread-menu fork actions`,
    },
  });
function x(e, t) {
  let n = (0, y.c)(16),
    r;
  n[0] === t
    ? (r = n[1])
    : ((r = t === void 0 ? {} : t), (n[0] = t), (n[1] = r));
  let { canPin: i } = r,
    a = i === void 0 ? !0 : i,
    o = l(s),
    { data: c } = u(p),
    d;
  n[2] === c?.threadIds
    ? (d = n[3])
    : ((d = c?.threadIds ?? []), (n[2] = c?.threadIds), (n[3] = d));
  let f = d,
    m;
  n[4] !== a || n[5] !== e || n[6] !== f
    ? ((m = a && e != null && f.includes(e)),
      (n[4] = a),
      (n[5] = e),
      (n[6] = f),
      (n[7] = m))
    : (m = n[7]);
  let h = m,
    _;
  n[8] !== a || n[9] !== e || n[10] !== h || n[11] !== o
    ? ((_ = () => {
        !a || e == null || g(o, e, !h);
      }),
      (n[8] = a),
      (n[9] = e),
      (n[10] = h),
      (n[11] = o),
      (n[12] = _))
    : (_ = n[12]);
  let v = _,
    b;
  return (
    n[13] !== h || n[14] !== v
      ? ((b = { isPinned: h, togglePin: v }),
        (n[13] = h),
        (n[14] = v),
        (n[15] = b))
      : (b = n[15]),
    b
  );
}
function S({ scope: e, cwd: t, intl: n }) {
  t &&
    h(t).then(
      () => {
        e.get(f).success(n.formatMessage(b.copyWorkingDirectorySuccess));
      },
      () => {
        e.get(f).danger(n.formatMessage(b.copyWorkingDirectoryError));
      },
    );
}
function C(e) {
  e && h(e);
}
function w(e) {
  e && h(`codex://threads/${e}`);
}
function T({ scope: e, getMarkdown: t, intl: n }) {
  (async () => {
    let r = await t();
    r == null ||
      r.trim().length === 0 ||
      (await h(r),
      e.get(f).success(n.formatMessage(b.copyConversationMarkdownSuccess)));
  })().catch(() => {
    e.get(f).danger(n.formatMessage(b.copyConversationMarkdownError));
  });
}
function E() {
  let e = (0, y.c)(17),
    t = l(s),
    r = o(),
    i,
    a;
  e[0] !== r || e[1] !== t
    ? ((i = (e) => {
        let { conversationId: i, onArchiveSuccess: a, onArchiveError: o } = e;
        n(`archive-conversation`, { conversationId: i })
          .then(() => {
            a?.();
          })
          .catch(() => {
            (o?.(), t.get(f).danger(r.formatMessage(b.archiveThreadError)));
          });
      }),
      (a = (e) => {
        let { conversationId: i } = e;
        n(`interrupt-conversation`, { conversationId: i }).catch(() => {
          t.get(f).danger(r.formatMessage(b.interruptThreadError));
        });
      }),
      (e[0] = r),
      (e[1] = t),
      (e[2] = i),
      (e[3] = a))
    : ((i = e[2]), (a = e[3]));
  let c, u;
  e[4] !== r || e[5] !== t
    ? ((c = (e) => {
        let { conversationId: i, title: a } = e;
        n(`set-thread-title`, { conversationId: i, title: a }).catch(() => {
          t.get(f).danger(r.formatMessage(b.renameThreadError));
        });
      }),
      (u = (e) => {
        S({ scope: t, cwd: e, intl: r });
      }),
      (e[4] = r),
      (e[5] = t),
      (e[6] = c),
      (e[7] = u))
    : ((c = e[6]), (u = e[7]));
  let d;
  e[8] !== r || e[9] !== t
    ? ((d = (e) => {
        T({ scope: t, getMarkdown: e, intl: r });
      }),
      (e[8] = r),
      (e[9] = t),
      (e[10] = d))
    : (d = e[10]);
  let p;
  return (
    e[11] !== i || e[12] !== a || e[13] !== c || e[14] !== u || e[15] !== d
      ? ((p = {
          archiveThread: i,
          interruptThread: a,
          markThreadAsUnread: D,
          renameThread: c,
          copyWorkingDirectory: u,
          copySessionId: C,
          copyAppLink: w,
          copyConversationMarkdown: d,
        }),
        (e[11] = i),
        (e[12] = a),
        (e[13] = c),
        (e[14] = u),
        (e[15] = d),
        (e[16] = p))
      : (p = e[16]),
    p
  );
}
function D(e) {
  let { conversationId: t } = e;
  n(`mark-conversation-as-unread`, { conversationId: t });
}
export { E as a, x as i, C as n, _ as o, b as r, g as s, w as t };
//# sourceMappingURL=thread-actions.js.map
