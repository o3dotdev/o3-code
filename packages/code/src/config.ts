import fs from "node:fs";
import path from "node:path";

import type { O3CodePaths } from "./paths.js";

export interface WebAccessConfig {
  readonly enabled: boolean;
  readonly exposure: "localhost";
  readonly port: number | null;
}

export function configPathForStateRoot(paths: Pick<O3CodePaths, "stateRoot">): string {
  return path.join(paths.stateRoot, "config.json");
}

export function readWebAccessConfig(paths: Pick<O3CodePaths, "stateRoot">): WebAccessConfig {
  const config = readConfig(paths);
  return normalizeWebAccessConfig(config.webAccess);
}

export function enableWebAccess(paths: Pick<O3CodePaths, "stateRoot">): WebAccessConfig {
  const configPath = configPathForStateRoot(paths);
  const current = readConfig(paths);
  const next = {
    ...current,
    webAccess: normalizeWebAccessConfig({
      ...asPlainObject(current.webAccess),
      enabled: true,
      exposure: "localhost",
    }),
  };
  fs.mkdirSync(path.dirname(configPath), { recursive: true, mode: 0o700 });
  fs.writeFileSync(configPath, `${JSON.stringify(next, null, 2)}\n`, { mode: 0o600 });
  fs.chmodSync(configPath, 0o600);
  return next.webAccess;
}

function readConfig(paths: Pick<O3CodePaths, "stateRoot">): Record<string, unknown> {
  try {
    const parsed = JSON.parse(fs.readFileSync(configPathForStateRoot(paths), "utf8"));
    return asPlainObject(parsed);
  } catch {
    return {};
  }
}

function normalizeWebAccessConfig(value: unknown): WebAccessConfig {
  const source = asPlainObject(value);
  return {
    enabled: typeof source.enabled === "boolean" ? source.enabled : false,
    exposure: "localhost",
    port: normalizePort(source.port),
  };
}

function normalizePort(value: unknown): number | null {
  return Number.isInteger(value) && Number(value) > 0 && Number(value) <= 65535
    ? Number(value)
    : null;
}

function asPlainObject(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {};
}
