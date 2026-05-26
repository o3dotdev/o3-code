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

async function loadBridgeShim() {
  const listeners = new Map();
  const dispatchedMessages = [];
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

    send() {}
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
    keydownListener: listeners.get("window:keydown"),
  };
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value));
}
