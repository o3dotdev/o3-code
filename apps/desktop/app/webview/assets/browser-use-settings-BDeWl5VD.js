import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  E as t,
  ar as n,
  er as r,
  gr as i,
  ir as a,
  jr as o,
  mr as s,
  nr as c,
  pr as l,
  rr as u,
  tr as d,
} from "./src-C.js";
import { do as f } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as p, t as m } from "./jsx-runtime.js";
import { t as h } from "./clsx-BcPLHiun.js";
import {
  B as g,
  C as _,
  G as v,
  S as y,
  U as b,
  X as x,
  Y as S,
  Z as C,
  a as w,
  i as T,
  wt as E,
  y as D,
} from "./setting-storage.js";
import { a as O, m as k, n as A, p as j } from "./chunk-LFPYN7LY.js";
import { a as M, d as N, o as P } from "./statsig--EYRNU53.js";
import { c as F } from "./config-queries-BBeTQbuo.js";
import { t as I } from "./connector-logo.js";
import { r as L } from "./toast-signal.js";
import { t as ee } from "./tooltip-CDzchJxN.js";
import { D as R } from "./mention-item.js";
import { t as z } from "./button.js";
import { t as te } from "./spinner.js";
import { t as ne } from "./apps-DwfMzB5Q.js";
import { t as re } from "./chats-DoviPPWc.js";
import { a as ie, n as ae, r as oe } from "./use-is-plugins-enabled.js";
import { c as se, m as ce, v as le } from "./use-plugins-jIZrcuZQ.js";
import { t as ue } from "./with-window.js";
import { a as de } from "./plugin-detail-route-utils.js";
import { n as fe, t as pe } from "./use-plugin-install-flow.js";
import { a as B, i as me, l as he, n as ge, r as _e } from "./dialog-layout.js";
import { n as ve, o as V, r as ye } from "./plugins-availability-txQMPSuC.js";
import { t as H } from "./check-md.js";
import { t as be } from "./chevron-right.js";
import { t as xe } from "./arrow-left.js";
import { n as Se } from "./use-start-new-conversation.js";
import { r as U, t as W } from "./dropdown-DtQxMoJw.js";
import { t as Ce } from "./trash.js";
import { t as we } from "./chevron-NmAOI_v1.js";
import { t as Te } from "./plus.js";
import { o as Ee } from "./check-plugin-availability.js";
import { n as De, t as Oe } from "./plugin-prefill-prompt.js";
import { t as G } from "./toggle.js";
import { t as ke } from "./shield-exclamation.js";
import { t as K } from "./settings-shared-BTHmEeQY.js";
import { t as Ae } from "./settings-host-context-ILiCQlCE.js";
import { t as je } from "./more-menu-trigger-DgGAgPrg.js";
import {
  a as Me,
  c as Ne,
  d as Pe,
  i as Fe,
  o as Ie,
  r as Le,
  s as Re,
  t as q,
  u as ze,
} from "./browser-use-origin-state-queries-CGA9Am-q.js";
import { t as Be } from "./settings-content-layout.js";
import { n as J } from "./settings-row.js";
import { n as Y, t as X } from "./settings-group.js";
import { t as Ve } from "./settings-empty-state-Bec-Sn2w.js";
import { t as He } from "./use-home-directory.js";
import { t as Ue } from "./browser-use-DS7v_bwd.js";
import {
  n as We,
  t as Ge,
} from "./browser-use-elevated-risk-learn-more-url-C.js";
import { t as Ke } from "./plugin-uninstall-dialog-CbLRaTbu.js";
var Z = E(),
  Q = e(p(), 1),
  $ = m(),
  qe = `/settings/browser-use/extensions`,
  Je = `/settings/browser-use/passwords`,
  Ye = `/settings/browser-use/site-settings`,
  Xe = {
    extensions: {
      breadcrumb: g({
        id: `settings.browserUse.extensions.breadcrumb.extensions`,
        defaultMessage: `Extensions`,
        description: `Extensions breadcrumb label for browser settings`,
      }),
      partition: d,
      url: r,
      webviewLabel: g({
        id: `settings.browserUse.extensions.webviewLabel`,
        defaultMessage: `Extensions settings`,
        description: `Accessible label for embedded extension settings`,
      }),
    },
    passwordManager: {
      breadcrumb: g({
        id: `settings.browserUse.passwordManager.breadcrumb.passwords`,
        defaultMessage: `Passwords`,
        description: `Passwords breadcrumb label for password manager settings`,
      }),
      partition: u,
      url: c,
      webviewLabel: g({
        id: `settings.browserUse.passwordManager.webviewLabel`,
        defaultMessage: `Password manager settings`,
        description: `Accessible label for embedded password manager settings`,
      }),
    },
    siteSettings: {
      breadcrumb: g({
        id: `settings.browserUse.siteSettings.breadcrumb.siteSettings`,
        defaultMessage: `Site settings`,
        description: `Site settings breadcrumb label for browser settings`,
      }),
      partition: n,
      url: a,
      webviewLabel: g({
        id: `settings.browserUse.siteSettings.webviewLabel`,
        defaultMessage: `Site settings`,
        description: `Accessible label for embedded site settings`,
      }),
    },
  };
function Ze() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(et, { kind: `extensions` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Qe() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(et, { kind: `passwordManager` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function $e() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(et, { kind: `siteSettings` })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function et(e) {
  let t = (0, Z.c)(3),
    { kind: n } = e,
    r;
  return (
    t[1] === n
      ? (r = t[2])
      : ((r = (0, $.jsx)(tt, { kind: n })), (t[1] = n), (t[2] = r)),
    r
  );
}
function tt(e) {
  let t = (0, Z.c)(17),
    { kind: n } = e,
    r = v(),
    i = (0, Q.useRef)(null),
    a = Xe[n],
    o;
  t[0] !== r || t[1] !== a.webviewLabel
    ? ((o = r.formatMessage(a.webviewLabel)),
      (t[0] = r),
      (t[1] = a.webviewLabel),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] !== n || t[4] !== a.partition || t[5] !== a.url || t[6] !== s
    ? ((c = () => {
        let e = i.current;
        if (e == null) return;
        let t = window.electronBridge?.sendMessageFromView,
          r = crypto.randomUUID(),
          o = !1,
          c = !1,
          l = null,
          u = () => {
            !o ||
              t == null ||
              ((o = !1),
              t({
                mountId: r,
                type: `browser-settings-webview-unmounted`,
              }).catch((e) => {
                _.warning(`Failed to unmount browser settings webview`, {
                  safe: { kind: n },
                  sensitive: { error: e },
                });
              }));
          };
        return (
          (async () => {
            try {
              if (
                (t != null &&
                  (await t({
                    mountId: r,
                    type: `browser-settings-webview-mounted`,
                  }),
                  (o = !0)),
                c)
              ) {
                u();
                return;
              }
              ((l = document.createElement(`webview`)),
                (l.className = `h-full w-full bg-token-main-surface-primary`),
                l.setAttribute(`aria-label`, s),
                l.setAttribute(`partition`, a.partition),
                l.setAttribute(`src`, a.url),
                e.append(l));
            } catch (e) {
              let t = e;
              _.error(`Failed to mount browser settings webview`, {
                safe: { kind: n },
                sensitive: { error: t },
              });
            }
          })(),
          () => {
            ((c = !0), l?.remove(), l != null && rt(l), u());
          }
        );
      }),
      (t[3] = n),
      (t[4] = a.partition),
      (t[5] = a.url),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l;
  (t[8] !== n || t[9] !== a || t[10] !== s
    ? ((l = [n, a, s]), (t[8] = n), (t[9] = a), (t[10] = s), (t[11] = l))
    : (l = t[11]),
    (0, Q.useLayoutEffect)(c, l));
  let u;
  t[12] === a.breadcrumb
    ? (u = t[13])
    : ((u = (0, $.jsx)(`div`, {
        className: `draggable flex h-toolbar shrink-0 items-center border-b border-token-border px-panel`,
        children: (0, $.jsx)(nt, { breadcrumb: a.breadcrumb }),
      })),
      (t[12] = a.breadcrumb),
      (t[13] = u));
  let d;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(`div`, {
        ref: i,
        className: `min-h-0 w-full flex-1 bg-token-main-surface-primary`,
      })),
      (t[14] = d))
    : (d = t[14]);
  let f;
  return (
    t[15] === u
      ? (f = t[16])
      : ((f = (0, $.jsxs)(`div`, {
          className: `main-surface flex h-full min-h-0 flex-col overflow-hidden`,
          children: [u, d],
        })),
        (t[15] = u),
        (t[16] = f)),
    f
  );
}
function nt(e) {
  let t = (0, Z.c)(13),
    { breadcrumb: n } = e,
    r = k(),
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = () => {
        r(`/settings/browser-use`);
      }),
      (t[0] = r),
      (t[1] = i));
  let a, o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(xe, { className: `icon-xs` })),
      (o = (0, $.jsx)(b, {
        id: `settings.browserUse.browserSettings.back`,
        defaultMessage: `Back`,
        description: `Button label to go back to Browser settings`,
      })),
      (t[2] = a),
      (t[3] = o))
    : ((a = t[2]), (o = t[3]));
  let s;
  t[4] === i
    ? (s = t[5])
    : ((s = (0, $.jsxs)(z, {
        color: `ghost`,
        size: `toolbar`,
        onClick: i,
        children: [a, o],
      })),
      (t[4] = i),
      (t[5] = s));
  let c, l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(b, {
        id: `settings.browserUse.browserSettings.breadcrumb.browser`,
        defaultMessage: `Browser`,
        description: `Browser breadcrumb label for embedded browser settings`,
      })),
      (l = (0, $.jsx)(be, { className: `icon-xs text-token-text-secondary` })),
      (t[6] = c),
      (t[7] = l))
    : ((c = t[6]), (l = t[7]));
  let u;
  t[8] === n
    ? (u = t[9])
    : ((u = (0, $.jsxs)(`div`, {
        className: `flex items-center gap-1`,
        children: [
          c,
          l,
          (0, $.jsx)(`span`, {
            className: `text-token-text-primary`,
            children: (0, $.jsx)(b, { ...n }),
          }),
        ],
      })),
      (t[8] = n),
      (t[9] = u));
  let d;
  return (
    t[10] !== s || t[11] !== u
      ? ((d = (0, $.jsxs)(`nav`, {
          className: `no-drag flex items-center gap-2 text-sm font-medium text-token-text-secondary`,
          children: [s, u],
        })),
        (t[10] = s),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function rt(e) {
  it(e) && e.destroy();
}
function it(e) {
  return `destroy` in e && typeof e.destroy == `function`;
}
var at = `browser_use_developer_mode_full_cdp`;
function ot() {
  let e = (0, Z.c)(3),
    { selectedHostId: t } = Ae(),
    n = f(t).kind === `local`;
  if (!o.isInternal(le()) || !n) return null;
  let r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(X.Header, {
        title: (0, $.jsx)(b, {
          id: `settings.browserUse.developerMode.title`,
          defaultMessage: `Developer mode`,
          description: `Title for full CDP developer mode settings`,
        }),
      })),
      (e[0] = r))
    : (r = e[0]);
  let i;
  return (
    e[1] === t
      ? (i = e[2])
      : ((i = (0, $.jsx)(ue, {
          electron: !0,
          children: (0, $.jsxs)(X, {
            children: [
              r,
              (0, $.jsx)(X.Content, {
                children: (0, $.jsx)(Y, {
                  children: (0, $.jsx)(st, { hostId: t }),
                }),
              }),
            ],
          }),
        })),
        (e[1] = t),
        (e[2] = i)),
    i
  );
}
function st(e) {
  let t = (0, Z.c)(20),
    { hostId: n } = e,
    r = v(),
    { data: i, isLoading: a } = C(q),
    { data: o, isPending: s } = S(F, n),
    c;
  t[0] === n ? (c = t[1]) : ((c = { hostId: n }), (t[0] = n), (t[1] = c));
  let l = ze(c),
    u = o?.requirements?.featureRequirements?.[at] === !1,
    d = a || s,
    f = i?.fullCdpAccessEnabled === !0 && !d && !u,
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, $.jsxs)(`span`, {
            className: `inline-flex items-center gap-1 font-medium text-token-editor-warning-foreground`,
            children: [
              (0, $.jsx)(ke, { className: `icon-xs shrink-0` }),
              (0, $.jsx)(b, {
                id: `settings.browserUse.fullCdp.elevatedRisk.label`,
                defaultMessage: `Elevated risk`,
                description: `Label for the elevated risk warning shown for the full CDP developer mode toggle`,
              }),
            ],
          }),
          (0, $.jsx)(`span`, {
            children: (0, $.jsx)(b, {
              id: `settings.browserUse.fullCdp.label`,
              defaultMessage: `Enable full CDP access`,
              description: `Label for the full CDP developer mode toggle`,
            }),
          }),
        ],
      })),
      (t[2] = p))
    : (p = t[2]);
  let m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(`div`, {
        children: (0, $.jsx)(b, {
          id: `settings.browserUse.fullCdp.description`,
          defaultMessage: `Allow Codex to use full Chrome DevTools Protocol access in connected Browser Use sessions. Full CDP access lets Codex inspect and control sensitive browser internals that standard access cannot reach.`,
          description: `Description for the full CDP developer mode toggle`,
        }),
      })),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] === u
    ? (h = t[5])
    : ((h = u
        ? (0, $.jsx)(`div`, {
            children: (0, $.jsx)(b, {
              id: `settings.browserUse.fullCdp.disabledByPolicy`,
              defaultMessage: `Your organization has disabled this setting`,
              description: `Message shown when full CDP developer mode is disabled by policy`,
            }),
          })
        : null),
      (t[4] = u),
      (t[5] = h));
  let g;
  t[6] === h
    ? (g = t[7])
    : ((g = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [m, h],
      })),
      (t[6] = h),
      (t[7] = g));
  let _;
  t[8] === r
    ? (_ = t[9])
    : ((_ = r.formatMessage({
        id: `settings.browserUse.fullCdp.ariaLabel`,
        defaultMessage: `Toggle full CDP access`,
        description: `Aria label for toggling full CDP access`,
      })),
      (t[8] = r),
      (t[9] = _));
  let y = d || u || l.isPending,
    x;
  t[10] === l
    ? (x = t[11])
    : ((x = (e) => {
        l.mutate(e);
      }),
      (t[10] = l),
      (t[11] = x));
  let w;
  t[12] !== f || t[13] !== _ || t[14] !== y || t[15] !== x
    ? ((w = (0, $.jsx)(G, {
        ariaLabel: _,
        checked: f,
        disabled: y,
        onChange: x,
      })),
      (t[12] = f),
      (t[13] = _),
      (t[14] = y),
      (t[15] = x),
      (t[16] = w))
    : (w = t[16]);
  let T;
  return (
    t[17] !== g || t[18] !== w
      ? ((T = (0, $.jsx)(J, { label: p, description: g, control: w })),
        (t[17] = g),
        (t[18] = w),
        (t[19] = T))
      : (T = t[19]),
    T
  );
}
function ct(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDomains.title`,
            defaultMessage: `Allowed domains`,
            description: `Title for browser allowed domains list`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDomains.title`,
            defaultMessage: `Blocked domains`,
            description: `Title for browser blocked domains list`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDownloadDomains.title`,
            defaultMessage: `Allowed download domains`,
            description: `Title for browser allowed download domains list`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDownloadDomains.title`,
            defaultMessage: `Blocked download domains`,
            description: `Title for browser blocked download domains list`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedUploadDomains.title`,
            defaultMessage: `Allowed upload domains`,
            description: `Title for browser allowed upload domains list`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedUploadDomains.title`,
            defaultMessage: `Blocked upload domains`,
            description: `Title for browser blocked upload domains list`,
          });
  }
}
function lt(e, t, n) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDomains.subtitle`,
            defaultMessage: `Domains that open without asking`,
            description: `Subtitle for browser allowed domains list`,
          })
        : n === `googleChrome`
          ? (0, $.jsx)(b, {
              id: `settings.browserUse.blockedDomains.chromeSubtitle`,
              defaultMessage: `Codex will never open these sites in your browser`,
              description: `Subtitle for browser blocked domains list on Google Chrome settings`,
            })
          : (0, $.jsx)(b, {
              id: `settings.browserUse.blockedDomains.subtitle`,
              defaultMessage: `Codex will never open these sites`,
              description: `Subtitle for browser blocked domains list`,
            });
    case `downloads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDownloadDomains.subtitle`,
            defaultMessage: `Domains that can download files without asking`,
            description: `Subtitle for browser allowed download domains list`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDownloadDomains.subtitle`,
            defaultMessage: `Codex will never download files from these sites`,
            description: `Subtitle for browser blocked download domains list`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedUploadDomains.subtitle`,
            defaultMessage: `Domains that can receive file uploads without asking`,
            description: `Subtitle for browser allowed upload domains list`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedUploadDomains.subtitle`,
            defaultMessage: `Codex will never upload files to these sites`,
            description: `Subtitle for browser blocked upload domains list`,
          });
  }
}
function ut(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDomains.added`,
            defaultMessage: `Allowed domain added`,
            description: `Toast shown after adding an allowed browser domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDomains.added`,
            defaultMessage: `Blocked domain added`,
            description: `Toast shown after adding a blocked browser domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDownloadDomains.added`,
            defaultMessage: `Allowed download domain added`,
            description: `Toast shown after adding an allowed browser download domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDownloadDomains.added`,
            defaultMessage: `Blocked download domain added`,
            description: `Toast shown after adding a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedUploadDomains.added`,
            defaultMessage: `Allowed upload domain added`,
            description: `Toast shown after adding an allowed browser upload domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedUploadDomains.added`,
            defaultMessage: `Blocked upload domain added`,
            description: `Toast shown after adding a blocked browser upload domain`,
          });
  }
}
function dt(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedWebsites.saved`,
            defaultMessage: `Allowed domain removed`,
            description: `Toast shown after removing an allowed browser domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.deniedWebsites.saved`,
            defaultMessage: `Blocked domain removed`,
            description: `Toast shown after removing a blocked browser domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDownloadDomains.removed`,
            defaultMessage: `Allowed download domain removed`,
            description: `Toast shown after removing an allowed browser download domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDownloadDomains.removed`,
            defaultMessage: `Blocked download domain removed`,
            description: `Toast shown after removing a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedUploadDomains.removed`,
            defaultMessage: `Allowed upload domain removed`,
            description: `Toast shown after removing an allowed browser upload domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedUploadDomains.removed`,
            defaultMessage: `Blocked upload domain removed`,
            description: `Toast shown after removing a blocked browser upload domain`,
          });
  }
}
function ft(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDomains.addDialogTitle`,
            defaultMessage: `Add allowed domain`,
            description: `Title for dialog adding an allowed browser use domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDomains.addDialogTitle`,
            defaultMessage: `Add blocked domain`,
            description: `Title for dialog adding a blocked browser use domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDownloadDomains.addDialogTitle`,
            defaultMessage: `Add allowed download domain`,
            description: `Title for dialog adding an allowed browser download domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDownloadDomains.addDialogTitle`,
            defaultMessage: `Add blocked download domain`,
            description: `Title for dialog adding a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedUploadDomains.addDialogTitle`,
            defaultMessage: `Add allowed upload domain`,
            description: `Title for dialog adding an allowed browser upload domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedUploadDomains.addDialogTitle`,
            defaultMessage: `Add blocked upload domain`,
            description: `Title for dialog adding a blocked browser upload domain`,
          });
  }
}
function pt(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex can open this URL without asking first`,
            description: `Subtitle for dialog adding an allowed browser use domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex will not open this URL`,
            description: `Subtitle for dialog adding a blocked browser use domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDownloadDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex can download files from this URL without asking first`,
            description: `Subtitle for dialog adding an allowed browser download domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDownloadDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex will not download files from this URL`,
            description: `Subtitle for dialog adding a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedUploadDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex can upload files to this URL without asking first`,
            description: `Subtitle for dialog adding an allowed browser upload domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedUploadDomains.addDialogSubtitle`,
            defaultMessage: `This means Codex will not upload files to this URL`,
            description: `Subtitle for dialog adding a blocked browser upload domain`,
          });
  }
}
function mt(e, t, n) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedWebsites.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from allowed domains?`,
            description: `Title for dialog confirming removal of an allowed browser domain`,
            values: { origin: n },
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.deniedWebsites.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from blocked domains?`,
            description: `Title for dialog confirming removal of a blocked browser domain`,
            values: { origin: n },
          });
    case `downloads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDownloadDomains.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from allowed download domains?`,
            description: `Title for dialog confirming removal of an allowed browser download domain`,
            values: { origin: n },
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDownloadDomains.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from blocked download domains?`,
            description: `Title for dialog confirming removal of a blocked browser download domain`,
            values: { origin: n },
          });
    case `uploads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedUploadDomains.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from allowed upload domains?`,
            description: `Title for dialog confirming removal of an allowed browser upload domain`,
            values: { origin: n },
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedUploadDomains.removeDialogTitle`,
            defaultMessage: `Remove “{origin}” from blocked upload domains?`,
            description: `Title for dialog confirming removal of a blocked browser upload domain`,
            values: { origin: n },
          });
  }
}
function ht(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedWebsites.removeDialogSubtitle`,
            defaultMessage: `Codex will ask before opening this domain`,
            description: `Subtitle for dialog confirming removal of an allowed browser domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.deniedWebsites.removeDialogSubtitle`,
            defaultMessage: `Codex can ask again before opening this domain`,
            description: `Subtitle for dialog confirming removal of a blocked browser domain`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDownloadDomains.removeDialogSubtitle`,
            defaultMessage: `Codex will ask before downloading files from this domain`,
            description: `Subtitle for dialog confirming removal of an allowed browser download domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDownloadDomains.removeDialogSubtitle`,
            defaultMessage: `Codex can ask again before downloading files from this domain`,
            description: `Subtitle for dialog confirming removal of a blocked browser download domain`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedUploadDomains.removeDialogSubtitle`,
            defaultMessage: `Codex will ask before uploading files to this domain`,
            description: `Subtitle for dialog confirming removal of an allowed browser upload domain`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedUploadDomains.removeDialogSubtitle`,
            defaultMessage: `Codex can ask again before uploading files to this domain`,
            description: `Subtitle for dialog confirming removal of a blocked browser upload domain`,
          });
  }
}
function gt(e, t) {
  switch (e) {
    case `origins`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDomains.emptyTitle`,
            defaultMessage: `No allowed domains`,
            description: `Empty state title for browser allowed domain list`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDomains.emptyTitle`,
            defaultMessage: `No blocked domains`,
            description: `Empty state title for browser blocked domain list`,
          });
    case `downloads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedDownloadDomains.emptyTitle`,
            defaultMessage: `No allowed download domains`,
            description: `Empty state title for browser allowed download domain list`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedDownloadDomains.emptyTitle`,
            defaultMessage: `No blocked download domains`,
            description: `Empty state title for browser blocked download domain list`,
          });
    case `uploads`:
      return t === `allowed`
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.allowedUploadDomains.emptyTitle`,
            defaultMessage: `No allowed upload domains`,
            description: `Empty state title for browser allowed upload domain list`,
          })
        : (0, $.jsx)(b, {
            id: `settings.browserUse.blockedUploadDomains.emptyTitle`,
            defaultMessage: `No blocked upload domains`,
            description: `Empty state title for browser blocked upload domain list`,
          });
  }
}
function _t(e) {
  let t = (0, Z.c)(51),
    {
      emptyStateTitle: n,
      installButtonLabel: r,
      items: i,
      pluginsQuery: a,
      selectedHostId: o,
      unavailableItems: s,
    } = e,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s === void 0 ? [] : s), (t[0] = s), (t[1] = c));
  let l = c,
    u = k(),
    d;
  t[2] !== a.forceReload || t[3] !== o
    ? ((d = { forceReloadPlugins: a.forceReload, hostId: o }),
      (t[2] = a.forceReload),
      (t[3] = o),
      (t[4] = d))
    : (d = t[4]);
  let {
      closePluginInstall: f,
      connectRequiredApp: p,
      installPlugin: m,
      isInstalling: h,
      openPluginInstall: g,
      session: _,
    } = pe(d),
    v;
  t[5] === o ? (v = t[6]) : ((v = { hostId: o }), (t[5] = o), (t[6] = v));
  let { pendingPluginId: y, setPluginEnabled: b } = ye(v),
    x;
  t[7] === o ? (x = t[8]) : ((x = { hostId: o }), (t[7] = o), (t[8] = x));
  let { pendingUninstallPluginId: S, uninstallPlugin: C } = ve(x),
    [w, T] = (0, Q.useState)(null),
    E = h && _.kind !== `closed` ? _.plugin.plugin.id : null,
    D = y ?? E ?? S,
    O = i.length + l.length;
  if (a.isLoading && O === 0) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex min-h-[62px] items-center justify-center rounded-lg border border-token-border text-token-text-secondary`,
            children: (0, $.jsx)(te, { className: `icon-xs` }),
          })),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (a.errorMessage != null) {
    let e;
    return (
      t[10] === a.errorMessage
        ? (e = t[11])
        : ((e = (0, $.jsx)(Y, {
            children: (0, $.jsx)(`div`, {
              className: `p-4 text-sm text-token-text-secondary`,
              children: a.errorMessage,
            }),
          })),
          (t[10] = a.errorMessage),
          (t[11] = e)),
      e
    );
  }
  if (O === 0) {
    let e;
    return (
      t[12] === n
        ? (e = t[13])
        : ((e = (0, $.jsx)(Y, { children: (0, $.jsx)(Ve, { children: n }) })),
          (t[12] = n),
          (t[13] = e)),
      e
    );
  }
  let A;
  if (
    t[14] !== r ||
    t[15] !== i ||
    t[16] !== u ||
    t[17] !== g ||
    t[18] !== D ||
    t[19] !== o ||
    t[20] !== b
  ) {
    let e;
    (t[22] !== r ||
    t[23] !== u ||
    t[24] !== g ||
    t[25] !== D ||
    t[26] !== o ||
    t[27] !== b
      ? ((e = (e) =>
          (0, $.jsx)(
            xt,
            {
              installButtonLabel: r,
              isPending: D === e.plugin.plugin.id,
              item: e,
              onInstallPlugin: g,
              onOpenPluginDetails: (e) => {
                u(de(e, { hostId: o }));
              },
              onToggleInstalledPluginEnabled: (e, t) => {
                b({
                  pluginId: e.plugin.id,
                  pluginDisplayName: V(e),
                  enabled: t,
                });
              },
              onUninstallPlugin: T,
            },
            e.plugin.plugin.id,
          )),
        (t[22] = r),
        (t[23] = u),
        (t[24] = g),
        (t[25] = D),
        (t[26] = o),
        (t[27] = b),
        (t[28] = e))
      : (e = t[28]),
      (A = i.map(e)),
      (t[14] = r),
      (t[15] = i),
      (t[16] = u),
      (t[17] = g),
      (t[18] = D),
      (t[19] = o),
      (t[20] = b),
      (t[21] = A));
  } else A = t[21];
  let j;
  t[29] === l ? (j = t[30]) : ((j = l.map(vt)), (t[29] = l), (t[30] = j));
  let M;
  t[31] !== A || t[32] !== j
    ? ((M = (0, $.jsxs)(Y, { className: `overflow-hidden`, children: [A, j] })),
      (t[31] = A),
      (t[32] = j),
      (t[33] = M))
    : (M = t[33]);
  let N;
  t[34] === f
    ? (N = t[35])
    : ((N = (e) => {
        e || f();
      }),
      (t[34] = f),
      (t[35] = N));
  let P;
  t[36] !== p ||
  t[37] !== m ||
  t[38] !== h ||
  t[39] !== _ ||
  t[40] !== o ||
  t[41] !== N
    ? ((P = (0, $.jsx)(fe, {
        hostId: o,
        isInstalling: h,
        onConnectRequiredApp: p,
        onInstall: m,
        onOpenChange: N,
        session: _,
      })),
      (t[36] = p),
      (t[37] = m),
      (t[38] = h),
      (t[39] = _),
      (t[40] = o),
      (t[41] = N),
      (t[42] = P))
    : (P = t[42]);
  let F;
  t[43] !== S || t[44] !== w || t[45] !== C
    ? ((F =
        w == null
          ? null
          : (0, $.jsx)(Ke, {
              isUninstalling: S === w.plugin.id,
              open: !0,
              pluginDisplayName: V(w),
              onConfirm: async () => {
                (await C({
                  marketplaceName: w.marketplaceName,
                  pluginDisplayName: V(w),
                  pluginId: w.plugin.id,
                  pluginName: w.plugin.name,
                  requestPluginId: se(w),
                }),
                  T(null));
              },
              onOpenChange: (e) => {
                e || T(null);
              },
            })),
      (t[43] = S),
      (t[44] = w),
      (t[45] = C),
      (t[46] = F))
    : (F = t[46]);
  let I;
  return (
    t[47] !== P || t[48] !== F || t[49] !== M
      ? ((I = (0, $.jsxs)($.Fragment, { children: [M, P, F] })),
        (t[47] = P),
        (t[48] = F),
        (t[49] = M),
        (t[50] = I))
      : (I = t[50]),
    I
  );
}
function vt(e) {
  return (0, $.jsx)(yt, { item: e }, e.id);
}
function yt(e) {
  let t = (0, Z.c)(21),
    { item: n } = e,
    r = v(),
    i;
  t[0] === n.icon
    ? (i = t[1])
    : ((i =
        n.icon ??
        (0, $.jsx)(ne, { className: `icon-md text-token-text-secondary` })),
      (t[0] = n.icon),
      (t[1] = i));
  let a;
  t[2] === i
    ? (a = t[3])
    : ((a = (0, $.jsx)(`span`, {
        className: `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border-default bg-transparent`,
        children: i,
      })),
      (t[2] = i),
      (t[3] = a));
  let o;
  t[4] === n.title
    ? (o = t[5])
    : ((o = (0, $.jsx)(`span`, {
        className: `truncate font-medium text-token-foreground`,
        children: n.title,
      })),
      (t[4] = n.title),
      (t[5] = o));
  let s;
  t[6] === n.description
    ? (s = t[7])
    : ((s =
        n.description == null
          ? null
          : (0, $.jsx)(`span`, {
              className: `min-w-0 truncate text-sm leading-relaxed text-token-text-secondary`,
              children: n.description,
            })),
      (t[6] = n.description),
      (t[7] = s));
  let c;
  t[8] !== o || t[9] !== s
    ? ((c = (0, $.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 flex-col gap-0.5`,
        children: [o, s],
      })),
      (t[8] = o),
      (t[9] = s),
      (t[10] = c))
    : (c = t[10]);
  let l;
  t[11] !== a || t[12] !== c
    ? ((l = (0, $.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 items-center gap-3`,
        children: [a, c],
      })),
      (t[11] = a),
      (t[12] = c),
      (t[13] = l))
    : (l = t[13]);
  let u;
  t[14] === r
    ? (u = t[15])
    : ((u = r.formatMessage({
        id: `settings.pluginControls.unavailableToggleAria`,
        defaultMessage: `Unavailable plugin toggle`,
        description: `Accessible label for the disabled toggle shown for unavailable plugins in settings`,
      })),
      (t[14] = r),
      (t[15] = u));
  let d;
  t[16] === u
    ? (d = t[17])
    : ((d = (0, $.jsx)(G, {
        ariaLabel: u,
        checked: !1,
        disabled: !0,
        onChange: bt,
      })),
      (t[16] = u),
      (t[17] = d));
  let f;
  return (
    t[18] !== l || t[19] !== d
      ? ((f = (0, $.jsxs)(`div`, {
          className: `flex min-h-[60px] items-center gap-3 p-2.5 text-sm opacity-60 max-sm:flex-wrap`,
          children: [l, d],
        })),
        (t[18] = l),
        (t[19] = d),
        (t[20] = f))
      : (f = t[20]),
    f
  );
}
function bt() {}
function xt(e) {
  let t = (0, Z.c)(41),
    {
      installButtonLabel: n,
      isPending: r,
      item: i,
      onInstallPlugin: a,
      onOpenPluginDetails: o,
      onToggleInstalledPluginEnabled: s,
      onUninstallPlugin: c,
    } = e,
    l = v(),
    u,
    d,
    f,
    p,
    m;
  if (
    t[0] !== n ||
    t[1] !== l ||
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== c
  ) {
    let e = V(i.plugin),
      g = i.plugin.plugin.installed;
    p = `group flex min-h-[60px] items-center gap-3 p-2.5 text-sm hover:bg-token-foreground/5 max-sm:flex-wrap`;
    let _;
    t[13] !== i.plugin || t[14] !== o
      ? ((_ = () => {
          o(i.plugin);
        }),
        (t[13] = i.plugin),
        (t[14] = o),
        (t[15] = _))
      : (_ = t[15]);
    let v =
        i.showIconBorder === !1
          ? `border-0`
          : `border border-token-border-default`,
      y;
    t[16] === v
      ? (y = t[17])
      : ((y = h(
          `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent`,
          v,
        )),
        (t[16] = v),
        (t[17] = y));
    let x =
        i.icon ??
        (0, $.jsx)(I, {
          alt: e,
          className: `h-full w-full object-contain`,
          logoUrl: i.plugin.logoPath,
          fallback: (0, $.jsx)(ne, {
            className: `icon-md text-token-text-secondary`,
          }),
        }),
      S;
    t[18] !== y || t[19] !== x
      ? ((S = (0, $.jsx)(`span`, { className: y, children: x })),
        (t[18] = y),
        (t[19] = x),
        (t[20] = S))
      : (S = t[20]);
    let C;
    t[21] === i.title
      ? (C = t[22])
      : ((C = (0, $.jsx)(`div`, {
          className: `truncate font-medium text-token-foreground`,
          children: i.title,
        })),
        (t[21] = i.title),
        (t[22] = C));
    let w;
    t[23] !== i.description || t[24] !== i.descriptionIndicator
      ? ((w =
          i.description == null
            ? null
            : (0, $.jsx)(`div`, {
                className: `min-w-0 truncate text-sm leading-relaxed text-token-text-secondary`,
                children:
                  i.descriptionIndicator == null
                    ? i.description
                    : (0, $.jsxs)(`span`, {
                        className: `inline-flex max-w-full items-center gap-2`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: h(
                              `h-2 w-2 shrink-0 rounded-full`,
                              i.descriptionIndicator === `success`
                                ? `bg-[var(--color-icon-success)]`
                                : `bg-[var(--color-icon-error)]`,
                            ),
                          }),
                          (0, $.jsx)(`span`, {
                            className: `min-w-0 truncate`,
                            children: i.description,
                          }),
                        ],
                      }),
              })),
        (t[23] = i.description),
        (t[24] = i.descriptionIndicator),
        (t[25] = w))
      : (w = t[25]);
    let T;
    (t[26] !== C || t[27] !== w
      ? ((T = (0, $.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [C, w],
        })),
        (t[26] = C),
        (t[27] = w),
        (t[28] = T))
      : (T = t[28]),
      t[29] !== S || t[30] !== T || t[31] !== _
        ? ((m = (0, $.jsxs)(`button`, {
            className: `flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-left text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none`,
            type: `button`,
            onClick: _,
            children: [S, T],
          })),
          (t[29] = S),
          (t[30] = T),
          (t[31] = _),
          (t[32] = m))
        : (m = t[32]),
      (u = `flex shrink-0 items-center gap-2`),
      (d = i.action),
      (f = g
        ? (0, $.jsxs)($.Fragment, {
            children: [
              i.showManageActions === !0
                ? (0, $.jsx)(`div`, {
                    className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
                    children: (0, $.jsxs)(W, {
                      align: `end`,
                      contentWidth: `sm`,
                      triggerButton: (0, $.jsx)(je, {
                        label: l.formatMessage({
                          id: `settings.pluginControls.moreActions`,
                          defaultMessage: `More actions`,
                          description: `Aria label for the more actions menu in settings plugin controls`,
                        }),
                      }),
                      children: [
                        i.onTryInChat == null
                          ? null
                          : (0, $.jsx)(U.Item, {
                              LeftIcon: re,
                              leftIconClassName: `icon-xs`,
                              onSelect: () => {
                                i.onTryInChat?.(i.plugin);
                              },
                              children: (0, $.jsx)(b, {
                                id: `settings.pluginControls.tryItNow`,
                                defaultMessage: `Try it now`,
                                description: `Menu item label for trying a plugin in chat from settings`,
                              }),
                            }),
                        (0, $.jsx)(U.Item, {
                          LeftIcon: Ce,
                          className: `!text-token-error-foreground`,
                          leftIconClassName: `icon-xs text-token-error-foreground`,
                          disabled: r,
                          onSelect: () => {
                            c(i.plugin);
                          },
                          children: (0, $.jsx)(b, {
                            id: `settings.pluginControls.delete`,
                            defaultMessage: `Delete`,
                            description: `Menu item label for deleting a plugin from settings`,
                          }),
                        }),
                      ],
                    }),
                  })
                : null,
              (0, $.jsx)(ee, {
                tooltipContent: i.plugin.plugin.enabled
                  ? (0, $.jsx)(b, {
                      id: `settings.pluginControls.disableToggleTooltip`,
                      defaultMessage: `Disable {pluginName}`,
                      description: `Tooltip label for disabling a plugin from settings`,
                      values: { pluginName: e },
                    })
                  : (0, $.jsx)(b, {
                      id: `settings.pluginControls.enableToggleTooltip`,
                      defaultMessage: `Enable {pluginName}`,
                      description: `Tooltip label for enabling a plugin from settings`,
                      values: { pluginName: e },
                    }),
                children: (0, $.jsx)(G, {
                  checked: i.plugin.plugin.enabled,
                  disabled: r,
                  ariaLabel: l.formatMessage(
                    {
                      id: `settings.pluginControls.toggleAria`,
                      defaultMessage: `Toggle {pluginName}`,
                      description: `Accessible label for toggling a plugin from settings`,
                    },
                    { pluginName: e },
                  ),
                  onChange: (e) => {
                    s(i.plugin, e);
                  },
                }),
              }),
            ],
          })
        : (0, $.jsx)(ee, {
            tooltipContent: (0, $.jsx)(b, {
              id: `settings.pluginControls.installTooltip`,
              defaultMessage: `Install {pluginName}`,
              description: `Tooltip label for installing a plugin from settings`,
              values: { pluginName: e },
            }),
            children: (0, $.jsx)(`div`, {
              children: (0, $.jsx)(z, {
                "aria-label": l.formatMessage(
                  {
                    id: `settings.pluginControls.installTooltip`,
                    defaultMessage: `Install {pluginName}`,
                    description: `Tooltip label for installing a plugin from settings`,
                  },
                  { pluginName: e },
                ),
                color: `secondary`,
                disabled: r,
                loading: r,
                onClick: () => {
                  a(i.plugin);
                },
                size: `toolbar`,
                children: n,
              }),
            }),
          })),
      (t[0] = n),
      (t[1] = l),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m));
  } else ((u = t[8]), (d = t[9]), (f = t[10]), (p = t[11]), (m = t[12]));
  let g;
  t[33] !== u || t[34] !== d || t[35] !== f
    ? ((g = (0, $.jsxs)(`div`, { className: u, children: [d, f] })),
      (t[33] = u),
      (t[34] = d),
      (t[35] = f),
      (t[36] = g))
    : (g = t[36]);
  let _;
  return (
    t[37] !== p || t[38] !== m || t[39] !== g
      ? ((_ = (0, $.jsxs)(`div`, { className: p, children: [m, g] })),
        (t[37] = p),
        (t[38] = m),
        (t[39] = g),
        (t[40] = _))
      : (_ = t[40]),
    _
  );
}
function St(e, t, n) {
  let r = e.filter(
      (e) => e.plugin.name === t || e.plugin.id.split(`@`)[0] === t,
    ),
    i = l(le());
  return (
    (i == null ? void 0 : r.find((e) => e.marketplaceName === i)) ??
    r.find((e) => s(e.marketplaceName)) ??
    r.find((e) => e.marketplaceName === `openai-curated`) ??
    r.find((e) => Ee(n, e.marketplacePath)) ??
    null
  );
}
var Ct = `browser-browsing-data-options`,
  wt = [`cookies`, `siteData`, `cache`];
function Tt() {
  let e = (0, Z.c)(14),
    t = Mt(),
    { selectedHostId: n } = Ae(),
    r;
  e[0] === n ? (r = e[1]) : ((r = { hostId: n }), (e[0] = n), (e[1] = r));
  let i = Pt(r),
    a;
  e[2] === n ? (a = e[3]) : ((a = { hostId: n }), (e[2] = n), (e[3] = a));
  let o = oe(a);
  if (t != null) {
    let n = i[t];
    if (n.isLoading) {
      let t;
      return (
        e[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)($.Fragment, {})), (e[4] = t))
          : (t = e[4]),
        t
      );
    }
    if (!n.enabled) {
      let t;
      return (
        e[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(O, { to: `/settings/browser-use`, replace: !0 })),
            (e[5] = t))
          : (t = e[5]),
        t
      );
    }
    let r;
    return (e[6] === t ? (r = e[7]) : ((r = Nt(t)), (e[6] = t), (e[7] = r)), r);
  }
  let s;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(b, {
        id: `settings.browserUse.title`,
        defaultMessage: `Browser`,
        description: `Title for in-app browser settings`,
      })),
      (e[8] = s))
    : (s = e[8]);
  let c;
  e[9] === o.available
    ? (c = e[10])
    : ((c = o.available
        ? (0, $.jsx)(b, {
            id: `settings.browserUse.subtitle`,
            defaultMessage: `Manage Codex's browser. Google Chrome can be set up in <computerUseSettingsLink>computer use settings</computerUseSettingsLink>`,
            description: `Subtitle for in-app browser settings`,
            values: { computerUseSettingsLink: Et },
          })
        : void 0),
      (e[9] = o.available),
      (e[10] = c));
  let l;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(Dt, {})), (e[11] = l))
    : (l = e[11]);
  let u;
  return (
    e[12] === c
      ? (u = e[13])
      : ((u = (0, $.jsx)(Be, {
          title: s,
          subtitle: c,
          subtitleClassName: `text-pretty`,
          children: l,
        })),
        (e[12] = c),
        (e[13] = u)),
    u
  );
}
function Et(e) {
  return (0, $.jsx)(A, {
    className: `text-token-text-link-foreground hover:underline`,
    to: `/settings/computer-use`,
    children: e,
  });
}
function Dt() {
  let e = (0, Z.c)(41),
    { selectedHostId: t } = Ae(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = []), (e[0] = n))
    : (n = e[0]);
  let r = ce(t, n),
    a = He(t),
    o;
  e[1] !== a || e[2] !== r.availablePlugins
    ? ((o = St(r.availablePlugins, i, a)),
      (e[1] = a),
      (e[2] = r.availablePlugins),
      (e[3] = o))
    : (o = e[3]);
  let s = o,
    c;
  e[4] === s
    ? (c = e[5])
    : ((c = s == null ? [] : [s]), (e[4] = s), (e[5] = c));
  let l = c,
    u;
  e[6] === t
    ? (u = e[7])
    : ((u = { featureName: `in_app_browser`, hostId: t }),
      (e[6] = t),
      (e[7] = u));
  let d = ie(u),
    f;
  e[8] === t ? (f = e[9]) : ((f = { hostId: t }), (e[8] = t), (e[9] = f));
  let p = Pt(f),
    m;
  e[10] === t ? (m = e[11]) : ((m = { hostId: t }), (e[10] = t), (e[11] = m));
  let h = ae(m),
    g;
  e[12] === t ? (g = e[13]) : ((g = { hostId: t }), (e[12] = t), (e[13] = g));
  let _ = oe(g),
    v = d.enabled && !d.isLoading,
    y = p.passwordManager.enabled,
    x = p.siteSettings.enabled,
    S = p.extensions.enabled,
    C = h.available || _.available,
    w = x || C,
    T;
  e[14] !== s || e[15] !== h
    ? ((T =
        s == null && Kt(h)
          ? [
              {
                description: (0, $.jsx)(b, {
                  ...R.restrictedAvailabilityDescription,
                }),
                icon: (0, $.jsx)(Ue, {
                  className: `h-full w-full text-token-foreground`,
                }),
                id: `browser-use-unavailable`,
                title: (0, $.jsx)(b, { ...R.label }),
              },
            ]
          : []),
      (e[14] = s),
      (e[15] = h),
      (e[16] = T))
    : (T = e[16]);
  let E = T,
    D;
  e[17] !== l || e[18] !== r || e[19] !== t || e[20] !== E
    ? ((D = (0, $.jsx)(X, {
        children: (0, $.jsx)(X.Content, {
          children: (0, $.jsx)(Gt, {
            browserUsePlugins: l,
            pluginsQuery: r,
            selectedHostId: t,
            unavailableBrowserUsePlugins: E,
          }),
        }),
      })),
      (e[17] = l),
      (e[18] = r),
      (e[19] = t),
      (e[20] = E),
      (e[21] = D))
    : (D = e[21]);
  let O;
  e[22] === y
    ? (O = e[23])
    : ((O = y
        ? (0, $.jsxs)(X, {
            children: [
              (0, $.jsx)(X.Header, {
                title: (0, $.jsx)(b, {
                  id: `settings.browserUse.passwords.title`,
                  defaultMessage: `Passwords`,
                  description: `Title for browser password settings section`,
                }),
              }),
              (0, $.jsx)(X.Content, {
                children: (0, $.jsx)(Y, { children: (0, $.jsx)(Ot, {}) }),
              }),
            ],
          })
        : null),
      (e[22] = y),
      (e[23] = O));
  let k;
  e[24] === S
    ? (k = e[25])
    : ((k = S
        ? (0, $.jsxs)(X, {
            children: [
              (0, $.jsx)(X.Header, {
                title: (0, $.jsx)(b, {
                  id: `settings.browserUse.extensions.title`,
                  defaultMessage: `Extensions`,
                  description: `Title for browser extension settings section`,
                }),
              }),
              (0, $.jsx)(X.Content, {
                children: (0, $.jsx)(Y, { children: (0, $.jsx)(kt, {}) }),
              }),
            ],
          })
        : null),
      (e[24] = S),
      (e[25] = k));
  let A;
  e[26] === v
    ? (A = e[27])
    : ((A = v
        ? (0, $.jsxs)(X, {
            children: [
              (0, $.jsx)(X.Header, {
                title: (0, $.jsx)(b, {
                  id: `settings.browserUse.browser.title`,
                  defaultMessage: `Data`,
                  description: `Title for browser data settings section`,
                }),
              }),
              (0, $.jsx)(X.Content, {
                children: (0, $.jsxs)(Y, {
                  children: [(0, $.jsx)(Lt, {}), (0, $.jsx)(It, {})],
                }),
              }),
            ],
          })
        : null),
      (e[26] = v),
      (e[27] = A));
  let j;
  e[28] !== w || e[29] !== C || e[30] !== x
    ? ((j = w
        ? (0, $.jsxs)(X, {
            children: [
              (0, $.jsx)(X.Header, {
                title: (0, $.jsx)(b, {
                  id: `settings.browserUse.permissions.title`,
                  defaultMessage: `Permissions`,
                  description: `Title for browser use permissions settings section`,
                }),
              }),
              (0, $.jsx)(X.Content, {
                children: (0, $.jsxs)(Y, {
                  children: [
                    x ? (0, $.jsx)(At, {}) : null,
                    C ? (0, $.jsx)(Ut, {}) : null,
                  ],
                }),
              }),
            ],
          })
        : null),
      (e[28] = w),
      (e[29] = C),
      (e[30] = x),
      (e[31] = j))
    : (j = e[31]);
  let M;
  e[32] === C
    ? (M = e[33])
    : ((M = C
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(qt, { kind: `denied` }),
              (0, $.jsx)(qt, { kind: `allowed` }),
              (0, $.jsx)(ot, {}),
            ],
          })
        : null),
      (e[32] = C),
      (e[33] = M));
  let N;
  return (
    e[34] !== k ||
    e[35] !== A ||
    e[36] !== j ||
    e[37] !== M ||
    e[38] !== D ||
    e[39] !== O
      ? ((N = (0, $.jsxs)($.Fragment, { children: [D, O, k, A, j, M] })),
        (e[34] = k),
        (e[35] = A),
        (e[36] = j),
        (e[37] = M),
        (e[38] = D),
        (e[39] = O),
        (e[40] = N))
      : (N = e[40]),
    N
  );
}
function Ot() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(jt, {
          description: (0, $.jsx)(b, {
            id: `settings.browserUse.passwordManager.description`,
            defaultMessage: `Add, delete and edit saved passwords`,
            description: `Description for browser password manager settings row`,
          }),
          label: (0, $.jsx)(b, {
            id: `settings.browserUse.passwordManager.label`,
            defaultMessage: `Password manager`,
            description: `Label for browser password manager settings row`,
          }),
          path: Je,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function kt() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(jt, {
          description: (0, $.jsx)(b, {
            id: `settings.browserUse.extensions.description`,
            defaultMessage: `Install, remove and configure browser extensions`,
            description: `Description for browser extension settings row`,
          }),
          label: (0, $.jsx)(b, {
            id: `settings.browserUse.extensions.label`,
            defaultMessage: `Extension manager`,
            description: `Label for browser extension settings row`,
          }),
          path: qe,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function At() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(jt, {
          description: (0, $.jsx)(b, {
            id: `settings.browserUse.siteSettings.description`,
            defaultMessage: `Control camera and microphone permissions in Codex's browser`,
            description: `Description for browser site settings row`,
          }),
          label: (0, $.jsx)(b, {
            id: `settings.browserUse.siteSettings.label`,
            defaultMessage: `Site settings`,
            description: `Label for browser site settings row`,
          }),
          path: Ye,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function jt(e) {
  let t = (0, Z.c)(10),
    { description: n, label: r, path: i } = e,
    a = k(),
    o;
  t[0] !== a || t[1] !== i
    ? ((o = () => {
        a(i);
      }),
      (t[0] = a),
      (t[1] = i),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(b, {
        id: `settings.browserUse.browserSettings.manage`,
        defaultMessage: `Manage`,
        description: `Button label for browser settings row`,
      })),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c = (0, $.jsx)(z, {
        color: `secondary`,
        onClick: o,
        size: `toolbar`,
        children: s,
      })),
      (t[4] = o),
      (t[5] = c));
  let l;
  return (
    t[6] !== n || t[7] !== r || t[8] !== c
      ? ((l = (0, $.jsx)(J, { label: r, description: n, control: c })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function Mt() {
  let e = j(qe) != null,
    t = j(Je) != null,
    n = j(Ye) != null;
  return e ? `extensions` : t ? `passwordManager` : n ? `siteSettings` : null;
}
function Nt(e) {
  switch (e) {
    case `extensions`:
      return (0, $.jsx)(Ze, {});
    case `passwordManager`:
      return (0, $.jsx)(Qe, {});
    case `siteSettings`:
      return (0, $.jsx)($e, {});
  }
}
function Pt({ hostId: e }) {
  let t = ie({ featureName: `in_app_browser`, hostId: e }),
    n = N(),
    r = P(`72045066`),
    i = P(`1025107964`),
    a = { extensionsEnabled: !1, siteSettingsEnabled: !1 };
  return {
    extensions: Ft({
      gateEnabled: a.extensionsEnabled,
      inAppBrowser: t,
      isStatsigLoading: n,
    }),
    passwordManager: Ft({
      gateEnabled: r || i,
      inAppBrowser: t,
      isStatsigLoading: n,
    }),
    siteSettings: Ft({
      gateEnabled: a.siteSettingsEnabled,
      inAppBrowser: t,
      isStatsigLoading: n,
    }),
  };
}
function Ft({ gateEnabled: e, inAppBrowser: t, isStatsigLoading: n }) {
  return {
    enabled: t.enabled && !t.isLoading && e,
    isLoading: t.isLoading || n,
  };
}
function It() {
  let e = (0, Z.c)(14),
    n = x(y),
    r = w(t.annotationScreenshotsMode),
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = {
        id: `always`,
        label: (0, $.jsx)(b, {
          id: `settings.browserUse.browser.annotationScreenshots.always.label`,
          defaultMessage: `Always include`,
          description: `Label for always including browser annotation screenshots`,
        }),
      }),
      (e[0] = i))
    : (i = e[0]);
  let a;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = [
        i,
        {
          id: `necessary`,
          label: (0, $.jsx)(b, {
            id: `settings.browserUse.browser.annotationScreenshots.necessary.label`,
            defaultMessage: `Only on drag selection`,
            description: `Label for including browser annotation screenshots only for drag-selected regions`,
          }),
        },
      ]),
      (e[1] = a))
    : (a = e[1]);
  let o = a,
    s;
  e[2] === r
    ? (s = e[3])
    : ((s = o.find((e) => e.id === r) ?? o[0]), (e[2] = r), (e[3] = s));
  let c = s,
    l,
    u;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(b, {
        id: `settings.browserUse.browser.annotationScreenshots.label`,
        defaultMessage: `Annotation screenshots`,
        description: `Label for browser annotation screenshots setting`,
      })),
      (u = (0, $.jsx)(b, {
        id: `settings.browserUse.browser.annotationScreenshots.description`,
        defaultMessage: `Screenshots help Codex better understand and address comments, but increase plan usage`,
        description: `Description for browser annotation screenshots setting`,
      })),
      (e[4] = l),
      (e[5] = u))
    : ((l = e[4]), (u = e[5]));
  let d;
  e[6] === c.label
    ? (d = e[7])
    : ((d = (0, $.jsx)(K, {
        className: `w-[168px]`,
        children: (0, $.jsx)(`span`, {
          className: `truncate`,
          children: c.label,
        }),
      })),
      (e[6] = c.label),
      (e[7] = d));
  let f;
  e[8] !== n || e[9] !== r
    ? ((f = (0, $.jsx)(`div`, {
        className: `flex flex-col`,
        children: o.map((e) => {
          let i = e.id === r;
          return (0, $.jsx)(
            U.Item,
            {
              allowWrap: !0,
              RightIcon: i ? H : void 0,
              onSelect: () => {
                T(n, t.annotationScreenshotsMode, e.id);
              },
              children: (0, $.jsx)(`span`, {
                className: `truncate`,
                children: e.label,
              }),
            },
            e.id,
          );
        }),
      })),
      (e[8] = n),
      (e[9] = r),
      (e[10] = f))
    : (f = e[10]);
  let p;
  return (
    e[11] !== d || e[12] !== f
      ? ((p = (0, $.jsx)(J, {
          label: l,
          description: u,
          control: (0, $.jsx)(W, {
            contentWidth: `menuWide`,
            align: `end`,
            triggerButton: d,
            children: f,
          }),
        })),
        (e[11] = d),
        (e[12] = f),
        (e[13] = p))
      : (p = e[13]),
    p
  );
}
function Lt() {
  let e = x(y),
    [t, n] = (0, Q.useState)(!1),
    [r, i] = (0, Q.useState)(null),
    a = Me(),
    o = a.isPending,
    s = async (t, n) => {
      if (!o) {
        i(t);
        try {
          (await a.mutateAsync(n), e.get(L).success(Vt(t)));
        } catch {
          e.get(L).danger(Ht(t));
        } finally {
          i(null);
        }
      }
    };
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(J, {
        className: `gap-3 max-sm:flex-col max-sm:items-stretch`,
        label: (0, $.jsx)(b, {
          id: `settings.browserUse.browser.clearBrowsingData.label`,
          defaultMessage: `Browsing data`,
          description: `Label for clearing all browser browsing data`,
        }),
        description: (0, $.jsx)(b, {
          id: `settings.browserUse.browser.clearBrowsingData.description`,
          defaultMessage: `Clear site data and cache from the in-app browser`,
          description: `Description for clearing all browser browsing data`,
        }),
        control: (0, $.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [
            (0, $.jsx)(z, {
              color: `secondary`,
              disabled: o && r !== `all`,
              loading: r === `all`,
              onClick: () => {
                s(`all`, wt);
              },
              size: `toolbar`,
              children: (0, $.jsx)(b, {
                id: `settings.browserUse.browser.clearBrowsingData`,
                defaultMessage: `Clear all browsing data`,
                description: `Button label to clear all browser browsing data`,
              }),
            }),
            (0, $.jsxs)(z, {
              "aria-controls": Ct,
              "aria-expanded": t,
              color: `ghost`,
              disabled: o,
              onClick: () => {
                n(!t);
              },
              size: `icon`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `sr-only`,
                  children: t
                    ? (0, $.jsx)(b, {
                        id: `settings.browserUse.browser.hideClearOptions`,
                        defaultMessage: `Hide individual browsing data options`,
                        description: `Accessible label for hiding individual browser data clearing options`,
                      })
                    : (0, $.jsx)(b, {
                        id: `settings.browserUse.browser.showClearOptions`,
                        defaultMessage: `Show individual browsing data options`,
                        description: `Accessible label for showing individual browser data clearing options`,
                      }),
                }),
                (0, $.jsx)(we, {
                  className: h(
                    `icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform`,
                    t && `rotate-180`,
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      t
        ? (0, $.jsx)(`div`, {
            id: Ct,
            className: `flex flex-col divide-y divide-token-border bg-token-bg-secondary/20`,
            children: wt.map((e) =>
              (0, $.jsx)(
                Rt,
                {
                  dataType: e,
                  disabled: o && r !== e,
                  loading: r === e,
                  onClear: (e) => {
                    s(e, [e]);
                  },
                },
                e,
              ),
            ),
          })
        : null,
    ],
  });
}
function Rt(e) {
  let t = (0, Z.c)(17),
    { disabled: n, loading: r, onClear: i, dataType: a } = e,
    o;
  t[0] === a ? (o = t[1]) : ((o = zt(a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === o
    ? (s = t[3])
    : ((s = (0, $.jsx)(`div`, {
        className: `min-w-0 text-sm text-token-text-secondary`,
        children: o,
      })),
      (t[2] = o),
      (t[3] = s));
  let c;
  t[4] !== a || t[5] !== i
    ? ((c = () => {
        i(a);
      }),
      (t[4] = a),
      (t[5] = i),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === a ? (l = t[8]) : ((l = Bt(a)), (t[7] = a), (t[8] = l));
  let u;
  t[9] !== n || t[10] !== r || t[11] !== c || t[12] !== l
    ? ((u = (0, $.jsx)(z, {
        className: `max-w-full justify-self-end text-left whitespace-normal max-md:-ml-2 max-md:justify-self-start`,
        color: `ghost`,
        disabled: n,
        loading: r,
        onClick: c,
        size: `toolbar`,
        children: l,
      })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u))
    : (u = t[13]);
  let d;
  return (
    t[14] !== s || t[15] !== u
      ? ((d = (0, $.jsxs)(`div`, {
          className: `grid min-h-10 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-0.5 max-md:grid-cols-1 max-md:items-start max-md:gap-1 max-md:py-2`,
          children: [s, u],
        })),
        (t[14] = s),
        (t[15] = u),
        (t[16] = d))
      : (d = t[16]),
    d
  );
}
function zt(e) {
  switch (e) {
    case `cookies`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.cookies.label`,
        defaultMessage: `Cookies`,
        description: `Label for browser cookies setting`,
      });
    case `siteData`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.siteData.label`,
        defaultMessage: `Site data`,
        description: `Label for browser site data setting`,
      });
    case `cache`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.cache.label`,
        defaultMessage: `Cached images and files`,
        description: `Label for browser cached images and files setting`,
      });
  }
}
function Bt(e) {
  switch (e) {
    case `cookies`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.clearCookies`,
        defaultMessage: `Delete cookies`,
        description: `Button label to delete browser cookies`,
      });
    case `siteData`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.clearSiteData`,
        defaultMessage: `Delete site data`,
        description: `Button label to delete browser site data`,
      });
    case `cache`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.clearCache`,
        defaultMessage: `Delete cached images and files`,
        description: `Button label to delete browser cached images and files`,
      });
  }
}
function Vt(e) {
  switch (e) {
    case `all`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.browsingDataCleared`,
        defaultMessage: `Browsing data cleared`,
        description: `Toast shown after clearing all browser browsing data`,
      });
    case `cookies`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.cookiesCleared`,
        defaultMessage: `Browser cookies cleared`,
        description: `Toast shown after clearing browser cookies`,
      });
    case `siteData`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.siteDataCleared`,
        defaultMessage: `Browser site data cleared`,
        description: `Toast shown after clearing browser site data`,
      });
    case `cache`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.cacheCleared`,
        defaultMessage: `Browser cache cleared`,
        description: `Toast shown after clearing browser cached images and files`,
      });
  }
}
function Ht(e) {
  switch (e) {
    case `all`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.clearBrowsingDataError`,
        defaultMessage: `Unable to clear browsing data`,
        description: `Toast shown when clearing all browser browsing data fails`,
      });
    case `cookies`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.clearCookiesError`,
        defaultMessage: `Unable to clear browser cookies`,
        description: `Toast shown when clearing browser cookies fails`,
      });
    case `siteData`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.clearSiteDataError`,
        defaultMessage: `Unable to clear browser site data`,
        description: `Toast shown when clearing browser site data fails`,
      });
    case `cache`:
      return (0, $.jsx)(b, {
        id: `settings.browserUse.browser.clearCacheError`,
        defaultMessage: `Unable to clear browser cache`,
        description: `Toast shown when clearing browser cached images and files fails`,
      });
  }
}
function Ut() {
  let e = (0, Z.c)(35),
    t = x(y),
    { data: n, isLoading: r } = C(q),
    i = n?.approvalMode,
    a = Ne(),
    { value: o } = M(Ge),
    s;
  e[0] === o ? (s = e[1]) : ((s = We(o)), (e[0] = o), (e[1] = s));
  let c = s,
    l;
  e[2] === c
    ? (l = e[3])
    : ((l = (e) => {
        (e.preventDefault(), D.dispatchMessage(`open-in-browser`, { url: c }));
      }),
      (e[2] = c),
      (e[3] = l));
  let u = l,
    d;
  e[4] !== c || e[5] !== u
    ? ((d = (e) =>
        (0, $.jsx)(`a`, {
          className: `text-token-text-link-foreground hover:underline`,
          href: c,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: u,
          children: e,
        })),
      (e[4] = c),
      (e[5] = u),
      (e[6] = d))
    : (d = e[6]);
  let f = d,
    p;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = {
        id: `alwaysAsk`,
        label: (0, $.jsx)(b, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, $.jsx)(b, {
          id: `settings.browserUse.approval.alwaysAsk.description`,
          defaultMessage: `Ask before opening websites`,
          description: `Description for browser use always ask approval mode`,
        }),
      }),
      (e[7] = p))
    : (p = e[7]);
  let m;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = [
        p,
        {
          id: `neverAsk`,
          label: (0, $.jsx)(b, {
            id: `settings.browserUse.approval.neverAsk.label`,
            defaultMessage: `Always allow`,
            description: `Label for browser use never ask approval mode`,
          }),
          description: (0, $.jsx)(b, {
            id: `settings.browserUse.approval.neverAsk.description`,
            defaultMessage: `Open websites without asking`,
            description: `Description for browser use never ask approval mode`,
          }),
          elevatedRiskDisclaimer: (0, $.jsx)(b, {
            id: `settings.browserUse.approval.neverAsk.elevatedRiskDisclaimer`,
            defaultMessage: `This setting has elevated risks for your data.`,
            description: `Elevated risk warning for the browser use always allow website approval mode`,
          }),
        },
      ]),
      (e[8] = m))
    : (m = e[8]);
  let h = m,
    g;
  e[9] === i
    ? (g = e[10])
    : ((g = h.find((e) => e.id === i) ?? h[0]), (e[9] = i), (e[10] = g));
  let _ = g,
    v = a.isPending,
    S;
  e[11] !== i || e[12] !== v || e[13] !== t || e[14] !== a
    ? ((S = async (e) => {
        if (!(e === i || v))
          try {
            await a.mutateAsync(e);
          } catch {
            t.get(L).danger(
              (0, $.jsx)(b, {
                id: `settings.browserUse.approval.saveError`,
                defaultMessage: `Unable to save approval setting`,
                description: `Toast shown when saving browser use approval mode fails`,
              }),
            );
          }
      }),
      (e[11] = i),
      (e[12] = v),
      (e[13] = t),
      (e[14] = a),
      (e[15] = S))
    : (S = e[15]);
  let w = S,
    T;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(b, {
        id: `settings.browserUse.approval.label`,
        defaultMessage: `Approval`,
        description: `Label for browser use approval mode setting`,
      })),
      (e[16] = T))
    : (T = e[16]);
  let E;
  e[17] === f
    ? (E = e[18])
    : ((E = (0, $.jsx)(b, {
        id: `settings.browserUse.approval.description`,
        defaultMessage: `Choose if Codex asks for approval before opening websites. <learnMoreLink>Learn more</learnMoreLink>`,
        description: `Description for browser use approval mode setting`,
        values: { learnMoreLink: f },
      })),
      (e[17] = f),
      (e[18] = E));
  let O = r || v,
    k = r || v,
    A = _?.label,
    j;
  e[19] === A
    ? (j = e[20])
    : ((j = (0, $.jsx)(`span`, { className: `truncate`, children: A })),
      (e[19] = A),
      (e[20] = j));
  let N;
  e[21] !== k || e[22] !== j
    ? ((N = (0, $.jsx)(K, {
        className: `w-[152px]`,
        disabled: k,
        children: j,
      })),
      (e[21] = k),
      (e[22] = j),
      (e[23] = N))
    : (N = e[23]);
  let P;
  e[24] !== i || e[25] !== w || e[26] !== v
    ? ((P = (0, $.jsx)(`div`, {
        className: `flex flex-col`,
        children: h.map((e) => {
          let t = e.id === i;
          return (0, $.jsx)(
            U.Item,
            {
              allowWrap: !0,
              disabled: v,
              RightIcon: t ? H : void 0,
              onSelect: () => {
                w(e.id);
              },
              children: (0, $.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, $.jsx)(`span`, {
                    className: `truncate`,
                    children: e.label,
                  }),
                  (0, $.jsx)(`span`, {
                    className: `truncate text-sm text-token-text-secondary`,
                    children: e.description,
                  }),
                  e.elevatedRiskDisclaimer
                    ? (0, $.jsxs)(`span`, {
                        className: `mt-0.5 flex min-w-0 items-start gap-1 text-sm leading-4 text-token-description-foreground`,
                        children: [
                          (0, $.jsx)(ke, {
                            className: `icon-xs shrink-0 text-token-editor-warning-foreground`,
                          }),
                          (0, $.jsx)(`span`, {
                            className: `min-w-0 whitespace-normal`,
                            children: e.elevatedRiskDisclaimer,
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            },
            e.id,
          );
        }),
      })),
      (e[24] = i),
      (e[25] = w),
      (e[26] = v),
      (e[27] = P))
    : (P = e[27]);
  let F;
  e[28] !== N || e[29] !== P || e[30] !== O
    ? ((F = (0, $.jsx)(W, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: O,
        triggerButton: N,
        children: P,
      })),
      (e[28] = N),
      (e[29] = P),
      (e[30] = O),
      (e[31] = F))
    : (F = e[31]);
  let I;
  return (
    e[32] !== F || e[33] !== E
      ? ((I = (0, $.jsx)(J, { label: T, description: E, control: F })),
        (e[32] = F),
        (e[33] = E),
        (e[34] = I))
      : (I = e[34]),
    I
  );
}
function Wt() {
  let e = (0, Z.c)(24),
    t = x(y),
    { data: n, isLoading: r } = C(q),
    i = n?.historyApprovalMode,
    a = Pe(),
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = {
        id: `alwaysAsk`,
        label: (0, $.jsx)(b, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, $.jsx)(b, {
          id: `settings.browserUse.historyApproval.alwaysAsk.description`,
          defaultMessage: `Ask before accessing history`,
          description: `Description for browser use always ask history approval mode`,
        }),
      }),
      (e[0] = o))
    : (o = e[0]);
  let s;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = [
        o,
        {
          id: `neverAsk`,
          label: (0, $.jsx)(b, {
            id: `settings.browserUse.approval.neverAsk.label`,
            defaultMessage: `Always allow`,
            description: `Label for browser use never ask approval mode`,
          }),
          description: (0, $.jsx)(b, {
            id: `settings.browserUse.historyApproval.neverAsk.description`,
            defaultMessage: `Access history without asking`,
            description: `Description for browser use never ask history approval mode`,
          }),
        },
      ]),
      (e[1] = s))
    : (s = e[1]);
  let c = s,
    l;
  e[2] === i
    ? (l = e[3])
    : ((l = c.find((e) => e.id === i) ?? c[0]), (e[2] = i), (e[3] = l));
  let u = l,
    d = a.isPending,
    f;
  e[4] !== i || e[5] !== d || e[6] !== t || e[7] !== a
    ? ((f = async (e) => {
        if (!(e === i || d))
          try {
            await a.mutateAsync(e);
          } catch {
            t.get(L).danger(
              (0, $.jsx)(b, {
                id: `settings.browserUse.historyApproval.saveError`,
                defaultMessage: `Unable to save history setting`,
                description: `Toast shown when saving browser use history approval mode fails`,
              }),
            );
          }
      }),
      (e[4] = i),
      (e[5] = d),
      (e[6] = t),
      (e[7] = a),
      (e[8] = f))
    : (f = e[8]);
  let p = f,
    m,
    h;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(b, {
        id: `settings.browserUse.historyApproval.label`,
        defaultMessage: `History`,
        description: `Label for browser use history approval mode setting`,
      })),
      (h = (0, $.jsx)(b, {
        id: `settings.browserUse.historyApproval.description`,
        defaultMessage: `Choose if Codex asks for approval before accessing your browser's history`,
        description: `Description for browser use history approval mode setting`,
      })),
      (e[9] = m),
      (e[10] = h))
    : ((m = e[9]), (h = e[10]));
  let g = r || d,
    _ = r || d,
    v = u?.label,
    S;
  e[11] === v
    ? (S = e[12])
    : ((S = (0, $.jsx)(`span`, { className: `truncate`, children: v })),
      (e[11] = v),
      (e[12] = S));
  let w;
  e[13] !== _ || e[14] !== S
    ? ((w = (0, $.jsx)(K, {
        className: `w-[152px]`,
        disabled: _,
        children: S,
      })),
      (e[13] = _),
      (e[14] = S),
      (e[15] = w))
    : (w = e[15]);
  let T;
  e[16] !== p || e[17] !== i || e[18] !== d
    ? ((T = (0, $.jsx)(`div`, {
        className: `flex flex-col`,
        children: c.map((e) => {
          let t = e.id === i;
          return (0, $.jsx)(
            U.Item,
            {
              allowWrap: !0,
              disabled: d,
              RightIcon: t ? H : void 0,
              onSelect: () => {
                p(e.id);
              },
              children: (0, $.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, $.jsx)(`span`, {
                    className: `truncate`,
                    children: e.label,
                  }),
                  (0, $.jsx)(`span`, {
                    className: `truncate text-sm text-token-text-secondary`,
                    children: e.description,
                  }),
                ],
              }),
            },
            e.id,
          );
        }),
      })),
      (e[16] = p),
      (e[17] = i),
      (e[18] = d),
      (e[19] = T))
    : (T = e[19]);
  let E;
  return (
    e[20] !== w || e[21] !== T || e[22] !== g
      ? ((E = (0, $.jsx)(J, {
          label: m,
          description: h,
          control: (0, $.jsx)(W, {
            contentWidth: `menuWide`,
            align: `end`,
            disabled: g,
            triggerButton: w,
            children: T,
          }),
        })),
        (e[20] = w),
        (e[21] = T),
        (e[22] = g),
        (e[23] = E))
      : (E = e[23]),
    E
  );
}
function Gt(e) {
  let t = (0, Z.c)(12),
    {
      browserUsePlugins: n,
      pluginsQuery: r,
      selectedHostId: i,
      unavailableBrowserUsePlugins: a,
    } = e,
    o = Se(),
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(b, {
        id: `settings.browserUse.install.empty`,
        defaultMessage: `In-app browser plugin unavailable`,
        description: `Empty state shown when the in-app browser plugin cannot be found`,
      })),
      (c = (0, $.jsx)(b, {
        id: `settings.browserUse.install.button`,
        defaultMessage: `Install`,
        description: `Button label for installing the browser plugin`,
      })),
      (t[0] = s),
      (t[1] = c))
    : ((s = t[0]), (c = t[1]));
  let l;
  if (t[2] !== n || t[3] !== o) {
    let e;
    (t[5] === o
      ? (e = t[6])
      : ((e = (e) => ({
          icon: (0, $.jsx)(Ue, {
            className: `h-full w-full text-token-foreground`,
          }),
          onTryInChat: () => {
            o({
              prefillPrompt: Oe({
                defaultPrompt: De(e.plugin.interface?.defaultPrompt),
                pluginDisplayName: V(e),
                pluginId: e.plugin.id,
              }),
              startInSidebar: !0,
            });
          },
          plugin: e,
          showManageActions: !0,
          showIconBorder: !1,
          title: (0, $.jsx)(b, { ...R.label }),
          description: (0, $.jsx)(b, {
            id: `settings.browserUse.control.description`,
            defaultMessage: `Let Codex control the built-in browser`,
            description: `Description for the Browser plugin control row`,
          }),
        })),
        (t[5] = o),
        (t[6] = e)),
      (l = n.map(e)),
      (t[2] = n),
      (t[3] = o),
      (t[4] = l));
  } else l = t[4];
  let u;
  return (
    t[7] !== r || t[8] !== i || t[9] !== l || t[10] !== a
      ? ((u = (0, $.jsx)(_t, {
          emptyStateTitle: s,
          installButtonLabel: c,
          items: l,
          pluginsQuery: r,
          selectedHostId: i,
          unavailableItems: a,
        })),
        (t[7] = r),
        (t[8] = i),
        (t[9] = l),
        (t[10] = a),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function Kt(e) {
  return (
    !e.isLoading &&
    (e.reason === `statsig-disabled` ||
      e.reason === `config-requirement-disabled`)
  );
}
function qt(e) {
  let t = (0, Z.c)(37),
    { kind: n, resource: r, surface: i } = e,
    a = r === void 0 ? `origins` : r,
    o = i === void 0 ? `inAppBrowser` : i,
    s = x(y),
    { data: c, isLoading: l } = C(q),
    [u, d] = (0, Q.useState)(!1),
    f = Fe(),
    p = Le(),
    m;
  t[0] !== n || t[1] !== c || t[2] !== a
    ? ((m = c == null ? [] : Qt(c, a, n)),
      (t[0] = n),
      (t[1] = c),
      (t[2] = a),
      (t[3] = m))
    : (m = t[3]);
  let h = m,
    g = a === `origins` ? f.isPending : p.isPending,
    _;
  t[4] !== p ||
  t[5] !== f ||
  t[6] !== n ||
  t[7] !== h ||
  t[8] !== a ||
  t[9] !== s
    ? ((_ = async (e) => {
        let t = e.trim();
        if (t.length === 0 || h.includes(t)) return !0;
        try {
          return (
            a === `origins`
              ? await f.mutateAsync({ kind: n, origin: t })
              : await p.mutateAsync({
                  kind: n,
                  origin: t,
                  transferKind: a === `downloads` ? `download` : `upload`,
                }),
            s.get(L).success(ut(a, n)),
            !0
          );
        } catch {
          return (
            s.get(L).danger(
              (0, $.jsx)(b, {
                id: `settings.browserUse.domains.addError`,
                defaultMessage: `Unable to add domain`,
                description: `Toast shown when adding a browser domain fails`,
              }),
            ),
            !1
          );
        }
      }),
      (t[4] = p),
      (t[5] = f),
      (t[6] = n),
      (t[7] = h),
      (t[8] = a),
      (t[9] = s),
      (t[10] = _))
    : (_ = t[10]);
  let v = _,
    S;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(Jt, {
        onClick: () => {
          d(!0);
        },
      })),
      (t[11] = S))
    : (S = t[11]);
  let w;
  t[12] !== n || t[13] !== a
    ? ((w = ct(a, n)), (t[12] = n), (t[13] = a), (t[14] = w))
    : (w = t[14]);
  let T;
  t[15] !== n || t[16] !== a || t[17] !== o
    ? ((T = lt(a, n, o)), (t[15] = n), (t[16] = a), (t[17] = o), (t[18] = T))
    : (T = t[18]);
  let E;
  t[19] !== w || t[20] !== T
    ? ((E = (0, $.jsx)(X.Header, { actions: S, title: w, subtitle: T })),
      (t[19] = w),
      (t[20] = T),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== l || t[23] !== n || t[24] !== h || t[25] !== a
    ? ((D = (0, $.jsx)(X.Content, {
        children: (0, $.jsx)(Y, {
          children: l
            ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 p-4 text-sm text-token-text-secondary`,
                children: [
                  (0, $.jsx)(te, { className: `icon-xs` }),
                  (0, $.jsx)(b, {
                    id: `settings.browserUse.origins.loading`,
                    defaultMessage: `Loading websites`,
                    description: `Message shown while loading browser website origin settings`,
                  }),
                ],
              })
            : (0, $.jsx)(Xt, { kind: n, origins: h, resource: a }),
        }),
      })),
      (t[22] = l),
      (t[23] = n),
      (t[24] = h),
      (t[25] = a),
      (t[26] = D))
    : (D = t[26]);
  let O;
  t[27] !== v || t[28] !== u || t[29] !== g || t[30] !== n || t[31] !== a
    ? ((O = (0, $.jsx)(Yt, {
        kind: n,
        isSaving: g,
        open: u,
        resource: a,
        onAddOrigin: v,
        onOpenChange: d,
      })),
      (t[27] = v),
      (t[28] = u),
      (t[29] = g),
      (t[30] = n),
      (t[31] = a),
      (t[32] = O))
    : (O = t[32]);
  let k;
  return (
    t[33] !== O || t[34] !== E || t[35] !== D
      ? ((k = (0, $.jsxs)(X, { children: [E, D, O] })),
        (t[33] = O),
        (t[34] = E),
        (t[35] = D),
        (t[36] = k))
      : (k = t[36]),
    k
  );
}
function Jt(e) {
  let t = (0, Z.c)(4),
    { onClick: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(Te, { className: `icon-xs` })),
      (i = (0, $.jsx)(b, {
        id: `settings.browserUse.domains.add`,
        defaultMessage: `Add`,
        description: `Button label to add a browser use domain`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, $.jsxs)(z, {
          color: `secondary`,
          size: `toolbar`,
          onClick: n,
          children: [r, i],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function Yt(e) {
  let t = (0, Z.c)(52),
    {
      isSaving: n,
      kind: r,
      onAddOrigin: i,
      onOpenChange: a,
      open: o,
      resource: s,
    } = e,
    c = v(),
    [l, u] = (0, Q.useState)(``),
    d;
  t[0] !== n || t[1] !== i || t[2] !== a || t[3] !== l
    ? ((d = async () => {
        let e = l.trim();
        e.length === 0 || n || ((await i(e)) && (u(``), a(!1)));
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = l),
      (t[4] = d))
    : (d = t[4]);
  let f = d,
    p;
  t[5] === a
    ? (p = t[6])
    : ((p = (e) => {
        (e || u(``), a(e));
      }),
      (t[5] = a),
      (t[6] = p));
  let m;
  t[7] === f
    ? (m = t[8])
    : ((m = (e) => {
        (e.preventDefault(), f());
      }),
      (t[7] = f),
      (t[8] = m));
  let h;
  t[9] !== r || t[10] !== s
    ? ((h = ft(s, r)), (t[9] = r), (t[10] = s), (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== r || t[13] !== s
    ? ((g = pt(s, r)), (t[12] = r), (t[13] = s), (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== h || t[16] !== g
    ? ((_ = (0, $.jsx)(B, {
        children: (0, $.jsx)(me, { title: h, subtitle: g }),
      })),
      (t[15] = h),
      (t[16] = g),
      (t[17] = _))
    : (_ = t[17]);
  let y;
  t[18] === c
    ? (y = t[19])
    : ((y = c.formatMessage({
        id: `settings.browserUse.domains.addDialogAriaLabel`,
        defaultMessage: `Domain`,
        description: `Aria label for browser use domain input`,
      })),
      (t[18] = c),
      (t[19] = y));
  let x;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (e) => {
        u(e.currentTarget.value);
      }),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] === c
    ? (S = t[22])
    : ((S = c.formatMessage({
        id: `settings.browserUse.domains.addDialogPlaceholder`,
        defaultMessage: `example.com`,
        description: `Placeholder for browser use domain input`,
      })),
      (t[21] = c),
      (t[22] = S));
  let C;
  t[23] !== l || t[24] !== y || t[25] !== S
    ? ((C = (0, $.jsx)(B, {
        className: `gap-2`,
        children: (0, $.jsx)(`input`, {
          autoFocus: !0,
          "aria-label": y,
          className: `rounded-xl border border-token-border px-3 py-2 text-base text-token-input-foreground shadow-sm outline-none`,
          onChange: x,
          placeholder: S,
          value: l,
        }),
      })),
      (t[23] = l),
      (t[24] = y),
      (t[25] = S),
      (t[26] = C))
    : (C = t[26]);
  let w;
  t[27] === a
    ? (w = t[28])
    : ((w = () => {
        (u(``), a(!1));
      }),
      (t[27] = a),
      (t[28] = w));
  let T;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(b, {
        id: `settings.browserUse.domains.addDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for add browser domain dialog`,
      })),
      (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] !== n || t[31] !== w
    ? ((E = (0, $.jsx)(z, {
        color: `outline`,
        disabled: n,
        onClick: w,
        type: `button`,
        children: T,
      })),
      (t[30] = n),
      (t[31] = w),
      (t[32] = E))
    : (E = t[32]);
  let D;
  t[33] !== n || t[34] !== l
    ? ((D = l.trim().length === 0 || n), (t[33] = n), (t[34] = l), (t[35] = D))
    : (D = t[35]);
  let O;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(b, {
        id: `settings.browserUse.domains.addDialogConfirm`,
        defaultMessage: `Add`,
        description: `Confirm button label for add browser domain dialog`,
      })),
      (t[36] = O))
    : (O = t[36]);
  let k;
  t[37] !== n || t[38] !== D
    ? ((k = (0, $.jsx)(z, {
        color: `primary`,
        disabled: D,
        loading: n,
        type: `submit`,
        children: O,
      })),
      (t[37] = n),
      (t[38] = D),
      (t[39] = k))
    : (k = t[39]);
  let A;
  t[40] !== E || t[41] !== k
    ? ((A = (0, $.jsx)(B, { children: (0, $.jsxs)(_e, { children: [E, k] }) })),
      (t[40] = E),
      (t[41] = k),
      (t[42] = A))
    : (A = t[42]);
  let j;
  t[43] !== C || t[44] !== A || t[45] !== m || t[46] !== _
    ? ((j = (0, $.jsxs)(ge, { as: `form`, onSubmit: m, children: [_, C, A] })),
      (t[43] = C),
      (t[44] = A),
      (t[45] = m),
      (t[46] = _),
      (t[47] = j))
    : (j = t[47]);
  let M;
  return (
    t[48] !== o || t[49] !== j || t[50] !== p
      ? ((M = (0, $.jsx)(he, {
          open: o,
          onOpenChange: p,
          size: `compact`,
          children: j,
        })),
        (t[48] = o),
        (t[49] = j),
        (t[50] = p),
        (t[51] = M))
      : (M = t[51]),
    M
  );
}
function Xt(e) {
  let t = (0, Z.c)(46),
    { kind: n, origins: r, resource: i } = e,
    a = x(y),
    o = v(),
    [s, c] = (0, Q.useState)(null),
    l = Re(),
    u = Ie(),
    d = i === `origins` ? l.isPending : u.isPending,
    f;
  t[0] !== n ||
  t[1] !== s ||
  t[2] !== u ||
  t[3] !== l ||
  t[4] !== i ||
  t[5] !== a
    ? ((f = async () => {
        if (s != null)
          try {
            (i === `origins`
              ? await l.mutateAsync({ kind: n, origin: s })
              : await u.mutateAsync({
                  kind: n,
                  origin: s,
                  transferKind: i === `downloads` ? `download` : `upload`,
                }),
              c(null),
              a.get(L).success(dt(i, n)));
          } catch {
            a.get(L).danger(
              (0, $.jsx)(b, {
                id: `settings.browserUse.origins.saveError`,
                defaultMessage: `Unable to save domains`,
                description: `Toast shown when saving browser domain settings fails`,
              }),
            );
          }
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = u),
      (t[3] = l),
      (t[4] = i),
      (t[5] = a),
      (t[6] = f))
    : (f = t[6]);
  let p = f,
    m;
  t[7] !== o || t[8] !== d || t[9] !== n || t[10] !== r || t[11] !== i
    ? ((m = (0, $.jsx)(Zt, {
        kind: n,
        intl: o,
        isSaving: d,
        onRequestRemoval: c,
        origins: r,
        resource: i,
      })),
      (t[7] = o),
      (t[8] = d),
      (t[9] = n),
      (t[10] = r),
      (t[11] = i),
      (t[12] = m))
    : (m = t[12]);
  let h = s != null,
    g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => {
        e || c(null);
      }),
      (t[13] = g))
    : (g = t[13]);
  let _ = s ?? ``,
    S;
  t[14] !== n || t[15] !== i || t[16] !== _
    ? ((S = mt(i, n, _)), (t[14] = n), (t[15] = i), (t[16] = _), (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] !== n || t[19] !== i
    ? ((C = ht(i, n)), (t[18] = n), (t[19] = i), (t[20] = C))
    : (C = t[20]);
  let w;
  t[21] !== S || t[22] !== C
    ? ((w = (0, $.jsx)(B, {
        children: (0, $.jsx)(me, { title: S, subtitle: C }),
      })),
      (t[21] = S),
      (t[22] = C),
      (t[23] = w))
    : (w = t[23]);
  let T, E;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => {
        c(null);
      }),
      (T = (0, $.jsx)(b, {
        id: `settings.browserUse.origins.removeDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for remove browser website dialog`,
      })),
      (t[24] = T),
      (t[25] = E))
    : ((T = t[24]), (E = t[25]));
  let D;
  t[26] === d
    ? (D = t[27])
    : ((D = (0, $.jsx)(z, {
        color: `ghost`,
        disabled: d,
        onClick: E,
        children: T,
      })),
      (t[26] = d),
      (t[27] = D));
  let O;
  t[28] === p
    ? (O = t[29])
    : ((O = () => {
        p();
      }),
      (t[28] = p),
      (t[29] = O));
  let k;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(b, {
        id: `settings.browserUse.origins.removeDialogConfirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for remove browser website dialog`,
      })),
      (t[30] = k))
    : (k = t[30]);
  let A;
  t[31] !== d || t[32] !== O
    ? ((A = (0, $.jsx)(z, {
        color: `danger`,
        loading: d,
        onClick: O,
        children: k,
      })),
      (t[31] = d),
      (t[32] = O),
      (t[33] = A))
    : (A = t[33]);
  let j;
  t[34] !== D || t[35] !== A
    ? ((j = (0, $.jsx)(B, { children: (0, $.jsxs)(_e, { children: [D, A] }) })),
      (t[34] = D),
      (t[35] = A),
      (t[36] = j))
    : (j = t[36]);
  let M;
  t[37] !== j || t[38] !== w
    ? ((M = (0, $.jsxs)(ge, { children: [w, j] })),
      (t[37] = j),
      (t[38] = w),
      (t[39] = M))
    : (M = t[39]);
  let N;
  t[40] !== M || t[41] !== h
    ? ((N = (0, $.jsx)(he, {
        open: h,
        onOpenChange: g,
        size: `compact`,
        children: M,
      })),
      (t[40] = M),
      (t[41] = h),
      (t[42] = N))
    : (N = t[42]);
  let P;
  return (
    t[43] !== N || t[44] !== m
      ? ((P = (0, $.jsxs)($.Fragment, { children: [m, N] })),
        (t[43] = N),
        (t[44] = m),
        (t[45] = P))
      : (P = t[45]),
    P
  );
}
function Zt(e) {
  let t = (0, Z.c)(16),
    {
      intl: n,
      isSaving: r,
      kind: i,
      onRequestRemoval: a,
      origins: o,
      resource: s,
    } = e;
  if (o.length === 0) {
    let e;
    t[0] !== i || t[1] !== s
      ? ((e = gt(s, i)), (t[0] = i), (t[1] = s), (t[2] = e))
      : (e = t[2]);
    let n;
    return (
      t[3] === e
        ? (n = t[4])
        : ((n = (0, $.jsx)(J, {
            className: `justify-center`,
            label: (0, $.jsx)(`span`, {
              className: `text-token-text-secondary`,
              children: e,
            }),
            control: null,
          })),
          (t[3] = e),
          (t[4] = n)),
      n
    );
  }
  let c;
  if (t[5] !== n || t[6] !== r || t[7] !== a || t[8] !== o) {
    let e;
    (t[10] !== n || t[11] !== r || t[12] !== a
      ? ((e = (e) =>
          (0, $.jsx)(
            J,
            {
              label: (0, $.jsx)(`span`, {
                className: `font-medium`,
                children: e,
              }),
              description: null,
              control: (0, $.jsx)(z, {
                "aria-label": n.formatMessage(
                  {
                    id: `settings.browserUse.origins.removeAriaLabel`,
                    defaultMessage: `Remove {origin}`,
                    description: `Aria label for button that removes a browser website origin`,
                  },
                  { origin: e },
                ),
                color: `ghost`,
                disabled: r,
                onClick: () => {
                  a(e);
                },
                size: `icon`,
                children: (0, $.jsx)(Ce, { className: `icon-2xs` }),
              }),
            },
            e,
          )),
        (t[10] = n),
        (t[11] = r),
        (t[12] = a),
        (t[13] = e))
      : (e = t[13]),
      (c = o.map(e)),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = o),
      (t[9] = c));
  } else c = t[9];
  let l;
  return (
    t[14] === c
      ? (l = t[15])
      : ((l = (0, $.jsx)($.Fragment, { children: c })),
        (t[14] = c),
        (t[15] = l)),
    l
  );
}
function Qt(e, t, n) {
  switch (t) {
    case `origins`:
      return n === `allowed` ? e.allowedOrigins : e.deniedOrigins;
    case `downloads`:
      return n === `allowed`
        ? e.allowedDownloadOrigins
        : e.deniedDownloadOrigins;
    case `uploads`:
      return n === `allowed` ? e.allowedUploadOrigins : e.deniedUploadOrigins;
  }
}
export {
  Ut as a,
  Tt as c,
  _t as d,
  ot as f,
  At as i,
  Dt as l,
  kt as n,
  qt as o,
  Ot as r,
  Wt as s,
  Lt as t,
  St as u,
};
//# sourceMappingURL=browser-use-settings-BDeWl5VD.js.map
