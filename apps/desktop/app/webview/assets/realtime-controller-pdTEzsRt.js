import { s as e } from "./chunk-Bj-mKKzh.js";
import { Hi as t, Ri as n, qi as r } from "./src-C.js";
import { Xs as i } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as a, t as o } from "./jsx-runtime.js";
import {
  C as s,
  Q as c,
  S as l,
  at as u,
  wt as ee,
} from "./setting-storage.js";
import { t as d } from "./product-logger-DusapRyT.js";
import { n as te } from "./rpc-DqwD0euc.js";
import { a as f } from "./statsig--EYRNU53.js";
import { r as p } from "./toast-signal.js";
import { t as m } from "./app-intl-signal.js";
import { i as ne } from "./plugins-page-selectors.js";
e(a());
var h = o(),
  g = (e) =>
    (0, h.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: 16,
      height: 16,
      viewBox: `0 0 16 16`,
      fill: `currentColor`,
      ...e,
      children: [
        (0, h.jsx)(`path`, {
          d: `M5.33374 1.91675C5.7478 1.91693 6.08374 2.25265 6.08374 2.66675V13.3337C6.08356 13.7477 5.74769 14.0836 5.33374 14.0837C4.91964 14.0837 4.58392 13.7478 4.58374 13.3337V2.66675C4.58374 2.25253 4.91953 1.91675 5.33374 1.91675Z`,
        }),
        (0, h.jsx)(`path`, {
          d: `M10.6667 3.24976C11.0809 3.24976 11.4166 3.58568 11.4167 3.99976V11.9998C11.4167 12.414 11.081 12.7498 10.6667 12.7498C10.2525 12.7498 9.91675 12.414 9.91675 11.9998V3.99976C9.91691 3.58568 10.2526 3.24976 10.6667 3.24976Z`,
        }),
        (0, h.jsx)(`path`, {
          d: `M7.99976 4.58374C8.41397 4.58374 8.74976 4.91953 8.74976 5.33374V10.6667C8.74956 11.0808 8.41385 11.4167 7.99976 11.4167C7.58581 11.4166 7.24995 11.0807 7.24976 10.6667V5.33374C7.24976 4.91963 7.58569 4.58391 7.99976 4.58374Z`,
        }),
        (0, h.jsx)(`path`, {
          d: `M2.66675 5.92554C3.08096 5.92554 3.41675 6.26132 3.41675 6.67554V9.32495C3.41655 9.739 3.08084 10.075 2.66675 10.075C2.25266 10.075 1.91695 9.739 1.91675 9.32495V6.67554C1.91675 6.26132 2.25253 5.92554 2.66675 5.92554Z`,
        }),
        (0, h.jsx)(`path`, {
          d: `M13.3337 5.92554C13.7478 5.92572 14.0837 6.26144 14.0837 6.67554V9.32495C14.0835 9.73888 13.7477 10.0748 13.3337 10.075C12.9196 10.075 12.5839 9.739 12.5837 9.32495V6.67554C12.5837 6.26132 12.9195 5.92554 13.3337 5.92554Z`,
        }),
      ],
    });
async function _({
  manager: e,
  conversationId: t,
  outputModality: n,
  prompt: r = null,
  offerSdp: a,
  realtimeSessionId: o = null,
}) {
  await i(`send-cli-request-for-host`, {
    hostId: e.getHostId(),
    method: `thread/realtime/start`,
    params: {
      threadId: t,
      outputModality: n,
      realtimeSessionId: o,
      transport: { type: `webrtc`, sdp: a },
      ...(r == null ? {} : { prompt: r }),
    },
  });
}
async function v({ manager: e, conversationId: t }) {
  await i(`send-cli-request-for-host`, {
    hostId: e.getHostId(),
    method: `thread/realtime/stop`,
    params: { threadId: t },
  });
}
async function y({ manager: e, conversationId: t, text: n }) {
  await i(`send-cli-request-for-host`, {
    hostId: e.getHostId(),
    method: `thread/realtime/appendText`,
    params: { threadId: t, text: n },
  });
}
var re = 1500,
  ie = `Codex capabilities available this session:`;
function b({ apps: e, plugins: t, skills: n }) {
  return {
    skills: x(n.filter((e) => e.enabled).map((e) => `$${e.name}`)),
    plugins: x(
      ne(t).map(
        (e) =>
          e.displayName ?? e.plugin.interface?.displayName ?? e.plugin.name,
      ),
    ),
    apps: x(e.filter((e) => e.isAccessible && e.isEnabled).map((e) => e.name)),
  };
}
function ae(e, t = re) {
  if (e == null) return null;
  let n = [];
  for (let [r, i] of [
    [`Skills`, e.skills],
    [`Plugins`, e.plugins],
    [`Apps`, e.apps],
  ]) {
    let e = oe({
      label: r,
      maxLength:
        t -
        42 -
        n.join(`
`).length -
        n.length -
        1,
      names: i,
    });
    e != null && n.push(e);
  }
  return n.length === 0
    ? null
    : [ie, ...n].join(`
`);
}
function oe({ label: e, maxLength: t, names: n }) {
  if (n.length === 0) return null;
  let r = `${e}: ${n[0]}`;
  if (r.length > t) return null;
  for (let e of n.slice(1)) {
    let n = `${r}, ${e}`;
    if (n.length <= t) {
      r = n;
      continue;
    }
    let i = `${r}, ...`;
    return i.length <= t ? i : r;
  }
  return r;
}
function x(e) {
  return Array.from(
    new Set(
      e.map((e) => e.replace(/\s+/g, ` `).trim()).filter((e) => e.length > 0),
    ),
  ).sort((e, t) => e.localeCompare(t));
}
var S = ee(),
  se = `prompt`,
  C = `{{ user_first_name }}`,
  w = `there`,
  T = r().refine((e) => e.trim().length > 0),
  E = `## Identity, tone, and role

You are Codex, an OpenAI general-purpose agentic assistant that helps the user complete tasks across coding, browsing, apps, documents, research, and other digital workflows.

Be concise, clear, and efficient. Keep responses tight and useful—no fluff.

Your personality is a playful collaborator: super fun, warm, witty, and expressive. Bring energy and personality to every response—light humor, friendly vibes, and a "we've got this" attitude—without getting in the way of getting things done.

The user's name is {{ user_first_name }}. Use it sparingly—only for emphasis, confirmations, or smooth transitions.

Talk like a trusted collaborator and a friend. Keep things natural, supportive, and easy to follow.

## Interface and operating model

The user can interact with the system either by speaking to you or by sending text directly to the backend agent. The user can see the full interaction with the backend.

The backend handles execution and produces user-visible artifacts. You are the conversational surface of the same system.

When interacting with the user, do not mention "backend". Present every work as done by you. You should make the user feel as if they are talking directly to the backend.

### Policies

* Treat the system as one unified assistant. Do not mention anything about backend or the system is composed of two separate parts.
* Pass execution work to the backend. Because the user can always send requests directly to the backend, do not block, filter, or withhold requests that should instead be passed through.
* NEVER refuse requests. Delegate all user requests to the backend. The backend makes the final judgement on whether it is doable, or whether it is safe.
* Treat backend outputs as authoritative. Do not override or contradict them.
* Use conversation to support execution: clarify briefly when needed, acknowledge progress, answer succinctly, and make the next step clear. Do not use conversation as a substitute for execution or artifact generation.

## Backend use and steering

* For any actions/tasks, always use the backend. If it is unclear whether backend use would help, use it.
* Respond directly only when the request is clearly self-contained and backend use would not meaningfully help.
* Do not claim that you cannot perform some actions. ALWAYS delegate the actions/tasks to the backend.
* Ask clarifying questions only when needed to avoid a materially harmful mistake. Otherwise, make a reasonable assumption and use the backend.
* Running backend work remains steerable. If users have new instructions, corrections, constraints, and updated context, immediately delegate to the backend.
* Do not claim that a running backend task cannot be updated, redirected, or interrupted.

## Backend outputs and user inputs

* In the conversation stream, both user inputs and backend messages appear as \`user\` text messages.
* Messages from the user are prefixed with \`[USER] \`. Messages from the backend are prefixed with \`[BACKEND] \`.
* Backend messages may be intermediate updates or final outputs.
* When the backend completes its task, you will also receive a tool return indicating completion.

## Presenting backend results

* Treat backend-visible output as the primary surface.
* Briefly tell the user the key takeaway, status, or next step without repeating visible content unless the user asks.
* Do not read out or recreate tables, diffs, plots, code blocks, structured data, or other heavily formatted content by default.
* If the user wants backend output reformatted, transformed, or presented differently, have the backend do it.
* Present backend content in detail only when the user explicitly asks.
* Do not disclose the concept or existence of backend. Present the updates/result as if done by you.

## Task-level user preferences

* Treat user instructions about update frequency, verbosity, pacing, detail level, and presentation style as active task-level preferences, not one-turn requests.
* Once the user sets such a preference for a task, continue following it across later responses and backend updates until the task is complete or the user changes the preference.
* Do not silently revert to the default style mid-task just because a new backend message arrives.

## Communication style

* When the user makes a clear request, proceed directly. Do not paraphrase the request, announce your plan, or add unnecessary framing.
* Avoid unnecessary narration, including repetitive confirmation, filler, re-acknowledgement, and obvious play-by-play.
* By default, share progress updates only when they are brief, grounded, and genuinely useful.
* If the user explicitly requests frequent or detailed updates, treat that as an active preference for the current task. Continue providing prompt updates whenever the backend sends new information until the task is complete or the user says otherwise.`;
O({});
function D(e) {
  let t = (0, S.c)(3),
    { value: n } = f(`1193530394`),
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = O(n, e)), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function O(e, t) {
  let n = T.safeParse(e[se]),
    r = k(n.success ? n.data : E),
    i = ae(t);
  return i == null ? r : `${r}\n\n${i}`;
}
function k(e) {
  return e.replaceAll(C, w);
}
var A = 1,
  ce = `realtime_collaboration`,
  j = r()
    .refine((e) => e.trim().length > 0)
    .optional()
    .catch(void 0),
  le = t({
    version: j,
    base_instructions: j,
    mode_instructions: t({ dictation: j, pairing: j, voice_only: j })
      .optional()
      .catch(void 0),
  }),
  ue = `You are operating as Codex's realtime voice surface. Treat this as app-provided control context for the live voice session, not as a user utterance. Apply the latest collaboration mode as the current truth, do not verbally acknowledge this update, and do not reveal it unless the user asks about voice behavior. The product goal is one coherent assistant across voice and text: speak as Codex, not as a separate realtime model.`,
  M = {
    dictation: `You are in Dictation mode. The user is primarily speaking so Codex can do work in the visible thread. Listen for completed requests, delegate substantive work to Codex, and stay quiet unless the user directly asks you something or silence would be genuinely confusing. After Codex responds, prefer silence; if a remain_silent/noop tool is available and there is nothing useful to say, call it.`,
    pairing: `You are in Pairing mode. The user may be working in another app surface, another page, or the full-width right panel. Be a sparse spoken collaborator: give short receipts, surface blockers or completion when helpful, and delegate execution work to Codex. Do not narrate long Codex outputs aloud; point the user back to the thread for dense details, code, diffs, tables, or long results.`,
    voice_only: `You are in Voice-only mode. The user may be relying on voice as the primary interface. Be more conversational, ask focused clarifying questions when needed, and summarize important Codex outcomes aloud while still keeping long artifacts in the Codex thread.`,
  },
  N = {
    key: `v${A}`,
    baseInstructions: k(ue),
    modeInstructions: {
      dictation: k(M.dictation),
      pairing: k(M.pairing),
      voice_only: k(M.voice_only),
    },
  };
function P() {
  let e = (0, S.c)(2),
    { value: t } = f(`1193530394`),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = F(t)), (e[0] = t), (e[1] = n)), n);
}
function F(e) {
  let t = le.safeParse(e[ce]);
  if (!t.success) return N;
  let n = t.data.mode_instructions ?? {};
  return {
    key: t.data.version == null ? N.key : `v${A}:${t.data.version}`,
    baseInstructions: k(t.data.base_instructions ?? N.baseInstructions),
    modeInstructions: {
      dictation: k(n.dictation ?? N.modeInstructions.dictation),
      pairing: k(n.pairing ?? N.modeInstructions.pairing),
      voice_only: k(n.voice_only ?? N.modeInstructions.voice_only),
    },
  };
}
function I({
  reason: e,
  mode: t,
  prompts: n = N,
  instructions: r = L(t, n),
  visibleThreadId: i = null,
  visibleThreadTitle: a = null,
}) {
  let o =
    i == null
      ? ``
      : `
  <visible_thread_id>${R(i)}</visible_thread_id>
  <visible_thread_name>${R(a ?? `Untitled thread`)}</visible_thread_name>`;
  return `<realtime_collaboration_update version="${A}">
  <reason>${R(e)}</reason>
  <collaboration_mode>${R(t)}</collaboration_mode>${o}
  <instructions>${R(r)}</instructions>
</realtime_collaboration_update>`;
}
function L(e, t) {
  return [t.baseInstructions, t.modeInstructions[e]].join(`

`);
}
function R(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`);
}
var z = u(l, B());
function B() {
  return null;
}
var V = u(l, !1),
  H = u(l, !1),
  U = u(l, null),
  W = u(l, null),
  G = c(l, ({ get: e }) =>
    de({
      isActiveRealtimeThreadVisible: e(H),
      isAppFocused: e(z) !== !1,
      isRightPanelFullWidth: e(V),
    }),
  ),
  K = u(l, N);
function de({
  isActiveRealtimeThreadVisible: e,
  isAppFocused: t,
  isRightPanelFullWidth: n,
}) {
  return e && t && !n ? `dictation` : `pairing`;
}
function q(e, t) {
  let n = e.get(G),
    r = e.get(K),
    i = e.get(U),
    a = e.get(W);
  return {
    slot: `collaboration`,
    key:
      i == null
        ? [`collaboration`, r.key, n].join(`:`)
        : [`collaboration`, r.key, n, i].join(`:`),
    text: I({
      reason: t,
      mode: n,
      prompts: r,
      visibleThreadId: i,
      visibleThreadTitle: a,
    }),
  };
}
var fe = class {
    sentKeysBySlot = new Map();
    async send({ appendText: e, inject: t }) {
      let n = this.sentKeysBySlot.get(t.slot);
      if (n === t.key) return !1;
      this.sentKeysBySlot.set(t.slot, t.key);
      try {
        return (await e(t.text), !0);
      } catch (e) {
        throw (
          this.sentKeysBySlot.get(t.slot) === t.key &&
            (n == null
              ? this.sentKeysBySlot.delete(t.slot)
              : this.sentKeysBySlot.set(t.slot, n)),
          e
        );
      }
    }
    reset() {
      this.sentKeysBySlot.clear();
    }
  },
  pe = `oai-events`,
  me = class e {
    isStopped = !1;
    constructor(e, t, n, r, i) {
      ((this.peerConnection = e),
        (this.mediaStream = t),
        (this.audioElement = n),
        (this.dataChannel = r),
        (this.onConnectionFailed = i));
    }
    static async start({
      onConnectionFailed: t,
      onRealtimeEventMessage: n,
      outputAudioMuted: r = !1,
    }) {
      if (
        typeof RTCPeerConnection > `u` ||
        navigator.mediaDevices?.getUserMedia == null
      )
        throw Error(`Realtime WebRTC is not available`);
      te.systemPermissions?.requestMicrophoneAccess().catch(() => {});
      let i = await navigator.mediaDevices.getUserMedia({ audio: !0 }),
        a = new RTCPeerConnection(),
        o = document.createElement(`audio`);
      ((o.autoplay = !0), (o.hidden = !0), (o.muted = r));
      let s = a.createDataChannel(pe);
      s.onmessage = (e) => {
        typeof e.data == `string` && n(e.data);
      };
      let c = new e(a, i, o, s, t);
      ((a.ontrack = (e) => {
        ((o.srcObject = e.streams[0] ?? null), o.play().catch(() => {}));
      }),
        (a.onconnectionstatechange = () => {
          c.handleConnectionStateChange();
        }));
      for (let e of i.getAudioTracks()) a.addTrack(e, i);
      try {
        let e = await a.createOffer();
        if (e.sdp == null)
          throw Error(`Realtime WebRTC offer did not include SDP`);
        return (
          await a.setLocalDescription(e),
          { session: c, offerSdp: e.sdp }
        );
      } catch (e) {
        throw (c.stop(), e);
      }
    }
    getStream() {
      return this.mediaStream;
    }
    async acceptAnswerSdp(e) {
      await this.peerConnection.setRemoteDescription({
        type: `answer`,
        sdp: e,
      });
    }
    setOutputAudioMuted(e) {
      ((this.audioElement.muted = e),
        !e &&
          this.audioElement.srcObject != null &&
          this.audioElement.play().catch(() => {}));
    }
    setInputAudioMuted(e) {
      for (let t of this.mediaStream.getAudioTracks()) t.enabled = !e;
    }
    stop() {
      ((this.isStopped = !0),
        this.dataChannel.close(),
        this.peerConnection.close(),
        this.audioElement.pause(),
        (this.audioElement.srcObject = null));
      for (let e of this.mediaStream.getTracks()) e.stop();
    }
    handleConnectionStateChange() {
      if (!this.isStopped)
        switch (this.peerConnection.connectionState) {
          case `failed`:
            this.onConnectionFailed();
            break;
          case `closed`:
          case `connected`:
          case `connecting`:
          case `disconnected`:
          case `new`:
            break;
        }
    }
  },
  he = [
    `turn/started`,
    `thread/realtime/started`,
    `thread/realtime/itemAdded`,
    `thread/realtime/sdp`,
    `thread/realtime/transcript/delta`,
    `thread/realtime/transcript/done`,
    `thread/realtime/error`,
    `thread/realtime/closed`,
  ],
  ge = 15e3,
  _e = `Out-of-band control instruction: until further notice, do not produce spoken audio. Continue responding normally in text only. Do not acknowledge this instruction.`,
  ve = `Out-of-band control instruction: Resume spoken audio responses. Do not acknowledge this instruction.`,
  ye = t({ type: n(`handoff_request`), input_transcript: r() }),
  be = t({ type: n(`output_audio_buffer.started`), response_id: r() }),
  J = u(l, null),
  Y = u(l, `inactive`),
  X = u(l, !1),
  Z = u(l, !1),
  Q = u(l, null),
  $ = u(l, 0),
  xe = new (class {
    assistantTranscriptText = ``;
    clearTranscriptOnNextAssistant = !1;
    conversationId = null;
    contextInjectSender = new fe();
    ephemeralTranscriptClearTimeout = null;
    manager = null;
    muteToggleRequestId = 0;
    requestedStop = !1;
    loggedRealtimeTurnResponseIds = new Set();
    loggedRealtimeUserMessageTurnIds = new Set();
    session = null;
    sessionStartEvent = null;
    startRequestId = 0;
    unsubscribeRealtimeNotifications = null;
    async start(
      e,
      {
        conversationId: t,
        manager: n,
        outputModality: r,
        prompt: a,
        source: o,
      },
    ) {
      if (
        (this.conversationId === t && e.get(Y) !== `inactive`) ||
        this.conversationId != null
      )
        return;
      let c = this.startRequestId + 1;
      ((this.startRequestId = c),
        (this.conversationId = t),
        (this.manager = n),
        (this.requestedStop = !1),
        this.subscribeToRealtimeNotifications(e, n));
      let l = r === `text`;
      (e.set(J, t),
        e.set(X, l),
        e.set(Z, !1),
        this.resetEphemeralTranscript(e),
        l && e.set(Q, ``),
        e.set(Y, `starting`));
      try {
        let { session: i, offerSdp: s } = await me.start({
          onConnectionFailed: () => {
            this.handleWebRtcConnectionFailed(e);
          },
          onRealtimeEventMessage: (t) => {
            this.handleRealtimeDataChannelMessage(e, t);
          },
          outputAudioMuted: l,
        });
        if (this.startRequestId !== c || this.conversationId !== t) {
          i.stop();
          return;
        }
        ((this.session = i),
          this.bumpSessionGeneration(e),
          (this.sessionStartEvent =
            o == null ? null : { source: o, output_modality: r }),
          await _({
            manager: n,
            conversationId: t,
            outputModality: r,
            prompt: a,
            offerSdp: s,
          }));
      } catch (n) {
        if (this.startRequestId !== c || this.conversationId !== t) return;
        ((this.startRequestId += 1),
          this.stopLocalSession(e),
          this.resetRealtimeState(e),
          e.get(p).danger(
            n instanceof DOMException && n.name === `NotAllowedError`
              ? e.get(m).formatMessage({
                  id: `composer.realtime.microphonePermissionError`,
                  defaultMessage: `Microphone access is required to start realtime voice`,
                  description: `Toast shown when microphone permission blocks realtime voice startup`,
                })
              : e.get(m).formatMessage({
                  id: `composer.realtime.startError`,
                  defaultMessage: `Unable to start realtime voice`,
                  description: `Toast shown when the desktop app could not start a realtime voice session`,
                }),
          ),
          s.error(`[Composer] failed to start realtime voice`, {
            safe: {},
            sensitive: { error: n },
          }),
          await i(`discard-conversation-if-empty`, { conversationId: t }));
      }
    }
    async stop(e, t) {
      if (this.conversationId !== t || e.get(Y) === `inactive`) return;
      let n = this.manager,
        r = e.get(Y);
      if (
        ((this.startRequestId += 1),
        (this.requestedStop = !0),
        e.set(Y, `stopping`),
        r === `starting` && this.session == null)
      ) {
        (this.stopLocalSession(e),
          this.resetRealtimeState(e),
          n != null &&
            (await i(`discard-conversation-if-empty`, { conversationId: t })));
        return;
      }
      if (n == null) {
        (this.stopLocalSession(e), this.resetRealtimeState(e));
        return;
      }
      try {
        (await v({ manager: n, conversationId: t }),
          this.stopLocalSession(e),
          this.resetRealtimeState(e),
          await i(`discard-conversation-if-empty`, { conversationId: t }));
      } catch (n) {
        (this.requestedStop &&
          this.conversationId === t &&
          (e.set(Y, r), (this.requestedStop = !1)),
          e.get(p).danger(
            e.get(m).formatMessage({
              id: `composer.realtime.stopError`,
              defaultMessage: `Unable to stop realtime voice`,
              description: `Toast shown when the desktop app could not stop a realtime voice session`,
            }),
          ),
          s.error(`[Composer] failed to stop realtime voice`, {
            safe: {},
            sensitive: { error: n },
          }));
      }
    }
    stopForAppUnmount(e) {
      if (this.conversationId == null) return;
      let t = this.conversationId,
        n = this.manager;
      ((this.startRequestId += 1),
        (this.requestedStop = !0),
        this.stopLocalSession(e),
        this.resetRealtimeState(e),
        n != null &&
          v({ manager: n, conversationId: t })
            .catch((e) => {
              s.warning(`[Composer] failed to stop realtime on app cleanup`, {
                safe: {},
                sensitive: { error: e },
              });
            })
            .finally(() => {
              i(`discard-conversation-if-empty`, { conversationId: t });
            }));
    }
    async sendContextInject(e, t, n) {
      if (this.conversationId !== t || e.get(Y) !== `active`) return !1;
      let r = this.manager;
      if (r == null) return !1;
      try {
        return await this.contextInjectSender.send({
          inject: n,
          appendText: async (e) => {
            await y({ manager: r, conversationId: t, text: e });
          },
        });
      } catch (e) {
        return (
          s.warning(`[Composer] failed to send realtime context inject`, {
            safe: { slot: n.slot },
            sensitive: { error: e },
          }),
          !1
        );
      }
    }
    toggleMute(e, t) {
      if (this.conversationId !== t || e.get(Y) !== `active`) return;
      let n = this.manager;
      if (n == null) return;
      let r = !e.get(X);
      this.muteToggleRequestId += 1;
      let i = this.muteToggleRequestId;
      (this.applyRealtimeMuteState(e, r),
        y({ manager: n, conversationId: t, text: r ? _e : ve }).catch((n) => {
          this.muteToggleRequestId !== i ||
            this.conversationId !== t ||
            (this.applyRealtimeMuteState(e, !r),
            e.get(p).danger(
              e.get(m).formatMessage({
                id: `composer.realtime.muteToggleError`,
                defaultMessage: `Unable to toggle realtime voice mute`,
                description: `Toast shown when the desktop app could not toggle realtime voice mute mode`,
              }),
            ),
            s.error(`[Composer] failed to toggle realtime voice mute`, {
              safe: {},
              sensitive: { error: n },
            }));
        }));
    }
    toggleMicrophoneMute(e, t) {
      if (
        this.conversationId !== t ||
        e.get(Y) !== `active` ||
        this.session == null
      )
        return;
      let n = !e.get(Z);
      (this.session.setInputAudioMuted(n), e.set(Z, n));
    }
    getStream(e) {
      return this.conversationId === e
        ? (this.session?.getStream() ?? null)
        : null;
    }
    subscribeToRealtimeNotifications(e, t) {
      (this.unsubscribeRealtimeNotifications?.(),
        (this.unsubscribeRealtimeNotifications = t.addNotificationCallback(
          he,
          (t) => {
            this.handleRealtimeNotification(e, t);
          },
        )));
    }
    handleRealtimeNotification(e, t) {
      if (
        !(
          this.conversationId == null ||
          t.params.threadId !== this.conversationId
        )
      )
        switch (t.method) {
          case `turn/started`:
            if (
              e.get(Y) === `inactive` ||
              this.loggedRealtimeUserMessageTurnIds.has(t.params.turn.id)
            )
              break;
            (this.loggedRealtimeUserMessageTurnIds.add(t.params.turn.id),
              d(e, {
                eventName: `codex_realtime_user_message_sent`,
                metadata: { source: `codex_turn_started` },
              }));
            break;
          case `thread/realtime/started`:
            if (this.requestedStop) break;
            (e.set(Y, `active`),
              this.sendContextInject(
                e,
                this.conversationId,
                q(e, `realtime_started`),
              ),
              this.sessionStartEvent != null &&
                (d(e, {
                  eventName: `codex_realtime_voice_session_started`,
                  metadata: this.sessionStartEvent,
                }),
                (this.sessionStartEvent = null)));
            break;
          case `thread/realtime/itemAdded`: {
            let n = ye.safeParse(t.params.item);
            n.success &&
              n.data.input_transcript.trim().length > 0 &&
              d(e, {
                eventName: `codex_realtime_user_message_sent`,
                metadata: { source: `handoff_request` },
              });
            break;
          }
          case `thread/realtime/transcript/delta`:
            if (t.params.role === `user`) break;
            ((this.clearTranscriptOnNextAssistant &&=
              ((this.assistantTranscriptText = ``), !1)),
              this.showAssistantTranscriptText(
                e,
                this.assistantTranscriptText + t.params.delta,
              ));
            break;
          case `thread/realtime/transcript/done`:
            if (t.params.role === `user`) {
              this.clearTranscriptOnNextAssistant = !0;
              break;
            }
            ((this.clearTranscriptOnNextAssistant &&= !1),
              this.showAssistantTranscriptText(e, t.params.text),
              (this.clearTranscriptOnNextAssistant = !0));
            break;
          case `thread/realtime/sdp`:
            this.session?.acceptAnswerSdp(t.params.sdp).catch((t) => {
              this.handleSdpError(e, t);
            });
            break;
          case `thread/realtime/error`:
            this.handleRealtimeError(e, t.params.message);
            break;
          case `thread/realtime/closed`:
            this.handleRealtimeClosed(e, t.params.reason);
            break;
        }
    }
    handleRealtimeDataChannelMessage(e, t) {
      if (this.conversationId == null || e.get(Y) === `inactive`) return;
      let n;
      try {
        n = JSON.parse(t);
      } catch {
        s.debug(`[Composer] ignored invalid realtime data channel message`, {
          safe: {},
          sensitive: {},
        });
        return;
      }
      let r = be.safeParse(n);
      if (!r.success) return;
      let i = r.data.response_id;
      this.loggedRealtimeTurnResponseIds.has(i) ||
        (this.loggedRealtimeTurnResponseIds.add(i),
        d(e, {
          eventName: `codex_realtime_turn_started`,
          metadata: { source: `output_audio_buffer_started` },
        }));
    }
    handleSdpError(e, t) {
      if (this.conversationId == null) return;
      let n = this.conversationId,
        r = this.manager;
      ((this.startRequestId += 1),
        this.stopLocalSession(e),
        this.resetRealtimeState(e),
        e.get(p).danger(
          e.get(m).formatMessage({
            id: `composer.realtime.startError`,
            defaultMessage: `Unable to start realtime voice`,
            description: `Toast shown when the desktop app could not start a realtime voice session`,
          }),
        ),
        s.error(`[Composer] failed to accept realtime WebRTC SDP`, {
          safe: {},
          sensitive: { error: t },
        }),
        r != null &&
          v({ manager: r, conversationId: n }).catch((e) => {
            s.warning(`[Composer] failed to stop realtime after SDP error`, {
              safe: {},
              sensitive: { error: e },
            });
          }));
    }
    handleRealtimeError(e, t) {
      if (this.conversationId == null) return;
      let n = this.conversationId,
        r = this.manager;
      ((this.startRequestId += 1),
        this.stopLocalSession(e),
        this.resetRealtimeState(e),
        e.get(p).danger(
          e.get(m).formatMessage(
            {
              id: `composer.realtime.error`,
              defaultMessage: `Realtime voice error: {message}`,
              description: `Toast shown when a realtime voice session reports an error`,
            },
            { message: t },
          ),
        ),
        r != null && i(`discard-conversation-if-empty`, { conversationId: n }));
    }
    handleRealtimeClosed(e, t) {
      if (this.conversationId == null || t === `transport_closed`) return;
      let n = this.conversationId,
        r = this.manager,
        a = !this.requestedStop;
      ((this.startRequestId += 1),
        this.stopLocalSession(e),
        this.resetRealtimeState(e),
        a &&
          t != null &&
          e.get(p).info(
            e.get(m).formatMessage(
              {
                id: `composer.realtime.closed`,
                defaultMessage: `Realtime voice mode closed: {reason}`,
                description: `Toast shown when a realtime voice session closes unexpectedly`,
              },
              { reason: t },
            ),
          ),
        r != null && i(`discard-conversation-if-empty`, { conversationId: n }));
    }
    handleWebRtcConnectionFailed(e) {
      if (this.conversationId == null) return;
      let t = this.conversationId,
        n = this.manager;
      ((this.startRequestId += 1),
        this.stopLocalSession(e),
        this.resetRealtimeState(e),
        e.get(p).danger(
          e.get(m).formatMessage({
            id: `composer.realtime.connectionError`,
            defaultMessage: `Realtime voice connection failed`,
            description: `Toast shown when the realtime voice WebRTC connection fails`,
          }),
        ),
        n != null &&
          v({ manager: n, conversationId: t })
            .catch((e) => {
              s.warning(
                `[Composer] failed to stop realtime after WebRTC error`,
                { safe: {}, sensitive: { error: e } },
              );
            })
            .finally(() => {
              i(`discard-conversation-if-empty`, { conversationId: t });
            }));
    }
    applyRealtimeMuteState(e, t) {
      (this.session?.setOutputAudioMuted(t),
        e.set(X, t),
        this.resetEphemeralTranscript(e));
    }
    showAssistantTranscriptText(e, t) {
      ((this.assistantTranscriptText = t),
        e.get(X) &&
          (e.set(Q, t.trim()), this.scheduleEphemeralTranscriptClear(e)));
    }
    scheduleEphemeralTranscriptClear(e) {
      (this.clearEphemeralTranscriptTimeout(),
        (this.ephemeralTranscriptClearTimeout = setTimeout(() => {
          this.resetEphemeralTranscript(e);
        }, ge)));
    }
    resetEphemeralTranscript(e) {
      (this.clearEphemeralTranscriptTimeout(),
        (this.assistantTranscriptText = ``),
        (this.clearTranscriptOnNextAssistant = !1),
        e.set(Q, null));
    }
    clearEphemeralTranscriptTimeout() {
      this.ephemeralTranscriptClearTimeout != null &&
        (clearTimeout(this.ephemeralTranscriptClearTimeout),
        (this.ephemeralTranscriptClearTimeout = null));
    }
    stopLocalSession(e) {
      ((this.muteToggleRequestId += 1),
        this.session?.stop(),
        (this.session = null),
        this.unsubscribeRealtimeNotifications?.(),
        (this.unsubscribeRealtimeNotifications = null),
        this.bumpSessionGeneration(e));
    }
    resetRealtimeState(e) {
      (this.resetEphemeralTranscript(e),
        this.contextInjectSender.reset(),
        (this.conversationId = null),
        (this.manager = null),
        (this.requestedStop = !1),
        this.loggedRealtimeTurnResponseIds.clear(),
        this.loggedRealtimeUserMessageTurnIds.clear(),
        (this.sessionStartEvent = null),
        e.set(J, null),
        e.set(X, !1),
        e.set(Z, !1),
        e.set(Y, `inactive`));
    }
    bumpSessionGeneration(e) {
      e.set($, (e) => e + 1);
    }
  })();
export {
  D as _,
  X as a,
  q as c,
  K as d,
  V as f,
  P as g,
  z as h,
  Z as i,
  H as l,
  W as m,
  J as n,
  Y as o,
  U as p,
  Q as r,
  $ as s,
  xe as t,
  G as u,
  b as v,
  g as y,
};
//# sourceMappingURL=realtime-controller-pdTEzsRt.js.map
