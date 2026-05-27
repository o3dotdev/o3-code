import { s as e } from "./chunk-Bj-mKKzh.js";
import { U as t } from "./src-BLHmAhbF.js";
import "./app-server-manager-signals-7MlBpIlX.js";
import { n, t as r } from "./jsx-runtime-CiQ1k8xo.js";
import "./marked.esm-B1dI5d9h.js";
import {
  H as i,
  S as a,
  W as o,
  Y as s,
  xt as c,
} from "./setting-storage-kJblH-wH.js";
import { c as l, f as u, u as d } from "./chunk-LFPYN7LY-CkfOxD5s.js";
import "./product-logger-CekQ0CO0.js";
import "./statsig-BwN76nAo.js";
import "./app-server-manager-hooks-BUQb1vpx.js";
import "./use-global-state-DUocq5mo.js";
import "./invalidate-queries-and-broadcast-CPrIeBVQ.js";
import "./thread-context-inputs-D4zJFWk0.js";
import "./config-queries-2cSUtzNR.js";
import "./remote-connection-visibility-BqsxCDqm.js";
import "./sidebar-signals-oDf-ZfE3.js";
import "./use-auth-BSv8Pelr.js";
import { r as f } from "./toast-signal-mlbIRbst.js";
import "./reduced-motion-preference-DnjdGHz7.js";
import { t as p } from "./spinner-avFWYgza.js";
import "./experimental-features-queries-Css_qmsY.js";
import "./apps-queries-Bm5YDQ9P.js";
import "./startCase-DlqWBRV1.js";
import "./uniq-ckcXPYOW.js";
import { n as m, r as h, t as g } from "./app-connect-oauth-C6TJ4DY6.js";
import "./codex-api-error-DMjbcDM0.js";
var _ = c(),
  v = e(n(), 1),
  y = r();
function b() {
  let e = (0, _.c)(17),
    n = s(a),
    r = o(),
    c = u(),
    b = d(),
    S = h(),
    { getPendingAppConnectForCallbackUrl: C } = m(),
    w = (0, v.useRef)(null),
    T;
  e[0] !== S || e[1] !== r || e[2] !== n
    ? ((T = (e) => {
        let {
            appId: t,
            appName: a,
            fullRedirectUrl: o,
            shouldShowPendingToast: s,
            shouldShowSuccessToast: c,
          } = e,
          l = x(t);
        (s &&
          o != null &&
          o.length > 0 &&
          n.get(f).info(
            (0, y.jsx)(`span`, {
              className: `loading-shimmer-pure-text`,
              children: (0, y.jsx)(i, {
                id: `apps.appConnectOAuthCallbackPage.pending`,
                defaultMessage: `Finishing {connector} setup`,
                description: `Toast shown when an app OAuth callback has returned and Codex is finishing setup`,
                values: {
                  connector:
                    a ??
                    r.formatMessage({
                      id: `apps.appConnectOAuthCallbackPage.fallbackAppName`,
                      defaultMessage: `App`,
                      description: `Fallback app name used in app connect callback pending toasts`,
                    }),
                },
              }),
            }),
            { duration: 0, id: l },
          ),
          S({ fullRedirectUrl: o ?? `` }).then((e) => {
            bb21: switch (e.kind) {
              case `missing-callback-data`:
                n.get(f).danger(
                  (0, y.jsx)(i, {
                    id: `apps.appConnectOAuthCallbackPage.missingData`,
                    defaultMessage: `Missing OAuth callback data.`,
                    description: `Toast shown when an app connection OAuth callback is missing the redirect URL`,
                  }),
                  { id: l },
                );
                break bb21;
              case `request-failed`: {
                let t =
                  e.message ??
                  r.formatMessage({
                    id: `apps.appConnectOAuthCallbackPage.requestFailed`,
                    defaultMessage: `Failed to finish connecting app.`,
                    description: `Toast shown when finishing an app connection OAuth callback fails`,
                  });
                n.get(f).danger(t, { id: l });
                break bb21;
              }
              case `success`:
                if (!c) break bb21;
                n.get(f).success(
                  (0, y.jsx)(i, {
                    id: `apps.appConnectOAuthCallbackPage.success`,
                    defaultMessage: `{appName} is now connected.`,
                    description: `Toast shown when an app connection OAuth callback succeeds`,
                    values: { appName: e.appName },
                  }),
                  { id: l },
                );
            }
          }));
      }),
      (e[0] = S),
      (e[1] = r),
      (e[2] = n),
      (e[3] = T))
    : (T = e[3]);
  let E = (0, v.useEffectEvent)(T),
    D;
  e[4] !== C || e[5] !== b.key || e[6] !== b.state || e[7] !== c || e[8] !== E
    ? ((D = () => {
        if (w.current === b.key) return;
        w.current = b.key;
        let e = g(b.state),
          n = e?.fullRedirectUrl?.trim(),
          r = n != null && n.length > 0 ? C(n) : null,
          i = r?.returnTo ?? e?.returnTo ?? `/skills`,
          a = r?.resumeTarget.kind === `plugin-install`;
        if (
          (E({
            appId: r?.appId,
            appName: r?.appName,
            fullRedirectUrl: n ?? null,
            shouldShowPendingToast: !1,
            shouldShowSuccessToast: !a,
          }),
          l(t, i) != null)
        ) {
          c(i, { replace: !0 });
          return;
        }
        switch (r?.resumeTarget.kind) {
          case `plugin-install`:
            c(i, {
              replace: !0,
              state: { initialHostId: r.hostId, initialTab: `plugins` },
            });
            return;
          case `apps-tab`:
          case void 0:
            c(i, {
              replace: !0,
              state: {
                connectAppId: r?.appId,
                initialHostId: r?.hostId,
                initialTab: `apps`,
              },
            });
            return;
        }
      }),
      (e[4] = C),
      (e[5] = b.key),
      (e[6] = b.state),
      (e[7] = c),
      (e[8] = E),
      (e[9] = D))
    : (D = e[9]);
  let O;
  (e[10] !== C ||
  e[11] !== r ||
  e[12] !== b.key ||
  e[13] !== b.state ||
  e[14] !== c
    ? ((O = [C, r, b.key, b.state, c]),
      (e[10] = C),
      (e[11] = r),
      (e[12] = b.key),
      (e[13] = b.state),
      (e[14] = c),
      (e[15] = O))
    : (O = e[15]),
    (0, v.useEffect)(D, O));
  let k;
  return (
    e[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((k = (0, y.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center`,
          children: (0, y.jsx)(p, { className: `icon-sm` }),
        })),
        (e[16] = k))
      : (k = e[16]),
    k
  );
}
function x(e) {
  return e == null
    ? `app-connect-oauth-callback`
    : `app-connect-oauth-callback-${e}`;
}
export { b as AppConnectOAuthCallbackPage };
//# sourceMappingURL=app-connect-oauth-callback-page-DKw7-VVa.js.map
