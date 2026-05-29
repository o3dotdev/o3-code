import { s as e } from "./chunk-Bj-mKKzh.js";
import { Ci as t } from "./src-C.js";
import {
  Js as n,
  Xs as r,
  kt as i,
  qa as a,
  to as o,
  zs as s,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as c, t as l } from "./jsx-runtime.js";
import { t as u } from "./clsx-BcPLHiun.js";
import {
  $ as d,
  G as f,
  S as p,
  U as m,
  X as h,
  d as g,
  l as _,
  ot as v,
} from "./setting-storage.js";
import { r as y } from "./toast-signal.js";
import { t as b } from "./build-start-conversation-params-DHCgiUKY.js";
import { n as x, t as S } from "./skill-utils.js";
import { t as C } from "./use-collaboration-mode-CQFe-Ilp.js";
import { c as w } from "./use-permissions-mode.js";
import { t as ee } from "./use-service-tier-settings.js";
import { n as T, r as E } from "./projectless-thread.js";
import { t as D } from "./check-circle-filled.js";
import { n as O, t as k } from "./recommended-skill-statsig-overrides.js";
var A = e(o(), 1),
  te = 3,
  j = `ambient-suggestions:default-statuses`,
  M = i(j, {}),
  N = g(p, `ambient-suggestions`, ({ projectRoot: e }) => ({
    enabled: e != null,
  })),
  P = g(
    p,
    `ambient-suggestions-refresh`,
    ({ hostId: e, plan: n, projectRoot: r }) => ({
      enabled: r != null,
      gcTime: t(n),
      params: { hostId: e, projectRoot: r },
      select: () => !0,
      staleTime: t(n),
    }),
  ),
  F = g(p, `email-domain-mail-provider`, ({ domain: e, enabled: t }) => ({
    enabled: t && e != null,
    params: e == null ? void 0 : { domain: e },
    staleTime: 1 / 0,
  })),
  I = v(p, (e) => null),
  L = d(p, (e, { get: t }) => U(G(t, e))),
  R = d(p, (e, { get: t }) => {
    let n = t(N, e);
    return n.data != null || n.isError;
  }),
  z = d(p, ({ hostId: e, projectRoot: t }, { get: n }) => {
    let r = n(N, { hostId: e, projectRoot: t }).data?.file;
    return J(r?.currentSuggestionIds ?? [], r?.suggestions ?? []);
  });
function B(e, t, n, r) {
  let i = W(t);
  e.set(M, (e) => {
    let a = e ?? {},
      o = a[i] ?? q(t);
    return o?.[n] === r ? a : { ...a, [i]: { ...o, [n]: r } };
  });
}
function V(e, t) {
  e.set(M, (e) => {
    if (e == null) return e;
    let n = !1,
      r = Object.fromEntries(
        Object.entries(e).map(([e, r]) => {
          if (r == null || r[t] == null) return [e, r];
          let { [t]: i, ...a } = r;
          return ((n = !0), [e, Object.keys(a).length === 0 ? void 0 : a]);
        }),
      );
    return n ? r : e;
  });
}
function H(e, t, n, r) {
  e.query.snapshot(N, t).setData((e) =>
    e == null
      ? e
      : {
          file: {
            ...e.file,
            suggestions: e.file.suggestions.map((e) =>
              e.id === n ? { ...e, status: r } : e,
            ),
          },
        },
  );
}
function U(e) {
  return e == null ? null : Object.keys(e);
}
function W({ hostId: e, projectRoot: t }) {
  return `${j}:${e}:${K(t)}`;
}
function G(e, t) {
  let n = W(t);
  return e(M)?.[n] ?? q(t);
}
function K(e) {
  return e ?? ``;
}
function q(e) {
  return s(W(e), void 0);
}
function J(e, t) {
  let n = [];
  for (let r of e) {
    let e = (0, A.default)(t, ({ id: e }) => e === r);
    if ((e?.status === `pending` && n.push(e), n.length === te)) break;
  }
  return n;
}
var Y = e(c()),
  X = l(),
  Z = (e) =>
    (0, X.jsx)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, X.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M12.4322 4.81596C12.159 4.68505 11.8411 4.68505 11.5679 4.81596L2.31421 9.25003L11.5679 13.6841C11.8411 13.815 12.159 13.815 12.4322 13.6841L21.6859 9.25003L12.4322 4.81596ZM10.7037 3.01233C11.5233 2.61959 12.4768 2.61959 13.2964 3.01233L22.5501 7.44639C23.8957 8.09114 24.0456 9.86518 23 10.7617V15C23 15.5523 22.5523 16 22 16C21.4478 16 21 15.5523 21 15V11.7964L19.5 12.5152V15.8888C19.5 17.2412 18.8167 18.5019 17.6837 19.2402L16.9133 19.7422C13.9268 21.6881 10.0733 21.6881 7.08675 19.7422L6.31636 19.2402C5.18333 18.5019 4.50004 17.2412 4.50004 15.8888V12.5151L1.44997 11.0537C-0.0643805 10.328 -0.0643747 8.17202 1.44997 7.44639L10.7037 3.01233ZM6.50004 13.4735V15.8888C6.50004 16.565 6.84168 17.1954 7.4082 17.5645L8.17859 18.0665C10.5014 19.58 13.4986 19.58 15.8215 18.0665L16.5919 17.5645C17.1584 17.1954 17.5 16.565 17.5 15.8888V13.4735L13.2964 15.4877C12.4768 15.8805 11.5233 15.8805 10.7037 15.4877L6.50004 13.4735Z`,
        fill: `currentColor`,
      }),
    }),
  Q = `onboarding-assistant`,
  $ = `onboard-new-user`,
  ne = `skills/.curated/onboard-new-user`;
function re({
  completed: e,
  hostId: t,
  onLocalConversationCreated: n,
  projectRoot: r,
}) {
  let i = h(p),
    a = f(),
    { agentMode: o, isAgentModePending: s } = w({
      conversationId: null,
      cwdOverride: r,
      hostId: t,
    }),
    { activeMode: c } = C(null),
    { serviceTierSettings: l } = ee(null),
    d = O(),
    [g, _] = (0, Y.useState)(!1),
    v = a.formatMessage({
      id: `electron.onboarding.assistantSuggestion.title`,
      defaultMessage: `Onboard me`,
      description: `Title for the post-onboarding card that starts the personal assistant onboarding flow`,
    }),
    b = a.formatMessage({
      id: `electron.onboarding.assistantSuggestion.description`,
      defaultMessage: `Learn Codex through a guided tour`,
      description: `Description for the post-onboarding card that starts the personal assistant onboarding flow`,
    }),
    x = a.formatMessage({
      id: `electron.onboarding.assistantSuggestion.prompt`,
      defaultMessage: `Onboard me!`,
      description: `Prompt sent after selecting the personal assistant onboarding card`,
    }),
    S = s || r == null,
    T = async () => {
      if (!(S || e || g || r == null)) {
        _(!0);
        try {
          (await oe({
            agentMode: o,
            collaborationMode: c,
            hostId: t,
            onLocalConversationCreated: n,
            projectRoot: r,
            prompt: await ae({
              hostId: t,
              prompt: x,
              skillName: $,
              skillsResponse: await ie({
                hostId: t,
                invalidateSkills: () => {
                  i.queryClient.invalidateQueries({ queryKey: [`skills`] });
                },
                repoPath: ne,
                skillId: $,
                skillStatsigOverride: k(d, $),
              }),
            }),
            serviceTier: l.serviceTier,
          }),
            B(i, { hostId: t, projectRoot: r }, Q, `accepted`));
        } catch {
          i.get(y).danger(
            (0, X.jsx)(m, {
              id: `home.ambientSuggestions.startError`,
              defaultMessage: `Unable to start this suggestion`,
              description: `Toast shown when launching an ambient suggestion fails`,
            }),
            { id: `ambient-suggestion-start-error` },
          );
        } finally {
          _(!1);
        }
      }
    };
  return (0, X.jsxs)(`button`, {
    type: `button`,
    className: u(
      `relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left`,
      e || S || g
        ? `cursor-default`
        : `cursor-interaction enabled:hover:bg-token-foreground/[0.02]`,
      (S || g) && !e && `opacity-70`,
      !e && `shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]`,
    ),
    disabled: S || g || e,
    onClick: () => {
      T();
    },
    children: [
      (0, X.jsx)(`span`, {
        className: u(`flex h-5 shrink-0 items-center`, e && `opacity-30`),
        children: (0, X.jsx)(Z, {
          "aria-hidden": !0,
          className: `size-5 shrink-0`,
        }),
      }),
      (0, X.jsxs)(`span`, {
        className: u(
          `flex w-full min-w-0 flex-col gap-1 text-base`,
          e && `opacity-30`,
        ),
        children: [
          (0, X.jsx)(`span`, {
            className: `line-clamp-1 leading-[18px] text-token-text-primary`,
            children: v,
          }),
          (0, X.jsx)(`span`, {
            className: `line-clamp-3 leading-[18px] text-token-text-tertiary`,
            children: b,
          }),
        ],
      }),
      e
        ? (0, X.jsx)(D, {
            "aria-hidden": `true`,
            className: `absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]`,
          })
        : null,
    ],
  });
}
async function ie({
  hostId: e,
  invalidateSkills: t,
  repoPath: n,
  skillId: i,
  skillStatsigOverride: a,
}) {
  let o = await _(`install-recommended-skill`, {
    params: {
      hostId: e,
      installRoot: null,
      repoPath: n,
      skillId: i,
      skillStatsigOverride: a,
    },
  });
  if (!o.success) throw Error(o.error ?? `Unable to install skill`);
  return (t(), r(`list-skills-for-host`, { forceReload: !0, hostId: e }));
}
async function ae({ hostId: e, prompt: t, skillName: n, skillsResponse: i }) {
  if (n == null) return t;
  let a = S(
    i ?? (await r(`list-skills-for-host`, { forceReload: !0, hostId: e })),
    n,
  );
  return a == null ? t : `${t} ${x({ name: n, path: a.path })}`;
}
async function oe({
  agentMode: e,
  collaborationMode: t,
  hostId: i,
  onLocalConversationCreated: o,
  projectRoot: s,
  prompt: c,
  serviceTier: l,
}) {
  let u = [s],
    d = E(u),
    f = [{ type: `text`, text: c, text_elements: [] }],
    p = await T(u, { prompt: c }),
    m = p.cwd ?? s;
  if (d && p.projectlessOutputDirectory == null)
    throw Error(`No projectless output directory found`);
  let { config: h } = await r(`read-config-for-host`, {
    hostId: i,
    includeLayers: !1,
    cwd: m,
  });
  await o(
    await r(`start-conversation`, {
      hostId: i,
      ...b({
        input: f,
        workspaceRoots: p.workspaceRoots,
        cwd: m,
        fileAttachments: [],
        addedFiles: [],
        agentMode: e,
        model: null,
        serviceTier: l,
        reasoningEffort: null,
        collaborationMode: t,
        config: n(h),
        configOverrides: { [a]: !0 },
        ...(d
          ? {
              workspaceKind: `projectless`,
              projectlessOutputDirectory: p.projectlessOutputDirectory,
            }
          : { workspaceKind: `project` }),
      }),
    }),
  );
}
export {
  R as a,
  F as c,
  B as d,
  z as f,
  N as i,
  L as l,
  Q as n,
  P as o,
  I as r,
  V as s,
  re as t,
  H as u,
};
//# sourceMappingURL=home-onboarding-assistant-tutorial-card.js.map
