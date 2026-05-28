import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

export async function ensureBridgeTlsCredentials({
  env = process.env,
  certDir = path.join(os.homedir(), ".o3-code", "bridge"),
  lanAddresses = [],
} = {}) {
  const certOverride = env.O3_CODE_BRIDGE_CERT_PATH?.trim();
  const keyOverride = env.O3_CODE_BRIDGE_KEY_PATH?.trim();

  if ((certOverride && !keyOverride) || (!certOverride && keyOverride)) {
    throw Error(
      "O3_CODE_BRIDGE_CERT_PATH and O3_CODE_BRIDGE_KEY_PATH must be set together.",
    );
  }

  if (certOverride && keyOverride) {
    return { certPath: certOverride, generated: false, keyPath: keyOverride };
  }

  const altNames = buildBridgeTlsAltNames(lanAddresses);
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(altNames))
    .digest("hex")
    .slice(0, 12);
  const certPath = path.join(certDir, `bridge-${hash}.crt`);
  const keyPath = path.join(certDir, `bridge-${hash}.key`);

  if (existsSync(certPath) && existsSync(keyPath)) {
    return { certPath, generated: false, keyPath };
  }

  await mkdir(certDir, { recursive: true });
  const configPath = path.join(certDir, `openssl-${hash}.cnf`);
  await writeFile(configPath, createOpenSslConfig(altNames));
  execFileSync(
    "openssl",
    [
      "req",
      "-x509",
      "-nodes",
      "-newkey",
      "rsa:2048",
      "-sha256",
      "-days",
      "825",
      "-keyout",
      keyPath,
      "-out",
      certPath,
      "-config",
      configPath,
    ],
    { stdio: "ignore" },
  );

  return { certPath, generated: true, keyPath };
}

export function buildBridgeTlsAltNames(lanAddresses = []) {
  return {
    dns: ["localhost"],
    ips: [
      "127.0.0.1",
      "::1",
      ...lanAddresses.filter((address) => address && address !== "127.0.0.1"),
    ],
  };
}

function createOpenSslConfig(altNames) {
  const lines = [
    "[req]",
    "default_bits = 2048",
    "prompt = no",
    "distinguished_name = dn",
    "x509_extensions = v3_req",
    "",
    "[dn]",
    "CN = O3 Code Bridge",
    "",
    "[v3_req]",
    "subjectAltName = @alt_names",
    "",
    "[alt_names]",
  ];

  altNames.dns.forEach((name, index) => {
    lines.push(`DNS.${index + 1} = ${name}`);
  });
  altNames.ips.forEach((address, index) => {
    lines.push(`IP.${index + 1} = ${address}`);
  });

  return `${lines.join("\n")}\n`;
}
