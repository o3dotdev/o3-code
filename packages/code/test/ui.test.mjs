import assert from "node:assert/strict";
import test from "node:test";

import {
  DEFAULT_COMMAND_PREFIX,
  NPX_COMMAND_PREFIX,
  renderStartPanel,
  renderStartupProgressBar,
  resolveLifecycleCommandPrefix,
} from "../dist/bin.mjs";

const launcherState = {
  status: "running",
  pid: 123,
  desktopPid: 456,
  startedAt: "2026-01-01T00:00:00.000Z",
  updatedAt: "2026-01-01T00:00:00.000Z",
  url: "http://127.0.0.1:50561/",
  activeRuntimeRoot: "/tmp/o3-code/package-runtime",
  logs: {
    launcher: "/tmp/o3-code/logs/launcher.log",
    desktop: "/tmp/o3-code/logs/desktop.log",
    bridge: "/tmp/o3-code/logs/bridge.log",
  },
  warnings: [],
};

test("startup progress bar renders bounded phase progress", () => {
  assert.equal(renderStartupProgressBar(0, 7, 10), "[----------]");
  assert.equal(renderStartupProgressBar(3, 7, 10), "[####------]");
  assert.equal(renderStartupProgressBar(7, 7, 10), "[##########]");
  assert.equal(renderStartupProgressBar(9, 7, 10), "[##########]");
});

test("global-style invocation renders bare lifecycle commands", () => {
  const commandPrefix = resolveLifecycleCommandPrefix({
    argv: ["node", "/usr/local/bin/o3-code"],
    env: {},
  });
  const output = renderStartPanel({ commandPrefix, state: launcherState });

  assert.equal(commandPrefix, DEFAULT_COMMAND_PREFIX);
  assert.match(output, /o3-code logs --follow/);
  assert.match(output, /o3-code restart/);
  assert.doesNotMatch(output, /npx @o3dotdev\/code/);
});

test("npx invocation renders npx lifecycle commands", () => {
  const commandPrefix = resolveLifecycleCommandPrefix({
    argv: [
      "node",
      "/Users/example/.npm/_npx/123/node_modules/@o3dotdev/code/dist/bin.mjs",
    ],
    env: { npm_command: "exec" },
  });
  const output = renderStartPanel({ commandPrefix, state: launcherState });

  assert.equal(commandPrefix, NPX_COMMAND_PREFIX);
  assert.match(output, /npx @o3dotdev\/code logs --follow/);
  assert.match(output, /npx @o3dotdev\/code restart/);
  assert.doesNotMatch(output, /\n\s+o3-code logs --follow/);
});
