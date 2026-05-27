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

  async captureBrowserPageScreenshot({ url }) {
    await this.connect();
    const target = pickBrowserPageTarget({
      targetUrl: this.targetUrl,
      targets: await this.#fetchTargets(),
      url,
    });

    if (target?.webSocketDebuggerUrl == null) {
      return null;
    }

    const page = new EphemeralCdpPage(target.webSocketDebuggerUrl);
    try {
      await page.connect();
      await page.send("Page.enable").catch(() => {});
      const screenshot = await page.send("Page.captureScreenshot", {
        format: "png",
        fromSurface: true,
      });
      if (typeof screenshot.data !== "string" || screenshot.data.length === 0) {
        return null;
      }

      return {
        data: screenshot.data,
        mimeType: "image/png",
        targetUrl: target.url ?? null,
        title: target.title ?? null,
      };
    } finally {
      page.close();
    }
  }

  async #fetchTargets() {
    const response = await fetch(
      `http://${this.cdpHost}:${this.cdpPort}/json/list`,
    );
    if (!response.ok) {
      throw Error(`CDP target list failed with HTTP ${response.status}.`);
    }

    return await response.json();
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
    const targets = await this.#fetchTargets();
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

export function pickBrowserPageTarget({ targets, targetUrl, url }) {
  const requestedUrl = normalizePageUrl(url);
  if (requestedUrl == null) {
    return null;
  }

  const scored = targets
    .filter((target) => {
      return (
        target?.type === "page" &&
        typeof target.webSocketDebuggerUrl === "string" &&
        typeof target.url === "string" &&
        target.url !== targetUrl
      );
    })
    .map((target) => ({
      score: scoreTargetUrl(normalizePageUrl(target.url), requestedUrl),
      target,
    }))
    .filter(({ score }) => score > 0)
    .sort((left, right) => right.score - left.score);

  return scored[0]?.target ?? null;
}

function normalizePageUrl(value) {
  if (typeof value !== "string" || value.length === 0) {
    return null;
  }

  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }

    url.hash = "";
    return url;
  } catch {
    return null;
  }
}

function scoreTargetUrl(target, requested) {
  if (target == null || requested == null) {
    return 0;
  }

  if (target.href === requested.href) {
    return 100;
  }

  if (
    target.origin === requested.origin &&
    trimTrailingSlash(target.pathname) === trimTrailingSlash(requested.pathname)
  ) {
    return 80;
  }

  if (target.hostname === requested.hostname) {
    return 40;
  }

  if (stripWww(target.hostname) === stripWww(requested.hostname)) {
    return 30;
  }

  return 0;
}

function stripWww(hostname) {
  return hostname.startsWith("www.") ? hostname.slice(4) : hostname;
}

function trimTrailingSlash(value) {
  return value.length > 1 ? value.replace(/\/+$/, "") : value;
}

class EphemeralCdpPage {
  #nextId = 1;
  #pending = new Map();
  #socket = null;

  constructor(url) {
    this.url = url;
  }

  async connect() {
    this.#socket = new WebSocket(this.url);
    await new Promise((resolve, reject) => {
      const cleanup = () => {
        this.#socket.removeEventListener("open", handleOpen);
        this.#socket.removeEventListener("error", handleError);
      };
      const handleOpen = () => {
        cleanup();
        resolve();
      };
      const handleError = (event) => {
        cleanup();
        reject(Error(`CDP page WebSocket failed: ${event.message ?? "error"}`));
      };

      this.#socket.addEventListener("open", handleOpen, { once: true });
      this.#socket.addEventListener("error", handleError, { once: true });
    });

    this.#socket.addEventListener("message", (event) => {
      this.#handleMessage(event.data);
    });
    this.#socket.addEventListener("close", () => {
      for (const pending of this.#pending.values()) {
        pending.reject(Error("CDP page WebSocket closed."));
      }
      this.#pending.clear();
    });
  }

  async send(method, params = {}) {
    if (this.#socket == null || this.#socket.readyState !== WebSocket.OPEN) {
      throw Error("CDP page WebSocket is not open.");
    }

    const id = this.#nextId++;
    const message = { id, method, params };
    return await new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
      this.#socket.send(JSON.stringify(message));
    });
  }

  close() {
    this.#socket?.close();
  }

  #handleMessage(data) {
    const message = JSON.parse(String(data));
    if (message.id == null) {
      return;
    }

    const pending = this.#pending.get(message.id);
    if (pending == null) {
      return;
    }

    this.#pending.delete(message.id);
    if (message.error != null) {
      pending.reject(
        Error(
          message.error.message ?? `CDP page command ${message.id} failed.`,
        ),
      );
      return;
    }

    pending.resolve(message.result ?? {});
  }
}
