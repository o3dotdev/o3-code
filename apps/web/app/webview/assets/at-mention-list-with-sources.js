import "./src-BLHmAhbF.js";
import "./app-server-manager-signals.js";
import { t as e } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./marked.esm.js";
import { xt as t } from "./setting-storage.js";
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
import "./_baseOrderBy.js";
import "./use-debounced-value.js";
import "./window-zoom-context.js";
import "./mention-item.js";
import "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./mime-types.js";
import "./apps.js";
import "./x.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled.js";
import "./use-plugins.js";
import "./startCase.js";
import "./terminal.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./dialog-layout.js";
import "./run-command.js";
import "./use-stable-callback.js";
import "./use-skills.js";
import "./modal-controller-state-.js";
import "./open-project-setup-dialog.js";
import "./_defineProperty.js";
import "./bug.js";
import "./skills.js";
import "./folder.js";
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
import "./use-is-background-subagents-enabled.js";
import "./sortBy.js";
import { r as n, t as r } from "./use-at-mention-sections.js";
import "./list-navigation.js";
import "./use-workspace-file-search.js";
var i = t(),
  a = e();
function o(e) {
  let t = (0, i.c)(16),
    {
      backgroundAgents: o,
      excludedAgentConversationIds: s,
      hostId: c,
      onAddContext: l,
      onUpdateSelectedMention: u,
      onRequestClose: d,
      isHomeMenu: f,
      pluginHostId: p,
      pluginRoots: m,
      skillRoots: h,
      query: g,
      roots: _,
    } = e,
    v = f === void 0 ? !1 : f,
    y;
  t[0] !== o ||
  t[1] !== s ||
  t[2] !== c ||
  t[3] !== p ||
  t[4] !== m ||
  t[5] !== g ||
  t[6] !== _ ||
  t[7] !== h
    ? ((y = {
        backgroundAgents: o,
        excludedAgentConversationIds: s,
        hostId: c,
        pluginHostId: p,
        pluginRoots: m,
        skillRoots: h,
        query: g,
        roots: _,
      }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c),
      (t[3] = p),
      (t[4] = m),
      (t[5] = g),
      (t[6] = _),
      (t[7] = h),
      (t[8] = y))
    : (y = t[8]);
  let { sections: b } = r(y),
    x;
  return (
    t[9] !== v ||
    t[10] !== l ||
    t[11] !== d ||
    t[12] !== u ||
    t[13] !== g ||
    t[14] !== b
      ? ((x = (0, a.jsx)(n, {
          sections: b,
          onUpdateSelectedMention: u,
          onAddContext: l,
          onRequestClose: d,
          isHomeMenu: v,
          query: g,
        })),
        (t[9] = v),
        (t[10] = l),
        (t[11] = d),
        (t[12] = u),
        (t[13] = g),
        (t[14] = b),
        (t[15] = x))
      : (x = t[15]),
    x
  );
}
export { o as AtMentionListWithSources };
//# sourceMappingURL=at-mention-list-with-sources.js.map
