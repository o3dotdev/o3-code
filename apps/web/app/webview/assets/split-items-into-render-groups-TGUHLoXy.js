import { s as e } from "./chunk-Bj-mKKzh.js";
import { Hi as t, qi as n } from "./src-C.js";
import {
  Ha as r,
  Ks as i,
  cr as a,
  dr as o,
  kr as s,
  lr as c,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { t as l } from "./jsx-runtime.js";
import { t as u } from "./clsx-BcPLHiun.js";
import { U as d, V as f } from "./setting-storage.js";
import "./thread-detail-level.js";
import {
  _ as p,
  a as m,
  c as h,
  i as g,
  l as _,
  o as v,
  r as y,
  s as b,
  t as x,
  v as S,
} from "./app-server-dynamic-tools-BARsY_O-.js";
import { t as C } from "./thinking-shimmer.js";
import { t as w } from "./settings.cog.js";
import { t as T } from "./codex-BjFeJtxQ.js";
import { o as E } from "./mcp-tool-item-content-utils.js";
function D({ apps: e, functionName: t, serverName: n, toolName: r }) {
  let i = k(n),
    a = k(r),
    o = t
      .split(`__`)
      .map(k)
      .filter((e) => e.length > 0);
  for (let t of e) {
    let e = O(t);
    if (
      e.some((e) => A(e, i)) ||
      e.some((e) => j(a, e)) ||
      o.some((t) => e.some((e) => j(t, e)))
    )
      return t;
  }
  return null;
}
function O(e) {
  let t = [
    k(e.name),
    k(e.id),
    k(e.id.replace(/^connector[_-]/i, ``)),
    ...(e.pluginDisplayNames ?? []).map(k),
  ];
  return t.filter((e, n) =>
    e.length === 0 ? !1 : t.findIndex((t) => A(t, e)) === n,
  );
}
function k(e) {
  return e
    .trim()
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter((e) => e.length > 0);
}
function A(e, t) {
  return e.length === t.length ? e.every((e, n) => e === t[n]) : !1;
}
function j(e, t) {
  return t.length === 0 || e.length < t.length
    ? !1
    : t.every((t, n) => t === e[n]);
}
function M({ summary: e, cwd: t }) {
  return N({ summary: e, cwd: t })?.isSkillDefinitionFile === !0;
}
function ee({
  summary: e,
  cwd: t,
  intl: n,
  threadDetailLevel: r,
  formatSearchQuery: i,
}) {
  let a = N({ summary: e, cwd: t });
  if (!a) return null;
  switch (e.type) {
    case `read`:
      return a.isSkillDefinitionFile
        ? r === `STEPS_PROSE`
          ? te({ skillName: a.skillName, isFinished: e.isFinished, intl: n })
          : n.formatMessage(
              {
                id: `localConversationTurn.exploration.skill.definition.read`,
                defaultMessage: `Read {skillName} skill`,
                description: `Exploration row for reading a Codex skill definition`,
              },
              { skillName: a.skillName },
            )
        : n.formatMessage(
            {
              id: `localConversationTurn.exploration.skill.read`,
              defaultMessage: `Read {skillName} skill`,
              description: `Exploration row for reading a file from a Codex skill directory`,
            },
            { skillName: a.skillName },
          );
    case `list_files`:
      return n.formatMessage(
        {
          id: `localConversationTurn.exploration.skill.listFiles`,
          defaultMessage: `Listed files in {skillName} skill`,
          description: `Exploration row for listing files in a Codex skill directory`,
        },
        { skillName: a.skillName },
      );
    case `search`:
      if (e.query && e.query.trim().length > 0) {
        let t = i?.(e.query) ?? e.query;
        return n.formatMessage(
          {
            id: `localConversationTurn.exploration.skill.searchFor`,
            defaultMessage: `Searched for {query} in {skillName} skill`,
            description: `Exploration row for searching for a query in a Codex skill directory`,
          },
          { query: t, skillName: a.skillName },
        );
      }
      return n.formatMessage(
        {
          id: `localConversationTurn.exploration.skill.search`,
          defaultMessage: `Searched in {skillName} skill`,
          description: `Exploration row for searching in a Codex skill directory`,
        },
        { skillName: a.skillName },
      );
  }
}
function te({ skillName: e, isFinished: t, intl: n }) {
  return t
    ? n.formatMessage(
        {
          id: `localConversationTurn.exploration.skill.definition.read.steps.complete`,
          defaultMessage: `Read {skillName} skill`,
          description: `Simplified exploration row after Codex finishes reading a skill definition`,
        },
        { skillName: e },
      )
    : n.formatMessage(
        {
          id: `localConversationTurn.exploration.skill.definition.read.steps.active`,
          defaultMessage: `Reading {skillName} skill`,
          description: `Simplified exploration row while Codex is reading a skill definition`,
        },
        { skillName: e },
      );
}
function N({ summary: e, cwd: t }) {
  let n = ne({ summary: e, cwd: t });
  return n ? a(n) : null;
}
function ne({ summary: e, cwd: t }) {
  switch (e.type) {
    case `read`:
      return P({ path: e.path ?? e.name, cwd: t });
    case `list_files`:
      return e.path ? P({ path: e.path, cwd: t }) : null;
    case `search`:
      return e.path ? P({ path: e.path, cwd: t }) : null;
  }
}
function P({ path: e, cwd: t }) {
  if (!e) return null;
  let n = c(e);
  return n.length === 0 ? null : t == null ? n : c(r(t, n));
}
function F(e) {
  throw Error(`Unexpected value: ${String(e)}`);
}
function re({ item: e, mcpServerStatuses: t }) {
  let n = e.result?.type === `success` ? e.result.raw : null;
  return n == null
    ? `not-mcp-app`
    : e.mcpAppResourceUri != null ||
        E({
          mcpServerStatuses: t,
          server: e.invocation.server,
          tool: e.invocation.tool,
          toolResult: n,
        }) != null
      ? `mcp-app`
      : t == null
        ? `maybe-mcp-app`
        : `not-mcp-app`;
}
function I({ item: e, mcpServerStatuses: t }) {
  return re({ item: e, mcpServerStatuses: t }) !== `not-mcp-app`;
}
function ie(e) {
  return e.some(
    (e) =>
      e.kind === `item` &&
      e.item.type === `mcp-tool-call` &&
      e.item.result?.type === `success`,
  );
}
function ae({ entries: e, mcpServerStatuses: t }) {
  return e.some(
    (e) =>
      e.kind === `item` &&
      e.item.type === `mcp-tool-call` &&
      I({ item: e.item, mcpServerStatuses: t }),
  );
}
var L = `browser-use`;
function R({ units: e, isActivitySliceClosed: t }) {
  let n = [],
    r = oe(e, t);
  for (let { startIndex: t, endIndex: i } of r) {
    let r = t;
    for (; r < i; ) {
      let t = e[r];
      if (t == null || !z(t)) {
        r += 1;
        continue;
      }
      let a = r,
        o = se();
      for (; r < i; ) {
        let t = e[r];
        if (t == null || !z(t)) break;
        (ce(o, t), (r += 1));
      }
      n.push({ startIndex: a, endIndex: r, summary: le(o) });
    }
  }
  return n;
}
function oe(e, t) {
  let n = [];
  for (let [t, r] of e.entries()) r.type === `assistant-message` && n.push(t);
  if (n.length === 0)
    return !t || e.length === 0 ? [] : [{ startIndex: 0, endIndex: e.length }];
  let r = [];
  for (let [i, a] of n.entries()) {
    let o = n[i + 1] ?? (t ? e.length : null);
    o == null || a + 1 >= o || r.push({ startIndex: a + 1, endIndex: o });
  }
  return r;
}
function z(e) {
  return e.type === `assistant-message` || e.type === `other`
    ? !1
    : e.type === `automatic-approval-review`
      ? e.status === `approved` || e.status === `denied`
      : e.type === `exploration` ||
          e.type === `patch` ||
          e.type === `exec` ||
          e.type === `mcp-tool-call` ||
          e.type === `web-search`
        ? !0
        : F(e);
}
function se() {
  return {
    createdPaths: new Set(),
    runningCreatedPaths: new Set(),
    stoppedCreatedPaths: new Set(),
    runningCreatedLineCount: 0,
    editedPaths: new Set(),
    runningEditedPaths: new Set(),
    deletedPaths: new Set(),
    runningDeletedPaths: new Set(),
    exploredPaths: new Set(),
    runningExploredPaths: new Set(),
    searchCount: 0,
    runningSearchCount: 0,
    listCount: 0,
    runningListCount: 0,
    approvedRequestCount: 0,
    deniedRequestCount: 0,
    commandCount: 0,
    runningCommandCount: 0,
    completedWebSearchCommandCount: 0,
    runningFolderCreationCommandCount: 0,
    runningWebSearchCommandCount: 0,
    mcpToolCallCount: 0,
    mcpToolCallSources: new Map(),
    webSearchCount: 0,
    runningWebSearchCount: 0,
  };
}
function ce(e, t) {
  if (t.type === `exploration`) {
    for (let n of t.readPaths) e.exploredPaths.add(n);
    for (let n of t.runningReadPaths) e.runningExploredPaths.add(n);
    ((e.searchCount += t.searchCount),
      (e.runningSearchCount += t.runningSearchCount),
      (e.listCount += t.listCount),
      (e.runningListCount += t.runningListCount));
    return;
  }
  if (t.type === `patch`) {
    for (let n of t.createdPaths) e.createdPaths.add(n);
    for (let n of t.runningCreatedPaths) e.runningCreatedPaths.add(n);
    for (let n of t.stoppedCreatedPaths) e.stoppedCreatedPaths.add(n);
    e.runningCreatedLineCount += t.runningCreatedLineCount;
    for (let n of t.editedPaths) e.editedPaths.add(n);
    for (let n of t.runningEditedPaths) e.runningEditedPaths.add(n);
    for (let n of t.deletedPaths) e.deletedPaths.add(n);
    for (let n of t.runningDeletedPaths) e.runningDeletedPaths.add(n);
    return;
  }
  if (t.type === `exec`) {
    if (((e.commandCount += 1), t.isInProgress)) {
      ((e.runningCommandCount += 1),
        t.createsFolder === !0 && (e.runningFolderCreationCommandCount += 1),
        t.searchesWeb === !0 && (e.runningWebSearchCommandCount += 1));
      return;
    }
    t.searchesWeb === !0 && (e.completedWebSearchCommandCount += 1);
    return;
  }
  if (t.type === `automatic-approval-review`)
    switch (t.status) {
      case `approved`:
        e.approvedRequestCount += 1;
        return;
      case `denied`:
        e.deniedRequestCount += 1;
        return;
      case `aborted`:
      case `inProgress`:
      case `timedOut`:
        return;
    }
  if (t.type === `mcp-tool-call`) {
    if (((e.mcpToolCallCount += 1), t.source != null)) {
      let n = e.mcpToolCallSources.get(t.source.name);
      e.mcpToolCallSources.set(t.source.name, {
        logoUrl: t.source.logoUrl,
        logoUrlDark: t.source.logoUrlDark,
        count: (n?.count ?? 0) + 1,
      });
    }
    return;
  }
  if (t.type === `web-search`) {
    ((e.webSearchCount += t.count),
      (e.runningWebSearchCount += t.runningCount));
    return;
  }
  return F(t);
}
function le(e) {
  return {
    createdFileCount: e.createdPaths.size,
    runningCreatedFileCount: e.runningCreatedPaths.size,
    stoppedCreatedFileCount: e.stoppedCreatedPaths.size,
    runningCreatedLineCount: e.runningCreatedLineCount,
    editedFileCount: e.editedPaths.size,
    runningEditedFileCount: e.runningEditedPaths.size,
    deletedFileCount: e.deletedPaths.size,
    runningDeletedFileCount: e.runningDeletedPaths.size,
    exploredFileCount: e.exploredPaths.size,
    runningExploredFileCount: e.runningExploredPaths.size,
    searchCount: e.searchCount,
    runningSearchCount: e.runningSearchCount,
    listCount: e.listCount,
    runningListCount: e.runningListCount,
    approvedRequestCount: e.approvedRequestCount,
    deniedRequestCount: e.deniedRequestCount,
    commandCount: e.commandCount,
    runningCommandCount: e.runningCommandCount,
    completedWebSearchCommandCount: e.completedWebSearchCommandCount,
    runningFolderCreationCommandCount: e.runningFolderCreationCommandCount,
    runningWebSearchCommandCount: e.runningWebSearchCommandCount,
    mcpToolCallCount: e.mcpToolCallCount,
    mcpToolCallSources: [...e.mcpToolCallSources.entries()].map(([e, t]) => ({
      logoUrl: t.logoUrl,
      logoUrlDark: t.logoUrlDark,
      name: e,
      count: t.count,
    })),
    webSearchCount: e.webSearchCount,
    runningWebSearchCount: e.runningWebSearchCount,
  };
}
var ue = /(?:^|\s)(?:-X\s*|--request(?:=|\s+))(?:POST|PUT|PATCH|DELETE)\b/i,
  de = /(?:^|\s)(?:--data(?:-[^\s=]+)?|--json|--form|--upload-file)(?:=|\s|$)/,
  fe = /(?:^|\s)-(?:d|F|T)(?:=|\s|$)/;
function pe(
  e,
  {
    mcpServerStatuses: t,
    resolvedApps: n = [],
    shouldKeepMcpAppToolCallsExpandedByDefault: r,
    modelProvider: i = null,
    isTurnCancelled: a = !1,
  } = {},
) {
  if (e.kind === `multi-agent-group`) return { type: `other` };
  if (e.kind === `web-search-group`)
    return {
      type: `web-search`,
      count: e.items.length,
      runningCount: e.items.filter((e) => !e.completed).length,
    };
  if (e.entry.kind === `exploration`) return ve(e.entry);
  let o = e.entry.item;
  if (o.type === `assistant-message`) return { type: `assistant-message` };
  if (o.type === `patch`) return ye(o, a);
  if (o.type === `exec`) {
    if (
      he(o, i) ||
      (o.parsedCmd.type === `read` &&
        !o.parsedCmd.isFinished &&
        M({ summary: o.parsedCmd, cwd: o.cwd }))
    )
      return { type: `other` };
    let e = !o.parsedCmd.isFinished,
      t = o.parsedCmd.type === `unknown` ? o.parsedCmd.cmd : null,
      n = t != null && /^\s*mkdir(?:\s|$)/.test(t),
      r = t != null && ge(t);
    return n
      ? { type: `exec`, isInProgress: e, createsFolder: !0 }
      : r && (e || o.output?.exitCode === 0)
        ? { type: `exec`, isInProgress: e, searchesWeb: !0 }
        : { type: `exec`, isInProgress: e };
  }
  return o.type === `mcp-tool-call`
    ? r === !0 && I({ item: o, mcpServerStatuses: t })
      ? { type: `other` }
      : { type: `mcp-tool-call`, source: me(o, n) }
    : o.type === `automatic-approval-review`
      ? { type: `automatic-approval-review`, status: o.status }
      : o.type === `web-search`
        ? { type: `web-search`, count: 1, runningCount: o.completed ? 0 : 1 }
        : o.type === `reasoning` ||
            o.type === `todo-list` ||
            o.type === `worked-for` ||
            o.type === `multi-agent-action` ||
            o.type === `proposed-plan` ||
            o.type === `user-message` ||
            o.type === `userInput` ||
            o.type === `user-input-response` ||
            o.type === `mcp-server-elicitation` ||
            o.type === `permission-request` ||
            o.type === `turn-diff` ||
            o.type === `plan-implementation` ||
            o.type === `system-error` ||
            o.type === `steered` ||
            o.type === `stream-error` ||
            o.type === `remote-task-created` ||
            o.type === `context-compaction` ||
            o.type === `personality-changed` ||
            o.type === `forked-from-conversation` ||
            o.type === `model-changed` ||
            o.type === `model-rerouted` ||
            o.type === `auto-review-interruption-warning` ||
            o.type === `generated-image` ||
            o.type === `automation-update` ||
            o.type === `dynamic-tool-call`
          ? { type: `other` }
          : F(o);
}
function me(e, t) {
  if (s(e)) return { logoUrl: null, logoUrlDark: null, name: L };
  let n = D({
    apps: t,
    functionName: e.functionName,
    serverName: e.invocation.server,
    toolName: e.invocation.tool,
  });
  if (n != null)
    return {
      logoUrl: n.logoUrl ?? null,
      logoUrlDark: n.logoUrlDark ?? null,
      name: n.name,
    };
  let r = e.invocation.server.trim();
  return r.length === 0
    ? null
    : { logoUrl: null, logoUrlDark: null, name: o(r) };
}
function he(e, t) {
  return !1;
}
function ge(e) {
  if (!/^\s*curl(?:\s|$)/.test(e) || ue.test(e) || de.test(e) || fe.test(e))
    return !1;
  let t = e.match(/\bhttps?:\/\/[^\s'"<>]+/gi);
  return t == null ? !1 : t.some(_e);
}
function _e(e) {
  try {
    let t = new URL(e).hostname.toLowerCase();
    return t !== `localhost` && !t.startsWith(`127.`);
  } catch {
    return !1;
  }
}
function ve(e) {
  let t = [],
    n = [],
    r = 0,
    i = 0,
    a = 0,
    o = 0;
  for (let s of e.items)
    if (s.type === `exec`) {
      if (s.parsedCmd.type === `search`) {
        ((r += 1), s.parsedCmd.isFinished || (i += 1));
        continue;
      }
      if (s.parsedCmd.type === `list_files`) {
        ((a += 1), s.parsedCmd.isFinished || (o += 1));
        continue;
      }
      if (s.parsedCmd.type === `read`) {
        let e = be(s.parsedCmd.path ?? s.parsedCmd.name, s.cwd);
        (t.push(e), s.parsedCmd.isFinished || n.push(e));
      }
    }
  return {
    type: `exploration`,
    readPaths: t,
    runningReadPaths: n,
    searchCount: r,
    runningSearchCount: i,
    listCount: a,
    runningListCount: o,
  };
}
function ye(e, t) {
  let n = [],
    r = [],
    i = [],
    a = 0,
    o = [],
    s = [],
    c = [],
    l = [];
  for (let [u, d] of Object.entries(e.changes)) {
    if (d.type === `add`) {
      (n.push(u),
        e.success == null && t
          ? i.push(u)
          : (e.success ?? (r.push(u), (a += xe(d.content)))));
      continue;
    }
    if (d.type === `delete`) {
      (c.push(u), e.success ?? l.push(u));
      continue;
    }
    (o.push(u), e.success ?? s.push(u));
  }
  return {
    type: `patch`,
    createdPaths: n,
    runningCreatedPaths: r,
    stoppedCreatedPaths: i,
    runningCreatedLineCount: a,
    editedPaths: o,
    runningEditedPaths: s,
    deletedPaths: c,
    runningDeletedPaths: l,
  };
}
function be(e, t) {
  let n = c(e);
  return t == null ? n : c(r(t, n));
}
function xe(e) {
  let t = e.replace(
    /\r\n/g,
    `
`,
  ).split(`
`);
  return t.length > 0 && t[t.length - 1] === `` ? t.length - 1 : t.length;
}
var B = l(),
  Se = [
    { namespace: x, render: Ce, tool: p },
    { namespace: x, render: we, tool: S },
  ];
function Ce(e, t) {
  return V(e, e.completed ? `readCompleted` : `readActive`, t);
}
function we(e, t) {
  return V(e, e.completed ? `writeCompleted` : `writeActive`, t);
}
function V(e, t, n) {
  return (0, B.jsxs)(`span`, {
    className: u(
      `text-size-chat min-w-0 items-center`,
      n === `summary-text` ? `inline` : `flex gap-2`,
      n === `row` && `my-1`,
      n === `row`
        ? `text-token-conversation-summary-leading`
        : `text-token-conversation-summary-trailing group-hover/collapsed-tool-activity:text-token-foreground`,
    ),
    children: [
      n === `summary-text`
        ? null
        : (0, B.jsx)(w, {
            className: `icon-xs shrink-0 text-token-text-secondary`,
          }),
      (0, B.jsx)(C, {
        active: !e.completed,
        className: u(n !== `summary-text` && `min-w-0 truncate`),
        children: (0, B.jsx)(d, { ...Te[t] }),
      }),
    ],
  });
}
var Te = f({
    readActive: {
      id: `localConversation.settingsToolCall.read.active`,
      defaultMessage: `Reading settings`,
      description: `In-progress label for reading Codex settings.`,
    },
    readCompleted: {
      id: `localConversation.settingsToolCall.read.completed`,
      defaultMessage: `Read settings`,
      description: `Completed label for reading Codex settings.`,
    },
    writeActive: {
      id: `localConversation.settingsToolCall.write.active`,
      defaultMessage: `Updating settings`,
      description: `In-progress label for updating Codex settings.`,
    },
    writeCompleted: {
      id: `localConversation.settingsToolCall.write.completed`,
      defaultMessage: `Updated settings`,
      description: `Completed label for updating Codex settings.`,
    },
  }),
  Ee = t({
    target: t({ type: n(), environment: t({ type: n() }).optional() }),
  }),
  De = [
    { getCompletedSummaryPartKey: U, namespace: x, render: H, tool: y },
    { continuesLiveActivityBetweenCalls: !0, namespace: x, render: H, tool: g },
    { continuesLiveActivityBetweenCalls: !0, namespace: x, render: H, tool: m },
    { namespace: x, render: H, tool: v },
    { namespace: x, render: H, tool: h },
    { namespace: x, render: H, tool: b },
    { namespace: x, render: H, tool: _ },
  ];
function H(e, t) {
  let n = U(e);
  return n == null
    ? null
    : (0, B.jsxs)(`span`, {
        className: u(
          `text-size-chat min-w-0 items-center`,
          t === `summary-text` ? `inline` : `flex gap-2`,
          t === `row` && `my-1`,
          t === `row`
            ? `text-token-conversation-summary-leading`
            : `text-token-conversation-summary-trailing group-hover/collapsed-tool-activity:text-token-foreground`,
        ),
        children: [
          t === `summary-text`
            ? null
            : (0, B.jsx)(T, {
                className: `icon-xs shrink-0 text-token-text-secondary`,
              }),
          (0, B.jsx)(C, {
            active: !e.completed,
            className: u(t !== `summary-text` && `min-w-0 truncate`),
            children: (0, B.jsx)(d, { ...Oe[n] }),
          }),
        ],
      });
}
function U(e) {
  switch (e.tool) {
    case y: {
      let t = Ee.safeParse(e.arguments);
      return t.success
        ? t.data.target.type === `project` &&
          t.data.target.environment?.type === `worktree`
          ? e.completed
            ? `threadsCreateInWorktreeCompleted`
            : `threadsCreateInWorktreeActive`
          : e.completed
            ? `threadsCreateCompleted`
            : `threadsCreateActive`
        : null;
    }
    case g:
      return e.completed ? `threadsListCompleted` : `threadsListActive`;
    case m:
      return e.completed ? `threadsReadCompleted` : `threadsReadActive`;
    case v:
      return e.completed
        ? `threadsSendMessageCompleted`
        : `threadsSendMessageActive`;
    case h:
      return e.completed
        ? `threadsSetPinnedCompleted`
        : `threadsSetPinnedActive`;
    case b:
      return e.completed
        ? `threadsSetArchivedCompleted`
        : `threadsSetArchivedActive`;
    case _:
      return e.completed ? `threadsSetTitleCompleted` : `threadsSetTitleActive`;
    default:
      return null;
  }
}
var Oe = f({
    threadsCreateActive: {
      id: `localConversation.appControlToolCall.threadsCreate.active`,
      defaultMessage: `Creating new thread`,
      description: `In-progress label for creating a Codex thread.`,
    },
    threadsCreateCompleted: {
      id: `localConversation.appControlToolCall.threadsCreate.completed`,
      defaultMessage: `Created new thread`,
      description: `Completed label for creating a Codex thread.`,
    },
    threadsCreateInWorktreeActive: {
      id: `localConversation.appControlToolCall.threadsCreateInWorktree.active`,
      defaultMessage: `Creating worktree thread`,
      description: `In-progress label for creating a Codex worktree thread.`,
    },
    threadsCreateInWorktreeCompleted: {
      id: `localConversation.appControlToolCall.threadsCreateInWorktree.completed`,
      defaultMessage: `Created worktree thread`,
      description: `Completed label for creating a Codex worktree thread.`,
    },
    threadsListActive: {
      id: `localConversation.appControlToolCall.threadsList.active`,
      defaultMessage: `Listing threads`,
      description: `In-progress label for listing Codex threads.`,
    },
    threadsListCompleted: {
      id: `localConversation.appControlToolCall.threadsList.completed`,
      defaultMessage: `Listed threads`,
      description: `Completed label for listing Codex threads.`,
    },
    threadsReadActive: {
      id: `localConversation.appControlToolCall.threadsRead.active`,
      defaultMessage: `Reading thread`,
      description: `In-progress label for reading a Codex thread.`,
    },
    threadsReadCompleted: {
      id: `localConversation.appControlToolCall.threadsRead.completed`,
      defaultMessage: `Read thread`,
      description: `Completed label for reading a Codex thread.`,
    },
    threadsSendMessageActive: {
      id: `localConversation.appControlToolCall.threadsSendMessage.active`,
      defaultMessage: `Sending message to thread`,
      description: `In-progress label for sending a message to a Codex thread.`,
    },
    threadsSendMessageCompleted: {
      id: `localConversation.appControlToolCall.threadsSendMessage.completed`,
      defaultMessage: `Sent message to thread`,
      description: `Completed label for sending a message to a Codex thread.`,
    },
    threadsSetArchivedActive: {
      id: `localConversation.appControlToolCall.threadsSetArchived.active`,
      defaultMessage: `Updating thread archive`,
      description: `In-progress label for archiving or unarchiving a Codex thread.`,
    },
    threadsSetArchivedCompleted: {
      id: `localConversation.appControlToolCall.threadsSetArchived.completed`,
      defaultMessage: `Updated thread archive`,
      description: `Completed label for archiving or unarchiving a Codex thread.`,
    },
    threadsSetPinnedActive: {
      id: `localConversation.appControlToolCall.threadsSetPinned.active`,
      defaultMessage: `Updating thread pin`,
      description: `In-progress label for pinning or unpinning a Codex thread.`,
    },
    threadsSetPinnedCompleted: {
      id: `localConversation.appControlToolCall.threadsSetPinned.completed`,
      defaultMessage: `Updated thread pin`,
      description: `Completed label for pinning or unpinning a Codex thread.`,
    },
    threadsSetTitleActive: {
      id: `localConversation.appControlToolCall.threadsSetTitle.active`,
      defaultMessage: `Renaming thread`,
      description: `In-progress label for renaming a Codex thread.`,
    },
    threadsSetTitleCompleted: {
      id: `localConversation.appControlToolCall.threadsSetTitle.completed`,
      defaultMessage: `Renamed thread`,
      description: `Completed label for renaming a Codex thread.`,
    },
  }),
  ke = [...De, ...Se];
function W(e) {
  return ke.find((t) => t.namespace === e.namespace && t.tool === e.tool);
}
function G(e) {
  return W(e)?.continuesLiveActivityBetweenCalls === !0;
}
function Ae(e) {
  let t = W(e)?.getCompletedSummaryPartKey?.(e);
  return `${e.namespace}:${e.tool}:${t ?? ``}`;
}
function je({ items: e, isActive: t }) {
  if (!t) return !1;
  if (e.some((e) => !e.completed)) return !0;
  let n = e.at(-1);
  return n != null && G(n);
}
function K({ items: e, keepLatestLiveActivityInGroup: t }) {
  let n = e.at(-1);
  return e.length > 1 || (t && n != null && G(n));
}
function q(e) {
  let t = [],
    n = [],
    r = () => {
      n.length !== 0 &&
        (t.push({ kind: `web-search-group`, items: n }), (n = []));
    };
  for (let i of e) {
    if (i.kind === `item` && i.item.type === `web-search`) {
      n.push(i.item);
      continue;
    }
    if (
      (r(),
      i.kind === `item` &&
        i.item.type === `multi-agent-action` &&
        i.item.status !== `inProgress`)
    ) {
      let e = t[t.length - 1];
      if (
        e?.kind === `multi-agent-group` &&
        e.items[0]?.action === i.item.action &&
        e.items[0]?.status === i.item.status
      ) {
        e.items.push(i.item);
        continue;
      }
      t.push({ kind: `multi-agent-group`, items: [i.item] });
      continue;
    }
    t.push({ kind: `entry`, entry: i });
  }
  return (r(), t);
}
function Me(e) {
  for (let t = e.length - 1; t >= 0; --t)
    if (e[t]?.kind === `multi-agent-group`) return t;
  return -1;
}
function J(e, t) {
  if (e.kind === `collapsed-tool-activity`)
    return `collapsed-tool-activity:${e.key}:${t}`;
  if (e.kind === `pending-mcp-tool-calls`)
    return `pending-mcp-tool-calls:${e.key}:${t}`;
  if (e.kind === `dynamic-tool-call-group`)
    return `dynamic-tool-call-group:${e.key}:${t}`;
  if (e.kind === `multi-agent-group`) {
    let n = e.items[0];
    return `multi-agent-group:${n?.action ?? `unknown`}:${n?.status ?? `unknown`}:${n?.id ?? t}`;
  }
  if (e.kind === `web-search-group`)
    return `web-search-group:${e.items[0]?.query ?? `unknown`}:${t}`;
  if (e.entry.kind === `exploration`) {
    let n = e.entry.items[0];
    return `exploration:${n?.type === `exec` ? n.callId : `${n?.type ?? `none`}-${t}`}`;
  }
  let n = e.entry.item;
  return `id` in n && typeof n.id == `string`
    ? `item:${n.type}:${n.id}`
    : `callId` in n && typeof n.callId == `string`
      ? `item:${n.type}:${n.callId}`
      : `item:${n.type}:${t}`;
}
function Y({
  units: e,
  isActivitySliceClosed: t,
  mcpServerStatuses: n,
  shouldAutoExpandMcpApps: r = !1,
  resolvedApps: i,
}) {
  if (t) return e;
  let a = [];
  for (let t = 0; t < e.length; ) {
    let o = [],
      s = null,
      c = t;
    for (; c < e.length; ) {
      let t = Q(e[c]);
      if (t == null || He(t, n, r)) break;
      let a = Ve({ item: t, resolvedApps: i });
      if (s != null && a !== s) break;
      ((s = a), o.push(t), (c += 1));
    }
    if (o.length > 1) {
      (a.push({
        kind: `pending-mcp-tool-calls`,
        key: o[0]?.callId ?? `${t}`,
        items: o,
      }),
        (t = c));
      continue;
    }
    let l = e[t];
    (l != null && a.push(l), (t += 1));
  }
  return a;
}
function Ne({ units: e, keepLatestLiveActivityInGroup: t = !1 }) {
  let n = [];
  for (let r = 0; r < e.length; ) {
    let i = [],
      a = r;
    for (; a < e.length; ) {
      let t = Ue(e[a]);
      if (t == null) break;
      (i.push(t), (a += 1));
    }
    if (K({ items: i, keepLatestLiveActivityInGroup: t && a === e.length })) {
      (n.push({
        kind: `dynamic-tool-call-group`,
        key: i[0]?.callId ?? `${r}`,
        items: i,
      }),
        (r = a));
      continue;
    }
    let o = e[r];
    (o != null && n.push(o), (r += 1));
  }
  return n;
}
function X(e, t) {
  return e === `STEPS_PROSE`
    ? t.some((e) =>
        e.kind !== `entry` || e.entry.kind !== `item`
          ? !0
          : e.entry.item.type !== `exec` && e.entry.item.type !== `patch`,
      )
    : !0;
}
function Pe(e, t) {
  return X(e, t) && (Re(e, t) > 1 || Le(t));
}
function Fe({
  conversationDetailLevel: e,
  units: t,
  summary: n,
  hasSourceSummary: r = !1,
  isActiveToolActivity: i,
}) {
  return i || Ie(t) || r
    ? X(e, t)
    : e !== `STEPS_PROSE` && n != null && n.commandCount > 1
      ? !0
      : Pe(e, t);
}
function Ie(e) {
  return e.some((e) =>
    e.kind !== `entry` ||
    e.entry.kind !== `item` ||
    e.entry.item.type !== `exec`
      ? !1
      : !e.entry.item.parsedCmd.isFinished,
  );
}
function Le(e) {
  return e.some(
    (e) =>
      e.kind === `entry` &&
      e.entry.kind === `item` &&
      e.entry.item.type === `mcp-tool-call`,
  );
}
function Re(e, t) {
  return t.reduce((t, n) => {
    switch (n.kind) {
      case `entry`:
        return n.entry.kind === `exploration`
          ? t + n.entry.items.length
          : e === `STEPS_PROSE` && n.entry.item.type === `exec`
            ? t
            : t + 1;
      case `multi-agent-group`:
        return t + n.items.length;
      case `web-search-group`:
        return t + n.items.length;
    }
  }, 0);
}
function Z({
  units: e,
  isActivitySliceClosed: t,
  conversationDetailLevel: n,
  mcpServerStatuses: r,
  resolvedApps: i,
  shouldAutoExpandMcpApps: a = !1,
  modelProvider: o = null,
  isTurnCancelled: s = !1,
}) {
  let c = e.map((e) =>
      pe(e, {
        mcpServerStatuses: r,
        resolvedApps: i,
        shouldKeepMcpAppToolCallsExpandedByDefault: a,
        modelProvider: o,
        isTurnCancelled: s,
      }),
    ),
    l = [...R({ units: c, isActivitySliceClosed: t })];
  if (!t) {
    let e = We(c),
      t = [];
    for (let n of c.slice(e)) {
      if (n.type === `mcp-tool-call`) {
        t.push({ type: `other` });
        continue;
      }
      t.push(n);
    }
    for (let n of R({ units: t, isActivitySliceClosed: !0 }))
      l.push({
        startIndex: n.startIndex + e,
        endIndex: n.endIndex + e,
        summary: n.summary,
      });
  }
  if (l.length === 0) return e;
  l.sort((e, t) => e.startIndex - t.startIndex);
  let u = [],
    d = 0;
  for (let r = 0; r < e.length; ) {
    let i = l[d];
    if (i && r === i.startIndex) {
      let a = e.slice(i.startIndex, i.endIndex),
        o = a[0],
        s = !t && i.endIndex === e.length;
      if (
        a.length === 1 &&
        o != null &&
        o.kind === `entry` &&
        o.entry.kind === `item`
      ) {
        let e = o.entry.item;
        if (
          e.type === `automatic-approval-review` ||
          e.type === `mcp-tool-call` ||
          (n !== `STEPS_PROSE` && e.type === `exec` && !s)
        ) {
          (u.push(o), (r = i.endIndex), (d += 1));
          continue;
        }
      }
      if (o != null) {
        let e = ze({
          groupedUnits: a,
          isCurrentToolActivity: s,
          summary: i.summary,
        });
        u.push({
          kind: `collapsed-tool-activity`,
          key: J(o, i.startIndex),
          units: a,
          summary: e,
        });
      }
      ((r = i.endIndex), (d += 1));
      continue;
    }
    let a = e[r];
    (a != null && u.push(a), (r += 1));
  }
  return u;
}
function ze({ groupedUnits: e, isCurrentToolActivity: t, summary: n }) {
  return !t || e.at(-1)?.kind !== `web-search-group`
    ? n
    : { ...n, runningWebSearchCount: n.webSearchCount };
}
function Be({
  entries: e,
  conversationDetailLevel: t,
  isActivitySliceClosed: n,
  mcpServerStatuses: r,
  shouldAutoExpandMcpApps: i = !1,
  modelProvider: a = null,
  resolvedApps: o,
}) {
  return Y({
    units: Z({
      units: q(e),
      isActivitySliceClosed: n,
      conversationDetailLevel: t,
      mcpServerStatuses: r,
      shouldAutoExpandMcpApps: i,
      modelProvider: a,
    }),
    isActivitySliceClosed: n,
    mcpServerStatuses: r,
    shouldAutoExpandMcpApps: i,
    resolvedApps: o,
  }).some((e) => e.kind === `pending-mcp-tool-calls`);
}
function Ve({ item: e, resolvedApps: t }) {
  if (e.source === `browser-use`) return L;
  if (t != null) {
    let n = D({
      apps: t,
      functionName: e.functionName,
      serverName: e.invocation.server,
      toolName: e.invocation.tool,
    });
    if (n != null) return `app:${n.id}`;
  }
  return `server:${e.invocation.server}`;
}
function He(e, t, n) {
  return e.source === `browser-use`
    ? !1
    : e.invocation.server === `computer-use` ||
        (e.invocation.server === `node_repl` &&
          (e.invocation.tool === `js` || e.invocation.tool === `js_reset`))
      ? !0
      : n && I({ item: e, mcpServerStatuses: t });
}
function Q(e) {
  return e?.kind === `entry` &&
    e.entry.kind === `item` &&
    e.entry.item.type === `mcp-tool-call`
    ? e.entry.item
    : null;
}
function Ue(e) {
  return e?.kind === `entry` &&
    e.entry.kind === `item` &&
    e.entry.item.type === `dynamic-tool-call`
    ? e.entry.item
    : null;
}
function We(e) {
  for (let t = e.length - 1; t >= 0; --t)
    if (e[t]?.type === `assistant-message`) return t + 1;
  return 0;
}
function $(e) {
  if (!e) return !1;
  switch (e.type) {
    case `user-message`:
    case `turn-diff`:
    case `system-error`:
    case `stream-error`:
    case `steered`:
    case `remote-task-created`:
    case `personality-changed`:
    case `forked-from-conversation`:
    case `model-changed`:
    case `model-rerouted`:
    case `auto-review-interruption-warning`:
    case `automation-update`:
    case `plan-implementation`:
    case `worked-for`:
    case `generated-image`:
      return !1;
    case `context-compaction`:
      return !e.completed;
    case `assistant-message`:
    case `proposed-plan`:
    case `reasoning`:
      return !e.completed;
    case `exec`:
      return e.output?.exitCode === void 0;
    case `patch`:
      return e.success == null;
    case `mcp-tool-call`:
    case `dynamic-tool-call`:
      return !e.completed;
    case `automatic-approval-review`:
      return e.status === `inProgress`;
    case `multi-agent-action`:
      return e.status === `inProgress`;
    case `web-search`:
      return !e.completed;
    case `todo-list`:
      return e.plan.some((e) => e.status !== `completed`);
    case `userInput`:
      return !e.completed;
    case `user-input-response`:
    case `mcp-server-elicitation`:
    case `permission-request`:
      return !e.completed;
  }
}
var Ge = e(i(), 1);
function Ke({
  agentItems: e,
  isTurnInProgress: t,
  isAnyNonAgentItemInProgress: n,
}) {
  let r = [],
    i = null,
    a = !1,
    o = !1,
    s = (e) => {
      (i &&
        i.length > 0 &&
        r.push({ kind: `exploration`, items: i, status: e }),
        (i = null));
    };
  for (let t of e) {
    if (qe(t)) {
      if (i) {
        i.push(t);
        continue;
      }
      i = [t];
      continue;
    }
    if (t.type === `reasoning`) {
      i && i.push(t);
      continue;
    }
    (i && s(`explored`), r.push({ kind: `item`, item: t }));
  }
  if (i) {
    let e = i.some((e) => $(e));
    ((a = t && (!n || e)), s(a ? `exploring` : `explored`));
  } else {
    let e = (0, Ge.default)(r);
    e?.kind === `item` &&
      ((o = $(e.item)),
      e.item.type === `reasoning` && e.item.completed === !1 && (o = !1));
  }
  return {
    renderableAgentItems: r,
    isExploring: a,
    isAnyNonExploringAgentItemInProgress: o,
  };
}
function qe(e) {
  return e.type !== `exec` ||
    (e.parsedCmd.type === `read` &&
      !e.parsedCmd.isFinished &&
      M({ summary: e.parsedCmd, cwd: e.cwd }))
    ? !1
    : e.parsedCmd.type === `list_files` ||
        e.parsedCmd.type === `search` ||
        e.parsedCmd.type === `read`;
}
function Je(e) {
  switch (e.type) {
    case `todo-list`:
    case `turn-diff`:
    case `user-message`:
    case `remote-task-created`:
    case `proposed-plan`:
    case `plan-implementation`:
    case `mcp-server-elicitation`:
    case `permission-request`:
    case `userInput`:
    case `personality-changed`:
    case `forked-from-conversation`:
    case `model-changed`:
    case `model-rerouted`:
    case `auto-review-interruption-warning`:
    case `generated-image`:
    case `automation-update`:
      return !1;
    case `web-search`:
      return e.query.trim().length > 0;
    case `assistant-message`:
    case `exec`:
    case `patch`:
    case `dynamic-tool-call`:
    case `mcp-tool-call`:
    case `automatic-approval-review`:
    case `multi-agent-action`:
    case `stream-error`:
    case `system-error`:
    case `context-compaction`:
    case `reasoning`:
    case `steered`:
    case `user-input-response`:
    case `worked-for`:
      return !0;
  }
}
function Ye(e, t) {
  let n = null,
    r = null,
    i = [],
    a = null,
    o = null,
    s = null,
    c = null,
    l = [],
    u = [],
    d = new Set(),
    f = [],
    p = [],
    m = [],
    h = [],
    g = [],
    _ = [],
    v = [],
    y = [],
    b = [],
    x = !1;
  for (let t of e) {
    if (t.type === `user-message` && t.heartbeatTrigger != null) {
      i.push(t);
      continue;
    }
    if (!x && t.type === `user-message`) {
      i.push(t);
      continue;
    }
    if (
      ((x = !0),
      t.type === `turn-diff` && (a = t),
      t.type === `todo-list` && (o = t),
      t.type === `proposed-plan`)
    ) {
      s = t;
      continue;
    }
    if (
      (t.type === `remote-task-created` && g.push(t),
      t.type === `personality-changed` && _.push(t),
      t.type === `forked-from-conversation` && v.push(t),
      t.type === `model-changed`)
    ) {
      y.push(t);
      continue;
    }
    if (t.type === `model-rerouted`) {
      b.push(t);
      continue;
    }
    if (t.type === `plan-implementation`) {
      c = t;
      continue;
    }
    if (t.type === `mcp-server-elicitation` && t.completed !== !0) {
      let e = et(t);
      (e != null && d.add(e), l.push(t));
      continue;
    }
    if (t.type === `permission-request`) {
      u.push(t);
      continue;
    }
    let e = Xe(t),
      S = !e && Ze(t);
    if (e || S) {
      n = t;
      continue;
    }
    if (t.type === `userInput` && t.completed !== !0) {
      r = t;
      continue;
    }
    if (t.type === `user-message`) {
      f.push(t);
      continue;
    }
    if (t.type === `generated-image`) {
      m.push(t);
      continue;
    }
    if (t.type === `automation-update`) {
      p.push(t);
      continue;
    }
    if (t.type === `auto-review-interruption-warning`) {
      h.push(t);
      continue;
    }
    Je(t) && f.push(t);
  }
  let S = $e(f),
    C =
      d.size > 0
        ? f.filter(
            (e) =>
              e.type !== `mcp-tool-call` ||
              e.completed ||
              !d.has(e.invocation.server),
          )
        : f,
    w = C[C.length - 1],
    T = Qe(w) ? w : null,
    E = (T?.content?.trim().length ?? 0) > 0 || !!T?.structuredOutput;
  T ? (C.pop(), h.push(...S)) : C.push(...S);
  let D = C[C.length - 1],
    O = t !== `in_progress` && !E && tt(D) ? D : null;
  O && C.pop();
  let k =
    T != null && T.completed && p.length > 0
      ? { ...T, automationCitations: p }
      : T;
  return {
    userItems: i,
    agentItems: C,
    automationUpdateItems: T == null ? p : [],
    assistantItem: k,
    toolOutputItems: m,
    postAssistantItems: h,
    systemEventItem: O,
    unifiedDiffItem: a,
    remoteTaskCreatedItems: g,
    personalityChangedItems: _,
    forkedFromConversationItems: v,
    modelChangedItems: y,
    modelReroutedItems: b,
    todoListItem: o,
    proposedPlanItem: s,
    planImplementationItem: c,
    mcpServerElicitationItems: l,
    permissionRequestItems: u,
    approvalItem: n,
    userInputItem: r,
  };
}
var Xe = (e) =>
    e.type === `patch` && e.approvalRequestId != null && e.success == null,
  Ze = (e) =>
    e.type === `exec` &&
    e.approvalRequestId != null &&
    e.output?.exitCode === void 0,
  Qe = (e) => e?.type === `assistant-message`,
  $e = (e) => {
    let t = [];
    for (;;) {
      let n = e[e.length - 1];
      if (n?.type !== `automatic-approval-review`) break;
      (e.pop(), t.unshift(n));
    }
    return t;
  },
  et = (e) => {
    switch (e.elicitation.kind) {
      case `generic`:
        return e.elicitation.serverName.trim() || null;
      case `mcpToolCall`:
        return e.elicitation.approval.connector_id;
      case `connectorAuth`:
        return e.elicitation.connector.connector_id;
      case `urlAction`:
        return e.elicitation.serverName.trim() || null;
      case `toolSuggestion`:
        return null;
    }
  },
  tt = (e) => e?.type === `system-error`;
export {
  D as C,
  M as S,
  L as _,
  Fe as a,
  ee as b,
  Ne as c,
  q as d,
  Be as f,
  W as g,
  Ae as h,
  X as i,
  Me as l,
  je as m,
  Ke as n,
  J as o,
  K as p,
  $ as r,
  Z as s,
  Ye as t,
  Y as u,
  ae as v,
  N as x,
  ie as y,
};
//# sourceMappingURL=split-items-into-render-groups-TGUHLoXy.js.map
