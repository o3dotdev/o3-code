import { st as e } from "./src-C.js";
import {
  Es as t,
  Q as n,
  Ts as r,
  Z as i,
  g as a,
  ht as o,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { t as s } from "./jsx-runtime.js";
import {
  Q as c,
  S as l,
  U as u,
  V as d,
  wt as f,
  y as p,
} from "./setting-storage.js";
import { r as m } from "./product-logger-DusapRyT.js";
import { o as h } from "./statsig--EYRNU53.js";
import { t as g } from "./button.js";
import { n as _ } from "./local-conversation-title-signals-bVA-f9H8.js";
import {
  a as v,
  d as y,
  i as b,
  l as ee,
  n as te,
  r as x,
} from "./dialog-layout.js";
import { r as S } from "./format-automation-next-run-label.js";
var C = new (class {
  pendingThreadSwitch = null;
  constructor(e = () => performance.now()) {
    this.now = e;
  }
  start(...[e, t]) {
    switch (e) {
      case `thread_switch_completed`:
        this.pendingThreadSwitch = { defaults: t, startedAtMs: this.now() };
        return;
    }
  }
  complete(e, ...[t, n]) {
    switch (t) {
      case `thread_switch_completed`: {
        let t = this.pendingThreadSwitch;
        if (t == null || t.defaults.conversationId !== n.conversationId) return;
        this.pendingThreadSwitch = null;
        let i = Math.max(0, Math.round(this.now() - t.startedAtMs)),
          a = t.defaults.needsResume ? `cold` : `hot`;
        e.get(m)?.trackStructuredEvent(r, {
          durationMs: i,
          switchKind: w(a),
          turnCount: n.turnCount,
        });
        return;
      }
    }
  }
})();
function w(e) {
  switch (e) {
    case `hot`:
      return t.CODEX_THREAD_SWITCH_KIND_HOT;
    case `cold`:
      return t.CODEX_THREAD_SWITCH_KIND_COLD;
  }
}
var T = f(),
  E = s();
function D(e) {
  let t = (0, T.c)(8),
    { isPinned: n, ariaLabel: r, onPin: i, onUnpin: a } = e,
    o;
  t[0] !== n || t[1] !== i || t[2] !== a
    ? ((o = (e) => {
        (e.stopPropagation(), n ? a() : i());
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, E.jsx)(S, { className: `icon-2xs block shrink-0` })),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] !== r || t[6] !== o
      ? ((c = (0, E.jsx)(`button`, {
          type: `button`,
          "aria-label": r,
          className: `flex h-5 w-5 items-center justify-center leading-none text-token-foreground/50 hover:text-token-foreground`,
          onClick: o,
          children: s,
        })),
        (t[5] = r),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
var { pin: O, unpin: k } = d({
  pin: {
    id: `sidebarElectron.pinThread`,
    defaultMessage: `Pin chat`,
    description: `Action label to pin a thread in the sidebar`,
  },
  unpin: {
    id: `sidebarElectron.unpinThread`,
    defaultMessage: `Unpin chat`,
    description: `Action label to unpin a thread from the sidebar`,
  },
});
function A({ isPinned: e, onPinnedChange: t }) {
  return {
    id: e ? `unpin-thread` : `pin-thread`,
    message: e ? k : O,
    onSelect: () => {
      t(!e);
    },
  };
}
function j({
  isPinned: e,
  hasUnreadTurn: t,
  ariaLabel: n,
  onPin: r,
  onUnpin: i,
}) {
  if (t)
    return {
      rest: null,
      hover: (0, E.jsx)(`span`, {
        "aria-hidden": !0,
        className: `block h-5 w-5`,
      }),
    };
  let a = (0, E.jsx)(D, { isPinned: e, ariaLabel: n, onPin: r, onUnpin: i });
  return { rest: e ? a : null, hover: a };
}
function M(e) {
  let t = (0, T.c)(37),
    { heartbeatAutomationName: n, open: r, onOpenChange: i, onConfirm: a } = e,
    o = n === void 0 ? null : n,
    s = o != null,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = o != null && o.trim().length > 0), (t[0] = o), (t[1] = c));
  let l = c,
    d;
  t[2] === s
    ? (d = t[3])
    : ((d = s
        ? (0, E.jsx)(u, {
            id: `threadHeader.archiveConfirmHeartbeatTitle`,
            defaultMessage: `Archive chat and remove automation?`,
            description: `Title for archive chat confirmation dialog when the chat has an active heartbeat automation`,
          })
        : (0, E.jsx)(u, {
            id: `threadHeader.archiveConfirmTitle`,
            defaultMessage: `Archive chat?`,
            description: `Title for archive chat confirmation dialog`,
          })),
      (t[2] = s),
      (t[3] = d));
  let f = d,
    p;
  t[4] !== s || t[5] !== l || t[6] !== o
    ? ((p = s
        ? l
          ? (0, E.jsx)(u, {
              id: `threadHeader.archiveConfirmHeartbeatSubtitleNamed`,
              defaultMessage: `This chat has an active heartbeat automation, {name}. Archiving the chat will also remove it and stop future runs.`,
              description: `Subtitle for archive chat confirmation dialog when the chat has a named active heartbeat automation`,
              values: {
                name: (0, E.jsx)(
                  `strong`,
                  {
                    className: `font-semibold text-token-text-primary`,
                    children: o,
                  },
                  `automation-name`,
                ),
              },
            })
          : (0, E.jsx)(u, {
              id: `threadHeader.archiveConfirmHeartbeatSubtitleUnnamed`,
              defaultMessage: `This chat has an active heartbeat automation. Archiving the chat will also remove it and stop future runs.`,
              description: `Subtitle for archive chat confirmation dialog when the chat has an unnamed active heartbeat automation`,
            })
        : (0, E.jsx)(u, {
            id: `threadHeader.archiveConfirmSubtitle`,
            defaultMessage: `You can find it later in your archived chats.`,
            description: `Subtitle for archive chat confirmation dialog`,
          })),
      (t[4] = s),
      (t[5] = l),
      (t[6] = o),
      (t[7] = p))
    : (p = t[7]);
  let m = p,
    h;
  t[8] === i
    ? (h = t[9])
    : ((h = {
        "aria-describedby": void 0,
        onOpenAutoFocus: N,
        onEscapeKeyDown: () => {
          i(!1);
        },
      }),
      (t[8] = i),
      (t[9] = h));
  let _;
  t[10] === a
    ? (_ = t[11])
    : ((_ = (e) => {
        (e.preventDefault(), a());
      }),
      (t[10] = a),
      (t[11] = _));
  let S;
  t[12] === f
    ? (S = t[13])
    : ((S = (0, E.jsx)(y, { className: `sr-only`, children: f })),
      (t[12] = f),
      (t[13] = S));
  let C;
  t[14] !== m || t[15] !== f
    ? ((C = (0, E.jsx)(v, {
        children: (0, E.jsx)(b, { title: f, subtitle: m }),
      })),
      (t[14] = m),
      (t[15] = f),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] === i ? (w = t[18]) : ((w = () => i(!1)), (t[17] = i), (t[18] = w));
  let D;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, E.jsx)(u, {
        id: `threadHeader.archiveConfirmCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for archive thread confirmation dialog`,
      })),
      (t[19] = D))
    : (D = t[19]);
  let O;
  t[20] === w
    ? (O = t[21])
    : ((O = (0, E.jsx)(g, {
        color: `ghost`,
        type: `button`,
        onClick: w,
        children: D,
      })),
      (t[20] = w),
      (t[21] = O));
  let k;
  t[22] === s
    ? (k = t[23])
    : ((k = (0, E.jsx)(g, {
        "data-archive-confirm-button": !0,
        color: `danger`,
        type: `submit`,
        children: s
          ? (0, E.jsx)(u, {
              id: `threadHeader.archiveConfirmHeartbeatConfirm`,
              defaultMessage: `Archive and remove`,
              description: `Confirm button label for archive chat confirmation dialog when the chat has an active heartbeat automation`,
            })
          : (0, E.jsx)(u, {
              id: `threadHeader.archiveConfirmConfirm`,
              defaultMessage: `Archive`,
              description: `Confirm button label for archive chat confirmation dialog`,
            }),
      })),
      (t[22] = s),
      (t[23] = k));
  let A;
  t[24] !== O || t[25] !== k
    ? ((A = (0, E.jsx)(v, { children: (0, E.jsxs)(x, { children: [O, k] }) })),
      (t[24] = O),
      (t[25] = k),
      (t[26] = A))
    : (A = t[26]);
  let j;
  t[27] !== A || t[28] !== _ || t[29] !== S || t[30] !== C
    ? ((j = (0, E.jsxs)(te, { as: `form`, onSubmit: _, children: [S, C, A] })),
      (t[27] = A),
      (t[28] = _),
      (t[29] = S),
      (t[30] = C),
      (t[31] = j))
    : (j = t[31]);
  let M;
  return (
    t[32] !== i || t[33] !== r || t[34] !== j || t[35] !== h
      ? ((M = (0, E.jsx)(ee, {
          open: r,
          onOpenChange: i,
          size: `compact`,
          contentProps: h,
          children: j,
        })),
        (t[32] = i),
        (t[33] = r),
        (t[34] = j),
        (t[35] = h),
        (t[36] = M))
      : (M = t[36]),
    M
  );
}
function N(e) {
  (e.preventDefault(),
    e.currentTarget?.querySelector(`[data-archive-confirm-button]`)?.focus());
}
function P(t) {
  let n = (0, T.c)(6),
    { conversationId: r } = t,
    i = h(`459748632`) && r != null,
    a;
  n[0] !== i || n[1] !== r
    ? ((a = () => {
        !i ||
          r == null ||
          p.dispatchMessage(`open-in-new-window`, { path: e(r) });
      }),
      (n[0] = i),
      (n[1] = r),
      (n[2] = a))
    : (a = n[2]);
  let o = a,
    s;
  return (
    n[3] !== i || n[4] !== o
      ? ((s = { canOpenThreadInNewWindow: i, openThreadInNewWindow: o }),
        (n[3] = i),
        (n[4] = o),
        (n[5] = s))
      : (s = n[5]),
    s
  );
}
function F(e) {
  for (let t = e.commandActions.length - 1; t >= 0; --t) {
    let n = e.commandActions[t]?.command.trim() ?? ``;
    if (n.length > 0 && !I(n)) return n;
  }
  let t = e.command.trim();
  return I(t) ? `` : t;
}
function I(e) {
  return /^(?:.*[/\\])?(?:bash|cmd(?:\.exe)?|fish|powershell(?:\.exe)?|pwsh(?:\.exe)?|sh|zsh)(?:\s|$)/iu.test(
    e,
  );
}
var ne = c(l, ({ get: e }) => {
  let t = [];
  for (let r of e(n))
    for (let n of e(i, r))
      t.push({
        cwd: e(a, n),
        hostId: r,
        id: n,
        title: e(_, n),
        turns: e(o, n) ?? [],
      });
  return t;
});
function L(e) {
  let t = [];
  for (let n of e) {
    let e = n.turns.length - 1;
    for (let r = e; r >= 0; --r) {
      let i = n.turns[r];
      if (i == null) continue;
      let a = r === e && i.status === `inProgress`;
      for (let e of i.items) {
        if (e?.type !== `commandExecution`) continue;
        let o = U(e, i, a);
        if (o == null) continue;
        let s = F(e);
        s.length !== 0 &&
          t.push({
            chatTitle: n.title,
            command: s,
            conversationId: n.id,
            cwd: e.cwd ?? n.cwd,
            hostId: n.hostId,
            id: `${n.id}:${i.turnId ?? r}:${e.id}`,
            itemId: e.id,
            osPid: null,
            processId: e.processId,
            source: o.source,
            startedAtMs:
              i.firstTurnWorkItemStartedAtMs ?? i.turnStartedAtMs ?? null,
            stopAction: o.stopAction,
            turnId: i.turnId,
          });
      }
    }
  }
  return t;
}
function R(e, t) {
  let n = new Map(t.map((e) => [e.id, e]));
  return e.map((e) => {
    let t = n.get(e.conversationId);
    return {
      chatTitle: t?.title ?? e.chatTitle,
      command: e.command,
      conversationId: e.conversationId,
      cwd: e.cwd ?? t?.cwd ?? null,
      hostId: t?.hostId ?? `local`,
      id: e.id,
      itemId: e.itemId,
      osPid: e.osPid,
      processId: e.processId,
      source: `restored-process`,
      startedAtMs: e.startedAtMs,
      stopAction: `kill-child-process`,
      turnId: e.turnId,
    };
  });
}
function z(e, t) {
  let n = new Map(t.map((e) => [e.id, e]));
  return [
    ...e.map((e) => {
      let t = n.get(e.id);
      return t == null
        ? e
        : (n.delete(e.id),
          e.source === `restored-process`
            ? t
            : {
                ...e,
                chatTitle: e.chatTitle ?? t.chatTitle,
                cwd: e.cwd ?? t.cwd,
                osPid: e.osPid ?? t.osPid,
                processId: e.processId ?? t.processId,
                startedAtMs: e.startedAtMs ?? t.startedAtMs,
              });
    }),
    ...n.values(),
  ];
}
function B(e, t) {
  return e.id === t.id
    ? !0
    : e.command === t.command &&
        e.conversationId === t.conversationId &&
        e.cwd === t.cwd &&
        e.hostId === t.hostId &&
        e.stopAction === t.stopAction &&
        e.turnId === t.turnId;
}
function V(e, t, n = Date.now()) {
  if (t == null) return null;
  if (e.osPid != null) {
    let n = G(e.osPid, t);
    if (n != null && J(Q(e.command), n.command)) return n;
  }
  let r = W(e.processId);
  if (r != null) {
    if (e.source !== `restored-process`) {
      let e = G(r, t);
      if (e != null) return e;
    }
    let i = q(e, H(r, t), n);
    if (i != null) return G(i.pid, t);
  }
  let i = q(e, t, n);
  return i == null ? null : G(i.pid, t);
}
function H(e, t) {
  let n = new Map(t.map((e) => [e.pid, e]));
  return t.filter((t) => K(t.pid, e, n));
}
function U(e, t, n) {
  return t.interruptedCommandExecutionItemIds?.includes(e.id)
    ? null
    : e.status === `inProgress`
      ? n
        ? { source: `active-turn`, stopAction: `interrupt-conversation` }
        : { source: `background-terminal`, stopAction: `kill-child-process` }
      : e.status === `completed`
        ? { source: `restored-process`, stopAction: `kill-child-process` }
        : null;
}
function W(e) {
  if (e == null || !/^\d+$/u.test(e)) return null;
  let t = Number(e);
  return Number.isSafeInteger(t) ? t : null;
}
function G(e, t) {
  let n = new Map(t.map((e) => [e.pid, e])),
    r = n.get(e);
  if (r == null) return null;
  let i = 0,
    a = !1,
    o = 0,
    s = !1;
  for (let r of t)
    K(r.pid, e, n) &&
      (r.cpuPercent != null &&
        Number.isFinite(r.cpuPercent) &&
        ((i += r.cpuPercent), (a = !0)),
      r.rssKb != null &&
        Number.isFinite(r.rssKb) &&
        ((o += r.rssKb), (s = !0)));
  return {
    ageSeconds: r.ageSeconds,
    command: r.command,
    cpuPercent: a ? i : null,
    pid: e,
    rssKb: s ? o : null,
  };
}
function K(e, t, n) {
  let r = e,
    i = new Set();
  for (; !i.has(r); ) {
    if (r === t) return !0;
    i.add(r);
    let e = n.get(r);
    if (e == null) return !1;
    r = e.parentPid;
  }
  return !1;
}
function q(e, t, n) {
  let r = Q(e.command);
  if (r.length === 0) return null;
  let i = t.filter((e) => J(r, e.command));
  if (i.length === 0) return null;
  let a =
    e.startedAtMs == null
      ? null
      : Math.max(0, Math.floor((n - e.startedAtMs) / 1e3));
  return i.sort((e, t) => X(e, t, a))[0] ?? null;
}
function J(e, t) {
  let n = Q(t);
  return (
    n === e ||
    n.startsWith(`${e} `) ||
    (n.includes(` `) && e.startsWith(`${n} `)) ||
    n.endsWith(` ${e}`) ||
    n.includes(` ${e} `) ||
    Y(e, n)
  );
}
function Y(e, t) {
  let n = e.split(/\s+/u),
    r = t.split(/\s+/u);
  return n.length === r.length
    ? n.every((e, t) => {
        let n = r[t];
        return n == null ? !1 : e === n ? !0 : t === 0 ? !1 : $(e) === $(n);
      })
    : !1;
}
function X(e, t, n) {
  if (n != null) {
    let r = Z(e.ageSeconds, n),
      i = Z(t.ageSeconds, n);
    if (r !== i) return r - i;
  }
  return e.depth === t.depth ? e.pid - t.pid : e.depth - t.depth;
}
function Z(e, t) {
  return e == null ? 2 ** 53 - 1 : Math.abs(e - t);
}
function Q(e) {
  let t = e.trim();
  if (t.length === 0) return ``;
  let n = /^"([^"]+)"(.*)$/u.exec(t);
  if (n != null) return `${$(n[1])}${n[2]}`.trim().toLowerCase();
  let r = /^(\S+)(.*)$/u.exec(t);
  return r == null ? t.toLowerCase() : `${$(r[1])}${r[2]}`.trim().toLowerCase();
}
function $(e) {
  let t = e.replaceAll(`\\`, `/`),
    n = t.lastIndexOf(`/`);
  return (n < 0 ? t : t.slice(n + 1)).replace(/\.(?:bat|cmd|com|exe)$/iu, ``);
}
function re(e) {
  let t = e.length - 1,
    n = [];
  for (let r = t; r >= 0; --r) {
    let i = e[r];
    if (i != null && !(r === t && i.status === `inProgress`)) {
      for (let e of i.items ?? [])
        if (
          e != null &&
          e != null &&
          e.type === `commandExecution` &&
          e.status === `inProgress` &&
          !i.interruptedCommandExecutionItemIds?.includes(e.id)
        ) {
          let t = F(e);
          n.push({
            id: e.id,
            command: t,
            cwd: e.cwd ?? null,
            processId: e.processId,
            startedAtMs:
              i.firstTurnWorkItemStartedAtMs ?? i.turnStartedAtMs ?? null,
            turnId: i.turnId,
          });
        }
    }
  }
  return n;
}
function ie(e) {
  return e == null ? [] : L([e]).filter((e) => e.source === `restored-process`);
}
export {
  L as a,
  B as c,
  M as d,
  j as f,
  C as g,
  k as h,
  V as i,
  F as l,
  O as m,
  ie as n,
  R as o,
  A as p,
  ne as r,
  z as s,
  re as t,
  P as u,
};
//# sourceMappingURL=local-conversation-background-terminals-model.js.map
