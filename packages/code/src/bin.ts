#!/usr/bin/env node
import { realpathSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { runCli } from "./program.js";

export { normalizeDefaultStartArgv } from "./program.js";
export {
  createBaseState,
  readLauncherState,
  removeLauncherState,
  writeLauncherState,
} from "./state.js";
export { renderStartupProgressBar } from "./ui.js";

if (isDirectRun()) {
  await runCli();
}

function isDirectRun(): boolean {
  if (!process.argv[1]) {
    return false;
  }
  try {
    return realpathSync(process.argv[1]) === fileURLToPath(import.meta.url);
  } catch {
    return false;
  }
}
