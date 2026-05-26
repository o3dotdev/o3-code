# Stage Browser Files For Desktop Capabilities

Bridge Mode will handle browser-selected files by uploading their bytes to the sidecar and creating Bridge-Staged Files on the local machine. The Mirrored Web Client should not fake local filesystem paths for ordinary browser `File` objects; local path references are only valid after bridge staging.

This preserves browser security semantics while still allowing the Desktop Reconstruction to process uploads through existing local-file capability paths. The Bridge Shim can return `null` for `getPathForFile` unless a file has been staged and mapped by Bridge Mode.
