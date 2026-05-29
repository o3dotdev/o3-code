import { s as e } from "./chunk-Bj-mKKzh.js";
import { D as t } from "./src-C.js";
import {
  E as n,
  G as r,
  J as i,
  K as a,
  Ma as o,
  Xs as s,
  ht as c,
  it as l,
  nt as u,
  tc as d,
  w as f,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as p, t as m } from "./jsx-runtime.js";
import {
  $ as h,
  Q as g,
  S as _,
  U as v,
  X as y,
  Y as b,
  Z as x,
  _ as S,
  a as C,
  at as w,
  bt as T,
  rt as E,
  wt as D,
  y as O,
} from "./setting-storage.js";
import { o as k, p as A } from "./statsig--EYRNU53.js";
import { t as j } from "./request-DWZTrEAr.js";
import { t as M } from "./route-scope.js";
import { A as ee, j as N } from "./diff-view-mode.js";
import { n as te } from "./app-shell-tab-controller-BTWycTBb.js";
import { M as ne } from "./review-navigation-model-DMRVNxCn.js";
import { i as re } from "./thread-context-CaET2O8s.js";
import { t as ie } from "./terminal.js";
import {
  a as ae,
  c as oe,
  i as P,
  n as se,
  o as ce,
  r as F,
  s as le,
  t as ue,
} from "./xterm-display-helpers.js";
import "./font-settings-thBBJzjN.js";
import { n as de, r as fe } from "./use-resolved-theme-variant.js";
import { b as I } from "./app-server-dynamic-tools-BARsY_O-.js";
import {
  c as L,
  i as R,
} from "./local-conversation-background-terminals-model.js";
import { t as z } from "./sortBy.js";
var B = E(_, ({ get: e }) => ({
    enabled: e(A, `637432221`),
    queryKey: [`appgen`, `access`],
    queryFn: () => j.safeGet(`/wham/sites/access`),
    retry: !1,
    staleTime: S.TEN_MINUTES,
  })),
  V = g(_, ({ get: e }) => {
    if (!e(A, `637432221`)) return `unavailable`;
    let { data: t, isError: n } = e(B);
    return n || t?.enabled === !1
      ? `unavailable`
      : t?.enabled === !0
        ? `available`
        : `loading`;
  });
function pe() {
  let e = k(`637432221`),
    t = k(`1741944562`);
  return e && t;
}
var H = D(),
  me = e(z(), 1),
  U = e(p(), 1),
  W = T([]);
function he(e) {
  let t = (0, H.c)(16),
    n = d(W),
    r;
  t[0] === e.dependencies
    ? (r = t[1])
    : ((r = e.dependencies ? e.dependencies.map(ye).join(`|`) : ``),
      (t[0] = e.dependencies),
      (t[1] = r));
  let i = r,
    a;
  t[2] !== e || t[3] !== n
    ? ((a = () => {
        n((t) => {
          let n = !1,
            r = [...t].map((t) => (t.id === e.id ? ((n = !0), e) : t));
          return (n || r.push(e), (0, me.default)(r.filter(ve), [_e, ge]));
        });
      }),
      (t[2] = e),
      (t[3] = n),
      (t[4] = a))
    : (a = t[4]);
  let o = (0, U.useEffectEvent)(a),
    s;
  t[5] === o
    ? (s = t[6])
    : ((s = () => {
        o();
      }),
      (t[5] = o),
      (t[6] = s));
  let c;
  (t[7] !== i || t[8] !== e.enabled || t[9] !== e.id || t[10] !== e.order
    ? ((c = [e.id, e.enabled, e.order, i]),
      (t[7] = i),
      (t[8] = e.enabled),
      (t[9] = e.id),
      (t[10] = e.order),
      (t[11] = c))
    : (c = t[11]),
    (0, U.useEffect)(s, c));
  let l, u;
  (t[12] !== e.id || t[13] !== n
    ? ((l = () => () => {
        n((t) => t.filter((t) => t.id !== e.id));
      }),
      (u = [e.id, n]),
      (t[12] = e.id),
      (t[13] = n),
      (t[14] = l),
      (t[15] = u))
    : ((l = t[14]), (u = t[15])),
    (0, U.useEffect)(l, u));
}
function ge(e) {
  return e.id;
}
function _e(e) {
  return e.order ?? 0;
}
function ve(e) {
  return e.enabled !== !1;
}
function ye(e) {
  return be(e);
}
function be(e) {
  return e == null ? `` : String(e);
}
function xe(e) {
  let t = (0, H.c)(5),
    { conversationSource: n, diffSource: r } = e,
    i = n === void 0 ? null : n,
    a = r === void 0 ? null : r,
    o = y(M),
    s,
    c;
  return (
    t[0] !== i || t[1] !== a || t[2] !== o
      ? ((s = () => ne(o, { conversationSource: i, diffSource: a })),
        (c = [i, a, o]),
        (t[0] = i),
        (t[1] = a),
        (t[2] = o),
        (t[3] = s),
        (t[4] = c))
      : ((s = t[3]), (c = t[4])),
    (0, U.useEffect)(s, c),
    null
  );
}
function Se(e, t) {
  return (0, U.useRef)(null);
}
var Ce = g(M, ({ get: e, scope: t }) =>
  t.value.routeKind === `local-thread` ? e(re) : null,
);
function we(e) {
  let t = (0, H.c)(7),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { conversationId: r, hostId: i } = n,
    a = y(M),
    o = x(Ce),
    c = a.value.routeKind === `local-thread` ? a.value.conversationId : null,
    u = r ?? c,
    d = r == null ? o : i,
    f,
    p;
  return (
    t[2] !== u || t[3] !== d || t[4] !== a
      ? ((f = () => {
          if (!(u == null || d == null))
            return (
              l(a, u, d),
              s(`set-active-conversation`, {
                hostId: d,
                conversationId: u,
                active: !0,
              }),
              () => {
                (l(a, u, null),
                  s(`set-active-conversation`, {
                    hostId: d,
                    conversationId: u,
                    active: !1,
                  }));
              }
            );
        }),
        (p = [u, d, a]),
        (t[2] = u),
        (t[3] = d),
        (t[4] = a),
        (t[5] = f),
        (t[6] = p))
      : ((f = t[5]), (p = t[6])),
    (0, U.useLayoutEffect)(f, p),
    null
  );
}
function Te({
  hasConversation: e,
  hostId: t,
  latestTurnId: n,
  latestTurnStatus: r,
  pendingRequestType: i,
  resumeState: a,
}) {
  return e
    ? t == null || !I(t)
      ? { isEligible: !1, reason: `unsupported_host` }
      : a === `resuming` || (a !== `resumed` && n == null)
        ? { isEligible: !1, reason: `resuming` }
        : i === `userInput`
          ? { isEligible: !1, reason: `waiting_on_user_input` }
          : i === `approval` || i === `mcpServerElicitation`
            ? { isEligible: !1, reason: `waiting_on_approval` }
            : i == null
              ? r == null
                ? { isEligible: !1, reason: `missing_turn` }
                : r === `inProgress`
                  ? { isEligible: !1, reason: `turn_in_progress` }
                  : { isEligible: !0, reason: null }
              : { isEligible: !1, reason: `pending_request` }
    : { isEligible: !1, reason: `missing_conversation` };
}
var Ee = h(_, (e, { get: t }) => t(i, e)?.type ?? null),
  De = h(_, (e, { get: t }) =>
    Te({
      hasConversation: t(f, e),
      hostId: t(n, e),
      latestTurnId: t(r, e),
      latestTurnStatus: t(a, e),
      pendingRequestType: t(Ee, e),
      resumeState: t(u, e),
    }),
  ),
  Oe = oe(),
  G = le(),
  ke = ce(),
  K = m();
function Ae(e) {
  let n = (0, H.c)(30),
    { output: r } = e,
    i = fe(de()),
    a = C(t.lightChromeTheme),
    o = C(t.darkChromeTheme),
    s = C(t.codeFontSize),
    c,
    l,
    u,
    d;
  if (n[0] !== s || n[1] !== o || n[2] !== a || n[3] !== i) {
    c = i === `light` ? N(a, `light`) : N(o, `dark`);
    let e =
      c.fonts.code?.trim() ||
      `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace`;
    ((u = s ?? 12),
      (l = ue(e)),
      (d = e.split(`,`)[0]?.trim() ?? ``),
      (n[0] = s),
      (n[1] = o),
      (n[2] = a),
      (n[3] = i),
      (n[4] = c),
      (n[5] = l),
      (n[6] = u),
      (n[7] = d));
  } else ((c = n[4]), (l = n[5]), (u = n[6]), (d = n[7]));
  let f = d,
    p = (0, U.useRef)(null),
    m = (0, U.useRef)(null),
    h = (0, U.useRef)(null),
    g = (0, U.useRef)(null),
    _ = (0, U.useRef)(``),
    v,
    y;
  (n[8] !== c || n[9] !== i
    ? ((v = () => {
        let e = p.current;
        e != null && ee(e, c, i);
      }),
      (y = [c, i]),
      (n[8] = c),
      (n[9] = i),
      (n[10] = v),
      (n[11] = y))
    : ((v = n[10]), (y = n[11])),
    (0, U.useLayoutEffect)(v, y));
  let b;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = () => {
        let e = h.current,
          t = p.current;
        e == null ||
          t == null ||
          ((e.options.theme = F(t)), e.rows > 0 && e.refresh(0, e.rows - 1));
      }),
      (n[12] = b))
    : (b = n[12]);
  let x;
  (n[13] !== c || n[14] !== i
    ? ((x = [c, i]), (n[13] = c), (n[14] = i), (n[15] = x))
    : (x = n[15]),
    (0, U.useEffect)(b, x));
  let S, w;
  (n[16] !== l || n[17] !== u || n[18] !== f
    ? ((S = () => {
        let e = h.current;
        if (e == null) return;
        let t = !1,
          n = null;
        return (
          (async () => {
            (await se(f, u),
              !t &&
                ((e.options.fontFamily = l),
                (e.options.fontSize = u),
                (n = requestAnimationFrame(() => {
                  g.current?.fit();
                }))));
          })(),
          () => {
            ((t = !0), n != null && cancelAnimationFrame(n));
          }
        );
      }),
      (w = [l, u, f]),
      (n[16] = l),
      (n[17] = u),
      (n[18] = f),
      (n[19] = S),
      (n[20] = w))
    : ((S = n[19]), (w = n[20])),
    (0, U.useEffect)(S, w));
  let T, E;
  (n[21] !== l || n[22] !== u
    ? ((T = () => {
        let e = m.current,
          t = p.current;
        if (e == null || t == null) return;
        let n = !1,
          r = null,
          i = new ke.Terminal({
            allowTransparency: !0,
            cursorStyle: `bar`,
            disableStdin: !0,
            fontSize: u,
            fontFamily: l,
            letterSpacing: 0,
            lineHeight: 1.2,
            theme: F(t),
          }),
          a = new Oe.FitAddon(),
          o = new G.WebLinksAddon(je);
        ((h.current = i),
          (g.current = a),
          i.loadAddon(a),
          i.loadAddon(o),
          i.open(e),
          a.fit(),
          _.current.length > 0 &&
            (i.write(P(_.current)),
            (r ??= requestAnimationFrame(() => {
              ((r = null), i.scrollToBottom());
            }))));
        let s = new ResizeObserver(() => {
          n || a.fit();
        });
        return (
          s.observe(e),
          () => {
            ((n = !0),
              r != null && (cancelAnimationFrame(r), (r = null)),
              s.disconnect(),
              (g.current = null),
              (h.current = null),
              i.dispose());
          }
        );
      }),
      (E = [l, u]),
      (n[21] = l),
      (n[22] = u),
      (n[23] = T),
      (n[24] = E))
    : ((T = n[23]), (E = n[24])),
    (0, U.useEffect)(T, E));
  let D, O;
  (n[25] === r
    ? ((D = n[26]), (O = n[27]))
    : ((D = () => {
        let e = h.current;
        if (e == null) {
          _.current = r;
          return;
        }
        let t = _.current,
          n = ae(e);
        if (r.startsWith(t)) {
          let n = r.slice(t.length);
          n.length > 0 && e.write(P(n));
        } else (e.reset(), r.length > 0 && e.write(P(r)));
        if (((_.current = r), !n)) return;
        let i = requestAnimationFrame(() => {
          e.scrollToBottom();
        });
        return () => {
          cancelAnimationFrame(i);
        };
      }),
      (O = [r]),
      (n[25] = r),
      (n[26] = D),
      (n[27] = O)),
    (0, U.useEffect)(D, O));
  let k;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = {
        backgroundColor: `var(--vscode-terminal-background)`,
        color: `var(--vscode-terminal-foreground)`,
      }),
      (n[28] = k))
    : (k = n[28]);
  let A;
  return (
    n[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((A = (0, K.jsx)(`div`, {
          ref: p,
          className: `relative flex h-full w-full flex-col app-theme`,
          style: k,
          children: (0, K.jsx)(`div`, {
            className: `flex-1 overflow-hidden p-3 tracking-normal`,
            children: (0, K.jsx)(`div`, {
              className: `h-full w-full overflow-hidden`,
              ref: m,
            }),
          }),
        })),
        (n[29] = A))
      : (A = n[29]),
    A
  );
}
function je(e, t) {
  t && (e.preventDefault?.(), O.dispatchMessage(`open-in-browser`, { url: t }));
}
function Me(e) {
  let t = (0, H.c)(5),
    { conversationId: n, terminalId: r } = e,
    i = b(c, n),
    a;
  t[0] !== r || t[1] !== i
    ? ((a = Fe(i, r)), (t[0] = r), (t[1] = i), (t[2] = a))
    : (a = t[2]);
  let o = a,
    s = Ne(r),
    l = o?.aggregatedOutput ?? s?.buffer ?? ``,
    u;
  return (
    t[3] === l
      ? (u = t[4])
      : ((u = (0, K.jsx)(`div`, {
          className: `h-full min-h-0 bg-token-main-surface-primary`,
          children:
            l.length > 0
              ? (0, K.jsx)(Ae, { output: l })
              : (0, K.jsx)(`div`, {
                  className: `font-vscode-editor text-size-code-sm p-4 text-token-description-foreground`,
                  children: (0, K.jsx)(v, {
                    id: `codex.localConversation.backgroundTerminalTab.noOutput`,
                    defaultMessage: `No output yet`,
                    description: `Placeholder shown in a background terminal output tab before any terminal output is available`,
                  }),
                }),
        })),
        (t[3] = l),
        (t[4] = u)),
    u
  );
}
function Ne(e) {
  let t = (0, H.c)(3),
    n,
    r;
  return (
    t[0] === e
      ? ((n = t[1]), (r = t[2]))
      : ((n = (t) => o.subscribeToSessionSnapshot(e, t)),
        (r = () => o.getSnapshot(e)),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r)),
    (0, U.useSyncExternalStore)(n, r, Pe)
  );
}
function Pe() {
  return null;
}
function Fe(e, t) {
  if (e == null) return null;
  for (let n = e.length - 1; n >= 0; --n) {
    let r = e[n];
    if (r != null) {
      for (let e of r.items)
        if (e.type === `commandExecution` && e.id === t) return e;
    }
  }
  return null;
}
function Ie({
  scope: e,
  backgroundTerminal: t,
  conversationId: n,
  fallbackTitle: r,
}) {
  te.openTab(e, Me, {
    icon: (0, K.jsx)(ie, { className: `icon-xs shrink-0` }),
    props: { conversationId: n, terminalId: t.id },
    id: `background-terminal:${n}:${t.id}`,
    title: t.command.length > 0 ? t.command : r,
  });
}
var q = w(_, () => new Map());
function Le(e, t, n) {
  e.set(q, Be(e.get(q), t, n));
}
function Re(e, t) {
  e.set(q, Ve(e.get(q), t));
}
function ze(e) {
  e.set(q, He(e.get(q)));
}
function Be(e, t, n) {
  return new Map(e).set(t, n);
}
function Ve(e, t) {
  let n = new Map(e);
  return (n.delete(t), n);
}
function He(e) {
  return new Map(Array.from(e).filter(([, e]) => e.status !== `stopped`));
}
var Ue = 3,
  We = 1e3;
function Ge(e, t, n) {
  let r = [],
    i = new Set();
  for (let a of e) {
    let e = R(a, t, n);
    if (e == null) continue;
    let o = Y({ metrics: e, process: a }, n);
    (o != null && o < Ue) ||
      i.has(e.pid) ||
      (i.add(e.pid), r.push({ metrics: e, process: a }));
  }
  return r;
}
function Ke(e, t) {
  if (t.size === 0) return e;
  let n = e.slice(),
    r = [];
  for (let i of t.values())
    Xe(e, i.row) || r.push({ row: i.row, rowIndex: i.rowIndex ?? n.length });
  r.sort((e, t) => e.rowIndex - t.rowIndex);
  for (let e of r) n.splice(Math.min(e.rowIndex, n.length), 0, e.row);
  return n;
}
function qe(e, t, n) {
  if (t.size === 0) return t;
  let r = new Map(e.map((e) => [e.process.id, e])),
    i = new Map();
  for (let [a, o] of t) X(o, r.get(a) ?? Z(e, o.row), n) || i.set(a, o);
  return i;
}
function Je(e, t) {
  return J(e, t)?.sortRow ?? e;
}
function J(e, t) {
  let n = t.get(e.process.id);
  if (n != null) return n;
  for (let n of t.values()) if (L(e.process, n.row.process)) return n;
}
function Y(e, t) {
  return e.metrics?.ageSeconds == null
    ? e.process.startedAtMs == null
      ? null
      : Math.max(0, Math.floor((t - e.process.startedAtMs) / 1e3))
    : e.metrics.ageSeconds;
}
function X(e, t, n) {
  return e.status === `starting`
    ? e.expiresAtMs != null && e.expiresAtMs <= n
      ? !0
      : t == null
        ? !1
        : Ye(e, t, n)
    : !1;
}
function Ye(e, t, n) {
  let r = e.row.process.startedAtMs,
    i = t.metrics?.ageSeconds;
  return r == null || i == null ? !0 : n - i * 1e3 >= r - We;
}
function Z(e, t) {
  return e.find((e) => L(e.process, t.process)) ?? null;
}
function Xe(e, t) {
  return Z(e, t) != null;
}
var Q = w(_, () => null),
  $ = 0;
function Ze(e, t) {
  (($ += 1), e.set(Q, { processId: t, requestId: $ }));
}
export {
  pe as S,
  Se as _,
  Je as a,
  he as b,
  qe as c,
  ze as d,
  q as f,
  we as g,
  De as h,
  Ge as i,
  X as l,
  Ie as m,
  Q as n,
  Y as o,
  Le as p,
  J as r,
  Ke as s,
  Ze as t,
  Re as u,
  xe as v,
  V as x,
  W as y,
};
//# sourceMappingURL=process-manager-target.js.map
