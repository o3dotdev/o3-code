import {
  L as e,
  T as t,
  _ as n,
  g as r,
  w as i,
  wt as a,
} from "./setting-storage.js";
import { a as o, t as s } from "./request-DWZTrEAr.js";
var c = class extends Error {
    constructor(e) {
      (super(e), (this.reason = e));
    }
  },
  l = 52,
  u = `2025-07-13`,
  d = 3,
  f = 20,
  p = /^[a-z0-9._-]+$/,
  m = /\s/g,
  h = {
    business: `Business`,
    enterprise: `Enterprise`,
    enterprise_cbp_usage_based: `Enterprise`,
    free: `Free`,
    free_workspace: `Free`,
    go: `Go`,
    guest: `Free`,
    plus: `Plus`,
    pro: `Pro`,
    prolite: `Pro`,
    self_serve_business_usage_based: `Business`,
    team: `Team`,
  };
function g(e) {
  let t = V(e)?.split(/\s+/) ?? [],
    n =
      `${t[0]?.charAt(0) ?? ``}${t.length > 1 ? (t.at(-1)?.charAt(0) ?? ``) : ``}`.toUpperCase();
  return n.length > 0 ? n : `?`;
}
function ee(e) {
  let t = V(e);
  return t == null
    ? null
    : (h[t.toLowerCase()] ??
        t
          .split(/[_-]+/)
          .filter((e) => e.length > 0)
          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
          .join(` `));
}
function _(e, t) {
  let n = Math.max(0, Math.round(t / 1e3));
  if (n >= 3600) {
    let t = Math.round(n / 60),
      r = Math.floor(t / 60),
      i = t % 60;
    return i === 0
      ? e.formatMessage(
          {
            id: `profile.stats.durationHours`,
            defaultMessage: `{hours}h`,
            description: `Formatted profile duration with hours`,
          },
          { hours: r },
        )
      : e.formatMessage(
          {
            id: `profile.stats.durationHoursMinutes`,
            defaultMessage: `{hours}h {minutes}m`,
            description: `Formatted profile duration with hours and minutes`,
          },
          { hours: r, minutes: i },
        );
  }
  if (n >= 60) {
    let t = Math.floor(n / 60),
      r = n % 60;
    return r === 0
      ? e.formatMessage(
          {
            id: `profile.stats.durationMinutes`,
            defaultMessage: `{minutes}m`,
            description: `Formatted profile duration with minutes`,
          },
          { minutes: t },
        )
      : e.formatMessage(
          {
            id: `profile.stats.durationMinutesSeconds`,
            defaultMessage: `{minutes}m {seconds}s`,
            description: `Formatted profile duration with minutes and seconds`,
          },
          { minutes: t, seconds: r },
        );
  }
  return e.formatMessage(
    {
      id: `profile.stats.durationSeconds`,
      defaultMessage: `{seconds}s`,
      description: `Formatted profile duration with seconds`,
    },
    { seconds: n },
  );
}
function v({ accountStructure: e, plan: t, workspaceName: n }) {
  let r = V(n);
  return r != null && e?.toLowerCase() === `workspace` ? r : ee(t);
}
function y(e) {
  let t = e.trim();
  return t.startsWith(`@`) ? t.slice(1).trim() : t;
}
function b(e) {
  return e.replace(m, ``).slice(0, f);
}
function x(e) {
  let t = y(e);
  return t.length === 0
    ? { ok: !1, reason: `empty` }
    : t.length < d
      ? { ok: !1, reason: `tooShort` }
      : t.length > f
        ? { ok: !1, reason: `tooLong` }
        : p.test(t)
          ? { ok: !0, username: t }
          : { ok: !1, reason: `invalidCharacters` };
}
function S({ dailyUsage: e, todayIso: t, view: n }) {
  let r = P(e, t);
  switch (n) {
    case `cumulative`:
      return A(r);
    case `daily`:
      return ne(r);
    case `weekly`:
      return k(r);
  }
}
function C({ dailyUsage: e, todayIso: t }) {
  return P(e, t);
}
function w({ dailyUsage: e, todayIso: t }) {
  let n = O(t),
    r = D(t),
    i = Array.from({ length: r }, () => 0),
    a = new Map(Array.from({ length: r }, (e, t) => [z(n, t * 7), t]));
  for (let n of e) {
    if (n.date > t) continue;
    let e = a.get(F(n.date));
    e != null && (i[e] += Math.max(0, n.credits));
  }
  return i;
}
function T({ dailyUsage: e, todayIso: t }) {
  return M(w({ dailyUsage: e, todayIso: t }));
}
function E(e = new Date()) {
  return e.toISOString().slice(0, 10);
}
function D(e) {
  let t = new Date(`${F(e)}T00:00:00.000Z`).getTime(),
    n = new Date(`${u}T00:00:00.000Z`).getTime(),
    r = Math.floor((t - n) / (10080 * 60 * 1e3));
  return Math.min(l, Math.max(1, r + 1));
}
function O(e) {
  return z(F(e), -(D(e) - 1) * 7);
}
function te(e, t) {
  return z(O(t), e);
}
function ne(e) {
  let t = B(e);
  return e.map((e) => L(e, t));
}
function k(e) {
  return j(I(e));
}
function A(e) {
  return j(M(I(e)));
}
function j(e) {
  let t = B(e);
  return Array.from({ length: e.length * 7 }, (n, r) => {
    let i = r % 7,
      a = N(e[Math.floor(r / 7)] ?? 0, t),
      o = 7 - i;
    return a === 0 || o > a ? 0 : 4;
  });
}
function M(e) {
  return e.reduce((e, t) => (e.push((e.at(-1) ?? 0) + t), e), []);
}
function N(e, t) {
  return e <= 0 || t <= 0 ? 0 : Math.max(1, Math.ceil((e / t) * 7));
}
function P(e, t) {
  let n = R(e),
    r = O(t);
  return Array.from({ length: D(t) * 7 }, (e, t) => n.get(z(r, t)) ?? 0);
}
function F(e) {
  let t = new Date(`${e}T00:00:00.000Z`);
  return (
    t.setUTCDate(t.getUTCDate() - t.getUTCDay()),
    t.toISOString().slice(0, 10)
  );
}
function I(e) {
  return Array.from({ length: Math.ceil(e.length / 7) }, (t, n) =>
    e.slice(n * 7, n * 7 + 7).reduce((e, t) => e + t, 0),
  );
}
function L(e, t) {
  if (e <= 0 || t <= 0) return 0;
  let n = e / t;
  return n > 0.75 ? 4 : n > 0.5 ? 3 : n > 0.25 ? 2 : 1;
}
function R(e) {
  return e.reduce(
    (e, t) => (e.set(t.date, (e.get(t.date) ?? 0) + Math.max(0, t.credits)), e),
    new Map(),
  );
}
function z(e, t) {
  let n = new Date(`${e}T00:00:00.000Z`);
  return (n.setUTCDate(n.getUTCDate() + t), E(n));
}
function B(e) {
  return e.reduce((e, t) => Math.max(e, t), 0);
}
function V(e) {
  let t = e?.trim();
  return t == null || t.length === 0 ? null : t;
}
var H = a(),
  U = class extends Error {
    constructor(e) {
      (super(`Profile photo upload failed`), (this.uploadError = e));
    }
  };
function W({ accountId: e, userId: t }) {
  return [`profile`, `usage`, t ?? null, e ?? null];
}
function G(e) {
  let r = (0, H.c)(6),
    { accountId: i, enabled: a, userId: o } = e,
    s;
  r[0] !== i || r[1] !== o
    ? ((s = W({ accountId: i, userId: o })), (r[0] = i), (r[1] = o), (r[2] = s))
    : (s = r[2]);
  let c = a && !0,
    l;
  return (
    r[3] !== s || r[4] !== c
      ? ((l = { queryKey: s, enabled: c, queryFn: Y, staleTime: n.SIX_HOURS }),
        (r[3] = s),
        (r[4] = c),
        (r[5] = l))
      : (l = r[5]),
    t(l)
  );
}
function K(t) {
  let n = (0, H.c)(6),
    { accountId: r, userId: a } = t,
    o = e(),
    s;
  n[0] !== r || n[1] !== a
    ? ((s = W({ accountId: r, userId: a })), (n[0] = r), (n[1] = a), (n[2] = s))
    : (s = n[2]);
  let c = s,
    l;
  return (
    n[3] !== o || n[4] !== c
      ? ((l = {
          mutationFn: re,
          onSuccess: (e) => {
            ae(o, c, e);
          },
        }),
        (n[3] = o),
        (n[4] = c),
        (n[5] = l))
      : (l = n[5]),
    i(l)
  );
}
function q(t) {
  let n = (0, H.c)(6),
    { accountId: r, userId: a } = t,
    o = e(),
    s;
  n[0] !== r || n[1] !== a
    ? ((s = W({ accountId: r, userId: a })), (n[0] = r), (n[1] = a), (n[2] = s))
    : (s = n[2]);
  let c = s,
    l;
  return (
    n[3] !== o || n[4] !== c
      ? ((l = {
          mutationFn: ie,
          onSuccess: (e, t) => {
            let n = o.getQueryData(c);
            n != null && o.setQueryData(c, { ...n, username: y(t) || null });
          },
        }),
        (n[3] = o),
        (n[4] = c),
        (n[5] = l))
      : (l = n[5]),
    i(l)
  );
}
function J(t) {
  let n = (0, H.c)(6),
    { accountId: r, userId: a } = t,
    o = e(),
    s;
  n[0] !== r || n[1] !== a
    ? ((s = W({ accountId: r, userId: a })), (n[0] = r), (n[1] = a), (n[2] = s))
    : (s = n[2]);
  let c = s,
    l;
  return (
    n[3] !== o || n[4] !== c
      ? ((l = {
          mutationFn: async (e) => {
            let t = await X(e),
              n = o.getQueryData(c);
            n != null && o.setQueryData(c, { ...n, imageUrl: t });
          },
        }),
        (n[3] = o),
        (n[4] = c),
        (n[5] = l))
      : (l = n[5]),
    i(l)
  );
}
async function Y() {
  let e = await s.safeGet(`/wham/profiles/me`);
  return {
    dailyUsage:
      e.stats.daily_usage_buckets == null
        ? null
        : e.stats.daily_usage_buckets.map((e) => ({
            credits: e.tokens,
            date: e.start_date,
          })),
    displayName: e.profile.display_name?.trim() || null,
    imageUrl: $(e),
    summary: {
      currentStreakDays: e.stats.current_streak_days ?? null,
      longestStreakDays: e.stats.longest_streak_days ?? null,
      longestTaskDurationMs:
        e.stats.longest_running_turn_sec == null
          ? null
          : e.stats.longest_running_turn_sec * 1e3,
      peakTokens: e.stats.peak_daily_tokens ?? null,
      totalTextTokens: e.stats.lifetime_tokens ?? null,
    },
    username: e.profile.username?.trim() || null,
  };
}
async function X(e) {
  return $(await Q({ profile_asset_pointer: await Z(e) }));
}
async function Z(e) {
  let t = se();
  return (
    await r.getInstance().post(`/wham/profiles/me/photo`, o(await oe(e, t)), {
      "Content-Type": `multipart/form-data; boundary=${t}`,
      "X-Codex-Base64": `1`,
    })
  ).body.asset_pointer;
}
async function re(e) {
  let t = {};
  if (
    (e.displayName != null && (t.display_name = e.displayName), e.photo != null)
  )
    try {
      t.profile_asset_pointer = await Z(e.photo);
    } catch (e) {
      throw new U(e);
    }
  return Q(t);
}
async function ie(e) {
  let t = x(e);
  if (!t.ok) throw new c(t.reason);
  await Q({ username: t.username });
}
async function Q(e) {
  return s.safePatch(`/wham/profiles/me`, { requestBody: e });
}
function ae(e, t, n) {
  let r = e.getQueryData(t);
  r != null &&
    e.setQueryData(t, {
      ...r,
      displayName: n.profile.display_name?.trim() || null,
      imageUrl: $(n),
    });
}
function $(e) {
  return e.profile.profile_picture_url?.trim() || null;
}
async function oe(e, t) {
  let n = new TextEncoder(),
    r = new Uint8Array(await e.arrayBuffer()),
    i = e.type.trim() || `application/octet-stream`,
    a = e.name.trim().replace(/[\r\n"]/g, ``) || `profile-photo`;
  return ce([
    n.encode(`--${t}\r\n`),
    n.encode(
      `Content-Disposition: form-data; name="file"; filename="${a}"\r\n`,
    ),
    n.encode(`Content-Type: ${i}\r\n\r\n`),
    r,
    n.encode(`\r\n--${t}--\r\n`),
  ]);
}
function se() {
  return typeof crypto < `u` && `randomUUID` in crypto
    ? `----codex-profile-photo-${crypto.randomUUID()}`
    : `----codex-profile-photo-${Math.random().toString(36).slice(2)}`;
}
function ce(e) {
  let t = 0;
  for (let n of e) t += n.byteLength;
  let n = new Uint8Array(t),
    r = 0;
  for (let t of e) (n.set(t, r), (r += t.byteLength));
  return n;
}
export {
  T as _,
  q as a,
  y as c,
  b as d,
  x as f,
  D as g,
  S as h,
  J as i,
  g as l,
  te as m,
  G as n,
  c as o,
  E as p,
  K as r,
  _ as s,
  U as t,
  v as u,
  C as v,
  w as y,
};
//# sourceMappingURL=profile-queries.js.map
