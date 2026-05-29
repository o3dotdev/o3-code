#!/usr/bin/env node
import crypto from "node:crypto";
import { EventEmitter } from "node:events";
import { createReadStream } from "node:fs";
import { mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { CdpClient } from "./cdp-client.mjs";
import {
  BridgeEventLog,
  NULL_BRIDGE_EVENT_LOG,
  resolveBridgeLogPath,
} from "./event-log.mjs";
import { injectBridgeShell } from "./html-injection.mjs";
import { repoRoot, resolveBridgeWebviewDir } from "./paths.mjs";
import { createBridgeRequestDiagnostics } from "./request-diagnostics.mjs";
import { BridgeRouter } from "./router.mjs";
import {
  getWebviewCacheControl,
  resolveWebviewPath,
  shouldServeSpaFallback,
} from "./static-files.mjs";

const host = "127.0.0.1";
const cdpHost = "127.0.0.1";
const port = Number(process.env.O3_CODE_BRIDGE_PORT || "0");
const cdpPort = Number(process.env.O3_CODE_BRIDGE_CDP_PORT || "0");
const webviewDir = resolveBridgeWebviewDir();
const targetUrl = process.env.O3_CODE_BRIDGE_TARGET_URL;
const stageDir =
  process.env.O3_CODE_BRIDGE_STAGE_DIR ||
  path.join(os.tmpdir(), `o3-code-bridge-${process.pid}`);
const publicDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
);

if (!Number.isInteger(port) || port <= 0) {
  console.error("O3_CODE_BRIDGE_PORT must be set to a valid TCP port.");
  process.exit(1);
}

if (!Number.isInteger(cdpPort) || cdpPort <= 0) {
  console.error("O3_CODE_BRIDGE_CDP_PORT must be set to a valid TCP port.");
  process.exit(1);
}

if (!targetUrl) {
  console.error("O3_CODE_BRIDGE_TARGET_URL must be set.");
  process.exit(1);
}

await mkdir(stageDir, { recursive: true });

const debugEnabled = process.env.O3_CODE_BRIDGE_DEBUG === "1";
const bridgeLogPath = resolveBridgeLogPath();
const eventLog = bridgeLogPath
  ? new BridgeEventLog({ filePath: bridgeLogPath, verbose: debugEnabled })
  : NULL_BRIDGE_EVENT_LOG;
eventLog.write("sidecar-start", {
  pid: process.pid,
  port,
  cdpPort,
  webviewDir,
  targetUrl,
  debug: debugEnabled,
});

const cdpClient = new CdpClient({ cdpPort, cdpHost, targetUrl });
const router = new BridgeRouter({ hostTransport: cdpClient, eventLog });
const requestDiagnostics = createBridgeRequestDiagnostics({
  debug: debugEnabled,
  logger: console,
});
cdpClient.on("host-event", (event) => router.handleHostEvent(event));
cdpClient.connect().catch((error) => {
  console.error("[bridge] initial CDP connection failed", error);
});

const protocol = "http";
const requestListener = async (request, response) => {
  try {
    await handleHttpRequest(request, response);
  } catch (error) {
    console.error("[bridge] request failed", error);
    if (!response.headersSent) {
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    }
    response.end("Bridge sidecar request failed.");
  }
};
const server = http.createServer(requestListener);
const activeSockets = new Set();
const activeWebSockets = new Set();

server.on("connection", (socket) => {
  activeSockets.add(socket);
  socket.on("close", () => {
    activeSockets.delete(socket);
  });
});

server.on("upgrade", (request, socket, head) => {
  const url = new URL(
    request.url ?? "/",
    `${protocol}://${request.headers.host}`,
  );
  if (url.pathname !== "/bridge") {
    socket.destroy();
    return;
  }

  const webSocket = acceptWebSocketUpgrade(request, socket, head);
  if (webSocket == null) {
    return;
  }

  const userAgent = headerToString(request.headers["user-agent"]);
  const forwardedFor = headerToString(request.headers["x-forwarded-for"]);
  const remoteAddress = socket.remoteAddress ?? null;
  const connectedAt = Date.now();

  activeWebSockets.add(webSocket);
  const sessionId = router.attachBrowser(webSocket);
  eventLog.write("browser-connect", {
    sessionId,
    userAgent,
    forwardedFor,
    remoteAddress,
    host: request.headers.host ?? null,
  });
  console.log(
    `[bridge] browser connected session=${sessionId} userAgent=${JSON.stringify(
      userAgent ?? "",
    )}`,
  );

  webSocket.on("close", () => {
    activeWebSockets.delete(webSocket);
    eventLog.write("browser-disconnect", {
      sessionId,
      durationMs: Date.now() - connectedAt,
    });
    console.log(`[bridge] browser disconnected session=${sessionId}`);
  });
});

server.listen(port, host, () => {
  console.log(`[bridge] listening at ${protocol}://${host}:${port}/`);
  console.log(`[bridge] connecting to Electron CDP at ${cdpHost}:${cdpPort}`);
  console.log(`[bridge] serving webview from ${webviewDir}`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    cleanup().finally(() => process.exit(signal === "SIGINT" ? 130 : 143));
  });
}

process.on("exit", () => {
  rm(stageDir, { force: true, recursive: true }).catch(() => {});
});

async function cleanup() {
  closeActiveBridgeSockets();
  await new Promise((resolve) => server.close(resolve));
  eventLog.write("sidecar-stop", { pid: process.pid });
  await eventLog.close();
  await rm(stageDir, { force: true, recursive: true });
}

function headerToString(value) {
  if (value == null) {
    return null;
  }
  return Array.isArray(value) ? value.join(", ") : String(value);
}

function closeActiveBridgeSockets() {
  for (const webSocket of activeWebSockets) {
    webSocket.close(1001, "Bridge sidecar stopping.");
    webSocket.destroy();
  }

  for (const socket of activeSockets) {
    socket.destroy();
  }
}

async function handleHttpRequest(request, response) {
  const url = new URL(
    request.url ?? "/",
    `${protocol}://${request.headers.host}`,
  );
  const diagnostic = requestDiagnostics.start({
    method: request.method,
    urlPathname: url.pathname,
  });

  if (url.pathname === "/healthz") {
    sendJson(response, {
      ok: true,
      activeSessionId: router.activeSessionId,
    });
    diagnostic.finish({ statusCode: 200 });
    return;
  }

  if (request.method === "POST" && url.pathname === "/bridge/stage-file") {
    await handleStageFile(request, response);
    diagnostic.finish({ statusCode: 200 });
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { allow: "GET, HEAD, POST" });
    response.end();
    diagnostic.finish({ statusCode: 405 });
    return;
  }

  if (url.pathname === "/bridge-shim.js") {
    await sendFile(response, path.join(publicDir, "bridge-shim.js"), null, {
      diagnostic,
    });
    return;
  }

  const assetPath = resolveWebviewPath({
    urlPathname: url.pathname,
    webviewDir,
  });
  if (assetPath == null) {
    response.writeHead(404);
    response.end();
    diagnostic.finish({ statusCode: 404 });
    return;
  }

  if (assetPath.endsWith("index.html")) {
    await sendInjectedIndex(response, assetPath, { diagnostic });
    return;
  }

  const assetStat = await statFile(assetPath);
  if (assetStat?.isFile()) {
    await sendFile(response, assetPath, assetStat, { diagnostic });
    return;
  }

  if (
    shouldServeSpaFallback({
      method: request.method,
      urlPathname: url.pathname,
    })
  ) {
    await sendInjectedIndex(response, path.join(webviewDir, "index.html"), {
      diagnostic,
    });
    return;
  }

  response.writeHead(404);
  response.end();
  diagnostic.finish({ statusCode: 404 });
}

async function handleStageFile(request, response) {
  const originalName =
    request.headers["x-o3-file-name"]?.toString() || "browser-file";
  const safeName = path.basename(originalName).replaceAll(/[^\w.-]/g, "_");
  const stagedName = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;
  const stagedPath = path.join(stageDir, stagedName);
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  await writeFile(stagedPath, Buffer.concat(chunks));
  sendJson(response, {
    path: stagedPath,
    name: originalName,
  });
}

async function statFile(filePath) {
  try {
    return await stat(filePath);
  } catch {
    return null;
  }
}

async function sendFile(
  response,
  filePath,
  fileStat = null,
  { diagnostic = null } = {},
) {
  fileStat ??= await stat(filePath);
  response.once("finish", () => {
    diagnostic?.finish({
      bytes: fileStat.size,
      statusCode: response.statusCode,
    });
  });
  response.writeHead(200, {
    "content-type": getContentType(filePath),
    "content-length": fileStat.size,
    "cache-control": getWebviewCacheControl(filePath),
  });
  createReadStream(filePath).pipe(response);
}

async function sendInjectedIndex(
  response,
  indexPath,
  { diagnostic = null } = {},
) {
  const readStartedAt = performance.now();
  const html = await readFile(indexPath, "utf8");
  const htmlReadMs = Math.round(performance.now() - readStartedAt);
  const injectStartedAt = performance.now();
  const injectedHtml = injectBridgeShell(html, {
    debug: process.env.O3_CODE_BRIDGE_DEBUG === "1",
  });
  const htmlInjectMs = Math.round(performance.now() - injectStartedAt);
  response.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
    "cache-control": "no-store",
    "clear-site-data": '"cache"',
  });
  response.end(injectedHtml);
  diagnostic?.finish({
    bytes: Buffer.byteLength(injectedHtml),
    htmlInjectMs,
    htmlReadMs,
    statusCode: 200,
  });
}

function sendJson(response, payload) {
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(payload));
}

function getContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  switch (extension) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
    case ".mjs":
      return "text/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".woff":
      return "font/woff";
    case ".woff2":
      return "font/woff2";
    case ".ttf":
      return "font/ttf";
    default:
      return "application/octet-stream";
  }
}

function acceptWebSocketUpgrade(request, socket, head) {
  const key = request.headers["sec-websocket-key"];
  if (typeof key !== "string") {
    socket.destroy();
    return null;
  }

  const accept = crypto
    .createHash("sha1")
    .update(`${key}258EAFA5-E914-47DA-95CA-C5AB0DC85B11`)
    .digest("base64");

  socket.write(
    [
      "HTTP/1.1 101 Switching Protocols",
      "Upgrade: websocket",
      "Connection: Upgrade",
      `Sec-WebSocket-Accept: ${accept}`,
      "",
      "",
    ].join("\r\n"),
  );

  return new ServerWebSocket(socket, head);
}

class ServerWebSocket extends EventEmitter {
  #buffer = Buffer.alloc(0);
  #closed = false;

  constructor(socket, head) {
    super();
    this.socket = socket;
    if (head.length > 0) {
      this.#buffer = Buffer.concat([this.#buffer, head]);
    }
    socket.on("data", (chunk) => this.#handleData(chunk));
    socket.on("close", () => this.emit("close"));
    socket.on("error", () => {
      this.#closed = true;
      this.emit("close");
    });
  }

  send(message) {
    if (this.#closed) {
      return;
    }

    const payload = Buffer.from(String(message));
    const header = createWebSocketHeader(0x81, payload.length);

    this.socket.write(Buffer.concat([header, payload]));
  }

  close(code = 1000, reason = "") {
    if (this.#closed) {
      return;
    }

    this.#closed = true;
    const reasonBuffer = Buffer.from(reason);
    const payload = Buffer.alloc(2 + reasonBuffer.length);
    payload.writeUInt16BE(code, 0);
    reasonBuffer.copy(payload, 2);
    this.socket.write(
      Buffer.concat([createWebSocketHeader(0x88, payload.length), payload]),
    );
    this.socket.end();
  }

  destroy() {
    this.#closed = true;
    if (!this.socket.destroyed) {
      this.socket.destroy();
    }
  }

  #handleData(chunk) {
    this.#buffer = Buffer.concat([this.#buffer, chunk]);

    for (;;) {
      const frame = this.#readFrame();
      if (frame == null) {
        return;
      }

      if (frame.opcode === 0x8) {
        this.close();
        this.emit("close");
        return;
      }

      if (frame.opcode === 0x9) {
        this.#sendPong(frame.payload);
        continue;
      }

      if (frame.opcode === 0x1) {
        this.emit("message", frame.payload.toString("utf8"));
      }
    }
  }

  #readFrame() {
    if (this.#buffer.length < 2) {
      return null;
    }

    const first = this.#buffer[0];
    const second = this.#buffer[1];
    const opcode = first & 0x0f;
    const masked = (second & 0x80) !== 0;
    let length = second & 0x7f;
    let offset = 2;

    if (length === 126) {
      if (this.#buffer.length < offset + 2) {
        return null;
      }
      length = this.#buffer.readUInt16BE(offset);
      offset += 2;
    } else if (length === 127) {
      if (this.#buffer.length < offset + 8) {
        return null;
      }
      const high = this.#buffer.readUInt32BE(offset);
      const low = this.#buffer.readUInt32BE(offset + 4);
      offset += 8;
      if (high !== 0 || low > Number.MAX_SAFE_INTEGER) {
        throw Error("Bridge WebSocket frame is too large.");
      }
      length = low;
    }

    const maskLength = masked ? 4 : 0;
    if (this.#buffer.length < offset + maskLength + length) {
      return null;
    }

    const mask = masked ? this.#buffer.subarray(offset, offset + 4) : null;
    offset += maskLength;
    const payload = Buffer.from(this.#buffer.subarray(offset, offset + length));
    this.#buffer = this.#buffer.subarray(offset + length);

    if (mask != null) {
      for (let index = 0; index < payload.length; index += 1) {
        payload[index] ^= mask[index % 4];
      }
    }

    return { opcode, payload };
  }

  #sendPong(payload) {
    this.socket.write(
      Buffer.concat([createWebSocketHeader(0x8a, payload.length), payload]),
    );
  }
}

function createWebSocketHeader(opcodeByte, payloadLength) {
  if (payloadLength < 126) {
    return Buffer.from([opcodeByte, payloadLength]);
  }

  if (payloadLength <= 0xffff) {
    return Buffer.from([
      opcodeByte,
      126,
      payloadLength >> 8,
      payloadLength & 0xff,
    ]);
  }

  const header = Buffer.alloc(10);
  header[0] = opcodeByte;
  header[1] = 127;
  header.writeUInt32BE(Math.floor(payloadLength / 2 ** 32), 2);
  header.writeUInt32BE(payloadLength >>> 0, 6);
  return header;
}
