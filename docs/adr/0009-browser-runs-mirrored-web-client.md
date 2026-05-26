# Browser Runs The Mirrored Web Client

The Mirrored Web Client will run the webview UI in the browser, with the local Desktop Reconstruction acting as the Bridge Host for privileged capabilities. This rejects remote-desktop pixel streaming as the primary model: the browser should own UI state and interaction, while the Bridge Host supplies the same capability surface the desktop renderer receives.

For the first implementation, Bridge Mode may attach to the existing visible O3 Code renderer instead of requiring a dedicated hidden renderer. That is simpler and proves the Transparent Remote Renderer Bridge before adding a new Electron window lifecycle, with the accepted tradeoff that early web actions may affect the visible desktop window's route or state. A later hardening step can add a dedicated hidden Bridge Host renderer when independent web sessions or visible-window isolation become necessary.
