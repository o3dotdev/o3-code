# Visible Renderer As Transport Host For MVP

The first Bridge Mode implementation may use the existing visible Desktop Reconstruction renderer as the Transport Host Renderer. The Mirrored Web Client is the intended user surface; any visible desktop window changes are an accepted MVP side effect of avoiding a dedicated hidden renderer at the start.

This keeps the first bridge slice simpler and avoids adding a new Electron window lifecycle before the Transparent Remote Renderer Bridge is proven. A dedicated hidden Bridge Host renderer remains the expected hardening step once session isolation or visible-window independence becomes necessary.
