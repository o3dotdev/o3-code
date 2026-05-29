import { s as e } from "./chunk-Bj-mKKzh.js";
import { Nn as t, ft as n, sr as r } from "./src-C.js";
import {
  Ba as i,
  _r as a,
  br as o,
  do as s,
  gr as c,
  hr as l,
  vr as u,
  xr as d,
  yr as f,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as p, t as m } from "./jsx-runtime.js";
import { t as h } from "./clsx-BcPLHiun.js";
import {
  G as g,
  V as _,
  X as v,
  Z as y,
  _ as b,
  m as x,
  p as S,
  wt as C,
} from "./setting-storage.js";
import { o as w } from "./statsig--EYRNU53.js";
import { s as T } from "./apps-queries-CmwRqoKz.js";
import { t as E } from "./tooltip-CDzchJxN.js";
import { t as ee } from "./route-scope.js";
import {
  E as D,
  S as O,
  _ as k,
  a as A,
  b as te,
  h as j,
  l as M,
  o as ne,
  w as N,
  y as P,
} from "./mention-item.js";
import { r as F } from "./skill-utils.js";
import { t as re } from "./open-workspace-file-WgoEFjrv.js";
import { t as I } from "./apps-DwfMzB5Q.js";
import { t as L } from "./use-platform.js";
import { t as R } from "./use-is-plugins-enabled.js";
import { i as ie } from "./browser-sidebar-availability.js";
import { m as z } from "./use-plugins-jIZrcuZQ.js";
import { t as ae } from "./context-menu.js";
import { n as oe } from "./external-markdown-link-DVRKkYqo.js";
import {
  a as se,
  i as B,
  n as ce,
  o as le,
  s as ue,
  t as de,
} from "./inline-mention-style.js";
import {
  c as V,
  d as H,
  h as U,
  i as W,
  n as G,
  o as K,
  t as fe,
} from "./use-native-apps.electron.js";
import { n as q } from "./get-file-icon.js";
import { i as pe, n as me, r as he } from "./workspace-file-context-menu.js";
import { n as J } from "./use-skills.js";
var Y = C();
function X(e) {
  let t = (0, Y.c)(10),
    { appPath: n } = e,
    { platform: r, isLoading: i } = L(),
    a = (r === `macOS` || r === `windows`) && n != null && n !== ``,
    o = n ?? ``,
    s;
  t[0] === o ? (s = t[1]) : ((s = { appPath: o }), (t[0] = o), (t[1] = s));
  let c;
  t[2] === a
    ? (c = t[3])
    : ((c = { enabled: a, staleTime: b.INFINITE, refetchOnWindowFocus: !1 }),
      (t[2] = a),
      (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = { params: s, queryConfig: c }), (t[4] = s), (t[5] = c), (t[6] = l))
    : (l = t[6]);
  let u = S(`computer-use-native-desktop-app-icon`, l),
    d = a ? (u.data?.iconSmall ?? null) : null,
    f = i || (a && u.isLoading),
    p;
  return (
    t[7] !== d || t[8] !== f
      ? ((p = { iconSmall: d, isLoading: f }),
        (t[7] = d),
        (t[8] = f),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
function ge() {
  return w(`1063250567`);
}
var Z = e(p(), 1),
  _e = (0, Z.createContext)(null),
  ve = `_wideBlock_n9ah0_19`,
  ye = `_mediaWideBlock_n9ah0_20`,
  be = `_markdownContent_n9ah0_43`,
  xe = `_paragraph_n9ah0_65`,
  Se = `_markdownText_n9ah0_69`,
  Ce = `_markdownTextSmall_n9ah0_74`,
  we = `_mediaParagraph_n9ah0_79`,
  Te = `_mediaGridParagraph_n9ah0_83`,
  Ee = `_heading_n9ah0_90`,
  De = `_heading1_n9ah0_96`,
  Oe = `_heading2_n9ah0_100`,
  ke = `_heading3_n9ah0_104`,
  Ae = `_heading4_n9ah0_105`,
  je = `_heading5_n9ah0_110`,
  Me = `_heading6_n9ah0_111`,
  Ne = `_list_n9ah0_116`,
  Pe = `_unorderedList_n9ah0_130`,
  Fe = `_orderedList_n9ah0_142`,
  Ie = `_taskList_n9ah0_146`,
  Le = `_listItem_n9ah0_151`,
  Re = `_taskListItem_n9ah0_182`,
  ze = `_blockquote_n9ah0_192`,
  Be = `_horizontalRule_n9ah0_233`,
  Ve = `_tableContainer_n9ah0_245`,
  He = `_tableWrapper_n9ah0_252`,
  Ue = `_table_n9ah0_245`,
  We = `_tableRow_n9ah0_292`,
  Ge = `_tableCell_n9ah0_292`,
  Ke = `_tableHeaderCell_n9ah0_296`,
  qe = `_tableBody_n9ah0_322`,
  Je = `_codeBlock_n9ah0_326`,
  Ye = `_codeBlockPlaceholder_n9ah0_330`,
  Xe = `_inlineMarkdown_n9ah0_344`,
  Ze = `_tableCellFileLink_n9ah0_374`,
  Qe = `_markdownRoot_n9ah0_397`,
  $e = `_fadeIn_n9ah0_397`,
  et = `_imageEnter_n9ah0_407`,
  tt = {
    wideBlock: ve,
    mediaWideBlock: ye,
    markdownContent: be,
    paragraph: xe,
    markdownText: Se,
    markdownTextSmall: Ce,
    mediaParagraph: we,
    mediaGridParagraph: Te,
    heading: Ee,
    heading1: De,
    heading2: Oe,
    heading3: ke,
    heading4: Ae,
    heading5: je,
    heading6: Me,
    list: Ne,
    unorderedList: Pe,
    orderedList: Fe,
    taskList: Ie,
    listItem: Le,
    taskListItem: Re,
    blockquote: ze,
    horizontalRule: Be,
    tableContainer: Ve,
    tableWrapper: He,
    table: Ue,
    tableRow: We,
    tableCell: Ge,
    tableHeaderCell: Ke,
    tableBody: qe,
    codeBlock: Je,
    codeBlockPlaceholder: Ye,
    inlineMarkdown: Xe,
    tableCellFileLink: Ze,
    markdownRoot: Qe,
    fadeIn: $e,
    "fade-in": `_fade-in_n9ah0_1`,
    imageEnter: et,
    "image-enter": `_image-enter_n9ah0_1`,
  },
  Q = m(),
  nt = _({
    controlDesktopAppsFromCodex: {
      id: `markdown.pluginMention.controlDesktopAppsFromCodex`,
      defaultMessage: `Control desktop apps from Codex`,
      description: `Tooltip text shown when hovering a generic Computer Use plugin mention.`,
    },
  });
function rt(e) {
  let t = (0, Y.c)(25),
    {
      reference: n,
      ariaLabel: r,
      className: i,
      children: a,
      label: o,
      tooltipText: s,
      cwd: u,
      hostId: d,
      onOpen: f,
      openInSidePanel: p,
    } = e,
    m = p === void 0 ? !1 : p,
    { path: h, line: g, column: _, endLine: v } = n,
    y;
  t[0] !== o || t[1] !== n
    ? ((y = o ?? l(n)), (t[0] = o), (t[1] = n), (t[2] = y))
    : (y = t[2]);
  let b = y,
    x;
  t[3] !== n || t[4] !== s
    ? ((x = s ?? c(n)), (t[3] = n), (t[4] = s), (t[5] = x))
    : (x = t[5]);
  let S = x,
    C;
  t[6] === h ? (C = t[7]) : ((C = q(h)), (t[6] = h), (t[7] = C));
  let w = C,
    T;
  t[8] !== w || t[9] !== a || t[10] !== b
    ? ((T =
        a ??
        (0, Q.jsx)(pt, {
          underlineOnHover: !0,
          className: tt.tableCellFileLink,
          icon: w,
          text: b,
        })),
      (t[8] = w),
      (t[9] = a),
      (t[10] = b),
      (t[11] = T))
    : (T = t[11]);
  let E;
  return (
    t[12] !== r ||
    t[13] !== i ||
    t[14] !== _ ||
    t[15] !== u ||
    t[16] !== v ||
    t[17] !== S ||
    t[18] !== d ||
    t[19] !== g ||
    t[20] !== f ||
    t[21] !== m ||
    t[22] !== h ||
    t[23] !== T
      ? ((E = (0, Q.jsx)(dt, {
          ariaLabel: r,
          className: i,
          title: S,
          path: h,
          line: g,
          column: _,
          endLine: v,
          cwd: u,
          hostId: d,
          onOpen: f,
          openInSidePanel: m,
          children: T,
        })),
        (t[12] = r),
        (t[13] = i),
        (t[14] = _),
        (t[15] = u),
        (t[16] = v),
        (t[17] = S),
        (t[18] = d),
        (t[19] = g),
        (t[20] = f),
        (t[21] = m),
        (t[22] = h),
        (t[23] = T),
        (t[24] = E))
      : (E = t[24]),
    E
  );
}
function it(e) {
  let t = (0, Y.c)(28),
    {
      cwd: n,
      hostId: r,
      label: a,
      href: o,
      openInSidePanel: s,
      tooltipText: c,
    } = e,
    l = n === void 0 ? null : n,
    u = s === void 0 ? !1 : s,
    { skills: d } = J(void 0, r),
    f;
  t[0] === a
    ? (f = t[1])
    : ((f = a.split(`:`).at(-1)?.trim() ?? a), (t[0] = a), (t[1] = f));
  let p = f,
    m;
  t[2] === o ? (m = t[3]) : ((m = o ? i(o) : null), (t[2] = o), (t[3] = m));
  let h = m,
    g,
    _,
    v;
  if (t[4] !== a || t[5] !== h || t[6] !== p || t[7] !== d || t[8] !== c) {
    v = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e =
        (h ? d.find((e) => i(e.path) === h) : null) ??
        d.find((e) => e.name === p) ??
        d.find((e) => F(e) === p);
      if (e == null) {
        let e;
        (t[12] === a
          ? (e = t[13])
          : ((e = (0, Q.jsxs)(Q.Fragment, { children: [`$`, a] })),
            (t[12] = a),
            (t[13] = e)),
          (v = e));
        break bb0;
      }
      ((g = F(e)), (_ = D(e) ?? c));
    }
    ((t[4] = a),
      (t[5] = h),
      (t[6] = p),
      (t[7] = d),
      (t[8] = c),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v));
  } else ((g = t[9]), (_ = t[10]), (v = t[11]));
  if (v !== Symbol.for(`react.early_return_sentinel`)) return v;
  let y = _,
    b;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = V()), (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === g
    ? (x = t[16])
    : ((x = (0, Q.jsx)(pt, { underlineOnHover: !0, icon: b, text: g })),
      (t[15] = g),
      (t[16] = x));
  let S = x;
  if (o == null) {
    let e;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = V()), (t[17] = e))
      : (e = t[17]);
    let n;
    return (
      t[18] !== g || t[19] !== y
        ? ((n = (0, Q.jsx)(ft, { icon: e, text: g, tooltipText: y })),
          (t[18] = g),
          (t[19] = y),
          (t[20] = n))
        : (n = t[20]),
      n
    );
  }
  let C = y ?? o,
    w;
  return (
    t[21] !== S ||
    t[22] !== l ||
    t[23] !== r ||
    t[24] !== o ||
    t[25] !== u ||
    t[26] !== C
      ? ((w = (0, Q.jsx)(dt, {
          className: `cursor-pointer`,
          title: C,
          path: o,
          cwd: l,
          hostId: r,
          openInSidePanel: u,
          children: S,
        })),
        (t[21] = S),
        (t[22] = l),
        (t[23] = r),
        (t[24] = o),
        (t[25] = u),
        (t[26] = C),
        (t[27] = w))
      : (w = t[27]),
    w
  );
}
function at(e) {
  let t = (0, Y.c)(19),
    { hostId: n, label: r, href: i, tooltipText: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = { hostId: n }), (t[0] = n), (t[1] = o));
  let { data: s } = T(o),
    c;
  t[2] === s
    ? (c = t[3])
    : ((c = s === void 0 ? [] : s), (t[2] = s), (t[3] = c));
  let l = c,
    u;
  t[4] === i
    ? (u = t[5])
    : ((u = i && O(i) ? i.slice(6) : ``), (t[4] = i), (t[5] = u));
  let d = u,
    f;
  t[6] !== d || t[7] !== l || t[8] !== r
    ? ((f =
        (d.length > 0 ? l.find((e) => e.id === d) : void 0) ??
        l.find((e) => e.name === r)),
      (t[6] = d),
      (t[7] = l),
      (t[8] = r),
      (t[9] = f))
    : (f = t[9]);
  let p = f;
  if (p == null) {
    let e;
    return (
      t[10] === r
        ? (e = t[11])
        : ((e = (0, Q.jsxs)(Q.Fragment, { children: [`$`, r] })),
          (t[10] = r),
          (t[11] = e)),
      e
    );
  }
  let m = p.description ?? void 0,
    h = p.logoUrl ?? p.logoUrlDark ?? ``,
    g;
  return (
    t[12] !== i ||
    t[13] !== p.id ||
    t[14] !== p.name ||
    t[15] !== m ||
    t[16] !== h ||
    t[17] !== a
      ? ((g = (0, Q.jsx)($, {
          displayName: p.name,
          description: m,
          iconSmall: h,
          fallbackName: p.id,
          href: i,
          tooltipText: a,
        })),
        (t[12] = i),
        (t[13] = p.id),
        (t[14] = p.name),
        (t[15] = m),
        (t[16] = h),
        (t[17] = a),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
function ot(e) {
  let t = (0, Y.c)(14),
    { hostId: n, label: r, href: i, tooltipText: a } = e,
    o = g(),
    s;
  t[0] === n ? (s = t[1]) : ((s = { hostId: n }), (t[0] = n), (t[1] = s));
  let c = R(s),
    l = i && N(i) ? i : ``,
    u;
  t[2] === l
    ? (u = t[3])
    : ((u = ct(l)
        ? { additionalMarketplaceKinds: [`shared-with-me`] }
        : void 0),
      (t[2] = l),
      (t[3] = u));
  let { availablePlugins: d } = z(n, void 0, u),
    f = k(o),
    p = H(d),
    m = p != null,
    h;
  t[4] === m ? (h = t[5]) : ((h = { enabled: m }), (t[4] = m), (t[5] = h));
  let { nativeApps: _ } = fe(h),
    v = U({
      mentionPath: l,
      mentionDisplayName: r,
      nativeApps: _,
      computerPlugin: p,
    }),
    { iconSmall: y } = X({ appPath: v.nativeApp?.appPath ?? null });
  if (!c) return (0, Q.jsxs)(Q.Fragment, { children: [`@`, r] });
  let b = lt({
    computerUsePlugin: p,
    href: i,
    iconSmall: y,
    intl: o,
    label: r,
    pluginMentionLabels: f,
    resolvedComputerUseMention: v,
  });
  if (b != null) return b;
  let x = G({ label: r, path: l, plugins: d });
  if (x == null) return (0, Q.jsxs)(Q.Fragment, { children: [`@`, r] });
  let S = M(x, f),
    C;
  return (
    t[6] !== i ||
    t[7] !== S.brandColor ||
    t[8] !== S.description ||
    t[9] !== S.displayName ||
    t[10] !== S.iconSmall ||
    t[11] !== x.plugin.id ||
    t[12] !== a
      ? ((C = (0, Q.jsx)($, {
          brandColor: S.brandColor,
          displayName: S.displayName,
          description: S.description,
          fallbackIcon: I,
          iconSmall: S.iconSmall,
          fallbackName: x.plugin.id,
          href: i,
          tooltipText: a,
        })),
        (t[6] = i),
        (t[7] = S.brandColor),
        (t[8] = S.description),
        (t[9] = S.displayName),
        (t[10] = S.iconSmall),
        (t[11] = x.plugin.id),
        (t[12] = a),
        (t[13] = C))
      : (C = t[13]),
    C
  );
}
function st(e) {
  let t = (0, Y.c)(11),
    { hostId: n, label: r, mention: i, tooltipText: a } = e,
    { availablePlugins: o } = z(n),
    s,
    c;
  if (t[0] !== o || t[1] !== i) {
    let e;
    t[4] === i
      ? (e = t[5])
      : ((e = (e) => {
          let { plugin: t } = e;
          return t.id === i.pluginId;
        }),
        (t[4] = i),
        (t[5] = e));
    let n = o.find(e);
    ((s = ft),
      (c = n == null ? I : W(n)),
      (t[0] = o),
      (t[1] = i),
      (t[2] = s),
      (t[3] = c));
  } else ((s = t[2]), (c = t[3]));
  let l;
  return (
    t[6] !== s || t[7] !== r || t[8] !== c || t[9] !== a
      ? ((l = (0, Q.jsx)(s, { icon: c, text: r, tooltipText: a })),
        (t[6] = s),
        (t[7] = r),
        (t[8] = c),
        (t[9] = a),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function ct(e) {
  let t = n(e.slice(9));
  return (
    t === `workspace-shared-with-me` ||
    t === `workspace-shared-with-me-private` ||
    t === `workspace-shared-with-me-unlisted`
  );
}
function lt({
  computerUsePlugin: e,
  href: t,
  iconSmall: n,
  intl: r,
  label: i,
  pluginMentionLabels: a,
  resolvedComputerUseMention: o,
}) {
  if (!o.isComputerUse) return null;
  if (o.nativeApp != null) {
    let e = o.nativeApp,
      i = r.formatMessage({
        id: `computerUse.label`,
        defaultMessage: `Computer use`,
        description: `Label for the Computer Use feature`,
      });
    return (0, Q.jsx)($, {
      displayName: e.displayName,
      description: i,
      fallbackIcon: I,
      iconSmall: n ?? ``,
      fallbackName: e.bundleId,
      href: t,
      tooltipText: i,
    });
  }
  let s = e?.description ?? r.formatMessage(nt.controlDesktopAppsFromCodex),
    c = e == null ? null : M(e, a);
  return (0, Q.jsx)($, {
    brandColor: c?.brandColor,
    displayName: c?.displayName ?? i,
    description: s,
    fallbackIcon: I,
    iconSmall: c?.iconSmall ?? ``,
    fallbackName: e?.plugin.id ?? `computer-use`,
    href: t,
    tooltipText: s,
  });
}
function ut(e) {
  let t = (0, Y.c)(12),
    { conversationId: n, label: r, tooltipText: i } = e,
    a = (0, Z.useContext)(_e),
    o = n != null && a != null,
    s = r.startsWith(`@`) ? r : `@${r}`,
    c = o ? void 0 : `cursor-default`,
    l;
  t[0] !== o || t[1] !== c || t[2] !== s || t[3] !== i
    ? ((l = (0, Q.jsx)(ft, {
        className: c,
        interactive: o,
        text: s,
        textClassName: `text-token-foreground`,
        tooltipText: i,
      })),
      (t[0] = o),
      (t[1] = c),
      (t[2] = s),
      (t[3] = i),
      (t[4] = l))
    : (l = t[4]);
  let u = l;
  if (n == null || a == null) return u;
  let d;
  t[5] !== n || t[6] !== r || t[7] !== a
    ? ((d = () => {
        a({
          agentRole: null,
          conversationId: n,
          diffStats: null,
          displayName: r.replace(/^@/u, ``),
          spawnModel: null,
          status: `done`,
          statusSummary: null,
        });
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = a),
      (t[8] = d))
    : (d = t[8]);
  let f;
  return (
    t[9] !== u || t[10] !== d
      ? ((f = (0, Q.jsx)(`button`, {
          type: `button`,
          className: `inline cursor-interaction bg-transparent p-0 text-left align-baseline`,
          onClick: d,
          children: u,
        })),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
function dt(e) {
  let n = (0, Y.c)(94),
    {
      ariaLabel: i,
      className: a,
      title: o,
      children: c,
      path: l,
      line: u,
      column: d,
      endLine: f,
      cwd: p,
      hostId: m,
      onOpen: g,
      openInSidePanel: _,
    } = e,
    b = _ === void 0 ? !1 : _,
    S = v(ee),
    C = x(`open-file`),
    w = ge(),
    T = y(ie),
    D = s(m ?? `local`),
    O = u == null ? void 0 : (d ?? 1),
    k = b,
    A;
  n[0] !== p ||
  n[1] !== f ||
  n[2] !== D ||
  n[3] !== m ||
  n[4] !== w ||
  n[5] !== u ||
  n[6] !== C.mutate ||
  n[7] !== b ||
  n[8] !== l ||
  n[9] !== O ||
  n[10] !== S
    ? ((A = (e) => {
        let { isPreview: t } = e === void 0 ? {} : e;
        re({
          scope: S,
          path: l,
          line: u,
          column: O,
          cwd: p,
          hostConfig: D,
          ...(m == null ? {} : { hostId: m }),
          artifactTabsEnabled: w,
          endLine: f,
          isPreview: t,
          openFile: C.mutate,
          openInSidePanel: b,
        });
      }),
      (n[0] = p),
      (n[1] = f),
      (n[2] = D),
      (n[3] = m),
      (n[4] = w),
      (n[5] = u),
      (n[6] = C.mutate),
      (n[7] = b),
      (n[8] = l),
      (n[9] = O),
      (n[10] = S),
      (n[11] = A))
    : (A = n[11]);
  let te = A,
    j;
  n[12] !== D || n[13] !== T || n[14] !== l
    ? ((j = T && !t(D) && r(l)),
      (n[12] = D),
      (n[13] = T),
      (n[14] = l),
      (n[15] = j))
    : (j = n[15]);
  let M = j,
    ne;
  n[16] !== p || n[17] !== m || n[18] !== l
    ? ((ne = he({ cwd: p, hostId: m, path: l })),
      (n[16] = p),
      (n[17] = m),
      (n[18] = l),
      (n[19] = ne))
    : (ne = n[19]);
  let N = ne,
    P;
  n[20] !== p ||
  n[21] !== f ||
  n[22] !== D ||
  n[23] !== m ||
  n[24] !== w ||
  n[25] !== T ||
  n[26] !== u ||
  n[27] !== C.mutate ||
  n[28] !== b ||
  n[29] !== N ||
  n[30] !== l ||
  n[31] !== O ||
  n[32] !== S
    ? ((P = async () => {
        let { primaryTarget: e } = pe(await S.queryClient.fetchQuery(N));
        re({
          scope: S,
          path: l,
          line: u,
          column: O,
          cwd: p,
          hostConfig: D,
          ...(m == null ? {} : { hostId: m }),
          artifactTabsEnabled: w,
          browserSidebarEnabled: T,
          endLine: f,
          modifiedClick: !0,
          openFile: C.mutate,
          openInSidePanel: b,
          target: e?.target,
          appPath: e?.appPath,
        });
      }),
      (n[20] = p),
      (n[21] = f),
      (n[22] = D),
      (n[23] = m),
      (n[24] = w),
      (n[25] = T),
      (n[26] = u),
      (n[27] = C.mutate),
      (n[28] = b),
      (n[29] = N),
      (n[30] = l),
      (n[31] = O),
      (n[32] = S),
      (n[33] = P))
    : (P = n[33]);
  let F = P,
    I;
  n[34] !== k ||
  n[35] !== M ||
  n[36] !== p ||
  n[37] !== f ||
  n[38] !== D ||
  n[39] !== m ||
  n[40] !== w ||
  n[41] !== T ||
  n[42] !== u ||
  n[43] !== g ||
  n[44] !== C.mutate ||
  n[45] !== b ||
  n[46] !== F ||
  n[47] !== l ||
  n[48] !== O ||
  n[49] !== S ||
  n[50] !== te
    ? ((I = (e, t) => {
        let n = t === void 0 ? !0 : t;
        if ((g?.(l), k && !M && !e)) {
          te({ isPreview: n });
          return;
        }
        if (e && (!r(l) || !k)) {
          F();
          return;
        }
        re({
          scope: S,
          path: l,
          line: u,
          column: O,
          cwd: p,
          hostConfig: D,
          ...(m == null ? {} : { hostId: m }),
          artifactTabsEnabled: w,
          browserSidebarEnabled: T,
          endLine: f,
          ...(b && !e ? { isPreview: n } : {}),
          modifiedClick: e,
          openFile: C.mutate,
          openInSidePanel: b,
        });
      }),
      (n[34] = k),
      (n[35] = M),
      (n[36] = p),
      (n[37] = f),
      (n[38] = D),
      (n[39] = m),
      (n[40] = w),
      (n[41] = T),
      (n[42] = u),
      (n[43] = g),
      (n[44] = C.mutate),
      (n[45] = b),
      (n[46] = F),
      (n[47] = l),
      (n[48] = O),
      (n[49] = S),
      (n[50] = te),
      (n[51] = I))
    : (I = n[51]);
  let L = I,
    R;
  n[52] !== N || n[53] !== S.queryClient
    ? ((R = async () => {
        await S.queryClient.prefetchQuery(N);
      }),
      (n[52] = N),
      (n[53] = S.queryClient),
      (n[54] = R))
    : (R = n[54]);
  let z = R,
    se;
  n[55] === z
    ? (se = n[56])
    : ((se = () => {
        z();
      }),
      (n[55] = z),
      (n[56] = se));
  let B = se,
    ce;
  n[57] === B
    ? (ce = n[58])
    : ((ce = (e) => {
        (e.button !== 2 && !oe(e)) || B();
      }),
      (n[57] = B),
      (n[58] = ce));
  let ue = ce,
    de;
  n[59] !== p ||
  n[60] !== f ||
  n[61] !== m ||
  n[62] !== u ||
  n[63] !== b ||
  n[64] !== l ||
  n[65] !== O ||
  n[66] !== S
    ? ((de = () =>
        me(S, {
          column: O,
          cwd: p,
          endLine: f,
          hostId: m,
          line: u,
          openInSidePanel: b,
          path: l,
        })),
      (n[59] = p),
      (n[60] = f),
      (n[61] = m),
      (n[62] = u),
      (n[63] = b),
      (n[64] = l),
      (n[65] = O),
      (n[66] = S),
      (n[67] = de))
    : (de = n[67]);
  let V = de,
    H;
  n[68] === a ? (H = n[69]) : ((H = h(le, a)), (n[68] = a), (n[69] = H));
  let U, W, G, K;
  n[70] === L
    ? ((U = n[71]), (W = n[72]), (G = n[73]), (K = n[74]))
    : ((U = (e) => {
        L(oe(e));
      }),
      (W = (e) => {
        L(oe(e), !1);
      }),
      (G = (e) => {
        if (e.key === `Enter`) {
          (e.preventDefault(), L(oe(e)));
          return;
        }
        e.key === ` ` && e.preventDefault();
      }),
      (K = (e) => {
        e.key === ` ` && (e.preventDefault(), L(oe(e)));
      }),
      (n[70] = L),
      (n[71] = U),
      (n[72] = W),
      (n[73] = G),
      (n[74] = K));
  let fe = o ?? l,
    q;
  n[75] === c
    ? (q = n[76])
    : ((q = (0, Q.jsx)(`span`, {
        className: `break-words whitespace-normal`,
        children: c,
      })),
      (n[75] = c),
      (n[76] = q));
  let J;
  n[77] !== fe || n[78] !== q
    ? ((J = (0, Q.jsx)(E, { tooltipContent: fe, children: q })),
      (n[77] = fe),
      (n[78] = q),
      (n[79] = J))
    : (J = n[79]);
  let X;
  n[80] !== i ||
  n[81] !== ue ||
  n[82] !== H ||
  n[83] !== U ||
  n[84] !== W ||
  n[85] !== G ||
  n[86] !== K ||
  n[87] !== J ||
  n[88] !== B
    ? ((X = (0, Q.jsx)(`span`, {
        "data-file-reference": !0,
        role: `button`,
        tabIndex: 0,
        "aria-label": i,
        className: H,
        onClick: U,
        onDoubleClick: W,
        onKeyDown: G,
        onKeyUp: K,
        onFocus: B,
        onMouseEnter: B,
        onPointerDown: ue,
        children: J,
      })),
      (n[80] = i),
      (n[81] = ue),
      (n[82] = H),
      (n[83] = U),
      (n[84] = W),
      (n[85] = G),
      (n[86] = K),
      (n[87] = J),
      (n[88] = B),
      (n[89] = X))
    : (X = n[89]);
  let Z;
  return (
    n[90] !== V || n[91] !== z || n[92] !== X
      ? ((Z = (0, Q.jsx)(ae, { getItems: V, onBeforeOpen: z, children: X })),
        (n[90] = V),
        (n[91] = z),
        (n[92] = X),
        (n[93] = Z))
      : (Z = n[93]),
    Z
  );
}
function $(e) {
  let t = (0, Y.c)(12),
    {
      brandColor: n,
      description: r,
      displayName: i,
      fallbackIcon: a,
      fallbackName: o,
      href: s,
      iconSmall: c,
      tooltipText: l,
    } = e,
    u = s ?? ``,
    d;
  t[0] !== r ||
  t[1] !== i ||
  t[2] !== a ||
  t[3] !== o ||
  t[4] !== c ||
  t[5] !== u
    ? ((d = K(null, {
        size: `small`,
        smallOnly: !0,
        alt: i,
        iconSmall: c,
        basePath: u,
        fallbackName: o,
        fallbackDescription: r,
        fallbackIcon: a ?? V(),
      })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = c),
      (t[5] = u),
      (t[6] = d))
    : (d = t[6]);
  let f = r ?? l,
    p;
  return (
    t[7] !== n || t[8] !== i || t[9] !== d || t[10] !== f
      ? ((p = (0, Q.jsx)(ft, {
          brandColor: n,
          icon: d,
          text: i,
          tooltipText: f,
        })),
        (t[7] = n),
        (t[8] = i),
        (t[9] = d),
        (t[10] = f),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function ft(e) {
  let t = (0, Y.c)(12),
    {
      brandColor: n,
      className: r,
      dataAttributes: i,
      icon: a,
      interactive: o,
      style: s,
      text: c,
      textClassName: l,
      tooltipText: u,
    } = e,
    d = o === void 0 ? !1 : o,
    f;
  t[0] !== n ||
  t[1] !== r ||
  t[2] !== i ||
  t[3] !== a ||
  t[4] !== d ||
  t[5] !== s ||
  t[6] !== c ||
  t[7] !== l
    ? ((f = (0, Q.jsx)(pt, {
        brandColor: n,
        className: r,
        dataAttributes: i,
        icon: a,
        interactive: d,
        style: s,
        text: c,
        textClassName: l,
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = d),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = f))
    : (f = t[8]);
  let p = f;
  if (u == null) return p;
  let m;
  return (
    t[9] !== p || t[10] !== u
      ? ((m = (0, Q.jsx)(E, { tooltipContent: u, children: p })),
        (t[9] = p),
        (t[10] = u),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
function pt(e) {
  let t = (0, Y.c)(23),
    {
      brandColor: n,
      className: r,
      dataAttributes: i,
      underlineOnHover: a,
      icon: o,
      interactive: s,
      style: c,
      text: l,
      textClassName: u,
      title: d,
    } = e,
    f = a === void 0 ? !1 : a,
    p = s === void 0 ? !1 : s,
    m;
  t[0] === o
    ? (m = t[1])
    : ((m =
        o == null
          ? null
          : (0, Z.isValidElement)(o)
            ? (0, Z.cloneElement)(o, { className: h(B, o.props.className) })
            : (0, Z.createElement)(o, { className: B })),
      (t[0] = o),
      (t[1] = m));
  let g = m,
    _ =
      f &&
      `group-hover/inline-mention:underline group-hover/inline-mention:decoration-current group-hover/inline-mention:decoration-dashed group-hover/inline-mention:decoration-[0.5px] group-hover/inline-mention:underline-offset-2`,
    v = p && `cursor-interaction`,
    y;
  t[2] !== r || t[3] !== _ || t[4] !== v
    ? ((y = h(ce, ue, _, v, r)), (t[2] = r), (t[3] = _), (t[4] = v), (t[5] = y))
    : (y = t[5]);
  let b;
  t[6] !== n || t[7] !== c
    ? ((b = de({ brandColor: n, style: c })),
      (t[6] = n),
      (t[7] = c),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] === g
    ? (x = t[10])
    : ((x =
        g == null ? null : (0, Q.jsx)(`span`, { className: se, children: g })),
      (t[9] = g),
      (t[10] = x));
  let S;
  t[11] === u
    ? (S = t[12])
    : ((S = h(`min-w-0 break-words`, u)), (t[11] = u), (t[12] = S));
  let C;
  t[13] !== S || t[14] !== l
    ? ((C = (0, Q.jsx)(`span`, { className: S, children: l })),
      (t[13] = S),
      (t[14] = l),
      (t[15] = C))
    : (C = t[15]);
  let w;
  return (
    t[16] !== i ||
    t[17] !== C ||
    t[18] !== y ||
    t[19] !== b ||
    t[20] !== x ||
    t[21] !== d
      ? ((w = (0, Q.jsxs)(`span`, {
          className: y,
          style: b,
          title: d,
          ...i,
          children: [x, C],
        })),
        (t[16] = i),
        (t[17] = C),
        (t[18] = y),
        (t[19] = b),
        (t[20] = x),
        (t[21] = d),
        (t[22] = w))
      : (w = t[22]),
    w
  );
}
function mt({
  className: e,
  cwd: t,
  elementKey: n,
  hostId: r,
  href: i,
  label: a,
  onFileLinkOpen: o,
  openFileLinksInSidePanel: s = !1,
}) {
  let u = a.trim();
  switch (P({ href: i, label: u })) {
    case `app`:
      return (0, Q.jsx)(
        at,
        { hostId: r, label: j(u), href: i, tooltipText: i },
        n,
      );
    case `plugin`:
      return (0, Q.jsx)(
        ot,
        { hostId: r, label: j(u), href: i, tooltipText: i },
        n,
      );
    case `agent`: {
      let e = A(i),
        t = te(i);
      return e == null && t == null
        ? null
        : (0, Q.jsx)(
            ut,
            { conversationId: e ?? void 0, label: j(u), tooltipText: i },
            n,
          );
    }
    case `mcp-resource`: {
      let e = ne(i);
      return e == null
        ? null
        : (0, Q.jsx)(
            st,
            { hostId: r, label: u, mention: e, tooltipText: e.resourceUri },
            n,
          );
    }
    case `skill`:
      return (0, Q.jsx)(
        it,
        {
          cwd: t,
          hostId: r,
          label: j(
            j(u) || i.split(`/`).slice(-2, -1)[0]?.replace(/-/g, ` `) || i,
          ),
          href: i,
          openInSidePanel: s,
          tooltipText: i,
        },
        n,
      );
    case `text`:
      break;
  }
  let f = ht(i);
  if (f != null) {
    let i = d(f),
      a = c(i);
    return (0, Q.jsx)(
      rt,
      {
        className: e,
        reference: i,
        label: yt({
          trimmedChildText: u,
          href: f,
          parsedReference: i,
          displayLabel: l(i),
          formattedLabel: a,
        }),
        tooltipText: a,
        cwd: t,
        hostId: r,
        onOpen: o,
        openInSidePanel: s,
      },
      n,
    );
  }
  return null;
}
function ht(e) {
  let t = gt(e);
  return o(t) || f(t) || _t(t) ? t : a(t);
}
function gt(e) {
  try {
    return decodeURI(e);
  } catch {
    return e;
  }
}
function _t(e) {
  return (
    /[\\/]$/.test(e) &&
    !e.startsWith(`//`) &&
    !/^[a-z][a-z0-9+.-]*:\/\//i.test(e) &&
    !/^www\./i.test(e) &&
    !/^(mailto|tel):/i.test(e)
  );
}
function vt(e) {
  return j(e);
}
function yt({
  trimmedChildText: e,
  href: t,
  parsedReference: n,
  displayLabel: r,
  formattedLabel: i,
}) {
  return e.length === 0 || e === t || e === i ? r : bt(e, n, i);
}
function bt(e, t, n) {
  if (!u(t)) return e;
  let r = n.slice(t.path.length);
  if (r.length === 0) return e;
  if (o(e)) {
    let n = d(e);
    if (xt(n.path, t.path)) return `${n.path}${r}`;
  }
  return e.endsWith(r) ? e : `${e}${r}`;
}
function xt(e, t) {
  let n = i(e).replace(/\/+$/, ``),
    r = i(t).replace(/\/+$/, ``);
  if (
    n === r ||
    (n.length > 0 && r.endsWith(`/${n}`)) ||
    (r.length > 0 && n.endsWith(`/${r}`))
  )
    return !0;
  let a = n.split(`/`).pop(),
    o = r.split(`/`).pop();
  return !a || !o || a !== o ? !1 : n === a || r === o;
}
var St = String.raw`\$(?:\[[^\]\n]+\]|[A-Za-z][\w-]*)`,
  Ct = String.raw`@[A-Za-z0-9][\w.-]*[\\/][\w./-]*`,
  wt = RegExp(`${St}|${Ct}`, `g`),
  Tt = RegExp(`^${St}$`);
function Et(e) {
  if (e.indexOf(`$`) === -1 && e.indexOf(`@`) === -1) return null;
  let t = [];
  for (wt.lastIndex = 0; ; ) {
    let n = wt.exec(e);
    if (n == null) break;
    t.push({ content: n[0], index: n.index });
  }
  return t.length === 0 ? null : t;
}
function Dt(e) {
  return e[0] === `$` && Tt.test(e);
}
export {
  rt as a,
  $ as c,
  ge as d,
  X as f,
  mt as i,
  tt as l,
  Dt as n,
  ft as o,
  vt as r,
  it as s,
  Et as t,
  _e as u,
};
//# sourceMappingURL=inline-mentions.js.map
