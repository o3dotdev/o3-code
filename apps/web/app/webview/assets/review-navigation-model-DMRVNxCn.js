import { s as e } from "./chunk-Bj-mKKzh.js";
import { Dr as t, U as n, Ut as r, zn as i } from "./src-C.js";
import {
  $n as a,
  Fn as o,
  Gn as s,
  Ha as c,
  Ia as l,
  Kn as u,
  Ln as d,
  Mn as f,
  Nn as p,
  Pn as m,
  Qn as h,
  Ra as g,
  Va as _,
  da as ee,
  er as te,
  kt as ne,
  wi as re,
  zn as ie,
} from "./app-server-manager-signals-DkRDRgNB.js";
import {
  $ as ae,
  Q as v,
  S as y,
  _ as b,
  at as x,
  nt as oe,
  ot as se,
  rt as ce,
} from "./setting-storage.js";
import { i as le, t as S } from "./route-scope.js";
import { O as ue, a as de } from "./app-shell-state.js";
import { r as C } from "./diff-view-mode.js";
import { n as fe } from "./app-shell-tab-controller-BTWycTBb.js";
import { i as pe, s as me } from "./focus-composer.js";
import { t as he } from "./sumBy-zUPwGmzt.js";
import {
  a as w,
  i as ge,
  n as T,
  r as E,
  t as _e,
} from "./thread-context-CaET2O8s.js";
import { t as ve } from "./hash-code.js";
import { t as ye } from "./git-current-branch-query.js";
import { g as be } from "./window-app-action-helpers.js";
function D(e) {
  return e === `staged` || e === `unstaged`;
}
var O = ne(`diff-filter`, `unstaged`);
function xe({ codexHome: e, cwd: t, gitMetadata: r, hostId: i }) {
  return t == null
    ? {
        kind: `none`,
        codexHome: e,
        cwd: null,
        git: null,
        hostId: i,
        isCodexWorktree: !1,
      }
    : r == null
      ? {
          kind: `plain`,
          codexHome: e,
          cwd: t,
          git: null,
          hostId: i,
          isCodexWorktree: !1,
        }
      : {
          kind: `git`,
          codexHome: e,
          cwd: t,
          git: r,
          hostId: i,
          isCodexWorktree: n(t, e ?? void 0),
        };
}
var Se = ce(S, ({ get: e }) =>
    a(e(T), e(w), e(E), `local_conversation_thread`, { watchForGitInit: !0 }),
  ),
  Ce = v(S, ({ get: e }) => {
    let t = e(Se),
      n = t.data ?? null;
    return n == null
      ? u(t)
      : e(ye, {
          commonDir: n.commonDir,
          enabled: !0,
          hostConfig: e(E),
          operationSource: `local_conversation_thread`,
          refetchOnWindowFocus: !1,
          root: n.root,
          staleTime: null,
        });
  }),
  we = v(S, ({ get: e }) => {
    let t = e(Se).data ?? null;
    return xe({ codexHome: e(_e), cwd: e(T), gitMetadata: t, hostId: e(ge) });
  }),
  k = new Map(),
  Te = 16,
  Ee = `load-failed`,
  De = 15e3,
  Oe = `timed-out`;
function ke({
  baseBranch: e,
  changeKind: t,
  commitSha: n = null,
  cwd: r,
  hostConfig: i,
  hideWhitespace: a,
  path: o,
  previousPath: s,
  signal: c,
  source: l,
}) {
  return c?.aborted
    ? Promise.reject(re())
    : new Promise((u, d) => {
        let f = `${h(i)}:${r}:${l}:${e ?? ``}:${n ?? ``}:${a}`,
          p = k.get(f) ?? {
            abortControllers: null,
            baseBranch: e,
            commitSha: n,
            cwd: r,
            flushTimeoutId: null,
            hideWhitespace: a,
            hostConfig: i,
            paths: new Map(),
            requestKey: f,
            source: l,
          },
          m = {
            changeKind: t,
            disposeAbortListener: () => {},
            previousPath: s ?? null,
            reject: d,
            resolve: u,
          };
        m.disposeAbortListener = je({
          abortPathRequest: () => {
            Me({ path: o, pendingRequest: p, pathRequest: m });
          },
          signal: c,
        });
        let g = p.paths.get(o);
        (g != null && (g.disposeAbortListener(), g.reject(re())),
          p.paths.set(o, m),
          !k.has(f) &&
            (k.set(f, p),
            (p.flushTimeoutId = setTimeout(() => {
              ((p.flushTimeoutId = null), Ne(f));
            }, Te))));
      });
}
function Ae(e) {
  return [
    e.filter((e) => e.changeKind !== `untracked`),
    e.filter((e) => e.changeKind === `untracked`),
  ].filter((e) => e.length > 0);
}
function je({ abortPathRequest: e, signal: t }) {
  return t == null
    ? () => {}
    : (t.addEventListener(`abort`, e, { once: !0 }),
      () => {
        t.removeEventListener(`abort`, e);
      });
}
function Me({ path: e, pathRequest: t, pendingRequest: n }) {
  if (
    n.paths.get(e) === t &&
    (t.disposeAbortListener(),
    n.paths.delete(e),
    t.reject(re()),
    !(n.paths.size > 0))
  ) {
    if (n.abortControllers != null) {
      for (let e of n.abortControllers) e.abort();
      return;
    }
    (n.flushTimeoutId != null &&
      (clearTimeout(n.flushTimeoutId), (n.flushTimeoutId = null)),
      k.delete(n.requestKey));
  }
}
async function Ne(e) {
  let t = k.get(e);
  if (t == null || (k.delete(e), t.paths.size === 0)) return;
  let n = new Set();
  t.abortControllers = n;
  try {
    let e = Ae(
      [...t.paths.entries()].map(([e, t]) => ({
        path: e,
        changeKind: t.changeKind,
        ...(t.previousPath == null ? {} : { previousPath: t.previousPath }),
      })),
    );
    await Promise.allSettled(
      e.map(async (e) => {
        let r = new AbortController(),
          i = null;
        n.add(r);
        try {
          Pe({
            diffs: (
              await Promise.race([
                te(`git`).request({
                  method: `review-diff`,
                  params: {
                    ...Ie({
                      cwd: t.cwd,
                      hideWhitespace: t.hideWhitespace,
                      source: t.source,
                      baseBranch: t.baseBranch,
                      commitSha: t.commitSha,
                    }),
                    files: e,
                    hostConfig: t.hostConfig,
                    operationSource: `review_model`,
                  },
                  signal: r.signal,
                }),
                new Promise((e, t) => {
                  i = setTimeout(() => {
                    (t(Error(Oe)), r.abort());
                  }, De);
                }),
              ])
            ).diffs,
            files: e,
            hideWhitespace: t.hideWhitespace,
            pendingRequest: t,
          });
        } catch (n) {
          Fe({
            error: n instanceof Error ? n : Error(String(n)),
            files: e,
            pendingRequest: t,
          });
        } finally {
          (i != null && clearTimeout(i), n.delete(r));
        }
      }),
    );
  } finally {
    for (let [, e] of t.paths) e.disposeAbortListener();
    ((t.abortControllers = null), t.paths.clear());
  }
}
function Pe({ diffs: e, files: t, hideWhitespace: n, pendingRequest: r }) {
  for (let i of t) {
    let t = r.paths.get(i.path),
      a = e[i.path];
    if (t != null) {
      if (a?.type === `success` && (a.diff.trim().length > 0 || n)) {
        t.resolve(a);
        continue;
      }
      t.reject(Error(Ee));
    }
  }
}
function Fe({ error: e, files: t, pendingRequest: n }) {
  for (let r of t) n.paths.get(r.path)?.reject(e);
}
function Ie({
  baseBranch: e,
  commitSha: t,
  cwd: n,
  hideWhitespace: r,
  source: a,
}) {
  return {
    cwd: i(n),
    ...(r ? { hideWhitespace: r } : {}),
    source: a,
    ...(a === `branch` && e != null ? { baseBranch: e } : {}),
    ...(a === `commit` && t != null ? { commitSha: t } : {}),
  };
}
var Le = e(t(), 1);
function Re({ cwd: e, path: t }) {
  if (e == null || !g(t)) return t;
  let n = _(Le.default.relative(c(``, e), t));
  return n === `` ? l(t) : n;
}
function A({ gitRoot: e, gitPath: t }) {
  let n = _(t);
  return e == null ? n : _(c(e, n));
}
var ze = e(r(), 1),
  Be = new WeakMap(),
  Ve = new WeakMap(),
  j = new WeakMap(),
  He = x(S, null),
  Ue = x(S, null),
  M = x(S, null),
  We = v(S, ({ get: e }) => e(Ue)),
  Ge = se(y, (e) => null),
  Ke = v(S, ({ get: e, scope: t }) => e(Ge, le(t.value))),
  qe = 3,
  Je = 300,
  Ye = 1e3,
  Xe = 30,
  Ze = [`unstaged`, `branch`],
  Qe = x(S, !1),
  N = Se,
  $e = ce(S, ({ get: e }) =>
    a(e(Ue), e(w), e(E), `review_model`, { watchForGitInit: !0 }),
  ),
  et = v(S, ({ get: e }) => e($e).data?.root ?? e(Ue)),
  tt = oe(y, (e) =>
    p(
      `base-branch`,
      { commonDir: e.commonDir, root: e.root },
      { operationSource: `review_model`, root: e.root },
      h(e.hostConfig),
      e.hostConfig,
    ),
  ),
  P = v(S, ({ get: e }) => {
    let t = e(N),
      n = t.data ?? null;
    return n == null
      ? u(t)
      : e(tt, { commonDir: n.commonDir, hostConfig: e(E), root: n.root });
  }),
  nt = Ce,
  rt = ce(S, ({ get: e }) => {
    let t = e(E),
      n = e(w),
      r = e(N).data ?? null;
    return p(
      `recent-branches`,
      r,
      r == null
        ? null
        : { limit: Xe, operationSource: `review_model`, root: r.root },
      n,
      t,
    );
  }),
  F = v(S, ({ get: e }) => At(e(P).data ?? null, e(Ke))),
  it = ce(S, ({ get: e }) => {
    let t = e(E),
      n = e(w),
      r = e(N).data ?? null,
      i = e(F);
    return p(
      `branch-commits`,
      r,
      r == null
        ? null
        : {
            ...(i == null ? {} : { baseBranch: i }),
            operationSource: `review_model`,
            root: r.root,
          },
      n,
      t,
      { staleTime: b.FIVE_SECONDS },
    );
  }),
  at = oe(y, (e) =>
    p(
      `index-info`,
      { commonDir: e.commonDir, root: e.root },
      { cwd: i(e.cwd), operationSource: `review_model` },
      h(e.hostConfig),
      e.hostConfig,
      { refetchOnWindowFocus: `always`, staleTime: b.FIVE_SECONDS },
    ),
  ),
  ot = v(S, ({ get: e }) => {
    let t = e(mt),
      n = e(T);
    if (!t || n == null) return s();
    let r = e(N),
      i = r.data ?? null;
    return i == null
      ? u(r)
      : e(at, {
          commonDir: i.commonDir,
          cwd: n,
          hostConfig: e(E),
          root: i.root,
        });
  }),
  st = oe(y, (e) =>
    p(
      `review-summary`,
      { commonDir: e.commonDir, root: e.root },
      ht({
        cwd: e.cwd,
        hideWhitespace: e.hideWhitespace,
        source: e.source,
        baseBranch: e.baseBranch,
        commitSha: e.commitSha,
      }),
      h(e.hostConfig),
      e.hostConfig,
      {
        enabled: e.enabled,
        refetchOnWindowFocus: `always`,
        staleTime: b.FIVE_SECONDS,
      },
    ),
  ),
  ct = oe(y, (e) =>
    p(
      `branch-diff-stats`,
      { commonDir: e.commonDir, root: e.root },
      {
        cwd: i(e.cwd),
        ...(e.baseBranch == null ? {} : { baseBranch: e.baseBranch }),
        ...(e.hideWhitespace ? { hideWhitespace: !0 } : {}),
        operationSource: `review_model`,
      },
      h(e.hostConfig),
      e.hostConfig,
      { enabled: e.enabled, staleTime: b.FIVE_SECONDS },
    ),
  ),
  lt = v(S, ({ get: e }) => {
    let t = e(N),
      n = t.data ?? null,
      r = e(T),
      i = e(P),
      a = i.data == null && i.isFetching;
    return n == null
      ? u(t)
      : r == null || e(L) === `cloud`
        ? s()
        : e(ct, {
            baseBranch: e(F),
            commonDir: n.commonDir,
            cwd: r,
            enabled: !a,
            hideWhitespace: e(C),
            hostConfig: e(E),
            root: n.root,
          });
  }),
  I = v(S, ({ get: e }) => {
    let t = e(N),
      n = t.data ?? null,
      r = e(z),
      i = e(P),
      a = r === `branch` && i.data == null && i.isFetching,
      o = ft({
        baseBranch: e(F),
        commitSha: e(M),
        cwd: e(T),
        enabled: e(R) && !a,
        hideWhitespace: e(C),
        hostConfig: e(E),
        metadata: n,
        source: r,
      });
    return o == null ? (n == null ? u(t) : s()) : e(st, o);
  }),
  ut = v(S, ({ get: e }) => {
    let t = e(I).data;
    if (t?.type !== `success`) return null;
    let n = e(N).data?.root ?? null,
      r = new Map();
    for (let e of t.files) {
      let t = A({ gitRoot: n, gitPath: e.path });
      r.has(t) || r.set(t, e);
    }
    return r;
  });
function dt(e, t = e.get(z)) {
  let n = e.get(P),
    r = t === `branch` && n.data == null && n.isFetching,
    i = ft({
      baseBranch: e.get(F),
      commitSha: e.get(M),
      cwd: e.get(T),
      enabled: e.get(R) && !r,
      hideWhitespace: e.get(C),
      hostConfig: e.get(E),
      metadata: e.get(N).data ?? null,
      source: t,
    });
  return i == null ? null : e.query.snapshot(st, i);
}
function ft({
  baseBranch: e,
  commitSha: t,
  cwd: n,
  enabled: r,
  hideWhitespace: i,
  hostConfig: a,
  metadata: o,
  source: s,
}) {
  return o == null || n == null || s == null
    ? null
    : {
        baseBranch: e,
        commitSha: t,
        commonDir: o.commonDir,
        cwd: n,
        enabled: r,
        hideWhitespace: i,
        hostConfig: a,
        root: o.root,
        source: s,
      };
}
var L = v(S, ({ get: e, scope: t }) =>
    t.value.routeKind === `remote-thread`
      ? `cloud`
      : e(we).isCodexWorktree
        ? `worktree`
        : `local`,
  ),
  pt = v(S, ({ get: e }) => e(R) && e(O) === `branch`),
  mt = v(S, ({ get: e }) => e(R) && D(e(O))),
  R = v(S, ({ get: e }) => {
    let t = e(O);
    return (
      e(T) != null &&
      e(L) !== `cloud` &&
      t !== `last-turn` &&
      (t !== `commit` || e(M) != null)
    );
  }),
  z = v(S, ({ get: e }) => {
    let t = e(O);
    return t === `last-turn` || (t === `commit` && e(M) == null) ? null : t;
  });
function ht({
  cwd: e,
  hideWhitespace: t,
  source: n,
  baseBranch: r,
  commitSha: a,
}) {
  return {
    cwd: i(e),
    ...(t ? { hideWhitespace: t } : {}),
    operationSource: `review_model`,
    source: n,
    ...(n === `branch` && r != null ? { baseBranch: r } : {}),
    ...(n === `commit` && a != null ? { commitSha: a } : {}),
  };
}
var gt = oe(S, (e, { get: t }) => {
    let n = t(N).data,
      r = t(I).data,
      i = t(ut)?.get(e) ?? null,
      a = t(T),
      o = t(F),
      s = t(M),
      c = t(E),
      l = t(w),
      u = t(C),
      d =
        n != null && r?.type === `success` && i != null && a != null
          ? [
              ...f({
                metadata: n,
                method: `review-diff`,
                params: {
                  ...ht({
                    cwd: a,
                    hideWhitespace: u,
                    source: r.source,
                    baseBranch: o,
                    commitSha: s,
                  }),
                  files: [
                    {
                      path: e,
                      changeKind: i.changeKind,
                      ...(i.previousPath == null
                        ? {}
                        : { previousPath: i.previousPath }),
                    },
                  ],
                },
                hostKey: l,
              }),
              i.revision,
            ]
          : [`git`, `disabled`, `review-diff`, e];
    return {
      queryKey: d,
      queryFn: async ({ signal: t }) => {
        if (r?.type !== `success` || i == null || a == null)
          throw Error(`Missing review diff metadata`);
        return ke({
          baseBranch: o,
          commitSha: s,
          changeKind: i.changeKind,
          cwd: a,
          hideWhitespace: u,
          hostConfig: c,
          path: e,
          previousPath: i.previousPath,
          signal: t,
          source: r.source,
        });
      },
      enabled:
        t(R) && n != null && r?.type === `success` && i != null && a != null,
      refetchOnWindowFocus: `always`,
      retry: Bt,
      retryDelay: Vt,
      staleTime: b.FIVE_SECONDS,
      placeholderData: (e, t) => {
        if (!(t == null || !Ht(d, t.queryKey))) return e;
      },
    };
  }),
  _t = v(S, ({ get: e }) => zt(e(He)));
async function B(e) {
  let t = e.get(N).data,
    n = e.get(w);
  if (e.get(R) && t != null) {
    wt(e);
    try {
      await d(e.queryClient, t, { hostKey: n });
    } finally {
      wt(e);
    }
  }
}
function vt(e, t) {
  switch (t.changeType) {
    case `working-tree`:
      t.changedPaths != null && Et(e, t.changedPaths);
      break;
    case `head`:
    case `index`:
      It(e).dirty = !0;
      break;
    case `remote-refs`:
    case `synced-branch`:
      break;
  }
  let n = j.get(e);
  n == null || !n.dirty || Lt(e, n);
}
function yt(e) {
  let t = j.get(e);
  t != null && (Rt(t), j.delete(e));
}
async function bt(e, t) {
  await e.get(gt, t).refetch();
}
async function xt(e, { queueIfRefreshing: t = !1 } = {}) {
  let n = e.get(N).data?.commonDir,
    r = Be.get(e);
  if (n == null) return;
  if (r != null) {
    if (!t) return;
    try {
      await r;
    } catch {}
  }
  let i = St(e, n);
  Be.set(e, i);
  try {
    await i;
  } finally {
    Be.get(e) === i && Be.delete(e);
  }
}
async function St(e, t) {
  (wt(e), e.set(Qe, !0));
  try {
    try {
      await ie({
        cwd: e.get(T),
        hostConfig: e.get(E),
        operationSource: `review_model`,
      });
    } catch {}
    await o(e.queryClient, t, { hostKey: e.get(w) });
  } finally {
    (wt(e), e.set(Qe, !1));
  }
}
async function Ct(e, t, { source: n = e.get(z) } = {}) {
  let r = n === `unstaged` || n === `branch`,
    i = e.get(N).data,
    a = e.get(T),
    o = e.get(F),
    s = e.get(M),
    c = e.get(E),
    l = e.get(w),
    u = e.get(C),
    d = Ot({ cwd: a, gitRoot: i?.root ?? null, paths: t });
  if (!e.get(R) || !r || i == null || a == null || d.length === 0) return;
  if (u) {
    n === e.get(z) && (await B(e));
    return;
  }
  let p = dt(e, n);
  if (p == null) return;
  await p.cancel({ exact: !0 }, { silent: !0 });
  let h = p.getData();
  if (h?.type !== `success`) {
    n === e.get(z) && (await B(e));
    return;
  }
  let g = Tt(e),
    _ = new Set(d),
    ee = [
      ...new Set([
        ...d,
        ...h.files.flatMap((e) =>
          e.previousPath == null || (!_.has(e.path) && !_.has(e.previousPath))
            ? []
            : [e.path, e.previousPath],
        ),
      ]),
    ],
    ne = new Set(ee),
    re = h.files.flatMap((e) => {
      if (!ne.has(e.path)) return [];
      let t = A({ gitRoot: i.root, gitPath: e.path });
      return [
        [
          ...f({
            metadata: i,
            method: `review-diff`,
            params: {
              ...ht({
                cwd: a,
                hideWhitespace: u,
                source: n,
                baseBranch: o,
                commitSha: s,
              }),
              files: [
                {
                  path: t,
                  changeKind: e.changeKind,
                  ...(e.previousPath == null
                    ? {}
                    : { previousPath: e.previousPath }),
                },
              ],
            },
            hostKey: l,
          }),
          e.revision,
        ],
      ];
    }),
    ie = await te(`git`).request({
      method: `review-path-summary`,
      params: {
        ...ht({
          cwd: a,
          hideWhitespace: u,
          source: n,
          baseBranch: o,
          commitSha: s,
        }),
        hostConfig: c,
        paths: ee,
      },
    });
  if (ie.type !== `success`) {
    await B(e);
    return;
  }
  if (g !== Tt(e)) return;
  let ae = Promise.all(
      re.map((t) =>
        e.queryClient.invalidateQueries({ exact: !0, queryKey: t }),
      ),
    ),
    v = e.queryClient.invalidateQueries(
      { queryKey: [...m(i.commonDir, i.root, l), `branch-diff-stats`] },
      { cancelRefetch: !0 },
    );
  (p.setData((e) => Dt(e, ie, ee)), await Promise.all([ae, v]));
}
function wt(e) {
  Ve.set(e, Tt(e) + 1);
}
function Tt(e) {
  return Ve.get(e) ?? 0;
}
async function Et(e, t) {
  await Promise.all(Ze.map((n) => Ct(e, t, { source: n })));
}
function Dt(e, t, n) {
  if (e?.type !== `success` || t.type !== `success` || e.source !== t.source)
    return e;
  let r = new Set(n),
    i = new Map(t.files.map((e) => [e.path, e])),
    a = new Map(
      t.files.flatMap((e) =>
        e.previousPath == null ? [] : [[e.previousPath, e]],
      ),
    ),
    o = e.files.flatMap((e) => {
      let t = i.get(e.path) ?? a.get(e.path) ?? null;
      return !r.has(e.path) && t == null
        ? [e]
        : t == null
          ? []
          : (i.delete(t.path),
            t.previousPath != null && a.delete(t.previousPath),
            [t]);
    });
  o.push(...i.values());
  let s =
    `stageCounts` in t
      ? t.stageCounts
      : e.source === `unstaged`
        ? {
            stagedFileCount: e.stageCounts.stagedFileCount,
            unstagedFileCount: o.filter((e) => e.changeKind !== `untracked`)
              .length,
            untrackedFileCount: o.filter((e) => e.changeKind === `untracked`)
              .length,
          }
        : e.stageCounts;
  return { ...e, files: o, stageCounts: s };
}
function Ot({ cwd: e, gitRoot: t, paths: n }) {
  if (e == null || t == null) return [];
  let r = c(``, t);
  return [
    ...new Set(
      n.flatMap((t) => {
        if (t === ``) return [];
        let n = Le.default.relative(r, c(e, t));
        return n === `` || n === `..` || n.startsWith(`../`) ? [] : [n];
      }),
    ),
  ];
}
function kt(e) {
  return e?.local == null
    ? null
    : e.remote == null
      ? e.local
      : `${e.remote}/${e.local}`;
}
function At(e, t = null) {
  return t ?? kt(e);
}
async function jt(e) {
  e.get(mt) && (await e.get(ot).refetch());
}
function Mt(e, t, n) {
  (e.set(He, t), e.set(Ue, n));
}
function Nt(e, t, n) {
  e.set(Ge, t, n);
}
function Pt(e, t) {
  (e.set(M, t), e.set(O, `commit`));
}
function Ft(e) {
  return e.watch((t) => {
    if (t.get(O) === `commit`) {
      let e = t.get(M);
      if (e == null) {
        t.set(O, `branch`);
        return;
      }
      let n = t.get(it).data?.commits;
      if (!(n == null || n.some((t) => t.sha === e))) {
        (t.set(M, null), t.set(O, `branch`));
        return;
      }
    }
    let n = t.get(z);
    (t.get(He) != null || (t.get(R) && n != null)) && B(e);
  });
}
function It(e) {
  let t = j.get(e);
  if (t != null) return t;
  let n = { dirty: !1, timeoutId: null };
  return (j.set(e, n), n);
}
function Lt(e, t) {
  (Rt(t),
    (t.timeoutId = setTimeout(() => {
      ((t.timeoutId = null), t.dirty && ((t.dirty = !1), B(e)));
    }, Ye)));
}
function Rt(e) {
  e.timeoutId != null && (clearTimeout(e.timeoutId), (e.timeoutId = null));
}
function zt(e) {
  return e == null || e.trim() === ``
    ? { diff: null, diffText: null, diffBytes: null, diffError: null }
    : {
        diff: pe(e),
        diffText: e,
        diffBytes: new TextEncoder().encode(e).length,
        diffError: null,
      };
}
function Bt(e, t) {
  return t.name !== `AbortError` && e < qe;
}
function Vt(e) {
  return Math.min(Je * 2 ** e, 2e3);
}
function Ht(e, t) {
  return (
    e.length > 0 &&
    e.length === t.length &&
    (0, ze.default)(e.slice(0, -1), t.slice(0, -1))
  );
}
var Ut = e(he(), 1);
function Wt() {
  return { full: new Map(), trimmed: new Map() };
}
function Gt() {
  return { staged: Wt(), unstaged: Wt(), version: 0 };
}
function Kt(e) {
  return new Set([
    ...e.staged.trimmed.keys(),
    ...e.staged.full.keys(),
    ...e.unstaged.trimmed.keys(),
    ...e.unstaged.full.keys(),
  ]);
}
var qt = x(S, Gt()),
  Jt = v(S, ({ get: e }) => Kt(e(qt)));
function Yt(e) {
  e.set(qt, Gt());
}
async function Xt(e, t) {
  let n = e.get(T);
  if (e.get(L) === `cloud` || n == null) return;
  let r = Array.from(new Set(t.filter(Boolean)));
  r.length !== 0 &&
    e.set(qt, (e) => {
      let t = {
        staged: {
          trimmed: new Map(e.staged.trimmed),
          full: new Map(e.staged.full),
        },
        unstaged: {
          trimmed: new Map(e.unstaged.trimmed),
          full: new Map(e.unstaged.full),
        },
        version: e.version + 1,
      };
      for (let e of r)
        (t.staged.trimmed.delete(e),
          t.staged.full.delete(e),
          t.unstaged.trimmed.delete(e),
          t.unstaged.full.delete(e));
      return t;
    });
}
function Zt({
  reviewSummary: e,
  selectedDiff: t,
  shouldFetchReviewSummary: n,
}) {
  if (n && e?.type === `success`) return Qt(e);
  let r = t.diff ?? [];
  return en(
    (0, Ut.default)(r, (e) => e.additions),
    (0, Ut.default)(r, (e) => e.deletions),
    r.length,
    t.diffText?.length ?? 0,
  );
}
function Qt(e) {
  return en(
    (0, Ut.default)(e.files, (e) => e.additions ?? 0),
    (0, Ut.default)(e.files, (e) => e.deletions ?? 0),
    e.files.length,
  );
}
function $t(e) {
  return e == null ? null : en(e.additions, e.deletions, e.fileCount);
}
function en(e, t, n, r = 0) {
  return {
    additions: e,
    bytesEstimate: r,
    deletions: t,
    fileCount: n,
    lineCount: e + t,
  };
}
function tn({
  reviewSummary: e,
  selectedDiff: t,
  shouldFetchReviewSummary: n,
}) {
  return n
    ? e?.type === `success` && e.files.length > 0
    : (t.diff?.length ?? 0) > 0;
}
var nn = v(S, ({ get: e }) =>
    e(L) === `cloud` || e(O) === `last-turn`
      ? e(_t)
      : { diff: null, diffText: null, diffBytes: null, diffError: null },
  ),
  rn = v(S, ({ get: e }) =>
    e(L) === `cloud` || e(O) === `last-turn` ? (e(We) ?? e(T)) : e(T),
  ),
  an = v(S, ({ get: e }) => {
    if (e(L) === `cloud` || e(O) === `last-turn`)
      return { isFetchingGitChanges: !1, isPendingGitChanges: !1 };
    let t = e(I);
    return {
      isFetchingGitChanges: t.isFetching,
      isPendingGitChanges: e(R) && t.isPending,
    };
  }),
  V = v(S, ({ get: e }) => {
    let t = e(O),
      n = e(an),
      r = e(Jt),
      i = e(L),
      a = r.size > 0;
    return i !== `cloud` && D(t)
      ? {
          diff: null,
          diffText: null,
          diffBytes: null,
          diffError: null,
          fullDiff: null,
          hasOptimisticDiffs: a,
          isFetchingGitChanges: n.isFetchingGitChanges,
          isPendingGitChanges: n.isPendingGitChanges,
        }
      : {
          ...e(nn),
          fullDiff: null,
          hasOptimisticDiffs: !1,
          isFetchingGitChanges: n.isFetchingGitChanges,
          isPendingGitChanges: n.isPendingGitChanges,
        };
  }),
  on = v(S, ({ get: e }) => {
    if (e(L) === `cloud`) return { isLoading: !1, metrics: null };
    let t = e(lt),
      n = $t(t.data);
    if (n != null) return { isLoading: !1, metrics: n };
    if (e(O) === `branch`) {
      let t = e(I),
        n = t.data;
      return n?.type === `success`
        ? { isLoading: !1, metrics: Qt(n) }
        : { isLoading: e(R) && t.isPending, metrics: null };
    }
    return { isLoading: t.isFetching, metrics: null };
  }),
  sn = v(
    S,
    ({ get: e }) => e(O) !== `branch` && (e(on).metrics?.fileCount ?? 0) > 0,
  ),
  cn = v(S, ({ get: e }) => {
    if (e(L) !== `cloud` && e(O) === `branch`) {
      let t = e(on);
      if (t.metrics != null) return t.metrics;
    }
    let t = e(R);
    return Zt({
      reviewSummary: e(I).data,
      selectedDiff: t ? { diff: null, diffText: null } : e(V),
      shouldFetchReviewSummary: t,
    });
  }),
  ln = v(S, ({ get: e }) => {
    if (e(L) === `cloud` || !D(e(O)))
      return { stagedFileCount: void 0, unstagedFileCount: void 0 };
    let t = e(I).data;
    return t?.type === `success`
      ? {
          stagedFileCount: t.stageCounts.stagedFileCount,
          unstagedFileCount:
            t.stageCounts.unstagedFileCount + t.stageCounts.untrackedFileCount,
        }
      : { stagedFileCount: 0, unstagedFileCount: 0 };
  }),
  un = v(S, ({ get: e }) =>
    tn({
      reviewSummary: e(I).data,
      selectedDiff: e(V),
      shouldFetchReviewSummary: e(R),
    }),
  ),
  dn = v(S, ({ get: e }) => {
    let t = e(N);
    return e(L) !== `cloud` && !t.isLoading && t.data?.root == null;
  }),
  fn = v(S, ({ get: e, scope: t }) => {
    let n = e(O),
      r = e(N);
    return (
      t.value.routeKind !== `remote-thread` &&
      D(n) &&
      r.data?.root != null &&
      (e(L) === `local` || e(L) === `worktree`)
    );
  }),
  pn = v(S, ({ get: e }) => {
    let t = e(V);
    if (e(R)) {
      let n = e(I).data;
      return (
        n?.type === `success` &&
        n.files.length > 0 &&
        !(e(fn) && t.hasOptimisticDiffs)
      );
    }
    return (
      t.diffText != null &&
      t.diffText.trim().length > 0 &&
      !(e(fn) && t.hasOptimisticDiffs)
    );
  }),
  mn = v(S, ({ get: e }) => e(N).data?.commonDir != null && !e(Qe)),
  hn = v(S, ({ get: e, scope: t }) => {
    let n = e(V);
    return (
      t.value.routeKind !== `remote-thread` && n.isPendingGitChanges && !e(un)
    );
  }),
  gn = v(S, ({ get: e }) => e(V).diffError?.type === `diff-too-large`);
function _n({
  reviewSummaryFetching: e,
  reviewSummaryUpdatedAt: t,
  shouldFetchReviewSummary: n,
}) {
  return !n || e ? !1 : t !== 0;
}
var vn = v(S, ({ get: e }) => {
    let t = e(R),
      n = e(qt),
      r = Kt(n);
    if (!t || (r.size === 0 && n.version === 0)) return !1;
    let i = e(I);
    return _n({
      reviewSummaryFetching: i.isFetching,
      reviewSummaryUpdatedAt: i.dataUpdatedAt,
      shouldFetchReviewSummary: t,
    });
  }),
  H = v(S, ({ get: e }) => {
    if (e(R))
      return Cn({
        cwd: e(T),
        gitRoot: e(N).data?.root ?? null,
        reviewSummary: e(I).data,
      });
    let t =
      e(L) === `cloud` || e(O) === `last-turn`
        ? e(et)
        : (e(N).data?.root ?? null);
    return Tn(e(V).diff, t);
  }),
  yn = ae(S, (e, { get: t }) => {
    if (t(R)) {
      let n = t(N).data?.root ?? null,
        r = t(ut)?.get(e) ?? null;
      if (r == null) return null;
      let i = t(gt, e);
      return wn({
        cwd: t(T),
        gitRoot: n,
        reviewDiffEntry: i.data,
        reviewDiffError: i.isError ? i.error : null,
        reviewDiffIsFetching: i.isFetching,
        reviewFile: r,
      });
    }
    let n = _(ee(e, t(T) ?? void 0));
    return t(H).find((t) => t.path === e || t.gitPath === n) ?? null;
  }),
  bn = v(S, ({ get: e }) => En(e(H))),
  xn = v(S, ({ get: e }) =>
    Dn({ diffBytes: e(V).diffBytes, fileEntries: e(H) }),
  ),
  U = v(S, ({ get: e }) =>
    me({
      fileCount: e(H).length,
      totalChangedBytes: e(xn),
      totalChangedLines: e(bn),
    }),
  ),
  Sn = v(S, ({ get: e }) => {
    let t = e(H);
    return !e(R) || e(U) ? t : t.map((t) => e(yn, t.path) ?? t);
  });
function Cn({ cwd: e, gitRoot: t, reviewSummary: n }) {
  return n?.type === `success`
    ? n.files.map((n) =>
        wn({ cwd: e, gitRoot: t, reviewDiffIsFetching: !0, reviewFile: n }),
      )
    : [];
}
function wn({
  cwd: e,
  gitRoot: t,
  reviewDiffEntry: n,
  reviewDiffError: r,
  reviewDiffIsFetching: i,
  reviewFile: a,
}) {
  let o = _(a.path),
    s = A({ gitRoot: t, gitPath: o }),
    c = n?.type === `success` ? n.diff : ``,
    l = c.trim().length > 0,
    u = l ? (pe(c)[0] ?? null) : null,
    d = `loading`;
  return (
    u == null
      ? n?.type === `success`
        ? (d = `loaded`)
        : !i && (r != null || n?.type === `error` || l) && (d = `error`)
      : (d = `loaded`),
    {
      displayPath: Re({ cwd: e, path: s }),
      diff: u,
      diffRenderKey:
        n?.type === `success` ? `${c.length}:${ve(c)}` : a.revision,
      diffLoadStatus: d,
      gitPath: o,
      path: s,
      summary: a,
    }
  );
}
function Tn(e, t) {
  return (
    e?.map((e) => {
      let n = _(e.metadata.name),
        r = A({ gitRoot: t, gitPath: n });
      return {
        displayPath: n,
        diff: e,
        diffRenderKey: ve(e.metadata.cacheKey ?? r),
        diffLoadStatus: `loaded`,
        gitPath: n,
        path: r,
        summary: null,
      };
    }) ?? []
  );
}
function En(e) {
  return e.reduce(
    (e, t) =>
      e +
      (t.summary?.additions ?? t.diff?.additions ?? 0) +
      (t.summary?.deletions ?? t.diff?.deletions ?? 0),
    0,
  );
}
function Dn({ diffBytes: e, fileEntries: t }) {
  return e ?? t.reduce((e, t) => e + (t.diff?.changedBytes ?? 0), 0);
}
var On = 24;
function kn(e, t, n) {
  let r = Math.max(0, t - On),
    i = Math.min(e.length, n + On);
  return { before: e.slice(r, t), match: e.slice(t, n), after: e.slice(n, i) };
}
function An(e, t, n) {
  let r = t.toLowerCase(),
    i = e.toLowerCase(),
    a = [],
    o = 0,
    s = !1,
    c = 0;
  for (; c < i.length; ) {
    let e = i.indexOf(r, c);
    if (e === -1) break;
    let l = e + t.length;
    ((o += 1), a.length < n ? a.push({ start: e, end: l }) : (s = !0), (c = l));
  }
  return { offsets: a, totalMatches: o, isCapped: s };
}
function jn(e, t) {
  return e == null || t == null ? null : (e.matches[t] ?? null);
}
function Mn(e, t) {
  let { query: n, routeContextId: r, stateDomain: i, result: a } = e;
  return n.length === 0 ||
    i !== t ||
    a == null ||
    a.domain !== t ||
    a.contextId !== r
    ? null
    : a;
}
var Nn = 150,
  W = x(S, null),
  Pn = x(S, `conversation`),
  Fn = v(S, ({ get: e }) =>
    e(ue) === `right-panel` && e(de) && e(fe.activeTab$)?.tabId === `diff`
      ? `diff`
      : e(Pn),
  ),
  G = x(S, !1),
  K = x(S, `conversation`),
  q = x(S, ``),
  J = x(S, null),
  Y = x(S, !1),
  X = x(S, null),
  In = x(S, null),
  Ln = v(S, ({ get: e }) => e(q).trim().length > 0),
  Rn = v(S, ({ get: e }) =>
    Mn(
      {
        query: e(q).trim(),
        routeContextId: e(J)?.contextId ?? `unavailable`,
        stateDomain: e(K),
        result: e(J),
      },
      `conversation`,
    ),
  ),
  Z = v(S, ({ get: e }) =>
    Mn(
      {
        query: e(q).trim(),
        routeContextId: e(J)?.contextId ?? `unavailable`,
        stateDomain: e(K),
        result: e(J),
      },
      `diff`,
    ),
  ),
  zn = v(S, ({ get: e }) => jn(e(J), e(X)));
function Bn(e) {
  e.set(G, !0);
}
function Vn(e, t) {
  e.set(Pn, t);
}
function Hn(e) {
  (Zn(e),
    e.set(G, !1),
    e.set(q, ``),
    e.set(J, null),
    e.set(Y, !1),
    e.set(X, null));
}
function Un(e, t) {
  (Zn(e), e.set(K, t), e.set(J, null), e.set(Y, !1), e.set(X, null));
}
function Wn(e, t) {
  if (t.trim().length === 0) {
    (Zn(e), e.set(q, t), e.set(J, null), e.set(Y, !1), e.set(X, null));
    return;
  }
  (e.set(q, t), e.set(Y, !0));
}
function Gn(e, t) {
  let n = e.get(J);
  if (t == null || n == null || n.matches.length === 0) {
    e.set(X, null);
    return;
  }
  let r = Xn(t, n.matches.length);
  if (e.get(X) === r) {
    e.get(W)?.ensureVisibleActiveMatch();
    return;
  }
  e.set(X, r);
}
function Kn(e) {
  let t = e.get(J);
  t == null || t.matches.length === 0 || Gn(e, (e.get(X) ?? -1) + 1);
}
function qn(e) {
  let t = e.get(J);
  t == null || t.matches.length === 0 || Gn(e, (e.get(X) ?? 0) - 1);
}
function Jn(e, t) {
  let n = e.get(q).trim();
  if (n.length === 0) return;
  let r = e.get(J);
  if (!(r != null && r.query === n && r.domain === e.get(K))) {
    e.get(W)?.runSearch({ selectFirstMatch: !0 });
    return;
  }
  if (t?.shift) {
    qn(e);
    return;
  }
  Kn(e);
}
function Yn(e, t = { conversationSource: null, diffSource: null }) {
  let n = 1,
    r = 0,
    i = null,
    a = null,
    o = null,
    s = !1,
    c = null,
    l = () => {
      o != null && (window.clearTimeout(o), (o = null));
    },
    u = () => {
      (a?.abort(), (a = null));
    },
    d = () => {
      (i?.abort(), (i = null), (r += 1), u());
    },
    f = async ({ selectFirstMatch: a }) => {
      if (s) return;
      l();
      let o = e.get(q).trim();
      if (o.length === 0) {
        e.set(Y, !1);
        return;
      }
      i?.abort();
      let c = new AbortController();
      ((i = c), (r += 1));
      let u = r,
        d = e.get(K),
        f = er({
          domain: d,
          conversationSource: t.conversationSource,
          diffSource: t.diffSource,
        }),
        p = f?.contextId ?? `unavailable`;
      e.set(Y, !0);
      try {
        let t = { domain: d, contextId: p, query: o },
          i;
        if (f == null) ((i = $n(t, n)), (n += 1));
        else {
          let e = n;
          ((n += 1),
            (i = { ...(await f.search(t, { signal: c.signal })), runId: e }));
        }
        if (u !== r || s) return;
        let l = e.get(X),
          m = l != null && l >= 0 && l < i.matches.length,
          h =
            a && i.matches.length > 0
              ? 0
              : i.matches.length > 0
                ? m
                  ? l
                  : 0
                : null;
        (e.set(J, i), e.set(X, h), e.set(Y, !1));
      } catch {
        if (c.signal.aborted || u !== r || s) return;
        (e.set(J, null), e.set(X, null), e.set(Y, !1));
      }
    },
    p = async () => {
      let n = e.get(J),
        r = e.get(X);
      if (n == null || r == null) return;
      u();
      let i = new AbortController();
      a = i;
      try {
        await Qn(t, n, r, i.signal);
      } finally {
        a === i && (a = null);
      }
    },
    m = {
      clearDebouncedSearch: l,
      ensureVisibleActiveMatch: p,
      preserveScrollBeforeResultClear: () => {
        u();
        let n = e.get(J),
          r = jn(n, e.get(X));
        (n == null
          ? null
          : er({
              domain: n.domain,
              conversationSource: t.conversationSource,
              diffSource: t.diffSource,
            })
        )?.preserveScrollBeforeResultClear?.(r?.location ?? null);
      },
      runSearch: f,
    };
  e.set(W, m);
  let h = () => {
      (l(), d());
      let t = e.get(G),
        n = e.get(q).trim();
      if (!t || n.length === 0) {
        e.set(Y, !1);
        return;
      }
      o = window.setTimeout(() => {
        f({ selectFirstMatch: !1 });
      }, Nn);
    },
    g = e.watch((e) => {
      (e.get(G), e.get(q), e.get(K), h());
    }),
    _ = e.watch((e) => {
      let t = e.get(J),
        n = e.get(X);
      if (t == null || n == null) {
        c = null;
        return;
      }
      let r = `${t.runId}:${n}`;
      r !== c && ((c = r), p());
    });
  return () => {
    ((s = !0),
      e.get(W) === m && e.set(W, null),
      g(),
      _(),
      l(),
      i?.abort(),
      u());
  };
}
function Xn(e, t) {
  if (t <= 0) return 0;
  let n = e % t;
  return n < 0 ? n + t : n;
}
function Zn(e) {
  e.get(J) != null && e.get(W)?.preserveScrollBeforeResultClear();
}
async function Qn(e, t, n, r) {
  let i = t.matches[n];
  if (i == null) return;
  let a = er({
    domain: i.location.domain,
    conversationSource: e.conversationSource,
    diffSource: e.diffSource,
  });
  a != null && (await a.ensureVisible(i.location, { signal: r }));
}
function $n(e, t) {
  return {
    runId: t,
    domain: e.domain,
    contextId: e.contextId,
    query: e.query,
    matches: [],
    totalMatches: 0,
    isCapped: !1,
  };
}
function er({ domain: e, conversationSource: t, diffSource: n }) {
  switch (e) {
    case `conversation`:
      return t;
    case `diff`:
      return n;
  }
}
function tr(e) {
  if (e == null || e.domain !== `diff`)
    return { active: !1, totalMatches: 0, matchingPaths: [] };
  let t = new Set();
  for (let n of e.matches) {
    let e = n.location;
    e.domain === `diff` && t.add(e.path);
  }
  return {
    active: e.query.length > 0,
    totalMatches: e.totalMatches,
    matchingPaths: Array.from(t),
  };
}
var nr = v(S, ({ get: e }) => tr(e(Z))),
  rr = v(S, ({ get: e }) => jn(e(Z), e(X))),
  Q = 20,
  ir = x(S, void 0),
  $ = x(S, ``),
  ar = x(S, { count: Q, key: `` }),
  or = v(S, ({ get: e }) => vr(e(H), e($))),
  sr = v(S, ({ get: e }) => {
    let t = e(or),
      n = e(nr);
    if (!n.active) return t;
    if (n.matchingPaths.length === 0) return [];
    let r = new Set(n.matchingPaths);
    return t.filter((e) => r.has(e.path));
  }),
  cr = v(S, ({ get: e }) => e(U) && e(nr).active && e(sr).length > 0),
  lr = v(S, ({ get: e }) => {
    if (!e(cr)) return Q;
    let t = e(ar),
      n = e(Z),
      r = e($).trim().toLowerCase(),
      i = `${n?.query ?? ``}|${r}|${e(nr).active}`;
    return t.key === i ? t.count : Q;
  }),
  ur = v(S, ({ get: e }) => {
    let t = e(sr);
    if (!e(cr)) return t;
    let n = e(lr),
      r = e(ir);
    if (r != null) {
      let e = t.findIndex((e) => e.path === r);
      e >= n && (n = Math.ceil((e + 1) / Q) * Q);
    }
    return t.slice(0, n);
  }),
  dr = v(S, ({ get: e }) => e(sr)),
  fr = v(S, ({ get: e }) => {
    let t = e(ir),
      n = e(U) ? e(dr) : e(or);
    if (!e(U)) return t;
    if (n.length !== 0)
      return t != null && n.some((e) => e.path === t) ? t : n[0]?.path;
  }),
  pr = v(S, ({ get: e }) => e(sr).length);
function mr(e, t) {
  e.set(ir, t);
}
function hr(e, t) {
  (mr(e, t),
    Wn(e, ``),
    gr(e, ``),
    requestAnimationFrame(() => {
      yr(t)?.scrollIntoView({ behavior: `auto`, block: `start` });
    }));
}
function gr(e, t) {
  e.set($, t);
}
function _r(e) {
  let t = e.get(pr),
    n = e.get(Z),
    r = e.get($).trim().toLowerCase(),
    i = `${n?.query ?? ``}|${r}|${e.get(nr).active}`,
    a = Math.min(t, Math.max(Q, e.get(ur).length + Q));
  e.set(ar, (e) => (e.key === i && e.count === a ? e : { count: a, key: i }));
}
function vr(e, t) {
  let n = t.trim().toLowerCase();
  return n.length === 0
    ? e
    : e.filter((e) => e.displayPath.toLowerCase().includes(n));
}
function yr(e) {
  for (let t of document.querySelectorAll(be.reviewFile))
    if (t.getAttribute(`data-review-path`) === e) return t;
  return null;
}
export {
  ln as $,
  Un as A,
  we as At,
  Xt as B,
  G as C,
  Mt as Ct,
  Bn as D,
  mt as Dt,
  Kn as E,
  R as Et,
  An as F,
  sn as G,
  on as H,
  Sn as I,
  gn as J,
  un as K,
  H as L,
  Yn as M,
  D as Mt,
  Jn as N,
  O as Nt,
  qn as O,
  Ft as Ot,
  kn as P,
  cn as Q,
  yn as R,
  Y as S,
  Pt as St,
  J as T,
  pt as Tt,
  pn as U,
  Yt as V,
  mn as W,
  hn as X,
  dn as Y,
  fn as Z,
  zn as _,
  Qe as _t,
  $ as a,
  kt as at,
  K as b,
  I as bt,
  cr as c,
  _t as ct,
  rr as d,
  Ct as dt,
  rn as et,
  nr as f,
  jt as ft,
  X as g,
  F as gt,
  Z as h,
  it as ht,
  fr as i,
  yt as it,
  Wn as j,
  Ce as jt,
  Vn as k,
  A as kt,
  ur as l,
  bt as lt,
  Rn as m,
  L as mt,
  hr as n,
  P as nt,
  dr as o,
  N as ot,
  Hn as p,
  xt as pt,
  vn as q,
  mr as r,
  nt as rt,
  pr as s,
  vt as st,
  _r as t,
  V as tt,
  gr as u,
  B as ut,
  Fn as v,
  rt as vt,
  q as w,
  Nt as wt,
  Ln as x,
  z as xt,
  In as y,
  M as yt,
  U as z,
};
//# sourceMappingURL=review-navigation-model-DMRVNxCn.js.map
