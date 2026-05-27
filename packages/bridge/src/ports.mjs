import net from "node:net";

export async function allocateLoopbackPort(host = "127.0.0.1") {
  return await allocateTcpPort(host);
}

export async function isTcpPortAvailable(port, host = "127.0.0.1") {
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    return false;
  }

  return await new Promise((resolve) => {
    const server = net.createServer();
    const finish = (available) => {
      server.removeAllListeners();
      resolve(available);
    };

    server.once("error", () => finish(false));
    server.listen(port, host, () => {
      server.close((error) => finish(error == null));
    });
  });
}

export async function allocateTcpPort(host = "127.0.0.1") {
  return await new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once("error", reject);
    server.listen(0, host, () => {
      const address = server.address();
      const port = address && typeof address === "object" ? address.port : null;

      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        if (port == null) {
          reject(Error("Failed to allocate a TCP port."));
          return;
        }

        resolve(port);
      });
    });
  });
}

export function parsePortOverride(value, name) {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }

  const port = Number(trimmed);
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw Error(`${name} must be an integer TCP port from 1 to 65535.`);
  }

  return port;
}
