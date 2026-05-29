import { s as e } from "./chunk-Bj-mKKzh.js";
import { S as t, zn as n } from "./src-C.js";
import {
  $n as r,
  Bn as i,
  Hn as a,
  Nn as o,
  Qn as s,
  Un as c,
  ir as l,
  pt as u,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as d, t as f } from "./jsx-runtime.js";
import {
  G as p,
  L as m,
  S as h,
  U as g,
  X as _,
  Y as v,
  _ as y,
  a as b,
  m as x,
  nt as S,
  wt as ee,
} from "./setting-storage.js";
import { t as C } from "./use-debounced-value-BtOJx-Vp.js";
import { r as w } from "./toast-signal.js";
import { t as te } from "./button.js";
import { n as T } from "./git-current-branch-query.js";
import { a as E, i as ne, l as re, n as ie, r as ae } from "./dialog-layout.js";
import { r as D, t as O } from "./dropdown-DtQxMoJw.js";
import { t as oe } from "./plus.js";
import { t as k } from "./use-git-default-branch-gyzefibF.js";
import { n as A } from "./diff-stats.js";
import {
  H as j,
  P as M,
  V as N,
  a as P,
  i as F,
  n as se,
  t as I,
} from "./git-branch-picker-dropdown-content-116YOJSU.js";
var L = S(
    h,
    ({ cwd: e, enabled: t, hostConfig: n, operationSource: i }) =>
      r(e, s(n), n, i, { enabled: t }),
    { key: z },
  ),
  R = S(
    h,
    (
      { cwd: e, enabled: t, hostConfig: n, operationSource: r, query: i },
      { get: a },
    ) => {
      let c = a(L, {
        cwd: e,
        enabled: t,
        hostConfig: n,
        operationSource: r,
      }).data;
      return o(
        `search-branches`,
        c,
        c == null
          ? null
          : { root: c.root, operationSource: r, query: i, limit: 20 },
        s(n),
        n,
        { enabled: t, select: (e) => e.branches, staleTime: y.FIVE_SECONDS },
      );
    },
    { key: B },
  );
function z({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) {
  return JSON.stringify({
    cwd: e ?? null,
    enabled: t,
    hostConfig: n,
    operationSource: r,
  });
}
function B({
  cwd: e,
  enabled: t,
  hostConfig: n,
  operationSource: r,
  query: i,
}) {
  return JSON.stringify({
    cwd: e ?? null,
    enabled: t,
    hostConfig: n,
    operationSource: r,
    query: i,
  });
}
var ce = ee();
function le(e, t, r, i) {
  let o = (0, ce.c)(13),
    s;
  o[0] === i
    ? (s = o[1])
    : ((s = i === void 0 ? {} : i), (o[0] = i), (o[1] = s));
  let c, l;
  o[2] === s
    ? ((c = o[3]), (l = o[4]))
    : (({ staleTime: l, ...c } = s), (o[2] = s), (o[3] = c), (o[4] = l));
  let u = String(e),
    d;
  o[5] === u ? (d = o[6]) : ((d = n(u)), (o[5] = u), (o[6] = d));
  let f;
  o[7] !== r || o[8] !== d
    ? ((f = { cwd: d, operationSource: r }), (o[7] = r), (o[8] = d), (o[9] = f))
    : (f = o[9]);
  let p = l ?? y.FIVE_SECONDS,
    m;
  return (
    o[10] !== c || o[11] !== p
      ? ((m = { staleTime: p, ...c }), (o[10] = c), (o[11] = p), (o[12] = m))
      : (m = o[12]),
    a(e, t, `status-summary`, f, r, m)
  );
}
function V(e, t, n, r) {
  let i = (0, ce.c)(4),
    o;
  i[0] === n
    ? (o = i[1])
    : ((o = (e) => {
        let { root: t } = e;
        return { operationSource: n, root: t, limit: 100 };
      }),
      (i[0] = n),
      (i[1] = o));
  let s;
  return (
    i[2] === r
      ? (s = i[3])
      : ((s = { select: H, staleTime: y.FIVE_SECONDS, ...r }),
        (i[2] = r),
        (i[3] = s)),
    a(e, t, `recent-branches`, o, n, s)
  );
}
function H(e) {
  return e.branches;
}
function ue(e, t, n, r) {
  let a = (0, ce.c)(23),
    o = m(),
    { data: l } = c(e, t, n),
    u;
  a[0] === t ? (u = a[1]) : ((u = s(t)), (a[0] = t), (a[1] = u));
  let d = u,
    f = e ?? null,
    p;
  a[2] !== t.id || a[3] !== f
    ? ((p = [`vscode`, `git-checkout-branch`, f, t.id]),
      (a[2] = t.id),
      (a[3] = f),
      (a[4] = p))
    : (p = a[4]);
  let h;
  a[5] !== l || a[6] !== d || a[7] !== r || a[8] !== o
    ? ((h = async (e, t, n, a, s) => {
        (l &&
          e?.status === `success` &&
          i(
            o,
            { commonDir: l.commonDir, root: l.root },
            { changeType: `head`, hostKey: d },
          ),
          r?.onSettled && (await r.onSettled(e, t, n, a, s)));
      }),
      (a[5] = l),
      (a[6] = d),
      (a[7] = r),
      (a[8] = o),
      (a[9] = h))
    : (h = a[9]);
  let g;
  a[10] !== n || a[11] !== r || a[12] !== p || a[13] !== h
    ? ((g = { source: n, mutationKey: p, ...r, onSettled: h }),
      (a[10] = n),
      (a[11] = r),
      (a[12] = p),
      (a[13] = h),
      (a[14] = g))
    : (g = a[14]);
  let _ = x(`git-checkout-branch`, g),
    v,
    y;
  a[15] !== t.id || a[16] !== _
    ? ((v = (e, n) => {
        _.mutate({ ...e, hostId: t.id }, n);
      }),
      (y = (e, n) => _.mutateAsync({ ...e, hostId: t.id }, n)),
      (a[15] = t.id),
      (a[16] = _),
      (a[17] = v),
      (a[18] = y))
    : ((v = a[17]), (y = a[18]));
  let b;
  return (
    a[19] !== _ || a[20] !== v || a[21] !== y
      ? ((b = { ..._, mutate: v, mutateAsync: y }),
        (a[19] = _),
        (a[20] = v),
        (a[21] = y),
        (a[22] = b))
      : (b = a[22]),
    b
  );
}
function U(e, t, n, r) {
  let a = (0, ce.c)(23),
    o = m(),
    { data: l } = c(e, t, n),
    u;
  a[0] === t ? (u = a[1]) : ((u = s(t)), (a[0] = t), (a[1] = u));
  let d = u,
    f = e ?? null,
    p;
  a[2] !== t.id || a[3] !== f
    ? ((p = [`vscode`, `git-create-branch`, f, t.id]),
      (a[2] = t.id),
      (a[3] = f),
      (a[4] = p))
    : (p = a[4]);
  let h;
  a[5] !== l || a[6] !== d || a[7] !== r || a[8] !== o
    ? ((h = async (e, t, n, a, s) => {
        (l &&
          i(o, l, {
            changeType: n?.mode === `synced` ? `synced-branch` : `head`,
            hostKey: d,
          }),
          r?.onSettled && (await r.onSettled(e, t, n, a, s)));
      }),
      (a[5] = l),
      (a[6] = d),
      (a[7] = r),
      (a[8] = o),
      (a[9] = h))
    : (h = a[9]);
  let g;
  a[10] !== n || a[11] !== r || a[12] !== p || a[13] !== h
    ? ((g = { source: n, mutationKey: p, ...r, onSettled: h }),
      (a[10] = n),
      (a[11] = r),
      (a[12] = p),
      (a[13] = h),
      (a[14] = g))
    : (g = a[14]);
  let _ = x(`git-create-branch`, g),
    v,
    y;
  a[15] !== t.id || a[16] !== _
    ? ((v = (e, n) => {
        _.mutate({ ...e, hostId: t.id }, n);
      }),
      (y = (e, n) => _.mutateAsync({ ...e, hostId: t.id }, n)),
      (a[15] = t.id),
      (a[16] = _),
      (a[17] = v),
      (a[18] = y))
    : ((v = a[17]), (y = a[18]));
  let b;
  return (
    a[19] !== _ || a[20] !== v || a[21] !== y
      ? ((b = { ..._, mutate: v, mutateAsync: y }),
        (a[19] = _),
        (a[20] = v),
        (a[21] = y),
        (a[22] = b))
      : (b = a[22]),
    b
  );
}
var W = new Set([`~`, `^`, `:`, `?`, `*`, `[`, `]`, `\\`]);
function de(e) {
  return Array.from(e)
    .filter((e) => !/\s/u.test(e) && !W.has(e))
    .join(``);
}
var G = e(d(), 1),
  K = f(),
  q = `composer_branch_switcher`;
function J(e) {
  let t = (0, ce.c)(86),
    {
      gitRoot: r,
      hostConfig: i,
      localConversationId: a,
      shouldShow: o,
      side: s,
      align: c,
      renderStaticBranch: d,
      renderControl: f,
      onOpenChange: m,
    } = e,
    g = s === void 0 ? `top` : s,
    y = c === void 0 ? `end` : c,
    b = _(h),
    x = p(),
    [S, ee] = (0, G.useState)(!1),
    [C, te] = (0, G.useState)(!1),
    [E, ne] = (0, G.useState)(!1),
    [re, ie] = (0, G.useState)(!1),
    [ae, D] = (0, G.useState)(!1),
    [oe, k] = (0, G.useState)(0),
    [A, j] = (0, G.useState)(null),
    N;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = []), (t[0] = N))
    : (N = t[0]);
  let [P, se] = (0, G.useState)(N),
    [I, L] = (0, G.useState)(`idle`),
    R;
  t[1] !== r || t[2] !== i || t[3] !== o
    ? ((R = {
        cwd: r,
        enabled: o,
        hostConfig: i,
        operationSource: q,
        refetchOnWindowFocus: `always`,
        staleTime: null,
      }),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = R))
    : (R = t[4]);
  let z = v(T, R),
    B = z.data?.trim() ?? ``,
    le = o && B.length > 0,
    V = v(u, a),
    H = ae || I !== `idle`,
    W = ue(r, i, q),
    de = U(r, i, q),
    J;
  t[5] === r
    ? (J = t[6])
    : ((J = r == null ? null : n(r)), (t[5] = r), (t[6] = J));
  let me = J,
    Z;
  t[7] !== me || t[8] !== i
    ? ((Z = me == null ? null : { cwd: me, hostId: i.id }),
      (t[7] = me),
      (t[8] = i),
      (t[9] = Z))
    : (Z = t[9]);
  let he = Z,
    Q = W.isPending || de.isPending,
    ge = x.formatMessage({
      id: `composer.footer.branchSwitch.tooltip`,
      defaultMessage: `Switch branch`,
      description: `Tooltip shown for controls that switch git branches`,
    }),
    _e;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = () => {
        ee(!1);
      }),
      (t[10] = _e))
    : (_e = t[10]);
  let $ = _e,
    ve;
  t[11] !== x || t[12] !== b
    ? ((ve = (e) => {
        b.get(w).danger(
          x.formatMessage(
            {
              id: `composer.footer.branchSwitch.checkoutError`,
              defaultMessage: `Failed to switch branch: {message}`,
              description: `Toast shown when switching local branches from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[11] = x),
      (t[12] = b),
      (t[13] = ve))
    : (ve = t[13]);
  let ye = ve,
    be;
  t[14] !== x || t[15] !== b
    ? ((be = (e) => {
        b.get(w).danger(
          x.formatMessage(
            {
              id: `composer.footer.branchSwitch.createBranchError`,
              defaultMessage: `Failed to create branch: {message}`,
              description: `Toast shown when creating a branch from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[14] = x),
      (t[15] = b),
      (t[16] = be))
    : (be = t[16]);
  let xe = be,
    Se;
  t[17] === $
    ? (Se = t[18])
    : ((Se = (e) => {
        let { errorType: t, conflictedPaths: n, nextAction: r } = e;
        return t === `blocked-by-working-tree-changes`
          ? (se(n ?? []), j(r), $(), ie(!1), ne(!0), !0)
          : !1;
      }),
      (t[17] = $),
      (t[18] = Se));
  let Ce = Se,
    we = async (e) => {
      if (!(Q || r == null)) {
        if (e === B) {
          $();
          return;
        }
        try {
          let t = await W.mutateAsync({ cwd: r, branch: e });
          if (t.status === `error`) {
            if (
              Ce({
                errorType: t.errorType,
                conflictedPaths: t.conflictedPaths,
                nextAction: { type: `checkout`, branch: e },
              })
            )
              return;
            ye(t.error);
            return;
          }
          (a != null && l(a, e), $());
        } catch (e) {
          let t = e;
          ye(t instanceof Error ? t.message : String(t));
        }
      }
    },
    Te;
  t[19] !== W ||
  t[20] !== de ||
  t[21] !== r ||
  t[22] !== Q ||
  t[23] !== a ||
  t[24] !== Ce ||
  t[25] !== ye ||
  t[26] !== xe
    ? ((Te = async (e) => {
        if (!(Q || r == null))
          try {
            let t = await de.mutateAsync({
              cwd: r,
              branch: e,
              mode: `worktree`,
              failIfExists: !0,
            });
            if (t.status === `error`) {
              xe(t.error);
              return;
            }
            let n = await W.mutateAsync({ cwd: r, branch: e });
            if (n.status === `error`) {
              if (
                Ce({
                  errorType: n.errorType,
                  conflictedPaths: n.conflictedPaths,
                  nextAction: { type: `create-and-checkout`, branch: e },
                })
              )
                return;
              (ye(n.error), ie(!1));
              return;
            }
            (a != null && l(a, e), ie(!1));
          } catch (e) {
            let t = e;
            xe(t instanceof Error ? t.message : String(t));
          }
      }),
      (t[19] = W),
      (t[20] = de),
      (t[21] = r),
      (t[22] = Q),
      (t[23] = a),
      (t[24] = Ce),
      (t[25] = ye),
      (t[26] = xe),
      (t[27] = Te))
    : (Te = t[27]);
  let Ee = Te,
    De;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = () => {
        (D(!1), L(`idle`), se([]), j(null));
      }),
      (t[28] = De))
    : (De = t[28]);
  let Oe = De,
    ke;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (e) => {
        (ne(e), e || (se([]), j(null)));
      }),
      (t[29] = ke))
    : (ke = t[29]);
  let Ae = ke,
    je;
  t[30] !== he || t[31] !== b
    ? ((je = () => {
        he != null && (b.set(M, he, ``), L(`idle`), k(Y), ne(!1), D(!0));
      }),
      (t[30] = he),
      (t[31] = b),
      (t[32] = je))
    : (je = t[32]);
  let Me = je,
    Ne;
  t[33] !== we || t[34] !== Ee || t[35] !== Oe || t[36] !== A
    ? ((Ne = (e) => {
        if (e === `success` && A != null) {
          let e = A;
          if ((Oe(), e.type === `checkout`)) {
            we(e.branch);
            return;
          }
          Ee(e.branch);
          return;
        }
        L(e);
      }),
      (t[33] = we),
      (t[34] = Ee),
      (t[35] = Oe),
      (t[36] = A),
      (t[37] = Ne))
    : (Ne = t[37]);
  let Pe = Ne;
  if (!le)
    return o && z.isSuccess
      ? f({
          currentBranch: null,
          disabled: !1,
          isPending: !1,
          switchTooltipText: ge,
        })
      : null;
  if (r == null) return d?.({ currentBranch: B }) ?? null;
  let Fe = O,
    Ie;
  t[38] === m
    ? (Ie = t[39])
    : ((Ie = (e) => {
        (e && te(!0), ee(e), m?.(e));
      }),
      (t[38] = m),
      (t[39] = Ie));
  let Le = f({
      currentBranch: B,
      disabled: Q,
      isPending: Q,
      switchTooltipText: ge,
    }),
    Re;
  t[40] !== we ||
  t[41] !== $ ||
  t[42] !== B ||
  t[43] !== r ||
  t[44] !== C ||
  t[45] !== i ||
  t[46] !== Q ||
  t[47] !== S
    ? ((Re = C
        ? (0, K.jsx)(X, {
            currentBranch: B,
            gitRoot: r,
            hostConfig: i,
            isOpen: S,
            disabled: Q,
            onCheckout: we,
            onClose: $,
            onOpenCreate: () => {
              ($(), ie(!0));
            },
          })
        : null),
      (t[40] = we),
      (t[41] = $),
      (t[42] = B),
      (t[43] = r),
      (t[44] = C),
      (t[45] = i),
      (t[46] = Q),
      (t[47] = S),
      (t[48] = Re))
    : (Re = t[48]);
  let ze;
  t[49] !== Fe ||
  t[50] !== y ||
  t[51] !== S ||
  t[52] !== g ||
  t[53] !== Ie ||
  t[54] !== Le ||
  t[55] !== Re
    ? ((ze = (0, K.jsx)(Fe, {
        side: g,
        open: S,
        align: y,
        onOpenChange: Ie,
        triggerButton: Le,
        children: Re,
      })),
      (t[49] = Fe),
      (t[50] = y),
      (t[51] = S),
      (t[52] = g),
      (t[53] = Ie),
      (t[54] = Le),
      (t[55] = Re),
      (t[56] = ze))
    : (ze = t[56]);
  let Be;
  t[57] !== V ||
  t[58] !== Ee ||
  t[59] !== r ||
  t[60] !== i ||
  t[61] !== re ||
  t[62] !== Q
    ? ((Be = re
        ? (0, K.jsx)(fe, {
            open: re,
            onOpenChange: ie,
            conversationTitle: V,
            gitRoot: r,
            hostConfig: i,
            isPending: Q,
            onSubmit: Ee,
          })
        : null),
      (t[57] = V),
      (t[58] = Ee),
      (t[59] = r),
      (t[60] = i),
      (t[61] = re),
      (t[62] = Q),
      (t[63] = Be))
    : (Be = t[63]);
  let Ve;
  t[64] !== P ||
  t[65] !== r ||
  t[66] !== Me ||
  t[67] !== Ae ||
  t[68] !== i ||
  t[69] !== E ||
  t[70] !== A?.branch
    ? ((Ve =
        E && r != null
          ? (0, K.jsx)(pe, {
              open: E,
              onOpenChange: Ae,
              conflictFiles: P,
              gitRoot: r,
              hostConfig: i,
              targetBranch: A?.branch ?? null,
              onContinue: Me,
            })
          : null),
      (t[64] = P),
      (t[65] = r),
      (t[66] = Me),
      (t[67] = Ae),
      (t[68] = i),
      (t[69] = E),
      (t[70] = A?.branch),
      (t[71] = Ve))
    : (Ve = t[71]);
  let He;
  t[72] !== oe ||
  t[73] !== me ||
  t[74] !== Oe ||
  t[75] !== Pe ||
  t[76] !== i ||
  t[77] !== H ||
  t[78] !== ae ||
  t[79] !== a
    ? ((He =
        H && me != null
          ? (0, K.jsx)(
              F,
              {
                open: ae,
                onOpenChange: D,
                conversationId: a,
                cwd: me,
                hostConfig: i,
                onStatusChange: Pe,
                onRequestReset: Oe,
              },
              oe,
            )
          : null),
      (t[72] = oe),
      (t[73] = me),
      (t[74] = Oe),
      (t[75] = Pe),
      (t[76] = i),
      (t[77] = H),
      (t[78] = ae),
      (t[79] = a),
      (t[80] = He))
    : (He = t[80]);
  let Ue;
  return (
    t[81] !== ze || t[82] !== Be || t[83] !== Ve || t[84] !== He
      ? ((Ue = (0, K.jsxs)(K.Fragment, { children: [ze, Be, Ve, He] })),
        (t[81] = ze),
        (t[82] = Be),
        (t[83] = Ve),
        (t[84] = He),
        (t[85] = Ue))
      : (Ue = t[85]),
    Ue
  );
}
function Y(e) {
  return e + 1;
}
function X(e) {
  let t = (0, ce.c)(53),
    {
      currentBranch: n,
      gitRoot: r,
      hostConfig: i,
      isOpen: a,
      disabled: o,
      onCheckout: s,
      onClose: c,
      onOpenCreate: l,
    } = e,
    u = p(),
    [d, f] = (0, G.useState)(``),
    m = C(d, 200),
    { data: h, refetch: _ } = le(r, i, q),
    y;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { enabled: !0 }), (t[0] = y))
    : (y = t[0]);
  let {
      data: b,
      isLoading: x,
      isFetching: S,
      isError: ee,
      refetch: w,
    } = V(r, i, q, y),
    te = b === void 0 ? [] : b,
    T;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { enabled: !0 }), (t[1] = T))
    : (T = t[1]);
  let { data: E, refetch: ne } = k(r, i, q, T),
    re,
    ie;
  (t[2] !== a || t[3] !== w || t[4] !== ne || t[5] !== _
    ? ((re = () => {
        a && Promise.all([w(), ne(), _()]);
      }),
      (ie = [a, w, ne, _]),
      (t[2] = a),
      (t[3] = w),
      (t[4] = ne),
      (t[5] = _),
      (t[6] = re),
      (t[7] = ie))
    : ((re = t[6]), (ie = t[7])),
    (0, G.useEffect)(re, ie));
  let ae;
  t[8] === d ? (ae = t[9]) : ((ae = d.trim()), (t[8] = d), (t[9] = ae));
  let O = ae,
    A;
  t[10] === m ? (A = t[11]) : ((A = m.trim()), (t[10] = m), (t[11] = A));
  let j = A,
    M = O !== j,
    N = j.length > 0,
    P;
  t[12] !== r || t[13] !== i || t[14] !== j || t[15] !== N
    ? ((P = {
        cwd: r,
        hostConfig: i,
        operationSource: q,
        query: j,
        enabled: N,
      }),
      (t[12] = r),
      (t[13] = i),
      (t[14] = j),
      (t[15] = N),
      (t[16] = P))
    : (P = t[16]);
  let { data: F, isFetching: se, isError: L, refetch: z } = v(R, P),
    B = me({ branches: te, currentBranch: n, defaultBranch: E }),
    H = !x && !S && !ee && te.length === 0,
    ue = he(h),
    U;
  t[17] !== H || t[18] !== u
    ? ((U = H
        ? u.formatMessage({
            id: `composer.footer.branchSwitch.createAndCheckout.disabledTooltip`,
            defaultMessage: `Commit changes to create and checkout a new branch`,
            description: `Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits`,
          })
        : void 0),
      (t[17] = H),
      (t[18] = u),
      (t[19] = U))
    : (U = t[19]);
  let W = U,
    de = x || (S && B.length === 0),
    J = M || se,
    Y;
  t[20] === w
    ? (Y = t[21])
    : ((Y = () => {
        w();
      }),
      (t[20] = w),
      (t[21] = Y));
  let X;
  t[22] === z
    ? (X = t[23])
    : ((X = () => {
        z();
      }),
      (t[22] = z),
      (t[23] = X));
  let fe;
  t[24] !== n || t[25] !== ue
    ? ((fe = (e) =>
        e === n && ue > 0
          ? (0, K.jsx)(`span`, {
              className: `ml-5 inline-flex items-center gap-1 text-xs text-token-input-placeholder-foreground`,
              children: (0, K.jsx)(g, {
                id: `composer.footer.branchSwitch.uncommittedSummaryPrefix`,
                defaultMessage: `Uncommitted: {fileCount, plural, one {# file} other {# files}}`,
                description: `Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes`,
                values: { fileCount: ue },
              }),
            })
          : null),
      (t[24] = n),
      (t[25] = ue),
      (t[26] = fe))
    : (fe = t[26]);
  let pe;
  t[27] !== n ||
  t[28] !== o ||
  t[29] !== ee ||
  t[30] !== L ||
  t[31] !== s ||
  t[32] !== c ||
  t[33] !== B ||
  t[34] !== d ||
  t[35] !== F ||
  t[36] !== de ||
  t[37] !== J ||
  t[38] !== Y ||
  t[39] !== X ||
  t[40] !== fe
    ? ((pe = (0, K.jsx)(I, {
        branches: B,
        selectedBranch: n,
        disabled: o,
        isError: ee,
        isLoading: de,
        isSearchError: L,
        isSearchLoading: J,
        onClose: c,
        onRetry: Y,
        onRetrySearch: X,
        onSearchQueryChange: f,
        onSelectBranch: s,
        renderBranchSubText: fe,
        searchedBranches: F,
        searchQuery: d,
      })),
      (t[27] = n),
      (t[28] = o),
      (t[29] = ee),
      (t[30] = L),
      (t[31] = s),
      (t[32] = c),
      (t[33] = B),
      (t[34] = d),
      (t[35] = F),
      (t[36] = de),
      (t[37] = J),
      (t[38] = Y),
      (t[39] = X),
      (t[40] = fe),
      (t[41] = pe))
    : (pe = t[41]);
  let Z;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, K.jsx)(D.Separator, {})), (t[42] = Z))
    : (Z = t[42]);
  let Q = H || o,
    ge;
  t[43] === l
    ? (ge = t[44])
    : ((ge = (e) => {
        (e.preventDefault(), l());
      }),
      (t[43] = l),
      (t[44] = ge));
  let _e;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, K.jsx)(g, {
        id: `composer.footer.branchSwitch.createAndCheckout`,
        defaultMessage: `Create and checkout new branch…`,
        description: `Dropdown action label in the composer footer branch switcher to create and checkout a new branch`,
      })),
      (t[45] = _e))
    : (_e = t[45]);
  let $;
  t[46] !== W || t[47] !== Q || t[48] !== ge
    ? (($ = (0, K.jsx)(D.Item, {
        LeftIcon: oe,
        disabled: Q,
        tooltipText: W,
        onSelect: ge,
        children: _e,
      })),
      (t[46] = W),
      (t[47] = Q),
      (t[48] = ge),
      (t[49] = $))
    : ($ = t[49]);
  let ve;
  return (
    t[50] !== pe || t[51] !== $
      ? ((ve = (0, K.jsxs)(K.Fragment, { children: [pe, Z, $] })),
        (t[50] = pe),
        (t[51] = $),
        (t[52] = ve))
      : (ve = t[52]),
    ve
  );
}
function fe(e) {
  let n = (0, ce.c)(57),
    {
      open: r,
      onOpenChange: i,
      conversationTitle: a,
      gitRoot: o,
      hostConfig: s,
      isPending: c,
      onSubmit: l,
    } = e,
    u = p(),
    d = b(t.branchPrefix),
    f;
  n[0] !== d || n[1] !== a
    ? ((f = P({ branchPrefix: d, conversationTitle: a })),
      (n[0] = d),
      (n[1] = a),
      (n[2] = f))
    : (f = n[2]);
  let [m, h] = (0, G.useState)(f),
    _ = r && o != null,
    v;
  n[3] === _ ? (v = n[4]) : ((v = { enabled: _ }), (n[3] = _), (n[4] = v));
  let { data: y, isLoading: x, isFetching: S, isError: ee } = V(o, s, q, v),
    C,
    w,
    T,
    D;
  if (n[5] !== m || n[6] !== y) {
    C = y === void 0 ? [] : y;
    let e = me({ branches: C, currentBranch: ``, defaultBranch: null });
    ((D = m.trim()),
      (w = D.endsWith(`/`)),
      (T = D.length > 0 && e.includes(D)),
      (n[5] = m),
      (n[6] = y),
      (n[7] = C),
      (n[8] = w),
      (n[9] = T),
      (n[10] = D));
  } else ((C = n[7]), (w = n[8]), (T = n[9]), (D = n[10]));
  let O = T,
    oe = !x && !S && !ee && C.length === 0,
    k = !c && !x && !S && !oe && D.length > 0 && !w && !O && o != null,
    A;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, K.jsx)(E, {
        children: (0, K.jsx)(ne, {
          title: (0, K.jsx)(g, {
            id: `composer.footer.branchSwitch.createDialog.title`,
            defaultMessage: `Create and checkout branch`,
            description: `Title for dialog that creates and checks out a new branch from the composer footer`,
          }),
        }),
      })),
      (n[11] = A))
    : (A = n[11]);
  let j;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, K.jsx)(se, {})), (n[12] = j))
    : (j = n[12]);
  let M;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (e) => {
        h(de(e.target.value));
      }),
      (n[13] = M))
    : (M = n[13]);
  let N;
  n[14] !== k || n[15] !== l || n[16] !== D
    ? ((N = (e) => {
        if (e.key === `Enter`) {
          if ((e.preventDefault(), !k)) return;
          l(D);
        }
      }),
      (n[14] = k),
      (n[15] = l),
      (n[16] = D),
      (n[17] = N))
    : (N = n[17]);
  let F;
  n[18] === u
    ? (F = n[19])
    : ((F = u.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.placeholder`,
        defaultMessage: `new-branch`,
        description: `Placeholder for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (n[18] = u),
      (n[19] = F));
  let I;
  n[20] === u
    ? (I = n[21])
    : ((I = u.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.ariaLabel`,
        defaultMessage: `Branch name`,
        description: `Aria label for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (n[20] = u),
      (n[21] = I));
  let L;
  n[22] !== m || n[23] !== F || n[24] !== I || n[25] !== N
    ? ((L = (0, K.jsx)(`input`, {
        autoFocus: !0,
        className: `h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground`,
        value: m,
        onChange: M,
        onKeyDown: N,
        placeholder: F,
        "aria-label": I,
      })),
      (n[22] = m),
      (n[23] = F),
      (n[24] = I),
      (n[25] = N),
      (n[26] = L))
    : (L = n[26]);
  let R;
  n[27] !== O || n[28] !== w || n[29] !== c
    ? ((R = w
        ? (0, K.jsx)(`p`, {
            className: `text-xs text-token-error-foreground`,
            children: (0, K.jsx)(g, {
              id: `composer.footer.branchSwitch.createDialog.trailingSlashError`,
              defaultMessage: `Branch name cannot end with “/”.`,
              description: `Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash`,
            }),
          })
        : O && !c
          ? (0, K.jsx)(`p`, {
              className: `text-xs text-token-error-foreground`,
              children: (0, K.jsx)(g, {
                id: `composer.footer.branchSwitch.createDialog.branchExistsError`,
                defaultMessage: `Branch already exists.`,
                description: `Validation message shown in the create-and-checkout branch dialog when the entered branch already exists`,
              }),
            })
          : null),
      (n[27] = O),
      (n[28] = w),
      (n[29] = c),
      (n[30] = R))
    : (R = n[30]);
  let z;
  n[31] !== L || n[32] !== R
    ? ((z = (0, K.jsxs)(E, {
        className: `flex flex-col gap-2`,
        children: [j, L, R],
      })),
      (n[31] = L),
      (n[32] = R),
      (n[33] = z))
    : (z = n[33]);
  let B;
  n[34] === i
    ? (B = n[35])
    : ((B = () => {
        i(!1);
      }),
      (n[34] = i),
      (n[35] = B));
  let le;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, K.jsx)(g, {
        id: `composer.footer.branchSwitch.createDialog.close`,
        defaultMessage: `Close`,
        description: `Secondary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (n[36] = le))
    : (le = n[36]);
  let H;
  n[37] === B
    ? (H = n[38])
    : ((H = (0, K.jsx)(te, { color: `secondary`, onClick: B, children: le })),
      (n[37] = B),
      (n[38] = H));
  let ue = !k,
    U;
  n[39] !== l || n[40] !== D
    ? ((U = () => {
        l(D);
      }),
      (n[39] = l),
      (n[40] = D),
      (n[41] = U))
    : (U = n[41]);
  let W;
  n[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, K.jsx)(g, {
        id: `composer.footer.branchSwitch.createDialog.createAndCheckout`,
        defaultMessage: `Create and checkout`,
        description: `Primary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (n[42] = W))
    : (W = n[42]);
  let J;
  n[43] !== c || n[44] !== ue || n[45] !== U
    ? ((J = (0, K.jsx)(te, {
        color: `primary`,
        disabled: ue,
        loading: c,
        onClick: U,
        children: W,
      })),
      (n[43] = c),
      (n[44] = ue),
      (n[45] = U),
      (n[46] = J))
    : (J = n[46]);
  let Y;
  n[47] !== H || n[48] !== J
    ? ((Y = (0, K.jsx)(E, { children: (0, K.jsxs)(ae, { children: [H, J] }) })),
      (n[47] = H),
      (n[48] = J),
      (n[49] = Y))
    : (Y = n[49]);
  let X;
  n[50] !== z || n[51] !== Y
    ? ((X = (0, K.jsxs)(ie, {
        "data-codex-branch-create-dialog": ``,
        children: [A, z, Y],
      })),
      (n[50] = z),
      (n[51] = Y),
      (n[52] = X))
    : (X = n[52]);
  let fe;
  return (
    n[53] !== i || n[54] !== r || n[55] !== X
      ? ((fe = (0, K.jsx)(re, {
          size: `feature`,
          open: r,
          onOpenChange: i,
          children: X,
        })),
        (n[53] = i),
        (n[54] = r),
        (n[55] = X),
        (n[56] = fe))
      : (fe = n[56]),
    fe
  );
}
function pe(e) {
  let t = (0, ce.c)(61),
    {
      open: r,
      onOpenChange: i,
      conflictFiles: o,
      gitRoot: s,
      hostConfig: c,
      targetBranch: l,
      onContinue: u,
    } = e,
    d = p(),
    { data: f } = le(s, c, q),
    m;
  t[0] === s ? (m = t[1]) : ((m = n(s)), (t[0] = s), (t[1] = m));
  let h;
  t[2] === m
    ? (h = t[3])
    : ((h = {
        cwd: m,
        includeUntrackedFiles: !1,
        operationSource: q,
        source: `staged`,
      }),
      (t[2] = m),
      (t[3] = h));
  let _;
  t[4] === r
    ? (_ = t[5])
    : ((_ = { enabled: r, staleTime: y.FIVE_SECONDS }), (t[4] = r), (t[5] = _));
  let { data: v } = a(s, c, `review-summary`, h, q, _),
    b;
  t[6] === s ? (b = t[7]) : ((b = n(s)), (t[6] = s), (t[7] = b));
  let x;
  t[8] === b
    ? (x = t[9])
    : ((x = { cwd: b, operationSource: q, source: `unstaged` }),
      (t[8] = b),
      (t[9] = x));
  let S;
  t[10] === r
    ? (S = t[11])
    : ((S = { enabled: r, staleTime: y.FIVE_SECONDS }),
      (t[10] = r),
      (t[11] = S));
  let { data: ee } = a(s, c, `review-summary`, x, q, S),
    C,
    w,
    T,
    D,
    O,
    oe,
    k,
    M,
    P;
  if (
    t[12] !== o ||
    t[13] !== d ||
    t[14] !== i ||
    t[15] !== r ||
    t[16] !== v ||
    t[17] !== f ||
    t[18] !== l ||
    t[19] !== ee
  ) {
    let e = [v, ee],
      n = j(e),
      a = n?.totalAdditions ?? 0,
      s = n?.totalDeletions ?? 0,
      c = a + s > 0,
      u = o.length > 0,
      p;
    t[29] === f ? (p = t[30]) : ((p = he(f)), (t[29] = f), (t[30] = p));
    let m = p,
      h;
    t[31] !== d || t[32] !== l
      ? ((h =
          l ??
          d.formatMessage({
            id: `composer.footer.branchSwitch.uncommittedDialog.targetBranchFallback`,
            defaultMessage: `the selected branch`,
            description: `Fallback branch label in the uncommitted changes dialog when the target branch name is unavailable`,
          })),
        (t[31] = d),
        (t[32] = l),
        (t[33] = h))
      : (h = t[33]);
    let _ = h;
    ((T = re),
      (D = `feature`),
      (O = r),
      (oe = i),
      (w = ie),
      t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((P = (0, K.jsx)(E, {
            children: (0, K.jsx)(ne, {
              title: (0, K.jsx)(g, {
                id: `composer.footer.branchSwitch.uncommittedDialog.title`,
                defaultMessage: `Commit changes to switch branch`,
                description: `Title for dialog shown when branch switching is blocked by uncommitted changes`,
              }),
            }),
          })),
          (t[34] = P))
        : (P = t[34]),
      (C = E),
      (k = `text-token-description-foreground`),
      (M = u
        ? (0, K.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [
              (0, K.jsx)(g, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix`,
                defaultMessage: `Your changes to the following files would be overwritten by checkout:`,
                description: `Message shown in the uncommitted changes dialog before listing files that block checkout`,
              }),
              (0, K.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: o.map((t, n) => {
                  let r = N(t, e);
                  return (0, K.jsxs)(
                    `div`,
                    {
                      className: `inline-flex items-center gap-1 text-token-foreground`,
                      children: [
                        (0, K.jsx)(`span`, { children: t }),
                        r == null
                          ? null
                          : (0, K.jsx)(A, {
                              className: `inline-flex align-middle`,
                              linesAdded: r.linesAdded,
                              linesRemoved: r.linesRemoved,
                            }),
                      ],
                    },
                    `${t}:${n}`,
                  );
                }),
              }),
              (0, K.jsx)(g, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix`,
                defaultMessage: `Please commit your changes to continue`,
                description: `Message shown in the uncommitted changes dialog after listing files that block checkout`,
              }),
            ],
          })
        : c
          ? (0, K.jsxs)(`span`, {
              className: `inline-flex items-center gap-1 whitespace-nowrap`,
              children: [
                (0, K.jsx)(g, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodyPrefix.withDiff`,
                  defaultMessage: `Commit`,
                  description: `Body prefix in the uncommitted changes dialog before diff stats`,
                }),
                (0, K.jsx)(A, {
                  className: `inline-flex align-middle`,
                  linesAdded: a,
                  linesRemoved: s,
                }),
                (0, K.jsx)(g, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodySuffix.withDiff`,
                  defaultMessage: `changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                  description: `Body suffix in the uncommitted changes dialog after diff stats, including file count and target branch`,
                  values: { fileCount: m, branchName: _ },
                }),
              ],
            })
          : (0, K.jsx)(g, {
              id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff`,
              defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
              description: `Body text in the uncommitted changes dialog when diff stats are unavailable`,
              values: { fileCount: m, branchName: _ },
            })),
      (t[12] = o),
      (t[13] = d),
      (t[14] = i),
      (t[15] = r),
      (t[16] = v),
      (t[17] = f),
      (t[18] = l),
      (t[19] = ee),
      (t[20] = C),
      (t[21] = w),
      (t[22] = T),
      (t[23] = D),
      (t[24] = O),
      (t[25] = oe),
      (t[26] = k),
      (t[27] = M),
      (t[28] = P));
  } else
    ((C = t[20]),
      (w = t[21]),
      (T = t[22]),
      (D = t[23]),
      (O = t[24]),
      (oe = t[25]),
      (k = t[26]),
      (M = t[27]),
      (P = t[28]));
  let F;
  t[35] !== C || t[36] !== k || t[37] !== M
    ? ((F = (0, K.jsx)(C, { className: k, children: M })),
      (t[35] = C),
      (t[36] = k),
      (t[37] = M),
      (t[38] = F))
    : (F = t[38]);
  let se;
  t[39] === i
    ? (se = t[40])
    : ((se = () => {
        i(!1);
      }),
      (t[39] = i),
      (t[40] = se));
  let I;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, K.jsx)(g, {
        id: `composer.footer.branchSwitch.uncommittedDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[41] = I))
    : (I = t[41]);
  let L;
  t[42] === se
    ? (L = t[43])
    : ((L = (0, K.jsx)(te, { color: `secondary`, onClick: se, children: I })),
      (t[42] = se),
      (t[43] = L));
  let R;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, K.jsx)(g, {
        id: `composer.footer.branchSwitch.uncommittedDialog.commit`,
        defaultMessage: `Commit and switch branch…`,
        description: `Primary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[44] = R))
    : (R = t[44]);
  let z;
  t[45] === u
    ? (z = t[46])
    : ((z = (0, K.jsx)(te, { color: `primary`, onClick: u, children: R })),
      (t[45] = u),
      (t[46] = z));
  let B;
  t[47] !== L || t[48] !== z
    ? ((B = (0, K.jsx)(E, { children: (0, K.jsxs)(ae, { children: [L, z] }) })),
      (t[47] = L),
      (t[48] = z),
      (t[49] = B))
    : (B = t[49]);
  let V;
  t[50] !== w || t[51] !== F || t[52] !== B || t[53] !== P
    ? ((V = (0, K.jsxs)(w, { children: [P, F, B] })),
      (t[50] = w),
      (t[51] = F),
      (t[52] = B),
      (t[53] = P),
      (t[54] = V))
    : (V = t[54]);
  let H;
  return (
    t[55] !== T || t[56] !== D || t[57] !== O || t[58] !== oe || t[59] !== V
      ? ((H = (0, K.jsx)(T, {
          size: D,
          open: O,
          onOpenChange: oe,
          children: V,
        })),
        (t[55] = T),
        (t[56] = D),
        (t[57] = O),
        (t[58] = oe),
        (t[59] = V),
        (t[60] = H))
      : (H = t[60]),
    H
  );
}
function me({ branches: e, currentBranch: t, defaultBranch: n }) {
  let r = new Set(),
    i = [];
  return (
    Z(n, i, r),
    Z(t, i, r),
    e.forEach((e) => {
      Z(e, i, r);
    }),
    i
  );
}
function Z(e, t, n) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
function he(e) {
  return e?.type === `success`
    ? Math.max(e.stagedCount, e.unstagedCount) + e.untrackedCount
    : 0;
}
export { R as a, le as i, de as n, V as r, J as t };
//# sourceMappingURL=git-branch-switcher.js.map
