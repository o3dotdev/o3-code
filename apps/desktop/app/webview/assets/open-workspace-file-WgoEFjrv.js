import { s as e } from "./chunk-Bj-mKKzh.js";
import { Nn as t, sr as n, xr as r } from "./src-C.js";
import {
  Br as i,
  Ha as a,
  Hr as o,
  Ur as s,
  Vr as c,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { l } from "./setting-storage.js";
import { t as u } from "./product-logger-DusapRyT.js";
import { t as d } from "./send-open-file-request.js";
import { t as f } from "./mime-types.js";
import { t as p } from "./file-kind-GUSLvXLO.js";
var m = null;
function h() {
  return m;
}
function g(e) {
  m = e;
}
var _ = new Map([
  [`csv`, `csv`],
  [`docx`, `docx`],
  [`ipynb`, `ipynb`],
  [`pdf`, `pdf`],
  [`pptx`, `pptx`],
  [`tex`, `tex`],
  [`tsv`, `tsv`],
  [`xlsm`, `xlsx`],
  [`xlsx`, `xlsx`],
]);
function v(e) {
  let t = c(e);
  return t == null ? null : (_.get(t) ?? null);
}
function y(e) {
  switch (e) {
    case `csv`:
    case `ipynb`:
    case `tex`:
    case `tsv`:
      return !0;
    case `docx`:
    case `pdf`:
    case `pptx`:
    case `xlsx`:
      return !1;
  }
}
function b(e) {
  let t = v(e);
  if (t == null) return null;
  switch (t) {
    case `csv`:
    case `tsv`:
    case `xlsx`:
      return { artifactType: `spreadsheet`, importKind: t };
    case `docx`:
      return { artifactType: `document`, importKind: t };
    case `ipynb`:
      return { artifactType: `notebook`, importKind: t };
    case `pdf`:
    case `tex`:
      return { artifactType: `pdf`, importKind: t };
    case `pptx`:
      return { artifactType: `slides`, importKind: t };
  }
}
var x = new Map([
    [`3g2`, `video`],
    [`3gp`, `video`],
    [`7z`, `archive`],
    [`aac`, `audio`],
    [`avi`, `video`],
    [`br`, `archive`],
    [`bz2`, `archive`],
    [`dmg`, `archive`],
    [`flac`, `audio`],
    [`flv`, `video`],
    [`gz`, `archive`],
    [`iso`, `archive`],
    [`jar`, `archive`],
    [`m4a`, `audio`],
    [`m4v`, `video`],
    [`mkv`, `video`],
    [`mov`, `video`],
    [`mp3`, `audio`],
    [`mp4`, `video`],
    [`m2ts`, `video`],
    [`mpeg`, `video`],
    [`mpg`, `video`],
    [`mts`, `video`],
    [`ogg`, `audio`],
    [`ogv`, `video`],
    [`rar`, `archive`],
    [`tar`, `archive`],
    [`tgz`, `archive`],
    [`txz`, `archive`],
    [`vob`, `video`],
    [`wav`, `audio`],
    [`webm`, `video`],
    [`wma`, `audio`],
    [`wmv`, `video`],
    [`xz`, `archive`],
    [`zip`, `archive`],
    [`zst`, `archive`],
  ]),
  S = new Map([
    ...x,
    [`doc`, `word-document`],
    [`docx`, `word-document`],
    [`key`, `keynote-deck`],
    [`numbers`, `numbers-spreadsheet`],
    [`odp`, `opendocument-presentation`],
    [`ods`, `opendocument-spreadsheet`],
    [`odt`, `opendocument-text`],
    [`pages`, `pages-document`],
    [`ppt`, `powerpoint-deck`],
    [`pptx`, `powerpoint-deck`],
    [`rtf`, `rich-text-document`],
    [`xls`, `excel-spreadsheet`],
    [`xlsm`, `excel-spreadsheet`],
    [`xlsx`, `excel-spreadsheet`],
  ]);
function C(e) {
  return i(e) === `none`
    ? o(e)
      ? `markdown`
      : p(e)
        ? `pdb`
        : s(e)
          ? `pdf`
          : null
    : `image`;
}
function w(e) {
  let t = i(e);
  return t === `always`
    ? `always`
    : t === `toggle` || o(e) || p(e)
      ? `toggle`
      : s(e)
        ? `always`
        : `none`;
}
function T(e) {
  let t = c(e);
  return t == null ? null : (S.get(t) ?? null);
}
function E(e, { artifactTabsEnabled: t = !1 } = {}) {
  return C(e) != null || T(e) == null ? !0 : t && v(e) != null;
}
var D = e(f(), 1);
function O({
  artifactTabsEnabled: e,
  hostConfig: t,
  modifiedClick: n,
  path: r,
  windowType: i,
}) {
  let a = b(r),
    o = C(r),
    s = T(r),
    l = (0, D.lookup)(r);
  return {
    artifact_import_kind: a?.importKind ?? `none`,
    artifact_tabs_enabled: e,
    artifact_type: a?.artifactType ?? `none`,
    extension: c(r) ?? `none`,
    host_kind: k(t),
    mime_type: typeof l == `string` ? l : `unknown`,
    modified_click: n,
    outcome: A({
      artifactPresentationExists: a != null,
      artifactTabsEnabled: e,
      hostConfig: t,
      modifiedClick: n,
      path: r,
      reviewPreviewKind: o,
      unsupportedPreviewType: s,
    }),
    review_preview_kind: o ?? `none`,
    unsupported_preview_type: s ?? `none`,
    window_type: i,
  };
}
function k(e) {
  return e == null ? `unknown` : t(e) ? `remote` : `local`;
}
function A({
  artifactPresentationExists: e,
  artifactTabsEnabled: n,
  hostConfig: r,
  modifiedClick: i,
  path: a,
  reviewPreviewKind: o,
  unsupportedPreviewType: s,
}) {
  return r != null && !t(r) && !i && !E(a, { artifactTabsEnabled: n })
    ? `external_file_manager`
    : n && e
      ? `artifact_renderer`
      : s == null
        ? o == null
          ? `plain_text`
          : `review_rich_preview`
        : `unsupported_message`;
}
function j({
  scope: e,
  artifactTabsEnabled: i = !1,
  artifactsPaneEnabled: o = !1,
  appPath: s,
  browserSidebarEnabled: c = !1,
  column: f,
  cwd: p,
  endLine: m,
  hostConfig: g,
  hostId: _,
  icon: v,
  isPreview: y,
  line: b,
  modifiedClick: x = !1,
  onBeforeOpenSidePanelTab: S,
  openFile: C = d,
  openInSidePanel: w = !1,
  openMode: T,
  path: E,
  persistPreferredTargetPath: D,
  target: k,
  title: A,
}) {
  let j = {
    path: E,
    cwd: p,
    ...(k == null ? {} : { target: k }),
    ...(s == null ? {} : { appPath: s }),
    ...(b == null ? {} : { line: b }),
    ...(f == null ? {} : { column: f }),
    ...(T == null ? {} : { openMode: T }),
    ...(D == null ? {} : { persistPreferredTargetPath: D }),
    ...(_ == null ? {} : { hostId: _ }),
  };
  if (k != null || T === `workspace` || D != null) {
    C(j);
    return;
  }
  let N = M({ browserSidebarEnabled: c, hostConfig: g, path: E });
  if (!x && N) {
    C({ path: E, cwd: p, ...(_ == null ? {} : { hostId: _ }) });
    return;
  }
  if (e != null && w) {
    let o = h();
    if (o == null) {
      C(j);
      return;
    }
    let s = p == null ? E : a(p, E),
      c = g != null && !t(g) ? g : null,
      d = () => {
        (S?.(e),
          o(e, s, {
            artifactTabsEnabled: i,
            ...(_ == null ? {} : { hostId: _ }),
            ...(b == null ? {} : { line: b }),
            ...(m == null ? {} : { endLine: m }),
            ...(v == null ? {} : { icon: v }),
            ...(y == null ? {} : { isPreview: y }),
            ...(A == null ? {} : { title: A }),
          }));
      },
      w = O({
        artifactTabsEnabled: i,
        hostConfig: g,
        modifiedClick: x,
        path: E,
        windowType: `electron`,
      });
    if (
      (u(e, {
        eventName: `codex_workspace_file_preview_attempted`,
        metadata: w,
      }),
      w.outcome === `external_file_manager`)
    ) {
      C({ ...j, target: `fileManager` });
      return;
    }
    if (c != null && b == null && f == null && m == null && !n(E) && r(s)) {
      l(`read-file-metadata`, { params: { hostId: _ ?? c.id, path: s } })
        .then((e) => {
          if (e.isFile) {
            d();
            return;
          }
          C(j);
        })
        .catch(d);
      return;
    }
    d();
    return;
  }
  C(j);
}
function M({ browserSidebarEnabled: e, hostConfig: r, path: i }) {
  return e && r != null && !t(r) && n(i);
}
export { b as a, T as i, C as n, y as o, w as r, g as s, j as t };
//# sourceMappingURL=open-workspace-file-WgoEFjrv.js.map
