import { s as e } from "./chunk-Bj-mKKzh.js";
import { S as t, U as n, ea as r, zn as i } from "./src-C.js";
import {
  $s as a,
  Ba as o,
  Hn as s,
  Un as c,
  Va as l,
  Xn as u,
  Yn as d,
  _n as f,
  do as p,
  er as m,
  fo as h,
  tc as g,
  tt as _,
  xa as v,
  za as y,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as b, t as x } from "./jsx-runtime.js";
import { t as S } from "./clsx-BcPLHiun.js";
import {
  $ as C,
  G as ee,
  Q as w,
  S as T,
  T as E,
  U as D,
  V as O,
  X as te,
  Y as ne,
  Z as k,
  _ as A,
  a as re,
  h as j,
  ht as M,
  rt as ie,
  wt as N,
} from "./setting-storage.js";
import { t as P } from "./branch.js";
import { t as ae } from "./product-logger-DusapRyT.js";
import { o as oe } from "./statsig--EYRNU53.js";
import { t as F } from "./request-DWZTrEAr.js";
import { u as I } from "./thread-context-inputs-DBrOekVr.js";
import { O as L, s as R } from "./codex-api-bK--r_2t.js";
import { r as se } from "./toast-signal.js";
import { t as z } from "./tooltip-CDzchJxN.js";
import { s as B } from "./prompt-text-DuAhtLDu.js";
import { t as V } from "./use-environment.js";
import { b as H, t as ce } from "./composer-view-state-JRNwOfub.js";
import { t as U } from "./use-collaboration-mode-CQFe-Ilp.js";
import { t as le } from "./button.js";
import { t as W } from "./spinner.js";
import { n as ue, t as de } from "./use-codex-home.js";
import { t as fe } from "./link-external-BPZREBQk.js";
import { n as pe } from "./use-webview-execution-target.js";
import { n as me } from "./composer-footer-C_v29uwU.js";
import { t as he } from "./x-C_RDKBp5.js";
import { r as ge } from "./git-current-branch-query.js";
import { t as _e } from "./with-window.js";
import { a as G, i as K, l as q, n as J, r as Y } from "./dialog-layout.js";
import { r as ve } from "./modal-controller-state.js";
import { p as ye } from "./sidebar-project-groups.js";
import { t as be } from "./check-md.js";
import { t as X } from "./chevron-right.js";
import { t as xe } from "./arrow-left.js";
import {
  O as Se,
  R as Ce,
  c as we,
  d as Te,
  f as Ee,
  o as De,
  t as Oe,
  x as ke,
} from "./use-rate-limit.js";
import { t as Ae } from "./x-circle.js";
import { r as Z, t as je } from "./dropdown-DtQxMoJw.js";
import { t as Me } from "./globe-CnvlclXd.js";
import { t as Ne } from "./chevron-NmAOI_v1.js";
import { t as Pe } from "./cloud-BOSNAJnX.js";
import { t as Fe } from "./macbook.js";
import { t as Ie } from "./worktree-D_6WAQVb.js";
import { t as Le } from "./notebook-MImpo36y.js";
import { t as Re } from "./settings.cog.js";
import { t as ze } from "./codex-BjFeJtxQ.js";
import { t as Be } from "./plus.js";
import { t as Ve } from "./use-git-current-branch.js";
import { t as He } from "./rate-limit-summary-BDTPCTJm.js";
import { t as Ue } from "./dist-wT0ygyN1.js";
import {
  c as We,
  d as Ge,
  f as Ke,
} from "./local-remote-selection-DqDRxu-D.js";
import { t as qe } from "./use-git-default-branch-gyzefibF.js";
import { t as Je } from "./slash-command-item.js";
import {
  a as Ye,
  r as Xe,
} from "./git-branch-picker-dropdown-content-116YOJSU.js";
import { t as Ze } from "./summary-panel-row.js";
import { i as Qe, n as $e, r as et, t as tt } from "./thread-handoff-store.js";
import { n as nt } from "./git-submodule-paths-query.js";
import { i as rt, n as it, r as at } from "./git-branch-switcher.js";
import { t as ot } from "./dock-CDRDKrMD.js";
import { t as st } from "./use-codex-worktrees.js";
function ct({ isCompactWindow: e }) {
  return !e;
}
function lt({ codexWorktree: e, operation: t, threadHandoff: n }) {
  return t == null
    ? n == null
      ? e
        ? `to-local`
        : `to-worktree`
      : n.isWorktreeConversation
        ? `to-local`
        : `to-worktree`
    : t.direction;
}
function ut({
  conversationId: e,
  handoffBranch: t,
  handoffDirection: n,
  operation: r,
  threadHandoff: i,
}) {
  return e != null && i != null && (n === `to-local` || t != null || r != null);
}
var dt = e(b()),
  Q = x(),
  ft = (e) =>
    (0, Q.jsxs)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Q.jsx)(`path`, {
          d: `M2.5293 2.52884C2.78894 2.26944 3.21106 2.26944 3.4707 2.52884L17.4707 16.5288C17.7303 16.7885 17.7302 17.2105 17.4707 17.4703C17.211 17.7299 16.789 17.7299 16.5293 17.4703L2.5293 3.47025C2.26982 3.21053 2.26967 2.78847 2.5293 2.52884Z`,
          fill: `currentColor`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M5.00879 7.59623C3.47308 7.96665 2.33223 9.35009 2.33203 10.9995C2.33203 12.9335 3.90007 14.5015 5.83398 14.5015H11.9141L13.2441 15.8316H5.83398C3.16553 15.8316 1.00098 13.668 1.00098 10.9995C1.00115 8.99603 2.22092 7.27763 3.95801 6.54545L5.00879 7.59623Z`,
          fill: `currentColor`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M10 2.83451C12.9201 2.83476 15.3235 5.04493 15.6309 7.88334C17.5391 8.18581 18.9987 9.83935 18.999 11.8326C18.999 13.0839 18.4227 14.2008 17.5225 14.9341L16.5723 13.9839C17.2353 13.4983 17.6689 12.7171 17.6689 11.8326C17.6685 10.3594 16.4732 9.16485 15 9.16459C14.6329 9.16441 14.335 8.86671 14.335 8.49955C14.3347 6.10576 12.3938 4.16485 10 4.16459C9.08152 4.16465 8.22971 4.45217 7.52832 4.93998L6.57617 3.98783C7.52699 3.26515 8.71302 2.83458 10 2.83451Z`,
          fill: `currentColor`,
        }),
      ],
    }),
  pt = (e) =>
    (0, Q.jsxs)(`svg`, {
      width: 16,
      height: 16,
      viewBox: `0 0 16 16`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Q.jsx)(`path`, {
          d: `M7.99609 9.85156C8.38697 9.85156 8.69609 10.1478 8.69609 10.5258C8.69602 10.9037 8.38692 11.2 7.99609 11.2C7.60529 11.2 7.29617 10.9037 7.29609 10.5258C7.29609 10.1478 7.60524 9.85158 7.99609 9.85156Z`,
          fill: `currentColor`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M8.00078 4.8C8.38281 4.80015 8.62337 5.0363 8.62344 5.43125C8.62344 5.46559 8.62304 5.51722 8.61875 5.56016L8.55469 8.53281C8.54174 8.8978 8.35254 9.1125 7.99609 9.1125C7.63967 9.11249 7.45084 8.89778 7.44219 8.53281L7.37344 5.56016C7.37343 5.51723 7.36875 5.46558 7.36875 5.43125C7.36882 5.03618 7.61426 4.8 8.00078 4.8Z`,
          fill: `currentColor`,
        }),
        (0, Q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M8 1.66797C11.4971 1.66797 14.332 4.50293 14.332 8C14.332 11.4971 11.4971 14.332 8 14.332C4.50293 14.332 1.66797 11.4971 1.66797 8C1.66797 4.50293 4.50293 1.66797 8 1.66797ZM8 2.73203C5.09056 2.73203 2.73203 5.09056 2.73203 8C2.73203 10.9094 5.09056 13.268 8 13.268C10.9094 13.268 13.268 10.9094 13.268 8C13.268 5.09056 10.9094 2.73203 8 2.73203Z`,
          fill: `currentColor`,
        }),
      ],
    }),
  mt = (e) =>
    (0, Q.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: 12,
      height: 10,
      fill: `none`,
      viewBox: `0 0 12 10`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        fill: `currentColor`,
        d: `M2.4 9.332V1.817L.91 3.31a.533.533 0 0 1-.753-.753l2.4-2.4.083-.068a.533.533 0 0 1 .67.068l2.4 2.4.068.083a.533.533 0 0 1-.738.738l-.083-.068-1.492-1.492v7.515a.532.532 0 0 1-1.064 0Zm5.92-8.8a.532.532 0 0 1 1.064 0v7.516l1.492-1.492.084-.068a.533.533 0 0 1 .668.82l-2.4 2.4a.532.532 0 0 1-.752 0l-2.4-2.4a.533.533 0 0 1 .752-.752l1.493 1.492V.532Z`,
      }),
    }),
  $ = N();
function ht(e, t, n, r) {
  let a = (0, $.c)(9),
    o;
  a[0] === r
    ? (o = a[1])
    : ((o = r === void 0 ? {} : r), (a[0] = r), (a[1] = o));
  let c = o,
    l = String(e),
    u;
  a[2] === l ? (u = a[3]) : ((u = i(l)), (a[2] = l), (a[3] = u));
  let d;
  a[4] !== n || a[5] !== u
    ? ((d = { cwd: u, operationSource: n }), (a[4] = n), (a[5] = u), (a[6] = d))
    : (d = a[6]);
  let f;
  return (
    a[7] === c
      ? (f = a[8])
      : ((f = { staleTime: A.FIVE_SECONDS, ...c }), (a[7] = c), (a[8] = f)),
    s(e, t, `list-worktrees`, d, n, f)
  );
}
function gt({ cwd: e, sourceWorktreeRoot: t, repoWorktreeEntries: n }) {
  let r = _t({ cwd: e, sourceWorktreeRoot: t }),
    i = o(t);
  return (n ?? [])
    .filter((e) => o(e.root) !== i)
    .map((e) => {
      let t = r.length > 0 ? y(e.root, r) : e.root;
      return { gitRoot: e.root, workspaceRoot: t };
    });
}
function _t({ cwd: e, sourceWorktreeRoot: t }) {
  let n = l(e),
    r = l(t).replace(/\/+$/, ``),
    i = o(e),
    a = o(t).replace(/\/+$/, ``);
  if (i === a) return ``;
  let s = `${a}/`;
  if (!i.startsWith(s)) return ``;
  let c = `${r}/`;
  return n.slice(c.length);
}
function vt(e) {
  let t = (0, $.c)(7),
    { command: n, output: r, className: i } = e,
    a = n ? `$ ${n}\n${r}` : r,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = S(
        `bg-token-terminal-background border-token-terminal-border text-token-terminal-foreground max-h-[36vh] overflow-auto rounded-xl border px-3 py-2`,
        i,
      )),
      (t[0] = i),
      (t[1] = o));
  let s;
  t[2] === a
    ? (s = t[3])
    : ((s = (0, Q.jsx)(`pre`, {
        className: `font-mono text-xs leading-5 whitespace-pre`,
        children: a,
      })),
      (t[2] = a),
      (t[3] = s));
  let c;
  return (
    t[4] !== o || t[5] !== s
      ? ((c = (0, Q.jsx)(`div`, { className: o, children: s })),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function yt(e) {
  let t = (0, $.c)(11),
    { operation: n, onClose: r, onRetry: i } = e;
  if (n.status === `queued` || n.status === `running`) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, Q.jsx)(bt, { operation: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  if (n.status === `warning`) {
    let e;
    return (
      t[2] !== r || t[3] !== n
        ? ((e = (0, Q.jsx)(St, { operation: n, onClose: r })),
          (t[2] = r),
          (t[3] = n),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (n.status === `success`) {
    let e;
    return (
      t[5] === n
        ? (e = t[6])
        : ((e = (0, Q.jsx)(xt, { operation: n })), (t[5] = n), (t[6] = e)),
      e
    );
  }
  let a;
  return (
    t[7] !== r || t[8] !== i || t[9] !== n
      ? ((a = (0, Q.jsx)(Ct, { operation: n, onClose: r, onRetry: i })),
        (t[7] = r),
        (t[8] = i),
        (t[9] = n),
        (t[10] = a))
      : (a = t[10]),
    a
  );
}
function bt(e) {
  let t = (0, $.c)(20),
    { operation: n } = e,
    r,
    i,
    a,
    o,
    s,
    c;
  if (t[0] !== n) {
    let e = Mt(n);
    ((i = J), (s = `gap-0 px-6 py-5`));
    let l = Et(n),
      u = Dt(n),
      d;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((d = (0, Q.jsx)(D, {
          id: `localConversation.threadHandoff.progress.subtitle`,
          defaultMessage: `Hang tight, this may take a few moments. You can close this modal, we’ll let you know when the hand-off is finished.`,
          description: `Subtitle shown while a thread handoff is running`,
        })),
        (t[7] = d))
      : (d = t[7]),
      t[8] !== l || t[9] !== u
        ? ((c = (0, Q.jsx)(G, {
            className: `gap-0`,
            children: (0, Q.jsx)(K, {
              icon: l,
              title: u,
              className: `gap-4`,
              iconClassName: `h-10 w-10 rounded-2xl p-0`,
              iconBackgroundClassName: `bg-token-foreground/5`,
              titleClassName: `font-semibold`,
              subtitleClassName: `text-base leading-6 tracking-[-0.13px]`,
              subtitle: d,
            }),
          })),
          (t[8] = l),
          (t[9] = u),
          (t[10] = c))
        : (c = t[10]),
      (r = G),
      (a = `gap-4 pt-5`),
      (o = e.map((e) => (0, Q.jsx)(wt, { step: e, operation: n }, e.id))),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  } else
    ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]));
  let l;
  t[11] !== r || t[12] !== a || t[13] !== o
    ? ((l = (0, Q.jsx)(r, { className: a, children: o })),
      (t[11] = r),
      (t[12] = a),
      (t[13] = o),
      (t[14] = l))
    : (l = t[14]);
  let u;
  return (
    t[15] !== i || t[16] !== s || t[17] !== c || t[18] !== l
      ? ((u = (0, Q.jsxs)(i, { className: s, children: [c, l] })),
        (t[15] = i),
        (t[16] = s),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u))
      : (u = t[19]),
    u
  );
}
function xt(e) {
  let t = (0, $.c)(8),
    { operation: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(be, { className: `icon-md text-token-charts-green` })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n ? (i = t[2]) : ((i = At(n)), (t[1] = n), (t[2] = i));
  let a;
  t[3] === n ? (a = t[4]) : ((a = jt(n)), (t[3] = n), (t[4] = a));
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = (0, Q.jsx)(J, {
          className: `gap-0 px-6 py-5`,
          children: (0, Q.jsx)(G, {
            className: `gap-0`,
            children: (0, Q.jsx)(K, {
              icon: r,
              className: `gap-4`,
              iconClassName: `h-10 w-10 rounded-2xl p-0`,
              iconBackgroundClassName: `bg-token-charts-green/20`,
              title: i,
              titleClassName: `font-semibold`,
              subtitle: a,
              subtitleClassName: `text-base leading-6 tracking-[-0.13px]`,
            }),
          }),
        })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
function St(e) {
  let t = (0, $.c)(12),
    { operation: n, onClose: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Q.jsx)(pt, {
        className: `icon-md text-token-editor-warning-foreground`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === n ? (a = t[2]) : ((a = Ot(n)), (t[1] = n), (t[2] = a));
  let o;
  t[3] !== n.warningMessage || t[4] !== a
    ? ((o = (0, Q.jsx)(G, {
        children: (0, Q.jsx)(K, {
          icon: i,
          className: `gap-4`,
          iconClassName: `h-10 w-10 rounded-2xl p-0`,
          iconBackgroundClassName: `bg-token-editor-warning-foreground/15`,
          title: a,
          titleClassName: `font-semibold`,
          subtitle: n.warningMessage,
          subtitleClassName: `text-base leading-6 tracking-[-0.13px]`,
        }),
      })),
      (t[3] = n.warningMessage),
      (t[4] = a),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.warning.close`,
        defaultMessage: `Close`,
        description: `Button label to dismiss the warning thread handoff modal`,
      })),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === r
    ? (c = t[8])
    : ((c = (0, Q.jsx)(G, {
        className: `pt-6`,
        children: (0, Q.jsx)(Y, {
          children: (0, Q.jsx)(le, {
            color: `primary`,
            className: `h-8 rounded-full px-4 text-base font-medium`,
            onClick: r,
            children: s,
          }),
        }),
      })),
      (t[7] = r),
      (t[8] = c));
  let l;
  return (
    t[9] !== o || t[10] !== c
      ? ((l = (0, Q.jsxs)(J, {
          className: `gap-0 px-6 py-5`,
          children: [o, c],
        })),
        (t[9] = o),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
function Ct(e) {
  let t = (0, $.c)(21),
    { operation: n, onClose: r, onRetry: i } = e,
    a = n.execOutput,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(Ae, { className: `icon-md text-token-danger -ml-2` })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === n ? (s = t[2]) : ((s = kt(n)), (t[1] = n), (t[2] = s));
  let c;
  t[3] !== n.errorMessage || t[4] !== s
    ? ((c = (0, Q.jsx)(G, {
        children: (0, Q.jsx)(K, {
          icon: o,
          className: `gap-4`,
          iconClassName: `h-auto w-auto rounded-none p-0`,
          iconBackgroundClassName: `bg-transparent`,
          title: s,
          titleClassName: `font-semibold`,
          subtitle: n.errorMessage,
          subtitleClassName: `text-base leading-6 tracking-[-0.13px]`,
        }),
      })),
      (t[3] = n.errorMessage),
      (t[4] = s),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === a
    ? (l = t[7])
    : ((l =
        a != null && a.output.length > 0
          ? (0, Q.jsx)(G, {
              className: `pt-5`,
              children: (0, Q.jsx)(vt, {
                command: a?.command,
                output: a.output,
              }),
            })
          : null),
      (t[6] = a),
      (t[7] = l));
  let u;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.error.close`,
        defaultMessage: `Close`,
        description: `Button label to close the failed thread handoff modal`,
      })),
      (t[8] = u))
    : (u = t[8]);
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d = (0, Q.jsx)(le, {
        color: `secondary`,
        className: `h-8 rounded-full px-4 text-base font-medium`,
        onClick: r,
        children: u,
      })),
      (t[9] = r),
      (t[10] = d));
  let f;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.error.retry`,
        defaultMessage: `Try again`,
        description: `Button label to retry a failed thread handoff`,
      })),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === i
    ? (p = t[13])
    : ((p = (0, Q.jsx)(le, {
        color: `primary`,
        className: `h-8 rounded-full px-4 text-base font-medium`,
        onClick: i,
        children: f,
      })),
      (t[12] = i),
      (t[13] = p));
  let m;
  t[14] !== d || t[15] !== p
    ? ((m = (0, Q.jsx)(G, {
        className: `pt-5`,
        children: (0, Q.jsxs)(Y, { children: [d, p] }),
      })),
      (t[14] = d),
      (t[15] = p),
      (t[16] = m))
    : (m = t[16]);
  let h;
  return (
    t[17] !== c || t[18] !== l || t[19] !== m
      ? ((h = (0, Q.jsxs)(J, {
          className: `max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto px-6 py-5`,
          children: [c, l, m],
        })),
        (t[17] = c),
        (t[18] = l),
        (t[19] = m),
        (t[20] = h))
      : (h = t[20]),
    h
  );
}
function wt(e) {
  let t = (0, $.c)(16),
    { step: n, operation: r } = e,
    i;
  t[0] === n.status
    ? (i = t[1])
    : ((i = (0, Q.jsx)(Tt, { status: n.status })),
      (t[0] = n.status),
      (t[1] = i));
  let a = n.status === `running`,
    o = n.status === `done`,
    s = n.status === `failed`,
    c = n.status === `pending`,
    l;
  t[2] !== a || t[3] !== o || t[4] !== s || t[5] !== c
    ? ((l = S(`text-base leading-6 tracking-[-0.13px]`, {
        "font-medium text-token-foreground": a,
        "text-token-foreground": o,
        "text-token-editor-error-foreground": s,
        "text-token-description-foreground": c,
      })),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== r || t[8] !== n.id
    ? ((u = Nt(n.id, r)), (t[7] = r), (t[8] = n.id), (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== l || t[11] !== u
    ? ((d = (0, Q.jsx)(`div`, { className: l, children: u })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== i || t[14] !== d
      ? ((f = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [i, d],
        })),
        (t[13] = i),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function Tt(e) {
  let t = (0, $.c)(4),
    { status: n } = e;
  if (n === `running`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`span`, {
            className: `relative h-4 w-4 shrink-0`,
            children: (0, Q.jsx)(`span`, {
              className: `absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-token-foreground border-r-token-foreground`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `done`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`span`, {
            className: `border-token-success/40 bg-token-success/15 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border`,
            children: (0, Q.jsx)(be, {
              className: `icon-2xs text-token-success`,
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (n === `failed`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`span`, {
            className: `flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-token-editor-error-foreground/40 bg-token-editor-error-foreground/15`,
            children: (0, Q.jsx)(he, {
              className: `icon-2xs text-token-editor-error-foreground`,
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let r;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(`span`, {
          className: `border-token-border-subtle h-4 w-4 shrink-0 rounded-full border-2`,
        })),
        (t[3] = r))
      : (r = t[3]),
    r
  );
}
function Et(e) {
  return (0, Q.jsx)(mt, {
    className: `icon-md rotate-90 text-token-foreground`,
  });
}
function Dt(e) {
  return e.direction === `to-worktree`
    ? (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.progress.worktree.title`,
        defaultMessage: `Handing off to worktree`,
        description: `Title shown while a thread is being handed off to a worktree`,
      })
    : (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.progress.local.title`,
        defaultMessage: `Handing off to local`,
        description: `Title shown while a thread is being handed off to local`,
      });
}
function Ot(e) {
  return e.direction === `to-worktree`
    ? (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.warning.worktree.title`,
        defaultMessage: `Hand-off to worktree needs attention`,
        description: `Title shown when move to worktree finishes with a warning`,
      })
    : (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.warning.local.title`,
        defaultMessage: `Hand-off to local needs attention`,
        description: `Title shown when move to local finishes with a warning`,
      });
}
function kt(e) {
  return e.direction === `to-worktree`
    ? (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.error.worktree.title`,
        defaultMessage: `Hand-off to worktree failed`,
        description: `Title shown when move to worktree fails`,
      })
    : (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.error.local.title`,
        defaultMessage: `Hand-off to local failed`,
        description: `Title shown when move to local fails`,
      });
}
function At(e) {
  return e.direction === `to-worktree`
    ? (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.success.worktree.title`,
        defaultMessage: `Handed-off to worktree`,
        description: `Title shown when move to worktree succeeds while the modal is open`,
      })
    : (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.success.local.title`,
        defaultMessage: `Handed-off to local`,
        description: `Title shown when move to local succeeds while the modal is open`,
      });
}
function jt(e) {
  if (e.direction === `to-local`)
    return (0, Q.jsx)(D, {
      id: `localConversation.threadHandoff.success.local.subtitle`,
      defaultMessage: `You are now working on {branch} locally.`,
      description: `Subtitle shown when move to local succeeds while the modal is open`,
      values: { branch: e.sourceBranch },
    });
  let t = e.worktreeBranch ?? e.sourceBranch,
    n =
      e.localBranch != null && e.localBranch !== e.sourceBranch
        ? e.localBranch
        : null,
    r =
      e.request.existingWorktreeGitRoot == null
        ? (0, Q.jsx)(D, {
            id: `localConversation.threadHandoff.success.worktreeDescription.new`,
            defaultMessage: `new worktree`,
            description: `Noun phrase describing a newly created worktree in the thread handoff success message`,
          })
        : (0, Q.jsx)(D, {
            id: `localConversation.threadHandoff.success.worktreeDescription.existing`,
            defaultMessage: `worktree`,
            description: `Noun phrase describing an existing worktree in the thread handoff success message`,
          });
  return n == null
    ? (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.success.worktree.subtitle`,
        defaultMessage: `You are now working on {worktreeBranch} in a {worktreeDescription}.`,
        description: `Subtitle shown when move to worktree succeeds while the modal is open and no local checkout branch was changed`,
        values: { worktreeBranch: t, worktreeDescription: r },
      })
    : (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.success.worktree.subtitle.localBranch`,
        defaultMessage: `You are now working on {worktreeBranch} in a {worktreeDescription}. Branch {localBranch} was checked out locally.`,
        description: `Subtitle shown when move to worktree succeeds while the modal is open and a local checkout branch was changed`,
        values: { worktreeBranch: t, worktreeDescription: r, localBranch: n },
      });
}
function Mt(e) {
  let t = e.steps.findIndex((e) => e.status === `failed`);
  if (t === -1) return e.steps;
  let n = e.steps.slice(0, t + 1);
  return t === e.steps.length - 1
    ? n
    : [...n, { id: `rolling-back-changes`, status: `running` }];
}
function Nt(e, t) {
  if (e === `rolling-back-changes`)
    return (0, Q.jsx)(D, {
      id: `localConversation.threadHandoff.step.rollingBackChanges`,
      defaultMessage: `Rolling back changes`,
      description: `Progress step shown after a thread handoff step fails while cleanup is still in progress`,
    });
  switch (e) {
    case `prepare-host-transfer`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.prepareHostTransfer`,
        defaultMessage: `Preparing files for transfer`,
        description: `Progress step shown while preparing cross-host git and rollout artifacts`,
      });
    case `transfer-host-artifacts`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.transferHostArtifacts`,
        defaultMessage: `Copying files to the destination host`,
        description: `Progress step shown while copying cross-host git and rollout artifacts`,
      });
    case `create-new-worktree`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.createNewWorktree`,
        defaultMessage: `Creating a new worktree`,
        description: `Progress step shown while creating a new worktree during thread handoff`,
      });
    case `reuse-existing-worktree`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.reuseExistingWorktree`,
        defaultMessage: `Reusing the existing worktree`,
        description: `Progress step shown while reusing an existing worktree during thread handoff`,
      });
    case `stash-source-changes`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.stashSourceChanges`,
        defaultMessage: `Stashing uncommitted changes`,
        description: `Progress step shown while stashing source changes during thread handoff`,
      });
    case `checkout-local-branch`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.checkoutLocalBranch`,
        defaultMessage: `Checking out {branch} locally`,
        description: `Progress step shown while checking out a branch locally during thread handoff`,
        values: { branch: t.localBranch ?? t.sourceBranch },
      });
    case `stash-target-worktree-changes`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.stashTargetWorktreeChanges`,
        defaultMessage: `Stashing worktree changes`,
        description: `Progress step shown while stashing pre-existing worktree changes during thread handoff`,
      });
    case `checkout-worktree-branch`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.checkoutWorktreeBranch`,
        defaultMessage: `Checking out {branch} in worktree`,
        description: `Progress step shown while checking out a branch in the worktree during thread handoff`,
        values: { branch: t.worktreeBranch ?? t.sourceBranch },
      });
    case `detach-worktree-branch`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.detachWorktreeBranch`,
        defaultMessage: `Detaching branch from worktree`,
        description: `Progress step shown while detaching the worktree branch during handoff back to local`,
      });
    case `apply-changes-to-worktree`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.applyChangesToWorktree`,
        defaultMessage: `Applying uncommitted changes to worktree`,
        description: `Progress step shown while applying changes to the worktree during thread handoff`,
      });
    case `apply-changes-to-local`:
      return (0, Q.jsx)(D, {
        id: `localConversation.threadHandoff.step.applyChangesToLocal`,
        defaultMessage: `Applying uncommitted changes locally`,
        description: `Progress step shown while applying changes locally during thread handoff`,
      });
    case `switching-thread`:
      return t.direction === `to-worktree`
        ? (0, Q.jsx)(D, {
            id: `localConversation.threadHandoff.step.moveThreadToWorktree`,
            defaultMessage: `Moving chat to worktree`,
            description: `Progress step shown while moving the thread to a worktree after the git handoff`,
          })
        : (0, Q.jsx)(D, {
            id: `localConversation.threadHandoff.step.moveThreadToLocal`,
            defaultMessage: `Moving chat to local`,
            description: `Progress step shown while moving the thread to local after the git handoff`,
          });
  }
}
function Pt(e) {
  let r = (0, $.c)(63),
    {
      open: a,
      onOpenChange: s,
      conversationId: l,
      composerViewState: u,
      conversationTitle: d,
      currentBranch: f,
      cwd: m,
    } = e,
    h = ee(),
    [g, v] = (0, dt.useState)(null),
    [y, b] = (0, dt.useState)(null),
    x = Ye({
      branchPrefix: re(t.branchPrefix) ?? void 0,
      conversationTitle: d,
    }),
    S = y ?? (f || x),
    C = S.trim(),
    w = p(ne(_, l)),
    { data: T } = c(m, w, `move_to_local_dialog`),
    E = T?.root ?? null,
    D = E ?? m,
    O = o(D),
    {
      data: te,
      isLoading: A,
      isFetching: j,
    } = ht(E ?? m, w, `move_to_local_dialog`),
    { data: M } = st(w, `move_to_local_dialog`),
    ie = de(w.id),
    { data: N } = k(I),
    P = te?.worktrees,
    ae;
  r[0] === M?.worktrees
    ? (ae = r[1])
    : ((ae = new Set((M?.worktrees ?? []).map(Ft))),
      (r[0] = M?.worktrees),
      (r[1] = ae));
  let oe = ae,
    F;
  r[2] !== ie || r[3] !== oe
    ? ((F = (e) => oe.has(o(e)) || n(e, ie)),
      (r[2] = ie),
      (r[3] = oe),
      (r[4] = F))
    : (F = r[4]);
  let L = F,
    R,
    se,
    z,
    B,
    V,
    H;
  if (
    r[5] !== m ||
    r[6] !== L ||
    r[7] !== P ||
    r[8] !== g ||
    r[9] !== D ||
    r[10] !== N?.labels
  ) {
    let e;
    (r[17] === L
      ? (e = r[18])
      : ((e = (e) => !L(e.root)), (r[17] = L), (r[18] = e)),
      (se = gt({
        cwd: m,
        sourceWorktreeRoot: D,
        repoWorktreeEntries: (P ?? []).filter(e),
      })));
    let t;
    (r[19] === N?.labels
      ? (t = r[20])
      : ((t = N?.labels ?? {}), (r[19] = N?.labels), (r[20] = t)),
      (H = t),
      (B = se.find((e) => e.gitRoot === g) ?? se[0] ?? null));
    let n = B?.workspaceRoot ?? null;
    ((z = n == null ? null : i(n)),
      (R = B?.gitRoot ?? null),
      (V = R ? o(R) : null),
      (r[5] = m),
      (r[6] = L),
      (r[7] = P),
      (r[8] = g),
      (r[9] = D),
      (r[10] = N?.labels),
      (r[11] = R),
      (r[12] = se),
      (r[13] = z),
      (r[14] = B),
      (r[15] = V),
      (r[16] = H));
  } else
    ((R = r[11]),
      (se = r[12]),
      (z = r[13]),
      (B = r[14]),
      (V = r[15]),
      (H = r[16]));
  let ce = V,
    U = a && R != null,
    le;
  r[21] === U
    ? (le = r[22])
    : ((le = {
        enabled: U,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
      }),
      (r[21] = U),
      (r[22] = le));
  let {
      data: W,
      isLoading: ue,
      isFetching: fe,
    } = Ve(R, w, `move_to_local_dialog`, le),
    pe = a && R != null,
    me;
  r[23] === pe
    ? (me = r[24])
    : ((me = {
        enabled: pe,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
      }),
      (r[23] = pe),
      (r[24] = me));
  let {
      data: he,
      isLoading: ge,
      isFetching: _e,
    } = rt(R, w, `move_to_local_dialog`, me),
    G = (P ?? []).some((e) => {
      let t = o(e.root);
      return !(
        L(e.root) ||
        e.headRef.type !== `branch` ||
        e.headRef.string !== C ||
        (ce && t === ce) ||
        t === O
      );
    }),
    K = A || j || (R != null && (ue || fe || ge || _e)),
    q =
      he?.type === `success` &&
      he.stagedCount + he.unstagedCount + he.untrackedCount > 0,
    J = null;
  if (A || j) {
    let e;
    (r[25] === h
      ? (e = r[26])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.disabled.loading`,
          defaultMessage: `Checking available local workspaces…`,
          description: `Tooltip shown when the move to local button is disabled while local worktrees are loading`,
        })),
        (r[25] = h),
        (r[26] = e)),
      (J = e));
  } else if (B == null || z == null) {
    let e;
    (r[27] === h
      ? (e = r[28])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.disabled.noWorkspace`,
          defaultMessage: `No local workspace found for this worktree`,
          description: `Tooltip shown when the move to local button is disabled because no local workspace is available`,
        })),
        (r[27] = h),
        (r[28] = e)),
      (J = e));
  } else if (C.length === 0) {
    let e;
    (r[29] === h
      ? (e = r[30])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.confirm.branchRequired`,
          defaultMessage: `Enter a branch name`,
          description: `Tooltip shown when the move to local button is disabled because no local branch name was entered`,
        })),
        (r[29] = h),
        (r[30] = e)),
      (J = e));
  } else if (C.endsWith(`/`)) {
    let e;
    (r[31] === h
      ? (e = r[32])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.confirm.trailingSlashError`,
          defaultMessage: `Branch name cannot end with “/”`,
          description: `Tooltip shown when the move to local button is disabled because the local branch name ends with a slash`,
        })),
        (r[31] = h),
        (r[32] = e)),
      (J = e));
  } else if (G) {
    let e;
    (r[33] === h
      ? (e = r[34])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.disabled.branchCheckedOut`,
          defaultMessage: `Branch is already checked out in another worktree`,
          description: `Tooltip shown when the move to local button is disabled because the branch is checked out elsewhere`,
        })),
        (r[33] = h),
        (r[34] = e)),
      (J = e));
  } else if (E == null) {
    let e;
    (r[35] === h
      ? (e = r[36])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.confirm.missingWorktreeRoot`,
          defaultMessage: `Unable to resolve the current worktree`,
          description: `Tooltip shown when the move to local button is disabled because the source worktree root is unavailable`,
        })),
        (r[35] = h),
        (r[36] = e)),
      (J = e));
  } else if (R != null && (ue || fe || ge || _e)) {
    let e;
    (r[37] === h
      ? (e = r[38])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.confirm.loadingStatus`,
          defaultMessage: `Checking local workspace status…`,
          description: `Tooltip shown when the move to local button is disabled while git status is loading`,
        })),
        (r[37] = h),
        (r[38] = e)),
      (J = e));
  } else if (W == null) {
    let e;
    (r[39] === h
      ? (e = r[40])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.confirm.missingLocalBranch`,
          defaultMessage: `Unable to determine the current local branch`,
          description: `Tooltip shown when the move to local button is disabled because the current local branch is unavailable`,
        })),
        (r[39] = h),
        (r[40] = e)),
      (J = e));
  } else if (he?.type !== `success`) {
    let e;
    (r[41] === h
      ? (e = r[42])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.confirm.localStatusError`,
          defaultMessage: `Unable to determine whether the local workspace is clean`,
          description: `Tooltip shown when the move to local button is disabled because the local git status check failed`,
        })),
        (r[41] = h),
        (r[42] = e)),
      (J = e));
  } else if (q) {
    let e;
    (r[43] === h
      ? (e = r[44])
      : ((e = h.formatMessage({
          id: `localConversation.moveToLocal.confirm.localChangesBlocked`,
          defaultMessage: `Stash or commit your local changes to hand off`,
          description: `Tooltip shown when the move to local button is disabled because the destination local workspace is not clean`,
        })),
        (r[43] = h),
        (r[44] = e)),
      (J = e));
  }
  let Y = w.kind === `local` ? `local` : `remote`,
    ve;
  r[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = () => {
        b(null);
      }),
      (r[45] = ve))
    : (ve = r[45]);
  let ye;
  return (
    r[46] !== u ||
    r[47] !== J ||
    r[48] !== l ||
    r[49] !== m ||
    r[50] !== K ||
    r[51] !== S ||
    r[52] !== R ||
    r[53] !== se ||
    r[54] !== z ||
    r[55] !== s ||
    r[56] !== a ||
    r[57] !== B ||
    r[58] !== Y ||
    r[59] !== C ||
    r[60] !== H ||
    r[61] !== E
      ? ((ye = (0, Q.jsx)(It, {
          open: a,
          onOpenChange: s,
          conversationId: l,
          composerViewState: u,
          localBranch: S,
          trimmedLocalBranch: C,
          onChangeLocalBranch: b,
          cwd: m,
          localTargets: se,
          selectedLocalTarget: B,
          onChangeLocalTarget: v,
          workspaceRootLabels: H,
          isLoadingBlocked: K,
          confirmDisabledReason: J,
          localGitRoot: R,
          localWorkspaceCwd: z,
          worktreeRoot: E,
          destinationLabel: Y,
          onResetLocalBranch: ve,
        })),
        (r[46] = u),
        (r[47] = J),
        (r[48] = l),
        (r[49] = m),
        (r[50] = K),
        (r[51] = S),
        (r[52] = R),
        (r[53] = se),
        (r[54] = z),
        (r[55] = s),
        (r[56] = a),
        (r[57] = B),
        (r[58] = Y),
        (r[59] = C),
        (r[60] = H),
        (r[61] = E),
        (r[62] = ye))
      : (ye = r[62]),
    ye
  );
}
function Ft(e) {
  return o(e.dir);
}
function It(e) {
  let t = (0, $.c)(108),
    {
      open: n,
      onOpenChange: r,
      conversationId: i,
      composerViewState: a,
      localBranch: o,
      trimmedLocalBranch: s,
      onChangeLocalBranch: c,
      cwd: l,
      localTargets: u,
      selectedLocalTarget: d,
      onChangeLocalTarget: f,
      workspaceRootLabels: p,
      isLoadingBlocked: m,
      confirmDisabledReason: h,
      localGitRoot: g,
      localWorkspaceCwd: _,
      worktreeRoot: v,
      destinationLabel: y,
      onResetLocalBranch: b,
    } = e,
    x = ee(),
    [S, C] = (0, dt.useState)(null),
    { activeOperationId: w } = Qe(),
    T = et(i),
    {
      addToLocalOperation: E,
      closeActiveOperation: O,
      removeOperation: te,
      openOperation: ne,
      updateOperation: k,
    } = $e(),
    A = T != null && w === T.id,
    re = n || A,
    j = h != null || g == null || _ == null || v == null,
    M;
  t[0] !== d || t[1] !== p
    ? ((M =
        d == null
          ? null
          : Rt({ workspaceRoot: d.workspaceRoot, workspaceRootLabels: p })),
      (t[0] = d),
      (t[1] = p),
      (t[2] = M))
    : (M = t[2]);
  let ie = M,
    N = d == null || u.length <= 1,
    P;
  t[3] !== E ||
  t[4] !== a ||
  t[5] !== i ||
  t[6] !== l ||
  t[7] !== j ||
  t[8] !== g ||
  t[9] !== _ ||
  t[10] !== b ||
  t[11] !== ne ||
  t[12] !== s ||
  t[13] !== v
    ? ((P = () => {
        j ||
          (ne(
            E({
              sourceConversationId: i,
              sourceBranch: s,
              localBranch: s,
              request: {
                cwd: l,
                localGitRoot: g,
                localWorkspaceRoot: _,
                worktreeRoot: v,
              },
              stepIds: [
                `stash-source-changes`,
                `detach-worktree-branch`,
                `checkout-local-branch`,
                `apply-changes-to-local`,
                `switching-thread`,
              ],
              composerViewState: a,
            }).id,
          ),
          b());
      }),
      (t[3] = E),
      (t[4] = a),
      (t[5] = i),
      (t[6] = l),
      (t[7] = j),
      (t[8] = g),
      (t[9] = _),
      (t[10] = b),
      (t[11] = ne),
      (t[12] = s),
      (t[13] = v),
      (t[14] = P))
    : (P = t[14]);
  let ae = P,
    oe;
  t[15] !== O ||
  t[16] !== A ||
  t[17] !== r ||
  t[18] !== b ||
  t[19] !== T ||
  t[20] !== te
    ? ((oe = (e) => {
        if (!e && A) {
          if (T?.status === `success` || T?.status === `error`) {
            (te(T.id), r(!1));
            return;
          }
          if (T?.status === `warning`) {
            (te(T.id), r(!1));
            return;
          }
          (O(), r(!1));
          return;
        }
        (e || b(), r(e));
      }),
      (t[15] = O),
      (t[16] = A),
      (t[17] = r),
      (t[18] = b),
      (t[19] = T),
      (t[20] = te),
      (t[21] = oe))
    : (oe = t[21]);
  let F = oe;
  if (A && T != null) {
    let e;
    t[22] !== O || t[23] !== T.id || t[24] !== T.status || t[25] !== te
      ? ((e = () => {
          if (T.status === `success` || T.status === `error`) {
            te(T.id);
            return;
          }
          if (T.status === `warning`) {
            te(T.id);
            return;
          }
          O();
        }),
        (t[22] = O),
        (t[23] = T.id),
        (t[24] = T.status),
        (t[25] = te),
        (t[26] = e))
      : (e = t[26]);
    let n;
    t[27] !== ne || t[28] !== T.id || t[29] !== k
      ? ((n = () => {
          (k(T.id, Lt), ne(T.id));
        }),
        (t[27] = ne),
        (t[28] = T.id),
        (t[29] = k),
        (t[30] = n))
      : (n = t[30]);
    let r;
    t[31] !== T || t[32] !== e || t[33] !== n
      ? ((r = (0, Q.jsx)(yt, { operation: T, onClose: e, onRetry: n })),
        (t[31] = T),
        (t[32] = e),
        (t[33] = n),
        (t[34] = r))
      : (r = t[34]);
    let i;
    return (
      t[35] !== re || t[36] !== F || t[37] !== r
        ? ((i = (0, Q.jsx)(q, {
            size: `compact`,
            open: re,
            onOpenChange: F,
            children: r,
          })),
          (t[35] = re),
          (t[36] = F),
          (t[37] = r),
          (t[38] = i))
        : (i = t[38]),
      i
    );
  }
  let I;
  t[39] === ae
    ? (I = t[40])
    : ((I = (e) => {
        (e.preventDefault(), ae());
      }),
      (t[39] = ae),
      (t[40] = I));
  let L;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Q.jsx)(Xe.Header, {
        icon: (0, Q.jsx)(mt, {
          className: `icon-base rotate-90 text-token-foreground`,
        }),
      })),
      (t[41] = L))
    : (L = t[41]);
  let R;
  t[42] === y
    ? (R = t[43])
    : ((R = (0, Q.jsx)(Xe.Title, {
        children: (0, Q.jsx)(D, {
          id: `localConversation.moveToLocal.modal.title`,
          defaultMessage: `Hand off chat to {destinationLabel}`,
          description: `Title for the move-to-local confirmation modal`,
          values: { destinationLabel: y },
        }),
      })),
      (t[42] = y),
      (t[43] = R));
  let se;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Q.jsx)(`span`, {
        children: (0, Q.jsx)(D, {
          id: `localConversation.moveToLocal.modal.subtitle.prefix`,
          defaultMessage: `Check out branch `,
          description: `Prefix for the move-to-local confirmation sentence before the branch name`,
        }),
      })),
      (t[44] = se))
    : (se = t[44]);
  let z;
  t[45] === c
    ? (z = t[46])
    : ((z = (e) => {
        c(it(e.target.value));
      }),
      (t[45] = c),
      (t[46] = z));
  let B;
  t[47] === x
    ? (B = t[48])
    : ((B = x.formatMessage({
        id: `localConversation.moveToLocal.modal.branchAriaLabel`,
        defaultMessage: `Local branch name`,
        description: `Aria label for the branch name input in the move-to-local modal`,
      })),
      (t[47] = x),
      (t[48] = B));
  let V;
  t[49] !== o || t[50] !== z || t[51] !== B
    ? ((V = (0, Q.jsx)(`input`, {
        className: `mx-1 inline-flex h-8 w-48 rounded-lg bg-token-foreground/5 px-2 py-0.5 align-middle text-base leading-6 text-token-foreground outline-none`,
        autoFocus: !0,
        value: o,
        onChange: z,
        "aria-label": B,
      })),
      (t[49] = o),
      (t[50] = z),
      (t[51] = B),
      (t[52] = V))
    : (V = t[52]);
  let H;
  t[53] === y
    ? (H = t[54])
    : ((H = (0, Q.jsx)(`span`, {
        children: (0, Q.jsx)(D, {
          id: `localConversation.moveToLocal.modal.subtitle.suffix`,
          defaultMessage: ` in a {destinationLabel} workspace and detach it from worktree.`,
          description: `Suffix for the move-to-local confirmation sentence after the branch name`,
          values: { destinationLabel: y },
        }),
      })),
      (t[53] = y),
      (t[54] = H));
  let ce;
  t[55] !== V || t[56] !== H
    ? ((ce = (0, Q.jsxs)(`p`, {
        className: `text-base leading-6 tracking-[-0.13px] text-token-description-foreground`,
        children: [se, V, H],
      })),
      (t[55] = V),
      (t[56] = H),
      (t[57] = ce))
    : (ce = t[57]);
  let U;
  t[58] !== ce || t[59] !== R
    ? ((U = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [R, ce],
      })),
      (t[58] = ce),
      (t[59] = R),
      (t[60] = U))
    : (U = t[60]);
  let W;
  t[61] === y
    ? (W = t[62])
    : ((W = (0, Q.jsx)(`span`, {
        className: `text-token-description-foreground`,
        children: (0, Q.jsx)(D, {
          id: `localConversation.moveToLocal.modal.projectPrefix`,
          defaultMessage: `Handing off to {destinationLabel} workspace`,
          description: `Text shown before the project selector in the move-to-local modal`,
          values: { destinationLabel: y },
        }),
      })),
      (t[61] = y),
      (t[62] = W));
  let ue;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (e) => {
        if (typeof document > `u`) {
          C(null);
          return;
        }
        C(e?.closest(`.codex-dialog`) ?? document.body);
      }),
      (t[63] = ue))
    : (ue = t[63]);
  let de;
  t[64] === ie
    ? (de = t[65])
    : ((de =
        ie == null
          ? (0, Q.jsx)(`span`, {
              className: `min-w-0 flex-1 truncate text-left text-token-description-foreground`,
              children: (0, Q.jsx)(D, {
                id: `localConversation.moveToLocal.modal.projectPlaceholder`,
                defaultMessage: `No local workspace found`,
                description: `Placeholder shown when the move-to-local modal cannot find a local workspace target`,
              }),
            })
          : (0, Q.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-1.5`,
              children: [
                (0, Q.jsx)(`span`, {
                  className: `w-full min-w-0 truncate text-left text-token-foreground [direction:rtl]`,
                  children: (0, Q.jsx)(`span`, {
                    className: `block w-full text-left [direction:ltr] [unicode-bidi:plaintext]`,
                    children: ie,
                  }),
                }),
                (0, Q.jsx)(Ne, {
                  className: `icon-xs shrink-0 text-token-description-foreground`,
                }),
              ],
            })),
      (t[64] = ie),
      (t[65] = de));
  let fe;
  t[66] !== N || t[67] !== de
    ? ((fe = (0, Q.jsx)(`button`, {
        type: `button`,
        className: `flex min-w-0 items-center gap-1.5 rounded-lg bg-token-foreground/5 px-2 py-0.5 text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground`,
        disabled: N,
        children: de,
      })),
      (t[66] = N),
      (t[67] = de),
      (t[68] = fe))
    : (fe = t[68]);
  let pe;
  if (t[69] !== u || t[70] !== f || t[71] !== p) {
    let e;
    (t[73] !== f || t[74] !== p
      ? ((e = (e) => {
          let t = Rt({
            workspaceRoot: e.workspaceRoot,
            workspaceRootLabels: p,
          });
          return (0, Q.jsx)(
            Z.Item,
            {
              tooltipText: e.workspaceRoot,
              tooltipAlign: `start`,
              subTextAllowWrap: !0,
              SubText: (0, Q.jsx)(`span`, {
                className: `text-xs text-token-description-foreground`,
                children: e.workspaceRoot,
              }),
              onSelect: () => {
                f(e.gitRoot);
              },
              children: (0, Q.jsx)(`span`, {
                className: `block truncate`,
                children: t,
              }),
            },
            e.gitRoot,
          );
        }),
        (t[73] = f),
        (t[74] = p),
        (t[75] = e))
      : (e = t[75]),
      (pe = u.map(e)),
      (t[69] = u),
      (t[70] = f),
      (t[71] = p),
      (t[72] = pe));
  } else pe = t[72];
  let me;
  t[76] === pe
    ? (me = t[77])
    : ((me = (0, Q.jsx)(Z.Section, {
        className: `flex max-h-40 flex-col overflow-y-auto`,
        children: pe,
      })),
      (t[76] = pe),
      (t[77] = me));
  let he;
  t[78] !== S || t[79] !== fe || t[80] !== me
    ? ((he = (0, Q.jsx)(`div`, {
        ref: ue,
        children: (0, Q.jsx)(je, {
          align: `end`,
          contentMaxHeight: `list`,
          contentWidth: `menuBounded`,
          portalContainer: S,
          triggerButton: fe,
          children: me,
        }),
      })),
      (t[78] = S),
      (t[79] = fe),
      (t[80] = me),
      (t[81] = he))
    : (he = t[81]);
  let ge;
  t[82] !== W || t[83] !== he
    ? ((ge = (0, Q.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2 text-base leading-6 tracking-[-0.13px]`,
        children: [W, he],
      })),
      (t[82] = W),
      (t[83] = he),
      (t[84] = ge))
    : (ge = t[84]);
  let _e;
  t[85] !== U || t[86] !== ge
    ? ((_e = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-5`,
        children: [U, ge],
      })),
      (t[85] = U),
      (t[86] = ge),
      (t[87] = _e))
    : (_e = t[87]);
  let G;
  t[88] === m
    ? (G = t[89])
    : ((G = m
        ? (0, Q.jsx)(D, {
            id: `localConversation.moveToLocal.modal.loading`,
            defaultMessage: `Checking for ability to hand off…`,
            description: `Button label shown while move-to-local is waiting on required data before it can continue`,
          })
        : (0, Q.jsx)(D, {
            id: `localConversation.moveToLocal.modal.continue`,
            defaultMessage: `Hand off`,
            description: `Primary action in the move-to-local modal`,
          })),
      (t[88] = m),
      (t[89] = G));
  let K;
  t[90] !== j || t[91] !== m || t[92] !== G
    ? ((K = (0, Q.jsx)(le, {
        className: `h-11 w-full justify-center rounded-full px-4 text-base font-medium`,
        color: `primary`,
        disabled: j,
        loading: m,
        type: `submit`,
        children: G,
      })),
      (t[90] = j),
      (t[91] = m),
      (t[92] = G),
      (t[93] = K))
    : (K = t[93]);
  let J;
  t[94] !== h || t[95] !== m
    ? ((J =
        h != null && !m
          ? (0, Q.jsx)(`p`, {
              className: `text-center text-base leading-6 tracking-[-0.13px] text-token-editor-error-foreground`,
              children: h,
            })
          : null),
      (t[94] = h),
      (t[95] = m),
      (t[96] = J))
    : (J = t[96]);
  let Y;
  t[97] !== K || t[98] !== J
    ? ((Y = (0, Q.jsx)(Xe.Footer, {
        className: `flex-col items-stretch gap-3`,
        right: (0, Q.jsxs)(`div`, {
          className: `flex w-full flex-col gap-3`,
          children: [K, J],
        }),
      })),
      (t[97] = K),
      (t[98] = J),
      (t[99] = Y))
    : (Y = t[99]);
  let ve;
  t[100] !== _e || t[101] !== Y || t[102] !== I
    ? ((ve = (0, Q.jsxs)(Xe.Root, {
        as: `form`,
        className: `gap-5`,
        onSubmit: I,
        children: [L, _e, Y],
      })),
      (t[100] = _e),
      (t[101] = Y),
      (t[102] = I),
      (t[103] = ve))
    : (ve = t[103]);
  let ye;
  return (
    t[104] !== F || t[105] !== n || t[106] !== ve
      ? ((ye = (0, Q.jsx)(q, {
          size: `compact`,
          open: n,
          onOpenChange: F,
          children: ve,
        })),
        (t[104] = F),
        (t[105] = n),
        (t[106] = ve),
        (t[107] = ye))
      : (ye = t[107]),
    ye
  );
}
function Lt(e) {
  Object.assign(e, tt(e));
}
function Rt({ workspaceRoot: e, workspaceRootLabels: t }) {
  let n = o(e);
  return (
    (t[e]?.trim() ?? t[n]?.trim() ?? ``) ||
    e
      .split(/[/\\]+/)
      .filter(Boolean)
      .at(-1) ||
    e
  );
}
function zt(e) {
  let n = (0, $.c)(92),
    {
      open: r,
      onOpenChange: i,
      conversationId: a,
      composerViewState: o,
      conversationTitle: s,
      currentBranch: c,
      cwd: l,
    } = e,
    u = te(T),
    d = ee(),
    f = p(ne(_, a)),
    [h, g] = (0, dt.useState)(null),
    [v, y] = (0, dt.useState)(null),
    [b, x] = (0, dt.useState)(null),
    { activeOperationId: S } = Qe(),
    C = et(a),
    {
      addToWorktreeOperation: w,
      closeActiveOperation: O,
      removeOperation: k,
      openOperation: A,
      updateOperation: j,
    } = $e(),
    M = C != null && S === C.id,
    ie = r || M,
    { data: N } = qe(l, f, `move_to_worktree_dialog`),
    ae = re(t.branchPrefix),
    oe;
  n[0] === r ? (oe = n[1]) : ((oe = { enabled: r }), (n[0] = r), (n[1] = oe));
  let {
      data: F,
      isLoading: I,
      isFetching: L,
    } = Ve(l, f, `move_to_worktree_dialog`, oe),
    R;
  n[2] !== a || n[3] !== l
    ? ((R = [`move-thread`, `to-worktree`, `resolve-owned-worktree`, a, l]),
      (n[2] = a),
      (n[3] = l),
      (n[4] = R))
    : (R = n[4]);
  let z;
  n[5] !== a || n[6] !== l || n[7] !== f
    ? ((z = () =>
        m(`git`).request({
          method: `resolve-worktree-for-thread`,
          params: {
            cwd: l,
            conversationId: a,
            hostConfig: f,
            operationSource: `move_to_worktree_dialog`,
          },
        })),
      (n[5] = a),
      (n[6] = l),
      (n[7] = f),
      (n[8] = z))
    : (z = n[8]);
  let B;
  n[9] !== r || n[10] !== R || n[11] !== z
    ? ((B = { queryKey: R, queryFn: z, enabled: r, staleTime: 0 }),
      (n[9] = r),
      (n[10] = R),
      (n[11] = z),
      (n[12] = B))
    : (B = n[12]);
  let { data: V, isLoading: H } = E(B),
    ce = F != null && F === c,
    U = N != null && c === N,
    W = ce && !U,
    ue = I || L,
    de = r && W,
    fe;
  n[13] === de
    ? (fe = n[14])
    : ((fe = { enabled: de }), (n[13] = de), (n[14] = fe));
  let {
      data: pe,
      isLoading: me,
      isFetching: he,
      isError: ge,
      refetch: _e,
    } = at(l, f, `move_to_worktree_dialog`, fe),
    G = pe === void 0 ? [] : pe,
    K = r && U,
    J;
  n[15] === K ? (J = n[16]) : ((J = { enabled: K }), (n[15] = K), (n[16] = J));
  let { data: Y } = at(l, f, `move_to_worktree_dialog`, J),
    ve = Y === void 0 ? [] : Y,
    ye = V?.worktreeGitRoot != null && V?.worktreeWorkspaceRoot != null,
    be;
  n[17] === c
    ? (be = n[18])
    : ((be = (e) => !c || e !== c), (n[17] = c), (n[18] = be));
  let X = Ht({ branches: G, defaultBranch: N ?? null }).filter(be),
    xe = me || he,
    Se = Ye({ branchPrefix: ae ?? void 0, conversationTitle: s }),
    Ce = W && h && X.includes(h) ? h : W ? (X[0] ?? null) : null,
    we = U ? (b ?? Se) : c,
    Te = we.trim(),
    Ee = Te.length === 0,
    De = Te.endsWith(`/`),
    Oe = N != null && Te === N,
    ke = U && Te.length > 0 && ve.includes(Te),
    Ae = ue || H || (W && xe),
    Me = null;
  if (Ae) {
    let e;
    (n[19] === d
      ? (e = n[20])
      : ((e = d.formatMessage({
          id: `localConversation.moveToWorktree.modal.loading`,
          defaultMessage: `Checking for ability to hand off…`,
          description: `Button label shown while move-to-worktree is waiting on required data before it can continue`,
        })),
        (n[19] = d),
        (n[20] = e)),
      (Me = e));
  } else if (U && Ee) {
    let e;
    (n[21] === d
      ? (e = n[22])
      : ((e = d.formatMessage({
          id: `localConversation.moveToWorktree.modal.worktreeBranchRequired`,
          defaultMessage: `Enter a worktree branch name.`,
          description: `Inline validation message shown above the move-to-worktree CTA when the worktree branch name is empty`,
        })),
        (n[21] = d),
        (n[22] = e)),
      (Me = e));
  } else if (De) {
    let e;
    (n[23] === d
      ? (e = n[24])
      : ((e = d.formatMessage({
          id: `localConversation.moveToWorktree.modal.trailingSlashError`,
          defaultMessage: `Branch name cannot end with “/”.`,
          description: `Validation message shown when the worktree branch name ends with a slash`,
        })),
        (n[23] = d),
        (n[24] = e)),
      (Me = e));
  } else if (Oe) {
    let e;
    (n[25] === d
      ? (e = n[26])
      : ((e = d.formatMessage({
          id: `localConversation.moveToWorktree.modal.defaultBranchError`,
          defaultMessage: `Worktree branch must be different from the default branch.`,
          description: `Validation message shown when the entered worktree branch equals the default branch`,
        })),
        (n[25] = d),
        (n[26] = e)),
      (Me = e));
  } else if (ke) {
    let e;
    (n[27] === d
      ? (e = n[28])
      : ((e = d.formatMessage({
          id: `localConversation.moveToWorktree.modal.branchAlreadyExistsError`,
          defaultMessage: `Branch already exists.`,
          description: `Validation message shown when the entered worktree branch already exists`,
        })),
        (n[27] = d),
        (n[28] = e)),
      (Me = e));
  } else if (W && Ce == null) {
    let e;
    (n[29] !== d || n[30] !== ge
      ? ((e = ge
          ? d.formatMessage({
              id: `localConversation.moveToWorktree.modal.branchesError`,
              defaultMessage: `Unable to load branches`,
              description: `Error shown in the move-to-worktree modal when branch list fails to load`,
            })
          : d.formatMessage({
              id: `localConversation.moveToWorktree.modal.noTargetBranch`,
              defaultMessage: `No other local branches are available`,
              description: `Message shown when no local branch can be selected for checkout before moving to a worktree`,
            })),
        (n[29] = d),
        (n[30] = ge),
        (n[31] = e))
      : (e = n[31]),
      (Me = e));
  }
  let Pe = Me != null,
    Fe;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = () => {
        (g(null), x(null));
      }),
      (n[32] = Fe))
    : (Fe = n[32]);
  let Ie = Fe,
    Le;
  n[33] !== O || n[34] !== M || n[35] !== i || n[36] !== C || n[37] !== k
    ? ((Le = (e) => {
        if (!e && M) {
          if (C?.status === `success` || C?.status === `error`) {
            (k(C.id), i(!1));
            return;
          }
          if (C?.status === `warning`) {
            (k(C.id), i(!1));
            return;
          }
          (O(), i(!1));
          return;
        }
        (e || Ie(), i(e));
      }),
      (n[33] = O),
      (n[34] = M),
      (n[35] = i),
      (n[36] = C),
      (n[37] = k),
      (n[38] = Le))
    : (Le = n[38]);
  let Re = Le,
    ze = () => {
      if (ke) {
        u.get(se).warning(
          d.formatMessage({
            id: `localConversation.moveToWorktree.modal.branchAlreadyExists`,
            defaultMessage: `Branch already exists`,
            description: `Toast shown when moving to worktree with an existing branch name`,
          }),
        );
        return;
      }
      Pe ||
        (A(
          w({
            sourceConversationId: a,
            sourceBranch: c,
            localBranch: Ce,
            worktreeBranch: Te,
            request: {
              cwd: l,
              defaultBranch: N ?? null,
              existingWorktreeGitRoot: V?.worktreeGitRoot ?? null,
              existingWorktreeWorkspaceRoot: V?.worktreeWorkspaceRoot ?? null,
              targetHasUncommittedChanges: V?.hasUncommittedChanges ?? !1,
            },
            stepIds: [
              ye ? `reuse-existing-worktree` : `create-new-worktree`,
              `stash-source-changes`,
              `checkout-local-branch`,
              `stash-target-worktree-changes`,
              `checkout-worktree-branch`,
              `apply-changes-to-worktree`,
              `switching-thread`,
            ],
            composerViewState: o,
          }).id,
        ),
        Ie());
    };
  if (M && C != null) {
    let e;
    n[39] !== O || n[40] !== C.id || n[41] !== C.status || n[42] !== k
      ? ((e = () => {
          if (C.status === `success` || C.status === `error`) {
            k(C.id);
            return;
          }
          if (C.status === `warning`) {
            k(C.id);
            return;
          }
          O();
        }),
        (n[39] = O),
        (n[40] = C.id),
        (n[41] = C.status),
        (n[42] = k),
        (n[43] = e))
      : (e = n[43]);
    let t;
    n[44] !== A || n[45] !== C.id || n[46] !== j
      ? ((t = () => {
          (j(C.id, Bt), A(C.id));
        }),
        (n[44] = A),
        (n[45] = C.id),
        (n[46] = j),
        (n[47] = t))
      : (t = n[47]);
    let r;
    n[48] !== C || n[49] !== e || n[50] !== t
      ? ((r = (0, Q.jsx)(yt, { operation: C, onClose: e, onRetry: t })),
        (n[48] = C),
        (n[49] = e),
        (n[50] = t),
        (n[51] = r))
      : (r = n[51]);
    let i;
    return (
      n[52] !== ie || n[53] !== Re || n[54] !== r
        ? ((i = (0, Q.jsx)(q, {
            size: `compact`,
            open: ie,
            onOpenChange: Re,
            children: r,
          })),
          (n[52] = ie),
          (n[53] = Re),
          (n[54] = r),
          (n[55] = i))
        : (i = n[55]),
      i
    );
  }
  let Be = q,
    He = Xe,
    Ue;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (0, Q.jsx)(Xe.Header, {
        icon: (0, Q.jsx)(mt, {
          className: `icon-base rotate-90 text-token-foreground`,
        }),
      })),
      (n[56] = Ue))
    : (Ue = n[56]);
  let We;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = (0, Q.jsx)(Xe.Title, {
        children: (0, Q.jsx)(D, {
          id: `localConversation.moveToWorktree.modal.title`,
          defaultMessage: `Hand off chat to worktree`,
          description: `Title for the move-to-worktree modal`,
        }),
      })),
      (n[57] = We))
    : (We = n[57]);
  let Ge = U
      ? (0, Q.jsx)(D, {
          id: `localConversation.moveToWorktree.modal.subtitle.defaultBranch`,
          defaultMessage: `Create and check out a branch in a {worktreeDescription} to continue working in parallel.`,
          description: `Subtitle for the move-to-worktree modal when the source branch is the default branch`,
          values: {
            worktreeDescription: ye
              ? (0, Q.jsx)(D, {
                  id: `localConversation.moveToWorktree.modal.subtitle.defaultBranch.existing`,
                  defaultMessage: `existing worktree`,
                  description: `Noun phrase used in the move-to-worktree subtitle when reusing an existing worktree`,
                })
              : (0, Q.jsx)(D, {
                  id: `localConversation.moveToWorktree.modal.subtitle.defaultBranch.new`,
                  defaultMessage: `new worktree`,
                  description: `Noun phrase used in the move-to-worktree subtitle when creating a new worktree`,
                }),
          },
        })
      : (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(`span`, {
              children: (0, Q.jsx)(D, {
                id: `localConversation.moveToWorktree.modal.subtitle.branch.prefix`,
                defaultMessage: `Check out branch `,
                description: `Prefix for the move-to-worktree confirmation sentence before the branch name`,
              }),
            }),
            (0, Q.jsx)(Vt, { children: Te }),
            (0, Q.jsx)(`span`, {
              children: (0, Q.jsx)(D, {
                id: `localConversation.moveToWorktree.modal.subtitle.branch.suffix`,
                defaultMessage: ` in a {worktreeDescription} to continue working in parallel.`,
                description: `Suffix for the move-to-worktree confirmation sentence after the branch name`,
                values: {
                  worktreeDescription: ye
                    ? (0, Q.jsx)(D, {
                        id: `localConversation.moveToWorktree.modal.subtitle.branch.existing`,
                        defaultMessage: `existing worktree`,
                        description: `Noun phrase used in the move-to-worktree subtitle when reusing an existing worktree`,
                      })
                    : (0, Q.jsx)(D, {
                        id: `localConversation.moveToWorktree.modal.subtitle.branch.new`,
                        defaultMessage: `new worktree`,
                        description: `Noun phrase used in the move-to-worktree subtitle when creating a new worktree`,
                      }),
                },
              }),
            }),
          ],
        }),
    Ke;
  n[58] === Ge
    ? (Ke = n[59])
    : ((Ke = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [
          We,
          (0, Q.jsx)(`p`, {
            className: `text-base leading-6 tracking-[-0.13px] text-token-description-foreground`,
            children: Ge,
          }),
        ],
      })),
      (n[58] = Ge),
      (n[59] = Ke));
  let Je = W
      ? (0, Q.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-2 text-base leading-6 tracking-[-0.13px]`,
          children: [
            (0, Q.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, Q.jsx)(D, {
                id: `localConversation.moveToWorktree.modal.localCheckoutLabel`,
                defaultMessage: `Local workspace will switch to`,
                description: `Label for selecting the branch to check out locally when moving to a worktree`,
              }),
            }),
            (0, Q.jsx)(`div`, {
              ref: (e) => {
                if (typeof document > `u`) {
                  y(null);
                  return;
                }
                y(e?.closest(`.codex-dialog`) ?? document.body);
              },
              children: (0, Q.jsx)(je, {
                align: `end`,
                contentMaxHeight: `list`,
                contentWidth: `menuBounded`,
                portalContainer: v,
                triggerButton: (0, Q.jsx)(`button`, {
                  type: `button`,
                  className: `flex min-w-0 items-center gap-1.5 rounded-lg bg-token-foreground/5 px-2 py-0.5 text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground disabled:opacity-50`,
                  disabled: xe || ge,
                  children: Ce
                    ? (0, Q.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-1.5`,
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `w-full min-w-0 truncate text-left text-token-foreground [direction:rtl]`,
                            children: (0, Q.jsx)(`span`, {
                              className: `block w-full text-left [direction:ltr] [unicode-bidi:plaintext]`,
                              children: Ce,
                            }),
                          }),
                          (0, Q.jsx)(Ne, {
                            className: `icon-xs shrink-0 text-token-description-foreground`,
                          }),
                        ],
                      })
                    : (0, Q.jsx)(`span`, {
                        className: `min-w-0 flex-1 truncate text-left text-token-description-foreground`,
                        children: (0, Q.jsx)(D, {
                          id: `localConversation.moveToWorktree.modal.localBranchPlaceholder`,
                          defaultMessage: `Select local checkout branch`,
                          description: `Placeholder shown in the move-to-worktree modal branch selector`,
                        }),
                      }),
                }),
                children: xe
                  ? (0, Q.jsx)(Z.Item, {
                      disabled: !0,
                      children: (0, Q.jsx)(D, {
                        id: `localConversation.moveToWorktree.modal.branchesLoading`,
                        defaultMessage: `Loading branches…`,
                        description: `Label shown while loading branches in the move-to-worktree modal`,
                      }),
                    })
                  : ge
                    ? (0, Q.jsxs)(Z.Section, {
                        className: `flex flex-col gap-1`,
                        children: [
                          (0, Q.jsx)(Z.SectionLabel, {
                            children: (0, Q.jsx)(D, {
                              id: `localConversation.moveToWorktree.modal.branchesError`,
                              defaultMessage: `Unable to load branches`,
                              description: `Error shown in the move-to-worktree modal when branch list fails to load`,
                            }),
                          }),
                          (0, Q.jsx)(Z.Item, {
                            onSelect: () => {
                              _e();
                            },
                            children: (0, Q.jsx)(D, {
                              id: `localConversation.moveToWorktree.modal.branchesRetry`,
                              defaultMessage: `Retry`,
                              description: `Retry button for branch loading errors in the move-to-worktree modal`,
                            }),
                          }),
                        ],
                      })
                    : X.length === 0
                      ? (0, Q.jsx)(Z.Item, {
                          disabled: !0,
                          children: (0, Q.jsx)(D, {
                            id: `localConversation.moveToWorktree.modal.noTargetBranch`,
                            defaultMessage: `No other local branches are available`,
                            description: `Message shown when no local branch can be selected for checkout before moving to a worktree`,
                          }),
                        })
                      : (0, Q.jsx)(Z.Section, {
                          className: `flex max-h-40 flex-col overflow-y-auto`,
                          children: X.map((e) =>
                            (0, Q.jsx)(
                              Z.Item,
                              {
                                className: `[direction:rtl] [&_.min-w-0]:text-left`,
                                onSelect: () => {
                                  g(e);
                                },
                                children: (0, Q.jsxs)(`span`, {
                                  className: `flex min-w-0 items-center gap-1.5`,
                                  children: [
                                    (0, Q.jsx)(P, {
                                      className: `icon-sm shrink-0 text-token-foreground`,
                                    }),
                                    (0, Q.jsx)(`span`, {
                                      className: `[direction:ltr] [unicode-bidi:plaintext]`,
                                      children: e,
                                    }),
                                  ],
                                }),
                              },
                              e,
                            ),
                          ),
                        }),
              }),
            }),
          ],
        })
      : null,
    Ze;
  n[60] !== ze || n[61] !== d || n[62] !== U || n[63] !== we
    ? ((Ze = U
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [
              (0, Q.jsx)(`span`, {
                className: `text-base leading-6 font-medium tracking-[-0.13px] text-token-foreground`,
                children: (0, Q.jsx)(D, {
                  id: `localConversation.moveToWorktree.modal.worktreeBranchLabel`,
                  defaultMessage: `Branch name`,
                  description: `Label for the target worktree branch when moving from the default branch`,
                }),
              }),
              (0, Q.jsx)(`input`, {
                className: `h-12 w-full rounded-2xl border border-token-border/40 bg-transparent px-4 text-base leading-6 tracking-[-0.13px] text-token-foreground outline-none placeholder:text-token-description-foreground`,
                autoFocus: !0,
                value: we,
                onChange: (e) => {
                  x(e.target.value);
                },
                onKeyDown: (e) => {
                  e.key === `Enter` && (e.preventDefault(), ze());
                },
                placeholder: d.formatMessage({
                  id: `localConversation.moveToWorktree.modal.worktreeBranchPlaceholder`,
                  defaultMessage: `new-branch`,
                  description: `Placeholder for worktree branch name input when moving from the default branch`,
                }),
                "aria-label": d.formatMessage({
                  id: `localConversation.moveToWorktree.modal.worktreeBranchAriaLabel`,
                  defaultMessage: `Worktree branch name`,
                  description: `Aria label for worktree branch name input when moving from the default branch`,
                }),
              }),
            ],
          })
        : null),
      (n[60] = ze),
      (n[61] = d),
      (n[62] = U),
      (n[63] = we),
      (n[64] = Ze))
    : (Ze = n[64]);
  let tt;
  n[65] !== Ke || n[66] !== Je || n[67] !== Ze
    ? ((tt = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-5`,
        children: [Ke, Je, Ze],
      })),
      (n[65] = Ke),
      (n[66] = Je),
      (n[67] = Ze),
      (n[68] = tt))
    : (tt = n[68]);
  let nt;
  n[69] === Ae
    ? (nt = n[70])
    : ((nt = Ae
        ? (0, Q.jsx)(D, {
            id: `localConversation.moveToWorktree.modal.loading`,
            defaultMessage: `Checking for ability to hand off…`,
            description: `Button label shown while move-to-worktree is waiting on required data before it can continue`,
          })
        : (0, Q.jsx)(D, {
            id: `localConversation.moveToWorktree.modal.continue`,
            defaultMessage: `Hand off`,
            description: `Primary action in the move-to-worktree modal`,
          })),
      (n[69] = Ae),
      (n[70] = nt));
  let rt;
  n[71] !== ze || n[72] !== Pe || n[73] !== Ae || n[74] !== nt
    ? ((rt = (0, Q.jsx)(le, {
        className: `h-11 w-full justify-center rounded-full px-4 text-base font-medium`,
        color: `primary`,
        disabled: Pe,
        loading: Ae,
        onClick: ze,
        children: nt,
      })),
      (n[71] = ze),
      (n[72] = Pe),
      (n[73] = Ae),
      (n[74] = nt),
      (n[75] = rt))
    : (rt = n[75]);
  let it;
  n[76] !== Me || n[77] !== Ae
    ? ((it =
        Me != null && !Ae
          ? (0, Q.jsx)(`p`, {
              className: `text-center text-base leading-6 tracking-[-0.13px] text-token-editor-error-foreground`,
              children: Me,
            })
          : null),
      (n[76] = Me),
      (n[77] = Ae),
      (n[78] = it))
    : (it = n[78]);
  let ot;
  n[79] !== rt || n[80] !== it
    ? ((ot = (0, Q.jsx)(Xe.Footer, {
        className: `flex-col items-stretch gap-3`,
        right: (0, Q.jsxs)(`div`, {
          className: `flex w-full flex-col gap-3`,
          children: [rt, it],
        }),
      })),
      (n[79] = rt),
      (n[80] = it),
      (n[81] = ot))
    : (ot = n[81]);
  let st;
  n[82] !== He.Root || n[83] !== Ue || n[84] !== tt || n[85] !== ot
    ? ((st = (0, Q.jsxs)(He.Root, {
        className: `gap-5`,
        children: [Ue, tt, ot],
      })),
      (n[82] = He.Root),
      (n[83] = Ue),
      (n[84] = tt),
      (n[85] = ot),
      (n[86] = st))
    : (st = n[86]);
  let ct;
  return (
    n[87] !== Be || n[88] !== Re || n[89] !== r || n[90] !== st
      ? ((ct = (0, Q.jsx)(Be, {
          size: `compact`,
          open: r,
          onOpenChange: Re,
          children: st,
        })),
        (n[87] = Be),
        (n[88] = Re),
        (n[89] = r),
        (n[90] = st),
        (n[91] = ct))
      : (ct = n[91]),
    ct
  );
}
function Bt(e) {
  Object.assign(e, tt(e));
}
function Vt(e) {
  let t = (0, $.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`span`, {
          className: `mx-1 inline-flex max-w-full items-center rounded-lg bg-token-foreground/5 px-2 py-0.5 align-middle text-base leading-6 tracking-[-0.13px] text-token-foreground`,
          children: (0, Q.jsx)(`span`, { className: `truncate`, children: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ht({ branches: e, defaultBranch: t }) {
  return t == null || !e.includes(t) || e[0] === t
    ? e
    : [t, ...e.filter((e) => e !== t)];
}
function Ut(e) {
  let t = (0, $.c)(13),
    { selectedEnvironment: n, zeroEnvironments: i, onClick: a } = e,
    o = ee();
  if (i) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Z.Item, {
            RightIcon: fe,
            href: r,
            children: (0, Q.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, Q.jsx)(D, {
                id: `composer.mode.remote.setupViaWeb`,
                defaultMessage: `Set up an environment via Codex web`,
                description: `Menu item to set up an environment via Codex web`,
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let s;
  t[1] === a
    ? (s = t[2])
    : ((s = (e) => {
        (e.stopPropagation(), e.preventDefault(), a());
      }),
      (t[1] = a),
      (t[2] = s));
  let c;
  t[3] === o
    ? (c = t[4])
    : ((c = o.formatMessage({
        id: `composer.environmentSelector.tooltip`,
        defaultMessage: `Select a cloud environment`,
        description: `Tooltip content for environment selector`,
      })),
      (t[3] = o),
      (t[4] = c));
  let l;
  t[5] === n?.label
    ? (l = t[6])
    : ((l =
        n?.label ??
        (0, Q.jsx)(D, {
          id: `codex.environmentSelector.noEnvironment`,
          defaultMessage: `No environment`,
          description: `No environment selected message`,
        })),
      (t[5] = n?.label),
      (t[6] = l));
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, Q.jsx)(`span`, {
        className: `text-token-description-foreground`,
        children: l,
      })),
      (t[7] = l),
      (t[8] = u));
  let d;
  return (
    t[9] !== s || t[10] !== c || t[11] !== u
      ? ((d = (0, Q.jsx)(Z.Item, {
          RightIcon: X,
          className: `pl-7`,
          onClick: s,
          tooltipText: c,
          children: u,
        })),
        (t[9] = s),
        (t[10] = c),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function Wt(e) {
  let t = (0, $.c)(44),
    {
      selectedEnvironment: n,
      envQuery: i,
      setEnvQuery: a,
      envListState: o,
      listToShow: s,
      setComposerMode: c,
      setSelectedEnvironment: l,
      setOpen: u,
      onClosePanel: d,
    } = e,
    f = ee(),
    p;
  t[0] === d
    ? (p = t[1])
    : ((p = (e) => {
        (e.stopPropagation(), e.preventDefault(), d());
      }),
      (t[0] = d),
      (t[1] = p));
  let m;
  t[2] === f
    ? (m = t[3])
    : ((m = f.formatMessage({
        id: `composer.environmentSelector.goBack`,
        defaultMessage: `Back to composer`,
        description: `Accessible label for closing environment selector`,
      })),
      (t[2] = f),
      (t[3] = m));
  let h;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(xe, { className: `icon-xxs` })), (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] !== p || t[6] !== m
    ? ((g = (0, Q.jsx)(le, {
        color: `ghost`,
        size: `icon`,
        onClick: p,
        "aria-label": m,
        children: h,
      })),
      (t[5] = p),
      (t[6] = m),
      (t[7] = g))
    : (g = t[7]);
  let _;
  t[8] === f
    ? (_ = t[9])
    : ((_ = f.formatMessage({
        id: `composer.searchEnvironments`,
        defaultMessage: `Search environments`,
        description: `Search environments placeholder`,
      })),
      (t[8] = f),
      (t[9] = _));
  let v;
  t[10] === a
    ? (v = t[11])
    : ((v = (e) => a(e.target.value)), (t[10] = a), (t[11] = v));
  let y;
  t[12] !== i || t[13] !== _ || t[14] !== v
    ? ((y = (0, Q.jsx)(Z.SearchInput, {
        className: `flex-1`,
        placeholder: _,
        value: i,
        onChange: v,
      })),
      (t[12] = i),
      (t[13] = _),
      (t[14] = v),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] !== g || t[17] !== y
    ? ((b = (0, Q.jsxs)(Z.Section, {
        className: `my-1 flex w-full items-center gap-1.5 px-[var(--padding-row-x)]`,
        children: [g, y],
      })),
      (t[16] = g),
      (t[17] = y),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] !== o ||
  t[20] !== s ||
  t[21] !== n?.id ||
  t[22] !== c ||
  t[23] !== u ||
  t[24] !== l
    ? ((x =
        o === `list` &&
        s?.map((e) =>
          (0, Q.jsx)(
            Z.Item,
            {
              RightIcon: e.id === n?.id ? be : void 0,
              onClick: () => {
                (c(`cloud`), l(e), u(!1));
              },
              children: e.label,
            },
            e.id,
          ),
        )),
      (t[19] = o),
      (t[20] = s),
      (t[21] = n?.id),
      (t[22] = c),
      (t[23] = u),
      (t[24] = l),
      (t[25] = x))
    : (x = t[25]);
  let S;
  t[26] === o
    ? (S = t[27])
    : ((S =
        o === `none-found` &&
        (0, Q.jsx)(Z.Message, {
          centered: !0,
          children: (0, Q.jsx)(D, {
            id: `codex.environments.noEnvironmentsFound`,
            defaultMessage: `No environments found`,
            description: `Message shown when no Codex environments were found`,
          }),
        })),
      (t[26] = o),
      (t[27] = S));
  let C;
  t[28] === o
    ? (C = t[29])
    : ((C =
        o === `loading` &&
        (0, Q.jsx)(W, {
          className: `icon-xxs my-4 ms-2 self-center text-token-description-foreground`,
        })),
      (t[28] = o),
      (t[29] = C));
  let w;
  t[30] !== o || t[31] !== n?.label
    ? ((w =
        o === `error` &&
        (0, Q.jsx)(`div`, {
          className: `w-full rounded-lg py-1.5 text-sm`,
          children: (0, Q.jsxs)(`span`, {
            className: `flex items-center gap-1.5`,
            children: [
              (0, Q.jsx)(ot, { className: `icon-xs` }),
              (0, Q.jsx)(`span`, {
                className: `flex-1 truncate`,
                children:
                  n?.label ??
                  (0, Q.jsx)(D, {
                    id: `codex.environmentSelector.noEnvironment`,
                    defaultMessage: `No environment`,
                    description: `No environment selected message`,
                  }),
              }),
              (0, Q.jsx)(X, { className: `icon-xs` }),
            ],
          }),
        })),
      (t[30] = o),
      (t[31] = n?.label),
      (t[32] = w))
    : (w = t[32]);
  let T;
  t[33] !== S || t[34] !== C || t[35] !== w || t[36] !== x
    ? ((T = (0, Q.jsxs)(`div`, {
        className: `flex h-[150px] flex-col overflow-y-auto pb-1`,
        children: [x, S, C, w],
      })),
      (t[33] = S),
      (t[34] = C),
      (t[35] = w),
      (t[36] = x),
      (t[37] = T))
    : (T = t[37]);
  let E;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(Z.Separator, {})), (t[38] = E))
    : (E = t[38]);
  let O;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(Z.Item, {
        LeftIcon: Re,
        RightIcon: fe,
        href: `${r}/settings/environments`,
        children: (0, Q.jsx)(D, {
          id: `codex.environments.environmentSettings`,
          defaultMessage: `Environment settings`,
          description: `Codex code environment settings link`,
        }),
      })),
      (t[39] = O))
    : (O = t[39]);
  let te;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Q.jsxs)(Z.Section, {
        className: `flex flex-col`,
        children: [
          O,
          (0, Q.jsx)(Z.Item, {
            LeftIcon: Le,
            RightIcon: fe,
            href: `https://platform.openai.com/docs/codex/overview#environment-configuration`,
            children: (0, Q.jsx)(D, {
              id: `codex.environments.learnMore`,
              defaultMessage: `Learn more`,
              description: `Codex code environment learn more link`,
            }),
          }),
        ],
      })),
      (t[40] = te))
    : (te = t[40]);
  let ne;
  return (
    t[41] !== T || t[42] !== b
      ? ((ne = (0, Q.jsx)(`div`, {
          className: `flex w-full flex-col`,
          children: (0, Q.jsxs)(`div`, {
            className: `flex w-56 flex-col overflow-hidden`,
            children: [b, T, E, te],
          }),
        })),
        (t[41] = T),
        (t[42] = b),
        (t[43] = ne))
      : (ne = t[43]),
    ne
  );
}
var Gt = e(L(), 1),
  Kt = e(v(), 1),
  qt = ie(T, () => ({
    queryKey: [`environments`],
    queryFn: async () => F.safeGet(`/wham/environments`),
    placeholderData: M,
    staleTime: A.FIVE_MINUTES,
  })),
  Jt = ie(T, ({ get: e }) => {
    let t = e(ye, { params: void 0, source: `workspace_repo_owner_names` }),
      n = R(t.data?.origins ?? []);
    return {
      queryKey: [
        `workspace`,
        `environments-by-repo`,
        `results`,
        ...(0, Gt.default)(n, [`owner`, `repoName`]).flatMap(
          ({ owner: e, repoName: t }) => [e, t],
        ),
      ],
      enabled: t.isSuccess,
      staleTime: A.FIVE_MINUTES,
      queryFn: Yt.bind(null, n),
    };
  });
async function Yt(e) {
  return (
    await Promise.all(
      e.map(({ owner: e, repoName: t }) =>
        F.safeGet(
          `/wham/environments/by-repo/{provider}/{repo_owner}/{repo_name}`,
          {
            parameters: {
              path: { provider: `github`, repo_owner: e, repo_name: t },
            },
          },
        ),
      ),
    )
  ).flat();
}
var Xt = w(T, ({ get: e }) =>
    (0, Kt.default)(
      [...(e(Jt).data ?? []), ...(e(qt).data ?? [])],
      (e) => e.id,
    ),
  ),
  Zt = C(T, ({ envQuery: e, selectedEnvironmentId: t }, { get: n }) => {
    let r = n(qt),
      i = n(Jt).data ?? [],
      a = new Set(i.map((e) => e.id)),
      o = n(Xt),
      s = e.trim().toLowerCase(),
      c = [
        ...(s.length > 0
          ? o.filter((e) => e.label?.toLowerCase().includes(s))
          : o),
      ].sort((e, n) => {
        if (e.id === t) return -1;
        if (n.id === t) return 1;
        let r = a.has(e.id);
        if (r !== a.has(n.id)) return r ? -1 : 1;
        if (!!e.is_pinned != !!n.is_pinned) return e.is_pinned ? -1 : 1;
        let i = (n.task_count ?? 0) - (e.task_count ?? 0);
        return i === 0 ? (e.label ?? ``).localeCompare(n.label ?? ``) : i;
      });
    return {
      availableEnvironments: o,
      errorLoadingAllEnvironments: r.error,
      isLoadingAllEnvironments: r.isLoading,
      listToShow: c,
    };
  }),
  Qt = (0, dt.memo)(function (e) {
    let t = (0, $.c)(173),
      {
        composerMode: n,
        setComposerMode: r,
        conversationId: i,
        footerRemoteState: o,
        threadHandoff: s,
        allowWorktree: c,
        disabled: l,
        hideModeDropdown: f,
        worktreeLabelOnly: p,
        side: m,
        modeAdjacentControl: _,
        secondaryControls: v,
        triggerVariant: y,
        onOpenChange: b,
      } = e,
      x = c === void 0 ? !1 : c,
      S = l === void 0 ? !1 : l,
      C = f === void 0 ? !1 : f,
      w = p === void 0 ? !1 : p,
      T = m === void 0 ? `top` : m,
      E = y === void 0 ? `composer` : y,
      O = te(B),
      [k, A] = (0, dt.useState)(!1),
      [re, j] = (0, dt.useState)(!1),
      [M, ie] = (0, dt.useState)(!1),
      N = n === `cloud` || k || re,
      P = ee(),
      ae = oe(`505458`),
      { access: F } = Ke(),
      I = pe(i),
      [L] = h(`remote_connections`),
      [R] = h(`remote_control_connections`),
      se;
    if (t[0] !== I.cwd || t[1] !== o || t[2] !== R || t[3] !== L) {
      let e = [...(L ?? []), ...(R ?? [])];
      ((se = vn({
        executionTargetCwd: I.cwd,
        footerRemoteState: o,
        remoteConnections: e,
      })),
        (t[0] = I.cwd),
        (t[1] = o),
        (t[2] = R),
        (t[3] = L),
        (t[4] = se));
    } else se = t[4];
    let U = se,
      W = U != null,
      ue;
    t[5] !== I.cwd || t[6] !== I.hostConfig
      ? ((ue = {
          cwd: I.cwd,
          enabled: !0,
          hostConfig: I.hostConfig,
          operationSource: `local_remote_dropdown`,
          watchForGitInit: !1,
        }),
        (t[5] = I.cwd),
        (t[6] = I.hostConfig),
        (t[7] = ue))
      : (ue = t[7]);
    let de = ne(d, ue),
      fe;
    t[8] !== I.cwd || t[9] !== I.hostConfig
      ? ((fe = {
          cwd: I.cwd,
          enabled: !0,
          hostConfig: I.hostConfig,
          operationSource: `local_remote_dropdown`,
          watchForGitInit: !1,
        }),
        (t[8] = I.cwd),
        (t[9] = I.hostConfig),
        (t[10] = fe))
      : (fe = t[10]);
    let he = ne(u, fe),
      ge = de?.root != null,
      G = de?.root ?? null,
      K = (ge || !1) && F === `enabled`,
      q = ge && x && ae,
      [J, Y] = a(V),
      ye = g(ce),
      be;
    t[11] !== r || t[12] !== ye
      ? ((be = (e) => {
          (ye(e), r(e));
        }),
        (t[11] = r),
        (t[12] = ye),
        (t[13] = be))
      : (be = t[13]);
    let X = be,
      xe;
    t[14] === J
      ? (xe = t[15])
      : ((xe = J
          ? (0, Q.jsx)(D, {
              id: `composer.mode.runInCloudWithEnvironment`,
              defaultMessage: `Cloud · {environment}`,
              description: `Remote mode label when a Codex task will be run in the cloud with a selected environment`,
              values: { environment: J.label },
            })
          : (0, Q.jsx)(D, { ..._n.selectEnvironment })),
        (t[14] = J),
        (t[15] = xe));
    let Se = xe,
      Ce;
    t[16] === P
      ? (Ce = t[17])
      : ((Ce = P.formatMessage({
          id: `composer.mode.remote`,
          defaultMessage: `Remote`,
          description: `Remote mode label`,
        })),
        (t[16] = P),
        (t[17] = Ce));
    let we = Ce,
      Te = W ? Me : Fe,
      Ee;
    t[18] !== P || t[19] !== W
      ? ((Ee = W
          ? P.formatMessage(_n.startInRemote)
          : P.formatMessage(_n.workLocally)),
        (t[18] = P),
        (t[19] = W),
        (t[20] = Ee))
      : (Ee = t[20]);
    let De = Ee,
      Oe;
    t[21] !== P || t[22] !== W
      ? ((Oe = W
          ? P.formatMessage(_n.remoteWorktreeTooltip)
          : P.formatMessage(_n.worktreeTooltip)),
        (t[21] = P),
        (t[22] = W),
        (t[23] = Oe))
      : (Oe = t[23]);
    let ke = Oe,
      Ae;
    t[24] === P
      ? (Ae = t[25])
      : ((Ae = P.formatMessage({
          id: `composer.mode.localSlashCommand.description`,
          defaultMessage: `Run this chat locally`,
          description: `Description for the local mode slash command`,
        })),
        (t[24] = P),
        (t[25] = Ae));
    let Z = n !== `local`,
      Le;
    t[26] === X
      ? (Le = t[27])
      : ((Le = async () => {
          X(`local`);
        }),
        (t[26] = X),
        (t[27] = Le));
    let Re = Le,
      ze;
    (t[28] !== Te || t[29] !== De || t[30] !== Ae || t[31] !== Z || t[32] !== Re
      ? ((ze = {
          id: `local`,
          title: De,
          description: Ae,
          requiresEmptyComposer: !1,
          Icon: Te,
          enabled: Z,
          onSelect: Re,
        }),
        (t[28] = Te),
        (t[29] = De),
        (t[30] = Ae),
        (t[31] = Z),
        (t[32] = Re),
        (t[33] = ze))
      : (ze = t[33]),
      We(ze));
    let Be;
    t[34] === P
      ? (Be = t[35])
      : ((Be = P.formatMessage(_n.worktreeMode)), (t[34] = P), (t[35] = Be));
    let Ve;
    t[36] === P
      ? (Ve = t[37])
      : ((Ve = P.formatMessage({
          id: `composer.mode.worktreeSlashCommand.description`,
          defaultMessage: `Run this chat in a new worktree`,
          description: `Description for the worktree mode slash command`,
        })),
        (t[36] = P),
        (t[37] = Ve));
    let He = q && n !== `worktree`,
      Ue;
    t[38] === X
      ? (Ue = t[39])
      : ((Ue = async () => {
          X(`worktree`);
        }),
        (t[38] = X),
        (t[39] = Ue));
    let qe = Ue,
      Je;
    (t[40] !== Be || t[41] !== Ve || t[42] !== He || t[43] !== qe
      ? ((Je = {
          id: `worktree`,
          title: Be,
          description: Ve,
          requiresEmptyComposer: !1,
          Icon: Ie,
          enabled: He,
          onSelect: qe,
        }),
        (t[40] = Be),
        (t[41] = Ve),
        (t[42] = He),
        (t[43] = qe),
        (t[44] = Je))
      : (Je = t[44]),
      We(Je));
    let Ye;
    t[45] === P
      ? (Ye = t[46])
      : ((Ye = P.formatMessage(_n.runInCloud)), (t[45] = P), (t[46] = Ye));
    let Xe;
    t[47] === P
      ? (Xe = t[48])
      : ((Xe = P.formatMessage({
          id: `composer.mode.cloudSlashCommand.description`,
          defaultMessage: `Run this chat in the cloud`,
          description: `Description for the cloud mode slash command`,
        })),
        (t[47] = P),
        (t[48] = Xe));
    let Qe = K && n !== `cloud`,
      $e;
    t[49] === X
      ? ($e = t[50])
      : (($e = async () => {
          X(`cloud`);
        }),
        (t[49] = X),
        (t[50] = $e));
    let et = $e,
      tt;
    (t[51] !== Ye || t[52] !== Xe || t[53] !== Qe || t[54] !== et
      ? ((tt = {
          id: `cloud`,
          title: Ye,
          description: Xe,
          requiresEmptyComposer: !1,
          Icon: Pe,
          enabled: Qe,
          onSelect: et,
        }),
        (t[51] = Ye),
        (t[52] = Xe),
        (t[53] = Qe),
        (t[54] = et),
        (t[55] = tt))
      : (tt = t[55]),
      We(tt));
    let nt;
    t[56] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((nt = (0, Q.jsx)(`span`, {
          className: `inline-flex min-w-0 items-center gap-1`,
          children: (0, Q.jsx)(`span`, {
            className: `truncate`,
            children: (0, Q.jsx)(D, { ..._n.worktreeSegment }),
          }),
        })),
        (t[56] = nt))
      : (nt = t[56]);
    let rt = nt,
      it;
    t[57] === b
      ? (it = t[58])
      : ((it = (e) => {
          (e && ie(!1), A(e), b?.(e));
        }),
        (t[57] = b),
        (t[58] = it));
    let at = it,
      st;
    t[59] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((st = (e) => {
          (e && ie(!1), j(e));
        }),
        (t[59] = st))
      : (st = t[59]);
    let ct = st,
      lt;
    t[60] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((lt = () => {
          ie(!0);
        }),
        (t[60] = lt))
      : (lt = t[60]);
    let ut = lt,
      ft;
    t[61] !== i ||
    t[62] !== I ||
    t[63] !== G ||
    t[64] !== W ||
    t[65] !== O ||
    t[66] !== s
      ? ((ft = () => {
          i == null ||
            s == null ||
            ve(O, fn, {
              conversationId: i,
              composerViewState: O.get(H),
              executionTarget: I,
              gitRoot: G,
              isLocalModeRemote: W,
              threadHandoff: s,
            });
        }),
        (t[61] = i),
        (t[62] = I),
        (t[63] = G),
        (t[64] = W),
        (t[65] = O),
        (t[66] = s),
        (t[67] = ft))
      : (ft = t[67]);
    let pt = ft,
      mt = E === `summary-panel` ? `icon-sm text-token-foreground` : `icon-xs`,
      ht;
    t[68] !== n || t[69] !== W || t[70] !== mt
      ? ((ht =
          n === `cloud`
            ? (0, Q.jsx)(Pe, { className: mt })
            : n === `worktree`
              ? (0, Q.jsx)(Ie, { className: mt })
              : W
                ? (0, Q.jsx)(Me, { className: mt })
                : (0, Q.jsx)(Fe, { className: mt })),
        (t[68] = n),
        (t[69] = W),
        (t[70] = mt),
        (t[71] = ht))
      : (ht = t[71]);
    let gt = ht,
      _t;
    t[72] !== Se || t[73] !== n || t[74] !== W || t[75] !== E
      ? ((_t =
          n === `cloud`
            ? Se
            : n === `worktree`
              ? (0, Q.jsx)(`span`, {
                  className: `inline-flex items-center gap-1`,
                  children: (0, Q.jsx)(D, { ..._n.worktreeMode }),
                })
              : E === `summary-panel` && !W
                ? (0, Q.jsx)(D, { ..._n.localShort })
                : (0, Q.jsx)(hn, { rateLimit: null, isRemoteHost: W })),
        (t[72] = Se),
        (t[73] = n),
        (t[74] = W),
        (t[75] = E),
        (t[76] = _t))
      : (_t = t[76]);
    let vt = _t,
      yt;
    t[77] !== S || t[78] !== P || t[79] !== gt || t[80] !== vt || t[81] !== E
      ? ((yt =
          E === `summary-panel`
            ? (0, Q.jsx)(Ze, {
                disabled: S,
                icon: (0, Q.jsx)(`span`, {
                  className: `shrink-0`,
                  children: gt,
                }),
                label: (0, Q.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-1 text-token-foreground`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      className: `min-w-0 truncate`,
                      children: vt,
                    }),
                    S
                      ? null
                      : (0, Q.jsx)(Ne, {
                          className: `icon-2xs shrink-0 text-token-text-tertiary`,
                        }),
                  ],
                }),
                labelClassName: `flex min-w-0 items-center`,
                title: P.formatMessage(_n.localRemoteWhereRun),
              })
            : (0, Q.jsxs)(le, {
                size: `composerSm`,
                color: `ghost`,
                children: [
                  gt,
                  (0, Q.jsx)(me, {
                    collapse: `xs`,
                    className: `max-w-40 truncate`,
                    children: vt,
                  }),
                  (0, Q.jsx)(Ne, {
                    className: `icon-2xs text-token-input-placeholder-foreground`,
                  }),
                ],
              })),
        (t[77] = S),
        (t[78] = P),
        (t[79] = gt),
        (t[80] = vt),
        (t[81] = E),
        (t[82] = yt))
      : (yt = t[82]);
    let bt = yt,
      xt;
    t[83] !== Te ||
    t[84] !== F ||
    t[85] !== n ||
    t[86] !== i ||
    t[87] !== U ||
    t[88] !== S ||
    t[89] !== M ||
    t[90] !== I ||
    t[91] !== o ||
    t[92] !== G ||
    t[93] !== at ||
    t[94] !== ge ||
    t[95] !== W ||
    t[96] !== bt ||
    t[97] !== k ||
    t[98] !== pt ||
    t[99] !== we ||
    t[100] !== J ||
    t[101] !== Y ||
    t[102] !== X ||
    t[103] !== q ||
    t[104] !== T ||
    t[105] !== s ||
    t[106] !== E ||
    t[107] !== ke
      ? ((xt = () =>
          (0, Q.jsx)(je, {
            side: T,
            disabled: S,
            open: k,
            onOpenChange: at,
            triggerButton:
              E === `summary-panel`
                ? bt
                : (0, Q.jsx)(z, {
                    tooltipContent: (0, Q.jsx)(D, {
                      ..._n.localRemoteWhereRun,
                    }),
                    children: bt,
                  }),
            children: (0, Q.jsx)($t, {
              composerMode: n,
              setComposerMode: X,
              conversationId: i,
              executionTarget: I,
              footerRemoteState: o,
              threadHandoff: s,
              codexCloudAccess: F,
              isBrowser: !1,
              isLocalModeRemote: W,
              currentLocalModeRemoteState: U,
              localModeIcon: Te,
              remoteLabel: we,
              showWorktree: q,
              hasGitRepo: ge,
              gitRoot: G,
              selectedEnvironment: J,
              setSelectedEnvironment: Y,
              environmentSelectorOpen: M,
              setEnvironmentSelectorOpen: ie,
              openEnvironmentSelector: ut,
              worktreeTooltipText: ke,
              closeDropdown: () => A(!1),
              openHandoffDialog: pt,
            }),
          })),
        (t[83] = Te),
        (t[84] = F),
        (t[85] = n),
        (t[86] = i),
        (t[87] = U),
        (t[88] = S),
        (t[89] = M),
        (t[90] = I),
        (t[91] = o),
        (t[92] = G),
        (t[93] = at),
        (t[94] = ge),
        (t[95] = W),
        (t[96] = bt),
        (t[97] = k),
        (t[98] = pt),
        (t[99] = we),
        (t[100] = J),
        (t[101] = Y),
        (t[102] = X),
        (t[103] = q),
        (t[104] = T),
        (t[105] = s),
        (t[106] = E),
        (t[107] = ke),
        (t[108] = xt))
      : (xt = t[108]);
    let St = xt,
      Ct = n === `cloud` && K,
      wt;
    t[109] !== S ||
    t[110] !== re ||
    t[111] !== M ||
    t[112] !== J ||
    t[113] !== r ||
    t[114] !== Y ||
    t[115] !== X ||
    t[116] !== Ct ||
    t[117] !== T
      ? ((wt = Ct
          ? (0, Q.jsx)(je, {
              contentMaxHeight: `list`,
              side: T,
              open: re,
              onOpenChange: ct,
              disabled: S,
              triggerButton: (0, Q.jsx)(z, {
                tooltipContent: (0, Q.jsx)(D, {
                  id: `composer.environmentSelector.tooltip`,
                  defaultMessage: `Select a cloud environment`,
                  description: `Tooltip content for environment selector`,
                }),
                children: (0, Q.jsxs)(le, {
                  className: `whitespace-nowrap`,
                  size: `composerSm`,
                  color: `ghost`,
                  disabled: S,
                  children: [
                    (0, Q.jsx)(ot, { className: `icon-xs` }),
                    (0, Q.jsx)(me, {
                      collapse: `sm`,
                      className: `max-w-40 truncate`,
                      children: J
                        ? J.label
                        : (0, Q.jsx)(D, {
                            id: `composer.mode.remote.selectEnvironment`,
                            defaultMessage: `Select environment`,
                            description: `Remote mode label when no environment is selected`,
                          }),
                    }),
                    (0, Q.jsx)(Ne, {
                      className: `icon-2xs text-token-input-placeholder-foreground`,
                    }),
                  ],
                }),
              }),
              children: (0, Q.jsx)(an, {
                environmentSelectorOpen: M,
                setEnvironmentSelectorOpen: ie,
                selectedEnvironment: J,
                setComposerMode: r,
                setSelectedEnvironment: Y,
                onSelectEnvironment: (e) => {
                  (X(`cloud`), Y(e));
                },
                closeDropdown: () => j(!1),
              }),
            })
          : null),
        (t[109] = S),
        (t[110] = re),
        (t[111] = M),
        (t[112] = J),
        (t[113] = r),
        (t[114] = Y),
        (t[115] = X),
        (t[116] = Ct),
        (t[117] = T),
        (t[118] = wt))
      : (wt = t[118]);
    let Tt = wt,
      Et = v,
      Dt = Et != null,
      Ot;
    t[119] !== Tt || t[120] !== Dt || t[121] !== Et
      ? ((Ot =
          Tt || Dt
            ? (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [Tt, Et],
              })
            : null),
        (t[119] = Tt),
        (t[120] = Dt),
        (t[121] = Et),
        (t[122] = Ot))
      : (Ot = t[122]);
    let kt = Ot,
      At;
    t[123] === I.cwd
      ? (At = t[124])
      : ((At = I.cwd
          ? (0, Q.jsx)(`span`, {
              className: `block font-mono text-xs break-all`,
              children: I.cwd,
            })
          : null),
        (t[123] = I.cwd),
        (t[124] = At));
    let jt = At,
      Mt;
    t[125] !== i ||
    t[126] !== I ||
    t[127] !== G ||
    t[128] !== at ||
    t[129] !== k ||
    t[130] !== pt ||
    t[131] !== T ||
    t[132] !== s ||
    t[133] !== E ||
    t[134] !== w ||
    t[135] !== jt
      ? ((Mt = w
          ? (0, Q.jsx)(dn, {
              open: k,
              onOpenChange: at,
              side: T,
              conversationId: i,
              executionTarget: I,
              gitRoot: G,
              threadHandoff: s,
              worktreeSegmentLabel: rt,
              tooltipContent: jt,
              tooltipMaxWidth: `min(56rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
              triggerVariant: E,
              openHandoffDialog: pt,
            })
          : null),
        (t[125] = i),
        (t[126] = I),
        (t[127] = G),
        (t[128] = at),
        (t[129] = k),
        (t[130] = pt),
        (t[131] = T),
        (t[132] = s),
        (t[133] = E),
        (t[134] = w),
        (t[135] = jt),
        (t[136] = Mt))
      : (Mt = t[136]);
    let Nt = Mt,
      Pt = C || (i == null && !W && !he && !ge),
      Ft;
    t[137] !== St || t[138] !== Pt || t[139] !== w || t[140] !== Nt
      ? ((Ft = Pt ? null : w ? Nt : St()),
        (t[137] = St),
        (t[138] = Pt),
        (t[139] = w),
        (t[140] = Nt),
        (t[141] = Ft))
      : (Ft = t[141]);
    let It = Ft,
      Lt;
    t[142] === N
      ? (Lt = t[143])
      : ((Lt = N ? (0, Q.jsx)(Ge, {}) : null), (t[142] = N), (t[143] = Lt));
    let Rt;
    t[144] !== K || t[145] !== n || t[146] !== J || t[147] !== Y || t[148] !== X
      ? ((Rt =
          K && n === `cloud`
            ? (0, Q.jsx)(sn, {
                selectedEnvironment: J,
                setSelectedEnvironment: Y,
                setComposerMode: X,
              })
            : null),
        (t[144] = K),
        (t[145] = n),
        (t[146] = J),
        (t[147] = Y),
        (t[148] = X),
        (t[149] = Rt))
      : (Rt = t[149]);
    let zt;
    t[150] !== K || t[151] !== n || t[152] !== J || t[153] !== Y
      ? ((zt =
          K && n === `cloud` && J == null
            ? (0, Q.jsx)(un, { setSelectedEnvironment: Y })
            : null),
        (t[150] = K),
        (t[151] = n),
        (t[152] = J),
        (t[153] = Y),
        (t[154] = zt))
      : (zt = t[154]);
    let Bt;
    t[155] !== _ || t[156] !== It
      ? ((Bt = (0, Q.jsx)(_e, {
          extension: !0,
          children: (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [It, _],
          }),
        })),
        (t[155] = _),
        (t[156] = It),
        (t[157] = Bt))
      : (Bt = t[157]);
    let Vt;
    t[158] !== kt || t[159] !== _ || t[160] !== It
      ? ((Vt = (0, Q.jsx)(_e, {
          electron: !0,
          children: (0, Q.jsxs)(`div`, {
            className: `relative flex w-full items-center gap-2`,
            children: [It, _, kt],
          }),
        })),
        (t[158] = kt),
        (t[159] = _),
        (t[160] = It),
        (t[161] = Vt))
      : (Vt = t[161]);
    let Ht;
    t[162] !== kt || t[163] !== _ || t[164] !== It
      ? ((Ht = (0, Q.jsx)(_e, {
          browser: !0,
          children: (0, Q.jsxs)(`div`, {
            className: `relative flex w-full items-center gap-2`,
            children: [It, _, kt],
          }),
        })),
        (t[162] = kt),
        (t[163] = _),
        (t[164] = It),
        (t[165] = Ht))
      : (Ht = t[165]);
    let Ut;
    return (
      t[166] !== Lt ||
      t[167] !== Rt ||
      t[168] !== zt ||
      t[169] !== Bt ||
      t[170] !== Vt ||
      t[171] !== Ht
        ? ((Ut = (0, Q.jsxs)(Q.Fragment, {
            children: [Lt, Rt, zt, Bt, Vt, Ht],
          })),
          (t[166] = Lt),
          (t[167] = Rt),
          (t[168] = zt),
          (t[169] = Bt),
          (t[170] = Vt),
          (t[171] = Ht),
          (t[172] = Ut))
        : (Ut = t[172]),
      Ut
    );
  });
function $t(e) {
  let t = (0, $.c)(123),
    {
      composerMode: i,
      setComposerMode: a,
      conversationId: o,
      executionTarget: s,
      footerRemoteState: c,
      threadHandoff: l,
      codexCloudAccess: u,
      isBrowser: d,
      isLocalModeRemote: p,
      currentLocalModeRemoteState: m,
      localModeIcon: h,
      remoteLabel: g,
      showWorktree: _,
      hasGitRepo: v,
      gitRoot: y,
      selectedEnvironment: b,
      setSelectedEnvironment: x,
      environmentSelectorOpen: C,
      setEnvironmentSelectorOpen: w,
      openEnvironmentSelector: E,
      worktreeTooltipText: O,
      closeDropdown: A,
      openHandoffDialog: re,
    } = e,
    j = te(T),
    M = ee(),
    { activeMode: ie } = U(o),
    N = ie?.settings.model ?? null,
    { data: P } = k(f),
    oe = P === void 0 ? null : P,
    F = oe?.plan_type,
    I;
  t[0] === F
    ? (I = t[1])
    : ((I = Se(F)?.pricePlan ?? null), (t[0] = F), (t[1] = I));
  let L = I,
    R = oe?.rate_limit,
    se = oe?.credits,
    z;
  t[2] !== F || t[3] !== R || t[4] !== se
    ? ((z = Ee(R, se, F)), (t[2] = F), (t[3] = R), (t[4] = se), (t[5] = z))
    : (z = t[5]);
  let B = z,
    V,
    H,
    ce,
    le;
  if (
    t[6] !== B?.primary?.windowDurationMins ||
    t[7] !== B?.secondary?.windowDurationMins ||
    t[8] !== oe ||
    t[9] !== N
  ) {
    let e = De(oe),
      n = we(oe);
    ((H = Oe(e, { activeLimitName: n, selectedModel: N })),
      (V = H.find(tn)?.limitName ?? n ?? null),
      (ce = Te(oe, { activeLimitName: n, selectedModel: N })),
      (le =
        H.some(en) ||
        !!B?.primary?.windowDurationMins ||
        !!B?.secondary?.windowDurationMins),
      (t[6] = B?.primary?.windowDurationMins),
      (t[7] = B?.secondary?.windowDurationMins),
      (t[8] = oe),
      (t[9] = N),
      (t[10] = V),
      (t[11] = H),
      (t[12] = ce),
      (t[13] = le));
  } else ((V = t[10]), (H = t[11]), (ce = t[12]), (le = t[13]));
  let de = le,
    pe = ke(),
    { data: me } = ue(),
    he;
  t[14] !== s.hostConfig || t[15] !== y
    ? ((he = {
        cwd: y,
        enabled: !0,
        hostConfig: s.hostConfig,
        operationSource: `local_remote_dropdown`,
        refetchOnWindowFocus: !1,
        staleTime: null,
      }),
      (t[14] = s.hostConfig),
      (t[15] = y),
      (t[16] = he))
    : (he = t[16]);
  let G = ne(ge, he),
    K = G ?? M.formatMessage(_n.fallbackBranch),
    q = et(o),
    { openOperation: J } = $e(),
    Y,
    ve;
  if (
    t[17] !== me?.codexHome ||
    t[18] !== o ||
    t[19] !== G ||
    t[20] !== s.activeWorkspaceRoot ||
    t[21] !== p ||
    t[22] !== q ||
    t[23] !== l
  ) {
    let e = n(p ? null : s.activeWorkspaceRoot, me?.codexHome),
      r = G ?? gn(q, o);
    ((Y = lt({ codexWorktree: e, operation: q, threadHandoff: l })),
      (ve = ut({
        conversationId: o,
        handoffBranch: r,
        handoffDirection: Y,
        operation: q,
        threadHandoff: l,
      })),
      (t[17] = me?.codexHome),
      (t[18] = o),
      (t[19] = G),
      (t[20] = s.activeWorkspaceRoot),
      (t[21] = p),
      (t[22] = q),
      (t[23] = l),
      (t[24] = Y),
      (t[25] = ve));
  } else ((Y = t[24]), (ve = t[25]));
  let ye = ve,
    X = q == null && (l?.disabled ?? !1),
    xe;
  t[26] !== X || t[27] !== M || t[28] !== q?.status
    ? ((xe =
        q?.status === `queued` || q?.status === `running`
          ? M.formatMessage({
              id: `localConversation.threadHandoff.tooltip.viewProgress`,
              defaultMessage: `View progress`,
              description: `Tooltip shown when a thread handoff is in progress and the button reopens the progress view`,
            })
          : X
            ? M.formatMessage({
                id: `localConversation.moveThread.disabled.turnInProgress`,
                defaultMessage: `You cannot move a chat while it is in progress`,
                description: `Tooltip shown when moving a thread is disabled because a turn is in progress`,
              })
            : void 0),
      (t[26] = X),
      (t[27] = M),
      (t[28] = q?.status),
      (t[29] = xe))
    : (xe = t[29]);
  let Ce = xe,
    Ae;
  t[30] === q
    ? (Ae = t[31])
    : ((Ae =
        q?.status === `queued` || q?.status === `running`
          ? (0, Q.jsx)(W, { className: `icon-2xs` })
          : q?.status === `error`
            ? (0, Q.jsx)(pt, { className: `icon-2xs text-token-danger` })
            : q?.hasUnseenTerminalState && q.status === `warning`
              ? (0, Q.jsx)(pt, {
                  className: `icon-2xs text-token-editor-warning-foreground`,
                })
              : (0, Q.jsx)(mt, { className: `icon-2xs rotate-90` })),
      (t[30] = q),
      (t[31] = Ae));
  let je = Ae,
    Me = p
      ? M.formatMessage(_n.workRemotelyTooltipWithoutPath, {
          hostDisplayName: m?.connectionDisplayName ?? g,
        })
      : M.formatMessage(_n.workLocallyTooltip, { branchName: K }),
    Ne;
  t[32] !== A || t[33] !== re || t[34] !== J || t[35] !== q
    ? ((Ne = () => {
        if ((A(), q != null)) {
          J(q.id);
          return;
        }
        re();
      }),
      (t[32] = A),
      (t[33] = re),
      (t[34] = J),
      (t[35] = q),
      (t[36] = Ne))
    : (Ne = t[36]);
  let Fe = Ne,
    Le;
  t[37] !== i || t[38] !== s.hostConfig || t[39] !== y
    ? ((Le = (0, Q.jsx)(pn, {
        composerMode: i,
        gitRoot: y,
        hostConfig: s.hostConfig,
      })),
      (t[37] = i),
      (t[38] = s.hostConfig),
      (t[39] = y),
      (t[40] = Le))
    : (Le = t[40]);
  let Re = Le;
  if (C) {
    let e;
    return (
      t[41] !== b || t[42] !== a || t[43] !== w || t[44] !== x
        ? ((e = (0, Q.jsx)(rn, {
            selectedEnvironment: b,
            setComposerMode: a,
            setSelectedEnvironment: x,
            setEnvironmentSelectorOpen: w,
          })),
          (t[41] = b),
          (t[42] = a),
          (t[43] = w),
          (t[44] = x),
          (t[45] = e))
        : (e = t[45]),
      e
    );
  }
  let Be = u === `enabled` ? `min-w-[175px]` : `w-52`,
    Ve;
  t[46] === Be
    ? (Ve = t[47])
    : ((Ve = S(`flex flex-col`, Be)), (t[46] = Be), (t[47] = Ve));
  let Ue;
  t[48] === c.isAttachedToStartedTask
    ? (Ue = t[49])
    : ((Ue = (0, Q.jsx)(Z.Title, {
        children: c.isAttachedToStartedTask
          ? (0, Q.jsx)(D, {
              id: `composer.mode.newTask.header`,
              defaultMessage: `Continue in`,
              description: `Header label above agent mode options`,
            })
          : (0, Q.jsx)(D, {
              id: `composer.mode.startTask.header`,
              defaultMessage: `Start in`,
              description: `Header label above agent mode options when starting a new task`,
            }),
      })),
      (t[48] = c.isAttachedToStartedTask),
      (t[49] = Ue));
  let We = i === `local` ? be : void 0,
    Ge;
  t[50] !== A || t[51] !== i || t[52] !== j || t[53] !== a
    ? ((Ge = () => {
        (i !== `local` &&
          ae(j, {
            eventName: `codex_composer_runtime_changed`,
            metadata: { mode: `local` },
          }),
          a(`local`),
          A());
      }),
      (t[50] = A),
      (t[51] = i),
      (t[52] = j),
      (t[53] = a),
      (t[54] = Ge))
    : (Ge = t[54]);
  let Ke;
  t[55] === p
    ? (Ke = t[56])
    : ((Ke = p
        ? (0, Q.jsx)(D, { ..._n.startInRemote })
        : (0, Q.jsx)(D, { ..._n.workLocally })),
      (t[55] = p),
      (t[56] = Ke));
  let qe;
  t[57] !== h || t[58] !== Me || t[59] !== We || t[60] !== Ge || t[61] !== Ke
    ? ((qe = (0, Q.jsx)(Z.Item, {
        LeftIcon: h,
        RightIcon: We,
        onClick: Ge,
        tooltipText: Me,
        children: Ke,
      })),
      (t[57] = h),
      (t[58] = Me),
      (t[59] = We),
      (t[60] = Ge),
      (t[61] = Ke),
      (t[62] = qe))
    : (qe = t[62]);
  let Je;
  t[63] !== A ||
  t[64] !== i ||
  t[65] !== j ||
  t[66] !== a ||
  t[67] !== _ ||
  t[68] !== Re ||
  t[69] !== O
    ? ((Je =
        _ &&
        (0, Q.jsx)(Z.Item, {
          LeftIcon: Ie,
          RightIcon: i === `worktree` ? be : void 0,
          onClick: () => {
            (i !== `worktree` &&
              ae(j, {
                eventName: `codex_composer_runtime_changed`,
                metadata: { mode: `worktree` },
              }),
              a(`worktree`),
              A());
          },
          tooltipText: O,
          children: (0, Q.jsxs)(`span`, {
            className: `inline-flex items-center gap-1`,
            children: [(0, Q.jsx)(D, { ..._n.worktreeMode }), Re],
          }),
        })),
      (t[63] = A),
      (t[64] = i),
      (t[65] = j),
      (t[66] = a),
      (t[67] = _),
      (t[68] = Re),
      (t[69] = O),
      (t[70] = Je))
    : (Je = t[70]);
  let Ye;
  t[71] !== u ||
  t[72] !== i ||
  t[73] !== v ||
  t[74] !== M ||
  t[75] !== d ||
  t[76] !== j ||
  t[77] !== a
    ? ((Ye =
        v || d
          ? u === `enabled`
            ? (0, Q.jsx)(Z.Item, {
                LeftIcon: Pe,
                RightIcon: i === `cloud` ? be : void 0,
                onClick: () => {
                  (i !== `cloud` &&
                    ae(j, {
                      eventName: `codex_composer_runtime_changed`,
                      metadata: { mode: `cloud` },
                    }),
                    a(`cloud`));
                },
                tooltipText: M.formatMessage({
                  id: `composer.mode.cloud.tooltip`,
                  defaultMessage: `Work in a cloud environment`,
                  description: `Tooltip content for cloud mode dropdown item`,
                }),
                children: (0, Q.jsx)(D, { ..._n.runInCloud }),
              })
            : (0, Q.jsxs)(Q.Fragment, {
                children: [
                  (0, Q.jsx)(Z.Item, {
                    LeftIcon: ze,
                    RightIcon: fe,
                    href: r,
                    children: (0, Q.jsx)(D, {
                      id: `composer.mode.remote.connectToCloud`,
                      defaultMessage: `Connect Codex web`,
                      description: `Menu item to connect Codex Cloud`,
                    }),
                  }),
                  (0, Q.jsx)(Z.Item, {
                    LeftIcon: ft,
                    className: `cursor-not-allowed`,
                    disabled: !0,
                    tooltipText: M.formatMessage({
                      id: `composer.mode.remote.connectToCloudDisabledTooltip`,
                      defaultMessage: `Set up an environment via Codex web to enable sending tasks to the cloud`,
                      description: `Tooltip for disabled send to cloud item when Cloud is not connected`,
                    }),
                    children: (0, Q.jsx)(`span`, {
                      className: `truncate`,
                      children: (0, Q.jsx)(D, {
                        id: `composer.mode.remote.sendToCloud`,
                        defaultMessage: `Send to cloud`,
                        description: `Disabled label when Codex Cloud is not connected`,
                      }),
                    }),
                  }),
                ],
              })
          : null),
      (t[71] = u),
      (t[72] = i),
      (t[73] = v),
      (t[74] = M),
      (t[75] = d),
      (t[76] = j),
      (t[77] = a),
      (t[78] = Ye))
    : (Ye = t[78]);
  let Xe;
  t[79] !== u || t[80] !== E || t[81] !== b
    ? ((Xe =
        u === `enabled`
          ? (0, Q.jsx)(nn, { selectedEnvironment: b, onClick: E })
          : null),
      (t[79] = u),
      (t[80] = E),
      (t[81] = b),
      (t[82] = Xe))
    : (Xe = t[82]);
  let Ze;
  t[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (0, Q.jsx)(`div`, {
        className: `mx-1 my-1.5 h-[0.5px] bg-token-foreground/10`,
      })),
      (t[83] = Ze))
    : (Ze = t[83]);
  let Qe;
  t[84] !== V ||
  t[85] !== L ||
  t[86] !== H ||
  t[87] !== F ||
  t[88] !== j ||
  t[89] !== N ||
  t[90] !== de ||
  t[91] !== ce ||
  t[92] !== pe
    ? ((Qe =
        de &&
        (0, Q.jsx)(He, {
          rateLimits: H,
          activeLimitName: V,
          planType: F,
          suppressUpsell: ce,
          selectedModel: N,
          onPlanUpgradeClick:
            L == null
              ? void 0
              : (e) => {
                  pe({
                    scope: j,
                    currentPlan: L,
                    source: `composer_runtime_dropdown_rate_limit_summary`,
                  }) && e.preventDefault();
                },
        })),
      (t[84] = V),
      (t[85] = L),
      (t[86] = H),
      (t[87] = F),
      (t[88] = j),
      (t[89] = N),
      (t[90] = de),
      (t[91] = ce),
      (t[92] = pe),
      (t[93] = Qe))
    : (Qe = t[93]);
  let tt;
  t[94] !== Xe || t[95] !== Qe
    ? ((tt = (0, Q.jsxs)(_e, { extension: !0, children: [Xe, Ze, Qe] })),
      (t[94] = Xe),
      (t[95] = Qe),
      (t[96] = tt))
    : (tt = t[96]);
  let nt;
  t[97] !== V ||
  t[98] !== L ||
  t[99] !== H ||
  t[100] !== F ||
  t[101] !== j ||
  t[102] !== N ||
  t[103] !== de ||
  t[104] !== ce ||
  t[105] !== pe
    ? ((nt =
        de &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(`div`, {
              className: `mx-1 my-1.5 h-[0.5px] bg-token-foreground/10`,
            }),
            (0, Q.jsx)(He, {
              rateLimits: H,
              activeLimitName: V,
              planType: F,
              suppressUpsell: ce,
              selectedModel: N,
              onPlanUpgradeClick:
                L == null
                  ? void 0
                  : (e) => {
                      pe({
                        scope: j,
                        currentPlan: L,
                        source: `composer_runtime_dropdown_rate_limit_summary`,
                      }) && e.preventDefault();
                    },
            }),
          ],
        })),
      (t[97] = V),
      (t[98] = L),
      (t[99] = H),
      (t[100] = F),
      (t[101] = j),
      (t[102] = N),
      (t[103] = de),
      (t[104] = ce),
      (t[105] = pe),
      (t[106] = nt))
    : (nt = t[106]);
  let rt;
  t[107] !== Fe ||
  t[108] !== Y ||
  t[109] !== X ||
  t[110] !== je ||
  t[111] !== Ce ||
  t[112] !== ye
    ? ((rt = ye
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(Z.Separator, {}),
              (0, Q.jsxs)(Z.Item, {
                disabled: X,
                onSelect: Fe,
                tooltipText: Ce,
                children: [
                  (0, Q.jsx)(Z.ItemIcon, { children: je }),
                  Y === `to-local`
                    ? (0, Q.jsx)(D, {
                        id: `localConversation.moveToLocal.label`,
                        defaultMessage: `Handoff to branch`,
                        description: `Footer dropdown item label for moving a worktree conversation back to a branch workspace`,
                      })
                    : (0, Q.jsx)(D, {
                        id: `localConversation.moveToWorktree.label`,
                        defaultMessage: `Handoff to worktree`,
                        description: `Footer dropdown item label for moving a local conversation to a new worktree`,
                      }),
                ],
              }),
            ],
          })
        : null),
      (t[107] = Fe),
      (t[108] = Y),
      (t[109] = X),
      (t[110] = je),
      (t[111] = Ce),
      (t[112] = ye),
      (t[113] = rt))
    : (rt = t[113]);
  let it;
  return (
    t[114] !== Ve ||
    t[115] !== Ue ||
    t[116] !== qe ||
    t[117] !== Je ||
    t[118] !== Ye ||
    t[119] !== tt ||
    t[120] !== nt ||
    t[121] !== rt
      ? ((it = (0, Q.jsxs)(`div`, {
          className: Ve,
          children: [Ue, qe, Je, Ye, tt, nt, rt],
        })),
        (t[114] = Ve),
        (t[115] = Ue),
        (t[116] = qe),
        (t[117] = Je),
        (t[118] = Ye),
        (t[119] = tt),
        (t[120] = nt),
        (t[121] = rt),
        (t[122] = it))
      : (it = t[122]),
    it
  );
}
function en(e) {
  return (
    !!e.snapshot?.primary?.windowDurationMins ||
    !!e.snapshot?.secondary?.windowDurationMins
  );
}
function tn(e) {
  return e.limitName != null;
}
function nn(e) {
  let t = (0, $.c)(4),
    { selectedEnvironment: n, onClick: r } = e,
    {
      availableEnvironments: i,
      isLoadingAllEnvironments: a,
      isWorktreeSnapshotsEnabled: o,
    } = mn(``),
    s = o && !a && i.length === 0,
    c;
  return (
    t[0] !== r || t[1] !== n || t[2] !== s
      ? ((c = (0, Q.jsx)(Ut, {
          selectedEnvironment: n,
          zeroEnvironments: s,
          onClick: r,
        })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = s),
        (t[3] = c))
      : (c = t[3]),
    c
  );
}
function rn(e) {
  let t = (0, $.c)(11),
    {
      selectedEnvironment: n,
      setComposerMode: r,
      setSelectedEnvironment: i,
      setEnvironmentSelectorOpen: a,
    } = e,
    [o, s] = (0, dt.useState)(``),
    { envListState: c, listToShow: l } = mn(o, n, i),
    u;
  t[0] === a ? (u = t[1]) : ((u = () => a(!1)), (t[0] = a), (t[1] = u));
  let d;
  return (
    t[2] !== c ||
    t[3] !== o ||
    t[4] !== l ||
    t[5] !== n ||
    t[6] !== r ||
    t[7] !== a ||
    t[8] !== i ||
    t[9] !== u
      ? ((d = (0, Q.jsx)(Wt, {
          selectedEnvironment: n,
          envQuery: o,
          setEnvQuery: s,
          envListState: c,
          listToShow: l,
          setComposerMode: r,
          setSelectedEnvironment: i,
          setOpen: a,
          onClosePanel: u,
        })),
        (t[2] = c),
        (t[3] = o),
        (t[4] = l),
        (t[5] = n),
        (t[6] = r),
        (t[7] = a),
        (t[8] = i),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function an(e) {
  let t = (0, $.c)(21),
    {
      environmentSelectorOpen: n,
      setEnvironmentSelectorOpen: r,
      selectedEnvironment: i,
      setComposerMode: a,
      setSelectedEnvironment: o,
      onSelectEnvironment: s,
      closeDropdown: c,
    } = e,
    [l, u] = (0, dt.useState)(``),
    {
      envListState: d,
      listToShow: f,
      zeroEnvironments: p,
      isLoadingAllEnvironments: m,
    } = mn(l, i, o);
  if (n) {
    let e;
    t[0] === r ? (e = t[1]) : ((e = () => r(!1)), (t[0] = r), (t[1] = e));
    let n;
    return (
      t[2] !== d ||
      t[3] !== l ||
      t[4] !== f ||
      t[5] !== i ||
      t[6] !== a ||
      t[7] !== r ||
      t[8] !== o ||
      t[9] !== e
        ? ((n = (0, Q.jsx)(Wt, {
            selectedEnvironment: i,
            envQuery: l,
            setEnvQuery: u,
            envListState: d,
            listToShow: f,
            setComposerMode: a,
            setSelectedEnvironment: o,
            setOpen: r,
            onClosePanel: e,
          })),
          (t[2] = d),
          (t[3] = l),
          (t[4] = f),
          (t[5] = i),
          (t[6] = a),
          (t[7] = r),
          (t[8] = o),
          (t[9] = e),
          (t[10] = n))
        : (n = t[10]),
      n
    );
  }
  let h;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(Z.Title, {
        children: (0, Q.jsx)(D, {
          id: `composer.environmentSelector.title`,
          defaultMessage: `Select environment`,
          description: `Title for the cloud environment dropdown`,
        }),
      })),
      (t[11] = h))
    : (h = t[11]);
  let g;
  return (
    t[12] !== c ||
    t[13] !== d ||
    t[14] !== l ||
    t[15] !== m ||
    t[16] !== f ||
    t[17] !== s ||
    t[18] !== i ||
    t[19] !== p
      ? ((g = (0, Q.jsxs)(`div`, {
          className: `flex w-64 flex-col`,
          children: [
            h,
            (0, Q.jsx)(on, {
              envQuery: l,
              setEnvQuery: u,
              envListState: d,
              listToShow: f,
              selectedEnvironment: i,
              zeroEnvironments: p,
              isLoadingAllEnvironments: m,
              onSelectEnvironment: s,
              onClose: c,
            }),
          ],
        })),
        (t[12] = c),
        (t[13] = d),
        (t[14] = l),
        (t[15] = m),
        (t[16] = f),
        (t[17] = s),
        (t[18] = i),
        (t[19] = p),
        (t[20] = g))
      : (g = t[20]),
    g
  );
}
function on(e) {
  let t = (0, $.c)(33),
    {
      envQuery: n,
      setEnvQuery: i,
      envListState: a,
      listToShow: o,
      selectedEnvironment: s,
      zeroEnvironments: c,
      isLoadingAllEnvironments: l,
      onSelectEnvironment: u,
      onClose: d,
    } = e,
    f = ee();
  if (c && !l) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Z.Item, {
            RightIcon: fe,
            href: r,
            children: (0, Q.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, Q.jsx)(D, {
                id: `composer.mode.remote.setupViaWeb`,
                defaultMessage: `Set up an environment via Codex web`,
                description: `Menu item to set up an environment via Codex web`,
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let p;
  t[1] === o ? (p = t[2]) : ((p = o ?? []), (t[1] = o), (t[2] = p));
  let m = p,
    h;
  if (a === `loading`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(`div`, {
          className: `flex items-center justify-center px-[var(--padding-row-x)] py-3`,
          children: (0, Q.jsx)(W, {
            className: `icon-xxs text-token-description-foreground`,
          }),
        })),
        (t[3] = e))
      : (e = t[3]),
      (h = e));
  } else if (a === `error`) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(Z.Message, {
          compact: !0,
          tone: `error`,
          children: (0, Q.jsx)(D, {
            id: `composer.environmentSelector.error`,
            defaultMessage: `Error loading environments`,
            description: `Error state for the cloud environment dropdown`,
          }),
        })),
        (t[4] = e))
      : (e = t[4]),
      (h = e));
  } else if (a === `none-found` || a === `empty`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(Z.Message, {
          compact: !0,
          children: (0, Q.jsx)(D, {
            id: `codex.environments.noEnvironmentsFound`,
            defaultMessage: `No environments found`,
            description: `Message shown when no Codex environments were found`,
          }),
        })),
        (t[5] = e))
      : (e = t[5]),
      (h = e));
  } else {
    let e;
    if (t[6] !== m || t[7] !== d || t[8] !== u || t[9] !== s?.id) {
      let n;
      (t[11] !== d || t[12] !== u || t[13] !== s?.id
        ? ((n = (e) =>
            (0, Q.jsx)(
              Z.Item,
              {
                RightIcon: e.id === s?.id ? be : void 0,
                onClick: () => {
                  (u(e), d());
                },
                children: (0, Q.jsx)(`span`, {
                  className: `flex min-w-0 items-center gap-1.5`,
                  children: (0, Q.jsx)(`span`, {
                    className: `min-w-0 truncate`,
                    children: e.label,
                  }),
                }),
              },
              e.id,
            )),
          (t[11] = d),
          (t[12] = u),
          (t[13] = s?.id),
          (t[14] = n))
        : (n = t[14]),
        (e = m.map(n)),
        (t[6] = m),
        (t[7] = d),
        (t[8] = u),
        (t[9] = s?.id),
        (t[10] = e));
    } else e = t[10];
    let n;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(Z.Separator, {})), (t[15] = n))
      : (n = t[15]);
    let i;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(D, {
          id: `composer.environmentSelector.createNew`,
          defaultMessage: `Create new`,
          description: `CTA to create a new Codex environment`,
        })),
        (t[16] = i))
      : (i = t[16]);
    let a;
    t[17] === d
      ? (a = t[18])
      : ((a = (0, Q.jsx)(Z.Item, {
          LeftIcon: Be,
          href: `${r}/settings/environments`,
          onClick: d,
          children: i,
        })),
        (t[17] = d),
        (t[18] = a));
    let o;
    (t[19] !== e || t[20] !== a
      ? ((o = (0, Q.jsxs)(Q.Fragment, { children: [e, n, a] })),
        (t[19] = e),
        (t[20] = a),
        (t[21] = o))
      : (o = t[21]),
      (h = o));
  }
  let g;
  t[22] === f
    ? (g = t[23])
    : ((g = f.formatMessage({
        id: `composer.searchEnvironments`,
        defaultMessage: `Search environments`,
        description: `Search environments placeholder`,
      })),
      (t[22] = f),
      (t[23] = g));
  let _;
  t[24] === i
    ? (_ = t[25])
    : ((_ = (e) => i(e.target.value)), (t[24] = i), (t[25] = _));
  let v;
  t[26] !== n || t[27] !== g || t[28] !== _
    ? ((v = (0, Q.jsx)(Z.Section, {
        className: `my-1`,
        children: (0, Q.jsx)(Z.SearchInput, {
          placeholder: g,
          value: n,
          onChange: _,
        }),
      })),
      (t[26] = n),
      (t[27] = g),
      (t[28] = _),
      (t[29] = v))
    : (v = t[29]);
  let y;
  return (
    t[30] !== h || t[31] !== v
      ? ((y = (0, Q.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [v, h],
        })),
        (t[30] = h),
        (t[31] = v),
        (t[32] = y))
      : (y = t[32]),
    y
  );
}
function sn(e) {
  let t = (0, $.c)(16),
    {
      selectedEnvironment: n,
      setSelectedEnvironment: r,
      setComposerMode: i,
    } = e,
    a = ee(),
    o;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((o = function (e) {
        let { onClose: t } = e;
        return (0, Q.jsx)(cn, {
          selectedEnvironment: n,
          setSelectedEnvironment: r,
          setComposerMode: i,
          onClose: t,
        });
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  t[4] === a
    ? (c = t[5])
    : ((c = a.formatMessage(_n.cloudEnvironmentTitle)), (t[4] = a), (t[5] = c));
  let l;
  t[6] !== a || t[7] !== n?.label
    ? ((l =
        n?.label ??
        a.formatMessage({
          id: `composer.slashCommands.cloudEnvironment.description`,
          defaultMessage: `Choose the cloud environment`,
          description: `Description for the cloud environment slash command when no environment is selected`,
        })),
      (t[6] = a),
      (t[7] = n?.label),
      (t[8] = l))
    : (l = t[8]);
  let u = n?.id,
    d;
  t[9] === u ? (d = t[10]) : ((d = [u]), (t[9] = u), (t[10] = d));
  let f;
  return (
    t[11] !== s || t[12] !== c || t[13] !== l || t[14] !== d
      ? ((f = {
          id: `cloud-environment`,
          title: c,
          description: l,
          requiresEmptyComposer: !1,
          Icon: ot,
          enabled: !0,
          Content: s,
          dependencies: d,
        }),
        (t[11] = s),
        (t[12] = c),
        (t[13] = l),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    We(f),
    null
  );
}
function cn(e) {
  let t = (0, $.c)(13),
    {
      selectedEnvironment: n,
      setSelectedEnvironment: r,
      setComposerMode: i,
      onClose: a,
    } = e,
    { listToShow: o } = mn(Ue(ln), n, r),
    s;
  if (t[0] !== o || t[1] !== a || t[2] !== n?.id || t[3] !== i || t[4] !== r) {
    let e = o.slice(0, 100),
      c;
    (t[6] !== a || t[7] !== n?.id || t[8] !== i || t[9] !== r
      ? ((c = (e) =>
          (0, Q.jsx)(
            Je,
            {
              value: e.label ?? ``,
              title: e.label ?? ``,
              onSelect: () => {
                (i(`cloud`), r(e), a());
              },
              RightIcon: e.id === n?.id ? be : void 0,
            },
            e.id,
          )),
        (t[6] = a),
        (t[7] = n?.id),
        (t[8] = i),
        (t[9] = r),
        (t[10] = c))
      : (c = t[10]),
      (s = e.map(c)),
      (t[0] = o),
      (t[1] = a),
      (t[2] = n?.id),
      (t[3] = i),
      (t[4] = r),
      (t[5] = s));
  } else s = t[5];
  let c;
  return (
    t[11] === s
      ? (c = t[12])
      : ((c = (0, Q.jsx)(Q.Fragment, { children: s })),
        (t[11] = s),
        (t[12] = c)),
    c
  );
}
function ln(e) {
  return e.search;
}
function un(e) {
  let { setSelectedEnvironment: t } = e;
  return (mn(``, null, t), null);
}
function dn(e) {
  let t = (0, $.c)(42),
    {
      open: n,
      onOpenChange: r,
      side: i,
      conversationId: a,
      executionTarget: o,
      gitRoot: s,
      threadHandoff: c,
      worktreeSegmentLabel: l,
      tooltipContent: u,
      tooltipMaxWidth: d,
      triggerVariant: f,
      openHandoffDialog: p,
    } = e,
    m = ee(),
    h;
  t[0] !== o.hostConfig || t[1] !== s
    ? ((h = {
        cwd: s,
        enabled: !0,
        hostConfig: o.hostConfig,
        operationSource: `local_remote_dropdown`,
        refetchOnWindowFocus: !1,
        staleTime: null,
      }),
      (t[0] = o.hostConfig),
      (t[1] = s),
      (t[2] = h))
    : (h = t[2]);
  let g = ne(ge, h),
    _ = et(a),
    { openOperation: v } = $e(),
    y;
  t[3] !== a || t[4] !== g || t[5] !== _ || t[6] !== c
    ? ((y = ut({
        conversationId: a,
        handoffBranch: g ?? gn(_, a),
        handoffDirection: lt({
          codexWorktree: !1,
          operation: _,
          threadHandoff: c,
        }),
        operation: _,
        threadHandoff: c,
      })),
      (t[3] = a),
      (t[4] = g),
      (t[5] = _),
      (t[6] = c),
      (t[7] = y))
    : (y = t[7]);
  let b = y,
    x = _ == null && (c?.disabled ?? !1),
    C;
  t[8] !== x || t[9] !== m || t[10] !== _?.status
    ? ((C =
        _?.status === `queued` || _?.status === `running`
          ? m.formatMessage({
              id: `localConversation.threadHandoff.tooltip.viewProgress`,
              defaultMessage: `View progress`,
              description: `Tooltip shown when a thread handoff is in progress and the button reopens the progress view`,
            })
          : x
            ? m.formatMessage({
                id: `localConversation.moveThread.disabled.turnInProgress`,
                defaultMessage: `You cannot move a chat while it is in progress`,
                description: `Tooltip shown when moving a thread is disabled because a turn is in progress`,
              })
            : void 0),
      (t[8] = x),
      (t[9] = m),
      (t[10] = _?.status),
      (t[11] = C))
    : (C = t[11]);
  let w = C,
    T;
  t[12] === _
    ? (T = t[13])
    : ((T =
        _?.status === `queued` || _?.status === `running`
          ? (0, Q.jsx)(W, { className: `icon-2xs` })
          : _?.status === `error`
            ? (0, Q.jsx)(pt, { className: `icon-2xs text-token-danger` })
            : _?.hasUnseenTerminalState && _.status === `warning`
              ? (0, Q.jsx)(pt, {
                  className: `icon-2xs text-token-editor-warning-foreground`,
                })
              : (0, Q.jsx)(mt, { className: `icon-2xs rotate-90` })),
      (t[12] = _),
      (t[13] = T));
  let E = T,
    O;
  t[14] !== r || t[15] !== p || t[16] !== v || t[17] !== _
    ? ((O = () => {
        if ((r(!1), _ != null)) {
          v(_.id);
          return;
        }
        p();
      }),
      (t[14] = r),
      (t[15] = p),
      (t[16] = v),
      (t[17] = _),
      (t[18] = O))
    : (O = t[18]);
  let te = O,
    k;
  t[19] !== o.cwd || t[20] !== b || t[21] !== f || t[22] !== l
    ? ((k =
        f === `summary-panel`
          ? (0, Q.jsx)(Ze, {
              icon: (0, Q.jsx)(Ie, {
                className: `icon-sm shrink-0 text-token-foreground`,
              }),
              label: (0, Q.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-1 text-token-foreground`,
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `min-w-0 truncate`,
                    children: l,
                  }),
                  b
                    ? (0, Q.jsx)(Ne, {
                        className: `icon-2xs shrink-0 text-token-text-tertiary`,
                      })
                    : null,
                ],
              }),
              labelClassName: `flex min-w-0 items-center`,
              title: o.cwd ?? void 0,
            })
          : (0, Q.jsxs)(le, {
              color: `ghostActive`,
              size: `composerSm`,
              children: [
                (0, Q.jsx)(`span`, { className: `truncate`, children: l }),
                b
                  ? (0, Q.jsx)(Ne, {
                      className: `icon-2xs text-token-input-placeholder-foreground`,
                    })
                  : null,
              ],
            })),
      (t[19] = o.cwd),
      (t[20] = b),
      (t[21] = f),
      (t[22] = l),
      (t[23] = k))
    : (k = t[23]);
  let A = k,
    re = f === `summary-panel` && `w-full`,
    j;
  t[24] === re ? (j = t[25]) : ((j = S(re)), (t[24] = re), (t[25] = j));
  let M;
  t[26] !== te ||
  t[27] !== x ||
  t[28] !== E ||
  t[29] !== w ||
  t[30] !== b ||
  t[31] !== r ||
  t[32] !== n ||
  t[33] !== i ||
  t[34] !== u ||
  t[35] !== d ||
  t[36] !== A ||
  t[37] !== f
    ? ((M = b
        ? (0, Q.jsx)(je, {
            open: n,
            onOpenChange: r,
            side: i,
            triggerButton:
              f === `summary-panel`
                ? A
                : (0, Q.jsx)(z, {
                    tooltipContent: u,
                    tooltipMaxWidth: d,
                    children: A,
                  }),
            children: (0, Q.jsx)(`div`, {
              className: `flex min-w-[180px] flex-col`,
              children: (0, Q.jsx)(Z.Item, {
                disabled: x,
                onSelect: te,
                tooltipText: w,
                children: (0, Q.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-1.5`,
                  children: [
                    E,
                    (0, Q.jsx)(`span`, {
                      className: `truncate`,
                      children: (0, Q.jsx)(D, {
                        id: `localConversation.moveToLocal.label`,
                        defaultMessage: `Handoff to branch`,
                        description: `Footer dropdown item label for moving a worktree conversation back to a branch workspace`,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          })
        : (0, Q.jsx)(z, {
            tooltipContent: u,
            tooltipMaxWidth: d,
            children: (0, Q.jsx)(`span`, {
              className: `inline-flex`,
              children: (0, Q.jsx)(`div`, {
                className: `pointer-events-none`,
                children: A,
              }),
            }),
          })),
      (t[26] = te),
      (t[27] = x),
      (t[28] = E),
      (t[29] = w),
      (t[30] = b),
      (t[31] = r),
      (t[32] = n),
      (t[33] = i),
      (t[34] = u),
      (t[35] = d),
      (t[36] = A),
      (t[37] = f),
      (t[38] = M))
    : (M = t[38]);
  let ie;
  return (
    t[39] !== j || t[40] !== M
      ? ((ie = (0, Q.jsx)(`div`, { className: j, children: M })),
        (t[39] = j),
        (t[40] = M),
        (t[41] = ie))
      : (ie = t[41]),
    ie
  );
}
function fn(e) {
  let t = (0, $.c)(23),
    {
      onClose: r,
      conversationId: i,
      composerViewState: a,
      executionTarget: o,
      gitRoot: s,
      threadHandoff: c,
      isLocalModeRemote: l,
    } = e,
    { data: u } = ue(),
    d;
  t[0] !== o.hostConfig || t[1] !== s
    ? ((d = {
        cwd: s,
        enabled: !0,
        hostConfig: o.hostConfig,
        operationSource: `local_remote_dropdown`,
        refetchOnWindowFocus: !1,
        staleTime: null,
      }),
      (t[0] = o.hostConfig),
      (t[1] = s),
      (t[2] = d))
    : (d = t[2]);
  let f = ne(ge, d),
    p = et(i),
    m;
  t[3] !== u?.codexHome ||
  t[4] !== o.activeWorkspaceRoot ||
  t[5] !== l ||
  t[6] !== p ||
  t[7] !== c
    ? ((m = lt({
        codexWorktree: n(l ? null : o.activeWorkspaceRoot, u?.codexHome),
        operation: p,
        threadHandoff: c,
      })),
      (t[3] = u?.codexHome),
      (t[4] = o.activeWorkspaceRoot),
      (t[5] = l),
      (t[6] = p),
      (t[7] = c),
      (t[8] = m))
    : (m = t[8]);
  let h = m,
    g;
  t[9] !== i || t[10] !== f || t[11] !== p
    ? ((g = f ?? gn(p, i)), (t[9] = i), (t[10] = f), (t[11] = p), (t[12] = g))
    : (g = t[12]);
  let _ = g,
    v;
  t[13] === r
    ? (v = t[14])
    : ((v = (e) => {
        e || r();
      }),
      (t[13] = r),
      (t[14] = v));
  let y = v,
    b;
  return (
    t[15] !== a ||
    t[16] !== i ||
    t[17] !== y ||
    t[18] !== _ ||
    t[19] !== h ||
    t[20] !== c.conversationTitle ||
    t[21] !== c.cwd
      ? ((b =
          h === `to-local`
            ? (0, Q.jsx)(Pt, {
                open: !0,
                onOpenChange: y,
                conversationId: i,
                composerViewState: a,
                conversationTitle: c.conversationTitle,
                currentBranch: _ ?? ``,
                cwd: c.cwd,
              })
            : (0, Q.jsx)(zt, {
                open: !0,
                onOpenChange: y,
                conversationId: i,
                composerViewState: a,
                conversationTitle: c.conversationTitle,
                currentBranch: _ ?? ``,
                cwd: c.cwd,
              })),
        (t[15] = a),
        (t[16] = i),
        (t[17] = y),
        (t[18] = _),
        (t[19] = h),
        (t[20] = c.conversationTitle),
        (t[21] = c.cwd),
        (t[22] = b))
      : (b = t[22]),
    b
  );
}
function pn(e) {
  let t = (0, $.c)(6),
    { composerMode: n, gitRoot: r, hostConfig: i } = e,
    a = n === `worktree`,
    o;
  if (
    (t[0] !== r || t[1] !== i || t[2] !== a
      ? ((o = {
          cwd: r,
          enabled: a,
          hostConfig: i,
          operationSource: `local_remote_dropdown`,
          refetchOnWindowFocus: !1,
          staleTime: A.ONE_MINUTE,
        }),
        (t[0] = r),
        (t[1] = i),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    !((ne(nt, o)?.length ?? 0) > 0) || n !== `worktree`)
  )
    return null;
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(D, { ..._n.worktreeSubmoduleWarning })), (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, Q.jsx)(z, {
          tooltipContent: s,
          children: (0, Q.jsx)(`span`, {
            className: `flex items-center`,
            children: (0, Q.jsx)(pt, {
              className: `icon-2xs text-token-editor-warning-foreground`,
            }),
          }),
        })),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function mn(e, t, n) {
  let r = (0, $.c)(18),
    i = (0, dt.useDeferredValue)(e),
    a = t?.id,
    o;
  r[0] !== i || r[1] !== a
    ? ((o = { envQuery: i, selectedEnvironmentId: a }),
      (r[0] = i),
      (r[1] = a),
      (r[2] = o))
    : (o = r[2]);
  let {
      availableEnvironments: s,
      errorLoadingAllEnvironments: c,
      isLoadingAllEnvironments: l,
      listToShow: u,
    } = ne(Zt, o),
    d = oe(`1907601843`),
    f;
  r[3] !== s || r[4] !== t
    ? ((f = t == null ? null : (s.find((e) => e.id === t.id) ?? null)),
      (r[3] = s),
      (r[4] = t),
      (r[5] = f))
    : (f = r[5]);
  let p = f,
    m = d && !l && s.length === 0,
    h,
    g;
  (r[6] !== s || r[7] !== p || r[8] !== n
    ? ((h = () => {
        n == null || p != null || n(s[0] ?? null);
      }),
      (g = [s, p, n]),
      (r[6] = s),
      (r[7] = p),
      (r[8] = n),
      (r[9] = h),
      (r[10] = g))
    : ((h = r[9]), (g = r[10])),
    (0, dt.useEffect)(h, g));
  let _ = c instanceof j && c.status === 404,
    v = u.length
      ? `list`
      : l
        ? `loading`
        : c && !_
          ? `error`
          : e.length
            ? `none-found`
            : `empty`,
    y;
  return (
    r[11] !== s ||
    r[12] !== v ||
    r[13] !== l ||
    r[14] !== d ||
    r[15] !== u ||
    r[16] !== m
      ? ((y = {
          availableEnvironments: s,
          envListState: v,
          isLoadingAllEnvironments: l,
          isWorktreeSnapshotsEnabled: d,
          listToShow: u,
          zeroEnvironments: m,
        }),
        (r[11] = s),
        (r[12] = v),
        (r[13] = l),
        (r[14] = d),
        (r[15] = u),
        (r[16] = m),
        (r[17] = y))
      : (y = r[17]),
    y
  );
}
function hn(e) {
  let t = (0, $.c)(9),
    { rateLimit: n, isRemoteHost: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = Ce(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === r
    ? (o = t[3])
    : ((o = r
        ? (0, Q.jsx)(D, {
            id: `composer.mode.remote`,
            defaultMessage: `Remote`,
            description: `Remote mode label`,
          })
        : (0, Q.jsx)(D, {
            id: `composer.mode.local`,
            defaultMessage: `Work locally`,
            description: `Local mode label`,
          })),
      (t[2] = r),
      (t[3] = o));
  let s;
  t[4] === a
    ? (s = t[5])
    : ((s =
        a &&
        (0, Q.jsx)(`span`, {
          className: `whitespace-nowrap text-token-input-placeholder-foreground opacity-60`,
          children: (0, Q.jsx)(D, {
            id: `composer.mode.local.ratePercent`,
            defaultMessage: ` {usage}%`,
            description: `Rate limit remaining percent appended to Local when near limit`,
            values: { usage: Math.round(a.remainingPercent) },
          }),
        })),
      (t[4] = a),
      (t[5] = s));
  let c;
  return (
    t[6] !== o || t[7] !== s
      ? ((c = (0, Q.jsxs)(Q.Fragment, { children: [o, s] })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function gn(e, t) {
  return e == null || t == null
    ? null
    : e.sourceConversationId === t
      ? e.sourceBranch
      : e.targetConversationId === t
        ? e.direction === `to-worktree`
          ? (e.worktreeBranch ?? e.sourceBranch)
          : (e.localBranch ?? e.sourceBranch)
        : null;
}
var _n = O({
  workLocally: {
    id: `composer.mode.workLocally`,
    defaultMessage: `Work locally`,
    description: `Local mode label`,
  },
  startInRemote: {
    id: `composer.mode.startInRemote`,
    defaultMessage: `Remote`,
    description: `Dropdown label for starting a task in a remote project`,
  },
  workLocallyTooltip: {
    id: `composer.mode.workLocally.tooltip`,
    defaultMessage: `Work on {branchName}`,
    description: `Tooltip describing what local mode runs against`,
  },
  workRemotelyTooltipWithoutPath: {
    id: `composer.mode.workRemotely.tooltipWithoutPath`,
    defaultMessage: `Work on {hostDisplayName}`,
    description: `Tooltip describing what where the remote mode is run`,
  },
  fallbackBranch: {
    id: `composer.mode.workLocally.currentBranchFallback`,
    defaultMessage: `your branch`,
    description: `Fallback branch name when current branch cannot be detected`,
  },
  runInCloud: {
    id: `composer.mode.runInCloud`,
    defaultMessage: `Cloud`,
    description: `Remote mode label when a Codex task will be run in the cloud`,
  },
  localShort: {
    id: `composer.mode.local.short`,
    defaultMessage: `Local`,
    description: `Short local mode label`,
  },
  selectEnvironment: {
    id: `composer.mode.remote.selectEnvironment`,
    defaultMessage: `Select environment`,
    description: `Remote mode label when no environment is selected`,
  },
  worktreeMode: {
    id: `composer.mode.worktree`,
    defaultMessage: `New worktree`,
    description: `Worktree mode label`,
  },
  worktreeTooltip: {
    id: `composer.mode.worktree.tooltip`,
    defaultMessage: `Create a copy of your local project to work in parallel`,
    description: `Tooltip content for worktree mode dropdown item`,
  },
  remoteWorktreeTooltip: {
    id: `composer.mode.remoteWorktree.tooltip`,
    defaultMessage: `Create a copy of your remote project to work in parallel`,
    description: `Tooltip content for worktree mode dropdown item when the selected workspace is remote`,
  },
  worktreeSegment: {
    id: `composer.mode.worktreeSegment`,
    defaultMessage: `Worktree`,
    description: `Worktree mode label for the segmented toggle`,
  },
  localRemoteWhereRun: {
    id: `composer.mode.localRemoteWhereRun`,
    defaultMessage: `Select where to run the task`,
    description: `Tooltip content for local/remote dropdown`,
  },
  worktreeSubmoduleWarning: {
    id: `composer.mode.worktree.submoduleWarning`,
    defaultMessage: `This repo has git submodules. Worktree creation may fail`,
    description: `Warning shown when a repo contains git submodules`,
  },
  cloudEnvironmentTitle: {
    id: `composer.slashCommands.cloudEnvironment.title`,
    defaultMessage: `Cloud environment`,
    description: `Title for a composer slash command that makes Codex run in the cloud with a specific environment.`,
  },
});
function vn({
  executionTargetCwd: e,
  footerRemoteState: t,
  remoteConnections: n,
}) {
  let { existingRemoteThreadState: r, draftNewThreadRemoteSelectionState: i } =
    t;
  if (t.isAttachedToStartedTask)
    return r.hostId === `local`
      ? null
      : {
          hostId: r.hostId,
          connectionDisplayName: r.connectionDisplayName ?? yn(n, r.hostId),
          projectPath: r.projectPath ?? e,
        };
  let a = i?.hostId ?? null,
    o = i?.projectPath ?? null;
  return a == null || a === `local` || o == null
    ? null
    : {
        hostId: a,
        connectionDisplayName: i?.connectionDisplayName ?? yn(n, a),
        projectPath: o,
      };
}
function yn(e, t) {
  return e.find((e) => e.hostId === t)?.displayName ?? null;
}
export { ct as n, Qt as t };
//# sourceMappingURL=local-remote-dropdown.js.map
