import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  D as t,
  Di as n,
  Ei as r,
  Hi as i,
  Ni as a,
  Pi as o,
  Qi as s,
  qi as c,
} from "./src-C.js";
import { Ia as l, Va as u } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as d, t as f } from "./jsx-runtime.js";
import {
  G as p,
  L as m,
  S as h,
  U as g,
  X as _,
  Z as v,
  a as y,
  at as b,
  p as x,
  r as S,
  s as C,
  u as w,
  wt as T,
} from "./setting-storage.js";
import { t as ee } from "./product-logger-DusapRyT.js";
import { o as E } from "./statsig--EYRNU53.js";
import { i as D, m as O, n as k } from "./sidebar-signals.js";
import { r as A } from "./toast-signal.js";
import { n as j } from "./skill-utils.js";
import { t as M } from "./button.js";
import { t as te } from "./spinner.js";
import { t as N } from "./apps-DwfMzB5Q.js";
import { t as P } from "./x-C_RDKBp5.js";
import { E as F, T as I, j as L, k as R, w as z } from "./diff-view-mode.js";
import { t as B } from "./terminal.js";
import { a as V, i as H, l as ne, n as U } from "./dialog-layout.js";
import { t as W } from "./use-stable-callback.js";
import { t as G } from "./check-md.js";
import { n as re } from "./use-start-new-conversation.js";
import { t as ie } from "./checkbox-DtuSNXXy.js";
import { t as ae } from "./x-circle.js";
import { t as oe } from "./format-relative-date-time.js";
import { t as se } from "./mcp-D_m7bYb5.js";
import { n as ce } from "./use-skills.js";
import { s as le } from "./permissions-mode-visibility.js";
import { t as ue } from "./arrow-top-right.js";
import { t as de } from "./alert-CoBPbdcu.js";
import { t as fe } from "./use-recommended-skills-DPaHTHtv.js";
import { n as K } from "./settings-row.js";
import { n as q, t as pe } from "./settings-group.js";
import {
  _ as me,
  a as he,
  b as ge,
  d as _e,
  f as ve,
  h as ye,
  i as be,
  n as xe,
  o as Se,
  p as Ce,
  r as we,
  s as Te,
  t as Ee,
  u as De,
  v as Oe,
  x as ke,
} from "./external-agent-import-step.js";
import { t as Ae } from "./scroll-to-bottom-buton-DATGE4ZU.js";
import { t as je } from "./hooks-Cw0VrjI0.js";
function Me(e) {
  return s(r, e);
}
var Ne = `external-agent-config-import-settings`,
  J = e(d()),
  Y = f(),
  Pe = (e) =>
    (0, Y.jsx)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, Y.jsx)(`path`, {
        d: `M8.50195 5.83319C8.50197 4.93054 8.65078 4.06203 8.92188 3.24921C5.65928 3.76613 3.16504 6.59214 3.16504 10.0002C3.16514 13.775 6.2252 16.8351 10 16.8351C12.3126 16.8351 14.3565 15.6856 15.5938 13.926C11.5915 13.4005 8.50195 9.9788 8.50195 5.83319ZM9.83203 5.83319C9.83203 9.60806 12.8921 12.6682 16.667 12.6682C16.6833 12.6682 16.6996 12.6683 16.7158 12.6682C16.9467 12.6665 17.1618 12.7849 17.2842 12.9807C17.3913 13.1521 17.4145 13.3617 17.3496 13.55L17.3164 13.6291C15.9812 16.3161 13.2069 18.1652 10 18.1652C5.49066 18.1652 1.83506 14.5095 1.83496 10.0002C1.83496 5.51033 5.45891 1.8667 9.94141 1.83514L10.0273 1.84003C10.2248 1.86428 10.4027 1.97644 10.5098 2.14764C10.6321 2.34353 10.6447 2.58923 10.542 2.79608C10.0877 3.71023 9.83205 4.74091 9.83203 5.83319Z`,
        fill: `currentColor`,
      }),
    }),
  Fe = `codex-theme-v1:`,
  Ie = o((e) => typeof e == `string` && R(e)),
  X = c().regex(/^#[0-9a-fA-F]{6}$/),
  Le = c().nullable(),
  Re = i({
    codeThemeId: Ie,
    theme: i({
      accent: X,
      contrast: Me().int().min(0).max(100),
      fonts: i({ code: Le, ui: Le }),
      ink: X,
      opaqueWindows: a(),
      semanticColors: i({ diffAdded: X, diffRemoved: X, skill: X }),
      surface: X,
    }),
    variant: n([`light`, `dark`]),
  });
function ze(e) {
  let t = _(h),
    { chromeThemeSetting: n, codeThemeSetting: r } = Ve(e),
    i = y(n),
    a = y(r),
    o = L(i, e),
    s = F(e),
    c = { codeThemeId: I(a, e).id, theme: o },
    l = (0, J.useRef)(c),
    u = (0, J.useRef)(c),
    d = (0, J.useRef)(0),
    f = (0, J.useRef)(Promise.resolve());
  d.current === 0 && ((l.current = c), (u.current = c));
  let p = (0, J.useCallback)(
      (e) => {
        ((l.current = e), S(t, n, e.theme), S(t, r, e.codeThemeId));
      },
      [n, r, t],
    ),
    m = (0, J.useCallback)(
      async (e, t) => {
        ((d.current += 1), p(e));
        let n = async () => {
            try {
              await t();
            } catch (t) {
              throw (Ue(l.current, e) && p(u.current), t);
            } finally {
              --d.current;
            }
          },
          r = f.current.then(n, n);
        ((f.current = r.catch(() => void 0)), await r);
      },
      [p],
    ),
    g = (0, J.useCallback)(
      async (e) => {
        await m(e, async () => {
          let t = u.current;
          await C(n, e.theme);
          try {
            await C(r, e.codeThemeId);
          } catch (e) {
            throw (await C(n, t.theme).catch(() => void 0), e);
          }
          u.current = e;
        });
      },
      [n, r, m],
    ),
    v = (0, J.useCallback)(
      async (e) => {
        let t = { ...l.current, theme: e };
        await m(t, async () => {
          let i = u.current;
          if (i.codeThemeId !== t.codeThemeId) {
            await C(r, t.codeThemeId);
            try {
              await C(n, e);
            } catch (e) {
              throw (await C(r, i.codeThemeId).catch(() => void 0), e);
            }
            u.current = t;
            return;
          }
          (await C(n, e), (u.current = t));
        });
      },
      [n, r, m],
    ),
    b = (0, J.useCallback)(
      (e) => {
        v(He(l.current.theme, e)).catch(() => void 0);
      },
      [v],
    ),
    x = (0, J.useCallback)(
      (e) => {
        v(He(l.current.theme, { fonts: e })).catch(() => void 0);
      },
      [v],
    ),
    w = (0, J.useCallback)(
      async (t) => {
        let n = await z(t, e);
        await g({ codeThemeId: t, theme: He(l.current.theme, n) });
      },
      [g, e],
    ),
    T = (0, J.useCallback)(
      () =>
        Ge({
          codeThemeId: l.current.codeThemeId,
          theme: l.current.theme,
          variant: e,
        }),
      [e],
    ),
    ee = (0, J.useCallback)(
      (t) => {
        try {
          return (Be(t, e, s), !0);
        } catch {
          return !1;
        }
      },
      [s, e],
    ),
    E = (0, J.useCallback)(
      async (t) => {
        await g(Be(t, e, s));
      },
      [s, g, e],
    ),
    D = l.current;
  return {
    canImportThemeString: ee,
    codeThemes: s,
    exportThemeString: T,
    fonts: D.theme.fonts,
    importThemeString: E,
    selectedCodeTheme: I(D.codeThemeId, e),
    setCodeThemeId: w,
    setFontsPatch: x,
    setThemePatch: b,
    theme: D.theme,
  };
}
function Be(e, t, n) {
  let r = Ke(e);
  if (r.variant !== t) throw Error(`Theme variant mismatch`);
  let i = n.find((e) => e.id === r.codeThemeId);
  if (i == null) throw Error(`Theme code theme mismatch`);
  return { codeThemeId: i.id, theme: L(r.theme, t) };
}
function Ve(e) {
  return e === `light`
    ? {
        chromeThemeSetting: t.lightChromeTheme,
        codeThemeSetting: t.lightCodeThemeId,
      }
    : {
        chromeThemeSetting: t.darkChromeTheme,
        codeThemeSetting: t.darkCodeThemeId,
      };
}
function He(e, t) {
  return {
    ...e,
    ...t,
    fonts: t.fonts == null ? e.fonts : { ...e.fonts, ...t.fonts },
    semanticColors:
      t.semanticColors == null
        ? e.semanticColors
        : { ...e.semanticColors, ...t.semanticColors },
  };
}
function Ue(e, t) {
  return e.codeThemeId === t.codeThemeId && We(e.theme, t.theme);
}
function We(e, t) {
  return (
    e.accent === t.accent &&
    e.contrast === t.contrast &&
    e.fonts.code === t.fonts.code &&
    e.fonts.ui === t.fonts.ui &&
    e.ink === t.ink &&
    e.opaqueWindows === t.opaqueWindows &&
    e.semanticColors.diffAdded === t.semanticColors.diffAdded &&
    e.semanticColors.diffRemoved === t.semanticColors.diffRemoved &&
    e.semanticColors.skill === t.semanticColors.skill &&
    e.surface === t.surface
  );
}
function Ge(e) {
  return `${Fe}${JSON.stringify(e)}`;
}
function Ke(e) {
  let t = e.trim();
  if (!t.startsWith(Fe)) throw Error(`Theme share string mismatch`);
  let n = t.slice(15),
    r = n.startsWith(`{`) ? n : decodeURIComponent(n);
  return Re.parse(JSON.parse(r));
}
var Z = T();
function qe(e) {
  let t = (0, Z.c)(7),
    { theme: n } = e,
    r = `color-mix(in srgb, ${n.ink} 16%, ${n.surface})`,
    i;
  t[0] !== r || t[1] !== n.accent || t[2] !== n.surface
    ? ((i = { backgroundColor: n.surface, borderColor: r, color: n.accent }),
      (t[0] = r),
      (t[1] = n.accent),
      (t[2] = n.surface),
      (t[3] = i))
    : (i = t[3]);
  let a;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(g, {
        id: `settings.general.appearance.codeTheme.previewGlyph`,
        defaultMessage: `Aa`,
        description: `Preview glyph shown in the code theme selector`,
      })),
      (t[4] = a))
    : (a = t[4]);
  let o;
  return (
    t[5] === i
      ? (o = t[6])
      : ((o = (0, Y.jsx)(`span`, {
          "aria-hidden": !0,
          className: `flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs leading-none font-semibold`,
          style: i,
          children: a,
        })),
        (t[5] = i),
        (t[6] = o)),
    o
  );
}
function Q(e, ...t) {
  let n = Ye(e);
  return [
    e.replace(/[\\/]+$/, ``),
    ...t.map((e) => e.replace(/^[\\/]+|[\\/]+$/g, ``)),
  ].join(n);
}
function Je(e) {
  let t = Ye(e),
    n = e.replace(/[\\/]+$/, ``),
    r = n.lastIndexOf(t);
  if (r === -1) return `.`;
  if (r === 0) return t;
  let i = n.slice(0, r);
  return Xe(i) || Ze(i) ? `${i}${t}` : i;
}
function Ye(e) {
  return e.includes(`\\`) ? `\\` : `/`;
}
function Xe(e) {
  return /^[A-Za-z]:$/.test(e);
}
function Ze(e) {
  return /^\\\\[^\\]+\\[^\\]+$/.test(e);
}
function Qe({ artifacts: e, skillMention: t }) {
  let n = e.filter((e) => e.scope === `user`),
    r = e.filter((e) => e.scope === `project`),
    i = [`Use ${t} to migrate the following settings into Codex.`];
  if (n.length > 0) {
    i.push(``, `User config:`);
    for (let e of n) i.push(`- ${nt(e.kind)}: ${e.path}`);
  }
  if (r.length > 0) {
    i.push(``, `Current project:`);
    for (let e of r) i.push(`- ${nt(e.kind)}: ${e.path}`);
  }
  return i.join(`
`);
}
function $e(e, t) {
  return e.flatMap((e) => {
    let n = rt(e.itemType);
    if (n == null) return [];
    let r = it(e, n, t);
    return r == null
      ? []
      : [
          {
            ...tt(e, n),
            kind: n,
            path: r,
            scope: e.cwd == null || e.cwd === `` ? `user` : `project`,
            cwd: e.cwd == null || e.cwd === `` ? null : e.cwd,
          },
        ];
  });
}
function et({ codexHome: e, isEnabled: t, items: n }) {
  return t ? $e(n, e) : [];
}
function tt(e, t) {
  let n = e.details;
  if (n == null) return {};
  let r =
    t === `commands`
      ? n.commands.length
      : t === `hooks`
        ? n.hooks.length
        : t === `mcp`
          ? n.mcpServers.length
          : t === `plugins`
            ? n.plugins.reduce((e, t) => e + t.pluginNames.length, 0)
            : n.subagents.length;
  return r > 0 ? { count: r } : {};
}
function nt(e) {
  switch (e) {
    case `commands`:
      return `Slash commands`;
    case `hooks`:
      return `Hooks`;
    case `mcp`:
      return `MCP`;
    case `plugins`:
      return `Plugins`;
    case `subagents`:
      return `Subagents`;
  }
}
function rt(e) {
  switch (e) {
    case `COMMANDS`:
      return `commands`;
    case `SUBAGENTS`:
      return `subagents`;
    case `HOOKS`:
      return `hooks`;
    case `MCP_SERVER_CONFIG`:
      return `mcp`;
    case `PLUGINS`:
      return `plugins`;
    case `AGENTS_MD`:
    case `CONFIG`:
    case `SKILLS`:
    case `SESSIONS`:
      return null;
  }
}
function it(e, t, n) {
  if (t === `plugins` && e.sourcePath != null && e.sourcePath !== ``)
    return e.sourcePath;
  let r = at(e, n);
  if (r == null) return null;
  switch (t) {
    case `commands`:
      return Q(r, `.claude`, `commands`);
    case `hooks`:
      return Q(r, `.claude`, `settings.json`);
    case `mcp`:
      return r;
    case `plugins`:
      return Q(r, `.claude`);
    case `subagents`:
      return Q(r, `.claude`, `agents`);
  }
}
function at(e, t) {
  return e.cwd != null && e.cwd !== ``
    ? e.cwd
    : t == null || t === ``
      ? null
      : Je(t);
}
async function ot({
  ensureSkillByName: e,
  fallbackSkillPath: t,
  findSkillByName: n,
  forceReloadSkills: r,
  installSkill: i,
  skillName: a,
}) {
  let o = n(a);
  if (o != null) return j({ name: o.name, path: o.path });
  try {
    let n = await e(a);
    if (n == null) return st(a, t);
    let o = await i({ skill: n });
    return !o.success || o.destination == null
      ? st(a, t)
      : (await r?.(), j({ name: n.name, path: Q(o.destination, `SKILL.md`) }));
  } catch {
    return st(a, t);
  }
}
function st(e, t) {
  return j({ name: e, path: t });
}
var ct = `migrate-to-codex`,
  lt = `https://github.com/openai/skills/blob/main/skills/.curated/migrate-to-codex/SKILL.md`;
async function ut({
  ensureSkillByName: e,
  findSkillByName: t,
  forceReloadSkills: n,
  installSkill: r,
}) {
  return ot({
    ensureSkillByName: e,
    fallbackSkillPath: lt,
    findSkillByName: t,
    forceReloadSkills: n,
    installSkill: r,
    skillName: ct,
  });
}
var dt = `external-agent-import`,
  ft = { importedSessionCount: 0, latestImportedAtMs: null };
function pt(e) {
  let t = (0, Z.c)(88),
    {
      codexHome: n,
      hostId: r,
      isActiveWorkspaceLoading: i,
      isCoworkMigrationEnabled: a,
      isExternalAgentImportEnabled: o,
      onImportSuccess: s,
      variant: c,
      workspaceRoots: l,
    } = e,
    u = c === void 0 ? `section` : c,
    d = _(h),
    f = p(),
    m;
  t[0] !== n ||
  t[1] !== r ||
  t[2] !== a ||
  t[3] !== o ||
  t[4] !== s ||
  t[5] !== l
    ? ((m = {
        codexHome: n,
        hostId: r,
        isCoworkMigrationEnabled: a,
        isExternalAgentImportEnabled: o,
        onImportSuccess: s,
        workspaceRoots: l,
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = l),
      (t[6] = m))
    : (m = t[6]);
  let v = ht(m),
    y = v.isDetecting || (o && i),
    b;
  t[7] !== v.isImporting ||
  t[8] !== v.isRemainingArtifactsDialogOpen ||
  t[9] !== v.remainingArtifacts
    ? ((b =
        !v.isImporting && v.isRemainingArtifactsDialogOpen
          ? {
              status: `success`,
              items: [],
              remainingArtifacts: v.remainingArtifacts,
            }
          : null),
      (t[7] = v.isImporting),
      (t[8] = v.isRemainingArtifactsDialogOpen),
      (t[9] = v.remainingArtifacts),
      (t[10] = b))
    : (b = t[10]);
  let x = b,
    S;
  t[11] !== n ||
  t[12] !== v.closeRemainingArtifactsDialog ||
  t[13] !== v.migrateRemainingArtifacts ||
  t[14] !== x
    ? ((S = (0, Y.jsx)(yt, {
        progress: x,
        codexHome: n,
        onMigrateRemainingArtifacts: v.migrateRemainingArtifacts,
        onClose: v.closeRemainingArtifactsDialog,
      })),
      (t[11] = n),
      (t[12] = v.closeRemainingArtifactsDialog),
      (t[13] = v.migrateRemainingArtifacts),
      (t[14] = x),
      (t[15] = S))
    : (S = t[15]);
  let C = S,
    w = v.importChoices.length > 0 || v.remainingArtifacts.length > 0,
    T = v.importChoices.length === 0 && v.remainingArtifacts.length > 0,
    E;
  t[16] !== v.importChoices || t[17] !== f
    ? ((E = v.importChoices.length === 0 ? null : xe(f, v.importChoices)),
      (t[16] = v.importChoices),
      (t[17] = f),
      (t[18] = E))
    : (E = t[18]);
  let D = E,
    O;
  t[19] === d
    ? (O = t[20])
    : ((O = (e) => {
        ee(d, {
          eventName: `codex_onboarding_external_agent_import_event`,
          metadata: e,
        });
      }),
      (t[19] = d),
      (t[20] = O));
  let k = O,
    A;
  t[21] !== v.providerIds || t[22] !== D || t[23] !== k
    ? ((A = (e) => {
        D != null &&
          k({ source: `settings`, action: e, ...he(D, we(D), v.providerIds) });
      }),
      (t[21] = v.providerIds),
      (t[22] = D),
      (t[23] = k),
      (t[24] = A))
    : (A = t[24]);
  let j = A,
    N;
  t[25] !== v || t[26] !== j
    ? ((N = () => {
        (j(`shown`), v.openImportDialog());
      }),
      (t[25] = v),
      (t[26] = j),
      (t[27] = N))
    : (N = t[27]);
  let P = N,
    F;
  t[28] !== v || t[29] !== j
    ? ((F = () => {
        (j(`skipped`), v.setImportDialogOpen(!1));
      }),
      (t[28] = v),
      (t[29] = j),
      (t[30] = F))
    : (F = t[30]);
  let I = F,
    L;
  t[31] !== v.detectedItems ||
  t[32] !== v.selectedImportProviderIds ||
  t[33] !== D ||
  t[34] !== f
    ? ((L =
        v.selectedImportProviderIds.length === 0
          ? D
          : Se({
              detectedItems: v.detectedItems,
              intl: f,
              providerIds: v.selectedImportProviderIds,
            })),
      (t[31] = v.detectedItems),
      (t[32] = v.selectedImportProviderIds),
      (t[33] = D),
      (t[34] = f),
      (t[35] = L))
    : (L = t[35]);
  let R = L,
    z;
  t[36] !== v || t[37] !== k || t[38] !== R || t[39] !== I || t[40] !== u
    ? ((z =
        v.importDialogStep === `providers`
          ? (0, Y.jsx)(
              ge,
              {
                variant: `dialog`,
                providerIds: v.providerIds,
                onCustomize: v.selectImportProviders,
                onContinue: v.selectImportProviders,
                onSkip: I,
              },
              v.providerIds.join(`,`),
            )
          : R == null
            ? null
            : (0, Y.jsx)(
                Ee,
                {
                  variant: `dialog`,
                  eventSource: `settings`,
                  logShownOnMount: !1,
                  detectedProviderIds: v.providerIds,
                  providerIds: v.selectedImportProviderIds,
                  summary: R,
                  isPending: v.isImporting,
                  hasError: v.importDialogStatus === `error`,
                  continueLabel:
                    u === `general-row`
                      ? (0, Y.jsx)(g, {
                          id: `settings.general.importExternalAgent.import`,
                          defaultMessage: `Import`,
                          description: `Button label to import another local agent setup`,
                        })
                      : (0, Y.jsx)(g, {
                          id: `settings.agent.importSettings.applySelected`,
                          defaultMessage: `Import to Codex`,
                          description: `Button label to apply selected home-scoped external config migration items`,
                        }),
                  onSkip: () => v.setImportDialogOpen(!1),
                  onContinue: (e) => {
                    v.importSelection(e);
                  },
                  onEvent: k,
                },
                v.selectedImportProviderIds.join(`,`),
              )),
      (t[36] = v),
      (t[37] = k),
      (t[38] = R),
      (t[39] = I),
      (t[40] = u),
      (t[41] = z))
    : (z = t[41]);
  let B;
  t[42] !== v.isImportDialogOpen ||
  t[43] !== v.setImportDialogOpen ||
  t[44] !== z
    ? ((B = (0, Y.jsx)(ne, {
        open: v.isImportDialogOpen,
        onOpenChange: v.setImportDialogOpen,
        size: `default`,
        children: z,
      })),
      (t[42] = v.isImportDialogOpen),
      (t[43] = v.setImportDialogOpen),
      (t[44] = z),
      (t[45] = B))
    : (B = t[45]);
  let V = B;
  if (u === `general-row`) {
    if (!o) return C;
    let e = D != null || v.remainingArtifacts.length > 0,
      r = D == null && v.remainingArtifacts.length > 0,
      i = v.latestImportedAtMs != null,
      a = v.lastCompletedImportProgress != null;
    if (!y && !e && !i && !a) return C;
    let s = v.isCompletedImportDialogOpen
        ? v.lastCompletedImportProgress
        : null,
      c;
    t[46] !== n ||
    t[47] !== v.closeCompletedImportDialog ||
    t[48] !== v.migrateRemainingArtifacts ||
    t[49] !== s
      ? ((c = (0, Y.jsx)(yt, {
          progress: s,
          codexHome: n,
          onMigrateRemainingArtifacts: v.migrateRemainingArtifacts,
          onClose: v.closeCompletedImportDialog,
        })),
        (t[46] = n),
        (t[47] = v.closeCompletedImportDialog),
        (t[48] = v.migrateRemainingArtifacts),
        (t[49] = s),
        (t[50] = c))
      : (c = t[50]);
    let l = c,
      u;
    t[51] === i
      ? (u = t[52])
      : ((u = i
          ? (0, Y.jsx)(g, {
              id: `settings.general.importExternalAgent.importedRowLabel`,
              defaultMessage: `Imported agent setup`,
              description: `Label for imported external agent setup in general settings`,
            })
          : (0, Y.jsx)(g, {
              id: `settings.general.importExternalAgent.rowLabel`,
              defaultMessage: `Import work from other AI apps`,
              description: `Label for importing setup from other AI apps in general settings`,
            })),
        (t[51] = i),
        (t[52] = u));
    let d;
    t[53] !== v.latestImportedAtMs || t[54] !== i
      ? ((d = i
          ? (0, Y.jsx)(g, {
              id: `settings.general.importExternalAgent.lastImported`,
              defaultMessage: `Last imported {relativeTime} ago`,
              description: `Description showing when another local agent setup was last imported`,
              values: {
                relativeTime: (0, Y.jsx)(oe, {
                  dateString: new Date(v.latestImportedAtMs ?? 0).toISOString(),
                }),
              },
            })
          : (0, Y.jsx)(g, {
              id: `settings.general.importExternalAgent.rowDescription`,
              defaultMessage: `Bring over your setup, projects, and recent chats`,
              description: `Description for importing setup, projects, and recent chats from other AI apps in general settings`,
            })),
        (t[53] = v.latestImportedAtMs),
        (t[54] = i),
        (t[55] = d))
      : (d = t[55]);
    let f = y || v.isImporting || (!e && (!i || !a)),
      p =
        !e && a
          ? v.openCompletedImportDialog
          : r
            ? v.openRemainingArtifactsDialog
            : P,
      m;
    t[56] !== v.isImporting ||
    t[57] !== e ||
    t[58] !== i ||
    t[59] !== y ||
    t[60] !== r
      ? ((m = v.isImporting
          ? (0, Y.jsx)(g, {
              id: `settings.general.importExternalAgent.importing`,
              defaultMessage: `Importing`,
              description: `Button label shown while importing another local agent setup`,
            })
          : y
            ? (0, Y.jsx)(g, {
                id: `settings.general.importExternalAgent.checking`,
                defaultMessage: `Checking`,
                description: `Button label shown while checking for another local agent setup`,
              })
            : e
              ? r
                ? (0, Y.jsx)(g, {
                    id: `settings.general.importExternalAgent.continueWithCodex`,
                    defaultMessage: `Continue with Codex`,
                    description: `Button label to continue importing remaining external agent setup with Codex`,
                  })
                : i
                  ? (0, Y.jsx)(g, {
                      id: `settings.general.importExternalAgent.importAgain`,
                      defaultMessage: `Import again`,
                      description: `Button label to import additional setup from another local agent`,
                    })
                  : (0, Y.jsx)(g, {
                      id: `settings.general.importExternalAgent.import`,
                      defaultMessage: `Import`,
                      description: `Button label to import another local agent setup`,
                    })
              : (0, Y.jsx)(g, {
                  id: `settings.general.importExternalAgent.viewImportedFiles`,
                  defaultMessage: `View imported files`,
                  description: `Button label to view imported external agent setup files`,
                })),
        (t[56] = v.isImporting),
        (t[57] = e),
        (t[58] = i),
        (t[59] = y),
        (t[60] = r),
        (t[61] = m))
      : (m = t[61]);
    let h;
    t[62] !== v.isImporting || t[63] !== f || t[64] !== p || t[65] !== m
      ? ((h = (0, Y.jsx)(M, {
          color: `secondary`,
          size: `toolbar`,
          disabled: f,
          loading: v.isImporting,
          onClick: p,
          children: m,
        })),
        (t[62] = v.isImporting),
        (t[63] = f),
        (t[64] = p),
        (t[65] = m),
        (t[66] = h))
      : (h = t[66]);
    let _;
    t[67] !== u || t[68] !== d || t[69] !== h
      ? ((_ = (0, Y.jsx)(K, { id: Ne, label: u, description: d, control: h })),
        (t[67] = u),
        (t[68] = d),
        (t[69] = h),
        (t[70] = _))
      : (_ = t[70]);
    let b = D == null ? null : V,
      x;
    return (
      t[71] !== l || t[72] !== C || t[73] !== _ || t[74] !== b
        ? ((x = (0, Y.jsxs)(Y.Fragment, { children: [_, b, C, l] })),
          (t[71] = l),
          (t[72] = C),
          (t[73] = _),
          (t[74] = b),
          (t[75] = x))
        : (x = t[75]),
      x
    );
  }
  if (!y && !w) return C;
  let H;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Y.jsx)(pe.Header, {
        title: (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.sectionTitle`,
          defaultMessage: `Import external agent config`,
          description: `Heading for the inline external agent config import section`,
        }),
        subtitle: (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.sectionSubtitle`,
          defaultMessage: `Detected settings from another agent that can be added to Codex`,
          description: `Subtitle for the inline external agent config import section`,
        }),
      })),
      (t[76] = H))
    : (H = t[76]);
  let U;
  t[77] !== n ||
  t[78] !== v ||
  t[79] !== V ||
  t[80] !== D ||
  t[81] !== y ||
  t[82] !== P ||
  t[83] !== T
    ? ((U = (0, Y.jsxs)(pe, {
        className: `gap-2`,
        children: [
          H,
          (0, Y.jsx)(pe.Content, {
            children: y
              ? (0, Y.jsx)(q, {
                  children: (0, Y.jsx)(K, {
                    label: (0, Y.jsx)(g, {
                      id: `settings.agent.importSettings.loadingLabel`,
                      defaultMessage: `Checking for imports`,
                      description: `Label shown while home-scoped external config migration items are loading`,
                    }),
                    description: (0, Y.jsx)(g, {
                      id: `settings.agent.importSettings.detectingDescription`,
                      defaultMessage: `Checking for compatible external settings, AGENTS.md, and skills`,
                      description: `Description shown while home-scoped external config migration items are loading`,
                    }),
                    control: (0, Y.jsx)(te, { className: `h-4 w-4` }),
                  }),
                })
              : (0, Y.jsxs)(q, {
                  children: [
                    D == null
                      ? null
                      : (0, Y.jsxs)(Y.Fragment, {
                          children: [
                            (0, Y.jsx)(K, {
                              label: (0, Y.jsx)(g, {
                                id: `settings.agent.importSettings.sharedImportLabel`,
                                defaultMessage: `Import another agent setup`,
                                description: `Settings row label for external agent setup import`,
                              }),
                              description: (0, Y.jsx)(g, {
                                id: `settings.agent.importSettings.sharedImportDescription`,
                                defaultMessage: `Choose settings, chats, and projects from another local agent app`,
                                description: `Settings row description for external agent setup import`,
                              }),
                              control: (0, Y.jsx)(M, {
                                color: `secondary`,
                                size: `toolbar`,
                                disabled: v.isImporting,
                                onClick: P,
                                children: (0, Y.jsx)(g, {
                                  id: `settings.agent.importSettings.applySelected`,
                                  defaultMessage: `Import to Codex`,
                                  description: `Button label to apply selected home-scoped external config migration items`,
                                }),
                              }),
                            }),
                            V,
                          ],
                        }),
                    T
                      ? (0, Y.jsx)(_t, {
                          artifacts: v.remainingArtifacts,
                          codexHome: n,
                          disabled: v.isMigratingRemainingArtifacts,
                          selectedArtifactKeys: v.selectedRemainingArtifactKeys,
                          onCheckedChange: v.setRemainingArtifactSelected,
                        })
                      : null,
                    T
                      ? (0, Y.jsx)(K, {
                          label: (0, Y.jsx)(g, {
                            id: `settings.agent.importSettings.remaining.summaryLabel`,
                            defaultMessage: `{count} selected`,
                            description: `Summary label for external agent settings that can be migrated with Codex`,
                            values: {
                              count: v.selectedRemainingArtifacts.length,
                            },
                          }),
                          description: (0, Y.jsx)(g, {
                            id: `settings.agent.importSettings.remaining.summaryDescription`,
                            defaultMessage: `Migrate selected settings that can’t be imported automatically`,
                            description: `Summary description for external agent settings that can be migrated with Codex`,
                          }),
                          control: (0, Y.jsxs)(M, {
                            color: `secondary`,
                            size: `toolbar`,
                            loading: v.isMigratingRemainingArtifacts,
                            disabled: v.selectedRemainingArtifacts.length === 0,
                            onClick: () => {
                              v.migrateRemainingArtifacts(
                                v.selectedRemainingArtifacts,
                              );
                            },
                            children: [
                              (0, Y.jsx)(`span`, {
                                children: (0, Y.jsx)(g, {
                                  id: `settings.agent.importSettings.remaining.continueInCodex`,
                                  defaultMessage: `Continue in Codex`,
                                  description: `Button label to start a Codex chat for external agent settings that cannot be imported automatically`,
                                }),
                              }),
                              (0, Y.jsx)(ue, { className: `icon-xs` }),
                            ],
                          }),
                        })
                      : null,
                  ],
                }),
          }),
        ],
      })),
      (t[77] = n),
      (t[78] = v),
      (t[79] = V),
      (t[80] = D),
      (t[81] = y),
      (t[82] = P),
      (t[83] = T),
      (t[84] = U))
    : (U = t[84]);
  let W;
  return (
    t[85] !== C || t[86] !== U
      ? ((W = (0, Y.jsxs)(Y.Fragment, { children: [U, C] })),
        (t[85] = C),
        (t[86] = U),
        (t[87] = W))
      : (W = t[87]),
    W
  );
}
function mt(e) {
  let t = null;
  for (let n of e) n != null && (t = t == null ? n : Math.max(t, n));
  return t;
}
function ht({
  codexHome: e,
  hostId: t,
  isCoworkMigrationEnabled: n,
  isExternalAgentImportEnabled: r,
  onImportSuccess: i,
  workspaceRoots: a,
}) {
  let o = _(h),
    s = m(),
    c = re(),
    l = v(k),
    u = E(`1786686482`),
    { findSkillByName: d, forceReload: f } = ce(a, t),
    { ensureSkillByName: p, installSkill: y } = fe({
      hostId: t,
      loadOnMount: !1,
    }),
    b = De({ enabled: r, isCoworkMigrationEnabled: n, workspaceRoots: a }),
    S = Te({ detectedItems: b.detectedItems, isCoworkMigrationEnabled: n }),
    C =
      x(`external-agent-import-status`, {
        params: { hostId: t, providers: ye(n) },
        queryConfig: { enabled: r, refetchOnMount: !0, staleTime: 0 },
      }).data ?? ft,
    [T, ee] = (0, J.useState)({}),
    [j, M] = (0, J.useState)(!1),
    [N, P] = (0, J.useState)(null),
    [F, I] = (0, J.useState)(!1),
    [L, R] = (0, J.useState)(!1),
    [z, B] = (0, J.useState)(null),
    [V, H] = (0, J.useState)(null),
    [ne, U] = (0, J.useState)(!1),
    [W, G] = (0, J.useState)(!1),
    [ie, ae] = (0, J.useState)(`items`),
    [oe, se] = (0, J.useState)([]),
    [le, ue] = (0, J.useState)(`idle`),
    K = et({ items: b.detectedItems, codexHome: e, isEnabled: u }),
    q = (0, J.useMemo)(
      () =>
        Object.fromEntries(
          K.map((e) => {
            let t = $(e);
            return [t, T[t] ?? !0];
          }),
        ),
      [K, T],
    ),
    pe = K.filter((e) => q[$(e)] ?? !1),
    he = mt([C.latestImportedAtMs, z]),
    ge = L ? V : he,
    xe = b.isImporting || L,
    Se = (e) => {
      (se(e), ae(`items`));
    },
    we = async ({ providerIds: n, selection: r }) => {
      if ((ue(`idle`), !b.hasImportableItems)) {
        G(!1);
        return;
      }
      let a =
        n.length === 0
          ? b.getSelectedItems(r)
          : be({
              detectedItems: b.detectedItems,
              providerIds: n,
              selection: r,
            });
      if (a.length === 0) {
        G(!1);
        return;
      }
      let c = Date.now(),
        d = `import`,
        f = 0,
        p = 0;
      ve({ items: a, surface: `settings` });
      let m = o.get(A);
      (H(he),
        R(!0),
        G(!1),
        U(!1),
        I(!1),
        m.custom({
          content: ({ close: e, level: t }) =>
            (0, Y.jsx)(de, {
              level: t,
              onRemove: e,
              children: (0, Y.jsxs)(`div`, {
                className: `flex items-center gap-2 pr-1`,
                children: [
                  (0, Y.jsx)(te, {
                    className: `icon-sm text-token-text-secondary`,
                  }),
                  (0, Y.jsx)(g, {
                    id: `settings.agent.importSettings.toast.importing`,
                    defaultMessage: `Importing agent setup`,
                    description: `Toast shown while external agent setup import is running`,
                  }),
                ],
              }),
            }),
          duration: 120,
          hasCloseButton: !1,
          id: dt,
        }));
      try {
        d = `import`;
        let { projectRoots: n } = await b.importItems(a);
        ((f = n.length),
          (d = `complete_import`),
          await me({
            hostId: t,
            onImportedProjectRootsReady: (e) => {
              O(o, D({ collapsedGroups: l, importedProjectRoots: e }));
            },
            projectRoots: t === `local` ? n : [],
            refreshRecentConversations: a.some((e) => e.itemType === `SESSIONS`)
              ? () => Oe(t)
              : void 0,
          }),
          (d = `refetch_detected_items`));
        let r = await b.refetchDetectedItems();
        ((d = `invalidate_queries`),
          await Promise.all([
            Ce(s),
            s.invalidateQueries({ queryKey: w(`codex-agents-md`) }),
            n.length === 0
              ? Promise.resolve()
              : s.invalidateQueries({
                  queryKey: w(`workspace-root-options`, { hostId: t }),
                }),
          ]));
        let h = {
          status: `success`,
          items: a,
          remainingArtifacts: et({ items: r, codexHome: e, isEnabled: u }),
        };
        ((p = h.remainingArtifacts.length),
          P(h),
          B(Date.now()),
          h.remainingArtifacts.length > 0 && I(!0),
          i?.(),
          m.success(
            (0, Y.jsx)(g, {
              id: `settings.agent.importSettings.toast.success`,
              defaultMessage: `Agent setup imported`,
              description: `Toast shown after external agent setup import succeeds`,
            }),
            { id: dt },
          ),
          _e({
            durationMs: Date.now() - c,
            items: a,
            projectRootsReturnedCount: f,
            remainingArtifactsCount: p,
            status: `success`,
            surface: `settings`,
          }));
      } catch (e) {
        (_e({
          durationMs: Date.now() - c,
          error: e,
          failedStage: d,
          items: a,
          projectRootsReturnedCount: f,
          remainingArtifactsCount: p,
          status: `failure`,
          surface: `settings`,
        }),
          ue(`error`),
          m.danger(
            (0, Y.jsx)(g, {
              id: `settings.agent.importSettings.toast.error`,
              defaultMessage: `Unable to import agent setup`,
              description: `Toast shown after external agent setup import fails`,
            }),
            { id: dt },
          ));
      } finally {
        (R(!1), H(null));
      }
    };
  return {
    closeCompletedImportDialog: () => {
      I(!1);
    },
    closeRemainingArtifactsDialog: () => {
      U(!1);
    },
    importChoices: b.choices,
    importDialogStep: ie,
    importDialogStatus: le,
    importSelection: (e) => we({ providerIds: oe, selection: e }),
    isImportDialogOpen: W,
    isCompletedImportDialogOpen: F,
    isDetecting: b.isDetecting,
    isImporting: xe,
    isMigratingRemainingArtifacts: j,
    isRemainingArtifactsDialogOpen: ne,
    lastCompletedImportProgress: N,
    latestImportedAtMs: ge,
    migrateRemainingArtifacts: async (e) => {
      M(!0);
      try {
        (c({
          prefillPrompt: Qe({
            artifacts: e,
            skillMention: await ut({
              ensureSkillByName: p,
              findSkillByName: d,
              forceReloadSkills: f,
              installSkill: y,
            }),
          }),
          prefillCwd: e.find((e) => e.cwd != null)?.cwd ?? null,
        }),
          U(!1));
      } finally {
        M(!1);
      }
    },
    openCompletedImportDialog: () => {
      N != null && I(!0);
    },
    openImportDialog: () => {
      (ue(`idle`), se(S), ae(`providers`), G(!0));
    },
    openRemainingArtifactsDialog: () => {
      !xe && K.length > 0 && U(!0);
    },
    detectedItems: b.detectedItems,
    remainingArtifacts: K,
    providerIds: S,
    selectImportProviders: Se,
    unsupportedProjects: b.unsupportedProjects,
    selectedImportProviderIds: oe,
    selectedRemainingArtifactKeys: q,
    selectedRemainingArtifacts: pe,
    setImportDialogOpen: G,
    setRemainingArtifactSelected: (e, t) => {
      ee((n) => ({ ...n, [$(e)]: t }));
    },
  };
}
function gt(e) {
  let t = (0, Z.c)(7),
    { path: n, title: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Y.jsx)(`div`, {
        className: `shrink-0 font-medium`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a =
        n == null
          ? null
          : (0, Y.jsx)(`div`, {
              className: `truncate text-token-description-foreground`,
              children: n,
            })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Y.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3 px-3 py-2 text-sm text-token-text-secondary`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function _t(e) {
  let t = (0, Z.c)(13),
    {
      artifacts: n,
      codexHome: r,
      disabled: i,
      onCheckedChange: a,
      selectedArtifactKeys: o,
    } = e,
    s;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o) {
    let e;
    (t[6] !== r || t[7] !== i || t[8] !== a || t[9] !== o
      ? ((e = (e) =>
          (0, Y.jsx)(
            vt,
            {
              artifacts: e.artifacts,
              codexHome: r,
              disabled: i,
              selectedArtifactKeys: o,
              scope: e.scope,
              onCheckedChange: a,
            },
            e.scope,
          )),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = e))
      : (e = t[10]),
      (s = zt(n).map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s));
  } else s = t[5];
  let c;
  return (
    t[11] === s
      ? (c = t[12])
      : ((c = (0, Y.jsx)(Y.Fragment, { children: s })),
        (t[11] = s),
        (t[12] = c)),
    c
  );
}
function vt(e) {
  let t = (0, Z.c)(21),
    {
      artifacts: n,
      codexHome: r,
      disabled: i,
      onCheckedChange: a,
      selectedArtifactKeys: o,
      scope: s,
    } = e,
    c;
  t[0] !== n[0]?.cwd || t[1] !== r || t[2] !== s
    ? ((c = s === `user` ? Lt(r) : Rt(n[0]?.cwd ?? null)),
      (t[0] = n[0]?.cwd),
      (t[1] = r),
      (t[2] = s),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === s
    ? (l = t[5])
    : ((l =
        s === `user`
          ? (0, Y.jsx)(g, {
              id: `settings.agent.importSettings.remaining.userConfigSettingsSection`,
              defaultMessage: `User config`,
              description: `Section title for user-level external agent settings that can be migrated with Codex`,
            })
          : (0, Y.jsx)(g, {
              id: `settings.agent.importSettings.remaining.currentProjectSettingsSection`,
              defaultMessage: `Current project`,
              description: `Section title for project-level external agent settings that can be migrated with Codex`,
            })),
      (t[4] = s),
      (t[5] = l));
  let u;
  t[6] !== c || t[7] !== l
    ? ((u = (0, Y.jsx)(gt, { path: c, title: l })),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let d;
  if (t[9] !== n || t[10] !== i || t[11] !== a || t[12] !== o) {
    let e;
    (t[14] !== i || t[15] !== a || t[16] !== o
      ? ((e = (e) =>
          (0, Y.jsx)(
            K,
            {
              label: (0, Y.jsx)(Tt, { kind: e.kind }),
              description: (0, Y.jsx)(g, {
                id: `settings.agent.importSettings.remaining.itemDescription`,
                defaultMessage: `Migrate {path} with Codex`,
                description: `Description for an external agent setting that can be migrated with Codex`,
                values: { path: Bt(e) },
              }),
              control: (0, Y.jsx)(ie, {
                className: `flex h-4 w-4 items-center justify-center rounded-[3px]`,
                checked: o[$(e)] ?? !1,
                disabled: i,
                onCheckedChange: (t) => {
                  a(e, t);
                },
              }),
            },
            $(e),
          )),
        (t[14] = i),
        (t[15] = a),
        (t[16] = o),
        (t[17] = e))
      : (e = t[17]),
      (d = n.map(e)),
      (t[9] = n),
      (t[10] = i),
      (t[11] = a),
      (t[12] = o),
      (t[13] = d));
  } else d = t[13];
  let f;
  return (
    t[18] !== u || t[19] !== d
      ? ((f = (0, Y.jsxs)(Y.Fragment, { children: [u, d] })),
        (t[18] = u),
        (t[19] = d),
        (t[20] = f))
      : (f = t[20]),
    f
  );
}
function yt({
  codexHome: e,
  progress: t,
  onMigrateRemainingArtifacts: n,
  onClose: r,
}) {
  let i = p(),
    [a, o] = (0, J.useState)(!1),
    s = (0, J.useRef)(null),
    [c, l] = (0, J.useState)(!1),
    u = t?.status === `running`,
    d = t?.status === `success` ? t.remainingArtifacts : [],
    f = t?.status === `success` && d.length > 0,
    m = f && t != null ? { ...t, items: [] } : t,
    h = W(() => {
      let e = s.current;
      if (e == null) {
        l(!1);
        return;
      }
      l(e.scrollHeight - e.scrollTop - e.clientHeight > 8);
    });
  (0, J.useEffect)(() => {
    let e = window.requestAnimationFrame(h);
    return () => {
      window.cancelAnimationFrame(e);
    };
  }, [t, h]);
  let _ = W(() => {
    let e = s.current;
    e?.scrollTo({ behavior: `smooth`, top: e.scrollHeight });
  });
  return (0, Y.jsx)(ne, {
    open: t != null,
    onOpenChange: (e) => {
      !e && !u && r();
    },
    shouldIgnoreClickOutside: u,
    size: `default`,
    children: (0, Y.jsx)(U, {
      className: `max-h-[min(720px,calc(100vh-64px))] gap-0 overflow-hidden p-0`,
      children: (0, Y.jsxs)(`div`, {
        className: `relative min-h-0`,
        children: [
          (0, Y.jsxs)(`div`, {
            ref: s,
            className: `vertical-scroll-fade-mask max-h-[min(720px,calc(100vh-64px))] overflow-y-auto px-6 pt-5 pb-8`,
            onScroll: h,
            children: [
              (0, Y.jsx)(V, {
                className: `gap-0`,
                children: (0, Y.jsx)(H, {
                  icon: f ? void 0 : jt(m?.status),
                  className: f ? `gap-2` : `gap-4`,
                  iconClassName: `h-10 w-10 rounded-2xl p-0`,
                  iconBackgroundClassName: Mt(m?.status),
                  title: Nt(m),
                  titleClassName: `font-semibold`,
                  subtitle: Pt(m),
                  subtitleClassName: `text-base leading-6`,
                }),
              }),
              !f && t != null && t.items.length > 0
                ? (0, Y.jsx)(V, {
                    className: `min-h-0 gap-3 pt-5`,
                    children: (0, Y.jsx)(Et, {
                      codexHome: e,
                      items: t.items,
                      status: t.status,
                    }),
                  })
                : null,
              !u && d.length > 0
                ? (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      (0, Y.jsx)(V, {
                        className: `pt-5`,
                        children: (0, Y.jsx)(bt, { artifacts: d }),
                      }),
                      (0, Y.jsx)(V, {
                        className: `pt-5`,
                        children: (0, Y.jsxs)(`div`, {
                          className: `flex w-full items-center justify-between gap-3`,
                          children: [
                            (0, Y.jsx)(M, {
                              color: `ghost`,
                              disabled: a,
                              onClick: r,
                              children: (0, Y.jsx)(g, {
                                id: `settings.agent.importSettings.progress.close`,
                                defaultMessage: `Close`,
                                description: `Button label to close the external agent config import progress dialog`,
                              }),
                            }),
                            (0, Y.jsx)(M, {
                              color: `primary`,
                              loading: a,
                              onClick: () => {
                                (async () => {
                                  o(!0);
                                  try {
                                    await n(d);
                                  } finally {
                                    o(!1);
                                  }
                                })();
                              },
                              children: (0, Y.jsx)(`span`, {
                                children: (0, Y.jsx)(g, {
                                  id: `settings.agent.importSettings.progress.continueInCodex`,
                                  defaultMessage: `Continue with Codex`,
                                  description: `Button label to start a Codex chat for remaining external agent config artifacts`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          }),
          (0, Y.jsx)(V, {
            className: `pointer-events-none absolute right-0 bottom-0 left-0 h-0 pt-0`,
            children: (0, Y.jsx)(Ae, {
              className: `pointer-events-auto bottom-10`,
              label: i.formatMessage({
                id: `settings.agent.importSettings.progress.scrollToBottom`,
                defaultMessage: `Scroll to bottom`,
                description: `Label for button that scrolls to the bottom of the external agent config import progress dialog`,
              }),
              show: c,
              onClick: _,
            }),
          }),
        ],
      }),
    }),
  });
}
function bt(e) {
  let t = (0, Z.c)(4),
    { artifacts: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.map(xt)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, Y.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: r,
        })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function xt(e) {
  return (0, Y.jsx)(St, { artifact: e }, $(e));
}
function St(e) {
  let t = (0, Z.c)(17),
    { artifact: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = Bt(n)), (t[0] = n), (t[1] = r));
  let i = r,
    a;
  t[2] === n.kind
    ? (a = t[3])
    : ((a = (0, Y.jsx)(`div`, {
        className: `flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-black/[0.025] text-token-description-foreground dark:bg-white/[0.04]`,
        children: (0, Y.jsx)(wt, { kind: n.kind }),
      })),
      (t[2] = n.kind),
      (t[3] = a));
  let o;
  t[4] === n
    ? (o = t[5])
    : ((o = (0, Y.jsx)(`div`, {
        className: `truncate text-[14px] leading-[17px] font-normal text-token-foreground`,
        children: (0, Y.jsx)(Ct, { artifact: n }),
      })),
      (t[4] = n),
      (t[5] = o));
  let s;
  t[6] === i
    ? (s = t[7])
    : ((s = (0, Y.jsx)(`div`, {
        className: `mt-1 truncate text-[12px] leading-[14px] text-token-description-foreground`,
        children: i,
      })),
      (t[6] = i),
      (t[7] = s));
  let c;
  t[8] !== o || t[9] !== s
    ? ((c = (0, Y.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [o, s],
      })),
      (t[8] = o),
      (t[9] = s),
      (t[10] = c))
    : (c = t[10]);
  let l;
  t[11] === i
    ? (l = t[12])
    : ((l = (0, Y.jsx)(ie, {
        "aria-label": i,
        checked: !0,
        className: `flex h-4 w-4 items-center justify-center rounded-[3px]`,
      })),
      (t[11] = i),
      (t[12] = l));
  let u;
  return (
    t[13] !== a || t[14] !== c || t[15] !== l
      ? ((u = (0, Y.jsxs)(`div`, {
          className: `flex min-h-12 items-center gap-2.5 px-1`,
          children: [a, c, l],
        })),
        (t[13] = a),
        (t[14] = c),
        (t[15] = l),
        (t[16] = u))
      : (u = t[16]),
    u
  );
}
function Ct(e) {
  let t = (0, Z.c)(5),
    { artifact: n } = e,
    r;
  t[0] === n.kind
    ? (r = t[1])
    : ((r = (0, Y.jsx)(Tt, { kind: n.kind })), (t[0] = n.kind), (t[1] = r));
  let i = n.count == null ? null : ` (${n.count})`,
    a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, Y.jsxs)(Y.Fragment, { children: [r, i] })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function wt(e) {
  let t = (0, Z.c)(5),
    { kind: n } = e;
  switch (n) {
    case `commands`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(B, { className: `icon-sm` })), (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `hooks`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(je, { className: `icon-sm` })), (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `mcp`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(se, { className: `icon-sm` })), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `plugins`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(N, { className: `icon-sm` })), (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `subagents`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(le, { className: `icon-sm` })), (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
function Tt(e) {
  let t = (0, Z.c)(5),
    { kind: n } = e;
  switch (n) {
    case `commands`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(g, {
              id: `settings.agent.importSettings.remaining.slashCommandsLabel`,
              defaultMessage: `Slash commands`,
              description: `Label for Claude slash commands that can be migrated with Codex`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `hooks`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(g, {
              id: `settings.agent.importSettings.remaining.hooksLabel`,
              defaultMessage: `Hooks`,
              description: `Label for Claude hooks that can be migrated with Codex`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `mcp`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(g, {
              id: `settings.agent.importSettings.remaining.mcpLabel`,
              defaultMessage: `MCP`,
              description: `Label for MCP configuration that can be migrated with Codex`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `plugins`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(g, {
              id: `settings.agent.importSettings.remaining.pluginsLabel`,
              defaultMessage: `Plugins`,
              description: `Label for Claude plugins that can be migrated with Codex`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `subagents`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(g, {
              id: `settings.agent.importSettings.remaining.subagentsLabel`,
              defaultMessage: `Subagents`,
              description: `Label for Claude subagents that can be migrated with Codex`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
function Et(e) {
  let t = (0, Z.c)(10),
    { codexHome: n, items: r, status: i } = e,
    a,
    o,
    s;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    let e = r.filter(Ot),
      c = r.filter(Dt),
      l = c[0]?.cwd ?? null;
    ((a = q),
      (o =
        e.length > 0
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(gt, {
                  path: `~/.codex`,
                  title: (0, Y.jsx)(g, {
                    id: `settings.agent.importSettings.progress.userConfigSection`,
                    defaultMessage: `User config`,
                    description: `Section title for completed user-level external agent config imports`,
                  }),
                }),
                e.map((e) =>
                  (0, Y.jsx)(kt, { codexHome: n, item: e, status: i }, Vt(e)),
                ),
              ],
            })
          : null),
      (s =
        c.length > 0
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(gt, {
                  path: Rt(l),
                  title: (0, Y.jsx)(g, {
                    id: `settings.agent.importSettings.progress.currentProjectSection`,
                    defaultMessage: `Current project`,
                    description: `Section title for completed project-level external agent config imports`,
                  }),
                }),
                c.map((e) =>
                  (0, Y.jsx)(kt, { codexHome: n, item: e, status: i }, Vt(e)),
                ),
              ],
            })
          : null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s));
  } else ((a = t[3]), (o = t[4]), (s = t[5]));
  let c;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, Y.jsxs)(a, { children: [o, s] })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Dt(e) {
  return e.cwd != null && e.cwd !== ``;
}
function Ot(e) {
  return e.cwd == null || e.cwd === ``;
}
function kt(e) {
  let t = (0, Z.c)(13),
    { codexHome: n, item: r, status: i } = e,
    a = p(),
    o;
  t[0] !== a || t[1] !== r
    ? ((o = ke(a, r)), (t[0] = a), (t[1] = r), (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== n || t[4] !== r || t[5] !== i
    ? ((s = Ft(r, n, i)), (t[3] = n), (t[4] = r), (t[5] = i), (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === i
    ? (c = t[8])
    : ((c = (0, Y.jsx)(At, { status: i })), (t[7] = i), (t[8] = c));
  let l;
  return (
    t[9] !== o || t[10] !== s || t[11] !== c
      ? ((l = (0, Y.jsx)(K, { label: o, description: s, control: c })),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    l
  );
}
function At(e) {
  let t = (0, Z.c)(3),
    { status: n } = e;
  if (n === `running`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(`span`, {
            className: `relative mt-1 h-4 w-4 shrink-0`,
            children: (0, Y.jsx)(`span`, {
              className: `absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-token-foreground border-r-token-foreground`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `success`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(`span`, {
            className: `border-token-success/40 bg-token-success/15 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border`,
            children: (0, Y.jsx)(G, {
              className: `icon-2xs text-token-success`,
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Y.jsx)(`span`, {
          className: `mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-token-editor-error-foreground/40 bg-token-editor-error-foreground/15`,
          children: (0, Y.jsx)(P, {
            className: `icon-2xs text-token-editor-error-foreground`,
          }),
        })),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
function jt(e) {
  return e === `success`
    ? (0, Y.jsx)(G, { className: `icon-md text-token-charts-green` })
    : e === `error`
      ? (0, Y.jsx)(ae, { className: `icon-md text-token-danger` })
      : (0, Y.jsx)(te, { className: `icon-md` });
}
function Mt(e) {
  return e === `success`
    ? `bg-token-charts-green/20`
    : e === `error`
      ? `bg-token-editor-error-foreground/15`
      : `bg-token-foreground/5`;
}
function Nt(e) {
  let t = e?.status;
  return t === `success`
    ? e != null && e.items.length === 0 && e.remainingArtifacts.length > 0
      ? (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.progress.remainingOnlyTitle`,
          defaultMessage: `Additional setup found`,
          description: `Title shown when external agent setup can be migrated by Codex but no direct imports were available`,
        })
      : (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.progress.successTitle`,
          defaultMessage: `Imported external agent config`,
          description: `Title shown after external agent config import succeeds`,
        })
    : t === `error`
      ? (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.progress.errorTitle`,
          defaultMessage: `Import failed`,
          description: `Title shown after external agent config import fails`,
        })
      : (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.progress.runningTitle`,
          defaultMessage: `Importing external agent config`,
          description: `Title shown while external agent config import is running`,
        });
}
function Pt(e) {
  let t = e?.status;
  return t === `success`
    ? e != null && e.items.length === 0 && e.remainingArtifacts.length > 0
      ? (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.progress.remainingOnlySubtitle`,
          defaultMessage: `Codex found additional setup that requires extra steps to import.`,
          description: `Subtitle shown when external agent setup can be migrated by Codex but no direct imports were available`,
        })
      : (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.progress.successSubtitle`,
          defaultMessage: `Selected config was copied into Codex`,
          description: `Subtitle shown after external agent config import succeeds`,
        })
    : t === `error`
      ? (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.progress.errorSubtitle`,
          defaultMessage: `Some config could not be imported. Check the selected items and try again`,
          description: `Subtitle shown after external agent config import fails`,
        })
      : (0, Y.jsx)(g, {
          id: `settings.agent.importSettings.progress.runningSubtitle`,
          defaultMessage: `Hang tight, this may take a few moments`,
          description: `Subtitle shown while external agent config import is running`,
        });
}
function Ft(e, t, n) {
  let r = n === `success` ? It(e) : e.description;
  if (e.cwd == null || e.cwd === ``) {
    let e = r
      .replace(/\/Users\/[^/]+\/\.claude/g, `~/.claude`)
      .replace(/\/Users\/[^/]+\/\.codex/g, `~/.codex`)
      .replace(/\/Users\/[^/]+\/\.agents/g, `~/.agents`)
      .replace(
        /\/private\/var\/folders\/\S+\/codex-electron-dev\/onboarding-flow-[^/\s]+\/codex-home/g,
        `~/.codex`,
      )
      .replace(
        /\/private\/var\/folders\/\S+\/codex-electron-dev\/onboarding-flow-[^/\s]+\/\.agents/g,
        `~/.agents`,
      );
    if (t != null && t !== ``) {
      let n = Je(t);
      ((e = e.split(t).join(`~/.codex`)),
        (e = e.split(Q(n, `.claude`)).join(`~/.claude`)),
        (e = e.split(Q(n, `.agents`)).join(`~/.agents`)));
    }
    return u(e);
  }
  let i = Rt(e.cwd);
  return i == null
    ? r
    : r.split(`${e.cwd}/`).join(`${i}/`).split(`${e.cwd}\\`).join(`${i}\\`);
}
function It(e) {
  switch (e.itemType) {
    case `AGENTS_MD`:
      return e.description.replace(/^Import /, `Imported `);
    case `CONFIG`:
    case `SKILLS`:
    case `COMMANDS`:
    case `SUBAGENTS`:
    case `HOOKS`:
      return e.description.replace(/^Migrate /, `Migrated `);
    case `PLUGINS`:
      return e.description
        .replace(/^Import /, `Imported `)
        .replace(/^Migrate /, `Migrated `);
    case `SESSIONS`:
      return e.description.replace(/^Import /, `Imported `);
    case `MCP_SERVER_CONFIG`:
      return e.description;
  }
}
function Lt(e) {
  return e == null || e === `` ? null : `~/.codex`;
}
function Rt(e) {
  return e == null || e === `` ? null : l(e) || e;
}
function zt(e) {
  let t = [],
    n = e.filter((e) => e.scope === `user`);
  n.length > 0 && t.push({ artifacts: n, scope: `user` });
  let r = e.filter((e) => e.scope === `project`);
  return (r.length > 0 && t.push({ artifacts: r, scope: `project` }), t);
}
function Bt(e) {
  let t = e.path
    .replace(/\/Users\/[^/]+\/\.claude/g, `~/.claude`)
    .replace(/\/Users\/[^/]+\/\.mcp\.json/g, `~/.mcp.json`)
    .replace(/\/Users\/[^/]+\/\.claude\.json/g, `~/.claude.json`)
    .replace(/[A-Za-z]:\\Users\\[^\\]+\\\.claude/g, `~/.claude`)
    .replace(/[A-Za-z]:\\Users\\[^\\]+\\\.mcp\.json/g, `~/.mcp.json`)
    .replace(/[A-Za-z]:\\Users\\[^\\]+\\\.claude\.json/g, `~/.claude.json`);
  if (e.cwd == null || e.cwd === ``) return u(t);
  let n = Rt(e.cwd);
  return u(
    n == null
      ? t
      : t
          .split(e.cwd + `/`)
          .join(n + `/`)
          .split(e.cwd + `\\`)
          .join(n + `\\`),
  );
}
function $(e) {
  return `${e.kind}:${e.scope}:${e.path}`;
}
function Vt(e) {
  return `${e.itemType}:${e.cwd ?? ``}:${e.description}`;
}
var Ht = b(h, {
  disableBackdropBlur: !1,
  disableCssMotion: !1,
  disableScrollFadeMask: !1,
  disableScrollFadeMaskAnimation: !1,
  forceOpaqueRendererBackground: !1,
});
function Ut(e, t, n) {
  e.set(Ht, (e) => ({ ...e, [t]: n }));
}
export {
  ut as a,
  Qe as c,
  Pe as d,
  Ne as f,
  pt as i,
  qe as l,
  Ut as n,
  ot as o,
  Me as p,
  yt as r,
  et as s,
  Ht as t,
  ze as u,
};
//# sourceMappingURL=gpu-tearing-debug-settings.js.map
