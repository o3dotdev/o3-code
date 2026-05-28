export function createBridgeRequestDiagnostics({
  debug = false,
  logger = console,
  now = () => performance.now(),
} = {}) {
  const seen = new Set();

  return {
    start({ method, urlPathname }) {
      const startedAt = now();
      const kind = classifyRequest({ method, urlPathname });
      const shouldLog = debug || (kind != null && !seen.has(kind));

      if (kind != null) {
        seen.add(kind);
      }

      return {
        finish(fields = {}) {
          if (!shouldLog) {
            return;
          }

          const durationMs = Math.round(now() - startedAt);
          const payload = formatFields({
            path: urlPathname,
            durationMs,
            ...fields,
          });
          const prefix =
            kind == null
              ? "[bridge] request"
              : `[bridge] first ${getRequestKindLabel(kind)}`;
          logger.log(`${prefix} ${payload}`);
        },
      };
    },
  };
}

export function classifyRequest({ method, urlPathname }) {
  if (method !== "GET" && method !== "HEAD") {
    return null;
  }

  if (urlPathname === "/" || urlPathname.endsWith("/index.html")) {
    return "browser-shell";
  }

  if (urlPathname === "/bridge-shim.js") {
    return "bridge-shim";
  }

  if (urlPathname.startsWith("/assets/") && urlPathname.endsWith(".js")) {
    return "app-asset";
  }

  return null;
}

function getRequestKindLabel(kind) {
  switch (kind) {
    case "browser-shell":
      return "browser shell request";
    case "bridge-shim":
      return "bridge shim request";
    case "app-asset":
      return "app asset request";
    default:
      return "request";
  }
}

function formatFields(fields) {
  return Object.entries(fields)
    .filter(([, value]) => value != null)
    .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
    .join(" ");
}
