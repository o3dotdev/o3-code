import { chmod, mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { generateCACertificate } from "mockttp";

const RUNTIME_DIR_PREFIX = "o3-code-realtime-mitm-";

export async function generateRealtimeMitmCA({
  tmpdir = os.tmpdir(),
  generateCertificate = generateCACertificate,
} = {}) {
  const directory = await mkdtemp(path.join(tmpdir, RUNTIME_DIR_PREFIX));
  await chmod(directory, 0o700);
  const keyPath = path.join(directory, "ca-key.pem");
  const certPath = path.join(directory, "ca.pem");
  const { key, cert } = await generateCertificate({
    subject: {
      commonName: "O3 Code Realtime MITM",
      organizationName: "O3 Code",
    },
  });

  await writeFile(keyPath, key, { encoding: "utf8", mode: 0o600 });
  await writeFile(certPath, cert, { encoding: "utf8", mode: 0o600 });

  return {
    cert,
    certPath,
    directory,
    key,
    keyPath,
  };
}
