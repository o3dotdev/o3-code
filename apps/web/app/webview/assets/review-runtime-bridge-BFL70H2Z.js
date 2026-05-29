import { s as e } from "./chunk-Bj-mKKzh.js";
import { zr as t } from "./src-C.js";
import {
  N as n,
  Xs as r,
  er as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as a, t as o } from "./jsx-runtime.js";
import { t as s } from "./clsx-BcPLHiun.js";
import { t as c } from "./react-dom-CvzHKZGB.js";
import {
  G as l,
  Q as u,
  X as d,
  Z as f,
  b as p,
  wt as m,
  y as h,
} from "./setting-storage.js";
import { i as g, t as _ } from "./route-scope.js";
import { t as v } from "./button.js";
import { n as y } from "./spinner.js";
import { V as b, a as x, o as S, x as C } from "./app-shell-state.js";
import { n as w } from "./app-shell-D4HBgUPf.js";
import { t as T } from "./x-C_RDKBp5.js";
import {
  c as E,
  l as D,
  n as O,
  s as k,
} from "./app-shell-tab-controller-BTWycTBb.js";
import {
  A,
  C as j,
  Ct as ee,
  D as M,
  Dt as te,
  E as N,
  Et as P,
  N as F,
  O as I,
  Ot as ne,
  Q as re,
  S as L,
  T as R,
  Tt as ie,
  V as ae,
  b as z,
  dt as oe,
  ft as se,
  g as B,
  it as ce,
  j as V,
  ot as le,
  p as H,
  pt as ue,
  q as de,
  st as fe,
  ut as pe,
  v as me,
  w as he,
  x as U,
  z as ge,
} from "./review-navigation-model-DMRVNxCn.js";
import { i as _e } from "./thread-context-CaET2O8s.js";
import { t as ve } from "./check-git-index-for-changes-CjhXjmKx.js";
import { t as ye } from "./use-window-controls-safe-area.js";
import { t as be } from "./chat.js";
import { t as xe } from "./search.js";
import { t as W } from "./arrow-up-fq4d26GH.js";
import { d as Se } from "./review-header-toolbar.js";
import {
  a as Ce,
  c as we,
  i as G,
  l as Te,
  n as K,
  o as q,
  s as J,
  t as Y,
  u as Ee,
} from "./right-panel-composer-overlay-scroll-reserve.js";
import { t as De } from "./use-command-hotkey.js";
import { t as Oe } from "./thread-layout-DxVAHgCj.js";
var X = m(),
  Z = o();
function ke() {
  let e = (0, X.c)(9),
    t = d(_),
    n = l(),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(`div`, {
        className: `mr-2 ml-2 h-4 w-px bg-token-border`,
      })),
      (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] === t
    ? (i = e[2])
    : ((i = () => {
        H(t);
      }),
      (e[1] = t),
      (e[2] = i));
  let a;
  e[3] === n
    ? (a = e[4])
    : ((a = n.formatMessage({
        id: `codex.threadFindBar.close`,
        defaultMessage: `Close find`,
        description: `Button label to close the find bar`,
      })),
      (e[3] = n),
      (e[4] = a));
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(T, { className: `size-4 text-token-foreground` })),
      (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] !== i || e[7] !== a
      ? ((s = (0, Z.jsxs)(`div`, {
          className: `col-[3/4] row-[1] flex h-[44px] items-center pr-4`,
          children: [
            r,
            (0, Z.jsx)(v, {
              className: `-m-0.5 size-6`,
              size: `icon`,
              color: `ghost`,
              uniform: !0,
              onClick: i,
              "aria-label": a,
              children: o,
            }),
          ],
        })),
        (e[6] = i),
        (e[7] = a),
        (e[8] = s))
      : (s = e[8]),
    s
  );
}
function Ae() {
  let e = (0, X.c)(23),
    t = d(_),
    n = l(),
    r = f(z),
    i = r === `conversation` ? `ghostActive` : `ghost`,
    a;
  e[0] === t
    ? (a = e[1])
    : ((a = () => {
        A(t, `conversation`);
      }),
      (e[0] = t),
      (e[1] = a));
  let o = r === `conversation`,
    s;
  e[2] === n
    ? (s = e[3])
    : ((s = n.formatMessage({
        id: `codex.threadFindBar.chatFilter`,
        defaultMessage: `Search chat`,
        description: `Button label to scope find results to chat`,
      })),
      (e[2] = n),
      (e[3] = s));
  let c;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(be, { className: `size-4` })), (e[4] = c))
    : (c = e[4]);
  let u;
  e[5] !== i || e[6] !== a || e[7] !== o || e[8] !== s
    ? ((u = (0, Z.jsx)(v, {
        className: `-m-0.5 size-6`,
        size: `icon`,
        color: i,
        uniform: !0,
        onClick: a,
        "aria-pressed": o,
        "aria-label": s,
        children: c,
      })),
      (e[5] = i),
      (e[6] = a),
      (e[7] = o),
      (e[8] = s),
      (e[9] = u))
    : (u = e[9]);
  let p = r === `diff` ? `ghostActive` : `ghost`,
    m;
  e[10] === t
    ? (m = e[11])
    : ((m = () => {
        A(t, `diff`);
      }),
      (e[10] = t),
      (e[11] = m));
  let h = r === `diff`,
    g;
  e[12] === n
    ? (g = e[13])
    : ((g = n.formatMessage({
        id: `codex.threadFindBar.diffFilter`,
        defaultMessage: `Search diffs`,
        description: `Button label to scope find results to diffs`,
      })),
      (e[12] = n),
      (e[13] = g));
  let y;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(Se, { className: `size-4` })), (e[14] = y))
    : (y = e[14]);
  let b;
  e[15] !== p || e[16] !== m || e[17] !== h || e[18] !== g
    ? ((b = (0, Z.jsx)(v, {
        className: `-m-0.5 size-6`,
        size: `icon`,
        color: p,
        uniform: !0,
        onClick: m,
        "aria-pressed": h,
        "aria-label": g,
        children: y,
      })),
      (e[15] = p),
      (e[16] = m),
      (e[17] = h),
      (e[18] = g),
      (e[19] = b))
    : (b = e[19]);
  let x;
  return (
    e[20] !== b || e[21] !== u
      ? ((x = (0, Z.jsxs)(`div`, {
          className: `col-[2/3] row-[1] flex h-[44px] items-center justify-center gap-2`,
          children: [u, b],
        })),
        (e[20] = b),
        (e[21] = u),
        (e[22] = x))
      : (x = e[22]),
    x
  );
}
function je(e) {
  let t = (0, X.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = s(
        `no-drag pointer-events-auto grid w-[340px] max-w-[70vw] grid-cols-[minmax(0,1fr)_auto_auto] overflow-hidden rounded-[20px] border-[0.5px] border-token-border bg-token-side-bar-background shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.12)]`,
        r,
      )),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Z.jsx)(`div`, { className: i, children: n })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Me() {
  let e = (0, X.c)(9),
    t = d(_),
    n = f(me),
    r = f(O.activeTab$),
    i = f(x),
    a;
  e[0] !== r || e[1] !== n || e[2] !== i || e[3] !== t
    ? ((a = function () {
        let e = g(t.value),
          a = k(r, e);
        if (
          e != null &&
          a != null &&
          Ne({
            activeRightPanelTab: r,
            browserConversationId: e,
            isRightPanelOpen: i,
          })
        ) {
          h.dispatchMessage(`browser-sidebar-command`, {
            conversationId: e,
            browserTabId: a,
            command: { type: `open-find` },
          });
          return;
        }
        let o = document.activeElement?.id === `content-search-input`,
          s = o ? void 0 : Fe();
        (A(t, o ? (t.get(z) === `conversation` ? `diff` : `conversation`) : n),
          s != null && V(t, s),
          M(t),
          window.requestAnimationFrame(Pe));
      }),
      (e[0] = r),
      (e[1] = n),
      (e[2] = i),
      (e[3] = t),
      (e[4] = a))
    : (a = e[4]);
  let o = a,
    s;
  (e[5] === o
    ? (s = e[6])
    : ((s = () => {
        o();
      }),
      (e[5] = o),
      (e[6] = s)),
    p(`find-in-thread`, s));
  let c;
  return (
    e[7] === o
      ? (c = e[8])
      : ((c = {
          commandId: `findInThread`,
          enabled: !0,
          onKeyDown: (e) => {
            (e.preventDefault(), o());
          },
        }),
        (e[7] = o),
        (e[8] = c)),
    De(c),
    null
  );
}
function Ne({
  activeRightPanelTab: e,
  browserConversationId: t,
  isRightPanelOpen: n,
}) {
  let r = k(e, t);
  if (!n || r == null) return !1;
  let i = document.activeElement;
  return i instanceof HTMLElement
    ? i.tagName.toLowerCase() === `webview` &&
      i.getAttribute(`data-browser-sidebar-conversation-id`) === t &&
      (i.getAttribute(`data-browser-sidebar-browser-tab-id`) ?? r) === r
      ? !0
      : i.closest(`[data-app-shell-focus-area="right-panel"]`) != null
    : !1;
}
function Pe() {
  let e = document.getElementById(`content-search-input`);
  e instanceof HTMLInputElement && (e.focus(), e.select());
}
function Fe() {
  let e = document.activeElement,
    t;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
    if (e.selectionStart == null || e.selectionEnd == null) return;
    t = e.value.slice(e.selectionStart, e.selectionEnd);
  } else t = window.getSelection?.()?.toString();
  let n = t?.trim();
  if (n) return /[\r\n]/.test(n) ? `` : n;
}
function Ie() {
  let e = (0, X.c)(25),
    t = d(_),
    n = l(),
    r = f(z),
    i = f(L),
    a = f(he),
    o;
  e[0] !== r || e[1] !== n
    ? ((o =
        r === `diff`
          ? n.formatMessage({
              id: `codex.threadFindBar.placeholder.review`,
              defaultMessage: `Search diff…`,
              description: `Placeholder for the review find input`,
            })
          : n.formatMessage({
              id: `codex.threadFindBar.placeholder`,
              defaultMessage: `Search chat…`,
              description: `Placeholder for the thread find input`,
            })),
      (e[0] = r),
      (e[1] = n),
      (e[2] = o))
    : (o = e[2]);
  let s = o,
    c;
  e[3] === i
    ? (c = e[4])
    : ((c = i
        ? (0, Z.jsx)(y, {
            "aria-hidden": !0,
            className: `size-4 animate-spin text-token-foreground`,
          })
        : (0, Z.jsx)(xe, { className: `size-4 text-token-foreground` })),
      (e[3] = i),
      (e[4] = c));
  let u;
  e[5] === n
    ? (u = e[6])
    : ((u = n.formatMessage({
        id: `codex.threadFindBar.label`,
        defaultMessage: `Find in chat`,
        description: `Accessible label for the thread find input`,
      })),
      (e[5] = n),
      (e[6] = u));
  let p;
  e[7] === u
    ? (p = e[8])
    : ((p = (0, Z.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: `content-search-input`,
        children: u,
      })),
      (e[7] = u),
      (e[8] = p));
  let m = i || void 0,
    h;
  e[9] === n
    ? (h = e[10])
    : ((h = n.formatMessage({
        id: `codex.threadFindBar.label`,
        defaultMessage: `Find in chat`,
        description: `Accessible label for the thread find input`,
      })),
      (e[9] = n),
      (e[10] = h));
  let g, v;
  e[11] === t
    ? ((g = e[12]), (v = e[13]))
    : ((g = (e) => {
        V(t, e.target.value);
      }),
      (v = (e) => {
        if (e.key === `Enter`) {
          (e.preventDefault(), F(t, { shift: e.shiftKey }));
          return;
        }
        e.key === `Escape` && (e.preventDefault(), H(t));
      }),
      (e[11] = t),
      (e[12] = g),
      (e[13] = v));
  let b;
  e[14] !== s ||
  e[15] !== a ||
  e[16] !== m ||
  e[17] !== h ||
  e[18] !== g ||
  e[19] !== v
    ? ((b = (0, Z.jsx)(`input`, {
        id: `content-search-input`,
        type: `text`,
        autoFocus: !0,
        value: a,
        "aria-busy": m,
        "aria-label": h,
        placeholder: s,
        className: `h-6 min-w-0 flex-1 bg-transparent text-base leading-6 text-token-foreground outline-none placeholder:text-token-input-placeholder-foreground`,
        onChange: g,
        onKeyDown: v,
      })),
      (e[14] = s),
      (e[15] = a),
      (e[16] = m),
      (e[17] = h),
      (e[18] = g),
      (e[19] = v),
      (e[20] = b))
    : (b = e[20]);
  let x;
  return (
    e[21] !== c || e[22] !== p || e[23] !== b
      ? ((x = (0, Z.jsxs)(`div`, {
          className: `col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 pl-4`,
          children: [c, p, b],
        })),
        (e[21] = c),
        (e[22] = p),
        (e[23] = b),
        (e[24] = x))
      : (x = e[24]),
    x
  );
}
function Le() {
  let e = (0, X.c)(26),
    t = d(_),
    n = l(),
    r = f(R)?.totalMatches ?? 0,
    i = f(U)
      ? `max-h-9 translate-y-0 border-t py-2 opacity-100`
      : `pointer-events-none max-h-0 -translate-y-2 border-t-0 py-0 opacity-0`,
    a;
  e[0] === i
    ? (a = e[1])
    : ((a = s(
        `col-[1/4] row-[2] flex min-w-0 items-center border-token-border px-4 text-base leading-6 transition-[border-width,max-height,opacity,padding,translate] duration-200 ease-out`,
        i,
      )),
      (e[0] = i),
      (e[1] = a));
  let o;
  e[2] === t
    ? (o = e[3])
    : ((o = () => {
        I(t);
      }),
      (e[2] = t),
      (e[3] = o));
  let c = r === 0,
    u;
  e[4] === n
    ? (u = e[5])
    : ((u = n.formatMessage({
        id: `codex.threadFindBar.previousResult`,
        defaultMessage: `Previous result`,
        description: `Button label to move to the previous find match`,
      })),
      (e[4] = n),
      (e[5] = u));
  let p;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(W, { className: `size-4` })), (e[6] = p))
    : (p = e[6]);
  let m;
  e[7] !== o || e[8] !== c || e[9] !== u
    ? ((m = (0, Z.jsx)(v, {
        className: `h-4 w-4 p-0 text-token-description-foreground`,
        size: `icon`,
        color: `ghost`,
        uniform: !0,
        onClick: o,
        disabled: c,
        "aria-label": u,
        children: p,
      })),
      (e[7] = o),
      (e[8] = c),
      (e[9] = u),
      (e[10] = m))
    : (m = e[10]);
  let h;
  e[11] === t
    ? (h = e[12])
    : ((h = () => {
        N(t);
      }),
      (e[11] = t),
      (e[12] = h));
  let g = r === 0,
    y;
  e[13] === n
    ? (y = e[14])
    : ((y = n.formatMessage({
        id: `codex.threadFindBar.nextResult`,
        defaultMessage: `Next result`,
        description: `Button label to move to the next find match`,
      })),
      (e[13] = n),
      (e[14] = y));
  let b;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(W, { className: `size-4 rotate-180` })), (e[15] = b))
    : (b = e[15]);
  let x;
  e[16] !== h || e[17] !== g || e[18] !== y
    ? ((x = (0, Z.jsx)(v, {
        className: `h-4 w-4 p-0 text-token-description-foreground`,
        size: `icon`,
        color: `ghost`,
        uniform: !0,
        onClick: h,
        disabled: g,
        "aria-label": y,
        children: b,
      })),
      (e[16] = h),
      (e[17] = g),
      (e[18] = y),
      (e[19] = x))
    : (x = e[19]);
  let S;
  e[20] !== x || e[21] !== m
    ? ((S = (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [m, x],
      })),
      (e[20] = x),
      (e[21] = m),
      (e[22] = S))
    : (S = e[22]);
  let C;
  return (
    e[23] !== a || e[24] !== S
      ? ((C = (0, Z.jsx)(`div`, { className: a, children: S })),
        (e[23] = a),
        (e[24] = S),
        (e[25] = C))
      : (C = e[25]),
    C
  );
}
function Re() {
  let e = (0, X.c)(12),
    t = l(),
    n = f(U),
    r = f(R),
    i = f(B),
    a = r?.totalMatches ?? 0,
    o = i == null ? (a > 0 ? 1 : 0) : i + 1,
    c = null;
  if (n && a === 0) {
    let n;
    (e[0] === t
      ? (n = e[1])
      : ((n = t.formatMessage({
          id: `codex.threadFindBar.noResults`,
          defaultMessage: `0 results`,
          description: `Find-in-thread label when there are no matches`,
        })),
        (e[0] = t),
        (e[1] = n)),
      (c = n));
  } else if (n) {
    let n;
    (e[2] !== o || e[3] !== t || e[4] !== r?.isCapped || e[5] !== a
      ? ((n = t.formatMessage(
          r?.isCapped
            ? {
                id: `codex.threadFindBar.results.capped`,
                defaultMessage: `{active} / {matches}+ results`,
                description: `Find-in-thread label showing the active match index when matches are capped`,
              }
            : {
                id: `codex.threadFindBar.results`,
                defaultMessage: `{active} / {matches} results`,
                description: `Find-in-thread label showing the active match index`,
              },
          { active: o, matches: a },
        )),
        (e[2] = o),
        (e[3] = t),
        (e[4] = r?.isCapped),
        (e[5] = a),
        (e[6] = n))
      : (n = e[6]),
      (c = n));
  }
  let u = n
      ? `max-h-9 translate-y-0 py-2 opacity-100`
      : `max-h-0 -translate-y-2 py-0 opacity-0`,
    d;
  e[7] === u
    ? (d = e[8])
    : ((d = s(
        `text-token-description-foreground pointer-events-none col-[1/4] row-[2] min-w-0 px-4 text-right text-base leading-6 transition-[max-height,opacity,padding,translate] duration-200 ease-out`,
        u,
      )),
      (e[7] = u),
      (e[8] = d));
  let p;
  return (
    e[9] !== c || e[10] !== d
      ? ((p = (0, Z.jsx)(`span`, { className: d, children: c })),
        (e[9] = c),
        (e[10] = d),
        (e[11] = p))
      : (p = e[11]),
    p
  );
}
var Q = e(a(), 1),
  ze = e(c(), 1);
function $(e) {
  let t = (0, X.c)(3),
    { children: n, className: r } = e;
  if (!f(j)) return null;
  let i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, Z.jsx)(je, { className: r, children: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Be(e) {
  let t = (0, X.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(Z.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function Ve() {
  let e = (0, X.c)(8),
    t = ye(),
    n = (0, Q.useSyncExternalStore)(We, Ge, He),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(Me, {})), (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] !== n || e[2] !== t
    ? ((i = n
        ? null
        : (0, Z.jsx)(`div`, {
            className: `pointer-events-none fixed top-2 z-[55] flex justify-end`,
            style: { right: 16 + t.right },
            children: (0, Z.jsxs)($, {
              children: [
                (0, Z.jsx)(Ie, {}),
                (0, Z.jsx)(Ae, {}),
                (0, Z.jsx)(Le, {}),
                (0, Z.jsx)(Re, {}),
                (0, Z.jsx)(ke, {}),
              ],
            }),
          })),
      (e[1] = n),
      (e[2] = t),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === i
    ? (a = e[5])
    : ((a = (0, Z.jsxs)(Z.Fragment, { children: [r, i] })),
      (e[4] = i),
      (e[5] = a));
  let o = a;
  if (typeof document > `u`) return o;
  let s;
  return (
    e[6] === o
      ? (s = e[7])
      : ((s = (0, ze.createPortal)(o, document.body)), (e[6] = o), (e[7] = s)),
    s
  );
}
function He() {
  return !1;
}
var Ue = Object.assign(Be, {
  Frame: $,
  Surface: Ve,
  Input: Ie,
  DomainToggle: Ae,
  Navigation: Le,
  ResultLabel: Re,
  Close: ke,
});
function We(e) {
  if (typeof document > `u` || typeof MutationObserver > `u`) return () => {};
  let t = new MutationObserver(e);
  return (
    t.observe(document.body, { childList: !0, subtree: !0 }),
    () => {
      t.disconnect();
    }
  );
}
function Ge() {
  return (
    typeof document < `u` &&
    document.querySelector(`.codex-dialog-overlay`) != null
  );
}
function Ke(e) {
  let t = (0, X.c)(3),
    n,
    r;
  (t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : ((n = (t) => {
        e(t.open);
      }),
      (r = [e]),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r)),
    p(`toggle-diff-panel`, n, r));
}
function qe({ children: e, onPointerDownOutside: t }) {
  let n = d(_),
    r = (0, Q.useContext)(w),
    i = f(O.activeTab$),
    a = f(b),
    o = f(Te),
    c = f(we),
    l = f(J),
    u = (0, Q.useRef)(null),
    p = (0, Q.useRef)(0),
    m = t != null,
    h = !E(i) || !a || o,
    g = Je(h, c),
    v = h ? G : 0,
    y = g !== `hidden`,
    x = g === `visible`,
    S = g === `entering` || g === `exiting`,
    C = S ? l : v;
  p.current = C;
  let T = (0, Q.useEffectEvent)(() => {
    t?.();
  });
  if (
    ((0, Q.useLayoutEffect)(
      () => () => {
        (Ce(n), n.get(J) !== 0 && n.set(J, 0));
      },
      [n],
    ),
    (0, Q.useLayoutEffect)(() => {
      if (!(!y || r == null))
        return (
          r.style.setProperty(Y, `102px`),
          r.style.setProperty(K, `${p.current}px`),
          () => {
            (r.style.removeProperty(Y), r.style.removeProperty(K));
          }
        );
    }, [r, y]),
    (0, Q.useLayoutEffect)(() => {
      (S || Ee(n, v), !(!y || r == null) && r.style.setProperty(K, `${C}px`));
    }, [S, r, n, y, v, C]),
    (0, Q.useEffect)(() => {
      if (!m || !x) return;
      let e = (e) => {
        let t = e.target;
        t instanceof Node && (u.current?.contains(t) || T());
      };
      return (
        document.addEventListener(`pointerdown`, e, !0),
        () => {
          document.removeEventListener(`pointerdown`, e, !0);
        }
      );
    }, [m, x]),
    !y)
  )
    return null;
  let D = (0, Z.jsx)(`div`, {
    "aria-hidden": !x,
    "data-testid": `right-panel-composer-overlay`,
    onAnimationEnd: (e) => {
      e.currentTarget === e.target && g === `entering` && q(n, `entering`);
    },
    onTransitionEnd: (e) => {
      e.currentTarget === e.target && g === `exiting` && q(n, `exiting`);
    },
    className: s(
      `pointer-events-none absolute inset-x-0 z-[42] transition-opacity duration-[120ms] motion-reduce:transition-none`,
      g === `entering` && `right-panel-composer-overlay-enter opacity-100`,
      g === `visible` && `opacity-100 ease-in`,
      g === `exiting` && `opacity-0 ease-out`,
    ),
    style: {
      bottom: `var(--app-shell-bottom-panel-height, 0px)`,
      transform: `translateY(calc(${G}px - var(${K}, 0px)))`,
    },
    children: (0, Z.jsx)(`div`, {
      className: s(Oe, `pb-6`),
      children: (0, Z.jsx)(`div`, {
        ref: u,
        className: x ? `pointer-events-auto` : `pointer-events-none`,
        children: e,
      }),
    }),
  });
  return r == null ? D : (0, ze.createPortal)(D, r);
}
function Je(e, t) {
  return e
    ? t === `entering`
      ? `entering`
      : `visible`
    : t === `exiting`
      ? `exiting`
      : `hidden`;
}
var Ye = u(_, ({ get: e }) => e(S) && e(O.activeTab$)?.tabId === D.DIFF),
  Xe = u(_, ({ get: e }) => e(Ye) && e(P));
function Ze(e) {
  let t = (0, X.c)(55),
    { lastTurnCwd: a, lastTurnDiff: o } = e,
    s = d(_),
    c = f(_e),
    l = f(re),
    u = f(ie),
    p = f(Xe),
    m = f(te),
    h = f(de),
    g;
  t[0] === s ? (g = t[1]) : ((g = () => ne(s)), (t[0] = s), (t[1] = g));
  let v;
  (t[2] !== s || t[3] !== u || t[4] !== m
    ? ((v = [s, u, m]), (t[2] = s), (t[3] = u), (t[4] = m), (t[5] = v))
    : (v = t[5]),
    (0, Q.useEffect)(g, v));
  let y, b;
  (t[6] !== a || t[7] !== o || t[8] !== s
    ? ((y = () => {
        ee(s, o, a);
      }),
      (b = [a, o, s]),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s),
      (t[9] = y),
      (t[10] = b))
    : ((y = t[9]), (b = t[10])),
    (0, Q.useEffect)(y, b));
  let x, S;
  (t[11] !== s || t[12] !== h
    ? ((x = () => {
        h && ae(s);
      }),
      (S = [s, h]),
      (t[11] = s),
      (t[12] = h),
      (t[13] = x),
      (t[14] = S))
    : ((x = t[13]), (S = t[14])),
    (0, Q.useEffect)(x, S));
  let w, T;
  (t[15] !== s || t[16] !== p
    ? ((w = () => {
        p && ue(s);
      }),
      (T = [s, p]),
      (t[15] = s),
      (t[16] = p),
      (t[17] = w),
      (t[18] = T))
    : ((w = t[17]), (T = t[18])),
    (0, Q.useEffect)(w, T));
  let E;
  t[19] !== c ||
  t[20] !== l.bytesEstimate ||
  t[21] !== l.fileCount ||
  t[22] !== l.lineCount
    ? ((E = () => {
        r(`set-review-pane-snapshot-metrics-for-host`, {
          hostId: c,
          reviewDiffFilesTotal: l.fileCount,
          reviewDiffLinesTotal: l.lineCount,
          reviewDiffBytesEstimate: l.bytesEstimate,
        });
      }),
      (t[19] = c),
      (t[20] = l.bytesEstimate),
      (t[21] = l.fileCount),
      (t[22] = l.lineCount),
      (t[23] = E))
    : (E = t[23]);
  let D;
  (t[24] !== c || t[25] !== l
    ? ((D = [c, l]), (t[24] = c), (t[25] = l), (t[26] = D))
    : (D = t[26]),
    (0, Q.useEffect)(E, D));
  let O, k;
  (t[27] === c
    ? ((O = t[28]), (k = t[29]))
    : ((O = () => () => {
        r(`set-review-pane-snapshot-metrics-for-host`, {
          hostId: c,
          reviewDiffFilesTotal: 0,
          reviewDiffLinesTotal: 0,
          reviewDiffBytesEstimate: 0,
        });
      }),
      (k = [c]),
      (t[27] = c),
      (t[28] = O),
      (t[29] = k)),
    (0, Q.useEffect)(O, k));
  let A, j;
  (t[30] !== s || t[31] !== m
    ? ((A = () => {
        if (m)
          return ve(() => {
            (pe(s), se(s));
          });
      }),
      (j = [s, m]),
      (t[30] = s),
      (t[31] = m),
      (t[32] = A),
      (t[33] = j))
    : ((A = t[32]), (j = t[33])),
    (0, Q.useEffect)(A, j));
  let M, N;
  (t[34] === s
    ? ((M = t[35]), (N = t[36]))
    : ((M = () => {
        let e = !1;
        return s.watch((t) => {
          let { get: n } = t;
          if (!n(ge)) {
            e = !1;
            return;
          }
          e || ((e = !0), C(s, !0, { animate: !1 }));
        });
      }),
      (N = [s]),
      (t[34] = s),
      (t[35] = M),
      (t[36] = N)),
    (0, Q.useEffect)(M, N));
  let P;
  t[37] !== c || t[38] !== s || t[39] !== p
    ? ((P = (e) => {
        if (e.hostId !== c || !p || s.value.routeKind !== `local-thread`)
          return;
        let t = Qe(s.value.conversationId, e.notification);
        t.length !== 0 && oe(s, t);
      }),
      (t[37] = c),
      (t[38] = s),
      (t[39] = p),
      (t[40] = P))
    : (P = t[40]);
  let F = (0, Q.useEffectEvent)(P),
    I;
  t[41] !== F || t[42] !== s
    ? ((I = () => {
        let e = !0;
        return s.watch((t) => {
          let { get: r } = t,
            i = r(n);
          if (e) {
            e = !1;
            return;
          }
          i != null && F(i);
        });
      }),
      (t[41] = F),
      (t[42] = s),
      (t[43] = I))
    : (I = t[43]);
  let L;
  (t[44] === s ? (L = t[45]) : ((L = [s]), (t[44] = s), (t[45] = L)),
    (0, Q.useEffect)(I, L));
  let R;
  t[46] !== c || t[47] !== s || t[48] !== p
    ? ((R = (e) => {
        let t = s.get(le).data;
        e.hostId !== c || e.root !== t?.root || !p || fe(s, e);
      }),
      (t[46] = c),
      (t[47] = s),
      (t[48] = p),
      (t[49] = R))
    : (R = t[49]);
  let z = (0, Q.useEffectEvent)(R),
    B;
  t[50] !== z || t[51] !== s
    ? ((B = () => {
        let e = i(`git`).subscribe(`git-repo-changed`, z);
        return () => {
          (e(), ce(s));
        };
      }),
      (t[50] = z),
      (t[51] = s),
      (t[52] = B))
    : (B = t[52]);
  let V;
  return (
    t[53] === s ? (V = t[54]) : ((V = [s]), (t[53] = s), (t[54] = V)),
    (0, Q.useEffect)(B, V),
    null
  );
}
function Qe(e, n) {
  if (t(n.params.threadId) !== e) return [];
  let { item: r } = n.params;
  return r.type !== `fileChange` || r.status !== `completed`
    ? []
    : [
        ...new Set(
          r.changes.flatMap((e) => {
            switch (e.kind.type) {
              case `add`:
              case `delete`:
                return [e.path];
              case `update`:
                return e.kind.move_path == null
                  ? [e.path]
                  : [e.path, e.kind.move_path];
            }
          }),
        ),
      ];
}
export { Ue as i, qe as n, Ke as r, Ze as t };
//# sourceMappingURL=review-runtime-bridge-BFL70H2Z.js.map
