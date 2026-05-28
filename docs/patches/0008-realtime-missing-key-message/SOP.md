# SOP

## Goal

Replace the raw ChatGPT realtime call 404 toast with an O3 Code setup message
when realtime voice starts without `O3_CODE_REALTIME_API_KEY`.

## Non-Goals

- Do not disable or hide realtime voice UI.
- Do not change app-server routing, MITM proxy behavior, or realtime auth
  policy.
- Do not rewrite unrelated realtime errors.
- Do not replace broad Codex product copy.

## Dependencies

- Apply after Patch 0004 Realtime Voice Statsig Override so the realtime voice
  UI remains available for local runs.

## Discovery

1. Locate the bundled composer asset under `apps/desktop/app/webview/assets/`.
2. Find the realtime error handler by searching for:
   - `handleRealtimeError`
   - `composer.realtime.error`
   - `Realtime voice error: {message}`
3. Confirm the handler receives `thread/realtime/error` messages and formats
   the toast message.
4. Confirm the raw missing-key failure still includes:
   - `unexpected status 404`
   - `https://chatgpt.com/backend-api/codex/realtime/calls`
   - `"Not Found"`

## Application

Add a small copied-source helper that maps only the known missing-key realtime
404 shape to:

`Realtime voice requires O3_CODE_REALTIME_API_KEY. Restart O3 Code with O3_CODE_REALTIME_API_KEY set to your OpenAI API key to enable realtime models.`

Use Patch Markers with patch id `realtime-missing-key-message` around the helper
and the toast message argument.

Apply the same marked patch to the mirrored web asset under
`apps/web/app/webview/assets/` so Bridge-served browser UI matches desktop
behavior until the next `pnpm derive:web` refresh.

## Validation

- `node --check apps/desktop/app/webview/assets/composer.js` succeeds.
- `node --check apps/web/app/webview/assets/composer.js` succeeds.
- `pnpm normalize:check` succeeds.
- `pnpm web-patches:check` succeeds.
- `pnpm format:check` succeeds.
- Manual smoke: unset `O3_CODE_REALTIME_API_KEY`, start O3 Code, click realtime
  voice, and confirm the toast names `O3_CODE_REALTIME_API_KEY` rather than
  showing the raw 404/request-id text.

## Failure Conditions

Stop if upstream no longer routes realtime errors through the composer toast
handler, or if the raw missing-key failure shape no longer distinguishes itself
from ordinary realtime account, network, or upstream API errors.
