import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import test from "node:test";

import { BRIDGE_PROTOCOL_VERSION, BridgeRouter } from "../src/router.mjs";

class FakeSocket extends EventEmitter {
  sent = [];
  closed = null;

  send(message) {
    this.sent.push(JSON.parse(message));
  }

  close(code, reason) {
    this.closed = { code, reason };
    this.emit("close");
  }

  receive(envelope) {
    this.emit(
      "message",
      JSON.stringify({
        id: "request-1",
        protocolVersion: BRIDGE_PROTOCOL_VERSION,
        source: "browser",
        ...envelope,
      }),
    );
  }
}

function createHostTransport() {
  const calls = [];
  return {
    calls,
    async call(method, args) {
      calls.push({ method, args });
      return method === "getBuildFlavor" ? "prod" : null;
    },
    async subscribeWorker(workerId) {
      calls.push({ method: "subscribeWorker", args: [workerId] });
    },
    async unsubscribeWorker(workerId) {
      calls.push({ method: "unsubscribeWorker", args: [workerId] });
    },
  };
}

test("attachBrowser replaces the previous active session", () => {
  const router = new BridgeRouter({ hostTransport: createHostTransport() });
  const first = new FakeSocket();
  const second = new FakeSocket();

  const firstSessionId = router.attachBrowser(first);
  const secondSessionId = router.attachBrowser(second);

  assert.notEqual(firstSessionId, secondSessionId);
  assert.equal(first.closed.code, 4000);
  assert.equal(router.activeSessionId, secondSessionId);
  assert.equal(second.sent[0].kind, "bridge-sync-pulse");
});

test("sync pulse sends a resolved theme variant", () => {
  const router = new BridgeRouter({ hostTransport: createHostTransport() });
  const socket = new FakeSocket();

  router.attachBrowser(socket);

  assert.equal(socket.sent[0].payload.systemThemeVariant, "dark");
});

test("routes resolved host theme updates to the active browser session", () => {
  const router = new BridgeRouter({ hostTransport: createHostTransport() });
  const socket = new FakeSocket();

  router.attachBrowser(socket);
  router.handleHostEvent({
    type: "system-theme-variant-updated",
    payload: "light",
  });

  assert.equal(socket.sent.at(-1).kind, "system-theme-variant-updated");
  assert.equal(socket.sent.at(-1).payload, "light");
});

test("ignores unresolved host theme updates", () => {
  const router = new BridgeRouter({ hostTransport: createHostTransport() });
  const socket = new FakeSocket();

  router.attachBrowser(socket);
  router.handleHostEvent({
    type: "system-theme-variant-updated",
    payload: "system",
  });

  assert.equal(socket.sent.at(-1).payload, "dark");
});

test("routes browser app messages to the host transport", async () => {
  const hostTransport = createHostTransport();
  const router = new BridgeRouter({ hostTransport });
  const socket = new FakeSocket();

  router.attachBrowser(socket);
  socket.receive({
    kind: "app-message-from-view",
    payload: { type: "thread-start", conversationId: "c1" },
  });

  await new Promise((resolve) => setImmediate(resolve));

  assert.deepEqual(hostTransport.calls, [
    {
      method: "sendMessageFromView",
      args: [{ type: "thread-start", conversationId: "c1" }],
    },
  ]);
  assert.equal(socket.sent.at(-1).kind, "bridge-response");
});

test("routes host messages to the active browser session", () => {
  const router = new BridgeRouter({ hostTransport: createHostTransport() });
  const socket = new FakeSocket();

  router.attachBrowser(socket);
  router.handleHostEvent({
    type: "host-message",
    payload: { type: "thread-event", conversationId: "c1" },
  });

  assert.equal(socket.sent.at(-1).kind, "app-message-for-view");
  assert.deepEqual(socket.sent.at(-1).payload, {
    type: "thread-event",
    conversationId: "c1",
  });
});

test("routes worker subscriptions and worker messages", async () => {
  const hostTransport = createHostTransport();
  const router = new BridgeRouter({ hostTransport });
  const socket = new FakeSocket();

  router.attachBrowser(socket);
  socket.receive({ kind: "worker-subscribe", workerId: "git" });

  await new Promise((resolve) => setImmediate(resolve));

  router.handleHostEvent({
    type: "worker-message",
    workerId: "git",
    payload: { type: "worker-response" },
  });

  assert.deepEqual(hostTransport.calls, [
    { method: "subscribeWorker", args: ["git"] },
  ]);
  assert.equal(socket.sent.at(-1).kind, "worker-message-for-view");
});
