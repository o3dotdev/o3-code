import { s as e, t } from "./chunk-Bj-mKKzh.js";
import {
  Dr as n,
  E as r,
  Qi as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as a, t as o } from "./jsx-runtime.js";
import { t as s } from "./clsx-BcPLHiun.js";
import {
  G as c,
  L as l,
  T as u,
  U as d,
  X as f,
  Y as p,
  Z as m,
  _ as h,
  m as g,
  ot as _,
  p as v,
  wt as y,
  z as b,
} from "./setting-storage.js";
import { r as x } from "./product-logger-DusapRyT.js";
import { t as S } from "./tooltip-CDzchJxN.js";
import { t as C } from "./route-scope.js";
import { t as w } from "./prompt-text-DuAhtLDu.js";
import { t as T } from "./button.js";
import { t as ee } from "./spinner.js";
import { t as te } from "./open-workspace-file-WgoEFjrv.js";
import { t as E } from "./thread-detail-level.js";
import { _ as ne, g as D } from "./use-plugins-jIZrcuZQ.js";
import { t as re } from "./check-md.js";
import { t as O } from "./context-menu.js";
import { t as k } from "./chevron-NmAOI_v1.js";
import { t as ie } from "./pencil.js";
import { f as A } from "./inline-mentions.js";
import { t as j } from "./workspace-file-context-menu.js";
import { t as ae } from "./copy-Cen6nDnP.js";
import { t as M } from "./image-preview-dialog.js";
import { t as N } from "./pull-request-open.js";
import {
  a as P,
  c as oe,
  i as se,
  n as ce,
  o as le,
  r as ue,
} from "./prompt-editor-.js";
import { n as de } from "./attachment-remove-button-BPMNqRUa.js";
import {
  c as fe,
  l as pe,
  n as F,
  r as I,
  t as me,
} from "./mention-metadata-syncer.js";
import { t as he } from "./use-enter-behavior.js";
import { d as L } from "./hooks-settings-model-BVVYIV7N.js";
import { t as R } from "./at-mention-list-C6rdlW9Y.js";
import { i as z } from "./use-composer-controller.js";
import { t as B } from "./anchored-autocomplete-overlay.js";
import { t as ge } from "./use-autocomplete-overlay-placement-uVAiOuYR.js";
import { t as V } from "./use-measured-text-collapse.js";
import { t as _e } from "./hooks-Cw0VrjI0.js";
import { t as ve } from "./user-formatted-text.js";
import { n as ye } from "./hooks-settings-copy.js";
var H = y(),
  U = e(a(), 1),
  W = o();
function be(e) {
  let t = (0, H.c)(11),
    { stats: n, threadDetailLevel: r } = e,
    i = c(),
    a = (r ?? `STEPS_COMMANDS`) === E,
    o;
  t[0] === i
    ? (o = t[1])
    : ((o = i.formatMessage({
        id: `assistantMessage.hookStats.label`,
        defaultMessage: `Hooks`,
        description: `Accessible label for hook runs`,
      })),
      (t[0] = i),
      (t[1] = o));
  let s = o,
    l;
  t[2] !== a || t[3] !== n
    ? ((l = a ? (0, W.jsx)(Ce, { stats: n }) : (0, W.jsx)(xe, { stats: n })),
      (t[2] = a),
      (t[3] = n),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, W.jsx)(_e, { className: `icon-xs` })), (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] === s
    ? (d = t[7])
    : ((d = (0, W.jsx)(T, {
        "aria-label": s,
        color: `ghost`,
        size: `icon`,
        children: u,
      })),
      (t[6] = s),
      (t[7] = d));
  let f;
  return (
    t[8] !== l || t[9] !== d
      ? ((f = (0, W.jsx)(S, {
          tooltipContent: l,
          tooltipClassName: `px-3 py-2`,
          tooltipMaxWidth: `min(32rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
          children: d,
        })),
        (t[8] = l),
        (t[9] = d),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
function xe(e) {
  let t = (0, H.c)(17),
    { stats: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, W.jsx)(`div`, {
        className: `font-medium`,
        children: (0, W.jsx)(d, {
          id: `assistantMessage.hookStats.title`,
          defaultMessage: `Hooks summary`,
          description: `Title for hook summary tooltip`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, W.jsx)(`span`, {
        children: (0, W.jsx)(d, {
          id: `assistantMessage.hookStats.ranCount`,
          defaultMessage: `Ran`,
          description: `Label for hook runs counted in the hook stats tooltip`,
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === n.count
    ? (a = t[3])
    : ((a = (0, W.jsx)(`span`, {
        className: `text-right text-token-text-primary`,
        children: (0, W.jsx)(b, { value: n.count }),
      })),
      (t[2] = n.count),
      (t[3] = a));
  let o;
  t[4] === n.blockedCount
    ? (o = t[5])
    : ((o =
        n.blockedCount > 0
          ? (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(`span`, {
                  children: (0, W.jsx)(d, {
                    id: `assistantMessage.hookStats.blockedCount`,
                    defaultMessage: `Blocked`,
                    description: `Label for blocked hook runs counted in the hook stats tooltip`,
                  }),
                }),
                (0, W.jsx)(`span`, {
                  className: `text-right text-token-text-primary`,
                  children: (0, W.jsx)(b, { value: n.blockedCount }),
                }),
              ],
            })
          : null),
      (t[4] = n.blockedCount),
      (t[5] = o));
  let s;
  t[6] === n.errorCount
    ? (s = t[7])
    : ((s =
        n.errorCount > 0
          ? (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)(`span`, {
                  children: (0, W.jsx)(d, {
                    id: `assistantMessage.hookStats.errorCount`,
                    defaultMessage: `Errors`,
                    description: `Label for failed hook runs counted in the hook stats tooltip`,
                  }),
                }),
                (0, W.jsx)(`span`, {
                  className: `text-right text-token-text-primary`,
                  children: (0, W.jsx)(b, { value: n.errorCount }),
                }),
              ],
            })
          : null),
      (t[6] = n.errorCount),
      (t[7] = s));
  let c;
  t[8] !== a || t[9] !== o || t[10] !== s
    ? ((c = (0, W.jsxs)(`div`, {
        className: `grid grid-cols-[auto_auto] gap-x-3 gap-y-1 text-token-text-secondary`,
        children: [i, a, o, s],
      })),
      (t[8] = a),
      (t[9] = o),
      (t[10] = s),
      (t[11] = c))
    : (c = t[11]);
  let l;
  t[12] === n.entries
    ? (l = t[13])
    : ((l =
        n.entries.length > 0
          ? (0, W.jsx)(`ul`, {
              className: `grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1`,
              children: n.entries.map(Se),
            })
          : null),
      (t[12] = n.entries),
      (t[13] = l));
  let u;
  return (
    t[14] !== c || t[15] !== l
      ? ((u = (0, W.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-2 text-left`,
          children: [r, c, l],
        })),
        (t[14] = c),
        (t[15] = l),
        (t[16] = u))
      : (u = t[16]),
    u
  );
}
function Se(e, t) {
  return (0, W.jsxs)(
    `li`,
    {
      className: `contents`,
      children: [
        (0, W.jsx)(`span`, {
          className: `text-token-text-secondary`,
          children: we(e.kind),
        }),
        (0, W.jsx)(`span`, {
          className: `min-w-0 break-words whitespace-pre-wrap text-token-text-primary`,
          children: e.text,
        }),
      ],
    },
    `${e.kind}:${String(t)}:${e.text}`,
  );
}
function Ce(e) {
  let t = (0, H.c)(8),
    { stats: n } = e,
    r = c(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, W.jsx)(`div`, {
        className: `font-medium`,
        children: (0, W.jsx)(d, {
          id: `assistantMessage.hookStats.codeTitle`,
          defaultMessage: `Hooks`,
          description: `Title for detailed hook runs tooltip in code mode`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  if (t[1] !== r || t[2] !== n.runs) {
    let e;
    (t[4] === r
      ? (e = t[5])
      : ((e = (e) =>
          (0, W.jsxs)(
            U.Fragment,
            {
              children: [
                (0, W.jsx)(`li`, {
                  className: `text-token-text-primary`,
                  children: ye(e.eventName, r),
                }),
                (0, W.jsxs)(`li`, {
                  className: `flex min-w-0 flex-col`,
                  children: [
                    (0, W.jsxs)(`span`, {
                      className: `min-w-0 break-words whitespace-pre-wrap text-token-text-secondary`,
                      children: [
                        Ee(e.source),
                        e.count > 1
                          ? (0, W.jsx)(d, {
                              id: `assistantMessage.hookStats.repeatCount`,
                              defaultMessage: ` · {count} runs`,
                              description: `Count for adjacent identical hook summaries`,
                              values: { count: e.count },
                            })
                          : null,
                      ],
                    }),
                    e.statusMessage == null
                      ? null
                      : (0, W.jsx)(`span`, {
                          className: `text-token-text-secondary`,
                          children: e.statusMessage,
                        }),
                    e.entries.map(G),
                  ],
                }),
              ],
            },
            e.id,
          )),
        (t[4] = r),
        (t[5] = e)),
      (a = n.runs.map(e)),
      (t[1] = r),
      (t[2] = n.runs),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[6] === a
      ? (o = t[7])
      : ((o = (0, W.jsxs)(`div`, {
          className: `flex min-w-0 flex-col gap-2 text-left`,
          children: [
            i,
            (0, W.jsx)(`ul`, {
              className: `grid min-w-0 grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1`,
              children: a,
            }),
          ],
        })),
        (t[6] = a),
        (t[7] = o)),
    o
  );
}
function G(e, t) {
  return (0, W.jsx)(
    `span`,
    { className: Te(e.tone), children: e.text },
    `${e.tone}:${String(t)}:${e.text}`,
  );
}
function we(e) {
  switch (e) {
    case `feedback`:
      return (0, W.jsx)(d, {
        id: `assistantMessage.hookStats.entry.feedback`,
        defaultMessage: `Feedback`,
        description: `Label for hook feedback surfaced in the hook stats tooltip`,
      });
    case `stop`:
      return (0, W.jsx)(d, {
        id: `assistantMessage.hookStats.entry.stop`,
        defaultMessage: `Stop`,
        description: `Label for hook stop output surfaced in the hook stats tooltip`,
      });
    case `error`:
      return (0, W.jsx)(d, {
        id: `assistantMessage.hookStats.entry.error`,
        defaultMessage: `Error`,
        description: `Label for hook errors surfaced in the hook stats tooltip`,
      });
  }
}
function Te(e) {
  switch (e) {
    case `error`:
      return `text-token-editor-warning-foreground`;
    case `warning`:
      return `text-token-text-secondary`;
  }
}
function Ee(e) {
  return (0, W.jsx)(d, {
    id: `assistantMessage.hookStats.source`,
    defaultMessage: `{source, select, admin {Admin} user {User} project {Project} plugin {Plugin} sessionFlags {Session} other {Unknown}}`,
    description: `Source label for hook runs in the detailed hook stats tooltip`,
    values: { source: L([e]) ?? `unknown` },
  });
}
var K = 20,
  De = {
    display: `-webkit-box`,
    overflow: `hidden`,
    WebkitBoxOrient: `vertical`,
  };
function Oe(e) {
  let t = (0, H.c)(18),
    { text: n, cwd: r, hostId: i, collapsedLineCount: a } = e,
    o = a === void 0 ? K : a,
    s;
  t[0] !== o || t[1] !== n
    ? ((s = { text: n, collapsedLineCount: o, fallbackFontSizePx: 13 }),
      (t[0] = o),
      (t[1] = n),
      (t[2] = s))
    : (s = t[2]);
  let {
      setTextContentMeasurementRef: c,
      collapseState: l,
      handleToggleExpansion: u,
    } = V(s),
    f;
  t[3] !== l || t[4] !== o
    ? ((f =
        l === `collapsed`
          ? { ...De, maxHeight: `${o}lh`, WebkitLineClamp: o }
          : void 0),
      (t[3] = l),
      (t[4] = o),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] !== r || t[7] !== i || t[8] !== c || t[9] !== f || t[10] !== n
    ? ((p = (0, W.jsx)(`div`, {
        className: `text-size-chat relative w-full min-w-0`,
        children: (0, W.jsx)(ve, {
          ref: c,
          cwd: r,
          hostId: i,
          style: f,
          text: n,
        }),
      })),
      (t[6] = r),
      (t[7] = i),
      (t[8] = c),
      (t[9] = f),
      (t[10] = n),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== l || t[13] !== u
    ? ((m =
        l === `uncollapsible`
          ? null
          : (0, W.jsxs)(`button`, {
              type: `button`,
              "aria-expanded": l === `expanded`,
              className: `text-size-chat mt-1.5 inline-flex cursor-interaction items-center gap-1 self-start text-token-description-foreground hover:text-token-foreground`,
              onClick: u,
              children: [
                (0, W.jsx)(`span`, {
                  children:
                    l === `expanded`
                      ? (0, W.jsx)(d, {
                          id: `codex.userMessage.showLess`,
                          defaultMessage: `Show less`,
                          description: `Button label for collapsing an expanded user message`,
                        })
                      : (0, W.jsx)(d, {
                          id: `codex.userMessage.showMore`,
                          defaultMessage: `Show more`,
                          description: `Button label for expanding a truncated user message`,
                        }),
                }),
                (0, W.jsx)(k, {
                  className:
                    l === `expanded` ? `icon-2xs rotate-180` : `icon-2xs`,
                }),
              ],
            })),
      (t[12] = l),
      (t[13] = u),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== p || t[16] !== m
      ? ((h = (0, W.jsxs)(`div`, {
          className: `flex flex-col items-end gap-1`,
          children: [p, m],
        })),
        (t[15] = p),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
var ke = 7;
function Ae({ intl: e, sentAtMs: t, now: n }) {
  let r = new Date(t),
    i = je(r, n);
  return i === 0
    ? e.formatDate(r, { hour: `numeric`, minute: `2-digit` })
    : i < 0 && i > -ke
      ? e.formatDate(r, { weekday: `long`, hour: `numeric`, minute: `2-digit` })
      : e.formatDate(r, {
          month: `short`,
          day: `numeric`,
          hour: `numeric`,
          minute: `2-digit`,
        });
}
function je(e, t) {
  let n = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
    r = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  return Math.round((n.getTime() - r.getTime()) / 864e5);
}
function Me(e) {
  let t = (0, H.c)(9),
    { className: n, sentAtMs: r, nowMs: i } = e,
    a = c();
  if (r == null) return null;
  let o;
  t[0] === n
    ? (o = t[1])
    : ((o = s(`text-xs text-token-text-tertiary`, n)), (t[0] = n), (t[1] = o));
  let l;
  t[2] !== a || t[3] !== i || t[4] !== r
    ? ((l = Ae({
        intl: a,
        sentAtMs: r,
        now: i == null ? new Date() : new Date(i),
      })),
      (t[2] = a),
      (t[3] = i),
      (t[4] = r),
      (t[5] = l))
    : (l = t[5]);
  let u;
  return (
    t[6] !== o || t[7] !== l
      ? ((u = (0, W.jsx)(`span`, { className: o, children: l })),
        (t[6] = o),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
function Ne({
  cwd: e,
  hostId: t,
  initialMessage: n,
  onCancel: r,
  onDraftChange: i,
  onSubmit: a,
}) {
  let o = c(),
    { enterBehavior: s } = he(),
    l = (0, U.useRef)(null),
    [u] = (0, U.useState)(() =>
      ue(n, {
        defaultTextKind: w(n) ? `prompt` : `plain`,
        enterBehavior: s,
        enableSlashCommands: !1,
      }),
    );
  ((0, U.useEffect)(() => {
    u.setEnterBehavior(s);
  }, [u, s]),
    ce(
      (0, U.useCallback)(() => {
        u.view.isDestroyed || u.destroy();
      }, [u]),
    ));
  let f = (0, U.useMemo)(() => {
      if (e != null) return [e];
    }, [e]),
    p = P(u),
    m = se(u),
    h = ge({ anchorRef: l, isActive: p.ui?.active ?? !1 }),
    g = ge({ anchorRef: l, isActive: m.ui?.active ?? !1 }),
    [_, v] = (0, U.useState)(!1),
    y = (0, U.useEffectEvent)(() => {
      i(u.getText());
    });
  (0, U.useEffect)(() => z(u.view, y), [u]);
  let b = async () => {
    if (!_) {
      v(!0);
      try {
        await a(u.getText().trim());
      } finally {
        v(!1);
      }
    }
  };
  return (0, W.jsx)(`form`, {
    className: `relative flex w-full flex-col rounded-3xl bg-token-foreground/5`,
    onSubmit: (e) => {
      (e.preventDefault(), b());
    },
    children: (0, W.jsxs)(`div`, {
      ref: l,
      className: `relative z-10 flex min-h-0 flex-1 flex-col`,
      children: [
        (0, W.jsx)(B, {
          anchorRef: l,
          composerController: u,
          isActive: p.ui?.active ?? !1,
          mentionUiState: p.ui,
          placement: h,
          children: (0, W.jsx)(R, {
            hostId: t,
            onAddContext: p.addMention,
            onRequestClose: p.closeAutocomplete,
            onUpdateSelectedMention: p.setSelectedMention,
            query: p.ui?.query ?? ``,
            roots: f,
            skillRoots: f,
            source: p.ui?.source ?? null,
          }),
        }),
        (0, W.jsx)(le, {
          autocomplete: m,
          cwd: e ?? void 0,
          roots: f,
          hostId: t,
          composerController: u,
          anchorRef: l,
          placement: g,
        }),
        (0, W.jsx)(me, {
          composerController: u,
          hostId: t,
          roots: f,
          shouldLoadPlugins: p.ui?.active === !0,
        }),
        (0, W.jsx)(`div`, {
          className: `mb-2 flex-grow overflow-y-auto px-3 pt-3`,
          children: (0, W.jsx)(oe, {
            ariaLabel: o.formatMessage({
              id: `codex.userMessage.editTextareaAriaLabel`,
              defaultMessage: `Edit message`,
              description: `Aria label for the editor used to edit the previous user message`,
            }),
            className: `text-base`,
            composerController: u,
            placeholder: o.formatMessage({
              id: `codex.userMessage.editPlaceholder`,
              defaultMessage: `Edit message`,
              description: `Placeholder shown in the editor used to edit a previous user message`,
            }),
            onMentionHandler: p.handleMentionEvent,
            onSkillMentionHandler: m.handleMentionEvent,
            onSubmit: () => {
              b();
            },
          }),
        }),
        (0, W.jsxs)(`div`, {
          className: `flex justify-end gap-1.5 px-3 pb-3`,
          children: [
            (0, W.jsx)(T, {
              color: `outline`,
              size: `toolbar`,
              disabled: _,
              onClick: r,
              children: (0, W.jsx)(d, {
                id: `codex.userMessage.cancelEditMessage`,
                defaultMessage: `Cancel`,
                description: `Button label for canceling an edited user message`,
              }),
            }),
            (0, W.jsx)(T, {
              color: `primary`,
              size: `toolbar`,
              loading: _,
              type: `submit`,
              children: (0, W.jsx)(d, {
                id: `codex.userMessage.sendEditedMessage`,
                defaultMessage: `Send`,
                description: `Button label for submitting an edited user message`,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var Pe = _(C, (e) => null);
function q(e) {
  let t = (0, H.c)(89),
    {
      message: r,
      sentAtMs: a,
      collapsedLineCount: o,
      alwaysShowActions: l,
      hideActions: u,
      messageStatus: h,
      messageStatusIcon: g,
      hookStats: _,
      threadDetailLevel: v,
      referencesPriorConversation: y,
      reviewMode: b,
      pullRequestFixMode: w,
      autoResolveSync: ee,
      commentCount: te,
      pullRequestCheckCount: E,
      hasPullRequestMergeConflict: ne,
      onEditMessage: D,
      threadId: O,
      turnId: k,
      cwd: A,
      hostId: j,
    } = e,
    M = l === void 0 ? !1 : l,
    N = u === void 0 ? !1 : u,
    P = y === void 0 ? !1 : y,
    oe = b === void 0 ? !1 : b,
    se = w === void 0 ? !1 : w,
    ce = ee === void 0 ? !1 : ee,
    le = te === void 0 ? 0 : te,
    ue = E === void 0 ? 0 : E,
    de = ne === void 0 ? !1 : ne,
    fe = f(C),
    pe = i(r),
    F = pe.trim(),
    I = D != null && k != null && !pe.startsWith(`PLEASE IMPLEMENT THIS PLAN:`),
    [me, he] = (0, U.useState)(!1),
    L = p(Pe, k),
    R = I && L != null,
    z = c(),
    B = m(x),
    ge = pe.startsWith(`PLEASE IMPLEMENT THIS PLAN:`)
      ? z.formatMessage({
          id: `codex.userMessage.implementPlan`,
          defaultMessage: `Implement plan`,
          description: `Display text for the synthetic implement-plan follow-up prompt`,
        })
      : pe,
    V = ge.trim().length > 0,
    _e = P || oe || se || ce || le > 0 || ue > 0 || de,
    ve = V || !_e,
    ye = _e || h != null || !N,
    xe;
  t[0] !== B || t[1] !== he || t[2] !== O || t[3] !== F || t[4] !== k
    ? ((xe = () => {
        (O != null &&
          k != null &&
          B.submitCodexAnalyticsEvent?.({
            action: `copy`,
            eventKind: `action`,
            metadata: { surface: `user_message` },
            threadId: O,
            turnId: k,
          }),
          navigator.clipboard.writeText(n(F)).then(() => {
            (he(!0), setTimeout(() => he(!1), 1500));
          }));
      }),
      (t[0] = B),
      (t[1] = he),
      (t[2] = O),
      (t[3] = F),
      (t[4] = k),
      (t[5] = xe))
    : (xe = t[5]);
  let Se = xe,
    Ce;
  t[6] !== fe || t[7] !== k
    ? ((Ce = (e) => {
        fe.set(Pe, k, e);
      }),
      (t[6] = fe),
      (t[7] = k),
      (t[8] = Ce))
    : (Ce = t[8]);
  let G = Ce,
    we;
  t[9] !== D || t[10] !== G
    ? ((we = async (e) => {
        D != null && (await D(e), G(null));
      }),
      (t[9] = D),
      (t[10] = G),
      (t[11] = we))
    : (we = t[11]);
  let Te = we,
    Ee;
  t[12] !== L ||
  t[13] !== B ||
  t[14] !== G ||
  t[15] !== O ||
  t[16] !== F ||
  t[17] !== k
    ? ((Ee = () => {
        (O != null &&
          k != null &&
          B.submitCodexAnalyticsEvent?.({
            action: `edit`,
            eventKind: `action`,
            metadata: { surface: `user_message` },
            threadId: O,
            turnId: k,
          }),
          L ?? G(F));
      }),
      (t[12] = L),
      (t[13] = B),
      (t[14] = G),
      (t[15] = O),
      (t[16] = F),
      (t[17] = k),
      (t[18] = Ee))
    : (Ee = t[18]);
  let K = Ee,
    De;
  t[19] === K
    ? (De = t[20])
    : ((De = (e) => {
        (e.key !== `Enter` && e.key !== ` `) || (e.preventDefault(), K());
      }),
      (t[19] = K),
      (t[20] = De));
  let ke = De,
    Ae;
  t[21] !== o || t[22] !== A || t[23] !== ge || t[24] !== V || t[25] !== j
    ? ((Ae = V
        ? (0, W.jsx)(Oe, {
            text: ge,
            cwd: A ?? null,
            hostId: j,
            collapsedLineCount: o,
          })
        : (0, W.jsx)(`div`, {
            className: `text-size-chat mb-px text-token-description-foreground`,
            children: (0, W.jsx)(d, {
              id: `codex.userMessage.noContent`,
              defaultMessage: `(No content)`,
              description: `Text for when a user message has no content`,
            }),
          })),
      (t[21] = o),
      (t[22] = A),
      (t[23] = ge),
      (t[24] = V),
      (t[25] = j),
      (t[26] = Ae))
    : (Ae = t[26]);
  let je = Ae,
    q,
    Y;
  if (
    t[27] !== I ||
    t[28] !== A ||
    t[29] !== L ||
    t[30] !== ke ||
    t[31] !== K ||
    t[32] !== Te ||
    t[33] !== V ||
    t[34] !== j ||
    t[35] !== z ||
    t[36] !== R ||
    t[37] !== G ||
    t[38] !== ve ||
    t[39] !== je
  ) {
    let e = s(
      `bg-token-foreground/5 max-w-[77%] min-w-0 overflow-hidden break-words rounded-2xl px-3 py-2 [&_.contain-inline-size]:[contain:initial]`,
      !V && `leading-none`,
    );
    ((q = `group flex w-full flex-col items-end justify-end gap-1`),
      (Y = R
        ? (0, W.jsx)(`div`, {
            className: `w-full p-px`,
            children: (0, W.jsx)(Ne, {
              cwd: A ?? null,
              hostId: j,
              initialMessage: L.trim(),
              onCancel: () => {
                G(null);
              },
              onDraftChange: (e) => {
                G(e);
              },
              onSubmit: Te,
            }),
          })
        : ve
          ? I
            ? (0, W.jsx)(`div`, {
                role: `button`,
                tabIndex: 0,
                className: s(
                  e,
                  `cursor-interaction text-left focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
                ),
                "aria-label": z.formatMessage({
                  id: `codex.userMessage.editBubbleAriaLabel`,
                  defaultMessage: `Edit user message`,
                  description: `Aria label for an editable user message bubble`,
                }),
                onKeyDown: ke,
                onDoubleClick: K,
                children: je,
              })
            : (0, W.jsx)(`div`, { className: e, children: je })
          : null),
      (t[27] = I),
      (t[28] = A),
      (t[29] = L),
      (t[30] = ke),
      (t[31] = K),
      (t[32] = Te),
      (t[33] = V),
      (t[34] = j),
      (t[35] = z),
      (t[36] = R),
      (t[37] = G),
      (t[38] = ve),
      (t[39] = je),
      (t[40] = q),
      (t[41] = Y));
  } else ((q = t[40]), (Y = t[41]));
  let Fe = !ye && `hidden`,
    X;
  t[42] === Fe
    ? (X = t[43])
    : ((X = s(`flex flex-row-reverse items-center gap-1`, Fe)),
      (t[42] = Fe),
      (t[43] = X));
  let Ie;
  t[44] !== h || t[45] !== g
    ? ((Ie =
        h == null
          ? null
          : (0, W.jsxs)(`div`, {
              className: `ms-1 mr-1 flex items-center gap-2`,
              children: [g, (0, W.jsx)(J, { children: h })],
            })),
      (t[44] = h),
      (t[45] = g),
      (t[46] = Ie))
    : (Ie = t[46]);
  let Z;
  t[47] === P
    ? (Z = t[48])
    : ((Z =
        P &&
        (0, W.jsx)(J, {
          children: (0, W.jsx)(d, {
            id: `codex.userMessage.priorConversation`,
            defaultMessage: `References prior conversation`,
            description: `Text for the prior conversation button`,
          }),
        })),
      (t[47] = P),
      (t[48] = Z));
  let Le;
  t[49] === oe
    ? (Le = t[50])
    : ((Le =
        oe &&
        (0, W.jsx)(J, {
          children: (0, W.jsx)(d, {
            id: `codex.userMessage.reviewMode`,
            defaultMessage: `Review mode`,
            description: `Chip shown when a user asked for a code review`,
          }),
        })),
      (t[49] = oe),
      (t[50] = Le));
  let Re;
  t[51] === se
    ? (Re = t[52])
    : ((Re =
        se &&
        (0, W.jsx)(J, {
          children: (0, W.jsx)(d, {
            id: `codex.userMessage.pullRequestFixMode`,
            defaultMessage: `PR fix`,
            description: `Chip shown when a user started a pull request CI fix task`,
          }),
        })),
      (t[51] = se),
      (t[52] = Re));
  let ze;
  t[53] === ce
    ? (ze = t[54])
    : ((ze =
        ce &&
        (0, W.jsx)(J, {
          children: (0, W.jsx)(d, {
            id: `codex.userMessage.autoResolveSync`,
            defaultMessage: `Auto resolve conflicts`,
            description: `Chip shown when the user requested auto resolve for handoff conflicts`,
          }),
        })),
      (t[53] = ce),
      (t[54] = ze));
  let Q;
  t[55] === le
    ? (Q = t[56])
    : ((Q =
        le > 0 &&
        (0, W.jsx)(J, {
          children: (0, W.jsx)(d, {
            id: `codex.userMessage.commentCount`,
            defaultMessage: `{count, plural, one {# comment} other {# comments}}`,
            description: `Chip shown when the user included inline diff comments in the prompt`,
            values: { count: le },
          }),
        })),
      (t[55] = le),
      (t[56] = Q));
  let Be;
  t[57] === ue
    ? (Be = t[58])
    : ((Be =
        ue > 0 &&
        (0, W.jsx)(J, {
          children: (0, W.jsx)(d, {
            id: `codex.userMessage.pullRequestCheckCount`,
            defaultMessage: `{count, plural, one {# CI test} other {# CI tests}}`,
            description: `Chip shown when the user included failing PR checks in the prompt`,
            values: { count: ue },
          }),
        })),
      (t[57] = ue),
      (t[58] = Be));
  let Ve;
  t[59] === de
    ? (Ve = t[60])
    : ((Ve =
        de &&
        (0, W.jsx)(J, {
          children: (0, W.jsx)(d, {
            id: `codex.userMessage.pullRequestMergeConflict`,
            defaultMessage: `Merge conflicts`,
            description: `Chip shown when the user included a pull request merge conflict attachment in the prompt`,
          }),
        })),
      (t[59] = de),
      (t[60] = Ve));
  let He;
  t[61] !== M ||
  t[62] !== I ||
  t[63] !== Se ||
  t[64] !== K ||
  t[65] !== V ||
  t[66] !== N ||
  t[67] !== _ ||
  t[68] !== z ||
  t[69] !== R ||
  t[70] !== me ||
  t[71] !== a ||
  t[72] !== v
    ? ((He =
        V && !R && !N
          ? (0, W.jsxs)(`div`, {
              className: s(
                `mr-1 ms-1 flex items-center gap-2`,
                M
                  ? void 0
                  : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`,
              ),
              children: [
                a == null
                  ? null
                  : (0, W.jsx)(`span`, {
                      className: `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`,
                      children: (0, W.jsx)(Me, { sentAtMs: a }),
                    }),
                (0, W.jsxs)(`div`, {
                  className: `flex items-center gap-1`,
                  children: [
                    _ == null
                      ? null
                      : (0, W.jsx)(be, { stats: _, threadDetailLevel: v }),
                    me
                      ? (0, W.jsx)(S, {
                          tooltipContent: (0, W.jsx)(d, {
                            id: `codex.userMessage.copiedTooltip`,
                            defaultMessage: `Copied`,
                            description: `Tooltip on copy message icon button when copied`,
                          }),
                          disabled: !0,
                          children: (0, W.jsx)(T, {
                            color: `ghost`,
                            size: `icon`,
                            "aria-label": z.formatMessage({
                              id: `codex.userMessage.copiedAriaLabel`,
                              defaultMessage: `Copied`,
                              description: `Aria label for the copy button after the content has been copied`,
                            }),
                            children: (0, W.jsx)(re, { className: `icon-xs` }),
                          }),
                        })
                      : (0, W.jsx)(S, {
                          tooltipContent: (0, W.jsx)(d, {
                            id: `codex.userMessage.copyTooltip`,
                            defaultMessage: `Copy`,
                            description: `Tooltip on copy message icon button`,
                          }),
                          children: (0, W.jsx)(T, {
                            color: `ghost`,
                            size: `icon`,
                            "aria-label": z.formatMessage({
                              id: `codex.userMessage.copyAriaLabel`,
                              defaultMessage: `Copy message`,
                              description: `Aria label for the button that copies the user's message`,
                            }),
                            onClick: Se,
                            children: (0, W.jsx)(ae, { className: `icon-xs` }),
                          }),
                        }),
                    I
                      ? (0, W.jsx)(S, {
                          tooltipContent: (0, W.jsx)(d, {
                            id: `codex.userMessage.editTooltip`,
                            defaultMessage: `Edit`,
                            description: `Tooltip on edit message icon button`,
                          }),
                          children: (0, W.jsx)(T, {
                            color: `ghost`,
                            size: `icon`,
                            "aria-label": z.formatMessage({
                              id: `codex.userMessage.editAriaLabel`,
                              defaultMessage: `Edit message`,
                              description: `Aria label for the button that edits the previous user message`,
                            }),
                            onClick: K,
                            children: (0, W.jsx)(ie, { className: `icon-xs` }),
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            })
          : null),
      (t[61] = M),
      (t[62] = I),
      (t[63] = Se),
      (t[64] = K),
      (t[65] = V),
      (t[66] = N),
      (t[67] = _),
      (t[68] = z),
      (t[69] = R),
      (t[70] = me),
      (t[71] = a),
      (t[72] = v),
      (t[73] = He))
    : (He = t[73]);
  let $;
  t[74] !== X ||
  t[75] !== Ie ||
  t[76] !== Z ||
  t[77] !== Le ||
  t[78] !== Re ||
  t[79] !== ze ||
  t[80] !== Q ||
  t[81] !== Be ||
  t[82] !== Ve ||
  t[83] !== He
    ? (($ = (0, W.jsxs)(`div`, {
        className: X,
        children: [Ie, Z, Le, Re, ze, Q, Be, Ve, He],
      })),
      (t[74] = X),
      (t[75] = Ie),
      (t[76] = Z),
      (t[77] = Le),
      (t[78] = Re),
      (t[79] = ze),
      (t[80] = Q),
      (t[81] = Be),
      (t[82] = Ve),
      (t[83] = He),
      (t[84] = $))
    : ($ = t[84]);
  let Ue;
  return (
    t[85] !== q || t[86] !== Y || t[87] !== $
      ? ((Ue = (0, W.jsxs)(`div`, { className: q, children: [Y, $] })),
        (t[85] = q),
        (t[86] = Y),
        (t[87] = $),
        (t[88] = Ue))
      : (Ue = t[88]),
    Ue
  );
}
function J(e) {
  let t = (0, H.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = s(`text-token-description-foreground text-xs`, n)),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, W.jsx)(`span`, { className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
var Y = t((e, t) => {
  var n = [
      [
        { color: `0, 0, 0`, class: `ansi-black` },
        { color: `187, 0, 0`, class: `ansi-red` },
        { color: `0, 187, 0`, class: `ansi-green` },
        { color: `187, 187, 0`, class: `ansi-yellow` },
        { color: `0, 0, 187`, class: `ansi-blue` },
        { color: `187, 0, 187`, class: `ansi-magenta` },
        { color: `0, 187, 187`, class: `ansi-cyan` },
        { color: `255,255,255`, class: `ansi-white` },
      ],
      [
        { color: `85, 85, 85`, class: `ansi-bright-black` },
        { color: `255, 85, 85`, class: `ansi-bright-red` },
        { color: `0, 255, 0`, class: `ansi-bright-green` },
        { color: `255, 255, 85`, class: `ansi-bright-yellow` },
        { color: `85, 85, 255`, class: `ansi-bright-blue` },
        { color: `255, 85, 255`, class: `ansi-bright-magenta` },
        { color: `85, 255, 255`, class: `ansi-bright-cyan` },
        { color: `255, 255, 255`, class: `ansi-bright-white` },
      ],
    ],
    r =
      /(https?:\/\/(?:[A-Za-z0-9#;/?:@=+$',_.!~*()[\]-]|&amp;|%[A-Fa-f0-9]{2})+)/gm;
  t.exports = class e {
    static escapeForHtml(t) {
      return new e().escapeForHtml(t);
    }
    static linkify(t) {
      return new e().linkify(t);
    }
    static ansiToHtml(t, n) {
      return new e().ansiToHtml(t, n);
    }
    static ansiToJson(t, n) {
      return new e().ansiToJson(t, n);
    }
    static ansiToText(t) {
      return new e().ansiToText(t);
    }
    constructor() {
      ((this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null),
        (this.bright = 0),
        (this.decorations = []));
    }
    setupPalette() {
      this.PALETTE_COLORS = [];
      for (let e = 0; e < 2; ++e)
        for (let t = 0; t < 8; ++t) this.PALETTE_COLORS.push(n[e][t].color);
      let e = [0, 95, 135, 175, 215, 255],
        t = (t, n, r) => e[t] + `, ` + e[n] + `, ` + e[r];
      for (let e = 0; e < 6; ++e)
        for (let n = 0; n < 6; ++n)
          for (let r = 0; r < 6; ++r) this.PALETTE_COLORS.push(t(e, n, r));
      let r = 8;
      for (let e = 0; e < 24; ++e, r += 10)
        this.PALETTE_COLORS.push(r + `, ` + r + `, ` + r);
    }
    escapeForHtml(e) {
      return e.replace(/[&<>\"]/gm, (e) =>
        e == `&`
          ? `&amp;`
          : e == `"`
            ? `&quot;`
            : e == `<`
              ? `&lt;`
              : e == `>`
                ? `&gt;`
                : ``,
      );
    }
    linkify(e) {
      return e.replace(r, (e) => `<a href="${e}">${e}</a>`);
    }
    ansiToHtml(e, t) {
      return this.process(e, t, !0);
    }
    ansiToJson(e, t) {
      return (
        (t ||= {}),
        (t.json = !0),
        (t.clearLine = !1),
        this.process(e, t, !0)
      );
    }
    ansiToText(e) {
      return this.process(e, {}, !1);
    }
    process(e, t, n) {
      let r = this,
        i = e.split(/\033\[/),
        a = i.shift();
      ((t ??= {}), (t.clearLine = /\r/.test(e)));
      let o = i.map((e) => this.processChunk(e, t, n));
      if (t && t.json) {
        let e = r.processChunkJson(``);
        return (
          (e.content = a),
          (e.clearLine = t.clearLine),
          o.unshift(e),
          t.remove_empty && (o = o.filter((e) => !e.isEmpty())),
          o
        );
      } else o.unshift(a);
      return o.join(``);
    }
    processChunkJson(e, t, r) {
      t = t === void 0 ? {} : t;
      let i = (t.use_classes = t.use_classes !== void 0 && t.use_classes),
        a = (t.key = i ? `class` : `color`),
        o = {
          content: e,
          fg: null,
          bg: null,
          fg_truecolor: null,
          bg_truecolor: null,
          isInverted: !1,
          clearLine: t.clearLine,
          decoration: null,
          decorations: [],
          was_processed: !1,
          isEmpty: () => !o.content,
        },
        s = e.match(
          /^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m,
        );
      if (!s) return o;
      o.content = s[4];
      let c = s[2].split(`;`);
      if (s[1] !== `` || s[3] !== `m` || !r) return o;
      let l = this;
      for (; c.length > 0; ) {
        let e = c.shift(),
          t = parseInt(e);
        if (isNaN(t) || t === 0) ((l.fg = l.bg = null), (l.decorations = []));
        else if (t === 1) l.decorations.push(`bold`);
        else if (t === 2) l.decorations.push(`dim`);
        else if (t === 3) l.decorations.push(`italic`);
        else if (t === 4) l.decorations.push(`underline`);
        else if (t === 5) l.decorations.push(`blink`);
        else if (t === 7) l.decorations.push(`reverse`);
        else if (t === 8) l.decorations.push(`hidden`);
        else if (t === 9) l.decorations.push(`strikethrough`);
        else if (t === 21) l.removeDecoration(`bold`);
        else if (t === 22)
          (l.removeDecoration(`bold`), l.removeDecoration(`dim`));
        else if (t === 23) l.removeDecoration(`italic`);
        else if (t === 24) l.removeDecoration(`underline`);
        else if (t === 25) l.removeDecoration(`blink`);
        else if (t === 27) l.removeDecoration(`reverse`);
        else if (t === 28) l.removeDecoration(`hidden`);
        else if (t === 29) l.removeDecoration(`strikethrough`);
        else if (t === 39) l.fg = null;
        else if (t === 49) l.bg = null;
        else if (t >= 30 && t < 38) l.fg = n[0][t % 10][a];
        else if (t >= 90 && t < 98) l.fg = n[1][t % 10][a];
        else if (t >= 40 && t < 48) l.bg = n[0][t % 10][a];
        else if (t >= 100 && t < 108) l.bg = n[1][t % 10][a];
        else if (t === 38 || t === 48) {
          let e = t === 38;
          if (c.length >= 1) {
            let t = c.shift();
            if (t === `5` && c.length >= 1) {
              let t = parseInt(c.shift());
              if (t >= 0 && t <= 255)
                if (!i)
                  (this.PALETTE_COLORS || l.setupPalette(),
                    e
                      ? (l.fg = this.PALETTE_COLORS[t])
                      : (l.bg = this.PALETTE_COLORS[t]));
                else {
                  let r =
                    t >= 16
                      ? `ansi-palette-` + t
                      : n[t > 7 ? 1 : 0][t % 8].class;
                  e ? (l.fg = r) : (l.bg = r);
                }
            } else if (t === `2` && c.length >= 3) {
              let t = parseInt(c.shift()),
                n = parseInt(c.shift()),
                r = parseInt(c.shift());
              if (
                t >= 0 &&
                t <= 255 &&
                n >= 0 &&
                n <= 255 &&
                r >= 0 &&
                r <= 255
              ) {
                let a = t + `, ` + n + `, ` + r;
                i
                  ? e
                    ? ((l.fg = `ansi-truecolor`), (l.fg_truecolor = a))
                    : ((l.bg = `ansi-truecolor`), (l.bg_truecolor = a))
                  : e
                    ? (l.fg = a)
                    : (l.bg = a);
              }
            }
          }
        }
      }
      return l.fg === null && l.bg === null && l.decorations.length === 0
        ? o
        : ((o.fg = l.fg),
          (o.bg = l.bg),
          (o.fg_truecolor = l.fg_truecolor),
          (o.bg_truecolor = l.bg_truecolor),
          (o.decorations = l.decorations),
          (o.decoration = l.decorations.slice(-1).pop() || null),
          (o.was_processed = !0),
          o);
    }
    processChunk(e, t, r) {
      t ||= {};
      let i = this.processChunkJson(e, t, r),
        a = t.use_classes;
      if (
        ((i.decorations = i.decorations.filter((e) => {
          if (e === `reverse`) {
            ((i.fg ||= n[0][7][a ? `class` : `color`]),
              (i.bg ||= n[0][0][a ? `class` : `color`]));
            let e = i.fg;
            ((i.fg = i.bg), (i.bg = e));
            let t = i.fg_truecolor;
            return (
              (i.fg_truecolor = i.bg_truecolor),
              (i.bg_truecolor = t),
              (i.isInverted = !0),
              !1
            );
          }
          return !0;
        })),
        t.json)
      )
        return i;
      if (i.isEmpty()) return ``;
      if (!i.was_processed) return i.content;
      let o = [],
        s = [],
        c = [],
        l = {},
        u = (e) => {
          let t = [],
            n;
          for (n in e)
            e.hasOwnProperty(n) &&
              t.push(`data-` + n + `="` + this.escapeForHtml(e[n]) + `"`);
          return t.length > 0 ? ` ` + t.join(` `) : ``;
        };
      return (
        i.isInverted && (l[`ansi-is-inverted`] = `true`),
        i.fg &&
          (a
            ? (o.push(i.fg + `-fg`),
              i.fg_truecolor !== null &&
                ((l[`ansi-truecolor-fg`] = i.fg_truecolor),
                (i.fg_truecolor = null)))
            : o.push(`color:rgb(` + i.fg + `)`)),
        i.bg &&
          (a
            ? (o.push(i.bg + `-bg`),
              i.bg_truecolor !== null &&
                ((l[`ansi-truecolor-bg`] = i.bg_truecolor),
                (i.bg_truecolor = null)))
            : o.push(`background-color:rgb(` + i.bg + `)`)),
        i.decorations.forEach((e) => {
          if (a) {
            s.push(`ansi-` + e);
            return;
          }
          e === `bold`
            ? s.push(`font-weight:bold`)
            : e === `dim`
              ? s.push(`opacity:0.5`)
              : e === `italic`
                ? s.push(`font-style:italic`)
                : e === `hidden`
                  ? s.push(`visibility:hidden`)
                  : e === `strikethrough`
                    ? c.push(`line-through`)
                    : c.push(e);
        }),
        c.length && s.push(`text-decoration:` + c.join(` `)),
        a
          ? `<span class="` +
            o.concat(s).join(` `) +
            `"` +
            u(l) +
            `>` +
            i.content +
            `</span>`
          : `<span style="` +
            o.concat(s).join(`;`) +
            `"` +
            u(l) +
            `>` +
            i.content +
            `</span>`
      );
    }
    removeDecoration(e) {
      let t = this.decorations.indexOf(e);
      t >= 0 && this.decorations.splice(t, 1);
    }
  };
});
function Fe(e) {
  if (!e) return ``;
  if (!/\r/.test(e)) return e;
  let t = e.replace(
    /\r+\n/gm,
    `
`,
  );
  for (; /\r./.test(t); )
    t = t.replace(
      /^([^\r\n]*)\r+([^\r\n]+)/gm,
      (e, t, n) => n + t.slice(n.length),
    );
  return t;
}
var X = e(Y(), 1),
  Ie = RegExp(`[^\\n]\b`, `gm`);
function Z(e) {
  let t = (0, H.c)(7),
    { children: n, className: r } = e,
    i,
    a;
  if (t[0] !== n || t[1] !== r) {
    let e = X.default.ansiToJson(Fe(ze(n)), {
      json: !0,
      remove_empty: !0,
      use_classes: !0,
    });
    ((i = r), (a = e.map(Le)), (t[0] = n), (t[1] = r), (t[2] = i), (t[3] = a));
  } else ((i = t[2]), (a = t[3]));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, W.jsx)(`code`, { className: i, children: a })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Le(e, t) {
  return (0, W.jsx)(
    `span`,
    {
      className: s(e.fg != null && `${e.fg}-fg`, e.bg != null && `${e.bg}-bg`),
      style: Re(e),
      children: e.content,
    },
    `${t}-${e.content}`,
  );
}
function Re(e) {
  let t = e.decoration == null ? [] : [e.decoration];
  if (t.length === 0) return;
  let n = {},
    r = [];
  return (
    t.includes(`bold`) && (n.fontWeight = `bold`),
    t.includes(`dim`) && (n.opacity = `0.5`),
    t.includes(`italic`) && (n.fontStyle = `italic`),
    t.includes(`hidden`) && (n.visibility = `hidden`),
    t.includes(`underline`) && r.push(`underline`),
    t.includes(`strikethrough`) && r.push(`line-through`),
    r.length > 0 && (n.textDecorationLine = r.join(` `)),
    n
  );
}
function ze(e) {
  let t = e,
    n = t;
  do ((t = n), (n = t.replace(Ie, ``)));
  while (n.length < t.length);
  return t;
}
function Q(e) {
  let t = (0, H.c)(14),
    {
      children: n,
      column: r,
      cwd: i,
      endLine: a,
      hostId: o,
      line: s,
      openInSidePanel: c,
      path: l,
    } = e,
    u = c === void 0 ? !1 : c,
    d = f(C),
    p;
  t[0] !== r ||
  t[1] !== i ||
  t[2] !== a ||
  t[3] !== o ||
  t[4] !== s ||
  t[5] !== u ||
  t[6] !== l
    ? ((p = {
        column: r,
        cwd: i,
        endLine: a,
        hostId: o,
        line: s,
        openInSidePanel: u,
        path: l,
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = u),
      (t[6] = l),
      (t[7] = p))
    : (p = t[7]);
  let m = p,
    h;
  t[8] !== m || t[9] !== d
    ? ((h = () => j(d, m)), (t[8] = m), (t[9] = d), (t[10] = h))
    : (h = t[10]);
  let g;
  return (
    t[11] !== n || t[12] !== h
      ? ((g = (0, W.jsx)(O, { getItems: h, children: n })),
        (t[11] = n),
        (t[12] = h),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
function Be(e) {
  let t = (0, H.c)(25),
    { src: n, conversationId: i } = e,
    a = c(),
    o = l(),
    s = p(r, i) ?? `local`,
    [u, d] = (0, U.useState)(!1),
    f;
  t[0] === n
    ? (f = t[1])
    : ((f = () => (D(n) == null ? n : null)), (t[0] = n), (t[1] = f));
  let [m, h] = (0, U.useState)(f),
    g;
  t[2] === a
    ? (g = t[3])
    : ((g = a.formatMessage({
        id: `codex.localConversation.userImageAttachment`,
        defaultMessage: `User attachment`,
        description: `Alt text for user image attachment in local conversation`,
      })),
      (t[2] = a),
      (t[3] = g));
  let _ = g,
    v;
  t[4] === a
    ? (v = t[5])
    : ((v = a.formatMessage({
        id: `codex.localConversation.closeImagePreview`,
        defaultMessage: `Close image preview`,
        description: `Aria label for closing the image preview dialog in local conversation`,
      })),
      (t[4] = a),
      (t[5] = v));
  let y = v,
    b,
    x;
  if (
    (t[6] !== s || t[7] !== o || t[8] !== n
      ? ((b = () => {
          let e = D(n);
          if (e == null) {
            h(n);
            return;
          }
          let t = !1;
          return (
            h(null),
            ne(e, s, o).then((e) => {
              t || h(e);
            }),
            () => {
              t = !0;
            }
          );
        }),
        (x = [s, o, n]),
        (t[6] = s),
        (t[7] = o),
        (t[8] = n),
        (t[9] = b),
        (t[10] = x))
      : ((b = t[9]), (x = t[10])),
    (0, U.useEffect)(b, x),
    m == null)
  ) {
    let e;
    return (
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, W.jsx)(`div`, {
            className: `flex size-16 items-center justify-center rounded-lg border border-token-border`,
            children: (0, W.jsx)(ee, { className: `icon-xs` }),
          })),
          (t[11] = e))
        : (e = t[11]),
      e
    );
  }
  let S;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), d(!0));
      }),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] !== _ || t[14] !== m
    ? ((C = (0, W.jsx)(`img`, {
        src: m,
        className: `h-full w-full rounded-md object-cover`,
        referrerPolicy: `no-referrer`,
        alt: _,
      })),
      (t[13] = _),
      (t[14] = m),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== _ || t[17] !== C
    ? ((w = (0, W.jsx)(`div`, {
        className: `size-16 cursor-interaction rounded-lg border border-token-border focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border`,
        role: `button`,
        tabIndex: 0,
        "aria-label": _,
        onKeyDown: S,
        children: C,
      })),
      (t[16] = _),
      (t[17] = C),
      (t[18] = w))
    : (w = t[18]);
  let T;
  return (
    t[19] !== _ || t[20] !== y || t[21] !== u || t[22] !== m || t[23] !== w
      ? ((T = (0, W.jsx)(M, {
          src: m,
          alt: _,
          open: u,
          onOpenChange: d,
          closeAriaLabel: y,
          contentMaxWidthClassName: `max-w-[min(90vw,calc(var(--thread-content-max-width)+16rem))]`,
          imageReferrerPolicy: `no-referrer`,
          triggerContent: w,
        })),
        (t[19] = _),
        (t[20] = y),
        (t[21] = u),
        (t[22] = m),
        (t[23] = w),
        (t[24] = T))
      : (T = t[24]),
    T
  );
}
function Ve(e) {
  let t = (0, H.c)(36),
    { appshotContext: n, conversationId: i } = e,
    a = c(),
    o = l(),
    s = p(r, i) ?? `local`,
    d;
  t[0] !== n.bundleIdentifier || t[1] !== n.imageName
    ? ((d = { bundleIdentifier: n.bundleIdentifier, imageName: n.imageName }),
      (t[0] = n.bundleIdentifier),
      (t[1] = n.imageName),
      (t[2] = d))
    : (d = t[2]);
  let f = p(de, d),
    m = n.imageDataUrl ?? n.imagePath,
    g;
  t[3] === m ? (g = t[4]) : ((g = D(m)), (t[3] = m), (t[4] = g));
  let _ = g,
    y;
  t[5] !== _ || t[6] !== s
    ? ((y = [`local-user-appshot-screenshot-data-url`, s, _]),
      (t[5] = _),
      (t[6] = s),
      (t[7] = y))
    : (y = t[7]);
  let b;
  t[8] !== _ || t[9] !== s || t[10] !== o
    ? ((b = () => ne(_, s, o)),
      (t[8] = _),
      (t[9] = s),
      (t[10] = o),
      (t[11] = b))
    : (b = t[11]);
  let x = _ != null,
    S;
  t[12] !== y || t[13] !== b || t[14] !== x
    ? ((S = {
        queryKey: y,
        queryFn: b,
        enabled: x,
        gcTime: 1 / 0,
        staleTime: h.INFINITE,
      }),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S))
    : (S = t[15]);
  let C = u(S),
    w = _ == null ? (m ?? null) : (C.data ?? null),
    T;
  t[16] === n.bundleIdentifier
    ? (T = t[17])
    : ((T = { bundleId: n.bundleIdentifier }),
      (t[16] = n.bundleIdentifier),
      (t[17] = T));
  let te = n.bundleIdentifier.length > 0,
    E;
  t[18] === te
    ? (E = t[19])
    : ((E = { enabled: te, staleTime: h.INFINITE, refetchOnWindowFocus: !1 }),
      (t[18] = te),
      (t[19] = E));
  let re;
  t[20] !== T || t[21] !== E
    ? ((re = { params: T, queryConfig: E, select: He }),
      (t[20] = T),
      (t[21] = E),
      (t[22] = re))
    : (re = t[22]);
  let O = v(`native-desktop-app-by-bundle-id`, re).data?.appPath ?? null,
    k;
  t[23] === O ? (k = t[24]) : ((k = { appPath: O }), (t[23] = O), (t[24] = k));
  let { iconSmall: ie } = A(k),
    j = n.appIconDataUrl ?? f,
    ae;
  t[25] === a
    ? (ae = t[26])
    : ((ae = a.formatMessage({
        id: `codex.localConversation.userAppshotAttachment`,
        defaultMessage: `Appshot attachment`,
        description: `Alt text for appshot attachment in local conversation`,
      })),
      (t[25] = a),
      (t[26] = ae));
  let M = ae;
  if (w == null) {
    let e;
    return (
      t[27] === m
        ? (e = t[28])
        : ((e =
            m == null
              ? null
              : (0, W.jsx)(`div`, {
                  className: `flex h-[179px] w-[232px] items-center justify-center rounded-2xl bg-token-bg-tertiary`,
                  children: (0, W.jsx)(ee, { className: `icon-xs` }),
                })),
          (t[27] = m),
          (t[28] = e)),
      e
    );
  }
  let N = j ?? ie,
    P;
  return (
    t[29] !== n.appName ||
    t[30] !== n.axTree ||
    t[31] !== n.windowTitle ||
    t[32] !== w ||
    t[33] !== M ||
    t[34] !== N
      ? ((P = (0, W.jsx)(pe, {
          variant: `thread`,
          appName: n.appName,
          appIconSrc: N,
          accessibilityText: n.axTree,
          screenshotAlt: M,
          screenshotSrc: w,
          windowTitle: n.windowTitle,
        })),
        (t[29] = n.appName),
        (t[30] = n.axTree),
        (t[31] = n.windowTitle),
        (t[32] = w),
        (t[33] = M),
        (t[34] = N),
        (t[35] = P))
      : (P = t[35]),
    P
  );
}
function He(e) {
  return e.app;
}
function $(e) {
  let t = (0, H.c)(29),
    { attachment: n, cwd: r, hostId: i } = e,
    a = g(`open-file`),
    o,
    s,
    c,
    l,
    u;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a) {
    ((c = We(n)), (l = n.fsPath || n.path));
    let e;
    (t[9] !== n.startLine ||
    t[10] !== r ||
    t[11] !== i ||
    t[12] !== a ||
    t[13] !== l
      ? ((e = () => {
          if (!l) return;
          let e = n.startLine;
          te({
            path: l,
            line: e,
            column: e == null ? void 0 : 1,
            cwd: r,
            ...(i == null ? {} : { hostId: i }),
            openFile: a.mutate,
          });
        }),
        (t[9] = n.startLine),
        (t[10] = r),
        (t[11] = i),
        (t[12] = a),
        (t[13] = l),
        (t[14] = e))
      : (e = t[14]),
      (s = e),
      (o = I),
      (u = F(n.label, c)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  } else ((o = t[4]), (s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]));
  let d;
  t[15] !== o || t[16] !== s || t[17] !== c || t[18] !== u
    ? ((d = (0, W.jsx)(o, { filename: u, lineInfo: c, onClick: s })),
      (t[15] = o),
      (t[16] = s),
      (t[17] = c),
      (t[18] = u),
      (t[19] = d))
    : (d = t[19]);
  let f = d;
  if (!l) return f;
  let p;
  t[20] === f
    ? (p = t[21])
    : ((p = (0, W.jsx)(`span`, {
        className: `inline-flex max-w-full`,
        children: f,
      })),
      (t[20] = f),
      (t[21] = p));
  let m;
  return (
    t[22] !== n.endLine ||
    t[23] !== n.startLine ||
    t[24] !== r ||
    t[25] !== i ||
    t[26] !== l ||
    t[27] !== p
      ? ((m = (0, W.jsx)(Q, {
          cwd: r,
          endLine: n.endLine,
          hostId: i,
          line: n.startLine,
          path: l,
          children: p,
        })),
        (t[22] = n.endLine),
        (t[23] = n.startLine),
        (t[24] = r),
        (t[25] = i),
        (t[26] = l),
        (t[27] = p),
        (t[28] = m))
      : (m = t[28]),
    m
  );
}
function Ue(e) {
  let t = (0, H.c)(2),
    { pullRequestNumber: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, W.jsx)(fe, {
          Icon: N,
          children: (0, W.jsx)(d, {
            id: `codex.userMessage.pullRequestMergeTask`,
            defaultMessage: `PR #{number}`,
            description: `Pill shown on a user message for a pull request merge task`,
            values: { number: n },
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function We(e) {
  if (e.startLine != null)
    return e.endLine != null && e.endLine !== e.startLine
      ? `${e.startLine}-${e.endLine}`
      : `${e.startLine}`;
}
export {
  Q as a,
  Me as c,
  Ue as i,
  be as l,
  Be as n,
  Z as o,
  $ as r,
  q as s,
  Ve as t,
};
//# sourceMappingURL=user-message-attachments-C-Jxxwpp.js.map
