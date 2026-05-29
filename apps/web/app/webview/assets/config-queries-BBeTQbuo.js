import { Gi as e, Li as t, qi as n } from "./src-C.js";
import { Xs as r, po as i } from "./app-server-manager-signals-DkRDRgNB.js";
import {
  C as a,
  L as o,
  S as s,
  T as c,
  Z as l,
  _ as u,
  nt as d,
  p as f,
  w as p,
  wt as m,
} from "./setting-storage.js";
import { t as h } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import { t as g } from "./thread-context-inputs-DBrOekVr.js";
var _ = m(),
  v = [`config`, `mcp`, `servers`],
  y = [`config`, `user`],
  b = [`config`, `analytics`],
  x = [`config`, `requirements`],
  S = [`config`, `effective`],
  C = [`config`, `layered-response`],
  w = [`config`, `read-response`],
  T = [`mcp`, `servers`, `status`],
  ee = [`mcp`, `resource`],
  te = 1e7,
  E = e(n(), t()),
  D = {
    config: {
      model: null,
      review_model: null,
      model_context_window: null,
      model_auto_compact_token_limit: null,
      model_auto_compact_token_limit_scope: null,
      model_provider: null,
      approval_policy: null,
      approvals_reviewer: null,
      sandbox_mode: null,
      sandbox_workspace_write: null,
      forced_chatgpt_workspace_id: null,
      forced_login_method: null,
      web_search: null,
      tools: null,
      profile: null,
      profiles: {},
      instructions: null,
      developer_instructions: null,
      compact_prompt: null,
      model_reasoning_effort: null,
      model_reasoning_summary: null,
      service_tier: null,
      model_verbosity: null,
      analytics: null,
      mcp_servers: {},
      apps: {
        _default: {
          enabled: !0,
          destructive_enabled: !1,
          open_world_enabled: !1,
          default_tools_approval_mode: null,
          default_tools_enabled: null,
          tools: null,
        },
      },
      desktop: null,
    },
    origins: {},
    layers: null,
  };
function O(e, t) {
  let n = (0, _.c)(11),
    r = t?.hostId ?? `local`,
    { data: i } = l(g),
    a = t?.useActiveWorkspaceRoot ?? r === `local`,
    s = e ?? (a ? (i?.roots?.[0] ?? null) : null),
    d = t?.enabled ?? !0,
    f = o(),
    p;
  n[0] !== r || n[1] !== s
    ? ((p = [...v, r, s]), (n[0] = r), (n[1] = s), (n[2] = p))
    : (p = n[2]);
  let m;
  n[3] !== r || n[4] !== f || n[5] !== s
    ? ((m = () => N(f, r, s)), (n[3] = r), (n[4] = f), (n[5] = s), (n[6] = m))
    : (m = n[6]);
  let h;
  return (
    n[7] !== d || n[8] !== p || n[9] !== m
      ? ((h = {
          queryKey: p,
          queryFn: m,
          staleTime: u.FIVE_MINUTES,
          enabled: d,
          select: k,
        }),
        (n[7] = d),
        (n[8] = p),
        (n[9] = m),
        (n[10] = h))
      : (h = n[10]),
    c(h)
  );
}
function k(e) {
  let { config: t, origins: n, layers: r } = e,
    i = se(t);
  return {
    servers: i,
    configWriteTarget: ae({ layers: r, origins: n, keyPath: `mcp_servers` }),
    serverOrigins: oe({
      origins: n,
      rootKey: `mcp_servers`,
      childKeys: Object.keys(i),
      probeFields: [`enabled`, `command`, `url`],
    }),
  };
}
var A = d(s, (e, { queryClient: t }) => ({
  queryKey: [...y, e],
  queryFn: async () => {
    try {
      return await P(t, e, null, !0);
    } catch (e) {
      return (
        a.error(`Failed to load config`, { safe: {}, sensitive: { error: e } }),
        D
      );
    }
  },
  staleTime: u.FIVE_MINUTES,
  select: ({ config: e, layers: t }) => ({
    config: e,
    configWriteTarget: $(t),
  }),
}));
function j(e) {
  let t = (0, _.c)(6),
    n = e === void 0 ? !0 : e,
    r = o(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = [...b, i]), (t[0] = a))
    : (a = t[0]);
  let s;
  t[1] === r
    ? (s = t[2])
    : ((s = () => P(r, i, null, !1)), (t[1] = r), (t[2] = s));
  let l;
  return (
    t[3] !== n || t[4] !== s
      ? ((l = {
          queryKey: a,
          queryFn: s,
          staleTime: 1 / 0,
          enabled: n,
          select: ne,
        }),
        (t[3] = n),
        (t[4] = s),
        (t[5] = l))
      : (l = t[5]),
    c(l)
  );
}
function ne(e) {
  let { config: t } = e;
  return t.analytics?.enabled !== !1;
}
function re(e, t) {
  let n = (0, _.c)(11),
    r = t?.hostId ?? `local`,
    { data: i } = l(g),
    a =
      t?.cwdMode === `preserve-null`
        ? (e ?? null)
        : (e ?? i?.roots?.[0] ?? null),
    s = o(),
    d;
  n[0] !== r || n[1] !== a
    ? ((d = [...S, r, a]), (n[0] = r), (n[1] = a), (n[2] = d))
    : (d = n[2]);
  let f;
  n[3] !== r || n[4] !== s || n[5] !== a
    ? ((f = () => N(s, r, a)), (n[3] = r), (n[4] = s), (n[5] = a), (n[6] = f))
    : (f = n[6]);
  let p = t?.enabled ?? !0,
    m;
  return (
    n[7] !== d || n[8] !== f || n[9] !== p
      ? ((m = {
          queryKey: d,
          queryFn: f,
          staleTime: u.FIVE_MINUTES,
          enabled: p,
          select: M,
        }),
        (n[7] = d),
        (n[8] = f),
        (n[9] = p),
        (n[10] = m))
      : (m = n[10]),
    c(m)
  );
}
function M(e) {
  let { config: t, origins: n, layers: r } = e;
  return { config: t, origins: n, layers: r };
}
function N(e, t, n) {
  return e.fetchQuery({
    queryKey: [...C, t, n],
    queryFn: async () => {
      try {
        return await P(e, t, n, !0);
      } catch (e) {
        return (
          a.error(`Failed to load layered config`, {
            safe: {},
            sensitive: { error: e },
          }),
          D
        );
      }
    },
    staleTime: u.FIVE_MINUTES,
  });
}
function P(e, t, n, i) {
  return e.fetchQuery({
    queryKey: [...w, t, n, i],
    queryFn: () =>
      r(`read-config-for-host`, { hostId: t, includeLayers: i, cwd: n }),
    staleTime: 0,
  });
}
var F = d(s, (e) => I(e, !0));
function I(e, t) {
  return {
    queryKey: [...x, e],
    queryFn: async () => {
      try {
        return await r(`get-config-requirements-for-host`, { hostId: e });
      } catch (e) {
        return (
          a.error(`Failed to load config requirements`, {
            safe: {},
            sensitive: { error: e },
          }),
          { requirements: null }
        );
      }
    },
    staleTime: u.INFINITE,
    enabled: t,
  };
}
function L(e, t) {
  let n = (0, _.c)(10),
    r = t === void 0 ? !0 : t,
    { data: i } = l(g),
    a;
  n[0] !== e || n[1] !== i?.roots
    ? ((a = e ?? i?.roots ?? []), (n[0] = e), (n[1] = i?.roots), (n[2] = a))
    : (a = n[2]);
  let o = a,
    s;
  n[3] === o ? (s = n[4]) : ((s = { roots: o }), (n[3] = o), (n[4] = s));
  let c;
  n[5] === r
    ? (c = n[6])
    : ((c = { enabled: r, staleTime: u.FIVE_MINUTES }), (n[5] = r), (n[6] = c));
  let d;
  return (
    n[7] !== s || n[8] !== c
      ? ((d = { params: s, queryConfig: c, select: R }),
        (n[7] = s),
        (n[8] = c),
        (n[9] = d))
      : (d = n[9]),
    f(`local-custom-agents`, d)
  );
}
function R(e) {
  return { roles: e.agents };
}
function z(e) {
  let t = (0, _.c)(8),
    n = e?.hostId ?? `local`,
    i = h(),
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (e) => {
        let { filePath: t, key: i, value: a } = e;
        return r(`batch-write-config-value`, {
          hostId: n,
          edits: [
            { keyPath: `mcp_servers.${i}`, value: a, mergeStrategy: `replace` },
          ],
          filePath: t,
          expectedVersion: null,
        });
      }),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] !== n || t[3] !== i
    ? ((o = async () => {
        await U(n, i);
      }),
      (t[2] = n),
      (t[3] = i),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = { mutationFn: a, onError: B, onSuccess: o }),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    p(s)
  );
}
function B(e) {
  a.error(`Failed to write MCP server config`, {
    safe: {},
    sensitive: { error: e },
  });
}
function V(e) {
  let t = (0, _.c)(20),
    n = e?.hostId ?? `local`,
    i = o(),
    s = h(),
    c;
  t[0] === n ? (c = t[1]) : ((c = [...v, n]), (t[0] = n), (t[1] = c));
  let l = c,
    u;
  t[2] === n ? (u = t[3]) : ((u = [...C, n]), (t[2] = n), (t[3] = u));
  let d = u,
    f;
  t[4] === n
    ? (f = t[5])
    : ((f = (e) => {
        let { key: t, enabled: i } = e;
        return r(`write-config-value`, {
          hostId: n,
          keyPath: `mcp_servers.${t}.enabled`,
          value: i,
          mergeStrategy: `upsert`,
          filePath: null,
          expectedVersion: null,
        });
      }),
      (t[4] = n),
      (t[5] = f));
  let m;
  t[6] !== d || t[7] !== l || t[8] !== i
    ? ((m = async (e) => {
        let { key: t, enabled: n } = e;
        await Promise.all([
          i.cancelQueries({ queryKey: l }),
          i.cancelQueries({ queryKey: d }),
        ]);
        let r = [...H(i, l), ...H(i, d)];
        for (let [e, a] of r) i.setQueryData(e, W(a, t, n));
        return { previousConfigResponses: r };
      }),
      (t[6] = d),
      (t[7] = l),
      (t[8] = i),
      (t[9] = m))
    : (m = t[9]);
  let g;
  t[10] === i
    ? (g = t[11])
    : ((g = (e, t, n) => {
        a.error(`Failed to update MCP server enabled state`, {
          safe: {},
          sensitive: { error: e },
        });
        for (let [e, t] of n?.previousConfigResponses ?? [])
          i.setQueryData(e, t);
      }),
      (t[10] = i),
      (t[11] = g));
  let y;
  t[12] !== n || t[13] !== s
    ? ((y = async () => {
        await U(n, s);
      }),
      (t[12] = n),
      (t[13] = s),
      (t[14] = y))
    : (y = t[14]);
  let b;
  return (
    t[15] !== f || t[16] !== m || t[17] !== g || t[18] !== y
      ? ((b = { mutationFn: f, onMutate: m, onError: g, onSettled: y }),
        (t[15] = f),
        (t[16] = m),
        (t[17] = g),
        (t[18] = y),
        (t[19] = b))
      : (b = t[19]),
    p(b)
  );
}
function H(e, t) {
  return e
    .getQueriesData({ queryKey: t })
    .flatMap(([e, t]) => (t == null ? [] : [[e, t]]));
}
async function U(e, t) {
  (await t([...C, e]), await Promise.all([t([...v, e]), t([...T, e])]));
}
function W(e, t, n) {
  let r =
      e.config.mcp_servers == null && e.config.mcpServers != null
        ? `mcpServers`
        : `mcp_servers`,
    i = G(e.config[r], t, n);
  return i
    ? { ...e, config: Object.assign(structuredClone(e.config), { [r]: i }) }
    : e;
}
function G(e, t, n) {
  let r = E.safeParse(e);
  if (!r.success) return null;
  let i = E.safeParse(r.data[t]);
  return i.success ? { ...r.data, [t]: { ...i.data, enabled: n } } : null;
}
var K = d(s, (e) => Y(e, !0, `full`)),
  q = d(s, (e) => Y(e, !0, `toolsAndAuthOnly`)),
  J = d(s, (e) => Y(e, !1, `full`));
function Y(e, t, n) {
  return {
    queryKey: [...T, e, n],
    queryFn: async () =>
      r(`list-mcp-server-status`, {
        hostId: e,
        cursor: null,
        limit: 100,
        detail: n,
      }),
    staleTime: u.FIVE_MINUTES,
    enabled: t,
  };
}
function ie(e) {
  let t = (0, _.c)(14),
    { hostId: n, server: i, threadId: o, uri: s, enabled: l } = e,
    d = l === void 0 ? !0 : l,
    f = n ?? `local`,
    p = s ?? ``,
    m;
  t[0] !== f || t[1] !== i || t[2] !== p || t[3] !== o
    ? ((m = [...ee, f, o, i, p]),
      (t[0] = f),
      (t[1] = i),
      (t[2] = p),
      (t[3] = o),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] !== f || t[6] !== i || t[7] !== o || t[8] !== s
    ? ((h = async () =>
        r(`read-mcp-resource`, {
          hostId: f,
          server: i,
          threadId: o,
          uri: s ?? ``,
        }).catch((e) => {
          throw (
            a.error(`Failed to read MCP resource`, {
              safe: { server: i, threadId: o, uri: s },
              sensitive: { error: e },
            }),
            e
          );
        })),
      (t[5] = f),
      (t[6] = i),
      (t[7] = o),
      (t[8] = s),
      (t[9] = h))
    : (h = t[9]);
  let g = d && s != null,
    v;
  return (
    t[10] !== m || t[11] !== h || t[12] !== g
      ? ((v = {
          queryKey: m,
          queryFn: h,
          staleTime: u.FIVE_MINUTES,
          enabled: g,
        }),
        (t[10] = m),
        (t[11] = h),
        (t[12] = g),
        (t[13] = v))
      : (v = t[13]),
    c(v)
  );
}
function X(e) {
  return e.type === `user` ||
    e.type === `system` ||
    e.type === `legacyManagedConfigTomlFromFile`
    ? e.file
    : e.type === `project`
      ? `${e.dotCodexFolder}/config.toml`
      : null;
}
function Z(e) {
  return e == null
    ? !1
    : e.type === `mdm` ||
        e.type === `sessionFlags` ||
        e.type === `legacyManagedConfigTomlFromFile` ||
        e.type === `legacyManagedConfigTomlFromMdm`;
}
function Q(e, t, n = []) {
  let r = e?.[t] ?? null;
  if (r != null) return r;
  for (let r of n) {
    let n = e?.[`${t}.${r}`];
    if (n != null) return n;
  }
  return null;
}
function $(e) {
  let t = e?.find((e) => e.name.type === `user`) ?? null;
  if (!t) return null;
  let n = X(t.name);
  return n ? { filePath: n, expectedVersion: t.version } : null;
}
function ae({ layers: e, origins: t, keyPath: n, probeFields: r = [] }) {
  let i = e?.find((e) => e.name.type === `user`) ?? null;
  if (i) {
    let e = X(i.name);
    return e ? { filePath: e, expectedVersion: i.version } : null;
  }
  let a = Q(t, n, r);
  if (a) {
    if (Z(a.name)) return null;
    if (a.name.type === `system`) return $(e);
    let t = X(a.name);
    return t ? { filePath: t, expectedVersion: a.version } : $(e);
  }
  let o = e?.[0] ?? null;
  if (o) {
    let e = X(o.name);
    return e ? { filePath: e, expectedVersion: o.version } : null;
  }
  return null;
}
function oe({ origins: e, rootKey: t, childKeys: n, probeFields: r }) {
  let i = {};
  return (
    n.forEach((n) => {
      let a = `${t}.${n}`;
      i[n] =
        e?.[a] ?? r.map((t) => e?.[`${a}.${t}`]).find(Boolean) ?? null ?? null;
    }),
    i
  );
}
function se(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) return {};
  let t = e,
    n = t.mcp_servers ?? t.mcpServers;
  if (typeof n != `object` || !n || Array.isArray(n)) return {};
  let r = Object.entries(n),
    i = {};
  return (
    r.forEach(([e, t]) => {
      if (typeof t == `object` && t && !Array.isArray(t)) {
        let n = t;
        i[e] = {
          ...n,
          name: typeof n.name == `string` && n.name.length > 0 ? n.name : e,
        };
        return;
      }
      i[e] = { name: e };
    }),
    i
  );
}
export {
  A as C,
  z as S,
  L as _,
  v as a,
  ie as b,
  F as c,
  X as d,
  Z as f,
  j as g,
  Q as h,
  te as i,
  J as l,
  K as m,
  S as n,
  T as o,
  q as p,
  C as r,
  y as s,
  x as t,
  P as u,
  re as v,
  V as x,
  O as y,
};
//# sourceMappingURL=config-queries-BBeTQbuo.js.map
