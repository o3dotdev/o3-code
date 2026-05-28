# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: `26.519.81530`
- Build: `3178`
- `app.asar` SHA-256: `bf4c3f09b2cbab0714e23f0e9f7f9ce89146b5d47f4462ca77fc2c41394fceaa`

## Decisions Captured

- Use `Agent Runtime` as the canonical term; keep UI label `Agent`.
- Terminal Agent Runtime threads are ordinary local conversations plus persisted Agent Runtime metadata.
- Each terminal-agent thread has an O3 Code `conversationId`, a live terminal `sessionId`, and a durable External Agent Session UUID.
- Initial prompts are passed as quoted CLI prompt arguments.
- Follow-up composer text writes to stdin while the CLI process is live.
- Relaunch after process loss or app restart uses the runtime resume command with the stored External Agent Session UUID.
- Claude Code resume is first-class because initial launch supports `--session-id <uuid>` and later launch supports `--resume <uuid>`.
- Codex CLI resume is best effort until implementation can discover the Codex-created session id or verify `codex resume <uuid> "PROMPT"` can create a new session.
- Runtime/model/permission identity is disabled after initial start; in-session changes belong in the CLI TUI.
- Attachments are out of scope for terminal runtimes in the first pass.
- The feature should ship directly once implemented, without a local feature flag.
- Claude Code default model is `opus`.
- Codex CLI model label is `5.5`; launch value is `gpt-5.5`.

## Known Sites

- Agent Runtime registry and metadata store:
  `apps/desktop/app/webview/assets/agent-runtime-terminal-threads.js`
  and derived `apps/web/app/webview/assets/agent-runtime-terminal-threads.js`
- Composer local submit flow and Agent picker:
  `apps/desktop/app/webview/assets/composer.js`
  and derived `apps/web/app/webview/assets/composer.js`
- Empty local conversation creation: `start-conversation` call sites in
  `apps/desktop/app/webview/assets/composer.js`
- Start conversation parameter builder:
  `apps/desktop/app/webview/assets/build-start-conversation-params.js`
- Terminal Agent Runtime body routing:
  `apps/desktop/app/webview/assets/local-conversation-page.js`
  and derived `apps/web/app/webview/assets/local-conversation-page.js`
- Thread archive cleanup:
  `apps/desktop/app/webview/assets/thread-actions.js`
  and derived `apps/web/app/webview/assets/thread-actions.js`
- Integrated terminal service:
  `apps/desktop/app/webview/assets/terminal-service.js`
- Terminal panel renderer/export:
  `apps/desktop/app/webview/assets/thread-page-bottom-panel-state-DZYvoqqn.js`
  and derived `apps/web/app/webview/assets/thread-page-bottom-panel-state-DZYvoqqn.js`
- Main-process terminal manager: `apps/desktop/app/.vite/build/main.js`

## Patch Shape

- Added a static Agent Runtime registry for `Codex App`, `Claude Code`, and
  `Codex CLI`, plus in-window metadata persistence keyed by `conversationId`.
- Added an `Agent` selector beside the composer footer controls. Terminal
  runtimes get their own model selector and the normal Codex App model picker is
  hidden while a terminal runtime is selected.
- Terminal runtime first submit creates an empty local conversation, stores
  Agent Runtime metadata, sets a readable thread title, navigates to the local
  thread, and launches the CLI in `terminal-agent:${conversationId}`.
- Terminal bodies render the existing terminal panel in the normal thread
  content column and retain a multiline composer footer using the same composer
  surface as ordinary chat. The launch/resume effect runs before the terminal
  panel attaches so app-restart resume queues the CLI command instead of
  attaching an empty shell.
- Terminal agent launch commands force `TERM=xterm-256color`,
  `COLORTERM=truecolor`, and color-enabling environment variables so CLI TUIs
  keep ANSI color when started through the app terminal service.
- Follow-up text in a terminal-agent thread writes to stdin while live, or
  relaunches with the runtime resume command and the submitted prompt when the
  process is no longer live.
- Live follow-up writes terminate with carriage return (`\r`), matching a real
  terminal Enter key. Line feed (`\n`) is not used because Claude Code treats it
  as a multiline prompt insert rather than submit.
- Terminal-agent composers disable realtime and dictation controls; voice or
  realtime mode changes belong inside the active CLI TUI for v1.
- Archive cleanup closes the deterministic terminal session and removes the
  terminal-agent metadata.
- Terminal runtime attachment controls are suppressed for v1.
- Rebuilt the Mirrored Web Client Asset Tree with `pnpm derive:web` and
  reapplied the active generated-asset Web Patch regions.

## Validation

- `node --check apps/desktop/app/webview/assets/agent-runtime-terminal-threads.js`
  passed.
- `node --check apps/desktop/app/webview/assets/composer.js` passed.
- `node --check apps/desktop/app/webview/assets/local-conversation-page.js`
  passed.
- `node --check apps/desktop/app/webview/assets/thread-actions.js` passed.
- `node --check apps/desktop/app/webview/assets/thread-page-bottom-panel-state-DZYvoqqn.js`
  passed.
- `node --check apps/web/app/webview/assets/agent-runtime-terminal-threads.js`
  passed.
- `node --check apps/web/app/webview/assets/composer.js` passed.
- `node --check apps/web/app/webview/assets/local-conversation-page.js`
  passed.
- `node --check apps/web/app/webview/assets/app-main.js` passed.
- `node --check apps/web/app/webview/assets/pending-request-item-panel.js`
  passed.
- `pnpm derive:web` completed and refreshed `apps/web/app/webview` from the
  patched Desktop Reconstruction Webview Assets.
- `pnpm web-patches:check` passed with 5 Web Patch regions.
- `pnpm --dir packages/bridge test` passed: 63 tests.
- `pnpm format:check` passed.
- `pnpm normalize:check` passed.
- `pnpm lint` passed.
- `pnpm test` passed.
- `git diff --check` passed.
- `pnpm start` startup smoke passed after fixing a copied-asset alias collision
  in `thread-actions.js`: CDP evaluation confirmed the startup loader was gone,
  sidebar text rendered, a composer input existed, and no
  `Runtime.exceptionThrown` event fired during the check window.
- `pnpm start` terminal-thread layout smoke passed after the footer correction:
  CDP inspection on a `Claude Code` terminal thread found
  `data-thread-find-composer` at `104px` high instead of the previous collapsed
  strip, the terminal panel reserved space above it, and xterm span colors
  included Claude/ANSI color values rather than only the default foreground.

## Unresolved Risk

- Manual runtime validation is still required in the Desktop Reconstruction:
  create a `Codex App` thread, create `Claude Code` and `Codex CLI` terminal
  threads, verify launch commands and initial prompts, switch away/back without
  duplicate terminal sessions, submit follow-up text, exercise resume after CLI
  exit, and verify archive cleanup closes the live terminal process.
- Codex CLI resume remains best effort until a reliable created-session id or
  create-via-resume behavior is proven.
