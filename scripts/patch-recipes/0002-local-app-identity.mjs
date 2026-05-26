import { snippet } from "./lib.mjs";

const id = "local-app-identity";

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

function findMainBundle(context) {
  return context.findOne({
    root: "apps/desktop/app/.vite/build",
    description: "Electron main bundle with app identity hooks",
    predicate: ({ source }) =>
      source.includes("dock?.setIcon") &&
      source.includes("codexTemplate.png") &&
      source.includes("nativeImage.createFromPath") &&
      source.includes("runMainAppStartup"),
  });
}

const bootstrapReplacements = [
  {
    name: "app name override",
    before: snippet(["  n.app.setName(e.ft(x)),", "  n.app.setPath("]),
    after: snippet([
      "  n.app.setName(e.ft(x)),",
      "  // o3-code-patch-begin: local-app-identity",
      "  process.env.O3_CODE_APP_NAME?.trim() &&",
      "    n.app.setName(process.env.O3_CODE_APP_NAME.trim()),",
      "  // o3-code-patch-end: local-app-identity",
      "  n.app.setPath(",
    ]),
  },
];

const mainBundleReplacements = [
  {
    name: "dock icon override",
    before: snippet(["    x = () => {", "      switch (r) {"]),
    after: snippet([
      "    x = () => {",
      "      // o3-code-patch-begin: local-app-identity",
      "      let e = process.env.O3_CODE_APP_ICON_PATH?.trim();",
      "      if (e && (0, o.existsSync)(e)) return e;",
      "      // o3-code-patch-end: local-app-identity",
      "      switch (r) {",
    ]),
  },
  {
    name: "tray template override",
    before: snippet([
      "    let e = [",
      "      ...(n.app.isPackaged",
      "        ? [(0, i.join)(process.resourcesPath, `codexTemplate.png`)]",
      "        : []),",
    ]),
    after: snippet([
      "    let e = [",
      "      // o3-code-patch-begin: local-app-identity",
      "      ...(process.env.O3_CODE_TRAY_TEMPLATE_PATH?.trim()",
      "        ? [process.env.O3_CODE_TRAY_TEMPLATE_PATH.trim()]",
      "        : []),",
      "      // o3-code-patch-end: local-app-identity",
      "      ...(n.app.isPackaged",
      "        ? [(0, i.join)(process.resourcesPath, `codexTemplate.png`)]",
      "        : []),",
    ]),
  },
];

function assertRepoLocalIdentityInputs(context) {
  context.assertContains({
    file: "scripts/start.mjs",
    patchId: id,
    snippets: [
      { name: "local Electron app name", text: '"O3 Code.app"' },
      { name: "local executable name", text: '"O3 Code"' },
      { name: "app name env", text: "O3_CODE_APP_NAME" },
      { name: "app icon env", text: "O3_CODE_APP_ICON_PATH" },
      { name: "tray template env", text: "O3_CODE_TRAY_TEMPLATE_PATH" },
    ],
  });
  context.assertFilesExist({
    patchId: id,
    files: [
      "apps/desktop/branding/o3-code-icon/source/o3-glyph.svg",
      "apps/desktop/branding/o3-code-icon/generated/o3-code-app-icon-1024.png",
      "apps/desktop/branding/o3-code-icon/generated/o3-code-icon-preview.png",
      "apps/desktop/branding/o3-code-icon/generated/o3-code.icns",
      "apps/desktop/resources/electron.icns",
      "apps/desktop/resources/icon.icns",
      "apps/desktop/resources/o3-code-icon.png",
      "apps/desktop/resources/codexTemplate.png",
      "apps/desktop/resources/codexTemplate@2x.png",
    ],
  });
}

export default {
  id,
  recordPath: "docs/patches/0002-local-app-identity.md",
  dependsOn: ["resources-path-redirect"],
  apply(context) {
    const bootstrapFile = findBootstrapEntry(context);
    const bootstrapResult = context.replaceSet({
      file: bootstrapFile,
      patchId: id,
      replacements: bootstrapReplacements,
    });

    const mainBundleFile = findMainBundle(context);
    const mainBundleResult = context.replaceSet({
      file: mainBundleFile,
      patchId: id,
      replacements: mainBundleReplacements,
    });

    assertRepoLocalIdentityInputs(context);

    return { changed: bootstrapResult.changed || mainBundleResult.changed };
  },
};
