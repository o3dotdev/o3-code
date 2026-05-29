import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  At as t,
  Di as n,
  Gi as r,
  Hi as i,
  Li as a,
  Ni as o,
  Oi as s,
  Ri as c,
  Ut as l,
  Vi as u,
  Yi as d,
  bn as f,
  gn as p,
  hn as m,
  ji as h,
  qi as g,
  st as _,
  vn as v,
  yn as y,
  zi as b,
  zn as x,
  zr as S,
} from "./src-C.js";
import {
  Js as C,
  Xs as w,
  zs as T,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as E, t as D } from "./jsx-runtime.js";
import { t as O } from "./clsx-BcPLHiun.js";
import { t as k } from "./react-dom-CvzHKZGB.js";
import {
  $ as A,
  C as j,
  G as M,
  Q as N,
  S as P,
  U as F,
  V as I,
  X as L,
  Y as R,
  Z as ee,
  at as z,
  nt as B,
  wt as V,
  y as H,
} from "./setting-storage.js";
import { m as U } from "./chunk-LFPYN7LY.js";
import { o as te } from "./statsig--EYRNU53.js";
import "./config-queries-BBeTQbuo.js";
import { t as ne } from "./connector-logo.js";
import { t as re } from "./tooltip-CDzchJxN.js";
import { t as W } from "./route-scope.js";
import { T as ie } from "./composer-view-state-JRNwOfub.js";
import { t as ae } from "./button.js";
import "./permissions-mode-defaults.js";
import { it as oe } from "./app-shell-state.js";
import { t as se } from "./app-shell-D4HBgUPf.js";
import { t as ce } from "./apps-DwfMzB5Q.js";
import { n as le } from "./projectless-thread.js";
import { l as ue, n as de } from "./app-shell-tab-controller-BTWycTBb.js";
import { r as fe, t as pe } from "./thread-panel-state.js";
import {
  d as G,
  i as me,
  l as K,
  n as he,
  r as ge,
  u as _e,
} from "./dialog-layout.js";
import { t as ve } from "./build-worktree-label-from-input.js";
import { r as ye } from "./pending-worktree-store-COXB8WW0.js";
import { t as be } from "./use-stable-callback.js";
import { u as xe } from "./sidebar-project-group-signals-CEQTKcIf.js";
import { t as Se } from "./check-md.js";
import { t as Ce } from "./arrow-left.js";
import { t as we } from "./checkbox-DtuSNXXy.js";
import {
  f as Te,
  g as Ee,
  h as De,
  m as Oe,
  v as ke,
  y as Ae,
} from "./mcp-capability-signals-DAPblgpG.js";
import { r as je, t as Me } from "./dropdown-DtQxMoJw.js";
import { t as Ne } from "./chevron-NmAOI_v1.js";
import { t as Pe } from "./macbook.js";
import { t as Fe } from "./worktree-D_6WAQVb.js";
import { n as Ie, t as Le } from "./mcp-capability-client.js";
import { n as Re, t as ze } from "./project-dropdown-options.js";
import { t as Be } from "./alert-CoBPbdcu.js";
import {
  a as Ve,
  c as He,
  i as Ue,
  n as We,
  r as Ge,
  s as Ke,
} from "./mcp-tool-item-content-utils.js";
function qe(e, t) {
  return fe(e, `right`, t);
}
function Je(e) {
  pe(e, `right`);
}
var q = V(),
  J = D();
function Ye(e) {
  let t = (0, q.c)(13),
    {
      backLabel: n,
      canGoBack: r,
      canGoForward: i,
      forwardLabel: a,
      onBack: o,
      onForward: s,
    } = e,
    c = !r,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(Ce, { className: `icon-xs` })), (t[0] = l))
    : (l = t[0]);
  let u;
  t[1] !== n || t[2] !== o || t[3] !== c
    ? ((u = (0, J.jsx)(ae, {
        "aria-label": n,
        color: `ghost`,
        disabled: c,
        onClick: o,
        size: `toolbar`,
        title: n,
        uniform: !0,
        children: l,
      })),
      (t[1] = n),
      (t[2] = o),
      (t[3] = c),
      (t[4] = u))
    : (u = t[4]);
  let d = !i,
    f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(Ce, { className: `icon-xs -scale-x-100 transform` })),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] !== a || t[7] !== s || t[8] !== d
    ? ((p = (0, J.jsx)(ae, {
        "aria-label": a,
        color: `ghost`,
        disabled: d,
        onClick: s,
        size: `toolbar`,
        title: a,
        uniform: !0,
        children: f,
      })),
      (t[6] = a),
      (t[7] = s),
      (t[8] = d),
      (t[9] = p))
    : (p = t[9]);
  let m;
  return (
    t[10] !== u || t[11] !== p
      ? ((m = (0, J.jsxs)(J.Fragment, { children: [u, p] })),
        (t[10] = u),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
function Xe(e) {
  let t = (0, q.c)(2),
    { onPanelElementChange: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, J.jsx)(`div`, {
          className: `bg-token-background relative h-full min-h-0`,
          children: (0, J.jsx)(`div`, {
            ref: n,
            "data-mcp-app-side-panel-frame-container": `true`,
            className: `h-full min-h-0 w-full`,
          }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Y = e(E(), 1);
function Ze(
  e,
  {
    activate: t = !0,
    connectorIcon: n,
    mcpAppId: r,
    onExitFullScreen: i,
    onPanelElementChange: a,
    title: o,
  },
) {
  let s = $e(r);
  (de.openTab(e, Xe, {
    icon:
      n == null
        ? (0, Y.createElement)(ce, {
            className: `icon-xs shrink-0 text-token-text-secondary`,
          })
        : (0, Y.createElement)(ne, {
            alt: n.alt,
            className: `icon-xs shrink-0 object-contain`,
            logoUrl: n.logoUrl,
            logoDarkUrl: n.logoDarkUrl,
            fallback: (0, Y.createElement)(ce, {
              className: `icon-xs shrink-0 text-token-text-secondary`,
            }),
          }),
    props: { onPanelElementChange: a },
    id: s,
    title: o,
    activate: t,
    onClose: i,
  }),
    t && qe(e));
}
function Qe(e, t) {
  let n = $e(t);
  e.get(de.tabs$).some((e) => e.tabId === n) &&
    (de.closeTab(e, n), e.get(de.tabs$).length === 0 && Je(e));
}
function $e(e) {
  return `${ue.MCP_APP}:${e}`;
}
var et = e(l(), 1),
  tt = {
    intrinsicHeight: null,
    isFullScreen: !1,
    isInlineExpanded: !1,
    sandboxError: null,
  },
  nt = z(W, () => new Map()),
  rt = z(W, () => new Map()),
  it = z(W, () => new Set()),
  at = N(W, ({ get: e }) => {
    let t = e(rt),
      n = e(it);
    for (let r of e(nt).values()) {
      if (!r.hostedInThreadScrollLayout) continue;
      let { mcpAppId: e } = r,
        i = t.get(e);
      if (i?.isInlineExpanded === !0 || i?.isFullScreen === !0 || n.has(e))
        return !0;
    }
    return !1;
  }),
  ot = A(W, (e, { get: t }) => t(nt).get(e) ?? null),
  st = A(W, (e, { get: t }) => t(rt).get(e) ?? tt),
  ct = A(W, (e, { get: t }) => t(it).has(e));
function lt(e) {
  return e;
}
function ut(e, t, n) {
  e.set(nt, (e) => {
    let r = e.get(t);
    if (
      r == null ||
      r.inlineFrameContainer == null ||
      r.inlineFrameContainer !== n
    )
      return e;
    let i = new Map(e);
    return (i.set(t, { ...r, inlineFrameContainer: null }), i);
  });
}
function dt(e, t, n) {
  e.set(nt, (e) => {
    let r = e.get(t);
    if (r == null || r.inlineFrameContainer === n) return e;
    let i = new Map(e);
    return (i.set(t, { ...r, inlineFrameContainer: n }), i);
  });
}
function ft(e, t) {
  e.set(nt, (e) => {
    let n = e.get(t);
    if (
      n == null ||
      (n.sidePanelFrameContent == null && n.sidePanelSourceMcpAppId == null)
    )
      return e;
    let r = new Map(e);
    return (
      r.set(t, {
        ...n,
        sidePanelFrameContent: null,
        sidePanelSourceMcpAppId: null,
      }),
      r
    );
  });
}
function pt(e, t) {
  let n = null;
  (e.set(nt, (r) => {
    let i = e.get(rt),
      a = r.get(t.mcpAppId),
      o = yt(t),
      s = {
        hostedInThreadScrollLayout: t.hostedInThreadScrollLayout,
        inlineFrameContainer:
          t.inlineFrameContainer ?? a?.inlineFrameContainer ?? null,
        inlineFrameContent: o,
        mcpAppId: t.mcpAppId,
        sidePanelFrameContent: a?.sidePanelFrameContent ?? null,
        sidePanelSourceMcpAppId: a?.sidePanelSourceMcpAppId ?? null,
      },
      c = r;
    (a == null || !(0, et.default)(a, s)) &&
      ((c = new Map(r)), c.set(t.mcpAppId, s));
    let l = vt({
      activeSidePanelTabId: e.get(de.activeTab$)?.tabId ?? null,
      frameStates: i,
      registration: t,
      registrations: c,
    });
    if (
      l == null ||
      l.mcpAppId === t.mcpAppId ||
      (a != null && l.sidePanelSourceMcpAppId !== t.mcpAppId)
    )
      return c;
    let u = {
      ...l,
      sidePanelFrameContent: o,
      sidePanelSourceMcpAppId: t.mcpAppId,
    };
    return (0, et.default)(l, u)
      ? c
      : (c === r && (c = new Map(r)),
        c.set(l.mcpAppId, u),
        (n = t.mcpAppId),
        c);
  }),
    n != null && _t(e, n));
}
function mt(e, t, n) {
  if (e.get(t.mcpAppId)?.isFullScreen === !0 || n.has(t.mcpAppId))
    return t.mcpAppId;
  for (let r of n.values())
    if (
      (e.get(r.mcpAppId)?.isFullScreen === !0 ||
        (t.inlineFrameContainer != null &&
          r.inlineFrameContainer === t.inlineFrameContainer)) &&
      bt(r.sidePanelFrameContent ?? r.inlineFrameContent, t)
    )
      return r.mcpAppId;
  return t.mcpAppId;
}
function ht(e, t, n) {
  (n.isFullScreen === !0 && _t(e, t),
    e.set(rt, (e) => {
      let r = e.get(t) ?? tt,
        i = { ...r, ...n };
      if (
        r.intrinsicHeight === i.intrinsicHeight &&
        r.isFullScreen === i.isFullScreen &&
        r.isInlineExpanded === i.isInlineExpanded &&
        r.sandboxError === i.sandboxError
      )
        return e;
      let a = new Map(e);
      return (a.set(t, i), a);
    }));
}
function gt(e, t, n) {
  ht(e, t, { isInlineExpanded: n });
}
function _t(e, t) {
  e.set(it, (e) => {
    if (e.has(t)) return e;
    let n = new Set(e);
    return (n.add(t), n);
  });
}
function vt({
  activeSidePanelTabId: e,
  frameStates: t,
  registration: n,
  registrations: r,
}) {
  for (let i of r.values())
    if (
      e === $e(i.mcpAppId) &&
      t.get(i.mcpAppId)?.isFullScreen === !0 &&
      bt(i.sidePanelFrameContent ?? i.inlineFrameContent, n)
    )
      return i;
  return null;
}
function yt({
  hostedInThreadScrollLayout: e,
  inlineFrameContainer: t,
  mcpAppId: n,
  ...r
}) {
  return r;
}
function bt(e, t) {
  return (
    e.conversationId === t.conversationId &&
    e.server === t.server &&
    (0, et.default)(e.mcpAppScope, t.mcpAppScope) &&
    xt(e.sandboxOriginScope, t.sandboxOriginScope)
  );
}
function xt(e, t) {
  if (e.kind !== t.kind) return !1;
  switch (e.kind) {
    case `codex_app`:
      return (
        t.kind === `codex_app` &&
        e.connectorId === t.connectorId &&
        (e.connectorId != null || e.instanceFallbackId === t.instanceFallbackId)
      );
    case `mcp_server`:
      return t.kind === `mcp_server` && e.server === t.server;
  }
}
var St = `CALL`,
  Ct = `GENERATOR_GENERATE`,
  wt = `REJECT`,
  Tt = `RESOLVE`,
  Et = 1e4,
  Dt = 3e4,
  Ot = m;
async function kt({
  hostApiHandlers: e,
  origin: t,
  sandboxId: n,
  signal: r,
  sourceUrl: i,
  webview: a,
}) {
  let o = crypto.randomUUID(),
    { ports: s, replyPort: c } = await new Promise((e, s) => {
      if (r.aborted) {
        s(Lt());
        return;
      }
      let c,
        l = () => {
          (window.removeEventListener(`message`, u),
            r.removeEventListener(`abort`, d),
            c != null && clearTimeout(c));
        },
        u = (r) => {
          let i = r.data;
          if (
            i?.type !== `init` ||
            i.origin !== t ||
            i.sandboxId !== n ||
            i.initId !== o ||
            !Array.isArray(i.portNames)
          )
            return;
          let a = i.portNames;
          if (!f(a) || r.ports.length !== a.length + 1) return;
          let s = At(a, r.ports);
          if (s == null) return;
          let c = r.ports[a.length];
          c != null && (l(), e({ ports: s, replyPort: c }));
        },
        d = () => {
          (l(), s(Lt()));
        };
      (window.addEventListener(`message`, u),
        r.addEventListener(`abort`, d, { once: !0 }),
        (c = setTimeout(() => {
          (l(), s(Rt()));
        }, Et)));
      let m = p({ initId: o, sourceUrl: i });
      a.getAttribute(`src`) !== m && a.setAttribute(`src`, m);
    }),
    l = Pt(e);
  return (c.postMessage(l, Object.values(l)), c.start(), Nt(s, r));
}
function At(e, t) {
  let n = {};
  for (let r of Ot) {
    let i = t[e.indexOf(r)];
    if (!Mt(i)) return null;
    n[r] = i;
  }
  return n;
}
function jt(e) {
  return typeof e == `object` && !!e;
}
function Mt(e) {
  return jt(e)
    ? typeof e.postMessage == `function` && typeof e.start == `function`
    : !1;
}
function Nt(e, t) {
  return {
    navigate: Z(e.navigate),
    notifyMcpAppsHostContext: Z(e.notifyMcpAppsHostContext),
    notifyMcpAppsToolCancelled: Z(e.notifyMcpAppsToolCancelled),
    notifyMcpAppsToolInput: Z(e.notifyMcpAppsToolInput),
    notifyMcpAppsToolResult: Z(e.notifyMcpAppsToolResult),
    requestMcpAppsResourceTeardown: Z(e.requestMcpAppsResourceTeardown),
    runWidgetCode: zt(e.runWidgetCode, t),
    setAdditionalGlobals: Z(e.setAdditionalGlobals),
    setSafeArea: Z(e.setSafeArea),
    setTheme: Z(e.setTheme),
    setWidgetData: Z(e.setWidgetData),
    setWidgetView: Z(e.setWidgetView),
  };
}
function Pt(e) {
  return {
    callMcp: X(e.callMcp),
    callTool: X(e.callTool),
    notifyBackgroundColor: X(e.notifyBackgroundColor),
    notifyEnvironmentError: X(e.notifyEnvironmentError),
    notifyIntrinsicHeight: X(e.notifyIntrinsicHeight),
    notifyIntrinsicWidth: X(e.notifyIntrinsicWidth),
    notifyNavigation: X(e.notifyNavigation),
    notifySecurityPolicyViolation: X(e.notifySecurityPolicyViolation),
    openExternal: X(e.openExternal),
    requestDisplayMode: X(e.requestDisplayMode),
    sendFollowUpMessage: X(e.sendFollowUpMessage),
    sendInstrument: X(e.sendInstrument),
    updateWidgetState: X(e.updateWidgetState),
  };
}
function X(e) {
  let { port1: t, port2: n } = new MessageChannel();
  return (
    (t.onmessage = async (t) => {
      let [n, ...r] = t.data,
        [i] = t.ports;
      if (!(n !== St || i == null))
        try {
          i.postMessage([Tt, await e(...r)]);
        } catch (e) {
          i.postMessage([wt, Ft(e)]);
        } finally {
          i.close();
        }
    }),
    t.start(),
    n
  );
}
function Ft(e) {
  return e instanceof Error
    ? {
        ...It(e),
        message: e.message || `MCP sandbox host call failed.`,
        name: e.name,
      }
    : typeof e == `object` &&
        e &&
        `message` in e &&
        typeof e.message == `string` &&
        e.message.length > 0
      ? { ...It(e), message: e.message }
      : { message: `MCP sandbox host call failed.` };
}
function It(e) {
  return {
    ...(`code` in e && typeof e.code == `number` ? { code: e.code } : {}),
    ...(`name` in e && typeof e.name == `string` ? { name: e.name } : {}),
  };
}
function Lt() {
  let e = Error(`MCP sandbox RPC aborted.`);
  return ((e.name = `AbortError`), e);
}
function Rt() {
  let e = Error(`MCP sandbox RPC timed out.`);
  return ((e.name = `TimeoutError`), e);
}
function Z(e, t = {}) {
  return (
    e.start(),
    (n) =>
      new Promise((r, i) => {
        let a = t.signal,
          o = t.timeoutMs === void 0 ? Dt : t.timeoutMs;
        if (a?.aborted) {
          i(Lt());
          return;
        }
        let { port1: s, port2: c } = new MessageChannel(),
          l,
          u = !1,
          d = () => {
            (l != null && clearTimeout(l),
              a?.removeEventListener(`abort`, p),
              (s.onmessage = null),
              s.close());
          },
          f = (e, t) => {
            u || ((u = !0), d(), e(t));
          },
          p = () => {
            f(i, Lt());
          };
        ((s.onmessage = (e) => {
          let t = e.data;
          t[0] === Tt ? f(r, t[1]) : f(i, t[1]);
        }),
          a?.addEventListener(`abort`, p, { once: !0 }),
          o != null &&
            (l = setTimeout(() => {
              f(i, Rt());
            }, o)));
        try {
          e.postMessage([St, n], [c]);
        } catch (e) {
          f(i, e);
        }
      })
  );
}
function zt(e, t) {
  return (
    e.start(),
    async function* (n) {
      let { port1: r, port2: i } = new MessageChannel(),
        { port1: a, port2: o } = new MessageChannel(),
        { port1: s, port2: c } = new MessageChannel(),
        { port1: l, port2: u } = new MessageChannel(),
        d = Z(r),
        f = Z(a, { signal: t, timeoutMs: null }),
        p = Z(s),
        m = Z(l);
      e.postMessage(
        [Ct, { asyncDispose: i, next: o, return: c, throw: u }, n],
        [i, o, c, u],
      );
      try {
        let e = await f(void 0);
        for (; !e.done; ) (yield e.value, (e = await f(void 0)));
        return e.value;
      } catch (e) {
        if (t.aborted) return;
        throw (await m(e).catch(() => {}), e);
      } finally {
        (t.aborted || (await Promise.allSettled([d(void 0), p(void 0)])),
          [r, a, s, l].forEach((e) => {
            e.close();
          }));
      }
    }
  );
}
var Bt = e(k(), 1),
  Vt = -32e3,
  Ht = a(),
  Ut = r(g(), d()),
  Wt = i({ text: g(), type: c(`text`) }).strip(),
  Gt = i({ data: g(), mimeType: g(), type: c(`image`) }).strip(),
  Kt = i({
    type: n([`audio`, `image`, `resource`, `resource_link`, `text`]),
  }).passthrough(),
  qt = i({ status: c(2), type: c(`environment_status`) }).passthrough(),
  Jt = g(),
  Yt = i({ mode: n([`inline`, `fullscreen`]) }),
  Xt = i({ canGoBack: o(), canGoForward: o() }).passthrough(),
  Zt = i({ prompt: g().trim().min(1) }).strip(),
  Qt = i({ method: g(), params: r(g(), d()).optional() }).strip(),
  $t = i({ blob: s(Blob), name: g().trim().min(1) }).strip(),
  en = b({ [De]: ke.optional(), progressToken: Oe.optional() }),
  tn = i({
    name: g().min(1),
    arguments: r(g(), Ht).optional(),
    _meta: en.optional(),
  }).passthrough(),
  nn = i({ "openai/fileParams": d().optional() }).passthrough(),
  rn = i({ uri: g().min(1) }).passthrough(),
  an = i({ code: u().optional(), message: g().min(1) }).passthrough(),
  on = u().finite().positive(),
  sn = i({ href: g().refine(cr) }),
  cn = r(g(), Ht),
  ln = i({ content: h(d()).optional() }).passthrough(),
  un = i({ content: h(Kt), structuredContent: Ut.optional() }).strict(),
  dn = { insets: { bottom: 0, left: 0, right: 0, top: 0 } },
  fn = { insets: { ...dn.insets, top: 48 } },
  pn = 240,
  mn = 200,
  hn = 720,
  gn = { canGoBack: !1, canGoForward: !1 },
  _n = [],
  vn = [],
  yn = I({
    workLocally: {
      id: `codex.mcpTool.confirmFollowUp.workLocally`,
      defaultMessage: `Work locally`,
      description: `Dropdown option for starting an MCP app follow-up thread in the selected local project`,
    },
    newWorktree: {
      id: `codex.mcpTool.confirmFollowUp.newWorktree`,
      defaultMessage: `New worktree`,
      description: `Dropdown option for starting an MCP app follow-up thread in a new worktree`,
    },
    newWorktreeRequiresGitProject: {
      id: `codex.mcpTool.confirmFollowUp.newWorktreeRequiresGitProject`,
      defaultMessage: `New worktree requires a local git project`,
      description: `Tooltip for a disabled MCP app follow-up worktree option when no local git project is available`,
    },
    newWorktreeDesktopOnly: {
      id: `codex.mcpTool.confirmFollowUp.newWorktreeDesktopOnly`,
      defaultMessage: `New worktree is only available in the Codex desktop app`,
      description: `Tooltip for a disabled MCP app follow-up worktree option outside the Codex desktop app`,
    },
  });
function bn(e) {
  let t = (0, q.c)(5),
    { isInlineExpanded: n, mcpAppId: r } = e,
    i = L(W),
    a,
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = () => {
          gt(i, r, n);
        }),
        (o = [n, r, i]),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : ((a = t[3]), (o = t[4])),
    (0, Y.useLayoutEffect)(a, o),
    null
  );
}
function xn(e) {
  let t = (0, q.c)(39),
    {
      conversationId: n,
      csp: r,
      error: i,
      fullSurface: a,
      hostId: o,
      hostedInThreadScrollLayout: s,
      html: c,
      isLoading: l,
      mcpAppId: u,
      mcpAppScope: d,
      mcpServerStatuses: f,
      overrideMcpRequest: p,
      prefersBorder: m,
      sandboxOriginScope: h,
      server: g,
      sidePanelConnectorIcon: _,
      sidePanelTitle: v,
      title: y,
      toolArguments: b,
      toolResult: x,
      widgetDomain: S,
    } = e,
    C = a === void 0 ? !1 : a,
    w = L(W),
    T = ee(rt),
    E = ee(nt),
    D = ee(de.tabs$),
    O;
  t[0] === c
    ? (O = t[1])
    : ((O = c == null ? 0 : new Blob([c]).size), (t[0] = c), (t[1] = O));
  let k = O,
    A,
    j;
  t[2] !== n ||
  t[3] !== T ||
  t[4] !== u ||
  t[5] !== d ||
  t[6] !== E ||
  t[7] !== D ||
  t[8] !== h ||
  t[9] !== g
    ? ((A = mt(
        T,
        {
          conversationId: n,
          inlineFrameContainer: null,
          mcpAppId: u,
          mcpAppScope: d,
          sandboxOriginScope: h,
          server: g,
        },
        E,
      )),
      (j = D.some((e) => e.tabId === $e(A))),
      (t[2] = n),
      (t[3] = T),
      (t[4] = u),
      (t[5] = d),
      (t[6] = E),
      (t[7] = D),
      (t[8] = h),
      (t[9] = g),
      (t[10] = A),
      (t[11] = j))
    : ((A = t[10]), (j = t[11]));
  let M = j,
    N,
    P;
  return (
    t[12] !== n ||
    t[13] !== r ||
    t[14] !== i ||
    t[15] !== C ||
    t[16] !== M ||
    t[17] !== o ||
    t[18] !== s ||
    t[19] !== c ||
    t[20] !== k ||
    t[21] !== l ||
    t[22] !== A ||
    t[23] !== u ||
    t[24] !== d ||
    t[25] !== f ||
    t[26] !== p ||
    t[27] !== m ||
    t[28] !== h ||
    t[29] !== w ||
    t[30] !== g ||
    t[31] !== _ ||
    t[32] !== v ||
    t[33] !== y ||
    t[34] !== b ||
    t[35] !== x ||
    t[36] !== S
      ? ((N = () => {
          i != null ||
            c == null ||
            k > 1e7 ||
            l ||
            x == null ||
            (M && ht(w, A, { isFullScreen: !0 }),
            pt(w, {
              conversationId: n,
              csp: r,
              fullSurface: C,
              hostId: o,
              hostedInThreadScrollLayout: s,
              html: c,
              inlineFrameContainer: null,
              mcpAppId: u,
              mcpAppScope: d,
              mcpServerStatuses: f,
              prefersBorder: m,
              overrideMcpRequest: p,
              sandboxOriginScope: h,
              server: g,
              sidePanelConnectorIcon: _,
              sidePanelTitle: v,
              title: y,
              toolArguments: b,
              toolResult: x,
              widgetDomain: S,
            }));
        }),
        (P = [
          n,
          r,
          i,
          C,
          o,
          s,
          M,
          c,
          k,
          l,
          u,
          A,
          d,
          f,
          p,
          m,
          h,
          w,
          g,
          _,
          v,
          y,
          b,
          x,
          S,
        ]),
        (t[12] = n),
        (t[13] = r),
        (t[14] = i),
        (t[15] = C),
        (t[16] = M),
        (t[17] = o),
        (t[18] = s),
        (t[19] = c),
        (t[20] = k),
        (t[21] = l),
        (t[22] = A),
        (t[23] = u),
        (t[24] = d),
        (t[25] = f),
        (t[26] = p),
        (t[27] = m),
        (t[28] = h),
        (t[29] = w),
        (t[30] = g),
        (t[31] = _),
        (t[32] = v),
        (t[33] = y),
        (t[34] = b),
        (t[35] = x),
        (t[36] = S),
        (t[37] = N),
        (t[38] = P))
      : ((N = t[37]), (P = t[38])),
    (0, Y.useLayoutEffect)(N, P),
    null
  );
}
function Sn(e) {
  let t = (0, q.c)(30),
    {
      error: n,
      fullSurface: r,
      heightHint: i,
      html: a,
      isLoading: o,
      mcpAppId: s,
    } = e,
    c = r === void 0 ? !1 : r,
    l = L(W),
    u = M(),
    d = R(ot, s),
    f = R(st, s),
    [p, m] = (0, Y.useState)(null),
    h = a == null ? 0 : new Blob([a]).size,
    g = d != null,
    _;
  t[0] !== f.intrinsicHeight || t[1] !== i
    ? ((_ = sr(f.intrinsicHeight, i)),
      (t[0] = f.intrinsicHeight),
      (t[1] = i),
      (t[2] = _))
    : (_ = t[2]);
  let v = _,
    y = n ?? f.sandboxError,
    b,
    x;
  if (
    (t[3] !== g || t[4] !== p || t[5] !== s || t[6] !== l
      ? ((b = () => {
          if (g)
            return (
              dt(l, s, p),
              () => {
                ut(l, s, p);
              }
            );
        }),
        (x = [p, g, s, l]),
        (t[3] = g),
        (t[4] = p),
        (t[5] = s),
        (t[6] = l),
        (t[7] = b),
        (t[8] = x))
      : ((b = t[7]), (x = t[8])),
    (0, Y.useLayoutEffect)(b, x),
    h > 1e7)
  ) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(Be, {
            className: `w-full`,
            fullWidth: !0,
            level: `danger`,
            children: (0, J.jsx)(`div`, {
              className: `text-size-chat max-h-48 overflow-auto whitespace-pre-wrap`,
              children: (0, J.jsx)(F, {
                id: `codex.mcpTool.mcpAppTooLarge`,
                defaultMessage: `Failed to load MCP app: HTML exceeds the maximum supported size.`,
                description: `Error shown when an MCP app resource is too large to render`,
              }),
            }),
          })),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (o) {
    let e;
    t[10] === u
      ? (e = t[11])
      : ((e = u.formatMessage({
          id: `codex.mcpTool.mcpAppLoading`,
          defaultMessage: `Loading MCP app`,
          description: `Accessible label for the MCP app loading placeholder`,
        })),
        (t[10] = u),
        (t[11] = e));
    let n = c ? `h-full border-t` : `rounded-lg border`,
      r;
    t[12] === n
      ? (r = t[13])
      : ((r = O(
          `mcp-app-loading-pulse w-full overflow-hidden border-token-border-light`,
          n,
        )),
        (t[12] = n),
        (t[13] = r));
    let i = c ? `100%` : pn,
      a;
    t[14] === i ? (a = t[15]) : ((a = { height: i }), (t[14] = i), (t[15] = a));
    let o;
    return (
      t[16] !== e || t[17] !== r || t[18] !== a
        ? ((o = (0, J.jsx)(`div`, {
            role: `status`,
            "aria-label": e,
            "data-mcp-app-loading": `true`,
            className: r,
            style: a,
          })),
          (t[16] = e),
          (t[17] = r),
          (t[18] = a),
          (t[19] = o))
        : (o = t[19]),
      o
    );
  }
  if (y != null) {
    let e;
    return (
      t[20] === y.message
        ? (e = t[21])
        : ((e = (0, J.jsx)(Be, {
            className: `w-full`,
            fullWidth: !0,
            level: `danger`,
            children: (0, J.jsx)(`div`, {
              className: `text-size-chat max-h-48 overflow-auto whitespace-pre-wrap`,
              children: (0, J.jsx)(F, {
                id: `codex.mcpTool.mcpAppLoadFailed`,
                defaultMessage: `Failed to load MCP app: {message}`,
                description: `Error shown when an MCP app resource fails to load`,
                values: { message: y.message },
              }),
            }),
          })),
          (t[20] = y.message),
          (t[21] = e)),
      e
    );
  }
  if (a == null) {
    let e;
    return (
      t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(`p`, {
            className: `text-token-description-foreground/80`,
            children: (0, J.jsx)(F, {
              id: `codex.mcpTool.mcpAppNoContent`,
              defaultMessage: `MCP app returned no HTML content`,
              description: `Message shown when an MCP app resource has no renderable HTML`,
            }),
          })),
          (t[22] = e))
        : (e = t[22]),
      e
    );
  }
  let S = c && `h-full`,
    C;
  t[23] === S
    ? (C = t[24])
    : ((C = O(`w-full overflow-hidden`, S)), (t[23] = S), (t[24] = C));
  let w = f.isFullScreen ? 0 : c ? `100%` : v,
    T;
  t[25] === w ? (T = t[26]) : ((T = { height: w }), (t[25] = w), (t[26] = T));
  let E;
  return (
    t[27] !== C || t[28] !== T
      ? ((E = (0, J.jsx)(`div`, {
          ref: m,
          "data-mcp-app-expanded": `true`,
          className: C,
          style: T,
        })),
        (t[27] = C),
        (t[28] = T),
        (t[29] = E))
      : (E = t[29]),
    E
  );
}
function Cn(e) {
  let t = (0, q.c)(9),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { mcpAppId: r } = n,
    i = ee(nt),
    a;
  t[2] === i
    ? (a = t[3])
    : ((a = Array.from(i.keys())), (t[2] = i), (t[3] = a));
  let o = a;
  if (r != null) {
    let e;
    (t[4] !== r || t[5] !== i
      ? ((e = i.has(r) ? [r] : []), (t[4] = r), (t[5] = i), (t[6] = e))
      : (e = t[6]),
      (o = e));
  }
  let s;
  return (
    t[7] === o
      ? (s = t[8])
      : ((s = (0, J.jsx)(J.Fragment, { children: o.map(wn) })),
        (t[7] = o),
        (t[8] = s)),
    s
  );
}
function wn(e) {
  return (0, J.jsx)(Tn, { mcpAppId: e }, e);
}
function Tn(e) {
  let t = (0, q.c)(5),
    { mcpAppId: n } = e,
    r = R(ot, n),
    i = R(st, n),
    a = R(ct, n);
  if (r == null || (!i.isInlineExpanded && !i.isFullScreen && !a)) return null;
  let o =
      i.isFullScreen ||
      (!i.isInlineExpanded && r.inlineFrameContainer?.isConnected !== !0 && a)
        ? (r.sidePanelFrameContent ?? r.inlineFrameContent)
        : r.inlineFrameContent,
    s;
  return (
    t[0] !== o ||
    t[1] !== i ||
    t[2] !== r.inlineFrameContainer ||
    t[3] !== r.mcpAppId
      ? ((s = (0, J.jsx)(En, {
          ...o,
          inlineFrameContainer: r.inlineFrameContainer,
          mcpAppId: r.mcpAppId,
          frameState: i,
        })),
        (t[0] = o),
        (t[1] = i),
        (t[2] = r.inlineFrameContainer),
        (t[3] = r.mcpAppId),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function En({
  conversationId: e,
  csp: t,
  fullSurface: n,
  hostId: r,
  html: i,
  inlineFrameContainer: a,
  mcpAppId: o,
  mcpAppScope: s,
  mcpServerStatuses: c,
  prefersBorder: l,
  overrideMcpRequest: u,
  sandboxOriginScope: d,
  server: f,
  sidePanelConnectorIcon: p,
  sidePanelTitle: m,
  title: h,
  toolArguments: g,
  toolResult: b,
  widgetDomain: x,
  frameState: S,
}) {
  let C = L(W),
    T = M(),
    E = U(),
    D = ie(e),
    { createPendingWorktree: k } = ye(),
    A = ee(de.activeTab$),
    { rightPanelLayoutTick: N } = oe(),
    { isFullScreen: P } = S,
    I = (0, Y.useRef)(!1),
    R = (0, Y.useRef)(null),
    [z, B] = (0, Y.useState)(null),
    [V, te] = (0, Y.useState)(null),
    [ne, ce] = (0, Y.useState)(!1),
    [le, ue] = (0, Y.useState)(null),
    [fe, pe] = (0, Y.useState)(null),
    [G, me] = (0, Y.useState)(null),
    [K, he] = (0, Y.useState)(gn),
    [ge, _e] = (0, Y.useState)(null),
    [ve, be] = (0, Y.useState)(!1),
    [xe, Se] = (0, Y.useState)(null),
    [Ce, we] = (0, Y.useState)(null),
    Te = (0, Y.useMemo)(() => Vn(g), [g]),
    Ee = (0, Y.useMemo)(() => Hn(b), [b]),
    De = (0, Y.useMemo)(() => He({ toolResult: b }), [b]),
    Oe = (0, Y.useEffectEvent)(() => ({
      toolInput: Te,
      toolOutput: Ee,
      toolResponseMetadata: De,
      toolResult: b,
    })),
    ke = Ve({ locale: T.locale, originScope: d, widgetDomain: x }),
    Ae = (0, Y.useMemo)(() => Ue({ originScope: d, sourceUrl: ke }), [ke, d]),
    je = (0, Y.useEffectEvent)(() => {
      let e = y(ke);
      return e == null
        ? null
        : {
            csp: t,
            html: i,
            locale: T.locale,
            sandboxOrigin: e,
            sourceUrl: ke,
          };
    }),
    Me = le?.isConnected === !0 ? le : null,
    Ne = a?.isConnected === !0 ? a : null,
    Pe = z?.parentElement,
    Fe =
      Ne?.closest(`[data-mcp-app-portal-target='true']`) ??
      (Pe instanceof HTMLElement && Pe.dataset.mcpAppPortalTarget === `true`
        ? Pe
        : document.querySelector(`[data-mcp-app-portal-target='true']`)),
    Ie = (0, Y.useEffectEvent)((e) => {
      let t = Jt.safeParse(e);
      t.success && pe(t.data);
    }),
    Le = (0, Y.useEffectEvent)(() => {
      ht(C, o, { sandboxError: Error(`The MCP app sandbox failed to load.`) });
    }),
    Re = (0, Y.useEffectEvent)((e) => {
      let t = on.safeParse(e);
      t.success && ht(C, o, { intrinsicHeight: t.data });
    }),
    ze = (0, Y.useEffectEvent)((e) => {
      on.safeParse(e);
    }),
    Be = (0, Y.useEffectEvent)((e) => {
      let t = Xt.safeParse(e);
      t.success &&
        he({ canGoBack: t.data.canGoBack, canGoForward: t.data.canGoForward });
    }),
    We = (0, Y.useEffectEvent)((e) => {
      let t = sn.safeParse(e);
      t.success && H.dispatchMessage(`open-in-browser`, { url: t.data.href });
    }),
    Ge = (0, Y.useEffectEvent)((e) => {
      let t = Yt.safeParse(e);
      if (t.success) {
        let e = t.data.mode === `fullscreen`,
          n = t.data.mode;
        return (
          e && ft(C, o),
          ht(C, o, { isFullScreen: e }),
          G != null &&
            ge != null &&
            (Q(
              G.setWidgetView({
                displayMode: n,
                isTombstone: !1,
                viewParams: Ee,
                widgetId: ge,
              }),
            ),
            z != null &&
              Q(
                G.notifyMcpAppsHostContext({
                  hostContext: tr({
                    containerDimensions: rr(z),
                    displayMode: n,
                    locale: T.locale,
                    safeAreaInsets: nr({
                      displayMode: n,
                      hasNavigationHistory: K.canGoBack || K.canGoForward,
                    }).insets,
                    theme: ir(),
                    userAgent: ar(),
                  }),
                }),
              )),
          { mode: n }
        );
      }
      return { mode: P ? `fullscreen` : `inline` };
    }),
    Ke = (0, Y.useEffectEvent)(() => (P ? `fullscreen` : `inline`)),
    qe = (0, Y.useEffectEvent)(() => xe),
    Je = (e) => {
      let t = zn(e.content);
      D({ id: o, imageAttachments: Bn(e.content), text: t, title: h });
    },
    q = (0, Y.useEffectEvent)((e, t) => {
      let n = cn.safeParse(t);
      Se(n.success ? n.data : null);
      let r = un.safeParse(t);
      r.success && Je(r.data);
    }),
    Ye = (0, Y.useEffectEvent)((e) => {
      G != null && Q(G.navigate({ delta: e }));
    }),
    Xe = (0, Y.useEffectEvent)(async (t) => {
      let n = Zt.safeParse(t);
      if (!n.success) throw $(`Invalid follow-up message`, -32602);
      if (Ce != null)
        throw $(`A follow-up message is already awaiting confirmation`, Vt);
      let { prompt: i } = n.data,
        a = await new Promise((e, t) => {
          we({ prompt: i, reject: t, resolve: e });
        });
      switch (a.type) {
        case `current-thread`:
          await w(`send-follow-up-message`, {
            conversationId: e,
            prompt: a.prompt,
          });
          return;
        case `new-thread`:
          if (a.executionMode === `worktree`) {
            await E(
              `/worktree-init-v2/${await In({ createPendingWorktree: k, hostId: r, prompt: a.prompt, projectRoot: a.projectRoot })}`,
            );
            return;
          }
          await E(
            _(
              await Fn({
                hostId: r,
                prompt: a.prompt,
                projectRoot: a.projectRoot,
              }),
            ),
          );
          return;
      }
    }),
    tt = async (e, t) => (u == null ? t() : u(e)),
    nt = (t) =>
      tt({ method: `tools/call`, params: t }, () =>
        Wn({
          conversationId: e,
          hostId: r,
          mcpAppScope: s,
          mcpServerStatuses: c,
          server: f,
          toolCallParams: t,
        }),
      ),
    rt = (0, Y.useEffectEvent)(async (e, t) => {
      let n = tn.safeParse({ arguments: t, name: e });
      if (!n.success) throw $(`Invalid MCP tool call params`, -32602);
      return nt(n.data);
    }),
    it = (0, Y.useEffectEvent)(async (t) => {
      let n = Qt.safeParse(t);
      if (!n.success) throw $(`Invalid MCP proxy request`, -32602);
      let { method: i, params: a } = n.data;
      switch (i) {
        case `ping`:
          return {};
        case `ui/download-file`: {
          let e = $t.safeParse(a);
          if (!e.success) throw $(`Invalid MCP file download params`, -32602);
          return (Rn(e.data), {});
        }
        case `ui/update-model-context`: {
          let e = ln.safeParse(a);
          if (!e.success) throw $(`Invalid MCP model context params`, -32602);
          return (Je(e.data), {});
        }
        case `tools/call`: {
          let e = tn.safeParse(a);
          if (!e.success) throw $(`Invalid MCP tool call params`, -32602);
          return nt(e.data);
        }
        case `resources/read`: {
          let t = rn.safeParse(a);
          if (!t.success) throw $(`Invalid MCP resource read params`, -32602);
          return tt({ method: i, params: t.data }, async () => {
            Zn({ mcpAppScope: s, server: f, uri: t.data.uri });
            try {
              return await w(`read-mcp-resource`, {
                hostId: r,
                threadId: e,
                server: f,
                uri: t.data.uri,
              });
            } catch (e) {
              throw er(e, `MCP resource read failed`);
            }
          });
        }
        case `tools/list`:
          return tt(n.data, async () => {
            let e = await Un({
              hostId: r,
              mcpServerStatuses: f === `codex_apps` ? c : void 0,
              server: f,
            });
            return {
              tools: Jn({
                connectorId: Kn({ mcpAppScope: s, server: f, serverStatus: e }),
                server: f,
                tools: Object.values(e.tools).filter(Boolean),
              }),
            };
          });
        case `resources/list`:
          return tt(n.data, async () =>
            f === `codex_apps`
              ? { resources: [] }
              : { resources: (await Un({ hostId: r, server: f })).resources },
          );
        case `resources/templates/list`:
          return tt(n.data, async () =>
            f === `codex_apps`
              ? { resourceTemplates: [] }
              : {
                  resourceTemplates: (await Un({ hostId: r, server: f }))
                    .resourceTemplates,
                },
          );
        case `prompts/list`:
          return tt(n.data, async () => ({ prompts: [] }));
        default:
          return tt(n.data, async () => {
            throw $(`Unsupported MCP proxy method: ${i}`, -32601);
          });
      }
    });
  ((0, Y.useLayoutEffect)(() => {
    let e = document.createElement(`div`),
      t = document.createElement(`webview`);
    return (
      t.setAttribute(`partition`, v(Ae)),
      B(e),
      te(t),
      () => {
        (e.remove(),
          B((t) => (t === e ? null : t)),
          te((e) => (e === t ? null : e)),
          ce(!1));
      }
    );
  }, [o, ke, Ae]),
    (0, Y.useLayoutEffect)(() => {
      z == null ||
        V == null ||
        ((z.className = O(
          `group/mcp-app relative flex h-full min-h-0 min-w-0 w-full flex-col overflow-hidden bg-token-background`,
          !P &&
            (n
              ? `border-t border-token-border-light`
              : `rounded-lg border shadow-sm`),
          !P && !n && (l ? `border-token-border` : `border-token-border-light`),
        )),
        (V.className = O(
          `bg-token-background h-full min-h-0 min-w-0 w-full overflow-hidden`,
          !P && !n && `rounded-lg`,
          P && `min-h-0 flex-1`,
        )),
        (V.style.backgroundColor = fe ?? ``),
        (V.title = h));
    }, [fe, n, z, P, l, V, h]),
    (0, Y.useLayoutEffect)(() => {
      if (z == null || V == null) return;
      let e = P ? Me : Ne;
      if (e == null || Fe == null) {
        z.style.display = `none`;
        return;
      }
      (V.parentElement !== z && z.appendChild(V),
        z.parentElement !== Fe && Fe.appendChild(z),
        (z.style.display = ``),
        ne || ce(!0));
      let t = () => {
        Ln({
          frameElement: z,
          isFullScreen: P,
          targetFrameContainer: e,
          threadFrameContainer: Fe,
        });
      };
      if ((t(), typeof ResizeObserver > `u`)) return;
      let n = new ResizeObserver(t);
      (n.observe(e), n.observe(Fe));
      let r = N.on(`change`, t);
      return () => {
        (n.disconnect(), r());
      };
    }, [z, Ne, P, ne, N, V, Me, Fe]),
    (0, Y.useLayoutEffect)(
      () => (
        (I.current = !1),
        () => {
          ((I.current = !0), Qe(C, o));
        }
      ),
      [o, C],
    ));
  let at = (0, Y.useEffectEvent)((e) => {
      Ze(C, {
        activate: !C.get(de.tabs$).some((e) => e.tabId === $e(o)),
        connectorIcon: p,
        mcpAppId: o,
        onExitFullScreen: e,
        onPanelElementChange: ue,
        title: m,
      });
    }),
    ot = (0, Y.useEffectEvent)(() => {
      I.current || (ft(C, o), ht(C, o, { isFullScreen: !1 }));
    });
  ((0, Y.useLayoutEffect)(() => {
    if (P) {
      at(ot);
      return;
    }
    Qe(C, o);
  }, [P, o, C, p?.alt, p?.logoDarkUrl, p?.logoUrl, m]),
    (0, Y.useLayoutEffect)(() => {
      if (V == null || z == null || !ne) return;
      (ht(C, o, { sandboxError: null }), be(!1), he(gn), (R.current = null));
      let e = je();
      if (e == null) {
        (j.warning(`mcp_app_sandbox.init_config_missing`, {
          safe: {},
          sensitive: { mcpAppId: o },
        }),
          ht(C, o, {
            sandboxError: Error(`The MCP app sandbox failed to load.`),
          }));
        return;
      }
      let t = new AbortController(),
        n = null,
        r = crypto.randomUUID(),
        i = qe(),
        { toolInput: a, toolOutput: s, toolResponseMetadata: c } = Oe();
      return (
        kt({
          hostApiHandlers: {
            callMcp: it,
            callTool: rt,
            notifyBackgroundColor: Ie,
            notifyEnvironmentError: Le,
            notifyIntrinsicHeight: Re,
            notifyIntrinsicWidth: ze,
            notifyNavigation: (e) => {
              t.signal.aborted || Be(e);
            },
            notifySecurityPolicyViolation: () => {},
            openExternal: We,
            requestDisplayMode: Ge,
            sendFollowUpMessage: Xe,
            sendInstrument: () => {},
            updateWidgetState: q,
          },
          origin: e.sandboxOrigin,
          sandboxId: Ae,
          signal: t.signal,
          sourceUrl: e.sourceUrl,
          webview: V,
        })
          .then(async (o) => {
            if (t.signal.aborted) return;
            ((n = o), me(o), _e(r));
            let l = Ke(),
              u = ir(),
              d = rr(z),
              f = ar(),
              p = tr({
                containerDimensions: d,
                displayMode: l,
                locale: e.locale,
                safeAreaInsets: dn.insets,
                theme: u,
                userAgent: f,
              }),
              m = o.runWidgetCode({
                csp: e.csp,
                displayMode: l,
                features: [`fullscreen`],
                html: e.html,
                isFirstParty: !1,
                isSidebarOpen: !1,
                isTombstone: !1,
                maxHeight: d.maxHeight,
                maxWidth: d.maxWidth,
                measureWidth: !1,
                mcpApps: {
                  hostCapabilities: {
                    logging: {},
                    message: {},
                    openLinks: {},
                    serverResources: {},
                    serverTools: {},
                    updateModelContext: { image: {}, text: {} },
                    ...(e.csp == null
                      ? {}
                      : {
                          sandbox: {
                            csp: {
                              baseUriDomains: e.csp.baseUriDomains,
                              connectDomains: e.csp.connectDomains,
                              frameDomains: e.csp.frameDomains,
                              resourceDomains: e.csp.resourceDomains,
                            },
                          },
                        }),
                  },
                  hostContext: p,
                  hostInfo: { name: `chatgpt` },
                },
                safeArea: dn,
                theme: u,
                toolInput: a,
                toolOutput: s,
                toolResponseMetadata: c,
                userAgent: f,
                viewParams: s,
                widgetId: r,
                widgetState: i,
              }),
              h = !1;
            for await (let e of m) {
              if (t.signal.aborted) break;
              h ||
                !qt.safeParse(e).success ||
                ((h = !0),
                be(!0),
                Q(
                  o.setWidgetView({
                    displayMode: l,
                    isTombstone: !1,
                    viewParams: s,
                    widgetId: r,
                  }),
                ),
                Q(o.setTheme({ theme: u })),
                Q(o.setSafeArea({ safeArea: dn })),
                Q(
                  o.setAdditionalGlobals({
                    additionalGlobals: {
                      isSidebarOpen: !1,
                      maxHeight: d.maxHeight,
                      maxWidth: d.maxWidth,
                    },
                  }),
                ),
                Q(o.notifyMcpAppsHostContext({ hostContext: p })));
            }
          })
          .catch((e) => {
            t.signal.aborted ||
              (j.warning(`mcp_app_sandbox.init_failed`, {
                safe: {
                  errorMessage: e instanceof Error ? e.message : String(e),
                  errorName: e instanceof Error ? e.name : `UnknownError`,
                },
                sensitive: { mcpAppId: o },
              }),
              be(!1),
              ht(C, o, {
                sandboxError: Error(`The MCP app sandbox failed to load.`),
              }));
          }),
        () => {
          (t.abort(),
            (R.current = null),
            be(!1),
            me(null),
            he(gn),
            _e(null),
            n != null &&
              Q(n.requestMcpAppsResourceTeardown({ timeoutMs: 500 })),
            V.removeAttribute(`src`));
        }
      );
    }, [z, ne, o, C, V, Ae]),
    (0, Y.useEffect)(() => {
      if (!ve || G == null || ge == null) return;
      let e = {
        toolInput: Te,
        toolOutput: Ee,
        toolResponseMetadata: De,
        toolResult: {
          content: b.content,
          structuredContent: b.structuredContent ?? void 0,
        },
      };
      if ((0, et.default)(R.current, e)) return;
      R.current = e;
      let t = qe();
      (Q(
        G.setWidgetData({
          toolInput: Te,
          toolOutput: Ee,
          toolResponseMetadata: De,
          widgetId: ge,
          widgetState: t,
        }),
      ),
        Te != null && Q(G.notifyMcpAppsToolInput({ arguments: Te })),
        Q(
          G.notifyMcpAppsToolResult({
            content: b.content,
            ...(b.structuredContent == null
              ? {}
              : { structuredContent: b.structuredContent }),
            ...(De == null ? {} : { _meta: De }),
          }),
        ));
    }, [ve, G, Te, Ee, De, b, ge]),
    (0, Y.useEffect)(() => {
      if (z == null || G == null || ge == null || (P && Me == null)) return;
      let e = null,
        t = P ? `fullscreen` : `inline`,
        n = () => {
          let e = rr(z),
            n = nr({
              displayMode: t,
              hasNavigationHistory: K.canGoBack || K.canGoForward,
            });
          (Q(
            G.setAdditionalGlobals({
              additionalGlobals: {
                isSidebarOpen: !1,
                maxHeight: e.maxHeight,
                maxWidth: e.maxWidth,
              },
            }),
          ),
            Q(G.setSafeArea({ safeArea: n })),
            Q(
              G.setWidgetView({
                displayMode: t,
                isTombstone: !1,
                viewParams: Ee,
                widgetId: ge,
              }),
            ),
            Q(
              G.notifyMcpAppsHostContext({
                hostContext: tr({
                  containerDimensions: e,
                  displayMode: t,
                  locale: T.locale,
                  safeAreaInsets: n.insets,
                  theme: ir(),
                  userAgent: ar(),
                }),
              }),
            ));
        },
        r = () => {
          e ??= window.requestAnimationFrame(() => {
            ((e = null), n());
          });
        };
      if ((r(), typeof ResizeObserver > `u`))
        return () => {
          e != null && window.cancelAnimationFrame(e);
        };
      let i = new ResizeObserver(r);
      i.observe(z);
      let a = N.on(`change`, r);
      return () => {
        (i.disconnect(), a(), e != null && window.cancelAnimationFrame(e));
      };
    }, [z, T.locale, P, K.canGoBack, K.canGoForward, N, G, Me, Ee, ge]));
  let st = (e) => {
      let t = Ce;
      t != null && (we(null), t.resolve(e));
    },
    ct = () => {
      let e = Ce;
      e != null &&
        (we(null), e.reject($(`Follow-up message was not confirmed`, Vt)));
    },
    lt = V?.tagName === `WEBVIEW`,
    ut = z != null && G != null && lt && lr(),
    dt = K.canGoBack || K.canGoForward,
    pt = G != null && dt,
    mt = pt && !P,
    gt = pt && P && A?.tabId === $e(o);
  return (0, J.jsxs)(J.Fragment, {
    children: [
      (0, J.jsx)(kn, { confirmation: Ce, onCancel: ct, onConfirm: st }),
      gt
        ? (0, J.jsx)(se.RightPanelTabListBefore, {
            children: (0, J.jsx)(Dn, {
              canGoBack: K.canGoBack,
              canGoForward: K.canGoForward,
              className: `h-full px-1`,
              onBack: () => Ye(-1),
              onForward: () => Ye(1),
            }),
          })
        : null,
      mt && z != null && !P
        ? (0, Bt.createPortal)(
            (0, J.jsx)(Dn, {
              canGoBack: K.canGoBack,
              canGoForward: K.canGoForward,
              className: `absolute top-2 left-2 z-50 rounded-md border border-token-border bg-token-main-surface-primary/95 p-0.5 shadow-sm`,
              onBack: () => Ye(-1),
              onForward: () => Ye(1),
            }),
            z,
          )
        : null,
      ut
        ? (0, Bt.createPortal)(
            (0, J.jsx)(re, {
              side: `top`,
              align: `end`,
              tooltipContent: (0, J.jsx)(F, {
                id: `codex.mcpTool.mcpAppSandboxDevtoolsTooltip`,
                defaultMessage: `Open app DevTools`,
                description: `Tooltip for a development-only button that opens DevTools for an MCP app sandbox webview`,
              }),
              children: (0, J.jsx)(`div`, {
                className: `absolute top-2 right-2 z-50 inline-flex w-fit`,
                children: (0, J.jsx)(ae, {
                  color: `secondary`,
                  size: `default`,
                  className: `cursor-interaction border border-token-border bg-token-main-surface-primary/95 px-2 py-0.5 text-xs shadow-sm`,
                  "aria-label": T.formatMessage({
                    id: `codex.mcpTool.mcpAppSandboxDevtoolsAriaLabel`,
                    defaultMessage: `Open app DevTools`,
                    description: `Aria label for a development-only button that opens DevTools for an MCP app sandbox webview`,
                  }),
                  onClick: (e) => {
                    (e.stopPropagation(),
                      H.dispatchMessage(`open-mcp-app-sandbox-devtools`, {
                        sandboxId: Ae,
                      }));
                  },
                  onPointerDown: (e) => e.stopPropagation(),
                  children: (0, J.jsx)(F, {
                    id: `codex.mcpTool.mcpAppSandboxDevtoolsButton`,
                    defaultMessage: `DevTools`,
                    description: `Label for a development-only button that opens DevTools for an MCP app sandbox webview`,
                  }),
                }),
              }),
            }),
            z,
          )
        : null,
    ],
  });
}
function Dn(e) {
  let t = (0, q.c)(20),
    {
      canGoBack: n,
      canGoForward: r,
      className: i,
      onBack: a,
      onForward: o,
    } = e,
    s = M(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `codex.mcpTool.mcpAppNavigationBack`,
        defaultMessage: `Back`,
        description: `Button label to navigate back inside an MCP app`,
      })),
      (t[0] = s),
      (t[1] = c));
  let l = c,
    u;
  t[2] === s
    ? (u = t[3])
    : ((u = s.formatMessage({
        id: `codex.mcpTool.mcpAppNavigationForward`,
        defaultMessage: `Next`,
        description: `Button label to navigate forward inside an MCP app`,
      })),
      (t[2] = s),
      (t[3] = u));
  let d = u,
    f;
  t[4] === i
    ? (f = t[5])
    : ((f = O(`flex items-center gap-px`, i)), (t[4] = i), (t[5] = f));
  let p;
  t[6] === a
    ? (p = t[7])
    : ((p = (e) => {
        (e.stopPropagation(), a());
      }),
      (t[6] = a),
      (t[7] = p));
  let m;
  t[8] === o
    ? (m = t[9])
    : ((m = (e) => {
        (e.stopPropagation(), o());
      }),
      (t[8] = o),
      (t[9] = m));
  let h;
  t[10] !== l ||
  t[11] !== n ||
  t[12] !== r ||
  t[13] !== d ||
  t[14] !== p ||
  t[15] !== m
    ? ((h = (0, J.jsx)(Ye, {
        backLabel: l,
        canGoBack: n,
        canGoForward: r,
        forwardLabel: d,
        onBack: p,
        onForward: m,
      })),
      (t[10] = l),
      (t[11] = n),
      (t[12] = r),
      (t[13] = d),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== f || t[18] !== h
      ? ((g = (0, J.jsx)(`div`, {
          className: f,
          "data-mcp-app-navigation-controls": `true`,
          onPointerDown: On,
          children: h,
        })),
        (t[17] = f),
        (t[18] = h),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
function On(e) {
  return e.stopPropagation();
}
function kn(e) {
  let t = (0, q.c)(10),
    { confirmation: n, onCancel: r, onConfirm: i } = e,
    a = n != null,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = (e) => {
        e || r();
      }),
      (t[0] = r),
      (t[1] = o));
  let s;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((s =
        n == null
          ? null
          : (0, J.jsx)(An, { confirmation: n, onCancel: r, onConfirm: i })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, J.jsx)(K, {
          open: a,
          onOpenChange: o,
          size: `wide`,
          children: s,
        })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function An(e) {
  let t = (0, q.c)(57),
    { confirmation: n, onCancel: r, onConfirm: i } = e,
    a = M(),
    o = (0, Y.useId)(),
    s = ee(xe),
    [c, l] = (0, Y.useState)(n.prompt),
    [u, d] = (0, Y.useState)(!1),
    [f, p] = (0, Y.useState)(`local`),
    [m, h] = (0, Y.useState)(null),
    g;
  t[0] === c ? (g = t[1]) : ((g = c.trim()), (t[0] = c), (t[1] = g));
  let _ = g,
    v,
    y,
    b;
  if (t[2] !== f || t[3] !== m || t[4] !== s) {
    let e = x(`~`);
    ((y = ze({ workspaceGroups: s, roots: [], formatRootLabel: Nn })),
      (b = ze({
        workspaceGroups: s?.filter(Mn),
        roots: [],
        formatRootLabel: jn,
      })));
    let n = m === e ? e : (y.find((e) => e.value === m)?.value ?? e),
      r = b.find((e) => e.value === m)?.value ?? b[0]?.value ?? null;
    ((v = f === `local` ? x(n) : r == null ? null : x(r)),
      (t[2] = f),
      (t[3] = m),
      (t[4] = s),
      (t[5] = v),
      (t[6] = y),
      (t[7] = b));
  } else ((v = t[5]), (y = t[6]), (b = t[7]));
  let S = v,
    C = b.length > 0,
    w = _.length > 0 && (!u || (S != null && (f === `local` || C))),
    T;
  t[8] !== C ||
  t[9] !== u ||
  t[10] !== f ||
  t[11] !== i ||
  t[12] !== S ||
  t[13] !== _
    ? ((T = (e) => {
        if ((e.preventDefault(), _.length !== 0)) {
          if (u) {
            if (S == null || (f === `worktree` && !C)) return;
            i({
              executionMode: f,
              prompt: _,
              type: `new-thread`,
              projectRoot: S,
            });
            return;
          }
          i({ prompt: _, type: `current-thread` });
        }
      }),
      (t[8] = C),
      (t[9] = u),
      (t[10] = f),
      (t[11] = i),
      (t[12] = S),
      (t[13] = _),
      (t[14] = T))
    : (T = t[14]);
  let E;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, J.jsx)(G, {
        children: (0, J.jsx)(F, {
          id: `codex.mcpTool.confirmFollowUp.title`,
          defaultMessage: `Send follow-up?`,
          description: `Title for a dialog asking whether an MCP app may send a follow-up prompt`,
        }),
      })),
      (t[15] = E))
    : (E = t[15]);
  let D;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, J.jsx)(me, {
        title: E,
        subtitle: (0, J.jsx)(_e, {
          children: (0, J.jsx)(F, {
            id: `codex.mcpTool.confirmFollowUp.description`,
            defaultMessage: `An app wants to send this prompt`,
            description: `Description for a dialog asking whether an MCP app may send a follow-up prompt`,
          }),
        }),
      })),
      (t[16] = D))
    : (D = t[16]);
  let O;
  t[17] === a
    ? (O = t[18])
    : ((O = a.formatMessage({
        id: `codex.mcpTool.confirmFollowUp.promptAriaLabel`,
        defaultMessage: `Prompt`,
        description: `Aria label for the editable prompt field in the MCP app follow-up confirmation dialog`,
      })),
      (t[17] = a),
      (t[18] = O));
  let k;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (e) => {
        l(e.target.value);
      }),
      (t[19] = k))
    : (k = t[19]);
  let A;
  t[20] !== c || t[21] !== O
    ? ((A = (0, J.jsx)(`textarea`, {
        "aria-label": O,
        autoFocus: !0,
        className: `max-h-60 min-h-32 resize-y rounded-md border border-token-border bg-token-bg-fog px-3 py-2 text-sm whitespace-pre-wrap text-token-text-primary outline-none focus:border-token-focus-border`,
        value: c,
        onChange: k,
      })),
      (t[20] = c),
      (t[21] = O),
      (t[22] = A))
    : (A = t[22]);
  let j;
  t[23] !== o || t[24] !== u
    ? ((j = (0, J.jsx)(we, { id: o, checked: u, onCheckedChange: d })),
      (t[23] = o),
      (t[24] = u),
      (t[25] = j))
    : (j = t[25]);
  let N;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, J.jsx)(F, {
        id: `codex.mcpTool.confirmFollowUp.createNewThread`,
        defaultMessage: `Create new thread`,
        description: `Checkbox label for sending an MCP app follow-up prompt to a new thread`,
      })),
      (t[26] = N))
    : (N = t[26]);
  let P;
  t[27] === o
    ? (P = t[28])
    : ((P = (0, J.jsx)(`label`, {
        htmlFor: o,
        className: `cursor-interaction text-sm text-token-foreground`,
        children: N,
      })),
      (t[27] = o),
      (t[28] = P));
  let I;
  t[29] !== P || t[30] !== j
    ? ((I = (0, J.jsxs)(`div`, {
        className: `relative flex min-w-0 items-center gap-2`,
        children: [j, P],
      })),
      (t[29] = P),
      (t[30] = j),
      (t[31] = I))
    : (I = t[31]);
  let L;
  t[32] !== C ||
  t[33] !== a ||
  t[34] !== u ||
  t[35] !== f ||
  t[36] !== S ||
  t[37] !== y ||
  t[38] !== b
    ? ((L = u
        ? (0, J.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [
              (0, J.jsx)(Pn, { mode: f, canCreateWorktree: C, onChange: p }),
              (0, J.jsx)(`span`, {
                className: `text-sm text-token-description-foreground`,
                children: (0, J.jsx)(F, {
                  id: `codex.mcpTool.confirmFollowUp.runsIn`,
                  defaultMessage: `in`,
                  description: `Short label before the project dropdown after the Create new thread checkbox in the MCP app follow-up confirmation dialog`,
                }),
              }),
              (0, J.jsx)(Re, {
                selectedRoots: S == null ? _n : [S],
                options: f === `worktree` ? b : y,
                placeholder: a.formatMessage({
                  id: `codex.mcpTool.confirmFollowUp.projectPlaceholder`,
                  defaultMessage: `Select project`,
                  description: `Placeholder text for the project dropdown in the MCP app follow-up confirmation dialog`,
                }),
                className: `max-w-56 shrink`,
                includeChats: f === `local`,
                localOnlyTooltip: a.formatMessage({
                  id: `codex.mcpTool.confirmFollowUp.localProjectsOnlyTooltip`,
                  defaultMessage: `Remote projects aren't available for new threads from MCP app follow-ups`,
                  description: `Tooltip explaining why MCP app follow-up new thread project options only include Chats and local projects when remote connections are connected`,
                }),
                selectionMode: `single`,
                onChange: (e) => {
                  h(e[0] ?? null);
                },
              }),
            ],
          })
        : null),
      (t[32] = C),
      (t[33] = a),
      (t[34] = u),
      (t[35] = f),
      (t[36] = S),
      (t[37] = y),
      (t[38] = b),
      (t[39] = L))
    : (L = t[39]);
  let R;
  t[40] !== I || t[41] !== L
    ? ((R = (0, J.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col items-start gap-2`,
        children: [I, L],
      })),
      (t[40] = I),
      (t[41] = L),
      (t[42] = R))
    : (R = t[42]);
  let z;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, J.jsx)(F, {
        id: `codex.mcpTool.confirmFollowUp.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for a dialog asking whether an MCP app may send a follow-up prompt`,
      })),
      (t[43] = z))
    : (z = t[43]);
  let B;
  t[44] === r
    ? (B = t[45])
    : ((B = (0, J.jsx)(ae, {
        color: `secondary`,
        className: `ml-auto`,
        onClick: r,
        children: z,
      })),
      (t[44] = r),
      (t[45] = B));
  let V = !w,
    H;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, J.jsx)(F, {
        id: `codex.mcpTool.confirmFollowUp.confirm`,
        defaultMessage: `Send`,
        description: `Confirm button for a dialog asking whether an MCP app may send a follow-up prompt`,
      })),
      (t[46] = H))
    : (H = t[46]);
  let U;
  t[47] === V
    ? (U = t[48])
    : ((U = (0, J.jsx)(ae, { type: `submit`, disabled: V, children: H })),
      (t[47] = V),
      (t[48] = U));
  let te;
  t[49] !== R || t[50] !== B || t[51] !== U
    ? ((te = (0, J.jsxs)(ge, {
        className: `justify-start gap-2`,
        children: [R, B, U],
      })),
      (t[49] = R),
      (t[50] = B),
      (t[51] = U),
      (t[52] = te))
    : (te = t[52]);
  let ne;
  return (
    t[53] !== te || t[54] !== T || t[55] !== A
      ? ((ne = (0, J.jsxs)(he, {
          as: `form`,
          className: `gap-4`,
          onSubmit: T,
          children: [D, A, te],
        })),
        (t[53] = te),
        (t[54] = T),
        (t[55] = A),
        (t[56] = ne))
      : (ne = t[56]),
    ne
  );
}
function jn(e) {
  return e;
}
function Mn(e) {
  return e.projectKind === `local` && e.repositoryData != null;
}
function Nn(e) {
  return e;
}
function Pn(e) {
  let t = (0, q.c)(28),
    { mode: n, canCreateWorktree: r, onChange: i } = e,
    a = M(),
    o = n === `worktree` ? Fe : Pe,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = a.formatMessage(yn.newWorktreeRequiresGitProject)),
      (t[0] = a),
      (t[1] = s));
  let c = s,
    l;
  t[2] === o
    ? (l = t[3])
    : ((l = (0, J.jsx)(o, { className: `icon-2xs shrink-0` })),
      (t[2] = o),
      (t[3] = l));
  let u = n === `worktree` ? yn.newWorktree : yn.workLocally,
    d;
  t[4] === u
    ? (d = t[5])
    : ((d = (0, J.jsx)(`span`, {
        className: `truncate text-left text-token-foreground`,
        children: (0, J.jsx)(F, { ...u }),
      })),
      (t[4] = u),
      (t[5] = d));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, J.jsx)(Ne, {
        className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== l || t[8] !== d
    ? ((p = (0, J.jsxs)(ae, {
        size: `composerSm`,
        color: `ghost`,
        className: `min-w-0`,
        children: [l, d, f],
      })),
      (t[7] = l),
      (t[8] = d),
      (t[9] = p))
    : (p = t[9]);
  let m = n === `local` ? Se : void 0,
    h;
  t[10] === i
    ? (h = t[11])
    : ((h = () => {
        i(`local`);
      }),
      (t[10] = i),
      (t[11] = h));
  let g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsx)(F, { ...yn.workLocally })), (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] !== m || t[14] !== h
    ? ((_ = (0, J.jsx)(je.Item, {
        LeftIcon: Pe,
        RightIcon: m,
        onSelect: h,
        children: g,
      })),
      (t[13] = m),
      (t[14] = h),
      (t[15] = _))
    : (_ = t[15]);
  let v = n === `worktree` ? Se : void 0,
    y = !r,
    b = r ? void 0 : c,
    x;
  t[16] === i
    ? (x = t[17])
    : ((x = () => {
        i(`worktree`);
      }),
      (t[16] = i),
      (t[17] = x));
  let S;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, J.jsx)(F, { ...yn.newWorktree })), (t[18] = S))
    : (S = t[18]);
  let C;
  t[19] !== v || t[20] !== y || t[21] !== b || t[22] !== x
    ? ((C = (0, J.jsx)(je.Item, {
        LeftIcon: Fe,
        RightIcon: v,
        disabled: y,
        tooltipText: b,
        onSelect: x,
        children: S,
      })),
      (t[19] = v),
      (t[20] = y),
      (t[21] = b),
      (t[22] = x),
      (t[23] = C))
    : (C = t[23]);
  let w;
  return (
    t[24] !== _ || t[25] !== C || t[26] !== p
      ? ((w = (0, J.jsxs)(Me, {
          contentWidth: `menuNarrow`,
          triggerButton: p,
          children: [_, C],
        })),
        (t[24] = _),
        (t[25] = C),
        (t[26] = p),
        (t[27] = w))
      : (w = t[27]),
    w
  );
}
async function Fn({ hostId: e, prompt: n, projectRoot: r }) {
  let i = r === `~`,
    a = i
      ? await le([`~`], { prompt: n })
      : { cwd: r, projectlessOutputDirectory: null, workspaceRoots: [r] };
  if (a.cwd == null) throw $(`Missing project root`, Vt);
  if (i && a.projectlessOutputDirectory == null)
    throw $(`Missing projectless thread output directory`, Vt);
  let { config: o } = await w(`read-config-for-host`, {
      hostId: e,
      includeLayers: !1,
      cwd: a.cwd,
    }),
    s = t(T(`agent-mode-by-host-id`, {})[e] ?? `auto`, a.workspaceRoots, o);
  return w(`start-conversation`, {
    hostId: e,
    input: [{ type: `text`, text: n, text_elements: [] }],
    cwd: a.cwd,
    workspaceRoots: a.workspaceRoots,
    collaborationMode: null,
    permissions: s,
    approvalsReviewer: s.approvalsReviewer,
    ...(i
      ? {
          workspaceKind: `projectless`,
          projectlessOutputDirectory: a.projectlessOutputDirectory,
        }
      : { workspaceKind: `project` }),
  });
}
async function In({
  createPendingWorktree: e,
  hostId: t,
  prompt: n,
  projectRoot: r,
}) {
  if (r === `~`) throw $(`Missing project root`, Vt);
  let { config: i } = await w(`read-config-for-host`, {
      hostId: t,
      includeLayers: !1,
      cwd: r,
    }),
    a = [{ type: `text`, text: n, text_elements: [] }],
    o = {
      input: a,
      workspaceRoots: [r],
      cwd: r,
      fileAttachments: vn,
      addedFiles: vn,
      agentMode: T(`agent-mode-by-host-id`, {})[t] ?? `auto`,
      model: null,
      reasoningEffort: null,
      collaborationMode: null,
      config: C(i),
      workspaceKind: `project`,
    };
  return e({
    hostId: t,
    label: ve(a),
    sourceWorkspaceRoot: r,
    startingState: { type: `working-tree` },
    localEnvironmentConfigPath: null,
    launchMode: `start-conversation`,
    prompt: n,
    startConversationParamsInput: o,
    sourceConversationId: null,
    sourceCollaborationMode: null,
  });
}
function Q(e) {
  Promise.resolve(e).catch((e) => {
    j.debug(`MCP sandbox RPC failed`, { safe: {}, sensitive: { error: e } });
  });
}
function Ln({
  frameElement: e,
  isFullScreen: t,
  targetFrameContainer: n,
  threadFrameContainer: r,
}) {
  let i = r.currentCSSZoom ?? 1,
    a = n.getBoundingClientRect();
  if (t) {
    ((e.style.position = `fixed`),
      (e.style.top = `${a.top / i}px`),
      (e.style.left = `${a.left / i}px`),
      (e.style.width = `${a.width / i}px`),
      (e.style.height = `${a.height / i}px`),
      (e.style.zIndex = `43`));
    return;
  }
  let o = r.getBoundingClientRect();
  ((e.style.position = `absolute`),
    (e.style.top = `${(a.top - o.top) / i + r.scrollTop}px`),
    (e.style.left = `${(a.left - o.left) / i + r.scrollLeft}px`),
    (e.style.width = `${a.width / i}px`),
    (e.style.height = `${a.height / i}px`),
    (e.style.zIndex = `1`));
}
function Rn({ blob: e, name: t }) {
  let n = URL.createObjectURL(e),
    r = document.createElement(`a`);
  ((r.href = n),
    (r.download = t),
    (r.style.display = `none`),
    document.body.append(r),
    r.click(),
    r.remove(),
    window.setTimeout(() => URL.revokeObjectURL(n), 0));
}
function zn(e) {
  let t =
    e
      ?.map((e) => Wt.safeParse(e))
      .flatMap((e) => (e.success ? [e.data.text.trim()] : []))
      .filter((e) => e.length > 0) ?? [];
  return t.length > 0
    ? t.join(`

`)
    : null;
}
function Bn(e) {
  return (
    e
      ?.map((e) => Gt.safeParse(e))
      .flatMap((e) =>
        e.success
          ? [{ src: `data:${e.data.mimeType};base64,${e.data.data}` }]
          : [],
      ) ?? []
  );
}
function Vn(e) {
  return typeof e == `object` && e ? e : null;
}
function Hn(e) {
  let t = Ut.safeParse(e.structuredContent);
  if (t.success) return t.data;
  if (e.content.length !== 1) return null;
  let [n] = e.content,
    r = Wt.safeParse(n);
  if (!r.success) return null;
  try {
    let e = JSON.parse(r.data.text);
    return typeof e == `object` && e ? e : null;
  } catch {
    return null;
  }
}
async function Un({ hostId: e, mcpServerStatuses: t, server: n }) {
  let r = t?.data.find(({ name: e }) => e === n) ?? null;
  if (r != null) return r;
  let i =
    (
      await w(`list-mcp-server-status`, { hostId: e, cursor: null, limit: 100 })
    ).data.find(({ name: e }) => e === n) ?? null;
  if (i == null) throw $(`MCP server not found: ${n}`, Vt);
  return i;
}
async function Wn({
  conversationId: e,
  hostId: t,
  mcpAppScope: n,
  mcpServerStatuses: r,
  server: i,
  toolCallParams: a,
}) {
  let o = await Gn({
    hostId: t,
    mcpServerStatuses: r,
    server: i,
    toolName: a.name,
  });
  if (
    (qn({
      connectorId: Kn({
        mcpAppScope: n,
        server: i,
        serverStatus: o.serverStatus,
      }),
      server: i,
      tool: o.tool,
      toolName: o.name,
    }),
    Xn(o.tool))
  )
    throw $(
      `MCP app widgets cannot call tools that accept file parameters: ${o.name}`,
      -32603,
    );
  let s = Qn(i, a._meta),
    c = {
      hostId: t,
      threadId: e,
      server: i,
      tool: o.name,
      arguments: a.arguments ?? {},
      ...(s === void 0 ? {} : { _meta: s }),
    };
  try {
    return await w(`call-mcp-tool`, c);
  } catch (e) {
    throw er(e, `MCP tool call failed`);
  }
}
async function Gn({ hostId: e, mcpServerStatuses: t, server: n, toolName: r }) {
  let i =
    t?.data.find(({ name: e }) => e === n) ??
    (await Un({ hostId: e, server: n }));
  if (n !== `codex_apps`) {
    let e =
      i.tools[r] ?? Object.values(i.tools).find((e) => e?.name === r) ?? null;
    return { name: e?.name ?? r, serverStatus: i, tool: e };
  }
  let a = Object.values(i.tools).find((e) => e?.title === r);
  if (a != null) return { name: a.name, serverStatus: i, tool: a };
  let o = i.tools[r];
  return o == null
    ? { name: r, serverStatus: i, tool: null }
    : { name: o.name, serverStatus: i, tool: o };
}
function Kn({ mcpAppScope: e, server: t, serverStatus: n }) {
  if (t !== `codex_apps`) return null;
  let r = Ke(
    n?.tools[e.originTool] ??
      Object.values(n?.tools ?? {}).find((t) => t?.name === e.originTool) ??
      null,
  );
  if (r == null)
    throw $(`MCP app requests require a trusted connector scope`, -32603);
  return r;
}
function qn({ connectorId: e, server: t, tool: n, toolName: r }) {
  if (t !== `codex_apps`) return;
  let i = Ke(n);
  if (i == null || i !== e)
    throw $(
      `MCP app cannot call tool outside its connector scope: ${r}`,
      -32603,
    );
}
function Jn({ connectorId: e, server: t, tools: n }) {
  if (t !== `codex_apps`) return Yn(n);
  if (e == null)
    throw $(`MCP app tool listing requires a trusted connector scope`, -32603);
  return Yn(n.filter((t) => Ke(t) === e));
}
function Yn(e) {
  return e.filter((e) => !Xn(e));
}
function Xn(e) {
  let t = nn.safeParse(e?._meta);
  return t.success && Object.hasOwn(t.data, `openai/fileParams`);
}
function Zn({ mcpAppScope: e, server: t, uri: n }) {
  if (
    t === `codex_apps` &&
    (e.originResourceUri == null || n !== e.originResourceUri)
  )
    throw $(
      `MCP app cannot read resource outside its widget scope: ${n}`,
      -32603,
    );
}
function Qn(e, t) {
  if (e !== `codex_apps` || !$n(t)) return t;
  let n = { ...t };
  return (
    delete n.connector_id,
    delete n.connector_name,
    delete n.connector_display_name,
    delete n.connector_description,
    delete n._codex_apps,
    n
  );
}
function $n(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function $(e, t, n) {
  let r = Error(e);
  return ((r.code = t), n !== void 0 && (r.cause = n), r);
}
function er(e, t) {
  let n = an.safeParse(e);
  return n.success
    ? $(n.data.message, n.data.code ?? Vt, e)
    : e instanceof Error && e.message.length > 0
      ? $(e.message, Vt, e)
      : $(t, Vt, e);
}
function tr({
  containerDimensions: e,
  displayMode: t,
  locale: n,
  safeAreaInsets: r,
  theme: i,
  userAgent: a,
}) {
  return {
    availableDisplayModes: [`inline`, `fullscreen`],
    containerDimensions: e,
    deviceCapabilities: {
      hover: a.capabilities.hover,
      touch: a.capabilities.touch,
    },
    displayMode: t,
    locale: n,
    platform: `desktop`,
    safeAreaInsets: r,
    theme: i,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    userAgent: `chatgpt`,
  };
}
function nr({ displayMode: e, hasNavigationHistory: t }) {
  return e === `inline` && t ? fn : dn;
}
function rr(e) {
  return { maxHeight: e.clientHeight, maxWidth: e.clientWidth };
}
function ir() {
  return window.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches
    ? `dark`
    : `light`;
}
function ar() {
  return {
    capabilities: {
      hover: window.matchMedia?.(`(hover: hover)`)?.matches ?? !1,
      touch: window.matchMedia?.(`(pointer: coarse)`)?.matches ?? !1,
    },
    device: { os: or(), platform: `native`, type: `desktop` },
  };
}
function or() {
  let e = window.navigator.platform.toLowerCase();
  return e.includes(`mac`)
    ? `macos`
    : e.includes(`win`)
      ? `windows`
      : `unknown`;
}
function sr(e, t) {
  let n = e == null ? (t ?? pn) : Math.max(e, t ?? 0);
  return Math.min(Math.max(n, mn), hn);
}
function cr(e) {
  try {
    return new URL(e).protocol === `https:`;
  } catch {
    return !1;
  }
}
function lr() {
  return !1;
}
var ur = a(),
  dr = r(g(), ur),
  fr = Te.shape.params,
  pr = Ee.shape.params,
  mr = B(
    P,
    (e, { scope: t }) => ({
      queryKey: [
        `mcp-capability-view-resource`,
        e.hostId,
        e.pluginId,
        e.resourceUri,
        e.server,
        e.tool.name,
      ],
      queryFn: () => Ie(t, e.hostId, e.pluginId, e.server, e.resourceUri),
      staleTime: 0,
    }),
    { key: gr },
  ),
  hr = B(
    P,
    ({ toolArguments: e, view: t }, { scope: n }) => ({
      queryKey: [
        `mcp-capability-view-tool-result`,
        t.hostId,
        t.pluginId,
        t.server,
        t.tool.name,
        e,
      ],
      queryFn: async () =>
        Le(n, t.hostId, t.pluginId, t.server, t.tool.name, e),
      staleTime: 0,
    }),
    { key: _r },
  );
function gr(e) {
  return JSON.stringify([
    e.hostId,
    e.pluginId,
    e.resourceUri,
    e.server,
    e.tool.name,
  ]);
}
function _r({ toolArguments: e, view: t }) {
  return JSON.stringify([
    t.hostId,
    t.pluginId,
    t.resourceUri,
    t.server,
    t.tool.name,
    e,
  ]);
}
var vr = {};
function yr(e) {
  let t = (0, q.c)(69),
    {
      className: n,
      instanceId: r,
      readHostResource: i,
      toolArguments: a,
      view: o,
    } = e,
    s = a === void 0 ? vr : a,
    c = L(P),
    l = L(W),
    { data: u, error: d, isLoading: f } = R(mr, o),
    p;
  t[0] !== s || t[1] !== o
    ? ((p = { toolArguments: s, view: o }), (t[0] = s), (t[1] = o), (t[2] = p))
    : (p = t[2]);
  let { data: m, error: h, isLoading: g } = R(hr, p),
    _ = Ge(u);
  te(`2957382457`);
  let v = We({
      isDilEnabled: !1,
      renderData: _,
      resourceUri: o.resourceUri,
      shouldRenderMcpApp: !0,
    }),
    y = v.kind === `html` ? v.renderData : null,
    b;
  t[3] !== i ||
  t[4] !== c ||
  t[5] !== o.hostId ||
  t[6] !== o.pluginId ||
  t[7] !== o.server ||
  t[8] !== o.serverTools
    ? ((b = async (e) => {
        let t = Ae.parse(e);
        switch (t.method) {
          case `tools/call`: {
            let e = fr.parse(t.params);
            return Le(
              c,
              o.hostId,
              o.pluginId,
              o.server,
              e.name,
              dr.parse(e.arguments ?? {}),
            );
          }
          case `resources/read`: {
            let e = pr.parse(t.params),
              n = await i?.(e.uri);
            return n == null
              ? Ie(c, o.hostId, o.pluginId, o.server, e.uri)
              : {
                  contents: [
                    { extension: n.extension, text: n.text, uri: e.uri },
                  ],
                };
          }
          case `tools/list`:
            return { tools: o.serverTools };
          case `resources/list`:
            return { resources: [] };
          case `resources/templates/list`:
            return { resourceTemplates: [] };
          case `prompts/list`:
            return { prompts: [] };
          default:
            throw Error(
              `Unsupported OpenAI MCP capability request: ${t.method}`,
            );
        }
      }),
      (t[3] = i),
      (t[4] = c),
      (t[5] = o.hostId),
      (t[6] = o.pluginId),
      (t[7] = o.server),
      (t[8] = o.serverTools),
      (t[9] = b))
    : (b = t[9]);
  let x = be(b),
    C,
    w;
  if (
    t[10] !== r ||
    t[11] !== l.value.conversationId ||
    t[12] !== l.value.routeKind ||
    t[13] !== o.pluginId ||
    t[14] !== o.server ||
    t[15] !== o.tool.name
  ) {
    let e;
    t[18] === r
      ? (e = t[19])
      : ((e = r == null ? [] : [r]), (t[18] = r), (t[19] = e));
    let n;
    (t[20] !== e ||
    t[21] !== o.pluginId ||
    t[22] !== o.server ||
    t[23] !== o.tool.name
      ? ((n = [
          `openai-mcp-capability`,
          o.pluginId,
          o.server,
          o.tool.name,
          ...e,
        ]),
        (t[20] = e),
        (t[21] = o.pluginId),
        (t[22] = o.server),
        (t[23] = o.tool.name),
        (t[24] = n))
      : (n = t[24]),
      (C = lt(n.join(`:`))),
      (w =
        l.value.routeKind === `local-thread` ? l.value.conversationId : S(C)),
      (t[10] = r),
      (t[11] = l.value.conversationId),
      (t[12] = l.value.routeKind),
      (t[13] = o.pluginId),
      (t[14] = o.server),
      (t[15] = o.tool.name),
      (t[16] = C),
      (t[17] = w));
  } else ((C = t[16]), (w = t[17]));
  let T = w,
    E;
  t[25] === n
    ? (E = t[26])
    : ((E = O(`h-full min-h-0`, n)), (t[25] = n), (t[26] = E));
  let D;
  t[27] === C
    ? (D = t[28])
    : ((D = (0, J.jsx)(bn, { isInlineExpanded: !0, mcpAppId: C })),
      (t[27] = C),
      (t[28] = D));
  let k = y?.csp ?? null,
    A = d ?? h,
    j = y?.html ?? null,
    M = f || g,
    N;
  t[29] !== o.resourceUri || t[30] !== o.tool.name
    ? ((N = { originResourceUri: o.resourceUri, originTool: o.tool.name }),
      (t[29] = o.resourceUri),
      (t[30] = o.tool.name),
      (t[31] = N))
    : (N = t[31]);
  let F = y?.prefersBorder ?? !1,
    I;
  t[32] === o.server
    ? (I = t[33])
    : ((I = { kind: `mcp_server`, server: o.server }),
      (t[32] = o.server),
      (t[33] = I));
  let ee = m ?? null,
    z = y?.widgetDomain ?? null,
    B;
  t[34] !== T ||
  t[35] !== C ||
  t[36] !== x ||
  t[37] !== M ||
  t[38] !== N ||
  t[39] !== F ||
  t[40] !== I ||
  t[41] !== ee ||
  t[42] !== z ||
  t[43] !== k ||
  t[44] !== A ||
  t[45] !== j ||
  t[46] !== s ||
  t[47] !== o.hostId ||
  t[48] !== o.server ||
  t[49] !== o.title
    ? ((B = (0, J.jsx)(xn, {
        conversationId: T,
        csp: k,
        error: A,
        fullSurface: !0,
        hostId: o.hostId,
        hostedInThreadScrollLayout: !1,
        html: j,
        isLoading: M,
        mcpAppId: C,
        mcpAppScope: N,
        mcpServerStatuses: void 0,
        prefersBorder: F,
        overrideMcpRequest: x,
        sandboxOriginScope: I,
        server: o.server,
        sidePanelConnectorIcon: null,
        sidePanelTitle: o.title,
        title: o.title,
        toolArguments: s,
        toolResult: ee,
        widgetDomain: z,
      })),
      (t[34] = T),
      (t[35] = C),
      (t[36] = x),
      (t[37] = M),
      (t[38] = N),
      (t[39] = F),
      (t[40] = I),
      (t[41] = ee),
      (t[42] = z),
      (t[43] = k),
      (t[44] = A),
      (t[45] = j),
      (t[46] = s),
      (t[47] = o.hostId),
      (t[48] = o.server),
      (t[49] = o.title),
      (t[50] = B))
    : (B = t[50]);
  let V;
  t[51] !== v.kind ||
  t[52] !== v.source ||
  t[53] !== y?.heightHint ||
  t[54] !== y?.html ||
  t[55] !== g ||
  t[56] !== f ||
  t[57] !== C ||
  t[58] !== h ||
  t[59] !== d
    ? ((V = (0, J.jsx)(Sn, {
        error: d ?? h,
        fullSurface: !0,
        heightHint: y?.heightHint ?? null,
        html: y?.html ?? null,
        isLoading: f || g,
        mcpAppId: C,
      })),
      (t[51] = v.kind),
      (t[52] = v.source),
      (t[53] = y?.heightHint),
      (t[54] = y?.html),
      (t[55] = g),
      (t[56] = f),
      (t[57] = C),
      (t[58] = h),
      (t[59] = d),
      (t[60] = V))
    : (V = t[60]);
  let H;
  t[61] === C
    ? (H = t[62])
    : ((H = (0, J.jsx)(Cn, { mcpAppId: C })), (t[61] = C), (t[62] = H));
  let U;
  return (
    t[63] !== B || t[64] !== V || t[65] !== H || t[66] !== E || t[67] !== D
      ? ((U = (0, J.jsxs)(`div`, {
          "data-mcp-app-portal-target": `true`,
          className: E,
          children: [D, B, V, H],
        })),
        (t[63] = B),
        (t[64] = V),
        (t[65] = H),
        (t[66] = E),
        (t[67] = D),
        (t[68] = U))
      : (U = t[68]),
    U
  );
}
export {
  qe as _,
  Cn as a,
  st as c,
  ht as d,
  Qe as f,
  Je as g,
  Ye as h,
  Sn as i,
  ct as l,
  Ze as m,
  xn as n,
  lt as o,
  $e as p,
  bn as r,
  at as s,
  yr as t,
  it as u,
};
//# sourceMappingURL=mcp-capability-view-frame-BVZUfJnz.js.map
