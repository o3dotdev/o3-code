import {
  At as e,
  Di as t,
  Fi as n,
  Hi as r,
  Ki as i,
  Ni as a,
  Ri as o,
  Vi as s,
  qi as c,
  zr as l,
} from "./src-C.js";
import {
  Aa as u,
  Ar as d,
  E as ee,
  Ja as te,
  Js as f,
  Ka as p,
  Lr as ne,
  Wa as m,
  Xa as re,
  Xs as h,
  Ya as ie,
  _ as g,
  _a as _,
  _i as v,
  ga as y,
  ha as ae,
  po as b,
  qa as oe,
  vi as se,
  w as ce,
  zs as x,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { l as S } from "./setting-storage.js";
import "./models-and-reasoning-efforts-qLdGz-ul.js";
import "./permissions-mode-defaults.js";
import { n as le } from "./projectless-thread.js";
import { t as ue } from "./build-worktree-label-from-input.js";
import { t as de } from "./local-projects.js";
import { t as fe } from "./pending-worktree-store-COXB8WW0.js";
import { t as pe } from "./workspace-dependencies-feature-DTe1S-zC.js";
import { t as me } from "./score-query-match.js";
async function C({
  config: e,
  model: t,
  prompt: n,
  sourceThreadId: r,
  target: i,
  thinking: a,
}) {
  if (e != null && r != null)
    throw Error(
      `createThread config is not supported for delegated thread creation`,
    );
  return i.type === `project` && i.environment.type === `worktree`
    ? ge({
        model: t,
        projectId: i.projectId,
        prompt: n,
        sourceThreadId: r,
        startingState: i.environment.startingState,
        thinking: a,
      })
    : he({
        config: e,
        model: t,
        prompt: n,
        sourceThreadId: r,
        target: i,
        thinking: a,
      });
}
async function he({
  config: e,
  model: t,
  prompt: n,
  sourceThreadId: r,
  target: i,
  thinking: a,
}) {
  let o, s, c, l, u;
  switch (i.type) {
    case `project`: {
      let e = await de({
        projectId: i.projectId,
        prompt: n,
        validateProjectId: !0,
      });
      (e == null
        ? ((o = i.projectId), (c = [i.projectId]))
        : ((o = e.cwd),
          (c = e.workspaceRoots),
          (l = e.projectlessOutputDirectory),
          (u = e.projectAssignment)),
        (s = `project`));
      break;
    }
    case `projectless`: {
      let e = await le([`~`], { directoryName: i.directoryName, prompt: n });
      if (e.cwd == null) throw Error(`Missing projectless thread cwd`);
      ((o = e.cwd),
        (s = `projectless`),
        (c = e.workspaceRoots),
        (l = e.projectlessOutputDirectory));
      break;
    }
  }
  let d = await _e(o, c);
  return {
    threadId: await h(`start-conversation`, {
      hostId: b,
      input:
        r == null
          ? [{ type: `text`, text: n, text_elements: [] }]
          : y({ sourceThreadId: r, input: n }),
      cwd: o,
      workspaceRoots: c,
      collaborationMode: w(t, a),
      threadSource: r == null ? `user` : `subagent`,
      permissions: d,
      approvalsReviewer: d.approvalsReviewer,
      ...(e == null ? {} : { config: e }),
      ...(u === void 0 ? {} : { projectAssignment: u }),
      workspaceKind: s,
      ...(l === void 0 ? {} : { projectlessOutputDirectory: l }),
    }),
    ...(s === `projectless` ? { projectlessOutputDirectory: l } : {}),
  };
}
async function ge({
  model: e,
  projectId: t,
  prompt: n,
  sourceThreadId: r,
  startingState: i,
  thinking: a,
}) {
  let { roots: o } = await S(`workspace-root-options`, {
    params: { hostId: b },
  });
  if (!o.includes(t))
    throw Error(
      `Unknown projectId: ${t}\nSaved projectIds:\n${o.join(`
`)}`,
    );
  let s = [{ type: `text`, text: n, text_elements: [] }],
    c = await ve({
      input: r == null ? s : y({ sourceThreadId: r, input: n }),
      model: e,
      projectId: t,
      threadSource: r == null ? `user` : `subagent`,
      thinking: a,
    });
  return {
    pendingWorktreeId: fe({
      hostId: b,
      label: ue(s),
      sourceWorkspaceRoot: t,
      startingState: i ?? { type: `working-tree` },
      localEnvironmentConfigPath: null,
      launchMode: `start-conversation`,
      prompt: n,
      startConversationParamsInput: c,
      sourceConversationId: null,
      sourceCollaborationMode: null,
      navigateOnSuccess: !1,
    }),
  };
}
async function _e(t, n) {
  let { config: r } = await h(`read-config-for-host`, {
    hostId: b,
    includeLayers: !1,
    cwd: t,
  });
  return e(x(`agent-mode-by-host-id`, {}).local ?? `auto`, n, r);
}
async function ve({
  input: e,
  model: t,
  projectId: n,
  threadSource: r,
  thinking: i,
}) {
  let { config: a } = await h(`read-config-for-host`, {
    hostId: b,
    includeLayers: !1,
    cwd: n,
  });
  return {
    input: e,
    workspaceRoots: [n],
    cwd: n,
    fileAttachments: [],
    addedFiles: [],
    agentMode: x(`agent-mode-by-host-id`, {}).local ?? `auto`,
    model: null,
    reasoningEffort: null,
    collaborationMode: w(t, i),
    config: f(a),
    threadSource: r,
    workspaceKind: `project`,
  };
}
function w(e, t) {
  return e == null && t == null
    ? null
    : {
        mode: `default`,
        settings: {
          model: e ?? `gpt-5.5`,
          reasoning_effort: t ?? `medium`,
          developer_instructions: null,
        },
      };
}
async function ye({ pinned: e, threadId: t }) {
  return (
    await S(`set-thread-pinned`, { params: { threadId: t, pinned: e } }),
    { threadId: t, pinned: e }
  );
}
async function T({ scope: e, archived: t, hostId: n, threadId: r }) {
  let i = l(r);
  return (
    t
      ? await h(`archive-conversation`, { conversationId: i })
      : await h(`unarchive-conversation`, {
          hostId: n ?? D(e, i),
          conversationId: i,
        }),
    { threadId: r, archived: t }
  );
}
async function E({ threadId: e, title: t }) {
  return (
    await h(`set-thread-title`, { conversationId: l(e), title: t }),
    { threadId: e, title: t }
  );
}
function D(e, t) {
  if (!e.get(ce, t))
    throw Error(`set_thread_archived requires hostId for unloaded thread ${t}`);
  return e.get(ee, t) ?? `local`;
}
async function O({
  scope: e,
  cursor: t,
  includeOutputs: n,
  maxOutputCharsPerItem: r,
  threadId: i,
  turnLimit: a,
}) {
  let { thread: o } = await e.get(g).readThread(i, { includeTurns: !0 }),
    s = t == null ? o.turns.length : o.turns.findIndex((e) => e.id === t);
  if (s < 0) throw Error(`Unknown cursor for thread ${i}: ${t}`);
  let c = o.turns.slice(0, s),
    l = c.slice(-a).reverse();
  return {
    schemaVersion: 1,
    thread: {
      id: o.id,
      title: o.name,
      preview: o.preview,
      status: k(o.status),
      cwd: o.cwd,
      createdAt: o.createdAt,
      updatedAt: o.updatedAt,
    },
    page: {
      order: `newest_first`,
      limit: a,
      nextCursor: c.length > l.length ? (l.at(-1)?.id ?? null) : null,
      hasMore: c.length > l.length,
    },
    turns: l.map((e) => A(e, n, r)),
  };
}
function k(e) {
  switch (e.type) {
    case `active`:
      return { type: `active`, activeFlags: e.activeFlags };
    case `idle`:
    case `notLoaded`:
    case `systemError`:
      return { type: e.type };
  }
}
function A(e, t, n) {
  return {
    id: e.id,
    status: e.status,
    error:
      e.error == null
        ? null
        : {
            message: e.error.message,
            additionalDetails: e.error.additionalDetails,
          },
    startedAt: e.startedAt,
    completedAt: e.completedAt,
    durationMs: e.durationMs,
    items: e.items.map((e) => j(e, t, n)),
  };
}
function j(e, t, n) {
  switch (e.type) {
    case `userMessage`:
      return { type: e.type, id: e.id, content: e.content.map(M) };
    case `agentMessage`:
      return { type: e.type, id: e.id, text: e.text, phase: e.phase };
    case `plan`:
      return { type: e.type, id: e.id, text: e.text };
    case `reasoning`:
      return {
        type: e.type,
        id: e.id,
        summary: e.summary,
        ...(t ? { content: e.content.map((e) => N(e, n)) } : {}),
      };
    case `commandExecution`:
      return {
        type: e.type,
        id: e.id,
        command: e.command,
        cwd: e.cwd,
        status: e.status,
        exitCode: e.exitCode,
        durationMs: e.durationMs,
        ...(t && e.aggregatedOutput != null
          ? { output: N(e.aggregatedOutput, n) }
          : {}),
      };
    case `fileChange`:
      return {
        type: e.type,
        id: e.id,
        status: e.status,
        changes: e.changes.map((e) => ({
          path: e.path,
          kind: e.kind,
          ...(t ? { diff: N(e.diff, n) } : {}),
        })),
      };
    case `mcpToolCall`:
      return {
        type: e.type,
        id: e.id,
        server: e.server,
        tool: e.tool,
        arguments: e.arguments,
        status: e.status,
        durationMs: e.durationMs,
      };
    case `dynamicToolCall`:
      return {
        type: e.type,
        id: e.id,
        tool: e.tool,
        arguments: e.arguments,
        status: e.status,
        success: e.success,
        durationMs: e.durationMs,
      };
    case `collabAgentToolCall`:
      return {
        type: e.type,
        id: e.id,
        tool: e.tool,
        status: e.status,
        senderThreadId: e.senderThreadId,
        receiverThreadIds: e.receiverThreadIds,
        prompt: e.prompt,
        model: e.model,
        reasoningEffort: e.reasoningEffort,
      };
    case `webSearch`:
      return { type: e.type, id: e.id, query: e.query, action: e.action };
    case `imageView`:
      return { type: e.type, id: e.id, path: e.path };
    case `imageGeneration`:
      return {
        type: e.type,
        id: e.id,
        status: e.status,
        revisedPrompt: e.revisedPrompt,
        result: e.result,
        savedPath: e.savedPath ?? null,
      };
    case `enteredReviewMode`:
    case `exitedReviewMode`:
      return { type: e.type, id: e.id, review: e.review };
    case `hookPrompt`:
      return { type: e.type, id: e.id, fragmentCount: e.fragments.length };
    case `contextCompaction`:
      return { type: e.type, id: e.id };
  }
}
function M(e) {
  switch (e.type) {
    case `text`: {
      let t = _(e.text);
      return {
        type: e.type,
        text: e.text,
        ...(t == null
          ? {}
          : {
              codexDelegation: {
                sourceThreadId: t.sourceThreadId,
                input: t.input,
              },
            }),
      };
    }
    case `image`:
      return { type: e.type, url: e.url };
    case `localImage`:
      return { type: e.type, path: e.path };
    case `skill`:
    case `mention`:
      return { type: e.type, name: e.name, path: e.path };
  }
}
function N(e, t) {
  return e.length <= t
    ? { text: e, truncated: !1 }
    : { text: e.slice(0, t), truncated: !0, originalChars: e.length };
}
function P(e) {
  if (typeof window > `u`) return e === b;
  let t =
    window.electronBridge?.getSharedObjectSnapshotValue?.(`host_config`) ??
    null;
  return t == null ? e === b : t.id === e && t.kind === `local`;
}
function be(e) {
  let t = e.name?.trim() || e.preview.trim();
  return t.length > 0 ? t : e.id;
}
function xe(e, t, n) {
  return F(
    e.map((e) => Se(e)),
    t,
    n,
  );
}
function Se(e) {
  let t = Number(e.updatedAt) * 1e3;
  return {
    threadId: e.id,
    title: be(e),
    cwd: e.cwd,
    updatedAt: Number.isFinite(t) ? t : 0,
  };
}
function F(e, t, n) {
  if (n <= 0) return [];
  let r = t.trim();
  if (r.length === 0) return [];
  let i = [];
  for (let t of e) {
    let e = Ce(t, r);
    if (!e) continue;
    let a = { candidate: t, match: e };
    if (i.length < n) {
      i.push(a);
      continue;
    }
    let o = we(i);
    I(a, i[o]) < 0 && (i[o] = a);
  }
  return (i.sort(I), i.map(({ candidate: e }) => e));
}
function Ce(e, t) {
  return L(e.title, t, 0) ?? L(e.branch ?? ``, t, 1) ?? L(e.cwd, t, 2);
}
function we(e) {
  let t = 0;
  for (let n = 1; n < e.length; n += 1) I(e[t], e[n]) < 0 && (t = n);
  return t;
}
function I(e, t) {
  let n = e.match.fieldPriority - t.match.fieldPriority;
  if (n !== 0) return n;
  let r = t.match.score - e.match.score;
  return r === 0 ? t.candidate.updatedAt - e.candidate.updatedAt : r;
}
function L(e, t, n) {
  let r = me(e, t);
  return r === 0 ? null : { fieldPriority: n, score: r };
}
var R = `read_settings`,
  z = `write_settings`,
  Te = {
    name: R,
    description: `Read Codex settings, effective values after defaults, and the machine-readable setting definitions that Codex is allowed to inspect. Use this to learn how the app can be configured before suggesting or changing settings.`,
    inputSchema: { type: `object`, properties: {}, additionalProperties: !1 },
  },
  Ee = {
    name: z,
    description: `Update one or more Codex settings by writing a partial JSON settings object. Only ordinary settings marked writable for Codex can be changed.`,
    inputSchema: {
      type: `object`,
      properties: {
        settings: {
          type: `object`,
          description: `Partial JSON settings object to update.`,
          additionalProperties: !0,
        },
      },
      required: [`settings`],
      additionalProperties: !1,
    },
  };
async function De({ scope: e, limit: t, query: n }) {
  let r = n?.trim() ?? ``,
    i = await e.get(g).listAllThreads({ modelProviders: null });
  return {
    schemaVersion: 1,
    query: r.length > 0 ? r : null,
    threads: Oe(i, r, t).map(ke),
  };
}
function Oe(e, t, n) {
  if (t.length === 0) return e.slice(0, n);
  let r = new Map(e.map((e) => [e.id, e])),
    i = [];
  for (let a of xe(e, t, n)) {
    let e = r.get(a.threadId);
    e != null && i.push(e);
  }
  return i;
}
function ke(e) {
  return {
    id: e.id,
    title: Ae(e),
    preview: e.preview,
    status: e.status.type,
    cwd: e.cwd,
    createdAt: e.createdAt,
    updatedAt: e.updatedAt,
  };
}
function Ae(e) {
  let t = e.name?.trim() || e.preview.trim();
  return t.length > 0 ? t : e.id;
}
async function je({
  model: e,
  prompt: t,
  sourceThreadId: n,
  threadId: r,
  thinking: i,
}) {
  return (
    await h(`send-follow-up-message`, {
      conversationId: l(r),
      prompt: n == null ? t : ae({ sourceThreadId: n, input: t }),
      ...(e == null ? {} : { model: e }),
      ...(i == null ? {} : { reasoningEffort: i }),
    }),
    { threadId: r }
  );
}
var B = `codex_app`,
  V = `received invalid arguments.`,
  Me = 10,
  Ne = 1,
  Pe = 2e3,
  H = t([`low`, `medium`, `high`, `xhigh`]),
  Fe = n(`type`, [
    r({ type: o(`working-tree`) }),
    r({ type: o(`branch`), branchName: c().min(1) }),
  ]),
  Ie = n(`type`, [
    r({ type: o(`local`) }),
    r({ type: o(`worktree`), startingState: Fe.optional() }),
  ]),
  Le = n(`type`, [
    r({ type: o(`project`), projectId: c().min(1), environment: Ie }),
    r({ type: o(`projectless`), directoryName: c().min(1).optional() }),
  ]),
  U = `create_thread`,
  W = `list_threads`,
  G = `read_thread`,
  K = `send_message_to_thread`,
  q = `set_thread_pinned`,
  J = `set_thread_archived`,
  Y = `set_thread_title`,
  Re = i({
    prompt: c().min(1),
    target: Le,
    model: c().min(1).optional(),
    thinking: H.optional(),
  }),
  ze = i({ query: c().optional(), limit: s().int().min(1).max(50).optional() }),
  Be = i({
    threadId: c().min(1),
    cursor: c().min(1).optional(),
    turnLimit: s().int().min(1).max(10).optional(),
    includeOutputs: a().optional(),
    maxOutputCharsPerItem: s().int().min(0).max(2e4).optional(),
  }),
  Ve = i({
    threadId: c().min(1),
    prompt: c().min(1),
    model: c().min(1).optional(),
    thinking: H.optional(),
  }),
  He = i({ threadId: c().min(1), pinned: a() }),
  Ue = i({
    threadId: c().min(1),
    hostId: c().min(1).optional(),
    archived: a(),
  }),
  We = i({ threadId: c().min(1), title: c().min(1) });
function Ge({ deferLoading: e = !1 } = {}) {
  return [Qe, $e, et, tt, nt, rt, it].map((t) =>
    e ? { ...t, deferLoading: !0 } : t,
  );
}
async function Ke({ argumentsValue: e, sourceThreadId: t }) {
  let n = Re.safeParse(e);
  if (!n.success) return u(`${U} ${V}`);
  try {
    return Z(
      await C({
        model: n.data.model,
        prompt: n.data.prompt,
        sourceThreadId: t,
        target: n.data.target,
        thinking: n.data.thinking,
      }),
    );
  } catch (e) {
    return u(e instanceof Error ? e.message : String(e));
  }
}
async function qe({ scope: e, argumentsValue: t }) {
  let n = ze.safeParse(t);
  if (!n.success) return u(`${W} ${V}`);
  try {
    return Z(
      await De({ scope: e, limit: n.data.limit ?? Me, query: n.data.query }),
    );
  } catch (e) {
    return u(e instanceof Error ? e.message : String(e));
  }
}
async function Je({ scope: e, argumentsValue: t }) {
  let n = Be.safeParse(t);
  if (!n.success) return u(`${G} ${V}`);
  try {
    return Z(
      await O({
        scope: e,
        cursor: n.data.cursor,
        includeOutputs: n.data.includeOutputs ?? !1,
        maxOutputCharsPerItem: n.data.maxOutputCharsPerItem ?? Pe,
        threadId: n.data.threadId,
        turnLimit: n.data.turnLimit ?? Ne,
      }),
    );
  } catch (e) {
    return u(e instanceof Error ? e.message : String(e));
  }
}
async function Ye({ argumentsValue: e, sourceThreadId: t }) {
  let n = Ve.safeParse(e);
  if (!n.success) return u(`${K} ${V}`);
  try {
    return Z(
      await je({
        model: n.data.model,
        prompt: n.data.prompt,
        sourceThreadId: t,
        threadId: n.data.threadId,
        thinking: n.data.thinking,
      }),
    );
  } catch (e) {
    return u(e instanceof Error ? e.message : String(e));
  }
}
async function Xe({ argumentsValue: e }) {
  let t = He.safeParse(e);
  if (!t.success) return u(`${q} ${V}`);
  try {
    return Z(await ye(t.data));
  } catch (e) {
    return u(e instanceof Error ? e.message : String(e));
  }
}
async function Ze({ scope: e, argumentsValue: t }) {
  let n = Ue.safeParse(t);
  if (!n.success) return u(`${J} ${V}`);
  try {
    return Z(await T({ scope: e, ...n.data }));
  } catch (e) {
    return u(e instanceof Error ? e.message : String(e));
  }
}
async function X({ argumentsValue: e }) {
  let t = We.safeParse(e);
  if (!t.success) return u(`${Y} ${V}`);
  try {
    return Z(await E(t.data));
  } catch (e) {
    return u(e instanceof Error ? e.message : String(e));
  }
}
function Z(e) {
  return {
    contentItems: [{ type: `inputText`, text: JSON.stringify(e ?? null) }],
    success: !0,
  };
}
var Qe = {
    namespace: B,
    name: U,
    description: `Create a new Codex thread in the background. Use project targets for repo-scoped work and projectless targets for general tasks. Project targets must choose a local or worktree environment.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        prompt: {
          type: `string`,
          description: `Initial prompt for the new thread.`,
        },
        target: {
          description: `Where to create the thread.`,
          anyOf: [
            {
              type: `object`,
              additionalProperties: !1,
              properties: {
                type: { type: `string`, enum: [`project`] },
                projectId: {
                  type: `string`,
                  description: `Saved project id / workspace root.`,
                },
                environment: {
                  description: `Where the project thread should run: directly in the saved project or in a new worktree.`,
                  anyOf: [
                    {
                      type: `object`,
                      additionalProperties: !1,
                      properties: { type: { type: `string`, enum: [`local`] } },
                      required: [`type`],
                    },
                    {
                      type: `object`,
                      additionalProperties: !1,
                      properties: {
                        type: { type: `string`, enum: [`worktree`] },
                        startingState: {
                          description: `Starting state for the new worktree.`,
                          anyOf: [
                            {
                              type: `object`,
                              additionalProperties: !1,
                              properties: {
                                type: {
                                  type: `string`,
                                  enum: [`working-tree`],
                                },
                              },
                              required: [`type`],
                            },
                            {
                              type: `object`,
                              additionalProperties: !1,
                              properties: {
                                type: { type: `string`, enum: [`branch`] },
                                branchName: { type: `string` },
                              },
                              required: [`type`, `branchName`],
                            },
                          ],
                        },
                      },
                      required: [`type`],
                    },
                  ],
                },
              },
              required: [`type`, `projectId`, `environment`],
            },
            {
              type: `object`,
              additionalProperties: !1,
              properties: {
                type: { type: `string`, enum: [`projectless`] },
                directoryName: {
                  type: `string`,
                  description: `Optional projectless output directory name.`,
                },
              },
              required: [`type`],
            },
          ],
        },
        model: { type: `string`, description: `Optional model override.` },
        thinking: {
          type: `string`,
          description: `Optional reasoning effort override.`,
          enum: [`low`, `medium`, `high`, `xhigh`],
        },
      },
      required: [`prompt`, `target`],
    },
  },
  $e = {
    namespace: B,
    name: W,
    description: `List recent Codex threads in the background. Use an optional query to find a specific thread before reading or steering it.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        query: { type: `string`, description: `Optional thread search query.` },
        limit: {
          type: `number`,
          description: `Maximum number of thread summaries to return.`,
        },
      },
    },
  },
  et = {
    namespace: B,
    name: G,
    description: `Read recent status and turn summaries for one Codex thread without opening it. Use page cursors from earlier responses to read older turns.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Thread id to inspect.` },
        cursor: {
          type: `string`,
          description: `Optional cursor for older turns.`,
        },
        turnLimit: {
          type: `number`,
          description: `Maximum number of turns to return.`,
        },
        includeOutputs: {
          type: `boolean`,
          description: `Whether to include truncated tool or command outputs.`,
        },
        maxOutputCharsPerItem: {
          type: `number`,
          description: `Maximum output characters to keep for each included output item.`,
        },
      },
      required: [`threadId`],
    },
  },
  tt = {
    namespace: B,
    name: K,
    description: `Send a follow-up prompt to an existing Codex thread in the background. Omit model and thinking to keep the thread's current settings.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Thread id to continue.` },
        prompt: { type: `string`, description: `Follow-up prompt to send.` },
        model: { type: `string`, description: `Optional model override.` },
        thinking: {
          type: `string`,
          description: `Optional reasoning effort override.`,
          enum: [`low`, `medium`, `high`, `xhigh`],
        },
      },
      required: [`threadId`, `prompt`],
    },
  },
  nt = {
    namespace: B,
    name: q,
    description: `Pin or unpin a Codex thread in the background.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Thread id to pin or unpin.` },
        pinned: {
          type: `boolean`,
          description: `Whether the thread should be pinned.`,
        },
      },
      required: [`threadId`, `pinned`],
    },
  },
  rt = {
    namespace: B,
    name: J,
    description: `Archive or unarchive a Codex thread in the background.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: {
          type: `string`,
          description: `Thread id to archive or unarchive.`,
        },
        archived: {
          type: `boolean`,
          description: `Whether the thread should be archived.`,
        },
        hostId: {
          type: `string`,
          description: `Optional host id. Needed when unarchiving an unloaded thread.`,
        },
      },
      required: [`threadId`, `archived`],
    },
  },
  it = {
    namespace: B,
    name: Y,
    description: `Rename a Codex thread in the background.`,
    inputSchema: {
      type: `object`,
      additionalProperties: !1,
      properties: {
        threadId: { type: `string`, description: `Thread id to rename.` },
        title: { type: `string`, description: `New thread title.` },
      },
      required: [`threadId`, `title`],
    },
  },
  at = 100,
  Q = `codex_app`,
  ot = new Set([m.name, d.name, te, ie, re]);
async function st({
  featureOverrides: e,
  hostId: t,
  listExperimentalFeatures: n,
}) {
  let r = P(t),
    i = r ? await $(n) : !1,
    a = e?.[se] === !0,
    o = e?.[v] === !0,
    s = e?.[oe] === !0;
  return [
    ...(r ? [ne()] : []),
    m,
    ...(r && i ? [d] : []),
    ...(a ? Ge() : []),
    ...(r && o ? [Te, Ee] : []),
    ...(s ? p : []),
  ].map((e) => ({
    ...e,
    namespace: Q,
    ...(ot.has(e.name) ? {} : { deferLoading: !0 }),
  }));
}
async function $(e, t = null) {
  try {
    let n = await e({ cursor: t, limit: at });
    return pe(n.data)
      ? !0
      : n.nextCursor == null
        ? !1
        : await $(e, n.nextCursor);
  } catch {
    return !1;
  }
}
export {
  C,
  T as S,
  R as _,
  G as a,
  P as b,
  q as c,
  qe as d,
  Je as f,
  X as g,
  Xe as h,
  W as i,
  Y as l,
  Ze as m,
  st as n,
  K as o,
  Ye as p,
  U as r,
  J as s,
  Q as t,
  Ke as u,
  z as v,
  O as x,
  F as y,
};
//# sourceMappingURL=app-server-dynamic-tools-BARsY_O-.js.map
