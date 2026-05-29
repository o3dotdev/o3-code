import { zn as e } from "./src-C.js";
import { $s as t } from "./app-server-manager-signals-DkRDRgNB.js";
import { C as n, L as r, bt as i, l as a, u as o } from "./setting-storage.js";
import { t as s } from "./request-DWZTrEAr.js";
import { t as c } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import { r as l } from "./apps-queries-CmwRqoKz.js";
import { t as u } from "./codex-api-error-CsUcWied.js";
async function d({ hostId: t, queryClient: n, refreshAppsList: r }) {
  let i = n.getQueryData([`apps`, `list`, t]),
    s = await r();
  return f({ previousApps: i, nextApps: s })
    ? (await a(`ambient-suggestions-refresh`, {
        params: {
          hostId: t,
          projectRoot: e(`~`),
          mode: `first-plugin-connect`,
        },
      }),
      await Promise.all([
        n.invalidateQueries({ queryKey: o(`ambient-suggestions`) }),
        n.invalidateQueries({ queryKey: o(`ambient-suggestions-refresh`) }),
      ]),
      s)
    : s;
}
function f({ previousApps: e, nextApps: t }) {
  return e != null && !e.some(p) && t.some(p);
}
function p(e) {
  return e.isAccessible && e.isEnabled;
}
var m = i({});
function h() {
  let [e, n] = t(m);
  return {
    claimAppConnectOAuthCallback: (t) => {
      let r = v(t);
      if (r == null) return !1;
      let i = e[r] ?? null;
      return i == null || i.claimed
        ? !1
        : (n((e) => {
            let t = e[r] ?? null;
            return t == null || t.claimed
              ? e
              : { ...e, [r]: { ...t, claimed: !0 } };
          }),
          !0);
    },
    clearPendingAppConnect: ({ oauthState: e, appId: t }) => {
      if (e != null) {
        n((t) => {
          if (!(e in t)) return t;
          let { [e]: n, ...r } = t;
          return r;
        });
        return;
      }
      t != null &&
        n((e) =>
          Object.entries(e)
            .filter(([, e]) => e.appId !== t)
            .reduce((e, [t, n]) => ((e[t] = n), e), {}),
        );
    },
    getPendingAppConnectForCallbackUrl: (t) => {
      let n = v(t);
      return n == null ? null : (e[n] ?? null);
    },
    isAppConnectPending: (t) => Object.values(e).some((e) => e.appId === t),
    markAppConnectOAuthPending: ({
      app: e,
      hostId: t,
      redirectUrl: r,
      returnTo: i,
      resumeTarget: a = { kind: `apps-tab` },
    }) => {
      let o = v(r);
      o != null &&
        n((n) => ({
          ...n,
          [o]: {
            appId: e.id,
            appName: e.name,
            claimed: !1,
            hostId: t ?? `local`,
            oauthState: o,
            returnTo: i,
            resumeTarget: a,
          },
        }));
    },
  };
}
function g() {
  let e = r(),
    t = c(),
    { clearPendingAppConnect: i, getPendingAppConnectForCallbackUrl: a } = h();
  return async ({ fullRedirectUrl: r }) => {
    let o = r.trim(),
      c = o.length === 0 ? null : a(o),
      f = c?.hostId ?? `local`,
      p = c?.oauthState ?? v(o) ?? void 0;
    if (o.length === 0)
      return (i({ oauthState: p }), { kind: `missing-callback-data` });
    try {
      return {
        kind: `success`,
        appName:
          (
            await s.safePost(`/aip/connectors/links/oauth/callback`, {
              requestBody: { full_redirect_url: o },
            })
          ).link?.name?.trim() ||
          c?.appName ||
          `App`,
      };
    } catch (e) {
      n.error(`Failed to finish app OAuth callback`, {
        safe: {},
        sensitive: { error: e },
      });
      let t = (e instanceof Error ? u(e) : null)?.message.trim();
      return t
        ? { kind: `request-failed`, message: t }
        : { kind: `request-failed` };
    } finally {
      (await Promise.allSettled([
        d({
          hostId: f,
          queryClient: e,
          refreshAppsList: async () => l({ hostId: f, queryClient: e }),
        }),
        t([`mcp-settings`]),
        t([`mcp-settings`, `app-connect`]),
      ]),
        i({ oauthState: p }));
    }
  };
}
function _(e) {
  if (typeof e != `object` || !e) return null;
  let t = Reflect.get(e, `fullRedirectUrl`),
    n = Reflect.get(e, `returnTo`);
  return typeof t != `string` || (n != null && typeof n != `string`)
    ? null
    : { fullRedirectUrl: t, returnTo: n ?? void 0 };
}
function v(e) {
  return y(e, `state`);
}
function y(e, t) {
  try {
    return new URL(e).searchParams.get(t)?.trim() || null;
  } catch {
    return null;
  }
}
export { d as i, h as n, g as r, _ as t };
//# sourceMappingURL=app-connect-oauth-Cy-gX8IV.js.map
