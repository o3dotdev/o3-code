import { EventEmitter } from "node:events";
import { spawn as defaultSpawn } from "node:child_process";
import fs from "node:fs/promises";
import http from "node:http";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

import { O3CodeConfigStore } from "./o3-code-config.mjs";
import {
  allocateLoopbackPort,
  isTcpPortAvailable,
  parsePortOverride,
} from "./ports.mjs";
import { resolveBridgeRuntimeConfig } from "./runtime-config.mjs";

const SIDE_CAR_READY_TIMEOUT_MS = 10_000;
const CDP_READY_TIMEOUT_MS = 5_000;
const LOOPBACK_HOST = "127.0.0.1";

export const WEB_ACCESS_STATUS_CODES = Object.freeze({
  CDP_UNAVAILABLE: "cdp_unavailable",
  PORT_UNAVAILABLE: "port_unavailable",
  SIDECAR_EXIT: "sidecar_exit",
});

export class BridgeModeSupervisor extends EventEmitter {
  #child = null;
  #stageDir = null;
  #status = { state: "off" };
  #startGeneration = 0;
  #stopping = false;

  constructor({
    configStore = new O3CodeConfigStore(),
    repoRoot = process.cwd(),
    desktopRoot = path.join(repoRoot, "apps", "desktop"),
    env = process.env,
    spawn = defaultSpawn,
    logger = console,
    allocatePort = allocateLoopbackPort,
    isPortAvailable = isTcpPortAvailable,
    waitForCdp = waitForCdpEndpoint,
    waitForSidecar = waitForSidecarHealth,
    rm = fs.rm,
    tmpDir = os.tmpdir(),
  } = {}) {
    super();
    this.configStore = configStore;
    this.repoRoot = repoRoot;
    this.desktopRoot = desktopRoot;
    this.env = env;
    this.spawn = spawn;
    this.logger = logger;
    this.allocatePort = allocatePort;
    this.isPortAvailable = isPortAvailable;
    this.waitForCdp = waitForCdp;
    this.waitForSidecar = waitForSidecar;
    this.rm = rm;
    this.tmpDir = tmpDir;
  }

  getStatus() {
    return clone(this.#status);
  }

  subscribe(listener) {
    this.on("status", listener);
    return () => {
      this.off("status", listener);
    };
  }

  async initialize() {
    const config = await this.configStore.readConfig();
    await this.applyConfig(config);
  }

  async applyConfig(config) {
    if (config.webAccess.enabled) {
      await this.start();
      return;
    }

    await this.stop();
  }

  async retry() {
    const config = await this.configStore.readConfig();
    if (!config.webAccess.enabled) {
      this.#setStatus({ state: "off" });
      return this.getStatus();
    }

    await this.stop({ preserveFailedStatus: true });
    await this.start();
    return this.getStatus();
  }

  async resetPort() {
    if (this.#status.state === "running" || this.#status.state === "starting") {
      throw Error("Web access port can only be reset while stopped or failed.");
    }

    return await this.configStore.resetWebAccessPort();
  }

  async start() {
    const generation = ++this.#startGeneration;
    await this.#stopChild();
    this.#setStatus({ state: "starting" });

    let config = await this.configStore.readConfig();
    let port = config.webAccess.port;
    if (port == null) {
      port = await this.allocatePort(LOOPBACK_HOST);
      config = await this.configStore.setWebAccessPort(port);
    }

    if (!(await this.isPortAvailable(port, LOOPBACK_HOST))) {
      this.#fail({
        code: WEB_ACCESS_STATUS_CODES.PORT_UNAVAILABLE,
        reason: `Web access port ${port} is already in use.`,
      });
      return;
    }

    let cdpPort;
    try {
      cdpPort = parsePortOverride(
        this.env.O3_CODE_BRIDGE_CDP_PORT,
        "O3_CODE_BRIDGE_CDP_PORT",
      );
    } catch {
      cdpPort = null;
    }

    if (cdpPort == null) {
      this.#fail({
        code: WEB_ACCESS_STATUS_CODES.CDP_UNAVAILABLE,
        reason: "Private Electron CDP port is unavailable.",
      });
      return;
    }

    try {
      await this.waitForCdp({
        host: LOOPBACK_HOST,
        port: cdpPort,
        timeoutMs: CDP_READY_TIMEOUT_MS,
      });
    } catch (error) {
      this.#fail({
        code: WEB_ACCESS_STATUS_CODES.CDP_UNAVAILABLE,
        reason: error instanceof Error ? error.message : String(error),
      });
      return;
    }

    if (generation !== this.#startGeneration) {
      return;
    }

    const runtimeConfig = resolveBridgeRuntimeConfig({
      cdpPort,
      sidecarPort: port,
    });
    const url = runtimeConfig.browserUrl;
    const sidecarPath = path.join(
      this.repoRoot,
      "packages",
      "bridge",
      "src",
      "sidecar.mjs",
    );
    const webviewDir = path.join(
      this.repoRoot,
      "apps",
      "web",
      "app",
      "webview",
    );
    const targetUrl = pathToFileURL(
      path.join(this.desktopRoot, "app", "webview", "index.html"),
    ).toString();
    const stageDir = path.join(
      this.tmpDir,
      `o3-code-bridge-${process.pid}-${Date.now()}`,
    );
    const sidecarExecutable =
      this.env.O3_CODE_BRIDGE_NODE_PATH?.trim() ||
      this.env.CODEX_BROWSER_USE_NODE_PATH?.trim() ||
      process.execPath;

    this.#stageDir = stageDir;
    this.#stopping = false;
    this.#child = this.spawn(sidecarExecutable, [sidecarPath], {
      cwd: this.repoRoot,
      env: {
        ...this.env,
        O3_CODE_BRIDGE_CDP_HOST: runtimeConfig.cdpHost,
        O3_CODE_BRIDGE_CDP_PORT: String(cdpPort),
        O3_CODE_BRIDGE_HOST: runtimeConfig.sidecarHost,
        O3_CODE_BRIDGE_PORT: String(port),
        O3_CODE_BRIDGE_STAGE_DIR: stageDir,
        O3_CODE_BRIDGE_TARGET_URL: targetUrl,
        O3_CODE_BRIDGE_WEBVIEW_DIR: webviewDir,
      },
      stdio: ["ignore", "inherit", "inherit"],
    });
    this.#child.once("exit", (code, signal) => {
      this.#handleSidecarExit({ code, signal });
    });

    try {
      await this.waitForSidecar({
        timeoutMs: SIDE_CAR_READY_TIMEOUT_MS,
        url,
      });
      if (generation === this.#startGeneration) {
        this.#setStatus({ state: "running", port, url });
      }
    } catch (error) {
      await this.#stopChild();
      this.#fail({
        code: WEB_ACCESS_STATUS_CODES.SIDECAR_EXIT,
        reason: error instanceof Error ? error.message : String(error),
      });
    }
  }

  async stop({ preserveFailedStatus = false } = {}) {
    this.#startGeneration += 1;
    await this.#stopChild();
    if (!preserveFailedStatus) {
      this.#setStatus({ state: "off" });
    }
  }

  async dispose() {
    this.#startGeneration += 1;
    await this.#stopChild();
  }

  async #stopChild() {
    const child = this.#child;
    const stageDir = this.#stageDir;
    this.#child = null;
    this.#stageDir = null;

    if (child != null) {
      this.#stopping = true;
      await new Promise((resolve) => {
        child.once("exit", resolve);
        child.kill();
        setTimeout(resolve, 1_000).unref?.();
      });
      this.#stopping = false;
    }

    if (stageDir != null) {
      await this.rm(stageDir, { force: true, recursive: true }).catch(() => {});
    }
  }

  #handleSidecarExit({ code, signal }) {
    const wasStopping = this.#stopping;
    this.#child = null;
    if (wasStopping) {
      return;
    }

    this.logger.warning?.("Bridge Sidecar exited", { code, signal });
    this.#fail({
      code: WEB_ACCESS_STATUS_CODES.SIDECAR_EXIT,
      reason:
        signal != null
          ? `Bridge Sidecar exited with signal ${signal}.`
          : `Bridge Sidecar exited with code ${code ?? "unknown"}.`,
    });
  }

  #fail({ reason, code }) {
    this.#setStatus({ state: "failed", reason, code });
  }

  #setStatus(status) {
    this.#status = status;
    this.emit("status", this.getStatus());
  }
}

export async function waitForCdpEndpoint({ host, port, timeoutMs }) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await requestOk(`http://${host}:${port}/json/version`)) {
      return;
    }
    await delay(100);
  }

  throw Error("Private Electron CDP endpoint is unavailable.");
}

export async function waitForSidecarHealth({ url, timeoutMs }) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await requestOk(new URL("healthz", url).toString())) {
      return;
    }
    await delay(100);
  }

  throw Error("Bridge Sidecar did not become ready.");
}

async function requestOk(url) {
  return await new Promise((resolve) => {
    const request = http.get(url, (response) => {
      response.resume();
      resolve(response.statusCode >= 200 && response.statusCode < 300);
    });
    request.on("error", () => resolve(false));
    request.setTimeout(500, () => {
      request.destroy();
      resolve(false);
    });
  });
}

async function delay(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
