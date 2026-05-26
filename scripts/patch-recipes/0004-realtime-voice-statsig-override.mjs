import { snippet } from "./lib.mjs";

const id = "realtime-voice-statsig-override";

function findStatsigChunk(context) {
  return context.findOne({
    root: "apps/desktop/app/webview/assets",
    description: "shared Statsig webview chunk with local gate override set",
    predicate: ({ file, source }) =>
      /\/statsig-[A-Za-z0-9_-]+\.js$/.test(file) &&
      source.includes("var o3CodeForcedFeatureGates = new Set()") &&
      source.includes("function o3CodeShouldForceFeatureGate"),
  });
}

export default {
  id,
  recordPath: "docs/patches/0004-realtime-voice-statsig-override.md",
  dependsOn: ["statsig-gate-overrides"],
  apply(context) {
    const file = findStatsigChunk(context);
    return context.replaceOnce({
      file,
      patchId: id,
      name: "realtime voice forced gate",
      before: snippet([
        "// o3-code-patch-end: statsig-gate-overrides",
        "function Ze(e) {",
      ]),
      after: snippet([
        "// o3-code-patch-end: statsig-gate-overrides",
        "// o3-code-patch-begin: realtime-voice-statsig-override",
        "o3CodeForcedFeatureGates.add(`2380644311`);",
        "// o3-code-patch-end: realtime-voice-statsig-override",
        "function Ze(e) {",
      ]),
    });
  },
};
