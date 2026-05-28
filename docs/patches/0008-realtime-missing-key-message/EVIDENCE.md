# Evidence

## Current Release

- Codex source version: `26.519.81530`
- Build: `3178`

## Sites

- `apps/desktop/app/webview/assets/composer.js`
  - Patch ID: `realtime-missing-key-message`
  - Adds a realtime error message normalizer and applies it at the
    `composer.realtime.error` toast argument.
- `apps/web/app/webview/assets/composer.js`
  - Patch ID: `realtime-missing-key-message`
  - Mirrors the same marked patch for Bridge-served browser UI.

## Patch Shape

- The normalizer only matches realtime errors containing:
  - `unexpected status 404`
  - `https://chatgpt.com/backend-api/codex/realtime/calls`
  - `"Not Found"`
- Matching errors render:
  `Realtime voice requires O3_CODE_REALTIME_API_KEY. Restart O3 Code with O3_CODE_REALTIME_API_KEY set to your OpenAI API key to enable realtime models.`
- Non-matching realtime errors still flow through unchanged.

## Validation Notes

- `node --check apps/desktop/app/webview/assets/composer.js`: passed.
- `node --check apps/web/app/webview/assets/composer.js`: passed.
- `pnpm normalize:check`: passed, no changes needed.
- `pnpm web-patches:check`: passed.
- `pnpm format:check`: passed.
- Manual realtime voice smoke with `O3_CODE_REALTIME_API_KEY` unset: not run in
  this automated pass.
