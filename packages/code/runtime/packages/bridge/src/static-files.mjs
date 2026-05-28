import path from "node:path";

export function getWebviewCacheControl(filePath) {
  if (path.basename(filePath) === "bridge-shim.js") {
    return "no-store";
  }

  return "no-cache";
}

export function resolveWebviewPath({ urlPathname, webviewDir }) {
  const pathname = decodeURIComponent(urlPathname);
  const relativePath =
    pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const candidate = path.resolve(webviewDir, relativePath);
  const relativeToRoot = path.relative(webviewDir, candidate);

  if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)) {
    return null;
  }

  return candidate;
}

export function shouldServeSpaFallback({ method, urlPathname }) {
  if (method !== "GET" && method !== "HEAD") {
    return false;
  }

  const pathname = decodeURIComponent(urlPathname);
  if (pathname === "/" || pathname.startsWith("/assets/")) {
    return false;
  }

  return path.extname(pathname) === "";
}
