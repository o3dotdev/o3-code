import { EventEmitter } from "node:events";
import { setTimeout as delay } from "node:timers/promises";

const HOST_BINDING_NAME = "__o3CodeBridgeHostBinding";

export class CdpClient extends EventEmitter {
  #nextId = 1;
  #pending = new Map();

  constructor({ cdpPort, cdpHost = "127.0.0.1", targetUrl, logger = console }) {
    super();
    this.cdpPort = cdpPort;
    this.cdpHost = cdpHost;
    this.targetUrl = targetUrl;
    this.logger = logger;
    this.socket = null;
    this.readyPromise = null;
  }

  async connect({ signal } = {}) {
    if (this.readyPromise == null) {
      this.readyPromise = this.#connectWithRetry({ signal });
    }

    return await this.readyPromise;
  }

  async call(method, args = []) {
    await this.connect();
    return await this.evaluate(
      async (bridgeMethod, bridgeArgs) => {
        if (
          window.electronBridge == null ||
          typeof window.electronBridge[bridgeMethod] !== "function"
        ) {
          throw Error(`electronBridge.${bridgeMethod} is unavailable`);
        }

        return await window.electronBridge[bridgeMethod](...bridgeArgs);
      },
      [method, args],
    );
  }

  async subscribeWorker(workerId) {
    await this.connect();
    return await this.evaluate(
      (id) => window.__o3CodeBridgeSubscribeWorker?.(id) ?? false,
      [workerId],
    );
  }

  async unsubscribeWorker(workerId) {
    await this.connect();
    return await this.evaluate(
      (id) => window.__o3CodeBridgeUnsubscribeWorker?.(id) ?? false,
      [workerId],
    );
  }

  async evaluate(fn, args = []) {
    const expression = `(${fn.toString()})(...${JSON.stringify(args)})`;
    const result = await this.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
      userGesture: true,
    });

    if (result.exceptionDetails != null) {
      throw Error(
        result.exceptionDetails.text ||
          result.exceptionDetails.exception?.description ||
          "CDP Runtime.evaluate failed.",
      );
    }

    return result.result?.value;
  }

  async send(method, params = {}) {
    await this.#ensureSocket();

    const id = this.#nextId++;
    const message = { id, method, params };

    return await new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify(message));
    });
  }

  async #ensureSocket() {
    if (this.socket == null || this.socket.readyState !== WebSocket.OPEN) {
      await this.connect();
    }
  }

  async #connectWithRetry({ signal } = {}) {
    let lastError = null;
    for (;;) {
      if (signal?.aborted) {
        throw signal.reason ?? Error("CDP connection aborted.");
      }

      try {
        const target = await this.#findTarget();
        await this.#connectSocket(target.webSocketDebuggerUrl);
        await this.send("Runtime.enable");
        await this.send("Runtime.addBinding", { name: HOST_BINDING_NAME });
        await this.#installHostHooks();
        await this.#publishInitialHostState();
        this.logger.info?.("[bridge] attached CDP target", {
          targetId: target.id,
          url: target.url,
        });
        return;
      } catch (error) {
        lastError = error;
        await delay(250, null, { signal }).catch(() => {});
      }

      if (lastError != null) {
        this.logger.debug?.("[bridge] waiting for Electron CDP target", {
          error: String(lastError?.message ?? lastError),
        });
      }
    }
  }

  async #findTarget() {
    const response = await fetch(
      `http://${this.cdpHost}:${this.cdpPort}/json/list`,
    );
    if (!response.ok) {
      throw Error(`CDP target list failed with HTTP ${response.status}.`);
    }

    const targets = await response.json();
    const pageTargets = targets.filter((target) => target.type === "page");
    const target =
      pageTargets.find((candidate) => candidate.url === this.targetUrl) ??
      pageTargets.find((candidate) =>
        candidate.url?.endsWith("/webview/index.html"),
      ) ??
      pageTargets[0];

    if (target?.webSocketDebuggerUrl == null) {
      throw Error("No Electron renderer CDP target is available yet.");
    }

    return target;
  }

  async #connectSocket(url) {
    this.socket = new WebSocket(url);

    await new Promise((resolve, reject) => {
      const cleanup = () => {
        this.socket.removeEventListener("open", handleOpen);
        this.socket.removeEventListener("error", handleError);
      };
      const handleOpen = () => {
        cleanup();
        resolve();
      };
      const handleError = (event) => {
        cleanup();
        reject(Error(`CDP WebSocket failed: ${event.message ?? "error"}`));
      };

      this.socket.addEventListener("open", handleOpen, { once: true });
      this.socket.addEventListener("error", handleError, { once: true });
    });

    this.socket.addEventListener("message", (event) => {
      this.#handleMessage(event.data);
    });
    this.socket.addEventListener("close", () => {
      for (const pending of this.#pending.values()) {
        pending.reject(Error("CDP WebSocket closed."));
      }
      this.#pending.clear();
      this.readyPromise = null;
    });
  }

  #handleMessage(data) {
    const message = JSON.parse(String(data));
    if (message.id != null) {
      const pending = this.#pending.get(message.id);
      if (pending == null) {
        return;
      }

      this.#pending.delete(message.id);
      if (message.error != null) {
        pending.reject(
          Error(message.error.message ?? `CDP command ${message.id} failed.`),
        );
        return;
      }

      pending.resolve(message.result ?? {});
      return;
    }

    if (
      message.method === "Runtime.bindingCalled" &&
      message.params?.name === HOST_BINDING_NAME
    ) {
      try {
        this.emit("host-event", JSON.parse(message.params.payload));
      } catch (error) {
        this.logger.warning?.("[bridge] invalid host binding payload", {
          error: String(error?.message ?? error),
        });
      }
    }
  }

  async #installHostHooks() {
    await this.evaluate(
      ({ bindingName }) => {
        if (window.__o3CodeBridgeHostHooksInstalled === true) {
          return "already-installed";
        }

        const publish = (event) => {
          try {
            window[bindingName](JSON.stringify(event));
          } catch {}
        };

        window.__o3CodeBridgeHostHooksInstalled = true;
        window.__o3CodeBridgeWorkerUnsubscribers = new Map();

        window.addEventListener(
          "message",
          (event) => {
            publish({ type: "host-message", payload: event.data });
          },
          true,
        );

        window.__o3CodeBridgeSubscribeWorker = (workerId) => {
          if (window.__o3CodeBridgeWorkerUnsubscribers.has(workerId)) {
            return true;
          }

          const unsubscribe =
            window.electronBridge?.subscribeToWorkerMessages?.(
              workerId,
              (message) => {
                publish({
                  type: "worker-message",
                  workerId,
                  payload: message,
                });
              },
            );

          if (typeof unsubscribe !== "function") {
            return false;
          }

          window.__o3CodeBridgeWorkerUnsubscribers.set(workerId, unsubscribe);
          return true;
        };

        window.__o3CodeBridgeUnsubscribeWorker = (workerId) => {
          const unsubscribe =
            window.__o3CodeBridgeWorkerUnsubscribers.get(workerId);
          if (typeof unsubscribe === "function") {
            unsubscribe();
          }
          window.__o3CodeBridgeWorkerUnsubscribers.delete(workerId);
          return true;
        };

        return "installed";
      },
      [{ bindingName: HOST_BINDING_NAME }],
    );
  }

  async #publishInitialHostState() {
    const systemThemeVariant = await this.evaluate(() => {
      const hostVariant = window.electronBridge?.getSystemThemeVariant?.();
      if (hostVariant === "light" || hostVariant === "dark") {
        return hostVariant;
      }

      return window.matchMedia?.("(prefers-color-scheme: light)")?.matches
        ? "light"
        : "dark";
    });

    this.emit("host-event", {
      type: "system-theme-variant-updated",
      payload: systemThemeVariant,
    });
  }
}
