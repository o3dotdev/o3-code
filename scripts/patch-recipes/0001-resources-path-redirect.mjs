import { snippet } from "./lib.mjs";

const id = "resources-path-redirect";

function findBootstrapEntry(context) {
  return context.findOne({
    root: "apps/desktop/app/.vite/build",
    description: "Electron bootstrap entry",
    predicate: ({ source }) =>
      source.includes("n.app.setName(e.ft(x))") &&
      source.includes("runMainAppStartup") &&
      source.includes("Desktop bootstrap failed to start the main app"),
  });
}

const bootstrapAnchor = snippet([
  "const e = require(`./app-session-DpDFpgD2.js`),",
  "  t = require(`./workspace-root-drop-handler-Bom6Z7sW.js`);",
]);

const resourcesPathPrefix = `${snippet([
  "// o3-code-patch-begin: resources-path-redirect",
  "const localResourcesPath = process.env.CODEX_ELECTRON_RESOURCES_PATH?.trim();",
  "localResourcesPath &&",
  "  Object.defineProperty(process, `resourcesPath`, {",
  "    value: localResourcesPath,",
  "    configurable: !0,",
  "  });",
  "// o3-code-patch-end: resources-path-redirect",
])}
`;

export default {
  id,
  recordPath: "docs/patches/0001-resources-path-redirect.md",
  dependsOn: [],
  apply(context) {
    const file = findBootstrapEntry(context);
    return context.prependOnce({
      file,
      patchId: id,
      prefix: resourcesPathPrefix,
      anchor: bootstrapAnchor,
    });
  },
};
