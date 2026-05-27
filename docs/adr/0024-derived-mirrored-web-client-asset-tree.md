# Derived Mirrored Web Client Asset Tree

## Status

Accepted

The Mirrored Web Client will serve a committed browser-owned asset tree at `apps/web/app/webview`, derived from the patched Desktop Reconstruction Webview Assets, rather than serving `apps/desktop/app/webview` directly. Source Refresh work should rebuild that derived tree after Normalization and Desktop Reconstruction Patch SOPs, then apply Mirrored Web Client Patch SOPs to the derived tree so browser-only UI fixes do not leak into the Desktop Reconstruction.

This keeps the browser experience tied to the same upstream UI material without making it a separate hand-authored frontend product. The rejected alternative was serving the Desktop Reconstruction Webview Assets directly with response-time rewrites only; that kept fewer files in the repo but made browser-specific patches harder to inspect, validate, and preserve as a separate patch layer.

The derived tree is committed for the same reason O3 Code commits preserved Desktop Reconstruction material: checkout should contain the runnable patched state, and Source Refresh PRs should expose browser-surface diffs and patch evidence for review.

The derivation command, `pnpm derive:web`, should only rebuild the browser asset tree from the already patched Desktop Reconstruction Webview Assets. It is a destructive but scoped rebuild of `apps/web/app/webview`: delete that directory, copy `apps/desktop/app/webview` into it, and stop. It must not preserve old Web Patch Markers, apply Mirrored Web Client Patches, normalize files, or touch `apps/web` files outside `app/webview`; those patches are AI-owned SOP migrations because their targets depend on bundled renderer code that can move or change between Codex App releases.

Mirrored Web Client Patch SOPs live separately under `docs/web-patches/`, using the same `README.md`, `SOP.md`, and `EVIDENCE.md` shape as Desktop Reconstruction patches under `docs/patches/`.

Desktop-owned Bridge Mode serves `apps/web/app/webview` by default so the browser runs the derived and browser-patched surface. Environment overrides may still point the Bridge Sidecar at another webview directory for debugging, but they are not the default runtime path.

Because Normalization canonicalizes uniquely resolvable generated asset filenames, the Bridge Sidecar must not serve Mirrored Web Client assets with immutable long-lived browser caching. Stable filenames such as `app-main.js` should revalidate so local refreshes cannot mix stale browser-cached chunks with newly derived assets.
