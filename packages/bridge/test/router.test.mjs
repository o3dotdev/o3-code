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

function createRecordingEventLog({ verbose = false } = {}) {
  return {
    records: [],
    verbose,
    write(event, fields) {
      this.records.push({ event, fields });
    },
    truncateDetail(value) {
      if (value == null) {
        return null;
      }
      return typeof value === "string" ? value : JSON.stringify(value);
    },
    close() {},
  };
}

test("logs every envelope direction with summary fields", async () => {
  const eventLog = createRecordingEventLog();
  const router = new BridgeRouter({
    hostTransport: createHostTransport(),
    eventLog,
  });
  const socket = new FakeSocket();
  router.attachBrowser(socket);

  socket.receive({
    kind: "app-message-from-view",
    payload: { type: "composer-submitted" },
  });
  await new Promise((resolve) => setImmediate(resolve));

  const inbound = eventLog.records.filter((r) => r.event === "envelope-in");
  const outbound = eventLog.records.filter((r) => r.event === "envelope-out");
  assert.ok(inbound.length >= 1, "expected at least one inbound envelope log");
  assert.ok(outbound.length >= 1, "expected at least one outbound envelope log");

  const lastInbound = inbound.at(-1);
  assert.equal(lastInbound.fields.kind, "app-message-from-view");
  assert.equal(lastInbound.fields.payloadType, "composer-submitted");
  assert.equal(
    lastInbound.fields.payload,
    null,
    "non-verbose log must omit payload contents",
  );
  assert.ok(lastInbound.fields.bytes > 0);

  const syncPulse = outbound.find((r) => r.fields.kind === "bridge-sync-pulse");
  assert.ok(syncPulse, "expected sync pulse envelope to be logged");
});

test("verbose event log captures truncated payload contents", async () => {
  const eventLog = createRecordingEventLog({ verbose: true });
  const router = new BridgeRouter({
    hostTransport: createHostTransport(),
    eventLog,
  });
  const socket = new FakeSocket();
  router.attachBrowser(socket);

  socket.receive({
    kind: "app-message-from-view",
    payload: { type: "composer-submitted", text: "hello" },
  });
  await new Promise((resolve) => setImmediate(resolve));

  const inbound = eventLog.records.findLast((r) => r.event === "envelope-in");
  assert.ok(inbound);
  assert.ok(inbound.fields.payload?.includes("composer-submitted"));
  assert.ok(inbound.fields.payload?.includes("hello"));
});

test("browser-diagnostic envelopes are logged and acknowledged", async () => {
  const eventLog = createRecordingEventLog();
  const router = new BridgeRouter({
    hostTransport: createHostTransport(),
    eventLog,
  });
  const socket = new FakeSocket();
  router.attachBrowser(socket);

  socket.receive({
    kind: "browser-diagnostic",
    payload: {
      level: "error",
      message: "Boom",
      stack: "Error: Boom\n  at app-main.js:24622:19",
      name: "TypeError",
      userAgent: "Mozilla/5.0 (iPad)",
      url: "https://example.ts.net/",
      timestamp: "2026-05-29T12:00:00.000Z",
    },
  });
  await new Promise((resolve) => setImmediate(resolve));

  const diagnostic = eventLog.records.find(
    (r) => r.event === "browser-diagnostic",
  );
  assert.ok(diagnostic, "expected a browser-diagnostic record");
  assert.equal(diagnostic.fields.level, "error");
  assert.equal(diagnostic.fields.message, "Boom");
  assert.equal(diagnostic.fields.name, "TypeError");
  assert.equal(diagnostic.fields.userAgent, "Mozilla/5.0 (iPad)");
  assert.equal(diagnostic.fields.url, "https://example.ts.net/");
  assert.ok(diagnostic.fields.stack?.includes("app-main.js:24622:19"));

  const response = socket.sent.findLast((m) => m.kind === "bridge-response");
  assert.ok(response, "expected a bridge-response acknowledgement");
});

test("event log records browser-diagnostic for unhandled rejections without a stack", async () => {
  const eventLog = createRecordingEventLog();
  const router = new BridgeRouter({
    hostTransport: createHostTransport(),
    eventLog,
  });
  const socket = new FakeSocket();
  router.attachBrowser(socket);

  socket.receive({
    kind: "browser-diagnostic",
    payload: {
      level: "unhandled-rejection",
      message: "Some non-error reason",
      stack: null,
      name: null,
    },
  });
  await new Promise((resolve) => setImmediate(resolve));

  const diagnostic = eventLog.records.find(
    (r) => r.event === "browser-diagnostic",
  );
  assert.ok(diagnostic);
  assert.equal(diagnostic.fields.level, "unhandled-rejection");
  assert.equal(diagnostic.fields.message, "Some non-error reason");
  assert.equal(diagnostic.fields.stack, null);
});
