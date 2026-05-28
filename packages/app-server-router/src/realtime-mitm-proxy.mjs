import http from "node:http";
import https from "node:https";

import { getLocal } from "mockttp";

import {
  CHATGPT_REALTIME_CALLS_URL,
  createRealtimeCallMultipartBody,
  createRealtimeCallsUrl,
  parseChatGptRealtimeCallRequest,
} from "./realtime-call-shape.mjs";
import { generateRealtimeMitmCA } from "./realtime-mitm-cert.mjs";

const LOCAL_HOST = "127.0.0.1";
const HOP_BY_HOP_HEADERS = new Set([
  "connection",
  "content-length",
  "host",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
]);
const CHATGPT_REALTIME_SIDEBAND_URL = /^\/backend-api\/codex\/realtime\/.+/u;
const CHATGPT_REALTIME_PATH_PREFIX = "/backend-api/codex/realtime/";

export async function startRealtimeMitmProxy({
  apiKey,
  generateCA = generateRealtimeMitmCA,
  mockttp = getLocal,
  stderr = process.stderr,
  upstreamCallsBaseUrl,
} = {}) {
  if (!apiKey) {
    throw Error("Realtime MITM Proxy requires an API key");
  }
  if (!(upstreamCallsBaseUrl instanceof URL)) {
    throw Error("Realtime MITM Proxy requires a normalized upstream base URL");
  }

  const ca = await generateCA();
  const server = mockttp({
    https: {
      certPath: ca.certPath,
      keyPath: ca.keyPath,
    },
  });
  const sidebandProxy = await startRealtimeSidebandProxy({
    apiKey,
    upstreamCallsBaseUrl,
  });

  let serverStarted = false;
  try {
    await server.start(0, LOCAL_HOST);
    serverStarted = true;
    await configureRules({
      apiKey,
      server,
      sidebandProxy,
      upstreamCallsBaseUrl,
    });
  } catch (error) {
    if (serverStarted) {
      await server.stop();
    }
    await sidebandProxy.close();
    throw error;
  }

  diagnostics(
    stderr,
    `Realtime MITM Proxy listening on ${LOCAL_HOST}:${server.port}`,
    apiKey,
    ca.certPath,
  );

  return {
    caCertPath: ca.certPath,
    close: async () => {
      try {
        await server.stop();
      } finally {
        await sidebandProxy.close();
      }
    },
    host: LOCAL_HOST,
    port: server.port,
    proxyUrl: `http://${LOCAL_HOST}:${server.port}`,
  };
}

async function configureRules({
  apiKey,
  server,
  sidebandProxy,
  upstreamCallsBaseUrl,
}) {
  await server
    .forPost(CHATGPT_REALTIME_CALLS_URL)
    .thenCallback((request) =>
      handleRealtimeCallRequest({ apiKey, request, upstreamCallsBaseUrl }),
    );

  await server
    .forAnyWebSocket(CHATGPT_REALTIME_SIDEBAND_URL)
    .forHostname("chatgpt.com")
    .thenForwardTo(sidebandProxy.forwardUrl);
  await server.forGet("/health").thenReply(404, "");
  await server.forAnyRequest().thenPassThrough();
  await server.forAnyWebSocket().thenPassThrough();
}

async function startRealtimeSidebandProxy({ apiKey, upstreamCallsBaseUrl }) {
  const sockets = new Set();
  const server = http.createServer((_request, response) => {
    response.writeHead(426, { Connection: "close" });
    response.end();
  });

  server.on("connection", (socket) => {
    sockets.add(socket);
    socket.once("close", () => sockets.delete(socket));
  });

  server.on("upgrade", (request, socket, head) => {
    void handleSidebandUpgrade({
      apiKey,
      head,
      request,
      socket,
      upstreamCallsBaseUrl,
    });
  });

  await listen(server, LOCAL_HOST, 0);
  const address = server.address();
  if (!address || typeof address === "string") {
    throw Error("Realtime sideband proxy did not bind a TCP port");
  }

  return {
    close: () => closeServer(server, sockets),
    forwardUrl: `http://${LOCAL_HOST}:${address.port}`,
    port: address.port,
  };
}

async function handleSidebandUpgrade({
  apiKey,
  head,
  request,
  socket,
  upstreamCallsBaseUrl,
}) {
  const targetUrl = createSidebandTargetUrl(request.url, upstreamCallsBaseUrl);
  if (!targetUrl) {
    rejectUpgrade(socket, 502, "Realtime Setup Failure");
    return;
  }

  const headers = createSidebandHeaders({
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
      socket.on("error", noop);
      upstreamSocket.on("error", noop);
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
    socket.write(formatHttpResponse(upstreamResponse));
    upstreamResponse.resume();
    upstreamResponse.once("end", () => socket.end());
  });
  upstreamRequest.once("error", () => {
    if (!settled) {
      rejectUpgrade(socket, 502, "Realtime Setup Failure");
    }
  });
  upstreamRequest.end();
}

function createSidebandTargetUrl(rawRequestUrl, upstreamCallsBaseUrl) {
  let requestUrl;
  try {
    requestUrl = new URL(rawRequestUrl ?? "/", "http://chatgpt.com");
  } catch {
    return null;
  }
  if (!requestUrl.pathname.startsWith(CHATGPT_REALTIME_PATH_PREFIX)) {
    return null;
  }

  const suffix = requestUrl.pathname.slice(CHATGPT_REALTIME_PATH_PREFIX.length);
  const targetUrl = new URL(upstreamCallsBaseUrl);
  targetUrl.protocol = targetUrl.protocol === "https:" ? "wss:" : "ws:";
  targetUrl.pathname = `${targetUrl.pathname.replace(
    /\/+$/u,
    "",
  )}/realtime/${suffix}`;
  targetUrl.search = requestUrl.search;
  return targetUrl;
}

function createSidebandHeaders({ apiKey, headers, targetUrl }) {
  const upstreamHeaders = {};
  for (const [name, value] of Object.entries(headers)) {
    if (HOP_BY_HOP_HEADERS.has(name.toLowerCase())) {
      continue;
    }
    upstreamHeaders[name] = value;
  }

  upstreamHeaders.connection = "Upgrade";
  upstreamHeaders.host = targetUrl.host;
  upstreamHeaders.upgrade = "websocket";
  upstreamHeaders.authorization = `Bearer ${apiKey}`;
  return upstreamHeaders;
}

async function handleRealtimeCallRequest({
  apiKey,
  request,
  upstreamCallsBaseUrl,
}) {
  try {
    const callRequest = await parseChatGptRealtimeCallRequest(request);
    const upstreamResponse = await forwardRealtimeCall({
      apiKey,
      callRequest,
      upstreamCallsBaseUrl,
    });

    return upstreamResponse;
  } catch (error) {
    return {
      body: `Realtime setup failure: ${formatError(error)}`,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
      statusCode: 502,
    };
  }
}

async function forwardRealtimeCall({
  apiKey,
  callRequest,
  upstreamCallsBaseUrl,
}) {
  const upstreamUrl = createRealtimeCallsUrl(upstreamCallsBaseUrl);
  const { body, contentType } = createRealtimeCallMultipartBody(callRequest);
  const response = await fetch(upstreamUrl, {
    body,
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": contentType,
    },
    method: "POST",
  });
  const responseBody = Buffer.from(await response.arrayBuffer());

  return {
    body: responseBody,
    headers: filterResponseHeaders(response.headers),
    statusCode: response.status,
  };
}

function filterResponseHeaders(headers) {
  const filtered = {};
  for (const [name, value] of headers) {
    if (HOP_BY_HOP_HEADERS.has(name.toLowerCase())) {
      continue;
    }
    filtered[name] = value;
  }
  return filtered;
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
  const statusMessage = response.statusMessage || "Realtime Setup Failure";
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

function diagnostics(stderr, message, ...secrets) {
  stderr.write(`[o3-app-server-router] ${redact(message, secrets)}\n`);
}

function redact(value, secrets) {
  let redacted = String(value).replace(
    /authorization\s*:\s*bearer\s+[^\s,;]+/giu,
    "authorization: Bearer <redacted>",
  );
  for (const secret of secrets) {
    if (secret) {
      redacted = redacted.split(secret).join("<redacted>");
    }
  }
  return redacted;
}

function formatError(error) {
  return error instanceof Error ? error.message : String(error);
}

function noop() {}
