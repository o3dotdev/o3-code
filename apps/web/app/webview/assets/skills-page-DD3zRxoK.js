import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  ec as t,
  fo as n,
  po as r,
  tc as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as a, t as o } from "./jsx-runtime.js";
import { G as s, S as c, U as l, X as u, wt as d } from "./setting-storage.js";
import { f } from "./chunk-LFPYN7LY.js";
import { t as p } from "./product-logger-DusapRyT.js";
import { t as m } from "./use-auth.js";
import { p as h } from "./codex-api-bK--r_2t.js";
import { r as g } from "./toast-signal.js";
import { E as _ } from "./mention-item.js";
import { r as v } from "./skill-utils.js";
import { t as y } from "./button.js";
import { t as b } from "./use-is-plugins-enabled.js";
import { t as x } from "./plugin-auth.js";
import { n as ee } from "./use-start-new-conversation.js";
import { v as te } from "./links.js";
import { t as ne } from "./plus.js";
import { t as re } from "./use-connected-remote-connections.js";
import { t as ie } from "./regenerate.js";
import { n as ae, t as oe } from "./format-skill-scope.js";
import { r as se } from "./settings-host-context-ILiCQlCE.js";
import { t as S } from "./large-empty-state-C2F-IvSK.js";
import { t as ce } from "./thread-page-header.js";
import { t as le } from "./settings-host-dropdown-CC-sJzgE.js";
import {
  C,
  N as w,
  _ as ue,
  g as de,
  h as fe,
  i as T,
  m as pe,
} from "./plugin-detail-page-CIyT5Qjd.js";
import {
  a as me,
  i as he,
  n as ge,
  o as _e,
  r as ve,
  s as E,
  t as ye,
} from "./plugins-page-CQP-S9tt.js";
var D = d(),
  O = e(a(), 1);
function be(e) {
  let t = (0, D.c)(6),
    { container: n, target: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = (e) => {
        if (!n || !r) return k;
        let t = () => {
          e();
        };
        n.addEventListener(`scroll`, t, { passive: !0 });
        let i = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
        return (
          i && (i.observe(n), i.observe(r)),
          () => {
            (n.removeEventListener(`scroll`, t), i && i.disconnect());
          }
        );
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] !== n || t[4] !== r
    ? ((o = () => {
        if (!n || !r) return !0;
        let e = n.getBoundingClientRect(),
          t = r.getBoundingClientRect();
        return t.bottom > e.top && t.top < e.bottom;
      }),
      (t[3] = n),
      (t[4] = r),
      (t[5] = o))
    : (o = t[5]);
  let s = o;
  return (0, O.useSyncExternalStore)(a, s, s);
}
function k() {}
var A = o();
function j() {
  let e = (0, D.c)(10),
    t = u(c),
    n = f(),
    i = (0, O.useRef)(!1),
    a = n.state?.pluginDeepLinkAuthBlocked === !0,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { hostId: r }), (e[0] = o))
    : (o = e[0]);
  let s = b(o),
    { authMethod: d } = m(),
    p;
  e[1] === d ? (p = e[2]) : ((p = x(d)), (e[1] = d), (e[2] = p));
  let h = p,
    _,
    v;
  if (
    (e[3] !== a || e[4] !== h || e[5] !== t
      ? ((_ = () => {
          !a ||
            !h ||
            i.current ||
            ((i.current = !0),
            t.get(g).warning(
              (0, A.jsx)(l, {
                id: `skills.pluginsAuthBlockedToast.title`,
                defaultMessage: `Sign in with ChatGPT to use plugins`,
                description: `Toast title shown when API-key users open a plugin deep link`,
              }),
              {
                description: (0, A.jsx)(l, {
                  id: `skills.pluginsAuthBlockedToast.description`,
                  defaultMessage: `Plugins are not available with API key sign-in. Sign in with ChatGPT to browse and install them.`,
                  description: `Toast description shown when API-key users open a plugin deep link`,
                }),
                duration: 8,
                id: `plugin-deeplink-auth-blocked`,
              },
            ));
        }),
        (v = [h, a, t]),
        (e[3] = a),
        (e[4] = h),
        (e[5] = t),
        (e[6] = _),
        (e[7] = v))
      : ((_ = e[6]), (v = e[7])),
    (0, O.useEffect)(_, v),
    s && !h)
  ) {
    let t;
    return (
      e[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, A.jsx)(ye, {})), (e[8] = t))
        : (t = e[8]),
      t
    );
  }
  let y;
  return (
    e[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, A.jsx)(M, {})), (e[9] = y))
      : (y = e[9]),
    y
  );
}
function M() {
  let e = (0, D.c)(103),
    a = u(c),
    o = s(),
    { data: d } = h(),
    f = ee(),
    [m] = n(`remote_connections`),
    g = re(m),
    b;
  e[0] === m ? (b = e[1]) : ((b = m?.map(we)), (e[0] = m), (e[1] = b));
  let x = b,
    [te, S] = (0, O.useState)(r),
    C;
  e[2] !== g || e[3] !== te
    ? ((C = se(te, g)), (e[2] = g), (e[3] = te), (e[4] = C))
    : (C = e[4]);
  let w = C,
    [T, ge] = (0, O.useState)(null),
    [E, ye] = (0, O.useState)(null),
    k;
  e[5] !== E || e[6] !== T
    ? ((k = { container: T, target: E }), (e[5] = E), (e[6] = T), (e[7] = k))
    : (k = e[7]);
  let j = be(k),
    [M, Ce] = (0, O.useState)(``),
    [N, Oe] = (0, O.useState)(!1),
    ke = t(he),
    Ae = i(he),
    {
      forceReloadSkills: je,
      installedSkillMatchKeys: Me,
      isFetching: Ne,
      isLoading: Pe,
      markSkillsUpdated: P,
      skills: F,
      workspaceRoots: I,
    } = fe(w),
    {
      canInstallRecommendedSkills: Fe,
      defaultRecommendedRepoRoot: Ie,
      skillCreatorPath: L,
    } = ue(w),
    {
      errorMessage: Le,
      isLoading: Re,
      refresh: ze,
      repoRoot: Be,
      skills: Ve,
    } = de(Ie, w),
    He;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = () => {
        Oe(!0);
      }),
      (e[8] = He))
    : (He = e[8]);
  let Ue;
  e[9] !== je || e[10] !== w
    ? ((Ue = { forceReloadSkills: je, hostId: w, onInstalled: He }),
      (e[9] = je),
      (e[10] = w),
      (e[11] = Ue))
    : (Ue = e[11]);
  let { installRecommendedSkill: We, installingSkillId: Ge } = pe(Ue),
    Ke;
  e[12] === o
    ? (Ke = e[13])
    : ((Ke = oe({ scope: `repo`, intl: o })), (e[12] = o), (e[13] = Ke));
  let qe = Ke,
    Je = d?.name ?? void 0,
    Ye;
  e[14] !== o || e[15] !== Je
    ? ((Ye = oe({ scope: `admin`, intl: o, adminLabel: Je })),
      (e[14] = o),
      (e[15] = Je),
      (e[16] = Ye))
    : (Ye = e[16]);
  let Xe = Ye,
    R;
  e[17] !== o || e[18] !== Xe || e[19] !== qe || e[20] !== I
    ? ((R = (e) => {
        let { scope: t, skillPath: n } = e;
        return oe({
          scope: t,
          intl: o,
          repoLabel: ae({ skillPath: n, roots: I, fallbackLabel: qe }),
          adminLabel: Xe,
        });
      }),
      (e[17] = o),
      (e[18] = Xe),
      (e[19] = qe),
      (e[20] = I),
      (e[21] = R))
    : (R = e[21]);
  let Ze = R,
    Qe;
  if (e[22] !== M || e[23] !== F) {
    let t = M.trim().toLowerCase();
    ((Qe = F.filter((e) => {
      let { skill: n } = e;
      if (t.length === 0) return !0;
      let r = _(n).toLowerCase(),
        i = v(n).toLowerCase();
      return n.name.toLowerCase().includes(t) || i.includes(t) || r.includes(t);
    })),
      (e[22] = M),
      (e[23] = F),
      (e[24] = Qe));
  } else Qe = e[24];
  let $e = Qe,
    et;
  e[25] !== P || e[26] !== ze
    ? ((et = async () => {
        (P(), await ze(), Oe(!1));
      }),
      (e[25] = P),
      (e[26] = ze),
      (e[27] = et))
    : (et = e[27]);
  let tt = et,
    nt;
  (e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((nt = []), (e[28] = nt))
    : (nt = e[28]),
    (0, O.useEffect)(Se, nt));
  let z;
  e[29] === j
    ? (z = e[30])
    : ((z = j
        ? null
        : (0, A.jsx)(l, {
            id: `skills.page.heading`,
            defaultMessage: `Skills`,
            description: `Header title for the skills page`,
          })),
      (e[29] = j),
      (e[30] = z));
  let B;
  e[31] !== g || e[32] !== x || e[33] !== w
    ? ((B =
        g != null && g.length > 0 && x != null
          ? (0, A.jsx)(le, {
              connectedRemoteConnections: g,
              onSelectHost: S,
              remoteConnectionHostIds: x,
              selectedHostId: w,
            })
          : null),
      (e[31] = g),
      (e[32] = x),
      (e[33] = w),
      (e[34] = B))
    : (B = e[34]);
  let rt = N ? `secondary` : `ghost`,
    V;
  e[35] === tt
    ? (V = e[36])
    : ((V = () => {
        tt();
      }),
      (e[35] = tt),
      (e[36] = V));
  let it = Pe || Ne,
    at;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, A.jsx)(ie, { className: `icon-xs` })), (e[37] = at))
    : (at = e[37]);
  let H;
  e[38] === N
    ? (H = e[39])
    : ((H = (0, A.jsx)(`span`, {
        className: `hidden lg:inline`,
        children: N
          ? (0, A.jsx)(l, {
              id: `skills.page.refreshSkillsToUseNew`,
              defaultMessage: `Refresh to use new skill(s)`,
              description: `Button label shown when newly installed skills require a refresh before they can be used in the composer`,
            })
          : (0, A.jsx)(l, {
              id: `skills.page.refreshSkills`,
              defaultMessage: `Refresh`,
              description: `Button label for reloading skills list`,
            }),
      })),
      (e[38] = N),
      (e[39] = H));
  let U;
  e[40] !== rt || e[41] !== V || e[42] !== it || e[43] !== H
    ? ((U = (0, A.jsxs)(y, {
        color: rt,
        size: `toolbar`,
        onClick: V,
        disabled: it,
        children: [at, H],
      })),
      (e[40] = rt),
      (e[41] = V),
      (e[42] = it),
      (e[43] = H),
      (e[44] = U))
    : (U = e[44]);
  let W;
  e[45] === o
    ? (W = e[46])
    : ((W = o.formatMessage({
        id: `skills.page.search.label`,
        defaultMessage: `Search skills`,
        description: `Label for the skills page search input`,
      })),
      (e[45] = o),
      (e[46] = W));
  let G;
  e[47] === o
    ? (G = e[48])
    : ((G = o.formatMessage({
        id: `skills.page.search`,
        defaultMessage: `Search skills`,
        description: `Placeholder for the skills page search input`,
      })),
      (e[47] = o),
      (e[48] = G));
  let K;
  e[49] !== M || e[50] !== W || e[51] !== G
    ? ((K = (0, A.jsx)(`div`, {
        className: `hidden min-w-[160px] flex-1 lg:flex lg:w-[220px] lg:flex-none`,
        children: (0, A.jsx)(ve, {
          id: `skills-search`,
          label: W,
          placeholder: G,
          searchQuery: M,
          onSearchQueryChange: Ce,
        }),
      })),
      (e[49] = M),
      (e[50] = W),
      (e[51] = G),
      (e[52] = K))
    : (K = e[52]);
  let q;
  e[53] !== ke || e[54] !== a || e[55] !== Ae || e[56] !== L || e[57] !== f
    ? ((q = () => {
        if (!L) return;
        p(a, { eventName: `codex_skill_new_clicked` });
        let e = me({ creatorPath: L, isFirstOpen: !ke, kind: `skill` });
        (ke || Ae(!0), f({ prefillPrompt: e, startInSidebar: !0 }));
      }),
      (e[53] = ke),
      (e[54] = a),
      (e[55] = Ae),
      (e[56] = L),
      (e[57] = f),
      (e[58] = q))
    : (q = e[58]);
  let ot = !L,
    st,
    ct;
  e[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, A.jsx)(ne, { className: `icon-xs` })),
      (ct = (0, A.jsx)(l, {
        id: `skills.page.createSkill`,
        defaultMessage: `New skill`,
        description: `Button label for creating a new skill`,
      })),
      (e[59] = st),
      (e[60] = ct))
    : ((st = e[59]), (ct = e[60]));
  let J;
  e[61] !== q || e[62] !== ot
    ? ((J = (0, A.jsxs)(y, {
        color: `primary`,
        size: `toolbar`,
        onClick: q,
        disabled: ot,
        children: [st, ct],
      })),
      (e[61] = q),
      (e[62] = ot),
      (e[63] = J))
    : (J = e[63]);
  let Y;
  e[64] !== B || e[65] !== U || e[66] !== K || e[67] !== J
    ? ((Y = (0, A.jsxs)(`div`, {
        className: `flex flex-nowrap items-center gap-1.5`,
        children: [B, U, K, J],
      })),
      (e[64] = B),
      (e[65] = U),
      (e[66] = K),
      (e[67] = J),
      (e[68] = Y))
    : (Y = e[68]);
  let X;
  e[69] !== z || e[70] !== Y
    ? ((X = (0, A.jsx)(ce, { start: z, trailing: Y })),
      (e[69] = z),
      (e[70] = Y),
      (e[71] = X))
    : (X = e[71]);
  let lt;
  e[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (e) => {
        ge(e);
      }),
      (e[72] = lt))
    : (lt = e[72]);
  let ut;
  e[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = (e) => {
        ye(e);
      }),
      (e[73] = ut))
    : (ut = e[73]);
  let dt;
  e[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (0, A.jsx)(`div`, {
        className: `heading-xl font-normal text-token-foreground`,
        children: (0, A.jsx)(l, {
          id: `skills.page.heading`,
          defaultMessage: `Skills`,
          description: `Header title for the skills page`,
        }),
      })),
      (e[74] = dt))
    : (dt = e[74]);
  let ft;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, A.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, A.jsxs)(`div`, {
          className: `flex flex-col gap-1`,
          ref: ut,
          children: [
            dt,
            (0, A.jsx)(`div`, {
              className: `text-lg font-normal text-token-description-foreground`,
              children: (0, A.jsx)(l, {
                id: `skills.page.subheading`,
                defaultMessage: `Give Codex superpowers. <link>Learn more</link>`,
                description: `Subheading shown above the skills sections`,
                values: { link: xe },
              }),
            }),
          ],
        }),
      })),
      (e[75] = ft))
    : (ft = e[75]);
  let pt;
  e[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, A.jsx)(l, {
        id: `skills.section.installed`,
        defaultMessage: `Installed`,
        description: `Heading for the installed skills section`,
      })),
      (e[76] = pt))
    : (pt = e[76]);
  let Z;
  e[77] !== $e ||
  e[78] !== Ze ||
  e[79] !== Pe ||
  e[80] !== P ||
  e[81] !== w ||
  e[82] !== F.length ||
  e[83] !== I
    ? ((Z = (0, A.jsx)(Te, {
        title: pt,
        children: (0, A.jsx)(Ee, {
          hostId: w,
          isLoading: Pe,
          uniqueSkillCount: F.length,
          filteredSkills: $e,
          getScopeBadgeLabel: Ze,
          roots: I,
          onSkillsUpdated: P,
        }),
      })),
      (e[77] = $e),
      (e[78] = Ze),
      (e[79] = Pe),
      (e[80] = P),
      (e[81] = w),
      (e[82] = F.length),
      (e[83] = I),
      (e[84] = Z))
    : (Z = e[84]);
  let mt;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, A.jsx)(l, {
        id: `skills.section.recommended`,
        defaultMessage: `Recommended`,
        description: `Heading for the recommended skills section`,
      })),
      (e[85] = mt))
    : (mt = e[85]);
  let Q;
  e[86] !== Fe ||
  e[87] !== We ||
  e[88] !== Me ||
  e[89] !== Ge ||
  e[90] !== Re ||
  e[91] !== Be ||
  e[92] !== Ve ||
  e[93] !== Le ||
  e[94] !== M ||
  e[95] !== w
    ? ((Q = (0, A.jsx)(Te, {
        title: mt,
        children: (0, A.jsx)(De, {
          hostId: w,
          isLoading: Re,
          errorMessage: Le,
          skills: Ve,
          searchQuery: M,
          canInstall: Fe,
          repoRoot: Be,
          onInstall: We,
          installedSkillMatchKeys: Me,
          installingSkillId: Ge,
        }),
      })),
      (e[86] = Fe),
      (e[87] = We),
      (e[88] = Me),
      (e[89] = Ge),
      (e[90] = Re),
      (e[91] = Be),
      (e[92] = Ve),
      (e[93] = Le),
      (e[94] = M),
      (e[95] = w),
      (e[96] = Q))
    : (Q = e[96]);
  let $;
  e[97] !== Z || e[98] !== Q
    ? (($ = (0, A.jsx)(`div`, {
        className: `flex-1 overflow-y-auto p-panel`,
        ref: lt,
        children: (0, A.jsxs)(_e, {
          className: `mx-auto flex min-h-full w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col gap-8`,
          children: [
            ft,
            (0, A.jsx)(`div`, {
              className: `flex min-h-0 w-full flex-1`,
              children: (0, A.jsxs)(`div`, {
                className: `flex min-h-0 flex-1 flex-col gap-9 pb-10`,
                children: [Z, Q],
              }),
            }),
          ],
        }),
      })),
      (e[97] = Z),
      (e[98] = Q),
      (e[99] = $))
    : ($ = e[99]);
  let ht;
  return (
    e[100] !== X || e[101] !== $
      ? ((ht = (0, A.jsxs)(`div`, {
          className: `mr-4 flex h-full flex-col text-base`,
          children: [X, $],
        })),
        (e[100] = X),
        (e[101] = $),
        (e[102] = ht))
      : (ht = e[102]),
    ht
  );
}
function xe(e) {
  return (0, A.jsx)(`a`, {
    href: te,
    target: `_blank`,
    rel: `noopener noreferrer`,
    className: `text-token-link`,
    children: e,
  });
}
function Se() {
  return ((document.documentElement.dataset.hideHeaderDivider = `true`), Ce);
}
function Ce() {
  delete document.documentElement.dataset.hideHeaderDivider;
}
function we(e) {
  return e.hostId;
}
function Te(e) {
  let t = (0, D.c)(5),
    { title: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, A.jsx)(`div`, {
        className: `pr-0.5 pl-2 text-base font-medium text-token-foreground opacity-75`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, A.jsxs)(`section`, {
          className: `flex flex-col gap-4`,
          children: [i, r],
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Ee(e) {
  let t = (0, D.c)(16),
    {
      hostId: n,
      isLoading: r,
      uniqueSkillCount: i,
      filteredSkills: a,
      getScopeBadgeLabel: o,
      roots: s,
      onSkillsUpdated: c,
    } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, A.jsx)(S, {
              title: (0, A.jsx)(l, {
                id: `skills.page.loading`,
                defaultMessage: `Loading skills...`,
                description: `Loading label on the skills page`,
              }),
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (i === 0) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, A.jsx)(S, {
              title: (0, A.jsx)(l, {
                id: `skills.page.empty`,
                defaultMessage: `No skills found`,
                description: `Empty state on the skills page`,
              }),
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (a.length === 0) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, A.jsx)(S, {
              title: (0, A.jsx)(l, {
                id: `skills.page.filteredEmpty`,
                defaultMessage: `No skills match your filters`,
                description: `Empty state when filters hide all skills`,
              }),
              description: (0, A.jsx)(l, {
                id: `skills.page.filteredEmptyDescription`,
                defaultMessage: `Try adjusting your search or scope filters`,
                description: `Description for filtered skills empty state`,
              }),
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let u;
  if (t[3] !== a || t[4] !== o || t[5] !== n || t[6] !== c || t[7] !== s) {
    let e;
    (t[9] !== o || t[10] !== n || t[11] !== c || t[12] !== s
      ? ((e = (e) => {
          let { skill: t } = e,
            r =
              t.scope === `repo`
                ? [
                    (0, A.jsx)(
                      N,
                      { label: o({ scope: `repo`, skillPath: t.path }) },
                      `${t.path}-repo`,
                    ),
                  ]
                : [],
            i = t.scope === `repo` ? w({ skillPath: t.path, roots: s }) : null;
          return (0, A.jsx)(
            T,
            {
              skill: t,
              displayName: v(t),
              hostId: n,
              scopeBadges: r,
              repoRoot: i,
              onSkillsUpdated: c,
            },
            t.path,
          );
        }),
        (t[9] = o),
        (t[10] = n),
        (t[11] = c),
        (t[12] = s),
        (t[13] = e))
      : (e = t[13]),
      (u = a.map(e)),
      (t[3] = a),
      (t[4] = o),
      (t[5] = n),
      (t[6] = c),
      (t[7] = s),
      (t[8] = u));
  } else u = t[8];
  let d;
  return (
    t[14] === u
      ? (d = t[15])
      : ((d = (0, A.jsx)(E, { children: u })), (t[14] = u), (t[15] = d)),
    d
  );
}
function N(e) {
  let t = (0, D.c)(2),
    { label: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, A.jsx)(`span`, {
          className: `text-token-description-foreground`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function De(e) {
  let t = (0, D.c)(31),
    {
      hostId: n,
      isLoading: r,
      errorMessage: i,
      skills: a,
      searchQuery: o,
      canInstall: s,
      repoRoot: c,
      onInstall: u,
      installedSkillMatchKeys: d,
      installingSkillId: f,
    } = e,
    p,
    m,
    h;
  if (
    t[0] !== s ||
    t[1] !== i ||
    t[2] !== n ||
    t[3] !== d ||
    t[4] !== f ||
    t[5] !== r ||
    t[6] !== u ||
    t[7] !== c ||
    t[8] !== o ||
    t[9] !== a
  ) {
    h = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[13] === d
        ? (e = t[14])
        : ((e = (e) => !C({ installedSkillMatchKeys: d, skill: e })),
          (t[13] = d),
          (t[14] = e));
      let g = a.filter(e),
        _ = o.trim().toLowerCase(),
        v = g.filter((e) =>
          _.length === 0
            ? !0
            : [e.name, e.description, e.shortDescription ?? ``]
                .join(` `)
                .toLowerCase()
                .includes(_),
        );
      if (r) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, A.jsx)(S, {
                title: (0, A.jsx)(l, {
                  id: `skills.page.loading`,
                  defaultMessage: `Loading skills...`,
                  description: `Loading label on the skills page`,
                }),
              }),
            })),
            (t[15] = e))
          : (e = t[15]),
          (h = e));
        break bb0;
      }
      if (i) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(l, {
              id: `skills.recommended.error`,
              defaultMessage: `Unable to load recommended skills`,
              description: `Error title when recommended skills fail to load`,
            })),
            (t[16] = e))
          : (e = t[16]);
        let n;
        (t[17] === i
          ? (n = t[18])
          : ((n = (0, A.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, A.jsx)(S, { title: e, description: i }),
            })),
            (t[17] = i),
            (t[18] = n)),
          (h = n));
        break bb0;
      }
      if (g.length === 0) {
        let e;
        (t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, A.jsx)(S, {
                title: (0, A.jsx)(l, {
                  id: `skills.page.empty`,
                  defaultMessage: `No skills found`,
                  description: `Empty state on the skills page`,
                }),
              }),
            })),
            (t[19] = e))
          : (e = t[19]),
          (h = e));
        break bb0;
      }
      if (v.length === 0) {
        let e;
        (t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, A.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, A.jsx)(S, {
                title: (0, A.jsx)(l, {
                  id: `skills.page.filteredEmpty`,
                  defaultMessage: `No skills match your filters`,
                  description: `Empty state when filters hide all skills`,
                }),
                description: (0, A.jsx)(l, {
                  id: `skills.page.filteredEmptyDescription`,
                  defaultMessage: `Try adjusting your search or scope filters`,
                  description: `Description for filtered skills empty state`,
                }),
              }),
            })),
            (t[20] = e))
          : (e = t[20]),
          (h = e));
        break bb0;
      }
      p = E;
      let y;
      (t[21] !== s ||
      t[22] !== n ||
      t[23] !== d ||
      t[24] !== f ||
      t[25] !== u ||
      t[26] !== c
        ? ((y = (e) =>
            (0, A.jsx)(
              ge,
              {
                skill: e,
                canInstall: s,
                hostId: n,
                isInstalled: C({ installedSkillMatchKeys: d, skill: e }),
                isInstalling: f === e.id,
                repoRoot: c,
                onInstall: u,
              },
              e.id,
            )),
          (t[21] = s),
          (t[22] = n),
          (t[23] = d),
          (t[24] = f),
          (t[25] = u),
          (t[26] = c),
          (t[27] = y))
        : (y = t[27]),
        (m = v.map(y)));
    }
    ((t[0] = s),
      (t[1] = i),
      (t[2] = n),
      (t[3] = d),
      (t[4] = f),
      (t[5] = r),
      (t[6] = u),
      (t[7] = c),
      (t[8] = o),
      (t[9] = a),
      (t[10] = p),
      (t[11] = m),
      (t[12] = h));
  } else ((p = t[10]), (m = t[11]), (h = t[12]));
  if (h !== Symbol.for(`react.early_return_sentinel`)) return h;
  let g;
  return (
    t[28] !== p || t[29] !== m
      ? ((g = (0, A.jsx)(p, { children: m })),
        (t[28] = p),
        (t[29] = m),
        (t[30] = g))
      : (g = t[30]),
    g
  );
}
export { j as t };
//# sourceMappingURL=skills-page-DD3zRxoK.js.map
