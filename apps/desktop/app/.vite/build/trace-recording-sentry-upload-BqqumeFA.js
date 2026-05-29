const e = require(`./src-B5wXNbcV.js`),
  t = require(`./app-session.js`);
let n = require(`node:os`);
n = e.Hi(n);
let r = require(`node:path`),
  i = require(`node:util`),
  a = require(`node:crypto`),
  o = require(`node:fs/promises`),
  s = require(`node:zlib`);
var c = (0, i.promisify)(s.gzip),
  l = `application/gzip`,
  u = `Desktop content trace recording`,
  d = 3e4;
async function f({
  tracePath: e,
  buildFlavor: n,
  buildNumber: i,
  appVersion: s,
  reportId: l,
  traceRecordingNote: u,
  recordingDurationMs: f,
  correlation: h,
  runtimeHealth: g,
}) {
  let _ = await (0, o.readFile)(e),
    v = await c(_),
    y = _.byteLength,
    b = v.byteLength,
    x = m(_),
    S = `${(0, r.basename)(e)}.gz`,
    C = l ?? (0, a.randomUUID)();
  if (
    (p({
      buildFlavor: n,
      buildNumber: i,
      appVersion: s,
      traceFileName: S,
      gzippedTraceContents: v,
      traceRecordingNote: u?.trim() ?? null,
      recordingDurationMs: f ?? null,
      correlation: h ?? null,
      runtimeHealth: g ?? null,
      traceByteLength: y,
      traceGzipByteLength: b,
      traceEventCount: x,
      correlationId: C,
    }),
    !(await t.o(d)))
  )
    throw Error(`Trace upload timed out`);
}
function p({
  buildFlavor: r,
  buildNumber: i,
  appVersion: a,
  traceFileName: o,
  gzippedTraceContents: s,
  traceRecordingNote: c,
  recordingDurationMs: d,
  correlation: f,
  runtimeHealth: p,
  traceByteLength: m,
  traceGzipByteLength: h,
  traceEventCount: g,
  correlationId: _,
}) {
  let v = e.Hr(a),
    y = n.default.cpus(),
    b = null;
  try {
    b = n.default.uptime();
  } catch {}
  let x = y[0]?.model,
    S = typeof n.default.version == `function` ? n.default.version() : void 0,
    C = process.versions.electron == null ? `Node.js` : `Electron`,
    w = process.versions.electron ?? process.versions.node ?? `unknown`;
  t.i(
    {
      message: c != null && c.length > 0 ? c : u,
      source: `codex-desktop`,
      tags: {
        feedback_report: `desktop`,
        correlation_id: _,
        classification: `trace-recording`,
        trace_recording: `content-trace`,
        trace_filename: o,
        platform: process.platform,
        sessionId: t.t,
        preRelease: r === `prod` ? `false` : `true`,
        ...(f?.conversationId == null
          ? {}
          : { conversation_id: f.conversationId }),
        ...(f?.hostId == null ? {} : { host_id: f.hostId }),
        ...(f?.windowId == null ? {} : { window_id: String(f.windowId) }),
        ...(p?.gpuVendor == null ? {} : { gpu_vendor: p.gpuVendor }),
        ...(p == null
          ? {}
          : {
              hardware_acceleration: p.hardwareAccelerationEnabled
                ? `enabled`
                : `disabled`,
            }),
      },
    },
    {
      captureContext: {
        contexts: {
          app: {
            app_name: `Codex`,
            app_version: v.version,
            ...(i == null ? {} : { app_build: i }),
          },
          os: {
            name: n.default.type(),
            version: n.default.release(),
            ...(S == null ? {} : { kernel_version: S }),
          },
          runtime: { name: C, version: w },
          device: {
            arch: process.arch,
            processor_count: y.length,
            memory_size: n.default.totalmem(),
            free_memory: n.default.freemem(),
            ...(x != null && x.length > 0 ? { model: x } : {}),
          },
          codex_feedback: {
            classification: `trace-recording`,
            description: c,
            correlation_id: _,
          },
          trace_recording: {
            duration_ms: d,
            trace_size_bytes: m,
            trace_gzip_size_bytes: h,
            trace_event_count: g,
            conversation_id: f?.conversationId ?? null,
            host_id: f?.hostId ?? null,
            window_id: f?.windowId ?? null,
          },
          runtime_health: {
            load_average: n.default.loadavg(),
            uptime_seconds: b,
            app_metrics: p?.appMetrics ?? [],
            renderer_memory: p?.rendererMemory ?? null,
            gpu_feature_status: p?.gpuFeatureStatus ?? {},
            gpu_vendor: p?.gpuVendor ?? null,
            gpu_renderer: p?.gpuRenderer ?? null,
            hardware_acceleration_enabled:
              p?.hardwareAccelerationEnabled ?? null,
          },
        },
        extra: {
          classification: `trace-recording`,
          description: c,
          trace_recording_duration_ms: d,
          trace_size_bytes: m,
          trace_gzip_size_bytes: h,
          trace_event_count: g,
        },
      },
      attachments: [
        {
          filename: o,
          data: s,
          contentType: l,
          attachmentType: `event.attachment`,
        },
      ],
    },
  );
}
function m(e) {
  try {
    let t = JSON.parse(e.toString(`utf8`));
    return Array.isArray(t.traceEvents) ? t.traceEvents.length : null;
  } catch {
    return null;
  }
}
exports.uploadTraceRecordingToSentry = f;
//# sourceMappingURL=trace-recording-sentry-upload-BqqumeFA.js.map
