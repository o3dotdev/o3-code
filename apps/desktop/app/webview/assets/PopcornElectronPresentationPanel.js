import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t, t as n } from "./jsx-runtime.js";
import "./presentation-e8MDavOP.js";
import "./spreadsheet-D7wZHj1A.js";
import { i as r } from "./workbook-DlnJgeSc.js";
import "./defaultLocale-CwOwouzm.js";
import { t as i } from "./clsx-BcPLHiun.js";
import {
  B as a,
  E as o,
  L as s,
  _ as c,
  a as l,
  c as u,
  d,
  f,
  g as p,
  h as m,
  i as ee,
  j as te,
  k as h,
  l as g,
  m as ne,
  n as _,
  p as v,
  s as y,
  t as re,
} from "./remote-text-edit-session-CY-eW3VI.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import { t as ie } from "./PopcornPageNumberNavigation.js";
import {
  a as ae,
  d as b,
  f as x,
  i as S,
  n as C,
  p as w,
  t as T,
} from "./core.esm.js";
import { t as oe } from "./modifiers.esm.js";
import {
  $ as se,
  A as E,
  B as D,
  C as ce,
  D as le,
  E as ue,
  F as de,
  G as fe,
  H as pe,
  I as me,
  L as he,
  M as ge,
  N as _e,
  O as ve,
  P as ye,
  Q as be,
  R as xe,
  S as Se,
  T as Ce,
  U as we,
  V as Te,
  W as Ee,
  a as De,
  b as O,
  c as k,
  d as A,
  f as Oe,
  h as j,
  i as ke,
  j as M,
  k as Ae,
  l as je,
  m as Me,
  n as N,
  nt as Ne,
  o as Pe,
  p as Fe,
  r as P,
  t as Ie,
  tt as F,
  u as Le,
  v as Re,
  w as ze,
  x as Be,
  y as Ve,
  z as I,
} from "./popcorn-electron-crdt-bridge-BJyTxXPg.js";
var L = e(t()),
  He = null;
function Ue() {
  return (
    (He ??= Promise.all([
      y(),
      Promise.resolve().then(() => {
        u();
      }),
    ]).then(() => {})),
    He
  );
}
var R = n();
function We(e, t) {
  if (t && t.width > 0 && t.height > 0)
    return { width: t.width, height: t.height };
  let n = e.getBoundingClientRect();
  return {
    width: n.width > 0 ? n.width : e.clientWidth,
    height: n.height > 0 ? n.height : e.clientHeight,
  };
}
function z(e, t) {
  return We(e, { width: t.contentRect.width, height: t.contentRect.height });
}
var Ge = 1280,
  Ke = 720,
  B = {
    ink: `#0F172A`,
    muted: `#475569`,
    border: `#CBD5E1`,
    panel: `#FFFFFF`,
    canvas: `#F8FAFC`,
    blue: `#2563EB`,
    indigo: `#4F46E5`,
    violet: `#7C3AED`,
    mint: `#0F766E`,
    cyan: `#0891B2`,
    amber: `#D97706`,
    rose: `#E11D48`,
    cloud: `#EFF6FF`,
    lavender: `#F5F3FF`,
    mintTint: `#ECFDF5`,
    amberTint: `#FFFBEB`,
  },
  qe = [
    { type: `lightGrid`, color: B.indigo },
    { type: `smallGrid`, color: B.blue },
    { type: `largeGrid`, color: B.cyan },
    { type: `darkGrid`, color: B.ink },
    { type: `dotGrid`, color: B.violet },
    { type: `cross`, color: B.blue },
    { type: `diagonalCross`, color: B.violet },
    { type: `horizontal`, color: B.mint },
    { type: `vertical`, color: B.rose },
    { type: `lightHorizontal`, color: B.cyan },
    { type: `lightVertical`, color: B.blue },
    { type: `narrowHorizontal`, color: B.ink },
    { type: `narrowVertical`, color: B.muted },
    { type: `dashedHorizontal`, color: B.indigo },
    { type: `dashedVertical`, color: B.rose },
    { type: `upwardDiagonal`, color: B.mint },
    { type: `downwardDiagonal`, color: B.blue },
    { type: `wideUpwardDiagonal`, color: B.cyan },
    { type: `wideDownwardDiagonal`, color: B.violet },
    { type: `dashedUpwardDiagonal`, color: B.amber },
    { type: `dashedDownwardDiagonal`, color: B.rose },
    { type: `smallCheck`, color: B.indigo },
    { type: `largeCheck`, color: B.blue },
    { type: `openDiamond`, color: B.cyan },
    { type: `solidDiamond`, color: B.violet },
    { type: `dottedDiamond`, color: B.amber },
    { type: `plaid`, color: B.rose },
    { type: `weave`, color: B.ink },
    { type: `wave`, color: B.blue },
    { type: `zigZag`, color: B.violet },
    { type: `horizontalBrick`, color: B.amber },
    { type: `diagonalBrick`, color: B.rose },
    { type: `sphere`, color: B.mint },
    { type: `divot`, color: B.indigo },
    { type: `shingle`, color: B.cyan },
    { type: `trellis`, color: B.blue },
    { type: `lightTrellis`, color: B.violet },
    { type: `darkTrellis`, color: B.ink },
    { type: `smallConfetti`, color: B.amber },
    { type: `largeConfetti`, color: B.rose },
    { type: `gray125`, color: B.ink },
    { type: `gray0625`, color: B.muted },
    { type: `percent10`, color: B.indigo },
    { type: `percent20`, color: B.blue },
    { type: `percent30`, color: B.cyan },
    { type: `percent40`, color: B.violet },
    { type: `percent50`, color: B.amber },
    { type: `percent60`, color: B.rose },
    { type: `percent70`, color: B.mint },
    { type: `percent80`, color: B.ink },
    { type: `percent90`, color: B.muted },
    { type: `lightGray`, color: B.ink },
    { type: `mediumGray`, color: B.ink },
    { type: `darkGray`, color: B.ink },
  ];
function V(e, t = B.canvas) {
  let n = e.slides.add();
  return (n.setViewportSize(Ge, Ke), (n.background.fill = t), H(n), n);
}
function H(e) {
  for (let t of [...e.shapes.items]) t.placeholderType && t.delete();
}
function U(e) {
  let t = e.slide.shapes.add({
    geometry: e.geometry ?? `rect`,
    position: { left: e.left, top: e.top, width: e.width, height: e.height },
    fill: e.fill,
    line: e.radiusLine ? { style: `solid`, fill: B.border, width: 1 } : void 0,
  });
  return (
    (t.text = e.text),
    (t.text.fontSize = e.fontSize ?? 16),
    (t.text.color = e.color ?? B.ink),
    (t.text.bold = !!e.bold),
    (t.text.verticalAlignment = `middle`),
    t
  );
}
function W(e, t, n) {
  (U({
    slide: e,
    left: 72,
    top: 48,
    width: 620,
    height: 50,
    text: t,
    fontSize: 30,
    bold: !0,
  }),
    U({
      slide: e,
      left: 72,
      top: 100,
      width: 760,
      height: 32,
      text: n,
      fontSize: 14,
      color: B.muted,
    }));
}
function G(e, t, n, r, i, a) {
  (U({
    slide: e,
    left: t,
    top: n,
    width: r,
    height: 24,
    text: i,
    fontSize: 14,
    bold: !0,
  }),
    U({
      slide: e,
      left: t,
      top: n + 22,
      width: r,
      height: 40,
      text: a,
      fontSize: 12,
      color: B.muted,
    }));
}
function K(e) {
  return e.slide.shapes.add({
    geometry: `roundRect`,
    position: { left: e.left, top: e.top, width: e.width, height: e.height },
    fill: e.fill ?? B.panel,
    line: { style: `solid`, fill: B.border, width: 1 },
  });
}
function q(e, t) {
  let n = V(e, `#F7FAFF`),
    r = U({
      slide: n,
      left: 72,
      top: 74,
      width: 520,
      height: 68,
      text: `Slides Feature Catalog`,
      fontSize: 36,
      bold: !0,
    });
  ((r.text.get(`Slides Feature Catalog`).style = `title`),
    U({
      slide: n,
      left: 72,
      top: 150,
      width: 510,
      height: 72,
      text: `A presentation design-system deck built from the current Granola slide APIs: borders, fills, shapes, connectors, typography, tables, charts, and image treatments.`,
      fontSize: 16,
      color: B.muted,
    }));
  let i = n.images.add({ dataUrl: t, alt: `Popcorn slides catalog poster` });
  ((i.position = { left: 706, top: 88, width: 500, height: 300 }),
    (i.fit = `cover`));
  let a = K({
    slide: n,
    left: 72,
    top: 300,
    width: 346,
    height: 208,
    fill: B.cloud,
  });
  ((a.line.fill = B.blue),
    (a.line.width = 1),
    G(
      n,
      98,
      328,
      280,
      `Canvas-native editing`,
      `The cover title is the first editable text box, so browser receipts can mutate and undo it without changing deck structure.`,
    ));
  let o = K({
    slide: n,
    left: 444,
    top: 300,
    width: 346,
    height: 208,
    fill: B.lavender,
  });
  ((o.line.fill = B.violet),
    G(
      n,
      470,
      328,
      290,
      `Worker-first stage`,
      `The stage renders as a centered world-view inside a full-viewport canvas, matching the workbook camera architecture.`,
    ));
  let s = K({
    slide: n,
    left: 816,
    top: 300,
    width: 390,
    height: 208,
    fill: B.mintTint,
  });
  ((s.line.fill = B.mint),
    G(
      n,
      842,
      328,
      324,
      `Catalog fixture`,
      `Every slide is a visual specimen that doubles as a deterministic editing corpus for tests, traces, and future agent workflows.`,
    ),
    (n.speakerNotes.text = `Cover slide: the presentation smoke edits this first title shape and watches the selected-slide label update.`));
}
function Je(e) {
  let t = V(e);
  (W(
    t,
    `Border styles`,
    `Line styles and weights from the Granola shape API, arranged as a compact visual gallery.`,
  ),
    [
      { label: `Solid 1px`, style: `solid`, color: B.blue, width: 1 },
      { label: `Dashed 2px`, style: `dashed`, color: B.indigo, width: 2 },
      { label: `Dotted 2px`, style: `dotted`, color: B.cyan, width: 2 },
      { label: `Dash-dot 3px`, style: `dash-dot`, color: B.violet, width: 3 },
      {
        label: `Dash-dot-dot 3px`,
        style: `dash-dot-dot`,
        color: B.rose,
        width: 3,
      },
    ].forEach((e, n) => {
      let r = 84 + n * 228,
        i = t.shapes.add({
          geometry: n % 2 == 0 ? `roundRect` : `rect`,
          position: { left: r, top: 188, width: 170, height: 118 },
          fill: B.panel,
          line: { style: e.style, fill: e.color, width: e.width },
        });
      ((i.text = e.label),
        (i.text.alignment = `center`),
        (i.text.verticalAlignment = `middle`),
        (i.text.fontSize = 16));
    }));
  let n = t.shapes.add({
    geometry: `roundRect`,
    position: { left: 130, top: 392, width: 1020, height: 190 },
    fill: `#F8FBFF`,
    line: { style: `solid`, fill: B.border, width: 1 },
  });
  ((n.line.width = 1),
    U({
      slide: t,
      left: 164,
      top: 426,
      width: 340,
      height: 44,
      text: `Mixed borders in one composition`,
      fontSize: 20,
      bold: !0,
    }),
    U({
      slide: t,
      left: 164,
      top: 474,
      width: 410,
      height: 66,
      text: `A larger composition helps validate stroke scaling, handle placement, and thumbnail rendering.`,
      fontSize: 13,
      color: B.muted,
    }));
  let r = t.shapes.add({
    geometry: `roundRect`,
    position: { left: 700, top: 434, width: 170, height: 70 },
    fill: `#ffffff`,
    line: { style: `dash-dot`, fill: B.violet, width: 2 },
  });
  ((r.text = `Dash-dot`),
    (r.text.alignment = `center`),
    (r.text.verticalAlignment = `middle`),
    (r.text.bold = !0));
  let i = t.shapes.add({
    geometry: `diamond`,
    position: { left: 916, top: 418, width: 126, height: 102 },
    fill: `#ffffff`,
    line: { style: `dotted`, fill: B.cyan, width: 2 },
  });
  ((i.text = `Dotted`),
    (i.text.alignment = `center`),
    (i.text.verticalAlignment = `middle`));
}
function Ye(e) {
  let t = V(e, `#FBFBFE`);
  W(
    t,
    `Fill styles`,
    `Solid, linear gradient, path gradient, and pattern fills taken directly from the Granola fill configuration surface.`,
  );
  let n = K({ slide: t, left: 86, top: 188, width: 240, height: 220 });
  ((n.fill = B.blue),
    (n.line.fill = B.blue),
    G(t, 104, 422, 206, `Solid fill`, `Theme/RGB-backed surface`));
  let r = K({ slide: t, left: 368, top: 188, width: 240, height: 220 });
  ((r.fill = {
    type: `gradient`,
    gradientKind: `linear`,
    angleDeg: 30,
    stops: [
      { offset: 0, color: `#DBEAFE` },
      { offset: 1, color: `#2563EB` },
    ],
  }),
    (r.line.fill = B.blue),
    G(t, 386, 422, 206, `Linear gradient`, `Two-stop diagonal blend`));
  let i = K({ slide: t, left: 650, top: 188, width: 240, height: 220 });
  ((i.fill = {
    type: `gradient`,
    gradientKind: `path`,
    angleDeg: 135,
    stops: [
      { offset: 0, color: `#DDD6FE` },
      { offset: 1, color: `#7C3AED` },
    ],
  }),
    (i.line.fill = B.violet),
    G(t, 668, 422, 206, `Path gradient`, `Centered radial emphasis`));
  let a = K({ slide: t, left: 932, top: 188, width: 240, height: 220 });
  ((a.fill = {
    type: `solid`,
    color: `#F8FAFC`,
    pattern: { type: `lightGrid`, color: B.indigo },
  }),
    (a.line.fill = B.indigo),
    G(t, 950, 422, 206, `Pattern fill`, `Light grid overlay`));
  let o = t.shapes.add({
    geometry: `roundRect`,
    position: { left: 126, top: 510, width: 1020, height: 120 },
    fill: `#FFFFFF`,
    line: { style: `solid`, fill: B.border, width: 1 },
  });
  ((o.text = `Fill configs stay model-backed, which means the same gradient and pattern semantics show up consistently in thumbnails, worker rendering, exports, and future document/shared-object lanes.`),
    (o.text.fontSize = 20),
    (o.text.color = B.ink));
}
function J(e) {
  return e
    .replace(/([a-z0-9])([A-Z])/g, `$1 $2`)
    .replace(/^gray(\d+)/i, `Gray $1`)
    .replace(/^percent(\d+)/i, `$1%`)
    .replace(/\b\w/g, (e) => e.toUpperCase());
}
function Xe(e) {
  let t = V(e, `#FBFBFE`);
  (W(
    t,
    `Pattern gallery`,
    `A dense catalog of pattern fills so rendering, centering, and zoom behavior can be inspected directly in one place.`,
  ),
    qe.forEach((e, n) => {
      let r = n % 8,
        i = Math.floor(n / 8),
        a = 72 + r * 132,
        o = 164 + i * 74,
        s = U({
          slide: t,
          left: a,
          top: o,
          width: 112,
          height: 16,
          text: J(e.type),
          fontSize: 9,
          color: B.muted,
        });
      ((s.text.alignment = `center`),
        t.shapes.add({
          geometry: `roundRect`,
          position: { left: a, top: o + 20, width: 112, height: 44 },
          fill: {
            type: `solid`,
            color: `#F8FAFC`,
            pattern: { type: e.type, color: e.color },
          },
          line: { style: `solid`, fill: B.border, width: 1 },
        }));
    }));
}
function Ze(e) {
  let t = V(e);
  W(
    t,
    `Shapes and connectors`,
    `Preset geometries, arrowheads, and routed connectors aligned with the current Granola presentation tests.`,
  );
  let n = t.shapes.add({
    geometry: `flowChartDecision`,
    position: { left: 160, top: 220, width: 170, height: 110 },
    fill: `#DBEAFE`,
    line: { style: `solid`, fill: B.blue, width: 2 },
  });
  ((n.text = `Decision`),
    (n.text.alignment = `center`),
    (n.text.verticalAlignment = `middle`));
  let r = t.shapes.add({
    geometry: `rect`,
    position: { left: 448, top: 220, width: 190, height: 110 },
    fill: `#EDE9FE`,
    line: { style: `solid`, fill: B.violet, width: 2 },
  });
  ((r.text = `Process`),
    (r.text.alignment = `center`),
    (r.text.verticalAlignment = `middle`));
  let i = t.shapes.add({
    geometry: `flowChartTerminator`,
    position: { left: 764, top: 220, width: 212, height: 110 },
    fill: `#ECFDF5`,
    line: { style: `solid`, fill: B.mint, width: 2 },
  });
  ((i.text = `Terminator`),
    (i.text.alignment = `center`),
    (i.text.verticalAlignment = `middle`));
  let a = t.shapes.add({
    geometry: `chevron`,
    position: { left: 1022, top: 214, width: 124, height: 120, rotation: 8 },
    fill: {
      type: `gradient`,
      gradientKind: `linear`,
      angleDeg: 0,
      stops: [
        { offset: 0, color: `#FDE68A` },
        { offset: 1, color: `#F59E0B` },
      ],
    },
    line: { style: `solid`, fill: B.amber, width: 2 },
  });
  (t.shapes.add({
    geometry: `connector`,
    kind: `straight`,
    from: n,
    fromIdx: 3,
    to: r,
    toIdx: 1,
    line: { style: `solid`, fill: B.blue, width: 2 },
    head: { type: `arrow`, width: `med`, length: `med` },
  }),
    t.shapes.add({
      geometry: `connector`,
      kind: `straight`,
      from: r,
      fromIdx: 3,
      to: i,
      toIdx: 1,
      line: { style: `dashed`, fill: B.violet, width: 2 },
      head: { type: `arrow`, width: `sm`, length: `sm` },
    }),
    t.shapes.add({
      geometry: `connector`,
      kind: `straight`,
      from: i,
      fromIdx: 3,
      to: a,
      toIdx: 1,
      line: { style: `dash-dot`, fill: B.amber, width: 2 },
      head: { type: `triangle`, width: `med`, length: `med` },
    }),
    G(
      t,
      154,
      378,
      270,
      `Process shapes`,
      `Flowchart decision, rect, and terminator geometries.`,
    ),
    G(
      t,
      510,
      378,
      262,
      `Connector routing`,
      `Straight and elbow connectors with different arrowheads.`,
    ),
    G(
      t,
      900,
      378,
      230,
      `Transforms`,
      `Rotated and gradient-filled accent chevron.`,
    ));
}
function Y(e) {
  let t = V(e, `#FAFBFF`);
  W(
    t,
    `Typography and text layout`,
    `Title styles, lists, alignment, spacing, and insets all come from the same text engine the stage editor uses for canvas-native editing.`,
  );
  let n = K({ slide: t, left: 82, top: 176, width: 360, height: 180 });
  ((n.text = [`Quarterly Design Review`, `Shared text engine`]),
    (n.text.fontSize = 20),
    (n.text.insets = { left: 18, right: 18, top: 18, bottom: 18 }),
    (n.text.get(`Quarterly Design Review`).style = `title`),
    (n.text.get(`Quarterly Design Review`).color = B.blue),
    (n.text.get(`Shared text engine`).fontSize = 16),
    (n.text.get(`Shared text engine`).color = B.muted));
  let r = K({
    slide: t,
    left: 474,
    top: 176,
    width: 326,
    height: 240,
    fill: `#FFFFFF`,
  });
  ((r.text = [
    [{ run: `Canvas-native edit sessions` }],
    [{ run: `Word and paragraph selection` }],
    [{ run: `Shared undo and caret movement` }],
  ]),
    (r.text.fontSize = 18),
    (r.text.get(
      [
        `Canvas-native edit sessions`,
        `Word and paragraph selection`,
        `Shared undo and caret movement`,
      ].join(`
`),
    ).style = `list`),
    (r.text.get(`Canvas-native edit sessions`).bold = !0),
    (r.text.insets = { left: 24, right: 20, top: 18, bottom: 18 }));
  let i = K({
    slide: t,
    left: 840,
    top: 176,
    width: 354,
    height: 240,
    fill: `#F8FBFF`,
  });
  ((i.text = `“A canvas text engine is only viable if selection, caret placement, and rich text styling are first-class model concerns.”`),
    (i.text.alignment = `center`),
    (i.text.verticalAlignment = `middle`),
    (i.text.fontSize = 24),
    (i.text.color = B.ink),
    (i.text.insets = { left: 26, right: 26, top: 24, bottom: 24 }),
    G(
      t,
      84,
      380,
      340,
      `Styled title block`,
      `Title preset, secondary body line, and content insets.`,
    ),
    G(
      t,
      474,
      440,
      326,
      `List semantics`,
      `List styling is range-driven, not hard-coded in the React layer.`,
    ),
    G(
      t,
      840,
      440,
      354,
      `Centered quotation`,
      `Alignment, insets, and large-type wrapping stress the text layout system.`,
    ));
}
function Qe(e) {
  let t = V(e);
  W(
    t,
    `Tables`,
    `Tables showcase merge regions, style presets, borders, rich text values, and explicit column sizing.`,
  );
  let n = t.tables.add({
    rows: 6,
    columns: 4,
    left: 82,
    top: 178,
    width: 656,
    height: 314,
    values: [
      [`Performance scorecard`, ``, ``, ``],
      [`Metric`, `North`, `EMEA`, `APAC`],
      [`Bookings`, 120, 94, 68],
      [`Pipeline`, 210, 176, 140],
      [`Renewals`, 96, 82, 65],
      [`Total`, 426, 352, 273],
    ],
  });
  (n.merge({ startRow: 0, endRow: 0, startColumn: 0, endColumn: 3 }),
    (n.columns.get(0).width = 220),
    (n.columns.get(1).width = 140),
    (n.columns.get(2).width = 140),
    (n.columns.get(3).width = 140),
    (n.style = `TableStyleMedium2`),
    (n.styleOptions = {
      headerRow: !0,
      bandedRows: !0,
      bandedColumns: !1,
      firstColumn: !1,
      lastColumn: !1,
      totalRow: !1,
    }),
    (n.borders = {
      outside: { width: 1.5, color: `111827` },
      inside: { width: 0.75, color: `D1D5DB` },
    }));
  let r = n.cells.block({ row: 0, column: 0, rowCount: 1, columnCount: 4 });
  ((r.fill = `#0F172A`),
    (r.textStyle.bold = !0),
    (r.textStyle.color = `FFFFFF`),
    (r.textStyle.fontSize = 18));
  let i = t.tables.add({
    rows: 3,
    columns: 2,
    left: 804,
    top: 210,
    width: 390,
    height: 226,
    values: [
      [`Pattern`, `Example`],
      [
        `Rich text`,
        [{ run: `Inline `, textStyle: { bold: !0 } }, `formatting`],
      ],
      [
        `Multi-line`,
        [[{ run: `Line 1`, textStyle: { italic: !0 } }], [{ run: `Line 2` }]],
      ],
    ],
  });
  ((i.style = `TableStyleMedium9`),
    (i.styleOptions = {
      headerRow: !0,
      bandedRows: !0,
      bandedColumns: !1,
      firstColumn: !1,
      lastColumn: !1,
      totalRow: !1,
    }),
    G(
      t,
      84,
      520,
      650,
      `Scorecard table`,
      `Merged title row, preset style, custom borders, and explicit column widths.`,
    ),
    G(
      t,
      804,
      454,
      384,
      `Cell content`,
      `Rich text runs and multi-line cell values exercise table text layout.`,
    ));
}
function $e(e) {
  let t = V(e, `#FAFBFF`);
  W(
    t,
    `Charts`,
    `Representative chart authoring from the Granola test suite: line, stacked column, and scatter.`,
  );
  let n = t.charts.add(`line`);
  ((n.position = { left: 72, top: 168, width: 362, height: 230 }),
    (n.title = `Line chart`),
    (n.categories = [`2020`, `2021`, `2022`, `2023`]));
  let r = n.series.add(`North`);
  ((r.categories = n.categories),
    (r.values = [2.1, 2.5, 2.8, 3.2]),
    (r.stroke = { width: 2, style: `solid`, fill: `accent1` }),
    (r.marker.symbol = `circle`),
    (r.marker.size = 6));
  let i = n.series.add(`EMEA`);
  ((i.categories = n.categories),
    (i.values = [1.8, 2, 2.4, 2.7]),
    (i.stroke = { width: 2, style: `solid`, fill: `accent2` }),
    (i.marker.symbol = `square`),
    (i.marker.size = 6),
    (n.hasLegend = !0),
    (n.legend.position = `top`));
  let a = t.charts.add(`bar`);
  ((a.position = { left: 458, top: 168, width: 362, height: 230 }),
    (a.title = `Stacked column`),
    (a.categories = [`North`, `EMEA`, `APAC`]));
  let o = a.series.add(`Platform`);
  ((o.categories = a.categories),
    (o.values = [60, 80, 25]),
    (o.fill = `accent1`));
  let s = a.series.add(`Services`);
  ((s.categories = a.categories),
    (s.values = [30, 40, 10]),
    (s.fill = `accent3`));
  let c = a.series.add(`Support`);
  ((c.categories = a.categories),
    (c.values = [10, 20, 5]),
    (c.fill = `accent5`),
    (a.barOptions.direction = `column`),
    (a.barOptions.grouping = `stacked`),
    (a.dataLabels.showValue = !0),
    (a.dataLabels.position = `outEnd`));
  let l = t.charts.add(`scatter`);
  ((l.position = { left: 844, top: 168, width: 362, height: 230 }),
    (l.title = `Scatter`));
  let u = l.series.add(`Transit candidates`);
  ((u.xValues = [1.5, 3.2, 6.8, 12.4, 24.9]),
    (u.values = [1.1, 1.4, 1.9, 2.5, 3.2]),
    (u.marker.symbol = `circle`),
    (u.marker.size = 7),
    (u.fill = `accent3`),
    (u.stroke = { width: 2, style: `solid`, fill: `accent3` }),
    (l.scatterOptions.style = `lineWithMarkers`),
    (l.xAxis.title.text = `Orbital period`),
    (l.yAxis.title.text = `Radius`),
    G(
      t,
      74,
      418,
      356,
      `Line chart`,
      `Markers, legend placement, and a minimal multi-series comparison.`,
    ),
    G(
      t,
      460,
      418,
      356,
      `Stacked column`,
      `Data labels and grouped columns mirror the chart test coverage.`,
    ),
    G(
      t,
      846,
      418,
      356,
      `Scatter`,
      `XY data with connected markers and explicit axis titles.`,
    ));
}
function et(e, t, n) {
  let r = V(e);
  W(
    r,
    `Images and treatments`,
    `Contain, cover, crop, and transform behaviors share the same geometry model as other slide elements.`,
  );
  let i = r.images.add({ dataUrl: t, alt: `Aurora contain treatment` });
  ((i.position = { left: 96, top: 188, width: 304, height: 208 }),
    (i.fit = `contain`));
  let a = r.images.add({ dataUrl: t, alt: `Aurora cover treatment` });
  ((a.position = { left: 486, top: 188, width: 304, height: 208 }),
    (a.fit = `cover`));
  let o = r.images.add({ dataUrl: n, alt: `Poster cropped treatment` });
  ((o.position = { left: 876, top: 188, width: 304, height: 208 }),
    (o.crop = { left: 0.08, top: 0.14, right: 0.08, bottom: 0.12 }),
    (o.rotation = -6),
    [
      { left: 84, label: `Contain` },
      { left: 474, label: `Cover` },
      { left: 864, label: `Crop + rotate` },
    ].forEach((e) => {
      (K({
        slide: r,
        left: e.left,
        top: 176,
        width: 328,
        height: 232,
        fill: `#FFFFFF`,
      }).sendToBack(),
        G(
          r,
          e.left + 10,
          422,
          308,
          e.label,
          `Image positioning lives in the same frame geometry system as shapes and charts.`,
        ));
    }));
  let s = r.shapes.add({
    geometry: `roundRect`,
    position: { left: 160, top: 520, width: 960, height: 120 },
    fill: `#F8FBFF`,
    line: { style: `solid`, fill: B.border, width: 1 },
  });
  ((s.text = `This slide keeps image workflows visible for future shared-object work: the same frame, transform, selection, and worker redraw mechanics should be reusable across slides, documents, and eventually spreadsheet floating objects.`),
    (s.text.fontSize = 18),
    (s.text.color = B.ink));
}
function tt(e) {
  let t = V(e, `#F7FAFF`);
  W(
    t,
    `Image generation state`,
    `Prompt-backed image frames stay visible in the deck so worker/runtime changes can be iterated against an active generating surface.`,
  );
  let n = K({
    slide: t,
    left: 72,
    top: 154,
    width: 1136,
    height: 388,
    fill: `#FFFFFF`,
  });
  n.line.fill = `#BFDBFE`;
  let r = t.images.add({
    prompt: `Use case: photorealistic-natural
Asset type: presentation panorama
Primary request: four different dogs standing together like a lineup, showing different sizes and personalities
Scene/backdrop: clean studio backdrop with soft shadows
Subject: diverse dog lineup including a corgi, labrador, greyhound, and small terrier
Style/medium: polished editorial photography
Composition/framing: wide panoramic crop, full bodies visible, balanced spacing
Lighting/mood: bright, welcoming, lightly playful
Color palette: warm neutrals with natural fur colors
Constraints: no text, no watermark
Avoid: leashes, collars with readable tags, extra props`,
    alt: `Diverse dog lineup`,
  });
  ((r.position = { left: 96, top: 190, width: 1088, height: 122 }),
    (r.fit = `cover`),
    (r.geometry = `roundRect`),
    r.regenerate({ kind: `content` }),
    G(
      t,
      96,
      334,
      420,
      `Generating panorama`,
      `This specimen intentionally starts from a prompt-only image so the presentation demo can exercise pending/generating image UI without importing a baked asset.`,
    ),
    G(
      t,
      650,
      334,
      534,
      `Iteration target`,
      `Use this slide to tune worker-published generation state, overlay treatments, and frame behavior while the asset is unresolved or being regenerated.`,
    ));
  let i = t.shapes.add({
    geometry: `roundRect`,
    position: { left: 96, top: 572, width: 1088, height: 86 },
    fill: `#EFF6FF`,
    line: { style: `solid`, fill: B.border, width: 1 },
  });
  ((i.text = `The image frame mirrors the requested panorama geometry and explicitly calls regenerate({ kind: 'content' }) so local demo sessions land in a real generating state instead of a static placeholder.`),
    (i.text.fontSize = 18),
    (i.text.color = B.ink));
}
function nt(e) {
  e.comments.setSelf({
    id: `popcorn-demo-editor`,
    displayName: `Granola Editor`,
    initials: `GE`,
    email: `editor@example.com`,
  });
  let t = e.slides.items[0],
    n = e.slides.items[4],
    r = e.slides.items[6];
  if (!t || !n || !r) return;
  let i =
    t.shapes.items.find((e) =>
      e.text.toString().includes(`Slides Feature Catalog`),
    ) ?? t.shapes.items[0];
  i &&
    e.comments
      .addThread(
        { element: i },
        `Title copy is approved. Keep this as the default playground marker for stored deck comments.`,
        { position: { x: 112, y: 92 }, createdAt: `2026-04-18T08:30:00.000Z` },
      )
      .addReply(
        `Leaving it here so slide-level thread overlays are easy to verify in Popcorn.`,
        {
          author: {
            id: `popcorn-demo-designer`,
            displayName: `Ivy Designer`,
            initials: `ID`,
            email: `ivy@example.com`,
          },
          createdAt: `2026-04-18T08:47:00.000Z`,
        },
      );
  let a =
    n.shapes.items.find((e) => e.text.toString().trim() === `Process`) ??
    n.shapes.items.find((e) => e.text.toString().trim().length > 0);
  if (a) {
    let t =
      a.text
        .toString()
        .trim()
        .split(/\s+/)
        .find((e) => e.length > 0) ?? ``;
    t &&
      e.comments
        .addThread(
          { textMatch: { element: a, query: t } },
          `This callout label is useful for text-range comment placement checks.`,
          {
            position: { x: 856, y: 196 },
            author: {
              id: `popcorn-demo-reviewer`,
              displayName: `Noah Reviewer`,
              initials: `NR`,
            },
            createdAt: `2026-04-17T15:12:00.000Z`,
          },
        )
        .resolve(void 0, `2026-04-17T16:00:00.000Z`);
  }
  e.comments
    .addThread(
      { slide: r },
      `Slide-level thread anchored in open space so marker projection can be checked independently of element geometry.`,
      {
        position: { x: 1110, y: 602 },
        author: {
          id: `popcorn-demo-pm`,
          displayName: `Mia PM`,
          initials: `MP`,
        },
        createdAt: `2026-04-16T12:25:00.000Z`,
      },
    )
    .addReply(
      `Keeping this unresolved gives the deck both active and resolved thread specimens.`,
      { createdAt: `2026-04-16T12:42:00.000Z` },
    );
}
function rt() {
  let e = r.create(),
    t = ee(),
    n = l();
  return (
    q(e, n),
    Je(e),
    Ye(e),
    Xe(e),
    Ze(e),
    Y(e),
    Qe(e),
    $e(e),
    et(e, t, n),
    tt(e),
    nt(e),
    e
  );
}
function it() {
  return new Worker(
    new URL(
      `` + new URL(`runtime.worker-RoKIB9Wl.js`, import.meta.url).href,
      `` + import.meta.url,
    ),
    { type: `module`, name: `popcorn-presentation-controller-worker` },
  );
}
var at = {
  presentationVersion: 0,
  previewVersion: 0,
  selectedSlideIdx: 0,
  slideIds: [],
  slideLabels: [],
  slideCount: 0,
  zoom: 1,
  fitScale: null,
  selectedSlideFrame: null,
  selectedSlideElementTargets: [],
  previewFrames: [],
  selectedElementIds: [],
  primarySelectedElementId: null,
  hoveredElementId: null,
  activeInteractionKind: null,
  selectionMarqueeFrame: null,
  notesText: ``,
  canUndo: !1,
  canRedo: !1,
  localAwarenessCursor: null,
  awarenessCursors: [],
  awarenessSelections: [],
  slideRect: null,
  textLayoutBlocks: [],
  textEditState: null,
  inspector: { slideElements: [], selectedElement: null },
  commentThreads: [],
  camera: null,
};
function ot(e = at) {
  return new _(e);
}
var st = 1;
function ct(e, t) {
  return e?.width === t?.width && e?.height === t?.height && e?.dpr === t?.dpr;
}
function lt(e, t, n) {
  ((n?.resizeIntrinsicBitmap ?? !0) &&
    ((e.width = Math.max(1, Math.round(t.width * t.dpr))),
    (e.height = Math.max(1, Math.round(t.height * t.dpr)))),
    (e.style.width = `${t.width}px`),
    (e.style.height = `${t.height}px`));
}
function ut(e) {
  if (
    !(
      typeof window < `u` &&
      typeof Worker < `u` &&
      typeof HTMLCanvasElement < `u` &&
      typeof OffscreenCanvas < `u` &&
      (!e?.requiresCanvasTransfer ||
        `transferControlToOffscreen` in HTMLCanvasElement.prototype)
    )
  )
    throw Error(
      `Popcorn presentation viewport requires Worker and transferControlToOffscreen support.`,
    );
}
var dt = class {
  id = st++;
  #e = g(`presentation-main-controller`);
  #t = ot();
  #n = new Set();
  #r = new Set();
  #i = [];
  #a;
  #o = null;
  #s = null;
  #c = null;
  #l = null;
  #u = null;
  #d = null;
  #f = null;
  #p = 1;
  #m = null;
  #h = null;
  #g = null;
  #_;
  #v = !1;
  constructor(e = {}) {
    let t = e.presentationProto ?? e.presentation?.toProto() ?? rt().toProto();
    ((this.#a = new d(
      (e.workerFactory ?? it)(),
      (e) => this.#C(e),
      (e) => {
        throw Error(e);
      },
    )),
      this.#e.debug(`bootstrap`, {
        controllerId: this.id,
        slideCount: t.slides?.length ?? 0,
        initialSelectedSlideIdx: e.initialSelectedSlideIdx,
        initialZoom: e.initialZoom,
      }),
      this.#a.bootstrap({
        presentationProto: t,
        initialCrdtState: e.initialCrdtState,
        initialSelectedSlideIdx: e.initialSelectedSlideIdx,
        initialZoom: e.initialZoom,
      }),
      (this.#_ = Ue()
        .then(() => {
          let e = f();
          (this.#e.debug(`font-render-deps-ready`, {
            fontCount: e.length,
            fonts: e.map((e) => ({
              family: e.family,
              style: e.style,
              weight: e.weight,
              format: e.format,
              src: e.src,
            })),
            fontDebug: v(),
          }),
            e.length !== 0 &&
              (this.#a.dispatch({ kind: `install-font-faces`, fonts: e }),
              this.#e.debug(`font-install-dispatched`, {
                fontCount: e.length,
              })));
        })
        .catch(() => {})));
  }
  subscribe(e) {
    return this.#t.subscribe(e);
  }
  getState() {
    return this.#t.getState();
  }
  getSnapshot() {
    return this.getState();
  }
  dispatch(e) {}
  attachViewport(e) {
    ut({ requiresCanvasTransfer: !!e.overlayCanvas });
    let t = (t) => {
        let n = We(e.host, t);
        return {
          width: Math.max(1, n.width),
          height: Math.max(1, n.height),
          dpr: window.devicePixelRatio || 1,
        };
      },
      n = () => {
        ((this.#m = null), this.#b());
      },
      r = (e) => {
        ((this.#d = t(e)),
          this.#m != null && window.cancelAnimationFrame(this.#m),
          (this.#m = window.requestAnimationFrame(n)));
      },
      i = this.#s !== e.canvas;
    if (
      (i && (this.#s = e.canvas),
      (this.#c = e.canvas.getContext(`2d`)),
      !this.#c)
    )
      throw Error(`Presentation viewport canvas 2d context is unavailable.`);
    let a = !!(e.overlayCanvas && this.#l !== e.overlayCanvas);
    a && e.overlayCanvas && (this.#l = e.overlayCanvas);
    let o = t();
    ((this.#u ??= { ...o }),
      (this.#d ??= { ...o }),
      lt(e.canvas, this.#u, { resizeIntrinsicBitmap: !0 }),
      e.overlayCanvas &&
        lt(e.overlayCanvas, this.#u, { resizeIntrinsicBitmap: !0 }),
      this.#_.then(() => {
        if (this.#v) return;
        let n = t();
        if (((this.#d = { ...n }), this.#u ?? this.#y(n), i)) {
          if (this.#s !== e.canvas) return;
          this.#a.dispatch({
            kind: `attach-canvas`,
            width: n.width,
            height: n.height,
            dpr: n.dpr,
          });
        } else this.#s === e.canvas && r();
        if (e.overlayCanvas)
          if (a) {
            if (this.#l !== e.overlayCanvas) return;
            let t = e.overlayCanvas.transferControlToOffscreen();
            this.#a.dispatch(
              {
                kind: `attach-overlay-canvas`,
                canvas: t,
                width: n.width,
                height: n.height,
                dpr: n.dpr,
              },
              [t],
            );
          } else this.#l === e.overlayCanvas && r();
      }));
    let s =
      typeof ResizeObserver < `u`
        ? new ResizeObserver((t) => {
            let n = t[0];
            r(n ? z(e.host, n) : null);
          })
        : null;
    s?.observe(e.host);
    let c = () => {
      r();
    };
    return (
      window.addEventListener(`resize`, c),
      () => {
        (this.#m != null &&
          (window.cancelAnimationFrame(this.#m), (this.#m = null)),
          s?.disconnect(),
          window.removeEventListener(`resize`, c));
      }
    );
  }
  #y(e) {
    ((this.#u = { ...e }),
      this.#s && (lt(this.#s, e), this.#x()),
      this.#l && lt(this.#l, e, { resizeIntrinsicBitmap: !1 }));
  }
  requestExport(e) {
    return this.#a
      .request({ kind: `export`, format: e?.format ?? `proto` })
      .then((e) => {
        if (e.kind !== `export`)
          throw Error(`Unexpected export response: ${e.kind}`);
        return e.result;
      });
  }
  requestCrdtSnapshot() {
    return this.#a.request({ kind: `crdt-snapshot` }).then((e) => {
      if (e.kind !== `crdt-snapshot`)
        throw Error(`Unexpected CRDT snapshot response: ${e.kind}`);
      return new Uint8Array(e.result);
    });
  }
  loadInitialCrdtState(e) {
    return this.#a
      .request({ kind: `load-initial-crdt-state`, update: e })
      .then((e) => {
        if (e.kind !== `load-initial-crdt-state`)
          throw Error(`Unexpected initial CRDT load response: ${e.kind}`);
      });
  }
  applyCrdtUpdate(e) {
    return this.#a
      .request({ kind: `apply-crdt-update`, update: e })
      .then((e) => {
        if (e.kind !== `apply-crdt-update`)
          throw Error(`Unexpected CRDT apply response: ${e.kind}`);
      });
  }
  hydrateImageAssets(e) {
    return this.#a
      .request({ kind: `hydrate-image-assets`, assets: e })
      .then((e) => {
        if (e.kind !== `hydrate-image-assets`)
          throw Error(`Unexpected image hydration response: ${e.kind}`);
      });
  }
  subscribeCrdtUpdates(e) {
    return (
      this.#n.add(e),
      () => {
        this.#n.delete(e);
      }
    );
  }
  subscribeImageHydrationRequests(e) {
    return (
      this.#r.add(e),
      this.#i.length > 0 && e(this.#i),
      () => {
        this.#r.delete(e);
      }
    );
  }
  replaceFromProto(e) {
    return this.#a
      .request({ kind: `replace-from-proto`, presentationProto: e })
      .then((e) => {
        if (e.kind !== `replace-from-proto`)
          throw Error(`Unexpected replace response: ${e.kind}`);
      });
  }
  dispose() {
    this.#v ||
      ((this.#v = !0),
      (this.#s = null),
      (this.#c = null),
      (this.#l = null),
      this.#h?.bitmap.close(),
      (this.#h = null),
      this.#m != null &&
        (window.cancelAnimationFrame(this.#m), (this.#m = null)),
      this.#n.clear(),
      this.#a.dispose());
  }
  #b() {
    let e = this.#d;
    if (!e) return;
    if (ct(this.#u, e) && this.#f == null) {
      this.#y(e);
      return;
    }
    if (this.#f != null) return;
    let t = this.#p++;
    ((this.#f = t),
      this.#a.dispatch({
        kind: `resize-viewport`,
        width: e.width,
        height: e.height,
        dpr: e.dpr,
        resizeId: t,
        ...(this.#o ? { camera: { ...this.#o } } : {}),
      }));
  }
  #x() {
    let e = this.#s,
      t = this.#c,
      n = this.#h,
      r = this.#u;
    !e ||
      !t ||
      !n ||
      !r ||
      (t.setTransform(1, 0, 0, 1, 0, 0),
      t.clearRect(0, 0, e.width, e.height),
      t.setTransform(r.dpr, 0, 0, r.dpr, 0, 0),
      t.drawImage(n.bitmap, 0, 0, n.metrics.width, n.metrics.height));
  }
  #S(e) {
    let t = { width: e.width, height: e.height, dpr: e.dpr },
      n = e.resizeId != null,
      r = n && this.#f === e.resizeId,
      i = !n || r,
      a = !this.#d || ct(this.#d, t);
    if (!i || !a) {
      (e.bitmap.close(), r && ((this.#f = null), this.#b()));
      return;
    }
    (this.#h?.bitmap.close(),
      (this.#h = { bitmap: e.bitmap, metrics: t }),
      r && (this.#f = null),
      this.#y(t),
      r &&
        e.resizeId != null &&
        (this.#a.dispatch({
          kind: `commit-viewport-resize`,
          resizeId: e.resizeId,
        }),
        this.#b()));
  }
  setSelectedSlideIdx(e) {
    this.#a.dispatch({ kind: `set-selected-slide-idx`, index: e });
  }
  setZoom(e) {
    this.#a.dispatch({ kind: `set-zoom`, zoom: e });
  }
  setEditingEnabled(e) {
    this.#a.dispatch({ kind: `set-editing-enabled`, isEditing: e });
  }
  setStageBackgroundColor(e) {
    let t = e.trim();
    t.length === 0 ||
      t === this.#g ||
      ((this.#g = t),
      this.#a.dispatch({
        kind: `set-stage-background-color`,
        backgroundColor: t,
      }));
  }
  setViewportInsets(e) {
    this.#a.dispatch({ kind: `set-viewport-insets`, viewportInsets: { ...e } });
  }
  setViewportCamera(e) {
    ((this.#o = e ? { ...e } : null),
      e && this.#a.dispatch({ kind: `set-camera`, camera: { ...e } }));
  }
  getViewportCamera() {
    return this.#o ? { ...this.#o } : null;
  }
  setSelectedElementId(e) {
    this.#a.dispatch({ kind: `set-selected-element-id`, elementId: e });
  }
  replyToCommentThread(e, t) {
    return (
      this.#a.dispatch({ kind: `reply-comment-thread`, threadId: e, body: t }),
      !0
    );
  }
  resolveCommentThread(e) {
    return (
      this.#a.dispatch({ kind: `resolve-comment-thread`, threadId: e }),
      !0
    );
  }
  reopenCommentThread(e) {
    return (
      this.#a.dispatch({ kind: `reopen-comment-thread`, threadId: e }),
      !0
    );
  }
  deleteCommentThread(e) {
    return (
      this.#a.dispatch({ kind: `delete-comment-thread`, threadId: e }),
      !0
    );
  }
  toggleCommentReaction(e, t, n) {
    return (
      this.#a.dispatch({
        kind: `toggle-comment-reaction`,
        threadId: e,
        commentId: t,
        reactionType: n,
      }),
      !0
    );
  }
  editThreadComment(e, t, n) {
    return (
      this.#a.dispatch({
        kind: `edit-thread-comment`,
        threadId: e,
        commentId: t,
        body: n,
      }),
      !0
    );
  }
  deleteThreadComment(e, t) {
    return (
      this.#a.dispatch({
        kind: `delete-thread-comment`,
        threadId: e,
        commentId: t,
      }),
      !0
    );
  }
  beginSelectionMarquee(e) {
    return (this.#a.dispatch({ kind: `begin-selection-marquee`, ...e }), !0);
  }
  updateSelectionMarquee(e) {
    return (this.#a.dispatch({ kind: `update-selection-marquee`, ...e }), !0);
  }
  endSelectionMarquee(e) {
    return (
      this.#a.dispatch({ kind: `end-selection-marquee`, commit: e?.commit }),
      !0
    );
  }
  textPointerDown(e, t) {
    return (
      this.#a.dispatch({
        kind: `text-pointer-down`,
        point: e,
        shiftKey: t?.shiftKey,
      }),
      !0
    );
  }
  textPointerMove(e) {
    return (this.#a.dispatch({ kind: `text-pointer-move`, point: e }), !0);
  }
  textPointerUp() {
    this.#a.dispatch({ kind: `text-pointer-up` });
  }
  textSelectWordAtPoint(e) {
    return (
      this.#a.dispatch({ kind: `text-select-word-at-point`, point: e }),
      !0
    );
  }
  textSelectParagraphAtPoint(e) {
    return (
      this.#a.dispatch({ kind: `text-select-paragraph-at-point`, point: e }),
      !0
    );
  }
  textActivateBlockEnd(e) {
    return (
      this.#a.dispatch({ kind: `text-activate-block-end`, blockId: e }),
      !0
    );
  }
  textClear() {
    this.#a.dispatch({ kind: `text-clear` });
  }
  textHandleKeyDown(e) {
    return (this.#a.dispatch({ kind: `text-keydown`, event: e }), !0);
  }
  textHandleBeforeInput(e) {
    return (this.#a.dispatch({ kind: `text-before-input`, event: e }), !0);
  }
  textHandleInput(e) {
    return (this.#a.dispatch({ kind: `text-input`, event: e }), !0);
  }
  textHandleCompositionEnd(e) {
    return (this.#a.dispatch({ kind: `text-composition-end`, event: e }), !0);
  }
  setHoveredElementId(e) {
    this.#a.dispatch({ kind: `set-hovered-element-id`, elementId: e });
  }
  setLocalAwarenessCursor(e) {
    this.#a.dispatch({ kind: `set-local-awareness-cursor`, point: e });
  }
  clearLocalAwarenessCursor() {
    this.#a.dispatch({ kind: `clear-local-awareness-cursor` });
  }
  setPresenceCursor(e, t, n) {
    this.#a.dispatch({
      kind: `set-presence-cursor`,
      presenceId: e,
      cursor: t,
      presenceKind: n?.kind,
    });
  }
  setPresenceSelection(e, t, n) {
    this.#a.dispatch({
      kind: `set-presence-selection`,
      presenceId: e,
      selection: t,
      presenceKind: n?.kind,
    });
  }
  clearPresenceCursor(e, t) {
    this.#a.dispatch({
      kind: `clear-presence-cursor`,
      presenceId: e,
      slideId: t?.slideId,
    });
  }
  clearPresenceSelection(e, t) {
    this.#a.dispatch({
      kind: `clear-presence-selection`,
      presenceId: e,
      slideId: t?.slideId,
    });
  }
  beginElementInteraction(e) {
    return (this.#a.dispatch({ kind: `begin-element-interaction`, ...e }), !0);
  }
  updateElementInteraction(e) {
    return (this.#a.dispatch({ kind: `update-element-interaction`, ...e }), !0);
  }
  endElementInteraction(e) {
    return (
      this.#a.dispatch({ kind: `end-element-interaction`, commit: e?.commit }),
      !0
    );
  }
  nudgeSelectedElements(e) {
    return (
      this.#a.dispatch({ kind: `nudge-selected-elements`, dx: e.dx, dy: e.dy }),
      !0
    );
  }
  clearElementSelection() {
    this.#a.dispatch({ kind: `clear-element-selection` });
  }
  deleteSelectedElement() {
    return (this.#a.dispatch({ kind: `delete-selected-element` }), !0);
  }
  addSlide() {
    this.#a.dispatch({ kind: `add-slide` });
  }
  duplicateSelectedSlide() {
    this.#a.dispatch({ kind: `duplicate-selected-slide` });
  }
  moveSlide(e, t) {
    return (
      this.#a.dispatch({ kind: `move-slide`, fromIndex: e, toIndex: t }),
      !0
    );
  }
  deleteSlide(e) {
    return (this.#a.dispatch({ kind: `delete-slide`, index: e }), !0);
  }
  updateSpeakerNotes(e) {
    this.#a.dispatch({ kind: `update-speaker-notes`, value: e });
  }
  updateSelectedElementFrame(e) {
    return (
      this.#a.dispatch({
        kind: `update-selected-element-frame`,
        framePatch: e,
      }),
      !0
    );
  }
  updateSelectedElementStyle(e) {
    return (
      this.#a.dispatch({
        kind: `update-selected-element-style`,
        stylePatch: e,
      }),
      !0
    );
  }
  reorderSelectedElement(e) {
    return (
      this.#a.dispatch({ kind: `reorder-selected-element`, direction: e }),
      !0
    );
  }
  undo() {
    this.#a.dispatch({ kind: `undo` });
  }
  redo() {
    this.#a.dispatch({ kind: `redo` });
  }
  exportPresentationProto() {
    return this.requestExport({ format: `proto` }).then(
      (e) => e.presentationProto,
    );
  }
  requestSlideThumbnail(e, t) {
    return this.#_.then(() =>
      this.#a
        .request({
          kind: `slide-thumbnail`,
          index: e,
          cssMaxPx: t?.cssMaxPx,
          pixelRatio: t?.pixelRatio,
        })
        .then((e) => {
          if (e.kind !== `slide-thumbnail`)
            throw Error(`Unexpected thumbnail response: ${e.kind}`);
          return e.result;
        }),
    );
  }
  #C(e) {
    switch (e.kind) {
      case `crdt-update`: {
        let t = new Uint8Array(e.update);
        for (let e of this.#n) e(t);
        return;
      }
      case `image-hydration-requests`:
        this.#i = e.requests;
        for (let t of this.#r) t(e.requests);
        return;
      case `meta`:
        this.#t.patch(e.state);
        return;
      case `navigation`:
        this.#t.patch(e.state);
        return;
      case `selection`:
        this.#t.patch(e.state);
        return;
      case `preview`:
        this.#t.patch(e.state);
        return;
      case `viewport`:
        this.#t.patch(e.state);
        return;
      case `viewport-resize-ready`:
        if (this.#f !== e.resizeId || this.#d == null) return;
        (this.#y(this.#d),
          this.#a.dispatch({
            kind: `commit-viewport-resize`,
            resizeId: e.resizeId,
          }));
        return;
      case `viewport-frame`:
        this.#S(e);
        return;
      case `viewport-frame-presented`:
        if (this.#f !== e.resizeId) return;
        ((this.#f = null),
          this.#y({ width: e.width, height: e.height, dpr: e.dpr }));
        return;
      case `editor`:
        this.#t.patch(e.state);
        return;
      case `comments`:
        this.#t.patch(e.state);
        return;
      case `awareness`:
        this.#t.patch(e.state);
        return;
      case `inspector`:
        this.#t.patch(e.state);
        return;
      case `debug-log`:
        g(e.namespace).debug(e.message, e.details);
        return;
      default:
        return e;
    }
  }
};
function ft(e = {}) {
  return new dt(e);
}
function pt(e) {
  let t = [],
    n = [];
  for (let r of e)
    (t.push(...(r.panels ?? [])), n.push(...(r.stageOverlays ?? [])));
  return { panels: t, stageOverlays: n };
}
var mt = 48,
  ht = 0.1,
  X = 0.05;
function gt(e, t) {
  let n = Math.max(0, t?.left ?? 0),
    r = Math.max(0, t?.top ?? 0),
    i = Math.max(0, t?.right ?? 0),
    a = Math.max(0, t?.bottom ?? 0);
  return {
    left: n,
    top: r,
    right: i,
    bottom: a,
    width: Math.max(1, e.width - n - i),
    height: Math.max(1, e.height - r - a),
  };
}
function _t(e) {
  return { x: Math.max(240, e.width), y: Math.max(180, e.height) };
}
function Z(e, t, n, r) {
  let i = gt(t, r),
    a = Re(
      { ...e, x: e.x - i.left, y: e.y - i.top },
      { width: i.width, height: i.height },
      n,
    ),
    o = Math.max(0, n.width) * a.k,
    s = Math.max(0, n.height) * a.k;
  return {
    ...a,
    x: o <= i.width ? i.left + (i.width - o) / 2 : i.left + a.x,
    y: s <= i.height ? i.top + (i.height - s) / 2 : i.top + a.y,
  };
}
function vt(e, t = 1) {
  let n = Math.max(t, X);
  return Math.min(4 / n, Math.max(ht / n, e));
}
function Q(e) {
  return Math.min(4, Math.max(ht, e));
}
function yt(e, t, n) {
  let r = gt(e, n),
    i = Math.max(1, r.width - mt * 2),
    a = Math.max(1, r.height - mt * 2);
  return Math.max(
    X,
    Math.min(i / Math.max(t.width, 1), a / Math.max(t.height, 1)),
  );
}
function $(e) {
  let t = _t(e.viewport),
    n = { x: t.x, y: t.y },
    r = { width: e.frame.width + t.x * 2, height: e.frame.height + t.y * 2 },
    i = Be(e.camera, n.x, n.y),
    a = yt(e.viewport, e.frame, e.viewportInsets);
  return {
    fitScale: a,
    zoomFactor: e.camera.k / Math.max(a, 2 ** -52),
    worldSize: r,
    slideOrigin: n,
    slideRect: {
      left: i.x,
      top: i.y,
      width: e.frame.width * e.camera.k,
      height: e.frame.height * e.camera.k,
      scale: e.camera.k,
    },
  };
}
function bt(e) {
  let t = yt(e.viewport, e.frame, e.viewportInsets),
    n = vt(e.zoomFactor ?? 1, t),
    r = $({
      viewport: e.viewport,
      frame: e.frame,
      camera: { x: 0, y: 0, k: t * n },
      viewportInsets: e.viewportInsets,
    }),
    i = gt(e.viewport, e.viewportInsets),
    a = r.slideOrigin.x + e.frame.width / 2,
    o = r.slideOrigin.y + e.frame.height / 2;
  return Z(
    {
      k: t * n,
      x: i.left + i.width / 2 - a * t * n,
      y: i.top + i.height / 2 - o * t * n,
    },
    e.viewport,
    r.worldSize,
    e.viewportInsets,
  );
}
function xt(e) {
  if (
    e.previousViewport.width <= 0 ||
    e.previousViewport.height <= 0 ||
    e.nextViewport.width <= 0 ||
    e.nextViewport.height <= 0 ||
    e.camera.k <= 0
  )
    return St({
      camera: e.camera,
      viewport: e.nextViewport,
      frame: e.frame,
      viewportInsets: e.viewportInsets,
    });
  let t = gt(e.previousViewport, e.viewportInsets),
    n = gt(e.nextViewport, e.viewportInsets),
    r = $({
      viewport: e.previousViewport,
      frame: e.frame,
      camera: e.camera,
      viewportInsets: e.viewportInsets,
    }),
    i = { x: t.left + t.width / 2, y: t.top + t.height / 2 },
    a = {
      x: (i.x - r.slideRect.left) / Math.max(e.camera.k, 2 ** -52),
      y: (i.y - r.slideRect.top) / Math.max(e.camera.k, 2 ** -52),
    },
    o = $({
      viewport: e.nextViewport,
      frame: e.frame,
      camera: { x: 0, y: 0, k: e.camera.k },
      viewportInsets: e.viewportInsets,
    }),
    s = { x: n.left + n.width / 2, y: n.top + n.height / 2 };
  return St({
    camera: {
      k: e.camera.k,
      x: s.x - (o.slideOrigin.x + a.x) * e.camera.k,
      y: s.y - (o.slideOrigin.y + a.y) * e.camera.k,
    },
    viewport: e.nextViewport,
    frame: e.frame,
    viewportInsets: e.viewportInsets,
  });
}
function St(e) {
  let t = $({
    viewport: e.viewport,
    frame: e.frame,
    camera: e.camera,
    viewportInsets: e.viewportInsets,
  });
  return Z(e.camera, e.viewport, t.worldSize, e.viewportInsets);
}
function Ct(e) {
  let t = { ...e.camera, k: Q(e.camera.k) },
    n = $({
      viewport: e.viewport,
      frame: e.frame,
      camera: t,
      viewportInsets: e.viewportInsets,
    });
  return Z(t, e.viewport, n.worldSize, e.viewportInsets);
}
function wt(e) {
  let t = yt(e.viewport, e.frame, e.viewportInsets);
  return vt(e.camera.k / Math.max(t, 2 ** -52), t);
}
function Tt(e) {
  let t = $({
      viewport: e.viewport,
      frame: e.frame,
      camera: e.camera,
      viewportInsets: e.viewportInsets,
    }),
    n = O(e.camera, e.viewportX, e.viewportY);
  return { x: n.x - t.slideOrigin.x, y: n.y - t.slideOrigin.y };
}
var Et = (0, L.createContext)(null);
function Dt({ controller: e, children: t }) {
  return (0, R.jsx)(Et.Provider, { value: e, children: t });
}
function Ot(e, t) {
  return (
    e.presentationVersion === t.presentationVersion &&
    e.selectedSlideIdx === t.selectedSlideIdx &&
    e.slideIds === t.slideIds &&
    e.slideLabels === t.slideLabels &&
    e.slideCount === t.slideCount &&
    e.zoom === t.zoom &&
    e.fitScale === t.fitScale &&
    e.selectedSlideFrame === t.selectedSlideFrame &&
    e.selectedSlideElementTargets === t.selectedSlideElementTargets &&
    e.selectedElementIds === t.selectedElementIds &&
    e.primarySelectedElementId === t.primarySelectedElementId &&
    e.activeInteractionKind === t.activeInteractionKind &&
    e.notesText === t.notesText &&
    e.canUndo === t.canUndo &&
    e.canRedo === t.canRedo &&
    e.slideRect === t.slideRect &&
    e.textLayoutBlocks === t.textLayoutBlocks &&
    e.textEditState === t.textEditState &&
    e.inspector === t.inspector &&
    e.commentThreads === t.commentThreads &&
    e.camera === t.camera
  );
}
function kt(e, t) {
  return (
    e.presentationVersion === t.presentationVersion &&
    e.selectedSlideIdx === t.selectedSlideIdx &&
    e.slideIds === t.slideIds &&
    e.slideLabels === t.slideLabels &&
    e.slideCount === t.slideCount &&
    e.zoom === t.zoom &&
    e.fitScale === t.fitScale &&
    e.slideRect?.scale === t.slideRect?.scale
  );
}
function At(e, t) {
  return (
    e.presentationVersion === t.presentationVersion &&
    e.selectedSlideIdx === t.selectedSlideIdx &&
    e.zoom === t.zoom &&
    e.fitScale === t.fitScale &&
    e.selectedSlideFrame === t.selectedSlideFrame &&
    e.selectedSlideElementTargets === t.selectedSlideElementTargets &&
    e.selectedElementIds === t.selectedElementIds &&
    e.primarySelectedElementId === t.primarySelectedElementId &&
    e.activeInteractionKind === t.activeInteractionKind &&
    e.slideRect === t.slideRect &&
    e.textLayoutBlocks === t.textLayoutBlocks &&
    e.textEditState === t.textEditState &&
    e.inspector === t.inspector &&
    e.commentThreads === t.commentThreads &&
    e.camera === t.camera
  );
}
function jt(e, t) {
  return e.notesText === t.notesText;
}
function Mt(e, t) {
  return (
    e.selectedElementIds === t.selectedElementIds &&
    e.primarySelectedElementId === t.primarySelectedElementId &&
    e.inspector === t.inspector
  );
}
function Nt(e, t) {
  let n = (0, L.useRef)(e.getSnapshot()),
    r = (0, L.useCallback)(() => {
      let r = e.getSnapshot(),
        i = n.current;
      return t(i, r) ? i : ((n.current = r), r);
    }, [t, e]);
  return (0, L.useSyncExternalStore)((t) => e.subscribe(t), r, r);
}
function Pt(e) {
  return Lt(e, `shell`);
}
function Ft(e) {
  return Lt(e, `stage`);
}
function It(e) {
  return Lt(e, `notes`);
}
function Lt(e, t) {
  return Nt(e, Rt(t));
}
function Rt(e) {
  switch (e) {
    case `shell`:
      return kt;
    case `stage`:
      return At;
    case `notes`:
      return jt;
    case `inspector`:
      return Mt;
    default:
      return Ot;
  }
}
var zt = 40,
  Bt = 20;
function Vt({ notesHeight: e, minHeight: t = 80, setNotesHeight: n }) {
  let r = (0, L.useRef)(null),
    i = (0, L.useRef)(e),
    a = (0, L.useRef)(0),
    o = (t) => {
      ((r.current = t.pointerId), (i.current = e), (a.current = t.clientY));
      try {
        t.currentTarget.setPointerCapture(t.pointerId);
      } catch {}
    },
    s = (e) => {
      if (r.current !== e.pointerId) return;
      let o = e.clientY - a.current;
      if (i.current === 0) {
        -o >= Bt && n(Math.max(t, Bt));
        return;
      }
      let s = Math.max(0, i.current - o);
      if (s < zt) {
        n(0);
        return;
      }
      n(Math.max(t, s));
    },
    c = (e) => {
      if (r.current === e.pointerId) {
        if (e.currentTarget.hasPointerCapture?.(e.pointerId))
          try {
            e.currentTarget.releasePointerCapture(e.pointerId);
          } catch {}
        r.current = null;
      }
    };
  return (0, R.jsx)(`div`, {
    onPointerDown: o,
    onPointerMove: s,
    onPointerUp: c,
    onPointerCancel: c,
    className: `mx-auto h-2 w-9 cursor-row-resize select-none`,
    "data-testid": `popcorn-presentation-notes-resize`,
    children: (0, R.jsx)(`div`, {
      className: `h-[3px] w-full rounded bg-gray-300`,
    }),
  });
}
function Ht({
  threads: e,
  slideRect: t,
  isEditing: n,
  onReply: r,
  onResolve: a,
  onReopen: s,
  onDeleteThread: c,
  onToggleReaction: l,
  onEditComment: u,
  onDeleteComment: d,
}) {
  let [f, p] = (0, L.useState)(null);
  return (
    (0, L.useEffect)(() => {
      f && (e.some((e) => e.threadId === f) || p(null));
    }, [f, e]),
    (0, R.jsx)(R.Fragment, {
      children: (0, L.useMemo)(
        () =>
          t
            ? e.map((e) => ({
                thread: e,
                left: t.left + e.markerPoint.x * t.scale,
                top: t.top + e.markerPoint.y * t.scale,
              }))
            : [],
        [t, e],
      ).map(({ thread: e, left: t, top: m }) => {
        let ee = f === e.threadId,
          te = `Slide ${e.slideIndex + 1}`,
          h =
            e.target.kind === `slide`
              ? e.slideLabel
              : (e.target.elementName ?? e.slideLabel);
        return (0, R.jsx)(
          j,
          {
            open: ee,
            onOpenChange: (t) => {
              p(t ? e.threadId : null);
            },
            trigger: (0, R.jsx)(`button`, {
              type: `button`,
              "data-testid": `popcorn-presentation-thread-trigger-${e.threadId}`,
              "aria-label": `Open comment thread for ${e.label}`,
              className: i(
                `pointer-events-auto absolute z-[24] flex h-8 w-8 items-center justify-center rounded-full border border-token-border-light bg-token-bg-primary text-token-text-primary shadow-sm transition-colors`,
                ee
                  ? `border-[var(--color-token-text-link-foreground,#339cff)] text-token-text-link-foreground`
                  : `hover:bg-token-bg-secondary`,
              ),
              style: { left: t, top: m, transform: `translate(-50%, -50%)` },
              onMouseDown: (e) => {
                e.stopPropagation();
              },
              onClick: (e) => {
                e.stopPropagation();
              },
              children: (0, R.jsx)(o, { className: `size-4` }),
            }),
            content: (0, R.jsx)(Me, {
              targetPrimaryLabel: te,
              targetSecondaryLabel: h,
              status: e.status,
              resolvedByName: e.resolvedBy?.displayName ?? null,
              resolvedAt: e.resolvedAt,
              comments: e.comments,
              isEditing: n,
              viewerAuthorId: e.viewerAuthorId,
              onReply: r
                ? (t) => {
                    r(e.threadId, t);
                  }
                : void 0,
              onResolve: a
                ? () => {
                    a(e.threadId);
                  }
                : void 0,
              onReopen: s
                ? () => {
                    s(e.threadId);
                  }
                : void 0,
              onDeleteThread: c
                ? () => {
                    c(e.threadId);
                  }
                : void 0,
              onToggleReaction: l
                ? (t, n) => {
                    l(e.threadId, t, n);
                  }
                : void 0,
              onEditComment: u
                ? (t, n) => {
                    u(e.threadId, t, n);
                  }
                : void 0,
              onDeleteComment: d
                ? (t) => {
                    d(e.threadId, t);
                  }
                : void 0,
            }),
          },
          e.threadId,
        );
      }),
    })
  );
}
function Ut(e) {
  return {
    left: e.left,
    top: e.top,
    width: e.width,
    height: e.height,
    rotation: e.rotation,
  };
}
function Wt(e) {
  return { x: e.x, y: e.y };
}
function Gt(e) {
  return { elementId: e.elementId, frame: Ut(e.frame) };
}
function Kt(e) {
  let t = e.selectedElementIds
    .map((t) => e.selectedSlideElementTargets.find((e) => e.id === t))
    .filter((e) => e != null);
  if (t.length === 0) return null;
  let n = t[0];
  if (!n) return null;
  let r = n.frame.left,
    i = n.frame.top,
    a = n.frame.left + n.frame.width,
    o = n.frame.top + n.frame.height;
  for (let e of t.slice(1))
    ((r = Math.min(r, e.frame.left)),
      (i = Math.min(i, e.frame.top)),
      (a = Math.max(a, e.frame.left + e.frame.width)),
      (o = Math.max(o, e.frame.top + e.frame.height)));
  return { left: r, top: i, width: a - r, height: o - i };
}
function qt(e) {
  let t = e.snapshot.slideIds[e.snapshot.selectedSlideIdx];
  if (!t) return null;
  let n = [...(e.elementIds ?? e.snapshot.selectedElementIds)],
    r = e.primaryElementId ?? e.snapshot.primarySelectedElementId ?? null,
    i =
      e.frame ??
      Kt({
        selectedElementIds: n,
        selectedSlideElementTargets: e.snapshot.selectedSlideElementTargets,
      });
  if (!i || n.length === 0) return null;
  let a =
      r == null
        ? null
        : (e.snapshot.inspector.slideElements.find((e) => e.id === r) ?? null),
    o =
      a == null
        ? null
        : e.snapshot.inspector.slideElements
            .filter((e) => e.kind === a.kind)
            .findIndex((e) => e.id === a.id) + 1;
  return {
    type: `presentation-element-selection`,
    slideId: t,
    slideIndex: e.snapshot.selectedSlideIdx,
    slideLabel:
      e.snapshot.slideLabels[e.snapshot.selectedSlideIdx] ??
      `Slide ${e.snapshot.selectedSlideIdx + 1}`,
    elementIds: n,
    primaryElementId: r,
    primaryElementKind: a?.kind ?? null,
    primaryElementName: a?.name ?? null,
    primaryElementOrdinal: o != null && o > 0 ? o : null,
    frame: Ut(i),
    ...(e.anchorPoint == null
      ? {}
      : {
          anchorPoint: Wt(e.anchorPoint),
          primaryElementOffset:
            i == null
              ? null
              : { x: e.anchorPoint.x - i.left, y: e.anchorPoint.y - i.top },
        }),
  };
}
function Jt(e) {
  let t = e.snapshot.slideIds[e.snapshot.selectedSlideIdx];
  return t
    ? {
        type: `presentation-region`,
        slideId: t,
        slideIndex: e.snapshot.selectedSlideIdx,
        slideLabel:
          e.snapshot.slideLabels[e.snapshot.selectedSlideIdx] ??
          `Slide ${e.snapshot.selectedSlideIdx + 1}`,
        frame: Ut(e.frame),
        anchorPoint: Wt(e.anchorPoint),
        containedElements: (e.containedElements ?? []).map(Gt),
      }
    : null;
}
function Yt(e) {
  let t = e.snapshot.slideIds[e.snapshot.selectedSlideIdx];
  return t
    ? {
        type: `presentation-drawing-region`,
        slideId: t,
        slideIndex: e.snapshot.selectedSlideIdx,
        slideLabel:
          e.snapshot.slideLabels[e.snapshot.selectedSlideIdx] ??
          `Slide ${e.snapshot.selectedSlideIdx + 1}`,
        frame: Ut(e.frame),
        viewportBounds: {
          left: e.viewportBounds.left,
          top: e.viewportBounds.top,
          width: e.viewportBounds.width,
          height: e.viewportBounds.height,
        },
        containedElements: (e.containedElements ?? []).map(Gt),
      }
    : null;
}
function Xt(e) {
  return e.type === `presentation-region`
    ? e.frame.width === 0 && e.frame.height === 0
      ? `${e.slideLabel} · Point`
      : `${e.slideLabel} · Region`
    : e.elementIds.length === 1
      ? `${e.slideLabel} · ${e.primaryElementId ?? e.elementIds[0]}`
      : `${e.slideLabel} · ${e.elementIds.length} elements`;
}
function Zt(e) {
  return `${e.slideLabel} · Drawing`;
}
function Qt(e, t) {
  return t
    ? {
        left: t.left + e.frame.left * t.scale,
        top: t.top + e.frame.top * t.scale,
        width: e.frame.width * t.scale,
        height: e.frame.height * t.scale,
      }
    : Ut(e.frame);
}
function $t(e, t) {
  let n =
    e.type === `presentation-region` ? e.anchorPoint : (e.anchorPoint ?? null);
  return n
    ? t
      ? {
          left: t.left + n.x * t.scale,
          top: t.top + n.y * t.scale,
          width: 0,
          height: 0,
        }
      : { left: n.x, top: n.y, width: 0, height: 0 }
    : Qt(e, t);
}
function en(e, t, n = 1) {
  let r = null,
    { hitRadius: i } = A(n);
  for (let n = 0; n < e.length; n += 1) {
    let a = e[n];
    if (!a) continue;
    let o = a.frame;
    if (!o || (!sn(o, t) && !ln(a, t, i))) continue;
    let s = a.zIndex;
    (!r || s > r.z || (s === r.z && n > r.order)) &&
      (r = { id: a.id, z: s, order: n });
  }
  return r?.id ?? null;
}
function tn(e, t, n = 1) {
  let r = null,
    { hitRadius: i } = A(n);
  for (let n = 0; n < e.length; n += 1) {
    let a = e[n],
      o = a?.connector;
    if (!(!a || !o))
      for (let e of [`from`, `to`]) {
        let s = o[e];
        if (Math.hypot(t.x - s.x, t.y - s.y) > i) continue;
        let c = a.zIndex;
        (!r || c > r.z || (c === r.z && n > r.order)) &&
          (r = { hit: { elementId: a.id, endpoint: e }, z: c, order: n });
      }
  }
  return r?.hit ?? null;
}
function nn(e, t) {
  let n = Math.min(e.x, t.x),
    r = Math.min(e.y, t.y),
    i = Math.max(e.x, t.x),
    a = Math.max(e.y, t.y);
  return { left: n, top: r, width: i - n, height: a - r };
}
function rn(e, t) {
  return e
    .filter((e) => cn(t, e.frame))
    .sort((t, n) =>
      t.zIndex === n.zIndex ? e.indexOf(t) - e.indexOf(n) : t.zIndex - n.zIndex,
    )
    .map((e) => e.id);
}
function an(e, t, n = 1) {
  return e ? je(e, t, n) : null;
}
function on(e, t, n = 1) {
  return e ? Le(e, t, n) : !1;
}
function sn(e, t) {
  return k(e, t);
}
function cn(e, t) {
  return Pe(e, t);
}
function ln(e, t, n) {
  let r = e.connector;
  return r ? un(t, r.from, r.to) <= n : !1;
}
function un(e, t, n) {
  let r = n.x - t.x,
    i = n.y - t.y,
    a = e.x - t.x,
    o = e.y - t.y,
    s = r * r + i * i;
  if (s <= 0) return Math.hypot(a, o);
  let c = Math.max(0, Math.min(1, (a * r + o * i) / s)),
    l = t.x + c * r,
    u = t.y + c * i;
  return Math.hypot(e.x - l, e.y - u);
}
var dn = {
    isPanelOpen: () => !1,
    openPanel: () => {},
    closePanel: () => {},
    togglePanel: () => {},
  },
  fn = 1,
  pn = 3,
  mn = 6,
  hn = { left: 0, top: 0, right: 0, bottom: 0 };
function gn({
  controller: e,
  runtime: t,
  snapshot: n,
  stageOverlays: r = [],
  panelControls: a = dn,
  isEditing: o = !0,
  theme: s = `web`,
  viewportInsets: c = hn,
  annotationMode: l = !1,
  onAnnotationModeChange: u,
  drawingMode: d = !1,
  onDrawingModeChange: f,
  drawingCommitToken: p = 0,
  reviewTools: m,
  annotationsEnabled: ee = !0,
  drawingAnnotationsEnabled: te = !0,
  commentThreadsEnabled: h = !0,
  annotationPortalContainerElement: g = null,
}) {
  let ne = Ft(e),
    _ = n ?? ne,
    v = (0, L.useRef)(null),
    y = (0, L.useRef)(null),
    ie = (0, L.useRef)(null),
    ae = (0, L.useRef)(null),
    b = (0, L.useRef)(null),
    x = (0, L.useRef)(null),
    S = (0, L.useRef)(null),
    C = (0, L.useRef)(null),
    w = (0, L.useRef)(null),
    T = (0, L.useRef)(null),
    oe = (0, L.useRef)(!1),
    se = (0, L.useRef)(null),
    ce = (0, L.useRef)(null),
    [ge, Se] = (0, L.useState)(0),
    [Ce, De] = (0, L.useState)(!1),
    O = ee && m?.annotation != null && m.annotation.enabled !== !1,
    k = te && m?.drawing != null && m.drawing.enabled !== !1,
    [A, j] = (0, L.useState)(null),
    [ke, M] = (0, L.useState)(null),
    je = (0, L.useRef)(A);
  je.current = A;
  let Me = (0, L.useRef)(null),
    N = (0, L.useRef)(!1),
    [Ne, Pe] = (0, L.useState)(!1),
    P = (0, L.useRef)(null),
    [Ie, F] = (0, L.useState)(null),
    [Le, Re] = (0, L.useState)(null),
    Be = (0, L.useRef)(null);
  Be.current = Le;
  let [Ve, He] = (0, L.useState)([]),
    Ue = (0, L.useRef)([]);
  Ue.current = Ve;
  let We = (0, L.useRef)(null),
    z = (0, L.useRef)(null),
    Ge = (0, L.useRef)(p),
    Ke = (0, L.useCallback)((e) => {
      (M((t) => (t === e ? null : t)),
        j((t) => (t?.mode === `edit` && t.annotationId === e ? null : t)));
    }, []),
    B = (0, L.useCallback)(() => {
      (M(null), j(null));
    }, []),
    qe = (0, L.useCallback)(
      (e) => {
        (Ke(e), m?.annotation?.onDismiss?.(e));
      },
      [Ke, m?.annotation],
    ),
    V = (0, L.useCallback)((e) => {
      Re((t) => {
        let n = typeof e == `function` ? e(t) : e;
        return ((Be.current = n), n);
      });
    }, []),
    H = (0, L.useSyncExternalStore)(
      (e) => t.subscribeToCameraChanges(e),
      () => t.getCamera(),
      () => t.getCamera(),
    ),
    U = (0, L.useSyncExternalStore)(
      (e) => t.subscribeToLayoutChanges(e),
      () => t.getLayoutSnapshot(),
      () => t.getLayoutSnapshot(),
    ),
    W = U.viewportInsets,
    G = Sn(U.width, U.height, H, _.selectedSlideFrame, W) ?? _.slideRect,
    K = G === _.slideRect ? _ : { ..._, slideRect: G },
    q = _.slideIds[_.selectedSlideIdx] ?? `slide-${_.selectedSlideIdx}`,
    Je = _.slideLabels[_.selectedSlideIdx] ?? `Slide ${_.selectedSlideIdx + 1}`,
    Ye = (0, L.useMemo)(() => Cn(K), [K]),
    J = (0, L.useMemo)(() => qt({ snapshot: _ }), [_]),
    Xe = (0, L.useMemo)(() => {
      let e = K.slideRect;
      return e
        ? { left: e.left, top: e.top, width: e.width, height: e.height }
        : null;
    }, [K.slideRect]),
    Ze = (0, L.useMemo)(
      () => (A?.target ? Qt(A.target, K.slideRect) : null),
      [A?.target, K.slideRect],
    ),
    Y = (0, L.useMemo)(
      () => (A?.target ? $t(A.target, K.slideRect) : null),
      [A?.target, K.slideRect],
    ),
    Qe = Ze ?? Y,
    $e = (0, L.useMemo)(
      () => (!O || !Ie ? null : nn(Ie.start, Ie.current)),
      [O, Ie],
    ),
    et = (0, L.useMemo)(() => {
      if (!$e || !Ie) return null;
      let e = Jt({ snapshot: _, frame: $e, anchorPoint: Ie.current });
      return e ? Qt(e, K.slideRect) : null;
    }, [Ie, $e, _, K.slideRect]),
    tt = (0, L.useMemo)(
      () =>
        $e
          ? rn(_.selectedSlideElementTargets, $e).flatMap((e) => {
              let t = _.selectedSlideElementTargets.find((t) => t.id === e);
              return t
                ? [
                    {
                      elementId: e,
                      frame: {
                        left: t.frame.left,
                        top: t.frame.top,
                        width: t.frame.width,
                        height: t.frame.height,
                        rotation: t.frame.rotation,
                      },
                    },
                  ]
                : [];
            })
          : [],
      [$e, _.selectedSlideElementTargets],
    ),
    nt = (0, L.useMemo)(
      () =>
        A?.target.type === `presentation-region`
          ? A.target.containedElements
          : [],
      [A],
    ),
    rt = (0, L.useMemo)(
      () =>
        Ne && _.hoveredElementId
          ? (_.selectedSlideElementTargets.find(
              (e) => e.id === _.hoveredElementId,
            ) ?? null)
          : null,
      [Ne, _.hoveredElementId, _.selectedSlideElementTargets],
    ),
    it = (0, L.useMemo)(
      () =>
        et ||
        Ze ||
        (!O || !l
          ? null
          : rt
            ? Qt(
                {
                  type: `presentation-element-selection`,
                  slideId: q,
                  slideIndex: _.selectedSlideIdx,
                  slideLabel: Je,
                  elementIds: [rt.id],
                  primaryElementId: rt.id,
                  frame: rt.frame,
                },
                K.slideRect,
              )
            : null),
      [Ze, O, rt, l, et, q, Je, _.selectedSlideIdx, K.slideRect],
    ),
    {
      annotations: at,
      addPendingAnnotation: ot,
      updatePendingAnnotation: st,
      dismissAnnotation: ct,
    } = le(m?.annotation?.handleRef, {
      onDismissAnnotation: qe,
      onDismissAllAnnotations: B,
    }),
    lt = (0, L.useMemo)(
      () => at.filter((e) => e.target.slideId === q),
      [q, at],
    ),
    ut = (0, L.useMemo)(
      () =>
        lt.map((e) => ({ annotation: e, bounds: Qt(e.target, K.slideRect) })),
      [lt, K.slideRect],
    ),
    dt = (0, L.useMemo)(
      () =>
        ke == null || A?.mode === `edit`
          ? null
          : (ut.find(({ annotation: e }) => e.annotationId === ke) ?? null),
      [A?.mode, ke, ut],
    ),
    ft = (0, L.useMemo)(() => (et ? tt : nt), [nt, tt, et]),
    { drawings: pt, addPendingDrawing: mt } = ue(m?.drawing?.handleRef),
    ht = (0, L.useMemo)(
      () => pt.filter((e) => e.target.slideId === q),
      [q, pt],
    ),
    X = (0, L.useMemo)(
      () =>
        new re(
          {
            onPointerDown: (t, n) => {
              e.textPointerDown(t, n);
            },
            onPointerMove: (t) => {
              e.textPointerMove(t);
            },
            onPointerUp: () => {
              e.textPointerUp();
            },
            onSelectWordAtPoint: (t) => {
              e.textSelectWordAtPoint(t);
            },
            onSelectParagraphAtPoint: (t) => {
              e.textSelectParagraphAtPoint(t);
            },
            onActivateBlockEnd: (t) => {
              e.textActivateBlockEnd(t);
            },
            onClear: () => {
              e.textClear();
            },
            onKeyDown: (t) => {
              e.textHandleKeyDown(t);
            },
            onBeforeInput: (t) => {
              e.textHandleBeforeInput(t);
            },
            onInput: (t) => {
              e.textHandleInput(t);
            },
            onCompositionEnd: (t) => {
              e.textHandleCompositionEnd(t);
            },
          },
          {
            onChange: () => {
              Se((e) => e + 1);
            },
            onUnhandledKeyDown: (t) => {
              if ((t.metaKey || t.ctrlKey) && t.key.toLowerCase() === `z`) {
                (t.shiftKey ? e.redo() : e.undo(), t.preventDefault());
                return;
              }
              (t.metaKey || t.ctrlKey) &&
                t.key.toLowerCase() === `y` &&
                (e.redo(), t.preventDefault());
            },
          },
        ),
      [e],
    );
  ((0, L.useEffect)(
    () => (
      t.setOnCameraSettled(({ zoom: t }) => {
        e.setZoom(t);
      }),
      () => {
        t.setOnCameraSettled(null);
      }
    ),
    [e, t],
  ),
    (0, L.useEffect)(() => {
      t.attachHost(y.current);
      let n =
        y.current && ie.current
          ? e.attachViewport({
              host: y.current,
              canvas: ie.current,
              overlayCanvas: ae.current,
            })
          : void 0;
      return (
        X?.attachContainer(y.current),
        t.start(),
        () => {
          (n?.(), t.dispose(), X?.dispose());
        }
      );
    }, [e, t, X]),
    (0, L.useEffect)(
      () => () => {
        (se.current != null && window.cancelAnimationFrame(se.current),
          e.clearLocalAwarenessCursor());
      },
      [e],
    ),
    (0, L.useEffect)(() => {
      t.setViewState({
        selectedSlideIdx: _.selectedSlideIdx,
        selectedSlideFrame: _.selectedSlideFrame,
        zoom: _.zoom,
        camera: e.getViewportCamera(),
      });
    }, [e, t, _.selectedSlideIdx, _.selectedSlideFrame, _.zoom]),
    (0, L.useEffect)(() => {
      (t.setViewportInsets(c),
        typeof e.setViewportInsets == `function` && e.setViewportInsets(c));
    }, [e, t, c]),
    (0, L.useEffect)(() => {
      Ye || De(!1);
    }, [Ye]),
    (0, L.useEffect)(() => {
      if (_.textEditState?.activeBlockId) {
        C.current = null;
        return;
      }
      (_.selectedElementIds.length !== 1 ||
        !_.primarySelectedElementId ||
        !_.textLayoutBlocks.some((e) => e.id === _.primarySelectedElementId)) &&
        (C.current = null);
    }, [
      _.primarySelectedElementId,
      _.selectedElementIds,
      _.textEditState,
      _.textLayoutBlocks,
    ]),
    (0, L.useEffect)(() => {
      _.selectedSlideFrame &&
        t.hasInitializedCamera() &&
        e.setViewportCamera(H);
    }, [H, e, t, _.selectedSlideFrame]),
    (0, L.useEffect)(() => {
      let e = y.current;
      !_.selectedSlideFrame ||
        !e ||
        X.updateState({
          state: o ? _.textEditState : null,
          blocks: _.textLayoutBlocks,
        });
    }, [o, H, _.selectedSlideFrame, _.textEditState, _.textLayoutBlocks, X]),
    (0, L.useEffect)(() => {
      typeof e.setEditingEnabled == `function` && e.setEditingEnabled(o);
    }, [e, o]),
    (0, L.useEffect)(() => {
      let t = v.current;
      if (!t) return;
      let n = null,
        r = [],
        i = () => {
          n ??= window.requestAnimationFrame(() => {
            ((n = null), e.setStageBackgroundColor(_n(t, s)));
          });
        };
      if ((i(), typeof MutationObserver < `u`)) {
        let e = (e) => {
          if (!e) return;
          let t = new MutationObserver(() => {
            i();
          });
          (t.observe(e, {
            attributes: !0,
            attributeFilter: [`class`, `data-theme`, `style`],
          }),
            r.push(t));
        };
        (e(t),
          e(t.closest(`[data-codex-window-type='electron']`)),
          e(document.documentElement),
          e(document.body));
      }
      return () => {
        (n != null && window.cancelAnimationFrame(n),
          r.forEach((e) => e.disconnect()));
      };
    }, [e, s]),
    (0, L.useEffect)(() => {
      o ||
        (X.clear(),
        (C.current = null),
        (S.current = null),
        (w.current = null),
        (T.current = null),
        (oe.current = !1));
    }, [o, X]));
  let gt = (0, L.useCallback)(() => {
      try {
        y.current?.focus({ preventScroll: !0 });
      } catch {}
    }, []),
    _t = (0, L.useCallback)(() => {
      (z.current?.(), (z.current = null), V(null));
    }, [V]),
    Z = (0, L.useCallback)(() => {
      ((We.current = null), (Ue.current = []), He([]));
    }, []),
    Q = (0, L.useCallback)(() => {
      ((N.current = !1), j(null), F(null), gt());
    }, [gt]),
    yt = (0, L.useCallback)(() => {
      let e = je.current;
      return e?.mode === `create` && e.body.trim().length > 0
        ? N.current
          ? (Q(), !0)
          : ((N.current = !0), E(Me.current), !1)
        : (Q(), !0);
    }, [Q]),
    $ = (0, L.useCallback)(
      (e) => {
        let t = K.slideRect;
        return t
          ? { x: t.left + e.x * t.scale, y: t.top + e.y * t.scale }
          : { x: e.x, y: e.y };
      },
      [K.slideRect],
    ),
    bt = (0, L.useCallback)(
      (e) => {
        e == null ||
          e.points.length === 0 ||
          !k ||
          !d ||
          ((We.current = q), (Ue.current = [...Ue.current, e]), He(Ue.current));
      },
      [q, k, d],
    ),
    xt = (0, L.useCallback)(
      (e) => {
        if (e.length === 0) return;
        let t = I(e),
          n = I(e.map((e) => ({ ...e, points: e.points.map($) }))),
          r = y.current,
          i = ie.current;
        if (!t || !n || !r || !i || !K.slideRect) return;
        let a = { width: r.clientWidth, height: r.clientHeight },
          o = e.reduce((e, t) => Math.max(e, t.strokeWidth), 0),
          s = he(
            D({
              left: n.left - o / 2,
              top: n.top - o / 2,
              width: n.width + o,
              height: n.height + o,
            }),
            a,
          ),
          c = { left: t.left, top: t.top, width: t.width, height: t.height },
          l = Yt({
            snapshot: _,
            frame: c,
            viewportBounds: s,
            containedElements: rn(_.selectedSlideElementTargets, c).flatMap(
              (e) => {
                let t = _.selectedSlideElementTargets.find((t) => t.id === e);
                return t
                  ? [
                      {
                        elementId: e,
                        frame: {
                          left: t.frame.left,
                          top: t.frame.top,
                          width: t.frame.width,
                          height: t.frame.height,
                          rotation: t.frame.rotation,
                        },
                      },
                    ]
                  : [];
              },
            ),
          });
        if (!l) return;
        let u = _e(`drawing`),
          d = Zt(l);
        mt({
          drawingId: u,
          artifactKind: `presentation`,
          label: d,
          target: l,
          strokes: e,
        });
        let f = { x: s.left + s.width / 2, y: s.top + s.height / 2 };
        me({
          cropRect: s,
          viewportSize: a,
          baseCanvas: i,
          overlayCanvases: [ae.current, b.current],
          strokes: e,
          projectPoint: $,
        })
          .then((t) => {
            let n = { ...t, commentId: u },
              r = {
                drawingId: u,
                artifactKind: `presentation`,
                label: d,
                target: l,
                strokes: e,
                screenshot: n,
                browserCompatible: xe({
                  drawingId: u,
                  screenshot: n,
                  markerViewportPoint: f,
                  viewportSize: a,
                }),
              };
            return m?.drawing?.onSubmit?.(r);
          })
          .catch((e) => {
            console.error(
              `Failed to capture presentation drawing screenshot`,
              e,
            );
          });
      },
      [mt, $, m?.drawing, _, K.slideRect],
    ),
    St = (e) => {
      ((N.current = !1),
        M(e.annotationId),
        j({
          mode: `edit`,
          annotationId: e.annotationId,
          target: e.target,
          body: e.body,
        }));
    },
    Ct = () => {
      if (!A?.target) return;
      let e = A.body.trim();
      if (e.length === 0) return;
      if (A.mode === `edit`) {
        (st(A.annotationId, { body: e }),
          m?.annotation?.onUpdate?.({
            annotationId: A.annotationId,
            artifactKind: `presentation`,
            label: Xt(A.target),
            body: e,
            target: A.target,
          }),
          Q());
        return;
      }
      let t = {
        annotationId: _e(`annotation`),
        artifactKind: `presentation`,
        label: Xt(A.target),
        body: e,
        target: A.target,
      };
      (ot(t), m?.annotation?.onSubmit?.(t), Q());
    },
    wt = () => {
      A?.mode === `edit` &&
        (ct(A.annotationId), M((e) => (e === A.annotationId ? null : e)), Q());
    };
  ((0, L.useEffect)(() => {
    (O || (A?.mode !== `edit` && j(null)),
      (!O || !l) && (F(null), (P.current = null)));
  }, [O, A?.mode, l]),
    (0, L.useEffect)(() => {
      if (k && d) {
        (j(null),
          F(null),
          (P.current = null),
          Pe(!1),
          e.setHoveredElementId(null));
        return;
      }
      let t = p !== Ge.current;
      (_t(), Ue.current.length > 0 && !t && Z());
    }, [_t, Z, e, p, k, d]),
    (0, L.useEffect)(() => {
      if (p === Ge.current) return;
      Ge.current = p;
      let e = Ue.current;
      if (e.length === 0) {
        Z();
        return;
      }
      (xt(e), Z());
    }, [Z, p, xt]),
    (0, L.useEffect)(() => {
      if (!O || !l) {
        (Pe(!1), e.setHoveredElementId(null));
        return;
      }
      (Pe(!1), e.setHoveredElementId(null));
    }, [O, l, e]),
    (0, L.useEffect)(() => {
      A &&
        A.target.slideId !== q &&
        (M(null), F(null), (P.current = null), j(null));
    }, [A, q]),
    (0, L.useEffect)(
      () => () => {
        _t();
      },
      [_t],
    ),
    (0, L.useEffect)(() => {
      We.current == null || We.current === q || Z();
    }, [Z, q]),
    (0, L.useEffect)(() => {
      let e = y.current,
        t = b.current,
        n = k && d ? `crosshair` : O && l && !A ? Te : ``;
      return (
        e && (e.style.cursor = n),
        t && (t.style.cursor = n),
        () => {
          (e && e.style.cursor === n && (e.style.cursor = ``),
            t && t.style.cursor === n && (t.style.cursor = ``));
        }
      );
    }, [A, O, l, k, d]),
    (0, L.useEffect)(() => {
      if (!A) return;
      let e = (e) => {
        let t = e.target;
        t instanceof Node &&
          (Me.current?.contains(t) ||
            (t instanceof HTMLElement &&
              t.closest(`[data-popcorn-annotation-marker='true']`)) ||
            y.current?.contains(t) ||
            yt());
      };
      return (
        document.addEventListener(`mousedown`, e, !0),
        () => {
          document.removeEventListener(`mousedown`, e, !0);
        }
      );
    }, [A, yt]),
    (0, L.useEffect)(() => {
      let e = b.current;
      if (!e) return;
      let t = U.width,
        n = U.height;
      if (t <= 0 || n <= 0) return;
      let r = window.devicePixelRatio || 1,
        i = Math.max(1, Math.round(t * r)),
        a = Math.max(1, Math.round(n * r));
      (e.width !== i || e.height !== a) && ((e.width = i), (e.height = a));
      let o = `${t}px`,
        s = `${n}px`;
      (e.style.width !== o && (e.style.width = o),
        e.style.height !== s && (e.style.height = s));
      let c = e.getContext(`2d`);
      c &&
        (c.setTransform(r, 0, 0, r, 0, 0),
        c.clearRect(0, 0, t, n),
        K.slideRect &&
          _.selectedSlideFrame &&
          (c.save(),
          c.translate(K.slideRect.left, K.slideRect.top),
          c.scale(K.slideRect.scale, K.slideRect.scale),
          X?.drawOverlay(c),
          c.restore()));
    }, [
      U.height,
      U.width,
      ge,
      K.slideRect,
      _.selectedSlideFrame,
      _.textEditState,
      _.textLayoutBlocks,
      X,
    ]));
  let Tt = (t) => {
      ((ce.current = t ? { x: Math.round(t.x), y: Math.round(t.y) } : null),
        (se.current ??= window.requestAnimationFrame(() => {
          se.current = null;
          let t = ce.current;
          if (t) {
            e.setLocalAwarenessCursor(t);
            return;
          }
          e.clearLocalAwarenessCursor();
        })));
    },
    Et = (t) => {
      (De(!1), y.current?.focus());
      let n = bn(t, y.current, H, _, W);
      if ((Tt(n), k && d)) {
        if (!n) return;
        (wn(t, x),
          (z.current = () => {
            let e = b.current,
              t = x.current;
            if (e && t != null && e.hasPointerCapture?.(t))
              try {
                e.releasePointerCapture(t);
              } catch {}
            x.current === t && (x.current = null);
          }),
          V({ color: de, strokeWidth: 3, points: [n] }),
          t.preventDefault(),
          t.stopPropagation());
        return;
      }
      if (O && !l && je.current && !yt()) {
        (t.preventDefault(), t.stopPropagation());
        return;
      }
      if (O && l) {
        let r = je.current,
          i =
            r?.mode === `create`
              ? r.body.trim().length === 0
                ? `close`
                : `keep`
              : `replace`;
        if ((r != null && i === `replace` && j(null), !n)) {
          (r != null && i !== `replace` && yt(), (P.current = null), F(null));
          return;
        }
        let a = en(_.selectedSlideElementTargets, n, H.k);
        e.setHoveredElementId(a);
        let o =
          a == null
            ? null
            : (_.selectedSlideElementTargets.find((e) => e.id === a) ?? null);
        ((P.current = {
          pointerId: t.pointerId,
          start: n,
          draftClickAction: i,
          clickedElementTarget: o,
        }),
          wn(t, x),
          F(null),
          t.preventDefault(),
          t.stopPropagation());
        return;
      }
      if (!n) {
        if (X?.isActive()) {
          (X.clear(), (C.current = null));
          return;
        }
        (e.clearElementSelection(), (C.current = null));
        return;
      }
      if (!o) {
        let t = en(_.selectedSlideElementTargets, n, H.k);
        (e.setSelectedElementId(t),
          (C.current = null),
          (S.current = null),
          (w.current = null),
          (T.current = null),
          (oe.current = !1));
        return;
      }
      let r = X.isActive(),
        i =
          !r &&
          _.selectedElementIds.length === 1 &&
          _.primarySelectedElementId &&
          C.current === _.primarySelectedElementId
            ? _.primarySelectedElementId
            : void 0;
      if (
        (r || i) &&
        X.tryPointerDown(n, { shiftKey: t.shiftKey, restrictToBlockId: i })
      ) {
        (t.preventDefault(),
          (S.current = `text`),
          (w.current = null),
          (T.current = null),
          (oe.current = !1),
          (C.current = null),
          wn(t, x));
        return;
      }
      r && (X.clear(), (C.current = null));
      let a = _.primarySelectedElementId
          ? _.selectedSlideElementTargets.find(
              (e) => e.id === _.primarySelectedElementId,
            )
          : null,
        s = _.selectedElementIds.length === 1 ? (a?.frame ?? null) : null,
        c = _.selectedElementIds.length === 1 && a ? tn([a], n, H.k) : null,
        u = c ? null : an(s, n, H.k),
        f = !c && !u && !!a?.canRotate && on(s, n, H.k),
        p = c
          ? c.endpoint === `from`
            ? `connector-from`
            : `connector-to`
          : u
            ? `resize`
            : f
              ? `rotate`
              : `move`,
        m =
          c?.elementId ??
          (p === `move`
            ? en(_.selectedSlideElementTargets, n, H.k)
            : _.primarySelectedElementId);
      if (!m) {
        if (((w.current = null), (T.current = null), (oe.current = !1), r))
          return;
        (wn(t, x),
          (S.current = `marquee`),
          (C.current = null),
          e.beginSelectionMarquee({ point: n, additive: t.shiftKey }));
        return;
      }
      (e.beginElementInteraction({
        elementId: m,
        point: n,
        mode: p,
        corner: u,
        preserveRatio: t.shiftKey,
        altKey: t.altKey,
        ctrlKey: t.ctrlKey,
      }),
        wn(t, x),
        (S.current = `element`),
        (w.current = m),
        (T.current = n),
        (oe.current = !1),
        C.current && C.current !== m && (C.current = null));
    },
    Dt = (t) => {
      let n = bn(t, y.current, H, _, W);
      if ((Tt(n), k && d)) {
        if (x.current != null && x.current !== t.pointerId) return;
        (n &&
          Be.current &&
          V((e) => {
            if (!e) return e;
            let t = e.points[e.points.length - 1];
            return t && Math.hypot(n.x - t.x, n.y - t.y) < 0.5
              ? e
              : { ...e, points: [...e.points, n] };
          }),
          (t.currentTarget.style.cursor = `crosshair`),
          t.preventDefault(),
          t.stopPropagation());
        return;
      }
      if (O && l) {
        let r = P.current;
        if (r != null && x.current != null && x.current !== t.pointerId) return;
        if (r != null && n) {
          Pe(!0);
          let e = Math.hypot(n.x - r.start.x, n.y - r.start.y) >= mn;
          (e && je.current && ((N.current = !1), j(null)),
            F(e ? { start: r.start, current: n } : null),
            t.preventDefault(),
            t.stopPropagation());
        }
        if (!n) {
          (e.setHoveredElementId(null), (t.currentTarget.style.cursor = ``));
          return;
        }
        Pe(!0);
        let i = en(_.selectedSlideElementTargets, n, H.k);
        (e.setHoveredElementId(i),
          (t.currentTarget.style.cursor = je.current ? `` : Te));
        return;
      }
      if (S.current === `text`) {
        n && X.pointerMove(n);
        return;
      }
      if (S.current === `marquee`) {
        n && e.updateSelectionMarquee({ nextPoint: n });
        return;
      }
      if (S.current === `element` && n) {
        (T.current &&
          Math.hypot(n.x - T.current.x, n.y - T.current.y) > pn &&
          (oe.current = !0),
          e.updateElementInteraction({
            nextPoint: n,
            shiftKey: t.shiftKey,
            altKey: t.altKey,
            ctrlKey: t.ctrlKey,
          }));
        return;
      }
      if (!o) {
        let r = n ? en(_.selectedSlideElementTargets, n, H.k) : null;
        (e.setHoveredElementId(r), (t.currentTarget.style.cursor = ``));
        return;
      }
      if (!n) {
        (e.setHoveredElementId(null), (t.currentTarget.style.cursor = ``));
        return;
      }
      let r = _.primarySelectedElementId
          ? _.selectedSlideElementTargets.find(
              (e) => e.id === _.primarySelectedElementId,
            )
          : null,
        i = _.selectedElementIds.length === 1 ? (r?.frame ?? null) : null,
        a = _.selectedElementIds.length === 1 && r ? tn([r], n, H.k) : null;
      if (a) {
        (e.setHoveredElementId(a.elementId),
          (t.currentTarget.style.cursor = `crosshair`));
        return;
      }
      let s = an(i, n, H.k);
      if (s) {
        (e.setHoveredElementId(_.primarySelectedElementId),
          (t.currentTarget.style.cursor = Oe(s) ?? ``));
        return;
      }
      if (i && r?.canRotate && on(i, n, H.k)) {
        (e.setHoveredElementId(_.primarySelectedElementId),
          (t.currentTarget.style.cursor = Fe()));
        return;
      }
      if (X.isActive() && X.hasTextCursorAtPoint(n)) {
        (e.setHoveredElementId(null), (t.currentTarget.style.cursor = `text`));
        return;
      }
      let c = en(_.selectedSlideElementTargets, n, H.k);
      (e.setHoveredElementId(c),
        (t.currentTarget.style.cursor = c ? `move` : ``));
    },
    Ot = (t, n) => {
      if (k && d) {
        if (x.current != null && x.current !== t.pointerId) return;
        Tt(bn(t, y.current, H, _, W));
        let e = Be.current;
        (Tn(t, x), (z.current = null), V(null), n && bt(e));
        return;
      }
      if (O && l) {
        if (x.current != null && x.current !== t.pointerId) return;
        (Tt(bn(t, y.current, H, _, W)), Tn(t, x));
        let r = P.current;
        if (((P.current = null), F(null), !n || !r)) return;
        let i = bn(t, y.current, H, _, W);
        if (!i) return;
        let a = nn(r.start, i),
          o = Math.hypot(i.x - r.start.x, i.y - r.start.y) < mn;
        if (o) {
          if (r.clickedElementTarget) {
            switch (r.draftClickAction) {
              case `keep`:
              case `close`:
                yt();
                return;
              case `replace`:
                break;
            }
            let t = r.clickedElementTarget,
              n = qt({
                snapshot: _,
                elementIds: [t.id],
                primaryElementId: t.id,
                frame: t.frame,
                anchorPoint: i,
              });
            if (!n) return;
            (e.setHoveredElementId(null),
              Pe(!1),
              (N.current = !1),
              j({ mode: `create`, target: n, body: `` }));
            return;
          }
          switch (r.draftClickAction) {
            case `keep`:
            case `close`:
              yt();
              return;
            case `replace`:
              break;
          }
        }
        let s = Jt({
          snapshot: _,
          frame: o ? { left: i.x, top: i.y, width: 0, height: 0 } : a,
          anchorPoint: i,
          containedElements: o ? [] : tt,
        });
        if (!s) return;
        ((N.current = !1), j({ mode: `create`, target: s, body: `` }));
        return;
      }
      if (x.current != null && x.current !== t.pointerId) return;
      let r = S.current;
      if (!r) return;
      if ((Tt(bn(t, y.current, H, _, W)), Tn(t, x), r === `text`)) {
        ((S.current = null), X.pointerUp());
        return;
      }
      if (r === `marquee`) {
        ((S.current = null),
          (w.current = null),
          (T.current = null),
          (oe.current = !1),
          e.endSelectionMarquee({ commit: n }));
        return;
      }
      S.current = null;
      let i = w.current,
        a =
          !!n &&
          !oe.current &&
          !!i &&
          _.textLayoutBlocks.some((e) => e.id === i);
      ((w.current = null),
        (T.current = null),
        (oe.current = !1),
        e.endElementInteraction({ commit: n }),
        (C.current = a ? i : null));
    },
    kt = (t) => {
      if (k && d) {
        t.preventDefault();
        return;
      }
      if (O && l) {
        t.preventDefault();
        return;
      }
      if (!o) return;
      let n = xn(t.clientX, t.clientY, y.current, H, _, W);
      n &&
        (e.endSelectionMarquee({ commit: !1 }),
        e.endElementInteraction({ commit: !1 }),
        X.selectWordAtPoint(n) && t.preventDefault());
    },
    At = (e) =>
      !e.metaKey && !e.ctrlKey
        ? !1
        : e.key === `0`
          ? (t.fitToViewport(1), e.preventDefault(), !0)
          : e.key === `=` || e.key === `+`
            ? (t.zoomTo(vt(_.zoom + 0.1, _.fitScale ?? 1), { settled: !0 }),
              e.preventDefault(),
              !0)
            : e.key === `-`
              ? (t.zoomTo(vt(_.zoom - 0.1, _.fitScale ?? 1), { settled: !0 }),
                e.preventDefault(),
                !0)
              : !1,
    jt = (t) => {
      if (
        !(
          t.target instanceof HTMLElement &&
          t.target.closest(`[data-testid='popcorn-annotation-editor']`)
        )
      ) {
        if (
          O &&
          m?.annotation?.onRequestLink &&
          !A &&
          !d &&
          !X.isActive() &&
          (t.metaKey || t.ctrlKey) &&
          !t.altKey &&
          !t.shiftKey &&
          t.key.toLowerCase() === `l`
        ) {
          if (!J) return;
          (m.annotation.onRequestLink({
            requestId: _e(`selection-link`),
            artifactKind: `presentation`,
            label: Xt(J),
            target: J,
          }),
            t.preventDefault());
          return;
        }
        if (t.key === `Escape` && Be.current) {
          (_t(), t.preventDefault());
          return;
        }
        if (t.key === `Escape` && d) {
          (f?.(!1), t.preventDefault());
          return;
        }
        if (
          !t.metaKey &&
          !t.ctrlKey &&
          !t.altKey &&
          !t.shiftKey &&
          _.selectedElementIds.length === 0 &&
          (t.key === `ArrowLeft` || t.key === `ArrowRight`)
        ) {
          let n = t.key === `ArrowLeft` ? -1 : 1,
            r = Math.max(0, Math.min(_.slideCount - 1, _.selectedSlideIdx + n));
          r !== _.selectedSlideIdx &&
            (e.setSelectedSlideIdx(r), t.preventDefault());
          return;
        }
        if (!o) {
          if (t.key === `Escape` && A) {
            (Q(), t.preventDefault());
            return;
          }
          if (t.key === `Escape` && l) {
            (u?.(!1), F(null), t.preventDefault());
            return;
          }
          At(t);
          return;
        }
        if (t.key === `Escape` && A) {
          (Q(), t.preventDefault());
          return;
        }
        if (t.key === `Escape` && l) {
          (u?.(!1), F(null), t.preventDefault());
          return;
        }
        if (l) return (At(t), void 0);
        if (X.isActive()) {
          t.key === `Escape` && (X.clear(), t.preventDefault());
          return;
        }
        if (t.key === `/` && !t.metaKey && !t.ctrlKey && !t.altKey) {
          let e = !!Ye;
          (De(e), e && t.preventDefault());
          return;
        }
        if (t.key === `Escape` && Ce) {
          (De(!1), t.preventDefault());
          return;
        }
        if (
          t.key === `Enter` &&
          _.selectedElementIds.length === 1 &&
          _.primarySelectedElementId
        ) {
          X.activateBlockEnd(_.primarySelectedElementId) && t.preventDefault();
          return;
        }
        if (t.key === `Backspace` || t.key === `Delete`) {
          e.deleteSelectedElement() && t.preventDefault();
          return;
        }
        if (
          !t.metaKey &&
          !t.ctrlKey &&
          !t.altKey &&
          !t.shiftKey &&
          _.selectedElementIds.length > 0
        ) {
          let n = yn(t.key);
          if (n && e.nudgeSelectedElements(n)) {
            t.preventDefault();
            return;
          }
        }
        if ((t.metaKey || t.ctrlKey) && t.key.toLowerCase() === `z`) {
          (t.shiftKey ? e.redo() : e.undo(), t.preventDefault());
          return;
        }
        if ((t.metaKey || t.ctrlKey) && t.key.toLowerCase() === `y`) {
          (e.redo(), t.preventDefault());
          return;
        }
        At(t);
      }
    },
    Mt = O && !l && !d && !A && !_.textEditState?.activeBlockId;
  return (0, R.jsx)(`div`, {
    ref: v,
    className: `relative flex h-full min-h-0 flex-col bg-token-bg-primary`,
    style: s === `codex` ? ze : void 0,
    children: (0, R.jsxs)(`div`, {
      ref: y,
      "data-testid": `popcorn-presentation-stage`,
      tabIndex: 0,
      onKeyDown: jt,
      className: `relative min-h-0 flex-1 touch-none overflow-hidden outline-none`,
      children: [
        (0, R.jsx)(`canvas`, {
          ref: ie,
          "data-testid": `popcorn-presentation-canvas`,
          className: i(`absolute inset-0 h-full w-full select-none`),
        }),
        (0, R.jsx)(`canvas`, {
          ref: ae,
          "data-testid": `popcorn-presentation-worker-overlay`,
          className: `pointer-events-none absolute inset-0 h-full w-full select-none`,
        }),
        (0, R.jsx)(`canvas`, {
          ref: b,
          "data-testid": `popcorn-presentation-overlay`,
          onPointerDown: Et,
          onPointerMove: Dt,
          onPointerLeave: (t) => {
            x.current ??
              (Tt(null),
              e.setHoveredElementId(null),
              (t.currentTarget.style.cursor = k && d ? `crosshair` : ``));
          },
          onPointerUp: (e) => Ot(e, !0),
          onPointerCancel: (e) => Ot(e, !1),
          onDoubleClick: kt,
          className: `absolute inset-0 h-full w-full touch-none`,
        }),
        h
          ? (0, R.jsx)(Ht, {
              threads: _.commentThreads ?? [],
              slideRect: K.slideRect,
              isEditing: o,
              onReply: (t, n) => {
                e.replyToCommentThread(t, n);
              },
              onResolve: (t) => {
                e.resolveCommentThread(t);
              },
              onReopen: (t) => {
                e.reopenCommentThread(t);
              },
              onDeleteThread: (t) => {
                e.deleteCommentThread(t);
              },
              onToggleReaction: (t, n, r) => {
                e.toggleCommentReaction(t, n, r);
              },
              onEditComment: (t, n, r) => {
                e.editThreadComment(t, n, r);
              },
              onDeleteComment: (t, n) => {
                e.deleteThreadComment(t, n);
              },
            })
          : null,
        ht.length > 0
          ? (0, R.jsx)(ye, {
              testId: `popcorn-presentation-drawing-overlay`,
              strokes: ht.flatMap((e) => e.strokes),
              projectPoint: $,
              clipBounds: Xe,
            })
          : null,
        Ve.length > 0
          ? (0, R.jsx)(ye, {
              testId: `popcorn-presentation-drawing-draft-overlay`,
              strokes: Ve,
              projectPoint: $,
              clipBounds: Xe,
            })
          : null,
        Le
          ? (0, R.jsx)(ye, {
              testId: `popcorn-presentation-drawing-active-overlay`,
              strokes: [Le],
              projectPoint: $,
              clipBounds: Xe,
            })
          : null,
        ut.map(({ annotation: e, bounds: t }) => {
          let n = fe(t);
          return (0, R.jsxs)(
            `div`,
            {
              children: [
                (0, R.jsx)(we, {
                  bounds: t,
                  testId: `popcorn-presentation-annotation-overlay-${e.annotationId}`,
                }),
                (0, R.jsx)(Ee, {
                  testId: `popcorn-presentation-annotation-marker-${e.annotationId}`,
                  markerNumber: e.annotationNumber,
                  position: n,
                  selected:
                    A?.mode === `edit` && A.annotationId === e.annotationId,
                  title: e.label,
                  onMouseEnter: () => {
                    M(e.annotationId);
                  },
                  onMouseLeave: () => {
                    M((t) => (t === e.annotationId ? null : t));
                  },
                  onFocus: () => {
                    M(e.annotationId);
                  },
                  onBlur: () => {
                    M((t) => (t === e.annotationId ? null : t));
                  },
                  onClick: () => {
                    St(e);
                  },
                }),
              ],
            },
            e.annotationId,
          );
        }),
        dt
          ? (0, R.jsx)(ve, {
              body: dt.annotation.body,
              markerPosition: fe(dt.bounds),
              containerElement: y.current,
              testId: `popcorn-presentation-annotation-preview`,
            })
          : null,
        it
          ? (0, R.jsx)(we, {
              bounds: it,
              testId: et
                ? `popcorn-presentation-annotation-region-preview`
                : `popcorn-presentation-annotation-highlight`,
              borderWidthPx: et ? 1 : 2,
            })
          : null,
        ft.map((e) => {
          let t = Qt(
            {
              type: `presentation-element-selection`,
              slideId: q,
              slideIndex: _.selectedSlideIdx,
              slideLabel: Je,
              elementIds: [e.elementId],
              primaryElementId: e.elementId,
              frame: e.frame,
            },
            K.slideRect,
          );
          return t
            ? (0, R.jsx)(
                we,
                {
                  bounds: t,
                  borderWidthPx: 0.5,
                  fillColor: `transparent`,
                  shadow: !1,
                  testId: `popcorn-presentation-annotation-region-contained-${e.elementId}`,
                },
                e.elementId,
              )
            : null;
        }),
        O && l && A?.mode === `create` && Qe
          ? (0, R.jsx)(Ee, {
              testId: `popcorn-presentation-annotation-draft-marker`,
              markerNumber: be(at, A.target),
              position: fe(Qe),
              draft: !0,
            })
          : null,
        Mt && Ye && J
          ? (0, R.jsx)(pe, {
              bounds: Ye,
              shortcutScopeElement: y.current,
              testId: `popcorn-presentation-ask-for-edit-button`,
              onClick: () => {
                ((N.current = !1), j({ mode: `create`, target: J, body: `` }));
              },
            })
          : null,
        Y
          ? (0, R.jsx)(Ae, {
              ref: Me,
              anchorBounds: Y,
              containerElement: y.current,
              portalContainerElement: g,
              mode: A?.mode ?? `create`,
              value: A?.body ?? ``,
              onChange: (e) => {
                ((N.current = !1), j((t) => t && { ...t, body: e }));
              },
              onCancel: Q,
              onDelete: wt,
              onSubmit: Ct,
            })
          : null,
        r.length > 0
          ? (0, R.jsx)(`div`, {
              className: `pointer-events-none absolute inset-0 z-30`,
              children: r.map((t) =>
                (0, R.jsx)(
                  `div`,
                  {
                    className: `pointer-events-none absolute inset-0`,
                    children: t.render({
                      controller: e,
                      snapshot: K,
                      selectionBounds: Ye,
                      panelControls: a,
                      editToolbarRequested: Ce,
                      dismissEditToolbar: () => {
                        De(!1);
                      },
                    }),
                  },
                  t.id,
                ),
              ),
            })
          : null,
      ],
    }),
  });
}
function _n(e, t) {
  let n = window.getComputedStyle(e),
    r =
      t === `codex`
        ? vn(n.getPropertyValue(`--color-background-surface`))
        : null;
  if (r) return r;
  let i = n.backgroundColor.trim();
  return i.length > 0 && i !== `transparent` && i !== `rgba(0, 0, 0, 0)`
    ? i
    : Ce(t);
}
function vn(e) {
  let t = e.trim();
  return t.length === 0 ||
    t === `transparent` ||
    t === `rgba(0, 0, 0, 0)` ||
    t.startsWith(`var(`)
    ? null
    : t;
}
function yn(e) {
  switch (e) {
    case `ArrowLeft`:
      return { dx: -fn, dy: 0 };
    case `ArrowRight`:
      return { dx: fn, dy: 0 };
    case `ArrowUp`:
      return { dx: 0, dy: -fn };
    case `ArrowDown`:
      return { dx: 0, dy: fn };
    default:
      return null;
  }
}
function bn(e, t, n, r, i) {
  return xn(e.clientX, e.clientY, t, n, r, i);
}
function xn(e, t, n, r, i, a) {
  let o = i.selectedSlideFrame;
  if (!n || !o) return null;
  let s = Ve(n, e, t);
  return Tt({
    camera: r,
    viewportX: s.x,
    viewportY: s.y,
    viewport: { width: n.clientWidth, height: n.clientHeight },
    frame: o,
    viewportInsets: a,
  });
}
function Sn(e, t, n, r, i) {
  return !r || e <= 0 || t <= 0
    ? null
    : $({
        viewport: { width: e, height: t },
        frame: r,
        camera: n,
        viewportInsets: i,
      }).slideRect;
}
function Cn(e) {
  if (e.selectedElementIds.length !== 1 || !e.primarySelectedElementId)
    return null;
  let t = e.inspector.selectedElement,
    n =
      t?.id === e.primarySelectedElementId
        ? t.frame
        : e.selectedSlideElementTargets.find(
            (t) => t.id === e.primarySelectedElementId,
          )?.frame;
  if (!n) return null;
  let r = e.slideRect;
  return r
    ? {
        left: r.left + n.left * r.scale,
        top: r.top + n.top * r.scale,
        width: n.width * r.scale,
        height: n.height * r.scale,
      }
    : { left: n.left, top: n.top, width: n.width, height: n.height };
}
function wn(e, t) {
  t.current = e.pointerId;
  try {
    e.currentTarget.setPointerCapture(e.pointerId);
  } catch {}
}
function Tn(e, t) {
  if (e.currentTarget.hasPointerCapture?.(e.pointerId))
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  t.current === e.pointerId && (t.current = null);
}
var En = 1e-4,
  Dn = class {
    #e;
    #t = !1;
    #n = null;
    #r = null;
    #i = null;
    #a = null;
    #o = !1;
    #s = !1;
    #c = { width: 0, height: 0 };
    #l = { left: 0, top: 0, right: 0, bottom: 0 };
    #u = {
      selectedSlideIdx: 0,
      selectedSlideFrame: null,
      zoom: 1,
      camera: null,
    };
    #d = null;
    #f = new Set();
    #p = {
      width: 0,
      height: 0,
      viewportInsets: { left: 0, top: 0, right: 0, bottom: 0 },
    };
    constructor() {
      this.#e = new De({
        enabled: !0,
        initialCamera: { x: 0, y: 0, k: 1 },
        minZoom: 0.01,
        maxZoom: 64,
        getViewportSize: () => ({
          width: this.#c.width,
          height: this.#c.height,
        }),
        getWorldSize: () => {
          let e = this.#v();
          return e
            ? $({
                viewport: { width: this.#c.width, height: this.#c.height },
                frame: e,
                camera: this.#e.getCamera(),
                viewportInsets: this.#l,
              }).worldSize
            : { width: this.#c.width, height: this.#c.height };
        },
        requestDraw: () => {},
        clampCamera: (e) => {
          let t = this.#v();
          return t
            ? Ct({
                camera: e,
                viewport: { width: this.#c.width, height: this.#c.height },
                frame: t,
                viewportInsets: this.#l,
              })
            : e;
        },
        onCameraSettled: (e) => {
          let t = this.#v();
          t &&
            this.#d?.({
              camera: e,
              zoom: wt({
                camera: e,
                viewport: { width: this.#c.width, height: this.#c.height },
                frame: t,
                viewportInsets: this.#l,
              }),
            });
        },
      });
    }
    start() {
      this.#t ||
        ((this.#t = !0),
        Ue().then(() => {
          this.#t && ((this.#o = !0), this.scheduleLayoutSync());
        }));
    }
    attachHost(e) {
      this.#n !== e &&
        (this.#h(),
        (this.#n = e),
        this.#e.attach(e),
        e &&
          (typeof ResizeObserver < `u` &&
            ((this.#r = new ResizeObserver((t) => {
              let n = t[0];
              this.scheduleLayoutSync(n ? z(e, n) : null);
            })),
            this.#r.observe(e)),
          window.addEventListener(`resize`, this.#m),
          this.scheduleLayoutSync()));
    }
    getCamera() {
      return this.#e.getCamera();
    }
    hasInitializedCamera() {
      return this.#s;
    }
    subscribeToCameraChanges(e) {
      return this.#e.subscribeToCameraChanges(e);
    }
    subscribeToLayoutChanges(e) {
      return (
        this.#f.add(e),
        () => {
          this.#f.delete(e);
        }
      );
    }
    getLayoutSnapshot() {
      return this.#p;
    }
    zoomTo(e, t) {
      let n = this.#v();
      if (!n) return;
      let r = bt({
        viewport: { width: this.#c.width, height: this.#c.height },
        frame: n,
        zoomFactor: e,
        viewportInsets: this.#l,
      });
      this.#e.zoomTo(r.k, t);
    }
    fitToViewport(e = 1) {
      let t = this.#v();
      t &&
        this.#e.setCamera(
          bt({
            viewport: { width: this.#c.width, height: this.#c.height },
            frame: t,
            zoomFactor: e,
            viewportInsets: this.#l,
          }),
          { settled: !0 },
        );
    }
    setOnCameraSettled(e) {
      this.#d = e;
    }
    setViewportInsets(e) {
      let t = this.#l;
      (t.left === e.left &&
        t.top === e.top &&
        t.right === e.right &&
        t.bottom === e.bottom) ||
        ((this.#l = { ...e }), this.#_(), this.scheduleLayoutSync());
    }
    setViewState(e) {
      let t = this.#u;
      ((this.#u = e), this.#y(t, e));
    }
    dispose() {
      ((this.#t = !1),
        this.#i != null && (cancelAnimationFrame(this.#i), (this.#i = null)),
        this.#h(),
        this.#e.destroy());
    }
    scheduleLayoutSync(e) {
      (e && (this.#a = e),
        this.#o &&
          (this.#i != null && cancelAnimationFrame(this.#i),
          (this.#i = requestAnimationFrame(() => {
            ((this.#i = null), this.#g());
          }))));
    }
    #m = () => {
      this.scheduleLayoutSync();
    };
    #h() {
      ((this.#r &&= (this.#r.disconnect(), null)),
        this.#n && window.removeEventListener(`resize`, this.#m),
        (this.#n = null),
        this.#e.attach(null));
    }
    #g() {
      let e = this.#n;
      if (!e) return;
      let t = this.#c,
        n = this.#a;
      ((this.#a = null),
        (this.#c = We(e, n)),
        this.#_(),
        this.#y(this.#u, this.#u, {
          viewportChanged:
            t.width !== this.#c.width || t.height !== this.#c.height,
          previousViewport: { width: t.width, height: t.height },
        }));
    }
    #_() {
      let e = this.#p,
        t = {
          width: this.#c.width,
          height: this.#c.height,
          viewportInsets: { ...this.#l },
        };
      if (
        !(
          e.width === t.width &&
          e.height === t.height &&
          e.viewportInsets.left === t.viewportInsets.left &&
          e.viewportInsets.top === t.viewportInsets.top &&
          e.viewportInsets.right === t.viewportInsets.right &&
          e.viewportInsets.bottom === t.viewportInsets.bottom
        )
      ) {
        this.#p = t;
        for (let e of this.#f) e();
      }
    }
    #v() {
      return this.#u.selectedSlideFrame;
    }
    #y(e, t, n) {
      let r = t.selectedSlideFrame;
      if (!r || this.#c.width <= 0 || this.#c.height <= 0) return;
      let i = n?.viewportChanged ?? !1,
        a = { width: this.#c.width, height: this.#c.height };
      if (i && this.#s) {
        this.#e.setCamera(
          Math.abs(t.zoom - 1) < En
            ? bt({
                viewport: a,
                frame: r,
                zoomFactor: t.zoom,
                viewportInsets: this.#l,
              })
            : xt({
                previousViewport: n?.previousViewport ?? a,
                nextViewport: a,
                frame: r,
                camera: this.#e.getCamera(),
                viewportInsets: this.#l,
              }),
        );
        return;
      }
      if (t.camera) {
        let n = bt({
            viewport: a,
            frame: r,
            zoomFactor: t.zoom,
            viewportInsets: this.#l,
          }).k,
          i = wt({
            camera: t.camera,
            viewport: a,
            frame: r,
            viewportInsets: this.#l,
          });
        (this.#e.setCamera(t.camera),
          (!this.#s || Math.abs(e.zoom - t.zoom) > 1e-4) &&
            Math.abs(i - t.zoom) > 1e-4 &&
            this.#e.zoomTo(n, { settled: !0 }),
          (this.#s = !0));
        return;
      }
      (!this.#s ||
        e.selectedSlideIdx !== t.selectedSlideIdx ||
        e.selectedSlideFrame?.width !== t.selectedSlideFrame?.width ||
        e.selectedSlideFrame?.height !== t.selectedSlideFrame?.height) &&
        (this.#e.setCamera(
          bt({
            viewport: a,
            frame: r,
            zoomFactor: t.zoom,
            viewportInsets: this.#l,
          }),
          { settled: !0 },
        ),
        (this.#s = !0));
    }
  },
  On = 104,
  kn = 220,
  An = 40,
  jn = 11,
  Mn = 1e-4,
  Nn = [0.25, 0.5, 1, 1.5, 2],
  Pn = 960;
function Fn(e, t) {
  return t === `floating`
    ? `w-full flex-row gap-2 @[749px]/presentation-editor:w-fit`
    : e === `left`
      ? `w-fit flex-row`
      : e === `bottom`
        ? `w-fit flex-col`
        : `w-fit flex-col @[749px]/presentation-editor:flex-row`;
}
function In(e, t) {
  return t === `floating` || e === `left`
    ? `block`
    : e === `bottom`
      ? `hidden`
      : `hidden @[749px]/presentation-editor:block`;
}
function Ln(e, t) {
  return t === `floating`
    ? `w-full flex-col items-start gap-2 @[749px]/presentation-editor:h-fit @[749px]/presentation-editor:min-h-full @[749px]/presentation-editor:w-full @[749px]/presentation-editor:items-center @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:justify-[safe_center]`
    : e === `left`
      ? `h-fit min-h-full w-full flex-col items-center gap-2.5 justify-[safe_center]`
      : e === `bottom`
        ? `w-fit gap-6`
        : `w-fit gap-6 @[749px]/presentation-editor:h-fit @[749px]/presentation-editor:min-h-full @[749px]/presentation-editor:w-full @[749px]/presentation-editor:flex-col @[749px]/presentation-editor:items-center @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:justify-[safe_center]`;
}
function Rn(e) {
  return e === `floating` ? `w-full` : `w-40`;
}
function zn(e) {
  return e === `floating`
    ? `shrink-0 pt-0.5 font-normal tabular-nums`
    : `pt-0.5 text-sm font-semibold`;
}
var Bn = { width: `94px` },
  Vn = {
    width: `18px`,
    minWidth: `18px`,
    fontSize: `11px`,
    lineHeight: `14px`,
  },
  Hn = {
    borderRadius: `8px`,
    boxShadow: `0px 4px 16px 0px rgba(0, 0, 0, 0.05)`,
  },
  Un = `var(--color-token-interactive-label-accent-default, rgba(2, 133, 255, 1))`,
  Wn = `var(--color-token-interactive-bg-accent-muted-context, rgba(2, 133, 255, 0.10))`,
  Gn = [
    `0px 2px 8px 0px rgba(2, 133, 255, 0.16)`,
    `0px 4px 16px 0px rgba(0, 0, 0, 0.05)`,
  ].join(`, `),
  Kn = `var(--color-token-border-default, var(--color-border, rgba(13, 13, 13, 0.10)))`,
  qn = { ...Hn, borderColor: Kn },
  Jn = {
    borderRadius: `16px`,
    border: `1px solid var(--color-token-border-default, rgba(13, 13, 13, 0.1))`,
    backgroundColor: `var(--color-token-bg-secondary, rgba(250, 250, 250, 0.9))`,
    backdropFilter: `blur(28px)`,
    WebkitBackdropFilter: `blur(28px)`,
  };
function Yn(e, t) {
  return e <= 0 ? 0 : e + An + (t === `codex` ? 0 : jn);
}
function Xn(e, t, n) {
  let r = [...e],
    [i] = r.splice(t, 1);
  return (i == null || r.splice(n, 0, i), r);
}
function Zn({
  controller: e,
  plugins: t = [],
  slideThumbnailPlacement: n = `responsive`,
  title: r = `presentation.pptx`,
  fileMenuContent: a,
  headerRightContent: o,
  zoomToFitLabel: s,
  renderHeaderZoomControl: l,
  onClose: u,
  renderSlideThumbnailOverlay: d,
  className: f,
  enablePageNavigation: ee,
  theme: h = `web`,
  isEditing: g = !0,
  hideSpeakerNotes: _ = !1,
  reviewTools: v,
  annotationsEnabled: y = !0,
  drawingAnnotationsEnabled: re = !0,
  commentThreadsEnabled: w = !0,
}) {
  let E = ne(
    e,
    (0, L.useCallback)(() => ft(), []),
  );
  if (!E) return null;
  let D = Pt(E),
    { panels: ce, stageOverlays: le } = (0, L.useMemo)(() => pt(t), [t]),
    ue = y && v?.annotation?.enabled !== !1,
    [de, fe] = (0, L.useState)(!1),
    pe = re && v?.drawing?.enabled !== !1,
    [me, he] = (0, L.useState)(!1),
    [_e, ve] = (0, L.useState)(0),
    ye = (0, L.useMemo)(() => new Dn(), []);
  ((0, L.useEffect)(() => {
    ue || fe(!1);
  }, [ue]),
    (0, L.useEffect)(() => {
      pe || he(!1);
    }, [pe]),
    (0, L.useEffect)(() => {
      !de || !ue || (E.clearElementSelection(), E.setHoveredElementId(null));
    }, [ue, de, E]),
    (0, L.useEffect)(() => {
      !me || !pe || (E.clearElementSelection(), E.setHoveredElementId(null));
    }, [E, pe, me]),
    (0, L.useEffect)(() => {
      if (!de) return;
      let e = (e) => {
        e.key === `Escape` &&
          ((e.target instanceof HTMLElement &&
            e.target.closest(`[data-testid='popcorn-annotation-editor']`)) ||
            fe(!1));
      };
      return (
        window.addEventListener(`keydown`, e, !0),
        () => {
          window.removeEventListener(`keydown`, e, !0);
        }
      );
    }, [de]),
    (0, L.useEffect)(() => {
      if (!me) return;
      let e = (e) => {
        e.key === `Escape` && he(!1);
      };
      return (
        window.addEventListener(`keydown`, e, !0),
        () => {
          window.removeEventListener(`keydown`, e, !0);
        }
      );
    }, [me]));
  let [be, xe] = (0, L.useState)(() =>
      Object.fromEntries(ce.map((e) => [e.id, e.defaultOpen ?? !1])),
    ),
    [Ce, we] = (0, L.useState)(On),
    [Te, Ee] = (0, L.useState)(() =>
      Object.fromEntries(D.slideIds.map((e) => [e, null])),
    ),
    [De, O] = (0, L.useState)(() =>
      Object.fromEntries(D.slideIds.map((e) => [e, null])),
    ),
    [k, A] = (0, L.useState)(() => D.slideIds),
    [Oe, j] = (0, L.useState)(null),
    [ke, Ae] = (0, L.useState)(!1),
    [je, Me] = (0, L.useState)(!1),
    [N, Ne] = (0, L.useState)(!1),
    [Pe, Fe] = (0, L.useState)(!1),
    [P, Ie] = (0, L.useState)(() =>
      typeof window < `u` && typeof window.matchMedia == `function`
        ? window.matchMedia(`(min-width: 900px)`).matches
        : !1,
    ),
    Le = (0, L.useRef)(null),
    Re = (0, L.useRef)(null),
    Be = (0, L.useRef)([]),
    Ve = (0, L.useRef)([]),
    I = (0, L.useRef)(null),
    He = (0, L.useRef)(new Set()),
    We = (0, L.useRef)(Te),
    z = (0, L.useRef)(De),
    Ge = (0, L.useRef)(k),
    Ke = x(b(S, { activationConstraint: { distance: 4 } })),
    B = (0, L.useMemo)(() => [oe], []),
    qe = n === `left`,
    V = n === `bottom`,
    H = h === `codex`,
    U = n === `responsive`,
    W = H && U,
    G = ee ?? H,
    K = je && (qe || U || W),
    q = !_ && P && Ce > 0,
    Je = (0, L.useMemo)(
      () => ({ left: K ? kn : 0, top: 0, right: 0, bottom: q ? Yn(Ce, h) : 0 }),
      [Ce, q, K, h],
    );
  ((0, L.useEffect)(() => {
    if (typeof window > `u` || typeof window.matchMedia != `function`) return;
    let e = window.matchMedia(`(min-width: 900px)`),
      t = e,
      n = () => {
        Ie((t) => (t === e.matches ? t : e.matches));
      };
    return (
      n(),
      typeof e.addEventListener == `function`
        ? e.addEventListener(`change`, n)
        : t.addListener?.(n),
      () => {
        typeof e.removeEventListener == `function`
          ? e.removeEventListener(`change`, n)
          : t.removeListener?.(n);
      }
    );
  }, []),
    Se(() => {
      let e = Le.current;
      if (!e) return;
      let t = null,
        n = (e) => {
          let t = e >= 749,
            n = U && e > 0 && e <= 688;
          (Me((e) => (e === t ? e : t)),
            Ne((e) => e || !0),
            Fe((e) => (e === n ? e : n)));
        };
      if (
        (n(e.clientWidth),
        typeof window < `u` &&
          typeof window.requestAnimationFrame == `function` &&
          (t = window.requestAnimationFrame(() => {
            n(e.clientWidth);
          })),
        typeof ResizeObserver > `u`)
      )
        return () => {
          t != null &&
            typeof window.cancelAnimationFrame == `function` &&
            window.cancelAnimationFrame(t);
        };
      let r = new ResizeObserver((t) => {
        let r = t[0];
        n(
          r?.contentRect.width && r.contentRect.width > 0
            ? r.contentRect.width
            : e.clientWidth,
        );
      });
      return (
        r.observe(e),
        () => {
          (t != null &&
            typeof window.cancelAnimationFrame == `function` &&
            window.cancelAnimationFrame(t),
            r.disconnect());
        }
      );
    }, [n, U]),
    (0, L.useEffect)(() => {
      xe((e) => {
        let t = {},
          n = !1;
        for (let r of ce) {
          let i = e[r.id] ?? r.defaultOpen ?? !1;
          ((t[r.id] = i), Object.is(e[r.id], i) || (n = !0));
        }
        for (let r of Object.keys(e))
          if (!(r in t)) {
            n = !0;
            break;
          }
        return n ? t : e;
      });
    }, [ce]));
  let Ye = (0, L.useMemo)(
    () => ({
      isPanelOpen: (e) => be[e] ?? !1,
      openPanel: (e) => {
        xe((t) => ({ ...t, [e]: !0 }));
      },
      closePanel: (e) => {
        xe((t) => ({ ...t, [e]: !1 }));
      },
      togglePanel: (e) => {
        xe((t) => ({ ...t, [e]: !(t[e] ?? !1) }));
      },
    }),
    [be],
  );
  ((0, L.useEffect)(() => {
    ((We.current = Te), (z.current = De));
  }, [De, Te]),
    (0, L.useEffect)(() => {
      Ge.current = k;
    }, [k]),
    (0, L.useEffect)(() => {
      (A(D.slideIds),
        Ee((e) => {
          let t = {};
          for (let n of D.slideIds) t[n] = e[n] ?? null;
          return t;
        }),
        O((e) => {
          let t = {};
          for (let n of D.slideIds) t[n] = e[n] ?? null;
          return t;
        }));
    }, [D.slideIds]));
  let J = (0, L.useMemo)(
      () =>
        Object.fromEntries(
          D.slideIds.map((e, t) => [e, D.slideLabels[t] ?? `Slide ${t + 1}`]),
        ),
      [D.slideIds, D.slideLabels],
    ),
    Xe = (0, L.useMemo)(
      () => Object.fromEntries(D.slideIds.map((e, t) => [e, t])),
      [D.slideIds],
    ),
    Ze = D.slideIds[D.selectedSlideIdx] ?? null,
    Y =
      D.fitScale ??
      (D.slideRect && D.zoom > 0 ? D.slideRect.scale / D.zoom : null),
    Qe = Y ? Q(Y) : null,
    $e = D.slideRect?.scale ?? Q(Y ? Y * D.zoom : D.zoom),
    et = Qe != null && Math.abs(D.zoom - 1) < Mn,
    tt = U && (!N || Pe),
    nt = !tt,
    rt = G && !tt,
    it = (e) => {
      let t = Q(e);
      if (Y && Y > 0) {
        E.setZoom(t / Y);
        return;
      }
      E.setZoom(t);
    },
    at =
      Qe != null && s != null
        ? {
            label: s,
            selected: et,
            onSelect: () => {
              ye.fitToViewport(1);
            },
          }
        : void 0,
    ot = nt
      ? (l?.({
          fitOption: at,
          onZoomPercentChange: (e) => {
            it(e / 100);
          },
          triggerTestId: `popcorn-presentation-zoom-select`,
          zoomPercent: Math.round($e * 100),
        }) ??
        (0, R.jsx)(m, {
          zoom: $e,
          onZoomChange: it,
          options: Nn,
          fitOption: at,
          testId: `popcorn-presentation-zoom-select`,
        }))
      : null,
    st = (0, L.useCallback)(
      (e) => {
        e >= 0 && E.setSelectedSlideIdx(e);
      },
      [E],
    ),
    ct = (0, L.useCallback)(
      (e) => {
        e >= 0 && E.deleteSlide(e);
      },
      [E],
    ),
    lt = (0, L.useCallback)((e, t, n) => {
      ((Be.current[e] = t), t && I.current && n && I.current.observe(t));
    }, []),
    ut = (0, L.useCallback)(() => {}, []),
    dt = (0, L.useCallback)(() => {
      E.addSlide();
    }, [E]),
    mt = (0, L.useCallback)(
      async (e, t) => {
        if (e < 0 || e >= E.getSnapshot().slideCount) return;
        let n = E.getSnapshot().slideIds[e];
        if (!n) return;
        let r = t?.cacheKind === `stacked-page`,
          i = r ? z.current[n] : We.current[n],
          a = `${r ? `stacked-page` : `rail`}:${n}`;
        if (
          !(
            (!t?.force && i != null) ||
            He.current.has(a) ||
            e < 0 ||
            e >= E.getSnapshot().slideCount
          )
        ) {
          He.current.add(a);
          try {
            await Ue();
            let t = await E.requestSlideThumbnail(
              e,
              r ? { cssMaxPx: Pn } : void 0,
            );
            (r ? O : Ee)((e) => (e[n] === t ? e : { ...e, [n]: t }));
          } finally {
            He.current.delete(a);
          }
        }
      },
      [E],
    );
  ((0, L.useEffect)(() => {
    let e = D.slideIds[D.selectedSlideIdx];
    (e &&
      (He.current.delete(`rail:${e}`), He.current.delete(`stacked-page:${e}`)),
      mt(D.selectedSlideIdx, { force: !0 }),
      e &&
        z.current[e] != null &&
        mt(D.selectedSlideIdx, { cacheKind: `stacked-page`, force: !0 }));
  }, [mt, D.presentationVersion, D.selectedSlideIdx, D.slideIds]),
    (0, L.useEffect)(() => {
      if (!(typeof IntersectionObserver > `u`)) {
        (I.current?.disconnect(),
          (I.current = new IntersectionObserver(
            (e) => {
              for (let t of e) {
                let e = t.target.getAttribute(`data-index`);
                if (!t.isIntersecting || e == null) continue;
                let n = Number(e);
                if (!Number.isFinite(n)) continue;
                let r =
                    t.target.getAttribute(`data-thumbnail-cache-kind`) ===
                    `stacked-page`
                      ? `stacked-page`
                      : `rail`,
                  i = r === `stacked-page`;
                (mt(n, { cacheKind: r, force: i }),
                  mt(n + 1, { cacheKind: r, force: i }),
                  I.current?.unobserve(t.target));
              }
            },
            { root: Le.current, rootMargin: `200px`, threshold: 0.05 },
          )));
        for (let e of [...Be.current, ...Ve.current]) e && I.current.observe(e);
        return () => {
          I.current?.disconnect();
        };
      }
    }, [mt, D.presentationVersion, D.slideCount]));
  let ht = (0, L.useCallback)(
      (e) => {
        if (
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement
        )
          return;
        let t = 0;
        switch (e.key) {
          case `ArrowUp`:
          case `ArrowLeft`:
            t = -1;
            break;
          case `ArrowDown`:
          case `ArrowRight`:
            t = 1;
            break;
          default:
            return;
        }
        let n = D.selectedSlideIdx,
          r = D.slideIds.length - 1,
          i = t < 0 ? Math.max(0, n - 1) : Math.min(r, n + 1);
        if (i === n) return;
        E.setSelectedSlideIdx(i);
        let a = e.currentTarget.classList.contains(
          `popcorn-presentation-stacked-pages`,
        )
          ? Ve.current[i]
          : Be.current[i];
        (a?.scrollIntoView?.({ block: `nearest`, inline: `nearest` }),
          a?.focus(),
          e.preventDefault());
      },
      [E, D.selectedSlideIdx, D.slideIds.length],
    ),
    X = (0, L.useCallback)((e) => {
      j(typeof e.active.id == `string` ? e.active.id : null);
    }, []),
    gt = (0, L.useCallback)(() => {
      (A(D.slideIds), j(null));
    }, [D.slideIds]),
    _t = (0, L.useCallback)(
      (e) => {
        j(null);
        let t = typeof e.active.id == `string` ? e.active.id : null,
          n = typeof e.over?.id == `string` ? e.over.id : null;
        if (!t || !n || t === n) return;
        let r = Ge.current,
          i = r.indexOf(t),
          a = r.indexOf(n);
        i < 0 || a < 0 || i === a || (A((e) => Xn(e, i, a)), E.moveSlide(i, a));
      },
      [E],
    ),
    Z = (0, L.useCallback)((e) => {
      let t = e.relatedTarget;
      (t instanceof Node && e.currentTarget.contains(t)) || Ae(!1);
    }, []),
    vt = (0, L.useCallback)((e) => {
      let t = e.relatedTarget;
      (t instanceof Node && e.currentTarget.parentElement?.contains(t)) ||
        Ae(!1);
    }, []),
    yt = (0, L.useCallback)((e, t, n) => {
      ((Ve.current[e] = n),
        n && I.current && z.current[t] == null && I.current.observe(n));
    }, []),
    $ = (0, L.useCallback)(
      (e, t = `default`, n) => {
        let r = Ln(e, t);
        return g
          ? (0, R.jsxs)(T, {
              sensors: Ke,
              collisionDetection: ae,
              modifiers: B,
              onDragStart: X,
              onDragCancel: gt,
              onDragEnd: _t,
              children: [
                (0, R.jsx)(se, {
                  items: k,
                  strategy: F,
                  children: (0, R.jsxs)(`div`, {
                    className: i(`flex min-w-full justify-[safe_center]`, r),
                    children: [
                      k.map((r, i) => {
                        let a = Te[r] ?? null;
                        return (0, R.jsx)(
                          rr,
                          {
                            slideId: r,
                            index: i,
                            snapshotIndex: Xe[r] ?? -1,
                            label: J[r] ?? `Slide ${i + 1}`,
                            thumbnail: a,
                            isSelected: r === Ze,
                            canDelete: k.length > 1,
                            onSelectSlide: st,
                            onDeleteSlide: ct,
                            renderSlideThumbnailOverlay: d,
                            slideThumbnailPlacement: e,
                            thumbnailSize: t,
                            slideButtonTestIdPrefix: n?.slideButtonTestIdPrefix,
                            onRegisterButtonRef: lt,
                          },
                          r,
                        );
                      }),
                      (0, R.jsx)(ir, {
                        onAddSlide: dt,
                        slideThumbnailPlacement: e,
                        thumbnailSize: t,
                      }),
                    ],
                  }),
                }),
                (0, R.jsx)(C, {
                  modifiers: B,
                  children: Oe
                    ? (0, R.jsx)(nr, {
                        slideId: Oe,
                        index: k.indexOf(Oe),
                        label: J[Oe] ?? `Slide`,
                        thumbnail: Te[Oe] ?? null,
                        isSelected: Oe === Ze,
                        onSelect: ut,
                        renderSlideThumbnailOverlay: d,
                        slideThumbnailPlacement: e,
                        thumbnailSize: t,
                        slideButtonTestIdPrefix: n?.slideButtonTestIdPrefix,
                        isDragging: !0,
                      })
                    : null,
                }),
              ],
            })
          : (0, R.jsx)(`div`, {
              className: i(`flex min-w-full justify-[safe_center]`, r),
              children: k.map((r, i) => {
                let a = Te[r] ?? null,
                  o = Xe[r] ?? -1;
                return (0, R.jsx)(
                  nr,
                  {
                    slideId: r,
                    index: i,
                    label: J[r] ?? `Slide ${i + 1}`,
                    thumbnail: a,
                    isSelected: r === Ze,
                    onSelect: () => st(o),
                    renderSlideThumbnailOverlay: d,
                    slideThumbnailPlacement: e,
                    thumbnailSize: t,
                    slideButtonTestIdPrefix: n?.slideButtonTestIdPrefix,
                    buttonRef: (e) => {
                      lt(i, e, a == null);
                    },
                  },
                  r,
                );
              }),
            });
      },
      [Oe, dt, ct, k, B, gt, _t, X, ut, g, lt, d, Ze, st, Ke, Xe, J, Te],
    );
  return (0, R.jsx)(`div`, {
    className: i(
      `bg-token-bg-primary text-token-text-primary flex h-full min-h-0 flex-col overflow-hidden`,
      f,
    ),
    children: (0, R.jsxs)(Dt, {
      controller: E,
      children: [
        (0, R.jsx)(p, {
          title: r,
          closeLabel: `Close presentation`,
          onClose: u,
          testId: `popcorn-presentation-header`,
          className: `border-b-0`,
          compactTitle: H,
          fileMenuContent: a,
          centeredContent: rt
            ? (0, R.jsx)(ie, {
                currentIndex: D.selectedSlideIdx,
                totalCount: D.slideCount,
                itemLabel: `slide`,
                onChangeIndex: (e) => E.setSelectedSlideIdx(e),
                testId: `popcorn-presentation-page-navigation`,
              })
            : null,
          actions: (0, R.jsxs)(`div`, {
            className: i(`flex items-center`, H ? `gap-1` : `gap-2`),
            children: [
              v?.annotation && ue
                ? (0, R.jsx)(M, {
                    active: de,
                    onClick: () => {
                      fe((e) => {
                        let t = !e;
                        return (t && he(!1), t);
                      });
                    },
                    testId: `popcorn-presentation-annotation-button`,
                  })
                : null,
              v?.drawing && pe
                ? (0, R.jsx)(ge, {
                    active: me,
                    onClick: () => {
                      he((e) => {
                        let t = !e;
                        return (t ? fe(!1) : ve((e) => e + 1), t);
                      });
                    },
                    testId: `popcorn-presentation-drawing-button`,
                  })
                : null,
              ot,
              o,
            ],
          }),
          icon: (0, R.jsx)(c, {
            kind: `presentation`,
            children: (0, R.jsx)(te, { className: `size-4` }),
          }),
        }),
        (0, R.jsx)(`div`, {
          className: `@container/presentation-editor min-h-0 flex-1`,
          children: (0, R.jsxs)(`div`, {
            ref: Le,
            className: i(
              `popcorn-presentation-editor-shell relative flex h-full min-h-0 overflow-hidden`,
              U && `popcorn-presentation-editor-shell--small-stacked`,
              V
                ? `flex-col`
                : qe || W
                  ? `flex-row`
                  : `flex-col @[749px]/presentation-editor:flex-row`,
            ),
            children: [
              U
                ? (0, R.jsx)(`div`, {
                    className: `popcorn-presentation-stacked-pages`,
                    "data-testid": `popcorn-presentation-stacked-pages`,
                    onKeyDown: ht,
                    children: k.map((e, t) =>
                      (0, R.jsx)(
                        Qn,
                        {
                          index: t,
                          label: J[e] ?? `Slide ${t + 1}`,
                          thumbnail: De[e] ?? null,
                          isSelected: e === Ze,
                          onSelect: () => st(Xe[e] ?? -1),
                          buttonRef: (n) => {
                            yt(t, e, n);
                          },
                        },
                        e,
                      ),
                    ),
                  })
                : null,
              tt
                ? null
                : (0, R.jsxs)(`div`, {
                    className: i(
                      `popcorn-presentation-main-panel relative isolate flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-token-bg-primary`,
                      V
                        ? `order-1`
                        : qe
                          ? `order-2`
                          : `order-1 @[749px]/presentation-editor:order-2`,
                      W && `popcorn-presentation-main-panel--codex-responsive`,
                    ),
                    children: [
                      (0, R.jsx)(`div`, {
                        className: `min-h-0 flex-1 overflow-hidden`,
                        children: (0, R.jsx)(gn, {
                          controller: E,
                          runtime: ye,
                          stageOverlays: g ? le : [],
                          panelControls: Ye,
                          isEditing: g,
                          theme: h,
                          viewportInsets: Je,
                          annotationMode: de,
                          onAnnotationModeChange: fe,
                          drawingMode: me,
                          onDrawingModeChange: he,
                          drawingCommitToken: _e,
                          reviewTools: v,
                          annotationsEnabled: y,
                          drawingAnnotationsEnabled: re,
                          commentThreadsEnabled: w,
                          annotationPortalContainerElement: Le.current,
                        }),
                      }),
                      _
                        ? null
                        : (0, R.jsx)($n, {
                            controller: E,
                            notesHeight: Ce,
                            setNotesHeight: we,
                            isEditing: g,
                            theme: h,
                            leftInset: K ? Je.left : 0,
                          }),
                      (0, R.jsx)(er, {
                        controller: E,
                        panels: ce,
                        panelControls: Ye,
                        panelOpenState: be,
                        isEditing: g,
                      }),
                    ],
                  }),
              V
                ? (0, R.jsx)(`div`, {
                    ref: Re,
                    className: `order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16`,
                    "data-testid": `popcorn-presentation-thumbnails`,
                    onKeyDown: ht,
                    children: $(`bottom`),
                  })
                : qe
                  ? (0, R.jsx)(`div`, {
                      ref: Re,
                      className: `popcorn-presentation-thumbnail-rail--overlay-desktop order-1 flex h-full min-h-0 shrink-0 flex-col gap-2.5 overflow-x-hidden overflow-y-auto px-3 pt-3 pb-12`,
                      style: { width: `220px` },
                      "data-testid": `popcorn-presentation-thumbnails`,
                      onKeyDown: ht,
                      children: $(`left`),
                    })
                  : W
                    ? (0, R.jsxs)(`div`, {
                        "data-testid": `popcorn-presentation-codex-thumbnail-rail`,
                        "data-open": ke ? `true` : `false`,
                        className: `popcorn-presentation-codex-thumbnail-rail`,
                        style: ze,
                        onFocusCapture: () => {
                          Ae(!0);
                        },
                        onBlurCapture: Z,
                        children: [
                          (0, R.jsx)(`button`, {
                            type: `button`,
                            "aria-label": `Show slide list`,
                            "aria-expanded": ke,
                            "data-testid": `popcorn-presentation-thumbnail-stack`,
                            className: `popcorn-presentation-codex-thumbnail-stack`,
                            onMouseEnter: () => {
                              Ae(!0);
                            },
                            onMouseLeave: vt,
                            onClick: () => {
                              Ae((e) => !e);
                            },
                            children: k.map((e) =>
                              (0, R.jsx)(
                                `span`,
                                {
                                  "data-testid": `popcorn-presentation-thumbnail-stack-bar`,
                                  className: `popcorn-presentation-codex-thumbnail-stack-bar`,
                                  style: {
                                    backgroundColor:
                                      e === Ze
                                        ? `var(--color-token-text-primary, rgba(13, 13, 13, 1))`
                                        : `var(--color-token-border-default, rgba(232, 232, 232, 1))`,
                                  },
                                },
                                e,
                              ),
                            ),
                          }),
                          (0, R.jsxs)(`div`, {
                            ref: Re,
                            className: `popcorn-presentation-codex-thumbnail-panel`,
                            "data-testid": `popcorn-presentation-thumbnails`,
                            onMouseEnter: () => {
                              Ae(!0);
                            },
                            onMouseLeave: vt,
                            onKeyDown: ht,
                            children: [
                              (0, R.jsx)(`div`, {
                                className: `popcorn-presentation-codex-thumbnail-panel-floating`,
                                children: $(`left`, `floating`, {
                                  slideButtonTestIdPrefix: `popcorn-presentation-floating-slide`,
                                }),
                              }),
                              (0, R.jsx)(`div`, {
                                className: `popcorn-presentation-codex-thumbnail-panel-full`,
                                children: $(`left`),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, R.jsx)(`div`, {
                        ref: Re,
                        className: `popcorn-presentation-thumbnail-rail--overlay-desktop order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16 @[749px]/presentation-editor:order-1 @[749px]/presentation-editor:h-full @[749px]/presentation-editor:w-[220px] @[749px]/presentation-editor:flex-col @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:overflow-x-hidden @[749px]/presentation-editor:overflow-y-auto @[749px]/presentation-editor:px-3 @[749px]/presentation-editor:pt-3 @[749px]/presentation-editor:pb-12`,
                        "data-testid": `popcorn-presentation-thumbnails`,
                        onKeyDown: ht,
                        children: $(`responsive`),
                      }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Qn({
  index: e,
  label: t,
  thumbnail: n,
  isSelected: r,
  onSelect: i,
  buttonRef: a,
}) {
  return (0, R.jsx)(`button`, {
    ref: a,
    type: `button`,
    "data-index": e,
    "data-active": r,
    "data-thumbnail-cache-kind": `stacked-page`,
    "data-testid": `popcorn-presentation-stacked-page-${e}`,
    "aria-label": t,
    className: `popcorn-presentation-stacked-page`,
    onClick: i,
    children: n
      ? (0, R.jsx)(`img`, {
          src: n,
          alt: ``,
          className: `popcorn-presentation-stacked-page-image`,
          draggable: !1,
        })
      : (0, R.jsx)(`div`, {
          className: `popcorn-presentation-stacked-page-placeholder`,
        }),
  });
}
function $n({
  controller: e,
  notesHeight: t,
  setNotesHeight: n,
  isEditing: r,
  theme: i,
  leftInset: a,
}) {
  let o = It(e);
  return (0, R.jsxs)(`div`, {
    className: `popcorn-presentation-notes-panel popcorn-presentation-desktop-only pointer-events-none absolute right-0 bottom-0 z-20 px-6 pt-4 pb-6`,
    style: i === `codex` ? { ...ze, left: `${a}px` } : { left: `${a}px` },
    "data-testid": `popcorn-presentation-notes-panel`,
    children: [
      i === `codex`
        ? null
        : (0, R.jsx)(`div`, {
            className: `pointer-events-auto pb-3`,
            children: (0, R.jsx)(Vt, { notesHeight: t, setNotesHeight: n }),
          }),
      (0, R.jsx)(`div`, {
        className: `w-full text-sm`,
        children:
          t > 0
            ? (0, R.jsx)(`textarea`, {
                "data-testid": `popcorn-presentation-notes`,
                placeholder: r ? `Add speaker notes...` : `No speaker notes`,
                className: `pointer-events-auto h-full w-full resize-none p-4 text-sm text-token-text-primary outline-none placeholder:text-token-text-secondary`,
                style: { ...Jn, height: `${t}px` },
                value: o.notesText,
                readOnly: !r,
                onChange: (t) => {
                  e.updateSpeakerNotes(t.target.value);
                },
              })
            : null,
      }),
    ],
  });
}
function er({
  controller: e,
  panels: t,
  panelControls: n,
  panelOpenState: r,
  isEditing: i,
}) {
  return !i || t.length === 0
    ? null
    : (0, R.jsx)(`div`, {
        className: `popcorn-presentation-desktop-only pointer-events-none absolute inset-y-4 right-4 z-20 max-w-full`,
        children: t.map((t) =>
          (0, R.jsx)(
            tr,
            {
              controller: e,
              panel: t,
              panelControls: n,
              isPanelOpen: r[t.id] ?? !1,
            },
            t.id,
          ),
        ),
      });
}
function tr({ controller: e, panel: t, panelControls: n, isPanelOpen: r }) {
  let a = Lt(e, t.snapshotScope ?? `editor`);
  return (t.isVisible?.({ controller: e, snapshot: a }) ?? !0)
    ? (0, R.jsx)(`div`, {
        "data-testid": r ? `popcorn-presentation-sidebar` : void 0,
        "aria-hidden": !r,
        inert: !r,
        className: i(
          `h-full min-h-0 max-w-full transition-transform duration-300 ease-out`,
          r
            ? `pointer-events-auto translate-x-0`
            : `pointer-events-none translate-x-full`,
        ),
        style: { width: `${t.widthPx ?? 336}px` },
        children: t.render({ controller: e, snapshot: a, panelControls: n }),
      })
    : null;
}
var nr = (0, L.memo)(function ({
    slideId: e,
    index: t,
    label: n,
    thumbnail: r,
    isSelected: a,
    onSelect: o,
    renderSlideThumbnailOverlay: s,
    slideThumbnailPlacement: c = `responsive`,
    thumbnailSize: l = `default`,
    slideButtonTestIdPrefix: u = `popcorn-presentation-slide`,
    buttonRef: d,
    dragAttributes: f,
    dragListeners: p,
    isDragging: m = !1,
  }) {
    let ee = Fn(c, l),
      te = In(c, l),
      h = Rn(l),
      g = zn(l),
      ne = l === `floating` ? Bn : void 0,
      _ = { ...(l === `floating` ? Vn : {}), ...(a ? { color: Un } : {}) };
    return (0, R.jsxs)(`button`, {
      ref: d,
      "data-index": t,
      type: `button`,
      "data-testid": `${u}-${t}`,
      "data-active": a,
      "data-dragging": m ? `true` : `false`,
      "aria-label": n,
      onClick: o,
      className: i(
        `flex shrink-0 cursor-interaction touch-none items-start gap-2.5 rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none`,
        ee,
      ),
      style: a ? { backgroundColor: Wn } : void 0,
      ...f,
      ...p,
      children: [
        (0, R.jsx)(`div`, {
          className: i(`text-token-text-primary`, g, te),
          style: _,
          children: t + 1,
        }),
        (0, R.jsxs)(`div`, {
          "data-testid": `${u}-${t}-surface`,
          className: i(
            `relative overflow-hidden border bg-white`,
            h,
            m ? `shadow-lg` : null,
          ),
          style: {
            ...Hn,
            ...ne,
            borderColor: a ? Un : Kn,
            borderWidth: a ? `2px` : void 0,
            boxShadow: a ? Gn : Hn.boxShadow,
          },
          children: [
            r
              ? (0, R.jsx)(`img`, {
                  src: r,
                  alt: ``,
                  className: i(`block`, h),
                  style: ne,
                  draggable: !1,
                })
              : (0, R.jsx)(`div`, {
                  className: i(h, `animate-pulse bg-gray-200`),
                  style: { ...ne, aspectRatio: 16 / 9 },
                }),
            s
              ? (0, R.jsx)(`div`, {
                  className: `pointer-events-none absolute right-1.5 bottom-1.5 flex items-center justify-end`,
                  children: s(e),
                })
              : null,
          ],
        }),
      ],
    });
  }),
  rr = (0, L.memo)(function ({
    slideId: e,
    index: t,
    snapshotIndex: n,
    label: r,
    thumbnail: i,
    isSelected: o,
    canDelete: s,
    onSelectSlide: c,
    onDeleteSlide: l,
    renderSlideThumbnailOverlay: u,
    slideThumbnailPlacement: d = `responsive`,
    thumbnailSize: f = `default`,
    slideButtonTestIdPrefix: p = `popcorn-presentation-slide`,
    onRegisterButtonRef: m,
  }) {
    let {
        attributes: ee,
        listeners: te,
        setNodeRef: g,
        transform: ne,
        transition: _,
        isDragging: v,
      } = Ne({ id: e }),
      y = (0, L.useCallback)(() => {
        c(n);
      }, [c, n]),
      re = (0, L.useCallback)(() => {
        l(n);
      }, [l, n]),
      ie = (0, L.useCallback)(
        (e) => {
          m(t, e, i == null);
        },
        [t, m, i],
      );
    return (0, R.jsx)(ce, {
      actions: (0, L.useMemo)(
        () => [
          {
            kind: `item`,
            id: `view`,
            label: r,
            icon: h,
            onSelect: y,
            testId: `popcorn-presentation-slide-view-${t}`,
          },
          { kind: `separator`, id: `slide-actions-separator` },
          {
            kind: `item`,
            id: `delete`,
            label: `Delete slide`,
            icon: a,
            color: `danger`,
            disabled: !s,
            onSelect: re,
            testId: `popcorn-presentation-slide-delete-${t}`,
          },
        ],
        [s, re, y, t, r],
      ),
      trigger: (0, R.jsx)(`div`, {
        ref: g,
        style: {
          transform: w.Translate.toString(ne),
          transition: v ? void 0 : _,
          opacity: v ? 0 : 1,
          position: `relative`,
          display: `inline-flex`,
        },
        children: (0, R.jsx)(nr, {
          slideId: e,
          index: t,
          label: r,
          thumbnail: i,
          isSelected: o,
          onSelect: y,
          renderSlideThumbnailOverlay: u,
          slideThumbnailPlacement: d,
          thumbnailSize: f,
          slideButtonTestIdPrefix: p,
          buttonRef: ie,
          dragAttributes: ee,
          dragListeners: te,
          isDragging: v,
        }),
      }),
    });
  }),
  ir = (0, L.memo)(function ({
    onAddSlide: e,
    slideThumbnailPlacement: t = `responsive`,
    thumbnailSize: n = `default`,
  }) {
    let r = Fn(t, n),
      a = In(t, n),
      o = Rn(n),
      c = zn(n),
      l = n === `floating` ? Bn : void 0,
      u = n === `floating` ? Vn : void 0;
    return (0, R.jsxs)(`button`, {
      type: `button`,
      onClick: e,
      "aria-label": `Add slide`,
      title: `Add slide`,
      "data-testid": `popcorn-presentation-add-slide`,
      className: i(
        `flex shrink-0 cursor-interaction items-start gap-2.5 rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none`,
        r,
      ),
      children: [
        (0, R.jsx)(`div`, {
          "aria-hidden": `true`,
          className: i(`text-token-text-primary invisible`, c, a),
          style: u,
          children: `00`,
        }),
        (0, R.jsx)(`div`, {
          className: i(
            `text-token-text-secondary relative flex items-center justify-center overflow-hidden border border-dashed bg-white`,
            o,
          ),
          style: { ...qn, ...l },
          children: (0, R.jsx)(`div`, {
            className: `flex w-full items-center justify-center transition-colors hover:bg-token-bg-tertiary`,
            style: { aspectRatio: 16 / 9 },
            children: (0, R.jsx)(s, { className: `size-4` }),
          }),
        }),
      ],
    });
  });
function ar({
  className: e,
  externalCrdtUpdates: t,
  headerRightContent: n,
  zoomToFitLabel: r,
  renderHeaderZoomControl: a,
  initialCrdtState: o,
  initialPresentationProto: s,
  initialSelectedSlideIdx: c,
  initialZoom: l,
  onCrdtUpdate: u,
  pendingImageGenerations: d = [],
  resolveImageHydrationAssets: f,
  title: p = `codex-popcorn-demo.pptx`,
  theme: m = `codex`,
  isEditing: ee = !1,
  hideSpeakerNotes: te = !1,
  reviewTools: h,
  annotationsEnabled: g = !1,
  drawingAnnotationsEnabled: _ = !1,
  artifactSearchEnabled: v = !1,
  commentThreadsEnabled: y = !1,
  workerFactory: re,
}) {
  let ie = N({ initialCrdtState: o, externalCrdtUpdates: t }),
    ae = (0, L.useRef)(s),
    b = ne(
      void 0,
      () =>
        new dt({
          initialCrdtState: ie.initialCrdtState,
          initialSelectedSlideIdx: c,
          initialZoom: l,
          presentationProto: s ?? or().toProto(),
          workerFactory: re,
        }),
    ),
    x = (0, L.useRef)(0),
    S = P({
      artifactLabel: `Presentation`,
      controller: b,
      externalCrdtUpdates: ie.externalCrdtUpdates,
      onCrdtUpdate: u,
    }),
    C = (0, L.useMemo)(() => cr(d), [d]),
    w = (0, L.useMemo)(() => lr(C), [C]);
  return (
    (0, L.useEffect)(() => {
      b &&
        ae.current !== s &&
        ((ae.current = s), b.replaceFromProto(s ?? or().toProto()));
    }, [b, s]),
    (0, L.useEffect)(() => {
      if (b && f)
        return b.subscribeImageHydrationRequests((e) => {
          let t = x.current + 1;
          ((x.current = t),
            f(e)
              .then((e) => {
                if (!(x.current !== t || e.length === 0))
                  return b.hydrateImageAssets(e);
              })
              .catch(() => {}));
        });
    }, [b, f]),
    b
      ? (0, R.jsxs)(`section`, {
          className: i(
            `no-drag relative h-full min-h-0 bg-token-bg-primary`,
            e,
          ),
          style: ke(m),
          "data-codex-popcorn-editor": !0,
          "data-testid": `popcorn-electron-presentation-panel`,
          children: [
            (0, R.jsx)(Zn, {
              className: `h-full min-h-0`,
              controller: b,
              headerRightContent:
                C.length > 0
                  ? (0, R.jsxs)(R.Fragment, {
                      children: [(0, R.jsx)(sr, { count: C.length }), n],
                    })
                  : n,
              renderHeaderZoomControl: a,
              zoomToFitLabel: r,
              renderSlideThumbnailOverlay: (e) => {
                let t = w[e] ?? 0;
                return t === 0
                  ? null
                  : (0, R.jsx)(`div`, {
                      "data-testid": `popcorn-pending-image-thumb-${e}`,
                      className: `absolute right-2 top-2 rounded-full bg-amber-100/95 px-2 py-0.5 text-[11px] font-semibold text-amber-900 shadow-sm`,
                      children: t,
                    });
              },
              slideThumbnailPlacement: `responsive`,
              title: p,
              theme: m,
              isEditing: ee,
              hideSpeakerNotes: te,
              reviewTools: h,
              annotationsEnabled: g,
              drawingAnnotationsEnabled: _,
              artifactSearchEnabled: v,
              commentThreadsEnabled: y,
            }),
            (0, R.jsx)(Ie, { artifactLabel: `Presentation`, restoreState: S }),
          ],
        })
      : null
  );
}
function or() {
  let e = r.create(),
    t = e.slides.add();
  t.background.fill = `#FFFFFF`;
  let n = t.shapes.add({
    geometry: `textbox`,
    position: { left: 140, top: 188, width: 1e3, height: 88 },
  });
  ((n.text = `Untitled presentation`),
    (n.text.fontSize = 30),
    (n.text.bold = !0),
    (n.text.alignment = `center`),
    (n.text.verticalAlignment = `middle`),
    (n.text.color = `#111111`));
  let i = t.shapes.add({
    geometry: `textbox`,
    position: { left: 220, top: 300, width: 840, height: 56 },
  });
  return (
    (i.text = `Import a presentation to replace this placeholder.`),
    (i.text.fontSize = 18),
    (i.text.alignment = `center`),
    (i.text.verticalAlignment = `middle`),
    (i.text.color = `#666666`),
    e
  );
}
function sr({ count: e }) {
  return (0, R.jsx)(`div`, {
    "data-testid": `popcorn-pending-image-summary`,
    className: `rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold text-amber-900`,
    children: e === 1 ? `1 image pending` : `${e} images pending`,
  });
}
function cr(e) {
  return e.flatMap((e) =>
    e.status === `failed` ||
    e.target.type !== `presentation` ||
    typeof e.target.aid != `string` ||
    !e.target.aid ||
    !e.slideId ||
    !e.elementId
      ? []
      : [
          {
            requestId: e.requestId,
            slideId: e.slideId,
            elementId: e.elementId,
          },
        ],
  );
}
function lr(e) {
  let t = {};
  for (let n of e) t[n.slideId] = (t[n.slideId] ?? 0) + 1;
  return t;
}
export { ar as PopcornElectronPresentationPanel };
//# sourceMappingURL=PopcornElectronPresentationPanel.js.map
