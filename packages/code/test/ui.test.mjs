import assert from "node:assert/strict";
import test from "node:test";

import {
  DEFAULT_COMMAND_PREFIX,
  MAC_APP_STORE_TAILSCALE_PATH,
  NPX_COMMAND_PREFIX,
  renderStartPanel,
  renderStatusPanel,
  renderStartupProgressBar,
  resolveLifecycleCommandPrefix,
  resolveTailscaleMobileAccessHelp,
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

test("tailscale mobile access prefers CLI on PATH", () => {
  const help = resolveTailscaleMobileAccessHelp({
    env: { PATH: "/opt/bin:/usr/local/bin" },
    existsSync: (filePath) => filePath === "/usr/local/bin/tailscale",
    webAccessUrl: launcherState.url,
  });

  assert.equal(help.available, true);
  assert.equal(help.variant, "path");
  assert.equal(
    help.serveCommand,
    "tailscale serve --bg http://127.0.0.1:50561/",
  );
  assert.equal(help.statusCommand, "tailscale serve status");
  assert.equal(help.resetCommand, "tailscale serve reset");
});

test("tailscale mobile access falls back to macOS app CLI", () => {
  const help = resolveTailscaleMobileAccessHelp({
    env: { PATH: "/opt/bin" },
    existsSync: (filePath) => filePath === MAC_APP_STORE_TAILSCALE_PATH,
    webAccessUrl: launcherState.url,
  });

  assert.equal(help.available, true);
  assert.equal(help.variant, "mac-app-store");
  assert.equal(
    help.serveCommand,
    `TAILSCALE_BE_CLI=1 ${MAC_APP_STORE_TAILSCALE_PATH} serve --bg http://127.0.0.1:50561/`,
  );
});

test("tailscale mobile access prompts when missing", () => {
  const help = resolveTailscaleMobileAccessHelp({
    env: { PATH: "/opt/bin" },
    existsSync: () => false,
    webAccessUrl: launcherState.url,
  });

  assert.equal(help.available, false);
  assert.equal(help.variant, "missing");
  assert.equal(help.serveCommand, null);
  assert.match(help.installHint, /Install Tailscale/);
});

test("tailscale mobile access omits serve command without web URL", () => {
  const help = resolveTailscaleMobileAccessHelp({
    env: { PATH: "/usr/local/bin" },
    existsSync: (filePath) => filePath === "/usr/local/bin/tailscale",
    webAccessUrl: null,
  });

  assert.equal(help.available, true);
  assert.equal(help.serveCommand, null);
  assert.equal(help.statusCommand, "tailscale serve status");
});

test("startup panel renders tailscale serve guidance", () => {
  const output = renderStartPanel({
    mobileAccessHelp: resolveTailscaleMobileAccessHelp({
      env: { PATH: "/usr/local/bin" },
      existsSync: (filePath) => filePath === "/usr/local/bin/tailscale",
      webAccessUrl: launcherState.url,
    }),
    state: launcherState,
  });

  assert.match(output, /Mobile\s+Run Tailscale Serve/);
  assert.match(output, /tailscale serve --bg http:\/\/127\.0\.0\.1:50561\//);
  assert.match(output, /tailscale serve status/);
  assert.match(output, /tailscale serve reset/);
});

test("status panel renders missing tailscale prompt", () => {
  const output = renderStatusPanel(
    launcherState,
    true,
    DEFAULT_COMMAND_PREFIX,
    resolveTailscaleMobileAccessHelp({
      env: { PATH: "/usr/local/bin" },
      existsSync: () => false,
      webAccessUrl: launcherState.url,
    }),
  );

  assert.match(output, /Mobile\s+Install Tailscale/);
  assert.match(output, /Install\s+Install Tailscale for macOS/);
  assert.doesNotMatch(output, /tailscale serve --bg/);
});
