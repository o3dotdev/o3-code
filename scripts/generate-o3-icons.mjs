import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const brandingDir = path.join(
  repoRoot,
  "apps",
  "desktop",
  "branding",
  "o3-code-icon",
);
const sourceSvgPath = path.join(brandingDir, "source", "o3-glyph.svg");
const generatedDir = path.join(brandingDir, "generated");
const resourcesDir = path.join(repoRoot, "apps", "desktop", "resources");
const iconsetDir = path.join(generatedDir, "O3Code.iconset");

const sourceSvg = readFileSync(sourceSvgPath, "utf8");
const pathMarkup = sourceSvg
  .match(/<path\b[\s\S]*?\/>/g)
  ?.join("\n")
  .replaceAll(/fill="#000000"/g, 'fill="currentColor"');
const trayPathMarkup = pathMarkup?.replaceAll(
  'stroke="none"',
  'stroke="currentColor" stroke-width="18" stroke-linejoin="round"',
);

if (!pathMarkup) {
  throw new Error(`No SVG path markup found in ${sourceSvgPath}`);
}

rmSync(generatedDir, { force: true, recursive: true });
mkdirSync(generatedDir, { recursive: true });
mkdirSync(iconsetDir, { recursive: true });

function run(command, args) {
  execFileSync(command, args, { stdio: "inherit" });
}

function renderSvg(svgPath, pngPath, size) {
  run("rsvg-convert", [
    "--format",
    "png",
    "--width",
    String(size),
    "--height",
    String(size),
    "--output",
    pngPath,
    svgPath,
  ]);
}

function glyphSvg(color, markup = pathMarkup) {
  return `
    <svg x="84" y="300" width="856" height="424" viewBox="176 350 672 332" color="${color}">
      ${markup}
    </svg>
  `;
}

const appSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <rect x="64" y="64" width="896" height="896" rx="208" fill="#050505"/>
  ${glyphSvg("#ffffff", trayPathMarkup)}
</svg>
`;

const traySvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <svg x="0.2" y="4.4" width="17.6" height="9.2" viewBox="176 350 672 332" color="#ffffff">
    ${trayPathMarkup}
  </svg>
</svg>
`;

const appSvgPath = path.join(generatedDir, "o3-code-app-icon.svg");
const traySvgPath = path.join(generatedDir, "o3-code-tray-template.svg");
writeFileSync(appSvgPath, appSvg);
writeFileSync(traySvgPath, traySvg);

for (const [name, size] of [
  ["icon_16x16.png", 16],
  ["icon_16x16@2x.png", 32],
  ["icon_32x32.png", 32],
  ["icon_32x32@2x.png", 64],
  ["icon_128x128.png", 128],
  ["icon_128x128@2x.png", 256],
  ["icon_256x256.png", 256],
  ["icon_256x256@2x.png", 512],
  ["icon_512x512.png", 512],
  ["icon_512x512@2x.png", 1024],
]) {
  renderSvg(appSvgPath, path.join(iconsetDir, name), size);
}

const appPngPath = path.join(generatedDir, "o3-code-app-icon-1024.png");
const tray1xPath = path.join(generatedDir, "o3-code-tray-template.png");
const tray2xPath = path.join(generatedDir, "o3-code-tray-template@2x.png");
const icnsPath = path.join(generatedDir, "o3-code.icns");
renderSvg(appSvgPath, appPngPath, 1024);
renderSvg(traySvgPath, tray1xPath, 18);
renderSvg(traySvgPath, tray2xPath, 36);
run("iconutil", ["-c", "icns", iconsetDir, "-o", icnsPath]);

const previewPath = path.join(generatedDir, "o3-code-icon-preview.png");
run("magick", [
  "-size",
  "1400x840",
  "xc:#0d1117",
  "(",
  appPngPath,
  "-resize",
  "512x512",
  ")",
  "-geometry",
  "+72+112",
  "-composite",
  "(",
  appPngPath,
  "-resize",
  "256x256",
  ")",
  "-geometry",
  "+680+112",
  "-composite",
  "(",
  appPngPath,
  "-resize",
  "128x128",
  ")",
  "-geometry",
  "+1016+112",
  "-composite",
  "(",
  appPngPath,
  "-resize",
  "64x64",
  ")",
  "-geometry",
  "+1216+112",
  "-composite",
  "(",
  tray2xPath,
  "-filter",
  "point",
  "-resize",
  "180x180",
  ")",
  "-geometry",
  "+700+504",
  "-composite",
  "(",
  tray1xPath,
  "-filter",
  "point",
  "-resize",
  "180x180",
  ")",
  "-geometry",
  "+976+504",
  "-composite",
  previewPath,
]);

for (const [from, to] of [
  [icnsPath, "electron.icns"],
  [icnsPath, "icon.icns"],
  [appPngPath, "o3-code-icon.png"],
  [tray1xPath, "codexTemplate.png"],
  [tray2xPath, "codexTemplate@2x.png"],
]) {
  run("cp", [from, path.join(resourcesDir, to)]);
}

console.log(`Generated O3 Code icons in ${generatedDir}`);
