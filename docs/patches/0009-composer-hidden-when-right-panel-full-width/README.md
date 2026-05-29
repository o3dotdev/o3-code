# 0009 Composer Hidden When Right Panel Full Width

## Status

Active

## Intent

When the right side panel is expanded to full width ("Expand panel"), the
floating bottom message composer keeps rendering as an overlay over the
full-screen panel content (terminal, browser, diffs, artifacts). The composer is
not useful in that state, so O3 Code hides it while the right panel is full
width and restores it when the panel returns to its regular width.

This Patch only gates the shared composer overlay on the existing
right-panel-full-width state. It does not change the full-width toggle, the panel
width math, or composer behavior in the normal split layout.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
