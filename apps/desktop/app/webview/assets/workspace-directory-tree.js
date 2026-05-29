import { s as e } from "./chunk-Bj-mKKzh.js";
import { zn as t } from "./src-C.js";
import {
  Ba as n,
  Ha as r,
  Ra as i,
  Va as a,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as o, t as s } from "./jsx-runtime.js";
import {
  $ as c,
  J as l,
  S as u,
  U as d,
  X as f,
  Y as p,
  Z as m,
  _ as h,
  d as g,
  ht as _,
  m as v,
  ot as y,
  wt as b,
} from "./setting-storage.js";
import { t as ee } from "./route-scope.js";
import { t as x } from "./use-stable-callback.js";
import { t as te } from "./use-workspace-file-search-KLsQKyAb.js";
import { n as S, r as ne, t as re } from "./file-tree-search-input.js";
function ie(e) {
  return [null, ...e.filter((e) => e.length > 0)];
}
function C(e) {
  return e.map((e) => ({ displayPath: e.path, path: e.path }));
}
function ae(e, t) {
  return T(e, t)
    ? e
    : {
        expandedPaths: t.expandedPaths,
        scrollTop: t.scrollTop,
        searchQuery: e.searchQuery,
        selectedPath: t.selectedPath,
      };
}
function oe(e, t) {
  return e.searchQuery === t
    ? e
    : {
        expandedPaths: e.expandedPaths,
        scrollTop: e.scrollTop,
        searchQuery: t,
        selectedPath: e.selectedPath,
      };
}
function se(e, t) {
  if (t == null) return e;
  let n = le(e.expandedPaths, t);
  return e.selectedPath === t && n === e.expandedPaths
    ? e
    : {
        expandedPaths: n,
        scrollTop: e.scrollTop,
        searchQuery: e.searchQuery,
        selectedPath: t,
      };
}
function ce({ filePath: e, root: t }) {
  let r = a(e).replace(/\/+$/, ``);
  if (r.length === 0) return null;
  if (!i(r)) return r;
  let o = a(t).replace(/\/+$/, ``),
    s = n(r).replace(/\/+$/, ``),
    c = n(o).replace(/\/+$/, ``);
  return c.length === 0 || !s.startsWith(`${c}/`)
    ? null
    : r.slice(o.length + 1);
}
function le(e, t) {
  let n = e;
  for (let r of w(t)) n.includes(r) || (n === e && (n = [...e]), n.push(r));
  return n;
}
function ue(e, t, n) {
  return e ?? (t?.query === n ? t.files : null);
}
function w(e) {
  let t = e.split(`/`).filter(Boolean),
    n = [];
  for (let e = 1; e < t.length; e += 1) n.push(t.slice(0, e).join(`/`));
  return n;
}
function T(e, t) {
  return (
    e.scrollTop === t.scrollTop &&
    e.selectedPath === t.selectedPath &&
    E(e.expandedPaths, t.expandedPaths)
  );
}
function E(e, t) {
  return e.length === t.length ? e.every((e, n) => e === t[n]) : !1;
}
var D = b(),
  O = e(o(), 1),
  k = s(),
  A = `/`,
  j = [],
  de = 100,
  fe = { expandedPaths: j, scrollTop: 0, searchQuery: ``, selectedPath: null },
  pe = y(ee, (e) => fe),
  me = y(ee, (e) => null),
  M = g(
    u,
    `workspace-directory-entries`,
    ({
      directoryPath: e,
      hostId: t,
      includeHidden: n,
      refreshKey: r,
      root: i,
    }) => ({
      cacheKey: r,
      params: {
        hostId: t,
        workspaceRoot: i,
        ...(e == null ? {} : { directoryPath: e }),
        includeHidden: n,
      },
      placeholderData: _,
      staleTime: h.FIVE_SECONDS,
    }),
  ),
  he = c(u, (e, { get: t }) => {
    let n = t(M, {
        directoryPath: null,
        hostId: e.hostId,
        includeHidden: e.includeHidden,
        refreshKey: e.refreshKey,
        root: e.root,
      }),
      r = new Set();
    F(r, n.data?.entries);
    for (let n of e.expandedItems)
      n.length !== 0 &&
        F(
          r,
          t(M, {
            directoryPath: n,
            hostId: e.hostId,
            includeHidden: e.includeHidden,
            refreshKey: e.refreshKey,
            root: e.root,
          }).data?.entries,
        );
    return {
      error: n.error,
      files: Array.from(r),
      isEmpty: n.data != null && n.data.entries.length === 0,
      isLoading: n.isLoading && n.data == null,
    };
  });
function ge(e) {
  let n = (0, D.c)(108),
    {
      activeFilePath: i,
      autoFocusSearch: a,
      root: o,
      includeHidden: s,
      hostId: c,
      onSelectFile: u,
      refreshKey: d,
    } = e,
    h = f(ee),
    g;
  n[0] !== c || n[1] !== s || n[2] !== o
    ? ((g = { hostId: c, includeHidden: s, root: o }),
      (n[0] = c),
      (n[1] = s),
      (n[2] = o),
      (n[3] = g))
    : (g = n[3]);
  let _ = l(pe, g),
    y = m(_),
    b;
  n[4] !== c || n[5] !== s || n[6] !== o
    ? ((b = { hostId: c, includeHidden: s, root: o }),
      (n[4] = c),
      (n[5] = s),
      (n[6] = o),
      (n[7] = b))
    : (b = n[7]);
  let S = l(me, b),
    ne = m(S),
    ie = v(`open-file`),
    C;
  n[8] === o ? (C = n[9]) : ((C = t(o)), (n[8] = o), (n[9] = C));
  let w = C,
    T,
    E;
  n[10] !== i || n[11] !== y || n[12] !== o
    ? ((T = i == null ? null : ce({ filePath: i, root: o })),
      (E = se(y, T)),
      (n[10] = i),
      (n[11] = y),
      (n[12] = o),
      (n[13] = T),
      (n[14] = E))
    : ((T = n[13]), (E = n[14]));
  let A = E,
    [j, fe] = (0, O.useState)(A.expandedPaths),
    [M, ge] = (0, O.useState)(A.selectedPath),
    N = (0, O.useRef)(j),
    P = (0, O.useRef)(null),
    F = (0, O.useRef)(null),
    I = (0, O.useRef)(M),
    L;
  n[15] !== j || n[16] !== c || n[17] !== s || n[18] !== d || n[19] !== o
    ? ((L = {
        expandedItems: j,
        hostId: c,
        includeHidden: s,
        refreshKey: d,
        root: o,
      }),
      (n[15] = j),
      (n[16] = c),
      (n[17] = s),
      (n[18] = d),
      (n[19] = o),
      (n[20] = L))
    : (L = n[20]);
  let { error: Se, files: Ce, isEmpty: we, isLoading: Te } = p(he, L),
    R;
  n[21] === o ? (R = n[22]) : ((R = [o]), (n[21] = o), (n[22] = R));
  let Ee = R,
    z;
  n[23] !== S || n[24] !== h
    ? ((z = (e) => {
        let { files: t, query: n } = e;
        n.trim().length !== 0 && h.set(S, { files: t, query: n });
      }),
      (n[23] = S),
      (n[24] = h),
      (n[25] = z))
    : (z = n[25]);
  let De = x(z),
    B;
  n[26] !== De || n[27] !== c || n[28] !== y.searchQuery || n[29] !== Ee
    ? ((B = { hostId: c, onFiles: De, query: y.searchQuery, roots: Ee }),
      (n[26] = De),
      (n[27] = c),
      (n[28] = y.searchQuery),
      (n[29] = Ee),
      (n[30] = B))
    : (B = n[30]);
  let { files: Oe, isLoading: ke } = te(B),
    V;
  n[31] === y.searchQuery
    ? (V = n[32])
    : ((V = y.searchQuery.trim()), (n[31] = y.searchQuery), (n[32] = V));
  let Ae = V,
    H;
  n[33] !== ne || n[34] !== y.searchQuery || n[35] !== Oe
    ? ((H = ue(Oe, ne, y.searchQuery)),
      (n[33] = ne),
      (n[34] = y.searchQuery),
      (n[35] = Oe),
      (n[36] = H))
    : (H = n[36]);
  let U = H,
    W;
  n[37] !== w || n[38] !== u || n[39] !== ie || n[40] !== o
    ? ((W = (e, t) => {
        if (u != null) {
          u(r(o, e), t);
          return;
        }
        ie.mutate({ cwd: w, path: e });
      }),
      (n[37] = w),
      (n[38] = u),
      (n[39] = ie),
      (n[40] = o),
      (n[41] = W))
    : (W = n[41]);
  let G = x(W),
    K;
  n[42] === G
    ? (K = n[43])
    : ((K = (e) => {
        ye(e, (e) => {
          G(e, { isPreview: !0 });
        });
      }),
      (n[42] = G),
      (n[43] = K));
  let je = x(K),
    q;
  n[44] === G
    ? (q = n[45])
    : ((q = (e) => {
        G(e, { isPreview: !1 });
      }),
      (n[44] = G),
      (n[45] = q));
  let Me = x(q),
    J;
  n[46] !== S ||
  n[47] !== y.searchQuery ||
  n[48] !== h ||
  n[49] !== G ||
  n[50] !== U
    ? ((J = (e) => {
        (U != null && h.set(S, { files: U, query: y.searchQuery }),
          G(e, { isPreview: !0 }));
      }),
      (n[46] = S),
      (n[47] = y.searchQuery),
      (n[48] = h),
      (n[49] = G),
      (n[50] = U),
      (n[51] = J))
    : (J = n[51]);
  let Ne = x(J),
    Y;
  n[52] === G
    ? (Y = n[53])
    : ((Y = (e) => {
        G(e, { isPreview: !1 });
      }),
      (n[52] = G),
      (n[53] = Y));
  let Pe = x(Y),
    Fe;
  n[54] !== _ || n[55] !== h
    ? ((Fe = () => {
        let e = P.current;
        e != null && ((P.current = null), h.set(_, (t) => ae(t, e)));
      }),
      (n[54] = _),
      (n[55] = h),
      (n[56] = Fe))
    : (Fe = n[56]);
  let X = x(Fe),
    Ie;
  n[57] !== _ || n[58] !== h
    ? ((Ie = (e) => {
        h.set(_, (t) => oe(t, e));
      }),
      (n[57] = _),
      (n[58] = h),
      (n[59] = Ie))
    : (Ie = n[59]);
  let Le = x(Ie),
    Re;
  n[60] === X
    ? (Re = n[61])
    : ((Re = (e) => {
        ((P.current = e),
          F.current != null && window.clearTimeout(F.current),
          (F.current = window.setTimeout(() => {
            ((F.current = null), X());
          }, de)));
      }),
      (n[60] = X),
      (n[61] = Re));
  let ze = x(Re),
    Be;
  n[62] === ze
    ? (Be = n[63])
    : ((Be = (e) => {
        (xe(N.current, e.expandedPaths) ||
          ((N.current = e.expandedPaths), fe(e.expandedPaths)),
          I.current !== e.selectedPath &&
            ((I.current = e.selectedPath), ge(e.selectedPath)),
          ze(e));
      }),
      (n[62] = ze),
      (n[63] = Be));
  let Ve = x(Be),
    He,
    Ue;
  (n[64] !== T || n[65] !== _ || n[66] !== h
    ? ((He = () => {
        if (T == null) return;
        let e = le(N.current, T);
        (xe(N.current, e) || ((N.current = e), fe(e)),
          I.current !== T && ((I.current = T), ge(T)),
          (P.current = null),
          F.current != null &&
            (window.clearTimeout(F.current), (F.current = null)),
          h.set(_, (e) => se(e, T)));
      }),
      (Ue = [T, _, h]),
      (n[64] = T),
      (n[65] = _),
      (n[66] = h),
      (n[67] = He),
      (n[68] = Ue))
    : ((He = n[67]), (Ue = n[68])),
    (0, O.useEffect)(He, Ue));
  let We, Ge;
  (n[69] !== j ||
  n[70] !== c ||
  n[71] !== s ||
  n[72] !== d ||
  n[73] !== o ||
  n[74] !== h
    ? ((We = () => {
        be(h, {
          expandedItems: j,
          hostId: c,
          includeHidden: s,
          refreshKey: d,
          root: o,
        });
      }),
      (Ge = [j, c, s, d, o, h]),
      (n[69] = j),
      (n[70] = c),
      (n[71] = s),
      (n[72] = d),
      (n[73] = o),
      (n[74] = h),
      (n[75] = We),
      (n[76] = Ge))
    : ((We = n[75]), (Ge = n[76])),
    (0, O.useEffect)(We, Ge));
  let Ke, qe;
  (n[77] === X
    ? ((Ke = n[78]), (qe = n[79]))
    : ((Ke = () => () => {
        (F.current != null &&
          (window.clearTimeout(F.current), (F.current = null)),
          X());
      }),
      (qe = [X]),
      (n[77] = X),
      (n[78] = Ke),
      (n[79] = qe)),
    (0, O.useEffect)(Ke, qe));
  let Z;
  n[80] !== a || n[81] !== Le || n[82] !== y.searchQuery
    ? ((Z = (0, k.jsx)(`div`, {
        className: `shrink-0 px-2 pt-2 pb-px`,
        children: (0, k.jsx)(re, {
          autoFocus: a,
          inputId: `workspace-directory-tree-search`,
          onQueryChange: Le,
          searchQuery: y.searchQuery,
        }),
      })),
      (n[80] = a),
      (n[81] = Le),
      (n[82] = y.searchQuery),
      (n[83] = Z))
    : (Z = n[83]);
  let Q;
  n[84] !== T ||
  n[85] !== Se ||
  n[86] !== j ||
  n[87] !== Ce ||
  n[88] !== w ||
  n[89] !== Me ||
  n[90] !== Pe ||
  n[91] !== Ne ||
  n[92] !== je ||
  n[93] !== Ve ||
  n[94] !== c ||
  n[95] !== we ||
  n[96] !== Te ||
  n[97] !== ke ||
  n[98] !== y.scrollTop ||
  n[99] !== y.searchQuery ||
  n[100] !== o ||
  n[101] !== M ||
  n[102] !== Ae.length ||
  n[103] !== U
    ? ((Q = (0, k.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children:
          Ae.length > 0
            ? (0, k.jsx)(ve, {
                files: U,
                hostId: c,
                isLoading: ke,
                onOpenFile: Pe,
                onSelectFile: Ne,
                query: y.searchQuery,
                root: o,
              })
            : (0, k.jsx)(_e, {
                error: Se,
                files: Ce,
                gitCwd: w,
                hostId: c,
                initialExpandedPaths: j,
                initialScrollTop: y.scrollTop,
                isEmpty: we,
                isLoading: Te,
                onOpenFile: Me,
                onSelectionChange: je,
                onStateChange: Ve,
                revealSelectedPath: T != null,
                selectedPath: M,
              }),
      })),
      (n[84] = T),
      (n[85] = Se),
      (n[86] = j),
      (n[87] = Ce),
      (n[88] = w),
      (n[89] = Me),
      (n[90] = Pe),
      (n[91] = Ne),
      (n[92] = je),
      (n[93] = Ve),
      (n[94] = c),
      (n[95] = we),
      (n[96] = Te),
      (n[97] = ke),
      (n[98] = y.scrollTop),
      (n[99] = y.searchQuery),
      (n[100] = o),
      (n[101] = M),
      (n[102] = Ae.length),
      (n[103] = U),
      (n[104] = Q))
    : (Q = n[104]);
  let $;
  return (
    n[105] !== Z || n[106] !== Q
      ? (($ = (0, k.jsxs)(`div`, {
          className: `flex h-full min-h-0 w-full flex-col`,
          children: [Z, Q],
        })),
        (n[105] = Z),
        (n[106] = Q),
        (n[107] = $))
      : ($ = n[107]),
    $
  );
}
function _e(e) {
  let t = (0, D.c)(17),
    {
      error: n,
      files: r,
      gitCwd: i,
      hostId: a,
      initialExpandedPaths: o,
      initialScrollTop: s,
      isEmpty: c,
      isLoading: l,
      onOpenFile: u,
      onSelectionChange: f,
      onStateChange: p,
      revealSelectedPath: m,
      selectedPath: h,
    } = e;
  if (n != null) {
    let e;
    return (
      t[0] === n.message
        ? (e = t[1])
        : ((e = (0, k.jsx)(`div`, {
            className: `px-3 py-2 text-xs text-token-error-foreground`,
            children: n.message,
          })),
          (t[0] = n.message),
          (t[1] = e)),
      e
    );
  }
  if (l) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, k.jsx)(I, {
            children: (0, k.jsx)(d, {
              id: `threadSidePanel.workspaceBrowser.loading`,
              defaultMessage: `Loading directory entries…`,
              description: `Loading message shown while the workspace file browser is fetching a directory`,
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (c) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, k.jsx)(I, {
            children: (0, k.jsx)(d, {
              id: `threadSidePanel.workspaceBrowser.empty`,
              defaultMessage: `No files in this folder`,
              description: `Empty state shown when a workspace directory contains no visible entries`,
            }),
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let g;
  t[4] === u
    ? (g = t[5])
    : ((g = (e) => {
        let t = P(e.nativeEvent);
        t != null && u(t);
      }),
      (t[4] = u),
      (t[5] = g));
  let _;
  return (
    t[6] !== r ||
    t[7] !== i ||
    t[8] !== a ||
    t[9] !== o ||
    t[10] !== s ||
    t[11] !== f ||
    t[12] !== p ||
    t[13] !== m ||
    t[14] !== h ||
    t[15] !== g
      ? ((_ = (0, k.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-2`,
          children: (0, k.jsx)(S, {
            cwd: i,
            hostId: a,
            initialExpandedPaths: o,
            initialScrollTop: s,
            onDoubleClick: g,
            onSelectionChange: f,
            onStateChange: p,
            paths: r,
            revealSelectedPath: m,
            selectedPath: h,
          }),
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = f),
        (t[12] = p),
        (t[13] = m),
        (t[14] = h),
        (t[15] = g),
        (t[16] = _))
      : (_ = t[16]),
    _
  );
}
function ve(e) {
  let n = (0, D.c)(22),
    {
      files: r,
      hostId: i,
      isLoading: a,
      onOpenFile: o,
      onSelectFile: s,
      query: c,
      root: l,
    } = e,
    u;
  n[0] === r
    ? (u = n[1])
    : ((u = r == null ? null : C(r)), (n[0] = r), (n[1] = u));
  let f = u,
    p;
  n[2] === f
    ? (p = n[3])
    : ((p = f == null ? j : L(f.map(N))), (n[2] = f), (n[3] = p));
  let m = p;
  if (f == null || (a && f.length === 0)) {
    let e;
    return (
      n[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, k.jsx)(I, {
            children: (0, k.jsx)(d, {
              id: `thread.fileTreePanel.searchingFiles`,
              defaultMessage: `Searching files…`,
              description: `Loading state shown while searching workspace files`,
            }),
          })),
          (n[4] = e))
        : (e = n[4]),
      e
    );
  }
  if (f.length === 0) {
    let e;
    return (
      n[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, k.jsx)(I, {
            children: (0, k.jsx)(d, {
              id: `thread.fileTreePanel.noMatchingFiles`,
              defaultMessage: `No matching files`,
              description: `Empty state shown when workspace file search has no results`,
            }),
          })),
          (n[5] = e))
        : (e = n[5]),
      e
    );
  }
  let h;
  n[6] === l ? (h = n[7]) : ((h = t(l)), (n[6] = l), (n[7] = h));
  let g;
  n[8] !== s || n[9] !== f
    ? ((g = (e) => {
        let t = f.find((t) => e.includes(t.displayPath));
        t != null && s(t.path);
      }),
      (n[8] = s),
      (n[9] = f),
      (n[10] = g))
    : (g = n[10]);
  let _;
  n[11] !== o || n[12] !== f
    ? ((_ = (e) => {
        let t = P(e.nativeEvent),
          n = f.find((e) => e.displayPath === t);
        n != null && o(n.path);
      }),
      (n[11] = o),
      (n[12] = f),
      (n[13] = _))
    : (_ = n[13]);
  let v;
  return (
    n[14] !== i ||
    n[15] !== m ||
    n[16] !== c ||
    n[17] !== f ||
    n[18] !== h ||
    n[19] !== g ||
    n[20] !== _
      ? ((v = (0, k.jsx)(`div`, {
          className: `h-full min-h-0 w-full px-2`,
          children: (0, k.jsx)(S, {
            flattenEmptyDirectories: !0,
            cwd: h,
            hostId: i,
            initialExpandedPaths: m,
            onSelectionChange: g,
            onDoubleClick: _,
            paths: f,
            resetKey: c,
          }),
        })),
        (n[14] = i),
        (n[15] = m),
        (n[16] = c),
        (n[17] = f),
        (n[18] = h),
        (n[19] = g),
        (n[20] = _),
        (n[21] = v))
      : (v = n[21]),
    v
  );
}
function N(e) {
  return e.displayPath;
}
function ye(e, t) {
  let n = e.find((e) => !e.endsWith(A));
  n != null && t(n);
}
function P(e) {
  let t = ne(e);
  return t == null || t.endsWith(A) ? null : t;
}
function F(e, t) {
  if (t != null)
    for (let n of t) {
      if (n.type === `directory`) {
        e.add(`${n.path}${A}`);
        continue;
      }
      e.add(n.path);
    }
}
async function be(
  e,
  { expandedItems: t, hostId: n, includeHidden: r, refreshKey: i, root: a },
) {
  await Promise.all(
    ie(t).map(async (t) => {
      await e.query
        .fetch(M, {
          directoryPath: t,
          hostId: n,
          includeHidden: r,
          refreshKey: i,
          root: a,
        })
        .catch(() => void 0);
    }),
  );
}
function I(e) {
  let t = (0, D.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, k.jsx)(`div`, {
          className: `px-2 py-2 text-left text-base text-token-description-foreground`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function L(e) {
  let t = new Set();
  for (let n of e) {
    let e = (n.endsWith(`/`) ? n.slice(0, -1) : n).split(`/`);
    for (let n = 1; n < e.length; n += 1) t.add(e.slice(0, n).join(`/`));
  }
  return Array.from(t);
}
function xe(e, t) {
  return e.length === t.length ? e.every((e, n) => e === t[n]) : !1;
}
export { ge as t };
//# sourceMappingURL=workspace-directory-tree.js.map
