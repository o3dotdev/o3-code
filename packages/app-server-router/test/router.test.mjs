import assert from "node:assert/strict";
import { EventEmitter, once } from "node:events";
import http from "node:http";
import net from "node:net";
import { PassThrough, Readable, Writable } from "node:stream";
import { chmod, mkdir, mkdtemp, stat, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  normalizeRealtimeBaseUrl,
  normalizeRealtimeCallsBaseUrl,
} from "../src/realtime-config.mjs";
import { startRealtimeMitmProxy } from "../src/realtime-mitm-proxy.mjs";
import { startRealtimeProxy } from "../src/realtime-proxy.mjs";
import { proxyToExternalCodex } from "../src/router.mjs";

test("proxyToExternalCodex proxies bytes and args to external codex", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const binDir = path.join(root, "bin");
  await writeExecutable(
    binDir,
    "codex",
    ["#!/bin/sh", "printf 'args:%s\\n' \"$*\" >&2", "/bin/cat", ""].join("\n"),
  );

  const stdin = new PassThrough();
  const stdout = createCollectingWritable();
  const stderr = createCollectingWritable();
  stdin.end("json-rpc-line\n");

  const result = await proxyToExternalCodex({
    argv: ["app-server", "--analytics-default-enabled"],
    env: withoutRealtimeEnv({ PATH: binDir }),
    stdin,
    stdout,
    stderr,
    routerExecutablePath: path.join(root, "o3-app-server-router"),
  });

  assert.deepEqual(result, { code: 0, signal: null });
  assert.equal(stdout.body, "json-rpc-line\n");
  assert.equal(stderr.body, "args:app-server --analytics-default-enabled\n");
});

test("proxyToExternalCodex propagates child exit code", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const binDir = path.join(root, "bin");
  await writeExecutable(binDir, "codex", "#!/bin/sh\nexit 7\n");

  const result = await proxyToExternalCodex({
    argv: ["--version"],
    env: withoutRealtimeEnv({ PATH: binDir }),
    stdin: Readable.from([]),
    stdout: createCollectingWritable(),
    stderr: createCollectingWritable(),
    routerExecutablePath: path.join(root, "o3-app-server-router"),
  });

  assert.deepEqual(result, { code: 7, signal: null });
});

test("proxyToExternalCodex scopes realtime MITM env to child when realtime key is set", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const binDir = path.join(root, "bin");
  await writeExecutable(binDir, "codex", "#!/bin/sh\nexit 0\n");

  let capturedSpawn;
  const stdout = createCollectingWritable();
  const stderr = createCollectingWritable();
  const parentEnv = {
    ...withoutRealtimeEnv({
      PATH: binDir,
      SSL_CERT_FILE: "/tmp/parent-ca.pem",
    }),
    O3_CODE_REALTIME_API_KEY: "rt-secret",
    O3_CODE_REALTIME_BASE_URL: "http://127.0.0.1/v1",
  };
  const result = await proxyToExternalCodex({
    argv: [
      "app-server",
      "-c",
      'experimental_realtime_ws_base_url="http://user.example/v1"',
      "-c",
      'realtime.transport="webrtc"',
    ],
    env: parentEnv,
    spawn(command, args, options) {
      capturedSpawn = { args, command, options };
      const child = createFakeChild();
      queueMicrotask(() => child.emit("exit", 0, null));
      return child;
    },
    stdin: Readable.from([]),
    stdout,
    stderr,
    routerExecutablePath: path.join(root, "o3-app-server-router"),
  });

  assert.deepEqual(result, { code: 0, signal: null });
  assert.equal(capturedSpawn.command, path.join(binDir, "codex"));
  assert.deepEqual(capturedSpawn.args, [
    "app-server",
    "-c",
    'experimental_realtime_ws_base_url="http://user.example/v1"',
    "-c",
    'realtime.transport="webrtc"',
  ]);
  assert.equal(
    capturedSpawn.options.env.O3_CODE_REALTIME_API_KEY,
    parentEnv.O3_CODE_REALTIME_API_KEY,
  );
  assert.equal(
    capturedSpawn.options.env.HTTPS_PROXY,
    capturedSpawn.options.env.HTTP_PROXY,
  );
  assert.match(
    capturedSpawn.options.env.HTTPS_PROXY,
    /^http:\/\/127\.0\.0\.1:\d+$/u,
  );
  assert.match(
    capturedSpawn.options.env.CODEX_CA_CERTIFICATE,
    /o3-code-realtime-mitm-.+\/ca\.pem$/u,
  );
  assert.equal(capturedSpawn.options.env.SSL_CERT_FILE, "/tmp/parent-ca.pem");
  assert.equal(parentEnv.HTTPS_PROXY, undefined);
  assert.equal(parentEnv.HTTP_PROXY, undefined);
  assert.equal(parentEnv.CODEX_CA_CERTIFICATE, undefined);
  assert.equal(
    (await stat(capturedSpawn.options.env.CODEX_CA_CERTIFICATE)).mode & 0o777,
    0o600,
  );
  assert.equal(stdout.body, "");
  assert.match(stderr.body, /Realtime MITM Proxy listening/u);
  assert.equal(stderr.body.includes("rt-secret"), false);
  assert.equal(
    stderr.body.includes(capturedSpawn.options.env.CODEX_CA_CERTIFICATE),
    false,
  );
});

test("normalizeRealtimeBaseUrl accepts origin, /v1, and websocket schemes", () => {
  assert.equal(
    normalizeRealtimeBaseUrl("https://api.openai.com").toString(),
    "wss://api.openai.com/v1/realtime",
  );
  assert.equal(
    normalizeRealtimeBaseUrl("https://api.openai.com/v1").toString(),
    "wss://api.openai.com/v1/realtime",
  );
  assert.equal(
    normalizeRealtimeBaseUrl("ws://127.0.0.1:9000/v1").toString(),
    "ws://127.0.0.1:9000/v1/realtime",
  );
});

test("normalizeRealtimeCallsBaseUrl accepts origin and /v1 HTTP URLs", () => {
  assert.equal(
    normalizeRealtimeCallsBaseUrl("https://api.openai.com").toString(),
    "https://api.openai.com/v1",
  );
  assert.equal(
    normalizeRealtimeCallsBaseUrl("https://api.openai.com/v1").toString(),
    "https://api.openai.com/v1",
  );
  assert.equal(
    normalizeRealtimeCallsBaseUrl("http://127.0.0.1:9000/v1").toString(),
    "http://127.0.0.1:9000/v1",
  );
});

test("proxyToExternalCodex rejects invalid realtime base URL before spawning", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const binDir = path.join(root, "bin");
  await writeExecutable(binDir, "codex", "#!/bin/sh\nexit 0\n");

  let spawned = false;
  await assert.rejects(
    proxyToExternalCodex({
      argv: ["app-server"],
      env: {
        ...withoutRealtimeEnv({ PATH: binDir }),
        O3_CODE_REALTIME_API_KEY: "rt-secret",
        O3_CODE_REALTIME_BASE_URL: "ftp://example.com/v1",
      },
      spawn() {
        spawned = true;
        return createFakeChild();
      },
      stdin: Readable.from([]),
      stdout: createCollectingWritable(),
      stderr: createCollectingWritable(),
      routerExecutablePath: path.join(root, "o3-app-server-router"),
    }),
    /must use http, https/u,
  );

  assert.equal(spawned, false);
});

test("proxyToExternalCodex closes realtime proxy when child exits", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const binDir = path.join(root, "bin");
  await writeExecutable(binDir, "codex", "#!/bin/sh\nexit 0\n");

  let child;
  let capturedSpawn;
  const resultPromise = proxyToExternalCodex({
    argv: ["app-server"],
    env: {
      ...withoutRealtimeEnv({ PATH: binDir }),
      O3_CODE_REALTIME_API_KEY: "rt-secret",
      O3_CODE_REALTIME_BASE_URL: "http://127.0.0.1/v1",
    },
    spawn(command, args, options) {
      capturedSpawn = { args, command, options };
      child = createFakeChild();
      return child;
    },
    stdin: Readable.from([]),
    stdout: createCollectingWritable(),
    stderr: createCollectingWritable(),
    routerExecutablePath: path.join(root, "o3-app-server-router"),
  });

  await waitFor(() => capturedSpawn);
  const port = getMitmProxyPort(capturedSpawn.options.env);
  assert.equal(await httpStatus(port, "/health"), 404);

  child.emit("exit", 0, null);
  assert.deepEqual(await resultPromise, { code: 0, signal: null });
  await assertPortClosed(port);
});

test("proxyToExternalCodex closes realtime proxy when spawn emits error", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-router-"));
  const binDir = path.join(root, "bin");
  await writeExecutable(binDir, "codex", "#!/bin/sh\nexit 0\n");

  let capturedSpawn;
  const resultPromise = proxyToExternalCodex({
    argv: ["app-server"],
    env: {
      ...withoutRealtimeEnv({ PATH: binDir }),
      O3_CODE_REALTIME_API_KEY: "rt-secret",
      O3_CODE_REALTIME_BASE_URL: "http://127.0.0.1/v1",
    },
    spawn(command, args, options) {
      capturedSpawn = { args, command, options };
      const child = createFakeChild();
      queueMicrotask(() => child.emit("error", Error("spawn failed")));
      return child;
    },
    stdin: Readable.from([]),
    stdout: createCollectingWritable(),
    stderr: createCollectingWritable(),
    routerExecutablePath: path.join(root, "o3-app-server-router"),
  });

  const rejection = assert.rejects(resultPromise, /spawn failed/u);
  await waitFor(() => capturedSpawn);
  const port = getMitmProxyPort(capturedSpawn.options.env);
  await rejection;
  await assertPortClosed(port);
});

test("Realtime MITM Proxy passes through non-realtime HTTP traffic", async () => {
  const upstream = await startFakeHttpUpstream((request, response) => {
    upstream.records.push({
      headers: request.headers,
      method: request.method,
      url: request.url,
    });
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("passed through");
  });
  const proxy = await startRealtimeMitmProxy({
    apiKey: "rt-secret",
    stderr: createCollectingWritable(),
    upstreamCallsBaseUrl: upstream.baseUrl,
  });

  try {
    const response = await proxyHttpRequest({
      body: "payload",
      headers: { "content-type": "text/plain" },
      method: "POST",
      port: proxy.port,
      url: new URL("/not-realtime", upstream.baseUrl),
    });

    assert.equal(response.statusCode, 200);
    assert.equal(response.body, "passed through");
    assert.equal(upstream.records.length, 1);
    assert.equal(upstream.records[0].method, "POST");
    assert.equal(upstream.records[0].url, "/not-realtime");
  } finally {
    await proxy.close();
    await upstream.close();
  }
});

test("Realtime MITM Proxy converts ChatGPT realtime calls to public multipart API", async () => {
  const upstream = await startFakeHttpUpstream(async (request, response) => {
    const body = await readRequestBody(request);
    upstream.records.push({
      body,
      headers: request.headers,
      method: request.method,
      url: request.url,
    });
    response.writeHead(201, {
      "content-type": "application/sdp",
      location: "/v1/realtime/calls/rtc_test",
    });
    response.end("answer-sdp");
  });
  const stderr = createCollectingWritable();
  const proxy = await startRealtimeMitmProxy({
    apiKey: "rt-secret",
    stderr,
    upstreamCallsBaseUrl: upstream.baseUrl,
  });

  try {
    const response = await proxyHttpRequest({
      body: JSON.stringify({
        sdp: "offer-sdp",
        session: { model: "gpt-realtime", voice: "marin" },
      }),
      headers: {
        authorization: "Bearer inbound-secret",
        "content-type": "application/json",
      },
      method: "POST",
      port: proxy.port,
      url: new URL("https://chatgpt.com/backend-api/codex/realtime/calls"),
    });

    assert.equal(response.statusCode, 201);
    assert.equal(response.headers.location, "/v1/realtime/calls/rtc_test");
    assert.equal(response.body, "answer-sdp");
    assert.equal(upstream.records.length, 1);
    assert.equal(upstream.records[0].method, "POST");
    assert.equal(upstream.records[0].url, "/v1/realtime/calls");
    assert.equal(upstream.records[0].headers.authorization, "Bearer rt-secret");
    assert.notEqual(
      upstream.records[0].headers.authorization,
      "Bearer inbound-secret",
    );
    assert.match(
      upstream.records[0].headers["content-type"],
      /^multipart\/form-data; boundary=/u,
    );
    assert.match(upstream.records[0].body, /name="sdp"/u);
    assert.match(upstream.records[0].body, /Content-Type: application\/sdp/u);
    assert.match(upstream.records[0].body, /offer-sdp/u);
    assert.match(upstream.records[0].body, /name="session"/u);
    assert.match(upstream.records[0].body, /"model":"gpt-realtime"/u);
    assert.equal(stderr.body.includes("rt-secret"), false);
    assert.equal(stderr.body.includes("inbound-secret"), false);
    assert.equal(stderr.body.includes(proxy.caCertPath), false);
  } finally {
    await proxy.close();
    await upstream.close();
  }
});

test("Realtime MITM Proxy rewrites sideband websocket joins with realtime auth", async () => {
  const upstream = await startFakeRealtimeUpstream();
  const proxy = await startRealtimeMitmProxy({
    apiKey: "rt-secret",
    stderr: createCollectingWritable(),
    upstreamCallsBaseUrl: new URL(`http://127.0.0.1:${upstream.port}/v1`),
  });

  try {
    const client = await openProxyWebSocket(
      proxy.port,
      "http://chatgpt.com/backend-api/codex/realtime/calls/rtc_test/sideband?session=abc",
      {
        Authorization: "Bearer inbound-secret",
      },
    );
    client.socket.on("error", () => {});
    client.socket.end();

    assert.match(client.response, /^HTTP\/1\.1 101 Switching Protocols\r\n/u);
    assert.equal(upstream.records.length, 1);
    assert.equal(
      upstream.records[0].url,
      "/v1/realtime/calls/rtc_test/sideband?session=abc",
    );
    assert.equal(upstream.records[0].headers.authorization, "Bearer rt-secret");
    assert.notEqual(
      upstream.records[0].headers.authorization,
      "Bearer inbound-secret",
    );
  } finally {
    await proxy.close();
    await upstream.close();
  }
});

test("Realtime Proxy injects realtime key, strips inbound auth, and preserves query", async () => {
  const upstream = await startFakeRealtimeUpstream();
  const stderr = createCollectingWritable();
  const proxy = await startRealtimeProxy({
    apiKey: "rt-secret",
    stderr,
    upstreamRealtimeUrl: upstream.realtimeUrl,
  });

  try {
    const client = await openWebSocket(proxy.port, "/v1/realtime?model=test", {
      Authorization: "Bearer inbound-secret",
    });
    client.socket.end();

    assert.match(client.response, /^HTTP\/1\.1 101 Switching Protocols\r\n/u);
    assert.equal(upstream.records.length, 1);
    assert.equal(upstream.records[0].url, "/v1/realtime?model=test");
    assert.equal(upstream.records[0].headers.authorization, "Bearer rt-secret");
    assert.notEqual(
      upstream.records[0].headers.authorization,
      "Bearer inbound-secret",
    );
    assert.equal(stderr.body.includes("rt-secret"), false);
    assert.equal(stderr.body.includes("inbound-secret"), false);
  } finally {
    await proxy.close();
    await upstream.close();
  }
});

test("Realtime Proxy rejects non-realtime websocket paths and non-upgrade requests", async () => {
  const upstream = await startFakeRealtimeUpstream();
  const proxy = await startRealtimeProxy({
    apiKey: "rt-secret",
    stderr: createCollectingWritable(),
    upstreamRealtimeUrl: upstream.realtimeUrl,
  });

  try {
    const rejected = await openWebSocket(proxy.port, "/v1/not-realtime");
    rejected.socket.end();
    assert.match(rejected.response, /^HTTP\/1\.1 404 Not Found\r\n/u);
    assert.equal(await httpStatus(proxy.port, "/v1/realtime"), 426);
    assert.equal(await httpStatus(proxy.port, "/not-realtime"), 404);
    assert.equal(upstream.records.length, 0);
  } finally {
    await proxy.close();
    await upstream.close();
  }
});

test("Realtime Proxy forwards upstream handshake failure without logging secrets", async () => {
  const upstream = await startFakeRealtimeUpstream({
    onUpgrade(_request, socket) {
      socket.end(
        [
          "HTTP/1.1 401 Unauthorized",
          "Connection: close",
          "Content-Length: 0",
          "",
          "",
        ].join("\r\n"),
      );
    },
  });
  const stderr = createCollectingWritable();
  const proxy = await startRealtimeProxy({
    apiKey: "rt-secret",
    stderr,
    upstreamRealtimeUrl: upstream.realtimeUrl,
  });

  try {
    const client = await openWebSocket(proxy.port, "/v1/realtime", {
      Authorization: "Bearer inbound-secret",
    });
    client.socket.end();

    assert.match(client.response, /^HTTP\/1\.1 401 Unauthorized\r\n/u);
    assert.match(stderr.body, /upstream rejected websocket handshake/u);
    assert.equal(stderr.body.includes("rt-secret"), false);
    assert.equal(stderr.body.includes("inbound-secret"), false);
  } finally {
    await proxy.close();
    await upstream.close();
  }
});

test("Realtime Proxy supports multiple simultaneous tunnels", async () => {
  const upstream = await startFakeRealtimeUpstream();
  const proxy = await startRealtimeProxy({
    apiKey: "rt-secret",
    stderr: createCollectingWritable(),
    upstreamRealtimeUrl: upstream.realtimeUrl,
  });

  try {
    const first = await openWebSocket(proxy.port, "/v1/realtime?session=first");
    const second = await openWebSocket(
      proxy.port,
      "/v1/realtime?session=second",
    );

    first.socket.write("first-payload");
    second.socket.write("second-payload");

    assert.equal(await readChunk(first.socket), "first-payload");
    assert.equal(await readChunk(second.socket), "second-payload");
    assert.deepEqual(upstream.records.map((record) => record.url).sort(), [
      "/v1/realtime?session=first",
      "/v1/realtime?session=second",
    ]);

    first.socket.end();
    second.socket.end();
  } finally {
    await proxy.close();
    await upstream.close();
  }
});

async function writeExecutable(directory, name, body) {
  await mkdir(directory, { recursive: true });
  const filePath = path.join(directory, name);
  await writeFile(filePath, body, "utf8");
  await chmod(filePath, 0o755);
  return filePath;
}

function createCollectingWritable() {
  const chunks = [];
  const writable = new Writable({
    write(chunk, _encoding, callback) {
      chunks.push(Buffer.from(chunk));
      callback();
    },
  });

  Object.defineProperty(writable, "body", {
    get() {
      return Buffer.concat(chunks).toString("utf8");
    },
  });

  return writable;
}

function withoutRealtimeEnv(overrides = {}) {
  const env = { ...process.env, ...overrides };
  delete env.O3_CODE_REALTIME_API_KEY;
  delete env.O3_CODE_REALTIME_BASE_URL;
  return env;
}

function createFakeChild() {
  const child = new EventEmitter();
  child.stdin = new Writable({
    write(_chunk, _encoding, callback) {
      callback();
    },
  });
  child.stdout = Readable.from([]);
  child.stderr = Readable.from([]);
  return child;
}

function getMitmProxyPort(env) {
  return Number(new URL(env.HTTPS_PROXY).port);
}

async function startFakeRealtimeUpstream({ onUpgrade, onRequest } = {}) {
  const records = [];
  const sockets = new Set();
  const server = http.createServer((request, response) => {
    if (onRequest) {
      onRequest(request, response);
      return;
    }
    response.writeHead(404);
    response.end();
  });

  server.on("upgrade", (request, socket, head) => {
    records.push({
      headers: request.headers,
      method: request.method,
      url: request.url,
    });
    if (onUpgrade) {
      onUpgrade(request, socket, head);
      return;
    }
    socket.write(
      [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade: websocket",
        "Connection: Upgrade",
        "",
        "",
      ].join("\r\n"),
    );
    socket.on("data", (chunk) => socket.write(chunk));
  });
  server.on("connection", (socket) => {
    sockets.add(socket);
    socket.once("close", () => sockets.delete(socket));
  });

  await listen(server);
  const { port } = server.address();
  return {
    close: () => close(server, sockets),
    port,
    realtimeUrl: new URL(`ws://127.0.0.1:${port}/v1/realtime`),
    records,
  };
}

async function startFakeHttpUpstream(onRequest) {
  const records = [];
  const sockets = new Set();
  const server = http.createServer(onRequest);
  server.on("connection", (socket) => {
    sockets.add(socket);
    socket.once("close", () => sockets.delete(socket));
  });

  await listen(server);
  const { port } = server.address();
  return {
    baseUrl: new URL(`http://127.0.0.1:${port}/v1`),
    close: () => close(server, sockets),
    port,
    records,
  };
}

function proxyHttpRequest({
  body = "",
  headers = {},
  method = "GET",
  port,
  url,
}) {
  return new Promise((resolve, reject) => {
    const bodyBuffer = Buffer.from(body);
    const request = http.request(
      {
        headers: {
          ...headers,
          host: url.host,
          "content-length": bodyBuffer.length,
        },
        host: "127.0.0.1",
        method,
        path: url.toString(),
        port,
      },
      (response) => {
        const chunks = [];
        response.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
        response.once("end", () => {
          resolve({
            body: Buffer.concat(chunks).toString("utf8"),
            headers: response.headers,
            statusCode: response.statusCode,
          });
        });
      },
    );
    request.once("error", reject);
    request.end(bodyBuffer);
  });
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    request.once("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.once("error", reject);
  });
}

async function openWebSocket(port, requestPath, headers = {}) {
  const socket = net.connect({ host: "127.0.0.1", port });
  await once(socket, "connect");
  const headerLines = [
    `GET ${requestPath} HTTP/1.1`,
    `Host: 127.0.0.1:${port}`,
    "Upgrade: websocket",
    "Connection: Upgrade",
    "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==",
    "Sec-WebSocket-Version: 13",
  ];
  for (const [name, value] of Object.entries(headers)) {
    headerLines.push(`${name}: ${value}`);
  }
  socket.write([...headerLines, "", ""].join("\r\n"));
  return {
    response: await readUntil(socket, "\r\n\r\n"),
    socket,
  };
}

async function openProxyWebSocket(port, targetUrl, headers = {}) {
  const socket = net.connect({ host: "127.0.0.1", port });
  await once(socket, "connect");
  const { host } = new URL(targetUrl);
  const headerLines = [
    `GET ${targetUrl} HTTP/1.1`,
    `Host: ${host}`,
    "Upgrade: websocket",
    "Connection: Upgrade",
    "Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==",
    "Sec-WebSocket-Version: 13",
  ];
  for (const [name, value] of Object.entries(headers)) {
    headerLines.push(`${name}: ${value}`);
  }
  socket.write([...headerLines, "", ""].join("\r\n"));
  return {
    response: await readUntil(socket, "\r\n\r\n"),
    socket,
  };
}

function httpStatus(port, requestPath) {
  return new Promise((resolve, reject) => {
    const request = http.get(
      { host: "127.0.0.1", path: requestPath, port },
      (response) => {
        response.resume();
        response.once("end", () => resolve(response.statusCode));
      },
    );
    request.once("error", reject);
  });
}

function listen(server) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      server.off("error", reject);
      resolve();
    });
  });
}

function close(server, sockets = new Set()) {
  for (const socket of sockets) {
    socket.destroy();
  }
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

function readUntil(socket, delimiter) {
  return new Promise((resolve, reject) => {
    let buffer = Buffer.alloc(0);
    const onData = (chunk) => {
      buffer = Buffer.concat([buffer, chunk]);
      const text = buffer.toString("utf8");
      if (text.includes(delimiter)) {
        cleanup();
        resolve(text);
      }
    };
    const onError = (error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
    };
    socket.on("data", onData);
    socket.once("error", onError);
  });
}

function readChunk(socket) {
  return new Promise((resolve, reject) => {
    const onData = (chunk) => {
      cleanup();
      resolve(chunk.toString("utf8"));
    };
    const onError = (error) => {
      cleanup();
      reject(error);
    };
    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
    };
    socket.once("data", onData);
    socket.once("error", onError);
  });
}

async function waitFor(predicate) {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const value = await predicate();
    if (value) {
      return value;
    }
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  throw Error("Timed out waiting for condition");
}

async function assertPortClosed(port) {
  await waitFor(async () => {
    const socket = net.connect({ host: "127.0.0.1", port });
    const result = await new Promise((resolve) => {
      socket.once("connect", () => {
        socket.destroy();
        resolve(false);
      });
      socket.once("error", () => resolve(true));
    });
    return result;
  });
}
