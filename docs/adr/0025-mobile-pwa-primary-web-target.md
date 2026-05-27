# Mobile PWA As Primary Web Target

## Status

Accepted

For mobile-specific Mirrored Web Client patches, O3 Code will treat installed PWA or home-screen mode as the primary supported mobile browser target. Ordinary mobile browser tabs remain best effort: Web Patches should not deliberately break them, but mobile layout, safe-area, viewport, and gesture validation should optimize for the installed mobile app surface unless a later requirement explicitly broadens support.

This narrows the browser matrix for mobile UI work. Mobile browser tabs have unstable browser chrome, visual viewport shifts, toolbar occlusion, and inconsistent safe-area behavior; requiring first-class support for both tab and PWA modes would make every mobile patch harder to design, validate, and refresh.

PWA validation can start as documented manual verification when automation cannot faithfully emulate installed mode. Product prompts that guide mobile users to install or use the PWA are later UX work, not part of the patch architecture itself.
