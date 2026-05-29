import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import {
  BridgeEventLog,
  NULL_BRIDGE_EVENT_LOG,
  resolveBridgeLogPath,
} from "../src/event-log.mjs";

function tempLogPath() {
  const dir = mkdtempSync(path.join(tmpdir(), "o3-code-bridge-log-"));
  return path.join(dir, "bridge.log");
}

async function flush(eventLog) {
  await eventLog.close();
}

test("BridgeEventLog writes one JSON line per event with a timestamp", async () => {
  const filePath = tempLogPath();
  const eventLog = new BridgeEventLog({
    filePath,
    now: () => new Date("2026-05-29T00:00:00.000Z"),
  });

  eventLog.write("sidecar-start", { pid: 42 });
  eventLog.write("browser-connect", {
    sessionId: "s1",
    userAgent: "Mozilla/5.0 (iPad)",
  });
  await flush(eventLog);

  const lines = readFileSync(filePath, "utf8")
    .split("\n")
    .filter((line) => line.length > 0)
    .map((line) => JSON.parse(line));

  assert.equal(lines.length, 2);
  assert.equal(lines[0].event, "sidecar-start");
  assert.equal(lines[0].pid, 42);
  assert.equal(lines[0].ts, "2026-05-29T00:00:00.000Z");
  assert.equal(lines[1].event, "browser-connect");
  assert.equal(lines[1].userAgent, "Mozilla/5.0 (iPad)");
});

test("BridgeEventLog truncates oversized payloads when verbose", () => {
  const eventLog = new BridgeEventLog({ filePath: null, verbose: true });
  const giantPayload = "x".repeat(8000);
  const truncated = eventLog.truncateDetail(giantPayload);
  assert.ok(truncated.length < giantPayload.length);
  assert.ok(truncated.includes("bytes truncated"));
});

test("BridgeEventLog returns null detail for nullish payloads", () => {
  const eventLog = new BridgeEventLog({ filePath: null });
  assert.equal(eventLog.truncateDetail(null), null);
  assert.equal(eventLog.truncateDetail(undefined), null);
});

test("BridgeEventLog write is a no-op when no file path is provided", () => {
  const eventLog = new BridgeEventLog({ filePath: null });
  eventLog.write("ignored", { value: 1 });
  eventLog.close();
});

test("NULL_BRIDGE_EVENT_LOG is a safe no-op sink", () => {
  NULL_BRIDGE_EVENT_LOG.write("any-event", { value: 1 });
  assert.equal(NULL_BRIDGE_EVENT_LOG.truncateDetail({ a: 1 }), null);
  NULL_BRIDGE_EVENT_LOG.close();
});

test("resolveBridgeLogPath honors the explicit env override", () => {
  assert.equal(
    resolveBridgeLogPath({
      env: { O3_CODE_BRIDGE_LOG_PATH: "/tmp/custom-bridge.log" },
    }),
    "/tmp/custom-bridge.log",
  );
  assert.equal(resolveBridgeLogPath({ env: {} }), null);
  assert.equal(
    resolveBridgeLogPath({ env: { O3_CODE_BRIDGE_LOG_PATH: "   " } }),
    null,
  );
});
