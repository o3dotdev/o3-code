import {
  D as e,
  Di as t,
  Fi as n,
  Hi as r,
  Ni as i,
  Ri as a,
  Vi as o,
  Zi as s,
  qi as c,
  st as l,
  zr as u,
} from "./src-C.js";
import {
  E as ee,
  hn as d,
  mn as f,
} from "./app-server-manager-signals-DkRDRgNB.js";
import "./jsx-runtime.js";
import "./marked.esm-BR-H6018.js";
import { n as p, s as te, u as m, y as h } from "./setting-storage.js";
import "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./use-global-state.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./route-scope.js";
import "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import { V as g, a as _, c as v, f as y, o as b } from "./app-shell-state.js";
import "./use-platform.js";
import { E as x, j as S, k as ne, w as re } from "./diff-view-mode.js";
import { t as ie } from "./browser-sidebar-manager.js";
import {
  l as ae,
  n as oe,
  s as se,
} from "./app-shell-tab-controller-BTWycTBb.js";
import { t as ce } from "./local-conversation-title-signals-bVA-f9H8.js";
import {
  L as C,
  Nt as w,
  r as le,
} from "./review-navigation-model-DMRVNxCn.js";
import "./focus-composer.js";
import "./sumBy-zUPwGmzt.js";
import "./thread-context-CaET2O8s.js";
import "./git-current-branch-query.js";
import "./terminal.js";
import "./app-intl-signal.js";
import { a as T, o as E } from "./thread-page-bottom-panel-state.js";
import "./xterm-display-helpers.js";
import "./info-B8GAwpK6.js";
import "./error-boundary.js";
import "./download.js";
import "./with-window.js";
import "./use-resolved-theme-variant.js";
import "./thread-panel-state.js";
import {
  _ as D,
  a as O,
  c as k,
  d as A,
  f as j,
  g as M,
  i as N,
  l as P,
  m as F,
  n as I,
  o as L,
  p as R,
  r as z,
  s as B,
  t as V,
  u as H,
} from "./window-app-action-helpers.js";
function U(e) {
  return {
    type: e.schema.shape.type.value,
    schema: e.schema,
    run: (t, n) => e.run(e.schema.parse(t), n),
  };
}
function W(e) {
  let t = new Map();
  for (let n of e) t.set(n.type, n.run);
  return t;
}
var ue = U({
    schema: r({ type: a(`app.appearance.get`) }),
    run: async () => {
      let [t, n, r, i, a] = await Promise.all([
        p(e.theme),
        p(e.lightCodeThemeId),
        p(e.darkCodeThemeId),
        p(e.lightChromeTheme),
        p(e.darkChromeTheme),
      ]);
      return {
        schemaVersion: 1,
        mode: t,
        themes: {
          light: { codeThemeId: n, chromeTheme: i },
          dark: { codeThemeId: r, chromeTheme: a },
        },
      };
    },
  }),
  de = U({
    schema: r({ type: a(`app.appearance.get_available_themes`) }),
    run: () => ({
      schemaVersion: 1,
      themes: x().map((e) => ({
        id: e.id,
        label: e.label,
        supportsDark: e.registrationByVariant.dark != null,
        supportsLight: e.registrationByVariant.light != null,
      })),
    }),
  });
async function G(e, t, n, r) {
  let i = m(`get-settings`),
    a = e.queryClient?.getQueryData(i),
    o = r?.optimistic ?? !0;
  o && e.queryClient?.setQueryData(i, { values: { ...a?.values, [t.key]: n } });
  try {
    (await te(t, n),
      o ||
        e.queryClient?.setQueryData(i, {
          values: { ...a?.values, [t.key]: n },
        }));
  } catch (t) {
    throw (a != null && e.queryClient?.setQueryData(i, a), t);
  } finally {
    (await e.queryClient?.invalidateQueries({ queryKey: i }),
      h.dispatchMessage(`query-cache-invalidate`, { queryKey: [...i] }));
  }
}
var fe = U({
    schema: r({
      type: a(`app.appearance.set_mode`),
      mode: t([`light`, `dark`, `system`]),
    }),
    run: async ({ mode: t }, n) => (
      await G(n, e.theme, t, { optimistic: !1 }),
      { schemaVersion: 1, mode: t }
    ),
  }),
  K = c().regex(/^#[0-9a-fA-F]{6}$/),
  pe = r({ code: c().nullable().optional(), ui: c().nullable().optional() }),
  me = r({ diffAdded: K, diffRemoved: K, skill: K }),
  he = r({
    accent: K.optional(),
    contrast: o().int().min(0).max(100).optional(),
    fonts: pe.optional(),
    ink: K.optional(),
    opaqueWindows: i().optional(),
    semanticColors: me.partial().optional(),
    surface: K.optional(),
  }),
  ge = U({
    schema: r({
      type: a(`app.appearance.set_theme`),
      theme: n(`kind`, [
        r({
          kind: a(`preset`),
          themeId: c().refine(ne, `Invalid code theme id`),
        }),
        r({ kind: a(`custom`), patch: he }),
      ]),
      variant: t([`light`, `dark`, `both`]).default(`both`),
    }),
    run: async ({ theme: e, variant: t }, n) => {
      let r = [],
        i = { schemaVersion: 1, theme: e, updated: r };
      if (t === `light` || t === `both`) {
        let t = await q(n, `light`, e);
        (r.push(`light`), (i.appearanceLightChromeTheme = t));
      }
      if (t === `dark` || t === `both`) {
        let t = await q(n, `dark`, e);
        (r.push(`dark`), (i.appearanceDarkChromeTheme = t));
      }
      return ((i.updated = r), i);
    },
  });
async function q(e, t, n) {
  let { chromeThemeSetting: r, codeThemeSetting: i } = ve(t),
    a = S(await p(r), t);
  if (n.kind === `custom`) {
    let t = _e(a, n.patch);
    return (await G(e, r, t), t);
  }
  let o = await re(n.themeId, t),
    s = {
      ...a,
      ...o,
      fonts: { ...a.fonts, ...o.fonts },
      semanticColors: { ...a.semanticColors, ...o.semanticColors },
    };
  return (await Promise.all([G(e, i, n.themeId), G(e, r, s)]), s);
}
function _e(e, t) {
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
function ve(t) {
  return t === `light`
    ? {
        chromeThemeSetting: e.lightChromeTheme,
        codeThemeSetting: e.lightCodeThemeId,
      }
    : {
        chromeThemeSetting: e.darkChromeTheme,
        codeThemeSetting: e.darkCodeThemeId,
      };
}
function J(e) {
  if (e.scope == null) throw Error(`App action requires a route scope`);
  return e.scope;
}
var ye = U({
  schema: r({ type: a(`app.get_summary`) }),
  run: (e, t) => {
    let n = J(t),
      r = n.get(v),
      i = n.get(_),
      a = n.get(b),
      o = i && a ? n.get(oe.activeTab$) : null,
      s = o?.tabId ?? null,
      c = s === ae.DIFF,
      l = n.get(g),
      u = n.get(T);
    return {
      schemaVersion: 1,
      window: {
        windowId: V,
        route: Se(n.value),
        thread: xe(n),
        panels: {
          browser: Ce(we(n), o, l),
          sidebar: { open: r },
          review: {
            open: c,
            fullscreen: c && l,
            fileTreeOpen: c && n.get(y),
            view: n.get(w),
          },
          terminal: { open: u },
          rightPanel: { fullscreen: l, kind: s },
        },
        ...(r ? { sidebar: { viewport: Y(M.sidebarScroll), rows: Te() } } : {}),
        ...(c ? { review: { viewport: Y(M.reviewScroll), files: De(n) } } : {}),
        ...(be(n.value) ? { timeline: Y(M.timelineScroll) } : {}),
      },
    };
  },
});
function be(e) {
  switch (e.routeKind) {
    case `local-thread`:
    case `remote-thread`:
      return !0;
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return !1;
  }
}
function xe(e) {
  switch (e.value.routeKind) {
    case `local-thread`:
      return {
        id: e.value.conversationId,
        kind: `local`,
        hostId: e.get(ee, e.value.conversationId) ?? `local`,
        title: e.get(ce, e.value.conversationId),
      };
    case `remote-thread`:
      return { id: e.value.taskId, kind: `remote`, title: null };
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return null;
  }
}
function Se(e) {
  switch (e.routeKind) {
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
      };
    case `local-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        threadId: e.conversationId,
      };
    case `remote-thread`:
      return {
        kind: e.routeKind,
        pathname: e.pathname,
        routeTemplate: e.routeTemplate,
        taskId: e.taskId,
      };
  }
}
function Ce(e, t, n) {
  let r = se(t, e),
    i = r != null,
    a = e == null || r == null ? null : ie.getSnapshot(e, r);
  return {
    canGoBack: a?.canGoBack ?? !1,
    canGoForward: a?.canGoForward ?? !1,
    fullscreen: i && n,
    isLoading: a?.isLoading ?? !1,
    open: i,
    title: a?.title ?? null,
    url: a?.url ?? null,
  };
}
function we(e) {
  switch (e.value.routeKind) {
    case `local-thread`:
      return e.value.conversationId;
    case `remote-thread`:
      return e.value.taskId;
    case `home`:
    case `new-thread-panel`:
    case `other`:
      return null;
  }
}
function Y(e) {
  let t = document.querySelector(e);
  return t == null
    ? { present: !1 }
    : {
        present: !0,
        scrollTop: Math.round(t.scrollTop),
        scrollHeight: Math.round(t.scrollHeight),
        clientHeight: Math.round(t.clientHeight),
      };
}
function Te() {
  return Array.from(document.querySelectorAll(D)).map((e, t) => Ee(e, t));
}
function Ee(e, t) {
  let n = Z(e);
  return e.matches(M.sidebarSection)
    ? {
        type: `section`,
        index: t,
        heading: e.dataset.appActionSidebarSectionHeading ?? ``,
        collapsed: e.dataset.appActionSidebarSectionCollapsed === `true`,
        visibility: n,
      }
    : e.matches(M.sidebarProjectRow)
      ? {
          type: `project`,
          index: t,
          projectId: e.dataset.appActionSidebarProjectId ?? ``,
          label: e.dataset.appActionSidebarProjectLabel ?? ``,
          collapsed: e.dataset.appActionSidebarProjectCollapsed === `true`,
          visibility: n,
        }
      : {
          type: `thread`,
          index: t,
          active: e.dataset.appActionSidebarThreadActive === `true`,
          hostId: e.dataset.appActionSidebarThreadHostId || null,
          id: e.dataset.appActionSidebarThreadId ?? ``,
          kind: e.dataset.appActionSidebarThreadKind ?? ``,
          pinned: e.dataset.appActionSidebarThreadPinned === `true`,
          title: e.dataset.appActionSidebarThreadTitle ?? ``,
          visibility: n,
        };
}
function De(e) {
  let t = Oe(),
    n = new Set(e.get(C).map((e) => e.path));
  return [
    ...e.get(C).map((e) => ({
      path: e.path,
      additions: e.summary?.additions ?? e.diff?.additions ?? 0,
      deletions: e.summary?.deletions ?? e.diff?.deletions ?? 0,
      ...X(t.get(e.path)),
    })),
    ...Array.from(t.entries()).flatMap(([e, t]) =>
      n.has(e) ? [] : [{ path: e, additions: null, deletions: null, ...X(t) }],
    ),
  ].map((e, t) => ({ index: t, ...e }));
}
function X(e) {
  let t = e?.querySelector(M.reviewFileToggle);
  return {
    expanded:
      t == null ? null : t.dataset.appActionReviewFileExpanded === `true`,
    visibility: e == null ? `not_mounted` : Z(e),
  };
}
function Oe() {
  let e = Array.from(document.querySelectorAll(M.reviewFile));
  return new Map(
    e.flatMap((e) => {
      let t = e.dataset.reviewPath;
      return t == null ? [] : [[t, e]];
    }),
  );
}
function Z(e) {
  let t = e.getBoundingClientRect();
  return t.bottom <= 0 ||
    t.right <= 0 ||
    t.top >= window.innerHeight ||
    t.left >= window.innerWidth
    ? `offscreen`
    : `visible`;
}
var ke = r({ type: a(`app.help`), action: c().optional() });
function Ae(e) {
  return U({ schema: ke, run: ({ action: t }) => je(e(), t) });
}
function je(e, t, n = Me) {
  return {
    schemaVersion: 1,
    prompt: n,
    actions: e
      .filter((e) => (t == null ? !0 : e.type === t))
      .map((e) => ({
        type: e.type,
        jsonSchema: JSON.stringify(s(e.schema), null, 2),
      })),
  };
}
var Me = `You can inspect or operate the Codex desktop app itself by calling this dynamic tool with exactly one JSON action payload.

Use this dynamic tool only for Codex Desktop UI state and actions, such as windows, sidebars, review panels, appearance, and Codex settings. Do not use it for other desktop apps, websites, browsers, shell commands, or workspace files; use the relevant computer-use, browser, shell, or file tool instead.

Use {"type":"app.get_summary"} before acting on anything that depends on the visible UI, such as "my first pinned thread", "the second project", "the visible review file", or current panel state. The summary returns stable references such as thread ids, project ids, file paths, panel open state, and scroll positions. Use those references exactly in follow-up actions.

Use {"type":"app.help","action":"windows.show_thread"} to inspect one action, or {"type":"app.help"} to inspect every registered action schema.

The current implementation targets the active primary app window. Use "current" for windowId.

Common workflow examples:
- Read the current appearance mode, preset ids, and custom chrome colors with app.appearance.get.
- Switch app appearance mode with app.appearance.set_mode and {"mode":"light"}, {"mode":"dark"}, or {"mode":"system"}.
- Pick a code theme preset with app.appearance.set_theme and {"variant":"light","theme":{"kind":"preset","themeId":"monokai"}}.
- Adjust custom chrome theme colors with app.appearance.set_theme and {"variant":"dark","theme":{"kind":"custom","patch":{"accent":"#ff8800"}}}.
- Get available theme ids with app.appearance.get_available_themes.
- Open a review file: call app.get_summary while the review panel is open, choose a file path from window.review.files, then call windows.review.scroll_to_file or windows.review.file_set_expanded.
- Scroll Codex UI surfaces: use the relevant windows.sidebar.scroll, windows.review.scroll, or windows.timeline.scroll action with a pixels, pages, or edge scroll object. Use the dedicated browser-use tool for browser navigation and page scrolling.

- Go to the first pinned thread: call app.get_summary, find the first row in window.sidebar.rows with type "thread" and pinned true, then call windows.show_thread with that row's id as threadId.
- Go home: call windows.show_home.
- Toggle panels: call windows.sidebar.toggle, windows.terminal.toggle, or windows.review.toggle.

Prefer the smallest action that directly satisfies the user request.`,
  Ne = U({
    schema: r({ type: a(`windows.nav.back`), windowId: I }),
    run: () => {
      h.dispatchHostMessage({ type: `navigate-back` });
    },
  }),
  Pe = U({
    schema: r({ type: a(`windows.nav.forward`), windowId: I }),
    run: () => {
      h.dispatchHostMessage({ type: `navigate-forward` });
    },
  }),
  Fe = U({
    schema: r({ type: a(`windows.review.collapse_all`), windowId: I }),
    run: () => {
      window.dispatchEvent(
        new CustomEvent(`wham-toggle-all-diffs`, {
          detail: { open: !1, scope: `review` },
        }),
      );
    },
  }),
  Q = U({
    schema: r({ type: a(`windows.review.expand_all`), windowId: I }),
    run: () => {
      window.dispatchEvent(
        new CustomEvent(`wham-toggle-all-diffs`, {
          detail: { open: !0, scope: `review` },
        }),
      );
    },
  }),
  Ie = U({
    schema: r({
      type: a(`windows.review.file_set_expanded`),
      windowId: I,
      path: c(),
      expanded: i(),
    }),
    run: ({ path: e, expanded: t }) => {
      let n = N(e).querySelector(M.reviewFileToggle);
      if (n == null) throw Error(`Missing review file toggle: ${e}`);
      n.dataset.appActionReviewFileExpanded !== String(t) && n.click();
    },
  }),
  Le = U({
    schema: r({ type: a(`windows.review.scroll`), windowId: I, scroll: F }),
    run: ({ scroll: e }) => {
      k(z(M.reviewScroll), e);
    },
  }),
  Re = U({
    schema: r({
      type: a(`windows.review.scroll_to_file`),
      windowId: I,
      path: c(),
      align: t([`top`, `center`, `bottom`]).optional(),
    }),
    run: ({ path: e, align: t }, n) => {
      let r = N(e);
      (le(J(n), r.dataset.reviewPath ?? e),
        r.scrollIntoView({ block: ze(t ?? `top`), behavior: `auto` }));
    },
  });
function ze(e) {
  switch (e) {
    case `top`:
      return `start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `end`;
  }
}
var Be = U({
    schema: r({
      type: a(`windows.review.set_fullscreen`),
      windowId: I,
      fullscreen: i(),
    }),
    run: ({ fullscreen: e }, t) => {
      J(t).set(g, e);
    },
  }),
  Ve = U({
    schema: r({
      type: a(`windows.review.set_view`),
      windowId: I,
      view: t([`turn`, `branch`, `unstaged`, `staged`]),
    }),
    run: ({ view: e }, t) => {
      J(t).set(w, e === `turn` ? `last-turn` : e);
    },
  }),
  He = U({
    schema: r({ type: a(`windows.review.toggle`), windowId: I }),
    run: () => {
      h.dispatchHostMessage({ type: `toggle-diff-panel` });
    },
  }),
  Ue = U({
    schema: r({ type: a(`windows.show_home`), windowId: I }),
    run: () => {
      h.dispatchHostMessage({ type: `new-chat` });
    },
  }),
  We = U({
    schema: r({ type: a(`windows.show_thread`), windowId: I, threadId: c() }),
    run: ({ threadId: e }) => {
      h.dispatchHostMessage({ type: `navigate-to-route`, path: Ge(e) });
    },
  });
function Ge(e) {
  let t = d(e);
  return t == null ? l(u(e)) : f(t.key);
}
var Ke = [
    ye,
    ue,
    de,
    fe,
    ge,
    Ne,
    Pe,
    Fe,
    Q,
    Ie,
    Le,
    Re,
    Be,
    Ve,
    He,
    Ue,
    We,
    U({
      schema: r({
        type: a(`windows.sidebar.project_set_collapsed`),
        windowId: I,
        project: A,
        collapsed: i(),
      }),
      run: ({ project: e, collapsed: t }) => {
        let n = O(e);
        n.dataset.appActionSidebarProjectCollapsed !== String(t) && n.click();
      },
    }),
    U({
      schema: r({
        type: a(`windows.sidebar.project_set_show_all`),
        windowId: I,
        project: A,
        showAll: i(),
      }),
      run: ({ project: e, showAll: t }) => {
        let n = O(e);
        if (n.dataset.appActionSidebarProjectCollapsed === `true` && !t) return;
        let r = n.dataset.appActionSidebarProjectId;
        if (r == null) throw Error(`Missing sidebar project id`);
        let i = z(L(r));
        if (i.dataset.appActionSidebarProjectShowAll === String(t)) return;
        let a = i.querySelector(M.sidebarProjectShowAllToggle);
        if (a == null)
          throw Error(`Missing sidebar project show more toggle: ${r}`);
        a.click();
      },
    }),
    U({
      schema: r({ type: a(`windows.sidebar.scroll`), windowId: I, scroll: F }),
      run: ({ scroll: e }) => {
        k(z(M.sidebarScroll), e);
      },
    }),
    U({
      schema: r({
        type: a(`windows.sidebar.section_set_collapsed`),
        windowId: I,
        section: j,
        collapsed: i(),
      }),
      run: ({ section: e, collapsed: t }) => {
        let n = B(e);
        if (n.dataset.appActionSidebarSectionCollapsed === String(t)) return;
        let r = n.querySelector(M.sidebarSectionToggle);
        if (r == null)
          throw Error(`Sidebar section does not have a collapse toggle`);
        r.click();
      },
    }),
    U({
      schema: r({
        type: a(`windows.sidebar.select_project`),
        windowId: I,
        project: A,
      }),
      run: ({ project: e }) => {
        let t = O(e).querySelector(M.sidebarProjectSelect);
        if (t == null) throw Error(`Missing sidebar project select action`);
        t.click();
      },
    }),
    U({
      schema: r({ type: a(`windows.sidebar.toggle`), windowId: I }),
      run: () => {
        h.dispatchHostMessage({ type: `toggle-sidebar` });
      },
    }),
    U({
      schema: r({ type: a(`windows.terminal.toggle`), windowId: I }),
      run: (e, t) => {
        E(J(t));
      },
    }),
    U({
      schema: r({ type: a(`windows.timeline.scroll`), windowId: I, scroll: F }),
      run: ({ scroll: e }) => {
        P(z(M.timelineScroll), e);
      },
    }),
    U({
      schema: r({
        type: a(`windows.timeline.scroll_to_turn`),
        windowId: I,
        direction: R,
      }),
      run: ({ direction: e }) => {
        H(z(M.timelineScroll), e);
      },
    }),
  ],
  $ = [Ae(Je), ...Ke],
  qe = W($);
function Je() {
  return $;
}
export { qe as appActionRegistry };
//# sourceMappingURL=register-app-actions.js.map
