# One Active Web Session For MVP

One Bridge Mode instance will support one Active Web Session during the MVP. When a new browser connects, it replaces the previous browser session instead of being rejected, matching a handoff from one device or tab to another.

This avoids multi-client conflicts over route state, pending requests, terminal streams, and renderer event subscriptions while keeping reconnect and device-switch behavior simple. True concurrent web sessions require later isolation, likely through dedicated Bridge Host renderers or separate O3 Code instances.
