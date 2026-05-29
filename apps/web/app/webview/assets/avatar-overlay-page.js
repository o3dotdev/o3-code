import { s as e } from "./chunk-Bj-mKKzh.js";
import "./src-C.js";
import {
  $s as t,
  Ea as n,
  Fo as r,
  Hs as i,
  Io as a,
  Ps as o,
  Ri as s,
  U as c,
  Xs as l,
  fi as u,
  ii as d,
  li as f,
  ni as p,
  zo as m,
  zs as h,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as g, t as _ } from "./jsx-runtime.js";
import { t as v } from "./clsx-BcPLHiun.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import {
  B as y,
  G as ee,
  V as b,
  Y as x,
  Z as S,
  b as te,
  wt as C,
  y as w,
} from "./setting-storage.js";
import { n as T, r as E } from "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import { o as ne } from "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import { c as D } from "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import { E as re } from "./codex-api-bK--r_2t.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import "./use-debounced-value-BtOJx-Vp.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import { t as ie } from "./tooltip-CDzchJxN.js";
import { t as O } from "./use-collaboration-mode-CQFe-Ilp.js";
import "./use-model-settings-BGTYyORt.js";
import { t as k } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import { t as A } from "./spinner.js";
import "./use-codex-home.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./link-external-BPZREBQk.js";
import "./open-config-toml-button.js";
import "./open-workspace-file-WgoEFjrv.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./model-queries-CVdTsyPv.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./collaboration-mode-queries.js";
import { t as j } from "./proxy.js";
import { t as ae } from "./AnimatePresence-Dsr-oiZk.js";
import { t as oe } from "./use-reduced-motion.js";
import { t as se } from "./x-C_RDKBp5.js";
import { t as M } from "./check-circle-filled.js";
import "./use-stable-callback.js";
import { t as N } from "./get-resize-observer-entry-size-Bj-GuBki.js";
import "./check-md.js";
import { t as ce } from "./chevron-right.js";
import { t as le } from "./context-menu.js";
import { t as ue } from "./clock-BflmlnpZ.js";
import { t as de } from "./chevron-NmAOI_v1.js";
import { t as fe } from "./warning.js";
import { t as pe } from "./bullet-separator-DZkwhKzs.js";
import { t as P } from "./is-subagent-conversation-BDD-JXTj.js";
import { t as me } from "./avatar-overlay-analytics-qWZkfIni.js";
import { i as he } from "./codex-avatar.js";
import { t as F } from "./avatar-mascot-button-CiqVdgpN.js";
import { t as I } from "./use-avatar-options.js";
import { t as ge } from "./use-floating-window-pointer-interactivity-CBdzwbea.js";
import { t as _e } from "./question-mark-circle-DK-zln_X.js";
import { t as L } from "./permission-request-model.js";
var R = C(),
  z = e(g(), 1),
  B = 1600,
  ve = 100,
  ye = 320;
function be(e) {
  return { screenX: e.screenX, screenY: e.screenY, timeMs: e.timeStamp };
}
function xe(e, t) {
  return e.hasMoved ? V(Se([...e.samples, t])) : null;
}
function Se(e) {
  let t = e.at(-1);
  return t == null ? e : e.filter((e) => t.timeMs - e.timeMs <= ve);
}
function V(e) {
  let t = e.at(-1);
  if (t == null) return null;
  let n = e.find((e) => t.timeMs - e.timeMs > 16);
  if (n == null) return null;
  let r = (t.timeMs - n.timeMs) / 1e3;
  if (r <= 0) return null;
  let i = { x: (t.screenX - n.screenX) / r, y: (t.screenY - n.screenY) / r },
    a = Math.hypot(i.x, i.y);
  if (a < ye) return null;
  if (a <= 1600) return i;
  let o = B / a;
  return { x: i.x * o, y: i.y * o };
}
function H({
  axis: e,
  debounce: t,
  initialSize: n = !0,
  onChange: r,
  target: i,
}) {
  if (!i || typeof ResizeObserver > `u`) return;
  let a = new AbortController(),
    o = null,
    s = null,
    c = n,
    l = new ResizeObserver((n) => {
      n.forEach((n) => {
        let { width: i, height: l } = N(n),
          u = !1;
        if (e === `width`) {
          let e = (c || o != null) && o !== i;
          ((o = i), e && (u = !0));
        } else if (e === `height`) {
          let e = (c || s != null) && s !== l;
          ((s = l), e && (u = !0));
        } else if (e === `both`) {
          let e = (c || o != null) && o !== i,
            t = (c || s != null) && s !== l;
          ((o = i), (s = l), (e || t) && (u = !0));
        }
        if (((c = !1), u))
          if (!t)
            r({ width: i, height: l, previousWidth: o, previousHeight: s }, n);
          else {
            (a.abort(), (a = new AbortController()));
            let e = a.signal;
            requestAnimationFrame(() => {
              e.aborted ||
                r(
                  { width: i, height: l, previousWidth: o, previousHeight: s },
                  n,
                );
            });
          }
      });
    });
  function u() {
    try {
      l.disconnect();
    } catch {}
  }
  return (l.observe(i), u);
}
var U = b({
  allow: {
    id: `avatarOverlay.waitingRequest.allow`,
    defaultMessage: `Allow`,
    description: `Compact action button label for allowing a waiting request`,
  },
  allowNetwork: {
    id: `avatarOverlay.waitingRequest.allowNetwork`,
    defaultMessage: `Allow network`,
    description: `Compact title for a waiting network access request`,
  },
  allowOnce: {
    id: `avatarOverlay.waitingRequest.allowOnce`,
    defaultMessage: `Allow once`,
    description: `Accessible label for allowing a waiting request for the current turn`,
  },
  allowTarget: {
    id: `avatarOverlay.waitingRequest.allowTarget`,
    defaultMessage: `Allow {target}`,
    description: `Compact action button label or title for allowing access to a named connector, plugin, tool, or server`,
  },
  apply: {
    id: `avatarOverlay.waitingRequest.apply`,
    defaultMessage: `Apply`,
    description: `Compact action button label for applying a file change request`,
  },
  applyChanges: {
    id: `avatarOverlay.waitingRequest.applyChanges`,
    defaultMessage: `Apply changes`,
    description: `Compact title for a waiting file change approval request`,
  },
  askQuestion: {
    id: `avatarOverlay.waitingRequest.askQuestion`,
    defaultMessage: `Ask a question`,
    description: `Compact title for a waiting user-input question request`,
  },
  command: {
    id: `avatarOverlay.waitingRequest.command`,
    defaultMessage: `Command`,
    description: `Fallback compact summary for a waiting command approval request`,
  },
  connector: {
    id: `avatarOverlay.waitingRequest.connector`,
    defaultMessage: `Connector`,
    description: `Compact label for a suggested connector waiting request`,
  },
  connectTarget: {
    id: `avatarOverlay.waitingRequest.connectTarget`,
    defaultMessage: `Connect {target}`,
    description: `Compact title for connecting a named connector`,
  },
  connect: {
    id: `avatarOverlay.waitingRequest.connect`,
    defaultMessage: `Connect`,
    description: `Compact action button label for connecting a connector`,
  },
  continue: {
    id: `avatarOverlay.waitingRequest.continue`,
    defaultMessage: `Continue`,
    description: `Compact action button label for continuing a connector flow`,
  },
  deny: {
    id: `avatarOverlay.waitingRequest.deny`,
    defaultMessage: `Deny`,
    description: `Compact action button label for denying a waiting request`,
  },
  enableTool: {
    id: `avatarOverlay.waitingRequest.enableTool`,
    defaultMessage: `Enable {toolName}`,
    description: `Compact title for enabling a named connector or plugin`,
  },
  fileAccess: {
    id: `avatarOverlay.waitingRequest.fileAccess`,
    defaultMessage: `File access`,
    description: `Compact title for a waiting file permission request`,
  },
  fileCount: {
    id: `avatarOverlay.waitingRequest.fileCount`,
    defaultMessage: `{count, plural, one {# file} other {# files}}`,
    description: `Compact file count used in a waiting patch request accessibility summary`,
  },
  installTool: {
    id: `avatarOverlay.waitingRequest.installTool`,
    defaultMessage: `Install {toolName}`,
    description: `Compact title for installing a named connector or plugin`,
  },
  implementPlan: {
    id: `avatarOverlay.waitingRequest.implementPlan`,
    defaultMessage: `Implement plan`,
    description: `Compact action button label for starting a proposed plan`,
  },
  networkAccess: {
    id: `avatarOverlay.waitingRequest.networkAccess`,
    defaultMessage: `Network access`,
    description: `Compact title for a waiting network permission request`,
  },
  openLink: {
    id: `avatarOverlay.waitingRequest.openLink`,
    defaultMessage: `Open link`,
    description: `Compact title or action label for a waiting URL action request`,
  },
  oneFileChanged: {
    id: `avatarOverlay.waitingRequest.oneFileChanged`,
    defaultMessage: `1 file changed`,
    description: `Fallback compact summary for a waiting file change approval request`,
  },
  option: {
    id: `avatarOverlay.waitingRequest.option`,
    defaultMessage: `Option`,
    description: `Fallback compact label for a waiting question option`,
  },
  plan: {
    id: `avatarOverlay.waitingRequest.plan`,
    defaultMessage: `Plan`,
    description: `Compact title for a waiting plan implementation request`,
  },
  plugin: {
    id: `avatarOverlay.waitingRequest.plugin`,
    defaultMessage: `Plugin`,
    description: `Compact label for a suggested plugin waiting request`,
  },
  review: {
    id: `avatarOverlay.waitingRequest.review`,
    defaultMessage: `Review`,
    description: `Compact action button label for reviewing a waiting request`,
  },
  reviewCommand: {
    id: `avatarOverlay.waitingRequest.reviewCommand`,
    defaultMessage: `Review command`,
    description: `Compact title for a waiting command approval request`,
  },
  additionalAccessTarget: {
    id: `avatarOverlay.waitingRequest.moreAccessTarget`,
    defaultMessage: `Codex needs more {target} access`,
    description: `Compact title for granting additional access to a named connector`,
  },
  reconnectTarget: {
    id: `avatarOverlay.waitingRequest.reconnectTarget`,
    defaultMessage: `Reconnect {target}`,
    description: `Compact title or action label for reconnecting a named connector`,
  },
  reconnect: {
    id: `avatarOverlay.waitingRequest.reconnect`,
    defaultMessage: `Reconnect`,
    description: `Compact action button label for reconnecting expired connector credentials`,
  },
  runCommand: {
    id: `avatarOverlay.waitingRequest.runCommand`,
    defaultMessage: `Run command`,
    description: `Compact operation label for a waiting command approval request`,
  },
  runOnce: {
    id: `avatarOverlay.waitingRequest.runOnce`,
    defaultMessage: `Run once`,
    description: `Compact action button label for running a command once`,
  },
  updateAccess: {
    id: `avatarOverlay.waitingRequest.updateAccess`,
    defaultMessage: `Update access`,
    description: `Compact action button label for updating connector permissions`,
  },
  tool: {
    id: `avatarOverlay.waitingRequest.tool`,
    defaultMessage: `tool`,
    description: `Fallback compact label for a suggested tool`,
  },
  toolServer: {
    id: `avatarOverlay.waitingRequest.toolServer`,
    defaultMessage: `Tool server`,
    description: `Fallback compact label for an unnamed tool server`,
  },
});
function W(e, t) {
  switch (e?.type) {
    case `userInput`:
      return e.isOnboardingDynamicInput === !0 ? null : we(e, t);
    case `approval`:
      return e.item.type === `exec` ? Te(e.item, t) : Ee(e.item, t);
    case `permissionRequest`:
      return De(e.item, t);
    case `implementPlan`:
      return Oe(e, t);
    case `mcpServerElicitation`:
      return ke(e, t);
    case `optionPicker`:
    case `setupCodexContextPicker`:
    case void 0:
      return null;
  }
}
function G(e, t) {
  switch (e.kind) {
    case `question`:
      return [e.prompt, ...e.options.map((e) => e.label)]
        .filter(Boolean)
        .join(` `);
    case `plan`:
      return e.summary;
    case `patch`:
      return [
        t.formatMessage(U.fileCount, { count: e.fileCount }),
        e.additions > 0 ? `+${e.additions}` : null,
        e.deletions > 0 ? `-${e.deletions}` : null,
        e.summary,
      ]
        .filter(Boolean)
        .join(`. `);
    case `exec`:
      return e.summary;
    case `network`:
      return e.target;
    case `permission`:
      return e.target;
    case `tool`:
      return [e.target, e.summary].filter(Boolean).join(`. `);
  }
}
function Ce(e, t) {
  return `${t.title} · ${e}`;
}
function we(e, t) {
  let n = e.item.questions[0];
  if (n == null) return null;
  let r = q(n.question) ?? q(n.header);
  return r == null || n.options.length === 0
    ? null
    : {
        kind: `question`,
        requestId: e.item.requestId,
        title: t.formatMessage(U.askQuestion),
        prompt: r,
        options: n.options.map((e) => ({
          label: q(e.label) ?? t.formatMessage(U.option),
          description: q(e.description),
          questionId: n.id,
        })),
      };
}
function Te(e, t) {
  if (e.type !== `exec`) throw Error(`Expected exec approval item`);
  if (e.approvalRequestId == null) return null;
  let n = q(e.networkApprovalContext?.host ?? ``);
  return n == null
    ? {
        kind: `exec`,
        requestId: e.approvalRequestId,
        operation: t.formatMessage(U.runCommand),
        summary: q(e.cmd.join(` && `)) ?? t.formatMessage(U.command),
        title: t.formatMessage(U.reviewCommand),
        actions: [
          {
            commandDecision: `accept`,
            intent: `command-approval`,
            label: t.formatMessage(U.runOnce),
            tone: `primary`,
          },
          {
            commandDecision: `decline`,
            intent: `command-approval`,
            label: t.formatMessage(U.deny),
            tone: `danger`,
          },
        ],
      }
    : {
        kind: `network`,
        requestId: e.approvalRequestId,
        operation: t.formatMessage(U.allowNetwork),
        target: n,
        title: t.formatMessage(U.allowNetwork),
        actions: [
          {
            ariaLabel: t.formatMessage(U.allowOnce),
            commandDecision: `accept`,
            intent: `command-approval`,
            label: t.formatMessage(U.allow),
            tone: `primary`,
          },
          {
            commandDecision: `decline`,
            intent: `command-approval`,
            label: t.formatMessage(U.deny),
            tone: `danger`,
          },
        ],
      };
}
function Ee(e, t) {
  if (e.type !== `patch` || e.approvalRequestId == null) return null;
  let n = Object.entries(e.changes);
  if (n.length === 0) return null;
  let r = ze(e.changes);
  return {
    kind: `patch`,
    requestId: e.approvalRequestId,
    operation: t.formatMessage(U.applyChanges),
    summary: n[0]?.[0] ?? t.formatMessage(U.oneFileChanged),
    title: t.formatMessage(U.applyChanges),
    files: n.map(([e]) => e),
    fileCount: n.length,
    additions: r.additions,
    deletions: r.deletions,
    actions: [
      {
        fileDecision: `accept`,
        intent: `file-approval`,
        label: t.formatMessage(U.apply),
        tone: `primary`,
      },
      { intent: `open`, label: t.formatMessage(U.review), tone: `secondary` },
    ],
  };
}
function De(e, t) {
  let { permissions: n } = e,
    r = L(n)[0];
  if (r == null) return null;
  let i, a;
  if (r.kind === `network`) ((a = t.formatMessage(U.networkAccess)), (i = a));
  else {
    a = t.formatMessage(U.fileAccess);
    let e = r.paths[0] ?? a,
      n = Math.max(0, r.paths.length - 1);
    i = n === 0 ? e : `${e} +${n}`;
  }
  return {
    kind: `permission`,
    requestId: e.requestId,
    operation: a,
    target: i,
    title: a,
    actions: [
      {
        intent: `permission-response`,
        ariaLabel: t.formatMessage(U.allowOnce),
        label: t.formatMessage(U.allow),
        permissionResponse: { permissions: Ae(n), scope: `turn` },
        tone: `primary`,
      },
      {
        intent: `permission-response`,
        label: t.formatMessage(U.deny),
        permissionResponse: { permissions: {}, scope: `turn` },
        tone: `danger`,
      },
    ],
  };
}
function Oe(e, t) {
  let { planContent: n } = e,
    r = q(
      n
        .split(/\r?\n/)
        .map((e) => e.replace(/^[-*]\s+\[[ x]\]\s+/i, ``).trim())
        .find((e) => e.length > 0) ?? ``,
    );
  return r == null
    ? null
    : {
        kind: `plan`,
        operation: t.formatMessage(U.plan),
        planContent: n,
        summary: r,
        title: t.formatMessage(U.plan),
        turnId: e.turnId,
        actions: [
          {
            intent: `plan-start`,
            label: t.formatMessage(U.implementPlan),
            tone: `primary`,
          },
        ],
      };
}
function ke(e, t) {
  let { elicitation: n } = e,
    r = e.request.params,
    i = q(r.serverName),
    a = Re(i) ?? i ?? t.formatMessage(U.toolServer),
    o,
    s = a,
    c = null,
    l = null;
  switch (n.kind) {
    case `mcpToolCall`: {
      let e = q(n.approval.connector_name) ?? Re(n.approval.connector_id) ?? a,
        r = je(n.message);
      ((o =
        r == null
          ? t.formatMessage(U.allowTarget, { target: e })
          : t.formatMessage(U.allowTarget, { target: r })),
        (s = e),
        (c = q(n.subtitle) ?? Me(n.approval.tool_params) ?? q(n.message)));
      break;
    }
    case `toolSuggestion`: {
      let e =
        q(n.suggestion.tool_name) ??
        Re(n.suggestion.tool_id) ??
        t.formatMessage(U.tool);
      ((o =
        n.suggestion.suggest_type === `enable`
          ? t.formatMessage(U.enableTool, { toolName: e })
          : t.formatMessage(U.installTool, { toolName: e })),
        (s =
          n.suggestion.tool_type === `connector`
            ? t.formatMessage(U.connector)
            : t.formatMessage(U.plugin)),
        (c = q(n.suggestion.suggest_reason)));
      break;
    }
    case `connectorAuth`: {
      let e =
          q(n.connector.connector_name) ?? Re(n.connector.connector_id) ?? a,
        r = n.connector.auth_reason;
      ((o =
        r === `missing_link`
          ? t.formatMessage(U.connectTarget, { target: e })
          : r === `oauth_upgrade_required`
            ? t.formatMessage(U.additionalAccessTarget, { target: e })
            : t.formatMessage(U.reconnectTarget, { target: e })),
        (s = e),
        (c = q(n.subtitle) ?? q(n.message) ?? K(n.url)),
        (l = [
          {
            intent: `open`,
            label:
              r === `missing_link`
                ? t.formatMessage(U.connect)
                : r === `oauth_upgrade_required`
                  ? t.formatMessage(U.updateAccess)
                  : t.formatMessage(U.reconnect),
            tone: `primary`,
          },
        ]));
      break;
    }
    case `urlAction`:
      ((s = Re(n.serverName) ?? q(n.serverName) ?? a),
        (o = t.formatMessage(U.openLink)),
        (c = q(n.subtitle) ?? K(n.url) ?? q(n.message)),
        (l = [
          {
            intent: `open`,
            label: t.formatMessage(U.openLink),
            tone: `primary`,
          },
        ]));
      break;
    case `generic`:
      ((o =
        Pe({ message: n.message, metadata: n.metadata }) ??
        t.formatMessage(U.allowTarget, { target: a })),
        (c = q(n.subtitle) ?? Me(n.toolParams) ?? q(n.message)));
      break;
  }
  return {
    kind: `tool`,
    requestId: e.requestId,
    operation: o,
    target: s,
    summary: c,
    title: o,
    actions: l ?? [
      {
        ariaLabel: t.formatMessage(U.allowTarget, { target: s }),
        intent: `mcp-elicitation`,
        label: t.formatMessage(U.allowTarget, { target: s }),
        mcpElicitationAction: `accept`,
        tone: `primary`,
      },
    ],
  };
}
function Ae(e) {
  return {
    ...(e.network == null ? {} : { network: e.network }),
    ...(e.fileSystem == null ? {} : { fileSystem: e.fileSystem }),
  };
}
function je(e) {
  let t = /\brun\s+tool\s+"([^"]+)"/i.exec(e);
  if (t?.[1] != null) return q(t[1]);
  let n = /\baccess\s+(.+?)\?*$/i.exec(e);
  return n?.[1] == null ? null : q(n[1]);
}
function Me(e) {
  if (e == null) return null;
  let t = Object.entries(e)[0];
  if (t == null) return null;
  let [n, r] = t,
    i = Ne(r);
  return q(i == null ? n : `${n}: ${i}`);
}
function K(e) {
  try {
    let t = new URL(e),
      n = t.pathname === `/` ? `` : t.pathname;
    return Ve(`${t.hostname}${n}`);
  } catch {
    return Ve(e);
  }
}
function Ne(e) {
  return typeof e == `string`
    ? Ve(e)
    : typeof e == `number` || typeof e == `boolean`
      ? String(e)
      : e == null
        ? null
        : Ve(JSON.stringify(e) ?? ``);
}
function Pe({ message: e, metadata: t }) {
  let n = Ie(t),
    r = Fe(e, n);
  return n != null && Le(r) ? n : q(r);
}
function Fe(e, t) {
  let n = e.trim();
  if (t == null) return n;
  let r = `Reason: ${t}`;
  if (!n.endsWith(r)) return n;
  let i = n.slice(0, -r.length).trim();
  return i.length > 0 ? i : n;
}
function Ie(e) {
  if (e == null || Array.isArray(e) || typeof e != `object`) return null;
  let t = e.reason;
  return typeof t == `string` ? q(t) : null;
}
function Le(e) {
  let t = e.trim().toLowerCase();
  return (
    t === `tool call needs your approval.` ||
    t === `tool call needs your approval`
  );
}
function Re(e) {
  let t = e
    ?.trim()
    .replace(/^connector[_-]/, ``)
    .split(/[_-]+/)
    .filter(Boolean);
  return t == null || t.length === 0
    ? null
    : t.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(` `);
}
function ze(e) {
  let t = 0,
    n = 0;
  for (let r of Object.values(e))
    switch (r?.type) {
      case `add`:
        t += Be(r.content);
        break;
      case `delete`:
        n += Be(r.content);
        break;
      case `update`:
        for (let e of r.unified_diff.split(/\r?\n/))
          e.startsWith(`+++`) ||
            e.startsWith(`---`) ||
            (e.startsWith(`+`) ? (t += 1) : e.startsWith(`-`) && (n += 1));
        break;
    }
  return { additions: t, deletions: n };
}
function Be(e) {
  if (e.length === 0) return 0;
  let t = e.split(/\r?\n/);
  return t.at(-1) === `` ? t.length - 1 : t.length;
}
function q(e) {
  let t = e?.replace(/\s+/g, ` `).trim() ?? ``;
  return t.length === 0 ? null : t;
}
function Ve(e) {
  let t = q(e);
  return t == null ? null : t.length <= 48 ? t : `${t.slice(0, 47)}…`;
}
function He(e, t) {
  return e
    .map((e) =>
      [
        e.id,
        e.title,
        e.body ?? ``,
        e.level,
        e.isLoading ? `loading` : `done`,
        e.action?.path ?? ``,
        e.waitingRequest == null ? `` : G(e.waitingRequest, t),
      ].join(``),
    )
    .join(`\0`);
}
var J = b({
    running: {
      id: `avatarOverlay.statusRunning`,
      defaultMessage: `Running`,
      description: `Status label shown for a loading notification`,
    },
    runningFallbackBody: {
      id: `avatarOverlay.statusRunningSubtitle`,
      defaultMessage: `Thinking`,
      description: `Fallback body shown for a loading notification when no richer activity text is available`,
    },
    waiting: {
      id: `avatarOverlay.statusWaiting`,
      defaultMessage: `Needs input`,
      description: `Status label shown for a notification waiting on user input`,
    },
    review: {
      id: `avatarOverlay.statusReview`,
      defaultMessage: `Ready`,
      description: `Status label shown for a notification with unread completed output`,
    },
    failed: {
      id: `avatarOverlay.statusFailed`,
      defaultMessage: `Blocked`,
      description: `Status label shown for a notification that failed`,
    },
    info: {
      id: `avatarOverlay.statusInfo`,
      defaultMessage: `Info`,
      description: `Status label shown for an informational notification`,
    },
  }),
  Ue = {
    badgeBackgroundColor: `var(--color-token-activity-bar-badge-background)`,
    badgeForegroundColor: `var(--color-token-activity-bar-badge-foreground)`,
    fallbackBodyMessage: J.info,
    iconClassName: `icon-xs shrink-0 text-token-text-secondary`,
    iconType: `clock`,
    labelMessage: J.info,
    mascotState: `idle`,
  },
  We = { ...Ue, mascotState: `waving` };
function Ge(e) {
  if (e == null) return Ue;
  if (e.kind === `first-awake`) return We;
  if (e.isLoading)
    return {
      badgeBackgroundColor: `var(--color-token-activity-bar-badge-background)`,
      badgeForegroundColor: `var(--color-token-activity-bar-badge-foreground)`,
      fallbackBodyMessage: J.runningFallbackBody,
      iconClassName: `icon-xs shrink-0 text-token-text-secondary`,
      iconType: `spinner`,
      labelMessage: J.running,
      mascotState: `running`,
    };
  switch (e.level) {
    case `warning`:
      return {
        badgeBackgroundColor: `var(--color-token-editor-warning-foreground)`,
        badgeForegroundColor: `var(--color-token-bg-primary)`,
        fallbackBodyMessage: J.waiting,
        iconClassName: `icon-xs shrink-0 text-token-editor-warning-foreground`,
        iconType: `clock`,
        labelMessage: J.waiting,
        mascotState: `waiting`,
      };
    case `danger`:
      return {
        badgeBackgroundColor: `var(--color-token-error-foreground)`,
        badgeForegroundColor: `var(--color-token-bg-primary)`,
        fallbackBodyMessage: J.failed,
        iconClassName: `icon-xs shrink-0 text-token-error-foreground`,
        iconType: `warning`,
        labelMessage: J.failed,
        mascotState: `failed`,
      };
    case `success`:
      return {
        badgeBackgroundColor: `var(--color-token-charts-green)`,
        badgeForegroundColor: `var(--color-token-bg-primary)`,
        fallbackBodyMessage: J.review,
        iconClassName: `icon-xs shrink-0 text-token-charts-green`,
        iconType: `check-circle`,
        labelMessage: J.review,
        mascotState: `review`,
      };
    case `info`:
      return Ue;
  }
}
var Y = b({
  calledTool: {
    id: `avatarOverlay.session.calledTool`,
    defaultMessage: `Called tool`,
    description: `Avatar overlay activity subtitle for a completed generic tool call`,
  },
  calledToolName: {
    id: `avatarOverlay.session.calledToolName`,
    defaultMessage: `Called {toolName}`,
    description: `Avatar overlay activity subtitle for a completed named tool call`,
  },
  callingTool: {
    id: `avatarOverlay.session.callingTool`,
    defaultMessage: `Calling tool`,
    description: `Avatar overlay activity subtitle for a running generic tool call`,
  },
  callingToolName: {
    id: `avatarOverlay.session.callingToolName`,
    defaultMessage: `Calling {toolName}`,
    description: `Avatar overlay activity subtitle for a running named tool call`,
  },
  editedFiles: {
    id: `avatarOverlay.session.editedFiles`,
    defaultMessage: `Edited {fileCount, plural, one {# file} other {# files}}`,
    description: `Avatar overlay activity subtitle for completed file edits`,
  },
  editingFiles: {
    id: `avatarOverlay.session.editingFiles`,
    defaultMessage: `Editing {fileCount, plural, one {# file} other {# files}}`,
    description: `Avatar overlay activity subtitle for running file edits`,
  },
  listedFiles: {
    id: `avatarOverlay.session.listedFiles`,
    defaultMessage: `Listed files`,
    description: `Avatar overlay activity subtitle for a completed file listing command`,
  },
  listingFiles: {
    id: `avatarOverlay.session.listingFiles`,
    defaultMessage: `Listing files`,
    description: `Avatar overlay activity subtitle for a running file listing command`,
  },
  newThread: {
    id: `avatarOverlay.session.newThread`,
    defaultMessage: `New chat`,
    description: `Avatar overlay fallback title for a thread without a generated title`,
  },
  ranCommand: {
    id: `avatarOverlay.session.ranCommand`,
    defaultMessage: `Ran command`,
    description: `Avatar overlay activity subtitle for a completed shell command`,
  },
  readFile: {
    id: `avatarOverlay.session.readFile`,
    defaultMessage: `Read {fileName}`,
    description: `Avatar overlay activity subtitle for a completed file read`,
  },
  readingFile: {
    id: `avatarOverlay.session.readingFile`,
    defaultMessage: `Reading {fileName}`,
    description: `Avatar overlay activity subtitle for a running file read`,
  },
  runningCommand: {
    id: `avatarOverlay.session.runningCommand`,
    defaultMessage: `Running command`,
    description: `Avatar overlay activity subtitle for a running shell command`,
  },
  searchedFiles: {
    id: `avatarOverlay.session.searchedFiles`,
    defaultMessage: `Searched files`,
    description: `Avatar overlay activity subtitle for a completed file search command without a query`,
  },
  searchedQuery: {
    id: `avatarOverlay.session.searchedQuery`,
    defaultMessage: `Searched "{query}"`,
    description: `Avatar overlay activity subtitle for a completed search with a query`,
  },
  searchedWeb: {
    id: `avatarOverlay.session.searchedWeb`,
    defaultMessage: `Searched web`,
    description: `Avatar overlay activity subtitle for a completed web search`,
  },
  searchingFiles: {
    id: `avatarOverlay.session.searchingFiles`,
    defaultMessage: `Searching files`,
    description: `Avatar overlay activity subtitle for a running file search command without a query`,
  },
  searchingQuery: {
    id: `avatarOverlay.session.searchingQuery`,
    defaultMessage: `Searching "{query}"`,
    description: `Avatar overlay activity subtitle for a running search with a query`,
  },
});
function Ke({
  includeCompactWaitingRequests: e,
  intl: t,
  localConversations: n,
  remoteTasks: r,
}) {
  let i = [],
    a = new Set();
  for (let r of n) {
    let n = qe({ conversation: r, includeCompactWaitingRequests: e, intl: t });
    n == null || a.has(n.key) || (a.add(n.key), i.push(n));
  }
  for (let e of r) {
    let n = Je(e, t);
    a.has(n.key) || (a.add(n.key), i.push(n));
  }
  return i;
}
function qe({ conversation: e, includeCompactWaitingRequests: t, intl: n }) {
  if (P(e)) return null;
  let r = e.hostId ?? `local`,
    i = r === `local` ? `local` : `remote-host`,
    a = $e(e),
    o = t && a === `waiting` ? f(e) : null;
  return {
    actionPath: `/local/` + e.id,
    hostId: r,
    key: i + `:` + r + `:` + e.id,
    localConversationId: e.id,
    source: i,
    status: a,
    subtitle: Ye(e, n),
    title: p(e) ?? n.formatMessage(Y.newThread),
    turnKey: String(e.turns.length),
    updatedAtMs: e.updatedAt,
    waitingRequest: W(o, n),
  };
}
function Je(e, t) {
  let n = (e.updated_at ?? e.created_at ?? 0) * 1e3;
  return {
    actionPath: `/remote/` + e.id,
    hostId: null,
    key: `cloud:` + e.id,
    localConversationId: null,
    source: `cloud`,
    status: X(e),
    subtitle: null,
    title: e.title?.trim() || t.formatMessage(Y.newThread),
    turnKey: e.task_status_display?.latest_turn_status_display?.turn_id ?? null,
    updatedAtMs: n,
    waitingRequest: null,
  };
}
function Ye(e, t) {
  return Xe(e.turns.at(-1)?.items ?? [], t);
}
function Xe(e, t) {
  for (let t = e.length - 1; t >= 0; --t) {
    let n = e[t];
    if (n?.type === `reasoning`)
      for (let e = n.summary.length - 1; e >= 0; --e) {
        let t = Qe(n.summary[e]);
        if (t != null) return t;
      }
    if (n?.type === `agentMessage`) {
      let e = Qe(n.text);
      if (e != null) return e;
    }
  }
  for (let n = e.length - 1; n >= 0; --n) {
    let r = Ze(e[n], t);
    if (r != null) return r;
  }
  return null;
}
function Ze(e, t) {
  if (e == null) return null;
  if (e.type === `commandExecution`) {
    let n = e.commandActions.at(-1),
      r = e.status === `inProgress`;
    if (n == null)
      return r
        ? t.formatMessage(Y.runningCommand)
        : t.formatMessage(Y.ranCommand);
    switch (n.type) {
      case `read`:
        return r
          ? t.formatMessage(Y.readingFile, { fileName: n.name })
          : t.formatMessage(Y.readFile, { fileName: n.name });
      case `listFiles`:
        return r
          ? t.formatMessage(Y.listingFiles)
          : t.formatMessage(Y.listedFiles);
      case `search`: {
        let e = Qe(n.query ?? ``);
        return e == null
          ? r
            ? t.formatMessage(Y.searchingFiles)
            : t.formatMessage(Y.searchedFiles)
          : r
            ? t.formatMessage(Y.searchingQuery, { query: e })
            : t.formatMessage(Y.searchedQuery, { query: e });
      }
      case `unknown`:
        return r
          ? t.formatMessage(Y.runningCommand)
          : t.formatMessage(Y.ranCommand);
    }
  }
  if (e.type === `fileChange`) {
    let n = e.changes.length;
    return e.status === `inProgress`
      ? t.formatMessage(Y.editingFiles, { fileCount: n })
      : t.formatMessage(Y.editedFiles, { fileCount: n });
  }
  if (e.type === `mcpToolCall`) {
    let n = e.status === `inProgress`,
      r = Qe(e.tool.replace(/[_-]+/g, ` `));
    return r == null
      ? n
        ? t.formatMessage(Y.callingTool)
        : t.formatMessage(Y.calledTool)
      : n
        ? t.formatMessage(Y.callingToolName, { toolName: r })
        : t.formatMessage(Y.calledToolName, { toolName: r });
  }
  if (e.type === `webSearch`) {
    let n = Qe(e.query);
    return n == null
      ? t.formatMessage(Y.searchedWeb)
      : t.formatMessage(Y.searchedQuery, { query: n });
  }
  return null;
}
function Qe(e) {
  let t = d(e)
    .replace(/^\s{0,3}#{1,6}\s+/g, ``)
    .replace(/\*\*([^*]+)\*\*/g, `$1`)
    .replace(/__([^_]+)__/g, `$1`)
    .replace(/`([^`]+)`/g, `$1`)
    .replace(/\*([^*]+)\*/g, `$1`)
    .replace(/_([^_]+)_/g, `$1`)
    .replace(/\s+/g, ` `)
    .trim();
  return t.length > 0 ? t : null;
}
function $e(e) {
  let t = e.resumeState === `needs_resume` ? e.threadRuntimeStatus : null,
    n =
      e.resumeState === `needs_resume`
        ? t?.type === `active`
        : e.resumeState === `resuming` ||
          e.turns.at(-1)?.status === `inProgress`,
    r =
      e.resumeState === `needs_resume`
        ? t?.type === `active` && t.activeFlags.includes(`waitingOnUserInput`)
        : e.requests.some((e) => e.method === `item/tool/requestUserInput`),
    i = e.turns.some((e) =>
      e.items.some((e) => e.type === `planImplementation` && !e.isCompleted),
    ),
    a =
      e.resumeState === `needs_resume`
        ? t?.type === `systemError`
        : e.turns.at(-1)?.status === `failed`;
  return u(e) || r || i
    ? `waiting`
    : a
      ? `failed`
      : n
        ? `running`
        : e.hasUnreadTurn
          ? `review`
          : `idle`;
}
function X(e) {
  if (e.archived) return `idle`;
  let t = e.task_status_display?.latest_turn_status_display?.turn_status;
  return t === `failed` || t === `cancelled`
    ? `failed`
    : t === `in_progress` || t === `pending`
      ? `running`
      : e.has_unread_turn
        ? `review`
        : `idle`;
}
var Z = _(),
  Q = b({
    mascotLabel: {
      id: `petOverlay.mascotLabel`,
      defaultMessage: `{petName} pet`,
      description: `Accessible label for the floating Codex pet`,
    },
    openNotification: {
      id: `avatarOverlay.openNotification`,
      defaultMessage: `Open notification`,
      description: `Accessible label for an actionable row in the floating avatar notification tray`,
    },
    dismissNotification: {
      id: `avatarOverlay.dismissNotification`,
      defaultMessage: `Dismiss {title}`,
      description: `Accessible label for dismissing a notification in the floating avatar notification tray`,
    },
    dismissNotificationTooltip: {
      id: `avatarOverlay.dismissNotificationTooltip`,
      defaultMessage: `Dismiss`,
      description: `Tooltip for the icon button that dismisses a floating avatar notification`,
    },
    replyNotification: {
      id: `avatarOverlay.replyNotification`,
      defaultMessage: `Reply to {title}`,
      description: `Accessible label for replying to a floating avatar notification`,
    },
    replyNotificationButton: {
      id: `avatarOverlay.replyNotificationButton`,
      defaultMessage: `Reply`,
      description: `Compact button label for replying to a floating avatar notification`,
    },
    sendNotificationReply: {
      id: `avatarOverlay.sendNotificationReply`,
      defaultMessage: `Send reply to {title}`,
      description: `Accessible label for submitting a floating avatar notification reply`,
    },
    notificationReplyPlaceholder: {
      id: `avatarOverlay.notificationReplyPlaceholder`,
      defaultMessage: `Reply`,
      description: `Placeholder for the one-line floating avatar notification reply input`,
    },
    notificationReplyError: {
      id: `avatarOverlay.notificationReplyError`,
      defaultMessage: `Unable to send reply`,
      description: `Compact error shown when a floating avatar notification reply fails`,
    },
    expandNotification: {
      id: `avatarOverlay.expandNotification`,
      defaultMessage: `Expand {title}`,
      description: `Accessible label for expanding a floating avatar notification row`,
    },
    collapseNotification: {
      id: `avatarOverlay.collapseNotification`,
      defaultMessage: `Collapse {title}`,
      description: `Accessible label for collapsing a floating avatar notification row`,
    },
    expandNotificationTooltip: {
      id: `avatarOverlay.expandNotificationTooltip`,
      defaultMessage: `Expand`,
      description: `Tooltip for the icon button that expands a floating avatar notification`,
    },
    collapseNotificationTooltip: {
      id: `avatarOverlay.collapseNotificationTooltip`,
      defaultMessage: `Collapse`,
      description: `Tooltip for the icon button that collapses a floating avatar notification`,
    },
    collapseNotificationTray: {
      id: `avatarOverlay.collapseNotificationTray`,
      defaultMessage: `Collapse activity`,
      description: `Accessible label and tooltip for the button that collapses the floating avatar activity tray`,
    },
    resizeMascot: {
      id: `avatarOverlay.resizeMascot`,
      defaultMessage: `Resize pet`,
      description: `Accessible label for the handle that resizes the floating Codex pet`,
    },
    notificationList: {
      id: `avatarOverlay.notificationList`,
      defaultMessage: `Activity notifications`,
      description: `Accessible label for the scrollable list of floating avatar notifications`,
    },
    latestNotifications: {
      id: `avatarOverlay.latestNotifications`,
      defaultMessage: `Latest`,
      description: `Label for the button that scrolls the floating avatar activity list back to the newest notifications`,
    },
    showLatestNotifications: {
      id: `avatarOverlay.showLatestNotifications`,
      defaultMessage: `Show latest activity`,
      description: `Accessible label for the button that scrolls the floating avatar activity list back to the newest notifications`,
    },
    showOlderNotifications: {
      id: `avatarOverlay.showOlderNotifications`,
      defaultMessage: `Show {count, plural, one {# older activity item} other {# older activity items}}`,
      description: `Accessible label for the button that scrolls the floating avatar activity list toward older notifications`,
    },
    olderNotificationCount: {
      id: `avatarOverlay.olderNotificationCount`,
      defaultMessage: `{count, plural, one {# more} other {# more}}`,
      description: `Label for the button that shows there are more floating avatar activity notifications below`,
    },
    compactOlderNotificationCount: {
      id: `avatarOverlay.compactOlderNotificationCount`,
      defaultMessage: `+{count}`,
      description: `Compact label for the edge button that shows hidden floating avatar activity notifications`,
    },
    questionStatusIcon: {
      id: `avatarOverlay.questionStatusIcon`,
      defaultMessage: `Question`,
      description: `Accessible label for a floating avatar notification waiting on a question answer`,
    },
    compactPatchFileCount: {
      id: `avatarOverlay.compactPatchFileCount`,
      defaultMessage: `{count, plural, one {# file} other {# files}}`,
      description: `Compact file count for a patch request in the floating avatar notification tray`,
    },
    compactPatchAdditions: {
      id: `avatarOverlay.compactPatchAdditions`,
      defaultMessage: `+{count}`,
      description: `Compact additions count for a patch request in the floating avatar notification tray`,
    },
    compactPatchDeletions: {
      id: `avatarOverlay.compactPatchDeletions`,
      defaultMessage: `-{count}`,
      description: `Compact deletions count for a patch request in the floating avatar notification tray`,
    },
  }),
  $ = 2,
  et = 2,
  tt = 0.035,
  nt = 32,
  rt = 84,
  it = 512,
  at = 1,
  ot = `group no-drag absolute left-1/2 z-10 flex h-5 cursor-interaction items-center justify-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary px-2 text-[10px] leading-none font-medium text-token-text-secondary shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] backdrop-blur hover:text-token-foreground hover:shadow-[0px_7px_14px_-9px_rgba(0,0,0,0.26)] focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas]`,
  st = `!bg-token-main-surface-primary enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_94%,var(--color-token-foreground))]`;
function ct({
  avatar: e,
  avatarMenuItems: t,
  interactiveRegionRef: n,
  isDragging: r = !1,
  isNotificationTrayOpen: i = !0,
  layout: a,
  mascotLayout: o = a.mascot,
  mascotStyle: s,
  mascotDragState: c,
  mascotResizeHandle: l,
  notifications: u,
  onLostPointerCapture: d,
  onCloseNotificationTray: f,
  onPointerCancel: p,
  onPointerDown: m,
  onPointerMove: h,
  onPointerUp: g,
  onDismissNotification: _,
  onRunNotificationAction: y,
  onSubmitQuestionOption: b,
  onNotificationReplyEditorActiveChange: x,
  onOpenNotificationReply: S,
  onSubmitNotificationReply: te,
  onOpenNotificationTray: C,
}) {
  let w = ee(),
    T = oe(),
    E = Ge(u[0]),
    ne = u.length > 0,
    D = ne && i,
    re = a.placement.startsWith(`top`),
    ie = a.placement.endsWith(`end`),
    O = a.tray == null ? void 0 : Math.max(0, a.tray.height),
    k = `${re ? `bottom` : `top`} ${ie ? `right` : `left`}`,
    A;
  return (
    D
      ? (A = {
          ariaLabel: w.formatMessage(Q.collapseNotificationTray),
          backgroundColor: `var(--color-token-bg-primary)`,
          content: (0, Z.jsx)(de, { className: `icon-xs opacity-80` }),
          foregroundColor: `var(--color-token-text-secondary)`,
          isIconOnly: !0,
          onClick: f,
        })
      : ne &&
        (A = {
          ariaLabel: w.formatMessage(
            {
              id: `avatarOverlay.toggleNotificationTray`,
              defaultMessage: `Open activity tray, {count, plural, one {# item} other {# items}}`,
              description: `Accessible label for the floating avatar activity count button`,
            },
            { count: u.length },
          ),
          backgroundColor: E.badgeBackgroundColor,
          content: u.length,
          foregroundColor: E.badgeForegroundColor,
          onClick: C,
        }),
    (0, Z.jsx)(`main`, {
      className: `relative h-screen w-screen overflow-hidden bg-transparent`,
      children: (0, Z.jsxs)(`section`, {
        ref: n,
        "data-avatar-overlay-content-frame": `true`,
        className: `relative h-full w-full cursor-grab active:cursor-grabbing`,
        onLostPointerCapture: d,
        onPointerCancel: p,
        onPointerDown: m,
        onPointerMove: h,
        onPointerUp: g,
        children: [
          ne
            ? (0, Z.jsx)(`div`, {
                "aria-hidden": D ? void 0 : !0,
                "data-avatar-overlay-hit-region": `notification-tray`,
                inert: !D,
                className: `absolute cursor-interaction text-sm text-token-foreground`,
                style: {
                  height: a.tray?.height,
                  left: a.tray?.left,
                  pointerEvents: D ? void 0 : `none`,
                  top: a.tray?.top,
                  visibility: a.tray == null ? `hidden` : void 0,
                  width: a.tray?.width,
                },
                children: (0, Z.jsxs)(j.div, {
                  animate: {
                    opacity: D ? 1 : 0,
                    scale: D || T ? 1 : 0.97,
                    y: D || T ? 0 : 8,
                  },
                  className: `relative overflow-hidden [corner-shape:superellipse(1.5)]`,
                  "data-avatar-overlay-size": `notification-tray`,
                  initial: !1,
                  style: { maxHeight: O, transformOrigin: k },
                  transition: T
                    ? { duration: 0 }
                    : {
                        damping: 26,
                        mass: 0.8,
                        stiffness: 360,
                        type: `spring`,
                      },
                  children: [
                    (0, Z.jsx)(`div`, {
                      className: `h-0 overflow-hidden`,
                      "data-avatar-overlay-size": `notification-tray-header`,
                    }),
                    (0, Z.jsx)(`div`, {
                      children: (0, Z.jsx)(lt, {
                        isNotificationTrayVisible: D,
                        notifications: u,
                        prefersReducedMotion: !!T,
                        trayMaxHeight: O,
                        onDismissNotification: _,
                        onRunNotificationAction: y,
                        onSubmitQuestionOption: b,
                        onNotificationReplyEditorActiveChange: x,
                        onOpenNotificationReply: S,
                        onSubmitNotificationReply: te,
                      }),
                    }),
                  ],
                }),
              })
            : null,
          (0, Z.jsx)(le, {
            items: t,
            children: (0, Z.jsx)(`div`, {
              "data-avatar-overlay-hit-region": `mascot`,
              className: v(
                `absolute duration-[160ms] ease-out [@media(prefers-reduced-motion:reduce)]:transition-none`,
                r ? `scale-95 transition-transform` : `transition-none`,
              ),
              style: {
                height: o.height,
                left: o.left,
                top: o.top,
                width: o.width,
              },
              children: (0, Z.jsx)(F, {
                ariaLabel: w.formatMessage(Q.mascotLabel, {
                  petName: e.displayName,
                }),
                assetRef: e.assetRef,
                spritesheetUrl: e.spritesheetUrl,
                notificationBadge: A,
                resizeHandle:
                  l == null
                    ? void 0
                    : { ariaLabel: w.formatMessage(Q.resizeMascot), ...l },
                state: E.mascotState,
                style: s,
                transientState: c,
              }),
            }),
          }),
        ],
      }),
    })
  );
}
function lt(e) {
  let t = (0, R.c)(69),
    {
      isNotificationTrayVisible: n,
      notifications: r,
      onDismissNotification: i,
      onNotificationReplyEditorActiveChange: a,
      onOpenNotificationReply: o,
      onRunNotificationAction: s,
      onSubmitQuestionOption: c,
      onSubmitNotificationReply: l,
      prefersReducedMotion: u,
      trayMaxHeight: d,
    } = e,
    f = ee(),
    p = (0, z.useRef)(null),
    m;
  t[0] !== f || t[1] !== r
    ? ((m = He(r, f)), (t[0] = f), (t[1] = r), (t[2] = m))
    : (m = t[2]);
  let h = m,
    g = r.length > $,
    _ = Math.max(0, r.length - $),
    y;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = {
        hasScrollableContent: !1,
        hasLatestNotificationsAbove: !1,
        hiddenOlderNotificationCount: 0,
      }),
      (t[3] = y))
    : (y = t[3]);
  let [b, x] = (0, z.useState)(y),
    [S, C] = (0, z.useState)(null),
    w = (0, z.useRef)(null),
    T;
  t[4] !== r || t[5] !== S
    ? ((T = r.some((e) => e.id === S) ? S : null),
      (t[4] = r),
      (t[5] = S),
      (t[6] = T))
    : (T = t[6]);
  let E = T,
    ne = E != null && n,
    D,
    re;
  (t[7] !== ne || t[8] !== a
    ? ((D = () => {
        if (ne)
          return (
            a?.(!0),
            () => {
              a?.(!1);
            }
          );
      }),
      (re = [ne, a]),
      (t[7] = ne),
      (t[8] = a),
      (t[9] = D),
      (t[10] = re))
    : ((D = t[9]), (re = t[10])),
    (0, z.useEffect)(D, re));
  let ie, O;
  (t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = () => {
        w.current?.focus();
      }),
      (O = []),
      (t[11] = ie),
      (t[12] = O))
    : ((ie = t[11]), (O = t[12])),
    te(`avatar-overlay-keyboard-interaction-ready`, ie, O));
  let k = Math.min(b.hiddenOlderNotificationCount, _),
    A = b.hasScrollableContent,
    oe = A && g && b.hasLatestNotificationsAbove,
    se = A && g && k > 0,
    M = A && g,
    N;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        x((t) => {
          let n = Ct(e);
          return wt(t, n) ? t : n;
        });
      }),
      (t[13] = N))
    : (N = t[13]);
  let ce = N,
    le;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (e) => {
        ((p.current = e), e != null && ce(e));
      }),
      (t[14] = le))
    : (le = t[14]);
  let ue = le,
    de;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = () => {
        let e = p.current;
        e != null && ce(e);
      }),
      (t[15] = de))
    : (de = t[15]);
  let fe;
  (t[16] !== h || t[17] !== d
    ? ((fe = [h, d, ce]), (t[16] = h), (t[17] = d), (t[18] = fe))
    : (fe = t[18]),
    (0, z.useLayoutEffect)(de, fe));
  let pe;
  t[19] === u
    ? (pe = t[20])
    : ((pe = () => {
        let e = p.current;
        e != null &&
          (e.scrollTo({ behavior: u ? `auto` : `smooth`, top: 0 }),
          x(Ct(e, 0)));
      }),
      (t[19] = u),
      (t[20] = pe));
  let P = pe,
    me;
  t[21] !== k || t[22] !== u
    ? ((me = () => {
        let e = p.current;
        if (e == null) return;
        let t = ft(e, k);
        (e.scrollTo({ behavior: u ? `auto` : `smooth`, top: t }), x(Ct(e, t)));
      }),
      (t[21] = k),
      (t[22] = u),
      (t[23] = me))
    : (me = t[23]);
  let he = me,
    F;
  t[24] !== oe || t[25] !== u || t[26] !== P
    ? ((F = oe
        ? (0, Z.jsx)(ut, { prefersReducedMotion: u, onClick: P }, `latest`)
        : null),
      (t[24] = oe),
      (t[25] = u),
      (t[26] = P),
      (t[27] = F))
    : (F = t[27]);
  let I;
  t[28] === F
    ? (I = t[29])
    : ((I = (0, Z.jsx)(ae, { children: F })), (t[28] = F), (t[29] = I));
  let ge = n ? 1 : 0,
    _e = n || u ? 0 : 3,
    L;
  t[30] !== ge || t[31] !== _e
    ? ((L = { opacity: ge, y: _e }), (t[30] = ge), (t[31] = _e), (t[32] = L))
    : (L = t[32]);
  let B;
  t[33] === f
    ? (B = t[34])
    : ((B = f.formatMessage(Q.notificationList)), (t[33] = f), (t[34] = B));
  let ve = M && `vertical-scroll-fade-mask snap-y snap-mandatory`,
    ye;
  t[35] === ve
    ? (ye = t[36])
    : ((ye = v(
        `scrollbar-on-hover flex flex-col gap-1.5 overflow-y-auto px-1.5 pt-1 pb-0 [--edge-fade-distance:0.75rem]`,
        ve,
      )),
      (t[35] = ve),
      (t[36] = ye));
  let be;
  t[37] === d
    ? (be = t[38])
    : ((be = { maxHeight: d }), (t[37] = d), (t[38] = be));
  let xe;
  t[39] === u
    ? (xe = t[40])
    : ((xe = u ? { duration: 0 } : { duration: 0.16, ease: `easeOut` }),
      (t[39] = u),
      (t[40] = xe));
  let Se;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (e) => {
        let t = Ct(e.currentTarget);
        x((e) => (wt(e, t) ? e : t));
      }),
      (t[41] = Se))
    : (Se = t[41]);
  let V;
  t[42] !== E ||
  t[43] !== r ||
  t[44] !== i ||
  t[45] !== o ||
  t[46] !== s ||
  t[47] !== l ||
  t[48] !== c ||
  t[49] !== u
    ? ((V = r.map((e, t) =>
        (0, Z.jsx)(
          pt,
          {
            isReplying: E === e.id,
            notification: e,
            notificationIndex: t,
            onCloseReply: () => {
              C((t) => (t === e.id ? null : t));
            },
            onDismissNotification: i,
            onOpenReply: () => {
              (o?.(e), C(e.id));
            },
            onRunNotificationAction: s,
            onSubmitQuestionOption: c,
            onSubmitNotificationReply: l,
            prefersReducedMotion: u,
            replyInputRef: w,
          },
          e.id,
        ),
      )),
      (t[42] = E),
      (t[43] = r),
      (t[44] = i),
      (t[45] = o),
      (t[46] = s),
      (t[47] = l),
      (t[48] = c),
      (t[49] = u),
      (t[50] = V))
    : (V = t[50]);
  let H;
  t[51] !== L ||
  t[52] !== B ||
  t[53] !== ye ||
  t[54] !== be ||
  t[55] !== xe ||
  t[56] !== V
    ? ((H = (0, Z.jsx)(j.div, {
        ref: ue,
        animate: L,
        "aria-label": B,
        className: ye,
        "data-avatar-overlay-size": `notification-tray-list`,
        role: `list`,
        style: be,
        initial: !1,
        transition: xe,
        onScroll: Se,
        children: V,
      })),
      (t[51] = L),
      (t[52] = B),
      (t[53] = ye),
      (t[54] = be),
      (t[55] = xe),
      (t[56] = V),
      (t[57] = H))
    : (H = t[57]);
  let U;
  t[58] !== se || t[59] !== k || t[60] !== u || t[61] !== he
    ? ((U = se
        ? (0, Z.jsx)(
            dt,
            { count: k, prefersReducedMotion: u, onClick: he },
            `older`,
          )
        : null),
      (t[58] = se),
      (t[59] = k),
      (t[60] = u),
      (t[61] = he),
      (t[62] = U))
    : (U = t[62]);
  let W;
  t[63] === U
    ? (W = t[64])
    : ((W = (0, Z.jsx)(ae, { children: U })), (t[63] = U), (t[64] = W));
  let G;
  return (
    t[65] !== I || t[66] !== H || t[67] !== W
      ? ((G = (0, Z.jsxs)(`div`, {
          className: `relative`,
          children: [I, H, W],
        })),
        (t[65] = I),
        (t[66] = H),
        (t[67] = W),
        (t[68] = G))
      : (G = t[68]),
    G
  );
}
function ut(e) {
  let t = (0, R.c)(28),
    { onClick: n, prefersReducedMotion: r } = e,
    i = ee(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage(Q.showLatestNotifications)),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { opacity: 1, scale: 1, x: `-50%` }), (t[2] = o))
    : (o = t[2]);
  let s = r ? 1 : 0.96,
    c;
  t[3] === s
    ? (c = t[4])
    : ((c = { opacity: 0, scale: s, x: `-50%` }), (t[3] = s), (t[4] = c));
  let l = r ? 1 : 0.96,
    u;
  t[5] === l
    ? (u = t[6])
    : ((u = { opacity: 0, scale: l, x: `-50%` }), (t[5] = l), (t[6] = u));
  let d;
  t[7] === r
    ? (d = t[8])
    : ((d = r ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }),
      (t[7] = r),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = v(ot, `top-1 min-w-12`)), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === r
    ? (p = t[11])
    : ((p = r ? void 0 : { scale: 1.03 }), (t[10] = r), (t[11] = p));
  let m;
  t[12] === r
    ? (m = t[13])
    : ((m = r ? void 0 : { scale: 0.96 }), (t[12] = r), (t[13] = m));
  let h;
  t[14] === i
    ? (h = t[15])
    : ((h = i.formatMessage(Q.latestNotifications)), (t[14] = i), (t[15] = h));
  let g;
  t[16] === h
    ? (g = t[17])
    : ((g = (0, Z.jsx)(`span`, { children: h })), (t[16] = h), (t[17] = g));
  let _;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(ce, {
        className: `icon-2xs hidden -rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[18] = _))
    : (_ = t[18]);
  let y;
  return (
    t[19] !== n ||
    t[20] !== a ||
    t[21] !== m ||
    t[22] !== g ||
    t[23] !== c ||
    t[24] !== u ||
    t[25] !== d ||
    t[26] !== p
      ? ((y = (0, Z.jsxs)(j.button, {
          type: `button`,
          "aria-label": a,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: o,
          exit: c,
          initial: u,
          transition: d,
          className: f,
          whileHover: p,
          whileTap: m,
          onClick: n,
          children: [g, _],
        })),
        (t[19] = n),
        (t[20] = a),
        (t[21] = m),
        (t[22] = g),
        (t[23] = c),
        (t[24] = u),
        (t[25] = d),
        (t[26] = p),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function dt(e) {
  let t = (0, R.c)(36),
    { count: n, onClick: r, prefersReducedMotion: i } = e,
    a = ee(),
    o;
  t[0] !== n || t[1] !== a
    ? ((o = a.formatMessage(Q.showOlderNotifications, { count: n })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { opacity: 1, scale: 1, x: `-50%` }), (t[3] = s))
    : (s = t[3]);
  let c = i ? 1 : 0.96,
    l;
  t[4] === c
    ? (l = t[5])
    : ((l = { opacity: 0, scale: c, x: `-50%` }), (t[4] = c), (t[5] = l));
  let u = i ? 1 : 0.96,
    d;
  t[6] === u
    ? (d = t[7])
    : ((d = { opacity: 0, scale: u, x: `-50%` }), (t[6] = u), (t[7] = d));
  let f;
  t[8] === i
    ? (f = t[9])
    : ((f = i ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }),
      (t[8] = i),
      (t[9] = f));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = v(ot, `bottom-1 min-w-9`)), (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === i
    ? (m = t[12])
    : ((m = i ? void 0 : { scale: 1.03 }), (t[11] = i), (t[12] = m));
  let h;
  t[13] === i
    ? (h = t[14])
    : ((h = i ? void 0 : { scale: 0.96 }), (t[13] = i), (t[14] = h));
  let g;
  t[15] !== n || t[16] !== a
    ? ((g = a.formatMessage(Q.compactOlderNotificationCount, { count: n })),
      (t[15] = n),
      (t[16] = a),
      (t[17] = g))
    : (g = t[17]);
  let _;
  t[18] === g
    ? (_ = t[19])
    : ((_ = (0, Z.jsx)(`span`, {
        className: `group-hover:hidden group-focus:hidden`,
        children: g,
      })),
      (t[18] = g),
      (t[19] = _));
  let y;
  t[20] !== n || t[21] !== a
    ? ((y = a.formatMessage(Q.olderNotificationCount, { count: n })),
      (t[20] = n),
      (t[21] = a),
      (t[22] = y))
    : (y = t[22]);
  let b;
  t[23] === y
    ? (b = t[24])
    : ((b = (0, Z.jsx)(`span`, {
        className: `hidden group-hover:inline group-focus:inline`,
        children: y,
      })),
      (t[23] = y),
      (t[24] = b));
  let x;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(ce, {
        className: `icon-2xs hidden rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[25] = x))
    : (x = t[25]);
  let S;
  return (
    t[26] !== r ||
    t[27] !== o ||
    t[28] !== h ||
    t[29] !== _ ||
    t[30] !== b ||
    t[31] !== l ||
    t[32] !== d ||
    t[33] !== f ||
    t[34] !== m
      ? ((S = (0, Z.jsxs)(j.button, {
          type: `button`,
          "aria-label": o,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: s,
          exit: l,
          initial: d,
          transition: f,
          className: p,
          whileHover: m,
          whileTap: h,
          onClick: r,
          children: [_, b, x],
        })),
        (t[26] = r),
        (t[27] = o),
        (t[28] = h),
        (t[29] = _),
        (t[30] = b),
        (t[31] = l),
        (t[32] = d),
        (t[33] = f),
        (t[34] = m),
        (t[35] = S))
      : (S = t[35]),
    S
  );
}
function ft(e, t) {
  if (t <= $) return e.scrollHeight;
  let n = kt(e);
  return n[jt(n, At(e, n)) + $]?.offsetTop ?? e.scrollHeight;
}
function pt({
  isReplying: e,
  notification: t,
  notificationIndex: n,
  onDismissNotification: r,
  onCloseReply: i,
  onOpenReply: a,
  onRunNotificationAction: o,
  onSubmitQuestionOption: s,
  onSubmitNotificationReply: l,
  prefersReducedMotion: u,
  replyInputRef: d,
}) {
  let f = ee(),
    p = t.source === `local` ? t.localConversationId : null,
    m = x(c, p),
    h = m == null ? null : Xe(m.items, f),
    g = Ge(t),
    _ = f.formatMessage(g.labelMessage),
    y = h ?? t.body ?? f.formatMessage(g.fallbackBodyMessage),
    b = t.waitingRequest,
    S = b == null ? y : G(b, f),
    te = S.replace(/[.?!]+$/, ``),
    C = S === _ ? _ : `${_}. ${te}`,
    w =
      t.action == null
        ? `${t.title}. ${C}`
        : `${t.title}. ${C}. ${f.formatMessage(Q.openNotification)}`,
    T = t.action != null,
    [E, ne] = (0, z.useState)(!1),
    [D, re] = (0, z.useState)(!1),
    [O, A] = (0, z.useState)(``),
    [ae, oe] = (0, z.useState)(null),
    [M, N] = (0, z.useState)(!1),
    [le, ue] = (0, z.useState)(0),
    [de, fe] = (0, z.useState)(!1),
    pe = (0, z.useRef)(E),
    P = (0, z.useRef)(void 0),
    me = b == null ? nt : rt,
    he = (0, z.useCallback)((e) => {
      if ((P.current?.(), (P.current = void 0), e == null)) return;
      let t = () => {
        let t = e.scrollHeight;
        ue((e) => (e === t ? e : t));
        let n = Dt(e);
        fe((e) => {
          let t = (pe.current && e) || n;
          return e === t ? e : t;
        });
      };
      (t(), (P.current = H({ axis: `both`, target: e, onChange: t })));
    }, []);
  (0, z.useLayoutEffect)(() => {
    pe.current = E;
  }, [E]);
  let F = le > me + at || de,
    I = F && E && !e,
    ge = t.replyTarget != null && l != null,
    L = O.trim(),
    R = u
      ? { duration: 0 }
      : { duration: M ? 0.2 : 0.28, ease: [0.16, 1, 0.3, 1] },
    B = async (e) => {
      if (
        (e.preventDefault(), e.stopPropagation(), !(!ge || L.length === 0 || D))
      ) {
        (re(!0), oe(null));
        try {
          (await l(t, L), A(``), i());
        } catch {
          oe(f.formatMessage(Q.notificationReplyError));
        } finally {
          re(!1);
        }
      }
    };
  return (0, Z.jsx)(j.div, {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: u ? 0 : 4 },
    role: `listitem`,
    className: `group no-drag relative w-full snap-start scroll-mt-2 text-left`,
    "data-avatar-overlay-measure": `notification-tray-row`,
    transition: u
      ? { duration: 0 }
      : { delay: Math.min(n, 3) * tt, duration: 0.18, ease: `easeOut` },
    onBlurCapture: (e) => {
      let t = e.relatedTarget;
      (t instanceof Node && e.currentTarget.contains(t)) || N(!1);
    },
    onFocusCapture: () => {
      N(!0);
    },
    onPointerEnter: () => {
      N(!0);
    },
    onPointerLeave: () => {
      N(!1);
    },
    children: (0, Z.jsxs)(`div`, {
      className: v(
        `relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]`,
        T &&
          `transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-token-border/80 hover:bg-token-main-surface-primary hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-1px_0_rgba(0,0,0,0.1)] motion-reduce:transition-none`,
      ),
      children: [
        (0, Z.jsxs)(j.div, {
          role: T ? `button` : void 0,
          className: v(
            `block w-full min-w-0 px-3 py-1.5 text-left focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]`,
            T ? `cursor-interaction` : `cursor-default`,
          ),
          tabIndex: T ? 0 : void 0,
          transition: u ? { duration: 0 } : { duration: 0.12, ease: `easeOut` },
          whileTap: T && !u ? { scale: 0.995 } : void 0,
          "aria-label": T ? w : void 0,
          onClick: () => {
            T && o?.(t);
          },
          onKeyDown: (e) => {
            !T ||
              (e.key !== `Enter` && e.key !== ` `) ||
              (e.preventDefault(), o?.(t));
          },
          children: [
            (0, Z.jsx)(`span`, {
              className: `flex min-w-0 items-center pr-7`,
              children: (0, Z.jsx)(`span`, {
                className: `text-size-chat min-w-0 truncate leading-[17px] font-semibold text-token-foreground`,
                children: t.title,
              }),
            }),
            (0, Z.jsx)(j.div, {
              ref: he,
              animate: { maxHeight: I ? it : me },
              className: v(
                `text-size-chat-sm mt-0.5 overflow-hidden leading-4 text-token-foreground`,
                I ? `whitespace-pre-wrap` : b == null ? `line-clamp-2` : void 0,
              ),
              "data-avatar-overlay-measure-body": `true`,
              initial: !1,
              transition: u
                ? { duration: 0 }
                : { duration: 0.18, ease: `easeOut` },
              children:
                b == null
                  ? y
                  : (0, Z.jsx)(mt, {
                      isExpanded: I,
                      localConversationId: p,
                      request: b,
                      onRunNotificationAction: (e) => {
                        o?.(t, e);
                      },
                      onSubmitQuestionOption: (e) => {
                        s?.(t, e);
                      },
                    }),
            }),
          ],
        }),
        (0, Z.jsx)(`span`, {
          role: `img`,
          "aria-label":
            b?.kind === `question` ? f.formatMessage(Q.questionStatusIcon) : _,
          className: v(
            `pointer-events-none absolute top-1 right-1 z-0 flex size-6 items-center justify-center opacity-100`,
            F &&
              M &&
              `opacity-0 transition-opacity duration-150 motion-reduce:transition-none`,
          ),
          children:
            b?.kind === `question`
              ? (0, Z.jsx)(_e, { className: g.iconClassName })
              : Mt(g),
        }),
        F
          ? (0, Z.jsx)(j.div, {
              animate: { opacity: M ? 1 : 0, x: M ? 0 : 6 },
              className: v(
                `absolute top-1 right-1 z-10`,
                M ? `pointer-events-auto` : `pointer-events-none`,
              ),
              "data-avatar-overlay-control": `expand`,
              initial: !1,
              transition: R,
              children: (0, Z.jsx)(ie, {
                align: `end`,
                side: `top`,
                tooltipContent: f.formatMessage(
                  E
                    ? Q.collapseNotificationTooltip
                    : Q.expandNotificationTooltip,
                ),
                children: (0, Z.jsx)(k, {
                  className: v(`size-6`, st),
                  color: `ghost`,
                  size: `icon`,
                  "aria-expanded": E,
                  "aria-label": f.formatMessage(
                    E ? Q.collapseNotification : Q.expandNotification,
                    { title: t.title },
                  ),
                  onClick: () => {
                    ne((e) => !e);
                  },
                  children: (0, Z.jsx)(j.span, {
                    animate: { rotate: E ? 90 : 0 },
                    transition: u
                      ? { duration: 0 }
                      : { duration: 0.12, ease: `easeOut` },
                    children: (0, Z.jsx)(ce, { className: `icon-xs` }),
                  }),
                }),
              }),
            })
          : null,
        ge && !e
          ? (0, Z.jsx)(j.div, {
              animate: { opacity: M ? 1 : 0, x: M ? 0 : 6 },
              className: v(
                `no-drag absolute right-2 bottom-1 z-10`,
                M ? `pointer-events-auto` : `pointer-events-none`,
              ),
              "data-avatar-overlay-control": `reply`,
              initial: !1,
              transition: R,
              children: (0, Z.jsx)(`div`, {
                className: `flex justify-end pb-1`,
                children: (0, Z.jsx)(k, {
                  className: v(
                    `h-5 px-2 text-xs leading-none text-token-foreground shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)]`,
                    st,
                  ),
                  color: `outline`,
                  size: `default`,
                  "aria-label": f.formatMessage(Q.replyNotification, {
                    title: t.title,
                  }),
                  onClick: (e) => {
                    (e.stopPropagation(), oe(null), A(``), a(), N(!0));
                  },
                  onPointerDown: (e) => {
                    e.stopPropagation();
                  },
                  children: f.formatMessage(Q.replyNotificationButton),
                }),
              }),
            })
          : null,
        e
          ? (0, Z.jsxs)(j.form, {
              className: `no-drag mx-3 mb-2 border-t border-token-border/60 pt-2`,
              animate: { opacity: 1, y: 0 },
              initial: { opacity: 0, y: u ? 0 : -2 },
              transition: u
                ? { duration: 0 }
                : { duration: 0.16, ease: `easeOut` },
              onClick: (e) => {
                e.stopPropagation();
              },
              onPointerDown: (e) => {
                e.stopPropagation();
              },
              onSubmit: (e) => {
                B(e);
              },
              children: [
                (0, Z.jsxs)(`div`, {
                  className: `flex min-w-0 items-center gap-1.5`,
                  children: [
                    (0, Z.jsx)(`input`, {
                      ref: d,
                      className: `text-size-chat-sm h-6 min-w-0 flex-1 rounded-md border border-token-border bg-token-main-surface-primary px-2 text-token-foreground outline-none placeholder:text-token-text-tertiary focus:border-token-focus-border`,
                      "aria-label": f.formatMessage(Q.replyNotification, {
                        title: t.title,
                      }),
                      autoFocus: !0,
                      placeholder: f.formatMessage(
                        Q.notificationReplyPlaceholder,
                      ),
                      value: O,
                      onChange: (e) => {
                        (A(e.currentTarget.value), oe(null));
                      },
                      onKeyDown: (e) => {
                        e.key !== `Escape` ||
                          D ||
                          (e.stopPropagation(), i(), oe(null));
                      },
                    }),
                    (0, Z.jsx)(k, {
                      className: `h-6 px-2 text-xs`,
                      color: `primary`,
                      size: `default`,
                      type: `submit`,
                      "aria-label": f.formatMessage(Q.sendNotificationReply, {
                        title: t.title,
                      }),
                      disabled: L.length === 0 || D,
                      loading: D,
                      children: f.formatMessage(Q.replyNotificationButton),
                    }),
                  ],
                }),
                ae == null
                  ? null
                  : (0, Z.jsx)(`div`, {
                      className: `mt-1 text-[11px] leading-4 text-token-error-foreground`,
                      role: `alert`,
                      children: ae,
                    }),
              ],
            })
          : null,
        r
          ? (0, Z.jsx)(j.div, {
              animate: { opacity: M ? 1 : 0, x: M ? 0 : -6 },
              className: v(
                `absolute top-1 left-1 z-20`,
                M ? `pointer-events-auto` : `pointer-events-none`,
              ),
              "data-avatar-overlay-control": `dismiss`,
              initial: !1,
              transition: R,
              children: (0, Z.jsx)(ie, {
                align: `start`,
                side: `top`,
                tooltipContent: f.formatMessage(Q.dismissNotificationTooltip),
                children: (0, Z.jsx)(k, {
                  className: v(
                    `[&>svg]:!icon-xs size-6 shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] enabled:hover:!text-token-foreground`,
                    st,
                  ),
                  color: `outline`,
                  size: `icon`,
                  "aria-label": f.formatMessage(Q.dismissNotification, {
                    title: t.title,
                  }),
                  onClick: () => {
                    r(t);
                  },
                  children: (0, Z.jsx)(se, { className: `icon-xs` }),
                }),
              }),
            })
          : null,
      ],
    }),
  });
}
function mt(e) {
  let t = (0, R.c)(72),
    {
      isExpanded: n,
      localConversationId: r,
      onRunNotificationAction: i,
      onSubmitQuestionOption: a,
      request: o,
    } = e,
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (e) => {
        `questionOption` in e || i(e);
      }),
      (t[0] = i),
      (t[1] = s));
  let c = s;
  switch (o.kind) {
    case `question`: {
      let e = n ? `break-words whitespace-pre-wrap` : `truncate`,
        r;
      t[2] === e ? (r = t[3]) : ((r = v(`min-w-0`, e)), (t[2] = e), (t[3] = r));
      let s;
      t[4] !== o.prompt || t[5] !== r
        ? ((s = (0, Z.jsx)(`div`, { className: r, children: o.prompt })),
          (t[4] = o.prompt),
          (t[5] = r),
          (t[6] = s))
        : (s = t[6]);
      let c;
      t[7] === o.options
        ? (c = t[8])
        : ((c = o.options.map(ht)), (t[7] = o.options), (t[8] = c));
      let l;
      t[9] !== i || t[10] !== a
        ? ((l = (e) => {
            if (`questionOption` in e) {
              a?.(e.questionOption);
              return;
            }
            i(e);
          }),
          (t[9] = i),
          (t[10] = a),
          (t[11] = l))
        : (l = t[11]);
      let u;
      t[12] !== c || t[13] !== l
        ? ((u = (0, Z.jsx)(bt, { actions: c, onRunNotificationAction: l })),
          (t[12] = c),
          (t[13] = l),
          (t[14] = u))
        : (u = t[14]);
      let d;
      return (
        t[15] !== s || t[16] !== u
          ? ((d = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `question`,
              children: [s, u],
            })),
            (t[15] = s),
            (t[16] = u),
            (t[17] = d))
          : (d = t[17]),
        d
      );
    }
    case `patch`: {
      let e;
      t[18] !== n ||
      t[19] !== o.additions ||
      t[20] !== o.deletions ||
      t[21] !== o.fileCount ||
      t[22] !== o.files ||
      t[23] !== o.summary
        ? ((e = (0, Z.jsx)(vt, {
            additions: o.additions,
            deletions: o.deletions,
            fileCount: o.fileCount,
            files: o.files,
            isExpanded: n,
            summary: o.summary,
          })),
          (t[18] = n),
          (t[19] = o.additions),
          (t[20] = o.deletions),
          (t[21] = o.fileCount),
          (t[22] = o.files),
          (t[23] = o.summary),
          (t[24] = e))
        : (e = t[24]);
      let r;
      t[25] !== o.actions || t[26] !== c
        ? ((r = (0, Z.jsx)(bt, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[25] = o.actions),
          (t[26] = c),
          (t[27] = r))
        : (r = t[27]);
      let i;
      return (
        t[28] !== e || t[29] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `patch`,
              children: [e, r],
            })),
            (t[28] = e),
            (t[29] = r),
            (t[30] = i))
          : (i = t[30]),
        i
      );
    }
    case `plan`: {
      let e;
      return (
        t[31] !== n || t[32] !== r || t[33] !== o || t[34] !== c
          ? ((e = (0, Z.jsx)(gt, {
              isExpanded: n,
              localConversationId: r,
              onRunNotificationAction: c,
              request: o,
            })),
            (t[31] = n),
            (t[32] = r),
            (t[33] = o),
            (t[34] = c),
            (t[35] = e))
          : (e = t[35]),
        e
      );
    }
    case `exec`: {
      let e;
      t[36] !== n || t[37] !== o.summary
        ? ((e = (0, Z.jsx)(_t, { isExpanded: n, text: o.summary })),
          (t[36] = n),
          (t[37] = o.summary),
          (t[38] = e))
        : (e = t[38]);
      let r;
      t[39] !== o.actions || t[40] !== c
        ? ((r = (0, Z.jsx)(bt, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[39] = o.actions),
          (t[40] = c),
          (t[41] = r))
        : (r = t[41]);
      let i;
      return (
        t[42] !== e || t[43] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `exec`,
              children: [e, r],
            })),
            (t[42] = e),
            (t[43] = r),
            (t[44] = i))
          : (i = t[44]),
        i
      );
    }
    case `network`: {
      let e;
      t[45] !== n || t[46] !== o.target
        ? ((e = (0, Z.jsx)(_t, { isExpanded: n, text: o.target })),
          (t[45] = n),
          (t[46] = o.target),
          (t[47] = e))
        : (e = t[47]);
      let r;
      t[48] !== o.actions || t[49] !== c
        ? ((r = (0, Z.jsx)(bt, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[48] = o.actions),
          (t[49] = c),
          (t[50] = r))
        : (r = t[50]);
      let i;
      return (
        t[51] !== e || t[52] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `network`,
              children: [e, r],
            })),
            (t[51] = e),
            (t[52] = r),
            (t[53] = i))
          : (i = t[53]),
        i
      );
    }
    case `permission`: {
      let e;
      t[54] !== n || t[55] !== o.target
        ? ((e = (0, Z.jsx)(_t, { isExpanded: n, text: o.target })),
          (t[54] = n),
          (t[55] = o.target),
          (t[56] = e))
        : (e = t[56]);
      let r;
      t[57] !== o.actions || t[58] !== c
        ? ((r = (0, Z.jsx)(bt, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[57] = o.actions),
          (t[58] = c),
          (t[59] = r))
        : (r = t[59]);
      let i;
      return (
        t[60] !== e || t[61] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `permission`,
              children: [e, r],
            })),
            (t[60] = e),
            (t[61] = r),
            (t[62] = i))
          : (i = t[62]),
        i
      );
    }
    case `tool`: {
      let e = o.summary ?? o.target,
        r;
      t[63] !== n || t[64] !== e
        ? ((r = (0, Z.jsx)(_t, { isExpanded: n, text: e })),
          (t[63] = n),
          (t[64] = e),
          (t[65] = r))
        : (r = t[65]);
      let i;
      t[66] !== o.actions || t[67] !== c
        ? ((i = (0, Z.jsx)(bt, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[66] = o.actions),
          (t[67] = c),
          (t[68] = i))
        : (i = t[68]);
      let a;
      return (
        t[69] !== r || t[70] !== i
          ? ((a = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `tool`,
              children: [r, i],
            })),
            (t[69] = r),
            (t[70] = i),
            (t[71] = a))
          : (a = t[71]),
        a
      );
    }
  }
}
function ht(e, t) {
  return {
    label: e.label,
    tone: t === 0 ? `primary` : `secondary`,
    questionOption: e,
  };
}
function gt(e) {
  let t = (0, R.c)(20),
    {
      isExpanded: n,
      localConversationId: r,
      onRunNotificationAction: i,
      request: a,
    } = e,
    { getModeForSelection: o } = O(r),
    s,
    c,
    l,
    u;
  if (
    t[0] !== o ||
    t[1] !== n ||
    t[2] !== a.actions ||
    t[3] !== a.kind ||
    t[4] !== a.summary
  ) {
    let e = o(`default`);
    ((l = a.kind),
      t[9] !== n || t[10] !== a.summary
        ? ((u = (0, Z.jsx)(_t, { isExpanded: n, text: a.summary })),
          (t[9] = n),
          (t[10] = a.summary),
          (t[11] = u))
        : (u = t[11]),
      (s = bt),
      (c = a.actions.map((t) =>
        t.intent === `plan-start` ? { ...t, planStartCollaborationMode: e } : t,
      )),
      (t[0] = o),
      (t[1] = n),
      (t[2] = a.actions),
      (t[3] = a.kind),
      (t[4] = a.summary),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  } else ((s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]));
  let d;
  t[12] !== s || t[13] !== i || t[14] !== c
    ? ((d = (0, Z.jsx)(s, { actions: c, onRunNotificationAction: i })),
      (t[12] = s),
      (t[13] = i),
      (t[14] = c),
      (t[15] = d))
    : (d = t[15]);
  let f;
  return (
    t[16] !== l || t[17] !== u || t[18] !== d
      ? ((f = (0, Z.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-request": l,
          children: [u, d],
        })),
        (t[16] = l),
        (t[17] = u),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
function _t(e) {
  let t = (0, R.c)(5),
    { isExpanded: n, text: r } = e,
    i = n ? `break-words whitespace-pre-wrap` : `truncate whitespace-nowrap`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = v(`min-w-0 text-token-text-secondary`, i)), (t[0] = i), (t[1] = a));
  let o;
  return (
    t[2] !== a || t[3] !== r
      ? ((o = (0, Z.jsx)(`div`, {
          className: a,
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: r,
        })),
        (t[2] = a),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function vt(e) {
  let t = (0, R.c)(40),
    {
      additions: n,
      deletions: r,
      fileCount: i,
      files: a,
      isExpanded: o,
      summary: s,
    } = e,
    c = ee(),
    l;
  t[0] !== i || t[1] !== c
    ? ((l = c.formatMessage(Q.compactPatchFileCount, { count: i })),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== n || t[4] !== c
    ? ((d =
        n > 0 ? c.formatMessage(Q.compactPatchAdditions, { count: n }) : null),
      (t[3] = n),
      (t[4] = c),
      (t[5] = d))
    : (d = t[5]);
  let f = d,
    p;
  t[6] !== r || t[7] !== c
    ? ((p =
        r > 0 ? c.formatMessage(Q.compactPatchDeletions, { count: r }) : null),
      (t[6] = r),
      (t[7] = c),
      (t[8] = p))
    : (p = t[8]);
  let m = p;
  if (!o) {
    let e;
    t[9] === u
      ? (e = t[10])
      : ((e = (0, Z.jsx)(`span`, { children: u })), (t[9] = u), (t[10] = e));
    let n;
    t[11] === f
      ? (n = t[12])
      : ((n =
          f == null
            ? null
            : (0, Z.jsx)(`span`, {
                className: `ml-1.5 text-token-charts-green`,
                children: f,
              })),
        (t[11] = f),
        (t[12] = n));
    let r;
    t[13] === m
      ? (r = t[14])
      : ((r =
          m == null
            ? null
            : (0, Z.jsx)(`span`, {
                className: `ml-1.5 text-token-error-foreground`,
                children: m,
              })),
        (t[13] = m),
        (t[14] = r));
    let i;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Z.jsx)(pe, { className: `mx-1.5 text-token-text-tertiary` })),
        (t[15] = i))
      : (i = t[15]);
    let a;
    t[16] === s
      ? (a = t[17])
      : ((a = (0, Z.jsx)(`span`, { children: s })), (t[16] = s), (t[17] = a));
    let o;
    return (
      t[18] !== e || t[19] !== n || t[20] !== r || t[21] !== a
        ? ((o = (0, Z.jsxs)(`div`, {
            className: `min-w-0 truncate whitespace-nowrap text-token-text-secondary`,
            "data-avatar-overlay-compact-waiting-summary-text": `true`,
            children: [e, n, r, i, a],
          })),
          (t[18] = e),
          (t[19] = n),
          (t[20] = r),
          (t[21] = a),
          (t[22] = o))
        : (o = t[22]),
      o
    );
  }
  let h;
  t[23] === u
    ? (h = t[24])
    : ((h = (0, Z.jsx)(`span`, {
        className: `text-[11px] leading-4 text-token-text-secondary`,
        children: u,
      })),
      (t[23] = u),
      (t[24] = h));
  let g;
  t[25] === f
    ? (g = t[26])
    : ((g =
        f == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-charts-green`,
              children: f,
            })),
      (t[25] = f),
      (t[26] = g));
  let _;
  t[27] === m
    ? (_ = t[28])
    : ((_ =
        m == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-error-foreground`,
              children: m,
            })),
      (t[27] = m),
      (t[28] = _));
  let v;
  t[29] !== h || t[30] !== g || t[31] !== _
    ? ((v = (0, Z.jsxs)(`div`, {
        className: `mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5`,
        children: [h, g, _],
      })),
      (t[29] = h),
      (t[30] = g),
      (t[31] = _),
      (t[32] = v))
    : (v = t[32]);
  let y;
  t[33] === a ? (y = t[34]) : ((y = a.map(yt)), (t[33] = a), (t[34] = y));
  let b;
  t[35] === y
    ? (b = t[36])
    : ((b = (0, Z.jsx)(`div`, {
        className: `mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary`,
        children: y,
      })),
      (t[35] = y),
      (t[36] = b));
  let x;
  return (
    t[37] !== v || t[38] !== b
      ? ((x = (0, Z.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: [v, b],
        })),
        (t[37] = v),
        (t[38] = b),
        (t[39] = x))
      : (x = t[39]),
    x
  );
}
function yt(e) {
  return (0, Z.jsx)(
    `div`,
    { className: `leading-4 break-words`, children: e },
    e,
  );
}
function bt(e) {
  let t = (0, R.c)(7),
    { actions: n, onRunNotificationAction: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) =>
          (0, Z.jsx)(
            k,
            {
              className: `max-w-full min-w-0`,
              color: St(e.tone),
              size: `toolbar`,
              "aria-label": e.ariaLabel ?? e.label,
              title: e.ariaLabel ?? e.label,
              onClick: (t) => {
                (t.stopPropagation(), r(e));
              },
              onPointerDown: xt,
              children: (0, Z.jsx)(`span`, {
                className: `truncate`,
                children: e.label,
              }),
            },
            e.ariaLabel ?? e.label,
          )),
        (t[3] = r),
        (t[4] = e)),
      (i = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i
      ? (a = t[6])
      : ((a = (0, Z.jsx)(`div`, {
          className: `no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px`,
          children: i,
        })),
        (t[5] = i),
        (t[6] = a)),
    a
  );
}
function xt(e) {
  e.stopPropagation();
}
function St(e) {
  switch (e) {
    case `primary`:
      return `secondary`;
    case `danger`:
      return `danger`;
    case `secondary`:
      return `secondary`;
  }
}
function Ct(e, t = e.scrollTop) {
  if (!Et(e))
    return {
      hasScrollableContent: !1,
      hasLatestNotificationsAbove: !1,
      hiddenOlderNotificationCount: 0,
    };
  if (Tt(e, t))
    return {
      hasScrollableContent: !0,
      hasLatestNotificationsAbove: !0,
      hiddenOlderNotificationCount: 0,
    };
  let n = kt(e),
    r = At(e, n, t);
  return {
    hasScrollableContent: !0,
    hasLatestNotificationsAbove: t > et,
    hiddenOlderNotificationCount: Ot(e, n, r),
  };
}
function wt(e, t) {
  return (
    e.hasScrollableContent === t.hasScrollableContent &&
    e.hasLatestNotificationsAbove === t.hasLatestNotificationsAbove &&
    e.hiddenOlderNotificationCount === t.hiddenOlderNotificationCount
  );
}
function Tt(e, t = e.scrollTop) {
  let n = Math.max(0, e.scrollHeight - e.clientHeight);
  return Et(e) && t >= n - et;
}
function Et(e) {
  return e.scrollHeight > e.clientHeight + et;
}
function Dt(e) {
  return [e, ...Array.from(e.querySelectorAll(`*`))].some(
    (e) => e.clientWidth > 0 && e.scrollWidth > e.clientWidth + at,
  );
}
function Ot(e, t, n) {
  let r = n + e.clientHeight - et;
  return t.filter((e) => e.offsetTop + e.offsetHeight > r).length;
}
function kt(e) {
  return Array.from(e.children).filter((e) => e instanceof HTMLElement);
}
function At(e, t, n = e.scrollTop) {
  return n + (t[0]?.offsetTop ?? 0) + et;
}
function jt(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1) e[r].offsetTop <= t && (n = r);
  return n;
}
function Mt(e) {
  switch (e.iconType) {
    case `check-circle`:
      return (0, Z.jsx)(M, { className: e.iconClassName });
    case `clock`:
      return (0, Z.jsx)(ue, { className: e.iconClassName });
    case `spinner`:
      return (0, Z.jsx)(A, { className: e.iconClassName });
    case `warning`:
      return (0, Z.jsx)(fe, { className: e.iconClassName });
  }
}
var Nt = 192 / 208,
  Pt = `--codex-avatar-width`,
  Ft = 80,
  It = 224,
  Lt = o(`avatar-overlay-mascot-width-px`, null);
function Rt() {
  let e = (0, R.c)(7),
    [n, r] = t(Lt),
    i;
  e[0] === n
    ? (i = e[1])
    : ((i = n == null ? null : Bt(n)), (e[0] = n), (e[1] = i));
  let a;
  e[2] === r
    ? (a = e[3])
    : ((a = (e) => {
        r(Bt(e));
      }),
      (e[2] = r),
      (e[3] = a));
  let o;
  return (
    e[4] !== i || e[5] !== a
      ? ((o = { mascotWidthPx: i, setMascotWidthPx: a }),
        (e[4] = i),
        (e[5] = a),
        (e[6] = o))
      : (o = e[6]),
    o
  );
}
function zt(e) {
  if (e != null) return { [Pt]: `${Bt(e)}px` };
}
function Bt(e) {
  return Number.isFinite(e) ? Math.round(Math.min(It, Math.max(Ft, e))) : 112;
}
var Vt = 180 * 1e3,
  Ht = 3600 * 1e3,
  Ut = 1440 * 60 * 1e3,
  Wt = 10080 * 60 * 1e3,
  Gt = 8 * 1e3;
function Kt({
  dismissedNotificationTurnKeys: e,
  extraNotifications: t = [],
  nowMs: n = Date.now(),
  sessions: r,
}) {
  let i = t.flatMap((t) =>
    (t.expiresAtMs != null && n >= t.expiresAtMs) || e?.get(t.id) === t.turnKey
      ? []
      : [
          {
            expiresAtMs: t.expiresAtMs,
            key: t.id,
            notification: t,
            notificationPriority: 4,
            updatedAtMs: t.updatedAtMs,
          },
        ],
  );
  for (let t of r) {
    let r = Jt(t, n);
    r != null &&
      e?.get(r.notification.id) !== r.notification.turnKey &&
      i.push(r);
  }
  return {
    nextNotificationExpiresAtMs: i.reduce(
      (e, t) =>
        t.expiresAtMs == null || (e != null && e <= t.expiresAtMs)
          ? e
          : t.expiresAtMs,
      null,
    ),
    notifications: i.sort(Qt).map((e) => e.notification),
  };
}
function qt({ intl: e, petName: t, startedAtMs: n }) {
  return {
    action: null,
    body: e.formatMessage({
      id: `avatarOverlay.firstAwake.body`,
      defaultMessage: `I'm here to help keep your Codex sessions moving`,
      description: `Body of the temporary greeting shown when the floating Codex pet is first opened`,
    }),
    expiresAtMs: n + Gt,
    id: `first-awake`,
    isLoading: !1,
    kind: `first-awake`,
    level: `info`,
    localConversationId: null,
    replyTarget: null,
    source: `local`,
    title: e.formatMessage(
      {
        id: `avatarOverlay.firstAwake.title`,
        defaultMessage: `Hi, I'm {petName}`,
        description: `Title of the temporary greeting shown when the floating Codex pet is first opened`,
      },
      { petName: t },
    ),
    turnKey: null,
    updatedAtMs: n,
    waitingRequest: null,
  };
}
function Jt(e, t) {
  if (e.status === `idle`) return null;
  let n = Xt(e.status, e.updatedAtMs);
  return n != null && t >= n
    ? null
    : {
        expiresAtMs: n,
        key: e.key,
        notification: {
          action: { path: e.actionPath },
          body: e.subtitle,
          expiresAtMs: n,
          id: e.key,
          isLoading: e.status === `running`,
          kind: `session`,
          level: Zt(e.status),
          localConversationId: e.localConversationId,
          replyTarget:
            e.localConversationId == null
              ? null
              : { conversationId: e.localConversationId },
          source: e.source,
          title: Yt(e),
          turnKey: e.turnKey,
          updatedAtMs: e.updatedAtMs,
          waitingRequest: e.status === `waiting` ? e.waitingRequest : null,
        },
        notificationPriority: $t(e.status),
        updatedAtMs: e.updatedAtMs,
      };
}
function Yt(e) {
  return e.status !== `waiting` || e.waitingRequest == null
    ? e.title
    : Ce(e.title, e.waitingRequest);
}
function Xt(e, t) {
  switch (e) {
    case `running`:
      return t + Vt;
    case `failed`:
      return t + Ht;
    case `waiting`:
      return t + Ut;
    case `review`:
      return t + Wt;
    case `idle`:
      return null;
  }
}
function Zt(e) {
  switch (e) {
    case `waiting`:
      return `warning`;
    case `failed`:
      return `danger`;
    case `running`:
      return `info`;
    case `review`:
      return `success`;
    case `idle`:
      return `info`;
  }
}
function Qt(e, t) {
  let n = e.notificationPriority - t.notificationPriority;
  if (n !== 0) return n;
  let r = t.updatedAtMs - e.updatedAtMs;
  return r === 0 ? e.key.localeCompare(t.key) : r;
}
function $t(e) {
  switch (e) {
    case `waiting`:
      return 0;
    case `failed`:
      return 1;
    case `review`:
      return 2;
    case `running`:
      return 3;
    case `idle`:
      return 4;
  }
}
var en = 15e3,
  tn = `first-awake-pet-notification-avatar-ids`,
  nn = 4,
  rn = [`[data-avatar-overlay-hit-region]`, `[data-avatar-mascot='true']`],
  an = `.codex-avatar-root`,
  on = `[data-avatar-overlay-size='notification-tray']`,
  sn = `[data-avatar-overlay-size='notification-tray-header']`,
  cn = `[data-avatar-overlay-size='notification-tray-list']`,
  ln = `[data-avatar-overlay-measure='notification-tray-row']`,
  un = `codex-avatar-overlay-force-resize-cursor`,
  dn = [an, on, sn, cn, ln],
  fn = {
    mascot: { left: 244, top: 191, width: 112, height: 121 },
    placement: `top-end`,
    tray: { left: 80, top: 56, width: 276, height: 131 },
    viewport: { width: 356, height: 320 },
  };
function pn() {
  let e = (0, R.c)(9),
    { avatarOptions: t, isLoading: n, refetch: r } = I(),
    { selectedAvatar: i, selectedAvatarId: a } = he(t),
    o;
  e[0] !== i || e[1] !== a
    ? ((o = En(i, a)), (e[0] = i), (e[1] = a), (e[2] = o))
    : (o = e[2]);
  let s;
  return (
    e[3] !== n || e[4] !== r || e[5] !== i || e[6] !== a || e[7] !== o
      ? ((s = (0, Z.jsx)(
          mn,
          { isLoading: n, refetch: r, selectedAvatar: i, selectedAvatarId: a },
          o,
        )),
        (e[3] = n),
        (e[4] = r),
        (e[5] = i),
        (e[6] = a),
        (e[7] = o),
        (e[8] = s))
      : (s = e[8]),
    s
  );
}
function mn(e) {
  let t = (0, R.c)(146),
    { isLoading: o, refetch: c, selectedAvatar: u, selectedAvatarId: d } = e,
    f = ee(),
    p = ne(`451951815`),
    g = S(E),
    [_, v] = (0, z.useState)(fn),
    [b, x] = (0, z.useState)(null),
    [C, ie] = (0, z.useState)(!0),
    [O, k] = (0, z.useState)(!1),
    [A, j] = (0, z.useState)(!1),
    [ae, oe] = (0, z.useState)(!1),
    [se, M] = (0, z.useState)(null),
    { mascotWidthPx: N, setMascotWidthPx: ce } = Rt(),
    [le, ue] = (0, z.useState)(Cn),
    [de, fe] = (0, z.useState)(Sn),
    pe;
  t[0] !== u || t[1] !== d
    ? ((pe = () => Tn(u, d)), (t[0] = u), (t[1] = d), (t[2] = pe))
    : (pe = t[2]);
  let [P] = (0, z.useState)(pe),
    { data: he, refetch: F } = D(),
    I = he === void 0 ? [] : he,
    _e;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = { taskFilter: `current`, limit: 20 }), (t[3] = _e))
    : (_e = t[3]);
  let { data: L, refetch: B } = re(_e),
    ve = Ke({
      includeCompactWaitingRequests: p,
      intl: f,
      localConversations: I,
      remoteTasks: L === void 0 ? [] : L,
    }),
    ye =
      P == null
        ? null
        : qt({ intl: f, petName: P.petName, startedAtMs: P.startedAtMs }),
    { nextNotificationExpiresAtMs: V, notifications: H } = Kt({
      dismissedNotificationTurnKeys: le,
      extraNotifications: ye == null ? [] : [ye],
      nowMs: de,
      sessions: ve,
    }),
    U = He(H, f),
    W = ve.some(xn),
    G = ve.some(bn),
    Ce = (0, z.useRef)(null),
    we = (0, z.useRef)(null),
    Te = (0, z.useRef)(null),
    Ee = (0, z.useRef)(null),
    De = (0, z.useRef)(null),
    Oe = (0, z.useRef)(null),
    ke = (0, z.useRef)(null),
    Ae = (0, z.useRef)(null),
    je = (0, z.useRef)(!1),
    Me;
  t[4] !== W ||
  t[5] !== G ||
  t[6] !== C ||
  t[7] !== H.length ||
  t[8] !== g ||
  t[9] !== u
    ? ((Me = (e, t, n, r) => {
        let i = r === void 0 ? C : r;
        g.trackStructuredEvent(
          a,
          me({
            action: e,
            hasRunningCloudSession: G,
            hasRunningLocalSession: W,
            isNotificationTrayOpen: i,
            notification: n,
            notificationCount: H.length,
            selectedAvatar: u,
            source: t,
          }),
        );
      }),
      (t[4] = W),
      (t[5] = G),
      (t[6] = C),
      (t[7] = H.length),
      (t[8] = g),
      (t[9] = u),
      (t[10] = Me))
    : (Me = t[10]);
  let K = Me,
    Ne,
    Pe;
  (t[11] === P
    ? ((Ne = t[12]), (Pe = t[13]))
    : ((Ne = () => {
        if (P == null) return;
        let e = h(tn, []);
        e.includes(P.avatarId) || i(tn, [...e, P.avatarId]);
      }),
      (Pe = [P]),
      (t[11] = P),
      (t[12] = Ne),
      (t[13] = Pe)),
    (0, z.useEffect)(Ne, Pe));
  let Fe, Ie;
  (t[14] !== o || t[15] !== c || t[16] !== u.id || t[17] !== d
    ? ((Fe = () => {
        !o && d?.startsWith(`custom:`) && u.id !== d && c();
      }),
      (Ie = [o, c, u.id, d]),
      (t[14] = o),
      (t[15] = c),
      (t[16] = u.id),
      (t[17] = d),
      (t[18] = Fe),
      (t[19] = Ie))
    : ((Fe = t[18]), (Ie = t[19])),
    (0, z.useEffect)(Fe, Ie));
  let Le, Re;
  (t[20] !== g || t[21] !== K
    ? ((Le = () => {
        je.current ||
          (g !== T &&
            ((je.current = !0),
            K(
              r.CODEX_AVATAR_OVERLAY_ACTION_OPENED,
              m.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
            )));
      }),
      (Re = [g, K]),
      (t[20] = g),
      (t[21] = K),
      (t[22] = Le),
      (t[23] = Re))
    : ((Le = t[22]), (Re = t[23])),
    (0, z.useEffect)(Le, Re));
  let ze;
  (t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = {
        interactiveRegionRef: ke,
        isPaused: () => Ce.current != null || we.current != null,
        onInteractiveChange: yn,
        regionElementSelectors: rn,
      }),
      (t[24] = ze))
    : (ze = t[24]),
    ge(ze));
  let Be;
  t[25] !== C || t[26] !== H.length
    ? ((Be = () => {
        if (we.current != null || De.current != null) return;
        let e = kn(ke.current);
        if (e == null) return;
        let t = { ...e, isTrayVisible: C && H.length > 0 };
        Nn(Ae.current, t) ||
          ((Ae.current = t),
          w.dispatchMessage(`avatar-overlay-element-size-changed`, {
            isTrayVisible: t.isTrayVisible,
            mascot: t.mascot,
            tray: t.tray,
          }));
      }),
      (t[25] = C),
      (t[26] = H.length),
      (t[27] = Be))
    : (Be = t[27]);
  let q = Be,
    Ve;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = () => {
        Oe.current != null &&
          (window.clearTimeout(Oe.current), (Oe.current = null));
      }),
      (t[28] = Ve))
    : (Ve = t[28]);
  let J = Ve,
    Ue;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = () => {
        (Te.current != null &&
          (window.cancelAnimationFrame(Te.current), (Te.current = null)),
          (Ee.current = null));
      }),
      (t[29] = Ue))
    : (Ue = t[29]);
  let We = Ue,
    Ge;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (e) => {
        ((Ee.current = e),
          (Te.current ??= window.requestAnimationFrame(() => {
            Te.current = null;
            let e = Ee.current;
            ((Ee.current = null),
              !(e == null || we.current == null) &&
                w.dispatchMessage(`avatar-overlay-mascot-resize-move`, {
                  width: e,
                }));
          })));
      }),
      (t[30] = Ge))
    : (Ge = t[30]);
  let Y = Ge,
    qe;
  t[31] === q
    ? (qe = t[32])
    : ((qe = (e) => {
        ((De.current = e),
          J(),
          (Oe.current = window.setTimeout(() => {
            ((Oe.current = null), (De.current = null), M(null), q());
          }, 100)));
      }),
      (t[31] = q),
      (t[32] = qe));
  let Je = qe,
    Ye;
  t[33] === N
    ? (Ye = t[34])
    : ((Ye = () =>
        jn(ke.current?.querySelector(an) ?? null)?.width ?? N ?? 112),
      (t[33] = N),
      (t[34] = Ye));
  let Xe = Ye,
    Ze;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (e, t) => {
        let n = we.current;
        n == null ||
          n.pointerId !== e ||
          ((we.current = null),
          j(!1),
          t?.hasPointerCapture?.(e) && t.releasePointerCapture?.(e));
      }),
      (t[35] = Ze))
    : (Ze = t[35]);
  let Qe = Ze,
    $e;
  t[36] !== ce || t[37] !== Je
    ? (($e = (e, t) => {
        let n = we.current;
        if (n == null || n.pointerId !== e) return;
        let r = t == null ? n.currentWidthPx : wn(n, t);
        ((n.currentWidthPx = r),
          We(),
          M(r),
          ce(r),
          Je(r),
          w.dispatchMessage(`avatar-overlay-mascot-resize-end`, { width: r }));
      }),
      (t[36] = ce),
      (t[37] = Je),
      (t[38] = $e))
    : ($e = t[38]);
  let X = $e,
    Q;
  t[39] === K
    ? (Q = t[40])
    : ((Q = (e, t) => {
        let { releaseSample: n, shouldOpenMainWindow: i } = t,
          a = Ce.current;
        if (a == null || a.pointerId !== e) return;
        ((Ce.current = null), k(!1), x(null));
        let o = n == null ? null : xe(a, n);
        (ke.current?.hasPointerCapture?.(e) &&
          ke.current.releasePointerCapture?.(e),
          i &&
            a.startedOnMascot &&
            !a.hasMoved &&
            (K(
              r.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
              m.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
            w.dispatchMessage(`open-current-main-window`, {})),
          w.dispatchMessage(`avatar-overlay-drag-end`, {}),
          a.hasMoved &&
            K(
              r.CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED,
              m.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
          o != null &&
            w.dispatchMessage(`avatar-overlay-drag-release`, {
              velocityX: o.x,
              velocityY: o.y,
            }));
      }),
      (t[39] = K),
      (t[40] = Q));
  let $ = Q,
    et;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((et = (e) => {
        e.button !== 0 ||
          !(e.target instanceof Element) ||
          e.target.closest(`.no-drag`) != null ||
          (e.preventDefault(),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          (Ce.current = {
            startedOnMascot:
              e.target.closest(`[data-avatar-mascot="true"]`) != null,
            hasMoved: !1,
            pointerId: e.pointerId,
            samples: [be(e)],
            screenX: e.screenX,
            screenY: e.screenY,
          }),
          w.dispatchMessage(`avatar-overlay-drag-start`, {
            pointerWindowX: e.clientX,
            pointerWindowY: e.clientY,
          }),
          k(!0),
          x(null));
      }),
      (t[41] = et))
    : (et = t[41]);
  let tt = et,
    nt;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = (e) => {
        let t = Ce.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        let n = be(e);
        t.samples = Se([...t.samples, n]);
        let r = n.screenX - t.screenX,
          i = n.screenY - t.screenY;
        (Math.abs(r) < nn && Math.abs(i) < nn) ||
          ((t.hasMoved = !0),
          (t.screenX = n.screenX),
          (t.screenY = n.screenY),
          x((e) => On({ currentDragState: e, deltaX: r })),
          w.dispatchMessage(`avatar-overlay-drag-move`, {}));
      }),
      (t[42] = nt))
    : (nt = t[42]);
  let rt = nt,
    it;
  t[43] === $
    ? (it = t[44])
    : ((it = (e) => {
        $(e.pointerId, { releaseSample: be(e), shouldOpenMainWindow: !0 });
      }),
      (t[43] = $),
      (t[44] = it));
  let at = it,
    ot;
  t[45] === $
    ? (ot = t[46])
    : ((ot = (e) => {
        $(e.pointerId, { shouldOpenMainWindow: !1 });
      }),
      (t[45] = $),
      (t[46] = ot));
  let st = ot,
    lt;
  t[47] === $
    ? (lt = t[48])
    : ((lt = (e) => {
        $(e.pointerId, { shouldOpenMainWindow: !1 });
      }),
      (t[47] = $),
      (t[48] = lt));
  let ut = lt,
    dt;
  t[49] === Xe
    ? (dt = t[50])
    : ((dt = (e) => {
        if (e.button !== 0) return;
        (e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.setPointerCapture?.(e.pointerId));
        let t = Xe();
        (J(),
          We(),
          (De.current = null),
          (we.current = {
            currentWidthPx: t,
            pointerId: e.pointerId,
            startScreenX: e.screenX,
            startWidthPx: t,
          }),
          M(t),
          j(!0),
          w.dispatchMessage(`avatar-overlay-mascot-resize-start`, {
            width: t,
          }));
      }),
      (t[49] = Xe),
      (t[50] = dt));
  let ft = dt,
    pt;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (e) => {
        let t = we.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        (e.preventDefault(), e.stopPropagation());
        let n = wn(t, e.screenX);
        ((t.currentWidthPx = n), M(n), Y(n));
      }),
      (t[51] = pt))
    : (pt = t[51]);
  let mt = pt,
    ht;
  t[52] === X
    ? (ht = t[53])
    : ((ht = (e) => {
        (X(e.pointerId, e.screenX), Qe(e.pointerId, e.currentTarget));
      }),
      (t[52] = X),
      (t[53] = ht));
  let gt = ht,
    _t;
  t[54] === X
    ? (_t = t[55])
    : ((_t = (e) => {
        (e.stopPropagation(), X(e.pointerId), Qe(e.pointerId, e.currentTarget));
      }),
      (t[54] = X),
      (t[55] = _t));
  let vt = _t,
    yt;
  t[56] === X
    ? (yt = t[57])
    : ((yt = (e) => {
        (X(e.pointerId), Qe(e.pointerId));
      }),
      (t[56] = X),
      (t[57] = yt));
  let bt = yt,
    xt;
  t[58] !== F || t[59] !== K
    ? ((xt = (e, t) => {
        let i = e.waitingRequest;
        if (e.localConversationId != null && t != null) {
          let r = e.localConversationId;
          bb273: switch (t.intent) {
            case `command-approval`:
              if (
                t.commandDecision != null &&
                (i?.kind === `exec` || i?.kind === `network`)
              ) {
                l(`reply-with-command-execution-approval-decision`, {
                  conversationId: r,
                  requestId: i.requestId,
                  decision: t.commandDecision,
                }).then(() => {
                  F();
                });
                return;
              }
              break bb273;
            case `file-approval`:
              if (t.fileDecision != null && i?.kind === `patch`) {
                l(`reply-with-file-change-approval-decision`, {
                  conversationId: r,
                  requestId: i.requestId,
                  decision: t.fileDecision,
                }).then(() => {
                  F();
                });
                return;
              }
              break bb273;
            case `permission-response`:
              if (t.permissionResponse != null && i?.kind === `permission`) {
                l(`reply-with-permissions-request-approval-response`, {
                  conversationId: r,
                  requestId: i.requestId,
                  response: t.permissionResponse,
                }).then(() => {
                  F();
                });
                return;
              }
              break bb273;
            case `mcp-elicitation`:
              if (t.mcpElicitationAction != null && i?.kind === `tool`) {
                l(`reply-with-mcp-server-elicitation-response`, {
                  conversationId: r,
                  requestId: i.requestId,
                  response: n(t.mcpElicitationAction),
                }).then(() => {
                  F();
                });
                return;
              }
              break bb273;
            case `plan-start`:
              if (i?.kind === `plan` && t.planStartCollaborationMode != null) {
                l(`set-latest-collaboration-mode-for-conversation`, {
                  conversationId: r,
                  collaborationMode: t.planStartCollaborationMode,
                })
                  .then(() =>
                    l(`remove-plan-implementation-request`, {
                      conversationId: r,
                      turnId: i.turnId,
                    }),
                  )
                  .then(() =>
                    l(`send-follow-up-message`, {
                      conversationId: r,
                      prompt: `${s}\n${i.planContent}`,
                    }),
                  )
                  .then(() => {
                    F();
                  });
                return;
              }
              break bb273;
            case `open`:
          }
        }
        (t != null && t.intent !== `open`) ||
          (e.action != null &&
            (K(
              r.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
              m.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
              e,
            ),
            w.dispatchMessage(`open-in-main-window`, { path: e.action.path })));
      }),
      (t[58] = F),
      (t[59] = K),
      (t[60] = xt))
    : (xt = t[60]);
  let St = xt,
    Ct;
  t[61] === F
    ? (Ct = t[62])
    : ((Ct = (e, t) => {
        let n = e.waitingRequest;
        e.localConversationId == null ||
          n?.kind !== `question` ||
          l(`reply-with-user-input-response`, {
            conversationId: e.localConversationId,
            requestId: n.requestId,
            response: { answers: { [t.questionId]: { answers: [t.label] } } },
          }).then(() => {
            F();
          });
      }),
      (t[61] = F),
      (t[62] = Ct));
  let wt = Ct,
    Tt;
  t[63] === K
    ? (Tt = t[64])
    : ((Tt = (e) => {
        (K(
          r.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
          m.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          e,
        ),
          ue((t) => {
            if (t.get(e.id) === e.turnKey) return t;
            let n = new Map(t);
            return (n.set(e.id, e.turnKey), n);
          }));
      }),
      (t[63] = K),
      (t[64] = Tt));
  let Et = Tt,
    Dt;
  t[65] === K
    ? (Dt = t[66])
    : ((Dt = async (e, t) => {
        if (e.replyTarget == null) return;
        let n = t.trim();
        n.length !== 0 &&
          (K(
            r.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
            m.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
            e,
          ),
          await l(`send-follow-up-message`, {
            conversationId: e.replyTarget.conversationId,
            prompt: n,
          }));
      }),
      (t[65] = K),
      (t[66] = Dt));
  let Ot = Dt,
    kt = vn,
    At,
    jt;
  (t[67] === q
    ? ((At = t[68]), (jt = t[69]))
    : ((At = (e) => {
        let { layout: t } = e;
        (v(t),
          De.current === t.mascot.width &&
            ((De.current = null),
            J(),
            M(null),
            window.requestAnimationFrame(q)));
      }),
      (jt = [J, q]),
      (t[67] = q),
      (t[68] = At),
      (t[69] = jt)),
    te(`avatar-overlay-layout-changed`, At, jt));
  let Mt, Pt;
  (t[70] !== ae || t[71] !== A
    ? ((Mt = () => {
        let e = ae || A;
        return (
          document.documentElement.classList.toggle(un, e),
          document.body.classList.toggle(un, e),
          _n
        );
      }),
      (Pt = [ae, A]),
      (t[70] = ae),
      (t[71] = A),
      (t[72] = Mt),
      (t[73] = Pt))
    : ((Mt = t[72]), (Pt = t[73])),
    (0, z.useLayoutEffect)(Mt, Pt));
  let Ft, It;
  (t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ft = () => () => {
        (J(), We());
      }),
      (It = [We, J]),
      (t[74] = Ft),
      (t[75] = It))
    : ((Ft = t[74]), (It = t[75])),
    (0, z.useEffect)(Ft, It));
  let Lt, Bt;
  (t[76] !== X || t[77] !== $
    ? ((Lt = () => {
        let e = (e) => {
            ($(e.pointerId, { releaseSample: be(e), shouldOpenMainWindow: !0 }),
              X(e.pointerId, e.screenX),
              Qe(e.pointerId));
          },
          t = (e) => {
            ($(e.pointerId, { shouldOpenMainWindow: !1 }),
              X(e.pointerId),
              Qe(e.pointerId));
          };
        return (
          window.addEventListener(`pointerup`, e),
          window.addEventListener(`pointercancel`, t),
          () => {
            (window.removeEventListener(`pointerup`, e),
              window.removeEventListener(`pointercancel`, t));
          }
        );
      }),
      (Bt = [X, $, Qe]),
      (t[76] = X),
      (t[77] = $),
      (t[78] = Lt),
      (t[79] = Bt))
    : ((Lt = t[78]), (Bt = t[79])),
    (0, z.useEffect)(Lt, Bt));
  let Vt;
  t[80] === q
    ? (Vt = t[81])
    : ((Vt = () => {
        let e = null,
          t = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), q());
            });
          },
          n = new ResizeObserver(t),
          r = ke.current;
        if (r != null) {
          n.observe(r);
          for (let e of An(r)) n.observe(e);
        }
        return (
          window.addEventListener(`resize`, t),
          t(),
          () => {
            (e != null && window.cancelAnimationFrame(e),
              n.disconnect(),
              window.removeEventListener(`resize`, t));
          }
        );
      }),
      (t[80] = q),
      (t[81] = Vt));
  let Ht;
  (t[82] !== U || t[83] !== q || t[84] !== u.id
    ? ((Ht = [q, u.id, U]),
      (t[82] = U),
      (t[83] = q),
      (t[84] = u.id),
      (t[85] = Ht))
    : (Ht = t[85]),
    (0, z.useLayoutEffect)(Vt, Ht));
  let Ut;
  t[86] === q
    ? (Ut = t[87])
    : ((Ut = () => {
        q();
      }),
      (t[86] = q),
      (t[87] = Ut));
  let Wt;
  (t[88] !== C || t[89] !== N || t[90] !== U || t[91] !== q || t[92] !== u.id
    ? ((Wt = [C, q, u.id, U, N]),
      (t[88] = C),
      (t[89] = N),
      (t[90] = U),
      (t[91] = q),
      (t[92] = u.id),
      (t[93] = Wt))
    : (Wt = t[93]),
    (0, z.useLayoutEffect)(Ut, Wt));
  let Gt, Jt;
  (t[94] === V
    ? ((Gt = t[95]), (Jt = t[96]))
    : ((Gt = () => {
        if (V == null) return;
        let e = Math.max(0, V - Date.now()),
          t = window.setTimeout(() => {
            fe(gn);
          }, e);
        return () => {
          window.clearTimeout(t);
        };
      }),
      (Jt = [V]),
      (t[94] = V),
      (t[95] = Gt),
      (t[96] = Jt)),
    (0, z.useEffect)(Gt, Jt));
  let Yt, Xt;
  (t[97] !== W || t[98] !== G || t[99] !== F || t[100] !== B
    ? ((Yt = () => {
        if (!W && !G) return;
        let e = window.setTimeout(() => {
          (fe(hn), W && F(), G && B());
        }, en);
        return () => {
          window.clearTimeout(e);
        };
      }),
      (Xt = [W, G, F, B]),
      (t[97] = W),
      (t[98] = G),
      (t[99] = F),
      (t[100] = B),
      (t[101] = Yt),
      (t[102] = Xt))
    : ((Yt = t[101]), (Xt = t[102])),
    (0, z.useEffect)(Yt, Xt));
  let Zt;
  t[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Zt = y({
        id: `petOverlay.closePet`,
        defaultMessage: `Close pet`,
        description: `Context menu item that closes the floating Codex pet`,
      })),
      (t[103] = Zt))
    : (Zt = t[103]);
  let Qt;
  t[104] === K
    ? (Qt = t[105])
    : ((Qt = [
        {
          id: `close-avatar`,
          message: Zt,
          onSelect: () => {
            (K(
              r.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              m.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            ),
              w.dispatchMessage(`avatar-overlay-open`, {}));
          },
        },
      ]),
      (t[104] = K),
      (t[105] = Qt));
  let $t;
  t[106] !== A || t[107] !== _.mascot || t[108] !== se
    ? (($t =
        A && se != null
          ? { ..._.mascot, height: Math.ceil(se / Nt), width: se }
          : _.mascot),
      (t[106] = A),
      (t[107] = _.mascot),
      (t[108] = se),
      (t[109] = $t))
    : ($t = t[109]);
  let on, sn;
  t[110] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((on = () => {
        oe(!0);
      }),
      (sn = () => {
        oe(!1);
      }),
      (t[110] = on),
      (t[111] = sn))
    : ((on = t[110]), (sn = t[111]));
  let cn;
  t[112] !== bt || t[113] !== vt || t[114] !== ft || t[115] !== gt
    ? ((cn = {
        onLostPointerCapture: bt,
        onPointerCancel: vt,
        onPointerDown: ft,
        onPointerEnter: on,
        onPointerLeave: sn,
        onPointerMove: mt,
        onPointerUp: gt,
      }),
      (t[112] = bt),
      (t[113] = vt),
      (t[114] = ft),
      (t[115] = gt),
      (t[116] = cn))
    : (cn = t[116]);
  let ln = se ?? N,
    dn;
  t[117] === ln ? (dn = t[118]) : ((dn = zt(ln)), (t[117] = ln), (t[118] = dn));
  let pn;
  t[119] === K
    ? (pn = t[120])
    : ((pn = () => {
        (K(
          r.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
          m.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !1,
        ),
          ie(!1));
      }),
      (t[119] = K),
      (t[120] = pn));
  let mn;
  t[121] === K
    ? (mn = t[122])
    : ((mn = (e) => {
        K(
          r.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED,
          m.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          e,
        );
      }),
      (t[121] = K),
      (t[122] = mn));
  let En;
  t[123] === K
    ? (En = t[124])
    : ((En = () => {
        (K(
          r.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
          m.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !0,
        ),
          ie(!0));
      }),
      (t[123] = K),
      (t[124] = En));
  let Dn;
  return (
    t[125] !== Et ||
    t[126] !== ut ||
    t[127] !== st ||
    t[128] !== at ||
    t[129] !== St ||
    t[130] !== Ot ||
    t[131] !== wt ||
    t[132] !== O ||
    t[133] !== C ||
    t[134] !== _ ||
    t[135] !== b ||
    t[136] !== H ||
    t[137] !== u ||
    t[138] !== Qt ||
    t[139] !== $t ||
    t[140] !== cn ||
    t[141] !== dn ||
    t[142] !== pn ||
    t[143] !== mn ||
    t[144] !== En
      ? ((Dn = (0, Z.jsx)(ct, {
          avatar: u,
          avatarMenuItems: Qt,
          interactiveRegionRef: ke,
          isDragging: O,
          isNotificationTrayOpen: C,
          layout: _,
          mascotDragState: b,
          mascotLayout: $t,
          mascotResizeHandle: cn,
          mascotStyle: dn,
          notifications: H,
          onCloseNotificationTray: pn,
          onLostPointerCapture: ut,
          onPointerCancel: st,
          onPointerDown: tt,
          onPointerMove: rt,
          onPointerUp: at,
          onDismissNotification: Et,
          onNotificationReplyEditorActiveChange: kt,
          onOpenNotificationReply: mn,
          onRunNotificationAction: St,
          onSubmitQuestionOption: wt,
          onSubmitNotificationReply: Ot,
          onOpenNotificationTray: En,
        })),
        (t[125] = Et),
        (t[126] = ut),
        (t[127] = st),
        (t[128] = at),
        (t[129] = St),
        (t[130] = Ot),
        (t[131] = wt),
        (t[132] = O),
        (t[133] = C),
        (t[134] = _),
        (t[135] = b),
        (t[136] = H),
        (t[137] = u),
        (t[138] = Qt),
        (t[139] = $t),
        (t[140] = cn),
        (t[141] = dn),
        (t[142] = pn),
        (t[143] = mn),
        (t[144] = En),
        (t[145] = Dn))
      : (Dn = t[145]),
    Dn
  );
}
function hn(e) {
  return Math.max(Date.now(), e + 1);
}
function gn(e) {
  return Math.max(Date.now(), e + 1);
}
function _n() {
  (document.documentElement.classList.remove(un),
    document.body.classList.remove(un));
}
function vn(e) {
  w.dispatchMessage(`avatar-overlay-keyboard-interaction-changed`, {
    isInteractive: e,
  });
}
function yn(e) {
  w.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, {
    isInteractive: e,
  });
}
function bn(e) {
  return e.source === `cloud` && e.status === `running`;
}
function xn(e) {
  return e.source !== `cloud` && e.status === `running`;
}
function Sn() {
  return Date.now();
}
function Cn() {
  return new Map();
}
function wn(e, t) {
  return Bt(e.startWidthPx + t - e.startScreenX);
}
function Tn(e, t) {
  return Dn(e, t) || h(tn, []).includes(e.id)
    ? null
    : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() };
}
function En(e, t) {
  return Dn(e, t) ? `pending-custom-avatar` : `ready`;
}
function Dn(e, t) {
  return t?.startsWith(`custom:`) === !0 && e.id !== t;
}
function On({ currentDragState: e, deltaX: t }) {
  return t >= nn ? `running-right` : t <= -nn ? `running-left` : e;
}
function kn(e) {
  if (e == null) return null;
  let t = jn(e.querySelector(an)),
    n = Mn(e.querySelector(on));
  return t == null ? null : { mascot: t, tray: n };
}
function An(e) {
  return Array.from(e.querySelectorAll(dn.join(`, `)));
}
function jn(e) {
  if (e == null || Fn(e)) return null;
  let t = e.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { width: Math.ceil(t.width), height: Math.ceil(t.height) };
}
function Mn(e) {
  if (e == null || Fn(e)) return null;
  let t = e.getBoundingClientRect();
  if (t.width <= 0 || t.height <= 0) return null;
  let n = Math.ceil(e.offsetWidth > 0 ? e.offsetWidth : t.width),
    r = e.querySelector(sn),
    i = e.querySelector(cn);
  return r == null || i == null
    ? { width: n, height: Math.ceil(t.height) }
    : {
        width: n,
        height: Math.ceil(r.getBoundingClientRect().height + i.scrollHeight),
      };
}
function Nn(e, t) {
  return (
    e != null &&
    e.isTrayVisible === t.isTrayVisible &&
    e.mascot.width === t.mascot.width &&
    e.mascot.height === t.mascot.height &&
    Pn(e.tray, t.tray)
  );
}
function Pn(e, t) {
  return (
    e === t ||
    (e != null && t != null && e.width === t.width && e.height === t.height)
  );
}
function Fn(e) {
  return window.getComputedStyle(e).display === `none`;
}
export { pn as AvatarOverlayPage };
//# sourceMappingURL=avatar-overlay-page.js.map
