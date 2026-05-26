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
import { BridgeRouter } from "./router.mjs";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
  "..",
);

const host = process.env.O3_CODE_BRIDGE_HOST || "127.0.0.1";
const port = Number(process.env.O3_CODE_BRIDGE_PORT || "0");
const cdpPort = Number(process.env.O3_CODE_BRIDGE_CDP_PORT || "0");
const webviewDir =
  process.env.O3_CODE_BRIDGE_WEBVIEW_DIR ||
  path.join(repoRoot, "apps", "desktop", "app", "webview");
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

const cdpClient = new CdpClient({ cdpPort, cdpHost: host, targetUrl });
const router = new BridgeRouter({ hostTransport: cdpClient });
cdpClient.on("host-event", (event) => router.handleHostEvent(event));
cdpClient.connect().catch((error) => {
  console.error("[bridge] initial CDP connection failed", error);
});

const server = http.createServer(async (request, response) => {
  try {
    await handleHttpRequest(request, response);
  } catch (error) {
    console.error("[bridge] request failed", error);
    if (!response.headersSent) {
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    }
    response.end("Bridge sidecar request failed.");
  }
});

server.on("upgrade", (request, socket, head) => {
  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
  if (url.pathname !== "/bridge") {
    socket.destroy();
    return;
  }

  const webSocket = acceptWebSocketUpgrade(request, socket, head);
  router.attachBrowser(webSocket);
});

server.listen(port, host, () => {
  console.log(`[bridge] listening at http://${host}:${port}/`);
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
  await new Promise((resolve) => server.close(resolve));
  await rm(stageDir, { force: true, recursive: true });
}

async function handleHttpRequest(request, response) {
  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);

  if (url.pathname === "/healthz") {
    sendJson(response, {
      ok: true,
      activeSessionId: router.activeSessionId,
    });
    return;
  }

  if (request.method === "POST" && url.pathname === "/bridge/stage-file") {
    await handleStageFile(request, response);
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { allow: "GET, HEAD, POST" });
    response.end();
    return;
  }

  if (url.pathname === "/bridge-shim.js") {
    await sendFile(response, path.join(publicDir, "bridge-shim.js"));
    return;
  }

  const assetPath = resolveWebviewPath(url.pathname);
  if (assetPath == null) {
    response.writeHead(404);
    response.end();
    return;
  }

  if (assetPath.endsWith("index.html")) {
    const html = await readFile(assetPath, "utf8");
    response.writeHead(200, {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    });
    response.end(injectBridgeShim(html));
    return;
  }

  await sendFile(response, assetPath);
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

function resolveWebviewPath(urlPathname) {
  const pathname = decodeURIComponent(urlPathname);
  const relativePath =
    pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const candidate = path.resolve(webviewDir, relativePath);
  const relativeToRoot = path.relative(webviewDir, candidate);

  if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)) {
    return null;
  }

  return candidate;
}

function injectBridgeShim(html) {
  const withRelaxedCsp = html.replace(
    "https://cdn.openai.com;",
    "https://cdn.openai.com ws: wss:;",
  );

  return withRelaxedCsp.replace(
    /<head>/i,
    '<head>\n    <script src="/bridge-shim.js"></script>',
  );
}

async function sendFile(response, filePath) {
  let fileStat;
  try {
    fileStat = await stat(filePath);
  } catch {
    response.writeHead(404);
    response.end();
    return;
  }

  if (!fileStat.isFile()) {
    response.writeHead(404);
    response.end();
    return;
  }

  response.writeHead(200, {
    "content-type": getContentType(filePath),
    "content-length": fileStat.size,
    "cache-control": filePath.endsWith("bridge-shim.js")
      ? "no-store"
      : "public, max-age=31536000, immutable",
  });
  createReadStream(filePath).pipe(response);
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
    const header =
      payload.length < 126
        ? Buffer.from([0x81, payload.length])
        : payload.length <= 0xffff
          ? Buffer.from([0x81, 126, payload.length >> 8, payload.length & 0xff])
          : null;

    if (header == null) {
      throw Error("Bridge WebSocket payload is too large.");
    }

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
      Buffer.concat([Buffer.from([0x88, payload.length]), payload]),
    );
    this.socket.end();
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
      throw Error("Large Bridge WebSocket frames are not supported.");
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
      Buffer.concat([Buffer.from([0x8a, payload.length]), payload]),
    );
  }
}
