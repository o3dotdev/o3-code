import { s as e } from "./chunk-Bj-mKKzh.js";
import { Ut as t } from "./src-C.js";
import "./app-server-manager-signals-DkRDRgNB.js";
import { n, t as r } from "./jsx-runtime.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./core.esm.js";
import "./marked.esm-BR-H6018.js";
import {
  G as i,
  S as a,
  U as o,
  X as s,
  Y as c,
  wt as l,
  y as u,
} from "./setting-storage.js";
import { a as d, g as f, m as p } from "./chunk-LFPYN7LY.js";
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
import { r as m } from "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip-CDzchJxN.js";
import "./route-scope.js";
import { t as h } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import { t as g } from "./spinner.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./remote-projects.js";
import "./proxy.js";
import "./app-shell-state.js";
import { t as _ } from "./app-shell-D4HBgUPf.js";
import "./x-C_RDKBp5.js";
import "./projectless-thread.js";
import "./use-platform.js";
import "./browser-sidebar-availability.js";
import "./browser-sidebar-manager.js";
import "./app-shell-tab-controller-BTWycTBb.js";
import "./info-B8GAwpK6.js";
import "./error-boundary.js";
import "./download.js";
import { t as v } from "./with-window.js";
import "./window-app-action-helpers.js";
import {
  a as y,
  d as b,
  i as x,
  l as S,
  n as C,
  r as w,
  u as T,
} from "./dialog-layout.js";
import "./local-projects.js";
import "./run-command.js";
import { r as ee } from "./modal-controller-state.js";
import "./open-project-setup-dialog-cJXYMFtk.js";
import "./folder.js";
import "./use-stable-callback.js";
import "./electron-menu-shortcuts.js";
import "./use-register-command.js";
import "./homepage-logo.js";
import "./loading-page.js";
import "./sortable.esm-BRPfvPzy.js";
import "./use-resize-observer-DCpyQHos.js";
import "./check-md.js";
import { t as E } from "./chevron-right.js";
import "./context-menu.js";
import "./command-keybindings-C3NM9T-L.js";
import "./expand.js";
import "./keyboard-modifier-state-BKqcycjV.js";
import "./arrow-left.js";
import "./use-window-controls-safe-area.js";
import "./app-shell-bottom-panel-scroll-sync.js";
import "./search.js";
import "./dropdown-DtQxMoJw.js";
import "./globe-CnvlclXd.js";
import { t as D } from "./trash.js";
import "./chevron-NmAOI_v1.js";
import { t as O } from "./plus.js";
import "./building.js";
import "./list-navigation-DnxNfoPi.js";
import "./arrow-up-right-lg-C37BA3DV.js";
import "./link-Cym8GZvE.js";
import { t as k } from "./arrow-top-right.js";
import { n as A } from "./settings-row.js";
import { n as j, t as M } from "./settings-group.js";
import {
  a as N,
  i as P,
  l as F,
  o as I,
  t as L,
} from "./appgen-url-DZWguk-Q.js";
import "./lock.js";
import "./members.js";
import { t as R } from "./appgen-access-mode-CTtzZwIv.js";
import { t as z } from "./appgen-share-dialog-DcTYP8wx.js";
import "./use-workspace-users.js";
import { t as B } from "./settings-empty-state-Bec-Sn2w.js";
var V = l(),
  te = e(n(), 1),
  ne = e(t(), 1),
  H = `<REDACTED>`;
function U(e) {
  return {
    environmentVariables: e.entries
      .filter((e) => !e.is_secret)
      .map(({ key: e, value: t }) => ({ key: e, value: t ?? `` })),
    secrets: e.entries
      .filter((e) => e.is_secret)
      .map(({ key: e }) => ({
        key: e,
        keyInputDisabledWhileValue: H,
        previousKey: e,
        value: H,
      })),
  };
}
function W(e, t) {
  let n = [
    ...t.environmentVariables.map(({ key: e }) => e),
    ...t.secrets.map(({ key: e }) => e),
  ];
  if (new Set(n).size !== n.length) return null;
  let r = new Set([
    ...t.environmentVariables.map(({ key: e }) => e),
    ...t.secrets.map((e) => (G(e) ? e.previousKey : e.key)),
  ]);
  return {
    remove: e.entries.filter(({ key: e }) => !r.has(e)).map(({ key: e }) => e),
    set_values: [
      ...t.environmentVariables.filter((t) => K(e, t)).map((e) => q(e, !1)),
      ...t.secrets.filter((e) => !G(e)).map((e) => q(e, !0)),
    ],
  };
}
function G(e) {
  return e.previousKey != null && e.value === H;
}
function K(e, t) {
  let n = e.entries.find((e) => e.key === t.key);
  return n == null || n.is_secret || n.value !== t.value;
}
function q(e, t) {
  return { is_secret: t, key: e.key, type: `envvar`, value: e.value };
}
function J(e, t, n) {
  let r = Y(n),
    i = r[0];
  return i == null
    ? null
    : [...e.map((e, n) => (n === t ? { ...e, ...i } : e)), ...r.slice(1)];
}
function Y(e) {
  let t = [];
  for (let n of e.split(/\r?\n/)) {
    let e = n.trim();
    if (e.length === 0 || e.startsWith(`#`) || e.startsWith(`;`)) continue;
    e.startsWith(`export `) && (e = e.slice(7).trim());
    let r = X(e, `#`, (t) => e[t - 1]?.trim() === ``);
    if ((r !== -1 && (e = e.slice(0, r).trim()), e.length === 0)) continue;
    let i = X(e, `=`);
    if (i === -1) continue;
    let a = e.slice(0, i).trim();
    a.length !== 0 && t.push({ key: a, value: re(e.slice(i + 1).trim()) });
  }
  return t;
}
function X(e, t, n = () => !0) {
  let r = !1,
    i = !1,
    a = !1;
  for (let o = 0; o < e.length; o += 1) {
    let s = e[o];
    if (r) {
      r = !1;
      continue;
    }
    if (s === `\\`) {
      r = !0;
      continue;
    }
    if (s === `'` && !i) {
      a = !a;
      continue;
    }
    if (s === `"` && !a) {
      i = !i;
      continue;
    }
    if (s === t && !a && !i && n(o)) return o;
  }
  return -1;
}
function re(e) {
  return (e.startsWith(`"`) && e.endsWith(`"`)) ||
    (e.startsWith(`'`) && e.endsWith(`'`))
    ? e.slice(1, -1)
    : e;
}
var Z = r();
function ie(e) {
  let t = (0, V.c)(20),
    {
      addButtonLabel: n,
      disabled: r,
      entries: i,
      onChange: a,
      subtitle: s,
      title: c,
      valueInputType: l,
    } = e,
    u = r === void 0 ? !1 : r,
    d;
  t[0] !== i || t[1] !== a
    ? ((d = () => {
        a([...i, { key: ``, value: `` }]);
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(O, { className: `icon-xs` })), (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] !== n || t[5] !== u || t[6] !== d
    ? ((p = (0, Z.jsxs)(h, {
        color: `outline`,
        disabled: u,
        size: `toolbar`,
        onClick: d,
        children: [f, n],
      })),
      (t[4] = n),
      (t[5] = u),
      (t[6] = d),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== s || t[9] !== p || t[10] !== c
    ? ((m = (0, Z.jsx)(M.Header, {
        actions: p,
        subtitle: s,
        title: c,
        titleGap: `none`,
      })),
      (t[8] = s),
      (t[9] = p),
      (t[10] = c),
      (t[11] = m))
    : (m = t[11]);
  let g;
  t[12] !== u || t[13] !== i || t[14] !== a || t[15] !== l
    ? ((g = (0, Z.jsx)(M.Content, {
        children: (0, Z.jsx)(j, {
          children:
            i.length === 0
              ? (0, Z.jsx)(B, {
                  children: (0, Z.jsx)(o, {
                    id: `envEntrySettingsGroup.empty`,
                    defaultMessage: `Nothing yet`,
                    description: `Empty state for an environment entry settings section`,
                  }),
                })
              : (0, Z.jsx)(`div`, {
                  className: `flex flex-col gap-2 p-4`,
                  children: i.map((e, t) =>
                    (0, Z.jsx)(
                      ae,
                      {
                        disabled: u,
                        entry: e,
                        valueInputType: l,
                        onChange: (e) => {
                          a(i.map((n, r) => (r === t ? e : n)));
                        },
                        onKeyPaste: (e) => {
                          let n = J(
                            i,
                            t,
                            e.clipboardData.getData(`text/plain`),
                          );
                          n != null && (e.preventDefault(), a(n));
                        },
                        onRemove: () => {
                          a(i.filter((e, n) => n !== t));
                        },
                      },
                      t,
                    ),
                  ),
                }),
        }),
      })),
      (t[12] = u),
      (t[13] = i),
      (t[14] = a),
      (t[15] = l),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== m || t[18] !== g
      ? ((_ = (0, Z.jsxs)(M, { className: `gap-2`, children: [m, g] })),
        (t[17] = m),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
function ae(e) {
  let t = (0, V.c)(39),
    {
      disabled: n,
      entry: r,
      onChange: a,
      onKeyPaste: o,
      onRemove: s,
      valueInputType: c,
    } = e,
    l = i(),
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = l.formatMessage({
        id: `envEntrySettingsGroup.key.ariaLabel`,
        defaultMessage: `Key`,
        description: `Accessible label for an environment variable or secret key input`,
      })),
      (t[0] = l),
      (t[1] = u));
  let d = n || r.keyInputDisabledWhileValue === r.value,
    f;
  t[2] === l
    ? (f = t[3])
    : ((f = l.formatMessage({
        id: `envEntrySettingsGroup.key.placeholder`,
        defaultMessage: `Key`,
        description: `Placeholder for an environment variable or secret key input`,
      })),
      (t[2] = l),
      (t[3] = f));
  let p;
  t[4] !== r || t[5] !== a
    ? ((p = (e) => {
        a({ ...r, key: e.target.value });
      }),
      (t[4] = r),
      (t[5] = a),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== r.key ||
  t[8] !== o ||
  t[9] !== u ||
  t[10] !== d ||
  t[11] !== f ||
  t[12] !== p
    ? ((m = (0, Z.jsx)(Q, {
        "aria-label": u,
        disabled: d,
        placeholder: f,
        value: r.key,
        onPaste: o,
        onChange: p,
      })),
      (t[7] = r.key),
      (t[8] = o),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let g;
  t[14] === l
    ? (g = t[15])
    : ((g = l.formatMessage({
        id: `envEntrySettingsGroup.value.ariaLabel`,
        defaultMessage: `Value`,
        description: `Accessible label for an environment variable or secret value input`,
      })),
      (t[14] = l),
      (t[15] = g));
  let _;
  t[16] === l
    ? (_ = t[17])
    : ((_ = l.formatMessage({
        id: `envEntrySettingsGroup.value.placeholder`,
        defaultMessage: `Value`,
        description: `Placeholder for an environment variable or secret value input`,
      })),
      (t[16] = l),
      (t[17] = _));
  let v;
  t[18] !== r || t[19] !== a
    ? ((v = (e) => {
        a({ ...r, value: e.target.value });
      }),
      (t[18] = r),
      (t[19] = a),
      (t[20] = v))
    : (v = t[20]);
  let y;
  t[21] !== n ||
  t[22] !== r.value ||
  t[23] !== g ||
  t[24] !== _ ||
  t[25] !== v ||
  t[26] !== c
    ? ((y = (0, Z.jsx)(Q, {
        "aria-label": g,
        disabled: n,
        placeholder: _,
        type: c,
        value: r.value,
        onChange: v,
      })),
      (t[21] = n),
      (t[22] = r.value),
      (t[23] = g),
      (t[24] = _),
      (t[25] = v),
      (t[26] = c),
      (t[27] = y))
    : (y = t[27]);
  let b;
  t[28] === l
    ? (b = t[29])
    : ((b = l.formatMessage({
        id: `envEntrySettingsGroup.remove.ariaLabel`,
        defaultMessage: `Remove entry`,
        description: `Accessible label for removing an environment variable or secret row`,
      })),
      (t[28] = l),
      (t[29] = b));
  let x;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(D, { className: `icon-2xs` })), (t[30] = x))
    : (x = t[30]);
  let S;
  t[31] !== n || t[32] !== s || t[33] !== b
    ? ((S = (0, Z.jsx)(h, {
        "aria-label": b,
        color: `ghost`,
        disabled: n,
        size: `icon`,
        onClick: s,
        children: x,
      })),
      (t[31] = n),
      (t[32] = s),
      (t[33] = b),
      (t[34] = S))
    : (S = t[34]);
  let C;
  return (
    t[35] !== S || t[36] !== m || t[37] !== y
      ? ((C = (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
          children: [m, y, S],
        })),
        (t[35] = S),
        (t[36] = m),
        (t[37] = y),
        (t[38] = C))
      : (C = t[38]),
    C
  );
}
function Q(e) {
  let t = (0, V.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, Z.jsx)(`input`, {
          className: `h-token-button-composer w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
          ...e,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function $() {
  let e = (0, V.c)(3),
    { projectId: t } = f();
  if (t == null) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Z.jsx)(d, { replace: !0, to: `/sites` })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let n;
  return (
    e[1] === t
      ? (n = e[2])
      : ((n = (0, Z.jsx)(oe, { projectId: t })), (e[1] = t), (e[2] = n)),
    n
  );
}
function oe(e) {
  let t = (0, V.c)(22),
    { projectId: n } = e,
    { data: r, isError: i, isLoading: a } = c(I, n),
    { data: o, isError: s, isLoading: l } = c(N, n),
    u = r?.current_live_url,
    d;
  t[0] === u ? (d = t[1]) : ((d = L(u)), (t[0] = u), (t[1] = d));
  let f = d,
    p = r?.title,
    m;
  t[2] !== u || t[3] !== p
    ? ((m = (0, Z.jsx)(se, { liveUrl: u, siteTitle: p })),
      (t[2] = u),
      (t[3] = p),
      (t[4] = m))
    : (m = t[4]);
  let h = m,
    g;
  t[5] === h
    ? (g = t[6])
    : ((g = (0, Z.jsx)(v, { extension: !0, children: h })),
      (t[5] = h),
      (t[6] = g));
  let y;
  t[7] === h
    ? (y = t[8])
    : ((y = (0, Z.jsx)(v, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, Z.jsx)(_.Header, { children: h }),
      })),
      (t[7] = h),
      (t[8] = y));
  let b;
  t[9] !== o ||
  t[10] !== s ||
  t[11] !== l ||
  t[12] !== i ||
  t[13] !== a ||
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== f
    ? ((b = (0, Z.jsx)(`div`, {
        className: `scrollbar-stable flex min-h-0 flex-1 overflow-y-auto p-panel`,
        children: (0, Z.jsx)(`div`, {
          className: `mx-auto flex w-full max-w-3xl flex-col gap-[var(--padding-panel)]`,
          children:
            a || l
              ? (0, Z.jsx)(de, {})
              : i || s || r == null || o == null
                ? (0, Z.jsx)(fe, {})
                : (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, Z.jsx)(`div`, {
                            className: `truncate text-[22px] leading-7 font-medium text-token-text-primary`,
                            children: r.title,
                          }),
                          f == null
                            ? null
                            : (0, Z.jsx)(`div`, {
                                className: `truncate text-xs text-token-text-tertiary`,
                                children: f,
                              }),
                        ],
                      }),
                      (0, Z.jsx)(
                        ce,
                        {
                          accessPolicy: r.access_policy,
                          environment: o,
                          projectId: n,
                          siteSlug: r.slug,
                          siteTitle: r.title,
                        },
                        n,
                      ),
                    ],
                  }),
        }),
      })),
      (t[9] = o),
      (t[10] = s),
      (t[11] = l),
      (t[12] = i),
      (t[13] = a),
      (t[14] = n),
      (t[15] = r),
      (t[16] = f),
      (t[17] = b))
    : (b = t[17]);
  let x;
  return (
    t[18] !== g || t[19] !== y || t[20] !== b
      ? ((x = (0, Z.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [g, y, b],
        })),
        (t[18] = g),
        (t[19] = y),
        (t[20] = b),
        (t[21] = x))
      : (x = t[21]),
    x
  );
}
function se(e) {
  let t = (0, V.c)(19),
    { liveUrl: n, siteTitle: r } = e,
    i = p(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = () => {
        i(`/sites`);
      }),
      (t[0] = i),
      (t[1] = a));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(o, {
        id: `appgenSettings.header.sites`,
        defaultMessage: `Sites`,
        description: `Breadcrumb link back to the Sites page`,
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === a
    ? (c = t[4])
    : ((c = (0, Z.jsx)(`button`, {
        type: `button`,
        className: `cursor-interaction border-0 bg-transparent p-0 text-token-text-secondary hover:text-token-text-primary focus-visible:outline-1 focus-visible:outline-token-focus-border`,
        onClick: a,
        children: s,
      })),
      (t[3] = a),
      (t[4] = c));
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(E, {
        className: `icon-xs shrink-0 text-token-text-secondary`,
      })),
      (t[5] = l))
    : (l = t[5]);
  let d;
  t[6] === r
    ? (d = t[7])
    : ((d =
        r == null
          ? null
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(`span`, { className: `truncate`, children: r }),
                (0, Z.jsx)(E, {
                  className: `icon-xs shrink-0 text-token-text-secondary`,
                }),
              ],
            })),
      (t[6] = r),
      (t[7] = d));
  let f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(`span`, {
        className: `truncate text-token-text-primary`,
        children: (0, Z.jsx)(o, {
          id: `appgenSettings.header.title`,
          defaultMessage: `Settings`,
          description: `Current page breadcrumb for the site settings page`,
        }),
      })),
      (t[8] = f))
    : (f = t[8]);
  let m;
  t[9] !== c || t[10] !== d
    ? ((m = (0, Z.jsxs)(`nav`, {
        className: `flex min-w-0 items-center gap-1 text-sm text-token-text-secondary`,
        children: [c, l, d, f],
      })),
      (t[9] = c),
      (t[10] = d),
      (t[11] = m))
    : (m = t[11]);
  let g;
  t[12] === n
    ? (g = t[13])
    : ((g =
        n == null
          ? null
          : (0, Z.jsxs)(h, {
              color: `outline`,
              size: `toolbar`,
              onClick: () => {
                u.dispatchMessage(`open-in-browser`, { url: n });
              },
              children: [
                (0, Z.jsx)(k, { className: `icon-xs` }),
                (0, Z.jsx)(o, {
                  id: `appgenSettings.visit`,
                  defaultMessage: `Visit`,
                  description: `Button label for opening a live site externally`,
                }),
              ],
            })),
      (t[12] = n),
      (t[13] = g));
  let _;
  t[14] === g
    ? (_ = t[15])
    : ((_ = (0, Z.jsx)(`div`, {
        className: `flex shrink-0 items-center gap-2`,
        children: g,
      })),
      (t[14] = g),
      (t[15] = _));
  let v;
  return (
    t[16] !== m || t[17] !== _
      ? ((v = (0, Z.jsxs)(`div`, {
          className: `draggable flex w-full min-w-0 items-center justify-between gap-3 electron:h-toolbar extension:py-row-y`,
          children: [m, _],
        })),
        (t[16] = m),
        (t[17] = _),
        (t[18] = v))
      : (v = t[18]),
    v
  );
}
function ce(e) {
  let t = (0, V.c)(61),
    {
      accessPolicy: n,
      environment: r,
      projectId: l,
      siteSlug: u,
      siteTitle: d,
    } = e,
    f = s(a),
    p = c(F, l),
    g = i(),
    [_, v] = (0, te.useState)(null),
    y;
  t[0] !== r || t[1] !== _?.draft
    ? ((y = _?.draft ?? U(r)), (t[0] = r), (t[1] = _?.draft), (t[2] = y))
    : (y = t[2]);
  let b = y,
    x;
  t[3] === _
    ? (x = t[4])
    : ((x = _ == null ? null : W(_.baseEnvironment, _.draft)),
      (t[3] = _),
      (t[4] = x));
  let S = x,
    C;
  t[5] === r
    ? (C = t[6])
    : ((C = function (e) {
        v((t) => {
          let n = t?.baseEnvironment ?? r,
            i = U(n),
            a = e(t?.draft ?? i);
          return (0, ne.default)(a, i)
            ? null
            : { baseEnvironment: n, draft: a };
        });
      }),
      (t[5] = r),
      (t[6] = C));
  let w = C,
    T;
  t[7] !== S || t[8] !== g || t[9] !== f || t[10] !== p
    ? ((T = (e) => {
        (e.preventDefault(),
          S != null &&
            p.mutateAsync(S).then(
              () => {
                v(null);
              },
              () => {
                f.get(m).danger(
                  g.formatMessage({
                    id: `appgenSettings.save.error`,
                    defaultMessage: `Unable to save site settings`,
                    description: `Error toast shown when saving site environment settings fails`,
                  }),
                );
              },
            ));
      }),
      (t[7] = S),
      (t[8] = g),
      (t[9] = f),
      (t[10] = p),
      (t[11] = T))
    : (T = t[11]);
  let E;
  t[12] !== n || t[13] !== l
    ? ((E =
        n == null ? null : (0, Z.jsx)(le, { accessPolicy: n, projectId: l })),
      (t[12] = n),
      (t[13] = l),
      (t[14] = E))
    : (E = t[14]);
  let D;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(o, {
        id: `appgenSettings.environmentVariables.add`,
        defaultMessage: `Add variable`,
        description: `Button label to add a site environment variable`,
      })),
      (t[15] = D))
    : (D = t[15]);
  let O, k;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(o, {
        id: `appgenSettings.environmentVariables.description`,
        defaultMessage: `Settings your site uses while it runs, like URLs, names, or feature switches`,
        description: `Description for site environment variable settings`,
      })),
      (k = (0, Z.jsx)(o, {
        id: `appgenSettings.environmentVariables.title`,
        defaultMessage: `Environment variables`,
        description: `Heading for site environment variable settings`,
      })),
      (t[16] = O),
      (t[17] = k))
    : ((O = t[16]), (k = t[17]));
  let N;
  t[18] === w
    ? (N = t[19])
    : ((N = (e) => {
        w((t) => ({ ...t, environmentVariables: e }));
      }),
      (t[18] = w),
      (t[19] = N));
  let P;
  t[20] !== b.environmentVariables || t[21] !== N || t[22] !== p.isPending
    ? ((P = (0, Z.jsx)(ie, {
        addButtonLabel: D,
        disabled: p.isPending,
        entries: b.environmentVariables,
        subtitle: O,
        title: k,
        valueInputType: `text`,
        onChange: N,
      })),
      (t[20] = b.environmentVariables),
      (t[21] = N),
      (t[22] = p.isPending),
      (t[23] = P))
    : (P = t[23]);
  let I;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Z.jsx)(o, {
        id: `appgenSettings.secrets.add`,
        defaultMessage: `Add secret`,
        description: `Button label to add a site secret`,
      })),
      (t[24] = I))
    : (I = t[24]);
  let L, R;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Z.jsx)(o, {
        id: `appgenSettings.secrets.description`,
        defaultMessage: `Sensitive setup info, like keys and passwords`,
        description: `Description for site secret settings`,
      })),
      (R = (0, Z.jsx)(o, {
        id: `appgenSettings.secrets.title`,
        defaultMessage: `Secrets`,
        description: `Heading for site secret settings`,
      })),
      (t[25] = L),
      (t[26] = R))
    : ((L = t[25]), (R = t[26]));
  let z;
  t[27] === w
    ? (z = t[28])
    : ((z = (e) => {
        w((t) => ({ ...t, secrets: e }));
      }),
      (t[27] = w),
      (t[28] = z));
  let B;
  t[29] !== b.secrets || t[30] !== z || t[31] !== p.isPending
    ? ((B = (0, Z.jsx)(ie, {
        addButtonLabel: I,
        disabled: p.isPending,
        entries: b.secrets,
        subtitle: L,
        title: R,
        valueInputType: `password`,
        onChange: z,
      })),
      (t[29] = b.secrets),
      (t[30] = z),
      (t[31] = p.isPending),
      (t[32] = B))
    : (B = t[32]);
  let H;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Z.jsx)(M.Header, {
        title: (0, Z.jsx)(o, {
          id: `appgenSettings.danger.title`,
          defaultMessage: `Danger zone`,
          description: `Heading for destructive site actions`,
        }),
      })),
      (t[33] = H))
    : (H = t[33]);
  let G, K;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Z.jsx)(o, {
        id: `appgenSettings.danger.delete.label`,
        defaultMessage: `Delete site`,
        description: `Label for the delete site action`,
      })),
      (K = (0, Z.jsx)(o, {
        id: `appgenSettings.danger.delete.description`,
        defaultMessage: `Permanently delete this site`,
        description: `Description for the delete site action`,
      })),
      (t[34] = G),
      (t[35] = K))
    : ((G = t[34]), (K = t[35]));
  let q;
  t[36] !== l || t[37] !== f || t[38] !== u || t[39] !== d
    ? ((q = () => {
        ee(f, ue, { projectId: l, siteSlug: u, siteTitle: d });
      }),
      (t[36] = l),
      (t[37] = f),
      (t[38] = u),
      (t[39] = d),
      (t[40] = q))
    : (q = t[40]);
  let J;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, Z.jsx)(o, {
        id: `appgenSettings.danger.delete.button`,
        defaultMessage: `Delete site`,
        description: `Delete site button label`,
      })),
      (t[41] = J))
    : (J = t[41]);
  let Y;
  t[42] === q
    ? (Y = t[43])
    : ((Y = (0, Z.jsxs)(M, {
        children: [
          H,
          (0, Z.jsx)(M.Content, {
            children: (0, Z.jsx)(j, {
              children: (0, Z.jsx)(A, {
                label: G,
                description: K,
                control: (0, Z.jsx)(h, {
                  color: `danger`,
                  size: `toolbar`,
                  type: `button`,
                  onClick: q,
                  children: J,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[42] = q),
      (t[43] = Y));
  let X;
  t[44] !== S || t[45] !== _
    ? ((X =
        _ != null && S == null
          ? (0, Z.jsx)(`p`, {
              className: `text-sm text-token-charts-red`,
              role: `alert`,
              children: (0, Z.jsx)(o, {
                id: `appgenSettings.environmentKeys.duplicate`,
                defaultMessage: `Keys must be unique across environment variables and secrets`,
                description: `Validation shown when site environment settings use a duplicate key`,
              }),
            })
          : null),
      (t[44] = S),
      (t[45] = _),
      (t[46] = X))
    : (X = t[46]);
  let re = _ == null || S == null,
    ae;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, Z.jsx)(o, {
        id: `appgenSettings.save`,
        defaultMessage: `Save`,
        description: `Button for saving site settings`,
      })),
      (t[47] = ae))
    : (ae = t[47]);
  let Q;
  t[48] !== re || t[49] !== p.isPending
    ? ((Q = (0, Z.jsx)(h, {
        className: `ml-auto`,
        disabled: re,
        loading: p.isPending,
        size: `toolbar`,
        type: `submit`,
        children: ae,
      })),
      (t[48] = re),
      (t[49] = p.isPending),
      (t[50] = Q))
    : (Q = t[50]);
  let $;
  t[51] !== X || t[52] !== Q
    ? (($ = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 px-4 py-3`,
        children: [X, Q],
      })),
      (t[51] = X),
      (t[52] = Q),
      (t[53] = $))
    : ($ = t[53]);
  let oe;
  return (
    t[54] !== P ||
    t[55] !== B ||
    t[56] !== Y ||
    t[57] !== $ ||
    t[58] !== T ||
    t[59] !== E
      ? ((oe = (0, Z.jsxs)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: T,
          children: [E, P, B, Y, $],
        })),
        (t[54] = P),
        (t[55] = B),
        (t[56] = Y),
        (t[57] = $),
        (t[58] = T),
        (t[59] = E),
        (t[60] = oe))
      : (oe = t[60]),
    oe
  );
}
function le(e) {
  let t = (0, V.c)(12),
    { accessPolicy: n, projectId: r } = e,
    i = s(a),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(M.Header, {
        title: (0, Z.jsx)(o, {
          id: `appgenSettings.sharing.title`,
          defaultMessage: `Sharing`,
          description: `Heading for site sharing settings`,
        }),
      })),
      (t[0] = c))
    : (c = t[0]);
  let l, u;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(o, {
        id: `appgenSettings.sharing.label`,
        defaultMessage: `Sharing`,
        description: `Label for site sharing settings`,
      })),
      (u = (0, Z.jsx)(o, {
        id: `appgenSettings.sharing.description`,
        defaultMessage: `Control who can visit your site`,
        description: `Description for site sharing settings`,
      })),
      (t[1] = l),
      (t[2] = u))
    : ((l = t[1]), (u = t[2]));
  let d;
  t[3] !== r || t[4] !== i
    ? ((d = () => {
        ee(i, z, { projectId: r });
      }),
      (t[3] = r),
      (t[4] = i),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === n
    ? (f = t[7])
    : ((f = (0, Z.jsx)(R, {
        className: `icon-xs`,
        accessPolicy: n,
        "aria-hidden": !0,
      })),
      (t[6] = n),
      (t[7] = f));
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(o, {
        id: `appgenSettings.sharing.button`,
        defaultMessage: `Share settings`,
        description: `Sharing settings button label`,
      })),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== d || t[10] !== f
      ? ((m = (0, Z.jsxs)(M, {
          children: [
            c,
            (0, Z.jsx)(M.Content, {
              children: (0, Z.jsx)(j, {
                children: (0, Z.jsx)(A, {
                  label: l,
                  description: u,
                  control: (0, Z.jsxs)(h, {
                    color: `outline`,
                    size: `toolbar`,
                    onClick: d,
                    children: [f, p],
                  }),
                }),
              }),
            }),
          ],
        })),
        (t[9] = d),
        (t[10] = f),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
function ue(e) {
  let t = (0, V.c)(47),
    { onClose: n, projectId: r, siteSlug: l, siteTitle: u } = e,
    d = s(a),
    f = c(P, r),
    g = i(),
    _ = p(),
    [v, ee] = (0, te.useState)(``),
    E;
  t[0] === u
    ? (E = t[1])
    : ((E = (0, Z.jsx)(o, {
        id: `appgenSettings.deleteDialog.title`,
        defaultMessage: `Delete {siteTitle}?`,
        description: `Title for dialog confirming deletion of a site`,
        values: { siteTitle: u },
      })),
      (t[0] = u),
      (t[1] = E));
  let D = E,
    O = f.isPending,
    k = !f.isPending,
    A;
  t[2] !== f.isPending || t[3] !== n
    ? ((A = (e) => {
        !e && !f.isPending && n();
      }),
      (t[2] = f.isPending),
      (t[3] = n),
      (t[4] = A))
    : (A = t[4]);
  let j;
  t[5] !== v ||
  t[6] !== f ||
  t[7] !== g ||
  t[8] !== _ ||
  t[9] !== n ||
  t[10] !== d ||
  t[11] !== l
    ? ((j = (e) => {
        (e.preventDefault(),
          !(v !== l || f.isPending) &&
            f.mutateAsync().then(
              () => {
                (d.get(m).success(
                  g.formatMessage({
                    id: `appgenSettings.deleteDialog.success`,
                    defaultMessage: `Site deleted`,
                    description: `Success toast shown after deleting a site`,
                  }),
                ),
                  n(),
                  _(`/sites`));
              },
              () => {
                d.get(m).danger(
                  g.formatMessage({
                    id: `appgenSettings.deleteDialog.error`,
                    defaultMessage: `Unable to delete site`,
                    description: `Error toast shown when deleting a site fails`,
                  }),
                );
              },
            ));
      }),
      (t[5] = v),
      (t[6] = f),
      (t[7] = g),
      (t[8] = _),
      (t[9] = n),
      (t[10] = d),
      (t[11] = l),
      (t[12] = j))
    : (j = t[12]);
  let M;
  t[13] === D
    ? (M = t[14])
    : ((M = (0, Z.jsx)(b, { className: `contents`, children: D })),
      (t[13] = D),
      (t[14] = M));
  let N;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(T, {
        className: `contents`,
        children: (0, Z.jsx)(o, {
          id: `appgenSettings.deleteDialog.subtitle`,
          defaultMessage: `Deleting your site will take it offline permanently and delete any data users have uploaded. To confirm, please type the name of the site exactly as shown below:`,
          description: `Subtitle for dialog confirming deletion of a site`,
        }),
      })),
      (t[15] = N))
    : (N = t[15]);
  let F;
  t[16] === M
    ? (F = t[17])
    : ((F = (0, Z.jsx)(`div`, {
        className: `flex w-full flex-col`,
        children: (0, Z.jsx)(x, {
          title: M,
          titleClassName: `truncate pr-8`,
          subtitle: N,
        }),
      })),
      (t[16] = M),
      (t[17] = F));
  let I;
  t[18] === g
    ? (I = t[19])
    : ((I = g.formatMessage({
        id: `appgenSettings.deleteDialog.slugInputLabel`,
        defaultMessage: `Site slug`,
        description: `Accessible label for the site slug input used to confirm site deletion`,
      })),
      (t[18] = g),
      (t[19] = I));
  let L;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => {
        ee(e.target.value);
      }),
      (t[20] = L))
    : (L = t[20]);
  let R;
  t[21] !== v || t[22] !== f.isPending || t[23] !== l || t[24] !== I
    ? ((R = (0, Z.jsx)(y, {
        children: (0, Z.jsx)(`input`, {
          "aria-label": I,
          autoFocus: !0,
          className: `w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
          disabled: f.isPending,
          placeholder: l,
          spellCheck: !1,
          type: `text`,
          value: v,
          onChange: L,
        }),
      })),
      (t[21] = v),
      (t[22] = f.isPending),
      (t[23] = l),
      (t[24] = I),
      (t[25] = R))
    : (R = t[25]);
  let z;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Z.jsx)(o, {
        id: `appgenSettings.deleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete site confirmation dialog`,
      })),
      (t[26] = z))
    : (z = t[26]);
  let B;
  t[27] !== f.isPending || t[28] !== n
    ? ((B = (0, Z.jsx)(h, {
        color: `ghost`,
        disabled: f.isPending,
        type: `button`,
        onClick: n,
        children: z,
      })),
      (t[27] = f.isPending),
      (t[28] = n),
      (t[29] = B))
    : (B = t[29]);
  let ne = v !== l || f.isPending,
    H;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Z.jsx)(o, {
        id: `appgenSettings.deleteDialog.confirm`,
        defaultMessage: `Permanently delete`,
        description: `Confirm button label for delete site confirmation dialog`,
      })),
      (t[30] = H))
    : (H = t[30]);
  let U;
  t[31] !== f.isPending || t[32] !== ne
    ? ((U = (0, Z.jsx)(h, {
        color: `danger`,
        disabled: ne,
        loading: f.isPending,
        type: `submit`,
        children: H,
      })),
      (t[31] = f.isPending),
      (t[32] = ne),
      (t[33] = U))
    : (U = t[33]);
  let W;
  t[34] !== B || t[35] !== U
    ? ((W = (0, Z.jsx)(y, { children: (0, Z.jsxs)(w, { children: [B, U] }) })),
      (t[34] = B),
      (t[35] = U),
      (t[36] = W))
    : (W = t[36]);
  let G;
  t[37] !== R || t[38] !== W || t[39] !== j || t[40] !== F
    ? ((G = (0, Z.jsxs)(C, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: j,
        children: [F, R, W],
      })),
      (t[37] = R),
      (t[38] = W),
      (t[39] = j),
      (t[40] = F),
      (t[41] = G))
    : (G = t[41]);
  let K;
  return (
    t[42] !== f.isPending || t[43] !== G || t[44] !== k || t[45] !== A
      ? ((K = (0, Z.jsx)(S, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: O,
          showDialogClose: k,
          onOpenChange: A,
          children: G,
        })),
        (t[42] = f.isPending),
        (t[43] = G),
        (t[44] = k),
        (t[45] = A),
        (t[46] = K))
      : (K = t[46]),
    K
  );
}
function de() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, Z.jsx)(g, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function fe() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, Z.jsx)(`div`, {
            className: `text-sm font-medium text-token-text-secondary`,
            children: (0, Z.jsx)(o, {
              id: `appgenSettings.error.title`,
              defaultMessage: `Unable to load site settings`,
              description: `Error state title for the site settings page`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { $ as AppgenSettingsPage };
//# sourceMappingURL=appgen-settings-page-lOy-VK1m.js.map
