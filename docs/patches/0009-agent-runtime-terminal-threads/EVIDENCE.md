# Evidence

## Current Release

- Source app: `/Applications/Codex.app`
- Codex App version: TBD during implementation
- Build: TBD during implementation
- `app.asar` SHA-256: TBD during implementation

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

- Composer local submit flow: `apps/web/app/webview/assets/composer.js`
- Empty local conversation creation: `start-conversation` call sites in `apps/web/app/webview/assets/composer.js`
- Start conversation parameter builder: `apps/web/app/webview/assets/build-start-conversation-params.js`
- Thread title actions: `apps/web/app/webview/assets/thread-actions.js`
- Integrated terminal service: `apps/web/app/webview/assets/terminal-service.js`
- Terminal panel renderer: `apps/web/app/webview/assets/thread-page-bottom-panel-state-DZYvoqqn.js`
- Main-process terminal manager: `apps/desktop/app/.vite/build/main.js`

## Validation

- Not yet implemented.
