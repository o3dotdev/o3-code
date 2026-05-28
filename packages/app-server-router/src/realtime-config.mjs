export const REALTIME_API_KEY_ENV = "O3_CODE_REALTIME_API_KEY";
export const REALTIME_BASE_URL_ENV = "O3_CODE_REALTIME_BASE_URL";
export const DISABLE_REALTIME_OVERRIDE_ENV =
  "O3_CODE_DISABLE_REALTIME_OVERRIDE";

const DEFAULT_REALTIME_BASE_URL = "https://api.openai.com/v1";
const SUPPORTED_SCHEMES = new Set(["http:", "https:", "ws:", "wss:"]);
const SUPPORTED_CALL_SCHEMES = new Set(["http:", "https:"]);

export function resolveRealtimeOverride({ env = process.env } = {}) {
  if (env[DISABLE_REALTIME_OVERRIDE_ENV] === "1") {
    return null;
  }

  const apiKey = env[REALTIME_API_KEY_ENV]?.trim();
  if (!apiKey) {
    return null;
  }

  const upstreamCallsBaseUrl = normalizeRealtimeCallsBaseUrl(
    env[REALTIME_BASE_URL_ENV] ?? DEFAULT_REALTIME_BASE_URL,
  );

  return {
    apiKey,
    upstreamCallsBaseUrl,
  };
}

export function normalizeRealtimeBaseUrl(rawValue) {
  const value = String(rawValue ?? "").trim();
  if (!value) {
    throw Error(`${REALTIME_BASE_URL_ENV} must not be empty when set`);
  }

  let parsed;
  try {
    parsed = new URL(value);
  } catch (error) {
    throw Error(`${REALTIME_BASE_URL_ENV} must be a valid URL: ${value}`);
  }

  if (!SUPPORTED_SCHEMES.has(parsed.protocol)) {
    throw Error(
      `${REALTIME_BASE_URL_ENV} must use http, https, ws, or wss: ${value}`,
    );
  }
  if (parsed.username || parsed.password) {
    throw Error(`${REALTIME_BASE_URL_ENV} must not include credentials`);
  }
  if (parsed.search || parsed.hash) {
    throw Error(`${REALTIME_BASE_URL_ENV} must not include query or fragment`);
  }

  const websocketProtocol = toWebSocketProtocol(parsed.protocol);
  const path = normalizeBasePath(parsed.pathname, value);
  return new URL(`${websocketProtocol}//${parsed.host}${path}/realtime`);
}

export function normalizeRealtimeCallsBaseUrl(rawValue) {
  const parsed = parseRealtimeBaseUrl(rawValue, SUPPORTED_CALL_SCHEMES, [
    "http",
    "https",
  ]);
  const path = normalizeBasePath(parsed.pathname, String(rawValue ?? ""));
  return new URL(`${parsed.protocol}//${parsed.host}${path}`);
}

function parseRealtimeBaseUrl(rawValue, supportedSchemes, schemeNames) {
  const value = String(rawValue ?? "").trim();
  if (!value) {
    throw Error(`${REALTIME_BASE_URL_ENV} must not be empty when set`);
  }

  let parsed;
  try {
    parsed = new URL(value);
  } catch {
    throw Error(`${REALTIME_BASE_URL_ENV} must be a valid URL: ${value}`);
  }

  if (!supportedSchemes.has(parsed.protocol)) {
    throw Error(
      `${REALTIME_BASE_URL_ENV} must use ${schemeNames.join(", ")}: ${value}`,
    );
  }
  if (parsed.username || parsed.password) {
    throw Error(`${REALTIME_BASE_URL_ENV} must not include credentials`);
  }
  if (parsed.search || parsed.hash) {
    throw Error(`${REALTIME_BASE_URL_ENV} must not include query or fragment`);
  }

  return parsed;
}

function toWebSocketProtocol(protocol) {
  if (protocol === "https:" || protocol === "wss:") {
    return "wss:";
  }
  return "ws:";
}

function normalizeBasePath(pathname, originalValue) {
  const normalizedPath = pathname.replace(/\/+$/u, "") || "";
  if (normalizedPath === "" || normalizedPath === "/") {
    return "/v1";
  }
  if (normalizedPath === "/v1") {
    return "/v1";
  }

  throw Error(
    `${REALTIME_BASE_URL_ENV} must be an origin or /v1 base URL: ${originalValue}`,
  );
}
