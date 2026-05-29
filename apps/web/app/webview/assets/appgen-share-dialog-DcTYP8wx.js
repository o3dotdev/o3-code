import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t, t as n } from "./jsx-runtime.js";
import {
  G as r,
  S as i,
  U as a,
  V as o,
  X as s,
  Y as c,
  wt as l,
  y as u,
} from "./setting-storage.js";
import { t as d } from "./use-auth.js";
import { p as f } from "./codex-api-bK--r_2t.js";
import { t as p } from "./use-debounced-value-BtOJx-Vp.js";
import { r as m } from "./toast-signal.js";
import { t as h } from "./tooltip-CDzchJxN.js";
import { t as g } from "./button.js";
import { t as _ } from "./spinner.js";
import {
  a as v,
  d as y,
  i as b,
  l as x,
  n as S,
  r as C,
  u as w,
} from "./dialog-layout.js";
import { r as T } from "./modal-controller-state.js";
import { t as E } from "./globe-CnvlclXd.js";
import { t as D } from "./copy-to-clipboard-C2Mq2hN-.js";
import { t as O } from "./building.js";
import { t as k } from "./arrow-up-right-lg-C37BA3DV.js";
import { t as A } from "./link-Cym8GZvE.js";
import {
  c as ee,
  d as te,
  f as ne,
  n as j,
  o as re,
  p as ie,
  r as ae,
  t as oe,
  u as se,
} from "./appgen-url-DZWguk-Q.js";
import { t as M } from "./lock.js";
import {
  a as ce,
  c as N,
  i as le,
  l as ue,
  n as de,
  o as fe,
  r as pe,
  t as me,
} from "./use-workspace-users.js";
var he = o({
    admins_only: {
      id: `appgenShareDialog.access.adminsOnly`,
      defaultMessage: `Just me`,
      description: `Workspace admin-only access policy label in the site share dialog`,
    },
    custom: {
      id: `appgenShareDialog.access.custom`,
      defaultMessage: `Only those invited`,
      description: `Custom access policy label in the site share dialog`,
    },
    public: {
      id: `appgenShareDialog.access.public`,
      defaultMessage: `Anyone on the internet`,
      description: `Public access policy label in the site share dialog`,
    },
    workspace_all: {
      id: `appgenShareDialog.access.workspaceAll`,
      defaultMessage: `Anyone in this workspace with the link`,
      description: `Workspace-wide access policy label in the site share dialog`,
    },
  }),
  P = l(),
  ge = e(t(), 1),
  F = n();
function _e(e) {
  let t = (0, P.c)(99),
    { onClose: n, projectId: o } = e,
    l = r(),
    u = s(i),
    { email: h } = d(),
    { data: g } = f(),
    { data: C, isError: w, isLoading: E } = c(re, o),
    D = c(ee, o),
    [O, k] = (0, ge.useState)(``),
    A;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = []), (t[0] = A))
    : (A = t[0]);
  let [j, oe] = (0, ge.useState)(A),
    M;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = []), (t[1] = M))
    : (M = t[1]);
  let [N, ue] = (0, ge.useState)(M),
    [de, fe] = (0, ge.useState)(null),
    pe;
  t[2] === O ? (pe = t[3]) : ((pe = O.trim()), (t[2] = O), (t[3] = pe));
  let he = pe,
    _e = p(he, 200),
    { data: De } = me(O),
    { data: I } = c(ae, _e),
    L = _e === he,
    { data: R } = c(ae, ``),
    z,
    B,
    V,
    H,
    U,
    W,
    G,
    K;
  if (
    t[4] !== I ||
    t[5] !== R ||
    t[6] !== g?.account_user_id ||
    t[7] !== l ||
    t[8] !== C?.access_policy ||
    t[9] !== N ||
    t[10] !== j ||
    t[11] !== De
  ) {
    ((H = Ae(I)),
      (U = Ae(je(I, R))),
      (z = C?.access_policy),
      (V = z?.allowed_users ?? []),
      (B = z?.allowed_groups ?? []));
    let e = new Set(V.map(Ce));
    W = ce({
      currentAccountUserId: g?.account_user_id,
      existingAccountUserIds: e,
      selectedAccountUserIds: j.map(Se),
      workspaceUsers: De,
    });
    let n = new Set(B.map(xe));
    G = new Set(U.map(be));
    let r;
    t[20] !== n || t[21] !== N
      ? ((r = (e) => !n.has(e.id) && !N.some((t) => t.id === e.id)),
        (t[20] = n),
        (t[21] = N),
        (t[22] = r))
      : (r = t[22]);
    let i = H.filter(r),
      a;
    (t[23] === l
      ? (a = t[24])
      : ((a = (e) => Ne(e, l)), (t[23] = l), (t[24] = a)),
      (K = [...i.map(a), ...(W?.map(Pe) ?? [])]),
      (t[4] = I),
      (t[5] = R),
      (t[6] = g?.account_user_id),
      (t[7] = l),
      (t[8] = C?.access_policy),
      (t[9] = N),
      (t[10] = j),
      (t[11] = De),
      (t[12] = z),
      (t[13] = B),
      (t[14] = V),
      (t[15] = H),
      (t[16] = U),
      (t[17] = W),
      (t[18] = G),
      (t[19] = K));
  } else
    ((z = t[12]),
      (B = t[13]),
      (V = t[14]),
      (H = t[15]),
      (U = t[16]),
      (W = t[17]),
      (G = t[18]),
      (K = t[19]));
  let Me = K,
    Fe;
  if (t[25] !== l || t[26] !== N || t[27] !== j) {
    let e;
    (t[29] === l
      ? (e = t[30])
      : ((e = (e) => Ne(e, l)), (t[29] = l), (t[30] = e)),
      (Fe = [...N.map(e), ...j.map(Pe)]),
      (t[25] = l),
      (t[26] = N),
      (t[27] = j),
      (t[28] = Fe));
  } else Fe = t[28];
  let Ie = Fe,
    Le;
  t[31] === C
    ? (Le = t[32])
    : ((Le =
        C == null
          ? (0, F.jsx)(a, {
              id: `appgenShareDialog.title`,
              defaultMessage: `Share`,
              description: `Title for the site sharing dialog`,
            })
          : (0, F.jsx)(a, {
              id: `appgenShareDialog.projectTitle`,
              defaultMessage: `Share {siteTitle}`,
              description: `Title for the site sharing dialog including the site title`,
              values: { siteTitle: C.title },
            })),
      (t[31] = C),
      (t[32] = Le));
  let Re = Le,
    q = de ?? z?.access_mode ?? null,
    ze = z != null && q !== z.access_mode,
    Be = Ie.length > 0,
    Ve;
  t[33] !== l || t[34] !== u
    ? ((Ve = function () {
        u.get(m).danger(
          l.formatMessage({
            id: `appgenShareDialog.save.error`,
            defaultMessage: `Unable to save sharing settings`,
            description: `Error toast shown when saving site sharing settings fails`,
          }),
        );
      }),
      (t[33] = l),
      (t[34] = u),
      (t[35] = Ve))
    : (Ve = t[35]);
  let J = Ve,
    He;
  t[36] !== z ||
  t[37] !== B ||
  t[38] !== V ||
  t[39] !== H ||
  t[40] !== q ||
  t[41] !== U ||
  t[42] !== n ||
  t[43] !== N ||
  t[44] !== j ||
  t[45] !== J ||
  t[46] !== D
    ? ((He = function () {
        if (z == null || q == null) {
          n();
          return;
        }
        D.mutateAsync({
          access_mode: q,
          allowed_user_emails: se([...V, ...j].map(ye)),
          ...te({
            accessGroups: H,
            knownAccessGroups: U,
            existingGroups: B,
            removedGroups: [],
            selectedGroups: N,
          }),
        }).then(
          () => {
            (oe([]), ue([]), fe(null));
          },
          () => {
            J();
          },
        );
      }),
      (t[36] = z),
      (t[37] = B),
      (t[38] = V),
      (t[39] = H),
      (t[40] = q),
      (t[41] = U),
      (t[42] = n),
      (t[43] = N),
      (t[44] = j),
      (t[45] = J),
      (t[46] = D),
      (t[47] = He))
    : (He = t[47]);
  let Ue = He,
    We;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((We = function () {
        (oe([]), ue([]), fe(null));
      }),
      (t[48] = We))
    : (We = t[48]);
  let Ge = We,
    Ke;
  t[49] !== J || t[50] !== D
    ? ((Ke = function (e) {
        return D.mutateAsync(e).then(ve, (e) => {
          throw (J(), e);
        });
      }),
      (t[49] = J),
      (t[50] = D),
      (t[51] = Ke))
    : (Ke = t[51]);
  let qe = Ke,
    Je;
  t[52] !== z || t[53] !== H || t[54] !== U || t[55] !== qe
    ? ((Je = function (e) {
        if (z == null) return Promise.resolve();
        switch (e.kind) {
          case `user`:
            return qe(ie(z, e.user.account_user_id));
          case `group`:
            return qe(
              ne({
                accessGroups: H,
                accessPolicy: z,
                group: e.group,
                knownAccessGroups: U,
              }),
            );
        }
      }),
      (t[52] = z),
      (t[53] = H),
      (t[54] = U),
      (t[55] = qe),
      (t[56] = Je))
    : (Je = t[56]);
  let Ye = Je,
    Xe;
  t[57] !== C || t[58] !== Ye || t[59] !== u
    ? ((Xe = function (e) {
        C != null &&
          T(u, we, {
            label: e.kind === `group` ? e.group.name : Oe(e.user),
            onConfirm: () => Ye(e),
            siteTitle: C.title,
          });
      }),
      (t[57] = C),
      (t[58] = Ye),
      (t[59] = u),
      (t[60] = Xe))
    : (Xe = t[60]);
  let Ze = Xe,
    Qe;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = { "aria-describedby": void 0 }), (t[61] = Qe))
    : (Qe = t[61]);
  let Y;
  t[62] === n
    ? (Y = t[63])
    : ((Y = (e) => {
        e || n();
      }),
      (t[62] = n),
      (t[63] = Y));
  let X;
  t[64] === Re
    ? (X = t[65])
    : ((X = (0, F.jsxs)(`div`, {
        className: `flex w-full flex-col`,
        children: [
          (0, F.jsx)(y, { className: `sr-only`, children: Re }),
          (0, F.jsx)(b, { title: Re, titleClassName: `truncate pr-8` }),
        ],
      })),
      (t[64] = Re),
      (t[65] = X));
  let Z;
  t[66] !== I ||
  t[67] !== z ||
  t[68] !== B ||
  t[69] !== V ||
  t[70] !== R ||
  t[71] !== g?.account_user_id ||
  t[72] !== h ||
  t[73] !== q ||
  t[74] !== l ||
  t[75] !== Me ||
  t[76] !== L ||
  t[77] !== w ||
  t[78] !== E ||
  t[79] !== W ||
  t[80] !== Ze ||
  t[81] !== C ||
  t[82] !== O ||
  t[83] !== G ||
  t[84] !== Ie
    ? ((Z = E
        ? (0, F.jsx)(v, {
            className: `py-12`,
            children: (0, F.jsx)(`div`, {
              className: `flex justify-center`,
              children: (0, F.jsx)(_, {}),
            }),
          })
        : w || C == null || z == null
          ? (0, F.jsx)(v, {
              className: `py-10`,
              children: (0, F.jsx)(`div`, {
                className: `text-center text-sm font-medium text-token-text-secondary`,
                children: (0, F.jsx)(a, {
                  id: `appgenShareDialog.error`,
                  defaultMessage: `Unable to load sharing settings`,
                  description: `Error state title in the site share dialog`,
                }),
              }),
            })
          : (0, F.jsxs)(F.Fragment, {
              children: [
                (0, F.jsx)(v, {
                  children: (0, F.jsx)(Te, {
                    liveUrl: C.current_live_url,
                    title: C.title,
                  }),
                }),
                (0, F.jsx)(v, {
                  children: (0, F.jsx)(le, {
                    ariaLabel: l.formatMessage({
                      id: `appgenShareDialog.workspaceUserSearch`,
                      defaultMessage: `Add people or groups`,
                      description: `Accessible label for searching workspace users and groups in the site share dialog`,
                    }),
                    emptyMessage: (0, F.jsx)(a, {
                      id: `appgenShareDialog.noWorkspaceUsers`,
                      defaultMessage: `No matching people or groups`,
                      description: `Empty state shown when no workspace users or groups match the site share dialog autocomplete query`,
                    }),
                    options:
                      !L || I == null || R == null || W == null ? void 0 : Me,
                    placeholder: l.formatMessage({
                      id: `appgenShareDialog.workspaceUserPlaceholder`,
                      defaultMessage: `Add people or groups`,
                      description: `Placeholder for the site share dialog workspace user and group autocomplete`,
                    }),
                    query: O,
                    selectedOptions: Ie,
                    onQueryChange: k,
                    onRemoveOption: (e) => {
                      let { target: t } = e;
                      bb143: switch (t.kind) {
                        case `group`:
                          ue((e) => e.filter((e) => e.id !== t.group.id));
                          break bb143;
                        case `user`:
                          oe((e) =>
                            e.filter(
                              (e) =>
                                e.account_user_id !== t.user.account_user_id,
                            ),
                          );
                      }
                    },
                    onSelectOption: (e) => {
                      let { target: t } = e;
                      bb157: switch (t.kind) {
                        case `group`:
                          ue((e) => [...e, t.group]);
                          break bb157;
                        case `user`:
                          oe((e) => [...e, t.user]);
                      }
                    },
                    getRemoveLabel: (e) =>
                      l.formatMessage(
                        {
                          id: `appgenShareDialog.removeSelectedUser`,
                          defaultMessage: `Remove {name}`,
                          description: `Accessible label for removing a selected workspace user from the site share dialog`,
                        },
                        { name: e.chipLabel ?? e.label },
                      ),
                  }),
                }),
                (0, F.jsx)(Ee, {
                  accessPolicy: z,
                  activeAccessGroups: B,
                  activeAccessUsers: V,
                  removableAccessGroupIds: G,
                  selectedAccessMode: q,
                  ownerEmail: h,
                  ownerId: g?.account_user_id,
                  onAccessModeChange: fe,
                  onRemoveAccessUser: (e) => {
                    Ze({ kind: `user`, user: e });
                  },
                  onRemoveAccessGroup: (e) => {
                    Ze({ kind: `group`, group: e });
                  },
                }),
              ],
            })),
      (t[66] = I),
      (t[67] = z),
      (t[68] = B),
      (t[69] = V),
      (t[70] = R),
      (t[71] = g?.account_user_id),
      (t[72] = h),
      (t[73] = q),
      (t[74] = l),
      (t[75] = Me),
      (t[76] = L),
      (t[77] = w),
      (t[78] = E),
      (t[79] = W),
      (t[80] = Ze),
      (t[81] = C),
      (t[82] = O),
      (t[83] = G),
      (t[84] = Ie),
      (t[85] = Z))
    : (Z = t[85]);
  let $e = E || w || C == null || z == null ? void 0 : C.current_live_url,
    Q;
  t[86] !== Ue ||
  t[87] !== ze ||
  t[88] !== Be ||
  t[89] !== $e ||
  t[90] !== D.isPending
    ? ((Q = (0, F.jsx)(ke, {
        hasPendingAccessChange: ze,
        hasPendingInvitees: Be,
        isSaving: D.isPending,
        liveUrl: $e,
        onCancelChanges: Ge,
        onDone: Ue,
      })),
      (t[86] = Ue),
      (t[87] = ze),
      (t[88] = Be),
      (t[89] = $e),
      (t[90] = D.isPending),
      (t[91] = Q))
    : (Q = t[91]);
  let $;
  t[92] !== X || t[93] !== Z || t[94] !== Q
    ? (($ = (0, F.jsxs)(S, { className: `px-4 py-3`, children: [X, Z, Q] })),
      (t[92] = X),
      (t[93] = Z),
      (t[94] = Q),
      (t[95] = $))
    : ($ = t[95]);
  let et;
  return (
    t[96] !== Y || t[97] !== $
      ? ((et = (0, F.jsx)(x, {
          open: !0,
          size: `compact`,
          contentClassName: `!overflow-visible`,
          contentProps: Qe,
          onOpenChange: Y,
          children: $,
        })),
        (t[96] = Y),
        (t[97] = $),
        (t[98] = et))
      : (et = t[98]),
    et
  );
}
function ve() {}
function ye(e) {
  return e.email;
}
function be(e) {
  return e.id;
}
function xe(e) {
  return e.id;
}
function Se(e) {
  return e.account_user_id;
}
function Ce(e) {
  return e.account_user_id;
}
function we(e) {
  let t = (0, P.c)(36),
    { label: n, onClose: r, onConfirm: i, siteTitle: o } = e,
    [s, c] = (0, ge.useState)(!1),
    l = !s,
    u;
  t[0] !== s || t[1] !== r
    ? ((u = (e) => {
        !e && !s && r();
      }),
      (t[0] = s),
      (t[1] = r),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== s || t[4] !== r || t[5] !== i
    ? ((d = (e) => {
        (e.preventDefault(),
          !s &&
            (c(!0),
            i().then(r, () => {
              c(!1);
            })));
      }),
      (t[3] = s),
      (t[4] = r),
      (t[5] = i),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === n
    ? (f = t[8])
    : ((f = (0, F.jsx)(y, {
        className: `contents`,
        children: (0, F.jsx)(a, {
          id: `appgenShareDialog.removeDialog.title`,
          defaultMessage: `Remove {label}?`,
          description: `Title for dialog confirming removal of a person's or group's site access`,
          values: { label: n },
        }),
      })),
      (t[7] = n),
      (t[8] = f));
  let p;
  t[9] === n
    ? (p = t[10])
    : ((p = (0, F.jsx)(
        `span`,
        { className: `font-medium text-token-text-primary`, children: n },
        `remove-access-label`,
      )),
      (t[9] = n),
      (t[10] = p));
  let m;
  t[11] !== o || t[12] !== p
    ? ((m = (0, F.jsx)(w, {
        className: `contents`,
        children: (0, F.jsx)(a, {
          id: `appgenShareDialog.removeDialog.description`,
          defaultMessage: `{label} will no longer be able to visit {siteTitle}`,
          description: `Warning shown when removing a person or group from a site's access list`,
          values: { label: p, siteTitle: o },
        }),
      })),
      (t[11] = o),
      (t[12] = p),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] !== f || t[15] !== m
    ? ((h = (0, F.jsx)(b, {
        title: f,
        titleClassName: `truncate pr-8`,
        subtitle: m,
      })),
      (t[14] = f),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let _;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, F.jsx)(a, {
        id: `appgenShareDialog.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for access removal confirmation dialog`,
      })),
      (t[17] = _))
    : (_ = t[17]);
  let T;
  t[18] !== s || t[19] !== r
    ? ((T = (0, F.jsx)(g, {
        color: `secondary`,
        disabled: s,
        onClick: r,
        children: _,
      })),
      (t[18] = s),
      (t[19] = r),
      (t[20] = T))
    : (T = t[20]);
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, F.jsx)(a, {
        id: `appgenShareDialog.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing site access`,
      })),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] === s
    ? (D = t[23])
    : ((D = (0, F.jsx)(g, {
        color: `danger`,
        loading: s,
        type: `submit`,
        children: E,
      })),
      (t[22] = s),
      (t[23] = D));
  let O;
  t[24] !== D || t[25] !== T
    ? ((O = (0, F.jsx)(v, { children: (0, F.jsxs)(C, { children: [T, D] }) })),
      (t[24] = D),
      (t[25] = T),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] !== O || t[28] !== d || t[29] !== h
    ? ((k = (0, F.jsxs)(S, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: d,
        children: [h, O],
      })),
      (t[27] = O),
      (t[28] = d),
      (t[29] = h),
      (t[30] = k))
    : (k = t[30]);
  let A;
  return (
    t[31] !== s || t[32] !== l || t[33] !== k || t[34] !== u
      ? ((A = (0, F.jsx)(x, {
          open: !0,
          shouldIgnoreClickOutside: s,
          showDialogClose: l,
          size: `compact`,
          onOpenChange: u,
          children: k,
        })),
        (t[31] = s),
        (t[32] = l),
        (t[33] = k),
        (t[34] = u),
        (t[35] = A))
      : (A = t[35]),
    A
  );
}
function Te(e) {
  let t = (0, P.c)(12),
    { liveUrl: n, title: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = oe(n)), (t[0] = n), (t[1] = i));
  let o = i,
    s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, F.jsx)(`span`, {
        className: `flex size-10 shrink-0 items-center justify-center`,
        children: (0, F.jsx)(j, { className: `icon-md` }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r
    ? (c = t[4])
    : ((c = (0, F.jsx)(`div`, {
        className: `truncate text-sm font-medium text-token-foreground`,
        children: r,
      })),
      (t[3] = r),
      (t[4] = c));
  let l;
  t[5] === o
    ? (l = t[6])
    : ((l =
        o ??
        (0, F.jsx)(a, {
          id: `appgenShareDialog.site.notPublished`,
          defaultMessage: `Not published yet`,
          description: `Label in the share dialog for a site without a published URL`,
        })),
      (t[5] = o),
      (t[6] = l));
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, F.jsx)(`div`, {
        className: `truncate text-xs text-token-text-tertiary`,
        children: l,
      })),
      (t[7] = l),
      (t[8] = u));
  let d;
  return (
    t[9] !== c || t[10] !== u
      ? ((d = (0, F.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg bg-token-bg-secondary p-3`,
          children: [
            s,
            (0, F.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [c, u],
            }),
          ],
        })),
        (t[9] = c),
        (t[10] = u),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Ee(e) {
  let t = (0, P.c)(43),
    {
      activeAccessGroups: n,
      activeAccessUsers: i,
      accessPolicy: o,
      removableAccessGroupIds: s,
      selectedAccessMode: c,
      ownerEmail: l,
      ownerId: u,
      onAccessModeChange: d,
      onRemoveAccessGroup: f,
      onRemoveAccessUser: p,
    } = e,
    m = r(),
    h,
    g,
    _,
    y,
    b,
    x,
    S;
  if (
    t[0] !== o.access_mode ||
    t[1] !== o.revision ||
    t[2] !== i ||
    t[3] !== d ||
    t[4] !== p ||
    t[5] !== l ||
    t[6] !== u ||
    t[7] !== c
  ) {
    let e = De({
        activeAccessUsers: i,
        currentAccountUserId: u,
        currentUserEmail: l,
      }),
      n = i.filter((t) => t.account_user_id !== e?.account_user_id);
    ((h = v),
      (b = `gap-3`),
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((x = (0, F.jsx)(`div`, {
            className: `text-sm font-medium text-token-foreground`,
            children: (0, F.jsx)(a, {
              id: `appgenShareDialog.access.title`,
              defaultMessage: `Who has access`,
              description: `Heading for access information in the site share dialog`,
            }),
          })),
          (t[15] = x))
        : (x = t[15]));
    let r = `${o.revision}:${o.access_mode}`,
      s = c ?? o.access_mode;
    (t[16] !== o.access_mode || t[17] !== d || t[18] !== r || t[19] !== s
      ? ((S = (0, F.jsx)(
          V,
          {
            initialAccessMode: o.access_mode,
            selectedAccessMode: s,
            onAccessModeChange: d,
          },
          r,
        )),
        (t[16] = o.access_mode),
        (t[17] = d),
        (t[18] = r),
        (t[19] = s),
        (t[20] = S))
      : (S = t[20]),
      (g = `flex flex-col gap-3`),
      (_ =
        e == null
          ? null
          : (0, F.jsx)(de, {
              avatarLabel: I(e),
              label: Oe(e),
              secondaryLabel: L(e),
              trailingContent: (0, F.jsx)(`span`, {
                className: `text-sm text-token-description-foreground`,
                children: (0, F.jsx)(a, {
                  id: `appgenShareDialog.permission.owner`,
                  defaultMessage: `Owner`,
                  description: `Label for the owner in the site share dialog`,
                }),
              }),
            })));
    let f;
    (t[21] === p
      ? (f = t[22])
      : ((f = (e) =>
          (0, F.jsx)(
            de,
            {
              avatarLabel: I(e),
              label: Oe(e),
              secondaryLabel: L(e),
              trailingContent: (0, F.jsx)(R, {
                onRemoveAccess: () => {
                  p(e);
                },
              }),
            },
            e.account_user_id,
          )),
        (t[21] = p),
        (t[22] = f)),
      (y = n.map(f)),
      (t[0] = o.access_mode),
      (t[1] = o.revision),
      (t[2] = i),
      (t[3] = d),
      (t[4] = p),
      (t[5] = l),
      (t[6] = u),
      (t[7] = c),
      (t[8] = h),
      (t[9] = g),
      (t[10] = _),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x),
      (t[14] = S));
  } else
    ((h = t[8]),
      (g = t[9]),
      (_ = t[10]),
      (y = t[11]),
      (b = t[12]),
      (x = t[13]),
      (S = t[14]));
  let C;
  if (t[23] !== n || t[24] !== m || t[25] !== f || t[26] !== s) {
    let e;
    (t[28] !== m || t[29] !== f || t[30] !== s
      ? ((e = (e) =>
          (0, F.jsx)(
            de,
            {
              label: e.name,
              secondaryLabel: m.formatMessage(
                {
                  id: `appgenShareDialog.access.groupSize`,
                  defaultMessage: `{count, plural, one {# member} other {# members}}`,
                  description: `Member count shown for a group in the site share dialog`,
                },
                { count: e.size },
              ),
              trailingContent: (0, F.jsx)(R, {
                onRemoveAccess: s.has(e.id)
                  ? () => {
                      f(e);
                    }
                  : void 0,
              }),
            },
            e.id,
          )),
        (t[28] = m),
        (t[29] = f),
        (t[30] = s),
        (t[31] = e))
      : (e = t[31]),
      (C = n.map(e)),
      (t[23] = n),
      (t[24] = m),
      (t[25] = f),
      (t[26] = s),
      (t[27] = C));
  } else C = t[27];
  let w;
  t[32] !== g || t[33] !== _ || t[34] !== y || t[35] !== C
    ? ((w = (0, F.jsxs)(`div`, { className: g, children: [_, y, C] })),
      (t[32] = g),
      (t[33] = _),
      (t[34] = y),
      (t[35] = C),
      (t[36] = w))
    : (w = t[36]);
  let T;
  return (
    t[37] !== h || t[38] !== b || t[39] !== x || t[40] !== S || t[41] !== w
      ? ((T = (0, F.jsxs)(h, { className: b, children: [x, S, w] })),
        (t[37] = h),
        (t[38] = b),
        (t[39] = x),
        (t[40] = S),
        (t[41] = w),
        (t[42] = T))
      : (T = t[42]),
    T
  );
}
function De({
  activeAccessUsers: e,
  currentAccountUserId: t,
  currentUserEmail: n,
}) {
  let r = n?.trim().toLowerCase();
  if (r != null && r.length > 0) {
    let t = e.find((e) => e.email?.trim().toLowerCase() === r);
    if (t != null) return t;
  }
  return t == null ? null : (e.find((e) => e.account_user_id === t) ?? null);
}
function Oe(e) {
  return e.name ?? e.email ?? e.account_user_id;
}
function I(e) {
  return e.name ?? e.email ?? e.account_user_id.replace(/[-_]/g, ` `);
}
function L(e) {
  return e.name == null ? null : e.email;
}
function R(e) {
  let t = (0, P.c)(4),
    { onRemoveAccess: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = [{ value: `visit` }]),
      (i = (0, F.jsx)(a, {
        id: `appgenShareDialog.permission.remove`,
        defaultMessage: `Remove access`,
        description: `Menu item for removing a person's site access`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let o;
  return (
    t[2] === n
      ? (o = t[3])
      : ((o = (0, F.jsx)(pe, {
          options: r,
          removeLabel: i,
          value: `visit`,
          renderLabel: z,
          onRemoveAccess: n,
        })),
        (t[2] = n),
        (t[3] = o)),
    o
  );
}
function z() {
  return (0, F.jsx)(B, {});
}
function B() {
  let e = (0, P.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, F.jsx)(a, {
          id: `appgenShareDialog.permission.visit`,
          defaultMessage: `Can visit`,
          description: `Visitor permission label in the site share dialog`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function V(e) {
  let t = (0, P.c)(8),
    { initialAccessMode: n, selectedAccessMode: r, onAccessModeChange: i } = e,
    a,
    o;
  if (t[0] !== n) {
    let e =
      n === `admins_only`
        ? [`workspace_all`, `custom`, `admins_only`]
        : [`workspace_all`, `custom`];
    ((a = ue), (o = e.map(U)), (t[0] = n), (t[1] = a), (t[2] = o));
  } else ((a = t[1]), (o = t[2]));
  let s;
  return (
    t[3] !== a || t[4] !== i || t[5] !== r || t[6] !== o
      ? ((s = (0, F.jsx)(a, {
          options: o,
          value: r,
          renderLabel: H,
          onChange: i,
        })),
        (t[3] = a),
        (t[4] = i),
        (t[5] = r),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function H(e) {
  return (0, F.jsx)(a, { ...he[e] });
}
function U(e) {
  return { Icon: W(e), value: e };
}
function W(e) {
  switch (e) {
    case `admins_only`:
    case `custom`:
      return M;
    case `workspace_all`:
      return O;
    case `public`:
      return E;
  }
}
function ke(e) {
  let t = (0, P.c)(27),
    {
      hasPendingAccessChange: n,
      hasPendingInvitees: o,
      isSaving: c,
      liveUrl: l,
      onCancelChanges: d,
      onDone: f,
    } = e,
    p = r(),
    _ = s(i),
    y;
  t[0] !== c || t[1] !== l
    ? ((y = K({ action: `copyLink`, isSaving: c, liveUrl: l })),
      (t[0] = c),
      (t[1] = l),
      (t[2] = y))
    : (y = t[2]);
  let b = y,
    x;
  t[3] !== c || t[4] !== l
    ? ((x = K({ action: `visit`, isSaving: c, liveUrl: l })),
      (t[3] = c),
      (t[4] = l),
      (t[5] = x))
    : (x = t[5]);
  let S = x,
    C;
  t[6] === f
    ? (C = t[7])
    : ((C = { invite: { onClick: f }, share: { onClick: f } }),
      (t[6] = f),
      (t[7] = C));
  let w;
  t[8] === d ? (w = t[9]) : ((w = { onClick: d }), (t[8] = d), (t[9] = w));
  let T;
  t[10] !== b ||
  t[11] !== p ||
  t[12] !== c ||
  t[13] !== l ||
  t[14] !== _ ||
  t[15] !== S
    ? ((T =
        l === void 0
          ? null
          : (0, F.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, F.jsx)(h, {
                  tooltipContent: S,
                  children: (0, F.jsx)(`span`, {
                    className: `inline-flex`,
                    children: (0, F.jsxs)(g, {
                      color: `outline`,
                      disabled: c || l == null,
                      size: `toolbar`,
                      onClick: () => {
                        l != null &&
                          u.dispatchMessage(`open-in-browser`, { url: l });
                      },
                      children: [
                        (0, F.jsx)(k, { className: `icon-xs` }),
                        (0, F.jsx)(a, {
                          id: `appgenShareDialog.visit`,
                          defaultMessage: `Visit`,
                          description: `Button label for opening a live site externally`,
                        }),
                      ],
                    }),
                  }),
                }),
                (0, F.jsx)(h, {
                  tooltipContent: b,
                  children: (0, F.jsx)(`span`, {
                    className: `inline-flex`,
                    children: (0, F.jsxs)(g, {
                      color: `outline`,
                      disabled: c || l == null,
                      size: `toolbar`,
                      onClick: () => {
                        l != null &&
                          D(l).then(() => {
                            _.get(m).info(
                              p.formatMessage({
                                id: `appgenShareDialog.copySuccess`,
                                defaultMessage: `Copied to clipboard`,
                                description: `Toast shown after copying a live site URL`,
                              }),
                            );
                          }, G);
                      },
                      children: [
                        (0, F.jsx)(A, { className: `icon-xs` }),
                        (0, F.jsx)(a, {
                          id: `appgenShareDialog.copyLink`,
                          defaultMessage: `Copy link`,
                          description: `Button label for copying a live site URL`,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })),
      (t[10] = b),
      (t[11] = p),
      (t[12] = c),
      (t[13] = l),
      (t[14] = _),
      (t[15] = S),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] === p
    ? (E = t[18])
    : ((E = p.formatMessage({
        id: `appgenShareDialog.saving`,
        defaultMessage: `Saving`,
        description: `Accessible label for the site share dialog save button while saving`,
      })),
      (t[17] = p),
      (t[18] = E));
  let O;
  return (
    t[19] !== n ||
    t[20] !== o ||
    t[21] !== c ||
    t[22] !== C ||
    t[23] !== w ||
    t[24] !== T ||
    t[25] !== E
      ? ((O = (0, F.jsx)(v, {
          className: `pt-4`,
          children: (0, F.jsx)(`div`, {
            className: `flex w-full items-center justify-end gap-3`,
            children: (0, F.jsx)(N, {
              actions: C,
              cancelAction: w,
              disabled: c,
              hasPendingAccessChange: n,
              hasPendingInvitees: o,
              idleActions: T,
              isSaving: c,
              savingAriaLabel: E,
              size: `toolbar`,
              spinnerClassName: `icon-xxs`,
            }),
          }),
        })),
        (t[19] = n),
        (t[20] = o),
        (t[21] = c),
        (t[22] = C),
        (t[23] = w),
        (t[24] = T),
        (t[25] = E),
        (t[26] = O))
      : (O = t[26]),
    O
  );
}
function G() {}
function K({ action: e, isSaving: t, liveUrl: n }) {
  if (n == null)
    switch (e) {
      case `copyLink`:
        return (0, F.jsx)(a, {
          id: `appgenShareDialog.copyLinkDisabled.notPublished`,
          defaultMessage: `Publish this site to copy its link`,
          description: `Tooltip explaining why the site share dialog copy link button is disabled`,
        });
      case `visit`:
        return (0, F.jsx)(a, {
          id: `appgenShareDialog.visitDisabled.notPublished`,
          defaultMessage: `Publish this site before visiting it`,
          description: `Tooltip explaining why the site share dialog visit button is disabled`,
        });
    }
  return t
    ? (0, F.jsx)(a, {
        id: `appgenShareDialog.footerActionDisabled.saving`,
        defaultMessage: `Sharing settings are still saving`,
        description: `Tooltip explaining why site share dialog footer actions are disabled while saving`,
      })
    : null;
}
function Ae(e) {
  return [
    ...(e?.workspace_groups.map((e) => ({ ...e, source: `workspace` })) ?? []),
    ...(e?.tenant_groups.map((e) => ({ ...e, source: `tenant` })) ?? []),
  ];
}
function je(...e) {
  return {
    tenant_groups: Me(e.flatMap((e) => e?.tenant_groups ?? [])),
    workspace_groups: Me(e.flatMap((e) => e?.workspace_groups ?? [])),
  };
}
function Me(e) {
  return Array.from(new Map(e.map((e) => [e.id, e])).values());
}
function Ne(e, t) {
  return {
    chipLabel: e.name,
    id: `group:${e.source}:${e.id}`,
    label: e.name,
    secondaryLabel: t.formatMessage(
      {
        id: `appgenShareDialog.access.groupSize`,
        defaultMessage: `{count, plural, one {# member} other {# members}}`,
        description: `Member count shown for a group in the site share dialog`,
      },
      { count: e.size },
    ),
    target: { kind: `group`, group: e },
  };
}
function Pe(e) {
  let t = fe(e);
  return {
    chipLabel: t.chipLabel,
    id: `user:${e.account_user_id}`,
    label: t.label,
    secondaryLabel: t.secondaryLabel,
    target: { kind: `user`, user: e },
  };
}
export { he as n, _e as t };
//# sourceMappingURL=appgen-share-dialog-DcTYP8wx.js.map
