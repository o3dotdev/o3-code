import crypto from "node:crypto";

export const CHATGPT_REALTIME_CALLS_URL =
  /^https:\/\/chatgpt\.com\/backend-api\/codex\/realtime\/calls$/u;

export async function parseChatGptRealtimeCallRequest(request) {
  let payload;
  try {
    payload = await request.body.getJson();
  } catch {
    throw Error("Realtime call request body must be valid JSON");
  }

  if (!payload || typeof payload !== "object") {
    throw Error("Realtime call request body must be a JSON object");
  }
  if (typeof payload.sdp !== "string" || !payload.sdp.trim()) {
    throw Error("Realtime call request requires a non-empty sdp string");
  }
  if (!payload.session || typeof payload.session !== "object") {
    throw Error("Realtime call request requires a session object");
  }

  return {
    sdp: payload.sdp,
    session: payload.session,
  };
}

export function createRealtimeCallMultipartBody({ sdp, session }) {
  const boundary = `o3-code-${crypto.randomBytes(16).toString("hex")}`;
  const chunks = [
    `--${boundary}\r\n`,
    'Content-Disposition: form-data; name="sdp"\r\n',
    "Content-Type: application/sdp\r\n\r\n",
    sdp,
    "\r\n",
    `--${boundary}\r\n`,
    'Content-Disposition: form-data; name="session"\r\n',
    "Content-Type: application/json\r\n\r\n",
    JSON.stringify(session),
    "\r\n",
    `--${boundary}--\r\n`,
  ];
  const body = Buffer.from(chunks.join(""), "utf8");

  return {
    body,
    contentType: `multipart/form-data; boundary=${boundary}`,
  };
}

export function createRealtimeCallsUrl(upstreamCallsBaseUrl) {
  const url = new URL(upstreamCallsBaseUrl);
  url.pathname = `${url.pathname.replace(/\/+$/u, "")}/realtime/calls`;
  url.search = "";
  url.hash = "";
  return url;
}
