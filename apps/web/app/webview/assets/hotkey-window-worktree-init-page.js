import { Y as e, nt as t, tt as n } from "./src-BLHmAhbF.js";
import "./app-server-manager-signals.js";
import { t as r } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./marked.esm.js";
import { H as i, p as a, xt as o, y as s } from "./setting-storage.js";
import { m as c, r as l } from "./chunk-LFPYN7LY.js";
import "./known-app-icon.js";
import "./branch.js";
import "./github-mark.js";
import "./google-drive.js";
import "./notion.js";
import "./product-logger.js";
import "./statsig.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./codex-api.js";
import "./_baseOrderBy.js";
import "./parse-owner-repo.js";
import "./use-debounced-value.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip.js";
import "./build-start-conversation-params.js";
import "./route-scope.js";
import "./prompt-text.js";
import "./mention-item.js";
import "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./open-workspace-file.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./proxy.js";
import "./apps.js";
import "./x.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled.js";
import "./use-plugins.js";
import "./apps-queries.js";
import "./startCase.js";
import "./uniq.js";
import "./terminal.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./dialog-layout.js";
import "./run-command.js";
import "./initial-route-atom.js";
import "./use-stable-callback.js";
import "./use-skills.js";
import "./modal-controller-state-.js";
import "./open-project-setup-dialog.js";
import "./use-resize-observer.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./arrow-left.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./use-start-new-conversation-B.js";
import "./_defineProperty.js";
import "./bug.js";
import "./skills.js";
import "./globe.js";
import "./set-pinned-thread.js";
import "./chevron.js";
import "./folder.js";
import "./external-markdown-link.js";
import "./use-native-apps.electron.js";
import "./get-file-icon.js";
import "./code.js";
import "./json-DAjHKBV7.js";
import "./image-square.js";
import "./notebook.js";
import "./settings.cog.js";
import "./mcp.js";
import "./chrome.js";
import "./codex.js";
import "./openai-blossom.js";
import "./pencil.js";
import "./filesystem-media-src.js";
import "./inline-mentions.js";
import "./tailwind-styled-components.esm.js";
import "./copy.js";
import "./minus-D.js";
import "./plus.js";
import "./image-preview-dialog.js";
import "./pull-request-open.js";
import "./use-is-background-subagents-enabled.js";
import "./pending-worktree-store.js";
import "./sortBy.js";
import "./prompt-editor.js";
/* empty css                    */ import "./attachment-remove-button.js";
import "./mention-metadata-syncer.js";
import "./use-enter-behavior.js";
import "./use-at-mention-sections.js";
import "./use-composer-controller.js";
import "./format-skill-scope.js";
import "./list-navigation.js";
import "./use-workspace-file-search.js";
import "./anchored-autocomplete-overlay.js";
import "./use-autocomplete-overlay-placement.js";
import "./use-measured-text-collapse.js";
import "./thread-layout.js";
import "./hooks.js";
import "./pending-worktree-conversation.js";
import "./reply.js";
import { n as u } from "./use-hotkey-window-detail-layout.js";
import "./thread-scroll-layout.js";
import "./user-message-attachments.js";
import { t as d } from "./worktree-init-v2-page-DC0RDxaQ.js";
var f = o(),
  p = r();
function m() {
  let r = (0, f.c)(8),
    { pendingWorktreeId: o } = c(),
    { data: s } = a(`hotkey-window-hotkey-state`),
    m = s == null || s.configuredHotkey != null,
    g;
  r[0] === m ? (g = r[1]) : ((g = t(m)), (r[0] = m), (r[1] = g));
  let _ = g,
    v;
  if (
    (r[2] === o
      ? (v = r[3])
      : ((v =
          o == null
            ? null
            : {
                title: (0, p.jsx)(`span`, {
                  className: `max-w-full truncate`,
                  children: (0, p.jsx)(i, {
                    id: `worktreeInitV2.title`,
                    defaultMessage: `Creating worktree`,
                    description: `Title for the worktree init v2 page`,
                  }),
                }),
                mainWindowPath: n(o),
              }),
        (r[2] = o),
        (r[3] = v)),
    u(v),
    !o)
  ) {
    let e;
    return (
      r[4] === _
        ? (e = r[5])
        : ((e = (0, p.jsx)(l, { to: _, replace: !0 })), (r[4] = _), (r[5] = e)),
      e
    );
  }
  let y;
  return (
    r[6] === _
      ? (y = r[7])
      : ((y = (0, p.jsx)(d, {
          homePath: _,
          conversationPathBuilder: e,
          onConversationReady: h,
        })),
        (r[6] = _),
        (r[7] = y)),
    y
  );
}
function h(t) {
  s.dispatchMessage(`open-in-hotkey-window`, { path: e(t) });
}
export { m as HotkeyWindowWorktreeInitPage };
//# sourceMappingURL=hotkey-window-worktree-init-page.js.map
