(function installO3BridgeShim() {
  if (window.electronBridge != null) {
    return;
  }

  const protocolVersion = 1;
  const debug =
    new URL(
      document.currentScript?.src ?? window.location.href,
    ).searchParams.get("debug") === "1";
  const pending = new Map();
  const queued = [];
  const persistedAtomState = {};
  const sharedObjectSnapshot = {
    host_config: {
      id: "local",
      display_name: "Local",
      kind: "local",
    },
    pending_worktrees: [],
    remote_connections: [],
    remote_control_connections: [],
    remote_control_connections_state: {
      accessRequired: false,
      authRequired: false,
      available: false,
      clientAuthorized: false,
    },
    statsig_default_enable_features: {
      apps: true,
      apply_patch_streaming_events: true,
      collaboration_modes: true,
      enable_mcp_apps: true,
      enable_request_compression: true,
      guardian_approval: true,
      image_detail_original: true,
      image_generation: true,
      personality: true,
      plugins: true,
      realtime_conversation: true,
      request_rule: true,
      tool_call_mcp_elicitation: true,
      tool_search: true,
      tool_suggest: true,
      workspace_dependencies: true,
      workspace_owner_usage_nudge: true,
    },
  };
  const workerListeners = new Map();
  const themeListeners = new Set();
  const stagedFiles = new WeakMap();
  const shortcutBindings = [
    ["CmdOrCtrl+N", { type: "run-command", id: "newThread" }],
    ["CmdOrCtrl+Shift+O", { type: "run-command", id: "newThread" }],
    ["CmdOrCtrl+Alt+N", { type: "run-command", id: "quickChat" }],
    ["CmdOrCtrl+G", { type: "chat-search-command-menu" }],
    ["CmdOrCtrl+P", { type: "file-search-command-menu" }],
    ["CmdOrCtrl+K", { type: "command-menu" }],
    ["CmdOrCtrl+Shift+P", { type: "command-menu" }],
    ["CmdOrCtrl+O", { type: "run-command", id: "openFolder" }],
    ["CmdOrCtrl+B", { type: "run-command", id: "toggleSidebar" }],
    ["CmdOrCtrl+J", { type: "run-command", id: "toggleTerminal" }],
    ["CmdOrCtrl+T", { type: "run-command", id: "openBrowserTab" }],
    ["CmdOrCtrl+Shift+B", { type: "run-command", id: "toggleBrowserPanel" }],
    ["CmdOrCtrl+Alt+B", { type: "run-command", id: "toggleSidePanel" }],
    ["CmdOrCtrl+F", { type: "run-command", id: "findInThread" }],
    ["CmdOrCtrl+[", { type: "run-command", id: "navigateBack" }],
    ["CmdOrCtrl+]", { type: "run-command", id: "navigateForward" }],
    ["CmdOrCtrl+Shift+A", { type: "run-command", id: "archiveThread" }],
    ["CmdOrCtrl+Alt+P", { type: "run-command", id: "toggleThreadPin" }],
  ].map(([accelerator, payload]) => ({
    payload,
    shortcut: parseAccelerator(accelerator),
  }));
  let systemThemeVariant = getBrowserThemeVariant();
  let appSessionId = randomId();

  const socket = new WebSocket(
    `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.host}/bridge`,
  );

  socket.addEventListener("open", () => {
    debugLog("socket-open");
    while (queued.length > 0) {
      socket.send(queued.shift());
    }
  });

  socket.addEventListener("message", (event) => {
    const envelope = JSON.parse(event.data);
    debugEnvelope("from-sidecar", envelope);

    if (
      envelope.kind === "bridge-response" ||
      envelope.kind === "bridge-error"
    ) {
      const request = pending.get(envelope.responseTo);
      if (request == null) {
        return;
      }

      pending.delete(envelope.responseTo);
      if (envelope.kind === "bridge-error") {
        request.reject(Error(envelope.error || "Bridge request failed."));
      } else {
        request.resolve(envelope.payload);
      }
      return;
    }

    if (envelope.kind === "bridge-sync-pulse") {
      Object.assign(
        sharedObjectSnapshot,
        envelope.payload?.sharedObjectSnapshot ?? {},
      );
      systemThemeVariant = normalizeThemeVariant(
        envelope.payload?.systemThemeVariant,
        systemThemeVariant,
      );
      appSessionId = envelope.payload?.sessionId ?? appSessionId;
      return;
    }

    if (envelope.kind === "app-message-for-view") {
      const payload = envelope.payload;
      if (payload?.type === "shared-object-updated") {
        updateSharedObject(payload.key, payload.value);
      } else if (payload?.type === "persisted-atom-sync") {
        replacePersistedAtomState(payload.state ?? {});
      } else if (payload?.type === "persisted-atom-updated") {
        updatePersistedAtomState(payload.key, payload.value, payload.deleted);
      }
      dispatchAppMessage(payload);
      return;
    }

    if (envelope.kind === "worker-message-for-view") {
      const listeners = workerListeners.get(envelope.workerId);
      if (listeners != null) {
        for (const listener of listeners) {
          listener(envelope.payload);
        }
      }
      return;
    }

    if (envelope.kind === "system-theme-variant-updated") {
      systemThemeVariant = normalizeThemeVariant(
        envelope.payload,
        systemThemeVariant,
      );
      for (const listener of themeListeners) {
        listener();
      }
    }
  });

  window.addEventListener("codex-message-from-view", (event) => {
    if (event.__codexForwardedViaBridge === true) {
      return;
    }

    if (event.detail?.type != null) {
      window.electronBridge.sendMessageFromView(event.detail).catch(() => {});
    }
  });

  window.addEventListener("keydown", handleBridgeShortcut, {
    capture: true,
  });

  async function request(kind, fields) {
    const id = randomId();
    const envelope = JSON.stringify({
      id,
      protocolVersion,
      source: "browser",
      kind,
      ...fields,
    });

    const response = new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
    });

    if (socket.readyState === WebSocket.OPEN) {
      debugEnvelope("to-sidecar", JSON.parse(envelope));
      socket.send(envelope);
    } else {
      debugEnvelope("queued", JSON.parse(envelope));
      queued.push(envelope);
    }

    return await response;
  }

  function debugLog(message, fields) {
    if (!debug) {
      return;
    }

    console.debug("[bridge-shim]", message, fields ?? {});
  }

  function debugEnvelope(direction, envelope) {
    if (!debug) {
      return;
    }

    console.debug("[bridge-shim]", direction, {
      kind: envelope.kind,
      payloadType: envelope.payload?.type,
      responseTo: envelope.responseTo,
      workerId: envelope.workerId,
    });
  }

  function dispatchAppMessage(payload) {
    window.dispatchEvent(new MessageEvent("message", { data: payload }));
  }

  function handleBridgeShortcut(event) {
    if (event.repeat || isShortcutCaptureTarget(event.target)) {
      return;
    }

    const binding = shortcutBindings.find(({ shortcut }) =>
      matchesShortcut(event, shortcut),
    );
    if (binding == null) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
    dispatchAppMessage(binding.payload);
  }

  function isShortcutCaptureTarget(target) {
    return (
      target instanceof Element &&
      target.closest("[data-codex-shortcut-capture]") != null
    );
  }

  function parseAccelerator(accelerator) {
    const parts = accelerator.split("+").filter(Boolean);
    const shortcut = {
      altKey: false,
      ctrlKey: false,
      key: "",
      metaKey: false,
      shiftKey: false,
    };

    for (const part of parts) {
      switch (part) {
        case "Alt":
        case "Option":
          shortcut.altKey = true;
          break;
        case "CmdOrCtrl":
          if (isMacOS()) {
            shortcut.metaKey = true;
          } else {
            shortcut.ctrlKey = true;
          }
          break;
        case "Command":
        case "Cmd":
          shortcut.metaKey = true;
          break;
        case "Control":
        case "Ctrl":
          shortcut.ctrlKey = true;
          break;
        case "Shift":
          shortcut.shiftKey = true;
          break;
        default:
          shortcut.key = normalizeShortcutKey(part);
          break;
      }
    }

    return shortcut;
  }

  function matchesShortcut(event, shortcut) {
    return (
      event.altKey === shortcut.altKey &&
      event.ctrlKey === shortcut.ctrlKey &&
      event.metaKey === shortcut.metaKey &&
      event.shiftKey === shortcut.shiftKey &&
      normalizeShortcutKey(event.key) === shortcut.key
    );
  }

  function normalizeShortcutKey(key) {
    switch (key) {
      case "Space":
        return " ";
      case "Plus":
        return "+";
      default:
        return key.length === 1 ? key.toLowerCase() : key;
    }
  }

  function randomId() {
    if (globalThis.crypto?.randomUUID != null) {
      return globalThis.crypto.randomUUID();
    }

    return `bridge-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function getBrowserThemeVariant() {
    return window.matchMedia?.("(prefers-color-scheme: light)")?.matches
      ? "light"
      : "dark";
  }

  function isMacOS() {
    return navigator.platform?.startsWith("Mac") === true;
  }

  function normalizeThemeVariant(value, fallback) {
    return value === "light" || value === "dark" ? value : fallback;
  }

  function updateSharedObject(key, value) {
    if (typeof key !== "string") {
      return;
    }

    if (value === undefined) {
      delete sharedObjectSnapshot[key];
    } else {
      sharedObjectSnapshot[key] = value;
    }
  }

  function replacePersistedAtomState(state) {
    for (const key of Object.keys(persistedAtomState)) {
      delete persistedAtomState[key];
    }

    Object.assign(persistedAtomState, state);
  }

  function updatePersistedAtomState(key, value, deleted) {
    if (typeof key !== "string") {
      return;
    }

    if (deleted === true || value === undefined) {
      delete persistedAtomState[key];
    } else {
      persistedAtomState[key] = value;
    }
  }

  function handleLocalAppMessage(payload) {
    switch (payload?.type) {
      case "persisted-atom-sync-request": {
        queueMicrotask(() => {
          dispatchAppMessage({
            type: "persisted-atom-sync",
            state: { ...persistedAtomState },
          });
        });
        return;
      }

      case "persisted-atom-update": {
        updatePersistedAtomState(payload.key, payload.value, payload.deleted);
        return;
      }
    }
  }

  async function stageFile(file) {
    if (!(file instanceof File)) {
      return null;
    }

    const cached = stagedFiles.get(file);
    if (cached != null) {
      return cached;
    }

    const response = await fetch("/bridge/stage-file", {
      method: "POST",
      headers: {
        "content-type": file.type || "application/octet-stream",
        "x-o3-file-name": encodeURIComponent(file.name || "browser-file"),
      },
      body: file,
    });

    if (!response.ok) {
      throw Error(`Bridge file staging failed with HTTP ${response.status}.`);
    }

    const staged = await response.json();
    stagedFiles.set(file, staged.path);
    return staged.path;
  }

  const electronBridge = {
    windowType: "electron",
    sendMessageFromView: async (payload) => {
      handleLocalAppMessage(payload);
      if (payload?.type === "shared-object-set") {
        updateSharedObject(payload.key, payload.value);
      }

      await request("app-message-from-view", { payload });
    },
    getPathForFile: (file) => stagedFiles.get(file) ?? null,
    stageFile,
    sendWorkerMessageFromView: async (workerId, payload) => {
      await request("worker-message-from-view", { workerId, payload });
    },
    subscribeToWorkerMessages: (workerId, callback) => {
      let listeners = workerListeners.get(workerId);
      if (listeners == null) {
        listeners = new Set();
        workerListeners.set(workerId, listeners);
        request("worker-subscribe", { workerId }).catch(() => {});
      }

      listeners.add(callback);
      return () => {
        const currentListeners = workerListeners.get(workerId);
        if (currentListeners == null) {
          return;
        }

        currentListeners.delete(callback);
        if (currentListeners.size === 0) {
          workerListeners.delete(workerId);
          request("worker-unsubscribe", { workerId }).catch(() => {});
        }
      };
    },
    showContextMenu: async (params) =>
      await request("bridge-rpc", {
        method: "showContextMenu",
        args: [params],
      }),
    showApplicationMenu: async (menuId, x, y) =>
      await request("bridge-rpc", {
        method: "showApplicationMenu",
        args: [menuId, x, y],
      }),
    getFastModeRolloutMetrics: async (params) =>
      await request("bridge-rpc", {
        method: "getFastModeRolloutMetrics",
        args: [params],
      }),
    getSharedObjectSnapshotValue: (key) => sharedObjectSnapshot[key],
    getSystemThemeVariant: () => systemThemeVariant,
    subscribeToSystemThemeVariant: (callback) => {
      themeListeners.add(callback);
      return () => themeListeners.delete(callback);
    },
    triggerSentryTestError: async () =>
      await request("bridge-rpc", {
        method: "triggerSentryTestError",
        args: [],
      }),
    getSentryInitOptions: () => ({
      appVersion: "0.0.0",
      codexAppSessionId: appSessionId,
    }),
    getAppSessionId: () => appSessionId,
    getBuildFlavor: () => "prod",
  };

  Object.defineProperty(window, "codexWindowType", {
    configurable: true,
    value: "electron",
  });
  Object.defineProperty(window, "electronBridge", {
    configurable: true,
    value: electronBridge,
  });
})();
