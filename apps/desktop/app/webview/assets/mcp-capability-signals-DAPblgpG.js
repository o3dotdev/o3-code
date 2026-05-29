import { a as e } from "./chunk-Bj-mKKzh.js";
import {
  Ai as t,
  Bi as n,
  Di as r,
  Fi as i,
  Gi as a,
  Hi as o,
  Ii as s,
  Ji as c,
  Ni as l,
  Pi as ee,
  Ri as u,
  Ui as d,
  Vi as f,
  Wi as te,
  Xi as ne,
  Yi as p,
  ji as m,
  ki as re,
  qi as h,
  zi as g,
} from "./src-C.js";
import {
  Xs as ie,
  po as _,
  za as ae,
} from "./app-server-manager-signals-DkRDRgNB.js";
import {
  $ as v,
  Q as y,
  S as b,
  at as oe,
  l as se,
  nt as ce,
  ot as le,
} from "./setting-storage.js";
import { p as ue } from "./statsig--EYRNU53.js";
import { s as de } from "./request-DWZTrEAr.js";
var x = `io.modelcontextprotocol/related-task`,
  S = ee((e) => e !== null && (typeof e == `object` || typeof e == `function`)),
  C = c([h(), f().int()]),
  fe = h();
g({ ttl: f().optional(), pollInterval: f().optional() });
var pe = o({ ttl: f().optional() }),
  me = o({ taskId: h() }),
  w = g({ progressToken: C.optional(), [x]: me.optional() }),
  T = o({ _meta: w.optional() }),
  E = T.extend({ task: pe.optional() }),
  D = o({ method: h(), params: T.loose().optional() }),
  O = o({ _meta: w.optional() }),
  k = o({ method: h(), params: O.loose().optional() }),
  A = g({ _meta: w.optional() }),
  j = c([h(), f().int()]),
  he = o({ jsonrpc: u(`2.0`), id: j, ...D.shape }).strict(),
  ge = o({ jsonrpc: u(`2.0`), ...k.shape }).strict(),
  _e = o({ jsonrpc: u(`2.0`), id: j, result: A }).strict(),
  ve;
(function (e) {
  ((e[(e.ConnectionClosed = -32e3)] = `ConnectionClosed`),
    (e[(e.RequestTimeout = -32001)] = `RequestTimeout`),
    (e[(e.ParseError = -32700)] = `ParseError`),
    (e[(e.InvalidRequest = -32600)] = `InvalidRequest`),
    (e[(e.MethodNotFound = -32601)] = `MethodNotFound`),
    (e[(e.InvalidParams = -32602)] = `InvalidParams`),
    (e[(e.InternalError = -32603)] = `InternalError`),
    (e[(e.UrlElicitationRequired = -32042)] = `UrlElicitationRequired`));
})((ve ||= {}));
var ye = o({
  jsonrpc: u(`2.0`),
  id: j.optional(),
  error: o({ code: f().int(), message: h(), data: p().optional() }),
}).strict();
(c([he, ge, _e, ye]), c([_e, ye]));
var be = A.strict(),
  xe = O.extend({ requestId: j.optional(), reason: h().optional() }),
  Se = k.extend({ method: u(`notifications/cancelled`), params: xe }),
  M = o({
    icons: m(
      o({
        src: h(),
        mimeType: h().optional(),
        sizes: m(h()).optional(),
        theme: r([`light`, `dark`]).optional(),
      }),
    ).optional(),
  }),
  N = o({ name: h(), title: h().optional() }),
  P = N.extend({
    ...N.shape,
    ...M.shape,
    version: h(),
    websiteUrl: h().optional(),
    description: h().optional(),
  }),
  Ce = te(
    (e) =>
      e &&
      typeof e == `object` &&
      !Array.isArray(e) &&
      Object.keys(e).length === 0
        ? { form: {} }
        : e,
    s(
      o({
        form: s(o({ applyDefaults: l().optional() }), a(h(), p())).optional(),
        url: S.optional(),
      }),
      a(h(), p()).optional(),
    ),
  ),
  we = g({
    list: S.optional(),
    cancel: S.optional(),
    requests: g({
      sampling: g({ createMessage: S.optional() }).optional(),
      elicitation: g({ create: S.optional() }).optional(),
    }).optional(),
  }),
  Te = g({
    list: S.optional(),
    cancel: S.optional(),
    requests: g({ tools: g({ call: S.optional() }).optional() }).optional(),
  }),
  Ee = o({
    experimental: a(h(), S).optional(),
    sampling: o({ context: S.optional(), tools: S.optional() }).optional(),
    elicitation: Ce.optional(),
    roots: o({ listChanged: l().optional() }).optional(),
    tasks: we.optional(),
    extensions: a(h(), S).optional(),
  }),
  De = T.extend({ protocolVersion: h(), capabilities: Ee, clientInfo: P }),
  Oe = D.extend({ method: u(`initialize`), params: De }),
  ke = o({
    experimental: a(h(), S).optional(),
    logging: S.optional(),
    completions: S.optional(),
    prompts: o({ listChanged: l().optional() }).optional(),
    resources: o({
      subscribe: l().optional(),
      listChanged: l().optional(),
    }).optional(),
    tools: o({ listChanged: l().optional() }).optional(),
    tasks: Te.optional(),
    extensions: a(h(), S).optional(),
  }),
  Ae = A.extend({
    protocolVersion: h(),
    capabilities: ke,
    serverInfo: P,
    instructions: h().optional(),
  }),
  je = k.extend({
    method: u(`notifications/initialized`),
    params: O.optional(),
  }),
  Me = D.extend({ method: u(`ping`), params: T.optional() }),
  Ne = o({ progress: f(), total: d(f()), message: d(h()) }),
  Pe = o({ ...O.shape, ...Ne.shape, progressToken: C }),
  Fe = k.extend({ method: u(`notifications/progress`), params: Pe }),
  Ie = T.extend({ cursor: fe.optional() }),
  F = D.extend({ params: Ie.optional() }),
  I = A.extend({ nextCursor: fe.optional() }),
  Le = r([`working`, `input_required`, `completed`, `failed`, `cancelled`]),
  L = o({
    taskId: h(),
    status: Le,
    ttl: c([f(), re()]),
    createdAt: h(),
    lastUpdatedAt: h(),
    pollInterval: d(f()),
    statusMessage: d(h()),
  }),
  Re = A.extend({ task: L }),
  ze = O.merge(L),
  Be = k.extend({ method: u(`notifications/tasks/status`), params: ze }),
  Ve = D.extend({ method: u(`tasks/get`), params: T.extend({ taskId: h() }) }),
  He = A.merge(L),
  Ue = D.extend({
    method: u(`tasks/result`),
    params: T.extend({ taskId: h() }),
  });
A.loose();
var We = F.extend({ method: u(`tasks/list`) }),
  Ge = I.extend({ tasks: m(L) }),
  Ke = D.extend({
    method: u(`tasks/cancel`),
    params: T.extend({ taskId: h() }),
  });
A.merge(L);
var qe = o({ uri: h(), mimeType: d(h()), _meta: a(h(), p()).optional() }),
  Je = qe.extend({ text: h() }),
  R = h().refine(
    (e) => {
      try {
        return (atob(e), !0);
      } catch {
        return !1;
      }
    },
    { message: `Invalid Base64 string` },
  ),
  Ye = qe.extend({ blob: R }),
  z = r([`user`, `assistant`]),
  B = o({
    audience: m(z).optional(),
    priority: f().min(0).max(1).optional(),
    lastModified: ne({ offset: !0 }).optional(),
  }),
  Xe = o({
    ...N.shape,
    ...M.shape,
    uri: h(),
    description: d(h()),
    mimeType: d(h()),
    size: d(f()),
    annotations: B.optional(),
    _meta: d(g({})),
  }),
  Ze = o({
    ...N.shape,
    ...M.shape,
    uriTemplate: h(),
    description: d(h()),
    mimeType: d(h()),
    annotations: B.optional(),
    _meta: d(g({})),
  }),
  Qe = F.extend({ method: u(`resources/list`) }),
  $e = I.extend({ resources: m(Xe) }),
  et = F.extend({ method: u(`resources/templates/list`) }),
  tt = I.extend({ resourceTemplates: m(Ze) }),
  V = T.extend({ uri: h() }),
  nt = V,
  rt = D.extend({ method: u(`resources/read`), params: nt }),
  it = A.extend({ contents: m(c([Je, Ye])) }),
  at = k.extend({
    method: u(`notifications/resources/list_changed`),
    params: O.optional(),
  }),
  ot = V,
  st = D.extend({ method: u(`resources/subscribe`), params: ot }),
  ct = V,
  lt = D.extend({ method: u(`resources/unsubscribe`), params: ct }),
  ut = O.extend({ uri: h() }),
  dt = k.extend({ method: u(`notifications/resources/updated`), params: ut }),
  ft = o({ name: h(), description: d(h()), required: d(l()) }),
  pt = o({
    ...N.shape,
    ...M.shape,
    description: d(h()),
    arguments: d(m(ft)),
    _meta: d(g({})),
  }),
  mt = F.extend({ method: u(`prompts/list`) }),
  ht = I.extend({ prompts: m(pt) }),
  gt = T.extend({ name: h(), arguments: a(h(), h()).optional() }),
  _t = D.extend({ method: u(`prompts/get`), params: gt }),
  H = o({
    type: u(`text`),
    text: h(),
    annotations: B.optional(),
    _meta: a(h(), p()).optional(),
  }),
  U = o({
    type: u(`image`),
    data: R,
    mimeType: h(),
    annotations: B.optional(),
    _meta: a(h(), p()).optional(),
  }),
  W = o({
    type: u(`audio`),
    data: R,
    mimeType: h(),
    annotations: B.optional(),
    _meta: a(h(), p()).optional(),
  }),
  vt = o({
    type: u(`tool_use`),
    name: h(),
    id: h(),
    input: a(h(), p()),
    _meta: a(h(), p()).optional(),
  }),
  yt = o({
    type: u(`resource`),
    resource: c([Je, Ye]),
    annotations: B.optional(),
    _meta: a(h(), p()).optional(),
  }),
  bt = Xe.extend({ type: u(`resource_link`) }),
  G = c([H, U, W, bt, yt]),
  xt = o({ role: z, content: G }),
  St = A.extend({ description: h().optional(), messages: m(xt) }),
  Ct = k.extend({
    method: u(`notifications/prompts/list_changed`),
    params: O.optional(),
  }),
  wt = o({
    title: h().optional(),
    readOnlyHint: l().optional(),
    destructiveHint: l().optional(),
    idempotentHint: l().optional(),
    openWorldHint: l().optional(),
  }),
  Tt = o({ taskSupport: r([`required`, `optional`, `forbidden`]).optional() }),
  K = o({
    ...N.shape,
    ...M.shape,
    description: h().optional(),
    inputSchema: o({
      type: u(`object`),
      properties: a(h(), S).optional(),
      required: m(h()).optional(),
    }).catchall(p()),
    outputSchema: o({
      type: u(`object`),
      properties: a(h(), S).optional(),
      required: m(h()).optional(),
    })
      .catchall(p())
      .optional(),
    annotations: wt.optional(),
    execution: Tt.optional(),
    _meta: a(h(), p()).optional(),
  }),
  Et = F.extend({ method: u(`tools/list`) }),
  Dt = I.extend({ tools: m(K) }),
  q = A.extend({
    content: m(G).default([]),
    structuredContent: a(h(), p()).optional(),
    isError: l().optional(),
  });
q.or(A.extend({ toolResult: p() }));
var Ot = E.extend({ name: h(), arguments: a(h(), p()).optional() }),
  kt = D.extend({ method: u(`tools/call`), params: Ot }),
  At = k.extend({
    method: u(`notifications/tools/list_changed`),
    params: O.optional(),
  });
o({
  autoRefresh: l().default(!0),
  debounceMs: f().int().nonnegative().default(300),
});
var jt = r([
    `debug`,
    `info`,
    `notice`,
    `warning`,
    `error`,
    `critical`,
    `alert`,
    `emergency`,
  ]),
  Mt = T.extend({ level: jt }),
  Nt = D.extend({ method: u(`logging/setLevel`), params: Mt }),
  Pt = O.extend({ level: jt, logger: h().optional(), data: p() }),
  Ft = k.extend({ method: u(`notifications/message`), params: Pt }),
  It = o({
    hints: m(o({ name: h().optional() })).optional(),
    costPriority: f().min(0).max(1).optional(),
    speedPriority: f().min(0).max(1).optional(),
    intelligencePriority: f().min(0).max(1).optional(),
  }),
  Lt = o({ mode: r([`auto`, `required`, `none`]).optional() }),
  Rt = o({
    type: u(`tool_result`),
    toolUseId: h().describe(
      `The unique identifier for the corresponding tool call.`,
    ),
    content: m(G).default([]),
    structuredContent: o({}).loose().optional(),
    isError: l().optional(),
    _meta: a(h(), p()).optional(),
  }),
  zt = i(`type`, [H, U, W]),
  J = i(`type`, [H, U, W, vt, Rt]),
  Bt = o({ role: z, content: c([J, m(J)]), _meta: a(h(), p()).optional() }),
  Vt = E.extend({
    messages: m(Bt),
    modelPreferences: It.optional(),
    systemPrompt: h().optional(),
    includeContext: r([`none`, `thisServer`, `allServers`]).optional(),
    temperature: f().optional(),
    maxTokens: f().int(),
    stopSequences: m(h()).optional(),
    metadata: S.optional(),
    tools: m(K).optional(),
    toolChoice: Lt.optional(),
  }),
  Ht = D.extend({ method: u(`sampling/createMessage`), params: Vt }),
  Ut = A.extend({
    model: h(),
    stopReason: d(r([`endTurn`, `stopSequence`, `maxTokens`]).or(h())),
    role: z,
    content: zt,
  }),
  Wt = A.extend({
    model: h(),
    stopReason: d(
      r([`endTurn`, `stopSequence`, `maxTokens`, `toolUse`]).or(h()),
    ),
    role: z,
    content: c([J, m(J)]),
  }),
  Gt = o({
    type: u(`boolean`),
    title: h().optional(),
    description: h().optional(),
    default: l().optional(),
  }),
  Kt = o({
    type: u(`string`),
    title: h().optional(),
    description: h().optional(),
    minLength: f().optional(),
    maxLength: f().optional(),
    format: r([`email`, `uri`, `date`, `date-time`]).optional(),
    default: h().optional(),
  }),
  qt = o({
    type: r([`number`, `integer`]),
    title: h().optional(),
    description: h().optional(),
    minimum: f().optional(),
    maximum: f().optional(),
    default: f().optional(),
  }),
  Jt = o({
    type: u(`string`),
    title: h().optional(),
    description: h().optional(),
    enum: m(h()),
    default: h().optional(),
  }),
  Yt = o({
    type: u(`string`),
    title: h().optional(),
    description: h().optional(),
    oneOf: m(o({ const: h(), title: h() })),
    default: h().optional(),
  }),
  Xt = c([
    c([
      o({
        type: u(`string`),
        title: h().optional(),
        description: h().optional(),
        enum: m(h()),
        enumNames: m(h()).optional(),
        default: h().optional(),
      }),
      c([Jt, Yt]),
      c([
        o({
          type: u(`array`),
          title: h().optional(),
          description: h().optional(),
          minItems: f().optional(),
          maxItems: f().optional(),
          items: o({ type: u(`string`), enum: m(h()) }),
          default: m(h()).optional(),
        }),
        o({
          type: u(`array`),
          title: h().optional(),
          description: h().optional(),
          minItems: f().optional(),
          maxItems: f().optional(),
          items: o({ anyOf: m(o({ const: h(), title: h() })) }),
          default: m(h()).optional(),
        }),
      ]),
    ]),
    Gt,
    Kt,
    qt,
  ]),
  Zt = c([
    E.extend({
      mode: u(`form`).optional(),
      message: h(),
      requestedSchema: o({
        type: u(`object`),
        properties: a(h(), Xt),
        required: m(h()).optional(),
      }),
    }),
    E.extend({
      mode: u(`url`),
      message: h(),
      elicitationId: h(),
      url: h().url(),
    }),
  ]),
  Qt = D.extend({ method: u(`elicitation/create`), params: Zt }),
  $t = O.extend({ elicitationId: h() }),
  en = k.extend({
    method: u(`notifications/elicitation/complete`),
    params: $t,
  }),
  tn = A.extend({
    action: r([`accept`, `decline`, `cancel`]),
    content: te(
      (e) => (e === null ? void 0 : e),
      a(h(), c([h(), f(), l(), m(h())])).optional(),
    ),
  }),
  nn = o({ type: u(`ref/resource`), uri: h() }),
  rn = o({ type: u(`ref/prompt`), name: h() }),
  an = T.extend({
    ref: c([rn, nn]),
    argument: o({ name: h(), value: h() }),
    context: o({ arguments: a(h(), h()).optional() }).optional(),
  }),
  on = D.extend({ method: u(`completion/complete`), params: an }),
  sn = A.extend({
    completion: g({
      values: m(h()).max(100),
      total: d(f().int()),
      hasMore: d(l()),
    }),
  }),
  cn = o({
    uri: h().startsWith(`file://`),
    name: h().optional(),
    _meta: a(h(), p()).optional(),
  }),
  ln = D.extend({ method: u(`roots/list`), params: T.optional() }),
  un = A.extend({ roots: m(cn) }),
  dn = k.extend({
    method: u(`notifications/roots/list_changed`),
    params: O.optional(),
  });
(c([Me, Oe, on, Nt, _t, mt, Qe, et, rt, st, lt, kt, Et, Ve, Ue, We, Ke]),
  c([Se, Fe, je, dn, Be]),
  c([be, Ut, Wt, tn, un, He, Ge, Re]),
  c([Me, Ht, Qt, ln, Ve, Ue, We, Ke]),
  c([Se, Fe, Ft, dt, at, At, Ct, Be, en]),
  c([be, Ae, sn, St, ht, $e, tt, it, q, Dt, He, Ge, Re]),
  ((t) =>
    typeof e < `u`
      ? e
      : typeof Proxy < `u`
        ? new Proxy(t, { get: (t, n) => (typeof e < `u` ? e : t)[n] })
        : t)(function (t) {
    if (typeof e < `u`) return e.apply(this, arguments);
    throw Error(`Dynamic require of "` + t + `" is not supported`);
  }));
var fn = c([u(`light`), u(`dark`)]).describe(
    `Color theme preference for the host environment.`,
  ),
  Y = c([u(`inline`), u(`fullscreen`), u(`pip`)]).describe(
    `Display mode for UI presentation.`,
  ),
  pn = a(
    c([
      u(`--color-background-primary`),
      u(`--color-background-secondary`),
      u(`--color-background-tertiary`),
      u(`--color-background-inverse`),
      u(`--color-background-ghost`),
      u(`--color-background-info`),
      u(`--color-background-danger`),
      u(`--color-background-success`),
      u(`--color-background-warning`),
      u(`--color-background-disabled`),
      u(`--color-text-primary`),
      u(`--color-text-secondary`),
      u(`--color-text-tertiary`),
      u(`--color-text-inverse`),
      u(`--color-text-ghost`),
      u(`--color-text-info`),
      u(`--color-text-danger`),
      u(`--color-text-success`),
      u(`--color-text-warning`),
      u(`--color-text-disabled`),
      u(`--color-border-primary`),
      u(`--color-border-secondary`),
      u(`--color-border-tertiary`),
      u(`--color-border-inverse`),
      u(`--color-border-ghost`),
      u(`--color-border-info`),
      u(`--color-border-danger`),
      u(`--color-border-success`),
      u(`--color-border-warning`),
      u(`--color-border-disabled`),
      u(`--color-ring-primary`),
      u(`--color-ring-secondary`),
      u(`--color-ring-inverse`),
      u(`--color-ring-info`),
      u(`--color-ring-danger`),
      u(`--color-ring-success`),
      u(`--color-ring-warning`),
      u(`--font-sans`),
      u(`--font-mono`),
      u(`--font-weight-normal`),
      u(`--font-weight-medium`),
      u(`--font-weight-semibold`),
      u(`--font-weight-bold`),
      u(`--font-text-xs-size`),
      u(`--font-text-sm-size`),
      u(`--font-text-md-size`),
      u(`--font-text-lg-size`),
      u(`--font-heading-xs-size`),
      u(`--font-heading-sm-size`),
      u(`--font-heading-md-size`),
      u(`--font-heading-lg-size`),
      u(`--font-heading-xl-size`),
      u(`--font-heading-2xl-size`),
      u(`--font-heading-3xl-size`),
      u(`--font-text-xs-line-height`),
      u(`--font-text-sm-line-height`),
      u(`--font-text-md-line-height`),
      u(`--font-text-lg-line-height`),
      u(`--font-heading-xs-line-height`),
      u(`--font-heading-sm-line-height`),
      u(`--font-heading-md-line-height`),
      u(`--font-heading-lg-line-height`),
      u(`--font-heading-xl-line-height`),
      u(`--font-heading-2xl-line-height`),
      u(`--font-heading-3xl-line-height`),
      u(`--border-radius-xs`),
      u(`--border-radius-sm`),
      u(`--border-radius-md`),
      u(`--border-radius-lg`),
      u(`--border-radius-xl`),
      u(`--border-radius-full`),
      u(`--border-width-regular`),
      u(`--shadow-hairline`),
      u(`--shadow-sm`),
      u(`--shadow-md`),
      u(`--shadow-lg`),
    ]).describe(`CSS variable keys available to MCP apps for theming.`)
      .describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`),
    c([h(), t()]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`),
  ).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`);
(o({
  method: u(`ui/open-link`),
  params: o({ url: h().describe(`URL to open in the host's browser`) }),
}),
  o({
    isError: l()
      .optional()
      .describe(
        `True if the host failed to open the URL (e.g., due to security policy).`,
      ),
  }).passthrough(),
  o({
    isError: l()
      .optional()
      .describe(
        `True if the download failed (e.g., user cancelled or host denied).`,
      ),
  }).passthrough(),
  o({
    isError: l()
      .optional()
      .describe(`True if the host rejected or failed to deliver the message.`),
  }).passthrough(),
  o({ method: u(`ui/notifications/sandbox-proxy-ready`), params: o({}) }));
var X = o({
    connectDomains: m(h()).optional()
      .describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted → no network connections (secure default)`),
    resourceDomains: m(h())
      .optional()
      .describe(
        "Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted → no network resources (secure default)",
      ),
    frameDomains: m(h())
      .optional()
      .describe(
        "Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted → no nested iframes allowed (`frame-src 'none'`)",
      ),
    baseUriDomains: m(h())
      .optional()
      .describe(
        "Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted → only same origin allowed (`base-uri 'self'`)",
      ),
  }),
  Z = o({
    camera: o({}).optional().describe(`Request camera access.

Maps to Permission Policy \`camera\` feature.`),
    microphone: o({}).optional().describe(`Request microphone access.

Maps to Permission Policy \`microphone\` feature.`),
    geolocation: o({}).optional().describe(`Request geolocation access.

Maps to Permission Policy \`geolocation\` feature.`),
    clipboardWrite: o({}).optional().describe(`Request clipboard write access.

Maps to Permission Policy \`clipboard-write\` feature.`),
  });
(o({
  method: u(`ui/notifications/size-changed`),
  params: o({
    width: f().optional().describe(`New width in pixels.`),
    height: f().optional().describe(`New height in pixels.`),
  }),
}),
  o({
    method: u(`ui/notifications/tool-input`),
    params: o({
      arguments: a(
        h(),
        p().describe(`Complete tool call arguments as key-value pairs.`),
      )
        .optional()
        .describe(`Complete tool call arguments as key-value pairs.`),
    }),
  }),
  o({
    method: u(`ui/notifications/tool-input-partial`),
    params: o({
      arguments: a(
        h(),
        p().describe(`Partial tool call arguments (incomplete, may change).`),
      )
        .optional()
        .describe(`Partial tool call arguments (incomplete, may change).`),
    }),
  }),
  o({
    method: u(`ui/notifications/tool-cancelled`),
    params: o({
      reason: h()
        .optional()
        .describe(
          `Optional reason for the cancellation (e.g., "user action", "timeout").`,
        ),
    }),
  }));
var mn = o({ fonts: h().optional() }),
  hn = o({
    variables: pn.optional().describe(`CSS variables for theming the app.`),
    css: mn.optional().describe(`CSS blocks that apps can inject.`),
  });
(o({ method: u(`ui/resource-teardown`), params: o({}) }), a(h(), p()));
var gn = o({
  text: o({}).optional().describe(`Host supports text content blocks.`),
  image: o({}).optional().describe(`Host supports image content blocks.`),
  audio: o({}).optional().describe(`Host supports audio content blocks.`),
  resource: o({}).optional().describe(`Host supports resource content blocks.`),
  resourceLink: o({})
    .optional()
    .describe(`Host supports resource link content blocks.`),
  structuredContent: o({})
    .optional()
    .describe(`Host supports structured content.`),
});
o({ method: u(`ui/notifications/request-teardown`), params: o({}).optional() });
var _n = o({
    experimental: o({})
      .optional()
      .describe(`Experimental features (structure TBD).`),
    openLinks: o({})
      .optional()
      .describe(`Host supports opening external URLs.`),
    downloadFile: o({})
      .optional()
      .describe(`Host supports file downloads via ui/download-file.`),
    serverTools: o({
      listChanged: l()
        .optional()
        .describe(`Host supports tools/list_changed notifications.`),
    })
      .optional()
      .describe(`Host can proxy tool calls to the MCP server.`),
    serverResources: o({
      listChanged: l()
        .optional()
        .describe(`Host supports resources/list_changed notifications.`),
    })
      .optional()
      .describe(`Host can proxy resource reads to the MCP server.`),
    logging: o({}).optional().describe(`Host accepts log messages.`),
    sandbox: o({
      permissions: Z.optional().describe(
        `Permissions granted by the host (camera, microphone, geolocation).`,
      ),
      csp: X.optional().describe(`CSP domains approved by the host.`),
    })
      .optional()
      .describe(`Sandbox configuration applied by the host.`),
    updateModelContext: gn
      .optional()
      .describe(
        `Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns.`,
      ),
    message: gn
      .optional()
      .describe(
        `Host supports receiving content messages (ui/message) from the view.`,
      ),
    sampling: o({
      tools: o({})
        .optional()
        .describe(
          "Host supports tool use via `tools` and `toolChoice` parameters.",
        ),
    })
      .optional()
      .describe(
        "Host supports LLM sampling (sampling/createMessage) from the view.\nMirrors the MCP `ClientCapabilities.sampling` shape so hosts can pass it through.",
      ),
  }),
  vn = o({
    experimental: o({})
      .optional()
      .describe(`Experimental features (structure TBD).`),
    tools: o({
      listChanged: l()
        .optional()
        .describe(`App supports tools/list_changed notifications.`),
    })
      .optional()
      .describe(`App exposes MCP-style tools that the host can call.`),
    availableDisplayModes: m(Y)
      .optional()
      .describe(`Display modes the app supports.`),
  });
(o({ method: u(`ui/notifications/initialized`), params: o({}).optional() }),
  o({
    csp: X.optional().describe(
      `Content Security Policy configuration for UI resources.`,
    ),
    permissions: Z.optional().describe(
      `Sandbox permissions requested by the UI resource.`,
    ),
    domain: h().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`),
    prefersBorder: l().optional()
      .describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`),
  }),
  o({
    method: u(`ui/request-display-mode`),
    params: o({ mode: Y.describe(`The display mode being requested.`) }),
  }),
  o({
    mode: Y.describe(
      `The display mode that was actually set. May differ from requested if not supported.`,
    ),
  }).passthrough());
var yn = c([u(`model`), u(`app`)]).describe(
  `Tool visibility scope - who can access the tool.`,
);
(o({
  resourceUri: h().optional(),
  visibility: m(yn).optional()
    .describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`),
  csp: n().optional(),
  permissions: n().optional(),
}),
  o({
    mimeTypes: m(h())
      .optional()
      .describe(
        'Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.',
      ),
  }),
  o({
    method: u(`ui/download-file`),
    params: o({
      contents: m(c([yt, bt])).describe(
        `Resource contents to download — embedded (inline data) or linked (host fetches). Uses standard MCP resource types.`,
      ),
    }),
  }),
  o({
    method: u(`ui/message`),
    params: o({
      role: u(`user`).describe(
        `Message role, currently only "user" is supported.`,
      ),
      content: m(G).describe(`Message content blocks (text, image, etc.).`),
    }),
  }),
  o({
    method: u(`ui/notifications/sandbox-resource-ready`),
    params: o({
      html: h().describe(`HTML content to load into the inner iframe.`),
      sandbox: h()
        .optional()
        .describe(
          `Optional override for the inner iframe's sandbox attribute.`,
        ),
      csp: X.optional().describe(`CSP configuration from resource metadata.`),
      permissions: Z.optional().describe(
        `Sandbox permissions from resource metadata.`,
      ),
    }),
  }),
  o({
    method: u(`ui/notifications/tool-result`),
    params: q.describe(`Standard MCP tool execution result.`),
  }));
var bn = o({
  toolInfo: o({
    id: j.optional().describe(`JSON-RPC id of the tools/call request.`),
    tool: K.describe(`Tool definition including name, inputSchema, etc.`),
  })
    .optional()
    .describe(`Metadata of the tool call that instantiated this App.`),
  theme: fn.optional().describe(`Current color theme preference.`),
  styles: hn.optional().describe(`Style configuration for theming the app.`),
  displayMode: Y.optional().describe(`How the UI is currently displayed.`),
  availableDisplayModes: m(Y)
    .optional()
    .describe(`Display modes the host supports.`),
  containerDimensions: c([
    o({ height: f().describe(`Fixed container height in pixels.`) }),
    o({
      maxHeight: c([f(), t()])
        .optional()
        .describe(`Maximum container height in pixels.`),
    }),
  ])
    .and(
      c([
        o({ width: f().describe(`Fixed container width in pixels.`) }),
        o({
          maxWidth: c([f(), t()])
            .optional()
            .describe(`Maximum container width in pixels.`),
        }),
      ]),
    )
    .optional()
    .describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`),
  locale: h()
    .optional()
    .describe(`User's language and region preference in BCP 47 format.`),
  timeZone: h().optional().describe(`User's timezone in IANA format.`),
  userAgent: h().optional().describe(`Host application identifier.`),
  platform: c([u(`web`), u(`desktop`), u(`mobile`)])
    .optional()
    .describe(`Platform type for responsive design decisions.`),
  deviceCapabilities: o({
    touch: l().optional().describe(`Whether the device supports touch input.`),
    hover: l()
      .optional()
      .describe(`Whether the device supports hover interactions.`),
  })
    .optional()
    .describe(`Device input capabilities.`),
  safeAreaInsets: o({
    top: f().describe(`Top safe area inset in pixels.`),
    right: f().describe(`Right safe area inset in pixels.`),
    bottom: f().describe(`Bottom safe area inset in pixels.`),
    left: f().describe(`Left safe area inset in pixels.`),
  })
    .optional()
    .describe(`Mobile safe area boundaries in pixels.`),
}).passthrough();
(o({
  method: u(`ui/notifications/host-context-changed`),
  params: bn.describe(`Partial context update containing only changed fields.`),
}),
  o({
    method: u(`ui/update-model-context`),
    params: o({
      content: m(G)
        .optional()
        .describe(`Context content blocks (text, image, etc.).`),
      structuredContent: a(
        h(),
        p().describe(`Structured content for machine-readable context data.`),
      )
        .optional()
        .describe(`Structured content for machine-readable context data.`),
    }),
  }),
  o({
    method: u(`ui/initialize`),
    params: o({
      appInfo: P.describe(`App identification (name and version).`),
      appCapabilities: vn.describe(
        `Features and capabilities this app provides.`,
      ),
      protocolVersion: h().describe(`Protocol version this app supports.`),
    }),
  }),
  o({
    protocolVersion: h().describe(
      `Negotiated protocol version string (e.g., "2025-11-21").`,
    ),
    hostInfo: P.describe(`Host application identification and version.`),
    hostCapabilities: _n.describe(
      `Features and capabilities provided by the host.`,
    ),
    hostContext: bn.describe(`Rich context about the host environment.`),
  }).passthrough());
var xn = `ui/resourceUri`;
function Sn(e) {
  let t = e._meta?.ui?.resourceUri;
  if (
    (t === void 0 && (t = e._meta?.[xn]),
    typeof t == `string` && t.startsWith(`ui://`))
  )
    return t;
  if (t !== void 0)
    throw Error(`Invalid UI resource URI: ${JSON.stringify(t)}`);
}
var Cn = o({ mcpServers: a(h().trim().min(1), o({})) });
function wn(e) {
  let t = Cn.parse(e);
  return { mcpServers: Object.keys(t.mcpServers) };
}
var Tn = o({ openaiCapabilities: Cn.optional() });
function En(e) {
  return Tn.parse(e);
}
var Dn = o({
    ui: o({
      entrypoints: m(
        c([
          o({ type: u(`global`) }),
          o({ type: u(`thread`) }),
          o({ extensions: m(h().trim().min(1)), type: u(`file`) }),
        ]),
      ).optional(),
    }).optional(),
  }).optional(),
  On = o({
    mentions: l(),
    serverName: h(),
    serverTitle: h().optional(),
    tools: Dt.shape.tools,
  });
async function kn(e, t) {
  return (
    await Promise.all(
      t.map(async (t) => {
        try {
          let n = await Ln(e, ae(t.path, `.codex-plugin/plugin.json`)),
            r = En(JSON.parse(n));
          if (r.openaiCapabilities == null) return null;
          let i = wn(r.openaiCapabilities),
            a = Object.fromEntries(
              (
                await Promise.all(
                  i.mcpServers.map(async (n) => {
                    try {
                      let r = On.parse(
                        await se(`get-openai-capabilities-server-info`, {
                          params: {
                            hostId: e,
                            pluginId: t.id,
                            pluginPath: t.path,
                            server: n,
                          },
                        }),
                      );
                      return [
                        n,
                        {
                          mentions: r.mentions,
                          serverTitle: r.serverTitle ?? r.serverName,
                          tools: r.tools,
                        },
                      ];
                    } catch {
                      return null;
                    }
                  }),
                )
              ).filter((e) => e != null),
            );
          return { hostId: e, pluginId: t.id, pluginPath: t.path, servers: a };
        } catch {
          return null;
        }
      }),
    )
  ).filter((e) => e != null);
}
function An(e) {
  return e.flatMap((e) =>
    Object.entries(e.servers).flatMap(([t, { tools: n }]) =>
      n.flatMap((r) => Nn(e.hostId, e.pluginId, t, r, n)),
    ),
  );
}
function jn(e) {
  return e.flatMap((e) =>
    Object.entries(e.servers).flatMap(([t, { tools: n }]) =>
      n.flatMap((r) => {
        let i = Pn(r).flatMap((e) => (e.type === `file` ? e.extensions : [])),
          a = Sn(r);
        return i.length === 0 || a == null || !Fn(r)
          ? []
          : [
              {
                extensions: i,
                hostId: e.hostId,
                pluginId: e.pluginId,
                resourceUri: a,
                server: t,
                serverTools: n,
                title: Q(r),
                tool: r,
              },
            ];
      }),
    ),
  );
}
function Mn(e) {
  return e.flatMap((e) =>
    Object.entries(e.servers).flatMap(([t, { mentions: n, serverTitle: r }]) =>
      n ? [{ pluginId: e.pluginId, server: t, serverTitle: r }] : [],
    ),
  );
}
function Nn(e, t, n, r, i) {
  let a = Sn(r);
  if (a == null || !Fn(r)) return [];
  let o = Q(r);
  return Pn(r).flatMap((s) => {
    switch (s.type) {
      case `global`:
      case `thread`:
        return [
          {
            entrypoint: s.type,
            hostId: e,
            pluginId: t,
            resourceUri: a,
            server: n,
            serverTools: i,
            title: o,
            tool: r,
          },
        ];
      case `file`:
        return [];
    }
  });
}
function Pn(e) {
  let t = Dn.safeParse(e._meta?.[`com.openai`]);
  return t.success ? (t.data?.ui?.entrypoints ?? []) : [];
}
function Q(e) {
  return e.title ?? e.annotations?.title ?? e.name;
}
function Fn(e) {
  let t = o({ visibility: m(r([`app`, `model`])).optional() }).safeParse(
    e._meta?.ui,
  );
  return t.success && t.data.visibility?.includes(`app`) === !0;
}
async function In(e, t) {
  let n = await ie(`read-app-plugin-extension-file-for-host`, {
    hostId: e,
    path: t,
  });
  return n == null ? null : de(n.dataBase64);
}
async function Ln(e, t) {
  let n = await In(e, t);
  if (n == null) throw Error(`Missing app plugin file '${t}'.`);
  return n;
}
var Rn = le(b, (e) => []),
  zn = le(b, (e) => []),
  Bn = oe(b, 0),
  Vn = ce(b, (e, { get: t }) => {
    let n = t(Rn, e);
    return {
      queryFn: async () => kn(e, n),
      queryKey: [
        `mcp-capability-catalog`,
        e,
        t(Bn),
        n.map(({ id: e, path: t }) => `${e}:${t}`),
      ],
      staleTime: 0,
    };
  }),
  $ = v(b, (e, { get: t }) =>
    t(ue, `3669474837`) ? (t(Vn, e).data ?? []) : [],
  ),
  Hn = y(b, ({ get: e }) => e($, _)),
  Un = v(b, (e, { get: t }) => Mn(t($, e))),
  Wn = y(b, ({ get: e }) => e(Un, _)),
  Gn = v(b, (e, { get: t }) => jn(t($, e))),
  Kn = y(b, ({ get: e }) => e(Gn, _)),
  qn = y(b, ({ get: e }) => An(e(Hn))),
  Jn = y(b, ({ get: e }) => e(qn).filter((e) => e.entrypoint === `global`));
export {
  it as _,
  Kn as a,
  Wn as c,
  qn as d,
  kt as f,
  rt as g,
  x as h,
  Rn as i,
  Un as l,
  C as m,
  $ as n,
  Gn as o,
  q as p,
  Bn as r,
  Jn as s,
  Hn as t,
  zn as u,
  me as v,
  D as y,
};
//# sourceMappingURL=mcp-capability-signals-DAPblgpG.js.map
