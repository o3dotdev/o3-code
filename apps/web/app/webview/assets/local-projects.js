import { Dt as e, Et as t, bt as n, kr as r } from "./src-C.js";
import {
  Ba as i,
  Fi as a,
  Ia as o,
  Li as s,
  po as c,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { l, y as u } from "./setting-storage.js";
import { t as d } from "./thread-context-inputs-DBrOekVr.js";
import { n as f } from "./remote-projects.js";
import { t as p } from "./projectless-thread.js";
var m = `New project`,
  h = {
    create: g,
    getFolderPath: x,
    getId: b,
    getThreadStartCwd: S,
    remove: y,
    rename: v,
    select: _,
  };
async function g({
  addWritableRoot: e,
  existingLocalProjects: n,
  name: i,
  now: a,
  projectId: o,
  projectOrder: s,
  setGlobalSetting: c,
  sources: l,
}) {
  return (
    await c(
      r.LOCAL_PROJECTS,
      t({
        localProjects: n ?? {},
        projectId: o,
        project: { id: o, name: E(i, l), createdAt: a, updatedAt: a },
      }),
    ),
    await c(r.PROJECT_ORDER, [o, ...(s ?? []).filter((e) => e !== o)]),
    await Promise.all(
      w(l).map((t) => e({ legacyRoot: null, projectId: o, root: t })),
    ),
    { isLocalProject: !0, projectId: o }
  );
}
function _(e, t) {
  let n = C(t);
  return (
    e.query.setData(a, r.ACTIVE_REMOTE_PROJECT_ID, { value: void 0 }),
    e.query.setData(d, { roots: [n.projectId] }),
    f(e, null),
    n.folderPath == null
      ? s(e, r.ACTIVE_WORKSPACE_ROOTS, [n.projectId])
      : u.dispatchMessage(`electron-set-active-workspace-root`, {
          root: n.folderPath,
        }),
    n.projectId
  );
}
async function v({
  existingLocalProjects: e,
  name: n,
  now: i,
  project: a,
  setGlobalSetting: o,
  updateWorkspaceRootLabel: s,
}) {
  let c = C(a),
    l = n.trim();
  if (c.folderPath != null) {
    (u.dispatchMessage(`electron-rename-workspace-root-option`, {
      root: c.folderPath,
      label: l,
    }),
      s?.(c.folderPath, l));
    return;
  }
  let d = e?.[c.projectId];
  d != null &&
    (await o(
      r.LOCAL_PROJECTS,
      t({
        localProjects: e ?? {},
        projectId: c.projectId,
        project: { ...d, name: l || d.name, updatedAt: i },
      }),
    ));
}
async function y({
  clearWritableRoots: e,
  existingLocalProjects: n,
  pinnedProjectIds: i,
  project: a,
  projectOrder: o,
  setGlobalSetting: s,
  workspaceRootOptions: c,
}) {
  let l = C(a),
    d =
      l.metadataProjectId == null
        ? []
        : [
            s(
              r.LOCAL_PROJECTS,
              t({
                localProjects: n ?? {},
                projectId: l.metadataProjectId,
                project: null,
              }),
            ),
            e({ legacyRoot: null, projectId: l.metadataProjectId }),
          ];
  (await Promise.all([
    ...d,
    s(
      r.PROJECT_ORDER,
      o?.filter((e) => e !== l.projectId),
    ),
    s(
      r.PINNED_PROJECT_IDS,
      i?.filter((e) => e !== l.projectId),
    ),
  ]),
    l.folderPath != null &&
      u.dispatchMessage(`electron-update-workspace-root-options`, {
        roots: c.filter((e) => e !== l.folderPath),
      }));
}
function b(e) {
  return C(e).projectId;
}
function x(e) {
  return C(e).folderPath;
}
function S(e) {
  return C(e).projectId;
}
function C(e) {
  let t = e.projectId;
  if (e.isLocalProject === !0)
    return { folderPath: null, metadataProjectId: t, projectId: t };
  let n = e.path ?? t;
  return { folderPath: n, metadataProjectId: null, projectId: n };
}
function w(e) {
  let t = new Set(),
    n = [];
  for (let r of e) {
    let e = i(r);
    t.has(e) || (t.add(e), n.push(r));
  }
  return n;
}
async function T({ projectId: t, prompt: i, validateProjectId: a = !1 }) {
  let [{ value: o }, { value: s }, u] = await Promise.all([
      l(`get-global-state`, { params: { key: r.LOCAL_PROJECTS } }),
      l(`get-global-state`, { params: { key: r.PROJECT_WRITABLE_ROOTS } }),
      a
        ? l(`workspace-root-options`, { params: { hostId: c } })
        : Promise.resolve(null),
    ]),
    d = e(o),
    f = Object.hasOwn(d, t);
  if (u != null && !u.roots.includes(t) && !f)
    throw Error(
      `Unknown projectId: ${t}\nSaved projectIds:\n${u.roots.join(`
`)}`,
    );
  let m = n(s);
  if (!Object.hasOwn(m, t) && !f) return null;
  let h = await p({
    projectId: t,
    projectWritableRoots: m,
    legacyRoot: f ? null : t,
    prompt: i,
  });
  return {
    cwd: h.cwd,
    projectlessOutputDirectory: h.generatedWorkspace?.outputDirectory ?? null,
    workspaceRoots: h.workspaceRoots,
    projectAssignment: {
      projectKind: `local`,
      projectId: t,
      ...(f ? {} : { path: t }),
      cwd: h.cwd,
      pendingCoreUpdate: !1,
    },
  };
}
function E(e, t) {
  return e.trim() || o(t[0] ?? ``).trim() || m;
}
export { w as n, h as r, T as t };
//# sourceMappingURL=local-projects.js.map
