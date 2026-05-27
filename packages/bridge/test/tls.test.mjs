import assert from "node:assert/strict";
import test from "node:test";

import {
  buildBridgeTlsAltNames,
  ensureBridgeTlsCredentials,
} from "../src/tls.mjs";

test("buildBridgeTlsAltNames includes localhost and LAN addresses", () => {
  assert.deepEqual(buildBridgeTlsAltNames(["192.168.1.25"]), {
    dns: ["localhost"],
    ips: ["127.0.0.1", "::1", "192.168.1.25"],
  });
});

test("ensureBridgeTlsCredentials returns explicit cert and key paths", async () => {
  const credentials = await ensureBridgeTlsCredentials({
    env: {
      O3_CODE_BRIDGE_CERT_PATH: "/tmp/o3-cert.pem",
      O3_CODE_BRIDGE_KEY_PATH: "/tmp/o3-key.pem",
    },
  });

  assert.deepEqual(credentials, {
    certPath: "/tmp/o3-cert.pem",
    generated: false,
    keyPath: "/tmp/o3-key.pem",
  });
});

test("ensureBridgeTlsCredentials requires cert and key overrides together", async () => {
  await assert.rejects(
    () =>
      ensureBridgeTlsCredentials({
        env: { O3_CODE_BRIDGE_CERT_PATH: "/tmp/o3-cert.pem" },
      }),
    /O3_CODE_BRIDGE_CERT_PATH/,
  );
});
