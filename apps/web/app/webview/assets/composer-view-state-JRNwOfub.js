import {
  Hs as e,
  Ps as t,
  kt as n,
  qs as r,
  zs as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { t as a } from "./v4.js";
import {
  Q as o,
  S as s,
  X as c,
  at as l,
  ot as u,
  rt as d,
  wt as f,
} from "./setting-storage.js";
import { a as p, o as m } from "./codex-api-bK--r_2t.js";
import { t as h } from "./route-scope.js";
import { n as g, s as _, u as v } from "./prompt-text-DuAhtLDu.js";
import { n as ee } from "./use-environment.js";
function y(e) {
  return `input_items` in e;
}
function te({ taskTurns: e, fallbackUserTurn: t, fallbackAssistantTurn: n }) {
  let r = new Map();
  return (
    Object.values(e?.turn_mapping ?? {}).forEach((e) => {
      e?.turn && r.set(e.turn.id, e.turn);
    }),
    t && r.set(t.id, t),
    n && r.set(n.id, n),
    Array.from(r.values()).sort((e, t) => e.created_at - t.created_at)
  );
}
function b(e) {
  let t = {},
    n = {},
    r;
  for (let i of e)
    y(i)
      ? i.previous_turn_id
        ? (n[i.previous_turn_id] = i)
        : (r = i)
      : i.previous_turn_id && (t[i.previous_turn_id] ??= []).push(i);
  if (!r) return null;
  let i = (e) => {
    let r = t[e.id] ?? [],
      a = {};
    for (let e of r) {
      let t = n[e.id];
      t && (a[e.id] = i(t));
    }
    return { userTurn: e, assistantTurns: r, children: a };
  };
  return i(r);
}
function x(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (y(n) && n.previous_turn_id) return n.previous_turn_id;
  }
  return null;
}
function S(e, t) {
  if (!e) return [];
  let n = [];
  if (t) {
    let r = (e) => {
        for (let n of e.assistantTurns) {
          if (n.id === t) return [{ node: e, activeId: n.id }];
          let i = e.children[n.id],
            a = i && r(i);
          if (a) return [{ node: e, activeId: n.id }, ...a];
        }
        return null;
      },
      i = r(e);
    i && n.push(...i);
  }
  n.length === 0 &&
    n.push({ node: e, activeId: e.assistantTurns[0]?.id ?? null });
  let r = n[n.length - 1];
  for (; r?.activeId; ) {
    let e = r.node.children[r.activeId];
    if (!e) break;
    (n.push({ node: e, activeId: e.assistantTurns[0]?.id ?? null }),
      (r = n[n.length - 1]));
  }
  return n;
}
var C = d(h, ({ scope: e }) =>
    p(e.value.routeKind === `remote-thread` ? e.value.taskId : null),
  ),
  w = d(h, ({ scope: e }) =>
    m(e.value.routeKind === `remote-thread` ? e.value.taskId : null),
  ),
  T = l(h, null),
  E = u(s, (e) => !1),
  D = o(h, ({ get: e }) => {
    let { data: t } = e(C);
    return te({
      taskTurns: e(w).data,
      fallbackUserTurn: t?.current_user_turn ?? null,
      fallbackAssistantTurn: t?.current_assistant_turn ?? null,
    });
  }),
  O = o(h, ({ get: e }) => {
    let t = e(T);
    if (t != null) return t;
    let { data: n } = e(C);
    return n?.current_assistant_turn?.id ?? x(e(D));
  }),
  k = o(h, ({ get: e }) => {
    let t = e(O);
    if (t == null) return null;
    let n = e(D).find((e) => e.id === t);
    return n == null || y(n) ? null : n;
  }),
  A = o(h, ({ get: e }) => {
    let t = e(O);
    return t == null ? !1 : e(E, t);
  });
function j(e, t) {
  e.set(T, t);
}
function M(e, t) {
  e.set(E, t, !0);
}
function ne(e, t) {
  e.set(E, t, !1);
}
var re = o(h, ({ get: e }) => {
    let { data: t } = e(C),
      n = e(O);
    if (!(t == null || n == null))
      return {
        type: `cloud`,
        hasAppliedCodeLocally: e(A),
        taskDetails: t,
        selectedTurnId: n,
        selectedTurn: e(k) ?? void 0,
      };
  }),
  N = o(_, ({ get: e, scope: t }) => {
    switch (t.value.kind) {
      case `local`:
        return { type: `local`, localConversationId: t.value.conversationId };
      case `cloud`:
        return e(re);
      case `new`:
      case `other`:
        return;
    }
  }),
  P = f(),
  F = t(`last-used-continue-in-mode`, `local`);
function I(e) {
  return e === `remote` ? `local` : e;
}
var L = n(`last-used-continue-in-mode`, `local`),
  R = n(`environment`, null),
  z = n(`composer-auto-context-enabled`, !0),
  B = `composer-prompt-drafts-v1`,
  V = {},
  H = n(B, V),
  U = u(s, (e) => void 0),
  W = u(s, (e) => []),
  G = o(s, ({ get: e }) => e(H) ?? i(B, V)),
  K = l(_, () => void 0, {
    onMount(e, t) {
      if (t.value.kind !== `local`) return;
      let { conversationId: n } = t.value,
        r = t.get(U, n);
      return (
        r != null && (e(Te(r)), $(t, r.prompt), t.set(U, n, void 0)),
        t.watch(({ get: e }) => {
          let r = e(W, n);
          r.length !== 0 &&
            (Z(t, (e) => {
              e.selectedTextAttachments.push(...r);
            }),
            t.set(W, n, []));
        })
      );
    },
  }),
  q = o(_, ({ get: e }) => {
    let t = e(R) ?? null,
      n = I(e(L) ?? `local`),
      r = ee(t)?.default_branch ?? `main`,
      i = e(N);
    return (
      i != null && n === `worktree`
        ? (n = `local`)
        : i?.type === `cloud` && !i.hasAppliedCodeLocally
          ? (n = `cloud`)
          : i?.type === `local` && (n = `local`),
      {
        pendingThreadGoalObjective: null,
        composerMode: n,
        isAutoContextOn: e(z) ?? !0,
        imageAttachments: [],
        appshotContexts: [],
        fileAttachments: [],
        addedFiles: [],
        commentAttachments: [],
        mcpAppModelContextAttachments: [],
        selectedTextAttachments: [],
        pullRequestChecks: [],
        pullRequestMergeConflict: null,
        asyncThreadStartingState: {
          type: r ? `branch` : `working-tree`,
          branchName: r ?? `main`,
        },
        followUpCloudStartingState: `direct-follow-up`,
        defaultBranchSnapshot: r,
      }
    );
  }),
  J = o(_, ({ get: e }) => ({ ...e(q), ...e(K) })),
  Y = o(_, ({ get: e }) => e(J).composerMode),
  X = o(_, ({ get: e, scope: t }) => e(G)[v(t.value)] ?? ``),
  ie = o(_, ({ get: e }) => g(e(X))),
  ae = o(_, ({ get: e }) => ({ ...e(J), prompt: e(X) })),
  oe = o(_, ({ get: e }) => e(J).pendingThreadGoalObjective),
  se = o(_, ({ get: e }) => e(J).isAutoContextOn),
  ce = o(_, ({ get: e }) => e(J).imageAttachments),
  le = o(_, ({ get: e }) => e(J).appshotContexts),
  ue = o(_, ({ get: e }) => e(J).fileAttachments),
  de = o(_, ({ get: e }) => e(J).addedFiles),
  fe = o(_, ({ get: e }) => e(J).commentAttachments),
  pe = o(_, ({ get: e }) => e(J).mcpAppModelContextAttachments),
  me = o(_, ({ get: e }) => e(J).selectedTextAttachments),
  he = o(_, ({ get: e }) => e(J).pullRequestChecks),
  ge = o(_, ({ get: e }) => e(J).pullRequestMergeConflict),
  _e = o(_, ({ get: e }) => e(J).asyncThreadStartingState),
  ve = o(_, ({ get: e }) => e(J).followUpCloudStartingState),
  ye = o(_, ({ get: e }) => e(J).defaultBranchSnapshot);
function be(e, t) {
  let n = e.get(X),
    r = typeof t == `function` ? t(n) : t;
  Object.is(n, r) || $(e, r);
}
function Z(e, t) {
  let n = e.get(J),
    i = r(n, t);
  i !== n && e.set(K, i);
}
function Q(e, t, n) {
  let r = t.trim();
  r.length !== 0 &&
    Z(e, (e) => {
      e.selectedTextAttachments.push({
        id: a(),
        text: n == null ? r : t,
        ...(n == null ? {} : { source: n }),
      });
    });
}
function xe(e, t, n) {
  let r = n.trim();
  r.length !== 0 && e.set(W, t, (e) => [...e, { id: a(), text: r }]);
}
function Se(e) {
  let t = (0, P.c)(3),
    n = c(_),
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (t) => {
          n.value.kind !== `local` || n.value.conversationId !== e || Q(n, t);
        }),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function Ce(e) {
  let t = (0, P.c)(3),
    n = c(_),
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (t) => {
          n.value.kind !== `local` || n.value.conversationId !== e || we(n, t);
        }),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function we(e, t) {
  Z(e, (e) => {
    let { id: n, imageAttachments: r, text: i } = t,
      a = e.mcpAppModelContextAttachments.findIndex((e) => e.id === n),
      o = i?.trim() ?? ``;
    if (o.length === 0 && r.length === 0) {
      a !== -1 && e.mcpAppModelContextAttachments.splice(a, 1);
      return;
    }
    let s = { ...t, text: o.length > 0 ? o : null };
    if (a === -1) {
      e.mcpAppModelContextAttachments.push(s);
      return;
    }
    e.mcpAppModelContextAttachments[a] = s;
  });
}
function Te(e) {
  return {
    pendingThreadGoalObjective: e.pendingThreadGoalObjective,
    composerMode: e.composerMode,
    isAutoContextOn: e.isAutoContextOn,
    imageAttachments: e.imageAttachments,
    appshotContexts: e.appshotContexts,
    fileAttachments: e.fileAttachments,
    addedFiles: e.addedFiles,
    commentAttachments: e.commentAttachments,
    mcpAppModelContextAttachments: e.mcpAppModelContextAttachments,
    selectedTextAttachments: e.selectedTextAttachments,
    pullRequestChecks: e.pullRequestChecks,
    pullRequestMergeConflict: e.pullRequestMergeConflict,
    asyncThreadStartingState: e.asyncThreadStartingState,
    followUpCloudStartingState: e.followUpCloudStartingState,
    defaultBranchSnapshot: e.defaultBranchSnapshot,
  };
}
function $(t, n) {
  let r = t.get(G),
    i = v(t.value);
  if (n.length > 0) {
    let a = { ...r, [i]: n };
    (e(B, a), t.set(H, a));
    return;
  }
  if (r[i] == null) return;
  let a = { ...r };
  (delete a[i], e(B, a), t.set(H, a));
}
export {
  D as A,
  Z as C,
  ne as D,
  N as E,
  b as F,
  S as I,
  y as L,
  j as M,
  C as N,
  E as O,
  w as P,
  be as S,
  Ce as T,
  he as _,
  _e as a,
  ae as b,
  ue as c,
  se as d,
  pe as f,
  ie as g,
  X as h,
  le as i,
  k as j,
  M as k,
  ve as l,
  oe as m,
  xe as n,
  fe as o,
  Y as p,
  de as r,
  ye as s,
  F as t,
  ce as u,
  ge as v,
  Se as w,
  U as x,
  me as y,
};
//# sourceMappingURL=composer-view-state-JRNwOfub.js.map
