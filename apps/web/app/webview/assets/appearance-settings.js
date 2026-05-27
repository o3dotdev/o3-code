import { s as e } from "./chunk.js";
import "./src-BLHmAhbF.js";
import { o as t } from "./gpu-tearing-debug-settings.js";
import {
  Ja as n,
  Ta as r,
  Za as i,
  qa as a,
} from "./app-server-manager-signals.js";
import { n as o, t as s } from "./jsx-runtime.js";
import "./codex-diff-css.js";
import { t as c } from "./clsx.js";
import "./react-dom.js";
import "./Combination.js";
import "./marked.esm.js";
import {
  H as l,
  S as u,
  W as d,
  X as f,
  Y as p,
  m,
  xt as h,
  y as g,
} from "./setting-storage.js";
import { r as _ } from "./product-logger.js";
import "./statsig.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./_baseOrderBy.js";
import "./use-is-dark.js";
import { r as v } from "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip.js";
import "./use-model-settings.js";
import { t as y } from "./button.js";
import "./reduced-motion-preference.js";
import { t as b } from "./spinner.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./model-queries.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./proxy.js";
import "./use-service-tier-settings.js";
import "./apps.js";
import "./x.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled.js";
import "./use-plugins.js";
import "./check-circle-filled.js";
import "./chrome-theme.js";
import "./parsePatchFiles.js";
import "./file-diff.js";
import "./terminal.js";
import "./info.js";
import { t as x } from "./with-window.js";
import "./use-resolved-theme-variant.js";
import "./window-app-action-helpers.js";
import "./use-is-fast-mode-enabled.js";
import "./dialog-layout.js";
import "./run-command.js";
import "./initial-route-atom.js";
import "./use-stable-callback.js";
import "./electron-menu-shortcuts.js";
import { n as S } from "./use-skills.js";
import "./modal-controller-state-.js";
import "./open-project-setup-dialog.js";
import "./check-md.js";
import "./chevron-right.js";
import { t as C } from "./use-start-new-conversation-B.js";
import "./_defineProperty.js";
import "./x-circle.js";
import "./search.js";
import "./skills.js";
import "./dropdown.js";
import "./popover.js";
import "./trash.js";
import { t as w } from "./chevron.js";
import "./format-relative-date-time.js";
import "./json-DAjHKBV7.js";
import "./settings.cog.js";
import "./mcp.js";
import "./copy.js";
import "./minus-D.js";
import "./plus.js";
import "./arrow-up.js";
import "./laptop.js";
import "./sortBy.js";
import "./permissions-mode-helpers.js";
import "./use-enter-behavior.js";
import "./toggle.js";
import "./permissions-mode-visibility.js";
import "./locale-resolver.js";
import { i as T } from "./settings-shared.js";
import "./folders.js";
import "./checkbox.js";
import { t as E } from "./settings-content-layout.js";
import { t as D } from "./avatar-overlay-analytics.js";
import { n as O, r as k, t as A } from "./codex-avatar.js";
import { t as j } from "./avatar-overlay-open-state-signal.js";
import "./moon.js";
import "./sun.js";
import "./alert-C_qI2eAS.js";
import { t as M } from "./use-recommended-skills.js";
import { n as N } from "./settings-row-D.js";
import { t as P } from "./settings-surface.js";
import "./external-agent-import-step-e.js";
import "./scroll-to-bottom-buton.js";
import { t as F } from "./arrow-top-right.js";
import "./hooks.js";
import "./onboarding-shell.js";
import { t as I } from "./settings-group.js";
import { t as L } from "./use-avatar-options.js";
import "./segmented-toggle.js";
import "./statsig-url-config.js";
import { n as R } from "./general-settings-ChHT-8De.js";
var z = e(o(), 1),
  B = h(),
  V = s();
function H(e) {
  let t = (0, B.c)(11),
    { avatar: n, className: r, size: i } = e,
    a = i === void 0 ? `md` : i,
    o = a === `sm` ? `size-8` : `size-16`,
    s;
  t[0] !== r || t[1] !== o
    ? ((s = c(
        `flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-token-border bg-token-bg-secondary`,
        o,
        r,
      )),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let l = n?.id ?? `default`,
    u = n?.assetRef,
    d = a === `sm` ? `scale-[0.42]` : `scale-75`,
    f = n?.spritesheetUrl,
    p;
  t[3] !== u || t[4] !== d || t[5] !== f
    ? ((p = (0, V.jsx)(A, { assetRef: u, className: d, spritesheetUrl: f })),
      (t[3] = u),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p))
    : (p = t[6]);
  let m;
  return (
    t[7] !== s || t[8] !== l || t[9] !== p
      ? ((m = (0, V.jsx)(`div`, {
          className: s,
          "data-avatar-id": l,
          children: p,
        })),
        (t[7] = s),
        (t[8] = l),
        (t[9] = p),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
function U(e) {
  let t = (0, B.c)(21),
    { avatarDirectory: n } = e,
    r = p(u),
    i = d(),
    a;
  t[0] !== i || t[1] !== r
    ? ((a = () => {
        r.get(v).danger(
          i.formatMessage({
            id: `settings.pets.custom.openFolderError`,
            defaultMessage: `Unable to open pet folder`,
            description: `Toast shown when opening the custom pet folder fails`,
          }),
        );
      }),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === o
    ? (s = t[4])
    : ((s = (e) => {
        e.success || o();
      }),
      (t[3] = o),
      (t[4] = s));
  let c;
  t[5] !== o || t[6] !== s
    ? ((c = { onSuccess: s, onError: o }), (t[5] = o), (t[6] = s), (t[7] = c))
    : (c = t[7]);
  let { mutate: f } = m(`open-file`, c),
    h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, V.jsx)(l, {
        id: `settings.pets.custom.title`,
        defaultMessage: `Custom pets`,
        description: `Heading for custom pet settings`,
      })),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] === n
    ? (g = t[10])
    : ((g = (0, V.jsx)(`span`, {
        className: `font-mono text-xs break-all`,
        children: n,
      })),
      (t[9] = n),
      (t[10] = g));
  let _;
  t[11] !== n || t[12] !== f
    ? ((_ = () => {
        f({ path: n, cwd: null, target: `fileManager`, openMode: `workspace` });
      }),
      (t[11] = n),
      (t[12] = f),
      (t[13] = _))
    : (_ = t[13]);
  let b, x;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, V.jsx)(l, {
        id: `settings.pets.custom.openFolder`,
        defaultMessage: `Open folder`,
        description: `Button label to open the local custom pet folder`,
      })),
      (x = (0, V.jsx)(F, { className: `icon-2xs` })),
      (t[14] = b),
      (t[15] = x))
    : ((b = t[14]), (x = t[15]));
  let S;
  t[16] === _
    ? (S = t[17])
    : ((S = (0, V.jsxs)(y, {
        color: `ghost`,
        onClick: _,
        size: `toolbar`,
        children: [b, x],
      })),
      (t[16] = _),
      (t[17] = S));
  let C;
  return (
    t[18] !== g || t[19] !== S
      ? ((C = (0, V.jsx)(N, { label: h, description: g, control: S })),
        (t[18] = g),
        (t[19] = S),
        (t[20] = C))
      : (C = t[20]),
    C
  );
}
function W(e) {
  let t = (0, B.c)(9),
    {
      avatarDirectory: n,
      avatarOptions: r,
      defaultExpanded: i,
      isCreatingCustomAvatar: a,
      isCustomAvatarLoadError: o,
      isLoadingCustomAvatars: s,
      onCreateCustomAvatar: c,
      onRefreshCustomAvatars: l,
    } = e,
    u = r === void 0 ? k : r,
    d = i === void 0 ? !1 : i,
    f = a === void 0 ? !1 : a,
    p = o === void 0 ? !1 : o,
    m = s === void 0 ? !1 : s,
    h;
  return (
    t[0] !== n ||
    t[1] !== u ||
    t[2] !== d ||
    t[3] !== f ||
    t[4] !== p ||
    t[5] !== m ||
    t[6] !== c ||
    t[7] !== l
      ? ((h = (0, V.jsx)(x, {
          electron: !0,
          children: (0, V.jsx)(G, {
            avatarDirectory: n,
            avatarOptions: u,
            defaultExpanded: d,
            isCreatingCustomAvatar: f,
            isCustomAvatarLoadError: p,
            isLoadingCustomAvatars: m,
            onCreateCustomAvatar: c,
            onRefreshCustomAvatars: l,
          }),
        })),
        (t[0] = n),
        (t[1] = u),
        (t[2] = d),
        (t[3] = f),
        (t[4] = p),
        (t[5] = m),
        (t[6] = c),
        (t[7] = l),
        (t[8] = h))
      : (h = t[8]),
    h
  );
}
function G(e) {
  let t = (0, B.c)(56),
    {
      avatarDirectory: r,
      avatarOptions: o,
      defaultExpanded: s,
      isCreatingCustomAvatar: u,
      isCustomAvatarLoadError: d,
      isLoadingCustomAvatars: p,
      onCreateCustomAvatar: m,
      onRefreshCustomAvatars: h,
    } = e,
    v = f(j),
    x = f(_),
    S = (0, z.useId)(),
    [C, T] = (0, z.useState)(s),
    { selectedAvatar: E, setSelectedAvatarId: k } = O(o),
    A,
    M,
    N,
    F,
    L,
    R;
  if (
    t[0] !== r ||
    t[1] !== o ||
    t[2] !== v ||
    t[3] !== S ||
    t[4] !== u ||
    t[5] !== d ||
    t[6] !== C ||
    t[7] !== p ||
    t[8] !== m ||
    t[9] !== h ||
    t[10] !== x ||
    t[11] !== E ||
    t[12] !== k
  ) {
    let e = o.filter(q),
      s = o.filter(K),
      f;
    t[19] === x
      ? (f = t[20])
      : ((f = (e, t) => {
          x.trackStructuredEvent(
            n,
            D({
              action: e,
              selectedAvatar: t,
              source: i.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
            }),
          );
        }),
        (t[19] = x),
        (t[20] = f));
    let _ = f,
      O;
    t[21] !== k || t[22] !== _
      ? ((O = (e) => {
          (k(e.id), _(a.CODEX_AVATAR_OVERLAY_ACTION_PET_SELECTED, e));
        }),
        (t[21] = k),
        (t[22] = _),
        (t[23] = O))
      : (O = t[23]);
    let j = O;
    ((R = `flex flex-col gap-[var(--padding-panel)]`),
      (N = I),
      (M = I.Content),
      (A = P));
    let z = C ? `rounded-t-lg` : `rounded-lg`,
      B;
    t[24] === z
      ? (B = t[25])
      : ((B = c(
          `flex w-full cursor-interaction items-center justify-between gap-4 p-3 text-left hover:bg-token-list-hover-background`,
          z,
        )),
        (t[24] = z),
        (t[25] = B));
    let H;
    t[26] === C
      ? (H = t[27])
      : ((H = () => {
          T(!C);
        }),
        (t[26] = C),
        (t[27] = H));
    let W;
    t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((W = (0, V.jsx)(`span`, {
          className: `min-w-0 text-sm text-token-text-primary`,
          children: (0, V.jsx)(l, {
            id: `settings.personalization.pets.title`,
            defaultMessage: `Pets`,
            description: `Heading above the pet picker in personalization settings`,
          }),
        })),
        (t[28] = W))
      : (W = t[28]);
    let G;
    t[29] !== d || t[30] !== E
      ? ((G = (0, V.jsxs)(`span`, {
          className: `flex min-w-0 flex-col gap-1`,
          children: [
            W,
            (0, V.jsx)(`span`, {
              className: `min-w-0 text-sm text-token-text-secondary`,
              children: d
                ? (0, V.jsx)(l, {
                    id: `settings.pets.loadCustomError`,
                    defaultMessage: `Unable to load custom pets`,
                    description: `Message shown when custom pet manifests fail to load`,
                  })
                : (0, V.jsx)(l, {
                    id: `settings.personalization.pets.current`,
                    defaultMessage: `{petName} selected`,
                    description: `Collapsed pet settings row summary`,
                    values: { petName: E.displayName },
                  }),
            }),
          ],
        })),
        (t[29] = d),
        (t[30] = E),
        (t[31] = G))
      : (G = t[31]);
    let Y = C && `rotate-180`,
      X;
    t[32] === Y
      ? (X = t[33])
      : ((X = c(
          `icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform`,
          Y,
        )),
        (t[32] = Y),
        (t[33] = X));
    let Z;
    (t[34] === X
      ? (Z = t[35])
      : ((Z = (0, V.jsx)(w, { className: X, "aria-hidden": !0 })),
        (t[34] = X),
        (t[35] = Z)),
      t[36] !== S ||
      t[37] !== C ||
      t[38] !== G ||
      t[39] !== Z ||
      t[40] !== B ||
      t[41] !== H
        ? ((F = (0, V.jsxs)(`button`, {
            type: `button`,
            className: B,
            "aria-controls": S,
            "aria-expanded": C,
            onClick: H,
            children: [G, Z],
          })),
          (t[36] = S),
          (t[37] = C),
          (t[38] = G),
          (t[39] = Z),
          (t[40] = B),
          (t[41] = H),
          (t[42] = F))
        : (F = t[42]),
      (L = C
        ? (0, V.jsxs)(`div`, {
            id: S,
            className: `flex flex-col divide-y divide-token-border bg-token-bg-secondary/20`,
            children: [
              (0, V.jsxs)(`div`, {
                className: `flex justify-end gap-2 p-3`,
                children: [
                  m
                    ? (0, V.jsx)(y, {
                        color: `secondary`,
                        loading: u,
                        onClick: () => {
                          (x.trackStructuredEvent(
                            n,
                            D({
                              action:
                                a.CODEX_AVATAR_OVERLAY_ACTION_CUSTOM_PET_CREATE_STARTED,
                              source: i.CODEX_AVATAR_OVERLAY_SOURCE_SETTINGS,
                              selectedAvatar: E,
                            }),
                          ),
                            m());
                        },
                        size: `toolbar`,
                        children: (0, V.jsx)(l, {
                          id: `settings.pets.custom.create.title`,
                          defaultMessage: `Create your own pet`,
                          description: `Button label for creating a custom Codex pet from settings`,
                        }),
                      })
                    : null,
                  h
                    ? (0, V.jsx)(y, {
                        color: `secondary`,
                        onClick: h,
                        size: `toolbar`,
                        children: (0, V.jsx)(l, {
                          id: `settings.pets.refresh`,
                          defaultMessage: `Refresh`,
                          description: `Button label to refresh custom pets from local manifests`,
                        }),
                      })
                    : null,
                  (0, V.jsx)(y, {
                    color: `secondary`,
                    onClick: () => {
                      (_(
                        v
                          ? a.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED
                          : a.CODEX_AVATAR_OVERLAY_ACTION_OPEN_REQUESTED,
                        E,
                      ),
                        g.dispatchMessage(`avatar-overlay-open`, {}));
                    },
                    size: `toolbar`,
                    children: v
                      ? (0, V.jsx)(l, {
                          id: `settings.personalization.pets.tuckAwayPet`,
                          defaultMessage: `Tuck Away Pet`,
                          description: `Button that closes the floating pet overlay`,
                        })
                      : (0, V.jsx)(l, {
                          id: `settings.personalization.pets.openPet`,
                          defaultMessage: `Wake Pet`,
                          description: `Button that opens the floating pet overlay`,
                        }),
                  }),
                ],
              }),
              p
                ? (0, V.jsxs)(`div`, {
                    className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                    children: [
                      (0, V.jsx)(b, { className: `icon-xs` }),
                      (0, V.jsx)(l, {
                        id: `settings.pets.loadingCustom`,
                        defaultMessage: `Loading custom pets`,
                        description: `Message shown while loading custom pet manifests`,
                      }),
                    ],
                  })
                : null,
              d
                ? (0, V.jsx)(`div`, {
                    className: `p-3 text-sm text-token-text-secondary`,
                    children: (0, V.jsx)(l, {
                      id: `settings.pets.loadCustomError`,
                      defaultMessage: `Unable to load custom pets`,
                      description: `Message shown when custom pet manifests fail to load`,
                    }),
                  })
                : null,
              e.map((e) =>
                (0, V.jsx)(
                  J,
                  { avatar: e, isSelected: e.id === E.id, onSelectAvatar: j },
                  e.id,
                ),
              ),
              r == null ? null : (0, V.jsx)(U, { avatarDirectory: r }),
              s.map((e) =>
                (0, V.jsx)(
                  J,
                  { avatar: e, isSelected: e.id === E.id, onSelectAvatar: j },
                  e.id,
                ),
              ),
            ],
          })
        : null),
      (t[0] = r),
      (t[1] = o),
      (t[2] = v),
      (t[3] = S),
      (t[4] = u),
      (t[5] = d),
      (t[6] = C),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = x),
      (t[11] = E),
      (t[12] = k),
      (t[13] = A),
      (t[14] = M),
      (t[15] = N),
      (t[16] = F),
      (t[17] = L),
      (t[18] = R));
  } else
    ((A = t[13]),
      (M = t[14]),
      (N = t[15]),
      (F = t[16]),
      (L = t[17]),
      (R = t[18]));
  let H;
  t[43] !== A || t[44] !== F || t[45] !== L
    ? ((H = (0, V.jsxs)(A, { children: [F, L] })),
      (t[43] = A),
      (t[44] = F),
      (t[45] = L),
      (t[46] = H))
    : (H = t[46]);
  let W;
  t[47] !== M || t[48] !== H
    ? ((W = (0, V.jsx)(M, { children: H })),
      (t[47] = M),
      (t[48] = H),
      (t[49] = W))
    : (W = t[49]);
  let G;
  t[50] !== N || t[51] !== W
    ? ((G = (0, V.jsx)(N, { children: W })),
      (t[50] = N),
      (t[51] = W),
      (t[52] = G))
    : (G = t[52]);
  let Y;
  return (
    t[53] !== R || t[54] !== G
      ? ((Y = (0, V.jsx)(`section`, { className: R, children: G })),
        (t[53] = R),
        (t[54] = G),
        (t[55] = Y))
      : (Y = t[55]),
    Y
  );
}
function K(e) {
  return e.id.startsWith(`custom:`);
}
function q(e) {
  return !e.id.startsWith(`custom:`);
}
function J(e) {
  let t = (0, B.c)(11),
    { avatar: n, isSelected: r, onSelectAvatar: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, V.jsx)(H, { avatar: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((o = r
        ? (0, V.jsx)(y, {
            color: `secondary`,
            disabled: !0,
            size: `toolbar`,
            children: (0, V.jsx)(l, {
              id: `settings.personalization.avatars.selected`,
              defaultMessage: `Selected`,
              description: `Label for the selected avatar`,
            }),
          })
        : (0, V.jsx)(y, {
            color: `secondary`,
            size: `toolbar`,
            onClick: () => {
              i(n);
            },
            children: (0, V.jsx)(l, {
              id: `settings.personalization.avatars.select`,
              defaultMessage: `Select`,
              description: `Button label to select an avatar`,
            }),
          })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = o))
    : (o = t[5]);
  let s;
  return (
    t[6] !== n.description || t[7] !== n.displayName || t[8] !== a || t[9] !== o
      ? ((s = (0, V.jsx)(N, {
          icon: a,
          label: n.displayName,
          description: n.description,
          control: o,
        })),
        (t[6] = n.description),
        (t[7] = n.displayName),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
var Y = `hatch-pet`,
  X = `https://github.com/openai/skills/blob/main/skills/.curated/hatch-pet/SKILL.md`;
async function Z({
  ensureSkillByName: e,
  findSkillByName: n,
  forceReloadSkills: r,
  installSkill: i,
}) {
  return `${await t({ ensureSkillByName: e, fallbackSkillPath: X, findSkillByName: n, forceReloadSkills: r, installSkill: i, skillName: Y })} create a pet based on what you know about me`;
}
function Q(e) {
  let t = (0, B.c)(2),
    { defaultExpanded: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, V.jsx)(x, {
          electron: !0,
          children: (0, V.jsx)($, { defaultExpanded: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function $({ defaultExpanded: e }) {
  let [t, n] = (0, z.useState)(!1),
    {
      avatarDirectory: i,
      avatarOptions: a,
      isError: o,
      isLoading: s,
      refetch: c,
    } = L(),
    l = C(),
    { findSkillByName: u, forceReload: d } = S(void 0, r),
    { ensureSkillByName: f, installSkill: p } = M({
      hostId: r,
      loadOnMount: !1,
    }),
    m = async () => {
      n(!0);
      try {
        l({
          prefillPrompt: await Z({
            ensureSkillByName: f,
            findSkillByName: u,
            forceReloadSkills: d,
            installSkill: p,
          }),
        });
      } finally {
        n(!1);
      }
    };
  return (0, V.jsx)(W, {
    avatarDirectory: i,
    avatarOptions: a,
    defaultExpanded: e,
    isCreatingCustomAvatar: t,
    isCustomAvatarLoadError: o,
    isLoadingCustomAvatars: s,
    onCreateCustomAvatar: () => {
      m();
    },
    onRefreshCustomAvatars: c,
  });
}
function ee() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, V.jsxs)(E, {
          title: (0, V.jsx)(T, { slug: `appearance` }),
          children: [(0, V.jsx)(R, {}), (0, V.jsx)(Q, {})],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
export { ee as AppearanceSettings };
//# sourceMappingURL=appearance-settings.js.map
