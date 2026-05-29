import { randomUUID } from "node:crypto";

import { NULL_BRIDGE_EVENT_LOG } from "./event-log.mjs";

export const BRIDGE_PROTOCOL_VERSION = 1;

export class BridgeRouter {
  #activeSession = null;
  #sharedObjectSnapshot = {};
  #themeVariant = "dark";

  constructor({
    hostTransport,
    logger = console,
    eventLog = NULL_BRIDGE_EVENT_LOG,
  } = {}) {
    this.hostTransport = hostTransport;
    this.logger = logger;
    this.eventLog = eventLog;
  }

  get activeSessionId() {
    return this.#activeSession?.sessionId ?? null;
  }

  attachBrowser(socket) {
    const previous = this.#activeSession;
    if (previous != null) {
      previous.socket.close(4000, "Replaced by a newer Bridge Mode session.");
      this.logger.info?.("[bridge] active browser session replaced", {
        previousSessionId: previous.sessionId,
      });
    }

    const session = {
      sessionId: randomUUID(),
      sourceId: `browser:${randomUUID()}`,
      socket,
    };
    this.#activeSession = session;

    socket.on("message", (message) => {
      this.#handleBrowserMessage(session, message).catch((error) => {
        this.logger.error?.("[bridge] browser message failed", {
          error: String(error?.stack ?? error),
        });
      });
    });

    socket.on("close", () => {
      if (this.#activeSession === session) {
        this.#activeSession = null;
      }
    });

    this.#sendToSession(session, {
      kind: "bridge-sync-pulse",
      payload: {
        protocolVersion: BRIDGE_PROTOCOL_VERSION,
        sessionId: session.sessionId,
        sharedObjectSnapshot: this.#sharedObjectSnapshot,
        systemThemeVariant: this.#themeVariant,
      },
    });

    return session.sessionId;
  }

  handleHostEvent(event) {
    if (event?.type === "host-message") {
      const payload = event.payload;
      if (payload?.type === "shared-object-updated") {
        this.#setSharedObject(payload.key, payload.value);
      }
      this.#sendToActive({
        kind: "app-message-for-view",
        payload,
      });
      return;
    }

    if (event?.type === "worker-message") {
      this.#sendToActive({
        kind: "worker-message-for-view",
        workerId: event.workerId,
        payload: event.payload,
      });
      return;
    }

    if (event?.type === "system-theme-variant-updated") {
      this.#themeVariant = normalizeSystemThemeVariant(
        event.payload,
        this.#themeVariant,
      );
      this.#sendToActive({
        kind: "system-theme-variant-updated",
        payload: this.#themeVariant,
      });
    }
  }

  async #handleBrowserMessage(session, rawMessage) {
    let envelope;
    try {
      envelope =
        typeof rawMessage === "string"
          ? JSON.parse(rawMessage)
          : JSON.parse(rawMessage.toString("utf8"));
    } catch {
      this.#sendError(session, null, "Invalid Bridge Envelope JSON.");
      return;
    }

    if (this.#activeSession !== session) {
      this.#sendError(session, envelope.id, "Detached Bridge session.");
      return;
    }

    if (envelope?.protocolVersion !== BRIDGE_PROTOCOL_VERSION) {
      this.#sendError(session, envelope?.id, "Unsupported bridge protocol.");
      return;
    }

    this.#logEnvelopeIn(session, envelope, rawMessage);

    try {
      switch (envelope.kind) {
        case "browser-diagnostic": {
          this.#logBrowserDiagnostic(session, envelope.payload);
          this.#sendResponse(session, envelope.id, null);
          break;
        }

        case "app-message-from-view": {
          if (envelope.payload?.type === "shared-object-set") {
            this.#setSharedObject(envelope.payload.key, envelope.payload.value);
          }
          await this.hostTransport.call("sendMessageFromView", [
            envelope.payload,
          ]);
          this.#sendResponse(session, envelope.id, null);
          break;
        }

        case "bridge-rpc": {
          const result = await this.hostTransport.call(
            envelope.method,
            envelope.args ?? [],
          );
          this.#sendResponse(session, envelope.id, result ?? null);
          break;
        }

        case "worker-message-from-view": {
          await this.hostTransport.call("sendWorkerMessageFromView", [
            envelope.workerId,
            envelope.payload,
          ]);
          this.#sendResponse(session, envelope.id, null);
          break;
        }

        case "worker-subscribe": {
          await this.hostTransport.subscribeWorker(envelope.workerId);
          this.#sendResponse(session, envelope.id, null);
          break;
        }

        case "worker-unsubscribe": {
          await this.hostTransport.unsubscribeWorker(envelope.workerId);
          this.#sendResponse(session, envelope.id, null);
          break;
        }

        default:
          this.#sendError(session, envelope.id, `Unknown envelope kind.`);
      }
    } catch (error) {
      this.#sendError(session, envelope.id, String(error?.message ?? error));
    }
  }

  #setSharedObject(key, value) {
    if (typeof key !== "string") {
      return;
    }

    if (value === undefined) {
      delete this.#sharedObjectSnapshot[key];
      return;
    }

    this.#sharedObjectSnapshot[key] = value;
  }

  #sendResponse(session, responseTo, payload) {
    this.#sendToSession(session, {
      kind: "bridge-response",
      responseTo,
      payload,
    });
  }

  #sendError(session, responseTo, message) {
    this.#sendToSession(session, {
      kind: "bridge-error",
      responseTo,
      error: message,
    });
  }

  #sendToActive(message) {
    if (this.#activeSession == null) {
      return;
    }

    this.#sendToSession(this.#activeSession, message);
  }

  #sendToSession(session, message) {
    const envelope = {
      id: randomUUID(),
      protocolVersion: BRIDGE_PROTOCOL_VERSION,
      sessionId: session.sessionId,
      source: "sidecar",
      ...message,
    };
    const serialized = JSON.stringify(envelope);
    this.#logEnvelopeOut(session, envelope, serialized);
    session.socket.send(serialized);
  }

  #logEnvelopeIn(session, envelope, rawMessage) {
    const bytes =
      typeof rawMessage === "string"
        ? Buffer.byteLength(rawMessage)
        : rawMessage?.length ?? 0;
    this.eventLog.write("envelope-in", {
      sessionId: session.sessionId,
      kind: envelope.kind ?? null,
      payloadType: envelope.payload?.type ?? null,
      method: envelope.method ?? null,
      workerId: envelope.workerId ?? null,
      envelopeId: envelope.id ?? null,
      bytes,
      payload: this.eventLog.verbose
        ? this.eventLog.truncateDetail(envelope.payload ?? envelope.args)
        : null,
    });
  }

  #logEnvelopeOut(session, envelope, serialized) {
    this.eventLog.write("envelope-out", {
      sessionId: session.sessionId,
      kind: envelope.kind ?? null,
      payloadType: envelope.payload?.type ?? null,
      workerId: envelope.workerId ?? null,
      responseTo: envelope.responseTo ?? null,
      envelopeId: envelope.id ?? null,
      bytes: Buffer.byteLength(serialized),
      payload: this.eventLog.verbose
        ? this.eventLog.truncateDetail(envelope.payload)
        : null,
    });
  }

  #logBrowserDiagnostic(session, payload) {
    const fields = {
      sessionId: session.sessionId,
      level: payload?.level ?? "info",
      message: payload?.message ?? null,
      name: payload?.name ?? null,
      stack: payload?.stack ?? null,
      filename: payload?.filename ?? null,
      lineno: payload?.lineno ?? null,
      colno: payload?.colno ?? null,
      url: payload?.url ?? null,
      userAgent: payload?.userAgent ?? null,
      browserTimestamp: payload?.timestamp ?? null,
      context: payload?.context ?? null,
    };
    this.eventLog.write("browser-diagnostic", fields);
    const summary = `[bridge] browser-diagnostic level=${fields.level} session=${
      fields.sessionId
    } msg=${JSON.stringify(fields.message ?? "")}`;
    if (fields.level === "error" || fields.level === "unhandled-rejection") {
      this.logger.error?.(summary);
    } else if (fields.level === "console-warn") {
      this.logger.warn?.(summary);
    } else {
      this.logger.log?.(summary);
    }
  }
}

function normalizeSystemThemeVariant(value, fallback) {
  return value === "light" || value === "dark" ? value : fallback;
}
