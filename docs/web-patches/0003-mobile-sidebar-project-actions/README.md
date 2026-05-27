# Mobile Sidebar Project Actions

## Status

Active.

## Intent

Keep project row action icons visible in the Mirrored Web Client on touch browser layouts. The Desktop Reconstruction keeps the upstream hover behavior, while browser touch surfaces show the project menu and new-chat controls without requiring hover.

## Scope

- Applies only to project rows in the left sidebar.
- Leaves thread row hover actions, timestamps, shortcut badges, and section-header controls unchanged.
- Uses bridge-injected CSS for the touch-only behavior and stable classes in the derived bundled asset for durable selectors.
