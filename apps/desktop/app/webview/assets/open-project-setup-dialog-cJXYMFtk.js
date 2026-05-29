import { s as e } from "./chunk-Bj-mKKzh.js";
import { kr as t } from "./src-C.js";
import { Ia as n, Li as r } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as i, t as a } from "./jsx-runtime.js";
import { t as o } from "./clsx-BcPLHiun.js";
import {
  B as s,
  G as c,
  S as l,
  U as u,
  V as d,
  X as f,
  b as p,
  wt as m,
  y as h,
} from "./setting-storage.js";
import { n as g } from "./rpc-DqwD0euc.js";
import { t as _ } from "./use-global-state.js";
import { r as v } from "./toast-signal.js";
import { t as y } from "./button.js";
import { t as b } from "./x-C_RDKBp5.js";
import {
  a as x,
  d as S,
  i as C,
  l as w,
  n as T,
  r as ee,
  u as E,
} from "./dialog-layout.js";
import { n as D, r as O } from "./local-projects.js";
import { r as k } from "./modal-controller-state.js";
import { t as A } from "./folder.js";
var j = m(),
  M = e(i(), 1),
  N = a(),
  P = d({
    title: {
      id: `sidebarElectron.renameThreadDialogTitle`,
      defaultMessage: `Rename chat`,
      description: `Title for rename thread dialog`,
    },
    subtitle: {
      id: `sidebarElectron.renameThreadDialogSubtitle`,
      defaultMessage: `Keep it short and recognizable`,
      description: `Subtitle for rename thread dialog`,
    },
    placeholder: {
      id: `sidebarElectron.renameThreadDialogPlaceholder`,
      defaultMessage: `Add a title…`,
      description: `Placeholder for rename thread input`,
    },
    ariaLabel: {
      id: `sidebarElectron.renameThreadDialogAriaLabel`,
      defaultMessage: `Chat title`,
      description: `Aria label for rename thread input`,
    },
  });
function F(e) {
  let t = (0, j.c)(15),
    n,
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]))
    : (({
        initialValue: n,
        initialColor: i,
        showColorPicker: a,
        requireNonEmpty: o,
        trimOnSave: s,
        ...r
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s));
  let c = i === void 0 ? null : i,
    l = a === void 0 ? !1 : a,
    u = o === void 0 ? !1 : o,
    d = s === void 0 ? !1 : s,
    f = `${n}:${c ?? `default`}:${l}`,
    p;
  return (
    t[7] !== c ||
    t[8] !== n ||
    t[9] !== r ||
    t[10] !== u ||
    t[11] !== l ||
    t[12] !== f ||
    t[13] !== d
      ? ((p = (0, N.jsx)(
          I,
          {
            initialValue: n,
            initialColor: c,
            showColorPicker: l,
            requireNonEmpty: u,
            trimOnSave: d,
            ...r,
          },
          f,
        )),
        (t[7] = c),
        (t[8] = n),
        (t[9] = r),
        (t[10] = u),
        (t[11] = l),
        (t[12] = f),
        (t[13] = d),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
function I(e) {
  let t = (0, j.c)(55),
    {
      initialValue: n,
      initialColor: r,
      showColorPicker: i,
      requireNonEmpty: a,
      trimOnSave: o,
      onClose: s,
      onSave: l,
      messages: d,
    } = e,
    f = d === void 0 ? P : d,
    p = c(),
    m = (0, M.useRef)(null),
    [h, g] = (0, M.useState)(n),
    [_] = (0, M.useState)(r),
    v;
  t[0] === h ? (v = t[1]) : ((v = h.trim()), (t[0] = h), (t[1] = v));
  let b = v,
    S = a && b.length === 0,
    E;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => {
        (m.current?.focus(), m.current?.select());
      }),
      (t[2] = E))
    : (E = t[2]);
  let D = E,
    O;
  t[3] !== _ ||
  t[4] !== s ||
  t[5] !== l ||
  t[6] !== S ||
  t[7] !== o ||
  t[8] !== b ||
  t[9] !== h
    ? ((O = (e) => {
        if ((e.preventDefault(), S)) {
          D();
          return;
        }
        (l(o ? b : h, _), s());
      }),
      (t[3] = _),
      (t[4] = s),
      (t[5] = l),
      (t[6] = S),
      (t[7] = o),
      (t[8] = b),
      (t[9] = h),
      (t[10] = O))
    : (O = t[10]);
  let k = O,
    A;
  t[11] === s
    ? (A = t[12])
    : ((A = (e) => {
        e || s();
      }),
      (t[11] = s),
      (t[12] = A));
  let F;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = {
        onOpenAutoFocus: (e) => {
          (e.preventDefault(), D());
        },
        onFocusOutside: (e) => {
          (e.preventDefault(), D());
        },
      }),
      (t[13] = F))
    : (F = t[13]);
  let I;
  t[14] === f.title
    ? (I = t[15])
    : ((I = (0, N.jsx)(u, { ...f.title })), (t[14] = f.title), (t[15] = I));
  let R;
  t[16] === f.subtitle
    ? (R = t[17])
    : ((R = (0, N.jsx)(u, { ...f.subtitle })),
      (t[16] = f.subtitle),
      (t[17] = R));
  let z;
  t[18] !== I || t[19] !== R
    ? ((z = (0, N.jsx)(x, {
        children: (0, N.jsx)(C, { title: I, subtitle: R }),
      })),
      (t[18] = I),
      (t[19] = R),
      (t[20] = z))
    : (z = t[20]);
  let B;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        g(e.target.value);
      }),
      (t[21] = B))
    : (B = t[21]);
  let V;
  t[22] !== p || t[23] !== f.placeholder
    ? ((V = p.formatMessage(f.placeholder)),
      (t[22] = p),
      (t[23] = f.placeholder),
      (t[24] = V))
    : (V = t[24]);
  let H;
  t[25] !== p || t[26] !== f.ariaLabel
    ? ((H = p.formatMessage(f.ariaLabel)),
      (t[25] = p),
      (t[26] = f.ariaLabel),
      (t[27] = H))
    : (H = t[27]);
  let U = S ? !0 : void 0,
    W;
  t[28] !== V || t[29] !== H || t[30] !== U || t[31] !== h
    ? ((W = (0, N.jsx)(`input`, {
        ref: m,
        className: `rounded-xl border border-token-border px-3 py-2 text-base text-token-input-foreground shadow-sm outline-none`,
        value: h,
        onChange: B,
        placeholder: V,
        "aria-label": H,
        "aria-invalid": U,
        onFocus: L,
      })),
      (t[28] = V),
      (t[29] = H),
      (t[30] = U),
      (t[31] = h),
      (t[32] = W))
    : (W = t[32]);
  let G;
  t[33] === i ? (G = t[34]) : ((G = null), (t[33] = i), (t[34] = G));
  let K;
  t[35] !== W || t[36] !== G
    ? ((K = (0, N.jsxs)(x, { className: `gap-2`, children: [W, G] })),
      (t[35] = W),
      (t[36] = G),
      (t[37] = K))
    : (K = t[37]);
  let q;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, N.jsx)(u, {
        id: `sidebarElectron.renameThreadDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for rename thread dialog`,
      })),
      (t[38] = q))
    : (q = t[38]);
  let J;
  t[39] === s
    ? (J = t[40])
    : ((J = (0, N.jsx)(y, {
        color: `outline`,
        type: `button`,
        onClick: s,
        children: q,
      })),
      (t[39] = s),
      (t[40] = J));
  let Y;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, N.jsx)(u, {
        id: `sidebarElectron.renameThreadDialogSave`,
        defaultMessage: `Save`,
        description: `Save button label for rename thread dialog`,
      })),
      (t[41] = Y))
    : (Y = t[41]);
  let X;
  t[42] === S
    ? (X = t[43])
    : ((X = (0, N.jsx)(y, {
        color: `primary`,
        type: `submit`,
        disabled: S,
        children: Y,
      })),
      (t[42] = S),
      (t[43] = X));
  let Z;
  t[44] !== J || t[45] !== X
    ? ((Z = (0, N.jsx)(x, { children: (0, N.jsxs)(ee, { children: [J, X] }) })),
      (t[44] = J),
      (t[45] = X),
      (t[46] = Z))
    : (Z = t[46]);
  let Q;
  t[47] !== k || t[48] !== K || t[49] !== Z || t[50] !== z
    ? ((Q = (0, N.jsxs)(T, { as: `form`, onSubmit: k, children: [z, K, Z] })),
      (t[47] = k),
      (t[48] = K),
      (t[49] = Z),
      (t[50] = z),
      (t[51] = Q))
    : (Q = t[51]);
  let $;
  return (
    t[52] !== Q || t[53] !== A
      ? (($ = (0, N.jsx)(w, {
          open: !0,
          onOpenChange: A,
          contentProps: F,
          size: `compact`,
          children: Q,
        })),
        (t[52] = Q),
        (t[53] = A),
        (t[54] = $))
      : ($ = t[54]),
    $
  );
}
function L(e) {
  e.currentTarget.select();
}
function R({
  onClose: e,
  createProject: n,
  initialName: i = ``,
  initialSources: a = [],
}) {
  let s = c(),
    d = f(l),
    { data: m } = _(t.LOCAL_PROJECTS),
    { data: b } = _(t.PROJECT_ORDER),
    [k, j] = (0, M.useState)(i),
    [P, F] = (0, M.useState)(D(a)),
    [I, L] = (0, M.useState)(!1),
    [R, V] = (0, M.useState)(!1),
    H = (e) => {
      F((t) => D([...t, ...e]));
    };
  p(`workspace-root-option-picked`, (e) => {
    H([e.root]);
  });
  let U = () => {
      h.dispatchMessage(`electron-pick-workspace-root-option`, {});
    },
    W = async (t) => {
      if ((t.preventDefault(), !R)) {
        V(!0);
        try {
          if (n != null) await n({ name: k, sources: P });
          else {
            let e = g.projectWritableRoots?.addRoot;
            if (e == null)
              throw Error(`Project writable roots are unavailable`);
            let t = crypto.randomUUID(),
              n = await O.create({
                addWritableRoot: e,
                existingLocalProjects: m,
                name: k,
                now: Date.now(),
                projectId: t,
                projectOrder: b,
                setGlobalSetting: (e, t) => r(d, e, t),
                sources: P,
              });
            O.select(d, n);
          }
          e();
        } catch {
          (V(!1),
            d.get(v).danger(
              s.formatMessage({
                id: `projectSetup.createLocalProject.saveError`,
                defaultMessage: `Failed to create project`,
                description: `Toast shown when creating a local project fails`,
              }),
            ));
        }
      }
    },
    G = (e) => {
      (e.preventDefault(), L(!1), H(B(e.dataTransfer)));
    },
    K = (e) => {
      (e.key !== `Enter` && e.key !== ` `) || (e.preventDefault(), U());
    };
  return (0, N.jsx)(w, {
    open: !0,
    onOpenChange: (t) => {
      t || e();
    },
    size: `default`,
    children: (0, N.jsxs)(T, {
      as: `form`,
      onSubmit: (e) => {
        W(e);
      },
      className: `gap-0`,
      children: [
        (0, N.jsx)(x, {
          children: (0, N.jsx)(C, {
            title: (0, N.jsx)(S, {
              className: `contents`,
              children: (0, N.jsx)(u, {
                id: `projectSetup.createLocalProject.title`,
                defaultMessage: `Create local project`,
                description: `Title for the local project creation dialog`,
              }),
            }),
            subtitle: (0, N.jsx)(E, {
              className: `contents`,
              children: (0, N.jsx)(u, {
                id: `projectSetup.createLocalProject.subtitle`,
                defaultMessage: `Add folders Codex can read and edit for this project`,
                description: `Subtitle for the local project creation dialog`,
              }),
            }),
          }),
        }),
        (0, N.jsx)(x, {
          className: `gap-2`,
          children: (0, N.jsxs)(`label`, {
            className: `flex flex-col gap-2`,
            children: [
              (0, N.jsx)(`span`, {
                className: `text-sm font-medium text-token-text-primary`,
                children: (0, N.jsx)(u, {
                  id: `projectSetup.createLocalProject.nameLabel`,
                  defaultMessage: `Name`,
                  description: `Label for the local project name input`,
                }),
              }),
              (0, N.jsx)(`input`, {
                autoFocus: !0,
                className: `h-10 rounded-xl border border-token-border bg-token-input-background px-3 text-sm text-token-input-foreground outline-none placeholder:text-token-description-foreground focus:border-token-focus-border`,
                value: k,
                onChange: (e) => {
                  j(e.target.value);
                },
                placeholder: s.formatMessage({
                  id: `projectSetup.createLocalProject.namePlaceholder`,
                  defaultMessage: `Optional project name`,
                  description: `Placeholder for the optional local project name input`,
                }),
                "aria-label": s.formatMessage({
                  id: `projectSetup.createLocalProject.nameAriaLabel`,
                  defaultMessage: `Project name`,
                  description: `Accessible label for the optional local project name input`,
                }),
              }),
            ],
          }),
        }),
        (0, N.jsxs)(x, {
          className: `gap-2`,
          children: [
            (0, N.jsx)(`span`, {
              className: `text-sm font-medium text-token-text-primary`,
              children: (0, N.jsx)(u, {
                id: `projectSetup.createLocalProject.sourcesLabel`,
                defaultMessage: `Add sources`,
                description: `Label for the local project source folder picker`,
              }),
            }),
            (0, N.jsx)(`div`, {
              role: `button`,
              tabIndex: 0,
              "aria-label": s.formatMessage({
                id: `projectSetup.createLocalProject.sourcesAriaLabel`,
                defaultMessage: `Choose source folders`,
                description: `Accessible label for the local project source folder picker`,
              }),
              onClick: U,
              onKeyDown: K,
              onDragEnter: (e) => {
                (e.preventDefault(), L(!0));
              },
              onDragOver: (e) => {
                (e.preventDefault(),
                  (e.dataTransfer.dropEffect = `copy`),
                  L(!0));
              },
              onDragLeave: () => {
                L(!1);
              },
              onDrop: G,
              className: o(
                `flex min-h-32 cursor-interaction flex-col gap-3 rounded-lg border border-dashed border-token-border bg-token-bg-tertiary px-3 py-3 outline-none focus:border-token-focus-border`,
                I && `border-token-focus-border bg-token-bg-secondary`,
              ),
              children:
                P.length === 0
                  ? (0, N.jsxs)(`div`, {
                      className: `flex flex-1 flex-col items-center justify-center gap-1 text-center`,
                      children: [
                        (0, N.jsx)(A, {
                          className: `icon-sm text-token-description-foreground`,
                        }),
                        (0, N.jsx)(`div`, {
                          className: `text-sm text-token-text-primary`,
                          children: (0, N.jsx)(u, {
                            id: `projectSetup.createLocalProject.sourcesEmpty`,
                            defaultMessage: `Drop folders here or choose folders`,
                            description: `Empty state copy for the local project source folder picker`,
                          }),
                        }),
                        (0, N.jsx)(`div`, {
                          className: `text-xs text-token-description-foreground`,
                          children: (0, N.jsx)(u, {
                            id: `projectSetup.createLocalProject.sourcesFoldersOnly`,
                            defaultMessage: `Folders only for now`,
                            description: `Helper text noting that project sources currently only support folders`,
                          }),
                        }),
                      ],
                    })
                  : (0, N.jsx)(`div`, {
                      className: `grid grid-cols-2 gap-2`,
                      children: P.map((e) =>
                        (0, N.jsx)(
                          z,
                          {
                            source: e,
                            onRemove: () => {
                              F((t) => t.filter((t) => t !== e));
                            },
                          },
                          e,
                        ),
                      ),
                    }),
            }),
          ],
        }),
        (0, N.jsx)(x, {
          children: (0, N.jsxs)(ee, {
            children: [
              (0, N.jsx)(y, {
                color: `ghost`,
                type: `button`,
                onClick: e,
                children: (0, N.jsx)(u, {
                  id: `projectSetup.createLocalProject.cancel`,
                  defaultMessage: `Cancel`,
                  description: `Cancel button label for the local project creation dialog`,
                }),
              }),
              (0, N.jsx)(y, {
                color: `primary`,
                type: `submit`,
                loading: R,
                children: (0, N.jsx)(u, {
                  id: `projectSetup.createLocalProject.submit`,
                  defaultMessage: `Create project`,
                  description: `Submit button label for the local project creation dialog`,
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function z(e) {
  let t = (0, j.c)(24),
    { source: r, onRemove: i } = e,
    a = c(),
    o,
    s,
    l,
    u,
    d,
    f;
  t[0] !== a || t[1] !== r
    ? ((o = n(r) || r),
      (d = `group relative flex min-w-0 items-center gap-2 rounded-lg border border-token-border bg-token-bg-primary px-2 py-2 text-left`),
      (f = r),
      (s = `button`),
      (l = `absolute top-1 left-1 flex size-4 cursor-interaction items-center justify-center rounded bg-token-bg-primary text-token-text-tertiary opacity-0 shadow-sm ring-1 ring-token-border group-hover:opacity-100 focus-visible:opacity-100 focus-visible:ring-token-focus-border focus-visible:outline-none`),
      (u = a.formatMessage(
        {
          id: `projectSetup.createLocalProject.removeSource`,
          defaultMessage: `Remove {name}`,
          description: `Accessible label for removing a source from the local project creation dialog`,
        },
        { name: o },
      )),
      (t[0] = a),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s),
      (t[4] = l),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f))
    : ((o = t[2]), (s = t[3]), (l = t[4]), (u = t[5]), (d = t[6]), (f = t[7]));
  let p;
  t[8] === i
    ? (p = t[9])
    : ((p = (e) => {
        (e.stopPropagation(), i());
      }),
      (t[8] = i),
      (t[9] = p));
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, N.jsx)(b, { className: `icon-3xs` })), (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== s || t[12] !== l || t[13] !== u || t[14] !== p
    ? ((h = (0, N.jsx)(`button`, {
        type: s,
        className: l,
        "aria-label": u,
        onClick: p,
        children: m,
      })),
      (t[11] = s),
      (t[12] = l),
      (t[13] = u),
      (t[14] = p),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, N.jsx)(A, {
        className: `icon-sm shrink-0 text-token-description-foreground`,
      })),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] === o
    ? (_ = t[18])
    : ((_ = (0, N.jsx)(`span`, {
        className: `min-w-0 truncate text-sm text-token-text-primary`,
        children: o,
      })),
      (t[17] = o),
      (t[18] = _));
  let v;
  return (
    t[19] !== _ || t[20] !== d || t[21] !== f || t[22] !== h
      ? ((v = (0, N.jsxs)(`div`, {
          className: d,
          title: f,
          children: [h, g, _],
        })),
        (t[19] = _),
        (t[20] = d),
        (t[21] = f),
        (t[22] = h),
        (t[23] = v))
      : (v = t[23]),
    v
  );
}
function B(e) {
  let t = window.electronBridge?.getPathForFile,
    n = [],
    r = Array.from(e.items);
  for (let [i, a] of Array.from(e.files).entries()) {
    if (V(r[i]) === !1) continue;
    let e = t?.(a) ?? H(a);
    e != null && n.push(e);
  }
  return n;
}
function V(e) {
  let t = e?.webkitGetAsEntry?.();
  return t == null || t.isDirectory;
}
function H(e) {
  return `path` in e && typeof e.path == `string` && e.path.length > 0
    ? e.path
    : null;
}
var U = `New project`;
function W(e) {
  k(e, F, {
    initialValue: U,
    messages: {
      title: s({
        id: `projectSetup.createLocalProjectDialogTitle`,
        defaultMessage: `Name project`,
        description: `Title for the create local project dialog`,
      }),
      subtitle: s({
        id: `projectSetup.createLocalProjectDialogSubtitle`,
        defaultMessage: `Keep it short and recognizable`,
        description: `Subtitle for the create local project dialog`,
      }),
      placeholder: s({
        id: `projectSetup.createLocalProjectDialogPlaceholder`,
        defaultMessage: `Project name`,
        description: `Placeholder for the create local project input`,
      }),
      ariaLabel: s({
        id: `projectSetup.createLocalProjectDialogAriaLabel`,
        defaultMessage: `Project name`,
        description: `Aria label for the create local project input`,
      }),
    },
    requireNonEmpty: !0,
    trimOnSave: !0,
    onSave: (e) => {
      h.dispatchMessage(`electron-create-new-workspace-root-option`, {
        projectName: e,
      });
    },
  });
}
function G(e) {
  k(e, R);
}
function K() {
  h.dispatchMessage(`electron-add-new-workspace-root-option`, {});
}
function q({ hostId: e, setActive: t } = {}) {
  h.dispatchHostMessage({
    type: `open-create-remote-project-modal`,
    hostId: e,
    setActive: t,
  });
}
export { F as a, K as i, G as n, q as r, W as t };
//# sourceMappingURL=open-project-setup-dialog-cJXYMFtk.js.map
