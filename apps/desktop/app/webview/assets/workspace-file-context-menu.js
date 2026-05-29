import { Nn as e, sr as t } from "./src-C.js";
import "./app-server-manager-signals-DkRDRgNB.js";
import { B as n, V as r, _ as i, l as a, u as o } from "./setting-storage.js";
import { f as s } from "./statsig--EYRNU53.js";
import { a as c } from "./thread-context-inputs-DBrOekVr.js";
import { t as l } from "./os-info-CLWbGRUe.js";
import { t as u } from "./open-workspace-file-WgoEFjrv.js";
import { i as d } from "./browser-sidebar-availability.js";
import { t as f } from "./copy-to-clipboard-C2Mq2hN-.js";
import { t as p } from "./open-target-context-menu-items.js";
import { n as m, r as h } from "./open-target-selection.js";
function g(e, { hostId: t, path: n }) {
  let r = t == null ? { path: n } : { hostId: t, path: n },
    s = o(`read-file`, r),
    c =
      e.getQueryData(s) ??
      (t == null
        ? void 0
        : e.getQueryData(o(`read-file`, { path: n, hostId: t })));
  if (c != null) {
    f(c.contents);
    return;
  }
  e.fetchQuery({
    queryFn: ({ signal: e }) => a(`read-file`, { params: r, signal: e }),
    queryKey: s,
    staleTime: i.FIVE_SECONDS,
  })
    .then(({ contents: e }) => f(e))
    .catch(() => void 0);
}
var _ = r({
  openInTarget: {
    id: `markdown.fileReference.openInTarget`,
    defaultMessage: `Open in {target}`,
    description: `Context menu action to open a referenced file in the preferred app`,
  },
  viewInCodexBrowser: {
    id: `markdown.fileReference.viewInCodexBrowser`,
    defaultMessage: `View in browser`,
    description: `Context menu action to open a referenced local HTML file in the Codex browser`,
  },
  viewFile: {
    id: `markdown.fileReference.viewFile`,
    defaultMessage: `Open file`,
    description: `Context menu action to open a referenced local HTML file in the file viewer`,
  },
  openWith: {
    id: `markdown.fileReference.openWith`,
    defaultMessage: `Open with`,
    description: `Context menu submenu label for choosing an app to open a referenced file`,
  },
  openWithTarget: {
    id: `markdown.fileReference.openWithTarget`,
    defaultMessage: `{target}`,
    description: `Context menu action to open a referenced file in a specific app`,
  },
  copyPath: {
    id: `markdown.fileReference.copyPath`,
    defaultMessage: `Copy path`,
    description: `Context menu item to copy a referenced file path`,
  },
  openInFinder: {
    id: `markdown.fileReference.openInFinder`,
    defaultMessage: `Reveal in Finder`,
    description: `Context menu item to reveal a referenced file in Finder`,
  },
  openInExplorer: {
    id: `markdown.fileReference.openInExplorer`,
    defaultMessage: `Open in Explorer`,
    description: `Context menu item to reveal a referenced file in File Explorer`,
  },
  openInFileManager: {
    id: `markdown.fileReference.openInFileManager`,
    defaultMessage: `Open in File Manager`,
    description: `Context menu item to reveal a referenced file in the system file manager`,
  },
});
function v({ cwd: e, hostId: t, path: n }) {
  return {
    gcTime: i.INFINITE,
    queryKey: o(`open-in-targets`, { cwd: e, hostId: t, path: n }),
    queryFn: () =>
      a(`open-in-targets`, { params: { cwd: e, hostId: t, path: n } }),
    staleTime: i.ONE_MINUTE,
  };
}
function y(e) {
  return {
    primaryTarget: h({
      preferredTarget: e?.preferredTarget ?? null,
      targets: e?.targets ?? [],
      availableTargets: e?.availableTargets ?? [],
      mode: e?.mode,
    }),
    visibleTargets: m({
      targets: e?.targets ?? [],
      availableTargets: e?.availableTargets ?? [],
      includeHiddenTargets: !0,
      mode: e?.mode,
    }),
  };
}
function b(e, { cwd: t, hostId: n, path: r }) {
  e.queryClient.prefetchQuery(v({ cwd: t, hostId: n, path: r }));
}
function x(e, t) {
  return e.queryClient
    .fetchQuery(v({ cwd: t.cwd, hostId: t.hostId, path: t.path }))
    .catch(() => null)
    .then(() => S(e, t));
}
function S(
  r,
  {
    column: i,
    cwd: a,
    endLine: o,
    hostId: m,
    line: h,
    openInSidePanel: b = !1,
    path: x,
  },
) {
  let S = r.get(c, m ?? `local`),
    w = r.get(d),
    T = s(r, `1063250567`),
    { primaryTarget: E, visibleTargets: D } = y(
      r.queryClient.getQueryData(v({ cwd: a, hostId: m, path: x }).queryKey),
    ),
    O = [],
    k = b,
    A = w && !e(S) && t(x),
    j = h == null ? void 0 : (i ?? 1),
    M = (e, t) => {
      u({
        scope: r,
        path: x,
        line: h,
        column: j,
        cwd: a,
        hostConfig: S,
        ...(m == null ? {} : { hostId: m }),
        target: e,
        appPath: t,
      });
    };
  return (
    A &&
      O.push({
        id: k ? `workspace-file-view-file` : `workspace-file-view-browser`,
        message: k ? _.viewFile : _.viewInCodexBrowser,
        onSelect: k
          ? () => {
              u({
                scope: r,
                path: x,
                line: h,
                column: j,
                cwd: a,
                hostConfig: S,
                ...(m == null ? {} : { hostId: m }),
                artifactTabsEnabled: T,
                endLine: o,
                openInSidePanel: b,
              });
            }
          : () => {
              u({
                path: x,
                cwd: a,
                hostConfig: S,
                ...(m == null ? {} : { hostId: m }),
                browserSidebarEnabled: w,
                modifiedClick: !0,
              });
            },
      }),
    E != null &&
      (A
        ? O.push({
            id: `workspace-file-open-targets`,
            message: _.openWith,
            submenu: D.map((e) => ({
              id: `workspace-file-open-target-${e.id}`,
              message: _.openWithTarget,
              messageValues: { target: e.label },
              icon: e.icon,
              onSelect: () => M(e.target, e.appPath),
            })),
          })
        : O.push(
            ...p({
              idPrefix: `workspace-file-open`,
              messages: {
                openInTarget: _.openInTarget,
                openIn: _.openWith,
                openInTargetSubmenu: _.openWithTarget,
              },
              onOpenInTarget: M,
              primaryTarget: E,
              visibleTargets: D,
            }),
          ),
      O.push({
        id: `workspace-file-open-target-separator`,
        type: `separator`,
      })),
    O.push({
      id: `workspace-file-copy-path`,
      message: _.copyPath,
      onSelect: () => {
        f(x);
      },
    }),
    O.push({
      id: `workspace-file-copy-contents`,
      message: n({
        id: `markdown.fileReference.copyFileContents`,
        defaultMessage: `Copy file contents`,
        description: `Context menu item to copy a referenced file's contents`,
      }),
      onSelect: () => {
        g(r.queryClient, { hostId: m, path: x });
      },
    }),
    e(S) ||
      O.push({
        id: `workspace-file-reveal-path`,
        message: C(r.get(l).data?.platform),
        onSelect: () => {
          M(`fileManager`);
        },
      }),
    O
  );
}
function C(e) {
  return e === `darwin`
    ? _.openInFinder
    : e === `win32`
      ? _.openInExplorer
      : _.openInFileManager;
}
export { b as a, y as i, S as n, g as o, v as r, x as t };
//# sourceMappingURL=workspace-file-context-menu.js.map
