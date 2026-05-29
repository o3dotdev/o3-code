import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  Di as t,
  Hi as n,
  Ji as r,
  Ni as i,
  Ri as a,
  Vi as o,
  Yi as s,
  ji as c,
  qi as l,
} from "./src-C.js";
import { gn as u } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as d, t as f } from "./jsx-runtime.js";
import {
  S as p,
  _ as m,
  g as h,
  nt as g,
  rt as _,
  tt as v,
} from "./setting-storage.js";
import { t as y } from "./request-DWZTrEAr.js";
var b = e(u(), 1);
function x(e) {
  if (e == null) return `custom`;
  switch (e.access_mode) {
    case `admins_only`:
    case `custom`:
      return e.allowed_account_user_ids.length > 1 ||
        e.allowed_tenant_group_ids.length > 0 ||
        e.allowed_workspace_group_ids.length > 0
        ? `custom`
        : `admins_only`;
    case `public`:
    case `workspace_all`:
      return e.access_mode;
  }
}
function S(e) {
  return (0, b.default)(e.flatMap((e) => (e == null ? [] : [e])));
}
function C(e, t) {
  return {
    access_mode: e.access_mode,
    allowed_user_emails: S(
      e.allowed_users
        .filter((e) => e.account_user_id !== t)
        .map((e) => e.email),
    ),
  };
}
function w({
  accessGroups: e,
  accessPolicy: t,
  group: n,
  knownAccessGroups: r,
}) {
  return {
    access_mode: t.access_mode,
    allowed_user_emails: S(t.allowed_users.map((e) => e.email)),
    ...T({
      accessGroups: e,
      knownAccessGroups: r,
      existingGroups: t.allowed_groups.filter((e) => e.id !== n.id),
      removedGroups: [n],
      selectedGroups: [],
    }),
  };
}
function T({
  accessGroups: e,
  knownAccessGroups: t,
  existingGroups: n,
  removedGroups: r,
  selectedGroups: i,
}) {
  let a = new Map([...t, ...e].map((e) => [e.id, e])),
    o = n.flatMap((e) => {
      let t = a.get(e.id);
      return t == null ? [] : [t];
    }),
    s = r.flatMap((e) => {
      let t = a.get(e.id);
      return t == null ? [] : [t];
    }),
    c = [...o, ...i],
    l = [...i, ...s],
    u = l.some((e) => e.source === `workspace`),
    d = l.some((e) => e.source === `tenant`);
  return {
    ...(u
      ? {
          allowed_workspace_group_ids: E(
            c.filter((e) => e.source === `workspace`),
          ),
        }
      : {}),
    ...(d
      ? { allowed_tenant_group_ids: E(c.filter((e) => e.source === `tenant`)) }
      : {}),
  };
}
function E(e) {
  return Array.from(new Set(e.map((e) => e.id)));
}
var D = t([`admins_only`, `workspace_all`, `custom`, `public`]),
  O = [`appgen`, `projects`],
  k = [`appgen`, `project`],
  A = [`appgen`, `environment`],
  j = [`appgen`, `access-groups`],
  M = n({ id: l(), name: l(), size: o() }),
  N = n({
    project_id: l(),
    access_mode: D,
    allowed_account_user_ids: c(l()),
    allowed_workspace_group_ids: c(l()),
    allowed_tenant_group_ids: c(l()),
    revision: o(),
    updated_at: l(),
  }),
  P = N.extend({
    allowed_groups: c(M),
    allowed_users: c(
      n({ account_user_id: l(), email: l().nullable(), name: l().nullable() }),
    ),
  }),
  F = n({
    auth_client_id: l().nullable(),
    created_at: l(),
    current_live_url: l().nullable(),
    current_preview_url: l().nullable(),
    description: l().nullable(),
    id: l(),
    latest_version_number: o(),
    slug: l(),
    status: t([`active`, `archived`, `suspended`]),
    title: l(),
    updated_at: l(),
  }),
  I = F.extend({ access_mode: D.nullable(), access_policy: N.nullable() }),
  L = n({ cursor: l().nullable().optional(), items: c(I) }),
  R = F.extend({ access_mode: D.nullable(), access_policy: P.nullable() }),
  z = n({
    entries: c(
      n({ is_secret: i(), key: l(), type: a(`envvar`), value: l().nullable() }),
    ),
    project_id: l(),
    revision: o(),
    updated_at: l().nullable(),
  }),
  B = n({
    tenant_groups: c(M),
    tenant_id: l().nullable(),
    workspace_account_id: l().nullable(),
    workspace_groups: c(M),
  }),
  V = n({ project_id: l(), was_deleted: i() }),
  H = r([
    n({ error: n({}).passthrough(), id: o(), jsonrpc: a(`2.0`) }),
    n({
      id: o(),
      jsonrpc: a(`2.0`),
      result: n({ isError: i().optional(), structuredContent: s().optional() }),
    }),
  ]),
  U = _(p, () => ({
    queryKey: O,
    queryFn: () => X(`sites_list_projects`, { limit: 20 }, L),
    retry: !1,
    staleTime: m.FIVE_MINUTES,
  })),
  W = g(p, (e) => ({
    queryKey: [...k, e],
    queryFn: () => X(`sites_get_project`, { project_id: e }, R),
    retry: !1,
    staleTime: m.FIVE_MINUTES,
  })),
  G = g(p, (e) => ({
    queryKey: [...A, e],
    queryFn: () => X(`sites_get_environment`, { project_id: e }, z),
    retry: !1,
    staleTime: m.FIVE_MINUTES,
  })),
  K = g(p, (e) => ({
    queryKey: [...j, e],
    queryFn: () => X(`sites_list_access_groups`, { name_prefix: e }, B),
    retry: !1,
    staleTime: m.ONE_MINUTE,
  })),
  q = v(p, (e) => ({
    mutationKey: [...A, e, `update`],
    mutationFn: (t) =>
      X(`sites_update_environment`, { project_id: e, ...t }, z),
    onSuccess: (t, n, r, { client: i }) => {
      i.setQueryData([...A, e], t);
    },
  })),
  J = v(p, (e) => ({
    mutationKey: [...k, e, `access`, `update`],
    mutationFn: (t) => X(`sites_update_access`, { project_id: e, ...t }, P),
    onSuccess: (t, n, r, { client: i }) => {
      (i.setQueryData([...k, e], (e) =>
        e == null ? e : { ...e, access_mode: t.access_mode, access_policy: t },
      ),
        i.setQueryData(O, (n) =>
          n == null
            ? n
            : {
                ...n,
                items: n.items.map((n) =>
                  n.id === e
                    ? { ...n, access_mode: t.access_mode, access_policy: t }
                    : n,
                ),
              },
        ));
    },
  })),
  Y = v(p, (e) => ({
    mutationKey: [...k, e, `delete`],
    mutationFn: async () =>
      V.parse(
        await y.safeDelete(`/wham/sites/projects/{project_id}`, {
          parameters: { path: { project_id: e } },
        }),
      ),
    onSuccess: async (t, n, r, { client: i }) => {
      (i.setQueryData(O, (t) =>
        t == null ? t : { ...t, items: t.items.filter((t) => t.id !== e) },
      ),
        await Promise.all([
          i.invalidateQueries({ queryKey: [...k, e], refetchType: `none` }),
          i.invalidateQueries({ queryKey: [...A, e], refetchType: `none` }),
        ]));
    },
  }));
async function X(e, t, n) {
  let { body: r } = await h.getInstance().post(
      `/wham/apps`,
      JSON.stringify({
        id: 1,
        jsonrpc: `2.0`,
        method: `tools/call`,
        params: { arguments: t, name: e },
      }),
    ),
    i = H.parse(r);
  if (
    `error` in i ||
    i.result.isError === !0 ||
    i.result.structuredContent == null
  )
    throw Error(`Sites tool call failed`);
  let a = i.result.structuredContent,
    o = n.safeParse(a);
  return o.success ? o.data : a;
}
e(d());
var Z = f(),
  Q = (e) =>
    (0, Z.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      ...e,
      children: [
        (0, Z.jsx)(`path`, {
          d: `M22 19.2727C22 20.779 20.779 22 19.2727 22H14.7273C13.221 22 12 20.779 12 19.2727V12H19.2727C20.779 12 22 13.221 22 14.7273V19.2727Z`,
          fill: `#68C4FF`,
        }),
        (0, Z.jsx)(`path`, {
          d: `M20 2C21.1046 2 22 2.89543 22 4V7C22 8.10457 21.1046 9 20 9H17C15.8954 9 15 8.10457 15 7V4C15 2.89543 15.8954 2 17 2H20Z`,
          fill: `#0C79D8`,
        }),
        (0, Z.jsx)(`path`, {
          d: `M7 15C8.10457 15 9 15.8954 9 17V20C9 21.1046 8.10457 22 7 22H4C2.89543 22 2 21.1046 2 20V17C2 15.8954 2.89543 15 4 15H7Z`,
          fill: `#0C79D8`,
        }),
        (0, Z.jsx)(`path`, {
          d: `M12 12H4.72727C3.22104 12 2 10.779 2 9.27273V4.72727C2 3.22104 3.22104 2 4.72727 2H9.27273C10.779 2 12 3.22104 12 4.72727V12Z`,
          fill: `#2E9EFF`,
        }),
      ],
    });
function $(e) {
  if (e == null) return null;
  let t = new URL(e);
  return `${t.host}${t.pathname === `/` ? `` : t.pathname}${t.search}${t.hash}`;
}
export {
  G as a,
  J as c,
  T as d,
  w as f,
  Y as i,
  q as l,
  x as m,
  Q as n,
  W as o,
  C as p,
  K as r,
  U as s,
  $ as t,
  S as u,
};
//# sourceMappingURL=appgen-url-DZWguk-Q.js.map
