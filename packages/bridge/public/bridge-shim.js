(function installO3CodeBridgeShim() {
  if (window.electronBridge != null) {
    return;
  }

  const protocolVersion = 1;
  const shellRecoveryMaxFrames = 8;
  const shellRecoveryTimeoutsMs = [50, 150, 350, 800, 1600, 3000];
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
  let scheduleMobileShellViewportRecovery = () => {};
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
      scheduleRecoveryForThreadStreamStateChanged(payload);
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
  safeInstallOptionalFeature(
    "mobile shell guards",
    installMobileShellGuardsWhenReady,
  );

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

  function safeInstallOptionalFeature(name, install) {
    try {
      install();
    } catch (error) {
      console.warn("[bridge-shim] Optional feature failed: " + name, error);
    }
  }

  function installMobileShellGuardsWhenReady() {
    let installed = false;
    const tryInstall = () => {
      if (
        installed ||
        document.documentElement == null ||
        document.body == null
      ) {
        return;
      }

      installed = true;
      installMobileShellGuards();
    };

    tryInstall();
    if (installed) {
      return;
    }

    const installAfterBodyParsed = () => {
      safeInstallOptionalFeature("mobile shell guards", tryInstall);
    };
    document.addEventListener("DOMContentLoaded", installAfterBodyParsed, {
      once: true,
    });
    window.addEventListener("load", installAfterBodyParsed, { once: true });
  }

  function installMobileShellGuards() {
    const root = document.documentElement;
    const body = document.body;
    if (root == null || body == null) {
      return;
    }

    const touchState = {
      lastY: 0,
      scrollers: [],
    };
    let shellRecoveryFrameCount = 0;
    let shellRecoveryQueued = false;
    let shellRecoveryTimerIds = [];
    let touchViewportBaseline = {
      height: 0,
      key: "",
    };

    const updateViewportMetrics = () => {
      const viewport = window.visualViewport;
      const rawViewportHeight = viewport?.height || window.innerHeight || 0;
      const viewportOffsetTop = viewport?.offsetTop || 0;
      const layoutViewportHeight = Math.max(
        root.clientHeight || 0,
        window.innerHeight || 0,
        viewport ? rawViewportHeight + viewportOffsetTop : 0,
      );
      const bottomOcclusion =
        rawViewportHeight > 0
          ? layoutViewportHeight - rawViewportHeight - viewportOffsetTop
          : 0;
      const rawBottomOffset = Number.isFinite(bottomOcclusion)
        ? Math.ceil(bottomOcclusion)
        : 0;
      const keyboardOcclusionThreshold = Math.max(
        120,
        layoutViewportHeight * 0.25,
      );
      const keyboardLikely = rawBottomOffset > keyboardOcclusionThreshold;
      const touchShell = isTouchShell();
      const standaloneShell =
        touchShell &&
        (window.navigator?.standalone === true ||
          window.matchMedia?.("(display-mode: standalone)")?.matches === true ||
          window.matchMedia?.("(display-mode: fullscreen)")?.matches === true);
      const nonKeyboardViewportHeight = standaloneShell
        ? layoutViewportHeight
        : rawViewportHeight;
      const stableTouchViewportHeight =
        touchShell && !keyboardLikely
          ? stableNonKeyboardTouchViewportHeight({
              currentHeight: nonKeyboardViewportHeight,
              layoutViewportHeight,
              rawViewportHeight,
              standaloneShell,
              touchViewportBaseline,
              updateBaseline: (nextBaseline) => {
                touchViewportBaseline = nextBaseline;
              },
            })
          : layoutViewportHeight;
      const viewportHeight = keyboardLikely
        ? rawViewportHeight
        : stableTouchViewportHeight;
      const bottomOffset = keyboardLikely ? rawBottomOffset : 0;
      const zoomValue = Number.parseFloat(
        window
          .getComputedStyle?.(root)
          ?.getPropertyValue("--codex-window-zoom") ?? "1",
      );
      const zoom =
        !touchShell && Number.isFinite(zoomValue) && zoomValue > 0
          ? zoomValue
          : 1;
      const shellHeight = viewportHeight / zoom;

      if (Number.isFinite(viewportHeight) && viewportHeight > 0) {
        root.style.setProperty(
          "--o3-code-viewport-height",
          `${Math.ceil(viewportHeight)}px`,
        );
        root.style.setProperty(
          "--o3-code-shell-height",
          `${Math.ceil(shellHeight)}px`,
        );
        root.style.setProperty("--o3-code-measured-viewport-top-offset", "0px");
        root.style.setProperty(
          "--o3-code-viewport-bottom-offset",
          `${Math.max(0, bottomOffset)}px`,
        );
        root.style.setProperty(
          "--o3-code-viewport-bottom-inset",
          `calc(env(safe-area-inset-bottom, 0px) + ${Math.max(
            0,
            bottomOffset,
          )}px)`,
        );
      }
    };

    const recoverShellViewportDrift = () => {
      const touchShell = isTouchShell();
      const viewportOffsetLeft = window.visualViewport?.offsetLeft || 0;
      const currentScrollX = Number.isFinite(window.scrollX)
        ? window.scrollX
        : 0;
      const currentScrollY = Number.isFinite(window.scrollY)
        ? window.scrollY
        : 0;
      const documentScrollY = Number.isFinite(root.scrollTop)
        ? root.scrollTop
        : 0;
      const scrollingElementScrollY = Number.isFinite(
        document.scrollingElement?.scrollTop,
      )
        ? document.scrollingElement.scrollTop
        : 0;
      const bodyScrollY = Number.isFinite(body.scrollTop) ? body.scrollTop : 0;
      const needsHorizontalReset =
        currentScrollX !== 0 ||
        horizontalViewportOffset(viewportOffsetLeft, touchShell) !== 0;
      const needsVerticalReset =
        touchShell &&
        (currentScrollY !== 0 ||
          documentScrollY !== 0 ||
          scrollingElementScrollY !== 0 ||
          bodyScrollY !== 0);

      if (!needsHorizontalReset && !needsVerticalReset) {
        return;
      }

      window.scrollTo(0, needsVerticalReset ? 0 : currentScrollY);
      if (needsVerticalReset) {
        if (document.scrollingElement) {
          document.scrollingElement.scrollTop = 0;
        }
        root.scrollTop = 0;
        body.scrollTop = 0;
      }
    };

    const updateViewportMetricsAndRecoverShell = () => {
      updateViewportMetrics();
      recoverShellViewportDrift();
    };

    const clearShellViewportRecoveryTimers = () => {
      for (const timerId of shellRecoveryTimerIds) {
        clearTimeout(timerId);
      }
      shellRecoveryTimerIds = [];
    };

    const scheduleShellViewportRecovery = (reason) => {
      shellRecoveryFrameCount = 0;
      clearShellViewportRecoveryTimers();
      shellRecoveryTimerIds = shellRecoveryTimeoutsMs.map((delay) =>
        setTimeout(updateViewportMetricsAndRecoverShell, delay),
      );
      if (shellRecoveryQueued) {
        debugLog("mobile-shell-recovery-extended", { reason });
        return;
      }

      const runShellViewportRecovery = () => {
        shellRecoveryQueued = false;
        shellRecoveryFrameCount += 1;
        updateViewportMetricsAndRecoverShell();
        if (shellRecoveryFrameCount < shellRecoveryMaxFrames) {
          shellRecoveryQueued = true;
          requestAnimationFrameSafe(runShellViewportRecovery);
        }
      };

      shellRecoveryQueued = true;
      requestAnimationFrameSafe(runShellViewportRecovery);
      debugLog("mobile-shell-recovery-scheduled", { reason });
    };
    scheduleMobileShellViewportRecovery = scheduleShellViewportRecovery;

    const preventDefault = (event) => {
      event.preventDefault();
    };

    for (const eventName of ["gesturestart", "gesturechange", "gestureend"]) {
      window.addEventListener(eventName, preventDefault, { passive: false });
      document.addEventListener(eventName, preventDefault, { passive: false });
    }

    document.addEventListener(
      "touchstart",
      (event) => {
        if (event.touches.length !== 1) {
          touchState.scrollers = [];
          return;
        }

        const touch = event.touches[0];
        touchState.lastY = touch ? touch.clientY : 0;
        touchState.scrollers = findScrollableAncestors(event.target);
      },
      { passive: true },
    );

    document.addEventListener(
      "touchmove",
      (event) => {
        if (event.touches.length > 1) {
          event.preventDefault();
          return;
        }

        if (event.touches.length !== 1) {
          return;
        }

        const touch = event.touches[0];
        if (!touch) {
          return;
        }

        const currentY = touch.clientY;
        const deltaY = currentY - touchState.lastY;
        touchState.lastY = currentY;
        const cachedScrollerChain = touchState.scrollers.filter((scroller) =>
          document.contains(scroller),
        );
        touchState.scrollers =
          cachedScrollerChain.length > 0
            ? cachedScrollerChain
            : findScrollableAncestors(event.target);

        if (shouldPreventOneFingerOverscroll(touchState.scrollers, deltaY)) {
          event.preventDefault();
        }
      },
      { passive: false },
    );

    updateViewportMetricsAndRecoverShell();
    window.visualViewport?.addEventListener(
      "resize",
      () => scheduleShellViewportRecovery("visual-viewport-resize"),
      { passive: true },
    );
    window.visualViewport?.addEventListener(
      "scroll",
      () => scheduleShellViewportRecovery("visual-viewport-scroll"),
      { passive: true },
    );
    window.addEventListener(
      "resize",
      () => scheduleShellViewportRecovery("window-resize"),
      { passive: true },
    );
    window.addEventListener(
      "orientationchange",
      () => {
        touchViewportBaseline = { height: 0, key: "" };
        scheduleShellViewportRecovery("orientationchange");
      },
      { passive: true },
    );
    window.addEventListener(
      "focus",
      () => scheduleShellViewportRecovery("window-focus"),
      { passive: true },
    );
    window.addEventListener(
      "blur",
      () => scheduleShellViewportRecovery("window-blur"),
      { passive: true },
    );
    window.addEventListener(
      "scroll",
      () => scheduleShellViewportRecovery("window-scroll"),
      { passive: true },
    );

    for (const eventName of [
      "pointerdown",
      "pointerup",
      "pointercancel",
      "click",
      "contextmenu",
      "touchstart",
      "touchend",
      "touchcancel",
    ]) {
      document.addEventListener(
        eventName,
        () => scheduleShellViewportRecovery(`document-${eventName}`),
        { passive: true, capture: true },
      );
    }

    document.addEventListener(
      "focusout",
      () => scheduleShellViewportRecovery("document-focusout"),
      { passive: true },
    );
    document.addEventListener(
      "selectionchange",
      () => scheduleShellViewportRecovery("document-selectionchange"),
      { passive: true },
    );
    window.addEventListener(
      "pageshow",
      () => scheduleShellViewportRecovery("window-pageshow"),
      { passive: true },
    );
    observeBodyShellMutations(scheduleShellViewportRecovery);
    scheduleShellViewportRecovery("initial");
  }

  function stableNonKeyboardTouchViewportHeight({
    currentHeight,
    layoutViewportHeight,
    rawViewportHeight,
    standaloneShell,
    touchViewportBaseline,
    updateBaseline,
  }) {
    const bucketKey = touchViewportBucketKey(layoutViewportHeight);
    const nextHeight =
      Number.isFinite(currentHeight) && currentHeight > 0
        ? currentHeight
        : layoutViewportHeight;

    if (
      touchViewportBaseline.key !== bucketKey ||
      !Number.isFinite(touchViewportBaseline.height) ||
      touchViewportBaseline.height <= 0
    ) {
      const baselineHeight = standaloneShell
        ? layoutViewportHeight
        : Math.max(
            nextHeight,
            Math.min(layoutViewportHeight, rawViewportHeight),
          );
      updateBaseline({ height: baselineHeight, key: bucketKey });
      return baselineHeight;
    }

    if (nextHeight > touchViewportBaseline.height) {
      updateBaseline({ height: nextHeight, key: bucketKey });
      return nextHeight;
    }

    return touchViewportBaseline.height;
  }

  function touchViewportBucketKey(layoutViewportHeight) {
    const width = Math.max(
      0,
      window.innerWidth || 0,
      document.documentElement?.clientWidth || 0,
      window.visualViewport?.width || 0,
    );
    const height = Math.max(0, layoutViewportHeight || 0);
    const orientation =
      window.screen?.orientation?.type ??
      (width > height ? "landscape" : "portrait");
    return `${Math.round(width)}x${Math.round(height)}:${orientation}`;
  }

  function observeBodyShellMutations(scheduleShellViewportRecovery) {
    if (document.body == null || typeof MutationObserver !== "function") {
      return;
    }

    const scrollLockObserver = new MutationObserver(() => {
      scheduleShellViewportRecovery("body-scroll-lock-mutation");
    });
    scrollLockObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "style", "data-scroll-locked"],
    });

    const shellPortalSelector = [
      "[data-radix-popper-content-wrapper]",
      "[data-radix-portal]",
      "[aria-modal='true']",
      "[role='dialog']",
      "[role='alertdialog']",
      "[role='menu']",
      "[role='listbox']",
      "dialog",
    ].join(", ");
    const isShellPortalNode = (node) => {
      if (!(node instanceof Element)) {
        return false;
      }

      return (
        node.matches?.(shellPortalSelector) === true ||
        node.querySelector?.(shellPortalSelector) != null
      );
    };
    const isShellPortalMutation = (mutation) => {
      if (mutation.target === document.body) {
        return true;
      }

      for (const node of [
        ...(mutation.addedNodes || []),
        ...(mutation.removedNodes || []),
      ]) {
        if (isShellPortalNode(node)) {
          return true;
        }
      }

      return false;
    };
    const portalObserver = new MutationObserver((mutations) => {
      if (!Array.from(mutations || []).some(isShellPortalMutation)) {
        return;
      }

      scheduleShellViewportRecovery("body-childlist-mutation");
    });
    portalObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  function isTouchShell() {
    return (
      window.matchMedia?.("(hover: none) and (pointer: coarse)")?.matches ===
      true
    );
  }

  function horizontalViewportOffset(viewportOffsetLeft, touchShell) {
    if (!Number.isFinite(viewportOffsetLeft)) {
      return 0;
    }

    return touchShell ? Math.round(viewportOffsetLeft) : 0;
  }

  function requestAnimationFrameSafe(callback) {
    if (typeof window.requestAnimationFrame === "function") {
      window.requestAnimationFrame(callback);
    } else {
      setTimeout(callback, 16);
    }
  }

  function findScrollableAncestors(target) {
    const scrollers = [];
    let current = target instanceof Element ? target : target?.parentElement;

    while (current != null && current !== document.body) {
      if (isScrollableElement(current)) {
        scrollers.push(current);
      }
      current = current.parentElement;
    }

    return scrollers;
  }

  function isScrollableElement(element) {
    if (!(element instanceof Element)) {
      return false;
    }

    const style = window.getComputedStyle?.(element);
    const overflowY = style?.overflowY ?? element.style?.overflowY ?? "";
    const canScrollY = /(auto|scroll|overlay)/.test(overflowY);
    return canScrollY && element.scrollHeight > element.clientHeight;
  }

  function shouldPreventOneFingerOverscroll(scrollers, deltaY) {
    if (deltaY === 0) {
      return false;
    }

    if (scrollers.length === 0) {
      return true;
    }

    return !scrollers.some((scroller) =>
      canScrollInGestureDirection(scroller, deltaY),
    );
  }

  function canScrollInGestureDirection(scroller, deltaY) {
    const flexDirection =
      window.getComputedStyle?.(scroller)?.flexDirection ??
      scroller.style?.flexDirection ??
      "";
    const reversed = flexDirection === "column-reverse";
    const maxScroll = Math.max(
      0,
      scroller.scrollHeight - scroller.clientHeight,
    );
    const scrollTop = Number.isFinite(scroller.scrollTop)
      ? scroller.scrollTop
      : 0;

    if (reversed) {
      const minScroll = -maxScroll;
      return deltaY > 0 ? scrollTop > minScroll : scrollTop < 0;
    }

    return deltaY > 0 ? scrollTop > 0 : scrollTop < maxScroll;
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

  function scheduleRecoveryForThreadStreamStateChanged(payload) {
    if (
      payload?.type === "ipc-broadcast" &&
      payload.method === "thread-stream-state-changed"
    ) {
      scheduleMobileShellViewportRecovery("thread-stream-state-changed");
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
      scheduleRecoveryForThreadStreamStateChanged(payload);
      if (payload?.type === "shared-object-set") {
        updateSharedObject(payload.key, payload.value);
      }

      if (payload?.type === "electron-request-microphone-permission") {
        return { ok: true, source: "o3-code-bridge-shim" };
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
