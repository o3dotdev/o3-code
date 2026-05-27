# Persistent Web Access Port

Web access should randomly allocate a localhost sidecar port once and persist it under the O3 Code State Root, while the private Electron CDP control port remains dynamic per app run. This preserves a stable Mirrored Web Client URL across Desktop Reconstruction restarts for browser bookmarks and mobile handoff, without making the privileged CDP control surface predictable.
