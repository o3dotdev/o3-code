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

async function loadBridgeShim() {
  const listeners = new Map();
  const dispatchedMessages = [];
  const sentEnvelopes = [];
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

  class FakeElement {}

  const window = {
    addEventListener(type, listener) {
      listeners.set(`window:${type}`, listener);
    },
    dispatchEvent(event) {
      if (event.type === "message") {
        dispatchedMessages.push(event.data);
      }
    },
    location: {
      host: "127.0.0.1:3000",
      href: "http://127.0.0.1:3000/",
      protocol: "http:",
    },
    matchMedia: () => ({ matches: false }),
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
    crypto: { randomUUID: () => "test-id" },
    document: {
      currentScript: { src: "http://127.0.0.1:3000/bridge-shim.js" },
    },
    globalThis: { crypto: { randomUUID: () => "test-id" } },
    navigator: { platform: "MacIntel" },
    queueMicrotask,
    window,
  });

  return {
    dispatchedMessages,
    electronBridge: window.electronBridge,
    keydownListener: listeners.get("window:keydown"),
    sentEnvelopes,
  };
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value));
}
