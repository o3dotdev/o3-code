// o3-code-patch-begin: agent-runtime-terminal-threads
import { t as terminalService } from "./terminal-service.js";

const STORAGE_KEY = `o3-code.agent-runtime-terminal-threads.v1`;
const DEFAULT_RUNTIME_ID = `codex-app`;
const TERMINAL_SESSION_PREFIX = `terminal-agent:`;
const DEFAULT_REASONING_EFFORT = `high`;
const TERMINAL_REASONING_EFFORTS = [`low`, `medium`, `high`, `xhigh`];

const registry = {
  "codex-app": {
    id: `codex-app`,
    label: `Codex App`,
    kind: `chat`,
    models: [],
    defaultModel: null,
  },
  "claude-code": {
    id: `claude-code`,
    label: `Claude Code`,
    kind: `terminal`,
    command: `claude`,
    defaultModel: `opus`,
    defaultReasoningEffort: DEFAULT_REASONING_EFFORT,
    reasoningEfforts: [...TERMINAL_REASONING_EFFORTS, `max`],
    models: [
      { label: `Opus`, value: `opus` },
      { label: `Sonnet`, value: `sonnet` },
      { label: `Haiku`, value: `haiku` },
    ],
  },
  "codex-cli": {
    id: `codex-cli`,
    label: `Codex CLI`,
    kind: `terminal`,
    command: `codex`,
    defaultModel: `gpt-5.5`,
    defaultReasoningEffort: DEFAULT_REASONING_EFFORT,
    reasoningEfforts: TERMINAL_REASONING_EFFORTS,
    models: [
      { label: `GPT-5.5`, value: `gpt-5.5` },
      { label: `GPT-5.4`, value: `gpt-5.4` },
      { label: `GPT-5.4-Mini`, value: `gpt-5.4-mini` },
      { label: `GPT-5.3-Codex`, value: `gpt-5.3-codex` },
      { label: `GPT-5.3-Codex-Spark`, value: `gpt-5.3-codex-spark` },
      { label: `GPT-5.2`, value: `gpt-5.2` },
    ],
  },
};

const listeners = new Set();

let state = normalizeState(readStoredState());

function readStoredState() {
  try {
    let raw = globalThis.localStorage?.getItem(STORAGE_KEY);
    return raw == null ? null : JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeStoredState() {
  try {
    globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

function normalizeState(value) {
  let selectedAgentRuntimeId = isRuntimeId(value?.selectedAgentRuntimeId)
    ? value.selectedAgentRuntimeId
    : DEFAULT_RUNTIME_ID;
  let selectedModels = {
    "claude-code": registry["claude-code"].defaultModel,
    "codex-cli": registry["codex-cli"].defaultModel,
    ...(value?.selectedModels && typeof value.selectedModels == `object`
      ? value.selectedModels
      : {}),
  };
  let selectedReasoningEfforts = {
    "claude-code": registry["claude-code"].defaultReasoningEffort,
    "codex-cli": registry["codex-cli"].defaultReasoningEffort,
    ...(value?.selectedReasoningEfforts &&
    typeof value.selectedReasoningEfforts == `object`
      ? value.selectedReasoningEfforts
      : {}),
  };
  let threads = {};
  if (value?.threads && typeof value.threads == `object`) {
    for (let [conversationId, metadata] of Object.entries(value.threads)) {
      if (!conversationId || metadata?.version !== 1) continue;
      let runtime = registry[metadata.agentRuntimeId];
      if (runtime?.kind !== `terminal`) continue;
      threads[conversationId] = {
        version: 1,
        conversationId,
        agentRuntimeId: runtime.id,
        label: metadata.label ?? runtime.label,
        command: metadata.command ?? runtime.command,
        externalSessionId:
          metadata.externalSessionId ?? createExternalSessionId(),
        cwd: metadata.cwd ?? null,
        hostId: metadata.hostId ?? null,
        model: normalizeModel(runtime.id, metadata.model) ?? null,
        reasoningEffort:
          normalizeReasoningEffort(runtime.id, metadata.reasoningEffort) ??
          runtime.defaultReasoningEffort ??
          null,
        permissionMode: metadata.permissionMode ?? null,
        collaborationMode: metadata.collaborationMode ?? null,
        title: metadata.title ?? null,
        createdAt: metadata.createdAt ?? Date.now(),
      };
    }
  }
  selectedModels = normalizeSelectedModels(selectedModels);
  selectedReasoningEfforts = normalizeSelectedReasoningEfforts(
    selectedReasoningEfforts,
  );
  return {
    version: 1,
    selectedAgentRuntimeId,
    selectedModels,
    selectedReasoningEfforts,
    threads,
  };
}

function emit() {
  for (let listener of listeners) listener();
}

function updateState(updater) {
  state = normalizeState(updater(state));
  writeStoredState();
  emit();
}

function isRuntimeId(value) {
  return typeof value == `string` && registry[value] != null;
}

function createExternalSessionId() {
  return typeof crypto?.randomUUID == `function`
    ? crypto.randomUUID()
    : `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (char) => {
        let value = Math.floor(Math.random() * 16);
        return (char === `x` ? value : (value & 3) | 8).toString(16);
      });
}

function shellQuote(value) {
  let text = String(value ?? ``);
  if (text.length === 0) return `''`;
  return `'${text.replaceAll(`'`, `'\\''`)}'`;
}

function getRuntime(runtimeId) {
  return registry[runtimeId] ?? registry[DEFAULT_RUNTIME_ID];
}

function normalizeModel(runtimeId, model) {
  let runtime = getRuntime(runtimeId);
  if (runtime.kind !== `terminal`) return null;
  return runtime.models.some((entry) => entry.value === model)
    ? model
    : runtime.defaultModel;
}

function normalizeSelectedModels(selectedModels) {
  let next = { ...selectedModels };
  for (let runtime of Object.values(registry)) {
    if (runtime.kind !== `terminal`) continue;
    next[runtime.id] = normalizeModel(runtime.id, next[runtime.id]);
  }
  return next;
}

function getSelectedModel(runtimeId) {
  let runtime = getRuntime(runtimeId);
  return normalizeModel(runtime.id, state.selectedModels[runtime.id]);
}

function getModelLabel(runtimeId, model) {
  let runtime = getRuntime(runtimeId);
  return (
    runtime.models.find((entry) => entry.value === model)?.label ??
    model ??
    runtime.defaultModel ??
    ``
  );
}

function setSelectedAgentRuntimeId(runtimeId) {
  if (!isRuntimeId(runtimeId)) return;
  updateState((current) => ({
    ...current,
    selectedAgentRuntimeId: runtimeId,
  }));
}

function setSelectedRuntimeModel(runtimeId, model) {
  let runtime = getRuntime(runtimeId);
  if (runtime.kind !== `terminal`) return;
  updateState((current) => ({
    ...current,
    selectedModels: {
      ...current.selectedModels,
      [runtime.id]: model || runtime.defaultModel,
    },
  }));
}

function normalizeReasoningEffort(runtimeId, reasoningEffort) {
  let runtime = getRuntime(runtimeId);
  if (runtime.kind !== `terminal`) return null;
  return runtime.reasoningEfforts?.includes(reasoningEffort)
    ? reasoningEffort
    : runtime.defaultReasoningEffort;
}

function normalizeSelectedReasoningEfforts(selectedReasoningEfforts) {
  let next = { ...selectedReasoningEfforts };
  for (let runtime of Object.values(registry)) {
    if (runtime.kind !== `terminal`) continue;
    next[runtime.id] = normalizeReasoningEffort(
      runtime.id,
      next[runtime.id],
    );
  }
  return next;
}

function getSelectedReasoningEffort(runtimeId) {
  let runtime = getRuntime(runtimeId);
  return normalizeReasoningEffort(
    runtime.id,
    state.selectedReasoningEfforts[runtime.id],
  );
}

function setSelectedRuntimeReasoningEffort(runtimeId, reasoningEffort) {
  let runtime = getRuntime(runtimeId);
  if (runtime.kind !== `terminal`) return;
  updateState((current) => ({
    ...current,
    selectedReasoningEfforts: {
      ...current.selectedReasoningEfforts,
      [runtime.id]: normalizeReasoningEffort(runtime.id, reasoningEffort),
    },
  }));
}

function subscribe(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return state;
}

function getThreadMetadata(conversationId) {
  if (conversationId == null) return null;
  return state.threads[String(conversationId)] ?? null;
}

function getEffectiveRuntimeId(conversationId) {
  return getThreadMetadata(conversationId)?.agentRuntimeId ?? DEFAULT_RUNTIME_ID;
}

function getSelectedRuntimeForNewThread() {
  return getRuntime(state.selectedAgentRuntimeId);
}

function getTerminalSessionId(conversationId) {
  return `${TERMINAL_SESSION_PREFIX}${conversationId}`;
}

function makeThreadTitle(runtimeId, prompt) {
  let runtime = getRuntime(runtimeId),
    preview = String(prompt ?? ``).replace(/\s+/g, ` `).trim().slice(0, 60);
  return preview.length > 0 ? `${runtime.label} - ${preview}` : runtime.label;
}

function createThreadMetadata({
  conversationId,
  runtimeId,
  cwd,
  hostId,
  model,
  reasoningEffort,
  permissionMode,
  collaborationMode,
  title,
}) {
  let runtime = getRuntime(runtimeId);
  if (runtime.kind !== `terminal`) return null;
  let metadata = {
    version: 1,
    conversationId,
    agentRuntimeId: runtime.id,
    label: runtime.label,
    command: runtime.command,
    externalSessionId: createExternalSessionId(),
    cwd: cwd ?? null,
    hostId: hostId ?? null,
    model: model ?? getSelectedModel(runtime.id),
    reasoningEffort:
      normalizeReasoningEffort(runtime.id, reasoningEffort) ??
      getSelectedReasoningEffort(runtime.id),
    permissionMode: permissionMode ?? null,
    collaborationMode: collaborationMode ?? null,
    title: title ?? null,
    createdAt: Date.now(),
  };
  updateState((current) => ({
    ...current,
    threads: { ...current.threads, [conversationId]: metadata },
  }));
  return metadata;
}

function forgetThreadMetadata(conversationId) {
  if (conversationId == null) return;
  updateState((current) => {
    let threads = { ...current.threads };
    delete threads[String(conversationId)];
    return { ...current, threads };
  });
}

function codexPermissionArgs(permissionMode) {
  switch (permissionMode) {
    case `full-access`:
      return [`--dangerously-bypass-approvals-and-sandbox`];
    case `guardian-approvals`:
      return [`--ask-for-approval`, `on-request`];
    default:
      return [];
  }
}

function claudePermissionArgs(permissionMode) {
  switch (permissionMode) {
    case `full-access`:
      return [`--permission-mode`, `bypassPermissions`];
    case `read-only`:
      return [`--permission-mode`, `plan`];
    case `auto`:
      return [`--permission-mode`, `auto`];
    case `guardian-approvals`:
      return [`--permission-mode`, `default`];
    default:
      return [];
  }
}

function colorTerminalEnvArgs() {
  return [
    `env`,
    `-u`,
    `NO_COLOR`,
    `TERM=xterm-256color`,
    `COLORTERM=truecolor`,
    `CLICOLOR=1`,
    `CLICOLOR_FORCE=1`,
    `FORCE_COLOR=1`,
  ];
}

function buildLaunchArgs(metadata, { resume = false, prompt = `` } = {}) {
  let runtime = getRuntime(metadata.agentRuntimeId),
    model = metadata.model ?? runtime.defaultModel,
    reasoningEffort =
      normalizeReasoningEffort(runtime.id, metadata.reasoningEffort) ??
      runtime.defaultReasoningEffort,
    args = [...colorTerminalEnvArgs(), metadata.command ?? runtime.command];
  if (runtime.id === `claude-code`) {
    args.push(`--allow-dangerously-skip-permissions`);
    args.push(resume ? `--resume` : `--session-id`, metadata.externalSessionId);
    if (model) args.push(`--model`, model);
    if (reasoningEffort) args.push(`--effort`, reasoningEffort);
    args.push(...claudePermissionArgs(metadata.permissionMode));
  } else if (runtime.id === `codex-cli`) {
    if (resume) args.push(`resume`);
    if (model) args.push(`--model`, model);
    if (reasoningEffort)
      args.push(`--config`, `model_reasoning_effort="${reasoningEffort}"`);
    args.push(...codexPermissionArgs(metadata.permissionMode));
    if (resume) args.push(metadata.externalSessionId);
  }
  let text = String(prompt ?? ``);
  if (text.trim().length > 0) args.push(text);
  return args;
}

function buildLaunchCommand(metadata, options) {
  return buildLaunchArgs(metadata, options).map(shellQuote).join(` `);
}

function isTerminalSessionLive(conversationId) {
  return (
    terminalService.getSessionForConversation(conversationId) ===
    getTerminalSessionId(conversationId)
  );
}

function launchTerminalAgentThread(metadata, { prompt = ``, resume = false } = {}) {
  let conversationId = metadata.conversationId,
    sessionId = getTerminalSessionId(conversationId),
    cwd = metadata.cwd ?? `.`;
  if (isTerminalSessionLive(conversationId)) return { launched: false };
  terminalService.create({
    sessionId,
    conversationId,
    conversationTitle: metadata.title ?? metadata.label,
    hostId: metadata.hostId ?? null,
    cwd,
  });
  terminalService.runAction(sessionId, {
    cwd,
    command: buildLaunchCommand(metadata, { prompt, resume }),
  });
  return { launched: true };
}

function sendTerminalAgentText(conversationId, text) {
  let metadata = getThreadMetadata(conversationId);
  if (metadata == null) return false;
  let sessionId = getTerminalSessionId(conversationId);
  if (isTerminalSessionLive(conversationId)) {
    terminalService.write(sessionId, `${text}\r`);
    return true;
  }
  launchTerminalAgentThread(metadata, { prompt: text, resume: true });
  return true;
}

function closeTerminalAgentThread(conversationId, { forget = false } = {}) {
  if (conversationId == null) return;
  terminalService.close(getTerminalSessionId(conversationId));
  if (forget) forgetThreadMetadata(conversationId);
}

function isTerminalRuntimeId(runtimeId) {
  return getRuntime(runtimeId).kind === `terminal`;
}

export {
  buildLaunchCommand as a,
  closeTerminalAgentThread as b,
  createThreadMetadata as c,
  getEffectiveRuntimeId as d,
  getModelLabel as e,
  forgetThreadMetadata as f,
  getRuntime as g,
  getSelectedModel as h,
  getSelectedRuntimeForNewThread as i,
  getSnapshot as j,
  getTerminalSessionId as k,
  getThreadMetadata as l,
  isTerminalRuntimeId as m,
  isTerminalSessionLive as n,
  launchTerminalAgentThread as o,
  makeThreadTitle as p,
  registry as q,
  sendTerminalAgentText as r,
  setSelectedAgentRuntimeId as s,
  setSelectedRuntimeModel as t,
  subscribe as u,
  getSelectedReasoningEffort as v,
  setSelectedRuntimeReasoningEffort as w,
};
// o3-code-patch-end: agent-runtime-terminal-threads
