import assert from "node:assert/strict";
import { chmod, mkdir, mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  assertCodexAppExecutableResources,
  CODEX_APP_PATH_ENV,
  resolveCodexAppElectronExecutable,
  resolveCodexAppPath,
  resolveCodexAppResources,
} from "../src/codex-app.mjs";

test("resolveCodexAppPath prefers O3_CODE_CODEX_APP_PATH", () => {
  assert.equal(
    resolveCodexAppPath({
      env: { [CODEX_APP_PATH_ENV]: "/tmp/Custom Codex.app" },
      defaultAppPath: "/Applications/Codex.app",
    }),
    "/tmp/Custom Codex.app",
  );
});

test("resolveCodexAppElectronExecutable points at the installed app's binary", () => {
  assert.equal(
    resolveCodexAppElectronExecutable({
      env: { [CODEX_APP_PATH_ENV]: "/tmp/Custom Codex.app" },
      defaultAppPath: "/Applications/Codex.app",
    }),
    "/tmp/Custom Codex.app/Contents/MacOS/Custom Codex",
  );
});

test("resolveCodexAppElectronExecutable falls back to the default app path", () => {
  assert.equal(
    resolveCodexAppElectronExecutable({ env: {} }),
    "/Applications/Codex.app/Contents/MacOS/Codex",
  );
});

test("resolveCodexAppResources maps expected resource paths", async () => {
  const appPath = await createCodexAppFixture();

  assert.deepEqual(
    resolveCodexAppResources({
      env: { [CODEX_APP_PATH_ENV]: appPath },
    }),
    {
      appPath,
      resourcesPath: path.join(appPath, "Contents", "Resources"),
      nativeNodeModulesPath: path.join(
        appPath,
        "Contents",
        "Resources",
        "app.asar.unpacked",
        "node_modules",
      ),
      codexPath: path.join(appPath, "Contents", "Resources", "codex"),
      nodePath: path.join(appPath, "Contents", "Resources", "node"),
      nodeReplPath: path.join(appPath, "Contents", "Resources", "node_repl"),
      rgPath: path.join(appPath, "Contents", "Resources", "rg"),
      appServerRuntimePath: path.join(
        appPath,
        "Contents",
        "Resources",
        "plugins",
        "openai-bundled",
        "plugins",
        "chrome",
        "app-server-runtime",
      ),
    },
  );
});

test("assertCodexAppExecutableResources validates required executables", async () => {
  const appPath = await createCodexAppFixture();
  const resources = resolveCodexAppResources({
    env: { [CODEX_APP_PATH_ENV]: appPath },
  });

  assert.doesNotThrow(() => assertCodexAppExecutableResources(resources));
});

test("resolveCodexAppResources fails for missing app", () => {
  assert.throws(
    () =>
      resolveCodexAppResources({
        env: { [CODEX_APP_PATH_ENV]: "/tmp/does-not-exist/Codex.app" },
      }),
    /must point to a directory/,
  );
});

async function createCodexAppFixture() {
  const root = await mkdtemp(path.join(os.tmpdir(), "o3-codex-app-"));
  const appPath = path.join(root, "Codex.app");
  const resourcesPath = path.join(appPath, "Contents", "Resources");
  await mkdir(path.join(resourcesPath, "app.asar.unpacked", "node_modules"), {
    recursive: true,
  });
  await mkdir(
    path.join(
      resourcesPath,
      "plugins",
      "openai-bundled",
      "plugins",
      "chrome",
      "app-server-runtime",
    ),
    { recursive: true },
  );
  await writeFile(path.join(appPath, "Contents", "Info.plist"), "", "utf8");
  for (const name of ["codex", "node", "node_repl", "rg"]) {
    const executablePath = path.join(resourcesPath, name);
    await writeFile(executablePath, "#!/bin/sh\nexit 0\n", "utf8");
    await chmod(executablePath, 0o755);
  }
  return appPath;
}
