import { s as e } from "./chunk-Bj-mKKzh.js";
import { Na as t } from "./app-server-manager-signals-DkRDRgNB.js";
import { n, t as r } from "./jsx-runtime.js";
import { t as i } from "./clsx-BcPLHiun.js";
import {
  G as a,
  Q as o,
  S as s,
  U as c,
  X as l,
  Z as u,
  wt as d,
} from "./setting-storage.js";
import { t as f } from "./product-logger-DusapRyT.js";
import { o as p } from "./statsig--EYRNU53.js";
import { t as ee } from "./thread-context-inputs-DBrOekVr.js";
import { n as te, t as m } from "./remote-connection-visibility.js";
import { t as h } from "./tooltip-CDzchJxN.js";
import { t as g } from "./button.js";
import { r as ne } from "./remote-projects.js";
import { n as _ } from "./composer-footer-C_v29uwU.js";
import { n as v, t as y } from "./home-row-layout-DTvEYEfe.js";
import { t as re } from "./with-window.js";
import { t as b } from "./use-is-remote-host-DScyzh-e.js";
import { r as x } from "./local-projects.js";
import {
  i as S,
  n as C,
  r as w,
  t as T,
} from "./open-project-setup-dialog-cJXYMFtk.js";
import { t as E } from "./folder.js";
import {
  g as D,
  l as O,
  u as k,
} from "./sidebar-project-group-signals-CEQTKcIf.js";
import { S as ie, t as A } from "./sidebar-thread-list-signals.js";
import { t as ae } from "./check-md.js";
import { t as oe } from "./select-project.js";
import { t as se } from "./compose.js";
import { n as j, t as ce } from "./add-project-menu-items.js";
import { a as M, i as N, r as P, t as le } from "./dropdown-DtQxMoJw.js";
import { t as ue } from "./globe-CnvlclXd.js";
import { t as de } from "./chevron-NmAOI_v1.js";
import { t as fe } from "./workspace-root-icon.js";
import { t as pe } from "./plus.js";
import { t as me } from "./use-connected-remote-connections.js";
import { u as he } from "./local-remote-selection-DqDRxu-D.js";
var ge = `1257656532`,
  _e = e(n()),
  F = r(),
  ve = (e) =>
    (0, F.jsxs)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, F.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M6.68457 2.66846C7.38445 2.66846 7.93651 2.78675 8.40527 2.97803C8.86652 3.16626 9.22191 3.41587 9.51562 3.62646C10.0869 4.03605 10.4781 4.33551 11.334 4.33545H14.9736C16.7177 4.33545 18.126 5.75581 18.126 7.50049V8.78271C18.1259 9.33955 17.6573 9.83039 17.0791 9.83057H3.20605V14.1655C3.20605 15.1822 4.02453 16.0004 5.02734 16.0005H9.83887C10.2059 16.0007 10.5039 16.2984 10.5039 16.6655C10.5039 17.0327 10.2059 17.3303 9.83887 17.3306H5.02734C3.28341 17.3304 1.87598 15.9101 1.87598 14.1655V9.17432C1.87594 9.17152 1.875 9.16833 1.875 9.16553C1.875 9.16226 1.87593 9.15902 1.87598 9.15576V5.8335C1.87598 4.08889 3.28341 2.66858 5.02734 2.66846H6.68457ZM5.02734 3.99854C4.02453 3.99866 3.20605 4.81683 3.20605 5.8335V8.50049H16.7959V7.50049C16.7959 6.48375 15.9766 5.66455 14.9736 5.66455H11.334C10.0235 5.66465 9.33097 5.13107 8.74023 4.70752C8.45288 4.50149 8.20685 4.33372 7.90234 4.20947C7.60531 4.0883 7.22568 3.99854 6.68457 3.99854H5.02734Z`,
          fill: `currentColor`,
        }),
        (0, F.jsx)(`path`, {
          d: `M17.5644 12.195C17.8241 11.9354 18.2452 11.9353 18.5048 12.195C18.7643 12.4546 18.7643 12.8757 18.5048 13.1354L16.79 14.8493L18.5048 16.5641C18.7642 16.8238 18.7644 17.2449 18.5048 17.5045C18.2452 17.7639 17.8241 17.7638 17.5644 17.5045L15.8496 15.7897L14.1357 17.5045C13.876 17.7639 13.4549 17.7639 13.1953 17.5045C12.9356 17.2448 12.9356 16.8228 13.1953 16.5631L14.9091 14.8493L13.1953 13.1354C12.9356 12.8757 12.9357 12.4547 13.1953 12.195C13.455 11.9353 13.876 11.9353 14.1357 12.195L15.8496 13.9088L17.5644 12.195Z`,
          fill: `currentColor`,
        }),
      ],
    }),
  ye = d();
function be(e) {
  let n = (0, ye.c)(42),
    {
      groups: r,
      selectedProjectIds: i,
      onSelectProjectId: o,
      keepOpenOnSelect: s,
      projectlessActionLabel: l,
      onSelectProjectless: u,
      footerItems: d,
      onAddLocalProject: f,
      onAddRemoteProject: p,
      emptyMessage: ee,
    } = e,
    te = s === void 0 ? !1 : s,
    m = a(),
    h = u != null && l != null,
    [g, ne] = (0, _e.useState)(``),
    _,
    v,
    y,
    b,
    x,
    S;
  if (
    n[0] !== h ||
    n[1] !== d ||
    n[2] !== r ||
    n[3] !== m ||
    n[4] !== te ||
    n[5] !== f ||
    n[6] !== p ||
    n[7] !== o ||
    n[8] !== g ||
    n[9] !== i
  ) {
    let e = g.trim().toLowerCase();
    v = r.filter((t) => {
      if (!e) return !0;
      let n = t.repositoryData?.rootFolder ?? ``;
      return [t.label, n, t.path ?? ``, t.hostDisplayName ?? ``].some((t) =>
        t.toLowerCase().includes(e),
      );
    });
    let a = new Map();
    (r.forEach((e) => {
      if (e.path == null) return;
      let t = a.get(e.label);
      if (t == null) {
        a.set(e.label, [e.path]);
        return;
      }
      t.push(e.path);
    }),
      (y = h || d != null || f != null || p != null));
    let s;
    n[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (e) => {
          ne(e.target.value);
        }),
        (n[16] = s))
      : (s = n[16]);
    let c;
    (n[17] === m
      ? (c = n[18])
      : ((c = m.formatMessage({
          id: `composer.localCwdDropdown.searchPlaceholder`,
          defaultMessage: `Search projects`,
          description: `Placeholder for searching the workspace root dropdown`,
        })),
        (n[17] = m),
        (n[18] = c)),
      n[19] !== g || n[20] !== c
        ? ((S = (0, F.jsx)(M, {
            value: g,
            onChange: s,
            placeholder: c,
            className: `mb-1`,
          })),
          (n[19] = g),
          (n[20] = c),
          (n[21] = S))
        : (S = n[21]),
      (_ = P.Section),
      (b = `flex max-h-[calc((1lh+var(--padding-row-y)*2)*5)] flex-col overflow-y-auto text-sm [--edge-fade-distance:1.5rem]`),
      (x = v.map((e) => {
        let n = e.repositoryData?.rootFolder,
          r = n && n !== e.label,
          s = !!e.isCodexWorktree,
          c = a.get(e.label) ?? [],
          l = c.length > 1 && e.path != null ? t(e.path, c) : null;
        return (0, F.jsx)(
          `div`,
          {
            className: `flex flex-col`,
            children: (0, F.jsxs)(N, {
              RightIcon: i.includes(e.projectId) ? ae : void 0,
              tooltipText: l ?? void 0,
              tooltipAlign: `center`,
              onSelect: (t) => {
                (te && t.preventDefault(), o(e.projectId));
              },
              children: [
                (0, F.jsx)(P.ItemIcon, {
                  size: `xs`,
                  children: (0, F.jsx)(fe, {
                    className: `icon-xs`,
                    isCodexWorktree: s,
                    isGitRepository: e.repositoryData != null,
                    isRemoteProject: e.projectKind === `remote`,
                  }),
                }),
                (0, F.jsxs)(`div`, {
                  className: `flex min-w-0 items-center gap-1`,
                  children: [
                    (0, F.jsx)(`span`, {
                      className: `truncate`,
                      children: e.label,
                    }),
                    e.hostDisplayName == null
                      ? null
                      : (0, F.jsx)(`span`, {
                          className: `truncate text-sm text-token-description-foreground`,
                          children: e.hostDisplayName,
                        }),
                    r
                      ? (0, F.jsx)(`span`, {
                          className: `truncate text-sm text-token-description-foreground`,
                          children: n,
                        })
                      : null,
                  ],
                }),
              ],
            }),
          },
          e.projectId,
        );
      })),
      (n[0] = h),
      (n[1] = d),
      (n[2] = r),
      (n[3] = m),
      (n[4] = te),
      (n[5] = f),
      (n[6] = p),
      (n[7] = o),
      (n[8] = g),
      (n[9] = i),
      (n[10] = _),
      (n[11] = v),
      (n[12] = y),
      (n[13] = b),
      (n[14] = x),
      (n[15] = S));
  } else
    ((_ = n[10]),
      (v = n[11]),
      (y = n[12]),
      (b = n[13]),
      (x = n[14]),
      (S = n[15]));
  let C;
  n[22] !== ee || n[23] !== v.length
    ? ((C =
        v.length === 0
          ? (0, F.jsx)(`div`, {
              className: `text-token-muted-foreground px-3 py-2 text-sm`,
              children:
                ee ??
                (0, F.jsx)(c, {
                  id: `composer.localCwdDropdown.noResults`,
                  defaultMessage: `No folders found`,
                  description: `Shown when searching for workspace roots returns no results`,
                }),
            })
          : null),
      (n[22] = ee),
      (n[23] = v.length),
      (n[24] = C))
    : (C = n[24]);
  let w;
  n[25] !== _ || n[26] !== b || n[27] !== x || n[28] !== C
    ? ((w = (0, F.jsxs)(_, { className: b, children: [x, C] })),
      (n[25] = _),
      (n[26] = b),
      (n[27] = x),
      (n[28] = C),
      (n[29] = w))
    : (w = n[29]);
  let T;
  n[30] !== h ||
  n[31] !== d ||
  n[32] !== f ||
  n[33] !== p ||
  n[34] !== u ||
  n[35] !== l ||
  n[36] !== y
    ? ((T = y
        ? (0, F.jsx)(re, {
            electron: !0,
            children: (0, F.jsxs)(F.Fragment, {
              children: [
                (0, F.jsx)(P.Separator, {}),
                (0, F.jsxs)(P.Section, {
                  className: `flex flex-col pb-1`,
                  children: [
                    d,
                    f
                      ? (0, F.jsx)(N, {
                          LeftIcon: j,
                          onSelect: f,
                          children: p
                            ? (0, F.jsx)(c, {
                                id: `composer.localCwdDropdown.addLocalWorkspaceRoot`,
                                defaultMessage: `Add local project`,
                                description: `Menu item that opens the local folder picker in the electron app when a remote project can also be added`,
                              })
                            : (0, F.jsx)(c, {
                                id: `composer.localCwdDropdown.addWorkspaceRoot`,
                                defaultMessage: `Add new project`,
                                description: `Menu item that opens the project picker in the electron app when only local projects can be added`,
                              }),
                        })
                      : null,
                    p
                      ? (0, F.jsx)(N, {
                          LeftIcon: ue,
                          onSelect: p,
                          children: (0, F.jsx)(c, {
                            id: `composer.localCwdDropdown.addRemoteWorkspaceRoot`,
                            defaultMessage: `Add remote project`,
                            description: `Menu item that opens the remote project setup dialog in the electron app`,
                          }),
                        })
                      : null,
                    h
                      ? (0, F.jsx)(N, {
                          LeftIcon: ve,
                          onSelect: u,
                          children: l,
                        })
                      : null,
                  ],
                }),
              ],
            }),
          })
        : null),
      (n[30] = h),
      (n[31] = d),
      (n[32] = f),
      (n[33] = p),
      (n[34] = u),
      (n[35] = l),
      (n[36] = y),
      (n[37] = T))
    : (T = n[37]);
  let E;
  return (
    n[38] !== S || n[39] !== w || n[40] !== T
      ? ((E = (0, F.jsxs)(F.Fragment, { children: [S, w, T] })),
        (n[38] = S),
        (n[39] = w),
        (n[40] = T),
        (n[41] = E))
      : (E = n[41]),
    E
  );
}
var xe = o(s, ({ get: e }) => {
  let t = e(D),
    n = e(O, { threadKeys: t, enabled: !0 }).groups,
    r = new Map(e(e(A, t)).map((e) => [e.task.key, e]));
  return ie(e(k), n, r);
});
function I(e) {
  let t = (0, ye.c)(81),
    {
      activeProjectIdOverride: n,
      allowRemoteProjects: r,
      disabled: a,
      hideLabel: o,
      onWorkspaceRootSelected: d,
      variant: re,
      isOpen: D,
      onOpenChange: O,
      triggerButton: k,
    } = e,
    ie = r === void 0 ? !0 : r,
    A = a === void 0 ? !1 : a,
    ae = o === void 0 ? !1 : o,
    M = re === void 0 ? `default` : re,
    N = l(s),
    ve = p(ge),
    I = (0, _e.useRef)(!1),
    we = u(xe),
    L = ie ? we : we.filter(Se),
    Te = b(),
    R = ve && !Te,
    Ee = te(),
    De = n !== void 0,
    Oe = !Te,
    { selectedRemoteProject: ke, selectedRemoteProjectId: Ae } = ne(),
    { remoteConnections: je } = m(),
    Me = me(je),
    { data: Ne, isLoading: Pe } = u(ee),
    z = ie && Ee && !Te && Me.length > 0,
    Fe = (e) => {
      f(N, { eventName: `codex_app_workspace_root_selected` });
      let t = L.find((t) => t.projectId === e);
      if (t == null) return;
      if ((he(N, t), t.projectKind === `remote`)) {
        oe(N, { projectId: t.projectId, projectKind: `remote` });
        return;
      }
      let n = x.select(N, t);
      d?.(n);
    },
    Ie;
  t[0] !== N || t[1] !== R
    ? ((Ie = () => {
        if ((f(N, { eventName: `codex_app_workspace_root_add_clicked` }), R)) {
          C(N);
          return;
        }
        S();
      }),
      (t[0] = N),
      (t[1] = R),
      (t[2] = Ie))
    : (Ie = t[2]);
  let B = Ie,
    Le;
  t[3] !== N || t[4] !== R
    ? ((Le = () => {
        if ((f(N, { eventName: `codex_app_workspace_root_add_clicked` }), R)) {
          C(N);
          return;
        }
        T(N);
      }),
      (t[3] = N),
      (t[4] = R),
      (t[5] = Le))
    : (Le = t[5]);
  let V = Le,
    H;
  t[6] === N
    ? (H = t[7])
    : ((H = () => {
        (f(N, { eventName: `codex_app_workspace_root_add_clicked` }),
          w({ setActive: !0 }));
      }),
      (t[6] = N),
      (t[7] = H));
  let Re = H,
    ze;
  t[8] !== d || t[9] !== N
    ? ((ze = () => {
        (f(N, { eventName: `codex_app_workspace_root_selected` }),
          he(N, null),
          oe(N, null),
          d?.(null));
      }),
      (t[8] = d),
      (t[9] = N),
      (t[10] = ze))
    : (ze = t[10]);
  let Be = ze,
    U = Ne?.roots?.[0] ?? null;
  De ? (U = n) : ie && (U = Ae ?? U);
  let W = U == null && Oe,
    Ve = Oe && U != null,
    He = M === `home` && L.length === 0 && !Te;
  if (!De && Pe && Ne == null && !He && Ae == null) return null;
  let G =
      U == null
        ? null
        : Ce({
            activeProjectId: U,
            groups: L,
            remoteConnections: je,
            selectedRemoteProject: ke,
          }),
    Ue =
      G?.hostDisplayName == null
        ? (G?.label ?? G?.path ?? null)
        : `${G.label} · ${G.hostDisplayName}`,
    We;
  t[11] !== G?.label || t[12] !== W
    ? ((We =
        G?.label ??
        (W
          ? (0, F.jsx)(c, {
              id: `composer.localCwdDropdown.homeWorkInProject`,
              defaultMessage: `Work in a project`,
              description: `Home page button label shown when no project is selected`,
            })
          : (0, F.jsx)(c, {
              id: `composer.localCwdDropdown.noActiveRoot`,
              defaultMessage: `Select your project`,
              description: `Shown when no active root is selected`,
            }))),
      (t[11] = G?.label),
      (t[12] = W),
      (t[13] = We))
    : (We = t[13]);
  let Ge = We,
    Ke;
  t[14] !== Ue || t[15] !== W
    ? ((Ke =
        Ue ??
        (W
          ? (0, F.jsx)(c, {
              id: `composer.localCwdDropdown.newChat`,
              defaultMessage: `New chat`,
              description: `Label shown when no project is selected in the electron app`,
            })
          : (0, F.jsx)(c, {
              id: `composer.localCwdDropdown.noActiveRoot`,
              defaultMessage: `Select your project`,
              description: `Shown when no active root is selected`,
            }))),
      (t[14] = Ue),
      (t[15] = W),
      (t[16] = Ke))
    : (Ke = t[16]);
  let K = Ke,
    qe;
  t[17] === z
    ? (qe = t[18])
    : ((qe = z
        ? (0, F.jsx)(c, {
            id: `composer.localCwdDropdown.addLocalWorkspaceRoot`,
            defaultMessage: `Add local project`,
            description: `Menu item that opens the local folder picker in the electron app when a remote project can also be added`,
          })
        : (0, F.jsx)(c, {
            id: `composer.localCwdDropdown.addWorkspaceRoot`,
            defaultMessage: `Add new project`,
            description: `Menu item that opens the project picker in the electron app when only local projects can be added`,
          })),
      (t[17] = z),
      (t[18] = qe));
  let Je = qe,
    Ye;
  t[19] !== G?.isCodexWorktree ||
  t[20] !== G?.projectKind ||
  t[21] !== G?.repositoryData ||
  t[22] !== K ||
  t[23] !== ae ||
  t[24] !== W
    ? ((Ye = () =>
        (0, F.jsx)(h, {
          tooltipContent: (0, F.jsx)(c, {
            id: `composer.localCwdDropdown.tooltip`,
            defaultMessage: `Select project`,
            description: `Tooltip for the active project selector in the composer footer`,
          }),
          children: (0, F.jsxs)(g, {
            size: `composerSm`,
            color: `ghost`,
            className: `min-w-0`,
            children: [
              W
                ? (0, F.jsx)(se, { className: `icon-2xs shrink-0` })
                : (0, F.jsx)(fe, {
                    isCodexWorktree: !!G?.isCodexWorktree,
                    isGitRepository: G?.repositoryData != null,
                    isRemoteProject: G?.projectKind === `remote`,
                    className: `icon-2xs shrink-0`,
                  }),
              ae
                ? null
                : (0, F.jsx)(`span`, {
                    className: `max-w-[180px] truncate text-left`,
                    children: K,
                  }),
              (0, F.jsx)(de, {
                className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
              }),
            ],
          }),
        })),
      (t[19] = G?.isCodexWorktree),
      (t[20] = G?.projectKind),
      (t[21] = G?.repositoryData),
      (t[22] = K),
      (t[23] = ae),
      (t[24] = W),
      (t[25] = Ye))
    : (Ye = t[25]);
  let Xe = Ye,
    Ze;
  t[26] !== G || t[27] !== A || t[28] !== Ge || t[29] !== W
    ? ((Ze = (e) => {
        let { onClick: t } = e === void 0 ? {} : e;
        return (0, F.jsxs)(g, {
          color: `ghost`,
          size: `composerSm`,
          className: `max-w-full gap-2`,
          disabled: A,
          onClick: t,
          children: [
            (0, F.jsxs)(y, {
              children: [
                (0, F.jsx)(v, {
                  children:
                    W || G == null
                      ? (0, F.jsx)(j, { className: `icon-xs shrink-0` })
                      : (0, F.jsx)(fe, {
                          isCodexWorktree: !!G?.isCodexWorktree,
                          isGitRepository: G?.repositoryData != null,
                          isRemoteProject: G?.projectKind === `remote`,
                          className: `icon-xs shrink-0`,
                        }),
                }),
                (0, F.jsx)(_, {
                  collapse: `xs`,
                  className: `max-w-40 truncate`,
                  children: Ge,
                }),
              ],
            }),
            (0, F.jsx)(de, {
              className: `icon-2xs shrink-0 text-token-input-placeholder-foreground`,
            }),
          ],
        });
      }),
      (t[26] = G),
      (t[27] = A),
      (t[28] = Ge),
      (t[29] = W),
      (t[30] = Ze))
    : (Ze = t[30]);
  let q = Ze,
    Qe;
  t[31] !== K || t[32] !== A
    ? ((Qe = () =>
        (0, F.jsxs)(`button`, {
          className: i(
            `heading-xl text-token-text-tertiary ml-2 -mt-1 flex min-w-0 items-center gap-1 font-normal transition-colors transition-background-colors duration-100 hover:text-token-foreground select-none`,
            A ? `cursor-default opacity-60` : `cursor-interaction`,
          ),
          type: `button`,
          disabled: A,
          children: [
            (0, F.jsx)(`span`, {
              className: `inline-flex max-w-[420px] min-w-0 items-center`,
              children: (0, F.jsx)(`span`, {
                className: `min-w-0 truncate`,
                children: K,
              }),
            }),
            (0, F.jsx)(de, {
              className: `icon-sm mt-1 shrink-0 self-center text-token-input-placeholder-foreground`,
            }),
          ],
        })),
      (t[31] = K),
      (t[32] = A),
      (t[33] = Qe))
    : (Qe = t[33]);
  let $e = Qe;
  if (He) {
    if (R && !z) {
      let e;
      return (
        t[34] !== V || t[35] !== q
          ? ((e = q({ onClick: V })), (t[34] = V), (t[35] = q), (t[36] = e))
          : (e = t[36]),
        e
      );
    }
    let e;
    t[37] !== q || t[38] !== k
      ? ((e = k ?? q()), (t[37] = q), (t[38] = k), (t[39] = e))
      : (e = t[39]);
    let n;
    t[40] !== z || t[41] !== Re
      ? ((n = z
          ? (0, F.jsxs)(F.Fragment, {
              children: [
                (0, F.jsx)(P.Separator, {}),
                (0, F.jsx)(P.Item, {
                  LeftIcon: ue,
                  onSelect: Re,
                  children: (0, F.jsx)(c, {
                    id: `sidebarElectron.addRemoteProject`,
                    defaultMessage: `Remote project`,
                    description: `Dropdown item for adding a remote project from the sidebar`,
                  }),
                }),
              ],
            })
          : null),
        (t[40] = z),
        (t[41] = Re),
        (t[42] = n))
      : (n = t[42]);
    let r;
    return (
      t[43] !== B ||
      t[44] !== V ||
      t[45] !== D ||
      t[46] !== O ||
      t[47] !== R ||
      t[48] !== e ||
      t[49] !== n
        ? ((r = (0, F.jsx)(ce, {
            localProjectSourcesEnabled: R,
            open: D,
            onOpenChange: O,
            triggerButton: e,
            onStartFromScratch: V,
            onUseExistingFolder: B,
            children: n,
          })),
          (t[43] = B),
          (t[44] = V),
          (t[45] = D),
          (t[46] = O),
          (t[47] = R),
          (t[48] = e),
          (t[49] = n),
          (t[50] = r))
        : (r = t[50]),
      r
    );
  }
  let J;
  t[51] === V
    ? (J = t[52])
    : ((J = (e) => {
        I.current && ((I.current = !1), e.preventDefault(), V());
      }),
      (t[51] = V),
      (t[52] = J));
  let et = M === `hero` ? `center` : `start`,
    Y;
  t[53] !== Xe || t[54] !== $e || t[55] !== q || t[56] !== k || t[57] !== M
    ? ((Y = k ?? (M === `hero` ? $e() : M === `home` ? q() : Xe())),
      (t[53] = Xe),
      (t[54] = $e),
      (t[55] = q),
      (t[56] = k),
      (t[57] = M),
      (t[58] = Y))
    : (Y = t[58]);
  let X;
  t[59] === U ? (X = t[60]) : ((X = U ? [U] : []), (t[59] = U), (t[60] = X));
  let tt;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = (0, F.jsx)(c, {
        id: `composer.localCwdDropdown.clearProject`,
        defaultMessage: `Don't work in a project`,
        description: `Menu item that clears the selected project and starts projectless chats`,
      })),
      (t[61] = tt))
    : (tt = t[61]);
  let nt = Ve ? Be : void 0,
    Z;
  t[62] !== B || t[63] !== Je || t[64] !== R
    ? ((Z = R
        ? (0, F.jsx)(P.Item, {
            LeftIcon: j,
            onSelect: () => {
              I.current = !0;
            },
            children: (0, F.jsx)(c, {
              id: `projectSetup.addProjectMenu.localProject`,
              defaultMessage: `Local project`,
              description: `Menu item that opens the local project creation flow`,
            }),
          })
        : (0, F.jsxs)(P.FlyoutSubmenuItem, {
            LeftIcon: j,
            label: Je,
            children: [
              (0, F.jsx)(P.Item, {
                LeftIcon: pe,
                onSelect: () => {
                  I.current = !0;
                },
                children: (0, F.jsx)(c, {
                  id: `projectSetup.addProjectMenu.startFromScratch`,
                  defaultMessage: `Start from scratch`,
                  description: `Menu item that creates a new local project folder`,
                }),
              }),
              (0, F.jsx)(P.Item, {
                LeftIcon: E,
                onSelect: B,
                children: (0, F.jsx)(c, {
                  id: `projectSetup.addProjectMenu.useExistingFolder`,
                  defaultMessage: `Use an existing folder`,
                  description: `Menu item that opens the existing folder picker`,
                }),
              }),
            ],
          })),
      (t[62] = B),
      (t[63] = Je),
      (t[64] = R),
      (t[65] = Z))
    : (Z = t[65]);
  let rt = z ? Re : void 0,
    Q;
  t[66] !== L ||
  t[67] !== Fe ||
  t[68] !== X ||
  t[69] !== nt ||
  t[70] !== Z ||
  t[71] !== rt
    ? ((Q = (0, F.jsx)(be, {
        groups: L,
        selectedProjectIds: X,
        onSelectProjectId: Fe,
        projectlessActionLabel: tt,
        onSelectProjectless: nt,
        footerItems: Z,
        onAddRemoteProject: rt,
      })),
      (t[66] = L),
      (t[67] = Fe),
      (t[68] = X),
      (t[69] = nt),
      (t[70] = Z),
      (t[71] = rt),
      (t[72] = Q))
    : (Q = t[72]);
  let $;
  return (
    t[73] !== A ||
    t[74] !== D ||
    t[75] !== O ||
    t[76] !== J ||
    t[77] !== et ||
    t[78] !== Y ||
    t[79] !== Q
      ? (($ = (0, F.jsx)(le, {
          open: D,
          onOpenChange: O,
          onCloseAutoFocus: J,
          align: et,
          disabled: A,
          triggerButton: Y,
          contentWidth: `workspace`,
          contentMaxHeight: `tall`,
          children: Q,
        })),
        (t[73] = A),
        (t[74] = D),
        (t[75] = O),
        (t[76] = J),
        (t[77] = et),
        (t[78] = Y),
        (t[79] = Q),
        (t[80] = $))
      : ($ = t[80]),
    $
  );
}
function Se(e) {
  return e.projectKind === `local`;
}
function Ce({
  activeProjectId: e,
  groups: t,
  remoteConnections: n,
  selectedRemoteProject: r,
}) {
  let i = t.find((t) => t.projectId === e) ?? null;
  if (i != null) return i;
  if (r == null || r.id !== e) return null;
  let a = n.find((e) => e.hostId === r.hostId) ?? null;
  return {
    projectId: r.id,
    projectKind: `remote`,
    hostId: r.hostId,
    hostDisplayName: a?.displayName ?? null,
    label: r.label,
    path: r.remotePath,
    repositoryData: null,
    isCodexWorktree: !1,
    threadKeys: [],
  };
}
export { ge as n, I as t };
//# sourceMappingURL=local-active-workspace-root-dropdown-C4n-MGra.js.map
