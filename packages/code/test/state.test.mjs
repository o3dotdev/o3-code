import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import {
  createBaseState,
  readLauncherState,
  removeLauncherState,
  writeLauncherState,
} from "../dist/bin.mjs";

test("launcher state round trips through disk", () => {
  const root = mkdtempSync(path.join(tmpdir(), "o3-code-state-"));
  const paths = {
    runDir: path.join(root, "run"),
    statePath: path.join(root, "run", "launcher.json"),
    launcherLogPath: path.join(root, "logs", "launcher.log"),
    desktopLogPath: path.join(root, "logs", "desktop.log"),
    bridgeLogPath: path.join(root, "logs", "bridge.log"),
  };

  try {
    const state = {
      ...createBaseState(paths),
      status: "running",
      url: "http://127.0.0.1:1234/",
    };
    writeLauncherState(paths, state);

    const actual = readLauncherState(paths);
    assert.equal(actual.status, "running");
    assert.equal(actual.url, "http://127.0.0.1:1234/");
    assert.equal(actual.logs.desktop, paths.desktopLogPath);

    removeLauncherState(paths);
    assert.equal(readLauncherState(paths), null);
  } finally {
    rmSync(root, { force: true, recursive: true });
  }
});

test("launcher state warns when realtime API key is missing", () => {
  const originalKey = process.env.O3_CODE_REALTIME_API_KEY;
  const originalDisable = process.env.O3_CODE_DISABLE_REALTIME_OVERRIDE;
  delete process.env.O3_CODE_REALTIME_API_KEY;
  delete process.env.O3_CODE_DISABLE_REALTIME_OVERRIDE;

  try {
    const state = createBaseState({
      bridgeLogPath: "/tmp/bridge.log",
      desktopLogPath: "/tmp/desktop.log",
      launcherLogPath: "/tmp/launcher.log",
    });

    assert.deepEqual(state.warnings, [
      "Realtime API key is missing; realtime MITM override is inactive.",
    ]);
  } finally {
    restoreEnv("O3_CODE_REALTIME_API_KEY", originalKey);
    restoreEnv("O3_CODE_DISABLE_REALTIME_OVERRIDE", originalDisable);
  }
});

test("launcher state does not warn when realtime API key is set", () => {
  const originalKey = process.env.O3_CODE_REALTIME_API_KEY;
  const originalDisable = process.env.O3_CODE_DISABLE_REALTIME_OVERRIDE;
  process.env.O3_CODE_REALTIME_API_KEY = "rt-secret";
  delete process.env.O3_CODE_DISABLE_REALTIME_OVERRIDE;

  try {
    const state = createBaseState({
      bridgeLogPath: "/tmp/bridge.log",
      desktopLogPath: "/tmp/desktop.log",
      launcherLogPath: "/tmp/launcher.log",
    });

    assert.deepEqual(state.warnings, []);
  } finally {
    restoreEnv("O3_CODE_REALTIME_API_KEY", originalKey);
    restoreEnv("O3_CODE_DISABLE_REALTIME_OVERRIDE", originalDisable);
  }
});

function restoreEnv(name, value) {
  if (value === undefined) {
    delete process.env[name];
    return;
  }
  process.env[name] = value;
}
