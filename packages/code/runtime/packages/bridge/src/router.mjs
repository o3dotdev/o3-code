import { randomUUID } from "node:crypto";

export const BRIDGE_PROTOCOL_VERSION = 1;

export class BridgeRouter {
  #activeSession = null;
  #sharedObjectSnapshot = {};
  #themeVariant = "dark";

  constructor({ hostTransport, logger = console } = {}) {
    this.hostTransport = hostTransport;
    this.logger = logger;
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

    try {
      switch (envelope.kind) {
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
    session.socket.send(
      JSON.stringify({
        id: randomUUID(),
        protocolVersion: BRIDGE_PROTOCOL_VERSION,
        sessionId: session.sessionId,
        source: "sidecar",
        ...message,
      }),
    );
  }
}

function normalizeSystemThemeVariant(value, fallback) {
  return value === "light" || value === "dark" ? value : fallback;
}
