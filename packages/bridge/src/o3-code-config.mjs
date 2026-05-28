import { EventEmitter } from "node:events";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

export const DEFAULT_WEB_ACCESS_CONFIG = Object.freeze({
  enabled: false,
  exposure: "localhost",
  port: null,
});

export const DEFAULT_O3_CODE_CONFIG = Object.freeze({
  webAccess: DEFAULT_WEB_ACCESS_CONFIG,
});

export function getDefaultO3CodeStateRoot(env = process.env) {
  return path.resolve(
    env.O3_CODE_STATE_ROOT?.trim() || path.join(os.homedir(), ".o3", "code"),
  );
}

export function normalizeWebAccessConfig(value) {
  const source = isPlainObject(value) ? value : {};
  const port = normalizePort(source.port);

  return {
    enabled:
      typeof source.enabled === "boolean"
        ? source.enabled
        : DEFAULT_WEB_ACCESS_CONFIG.enabled,
    exposure: "localhost",
    port,
  };
}

export function normalizeO3CodeConfig(value) {
  const source = isPlainObject(value) ? value : {};

  return {
    ...source,
    webAccess: normalizeWebAccessConfig(source.webAccess),
  };
}

export class O3CodeConfigStore extends EventEmitter {
  #config = null;

  constructor({
    configPath = path.join(getDefaultO3CodeStateRoot(), "config.json"),
    fsImpl = fs,
  } = {}) {
    super();
    this.configPath = configPath;
    this.fs = fsImpl;
  }

  async readConfig() {
    if (this.#config != null) {
      return this.#cloneConfig(this.#config);
    }

    let parsed = {};
    try {
      parsed = JSON.parse(await this.fs.readFile(this.configPath, "utf8"));
    } catch (error) {
      if (error?.code !== "ENOENT" && !(error instanceof SyntaxError)) {
        throw error;
      }
    }

    this.#config = normalizeO3CodeConfig(parsed);
    return this.#cloneConfig(this.#config);
  }

  async writeConfig(nextConfig) {
    const normalized = normalizeO3CodeConfig(nextConfig);
    await this.#writeAtomic(normalized);
    this.#config = normalized;
    this.emit("config", this.#cloneConfig(normalized));
    return this.#cloneConfig(normalized);
  }

  async patchWebAccess(patch) {
    const current = await this.readConfig();
    return await this.writeConfig({
      ...current,
      webAccess: normalizeWebAccessConfig({
        ...current.webAccess,
        ...patch,
        exposure: "localhost",
      }),
    });
  }

  async setWebAccessPort(port) {
    return await this.patchWebAccess({ port });
  }

  async resetWebAccessPort() {
    return await this.patchWebAccess({ port: null });
  }

  subscribe(listener) {
    this.on("config", listener);
    return () => {
      this.off("config", listener);
    };
  }

  async #writeAtomic(config) {
    const configDir = path.dirname(this.configPath);
    await this.fs.mkdir(configDir, { recursive: true });
    const tempPath = path.join(
      configDir,
      `.config.json.${process.pid}.${Date.now()}.tmp`,
    );
    const body = `${JSON.stringify(config, null, 2)}\n`;
    await this.fs.writeFile(tempPath, body, "utf8");
    await this.fs.rename(tempPath, this.configPath);
  }

  #cloneConfig(config) {
    return JSON.parse(JSON.stringify(config));
  }
}

function normalizePort(value) {
  if (value == null) {
    return null;
  }

  return Number.isInteger(value) && value > 0 && value <= 65535 ? value : null;
}

function isPlainObject(value) {
  return value != null && typeof value === "object" && !Array.isArray(value);
}
