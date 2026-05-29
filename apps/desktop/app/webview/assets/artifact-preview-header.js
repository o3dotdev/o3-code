import { s as e } from "./chunk-Bj-mKKzh.js";
import { Fn as t } from "./src-C.js";
import {
  Ha as n,
  Ia as r,
  do as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as a, t as o } from "./jsx-runtime.js";
import {
  G as s,
  L as c,
  S as l,
  U as u,
  V as d,
  X as f,
  g as p,
  l as m,
  m as h,
  wt as g,
  y as _,
} from "./setting-storage.js";
import { m as v } from "./chunk-LFPYN7LY.js";
import { a as y, i as b } from "./request-DWZTrEAr.js";
import { o as x, r as S } from "./apps-queries-CmwRqoKz.js";
import { r as C } from "./toast-signal.js";
import { t as w } from "./tooltip-CDzchJxN.js";
import { s as T } from "./prompt-text-DuAhtLDu.js";
import { C as E } from "./composer-view-state-JRNwOfub.js";
import { t as D } from "./button.js";
import { t as O } from "./spinner.js";
import { t as k } from "./plugin-install-store-Daxzgjai.js";
import { m as A } from "./use-plugins-jIZrcuZQ.js";
import { t as j } from "./download.js";
import { a as M } from "./plugin-detail-route-utils.js";
import { o as N, r as P } from "./plugins-availability-txQMPSuC.js";
import { t as F } from "./check-md.js";
import { t as I } from "./chevron-right.js";
import { r as L, t as R } from "./dropdown-DtQxMoJw.js";
import { t as z } from "./chevron-NmAOI_v1.js";
import { n as B, r as V } from "./open-target-selection.js";
import { n as H, t as ee } from "./use-target-apps.js";
import { n as U, t as W } from "./app-connect-modal.js";
import { t as te } from "./compound-button-BQclBs-H.js";
var ne = class extends Error {
    constructor() {
      (super(`Google Drive connector authentication is required.`),
        (this.name = `GoogleDriveConnectorAuthError`));
    }
  },
  re = `/wham/apps/google_drive/upload`,
  ie = `X-Codex-Base64`,
  ae = `Unsupported file type. Expected one of: .docx, .pptx, .xlsx.`,
  oe = /https?:\/\/(?:docs|drive)\.google\.com\/[^\s"'<>),]+/i;
function G(e) {
  switch (me(e)) {
    case `docx`:
      return `document`;
    case `xlsx`:
      return `spreadsheet`;
    case `pptx`:
      return `presentation`;
    default:
      return null;
  }
}
function K(e) {
  return (
    e.find((e) =>
      e.id === `connector_5f3c8c41a1e54ad7a76272c89e2554fa`
        ? !0
        : [e.id, e.name, ...e.pluginDisplayNames].some(
            (e) => he(e) === `google-drive`,
          ),
    ) ?? null
  );
}
function se(e) {
  let t = K(e);
  return t?.isAccessible === !0 && t.isEnabled;
}
function ce(e) {
  return (
    e.find((e) =>
      [e.plugin.id.split(`@`)[0], e.plugin.name, e.displayName].some(
        (e) => e != null && he(e) === `google-drive`,
      ),
    ) ?? null
  );
}
function le({ apps: e, plugin: t }) {
  if (e != null && se(e)) return { kind: `upload` };
  if (t == null) return { kind: `refresh` };
  if (!t.plugin.installed) return { kind: `installPlugin`, plugin: t };
  if (!t.plugin.enabled) return { kind: `enablePlugin`, plugin: t };
  if (e == null) return { kind: `refresh` };
  let n = K(e);
  return n == null
    ? { kind: `refresh` }
    : n.isAccessible === !0 && n.isEnabled === !1
      ? { app: n, kind: `openPluginDetail`, plugin: t }
      : { app: n, kind: `connectApp` };
}
async function ue({ hostId: e, path: t, title: n }) {
  if (G(t) == null) throw Error(ae);
  let i = await m(`read-file-binary`, { params: { hostId: e, path: t } });
  if (i.contentsBase64 == null) throw Error(`File contents are unavailable.`);
  let a = r(t),
    o = ge(t),
    s = fe({
      fileBytes: b(i.contentsBase64),
      filename: a,
      mimeType: o,
      title: n ?? a,
    }),
    c = y(s.body),
    l = (
      await p.getInstance().post(re, c, {
        "Content-Type": `multipart/form-data; boundary=${s.boundary}`,
        [ie]: `1`,
      })
    ).body,
    u = l.connector_result;
  if (pe(u)) throw new ne();
  if (u.isError === !0) throw Error(`Google Drive could not open this file.`);
  return l;
}
function de(e) {
  let t = e.connector_result,
    n = t.structuredContent;
  if (typeof n == `object` && n && !Array.isArray(n)) {
    let e = q(n.url) ?? q(n.webViewLink);
    if (e != null) return e;
  }
  for (let e of t.content) {
    if (typeof e != `object` || !e || Array.isArray(e) || e.type !== `text`)
      continue;
    let t = q(e.text);
    if (t != null) return t;
  }
  return null;
}
function fe({ fileBytes: e, filename: t, mimeType: n, title: r }) {
  let i = `----codex-google-drive-${Math.random().toString(36).slice(2)}`,
    a = [],
    o = (e) => {
      a.push(new TextEncoder().encode(e));
    };
  return (
    ((e, t) => {
      o(
        `--${i}\r\nContent-Disposition: form-data; name="${_e(e)}"\r\n\r\n${t}\r\n`,
      );
    })(`arguments`, JSON.stringify({ title: r })),
    o(
      `--${i}\r\nContent-Disposition: form-data; name="file"; filename="${_e(t)}"\r\nContent-Type: ${n}\r\n\r\n`,
    ),
    a.push(e),
    o(`\r\n--${i}--\r\n`),
    { body: ve(a), boundary: i }
  );
}
function pe(e) {
  let t = e._meta;
  if (typeof t != `object` || !t || Array.isArray(t)) return !1;
  let n = t._codex_apps;
  if (typeof n != `object` || !n || Array.isArray(n)) return !1;
  let r = n.connector_auth_failure;
  return (
    typeof r == `object` && !!r && !Array.isArray(r) && r.is_auth_failure === !0
  );
}
function q(e) {
  return typeof e == `string`
    ? ((e.match(oe)?.[0] ?? null)?.replace(/[.;:!?]+$/, ``) ?? null)
    : null;
}
function me(e) {
  let t = r(e),
    n = t.lastIndexOf(`.`);
  return n < 0 ? `` : t.slice(n + 1).toLowerCase();
}
function he(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, `-`);
}
function ge(e) {
  switch (me(e)) {
    case `docx`:
      return `application/vnd.openxmlformats-officedocument.wordprocessingml.document`;
    case `pptx`:
      return `application/vnd.openxmlformats-officedocument.presentationml.presentation`;
    case `xlsx`:
      return `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`;
    default:
      return `application/octet-stream`;
  }
}
function _e(e) {
  return e.replace(/[\r\n"]/g, `_`);
}
function ve(e) {
  let t = e.reduce((e, t) => e + t.length, 0),
    n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.length));
  return n;
}
var J = e(a()),
  Y = o(),
  ye = (e) =>
    (0, Y.jsxs)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Y.jsx)(`path`, {
          d: `M4 4C4 2.89543 4.89543 2 6 2H14L20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z`,
          fill: `#4285F4`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M14 2L20 8H16C14.8954 8 14 7.10457 14 6V2Z`,
          fill: `#1967D2`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M8 13.75C8 13.6119 8.11193 13.5 8.25 13.5H15.75C15.8881 13.5 16 13.6119 16 13.75V14.75C16 14.8881 15.8881 15 15.75 15H8.25C8.11193 15 8 14.8881 8 14.75V13.75ZM8 16.75C8 16.6119 8.11193 16.5 8.25 16.5H13.75C13.8881 16.5 14 16.6119 14 16.75V17.75C14 17.8881 13.8881 18 13.75 18H8.25C8.11193 18 8 17.8881 8 17.75V16.75Z`,
          fill: `white`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M8 10.75C8 10.6119 8.11193 10.5 8.25 10.5H15.75C15.8881 10.5 16 10.6119 16 10.75V11.75C16 11.8881 15.8881 12 15.75 12H8.25C8.11193 12 8 11.8881 8 11.75V10.75Z`,
          fill: `white`,
        }),
      ],
    }),
  be = (e) =>
    (0, Y.jsxs)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Y.jsx)(`path`, {
          d: `M4 4C4 2.89543 4.89543 2 6 2H14L20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z`,
          fill: `#34A853`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M14 2L20 8H16C14.8954 8 14 7.10457 14 6V2Z`,
          fill: `#188038`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M7.5 10.5C7.22386 10.5 7 10.7239 7 11V17.5C7 17.7761 7.22386 18 7.5 18H16.5C16.7761 18 17 17.7761 17 17.5V11C17 10.7239 16.7761 10.5 16.5 10.5H7.5ZM11.25 16.5L8.5 16.5V14.75L11.25 14.75V16.5ZM11.25 13.75H8.5V12H11.25V13.75ZM15.5 16.5H12.75V14.75L15.5 14.75V16.5ZM15.5 13.75H12.75V12H15.5V13.75Z`,
          fill: `white`,
        }),
      ],
    }),
  xe = (e) =>
    (0, Y.jsxs)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, Y.jsx)(`path`, {
          d: `M4 4C4 2.89543 4.89543 2 6 2H14L20 8V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4Z`,
          fill: `#F4B400`,
        }),
        (0, Y.jsx)(`path`, {
          d: `M14 2L20 8H16C14.8954 8 14 7.10457 14 6V2Z`,
          fill: `#9D7607`,
        }),
        (0, Y.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M7 11.25C7 10.8358 7.33579 10.5 7.75 10.5H16.25C16.6642 10.5 17 10.8358 17 11.25V17.25C17 17.6642 16.6642 18 16.25 18H7.75C7.33579 18 7 17.6642 7 17.25V11.25ZM8.5 12.5V16H15.5V12.5H8.5Z`,
          fill: `white`,
        }),
      ],
    }),
  X = g();
function Se(e) {
  let t = (0, X.c)(12),
    {
      cwd: n,
      handleConnectApp: r,
      hostId: i,
      isOpening: a,
      onCloseDropdown: o,
      onOpeningChange: s,
      path: c,
      title: l,
    } = e,
    u;
  t[0] === c ? (u = t[1]) : ((u = G(c)), (t[0] = c), (t[1] = u));
  let d = u;
  if (d == null) return null;
  let f;
  return (
    t[2] !== n ||
    t[3] !== r ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== c ||
    t[9] !== d ||
    t[10] !== l
      ? ((f = (0, Y.jsx)(Te, {
          cwd: n,
          handleConnectApp: r,
          hostId: i,
          isOpening: a,
          onCloseDropdown: o,
          onOpeningChange: s,
          path: c,
          targetType: d,
          title: l,
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = d),
        (t[10] = l),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function Ce(e) {
  let t = (0, X.c)(10),
    { app: n, hostId: r, onClose: i, onOAuthStarted: a } = e,
    o = c(),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (e) => {
        e || i();
      }),
      (t[0] = i),
      (t[1] = s));
  let l;
  t[2] !== r || t[3] !== o
    ? ((l = async () => {
        await S({ hostId: r, queryClient: o });
      }),
      (t[2] = r),
      (t[3] = o),
      (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] !== n || t[6] !== a || t[7] !== s || t[8] !== l
      ? ((u = (0, Y.jsx)(W, {
          app: n,
          onOpenChange: s,
          onConnected: l,
          onOAuthStarted: a,
        })),
        (t[5] = n),
        (t[6] = a),
        (t[7] = s),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function we() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsxs)(`span`, {
          className: `pointer-events-auto inline-flex h-token-button-composer shrink-0 cursor-default items-center gap-1.5 text-base leading-[18px] text-token-text-secondary`,
          role: `status`,
          children: [
            (0, Y.jsx)(O, { className: `icon-s` }),
            (0, Y.jsx)(u, {
              id: `connectedApps.googleDrive.openingStatus`,
              defaultMessage: `Opening`,
              description: `Status shown in place of the open button while exporting a file to a Google app`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Te({
  cwd: e,
  handleConnectApp: t,
  hostId: r,
  isOpening: i,
  onCloseDropdown: a,
  onOpeningChange: o,
  path: c,
  targetType: l,
  title: u,
}) {
  let d = f(T),
    p = s(),
    m = v(),
    { data: h, hardRefetchAppsList: g } = x({ hostId: r }),
    { availablePlugins: y, refetch: b } = A(r),
    { openPluginInstall: S, session: w } = k(),
    { pendingPluginId: D, setPluginEnabled: O } = P({ hostId: r }),
    j = ce(y),
    F = j != null && D === j.plugin.id,
    I = De(l),
    R = (e) => {
      m(M(e, { hostId: r }));
    },
    z = (e) => {
      S(e);
    },
    B = async () => {
      let t = e == null ? c : n(e, c),
        i = de(await ue({ hostId: r, path: t, title: u }));
      if (i != null) {
        let e = Z(l),
          n = u?.trim(),
          r = {
            id: `google-drive-open:${l}:${t}`,
            imageAttachments: [],
            showInComposer: !1,
            text: `The user uploaded ${n == null || n.length === 0 ? t : `${n} from ${t}`} to ${e}.\n${e} link: ${i}`,
            title: `Opened in ${e}`,
          };
        (E(d, (e) => {
          let t = e.mcpAppModelContextAttachments.findIndex(
            (e) => e.id === r.id,
          );
          if (t === -1) {
            e.mcpAppModelContextAttachments.push(r);
            return;
          }
          e.mcpAppModelContextAttachments[t] = r;
        }),
          _.dispatchMessage(`open-in-browser`, { url: i }));
        return;
      }
      d.get(C).success(
        p.formatMessage(
          {
            id: `connectedApps.googleDrive.opened`,
            defaultMessage: `Opened in {app}`,
            description: `Toast shown after a file was opened in a connected Google app but no URL was returned.`,
          },
          { app: Z(l) },
        ),
      );
    },
    V = async (e) => {
      try {
        await O({
          pluginDisplayName: N(e),
          pluginId: e.plugin.id,
          enabled: !0,
        });
      } catch {
        return;
      }
    },
    H = async () => {
      if (!i) {
        o(!0);
        try {
          let e = le({ apps: h, plugin: j });
          switch (e.kind) {
            case `upload`:
              await B();
              return;
            case `installPlugin`:
              z(e.plugin);
              return;
            case `enablePlugin`:
              await V(e.plugin);
              return;
            case `connectApp`:
              await t(e.app);
              return;
            case `openPluginDetail`:
              R(e.plugin);
              return;
            case `refresh`:
              break;
          }
          let [n, r] = await Promise.all([g(), b()]),
            i = ce(r.availablePlugins),
            a = K(n);
          if (se(n)) {
            await B();
            return;
          }
          if (i?.plugin.installed !== !0) {
            if (i != null) {
              z(i);
              return;
            }
            d.get(C).danger(p.formatMessage(Q.authFailure));
            return;
          }
          if (!i.plugin.enabled) {
            await V(i);
            return;
          }
          if (a?.isAccessible === !0 && a.isEnabled === !1) {
            R(i);
            return;
          }
          if (a != null) {
            await t(a);
            return;
          }
          d.get(C).danger(p.formatMessage(Q.authFailure));
        } catch (e) {
          d.get(C).danger(
            e instanceof ne
              ? p.formatMessage(Q.authFailure)
              : p.formatMessage(
                  {
                    id: `connectedApps.googleDrive.openFailed`,
                    defaultMessage: `Could not open in {app}`,
                    description: `Toast shown when opening a local file in a connected Google app fails.`,
                  },
                  { app: Z(l) },
                ),
          );
        } finally {
          o(!1);
        }
      }
    };
  return (0, Y.jsxs)(L.Item, {
    disabled: i || w.kind !== `closed` || F,
    onSelect: () => {
      (H(), a?.());
    },
    children: [
      (0, Y.jsx)(L.ItemIcon, {
        children: (0, Y.jsx)(I, { "aria-hidden": !0, className: `icon-sm` }),
      }),
      (0, Y.jsx)(Ee, { targetType: l }),
    ],
  });
}
function Ee(e) {
  let t = (0, X.c)(3),
    { targetType: n } = e;
  switch (n) {
    case `document`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(u, {
              id: `connectedApps.googleDrive.openInDocs`,
              defaultMessage: `Export to Google Docs`,
              description: `Dropdown item for exporting a file to Google Docs`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `spreadsheet`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(u, {
              id: `connectedApps.googleDrive.openInSheets`,
              defaultMessage: `Export to Google Sheets`,
              description: `Dropdown item for exporting a file to Google Sheets`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `presentation`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(u, {
              id: `connectedApps.googleDrive.openInSlides`,
              defaultMessage: `Export to Google Slides`,
              description: `Dropdown item for exporting a file to Google Slides`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function De(e) {
  switch (e) {
    case `document`:
      return ye;
    case `spreadsheet`:
      return be;
    case `presentation`:
      return xe;
  }
}
function Z(e) {
  switch (e) {
    case `document`:
      return `Google Docs`;
    case `spreadsheet`:
      return `Google Sheets`;
    case `presentation`:
      return `Google Slides`;
  }
}
var Q = d({
    authFailure: {
      id: `connectedApps.googleDrive.authFailure`,
      defaultMessage: `Connect Google Drive to open this file`,
      description: `Toast shown when the Google Drive connector needs authentication before opening a file.`,
    },
  }),
  Oe = [25, 50, 100, 150, 200],
  ke = Oe,
  Ae = 10,
  je = 400,
  Me = 0.01;
function $(e) {
  return Math.min(je, Math.max(Ae, e));
}
function Ne(e, t) {
  return $(Math.round(e * Math.exp(-t * Me)));
}
function Pe({ initialDistance: e, initialZoomPercent: t, nextDistance: n }) {
  return $(Math.round((n / e) * t));
}
function Fe(e, t, n, r) {
  let i = e - n,
    a = t - r;
  return Math.hypot(i, a);
}
var Ie = 150;
function Le(e) {
  let t = (0, X.c)(12),
    {
      artifactType: n,
      centerContent: r,
      leftContent: i,
      rightContent: a,
      title: o,
    } = e,
    s;
  t[0] !== n || t[1] !== i || t[2] !== o
    ? ((s =
        i ??
        (0, Y.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 items-center gap-3 overflow-hidden`,
          children: [
            (0, Y.jsx)(`h2`, {
              className: `truncate text-sm leading-5 font-medium tracking-[-0.18px] text-token-text-primary [@container_(max-width:260px)]:hidden`,
              children: o,
            }),
            (0, Y.jsx)(`span`, {
              className: `shrink-0 text-sm leading-5 text-token-text-tertiary [@container_(max-width:360px)]:hidden`,
              children: n,
            }),
          ],
        })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = (0, Y.jsx)(`div`, {
        className: `min-w-0 justify-self-center`,
        children: r,
      })),
      (t[4] = r),
      (t[5] = c));
  let l;
  t[6] === a
    ? (l = t[7])
    : ((l = (0, Y.jsx)(`div`, {
        className: `flex min-w-0 justify-end overflow-hidden`,
        children: a,
      })),
      (t[6] = a),
      (t[7] = l));
  let u;
  return (
    t[8] !== s || t[9] !== c || t[10] !== l
      ? ((u = (0, Y.jsxs)(`header`, {
          className: `@container grid h-toolbar-pane shrink-0 grid-cols-[minmax(0,1fr)_auto_minmax(max-content,1fr)] items-center gap-2 overflow-hidden border-b border-token-border-light bg-token-main-surface-primary pr-2 pl-4 [@container_(max-width:260px)]:grid-cols-[0_auto_auto] [@container_(max-width:260px)]:gap-1 [@container_(max-width:260px)]:pl-2`,
          children: [s, c, l],
        })),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function Re(e) {
  let t = (0, X.c)(27),
    { currentPage: n, onNextPage: r, onPreviousPage: i, totalPages: a } = e,
    o = s(),
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = o.formatMessage({
        id: `artifactTab.preview.previousPage`,
        defaultMessage: `Previous page`,
        description: `Tooltip for navigating to the previous page in an artifact preview`,
      })),
      (t[0] = o),
      (t[1] = c));
  let l = c,
    d;
  t[2] === o
    ? (d = t[3])
    : ((d = o.formatMessage({
        id: `artifactTab.preview.nextPage`,
        defaultMessage: `Next page`,
        description: `Tooltip for navigating to the next page in an artifact preview`,
      })),
      (t[2] = o),
      (t[3] = d));
  let f = d,
    p = n <= 1,
    m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Y.jsx)(I, { className: `icon-2xs rotate-180` })), (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== i || t[6] !== l || t[7] !== p
    ? ((h = (0, Y.jsx)(D, {
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        "aria-label": l,
        className: `[@container_(max-width:240px)]:hidden`,
        disabled: p,
        onClick: i,
        children: m,
      })),
      (t[5] = i),
      (t[6] = l),
      (t[7] = p),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== l || t[10] !== h
    ? ((g = (0, Y.jsx)(w, { tooltipContent: l, children: h })),
      (t[9] = l),
      (t[10] = h),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== n || t[13] !== a
    ? ((_ = (0, Y.jsx)(`span`, {
        className: `min-w-12 px-1 text-center text-sm text-token-text-primary tabular-nums [@container_(max-width:300px)]:min-w-9 [@container_(max-width:300px)]:px-0.5`,
        children: (0, Y.jsx)(u, {
          id: `artifactTab.preview.pageIndicator`,
          defaultMessage: `{current}/{total}`,
          description: `Current page indicator in an artifact preview header`,
          values: { current: n, total: a },
        }),
      })),
      (t[12] = n),
      (t[13] = a),
      (t[14] = _))
    : (_ = t[14]);
  let v = n >= a,
    y;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Y.jsx)(I, { className: `icon-2xs` })), (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] !== f || t[17] !== r || t[18] !== v
    ? ((b = (0, Y.jsx)(D, {
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        "aria-label": f,
        className: `[@container_(max-width:240px)]:hidden`,
        disabled: v,
        onClick: r,
        children: y,
      })),
      (t[16] = f),
      (t[17] = r),
      (t[18] = v),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== f || t[21] !== b
    ? ((x = (0, Y.jsx)(w, { tooltipContent: f, children: b })),
      (t[20] = f),
      (t[21] = b),
      (t[22] = x))
    : (x = t[22]);
  let S;
  return (
    t[23] !== x || t[24] !== g || t[25] !== _
      ? ((S = (0, Y.jsxs)(`div`, {
          className: `flex items-center gap-0.5`,
          children: [g, _, x],
        })),
        (t[23] = x),
        (t[24] = g),
        (t[25] = _),
        (t[26] = S))
      : (S = t[26]),
    S
  );
}
function ze(e) {
  let t = (0, X.c)(21),
    {
      fitOption: n,
      onZoomPercentChange: r,
      triggerTestId: i,
      zoomOptions: a,
      zoomPercent: o,
    } = e,
    s = a === void 0 ? Oe : a,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = (0, Y.jsx)(`span`, {
        className: `text-left tabular-nums`,
        children: (0, Y.jsx)(Ue, { zoomPercent: o }),
      })),
      (t[0] = o),
      (t[1] = c));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(z, { className: `icon-sm` })), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== c || t[4] !== i
    ? ((u = (0, Y.jsxs)(D, {
        color: `ghost`,
        size: `toolbar`,
        className: `!w-fit !max-w-fit flex-none shrink-0 cursor-interaction !gap-0.5 text-base text-token-text-secondary`,
        "data-testid": i,
        children: [c, l],
      })),
      (t[3] = c),
      (t[4] = i),
      (t[5] = u))
    : (u = t[5]);
  let d;
  if (t[6] !== n?.selected || t[7] !== r || t[8] !== s || t[9] !== o) {
    let e;
    (t[11] !== n?.selected || t[12] !== r || t[13] !== o
      ? ((e = (e) =>
          (0, Y.jsx)(
            L.Item,
            {
              RightIcon: F,
              rightIconClassName:
                !n?.selected && e === o ? `icon-sm` : `icon-sm invisible`,
              onSelect: () => {
                r(e);
              },
              className: `!rounded-[6px] !py-[5px] !pr-[5px] !pl-2 text-base leading-5 text-token-text-primary`,
              children: (0, Y.jsx)(Ue, { zoomPercent: e }),
            },
            e,
          )),
        (t[11] = n?.selected),
        (t[12] = r),
        (t[13] = o),
        (t[14] = e))
      : (e = t[14]),
      (d = s.map(e)),
      (t[6] = n?.selected),
      (t[7] = r),
      (t[8] = s),
      (t[9] = o),
      (t[10] = d));
  } else d = t[10];
  let f;
  t[15] === n
    ? (f = t[16])
    : ((f =
        n == null
          ? null
          : (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(L.Separator, { paddingClassName: `py-0` }),
                (0, Y.jsx)(L.Item, {
                  RightIcon: F,
                  rightIconClassName: n.selected
                    ? `icon-sm`
                    : `icon-sm invisible`,
                  onSelect: n.onSelect,
                  className: `!rounded-[6px] !py-[5px] !pr-[5px] !pl-2 text-base leading-5 text-token-text-primary`,
                  children: (0, Y.jsx)(We, {}),
                }),
              ],
            })),
      (t[15] = n),
      (t[16] = f));
  let p;
  return (
    t[17] !== u || t[18] !== d || t[19] !== f
      ? ((p = (0, Y.jsxs)(R, {
          align: `end`,
          contentClassName: `!w-[136px] !rounded-[10px] !p-[6px]`,
          sideOffset: 4,
          triggerButton: u,
          children: [d, f],
        })),
        (t[17] = u),
        (t[18] = d),
        (t[19] = f),
        (t[20] = p))
      : (p = t[20]),
    p
  );
}
function Be(e) {
  let t = (0, X.c)(54),
    { hostId: n, path: i, showLabel: a } = e,
    o = a === void 0 ? !1 : a,
    c = s(),
    l = h(`open-file`),
    [d, f] = (0, J.useState)(!1),
    [p, m] = (0, J.useState)(!1),
    [g, _] = (0, J.useState)(!1),
    v;
  t[0] === n ? (v = t[1]) : ((v = { hostId: n }), (t[0] = n), (t[1] = v));
  let {
      clearConnectingApp: y,
      connectingApp: b,
      handleAppConnectOAuthStarted: x,
      handleConnectApp: S,
    } = U(v),
    C;
  t[2] !== n || t[3] !== i
    ? ((C = { cwd: null, hostId: n, openPath: i }),
      (t[2] = n),
      (t[3] = i),
      (t[4] = C))
    : (C = t[4]);
  let {
      canLoadTargets: w,
      preferredTarget: T,
      targets: E,
      availableTargets: D,
      mode: O,
      hasLoadedTargets: k,
      open: A,
    } = H(C),
    j;
  t[5] === i ? (j = t[6]) : ((j = r(i)), (t[5] = i), (t[6] = j));
  let M = j,
    N,
    P,
    F;
  if (
    t[7] !== D ||
    t[8] !== w ||
    t[9] !== M ||
    t[10] !== S ||
    t[11] !== k ||
    t[12] !== n ||
    t[13] !== c ||
    t[14] !== p ||
    t[15] !== g ||
    t[16] !== O ||
    t[17] !== A ||
    t[18] !== l ||
    t[19] !== i ||
    t[20] !== T ||
    t[21] !== d ||
    t[22] !== o ||
    t[23] !== E
  ) {
    let e = B({
        targets: E,
        availableTargets: D,
        includeHiddenTargets: !0,
        mode: O,
      }),
      r = V({ preferredTarget: T, targets: E, availableTargets: D, mode: O }),
      a = e.filter(Ve),
      s;
    (t[27] === i ? (s = t[28]) : ((s = G(i)), (t[27] = i), (t[28] = s)),
      (N = s != null));
    let h;
    t[29] === c
      ? (h = t[30])
      : ((h = c.formatMessage({
          id: `artifactTab.preview.open`,
          defaultMessage: `Open`,
          description: `Button label that opens an artifact`,
        })),
        (t[29] = c),
        (t[30] = h));
    let v = h,
      y;
    t[31] !== n || t[32] !== l || t[33] !== i
      ? ((y = () => {
          l.mutate({ cwd: null, hostId: n, path: i, target: `fileManager` });
        }),
        (t[31] = n),
        (t[32] = l),
        (t[33] = i),
        (t[34] = y))
      : (y = t[34]);
    let b = y,
      x;
    t[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((x = () => {
          f(!0);
        }),
        (t[35] = x))
      : (x = t[35]);
    let C = x,
      j;
    t[36] !== w || t[37] !== k || t[38] !== n || t[39] !== i || t[40] !== d
      ? ((j =
          w && (d || !k)
            ? (0, Y.jsx)(ee, {
                cwd: null,
                delayMs: d ? 0 : Ie,
                hostId: n,
                openPath: i,
              })
            : null),
        (t[36] = w),
        (t[37] = k),
        (t[38] = n),
        (t[39] = i),
        (t[40] = d),
        (t[41] = j))
      : (j = t[41]);
    let I = j,
      R = w && d && !k,
      z = R || a.length > 0 || N,
      H =
        r == null
          ? v
          : c.formatMessage(
              {
                id: `artifactTab.preview.openPrimaryTarget.tooltip`,
                defaultMessage: `Open in {target}`,
                description: `Tooltip for opening an artifact in the primary app`,
              },
              { target: r.label },
            ),
      U;
    t[42] === c
      ? (U = t[43])
      : ((U = c.formatMessage({
          id: `artifactTab.preview.openOptions`,
          defaultMessage: `Open options`,
          description: `Tooltip and accessible label for opening the artifact open options menu`,
        })),
        (t[42] = c),
        (t[43] = U));
    let W = U;
    ((P = I),
      (F = g
        ? (0, Y.jsx)(we, {})
        : (0, Y.jsx)(te, {
            color: `outline`,
            size: `toolbar`,
            className: `shrink-0`,
            dropdownOpen: p,
            dropdownAlign: `end`,
            dropdownContentClassName: `pt-2`,
            primaryAriaLabel: r == null ? v : H,
            secondaryAriaLabel: W,
            secondaryTooltipContent: W,
            tooltipContent: H,
            dropdownContent: (0, Y.jsxs)(Y.Fragment, {
              children: [
                R
                  ? (0, Y.jsx)(L.Message, {
                      compact: !0,
                      children: (0, Y.jsx)(u, {
                        id: `artifactTab.preview.loadingAvailableApps`,
                        defaultMessage: `Loading available apps…`,
                        description: `Dropdown item shown while loading apps that can open an artifact`,
                      }),
                    })
                  : a.map((e) =>
                      (0, Y.jsxs)(
                        L.Item,
                        {
                          onSelect: () => {
                            A(e.target, {
                              appPath: e.appPath,
                              path: i,
                              persistPreferred: !1,
                            });
                          },
                          children: [
                            (0, Y.jsx)(L.ItemIcon, {
                              children: (0, Y.jsx)(`img`, {
                                alt: ``,
                                src: e.icon,
                                className: `icon-sm`,
                              }),
                            }),
                            e.label,
                          ],
                        },
                        e.id,
                      ),
                    ),
                N
                  ? (0, Y.jsx)(Se, {
                      handleConnectApp: S,
                      hostId: n,
                      isOpening: g,
                      onCloseDropdown: () => {
                        m(!1);
                      },
                      onOpeningChange: _,
                      path: i,
                      title: M,
                    })
                  : null,
                z ? (0, Y.jsx)(L.Separator, {}) : null,
                (0, Y.jsx)(L.Item, {
                  onSelect: b,
                  children: (0, Y.jsx)(u, {
                    id: `artifactTab.preview.openInFolder`,
                    defaultMessage: `Open in folder`,
                    description: `Dropdown item for revealing an artifact in the system file manager`,
                  }),
                }),
              ],
            }),
            onFocus: C,
            onMouseEnter: C,
            onDropdownOpenChange: (e) => {
              (m(e), e && C());
            },
            onClick: () => {
              if (r == null) {
                b();
                return;
              }
              A(r.target, {
                appPath: r.appPath,
                path: i,
                persistPreferred: !1,
              });
            },
            children: (0, Y.jsxs)(`span`, {
              className: `flex items-center gap-1.5`,
              children: [
                r == null
                  ? null
                  : (0, Y.jsx)(`img`, {
                      alt: ``,
                      src: r.icon,
                      className: `icon-sm`,
                    }),
                r == null || o
                  ? (0, Y.jsx)(`span`, {
                      className: `whitespace-nowrap`,
                      children: (0, Y.jsx)(u, {
                        id: `artifactTab.preview.open`,
                        defaultMessage: `Open`,
                        description: `Button label that opens an artifact`,
                      }),
                    })
                  : null,
              ],
            }),
          })),
      (t[7] = D),
      (t[8] = w),
      (t[9] = M),
      (t[10] = S),
      (t[11] = k),
      (t[12] = n),
      (t[13] = c),
      (t[14] = p),
      (t[15] = g),
      (t[16] = O),
      (t[17] = A),
      (t[18] = l),
      (t[19] = i),
      (t[20] = T),
      (t[21] = d),
      (t[22] = o),
      (t[23] = E),
      (t[24] = N),
      (t[25] = P),
      (t[26] = F));
  } else ((N = t[24]), (P = t[25]), (F = t[26]));
  let I;
  t[44] !== N || t[45] !== y || t[46] !== b || t[47] !== x || t[48] !== n
    ? ((I =
        N && b != null
          ? (0, Y.jsx)(Ce, { app: b, hostId: n, onClose: y, onOAuthStarted: x })
          : null),
      (t[44] = N),
      (t[45] = y),
      (t[46] = b),
      (t[47] = x),
      (t[48] = n),
      (t[49] = I))
    : (I = t[49]);
  let R;
  return (
    t[50] !== P || t[51] !== F || t[52] !== I
      ? ((R = (0, Y.jsxs)(Y.Fragment, { children: [P, F, I] })),
        (t[50] = P),
        (t[51] = F),
        (t[52] = I),
        (t[53] = R))
      : (R = t[53]),
    R
  );
}
function Ve(e) {
  return e.target !== `fileManager`;
}
function He({ hostId: e, path: n, sizeBytes: a }) {
  let o = f(l),
    c = s(),
    u = i(e),
    [d, p] = (0, J.useState)(!1),
    h = c.formatMessage({
      id: `artifactTab.preview.download`,
      defaultMessage: `Download`,
      description: `Button label that saves a remote artifact to the local computer`,
    }),
    g = c.formatMessage({
      id: `artifactTab.preview.downloading`,
      defaultMessage: `Downloading...`,
      description: `Tooltip shown while a remote artifact download is running`,
    }),
    _ = c.formatMessage({
      id: `artifactTab.preview.downloadFailure`,
      defaultMessage: `Could not download artifact`,
      description: `Error shown when a remote artifact download fails`,
    });
  if (e === `local` || (a != null && a > 47185920 && !t(u))) return null;
  let v = async () => {
    p(!0);
    try {
      let { sizeBytes: i } = await m(`read-file-metadata`, {
        params: { hostId: e, path: n },
      });
      if ((i == null || i > 47185920) && t(u)) {
        await m(`save-file`, {
          params: {
            kind: `remote-file`,
            hostId: e,
            sourcePath: n,
            suggestedFilename: r(n),
          },
        });
        return;
      }
      if (i == null || i > 47185920)
        throw Error(`File is too large to download directly`);
      let { contentsBase64: a } = await m(`read-file-binary`, {
        params: { hostId: e, path: n },
      });
      if (a == null) return;
      await m(`save-file`, {
        params: {
          kind: `contents`,
          suggestedFilename: r(n),
          contentsBase64: a,
        },
      });
    } catch {
      o.get(C).danger(_);
    } finally {
      p(!1);
    }
  };
  return (0, Y.jsx)(w, {
    tooltipContent: d ? g : h,
    children: (0, Y.jsx)(D, {
      "aria-label": h,
      "aria-busy": d,
      color: `ghost`,
      loading: d,
      size: `toolbar`,
      uniform: !0,
      onClick: () => {
        v();
      },
      children: d ? null : (0, Y.jsx)(j, { className: `icon-sm` }),
    }),
  });
}
function Ue(e) {
  let t = (0, X.c)(2),
    { zoomPercent: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Y.jsx)(u, {
          id: `artifactTab.preview.zoomPercent`,
          defaultMessage: `{zoomPercent}%`,
          description: `Zoom percentage shown in artifact preview controls`,
          values: { zoomPercent: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function We() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(u, {
          id: `artifactTab.preview.zoomToFit`,
          defaultMessage: `Zoom to fit`,
          description: `Zoom option that fits the artifact preview to the available space`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export {
  ye as _,
  ze as a,
  $ as c,
  Fe as d,
  Ce as f,
  be as g,
  xe as h,
  Re as i,
  Pe as l,
  Se as m,
  Le as n,
  We as o,
  we as p,
  Be as r,
  ke as s,
  He as t,
  Ne as u,
  G as v,
};
//# sourceMappingURL=artifact-preview-header.js.map
