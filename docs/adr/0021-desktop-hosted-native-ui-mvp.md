# Desktop-Hosted Native UI For MVP

Bridge Mode will initially allow native dialogs, menus, and OS surfaces to be shown by the local Desktop Reconstruction on behalf of the Mirrored Web Client. This includes context menus, application menus, file/folder pickers, export/save dialogs, and similar native interactions triggered through existing Electron capability paths.

This preserves full capability with less bridge-specific UI work, with the accepted limitation that a remote browser action may show native UI on the Mac. Browser-native replacements can be added later for specific surfaces where remote ergonomics matter.
