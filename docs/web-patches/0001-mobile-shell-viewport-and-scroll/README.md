# Mobile Shell Viewport And Scroll

## Status

Active

## Intent

Keep the browser-hosted Codex renderer visible on mobile and tablet browsers when text selection, copy, iOS accessory bars, popovers, keyboard changes, viewport shifts, or blank-area taps leave top-level page scroll drift behind.

This patch owns the browser shell stability contract through repo-owned Bridge code. It does not patch generated renderer chunks unless the bridge injection layer can no longer reach the behavior.
