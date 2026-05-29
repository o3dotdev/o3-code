import {
  Li as e,
  Xs as t,
  ur as n,
} from "./app-server-manager-signals-DkRDRgNB.js";
import {
  C as r,
  G as i,
  L as a,
  S as o,
  V as s,
  X as c,
  Y as l,
  w as u,
  wt as d,
} from "./setting-storage.js";
import { n as f } from "./rpc-DqwD0euc.js";
import { t as p } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import { C as m, s as h } from "./config-queries-BBeTQbuo.js";
import { r as g } from "./toast-signal.js";
import { t as _ } from "./use-plugins-jIZrcuZQ.js";
import { n as v, r as y } from "./plugin-config-edits-DUMiyKty.js";
import { t as b } from "./use-skills.js";
import { n as x } from "./plugin-detail-queries.js";
import { t as S } from "./hooks-settings-queries-BUP-44jb.js";
async function C({ hostId: e, marketplacePath: t, pluginName: n }) {
  T(n) &&
    (await f.chromeNativeHost?.install({
      hostId: e,
      marketplacePath: t,
      pluginName: n,
    }));
}
async function w({ hostId: e, marketplaceName: t, pluginName: n }) {
  T(n) &&
    (await f.chromeNativeHost?.uninstall({
      hostId: e,
      marketplaceName: t,
      pluginName: n,
    }));
}
function T(e) {
  return e === `chrome` || e === `chrome-dev` || e === `chrome-internal`;
}
function E(e) {
  return e.displayName ?? n(e.plugin.name);
}
function D(t, n, r) {
  return e(t, n, r ? !0 : void 0);
}
var O = d(),
  k = [`user-saved-config`],
  A = s({
    enabledSuccess: {
      id: `plugins.card.enableSuccess`,
      defaultMessage: `{pluginName} plugin enabled`,
      description: `Toast shown after successfully enabling a plugin`,
    },
    disabledSuccess: {
      id: `plugins.card.disableSuccess`,
      defaultMessage: `{pluginName} plugin disabled`,
      description: `Toast shown after successfully disabling a plugin`,
    },
    toggleError: {
      id: `plugins.card.toggleError`,
      defaultMessage: `Failed to update plugin`,
      description: `Toast message shown when enabling or disabling a plugin fails`,
    },
    uninstallSuccess: {
      id: `plugins.card.uninstallSuccess`,
      defaultMessage: `{pluginName} plugin uninstalled`,
      description: `Toast shown after successfully uninstalling a plugin`,
    },
    uninstallError: {
      id: `plugins.card.uninstallError`,
      defaultMessage: `Failed to uninstall plugin`,
      description: `Toast message shown when uninstalling a plugin fails`,
    },
    marketplacesUpgradeSuccess: {
      id: `plugins.marketplace.upgradeAllSuccess`,
      defaultMessage: `Marketplaces upgraded`,
      description: `Toast shown after successfully upgrading marketplaces`,
    },
    marketplaceUpgradeSuccess: {
      id: `plugins.marketplace.upgradeSuccess`,
      defaultMessage: `{marketplaceName} marketplace upgraded`,
      description: `Toast shown after successfully upgrading one marketplace`,
    },
    marketplacesUpgradeError: {
      id: `plugins.marketplace.upgradeAllError`,
      defaultMessage: `Some marketplaces failed to upgrade`,
      description: `Toast message shown when upgrading marketplaces partially fails`,
    },
    marketplaceUpgradeError: {
      id: `plugins.marketplace.upgradeError`,
      defaultMessage: `Failed to upgrade marketplace`,
      description: `Toast message shown when upgrading one marketplace fails`,
    },
    marketplacesUpgradeRequestError: {
      id: `plugins.marketplace.upgradeAllRequestError`,
      defaultMessage: `Failed to upgrade marketplaces`,
      description: `Toast message shown when upgrading marketplaces fails`,
    },
  });
function j(e) {
  let n = (0, O.c)(24),
    s = e?.hostId ?? `local`,
    d = c(o),
    { data: f } = l(m, s),
    y = a(),
    b = p(),
    x = i(),
    S;
  n[0] !== s ||
  n[1] !== f?.configWriteTarget?.expectedVersion ||
  n[2] !== f?.configWriteTarget?.filePath
    ? ((S = async (e) => {
        let { pluginId: n, enabled: r } = e;
        return t(`batch-write-config-value`, {
          hostId: s,
          edits: v({ pluginId: n, enabled: r }),
          filePath: f?.configWriteTarget?.filePath ?? null,
          expectedVersion: f?.configWriteTarget?.expectedVersion ?? null,
          reloadUserConfig: !0,
        });
      }),
      (n[0] = s),
      (n[1] = f?.configWriteTarget?.expectedVersion),
      (n[2] = f?.configWriteTarget?.filePath),
      (n[3] = S))
    : (S = n[3]);
  let C;
  n[4] === y
    ? (C = n[5])
    : ((C = async (e) => {
        let { pluginId: t, enabled: n } = e;
        await Promise.all([
          y.cancelQueries({ queryKey: _ }),
          y.cancelQueries({ queryKey: h }),
        ]);
        let r = y.getQueryData(h),
          i = y.getQueriesData({ queryKey: _ }).flatMap(M);
        for (let [e, r] of i) y.setQueryData(e, L(r, t, n));
        if (r) {
          let e = { ...r.config };
          ((e.plugins = I(r.config.plugins, t, n)),
            y.setQueryData(h, { ...r, config: e }));
        }
        return { previousPluginLists: i, previousUserConfig: r };
      }),
      (n[4] = y),
      (n[5] = C));
  let w;
  n[6] !== x || n[7] !== d
    ? ((w = (e, t) => {
        let { enabled: n, pluginDisplayName: r } = t;
        d.get(g).success(
          x.formatMessage(n ? A.enabledSuccess : A.disabledSuccess, {
            pluginName: r,
          }),
        );
      }),
      (n[6] = x),
      (n[7] = d),
      (n[8] = w))
    : (w = n[8]);
  let T;
  n[9] !== x || n[10] !== y || n[11] !== d
    ? ((T = (e, t, n) => {
        (r.error(`Failed to update plugin enabled state`, {
          safe: {},
          sensitive: { error: e },
        }),
          n?.previousUserConfig && y.setQueryData(h, n.previousUserConfig));
        for (let [e, t] of n?.previousPluginLists ?? []) y.setQueryData(e, t);
        d.get(g).danger(x.formatMessage(A.toggleError));
      }),
      (n[9] = x),
      (n[10] = y),
      (n[11] = d),
      (n[12] = T))
    : (T = n[12]);
  let E;
  n[13] === b
    ? (E = n[14])
    : ((E = async () => {
        await z(b);
      }),
      (n[13] = b),
      (n[14] = E));
  let D;
  n[15] !== S || n[16] !== C || n[17] !== w || n[18] !== T || n[19] !== E
    ? ((D = {
        mutationFn: S,
        onMutate: C,
        onSuccess: w,
        onError: T,
        onSettled: E,
      }),
      (n[15] = S),
      (n[16] = C),
      (n[17] = w),
      (n[18] = T),
      (n[19] = E),
      (n[20] = D))
    : (D = n[20]);
  let k = u(D),
    j = k.isPending ? k.variables?.pluginId : null,
    N;
  return (
    n[21] !== k.mutateAsync || n[22] !== j
      ? ((N = { pendingPluginId: j, setPluginEnabled: k.mutateAsync }),
        (n[21] = k.mutateAsync),
        (n[22] = j),
        (n[23] = N))
      : (N = n[23]),
    N
  );
}
function M(e) {
  let [t, n] = e;
  return n == null || x(t) || !R(n) ? [] : [[t, n]];
}
function N(e) {
  let n = (0, O.c)(17),
    a = e?.hostId ?? `local`,
    s = c(o),
    l = p(),
    d = i(),
    f;
  n[0] !== a || n[1] !== s
    ? ((f = async (e) => {
        let {
            marketplaceName: n,
            pluginId: r,
            pluginName: i,
            requestPluginId: o,
          } = e,
          c = y(r);
        (c != null && (await D(s, c, !0)),
          await t(`uninstall-plugin`, { hostId: a, pluginId: o ?? r }),
          await w({ hostId: a, marketplaceName: n, pluginName: i }));
      }),
      (n[0] = a),
      (n[1] = s),
      (n[2] = f))
    : (f = n[2]);
  let m, h;
  n[3] !== d || n[4] !== s
    ? ((m = (e, t) => {
        let { pluginDisplayName: n } = t;
        s.get(g).success(
          d.formatMessage(A.uninstallSuccess, { pluginName: n }),
        );
      }),
      (h = (e) => {
        (r.error(`Failed to uninstall plugin`, {
          safe: {},
          sensitive: { error: e },
        }),
          s.get(g).danger(d.formatMessage(A.uninstallError)));
      }),
      (n[3] = d),
      (n[4] = s),
      (n[5] = m),
      (n[6] = h))
    : ((m = n[5]), (h = n[6]));
  let _;
  n[7] === l
    ? (_ = n[8])
    : ((_ = async () => {
        await z(l);
      }),
      (n[7] = l),
      (n[8] = _));
  let v;
  n[9] !== f || n[10] !== m || n[11] !== h || n[12] !== _
    ? ((v = { mutationFn: f, onSuccess: m, onError: h, onSettled: _ }),
      (n[9] = f),
      (n[10] = m),
      (n[11] = h),
      (n[12] = _),
      (n[13] = v))
    : (v = n[13]);
  let b = u(v),
    x = b.isPending ? (b.variables?.pluginId ?? null) : null,
    S;
  return (
    n[14] !== b.mutateAsync || n[15] !== x
      ? ((S = { pendingUninstallPluginId: x, uninstallPlugin: b.mutateAsync }),
        (n[14] = b.mutateAsync),
        (n[15] = x),
        (n[16] = S))
      : (S = n[16]),
    S
  );
}
function P(e) {
  let n = (0, O.c)(16),
    a = e?.hostId ?? `local`,
    s = c(o),
    l = p(),
    d = i(),
    f;
  n[0] === a
    ? (f = n[1])
    : ((f = async (e) => {
        let { marketplaceName: n } = e;
        await t(`remove-marketplace`, { hostId: a, marketplaceName: n });
      }),
      (n[0] = a),
      (n[1] = f));
  let m, h;
  n[2] !== d || n[3] !== s
    ? ((m = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        s.get(g).success(
          d.formatMessage(
            {
              id: `plugins.marketplace.removeSuccess`,
              defaultMessage: `{marketplaceName} marketplace removed`,
              description: `Toast shown after successfully removing a plugin marketplace`,
            },
            { marketplaceName: n },
          ),
        );
      }),
      (h = (e) => {
        (r.error(`Failed to remove marketplace`, {
          safe: {},
          sensitive: { error: e },
        }),
          s.get(g).danger(
            d.formatMessage({
              id: `plugins.marketplace.removeError`,
              defaultMessage: `Failed to remove marketplace`,
              description: `Toast message shown when removing a marketplace fails`,
            }),
          ));
      }),
      (n[2] = d),
      (n[3] = s),
      (n[4] = m),
      (n[5] = h))
    : ((m = n[4]), (h = n[5]));
  let _;
  n[6] === l
    ? (_ = n[7])
    : ((_ = async () => {
        await z(l);
      }),
      (n[6] = l),
      (n[7] = _));
  let v;
  n[8] !== f || n[9] !== m || n[10] !== h || n[11] !== _
    ? ((v = { mutationFn: f, onSuccess: m, onError: h, onSettled: _ }),
      (n[8] = f),
      (n[9] = m),
      (n[10] = h),
      (n[11] = _),
      (n[12] = v))
    : (v = n[12]);
  let y = u(v),
    b = y.isPending ? (y.variables?.marketplaceName ?? null) : null,
    x;
  return (
    n[13] !== y.mutateAsync || n[14] !== b
      ? ((x = {
          pendingRemoveMarketplaceName: b,
          removeMarketplace: y.mutateAsync,
        }),
        (n[13] = y.mutateAsync),
        (n[14] = b),
        (n[15] = x))
      : (x = n[15]),
    x
  );
}
function F(e) {
  let n = (0, O.c)(19),
    a = e?.hostId ?? `local`,
    s = c(o),
    l = p(),
    d = i(),
    f;
  n[0] === a
    ? (f = n[1])
    : ((f = async (e) => {
        let { marketplaceName: n } = e;
        return t(`upgrade-marketplaces`, {
          hostId: a,
          marketplaceName: n ?? null,
        });
      }),
      (n[0] = a),
      (n[1] = f));
  let m, h;
  n[2] !== d || n[3] !== s
    ? ((m = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        if (e.errors.length > 0) {
          (r.error(`Failed to upgrade marketplaces`, {
            safe: { errorCount: e.errors.length },
            sensitive: { errors: e.errors },
          }),
            s
              .get(g)
              .danger(
                d.formatMessage(
                  n == null
                    ? A.marketplacesUpgradeError
                    : A.marketplaceUpgradeError,
                ),
              ));
          return;
        }
        if (n != null) {
          s.get(g).success(
            d.formatMessage(A.marketplaceUpgradeSuccess, {
              marketplaceName: n,
            }),
          );
          return;
        }
        s.get(g).success(d.formatMessage(A.marketplacesUpgradeSuccess));
      }),
      (h = (e, t) => {
        let { marketplaceDisplayName: n } = t;
        (r.error(`Failed to upgrade marketplaces`, {
          safe: {},
          sensitive: { error: e },
        }),
          s
            .get(g)
            .danger(
              d.formatMessage(
                n == null
                  ? A.marketplacesUpgradeRequestError
                  : A.marketplaceUpgradeError,
              ),
            ));
      }),
      (n[2] = d),
      (n[3] = s),
      (n[4] = m),
      (n[5] = h))
    : ((m = n[4]), (h = n[5]));
  let _;
  n[6] === l
    ? (_ = n[7])
    : ((_ = async () => {
        await z(l);
      }),
      (n[6] = l),
      (n[7] = _));
  let v;
  n[8] !== f || n[9] !== m || n[10] !== h || n[11] !== _
    ? ((v = { mutationFn: f, onSuccess: m, onError: h, onSettled: _ }),
      (n[8] = f),
      (n[9] = m),
      (n[10] = h),
      (n[11] = _),
      (n[12] = v))
    : (v = n[12]);
  let y = u(v),
    b = y.isPending && y.variables.marketplaceName == null,
    x =
      y.isPending && y.variables.marketplaceName != null
        ? y.variables.marketplaceName
        : null,
    S;
  n[13] === y
    ? (S = n[14])
    : ((S = async (e) => {
        let t = e === void 0 ? {} : e;
        await y.mutateAsync(t);
      }),
      (n[13] = y),
      (n[14] = S));
  let C;
  return (
    n[15] !== b || n[16] !== x || n[17] !== S
      ? ((C = {
          isUpgradingMarketplaces: b,
          pendingUpgradeMarketplaceName: x,
          upgradeMarketplaces: S,
        }),
        (n[15] = b),
        (n[16] = x),
        (n[17] = S),
        (n[18] = C))
      : (C = n[18]),
    C
  );
}
function I(e, t, n) {
  let r = typeof e == `object` && e && !Array.isArray(e) ? e : {},
    i = r[t];
  return {
    ...r,
    [t]:
      typeof i == `object` && i && !Array.isArray(i)
        ? { ...i, enabled: n }
        : { enabled: n },
  };
}
function L(e, t, n) {
  return {
    ...e,
    plugins: e.plugins.map((e) =>
      e.plugin.id !== t || e.plugin.enabled === n
        ? e
        : { ...e, plugin: { ...e.plugin, enabled: n } },
    ),
  };
}
function R(e) {
  return (
    typeof e == `object` && !!e && `plugins` in e && Array.isArray(e.plugins)
  );
}
async function z(e) {
  await Promise.all([e(_), e(b), e(S), e(h), e(k)]);
}
export { D as a, F as i, N as n, E as o, j as r, C as s, P as t };
//# sourceMappingURL=plugins-availability-txQMPSuC.js.map
