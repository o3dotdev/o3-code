# Agent Runtime Terminal Threads

O3 Code will model terminal-backed external agents as normal local conversations with Agent Runtime metadata, rather than adding a separate terminal-thread type. Each Terminal Agent Runtime thread keeps the O3 Code `conversationId` for sidebar and lifecycle identity, a live terminal `sessionId` for the current process, and a durable External Agent Session UUID for CLI resume across launches; this preserves existing thread behavior while letting Claude Code, Codex CLI, and future terminal agents own their native interactive TUI history.
