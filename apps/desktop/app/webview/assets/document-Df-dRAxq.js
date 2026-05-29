import {
  An as e,
  Bn as t,
  Fn as n,
  Gt as r,
  H as i,
  O as a,
  Vn as o,
  X as s,
  _n as c,
  bt as l,
  wt as u,
  xn as d,
} from "./presentation-e8MDavOP.js";
import { zt as f } from "./spreadsheet-D7wZHj1A.js";
var ee = `oaiproto.coworker.docx`,
  te = (function (e) {
    return (
      (e[(e.EMBEDDED_FONT_TYPE_UNSPECIFIED = 0)] =
        `EMBEDDED_FONT_TYPE_UNSPECIFIED`),
      (e[(e.EMBEDDED_FONT_TYPE_REGULAR = 1)] = `EMBEDDED_FONT_TYPE_REGULAR`),
      (e[(e.EMBEDDED_FONT_TYPE_BOLD = 2)] = `EMBEDDED_FONT_TYPE_BOLD`),
      (e[(e.EMBEDDED_FONT_TYPE_ITALIC = 3)] = `EMBEDDED_FONT_TYPE_ITALIC`),
      (e[(e.EMBEDDED_FONT_TYPE_BOLD_ITALIC = 4)] =
        `EMBEDDED_FONT_TYPE_BOLD_ITALIC`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ne = (function (e) {
    return (
      (e[(e.SECTION_BREAK_TYPE_UNSPECIFIED = 0)] =
        `SECTION_BREAK_TYPE_UNSPECIFIED`),
      (e[(e.SECTION_BREAK_TYPE_CONTINUOUS = 1)] =
        `SECTION_BREAK_TYPE_CONTINUOUS`),
      (e[(e.SECTION_BREAK_TYPE_NEXT_PAGE = 2)] =
        `SECTION_BREAK_TYPE_NEXT_PAGE`),
      (e[(e.SECTION_BREAK_TYPE_EVEN_PAGE = 3)] =
        `SECTION_BREAK_TYPE_EVEN_PAGE`),
      (e[(e.SECTION_BREAK_TYPE_ODD_PAGE = 4)] = `SECTION_BREAK_TYPE_ODD_PAGE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  re = (function (e) {
    return (
      (e[(e.ARTIFACT_TYPE_UNSPECIFIED = 0)] = `ARTIFACT_TYPE_UNSPECIFIED`),
      (e[(e.ARTIFACT_TYPE_DOCUMENT = 1)] = `ARTIFACT_TYPE_DOCUMENT`),
      (e[(e.ARTIFACT_TYPE_PRESENTATION = 2)] = `ARTIFACT_TYPE_PRESENTATION`),
      (e[(e.ARTIFACT_TYPE_WORKBOOK = 3)] = `ARTIFACT_TYPE_WORKBOOK`),
      (e[(e.ARTIFACT_TYPE_PLAYGROUND = 4)] = `ARTIFACT_TYPE_PLAYGROUND`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({});
function p() {
  return {
    id: void 0,
    charts: [],
    name: ``,
    widthEmu: 0,
    heightEmu: 0,
    elements: [],
    images: [],
    footnotes: [],
    comments: [],
    commentReferences: [],
    textStyles: [],
    reviewMarks: [],
    sections: [],
    numberingDefinitions: [],
    paragraphNumberings: [],
    tableStyleDefinitions: [],
    endnotes: [],
    settings: void 0,
    theme: void 0,
    fonts: [],
  };
}
var m = {
  encode(t, i = new o()) {
    t.id !== void 0 && i.uint32(50).string(t.id);
    for (let e of t.charts) r.encode(e, i.uint32(10).fork()).join();
    (t.name !== `` && i.uint32(18).string(t.name),
      t.widthEmu !== 0 && i.uint32(24).int64(t.widthEmu),
      t.heightEmu !== 0 && i.uint32(32).int64(t.heightEmu));
    for (let e of t.elements) a.encode(e, i.uint32(42).fork()).join();
    for (let e of t.images) d.encode(e, i.uint32(58).fork()).join();
    for (let e of t.footnotes) g.encode(e, i.uint32(66).fork()).join();
    for (let e of t.comments) y.encode(e, i.uint32(74).fork()).join();
    for (let e of t.commentReferences) x.encode(e, i.uint32(82).fork()).join();
    for (let e of t.textStyles) n.encode(e, i.uint32(90).fork()).join();
    for (let n of t.reviewMarks) e.encode(n, i.uint32(98).fork()).join();
    for (let e of t.sections) q.encode(e, i.uint32(106).fork()).join();
    for (let e of t.numberingDefinitions)
      U.encode(e, i.uint32(114).fork()).join();
    for (let e of t.paragraphNumberings)
      G.encode(e, i.uint32(122).fork()).join();
    for (let e of t.tableStyleDefinitions)
      l.encode(e, i.uint32(130).fork()).join();
    for (let e of t.endnotes) _.encode(e, i.uint32(138).fork()).join();
    (t.settings !== void 0 && T.encode(t.settings, i.uint32(146).fork()).join(),
      t.theme !== void 0 && u.encode(t.theme, i.uint32(154).fork()).join());
    for (let e of t.fonts) k.encode(e, i.uint32(162).fork()).join();
    return i;
  },
  decode(i, o) {
    let s = i instanceof t ? i : new t(i),
      c = o === void 0 ? s.len : s.pos + o,
      f = p();
    for (; s.pos < c; ) {
      let t = s.uint32();
      switch (t >>> 3) {
        case 6:
          if (t !== 50) break;
          f.id = s.string();
          continue;
        case 1:
          if (t !== 10) break;
          f.charts.push(r.decode(s, s.uint32()));
          continue;
        case 2:
          if (t !== 18) break;
          f.name = s.string();
          continue;
        case 3:
          if (t !== 24) break;
          f.widthEmu = $(s.int64());
          continue;
        case 4:
          if (t !== 32) break;
          f.heightEmu = $(s.int64());
          continue;
        case 5:
          if (t !== 42) break;
          f.elements.push(a.decode(s, s.uint32()));
          continue;
        case 7:
          if (t !== 58) break;
          f.images.push(d.decode(s, s.uint32()));
          continue;
        case 8:
          if (t !== 66) break;
          f.footnotes.push(g.decode(s, s.uint32()));
          continue;
        case 9:
          if (t !== 74) break;
          f.comments.push(y.decode(s, s.uint32()));
          continue;
        case 10:
          if (t !== 82) break;
          f.commentReferences.push(x.decode(s, s.uint32()));
          continue;
        case 11:
          if (t !== 90) break;
          f.textStyles.push(n.decode(s, s.uint32()));
          continue;
        case 12:
          if (t !== 98) break;
          f.reviewMarks.push(e.decode(s, s.uint32()));
          continue;
        case 13:
          if (t !== 106) break;
          f.sections.push(q.decode(s, s.uint32()));
          continue;
        case 14:
          if (t !== 114) break;
          f.numberingDefinitions.push(U.decode(s, s.uint32()));
          continue;
        case 15:
          if (t !== 122) break;
          f.paragraphNumberings.push(G.decode(s, s.uint32()));
          continue;
        case 16:
          if (t !== 130) break;
          f.tableStyleDefinitions.push(l.decode(s, s.uint32()));
          continue;
        case 17:
          if (t !== 138) break;
          f.endnotes.push(_.decode(s, s.uint32()));
          continue;
        case 18:
          if (t !== 146) break;
          f.settings = T.decode(s, s.uint32());
          continue;
        case 19:
          if (t !== 154) break;
          f.theme = u.decode(s, s.uint32());
          continue;
        case 20:
          if (t !== 162) break;
          f.fonts.push(k.decode(s, s.uint32()));
          continue;
      }
      if ((t & 7) == 4 || t === 0) break;
      s.skip(t & 7);
    }
    return f;
  },
  create(e) {
    return m.fromPartial(e ?? {});
  },
  fromPartial(t) {
    let i = p();
    return (
      (i.id = t.id ?? void 0),
      (i.charts = t.charts?.map((e) => r.fromPartial(e)) || []),
      (i.name = t.name ?? ``),
      (i.widthEmu = t.widthEmu ?? 0),
      (i.heightEmu = t.heightEmu ?? 0),
      (i.elements = t.elements?.map((e) => a.fromPartial(e)) || []),
      (i.images = t.images?.map((e) => d.fromPartial(e)) || []),
      (i.footnotes = t.footnotes?.map((e) => g.fromPartial(e)) || []),
      (i.comments = t.comments?.map((e) => y.fromPartial(e)) || []),
      (i.commentReferences =
        t.commentReferences?.map((e) => x.fromPartial(e)) || []),
      (i.textStyles = t.textStyles?.map((e) => n.fromPartial(e)) || []),
      (i.reviewMarks = t.reviewMarks?.map((t) => e.fromPartial(t)) || []),
      (i.sections = t.sections?.map((e) => q.fromPartial(e)) || []),
      (i.numberingDefinitions =
        t.numberingDefinitions?.map((e) => U.fromPartial(e)) || []),
      (i.paragraphNumberings =
        t.paragraphNumberings?.map((e) => G.fromPartial(e)) || []),
      (i.tableStyleDefinitions =
        t.tableStyleDefinitions?.map((e) => l.fromPartial(e)) || []),
      (i.endnotes = t.endnotes?.map((e) => _.fromPartial(e)) || []),
      (i.settings =
        t.settings !== void 0 && t.settings !== null
          ? T.fromPartial(t.settings)
          : void 0),
      (i.theme =
        t.theme !== void 0 && t.theme !== null
          ? u.fromPartial(t.theme)
          : void 0),
      (i.fonts = t.fonts?.map((e) => k.fromPartial(e)) || []),
      i
    );
  },
};
function h() {
  return { id: ``, paragraphs: [], referenceRunIds: [] };
}
var g = {
  encode(e, t = new o()) {
    e.id !== `` && t.uint32(10).string(e.id);
    for (let n of e.paragraphs) i.encode(n, t.uint32(18).fork()).join();
    for (let n of e.referenceRunIds) t.uint32(26).string(n);
    return t;
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      a = n === void 0 ? r.len : r.pos + n,
      o = h();
    for (; r.pos < a; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          o.id = r.string();
          continue;
        case 2:
          if (e !== 18) break;
          o.paragraphs.push(i.decode(r, r.uint32()));
          continue;
        case 3:
          if (e !== 26) break;
          o.referenceRunIds.push(r.string());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return o;
  },
  create(e) {
    return g.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = h();
    return (
      (t.id = e.id ?? ``),
      (t.paragraphs = e.paragraphs?.map((e) => i.fromPartial(e)) || []),
      (t.referenceRunIds = e.referenceRunIds?.map((e) => e) || []),
      t
    );
  },
};
function ie() {
  return { id: ``, paragraphs: [], referenceRunIds: [] };
}
var _ = {
  encode(e, t = new o()) {
    e.id !== `` && t.uint32(10).string(e.id);
    for (let n of e.paragraphs) i.encode(n, t.uint32(18).fork()).join();
    for (let n of e.referenceRunIds) t.uint32(26).string(n);
    return t;
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      a = n === void 0 ? r.len : r.pos + n,
      o = ie();
    for (; r.pos < a; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          o.id = r.string();
          continue;
        case 2:
          if (e !== 18) break;
          o.paragraphs.push(i.decode(r, r.uint32()));
          continue;
        case 3:
          if (e !== 26) break;
          o.referenceRunIds.push(r.string());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return o;
  },
  create(e) {
    return _.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ie();
    return (
      (t.id = e.id ?? ``),
      (t.paragraphs = e.paragraphs?.map((e) => i.fromPartial(e)) || []),
      (t.referenceRunIds = e.referenceRunIds?.map((e) => e) || []),
      t
    );
  },
};
function v() {
  return { id: ``, author: ``, initials: ``, createdAt: ``, paragraphs: [] };
}
var y = {
  encode(e, t = new o()) {
    (e.id !== `` && t.uint32(10).string(e.id),
      e.author !== `` && t.uint32(18).string(e.author),
      e.initials !== `` && t.uint32(26).string(e.initials),
      e.createdAt !== `` && t.uint32(34).string(e.createdAt));
    for (let n of e.paragraphs) i.encode(n, t.uint32(42).fork()).join();
    return t;
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      a = n === void 0 ? r.len : r.pos + n,
      o = v();
    for (; r.pos < a; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          o.id = r.string();
          continue;
        case 2:
          if (e !== 18) break;
          o.author = r.string();
          continue;
        case 3:
          if (e !== 26) break;
          o.initials = r.string();
          continue;
        case 4:
          if (e !== 34) break;
          o.createdAt = r.string();
          continue;
        case 5:
          if (e !== 42) break;
          o.paragraphs.push(i.decode(r, r.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return o;
  },
  create(e) {
    return y.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = v();
    return (
      (t.id = e.id ?? ``),
      (t.author = e.author ?? ``),
      (t.initials = e.initials ?? ``),
      (t.createdAt = e.createdAt ?? ``),
      (t.paragraphs = e.paragraphs?.map((e) => i.fromPartial(e)) || []),
      t
    );
  },
};
function b() {
  return { commentId: ``, runIds: [] };
}
var x = {
  encode(e, t = new o()) {
    e.commentId !== `` && t.uint32(10).string(e.commentId);
    for (let n of e.runIds) t.uint32(18).string(n);
    return t;
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = b();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          a.commentId = r.string();
          continue;
        case 2:
          if (e !== 18) break;
          a.runIds.push(r.string());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return x.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = b();
    return (
      (t.commentId = e.commentId ?? ``),
      (t.runIds = e.runIds?.map((e) => e) || []),
      t
    );
  },
};
function S() {
  return {
    numberingFormat: void 0,
    defaultNoteIds: [],
    numberingStart: void 0,
    numberingRestart: void 0,
    position: void 0,
  };
}
var C = {
  encode(e, t = new o()) {
    e.numberingFormat !== void 0 && t.uint32(10).string(e.numberingFormat);
    for (let n of e.defaultNoteIds) t.uint32(18).string(n);
    return (
      e.numberingStart !== void 0 && t.uint32(24).int32(e.numberingStart),
      e.numberingRestart !== void 0 && t.uint32(34).string(e.numberingRestart),
      e.position !== void 0 && t.uint32(42).string(e.position),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = S();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          a.numberingFormat = r.string();
          continue;
        case 2:
          if (e !== 18) break;
          a.defaultNoteIds.push(r.string());
          continue;
        case 3:
          if (e !== 24) break;
          a.numberingStart = r.int32();
          continue;
        case 4:
          if (e !== 34) break;
          a.numberingRestart = r.string();
          continue;
        case 5:
          if (e !== 42) break;
          a.position = r.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return C.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = S();
    return (
      (t.numberingFormat = e.numberingFormat ?? void 0),
      (t.defaultNoteIds = e.defaultNoteIds?.map((e) => e) || []),
      (t.numberingStart = e.numberingStart ?? void 0),
      (t.numberingRestart = e.numberingRestart ?? void 0),
      (t.position = e.position ?? void 0),
      t
    );
  },
};
function w() {
  return {
    defaultTabStop: void 0,
    autoHyphenation: void 0,
    mirrorMargins: void 0,
    footnoteProperties: void 0,
    endnoteProperties: void 0,
    displayBackgroundShape: void 0,
    backgroundFill: void 0,
  };
}
var T = {
  encode(e, t = new o()) {
    return (
      e.defaultTabStop !== void 0 && t.uint32(8).int32(e.defaultTabStop),
      e.autoHyphenation !== void 0 && t.uint32(16).bool(e.autoHyphenation),
      e.mirrorMargins !== void 0 && t.uint32(24).bool(e.mirrorMargins),
      e.footnoteProperties !== void 0 &&
        C.encode(e.footnoteProperties, t.uint32(34).fork()).join(),
      e.endnoteProperties !== void 0 &&
        C.encode(e.endnoteProperties, t.uint32(42).fork()).join(),
      e.displayBackgroundShape !== void 0 &&
        t.uint32(48).bool(e.displayBackgroundShape),
      e.backgroundFill !== void 0 &&
        c.encode(e.backgroundFill, t.uint32(58).fork()).join(),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = w();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          a.defaultTabStop = r.int32();
          continue;
        case 2:
          if (e !== 16) break;
          a.autoHyphenation = r.bool();
          continue;
        case 3:
          if (e !== 24) break;
          a.mirrorMargins = r.bool();
          continue;
        case 4:
          if (e !== 34) break;
          a.footnoteProperties = C.decode(r, r.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          a.endnoteProperties = C.decode(r, r.uint32());
          continue;
        case 6:
          if (e !== 48) break;
          a.displayBackgroundShape = r.bool();
          continue;
        case 7:
          if (e !== 58) break;
          a.backgroundFill = c.decode(r, r.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return T.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = w();
    return (
      (t.defaultTabStop = e.defaultTabStop ?? void 0),
      (t.autoHyphenation = e.autoHyphenation ?? void 0),
      (t.mirrorMargins = e.mirrorMargins ?? void 0),
      (t.footnoteProperties =
        e.footnoteProperties !== void 0 && e.footnoteProperties !== null
          ? C.fromPartial(e.footnoteProperties)
          : void 0),
      (t.endnoteProperties =
        e.endnoteProperties !== void 0 && e.endnoteProperties !== null
          ? C.fromPartial(e.endnoteProperties)
          : void 0),
      (t.displayBackgroundShape = e.displayBackgroundShape ?? void 0),
      (t.backgroundFill =
        e.backgroundFill !== void 0 && e.backgroundFill !== null
          ? c.fromPartial(e.backgroundFill)
          : void 0),
      t
    );
  },
};
function E() {
  return {
    relationshipId: ``,
    key: void 0,
    type: 0,
    contentType: ``,
    data: new Uint8Array(),
    subsetted: void 0,
  };
}
var D = {
  encode(e, t = new o()) {
    return (
      e.relationshipId !== `` && t.uint32(10).string(e.relationshipId),
      e.key !== void 0 && t.uint32(18).string(e.key),
      e.type !== 0 && t.uint32(24).int32(e.type),
      e.contentType !== `` && t.uint32(34).string(e.contentType),
      e.data.length !== 0 && t.uint32(42).bytes(e.data),
      e.subsetted !== void 0 && t.uint32(48).bool(e.subsetted),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = E();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          a.relationshipId = r.string();
          continue;
        case 2:
          if (e !== 18) break;
          a.key = r.string();
          continue;
        case 3:
          if (e !== 24) break;
          a.type = r.int32();
          continue;
        case 4:
          if (e !== 34) break;
          a.contentType = r.string();
          continue;
        case 5:
          if (e !== 42) break;
          a.data = r.bytes();
          continue;
        case 6:
          if (e !== 48) break;
          a.subsetted = r.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return D.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = E();
    return (
      (t.relationshipId = e.relationshipId ?? ``),
      (t.key = e.key ?? void 0),
      (t.type = e.type ?? 0),
      (t.contentType = e.contentType ?? ``),
      (t.data = e.data ?? new Uint8Array()),
      (t.subsetted = e.subsetted ?? void 0),
      t
    );
  },
};
function O() {
  return { name: ``, altName: void 0, family: void 0, embeddedFonts: [] };
}
var k = {
  encode(e, t = new o()) {
    (e.name !== `` && t.uint32(10).string(e.name),
      e.altName !== void 0 && t.uint32(18).string(e.altName),
      e.family !== void 0 && t.uint32(26).string(e.family));
    for (let n of e.embeddedFonts) D.encode(n, t.uint32(34).fork()).join();
    return t;
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = O();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          a.name = r.string();
          continue;
        case 2:
          if (e !== 18) break;
          a.altName = r.string();
          continue;
        case 3:
          if (e !== 26) break;
          a.family = r.string();
          continue;
        case 4:
          if (e !== 34) break;
          a.embeddedFonts.push(D.decode(r, r.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return k.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = O();
    return (
      (t.name = e.name ?? ``),
      (t.altName = e.altName ?? void 0),
      (t.family = e.family ?? void 0),
      (t.embeddedFonts = e.embeddedFonts?.map((e) => D.fromPartial(e)) || []),
      t
    );
  },
};
function A() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    header: 0,
    footer: 0,
    gutter: 0,
  };
}
var j = {
  encode(e, t = new o()) {
    return (
      e.top !== 0 && t.uint32(8).int32(e.top),
      e.bottom !== 0 && t.uint32(16).int32(e.bottom),
      e.left !== 0 && t.uint32(24).int32(e.left),
      e.right !== 0 && t.uint32(32).int32(e.right),
      e.header !== 0 && t.uint32(40).int32(e.header),
      e.footer !== 0 && t.uint32(48).int32(e.footer),
      e.gutter !== 0 && t.uint32(56).int32(e.gutter),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = A();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          a.top = r.int32();
          continue;
        case 2:
          if (e !== 16) break;
          a.bottom = r.int32();
          continue;
        case 3:
          if (e !== 24) break;
          a.left = r.int32();
          continue;
        case 4:
          if (e !== 32) break;
          a.right = r.int32();
          continue;
        case 5:
          if (e !== 40) break;
          a.header = r.int32();
          continue;
        case 6:
          if (e !== 48) break;
          a.footer = r.int32();
          continue;
        case 7:
          if (e !== 56) break;
          a.gutter = r.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return j.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = A();
    return (
      (t.top = e.top ?? 0),
      (t.bottom = e.bottom ?? 0),
      (t.left = e.left ?? 0),
      (t.right = e.right ?? 0),
      (t.header = e.header ?? 0),
      (t.footer = e.footer ?? 0),
      (t.gutter = e.gutter ?? 0),
      t
    );
  },
};
function M() {
  return { widthEmu: 0, heightEmu: 0, pageMargin: void 0 };
}
var N = {
  encode(e, t = new o()) {
    return (
      e.widthEmu !== 0 && t.uint32(8).int64(e.widthEmu),
      e.heightEmu !== 0 && t.uint32(16).int64(e.heightEmu),
      e.pageMargin !== void 0 &&
        j.encode(e.pageMargin, t.uint32(26).fork()).join(),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = M();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          a.widthEmu = $(r.int64());
          continue;
        case 2:
          if (e !== 16) break;
          a.heightEmu = $(r.int64());
          continue;
        case 3:
          if (e !== 26) break;
          a.pageMargin = j.decode(r, r.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return N.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = M();
    return (
      (t.widthEmu = e.widthEmu ?? 0),
      (t.heightEmu = e.heightEmu ?? 0),
      (t.pageMargin =
        e.pageMargin !== void 0 && e.pageMargin !== null
          ? j.fromPartial(e.pageMargin)
          : void 0),
      t
    );
  },
};
function P() {
  return { count: 0, space: 0, widths: [], hasSeparatorLine: !1 };
}
var F = {
  encode(e, t = new o()) {
    (e.count !== 0 && t.uint32(8).int32(e.count),
      e.space !== 0 && t.uint32(16).int32(e.space),
      t.uint32(26).fork());
    for (let n of e.widths) t.int32(n);
    return (
      t.join(),
      e.hasSeparatorLine !== !1 && t.uint32(32).bool(e.hasSeparatorLine),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = P();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          a.count = r.int32();
          continue;
        case 2:
          if (e !== 16) break;
          a.space = r.int32();
          continue;
        case 3:
          if (e === 24) {
            a.widths.push(r.int32());
            continue;
          }
          if (e === 26) {
            let e = r.uint32() + r.pos;
            for (; r.pos < e; ) a.widths.push(r.int32());
            continue;
          }
          break;
        case 4:
          if (e !== 32) break;
          a.hasSeparatorLine = r.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return F.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = P();
    return (
      (t.count = e.count ?? 0),
      (t.space = e.space ?? 0),
      (t.widths = e.widths?.map((e) => e) || []),
      (t.hasSeparatorLine = e.hasSeparatorLine ?? !1),
      t
    );
  },
};
function I() {
  return { type: void 0, linePitch: void 0, charSpace: void 0 };
}
var L = {
  encode(e, t = new o()) {
    return (
      e.type !== void 0 && t.uint32(10).string(e.type),
      e.linePitch !== void 0 && t.uint32(16).int32(e.linePitch),
      e.charSpace !== void 0 && t.uint32(24).int32(e.charSpace),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = I();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          a.type = r.string();
          continue;
        case 2:
          if (e !== 16) break;
          a.linePitch = r.int32();
          continue;
        case 3:
          if (e !== 24) break;
          a.charSpace = r.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return L.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = I();
    return (
      (t.type = e.type ?? void 0),
      (t.linePitch = e.linePitch ?? void 0),
      (t.charSpace = e.charSpace ?? void 0),
      t
    );
  },
};
function R() {
  return { elements: [] };
}
var z = {
  encode(e, t = new o()) {
    for (let n of e.elements) a.encode(n, t.uint32(10).fork()).join();
    return t;
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      o = R();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          o.elements.push(a.decode(r, r.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return o;
  },
  create(e) {
    return z.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = R();
    return ((t.elements = e.elements?.map((e) => a.fromPartial(e)) || []), t);
  },
};
function B() {
  return {
    level: 0,
    numberFormat: ``,
    levelText: ``,
    startAt: 0,
    paragraphStyleId: ``,
  };
}
var V = {
  encode(e, t = new o()) {
    return (
      e.level !== 0 && t.uint32(8).int32(e.level),
      e.numberFormat !== `` && t.uint32(18).string(e.numberFormat),
      e.levelText !== `` && t.uint32(26).string(e.levelText),
      e.startAt !== 0 && t.uint32(32).int32(e.startAt),
      e.paragraphStyleId !== `` && t.uint32(42).string(e.paragraphStyleId),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = B();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          a.level = r.int32();
          continue;
        case 2:
          if (e !== 18) break;
          a.numberFormat = r.string();
          continue;
        case 3:
          if (e !== 26) break;
          a.levelText = r.string();
          continue;
        case 4:
          if (e !== 32) break;
          a.startAt = r.int32();
          continue;
        case 5:
          if (e !== 42) break;
          a.paragraphStyleId = r.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return V.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = B();
    return (
      (t.level = e.level ?? 0),
      (t.numberFormat = e.numberFormat ?? ``),
      (t.levelText = e.levelText ?? ``),
      (t.startAt = e.startAt ?? 0),
      (t.paragraphStyleId = e.paragraphStyleId ?? ``),
      t
    );
  },
};
function H() {
  return { numId: ``, abstractNumId: ``, levels: [] };
}
var U = {
  encode(e, t = new o()) {
    (e.numId !== `` && t.uint32(10).string(e.numId),
      e.abstractNumId !== `` && t.uint32(18).string(e.abstractNumId));
    for (let n of e.levels) V.encode(n, t.uint32(26).fork()).join();
    return t;
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = H();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          a.numId = r.string();
          continue;
        case 2:
          if (e !== 18) break;
          a.abstractNumId = r.string();
          continue;
        case 3:
          if (e !== 26) break;
          a.levels.push(V.decode(r, r.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return U.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = H();
    return (
      (t.numId = e.numId ?? ``),
      (t.abstractNumId = e.abstractNumId ?? ``),
      (t.levels = e.levels?.map((e) => V.fromPartial(e)) || []),
      t
    );
  },
};
function W() {
  return { paragraphId: ``, numId: ``, level: 0 };
}
var G = {
  encode(e, t = new o()) {
    return (
      e.paragraphId !== `` && t.uint32(10).string(e.paragraphId),
      e.numId !== `` && t.uint32(18).string(e.numId),
      e.level !== 0 && t.uint32(24).int32(e.level),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      a = W();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          a.paragraphId = r.string();
          continue;
        case 2:
          if (e !== 18) break;
          a.numId = r.string();
          continue;
        case 3:
          if (e !== 24) break;
          a.level = r.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return a;
  },
  create(e) {
    return G.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = W();
    return (
      (t.paragraphId = e.paragraphId ?? ``),
      (t.numId = e.numId ?? ``),
      (t.level = e.level ?? 0),
      t
    );
  },
};
function K() {
  return {
    id: ``,
    breakType: 0,
    pageSetup: void 0,
    columns: void 0,
    elements: [],
    header: void 0,
    footer: void 0,
    startsWithPageBreak: !1,
    pageNumberStart: void 0,
    pageNumberFormat: void 0,
    differentFirstPage: void 0,
    firstHeader: void 0,
    firstFooter: void 0,
    documentGrid: void 0,
  };
}
var q = {
  encode(e, t = new o()) {
    (e.id !== `` && t.uint32(10).string(e.id),
      e.breakType !== 0 && t.uint32(16).int32(e.breakType),
      e.pageSetup !== void 0 &&
        N.encode(e.pageSetup, t.uint32(26).fork()).join(),
      e.columns !== void 0 && F.encode(e.columns, t.uint32(34).fork()).join());
    for (let n of e.elements) a.encode(n, t.uint32(42).fork()).join();
    return (
      e.header !== void 0 && z.encode(e.header, t.uint32(50).fork()).join(),
      e.footer !== void 0 && z.encode(e.footer, t.uint32(58).fork()).join(),
      e.startsWithPageBreak !== !1 && t.uint32(64).bool(e.startsWithPageBreak),
      e.pageNumberStart !== void 0 && t.uint32(72).int32(e.pageNumberStart),
      e.pageNumberFormat !== void 0 && t.uint32(82).string(e.pageNumberFormat),
      e.differentFirstPage !== void 0 &&
        t.uint32(88).bool(e.differentFirstPage),
      e.firstHeader !== void 0 &&
        z.encode(e.firstHeader, t.uint32(98).fork()).join(),
      e.firstFooter !== void 0 &&
        z.encode(e.firstFooter, t.uint32(106).fork()).join(),
      e.documentGrid !== void 0 &&
        L.encode(e.documentGrid, t.uint32(114).fork()).join(),
      t
    );
  },
  decode(e, n) {
    let r = e instanceof t ? e : new t(e),
      i = n === void 0 ? r.len : r.pos + n,
      o = K();
    for (; r.pos < i; ) {
      let e = r.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          o.id = r.string();
          continue;
        case 2:
          if (e !== 16) break;
          o.breakType = r.int32();
          continue;
        case 3:
          if (e !== 26) break;
          o.pageSetup = N.decode(r, r.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          o.columns = F.decode(r, r.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          o.elements.push(a.decode(r, r.uint32()));
          continue;
        case 6:
          if (e !== 50) break;
          o.header = z.decode(r, r.uint32());
          continue;
        case 7:
          if (e !== 58) break;
          o.footer = z.decode(r, r.uint32());
          continue;
        case 8:
          if (e !== 64) break;
          o.startsWithPageBreak = r.bool();
          continue;
        case 9:
          if (e !== 72) break;
          o.pageNumberStart = r.int32();
          continue;
        case 10:
          if (e !== 82) break;
          o.pageNumberFormat = r.string();
          continue;
        case 11:
          if (e !== 88) break;
          o.differentFirstPage = r.bool();
          continue;
        case 12:
          if (e !== 98) break;
          o.firstHeader = z.decode(r, r.uint32());
          continue;
        case 13:
          if (e !== 106) break;
          o.firstFooter = z.decode(r, r.uint32());
          continue;
        case 14:
          if (e !== 114) break;
          o.documentGrid = L.decode(r, r.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      r.skip(e & 7);
    }
    return o;
  },
  create(e) {
    return q.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = K();
    return (
      (t.id = e.id ?? ``),
      (t.breakType = e.breakType ?? 0),
      (t.pageSetup =
        e.pageSetup !== void 0 && e.pageSetup !== null
          ? N.fromPartial(e.pageSetup)
          : void 0),
      (t.columns =
        e.columns !== void 0 && e.columns !== null
          ? F.fromPartial(e.columns)
          : void 0),
      (t.elements = e.elements?.map((e) => a.fromPartial(e)) || []),
      (t.header =
        e.header !== void 0 && e.header !== null
          ? z.fromPartial(e.header)
          : void 0),
      (t.footer =
        e.footer !== void 0 && e.footer !== null
          ? z.fromPartial(e.footer)
          : void 0),
      (t.startsWithPageBreak = e.startsWithPageBreak ?? !1),
      (t.pageNumberStart = e.pageNumberStart ?? void 0),
      (t.pageNumberFormat = e.pageNumberFormat ?? void 0),
      (t.differentFirstPage = e.differentFirstPage ?? void 0),
      (t.firstHeader =
        e.firstHeader !== void 0 && e.firstHeader !== null
          ? z.fromPartial(e.firstHeader)
          : void 0),
      (t.firstFooter =
        e.firstFooter !== void 0 && e.firstFooter !== null
          ? z.fromPartial(e.firstFooter)
          : void 0),
      (t.documentGrid =
        e.documentGrid !== void 0 && e.documentGrid !== null
          ? L.fromPartial(e.documentGrid)
          : void 0),
      t
    );
  },
};
function J() {
  return { id: void 0, elements: [], charts: [] };
}
var Y = {
  encode(e, t = new o()) {
    e.id !== void 0 && t.uint32(10).string(e.id);
    for (let n of e.elements) a.encode(n, t.uint32(18).fork()).join();
    for (let n of e.charts) r.encode(n, t.uint32(26).fork()).join();
    return t;
  },
  decode(e, n) {
    let i = e instanceof t ? e : new t(e),
      o = n === void 0 ? i.len : i.pos + n,
      s = J();
    for (; i.pos < o; ) {
      let e = i.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          s.id = i.string();
          continue;
        case 2:
          if (e !== 18) break;
          s.elements.push(a.decode(i, i.uint32()));
          continue;
        case 3:
          if (e !== 26) break;
          s.charts.push(r.decode(i, i.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      i.skip(e & 7);
    }
    return s;
  },
  create(e) {
    return Y.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = J();
    return (
      (t.id = e.id ?? void 0),
      (t.elements = e.elements?.map((e) => a.fromPartial(e)) || []),
      (t.charts = e.charts?.map((e) => r.fromPartial(e)) || []),
      t
    );
  },
};
function X() {
  return {
    id: void 0,
    type: 0,
    version: ``,
    document: void 0,
    presentation: void 0,
    workbook: void 0,
    playground: void 0,
  };
}
var Z = {
    encode(e, t = new o()) {
      return (
        e.id !== void 0 && t.uint32(82).string(e.id),
        e.type !== 0 && t.uint32(8).int32(e.type),
        e.version !== `` && t.uint32(50).string(e.version),
        e.document !== void 0 &&
          m.encode(e.document, t.uint32(18).fork()).join(),
        e.presentation !== void 0 &&
          s.encode(e.presentation, t.uint32(26).fork()).join(),
        e.workbook !== void 0 &&
          f.encode(e.workbook, t.uint32(34).fork()).join(),
        e.playground !== void 0 &&
          Y.encode(e.playground, t.uint32(42).fork()).join(),
        t
      );
    },
    decode(e, n) {
      let r = e instanceof t ? e : new t(e),
        i = n === void 0 ? r.len : r.pos + n,
        a = X();
      for (; r.pos < i; ) {
        let e = r.uint32();
        switch (e >>> 3) {
          case 10:
            if (e !== 82) break;
            a.id = r.string();
            continue;
          case 1:
            if (e !== 8) break;
            a.type = r.int32();
            continue;
          case 6:
            if (e !== 50) break;
            a.version = r.string();
            continue;
          case 2:
            if (e !== 18) break;
            a.document = m.decode(r, r.uint32());
            continue;
          case 3:
            if (e !== 26) break;
            a.presentation = s.decode(r, r.uint32());
            continue;
          case 4:
            if (e !== 34) break;
            a.workbook = f.decode(r, r.uint32());
            continue;
          case 5:
            if (e !== 42) break;
            a.playground = Y.decode(r, r.uint32());
            continue;
        }
        if ((e & 7) == 4 || e === 0) break;
        r.skip(e & 7);
      }
      return a;
    },
    create(e) {
      return Z.fromPartial(e ?? {});
    },
    fromPartial(e) {
      let t = X();
      return (
        (t.id = e.id ?? void 0),
        (t.type = e.type ?? 0),
        (t.version = e.version ?? ``),
        (t.document =
          e.document !== void 0 && e.document !== null
            ? m.fromPartial(e.document)
            : void 0),
        (t.presentation =
          e.presentation !== void 0 && e.presentation !== null
            ? s.fromPartial(e.presentation)
            : void 0),
        (t.workbook =
          e.workbook !== void 0 && e.workbook !== null
            ? f.fromPartial(e.workbook)
            : void 0),
        (t.playground =
          e.playground !== void 0 && e.playground !== null
            ? Y.fromPartial(e.playground)
            : void 0),
        t
      );
    },
  },
  Q = (() => {
    if (typeof globalThis < `u`) return globalThis;
    if (typeof self < `u`) return self;
    if (typeof window < `u`) return window;
    if (typeof global < `u`) return global;
    throw `Unable to locate global object`;
  })();
function $(e) {
  let t = Q.Number(e.toString());
  if (t > Q.Number.MAX_SAFE_INTEGER)
    throw new Q.Error(`Value is larger than Number.MAX_SAFE_INTEGER`);
  if (t < Q.Number.MIN_SAFE_INTEGER)
    throw new Q.Error(`Value is smaller than Number.MIN_SAFE_INTEGER`);
  return t;
}
export {
  ne as C,
  Y as S,
  U as _,
  x as a,
  N as b,
  q as c,
  te as d,
  _ as f,
  C as g,
  z as h,
  y as i,
  T as l,
  g as m,
  re as n,
  m as o,
  k as p,
  F as r,
  L as s,
  Z as t,
  D as u,
  V as v,
  ee as w,
  G as x,
  j as y,
};
//# sourceMappingURL=document-Df-dRAxq.js.map
