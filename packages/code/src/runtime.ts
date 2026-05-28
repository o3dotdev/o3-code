import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import {
  cpSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

import type { O3CodePaths } from "./paths.js";

const require = createRequire(import.meta.url);
const CODEX_NATIVE_LINKS = [
  path.join("better-sqlite3", "build", "Release", "better_sqlite3.node"),
  path.join("node-pty", "build", "Release", "pty.node"),
  path.join("node-pty", "build", "Release", "spawn-helper"),
  path.join("objc-js", "prebuilds", "darwin-arm64", "node.napi.armv8.node"),
  path.join("objc-js", "prebuilds", "darwin-x64", "node.napi.node"),
];

export interface CodexAppResources {
  readonly appPath: string;
  readonly resourcesPath: string;
  readonly codexPath: string;
  readonly nodePath: string;
  readonly nodeReplPath: string;
  readonly rgPath: string;
  readonly nativeNodeModulesPath: string;
}

export interface DesktopLaunchPaths {
  readonly runtimeRoot: string;
  readonly appPath: string;
  readonly desktopRoot: string;
  readonly rendererIndexPath: string;
  readonly resourcesPath: string;
  readonly appServerRouterPath: string;
  readonly webviewDir: string;
  readonly iconPath: string;
  readonly trayTemplatePath: string;
}

export async function resolveCodexAppResourceModule(runtimeRoot: string): Promise<{
  readonly CODEX_APP_PATH_ENV: string;
  readonly assertCodexAppExecutableResources: (resources: CodexAppResources) => void;
  readonly getCodexAppInstallHelp: () => string;
  readonly resolveCodexAppResources: () => CodexAppResources;
}> {
  const modulePath = path.join(
    runtimeRoot,
    "packages",
    "codex-app-resources",
    "src",
    "codex-app.mjs",
  );
  return (await import(pathToFileURL(modulePath).toString())) as Awaited<
    ReturnType<typeof resolveCodexAppResourceModule>
  >;
}

export function ensurePackagedRuntimeExists(paths: O3CodePaths): void {
  const required = [
    path.join(paths.packagedRuntimeRoot, "apps", "desktop", "app", "package.json"),
    path.join(paths.packagedRuntimeRoot, "apps", "desktop", "app", ".vite", "build", "bootstrap.js"),
    path.join(paths.packagedRuntimeRoot, "apps", "desktop", "app", "webview", "index.html"),
    path.join(paths.packagedRuntimeRoot, "apps", "web", "app", "webview", "index.html"),
    path.join(paths.packagedRuntimeRoot, "packages", "bridge", "src", "sidecar.mjs"),
    path.join(
      paths.packagedRuntimeRoot,
      "packages",
      "app-server-router",
      "bin",
      "o3-app-server-router.mjs",
    ),
  ];

  for (const requiredPath of required) {
    if (!existsSync(requiredPath)) {
      throw new Error(
        `Package runtime payload is missing ${path.relative(paths.packageRoot, requiredPath)}. Run \`pnpm --filter @o3dotdev/code prepare:runtime\` before packing or local smoke tests.`,
      );
    }
  }
}

export function installRuntimePayload(paths: O3CodePaths): void {
  ensurePackagedRuntimeExists(paths);
  const markerPath = path.join(paths.activeRuntimeRoot, ".o3-package-runtime.json");
  const packageJson = JSON.parse(readFileSync(path.join(paths.packageRoot, "package.json"), "utf8"));
  const runtimeMetadataPath = path.join(paths.packagedRuntimeRoot, "package-runtime.json");
  const marker = JSON.stringify(
    {
      packageName: packageJson.name,
      packageVersion: packageJson.version,
      runtimeMetadata: existsSync(runtimeMetadataPath)
        ? JSON.parse(readFileSync(runtimeMetadataPath, "utf8"))
        : null,
      source: paths.packagedRuntimeRoot,
    },
    null,
    2,
  );

  if (existsSync(markerPath) && readFileSync(markerPath, "utf8").trim() === marker) {
    ensureActiveRuntimeNodeModules(paths);
    return;
  }

  rmSync(paths.activeRuntimeRoot, { force: true, recursive: true });
  mkdirSync(path.dirname(paths.activeRuntimeRoot), { recursive: true });
  cpSync(paths.packagedRuntimeRoot, paths.activeRuntimeRoot, {
    dereference: false,
    errorOnExist: false,
    force: true,
    recursive: true,
  });
  ensureActiveRuntimeNodeModules(paths);
  writeFileSync(markerPath, `${marker}\n`, "utf8");
}

export function ensureActiveRuntimeNodeModules(paths: O3CodePaths): void {
  const linkPath = path.join(paths.activeRuntimeRoot, "node_modules");
  const targetPath = resolvePackageNodeModulesRoot(paths.packageRoot);
  const linkStat = getOptionalLinkStat(linkPath);

  if (linkStat) {
    if (linkStat.isSymbolicLink()) {
      rmSync(linkPath, { force: true });
    } else {
      throw new Error(`Refusing to replace non-symlink runtime node_modules path: ${linkPath}`);
    }
  }

  symlinkSync(targetPath, linkPath, "dir");
}

export function resolveDesktopLaunchPaths(runtimeRoot: string): DesktopLaunchPaths {
  const appPath = path.join(runtimeRoot, "apps", "desktop", "app");
  const desktopRoot = path.join(runtimeRoot, "apps", "desktop");
  return {
    runtimeRoot,
    appPath,
    desktopRoot,
    rendererIndexPath: path.join(appPath, "webview", "index.html"),
    resourcesPath: path.join(desktopRoot, "resources"),
    appServerRouterPath: path.join(
      runtimeRoot,
      "packages",
      "app-server-router",
      "bin",
      "o3-app-server-router.mjs",
    ),
    webviewDir: path.join(runtimeRoot, "apps", "web", "app", "webview"),
    iconPath: path.join(desktopRoot, "resources", "o3-code-icon.png"),
    trayTemplatePath: path.join(desktopRoot, "resources", "codexTemplate.png"),
  };
}

export function assertDesktopRuntime(paths: DesktopLaunchPaths, resources: CodexAppResources): void {
  const required = [
    paths.appPath,
    paths.rendererIndexPath,
    paths.resourcesPath,
    path.join(paths.resourcesPath, "electron.icns"),
    path.join(paths.resourcesPath, "icon.icns"),
    paths.iconPath,
    paths.trayTemplatePath,
    path.join(paths.resourcesPath, "codexTemplate@2x.png"),
    paths.appServerRouterPath,
    paths.webviewDir,
    path.join(paths.webviewDir, "index.html"),
    resources.resourcesPath,
    resources.nodePath,
    resources.nodeReplPath,
    resources.nativeNodeModulesPath,
  ];

  for (const requiredPath of required) {
    if (!existsSync(requiredPath)) {
      throw new Error(`Missing required runtime path: ${requiredPath}`);
    }
  }
}

export function ensureExternalNativePayloadLinks({
  appPath,
  resources,
}: {
  readonly appPath: string;
  readonly resources: CodexAppResources;
}): void {
  for (const relativePath of CODEX_NATIVE_LINKS) {
    const targetPath = path.join(resources.nativeNodeModulesPath, relativePath);
    const linkPath = path.join(appPath, "node_modules", relativePath);

    if (!existsSync(targetPath)) {
      throw new Error(`Missing native payload in Codex.app resources: ${targetPath}`);
    }

    const linkStat = getOptionalLinkStat(linkPath);
    if (linkStat) {
      if (linkStat.isSymbolicLink()) {
        rmSync(linkPath, { force: true });
      } else {
        throw new Error(`Refusing to replace non-symlink native payload path: ${linkPath}`);
      }
    }

    mkdirSync(path.dirname(linkPath), { recursive: true });
    symlinkSync(targetPath, linkPath);
  }
}

export function prepareElectronExecutable({
  electronCacheRoot,
  resourcesPath,
}: {
  readonly electronCacheRoot: string;
  readonly resourcesPath: string;
}): string {
  const electronExecutable = String(require("electron"));
  if (process.platform !== "darwin") {
    return electronExecutable;
  }

  const electronPackageRoot = resolveDependencyPackageRoot("electron");
  const electronPackage = JSON.parse(
    readFileSync(path.join(electronPackageRoot, "package.json"), "utf8"),
  ) as { readonly version?: string };
  const electronDistApp = path.join(electronPackageRoot, "dist", "Electron.app");
  if (!existsSync(electronDistApp)) {
    return electronExecutable;
  }

  const localElectronApp = path.join(
    electronCacheRoot,
    `electron-${electronPackage.version ?? "unknown"}`,
    "O3 Code.app",
  );
  const localExecutable = path.join(localElectronApp, "Contents", "MacOS", "O3 Code");

  if (!existsSync(localExecutable)) {
    rmSync(localElectronApp, { force: true, recursive: true });
    mkdirSync(path.dirname(localElectronApp), { recursive: true });
    execFileSync("ditto", [electronDistApp, localElectronApp]);
    renameSync(path.join(localElectronApp, "Contents", "MacOS", "Electron"), localExecutable);
  }

  for (const [key, value] of [
    ["CFBundleName", "O3 Code"],
    ["CFBundleDisplayName", "O3 Code"],
    ["CFBundleExecutable", "O3 Code"],
    ["CFBundleIdentifier", "dev.o3.code.npm"],
  ]) {
    execFileSync("plutil", [
      "-replace",
      key,
      "-string",
      value,
      path.join(localElectronApp, "Contents", "Info.plist"),
    ]);
  }

  for (const name of ["electron.icns", "icon.icns"]) {
    cpSync(path.join(resourcesPath, name), path.join(localElectronApp, "Contents", "Resources", name));
  }

  return localExecutable;
}

export function defaultElectronUserDataPath(env: NodeJS.ProcessEnv = process.env): string {
  if (env.O3_CODE_USE_CODEX_USER_DATA === "1") {
    return path.join(homedir(), "Library", "Application Support", "Codex");
  }
  return path.join(homedir(), "Library", "Application Support", "O3 Code");
}

export function resolveCodexBuildNumber(launchPaths: DesktopLaunchPaths): string {
  for (const value of [
    process.env.CODEX_BUILD_NUMBER,
    readOptionalPackageMetadata(path.join(launchPaths.runtimeRoot, "package.json"))?.codexBuildNumber,
    readOptionalPackageMetadata(path.join(launchPaths.appPath, "package.json"))?.codexBuildNumber,
  ]) {
    const trimmed = String(value ?? "").trim();
    if (trimmed) {
      return trimmed;
    }
  }

  throw new Error("Missing codexBuildNumber package metadata.");
}

function getOptionalLinkStat(candidate: string) {
  try {
    return lstatSync(candidate);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

function readOptionalPackageMetadata(
  packagePath: string,
): { readonly codexBuildNumber?: string; readonly name?: string } | null {
  try {
    return JSON.parse(readFileSync(packagePath, "utf8")) as {
      readonly codexBuildNumber?: string;
      readonly name?: string;
    };
  } catch {
    return null;
  }
}

function resolvePackageNodeModulesRoot(packageRoot: string): string {
  const packageLocalNodeModules = path.join(packageRoot, "node_modules");
  if (existsSync(packageLocalNodeModules)) {
    return packageLocalNodeModules;
  }

  let current = resolveDependencyPackageRoot("mockttp");
  while (current !== path.dirname(current)) {
    if (path.basename(current) === "node_modules") {
      return current;
    }
    current = path.dirname(current);
  }

  throw new Error("Unable to locate installed package dependencies for the O3 Code runtime.");
}

function resolveDependencyPackageRoot(packageName: string): string {
  let current = path.dirname(require.resolve(packageName));
  while (current !== path.dirname(current)) {
    const packageJsonPath = path.join(current, "package.json");
    const packageMetadata = readOptionalPackageMetadata(packageJsonPath);
    if (packageMetadata?.name === packageName) {
      return current;
    }
    current = path.dirname(current);
  }

  throw new Error(`Unable to locate ${packageName} package root.`);
}
