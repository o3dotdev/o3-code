import fs from "node:fs";

import type { O3CodePaths } from "./paths.js";

export function printLogs({
  follow = false,
  lineCount = 80,
  paths,
}: {
  readonly follow?: boolean;
  readonly lineCount?: number;
  readonly paths: O3CodePaths;
}): void {
  const files = [
    ["launcher", paths.launcherLogPath],
    ["desktop", paths.desktopLogPath],
    ["bridge", paths.bridgeLogPath],
  ] as const;

  for (const [label, filePath] of files) {
    printTail(label, filePath, lineCount);
  }

  if (follow) {
    followFiles(files);
  }
}

function printTail(label: string, filePath: string, lineCount: number): void {
  if (!fs.existsSync(filePath)) {
    console.log(`[${label}] no log file at ${filePath}`);
    return;
  }

  const body = fs.readFileSync(filePath, "utf8");
  const lines = body.split(/\r?\n/).filter((line) => line.length > 0);
  console.log(`[${label}] ${filePath}`);
  for (const line of lines.slice(-lineCount)) {
    console.log(line);
  }
}

function followFiles(files: readonly (readonly [string, string])[]): void {
  const offsets = new Map<string, number>();
  for (const [, filePath] of files) {
    offsets.set(filePath, fs.existsSync(filePath) ? fs.statSync(filePath).size : 0);
  }

  const interval = setInterval(() => {
    for (const [label, filePath] of files) {
      const previousOffset = offsets.get(filePath) ?? 0;
      if (!fs.existsSync(filePath)) {
        continue;
      }
      const stat = fs.statSync(filePath);
      if (stat.size < previousOffset) {
        offsets.set(filePath, 0);
      }
      if (stat.size <= previousOffset) {
        continue;
      }

      const fd = fs.openSync(filePath, "r");
      const buffer = Buffer.alloc(stat.size - previousOffset);
      fs.readSync(fd, buffer, 0, buffer.length, previousOffset);
      fs.closeSync(fd);
      offsets.set(filePath, stat.size);
      for (const line of buffer.toString("utf8").split(/\r?\n/)) {
        if (line) {
          console.log(`[${label}] ${line}`);
        }
      }
    }
  }, 500);

  const stop = () => {
    clearInterval(interval);
    process.exit(0);
  };
  process.once("SIGINT", stop);
  process.once("SIGTERM", stop);
}
