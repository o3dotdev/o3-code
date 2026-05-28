#!/usr/bin/env node
import { fileURLToPath } from "node:url";

import { runCli } from "./program.js";

export { normalizeDefaultStartArgv } from "./program.js";
export {
  createBaseState,
  readLauncherState,
  removeLauncherState,
  writeLauncherState,
} from "./state.js";

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  await runCli();
}
