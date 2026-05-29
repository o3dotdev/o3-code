import { s as e } from "./chunk-Bj-mKKzh.js";
import { jr as t, mr as n, pr as r } from "./src-C.js";
import { cr as i, po as a } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as o, t as s } from "./jsx-runtime.js";
import { t as c } from "./clsx-BcPLHiun.js";
import {
  B as l,
  G as u,
  S as d,
  U as f,
  V as p,
  X as m,
  Y as h,
  _ as g,
  l as _,
  nt as v,
  u as y,
  wt as b,
} from "./setting-storage.js";
import { t as x } from "./useQueries-tUeWkfvR.js";
import { f as S } from "./chunk-LFPYN7LY.js";
import { p as C } from "./statsig--EYRNU53.js";
import { _ as w } from "./config-queries-BBeTQbuo.js";
import { t as T } from "./use-debounced-value-BtOJx-Vp.js";
import { t as E } from "./startCase.js";
import {
  E as D,
  T as O,
  _ as k,
  l as A,
  p as j,
  v as M,
} from "./mention-item.js";
import { t as N } from "./apps-DwfMzB5Q.js";
import { t as P } from "./plugin-install-store-Daxzgjai.js";
import { t as F } from "./use-platform.js";
import { m as I, v as L } from "./use-plugins-jIZrcuZQ.js";
import {
  i as ee,
  l as te,
  u as ne,
} from "./mcp-capability-signals-DAPblgpG.js";
import {
  a as R,
  c as re,
  f as ie,
  i as z,
  l as B,
  m as ae,
  o as oe,
  p as se,
  r as ce,
  s as le,
  t as ue,
  u as de,
} from "./use-native-apps.electron.js";
import { r as fe, t as pe } from "./get-file-icon.js";
import { n as me } from "./use-skills.js";
import { t as he } from "./use-is-background-subagents-enabled-B.js";
import { t as ge } from "./sortBy.js";
import { n as _e } from "./composer-top-menu-chrome.js";
import { s as ve } from "./dist-Cp6055if.js";
import { t as V } from "./score-query-match.js";
import { t as ye } from "./list-navigation-DnxNfoPi.js";
import { r as be } from "./mcp-capability-client.js";
import { t as xe } from "./use-workspace-file-search-KLsQKyAb.js";
var Se = `data-hotkey-window-home-composer-menu-open`;
function H(e) {
  return e === `/hotkey-window`;
}
var Ce = 200,
  U = 5,
  we = 3,
  Te = 4294967296,
  Ee = 2166136261,
  De = 131,
  Oe = [
    `var(--color-token-charts-yellow)`,
    `var(--color-token-charts-orange)`,
    `var(--color-token-charts-red)`,
    `var(--color-token-charts-purple)`,
    `var(--color-token-charts-blue)`,
  ];
function ke(e) {
  let t = Ae(`${e}:shape`),
    n = Ae(`${e}:color`),
    r = [],
    i = new Set();
  for (let e = 0; e < U; e += 1)
    for (let n = 0; n < we; n += 1) {
      if (!je(t, e * we + n)) continue;
      (r.push({ animationDelayMs: G(e), column: n, row: e }), i.add(W(n, e)));
      let a = U - 1 - n;
      a !== n &&
        (r.push({ animationDelayMs: G(e), column: a, row: e }), i.add(W(a, e)));
    }
  if (r.length === 0) {
    let e = Math.floor(U / 2);
    (r.push({ animationDelayMs: G(e), column: e, row: e }), i.add(W(e, e)));
  }
  return { cells: r, color: Ne(n), scanCells: Me(i) };
}
function Ae(e) {
  let t = Ee;
  for (let n = 0; n < e.length; n += 1) t = (t * De + e.charCodeAt(n)) % Te;
  return t;
}
function je(e, t) {
  return Math.floor(e / 2 ** t) % 2 == 1;
}
function W(e, t) {
  return `${t}:${e}`;
}
function Me(e) {
  let t = [];
  for (let n = 0; n < U; n += 1)
    for (let r = 0; r < U; r += 1)
      t.push({
        animationDelayMs: G(n),
        column: r,
        filled: e.has(W(r, n)),
        row: n,
      });
  return t;
}
function G(e) {
  return e * Ce;
}
function Ne(e) {
  return Pe(Math.floor((e / Te) * Oe.length));
}
function Pe(e) {
  return Oe[e % Oe.length] ?? `var(--color-token-charts-yellow)`;
}
var Fe = {
    emptyScanCell: `_emptyScanCell_1qzyf_1`,
    agentIdenticonEmptyScan: `_agentIdenticonEmptyScan_1qzyf_1`,
    filledScanCell: `_filledScanCell_1qzyf_6`,
    agentIdenticonFilledScan: `_agentIdenticonFilledScan_1qzyf_1`,
  },
  K = b(),
  q = s(),
  J = 4;
function Ie(e) {
  let t = (0, K.c)(28),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ active: a, className: n, seed: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = a === void 0 ? !1 : a,
    s,
    l,
    u,
    d,
    f,
    p,
    m,
    h;
  if (t[5] !== o || t[6] !== n || t[7] !== r || t[8] !== i) {
    let e = ke(i);
    ((s = r),
      t[17] === n
        ? (l = t[18])
        : ((l = c(`shrink-0`, n)), (t[17] = n), (t[18] = l)),
      (u = `-2 -1 24 24`),
      (d = `none`),
      (f = `crispEdges`),
      (p = `http://www.w3.org/2000/svg`),
      (m = e.cells.map((t) =>
        (0, q.jsx)(
          `rect`,
          {
            className: o ? Fe.filledScanCell : void 0,
            x: t.column * J,
            y: t.row * J,
            width: J,
            height: J,
            fill: e.color,
            style: o ? { animationDelay: `${t.animationDelayMs}ms` } : void 0,
          },
          `${t.row}:${t.column}`,
        ),
      )),
      (h = o
        ? e.scanCells.map((t) =>
            t.filled
              ? null
              : (0, q.jsx)(
                  `rect`,
                  {
                    className: Fe.emptyScanCell,
                    x: t.column * J,
                    y: t.row * J,
                    width: J,
                    height: J,
                    fill: e.color,
                    style: { animationDelay: `${t.animationDelayMs}ms` },
                  },
                  `scan:${t.row}:${t.column}`,
                ),
          )
        : null),
      (t[5] = o),
      (t[6] = n),
      (t[7] = r),
      (t[8] = i),
      (t[9] = s),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h));
  } else
    ((s = t[9]),
      (l = t[10]),
      (u = t[11]),
      (d = t[12]),
      (f = t[13]),
      (p = t[14]),
      (m = t[15]),
      (h = t[16]));
  let g;
  return (
    t[19] !== s ||
    t[20] !== l ||
    t[21] !== u ||
    t[22] !== d ||
    t[23] !== f ||
    t[24] !== p ||
    t[25] !== m ||
    t[26] !== h
      ? ((g = (0, q.jsxs)(`svg`, {
          ...s,
          className: l,
          viewBox: u,
          fill: d,
          shapeRendering: f,
          xmlns: p,
          children: [m, h],
        })),
        (t[19] = s),
        (t[20] = l),
        (t[21] = u),
        (t[22] = d),
        (t[23] = f),
        (t[24] = p),
        (t[25] = m),
        (t[26] = h),
        (t[27] = g))
      : (g = t[27]),
    g
  );
}
function Le(e, t) {
  let a = i(e.path)?.pluginMarketplaceName ?? null;
  return t == null || a == null || !n(a) || a === r(t);
}
var Y = e(o(), 1);
function Re(e) {
  let t = (0, K.c)(10),
    {
      isActive: n,
      isLoading: r,
      onRequestClose: i,
      query: a,
      resultCount: o,
    } = e,
    s = n === void 0 ? !0 : n,
    c;
  t[0] !== r || t[1] !== a || t[2] !== o
    ? ((c = ze({ isLoading: r, query: a, resultCount: o })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = o),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u,
    d;
  (t[4] !== s || t[5] !== i || t[6] !== a || t[7] !== l
    ? ((u = () => {
        s && l && i?.(a);
      }),
      (d = [s, i, a, l]),
      (t[4] = s),
      (t[5] = i),
      (t[6] = a),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d))
    : ((u = t[8]), (d = t[9])),
    (0, Y.useEffect)(u, d));
}
function ze({ isLoading: e, query: t, resultCount: n }) {
  return t.trim().length > 0 && /\s/.test(t) && !e && n === 0;
}
function Be(e) {
  let t = (0, K.c)(13),
    { children: n, className: r, chromeVariant: i, containerRef: a } = e,
    o = i === void 0 ? `default` : i,
    s = S(),
    l = o === `embeddedExpandedTopTray`;
  if (o === `expandedTopTray` || l || H(s.pathname)) {
    let e;
    t[0] === r
      ? (e = t[1])
      : ((e = c(`relative flex w-full flex-col overflow-hidden text-sm`, r)),
        (t[0] = r),
        (t[1] = e));
    let i;
    return (
      t[2] !== n || t[3] !== a || t[4] !== e || t[5] !== l
        ? ((i = (0, q.jsx)(_e, {
            embedded: l,
            expandedTopTray: !0,
            containerRef: a,
            className: e,
            children: n,
          })),
          (t[2] = n),
          (t[3] = a),
          (t[4] = e),
          (t[5] = l),
          (t[6] = i))
        : (i = t[6]),
      i
    );
  }
  let u;
  t[7] === r
    ? (u = t[8])
    : ((u = c(
        `border-token-border bg-token-dropdown-background/90 relative flex w-full flex-col overflow-hidden rounded-2xl border p-1 text-sm backdrop-blur-sm`,
        r,
      )),
      (t[7] = r),
      (t[8] = u));
  let d;
  return (
    t[9] !== n || t[10] !== a || t[11] !== u
      ? ((d = (0, q.jsx)(`div`, { ref: a, className: u, children: n })),
        (t[9] = n),
        (t[10] = a),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function Ve(e) {
  let t = (0, K.c)(7),
    { children: n, className: r, fadeMaskVariant: i, listRef: a } = e,
    o = i === void 0 ? `both` : i,
    s = `vertical-scroll-fade-mask`;
  o === `bottom`
    ? (s = `vertical-scroll-fade-mask-bottom`)
    : o === `top` && (s = `vertical-scroll-fade-mask-top`);
  let l;
  t[0] !== r || t[1] !== s
    ? ((l = c(s, `flex w-full flex-1 flex-col overflow-y-auto`, r)),
      (t[0] = r),
      (t[1] = s),
      (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== n || t[4] !== a || t[5] !== l
      ? ((u = (0, q.jsx)(`div`, { ref: a, className: l, children: n })),
        (t[3] = n),
        (t[4] = a),
        (t[5] = l),
        (t[6] = u))
      : (u = t[6]),
    u
  );
}
function He(e) {
  let t = (0, K.c)(6),
    { children: n, className: r, chromeVariant: i } = e,
    a = i === void 0 ? `default` : i,
    o = S(),
    s =
      a === `expandedTopTray` ||
      a === `embeddedExpandedTopTray` ||
      H(o.pathname)
        ? `px-row-x pb-1 text-sm text-token-description-foreground`
        : `bg-token-dropdown-background/95 text-token-description-foreground sticky top-0 z-10 px-row-x py-1 text-sm backdrop-blur-sm`,
    l;
  t[0] !== r || t[1] !== s
    ? ((l = c(s, r)), (t[0] = r), (t[1] = s), (t[2] = l))
    : (l = t[2]);
  let u;
  return (
    t[3] !== n || t[4] !== l
      ? ((u = (0, q.jsx)(`div`, { className: l, children: n })),
        (t[3] = n),
        (t[4] = l),
        (t[5] = u))
      : (u = t[5]),
    u
  );
}
function Ue(e) {
  let t = (0, K.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, q.jsx)(`div`, {
          className: `px-row-x py-row-y text-sm text-token-input-placeholder-foreground`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function We(e) {
  let t = (0, K.c)(10),
    { children: n, getItemProps: r, highlighted: i, itemIndex: a } = e,
    o;
  t[0] !== r || t[1] !== a
    ? ((o = r(a)), (t[0] = r), (t[1] = a), (t[2] = o))
    : (o = t[2]);
  let s = i
      ? `bg-token-list-hover-background opacity-100`
      : `hover:bg-token-list-hover-background hover:opacity-100`,
    l;
  t[3] === s
    ? (l = t[4])
    : ((l = c(
        `text-token-foreground outline-hidden opacity-75 focus:bg-token-list-hover-background cursor-interaction w-full shrink-0 overflow-hidden rounded-lg px-row-x py-row-y text-left text-sm`,
        s,
      )),
      (t[3] = s),
      (t[4] = l));
  let u;
  return (
    t[5] !== n || t[6] !== i || t[7] !== o || t[8] !== l
      ? ((u = (0, q.jsx)(`button`, {
          type: `button`,
          ...o,
          "aria-selected": i,
          className: l,
          children: n,
        })),
        (t[5] = n),
        (t[6] = i),
        (t[7] = o),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Ge = 8,
  Ke = `--composer-top-menu-max-height`;
function qe(e) {
  let t = (0, K.c)(4),
    { element: n, isEnabled: r } = e,
    i,
    a;
  (t[0] !== n || t[1] !== r
    ? ((i = () => {
        if (!r || n == null) return;
        let e = null,
          t = ``,
          i = () => {
            let e = n.getBoundingClientRect(),
              r = e.height === 0 ? e.top : e.bottom,
              i = `${Math.max(0, Math.floor(r - 46 - Ge))}px`;
            i !== t && ((t = i), n.style.setProperty(Ke, i));
          },
          a = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), i());
            });
          };
        i();
        let o = typeof ResizeObserver > `u` ? null : new ResizeObserver(a);
        return (
          o?.observe(n),
          typeof document < `u` && o?.observe(document.documentElement),
          () => {
            (e != null && window.cancelAnimationFrame(e),
              o?.disconnect(),
              n.style.removeProperty(Ke));
          }
        );
      }),
      (a = [n, r]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a))
    : ((i = t[2]), (a = t[3])),
    (0, Y.useLayoutEffect)(i, a));
}
function Je(e) {
  let t = (0, K.c)(4),
    [n, r] = (0, Y.useState)(null),
    i;
  (t[0] !== n || t[1] !== e
    ? ((i = { element: n, isEnabled: e }), (t[0] = n), (t[1] = e), (t[2] = i))
    : (i = t[2]),
    qe(i));
  let a;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (e) => {
          r(e);
        }),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Ye(e) {
  let t = (0, K.c)(8),
    { hostId: n } = e,
    r = n === void 0 ? a : n,
    i = m(d),
    o = h(C, `3669474837`),
    s;
  t[0] === o ? (s = t[1]) : ((s = { enabled: o }), (t[0] = o), (t[1] = s));
  let { installedPlugins: c } = I(r, void 0, s),
    l,
    u;
  return (
    t[2] !== o || t[3] !== r || t[4] !== c || t[5] !== i
      ? ((l = () => {
          let e = o ? c.filter(Ze) : [];
          (i.set(ne, r, e), i.set(ee, r, e.flatMap(Xe)));
        }),
        (u = [o, r, c, i]),
        (t[2] = o),
        (t[3] = r),
        (t[4] = c),
        (t[5] = i),
        (t[6] = l),
        (t[7] = u))
      : ((l = t[6]), (u = t[7])),
    (0, Y.useEffect)(l, u),
    null
  );
}
function Xe(e) {
  let { plugin: t } = e;
  return t.source.type === `local` ? [{ id: t.id, path: t.source.path }] : [];
}
function Ze(e) {
  let { plugin: t } = e;
  return t.installed && t.enabled && t.source.type === `local`;
}
var Qe = v(d, ({ hostId: e, path: t, query: n, servers: r }, { scope: i }) => ({
  queryKey: [`mcp-capability-mentions`, e, $e(r), t, n],
  queryFn: () => be(i, e, r, { path: t, query: n }),
  enabled: r.length > 0,
  staleTime: 0,
}));
function $e(e) {
  return e.map(({ pluginId: e, server: t }) => `${e}:${t}`);
}
function et({ installedPlugins: e, pluginSections: t, query: n, servers: r }) {
  if (r.length === 0) return t;
  let i = it({ installedPlugins: e, query: n, servers: r });
  if (i.length === 0) return t;
  let a = new Set(i.map(({ pluginId: e }) => `plugin:${M(e)}`)),
    o = i.map(({ item: e }) => e),
    s = !1,
    c = t.map((e) =>
      e.id === `plugins`
        ? ((s = !0),
          { ...e, items: [...o, ...e.items.filter(({ key: e }) => !a.has(e))] })
        : e,
    );
  return s
    ? c
    : [
        {
          id: `plugins`,
          title: l({
            id: `composer.atMentionList.appPlugins`,
            defaultMessage: `Plugins`,
            description: `Section header for plugin mention sources in the @ mention list`,
          }),
          items: o,
          emptyState: null,
          isLoading: !1,
        },
        ...c,
      ];
}
function tt({ isLoading: e, mentionSource: t, results: n, servers: r }) {
  let i = t.path.at(-1)?.title ?? t.pluginLabel,
    a = r.length > 1;
  return at({ results: n, servers: r }).flatMap(
    ({ items: n, server: r, serverTitle: o }) => {
      let s =
        n == null ? void 0 : ot({ items: n, mentionSource: t, server: r });
      return (s?.length ?? 0) === 0 && !e
        ? []
        : a
          ? [
              {
                id: `mcp-capability:${t.pluginId}:${r}`,
                title: l({
                  id: `composer.atMentionList.appPluginServer`,
                  defaultMessage: `{server}`,
                  description: `Section header for one app capability mention server`,
                }),
                titleValues: { server: o },
                items: s ?? [],
                emptyState: e && s == null ? lt.appPluginsLoading : null,
                isLoading: e,
                showTitle: !0,
              },
            ]
          : [
              {
                id: `mcp-capability:${t.pluginId}:${r}`,
                title: l({
                  id: `composer.atMentionList.appPluginScope`,
                  defaultMessage: `{scope}`,
                  description: `Section header for the current app capability mention scope`,
                }),
                titleValues: { scope: i },
                items: s ?? [],
                emptyState: e && s == null ? lt.appPluginsLoading : null,
                isLoading: e,
                showTitle: !0,
              },
            ];
    },
  );
}
function nt(e) {
  return e?.kind === `mcp-capability`;
}
function rt(e) {
  return ({ composerController: t, mentionState: n }) => {
    t.setAtMentionSource(e, n);
  };
}
function it({ installedPlugins: e, query: t, servers: n }) {
  let r = new Map(e.map((e) => [e.plugin.id, e])),
    i = t.trim().length > 0;
  return [...new Set(n.map(({ pluginId: e }) => e))]
    .flatMap((e) => {
      let n = r.get(e);
      if (n == null) return [];
      let a = n.displayName ?? n.plugin.name,
        o = A(n),
        s = V(a, t);
      return i && s === 0
        ? []
        : [
            {
              item: {
                detail: null,
                icon: z(n),
                insertMention: rt({
                  kind: `mcp-capability`,
                  brandColor: o.brandColor,
                  iconSmall: o.iconSmall,
                  path: [],
                  pluginId: e,
                  pluginLabel: a,
                  server: null,
                }),
                key: `mcp-capability:${e}`,
                label: a,
              },
              pluginId: e,
              score: s,
            },
          ];
    })
    .sort(ct);
}
function at({ results: e, servers: t }) {
  let n = new Map(e?.map(({ items: e, server: t }) => [t, e]));
  return t.map(({ server: e, serverTitle: t }) => ({
    items: n.get(e),
    server: e,
    serverTitle: t,
  }));
}
function ot({ items: e, mentionSource: t, server: n }) {
  return e.map((e, r) => {
    switch (e.type) {
      case `group`:
        return {
          detail: null,
          insertMention: rt({ ...t, path: [...t.path, e], server: n }),
          key: `mcp-capability-group:${n}:${e.id}:${r}`,
          label: e.title,
        };
      case `resource`:
        return {
          detail: null,
          icon: st(e),
          insertMention: ({ composerController: r, mentionState: i }) => {
            r.insertResourceMentionFromAtMention(
              {
                brandColor: t.brandColor,
                iconSmall: t.iconSmall,
                pluginId: t.pluginId,
                resourceUri: e.resourceUri,
                server: n,
              },
              e.title,
              i,
            );
          },
          key: `mcp-capability-resource:${n}:${e.resourceUri}:${r}`,
          label: e.title,
        };
    }
  });
}
function st(e) {
  let t = X(e.resourceUri, `file_name`) ?? X(e.resourceUri, `filename`),
    n = X(e.resourceUri, `mime_type`) ?? X(e.resourceUri, `mimeType`),
    r = fe(t ?? e.title, n);
  if (!(r === `file` && t == null && n == null)) return pe[r];
}
function X(e, t) {
  try {
    return new URL(e).searchParams.get(t) ?? void 0;
  } catch {
    return;
  }
}
function ct(e, t) {
  return t.score - e.score || e.item.label.localeCompare(t.item.label);
}
var lt = p({
  appPluginsLoading: {
    id: `composer.atMentionList.appPluginsLoading`,
    defaultMessage: `Loading plugins…`,
    description: `Shown in the plugins section when plugin mention providers are loading`,
  },
});
function ut(e) {
  return e.flatMap((e) => e?.sections ?? []);
}
var Z = e(ge(), 1);
function dt({
  backgroundAgents: e,
  excludedConversationIds: t = [],
  query: n,
}) {
  if (e.length === 0) return null;
  let r = e.filter((e) => !t.includes(e.conversationId)),
    i = n.trim(),
    a = i.length === 0 ? r : ft(r, i).filter((e) => mt(e, i) > 0);
  return {
    sections: [
      {
        id: `agents`,
        title: l({
          id: `composer.atMentionList.liveAgents`,
          defaultMessage: `Live agents`,
          description: `Section header for live agent results in the @ mention list.`,
        }),
        items: a.map((e) => ({
          key: `agent:${e.conversationId}`,
          label: e.displayName,
          detail: e.agentRole,
          iconElement: (0, Y.createElement)(Ie, {
            active: e.status === `active`,
            className: `icon-xs shrink-0`,
            seed: e.conversationId,
            "aria-hidden": !0,
          }),
          insertMention: ({ composerController: t, mentionState: n }) => {
            t.insertAgentMention(e, n);
          },
        })),
        emptyState: null,
        isLoading: !1,
      },
    ],
  };
}
function ft(e, t) {
  return (0, Z.default)(
    e.map((e, n) => ({ agent: e, score: mt(e, t), index: n })),
    [(e) => -e.score, (e) => e.agent.displayName, (e) => e.index],
  ).map((e) => e.agent);
}
function pt(e) {
  switch (e.status) {
    case `active`:
      return e.statusSummary == null ? `Thinking` : e.statusSummary;
    case `waiting`:
      return `Waiting`;
    case `done`:
      return `Done`;
  }
}
function mt(e, t) {
  return Math.max(
    V(e.displayName, t),
    V(`@${e.displayName}`, t),
    V(e.agentRole ?? ``, t),
    V(pt(e), t),
  );
}
var ht = e(E(), 1);
function gt({ agents: e, query: t }) {
  if (e.length === 0) return null;
  let n = t.trim(),
    r = n.length === 0 ? e : _t(e, n).filter((e) => vt(e, n) > 0);
  return {
    sections: [
      {
        id: `custom-agents`,
        title: l({
          id: `composer.atMentionList.customAgents`,
          defaultMessage: `Custom agents`,
          description: `Section header for configured custom agent results in the @ mention list.`,
        }),
        items: r.map((e) => ({
          key: `subagent:${e.roleName}`,
          label: (0, ht.default)(e.roleName),
          detail: e.description,
          insertMention: ({ composerController: t, mentionState: n }) => {
            t.insertConfiguredAgentMention(e, n);
          },
        })),
        emptyState: null,
        isLoading: !1,
      },
    ],
  };
}
function _t(e, t) {
  return (0, Z.default)(
    e.map((e, n) => ({ agent: e, score: vt(e, t), index: n })),
    [(e) => -e.score, (e) => e.agent.roleName, (e) => e.index],
  ).map((e) => e.agent);
}
function vt(e, t) {
  return Math.max(
    V(e.roleName, t),
    V(`@${e.roleName}`, t),
    V(e.description ?? ``, t),
    ...e.nicknameCandidates.map((e) => V(e, t)),
  );
}
var yt = [],
  bt = { sections: [] };
function xt(e) {
  let t = (0, K.c)(14),
    { hostId: n, isQueryPending: r, query: i, roots: a } = e,
    o = r === void 0 ? !1 : r,
    s;
  t[0] !== n || t[1] !== i || t[2] !== a
    ? ((s = { hostId: n, includeDirectories: !0, query: i, roots: a }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = s))
    : (s = t[3]);
  let { files: c, isLoading: u } = xe(s),
    d = i.trim();
  if (a == null || a.length === 0) return bt;
  let f = null;
  if (d.length === 0) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = l({
          id: `composer.atMentionList.emptyQuery`,
          defaultMessage: `Type to search for files`,
          description: `Shown in the files section when the query is empty`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (f = e));
  } else if (o || c == null || (u && c.length === 0)) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = l({
          id: `composer.atMentionList.loading`,
          defaultMessage: `Searching files…`,
          description: `Shown in the files section when fuzzy search is loading and no results have arrived yet`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (f = e));
  }
  let p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = l({
        id: `composer.atMentionList.files`,
        defaultMessage: `Files`,
        description: `Section header for file results in the @ mention list.`,
      })),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === c
    ? (m = t[8])
    : ((m = c == null ? yt : c.map(St)), (t[7] = c), (t[8] = m));
  let h = u || o,
    g;
  return (
    t[9] !== f || t[10] !== p || t[11] !== m || t[12] !== h
      ? ((g = {
          sections: [
            { id: `files`, title: p, items: m, emptyState: f, isLoading: h },
          ],
        }),
        (t[9] = f),
        (t[10] = p),
        (t[11] = m),
        (t[12] = h),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
function St(e) {
  return {
    key: `file:${e.fsPath ?? e.path}`,
    label: e.label,
    detail: e.relativePathWithoutFileName,
    icon: le(e),
    insertMention: (t) => {
      let { composerController: n, mentionState: r } = t;
      n.insertAtMention(e, r);
    },
    completeQuery:
      e.matchType === `directory`
        ? (t) => {
            let { composerController: n, mentionState: r } = t;
            if (r.anchorPos == null) return;
            let { view: i } = n,
              { state: a, dispatch: o } = i,
              s = r.anchorPos,
              c = r.anchorPos + r.query.length,
              l = /[\\/]$/.test(e.path) ? e.path : `${e.path}/`,
              u = a.tr.insertText(l, s, c);
            (u.setSelection(ve.create(u.doc, s + l.length)), o(u), i.focus());
          }
        : void 0,
  };
}
var Q = [`chrome-dev`, `chrome-internal`, `chrome`],
  $ = p({
    macTitle: {
      id: `computerUse.nativeApps.mac.title`,
      defaultMessage: `Mac apps`,
      description: `Section header for native macOS app mentions powered by the Computer Use plugin in the @ mention list.`,
    },
    macLoading: {
      id: `computerUse.nativeApps.mac.loading`,
      defaultMessage: `Loading Mac apps…`,
      description: `Shown in the native app mentions section when macOS app discovery is loading and no results have arrived yet.`,
    },
    desktopTitle: {
      id: `computerUse.nativeApps.desktop.title`,
      defaultMessage: `Desktop apps`,
      description: `Fallback section header for native desktop app mentions powered by the Computer Use plugin in the @ mention list.`,
    },
    desktopLoading: {
      id: `computerUse.nativeApps.desktop.loading`,
      defaultMessage: `Loading desktop apps…`,
      description: `Shown in the native app mentions section when desktop app discovery is loading and no results have arrived yet.`,
    },
  });
function Ct(e) {
  let t = (0, K.c)(12),
    {
      chromeAppPlugins: n,
      computerUsePlugin: r,
      onPluginMentionInserted: i,
      pluginMentionLabels: a,
      query: o,
    } = e,
    s = u(),
    { platform: c } = F(),
    l = o.trim().toLowerCase(),
    d = r != null,
    f;
  t[0] === d ? (f = t[1]) : ((f = { enabled: d }), (t[0] = d), (t[1] = f));
  let { nativeApps: p, isLoading: m } = ue(f),
    h;
  t[2] === c ? (h = t[3]) : ((h = Ot(c)), (t[2] = c), (t[3] = h));
  let v = h,
    b = s.formatMessage({
      id: `computerUse.label`,
      defaultMessage: `Computer use`,
      description: `Label for the Computer Use feature`,
    }),
    S = n[0] ?? null,
    C = p.find(Et) ?? null,
    w =
      l.length > 0 && S != null && Dt(S, l)
        ? {
            kind: `chrome-plugin`,
            plugin: S,
            mention: { ...R(S, a), name: B, displayName: B, description: b },
            nativeApp: C == null ? null : { ...C, displayName: ie(C) },
          }
        : null,
    T =
      l.length === 0 || r == null
        ? []
        : p
            .filter((e) => !(S != null && ae(e)))
            .map((e) => {
              let t = ie(e);
              return {
                kind: `native-app`,
                app: t === e.displayName ? e : { ...e, displayName: t },
                plugin: r,
              };
            })
            .filter((e) => kt(e.app.displayName, l)),
    E = [...(w == null ? [] : [w]), ...T].slice(0, 2),
    D = E.flatMap(Tt),
    O = x({
      queries: D.map((e) => ({
        queryKey: y(`computer-use-native-desktop-app-icon`, {
          appPath: e.appPath,
        }),
        queryFn: () =>
          _(`computer-use-native-desktop-app-icon`, {
            params: { appPath: e.appPath },
          }),
        enabled: r != null,
        staleTime: g.INFINITE,
        refetchOnWindowFocus: !1,
      })),
    }),
    k = l.length > 0 && m && w == null && T.length === 0 ? v.loading : null;
  if ((r == null && w == null) || (E.length === 0 && k == null)) return null;
  let A = v.title,
    j = E.map((e) => {
      if (e.kind === `chrome-plugin`) {
        let t =
          e.nativeApp == null
            ? ``
            : (O[D.indexOf(e.nativeApp)]?.data?.iconSmall ?? ``);
        return {
          key: `plugin:${e.mention.path}`,
          label: B,
          detail: b,
          icon:
            e.nativeApp == null
              ? z(e.plugin, a)
              : oe(null, {
                  size: `small`,
                  smallOnly: !0,
                  iconSmall: t,
                  basePath: e.nativeApp.appPath,
                  alt: B,
                  fallbackName: e.nativeApp.bundleId,
                  fallbackIcon: N,
                }),
          insertMention: (t) => {
            let { composerController: n, mentionState: r } = t;
            (n.insertMentionFromAtMention(e.mention, r), i?.(e.plugin));
          },
        };
      }
      let t = O[D.indexOf(e.app)]?.data?.iconSmall ?? ``,
        n = se({
          app: e.app,
          description: b,
          computerPlugin: e.plugin,
          iconSmall: t,
        });
      return {
        key: `plugin:${n.path}:${e.app.bundleId}`,
        label: e.app.displayName,
        detail: b,
        icon: oe(null, {
          size: `small`,
          smallOnly: !0,
          iconSmall: t,
          basePath: e.app.appPath,
          alt: e.app.displayName,
          fallbackName: e.app.bundleId,
          fallbackIcon: N,
        }),
        insertMention: (t) => {
          let { composerController: r, mentionState: a } = t;
          (r.insertMentionFromAtMention(n, a), i?.(e.plugin));
        },
      };
    }),
    M;
  t[4] !== m || t[5] !== O
    ? ((M = m || O.some(wt)), (t[4] = m), (t[5] = O), (t[6] = M))
    : (M = t[6]);
  let P;
  return (
    t[7] !== k || t[8] !== j || t[9] !== M || t[10] !== v.title
      ? ((P = {
          id: `native-apps`,
          title: A,
          items: j,
          emptyState: k,
          isLoading: M,
        }),
        (t[7] = k),
        (t[8] = j),
        (t[9] = M),
        (t[10] = v.title),
        (t[11] = P))
      : (P = t[11]),
    P
  );
}
function wt(e) {
  return e.isLoading;
}
function Tt(e) {
  return e.kind === `native-app`
    ? [e.app]
    : e.nativeApp == null
      ? []
      : [e.nativeApp];
}
function Et(e) {
  return ae(e);
}
function Dt(e, t) {
  return (
    Math.max(
      V(e.plugin.name, t),
      V(e.displayName ?? ``, t),
      V(B, t),
      V(`@${B}`, t),
    ) > 0
  );
}
function Ot(e) {
  return e === `macOS`
    ? { title: $.macTitle, loading: $.macLoading }
    : { title: $.desktopTitle, loading: $.desktopLoading };
}
function kt(e, t) {
  return e
    .toLocaleLowerCase()
    .split(/\s+/)
    .some((e) => e.startsWith(t));
}
var At = [O, ...Q],
  jt = `DISABLED_BY_ADMIN`;
function Mt(e) {
  let t = (0, K.c)(7),
    { hostId: n, query: r, roots: i } = e,
    a = u(),
    { platform: o } = F(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { installSuggestionPluginNames: At }), (t[0] = s))
    : (s = t[0]);
  let { availablePlugins: c, isLoading: d } = I(n, i, s),
    { availablePlugins: f, isLoading: p } = I(n, i),
    m = [...c],
    h = new Set(c.map(Pt));
  for (let e of f) {
    let t = Pt(e);
    e.plugin.installed && !h.has(t) && (m.push(e), h.add(t));
  }
  let g = d || p,
    { openPluginInstall: _ } = P(),
    v = k(a),
    y = r.trim(),
    b = m.filter(Nt),
    x = de(b),
    S = o === `macOS` || o === `windows`,
    C = S ? It(b) : [],
    w = new Set(C),
    T = S ? b.filter((e) => !w.has(e) && (e.plugin.installed || !Ft(e))) : b,
    E;
  t[1] === _
    ? (E = t[2])
    : ((E = (e) => {
        e.plugin.installed || _(e);
      }),
      (t[1] = _),
      (t[2] = E));
  let D = E,
    O = Ct({
      chromeAppPlugins: C,
      computerUsePlugin: x,
      onPluginMentionInserted: D,
      pluginMentionLabels: v,
      query: r,
    }),
    A = y.length === 0 ? T : Rt(T, y, v).filter((e) => zt(e, y, v) > 0),
    j = g && A.length === 0;
  if (A.length === 0 && !j && O == null) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { sections: [] }), (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let M = [];
  if (A.length > 0 || j) {
    let e;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = l({
          id: `composer.atMentionList.plugins`,
          defaultMessage: `Plugins`,
          description: `Section header for plugin results in the @ mention list.`,
        })),
        (t[4] = e))
      : (e = t[4]);
    let n;
    (t[5] === j
      ? (n = t[6])
      : ((n = j
          ? l({
              id: `composer.atMentionList.pluginsLoading`,
              defaultMessage: `Loading plugins…`,
              description: `Shown in the plugins section when plugin discovery is loading and no results have arrived yet`,
            })
          : null),
        (t[5] = j),
        (t[6] = n)),
      M.push({
        id: `plugins`,
        title: e,
        items: A.map((e) => {
          let t = R(e, v);
          return {
            key: `plugin:${t.path}`,
            label: t.displayName,
            detail: ce(e),
            icon: z(e, v),
            insertMention: (n) => {
              let { composerController: r, mentionState: i } = n;
              (r.insertMentionFromAtMention(t, i), D(e));
            },
          };
        }),
        emptyState: n,
        isLoading: g,
      }));
  }
  return (O != null && M.push(O), { sections: M });
}
function Nt(e) {
  return e.plugin.availability === jt
    ? !1
    : e.plugin.enabled
      ? !0
      : !e.plugin.installed && At.includes(e.plugin.name);
}
function Pt(e) {
  return (e.displayName?.trim() || e.plugin.name).toLowerCase();
}
function Ft(e) {
  return Q.includes(e.plugin.name);
}
function It(e) {
  let t = L(),
    n = r(t),
    i = Lt(t);
  return (0, Z.default)(
    e.filter((e) => Ft(e) && e.marketplaceName === n),
    [(e) => (e.plugin.name === i ? 0 : 1), (e) => Q.indexOf(e.plugin.name)],
  );
}
function Lt(e) {
  switch (e) {
    case t.Dev:
      return `chrome-dev`;
    case t.Agent:
    case t.Prod:
    case t.PublicBeta:
      return `chrome`;
    case t.InternalAlpha:
    case t.Nightly:
    case t.Owl:
      return `chrome-internal`;
  }
}
function Rt(e, t, n) {
  return (0, Z.default)(
    e.map((e, r) => ({ plugin: e, score: zt(e, t, n), index: r })),
    [(e) => -e.score, (e) => R(e.plugin, n).displayName, (e) => e.index],
  ).map((e) => e.plugin);
}
function zt(e, t, n) {
  let r = R(e, n);
  return Math.max(
    V(e.plugin.name, t),
    V(e.displayName ?? ``, t),
    V(r.displayName, t),
    V(`@${r.displayName}`, t),
    V(`@${e.displayName ?? e.plugin.name}`, t),
  );
}
function Bt(e) {
  let t = (0, K.c)(14),
    { hostId: n, query: r, roots: i } = e,
    a = r.trim(),
    o = a.length > 0,
    s;
  t[0] === o ? (s = t[1]) : ((s = { enabled: o }), (t[0] = o), (t[1] = s));
  let { skills: c, isLoading: u } = me(i, n, s),
    d;
  t[2] === o ? (d = t[3]) : ((d = { enabled: o }), (t[2] = o), (t[3] = d));
  let { installedPlugins: f, isLoading: p } = I(n ?? `local`, i, d),
    m = new Set(f.map(Ht)),
    h = L();
  if (!o) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { sections: [] }), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let g = Wt(
      c.filter((e) => Ut(e, m, p, h)),
      a,
    ).filter((e) => Kt(e, a)),
    _ = u && g.length === 0;
  if (g.length === 0 && !_) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { sections: [] }), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let v;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = l({
        id: `composer.atMentionList.skills`,
        defaultMessage: `Skills`,
        description: `Section header for skill results in the @ mention list.`,
      })),
      (t[6] = v))
    : (v = t[6]);
  let y = g.map(Vt),
    b;
  t[7] === _
    ? (b = t[8])
    : ((b = _
        ? l({
            id: `composer.atMentionList.skillsLoading`,
            defaultMessage: `Loading skills…`,
            description: `Shown in the skills section when skill discovery is loading and no results have arrived yet`,
          })
        : null),
      (t[7] = _),
      (t[8] = b));
  let x;
  return (
    t[9] !== u || t[10] !== v || t[11] !== y || t[12] !== b
      ? ((x = {
          sections: [
            { id: `skills`, title: v, items: y, emptyState: b, isLoading: u },
          ],
        }),
        (t[9] = u),
        (t[10] = v),
        (t[11] = y),
        (t[12] = b),
        (t[13] = x))
      : (x = t[13]),
    x
  );
}
function Vt(e) {
  let t = j(e);
  return {
    key: `skill:${t.path}`,
    label: t.displayName,
    detail: D(e),
    icon: re(),
    insertMention: (e) => {
      let { composerController: n, mentionState: r } = e;
      n.insertMentionFromAtMention(t, r);
    },
  };
}
function Ht(e) {
  return e.plugin.name;
}
function Ut(e, t, n, r = null) {
  if (!e.enabled || !Le(e, r)) return !1;
  let a = i(e.path)?.pluginId;
  return a == null || !Q.includes(a) || (!n && !t.has(a));
}
function Wt(e, t) {
  return (0, Z.default)(
    e.map((e, n) => ({ skill: e, score: Gt(e, t), index: n })),
    [
      (e) => -e.score,
      (e) =>
        e.skill.displayName == null || e.skill.displayName === ``
          ? e.skill.name
          : e.skill.displayName,
      (e) => e.index,
    ],
  ).map((e) => e.skill);
}
function Gt(e, t) {
  return Math.max(
    V(e.name, t),
    V(e.displayName ?? ``, t),
    V(`@${e.displayName ?? e.name}`, t),
  );
}
function Kt(e, t) {
  let n = t.trim().toLowerCase();
  return n.length === 0
    ? !0
    : [e.name, e.displayName ?? ``, `@${e.displayName ?? e.name}`].some((e) =>
        e.toLowerCase().includes(n),
      );
}
function qt(e) {
  let t = (0, K.c)(15),
    {
      backgroundAgents: n,
      excludedAgentConversationIds: r,
      hostId: i,
      roots: a,
      skillRoots: o,
      query: s,
    } = e,
    c = n === void 0 ? [] : n,
    u = r === void 0 ? [] : r,
    d = he(),
    f = T(s, 100),
    p = f !== s,
    m;
  t[0] !== f || t[1] !== i || t[2] !== a || t[3] !== p
    ? ((m = { hostId: i, query: f, roots: a, isQueryPending: p }),
      (t[0] = f),
      (t[1] = i),
      (t[2] = a),
      (t[3] = p),
      (t[4] = m))
    : (m = t[4]);
  let g = xt(m),
    _ = h(te, i),
    v = h(ne, i),
    y = o ?? a,
    b;
  t[5] !== i || t[6] !== s || t[7] !== y
    ? ((b = { hostId: i, query: s, roots: y }),
      (t[5] = i),
      (t[6] = s),
      (t[7] = y),
      (t[8] = b))
    : (b = t[8]);
  let x = et({
      installedPlugins: v,
      pluginSections: Mt(b).sections,
      query: s,
      servers: _,
    }),
    S;
  t[9] !== i || t[10] !== s || t[11] !== o
    ? ((S = { hostId: i, query: s, roots: o }),
      (t[9] = i),
      (t[10] = s),
      (t[11] = o),
      (t[12] = S))
    : (S = t[12]);
  let C = Bt(S),
    { data: E, isLoading: D } = w(a, d),
    O = new Set(
      c.flatMap((e) =>
        e.agentRole == null || u.includes(e.conversationId)
          ? []
          : [e.agentRole],
      ),
    ),
    k = E?.roles.filter((e) => !O.has(e.roleName)) ?? [],
    A = dt({ backgroundAgents: c, excludedConversationIds: u, query: s }),
    j = d ? gt({ agents: k, query: s }) : null,
    M = A?.sections[0] ?? null,
    N = j?.sections[0] ?? null,
    P = [...(M?.items ?? []), ...(N?.items ?? [])],
    F =
      P.length === 0 && !D
        ? null
        : {
            id: `agents`,
            title: l({
              id: `composer.atMentionList.agents`,
              defaultMessage: `Agents`,
              description: `Section header for agent results in the @ mention list.`,
            }),
            items: P,
            emptyState:
              P.length === 0
                ? l({
                    id: `composer.atMentionList.agentsLoading`,
                    defaultMessage: `Loading agents…`,
                    description: `Shown in the agents section when configured agents are loading and no results have arrived yet.`,
                  })
                : null,
            isLoading: D,
          },
    I = Yt(
      Jt(ut([F == null ? null : { sections: [F] }, { sections: x }, C, g]), s),
    ),
    L;
  return (
    t[13] === I
      ? (L = t[14])
      : ((L = { sections: I }), (t[13] = I), (t[14] = L)),
    L
  );
}
function Jt(e, t = ``) {
  return e.map((e) => {
    let n = Xt(e.id, t);
    return n == null || e.items.length <= n
      ? e
      : { ...e, items: e.items.slice(0, n) };
  });
}
function Yt(e) {
  let t = 8;
  return e.flatMap((e) => {
    if (e.items.length === 0) return e.emptyState == null ? [] : [e];
    if (t === 0) return [];
    let n = e.items.slice(0, t);
    return ((t -= n.length), [{ ...e, items: n }]);
  });
}
function Xt(e, t) {
  let n = t.trim().length > 0;
  switch (e) {
    case `plugins`:
      return n ? 3 : null;
    case `skills`:
      return 2;
    default:
      return null;
  }
}
var Zt = {
  loadingBar: `_loadingBar_1g9nv_1`,
  "loading-bar-slide": `_loading-bar-slide_1g9nv_1`,
};
function Qt(e) {
  let t = (0, K.c)(29),
    {
      backgroundAgents: n,
      className: r,
      chromeVariant: i,
      excludedAgentConversationIds: a,
      hostId: o,
      isHomeMenu: s,
      keyboardEventTarget: c,
      onAddContext: l,
      onRequestClose: u,
      onUpdateSelectedMention: d,
      query: f,
      roots: p,
      skillRoots: m,
      source: h,
    } = e,
    g;
  t[0] === n
    ? (g = t[1])
    : ((g = n === void 0 ? [] : n), (t[0] = n), (t[1] = g));
  let _ = g,
    v = i === void 0 ? `default` : i,
    y;
  t[2] === a
    ? (y = t[3])
    : ((y = a === void 0 ? [] : a), (t[2] = a), (t[3] = y));
  let b = y,
    x = s === void 0 ? !1 : s;
  if (nt(h)) {
    let e;
    return (
      t[4] !== v ||
      t[5] !== r ||
      t[6] !== o ||
      t[7] !== x ||
      t[8] !== c ||
      t[9] !== l ||
      t[10] !== u ||
      t[11] !== d ||
      t[12] !== f ||
      t[13] !== h
        ? ((e = (0, q.jsx)(en, {
            className: r,
            chromeVariant: v,
            hostId: o,
            isHomeMenu: x,
            keyboardEventTarget: c,
            onAddContext: l,
            onRequestClose: u,
            onUpdateSelectedMention: d,
            query: f,
            source: h,
          })),
          (t[4] = v),
          (t[5] = r),
          (t[6] = o),
          (t[7] = x),
          (t[8] = c),
          (t[9] = l),
          (t[10] = u),
          (t[11] = d),
          (t[12] = f),
          (t[13] = h),
          (t[14] = e))
        : (e = t[14]),
      e
    );
  }
  let S;
  return (
    t[15] !== _ ||
    t[16] !== v ||
    t[17] !== r ||
    t[18] !== b ||
    t[19] !== o ||
    t[20] !== x ||
    t[21] !== c ||
    t[22] !== l ||
    t[23] !== u ||
    t[24] !== d ||
    t[25] !== f ||
    t[26] !== p ||
    t[27] !== m
      ? ((S = (0, q.jsx)($t, {
          backgroundAgents: _,
          className: r,
          chromeVariant: v,
          excludedAgentConversationIds: b,
          hostId: o,
          isHomeMenu: x,
          keyboardEventTarget: c,
          onAddContext: l,
          onRequestClose: u,
          onUpdateSelectedMention: d,
          query: f,
          roots: p,
          skillRoots: m,
        })),
        (t[15] = _),
        (t[16] = v),
        (t[17] = r),
        (t[18] = b),
        (t[19] = o),
        (t[20] = x),
        (t[21] = c),
        (t[22] = l),
        (t[23] = u),
        (t[24] = d),
        (t[25] = f),
        (t[26] = p),
        (t[27] = m),
        (t[28] = S))
      : (S = t[28]),
    S
  );
}
function $t(e) {
  let t = (0, K.c)(24),
    n,
    r,
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]))
    : (({
        backgroundAgents: r,
        excludedAgentConversationIds: i,
        hostId: a,
        query: o,
        roots: s,
        skillRoots: c,
        ...n
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c));
  let l;
  t[8] !== r ||
  t[9] !== i ||
  t[10] !== a ||
  t[11] !== o ||
  t[12] !== s ||
  t[13] !== c
    ? ((l = {
        backgroundAgents: r,
        excludedAgentConversationIds: i,
        hostId: a,
        query: o,
        roots: s,
        skillRoots: c,
      }),
      (t[8] = r),
      (t[9] = i),
      (t[10] = a),
      (t[11] = o),
      (t[12] = s),
      (t[13] = c),
      (t[14] = l))
    : (l = t[14]);
  let { sections: u } = qt(l),
    d;
  t[15] === a
    ? (d = t[16])
    : ((d = (0, q.jsx)(Ye, { hostId: a })), (t[15] = a), (t[16] = d));
  let f;
  t[17] !== n || t[18] !== o || t[19] !== u
    ? ((f = (0, q.jsx)(nn, { ...n, query: o, sections: u })),
      (t[17] = n),
      (t[18] = o),
      (t[19] = u),
      (t[20] = f))
    : (f = t[20]);
  let p;
  return (
    t[21] !== d || t[22] !== f
      ? ((p = (0, q.jsxs)(q.Fragment, { children: [d, f] })),
        (t[21] = d),
        (t[22] = f),
        (t[23] = p))
      : (p = t[23]),
    p
  );
}
function en(e) {
  let t = (0, K.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ hostId: r, query: i, source: a, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = h(te, r),
    s;
  t[5] !== a.pluginId || t[6] !== a.server
    ? ((s = (e) => {
        let { pluginId: t, server: n } = e;
        return t === a.pluginId && (a.server == null || n === a.server);
      }),
      (t[5] = a.pluginId),
      (t[6] = a.server),
      (t[7] = s))
    : (s = t[7]);
  let c = o.filter(s),
    l = h(Qe, { hostId: r, path: a.path.map(tn), query: i, servers: c }),
    u = tt({
      isLoading: l.isLoading,
      mentionSource: a,
      results: l.data,
      servers: c,
    }),
    d;
  return (
    t[8] !== n || t[9] !== i || t[10] !== u
      ? ((d = (0, q.jsx)(nn, { ...n, query: i, sections: u })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function tn(e) {
  let { id: t } = e;
  return t;
}
function nn(e) {
  let t = (0, K.c)(11),
    {
      className: n,
      sections: r,
      onUpdateSelectedMention: i,
      onAddContext: a,
      onRequestClose: o,
      query: s,
      chromeVariant: l,
      isHomeMenu: u,
      keyboardEventTarget: d,
    } = e,
    p = s === void 0 ? `` : s,
    m = l === void 0 ? `default` : l,
    h = u === void 0 ? !1 : u,
    g = r.filter(sn),
    _ = [];
  for (let e of g) _.push(...e.items);
  let v;
  t[0] !== a || t[1] !== i
    ? ((v = (e) => {
        (i(e), a(e));
      }),
      (t[0] = a),
      (t[1] = i),
      (t[2] = v))
    : (v = t[2]);
  let y;
  t[3] === i
    ? (y = t[4])
    : ((y = (e) => {
        i(e ?? null);
      }),
      (t[3] = i),
      (t[4] = y));
  let {
      highlightedIndex: b,
      listRef: x,
      getItemProps: S,
    } = ye({
      items: _,
      isActive: _.length > 0,
      captureWindowKeydown: !0,
      keyboardEventTarget: d,
      preserveHighlightOnItemsChange: !0,
      onSelect: v,
      onHighlight: y,
    }),
    C = new Map();
  for (let e = 0; e < _.length; e += 1) {
    let t = _[e];
    t != null && C.set(t.key, e);
  }
  let w = g.length > 1 || g.some(on),
    T = !(_.length > 0) && g.every(un),
    E;
  (t[5] === r ? (E = t[6]) : ((E = r.some(an)), (t[5] = r), (t[6] = E)),
    Re({ isLoading: E, onRequestClose: o, query: p, resultCount: _.length }));
  let D = m === `default` ? `both` : `bottom`,
    O = Je(h),
    k = h ? `composer-home-top-menu` : `max-h-[320px]`,
    A;
  t[7] !== n || t[8] !== k
    ? ((A = c(n, k)), (t[7] = n), (t[8] = k), (t[9] = A))
    : (A = t[9]);
  let j;
  return (
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((j = c(`flex w-full flex-col`)), (t[10] = j))
      : (j = t[10]),
    (0, q.jsxs)(Be, {
      className: A,
      chromeVariant: m,
      containerRef: h ? O : void 0,
      children: [
        (0, q.jsx)(Ve, {
          fadeMaskVariant: D,
          listRef: x,
          children: (0, q.jsxs)(`div`, {
            className: j,
            children: [
              g.map((e, t) =>
                (0, q.jsx)(
                  cn,
                  {
                    className: t === 0 ? void 0 : `pt-2`,
                    chromeVariant: m,
                    getItemProps: S,
                    hasSectionHeaders: w,
                    highlightedIndex: b,
                    itemIndexByKey: C,
                    section: e,
                  },
                  e.id,
                ),
              ),
              T
                ? (0, q.jsx)(Ue, {
                    children: (0, q.jsx)(f, {
                      id: `composer.atMentionList.noResults`,
                      defaultMessage: `No results`,
                      description: `Shown when there are no mention results matching the search query`,
                    }),
                  })
                : null,
            ],
          }),
        }),
        g.some(rn)
          ? (0, q.jsx)(`div`, {
              className: Zt.loadingBar,
              "aria-hidden": `true`,
            })
          : null,
      ],
    })
  );
}
function rn(e) {
  return e.isLoading;
}
function an(e) {
  return e.isLoading;
}
function on(e) {
  return e.emptyState != null;
}
function sn(e) {
  return e.items.length > 0 || e.emptyState != null;
}
function cn(e) {
  let t = (0, K.c)(16),
    {
      className: n,
      chromeVariant: r,
      getItemProps: i,
      hasSectionHeaders: a,
      highlightedIndex: o,
      itemIndexByKey: s,
      section: c,
    } = e,
    l;
  t[0] !== r ||
  t[1] !== n ||
  t[2] !== a ||
  t[3] !== c.showTitle ||
  t[4] !== c.title ||
  t[5] !== c.titleValues
    ? ((l =
        a || c.showTitle
          ? (0, q.jsx)(He, {
              className: n,
              chromeVariant: r,
              children: (0, q.jsx)(f, { ...c.title, values: c.titleValues }),
            })
          : null),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a),
      (t[3] = c.showTitle),
      (t[4] = c.title),
      (t[5] = c.titleValues),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] !== i ||
  t[8] !== o ||
  t[9] !== s ||
  t[10] !== c.emptyState ||
  t[11] !== c.items
    ? ((u =
        c.items.length > 0
          ? c.items.map((e) =>
              (0, q.jsx)(
                ln,
                {
                  entry: e,
                  highlightedIndex: o,
                  itemIndex: s.get(e.key) ?? -1,
                  getItemProps: i,
                },
                e.key,
              ),
            )
          : c.emptyState == null
            ? null
            : (0, q.jsx)(Ue, { children: (0, q.jsx)(f, { ...c.emptyState }) })),
      (t[7] = i),
      (t[8] = o),
      (t[9] = s),
      (t[10] = c.emptyState),
      (t[11] = c.items),
      (t[12] = u))
    : (u = t[12]);
  let d;
  return (
    t[13] !== l || t[14] !== u
      ? ((d = (0, q.jsxs)(`div`, { children: [l, u] })),
        (t[13] = l),
        (t[14] = u),
        (t[15] = d))
      : (d = t[15]),
    d
  );
}
function ln(e) {
  let t = (0, K.c)(20),
    { entry: n, highlightedIndex: r, itemIndex: i, getItemProps: a } = e,
    o = i === r,
    s;
  t[0] !== n.icon || t[1] !== n.iconElement
    ? ((s =
        n.iconElement ??
        (n.icon
          ? (0, q.jsx)(n.icon, { className: `icon-xs shrink-0` })
          : null)),
      (t[0] = n.icon),
      (t[1] = n.iconElement),
      (t[2] = s))
    : (s = t[2]);
  let l = n.detail != null && `flex-shrink-0`,
    u;
  t[3] !== n.labelClassName || t[4] !== l
    ? ((u = c(`truncate`, l, n.labelClassName)),
      (t[3] = n.labelClassName),
      (t[4] = l),
      (t[5] = u))
    : (u = t[5]);
  let d;
  t[6] !== n.label || t[7] !== u
    ? ((d = (0, q.jsx)(`span`, { className: u, children: n.label })),
      (t[6] = n.label),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === n.detail
    ? (f = t[10])
    : ((f =
        n.detail == null
          ? null
          : (0, q.jsx)(`span`, {
              className: `flex-1 truncate text-sm text-token-description-foreground`,
              children: n.detail,
            })),
      (t[9] = n.detail),
      (t[10] = f));
  let p;
  t[11] !== s || t[12] !== d || t[13] !== f
    ? ((p = (0, q.jsxs)(`div`, {
        className: `flex w-full min-w-0 items-center gap-2`,
        children: [s, d, f],
      })),
      (t[11] = s),
      (t[12] = d),
      (t[13] = f),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== a || t[16] !== i || t[17] !== o || t[18] !== p
      ? ((m = (0, q.jsx)(We, {
          getItemProps: a,
          highlighted: o,
          itemIndex: i,
          children: p,
        })),
        (t[15] = a),
        (t[16] = i),
        (t[17] = o),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    m
  );
}
function un(e) {
  return e.emptyState == null;
}
export {
  Je as a,
  We as c,
  Le as d,
  Ie as f,
  qe as i,
  Ve as l,
  H as m,
  xt as n,
  Be as o,
  Se as p,
  Ye as r,
  Ue as s,
  Qt as t,
  Re as u,
};
//# sourceMappingURL=at-mention-list-C6rdlW9Y.js.map
