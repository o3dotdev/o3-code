import { s as e } from "./chunk-Bj-mKKzh.js";
import { zn as t } from "./src-C.js";
import { n, t as r } from "./jsx-runtime.js";
import {
  G as i,
  S as a,
  U as o,
  X as s,
  Y as c,
  Z as l,
  at as u,
  b as d,
  m as f,
  wt as p,
  y as m,
} from "./setting-storage.js";
import { t as h } from "./thread-context-inputs-DBrOekVr.js";
import { r as g } from "./tooltip-CDzchJxN.js";
import { t as _ } from "./route-scope.js";
import { t as v } from "./open-workspace-file-WgoEFjrv.js";
import { At as y } from "./review-navigation-model-DMRVNxCn.js";
import { r as b } from "./thread-context-CaET2O8s.js";
import { b as x } from "./process-manager-target.js";
import { t as S } from "./use-stable-callback.js";
import { r as C } from "./use-register-command.js";
import { a as w } from "./command-keybindings-C3NM9T-L.js";
import { t as T } from "./search.js";
import { d as E } from "./inline-mentions.js";
import { n as D, t as O } from "./dist-wT0ygyN1.js";
import { t as k } from "./slash-command-item.js";
import { n as A } from "./at-mention-list-C6rdlW9Y.js";
var j = `command-menu-first-file-item`,
  M = `command-menu-first-chat-item`,
  N = u(a, `root`),
  P = p(),
  F = e(n(), 1),
  I = r();
function L(e) {
  let t = (0, P.c)(31),
    {
      clearSearch: n,
      close: r,
      hostId: u,
      onSelectFile: d,
      workspaceRoot: f,
    } = e,
    p = s(a),
    m = i(),
    h = c(w, `searchFiles`),
    _ = O(z),
    v = l(C),
    y = l(N),
    b = y === `files` ? _ : ``,
    x;
  t[0] === f ? (x = t[1]) : ((x = [f]), (t[0] = f), (t[1] = x));
  let S;
  t[2] !== u || t[3] !== b || t[4] !== x
    ? ((S = { hostId: u, query: b, roots: x }),
      (t[2] = u),
      (t[3] = b),
      (t[4] = x),
      (t[5] = S))
    : (S = t[5]);
  let { sections: E } = A(S),
    M = E[0],
    L,
    B;
  if (
    (t[6] !== v || t[7] !== p
      ? ((L = () => {
          v || p.set(N, `root`);
        }),
        (B = [v, p]),
        (t[6] = v),
        (t[7] = p),
        (t[8] = L),
        (t[9] = B))
      : ((L = t[8]), (B = t[9])),
    (0, F.useEffect)(L, B),
    y !== `files`)
  ) {
    let e;
    t[10] === m
      ? (e = t[11])
      : ((e = m.formatMessage({
          id: `thread.fileCommandMenu.searchFiles`,
          defaultMessage: `Search files`,
          description: `Command menu item that opens workspace file search`,
        })),
        (t[10] = m),
        (t[11] = e));
    let r = h ?? ``,
      i;
    t[12] === r
      ? (i = t[13])
      : ((i = (0, I.jsx)(g, { keysLabel: r })), (t[12] = r), (t[13] = i));
    let a;
    t[14] !== n || t[15] !== p
      ? ((a = () => {
          (n(), p.set(N, `files`));
        }),
        (t[14] = n),
        (t[15] = p),
        (t[16] = a))
      : (a = t[16]);
    let o;
    return (
      t[17] !== e || t[18] !== i || t[19] !== a
        ? ((o = (0, I.jsx)(
            k,
            {
              value: `search files workspace project cmd+p`,
              title: e,
              LeftIcon: T,
              rightAccessory: i,
              onSelect: a,
            },
            `search-files`,
          )),
          (t[17] = e),
          (t[18] = i),
          (t[19] = a),
          (t[20] = o))
        : (o = t[20]),
      o
    );
  }
  if (M == null || (M.items.length === 0 && M.emptyState == null)) return null;
  let V;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, I.jsx)(`span`, {
        className: `block px-2 pt-2 text-sm text-token-description-foreground`,
        children: (0, I.jsx)(o, {
          id: `thread.fileCommandMenu.filesGroup`,
          defaultMessage: `Files`,
          description: `Group label for workspace file search results`,
        }),
      })),
      (t[21] = V))
    : (V = t[21]);
  let H;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = { gap: `var(--spacing)` }), (t[22] = H))
    : (H = t[22]);
  let U;
  t[23] !== r ||
  t[24] !== M.emptyState ||
  t[25] !== M.items ||
  t[26] !== m ||
  t[27] !== d
    ? ((U =
        M.items.length > 0
          ? M.items.map((e, t) =>
              (0, I.jsx)(
                k,
                {
                  description: e.detail ?? void 0,
                  forceMount: !0,
                  LeftIcon: e.icon,
                  onSelect: () => {
                    (d(e.key.replace(/^file:/, ``)), r());
                  },
                  title: e.label,
                  value: t === 0 ? j : [e.label, e.detail].join(` `),
                },
                e.key,
              ),
            )
          : M.emptyState == null
            ? null
            : (0, I.jsx)(D.Item, {
                "data-command-menu-loading": !0,
                forceMount: !0,
                onSelect: R,
                value: j,
                children: (0, I.jsx)(`div`, {
                  className: `flex w-full min-w-0 items-center gap-2`,
                  children: (0, I.jsx)(`div`, {
                    className: `min-w-0 flex-1 truncate`,
                    children: m.formatMessage(M.emptyState),
                  }),
                }),
              })),
      (t[23] = r),
      (t[24] = M.emptyState),
      (t[25] = M.items),
      (t[26] = m),
      (t[27] = d),
      (t[28] = U))
    : (U = t[28]);
  let W;
  return (
    t[29] === U
      ? (W = t[30])
      : ((W = (0, I.jsx)(
          D.Group,
          {
            forceMount: !0,
            heading: V,
            className: `flex flex-col`,
            style: H,
            children: U,
          },
          `group-files`,
        )),
        (t[29] = U),
        (t[30] = W)),
    W
  );
}
function R() {}
function z(e) {
  return e.search;
}
function B() {
  let e = (0, P.c)(25),
    n = s(_),
    r = l(N),
    i = E(),
    a = f(`open-file`),
    o = l(b),
    c = l(y),
    { data: u } = l(h),
    p = u?.roots?.[0] ?? null,
    g = o.kind === `local` ? p : null,
    w =
      c.kind === `git` ? c.git.root : c.kind === `plain` ? (g ?? c.cwd) : null,
    T = w != null,
    D;
  e[0] !== T ||
  e[1] !== o ||
  e[2] !== i ||
  e[3] !== a ||
  e[4] !== n ||
  e[5] !== w
    ? ((D = (e) => {
        !T ||
          w == null ||
          v({
            scope: n,
            path: e,
            cwd: t(w),
            artifactTabsEnabled: i,
            hostConfig: o,
            hostId: o.id,
            openFile: a.mutate,
            openInSidePanel: !0,
          });
      }),
      (e[0] = T),
      (e[1] = o),
      (e[2] = i),
      (e[3] = a),
      (e[4] = n),
      (e[5] = w),
      (e[6] = D))
    : (D = e[6]);
  let O = D,
    k;
  (e[7] !== T || e[8] !== n
    ? ((k = () => {
        T &&
          (m.dispatchHostMessage({ type: `command-menu`, query: `` }),
          n.set(N, `files`),
          n.set(C, !0));
      }),
      (e[7] = T),
      (e[8] = n),
      (e[9] = k))
    : (k = e[9]),
    d(`file-search-command-menu`, S(k)));
  let A;
  e[10] !== T || e[11] !== r || e[12] !== o.id || e[13] !== i || e[14] !== w
    ? ((A = [T, r, o.id, i, w]),
      (e[10] = T),
      (e[11] = r),
      (e[12] = o.id),
      (e[13] = i),
      (e[14] = w),
      (e[15] = A))
    : (A = e[15]);
  let j = r === `files`,
    M;
  e[16] !== o.id || e[17] !== O || e[18] !== w
    ? ((M = (e, t) =>
        w == null
          ? null
          : (0, I.jsx)(L, {
              clearSearch: t,
              close: e,
              hostId: o.id,
              onSelectFile: O,
              workspaceRoot: w,
            })),
      (e[16] = o.id),
      (e[17] = O),
      (e[18] = w),
      (e[19] = M))
    : (M = e[19]);
  let F;
  return (
    e[20] !== T || e[21] !== A || e[22] !== j || e[23] !== M
      ? ((F = {
          dependencies: A,
          enabled: T,
          exclusive: j,
          groupKey: `suggested`,
          id: `thread-file-search`,
          order: -1e3,
          render: M,
        }),
        (e[20] = T),
        (e[21] = A),
        (e[22] = j),
        (e[23] = M),
        (e[24] = F))
      : (F = e[24]),
    x(F),
    null
  );
}
export { N as i, M as n, j as r, B as t };
//# sourceMappingURL=workspace-file-command-menu-bridge-CBYEddRc.js.map
