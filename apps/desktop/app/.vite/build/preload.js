let e = require(`electron`);
var t = `codex_desktop:mcp-app-sandbox-host-message`,
  n = `codex_desktop:show-context-menu`,
  r = `codex_desktop:show-application-menu`,
  i = `codex_desktop:get-sentry-init-options`,
  a = `codex_desktop:get-build-flavor`,
  o = `codex_desktop:get-uses-owl-app-shell`,
  s = `codex_desktop:get-system-theme-variant`,
  c = `codex_desktop:get-fast-mode-rollout-metrics`,
  l = `codex_desktop:system-theme-variant-updated`,
  u = `codex_desktop:trigger-sentry-test`,
  d = `codex_desktop:connect-app-host`;
function f(e) {
  return `codex_desktop:worker:${e}:from-view`;
}
function p(e) {
  return `codex_desktop:worker:${e}:for-view`;
}
var m = `electron`,
  h = `codex_desktop:message-from-view`,
  g = `codex_desktop:message-for-view`,
  _ = e.ipcRenderer.sendSync(i),
  v = e.ipcRenderer.sendSync(a),
  y = e.ipcRenderer.sendSync(o) === !0,
  b = e.ipcRenderer.sendSync(`codex_desktop:get-shared-object-snapshot`) ?? {},
  x = e.ipcRenderer.sendSync(s),
  S = () => x,
  C = new Set();
e.ipcRenderer.on(l, (e, t) => {
  ((x = t),
    C.forEach((e) => {
      e();
    }));
});
function w(e, t) {
  if (t === void 0) {
    delete b[e];
    return;
  }
  b[e] = t;
}
// o3-code-patch-begin: web-access-settings
var o3CodeWebAccessChannels = {
    configChanged: `o3-code:web-access:config-changed`,
    getConfig: `o3-code:web-access:get-config`,
    getMobileAccessHelp: `o3-code:web-access:get-mobile-access-help`,
    getStatus: `o3-code:web-access:get-status`,
    openUrl: `o3-code:web-access:open-url`,
    patchConfig: `o3-code:web-access:patch-config`,
    resetPort: `o3-code:web-access:reset-port`,
    retry: `o3-code:web-access:retry`,
    statusChanged: `o3-code:web-access:status-changed`,
  },
  o3CodeSubscribe = (t, n) => {
    let r = (e, t) => n(t);
    return (
      e.ipcRenderer.on(t, r),
      () => {
        e.ipcRenderer.removeListener(t, r);
      }
    );
  },
  o3CodeWebAccessBridge = {
    getConfig: () => e.ipcRenderer.invoke(o3CodeWebAccessChannels.getConfig),
    getMobileAccessHelp: () =>
      e.ipcRenderer.invoke(o3CodeWebAccessChannels.getMobileAccessHelp),
    getStatus: () => e.ipcRenderer.invoke(o3CodeWebAccessChannels.getStatus),
    updateConfig: (t) =>
      e.ipcRenderer.invoke(o3CodeWebAccessChannels.patchConfig, t),
    retry: () => e.ipcRenderer.invoke(o3CodeWebAccessChannels.retry),
    resetPort: () => e.ipcRenderer.invoke(o3CodeWebAccessChannels.resetPort),
    openUrl: (t) => e.ipcRenderer.invoke(o3CodeWebAccessChannels.openUrl, t),
    subscribeConfig: (e) =>
      o3CodeSubscribe(o3CodeWebAccessChannels.configChanged, e),
    subscribeStatus: (e) =>
      o3CodeSubscribe(o3CodeWebAccessChannels.statusChanged, e),
  };
// o3-code-patch-end: web-access-settings
var T = new Map(),
  E = new Map(),
  D = {
    windowType: m,
    sendMessageFromView: async (t) => {
      (t.type === `shared-object-set` && w(t.key, t.value),
        await e.ipcRenderer.invoke(h, t));
    },
    getPathForFile: (t) => e.webUtils.getPathForFile(t) || null,
    sendWorkerMessageFromView: async (t, n) => {
      await e.ipcRenderer.invoke(f(t), n);
    },
    subscribeToWorkerMessages: (t, n) => {
      let r = T.get(t);
      r || ((r = new Set()), T.set(t, r));
      let i = E.get(t);
      return (
        i ||
          ((i = (e, n) => {
            let r = T.get(t);
            r &&
              r.forEach((e) => {
                e(n);
              });
          }),
          E.set(t, i),
          e.ipcRenderer.on(p(t), i)),
        r.add(n),
        () => {
          let r = T.get(t);
          if (!r || (r.delete(n), r.size > 0)) return;
          T.delete(t);
          let i = E.get(t);
          (i && e.ipcRenderer.removeListener(p(t), i), E.delete(t));
        }
      );
    },
    showContextMenu: async (t) => e.ipcRenderer.invoke(n, t),
    showApplicationMenu: async (t, n, i) => {
      await e.ipcRenderer.invoke(r, { menuId: t, x: n, y: i });
    },
    getFastModeRolloutMetrics: async (t) => e.ipcRenderer.invoke(c, t),
    getSharedObjectSnapshotValue: (e) => b[e],
    getSystemThemeVariant: S,
    subscribeToSystemThemeVariant: (e) => (
      C.add(e),
      () => {
        C.delete(e);
      }
    ),
    triggerSentryTestError: async () => {
      await e.ipcRenderer.invoke(u);
    },
    getSentryInitOptions: () => _,
    getAppSessionId: () => _.codexAppSessionId,
    getBuildFlavor: () => v,
    isIntelMacBuild: () =>
      process.platform === `darwin` && process.arch === `x64`,
    usesOwlAppShell: () => y,
    // o3-code-patch-begin: web-access-settings
    webAccess: o3CodeWebAccessBridge,
    // o3-code-patch-end: web-access-settings
  };
(e.ipcRenderer.on(g, (e, t) => {
  let n = t;
  (n.type === `shared-object-updated` && w(n.key, n.value),
    window.dispatchEvent(new MessageEvent(`message`, { data: t })));
}),
  e.ipcRenderer.on(t, (e, t) => {
    let n = window.location.origin;
    n !== `null` && window.postMessage(t, n, e.ports);
  }),
  e.contextBridge.exposeInMainWorld(`codexWindowType`, m),
  e.contextBridge.exposeInMainWorld(`electronBridge`, D),
  typeof window < `u` &&
    window.addEventListener(`message`, (t) => {
      if (t.source !== window || t.data?.type !== `connect-app-host`) return;
      let { port: n } = t.data;
      e.ipcRenderer.postMessage(d, void 0, [n]);
    }));
//# sourceMappingURL=preload.js.map
