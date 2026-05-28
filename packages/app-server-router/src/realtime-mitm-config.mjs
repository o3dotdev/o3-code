export function createRealtimeMitmChildEnv({ caCertPath, env, proxyUrl } = {}) {
  if (!proxyUrl) {
    throw Error("Realtime MITM Proxy requires a child proxy URL");
  }
  if (!caCertPath) {
    throw Error("Realtime MITM Proxy requires a CA certificate path");
  }

  return {
    ...env,
    CODEX_CA_CERTIFICATE: caCertPath,
    HTTP_PROXY: proxyUrl,
    HTTPS_PROXY: proxyUrl,
  };
}
