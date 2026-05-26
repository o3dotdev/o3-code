# Query Hydration Plus Sync Pulse

New Active Web Sessions should hydrate primarily through the preserved web UI's normal app queries routed through the Electron Bridge Host. Bridge Mode should add only a small Bridge Sync Pulse for current host, connection, and shared-object status that the browser needs before or during normal query loading.

This avoids inventing a separate full-state serializer for the web bridge. A custom snapshot protocol can be added later only if normal query hydration and the Bridge Sync Pulse leave specific reconnect gaps.
