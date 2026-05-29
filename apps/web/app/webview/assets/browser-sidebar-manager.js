import { $r as e, Pr as t, Yr as n } from "./src-C.js";
import { C as r, y as i } from "./setting-storage.js";
var a = `responsive`,
  o = 4096,
  s = 4096,
  c = `var(--gray-700)`,
  l = { id: a, width: 390, height: 844 },
  u = 20,
  d = [
    l,
    { id: `4k`, width: 2560, height: 1440 },
    { id: `laptop-l`, width: 1440, height: 900 },
    { id: `laptop`, width: 1024, height: 768 },
    { id: `surface-pro-7`, width: 912, height: 1368 },
    { id: `ipad-air`, width: 820, height: 1180 },
    { id: `ipad-mini`, width: 768, height: 1024 },
    { id: `surface-duo`, width: 540, height: 720 },
    { id: `iphone-15-pro-max`, width: 430, height: 932 },
    { id: `pixel-8`, width: 412, height: 915 },
    { id: `iphone-15-pro`, width: 393, height: 852 },
    { id: `samsung-galaxy-s24-ultra`, width: 384, height: 824 },
    { id: `iphone-se`, width: 375, height: 667 },
  ],
  f = { isEnabled: !1, presetId: l.id, width: l.width, height: l.height };
function p(e, t) {
  if (!t.isEnabled || e == null) return null;
  let n = _(e),
    r = v(n),
    i = ee(r, t),
    a = Math.round(t.width * i),
    o = Math.round(t.height * i),
    s = {
      x: Math.round(n.x + Math.max(u, (n.width - a) / 2)),
      y: n.y,
      width: a,
      height: o,
    };
  return {
    fitHeight: r.height,
    fitWidth: r.width,
    scale: i,
    stageBounds: n,
    visualBounds: s,
    webviewBounds: { x: s.x, y: s.y, width: t.width, height: t.height },
  };
}
function m(e) {
  if (e == null) return { width: f.width, height: f.height };
  let t = v(_(e));
  return { width: S(t.width), height: C(t.height) };
}
function h(e) {
  return e + u * 2;
}
function g({ fitHeight: e, height: t, width: n }) {
  return h(n * Math.min(1, e / t));
}
function _(e) {
  return {
    x: e.x,
    y: e.y + 34,
    width: e.width,
    height: Math.max(0, e.height - 34),
  };
}
function ee(e, t) {
  return Math.min(1, e.width / t.width, e.height / t.height);
}
function v(e) {
  return {
    width: Math.max(0, e.width - u * 2),
    height: Math.max(0, e.height - u),
  };
}
function y({
  drag: e,
  fitHeight: t,
  fitWidth: n,
  pointerX: r,
  pointerY: i,
  scale: a,
}) {
  let o =
      e.edge === `bottom` ||
      e.edge === `bottom-left` ||
      e.edge === `bottom-right`,
    s = e.edge !== `bottom`,
    c = e.edge === `left` || e.edge === `bottom-left` ? -1 : 1;
  return {
    width: s
      ? S(
          b({
            fitSize: n,
            rawSize: e.startWidth + ((r - e.startPointerX) * c * 2) / a,
            scale: a,
          }),
        )
      : e.startWidth,
    height: o
      ? C(
          b({
            fitSize: t,
            rawSize: e.startHeight + (i - e.startPointerY) / a,
            scale: a,
          }),
        )
      : e.startHeight,
  };
}
function te({ height: e, width: t }) {
  return { width: S(e), height: C(t) };
}
function ne(e) {
  let t = x(e.presetId),
    n =
      t != null &&
      ((t.width === e.width && t.height === e.height) ||
        (t.width === e.height && t.height === e.width));
  return { ...e, ...te(e), presetId: n ? e.presetId : a };
}
function b({ fitSize: e, rawSize: t, scale: n }) {
  return e <= 0 ? t : Math.min(t, e / n);
}
function x(e) {
  return d.find((t) => t.id === e) ?? null;
}
function S(e) {
  return w(e, 240, o);
}
function C(e) {
  return w(e, 160, s);
}
function w(e, t, n) {
  return Math.min(n, Math.max(t, Math.round(e)));
}
var re = `about:blank`,
  T = `data-browser-sidebar-conversation-id`,
  E = `data-browser-sidebar-browser-tab-id`,
  D = `data-browser-sidebar-webview-host-root`,
  O = `data-browser-sidebar-cursor-overlay-host`,
  k = `owl-webcontents-adoption-lease`,
  A = `owl-webcontents-adopted-web-contents-id`,
  ie = `persist:codex-browser-app-route:`,
  j = `var(--color-token-editor-background, var(--color-token-main-surface-primary, #fff))`,
  M = { x: 0, y: 0, width: 1280, height: 720 },
  N = class {
    browserTabId;
    conversationId;
    container;
    cursorOverlayHost;
    webview;
    webviewRef = null;
    browserUseCaptureSurfaceSize = null;
    isDisposed = !1;
    state = {
      bounds: null,
      isVisible: !1,
      mountGeneration: 0,
      scale: 1,
      shouldPaint: !0,
      windowZoom: 1,
    };
    lastVisibleBounds = null;
    constructor({
      browserTabId: e,
      conversationId: t,
      elementKey: n,
      partition: r,
      adoptionLease: i,
      adoptedWebContentsId: a,
    }) {
      let o = document.createElement(`div`),
        s = document.createElement(`div`),
        c = document.createElement(`webview`);
      ((this.browserTabId = e),
        (this.conversationId = t),
        (this.container = o),
        (this.cursorOverlayHost = s),
        (this.webview = c),
        (o.dataset.browserSidebarWebview = n),
        s.setAttribute(O, n),
        (c.className = `h-full w-full`),
        (c.style.backgroundColor = j),
        c.setAttribute(T, t),
        c.setAttribute(E, e),
        c.setAttribute(`partition`, r),
        this.setAdoptionAttributes(i ?? null, a ?? null),
        c.setAttribute(`src`, re),
        o.append(c, s));
    }
    detach(e, t) {
      let n = this.webview;
      if (this.isDisposed || n == null) {
        L(e, null, n ?? void 0);
        return;
      }
      (t != null && t !== this.state.mountGeneration) ||
        ((this.webviewRef = e),
        (this.state = {
          bounds: this.state.bounds,
          isVisible: !1,
          mountGeneration: this.state.mountGeneration,
          scale: this.state.scale,
          shouldPaint: this.state.shouldPaint,
          windowZoom: this.state.windowZoom,
        }),
        (n.style.backgroundColor = j),
        L(e, null, n),
        this.detachFromDom(),
        r.info(`IAB_LIFECYCLE renderer backgrounded browser sidebar webview`, {
          safe: {
            browserTabId: this.browserTabId,
            conversationId: this.conversationId,
          },
        }));
    }
    sync(e, t) {
      let n = this.webview;
      if (this.isDisposed || n == null) {
        L(t, null, n ?? void 0);
        return;
      }
      ((this.webviewRef = t), (this.state = e), (n.style.backgroundColor = j));
      let r = this.syncContainerStyle() === `visible`;
      (L(t, r ? n : null, n), r && se(n) && n.focus());
    }
    get disposed() {
      return this.isDisposed;
    }
    getCursorOverlayHost() {
      return this.cursorOverlayHost;
    }
    shouldDestroyForHostRequest({ mountGeneration: e, reason: t }) {
      return (
        t === `closed` ||
        (this.state.mountGeneration === e && !this.state.isVisible)
      );
    }
    setBrowserUseCaptureSurfaceSize(e) {
      ((this.browserUseCaptureSurfaceSize = e),
        !(this.webviewRef == null && this.container?.isConnected !== !0) &&
          this.syncContainerStyle());
    }
    setBrowserUseActive(e) {}
    setBrowserUseViewportSize(e) {}
    setAdoptionAttributes(e, t) {
      if (this.webview != null) {
        if (e == null || t == null) {
          (this.webview.removeAttribute(k), this.webview.removeAttribute(A));
          return;
        }
        (this.webview.setAttribute(k, e),
          this.webview.setAttribute(A, t.toString()));
      }
    }
    resync() {
      let e = this.container;
      e == null || !e.isConnected || this.syncContainerStyle();
    }
    transfer({
      browserTabId: e,
      conversationId: t,
      elementKey: n,
      partition: r,
    }) {
      let i = this.container,
        a = this.webview;
      i == null ||
        a == null ||
        ((i.dataset.browserSidebarWebview = n),
        this.cursorOverlayHost?.setAttribute(O, n),
        a.setAttribute(T, t),
        a.setAttribute(E, e),
        a.setAttribute(`partition`, r),
        (this.browserTabId = e),
        (this.conversationId = t));
    }
    dispose() {
      if (this.isDisposed) return;
      ((this.isDisposed = !0),
        r.info(`IAB_LIFECYCLE renderer disposed browser sidebar webview`, {
          safe: {
            browserTabId: this.browserTabId,
            conversationId: this.conversationId,
          },
        }));
      let e = this.webview;
      (this.detachFromDom(),
        this.webviewRef != null && L(this.webviewRef, null, e ?? void 0),
        le(e),
        this.container?.replaceChildren(),
        (this.container = null),
        (this.cursorOverlayHost = null),
        (this.webview = null),
        (this.webviewRef = null));
    }
    syncContainerStyle() {
      let e = this.container,
        t = this.cursorOverlayHost,
        n = this.webview;
      if (e == null || t == null || n == null) return `hidden`;
      let r = this.state.shouldBootstrap === !0,
        i = ae({
          bounds: this.state.bounds,
          isVisible: this.state.isVisible || r,
          lastVisibleBounds: this.lastVisibleBounds,
        });
      return i != null && this.browserUseCaptureSurfaceSize == null
        ? ((this.lastVisibleBounds = i),
          this.attachToDom(),
          r || this.state.shouldPaint === !1
            ? (I(e, n, t, i, this.state.scale, this.state.windowZoom ?? 1),
              `bootstrap`)
            : (F(e, n, t, i, this.state.scale, this.state.windowZoom ?? 1),
              `visible`))
        : (this.parkInDom(), `hidden`);
    }
    attachToDom() {
      let e = this.container;
      e != null && !e.isConnected && ce().append(e);
    }
    parkInDom() {
      let e = this.container,
        t = this.cursorOverlayHost,
        n = this.webview;
      if (e == null || t == null || n == null) return;
      let r = this.lastVisibleBounds ?? M;
      (this.attachToDom(),
        I(e, n, t, r, this.state.scale, this.state.windowZoom ?? 1));
    }
    detachFromDom() {
      this.container?.remove();
    }
  };
function P(e) {
  return `${ie}${encodeURIComponent(e)}`;
}
function ae({ bounds: e, isVisible: t, lastVisibleBounds: n }) {
  return t ? (e != null && e.width > 0 && e.height > 0 ? e : (n ?? M)) : null;
}
function F(e, t, n, r, i, a) {
  let o = i * a;
  (Object.assign(e.style, {
    contain: ``,
    height: `${Math.round(r.height * o)}px`,
    left: `${r.x * a}px`,
    opacity: `1`,
    overflow: `hidden`,
    pointerEvents: `auto`,
    position: `fixed`,
    top: `${r.y * a}px`,
    transform: ``,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: ``,
    width: `${Math.round(r.width * o)}px`,
    zIndex: ``,
  }),
    Object.assign(t.style, {
      height: `${r.height}px`,
      transform: o === 1 ? `` : `scale(${o})`,
      transformOrigin: `top left`,
      willChange: o === 1 ? `` : `transform`,
      width: `${r.width}px`,
    }),
    oe(n, r, o));
}
function I(e, t, n, r, i, a) {
  (F(e, t, n, r, i, a),
    Object.assign(e.style, { pointerEvents: `none`, visibility: `hidden` }));
}
function oe(e, t, n = 1) {
  Object.assign(e.style, {
    height: `${t.height}px`,
    left: `0`,
    overflow: `hidden`,
    pointerEvents: `none`,
    position: `absolute`,
    top: `0`,
    transform: n === 1 ? `` : `scale(${n})`,
    transformOrigin: `top left`,
    willChange: n === 1 ? `` : `transform`,
    width: `${t.width}px`,
    zIndex: `1`,
  });
}
function se(e) {
  let t = document.activeElement;
  return (
    t == null ||
    t === document.body ||
    t === document.documentElement ||
    (t.tagName === `WEBVIEW` && t !== e)
  );
}
function ce() {
  let e = document.querySelector(`[${D}]`);
  if (e != null) return e;
  let t = document.createElement(`div`);
  return (
    t.setAttribute(D, ``),
    Object.assign(t.style, {
      inset: `0`,
      overflow: `visible`,
      pointerEvents: `none`,
      position: `fixed`,
    }),
    document.body.append(t),
    t
  );
}
function L(e, t, n) {
  (n != null && e.current === n && (e.current = null),
    t != null && (e.current = t));
}
function le(e) {
  e == null ||
    !(`destroy` in e) ||
    typeof e.destroy != `function` ||
    e.destroy();
}
var ue = `about:blank`,
  R = `data-browser-sidebar-conversation-id`,
  z = `data-browser-sidebar-browser-tab-id`,
  de = `data-browser-sidebar-legacy-webview`,
  B = `data-browser-sidebar-cursor-overlay-host`,
  V = {
    contain: ``,
    height: `1px`,
    left: `-10000px`,
    opacity: `0`,
    overflow: ``,
    pointerEvents: `none`,
    position: `fixed`,
    top: `0`,
    transform: ``,
    transformOrigin: ``,
    visibility: `hidden`,
    willChange: ``,
    width: `1px`,
    zIndex: ``,
  },
  fe = `0.001`,
  pe = `2147483647`,
  H = `#fff`,
  U = { x: 0, y: 0, width: 1280, height: 720 },
  W = class {
    isLegacy = !0;
    browserTabId;
    conversationId;
    container = document.createElement(`div`);
    cursorOverlayHost = document.createElement(`div`);
    webview = document.createElement(`webview`);
    browserUseCaptureSurfaceSize;
    browserUseViewportSize;
    hasBrowserUsePaintHost;
    isBrowserUseActive;
    isAttached = !1;
    state = { bounds: null, isVisible: !1, scale: 1, windowZoom: 1 };
    lastVisibleBounds = null;
    constructor({
      browserTabId: e,
      browserUseCaptureSurfaceSize: t,
      browserUseViewportSize: n,
      conversationId: r,
      elementKey: i,
      initialUrl: a,
      isBrowserUseActive: o,
      partition: s,
    }) {
      ((this.browserTabId = e),
        (this.conversationId = r),
        (this.browserUseCaptureSurfaceSize = t),
        (this.browserUseViewportSize = n),
        (this.hasBrowserUsePaintHost = o || n != null),
        (this.isBrowserUseActive = o),
        (this.container.dataset.browserSidebarWebview = i),
        this.cursorOverlayHost.setAttribute(B, i),
        G(
          this.container,
          this.webview,
          this.cursorOverlayHost,
          null,
          n,
          this.isBrowserUseActive || n != null,
        ),
        (this.webview.className = `h-full w-full`),
        (this.webview.style.backgroundColor = H),
        this.webview.setAttribute(R, r),
        this.webview.setAttribute(z, e),
        this.webview.setAttribute(de, ``),
        this.webview.setAttribute(`partition`, s),
        this.webview.setAttribute(`src`, a.length === 0 ? ue : a),
        this.container.append(this.webview, this.cursorOverlayHost),
        document.body.append(this.container));
    }
    getCursorOverlayHost() {
      return this.cursorOverlayHost;
    }
    detach(e) {
      ((this.isAttached = !1),
        (this.state = {
          bounds: this.state.bounds,
          isVisible: !1,
          scale: this.state.scale,
          windowZoom: this.state.windowZoom,
        }),
        (this.webview.style.backgroundColor = H),
        X(e, null, this.webview),
        this.syncContainerStyle(),
        r.info(
          `IAB_LIFECYCLE renderer detached legacy browser sidebar webview`,
          {
            safe: {
              browserTabId: this.browserTabId,
              conversationId: this.conversationId,
            },
          },
        ));
    }
    sync(e, t) {
      ((this.isAttached = !0),
        (this.state = e),
        (this.webview.style.backgroundColor = H),
        X(t, this.webview),
        this.syncContainerStyle());
    }
    shouldDestroyForHostRequest({ reason: e }) {
      return e === `closed`;
    }
    setBrowserUseActive(e) {
      (e && (this.hasBrowserUsePaintHost = !0),
        (this.isBrowserUseActive = e),
        this.syncContainerStyle());
    }
    setBrowserUseViewportSize(e) {
      ((this.browserUseViewportSize = e),
        e != null && (this.hasBrowserUsePaintHost = !0),
        this.syncContainerStyle());
    }
    setBrowserUseCaptureSurfaceSize(e) {
      ((this.browserUseCaptureSurfaceSize = e), this.syncContainerStyle());
    }
    resync() {
      this.isAttached && this.syncContainerStyle();
    }
    transfer({
      browserTabId: e,
      conversationId: t,
      elementKey: n,
      partition: r,
    }) {
      ((this.container.dataset.browserSidebarWebview = n),
        this.cursorOverlayHost.setAttribute(B, n),
        this.webview.setAttribute(R, t),
        this.webview.setAttribute(z, e),
        this.webview.setAttribute(`partition`, r),
        (this.browserTabId = e),
        (this.conversationId = t));
    }
    dispose() {
      (r.info(
        `IAB_LIFECYCLE renderer disposed legacy browser sidebar webview`,
        {
          safe: {
            browserTabId: this.browserTabId,
            conversationId: this.conversationId,
          },
        },
      ),
        this.container.remove());
    }
    syncContainerStyle() {
      let e = me({
        bounds: this.state.bounds,
        browserUseCaptureSurfaceSize: this.browserUseCaptureSurfaceSize,
        browserUseViewportSize: this.browserUseViewportSize,
        hasBrowserUsePaintHost: this.hasBrowserUsePaintHost,
        isVisible: this.state.isVisible,
        lastVisibleBounds: this.lastVisibleBounds,
      });
      if (e == null) {
        G(
          this.container,
          this.webview,
          this.cursorOverlayHost,
          this.lastVisibleBounds,
          this.browserUseViewportSize,
          this.isBrowserUseActive || this.browserUseViewportSize != null,
        );
        return;
      }
      if (this.browserUseCaptureSurfaceSize != null) {
        K(this.container, this.webview, this.cursorOverlayHost, e);
        return;
      }
      if (this.state.isVisible) {
        ((this.lastVisibleBounds = e),
          he(
            this.container,
            this.webview,
            this.cursorOverlayHost,
            e,
            this.state.scale,
            this.state.windowZoom ?? 1,
          ));
        return;
      }
      K(this.container, this.webview, this.cursorOverlayHost, e);
    }
  };
function me({
  bounds: e,
  browserUseCaptureSurfaceSize: t,
  browserUseViewportSize: n,
  hasBrowserUsePaintHost: r,
  isVisible: i,
  lastVisibleBounds: a,
}) {
  return t == null
    ? i && e != null && e.width > 0 && e.height > 0
      ? e
      : i && a != null
        ? a
        : !i && r
          ? n == null
            ? (a ?? U)
            : Y(n)
          : null
    : Y(t);
}
function he(e, t, n, r, i, a) {
  let o = i * a;
  (Object.assign(e.style, {
    contain: ``,
    height: `${Math.round(r.height * o)}px`,
    left: `${r.x * a}px`,
    opacity: `1`,
    overflow: `hidden`,
    pointerEvents: ``,
    position: `fixed`,
    top: `${r.y * a}px`,
    transform: ``,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: ``,
    width: `${Math.round(r.width * o)}px`,
    zIndex: ``,
  }),
    Object.assign(t.style, {
      height: `${r.height}px`,
      transform: o === 1 ? `` : `scale(${o})`,
      transformOrigin: `top left`,
      willChange: o === 1 ? `` : `transform`,
      width: `${r.width}px`,
    }),
    J(n, r, o));
}
function G(e, t, n, r, i, a) {
  if (a) {
    K(e, t, n, r ?? (i == null ? U : Y(i)));
    return;
  }
  (Object.assign(e.style, V), q(t), J(n, { width: 1, height: 1 }));
}
function K(e, t, n, r) {
  (Object.assign(e.style, {
    contain: `layout paint size style`,
    height: `${r.height}px`,
    left: `${U.x}px`,
    opacity: fe,
    overflow: ``,
    pointerEvents: `none`,
    position: `fixed`,
    top: `${U.y}px`,
    transform: `translate3d(0, 0, 0)`,
    transformOrigin: ``,
    visibility: `visible`,
    willChange: `transform`,
    width: `${r.width}px`,
    zIndex: pe,
  }),
    q(t),
    J(n, r));
}
function q(e) {
  Object.assign(e.style, {
    height: ``,
    transform: ``,
    transformOrigin: ``,
    willChange: ``,
    width: ``,
  });
}
function J(e, t, n = 1) {
  Object.assign(e.style, {
    height: `${t.height}px`,
    left: `0`,
    overflow: `hidden`,
    pointerEvents: `none`,
    position: `absolute`,
    top: `0`,
    transform: n === 1 ? `` : `scale(${n})`,
    transformOrigin: `top left`,
    willChange: n === 1 ? `` : `transform`,
    width: `${t.width}px`,
    zIndex: `1`,
  });
}
function Y(e) {
  return { x: U.x, y: U.y, width: e.width, height: e.height };
}
function X(e, t, n) {
  (n != null && e.current === n && (e.current = null),
    t != null && (e.current = t));
}
var ge = { responsiveViewportSize: null, toolbarState: f },
  _e = new Set([`new-conversation`, `panel-new-conversation`]),
  ve = new (class {
    listeners = new Set();
    browserUseCursorStates = new Map();
    snapshots = new Map();
    localServersStates = new Map();
    browserUseActiveStates = new Set();
    browserUseActiveTabs = [];
    browserUseViewportSizes = new Map();
    browserUseCaptureSurfaceSizes = new Map();
    deviceToolbarTabStates = new Map();
    webviews = new Map();
    transferredWebviewKeys = new Set();
    pendingElectronTransfers = new Map();
    mountStates = new Map();
    constructor() {
      (i.subscribe(`browser-sidebar-state`, (e) => {
        this.setSnapshot(
          e.conversationId,
          $(e.conversationId, e.browserTabId),
          e.snapshot,
        );
      }),
        i.subscribe(`browser-sidebar-local-servers`, (e) => {
          this.setLocalServersState(e.conversationId, e.state);
        }),
        i.subscribe(`browser-sidebar-browser-use-state`, (e) => {
          this.setBrowserUseActive(
            e.conversationId,
            $(e.conversationId, e.browserTabId),
            e.isActive,
          );
        }),
        i.subscribe(`browser-sidebar-browser-use-viewport`, (e) => {
          this.setBrowserUseViewportSize(
            e.conversationId,
            $(e.conversationId, e.browserTabId),
            e.viewportSize,
          );
        }),
        i.subscribe(`browser-sidebar-browser-use-capture-surface`, (e) => {
          this.setBrowserUseCaptureSurfaceSize(
            e.conversationId,
            $(e.conversationId, e.browserTabId),
            e.surfaceSize,
          );
        }),
        i.subscribe(`browser-sidebar-browser-use-cursor-state`, (e) => {
          this.setBrowserUseCursorState(
            e.conversationId,
            $(e.conversationId, e.browserTabId),
            e,
          );
        }),
        i.subscribe(`browser-sidebar-destroy-webview`, (e) => {
          this.destroyWebviewAtHostRequest(
            e.conversationId,
            e.browserTabId,
            e.mountGeneration,
            e.reason,
            e.teardownId,
          );
        }),
        typeof window < `u` &&
          window.addEventListener(`focus`, () => {
            this.resyncAttachedWebviews();
          }),
        typeof document < `u` &&
          document.addEventListener(`visibilitychange`, () => {
            document.visibilityState === `visible` &&
              this.resyncAttachedWebviews();
          }));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        () => {
          this.listeners.delete(e);
        }
      );
    }
    getSnapshot(e, t = $(e, void 0)) {
      return this.snapshots.get(Z(e, t)) ?? null;
    }
    hasLegacyWebview(e, t = $(e, void 0)) {
      return this.webviews.get(Z(e, t)) instanceof W;
    }
    getBrowserUseCursorState(e, t = $(e, void 0)) {
      return this.browserUseCursorStates.get(Z(e, t)) ?? null;
    }
    getLocalServersState(e) {
      return this.localServersStates.get(e) ?? null;
    }
    isBrowserUseActive(e, t = $(e, void 0)) {
      return this.browserUseActiveStates.has(Z(e, t));
    }
    getBrowserUseActiveBrowserTabId(e) {
      return this.getFirstConversationBrowserTabId(
        e,
        this.browserUseActiveStates,
      );
    }
    getBrowserUseActiveTabs() {
      return this.browserUseActiveTabs;
    }
    getBrowserUseSummaryBrowserTabId(e) {
      return (
        this.getBrowserUseActiveBrowserTabId(e) ??
        this.getFirstConversationBrowserTabId(e, this.snapshots.keys())
      );
    }
    getDeviceToolbarTabState(e, t = $(e, void 0)) {
      return this.deviceToolbarTabStates.get(Z(e, t)) ?? ge;
    }
    getMountGeneration(e, t = $(e, void 0)) {
      return this.mountStates.get(Z(e, t))?.generation ?? 0;
    }
    claimMountGeneration(e, t = $(e, void 0)) {
      let n = Z(e, t),
        r = this.mountStates.get(n) ?? { generation: 0, isClaimed: !1 };
      return (
        r.isClaimed ||
          ((r.generation += 1), (r.isClaimed = !0), this.mountStates.set(n, r)),
        r.generation
      );
    }
    releaseMountGeneration(e, t = $(e, void 0)) {
      let n = Z(e, t),
        r = this.mountStates.get(n) ?? { generation: 0, isClaimed: !1 };
      return ((r.isClaimed = !1), this.mountStates.set(n, r), r.generation);
    }
    setDeviceToolbarTabState(e, t, n) {
      let r = typeof t == `function` ? $(e, void 0) : t,
        i = typeof t == `function` ? t : n;
      if (i == null) return;
      let a = Z(e, r);
      (this.deviceToolbarTabStates.set(
        a,
        i(this.getDeviceToolbarTabState(e, r)),
      ),
        this.emitChange());
    }
    setSnapshot(e, n, r) {
      let i = typeof n == `string` ? n : $(e, void 0),
        a = typeof n == `string` ? r : n;
      if (a == null) return;
      let o = Z(e, i);
      (this.snapshots.set(o, a),
        a.tabType !== t.WEB &&
          (this.webviews.get(o) ?? null) instanceof W &&
          this.disposeWebviewHost(e, i, o, a.tabType),
        this.emitChange());
    }
    removeTab(e, t) {
      let n = Z(e, t);
      (this.pendingElectronTransfers.delete(n),
        this.snapshots.delete(n),
        this.browserUseActiveStates.delete(n) &&
          this.refreshBrowserUseActiveTabs(),
        this.browserUseCursorStates.delete(n),
        this.browserUseCaptureSurfaceSizes.delete(n),
        this.browserUseViewportSizes.delete(n),
        this.deviceToolbarTabStates.delete(n),
        this.mountStates.delete(n),
        this.emitChange());
    }
    setLocalServersState(e, t) {
      (this.localServersStates.set(e, t), this.emitChange());
    }
    removeLocalServerRoute(e, t, n) {
      let r = this.localServersStates.get(e);
      if (r == null) return;
      let i = (e) =>
        e.url === t ? { ...e, routes: e.routes.filter((e) => e.url !== n) } : e;
      (this.localServersStates.set(e, {
        ...r,
        hiddenServers: r.hiddenServers.map(i),
        servers: r.servers.map(i),
      }),
        this.emitChange());
    }
    getWebview(e, ...t) {
      let n, i, a;
      if (be(t)) {
        let [e, r, o] = t;
        ((n = e), (i = r), (a = o));
      } else ((n = $(e, void 0)), (i = t[0]), (a = t[1]));
      let o = Z(e, n),
        s = this.webviews.get(o);
      if (s instanceof N)
        return (
          a != null &&
            s.setAdoptionAttributes(
              a.adoptionLease ?? null,
              a.adoptedWebContentsId ?? null,
            ),
          s
        );
      s != null && this.disposeWebviewHost(e, n, o, `web`);
      let c = new N({
        browserTabId: n,
        conversationId: e,
        elementKey: Q(e, n),
        partition: P(o),
        adoptionLease: a?.adoptionLease ?? null,
        adoptedWebContentsId: a?.adoptedWebContentsId ?? null,
      });
      (c.setBrowserUseCaptureSurfaceSize(
        this.browserUseCaptureSurfaceSizes.get(o) ?? null,
      ),
        this.webviews.set(o, c));
      let l = a?.hostKind ?? `panel`;
      return (
        this.notifyWebviewHostCreated(e, n, l),
        r.info(`IAB_LIFECYCLE renderer created browser sidebar webview`, {
          safe: { browserTabId: n, conversationId: e, hostKind: l },
          sensitive: { initialUrl: i },
        }),
        this.emitChange(),
        c
      );
    }
    getLegacyWebview(e, t, n, i) {
      let a = Z(e, t),
        o = this.webviews.get(a);
      if (o instanceof W) return o;
      o != null && this.disposeWebviewHost(e, t, a, `web`);
      let s = new W({
        browserTabId: t,
        browserUseCaptureSurfaceSize:
          this.browserUseCaptureSurfaceSizes.get(a) ?? null,
        browserUseViewportSize: this.browserUseViewportSizes.get(a) ?? null,
        conversationId: e,
        elementKey: Q(e, t),
        initialUrl: n,
        isBrowserUseActive: this.browserUseActiveStates.has(a),
        partition: P(a),
      });
      this.webviews.set(a, s);
      let c = i?.hostKind ?? `panel`;
      return (
        this.notifyWebviewHostCreated(e, t, c),
        r.info(
          `IAB_LIFECYCLE renderer created legacy browser sidebar webview`,
          {
            safe: { browserTabId: t, conversationId: e, hostKind: c },
            sensitive: { initialUrl: n },
          },
        ),
        this.emitChange(),
        s
      );
    }
    notifyWebviewHostCreated(e, t, n) {
      i.dispatchMessage(`browser-sidebar-webview-host-created`, {
        browserTabId: t,
        conversationId: e,
        hostKind: n,
      });
    }
    getCursorOverlayHost(e, t = $(e, void 0)) {
      return this.webviews.get(Z(e, t))?.getCursorOverlayHost() ?? null;
    }
    setBrowserUseActive(e, ...t) {
      let n = typeof t[0] == `boolean` ? $(e, void 0) : t[0],
        i = typeof t[0] == `boolean` ? t[0] : t[1],
        a = Z(e, n),
        o = this.browserUseActiveStates.has(a),
        s = this.browserUseCursorStates.get(a) ?? null;
      (i
        ? (this.browserUseActiveStates.add(a),
          o || this.browserUseCursorStates.delete(a))
        : (this.browserUseActiveStates.delete(a),
          s != null &&
            this.browserUseCursorStates.set(a, {
              visible: !1,
              x: s.x,
              y: s.y,
            })),
        o !== i && this.refreshBrowserUseActiveTabs(),
        this.webviews.get(a)?.setBrowserUseActive?.(i),
        r.info(`IAB_LIFECYCLE renderer synced browser use webview state`, {
          safe: { browserTabId: n, conversationId: e, isBrowserUseActive: i },
          sensitive: {},
        }),
        (o !== i || s != null) && this.emitChange());
    }
    setBrowserUseViewportSize(e, ...t) {
      let n = t.length === 1 ? $(e, void 0) : t[0],
        r = t.length === 1 ? t[0] : t[1],
        i = Z(e, n),
        o = r == null ? null : { width: S(r.width), height: C(r.height) };
      (o == null
        ? this.browserUseViewportSizes.delete(i)
        : this.browserUseViewportSizes.set(i, o),
        this.webviews.get(i)?.setBrowserUseViewportSize?.(o),
        this.setDeviceToolbarTabState(e, n, (e) =>
          o == null
            ? { ...e, toolbarState: { ...e.toolbarState, isEnabled: !1 } }
            : {
                responsiveViewportSize: o,
                toolbarState: {
                  ...e.toolbarState,
                  ...o,
                  isEnabled: !0,
                  presetId: a,
                },
              },
        ));
    }
    setBrowserUseCaptureSurfaceSize(e, ...t) {
      let n = t.length === 1 ? $(e, void 0) : t[0],
        r = t.length === 1 ? t[0] : t[1],
        i = Z(e, n);
      (r == null
        ? this.browserUseCaptureSurfaceSizes.delete(i)
        : this.browserUseCaptureSurfaceSizes.set(i, r),
        this.webviews.get(i)?.setBrowserUseCaptureSurfaceSize(r));
    }
    setBrowserUseCursorState(e, ...t) {
      let n = t.length === 1 ? $(e, void 0) : t[0],
        r = t.length === 1 ? t[0] : t[1],
        i = Z(e, n),
        a = this.browserUseCursorStates.get(i);
      if (r.visible) {
        if (
          a?.visible === r.visible &&
          a.animateMovement === r.animateMovement &&
          a.moveSequence === r.moveSequence &&
          a.x === r.x &&
          a.y === r.y
        )
          return;
        (this.browserUseCursorStates.set(i, {
          ...(r.animateMovement == null
            ? {}
            : { animateMovement: r.animateMovement }),
          ...(r.moveSequence == null ? {} : { moveSequence: r.moveSequence }),
          visible: !0,
          x: r.x,
          y: r.y,
        }),
          this.emitChange());
        return;
      }
      a == null ||
        !a.visible ||
        (this.browserUseCursorStates.set(i, { visible: !1, x: a.x, y: a.y }),
        this.emitChange());
    }
    reassociateTabState(t, ...n) {
      let i = n.length === 1 ? $(t, void 0) : n[0],
        a = n.length === 1 ? n[0] : n[1],
        o = n.length === 1 ? $(a, void 0) : n[2],
        s = e(Z(t, i), Z(a, o)),
        c = Z(t, i),
        l = Z(a, o);
      if (c === l || this.transferredWebviewKeys.has(s)) return;
      let u = this.webviews.get(c) ?? null,
        d = this.webviews.get(l) ?? null,
        f = this.snapshots.get(c) ?? null;
      (this.pendingElectronTransfers.delete(c),
        this.pendingElectronTransfers.delete(l),
        this.transferredWebviewKeys.add(s),
        u != null &&
          (d == null
            ? (this.webviews.delete(c),
              u.transfer({
                browserTabId: o,
                conversationId: a,
                elementKey: Q(a, o),
                partition: P(l),
              }),
              this.webviews.set(l, u))
            : this.disposeWebviewHost(t, i, c, f?.tabType ?? `web`)));
      let p = this.browserUseViewportSizes.get(c) ?? null,
        m = this.mountStates.get(c) ?? null;
      (this.browserUseCaptureSurfaceSizes.delete(c),
        this.browserUseCursorStates.delete(c),
        this.browserUseActiveStates.delete(c) &&
          this.refreshBrowserUseActiveTabs(),
        this.browserUseViewportSizes.delete(c),
        this.mountStates.delete(c),
        this.pendingElectronTransfers.set(l, {
          sourceBrowserTabId: i,
          sourceConversationId: t,
        }),
        p != null && this.browserUseViewportSizes.set(l, p),
        m != null &&
          this.mountStates.set(l, { generation: m.generation, isClaimed: !1 }),
        u?.setBrowserUseCaptureSurfaceSize(null),
        r.info(`IAB_LIFECYCLE renderer reassociated browser sidebar tab`, {
          safe: {
            sourceBrowserTabId: i,
            sourceConversationId: t,
            targetBrowserTabId: o,
            targetConversationId: a,
          },
        }));
      let h = this.localServersStates.get(t),
        g = this.deviceToolbarTabStates.get(c);
      (f != null && (this.snapshots.delete(c), this.snapshots.set(l, f)),
        h != null && this.localServersStates.set(a, h),
        g != null &&
          (this.deviceToolbarTabStates.delete(c),
          this.deviceToolbarTabStates.set(l, g)),
        _e.has(t) && this.removeConversationTabs(t),
        this.emitChange());
    }
    consumePendingElectronTransfer(e, t = $(e, void 0)) {
      let n = Z(e, t),
        r = this.pendingElectronTransfers.get(n) ?? null;
      return r == null ? null : (this.pendingElectronTransfers.delete(n), r);
    }
    peekPendingElectronTransfer(e, t = $(e, void 0)) {
      return this.pendingElectronTransfers.get(Z(e, t)) ?? null;
    }
    disposeAll() {
      (this.snapshots.clear(),
        this.localServersStates.clear(),
        this.browserUseCursorStates.clear(),
        this.browserUseActiveStates.size > 0 &&
          (this.browserUseActiveStates.clear(),
          this.refreshBrowserUseActiveTabs()),
        this.browserUseCaptureSurfaceSizes.clear(),
        this.browserUseViewportSizes.clear(),
        this.deviceToolbarTabStates.clear(),
        this.pendingElectronTransfers.clear(),
        this.mountStates.clear());
      for (let e of this.webviews.values()) e.dispose();
      (this.webviews.clear(),
        this.transferredWebviewKeys.clear(),
        this.emitChange());
    }
    emitChange() {
      for (let e of this.listeners) e();
    }
    resyncAttachedWebviews() {
      for (let e of this.webviews.values()) e.resync();
    }
    disposeWebviewHost(e, t, n, i) {
      let a = this.webviews.get(n) ?? null;
      (this.webviews.delete(n),
        a != null &&
          (a.dispose(),
          r.info(`IAB_LIFECYCLE renderer removed browser sidebar webview`, {
            safe: { browserTabId: t, conversationId: e, tabType: i },
          })));
    }
    destroyWebviewAtHostRequest(e, t, n, r, a) {
      let o = Z(e, t);
      ((this.webviews.get(o) ?? null)?.shouldDestroyForHostRequest({
        mountGeneration: n,
        reason: r,
      }) !== !1 && this.disposeWebviewHost(e, t, o, r),
        r === `closed` && this.removeTab(e, t),
        i.dispatchMessage(`browser-sidebar-webview-destroyed`, {
          browserTabId: t,
          conversationId: e,
          reason: r,
          teardownId: a,
        }));
    }
    getFirstConversationBrowserTabId(e, t) {
      let r = `${e}\0`;
      for (let e of t) if (e.startsWith(r)) return n(e.slice(r.length));
      return null;
    }
    refreshBrowserUseActiveTabs() {
      this.browserUseActiveTabs = Array.from(this.browserUseActiveStates, ye);
    }
    removeConversationTabs(e) {
      let t = `${e}\0`;
      this.localServersStates.delete(e);
      for (let e of this.snapshots.keys())
        e.startsWith(t) && this.snapshots.delete(e);
      let n = !1;
      for (let e of this.browserUseActiveStates.keys())
        e.startsWith(t) && (this.browserUseActiveStates.delete(e), (n = !0));
      n && this.refreshBrowserUseActiveTabs();
      for (let e of this.browserUseCursorStates.keys())
        e.startsWith(t) && this.browserUseCursorStates.delete(e);
      for (let e of this.browserUseCaptureSurfaceSizes.keys())
        e.startsWith(t) && this.browserUseCaptureSurfaceSizes.delete(e);
      for (let e of this.browserUseViewportSizes.keys())
        e.startsWith(t) && this.browserUseViewportSizes.delete(e);
      for (let e of this.deviceToolbarTabStates.keys())
        e.startsWith(t) && this.deviceToolbarTabStates.delete(e);
      for (let e of this.pendingElectronTransfers.keys())
        e.startsWith(t) && this.pendingElectronTransfers.delete(e);
      for (let e of this.mountStates.keys())
        e.startsWith(t) && this.mountStates.delete(e);
      for (let [e, n] of this.webviews.entries())
        e.startsWith(t) && (this.webviews.delete(e), n.dispose());
    }
  })();
function Z(e, t) {
  return `${e}\0${t}`;
}
function ye(e) {
  let t = e.indexOf(`\0`);
  return { browserTabId: n(e.slice(t + 1)), conversationId: e.slice(0, t) };
}
function Q(e, t) {
  return t === $(e, void 0) ? e : Z(e, t);
}
function $(e, t) {
  return t ?? n(`${e}:legacy`);
}
function be(e) {
  return typeof e[1] == `string`;
}
export {
  o as a,
  S as c,
  p as d,
  y as f,
  s as i,
  g as l,
  ne as m,
  d as n,
  a as o,
  m as p,
  c as r,
  C as s,
  ve as t,
  x as u,
};
//# sourceMappingURL=browser-sidebar-manager.js.map
