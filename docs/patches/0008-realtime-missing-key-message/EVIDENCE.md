# Evidence

## Current Release

- Codex source version: `26.527.30818`
- Build: `3370`
- `app.asar` SHA-256: `99ed8cd195ac4b651c76632469ef5c2d1f32f234c81ec33fd5fc08be7c2b4b13`

## Sites

- `apps/desktop/app/webview/assets/realtime-controller-pdTEzsRt.js`
  - Patch ID: `realtime-missing-key-message`
  - This release refactored realtime error handling out of the composer chunk
    into a dedicated realtime controller chunk. The `composer.realtime.error`
    toast now lives in `handleRealtimeError(e, t)` here.
  - Adds a module-scope realtime error normalizer (after the chunk imports,
    before `e(a())`) and applies it at the toast values argument:
    `{ message: o3CodeNormalizeRealtimeErrorMessage(t) }`.
- `apps/web/app/webview/assets/realtime-controller-pdTEzsRt.js`
  - The Mirrored Web Client copy inherits this marked desktop patch through
    `pnpm derive:web` (no separate hand-edit of the web tree).

## Patch Shape

- The normalizer only matches realtime errors containing:
  - `unexpected status 404`
  - `https://chatgpt.com/backend-api/codex/realtime/calls`
  - `"Not Found"`
- Matching errors render:
  `Realtime voice requires O3_CODE_REALTIME_API_KEY. Restart O3 Code with O3_CODE_REALTIME_API_KEY set to your OpenAI API key to enable realtime models.`
- Non-matching realtime errors still flow through unchanged.

## Migration Note

- The SOP's "composer asset" discovery anchor is release-specific. In
  `26.527.30818` the toast handler moved to `realtime-controller-pdTEzsRt.js`.
  The goal (mapping only the missing-key 404 shape to a setup message) still maps
  to identifiable upstream behavior, so the patch was reapplied at the new site
  rather than retired.

## Validation Notes

- `node --check apps/desktop/app/webview/assets/realtime-controller-pdTEzsRt.js`:
  passed.
- The same chunk in `apps/web/app/webview/assets/` is validated with
  `node --check` after `pnpm derive:web`.
- `pnpm normalize:check`: passed.
- `pnpm web-patches:check`: passed.
- `pnpm format:check`: passed.
- Manual realtime voice smoke with `O3_CODE_REALTIME_API_KEY` unset: documented
  but not run in this automated pass.
