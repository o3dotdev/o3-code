import assert from "node:assert/strict";
import test from "node:test";

import {
  getLanIPv4Addresses,
  resolveBridgeRuntimeConfig,
} from "../src/runtime-config.mjs";

const networkInterfaces = {
  en0: [
    {
      address: "192.168.1.25",
      family: "IPv4",
      internal: false,
    },
  ],
  lo0: [
    {
      address: "127.0.0.1",
      family: "IPv4",
      internal: true,
    },
  ],
};

test("getLanIPv4Addresses returns non-internal IPv4 addresses", () => {
  assert.deepEqual(getLanIPv4Addresses(networkInterfaces), ["192.168.1.25"]);
});

test("resolveBridgeRuntimeConfig keeps the default browser URL local-only", () => {
  const config = resolveBridgeRuntimeConfig({
    env: {},
    networkInterfaces,
    sidecarPort: 49152,
  });

  assert.equal(config.remoteEnabled, false);
  assert.equal(config.sidecarHost, "127.0.0.1");
  assert.equal(config.cdpHost, "127.0.0.1");
  assert.equal(config.browserUrl, "http://127.0.0.1:49152/");
});

test("resolveBridgeRuntimeConfig uses HTTPS and loopback CDP in remote mode", () => {
  const config = resolveBridgeRuntimeConfig({
    env: { O3_CODE_BRIDGE_REMOTE: "1" },
    networkInterfaces,
    sidecarPort: 49152,
  });

  assert.equal(config.remoteEnabled, true);
  assert.equal(config.protocol, "https");
  assert.equal(config.sidecarHost, "0.0.0.0");
  assert.equal(config.cdpHost, "127.0.0.1");
  assert.equal(config.browserUrl, "https://192.168.1.25:49152/");
});

test("resolveBridgeRuntimeConfig preserves certificate overrides", () => {
  const config = resolveBridgeRuntimeConfig({
    env: {
      O3_CODE_BRIDGE_CERT_PATH: "/tmp/cert.pem",
      O3_CODE_BRIDGE_KEY_PATH: "/tmp/key.pem",
      O3_CODE_BRIDGE_REMOTE: "1",
    },
    networkInterfaces,
    sidecarPort: 49152,
  });

  assert.equal(config.certPath, "/tmp/cert.pem");
  assert.equal(config.keyPath, "/tmp/key.pem");
});
