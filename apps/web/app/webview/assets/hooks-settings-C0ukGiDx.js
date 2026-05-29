import { s as e } from "./chunk-Bj-mKKzh.js";
import { ct as t } from "./src-C.js";
import { do as n } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as r, t as i } from "./jsx-runtime.js";
import { t as a } from "./clsx-BcPLHiun.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import {
  G as o,
  L as s,
  S as c,
  U as l,
  X as u,
  Y as d,
  Z as f,
  m as p,
  wt as m,
} from "./setting-storage.js";
import { _ as h, f as g, n as _ } from "./chunk-LFPYN7LY.js";
import "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import { l as v, s as y, t as b } from "./thread-context-inputs-DBrOekVr.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import { r as x } from "./toast-signal.js";
import "./window-zoom-context.js";
import { t as S } from "./tooltip-CDzchJxN.js";
import { t as C } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import { t as w } from "./link-external-BPZREBQk.js";
import { t as T } from "./open-workspace-file-WgoEFjrv.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import { t as E } from "./apps-DwfMzB5Q.js";
import "./x-C_RDKBp5.js";
import "./with-window.js";
import { a as D, d as O, i as k, l as A, n as j } from "./dialog-layout.js";
import { t as M } from "./folder.js";
import "./_defineProperty.js";
import { f as N } from "./links.js";
import { t as P } from "./chevron-NmAOI_v1.js";
import { t as F } from "./warning.js";
import { t as I } from "./settings.cog.js";
import { t as L } from "./get-project-name.js";
import { t as R } from "./building.js";
import "./sortBy.js";
import "./use-connected-remote-connections.js";
import { t as z } from "./banner.js";
import { t as B } from "./toggle.js";
import { a as V, i as H, r as U } from "./hooks-settings-queries-BUP-44jb.js";
import {
  a as W,
  f as G,
  i as ee,
  l as te,
  n as K,
  o as ne,
  r as re,
  u as ie,
} from "./hooks-settings-model-BVVYIV7N.js";
import { t as ae } from "./regenerate.js";
import { i as q } from "./settings-shared-BTHmEeQY.js";
import { i as oe } from "./hooks-settings-route.js";
import { t as se } from "./settings-host-context-ILiCQlCE.js";
import { t as J } from "./settings-content-layout.js";
import { n as Y } from "./settings-row.js";
import { n as X, t as Z } from "./settings-group.js";
import { t as ce } from "./hooks-Cw0VrjI0.js";
import { i as le, n as ue, r as de, t as fe } from "./hooks-settings-copy.js";
var Q = m(),
  pe = e(r()),
  $ = i();
function me(e, t) {
  let n =
      e.issueCount > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.issueCounts`,
              defaultMessage: `{issueCount, plural, one {# issue} other {# issues}}`,
              description: `Hook load issue count for a project row`,
            },
            { issueCount: e.issueCount },
          )
        : ``,
    r =
      e.needsReview > 0
        ? t.formatMessage(
            {
              id: `settings.hooks.summary.reviewCounts`,
              defaultMessage: `{needsReview, plural, one {# needs review} other {# need review}}`,
              description: `Review-needed hook count for a project row`,
            },
            { needsReview: e.needsReview },
          )
        : ``;
  return (0, $.jsx)(l, {
    id: `settings.hooks.summary.attentionCounts`,
    defaultMessage: `{issueCount}{separator}{needsReview}`,
    description: `Combined hook load issue and review-needed counts for a project row`,
    values: {
      issueCount: n,
      separator: n !== `` && r !== `` ? ` · ` : ``,
      needsReview: r,
    },
  });
}
var he = (e) =>
  (0, $.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    fill: `currentColor`,
    viewBox: `0 0 24 24`,
    ...e,
    children: [
      (0, $.jsx)(`path`, {
        d: `M15.344 10.036a1 1 0 1 0-1.688-1.072l-2.474 3.896-.943-1.034a1 1 0 0 0-1.478 1.348l1.826 2a1 1 0 0 0 1.583-.138l3.174-5Z`,
      }),
      (0, $.jsx)(`path`, {
        fillRule: `evenodd`,
        d: `M13.203 1.935a3 3 0 0 0-2.405 0l-6 2.625A3 3 0 0 0 3 7.308V13a9 9 0 1 0 18 0V7.308a3 3 0 0 0-1.797-2.748l-6-2.625Zm-1.604 1.832a1 1 0 0 1 .802 0l6 2.625a1 1 0 0 1 .599.916V13a7 7 0 1 1-14 0V7.308a1 1 0 0 1 .6-.916l6-2.625Z`,
        clipRule: `evenodd`,
      }),
    ],
  });
function ge(e) {
  let t = (0, Q.c)(24),
    {
      eventName: n,
      hostId: r,
      isRemoteHost: i,
      hooks: a,
      onToggleHookEnabled: s,
      onTrustHook: c,
    } = e,
    u = o(),
    d = p(`open-file`),
    f,
    m,
    h;
  if (
    t[0] !== n ||
    t[1] !== a ||
    t[2] !== r ||
    t[3] !== u ||
    t[4] !== i ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== d
  ) {
    let e = W(a, n);
    ((h = `border-t border-token-border px-3`),
      (f = `divide-y-[0.5px] divide-token-border`));
    let o;
    (t[11] !== r ||
    t[12] !== u ||
    t[13] !== i ||
    t[14] !== s ||
    t[15] !== c ||
    t[16] !== d
      ? ((o = (e, t) => {
          let n = G(e),
            a = i || e.isManaged;
          return (0, $.jsxs)(
            `div`,
            {
              className: `group flex items-center justify-between gap-4 py-2 pl-7`,
              children: [
                (0, $.jsx)(`div`, {
                  className: `flex min-w-0 items-center text-sm`,
                  children: (0, $.jsx)(`span`, {
                    className: `shrink-0 font-medium text-token-text-primary`,
                    children: de(t, u),
                  }),
                }),
                (0, $.jsxs)(`div`, {
                  className: `flex shrink-0 items-center gap-2`,
                  children: [
                    n
                      ? (0, $.jsx)(S, {
                          delayDuration: 0,
                          tooltipContent:
                            e.trustStatus === `modified`
                              ? (0, $.jsx)(l, {
                                  id: `settings.hooks.event.changedReviewReason`,
                                  defaultMessage: `Hook changed since last trusted`,
                                  description: `Tooltip shown for changed hooks awaiting review`,
                                })
                              : (0, $.jsx)(l, {
                                  id: `settings.hooks.event.untrustedReviewReason`,
                                  defaultMessage: `New hook`,
                                  description: `Tooltip shown for hooks awaiting first review`,
                                }),
                          children: (0, $.jsxs)(C, {
                            color: `outline`,
                            size: `composerSm`,
                            onClick: () => {
                              c(e);
                            },
                            children: [
                              (0, $.jsx)(he, { className: `icon-2xs` }),
                              (0, $.jsx)(l, {
                                id: `settings.hooks.event.trust`,
                                defaultMessage: `Trust`,
                                description: `Button label to trust a hook`,
                              }),
                            ],
                          }),
                        })
                      : null,
                    (0, $.jsx)(`div`, {
                      className: `invisible opacity-0 group-hover:visible group-hover:opacity-100`,
                      children: (0, $.jsx)(S, {
                        delayDuration: 0,
                        disabled: a,
                        tooltipContent: (0, $.jsx)(l, {
                          id: `settings.hooks.event.openSourceFile`,
                          defaultMessage: `Open source file`,
                          description: `Label for the button that opens the hook source file`,
                        }),
                        children: (0, $.jsx)(`span`, {
                          className: a
                            ? `inline-flex cursor-not-allowed`
                            : `inline-flex`,
                          children: (0, $.jsx)(C, {
                            "aria-label": u.formatMessage({
                              id: `settings.hooks.event.openSourceFile`,
                              defaultMessage: `Open source file`,
                              description: `Label for the button that opens the hook source file`,
                            }),
                            color: `ghost`,
                            disabled: a,
                            size: `toolbar`,
                            uniform: !0,
                            onClick: () => {
                              T({
                                cwd: null,
                                hostId: r,
                                path: e.sourcePath,
                                openFile: d.mutate,
                              });
                            },
                            children: (0, $.jsx)(w, { className: `icon-xxs` }),
                          }),
                        }),
                      }),
                    }),
                    e.isManaged
                      ? (0, $.jsx)(S, {
                          delayDuration: 0,
                          tooltipContent: (0, $.jsx)(l, {
                            id: `settings.hooks.event.managedTooltip`,
                            defaultMessage: `Managed hooks are always on`,
                            description: `Tooltip shown for admin-managed hooks`,
                          }),
                          children: (0, $.jsx)(`span`, {
                            className: `inline-flex cursor-not-allowed`,
                            tabIndex: 0,
                            children: (0, $.jsx)(B, {
                              ariaLabel: de(t, u),
                              checked: !0,
                              className: `pointer-events-none`,
                              disabled: !0,
                              onChange: _e,
                            }),
                          }),
                        })
                      : (0, $.jsx)(S, {
                          delayDuration: 0,
                          tooltipContent: n
                            ? (0, $.jsx)(l, {
                                id: `settings.hooks.event.disabledUntilTrustedTooltip`,
                                defaultMessage: `Disabled until hook is trusted`,
                                description: `Tooltip shown for review-needed hooks whose toggle cannot be enabled yet`,
                              })
                            : null,
                          children: (0, $.jsx)(`span`, {
                            className: n
                              ? `inline-flex cursor-not-allowed`
                              : ``,
                            tabIndex: n ? 0 : void 0,
                            children: (0, $.jsx)(B, {
                              ariaLabel: de(t, u),
                              checked: e.enabled && !n,
                              className: n ? `pointer-events-none` : ``,
                              disabled: n,
                              onChange: (t) => {
                                s(e, t);
                              },
                            }),
                          }),
                        }),
                  ],
                }),
              ],
            },
            e.key,
          );
        }),
        (t[11] = r),
        (t[12] = u),
        (t[13] = i),
        (t[14] = s),
        (t[15] = c),
        (t[16] = d),
        (t[17] = o))
      : (o = t[17]),
      (m = e.map(o)),
      (t[0] = n),
      (t[1] = a),
      (t[2] = r),
      (t[3] = u),
      (t[4] = i),
      (t[5] = s),
      (t[6] = c),
      (t[7] = d),
      (t[8] = f),
      (t[9] = m),
      (t[10] = h));
  } else ((f = t[8]), (m = t[9]), (h = t[10]));
  let g;
  t[18] !== f || t[19] !== m
    ? ((g = (0, $.jsx)(`div`, { className: f, children: m })),
      (t[18] = f),
      (t[19] = m),
      (t[20] = g))
    : (g = t[20]);
  let _;
  return (
    t[21] !== h || t[22] !== g
      ? ((_ = (0, $.jsx)(`div`, { className: h, children: g })),
        (t[21] = h),
        (t[22] = g),
        (t[23] = _))
      : (_ = t[23]),
    _
  );
}
function _e() {}
function ve(e) {
  let t = (0, Q.c)(27),
    {
      entry: n,
      hostId: r,
      isOpen: i,
      isLoading: a,
      isRemoteHost: o,
      loadError: s,
      title: c,
      titleIcon: u,
      subtitle: d,
      onClose: f,
      onToggleHookEnabled: p,
      onTrustHook: m,
    } = e,
    h;
  t[0] !== c || t[1] !== u
    ? ((h =
        c == null
          ? null
          : (0, $.jsx)(O, {
              asChild: !0,
              children: (0, $.jsxs)(`h2`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  u == null
                    ? null
                    : (0, $.jsx)(`span`, {
                        className: `flex shrink-0 items-center justify-center`,
                        children: u,
                      }),
                  (0, $.jsx)(`span`, { className: `min-w-0`, children: c }),
                ],
              }),
            })),
      (t[0] = c),
      (t[1] = u),
      (t[2] = h))
    : (h = t[2]);
  let g = h,
    _;
  t[3] === f
    ? (_ = t[4])
    : ((_ = (e) => {
        e || f();
      }),
      (t[3] = f),
      (t[4] = _));
  let v;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = { "aria-describedby": void 0 }), (t[5] = v))
    : (v = t[5]);
  let y;
  t[6] !== g || t[7] !== d
    ? ((y = (0, $.jsx)(D, {
        children: (0, $.jsx)(k, {
          title: g,
          subtitle: d,
          subtitleClassName: `break-all`,
        }),
      })),
      (t[6] = g),
      (t[7] = d),
      (t[8] = y))
    : (y = t[8]);
  let b;
  t[9] !== n ||
  t[10] !== r ||
  t[11] !== a ||
  t[12] !== i ||
  t[13] !== o ||
  t[14] !== s ||
  t[15] !== p ||
  t[16] !== m
    ? ((b = i
        ? a
          ? (0, $.jsx)(X, {
              children: (0, $.jsx)(Y, {
                label: (0, $.jsx)(l, {
                  id: `settings.hooks.loading.label`,
                  defaultMessage: `Loading hooks…`,
                  description: `Label while hooks are loading`,
                }),
                control: null,
              }),
            })
          : s == null
            ? (0, $.jsx)(ye, {
                entry: n,
                hostId: r,
                isRemoteHost: o,
                onToggleHookEnabled: p,
                onTrustHook: m,
              })
            : (0, $.jsx)(X, {
                children: (0, $.jsx)(Y, {
                  label: (0, $.jsx)(l, {
                    id: `settings.hooks.loadError.label`,
                    defaultMessage: `Could not load hooks`,
                    description: `Label when hooks settings fails to load hooks`,
                  }),
                  description: s.message,
                  control: null,
                }),
              })
        : null),
      (t[9] = n),
      (t[10] = r),
      (t[11] = a),
      (t[12] = i),
      (t[13] = o),
      (t[14] = s),
      (t[15] = p),
      (t[16] = m),
      (t[17] = b))
    : (b = t[17]);
  let x;
  t[18] === b
    ? (x = t[19])
    : ((x = (0, $.jsx)(D, { className: `gap-3`, children: b })),
      (t[18] = b),
      (t[19] = x));
  let S;
  t[20] !== y || t[21] !== x
    ? ((S = (0, $.jsxs)(j, { className: `gap-4`, children: [y, x] })),
      (t[20] = y),
      (t[21] = x),
      (t[22] = S))
    : (S = t[22]);
  let C;
  return (
    t[23] !== i || t[24] !== _ || t[25] !== S
      ? ((C = (0, $.jsx)(A, {
          open: i,
          onOpenChange: _,
          contentProps: v,
          size: `xwide`,
          children: S,
        })),
        (t[23] = i),
        (t[24] = _),
        (t[25] = S),
        (t[26] = C))
      : (C = t[26]),
    C
  );
}
function ye(e) {
  let t = (0, Q.c)(23),
    {
      entry: n,
      hostId: r,
      isRemoteHost: i,
      onToggleHookEnabled: a,
      onTrustHook: s,
    } = e,
    c = o(),
    [l, u] = (0, pe.useState)(!1);
  if (n == null) return null;
  let d = n.hooks,
    f,
    p,
    m;
  if (
    t[0] !== n.errors ||
    t[1] !== n.warnings ||
    t[2] !== d ||
    t[3] !== r ||
    t[4] !== c ||
    t[5] !== i ||
    t[6] !== l ||
    t[7] !== a ||
    t[8] !== s
  ) {
    let e = re(d).filter(be),
      o = n.warnings,
      h = n.errors,
      g = ne(d),
      _ = o.length + h.length;
    (t[12] === g
      ? (f = t[13])
      : ((f = g > 0 ? (0, $.jsx)(xe, {}) : null), (t[12] = g), (t[13] = f)),
      t[14] !== h || t[15] !== _ || t[16] !== l || t[17] !== o
        ? ((p =
            _ > 0
              ? (0, $.jsx)(Se, {
                  errors: h,
                  expanded: l,
                  issueCount: _,
                  warnings: o,
                  onToggleExpanded: () => {
                    u(!l);
                  },
                })
              : null),
          (t[14] = h),
          (t[15] = _),
          (t[16] = l),
          (t[17] = o),
          (t[18] = p))
        : (p = t[18]),
      (m =
        e.length > 0
          ? (0, $.jsx)(X, {
              children: e.map((e) =>
                (0, $.jsxs)(
                  `div`,
                  {
                    children: [
                      (0, $.jsx)(Y, {
                        icon: (0, $.jsx)(ce, { className: `icon-xs` }),
                        label: ue(e.eventName, c),
                        description: fe(e.eventName, c),
                        control:
                          e.needsReview > 0
                            ? (0, $.jsx)(F, {
                                className: `icon-2xs shrink-0 text-token-editor-warning-foreground`,
                              })
                            : null,
                      }),
                      (0, $.jsx)(ge, {
                        eventName: e.eventName,
                        hostId: r,
                        isRemoteHost: i,
                        hooks: d,
                        onTrustHook: s,
                        onToggleHookEnabled: a,
                      }),
                    ],
                  },
                  e.eventName,
                ),
              ),
            })
          : null),
      (t[0] = n.errors),
      (t[1] = n.warnings),
      (t[2] = d),
      (t[3] = r),
      (t[4] = c),
      (t[5] = i),
      (t[6] = l),
      (t[7] = a),
      (t[8] = s),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m));
  } else ((f = t[9]), (p = t[10]), (m = t[11]));
  let h;
  return (
    t[19] !== f || t[20] !== p || t[21] !== m
      ? ((h = (0, $.jsxs)($.Fragment, { children: [f, p, m] })),
        (t[19] = f),
        (t[20] = p),
        (t[21] = m),
        (t[22] = h))
      : (h = t[22]),
    h
  );
}
function be(e) {
  return e.installed > 0;
}
function xe() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(z, {
          Icon: F,
          iconClassName: `text-token-editor-warning-foreground`,
          type: `info`,
          content: (0, $.jsx)(l, {
            id: `settings.hooks.review.summary`,
            defaultMessage: `Hooks can run outside of the sandbox so we ask you to review any recently installed or modified hooks`,
            description: `Banner shown when hooks require trust review`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Se(e) {
  let t = (0, Q.c)(18),
    {
      errors: n,
      expanded: r,
      issueCount: i,
      warnings: o,
      onToggleExpanded: s,
    } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(F, {
        className: `icon-xs shrink-0 text-token-editor-warning-foreground`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let u;
  t[1] === i
    ? (u = t[2])
    : ((u = (0, $.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [
          c,
          (0, $.jsx)(`span`, {
            className: `truncate text-sm text-token-text-primary`,
            children: (0, $.jsx)(l, {
              id: `settings.hooks.issues.summary`,
              defaultMessage: `{count, plural, one {# issue loading hooks for this source} other {# issues loading hooks for this source}}`,
              description: `Summary text for hook warnings and errors`,
              values: { count: i },
            }),
          }),
        ],
      })),
      (t[1] = i),
      (t[2] = u));
  let d = r && `rotate-180`,
    f;
  t[3] === d
    ? (f = t[4])
    : ((f = a(`icon-2xs shrink-0 transition-transform`, d)),
      (t[3] = d),
      (t[4] = f));
  let p;
  t[5] === f
    ? (p = t[6])
    : ((p = (0, $.jsx)(P, { className: f })), (t[5] = f), (t[6] = p));
  let m;
  t[7] !== s || t[8] !== u || t[9] !== p
    ? ((m = (0, $.jsxs)(`button`, {
        type: `button`,
        className: `flex w-full cursor-interaction items-center justify-between gap-3 px-3 py-2 text-left`,
        onClick: s,
        children: [u, p],
      })),
      (t[7] = s),
      (t[8] = u),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== n || t[12] !== r || t[13] !== o
    ? ((h = r
        ? (0, $.jsxs)(`div`, {
            className: `space-y-2 border-t border-token-editor-warning-foreground/20 px-3 py-2 text-sm text-token-text-secondary`,
            children: [o.map(we), n.map(Ce)],
          })
        : null),
      (t[11] = n),
      (t[12] = r),
      (t[13] = o),
      (t[14] = h))
    : (h = t[14]);
  let g;
  return (
    t[15] !== m || t[16] !== h
      ? ((g = (0, $.jsxs)(`div`, {
          className: `bg-token-editor-warning-background/30 overflow-hidden rounded-lg border border-token-editor-warning-foreground/30`,
          children: [m, h],
        })),
        (t[15] = m),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function Ce(e) {
  return (0, $.jsx)(
    `div`,
    {
      children: (0, $.jsx)(l, {
        id: `settings.hooks.issues.error`,
        defaultMessage: `{path}: {message}`,
        description: `Expanded hook error detail`,
        values: { path: e.path, message: e.message },
      }),
    },
    `${e.path}:${e.message}`,
  );
}
function we(e) {
  return (0, $.jsx)(`div`, { children: e }, e);
}
var Te = `hooks-settings`;
function Ee(e) {
  let t = (0, Q.c)(59),
    {
      entries: n,
      hostId: r,
      isRemoteHost: i,
      isLoadingProjectRoots: a,
      loadError: s,
      isLoading: c,
      isRefreshing: u,
      projectRootLabels: d,
      projectRoots: f,
      selectedSourceSection: p,
      onSelectSourceSection: m,
      onRefreshHooks: h,
      onToggleHookEnabled: g,
      onTrustHook: _,
    } = e,
    v = o(),
    y;
  t[0] === v
    ? (y = t[1])
    : ((y = v.formatMessage({
        id: `settings.hooks.refresh`,
        defaultMessage: `Reload hooks`,
        description: `Button label to reload hooks for the visible projects`,
      })),
      (t[0] = v),
      (t[1] = y));
  let b = y,
    x,
    w,
    T,
    E,
    D,
    O,
    k;
  if (t[2] !== n || t[3] !== r || t[4] !== c || t[5] !== d || t[6] !== p) {
    ((O = n == null || c ? [] : ee(n)),
      (x = []),
      (w = []),
      (T = null),
      (E = null));
    for (let e of O)
      bb0: switch (e.id) {
        case `plugin`:
          T = e;
          break bb0;
        case `project`:
          E = e;
          break bb0;
        case `user`:
        case `admin`:
          x.push(e);
          break bb0;
        case `sessionFlags`:
        case `unknown`:
          w.push(e);
      }
    ((D = ie(O, p)),
      (k = Ve({ entry: D, hostId: r, projectRootLabels: d, selection: p })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = c),
      (t[5] = d),
      (t[6] = p),
      (t[7] = x),
      (t[8] = w),
      (t[9] = T),
      (t[10] = E),
      (t[11] = D),
      (t[12] = O),
      (t[13] = k));
  } else
    ((x = t[7]),
      (w = t[8]),
      (T = t[9]),
      (E = t[10]),
      (D = t[11]),
      (O = t[12]),
      (k = t[13]));
  let A = k,
    j;
  t[14] === p
    ? (j = t[15])
    : ((j = p == null ? null : Fe(p.source)), (t[14] = p), (t[15] = j));
  let M = j,
    N = null;
  if (p?.source === `project`) N = p.projectRoot;
  else if (p != null) {
    let e;
    (t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(l, {
          id: `settings.hooks.source.sharedProjects`,
          defaultMessage: `All projects`,
          description: `Label for hook sources that apply across every project`,
        })),
        (t[16] = e))
      : (e = t[16]),
      (N = e));
  }
  let P = `none`;
  if (p?.source === `project`) P = p.projectRoot;
  else if (p?.source === `plugin`) {
    P = `plugin`;
    let e = p.pluginId;
    e !== void 0 && (P = `plugin:${e ?? `unknown`}`);
  } else p != null && (P = p.source);
  let F;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(q, { slug: Te })), (t[17] = F))
    : (F = t[17]);
  let I;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(l, {
        id: `settings.hooks.subtitle`,
        defaultMessage: `Manage lifecycle hooks from config and enabled plugins. <a>Learn more</a>`,
        description: `Subtitle for hooks settings`,
        values: { a: De },
      })),
      (t[18] = I))
    : (I = t[18]);
  let L = f == null || f.length === 0 || c || u,
    R;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(ae, { className: `icon-xs` })), (t[19] = R))
    : (R = t[19]);
  let z;
  t[20] !== h || t[21] !== b || t[22] !== L
    ? ((z = (0, $.jsx)(C, {
        "aria-label": b,
        color: `ghost`,
        disabled: L,
        onClick: h,
        size: `icon`,
        children: R,
      })),
      (t[20] = h),
      (t[21] = b),
      (t[22] = L),
      (t[23] = z))
    : (z = t[23]);
  let B;
  t[24] !== b || t[25] !== z
    ? ((B = (0, $.jsx)(S, {
        delayDuration: 0,
        tooltipContent: b,
        children: z,
      })),
      (t[24] = b),
      (t[25] = z),
      (t[26] = B))
    : (B = t[26]);
  let V;
  t[27] !== x ||
  t[28] !== c ||
  t[29] !== a ||
  t[30] !== s ||
  t[31] !== m ||
  t[32] !== w ||
  t[33] !== T ||
  t[34] !== d ||
  t[35] !== f ||
  t[36] !== E ||
  t[37] !== O
    ? ((V =
        f == null && a
          ? (0, $.jsx)(X, {
              children: (0, $.jsx)(Y, {
                label: (0, $.jsx)(l, {
                  id: `settings.hooks.loading.label`,
                  defaultMessage: `Loading hooks…`,
                  description: `Label while hooks are loading`,
                }),
                control: null,
              }),
            })
          : f == null || f.length === 0
            ? (0, $.jsx)(Oe, {})
            : s == null
              ? c
                ? (0, $.jsx)(X, {
                    children: (0, $.jsx)(Y, {
                      label: (0, $.jsx)(l, {
                        id: `settings.hooks.loading.label`,
                        defaultMessage: `Loading hooks…`,
                        description: `Label while hooks are loading`,
                      }),
                      control: null,
                    }),
                  })
                : O.length === 0
                  ? (0, $.jsx)(Oe, {})
                  : (0, $.jsxs)(`div`, {
                      className: `flex flex-col gap-[var(--padding-panel)]`,
                      children: [
                        x.length > 0
                          ? (0, $.jsx)(ke, {
                              title: (0, $.jsx)(l, {
                                id: `settings.hooks.source.globalConfig`,
                                defaultMessage: `From Config`,
                                description: `Group heading for hooks from global user and admin config`,
                              }),
                              sections: x,
                              onSelectSourceSection: m,
                            })
                          : null,
                        T == null
                          ? null
                          : (0, $.jsx)(Ae, {
                              section: T,
                              onSelectSourceSection: m,
                            }),
                        E == null
                          ? null
                          : (0, $.jsx)(Me, {
                              section: E,
                              projectRootLabels: d,
                              onSelectSourceSection: m,
                            }),
                        w.length > 0
                          ? (0, $.jsx)(ke, {
                              title: (0, $.jsx)(l, {
                                id: `settings.hooks.source.otherSources`,
                                defaultMessage: `Other sources`,
                                description: `Group heading for hooks from uncommon sources`,
                              }),
                              sections: w,
                              onSelectSourceSection: m,
                            })
                          : null,
                      ],
                    })
              : (0, $.jsx)(X, {
                  children: (0, $.jsx)(Y, {
                    label: (0, $.jsx)(l, {
                      id: `settings.hooks.loadError.label`,
                      defaultMessage: `Could not load hooks`,
                      description: `Label when hooks settings fails to load hooks`,
                    }),
                    description: s.message,
                    control: null,
                  }),
                })),
      (t[27] = x),
      (t[28] = c),
      (t[29] = a),
      (t[30] = s),
      (t[31] = m),
      (t[32] = w),
      (t[33] = T),
      (t[34] = d),
      (t[35] = f),
      (t[36] = E),
      (t[37] = O),
      (t[38] = V))
    : (V = t[38]);
  let H = p != null && (c || D != null),
    U;
  t[39] === m
    ? (U = t[40])
    : ((U = () => {
        m(null);
      }),
      (t[39] = m),
      (t[40] = U));
  let W;
  t[41] !== r ||
  t[42] !== c ||
  t[43] !== i ||
  t[44] !== s ||
  t[45] !== g ||
  t[46] !== _ ||
  t[47] !== D ||
  t[48] !== P ||
  t[49] !== N ||
  t[50] !== A ||
  t[51] !== M ||
  t[52] !== H ||
  t[53] !== U
    ? ((W = (0, $.jsx)(
        ve,
        {
          entry: D,
          hostId: r,
          isOpen: H,
          isLoading: c,
          isRemoteHost: i,
          loadError: s,
          title: A,
          titleIcon: M,
          subtitle: N,
          onClose: U,
          onToggleHookEnabled: g,
          onTrustHook: _,
        },
        P,
      )),
      (t[41] = r),
      (t[42] = c),
      (t[43] = i),
      (t[44] = s),
      (t[45] = g),
      (t[46] = _),
      (t[47] = D),
      (t[48] = P),
      (t[49] = N),
      (t[50] = A),
      (t[51] = M),
      (t[52] = H),
      (t[53] = U),
      (t[54] = W))
    : (W = t[54]);
  let G;
  return (
    t[55] !== V || t[56] !== W || t[57] !== B
      ? ((G = (0, $.jsxs)(J, {
          title: F,
          subtitleClassName: `whitespace-normal`,
          actionPlacement: `subtitle`,
          subtitle: I,
          action: B,
          children: [V, W],
        })),
        (t[55] = V),
        (t[56] = W),
        (t[57] = B),
        (t[58] = G))
      : (G = t[58]),
    G
  );
}
function De(e) {
  return (0, $.jsx)(
    `a`,
    {
      className: `inline-flex text-token-text-link-foreground`,
      href: N,
      target: `_blank`,
      rel: `noreferrer`,
      children: e,
    },
    `learn-more`,
  );
}
function Oe() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(X, {
          children: (0, $.jsx)(Y, {
            label: (0, $.jsx)(l, {
              id: `settings.hooks.emptyHooks.label`,
              defaultMessage: `No hooks found`,
              description: `Label when known projects do not have hooks or hook load issues`,
            }),
            description: (0, $.jsx)(l, {
              id: `settings.hooks.emptyHooks.description`,
              defaultMessage: `Configured hooks will appear here`,
              description: `Description when no hooks are configured`,
            }),
            control: null,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ke(e) {
  let t = (0, Q.c)(12),
    { sections: n, title: r, onSelectSourceSection: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (0, $.jsx)(Z.Header, { title: r })), (t[0] = r), (t[1] = a));
  let o;
  if (t[2] !== i || t[3] !== n) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) =>
          (0, $.jsx)(Ne, { section: e, onSelectSourceSection: i }, e.id)),
        (t[5] = i),
        (t[6] = e)),
      (o = n.map(e)),
      (t[2] = i),
      (t[3] = n),
      (t[4] = o));
  } else o = t[4];
  let s;
  t[7] === o
    ? (s = t[8])
    : ((s = (0, $.jsx)(Z.Content, { children: o })), (t[7] = o), (t[8] = s));
  let c;
  return (
    t[9] !== a || t[10] !== s
      ? ((c = (0, $.jsxs)(Z, { className: `gap-2`, children: [a, s] })),
        (t[9] = a),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Ae(e) {
  let t = (0, Q.c)(8),
    { section: n, onSelectSourceSection: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(Z.Header, {
        title: (0, $.jsx)(l, {
          id: `settings.hooks.source.plugins`,
          defaultMessage: `From Plugins`,
          description: `Group heading for hooks installed by plugins`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  if (t[1] !== r || t[2] !== n.pluginEntries) {
    let e;
    (t[4] === r
      ? (e = t[5])
      : ((e = (e) =>
          (0, $.jsx)(
            je,
            { pluginEntry: e, onSelectSourceSection: r },
            e.pluginId ?? `unknown-plugin`,
          )),
        (t[4] = r),
        (t[5] = e)),
      (a = n.pluginEntries.map(e)),
      (t[1] = r),
      (t[2] = n.pluginEntries),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[6] === a
      ? (o = t[7])
      : ((o = (0, $.jsxs)(Z, {
          className: `gap-2`,
          children: [i, (0, $.jsx)(Z.Content, { children: a })],
        })),
        (t[6] = a),
        (t[7] = o)),
    o
  );
}
function je(e) {
  let t = (0, Q.c)(22),
    { pluginEntry: n, onSelectSourceSection: r } = e,
    i = o(),
    a;
  t[0] !== i || t[1] !== n.pluginId
    ? ((a =
        le(n.pluginId) ??
        i.formatMessage({
          id: `settings.hooks.source.unknownPlugin`,
          defaultMessage: `Unknown plugin`,
          description: `Fallback label for plugin hooks without a plugin id`,
        })),
      (t[0] = i),
      (t[1] = n.pluginId),
      (t[2] = a))
    : (a = t[2]);
  let s = a,
    c;
  t[3] === n.entry
    ? (c = t[4])
    : ((c = K(n.entry)), (t[3] = n.entry), (t[4] = c));
  let l = c,
    u;
  t[5] !== r || t[6] !== n.pluginId
    ? ((u = () => {
        r({ source: `plugin`, pluginId: n.pluginId });
      }),
      (t[5] = r),
      (t[6] = n.pluginId),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(E, { className: `icon-sm text-token-text-secondary` })),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === s
    ? (f = t[10])
    : ((f = (0, $.jsx)(`span`, { className: `block truncate`, children: s })),
      (t[9] = s),
      (t[10] = f));
  let p;
  t[11] === n.entry.hooks.length
    ? (p = t[12])
    : ((p = (0, $.jsx)(Le, { count: n.entry.hooks.length })),
      (t[11] = n.entry.hooks.length),
      (t[12] = p));
  let m;
  t[13] === l
    ? (m = t[14])
    : ((m = (0, $.jsx)(Re, { summary: l })), (t[13] = l), (t[14] = m));
  let h;
  t[15] !== f || t[16] !== p || t[17] !== m
    ? ((h = (0, $.jsx)(Y, { icon: d, label: f, description: p, control: m })),
      (t[15] = f),
      (t[16] = p),
      (t[17] = m),
      (t[18] = h))
    : (h = t[18]);
  let g;
  return (
    t[19] !== u || t[20] !== h
      ? ((g = (0, $.jsx)(X, {
          children: (0, $.jsx)(`button`, {
            type: `button`,
            className: `focus-visible:outline-token-focus w-full cursor-interaction rounded-lg text-left hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background focus-visible:outline-1 focus-visible:outline-offset-[-2px] active:bg-token-list-active-selection-background`,
            onClick: u,
            children: h,
          }),
        })),
        (t[19] = u),
        (t[20] = h),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
function Me(e) {
  let t = (0, Q.c)(10),
    { section: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(Z.Header, {
        title: (0, $.jsx)(l, {
          id: `settings.hooks.source.projects`,
          defaultMessage: `From Projects`,
          description: `Group heading for hooks from project config files`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  if (t[1] !== i || t[2] !== r || t[3] !== n.projectEntries) {
    let e;
    (t[5] !== i || t[6] !== r
      ? ((e = (e) =>
          (0, $.jsx)(
            Ie,
            { entry: e, projectRootLabels: r, onSelectSourceSection: i },
            e.cwd,
          )),
        (t[5] = i),
        (t[6] = r),
        (t[7] = e))
      : (e = t[7]),
      (o = n.projectEntries.map(e)),
      (t[1] = i),
      (t[2] = r),
      (t[3] = n.projectEntries),
      (t[4] = o));
  } else o = t[4];
  let s;
  return (
    t[8] === o
      ? (s = t[9])
      : ((s = (0, $.jsxs)(Z, {
          className: `gap-2`,
          children: [a, (0, $.jsx)(Z.Content, { children: o })],
        })),
        (t[8] = o),
        (t[9] = s)),
    s
  );
}
function Ne(e) {
  let t = (0, Q.c)(21),
    { section: n, onSelectSourceSection: r } = e,
    i = n.id,
    a = n.entry,
    o;
  t[0] === a ? (o = t[1]) : ((o = K(a)), (t[0] = a), (t[1] = o));
  let s = o,
    c;
  t[2] !== r || t[3] !== i
    ? ((c = () => {
        r({ source: i });
      }),
      (t[2] = r),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === i ? (l = t[6]) : ((l = Fe(i)), (t[5] = i), (t[6] = l));
  let u;
  t[7] === i
    ? (u = t[8])
    : ((u = (0, $.jsx)(Pe, { source: i })), (t[7] = i), (t[8] = u));
  let d;
  t[9] === a.hooks.length
    ? (d = t[10])
    : ((d = (0, $.jsx)(Le, { count: a.hooks.length })),
      (t[9] = a.hooks.length),
      (t[10] = d));
  let f;
  t[11] === s
    ? (f = t[12])
    : ((f = (0, $.jsx)(Re, { summary: s })), (t[11] = s), (t[12] = f));
  let p;
  t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== f
    ? ((p = (0, $.jsx)(Y, { icon: l, label: u, description: d, control: f })),
      (t[13] = l),
      (t[14] = u),
      (t[15] = d),
      (t[16] = f),
      (t[17] = p))
    : (p = t[17]);
  let m;
  return (
    t[18] !== c || t[19] !== p
      ? ((m = (0, $.jsx)(X, {
          children: (0, $.jsx)(`button`, {
            type: `button`,
            className: `focus-visible:outline-token-focus w-full cursor-interaction rounded-lg text-left hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background focus-visible:outline-1 focus-visible:outline-offset-[-2px] active:bg-token-list-active-selection-background`,
            onClick: c,
            children: p,
          }),
        })),
        (t[18] = c),
        (t[19] = p),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function Pe(e) {
  let t = (0, Q.c)(6),
    { source: n } = e;
  switch (n) {
    case `plugin`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(l, {
              id: `settings.hooks.source.plugin`,
              defaultMessage: `Plugin`,
              description: `Source label for plugin hooks`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `user`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(l, {
              id: `settings.hooks.source.userConfig`,
              defaultMessage: `User config`,
              description: `Source label for user hooks`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `admin`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(l, {
              id: `settings.hooks.source.adminConfig`,
              defaultMessage: `Admin config`,
              description: `Source label for admin-managed hooks`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `project`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(l, {
              id: `settings.hooks.source.projectConfig`,
              defaultMessage: `Project config`,
              description: `Source label for project hooks`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `sessionFlags`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(l, {
              id: `settings.hooks.source.sessionFlags`,
              defaultMessage: `Session flags`,
              description: `Source label for session flag hooks`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `unknown`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(l, {
              id: `settings.hooks.source.unknown`,
              defaultMessage: `Unknown source`,
              description: `Source label for hooks with unknown provenance`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
function Fe(e) {
  let t = `icon-sm text-token-text-secondary`;
  switch (e) {
    case `plugin`:
      return (0, $.jsx)(E, { className: t });
    case `user`:
      return (0, $.jsx)(I, { className: t });
    case `admin`:
      return (0, $.jsx)(R, { className: t });
    case `project`:
      return (0, $.jsx)(M, { className: t });
    case `sessionFlags`:
    case `unknown`:
      return (0, $.jsx)(ce, { className: t });
  }
}
function Ie(e) {
  let t = (0, Q.c)(22),
    { entry: n, projectRootLabels: r, onSelectSourceSection: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = K(n)), (t[0] = n), (t[1] = a));
  let o = a,
    s;
  t[2] !== n.cwd || t[3] !== i
    ? ((s = () => {
        i({ source: `project`, projectRoot: n.cwd });
      }),
      (t[2] = n.cwd),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(M, { className: `icon-sm text-token-text-secondary` })),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] !== n.cwd || t[7] !== r
    ? ((l = Be(n.cwd, r)), (t[6] = n.cwd), (t[7] = r), (t[8] = l))
    : (l = t[8]);
  let u;
  t[9] === l
    ? (u = t[10])
    : ((u = (0, $.jsx)(`span`, { className: `block truncate`, children: l })),
      (t[9] = l),
      (t[10] = u));
  let d;
  t[11] === n.hooks.length
    ? (d = t[12])
    : ((d = (0, $.jsx)(Le, { count: n.hooks.length })),
      (t[11] = n.hooks.length),
      (t[12] = d));
  let f;
  t[13] === o
    ? (f = t[14])
    : ((f = (0, $.jsx)(Re, { summary: o })), (t[13] = o), (t[14] = f));
  let p;
  t[15] !== u || t[16] !== d || t[17] !== f
    ? ((p = (0, $.jsx)(Y, { icon: c, label: u, description: d, control: f })),
      (t[15] = u),
      (t[16] = d),
      (t[17] = f),
      (t[18] = p))
    : (p = t[18]);
  let m;
  return (
    t[19] !== s || t[20] !== p
      ? ((m = (0, $.jsx)(X, {
          children: (0, $.jsx)(`button`, {
            type: `button`,
            className: `focus-visible:outline-token-focus w-full cursor-interaction rounded-lg text-left hover:bg-token-list-hover-background focus-visible:bg-token-list-hover-background focus-visible:outline-1 focus-visible:outline-offset-[-2px] active:bg-token-list-active-selection-background`,
            onClick: s,
            children: p,
          }),
        })),
        (t[19] = s),
        (t[20] = p),
        (t[21] = m))
      : (m = t[21]),
    m
  );
}
function Le(e) {
  let t = (0, Q.c)(2),
    { count: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(l, {
          id: `settings.hooks.source.hookCount`,
          defaultMessage: `{count, plural, one {# hook} other {# hooks}}`,
          description: `Short hook count shown under a hook source row`,
          values: { count: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Re(e) {
  let t = (0, Q.c)(5),
    { summary: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (0, $.jsx)(ze, { summary: n })), (t[0] = n), (t[1] = r));
  let i;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(P, { className: `icon-2xs shrink-0 -rotate-90` })),
      (t[2] = i))
    : (i = t[2]);
  let a;
  return (
    t[3] === r
      ? (a = t[4])
      : ((a = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [r, i],
        })),
        (t[3] = r),
        (t[4] = a)),
    a
  );
}
function ze(e) {
  let t = (0, Q.c)(6),
    { summary: n } = e,
    r = o();
  if (n == null || (n.issueCount === 0 && n.needsReview === 0)) return null;
  let i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(F, {
        className: `icon-2xs shrink-0 text-token-editor-warning-foreground`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== r || t[2] !== n
    ? ((a = me(n, r)), (t[1] = r), (t[2] = n), (t[3] = a))
    : (a = t[3]);
  let s;
  return (
    t[4] === a
      ? (s = t[5])
      : ((s = (0, $.jsxs)(`div`, {
          className: `flex shrink-0 items-center gap-3 text-sm whitespace-nowrap text-token-text-primary`,
          children: [
            i,
            (0, $.jsx)(`span`, {
              className: `max-[30rem]:hidden`,
              children: a,
            }),
          ],
        })),
        (t[4] = a),
        (t[5] = s)),
    s
  );
}
function Be(e, t) {
  return t?.[e] ?? L(e) ?? e;
}
function Ve({ entry: e, hostId: n, projectRootLabels: r, selection: i }) {
  if (i == null) return null;
  if (i.source === `project`) return Be(i.projectRoot, r);
  if (i.source === `plugin`) {
    let r = i.pluginId === void 0 ? null : le(i.pluginId);
    if ((r == null && e != null && (r = He(e.hooks)), r != null)) {
      let e =
        i.pluginId == null ? null : t({ hostId: n, pluginId: i.pluginId });
      return e == null
        ? (0, $.jsx)(l, {
            id: `settings.hooks.source.pluginTitle`,
            defaultMessage: `Plugin · {pluginName}`,
            description: `Dialog title for hooks from one plugin`,
            values: { pluginName: r },
          })
        : (0, $.jsx)(l, {
            id: `settings.hooks.source.pluginTitleWithLink`,
            defaultMessage: `Plugin · <link>{pluginName}</link>`,
            description: `Dialog title for hooks from one plugin, with the plugin name linked to its details page`,
            values: {
              pluginName: r,
              link: (t) =>
                (0, $.jsx)(
                  _,
                  {
                    className: `text-token-text-link-foreground hover:underline`,
                    to: e,
                    children: t,
                  },
                  `plugin-detail-link`,
                ),
            },
          });
    }
  }
  return (0, $.jsx)(Pe, { source: i.source });
}
function He(e) {
  let t = null;
  for (let n of e) {
    let e = le(n.pluginId);
    if (e == null || (t != null && t !== e)) return null;
    t = e;
  }
  return t;
}
function Ue() {
  let e = (0, Q.c)(55),
    t = u(c),
    r = o(),
    i = g(),
    [a, l] = h(),
    p = s(),
    { selectedHostId: m, setSelectedHostId: _ } = se(),
    S = n(m),
    { data: C } = f(b),
    w = f(y),
    T;
  e[0] === m ? (T = e[1]) : ((T = { hostId: m }), (e[0] = m), (e[1] = T));
  let { data: E, isPending: D } = d(v, T),
    O;
  e[2] === a ? (O = e[3]) : ((O = a.get(`hostId`)), (e[2] = a), (e[3] = O));
  let k = O,
    A = k == null || k === m,
    j,
    M;
  if (
    e[4] !== C?.roots?.[0] ||
    e[5] !== A ||
    e[6] !== a ||
    e[7] !== m ||
    e[8] !== w ||
    e[9] !== E
  ) {
    let t = A ? a.get(`projectRoot`) : null,
      n = A ? a.get(`pluginId`) : null,
      r = null;
    (m === `local`
      ? (r = C?.roots?.[0] ?? null)
      : w?.hostId === m && (r = w.remotePath),
      (j = E == null ? void 0 : We(E.roots, [r, t])),
      (M = A
        ? te({
            pluginId: n,
            source: a.get(`source`),
            projectRoot: t,
            projectRoots: j,
          })
        : null),
      (e[4] = C?.roots?.[0]),
      (e[5] = A),
      (e[6] = a),
      (e[7] = m),
      (e[8] = w),
      (e[9] = E),
      (e[10] = j),
      (e[11] = M));
  } else ((j = e[10]), (M = e[11]));
  let N = M,
    P;
  e[12] !== j || e[13] !== m
    ? ((P = { hostId: m, cwds: j }), (e[12] = j), (e[13] = m), (e[14] = P))
    : (P = e[14]);
  let F = d(U, P),
    I;
  e[15] === _
    ? (I = e[16])
    : ((I = (e) => {
        _(e);
      }),
      (e[15] = _),
      (e[16] = I));
  let L = (0, pe.useEffectEvent)(I),
    R;
  e[17] !== p || e[18] !== m || e[19] !== k || e[20] !== L
    ? ((R = () => {
        if (k != null && k !== m) {
          L(k);
          return;
        }
        H(p, m, { refetchType: `active` });
      }),
      (e[17] = p),
      (e[18] = m),
      (e[19] = k),
      (e[20] = L),
      (e[21] = R))
    : (R = e[21]);
  let z;
  (e[22] !== i.key || e[23] !== p || e[24] !== m || e[25] !== k
    ? ((z = [i.key, p, m, k]),
      (e[22] = i.key),
      (e[23] = p),
      (e[24] = m),
      (e[25] = k),
      (e[26] = z))
    : (z = e[26]),
    (0, pe.useEffect)(R, z));
  let B = d(V, m),
    W;
  e[27] !== F || e[28] !== r || e[29] !== p || e[30] !== t || e[31] !== m
    ? ((W = () => {
        F.refetch().then(async (e) => {
          e.isSuccess &&
            (await H(p, m, { broadcast: !0, refetchType: `none` }),
            t.get(x).success(
              r.formatMessage({
                id: `settings.hooks.refresh.success`,
                defaultMessage: `Refreshed hooks`,
                description: `Success toast shown after manually refreshing hooks`,
              }),
            ));
        });
      }),
      (e[27] = F),
      (e[28] = r),
      (e[29] = p),
      (e[30] = t),
      (e[31] = m),
      (e[32] = W))
    : (W = e[32]);
  let G = W,
    ee;
  e[33] !== a || e[34] !== m || e[35] !== l
    ? ((ee = (e) => {
        let t = new URLSearchParams(a);
        (oe(t, m, e), l(t, { replace: !0 }));
      }),
      (e[33] = a),
      (e[34] = m),
      (e[35] = l),
      (e[36] = ee))
    : (ee = e[36]);
  let K = ee,
    ne = F.data?.data,
    re = S.kind !== `local`,
    ie = F.isFetching && !F.isPending,
    ae = E?.labels,
    q,
    J;
  e[37] === B
    ? ((q = e[38]), (J = e[39]))
    : ((q = (e, t) => {
        B.mutate([{ key: e.key, enabled: t }]);
      }),
      (J = (e) => {
        B.mutate([{ key: e.key, trustedHash: e.currentHash }]);
      }),
      (e[37] = B),
      (e[38] = q),
      (e[39] = J));
  let Y;
  return (
    e[40] !== G ||
    e[41] !== K ||
    e[42] !== F.error ||
    e[43] !== F.isPending ||
    e[44] !== D ||
    e[45] !== j ||
    e[46] !== m ||
    e[47] !== N ||
    e[48] !== re ||
    e[49] !== ie ||
    e[50] !== ae ||
    e[51] !== q ||
    e[52] !== J ||
    e[53] !== ne
      ? ((Y = (0, $.jsx)(Ee, {
          entries: ne,
          hostId: m,
          isRemoteHost: re,
          isLoadingProjectRoots: D,
          loadError: F.error,
          isLoading: F.isPending,
          isRefreshing: ie,
          projectRootLabels: ae,
          projectRoots: j,
          selectedSourceSection: N,
          onSelectSourceSection: K,
          onRefreshHooks: G,
          onToggleHookEnabled: q,
          onTrustHook: J,
        })),
        (e[40] = G),
        (e[41] = K),
        (e[42] = F.error),
        (e[43] = F.isPending),
        (e[44] = D),
        (e[45] = j),
        (e[46] = m),
        (e[47] = N),
        (e[48] = re),
        (e[49] = ie),
        (e[50] = ae),
        (e[51] = q),
        (e[52] = J),
        (e[53] = ne),
        (e[54] = Y))
      : (Y = e[54]),
    Y
  );
}
function We(e, t) {
  return Array.from(new Set([...t.filter((e) => e != null), ...e]));
}
export { Ue as HooksSettings };
//# sourceMappingURL=hooks-settings-C0ukGiDx.js.map
