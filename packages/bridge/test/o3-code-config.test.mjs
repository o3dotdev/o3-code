import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  DEFAULT_O3_CODE_CONFIG,
  O3CodeConfigStore,
  getDefaultO3CodeStateRoot,
  normalizeO3CodeConfig,
} from "../src/o3-code-config.mjs";

test("normalizeO3CodeConfig defaults missing and invalid Web access fields", () => {
  assert.deepEqual(normalizeO3CodeConfig({}), DEFAULT_O3_CODE_CONFIG);
  assert.deepEqual(
    normalizeO3CodeConfig({
      other: true,
      webAccess: {
        enabled: "yes",
        exposure: "lan",
        port: 70000,
      },
    }),
    {
      other: true,
      webAccess: {
        enabled: false,
        exposure: "localhost",
        port: null,
      },
    },
  );
});

test("getDefaultO3CodeStateRoot accepts launcher override", () => {
  assert.equal(
    getDefaultO3CodeStateRoot({ O3_CODE_STATE_ROOT: "/tmp/o3-code-test" }),
    "/tmp/o3-code-test",
  );
});

test("O3CodeConfigStore tolerantly reads missing and malformed config", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "o3-config-"));
  const configPath = path.join(root, "config.json");
  const store = new O3CodeConfigStore({ configPath });

  assert.deepEqual(await store.readConfig(), DEFAULT_O3_CODE_CONFIG);

  await fs.writeFile(configPath, "{ malformed", "utf8");
  const malformedStore = new O3CodeConfigStore({ configPath });
  assert.deepEqual(await malformedStore.readConfig(), DEFAULT_O3_CODE_CONFIG);
});

test("O3CodeConfigStore writes atomically and preserves unknown top-level keys", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "o3-config-"));
  const configPath = path.join(root, "config.json");
  const store = new O3CodeConfigStore({ configPath });

  await store.writeConfig({
    future: { value: true },
    webAccess: {
      enabled: true,
      exposure: "lan",
      port: 49152,
    },
  });

  assert.deepEqual(JSON.parse(await fs.readFile(configPath, "utf8")), {
    future: { value: true },
    webAccess: {
      enabled: true,
      exposure: "localhost",
      port: 49152,
    },
  });
});

test("O3CodeConfigStore patches and resets Web access port", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "o3-config-"));
  const store = new O3CodeConfigStore({
    configPath: path.join(root, "config.json"),
  });
  const observed = [];
  store.subscribe((config) => observed.push(config));

  await store.patchWebAccess({ enabled: true });
  await store.setWebAccessPort(49153);
  const config = await store.resetWebAccessPort();

  assert.equal(config.webAccess.enabled, true);
  assert.equal(config.webAccess.port, null);
  assert.equal(observed.length, 3);
});
