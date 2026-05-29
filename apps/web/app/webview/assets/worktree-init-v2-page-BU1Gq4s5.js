import { s as e } from "./chunk-Bj-mKKzh.js";
import { mn as t, st as n, ut as r } from "./src-C.js";
import {
  Js as i,
  Qi as a,
  Vi as ee,
  Xs as o,
  zs as s,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as c, t as l } from "./jsx-runtime.js";
import {
  C as te,
  G as ne,
  S as re,
  U as u,
  X as ie,
  b as ae,
  w as oe,
  wt as d,
} from "./setting-storage.js";
import { a as se, g as ce, m as le } from "./chunk-LFPYN7LY.js";
import { r as ue } from "./toast-signal.js";
import { t as f } from "./button.js";
import "./permissions-mode-defaults.js";
import {
  a as de,
  n as fe,
  o as pe,
  r as me,
} from "./pending-worktree-store-COXB8WW0.js";
import { n as he } from "./use-start-new-conversation.js";
import { n as ge } from "./thread-layout-DxVAHgCj.js";
import { n as _e } from "./pending-worktree-conversation-DdUXOIat.js";
import { t as ve } from "./thread-scroll-layout.js";
import {
  i as ye,
  o as be,
  s as p,
} from "./user-message-attachments-C-Jxxwpp.js";
async function xe({ createPendingWorktree: e, intl: t, pendingWorktree: n }) {
  let r = h(n, t),
    i = await m(n, r),
    a = t.formatMessage({
      id: `worktreeInitV2.autoFix.label`,
      defaultMessage: `Fix worktree setup`,
      description: `Pending worktree label for a repair thread created after local environment setup fails`,
    });
  return e({
    hostId: n.hostId,
    label: a,
    initialThreadTitle: a,
    sourceWorkspaceRoot: n.sourceWorkspaceRoot,
    startingState: n.startingState,
    localEnvironmentConfigPath: null,
    launchMode: `start-conversation`,
    prompt: r,
    startConversationParamsInput: i,
    sourceConversationId: null,
    sourceCollaborationMode: null,
  });
}
async function m(e, t) {
  let n = [{ type: `text`, text: t, text_elements: [] }];
  if (e.launchMode === `start-conversation`)
    return {
      ...e.startConversationParamsInput,
      input: n,
      commentAttachments: [],
      workspaceRoots: [e.sourceWorkspaceRoot],
      cwd: e.sourceWorkspaceRoot,
      fileAttachments: [],
      addedFiles: [],
      threadSource: `user`,
    };
  let { config: r } = await o(`read-config-for-host`, {
    hostId: e.hostId,
    includeLayers: !1,
    cwd: e.sourceWorkspaceRoot,
  });
  return {
    input: n,
    commentAttachments: [],
    workspaceRoots: [e.sourceWorkspaceRoot],
    cwd: e.sourceWorkspaceRoot,
    fileAttachments: [],
    addedFiles: [],
    agentMode: s(`agent-mode-by-host-id`, {})[e.hostId] ?? `auto`,
    model: null,
    reasoningEffort: null,
    collaborationMode:
      e.launchMode === `fork-conversation` ? e.sourceCollaborationMode : null,
    config: i(r),
    threadSource: `user`,
    workspaceKind: `project`,
  };
}
function h(e, t) {
  return t.formatMessage(
    {
      id: `worktreeInitV2.autoFix.prompt`,
      defaultMessage:
        "Fix this project's local environment setup.{paragraphBreak}The original worktree setup failed before its thread could start. Do not continue the original user request. Start a one-off repair task in this new worktree without running the broken setup automatically. Paths in the failure output refer to the original source or failed worktree, so edit the corresponding files in this current repair worktree. Inspect the selected local environment config and related setup files, reproduce the failure manually if useful, make the smallest source-controlled fix, verify the setup succeeds, and leave the proposed fix here for user review before they retry the original task. If the fix should not be made automatically, explain exactly what the user should change.{paragraphBreak}Selected local environment config: {configPath}{lineBreak}Original setup error: {errorMessage}{paragraphBreak}Original setup output:{lineBreak}```text{lineBreak}{outputText}{lineBreak}```",
      description: `Prompt sent to a repair thread created after local environment setup fails`,
    },
    {
      configPath: e.localEnvironmentConfigPath ?? ``,
      errorMessage: e.errorMessage ?? ``,
      lineBreak: `
`,
      outputText: e.outputText,
      paragraphBreak: `

`,
    },
  );
}
var Se = d(),
  g = e(c(), 1),
  _ = l();
function v(e) {
  let i = (0, Se.c)(77),
    {
      homePath: a,
      conversationPathBuilder: ee,
      onConversationReady: o,
    } = e === void 0 ? {} : e,
    s = a === void 0 ? `/` : a,
    c = ee === void 0 ? n : ee,
    l = ie(re),
    d = le(),
    ye = he(),
    p = ne(),
    { pendingWorktreeId: m } = ce(),
    h = (0, g.useRef)(null),
    {
      cancelPendingWorktree: v,
      clearPendingWorktreeAttention: y,
      continuePendingWorktree: b,
      createPendingWorktree: x,
      retryPendingWorktree: Te,
      setPendingWorktreePinned: S,
    } = me(),
    { retryPendingWorktreeConversationStart: Ee } = de(),
    C = fe(m),
    w;
  i[0] === m
    ? (w = i[1])
    : ((w = (e) => e.pendingWorktreeId === m), (i[0] = m), (i[1] = w));
  let T = pe().find(w),
    E = oe({
      mutationFn: async (e) => {
        let { continueLocally: n } = e;
        if (C)
          if ((v(C.id), n))
            try {
              let e = await _e({
                entry: C,
                workspaceRoot: C.sourceWorkspaceRoot,
              });
              (o?.(e), o ?? d(c(e)));
            } catch (e) {
              let n = e;
              throw (
                v(C.id),
                te.error(`Error creating local task from worktree`, {
                  safe: {},
                  sensitive: { error: n },
                }),
                l.get(ue).danger(
                  p.formatMessage(
                    {
                      id: `composer.localTaskError.v2`,
                      defaultMessage: `Error starting chat{br}{error}`,
                      description: `Toast text shown when we failed to start a thread`,
                    },
                    { br: (0, _.jsx)(`br`, {}), error: t(n) },
                  ),
                ),
                n
              );
            }
          else ye(Ce(C));
      },
    }),
    D;
  i[2] !== x || i[3] !== p || i[4] !== d || i[5] !== C
    ? ((D = async () => {
        C &&
          d(
            r(
              await xe({
                createPendingWorktree: x,
                intl: p,
                pendingWorktree: C,
              }),
            ),
          );
      }),
      (i[2] = x),
      (i[3] = p),
      (i[4] = d),
      (i[5] = C),
      (i[6] = D))
    : (D = i[6]);
  let O;
  i[7] !== p || i[8] !== l
    ? ((O = (e) => {
        (te.error(`Error starting worktree setup repair thread`, {
          safe: {},
          sensitive: { error: e },
        }),
          l.get(ue).danger(
            p.formatMessage(
              {
                id: `composer.localTaskError.v2`,
                defaultMessage: `Error starting chat{br}{error}`,
                description: `Toast text shown when we failed to start a thread`,
              },
              { br: (0, _.jsx)(`br`, {}), error: t(e) },
            ),
          ));
      }),
      (i[7] = p),
      (i[8] = l),
      (i[9] = O))
    : (O = i[9]);
  let k;
  i[10] !== D || i[11] !== O
    ? ((k = { mutationFn: D, onError: O }),
      (i[10] = D),
      (i[11] = O),
      (i[12] = k))
    : (k = i[12]);
  let A = oe(k),
    j,
    M;
  (i[13] !== C || i[14] !== S
    ? ((M = () => {
        C && S(C.id, !C.isPinned);
      }),
      (j = [C, S]),
      (i[13] = C),
      (i[14] = S),
      (i[15] = j),
      (i[16] = M))
    : ((j = i[15]), (M = i[16])),
    ae(`toggle-thread-pin`, M, j));
  let N;
  i[17] !== y || i[18] !== m
    ? ((N = () => {
        m && y(m);
      }),
      (i[17] = y),
      (i[18] = m),
      (i[19] = N))
    : (N = i[19]);
  let De = (0, g.useEffectEvent)(N),
    P;
  i[20] === De
    ? (P = i[21])
    : ((P = () => {
        De();
      }),
      (i[20] = De),
      (i[21] = P));
  let F;
  (i[22] === m ? (F = i[23]) : ((F = [m]), (i[22] = m), (i[23] = F)),
    (0, g.useEffect)(P, F));
  let I, L;
  if (
    (i[24] === C
      ? ((I = i[25]), (L = i[26]))
      : ((I = () => {
          let e = h.current;
          !e || !C || (e.scrollTop = e.scrollHeight);
        }),
        (L = [C]),
        (i[24] = C),
        (i[25] = I),
        (i[26] = L)),
    (0, g.useEffect)(I, L),
    E.isPending || E.isSuccess || C === void 0)
  )
    return null;
  if (T?.state === `succeeded`)
    return (0, _.jsx)(se, { to: c(T.conversationId), replace: !0 });
  if (C == null && T != null) return null;
  if (!C) {
    let e;
    return (
      i[27] === s
        ? (e = i[28])
        : ((e = (0, _.jsx)(se, { to: s, replace: !0 })),
          (i[27] = s),
          (i[28] = e)),
      e
    );
  }
  let R = C.phase === `queued` || C.phase === `creating`,
    z = T?.state === `failed`,
    B = T?.state === `starting`,
    V = C.phase === `failed` || z,
    H = C.launchMode === `create-stable-worktree`,
    Oe =
      C.phase === `failed` &&
      C.worktreeGitRoot != null &&
      C.worktreeWorkspaceRoot != null,
    ke = Oe && !H,
    Ae = Oe && C.localEnvironmentConfigPath != null,
    U;
  i[29] !== C.hostId || i[30] !== C.prompt
    ? ((U = (0, _.jsx)(we, { hostId: C.hostId, prompt: C.prompt })),
      (i[29] = C.hostId),
      (i[30] = C.prompt),
      (i[31] = U))
    : (U = i[31]);
  let W;
  i[32] === B
    ? (W = i[33])
    : ((W =
        B &&
        (0, _.jsx)(u, {
          id: `worktreeInitV2.status.startingConversation`,
          defaultMessage: `Starting conversation.`,
          description: `Status shown while the renderer starts the conversation after the worktree is ready`,
        })),
      (i[32] = B),
      (i[33] = W));
  let G;
  i[34] !== z || i[35] !== B || i[36] !== C.phase
    ? ((G =
        !B &&
        !z &&
        C.phase === `worktree-ready` &&
        (0, _.jsx)(u, {
          id: `worktreeInitV2.status.success`,
          defaultMessage: `Worktree ready.`,
          description: `Status shown when worktree creation succeeds`,
        })),
      (i[34] = z),
      (i[35] = B),
      (i[36] = C.phase),
      (i[37] = G))
    : (G = i[37]);
  let K;
  i[38] === z
    ? (K = i[39])
    : ((K =
        z &&
        (0, _.jsx)(u, {
          id: `worktreeInitV2.status.startConversationError`,
          defaultMessage: `Worktree ready, but failed to start the conversation.`,
          description: `Status shown when the worktree was created but the renderer failed to start the conversation`,
        })),
      (i[38] = z),
      (i[39] = K));
  let q;
  i[40] !== z || i[41] !== C.phase
    ? ((q =
        !z &&
        C.phase === `failed` &&
        (0, _.jsx)(u, {
          id: `worktreeInitV2.status.error`,
          defaultMessage: `Worktree setup failed.`,
          description: `Status shown when worktree creation fails`,
        })),
      (i[40] = z),
      (i[41] = C.phase),
      (i[42] = q))
    : (q = i[42]);
  let J;
  i[43] !== C.launchMode || i[44] !== C.phase
    ? ((J =
        (C.phase === `queued` || C.phase === `creating`) &&
        (0, _.jsx)(_.Fragment, {
          children:
            C.launchMode === `fork-conversation`
              ? (0, _.jsx)(u, {
                  id: `worktreeInitV2.status.runningFork`,
                  defaultMessage: `Creating a worktree to fork this conversation.`,
                  description: `Status shown while worktree creation is running in fork mode`,
                })
              : (0, _.jsx)(u, {
                  id: `worktreeInitV2.status.running`,
                  defaultMessage: `Creating a worktree and running setup.`,
                  description: `Status shown while worktree creation is running`,
                }),
        })),
      (i[43] = C.launchMode),
      (i[44] = C.phase),
      (i[45] = J))
    : (J = i[45]);
  let Y;
  i[46] !== W || i[47] !== G || i[48] !== K || i[49] !== q || i[50] !== J
    ? ((Y = (0, _.jsxs)(`div`, {
        className: `text-sm text-token-description-foreground`,
        children: [W, G, K, q, J],
      })),
      (i[46] = W),
      (i[47] = G),
      (i[48] = K),
      (i[49] = q),
      (i[50] = J),
      (i[51] = Y))
    : (Y = i[51]);
  let X;
  i[52] !== A ||
  i[53] !== Ae ||
  i[54] !== ke ||
  i[55] !== E ||
  i[56] !== b ||
  i[57] !== R ||
  i[58] !== V ||
  i[59] !== H ||
  i[60] !== d ||
  i[61] !== C.id ||
  i[62] !== C.localEnvironmentConfigPath ||
  i[63] !== C.phase ||
  i[64] !== C.sourceWorkspaceRoot ||
  i[65] !== Te ||
  i[66] !== Ee
    ? ((X =
        (R || V) &&
        (0, _.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            R && !H
              ? (0, _.jsx)(f, {
                  color: `ghost`,
                  loading: E.isPending,
                  onClick: () => {
                    E.mutate({ continueLocally: !0 });
                  },
                  children: (0, _.jsx)(u, {
                    id: `worktreeInitV2.workLocallyInstead`,
                    defaultMessage: `Work locally instead`,
                    description: `Button that cancels worktree setup and starts a local conversation`,
                  }),
                })
              : null,
            R
              ? (0, _.jsx)(f, {
                  color: `ghost`,
                  loading: E.isPending,
                  onClick: () => {
                    E.mutate({ continueLocally: !1 });
                  },
                  children: (0, _.jsx)(u, {
                    id: `worktreeInitV2.cancel`,
                    defaultMessage: `Cancel`,
                    description: `Cancel button for worktree creation`,
                  }),
                })
              : null,
            V &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  C.phase === `failed` &&
                    (0, _.jsx)(f, {
                      color: `ghost`,
                      onClick: () => {
                        let e = new URLSearchParams({
                          workspaceRoot: C.sourceWorkspaceRoot,
                        });
                        (C.localEnvironmentConfigPath != null &&
                          (e.set(`configPath`, C.localEnvironmentConfigPath),
                          e.set(`mode`, `edit`)),
                          d(`/settings/local-environments?${e.toString()}`));
                      },
                      children: (0, _.jsx)(u, {
                        id: `worktreeInitV2.editEnvironment`,
                        defaultMessage: `Edit environment`,
                        description: `Button label to open local environment settings after worktree setup fails`,
                      }),
                    }),
                  Ae &&
                    (0, _.jsx)(f, {
                      color: `ghost`,
                      loading: A.isPending,
                      onClick: () => {
                        A.mutate();
                      },
                      children: (0, _.jsx)(u, {
                        id: `worktreeInitV2.autoFix`,
                        defaultMessage: `Auto-fix`,
                        description: `Button label to start a repair thread after worktree setup fails`,
                      }),
                    }),
                  (0, _.jsx)(f, {
                    color: `ghost`,
                    onClick: () => {
                      if (C.phase === `failed`) {
                        Te(C.id);
                        return;
                      }
                      Ee(C.id);
                    },
                    children: (0, _.jsx)(u, {
                      id: `codex.common.retry`,
                      defaultMessage: `Retry`,
                      description: `Retry button`,
                    }),
                  }),
                  ke &&
                    (0, _.jsx)(f, {
                      color: `primary`,
                      onClick: () => {
                        b(C.id);
                      },
                      children: (0, _.jsx)(u, {
                        id: `worktreeInitV2.continueAnyway`,
                        defaultMessage: `Continue anyway`,
                        description: `Button label to continue starting a thread after local environment setup fails`,
                      }),
                    }),
                ],
              }),
          ],
        })),
      (i[52] = A),
      (i[53] = Ae),
      (i[54] = ke),
      (i[55] = E),
      (i[56] = b),
      (i[57] = R),
      (i[58] = V),
      (i[59] = H),
      (i[60] = d),
      (i[61] = C.id),
      (i[62] = C.localEnvironmentConfigPath),
      (i[63] = C.phase),
      (i[64] = C.sourceWorkspaceRoot),
      (i[65] = Te),
      (i[66] = Ee),
      (i[67] = X))
    : (X = i[67]);
  let Z;
  i[68] !== Y || i[69] !== X
    ? ((Z = (0, _.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [Y, X],
      })),
      (i[68] = Y),
      (i[69] = X),
      (i[70] = Z))
    : (Z = i[70]);
  let Q;
  i[71] === C.outputText
    ? (Q = i[72])
    : ((Q = (0, _.jsx)(`div`, {
        ref: h,
        className: `vertical-scroll-fade-mask text-size-code flex max-h-[500px] min-h-[500px] flex-1 flex-col overflow-x-auto overflow-y-auto rounded-lg border border-token-border bg-token-editor-background p-3 font-mono text-sm whitespace-pre text-token-input-placeholder-foreground`,
        children:
          C.outputText.length > 0
            ? (0, _.jsx)(be, { className: `text-sm`, children: C.outputText })
            : (0, _.jsx)(`span`, {
                className: `text-token-input-placeholder-foreground`,
                children: (0, _.jsx)(u, {
                  id: `worktreeInitV2.output.empty`,
                  defaultMessage: `Waiting for output…`,
                  description: `Placeholder text before output starts streaming`,
                }),
              }),
      })),
      (i[71] = C.outputText),
      (i[72] = Q));
  let $;
  return (
    i[73] !== U || i[74] !== Z || i[75] !== Q
      ? (($ = (0, _.jsx)(ge, {
          children: (0, _.jsx)(ve, {
            children: (0, _.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [U, Z, Q],
            }),
          }),
        })),
        (i[73] = U),
        (i[74] = Z),
        (i[75] = Q),
        (i[76] = $))
      : ($ = i[76]),
    $
  );
}
function Ce(e) {
  let t = a(e.prompt).trim();
  if (e.launchMode !== `start-conversation`) return { prefillPrompt: t };
  let n = e.startConversationParamsInput.commentAttachments;
  return n == null || n.length === 0
    ? { prefillPrompt: t }
    : { prefillPrompt: t, prefillCommentAttachments: n };
}
function we(e) {
  let t = (0, Se.c)(10),
    { hostId: n, prompt: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = ee(r)), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  t[2] === a
    ? (o = t[3])
    : ((o = a && (0, _.jsx)(ye, { pullRequestNumber: a })),
      (t[2] = a),
      (t[3] = o));
  let s;
  t[4] !== n || t[5] !== r
    ? ((s = (0, _.jsx)(p, {
        message: r,
        sentAtMs: null,
        hostId: n,
        alwaysShowActions: !0,
      })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = s))
    : (s = t[6]);
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, _.jsxs)(`div`, {
          className: `flex flex-col items-end gap-2`,
          children: [o, s],
        })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
export { v as t };
//# sourceMappingURL=worktree-init-v2-page-BU1Gq4s5.js.map
