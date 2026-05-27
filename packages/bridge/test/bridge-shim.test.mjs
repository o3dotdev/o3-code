import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

test("bridge shim dispatches renderer command messages for Electron shortcuts", async () => {
  const { dispatchedMessages, keydownListener } = await loadBridgeShim();
  let prevented = false;
  let stopped = false;

  keydownListener({
    altKey: false,
    ctrlKey: false,
    key: "j",
    metaKey: true,
    preventDefault: () => {
      prevented = true;
    },
    repeat: false,
    shiftKey: false,
    stopImmediatePropagation: () => {
      stopped = true;
    },
    target: null,
  });

  assert.equal(prevented, true);
  assert.equal(stopped, true);
  assert.deepEqual(normalize(dispatchedMessages), [
    { type: "run-command", id: "toggleTerminal" },
  ]);
});

test("bridge shim dispatches command menu messages for command menu shortcuts", async () => {
  const { dispatchedMessages, keydownListener } = await loadBridgeShim();

  keydownListener({
    altKey: false,
    ctrlKey: false,
    key: "k",
    metaKey: true,
    preventDefault: () => {},
    repeat: false,
    shiftKey: false,
    stopImmediatePropagation: () => {},
    target: null,
  });

  assert.deepEqual(normalize(dispatchedMessages), [{ type: "command-menu" }]);
});

test("bridge shim handles microphone permission requests locally", async () => {
  const { electronBridge, sentEnvelopes } = await loadBridgeShim();

  const response = await electronBridge.sendMessageFromView({
    type: "electron-request-microphone-permission",
  });

  assert.deepEqual(normalize(response), {
    ok: true,
    source: "o3-code-bridge-shim",
  });
  assert.deepEqual(sentEnvelopes, []);
});

test("bridge shim still forwards normal app messages", async () => {
  const { electronBridge, sentEnvelopes } = await loadBridgeShim();

  await electronBridge.sendMessageFromView({ type: "composer-submitted" });

  assert.equal(sentEnvelopes.length, 1);
  assert.equal(sentEnvelopes[0].kind, "app-message-from-view");
  assert.deepEqual(sentEnvelopes[0].payload, { type: "composer-submitted" });
});

test("bridge shim recovers mobile page drift after blank-area pointer and click events", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: true,
    innerHeight: 760,
    visualViewportHeight: 640,
  });

  harness.window.scrollY = 96;
  harness.document.documentElement.scrollTop = 48;
  harness.document.body.scrollTop = 24;

  harness.dispatchDocumentEvent("pointerdown");
  harness.dispatchDocumentEvent("click");

  assert.equal(harness.window.scrollY, 0);
  assert.equal(harness.document.documentElement.scrollTop, 0);
  assert.equal(harness.document.body.scrollTop, 0);
  assert.deepEqual(harness.scrollToCalls.at(-1), { x: 0, y: 0 });
});

test("bridge shim ignores small iOS accessory overlay viewport decreases", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: true,
    innerHeight: 760,
    visualViewportHeight: 760,
  });
  const rootStyle = harness.document.documentElement.style;

  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-height"),
    "760px",
  );
  assert.equal(rootStyle.getPropertyValue("--o3-code-shell-height"), "760px");

  harness.window.visualViewport.height = 716;
  harness.dispatchVisualViewportEvent("resize");

  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-height"),
    "760px",
  );
  assert.equal(rootStyle.getPropertyValue("--o3-code-shell-height"), "760px");
  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-bottom-offset"),
    "0px",
  );
  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-bottom-inset"),
    "calc(env(safe-area-inset-bottom, 0px) + 0px)",
  );
});

test("bridge shim shrinks for keyboard-sized visual viewport occlusion", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: true,
    innerHeight: 760,
    visualViewportHeight: 760,
  });
  const rootStyle = harness.document.documentElement.style;

  harness.window.visualViewport.height = 430;
  harness.dispatchVisualViewportEvent("resize");

  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-height"),
    "430px",
  );
  assert.equal(rootStyle.getPropertyValue("--o3-code-shell-height"), "430px");
  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-bottom-offset"),
    "330px",
  );
  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-bottom-inset"),
    "calc(env(safe-area-inset-bottom, 0px) + 330px)",
  );
});

test("bridge shim restores baseline after keyboard blur and resets drift", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: true,
    innerHeight: 760,
    visualViewportHeight: 760,
  });
  const rootStyle = harness.document.documentElement.style;

  harness.window.visualViewport.height = 430;
  harness.dispatchVisualViewportEvent("resize");
  harness.window.visualViewport.height = 760;
  harness.window.scrollY = 214;
  harness.dispatchWindowEvent("blur");

  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-height"),
    "760px",
  );
  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-bottom-offset"),
    "0px",
  );
  assert.equal(harness.window.scrollY, 0);
  assert.deepEqual(harness.scrollToCalls.at(-1), { x: 0, y: 0 });
});

test("bridge shim grows touch viewport baseline but ignores transient decreases", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: true,
    innerHeight: 760,
    visualViewportHeight: 640,
  });
  const rootStyle = harness.document.documentElement.style;

  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-height"),
    "640px",
  );

  harness.window.visualViewport.height = 700;
  harness.dispatchVisualViewportEvent("resize");
  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-height"),
    "700px",
  );

  harness.window.visualViewport.height = 680;
  harness.dispatchVisualViewportEvent("resize");
  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-height"),
    "700px",
  );
});

test("bridge shim resets touch viewport baseline after orientation changes", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: true,
    innerHeight: 760,
    innerWidth: 390,
    visualViewportHeight: 700,
    visualViewportWidth: 390,
  });
  const rootStyle = harness.document.documentElement.style;

  harness.window.visualViewport.height = 680;
  harness.dispatchVisualViewportEvent("resize");
  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-height"),
    "700px",
  );

  harness.window.innerHeight = 500;
  harness.window.innerWidth = 900;
  harness.document.documentElement.clientHeight = 500;
  harness.window.visualViewport.height = 500;
  harness.window.visualViewport.width = 900;
  harness.dispatchWindowEvent("orientationchange");

  assert.equal(
    rootStyle.getPropertyValue("--o3-code-viewport-height"),
    "500px",
  );
  assert.equal(rootStyle.getPropertyValue("--o3-code-shell-height"), "500px");
});

test("bridge shim preserves reversed transcript scroller while recovering page drift", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: true,
  });
  const scroller = harness.document.createElement("div");
  scroller.className = "thread-scroll-container";
  scroller.style.overflowY = "auto";
  scroller.style.flexDirection = "column-reverse";
  scroller.clientHeight = 300;
  scroller.scrollHeight = 900;
  scroller.scrollTop = -320;
  harness.document.body.append(scroller);
  harness.window.scrollY = 88;

  harness.dispatchDocumentEvent("click", scroller);

  assert.equal(scroller.scrollTop, -320);
  assert.equal(harness.window.scrollY, 0);
  assert.deepEqual(scroller.scrollToCalls, []);
});

test("bridge shim keeps desktop vertical page scroll while recovering horizontal drift", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: false,
  });

  harness.window.scrollX = 18;
  harness.window.scrollY = 71;
  harness.dispatchWindowEvent("scroll");

  assert.equal(harness.window.scrollX, 0);
  assert.equal(harness.window.scrollY, 71);
  assert.deepEqual(harness.scrollToCalls.at(-1), { x: 0, y: 71 });
});

test("bridge shim prevents multi-touch zoom gestures", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: true,
  });

  const event = harness.dispatchDocumentTouchEvent("touchmove", [
    touch(120, 20, 1),
    touch(122, 60, 2),
  ]);

  assert.equal(event.defaultPrevented, true);
  assert.equal(event.preventDefaultCount, 1);
});

test("bridge shim allows internal scroll containers to consume touch movement", async () => {
  const harness = await loadBridgeShim({
    body: true,
    coarsePointer: true,
  });
  const scroller = harness.document.createElement("div");
  scroller.style.overflowY = "auto";
  scroller.clientHeight = 100;
  scroller.scrollHeight = 300;
  scroller.scrollTop = 100;
  harness.document.body.append(scroller);

  harness.dispatchDocumentTouchEvent("touchstart", [touch(120)], scroller);
  const event = harness.dispatchDocumentTouchEvent(
    "touchmove",
    [touch(90)],
    scroller,
  );

  assert.equal(event.defaultPrevented, false);
});

async function loadBridgeShim(options = {}) {
  const listeners = new Map();
  const dispatchedMessages = [];
  const sentEnvelopes = [];
  const scrollToCalls = [];
  const script = await readFile(
    new URL("../public/bridge-shim.js", import.meta.url),
    "utf8",
  );

  class FakeWebSocket {
    static OPEN = 1;

    readyState = FakeWebSocket.OPEN;

    addEventListener(type, listener) {
      listeners.set(`websocket:${type}`, listener);
    }

    send(data) {
      const envelope = JSON.parse(data);
      sentEnvelopes.push(envelope);
      queueMicrotask(() => {
        listeners.get("websocket:message")?.({
          data: JSON.stringify({
            kind: "bridge-response",
            payload: { ok: true },
            responseTo: envelope.id,
          }),
        });
      });
    }
  }

  class FakeMessageEvent {
    constructor(type, init) {
      this.type = type;
      this.data = init?.data;
    }
  }

  class FakeStyle {
    overflowY = "";
    flexDirection = "";

    #properties = new Map();

    setProperty(name, value) {
      this.#properties.set(name, value);
    }

    getPropertyValue(name) {
      if (name === "overflow-y") {
        return this.overflowY;
      }
      if (name === "flex-direction") {
        return this.flexDirection;
      }
      return this.#properties.get(name) ?? "";
    }
  }

  class FakeElement {
    attributes = new Map();
    children = [];
    className = "";
    clientHeight = 100;
    parentElement = null;
    scrollHeight = 100;
    scrollTop = 0;
    scrollToCalls = [];
    style = new FakeStyle();

    constructor(tagName = "div") {
      this.tagName = tagName.toUpperCase();
    }

    append(child) {
      child.parentElement = this;
      this.children.push(child);
      return child;
    }

    contains(node) {
      if (node === this) {
        return true;
      }
      return this.children.some((child) => child.contains(node));
    }

    closest(selector) {
      let current = this;
      while (current != null) {
        if (current.matches(selector)) {
          return current;
        }
        current = current.parentElement;
      }
      return null;
    }

    getAttribute(name) {
      return this.attributes.get(name) ?? null;
    }

    matches(selector) {
      if (selector.startsWith(".")) {
        return this.className.split(/\s+/).includes(selector.slice(1));
      }
      if (selector.startsWith("[") && selector.endsWith("]")) {
        const attribute = selector.slice(1, -1).split("=")[0];
        return this.attributes.has(attribute);
      }
      return this.tagName.toLowerCase() === selector.toLowerCase();
    }

    querySelector(selector) {
      for (const child of this.children) {
        if (child.matches(selector)) {
          return child;
        }
        const nested = child.querySelector(selector);
        if (nested != null) {
          return nested;
        }
      }
      return null;
    }

    scrollTo(optionsOrX, y) {
      const left =
        typeof optionsOrX === "number" ? optionsOrX : (optionsOrX.left ?? 0);
      const top = typeof optionsOrX === "number" ? y : (optionsOrX.top ?? 0);
      this.scrollToCalls.push({ left, top });
      this.scrollTop = top;
    }

    setAttribute(name, value) {
      this.attributes.set(name, String(value));
    }
  }

  const root = options.body ? new FakeElement("html") : null;
  const body = options.body ? new FakeElement("body") : null;
  if (root != null && body != null) {
    root.clientHeight = options.layoutHeight ?? options.innerHeight ?? 760;
    root.append(body);
  }

  const documentObject = {
    body,
    currentScript: { src: "http://127.0.0.1:3000/bridge-shim.js" },
    documentElement: root,
    scrollingElement: root,
    addEventListener(type, listener, eventOptions) {
      const entries = listeners.get(`document:${type}`) ?? [];
      listeners.set(`document:${type}`, [
        ...entries,
        { listener, options: eventOptions ?? {} },
      ]);
    },
    contains(node) {
      return root?.contains(node) ?? false;
    },
    createElement(tagName) {
      return new FakeElement(tagName);
    },
  };

  const visualViewport = {
    height: options.visualViewportHeight ?? options.innerHeight ?? 760,
    offsetLeft: options.visualViewportOffsetLeft ?? 0,
    offsetTop: options.visualViewportOffsetTop ?? 0,
    width: options.visualViewportWidth ?? options.innerWidth ?? 1024,
    addEventListener(type, listener) {
      listeners.set(`visualViewport:${type}`, listener);
    },
  };

  const windowObject = {
    innerWidth: options.innerWidth ?? 1024,
    innerHeight: options.innerHeight ?? 760,
    scrollX: 0,
    scrollY: 0,
    visualViewport,
    addEventListener(type, listener, eventOptions) {
      const entries = listeners.get(`window:${type}`) ?? [];
      listeners.set(`window:${type}`, [
        ...entries,
        { listener, options: eventOptions ?? {} },
      ]);
    },
    dispatchEvent(event) {
      if (event.type === "message") {
        dispatchedMessages.push(event.data);
      }
    },
    getComputedStyle(element) {
      return {
        getPropertyValue: (name) => element.style.getPropertyValue(name),
        overflowY: element.style.overflowY,
        flexDirection: element.style.flexDirection,
      };
    },
    location: {
      host: "127.0.0.1:3000",
      href: "http://127.0.0.1:3000/",
      protocol: "http:",
    },
    matchMedia(query) {
      return {
        matches:
          (query.includes("pointer: coarse") && options.coarsePointer) ||
          (query.includes("display-mode: standalone") &&
            options.displayModeStandalone) ||
          false,
      };
    },
    requestAnimationFrame(callback) {
      callback();
      return 1;
    },
    screen: {
      orientation:
        options.orientation == null ? undefined : { type: options.orientation },
    },
    scrollTo(x, y) {
      scrollToCalls.push({ x, y });
      windowObject.scrollX = x;
      windowObject.scrollY = y;
    },
  };

  vm.runInNewContext(script, {
    Element: FakeElement,
    Error,
    File: class FakeFile {},
    Map,
    MessageEvent: FakeMessageEvent,
    Object,
    Set,
    URL,
    WeakMap,
    WebSocket: FakeWebSocket,
    clearTimeout: () => {},
    console,
    crypto: { randomUUID: () => "test-id" },
    document: documentObject,
    globalThis: { crypto: { randomUUID: () => "test-id" } },
    navigator: {
      platform: "MacIntel",
      standalone: options.navigatorStandalone === true,
    },
    queueMicrotask,
    setTimeout: (callback) => {
      callback();
      return 1;
    },
    window: windowObject,
  });

  return {
    dispatchedMessages,
    dispatchDocumentEvent(type, target = body) {
      dispatchEntries(listeners.get(`document:${type}`), {
        target,
        type,
      });
    },
    dispatchDocumentTouchEvent(type, touches, target = body) {
      const event = new FakeTouchEvent(type, target, touches);
      dispatchEntries(listeners.get(`document:${type}`), event);
      return event;
    },
    dispatchVisualViewportEvent(type) {
      dispatchEntries(listeners.get(`visualViewport:${type}`), { type });
    },
    dispatchWindowEvent(type) {
      dispatchEntries(listeners.get(`window:${type}`), { type });
    },
    document: documentObject,
    electronBridge: windowObject.electronBridge,
    keydownListener: listeners.get("window:keydown")[0].listener,
    scrollToCalls,
    sentEnvelopes,
    window: windowObject,
  };
}

class FakeTouchEvent {
  defaultPrevented = false;
  preventDefaultCount = 0;

  constructor(type, target, touches) {
    this.type = type;
    this.target = target;
    this.touches = touches;
  }

  preventDefault() {
    this.defaultPrevented = true;
    this.preventDefaultCount += 1;
  }
}

function dispatchEntries(entries, event) {
  const normalizedEntries =
    typeof entries === "function" ? [entries] : (entries ?? []);
  for (const entry of normalizedEntries) {
    if (typeof entry === "function") {
      entry(event);
    } else {
      entry.listener(event);
    }
  }
}

function touch(clientY, clientX = 20, identifier = 1) {
  return { clientX, clientY, identifier };
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value));
}
