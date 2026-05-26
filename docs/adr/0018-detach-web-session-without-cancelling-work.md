# Detach Web Session Without Cancelling Work

When the Active Web Session disconnects or is replaced, Bridge Mode will detach the browser transport without cancelling local Desktop Reconstruction work. In-flight turns, app-server operations, worktree actions, and terminal processes continue under the local O3 Code instance.

This supports device and tab handoff without surprising cancellation. A new Active Web Session should reconnect to the current local state rather than expecting the old browser connection to have owned the underlying work.
