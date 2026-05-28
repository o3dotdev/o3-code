# 0008 Realtime Missing Key Message

## Status

Active

## Intent

When realtime voice falls back to the ChatGPT-backed realtime call route because
`O3_CODE_REALTIME_API_KEY` is not configured, the renderer can surface a raw
404 response with request metadata. O3 Code should instead show a concise
setup message that names the required environment variable.

This Patch only normalizes the known missing-key failure shape at the realtime
toast boundary. It does not hide realtime controls, change app-server routing,
or make the realtime MITM override optional once a key is provided.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
