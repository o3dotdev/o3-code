import { s as e } from "./chunk-Bj-mKKzh.js";
import { zr as t } from "./src-C.js";
import {
  Xs as n,
  ii as r,
  po as i,
  w as a,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as o, t as s } from "./jsx-runtime.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import {
  G as c,
  L as l,
  S as u,
  T as d,
  U as f,
  V as p,
  X as m,
  _ as h,
  h as g,
  w as _,
  wt as v,
} from "./setting-storage.js";
import { t as y } from "./useInfiniteQuery.js";
import { m as b } from "./chunk-LFPYN7LY.js";
import "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import { t as x } from "./request-DWZTrEAr.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import { r as S } from "./toast-signal.js";
import "./window-zoom-context.js";
import { t as C } from "./tooltip-CDzchJxN.js";
import { t as ee } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import { t as w } from "./spinner.js";
import "./x-C_RDKBp5.js";
import "./with-window.js";
import { a as T, i as E, l as D, n as O, r as k } from "./dialog-layout.js";
import "./initial-route-atom.js";
import "./use-stable-callback.js";
import { t as A } from "./use-navigate-to-local-conversation.js";
import "./_defineProperty.js";
import "./links.js";
import { t as j } from "./trash.js";
import "./chevron-NmAOI_v1.js";
import { t as M } from "./cloud-BOSNAJnX.js";
import { t as N } from "./get-project-name.js";
import "./sortBy.js";
import "./use-connected-remote-connections.js";
import { i as P } from "./settings-shared-BTHmEeQY.js";
import { t as F } from "./settings-host-context-ILiCQlCE.js";
import { t as I } from "./settings-content-layout.js";
import { n as L } from "./settings-row.js";
import { n as R, t as z } from "./settings-group.js";
var B = v(),
  V = e(o(), 1),
  H = p({
    delete: {
      id: `settings.dataControls.archivedChats.delete`,
      defaultMessage: `Delete`,
      description: `Button label to permanently delete an archived chat`,
    },
    deleteAll: {
      id: `settings.dataControls.archivedChats.deleteAll`,
      defaultMessage: `Delete all`,
      description: `Button label to permanently delete all archived local chats`,
    },
    deleteAllError: {
      id: `settings.dataControls.archivedChats.deleteAllError`,
      defaultMessage: `Failed to delete archived chats`,
      description: `Error message when deleting all archived chats fails`,
    },
    deleteError: {
      id: `settings.dataControls.archivedChats.deleteError`,
      defaultMessage: `Failed to delete archived chat`,
      description: `Error message when deleting an archived chat fails`,
    },
    deleteSuccessPlain: {
      id: `settings.dataControls.archivedChats.deleteSuccessPlain`,
      defaultMessage: `Deleted archived chat`,
      description: `Success toast after deleting an archived chat`,
    },
    deleting: {
      id: `settings.dataControls.archivedChats.deleting`,
      defaultMessage: `Deleting archived chat…`,
      description: `Toast shown while deleting an archived chat`,
    },
    deletingAll: {
      id: `settings.dataControls.archivedChats.deletingAll`,
      defaultMessage: `Deleting archived chats…`,
      description: `Toast shown while deleting all archived chats`,
    },
    unarchiveError: {
      id: `settings.dataControls.archivedChats.unarchiveError`,
      defaultMessage: `Failed to unarchive chat`,
      description: `Error message when unarchiving a chat`,
    },
    unarchiveSuccessPlain: {
      id: `settings.dataControls.archivedChats.unarchiveSuccessPlain`,
      defaultMessage: `Unarchived chat`,
      description: `Success toast after unarchiving a chat`,
    },
    viewNow: {
      id: `settings.dataControls.archivedChats.viewNow`,
      defaultMessage: `View now`,
      description: `Action label to open an unarchived chat from the success toast`,
    },
    unarchive: {
      id: `settings.dataControls.archivedChats.unarchive`,
      defaultMessage: `Unarchive`,
      description: `Button label to unarchive a chat`,
    },
  });
function U({ cloudTasks: e, localThreads: t }) {
  return [
    ...(e ?? []).map((e) => ({
      kind: `cloud`,
      at: W(e.updated_at, e.created_at),
      task: e,
    })),
    ...(t ?? []).map((e) => ({
      kind: `local`,
      at: W(e.updatedAt, e.createdAt),
      thread: e,
    })),
  ].sort((e, t) => t.at - e.at);
}
function W(e, t) {
  return e != null && Number.isFinite(e)
    ? e
    : t != null && Number.isFinite(t)
      ? t
      : 0;
}
var G = s();
function te(e) {
  let t = (0, B.c)(53),
    { archivedTask: n } = e,
    i = m(u),
    a = l(),
    o = c(),
    s = b(),
    d,
    p;
  t[0] === n.id
    ? ((d = t[1]), (p = t[2]))
    : ((d = [`recover-cloud-task`, n.id]),
      (p = () =>
        x.safePost(`/wham/tasks/{task_id}/recover`, {
          parameters: { path: { task_id: n.id } },
        })),
      (t[0] = n.id),
      (t[1] = d),
      (t[2] = p));
  let h;
  t[3] !== o || t[4] !== i
    ? ((h = () => {
        i.get(S).danger(o.formatMessage(H.unarchiveError));
      }),
      (t[3] = o),
      (t[4] = i),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] !== n.id || t[7] !== s || t[8] !== a || t[9] !== i
    ? ((g = () => {
        (a.setQueryData([`tasks`, `archived`], (e) =>
          e == null
            ? e
            : {
                ...e,
                pages: e.pages.map((e) => ({
                  ...e,
                  items: e.items.filter((e) => e.id !== n.id),
                })),
              },
        ),
          i.get(S).info(
            (0, G.jsxs)(`span`, {
              children: [
                (0, G.jsx)(f, { ...H.unarchiveSuccessPlain }),
                (0, G.jsx)(`button`, {
                  className: `pointer-events-auto ml-1 cursor-interaction text-token-link underline-offset-2 hover:underline`,
                  type: `button`,
                  onClick: () => {
                    s(`/remote/${n.id}`);
                  },
                  children: (0, G.jsx)(f, { ...H.viewNow }),
                }),
              ],
            }),
            { id: `recover-cloud-task-${n.id}` },
          ));
      }),
      (t[6] = n.id),
      (t[7] = s),
      (t[8] = a),
      (t[9] = i),
      (t[10] = g))
    : (g = t[10]);
  let v;
  t[11] === a
    ? (v = t[12])
    : ((v = () => {
        a.invalidateQueries({ queryKey: [`tasks`] });
      }),
      (t[11] = a),
      (t[12] = v));
  let y;
  t[13] !== d || t[14] !== p || t[15] !== h || t[16] !== g || t[17] !== v
    ? ((y = {
        mutationKey: d,
        mutationFn: p,
        onError: h,
        onSuccess: g,
        onSettled: v,
      }),
      (t[13] = d),
      (t[14] = p),
      (t[15] = h),
      (t[16] = g),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let C = _(y),
    w;
  t[19] === n.title
    ? (w = t[20])
    : ((w = r(n.title ?? ``).trim()), (t[19] = n.title), (t[20] = w));
  let T = w,
    E,
    D,
    O,
    k;
  if (t[21] !== n || t[22] !== o) {
    let e = ne(n),
      r;
    (t[27] === n.task_status_display?.environment_label
      ? (r = t[28])
      : ((r = n.task_status_display?.environment_label?.trim()),
        (t[27] = n.task_status_display?.environment_label),
        (t[28] = r)),
      (D = r),
      (O = e != null),
      (E = O
        ? o.formatDate(e, { year: `numeric`, month: `short`, day: `numeric` })
        : ``),
      (k = O ? o.formatTime(e, { hour: `numeric`, minute: `2-digit` }) : ``),
      (t[21] = n),
      (t[22] = o),
      (t[23] = E),
      (t[24] = D),
      (t[25] = O),
      (t[26] = k));
  } else ((E = t[23]), (D = t[24]), (O = t[25]), (k = t[26]));
  let A = k,
    j;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, G.jsx)(M, { className: `icon-sm shrink-0` })), (t[29] = j))
    : (j = t[29]);
  let N;
  t[30] === T
    ? (N = t[31])
    : ((N =
        T.length > 0
          ? T
          : (0, G.jsx)(f, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (t[30] = T),
      (t[31] = N));
  let P;
  t[32] === N
    ? (P = t[33])
    : ((P = (0, G.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2 text-base font-medium`,
        children: [
          j,
          (0, G.jsx)(`span`, { className: `truncate`, children: N }),
        ],
      })),
      (t[32] = N),
      (t[33] = P));
  let F;
  t[34] !== E || t[35] !== D || t[36] !== O || t[37] !== A
    ? ((F = O
        ? D
          ? (0, G.jsx)(f, {
              id: `settings.dataControls.archivedChats.dateTimeWithEnvironment`,
              defaultMessage: `{date}, {time} • {environment}`,
              description: `Date, time, and environment name for an archived cloud chat`,
              values: { date: E, time: A, environment: D },
            })
          : (0, G.jsx)(f, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: E, time: A },
            })
        : null),
      (t[34] = E),
      (t[35] = D),
      (t[36] = O),
      (t[37] = A),
      (t[38] = F))
    : (F = t[38]);
  let I;
  t[39] === F
    ? (I = t[40])
    : ((I = (0, G.jsx)(`div`, {
        className: `mt-1 flex min-w-0 flex-col gap-0.5 text-sm`,
        children: (0, G.jsx)(`div`, {
          className: `truncate text-token-text-secondary`,
          children: F,
        }),
      })),
      (t[39] = F),
      (t[40] = I));
  let L;
  t[41] !== P || t[42] !== I
    ? ((L = (0, G.jsxs)(`div`, {
        className: `min-w-0 flex-1 text-left text-token-text-primary`,
        children: [P, I],
      })),
      (t[41] = P),
      (t[42] = I),
      (t[43] = L))
    : (L = t[43]);
  let R;
  t[44] === C
    ? (R = t[45])
    : ((R = () => {
        C.isPending || C.mutate();
      }),
      (t[44] = C),
      (t[45] = R));
  let z;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, G.jsx)(f, { ...H.unarchive })), (t[46] = z))
    : (z = t[46]);
  let V;
  t[47] !== R || t[48] !== C.isPending
    ? ((V = (0, G.jsx)(ee, {
        className: `shrink-0`,
        color: `secondary`,
        size: `toolbar`,
        disabled: C.isPending,
        loading: C.isPending,
        onClick: R,
        children: z,
      })),
      (t[47] = R),
      (t[48] = C.isPending),
      (t[49] = V))
    : (V = t[49]);
  let U;
  return (
    t[50] !== L || t[51] !== V
      ? ((U = (0, G.jsxs)(`div`, {
          className: `flex w-full items-center justify-between gap-3 px-4 py-3 hover:bg-token-list-hover-background`,
          children: [L, V],
        })),
        (t[50] = L),
        (t[51] = V),
        (t[52] = U))
      : (U = t[52]),
    U
  );
}
function ne(e) {
  let t = e.updated_at ?? e.created_at;
  if (t == null) return null;
  let n = new Date(t * 1e3);
  return Number.isFinite(n.getTime()) ? n : null;
}
function K() {
  let e = (0, B.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = [`tasks`, `archived`]), (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = {
          queryKey: t,
          initialPageParam: null,
          queryFn: X,
          getNextPageParam: Y,
          select: q,
          staleTime: h.FIVE_SECONDS,
        }),
        (e[1] = n))
      : (n = e[1]),
    y(n)
  );
}
function q(e) {
  return e.pages.flatMap(J);
}
function J(e) {
  return e.items;
}
function Y(e) {
  return e.cursor ?? null;
}
function X(e) {
  let { pageParam: t } = e;
  return Z(t);
}
async function Z(e) {
  try {
    return await x.safeGet(`/wham/tasks/list`, {
      parameters: { query: { limit: 20, cursor: e, task_filter: `archived` } },
    });
  } catch (e) {
    if (
      e instanceof g &&
      (e.status === 401 || e.status === 403 || e.status === 404)
    )
      return { items: [], cursor: null };
    throw e;
  }
}
function Q() {
  let e = (0, B.c)(16),
    { selectedHostId: t } = F(),
    r;
  e[0] === t
    ? (r = e[1])
    : ((r = {
        queryKey: [`archived-threads`, t],
        queryFn: () => n(`list-archived-threads`, { hostId: t }),
        enabled: !0,
        staleTime: h.FIVE_SECONDS,
      }),
      (e[0] = t),
      (e[1] = r));
  let { data: i, isLoading: a, isError: o } = d(r),
    {
      data: s,
      fetchNextPage: c,
      hasNextPage: l,
      isLoading: u,
      isFetchingNextPage: f,
      isError: p,
    } = K(),
    m;
  e[2] !== s || e[3] !== i
    ? ((m = U({ cloudTasks: s, localThreads: i })),
      (e[2] = s),
      (e[3] = i),
      (e[4] = m))
    : (m = e[4]);
  let g = m,
    _;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, G.jsx)(P, { slug: `data-controls` })), (e[5] = _))
    : (_ = e[5]);
  let v = a || u,
    y = o || (s == null && p),
    b;
  e[6] === c
    ? (b = e[7])
    : ((b = () => {
        c();
      }),
      (e[6] = c),
      (e[7] = b));
  let x;
  return (
    e[8] !== g ||
    e[9] !== l ||
    e[10] !== f ||
    e[11] !== t ||
    e[12] !== v ||
    e[13] !== y ||
    e[14] !== b
      ? ((x = (0, G.jsx)(I, {
          title: _,
          children: (0, G.jsx)(z, {
            className: `gap-2`,
            children: (0, G.jsx)(z.Content, {
              children: (0, G.jsx)(re, {
                archivedChats: g,
                hostId: t,
                hasNextPage: l,
                isLoading: v,
                isFetchingNextPage: f,
                isError: y,
                onLoadNextPage: b,
              }),
            }),
          }),
        })),
        (e[8] = g),
        (e[9] = l),
        (e[10] = f),
        (e[11] = t),
        (e[12] = v),
        (e[13] = y),
        (e[14] = b),
        (e[15] = x))
      : (x = e[15]),
    x
  );
}
function re(e) {
  let r = (0, B.c)(91),
    {
      archivedChats: o,
      hostId: s,
      hasNextPage: d,
      isLoading: p,
      isFetchingNextPage: h,
      isError: g,
      onLoadNextPage: v,
    } = e,
    y = m(u),
    x = l(),
    C = c(),
    w = b(),
    T = A(),
    [E, D] = (0, V.useState)(null),
    O;
  r[0] === o ? (O = r[1]) : ((O = o.flatMap(oe)), (r[0] = o), (r[1] = O));
  let k = O,
    j = s === `local` && k.length > 0,
    M;
  r[2] !== s || r[3] !== w || r[4] !== T
    ? ((M = (e) => {
        if (s !== `local`) {
          w(`/remote/${e}`);
          return;
        }
        T(e);
      }),
      (r[2] = s),
      (r[3] = w),
      (r[4] = T),
      (r[5] = M))
    : (M = r[5]);
  let N = M,
    P,
    F;
  r[6] === s
    ? ((P = r[7]), (F = r[8]))
    : ((P = [`unarchive-thread`, s]),
      (F = async (e) => (
        await n(`unarchive-conversation`, {
          hostId: s,
          conversationId: t(e.id),
        }),
        e
      )),
      (r[6] = s),
      (r[7] = P),
      (r[8] = F));
  let I;
  r[9] !== s || r[10] !== x || r[11] !== y
    ? ((I = async (e) => {
        (y.get(S).info(
          (0, G.jsx)(f, {
            id: `settings.dataControls.archivedChats.unarchiving`,
            defaultMessage: `Unarchiving chat…`,
            description: `Toast shown while unarchiving a chat`,
          }),
          { id: `unarchive-thread-${e.id}`, duration: 0, hasCloseButton: !1 },
        ),
          await x.cancelQueries({ queryKey: [`archived-threads`, s] }));
        let t = x.getQueryData([`archived-threads`, s]) ?? [];
        return (
          x.setQueryData(
            [`archived-threads`, s],
            t.filter((t) => t.id !== e.id),
          ),
          { previousThreads: t }
        );
      }),
      (r[9] = s),
      (r[10] = x),
      (r[11] = y),
      (r[12] = I))
    : (I = r[12]);
  let z;
  r[13] !== s || r[14] !== C || r[15] !== x || r[16] !== y
    ? ((z = (e, t, n) => {
        (n?.previousThreads &&
          x.setQueryData([`archived-threads`, s], n.previousThreads),
          y.get(S).danger(C.formatMessage(H.unarchiveError), {
            id: `unarchive-thread-${t.id}`,
          }));
      }),
      (r[13] = s),
      (r[14] = C),
      (r[15] = x),
      (r[16] = y),
      (r[17] = z))
    : (z = r[17]);
  let U;
  r[18] !== s || r[19] !== N || r[20] !== y
    ? ((U = async (e) => {
        let r = t(e.id),
          i = await n(`hydrate-pinned-threads`, {
            hostId: s,
            threadIds: [e.id],
          }).then(() => y.get(a, r), ae);
        y.get(S).info(
          i
            ? (0, G.jsxs)(`span`, {
                children: [
                  (0, G.jsx)(f, { ...H.unarchiveSuccessPlain }),
                  (0, G.jsx)(`button`, {
                    className: `pointer-events-auto ml-1 cursor-interaction text-token-link underline-offset-2 hover:underline`,
                    type: `button`,
                    onClick: () => {
                      N(e.id);
                    },
                    children: (0, G.jsx)(f, { ...H.viewNow }),
                  }),
                ],
              })
            : (0, G.jsx)(f, { ...H.unarchiveSuccessPlain }),
          { id: `unarchive-thread-${e.id}` },
        );
      }),
      (r[18] = s),
      (r[19] = N),
      (r[20] = y),
      (r[21] = U))
    : (U = r[21]);
  let W;
  r[22] !== s || r[23] !== x
    ? ((W = () => {
        x.invalidateQueries({ queryKey: [`archived-threads`, s] });
      }),
      (r[22] = s),
      (r[23] = x),
      (r[24] = W))
    : (W = r[24]);
  let ne;
  r[25] !== P ||
  r[26] !== F ||
  r[27] !== I ||
  r[28] !== z ||
  r[29] !== U ||
  r[30] !== W
    ? ((ne = {
        mutationKey: P,
        mutationFn: F,
        onMutate: I,
        onError: z,
        onSuccess: U,
        onSettled: W,
      }),
      (r[25] = P),
      (r[26] = F),
      (r[27] = I),
      (r[28] = z),
      (r[29] = U),
      (r[30] = W),
      (r[31] = ne))
    : (ne = r[31]);
  let K = _(ne),
    q,
    J;
  r[32] === s
    ? ((q = r[33]), (J = r[34]))
    : ((q = [`delete-archived-conversations`, s]),
      (J = async (e) =>
        e.kind === `all`
          ? n(`delete-all-archived-conversations`, { hostId: s })
          : n(`delete-archived-conversation`, {
              hostId: s,
              conversationId: t(e.thread.id),
            })),
      (r[32] = s),
      (r[33] = q),
      (r[34] = J));
  let Y;
  r[35] !== s || r[36] !== x || r[37] !== y
    ? ((Y = async (e) => {
        let t = e.kind === `all` ? e.threadIds : [e.thread.id];
        (y
          .get(S)
          .info(
            e.kind === `all`
              ? (0, G.jsx)(f, { ...H.deletingAll })
              : (0, G.jsx)(f, { ...H.deleting }),
            { id: de(e), duration: 0, hasCloseButton: !1 },
          ),
          await x.cancelQueries({ queryKey: [`archived-threads`, s] }));
        let n = x.getQueryData([`archived-threads`, s]) ?? [];
        return (
          x.setQueryData(
            [`archived-threads`, s],
            n.filter((e) => !t.includes(e.id)),
          ),
          { deletingThreadIds: t, previousThreads: n }
        );
      }),
      (r[35] = s),
      (r[36] = x),
      (r[37] = y),
      (r[38] = Y))
    : (Y = r[38]);
  let X;
  r[39] !== s || r[40] !== C || r[41] !== x || r[42] !== y
    ? ((X = (e, t, n) => {
        (n?.previousThreads &&
          x.setQueryData([`archived-threads`, s], n.previousThreads),
          y
            .get(S)
            .danger(
              C.formatMessage(
                t.kind === `all` ? H.deleteAllError : H.deleteError,
              ),
              { id: de(t) },
            ));
      }),
      (r[39] = s),
      (r[40] = C),
      (r[41] = x),
      (r[42] = y),
      (r[43] = X))
    : (X = r[43]);
  let Z;
  r[44] !== C || r[45] !== y
    ? ((Z = (e, t) => {
        if (t.kind === `all`) {
          y.get(S).success(
            C.formatMessage(
              {
                id: `settings.dataControls.archivedChats.deleteAllSuccess`,
                defaultMessage: `Deleted {count, plural, one {# archived chat} other {# archived chats}}`,
                description: `Success toast after deleting archived chats`,
              },
              { count: e.length || t.threadIds.length },
            ),
            { id: de(t) },
          );
          return;
        }
        y.get(S).success(C.formatMessage(H.deleteSuccessPlain), { id: de(t) });
      }),
      (r[44] = C),
      (r[45] = y),
      (r[46] = Z))
    : (Z = r[46]);
  let Q;
  r[47] !== s || r[48] !== x
    ? ((Q = () => {
        x.invalidateQueries({ queryKey: [`archived-threads`, s] });
      }),
      (r[47] = s),
      (r[48] = x),
      (r[49] = Q))
    : (Q = r[49]);
  let re;
  r[50] !== q ||
  r[51] !== J ||
  r[52] !== Y ||
  r[53] !== X ||
  r[54] !== Z ||
  r[55] !== Q
    ? ((re = {
        mutationKey: q,
        mutationFn: J,
        onMutate: Y,
        onError: X,
        onSuccess: Z,
        onSettled: Q,
      }),
      (r[50] = q),
      (r[51] = J),
      (r[52] = Y),
      (r[53] = X),
      (r[54] = Z),
      (r[55] = Q),
      (r[56] = re))
    : (re = r[56]);
  let ce = _(re),
    $ = K.isPending || ce.isPending;
  if (p) {
    let e;
    return (
      r[57] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(R, {
            children: (0, G.jsx)(L, {
              label: (0, G.jsx)(f, {
                id: `settings.dataControls.archivedChats.loading`,
                defaultMessage: `Loading archived chats…`,
                description: `Loading state label for archived chats list`,
              }),
              control: null,
            }),
          })),
          (r[57] = e))
        : (e = r[57]),
      e
    );
  }
  if (g) {
    let e;
    return (
      r[58] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(R, {
            children: (0, G.jsx)(L, {
              label: (0, G.jsx)(f, {
                id: `settings.dataControls.archivedChats.error`,
                defaultMessage: `Could not load archived chats.`,
                description: `Error state label for archived chats list`,
              }),
              control: null,
            }),
          })),
          (r[58] = e))
        : (e = r[58]),
      e
    );
  }
  if (o.length === 0) {
    let e;
    return (
      r[59] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(R, {
            children: (0, G.jsx)(L, {
              label: (0, G.jsx)(f, {
                id: `settings.dataControls.archivedChats.empty`,
                defaultMessage: `No archived chats.`,
                description: `Empty state label for archived chats list`,
              }),
              control: null,
            }),
          })),
          (r[59] = e))
        : (e = r[59]),
      e
    );
  }
  let fe;
  r[60] !== $ || r[61] !== j
    ? ((fe = j
        ? (0, G.jsx)(`div`, {
            className: `flex justify-end`,
            children: (0, G.jsx)(ee, {
              color: `danger`,
              size: `toolbar`,
              disabled: $,
              onClick: () => {
                D({ kind: `all` });
              },
              children: (0, G.jsx)(f, { ...H.deleteAll }),
            }),
          })
        : null),
      (r[60] = $),
      (r[61] = j),
      (r[62] = fe))
    : (fe = r[62]);
  let pe;
  if (r[63] !== o || r[64] !== $ || r[65] !== s || r[66] !== K) {
    let e;
    (r[68] !== $ || r[69] !== s || r[70] !== K
      ? ((e = (e) => {
          switch (e.kind) {
            case `cloud`:
              return (0, G.jsx)(
                te,
                { archivedTask: e.task },
                `cloud:${e.task.id}`,
              );
            case `local`:
              return (0, G.jsx)(
                le,
                {
                  archivedThread: e.thread,
                  isDeleteDisabled: $,
                  isUnarchiving: K.isPending && K.variables?.id === e.thread.id,
                  showDeleteButton: s === i,
                  onDelete: () => {
                    D({ kind: `single`, thread: e.thread });
                  },
                  onUnarchive: () => {
                    K.mutate(e.thread);
                  },
                },
                `local:${e.thread.id}`,
              );
          }
        }),
        (r[68] = $),
        (r[69] = s),
        (r[70] = K),
        (r[71] = e))
      : (e = r[71]),
      (pe = o.map(e)),
      (r[63] = o),
      (r[64] = $),
      (r[65] = s),
      (r[66] = K),
      (r[67] = pe));
  } else pe = r[67];
  let me;
  r[72] !== d || r[73] !== h || r[74] !== v
    ? ((me = (0, G.jsx)(se, {
        hasNextPage: d,
        isFetchingNextPage: h,
        onLoadNextPage: v,
      })),
      (r[72] = d),
      (r[73] = h),
      (r[74] = v),
      (r[75] = me))
    : (me = r[75]);
  let he;
  r[76] !== pe || r[77] !== me
    ? ((he = (0, G.jsxs)(R, {
        className: `max-h-[min(80vh)] overflow-y-auto`,
        children: [pe, me],
      })),
      (r[76] = pe),
      (r[77] = me),
      (r[78] = he))
    : (he = r[78]);
  let ge;
  r[79] !== ce || r[80] !== E || r[81] !== k
    ? ((ge = () => {
        if (E != null) {
          if ((D(null), E.kind === `all`)) {
            ce.mutate({ kind: `all`, threadIds: k.map(ie) });
            return;
          }
          ce.mutate({ kind: `single`, thread: E.thread });
        }
      }),
      (r[79] = ce),
      (r[80] = E),
      (r[81] = k),
      (r[82] = ge))
    : (ge = r[82]);
  let _e;
  r[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (e) => {
        e || D(null);
      }),
      (r[83] = _e))
    : (_e = r[83]);
  let ve;
  r[84] !== E || r[85] !== ge
    ? ((ve = (0, G.jsx)(ue, { state: E, onConfirm: ge, onOpenChange: _e })),
      (r[84] = E),
      (r[85] = ge),
      (r[86] = ve))
    : (ve = r[86]);
  let ye;
  return (
    r[87] !== fe || r[88] !== he || r[89] !== ve
      ? ((ye = (0, G.jsxs)(G.Fragment, { children: [fe, he, ve] })),
        (r[87] = fe),
        (r[88] = he),
        (r[89] = ve),
        (r[90] = ye))
      : (ye = r[90]),
    ye
  );
}
function ie(e) {
  return e.id;
}
function ae() {
  return !1;
}
function oe(e) {
  return e.kind === `local` ? [e.thread] : [];
}
function se(e) {
  let t = (0, B.c)(12),
    { hasNextPage: n, isFetchingNextPage: r, onLoadNextPage: i } = e,
    a = (0, V.useRef)(null),
    o;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((o = () => {
        n && !r && i();
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s = (0, V.useEffectEvent)(o),
    c;
  t[4] !== n || t[5] !== r || t[6] !== s
    ? ((c = () => {
        let e = a.current;
        if (e == null || !n || r) return;
        if (typeof IntersectionObserver > `u`) {
          s();
          return;
        }
        let t = new IntersectionObserver((e) => {
          e.some(ce) && s();
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (t[4] = n),
      (t[5] = r),
      (t[6] = s),
      (t[7] = c))
    : (c = t[7]);
  let l;
  if (
    (t[8] !== n || t[9] !== r
      ? ((l = [n, r]), (t[8] = n), (t[9] = r), (t[10] = l))
      : (l = t[10]),
    (0, V.useEffect)(c, l),
    !n && !r)
  )
    return null;
  let u;
  return (
    t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, G.jsx)(`div`, {
          ref: a,
          className: `flex justify-center py-3`,
          children: (0, G.jsx)(w, {
            className: `icon-xs text-token-text-secondary`,
          }),
        })),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function ce(e) {
  return e.isIntersecting;
}
function le(e) {
  let t = (0, B.c)(50),
    {
      archivedThread: n,
      isDeleteDisabled: i,
      isUnarchiving: a,
      showDeleteButton: o,
      onDelete: s,
      onUnarchive: l,
    } = e,
    u = c(),
    d;
  t[0] !== n.name || t[1] !== n.preview
    ? ((d = r(n.name?.trim() || n.preview).trim()),
      (t[0] = n.name),
      (t[1] = n.preview),
      (t[2] = d))
    : (d = t[2]);
  let p = d,
    m,
    h,
    g,
    _;
  if (
    t[3] !== n.createdAt ||
    t[4] !== n.cwd ||
    t[5] !== n.path ||
    t[6] !== n.updatedAt ||
    t[7] !== u
  ) {
    let e = new Date(Number(n.updatedAt) * 1e3),
      r = new Date(Number(n.createdAt) * 1e3),
      i = Number.isFinite(e.getTime())
        ? e
        : Number.isFinite(r.getTime())
          ? r
          : null,
      a;
    (t[12] !== n.cwd || t[13] !== n.path
      ? ((a = N(n.cwd) ?? N(n.path)),
        (t[12] = n.cwd),
        (t[13] = n.path),
        (t[14] = a))
      : (a = t[14]),
      (g = a),
      (h = i != null),
      (m = h
        ? u.formatDate(i, { year: `numeric`, month: `short`, day: `numeric` })
        : ``),
      (_ = h ? u.formatTime(i, { hour: `numeric`, minute: `2-digit` }) : ``),
      (t[3] = n.createdAt),
      (t[4] = n.cwd),
      (t[5] = n.path),
      (t[6] = n.updatedAt),
      (t[7] = u),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _));
  } else ((m = t[8]), (h = t[9]), (g = t[10]), (_ = t[11]));
  let v = _,
    y;
  t[15] === u
    ? (y = t[16])
    : ((y = u.formatMessage({
        id: `settings.dataControls.archivedChats.deleteAriaLabel`,
        defaultMessage: `Delete archived chat`,
        description: `Aria label for deleting an archived chat`,
      })),
      (t[15] = u),
      (t[16] = y));
  let b = y,
    x;
  t[17] === p
    ? (x = t[18])
    : ((x =
        p.length > 0
          ? p
          : (0, G.jsx)(f, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (t[17] = p),
      (t[18] = x));
  let S;
  t[19] === x
    ? (S = t[20])
    : ((S = (0, G.jsx)(`div`, {
        className: `truncate text-base font-medium`,
        children: x,
      })),
      (t[19] = x),
      (t[20] = S));
  let w;
  t[21] !== m || t[22] !== h || t[23] !== g || t[24] !== v
    ? ((w = h
        ? g
          ? (0, G.jsx)(f, {
              id: `settings.dataControls.archivedChats.dateTimeWithRepo`,
              defaultMessage: `{date}, {time} • {repo}`,
              description: `Date, time, and repo name for an archived chat`,
              values: { date: m, time: v, repo: g },
            })
          : (0, G.jsx)(f, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: m, time: v },
            })
        : null),
      (t[21] = m),
      (t[22] = h),
      (t[23] = g),
      (t[24] = v),
      (t[25] = w))
    : (w = t[25]);
  let T;
  t[26] === w
    ? (T = t[27])
    : ((T = (0, G.jsx)(`div`, {
        className: `mt-1 flex min-w-0 flex-col gap-0.5 text-sm`,
        children: (0, G.jsx)(`div`, {
          className: `truncate text-token-text-secondary`,
          children: w,
        }),
      })),
      (t[26] = w),
      (t[27] = T));
  let E;
  t[28] !== S || t[29] !== T
    ? ((E = (0, G.jsxs)(`div`, {
        className: `min-w-0 flex-1 text-left text-token-text-primary`,
        children: [S, T],
      })),
      (t[28] = S),
      (t[29] = T),
      (t[30] = E))
    : (E = t[30]);
  let D;
  t[31] !== b || t[32] !== i || t[33] !== s || t[34] !== o
    ? ((D = o
        ? (0, G.jsx)(C, {
            tooltipContent: b,
            children: (0, G.jsx)(ee, {
              "aria-label": b,
              className: `text-token-charts-red enabled:hover:bg-token-charts-red/10`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: i,
              onClick: s,
              children: (0, G.jsx)(j, { className: `icon-xs` }),
            }),
          })
        : null),
      (t[31] = b),
      (t[32] = i),
      (t[33] = s),
      (t[34] = o),
      (t[35] = D))
    : (D = t[35]);
  let O;
  t[36] !== i || t[37] !== l
    ? ((O = () => {
        i || l();
      }),
      (t[36] = i),
      (t[37] = l),
      (t[38] = O))
    : (O = t[38]);
  let k;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, G.jsx)(f, { ...H.unarchive })), (t[39] = k))
    : (k = t[39]);
  let A;
  t[40] !== i || t[41] !== a || t[42] !== O
    ? ((A = (0, G.jsx)(ee, {
        className: `shrink-0`,
        color: `secondary`,
        size: `toolbar`,
        disabled: i,
        loading: a,
        onClick: O,
        children: k,
      })),
      (t[40] = i),
      (t[41] = a),
      (t[42] = O),
      (t[43] = A))
    : (A = t[43]);
  let M;
  t[44] !== A || t[45] !== D
    ? ((M = (0, G.jsxs)(`div`, {
        className: `flex shrink-0 items-center gap-2`,
        children: [D, A],
      })),
      (t[44] = A),
      (t[45] = D),
      (t[46] = M))
    : (M = t[46]);
  let P;
  return (
    t[47] !== M || t[48] !== E
      ? ((P = (0, G.jsxs)(`div`, {
          className: `flex w-full items-center justify-between gap-3 px-4 py-3 hover:bg-token-list-hover-background`,
          children: [E, M],
        })),
        (t[47] = M),
        (t[48] = E),
        (t[49] = P))
      : (P = t[49]),
    P
  );
}
function ue(e) {
  let t = (0, B.c)(22),
    { state: n, onConfirm: r, onOpenChange: i } = e;
  if (n == null) return null;
  let a;
  t[0] === n.kind
    ? (a = t[1])
    : ((a = (0, G.jsx)(T, {
        children: (0, G.jsx)(E, {
          title:
            n.kind === `all`
              ? (0, G.jsx)(f, {
                  id: `settings.dataControls.archivedChats.deleteAllConfirm.title`,
                  defaultMessage: `Delete all archived local chats?`,
                  description: `Title for confirming deletion of all archived local chats`,
                })
              : (0, G.jsx)(f, {
                  id: `settings.dataControls.archivedChats.deleteConfirm.title`,
                  defaultMessage: `Delete archived chat?`,
                  description: `Title for confirming deletion of an archived chat`,
                }),
        }),
      })),
      (t[0] = n.kind),
      (t[1] = a));
  let o;
  t[2] === n.kind
    ? (o = t[3])
    : ((o = (0, G.jsx)(T, {
        className: `text-token-description-foreground`,
        children: (0, G.jsx)(`p`, {
          children:
            n.kind === `all`
              ? (0, G.jsx)(f, {
                  id: `settings.dataControls.archivedChats.deleteAllConfirm.body`,
                  defaultMessage: `This permanently deletes all archived chats`,
                  description: `Body copy in the delete all archived local chats confirmation dialog`,
                })
              : (0, G.jsx)(f, {
                  id: `settings.dataControls.archivedChats.deleteConfirm.body`,
                  defaultMessage: `This permanently deletes the archived chat`,
                  description: `Body copy in the delete archived chat confirmation dialog`,
                }),
        }),
      })),
      (t[2] = n.kind),
      (t[3] = o));
  let s;
  t[4] === i
    ? (s = t[5])
    : ((s = () => {
        i(!1);
      }),
      (t[4] = i),
      (t[5] = s));
  let c;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, G.jsx)(f, {
        id: `settings.dataControls.archivedChats.deleteConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for deleting archived chats`,
      })),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === s
    ? (l = t[8])
    : ((l = (0, G.jsx)(ee, { color: `ghost`, onClick: s, children: c })),
      (t[7] = s),
      (t[8] = l));
  let u;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, G.jsx)(f, { ...H.delete })), (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === r
    ? (d = t[11])
    : ((d = (0, G.jsx)(ee, { color: `danger`, onClick: r, children: u })),
      (t[10] = r),
      (t[11] = d));
  let p;
  t[12] !== l || t[13] !== d
    ? ((p = (0, G.jsx)(T, { children: (0, G.jsxs)(k, { children: [l, d] }) })),
      (t[12] = l),
      (t[13] = d),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] !== a || t[16] !== o || t[17] !== p
    ? ((m = (0, G.jsxs)(O, { children: [a, o, p] })),
      (t[15] = a),
      (t[16] = o),
      (t[17] = p),
      (t[18] = m))
    : (m = t[18]);
  let h;
  return (
    t[19] !== i || t[20] !== m
      ? ((h = (0, G.jsx)(D, {
          open: !0,
          showDialogClose: !1,
          onOpenChange: i,
          children: m,
        })),
        (t[19] = i),
        (t[20] = m),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
function de(e) {
  return e.kind === `all`
    ? `delete-archived-chats`
    : `delete-archived-thread-${e.thread.id}`;
}
export { Q as DataControlsSettings };
//# sourceMappingURL=data-controls.js.map
