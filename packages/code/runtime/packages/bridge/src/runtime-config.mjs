import os from "node:os";

export const LOOPBACK_HOST = "127.0.0.1";

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
  sidecarPort = null,
  cdpPort = null,
  networkInterfaces = os.networkInterfaces(),
} = {}) {
  const sidecarHost = LOOPBACK_HOST;
  const cdpHost = LOOPBACK_HOST;
  const protocol = "http";
  const lanAddresses = getLanIPv4Addresses(networkInterfaces);
  const browserHost = sidecarHost;

  return {
    browserHost,
    browserUrl:
      sidecarPort == null
        ? null
        : `${protocol}://${browserHost}:${sidecarPort}/`,
    cdpHost,
    cdpPort,
    lanAddresses,
    protocol,
    remoteEnabled: false,
    sidecarHost,
    sidecarPort,
  };
}
