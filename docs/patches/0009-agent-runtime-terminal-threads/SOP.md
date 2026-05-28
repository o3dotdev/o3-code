# SOP

## Goal

Reapply the Agent Runtime picker and Terminal Agent Runtime thread behavior after a Source Refresh. Terminal Agent Runtime threads must be ordinary local conversations that render a terminal body, launch or resume the configured external CLI, and keep Codex App chat behavior unchanged for the default runtime.

## Non-Goals

- Do not introduce a separate sidebar thread type.
- Do not convert existing Codex App chat threads into terminal threads.
- Do not persist live terminal process state such as `hasLaunched`.
- Do not add attachment support for terminal runtimes in the first pass.
- Do not add an extra full-access confirmation for terminal runtimes.
- Do not change the installed Codex App source material outside O3 Code Patch regions.

## Dependencies

- Existing local `start-conversation` support for creating an empty local conversation.
- Existing integrated terminal service and terminal panel rendering.
- Existing Patch Marker and Source Refresh workflow.

## Discovery

1. Find the composer submit flow that calls `start-conversation` for local threads and follow-up submits.
2. Find the composer model, reasoning, collaboration, and permission controls.
3. Find the local conversation body renderer that chooses message history content.
4. Find the integrated terminal service module that creates, attaches, writes to, resizes, and closes terminal sessions.
5. Find thread archive/title handling and any terminal cleanup behavior tied to conversation id.
6. In both Desktop Reconstruction Webview Assets and the Mirrored Web Client Asset Tree, identify matching bundled asset sites before applying browser-owned patches.

## Application

1. Add a small Agent Runtime registry module. Include:
   - `codex-app`: label `Codex App`, kind `chat`.
   - `claude-code`: label `Claude Code`, kind `terminal`, command `claude`, default model `opus`, initial launch support with `--session-id`, resume support with `--resume`, and `--allow-dangerously-skip-permissions` on every launch.
   - `codex-cli`: label `Codex CLI`, kind `terminal`, command `codex`, default model display `5.5`, launch model value `gpt-5.5`, and resume support as best effort until the implementation can discover the Codex-created session id or verify create-via-resume behavior.
2. Add Agent Runtime thread state keyed by `conversationId`. Persist durable identity fields: `agentRuntimeId`, label, command, selected model, launch permission/collaboration intent, `cwd`, `hostId`, and `externalSessionId`. Keep live launch state volatile.
3. Make model and permission controls runtime-aware. Preserve per-runtime selected model state, pass selected model to terminal runtime launches, and show existing chat controls unchanged for `codex-app`.
4. On terminal runtime submit from a new composer, call empty `start-conversation`, store Agent Runtime metadata, set a readable thread title, navigate to `/local/:conversationId`, and launch the CLI in a deterministic terminal session id `terminal-agent:${conversationId}`.
5. Build terminal launch and resume commands from structured metadata. Pass the initial prompt as a safely quoted CLI argument. Use resume commands only when launching or relaunching, not for follow-up text while a process is live.
6. In terminal-agent local conversation bodies, render a full-height terminal surface instead of message history while keeping the bottom composer. Existing chat threads and threads without terminal metadata must render normally.
7. For follow-up submits in a live terminal-agent thread, write `text + "\n"` to the active terminal session. If no live process exists, relaunch via the runtime resume command and include the submitted text as the resume prompt argument.
8. Lock Agent Runtime/model/permission identity controls after the terminal thread initially starts. Display disabled state with copy indicating in-session changes should be made inside the CLI TUI.
9. Disable attachment controls for terminal runtime submissions until explicit CLI attachment mapping is added.
10. Ensure archive closes the live terminal process for the conversation.
11. Expose the feature directly once implemented; do not hide the Agent Runtime picker behind a local feature flag.
12. Add Patch Markers around copied-source changes and mirror the behavior into the Mirrored Web Client according to the web patch workflow.

## Validation

- Select `Codex App`, submit normally, and verify existing chat flow is unchanged.
- Select `Claude Code`, default `opus`, submit text, and verify a sidebar thread opens a full-height terminal running `claude --allow-dangerously-skip-permissions --session-id <uuid> --model opus ... "PROMPT"`.
- Select `Codex CLI`, default display `5.5`, submit text, and verify a sidebar thread opens a full-height terminal running `codex --model gpt-5.5 ... "PROMPT"`.
- Switch between Codex App and Claude/Codex CLI threads and verify each renders the correct body.
- Switch away from a terminal-agent thread and back; verify the deterministic terminal session does not spawn duplicates while live.
- Kill or exit Claude Code, submit follow-up text, and verify the app relaunches with `claude --resume <externalSessionId> ... "PROMPT"`.
- For Codex CLI, verify app-session terminal switching preserves the live process. Verify app-restart resume only after session-id discovery or create-via-resume behavior is implemented.
- Restart the app, open a Claude Code terminal-agent thread, and verify metadata identifies the runtime and resumes the external session.
- Archive a terminal-agent thread and verify its live terminal process is closed.

## Failure Conditions

Stop and update Evidence if the refreshed renderer no longer exposes an empty local `start-conversation` path, if the integrated terminal service can no longer address sessions by deterministic id, if Claude CLI resume no longer accepts a UUID session id, or if Codex CLI still lacks an initial session-id mechanism and no reliable created-session discovery path can be found.
