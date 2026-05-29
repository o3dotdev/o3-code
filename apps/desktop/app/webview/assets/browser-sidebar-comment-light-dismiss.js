import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  Dr as t,
  Sr as n,
  Tr as r,
  Zr as i,
  m as a,
  ni as o,
  xr as s,
} from "./src-C.js";
import {
  Ia as c,
  Jr as l,
  Yr as u,
  kt as d,
  po as f,
  tc as p,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as m, t as h } from "./jsx-runtime.js";
import { t as g } from "./clsx-BcPLHiun.js";
import {
  C as _,
  G as v,
  L as y,
  S as b,
  U as x,
  X as S,
  Y as C,
  Z as w,
  _ as T,
  b as E,
  f as D,
  l as O,
  p as k,
  u as A,
  v as j,
  wt as M,
  x as N,
  y as P,
} from "./setting-storage.js";
import { t as F } from "./product-logger-DusapRyT.js";
import { n as I } from "./rpc-DqwD0euc.js";
import { d as L, o as R } from "./statsig--EYRNU53.js";
import { n as ee } from "./use-auth.js";
import { t as te } from "./use-debounced-value-BtOJx-Vp.js";
import { u as z } from "./apps-queries-CmwRqoKz.js";
import { r as ne } from "./toast-signal.js";
import { r as B, t as re } from "./tooltip-CDzchJxN.js";
import { _ as ie, o as ae } from "./mention-item.js";
import { r as V, t as oe } from "./use-collaboration-mode-CQFe-Ilp.js";
import { t as H } from "./button.js";
import { t as se } from "./spinner.js";
import { t as U } from "./mime-types.js";
import { t as W } from "./composer-footer-C_v29uwU.js";
import { t as ce } from "./apps-DwfMzB5Q.js";
import { t as le } from "./x-C_RDKBp5.js";
import { t as G } from "./use-is-plugins-enabled.js";
import { m as K } from "./use-plugins-jIZrcuZQ.js";
import { t as ue } from "./app-intl-signal.js";
import { t as de } from "./with-window.js";
import {
  a as fe,
  d as pe,
  i as q,
  l as me,
  n as he,
  r as ge,
  u as _e,
} from "./dialog-layout.js";
import { r as ve } from "./modal-controller-state.js";
import { t as J } from "./folder.js";
import { t as Y } from "./use-stable-callback.js";
import { n as ye, t as be } from "./electron-menu-shortcuts.js";
import { t as xe } from "./data-url-from-svg.js";
import { t as Se } from "./check-md.js";
import { t as Ce } from "./chevron-right.js";
import { i as we } from "./command-keybindings-C3NM9T-L.js";
import { r as Te } from "./keyboard-modifier-state-BKqcycjV.js";
import { t as Ee } from "./badge.js";
import { r as X, t as De } from "./dropdown-DtQxMoJw.js";
import { t as Oe } from "./trash.js";
import { a as ke, i as Ae } from "./use-native-apps.electron.js";
import { n as je } from "./json-CRHyc9De.js";
import { t as Me } from "./image-square-CGEtcnWp.js";
import { n as Ne } from "./use-skills.js";
import { t as Pe } from "./plus.js";
import { t as Fe } from "./image-preview-dialog.js";
import { t as Ie } from "./stop.js";
import { i as Le } from "./plugins-page-selectors.js";
import { t as Re } from "./arrow-up-fq4d26GH.js";
import {
  a as ze,
  c as Be,
  d as Ve,
  i as He,
  l as Ue,
  n as We,
  p as Ge,
  s as Ke,
  t as qe,
} from "./prompt-editor-.js";
import { t as Je } from "./use-is-appshot-available-BuzGfUqU.js";
import { r as Ye, t as Xe } from "./attachment-remove-button-BPMNqRUa.js";
import { t as Ze } from "./appshot-logo-BVhiJxtp.js";
import { t as Qe } from "./toggle.js";
import { t as $e } from "./at-mention-list-C6rdlW9Y.js";
import { i as et, t as tt } from "./use-composer-controller.js";
import { t as nt } from "./plan-Bf1LT-JR.js";
import { t as rt } from "./appshot-window.js";
import { t as it } from "./undo.js";
import { t as at } from "./regenerate.js";
import {
  i as ot,
  n as st,
  r as ct,
  t as lt,
} from "./use-recording-waveform.js";
import { t as ut } from "./use-hotkey-yGPn4uDB.js";
import { t as dt } from "./arrow-rotate-ccw.js";
import { t as ft } from "./drag-DztkEAnS.js";
import { t as pt } from "./link-Cym8GZvE.js";
var mt = D(b, `computer-use-frontmost-window`, {
    enabled: !1,
    refetchOnWindowFocus: !1,
    staleTime: T.INFINITE,
  }),
  ht = new Map(),
  gt = /^Window:\s*"(.*)",\s*App:/,
  _t = !1;
async function vt(
  e,
  {
    getAnimationDestinationFrame: t,
    getAttachmentGen: n,
    onAddAppshotContext: r,
    onCaptureAnimationDuration: i,
    onCaptureSettled: a,
    onCaptureStarted: o,
    source: s,
    target: c,
  },
) {
  let l = () => {
      e.get(ne).danger(
        e.get(ue).formatMessage({
          id: `composer.appshotCapture.attach.error`,
          defaultMessage: `Unable to attach appshot`,
          description: `Toast shown when attaching an appshot fails`,
        }),
      );
    },
    u = crypto.randomUUID(),
    d = yt(t, c);
  if (d == null) {
    l();
    return;
  }
  (_.info(`Appshot capture request created`, {
    safe: { requestId: u, source: s },
    sensitive: { bundleIdentifier: c.bundleIdentifier, name: c.name },
  }),
    xt(),
    F(e, {
      eventName: `codex_appshot_capture_started`,
      metadata: { source: s },
    }),
    ht.set(u, {
      scope: e,
      attachmentGen: n(),
      bundleIdentifier: c.bundleIdentifier,
      filename: Et(c),
      getAttachmentGen: n,
      imageDataUrl: null,
      imagePath: null,
      onAddAppshotContext: r,
      onAttachError: l,
      onCaptureSettled: a,
      requestId: u,
      source: s,
      startedAt: performance.now(),
      target: c,
      text: null,
      transitionSnapshotHeight: null,
    }),
    o?.(u));
  let { transitionSnapshotScale: f, ...p } = yt(t, c) ?? d;
  try {
    let e = performance.now();
    _.info(`Appshot capture start request sent`, {
      safe: { requestId: u, source: s },
      sensitive: { bundleIdentifier: c.bundleIdentifier, name: c.name },
    });
    let t = await O(`computer-use-start-capture`, {
      params: {
        animationDestination: p,
        bundleIdentifier: c.bundleIdentifier,
        requestId: u,
      },
    });
    if (
      (_.info(`Appshot capture start request finished`, {
        safe: {
          requestId: u,
          source: s,
          elapsedMs: Math.round(performance.now() - e),
          hasResponse: t != null,
        },
        sensitive: {},
      }),
      t == null)
    ) {
      (i?.(u, null),
        wt(u, {
          status: `failed`,
          failureReason: `start_response_missing`,
        })?.onAttachError());
      return;
    }
    let n = ht.get(u),
      r =
        t.transitionSnapshotHeight == null
          ? null
          : t.transitionSnapshotHeight / f;
    (n != null && ht.set(u, { ...n, transitionSnapshotHeight: r }),
      i?.(u, { ...t, transitionSnapshotHeight: r }));
  } catch (e) {
    (_.warning(`Appshot capture start request failed`, {
      safe: { requestId: u, source: s },
      sensitive: { error: e },
    }),
      i?.(u, null),
      wt(u, {
        status: `failed`,
        failureReason: `start_request_failed`,
      })?.onAttachError());
  }
}
function yt(e, t) {
  let n = e(t);
  if (n == null || !bt(n)) return;
  let {
    backgroundColor: r,
    cornerRadius: i,
    primaryTextColor: a,
    transitionSnapshotScale: o = 1,
    ...s
  } = n;
  return {
    backgroundColor: r,
    cornerRadius: i,
    primaryTextColor: a,
    transitionSnapshotScale: o,
    viewportFrame: s,
  };
}
function bt(e) {
  return e.width > 0 && e.height > 0 && e.cornerRadius >= 0;
}
function xt() {
  _t || ((_t = !0), window.addEventListener(`message`, St));
}
function St(e) {
  let t = N(e);
  if (t?.type !== `computer-use-capture-updated`) return;
  let n = ht.get(t.requestId);
  if (n == null) return;
  if (
    (_.info(`Appshot capture update received`, {
      safe: {
        requestId: t.requestId,
        source: n.source,
        updateType: t.update.type,
        elapsedMs: Math.round(performance.now() - n.startedAt),
      },
      sensitive: {},
    }),
    n.attachmentGen !== n.getAttachmentGen())
  ) {
    wt(t.requestId, { status: `discarded` });
    return;
  }
  if (t.update.type === `failed`) {
    (wt(t.requestId, {
      status: `failed`,
      failureReason: t.update.failureReason,
    }),
      n.onAttachError());
    return;
  }
  if (t.update.type === `metadata`) {
    ht.set(t.requestId, {
      ...n,
      bundleIdentifier: t.update.app.bundleIdentifier,
    });
    return;
  }
  if (t.update.type === `axText`) {
    ht.set(t.requestId, { ...n, text: t.update.text });
    return;
  }
  if (t.update.type === `screenshot`) {
    (n.source === `hotkey` &&
      n.imageDataUrl == null &&
      t.update.screenshotDataURL != null &&
      P.dispatchMessage(`open-current-main-window`, { stealFocus: !0 }),
      ht.set(t.requestId, {
        ...n,
        imageDataUrl: t.update.screenshotDataURL ?? n.imageDataUrl,
        imagePath: t.update.screenshotPath ?? n.imagePath,
      }));
    return;
  }
  if (n.imageDataUrl == null) {
    (wt(t.requestId, {
      status: `failed`,
      failureReason: `completed_without_screenshot`,
    }),
      n.onAttachError());
    return;
  }
  let r = n.target.appIconDataUrl ?? n.target.iconSmallDataURL;
  (Ye(n.scope, n.bundleIdentifier, n.filename, r),
    n.onAddAppshotContext(
      {
        appName: n.target.name,
        windowTitle: Ct(n),
        bundleIdentifier: n.bundleIdentifier,
        axTree: n.text ?? ``,
        imagePath: null,
        imageName: n.filename,
        imageDataUrl: n.imageDataUrl,
        transitionSnapshotDataUrl: t.update.transitionSnapshotDataURL ?? null,
        transitionSnapshotHeight: n.transitionSnapshotHeight,
        appIconDataUrl: r,
      },
      t.requestId,
    ),
    wt(t.requestId, { status: `success` }));
}
function Ct(e) {
  let t = e.text?.match(gt)?.[1]?.trim();
  if (t != null && t.length > 0) return t;
  let n = e.target.windowTitle?.trim();
  return n != null && n.length > 0 ? n : null;
}
function wt(e, t) {
  let n = Tt(e, t.status);
  if (n == null) return null;
  let r = Math.round(performance.now() - n.startedAt);
  return (
    F(n.scope, {
      eventName: `codex_appshot_capture_finished`,
      metadata: {
        source: n.source,
        status: t.status,
        ...(t.status === `failed` ? { failure_reason: t.failureReason } : {}),
        duration_ms: r,
        had_screenshot: n.imageDataUrl != null,
        had_ax_text: n.text != null,
      },
    }),
    _.info(`Appshot capture settled`, {
      safe: {
        requestId: e,
        source: n.source,
        status: t.status,
        failureReason: t.status === `failed` ? t.failureReason : void 0,
        elapsedMs: r,
        hadScreenshot: n.imageDataUrl != null,
        hadAxText: n.text != null,
      },
      sensitive: {},
    }),
    n
  );
}
function Tt(e, t) {
  let n = ht.get(e);
  return n == null
    ? null
    : (ht.delete(e), n.onCaptureSettled?.(e, t === `success`), n);
}
function Et(e) {
  let t = e.name.replace(/[/:]/g, `-`).replace(/\s+/g, ` `).trim(),
    n = new Date().toISOString().replaceAll(`:`, `-`);
  return `${t || `App`} Appshot ${n}.png`;
}
var Z = M(),
  Q = h();
function Dt(e) {
  let t = (0, Z.c)(19),
    { onClose: n, onContinue: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = (e) => {
        (e.preventDefault(), n(), r());
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(pe, {
        className: `sr-only`,
        children: (0, Q.jsx)(x, {
          id: `composer.appshotCapture.firstUse.title`,
          defaultMessage: `Enable Appshots`,
          description: `Title for the first-use appshot explainer dialog`,
        }),
      })),
      (t[3] = a))
    : (a = t[3]);
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(_e, {
        className: `sr-only`,
        children: (0, Q.jsx)(x, {
          id: `composer.appshotCapture.firstUse.description`,
          defaultMessage: `Appshots let you attach your current window to Codex. Appshots include all window text, even what’s scrolled out of view.`,
          description: `Description in the first-use appshot explainer dialog`,
        }),
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(`div`, {
        className: `mb-6 flex justify-start`,
        children: (0, Q.jsx)(`img`, {
          alt: ``,
          "aria-hidden": !0,
          className: `h-[77px] w-[88px] object-contain`,
          src: Ze,
        }),
      })),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsxs)(fe, {
        children: [
          s,
          (0, Q.jsx)(q, {
            title: (0, Q.jsx)(x, {
              id: `composer.appshotCapture.firstUse.title`,
              defaultMessage: `Enable Appshots`,
              description: `Title for the first-use appshot explainer dialog`,
            }),
            subtitle: (0, Q.jsx)(x, {
              id: `composer.appshotCapture.firstUse.description`,
              defaultMessage: `Appshots let you attach your current window to Codex. Appshots include all window text, even what’s scrolled out of view.`,
              description: `Description in the first-use appshot explainer dialog`,
            }),
          }),
        ],
      })),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(x, {
        id: `composer.appshotCapture.firstUse.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label in the first-use appshot explainer dialog`,
      })),
      (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] === n
    ? (u = t[9])
    : ((u = (0, Q.jsx)(H, {
        color: `ghost`,
        type: `button`,
        onClick: n,
        children: l,
      })),
      (t[8] = n),
      (t[9] = u));
  let d;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(H, {
        type: `submit`,
        children: (0, Q.jsx)(x, {
          id: `composer.appshotCapture.firstUse.continue`,
          defaultMessage: `Enable`,
          description: `Enable button label in the first-use appshot explainer dialog`,
        }),
      })),
      (t[10] = d))
    : (d = t[10]);
  let f;
  t[11] === u
    ? (f = t[12])
    : ((f = (0, Q.jsx)(fe, {
        children: (0, Q.jsxs)(ge, { children: [u, d] }),
      })),
      (t[11] = u),
      (t[12] = f));
  let p;
  t[13] !== i || t[14] !== f
    ? ((p = (0, Q.jsxs)(he, {
        as: `form`,
        onSubmit: i,
        children: [a, o, c, f],
      })),
      (t[13] = i),
      (t[14] = f),
      (t[15] = p))
    : (p = t[15]);
  let m;
  return (
    t[16] !== n || t[17] !== p
      ? ((m = (0, Q.jsx)(me, {
          open: !0,
          onOpenChange: n,
          size: `compact`,
          children: p,
        })),
        (t[16] = n),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
var Ot = d(`has-accepted-appshot-intro`, !1);
function kt(e, t) {
  if (e.get(Ot)) {
    t();
    return;
  }
  (P.dispatchMessage(`open-current-main-window`, { stealFocus: !0 }),
    ve(e, Dt, {
      onContinue: () => {
        (e.set(Ot, !0), t());
      },
    }));
}
var $ = e(m()),
  At = (e) =>
    (0, Q.jsxs)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Q.jsx)(`path`, {
          d: `M9.96861 1.91681C10.3002 1.91681 10.569 2.18564 10.569 2.51722C10.5688 2.84865 10.3001 3.11764 9.96861 3.11764C6.14529 3.11779 3.04595 6.21713 3.04579 10.0404C3.04597 13.8637 6.14531 16.964 9.96861 16.9641C13.792 16.9641 16.8921 13.8638 16.8923 10.0404C16.8925 9.709 17.1612 9.44003 17.4927 9.44003C17.8241 9.44019 18.093 9.7091 18.0931 10.0404C18.0929 14.527 14.4552 18.165 9.96861 18.165C5.48215 18.1648 1.84515 14.5269 1.84497 10.0404C1.84513 5.55398 5.48214 1.91697 9.96861 1.91681Z`,
          fill: `currentColor`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M8.73428 5.4417C9.05275 5.34987 9.38553 5.53321 9.47752 5.85167C9.56932 6.17 9.38575 6.50275 9.06755 6.59491C7.60672 7.01688 6.53899 8.36477 6.53894 9.96021C6.53907 11.8943 8.10685 13.4629 10.0409 13.4631C11.6106 13.463 12.9407 12.429 13.385 11.0041C13.4838 10.6877 13.8206 10.5114 14.1371 10.61C14.4536 10.7087 14.6308 11.0455 14.5321 11.3621C13.9357 13.2742 12.1509 14.663 10.0409 14.663C7.44369 14.6628 5.33824 12.5574 5.33812 9.96021C5.33816 7.81571 6.77345 6.00809 8.73428 5.4417Z`,
          fill: `currentColor`,
        }),
        (0, Q.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M13.8656 1.99087C14.3948 1.60393 15.1805 1.97721 15.1739 2.67063L15.1528 4.83776L17.319 4.8166L17.4539 4.82541C18.1023 4.92002 18.4014 5.73603 17.9115 6.22638L15.5046 8.63331C15.3075 8.83039 15.04 8.94171 14.7613 8.94189H12.2063L10.3936 10.7555C10.1591 10.9899 9.77811 10.9899 9.54364 10.7555C9.30989 10.521 9.30952 10.1407 9.54364 9.90643L11.0486 8.40144V5.22922C11.0486 4.95027 11.1591 4.68234 11.3563 4.48509L13.7633 2.07816L13.8656 1.99087ZM12.2495 5.29005V7.74107H14.6978L16.4136 6.02536L13.9414 6.05004L13.9643 3.57434L12.2495 5.29005Z`,
          fill: `currentColor`,
        }),
      ],
    }),
  jt = (e) =>
    (0, Q.jsx)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        d: `M7.9165 11.0012C9.43621 11.0012 10.7056 12.0728 11.0112 13.5012H16.6665L16.8013 13.5149C17.104 13.577 17.3314 13.8452 17.3315 14.1663C17.3315 14.4874 17.1041 14.7554 16.8013 14.8176L16.6665 14.8313H11.0112C10.7058 16.2601 9.43643 17.3313 7.9165 17.3313C6.39667 17.3311 5.12714 16.26 4.82178 14.8313H3.3335C2.96623 14.8313 2.66846 14.5335 2.66846 14.1663C2.66863 13.7991 2.96634 13.5012 3.3335 13.5012H4.82178C5.12738 12.0728 6.3969 11.0014 7.9165 11.0012ZM7.9165 12.3313C6.90332 12.3315 6.08172 13.1531 6.08154 14.1663C6.08154 15.1796 6.90321 16.001 7.9165 16.0012C8.92995 16.0012 9.75146 15.1797 9.75146 14.1663C9.75129 13.153 8.92984 12.3313 7.9165 12.3313ZM12.0835 2.66821C13.6033 2.66821 14.8727 3.73958 15.1782 5.16821H16.6665L16.8013 5.18188C17.1041 5.24406 17.3315 5.51204 17.3315 5.83325C17.3315 6.15446 17.1041 6.42245 16.8013 6.48462L16.6665 6.49829H15.1782C14.8727 7.92693 13.6033 8.99829 12.0835 8.99829C10.5637 8.99829 9.2943 7.92693 8.98877 6.49829H3.3335C2.96623 6.49829 2.66846 6.20052 2.66846 5.83325C2.66846 5.46598 2.96623 5.16821 3.3335 5.16821H8.98877C9.2943 3.73958 10.5637 2.66821 12.0835 2.66821ZM12.0835 3.99829C11.0701 3.99829 10.2485 4.81981 10.2485 5.83325C10.2485 6.84669 11.0701 7.66821 12.0835 7.66821C13.0969 7.66821 13.9185 6.84669 13.9185 5.83325C13.9185 4.81981 13.0969 3.99829 12.0835 3.99829Z`,
        fill: `currentColor`,
      }),
    });
function Mt(e) {
  let t = (0, Z.c)(42),
    {
      src: n,
      filename: r,
      alt: i,
      onRemove: a,
      loading: o,
      previewEnabled: s,
      previewPortalContainer: c,
      onPreviewCloseAutoFocus: l,
      onPreviewOpenChange: u,
      previewItems: d,
      previewIndex: f,
    } = e,
    p = i === void 0 ? `Attachment image` : i,
    m = o === void 0 ? !1 : o,
    h = s === void 0 ? !0 : s,
    _ = f === void 0 ? 0 : f,
    y = v(),
    [b, x] = (0, $.useState)(!1),
    [S, C] = (0, $.useState)(_),
    w;
  t[0] !== u || t[1] !== _
    ? ((w = (e) => {
        (e && C(_), x(e), u?.(e));
      }),
      (t[0] = u),
      (t[1] = _),
      (t[2] = w))
    : (w = t[2]);
  let T = w,
    E;
  t[3] !== p || t[4] !== n
    ? ((E = { alt: p, src: n }), (t[3] = p), (t[4] = n), (t[5] = E))
    : (E = t[5]);
  let D = E,
    O;
  t[6] !== D || t[7] !== d
    ? ((O = d ?? [D]), (t[6] = D), (t[7] = d), (t[8] = O))
    : (O = t[8]);
  let k = O,
    A = k[S] ?? D,
    j = S > 0 ? S - 1 : null,
    M = S + 1 < k.length ? S + 1 : null,
    N;
  if (
    t[9] !== p ||
    t[10] !== r ||
    t[11] !== T ||
    t[12] !== y ||
    t[13] !== m ||
    t[14] !== a ||
    t[15] !== h ||
    t[16] !== n
  ) {
    let e =
        r ??
        y.formatMessage({
          id: `imageAttachment.defaultName`,
          defaultMessage: `image`,
          description: `Default filename label for image attachment`,
        }),
      i = h ? `cursor-interaction` : `cursor-default`,
      o;
    t[18] === i
      ? (o = t[19])
      : ((o = g(
          `border-token-border-heavy relative inline-flex size-20 flex-shrink-0 overflow-visible rounded-lg border focus:outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:ring-inset`,
          i,
        )),
        (t[18] = i),
        (t[19] = o));
    let s;
    t[20] !== T || t[21] !== h
      ? ((s = h
          ? (e) => {
              (e.key === `Enter` || e.key === ` `) &&
                (e.preventDefault(), T(!0));
            }
          : void 0),
        (t[20] = T),
        (t[21] = h),
        (t[22] = s))
      : (s = t[22]);
    let c;
    t[23] !== p || t[24] !== n
      ? ((c = (0, Q.jsx)(`span`, {
          className: `absolute inset-0 overflow-hidden rounded-lg`,
          children: (0, Q.jsx)(`img`, {
            src: n,
            alt: p,
            className: `size-20 object-cover`,
          }),
        })),
        (t[23] = p),
        (t[24] = n),
        (t[25] = c))
      : (c = t[25]);
    let l;
    (t[26] === m
      ? (l = t[27])
      : ((l =
          m &&
          (0, Q.jsx)(`span`, {
            className: `absolute inset-0 flex items-center justify-center rounded-lg bg-black/20`,
            children: (0, Q.jsx)(`span`, {
              className: `h-3 w-3 animate-spin rounded-full border-2 border-white/60 border-t-transparent`,
            }),
          })),
        (t[26] = m),
        (t[27] = l)),
      (N = (0, Q.jsxs)(`div`, {
        className: o,
        role: h ? `button` : void 0,
        "aria-label": h ? e : void 0,
        tabIndex: h ? 0 : void 0,
        onKeyDown: s,
        children: [
          c,
          l,
          a &&
            (0, Q.jsx)(Xe, {
              ariaLabel: y.formatMessage(
                {
                  id: `imageAttachment.removeAriaLabel`,
                  defaultMessage: `Remove {filename}`,
                  description: `Aria label for the remove image attachment button`,
                },
                { filename: e },
              ),
              onRemove: a,
            }),
        ],
      })),
      (t[9] = p),
      (t[10] = r),
      (t[11] = T),
      (t[12] = y),
      (t[13] = m),
      (t[14] = a),
      (t[15] = h),
      (t[16] = n),
      (t[17] = N));
  } else N = t[17];
  let P = N;
  if (!h) return P;
  let F;
  t[28] === j
    ? (F = t[29])
    : ((F =
        j == null
          ? void 0
          : () => {
              C(j);
            }),
      (t[28] = j),
      (t[29] = F));
  let I;
  t[30] === M
    ? (I = t[31])
    : ((I =
        M == null
          ? void 0
          : () => {
              C(M);
            }),
      (t[30] = M),
      (t[31] = I));
  let L;
  return (
    t[32] !== A.alt ||
    t[33] !== A.src ||
    t[34] !== T ||
    t[35] !== b ||
    t[36] !== l ||
    t[37] !== P ||
    t[38] !== c ||
    t[39] !== I ||
    t[40] !== F
      ? ((L = (0, Q.jsx)(Fe, {
          src: A.src,
          alt: A.alt,
          open: b,
          onOpenChange: T,
          downloadSrc: A.src,
          imageDraggable: !1,
          onCloseAutoFocus: l,
          onPreviousImage: F,
          onNextImage: I,
          portalContainer: c,
          triggerContent: P,
        })),
        (t[32] = A.alt),
        (t[33] = A.src),
        (t[34] = T),
        (t[35] = b),
        (t[36] = l),
        (t[37] = P),
        (t[38] = c),
        (t[39] = I),
        (t[40] = F),
        (t[41] = L))
      : (L = t[41]),
    L
  );
}
var Nt = (e) =>
  (0, Q.jsx)(`svg`, {
    width: 20,
    height: 20,
    viewBox: `0 0 20 20`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ...e,
    children: (0, Q.jsx)(`path`, {
      d: `M10.6878 9.46029L10.8421 9.49545L17.2913 11.43L17.4642 11.4974C18.2215 11.8649 18.2705 12.9544 17.5492 13.388L17.3822 13.4701L14.5872 14.5872L13.4701 17.3822C13.1135 18.2734 11.8913 18.2756 11.4974 17.4642L11.43 17.2913L9.49544 10.8421C9.26342 10.0687 9.92452 9.34418 10.6878 9.46029ZM12.4984 16.2288L13.3929 13.9954L13.4388 13.8949C13.5579 13.6675 13.7549 13.4891 13.9954 13.3929L16.2288 12.4984L10.9007 10.9007L12.4984 16.2288ZM5.90365 12.9749C6.16329 12.7153 6.58436 12.7154 6.84408 12.9749C7.10378 13.2346 7.10378 13.6557 6.84408 13.9154L5.0765 15.6829C4.8168 15.9426 4.39577 15.9426 4.13607 15.6829C3.87654 15.4232 3.87643 15.0022 4.13607 14.7425L5.90365 12.9749ZM2.83724 7.3265L5.25228 7.97299L5.37826 8.02084C5.65484 8.1591 5.80597 8.47712 5.72298 8.78744C5.63984 9.09774 5.34997 9.298 5.04134 9.27963L4.90853 9.25814L2.49349 8.61068L2.36752 8.56283C2.09082 8.42452 1.93961 8.10666 2.02279 7.79623C2.10599 7.4859 2.39574 7.28652 2.70443 7.30502L2.83724 7.3265ZM14.847 4.05111C15.1051 3.88059 15.4556 3.90894 15.6829 4.13607C15.9426 4.39577 15.9426 4.8168 15.6829 5.0765L13.9154 6.84408C13.6557 7.10378 13.2346 7.10378 12.9749 6.84408C12.7154 6.58437 12.7153 6.16329 12.9749 5.90365L14.7425 4.13607L14.847 4.05111ZM7.79623 2.02279C8.15098 1.92773 8.51562 2.13874 8.61068 2.49349L9.25814 4.90853L9.27962 5.04135C9.298 5.34998 9.09774 5.63984 8.78744 5.72299C8.47713 5.80592 8.15908 5.65484 8.02084 5.37826L7.97298 5.25228L7.3265 2.83724L7.30502 2.70443C7.28652 2.39577 7.48595 2.10603 7.79623 2.02279Z`,
      fill: `currentColor`,
    }),
  });
function Pt(e) {
  let t = (0, Z.c)(18),
    {
      disabled: n,
      getAnimationDestinationFrame: r,
      getAttachmentGen: i,
      handleSelectAndClose: a,
      onAddAppshotContext: o,
      onCaptureAnimationDuration: s,
      onCaptureSettled: c,
      onCaptureStarted: l,
    } = e,
    u = S(b),
    d = Je(),
    { data: f, isFetching: p } = w(mt),
    m = p ? null : (f ?? null);
  if (!d) return null;
  let h = n || m == null,
    g;
  t[0] !== r ||
  t[1] !== i ||
  t[2] !== a ||
  t[3] !== o ||
  t[4] !== s ||
  t[5] !== c ||
  t[6] !== l ||
  t[7] !== u ||
  t[8] !== m
    ? ((g = () => {
        m != null &&
          (a(),
          kt(u, () => {
            vt(u, {
              getAnimationDestinationFrame: r,
              getAttachmentGen: i,
              onAddAppshotContext: o,
              onCaptureAnimationDuration: s,
              onCaptureSettled: c,
              onCaptureStarted: l,
              source: `add_context_menu`,
              target: m,
            });
          }));
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = m),
      (t[9] = g))
    : (g = t[9]);
  let _, v;
  t[10] === m
    ? ((_ = t[11]), (v = t[12]))
    : ((_ = (0, Q.jsx)(X.ItemIcon, {
        size: `xs`,
        children:
          m?.iconSmallDataURL == null
            ? (0, Q.jsx)(rt, { "aria-hidden": !0, className: `size-4` })
            : (0, Q.jsx)(`img`, {
                src: m.iconSmallDataURL,
                alt: ``,
                "aria-hidden": !0,
                className: `size-4 rounded-[3px]`,
              }),
      })),
      (v =
        m == null
          ? (0, Q.jsx)(x, {
              id: `composer.appshotCapture.attach`,
              defaultMessage: `Attach appshot`,
              description: `Dropdown item label to attach an appshot`,
            })
          : (0, Q.jsx)(x, {
              id: `composer.appshotCapture.attachApp`,
              defaultMessage: `Attach {appName}`,
              description: `Dropdown item label to attach an appshot from the current app`,
              values: { appName: m.name },
            })),
      (t[10] = m),
      (t[11] = _),
      (t[12] = v));
  let y;
  return (
    t[13] !== h || t[14] !== g || t[15] !== _ || t[16] !== v
      ? ((y = (0, Q.jsxs)(X.Item, {
          disabled: h,
          onSelect: g,
          children: [_, v],
        })),
        (t[13] = h),
        (t[14] = g),
        (t[15] = _),
        (t[16] = v),
        (t[17] = y))
      : (y = t[17]),
    y
  );
}
var Ft = e(t(), 1),
  It = [];
function Lt(e) {
  let t = (0, Z.c)(90),
    { hostId: n, initialDirectoryPath: r } = e,
    i = v(),
    a = y(),
    o = e.mode !== `file`,
    c = e.mode === `file` ? e.selectedFilePaths : null,
    l;
  t[0] === c ? (l = t[1]) : ((l = new Set(c)), (t[0] = c), (t[1] = l));
  let u = l,
    d;
  t[2] === r ? (d = t[3]) : ((d = r?.trim() ?? ``), (t[2] = r), (t[3] = d));
  let [f, p] = (0, $.useState)(d),
    [m, h] = (0, $.useState)(!1),
    [_, b] = (0, $.useState)(``),
    S = te(_, 300),
    C,
    w,
    E,
    D;
  if (t[4] !== f || t[5] !== m || t[6] !== _) {
    D = _.trim();
    let e;
    (t[11] === f
      ? (e = t[12])
      : ((e = f.trim() || null), (t[11] = f), (t[12] = e)),
      (w = e),
      (C = !0),
      (E = m && !s(D)),
      (t[4] = f),
      (t[5] = m),
      (t[6] = _),
      (t[7] = C),
      (t[8] = w),
      (t[9] = E),
      (t[10] = D));
  } else ((C = t[7]), (w = t[8]), (E = t[9]), (D = t[10]));
  if (E) ((w = null), (C = !1));
  else if (m) {
    let e;
    t[13] === S ? (e = t[14]) : ((e = S.trim()), (t[13] = S), (t[14] = e));
    let n = e;
    w = n === D ? n : w;
  }
  let j;
  t[15] !== w || t[16] !== n || t[17] !== o
    ? ((j = { hostId: n, directoryPath: w, directoriesOnly: o }),
      (t[15] = w),
      (t[16] = n),
      (t[17] = o),
      (t[18] = j))
    : (j = t[18]);
  let M = w ?? ``,
    N;
  t[19] !== n || t[20] !== M
    ? ((N = [n, M]), (t[19] = n), (t[20] = M), (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] !== C || t[23] !== N
    ? ((P = { cacheKey: N, enabled: C, staleTime: 0 }),
      (t[22] = C),
      (t[23] = N),
      (t[24] = P))
    : (P = t[24]);
  let F;
  t[25] !== j || t[26] !== P
    ? ((F = { params: j, queryConfig: P }),
      (t[25] = j),
      (t[26] = P),
      (t[27] = F))
    : (F = t[27]);
  let {
      data: I,
      error: L,
      isLoading: R,
    } = k(`remote-workspace-directory-entries`, F),
    ee = w || I?.directoryPath || ``,
    z = C && I?.directoryPath === ee ? I.entries : It,
    ne = ee;
  (o && (ne = e.selectedPath || ee), o && m && (ne = _));
  let B;
  t[28] !== C ||
  t[29] !== I ||
  t[30] !== ee ||
  t[31] !== z ||
  t[32] !== ne ||
  t[33] !== o ||
  t[34] !== m ||
  t[35] !== e.selectedPath
    ? ((B = zt(ne)),
      C &&
        I?.directoryPath === ee &&
        (!m || ne === ee) &&
        (B =
          o &&
          z.some((t) => t.type === `directory` && t.path === e.selectedPath)
            ? ee
            : I.parentPath),
      (t[28] = C),
      (t[29] = I),
      (t[30] = ee),
      (t[31] = z),
      (t[32] = ne),
      (t[33] = o),
      (t[34] = m),
      (t[35] = e.selectedPath),
      (t[36] = B))
    : (B = t[36]);
  let re = R || !C || B == null,
    ie;
  t[37] === i
    ? (ie = t[38])
    : ((ie = i.formatMessage({
        id: `remoteCwdPicker.up`,
        defaultMessage: `Enclosing folder`,
        description: `Button label for moving the remote cwd picker to the parent directory`,
      })),
      (t[37] = i),
      (t[38] = ie));
  let ae = ie,
    V;
  t[39] !== i || t[40] !== o
    ? ((V = o
        ? i.formatMessage({
            id: `remoteCwdPicker.selectedPath`,
            defaultMessage: `Selected folder path`,
            description: `Accessible label for the input showing the selected remote folder path`,
          })
        : i.formatMessage({
            id: `remoteCwdPicker.currentPath`,
            defaultMessage: `Current folder path`,
            description: `Accessible label for the disabled input showing the current remote folder path in file picker mode`,
          })),
      (t[39] = i),
      (t[40] = o),
      (t[41] = V))
    : (V = t[41]);
  let oe = V,
    se;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (e) => {
        (h(!1), b(``), p(e));
      }),
      (t[42] = se))
    : (se = t[42]);
  let U = se,
    W;
  t[43] === e
    ? (W = t[44])
    : ((W = (t) => {
        if (e.mode === `file`) return;
        let n = t.trim();
        if ((e.setSelectedPath(n), s(n))) {
          (p(n), h(!1), b(``));
          return;
        }
        (h(!0), b(n));
      }),
      (t[43] = e),
      (t[44] = W));
  let ce = W,
    le,
    G;
  (t[45] !== z || t[46] !== n || t[47] !== o || t[48] !== a
    ? ((le = () => {
        if (z.length === 0) return;
        let e = z.filter(Rt);
        e.length !== 0 &&
          Promise.all(
            e.map((e) =>
              a.prefetchQuery({
                queryKey: A(
                  `remote-workspace-directory-entries`,
                  { hostId: n, directoryPath: e.path, directoriesOnly: o },
                  [n, e.path.trim()],
                ),
                queryFn: () =>
                  O(`remote-workspace-directory-entries`, {
                    params: {
                      hostId: n,
                      directoryPath: e.path,
                      directoriesOnly: o,
                    },
                  }),
                staleTime: T.INFINITE,
              }),
            ),
          );
      }),
      (G = [z, n, o, a]),
      (t[45] = z),
      (t[46] = n),
      (t[47] = o),
      (t[48] = a),
      (t[49] = le),
      (t[50] = G))
    : ((le = t[49]), (G = t[50])),
    (0, $.useEffect)(le, G));
  let K;
  t[51] !== B || t[52] !== e
    ? ((K = () => {
        B != null && (U(B), e.mode !== `file` && e.setSelectedPath(B));
      }),
      (t[51] = B),
      (t[52] = e),
      (t[53] = K))
    : (K = t[53]);
  let ue;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, Q.jsx)(it, { className: `icon-2xs` })), (t[54] = ue))
    : (ue = t[54]);
  let de;
  t[55] !== ae || t[56] !== re || t[57] !== K
    ? ((de = (0, Q.jsx)(H, {
        className: `shrink-0`,
        color: `ghost`,
        size: `composerSm`,
        uniform: !0,
        type: `button`,
        "aria-label": ae,
        disabled: re,
        onClick: K,
        children: ue,
      })),
      (t[55] = ae),
      (t[56] = re),
      (t[57] = K),
      (t[58] = de))
    : (de = t[58]);
  let fe = !o,
    pe = !o,
    q;
  t[59] === ce
    ? (q = t[60])
    : ((q = (e) => {
        ce(e.currentTarget.value);
      }),
      (t[59] = ce),
      (t[60] = q));
  let me;
  t[61] === e
    ? (me = t[62])
    : ((me = (t) => {
        if (e.mode === `file`) return;
        let n = t.target.value;
        (e.setSelectedPath(n), h(!0), b(n));
      }),
      (t[61] = e),
      (t[62] = me));
  let he;
  t[63] === ce
    ? (he = t[64])
    : ((he = (e) => {
        e.key === `Enter` && (e.preventDefault(), ce(e.currentTarget.value));
      }),
      (t[63] = ce),
      (t[64] = he));
  let ge;
  t[65] !== ne ||
  t[66] !== oe ||
  t[67] !== fe ||
  t[68] !== pe ||
  t[69] !== q ||
  t[70] !== me ||
  t[71] !== he
    ? ((ge = (0, Q.jsx)(`input`, {
        "aria-label": oe,
        className: `w-full min-w-0 flex-1 rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-input-foreground outline-none disabled:bg-token-foreground/5 disabled:text-token-text-secondary disabled:opacity-100`,
        disabled: fe,
        readOnly: pe,
        spellCheck: !1,
        title: ne,
        value: ne,
        onBlur: q,
        onChange: me,
        onKeyDown: he,
      })),
      (t[65] = ne),
      (t[66] = oe),
      (t[67] = fe),
      (t[68] = pe),
      (t[69] = q),
      (t[70] = me),
      (t[71] = he),
      (t[72] = ge))
    : (ge = t[72]);
  let _e;
  t[73] !== de || t[74] !== ge
    ? ((_e = (0, Q.jsxs)(`div`, {
        className: `mt-1 mb-2 flex min-w-0 items-center gap-1`,
        children: [de, ge],
      })),
      (t[73] = de),
      (t[74] = ge),
      (t[75] = _e))
    : (_e = t[75]);
  let ve;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = g(
        `min-h-0 flex-1`,
        `bg-token-input-background border-token-input-border flex overflow-y-auto rounded-lg border`,
      )),
      (t[76] = ve))
    : (ve = t[76]);
  let J;
  t[77] !== C ||
  t[78] !== I ||
  t[79] !== ee ||
  t[80] !== z ||
  t[81] !== L ||
  t[82] !== o ||
  t[83] !== R ||
  t[84] !== e ||
  t[85] !== u
    ? ((J = (0, Q.jsx)(`div`, {
        className: ve,
        children: C
          ? R && I == null
            ? (0, Q.jsx)(`div`, {
                className: `flex w-full items-center justify-center px-4 text-sm text-token-description-foreground`,
                children: (0, Q.jsx)(x, {
                  id: `remoteCwdPicker.loading`,
                  defaultMessage: `Loading folder contents…`,
                  description: `Message shown while the remote cwd picker is loading the current folder contents`,
                }),
              })
            : L || I == null
              ? (0, Q.jsx)(`div`, {
                  className: `flex w-full items-center justify-center px-4 text-sm text-token-description-foreground`,
                  children: (0, Q.jsx)(x, {
                    id: `remoteCwdPicker.loadError`,
                    defaultMessage: `Unable to load this folder`,
                    description: `Message shown when the remote cwd picker cannot load the current folder contents`,
                  }),
                })
              : z.length === 0
                ? (0, Q.jsx)(`div`, {
                    className: `flex w-full items-center justify-center px-4 text-sm text-token-description-foreground`,
                    children: o
                      ? (0, Q.jsx)(x, {
                          id: `remoteCwdPicker.empty`,
                          defaultMessage: `No folders found in this directory.`,
                          description: `Message shown when the current remote directory has no folders to choose from`,
                        })
                      : (0, Q.jsx)(x, {
                          id: `remoteCwdPicker.emptyFiles`,
                          defaultMessage: `No files or folders found in this directory`,
                          description: `Message shown when the current remote directory has no files or folders to choose from`,
                        }),
                  })
                : (0, Q.jsx)(`div`, {
                    className: `flex w-full flex-col py-1`,
                    children: z.map((t) => {
                      if (t.type === `directory`)
                        return (0, Q.jsx)(
                          Bt,
                          {
                            entry: t,
                            isSelected:
                              e.mode !== `file` && t.path === e.selectedPath,
                            disabled: R,
                            onOpen: () => {
                              U(t.path);
                            },
                            onSelect: () => {
                              if (e.mode === `file`) {
                                U(t.path);
                                return;
                              }
                              (U(ee), e.setSelectedPath(t.path));
                            },
                          },
                          t.path,
                        );
                      if (e.mode !== `file`) return null;
                      let n = u.has(t.path);
                      return (0, Q.jsx)(
                        Vt,
                        {
                          entry: t,
                          isSelected: n,
                          disabled: R,
                          onSelect: () => {
                            e.setSelectedFilePaths(
                              n
                                ? e.selectedFilePaths.filter(
                                    (e) => e !== t.path,
                                  )
                                : [...e.selectedFilePaths, t.path],
                            );
                          },
                        },
                        t.path,
                      );
                    }),
                  })
          : (0, Q.jsx)(`div`, {
              className: `flex w-full items-center justify-center px-4 text-sm text-token-description-foreground`,
              children: (0, Q.jsx)(x, {
                id: `remoteCwdPicker.enterFolderPath`,
                defaultMessage: `Enter a folder path to browse`,
                description: `Message shown when the remote cwd picker path input is empty`,
              }),
            }),
      })),
      (t[77] = C),
      (t[78] = I),
      (t[79] = ee),
      (t[80] = z),
      (t[81] = L),
      (t[82] = o),
      (t[83] = R),
      (t[84] = e),
      (t[85] = u),
      (t[86] = J))
    : (J = t[86]);
  let Y;
  return (
    t[87] !== _e || t[88] !== J
      ? ((Y = (0, Q.jsx)(`div`, {
          className: `flex h-70 min-h-56 flex-col gap-3`,
          children: (0, Q.jsxs)(`div`, {
            className: `flex min-h-0 min-w-0 flex-1 flex-col`,
            children: [_e, J],
          }),
        })),
        (t[87] = _e),
        (t[88] = J),
        (t[89] = Y))
      : (Y = t[89]),
    Y
  );
}
function Rt(e) {
  return e.type === `directory`;
}
function zt(e) {
  if (e.length === 0) return null;
  let t = n(e),
    i = t ? r(e) : e,
    a = Ft.default.posix.dirname(i),
    o = n(i) && /^[A-Za-z]:$/.test(a) ? `${a}/` : a;
  return o === `.` || o === i
    ? null
    : t && e.includes(`\\`)
      ? o.replaceAll(`/`, `\\`)
      : o;
}
function Bt(e) {
  let t = (0, Z.c)(13),
    { entry: n, isSelected: r, disabled: i, onOpen: a, onSelect: o } = e,
    s = !i && `hover:bg-token-foreground/5`,
    c = i && `cursor-not-allowed opacity-50`,
    l = r && `bg-token-foreground/10`,
    u;
  t[0] !== s || t[1] !== c || t[2] !== l
    ? ((u = g(
        `flex w-full min-w-0 self-stretch items-center gap-2 px-3 py-1.5 text-left text-sm`,
        s,
        c,
        l,
      )),
      (t[0] = s),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u))
    : (u = t[3]);
  let d = i ? void 0 : o,
    f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(J, {
        className: `icon-xs shrink-0 text-token-description-foreground`,
      })),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] === n.name
    ? (p = t[6])
    : ((p = (0, Q.jsx)(`span`, { className: `truncate`, children: n.name })),
      (t[5] = n.name),
      (t[6] = p));
  let m;
  return (
    t[7] !== i || t[8] !== a || t[9] !== u || t[10] !== d || t[11] !== p
      ? ((m = (0, Q.jsxs)(`button`, {
          type: `button`,
          className: u,
          disabled: i,
          onClick: d,
          onDoubleClick: a,
          children: [f, p],
        })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = u),
        (t[10] = d),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
function Vt(e) {
  let t = (0, Z.c)(16),
    { entry: n, isSelected: r, disabled: i, onSelect: a } = e,
    o = !i && `hover:bg-token-foreground/5`,
    s = i && `cursor-not-allowed opacity-50`,
    c = r && `bg-token-foreground/10`,
    l;
  t[0] !== o || t[1] !== s || t[2] !== c
    ? ((l = g(
        `flex w-full min-w-0 self-stretch items-center gap-2 px-3 py-1.5 text-left text-sm`,
        o,
        s,
        c,
      )),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l))
    : (l = t[3]);
  let u = i ? void 0 : a,
    d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(je, {
        className: `icon-xs shrink-0 text-token-description-foreground`,
      })),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === n.name
    ? (f = t[6])
    : ((f = (0, Q.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: n.name,
      })),
      (t[5] = n.name),
      (t[6] = f));
  let p;
  t[7] === r
    ? (p = t[8])
    : ((p = r ? (0, Q.jsx)(Se, { className: `icon-xs shrink-0` }) : null),
      (t[7] = r),
      (t[8] = p));
  let m;
  return (
    t[9] !== i ||
    t[10] !== r ||
    t[11] !== l ||
    t[12] !== u ||
    t[13] !== f ||
    t[14] !== p
      ? ((m = (0, Q.jsxs)(`button`, {
          type: `button`,
          className: l,
          "aria-pressed": r,
          disabled: i,
          onClick: u,
          children: [d, f, p],
        })),
        (t[9] = i),
        (t[10] = r),
        (t[11] = l),
        (t[12] = u),
        (t[13] = f),
        (t[14] = p),
        (t[15] = m))
      : (m = t[15]),
    m
  );
}
var Ht = (e) =>
  (0, Q.jsx)(`svg`, {
    width: 21,
    height: 21,
    viewBox: `0 0 21 21`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    ...e,
    children: (0, Q.jsx)(`path`, {
      d: `M4.43945 12.8041V7.68261C4.43945 7.30642 4.74446 7.00141 5.12066 7.00141C5.49685 7.00141 5.80186 7.30642 5.80186 7.68261V12.8041C5.80186 15.2565 7.78984 17.2445 10.2422 17.2445C12.6945 17.2445 14.6825 15.2565 14.6825 12.8041V5.9751C14.6823 4.46587 13.4589 3.24247 11.9497 3.24229C10.4403 3.24229 9.21606 4.46576 9.21588 5.9751V12.8041C9.21588 13.3708 9.67553 13.8304 10.2422 13.8304C10.8088 13.8304 11.2685 13.3708 11.2685 12.8041V7.68261C11.2685 7.30642 11.5735 7.00141 11.9497 7.00141C12.3257 7.00159 12.6309 7.30653 12.6309 7.68261V12.8041C12.6309 14.1232 11.5612 15.1929 10.2422 15.1929C8.92314 15.1929 7.85347 14.1232 7.85347 12.8041V5.9751C7.85365 3.71337 9.68791 1.87988 11.9497 1.87988C14.2113 1.88006 16.0447 3.71348 16.0449 5.9751V12.8041C16.0449 16.0089 13.4469 18.6069 10.2422 18.6069C7.03745 18.6069 4.43945 16.0089 4.43945 12.8041Z`,
      fill: `currentColor`,
    }),
  });
function Ut(e) {
  let t = (0, Z.c)(33),
    { hostId: n, handleSelectAndClose: r } = e,
    i = v(),
    a = tt(),
    o;
  t[0] === n ? (o = t[1]) : ((o = { hostId: n }), (t[0] = n), (t[1] = o));
  let s = G(o),
    { availablePlugins: c } = K(n),
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    y;
  if (t[2] !== c || t[3] !== a || t[4] !== r || t[5] !== i || t[6] !== s) {
    u = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = ie(i);
      if (!s) {
        u = null;
        break bb0;
      }
      let n = Le(c);
      if (n.length === 0) {
        u = null;
        break bb0;
      }
      (t[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((y = (0, Q.jsx)(X.Separator, {})), (t[17] = y))
        : (y = t[17]),
        (l = X.FlyoutSubmenuItem),
        (p = !0),
        (m = ce),
        t[18] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((h = (0, Q.jsx)(x, {
              id: `composer.pluginsDropdown`,
              defaultMessage: `Plugins`,
              description: `Dropdown item label for enabled plugins in the add context menu`,
            })),
            (t[18] = h))
          : (h = t[18]),
        (g = `min-w-[160px]`),
        (_ = (0, Q.jsx)(X.Title, {
          className: `text-token-muted-foreground text-xs`,
          children: (0, Q.jsx)(x, {
            id: `composer.pluginsDropdown.installedCount`,
            defaultMessage: `{count, plural, one {# installed plugin} other {# installed plugins}}`,
            description: `Label at the top of the plugins submenu showing how many enabled installed plugins are available`,
            values: { count: n.length },
          }),
        })),
        (d = `max-h-80 overflow-y-auto`),
        (f = n.map((t) => {
          let n = ke(t, e),
            i = Ae(t, e);
          return (0, Q.jsx)(
            X.Item,
            {
              LeftIcon: i,
              leftIconClassName: `size-4 rounded-xs`,
              onSelect: () => {
                (a.insertMentionAtSelection(n), r());
              },
              children: n.displayName,
            },
            n.path,
          );
        })));
    }
    ((t[2] = c),
      (t[3] = a),
      (t[4] = r),
      (t[5] = i),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = y));
  } else
    ((l = t[7]),
      (u = t[8]),
      (d = t[9]),
      (f = t[10]),
      (p = t[11]),
      (m = t[12]),
      (h = t[13]),
      (g = t[14]),
      (_ = t[15]),
      (y = t[16]));
  if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
  let b;
  t[19] !== d || t[20] !== f
    ? ((b = (0, Q.jsx)(`div`, { className: d, children: f })),
      (t[19] = d),
      (t[20] = f),
      (t[21] = b))
    : (b = t[21]);
  let S;
  t[22] !== l ||
  t[23] !== b ||
  t[24] !== p ||
  t[25] !== m ||
  t[26] !== h ||
  t[27] !== g ||
  t[28] !== _
    ? ((S = (0, Q.jsxs)(l, {
        alignToParentBottom: p,
        LeftIcon: m,
        label: h,
        contentClassName: g,
        children: [_, b],
      })),
      (t[22] = l),
      (t[23] = b),
      (t[24] = p),
      (t[25] = m),
      (t[26] = h),
      (t[27] = g),
      (t[28] = _),
      (t[29] = S))
    : (S = t[29]);
  let C;
  return (
    t[30] !== S || t[31] !== y
      ? ((C = (0, Q.jsxs)(Q.Fragment, { children: [y, S] })),
        (t[30] = S),
        (t[31] = y),
        (t[32] = C))
      : (C = t[32]),
    C
  );
}
function Wt() {
  let e = (0, Z.c)(6),
    [t, n] = (0, $.useState)(!1),
    [r, i] = (0, $.useState)(!1),
    a = (0, $.useRef)(null),
    o = (0, $.useRef)(!1),
    s;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = () => {
        (i(!0), (o.current = !0), a.current?.blur(), n(!1));
      }),
      (e[0] = s))
    : (s = e[0]);
  let c = s,
    l = t || r ? !1 : void 0,
    u,
    d;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = () => {
        if (o.current) {
          o.current = !1;
          return;
        }
        i(!1);
      }),
      (d = () => {
        ((o.current = !1), i(!1));
      }),
      (e[1] = u),
      (e[2] = d))
    : ((u = e[1]), (d = e[2]));
  let f;
  return (
    e[3] !== t || e[4] !== l
      ? ((f = {
          isOpen: t,
          setIsOpen: n,
          tooltipOpen: l,
          triggerRef: a,
          onTriggerBlur: u,
          onTriggerPointerLeave: d,
          handleSelectAndClose: c,
        }),
        (e[3] = t),
        (e[4] = l),
        (e[5] = f))
      : (f = e[5]),
    f
  );
}
function Gt() {
  let e = v();
  return async ({
    imagesOnly: t,
    pickerTitle: n = e.formatMessage({
      id: `composer.filePicker.selectFiles`,
      defaultMessage: `Select files`,
      description: `Title for the multi-file picker dialog`,
    }),
  } = {}) =>
    (
      await O(`pick-files`, {
        params: { ...(t ? { imagesOnly: !0 } : {}), pickerTitle: n },
      })
    ).files ?? [];
}
var Kt = e(U(), 1),
  qt = (0, $.memo)(function (e) {
    let t = (0, Z.c)(98),
      {
        onAddImageDataUrls: n,
        onAddAppshotContext: r,
        onAppshotCaptureAnimationDuration: i,
        onAppshotCaptureSettled: a,
        onAppshotCaptureStarted: o,
        getAppshotCaptureAnimationDestinationFrame: s,
        getAttachmentGen: c,
        setFileAttachments: l,
        onAddLocalFileAttachments: u,
        conversationId: d,
        executionTargetCwd: f,
        executionTargetHostId: p,
        isAutoContextOn: m,
        setIsAutoContextOn: h,
        ideContextStatus: g,
        hasGoal: _,
        isGoalActionAvailable: y,
        onClearGoal: C,
        onOpenGoalEditor: T,
        supportsFileAttachments: E,
        supportsRemoteFileAttachments: D,
        disabled: O,
      } = e,
      k = E === void 0 ? !0 : E,
      A = D === void 0 ? !1 : D,
      j = O === void 0 ? !1 : O,
      M = S(b),
      N = v(),
      P = Je(),
      F = Gt(),
      I = (0, $.useRef)(!1),
      L = (0, $.useRef)(!1),
      [R, ee] = (0, $.useState)(!1),
      te;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((te = []), (t[0] = te))
      : (te = t[0]);
    let [z, B] = (0, $.useState)(te),
      {
        isOpen: ie,
        setIsOpen: ae,
        tooltipOpen: V,
        triggerRef: oe,
        onTriggerBlur: se,
        onTriggerPointerLeave: U,
        handleSelectAndClose: W,
      } = Wt(),
      { isFetching: ce, refetch: le } = w(mt),
      G = A && p !== `local`,
      K = P && s != null,
      ue;
    t[1] !== N || t[2] !== G || t[3] !== k
      ? ((ue = k
          ? N.formatMessage({
              id: `composer.addContextDropdown.ariaLabel`,
              defaultMessage: `Add files and more`,
              description: `Accessible label for the add context dropdown trigger button`,
            })
          : G
            ? N.formatMessage({
                id: `composer.addContextDropdown.ariaLabel.remoteFiles`,
                defaultMessage: `Add photos, remote files, and more`,
                description: `Accessible label for the add context dropdown trigger button in remote threads`,
              })
            : N.formatMessage({
                id: `composer.addContextDropdown.ariaLabel.imagesOnly`,
                defaultMessage: `Add photos and more`,
                description: `Accessible label for the add context dropdown trigger button in remote projects`,
              })),
        (t[1] = N),
        (t[2] = G),
        (t[3] = k),
        (t[4] = ue))
      : (ue = t[4]);
    let de = ue,
      pe;
    t[5] !== N || t[6] !== k
      ? ((pe = k
          ? N.formatMessage({
              id: `composer.filePicker.selectFiles`,
              defaultMessage: `Select files`,
              description: `Title for the multi-file picker dialog`,
            })
          : N.formatMessage({
              id: `composer.filePicker.selectPhotos`,
              defaultMessage: `Select photos`,
              description: `Title for the remote-project image picker dialog`,
            })),
        (t[5] = N),
        (t[6] = k),
        (t[7] = pe))
      : (pe = t[7]);
    let _e = pe,
      ve;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ve = function () {
          (ee(!1), B([]));
        }),
        (t[8] = ve))
      : (ve = t[8]);
    let J = ve,
      Y,
      ye;
    if (
      t[9] !== j ||
      t[10] !== ce ||
      t[11] !== le ||
      t[12] !== ae ||
      t[13] !== K
    ) {
      ((Y = function (t) {
        (!t && I.current) || (ae(t), t && e());
      }),
        (ye = function () {
          e();
        }));
      function e() {
        j || !K || ce || le();
      }
      ((t[9] = j),
        (t[10] = ce),
        (t[11] = le),
        (t[12] = ae),
        (t[13] = K),
        (t[14] = Y),
        (t[15] = ye));
    } else ((Y = t[14]), (ye = t[15]));
    let be, xe;
    if (
      t[16] !== _e ||
      t[17] !== j ||
      t[18] !== p ||
      t[19] !== c ||
      t[20] !== N ||
      t[21] !== n ||
      t[22] !== u ||
      t[23] !== F ||
      t[24] !== M ||
      t[25] !== z ||
      t[26] !== l ||
      t[27] !== G ||
      t[28] !== k
    ) {
      be = async function () {
        if (!j)
          try {
            let e = c(),
              t = await F({ imagesOnly: !k, pickerTitle: _e });
            if (t.length === 0) return;
            let { images: i, others: a } = Zt(t),
              o = [];
            if ((i.length > 0 && (o = await r(i)), c() !== e)) return;
            (o.length > 0 && n(o),
              k &&
                a.length > 0 &&
                (p !== `local` && u != null ? u(a) : l((e) => [...e, ...a])));
          } catch {
            M.get(ne).danger(
              N.formatMessage({
                id: `composer.addContext.openFilePickerError`,
                defaultMessage: `Unable to open file picker`,
                description: `Toast shown when the host file picker fails to open for attachments`,
              }),
            );
          }
      };
      let e;
      (t[31] !== z || t[32] !== l || t[33] !== G
        ? ((e = function () {
            !G || z.length === 0 || (l((e) => [...e, ...z.map(en)]), J());
          }),
          (t[31] = z),
          (t[32] = l),
          (t[33] = G),
          (t[34] = e))
        : (e = t[34]),
        (xe = e));
      async function r(e) {
        return (await Promise.all(e.map(tn))).filter(nn);
      }
      ((t[16] = _e),
        (t[17] = j),
        (t[18] = p),
        (t[19] = c),
        (t[20] = N),
        (t[21] = n),
        (t[22] = u),
        (t[23] = F),
        (t[24] = M),
        (t[25] = z),
        (t[26] = l),
        (t[27] = G),
        (t[28] = k),
        (t[29] = be),
        (t[30] = xe));
    } else ((be = t[29]), (xe = t[30]));
    let Se;
    t[35] === T
      ? (Se = t[36])
      : ((Se = (e) => {
          L.current && ((L.current = !1), e.preventDefault(), T());
        }),
        (t[35] = T),
        (t[36] = Se));
    let Ce;
    t[37] !== G || t[38] !== k
      ? ((Ce = k
          ? (0, Q.jsx)(x, {
              id: `composer.addContextDropdown.tooltipText`,
              defaultMessage: `Add files and more`,
              description: `Tooltip text for the add context dropdown trigger button`,
            })
          : G
            ? (0, Q.jsx)(x, {
                id: `composer.addContextDropdown.tooltipText.remoteFiles`,
                defaultMessage: `Add photos, remote files, and more`,
                description: `Tooltip text for the add context dropdown trigger button in remote threads`,
              })
            : (0, Q.jsx)(x, {
                id: `composer.addContextDropdown.tooltipText.imagesOnly`,
                defaultMessage: `Add photos and more`,
                description: `Tooltip text for the add context dropdown trigger button in remote projects`,
              })),
        (t[37] = G),
        (t[38] = k),
        (t[39] = Ce))
      : (Ce = t[39]);
    let we;
    t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((we = (0, Q.jsx)(Ee, {
          className: `px-1 py-0 text-xs leading-none`,
          children: (0, Q.jsx)(x, {
            id: `composer.addContextDropdown.tooltipSlash`,
            defaultMessage: `/`,
            description: `Slash badge shown in the add context tooltip`,
          }),
        })),
        (t[40] = we))
      : (we = t[40]);
    let Te;
    t[41] === Ce
      ? (Te = t[42])
      : ((Te = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [Ce, we],
        })),
        (t[41] = Ce),
        (t[42] = Te));
    let X;
    t[43] === ye
      ? (X = t[44])
      : ((X = (e) => {
          e.currentTarget.matches(`:hover`) || ye();
        }),
        (t[43] = ye),
        (t[44] = X));
    let Oe;
    t[45] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Oe = (0, Q.jsx)(Pe, { className: `icon-sm` })), (t[45] = Oe))
      : (Oe = t[45]);
    let ke;
    t[46] !== de ||
    t[47] !== j ||
    t[48] !== se ||
    t[49] !== U ||
    t[50] !== ye ||
    t[51] !== X
      ? ((ke = (0, Q.jsx)(H, {
          size: `composer`,
          color: `ghost`,
          uniform: !0,
          "aria-label": de,
          disabled: j,
          onPointerEnter: ye,
          onFocus: X,
          onPointerLeave: U,
          onBlur: se,
          children: Oe,
        })),
        (t[46] = de),
        (t[47] = j),
        (t[48] = se),
        (t[49] = U),
        (t[50] = ye),
        (t[51] = X),
        (t[52] = ke))
      : (ke = t[52]);
    let Ae;
    t[53] !== Te || t[54] !== ke || t[55] !== V || t[56] !== oe
      ? ((Ae = (0, Q.jsx)(re, {
          open: V,
          triggerRef: oe,
          tooltipContent: Te,
          side: `top`,
          align: `center`,
          sideOffset: 4,
          children: ke,
        })),
        (t[53] = Te),
        (t[54] = ke),
        (t[55] = V),
        (t[56] = oe),
        (t[57] = Ae))
      : (Ae = t[57]);
    let je;
    t[58] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((je = () => {
          (B([]), ee(!0));
        }),
        (t[58] = je))
      : (je = t[58]);
    let Me;
    t[59] !== d ||
    t[60] !== j ||
    t[61] !== p ||
    t[62] !== s ||
    t[63] !== c ||
    t[64] !== be ||
    t[65] !== W ||
    t[66] !== _ ||
    t[67] !== g ||
    t[68] !== m ||
    t[69] !== y ||
    t[70] !== r ||
    t[71] !== i ||
    t[72] !== a ||
    t[73] !== o ||
    t[74] !== C ||
    t[75] !== h ||
    t[76] !== ae ||
    t[77] !== K ||
    t[78] !== G ||
    t[79] !== k
      ? ((Me = (0, Q.jsx)(Jt, {
          conversationId: d,
          disabled: j,
          getAttachmentGen: c,
          handleAddFiles: be,
          handleSelectAndClose: W,
          hasGoal: _,
          hostId: p,
          ideContextStatus: g,
          isAutoContextOn: m,
          isGoalActionAvailable: y,
          onAddAppshotContext: r,
          onClearGoal: C,
          onOpenRemoteFilePicker: je,
          getAppshotCaptureAnimationDestinationFrame: s,
          onAppshotCaptureAnimationDuration: i,
          onAppshotCaptureSettled: a,
          onAppshotCaptureStarted: o,
          setIsAutoContextOn: h,
          setIsDropdownOpen: ae,
          shouldShowAppshotCapture: K,
          shouldOpenGoalEditorOnCloseRef: L,
          shouldShowRemoteFileAttachments: G,
          supportsFileAttachments: k,
          togglingSwitchRef: I,
        })),
        (t[59] = d),
        (t[60] = j),
        (t[61] = p),
        (t[62] = s),
        (t[63] = c),
        (t[64] = be),
        (t[65] = W),
        (t[66] = _),
        (t[67] = g),
        (t[68] = m),
        (t[69] = y),
        (t[70] = r),
        (t[71] = i),
        (t[72] = a),
        (t[73] = o),
        (t[74] = C),
        (t[75] = h),
        (t[76] = ae),
        (t[77] = K),
        (t[78] = G),
        (t[79] = k),
        (t[80] = Me))
      : (Me = t[80]);
    let Ne;
    t[81] !== j ||
    t[82] !== Y ||
    t[83] !== ie ||
    t[84] !== Ae ||
    t[85] !== Me ||
    t[86] !== Se
      ? ((Ne = (0, Q.jsx)(De, {
          open: ie,
          disabled: j,
          onOpenChange: Y,
          side: `top`,
          align: `start`,
          alignOffset: -8,
          contentWidth: `icon`,
          onCloseAutoFocus: Se,
          triggerButton: Ae,
          children: Me,
        })),
        (t[81] = j),
        (t[82] = Y),
        (t[83] = ie),
        (t[84] = Ae),
        (t[85] = Me),
        (t[86] = Se),
        (t[87] = Ne))
      : (Ne = t[87]);
    let Fe;
    t[88] !== f ||
    t[89] !== p ||
    t[90] !== xe ||
    t[91] !== R ||
    t[92] !== z ||
    t[93] !== G
      ? ((Fe = G
          ? (0, Q.jsx)(me, {
              open: R,
              onOpenChange: (e) => {
                e || J();
              },
              size: `wide`,
              children: (0, Q.jsxs)(he, {
                as: `form`,
                onSubmit: (e) => {
                  (e.preventDefault(), xe());
                },
                children: [
                  (0, Q.jsx)(fe, {
                    children: (0, Q.jsx)(q, {
                      title: (0, Q.jsx)(x, {
                        id: `composer.remoteFilePicker.title`,
                        defaultMessage: `Add remote files`,
                        description: `Title for the remote file picker dialog`,
                      }),
                    }),
                  }),
                  (0, Q.jsx)(fe, {
                    children: (0, Q.jsx)(Lt, {
                      mode: `file`,
                      hostId: p,
                      initialDirectoryPath: f,
                      selectedFilePaths: z,
                      setSelectedFilePaths: B,
                    }),
                  }),
                  (0, Q.jsx)(fe, {
                    children: (0, Q.jsxs)(ge, {
                      children: [
                        (0, Q.jsx)(H, {
                          color: `ghost`,
                          type: `button`,
                          onClick: J,
                          children: (0, Q.jsx)(x, {
                            id: `composer.remoteFilePicker.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Cancel button label for the remote file picker dialog`,
                          }),
                        }),
                        (0, Q.jsx)(H, {
                          color: `primary`,
                          type: `submit`,
                          disabled: z.length === 0,
                          children: (0, Q.jsx)(x, {
                            id: `composer.remoteFilePicker.add`,
                            defaultMessage: `Add files`,
                            description: `Confirm button label for the remote file picker dialog`,
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : null),
        (t[88] = f),
        (t[89] = p),
        (t[90] = xe),
        (t[91] = R),
        (t[92] = z),
        (t[93] = G),
        (t[94] = Fe))
      : (Fe = t[94]);
    let Ie;
    return (
      t[95] !== Ne || t[96] !== Fe
        ? ((Ie = (0, Q.jsxs)(Q.Fragment, { children: [Ne, Fe] })),
          (t[95] = Ne),
          (t[96] = Fe),
          (t[97] = Ie))
        : (Ie = t[97]),
      Ie
    );
  });
function Jt(e) {
  let t = (0, Z.c)(102),
    {
      conversationId: n,
      disabled: r,
      getAttachmentGen: i,
      handleAddFiles: a,
      handleSelectAndClose: o,
      hasGoal: s,
      hostId: c,
      ideContextStatus: l,
      isAutoContextOn: u,
      isGoalActionAvailable: d,
      onAddAppshotContext: f,
      onClearGoal: m,
      onOpenRemoteFilePicker: h,
      getAppshotCaptureAnimationDestinationFrame: g,
      onAppshotCaptureAnimationDuration: _,
      onAppshotCaptureSettled: y,
      onAppshotCaptureStarted: b,
      setIsAutoContextOn: S,
      setIsDropdownOpen: C,
      shouldShowAppshotCapture: w,
      shouldOpenGoalEditorOnCloseRef: T,
      shouldShowRemoteFileAttachments: E,
      supportsFileAttachments: D,
      togglingSwitchRef: O,
    } = e,
    k = v(),
    A = p(V),
    { activeMode: j, modes: M, setSelectedMode: N, isLoading: P } = oe(n),
    F = l === `connected`,
    I = j.mode === `plan`,
    L;
  t[0] === M ? (L = t[1]) : ((L = M.some(Xt)), (t[0] = M), (t[1] = L));
  let R = L,
    ee;
  t[2] === M ? (ee = t[3]) : ((ee = M.some(Yt)), (t[2] = M), (t[3] = ee));
  let te = ee,
    z;
  t[4] === k
    ? (z = t[5])
    : ((z = k.formatMessage({
        id: `composer.includeIdeContextDropdown.ariaLabel`,
        defaultMessage: `Include IDE context`,
        description: `Aria label for the include IDE context switch in the add context dropdown`,
      })),
      (t[4] = k),
      (t[5] = z));
  let ne = z,
    B;
  t[6] === k
    ? (B = t[7])
    : ((B = k.formatMessage({
        id: `composer.planModeDropdown.ariaLabel`,
        defaultMessage: `Plan mode`,
        description: `Aria label for the plan mode switch in the add context dropdown`,
      })),
      (t[6] = k),
      (t[7] = B));
  let re = B,
    ie;
  t[8] === k
    ? (ie = t[9])
    : ((ie = k.formatMessage({
        id: `composer.goalDropdown.ariaLabel`,
        defaultMessage: `Goal`,
        description: `Aria label for the goal switch in the add context dropdown`,
      })),
      (t[8] = k),
      (t[9] = ie));
  let ae = ie,
    H;
  t[10] !== r || t[11] !== A || t[12] !== S
    ? ((H = function (e) {
        r || (S(e), A(e));
      }),
      (t[10] = r),
      (t[11] = A),
      (t[12] = S),
      (t[13] = H))
    : (H = t[13]);
  let se = H,
    U;
  t[14] !== r || t[15] !== te || t[16] !== R || t[17] !== N
    ? ((U = function (e) {
        if (!r && R) {
          if (e) {
            N(`plan`);
            return;
          }
          if (te) {
            N(`default`);
            return;
          }
          N(null);
        }
      }),
      (t[14] = r),
      (t[15] = te),
      (t[16] = R),
      (t[17] = N),
      (t[18] = U))
    : (U = t[18]);
  let W = U,
    ce;
  t[19] !== r || t[20] !== o || t[21] !== m || t[22] !== C || t[23] !== T
    ? ((ce = function (e) {
        if (!r) {
          if (e) {
            ((T.current = !0), o());
            return;
          }
          (m(), C(!0));
        }
      }),
      (t[19] = r),
      (t[20] = o),
      (t[21] = m),
      (t[22] = C),
      (t[23] = T),
      (t[24] = ce))
    : (ce = t[24]);
  let le = ce,
    G = D ? Ht : Me,
    K;
  t[25] !== r || t[26] !== a || t[27] !== o
    ? ((K = () => {
        r || (o(), a());
      }),
      (t[25] = r),
      (t[26] = a),
      (t[27] = o),
      (t[28] = K))
    : (K = t[28]);
  let ue;
  t[29] === D
    ? (ue = t[30])
    : ((ue = D
        ? (0, Q.jsx)(x, {
            id: `composer.addPhotosAndFiles`,
            defaultMessage: `Add photos & files`,
            description: `Dropdown item label to add photos and files to the composer`,
          })
        : (0, Q.jsx)(x, {
            id: `composer.addPhotos`,
            defaultMessage: `Add photos`,
            description: `Dropdown item label to add photos to the composer`,
          })),
      (t[29] = D),
      (t[30] = ue));
  let fe;
  t[31] !== K || t[32] !== ue || t[33] !== G
    ? ((fe = (0, Q.jsx)(X.Item, {
        LeftIcon: G,
        leftIconClassName: `icon-xs`,
        onSelect: K,
        children: ue,
      })),
      (t[31] = K),
      (t[32] = ue),
      (t[33] = G),
      (t[34] = fe))
    : (fe = t[34]);
  let pe;
  t[35] !== r ||
  t[36] !== g ||
  t[37] !== i ||
  t[38] !== o ||
  t[39] !== f ||
  t[40] !== _ ||
  t[41] !== y ||
  t[42] !== b ||
  t[43] !== w
    ? ((pe =
        w && g != null
          ? (0, Q.jsx)(de, {
              electron: !0,
              children: (0, Q.jsx)(Pt, {
                disabled: r,
                getAnimationDestinationFrame: g,
                onAddAppshotContext: f,
                onCaptureAnimationDuration: _,
                onCaptureSettled: y,
                onCaptureStarted: b,
                getAttachmentGen: i,
                handleSelectAndClose: o,
              }),
            })
          : null),
      (t[35] = r),
      (t[36] = g),
      (t[37] = i),
      (t[38] = o),
      (t[39] = f),
      (t[40] = _),
      (t[41] = y),
      (t[42] = b),
      (t[43] = w),
      (t[44] = pe))
    : (pe = t[44]);
  let q;
  t[45] !== r || t[46] !== o || t[47] !== h || t[48] !== E
    ? ((q = E
        ? (0, Q.jsx)(X.Item, {
            LeftIcon: Ht,
            leftIconClassName: `icon-xs`,
            onSelect: () => {
              r || (o(), h());
            },
            children: (0, Q.jsx)(x, {
              id: `composer.addRemoteFiles`,
              defaultMessage: `Add remote files`,
              description: `Dropdown item label to add remote files to the composer`,
            }),
          })
        : null),
      (t[45] = r),
      (t[46] = o),
      (t[47] = h),
      (t[48] = E),
      (t[49] = q))
    : (q = t[49]);
  let me;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, Q.jsx)(X.Separator, {})), (t[50] = me))
    : (me = t[50]);
  let he;
  t[51] !== r ||
  t[52] !== o ||
  t[53] !== ne ||
  t[54] !== u ||
  t[55] !== F ||
  t[56] !== C ||
  t[57] !== O ||
  t[58] !== se
    ? ((he = F
        ? (0, Q.jsx)(X.Item, {
            LeftIcon: Nt,
            leftIconClassName: `icon-sm`,
            onSelect: () => {
              O.current || (se(!u), o());
            },
            children: (0, Q.jsxs)(`div`, {
              className: `flex w-full items-center justify-between gap-2`,
              children: [
                (0, Q.jsx)(x, {
                  id: `composer.includeIdeContextDropdown`,
                  defaultMessage: `Include IDE context`,
                  description: `Dropdown item label to include IDE context in the composer`,
                }),
                (0, Q.jsx)(Qe, {
                  ariaLabel: ne,
                  size: `sm`,
                  checked: u,
                  disabled: r,
                  onPointerDownCapture: (e) => {
                    ((O.current = !0), e.stopPropagation());
                  },
                  onPointerUpCapture: (e) => {
                    (e.stopPropagation(),
                      window.setTimeout(() => {
                        O.current = !1;
                      }, 0));
                  },
                  onChange: (e) => {
                    (se(e),
                      C(!0),
                      window.setTimeout(() => {
                        O.current = !1;
                      }, 0));
                  },
                }),
              ],
            }),
          })
        : null),
      (t[51] = r),
      (t[52] = o),
      (t[53] = ne),
      (t[54] = u),
      (t[55] = F),
      (t[56] = C),
      (t[57] = O),
      (t[58] = se),
      (t[59] = he))
    : (he = t[59]);
  let ge;
  t[60] !== W || t[61] !== o || t[62] !== I || t[63] !== O
    ? ((ge = () => {
        O.current || (W(!I), o());
      }),
      (t[60] = W),
      (t[61] = o),
      (t[62] = I),
      (t[63] = O),
      (t[64] = ge))
    : (ge = t[64]);
  let _e;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Q.jsx)(`div`, {
        className: `flex items-center gap-2`,
        children: (0, Q.jsx)(x, {
          id: `composer.planModeDropdown`,
          defaultMessage: `Plan mode`,
          description: `Dropdown item label for plan mode in the add context menu`,
        }),
      })),
      (t[65] = _e))
    : (_e = t[65]);
  let ve = r || P || !R,
    J,
    Y;
  t[66] === O
    ? ((J = t[67]), (Y = t[68]))
    : ((J = (e) => {
        ((O.current = !0), e.stopPropagation());
      }),
      (Y = (e) => {
        (e.stopPropagation(),
          window.setTimeout(() => {
            O.current = !1;
          }, 0));
      }),
      (t[66] = O),
      (t[67] = J),
      (t[68] = Y));
  let ye;
  t[69] !== W || t[70] !== C || t[71] !== O
    ? ((ye = (e) => {
        (W(e),
          C(!0),
          window.setTimeout(() => {
            O.current = !1;
          }, 0));
      }),
      (t[69] = W),
      (t[70] = C),
      (t[71] = O),
      (t[72] = ye))
    : (ye = t[72]);
  let be;
  t[73] !== I ||
  t[74] !== re ||
  t[75] !== ve ||
  t[76] !== J ||
  t[77] !== Y ||
  t[78] !== ye
    ? ((be = (0, Q.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-2`,
        children: [
          _e,
          (0, Q.jsx)(Qe, {
            ariaLabel: re,
            size: `sm`,
            checked: I,
            disabled: ve,
            onPointerDownCapture: J,
            onPointerUpCapture: Y,
            onChange: ye,
          }),
        ],
      })),
      (t[73] = I),
      (t[74] = re),
      (t[75] = ve),
      (t[76] = J),
      (t[77] = Y),
      (t[78] = ye),
      (t[79] = be))
    : (be = t[79]);
  let xe;
  t[80] !== ge || t[81] !== be
    ? ((xe = (0, Q.jsx)(X.Item, {
        LeftIcon: nt,
        leftIconClassName: `icon-xs`,
        onSelect: ge,
        children: be,
      })),
      (t[80] = ge),
      (t[81] = be),
      (t[82] = xe))
    : (xe = t[82]);
  let Se;
  t[83] !== r ||
  t[84] !== ae ||
  t[85] !== le ||
  t[86] !== s ||
  t[87] !== d ||
  t[88] !== O
    ? ((Se = d
        ? (0, Q.jsx)(X.Item, {
            LeftIcon: At,
            leftIconClassName: `icon-xs`,
            onSelect: () => {
              O.current || le(!s);
            },
            children: (0, Q.jsxs)(`div`, {
              className: `flex w-full items-center justify-between gap-2`,
              children: [
                (0, Q.jsx)(x, {
                  id: `composer.goalDropdown`,
                  defaultMessage: `Pursue goal`,
                  description: `Dropdown item label for the goal switch in the add context menu`,
                }),
                (0, Q.jsx)(Qe, {
                  ariaLabel: ae,
                  size: `sm`,
                  checked: s,
                  disabled: r,
                  onPointerDownCapture: (e) => {
                    ((O.current = !0), e.stopPropagation());
                  },
                  onPointerUpCapture: (e) => {
                    (e.stopPropagation(),
                      window.setTimeout(() => {
                        O.current = !1;
                      }, 0));
                  },
                  onChange: (e) => {
                    (le(e),
                      window.setTimeout(() => {
                        O.current = !1;
                      }, 0));
                  },
                }),
              ],
            }),
          })
        : null),
      (t[83] = r),
      (t[84] = ae),
      (t[85] = le),
      (t[86] = s),
      (t[87] = d),
      (t[88] = O),
      (t[89] = Se))
    : (Se = t[89]);
  let Ce;
  t[90] !== r || t[91] !== o || t[92] !== c
    ? ((Ce = r ? null : (0, Q.jsx)(Ut, { hostId: c, handleSelectAndClose: o })),
      (t[90] = r),
      (t[91] = o),
      (t[92] = c),
      (t[93] = Ce))
    : (Ce = t[93]);
  let we;
  return (
    t[94] !== fe ||
    t[95] !== pe ||
    t[96] !== q ||
    t[97] !== he ||
    t[98] !== xe ||
    t[99] !== Se ||
    t[100] !== Ce
      ? ((we = (0, Q.jsxs)(Q.Fragment, {
          children: [fe, pe, q, me, he, xe, Se, Ce],
        })),
        (t[94] = fe),
        (t[95] = pe),
        (t[96] = q),
        (t[97] = he),
        (t[98] = xe),
        (t[99] = Se),
        (t[100] = Ce),
        (t[101] = we))
      : (we = t[101]),
    we
  );
}
function Yt(e) {
  return e.mode === `default`;
}
function Xt(e) {
  return e.mode === `plan`;
}
function Zt(e) {
  let t = [],
    n = [];
  for (let r of e) Qt(r) ? t.push(r) : n.push(r);
  return { images: t, others: n };
}
function Qt(e) {
  return a(e.fsPath || e.path || e.label);
}
function $t({ contentsBase64: e, fsPath: t }) {
  let n = (0, Kt.lookup)(t);
  return typeof n == `string` ? `data:${n};base64,${e}` : null;
}
function en(e) {
  return { label: c(e), path: e, fsPath: e };
}
async function tn(e) {
  try {
    let t = await O(`read-file-binary`, {
      params: { path: e.fsPath, hostId: f },
    });
    if (!t.contentsBase64) return null;
    let n = $t({ contentsBase64: t.contentsBase64, fsPath: e.fsPath });
    return n ? { dataUrl: n, localPath: e.fsPath, filename: e.label } : null;
  } catch {
    return null;
  }
}
function nn(e) {
  return e != null;
}
var rn = (e) =>
    (0, Q.jsxs)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Q.jsx)(`path`, {
          d: `M15.7806 10.1963C16.1326 10.3011 16.3336 10.6714 16.2288 11.0234L16.1487 11.2725C15.3429 13.6262 13.2236 15.3697 10.6644 15.6299L10.6653 16.835H12.0833L12.2171 16.8486C12.5202 16.9106 12.7484 17.1786 12.7484 17.5C12.7484 17.8214 12.5202 18.0894 12.2171 18.1514L12.0833 18.165H7.91632C7.5492 18.1649 7.25128 17.8672 7.25128 17.5C7.25128 17.1328 7.5492 16.8351 7.91632 16.835H9.33527L9.33429 15.6299C6.775 15.3697 4.6558 13.6262 3.84992 11.2725L3.76984 11.0234L3.74445 10.8906C3.71751 10.5825 3.91011 10.2879 4.21808 10.1963C4.52615 10.1047 4.84769 10.2466 4.99347 10.5195L5.04523 10.6436L5.10871 10.8418C5.8047 12.8745 7.73211 14.335 9.99933 14.335C12.3396 14.3349 14.3179 12.7789 14.9534 10.6436L15.0052 10.5195C15.151 10.2466 15.4725 10.1046 15.7806 10.1963ZM12.2513 5.41699C12.2513 4.17354 11.2437 3.16521 10.0003 3.16504C8.75675 3.16504 7.74835 4.17343 7.74835 5.41699V9.16699C7.74853 10.4104 8.75685 11.418 10.0003 11.418C11.2436 11.4178 12.2511 10.4103 12.2513 9.16699V5.41699ZM13.5814 9.16699C13.5812 11.1448 11.9781 12.7479 10.0003 12.748C8.02232 12.748 6.41845 11.1449 6.41828 9.16699V5.41699C6.41828 3.43889 8.02221 1.83496 10.0003 1.83496C11.9783 1.83514 13.5814 3.439 13.5814 5.41699V9.16699Z`,
        }),
        (0, Q.jsx)(`path`, {
          d: `M3.75 3.25L16.75 16.25`,
          fill: `none`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeWidth: 1.5,
        }),
      ],
    }),
  an = (e) =>
    (0, Q.jsx)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        d: `M15.7806 10.1963C16.1326 10.3011 16.3336 10.6714 16.2288 11.0234L16.1487 11.2725C15.3429 13.6262 13.2236 15.3697 10.6644 15.6299L10.6653 16.835H12.0833L12.2171 16.8486C12.5202 16.9106 12.7484 17.1786 12.7484 17.5C12.7484 17.8214 12.5202 18.0894 12.2171 18.1514L12.0833 18.165H7.91632C7.5492 18.1649 7.25128 17.8672 7.25128 17.5C7.25128 17.1328 7.5492 16.8351 7.91632 16.835H9.33527L9.33429 15.6299C6.775 15.3697 4.6558 13.6262 3.84992 11.2725L3.76984 11.0234L3.74445 10.8906C3.71751 10.5825 3.91011 10.2879 4.21808 10.1963C4.52615 10.1047 4.84769 10.2466 4.99347 10.5195L5.04523 10.6436L5.10871 10.8418C5.8047 12.8745 7.73211 14.335 9.99933 14.335C12.3396 14.3349 14.3179 12.7789 14.9534 10.6436L15.0052 10.5195C15.151 10.2466 15.4725 10.1046 15.7806 10.1963ZM12.2513 5.41699C12.2513 4.17354 11.2437 3.16521 10.0003 3.16504C8.75675 3.16504 7.74835 4.17343 7.74835 5.41699V9.16699C7.74853 10.4104 8.75685 11.418 10.0003 11.418C11.2436 11.4178 12.2511 10.4103 12.2513 9.16699V5.41699ZM13.5814 9.16699C13.5812 11.1448 11.9781 12.7479 10.0003 12.748C8.02232 12.748 6.41845 11.1449 6.41828 9.16699V5.41699C6.41828 3.43889 8.02221 1.83496 10.0003 1.83496C11.9783 1.83514 13.5814 3.439 13.5814 5.41699V9.16699Z`,
      }),
    }),
  on = (e) =>
    (0, Q.jsx)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        d: `M4.5 7.25H7L11.42 3.5C11.85 3.13 12.5 3.44 12.5 4V16C12.5 16.56 11.85 16.87 11.42 16.5L7 12.75H4.5C3.67 12.75 3 12.08 3 11.25V8.75C3 7.92 3.67 7.25 4.5 7.25ZM14.22 7.72C14.48 7.46 14.9 7.46 15.16 7.72L16.5 9.06L17.84 7.72C18.1 7.46 18.52 7.46 18.78 7.72C19.04 7.98 19.04 8.4 18.78 8.66L17.44 10L18.78 11.34C19.04 11.6 19.04 12.02 18.78 12.28C18.52 12.54 18.1 12.54 17.84 12.28L16.5 10.94L15.16 12.28C14.9 12.54 14.48 12.54 14.22 12.28C13.96 12.02 13.96 11.6 14.22 11.34L15.56 10L14.22 8.66C13.96 8.4 13.96 7.98 14.22 7.72Z`,
      }),
    }),
  sn = (e) =>
    (0, Q.jsx)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Q.jsx)(`path`, {
        d: `M4.5 7.25H7L11.42 3.5C11.85 3.13 12.5 3.44 12.5 4V16C12.5 16.56 11.85 16.87 11.42 16.5L7 12.75H4.5C3.67 12.75 3 12.08 3 11.25V8.75C3 7.92 3.67 7.25 4.5 7.25ZM14.32 6.43C14.58 6.17 15 6.17 15.26 6.43C17.23 8.4 17.23 11.6 15.26 13.57C15 13.83 14.58 13.83 14.32 13.57C14.06 13.31 14.06 12.89 14.32 12.63C15.77 11.18 15.77 8.82 14.32 7.37C14.06 7.11 14.06 6.69 14.32 6.43Z`,
      }),
    }),
  cn = 150;
function ln(e) {
  let t = (0, Z.c)(29),
    {
      recordingDurationMs: n,
      waveformCanvasRef: r,
      stopAction: i,
      primaryAction: a,
      leadingAccessory: o,
      noBottomMargin: s,
      tooltipPortalContainer: c,
    } = e,
    l = s !== void 0 && s ? `mb-0` : `mb-2`,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = g(`flex items-center gap-2 px-2`, l)), (t[0] = l), (t[1] = u));
  let d;
  t[2] === o
    ? (d = t[3])
    : ((d =
        o === void 0
          ? (0, Q.jsx)(qt, {
              onAddImageDataUrls: gn,
              onAddAppshotContext: hn,
              getAttachmentGen: mn,
              setFileAttachments: pn,
              conversationId: null,
              executionTargetCwd: null,
              executionTargetHostId: f,
              isAutoContextOn: !1,
              setIsAutoContextOn: fn,
              ideContextStatus: `no-connection`,
              hasGoal: !1,
              isGoalActionAvailable: !1,
              onClearGoal: dn,
              onOpenGoalEditor: un,
              disabled: !0,
            })
          : o),
      (t[2] = o),
      (t[3] = d));
  let p;
  t[4] === r
    ? (p = t[5])
    : ((p = (0, Q.jsx)(`div`, {
        className: `flex h-token-button-composer min-w-0 flex-1 items-center`,
        children: (0, Q.jsx)(`canvas`, {
          ref: r,
          className: `h-token-button-composer w-full text-token-foreground`,
        }),
      })),
      (t[4] = r),
      (t[5] = p));
  let m;
  t[6] === n ? (m = t[7]) : ((m = ot(n)), (t[6] = n), (t[7] = m));
  let h;
  t[8] === m
    ? (h = t[9])
    : ((h = (0, Q.jsx)(`span`, {
        className: `text-sm text-token-foreground/70 tabular-nums`,
        children: m,
      })),
      (t[8] = m),
      (t[9] = h));
  let _;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(Ie, { className: `icon-2xs` })), (t[10] = _))
    : (_ = t[10]);
  let v;
  t[11] !== i.ariaLabel || t[12] !== i.disabled || t[13] !== i.onClick
    ? ((v = (0, Q.jsx)(H, {
        size: `composer`,
        color: `secondary`,
        uniform: !0,
        "aria-label": i.ariaLabel,
        onClick: i.onClick,
        disabled: i.disabled,
        children: _,
      })),
      (t[11] = i.ariaLabel),
      (t[12] = i.disabled),
      (t[13] = i.onClick),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== i.tooltipContent || t[16] !== v || t[17] !== c
    ? ((y = (0, Q.jsx)(re, {
        tooltipContent: i.tooltipContent,
        sideOffset: 4,
        portalContainer: c,
        children: v,
      })),
      (t[15] = i.tooltipContent),
      (t[16] = v),
      (t[17] = c),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== a || t[20] !== c
    ? ((b =
        a == null
          ? null
          : (0, Q.jsx)(re, {
              tooltipContent: a.tooltipContent,
              sideOffset: 4,
              portalContainer: c,
              children: (0, Q.jsx)(`button`, {
                type: `button`,
                className: g(
                  `bg-token-foreground focus-visible:outline-token-button-background cursor-interaction size-token-button-composer flex items-center justify-center rounded-full p-0.5 transition-opacity focus-visible:outline-2`,
                  a.disabled && `cursor-default opacity-50`,
                ),
                "aria-label": a.ariaLabel,
                onClick: a.onClick,
                disabled: a.disabled,
                children: a.icon,
              }),
            })),
      (t[19] = a),
      (t[20] = c),
      (t[21] = b))
    : (b = t[21]);
  let x;
  return (
    t[22] !== y ||
    t[23] !== b ||
    t[24] !== u ||
    t[25] !== d ||
    t[26] !== p ||
    t[27] !== h
      ? ((x = (0, Q.jsxs)(W, { className: u, children: [d, p, h, y, b] })),
        (t[22] = y),
        (t[23] = b),
        (t[24] = u),
        (t[25] = d),
        (t[26] = p),
        (t[27] = h),
        (t[28] = x))
      : (x = t[28]),
    x
  );
}
function un() {}
function dn() {}
function fn() {}
function pn() {}
function mn() {
  return 0;
}
function hn() {}
function gn() {}
function _n(e) {
  let t = (0, Z.c)(27),
    {
      isTranscribing: n,
      recordingDurationMs: r,
      waveformCanvasRef: i,
      stopDictation: a,
      leadingAccessory: o,
      noBottomMargin: s,
      tooltipPortalContainer: c,
    } = e,
    l = s === void 0 ? !1 : s,
    u = v(),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(x, {
        id: `composer.dictation.cancel.tooltip`,
        defaultMessage: `Stop dictation`,
        description: `Tooltip for the dictation stop button`,
      })),
      (t[0] = d))
    : (d = t[0]);
  let f;
  t[1] === u
    ? (f = t[2])
    : ((f = u.formatMessage({
        id: `composer.dictation.cancel.aria`,
        defaultMessage: `Stop dictation`,
        description: `Aria label for the dictation stop button`,
      })),
      (t[1] = u),
      (t[2] = f));
  let p;
  t[3] === a ? (p = t[4]) : ((p = () => a(`insert`)), (t[3] = a), (t[4] = p));
  let m;
  t[5] !== n || t[6] !== f || t[7] !== p
    ? ((m = { tooltipContent: d, ariaLabel: f, onClick: p, disabled: n }),
      (t[5] = n),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(x, {
        id: `composer.dictation.submit.tooltip`,
        defaultMessage: `Transcribe and send`,
        description: `Tooltip for the dictation send button`,
      })),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === u
    ? (g = t[11])
    : ((g = u.formatMessage({
        id: `composer.dictation.submit.aria`,
        defaultMessage: `Transcribe and send`,
        description: `Aria label for the dictation send button`,
      })),
      (t[10] = u),
      (t[11] = g));
  let _;
  t[12] === a ? (_ = t[13]) : ((_ = () => a(`send`)), (t[12] = a), (t[13] = _));
  let y;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(Re, {
        className: `icon-sm text-token-dropdown-background`,
      })),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] !== n || t[16] !== g || t[17] !== _
    ? ((b = {
        tooltipContent: h,
        ariaLabel: g,
        onClick: _,
        disabled: n,
        icon: y,
      }),
      (t[15] = n),
      (t[16] = g),
      (t[17] = _),
      (t[18] = b))
    : (b = t[18]);
  let S;
  return (
    t[19] !== o ||
    t[20] !== l ||
    t[21] !== r ||
    t[22] !== b ||
    t[23] !== m ||
    t[24] !== c ||
    t[25] !== i
      ? ((S = (0, Q.jsx)(ln, {
          recordingDurationMs: r,
          waveformCanvasRef: i,
          leadingAccessory: o,
          noBottomMargin: l,
          tooltipPortalContainer: c,
          stopAction: m,
          primaryAction: b,
        })),
        (t[19] = o),
        (t[20] = l),
        (t[21] = r),
        (t[22] = b),
        (t[23] = m),
        (t[24] = c),
        (t[25] = i),
        (t[26] = S))
      : (S = t[26]),
    S
  );
}
function vn(e) {
  let t = (0, Z.c)(40),
    {
      isMicrophoneMuted: n,
      isMuted: r,
      phase: i,
      sendAction: a,
      toggleMicrophoneMute: o,
      toggleMute: s,
      waveformCanvasRef: c,
      stopRealtime: l,
      noBottomMargin: u,
      tooltipPortalContainer: d,
    } = e,
    p = u === void 0 ? !1 : u,
    m = v(),
    h,
    _,
    y,
    b = null,
    S;
  bb0: switch (i) {
    case `starting`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(x, {
            id: `composer.realtime.cancel.label`,
            defaultMessage: `Cancel`,
            description: `Label for the button that cancels realtime voice startup`,
          })),
          (t[0] = e))
        : (e = t[0]),
        (h = e));
      let n;
      (t[1] === m
        ? (n = t[2])
        : ((n = m.formatMessage({
            id: `composer.realtime.cancel.aria`,
            defaultMessage: `Cancel realtime voice`,
            description: `Aria label for the button that cancels realtime voice startup in the composer`,
          })),
          (t[1] = m),
          (t[2] = n)),
        (_ = n));
      let r;
      (t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(x, {
            id: `composer.realtime.cancel.tooltip`,
            defaultMessage: `Cancel realtime voice`,
            description: `Tooltip for the button that cancels realtime voice startup in the composer`,
          })),
          (t[3] = r))
        : (r = t[3]),
        (y = r));
      let i;
      (t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, Q.jsx)(le, { className: `icon-2xs` })), (t[4] = i))
        : (i = t[4]),
        (b = i),
        (S = `bg-token-foreground text-token-dropdown-background enabled:hover:bg-token-foreground/80`));
      break bb0;
    }
    case `active`: {
      let e;
      (t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(x, {
            id: `composer.realtime.end.label`,
            defaultMessage: `End`,
            description: `Label for the button that ends realtime voice`,
          })),
          (t[5] = e))
        : (e = t[5]),
        (h = e));
      let n;
      (t[6] === m
        ? (n = t[7])
        : ((n = m.formatMessage({
            id: `composer.realtime.end.aria`,
            defaultMessage: `End realtime voice`,
            description: `Aria label for the button that ends realtime voice mode in the composer`,
          })),
          (t[6] = m),
          (t[7] = n)),
        (_ = n));
      let r;
      (t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(x, {
            id: `composer.realtime.end.tooltip`,
            defaultMessage: `End realtime voice`,
            description: `Tooltip for the button that ends realtime voice mode in the composer`,
          })),
          (t[8] = r))
        : (r = t[8]),
        (y = r));
      let i;
      (t[9] === c
        ? (i = t[10])
        : ((i = (0, Q.jsx)(`canvas`, {
            ref: c,
            className: `h-3 w-7 shrink-0 text-white`,
            "aria-hidden": `true`,
          })),
          (t[9] = c),
          (t[10] = i)),
        (b = i),
        (S = `bg-token-charts-blue text-white enabled:hover:bg-token-charts-blue/90 enabled:active:bg-token-charts-blue/80`));
      break bb0;
    }
    case `stopping`: {
      let e;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(x, {
            id: `composer.realtime.ending.label`,
            defaultMessage: `Ending…`,
            description: `Label for the button while realtime voice is ending`,
          })),
          (t[11] = e))
        : (e = t[11]),
        (h = e));
      let n;
      (t[12] === m
        ? (n = t[13])
        : ((n = m.formatMessage({
            id: `composer.realtime.ending.aria`,
            defaultMessage: `Ending realtime voice`,
            description: `Aria label for the button while realtime voice mode is ending in the composer`,
          })),
          (t[12] = m),
          (t[13] = n)),
        (_ = n));
      let r;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsx)(x, {
            id: `composer.realtime.ending.tooltip`,
            defaultMessage: `Ending realtime voice…`,
            description: `Tooltip for the button while realtime voice mode is ending in the composer`,
          })),
          (t[14] = r))
        : (r = t[14]),
        (y = r));
      let i;
      (t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, Q.jsx)(se, { className: `icon-2xs` })), (t[15] = i))
        : (i = t[15]),
        (b = i),
        (S = `bg-token-foreground text-token-dropdown-background`));
    }
  }
  let C = p ? `mb-0` : `mb-2`,
    w;
  t[16] === C
    ? (w = t[17])
    : ((w = g(`flex items-center gap-2 px-2`, C)), (t[16] = C), (t[17] = w));
  let T, E;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsx)(qt, {
        onAddImageDataUrls: Tn,
        onAddAppshotContext: wn,
        getAttachmentGen: Cn,
        setFileAttachments: Sn,
        conversationId: null,
        executionTargetCwd: null,
        executionTargetHostId: f,
        isAutoContextOn: !1,
        setIsAutoContextOn: xn,
        ideContextStatus: `no-connection`,
        hasGoal: !1,
        isGoalActionAvailable: !1,
        onClearGoal: bn,
        onOpenGoalEditor: yn,
        disabled: !0,
      })),
      (E = (0, Q.jsx)(`div`, { className: `min-w-0 flex-1` })),
      (t[18] = T),
      (t[19] = E))
    : ((T = t[18]), (E = t[19]));
  let D;
  t[20] !== _ ||
  t[21] !== S ||
  t[22] !== b ||
  t[23] !== h ||
  t[24] !== y ||
  t[25] !== m ||
  t[26] !== n ||
  t[27] !== r ||
  t[28] !== i ||
  t[29] !== a ||
  t[30] !== l ||
  t[31] !== o ||
  t[32] !== s ||
  t[33] !== d
    ? ((D =
        a ??
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            (0, Q.jsx)(re, {
              tooltipContent: n
                ? (0, Q.jsx)(x, {
                    id: `composer.realtime.unmuteMicrophone.tooltip`,
                    defaultMessage: `Unmute microphone`,
                    description: `Tooltip for the button that unmutes the user's microphone in realtime voice mode`,
                  })
                : (0, Q.jsx)(x, {
                    id: `composer.realtime.muteMicrophone.tooltip`,
                    defaultMessage: `Mute microphone`,
                    description: `Tooltip for the button that mutes the user's microphone in realtime voice mode`,
                  }),
              sideOffset: 4,
              portalContainer: d,
              children: (0, Q.jsx)(H, {
                size: `composer`,
                color: `secondary`,
                uniform: !0,
                "aria-label": n
                  ? m.formatMessage({
                      id: `composer.realtime.unmuteMicrophone.aria`,
                      defaultMessage: `Unmute microphone`,
                      description: `Aria label for the button that unmutes the user's microphone in realtime voice mode`,
                    })
                  : m.formatMessage({
                      id: `composer.realtime.muteMicrophone.aria`,
                      defaultMessage: `Mute microphone`,
                      description: `Aria label for the button that mutes the user's microphone in realtime voice mode`,
                    }),
                "aria-pressed": n,
                disabled: i !== `active`,
                onClick: o,
                children: n
                  ? (0, Q.jsx)(rn, { className: `icon-2xs` })
                  : (0, Q.jsx)(an, { className: `icon-2xs` }),
              }),
            }),
            (0, Q.jsx)(re, {
              tooltipContent: r
                ? (0, Q.jsx)(x, {
                    id: `composer.realtime.unmute.tooltip`,
                    defaultMessage: `Unmute realtime voice`,
                    description: `Tooltip for the button that unmutes realtime voice mode in the composer`,
                  })
                : (0, Q.jsx)(x, {
                    id: `composer.realtime.mute.tooltip`,
                    defaultMessage: `Mute realtime voice`,
                    description: `Tooltip for the button that mutes realtime voice mode in the composer`,
                  }),
              sideOffset: 4,
              portalContainer: d,
              children: (0, Q.jsx)(H, {
                size: `composer`,
                color: `secondary`,
                uniform: !0,
                "aria-label": r
                  ? m.formatMessage({
                      id: `composer.realtime.unmute.aria`,
                      defaultMessage: `Unmute realtime voice`,
                      description: `Aria label for the button that unmutes realtime voice mode in the composer`,
                    })
                  : m.formatMessage({
                      id: `composer.realtime.mute.aria`,
                      defaultMessage: `Mute realtime voice`,
                      description: `Aria label for the button that mutes realtime voice mode in the composer`,
                    }),
                "aria-pressed": r,
                disabled: i !== `active`,
                onClick: s,
                children: r
                  ? (0, Q.jsx)(on, { className: `icon-2xs` })
                  : (0, Q.jsx)(sn, { className: `icon-2xs` }),
              }),
            }),
            (0, Q.jsx)(re, {
              tooltipContent: y,
              sideOffset: 4,
              portalContainer: d,
              children: (0, Q.jsxs)(`button`, {
                type: `button`,
                className: g(
                  `focus-visible:outline-token-button-background cursor-interaction flex h-token-button-composer min-w-14 items-center justify-center gap-1 rounded-full px-2 text-sm font-semibold leading-[18px] whitespace-nowrap focus-visible:outline-2 disabled:cursor-default`,
                  S,
                ),
                "aria-label": _,
                disabled: i === `stopping`,
                onClick: l,
                children: [b, h],
              }),
            }),
          ],
        })),
      (t[20] = _),
      (t[21] = S),
      (t[22] = b),
      (t[23] = h),
      (t[24] = y),
      (t[25] = m),
      (t[26] = n),
      (t[27] = r),
      (t[28] = i),
      (t[29] = a),
      (t[30] = l),
      (t[31] = o),
      (t[32] = s),
      (t[33] = d),
      (t[34] = D))
    : (D = t[34]);
  let O;
  t[35] === D
    ? (O = t[36])
    : ((O = (0, Q.jsx)(`div`, {
        className: `flex shrink-0 items-center gap-2`,
        children: D,
      })),
      (t[35] = D),
      (t[36] = O));
  let k;
  return (
    t[37] !== w || t[38] !== O
      ? ((k = (0, Q.jsxs)(W, { className: w, children: [T, E, O] })),
        (t[37] = w),
        (t[38] = O),
        (t[39] = k))
      : (k = t[39]),
    k
  );
}
function yn() {}
function bn() {}
function xn() {}
function Sn() {}
function Cn() {
  return 0;
}
function wn() {}
function Tn() {}
function En(e) {
  let t = (0, Z.c)(38),
    {
      isVisible: n,
      isTranscribing: r,
      canRetryDictation: i,
      disabled: a,
      retryDictation: o,
      shortcutLabel: s,
      startDictation: c,
      stopDictation: l,
      tooltipPortalContainer: u,
    } = e,
    d = a === void 0 ? !1 : a,
    f = v(),
    p = (0, $.useRef)(null),
    m = (0, $.useRef)(!1),
    h = (0, $.useRef)(!1),
    g = (0, $.useRef)(!1),
    _ = (0, $.useRef)(!1),
    y,
    b;
  if (
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = () => () => {
          p.current != null &&
            (window.clearTimeout(p.current), (p.current = null));
        }),
        (b = []),
        (t[0] = y),
        (t[1] = b))
      : ((y = t[0]), (b = t[1])),
    (0, $.useEffect)(y, b),
    !n)
  )
    return null;
  let S = i && !r,
    C;
  t[2] !== f || t[3] !== S
    ? ((C = S
        ? f.formatMessage({
            id: `composer.dictation.retry.aria`,
            defaultMessage: `Retry dictation`,
            description: `Aria label for the button that retries composer dictation transcription`,
          })
        : f.formatMessage({
            id: `composer.dictation.aria`,
            defaultMessage: `Dictate`,
            description: `Aria label for dictation button`,
          })),
      (t[2] = f),
      (t[3] = S),
      (t[4] = C))
    : (C = t[4]);
  let w = C,
    T;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => {
        p.current != null &&
          (window.clearTimeout(p.current), (p.current = null));
      }),
      (t[5] = T))
    : (T = t[5]);
  let E = T,
    D;
  t[6] === l
    ? (D = t[7])
    : ((D = () => {
        if ((E(), !(!m.current || l == null))) {
          if (((m.current = !1), (_.current = !0), h.current)) {
            g.current = !0;
            return;
          }
          l(`insert`);
        }
      }),
      (t[6] = l),
      (t[7] = D));
  let O = D,
    k;
  t[8] === S
    ? (k = t[9])
    : ((k = (0, Q.jsx)(`span`, {
        className: `text-token-foreground`,
        children: S
          ? (0, Q.jsx)(x, {
              id: `composer.dictation.retry.tooltip`,
              defaultMessage: `Retry dictation`,
              description: `Tooltip for the button that retries composer dictation transcription`,
            })
          : (0, Q.jsx)(x, {
              id: `composer.dictation.tooltip`,
              defaultMessage: `Click to dictate or hold`,
              description: `Tooltip for the dictation button`,
            }),
      })),
      (t[8] = S),
      (t[9] = k));
  let A = S ? null : s,
    j;
  t[10] !== d || t[11] !== S || t[12] !== c || t[13] !== l
    ? ((j = (e) => {
        d ||
          S ||
          l == null ||
          e.button !== 0 ||
          (e.currentTarget.setPointerCapture?.(e.pointerId),
          E(),
          (_.current = !1),
          (p.current = window.setTimeout(() => {
            ((p.current = null),
              (m.current = !0),
              (h.current = !0),
              (g.current = !1),
              c().finally(() => {
                ((h.current = !1),
                  g.current && ((g.current = !1), l(`insert`)));
              }));
          }, cn)));
      }),
      (t[10] = d),
      (t[11] = S),
      (t[12] = c),
      (t[13] = l),
      (t[14] = j))
    : (j = t[14]);
  let M, N;
  t[15] === O
    ? ((M = t[16]), (N = t[17]))
    : ((M = (e) => {
        if (e.button === 0) {
          if (
            (e.currentTarget.hasPointerCapture?.(e.pointerId) &&
              e.currentTarget.releasePointerCapture?.(e.pointerId),
            p.current != null)
          ) {
            E();
            return;
          }
          O();
        }
      }),
      (N = (e) => {
        (e.currentTarget.hasPointerCapture?.(e.pointerId) &&
          e.currentTarget.releasePointerCapture?.(e.pointerId),
          O());
      }),
      (t[15] = O),
      (t[16] = M),
      (t[17] = N));
  let P;
  t[18] !== S || t[19] !== o || t[20] !== c
    ? ((P = () => {
        if (_.current) {
          _.current = !1;
          return;
        }
        if (S) {
          o();
          return;
        }
        c();
      }),
      (t[18] = S),
      (t[19] = o),
      (t[20] = c),
      (t[21] = P))
    : (P = t[21]);
  let F;
  t[22] !== S || t[23] !== r
    ? ((F = r
        ? (0, Q.jsx)(se, { className: `icon-xs` })
        : S
          ? (0, Q.jsx)(at, { className: `icon-xs` })
          : (0, Q.jsx)(an, { className: `icon-xs` })),
      (t[22] = S),
      (t[23] = r),
      (t[24] = F))
    : (F = t[24]);
  let I;
  t[25] !== w ||
  t[26] !== d ||
  t[27] !== M ||
  t[28] !== N ||
  t[29] !== P ||
  t[30] !== F ||
  t[31] !== j
    ? ((I = (0, Q.jsx)(H, {
        size: `composer`,
        color: `ghost`,
        uniform: !0,
        disabled: d,
        "aria-label": w,
        onPointerDown: j,
        onPointerUp: M,
        onPointerCancel: N,
        onClick: P,
        children: F,
      })),
      (t[25] = w),
      (t[26] = d),
      (t[27] = M),
      (t[28] = N),
      (t[29] = P),
      (t[30] = F),
      (t[31] = j),
      (t[32] = I))
    : (I = t[32]);
  let L;
  return (
    t[33] !== I || t[34] !== k || t[35] !== A || t[36] !== u
      ? ((L = (0, Q.jsx)(re, {
          tooltipContent: k,
          shortcut: A,
          sideOffset: 4,
          portalContainer: u,
          children: I,
        })),
        (t[33] = I),
        (t[34] = k),
        (t[35] = A),
        (t[36] = u),
        (t[37] = L))
      : (L = t[37]),
    L
  );
}
var Dn = 250;
function On({
  enabled: e,
  onTranscriptInsert: t,
  onTranscriptSend: n,
  onStartError: r,
  onTranscribeError: i,
  onUnsupported: a,
  getSurroundingText: o,
}) {
  let s = R(`1025755912`),
    [c, l] = (0, $.useState)(!1),
    [u, d] = (0, $.useState)(!1),
    [f, p] = (0, $.useState)(!1),
    m = (0, $.useRef)(null),
    h = (0, $.useRef)(null),
    g = (0, $.useRef)([]),
    v = (0, $.useRef)(null),
    y = (0, $.useRef)(null),
    b = (0, $.useRef)(!0),
    x = (0, $.useRef)(e),
    S = (0, $.useRef)(null),
    C = (0, $.useRef)({
      onTranscriptInsert: t,
      onTranscriptSend: n,
      onStartError: r,
      onTranscribeError: i,
      onUnsupported: a,
      getSurroundingText: o,
    }),
    {
      recordingDurationMs: w,
      waveformCanvasRef: T,
      startWaveformCapture: E,
      stopWaveformCapture: D,
      resetWaveformDisplay: O,
    } = lt();
  ((C.current = {
    onTranscriptInsert: t,
    onTranscriptSend: n,
    onStartError: r,
    onTranscribeError: i,
    onUnsupported: a,
    getSurroundingText: o,
  }),
    (x.current = e));
  let k = async ({ action: e, audio: t, handlers: n }) => {
      b.current && d(!0);
      try {
        let r = await ct({
          transcript: await st(t),
          surroundingText: n.getSurroundingText?.() ?? null,
          cleanupEnabled: s,
        });
        ((y.current = null), b.current && p(!1));
        let i = r.trim();
        i.length > 0 &&
          (j
            .getInstance()
            .dispatchMessage(`global-dictation-record-history-item`, {
              text: i,
            }),
          e === `send` ? n.onTranscriptSend(i) : n.onTranscriptInsert(i));
      } catch (r) {
        (_.error(`[Composer] dictation failed`, {
          safe: {},
          sensitive: { error: r },
        }),
          b.current &&
            ((y.current = { action: e, audio: t, handlers: n }), p(!0)),
          n.onTranscribeError(r));
      } finally {
        b.current && d(!1);
      }
    },
    A = async () => {
      let e = v.current ?? `insert`,
        t = C.current;
      v.current = null;
      let n = Math.max(
        w,
        S.current == null ? 0 : performance.now() - S.current,
      );
      S.current = null;
      let r = m.current,
        i = g.current;
      ((g.current = []),
        r && ((r.ondataavailable = null), (r.onstop = null)),
        (m.current = null),
        D());
      let a = h.current;
      if (
        (a &&
          a.getTracks().forEach((e) => {
            e.stop();
          }),
        (h.current = null),
        b.current && (l(!1), O()),
        e === `abort` || i.length === 0 || n < Dn)
      )
        return;
      let o = r?.mimeType || i[0]?.type || `audio/webm`;
      await k({ action: e, audio: new Blob(i, { type: o }), handlers: t });
    },
    M = Y(async () => {
      if (c || u) return;
      let e = y.current;
      e != null && (await k(e));
    }),
    N = Y((e) => {
      if (v.current != null) {
        v.current = e === `send` ? `send` : v.current;
        return;
      }
      v.current = e;
      let t = m.current;
      if (!t) {
        A();
        return;
      }
      if (t.state === `inactive`) {
        A();
        return;
      }
      t.stop();
    }),
    P = Y(() => {
      N(`abort`);
    });
  return (
    (0, $.useEffect)(
      () => (
        (b.current = !0),
        () => {
          b.current = !1;
          let e = m.current;
          e == null ||
            e.state === `inactive` ||
            (v.current ?? ((v.current = `insert`), e.stop()));
        }
      ),
      [],
    ),
    {
      abortDictation: P,
      isDictating: c,
      isTranscribing: u,
      canRetryDictation: f,
      recordingDurationMs: w,
      waveformCanvasRef: T,
      retryDictation: M,
      startDictation: Y(async () => {
        if (!(c || u)) {
          if (!e) {
            C.current.onUnsupported();
            return;
          }
          v.current = null;
          try {
            ((y.current = null),
              p(!1),
              D(),
              I.systemPermissions?.requestMicrophoneAccess().catch(() => {}));
            let e = await navigator.mediaDevices.getUserMedia({
              audio: { channelCount: 1 },
            });
            if (!b.current || !x.current) {
              e.getTracks().forEach((e) => {
                e.stop();
              });
              return;
            }
            ((S.current = performance.now()), (h.current = e), E(e));
            let t = new MediaRecorder(e);
            ((m.current = t),
              (g.current = []),
              (t.ondataavailable = (e) => {
                e.data.size > 0 && g.current.push(e.data);
              }),
              (t.onstop = () => {
                A();
              }),
              t.start(),
              l(!0));
          } catch (e) {
            (_.error(`[Composer] unable to start dictation`, {
              safe: {},
              sensitive: { error: e },
            }),
              b.current && C.current.onStartError(e));
            let t = m.current;
            (t && ((t.ondataavailable = null), (t.onstop = null)),
              (m.current = null),
              D(),
              O());
            let n = h.current;
            (n &&
              n.getTracks().forEach((e) => {
                e.stop();
              }),
              (h.current = null),
              (g.current = []),
              (S.current = null));
          }
        }
      }),
      stopDictation: N,
    }
  );
}
var kn = `[data-codex-terminal]`;
function An({
  hasFocusedComposer: e,
  isComposerFocused: t,
  isPrimaryComposer: n,
}) {
  return t || (n && !e);
}
function jn() {
  return C(we, `composer.startDictation`);
}
function Mn() {
  let e = (0, Z.c)(2),
    t = jn();
  if (t == null) return null;
  let n;
  return (e[0] === t ? (n = e[1]) : ((n = ye(t)), (e[0] = t), (e[1] = n)), n);
}
function Nn(e) {
  let t = (0, Z.c)(31),
    {
      enabled: n,
      isDictating: r,
      isTranscribing: i,
      startDictation: a,
      stopDictation: o,
      keyboardEventTarget: s,
      shouldHandleHostDictation: c,
      ignoreWithin: l,
    } = e,
    u = l === void 0 ? kn : l,
    d = R(`1244621283`),
    f = jn(),
    p = (0, $.useRef)(null),
    m = (0, $.useRef)(!1),
    h;
  t[0] === a
    ? (h = t[1])
    : ((h = () => {
        ((m.current = !0),
          a().finally(() => {
            m.current = !1;
          }));
      }),
      (t[0] = a),
      (t[1] = h));
  let g = h,
    _;
  t[2] !== n || t[3] !== u || t[4] !== i || t[5] !== s || t[6] !== c
    ? ((_ = () => (!n || i || (u != null && Pn(s, u)) ? !1 : c == null || c())),
      (t[2] = n),
      (t[3] = u),
      (t[4] = i),
      (t[5] = s),
      (t[6] = c),
      (t[7] = _))
    : (_ = t[7]);
  let v = _,
    y;
  t[8] !== v || t[9] !== r || t[10] !== d || t[11] !== g
    ? ((y = (e) => {
        !d ||
          !v() ||
          ((p.current = e.sessionId),
          P.dispatchMessage(`global-dictation-in-app-started`, {
            sessionId: e.sessionId,
          }),
          !(r || m.current) && g());
      }),
      (t[8] = v),
      (t[9] = r),
      (t[10] = d),
      (t[11] = g),
      (t[12] = y))
    : (y = t[12]);
  let b;
  (t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = []), (t[13] = b))
    : (b = t[13]),
    E(`global-dictation-in-app-start`, y, b));
  let x;
  t[14] !== d || t[15] !== o
    ? ((x = (e) => {
        !d || p.current !== e.sessionId || ((p.current = null), o(`insert`));
      }),
      (t[14] = d),
      (t[15] = o),
      (t[16] = x))
    : (x = t[16]);
  let S;
  (t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = []), (t[17] = S))
    : (S = t[17]),
    E(`global-dictation-in-app-stop`, x, S));
  let C = f ?? ``,
    w = n && f != null,
    T = u ?? void 0,
    D;
  t[18] !== r || t[19] !== i || t[20] !== g
    ? ((D = (e) => {
        (e.preventDefault(),
          e.stopPropagation(),
          !(r || i || m.current) && g());
      }),
      (t[18] = r),
      (t[19] = i),
      (t[20] = g),
      (t[21] = D))
    : (D = t[21]);
  let O;
  t[22] === o
    ? (O = t[23])
    : ((O = (e) => {
        (e.preventDefault(), e.stopPropagation(), p.current ?? o(`insert`));
      }),
      (t[22] = o),
      (t[23] = O));
  let k;
  (t[24] !== s ||
  t[25] !== T ||
  t[26] !== D ||
  t[27] !== O ||
  t[28] !== C ||
  t[29] !== w
    ? ((k = {
        accelerator: C,
        enabled: w,
        ignoreWithin: T,
        keyboardEventTarget: s,
        onKeyDown: D,
        onKeyUp: O,
      }),
      (t[24] = s),
      (t[25] = T),
      (t[26] = D),
      (t[27] = O),
      (t[28] = C),
      (t[29] = w),
      (t[30] = k))
    : (k = t[30]),
    ut(k));
}
function Pn(e, t) {
  let n = e?.document ?? (typeof window > `u` ? null : window.document);
  if (n == null) return !1;
  let r = n.defaultView,
    i = n.activeElement;
  return r != null && i instanceof r.Element && i.closest(t) != null;
}
function Fn(e) {
  let t = ee(e),
    n = R(`4100906017`),
    r = L();
  return !navigator?.mediaDevices?.getUserMedia || typeof MediaRecorder > `u`
    ? !1
    : t == null || t.isLoading || r
      ? null
      : n && t.authMethod === `chatgpt`;
}
function In({ canEditDesign: e, showAdjustEntry: t }) {
  return t && e;
}
var Ln = /\[((?:\\.|[^\]\n])+)\]\(((?:\\.|[^)\n])+)\)/g;
function Rn(e) {
  let t = [],
    n = 0,
    r;
  for (Ln.lastIndex = 0; (r = Ln.exec(e)) != null; ) {
    let i = zn(r[1], r[2]);
    i != null &&
      (r.index > n && t.push({ type: `text`, text: e.slice(n, r.index) }),
      t.push({ type: `mention`, label: i }),
      (n = r.index + r[0].length));
  }
  return t.length === 0
    ? [{ type: `text`, text: e }]
    : (n < e.length && t.push({ type: `text`, text: e.slice(n) }), t);
}
function zn(e, t) {
  let n = l(e).trim();
  return Bn(u(t), n)
    ? (n.startsWith(`$[`) || n.startsWith(`@[`)) && n.endsWith(`]`)
      ? n.slice(2, -1)
      : n.startsWith(`$`) || n.startsWith(`@`)
        ? n.slice(1)
        : n
    : null;
}
function Bn(e, t) {
  return e.startsWith(`app://`) ||
    e.startsWith(`agent://`) ||
    e.startsWith(`plugin://`) ||
    e.startsWith(`subagent://`) ||
    ae(e) != null ||
    e.includes(`SKILL.md`)
    ? !0
    : (t.startsWith(`@`) || t.startsWith(`$`)) &&
        (e.startsWith(`/`) || /^[A-Za-z]:\\/.test(e) || e.startsWith(`\\\\`));
}
var Vn = [
    { label: `Inter`, value: `"Inter Variable", Arial, sans-serif` },
    { label: `System`, value: `system-ui, sans-serif` },
    { label: `Arial`, value: `Arial, sans-serif` },
    { label: `Serif`, value: `Georgia, "Times New Roman", serif` },
    {
      label: `Mono`,
      value: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`,
    },
  ],
  Hn = [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`];
function Un(e, t) {
  return t.property === `font-family`
    ? Gn([t.value, t.previousValue], Vn)
    : t.property === `font-weight`
      ? Gn(
          [t.value],
          Hn.map((e) => ({ value: e })),
        )
      : t.property === `flex-direction`
        ? Gn(
            [t.value],
            [
              {
                label: e.formatMessage({
                  id: `browserSidebarDesignEditor.horizontalFlexDirection`,
                  defaultMessage: `Horizontal`,
                  description: `Dropdown label for a horizontal browser tweak editor flex direction`,
                }),
                value: `row`,
              },
              {
                label: e.formatMessage({
                  id: `browserSidebarDesignEditor.horizontalReverseFlexDirection`,
                  defaultMessage: `Horizontal reverse`,
                  description: `Dropdown label for a reversed horizontal browser tweak editor flex direction`,
                }),
                value: `row-reverse`,
              },
              {
                label: e.formatMessage({
                  id: `browserSidebarDesignEditor.verticalFlexDirection`,
                  defaultMessage: `Vertical`,
                  description: `Dropdown label for a vertical browser tweak editor flex direction`,
                }),
                value: `column`,
              },
              {
                label: e.formatMessage({
                  id: `browserSidebarDesignEditor.verticalReverseFlexDirection`,
                  defaultMessage: `Vertical reverse`,
                  description: `Dropdown label for a reversed vertical browser tweak editor flex direction`,
                }),
                value: `column-reverse`,
              },
            ],
          )
        : t.property === `justify-content`
          ? Gn(
              [t.value],
              Wn(t.value, `flex-start`, [
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.startDistribution`,
                    defaultMessage: `Start`,
                    description: `Dropdown label for start distribution in the browser tweak editor`,
                  }),
                  value: `flex-start`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.centerDistribution`,
                    defaultMessage: `Center`,
                    description: `Dropdown label for centered distribution in the browser tweak editor`,
                  }),
                  value: `center`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.endDistribution`,
                    defaultMessage: `End`,
                    description: `Dropdown label for end distribution in the browser tweak editor`,
                  }),
                  value: `flex-end`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.spaceBetweenDistribution`,
                    defaultMessage: `Space between`,
                    description: `Dropdown label for space-between distribution in the browser tweak editor`,
                  }),
                  value: `space-between`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.spaceAroundDistribution`,
                    defaultMessage: `Space around`,
                    description: `Dropdown label for space-around distribution in the browser tweak editor`,
                  }),
                  value: `space-around`,
                },
                {
                  label: e.formatMessage({
                    id: `browserSidebarDesignEditor.spaceEvenlyDistribution`,
                    defaultMessage: `Space evenly`,
                    description: `Dropdown label for space-evenly distribution in the browser tweak editor`,
                  }),
                  value: `space-evenly`,
                },
              ]),
            )
          : t.property === `align-items`
            ? Gn(
                [t.value],
                Wn(t.value, `stretch`, [
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.startAlignment`,
                      defaultMessage: `Start`,
                      description: `Dropdown label for start alignment in the browser tweak editor`,
                    }),
                    value: `flex-start`,
                  },
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.centerAlignment`,
                      defaultMessage: `Center`,
                      description: `Dropdown label for centered alignment in the browser tweak editor`,
                    }),
                    value: `center`,
                  },
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.endAlignment`,
                      defaultMessage: `End`,
                      description: `Dropdown label for end alignment in the browser tweak editor`,
                    }),
                    value: `flex-end`,
                  },
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.stretchAlignment`,
                      defaultMessage: `Stretch`,
                      description: `Dropdown label for stretched alignment in the browser tweak editor`,
                    }),
                    value: `stretch`,
                  },
                  {
                    label: e.formatMessage({
                      id: `browserSidebarDesignEditor.baselineAlignment`,
                      defaultMessage: `Baseline`,
                      description: `Dropdown label for baseline alignment in the browser tweak editor`,
                    }),
                    value: `baseline`,
                  },
                ]),
              )
            : [];
}
function Wn(e, t, n) {
  return e === `normal`
    ? n.map((n) => (n.value === t ? { ...n, value: e } : n))
    : n;
}
function Gn(e, t) {
  let n = new Set(t.map((e) => e.value)),
    r = e.flatMap((e) =>
      e.trim().length === 0 || n.has(e) ? [] : (n.add(e), [{ value: e }]),
    );
  return r.length === 0 ? t : [...r, ...t];
}
var Kn = {
    numericInput: `_numericInput_dz8fh_1`,
    colorInput: `_colorInput_dz8fh_19`,
  },
  qn = [`top`, `bottom`, `left`, `right`],
  Jn = [`top`, `right`, `bottom`, `left`],
  Yn = [
    `color`,
    `background-color`,
    `opacity`,
    `font-family`,
    `font-size`,
    `font-weight`,
    `border-radius`,
    `border-color`,
    `border-width`,
    `flex-direction`,
    `justify-content`,
    `align-items`,
    `gap`,
    `column-gap`,
    `row-gap`,
  ],
  Xn = `min-w-0 rounded-lg border border-token-input-border bg-token-input-background text-token-input-foreground shadow-sm outline-none transition-colors focus-within:border-token-focus-border focus-within:ring-1 focus-within:ring-token-focus-border`,
  Zn = `min-w-0 appearance-none border-0 bg-transparent font-mono text-xs text-token-input-foreground outline-none ring-0 placeholder:text-token-input-placeholder-foreground focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0`,
  Qn = Kn.colorInput,
  $n = `w-[192px] max-w-full`,
  er = `w-[168px] max-w-full`,
  tr = `w-[112px]`,
  nr = Kn.numericInput,
  rr = `url("${xe(`<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 1 11 4H9v4H7V4H5l3-3Z' fill='#475569'/><path d='M8 15 5 12h2V8h2v4h2l-3 3Z' fill='#475569'/></svg>`)}") 8 8, ns-resize`,
  ir = 4,
  ar = ir;
function or(e) {
  let t = (0, Z.c)(61),
    {
      dropdownPortalContainer: n,
      editorState: r,
      defaultExpandedSpacingGroups: i,
      isEditable: a,
      onDragHandlePointerCancel: o,
      onDragHandlePointerDown: s,
      onDragHandlePointerMove: c,
      onDragHandlePointerUp: l,
      onScrubActiveChange: u,
      onUpdate: d,
    } = e,
    f;
  t[0] !== i?.margin || t[1] !== i?.padding
    ? ((f = () => ({ margin: i?.margin === !0, padding: i?.padding === !0 })),
      (t[0] = i?.margin),
      (t[1] = i?.padding),
      (t[2] = f))
    : (f = t[2]);
  let [p, m] = (0, $.useState)(f),
    [h, g] = (0, $.useState)(!1),
    _;
  t[3] === r ? (_ = t[4]) : ((_ = () => Qr(r)), (t[3] = r), (t[4] = _));
  let [v, y] = (0, $.useState)(_),
    b;
  t[5] === r ? (b = t[6]) : ((b = Br(r)), (t[5] = r), (t[6] = b));
  let x = b,
    S,
    C,
    w,
    T,
    E,
    D,
    O;
  if (
    t[7] !== n ||
    t[8] !== r ||
    t[9] !== p ||
    t[10] !== a ||
    t[11] !== h ||
    t[12] !== v ||
    t[13] !== o ||
    t[14] !== s ||
    t[15] !== c ||
    t[16] !== l ||
    t[17] !== u ||
    t[18] !== d ||
    t[19] !== x
  ) {
    let e = Gr(Hr(r.declarations)),
      i;
    t[27] !== r || t[28] !== d
      ? ((i = (e) => {
          d(e(r));
        }),
        (t[27] = r),
        (t[28] = d),
        (t[29] = i))
      : (i = t[29]);
    let f = i;
    ((O = `-mx-4 flex min-w-0 flex-col`),
      t[30] !== r || t[31] !== o || t[32] !== s || t[33] !== c || t[34] !== l
        ? ((S = (0, Q.jsx)(lr, {
            editorState: r,
            onPointerCancel: o,
            onPointerDown: s,
            onPointerMove: c,
            onPointerUp: l,
          })),
          (t[30] = r),
          (t[31] = o),
          (t[32] = s),
          (t[33] = c),
          (t[34] = l),
          (t[35] = S))
        : (S = t[35]),
      (E = `max-h-[216px] min-w-0 overflow-y-auto`),
      (D = !0),
      (C = `grid grid-cols-[minmax(108px,auto)_minmax(0,1fr)] items-start gap-x-3 gap-y-1.5 px-4 py-2`),
      t[36] !== a || t[37] !== x || t[38] !== f
        ? ((w =
            x == null
              ? null
              : (0, Q.jsx)(ur, {
                  isEditable: a,
                  isEdited: x.value !== x.previousValue,
                  value: x.value,
                  onReset: () => {
                    f(Lr);
                  },
                  onValueChange: (e) => {
                    f((t) => Ir(t, e));
                  },
                })),
          (t[36] = a),
          (t[37] = x),
          (t[38] = f),
          (t[39] = w))
        : (w = t[39]));
    let _;
    (t[40] !== n ||
    t[41] !== p ||
    t[42] !== a ||
    t[43] !== h ||
    t[44] !== v ||
    t[45] !== u ||
    t[46] !== x ||
    t[47] !== f
      ? ((_ = (e, t) =>
          (0, Q.jsx)(
            dr,
            {
              dropdownPortalContainer: n,
              expandedSpacingGroups: p,
              isFlexSpacingExpanded: h,
              isEditable: a,
              lockedRelationships: v,
              sectionGroup: e,
              showDivider: t > 0 || x != null,
              onDimensionLockToggle: () => {
                y(cr);
              },
              onDimensionValueChange: (e, t) => {
                f((n) => (v.dimensions ? Fr(n, e, t) : jr(n, e, { value: t })));
              },
              onSpacingExpandToggle: (e) => {
                m((t) => ({ ...t, [e]: !t[e] }));
              },
              onFlexSpacingExpandToggle: () => {
                g(sr);
              },
              onSpacingLockToggle: (e, t) => {
                let n = Zr(e, t),
                  r = !v[n];
                (y((e) => ({ ...e, [n]: r })), r && f((n) => Nr(n, e, t)));
              },
              onSpacingValueChange: (e, t, n) => {
                f((r) =>
                  ti(v, e, t) ? Pr(r, e, t, n) : jr(r, t, { value: n }),
                );
              },
              onDeclarationValueChange: (e, t) => {
                f((n) => jr(n, e, { value: t }));
              },
              onScrubActiveChange: u,
              onDeclarationReset: (e) => {
                let t = Yr(e);
                f((n) => (t != null && ti(v, t, e) ? zr(n, t, e) : Rr(n, e)));
              },
            },
            e.id,
          )),
        (t[40] = n),
        (t[41] = p),
        (t[42] = a),
        (t[43] = h),
        (t[44] = v),
        (t[45] = u),
        (t[46] = x),
        (t[47] = f),
        (t[48] = _))
      : (_ = t[48]),
      (T = e.map(_)),
      (t[7] = n),
      (t[8] = r),
      (t[9] = p),
      (t[10] = a),
      (t[11] = h),
      (t[12] = v),
      (t[13] = o),
      (t[14] = s),
      (t[15] = c),
      (t[16] = l),
      (t[17] = u),
      (t[18] = d),
      (t[19] = x),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w),
      (t[23] = T),
      (t[24] = E),
      (t[25] = D),
      (t[26] = O));
  } else
    ((S = t[20]),
      (C = t[21]),
      (w = t[22]),
      (T = t[23]),
      (E = t[24]),
      (D = t[25]),
      (O = t[26]));
  let k;
  t[49] !== C || t[50] !== w || t[51] !== T
    ? ((k = (0, Q.jsxs)(`div`, { className: C, children: [w, T] })),
      (t[49] = C),
      (t[50] = w),
      (t[51] = T),
      (t[52] = k))
    : (k = t[52]);
  let A;
  t[53] !== k || t[54] !== E || t[55] !== D
    ? ((A = (0, Q.jsx)(`div`, {
        className: E,
        "data-browser-sidebar-design-scroll-container": D,
        children: k,
      })),
      (t[53] = k),
      (t[54] = E),
      (t[55] = D),
      (t[56] = A))
    : (A = t[56]);
  let j;
  return (
    t[57] !== S || t[58] !== A || t[59] !== O
      ? ((j = (0, Q.jsxs)(`div`, { className: O, children: [S, A] })),
        (t[57] = S),
        (t[58] = A),
        (t[59] = O),
        (t[60] = j))
      : (j = t[60]),
    j
  );
}
function sr(e) {
  return !e;
}
function cr(e) {
  return { ...e, dimensions: !e.dimensions };
}
function lr(e) {
  let t = (0, Z.c)(16),
    {
      editorState: n,
      onPointerCancel: r,
      onPointerDown: i,
      onPointerMove: a,
      onPointerUp: o,
    } = e,
    s = v(),
    c;
  t[0] === n.targetLabel
    ? (c = t[1])
    : ((c = Vr(n.targetLabel)), (t[0] = n.targetLabel), (t[1] = c));
  let l = c,
    u;
  t[2] === s
    ? (u = t[3])
    : ((u = s.formatMessage({
        id: `browserSidebarDesignEditor.dragStylingControls`,
        defaultMessage: `Move styling controls`,
        description: `Accessible label for the browser design styling controls drag handle`,
      })),
      (t[2] = s),
      (t[3] = u));
  let d = u,
    f;
  t[4] === l
    ? (f = t[5])
    : ((f = (0, Q.jsx)(`span`, {
        className: `min-w-0 truncate font-medium`,
        children: l,
      })),
      (t[4] = l),
      (t[5] = f));
  let p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(ft, { className: `icon-xs shrink-0` })), (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === d
    ? (m = t[8])
    : ((m = (0, Q.jsx)(`span`, {
        "aria-label": d,
        className: `flex shrink-0 items-center justify-center text-token-text-tertiary`,
        role: `img`,
        title: d,
        children: p,
      })),
      (t[7] = d),
      (t[8] = m));
  let h;
  return (
    t[9] !== r ||
    t[10] !== i ||
    t[11] !== a ||
    t[12] !== o ||
    t[13] !== f ||
    t[14] !== m
      ? ((h = (0, Q.jsxs)(`div`, {
          "data-browser-sidebar-design-drag-handle": !0,
          className: `flex min-w-0 cursor-grab touch-none items-center justify-between gap-3 bg-token-foreground/5 px-4 py-2 text-sm text-token-foreground select-none active:cursor-grabbing`,
          onPointerCancel: r,
          onPointerDown: i,
          onPointerMove: a,
          onPointerUp: o,
          children: [f, m],
        })),
        (t[9] = r),
        (t[10] = i),
        (t[11] = a),
        (t[12] = o),
        (t[13] = f),
        (t[14] = m),
        (t[15] = h))
      : (h = t[15]),
    h
  );
}
function ur(e) {
  let t = (0, Z.c)(13),
    { isEditable: n, isEdited: r, value: i, onReset: a, onValueChange: o } = e,
    s = v(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage(
        {
          id: `browserSidebarDesignEditor.resetProperty`,
          defaultMessage: `Reset {property}`,
          description: `Accessible label for resetting a design tweak property in the in-app browser design edit card`,
        },
        {
          property: s.formatMessage({
            id: `browserSidebarDesignEditor.textProperty`,
            defaultMessage: `Text`,
            description: `Property label for editable text in the in-app browser design edit card`,
          }),
        },
      )),
      (t[0] = s),
      (t[1] = c));
  let l = c,
    u;
  t[2] !== s || t[3] !== n || t[4] !== o || t[5] !== i
    ? ((u = n
        ? (0, Q.jsx)(`span`, {
            className: g(Xn, $n, `flex min-h-7 min-w-0 items-center px-3`),
            children: (0, Q.jsx)(`input`, {
              "aria-label": s.formatMessage({
                id: `browserSidebarDesignEditor.textProperty`,
                defaultMessage: `Text`,
                description: `Property label for editable text in the in-app browser design edit card`,
              }),
              className: g(Zn, `h-7 w-full text-left`),
              "data-browser-sidebar-design-content-input": !0,
              value: i,
              onChange: (e) => {
                o(e.target.value);
              },
            }),
          })
        : (0, Q.jsx)(`span`, {
            className: g(
              Xn,
              $n,
              `block min-h-7 truncate px-3 py-1 text-right font-mono text-xs text-token-input-foreground`,
            ),
            title: i,
            children: i,
          })),
      (t[2] = s),
      (t[3] = n),
      (t[4] = o),
      (t[5] = i),
      (t[6] = u))
    : (u = t[6]);
  let d = u,
    f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(`span`, {
        className: `flex min-h-7 min-w-0 items-center truncate overflow-hidden text-sm text-token-text-secondary`,
        children: (0, Q.jsx)(x, {
          id: `browserSidebarDesignEditor.textProperty`,
          defaultMessage: `Text`,
          description: `Property label for editable text in the in-app browser design edit card`,
        }),
      })),
      (t[7] = f))
    : (f = t[7]);
  let p = n && r,
    m;
  return (
    t[8] !== a || t[9] !== l || t[10] !== p || t[11] !== d
      ? ((m = (0, Q.jsxs)(`div`, {
          className: `contents`,
          children: [
            f,
            (0, Q.jsx)(pr, {
              showReset: p,
              resetLabel: l,
              onReset: a,
              children: d,
            }),
          ],
        })),
        (t[8] = a),
        (t[9] = l),
        (t[10] = p),
        (t[11] = d),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
function dr(e) {
  let t = (0, Z.c)(21),
    {
      dropdownPortalContainer: n,
      expandedSpacingGroups: r,
      isFlexSpacingExpanded: i,
      isEditable: a,
      lockedRelationships: o,
      sectionGroup: s,
      showDivider: c,
      onDeclarationValueChange: l,
      onDeclarationReset: u,
      onDimensionLockToggle: d,
      onDimensionValueChange: f,
      onFlexSpacingExpandToggle: p,
      onScrubActiveChange: m,
      onSpacingExpandToggle: h,
      onSpacingLockToggle: g,
      onSpacingValueChange: _,
    } = e,
    v;
  t[0] === c
    ? (v = t[1])
    : ((v = c ? (0, Q.jsx)(fr, {}) : null), (t[0] = c), (t[1] = v));
  let y;
  t[2] !== n ||
  t[3] !== r ||
  t[4] !== a ||
  t[5] !== i ||
  t[6] !== o ||
  t[7] !== u ||
  t[8] !== l ||
  t[9] !== d ||
  t[10] !== f ||
  t[11] !== p ||
  t[12] !== m ||
  t[13] !== h ||
  t[14] !== g ||
  t[15] !== _ ||
  t[16] !== s.sections
    ? ((y = s.sections.map((e, t) => {
        let c = (() => {
          switch (e.kind) {
            case `declaration`:
              return (0, Q.jsx)(mr, {
                declaration: e.declaration,
                dropdownPortalContainer: n,
                isEditable: a,
                onReset: () => {
                  u(e.declaration.property);
                },
                onScrubActiveChange: m,
                onValueChange: (t) => {
                  l(e.declaration.property, t);
                },
              });
            case `dimensions`:
              return (0, Q.jsx)(yr, {
                height: e.height,
                isEditable: a,
                isLocked: o.dimensions,
                width: e.width,
                onLockToggle: d,
                onReset: u,
                onValueChange: f,
                onScrubActiveChange: m,
              });
            case `spacing`:
              return (0, Q.jsx)(gr, {
                declarations: e.declarations,
                isEditable: a,
                isExpanded: r[e.property],
                lockedRelationships: o,
                property: e.property,
                onDeclarationReset: u,
                onExpandToggle: () => {
                  h(e.property);
                },
                onLockToggle: (t) => {
                  g(e.property, t);
                },
                onValueChange: (t, n) => {
                  _(e.property, t, n);
                },
                onScrubActiveChange: m,
              });
            case `flex-spacing`:
              return (0, Q.jsx)(vr, {
                columnGap: e.columnGap,
                isEditable: a,
                isExpanded: i,
                rowGap: e.rowGap,
                onDeclarationReset: u,
                onExpandToggle: p,
                onScrubActiveChange: m,
                onValueChange: l,
              });
          }
        })();
        return (0, Q.jsxs)(
          `div`,
          {
            className: `contents`,
            children: [
              t > 0 && Wr(e) && !Wr(s.sections[t - 1])
                ? (0, Q.jsx)(fr, {})
                : null,
              c,
            ],
          },
          Ur(e),
        );
      })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a),
      (t[5] = i),
      (t[6] = o),
      (t[7] = u),
      (t[8] = l),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = s.sections),
      (t[17] = y))
    : (y = t[17]);
  let b;
  return (
    t[18] !== v || t[19] !== y
      ? ((b = (0, Q.jsxs)(Q.Fragment, { children: [v, y] })),
        (t[18] = v),
        (t[19] = y),
        (t[20] = b))
      : (b = t[20]),
    b
  );
}
function fr() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(`span`, {
          "aria-hidden": `true`,
          className: `col-span-2 my-0.5 border-t border-token-border-light`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function pr(e) {
  let t = (0, Z.c)(14),
    {
      children: n,
      isScrubbable: r,
      scrubPeerProperty: i,
      scrubProperty: a,
      showReset: o,
      resetLabel: s,
      onReset: c,
    } = e,
    l = r !== void 0 && r ? `` : void 0,
    u;
  t[0] !== c || t[1] !== s || t[2] !== o
    ? ((u = o
        ? (0, Q.jsx)(H, {
            "aria-label": s,
            className: `absolute top-1/2 right-full mr-2 h-5 w-5 shrink-0 -translate-y-1/2`,
            color: `ghost`,
            size: `iconSm`,
            title: s,
            type: `button`,
            uniform: !0,
            onClick: c,
            children: (0, Q.jsx)(dt, { className: `icon-2xs` }),
          })
        : null),
      (t[0] = c),
      (t[1] = s),
      (t[2] = o),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === n
    ? (d = t[5])
    : ((d = (0, Q.jsx)(`span`, {
        className: `flex max-w-full min-w-0 justify-end`,
        children: n,
      })),
      (t[4] = n),
      (t[5] = d));
  let f;
  t[6] !== u || t[7] !== d
    ? ((f = (0, Q.jsxs)(`span`, {
        className: `relative inline-flex max-w-full justify-end`,
        children: [u, d],
      })),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== i || t[10] !== a || t[11] !== l || t[12] !== f
      ? ((p = (0, Q.jsx)(`span`, {
          className: `flex min-w-0 justify-end`,
          "data-browser-sidebar-design-scrub-value-cell": l,
          "data-browser-sidebar-design-scrub-peer-property": i,
          "data-browser-sidebar-design-scrub-property": a,
          children: f,
        })),
        (t[9] = i),
        (t[10] = a),
        (t[11] = l),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function mr(e) {
  let t = (0, Z.c)(24),
    {
      connector: n,
      declaration: r,
      dropdownPortalContainer: i,
      isNested: a,
      isEditable: o,
      onReset: s,
      scrubPeerProperty: c,
      onScrubActiveChange: l,
      showsRelationshipConnector: u,
      onValueChange: d,
    } = e,
    f = a === void 0 ? !1 : a,
    p = u === void 0 ? !1 : u,
    m = v(),
    h = p ? `w-full pr-9` : f && `ml-1 pl-3`,
    _;
  t[0] === h
    ? (_ = t[1])
    : ((_ = g(
        `relative flex min-h-7 min-w-0 items-center text-sm text-token-text-secondary`,
        h,
      )),
      (t[0] = h),
      (t[1] = _));
  let y;
  t[2] !== r.property || t[3] !== m
    ? ((y = vi(m, r.property)), (t[2] = r.property), (t[3] = m), (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] !== r.property || t[6] !== f
    ? ((b = (0, Q.jsx)(`span`, {
        className: `block truncate`,
        children: (0, Q.jsx)(kr, { property: r.property, spacingAxisOnly: f }),
      })),
      (t[5] = r.property),
      (t[6] = f),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== n || t[9] !== _ || t[10] !== y || t[11] !== b
    ? ((x = (0, Q.jsxs)(`span`, {
        className: _,
        "data-browser-sidebar-design-scrub-label": !0,
        "data-browser-sidebar-design-scrub-clone-label": y,
        children: [n, b],
      })),
      (t[8] = n),
      (t[9] = _),
      (t[10] = y),
      (t[11] = b),
      (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] !== r ||
  t[14] !== i ||
  t[15] !== o ||
  t[16] !== s ||
  t[17] !== l ||
  t[18] !== d ||
  t[19] !== c
    ? ((S = (0, Q.jsx)(hr, {
        declaration: r,
        dropdownPortalContainer: i,
        isEditable: o,
        onReset: s,
        onScrubActiveChange: l,
        scrubPeerProperty: c,
        onValueChange: d,
      })),
      (t[13] = r),
      (t[14] = i),
      (t[15] = o),
      (t[16] = s),
      (t[17] = l),
      (t[18] = d),
      (t[19] = c),
      (t[20] = S))
    : (S = t[20]);
  let C;
  return (
    t[21] !== x || t[22] !== S
      ? ((C = (0, Q.jsxs)(`div`, { className: `contents`, children: [x, S] })),
        (t[21] = x),
        (t[22] = S),
        (t[23] = C))
      : (C = t[23]),
    C
  );
}
function hr(e) {
  let t = (0, Z.c)(17),
    {
      declaration: n,
      dropdownPortalContainer: r,
      isEditable: i,
      onReset: a,
      onScrubActiveChange: o,
      scrubPeerProperty: s,
      onValueChange: c,
    } = e,
    l = v(),
    u;
  t[0] !== n.property || t[1] !== l
    ? ((u = l.formatMessage(
        {
          id: `browserSidebarDesignEditor.resetProperty`,
          defaultMessage: `Reset {property}`,
          description: `Accessible label for resetting a design tweak property in the in-app browser design edit card`,
        },
        { property: vi(l, n.property) },
      )),
      (t[0] = n.property),
      (t[1] = l),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f = i && n.value !== n.previousValue,
    p;
  t[3] !== n || t[4] !== r || t[5] !== i || t[6] !== o || t[7] !== c
    ? ((p = i
        ? (0, Q.jsx)(Sr, {
            declaration: n,
            dropdownPortalContainer: r,
            isEdited: n.value !== n.previousValue,
            onScrubActiveChange: o,
            onValueChange: c,
          })
        : (0, Q.jsx)(`span`, {
            className: g(
              Xn,
              `block min-h-7 w-full truncate px-3 py-1 text-right font-mono text-xs text-token-input-foreground`,
            ),
            title: n.value,
            children: n.value,
          })),
      (t[3] = n),
      (t[4] = r),
      (t[5] = i),
      (t[6] = o),
      (t[7] = c),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== n.property ||
    t[10] !== i ||
    t[11] !== a ||
    t[12] !== d ||
    t[13] !== s ||
    t[14] !== f ||
    t[15] !== p
      ? ((m = (0, Q.jsx)(pr, {
          isScrubbable: i,
          scrubPeerProperty: s,
          scrubProperty: n.property,
          showReset: f,
          resetLabel: d,
          onReset: a,
          children: p,
        })),
        (t[9] = n.property),
        (t[10] = i),
        (t[11] = a),
        (t[12] = d),
        (t[13] = s),
        (t[14] = f),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function gr(e) {
  let t = (0, Z.c)(66),
    {
      declarations: n,
      isEditable: r,
      isExpanded: i,
      lockedRelationships: a,
      property: o,
      onDeclarationReset: s,
      onExpandToggle: c,
      onLockToggle: l,
      onScrubActiveChange: u,
      onValueChange: d,
    } = e,
    f = v(),
    p,
    m,
    h,
    _,
    y,
    b,
    x;
  if (
    t[0] !== n ||
    t[1] !== f ||
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== c ||
    t[6] !== u ||
    t[7] !== d ||
    t[8] !== o
  ) {
    let e = n.map(_r),
      s = e.length > 0 && e.every((t) => t === e[0]) ? e[0] : null,
      l;
    t[16] !== f || t[17] !== i || t[18] !== o
      ? ((l = i
          ? f.formatMessage(
              {
                id: `browserSidebarDesignEditor.collapseSpacing`,
                defaultMessage: `Collapse {property}`,
                description: `Accessible label for collapsing margin or padding rows in the design edit card`,
              },
              { property: o },
            )
          : f.formatMessage(
              {
                id: `browserSidebarDesignEditor.expandSpacing`,
                defaultMessage: `Expand {property}`,
                description: `Accessible label for expanding margin or padding rows in the design edit card`,
              },
              { property: o },
            )),
        (t[16] = f),
        (t[17] = i),
        (t[18] = o),
        (t[19] = l))
      : (l = t[19]);
    let v = l,
      S;
    (t[20] === o
      ? (S = t[21])
      : ((S = Zr(o, `vertical`)), (t[20] = o), (t[21] = S)),
      (b = S));
    let C;
    (t[22] === o
      ? (C = t[23])
      : ((C = Zr(o, `horizontal`)), (t[22] = o), (t[23] = C)),
      (p = C));
    let w;
    (t[24] !== f || t[25] !== a || t[26] !== o || t[27] !== b
      ? ((w = a[b]
          ? f.formatMessage(
              {
                id: `browserSidebarDesignEditor.unlockSpacingVertical`,
                defaultMessage: `Unlock {property} vertical values`,
                description: `Accessible label for unlinking top and bottom spacing values in the design edit card`,
              },
              { property: o },
            )
          : f.formatMessage(
              {
                id: `browserSidebarDesignEditor.lockSpacingVertical`,
                defaultMessage: `Lock {property} vertical values`,
                description: `Accessible label for linking top and bottom spacing values in the design edit card`,
              },
              { property: o },
            )),
        (t[24] = f),
        (t[25] = a),
        (t[26] = o),
        (t[27] = b),
        (t[28] = w))
      : (w = t[28]),
      (x = w));
    let T;
    (t[29] !== p || t[30] !== f || t[31] !== a || t[32] !== o
      ? ((T = a[p]
          ? f.formatMessage(
              {
                id: `browserSidebarDesignEditor.unlockSpacingHorizontal`,
                defaultMessage: `Unlock {property} horizontal values`,
                description: `Accessible label for unlinking left and right spacing values in the design edit card`,
              },
              { property: o },
            )
          : f.formatMessage(
              {
                id: `browserSidebarDesignEditor.lockSpacingHorizontal`,
                defaultMessage: `Lock {property} horizontal values`,
                description: `Accessible label for linking left and right spacing values in the design edit card`,
              },
              { property: o },
            )),
        (t[29] = p),
        (t[30] = f),
        (t[31] = a),
        (t[32] = o),
        (t[33] = T))
      : (T = t[33]),
      (m = T),
      (h = `contents`));
    let E;
    t[34] === o
      ? (E = t[35])
      : ((E = (0, Q.jsx)(`span`, {
          className: `truncate`,
          children: (0, Q.jsx)(kr, { property: o }),
        })),
        (t[34] = o),
        (t[35] = E));
    let D = i && `rotate-90`,
      O;
    t[36] === D
      ? (O = t[37])
      : ((O = g(
          `icon-2xs shrink-0 text-token-text-tertiary transition-transform`,
          D,
        )),
        (t[36] = D),
        (t[37] = O));
    let k;
    (t[38] === O
      ? (k = t[39])
      : ((k = (0, Q.jsx)(Ce, { className: O })), (t[38] = O), (t[39] = k)),
      t[40] !== v || t[41] !== c || t[42] !== k || t[43] !== E
        ? ((_ = (0, Q.jsx)(`span`, {
            className: `flex min-h-7 min-w-0 items-center pr-2`,
            "data-browser-sidebar-design-scrub-label": !0,
            children: (0, Q.jsxs)(`button`, {
              "aria-label": v,
              className: `-ml-1 inline-flex min-w-0 cursor-interaction items-center gap-1 rounded px-1 py-0.5 text-left text-sm text-token-text-secondary hover:bg-token-list-hover-background`,
              type: `button`,
              onClick: c,
              children: [E, k],
            }),
          })),
          (t[40] = v),
          (t[41] = c),
          (t[42] = k),
          (t[43] = E),
          (t[44] = _))
        : (_ = t[44]),
      (y = i
        ? (0, Q.jsx)(`span`, { "aria-hidden": `true` })
        : r
          ? (0, Q.jsx)(Er, {
              declarations: n,
              property: o,
              onScrubActiveChange: u,
              onValueChange: d,
            })
          : (0, Q.jsx)(`span`, {
              className: g(
                Xn,
                `block min-h-7 w-full truncate px-3 py-1 text-right font-mono text-xs text-token-input-foreground`,
              ),
              title: s ?? e.join(` `),
              children: s ?? e.join(` `),
            })),
      (t[0] = n),
      (t[1] = f),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = c),
      (t[6] = u),
      (t[7] = d),
      (t[8] = o),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h),
      (t[12] = _),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x));
  } else
    ((p = t[9]),
      (m = t[10]),
      (h = t[11]),
      (_ = t[12]),
      (y = t[13]),
      (b = t[14]),
      (x = t[15]));
  let S;
  t[45] !== h || t[46] !== _ || t[47] !== y
    ? ((S = (0, Q.jsxs)(`div`, { className: h, children: [_, y] })),
      (t[45] = h),
      (t[46] = _),
      (t[47] = y),
      (t[48] = S))
    : (S = t[48]);
  let C;
  t[49] !== n ||
  t[50] !== p ||
  t[51] !== m ||
  t[52] !== r ||
  t[53] !== i ||
  t[54] !== a ||
  t[55] !== s ||
  t[56] !== l ||
  t[57] !== u ||
  t[58] !== d ||
  t[59] !== o ||
  t[60] !== b ||
  t[61] !== x
    ? ((C = i
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(br, {
                first: Xr(n, o, `top`),
                isEditable: r,
                isLocked: a[b],
                isNested: !0,
                second: Xr(n, o, `bottom`),
                lockLabel: x,
                onLockToggle: () => {
                  l(`vertical`);
                },
                onReset: (e) => {
                  s(e);
                },
                onValueChange: d,
                onScrubActiveChange: u,
              }),
              (0, Q.jsx)(br, {
                first: Xr(n, o, `left`),
                isEditable: r,
                isLocked: a[p],
                isNested: !0,
                second: Xr(n, o, `right`),
                lockLabel: m,
                onLockToggle: () => {
                  l(`horizontal`);
                },
                onReset: (e) => {
                  s(e);
                },
                onValueChange: d,
                onScrubActiveChange: u,
              }),
            ],
          })
        : null),
      (t[49] = n),
      (t[50] = p),
      (t[51] = m),
      (t[52] = r),
      (t[53] = i),
      (t[54] = a),
      (t[55] = s),
      (t[56] = l),
      (t[57] = u),
      (t[58] = d),
      (t[59] = o),
      (t[60] = b),
      (t[61] = x),
      (t[62] = C))
    : (C = t[62]);
  let w;
  return (
    t[63] !== S || t[64] !== C
      ? ((w = (0, Q.jsxs)(Q.Fragment, { children: [S, C] })),
        (t[63] = S),
        (t[64] = C),
        (t[65] = w))
      : (w = t[65]),
    w
  );
}
function _r(e) {
  return e.value;
}
function vr(e) {
  let t = (0, Z.c)(33),
    {
      columnGap: n,
      isEditable: r,
      isExpanded: i,
      rowGap: a,
      onDeclarationReset: o,
      onExpandToggle: s,
      onScrubActiveChange: c,
      onValueChange: l,
    } = e,
    u = v(),
    d;
  t[0] !== u || t[1] !== i
    ? ((d = i
        ? u.formatMessage({
            id: `browserSidebarDesignEditor.collapseFlexSpacing`,
            defaultMessage: `Collapse spacing`,
            description: `Accessible label for collapsing flex spacing controls in the design edit card`,
          })
        : u.formatMessage({
            id: `browserSidebarDesignEditor.expandFlexSpacing`,
            defaultMessage: `Expand spacing`,
            description: `Accessible label for expanding flex spacing controls in the design edit card`,
          })),
      (t[0] = u),
      (t[1] = i),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Q.jsx)(`span`, {
        className: `truncate`,
        children: (0, Q.jsx)(kr, { property: `gap` }),
      })),
      (t[3] = p))
    : (p = t[3]);
  let m = i && `rotate-90`,
    h;
  t[4] === m
    ? (h = t[5])
    : ((h = g(
        `icon-2xs shrink-0 text-token-text-tertiary transition-transform`,
        m,
      )),
      (t[4] = m),
      (t[5] = h));
  let _;
  t[6] === h
    ? (_ = t[7])
    : ((_ = (0, Q.jsx)(Ce, { className: h })), (t[6] = h), (t[7] = _));
  let y;
  t[8] !== f || t[9] !== s || t[10] !== _
    ? ((y = (0, Q.jsx)(`span`, {
        className: `flex min-h-7 min-w-0 items-center pr-2`,
        "data-browser-sidebar-design-scrub-label": !0,
        children: (0, Q.jsxs)(`button`, {
          "aria-label": f,
          className: `-ml-1 inline-flex min-w-0 cursor-interaction items-center gap-1 rounded px-1 py-0.5 text-left text-sm text-token-text-secondary hover:bg-token-list-hover-background`,
          type: `button`,
          onClick: s,
          children: [p, _],
        }),
      })),
      (t[8] = f),
      (t[9] = s),
      (t[10] = _),
      (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] !== n ||
  t[13] !== r ||
  t[14] !== i ||
  t[15] !== c ||
  t[16] !== l ||
  t[17] !== a
    ? ((b = i
        ? (0, Q.jsx)(`span`, { "aria-hidden": `true` })
        : r
          ? (0, Q.jsx)(Dr, {
              columnGap: n,
              rowGap: a,
              onScrubActiveChange: c,
              onValueChange: l,
            })
          : (0, Q.jsxs)(`span`, {
              className: g(
                Xn,
                `block min-h-7 w-full truncate px-3 py-1 text-right font-mono text-xs text-token-input-foreground`,
              ),
              children: [n.value, ` `, a.value],
            })),
      (t[12] = n),
      (t[13] = r),
      (t[14] = i),
      (t[15] = c),
      (t[16] = l),
      (t[17] = a),
      (t[18] = b))
    : (b = t[18]);
  let x;
  t[19] !== y || t[20] !== b
    ? ((x = (0, Q.jsxs)(`div`, { className: `contents`, children: [y, b] })),
      (t[19] = y),
      (t[20] = b),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] !== n ||
  t[23] !== r ||
  t[24] !== i ||
  t[25] !== o ||
  t[26] !== c ||
  t[27] !== l ||
  t[28] !== a
    ? ((S = i
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(mr, {
                declaration: n,
                isEditable: r,
                onReset: () => {
                  o(n.property);
                },
                onScrubActiveChange: c,
                onValueChange: (e) => {
                  l(n.property, e);
                },
              }),
              (0, Q.jsx)(mr, {
                declaration: a,
                isEditable: r,
                onReset: () => {
                  o(a.property);
                },
                onScrubActiveChange: c,
                onValueChange: (e) => {
                  l(a.property, e);
                },
              }),
            ],
          })
        : null),
      (t[22] = n),
      (t[23] = r),
      (t[24] = i),
      (t[25] = o),
      (t[26] = c),
      (t[27] = l),
      (t[28] = a),
      (t[29] = S))
    : (S = t[29]);
  let C;
  return (
    t[30] !== x || t[31] !== S
      ? ((C = (0, Q.jsxs)(Q.Fragment, { children: [x, S] })),
        (t[30] = x),
        (t[31] = S),
        (t[32] = C))
      : (C = t[32]),
    C
  );
}
function yr(e) {
  let t = (0, Z.c)(13),
    {
      height: n,
      isEditable: r,
      isLocked: i,
      width: a,
      onLockToggle: o,
      onReset: s,
      onScrubActiveChange: c,
      onValueChange: l,
    } = e,
    u = v(),
    d;
  t[0] !== u || t[1] !== i
    ? ((d = i
        ? u.formatMessage({
            id: `browserSidebarDesignEditor.unlockDimensionRatio`,
            defaultMessage: `Unlock width and height ratio`,
            description: `Accessible label for unlinking width and height controls in the design edit card`,
          })
        : u.formatMessage({
            id: `browserSidebarDesignEditor.lockDimensionRatio`,
            defaultMessage: `Lock width and height ratio`,
            description: `Accessible label for linking width and height controls in the design edit card`,
          })),
      (t[0] = u),
      (t[1] = i),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    p;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== f ||
    t[7] !== o ||
    t[8] !== s ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== a
      ? ((p = (0, Q.jsx)(br, {
          first: a,
          isEditable: r,
          isLocked: i,
          second: n,
          lockLabel: f,
          onLockToggle: o,
          onReset: s,
          onScrubActiveChange: c,
          onValueChange: l,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = f),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = a),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function br(e) {
  let t = (0, Z.c)(36),
    {
      first: n,
      isEditable: r,
      isLocked: i,
      isNested: a,
      lockLabel: o,
      second: s,
      onLockToggle: c,
      onReset: l,
      onScrubActiveChange: u,
      onValueChange: d,
    } = e,
    f = a === void 0 ? !1 : a;
  if (n == null || s == null) return null;
  let p;
  t[0] !== i || t[1] !== o || t[2] !== c
    ? ((p = (0, Q.jsx)(xr, { isLocked: i, label: o, onClick: c })),
      (t[0] = i),
      (t[1] = o),
      (t[2] = c),
      (t[3] = p))
    : (p = t[3]);
  let m;
  t[4] !== n.property || t[5] !== l
    ? ((m = () => {
        l(n.property);
      }),
      (t[4] = n.property),
      (t[5] = l),
      (t[6] = m))
    : (m = t[6]);
  let h = i && f ? s.property : void 0,
    g;
  t[7] !== n.property || t[8] !== d
    ? ((g = (e) => {
        d(n.property, e);
      }),
      (t[7] = n.property),
      (t[8] = d),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== n ||
  t[11] !== r ||
  t[12] !== f ||
  t[13] !== u ||
  t[14] !== p ||
  t[15] !== m ||
  t[16] !== h ||
  t[17] !== g
    ? ((_ = (0, Q.jsx)(mr, {
        connector: p,
        declaration: n,
        isEditable: r,
        isNested: f,
        onReset: m,
        onScrubActiveChange: u,
        scrubPeerProperty: h,
        showsRelationshipConnector: !0,
        onValueChange: g,
      })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = f),
      (t[13] = u),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h),
      (t[17] = g),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] !== l || t[20] !== s.property
    ? ((v = () => {
        l(s.property);
      }),
      (t[19] = l),
      (t[20] = s.property),
      (t[21] = v))
    : (v = t[21]);
  let y = i && f ? n.property : void 0,
    b;
  t[22] !== d || t[23] !== s.property
    ? ((b = (e) => {
        d(s.property, e);
      }),
      (t[22] = d),
      (t[23] = s.property),
      (t[24] = b))
    : (b = t[24]);
  let x;
  t[25] !== r ||
  t[26] !== f ||
  t[27] !== u ||
  t[28] !== s ||
  t[29] !== v ||
  t[30] !== y ||
  t[31] !== b
    ? ((x = (0, Q.jsx)(mr, {
        declaration: s,
        isEditable: r,
        isNested: f,
        onReset: v,
        onScrubActiveChange: u,
        scrubPeerProperty: y,
        showsRelationshipConnector: !0,
        onValueChange: b,
      })),
      (t[25] = r),
      (t[26] = f),
      (t[27] = u),
      (t[28] = s),
      (t[29] = v),
      (t[30] = y),
      (t[31] = b),
      (t[32] = x))
    : (x = t[32]);
  let S;
  return (
    t[33] !== x || t[34] !== _
      ? ((S = (0, Q.jsxs)(Q.Fragment, { children: [_, x] })),
        (t[33] = x),
        (t[34] = _),
        (t[35] = S))
      : (S = t[35]),
    S
  );
}
function xr(e) {
  let t = (0, Z.c)(8),
    { isLocked: n, label: r, onClick: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(`svg`, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute inset-0 h-full w-full text-token-text-tertiary`,
        fill: `none`,
        viewBox: `0 0 36 62`,
        children: (0, Q.jsx)(`path`, {
          d: `M28 14H2M28 14V48M28 48H2`,
          stroke: `currentColor`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          strokeWidth: `1.2`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o = n
      ? `!border-transparent !bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_86%,var(--color-token-text-link-foreground)_14%)] !text-token-text-link-foreground shadow-sm enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_80%,var(--color-token-text-link-foreground)_20%)] enabled:active:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_76%,var(--color-token-text-link-foreground)_24%)] data-[state=open]:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_80%,var(--color-token-text-link-foreground)_20%)] [&_svg]:!text-token-text-link-foreground`
      : `!border-transparent !bg-token-main-surface-primary !text-token-text-secondary shadow-sm enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_92%,var(--color-token-foreground))] enabled:hover:!text-token-foreground enabled:active:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_88%,var(--color-token-foreground)_12%)] enabled:active:!text-token-foreground data-[state=open]:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_92%,var(--color-token-foreground))] data-[state=open]:!text-token-foreground`,
    s;
  t[1] === o
    ? (s = t[2])
    : ((s = g(
        `absolute top-1/2 right-0 z-10 h-3.5 w-3.5 -translate-y-1/2 !rounded-full p-0`,
        o,
      )),
      (t[1] = o),
      (t[2] = s));
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(pt, { className: `icon-3xs` })), (t[3] = c))
    : (c = t[3]);
  let l;
  return (
    t[4] !== r || t[5] !== i || t[6] !== s
      ? ((l = (0, Q.jsxs)(`span`, {
          className: `absolute top-0 -right-1.5 z-10 h-[62px] w-9`,
          children: [
            a,
            (0, Q.jsx)(H, {
              "aria-label": r,
              className: s,
              color: `ghost`,
              size: `iconSm`,
              uniform: !0,
              onClick: i,
              children: c,
            }),
          ],
        })),
        (t[4] = r),
        (t[5] = i),
        (t[6] = s),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function Sr(e) {
  let t = (0, Z.c)(45),
    {
      declaration: n,
      dropdownPortalContainer: r,
      isEdited: i,
      onScrubActiveChange: a,
      onValueChange: o,
    } = e,
    s = v(),
    c;
  t[0] === n ? (c = t[1]) : ((c = oi(n)), (t[0] = n), (t[1] = c));
  let l = c;
  if (di(n.property)) {
    let e;
    return (
      t[2] !== n.value || t[3] !== i || t[4] !== o || t[5] !== l
        ? ((e = (0, Q.jsx)(Ar, {
            isEdited: i,
            placeholderValue: l,
            value: n.value,
            onValueChange: o,
          })),
          (t[2] = n.value),
          (t[3] = i),
          (t[4] = o),
          (t[5] = l),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  if (n.property === `opacity`) {
    let e;
    t[7] !== n.property || t[8] !== s
      ? ((e = vi(s, n.property)), (t[7] = n.property), (t[8] = s), (t[9] = e))
      : (e = t[9]);
    let r;
    return (
      t[10] !== n.property ||
      t[11] !== n.value ||
      t[12] !== i ||
      t[13] !== a ||
      t[14] !== o ||
      t[15] !== l ||
      t[16] !== e
        ? ((r = (0, Q.jsx)(Cr, {
            ariaLabel: e,
            isEdited: i,
            placeholderValue: l,
            property: n.property,
            value: n.value,
            onScrubActiveChange: a,
            onValueChange: o,
          })),
          (t[10] = n.property),
          (t[11] = n.value),
          (t[12] = i),
          (t[13] = a),
          (t[14] = o),
          (t[15] = l),
          (t[16] = e),
          (t[17] = r))
        : (r = t[17]),
      r
    );
  }
  if (fi(n)) {
    let e;
    t[18] !== n.property || t[19] !== s
      ? ((e = vi(s, n.property)),
        (t[18] = n.property),
        (t[19] = s),
        (t[20] = e))
      : (e = t[20]);
    let r;
    return (
      t[21] !== n.property ||
      t[22] !== n.value ||
      t[23] !== i ||
      t[24] !== a ||
      t[25] !== o ||
      t[26] !== l ||
      t[27] !== e
        ? ((r = (0, Q.jsx)(wr, {
            ariaLabel: e,
            isEdited: i,
            placeholderValue: l,
            property: n.property,
            value: n.value,
            onScrubActiveChange: a,
            onValueChange: o,
          })),
          (t[21] = n.property),
          (t[22] = n.value),
          (t[23] = i),
          (t[24] = a),
          (t[25] = o),
          (t[26] = l),
          (t[27] = e),
          (t[28] = r))
        : (r = t[28]),
      r
    );
  }
  let u;
  t[29] !== n.property || t[30] !== s
    ? ((u = vi(s, n.property)), (t[29] = n.property), (t[30] = s), (t[31] = u))
    : (u = t[31]);
  let d = n.property === `font-family` || n.property === `font-weight`,
    f = n.property,
    p;
  t[32] !== n || t[33] !== s
    ? ((p = Un(s, n)), (t[32] = n), (t[33] = s), (t[34] = p))
    : (p = t[34]);
  let m;
  return (
    t[35] !== n.property ||
    t[36] !== n.value ||
    t[37] !== r ||
    t[38] !== i ||
    t[39] !== o ||
    t[40] !== l ||
    t[41] !== u ||
    t[42] !== d ||
    t[43] !== p
      ? ((m = (0, Q.jsx)(Tr, {
          ariaLabel: u,
          compact: d,
          portalContainer: r,
          property: f,
          suggestions: p,
          isEdited: i,
          placeholderValue: l,
          value: n.value,
          onValueChange: o,
        })),
        (t[35] = n.property),
        (t[36] = n.value),
        (t[37] = r),
        (t[38] = i),
        (t[39] = o),
        (t[40] = l),
        (t[41] = u),
        (t[42] = d),
        (t[43] = p),
        (t[44] = m))
      : (m = t[44]),
    m
  );
}
function Cr(e) {
  let t = (0, Z.c)(15),
    {
      ariaLabel: n,
      isEdited: r,
      placeholderValue: i,
      property: a,
      value: o,
      onScrubActiveChange: s,
      onValueChange: c,
    } = e,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = g(Xn, tr, `flex min-h-7 min-w-0 items-center px-3`)), (t[0] = l))
    : (l = t[0]);
  let u = !r && `text-token-input-placeholder-foreground`,
    d;
  t[1] === u
    ? (d = t[2])
    : ((d = g(Zn, nr, `h-7 w-full truncate text-left`, u)),
      (t[1] = u),
      (t[2] = d));
  let f;
  t[3] !== i || t[4] !== o
    ? ((f = hi(o, i)), (t[3] = i), (t[4] = o), (t[5] = f))
    : (f = t[5]);
  let p;
  return (
    t[6] !== n ||
    t[7] !== s ||
    t[8] !== c ||
    t[9] !== i ||
    t[10] !== a ||
    t[11] !== d ||
    t[12] !== f ||
    t[13] !== o
      ? ((p = (0, Q.jsx)(`span`, {
          className: l,
          children: (0, Q.jsx)(Or, {
            ariaLabel: n,
            className: d,
            inputMode: `decimal`,
            max: `1`,
            min: `0`,
            property: a,
            step: `0.01`,
            title: o,
            type: `number`,
            placeholder: i,
            value: o,
            scrubMax: 1,
            scrubMin: 0,
            scrubStep: 0.01,
            scrubValue: f,
            formatScrubValue: li,
            onScrubActiveChange: s,
            onValueChange: c,
          }),
        })),
        (t[6] = n),
        (t[7] = s),
        (t[8] = c),
        (t[9] = i),
        (t[10] = a),
        (t[11] = d),
        (t[12] = f),
        (t[13] = o),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function wr(e) {
  let t = (0, Z.c)(27),
    {
      ariaLabel: n,
      isEdited: r,
      placeholderValue: i,
      property: a,
      value: o,
      onScrubActiveChange: s,
      onValueChange: c,
    } = e,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = g(Xn, tr, `flex min-h-7 min-w-0 items-center gap-1 px-3`)),
      (t[0] = l))
    : (l = t[0]);
  let u = !r && `text-token-input-placeholder-foreground`,
    d;
  t[1] === u
    ? (d = t[2])
    : ((d = g(Zn, nr, `h-7 w-full truncate text-left`, u)),
      (t[1] = u),
      (t[2] = d));
  let f;
  t[3] === o ? (f = t[4]) : ((f = ci(o) ?? ``), (t[3] = o), (t[4] = f));
  let p;
  t[5] !== i || t[6] !== a || t[7] !== o
    ? ((p = ci(i ?? ``) ?? ai(a, i ?? o) ?? void 0),
      (t[5] = i),
      (t[6] = a),
      (t[7] = o),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] !== i || t[10] !== o
    ? ((m = ii(o) ?? ii(i ?? ``) ?? 0), (t[9] = i), (t[10] = o), (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === c
    ? (h = t[13])
    : ((h = (e) => {
        c(e.length === 0 ? `` : `${e}px`);
      }),
      (t[12] = c),
      (t[13] = h));
  let _;
  t[14] !== n ||
  t[15] !== s ||
  t[16] !== a ||
  t[17] !== d ||
  t[18] !== f ||
  t[19] !== p ||
  t[20] !== m ||
  t[21] !== h ||
  t[22] !== o
    ? ((_ = (0, Q.jsx)(Or, {
        ariaLabel: n,
        className: d,
        inputMode: `decimal`,
        property: a,
        step: `any`,
        title: o,
        type: `number`,
        value: f,
        placeholder: p,
        scrubStep: 1,
        scrubValue: m,
        formatScrubValue: li,
        onScrubActiveChange: s,
        onValueChange: h,
      })),
      (t[14] = n),
      (t[15] = s),
      (t[16] = a),
      (t[17] = d),
      (t[18] = f),
      (t[19] = p),
      (t[20] = m),
      (t[21] = h),
      (t[22] = o),
      (t[23] = _))
    : (_ = t[23]);
  let v;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(`span`, {
        className: `shrink-0 font-mono text-xs text-token-text-tertiary`,
        children: (0, Q.jsx)(x, {
          id: `browserSidebarDesignEditor.pixelUnit`,
          defaultMessage: `px`,
          description: `Pixel unit label shown beside numeric design edit fields`,
        }),
      })),
      (t[24] = v))
    : (v = t[24]);
  let y;
  return (
    t[25] === _
      ? (y = t[26])
      : ((y = (0, Q.jsxs)(`span`, { className: l, children: [_, v] })),
        (t[25] = _),
        (t[26] = y)),
    y
  );
}
function Tr(e) {
  let t = (0, Z.c)(72),
    {
      ariaLabel: n,
      compact: r,
      isEdited: i,
      placeholderValue: a,
      portalContainer: o,
      property: s,
      suggestions: c,
      value: l,
      onValueChange: u,
    } = e,
    d = r === void 0 ? !1 : r,
    f;
  if (t[0] !== c || t[1] !== l) {
    let e;
    (t[3] === l
      ? (e = t[4])
      : ((e = (e) => e.value === l), (t[3] = l), (t[4] = e)),
      (f = c.find(e)),
      (t[0] = c),
      (t[1] = l),
      (t[2] = f));
  } else f = t[2];
  let p = f;
  if (s === `font-family`) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = g(Xn, er, `flex min-h-7 min-w-0 items-center overflow-hidden`)),
        (t[5] = e))
      : (e = t[5]);
    let r = !i && `text-token-input-placeholder-foreground`,
      s;
    t[6] === r
      ? (s = t[7])
      : ((s = g(Zn, `h-7 min-w-0 flex-1 truncate px-3 text-left`, r)),
        (t[6] = r),
        (t[7] = s));
    let d;
    t[8] === u
      ? (d = t[9])
      : ((d = (e) => {
          u(e.target.value);
        }),
        (t[8] = u),
        (t[9] = d));
    let f;
    t[10] !== n || t[11] !== a || t[12] !== s || t[13] !== d || t[14] !== l
      ? ((f = (0, Q.jsx)(`input`, {
          "aria-label": n,
          className: s,
          value: l,
          placeholder: a,
          title: l,
          onChange: d,
        })),
        (t[10] = n),
        (t[11] = a),
        (t[12] = s),
        (t[13] = d),
        (t[14] = l),
        (t[15] = f))
      : (f = t[15]);
    let p;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, Q.jsx)(Ce, { className: `icon-2xs rotate-90` })), (t[16] = p))
      : (p = t[16]);
    let m;
    t[17] === n
      ? (m = t[18])
      : ((m = (0, Q.jsx)(`button`, {
          "aria-label": n,
          className: `flex h-7 w-7 shrink-0 cursor-interaction items-center justify-center border-l border-token-border-light text-token-text-tertiary hover:bg-token-list-hover-background`,
          "data-browser-sidebar-design-no-drag": !0,
          type: `button`,
          children: p,
        })),
        (t[17] = n),
        (t[18] = m));
    let h;
    if (t[19] !== u || t[20] !== c || t[21] !== l) {
      let e;
      (t[23] !== u || t[24] !== l
        ? ((e = (e) =>
            (0, Q.jsx)(
              X.Item,
              {
                RightIcon: e.value === l ? Se : void 0,
                onSelect: () => {
                  u(e.value);
                },
                children: e.label ?? e.value,
              },
              `${e.label ?? e.value}-${e.value}`,
            )),
          (t[23] = u),
          (t[24] = l),
          (t[25] = e))
        : (e = t[25]),
        (h = c.map(e)),
        (t[19] = u),
        (t[20] = c),
        (t[21] = l),
        (t[22] = h));
    } else h = t[22];
    let _;
    t[26] === h
      ? (_ = t[27])
      : ((_ = (0, Q.jsx)(X.Section, {
          className: `flex max-h-[220px] flex-col overflow-y-auto`,
          children: h,
        })),
        (t[26] = h),
        (t[27] = _));
    let v;
    t[28] !== o || t[29] !== _ || t[30] !== m
      ? ((v = (0, Q.jsx)(De, {
          align: `end`,
          contentWidth: `sm`,
          portalContainer: o,
          triggerButton: m,
          children: _,
        })),
        (t[28] = o),
        (t[29] = _),
        (t[30] = m),
        (t[31] = v))
      : (v = t[31]);
    let y;
    return (
      t[32] !== v || t[33] !== f
        ? ((y = (0, Q.jsxs)(`span`, { className: e, children: [f, v] })),
          (t[32] = v),
          (t[33] = f),
          (t[34] = y))
        : (y = t[34]),
      y
    );
  }
  if (c.length === 0) {
    let e;
    t[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = g(Xn, `flex min-h-7 w-full min-w-0 items-center px-3`)),
        (t[35] = e))
      : (e = t[35]);
    let r = !i && `text-token-input-placeholder-foreground`,
      o;
    t[36] === r
      ? (o = t[37])
      : ((o = g(Zn, `h-7 w-full truncate text-left`, r)),
        (t[36] = r),
        (t[37] = o));
    let s;
    t[38] === u
      ? (s = t[39])
      : ((s = (e) => {
          u(e.target.value);
        }),
        (t[38] = u),
        (t[39] = s));
    let c;
    return (
      t[40] !== n || t[41] !== a || t[42] !== o || t[43] !== s || t[44] !== l
        ? ((c = (0, Q.jsx)(`span`, {
            className: e,
            children: (0, Q.jsx)(`input`, {
              "aria-label": n,
              className: o,
              value: l,
              placeholder: a,
              title: l,
              onChange: s,
            }),
          })),
          (t[40] = n),
          (t[41] = a),
          (t[42] = o),
          (t[43] = s),
          (t[44] = l),
          (t[45] = c))
        : (c = t[45]),
      c
    );
  }
  let m = d ? tr : er,
    h;
  t[46] === m
    ? (h = t[47])
    : ((h = g(
        Xn,
        m,
        `flex min-h-7 min-w-0 cursor-interaction items-center gap-2 overflow-hidden px-3 text-left`,
      )),
      (t[46] = m),
      (t[47] = h));
  let _ = p?.label ?? (l.length === 0 ? a : l),
    v = i
      ? `text-token-input-foreground`
      : `text-token-input-placeholder-foreground`,
    y;
  t[48] === v
    ? (y = t[49])
    : ((y = g(`min-w-0 flex-1 truncate font-mono text-xs`, v)),
      (t[48] = v),
      (t[49] = y));
  let b = p?.label ?? (l || a),
    x;
  t[50] !== y || t[51] !== b
    ? ((x = (0, Q.jsx)(`span`, { className: y, children: b })),
      (t[50] = y),
      (t[51] = b),
      (t[52] = x))
    : (x = t[52]);
  let S;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(Ce, {
        className: `icon-2xs shrink-0 rotate-90 text-token-text-tertiary`,
      })),
      (t[53] = S))
    : (S = t[53]);
  let C;
  t[54] !== n || t[55] !== h || t[56] !== _ || t[57] !== x
    ? ((C = (0, Q.jsxs)(`button`, {
        "aria-label": n,
        className: h,
        title: _,
        type: `button`,
        children: [x, S],
      })),
      (t[54] = n),
      (t[55] = h),
      (t[56] = _),
      (t[57] = x),
      (t[58] = C))
    : (C = t[58]);
  let w;
  if (t[59] !== u || t[60] !== c || t[61] !== l) {
    let e;
    (t[63] !== u || t[64] !== l
      ? ((e = (e) =>
          (0, Q.jsx)(
            X.Item,
            {
              RightIcon: e.value === l ? Se : void 0,
              onSelect: () => {
                u(e.value);
              },
              children: e.label ?? e.value,
            },
            `${e.label ?? e.value}-${e.value}`,
          )),
        (t[63] = u),
        (t[64] = l),
        (t[65] = e))
      : (e = t[65]),
      (w = c.map(e)),
      (t[59] = u),
      (t[60] = c),
      (t[61] = l),
      (t[62] = w));
  } else w = t[62];
  let T;
  t[66] === w
    ? (T = t[67])
    : ((T = (0, Q.jsx)(X.Section, {
        className: `flex max-h-[220px] flex-col overflow-y-auto`,
        children: w,
      })),
      (t[66] = w),
      (t[67] = T));
  let E;
  return (
    t[68] !== o || t[69] !== C || t[70] !== T
      ? ((E = (0, Q.jsx)(De, {
          align: `end`,
          contentWidth: `sm`,
          portalContainer: o,
          triggerButton: C,
          children: T,
        })),
        (t[68] = o),
        (t[69] = C),
        (t[70] = T),
        (t[71] = E))
      : (E = t[71]),
    E
  );
}
function Er(e) {
  let t = (0, Z.c)(9),
    {
      declarations: n,
      property: r,
      onScrubActiveChange: i,
      onValueChange: a,
    } = e,
    o = v(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = g(
        Xn,
        `-ml-6 grid min-h-7 w-[calc(100%+1.5rem)] grid-cols-4 overflow-hidden`,
      )),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== n || t[2] !== o || t[3] !== i || t[4] !== a || t[5] !== r
    ? ((c = Jn.map((e, t) => {
        let s = Xr(n, r, e);
        if (s == null)
          return (0, Q.jsx)(
            `span`,
            {
              className: g(
                `flex min-h-7 items-center justify-center font-mono text-xs text-token-input-placeholder-foreground`,
                t > 0 && `border-l border-token-border-light`,
              ),
            },
            `${r}-${e}`,
          );
        let c = ci(s.value),
          l = s.value.length === 0 || c != null;
        return (0, Q.jsx)(
          Or,
          {
            ariaLabel: vi(o, s.property),
            className: g(
              Zn,
              l && nr,
              `min-h-7 w-full px-1 text-center`,
              t > 0 && `border-l border-token-border-light`,
              s.value === s.previousValue &&
                `text-token-input-placeholder-foreground`,
            ),
            inputMode: l ? `decimal` : void 0,
            property: s.property,
            formatScrubValue: li,
            scrubStep: l ? 1 : void 0,
            scrubValue: l
              ? (ii(s.value) ?? ii(s.placeholderValue ?? ``) ?? 0)
              : null,
            step: l ? `any` : void 0,
            title: s.value,
            type: l ? `number` : void 0,
            placeholder:
              ci(s.placeholderValue ?? ``) ??
              ai(s.property, s.placeholderValue ?? s.value) ??
              void 0,
            value: l ? (c ?? ``) : s.value,
            onScrubActiveChange: i,
            onValueChange: (e) => {
              a(s.property, l && e.length > 0 ? `${e}px` : e);
            },
          },
          s.property,
        );
      })),
      (t[1] = n),
      (t[2] = o),
      (t[3] = i),
      (t[4] = a),
      (t[5] = r),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] === c
      ? (l = t[8])
      : ((l = (0, Q.jsx)(`span`, {
          className: s,
          "data-browser-sidebar-design-scrub-value-cell": !0,
          children: c,
        })),
        (t[7] = c),
        (t[8] = l)),
    l
  );
}
function Dr(e) {
  let t = (0, Z.c)(7),
    { columnGap: n, rowGap: r, onScrubActiveChange: i, onValueChange: a } = e,
    o = v(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = g(Xn, `grid min-h-7 w-full grid-cols-2 overflow-hidden`)),
      (t[0] = s))
    : (s = t[0]);
  let c;
  return (
    t[1] !== n || t[2] !== o || t[3] !== i || t[4] !== a || t[5] !== r
      ? ((c = (0, Q.jsx)(`span`, {
          className: s,
          "data-browser-sidebar-design-scrub-value-cell": !0,
          children: [n, r].map((e, t) => {
            let n = ci(e.value),
              r =
                e.value.length === 0 ||
                n != null ||
                ai(e.property, e.value) != null;
            return (0, Q.jsx)(
              Or,
              {
                ariaLabel: vi(o, e.property),
                className: g(
                  Zn,
                  r && nr,
                  `min-h-7 w-full px-1 text-center`,
                  t > 0 && `border-l border-token-border-light`,
                  e.value === e.previousValue &&
                    `text-token-input-placeholder-foreground`,
                ),
                formatScrubValue: li,
                inputMode: r ? `decimal` : void 0,
                property: e.property,
                scrubStep: r ? 1 : void 0,
                scrubValue: r
                  ? (ii(e.value) ??
                    ii(e.placeholderValue ?? ``) ??
                    Number(
                      ai(e.property, e.placeholderValue ?? e.value) ?? `0`,
                    ))
                  : null,
                step: r ? `any` : void 0,
                title: e.value,
                type: r ? `number` : void 0,
                placeholder:
                  ci(e.placeholderValue ?? ``) ??
                  ai(e.property, e.placeholderValue ?? e.value) ??
                  void 0,
                value: r ? (n ?? ``) : e.value,
                onScrubActiveChange: i,
                onValueChange: (t) => {
                  a(e.property, r && t.length > 0 ? `${t}px` : t);
                },
              },
              e.property,
            );
          }),
        })),
        (t[1] = n),
        (t[2] = o),
        (t[3] = i),
        (t[4] = a),
        (t[5] = r),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Or(e) {
  let t = (0, Z.c)(42),
    {
      ariaLabel: n,
      className: r,
      formatScrubValue: i,
      inputMode: a,
      max: o,
      min: s,
      property: c,
      scrubMax: l,
      scrubMin: u,
      scrubStep: d,
      scrubValue: f,
      step: p,
      title: m,
      type: h,
      placeholder: _,
      value: v,
      onScrubActiveChange: y,
      onValueChange: b,
    } = e,
    x = (0, $.useRef)(null),
    S = (0, $.useRef)(!1),
    C;
  t[0] !== d || t[1] !== f || t[2] !== h
    ? ((C = (e) => {
        if (
          h !== `number` ||
          d == null ||
          f == null ||
          !Number.isFinite(f) ||
          e.button !== 0 ||
          !e.isPrimary ||
          e.pointerType === `touch`
        )
          return;
        let { body: t, documentElement: n } = e.currentTarget.ownerDocument,
          r = t.style,
          i = n.style,
          a = e.currentTarget.closest(
            `[data-browser-sidebar-design-scroll-container]`,
          ),
          o = e.currentTarget.style.cursor,
          s = r.cursor,
          c = r.overscrollBehavior,
          l = i.overscrollBehavior,
          u = a?.style.overflowY ?? ``,
          p = a?.style.overscrollBehavior ?? ``;
        (e.preventDefault(),
          e.currentTarget.focus(),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          (e.currentTarget.dataset.scrubbing = `true`),
          (e.currentTarget.style.cursor = rr),
          (r.cursor = rr),
          (r.overscrollBehavior = `none`),
          (i.overscrollBehavior = `none`),
          a != null &&
            ((a.style.overflowY = `hidden`),
            (a.style.overscrollBehavior = `none`)),
          (x.current = {
            hasScrubbed: !1,
            lastValue: f,
            pointerId: e.pointerId,
            previousBodyCursor: s,
            previousBodyOverscrollBehavior: c,
            previousBodyUserSelect: r.userSelect,
            previousDocumentOverscrollBehavior: l,
            previousScrollContainerOverflowY: u,
            previousScrollContainerOverscrollBehavior: p,
            previousTargetCursor: o,
            scrollContainer: a,
            startClientY: e.clientY,
            startValue: f,
          }));
      }),
      (t[0] = d),
      (t[1] = f),
      (t[2] = h),
      (t[3] = C))
    : (C = t[3]);
  let w = C,
    T;
  t[4] !== i ||
  t[5] !== y ||
  t[6] !== b ||
  t[7] !== c ||
  t[8] !== l ||
  t[9] !== u ||
  t[10] !== d
    ? ((T = (e) => {
        let t = x.current;
        if (t == null || t.pointerId !== e.pointerId || d == null || i == null)
          return;
        let n = t.startClientY - e.clientY;
        if ((e.preventDefault(), !t.hasScrubbed && Math.abs(n) < ar)) return;
        if (!t.hasScrubbed) {
          let n = e.currentTarget.ownerDocument.body.style;
          ((n.cursor = rr),
            (n.userSelect = `none`),
            (t.hasScrubbed = !0),
            y?.(c, e.currentTarget));
        }
        let r = Math.trunc(n / ir),
          a = ui(t.startValue + r * d, u, l);
        if (a === t.lastValue) {
          e.preventDefault();
          return;
        }
        ((t.lastValue = a), e.preventDefault(), b(i(a)));
      }),
      (t[4] = i),
      (t[5] = y),
      (t[6] = b),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = T))
    : (T = t[11]);
  let E = T,
    D;
  t[12] === y
    ? (D = t[13])
    : ((D = (e) => {
        let t = x.current;
        if (t != null) {
          if (e != null) {
            let n = e.ownerDocument.body.style,
              r = e.ownerDocument.documentElement.style;
            ((n.cursor = t.previousBodyCursor),
              (n.overscrollBehavior = t.previousBodyOverscrollBehavior),
              (n.userSelect = t.previousBodyUserSelect),
              (r.overscrollBehavior = t.previousDocumentOverscrollBehavior),
              (e.style.cursor = t.previousTargetCursor),
              delete e.dataset.scrubbing);
          }
          (t.scrollContainer != null &&
            ((t.scrollContainer.style.overflowY =
              t.previousScrollContainerOverflowY),
            (t.scrollContainer.style.overscrollBehavior =
              t.previousScrollContainerOverscrollBehavior)),
            t.hasScrubbed && ((S.current = !0), y?.(null, e)),
            (x.current = null));
        }
      }),
      (t[12] = y),
      (t[13] = D));
  let O = D,
    k;
  t[14] === O
    ? (k = t[15])
    : ((k = (e) => {
        let t = x.current;
        t == null ||
          t.pointerId !== e.pointerId ||
          (e.currentTarget.hasPointerCapture?.(e.pointerId) === !0 &&
            e.currentTarget.releasePointerCapture(e.pointerId),
          t.hasScrubbed && e.preventDefault(),
          O(e.currentTarget));
      }),
      (t[14] = O),
      (t[15] = k));
  let A = k,
    j;
  t[16] === O
    ? (j = t[17])
    : ((j = (e) => {
        O(e.currentTarget);
      }),
      (t[16] = O),
      (t[17] = j));
  let M = j,
    N;
  t[18] === h
    ? (N = t[19])
    : ((N = (e) => {
        h !== `number` ||
          e.currentTarget.ownerDocument.activeElement !== e.currentTarget ||
          e.currentTarget.blur();
      }),
      (t[18] = h),
      (t[19] = N));
  let P = N,
    F;
  t[20] === r
    ? (F = t[21])
    : ((F = g(
        r,
        `touch-none cursor-text hover:cursor-ns-resize active:cursor-ns-resize`,
      )),
      (t[20] = r),
      (t[21] = F));
  let I;
  t[22] === b
    ? (I = t[23])
    : ((I = (e) => {
        b(e.target.value);
      }),
      (t[22] = b),
      (t[23] = I));
  let L;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => {
        S.current && ((S.current = !1), e.preventDefault());
      }),
      (t[24] = L))
    : (L = t[24]);
  let R;
  return (
    t[25] !== n ||
    t[26] !== M ||
    t[27] !== w ||
    t[28] !== A ||
    t[29] !== E ||
    t[30] !== P ||
    t[31] !== a ||
    t[32] !== o ||
    t[33] !== s ||
    t[34] !== _ ||
    t[35] !== p ||
    t[36] !== F ||
    t[37] !== I ||
    t[38] !== m ||
    t[39] !== h ||
    t[40] !== v
      ? ((R = (0, Q.jsx)(`input`, {
          "aria-label": n,
          className: F,
          inputMode: a,
          max: o,
          min: s,
          step: p,
          title: m,
          type: h,
          placeholder: _,
          value: v,
          onChange: I,
          onClick: L,
          onLostPointerCapture: M,
          onPointerCancel: A,
          onPointerDown: w,
          onPointerMove: E,
          onPointerUp: A,
          onWheel: P,
        })),
        (t[25] = n),
        (t[26] = M),
        (t[27] = w),
        (t[28] = A),
        (t[29] = E),
        (t[30] = P),
        (t[31] = a),
        (t[32] = o),
        (t[33] = s),
        (t[34] = _),
        (t[35] = p),
        (t[36] = F),
        (t[37] = I),
        (t[38] = m),
        (t[39] = h),
        (t[40] = v),
        (t[41] = R))
      : (R = t[41]),
    R
  );
}
function kr(e) {
  let t = (0, Z.c)(26),
    { property: n, spacingAxisOnly: r } = e;
  if (r !== void 0 && r) {
    if (n === `margin-top` || n === `padding-top`) {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.topSpacingProperty`,
              defaultMessage: `Top`,
              description: `Compact property label for top margin or padding in the in-app browser design edit card`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    if (n === `margin-bottom` || n === `padding-bottom`) {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.bottomSpacingProperty`,
              defaultMessage: `Bottom`,
              description: `Compact property label for bottom margin or padding in the in-app browser design edit card`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    if (n === `margin-left` || n === `padding-left`) {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.leftSpacingProperty`,
              defaultMessage: `Left`,
              description: `Compact property label for left margin or padding in the in-app browser design edit card`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    if (n === `margin-right` || n === `padding-right`) {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.rightSpacingProperty`,
              defaultMessage: `Right`,
              description: `Compact property label for right margin or padding in the in-app browser design edit card`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
  switch (n) {
    case `color`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.textColorProperty`,
              defaultMessage: `Text color`,
              description: `Property label for text color in the in-app browser design edit card`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `background-color`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.backgroundProperty`,
              defaultMessage: `Background`,
              description: `Property label for background color in the in-app browser design edit card`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `font-family`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.fontProperty`,
              defaultMessage: `Font`,
              description: `Property label for font family in the in-app browser design edit card`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `font-size`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.fontSizeProperty`,
              defaultMessage: `Font size`,
              description: `Property label for font size in the in-app browser design edit card`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `font-weight`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.fontWeightProperty`,
              defaultMessage: `Font weight`,
              description: `Property label for font weight in the in-app browser design edit card`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `border-radius`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.borderRadiusProperty`,
              defaultMessage: `Border radius`,
              description: `Property label for border radius in the in-app browser design edit card`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `border-color`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.borderColorProperty`,
              defaultMessage: `Border color`,
              description: `Property label for border color in the in-app browser design edit card`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `border-width`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.borderWidthProperty`,
              defaultMessage: `Border width`,
              description: `Property label for border width in the in-app browser design edit card`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    case `width`: {
      let e;
      return (
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.widthProperty`,
              defaultMessage: `Width`,
              description: `Property label for width in the in-app browser design edit card`,
            })),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
    case `height`: {
      let e;
      return (
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.heightProperty`,
              defaultMessage: `Height`,
              description: `Property label for height in the in-app browser design edit card`,
            })),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
    case `flex-direction`: {
      let e;
      return (
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.flexDirectionProperty`,
              defaultMessage: `Layout direction`,
              description: `Property label for flex direction in the in-app browser design edit card`,
            })),
            (t[14] = e))
          : (e = t[14]),
        e
      );
    }
    case `justify-content`: {
      let e;
      return (
        t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.justifyContentProperty`,
              defaultMessage: `Distribution`,
              description: `Property label for justify-content in the in-app browser design edit card`,
            })),
            (t[15] = e))
          : (e = t[15]),
        e
      );
    }
    case `align-items`: {
      let e;
      return (
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.alignItemsProperty`,
              defaultMessage: `Alignment`,
              description: `Property label for align-items in the in-app browser design edit card`,
            })),
            (t[16] = e))
          : (e = t[16]),
        e
      );
    }
    case `gap`: {
      let e;
      return (
        t[17] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.gapProperty`,
              defaultMessage: `Spacing`,
              description: `Property label for flex gap in the in-app browser design edit card`,
            })),
            (t[17] = e))
          : (e = t[17]),
        e
      );
    }
    case `row-gap`: {
      let e;
      return (
        t[18] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.rowGapProperty`,
              defaultMessage: `Vertical`,
              description: `Property label for row gap in the in-app browser design edit card`,
            })),
            (t[18] = e))
          : (e = t[18]),
        e
      );
    }
    case `column-gap`: {
      let e;
      return (
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.columnGapProperty`,
              defaultMessage: `Horizontal`,
              description: `Property label for column gap in the in-app browser design edit card`,
            })),
            (t[19] = e))
          : (e = t[19]),
        e
      );
    }
    case `padding`: {
      let e;
      return (
        t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.paddingProperty`,
              defaultMessage: `Padding`,
              description: `Property label for padding in the in-app browser design edit card`,
            })),
            (t[20] = e))
          : (e = t[20]),
        e
      );
    }
    case `margin`: {
      let e;
      return (
        t[21] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(x, {
              id: `browserSidebarDesignEditor.marginProperty`,
              defaultMessage: `Margin`,
              description: `Property label for margin in the in-app browser design edit card`,
            })),
            (t[21] = e))
          : (e = t[21]),
        e
      );
    }
    default: {
      let e;
      t[22] === n ? (e = t[23]) : ((e = _i(n)), (t[22] = n), (t[23] = e));
      let r;
      return (
        t[24] === e
          ? (r = t[25])
          : ((r = (0, Q.jsx)(Q.Fragment, { children: e })),
            (t[24] = e),
            (t[25] = r)),
        r
      );
    }
  }
}
function Ar(e) {
  let t = (0, Z.c)(21),
    { isEdited: n, placeholderValue: r, value: i, onValueChange: a } = e,
    o,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = g(Xn, $n, `flex min-h-7 min-w-0 items-center gap-2 px-2`)),
      (s = g(
        Qn,
        `h-5 w-5 shrink-0 cursor-interaction overflow-hidden rounded-md border border-token-border bg-transparent p-0`,
      )),
      (t[0] = o),
      (t[1] = s))
    : ((o = t[0]), (s = t[1]));
  let c = i || r,
    l;
  t[2] === c ? (l = t[3]) : ((l = gi(c)), (t[2] = c), (t[3] = l));
  let u;
  t[4] === a
    ? (u = t[5])
    : ((u = (e) => {
        a(e.target.value);
      }),
      (t[4] = a),
      (t[5] = u));
  let d;
  t[6] !== l || t[7] !== u
    ? ((d = (0, Q.jsx)(`input`, {
        className: s,
        type: `color`,
        value: l,
        onChange: u,
      })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f = !n && `text-token-input-placeholder-foreground`,
    p;
  t[9] === f
    ? (p = t[10])
    : ((p = g(Zn, `h-7 w-full truncate text-left`, f)),
      (t[9] = f),
      (t[10] = p));
  let m;
  t[11] === a
    ? (m = t[12])
    : ((m = (e) => {
        a(e.target.value);
      }),
      (t[11] = a),
      (t[12] = m));
  let h;
  t[13] !== r || t[14] !== p || t[15] !== m || t[16] !== i
    ? ((h = (0, Q.jsx)(`input`, {
        className: p,
        value: i,
        placeholder: r,
        title: i,
        onChange: m,
      })),
      (t[13] = r),
      (t[14] = p),
      (t[15] = m),
      (t[16] = i),
      (t[17] = h))
    : (h = t[17]);
  let _;
  return (
    t[18] !== h || t[19] !== d
      ? ((_ = (0, Q.jsxs)(`span`, { className: o, children: [d, h] })),
        (t[18] = h),
        (t[19] = d),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
function jr(e, t, n) {
  return {
    ...e,
    declarations: e.declarations.map((e) =>
      e.property === t ? { ...e, ...n } : e,
    ),
  };
}
function Mr(e, t) {
  return {
    ...e,
    declarations: e.declarations.map((e) => {
      let n = t.find((t) => t.property === e.property);
      return n == null ? e : { ...e, value: n.value };
    }),
  };
}
function Nr(e, t, n) {
  let [r, i] = ni(t, n),
    a = e.declarations.find((e) => e.property === r);
  return a == null
    ? e
    : Mr(e, [
        { property: r, value: a.value },
        { property: i, value: a.value },
      ]);
}
function Pr(e, t, n, r) {
  let i = ri(t, n);
  return i == null
    ? jr(e, n, { value: r })
    : Mr(e, [
        { property: n, value: r },
        { property: i, value: r },
      ]);
}
function Fr(e, t, n) {
  let r = e.declarations.find((e) => e.property === t),
    i = t === `width` ? `height` : `width`,
    a = e.declarations.find((e) => e.property === i),
    o = r == null ? null : ii(r.value),
    s = a == null ? null : ii(a.value),
    c = ii(n);
  return o == null || s == null || c == null || o === 0
    ? jr(e, t, { value: n })
    : Mr(e, [
        { property: t, value: n },
        { property: i, value: `${li((s / o) * c)}px` },
      ]);
}
function Ir(e, t) {
  let n = Br(e);
  return n == null
    ? e
    : { ...e, text: { previousValue: n.previousValue, value: t } };
}
function Lr(e) {
  let t = Br(e);
  return t == null ? e : Ir(e, t.previousValue);
}
function Rr(e, t) {
  let n = e.declarations.find((e) => e.property === t);
  return n == null ? e : jr(e, t, { value: n.previousValue });
}
function zr(e, t, n) {
  let r = e.declarations.find((e) => e.property === n),
    i = ri(t, n);
  return r == null || i == null
    ? Rr(e, n)
    : Mr(e, [
        { property: n, value: r.previousValue },
        { property: i, value: r.previousValue },
      ]);
}
function Br(e) {
  return e.text ?? null;
}
function Vr(e) {
  let t = e.indexOf(`:`);
  return (t > 0 ? e.slice(0, t) : e).trim();
}
function Hr(e) {
  let t = new Map(e.map((e) => [e.property, e])),
    n = [],
    r = new Set();
  for (let i of e) {
    if (r.has(i.property)) continue;
    if (mi(i.property)) {
      let e = t.get(`row-gap`),
        i = t.get(`column-gap`);
      if (e != null && i != null) {
        (r.add(`gap`),
          r.add(e.property),
          r.add(i.property),
          n.push({ kind: `flex-spacing`, columnGap: i, rowGap: e }));
        continue;
      }
    }
    let e = Yr(i.property);
    if (e != null) {
      let i = [];
      for (let n of qn) {
        let a = t.get(`${e}-${n}`);
        a != null && (i.push(a), r.add(a.property));
      }
      n.push({ kind: `spacing`, declarations: i, property: e });
      continue;
    }
    if (i.property === `width` || i.property === `height`) {
      let e = t.get(`width`),
        i = t.get(`height`);
      if (e != null && i != null) {
        (r.add(e.property),
          r.add(i.property),
          n.push({ kind: `dimensions`, height: i, width: e }));
        continue;
      }
    }
    (r.add(i.property), n.push({ kind: `declaration`, declaration: i }));
  }
  return n;
}
function Ur(e) {
  switch (e.kind) {
    case `declaration`:
      return e.declaration.property;
    case `dimensions`:
      return `dimensions`;
    case `spacing`:
      return e.property;
    case `flex-spacing`:
      return `flex-spacing`;
  }
}
function Wr(e) {
  return (
    e?.kind === `flex-spacing` ||
    (e?.kind === `declaration` &&
      (e.declaration.property === `align-items` ||
        e.declaration.property === `flex-direction` ||
        e.declaration.property === `justify-content`))
  );
}
function Gr(e) {
  let t = [];
  for (let n of [`color`, `font`, `border`, `layout`, `other`]) {
    let r = e.filter((e) => Kr(e) === n).sort(qr);
    r.length > 0 && t.push({ id: n, sections: r });
  }
  return t;
}
function Kr(e) {
  return e.kind === `dimensions` ||
    e.kind === `flex-spacing` ||
    e.kind === `spacing`
    ? `layout`
    : e.declaration.property === `color` ||
        e.declaration.property === `background-color` ||
        e.declaration.property === `opacity`
      ? `color`
      : e.declaration.property.startsWith(`font-`)
        ? `font`
        : e.declaration.property.startsWith(`border-`)
          ? `border`
          : e.declaration.property === `align-items` ||
              e.declaration.property === `flex-direction` ||
              e.declaration.property === `justify-content`
            ? `layout`
            : `other`;
}
function qr(e, t) {
  return Jr(e) - Jr(t);
}
function Jr(e) {
  if (e.kind === `dimensions`) return 0;
  if (e.kind === `spacing`) return e.property === `padding` ? 1 : 2;
  if (e.kind === `flex-spacing`) return Yn.indexOf(`gap`);
  let t = Yn.indexOf(e.declaration.property);
  return t < 0 ? Yn.length : t;
}
function Yr(e) {
  return e.startsWith(`padding-`)
    ? `padding`
    : e.startsWith(`margin-`)
      ? `margin`
      : null;
}
function Xr(e, t, n) {
  return e.find((e) => e.property === `${t}-${n}`) ?? null;
}
function Zr(e, t) {
  return `${e}-${t}`;
}
function Qr(e) {
  return {
    dimensions: !1,
    "margin-horizontal": $r(e.declarations, `margin`, `horizontal`),
    "margin-vertical": $r(e.declarations, `margin`, `vertical`),
    "padding-horizontal": $r(e.declarations, `padding`, `horizontal`),
    "padding-vertical": $r(e.declarations, `padding`, `vertical`),
  };
}
function $r(e, t, n) {
  let [r, i] = ni(t, n),
    a = e.find((e) => e.property === r),
    o = e.find((e) => e.property === i);
  return (
    a != null &&
    o != null &&
    a.value.trim() !== `0` &&
    ii(a.value) !== 0 &&
    ei(a.value, o.value)
  );
}
function ei(e, t) {
  if (e.trim() === t.trim()) return !0;
  let n = ii(e),
    r = ii(t);
  return n != null && r != null && n === r;
}
function ti(e, t, n) {
  return n === `${t}-top` || n === `${t}-bottom`
    ? e[Zr(t, `vertical`)]
    : n === `${t}-left` || n === `${t}-right`
      ? e[Zr(t, `horizontal`)]
      : !1;
}
function ni(e, t) {
  return t === `vertical`
    ? [`${e}-top`, `${e}-bottom`]
    : [`${e}-left`, `${e}-right`];
}
function ri(e, t) {
  return t === `${e}-top`
    ? `${e}-bottom`
    : t === `${e}-bottom`
      ? `${e}-top`
      : t === `${e}-left`
        ? `${e}-right`
        : t === `${e}-right`
          ? `${e}-left`
          : null;
}
function ii(e) {
  let t = ci(e);
  return t == null ? null : Number(t);
}
function ai(e, t) {
  return mi(e) && t.trim() === `normal` ? `0` : null;
}
function oi(e) {
  return (
    e.placeholderValue ??
    (e.value.length === 0 && e.previousValue.length > 0
      ? e.previousValue
      : void 0)
  );
}
function si(e) {
  if (e.trim().length === 0) return 0;
  let t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function ci(e) {
  return e.trim().match(/^(-?\d+(?:\.\d+)?)px$/)?.[1] ?? null;
}
function li(e) {
  return Number.isInteger(e) ? String(e) : String(Number(e.toFixed(2)));
}
function ui(e, t, n) {
  return t != null && e < t ? t : n != null && e > n ? n : e;
}
function di(e) {
  return e === `color` || e.endsWith(`-color`);
}
function fi(e) {
  return (
    pi(e.property) &&
    (e.value.length === 0 ||
      ci(e.placeholderValue ?? ``) != null ||
      ci(e.value) != null ||
      ai(e.property, e.value) != null ||
      ai(e.property, e.placeholderValue ?? ``) != null)
  );
}
function pi(e) {
  return (
    e === `font-size` ||
    e === `border-radius` ||
    e === `border-width` ||
    e === `column-gap` ||
    e === `gap` ||
    e === `height` ||
    e === `row-gap` ||
    e === `width` ||
    e.startsWith(`margin-`) ||
    e.startsWith(`padding-`)
  );
}
function mi(e) {
  return e === `column-gap` || e === `gap` || e === `row-gap`;
}
function hi(e, t) {
  return e.trim().length === 0 && t != null ? si(t) : si(e);
}
function gi(e) {
  let t = e?.trim() ?? ``,
    n = t.match(/^#([\da-f]{3}|[\da-f]{6})$/i);
  if (n != null) {
    let e = n[1];
    return e.length === 3
      ? `#${e
          .split(``)
          .map((e) => `${e}${e}`)
          .join(``)}`
      : `#${e}`;
  }
  let r = t.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);
  return r == null
    ? `#000000`
    : `#${r
        .slice(1, 4)
        .map((e) => Math.min(255, Number(e)).toString(16).padStart(2, `0`))
        .join(``)}`;
}
function _i(e) {
  let t = e.replaceAll(`-`, ` `);
  return `${t.charAt(0).toUpperCase()}${t.slice(1)}`;
}
function vi(e, t) {
  switch (t) {
    case `color`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.textColorProperty`,
        defaultMessage: `Text color`,
        description: `Property label for text color in the in-app browser design edit card`,
      });
    case `background-color`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.backgroundProperty`,
        defaultMessage: `Background`,
        description: `Property label for background color in the in-app browser design edit card`,
      });
    case `font-family`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.fontProperty`,
        defaultMessage: `Font`,
        description: `Property label for font family in the in-app browser design edit card`,
      });
    case `font-size`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.fontSizeProperty`,
        defaultMessage: `Font size`,
        description: `Property label for font size in the in-app browser design edit card`,
      });
    case `font-weight`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.fontWeightProperty`,
        defaultMessage: `Font weight`,
        description: `Property label for font weight in the in-app browser design edit card`,
      });
    case `border-radius`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.borderRadiusProperty`,
        defaultMessage: `Border radius`,
        description: `Property label for border radius in the in-app browser design edit card`,
      });
    case `border-color`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.borderColorProperty`,
        defaultMessage: `Border color`,
        description: `Property label for border color in the in-app browser design edit card`,
      });
    case `border-width`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.borderWidthProperty`,
        defaultMessage: `Border width`,
        description: `Property label for border width in the in-app browser design edit card`,
      });
    case `width`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.widthProperty`,
        defaultMessage: `Width`,
        description: `Property label for width in the in-app browser design edit card`,
      });
    case `height`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.heightProperty`,
        defaultMessage: `Height`,
        description: `Property label for height in the in-app browser design edit card`,
      });
    case `flex-direction`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.flexDirectionProperty`,
        defaultMessage: `Layout direction`,
        description: `Property label for flex direction in the in-app browser design edit card`,
      });
    case `justify-content`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.justifyContentProperty`,
        defaultMessage: `Distribution`,
        description: `Property label for justify-content in the in-app browser design edit card`,
      });
    case `align-items`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.alignItemsProperty`,
        defaultMessage: `Alignment`,
        description: `Property label for align-items in the in-app browser design edit card`,
      });
    case `gap`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.gapProperty`,
        defaultMessage: `Spacing`,
        description: `Property label for flex gap in the in-app browser design edit card`,
      });
    case `row-gap`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.rowGapProperty`,
        defaultMessage: `Vertical`,
        description: `Property label for row gap in the in-app browser design edit card`,
      });
    case `column-gap`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.columnGapProperty`,
        defaultMessage: `Horizontal`,
        description: `Property label for column gap in the in-app browser design edit card`,
      });
    case `padding`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.paddingProperty`,
        defaultMessage: `Padding`,
        description: `Property label for padding in the in-app browser design edit card`,
      });
    case `margin`:
      return e.formatMessage({
        id: `browserSidebarDesignEditor.marginProperty`,
        defaultMessage: `Margin`,
        description: `Property label for margin in the in-app browser design edit card`,
      });
    default:
      return _i(t);
  }
}
function yi({
  baselineDesignGroup: e,
  commentText: t,
  designEditorState: n,
  isDesignSubmissionMode: r,
}) {
  let i = t.trim();
  return {
    designDraft: !r || n == null ? null : bi(n, e, i),
    hasCommentText: i.length > 0,
    trimmedCommentText: i,
  };
}
function bi(e, t, n) {
  let r = new Map((t?.declarations ?? []).map((e) => [e.property, e])),
    i = e.declarations.flatMap((e) => {
      let t = r.get(e.property);
      return t == null
        ? e.value === e.previousValue
          ? []
          : [e]
        : e.value === t.previousValue
          ? []
          : [{ ...t, value: e.value }];
    }),
    a = Ci(e.text, t?.text);
  if (i.length === 0 && a == null) return null;
  let o = new Date().toISOString();
  return {
    id: e.id,
    anchor: e.anchor,
    ...(n.length === 0 ? {} : { comment: n }),
    ...(a == null ? {} : { text: a }),
    declarations: i,
    draftAttribute: e.draftAttribute,
    ...(e.markerViewportPoint == null
      ? {}
      : { markerViewportPoint: e.markerViewportPoint }),
    provenance: wi(i, e.provenance, t?.provenance ?? []),
    selector: e.selector,
    targetLabel: e.targetLabel,
    ...(e.themeVariant == null ? {} : { themeVariant: e.themeVariant }),
    ...(e.viewportSize == null ? {} : { viewportSize: e.viewportSize }),
    createdAt: t?.createdAt ?? o,
    updatedAt: o,
    status: t?.status ?? `current`,
  };
}
function xi(e, t) {
  return e == null || t == null
    ? e === t
    : (e.comment ?? ``) !== (t.comment ?? ``) ||
        !Si(e.text, t.text) ||
        e.declarations.length !== t.declarations.length
      ? !1
      : e.declarations.every((e, n) => {
          let r = t.declarations[n];
          return (
            r != null &&
            e.property === r.property &&
            e.previousValue === r.previousValue &&
            e.value === r.value
          );
        });
}
function Si(e, t) {
  return e == null || t == null
    ? e === t
    : e.previousValue === t.previousValue && e.value === t.value;
}
function Ci(e, t) {
  return e == null
    ? t
    : t == null
      ? e.value === e.previousValue
        ? void 0
        : e
      : e.value === t.previousValue
        ? void 0
        : { ...t, value: e.value };
}
function wi(e, t, n) {
  let r = new Map(n.map((e) => [e.property, e]));
  for (let e of t) r.set(e.property, e);
  return e.flatMap((e) => {
    let t = r.get(e.property);
    return t == null ? [] : [t];
  });
}
var Ti = g(
    `text-token-text-primary min-h-0 w-full p-0 leading-normal font-sans`,
    `[&_.ProseMirror]:w-full`,
    `[&_.ProseMirror]:font-sans`,
    `[&_.ProseMirror]:px-0`,
    `[&_.ProseMirror]:py-0`,
    `[&_.ProseMirror]:!leading-6`,
    `[&_.ProseMirror_p]:!leading-6`,
    `!min-h-0 text-base`,
    `[&_.ProseMirror]:min-h-6`,
  ),
  Ei = {
    "--codex-chat-font-size": `13px`,
    "--composer-top-tray-background": `var(--color-token-main-surface-primary)`,
    "--composer-top-tray-border": `transparent`,
  },
  Di = `pointer-events-none absolute inset-x-0 top-0 flex flex-col justify-end pb-2`,
  Oi = `pointer-events-none absolute inset-x-0 flex flex-col overflow-visible bg-transparent`,
  ki = `pointer-events-auto relative overflow-hidden rounded-[22px] bg-token-dropdown-background shadow-md ring-1 ring-token-border-light transition-[height,width,opacity] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none`,
  Ai = `absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none`,
  ji = `absolute inset-x-0 bottom-0 flex h-12 items-center pl-2 pr-3 origin-bottom-left transition-[opacity,transform] duration-150 ease-out motion-reduce:transition-none`,
  Mi = `pointer-events-none absolute top-0 left-0 whitespace-pre text-base leading-normal font-sans opacity-0`,
  Ni = `box-border flex h-full w-fit max-w-full overflow-hidden rounded-[22px] bg-token-dropdown-background px-4 shadow-md ring-1 ring-token-border-light`,
  Pi = `min-w-0 max-w-full text-base leading-6 font-sans text-token-foreground`,
  Fi = `font-semibold`,
  Ii = 28,
  Li = 8,
  Ri = 32,
  zi = 16,
  Bi = 8,
  Vi = 12,
  Hi = 40,
  Ui = 4,
  Wi = `!max-h-[180px] overflow-y-auto`,
  Gi = `!max-h-full overflow-y-auto`,
  Ki = `top-3`,
  qi = `top-24`,
  Ji = `pt-24`,
  Yi = `pr-[52px]`,
  Xi = `max-h-[84px] min-h-[48px] overflow-hidden`,
  Zi = `!h-auto !max-h-[84px] overflow-y-auto pb-2`,
  Qi = `flex min-h-0 flex-col px-4 pb-12`,
  $i = 8,
  ea = 90,
  ta = 150;
function na(e) {
  let t = (0, Z.c)(30),
    {
      allowImageAttachments: n,
      allowDirectSubmit: r,
      defaultCreateSubmitMode: i,
      defaultDesignEditorOpen: a,
      defaultExpandedSpacingGroups: o,
      inputAriaLabel: s,
      placeholder: c,
      session: l,
      showAdjustEntry: u,
      windowHeight: d,
      keyboardEventTarget: f,
      onSubmit: p,
      onDirectSubmit: m,
      onDesignChangeDelete: h,
      onDesignChangeUpdate: g,
      onDesignScrubPropertyChange: _,
      onTweaksEditorOpenChange: v,
      onDelete: y,
      onCancel: b,
      onEscape: x,
      onMounted: S,
      onBodyChange: C,
      onAttachmentPreviewOpenChange: w,
      onLightDismissibilityChange: T,
    } = e,
    E = n === void 0 ? !0 : n,
    D = r === void 0 ? !0 : r,
    O = i === void 0 ? `saved` : i,
    k = a === void 0 ? !1 : a,
    A = u === void 0 ? !0 : u;
  if (l.surfaceMode === `preview`) {
    let e;
    return (
      t[0] !== S || t[1] !== l || t[2] !== A || t[3] !== d
        ? ((e = (0, Q.jsx)(ra, {
            session: l,
            showAdjustEntry: A,
            windowHeight: d,
            onMounted: S,
          })),
          (t[0] = S),
          (t[1] = l),
          (t[2] = A),
          (t[3] = d),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let j;
  return (
    t[5] !== D ||
    t[6] !== E ||
    t[7] !== O ||
    t[8] !== k ||
    t[9] !== o ||
    t[10] !== s ||
    t[11] !== f ||
    t[12] !== w ||
    t[13] !== C ||
    t[14] !== b ||
    t[15] !== y ||
    t[16] !== h ||
    t[17] !== g ||
    t[18] !== _ ||
    t[19] !== m ||
    t[20] !== x ||
    t[21] !== T ||
    t[22] !== S ||
    t[23] !== p ||
    t[24] !== v ||
    t[25] !== c ||
    t[26] !== l ||
    t[27] !== A ||
    t[28] !== d
      ? ((j = (0, Q.jsx)(ia, {
          session: l,
          defaultDesignEditorOpen: k,
          defaultExpandedSpacingGroups: o,
          showAdjustEntry: A,
          windowHeight: d,
          keyboardEventTarget: f,
          onSubmit: p,
          onDirectSubmit: m,
          onDesignChangeDelete: h,
          onDesignChangeUpdate: g,
          onDesignScrubPropertyChange: _,
          onTweaksEditorOpenChange: v,
          onDelete: y,
          onCancel: b,
          onEscape: x,
          onMounted: S,
          onBodyChange: C,
          onAttachmentPreviewOpenChange: w,
          onLightDismissibilityChange: T,
          allowImageAttachments: E,
          allowDirectSubmit: D,
          defaultCreateSubmitMode: O,
          inputAriaLabel: s,
          placeholder: c,
        })),
        (t[5] = D),
        (t[6] = E),
        (t[7] = O),
        (t[8] = k),
        (t[9] = o),
        (t[10] = s),
        (t[11] = f),
        (t[12] = w),
        (t[13] = C),
        (t[14] = b),
        (t[15] = y),
        (t[16] = h),
        (t[17] = g),
        (t[18] = _),
        (t[19] = m),
        (t[20] = x),
        (t[21] = T),
        (t[22] = S),
        (t[23] = p),
        (t[24] = v),
        (t[25] = c),
        (t[26] = l),
        (t[27] = A),
        (t[28] = d),
        (t[29] = j))
      : (j = t[29]),
    j
  );
}
function ra(e) {
  let t = (0, Z.c)(34),
    { session: n, showAdjustEntry: r, windowHeight: i, onMounted: a } = e,
    o = v(),
    s = ua(n),
    c = r ? n.designChange : null,
    l = c != null,
    u =
      s.length > 0
        ? s
        : l
          ? o.formatMessage(
              {
                id: `browserSidebarCommentOverlay.previewTweaksCount`,
                defaultMessage: `{count, plural, one {# adjustment} other {# adjustments}}`,
                description: `Fallback preview text for a browser sidebar annotation that only includes design adjustments`,
              },
              { count: fa(c) },
            )
          : ``,
    d = /\r?\n/.test(u),
    f = (0, $.useRef)(null),
    p = (0, $.useRef)(null),
    m;
  (t[0] !== a || t[1] !== n.sessionId
    ? ((m = () => {
        let e = f.current;
        if (e == null) return;
        let t = e.getBoundingClientRect(),
          r = { width: Math.ceil(t.width), height: Math.ceil(t.height) },
          i = p.current;
        (i?.width === r.width && i?.height === r.height) ||
          ((p.current = r), a(n.sessionId, r));
      }),
      (t[0] = a),
      (t[1] = n.sessionId),
      (t[2] = m))
    : (m = t[2]),
    (0, $.useLayoutEffect)(m, [a, u, n.sessionId, l, i]));
  let h = Ei,
    _;
  t[3] === n.previewAlignment
    ? (_ = t[4])
    : ((_ = g(`flex h-full w-full`, ma(n.previewAlignment))),
      (t[3] = n.previewAlignment),
      (t[4] = _));
  let y = d ? `items-start py-2` : `items-center`,
    b;
  t[5] === y ? (b = t[6]) : ((b = g(Ni, y)), (t[5] = y), (t[6] = b));
  let x;
  t[7] === i ? (x = t[8]) : ((x = { height: i }), (t[7] = i), (t[8] = x));
  let S = d ? `items-start` : `items-center`,
    C;
  t[9] === S
    ? (C = t[10])
    : ((C = g(`flex min-w-0 gap-2`, S)), (t[9] = S), (t[10] = C));
  let w;
  t[11] === l
    ? (w = t[12])
    : ((w = l
        ? (0, Q.jsx)(`span`, {
            "aria-hidden": `true`,
            "data-testid": `annotation-comment-preview-tweak-icon`,
            className: `flex shrink-0 items-center justify-center pt-0.5 text-token-description-foreground`,
            children: (0, Q.jsx)(jt, { className: `icon-sm` }),
          })
        : null),
      (t[11] = l),
      (t[12] = w));
  let T = d
      ? `overflow-hidden whitespace-pre-wrap break-words`
      : `overflow-hidden text-ellipsis whitespace-nowrap`,
    E;
  t[13] === T ? (E = t[14]) : ((E = g(Pi, T)), (t[13] = T), (t[14] = E));
  let D;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { fontSize: `var(--codex-chat-font-size)` }), (t[15] = D))
    : (D = t[15]);
  let O = s.length > 0 ? pa(s) : u,
    k;
  t[16] !== E || t[17] !== D || t[18] !== O
    ? ((k = (0, Q.jsx)(`div`, { className: E, style: D, children: O })),
      (t[16] = E),
      (t[17] = D),
      (t[18] = O),
      (t[19] = k))
    : (k = t[19]);
  let A;
  t[20] !== w || t[21] !== k || t[22] !== C
    ? ((A = (0, Q.jsxs)(`div`, { className: C, children: [w, k] })),
      (t[20] = w),
      (t[21] = k),
      (t[22] = C),
      (t[23] = A))
    : (A = t[23]);
  let j;
  t[24] !== A || t[25] !== b || t[26] !== x
    ? ((j = (0, Q.jsx)(`div`, { ref: f, className: b, style: x, children: A })),
      (t[24] = A),
      (t[25] = b),
      (t[26] = x),
      (t[27] = j))
    : (j = t[27]);
  let M;
  t[28] !== j || t[29] !== _
    ? ((M = (0, Q.jsx)(`div`, { className: _, children: j })),
      (t[28] = j),
      (t[29] = _),
      (t[30] = M))
    : (M = t[30]);
  let N;
  return (
    t[31] !== M || t[32] !== h
      ? ((N = (0, Q.jsx)(`div`, {
          className: `pointer-events-none flex h-full w-full overflow-visible bg-transparent text-token-foreground`,
          style: h,
          children: M,
        })),
        (t[31] = M),
        (t[32] = h),
        (t[33] = N))
      : (N = t[33]),
    N
  );
}
function ia({
  session: e,
  windowHeight: t,
  defaultDesignEditorOpen: n = !1,
  defaultExpandedSpacingGroups: r,
  showAdjustEntry: a = !0,
  keyboardEventTarget: o,
  onSubmit: s,
  onDirectSubmit: c,
  onDesignChangeDelete: l,
  onDesignChangeUpdate: u,
  onDesignScrubPropertyChange: d,
  onTweaksEditorOpenChange: p,
  onDelete: m,
  onCancel: h,
  onEscape: _,
  onMounted: y,
  onBodyChange: C,
  onAttachmentPreviewOpenChange: T,
  onLightDismissibilityChange: E,
  allowImageAttachments: D = !0,
  allowDirectSubmit: O,
  defaultCreateSubmitMode: A,
  inputAriaLabel: j,
  placeholder: M,
}) {
  let N = S(b),
    P = v(),
    F = ua(e),
    I = a ? da(e) : null,
    L = (0, $.useMemo)(() => qe(), []);
  We(
    (0, $.useCallback)(() => {
      L.view.isDestroyed || L.destroy();
    }, [L]),
  );
  let [R, ee] = (0, $.useState)(F),
    [te, B] = (0, $.useState)(() => e.attachedImages ?? []),
    [ie, ae] = (0, $.useState)(() =>
      a ? (e.designEditorState ?? I ?? null) : null,
    ),
    V = (0, $.useRef)(I ?? null),
    [oe, se] = (0, $.useState)(
      () => ie != null && (n || e.target.mode === `design` || I != null),
    ),
    U = a ? ie : null,
    W = a && oe,
    [ce, le] = (0, $.useState)(!1),
    [G, K] = (0, $.useState)(!1),
    [ue, de] = (0, $.useState)(!1),
    [fe, pe] = (0, $.useState)(!1),
    [q, me] = (0, $.useState)(null),
    [he, ge] = (0, $.useState)(!1),
    [_e, ve] = (0, $.useState)(!1),
    [J, Y] = (0, $.useState)({ x: 0, y: 0 }),
    ye = (e) => {
      (ve(e), T?.(e));
    },
    xe = (e) => {
      (e.preventDefault(), L.focus());
    },
    [Ce, we] = (0, $.useState)(!1),
    [Ee, X] = (0, $.useState)(!1),
    De = w(Te),
    ke = (0, $.useRef)(F),
    Ae = (0, $.useRef)(e.attachedImages ?? []),
    je = (0, $.useRef)(null),
    Me = (0, $.useRef)(U);
  Me.current = U;
  let Pe = (0, $.useRef)(null),
    Fe = (0, $.useRef)(null),
    Ie = (0, $.useRef)(null),
    Le = (0, $.useRef)(null),
    Je = (0, $.useRef)(null),
    Ye = (0, $.useRef)(null),
    Xe = (0, $.useRef)(0),
    Ze = (0, $.useRef)(null),
    Qe = (0, $.useRef)(null),
    tt = (0, $.useRef)(null),
    { data: nt } = k(`workspace-root-options`, { params: { hostId: f } }),
    rt = (0, $.useMemo)(() => {
      if (nt?.roots.length) return nt.roots;
      if (e.cwd != null) return [e.cwd];
    }, [e.cwd, nt?.roots]),
    it = ze(L),
    at = He(L),
    ot = null;
  it.ui?.active === !0 ? (ot = `at`) : at.ui?.active === !0 && (ot = `skill`);
  let st = In({ canEditDesign: U != null, showAdjustEntry: a }),
    ct = W && U != null,
    lt = e.target.mode === `edit` || ue || W,
    ut = e.target.mode === `edit` && !W,
    { hasCommentText: ft } = yi({
      baselineDesignGroup: V.current,
      commentText: R,
      designEditorState: U,
      isDesignSubmissionMode: ct,
    }),
    { designDraft: pt } = yi({
      baselineDesignGroup: V.current,
      commentText: R,
      designEditorState: U,
      isDesignSubmissionMode: U != null,
    }),
    mt = _a({
      baselineDesignGroup: V.current,
      designDraft: pt,
      designEditorState: U,
      isDesignEditorOpen: W,
    }),
    ht = Fn(f),
    gt = ht === !0,
    {
      isDictating: _t,
      isTranscribing: vt,
      canRetryDictation: yt,
      recordingDurationMs: bt,
      retryDictation: xt,
      waveformCanvasRef: St,
      startDictation: Ct,
      stopDictation: wt,
    } = On({
      enabled: gt,
      getSurroundingText: () => L.getText(),
      onTranscriptInsert: (e) => {
        L.view.isDestroyed || L.appendText(e);
      },
      onTranscriptSend: (t) => {
        if (L.view.isDestroyed) return;
        L.appendText(t);
        let n = L.getText().trim();
        if (n.length === 0) return;
        let r = {
          body: n,
          ...(Ae.current.length === 0 ? {} : { attachedImages: Ae.current }),
        };
        if (e.target.mode === `create` && A === `direct`) {
          c(r);
          return;
        }
        s(r);
      },
      onStartError: () => {
        N.get(ne).danger(
          P.formatMessage({
            id: `composer.dictation.startError`,
            defaultMessage: `Unable to start dictation`,
            description: `Toast text shown when dictation could not be started`,
          }),
        );
      },
      onTranscribeError: () => {
        N.get(ne).danger(
          P.formatMessage({
            id: `composer.dictation.transcribeError`,
            defaultMessage: `Unable to transcribe audio`,
            description: `Toast text shown when dictation audio transcription fails`,
          }),
        );
      },
      onUnsupported: () => {
        N.get(ne).danger(
          P.formatMessage({
            id: `composer.dictation.unsupported`,
            defaultMessage: `Dictation is not available on this device`,
            description: `Toast text shown when dictation is not supported on the current device`,
          }),
        );
      },
    }),
    Tt = D && te.length > 0,
    Et = lt || _t || Tt,
    Z = e.target.mode !== `edit` && !ue && !Tt,
    Dt = e.target.mode !== `edit` && !W && (lt || Tt),
    Ot = Dt && !lt,
    kt = Et ? 120 : 44,
    At = Math.min(Math.max(t - 120, 0), 88),
    Nt = z(),
    { skills: Pt } = Ne(rt),
    Ft = (0, $.useCallback)(
      (t, n, r = Me.current) => {
        E(ha(e.target.mode, F, t, e.attachedImages ?? [], n, V.current, r));
      },
      [E, e.attachedImages, F, e.target.mode],
    ),
    It = (0, $.useCallback)(
      (e, t = Fe.current) => {
        let n = W && ba(e, Ie.current, t);
        pe((e) => (e === n ? e : n));
      },
      [W],
    ),
    Lt = (0, $.useCallback)(
      (e) => {
        if (((Fe.current = e), e == null)) {
          pe(!1);
          return;
        }
        It(ke.current, e);
      },
      [It],
    ),
    Rt = (0, $.useCallback)(() => {
      let t = L.getText();
      if (ke.current === t) return;
      ((ke.current = t),
        ee(t),
        C?.(t),
        de(
          e.target.mode !== `edit` &&
            ya(t, L.view.state.doc.childCount > 1, Ie.current, Pe.current),
        ),
        It(t),
        Ft(t, Ae.current));
      let n = Me.current;
      ct && n != null && u?.(bi(n, V.current, t.trim()));
    }, [L, ct, C, u, e.target.mode, It, Ft]);
  ((0, $.useEffect)(() => et(L.view, Rt), [L, Rt]),
    (0, $.useEffect)(() => {
      L.syncMentionMetadata({ skills: Pt, apps: Nt });
    }, [Nt, Pt, L]),
    (0, $.useLayoutEffect)(() => {
      if (Le.current === e.sessionId) return;
      Le.current = e.sessionId;
      let t = e.attachedImages ?? [];
      (L.setPromptText(F),
        (ke.current = F),
        (Ae.current = t),
        C?.(F),
        ee(F),
        B(t),
        K(!1),
        le(!1),
        (Je.current = null),
        (Ye.current = null),
        de(
          e.target.mode !== `edit` &&
            ya(F, L.view.state.doc.childCount > 1, Ie.current, Pe.current),
        ),
        Ft(F, t));
    }, [L, e.attachedImages, F, e.sessionId, e.target.mode, C, Ft]),
    (0, $.useLayoutEffect)(() => {
      let t = Pe.current?.getBoundingClientRect();
      if (t == null) return;
      let n = { width: Math.ceil(t.width), height: Math.ceil(t.height) },
        r = Ye.current;
      (Je.current === e.sessionId &&
        r?.width === n.width &&
        r?.height === n.height) ||
        ((Je.current = e.sessionId),
        (Ye.current = n),
        y(e.sessionId, n, W ? i : void 0));
    }, [te, R, W, ue, fe, y, e.sessionId, kt, t]),
    (0, $.useEffect)(
      () => () => {
        (Ze.current != null && globalThis.clearTimeout(Ze.current),
          Qe.current != null && globalThis.clearTimeout(Qe.current));
      },
      [],
    ));
  let zt = (0, $.useEffectEvent)(() => {
    if (_e) return;
    let e = L.view.dom,
      t = e.ownerDocument.activeElement,
      n = e.closest(`form`);
    (t != null && n?.contains(t) && !e.contains(t)) || L.focus();
  });
  (0, $.useEffect)(() => {
    if (o == null) return;
    let e = () => {
      o.requestAnimationFrame(() => {
        zt();
      });
    };
    return (
      o.addEventListener(`focus`, e),
      o.document.hasFocus() && e(),
      () => {
        o.removeEventListener(`focus`, e);
      }
    );
  }, [o]);
  let Bt = P.formatMessage({
      id: `browserSidebarCommentOverlay.comment`,
      defaultMessage: `Comment`,
      description: `Primary action for creating a new browser comment`,
    }),
    Vt = P.formatMessage({
      id: `browserSidebarCommentOverlay.addTweaks`,
      defaultMessage: `Add`,
      description: `Primary action for adding browser tweaks`,
    }),
    Ht = P.formatMessage({
      id: `browserSidebarCommentOverlay.delete`,
      defaultMessage: `Delete`,
      description: `Delete action for the browser comment overlay`,
    }),
    Ut = P.formatMessage({
      id: `browserSidebarCommentOverlay.tweak`,
      defaultMessage: `Adjust`,
      description: `Accessible label for opening browser design adjustment controls from the comment editor`,
    }),
    Wt =
      M ??
      (ct
        ? P.formatMessage({
            id: `browserSidebarCommentOverlay.tweaksPlaceholder`,
            defaultMessage: `Describe these changes...`,
            description: `Placeholder text for the browser tweaks editor comment field`,
          })
        : P.formatMessage({
            id: `browserSidebarCommentOverlay.placeholder`,
            defaultMessage: `Add a comment…`,
            description: `Placeholder text for the browser comment editor`,
          })),
    Gt = e.target.mode === `edit` ? e.target.commentId : null,
    Kt = ht == null || ht,
    qt = Gt == null && !lt && !ft && ht == null,
    Jt = !_t && (Kt || qt) && (lt || !ft),
    Yt = !qt && !_t && (lt || ft || !gt),
    Xt = mt ? (V.current == null ? pt != null || ft : !xi(pt, V.current)) : ft,
    Zt = Mn(),
    Qt = be(),
    $t = o?.document.body ?? null,
    en = Gt == null && O && Ee && De,
    tn = Qt ? `⏎` : `Enter`,
    nn = Qt ? `⌘⏎` : `Ctrl+Enter`,
    rn = mt ? `saved` : O ? A : `saved`,
    an = rn === `direct` ? !en : en,
    on = V.current?.status === `queued` ? V.current : null,
    sn =
      q == null || ie == null
        ? null
        : q.rows.flatMap((e) => {
            let t = aa(ie.declarations, e.property);
            return t == null ? [] : [{ row: e, value: t }];
          }),
    cn = (0, $.useCallback)(
      (e) =>
        new Promise((t) => {
          let n = new FileReader(),
            r = e.name.trim().length > 0 ? e.name : void 0,
            i = Ge(e, window.electronBridge?.getPathForFile) ?? void 0;
          ((n.onload = (e) => {
            let n = e.target?.result;
            if (typeof n != `string`) {
              t(null);
              return;
            }
            t({ dataUrl: n, filename: r, localPath: i });
          }),
            (n.onerror = () => {
              t(null);
            }),
            n.readAsDataURL(e));
        }),
      [],
    ),
    ln = (0, $.useCallback)(
      (e) => {
        D &&
          Promise.all(e.map((e) => cn(e))).then((e) => {
            let t = e.filter((e) => e != null);
            if (t.length === 0) return;
            let n = [...Ae.current, ...t];
            ((Ae.current = n), B(n), Ft(ke.current, n));
          });
      },
      [D, cn, Ft],
    ),
    un = () => {
      let e = L.getText(),
        t = yi({
          baselineDesignGroup: V.current,
          commentText: e,
          designEditorState: Me.current,
          isDesignSubmissionMode: Me.current != null,
        }),
        n = _a({
          baselineDesignGroup: V.current,
          designDraft: t.designDraft,
          designEditorState: Me.current,
          isDesignEditorOpen: W,
        });
      if (t.designDraft == null && !t.hasCommentText) {
        n && V.current != null && l?.(V.current.id);
        return;
      }
      s({
        body: t.trimmedCommentText,
        ...(!D || Ae.current.length === 0
          ? {}
          : { attachedImages: Ae.current }),
        ...(n ? { designChange: t.designDraft } : {}),
      });
    },
    dn = () => {
      let e = L.getText(),
        t = yi({
          baselineDesignGroup: V.current,
          commentText: e,
          designEditorState: Me.current,
          isDesignSubmissionMode: Me.current != null,
        });
      _a({
        baselineDesignGroup: V.current,
        designDraft: t.designDraft,
        designEditorState: Me.current,
        isDesignEditorOpen: W,
      }) ||
        (t.hasCommentText &&
          c({
            body: t.trimmedCommentText,
            ...(!D || Ae.current.length === 0
              ? {}
              : { attachedImages: Ae.current }),
          }));
    },
    fn = rn === `direct` ? dn : un,
    pn = rn === `direct` ? un : dn;
  ((0, $.useEffect)(() => {
    if (!D) return;
    let e = (e) => {
      ln(e);
    };
    return (
      L.addPastedImagesHandler(e),
      () => {
        L.removePastedImagesHandler(e);
      }
    );
  }, [ln, D, L]),
    Nn({
      enabled: gt && Gt == null,
      isDictating: _t,
      isTranscribing: vt,
      startDictation: Ct,
      stopDictation: wt,
      keyboardEventTarget: o,
      shouldHandleHostDictation: () => Ee,
    }),
    (0, $.useEffect)(() => {
      if (o == null || Gt != null) return;
      let e = () => {
          let e = o.document.activeElement;
          X(e != null && L.view.dom.contains(e));
        },
        t = () => {
          o.requestAnimationFrame(e);
        },
        n = () => {
          X(!1);
        };
      return (
        e(),
        o.document.addEventListener(`focusin`, t),
        o.document.addEventListener(`focusout`, t),
        o.addEventListener(`blur`, n),
        () => {
          (o.document.removeEventListener(`focusin`, t),
            o.document.removeEventListener(`focusout`, t),
            o.removeEventListener(`blur`, n));
        }
      );
    }, [L, Gt, o]));
  let mn = (e) => {
      let t = e.currentTarget.ownerDocument.defaultView,
        n =
          t != null &&
          (e.target instanceof t.HTMLInputElement ||
            e.target instanceof t.HTMLTextAreaElement) &&
          e.target.dataset.browserSidebarDesignContentInput === `true`
            ? e.target
            : null;
      if (e.key === `Escape`) {
        if ((e.preventDefault(), e.stopPropagation(), n)) {
          n.blur();
          return;
        }
        _();
        return;
      }
      if (
        ct &&
        e.key === `Enter` &&
        !e.altKey &&
        !e.shiftKey &&
        (e.metaKey || e.ctrlKey)
      ) {
        (e.preventDefault(), e.stopPropagation());
        return;
      }
      let r = L.view.dom,
        i = r.ownerDocument.defaultView,
        a = i != null && e.target instanceof i.Node && r.contains(e.target);
      if (
        Gt == null &&
        !ct &&
        (Ee || a) &&
        e.key === `Enter` &&
        !e.altKey &&
        !e.shiftKey &&
        (e.metaKey || e.ctrlKey)
      ) {
        if ((e.preventDefault(), e.stopPropagation(), !O)) {
          un();
          return;
        }
        pn();
      }
    },
    hn = (e) => {
      let t = L.view.dom,
        n = t.ownerDocument.defaultView;
      n == null ||
        !(e.target instanceof n.Node) ||
        t.contains(e.target) ||
        (e.preventDefault(), t.focus());
    },
    gn = () => {
      ((Xe.current = 0), we(!1));
    },
    vn = () => {
      Ze.current != null &&
        (globalThis.clearTimeout(Ze.current), (Ze.current = null));
    },
    yn = () => {
      Qe.current != null &&
        (globalThis.clearTimeout(Qe.current), (Qe.current = null));
    },
    bn = () => {
      a && (vn(), K(!1), se(!0), p?.(!0));
    },
    xn = () => {
      if ((vn(), se(!1), pe(!1), p?.(!1), le(!1), !Z)) {
        K(!1);
        return;
      }
      (K(!0),
        (Ze.current = globalThis.setTimeout(() => {
          (K(!1), (Ze.current = null));
        }, ea)));
    },
    Sn = (e) => {
      if (W) {
        xn();
        return;
      }
      if (ce || G) return;
      (vn(), K(!1));
      let t = e.currentTarget.ownerDocument.defaultView;
      if (
        typeof t?.matchMedia == `function` &&
        t.matchMedia(`(prefers-reduced-motion: reduce)`).matches
      ) {
        bn();
        return;
      }
      (le(!0),
        bn(),
        globalThis.setTimeout(() => {
          le(!1);
        }, ea));
    },
    Cn = (e) => {
      let t = bi(e, V.current, ke.current.trim());
      ((Me.current = e), ae(e), Ft(ke.current, Ae.current, e), u?.(t));
    },
    wn = (e, t) => {
      d?.(e);
      let n = je.current?.getBoundingClientRect();
      if (e == null) {
        (yn(),
          ge(!1),
          (Qe.current = globalThis.setTimeout(() => {
            (me(null), (Qe.current = null));
          }, ta)));
        return;
      }
      if ((yn(), t == null || n == null)) {
        (ge(!1), me(null));
        return;
      }
      let r = t.closest(`[data-browser-sidebar-design-scrub-value-cell]`);
      if (r == null) {
        (ge(!1), me(null));
        return;
      }
      let i = r.dataset.browserSidebarDesignScrubPeerProperty,
        a =
          i == null
            ? null
            : (Array.from(
                Pe.current?.querySelectorAll(
                  `[data-browser-sidebar-design-scrub-property]`,
                ) ?? [],
              ).find(
                (e) => e.dataset.browserSidebarDesignScrubProperty === i,
              ) ?? null),
        o = a == null || a === r ? [r] : [r, a],
        s = o.flatMap((n) => {
          let i =
              n.parentElement?.querySelector(
                `[data-browser-sidebar-design-scrub-label]`,
              ) ?? null,
            a = n.querySelector(`input`)?.parentElement ?? null,
            o = n.querySelector(`button`),
            s = n.dataset.browserSidebarDesignScrubProperty ?? e,
            c = i?.getBoundingClientRect(),
            l = a?.getBoundingClientRect(),
            u = o?.getBoundingClientRect(),
            d = n.getBoundingClientRect(),
            f =
              (n === r ? t.getAttribute(`aria-label`)?.trim() : null) ??
              i?.dataset.browserSidebarDesignScrubCloneLabel ??
              i?.textContent?.trim();
          return c == null || l == null || f == null || f.length === 0
            ? []
            : [
                {
                  controlRect: l,
                  label: f,
                  labelRect: c,
                  property: s,
                  resetRect: u,
                  rowBottom: Math.max(c.bottom, d.bottom, u?.bottom ?? -1 / 0),
                  rowLeft: Math.min(c.left, d.left, u?.left ?? 1 / 0),
                  rowRight: Math.max(c.right, d.right, u?.right ?? -1 / 0),
                  rowTop: Math.min(c.top, d.top, u?.top ?? 1 / 0),
                },
              ];
        });
      if (s.length !== o.length) {
        (ge(!1), me(null));
        return;
      }
      let c = Math.min(...s.map((e) => e.rowLeft)),
        l = Math.max(...s.map((e) => e.rowRight)),
        u = Math.min(...s.map((e) => e.rowTop)),
        f = Math.max(...s.map((e) => e.rowBottom));
      (ge(!0),
        me({
          rect: {
            height: f - u,
            left: c - n.left,
            top: u - n.top,
            width: l - c,
          },
          rows: s.map((e) => ({
            controlRect: {
              height: e.controlRect.height,
              left: e.controlRect.left - c,
              top: e.controlRect.top - u,
              width: e.controlRect.width,
            },
            label: e.label,
            labelRect: {
              height: e.labelRect.height,
              left: e.labelRect.left - c,
              top: e.labelRect.top - u,
              width: e.labelRect.width,
            },
            property: e.property,
            ...(e.resetRect == null
              ? {}
              : {
                  resetRect: {
                    height: e.resetRect.height,
                    left: e.resetRect.left - c,
                    top: e.resetRect.top - u,
                    width: e.resetRect.width,
                  },
                }),
          })),
        }));
    },
    Tn = st,
    Dn = (e) => {
      if (!W || !e.isPrimary || e.button !== 0 || Pe.current == null || !oa(e))
        return;
      let t = Pe.current.getBoundingClientRect(),
        n = e.currentTarget.ownerDocument.defaultView;
      ((tt.current = {
        baseLeft: t.left - J.x,
        baseTop: t.top - J.y,
        cardHeight: t.height,
        cardWidth: t.width,
        offsetX: J.x,
        offsetY: J.y,
        pointerId: e.pointerId,
        startClientX: e.clientX,
        startClientY: e.clientY,
        viewportHeight: n?.innerHeight ?? 1 / 0,
        viewportWidth: n?.innerWidth ?? 1 / 0,
      }),
        e.currentTarget.setPointerCapture(e.pointerId));
    },
    kn = (e) => {
      let t = tt.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = t.offsetX + e.clientX - t.startClientX,
        r = t.offsetY + e.clientY - t.startClientY,
        i = $i - t.baseLeft,
        a = t.viewportWidth - t.cardWidth - $i - t.baseLeft,
        o = $i - t.baseTop,
        s = t.viewportHeight - t.cardHeight - $i - t.baseTop;
      (e.preventDefault(),
        Y({
          x: a < i ? n : Math.min(Math.max(n, i), a),
          y: s < o ? r : Math.min(Math.max(r, o), s),
        }));
    },
    An = (e) => {
      tt.current?.pointerId === e.pointerId &&
        ((tt.current = null),
        e.currentTarget.releasePointerCapture(e.pointerId));
    };
  return (0, Q.jsxs)(`form`, {
    className: `pointer-events-none relative h-full w-full overflow-visible bg-transparent text-token-foreground`,
    style: Ei,
    onKeyDownCapture: mn,
    onSubmit: (e) => {
      if ((e.preventDefault(), Gt == null)) {
        fn();
        return;
      }
      un();
    },
    children: [
      (0, Q.jsx)(`div`, {
        className: Di,
        style: { height: At },
        children:
          ot != null && At > 0
            ? (0, Q.jsxs)(`div`, {
                className: `pointer-events-auto max-h-full w-full`,
                children: [
                  ot === `at`
                    ? (0, Q.jsx)($e, {
                        className: `max-h-full w-full`,
                        chromeVariant: `default`,
                        hostId: f,
                        keyboardEventTarget: o,
                        onAddContext: it.addMention,
                        onRequestClose: it.closeAutocomplete,
                        onUpdateSelectedMention: it.setSelectedMention,
                        query: it.ui?.query ?? ``,
                        roots: rt ?? [],
                        skillRoots: rt,
                        source: it.ui?.source ?? null,
                      })
                    : null,
                  ot === `skill`
                    ? (0, Q.jsx)(Ke, {
                        className: `max-h-full w-full`,
                        query: at.ui?.query ?? ``,
                        keyboardEventTarget: o,
                        onUpdateSelectedMention: at.setSelectedMention,
                        onAddMention: at.addMention,
                        onRequestClose: at.closeAutocomplete,
                        cwd: e.cwd ?? void 0,
                        roots: rt,
                        chromeVariant: `default`,
                      })
                    : null,
                ],
              })
            : null,
      }),
      (0, Q.jsxs)(`div`, {
        ref: je,
        className: Oi,
        style: { top: At, height: W || Dt ? void 0 : 120 },
        children: [
          (0, Q.jsxs)(`div`, {
            ref: Pe,
            "data-browser-comment-editor-surface": !0,
            className: g(
              ki,
              W ? `w-[344px] max-w-full` : `w-[294px] max-w-full`,
              Ce && `bg-token-menu-background ring-token-focus-border`,
              he ? `opacity-0 duration-[300ms]` : `duration-[150ms]`,
            ),
            style:
              W || Dt
                ? { transform: `translate3d(${J.x}px, ${J.y}px, 0px)` }
                : {
                    height: kt,
                    transform: `translate3d(${J.x}px, ${J.y}px, 0px)`,
                  },
            onDragEnter: (e) => {
              !D ||
                !Ue(e.dataTransfer) ||
                (e.preventDefault(),
                e.stopPropagation(),
                (e.dataTransfer.dropEffect = `copy`),
                (Xe.current += 1),
                we(!0));
            },
            onDragOver: (e) => {
              !D ||
                !Ue(e.dataTransfer) ||
                (e.preventDefault(),
                e.stopPropagation(),
                (e.dataTransfer.dropEffect = `copy`),
                Ce || we(!0));
            },
            onDragLeave: (e) => {
              !D ||
                !Ue(e.dataTransfer) ||
                (e.preventDefault(),
                e.stopPropagation(),
                (Xe.current = Math.max(0, Xe.current - 1)),
                Xe.current === 0 && we(!1));
            },
            onDrop: (e) => {
              if (!D || !Ue(e.dataTransfer)) return;
              (e.preventDefault(), e.stopPropagation());
              let t = Ve(e.dataTransfer);
              (t.length > 0 && ln(t), gn());
            },
            children: [
              Tn
                ? (0, Q.jsx)(H, {
                    "aria-label": Ut,
                    "data-browser-sidebar-design-editor-toggle": !0,
                    className: `absolute top-2 left-3 z-10`,
                    color: W ? `secondary` : `ghost`,
                    size: `composer`,
                    title: Ut,
                    type: `button`,
                    uniform: !0,
                    onClick: Sn,
                    children: (0, Q.jsx)(`span`, {
                      "data-browser-sidebar-design-editor-entry-enter":
                        !W && G ? `` : void 0,
                      className: `flex items-center justify-center`,
                      children: (0, Q.jsx)(jt, {
                        className: g(
                          `icon-sm origin-center`,
                          !W &&
                            (G
                              ? `browser-sidebar-design-editor-entry-enter`
                              : g(
                                  `transition-[opacity,transform] duration-[180ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none`,
                                  ce
                                    ? `-translate-x-1 -rotate-12 scale-[0.82] opacity-0`
                                    : `translate-x-0 rotate-0 scale-100 opacity-100`,
                                )),
                        ),
                      }),
                    }),
                  })
                : null,
              Tt
                ? (0, Q.jsx)(`div`, {
                    "data-browser-comment-editor-attachment-row": !0,
                    className: g(
                      `absolute right-3 flex gap-1.5 overflow-x-auto pb-1`,
                      Ki,
                      st ? `left-12` : `left-3`,
                    ),
                    children: te.map((e, t) =>
                      (0, Q.jsx)(
                        Mt,
                        {
                          src: e.dataUrl,
                          filename: e.filename,
                          previewPortalContainer: o?.document.body ?? null,
                          onPreviewCloseAutoFocus: xe,
                          onPreviewOpenChange: ye,
                          onRemove: () => {
                            let e = Ae.current.filter((e, n) => n !== t);
                            ((Ae.current = e), B(e), Ft(ke.current, e));
                          },
                        },
                        `${e.filename ?? `image`}-${t}`,
                      ),
                    ),
                  })
                : null,
              W && U != null
                ? (0, Q.jsxs)(`div`, {
                    "data-browser-comment-design-editor-stack": !0,
                    className: g(Qi, Tt ? Ji : `pt-2`, fe ? `gap-0` : `gap-2`),
                    onPointerCancel: An,
                    onPointerDown: Dn,
                    onPointerMove: kn,
                    onPointerUp: An,
                    children: [
                      (0, Q.jsx)(`div`, {
                        ref: Lt,
                        "data-browser-comment-design-prompt-shell": !0,
                        className: g(
                          `translate-y-0.5 transition-[height,min-height,max-height] duration-[140ms] ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none`,
                          Tn && `ml-8`,
                          fe ? Xi : `h-7 min-h-0 overflow-hidden`,
                        ),
                        children: (0, Q.jsx)(`div`, {
                          className: g(`min-h-0`, !fe && `h-full`),
                          children: (0, Q.jsx)(Be, {
                            className: g(
                              Ti,
                              fe && Zi,
                              !fe &&
                                `!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap`,
                            ),
                            composerController: L,
                            ariaLabel: j,
                            minHeight: `1.5rem`,
                            placeholder: Wt,
                            onMentionHandler: it.handleMentionEvent,
                            onSkillMentionHandler: at.handleMentionEvent,
                            onSubmit: fn,
                          }),
                        }),
                      }),
                      (0, Q.jsx)(
                        or,
                        {
                          defaultExpandedSpacingGroups: r,
                          dropdownPortalContainer: o?.document.body ?? null,
                          editorState: U,
                          isEditable: !0,
                          onDragHandlePointerCancel: An,
                          onDragHandlePointerDown: Dn,
                          onDragHandlePointerMove: kn,
                          onDragHandlePointerUp: An,
                          onScrubActiveChange: wn,
                          onUpdate: Cn,
                        },
                        U.id,
                      ),
                    ],
                  })
                : (0, Q.jsx)(Q.Fragment, {
                    children: (0, Q.jsx)(`div`, {
                      "data-browser-comment-editor-input-shell": !0,
                      className: g(
                        Dt
                          ? g(
                              `min-w-0`,
                              lt ? `pb-[52px]` : `pb-2`,
                              st && !ce
                                ? Ot
                                  ? g(`pl-12`, Yi)
                                  : `pl-12 pr-4`
                                : Ot
                                  ? g(`pl-4`, Yi)
                                  : `px-4`,
                              Tt ? Ji : `pt-2`,
                            )
                          : g(
                              Ai,
                              st && !ce ? `left-12` : `left-4`,
                              Tt ? qi : `top-2`,
                              Et
                                ? st && !ce
                                  ? `bottom-[52px] w-[calc(100%-64px)]`
                                  : `bottom-[52px] w-[calc(100%-32px)]`
                                : st && !ce
                                  ? `bottom-2 w-[calc(100%-92px)]`
                                  : `bottom-2 w-[calc(100%-60px)]`,
                            ),
                      ),
                      onMouseDown: hn,
                      children: (0, Q.jsx)(`div`, {
                        className: g(
                          Dt
                            ? `min-h-0 translate-y-0.5`
                            : `h-full min-h-0 translate-y-0.5`,
                        ),
                        children: (0, Q.jsx)(Be, {
                          className: g(
                            Ti,
                            Dt && Wi,
                            ut && Gi,
                            !lt &&
                              !Tt &&
                              `!overflow-hidden [&_.ProseMirror]:h-6 [&_.ProseMirror]:!overflow-hidden [&_.ProseMirror]:whitespace-nowrap`,
                          ),
                          composerController: L,
                          ariaLabel: j,
                          minHeight: `1.5rem`,
                          placeholder: Wt,
                          onMentionHandler: it.handleMentionEvent,
                          onSkillMentionHandler: at.handleMentionEvent,
                          onSubmit: Gt == null ? fn : un,
                        }),
                      }),
                    }),
                  }),
              (0, Q.jsx)(`span`, {
                ref: Ie,
                "aria-hidden": `true`,
                className: Mi,
                style: { fontSize: `var(--codex-chat-font-size)` },
                children: R,
              }),
              W
                ? (0, Q.jsx)(`div`, {
                    "data-browser-sidebar-design-footer-divider": !0,
                    className: `pointer-events-none absolute inset-x-0 bottom-12 border-t border-token-border/60`,
                  })
                : null,
              (0, Q.jsxs)(`div`, {
                "data-browser-comment-editor-footer-actions": !0,
                "aria-hidden": !lt || _t,
                className: g(
                  ji,
                  Gt == null ? `justify-start gap-1.5` : `justify-between`,
                  lt && !_t
                    ? `scale-100 opacity-100`
                    : `invisible pointer-events-none scale-95 opacity-0`,
                ),
                children: [
                  Gt == null
                    ? on != null && l != null
                      ? (0, Q.jsx)(H, {
                          "aria-label": Ht,
                          color: `ghostMuted`,
                          size: `composer`,
                          onClick: () => {
                            l(on.id);
                          },
                          uniform: !0,
                          children: (0, Q.jsx)(Oe, { className: `icon-sm` }),
                        })
                      : null
                    : (0, Q.jsx)(H, {
                        "aria-label": Ht,
                        color: `ghostMuted`,
                        size: `composer`,
                        onClick: () => {
                          m(Gt);
                        },
                        uniform: !0,
                        children: (0, Q.jsx)(Oe, { className: `icon-sm` }),
                      }),
                  (0, Q.jsxs)(`div`, {
                    className: `flex items-center gap-1.5`,
                    children: [
                      (0, Q.jsx)(H, {
                        color: `outline`,
                        size: `composer`,
                        tabIndex: lt ? void 0 : -1,
                        onClick: () => {
                          h();
                        },
                        children: (0, Q.jsx)(x, {
                          id: `browserSidebarCommentOverlay.cancel`,
                          defaultMessage: `Cancel`,
                          description: `Cancel action for the browser comment overlay`,
                        }),
                      }),
                      Gt == null
                        ? null
                        : (0, Q.jsx)(H, {
                            color: `primary`,
                            disabled: !Xt,
                            size: `composer`,
                            type: `submit`,
                            children: (0, Q.jsx)(x, {
                              id: `browserSidebarCommentOverlay.save`,
                              defaultMessage: `Save`,
                              description: `Primary action for editing an existing browser comment`,
                            }),
                          }),
                    ],
                  }),
                ],
              }),
              Gt == null && _t
                ? (0, Q.jsx)(`div`, {
                    className: `absolute right-0 bottom-2 left-0`,
                    children: (0, Q.jsx)(_n, {
                      isTranscribing: vt,
                      recordingDurationMs: bt,
                      waveformCanvasRef: St,
                      stopDictation: wt,
                      leadingAccessory: null,
                      noBottomMargin: !0,
                      tooltipPortalContainer: $t,
                    }),
                  })
                : null,
              Gt == null
                ? (0, Q.jsxs)(`div`, {
                    className: `absolute right-2 bottom-2 flex items-center gap-2`,
                    children: [
                      Jt
                        ? (0, Q.jsx)(En, {
                            isVisible: Kt,
                            isTranscribing: vt,
                            canRetryDictation: yt,
                            disabled: qt,
                            retryDictation: xt,
                            shortcutLabel: Zt,
                            startDictation: Ct,
                            stopDictation: wt,
                            tooltipPortalContainer: $t,
                          })
                        : null,
                      Yt
                        ? ct
                          ? (0, Q.jsx)(H, {
                              "aria-label": Vt,
                              color: `primary`,
                              "data-browser-comment-submit": !0,
                              size: `composer`,
                              disabled: !Xt,
                              type: `button`,
                              uniform: !0,
                              onMouseDown: (e) => {
                                e.preventDefault();
                              },
                              onClick: () => {
                                un();
                              },
                              children: (0, Q.jsx)(Se, {
                                className: `icon-sm`,
                              }),
                            })
                          : (0, Q.jsx)(re, {
                              side: `top`,
                              sideOffset: 4,
                              portalContainer: $t,
                              tooltipContent: (0, Q.jsxs)(`div`, {
                                className: `space-y-1`,
                                children: [
                                  (0, Q.jsx)(la, {
                                    keysLabel: tn,
                                    children:
                                      rn === `direct`
                                        ? (0, Q.jsx)(ca, {})
                                        : (0, Q.jsx)(sa, {}),
                                  }),
                                  O
                                    ? (0, Q.jsx)(la, {
                                        keysLabel: nn,
                                        children:
                                          rn === `direct`
                                            ? (0, Q.jsx)(sa, {})
                                            : (0, Q.jsx)(ca, {}),
                                      })
                                    : null,
                                ],
                              }),
                              children: (0, Q.jsx)(H, {
                                "aria-label": Bt,
                                color: `primary`,
                                "data-browser-comment-submit": !0,
                                size: `composer`,
                                disabled: !Xt,
                                type: `button`,
                                uniform: !0,
                                onMouseDown: (e) => {
                                  e.preventDefault();
                                },
                                onClick: () => {
                                  if (en) {
                                    pn();
                                    return;
                                  }
                                  fn();
                                },
                                children: an
                                  ? (0, Q.jsx)(Re, { className: `icon-sm` })
                                  : (0, Q.jsx)(Se, { className: `icon-sm` }),
                              }),
                            })
                        : null,
                    ],
                  })
                : null,
            ],
          }),
          q != null && sn != null && sn.length === q.rows.length
            ? (0, Q.jsxs)(`div`, {
                "aria-hidden": `true`,
                className: `pointer-events-none absolute z-20`,
                "data-browser-comment-design-scrub-clone": !0,
                style: {
                  height: q.rect.height,
                  left: q.rect.left,
                  top: q.rect.top,
                  width: q.rect.width,
                },
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `absolute -top-2 -right-3 -bottom-2 -left-3 rounded-xl bg-token-dropdown-background shadow-md ring-1 ring-token-border-light`,
                  }),
                  sn.map(({ row: e, value: t }) =>
                    (0, Q.jsxs)(
                      $.Fragment,
                      {
                        children: [
                          (0, Q.jsx)(`span`, {
                            className: `absolute flex min-w-0 items-center text-sm text-token-text-secondary`,
                            style: {
                              height: e.labelRect.height,
                              left: e.labelRect.left,
                              top: e.labelRect.top,
                              width: e.labelRect.width,
                            },
                            children: (0, Q.jsx)(`span`, {
                              className: `min-w-0 truncate`,
                              children: e.label,
                            }),
                          }),
                          e.resetRect == null
                            ? null
                            : (0, Q.jsx)(`span`, {
                                className: `absolute flex items-center justify-center text-token-text-secondary`,
                                style: {
                                  height: e.resetRect.height,
                                  left: e.resetRect.left,
                                  top: e.resetRect.top,
                                  width: e.resetRect.width,
                                },
                                children: (0, Q.jsx)(dt, {
                                  className: `icon-2xs`,
                                }),
                              }),
                          (0, Q.jsxs)(`span`, {
                            className: `absolute flex min-w-0 items-center gap-1 rounded-lg border border-token-focus-border bg-token-input-background px-3 text-token-input-foreground shadow-sm ring-1 ring-token-focus-border`,
                            style: {
                              height: e.controlRect.height,
                              left: e.controlRect.left,
                              top: e.controlRect.top,
                              width: e.controlRect.width,
                            },
                            children: [
                              (0, Q.jsx)(`span`, {
                                className: `min-w-0 flex-1 truncate text-left font-mono text-xs text-token-input-foreground`,
                                children: t.value,
                              }),
                              t.unit == null
                                ? null
                                : (0, Q.jsx)(`span`, {
                                    className: `shrink-0 font-mono text-xs text-token-text-tertiary`,
                                    children: t.unit,
                                  }),
                            ],
                          }),
                        ],
                      },
                      e.property,
                    ),
                  ),
                ],
              })
            : null,
        ],
      }),
    ],
  });
}
function aa(e, t) {
  let n = e.find((e) => e.property === t);
  if (n == null) return null;
  let r = /^(-?\d+(?:\.\d+)?)px$/.exec(n.value.trim());
  return r == null ? { value: n.value } : { unit: `px`, value: r[1] };
}
function oa(e) {
  let t = e.target,
    n = e.currentTarget.ownerDocument.defaultView;
  return n == null || !(t instanceof n.Element)
    ? !1
    : t.closest(
        [
          `a`,
          `button`,
          `input`,
          `select`,
          `textarea`,
          `[contenteditable='true']`,
          `[data-browser-sidebar-design-no-drag]`,
          `[role='button']`,
          `[role='combobox']`,
          `[role='menuitem']`,
        ].join(`,`),
      ) == null;
}
function sa() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(x, {
          id: `browserSidebarCommentOverlay.add.tooltip`,
          defaultMessage: `Add`,
          description: `Action label shown in the browser comment submit tooltip for saving a pending comment`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function ca() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(x, {
          id: `browserSidebarCommentOverlay.send.tooltip`,
          defaultMessage: `Send`,
          description: `Action label shown in the browser comment submit tooltip for sending a comment`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function la(e) {
  let t = (0, Z.c)(7),
    { children: n, keysLabel: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, Q.jsx)(`span`, {
        className: `text-token-foreground`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, Q.jsx)(B, { keysLabel: r })), (t[2] = r), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function ua(e) {
  return e.body.length > 0 ? e.body : (e.designChange?.comment ?? ``);
}
function da(e) {
  return e.designChange == null
    ? null
    : e.designChange.comment != null || e.body.trim().length === 0
      ? e.designChange
      : { ...e.designChange, comment: e.body };
}
function fa(e) {
  return Math.max(e.declarations.length + (e.text == null ? 0 : 1), 1);
}
function pa(e) {
  return Rn(e).map((e, t) => {
    switch (e.type) {
      case `text`:
        return e.text;
      case `mention`:
        return (0, Q.jsx)(
          `strong`,
          { className: Fi, children: e.label },
          `comment-preview-mention-${t}`,
        );
    }
  });
}
function ma(e) {
  switch (e) {
    case `start`:
      return `justify-start`;
    case `end`:
      return `justify-end`;
    case `center`:
      return `justify-center`;
  }
}
function ha(e, t, n, r, i, a, s) {
  let c = n.trim(),
    l = ga(c, a, s);
  switch (e) {
    case `create`:
      return o(n) && i.length === 0 && l;
    case `edit`:
      return c === t.trim() && va(r, i) && l;
    case `design`:
      return a == null ? c.length === 0 && l : l;
  }
}
function ga(e, t, n) {
  if (n == null) return t == null;
  let r = bi(n, t, e);
  return t == null ? r == null : xi(r, t);
}
function _a({
  baselineDesignGroup: e,
  designDraft: t,
  designEditorState: n,
  isDesignEditorOpen: r,
}) {
  return n != null && (r || t != null || e != null);
}
function va(e, t) {
  return e.length === t.length
    ? e.every((e, n) => {
        let r = t[n];
        return (
          r != null &&
          e.dataUrl === r.dataUrl &&
          e.filename === r.filename &&
          e.localPath === r.localPath
        );
      })
    : !1;
}
function ya(e, t, n, r) {
  let i = e.trim();
  if (i.length === 0) return !1;
  if (t) return !0;
  let a = xa(r),
    o = Ca(e, n);
  return a == null || o == null ? i.length >= Hi : o + Vi > a;
}
function ba(e, t, n) {
  if (e.trim().length === 0) return !1;
  if (/\r?\n/.test(e)) return !0;
  let r = Sa(n),
    i = Ca(e, t);
  return r == null || i == null ? !1 : i + Ui > r;
}
function xa(e) {
  if (e == null) return null;
  let t = e.getBoundingClientRect();
  if (t.width === 0) return null;
  let n =
      e.querySelector(`[data-browser-comment-submit]`)?.getBoundingClientRect()
        .width ?? Ii,
    r =
      e.querySelector(`[data-browser-sidebar-design-editor-toggle]`) == null
        ? 0
        : Ri;
  return t.width - zi - Bi - r - n - Li;
}
function Sa(e) {
  if (e == null) return null;
  let t = e.getBoundingClientRect();
  return t.width === 0 ? null : t.width;
}
function Ca(e, t) {
  return t == null
    ? null
    : ((t.textContent = e), t.getBoundingClientRect().width);
}
var wa = `browser-comment-popup-shake`;
function Ta({ animationFrameRef: e, animationWindow: t, editorWrapper: n }) {
  n != null &&
    (n.classList.remove(wa),
    e.current != null && t.cancelAnimationFrame(e.current),
    (e.current = t.requestAnimationFrame(() => {
      ((e.current = null), n.classList.add(wa));
    })));
}
function Ea({ isLightDismissible: e, isLightDismissArmed: t }) {
  return e || t ? `dismiss` : `shake`;
}
export {
  vt as C,
  kt as S,
  Lt as _,
  Rn as a,
  jt as b,
  Nn as c,
  En as d,
  _n as f,
  Wt as g,
  qt as h,
  na as i,
  Mn as l,
  an as m,
  Ea as n,
  Fn as o,
  vn as p,
  Ta as r,
  An as s,
  wa as t,
  On as u,
  Nt as v,
  mt as w,
  At as x,
  Mt as y,
};
//# sourceMappingURL=browser-sidebar-comment-light-dismiss.js.map
