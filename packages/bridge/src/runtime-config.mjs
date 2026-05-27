import os from "node:os";

export const LOOPBACK_HOST = "127.0.0.1";
export const REMOTE_BIND_HOST = "0.0.0.0";

export function isBridgeRemoteEnabled(env = process.env) {
  return env.O3_CODE_BRIDGE_REMOTE === "1";
}

export function getLanIPv4Addresses(
  networkInterfaces = os.networkInterfaces(),
) {
  const addresses = [];
  for (const entries of Object.values(networkInterfaces)) {
    for (const entry of entries ?? []) {
      if (
        entry == null ||
        entry.internal ||
        entry.address == null ||
        (entry.family !== "IPv4" && entry.family !== 4)
      ) {
        continue;
      }

      if (!addresses.includes(entry.address)) {
        addresses.push(entry.address);
      }
    }
  }

  return addresses;
}

export function resolveBridgeRuntimeConfig({
  env = process.env,
  sidecarPort = null,
  cdpPort = null,
  networkInterfaces = os.networkInterfaces(),
} = {}) {
  const remoteEnabled = isBridgeRemoteEnabled(env);
  const sidecarHost =
    env.O3_CODE_BRIDGE_HOST?.trim() ||
    (remoteEnabled ? REMOTE_BIND_HOST : LOOPBACK_HOST);
  const cdpHost = env.O3_CODE_BRIDGE_CDP_HOST?.trim() || LOOPBACK_HOST;
  const protocol = remoteEnabled ? "https" : "http";
  const lanAddresses = getLanIPv4Addresses(networkInterfaces);
  const browserHost = remoteEnabled
    ? lanAddresses[0] || LOOPBACK_HOST
    : sidecarHost;
  const certPath = env.O3_CODE_BRIDGE_CERT_PATH?.trim() || null;
  const keyPath = env.O3_CODE_BRIDGE_KEY_PATH?.trim() || null;

  return {
    browserHost,
    browserUrl:
      sidecarPort == null
        ? null
        : `${protocol}://${browserHost}:${sidecarPort}/`,
    cdpHost,
    cdpPort,
    certPath,
    keyPath,
    lanAddresses,
    protocol,
    remoteEnabled,
    sidecarHost,
    sidecarPort,
  };
}
