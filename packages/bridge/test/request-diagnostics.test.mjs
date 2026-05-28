import assert from "node:assert/strict";
import test from "node:test";

import {
  classifyRequest,
  createBridgeRequestDiagnostics,
} from "../src/request-diagnostics.mjs";

test("classifyRequest identifies browser startup requests", () => {
  assert.equal(
    classifyRequest({ method: "GET", urlPathname: "/" }),
    "browser-shell",
  );
  assert.equal(
    classifyRequest({ method: "GET", urlPathname: "/bridge-shim.js" }),
    "bridge-shim",
  );
  assert.equal(
    classifyRequest({ method: "GET", urlPathname: "/assets/index.js" }),
    "app-asset",
  );
  assert.equal(
    classifyRequest({ method: "POST", urlPathname: "/bridge/stage-file" }),
    null,
  );
});

test("request diagnostics logs first startup requests once", () => {
  const lines = [];
  let currentNow = 10;
  const diagnostics = createBridgeRequestDiagnostics({
    logger: { log: (line) => lines.push(line) },
    now: () => currentNow,
  });

  const first = diagnostics.start({ method: "GET", urlPathname: "/" });
  currentNow = 18;
  first.finish({ htmlReadMs: 2, htmlInjectMs: 1, statusCode: 200 });

  const second = diagnostics.start({ method: "GET", urlPathname: "/" });
  currentNow = 25;
  second.finish({ statusCode: 200 });

  assert.equal(lines.length, 1);
  assert.match(lines[0], /^\[bridge\] first browser shell request /);
  assert.match(lines[0], /path="\/"/);
  assert.match(lines[0], /durationMs=8/);
  assert.match(lines[0], /htmlReadMs=2/);
  assert.match(lines[0], /htmlInjectMs=1/);
});

test("request diagnostics logs every request in debug mode", () => {
  const lines = [];
  const diagnostics = createBridgeRequestDiagnostics({
    debug: true,
    logger: { log: (line) => lines.push(line) },
    now: () => 100,
  });

  diagnostics
    .start({ method: "GET", urlPathname: "/assets/one.css" })
    .finish({ statusCode: 200 });

  assert.equal(lines.length, 1);
  assert.match(lines[0], /^\[bridge\] request /);
  assert.match(lines[0], /path="\/assets\/one.css"/);
});
