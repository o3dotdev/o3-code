import "./src-C.js";
import "./app-server-manager-signals-DkRDRgNB.js";
import { t as e } from "./jsx-runtime.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./core.esm.js";
import "./marked.esm-BR-H6018.js";
import {
  G as t,
  R as n,
  S as r,
  U as i,
  X as a,
  Z as o,
  wt as s,
  y as c,
} from "./setting-storage.js";
import { m as l } from "./chunk-LFPYN7LY.js";
import "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./codex-api-bK--r_2t.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import "./use-debounced-value-BtOJx-Vp.js";
import "./experimental-features-queries.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import { t as u } from "./tooltip-CDzchJxN.js";
import "./route-scope.js";
import "./mention-item.js";
import { t as d } from "./use-collaboration-mode-CQFe-Ilp.js";
import "./use-model-settings-BGTYyORt.js";
import { t as f } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import { t as p } from "./spinner.js";
import "./use-codex-home.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./link-external-BPZREBQk.js";
import "./open-config-toml-button.js";
import "./open-workspace-file-WgoEFjrv.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./model-queries-CVdTsyPv.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./collaboration-mode-queries.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as m } from "./app-shell-D4HBgUPf.js";
import "./x-C_RDKBp5.js";
import "./projectless-thread.js";
import "./use-platform.js";
import "./browser-sidebar-availability.js";
import "./browser-sidebar-manager.js";
import "./app-shell-tab-controller-BTWycTBb.js";
import "./info-B8GAwpK6.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./dialog-layout.js";
import { t as h } from "./plugin-config-edits-DUMiyKty.js";
import "./local-projects.js";
import "./run-command.js";
import { r as g, t as _ } from "./sites.js";
import { r as v } from "./modal-controller-state.js";
import "./open-project-setup-dialog-cJXYMFtk.js";
import "./folder.js";
import "./initial-route-atom.js";
import "./use-stable-callback.js";
import "./electron-menu-shortcuts.js";
import "./use-register-command.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm-BRPfvPzy.js";
import "./use-resize-observer-DCpyQHos.js";
import "./check-md.js";
import "./chevron-right.js";
import "./context-menu.js";
import "./command-keybindings-C3NM9T-L.js";
import "./expand.js";
import "./keyboard-modifier-state-BKqcycjV.js";
import "./arrow-left.js";
import "./use-window-controls-safe-area.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./select-project.js";
import { n as y } from "./use-start-new-conversation.js";
import "./search.js";
import { r as b, t as x } from "./dropdown-DtQxMoJw.js";
import "./globe-CnvlclXd.js";
import "./three-dots.js";
import "./chevron-NmAOI_v1.js";
import { t as S } from "./use-relative-now.js";
import { t as C } from "./format-short-local-date-time.js";
import { t as w } from "./plugin-prefill-prompt.js";
import "./building.js";
import "./list-navigation-DnxNfoPi.js";
import "./arrow-up-right-lg-C37BA3DV.js";
import "./link-Cym8GZvE.js";
import { t as T } from "./more-menu-trigger-DgGAgPrg.js";
import { t as E } from "./arrow-top-right.js";
import { t as D } from "./share.js";
import { m as O, s as k } from "./appgen-url-DZWguk-Q.js";
import "./lock.js";
import "./members.js";
import { t as A } from "./appgen-access-mode-CTtzZwIv.js";
import { n as j, t as M } from "./appgen-share-dialog-DcTYP8wx.js";
import "./use-workspace-users.js";
var N = s(),
  P = e();
function F(e) {
  let t = (0, N.c)(11),
    r,
    a,
    o;
  t[0] === e
    ? ((r = t[1]), (a = t[2]), (o = t[3]))
    : (({ nowMs: a, value: o, ...r } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o));
  let s = S(),
    c;
  t[4] === o
    ? (c = t[5])
    : ((c = o instanceof Date ? o : new Date(o)), (t[4] = o), (t[5] = c));
  let l = c,
    u = I(a == null ? s : new Date(a), l);
  if (u === 0) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, P.jsx)(i, {
            id: `formattedRelativeCalendarDate.today`,
            defaultMessage: `Today`,
            description: `Relative calendar date label for today`,
          })),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  if (u === 1) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, P.jsx)(i, {
            id: `formattedRelativeCalendarDate.yesterday`,
            defaultMessage: `Yesterday`,
            description: `Relative calendar date label for yesterday`,
          })),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let d;
  return (
    t[8] !== l || t[9] !== r
      ? ((d = (0, P.jsx)(n, { ...r, value: l })),
        (t[8] = l),
        (t[9] = r),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function I(e, t) {
  let n = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
    r = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  return Math.round((n.getTime() - r.getTime()) / 864e5);
}
function L() {
  let e = (0, N.c)(15),
    { data: t, isError: n, isLoading: r } = o(k),
    { setSelectedMode: i } = d(),
    a = y(),
    s;
  e[0] !== i || e[1] !== a
    ? ((s = () => {
        (i(`plan`),
          a({
            activeProject: null,
            prefillPrompt: w({
              defaultPrompt: `Create a website that …`,
              pluginDisplayName: `Sites`,
              pluginId: h,
            }),
            startInSidebar: !0,
          }));
      }),
      (e[0] = i),
      (e[1] = a),
      (e[2] = s))
    : (s = e[2]);
  let c = s,
    l;
  e[3] === c
    ? (l = e[4])
    : ((l = (0, P.jsx)(R, { onCreate: c })), (e[3] = c), (e[4] = l));
  let u = l,
    f;
  e[5] === u
    ? (f = e[6])
    : ((f = (0, P.jsx)(m.Header, { children: u })), (e[5] = u), (e[6] = f));
  let p;
  e[7] !== t || e[8] !== c || e[9] !== n || e[10] !== r
    ? ((p = (0, P.jsx)(`div`, {
        className: `flex min-h-0 flex-1 overflow-y-auto px-panel pb-panel`,
        children: (0, P.jsx)(`div`, {
          className: `mx-auto flex min-h-full w-full max-w-[760px] flex-col pt-10`,
          children: r
            ? (0, P.jsx)(z, {})
            : n || t == null
              ? (0, P.jsx)(V, {})
              : t.items.length === 0
                ? (0, P.jsx)(B, { onCreate: c })
                : (0, P.jsx)(H, { projects: t.items }),
        }),
      })),
      (e[7] = t),
      (e[8] = c),
      (e[9] = n),
      (e[10] = r),
      (e[11] = p))
    : (p = e[11]);
  let g;
  return (
    e[12] !== f || e[13] !== p
      ? ((g = (0, P.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [f, p],
        })),
        (e[12] = f),
        (e[13] = p),
        (e[14] = g))
      : (g = e[14]),
    g
  );
}
function R(e) {
  let t = (0, N.c)(4),
    { onCreate: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, P.jsx)(`div`, {
        className: `text-base font-medium text-token-foreground`,
        children: (0, P.jsx)(i, {
          id: `appgenPage.title`,
          defaultMessage: `Sites`,
          description: `Header title for the Sites page`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, P.jsx)(i, {
        id: `appgenPage.create`,
        defaultMessage: `Create`,
        description: `Button label for starting a new site from the Sites page`,
      })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  return (
    t[2] === n
      ? (o = t[3])
      : ((o = (0, P.jsxs)(`div`, {
          className: `draggable flex w-full min-w-0 items-center justify-between gap-3 electron:h-toolbar extension:py-row-y`,
          children: [
            r,
            (0, P.jsx)(f, {
              color: `outline`,
              size: `toolbar`,
              onClick: n,
              children: a,
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = o)),
    o
  );
}
function z() {
  let e = (0, N.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, P.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, P.jsx)(p, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function B(e) {
  let t = (0, N.c)(5),
    { onCreate: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, P.jsx)(_, { className: `icon-lg text-token-foreground` })),
      (t[0] = r))
    : (r = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, P.jsx)(`div`, {
        className: `text-base font-medium text-token-foreground`,
        children: (0, P.jsx)(i, {
          id: `appgenPage.empty.title`,
          defaultMessage: `Nothing here yet`,
          description: `Empty state title for the Sites page`,
        }),
      })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, P.jsx)(i, {
        id: `appgenPage.empty.create`,
        defaultMessage: `Create new site`,
        description: `Button label for creating a new site from the empty state`,
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] === n
      ? (s = t[4])
      : ((s = (0, P.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, P.jsxs)(`div`, {
            className: `flex flex-col items-center gap-4 text-center`,
            children: [
              r,
              a,
              (0, P.jsx)(f, {
                color: `outline`,
                size: `medium`,
                onClick: n,
                children: o,
              }),
            ],
          }),
        })),
        (t[3] = n),
        (t[4] = s)),
    s
  );
}
function V() {
  let e = (0, N.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, P.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, P.jsx)(`div`, {
            className: `text-sm font-medium text-token-text-secondary`,
            children: (0, P.jsx)(i, {
              id: `appgenPage.error.title`,
              defaultMessage: `Unable to load sites`,
              description: `Error state title for the Sites page`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function H(e) {
  let t = (0, N.c)(4),
    { projects: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.map(U)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, P.jsx)(`div`, {
          className: `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`,
          children: r,
        })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function U(e) {
  return (0, P.jsx)(W, { project: e }, e.id);
}
function W(e) {
  let n = (0, N.c)(39),
    { project: r } = e,
    i = t(),
    a = l(),
    o;
  n[0] !== i || n[1] !== r.title
    ? ((o = i.formatMessage(
        {
          id: `appgenPage.openSettings`,
          defaultMessage: `Open settings for {siteTitle}`,
          description: `Accessible label for opening site settings from the sites grid`,
        },
        { siteTitle: r.title },
      )),
      (n[0] = i),
      (n[1] = r.title),
      (n[2] = o))
    : (o = n[2]);
  let s;
  n[3] !== a || n[4] !== r.id
    ? ((s = () => {
        a(g(r.id));
      }),
      (n[3] = a),
      (n[4] = r.id),
      (n[5] = s))
    : (s = n[5]);
  let c;
  n[6] !== o || n[7] !== s
    ? ((c = (0, P.jsx)(`button`, {
        "aria-label": o,
        className: `absolute inset-0 cursor-interaction rounded-lg bg-transparent group-hover/appgen-card:bg-token-list-hover-background/30 focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`,
        onClick: s,
        type: `button`,
      })),
      (n[6] = o),
      (n[7] = s),
      (n[8] = c))
    : (c = n[8]);
  let d;
  n[9] === r.title
    ? (d = n[10])
    : ((d = (0, P.jsx)(`span`, {
        className: `truncate text-sm leading-5 font-medium text-token-foreground`,
        children: r.title,
      })),
      (n[9] = r.title),
      (n[10] = d));
  let f;
  n[11] === r.slug
    ? (f = n[12])
    : ((f = (0, P.jsx)(`span`, {
        className: `truncate text-xs leading-[18px] text-token-text-secondary`,
        children: r.slug,
      })),
      (n[11] = r.slug),
      (n[12] = f));
  let p;
  n[13] !== d || n[14] !== f
    ? ((p = (0, P.jsxs)(`div`, {
        className: `flex min-w-0 flex-col pr-8`,
        children: [d, f],
      })),
      (n[13] = d),
      (n[14] = f),
      (n[15] = p))
    : (p = n[15]);
  let m;
  n[16] === r.access_policy
    ? (m = n[17])
    : ((m = (0, P.jsx)(G, { accessPolicy: r.access_policy })),
      (n[16] = r.access_policy),
      (n[17] = m));
  let h;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, P.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
      })),
      (n[18] = h))
    : (h = n[18]);
  let _;
  n[19] === r.updated_at
    ? (_ = n[20])
    : ((_ = C(r.updated_at)), (n[19] = r.updated_at), (n[20] = _));
  let v;
  n[21] === r.updated_at
    ? (v = n[22])
    : ((v = (0, P.jsx)(`span`, {
        className: `pointer-events-auto inline-flex select-none`,
        children: (0, P.jsx)(F, {
          value: r.updated_at,
          month: `short`,
          day: `numeric`,
        }),
      })),
      (n[21] = r.updated_at),
      (n[22] = v));
  let y;
  n[23] !== v || n[24] !== _
    ? ((y = (0, P.jsx)(u, { tooltipContent: _, children: v })),
      (n[23] = v),
      (n[24] = _),
      (n[25] = y))
    : (y = n[25]);
  let b;
  n[26] !== y || n[27] !== m
    ? ((b = (0, P.jsxs)(`div`, {
        className: `flex items-center gap-1.5 text-xs leading-[18px] text-token-text-tertiary`,
        children: [m, h, y],
      })),
      (n[26] = y),
      (n[27] = m),
      (n[28] = b))
    : (b = n[28]);
  let x;
  n[29] !== r.current_live_url || n[30] !== r.id
    ? ((x = (0, P.jsx)(K, { liveUrl: r.current_live_url, projectId: r.id })),
      (n[29] = r.current_live_url),
      (n[30] = r.id),
      (n[31] = x))
    : (x = n[31]);
  let S;
  n[32] !== b || n[33] !== x || n[34] !== p
    ? ((S = (0, P.jsxs)(`div`, {
        className: `pointer-events-none relative z-10 flex min-h-24 flex-col justify-between gap-2.5 p-4`,
        children: [p, b, x],
      })),
      (n[32] = b),
      (n[33] = x),
      (n[34] = p),
      (n[35] = S))
    : (S = n[35]);
  let w;
  return (
    n[36] !== S || n[37] !== c
      ? ((w = (0, P.jsxs)(`div`, {
          className: `group/appgen-card relative overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary shadow-sm`,
          children: [c, S],
        })),
        (n[36] = S),
        (n[37] = c),
        (n[38] = w))
      : (w = n[38]),
    w
  );
}
function G(e) {
  let n = (0, N.c)(15),
    { accessPolicy: r } = e,
    a = t(),
    o;
  n[0] === r ? (o = n[1]) : ((o = O(r)), (n[0] = r), (n[1] = o));
  let s = o,
    c = j[s],
    l;
  n[2] === c
    ? (l = n[3])
    : ((l = (0, P.jsx)(i, { ...c })), (n[2] = c), (n[3] = l));
  let d;
  n[4] !== s || n[5] !== a
    ? ((d = a.formatMessage(j[s])), (n[4] = s), (n[5] = a), (n[6] = d))
    : (d = n[6]);
  let f;
  n[7] === r
    ? (f = n[8])
    : ((f = (0, P.jsx)(A, {
        className: `icon-xs shrink-0`,
        accessPolicy: r,
        "aria-hidden": !0,
      })),
      (n[7] = r),
      (n[8] = f));
  let p;
  n[9] !== d || n[10] !== f
    ? ((p = (0, P.jsx)(`span`, {
        "aria-label": d,
        className: `pointer-events-auto inline-flex`,
        role: `img`,
        children: f,
      })),
      (n[9] = d),
      (n[10] = f),
      (n[11] = p))
    : (p = n[11]);
  let m;
  return (
    n[12] !== l || n[13] !== p
      ? ((m = (0, P.jsx)(u, { tooltipContent: l, children: p })),
        (n[12] = l),
        (n[13] = p),
        (n[14] = m))
      : (m = n[14]),
    m
  );
}
function K(e) {
  let n = (0, N.c)(16),
    { liveUrl: o, projectId: s } = e,
    l = t(),
    u = a(r),
    d;
  n[0] === l
    ? (d = n[1])
    : ((d = l.formatMessage({
        id: `appgenPage.rowActions.label`,
        defaultMessage: `Site actions`,
        description: `Accessible label for the site card actions dropdown trigger`,
      })),
      (n[0] = l),
      (n[1] = d));
  let f;
  n[2] === d
    ? (f = n[3])
    : ((f = (0, P.jsx)(T, { label: d })), (n[2] = d), (n[3] = f));
  let p;
  n[4] !== s || n[5] !== u
    ? ((p = () => {
        v(u, M, { projectId: s });
      }),
      (n[4] = s),
      (n[5] = u),
      (n[6] = p))
    : (p = n[6]);
  let m;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, P.jsx)(i, {
        id: `appgenPage.rowActions.share`,
        defaultMessage: `Share`,
        description: `Dropdown menu item for opening site sharing settings`,
      })),
      (n[7] = m))
    : (m = n[7]);
  let h;
  n[8] === p
    ? (h = n[9])
    : ((h = (0, P.jsx)(b.Item, { LeftIcon: D, onSelect: p, children: m })),
      (n[8] = p),
      (n[9] = h));
  let g;
  n[10] === o
    ? (g = n[11])
    : ((g =
        o == null
          ? null
          : (0, P.jsx)(b.Item, {
              LeftIcon: E,
              onSelect: () => {
                c.dispatchMessage(`open-in-browser`, { url: o });
              },
              children: (0, P.jsx)(i, {
                id: `appgenPage.rowActions.visit`,
                defaultMessage: `Visit`,
                description: `Dropdown menu item for opening a live site externally`,
              }),
            })),
      (n[10] = o),
      (n[11] = g));
  let _;
  return (
    n[12] !== f || n[13] !== h || n[14] !== g
      ? ((_ = (0, P.jsx)(`div`, {
          className: `pointer-events-auto absolute top-4 right-2 opacity-0 group-focus-within/appgen-card:opacity-100 group-hover/appgen-card:opacity-100 has-[[data-state=open]]:opacity-100`,
          children: (0, P.jsxs)(x, {
            align: `end`,
            contentWidth: `sm`,
            triggerButton: f,
            children: [h, g],
          }),
        })),
        (n[12] = f),
        (n[13] = h),
        (n[14] = g),
        (n[15] = _))
      : (_ = n[15]),
    _
  );
}
export { L as AppgenPage };
//# sourceMappingURL=appgen-page-zPnUASPr.js.map
