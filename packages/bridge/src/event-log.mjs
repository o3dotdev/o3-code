import { createWriteStream, mkdirSync } from "node:fs";
import path from "node:path";

const MAX_DETAIL_BYTES = 2048;

export class BridgeEventLog {
  #stream;
  #closed = false;

  constructor({
    filePath,
    verbose = false,
    now = () => new Date(),
  } = {}) {
    this.filePath = filePath;
    this.verbose = verbose;
    this.now = now;
    if (filePath) {
      try {
        mkdirSync(path.dirname(filePath), { recursive: true, mode: 0o700 });
        this.#stream = createWriteStream(filePath, {
          flags: "a",
          mode: 0o600,
        });
        this.#stream.on("error", () => {});
      } catch {
        this.#stream = null;
      }
    }
  }

  write(event, fields = {}) {
    if (this.#closed || this.#stream == null) {
      return;
    }
    const record = {
      ts: this.now().toISOString(),
      event,
      ...fields,
    };
    let line;
    try {
      line = JSON.stringify(record);
    } catch {
      line = JSON.stringify({
        ts: this.now().toISOString(),
        event,
        serializationError: true,
      });
    }
    this.#stream.write(`${line}\n`);
  }

  truncateDetail(value) {
    if (value == null) {
      return null;
    }
    let serialized;
    try {
      serialized = typeof value === "string" ? value : JSON.stringify(value);
    } catch {
      serialized = String(value);
    }
    if (serialized == null) {
      return null;
    }
    if (serialized.length <= MAX_DETAIL_BYTES) {
      return serialized;
    }
    return `${serialized.slice(0, MAX_DETAIL_BYTES)}…(+${
      serialized.length - MAX_DETAIL_BYTES
    } bytes truncated)`;
  }

  close() {
    if (this.#closed) {
      return Promise.resolve();
    }
    this.#closed = true;
    const stream = this.#stream;
    this.#stream = null;
    if (stream == null) {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      stream.end(() => resolve());
    });
  }
}

export const NULL_BRIDGE_EVENT_LOG = Object.freeze({
  filePath: null,
  verbose: false,
  write() {},
  truncateDetail() {
    return null;
  },
  close() {},
});

export function resolveBridgeLogPath({ env = process.env } = {}) {
  const explicit = env.O3_CODE_BRIDGE_LOG_PATH?.trim();
  if (explicit) {
    return explicit;
  }
  return null;
}
