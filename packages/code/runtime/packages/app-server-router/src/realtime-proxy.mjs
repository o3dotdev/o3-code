import http from "node:http";
import https from "node:https";

const LOCAL_HOST = "127.0.0.1";
const REALTIME_PATH = "/v1/realtime";
const HOP_BY_HOP_HEADERS = new Set([
  "authorization",
  "host",
  "proxy-authorization",
]);

export async function startRealtimeProxy({
  apiKey,
  upstreamRealtimeUrl,
  stderr = process.stderr,
} = {}) {
  if (!apiKey) {
    throw Error("Realtime Proxy requires an API key");
  }
  if (!(upstreamRealtimeUrl instanceof URL)) {
    throw Error("Realtime Proxy requires a normalized upstream URL");
  }

  const sockets = new Set();
  const server = http.createServer((request, response) => {
    const requestUrl = parseRequestUrl(request.url ?? "/");
    if (!requestUrl) {
      response.writeHead(400, { Connection: "close" });
      response.end();
      return;
    }

    if (requestUrl.pathname === REALTIME_PATH) {
      response.writeHead(426, { Connection: "close" });
      response.end();
      return;
    }

    response.writeHead(404, { Connection: "close" });
    response.end();
  });

  server.on("connection", (socket) => {
    sockets.add(socket);
    socket.once("close", () => sockets.delete(socket));
  });

  server.on("upgrade", (request, socket, head) => {
    void handleUpgrade({
      apiKey,
      head,
      request,
      socket,
      stderr,
      upstreamRealtimeUrl,
    });
  });

  await listen(server, LOCAL_HOST, 0);

  const address = server.address();
  if (!address || typeof address === "string") {
    throw Error("Realtime Proxy did not bind a TCP port");
  }

  diagnostics(
    stderr,
    `Realtime Proxy listening on ${LOCAL_HOST}:${address.port} for ${redactUrl(upstreamRealtimeUrl)}`,
    apiKey,
  );

  return {
    host: LOCAL_HOST,
    port: address.port,
    baseUrl: `http://${LOCAL_HOST}:${address.port}/v1`,
    close: () => closeServer(server, sockets),
  };
}

async function handleUpgrade({
  apiKey,
  head,
  request,
  socket,
  stderr,
  upstreamRealtimeUrl,
}) {
  const requestUrl = parseRequestUrl(request.url ?? "/");
  if (!requestUrl) {
    rejectUpgrade(socket, 400, "Bad Request");
    return;
  }

  if (request.method !== "GET" || requestUrl.pathname !== REALTIME_PATH) {
    rejectUpgrade(socket, 404, "Not Found");
    return;
  }

  const targetUrl = new URL(upstreamRealtimeUrl);
  targetUrl.search = requestUrl.search;

  const headers = createUpstreamHeaders({
    apiKey,
    headers: request.headers,
    targetUrl,
  });

  const client = targetUrl.protocol === "wss:" ? https : http;
  const upstreamRequest = client.request({
    headers,
    host: targetUrl.hostname,
    method: "GET",
    path: `${targetUrl.pathname}${targetUrl.search}`,
    port: targetUrl.port || undefined,
    protocol: targetUrl.protocol === "wss:" ? "https:" : "http:",
  });

  let settled = false;

  upstreamRequest.once(
    "upgrade",
    (upstreamResponse, upstreamSocket, upstreamHead) => {
      settled = true;
      socket.write(formatUpgradeResponse(upstreamResponse));
      if (upstreamHead.length > 0) {
        socket.write(upstreamHead);
      }
      if (head.length > 0) {
        upstreamSocket.write(head);
      }

      socket.pipe(upstreamSocket);
      upstreamSocket.pipe(socket);
    },
  );

  upstreamRequest.once("response", (upstreamResponse) => {
    settled = true;
    diagnostics(
      stderr,
      `Realtime Proxy upstream rejected websocket handshake with ${upstreamResponse.statusCode ?? "unknown"}`,
      apiKey,
    );
    socket.write(formatHttpResponse(upstreamResponse));
    upstreamResponse.resume();
    upstreamResponse.once("end", () => socket.end());
  });

  upstreamRequest.once("error", (error) => {
    if (settled) {
      return;
    }
    diagnostics(
      stderr,
      `Realtime Proxy upstream websocket connection failed: ${formatError(error)}`,
      apiKey,
    );
    rejectUpgrade(socket, 502, "Bad Gateway");
  });

  upstreamRequest.end();
}

function createUpstreamHeaders({ apiKey, headers, targetUrl }) {
  const upstreamHeaders = {};
  for (const [name, value] of Object.entries(headers)) {
    if (HOP_BY_HOP_HEADERS.has(name.toLowerCase())) {
      continue;
    }
    upstreamHeaders[name] = value;
  }

  upstreamHeaders.host = targetUrl.host;
  upstreamHeaders.authorization = `Bearer ${apiKey}`;
  return upstreamHeaders;
}

function formatUpgradeResponse(response) {
  let output = `HTTP/${response.httpVersion} ${response.statusCode} ${response.statusMessage}\r\n`;
  for (const [name, value] of Object.entries(response.headers)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        output += `${name}: ${item}\r\n`;
      }
      continue;
    }
    if (value !== undefined) {
      output += `${name}: ${value}\r\n`;
    }
  }
  return `${output}\r\n`;
}

function formatHttpResponse(response) {
  const statusCode = response.statusCode ?? 502;
  const statusMessage = response.statusMessage || "Bad Gateway";
  return [
    `HTTP/${response.httpVersion} ${statusCode} ${statusMessage}`,
    "Connection: close",
    "Content-Length: 0",
    "",
    "",
  ].join("\r\n");
}

function rejectUpgrade(socket, statusCode, statusMessage) {
  socket.end(
    [
      `HTTP/1.1 ${statusCode} ${statusMessage}`,
      "Connection: close",
      "Content-Length: 0",
      "",
      "",
    ].join("\r\n"),
  );
}

function parseRequestUrl(url) {
  try {
    return new URL(url, "http://127.0.0.1");
  } catch {
    return null;
  }
}

function listen(server, host, port) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, host, () => {
      server.off("error", reject);
      resolve();
    });
  });
}

function closeServer(server, sockets) {
  for (const socket of sockets) {
    socket.destroy();
  }
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error && error.code !== "ERR_SERVER_NOT_RUNNING") {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

function diagnostics(stderr, message, apiKey) {
  stderr.write(`[o3-app-server-router] ${redact(message, apiKey)}\n`);
}

function redact(value, apiKey) {
  let redacted = String(value).replace(
    /authorization\s*:\s*bearer\s+[^\s,;]+/giu,
    "authorization: Bearer <redacted>",
  );
  if (apiKey) {
    redacted = redacted.split(apiKey).join("<redacted>");
  }
  return redacted;
}

function redactUrl(url) {
  const copy = new URL(url);
  copy.username = "";
  copy.password = "";
  return copy.toString();
}

function formatError(error) {
  return error instanceof Error ? error.message : String(error);
}
