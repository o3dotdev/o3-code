import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { O3CodeConfigStore } from "../src/o3-code-config.mjs";
import {
  BridgeModeSupervisor,
  WEB_ACCESS_STATUS_CODES,
} from "../src/supervisor.mjs";

test("BridgeModeSupervisor starts with an allocated persisted localhost port", async () => {
  const { supervisor, store, spawned } = await createSupervisor({
    config: { webAccess: { enabled: true, exposure: "localhost", port: null } },
    allocatePort: async () => 49152,
  });

  await supervisor.initialize();

  assert.deepEqual(supervisor.getStatus(), {
    state: "running",
    url: "http://127.0.0.1:49152/",
    port: 49152,
  });
  assert.equal((await store.readConfig()).webAccess.port, 49152);
  assert.equal(spawned.length, 1);
  assert.equal(spawned[0].options.env.O3_CODE_BRIDGE_HOST, "127.0.0.1");
  assert.equal(spawned[0].options.env.O3_CODE_BRIDGE_CDP_HOST, "127.0.0.1");
});

test("BridgeModeSupervisor reports port_unavailable without reallocating persisted port", async () => {
  const { supervisor, store, spawned } = await createSupervisor({
    config: {
      webAccess: { enabled: true, exposure: "localhost", port: 49153 },
    },
    isPortAvailable: async () => false,
  });

  await supervisor.initialize();

  assert.deepEqual(supervisor.getStatus(), {
    state: "failed",
    reason: "Web access port 49153 is already in use.",
    code: WEB_ACCESS_STATUS_CODES.PORT_UNAVAILABLE,
  });
  assert.equal((await store.readConfig()).webAccess.port, 49153);
  assert.equal(spawned.length, 0);
});

test("BridgeModeSupervisor reports cdp_unavailable when private CDP is missing", async () => {
  const { supervisor, spawned } = await createSupervisor({
    config: {
      webAccess: { enabled: true, exposure: "localhost", port: 49154 },
    },
    env: {},
  });

  await supervisor.initialize();

  assert.equal(supervisor.getStatus().state, "failed");
  assert.equal(
    supervisor.getStatus().code,
    WEB_ACCESS_STATUS_CODES.CDP_UNAVAILABLE,
  );
  assert.equal(spawned.length, 0);
});

test("BridgeModeSupervisor moves to sidecar_exit when the child exits", async () => {
  const { supervisor, spawned } = await createSupervisor({
    config: {
      webAccess: { enabled: true, exposure: "localhost", port: 49155 },
    },
  });

  await supervisor.initialize();
  spawned[0].child.emit("exit", 1, null);

  assert.equal(supervisor.getStatus().state, "failed");
  assert.equal(
    supervisor.getStatus().code,
    WEB_ACCESS_STATUS_CODES.SIDECAR_EXIT,
  );
});

test("BridgeModeSupervisor stops sidecar while keeping persisted port", async () => {
  const { supervisor, store, spawned } = await createSupervisor({
    config: {
      webAccess: { enabled: true, exposure: "localhost", port: 49156 },
    },
  });

  await supervisor.initialize();
  const config = await store.patchWebAccess({ enabled: false });
  await supervisor.applyConfig(config);

  assert.deepEqual(supervisor.getStatus(), { state: "off" });
  assert.equal((await store.readConfig()).webAccess.port, 49156);
  assert.equal(spawned[0].child.killed, true);
});

test("BridgeModeSupervisor resetPort is only allowed while stopped or failed", async () => {
  const { supervisor, store } = await createSupervisor({
    config: {
      webAccess: { enabled: true, exposure: "localhost", port: 49157 },
    },
  });

  await supervisor.initialize();
  await assert.rejects(() => supervisor.resetPort(), /only be reset/);
  await supervisor.stop();
  await supervisor.resetPort();

  assert.equal((await store.readConfig()).webAccess.port, null);
});

async function createSupervisor({
  config,
  allocatePort = async () => 60000,
  env = { O3_CODE_BRIDGE_CDP_PORT: "60001" },
  isPortAvailable = async () => true,
} = {}) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "o3-supervisor-"));
  const store = new O3CodeConfigStore({
    configPath: path.join(root, "config.json"),
  });
  await store.writeConfig(config);

  const spawned = [];
  const supervisor = new BridgeModeSupervisor({
    allocatePort,
    configStore: store,
    desktopRoot: path.join(root, "apps", "desktop"),
    env,
    isPortAvailable,
    repoRoot: root,
    rm: async () => {},
    spawn(command, args, options) {
      const child = new FakeChild();
      spawned.push({ args, child, command, options });
      return child;
    },
    waitForCdp: async () => {},
    waitForSidecar: async ({ url }) => {
      assert.match(url, /^http:\/\/127\.0\.0\.1:\d+\/$/);
    },
  });

  return { root, spawned, store, supervisor };
}

class FakeChild extends EventEmitter {
  killed = false;

  kill() {
    this.killed = true;
    queueMicrotask(() => {
      this.emit("exit", 0, null);
    });
  }
}
