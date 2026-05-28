import fs from "node:fs";
import path from "node:path";

export type TailscaleCliVariant = "path" | "mac-app-store" | "missing";

export interface TailscaleMobileAccessHelp {
  readonly available: boolean;
  readonly variant: TailscaleCliVariant;
  readonly serveCommand: string | null;
  readonly statusCommand: string | null;
  readonly resetCommand: string | null;
  readonly installHint: string | null;
}

export const MAC_APP_STORE_TAILSCALE_PATH =
  "/Applications/Tailscale.app/Contents/MacOS/Tailscale";

const INSTALL_HINT =
  "Install Tailscale for macOS, sign in on this Mac and your mobile device, then run the serve command.";

export function resolveTailscaleMobileAccessHelp({
  appStorePath = MAC_APP_STORE_TAILSCALE_PATH,
  env = process.env,
  existsSync = fs.existsSync,
  webAccessUrl,
}: {
  readonly appStorePath?: string;
  readonly env?: NodeJS.ProcessEnv;
  readonly existsSync?: (filePath: string) => boolean;
  readonly webAccessUrl: string | null;
}): TailscaleMobileAccessHelp {
  const pathCli = findExecutableOnPath("tailscale", env.PATH, existsSync);
  if (pathCli != null) {
    return createHelp({
      commandPrefix: "tailscale",
      variant: "path",
      webAccessUrl,
    });
  }

  if (existsSync(appStorePath)) {
    return createHelp({
      commandPrefix: `TAILSCALE_BE_CLI=1 ${appStorePath}`,
      variant: "mac-app-store",
      webAccessUrl,
    });
  }

  return {
    available: false,
    variant: "missing",
    serveCommand: null,
    statusCommand: null,
    resetCommand: null,
    installHint: INSTALL_HINT,
  };
}

function createHelp({
  commandPrefix,
  variant,
  webAccessUrl,
}: {
  readonly commandPrefix: string;
  readonly variant: Exclude<TailscaleCliVariant, "missing">;
  readonly webAccessUrl: string | null;
}): TailscaleMobileAccessHelp {
  return {
    available: true,
    variant,
    serveCommand: webAccessUrl
      ? `${commandPrefix} serve --bg ${webAccessUrl}`
      : null,
    statusCommand: `${commandPrefix} serve status`,
    resetCommand: `${commandPrefix} serve reset`,
    installHint: null,
  };
}

function findExecutableOnPath(
  executable: string,
  pathValue: string | undefined,
  existsSync: (filePath: string) => boolean,
): string | null {
  if (!pathValue?.trim()) {
    return null;
  }

  for (const directory of pathValue.split(path.delimiter)) {
    if (!directory) {
      continue;
    }
    const candidate = path.join(directory, executable);
    if (existsSync(candidate)) {
      return candidate;
    }
  }
  return null;
}
