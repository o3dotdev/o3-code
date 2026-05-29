function e() {
  let e = 0,
    t = 0;
  for (let n = 0; n < 28; n += 7) {
    let r = this.buf[this.pos++];
    if (((e |= (r & 127) << n), !(r & 128)))
      return (this.assertBounds(), [e, t]);
  }
  let n = this.buf[this.pos++];
  if (((e |= (n & 15) << 28), (t = (n & 112) >> 4), !(n & 128)))
    return (this.assertBounds(), [e, t]);
  for (let n = 3; n <= 31; n += 7) {
    let r = this.buf[this.pos++];
    if (((t |= (r & 127) << n), !(r & 128)))
      return (this.assertBounds(), [e, t]);
  }
  throw Error(`invalid varint`);
}
function t(e, t, n) {
  for (let r = 0; r < 28; r += 7) {
    let i = e >>> r,
      a = !(!(i >>> 7) && t == 0),
      o = (a ? i | 128 : i) & 255;
    if ((n.push(o), !a)) return;
  }
  let r = ((e >>> 28) & 15) | ((t & 7) << 4),
    i = !!(t >> 3);
  if ((n.push((i ? r | 128 : r) & 255), i)) {
    for (let e = 3; e < 31; e += 7) {
      let r = t >>> e,
        i = !!(r >>> 7),
        a = (i ? r | 128 : r) & 255;
      if ((n.push(a), !i)) return;
    }
    n.push((t >>> 31) & 1);
  }
}
var n = 4294967296;
function r(e) {
  let t = e[0] === `-`;
  t && (e = e.slice(1));
  let r = 1e6,
    i = 0,
    a = 0;
  function o(t, o) {
    let s = Number(e.slice(t, o));
    ((a *= r), (i = i * r + s), i >= n && ((a += (i / n) | 0), (i %= n)));
  }
  return (o(-24, -18), o(-18, -12), o(-12, -6), o(-6), t ? c(i, a) : s(i, a));
}
function i(e, t) {
  let n = s(e, t),
    r = n.hi & 2147483648;
  r && (n = c(n.lo, n.hi));
  let i = a(n.lo, n.hi);
  return r ? `-` + i : i;
}
function a(e, t) {
  if ((({ lo: e, hi: t } = o(e, t)), t <= 2097151)) return String(n * t + e);
  let r = e & 16777215,
    i = ((e >>> 24) | (t << 8)) & 16777215,
    a = (t >> 16) & 65535,
    s = r + i * 6777216 + a * 6710656,
    c = i + a * 8147497,
    te = a * 2,
    l = 1e7;
  return (
    s >= l && ((c += Math.floor(s / l)), (s %= l)),
    c >= l && ((te += Math.floor(c / l)), (c %= l)),
    te.toString() + ee(c) + ee(s)
  );
}
function o(e, t) {
  return { lo: e >>> 0, hi: t >>> 0 };
}
function s(e, t) {
  return { lo: e | 0, hi: t | 0 };
}
function c(e, t) {
  return ((t = ~t), e ? (e = ~e + 1) : (t += 1), s(e, t));
}
var ee = (e) => {
  let t = String(e);
  return `0000000`.slice(t.length) + t;
};
function te(e, t) {
  if (e >= 0) {
    for (; e > 127; ) (t.push((e & 127) | 128), (e >>>= 7));
    t.push(e);
  } else {
    for (let n = 0; n < 9; n++) (t.push((e & 127) | 128), (e >>= 7));
    t.push(1);
  }
}
function l() {
  let e = this.buf[this.pos++],
    t = e & 127;
  if (
    !(e & 128) ||
    ((e = this.buf[this.pos++]), (t |= (e & 127) << 7), !(e & 128)) ||
    ((e = this.buf[this.pos++]), (t |= (e & 127) << 14), !(e & 128)) ||
    ((e = this.buf[this.pos++]), (t |= (e & 127) << 21), !(e & 128))
  )
    return (this.assertBounds(), t);
  ((e = this.buf[this.pos++]), (t |= (e & 15) << 28));
  for (let t = 5; e & 128 && t < 10; t++) e = this.buf[this.pos++];
  if (e & 128) throw Error(`invalid varint`);
  return (this.assertBounds(), t >>> 0);
}
var u = ne();
function ne() {
  let e = new DataView(new ArrayBuffer(8));
  if (
    typeof BigInt == `function` &&
    typeof e.getBigInt64 == `function` &&
    typeof e.getBigUint64 == `function` &&
    typeof e.setBigInt64 == `function` &&
    typeof e.setBigUint64 == `function` &&
    (typeof process != `object` || {}.BUF_BIGINT_DISABLE !== `1`)
  ) {
    let t = BigInt(`-9223372036854775808`),
      n = BigInt(`9223372036854775807`),
      r = BigInt(`0`),
      i = BigInt(`18446744073709551615`);
    return {
      zero: BigInt(0),
      supported: !0,
      parse(e) {
        let r = typeof e == `bigint` ? e : BigInt(e);
        if (r > n || r < t) throw Error(`invalid int64: ${e}`);
        return r;
      },
      uParse(e) {
        let t = typeof e == `bigint` ? e : BigInt(e);
        if (t > i || t < r) throw Error(`invalid uint64: ${e}`);
        return t;
      },
      enc(t) {
        return (
          e.setBigInt64(0, this.parse(t), !0),
          { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
        );
      },
      uEnc(t) {
        return (
          e.setBigInt64(0, this.uParse(t), !0),
          { lo: e.getInt32(0, !0), hi: e.getInt32(4, !0) }
        );
      },
      dec(t, n) {
        return (
          e.setInt32(0, t, !0),
          e.setInt32(4, n, !0),
          e.getBigInt64(0, !0)
        );
      },
      uDec(t, n) {
        return (
          e.setInt32(0, t, !0),
          e.setInt32(4, n, !0),
          e.getBigUint64(0, !0)
        );
      },
    };
  }
  return {
    zero: `0`,
    supported: !1,
    parse(e) {
      return (typeof e != `string` && (e = e.toString()), re(e), e);
    },
    uParse(e) {
      return (typeof e != `string` && (e = e.toString()), ie(e), e);
    },
    enc(e) {
      return (typeof e != `string` && (e = e.toString()), re(e), r(e));
    },
    uEnc(e) {
      return (typeof e != `string` && (e = e.toString()), ie(e), r(e));
    },
    dec(e, t) {
      return i(e, t);
    },
    uDec(e, t) {
      return a(e, t);
    },
  };
}
function re(e) {
  if (!/^-?[0-9]+$/.test(e)) throw Error(`invalid int64: ` + e);
}
function ie(e) {
  if (!/^[0-9]+$/.test(e)) throw Error(`invalid uint64: ` + e);
}
var ae = Symbol.for(`@bufbuild/protobuf/text-encoding`);
function oe() {
  if (globalThis[ae] == null) {
    let e = new globalThis.TextEncoder(),
      t = new globalThis.TextDecoder();
    globalThis[ae] = {
      encodeUtf8(t) {
        return e.encode(t);
      },
      decodeUtf8(e) {
        return t.decode(e);
      },
      checkUtf8(e) {
        try {
          return !0;
        } catch {
          return !1;
        }
      },
    };
  }
  return globalThis[ae];
}
var d;
(function (e) {
  ((e[(e.Varint = 0)] = `Varint`),
    (e[(e.Bit64 = 1)] = `Bit64`),
    (e[(e.LengthDelimited = 2)] = `LengthDelimited`),
    (e[(e.StartGroup = 3)] = `StartGroup`),
    (e[(e.EndGroup = 4)] = `EndGroup`),
    (e[(e.Bit32 = 5)] = `Bit32`));
})((d ||= {}));
var f = class {
    constructor(e = oe().encodeUtf8) {
      ((this.encodeUtf8 = e),
        (this.stack = []),
        (this.chunks = []),
        (this.buf = []));
    }
    finish() {
      this.buf.length &&
        (this.chunks.push(new Uint8Array(this.buf)), (this.buf = []));
      let e = 0;
      for (let t = 0; t < this.chunks.length; t++) e += this.chunks[t].length;
      let t = new Uint8Array(e),
        n = 0;
      for (let e = 0; e < this.chunks.length; e++)
        (t.set(this.chunks[e], n), (n += this.chunks[e].length));
      return ((this.chunks = []), t);
    }
    fork() {
      return (
        this.stack.push({ chunks: this.chunks, buf: this.buf }),
        (this.chunks = []),
        (this.buf = []),
        this
      );
    }
    join() {
      let e = this.finish(),
        t = this.stack.pop();
      if (!t) throw Error(`invalid state, fork stack empty`);
      return (
        (this.chunks = t.chunks),
        (this.buf = t.buf),
        this.uint32(e.byteLength),
        this.raw(e)
      );
    }
    tag(e, t) {
      return this.uint32(((e << 3) | t) >>> 0);
    }
    raw(e) {
      return (
        this.buf.length &&
          (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
        this.chunks.push(e),
        this
      );
    }
    uint32(e) {
      for (ce(e); e > 127; ) (this.buf.push((e & 127) | 128), (e >>>= 7));
      return (this.buf.push(e), this);
    }
    int32(e) {
      return (se(e), te(e, this.buf), this);
    }
    bool(e) {
      return (this.buf.push(e ? 1 : 0), this);
    }
    bytes(e) {
      return (this.uint32(e.byteLength), this.raw(e));
    }
    string(e) {
      let t = this.encodeUtf8(e);
      return (this.uint32(t.byteLength), this.raw(t));
    }
    float(e) {
      le(e);
      let t = new Uint8Array(4);
      return (new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t));
    }
    double(e) {
      let t = new Uint8Array(8);
      return (new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t));
    }
    fixed32(e) {
      ce(e);
      let t = new Uint8Array(4);
      return (new DataView(t.buffer).setUint32(0, e, !0), this.raw(t));
    }
    sfixed32(e) {
      se(e);
      let t = new Uint8Array(4);
      return (new DataView(t.buffer).setInt32(0, e, !0), this.raw(t));
    }
    sint32(e) {
      return (se(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), te(e, this.buf), this);
    }
    sfixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        r = u.enc(e);
      return (n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t));
    }
    fixed64(e) {
      let t = new Uint8Array(8),
        n = new DataView(t.buffer),
        r = u.uEnc(e);
      return (n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t));
    }
    int64(e) {
      let n = u.enc(e);
      return (t(n.lo, n.hi, this.buf), this);
    }
    sint64(e) {
      let n = u.enc(e),
        r = n.hi >> 31;
      return (
        t((n.lo << 1) ^ r, ((n.hi << 1) | (n.lo >>> 31)) ^ r, this.buf),
        this
      );
    }
    uint64(e) {
      let n = u.uEnc(e);
      return (t(n.lo, n.hi, this.buf), this);
    }
  },
  p = class {
    constructor(t, n = oe().decodeUtf8) {
      ((this.decodeUtf8 = n),
        (this.varint64 = e),
        (this.uint32 = l),
        (this.buf = t),
        (this.len = t.length),
        (this.pos = 0),
        (this.view = new DataView(t.buffer, t.byteOffset, t.byteLength)));
    }
    tag() {
      let e = this.uint32(),
        t = e >>> 3,
        n = e & 7;
      if (t <= 0 || n < 0 || n > 5)
        throw Error(`illegal tag: field no ` + t + ` wire type ` + n);
      return [t, n];
    }
    skip(e, t) {
      let n = this.pos;
      switch (e) {
        case d.Varint:
          for (; this.buf[this.pos++] & 128; );
          break;
        case d.Bit64:
          this.pos += 4;
        case d.Bit32:
          this.pos += 4;
          break;
        case d.LengthDelimited:
          let n = this.uint32();
          this.pos += n;
          break;
        case d.StartGroup:
          for (;;) {
            let [e, n] = this.tag();
            if (n === d.EndGroup) {
              if (t !== void 0 && e !== t) throw Error(`invalid end group tag`);
              break;
            }
            this.skip(n, e);
          }
          break;
        default:
          throw Error(`cant skip wire type ` + e);
      }
      return (this.assertBounds(), this.buf.subarray(n, this.pos));
    }
    assertBounds() {
      if (this.pos > this.len) throw RangeError(`premature EOF`);
    }
    int32() {
      return this.uint32() | 0;
    }
    sint32() {
      let e = this.uint32();
      return (e >>> 1) ^ -(e & 1);
    }
    int64() {
      return u.dec(...this.varint64());
    }
    uint64() {
      return u.uDec(...this.varint64());
    }
    sint64() {
      let [e, t] = this.varint64(),
        n = -(e & 1);
      return (
        (e = ((e >>> 1) | ((t & 1) << 31)) ^ n),
        (t = (t >>> 1) ^ n),
        u.dec(e, t)
      );
    }
    bool() {
      let [e, t] = this.varint64();
      return e !== 0 || t !== 0;
    }
    fixed32() {
      return this.view.getUint32((this.pos += 4) - 4, !0);
    }
    sfixed32() {
      return this.view.getInt32((this.pos += 4) - 4, !0);
    }
    fixed64() {
      return u.uDec(this.sfixed32(), this.sfixed32());
    }
    sfixed64() {
      return u.dec(this.sfixed32(), this.sfixed32());
    }
    float() {
      return this.view.getFloat32((this.pos += 4) - 4, !0);
    }
    double() {
      return this.view.getFloat64((this.pos += 8) - 8, !0);
    }
    bytes() {
      let e = this.uint32(),
        t = this.pos;
      return (
        (this.pos += e),
        this.assertBounds(),
        this.buf.subarray(t, t + e)
      );
    }
    string() {
      return this.decodeUtf8(this.bytes());
    }
  };
function se(e) {
  if (typeof e == `string`) e = Number(e);
  else if (typeof e != `number`) throw Error(`invalid int32: ` + typeof e);
  if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648)
    throw Error(`invalid int32: ` + e);
}
function ce(e) {
  if (typeof e == `string`) e = Number(e);
  else if (typeof e != `number`) throw Error(`invalid uint32: ` + typeof e);
  if (!Number.isInteger(e) || e > 4294967295 || e < 0)
    throw Error(`invalid uint32: ` + e);
}
function le(e) {
  if (typeof e == `string`) {
    let t = e;
    if (((e = Number(e)), Number.isNaN(e) && t !== `NaN`))
      throw Error(`invalid float32: ` + t);
  } else if (typeof e != `number`) throw Error(`invalid float32: ` + typeof e);
  if (
    Number.isFinite(e) &&
    (e > 34028234663852886e22 || e < -34028234663852886e22)
  )
    throw Error(`invalid float32: ` + e);
}
var ue = (function (e) {
    return (
      (e[(e.COLOR_TYPE_UNSPECIFIED = 0)] = `COLOR_TYPE_UNSPECIFIED`),
      (e[(e.COLOR_TYPE_RGB = 1)] = `COLOR_TYPE_RGB`),
      (e[(e.COLOR_TYPE_SCHEME = 2)] = `COLOR_TYPE_SCHEME`),
      (e[(e.COLOR_TYPE_SYSTEM = 3)] = `COLOR_TYPE_SYSTEM`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  de = (function (e) {
    return (
      (e[(e.FILL_TYPE_UNSPECIFIED = 0)] = `FILL_TYPE_UNSPECIFIED`),
      (e[(e.FILL_TYPE_SOLID = 1)] = `FILL_TYPE_SOLID`),
      (e[(e.FILL_TYPE_GRADIENT = 2)] = `FILL_TYPE_GRADIENT`),
      (e[(e.FILL_TYPE_PATTERN = 3)] = `FILL_TYPE_PATTERN`),
      (e[(e.FILL_TYPE_PICTURE = 4)] = `FILL_TYPE_PICTURE`),
      (e[(e.FILL_TYPE_VIDEO = 5)] = `FILL_TYPE_VIDEO`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  fe = (function (e) {
    return (
      (e[(e.ALIGNMENT_TYPE_UNSPECIFIED = 0)] = `ALIGNMENT_TYPE_UNSPECIFIED`),
      (e[(e.ALIGNMENT_TYPE_LEFT = 1)] = `ALIGNMENT_TYPE_LEFT`),
      (e[(e.ALIGNMENT_TYPE_CENTER = 2)] = `ALIGNMENT_TYPE_CENTER`),
      (e[(e.ALIGNMENT_TYPE_RIGHT = 3)] = `ALIGNMENT_TYPE_RIGHT`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  pe = (function (e) {
    return (
      (e[(e.ANCHOR_TYPE_UNSPECIFIED = 0)] = `ANCHOR_TYPE_UNSPECIFIED`),
      (e[(e.ANCHOR_TYPE_TOP = 1)] = `ANCHOR_TYPE_TOP`),
      (e[(e.ANCHOR_TYPE_MIDDLE = 2)] = `ANCHOR_TYPE_MIDDLE`),
      (e[(e.ANCHOR_TYPE_BOTTOM = 3)] = `ANCHOR_TYPE_BOTTOM`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  me = (function (e) {
    return (
      (e[(e.VERTICAL_TYPE_UNSPECIFIED = 0)] = `VERTICAL_TYPE_UNSPECIFIED`),
      (e[(e.VERTICAL_TYPE_HORIZONTAL = 1)] = `VERTICAL_TYPE_HORIZONTAL`),
      (e[(e.VERTICAL_TYPE_VERTICAL = 2)] = `VERTICAL_TYPE_VERTICAL`),
      (e[(e.VERTICAL_TYPE_VERTICAL_270 = 3)] = `VERTICAL_TYPE_VERTICAL_270`),
      (e[(e.VERTICAL_TYPE_WORD_ART_VERTICAL = 4)] =
        `VERTICAL_TYPE_WORD_ART_VERTICAL`),
      (e[(e.VERTICAL_TYPE_EA_VERTICAL = 5)] = `VERTICAL_TYPE_EA_VERTICAL`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  he = (function (e) {
    return (
      (e[(e.TEXT_WRAPPING_TYPE_UNSPECIFIED = 0)] =
        `TEXT_WRAPPING_TYPE_UNSPECIFIED`),
      (e[(e.TEXT_WRAPPING_TYPE_NONE = 1)] = `TEXT_WRAPPING_TYPE_NONE`),
      (e[(e.TEXT_WRAPPING_TYPE_SQUARE = 2)] = `TEXT_WRAPPING_TYPE_SQUARE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ge = (function (e) {
    return (
      (e[(e.TEXT_CAPITALIZATION_UNSPECIFIED = 0)] =
        `TEXT_CAPITALIZATION_UNSPECIFIED`),
      (e[(e.TEXT_CAPITALIZATION_NONE = 1)] = `TEXT_CAPITALIZATION_NONE`),
      (e[(e.TEXT_CAPITALIZATION_SMALL = 2)] = `TEXT_CAPITALIZATION_SMALL`),
      (e[(e.TEXT_CAPITALIZATION_ALL = 3)] = `TEXT_CAPITALIZATION_ALL`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  _e = (function (e) {
    return (
      (e[(e.TAB_STOP_ALIGNMENT_UNSPECIFIED = 0)] =
        `TAB_STOP_ALIGNMENT_UNSPECIFIED`),
      (e[(e.TAB_STOP_ALIGNMENT_LEFT = 1)] = `TAB_STOP_ALIGNMENT_LEFT`),
      (e[(e.TAB_STOP_ALIGNMENT_CENTER = 2)] = `TAB_STOP_ALIGNMENT_CENTER`),
      (e[(e.TAB_STOP_ALIGNMENT_RIGHT = 3)] = `TAB_STOP_ALIGNMENT_RIGHT`),
      (e[(e.TAB_STOP_ALIGNMENT_DECIMAL = 4)] = `TAB_STOP_ALIGNMENT_DECIMAL`),
      (e[(e.TAB_STOP_ALIGNMENT_BAR = 5)] = `TAB_STOP_ALIGNMENT_BAR`),
      (e[(e.TAB_STOP_ALIGNMENT_CLEAR = 6)] = `TAB_STOP_ALIGNMENT_CLEAR`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ve = (function (e) {
    return (
      (e[(e.REVIEW_MARK_TYPE_UNSPECIFIED = 0)] =
        `REVIEW_MARK_TYPE_UNSPECIFIED`),
      (e[(e.REVIEW_MARK_TYPE_INSERTION = 1)] = `REVIEW_MARK_TYPE_INSERTION`),
      (e[(e.REVIEW_MARK_TYPE_DELETION = 2)] = `REVIEW_MARK_TYPE_DELETION`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ye = (function (e) {
    return (
      (e[(e.GRADIENT_KIND_UNSPECIFIED = 0)] = `GRADIENT_KIND_UNSPECIFIED`),
      (e[(e.GRADIENT_KIND_LINEAR = 1)] = `GRADIENT_KIND_LINEAR`),
      (e[(e.GRADIENT_KIND_PATH = 2)] = `GRADIENT_KIND_PATH`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  be = (function (e) {
    return (
      (e[(e.GRADIENT_PATH_TYPE_UNSPECIFIED = 0)] =
        `GRADIENT_PATH_TYPE_UNSPECIFIED`),
      (e[(e.GRADIENT_PATH_TYPE_SHAPE = 1)] = `GRADIENT_PATH_TYPE_SHAPE`),
      (e[(e.GRADIENT_PATH_TYPE_RECT = 2)] = `GRADIENT_PATH_TYPE_RECT`),
      (e[(e.GRADIENT_PATH_TYPE_CIRCLE = 3)] = `GRADIENT_PATH_TYPE_CIRCLE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  xe = (function (e) {
    return (
      (e[(e.CONTENT_REFERENCE_TYPE_UNSPECIFIED = 0)] =
        `CONTENT_REFERENCE_TYPE_UNSPECIFIED`),
      (e[(e.CONTENT_REFERENCE_TYPE_INTERNAL = 1)] =
        `CONTENT_REFERENCE_TYPE_INTERNAL`),
      (e[(e.CONTENT_REFERENCE_TYPE_EXTERNAL = 2)] =
        `CONTENT_REFERENCE_TYPE_EXTERNAL`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Se = (function (e) {
    return (
      (e[(e.THREAD_STATUS_UNSPECIFIED = 0)] = `THREAD_STATUS_UNSPECIFIED`),
      (e[(e.THREAD_STATUS_ACTIVE = 1)] = `THREAD_STATUS_ACTIVE`),
      (e[(e.THREAD_STATUS_RESOLVED = 2)] = `THREAD_STATUS_RESOLVED`),
      (e[(e.THREAD_STATUS_CLOSED = 3)] = `THREAD_STATUS_CLOSED`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Ce = (function (e) {
    return (
      (e[(e.PATTERN_TYPE_UNSPECIFIED = 0)] = `PATTERN_TYPE_UNSPECIFIED`),
      (e[(e.PATTERN_TYPE_NONE = 1)] = `PATTERN_TYPE_NONE`),
      (e[(e.PATTERN_TYPE_SOLID = 2)] = `PATTERN_TYPE_SOLID`),
      (e[(e.PATTERN_TYPE_MEDIUM_GRAY = 3)] = `PATTERN_TYPE_MEDIUM_GRAY`),
      (e[(e.PATTERN_TYPE_DARK_GRAY = 4)] = `PATTERN_TYPE_DARK_GRAY`),
      (e[(e.PATTERN_TYPE_LIGHT_GRAY = 5)] = `PATTERN_TYPE_LIGHT_GRAY`),
      (e[(e.PATTERN_TYPE_DARK_HORIZONTAL = 6)] =
        `PATTERN_TYPE_DARK_HORIZONTAL`),
      (e[(e.PATTERN_TYPE_DARK_VERTICAL = 7)] = `PATTERN_TYPE_DARK_VERTICAL`),
      (e[(e.PATTERN_TYPE_DARK_DOWN = 8)] = `PATTERN_TYPE_DARK_DOWN`),
      (e[(e.PATTERN_TYPE_DARK_UP = 9)] = `PATTERN_TYPE_DARK_UP`),
      (e[(e.PATTERN_TYPE_DARK_GRID = 10)] = `PATTERN_TYPE_DARK_GRID`),
      (e[(e.PATTERN_TYPE_DARK_TRELLIS = 11)] = `PATTERN_TYPE_DARK_TRELLIS`),
      (e[(e.PATTERN_TYPE_LIGHT_HORIZONTAL = 12)] =
        `PATTERN_TYPE_LIGHT_HORIZONTAL`),
      (e[(e.PATTERN_TYPE_LIGHT_VERTICAL = 13)] = `PATTERN_TYPE_LIGHT_VERTICAL`),
      (e[(e.PATTERN_TYPE_LIGHT_DOWN = 14)] = `PATTERN_TYPE_LIGHT_DOWN`),
      (e[(e.PATTERN_TYPE_LIGHT_UP = 15)] = `PATTERN_TYPE_LIGHT_UP`),
      (e[(e.PATTERN_TYPE_LIGHT_GRID = 16)] = `PATTERN_TYPE_LIGHT_GRID`),
      (e[(e.PATTERN_TYPE_LIGHT_TRELLIS = 17)] = `PATTERN_TYPE_LIGHT_TRELLIS`),
      (e[(e.PATTERN_TYPE_GRAY125 = 18)] = `PATTERN_TYPE_GRAY125`),
      (e[(e.PATTERN_TYPE_GRAY0625 = 19)] = `PATTERN_TYPE_GRAY0625`),
      (e[(e.PATTERN_TYPE_PERCENT_5 = 20)] = `PATTERN_TYPE_PERCENT_5`),
      (e[(e.PATTERN_TYPE_PERCENT_10 = 21)] = `PATTERN_TYPE_PERCENT_10`),
      (e[(e.PATTERN_TYPE_PERCENT_20 = 22)] = `PATTERN_TYPE_PERCENT_20`),
      (e[(e.PATTERN_TYPE_PERCENT_25 = 23)] = `PATTERN_TYPE_PERCENT_25`),
      (e[(e.PATTERN_TYPE_PERCENT_30 = 24)] = `PATTERN_TYPE_PERCENT_30`),
      (e[(e.PATTERN_TYPE_PERCENT_40 = 25)] = `PATTERN_TYPE_PERCENT_40`),
      (e[(e.PATTERN_TYPE_PERCENT_50 = 26)] = `PATTERN_TYPE_PERCENT_50`),
      (e[(e.PATTERN_TYPE_PERCENT_60 = 27)] = `PATTERN_TYPE_PERCENT_60`),
      (e[(e.PATTERN_TYPE_PERCENT_70 = 28)] = `PATTERN_TYPE_PERCENT_70`),
      (e[(e.PATTERN_TYPE_PERCENT_75 = 29)] = `PATTERN_TYPE_PERCENT_75`),
      (e[(e.PATTERN_TYPE_PERCENT_80 = 30)] = `PATTERN_TYPE_PERCENT_80`),
      (e[(e.PATTERN_TYPE_PERCENT_90 = 31)] = `PATTERN_TYPE_PERCENT_90`),
      (e[(e.PATTERN_TYPE_HORIZONTAL = 32)] = `PATTERN_TYPE_HORIZONTAL`),
      (e[(e.PATTERN_TYPE_VERTICAL = 33)] = `PATTERN_TYPE_VERTICAL`),
      (e[(e.PATTERN_TYPE_NARROW_HORIZONTAL = 34)] =
        `PATTERN_TYPE_NARROW_HORIZONTAL`),
      (e[(e.PATTERN_TYPE_NARROW_VERTICAL = 35)] =
        `PATTERN_TYPE_NARROW_VERTICAL`),
      (e[(e.PATTERN_TYPE_DASHED_HORIZONTAL = 36)] =
        `PATTERN_TYPE_DASHED_HORIZONTAL`),
      (e[(e.PATTERN_TYPE_DASHED_VERTICAL = 37)] =
        `PATTERN_TYPE_DASHED_VERTICAL`),
      (e[(e.PATTERN_TYPE_CROSS = 38)] = `PATTERN_TYPE_CROSS`),
      (e[(e.PATTERN_TYPE_LARGE_GRID = 39)] = `PATTERN_TYPE_LARGE_GRID`),
      (e[(e.PATTERN_TYPE_SMALL_GRID = 40)] = `PATTERN_TYPE_SMALL_GRID`),
      (e[(e.PATTERN_TYPE_DOT_GRID = 41)] = `PATTERN_TYPE_DOT_GRID`),
      (e[(e.PATTERN_TYPE_DOWNWARD_DIAGONAL = 42)] =
        `PATTERN_TYPE_DOWNWARD_DIAGONAL`),
      (e[(e.PATTERN_TYPE_UPWARD_DIAGONAL = 43)] =
        `PATTERN_TYPE_UPWARD_DIAGONAL`),
      (e[(e.PATTERN_TYPE_WIDE_DOWNWARD_DIAGONAL = 44)] =
        `PATTERN_TYPE_WIDE_DOWNWARD_DIAGONAL`),
      (e[(e.PATTERN_TYPE_WIDE_UPWARD_DIAGONAL = 45)] =
        `PATTERN_TYPE_WIDE_UPWARD_DIAGONAL`),
      (e[(e.PATTERN_TYPE_DASHED_DOWNWARD_DIAGONAL = 46)] =
        `PATTERN_TYPE_DASHED_DOWNWARD_DIAGONAL`),
      (e[(e.PATTERN_TYPE_DASHED_UPWARD_DIAGONAL = 47)] =
        `PATTERN_TYPE_DASHED_UPWARD_DIAGONAL`),
      (e[(e.PATTERN_TYPE_DIAGONAL_CROSS = 48)] = `PATTERN_TYPE_DIAGONAL_CROSS`),
      (e[(e.PATTERN_TYPE_SMALL_CHECK = 49)] = `PATTERN_TYPE_SMALL_CHECK`),
      (e[(e.PATTERN_TYPE_LARGE_CHECK = 50)] = `PATTERN_TYPE_LARGE_CHECK`),
      (e[(e.PATTERN_TYPE_SMALL_CONFETTI = 51)] = `PATTERN_TYPE_SMALL_CONFETTI`),
      (e[(e.PATTERN_TYPE_LARGE_CONFETTI = 52)] = `PATTERN_TYPE_LARGE_CONFETTI`),
      (e[(e.PATTERN_TYPE_HORIZONTAL_BRICK = 53)] =
        `PATTERN_TYPE_HORIZONTAL_BRICK`),
      (e[(e.PATTERN_TYPE_DIAGONAL_BRICK = 54)] = `PATTERN_TYPE_DIAGONAL_BRICK`),
      (e[(e.PATTERN_TYPE_SOLID_DIAMOND = 55)] = `PATTERN_TYPE_SOLID_DIAMOND`),
      (e[(e.PATTERN_TYPE_OPEN_DIAMOND = 56)] = `PATTERN_TYPE_OPEN_DIAMOND`),
      (e[(e.PATTERN_TYPE_DOTTED_DIAMOND = 57)] = `PATTERN_TYPE_DOTTED_DIAMOND`),
      (e[(e.PATTERN_TYPE_PLAID = 58)] = `PATTERN_TYPE_PLAID`),
      (e[(e.PATTERN_TYPE_SPHERE = 59)] = `PATTERN_TYPE_SPHERE`),
      (e[(e.PATTERN_TYPE_WEAVE = 60)] = `PATTERN_TYPE_WEAVE`),
      (e[(e.PATTERN_TYPE_DIVOT = 61)] = `PATTERN_TYPE_DIVOT`),
      (e[(e.PATTERN_TYPE_SHINGLE = 62)] = `PATTERN_TYPE_SHINGLE`),
      (e[(e.PATTERN_TYPE_WAVE = 63)] = `PATTERN_TYPE_WAVE`),
      (e[(e.PATTERN_TYPE_TRELLIS = 64)] = `PATTERN_TYPE_TRELLIS`),
      (e[(e.PATTERN_TYPE_ZIG_ZAG = 65)] = `PATTERN_TYPE_ZIG_ZAG`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  we = (function (e) {
    return (
      (e[(e.LINE_STYLE_UNSPECIFIED = 0)] = `LINE_STYLE_UNSPECIFIED`),
      (e[(e.LINE_STYLE_SOLID = 1)] = `LINE_STYLE_SOLID`),
      (e[(e.LINE_STYLE_DASHED = 2)] = `LINE_STYLE_DASHED`),
      (e[(e.LINE_STYLE_DOTTED = 3)] = `LINE_STYLE_DOTTED`),
      (e[(e.LINE_STYLE_DASH_DOT = 4)] = `LINE_STYLE_DASH_DOT`),
      (e[(e.LINE_STYLE_DASH_DOT_DOT = 5)] = `LINE_STYLE_DASH_DOT_DOT`),
      (e[(e.LINE_STYLE_LARGE_DASH = 6)] = `LINE_STYLE_LARGE_DASH`),
      (e[(e.LINE_STYLE_SYSTEM_DASH = 7)] = `LINE_STYLE_SYSTEM_DASH`),
      (e[(e.LINE_STYLE_SYSTEM_DOT = 8)] = `LINE_STYLE_SYSTEM_DOT`),
      (e[(e.LINE_STYLE_LARGE_DASH_DOT = 9)] = `LINE_STYLE_LARGE_DASH_DOT`),
      (e[(e.LINE_STYLE_SYSTEM_DASH_DOT = 10)] = `LINE_STYLE_SYSTEM_DASH_DOT`),
      (e[(e.LINE_STYLE_LARGE_DASH_DOT_DOT = 11)] =
        `LINE_STYLE_LARGE_DASH_DOT_DOT`),
      (e[(e.LINE_STYLE_SYSTEM_DASH_DOT_DOT = 12)] =
        `LINE_STYLE_SYSTEM_DASH_DOT_DOT`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Te = (function (e) {
    return (
      (e[(e.COMPOUND_STYLE_UNSPECIFIED = 0)] = `COMPOUND_STYLE_UNSPECIFIED`),
      (e[(e.COMPOUND_STYLE_SINGLE = 1)] = `COMPOUND_STYLE_SINGLE`),
      (e[(e.COMPOUND_STYLE_DOUBLE = 2)] = `COMPOUND_STYLE_DOUBLE`),
      (e[(e.COMPOUND_STYLE_THICK_THIN = 3)] = `COMPOUND_STYLE_THICK_THIN`),
      (e[(e.COMPOUND_STYLE_THIN_THICK = 4)] = `COMPOUND_STYLE_THIN_THICK`),
      (e[(e.COMPOUND_STYLE_TRIPLE = 5)] = `COMPOUND_STYLE_TRIPLE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Ee = (function (e) {
    return (
      (e[(e.LINE_CAP_UNSPECIFIED = 0)] = `LINE_CAP_UNSPECIFIED`),
      (e[(e.LINE_CAP_FLAT = 1)] = `LINE_CAP_FLAT`),
      (e[(e.LINE_CAP_ROUND = 2)] = `LINE_CAP_ROUND`),
      (e[(e.LINE_CAP_SQUARE = 3)] = `LINE_CAP_SQUARE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  De = (function (e) {
    return (
      (e[(e.LINE_JOIN_UNSPECIFIED = 0)] = `LINE_JOIN_UNSPECIFIED`),
      (e[(e.LINE_JOIN_ROUND = 1)] = `LINE_JOIN_ROUND`),
      (e[(e.LINE_JOIN_BEVEL = 2)] = `LINE_JOIN_BEVEL`),
      (e[(e.LINE_JOIN_MITER = 3)] = `LINE_JOIN_MITER`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({});
function Oe() {
  return {
    xEmu: void 0,
    yEmu: void 0,
    widthEmu: void 0,
    heightEmu: void 0,
    rotation: void 0,
    horizontalFlip: void 0,
    verticalFlip: void 0,
  };
}
var m = {
  encode(e, t = new f()) {
    return (
      e.xEmu !== void 0 && t.uint32(8).int64(e.xEmu),
      e.yEmu !== void 0 && t.uint32(16).int64(e.yEmu),
      e.widthEmu !== void 0 && t.uint32(24).int64(e.widthEmu),
      e.heightEmu !== void 0 && t.uint32(32).int64(e.heightEmu),
      e.rotation !== void 0 && t.uint32(40).int32(e.rotation),
      e.horizontalFlip !== void 0 && t.uint32(48).bool(e.horizontalFlip),
      e.verticalFlip !== void 0 && t.uint32(56).bool(e.verticalFlip),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Oe();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.xEmu = D(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.yEmu = D(n.int64());
          continue;
        case 3:
          if (e !== 24) break;
          i.widthEmu = D(n.int64());
          continue;
        case 4:
          if (e !== 32) break;
          i.heightEmu = D(n.int64());
          continue;
        case 5:
          if (e !== 40) break;
          i.rotation = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.horizontalFlip = n.bool();
          continue;
        case 7:
          if (e !== 56) break;
          i.verticalFlip = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return m.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Oe();
    return (
      (t.xEmu = e.xEmu ?? void 0),
      (t.yEmu = e.yEmu ?? void 0),
      (t.widthEmu = e.widthEmu ?? void 0),
      (t.heightEmu = e.heightEmu ?? void 0),
      (t.rotation = e.rotation ?? void 0),
      (t.horizontalFlip = e.horizontalFlip ?? void 0),
      (t.verticalFlip = e.verticalFlip ?? void 0),
      t
    );
  },
};
function ke() {
  return {
    tint: void 0,
    shade: void 0,
    lumMod: void 0,
    lumOff: void 0,
    satMod: void 0,
    alpha: void 0,
  };
}
var Ae = {
  encode(e, t = new f()) {
    return (
      e.tint !== void 0 && t.uint32(8).int32(e.tint),
      e.shade !== void 0 && t.uint32(16).int32(e.shade),
      e.lumMod !== void 0 && t.uint32(24).int32(e.lumMod),
      e.lumOff !== void 0 && t.uint32(32).int32(e.lumOff),
      e.satMod !== void 0 && t.uint32(40).int32(e.satMod),
      e.alpha !== void 0 && t.uint32(48).int32(e.alpha),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ke();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.tint = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.shade = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.lumMod = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.lumOff = n.int32();
          continue;
        case 5:
          if (e !== 40) break;
          i.satMod = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.alpha = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ae.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ke();
    return (
      (t.tint = e.tint ?? void 0),
      (t.shade = e.shade ?? void 0),
      (t.lumMod = e.lumMod ?? void 0),
      (t.lumOff = e.lumOff ?? void 0),
      (t.satMod = e.satMod ?? void 0),
      (t.alpha = e.alpha ?? void 0),
      t
    );
  },
};
function je() {
  return { type: 0, value: ``, transform: void 0, lastColor: void 0 };
}
var h = {
  encode(e, t = new f()) {
    return (
      e.type !== 0 && t.uint32(8).int32(e.type),
      e.value !== `` && t.uint32(18).string(e.value),
      e.transform !== void 0 &&
        Ae.encode(e.transform, t.uint32(26).fork()).join(),
      e.lastColor !== void 0 && t.uint32(34).string(e.lastColor),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = je();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.type = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.value = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.transform = Ae.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.lastColor = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return h.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = je();
    return (
      (t.type = e.type ?? 0),
      (t.value = e.value ?? ``),
      (t.transform =
        e.transform !== void 0 && e.transform !== null
          ? Ae.fromPartial(e.transform)
          : void 0),
      (t.lastColor = e.lastColor ?? void 0),
      t
    );
  },
};
function Me() {
  return { script: ``, typeface: `` };
}
var Ne = {
  encode(e, t = new f()) {
    return (
      e.script !== `` && t.uint32(10).string(e.script),
      e.typeface !== `` && t.uint32(18).string(e.typeface),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Me();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.script = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.typeface = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ne.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Me();
    return ((t.script = e.script ?? ``), (t.typeface = e.typeface ?? ``), t);
  },
};
function Pe() {
  return {
    latinTypeface: void 0,
    eastAsianTypeface: void 0,
    complexScriptTypeface: void 0,
    supplementalFonts: [],
  };
}
var g = {
  encode(e, t = new f()) {
    (e.latinTypeface !== void 0 && t.uint32(10).string(e.latinTypeface),
      e.eastAsianTypeface !== void 0 &&
        t.uint32(18).string(e.eastAsianTypeface),
      e.complexScriptTypeface !== void 0 &&
        t.uint32(26).string(e.complexScriptTypeface));
    for (let n of e.supplementalFonts) Ne.encode(n, t.uint32(34).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Pe();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.latinTypeface = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.eastAsianTypeface = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.complexScriptTypeface = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.supplementalFonts.push(Ne.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return g.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Pe();
    return (
      (t.latinTypeface = e.latinTypeface ?? void 0),
      (t.eastAsianTypeface = e.eastAsianTypeface ?? void 0),
      (t.complexScriptTypeface = e.complexScriptTypeface ?? void 0),
      (t.supplementalFonts =
        e.supplementalFonts?.map((e) => Ne.fromPartial(e)) || []),
      t
    );
  },
};
function Fe() {
  return { name: void 0, majorFont: void 0, minorFont: void 0 };
}
var Ie = {
  encode(e, t = new f()) {
    return (
      e.name !== void 0 && t.uint32(10).string(e.name),
      e.majorFont !== void 0 &&
        g.encode(e.majorFont, t.uint32(18).fork()).join(),
      e.minorFont !== void 0 &&
        g.encode(e.minorFont, t.uint32(26).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Fe();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.name = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.majorFont = g.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.minorFont = g.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ie.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Fe();
    return (
      (t.name = e.name ?? void 0),
      (t.majorFont =
        e.majorFont !== void 0 && e.majorFont !== null
          ? g.fromPartial(e.majorFont)
          : void 0),
      (t.minorFont =
        e.minorFont !== void 0 && e.minorFont !== null
          ? g.fromPartial(e.minorFont)
          : void 0),
      t
    );
  },
};
function Le() {
  return { ref: void 0, fill: void 0 };
}
var _ = {
  encode(e, t = new f()) {
    return (
      e.ref !== void 0 && ze.encode(e.ref, t.uint32(18).fork()).join(),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(26).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Le();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 2:
          if (e !== 18) break;
          i.ref = ze.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.fill = v.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return _.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Le();
    return (
      (t.ref =
        e.ref !== void 0 && e.ref !== null ? ze.fromPartial(e.ref) : void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      t
    );
  },
};
function Re() {
  return { index: 0, schemeColor: `` };
}
var ze = {
  encode(e, t = new f()) {
    return (
      e.index !== 0 && t.uint32(8).int32(e.index),
      e.schemeColor !== `` && t.uint32(18).string(e.schemeColor),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Re();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.index = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.schemeColor = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ze.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Re();
    return ((t.index = e.index ?? 0), (t.schemeColor = e.schemeColor ?? ``), t);
  },
};
function Be() {
  return {
    id: void 0,
    type: 0,
    color: void 0,
    gradientStops: [],
    relId: void 0,
    gradientKind: void 0,
    angleDeg: void 0,
    isScaled: void 0,
    pathType: void 0,
    fillRect: void 0,
    imageReference: void 0,
    alphaModFix: void 0,
    lum: void 0,
    srcRect: void 0,
    stretchFillRect: void 0,
    tile: void 0,
    duotone: void 0,
    pattern: void 0,
    grayscale: void 0,
  };
}
var v = {
  encode(e, t = new f()) {
    (e.id !== void 0 && t.uint32(82).string(e.id),
      e.type !== 0 && t.uint32(8).int32(e.type),
      e.color !== void 0 && h.encode(e.color, t.uint32(18).fork()).join());
    for (let n of e.gradientStops) Ye.encode(n, t.uint32(26).fork()).join();
    return (
      e.relId !== void 0 && t.uint32(34).string(e.relId),
      e.gradientKind !== void 0 && t.uint32(40).int32(e.gradientKind),
      e.angleDeg !== void 0 && t.uint32(49).double(e.angleDeg),
      e.isScaled !== void 0 && t.uint32(56).bool(e.isScaled),
      e.pathType !== void 0 && t.uint32(64).int32(e.pathType),
      e.fillRect !== void 0 && w.encode(e.fillRect, t.uint32(74).fork()).join(),
      e.imageReference !== void 0 &&
        y.encode(e.imageReference, t.uint32(90).fork()).join(),
      e.alphaModFix !== void 0 && t.uint32(96).int32(e.alphaModFix),
      e.lum !== void 0 && t.uint32(104).bool(e.lum),
      e.srcRect !== void 0 && w.encode(e.srcRect, t.uint32(114).fork()).join(),
      e.stretchFillRect !== void 0 &&
        w.encode(e.stretchFillRect, t.uint32(122).fork()).join(),
      e.tile !== void 0 && He.encode(e.tile, t.uint32(146).fork()).join(),
      e.duotone !== void 0 && qe.encode(e.duotone, t.uint32(130).fork()).join(),
      e.pattern !== void 0 && We.encode(e.pattern, t.uint32(138).fork()).join(),
      e.grayscale !== void 0 && t.uint32(152).bool(e.grayscale),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Be();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 10:
          if (e !== 82) break;
          i.id = n.string();
          continue;
        case 1:
          if (e !== 8) break;
          i.type = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.color = h.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.gradientStops.push(Ye.decode(n, n.uint32()));
          continue;
        case 4:
          if (e !== 34) break;
          i.relId = n.string();
          continue;
        case 5:
          if (e !== 40) break;
          i.gradientKind = n.int32();
          continue;
        case 6:
          if (e !== 49) break;
          i.angleDeg = n.double();
          continue;
        case 7:
          if (e !== 56) break;
          i.isScaled = n.bool();
          continue;
        case 8:
          if (e !== 64) break;
          i.pathType = n.int32();
          continue;
        case 9:
          if (e !== 74) break;
          i.fillRect = w.decode(n, n.uint32());
          continue;
        case 11:
          if (e !== 90) break;
          i.imageReference = y.decode(n, n.uint32());
          continue;
        case 12:
          if (e !== 96) break;
          i.alphaModFix = n.int32();
          continue;
        case 13:
          if (e !== 104) break;
          i.lum = n.bool();
          continue;
        case 14:
          if (e !== 114) break;
          i.srcRect = w.decode(n, n.uint32());
          continue;
        case 15:
          if (e !== 122) break;
          i.stretchFillRect = w.decode(n, n.uint32());
          continue;
        case 18:
          if (e !== 146) break;
          i.tile = He.decode(n, n.uint32());
          continue;
        case 16:
          if (e !== 130) break;
          i.duotone = qe.decode(n, n.uint32());
          continue;
        case 17:
          if (e !== 138) break;
          i.pattern = We.decode(n, n.uint32());
          continue;
        case 19:
          if (e !== 152) break;
          i.grayscale = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return v.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Be();
    return (
      (t.id = e.id ?? void 0),
      (t.type = e.type ?? 0),
      (t.color =
        e.color !== void 0 && e.color !== null
          ? h.fromPartial(e.color)
          : void 0),
      (t.gradientStops = e.gradientStops?.map((e) => Ye.fromPartial(e)) || []),
      (t.relId = e.relId ?? void 0),
      (t.gradientKind = e.gradientKind ?? void 0),
      (t.angleDeg = e.angleDeg ?? void 0),
      (t.isScaled = e.isScaled ?? void 0),
      (t.pathType = e.pathType ?? void 0),
      (t.fillRect =
        e.fillRect !== void 0 && e.fillRect !== null
          ? w.fromPartial(e.fillRect)
          : void 0),
      (t.imageReference =
        e.imageReference !== void 0 && e.imageReference !== null
          ? y.fromPartial(e.imageReference)
          : void 0),
      (t.alphaModFix = e.alphaModFix ?? void 0),
      (t.lum = e.lum ?? void 0),
      (t.srcRect =
        e.srcRect !== void 0 && e.srcRect !== null
          ? w.fromPartial(e.srcRect)
          : void 0),
      (t.stretchFillRect =
        e.stretchFillRect !== void 0 && e.stretchFillRect !== null
          ? w.fromPartial(e.stretchFillRect)
          : void 0),
      (t.tile =
        e.tile !== void 0 && e.tile !== null ? He.fromPartial(e.tile) : void 0),
      (t.duotone =
        e.duotone !== void 0 && e.duotone !== null
          ? qe.fromPartial(e.duotone)
          : void 0),
      (t.pattern =
        e.pattern !== void 0 && e.pattern !== null
          ? We.fromPartial(e.pattern)
          : void 0),
      (t.grayscale = e.grayscale ?? void 0),
      t
    );
  },
};
function Ve() {
  return {
    offsetX: void 0,
    offsetY: void 0,
    scaleX: void 0,
    scaleY: void 0,
    flip: void 0,
    alignment: void 0,
  };
}
var He = {
  encode(e, t = new f()) {
    return (
      e.offsetX !== void 0 && t.uint32(8).int64(e.offsetX),
      e.offsetY !== void 0 && t.uint32(16).int64(e.offsetY),
      e.scaleX !== void 0 && t.uint32(24).int32(e.scaleX),
      e.scaleY !== void 0 && t.uint32(32).int32(e.scaleY),
      e.flip !== void 0 && t.uint32(42).string(e.flip),
      e.alignment !== void 0 && t.uint32(50).string(e.alignment),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ve();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.offsetX = D(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.offsetY = D(n.int64());
          continue;
        case 3:
          if (e !== 24) break;
          i.scaleX = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.scaleY = n.int32();
          continue;
        case 5:
          if (e !== 42) break;
          i.flip = n.string();
          continue;
        case 6:
          if (e !== 50) break;
          i.alignment = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return He.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ve();
    return (
      (t.offsetX = e.offsetX ?? void 0),
      (t.offsetY = e.offsetY ?? void 0),
      (t.scaleX = e.scaleX ?? void 0),
      (t.scaleY = e.scaleY ?? void 0),
      (t.flip = e.flip ?? void 0),
      (t.alignment = e.alignment ?? void 0),
      t
    );
  },
};
function Ue() {
  return { patternType: 0, color: void 0, preset: void 0 };
}
var We = {
  encode(e, t = new f()) {
    return (
      e.patternType !== 0 && t.uint32(8).int32(e.patternType),
      e.color !== void 0 && h.encode(e.color, t.uint32(26).fork()).join(),
      e.preset !== void 0 && t.uint32(34).string(e.preset),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ue();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.patternType = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.color = h.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.preset = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return We.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ue();
    return (
      (t.patternType = e.patternType ?? 0),
      (t.color =
        e.color !== void 0 && e.color !== null
          ? h.fromPartial(e.color)
          : void 0),
      (t.preset = e.preset ?? void 0),
      t
    );
  },
};
function Ge() {
  return { id: `` };
}
var y = {
  encode(e, t = new f()) {
    return (e.id !== `` && t.uint32(10).string(e.id), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ge();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return y.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ge();
    return ((t.id = e.id ?? ``), t);
  },
};
function Ke() {
  return { darkColor: void 0, lightColor: void 0 };
}
var qe = {
  encode(e, t = new f()) {
    return (
      e.darkColor !== void 0 &&
        h.encode(e.darkColor, t.uint32(10).fork()).join(),
      e.lightColor !== void 0 &&
        h.encode(e.lightColor, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ke();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.darkColor = h.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.lightColor = h.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return qe.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ke();
    return (
      (t.darkColor =
        e.darkColor !== void 0 && e.darkColor !== null
          ? h.fromPartial(e.darkColor)
          : void 0),
      (t.lightColor =
        e.lightColor !== void 0 && e.lightColor !== null
          ? h.fromPartial(e.lightColor)
          : void 0),
      t
    );
  },
};
function Je() {
  return { position: void 0, color: void 0 };
}
var Ye = {
  encode(e, t = new f()) {
    return (
      e.position !== void 0 && t.uint32(8).int32(e.position),
      e.color !== void 0 && h.encode(e.color, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Je();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.position = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.color = h.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ye.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Je();
    return (
      (t.position = e.position ?? void 0),
      (t.color =
        e.color !== void 0 && e.color !== null
          ? h.fromPartial(e.color)
          : void 0),
      t
    );
  },
};
function Xe() {
  return { noAutofit: void 0, normalAutoFit: void 0, shapeAutoFit: void 0 };
}
var Ze = {
  encode(e, t = new f()) {
    return (
      e.noAutofit !== void 0 &&
        $e.encode(e.noAutofit, t.uint32(10).fork()).join(),
      e.normalAutoFit !== void 0 &&
        rt.encode(e.normalAutoFit, t.uint32(18).fork()).join(),
      e.shapeAutoFit !== void 0 &&
        tt.encode(e.shapeAutoFit, t.uint32(26).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Xe();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.noAutofit = $e.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.normalAutoFit = rt.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.shapeAutoFit = tt.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ze.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Xe();
    return (
      (t.noAutofit =
        e.noAutofit !== void 0 && e.noAutofit !== null
          ? $e.fromPartial(e.noAutofit)
          : void 0),
      (t.normalAutoFit =
        e.normalAutoFit !== void 0 && e.normalAutoFit !== null
          ? rt.fromPartial(e.normalAutoFit)
          : void 0),
      (t.shapeAutoFit =
        e.shapeAutoFit !== void 0 && e.shapeAutoFit !== null
          ? tt.fromPartial(e.shapeAutoFit)
          : void 0),
      t
    );
  },
};
function Qe() {
  return {};
}
var $e = {
  encode(e, t = new f()) {
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Qe();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return $e.fromPartial(e ?? {});
  },
  fromPartial(e) {
    return Qe();
  },
};
function et() {
  return {};
}
var tt = {
  encode(e, t = new f()) {
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = et();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return tt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    return et();
  },
};
function nt() {
  return { fontScale: void 0, lineSpaceReduction: void 0 };
}
var rt = {
  encode(e, t = new f()) {
    return (
      e.fontScale !== void 0 && t.uint32(8).int32(e.fontScale),
      e.lineSpaceReduction !== void 0 &&
        t.uint32(16).int32(e.lineSpaceReduction),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = nt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.fontScale = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.lineSpaceReduction = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return rt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = nt();
    return (
      (t.fontScale = e.fontScale ?? void 0),
      (t.lineSpaceReduction = e.lineSpaceReduction ?? void 0),
      t
    );
  },
};
function it() {
  return {
    anchor: void 0,
    vertical: void 0,
    rotation: void 0,
    bold: void 0,
    italic: void 0,
    fontSize: void 0,
    fill: void 0,
    alignment: void 0,
    underline: void 0,
    bottomInset: void 0,
    leftInset: void 0,
    rightInset: void 0,
    topInset: void 0,
    useParagraphSpacing: void 0,
    name: void 0,
    family: void 0,
    scheme: void 0,
    typeface: void 0,
    characterSpacing: void 0,
    wrap: void 0,
    autoFit: void 0,
    outline: void 0,
    shadow: void 0,
    capitalization: void 0,
  };
}
var b = {
  encode(e, t = new f()) {
    return (
      e.anchor !== void 0 && t.uint32(8).int32(e.anchor),
      e.vertical !== void 0 && t.uint32(16).int32(e.vertical),
      e.rotation !== void 0 && t.uint32(24).int32(e.rotation),
      e.bold !== void 0 && t.uint32(32).bool(e.bold),
      e.italic !== void 0 && t.uint32(40).bool(e.italic),
      e.fontSize !== void 0 && t.uint32(48).int32(e.fontSize),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(58).fork()).join(),
      e.alignment !== void 0 && t.uint32(64).int32(e.alignment),
      e.underline !== void 0 && t.uint32(74).string(e.underline),
      e.bottomInset !== void 0 && t.uint32(80).int32(e.bottomInset),
      e.leftInset !== void 0 && t.uint32(88).int32(e.leftInset),
      e.rightInset !== void 0 && t.uint32(96).int32(e.rightInset),
      e.topInset !== void 0 && t.uint32(104).int32(e.topInset),
      e.useParagraphSpacing !== void 0 &&
        t.uint32(112).bool(e.useParagraphSpacing),
      e.name !== void 0 && t.uint32(122).string(e.name),
      e.family !== void 0 && t.uint32(128).int32(e.family),
      e.scheme !== void 0 && t.uint32(138).string(e.scheme),
      e.typeface !== void 0 && t.uint32(146).string(e.typeface),
      e.characterSpacing !== void 0 && t.uint32(152).int32(e.characterSpacing),
      e.wrap !== void 0 && t.uint32(160).int32(e.wrap),
      e.autoFit !== void 0 && Ze.encode(e.autoFit, t.uint32(170).fork()).join(),
      e.outline !== void 0 && C.encode(e.outline, t.uint32(178).fork()).join(),
      e.shadow !== void 0 && ot.encode(e.shadow, t.uint32(186).fork()).join(),
      e.capitalization !== void 0 && t.uint32(192).int32(e.capitalization),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = it();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.anchor = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.vertical = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.rotation = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.bold = n.bool();
          continue;
        case 5:
          if (e !== 40) break;
          i.italic = n.bool();
          continue;
        case 6:
          if (e !== 48) break;
          i.fontSize = n.int32();
          continue;
        case 7:
          if (e !== 58) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 8:
          if (e !== 64) break;
          i.alignment = n.int32();
          continue;
        case 9:
          if (e !== 74) break;
          i.underline = n.string();
          continue;
        case 10:
          if (e !== 80) break;
          i.bottomInset = n.int32();
          continue;
        case 11:
          if (e !== 88) break;
          i.leftInset = n.int32();
          continue;
        case 12:
          if (e !== 96) break;
          i.rightInset = n.int32();
          continue;
        case 13:
          if (e !== 104) break;
          i.topInset = n.int32();
          continue;
        case 14:
          if (e !== 112) break;
          i.useParagraphSpacing = n.bool();
          continue;
        case 15:
          if (e !== 122) break;
          i.name = n.string();
          continue;
        case 16:
          if (e !== 128) break;
          i.family = n.int32();
          continue;
        case 17:
          if (e !== 138) break;
          i.scheme = n.string();
          continue;
        case 18:
          if (e !== 146) break;
          i.typeface = n.string();
          continue;
        case 19:
          if (e !== 152) break;
          i.characterSpacing = n.int32();
          continue;
        case 20:
          if (e !== 160) break;
          i.wrap = n.int32();
          continue;
        case 21:
          if (e !== 170) break;
          i.autoFit = Ze.decode(n, n.uint32());
          continue;
        case 22:
          if (e !== 178) break;
          i.outline = C.decode(n, n.uint32());
          continue;
        case 23:
          if (e !== 186) break;
          i.shadow = ot.decode(n, n.uint32());
          continue;
        case 24:
          if (e !== 192) break;
          i.capitalization = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return b.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = it();
    return (
      (t.anchor = e.anchor ?? void 0),
      (t.vertical = e.vertical ?? void 0),
      (t.rotation = e.rotation ?? void 0),
      (t.bold = e.bold ?? void 0),
      (t.italic = e.italic ?? void 0),
      (t.fontSize = e.fontSize ?? void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.alignment = e.alignment ?? void 0),
      (t.underline = e.underline ?? void 0),
      (t.bottomInset = e.bottomInset ?? void 0),
      (t.leftInset = e.leftInset ?? void 0),
      (t.rightInset = e.rightInset ?? void 0),
      (t.topInset = e.topInset ?? void 0),
      (t.useParagraphSpacing = e.useParagraphSpacing ?? void 0),
      (t.name = e.name ?? void 0),
      (t.family = e.family ?? void 0),
      (t.scheme = e.scheme ?? void 0),
      (t.typeface = e.typeface ?? void 0),
      (t.characterSpacing = e.characterSpacing ?? void 0),
      (t.wrap = e.wrap ?? void 0),
      (t.autoFit =
        e.autoFit !== void 0 && e.autoFit !== null
          ? Ze.fromPartial(e.autoFit)
          : void 0),
      (t.outline =
        e.outline !== void 0 && e.outline !== null
          ? C.fromPartial(e.outline)
          : void 0),
      (t.shadow =
        e.shadow !== void 0 && e.shadow !== null
          ? ot.fromPartial(e.shadow)
          : void 0),
      (t.capitalization = e.capitalization ?? void 0),
      t
    );
  },
};
function at() {
  return {
    color: void 0,
    blurRadius: void 0,
    distance: void 0,
    direction: void 0,
    alignment: void 0,
    rotateWithShape: void 0,
  };
}
var ot = {
  encode(e, t = new f()) {
    return (
      e.color !== void 0 && h.encode(e.color, t.uint32(10).fork()).join(),
      e.blurRadius !== void 0 && t.uint32(16).int32(e.blurRadius),
      e.distance !== void 0 && t.uint32(24).int32(e.distance),
      e.direction !== void 0 && t.uint32(32).int32(e.direction),
      e.alignment !== void 0 && t.uint32(42).string(e.alignment),
      e.rotateWithShape !== void 0 && t.uint32(48).bool(e.rotateWithShape),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = at();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.color = h.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 16) break;
          i.blurRadius = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.distance = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.direction = n.int32();
          continue;
        case 5:
          if (e !== 42) break;
          i.alignment = n.string();
          continue;
        case 6:
          if (e !== 48) break;
          i.rotateWithShape = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ot.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = at();
    return (
      (t.color =
        e.color !== void 0 && e.color !== null
          ? h.fromPartial(e.color)
          : void 0),
      (t.blurRadius = e.blurRadius ?? void 0),
      (t.distance = e.distance ?? void 0),
      (t.direction = e.direction ?? void 0),
      (t.alignment = e.alignment ?? void 0),
      (t.rotateWithShape = e.rotateWithShape ?? void 0),
      t
    );
  },
};
function st() {
  return { position: void 0, alignment: void 0, leader: void 0 };
}
var ct = {
  encode(e, t = new f()) {
    return (
      e.position !== void 0 && t.uint32(8).int32(e.position),
      e.alignment !== void 0 && t.uint32(16).int32(e.alignment),
      e.leader !== void 0 && t.uint32(26).string(e.leader),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = st();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.position = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.alignment = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.leader = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ct.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = st();
    return (
      (t.position = e.position ?? void 0),
      (t.alignment = e.alignment ?? void 0),
      (t.leader = e.leader ?? void 0),
      t
    );
  },
};
function lt() {
  return { top: void 0, right: void 0, bottom: void 0, left: void 0 };
}
var ut = {
  encode(e, t = new f()) {
    return (
      e.top !== void 0 && C.encode(e.top, t.uint32(10).fork()).join(),
      e.right !== void 0 && C.encode(e.right, t.uint32(18).fork()).join(),
      e.bottom !== void 0 && C.encode(e.bottom, t.uint32(26).fork()).join(),
      e.left !== void 0 && C.encode(e.left, t.uint32(34).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = lt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.top = C.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.right = C.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.bottom = C.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.left = C.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ut.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = lt();
    return (
      (t.top =
        e.top !== void 0 && e.top !== null ? C.fromPartial(e.top) : void 0),
      (t.right =
        e.right !== void 0 && e.right !== null
          ? C.fromPartial(e.right)
          : void 0),
      (t.bottom =
        e.bottom !== void 0 && e.bottom !== null
          ? C.fromPartial(e.bottom)
          : void 0),
      (t.left =
        e.left !== void 0 && e.left !== null ? C.fromPartial(e.left) : void 0),
      t
    );
  },
};
function dt() {
  return {
    bulletCharacter: void 0,
    marginLeft: void 0,
    indent: void 0,
    lineSpacingPercent: void 0,
    lineSpacingPoints: void 0,
    autoNumberType: void 0,
    autoNumberStartAt: void 0,
    outlineLevel: void 0,
    tabStops: [],
    borders: void 0,
    fill: void 0,
    snapToGrid: void 0,
  };
}
var x = {
  encode(e, t = new f()) {
    (e.bulletCharacter !== void 0 && t.uint32(10).string(e.bulletCharacter),
      e.marginLeft !== void 0 && t.uint32(16).int32(e.marginLeft),
      e.indent !== void 0 && t.uint32(24).int32(e.indent),
      e.lineSpacingPercent !== void 0 &&
        t.uint32(32).int32(e.lineSpacingPercent),
      e.lineSpacingPoints !== void 0 && t.uint32(40).int32(e.lineSpacingPoints),
      e.autoNumberType !== void 0 && t.uint32(50).string(e.autoNumberType),
      e.autoNumberStartAt !== void 0 && t.uint32(56).int32(e.autoNumberStartAt),
      e.outlineLevel !== void 0 && t.uint32(64).int32(e.outlineLevel));
    for (let n of e.tabStops) ct.encode(n, t.uint32(74).fork()).join();
    return (
      e.borders !== void 0 && ut.encode(e.borders, t.uint32(82).fork()).join(),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(90).fork()).join(),
      e.snapToGrid !== void 0 && t.uint32(96).bool(e.snapToGrid),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = dt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.bulletCharacter = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.marginLeft = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.indent = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.lineSpacingPercent = n.int32();
          continue;
        case 5:
          if (e !== 40) break;
          i.lineSpacingPoints = n.int32();
          continue;
        case 6:
          if (e !== 50) break;
          i.autoNumberType = n.string();
          continue;
        case 7:
          if (e !== 56) break;
          i.autoNumberStartAt = n.int32();
          continue;
        case 8:
          if (e !== 64) break;
          i.outlineLevel = n.int32();
          continue;
        case 9:
          if (e !== 74) break;
          i.tabStops.push(ct.decode(n, n.uint32()));
          continue;
        case 10:
          if (e !== 82) break;
          i.borders = ut.decode(n, n.uint32());
          continue;
        case 11:
          if (e !== 90) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 12:
          if (e !== 96) break;
          i.snapToGrid = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return x.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = dt();
    return (
      (t.bulletCharacter = e.bulletCharacter ?? void 0),
      (t.marginLeft = e.marginLeft ?? void 0),
      (t.indent = e.indent ?? void 0),
      (t.lineSpacingPercent = e.lineSpacingPercent ?? void 0),
      (t.lineSpacingPoints = e.lineSpacingPoints ?? void 0),
      (t.autoNumberType = e.autoNumberType ?? void 0),
      (t.autoNumberStartAt = e.autoNumberStartAt ?? void 0),
      (t.outlineLevel = e.outlineLevel ?? void 0),
      (t.tabStops = e.tabStops?.map((e) => ct.fromPartial(e)) || []),
      (t.borders =
        e.borders !== void 0 && e.borders !== null
          ? ut.fromPartial(e.borders)
          : void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.snapToGrid = e.snapToGrid ?? void 0),
      t
    );
  },
};
function ft() {
  return {
    id: ``,
    name: ``,
    description: void 0,
    textStyle: void 0,
    paragraphStyle: void 0,
    basedOn: void 0,
    tags: [],
    nextId: void 0,
    spaceBefore: void 0,
    spaceAfter: void 0,
    type: void 0,
  };
}
var pt = {
  encode(e, t = new f()) {
    (e.id !== `` && t.uint32(10).string(e.id),
      e.name !== `` && t.uint32(18).string(e.name),
      e.description !== void 0 && t.uint32(26).string(e.description),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(34).fork()).join(),
      e.paragraphStyle !== void 0 &&
        x.encode(e.paragraphStyle, t.uint32(42).fork()).join(),
      e.basedOn !== void 0 && t.uint32(50).string(e.basedOn));
    for (let n of e.tags) t.uint32(58).string(n);
    return (
      e.nextId !== void 0 && t.uint32(66).string(e.nextId),
      e.spaceBefore !== void 0 && t.uint32(72).int32(e.spaceBefore),
      e.spaceAfter !== void 0 && t.uint32(80).int32(e.spaceAfter),
      e.type !== void 0 && t.uint32(88).int32(e.type),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ft();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.name = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.description = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.paragraphStyle = x.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.basedOn = n.string();
          continue;
        case 7:
          if (e !== 58) break;
          i.tags.push(n.string());
          continue;
        case 8:
          if (e !== 66) break;
          i.nextId = n.string();
          continue;
        case 9:
          if (e !== 72) break;
          i.spaceBefore = n.int32();
          continue;
        case 10:
          if (e !== 80) break;
          i.spaceAfter = n.int32();
          continue;
        case 11:
          if (e !== 88) break;
          i.type = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return pt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ft();
    return (
      (t.id = e.id ?? ``),
      (t.name = e.name ?? ``),
      (t.description = e.description ?? void 0),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.paragraphStyle =
        e.paragraphStyle !== void 0 && e.paragraphStyle !== null
          ? x.fromPartial(e.paragraphStyle)
          : void 0),
      (t.basedOn = e.basedOn ?? void 0),
      (t.tags = e.tags?.map((e) => e) || []),
      (t.nextId = e.nextId ?? void 0),
      (t.spaceBefore = e.spaceBefore ?? void 0),
      (t.spaceAfter = e.spaceAfter ?? void 0),
      (t.type = e.type ?? void 0),
      t
    );
  },
};
function mt() {
  return {
    id: ``,
    type: 0,
    author: void 0,
    initials: void 0,
    createdAt: void 0,
  };
}
var ht = {
  encode(e, t = new f()) {
    return (
      e.id !== `` && t.uint32(10).string(e.id),
      e.type !== 0 && t.uint32(16).int32(e.type),
      e.author !== void 0 && t.uint32(26).string(e.author),
      e.initials !== void 0 && t.uint32(34).string(e.initials),
      e.createdAt !== void 0 && t.uint32(42).string(e.createdAt),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = mt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.type = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.author = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.initials = n.string();
          continue;
        case 5:
          if (e !== 42) break;
          i.createdAt = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ht.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = mt();
    return (
      (t.id = e.id ?? ``),
      (t.type = e.type ?? 0),
      (t.author = e.author ?? void 0),
      (t.initials = e.initials ?? void 0),
      (t.createdAt = e.createdAt ?? void 0),
      t
    );
  },
};
function gt() {
  return {
    id: void 0,
    level: 0,
    textStyle: void 0,
    paragraphStyle: void 0,
    spaceBefore: void 0,
    spaceAfter: void 0,
  };
}
var S = {
  encode(e, t = new f()) {
    return (
      e.id !== void 0 && t.uint32(10).string(e.id),
      e.level !== 0 && t.uint32(16).int32(e.level),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(26).fork()).join(),
      e.paragraphStyle !== void 0 &&
        x.encode(e.paragraphStyle, t.uint32(34).fork()).join(),
      e.spaceBefore !== void 0 && t.uint32(40).int32(e.spaceBefore),
      e.spaceAfter !== void 0 && t.uint32(48).int32(e.spaceAfter),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = gt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.level = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.paragraphStyle = x.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 40) break;
          i.spaceBefore = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.spaceAfter = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return S.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = gt();
    return (
      (t.id = e.id ?? void 0),
      (t.level = e.level ?? 0),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.paragraphStyle =
        e.paragraphStyle !== void 0 && e.paragraphStyle !== null
          ? x.fromPartial(e.paragraphStyle)
          : void 0),
      (t.spaceBefore = e.spaceBefore ?? void 0),
      (t.spaceAfter = e.spaceAfter ?? void 0),
      t
    );
  },
};
function _t() {
  return {
    style: 0,
    widthEmu: void 0,
    fill: void 0,
    compound: void 0,
    sketch: void 0,
    cap: void 0,
    join: void 0,
  };
}
var C = {
  encode(e, t = new f()) {
    return (
      e.style !== 0 && t.uint32(8).int32(e.style),
      e.widthEmu !== void 0 && t.uint32(16).int32(e.widthEmu),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(26).fork()).join(),
      e.compound !== void 0 && t.uint32(32).int32(e.compound),
      e.sketch !== void 0 && yt.encode(e.sketch, t.uint32(42).fork()).join(),
      e.cap !== void 0 && t.uint32(48).int32(e.cap),
      e.join !== void 0 && t.uint32(56).int32(e.join),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = _t();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.style = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.widthEmu = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 32) break;
          i.compound = n.int32();
          continue;
        case 5:
          if (e !== 42) break;
          i.sketch = yt.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 48) break;
          i.cap = n.int32();
          continue;
        case 7:
          if (e !== 56) break;
          i.join = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return C.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = _t();
    return (
      (t.style = e.style ?? 0),
      (t.widthEmu = e.widthEmu ?? void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.compound = e.compound ?? void 0),
      (t.sketch =
        e.sketch !== void 0 && e.sketch !== null
          ? yt.fromPartial(e.sketch)
          : void 0),
      (t.cap = e.cap ?? void 0),
      (t.join = e.join ?? void 0),
      t
    );
  },
};
function vt() {
  return { type: 0, presetGeometry: ``, seed: void 0 };
}
var yt = {
  encode(e, t = new f()) {
    return (
      e.type !== 0 && t.uint32(8).int32(e.type),
      e.presetGeometry !== `` && t.uint32(18).string(e.presetGeometry),
      e.seed !== void 0 && t.uint32(24).uint32(e.seed),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = vt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.type = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.presetGeometry = n.string();
          continue;
        case 3:
          if (e !== 24) break;
          i.seed = n.uint32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return yt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = vt();
    return (
      (t.type = e.type ?? 0),
      (t.presetGeometry = e.presetGeometry ?? ``),
      (t.seed = e.seed ?? void 0),
      t
    );
  },
};
function bt() {
  return { l: void 0, t: void 0, r: void 0, b: void 0 };
}
var w = {
  encode(e, t = new f()) {
    return (
      e.l !== void 0 && t.uint32(8).int32(e.l),
      e.t !== void 0 && t.uint32(16).int32(e.t),
      e.r !== void 0 && t.uint32(24).int32(e.r),
      e.b !== void 0 && t.uint32(32).int32(e.b),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = bt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.l = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.t = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.r = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.b = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return w.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = bt();
    return (
      (t.l = e.l ?? void 0),
      (t.t = e.t ?? void 0),
      (t.r = e.r ?? void 0),
      (t.b = e.b ?? void 0),
      t
    );
  },
};
function xt() {
  return {
    contentType: ``,
    data: new Uint8Array(),
    id: ``,
    prompt: void 0,
    uri: void 0,
  };
}
var St = {
  encode(e, t = new f()) {
    return (
      e.contentType !== `` && t.uint32(10).string(e.contentType),
      e.data.length !== 0 && t.uint32(18).bytes(e.data),
      e.id !== `` && t.uint32(26).string(e.id),
      e.prompt !== void 0 && t.uint32(34).string(e.prompt),
      e.uri !== void 0 && t.uint32(42).string(e.uri),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = xt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.contentType = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.data = n.bytes();
          continue;
        case 3:
          if (e !== 26) break;
          i.id = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.prompt = n.string();
          continue;
        case 5:
          if (e !== 42) break;
          i.uri = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return St.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = xt();
    return (
      (t.contentType = e.contentType ?? ``),
      (t.data = e.data ?? new Uint8Array()),
      (t.id = e.id ?? ``),
      (t.prompt = e.prompt ?? void 0),
      (t.uri = e.uri ?? void 0),
      t
    );
  },
};
function Ct() {
  return {
    id: ``,
    tetherId: ``,
    uri: void 0,
    title: void 0,
    type: 0,
    sourceType: void 0,
    targetId: ``,
    contentLineRange: void 0,
    contentId: void 0,
  };
}
var wt = {
  encode(e, t = new f()) {
    return (
      e.id !== `` && t.uint32(10).string(e.id),
      e.tetherId !== `` && t.uint32(18).string(e.tetherId),
      e.uri !== void 0 && t.uint32(26).string(e.uri),
      e.title !== void 0 && t.uint32(34).string(e.title),
      e.type !== 0 && t.uint32(40).int32(e.type),
      e.sourceType !== void 0 && t.uint32(48).int32(e.sourceType),
      e.targetId !== `` && t.uint32(58).string(e.targetId),
      e.contentLineRange !== void 0 &&
        Et.encode(e.contentLineRange, t.uint32(66).fork()).join(),
      e.contentId !== void 0 && t.uint32(74).string(e.contentId),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ct();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.tetherId = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.uri = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.title = n.string();
          continue;
        case 5:
          if (e !== 40) break;
          i.type = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.sourceType = n.int32();
          continue;
        case 7:
          if (e !== 58) break;
          i.targetId = n.string();
          continue;
        case 8:
          if (e !== 66) break;
          i.contentLineRange = Et.decode(n, n.uint32());
          continue;
        case 9:
          if (e !== 74) break;
          i.contentId = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return wt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ct();
    return (
      (t.id = e.id ?? ``),
      (t.tetherId = e.tetherId ?? ``),
      (t.uri = e.uri ?? void 0),
      (t.title = e.title ?? void 0),
      (t.type = e.type ?? 0),
      (t.sourceType = e.sourceType ?? void 0),
      (t.targetId = e.targetId ?? ``),
      (t.contentLineRange =
        e.contentLineRange !== void 0 && e.contentLineRange !== null
          ? Et.fromPartial(e.contentLineRange)
          : void 0),
      (t.contentId = e.contentId ?? void 0),
      t
    );
  },
};
function Tt() {
  return { startLineNum: 0, endLineNum: void 0 };
}
var Et = {
  encode(e, t = new f()) {
    return (
      e.startLineNum !== 0 && t.uint32(8).uint64(e.startLineNum),
      e.endLineNum !== void 0 && t.uint32(16).uint64(e.endLineNum),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Tt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.startLineNum = D(n.uint64());
          continue;
        case 2:
          if (e !== 16) break;
          i.endLineNum = D(n.uint64());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Et.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Tt();
    return (
      (t.startLineNum = e.startLineNum ?? 0),
      (t.endLineNum = e.endLineNum ?? void 0),
      t
    );
  },
};
function Dt() {
  return {
    id: ``,
    displayName: ``,
    initials: void 0,
    email: void 0,
    avatarUrl: void 0,
    userId: void 0,
    providerId: void 0,
  };
}
var Ot = {
  encode(e, t = new f()) {
    return (
      e.id !== `` && t.uint32(10).string(e.id),
      e.displayName !== `` && t.uint32(18).string(e.displayName),
      e.initials !== void 0 && t.uint32(26).string(e.initials),
      e.email !== void 0 && t.uint32(34).string(e.email),
      e.avatarUrl !== void 0 && t.uint32(42).string(e.avatarUrl),
      e.userId !== void 0 && t.uint32(50).string(e.userId),
      e.providerId !== void 0 && t.uint32(58).string(e.providerId),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Dt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.displayName = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.initials = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.email = n.string();
          continue;
        case 5:
          if (e !== 42) break;
          i.avatarUrl = n.string();
          continue;
        case 6:
          if (e !== 50) break;
          i.userId = n.string();
          continue;
        case 7:
          if (e !== 58) break;
          i.providerId = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ot.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Dt();
    return (
      (t.id = e.id ?? ``),
      (t.displayName = e.displayName ?? ``),
      (t.initials = e.initials ?? void 0),
      (t.email = e.email ?? void 0),
      (t.avatarUrl = e.avatarUrl ?? void 0),
      (t.userId = e.userId ?? void 0),
      (t.providerId = e.providerId ?? void 0),
      t
    );
  },
};
function kt() {
  return { plainText: `` };
}
var At = {
  encode(e, t = new f()) {
    return (e.plainText !== `` && t.uint32(10).string(e.plainText), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = kt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.plainText = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return At.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = kt();
    return ((t.plainText = e.plainText ?? ``), t);
  },
};
function jt() {
  return { sheetName: ``, sheetId: void 0, address: `` };
}
var Mt = {
  encode(e, t = new f()) {
    return (
      e.sheetName !== `` && t.uint32(10).string(e.sheetName),
      e.sheetId !== void 0 && t.uint32(18).string(e.sheetId),
      e.address !== `` && t.uint32(26).string(e.address),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = jt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.sheetName = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.sheetId = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.address = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Mt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = jt();
    return (
      (t.sheetName = e.sheetName ?? ``),
      (t.sheetId = e.sheetId ?? void 0),
      (t.address = e.address ?? ``),
      t
    );
  },
};
function Nt() {
  return { sheetName: ``, sheetId: void 0, startAddress: ``, endAddress: `` };
}
var Pt = {
  encode(e, t = new f()) {
    return (
      e.sheetName !== `` && t.uint32(10).string(e.sheetName),
      e.sheetId !== void 0 && t.uint32(18).string(e.sheetId),
      e.startAddress !== `` && t.uint32(26).string(e.startAddress),
      e.endAddress !== `` && t.uint32(34).string(e.endAddress),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Nt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.sheetName = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.sheetId = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.startAddress = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.endAddress = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Pt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Nt();
    return (
      (t.sheetName = e.sheetName ?? ``),
      (t.sheetId = e.sheetId ?? void 0),
      (t.startAddress = e.startAddress ?? ``),
      (t.endAddress = e.endAddress ?? ``),
      t
    );
  },
};
function Ft() {
  return { slideId: `` };
}
var It = {
  encode(e, t = new f()) {
    return (e.slideId !== `` && t.uint32(10).string(e.slideId), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ft();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.slideId = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return It.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ft();
    return ((t.slideId = e.slideId ?? ``), t);
  },
};
function Lt() {
  return { slideId: ``, elementId: `` };
}
var Rt = {
  encode(e, t = new f()) {
    return (
      e.slideId !== `` && t.uint32(10).string(e.slideId),
      e.elementId !== `` && t.uint32(18).string(e.elementId),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Lt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.slideId = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.elementId = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Rt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Lt();
    return (
      (t.slideId = e.slideId ?? ``),
      (t.elementId = e.elementId ?? ``),
      t
    );
  },
};
function zt() {
  return { contextLength: void 0, contextHash: void 0 };
}
var Bt = {
  encode(e, t = new f()) {
    return (
      e.contextLength !== void 0 && t.uint32(8).uint32(e.contextLength),
      e.contextHash !== void 0 && t.uint32(16).uint32(e.contextHash),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = zt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.contextLength = n.uint32();
          continue;
        case 2:
          if (e !== 16) break;
          i.contextHash = n.uint32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Bt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = zt();
    return (
      (t.contextLength = e.contextLength ?? void 0),
      (t.contextHash = e.contextHash ?? void 0),
      t
    );
  },
};
function Vt() {
  return { slideId: ``, elementId: ``, startCp: 0, length: 0, context: void 0 };
}
var Ht = {
  encode(e, t = new f()) {
    return (
      e.slideId !== `` && t.uint32(10).string(e.slideId),
      e.elementId !== `` && t.uint32(18).string(e.elementId),
      e.startCp !== 0 && t.uint32(24).uint32(e.startCp),
      e.length !== 0 && t.uint32(32).uint32(e.length),
      e.context !== void 0 && Bt.encode(e.context, t.uint32(42).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Vt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.slideId = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.elementId = n.string();
          continue;
        case 3:
          if (e !== 24) break;
          i.startCp = n.uint32();
          continue;
        case 4:
          if (e !== 32) break;
          i.length = n.uint32();
          continue;
        case 5:
          if (e !== 42) break;
          i.context = Bt.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ht.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Vt();
    return (
      (t.slideId = e.slideId ?? ``),
      (t.elementId = e.elementId ?? ``),
      (t.startCp = e.startCp ?? 0),
      (t.length = e.length ?? 0),
      (t.context =
        e.context !== void 0 && e.context !== null
          ? Bt.fromPartial(e.context)
          : void 0),
      t
    );
  },
};
function Ut() {
  return {
    spreadsheetCell: void 0,
    spreadsheetRange: void 0,
    slide: void 0,
    element: void 0,
    textRange: void 0,
  };
}
var Wt = {
  encode(e, t = new f()) {
    return (
      e.spreadsheetCell !== void 0 &&
        Mt.encode(e.spreadsheetCell, t.uint32(10).fork()).join(),
      e.spreadsheetRange !== void 0 &&
        Pt.encode(e.spreadsheetRange, t.uint32(18).fork()).join(),
      e.slide !== void 0 && It.encode(e.slide, t.uint32(26).fork()).join(),
      e.element !== void 0 && Rt.encode(e.element, t.uint32(34).fork()).join(),
      e.textRange !== void 0 &&
        Ht.encode(e.textRange, t.uint32(42).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ut();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.spreadsheetCell = Mt.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.spreadsheetRange = Pt.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.slide = It.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.element = Rt.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.textRange = Ht.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Wt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ut();
    return (
      (t.spreadsheetCell =
        e.spreadsheetCell !== void 0 && e.spreadsheetCell !== null
          ? Mt.fromPartial(e.spreadsheetCell)
          : void 0),
      (t.spreadsheetRange =
        e.spreadsheetRange !== void 0 && e.spreadsheetRange !== null
          ? Pt.fromPartial(e.spreadsheetRange)
          : void 0),
      (t.slide =
        e.slide !== void 0 && e.slide !== null
          ? It.fromPartial(e.slide)
          : void 0),
      (t.element =
        e.element !== void 0 && e.element !== null
          ? Rt.fromPartial(e.element)
          : void 0),
      (t.textRange =
        e.textRange !== void 0 && e.textRange !== null
          ? Ht.fromPartial(e.textRange)
          : void 0),
      t
    );
  },
};
function Gt() {
  return { authorId: ``, time: `` };
}
var Kt = {
  encode(e, t = new f()) {
    return (
      e.authorId !== `` && t.uint32(10).string(e.authorId),
      e.time !== `` && t.uint32(18).string(e.time),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Gt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.authorId = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.time = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Kt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Gt();
    return ((t.authorId = e.authorId ?? ``), (t.time = e.time ?? ``), t);
  },
};
function qt() {
  return { type: ``, instances: [] };
}
var Jt = {
  encode(e, t = new f()) {
    e.type !== `` && t.uint32(10).string(e.type);
    for (let n of e.instances) Kt.encode(n, t.uint32(18).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = qt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.type = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.instances.push(Kt.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Jt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = qt();
    return (
      (t.type = e.type ?? ``),
      (t.instances = e.instances?.map((e) => Kt.fromPartial(e)) || []),
      t
    );
  },
};
function Yt() {
  return { xEmu: 0, yEmu: 0 };
}
var Xt = {
  encode(e, t = new f()) {
    return (
      e.xEmu !== 0 && t.uint32(8).int64(e.xEmu),
      e.yEmu !== 0 && t.uint32(16).int64(e.yEmu),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Yt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.xEmu = D(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.yEmu = D(n.int64());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Xt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Yt();
    return ((t.xEmu = e.xEmu ?? 0), (t.yEmu = e.yEmu ?? 0), t);
  },
};
function Zt() {
  return {
    id: ``,
    parentId: void 0,
    authorId: ``,
    createdAt: ``,
    editedAt: void 0,
    body: void 0,
    isDeleted: !1,
    reactions: [],
    citations: [],
    position: void 0,
  };
}
var Qt = {
  encode(e, t = new f()) {
    (e.id !== `` && t.uint32(10).string(e.id),
      e.parentId !== void 0 && t.uint32(18).string(e.parentId),
      e.authorId !== `` && t.uint32(26).string(e.authorId),
      e.createdAt !== `` && t.uint32(34).string(e.createdAt),
      e.editedAt !== void 0 && t.uint32(42).string(e.editedAt),
      e.body !== void 0 && At.encode(e.body, t.uint32(50).fork()).join(),
      e.isDeleted !== !1 && t.uint32(56).bool(e.isDeleted));
    for (let n of e.reactions) Jt.encode(n, t.uint32(66).fork()).join();
    for (let n of e.citations) t.uint32(74).string(n);
    return (
      e.position !== void 0 &&
        Xt.encode(e.position, t.uint32(82).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Zt();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.parentId = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.authorId = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.createdAt = n.string();
          continue;
        case 5:
          if (e !== 42) break;
          i.editedAt = n.string();
          continue;
        case 6:
          if (e !== 50) break;
          i.body = At.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 56) break;
          i.isDeleted = n.bool();
          continue;
        case 8:
          if (e !== 66) break;
          i.reactions.push(Jt.decode(n, n.uint32()));
          continue;
        case 9:
          if (e !== 74) break;
          i.citations.push(n.string());
          continue;
        case 10:
          if (e !== 82) break;
          i.position = Xt.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Qt.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Zt();
    return (
      (t.id = e.id ?? ``),
      (t.parentId = e.parentId ?? void 0),
      (t.authorId = e.authorId ?? ``),
      (t.createdAt = e.createdAt ?? ``),
      (t.editedAt = e.editedAt ?? void 0),
      (t.body =
        e.body !== void 0 && e.body !== null ? At.fromPartial(e.body) : void 0),
      (t.isDeleted = e.isDeleted ?? !1),
      (t.reactions = e.reactions?.map((e) => Jt.fromPartial(e)) || []),
      (t.citations = e.citations?.map((e) => e) || []),
      (t.position =
        e.position !== void 0 && e.position !== null
          ? Xt.fromPartial(e.position)
          : void 0),
      t
    );
  },
};
function $t() {
  return {
    id: ``,
    target: void 0,
    comments: [],
    status: 0,
    resolvedBy: void 0,
    resolvedAt: void 0,
  };
}
var T = {
    encode(e, t = new f()) {
      (e.id !== `` && t.uint32(10).string(e.id),
        e.target !== void 0 && Wt.encode(e.target, t.uint32(18).fork()).join());
      for (let n of e.comments) Qt.encode(n, t.uint32(26).fork()).join();
      return (
        e.status !== 0 && t.uint32(32).int32(e.status),
        e.resolvedBy !== void 0 && t.uint32(42).string(e.resolvedBy),
        e.resolvedAt !== void 0 && t.uint32(50).string(e.resolvedAt),
        t
      );
    },
    decode(e, t) {
      let n = e instanceof p ? e : new p(e),
        r = t === void 0 ? n.len : n.pos + t,
        i = $t();
      for (; n.pos < r; ) {
        let e = n.uint32();
        switch (e >>> 3) {
          case 1:
            if (e !== 10) break;
            i.id = n.string();
            continue;
          case 2:
            if (e !== 18) break;
            i.target = Wt.decode(n, n.uint32());
            continue;
          case 3:
            if (e !== 26) break;
            i.comments.push(Qt.decode(n, n.uint32()));
            continue;
          case 4:
            if (e !== 32) break;
            i.status = n.int32();
            continue;
          case 5:
            if (e !== 42) break;
            i.resolvedBy = n.string();
            continue;
          case 6:
            if (e !== 50) break;
            i.resolvedAt = n.string();
            continue;
        }
        if ((e & 7) == 4 || e === 0) break;
        n.skip(e & 7);
      }
      return i;
    },
    create(e) {
      return T.fromPartial(e ?? {});
    },
    fromPartial(e) {
      let t = $t();
      return (
        (t.id = e.id ?? ``),
        (t.target =
          e.target !== void 0 && e.target !== null
            ? Wt.fromPartial(e.target)
            : void 0),
        (t.comments = e.comments?.map((e) => Qt.fromPartial(e)) || []),
        (t.status = e.status ?? 0),
        (t.resolvedBy = e.resolvedBy ?? void 0),
        (t.resolvedAt = e.resolvedAt ?? void 0),
        t
      );
    },
  },
  E = (() => {
    if (typeof globalThis < `u`) return globalThis;
    if (typeof self < `u`) return self;
    if (typeof window < `u`) return window;
    if (typeof global < `u`) return global;
    throw `Unable to locate global object`;
  })();
function D(e) {
  let t = E.Number(e.toString());
  if (t > E.Number.MAX_SAFE_INTEGER)
    throw new E.Error(`Value is larger than Number.MAX_SAFE_INTEGER`);
  if (t < E.Number.MIN_SAFE_INTEGER)
    throw new E.Error(`Value is smaller than Number.MIN_SAFE_INTEGER`);
  return t;
}
var en = (function (e) {
    return (
      (e[(e.LEGEND_POSITION_UNSPECIFIED = 0)] = `LEGEND_POSITION_UNSPECIFIED`),
      (e[(e.LEGEND_POSITION_RIGHT = 1)] = `LEGEND_POSITION_RIGHT`),
      (e[(e.LEGEND_POSITION_LEFT = 2)] = `LEGEND_POSITION_LEFT`),
      (e[(e.LEGEND_POSITION_TOP = 3)] = `LEGEND_POSITION_TOP`),
      (e[(e.LEGEND_POSITION_BOTTOM = 4)] = `LEGEND_POSITION_BOTTOM`),
      (e[(e.LEGEND_POSITION_TOP_RIGHT = 5)] = `LEGEND_POSITION_TOP_RIGHT`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  tn = (function (e) {
    return (
      (e[(e.BAR_DIRECTION_UNSPECIFIED = 0)] = `BAR_DIRECTION_UNSPECIFIED`),
      (e[(e.BAR_DIRECTION_COLUMN = 1)] = `BAR_DIRECTION_COLUMN`),
      (e[(e.BAR_DIRECTION_BAR = 2)] = `BAR_DIRECTION_BAR`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  nn = (function (e) {
    return (
      (e[(e.BAR_GROUPING_UNSPECIFIED = 0)] = `BAR_GROUPING_UNSPECIFIED`),
      (e[(e.BAR_GROUPING_CLUSTERED = 1)] = `BAR_GROUPING_CLUSTERED`),
      (e[(e.BAR_GROUPING_STACKED = 2)] = `BAR_GROUPING_STACKED`),
      (e[(e.BAR_GROUPING_PERCENT_STACKED = 3)] =
        `BAR_GROUPING_PERCENT_STACKED`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  rn = (function (e) {
    return (
      (e[(e.TRENDLINE_TYPE_UNSPECIFIED = 0)] = `TRENDLINE_TYPE_UNSPECIFIED`),
      (e[(e.TRENDLINE_TYPE_LINEAR = 1)] = `TRENDLINE_TYPE_LINEAR`),
      (e[(e.TRENDLINE_TYPE_EXPONENTIAL = 2)] = `TRENDLINE_TYPE_EXPONENTIAL`),
      (e[(e.TRENDLINE_TYPE_LOGARITHMIC = 3)] = `TRENDLINE_TYPE_LOGARITHMIC`),
      (e[(e.TRENDLINE_TYPE_POLYNOMIAL = 4)] = `TRENDLINE_TYPE_POLYNOMIAL`),
      (e[(e.TRENDLINE_TYPE_POWER = 5)] = `TRENDLINE_TYPE_POWER`),
      (e[(e.TRENDLINE_TYPE_MOVING_AVERAGE = 6)] =
        `TRENDLINE_TYPE_MOVING_AVERAGE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  an = (function (e) {
    return (
      (e[(e.DATA_LABEL_POSITION_UNSPECIFIED = 0)] =
        `DATA_LABEL_POSITION_UNSPECIFIED`),
      (e[(e.DATA_LABEL_POSITION_OUT_END = 1)] = `DATA_LABEL_POSITION_OUT_END`),
      (e[(e.DATA_LABEL_POSITION_IN_END = 2)] = `DATA_LABEL_POSITION_IN_END`),
      (e[(e.DATA_LABEL_POSITION_CENTER = 3)] = `DATA_LABEL_POSITION_CENTER`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  on = (function (e) {
    return (
      (e[(e.DISPLAY_BLANKS_AS_UNSPECIFIED = 0)] =
        `DISPLAY_BLANKS_AS_UNSPECIFIED`),
      (e[(e.DISPLAY_BLANKS_AS_GAP = 1)] = `DISPLAY_BLANKS_AS_GAP`),
      (e[(e.DISPLAY_BLANKS_AS_ZERO = 2)] = `DISPLAY_BLANKS_AS_ZERO`),
      (e[(e.DISPLAY_BLANKS_AS_SPAN = 3)] = `DISPLAY_BLANKS_AS_SPAN`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  sn = (function (e) {
    return (
      (e[(e.SCATTER_STYLE_UNSPECIFIED = 0)] = `SCATTER_STYLE_UNSPECIFIED`),
      (e[(e.SCATTER_STYLE_LINE_MARKER = 1)] = `SCATTER_STYLE_LINE_MARKER`),
      (e[(e.SCATTER_STYLE_LINE = 2)] = `SCATTER_STYLE_LINE`),
      (e[(e.SCATTER_STYLE_MARKER = 3)] = `SCATTER_STYLE_MARKER`),
      (e[(e.SCATTER_STYLE_SMOOTH = 4)] = `SCATTER_STYLE_SMOOTH`),
      (e[(e.SCATTER_STYLE_SMOOTH_MARKER = 5)] = `SCATTER_STYLE_SMOOTH_MARKER`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  cn = (function (e) {
    return (
      (e[(e.RADAR_STYLE_UNSPECIFIED = 0)] = `RADAR_STYLE_UNSPECIFIED`),
      (e[(e.RADAR_STYLE_STANDARD = 1)] = `RADAR_STYLE_STANDARD`),
      (e[(e.RADAR_STYLE_MARKER = 2)] = `RADAR_STYLE_MARKER`),
      (e[(e.RADAR_STYLE_FILLED = 3)] = `RADAR_STYLE_FILLED`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ln = (function (e) {
    return (
      (e[(e.LINE_GROUPING_UNSPECIFIED = 0)] = `LINE_GROUPING_UNSPECIFIED`),
      (e[(e.LINE_GROUPING_STANDARD = 1)] = `LINE_GROUPING_STANDARD`),
      (e[(e.LINE_GROUPING_STACKED = 2)] = `LINE_GROUPING_STACKED`),
      (e[(e.LINE_GROUPING_PERCENT_STACKED = 3)] =
        `LINE_GROUPING_PERCENT_STACKED`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  un = (function (e) {
    return (
      (e[(e.AREA_GROUPING_UNSPECIFIED = 0)] = `AREA_GROUPING_UNSPECIFIED`),
      (e[(e.AREA_GROUPING_STANDARD = 1)] = `AREA_GROUPING_STANDARD`),
      (e[(e.AREA_GROUPING_STACKED = 2)] = `AREA_GROUPING_STACKED`),
      (e[(e.AREA_GROUPING_PERCENT_STACKED = 3)] =
        `AREA_GROUPING_PERCENT_STACKED`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  dn = (function (e) {
    return (
      (e[(e.MAP_AREA_UNSPECIFIED = 0)] = `MAP_AREA_UNSPECIFIED`),
      (e[(e.MAP_AREA_AUTO = 1)] = `MAP_AREA_AUTO`),
      (e[(e.MAP_AREA_WORLD = 2)] = `MAP_AREA_WORLD`),
      (e[(e.MAP_AREA_DATA_ONLY = 3)] = `MAP_AREA_DATA_ONLY`),
      (e[(e.MAP_AREA_REGION = 4)] = `MAP_AREA_REGION`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  fn = (function (e) {
    return (
      (e[(e.MAP_PROJECTION_UNSPECIFIED = 0)] = `MAP_PROJECTION_UNSPECIFIED`),
      (e[(e.MAP_PROJECTION_AUTO = 1)] = `MAP_PROJECTION_AUTO`),
      (e[(e.MAP_PROJECTION_MERCATOR = 2)] = `MAP_PROJECTION_MERCATOR`),
      (e[(e.MAP_PROJECTION_MILLER = 3)] = `MAP_PROJECTION_MILLER`),
      (e[(e.MAP_PROJECTION_ALBERS = 4)] = `MAP_PROJECTION_ALBERS`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  pn = (function (e) {
    return (
      (e[(e.MAP_LABEL_LAYOUT_UNSPECIFIED = 0)] =
        `MAP_LABEL_LAYOUT_UNSPECIFIED`),
      (e[(e.MAP_LABEL_LAYOUT_NONE = 1)] = `MAP_LABEL_LAYOUT_NONE`),
      (e[(e.MAP_LABEL_LAYOUT_BEST_FIT = 2)] = `MAP_LABEL_LAYOUT_BEST_FIT`),
      (e[(e.MAP_LABEL_LAYOUT_SHOW_ALL = 3)] = `MAP_LABEL_LAYOUT_SHOW_ALL`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  mn = (function (e) {
    return (
      (e[(e.MAP_DATA_LEVEL_UNSPECIFIED = 0)] = `MAP_DATA_LEVEL_UNSPECIFIED`),
      (e[(e.MAP_DATA_LEVEL_AUTO = 1)] = `MAP_DATA_LEVEL_AUTO`),
      (e[(e.MAP_DATA_LEVEL_COUNTRY_OR_REGION = 2)] =
        `MAP_DATA_LEVEL_COUNTRY_OR_REGION`),
      (e[(e.MAP_DATA_LEVEL_STATE_OR_PROVINCE = 3)] =
        `MAP_DATA_LEVEL_STATE_OR_PROVINCE`),
      (e[(e.MAP_DATA_LEVEL_COUNTY = 4)] = `MAP_DATA_LEVEL_COUNTY`),
      (e[(e.MAP_DATA_LEVEL_POSTAL_CODE = 5)] = `MAP_DATA_LEVEL_POSTAL_CODE`),
      (e[(e.MAP_DATA_LEVEL_COUNTRY_OR_REGION_CODE = 6)] =
        `MAP_DATA_LEVEL_COUNTRY_OR_REGION_CODE`),
      (e[(e.MAP_DATA_LEVEL_STATE_CODE = 7)] = `MAP_DATA_LEVEL_STATE_CODE`),
      (e[(e.MAP_DATA_LEVEL_COUNTY_CODE = 8)] = `MAP_DATA_LEVEL_COUNTY_CODE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  hn = (function (e) {
    return (
      (e[(e.MARKER_SYMBOL_UNSPECIFIED = 0)] = `MARKER_SYMBOL_UNSPECIFIED`),
      (e[(e.MARKER_SYMBOL_NONE = 1)] = `MARKER_SYMBOL_NONE`),
      (e[(e.MARKER_SYMBOL_DOT = 2)] = `MARKER_SYMBOL_DOT`),
      (e[(e.MARKER_SYMBOL_CIRCLE = 3)] = `MARKER_SYMBOL_CIRCLE`),
      (e[(e.MARKER_SYMBOL_SQUARE = 4)] = `MARKER_SYMBOL_SQUARE`),
      (e[(e.MARKER_SYMBOL_DIAMOND = 5)] = `MARKER_SYMBOL_DIAMOND`),
      (e[(e.MARKER_SYMBOL_TRIANGLE = 6)] = `MARKER_SYMBOL_TRIANGLE`),
      (e[(e.MARKER_SYMBOL_X = 7)] = `MARKER_SYMBOL_X`),
      (e[(e.MARKER_SYMBOL_STAR = 8)] = `MARKER_SYMBOL_STAR`),
      (e[(e.MARKER_SYMBOL_PLUS = 9)] = `MARKER_SYMBOL_PLUS`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  gn = (function (e) {
    return (
      (e[(e.AXIS_POSITION_UNSPECIFIED = 0)] = `AXIS_POSITION_UNSPECIFIED`),
      (e[(e.AXIS_POSITION_LEFT = 1)] = `AXIS_POSITION_LEFT`),
      (e[(e.AXIS_POSITION_RIGHT = 2)] = `AXIS_POSITION_RIGHT`),
      (e[(e.AXIS_POSITION_TOP = 3)] = `AXIS_POSITION_TOP`),
      (e[(e.AXIS_POSITION_BOTTOM = 4)] = `AXIS_POSITION_BOTTOM`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  _n = (function (e) {
    return (
      (e[(e.AXIS_ORIENTATION_UNSPECIFIED = 0)] =
        `AXIS_ORIENTATION_UNSPECIFIED`),
      (e[(e.AXIS_ORIENTATION_MIN_MAX = 1)] = `AXIS_ORIENTATION_MIN_MAX`),
      (e[(e.AXIS_ORIENTATION_MAX_MIN = 2)] = `AXIS_ORIENTATION_MAX_MIN`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  vn = (function (e) {
    return (
      (e[(e.TICK_MARK_UNSPECIFIED = 0)] = `TICK_MARK_UNSPECIFIED`),
      (e[(e.TICK_MARK_NONE = 1)] = `TICK_MARK_NONE`),
      (e[(e.TICK_MARK_INSIDE = 2)] = `TICK_MARK_INSIDE`),
      (e[(e.TICK_MARK_OUTSIDE = 3)] = `TICK_MARK_OUTSIDE`),
      (e[(e.TICK_MARK_CROSS = 4)] = `TICK_MARK_CROSS`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  yn = (function (e) {
    return (
      (e[(e.TICK_LABEL_POSITION_UNSPECIFIED = 0)] =
        `TICK_LABEL_POSITION_UNSPECIFIED`),
      (e[(e.TICK_LABEL_POSITION_HIGH = 1)] = `TICK_LABEL_POSITION_HIGH`),
      (e[(e.TICK_LABEL_POSITION_LOW = 2)] = `TICK_LABEL_POSITION_LOW`),
      (e[(e.TICK_LABEL_POSITION_NEXT_TO = 3)] = `TICK_LABEL_POSITION_NEXT_TO`),
      (e[(e.TICK_LABEL_POSITION_NONE = 4)] = `TICK_LABEL_POSITION_NONE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  bn = (function (e) {
    return (
      (e[(e.CROSS_BETWEEN_UNSPECIFIED = 0)] = `CROSS_BETWEEN_UNSPECIFIED`),
      (e[(e.CROSS_BETWEEN_BETWEEN = 1)] = `CROSS_BETWEEN_BETWEEN`),
      (e[(e.CROSS_BETWEEN_MIDPOINT_CATEGORY = 2)] =
        `CROSS_BETWEEN_MIDPOINT_CATEGORY`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  xn = (function (e) {
    return (
      (e[(e.CROSSES_UNSPECIFIED = 0)] = `CROSSES_UNSPECIFIED`),
      (e[(e.CROSSES_AUTO_ZERO = 1)] = `CROSSES_AUTO_ZERO`),
      (e[(e.CROSSES_MIN = 2)] = `CROSSES_MIN`),
      (e[(e.CROSSES_MAX = 3)] = `CROSSES_MAX`),
      (e[(e.CROSSES_AT = 4)] = `CROSSES_AT`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Sn = (function (e) {
    return (
      (e[(e.CHART_TYPE_UNSPECIFIED = 0)] = `CHART_TYPE_UNSPECIFIED`),
      (e[(e.CHART_TYPE_AREA_3D = 1)] = `CHART_TYPE_AREA_3D`),
      (e[(e.CHART_TYPE_AREA = 2)] = `CHART_TYPE_AREA`),
      (e[(e.CHART_TYPE_BAR_3D = 3)] = `CHART_TYPE_BAR_3D`),
      (e[(e.CHART_TYPE_BAR = 4)] = `CHART_TYPE_BAR`),
      (e[(e.CHART_TYPE_BUBBLE = 5)] = `CHART_TYPE_BUBBLE`),
      (e[(e.CHART_TYPE_DOUGHNUT = 8)] = `CHART_TYPE_DOUGHNUT`),
      (e[(e.CHART_TYPE_LINE_3D = 12)] = `CHART_TYPE_LINE_3D`),
      (e[(e.CHART_TYPE_LINE = 13)] = `CHART_TYPE_LINE`),
      (e[(e.CHART_TYPE_OF_PIE = 14)] = `CHART_TYPE_OF_PIE`),
      (e[(e.CHART_TYPE_PIE_3D = 15)] = `CHART_TYPE_PIE_3D`),
      (e[(e.CHART_TYPE_PIE = 16)] = `CHART_TYPE_PIE`),
      (e[(e.CHART_TYPE_RADAR = 17)] = `CHART_TYPE_RADAR`),
      (e[(e.CHART_TYPE_SCATTER = 18)] = `CHART_TYPE_SCATTER`),
      (e[(e.CHART_TYPE_STOCK = 20)] = `CHART_TYPE_STOCK`),
      (e[(e.CHART_TYPE_SURFACE_3D = 21)] = `CHART_TYPE_SURFACE_3D`),
      (e[(e.CHART_TYPE_SURFACE = 22)] = `CHART_TYPE_SURFACE`),
      (e[(e.CHART_TYPE_MAP = 23)] = `CHART_TYPE_MAP`),
      (e[(e.CHART_TYPE_HISTOGRAM = 24)] = `CHART_TYPE_HISTOGRAM`),
      (e[(e.CHART_TYPE_PARETO = 25)] = `CHART_TYPE_PARETO`),
      (e[(e.CHART_TYPE_BOX_WHISKER = 26)] = `CHART_TYPE_BOX_WHISKER`),
      (e[(e.CHART_TYPE_WATERFALL = 27)] = `CHART_TYPE_WATERFALL`),
      (e[(e.CHART_TYPE_FUNNEL = 28)] = `CHART_TYPE_FUNNEL`),
      (e[(e.CHART_TYPE_TREEMAP = 29)] = `CHART_TYPE_TREEMAP`),
      (e[(e.CHART_TYPE_SUNBURST = 30)] = `CHART_TYPE_SUNBURST`),
      (e[(e.CHART_TYPE_COMBO = 31)] = `CHART_TYPE_COMBO`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Cn = (function (e) {
    return (
      (e[(e.PARENT_LABEL_LAYOUT_UNSPECIFIED = 0)] =
        `PARENT_LABEL_LAYOUT_UNSPECIFIED`),
      (e[(e.PARENT_LABEL_LAYOUT_NONE = 1)] = `PARENT_LABEL_LAYOUT_NONE`),
      (e[(e.PARENT_LABEL_LAYOUT_BANNER = 2)] = `PARENT_LABEL_LAYOUT_BANNER`),
      (e[(e.PARENT_LABEL_LAYOUT_OVERLAPPING = 3)] =
        `PARENT_LABEL_LAYOUT_OVERLAPPING`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  wn = (function (e) {
    return (
      (e[(e.QUARTILE_METHOD_UNSPECIFIED = 0)] = `QUARTILE_METHOD_UNSPECIFIED`),
      (e[(e.QUARTILE_METHOD_INCLUSIVE = 1)] = `QUARTILE_METHOD_INCLUSIVE`),
      (e[(e.QUARTILE_METHOD_EXCLUSIVE = 2)] = `QUARTILE_METHOD_EXCLUSIVE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Tn = (function (e) {
    return (
      (e[(e.INTERVAL_CLOSED_UNSPECIFIED = 0)] = `INTERVAL_CLOSED_UNSPECIFIED`),
      (e[(e.INTERVAL_CLOSED_LEFT = 1)] = `INTERVAL_CLOSED_LEFT`),
      (e[(e.INTERVAL_CLOSED_RIGHT = 2)] = `INTERVAL_CLOSED_RIGHT`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({});
function En() {
  return {
    title: ``,
    categories: [],
    series: [],
    bbox: void 0,
    type: 0,
    styleIndex: 0,
    id: ``,
    xAxis: void 0,
    yAxis: void 0,
    barDirection: 0,
    hasLegend: !1,
    legend: void 0,
    titleTextStyle: void 0,
    dataLabels: void 0,
    chartFill: void 0,
    chartLine: void 0,
    chartSpaceFill: void 0,
    chartSpaceLine: void 0,
    roundedCorners: void 0,
    plotAreaFill: void 0,
    plotAreaLine: void 0,
    pivot: void 0,
    pivotOptions: void 0,
    pivotFormats: [],
    mapOptions: void 0,
    style: void 0,
    displayBlanksAs: void 0,
    showDlblsOverMax: void 0,
    view3d: void 0,
    barOptions: void 0,
    lineOptions: void 0,
    areaOptions: void 0,
    pieOptions: void 0,
    ofPieOptions: void 0,
    doughnutOptions: void 0,
    scatterOptions: void 0,
    bubbleOptions: void 0,
    radarOptions: void 0,
    surfaceOptions: void 0,
    treemapOptions: void 0,
    boxWhiskerOptions: void 0,
    histogramOptions: void 0,
    waterfallOptions: void 0,
    funnelOptions: void 0,
  };
}
var O = {
  encode(e, t = new f()) {
    e.title !== `` && t.uint32(10).string(e.title);
    for (let n of e.categories) t.uint32(18).string(n);
    for (let n of e.series) Mn.encode(n, t.uint32(26).fork()).join();
    (e.bbox !== void 0 && m.encode(e.bbox, t.uint32(34).fork()).join(),
      e.type !== 0 && t.uint32(40).int32(e.type),
      e.styleIndex !== 0 && t.uint32(48).int32(e.styleIndex),
      e.id !== `` && t.uint32(58).string(e.id),
      e.xAxis !== void 0 && k.encode(e.xAxis, t.uint32(66).fork()).join(),
      e.yAxis !== void 0 && k.encode(e.yAxis, t.uint32(74).fork()).join(),
      e.barDirection !== 0 && t.uint32(80).int32(e.barDirection),
      e.hasLegend !== !1 && t.uint32(88).bool(e.hasLegend),
      e.legend !== void 0 && On.encode(e.legend, t.uint32(98).fork()).join(),
      e.titleTextStyle !== void 0 &&
        b.encode(e.titleTextStyle, t.uint32(106).fork()).join(),
      e.dataLabels !== void 0 &&
        A.encode(e.dataLabels, t.uint32(114).fork()).join(),
      e.chartFill !== void 0 &&
        v.encode(e.chartFill, t.uint32(122).fork()).join(),
      e.chartLine !== void 0 &&
        C.encode(e.chartLine, t.uint32(130).fork()).join(),
      e.chartSpaceFill !== void 0 &&
        v.encode(e.chartSpaceFill, t.uint32(194).fork()).join(),
      e.chartSpaceLine !== void 0 &&
        C.encode(e.chartSpaceLine, t.uint32(202).fork()).join(),
      e.roundedCorners !== void 0 && t.uint32(208).bool(e.roundedCorners),
      e.plotAreaFill !== void 0 &&
        v.encode(e.plotAreaFill, t.uint32(138).fork()).join(),
      e.plotAreaLine !== void 0 &&
        C.encode(e.plotAreaLine, t.uint32(146).fork()).join(),
      e.pivot !== void 0 && Ar.encode(e.pivot, t.uint32(154).fork()).join(),
      e.pivotOptions !== void 0 &&
        Mr.encode(e.pivotOptions, t.uint32(162).fork()).join());
    for (let n of e.pivotFormats) Pr.encode(n, t.uint32(170).fork()).join();
    return (
      e.mapOptions !== void 0 &&
        fr.encode(e.mapOptions, t.uint32(178).fork()).join(),
      e.style !== void 0 && Er.encode(e.style, t.uint32(186).fork()).join(),
      e.displayBlanksAs !== void 0 && t.uint32(224).int32(e.displayBlanksAs),
      e.showDlblsOverMax !== void 0 && t.uint32(232).bool(e.showDlblsOverMax),
      e.view3d !== void 0 && Rr.encode(e.view3d, t.uint32(330).fork()).join(),
      e.barOptions !== void 0 &&
        An.encode(e.barOptions, t.uint32(402).fork()).join(),
      e.lineOptions !== void 0 &&
        Hn.encode(e.lineOptions, t.uint32(410).fork()).join(),
      e.areaOptions !== void 0 &&
        Wn.encode(e.areaOptions, t.uint32(418).fork()).join(),
      e.pieOptions !== void 0 &&
        Kn.encode(e.pieOptions, t.uint32(426).fork()).join(),
      e.ofPieOptions !== void 0 &&
        Jn.encode(e.ofPieOptions, t.uint32(474).fork()).join(),
      e.doughnutOptions !== void 0 &&
        Xn.encode(e.doughnutOptions, t.uint32(434).fork()).join(),
      e.scatterOptions !== void 0 &&
        Qn.encode(e.scatterOptions, t.uint32(442).fork()).join(),
      e.bubbleOptions !== void 0 &&
        er.encode(e.bubbleOptions, t.uint32(450).fork()).join(),
      e.radarOptions !== void 0 &&
        nr.encode(e.radarOptions, t.uint32(458).fork()).join(),
      e.surfaceOptions !== void 0 &&
        ir.encode(e.surfaceOptions, t.uint32(466).fork()).join(),
      e.treemapOptions !== void 0 &&
        gr.encode(e.treemapOptions, t.uint32(354).fork()).join(),
      e.boxWhiskerOptions !== void 0 &&
        vr.encode(e.boxWhiskerOptions, t.uint32(362).fork()).join(),
      e.histogramOptions !== void 0 &&
        br.encode(e.histogramOptions, t.uint32(370).fork()).join(),
      e.waterfallOptions !== void 0 &&
        Sr.encode(e.waterfallOptions, t.uint32(378).fork()).join(),
      e.funnelOptions !== void 0 &&
        wr.encode(e.funnelOptions, t.uint32(386).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = En();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.title = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.categories.push(n.string());
          continue;
        case 3:
          if (e !== 26) break;
          i.series.push(Mn.decode(n, n.uint32()));
          continue;
        case 4:
          if (e !== 34) break;
          i.bbox = m.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 40) break;
          i.type = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.styleIndex = n.int32();
          continue;
        case 7:
          if (e !== 58) break;
          i.id = n.string();
          continue;
        case 8:
          if (e !== 66) break;
          i.xAxis = k.decode(n, n.uint32());
          continue;
        case 9:
          if (e !== 74) break;
          i.yAxis = k.decode(n, n.uint32());
          continue;
        case 10:
          if (e !== 80) break;
          i.barDirection = n.int32();
          continue;
        case 11:
          if (e !== 88) break;
          i.hasLegend = n.bool();
          continue;
        case 12:
          if (e !== 98) break;
          i.legend = On.decode(n, n.uint32());
          continue;
        case 13:
          if (e !== 106) break;
          i.titleTextStyle = b.decode(n, n.uint32());
          continue;
        case 14:
          if (e !== 114) break;
          i.dataLabels = A.decode(n, n.uint32());
          continue;
        case 15:
          if (e !== 122) break;
          i.chartFill = v.decode(n, n.uint32());
          continue;
        case 16:
          if (e !== 130) break;
          i.chartLine = C.decode(n, n.uint32());
          continue;
        case 24:
          if (e !== 194) break;
          i.chartSpaceFill = v.decode(n, n.uint32());
          continue;
        case 25:
          if (e !== 202) break;
          i.chartSpaceLine = C.decode(n, n.uint32());
          continue;
        case 26:
          if (e !== 208) break;
          i.roundedCorners = n.bool();
          continue;
        case 17:
          if (e !== 138) break;
          i.plotAreaFill = v.decode(n, n.uint32());
          continue;
        case 18:
          if (e !== 146) break;
          i.plotAreaLine = C.decode(n, n.uint32());
          continue;
        case 19:
          if (e !== 154) break;
          i.pivot = Ar.decode(n, n.uint32());
          continue;
        case 20:
          if (e !== 162) break;
          i.pivotOptions = Mr.decode(n, n.uint32());
          continue;
        case 21:
          if (e !== 170) break;
          i.pivotFormats.push(Pr.decode(n, n.uint32()));
          continue;
        case 22:
          if (e !== 178) break;
          i.mapOptions = fr.decode(n, n.uint32());
          continue;
        case 23:
          if (e !== 186) break;
          i.style = Er.decode(n, n.uint32());
          continue;
        case 28:
          if (e !== 224) break;
          i.displayBlanksAs = n.int32();
          continue;
        case 29:
          if (e !== 232) break;
          i.showDlblsOverMax = n.bool();
          continue;
        case 41:
          if (e !== 330) break;
          i.view3d = Rr.decode(n, n.uint32());
          continue;
        case 50:
          if (e !== 402) break;
          i.barOptions = An.decode(n, n.uint32());
          continue;
        case 51:
          if (e !== 410) break;
          i.lineOptions = Hn.decode(n, n.uint32());
          continue;
        case 52:
          if (e !== 418) break;
          i.areaOptions = Wn.decode(n, n.uint32());
          continue;
        case 53:
          if (e !== 426) break;
          i.pieOptions = Kn.decode(n, n.uint32());
          continue;
        case 59:
          if (e !== 474) break;
          i.ofPieOptions = Jn.decode(n, n.uint32());
          continue;
        case 54:
          if (e !== 434) break;
          i.doughnutOptions = Xn.decode(n, n.uint32());
          continue;
        case 55:
          if (e !== 442) break;
          i.scatterOptions = Qn.decode(n, n.uint32());
          continue;
        case 56:
          if (e !== 450) break;
          i.bubbleOptions = er.decode(n, n.uint32());
          continue;
        case 57:
          if (e !== 458) break;
          i.radarOptions = nr.decode(n, n.uint32());
          continue;
        case 58:
          if (e !== 466) break;
          i.surfaceOptions = ir.decode(n, n.uint32());
          continue;
        case 44:
          if (e !== 354) break;
          i.treemapOptions = gr.decode(n, n.uint32());
          continue;
        case 45:
          if (e !== 362) break;
          i.boxWhiskerOptions = vr.decode(n, n.uint32());
          continue;
        case 46:
          if (e !== 370) break;
          i.histogramOptions = br.decode(n, n.uint32());
          continue;
        case 47:
          if (e !== 378) break;
          i.waterfallOptions = Sr.decode(n, n.uint32());
          continue;
        case 48:
          if (e !== 386) break;
          i.funnelOptions = wr.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return O.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = En();
    return (
      (t.title = e.title ?? ``),
      (t.categories = e.categories?.map((e) => e) || []),
      (t.series = e.series?.map((e) => Mn.fromPartial(e)) || []),
      (t.bbox =
        e.bbox !== void 0 && e.bbox !== null ? m.fromPartial(e.bbox) : void 0),
      (t.type = e.type ?? 0),
      (t.styleIndex = e.styleIndex ?? 0),
      (t.id = e.id ?? ``),
      (t.xAxis =
        e.xAxis !== void 0 && e.xAxis !== null
          ? k.fromPartial(e.xAxis)
          : void 0),
      (t.yAxis =
        e.yAxis !== void 0 && e.yAxis !== null
          ? k.fromPartial(e.yAxis)
          : void 0),
      (t.barDirection = e.barDirection ?? 0),
      (t.hasLegend = e.hasLegend ?? !1),
      (t.legend =
        e.legend !== void 0 && e.legend !== null
          ? On.fromPartial(e.legend)
          : void 0),
      (t.titleTextStyle =
        e.titleTextStyle !== void 0 && e.titleTextStyle !== null
          ? b.fromPartial(e.titleTextStyle)
          : void 0),
      (t.dataLabels =
        e.dataLabels !== void 0 && e.dataLabels !== null
          ? A.fromPartial(e.dataLabels)
          : void 0),
      (t.chartFill =
        e.chartFill !== void 0 && e.chartFill !== null
          ? v.fromPartial(e.chartFill)
          : void 0),
      (t.chartLine =
        e.chartLine !== void 0 && e.chartLine !== null
          ? C.fromPartial(e.chartLine)
          : void 0),
      (t.chartSpaceFill =
        e.chartSpaceFill !== void 0 && e.chartSpaceFill !== null
          ? v.fromPartial(e.chartSpaceFill)
          : void 0),
      (t.chartSpaceLine =
        e.chartSpaceLine !== void 0 && e.chartSpaceLine !== null
          ? C.fromPartial(e.chartSpaceLine)
          : void 0),
      (t.roundedCorners = e.roundedCorners ?? void 0),
      (t.plotAreaFill =
        e.plotAreaFill !== void 0 && e.plotAreaFill !== null
          ? v.fromPartial(e.plotAreaFill)
          : void 0),
      (t.plotAreaLine =
        e.plotAreaLine !== void 0 && e.plotAreaLine !== null
          ? C.fromPartial(e.plotAreaLine)
          : void 0),
      (t.pivot =
        e.pivot !== void 0 && e.pivot !== null
          ? Ar.fromPartial(e.pivot)
          : void 0),
      (t.pivotOptions =
        e.pivotOptions !== void 0 && e.pivotOptions !== null
          ? Mr.fromPartial(e.pivotOptions)
          : void 0),
      (t.pivotFormats = e.pivotFormats?.map((e) => Pr.fromPartial(e)) || []),
      (t.mapOptions =
        e.mapOptions !== void 0 && e.mapOptions !== null
          ? fr.fromPartial(e.mapOptions)
          : void 0),
      (t.style =
        e.style !== void 0 && e.style !== null
          ? Er.fromPartial(e.style)
          : void 0),
      (t.displayBlanksAs = e.displayBlanksAs ?? void 0),
      (t.showDlblsOverMax = e.showDlblsOverMax ?? void 0),
      (t.view3d =
        e.view3d !== void 0 && e.view3d !== null
          ? Rr.fromPartial(e.view3d)
          : void 0),
      (t.barOptions =
        e.barOptions !== void 0 && e.barOptions !== null
          ? An.fromPartial(e.barOptions)
          : void 0),
      (t.lineOptions =
        e.lineOptions !== void 0 && e.lineOptions !== null
          ? Hn.fromPartial(e.lineOptions)
          : void 0),
      (t.areaOptions =
        e.areaOptions !== void 0 && e.areaOptions !== null
          ? Wn.fromPartial(e.areaOptions)
          : void 0),
      (t.pieOptions =
        e.pieOptions !== void 0 && e.pieOptions !== null
          ? Kn.fromPartial(e.pieOptions)
          : void 0),
      (t.ofPieOptions =
        e.ofPieOptions !== void 0 && e.ofPieOptions !== null
          ? Jn.fromPartial(e.ofPieOptions)
          : void 0),
      (t.doughnutOptions =
        e.doughnutOptions !== void 0 && e.doughnutOptions !== null
          ? Xn.fromPartial(e.doughnutOptions)
          : void 0),
      (t.scatterOptions =
        e.scatterOptions !== void 0 && e.scatterOptions !== null
          ? Qn.fromPartial(e.scatterOptions)
          : void 0),
      (t.bubbleOptions =
        e.bubbleOptions !== void 0 && e.bubbleOptions !== null
          ? er.fromPartial(e.bubbleOptions)
          : void 0),
      (t.radarOptions =
        e.radarOptions !== void 0 && e.radarOptions !== null
          ? nr.fromPartial(e.radarOptions)
          : void 0),
      (t.surfaceOptions =
        e.surfaceOptions !== void 0 && e.surfaceOptions !== null
          ? ir.fromPartial(e.surfaceOptions)
          : void 0),
      (t.treemapOptions =
        e.treemapOptions !== void 0 && e.treemapOptions !== null
          ? gr.fromPartial(e.treemapOptions)
          : void 0),
      (t.boxWhiskerOptions =
        e.boxWhiskerOptions !== void 0 && e.boxWhiskerOptions !== null
          ? vr.fromPartial(e.boxWhiskerOptions)
          : void 0),
      (t.histogramOptions =
        e.histogramOptions !== void 0 && e.histogramOptions !== null
          ? br.fromPartial(e.histogramOptions)
          : void 0),
      (t.waterfallOptions =
        e.waterfallOptions !== void 0 && e.waterfallOptions !== null
          ? Sr.fromPartial(e.waterfallOptions)
          : void 0),
      (t.funnelOptions =
        e.funnelOptions !== void 0 && e.funnelOptions !== null
          ? wr.fromPartial(e.funnelOptions)
          : void 0),
      t
    );
  },
};
function Dn() {
  return {
    position: 0,
    overlay: void 0,
    textStyle: void 0,
    fill: void 0,
    stroke: void 0,
  };
}
var On = {
  encode(e, t = new f()) {
    return (
      e.position !== 0 && t.uint32(8).int32(e.position),
      e.overlay !== void 0 && t.uint32(16).bool(e.overlay),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(26).fork()).join(),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(34).fork()).join(),
      e.stroke !== void 0 && C.encode(e.stroke, t.uint32(42).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Dn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.position = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.overlay = n.bool();
          continue;
        case 3:
          if (e !== 26) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.stroke = C.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return On.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Dn();
    return (
      (t.position = e.position ?? 0),
      (t.overlay = e.overlay ?? void 0),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.stroke =
        e.stroke !== void 0 && e.stroke !== null
          ? C.fromPartial(e.stroke)
          : void 0),
      t
    );
  },
};
function kn() {
  return {
    direction: void 0,
    grouping: void 0,
    varyColors: void 0,
    gapWidth: void 0,
    overlap: void 0,
    gapDepth: void 0,
    bar3dShape: void 0,
  };
}
var An = {
  encode(e, t = new f()) {
    return (
      e.direction !== void 0 && t.uint32(8).int32(e.direction),
      e.grouping !== void 0 && t.uint32(16).int32(e.grouping),
      e.varyColors !== void 0 && t.uint32(24).bool(e.varyColors),
      e.gapWidth !== void 0 && t.uint32(32).uint32(e.gapWidth),
      e.overlap !== void 0 && t.uint32(40).sint32(e.overlap),
      e.gapDepth !== void 0 && t.uint32(48).uint32(e.gapDepth),
      e.bar3dShape !== void 0 && t.uint32(56).int32(e.bar3dShape),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = kn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.direction = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.grouping = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.varyColors = n.bool();
          continue;
        case 4:
          if (e !== 32) break;
          i.gapWidth = n.uint32();
          continue;
        case 5:
          if (e !== 40) break;
          i.overlap = n.sint32();
          continue;
        case 6:
          if (e !== 48) break;
          i.gapDepth = n.uint32();
          continue;
        case 7:
          if (e !== 56) break;
          i.bar3dShape = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return An.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = kn();
    return (
      (t.direction = e.direction ?? void 0),
      (t.grouping = e.grouping ?? void 0),
      (t.varyColors = e.varyColors ?? void 0),
      (t.gapWidth = e.gapWidth ?? void 0),
      (t.overlap = e.overlap ?? void 0),
      (t.gapDepth = e.gapDepth ?? void 0),
      (t.bar3dShape = e.bar3dShape ?? void 0),
      t
    );
  },
};
function jn() {
  return {
    id: void 0,
    name: ``,
    values: [],
    formula: ``,
    stringCache: ``,
    categories: [],
    categoryFormula: ``,
    fill: void 0,
    stroke: void 0,
    points: [],
    valuesFormatCode: void 0,
    categoryFormatCode: void 0,
    invertIfNegative: void 0,
    uniqueId: void 0,
    explosion: void 0,
    marker: void 0,
    xValues: [],
    xFormula: ``,
    xValuesFormatCode: void 0,
    bubbleSizes: [],
    bubbleSizeFormula: ``,
    categoryPaths: [],
    dataLabels: void 0,
    dataLabelOverrides: [],
    trendlines: [],
  };
}
var Mn = {
  encode(e, t = new f()) {
    (e.id !== void 0 && t.uint32(66).string(e.id),
      e.name !== `` && t.uint32(10).string(e.name),
      t.uint32(18).fork());
    for (let n of e.values) t.double(n);
    (t.join(),
      e.formula !== `` && t.uint32(26).string(e.formula),
      e.stringCache !== `` && t.uint32(34).string(e.stringCache));
    for (let n of e.categories) t.uint32(42).string(n);
    (e.categoryFormula !== `` && t.uint32(50).string(e.categoryFormula),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(58).fork()).join(),
      e.stroke !== void 0 && C.encode(e.stroke, t.uint32(74).fork()).join());
    for (let n of e.points) or.encode(n, t.uint32(82).fork()).join();
    (e.valuesFormatCode !== void 0 && t.uint32(90).string(e.valuesFormatCode),
      e.categoryFormatCode !== void 0 &&
        t.uint32(98).string(e.categoryFormatCode),
      e.invertIfNegative !== void 0 && t.uint32(104).bool(e.invertIfNegative),
      e.uniqueId !== void 0 && t.uint32(114).string(e.uniqueId),
      e.explosion !== void 0 && t.uint32(120).uint32(e.explosion),
      e.marker !== void 0 && Ir.encode(e.marker, t.uint32(130).fork()).join(),
      t.uint32(138).fork());
    for (let n of e.xValues) t.double(n);
    (t.join(),
      e.xFormula !== `` && t.uint32(146).string(e.xFormula),
      e.xValuesFormatCode !== void 0 &&
        t.uint32(154).string(e.xValuesFormatCode),
      t.uint32(162).fork());
    for (let n of e.bubbleSizes) t.double(n);
    (t.join(),
      e.bubbleSizeFormula !== `` && t.uint32(170).string(e.bubbleSizeFormula));
    for (let n of e.categoryPaths) mr.encode(n, t.uint32(178).fork()).join();
    e.dataLabels !== void 0 &&
      A.encode(e.dataLabels, t.uint32(186).fork()).join();
    for (let n of e.dataLabelOverrides)
      ur.encode(n, t.uint32(194).fork()).join();
    for (let n of e.trendlines) Bn.encode(n, t.uint32(202).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = jn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 8:
          if (e !== 66) break;
          i.id = n.string();
          continue;
        case 1:
          if (e !== 10) break;
          i.name = n.string();
          continue;
        case 2:
          if (e === 17) {
            i.values.push(n.double());
            continue;
          }
          if (e === 18) {
            let e = n.uint32() + n.pos;
            for (; n.pos < e; ) i.values.push(n.double());
            continue;
          }
          break;
        case 3:
          if (e !== 26) break;
          i.formula = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.stringCache = n.string();
          continue;
        case 5:
          if (e !== 42) break;
          i.categories.push(n.string());
          continue;
        case 6:
          if (e !== 50) break;
          i.categoryFormula = n.string();
          continue;
        case 7:
          if (e !== 58) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 9:
          if (e !== 74) break;
          i.stroke = C.decode(n, n.uint32());
          continue;
        case 10:
          if (e !== 82) break;
          i.points.push(or.decode(n, n.uint32()));
          continue;
        case 11:
          if (e !== 90) break;
          i.valuesFormatCode = n.string();
          continue;
        case 12:
          if (e !== 98) break;
          i.categoryFormatCode = n.string();
          continue;
        case 13:
          if (e !== 104) break;
          i.invertIfNegative = n.bool();
          continue;
        case 14:
          if (e !== 114) break;
          i.uniqueId = n.string();
          continue;
        case 15:
          if (e !== 120) break;
          i.explosion = n.uint32();
          continue;
        case 16:
          if (e !== 130) break;
          i.marker = Ir.decode(n, n.uint32());
          continue;
        case 17:
          if (e === 137) {
            i.xValues.push(n.double());
            continue;
          }
          if (e === 138) {
            let e = n.uint32() + n.pos;
            for (; n.pos < e; ) i.xValues.push(n.double());
            continue;
          }
          break;
        case 18:
          if (e !== 146) break;
          i.xFormula = n.string();
          continue;
        case 19:
          if (e !== 154) break;
          i.xValuesFormatCode = n.string();
          continue;
        case 20:
          if (e === 161) {
            i.bubbleSizes.push(n.double());
            continue;
          }
          if (e === 162) {
            let e = n.uint32() + n.pos;
            for (; n.pos < e; ) i.bubbleSizes.push(n.double());
            continue;
          }
          break;
        case 21:
          if (e !== 170) break;
          i.bubbleSizeFormula = n.string();
          continue;
        case 22:
          if (e !== 178) break;
          i.categoryPaths.push(mr.decode(n, n.uint32()));
          continue;
        case 23:
          if (e !== 186) break;
          i.dataLabels = A.decode(n, n.uint32());
          continue;
        case 24:
          if (e !== 194) break;
          i.dataLabelOverrides.push(ur.decode(n, n.uint32()));
          continue;
        case 25:
          if (e !== 202) break;
          i.trendlines.push(Bn.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Mn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = jn();
    return (
      (t.id = e.id ?? void 0),
      (t.name = e.name ?? ``),
      (t.values = e.values?.map((e) => e) || []),
      (t.formula = e.formula ?? ``),
      (t.stringCache = e.stringCache ?? ``),
      (t.categories = e.categories?.map((e) => e) || []),
      (t.categoryFormula = e.categoryFormula ?? ``),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.stroke =
        e.stroke !== void 0 && e.stroke !== null
          ? C.fromPartial(e.stroke)
          : void 0),
      (t.points = e.points?.map((e) => or.fromPartial(e)) || []),
      (t.valuesFormatCode = e.valuesFormatCode ?? void 0),
      (t.categoryFormatCode = e.categoryFormatCode ?? void 0),
      (t.invertIfNegative = e.invertIfNegative ?? void 0),
      (t.uniqueId = e.uniqueId ?? void 0),
      (t.explosion = e.explosion ?? void 0),
      (t.marker =
        e.marker !== void 0 && e.marker !== null
          ? Ir.fromPartial(e.marker)
          : void 0),
      (t.xValues = e.xValues?.map((e) => e) || []),
      (t.xFormula = e.xFormula ?? ``),
      (t.xValuesFormatCode = e.xValuesFormatCode ?? void 0),
      (t.bubbleSizes = e.bubbleSizes?.map((e) => e) || []),
      (t.bubbleSizeFormula = e.bubbleSizeFormula ?? ``),
      (t.categoryPaths = e.categoryPaths?.map((e) => mr.fromPartial(e)) || []),
      (t.dataLabels =
        e.dataLabels !== void 0 && e.dataLabels !== null
          ? A.fromPartial(e.dataLabels)
          : void 0),
      (t.dataLabelOverrides =
        e.dataLabelOverrides?.map((e) => ur.fromPartial(e)) || []),
      (t.trendlines = e.trendlines?.map((e) => Bn.fromPartial(e)) || []),
      t
    );
  },
};
function Nn() {
  return { x: void 0, y: void 0, w: void 0, h: void 0 };
}
var Pn = {
  encode(e, t = new f()) {
    return (
      e.x !== void 0 && t.uint32(9).double(e.x),
      e.y !== void 0 && t.uint32(17).double(e.y),
      e.w !== void 0 && t.uint32(25).double(e.w),
      e.h !== void 0 && t.uint32(33).double(e.h),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Nn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 9) break;
          i.x = n.double();
          continue;
        case 2:
          if (e !== 17) break;
          i.y = n.double();
          continue;
        case 3:
          if (e !== 25) break;
          i.w = n.double();
          continue;
        case 4:
          if (e !== 33) break;
          i.h = n.double();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Pn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Nn();
    return (
      (t.x = e.x ?? void 0),
      (t.y = e.y ?? void 0),
      (t.w = e.w ?? void 0),
      (t.h = e.h ?? void 0),
      t
    );
  },
};
function Fn() {
  return {
    text: void 0,
    numberFormatCode: void 0,
    numberFormatSourceLinked: void 0,
    manualLayout: void 0,
    textStyle: void 0,
    fill: void 0,
    stroke: void 0,
    textRuns: [],
  };
}
var In = {
  encode(e, t = new f()) {
    (e.text !== void 0 && t.uint32(10).string(e.text),
      e.numberFormatCode !== void 0 && t.uint32(18).string(e.numberFormatCode),
      e.numberFormatSourceLinked !== void 0 &&
        t.uint32(24).bool(e.numberFormatSourceLinked),
      e.manualLayout !== void 0 &&
        Pn.encode(e.manualLayout, t.uint32(34).fork()).join(),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(42).fork()).join(),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(50).fork()).join(),
      e.stroke !== void 0 && C.encode(e.stroke, t.uint32(58).fork()).join());
    for (let n of e.textRuns) Rn.encode(n, t.uint32(66).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Fn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.text = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.numberFormatCode = n.string();
          continue;
        case 3:
          if (e !== 24) break;
          i.numberFormatSourceLinked = n.bool();
          continue;
        case 4:
          if (e !== 34) break;
          i.manualLayout = Pn.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 58) break;
          i.stroke = C.decode(n, n.uint32());
          continue;
        case 8:
          if (e !== 66) break;
          i.textRuns.push(Rn.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return In.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Fn();
    return (
      (t.text = e.text ?? void 0),
      (t.numberFormatCode = e.numberFormatCode ?? void 0),
      (t.numberFormatSourceLinked = e.numberFormatSourceLinked ?? void 0),
      (t.manualLayout =
        e.manualLayout !== void 0 && e.manualLayout !== null
          ? Pn.fromPartial(e.manualLayout)
          : void 0),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.stroke =
        e.stroke !== void 0 && e.stroke !== null
          ? C.fromPartial(e.stroke)
          : void 0),
      (t.textRuns = e.textRuns?.map((e) => Rn.fromPartial(e)) || []),
      t
    );
  },
};
function Ln() {
  return { text: ``, textStyle: void 0 };
}
var Rn = {
  encode(e, t = new f()) {
    return (
      e.text !== `` && t.uint32(10).string(e.text),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ln();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.text = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Rn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ln();
    return (
      (t.text = e.text ?? ``),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      t
    );
  },
};
function zn() {
  return {
    type: 0,
    name: void 0,
    order: void 0,
    period: void 0,
    forward: void 0,
    backward: void 0,
    intercept: void 0,
    displayEquation: void 0,
    displayRSquared: void 0,
    stroke: void 0,
    label: void 0,
  };
}
var Bn = {
  encode(e, t = new f()) {
    return (
      e.type !== 0 && t.uint32(8).int32(e.type),
      e.name !== void 0 && t.uint32(18).string(e.name),
      e.order !== void 0 && t.uint32(24).uint32(e.order),
      e.period !== void 0 && t.uint32(32).uint32(e.period),
      e.forward !== void 0 && t.uint32(41).double(e.forward),
      e.backward !== void 0 && t.uint32(49).double(e.backward),
      e.intercept !== void 0 && t.uint32(57).double(e.intercept),
      e.displayEquation !== void 0 && t.uint32(64).bool(e.displayEquation),
      e.displayRSquared !== void 0 && t.uint32(72).bool(e.displayRSquared),
      e.stroke !== void 0 && C.encode(e.stroke, t.uint32(82).fork()).join(),
      e.label !== void 0 && In.encode(e.label, t.uint32(90).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = zn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.type = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.name = n.string();
          continue;
        case 3:
          if (e !== 24) break;
          i.order = n.uint32();
          continue;
        case 4:
          if (e !== 32) break;
          i.period = n.uint32();
          continue;
        case 5:
          if (e !== 41) break;
          i.forward = n.double();
          continue;
        case 6:
          if (e !== 49) break;
          i.backward = n.double();
          continue;
        case 7:
          if (e !== 57) break;
          i.intercept = n.double();
          continue;
        case 8:
          if (e !== 64) break;
          i.displayEquation = n.bool();
          continue;
        case 9:
          if (e !== 72) break;
          i.displayRSquared = n.bool();
          continue;
        case 10:
          if (e !== 82) break;
          i.stroke = C.decode(n, n.uint32());
          continue;
        case 11:
          if (e !== 90) break;
          i.label = In.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Bn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = zn();
    return (
      (t.type = e.type ?? 0),
      (t.name = e.name ?? void 0),
      (t.order = e.order ?? void 0),
      (t.period = e.period ?? void 0),
      (t.forward = e.forward ?? void 0),
      (t.backward = e.backward ?? void 0),
      (t.intercept = e.intercept ?? void 0),
      (t.displayEquation = e.displayEquation ?? void 0),
      (t.displayRSquared = e.displayRSquared ?? void 0),
      (t.stroke =
        e.stroke !== void 0 && e.stroke !== null
          ? C.fromPartial(e.stroke)
          : void 0),
      (t.label =
        e.label !== void 0 && e.label !== null
          ? In.fromPartial(e.label)
          : void 0),
      t
    );
  },
};
function Vn() {
  return { grouping: void 0, smooth: void 0, varyColors: void 0 };
}
var Hn = {
  encode(e, t = new f()) {
    return (
      e.grouping !== void 0 && t.uint32(8).int32(e.grouping),
      e.smooth !== void 0 && t.uint32(16).bool(e.smooth),
      e.varyColors !== void 0 && t.uint32(24).bool(e.varyColors),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Vn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.grouping = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.smooth = n.bool();
          continue;
        case 3:
          if (e !== 24) break;
          i.varyColors = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Hn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Vn();
    return (
      (t.grouping = e.grouping ?? void 0),
      (t.smooth = e.smooth ?? void 0),
      (t.varyColors = e.varyColors ?? void 0),
      t
    );
  },
};
function Un() {
  return { grouping: void 0, varyColors: void 0 };
}
var Wn = {
  encode(e, t = new f()) {
    return (
      e.grouping !== void 0 && t.uint32(8).int32(e.grouping),
      e.varyColors !== void 0 && t.uint32(16).bool(e.varyColors),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Un();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.grouping = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.varyColors = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Wn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Un();
    return (
      (t.grouping = e.grouping ?? void 0),
      (t.varyColors = e.varyColors ?? void 0),
      t
    );
  },
};
function Gn() {
  return { firstSliceAngle: void 0, varyColors: void 0 };
}
var Kn = {
  encode(e, t = new f()) {
    return (
      e.firstSliceAngle !== void 0 && t.uint32(8).uint32(e.firstSliceAngle),
      e.varyColors !== void 0 && t.uint32(16).bool(e.varyColors),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Gn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.firstSliceAngle = n.uint32();
          continue;
        case 2:
          if (e !== 16) break;
          i.varyColors = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Kn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Gn();
    return (
      (t.firstSliceAngle = e.firstSliceAngle ?? void 0),
      (t.varyColors = e.varyColors ?? void 0),
      t
    );
  },
};
function qn() {
  return {
    ofPieType: void 0,
    splitType: void 0,
    splitPosition: void 0,
    gapWidth: void 0,
    secondPieSize: void 0,
    secondaryIndices: [],
    varyColors: void 0,
    serLines: [],
  };
}
var Jn = {
  encode(e, t = new f()) {
    (e.ofPieType !== void 0 && t.uint32(8).int32(e.ofPieType),
      e.splitType !== void 0 && t.uint32(16).int32(e.splitType),
      e.splitPosition !== void 0 && t.uint32(25).double(e.splitPosition),
      e.gapWidth !== void 0 && t.uint32(32).uint32(e.gapWidth),
      e.secondPieSize !== void 0 && t.uint32(40).uint32(e.secondPieSize),
      t.uint32(50).fork());
    for (let n of e.secondaryIndices) t.uint32(n);
    (t.join(), e.varyColors !== void 0 && t.uint32(56).bool(e.varyColors));
    for (let n of e.serLines) C.encode(n, t.uint32(66).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = qn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.ofPieType = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.splitType = n.int32();
          continue;
        case 3:
          if (e !== 25) break;
          i.splitPosition = n.double();
          continue;
        case 4:
          if (e !== 32) break;
          i.gapWidth = n.uint32();
          continue;
        case 5:
          if (e !== 40) break;
          i.secondPieSize = n.uint32();
          continue;
        case 6:
          if (e === 48) {
            i.secondaryIndices.push(n.uint32());
            continue;
          }
          if (e === 50) {
            let e = n.uint32() + n.pos;
            for (; n.pos < e; ) i.secondaryIndices.push(n.uint32());
            continue;
          }
          break;
        case 7:
          if (e !== 56) break;
          i.varyColors = n.bool();
          continue;
        case 8:
          if (e !== 66) break;
          i.serLines.push(C.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Jn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = qn();
    return (
      (t.ofPieType = e.ofPieType ?? void 0),
      (t.splitType = e.splitType ?? void 0),
      (t.splitPosition = e.splitPosition ?? void 0),
      (t.gapWidth = e.gapWidth ?? void 0),
      (t.secondPieSize = e.secondPieSize ?? void 0),
      (t.secondaryIndices = e.secondaryIndices?.map((e) => e) || []),
      (t.varyColors = e.varyColors ?? void 0),
      (t.serLines = e.serLines?.map((e) => C.fromPartial(e)) || []),
      t
    );
  },
};
function Yn() {
  return { holeSize: void 0, firstSliceAngle: void 0, varyColors: void 0 };
}
var Xn = {
  encode(e, t = new f()) {
    return (
      e.holeSize !== void 0 && t.uint32(8).uint32(e.holeSize),
      e.firstSliceAngle !== void 0 && t.uint32(16).uint32(e.firstSliceAngle),
      e.varyColors !== void 0 && t.uint32(24).bool(e.varyColors),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Yn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.holeSize = n.uint32();
          continue;
        case 2:
          if (e !== 16) break;
          i.firstSliceAngle = n.uint32();
          continue;
        case 3:
          if (e !== 24) break;
          i.varyColors = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Xn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Yn();
    return (
      (t.holeSize = e.holeSize ?? void 0),
      (t.firstSliceAngle = e.firstSliceAngle ?? void 0),
      (t.varyColors = e.varyColors ?? void 0),
      t
    );
  },
};
function Zn() {
  return { style: void 0, varyColors: void 0 };
}
var Qn = {
  encode(e, t = new f()) {
    return (
      e.style !== void 0 && t.uint32(8).int32(e.style),
      e.varyColors !== void 0 && t.uint32(16).bool(e.varyColors),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Zn();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.style = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.varyColors = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Qn.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Zn();
    return (
      (t.style = e.style ?? void 0),
      (t.varyColors = e.varyColors ?? void 0),
      t
    );
  },
};
function $n() {
  return {
    is3d: void 0,
    scale: void 0,
    showNegative: void 0,
    varyColors: void 0,
  };
}
var er = {
  encode(e, t = new f()) {
    return (
      e.is3d !== void 0 && t.uint32(8).bool(e.is3d),
      e.scale !== void 0 && t.uint32(16).uint32(e.scale),
      e.showNegative !== void 0 && t.uint32(24).bool(e.showNegative),
      e.varyColors !== void 0 && t.uint32(32).bool(e.varyColors),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = $n();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.is3d = n.bool();
          continue;
        case 2:
          if (e !== 16) break;
          i.scale = n.uint32();
          continue;
        case 3:
          if (e !== 24) break;
          i.showNegative = n.bool();
          continue;
        case 4:
          if (e !== 32) break;
          i.varyColors = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return er.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = $n();
    return (
      (t.is3d = e.is3d ?? void 0),
      (t.scale = e.scale ?? void 0),
      (t.showNegative = e.showNegative ?? void 0),
      (t.varyColors = e.varyColors ?? void 0),
      t
    );
  },
};
function tr() {
  return { style: void 0, varyColors: void 0 };
}
var nr = {
  encode(e, t = new f()) {
    return (
      e.style !== void 0 && t.uint32(8).int32(e.style),
      e.varyColors !== void 0 && t.uint32(16).bool(e.varyColors),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = tr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.style = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.varyColors = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return nr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = tr();
    return (
      (t.style = e.style ?? void 0),
      (t.varyColors = e.varyColors ?? void 0),
      t
    );
  },
};
function rr() {
  return { wireframe: void 0 };
}
var ir = {
  encode(e, t = new f()) {
    return (e.wireframe !== void 0 && t.uint32(8).bool(e.wireframe), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = rr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.wireframe = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ir.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = rr();
    return ((t.wireframe = e.wireframe ?? void 0), t);
  },
};
function ar() {
  return { idx: 0, fill: void 0, stroke: void 0, explosion: void 0 };
}
var or = {
  encode(e, t = new f()) {
    return (
      e.idx !== 0 && t.uint32(8).int32(e.idx),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(18).fork()).join(),
      e.stroke !== void 0 && C.encode(e.stroke, t.uint32(26).fork()).join(),
      e.explosion !== void 0 && t.uint32(32).uint32(e.explosion),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ar();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.idx = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.stroke = C.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 32) break;
          i.explosion = n.uint32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return or.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ar();
    return (
      (t.idx = e.idx ?? 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.stroke =
        e.stroke !== void 0 && e.stroke !== null
          ? C.fromPartial(e.stroke)
          : void 0),
      (t.explosion = e.explosion ?? void 0),
      t
    );
  },
};
function sr() {
  return {
    textStyle: void 0,
    line: void 0,
    min: void 0,
    max: void 0,
    majorGridlines: void 0,
    minorGridlines: void 0,
    numberFormatCode: void 0,
    numberFormatSourceLinked: void 0,
    majorUnit: void 0,
    minorUnit: void 0,
    position: void 0,
    orientation: void 0,
    majorTickMark: void 0,
    minorTickMark: void 0,
    tickLabelPosition: void 0,
    crossBetween: void 0,
    crosses: void 0,
    crossValue: void 0,
    deleted: void 0,
    title: void 0,
    titleTextStyle: void 0,
  };
}
var k = {
  encode(e, t = new f()) {
    return (
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(10).fork()).join(),
      e.line !== void 0 && C.encode(e.line, t.uint32(18).fork()).join(),
      e.min !== void 0 && t.uint32(25).double(e.min),
      e.max !== void 0 && t.uint32(33).double(e.max),
      e.majorGridlines !== void 0 &&
        C.encode(e.majorGridlines, t.uint32(42).fork()).join(),
      e.minorGridlines !== void 0 &&
        C.encode(e.minorGridlines, t.uint32(50).fork()).join(),
      e.numberFormatCode !== void 0 && t.uint32(58).string(e.numberFormatCode),
      e.numberFormatSourceLinked !== void 0 &&
        t.uint32(168).bool(e.numberFormatSourceLinked),
      e.majorUnit !== void 0 && t.uint32(65).double(e.majorUnit),
      e.minorUnit !== void 0 && t.uint32(73).double(e.minorUnit),
      e.position !== void 0 && t.uint32(80).int32(e.position),
      e.orientation !== void 0 && t.uint32(88).int32(e.orientation),
      e.majorTickMark !== void 0 && t.uint32(96).int32(e.majorTickMark),
      e.minorTickMark !== void 0 && t.uint32(104).int32(e.minorTickMark),
      e.tickLabelPosition !== void 0 &&
        t.uint32(112).int32(e.tickLabelPosition),
      e.crossBetween !== void 0 && t.uint32(120).int32(e.crossBetween),
      e.crosses !== void 0 && t.uint32(128).int32(e.crosses),
      e.crossValue !== void 0 && t.uint32(137).double(e.crossValue),
      e.deleted !== void 0 && t.uint32(144).bool(e.deleted),
      e.title !== void 0 && t.uint32(154).string(e.title),
      e.titleTextStyle !== void 0 &&
        b.encode(e.titleTextStyle, t.uint32(162).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = sr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.line = C.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 25) break;
          i.min = n.double();
          continue;
        case 4:
          if (e !== 33) break;
          i.max = n.double();
          continue;
        case 5:
          if (e !== 42) break;
          i.majorGridlines = C.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.minorGridlines = C.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 58) break;
          i.numberFormatCode = n.string();
          continue;
        case 21:
          if (e !== 168) break;
          i.numberFormatSourceLinked = n.bool();
          continue;
        case 8:
          if (e !== 65) break;
          i.majorUnit = n.double();
          continue;
        case 9:
          if (e !== 73) break;
          i.minorUnit = n.double();
          continue;
        case 10:
          if (e !== 80) break;
          i.position = n.int32();
          continue;
        case 11:
          if (e !== 88) break;
          i.orientation = n.int32();
          continue;
        case 12:
          if (e !== 96) break;
          i.majorTickMark = n.int32();
          continue;
        case 13:
          if (e !== 104) break;
          i.minorTickMark = n.int32();
          continue;
        case 14:
          if (e !== 112) break;
          i.tickLabelPosition = n.int32();
          continue;
        case 15:
          if (e !== 120) break;
          i.crossBetween = n.int32();
          continue;
        case 16:
          if (e !== 128) break;
          i.crosses = n.int32();
          continue;
        case 17:
          if (e !== 137) break;
          i.crossValue = n.double();
          continue;
        case 18:
          if (e !== 144) break;
          i.deleted = n.bool();
          continue;
        case 19:
          if (e !== 154) break;
          i.title = n.string();
          continue;
        case 20:
          if (e !== 162) break;
          i.titleTextStyle = b.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return k.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = sr();
    return (
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.line =
        e.line !== void 0 && e.line !== null ? C.fromPartial(e.line) : void 0),
      (t.min = e.min ?? void 0),
      (t.max = e.max ?? void 0),
      (t.majorGridlines =
        e.majorGridlines !== void 0 && e.majorGridlines !== null
          ? C.fromPartial(e.majorGridlines)
          : void 0),
      (t.minorGridlines =
        e.minorGridlines !== void 0 && e.minorGridlines !== null
          ? C.fromPartial(e.minorGridlines)
          : void 0),
      (t.numberFormatCode = e.numberFormatCode ?? void 0),
      (t.numberFormatSourceLinked = e.numberFormatSourceLinked ?? void 0),
      (t.majorUnit = e.majorUnit ?? void 0),
      (t.minorUnit = e.minorUnit ?? void 0),
      (t.position = e.position ?? void 0),
      (t.orientation = e.orientation ?? void 0),
      (t.majorTickMark = e.majorTickMark ?? void 0),
      (t.minorTickMark = e.minorTickMark ?? void 0),
      (t.tickLabelPosition = e.tickLabelPosition ?? void 0),
      (t.crossBetween = e.crossBetween ?? void 0),
      (t.crosses = e.crosses ?? void 0),
      (t.crossValue = e.crossValue ?? void 0),
      (t.deleted = e.deleted ?? void 0),
      (t.title = e.title ?? void 0),
      (t.titleTextStyle =
        e.titleTextStyle !== void 0 && e.titleTextStyle !== null
          ? b.fromPartial(e.titleTextStyle)
          : void 0),
      t
    );
  },
};
function cr() {
  return {
    showValue: !1,
    position: 0,
    textStyle: void 0,
    leaderLine: void 0,
    fill: void 0,
    stroke: void 0,
    showCategoryName: !1,
    showSeriesName: !1,
    showLegendKey: !1,
    showPercent: !1,
    showBubbleSize: !1,
    showLeaderLines: !1,
    showFlagsPresentMask: void 0,
    showDataLabelsRange: void 0,
    dataLabelsRangeFormula: void 0,
  };
}
var A = {
  encode(e, t = new f()) {
    return (
      e.showValue !== !1 && t.uint32(8).bool(e.showValue),
      e.position !== 0 && t.uint32(16).int32(e.position),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(26).fork()).join(),
      e.leaderLine !== void 0 &&
        C.encode(e.leaderLine, t.uint32(34).fork()).join(),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(42).fork()).join(),
      e.stroke !== void 0 && C.encode(e.stroke, t.uint32(50).fork()).join(),
      e.showCategoryName !== !1 && t.uint32(56).bool(e.showCategoryName),
      e.showSeriesName !== !1 && t.uint32(64).bool(e.showSeriesName),
      e.showLegendKey !== !1 && t.uint32(72).bool(e.showLegendKey),
      e.showPercent !== !1 && t.uint32(80).bool(e.showPercent),
      e.showBubbleSize !== !1 && t.uint32(88).bool(e.showBubbleSize),
      e.showLeaderLines !== !1 && t.uint32(96).bool(e.showLeaderLines),
      e.showFlagsPresentMask !== void 0 &&
        t.uint32(120).uint32(e.showFlagsPresentMask),
      e.showDataLabelsRange !== void 0 &&
        t.uint32(104).bool(e.showDataLabelsRange),
      e.dataLabelsRangeFormula !== void 0 &&
        t.uint32(114).string(e.dataLabelsRangeFormula),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = cr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.showValue = n.bool();
          continue;
        case 2:
          if (e !== 16) break;
          i.position = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.leaderLine = C.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.stroke = C.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 56) break;
          i.showCategoryName = n.bool();
          continue;
        case 8:
          if (e !== 64) break;
          i.showSeriesName = n.bool();
          continue;
        case 9:
          if (e !== 72) break;
          i.showLegendKey = n.bool();
          continue;
        case 10:
          if (e !== 80) break;
          i.showPercent = n.bool();
          continue;
        case 11:
          if (e !== 88) break;
          i.showBubbleSize = n.bool();
          continue;
        case 12:
          if (e !== 96) break;
          i.showLeaderLines = n.bool();
          continue;
        case 15:
          if (e !== 120) break;
          i.showFlagsPresentMask = n.uint32();
          continue;
        case 13:
          if (e !== 104) break;
          i.showDataLabelsRange = n.bool();
          continue;
        case 14:
          if (e !== 114) break;
          i.dataLabelsRangeFormula = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return A.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = cr();
    return (
      (t.showValue = e.showValue ?? !1),
      (t.position = e.position ?? 0),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.leaderLine =
        e.leaderLine !== void 0 && e.leaderLine !== null
          ? C.fromPartial(e.leaderLine)
          : void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.stroke =
        e.stroke !== void 0 && e.stroke !== null
          ? C.fromPartial(e.stroke)
          : void 0),
      (t.showCategoryName = e.showCategoryName ?? !1),
      (t.showSeriesName = e.showSeriesName ?? !1),
      (t.showLegendKey = e.showLegendKey ?? !1),
      (t.showPercent = e.showPercent ?? !1),
      (t.showBubbleSize = e.showBubbleSize ?? !1),
      (t.showLeaderLines = e.showLeaderLines ?? !1),
      (t.showFlagsPresentMask = e.showFlagsPresentMask ?? void 0),
      (t.showDataLabelsRange = e.showDataLabelsRange ?? void 0),
      (t.dataLabelsRangeFormula = e.dataLabelsRangeFormula ?? void 0),
      t
    );
  },
};
function lr() {
  return {
    idx: 0,
    text: void 0,
    position: void 0,
    textStyle: void 0,
    fill: void 0,
    stroke: void 0,
    showValue: void 0,
    showCategoryName: void 0,
    showSeriesName: void 0,
    showLegendKey: void 0,
    showPercent: void 0,
    showBubbleSize: void 0,
  };
}
var ur = {
  encode(e, t = new f()) {
    return (
      e.idx !== 0 && t.uint32(8).int32(e.idx),
      e.text !== void 0 && t.uint32(18).string(e.text),
      e.position !== void 0 && t.uint32(24).int32(e.position),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(34).fork()).join(),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(42).fork()).join(),
      e.stroke !== void 0 && C.encode(e.stroke, t.uint32(50).fork()).join(),
      e.showValue !== void 0 && t.uint32(56).bool(e.showValue),
      e.showCategoryName !== void 0 && t.uint32(64).bool(e.showCategoryName),
      e.showSeriesName !== void 0 && t.uint32(72).bool(e.showSeriesName),
      e.showLegendKey !== void 0 && t.uint32(80).bool(e.showLegendKey),
      e.showPercent !== void 0 && t.uint32(88).bool(e.showPercent),
      e.showBubbleSize !== void 0 && t.uint32(96).bool(e.showBubbleSize),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = lr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.idx = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.text = n.string();
          continue;
        case 3:
          if (e !== 24) break;
          i.position = n.int32();
          continue;
        case 4:
          if (e !== 34) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.stroke = C.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 56) break;
          i.showValue = n.bool();
          continue;
        case 8:
          if (e !== 64) break;
          i.showCategoryName = n.bool();
          continue;
        case 9:
          if (e !== 72) break;
          i.showSeriesName = n.bool();
          continue;
        case 10:
          if (e !== 80) break;
          i.showLegendKey = n.bool();
          continue;
        case 11:
          if (e !== 88) break;
          i.showPercent = n.bool();
          continue;
        case 12:
          if (e !== 96) break;
          i.showBubbleSize = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ur.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = lr();
    return (
      (t.idx = e.idx ?? 0),
      (t.text = e.text ?? void 0),
      (t.position = e.position ?? void 0),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.stroke =
        e.stroke !== void 0 && e.stroke !== null
          ? C.fromPartial(e.stroke)
          : void 0),
      (t.showValue = e.showValue ?? void 0),
      (t.showCategoryName = e.showCategoryName ?? void 0),
      (t.showSeriesName = e.showSeriesName ?? void 0),
      (t.showLegendKey = e.showLegendKey ?? void 0),
      (t.showPercent = e.showPercent ?? void 0),
      (t.showBubbleSize = e.showBubbleSize ?? void 0),
      t
    );
  },
};
function dr() {
  return {
    mapArea: void 0,
    projection: void 0,
    labelLayout: void 0,
    dataLevel: void 0,
    showUnknown: void 0,
    onlyRegionsWithData: void 0,
    regionFilter: void 0,
    colorScale: [],
    buckets: void 0,
    classification: void 0,
    colorScaleEx: void 0,
  };
}
var fr = {
  encode(e, t = new f()) {
    (e.mapArea !== void 0 && t.uint32(8).int32(e.mapArea),
      e.projection !== void 0 && t.uint32(16).int32(e.projection),
      e.labelLayout !== void 0 && t.uint32(24).int32(e.labelLayout),
      e.dataLevel !== void 0 && t.uint32(32).int32(e.dataLevel),
      e.showUnknown !== void 0 && t.uint32(40).bool(e.showUnknown),
      e.onlyRegionsWithData !== void 0 &&
        t.uint32(48).bool(e.onlyRegionsWithData),
      e.regionFilter !== void 0 && t.uint32(58).string(e.regionFilter));
    for (let n of e.colorScale) h.encode(n, t.uint32(66).fork()).join();
    return (
      e.buckets !== void 0 && t.uint32(72).int32(e.buckets),
      e.classification !== void 0 && t.uint32(80).int32(e.classification),
      e.colorScaleEx !== void 0 &&
        Or.encode(e.colorScaleEx, t.uint32(90).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = dr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.mapArea = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.projection = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.labelLayout = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.dataLevel = n.int32();
          continue;
        case 5:
          if (e !== 40) break;
          i.showUnknown = n.bool();
          continue;
        case 6:
          if (e !== 48) break;
          i.onlyRegionsWithData = n.bool();
          continue;
        case 7:
          if (e !== 58) break;
          i.regionFilter = n.string();
          continue;
        case 8:
          if (e !== 66) break;
          i.colorScale.push(h.decode(n, n.uint32()));
          continue;
        case 9:
          if (e !== 72) break;
          i.buckets = n.int32();
          continue;
        case 10:
          if (e !== 80) break;
          i.classification = n.int32();
          continue;
        case 11:
          if (e !== 90) break;
          i.colorScaleEx = Or.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return fr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = dr();
    return (
      (t.mapArea = e.mapArea ?? void 0),
      (t.projection = e.projection ?? void 0),
      (t.labelLayout = e.labelLayout ?? void 0),
      (t.dataLevel = e.dataLevel ?? void 0),
      (t.showUnknown = e.showUnknown ?? void 0),
      (t.onlyRegionsWithData = e.onlyRegionsWithData ?? void 0),
      (t.regionFilter = e.regionFilter ?? void 0),
      (t.colorScale = e.colorScale?.map((e) => h.fromPartial(e)) || []),
      (t.buckets = e.buckets ?? void 0),
      (t.classification = e.classification ?? void 0),
      (t.colorScaleEx =
        e.colorScaleEx !== void 0 && e.colorScaleEx !== null
          ? Or.fromPartial(e.colorScaleEx)
          : void 0),
      t
    );
  },
};
function pr() {
  return { levels: [] };
}
var mr = {
  encode(e, t = new f()) {
    for (let n of e.levels) t.uint32(10).string(n);
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = pr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.levels.push(n.string());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return mr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = pr();
    return ((t.levels = e.levels?.map((e) => e) || []), t);
  },
};
function hr() {
  return { parentLabelLayout: void 0 };
}
var gr = {
  encode(e, t = new f()) {
    return (
      e.parentLabelLayout !== void 0 && t.uint32(8).int32(e.parentLabelLayout),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = hr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.parentLabelLayout = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return gr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = hr();
    return ((t.parentLabelLayout = e.parentLabelLayout ?? void 0), t);
  },
};
function _r() {
  return {
    showMeanLine: void 0,
    showMeanMarker: void 0,
    showNonOutliers: void 0,
    showOutliers: void 0,
    quartileMethod: void 0,
  };
}
var vr = {
  encode(e, t = new f()) {
    return (
      e.showMeanLine !== void 0 && t.uint32(8).bool(e.showMeanLine),
      e.showMeanMarker !== void 0 && t.uint32(16).bool(e.showMeanMarker),
      e.showNonOutliers !== void 0 && t.uint32(24).bool(e.showNonOutliers),
      e.showOutliers !== void 0 && t.uint32(32).bool(e.showOutliers),
      e.quartileMethod !== void 0 && t.uint32(40).int32(e.quartileMethod),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = _r();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.showMeanLine = n.bool();
          continue;
        case 2:
          if (e !== 16) break;
          i.showMeanMarker = n.bool();
          continue;
        case 3:
          if (e !== 24) break;
          i.showNonOutliers = n.bool();
          continue;
        case 4:
          if (e !== 32) break;
          i.showOutliers = n.bool();
          continue;
        case 5:
          if (e !== 40) break;
          i.quartileMethod = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return vr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = _r();
    return (
      (t.showMeanLine = e.showMeanLine ?? void 0),
      (t.showMeanMarker = e.showMeanMarker ?? void 0),
      (t.showNonOutliers = e.showNonOutliers ?? void 0),
      (t.showOutliers = e.showOutliers ?? void 0),
      (t.quartileMethod = e.quartileMethod ?? void 0),
      t
    );
  },
};
function yr() {
  return {
    intervalClosed: void 0,
    binWidth: void 0,
    binCount: void 0,
    underflow: void 0,
    overflow: void 0,
    aggregated: void 0,
  };
}
var br = {
  encode(e, t = new f()) {
    return (
      e.intervalClosed !== void 0 && t.uint32(8).int32(e.intervalClosed),
      e.binWidth !== void 0 && t.uint32(17).double(e.binWidth),
      e.binCount !== void 0 && t.uint32(24).uint32(e.binCount),
      e.underflow !== void 0 && t.uint32(33).double(e.underflow),
      e.overflow !== void 0 && t.uint32(41).double(e.overflow),
      e.aggregated !== void 0 && t.uint32(48).bool(e.aggregated),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = yr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.intervalClosed = n.int32();
          continue;
        case 2:
          if (e !== 17) break;
          i.binWidth = n.double();
          continue;
        case 3:
          if (e !== 24) break;
          i.binCount = n.uint32();
          continue;
        case 4:
          if (e !== 33) break;
          i.underflow = n.double();
          continue;
        case 5:
          if (e !== 41) break;
          i.overflow = n.double();
          continue;
        case 6:
          if (e !== 48) break;
          i.aggregated = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return br.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = yr();
    return (
      (t.intervalClosed = e.intervalClosed ?? void 0),
      (t.binWidth = e.binWidth ?? void 0),
      (t.binCount = e.binCount ?? void 0),
      (t.underflow = e.underflow ?? void 0),
      (t.overflow = e.overflow ?? void 0),
      (t.aggregated = e.aggregated ?? void 0),
      t
    );
  },
};
function xr() {
  return { subtotalIndices: [] };
}
var Sr = {
  encode(e, t = new f()) {
    t.uint32(10).fork();
    for (let n of e.subtotalIndices) t.uint32(n);
    return (t.join(), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = xr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e === 8) {
            i.subtotalIndices.push(n.uint32());
            continue;
          }
          if (e === 10) {
            let e = n.uint32() + n.pos;
            for (; n.pos < e; ) i.subtotalIndices.push(n.uint32());
            continue;
          }
          break;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Sr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = xr();
    return ((t.subtotalIndices = e.subtotalIndices?.map((e) => e) || []), t);
  },
};
function Cr() {
  return { gapWidth: void 0 };
}
var wr = {
  encode(e, t = new f()) {
    return (e.gapWidth !== void 0 && t.uint32(9).double(e.gapWidth), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Cr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 9) break;
          i.gapWidth = n.double();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return wr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Cr();
    return ((t.gapWidth = e.gapWidth ?? void 0), t);
  },
};
function Tr() {
  return {
    styleId: void 0,
    colorStyleId: void 0,
    palette: [],
    themeName: void 0,
  };
}
var Er = {
  encode(e, t = new f()) {
    (e.styleId !== void 0 && t.uint32(8).int32(e.styleId),
      e.colorStyleId !== void 0 && t.uint32(16).int32(e.colorStyleId));
    for (let n of e.palette) h.encode(n, t.uint32(26).fork()).join();
    return (e.themeName !== void 0 && t.uint32(34).string(e.themeName), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Tr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.styleId = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.colorStyleId = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.palette.push(h.decode(n, n.uint32()));
          continue;
        case 4:
          if (e !== 34) break;
          i.themeName = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Er.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Tr();
    return (
      (t.styleId = e.styleId ?? void 0),
      (t.colorStyleId = e.colorStyleId ?? void 0),
      (t.palette = e.palette?.map((e) => h.fromPartial(e)) || []),
      (t.themeName = e.themeName ?? void 0),
      t
    );
  },
};
function Dr() {
  return { type: void 0, colors: [] };
}
var Or = {
  encode(e, t = new f()) {
    e.type !== void 0 && t.uint32(8).int32(e.type);
    for (let n of e.colors) h.encode(n, t.uint32(18).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Dr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.type = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.colors.push(h.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Or.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Dr();
    return (
      (t.type = e.type ?? void 0),
      (t.colors = e.colors?.map((e) => h.fromPartial(e)) || []),
      t
    );
  },
};
function kr() {
  return {
    pivotTableQualifiedName: ``,
    pivotTableName: void 0,
    pivotCacheId: void 0,
    fmtId: void 0,
    pivotTableId: void 0,
  };
}
var Ar = {
  encode(e, t = new f()) {
    return (
      e.pivotTableQualifiedName !== `` &&
        t.uint32(10).string(e.pivotTableQualifiedName),
      e.pivotTableName !== void 0 && t.uint32(18).string(e.pivotTableName),
      e.pivotCacheId !== void 0 && t.uint32(24).uint32(e.pivotCacheId),
      e.fmtId !== void 0 && t.uint32(32).uint32(e.fmtId),
      e.pivotTableId !== void 0 && t.uint32(42).string(e.pivotTableId),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = kr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.pivotTableQualifiedName = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.pivotTableName = n.string();
          continue;
        case 3:
          if (e !== 24) break;
          i.pivotCacheId = n.uint32();
          continue;
        case 4:
          if (e !== 32) break;
          i.fmtId = n.uint32();
          continue;
        case 5:
          if (e !== 42) break;
          i.pivotTableId = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ar.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = kr();
    return (
      (t.pivotTableQualifiedName = e.pivotTableQualifiedName ?? ``),
      (t.pivotTableName = e.pivotTableName ?? void 0),
      (t.pivotCacheId = e.pivotCacheId ?? void 0),
      (t.fmtId = e.fmtId ?? void 0),
      (t.pivotTableId = e.pivotTableId ?? void 0),
      t
    );
  },
};
function jr() {
  return {
    dropZonesVisible: void 0,
    showFilterButtons: void 0,
    showCategoryButtons: void 0,
    showDataButtons: void 0,
    showSeriesButtons: void 0,
  };
}
var Mr = {
  encode(e, t = new f()) {
    return (
      e.dropZonesVisible !== void 0 && t.uint32(8).bool(e.dropZonesVisible),
      e.showFilterButtons !== void 0 && t.uint32(16).bool(e.showFilterButtons),
      e.showCategoryButtons !== void 0 &&
        t.uint32(24).bool(e.showCategoryButtons),
      e.showDataButtons !== void 0 && t.uint32(32).bool(e.showDataButtons),
      e.showSeriesButtons !== void 0 && t.uint32(40).bool(e.showSeriesButtons),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = jr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.dropZonesVisible = n.bool();
          continue;
        case 2:
          if (e !== 16) break;
          i.showFilterButtons = n.bool();
          continue;
        case 3:
          if (e !== 24) break;
          i.showCategoryButtons = n.bool();
          continue;
        case 4:
          if (e !== 32) break;
          i.showDataButtons = n.bool();
          continue;
        case 5:
          if (e !== 40) break;
          i.showSeriesButtons = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Mr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = jr();
    return (
      (t.dropZonesVisible = e.dropZonesVisible ?? void 0),
      (t.showFilterButtons = e.showFilterButtons ?? void 0),
      (t.showCategoryButtons = e.showCategoryButtons ?? void 0),
      (t.showDataButtons = e.showDataButtons ?? void 0),
      (t.showSeriesButtons = e.showSeriesButtons ?? void 0),
      t
    );
  },
};
function Nr() {
  return { idx: 0, fill: void 0, stroke: void 0, text: void 0 };
}
var Pr = {
  encode(e, t = new f()) {
    return (
      e.idx !== 0 && t.uint32(8).uint32(e.idx),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(18).fork()).join(),
      e.stroke !== void 0 && C.encode(e.stroke, t.uint32(26).fork()).join(),
      e.text !== void 0 && b.encode(e.text, t.uint32(34).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Nr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.idx = n.uint32();
          continue;
        case 2:
          if (e !== 18) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.stroke = C.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.text = b.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Pr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Nr();
    return (
      (t.idx = e.idx ?? 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.stroke =
        e.stroke !== void 0 && e.stroke !== null
          ? C.fromPartial(e.stroke)
          : void 0),
      (t.text =
        e.text !== void 0 && e.text !== null ? b.fromPartial(e.text) : void 0),
      t
    );
  },
};
function Fr() {
  return { symbol: void 0, size: void 0 };
}
var Ir = {
  encode(e, t = new f()) {
    return (
      e.symbol !== void 0 && t.uint32(8).int32(e.symbol),
      e.size !== void 0 && t.uint32(16).uint32(e.size),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Fr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.symbol = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.size = n.uint32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ir.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Fr();
    return ((t.symbol = e.symbol ?? void 0), (t.size = e.size ?? void 0), t);
  },
};
function Lr() {
  return {
    rotX: void 0,
    rotY: void 0,
    rightAngleAxes: void 0,
    perspective: void 0,
  };
}
var Rr = {
    encode(e, t = new f()) {
      return (
        e.rotX !== void 0 && t.uint32(8).int32(e.rotX),
        e.rotY !== void 0 && t.uint32(16).int32(e.rotY),
        e.rightAngleAxes !== void 0 && t.uint32(24).bool(e.rightAngleAxes),
        e.perspective !== void 0 && t.uint32(32).uint32(e.perspective),
        t
      );
    },
    decode(e, t) {
      let n = e instanceof p ? e : new p(e),
        r = t === void 0 ? n.len : n.pos + t,
        i = Lr();
      for (; n.pos < r; ) {
        let e = n.uint32();
        switch (e >>> 3) {
          case 1:
            if (e !== 8) break;
            i.rotX = n.int32();
            continue;
          case 2:
            if (e !== 16) break;
            i.rotY = n.int32();
            continue;
          case 3:
            if (e !== 24) break;
            i.rightAngleAxes = n.bool();
            continue;
          case 4:
            if (e !== 32) break;
            i.perspective = n.uint32();
            continue;
        }
        if ((e & 7) == 4 || e === 0) break;
        n.skip(e & 7);
      }
      return i;
    },
    create(e) {
      return Rr.fromPartial(e ?? {});
    },
    fromPartial(e) {
      let t = Lr();
      return (
        (t.rotX = e.rotX ?? void 0),
        (t.rotY = e.rotY ?? void 0),
        (t.rightAngleAxes = e.rightAngleAxes ?? void 0),
        (t.perspective = e.perspective ?? void 0),
        t
      );
    },
  },
  zr = (function (e) {
    return (
      (e[(e.ARTIFACT_KIND_UNSPECIFIED = 0)] = `ARTIFACT_KIND_UNSPECIFIED`),
      (e[(e.ARTIFACT_KIND_PRESENTATION = 1)] = `ARTIFACT_KIND_PRESENTATION`),
      (e[(e.ARTIFACT_KIND_WORKBOOK = 2)] = `ARTIFACT_KIND_WORKBOOK`),
      (e[(e.ARTIFACT_KIND_DOCUMENT = 3)] = `ARTIFACT_KIND_DOCUMENT`),
      (e[(e.ARTIFACT_KIND_IMAGE = 4)] = `ARTIFACT_KIND_IMAGE`),
      (e[(e.ARTIFACT_KIND_DATA = 5)] = `ARTIFACT_KIND_DATA`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({});
function Br() {
  return { id: ``, kind: 0, title: void 0 };
}
var Vr = {
  encode(e, t = new f()) {
    return (
      e.id !== `` && t.uint32(10).string(e.id),
      e.kind !== 0 && t.uint32(16).int32(e.kind),
      e.title !== void 0 && t.uint32(26).string(e.title),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Br();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.kind = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.title = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Vr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Br();
    return (
      (t.id = e.id ?? ``),
      (t.kind = e.kind ?? 0),
      (t.title = e.title ?? void 0),
      t
    );
  },
};
function Hr() {
  return {
    assetId: void 0,
    contentType: void 0,
    widthPx: void 0,
    heightPx: void 0,
  };
}
var Ur = {
  encode(e, t = new f()) {
    return (
      e.assetId !== void 0 && t.uint32(10).string(e.assetId),
      e.contentType !== void 0 && t.uint32(18).string(e.contentType),
      e.widthPx !== void 0 && t.uint32(24).int32(e.widthPx),
      e.heightPx !== void 0 && t.uint32(32).int32(e.heightPx),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Hr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.assetId = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.contentType = n.string();
          continue;
        case 3:
          if (e !== 24) break;
          i.widthPx = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.heightPx = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ur.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Hr();
    return (
      (t.assetId = e.assetId ?? void 0),
      (t.contentType = e.contentType ?? void 0),
      (t.widthPx = e.widthPx ?? void 0),
      (t.heightPx = e.heightPx ?? void 0),
      t
    );
  },
};
function Wr() {
  return {
    sheetId: void 0,
    rangeA1: void 0,
    showGridlines: void 0,
    showHeaders: void 0,
    zoom: void 0,
  };
}
var Gr = {
  encode(e, t = new f()) {
    return (
      e.sheetId !== void 0 && t.uint32(10).string(e.sheetId),
      e.rangeA1 !== void 0 && t.uint32(18).string(e.rangeA1),
      e.showGridlines !== void 0 && t.uint32(24).bool(e.showGridlines),
      e.showHeaders !== void 0 && t.uint32(32).bool(e.showHeaders),
      e.zoom !== void 0 && t.uint32(41).double(e.zoom),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Wr();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.sheetId = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.rangeA1 = n.string();
          continue;
        case 3:
          if (e !== 24) break;
          i.showGridlines = n.bool();
          continue;
        case 4:
          if (e !== 32) break;
          i.showHeaders = n.bool();
          continue;
        case 5:
          if (e !== 41) break;
          i.zoom = n.double();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Gr.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Wr();
    return (
      (t.sheetId = e.sheetId ?? void 0),
      (t.rangeA1 = e.rangeA1 ?? void 0),
      (t.showGridlines = e.showGridlines ?? void 0),
      (t.showHeaders = e.showHeaders ?? void 0),
      (t.zoom = e.zoom ?? void 0),
      t
    );
  },
};
function Kr() {
  return { artifact: void 0, workbook: void 0, preview: void 0 };
}
var qr = {
    encode(e, t = new f()) {
      return (
        e.artifact !== void 0 &&
          Vr.encode(e.artifact, t.uint32(10).fork()).join(),
        e.workbook !== void 0 &&
          Gr.encode(e.workbook, t.uint32(82).fork()).join(),
        e.preview !== void 0 &&
          Ur.encode(e.preview, t.uint32(162).fork()).join(),
        t
      );
    },
    decode(e, t) {
      let n = e instanceof p ? e : new p(e),
        r = t === void 0 ? n.len : n.pos + t,
        i = Kr();
      for (; n.pos < r; ) {
        let e = n.uint32();
        switch (e >>> 3) {
          case 1:
            if (e !== 10) break;
            i.artifact = Vr.decode(n, n.uint32());
            continue;
          case 10:
            if (e !== 82) break;
            i.workbook = Gr.decode(n, n.uint32());
            continue;
          case 20:
            if (e !== 162) break;
            i.preview = Ur.decode(n, n.uint32());
            continue;
        }
        if ((e & 7) == 4 || e === 0) break;
        n.skip(e & 7);
      }
      return i;
    },
    create(e) {
      return qr.fromPartial(e ?? {});
    },
    fromPartial(e) {
      let t = Kr();
      return (
        (t.artifact =
          e.artifact !== void 0 && e.artifact !== null
            ? Vr.fromPartial(e.artifact)
            : void 0),
        (t.workbook =
          e.workbook !== void 0 && e.workbook !== null
            ? Gr.fromPartial(e.workbook)
            : void 0),
        (t.preview =
          e.preview !== void 0 && e.preview !== null
            ? Ur.fromPartial(e.preview)
            : void 0),
        t
      );
    },
  },
  Jr = (function (e) {
    return (
      (e[(e.MATH_DISPLAY_MODE_UNSPECIFIED = 0)] =
        `MATH_DISPLAY_MODE_UNSPECIFIED`),
      (e[(e.MATH_DISPLAY_MODE_INLINE = 1)] = `MATH_DISPLAY_MODE_INLINE`),
      (e[(e.MATH_DISPLAY_MODE_BLOCK = 2)] = `MATH_DISPLAY_MODE_BLOCK`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Yr = (function (e) {
    return (
      (e[(e.MATH_JUSTIFICATION_UNSPECIFIED = 0)] =
        `MATH_JUSTIFICATION_UNSPECIFIED`),
      (e[(e.MATH_JUSTIFICATION_LEFT = 1)] = `MATH_JUSTIFICATION_LEFT`),
      (e[(e.MATH_JUSTIFICATION_CENTER = 2)] = `MATH_JUSTIFICATION_CENTER`),
      (e[(e.MATH_JUSTIFICATION_RIGHT = 3)] = `MATH_JUSTIFICATION_RIGHT`),
      (e[(e.MATH_JUSTIFICATION_CENTER_GROUP = 4)] =
        `MATH_JUSTIFICATION_CENTER_GROUP`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Xr = (function (e) {
    return (
      (e[(e.MATH_TOKEN_KIND_UNSPECIFIED = 0)] = `MATH_TOKEN_KIND_UNSPECIFIED`),
      (e[(e.MATH_TOKEN_KIND_IDENTIFIER = 1)] = `MATH_TOKEN_KIND_IDENTIFIER`),
      (e[(e.MATH_TOKEN_KIND_NUMBER = 2)] = `MATH_TOKEN_KIND_NUMBER`),
      (e[(e.MATH_TOKEN_KIND_OPERATOR = 3)] = `MATH_TOKEN_KIND_OPERATOR`),
      (e[(e.MATH_TOKEN_KIND_TEXT = 4)] = `MATH_TOKEN_KIND_TEXT`),
      (e[(e.MATH_TOKEN_KIND_SYMBOL = 5)] = `MATH_TOKEN_KIND_SYMBOL`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Zr = (function (e) {
    return (
      (e[(e.MATH_VARIANT_UNSPECIFIED = 0)] = `MATH_VARIANT_UNSPECIFIED`),
      (e[(e.MATH_VARIANT_NORMAL = 1)] = `MATH_VARIANT_NORMAL`),
      (e[(e.MATH_VARIANT_BOLD = 2)] = `MATH_VARIANT_BOLD`),
      (e[(e.MATH_VARIANT_ITALIC = 3)] = `MATH_VARIANT_ITALIC`),
      (e[(e.MATH_VARIANT_BOLD_ITALIC = 4)] = `MATH_VARIANT_BOLD_ITALIC`),
      (e[(e.MATH_VARIANT_SCRIPT = 5)] = `MATH_VARIANT_SCRIPT`),
      (e[(e.MATH_VARIANT_BOLD_SCRIPT = 6)] = `MATH_VARIANT_BOLD_SCRIPT`),
      (e[(e.MATH_VARIANT_FRAKTUR = 7)] = `MATH_VARIANT_FRAKTUR`),
      (e[(e.MATH_VARIANT_DOUBLE_STRUCK = 8)] = `MATH_VARIANT_DOUBLE_STRUCK`),
      (e[(e.MATH_VARIANT_SANS_SERIF = 9)] = `MATH_VARIANT_SANS_SERIF`),
      (e[(e.MATH_VARIANT_BOLD_SANS_SERIF = 10)] =
        `MATH_VARIANT_BOLD_SANS_SERIF`),
      (e[(e.MATH_VARIANT_SANS_SERIF_ITALIC = 11)] =
        `MATH_VARIANT_SANS_SERIF_ITALIC`),
      (e[(e.MATH_VARIANT_SANS_SERIF_BOLD_ITALIC = 12)] =
        `MATH_VARIANT_SANS_SERIF_BOLD_ITALIC`),
      (e[(e.MATH_VARIANT_MONOSPACE = 13)] = `MATH_VARIANT_MONOSPACE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Qr = (function (e) {
    return (
      (e[(e.MATH_FRACTION_KIND_UNSPECIFIED = 0)] =
        `MATH_FRACTION_KIND_UNSPECIFIED`),
      (e[(e.MATH_FRACTION_KIND_BAR = 1)] = `MATH_FRACTION_KIND_BAR`),
      (e[(e.MATH_FRACTION_KIND_SKEWED = 2)] = `MATH_FRACTION_KIND_SKEWED`),
      (e[(e.MATH_FRACTION_KIND_LINEAR = 3)] = `MATH_FRACTION_KIND_LINEAR`),
      (e[(e.MATH_FRACTION_KIND_NO_BAR = 4)] = `MATH_FRACTION_KIND_NO_BAR`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  $r = (function (e) {
    return (
      (e[(e.MATH_LIMIT_PLACEMENT_UNSPECIFIED = 0)] =
        `MATH_LIMIT_PLACEMENT_UNSPECIFIED`),
      (e[(e.MATH_LIMIT_PLACEMENT_SUB_SUP = 1)] =
        `MATH_LIMIT_PLACEMENT_SUB_SUP`),
      (e[(e.MATH_LIMIT_PLACEMENT_UNDER_OVER = 2)] =
        `MATH_LIMIT_PLACEMENT_UNDER_OVER`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ei = (function (e) {
    return (
      (e[(e.MATH_MATRIX_COLUMN_JUSTIFICATION_UNSPECIFIED = 0)] =
        `MATH_MATRIX_COLUMN_JUSTIFICATION_UNSPECIFIED`),
      (e[(e.MATH_MATRIX_COLUMN_JUSTIFICATION_LEFT = 1)] =
        `MATH_MATRIX_COLUMN_JUSTIFICATION_LEFT`),
      (e[(e.MATH_MATRIX_COLUMN_JUSTIFICATION_CENTER = 2)] =
        `MATH_MATRIX_COLUMN_JUSTIFICATION_CENTER`),
      (e[(e.MATH_MATRIX_COLUMN_JUSTIFICATION_RIGHT = 3)] =
        `MATH_MATRIX_COLUMN_JUSTIFICATION_RIGHT`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ti = (function (e) {
    return (
      (e[(e.MATH_ACCENT_POSITION_UNSPECIFIED = 0)] =
        `MATH_ACCENT_POSITION_UNSPECIFIED`),
      (e[(e.MATH_ACCENT_POSITION_TOP = 1)] = `MATH_ACCENT_POSITION_TOP`),
      (e[(e.MATH_ACCENT_POSITION_BOTTOM = 2)] = `MATH_ACCENT_POSITION_BOTTOM`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ni = (function (e) {
    return (
      (e[(e.MATH_BAR_POSITION_UNSPECIFIED = 0)] =
        `MATH_BAR_POSITION_UNSPECIFIED`),
      (e[(e.MATH_BAR_POSITION_TOP = 1)] = `MATH_BAR_POSITION_TOP`),
      (e[(e.MATH_BAR_POSITION_BOTTOM = 2)] = `MATH_BAR_POSITION_BOTTOM`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ri = (function (e) {
    return (
      (e[(e.MATH_LIMIT_KIND_UNSPECIFIED = 0)] = `MATH_LIMIT_KIND_UNSPECIFIED`),
      (e[(e.MATH_LIMIT_KIND_LOWER = 1)] = `MATH_LIMIT_KIND_LOWER`),
      (e[(e.MATH_LIMIT_KIND_UPPER = 2)] = `MATH_LIMIT_KIND_UPPER`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({});
function ii() {
  return {
    id: void 0,
    displayMode: void 0,
    paragraphProperties: void 0,
    root: void 0,
  };
}
var ai = {
  encode(e, t = new f()) {
    return (
      e.id !== void 0 && t.uint32(10).string(e.id),
      e.displayMode !== void 0 && t.uint32(16).int32(e.displayMode),
      e.paragraphProperties !== void 0 &&
        si.encode(e.paragraphProperties, t.uint32(26).fork()).join(),
      e.root !== void 0 && j.encode(e.root, t.uint32(34).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ii();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.displayMode = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.paragraphProperties = si.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.root = j.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ai.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ii();
    return (
      (t.id = e.id ?? void 0),
      (t.displayMode = e.displayMode ?? void 0),
      (t.paragraphProperties =
        e.paragraphProperties !== void 0 && e.paragraphProperties !== null
          ? si.fromPartial(e.paragraphProperties)
          : void 0),
      (t.root =
        e.root !== void 0 && e.root !== null ? j.fromPartial(e.root) : void 0),
      t
    );
  },
};
function oi() {
  return { justification: void 0 };
}
var si = {
  encode(e, t = new f()) {
    return (
      e.justification !== void 0 && t.uint32(8).int32(e.justification),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = oi();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.justification = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return si.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = oi();
    return ((t.justification = e.justification ?? void 0), t);
  },
};
function ci() {
  return {
    id: void 0,
    style: void 0,
    sequence: void 0,
    token: void 0,
    fraction: void 0,
    radical: void 0,
    scripts: void 0,
    nary: void 0,
    delimited: void 0,
    function: void 0,
    matrix: void 0,
    accent: void 0,
    bar: void 0,
    enclosure: void 0,
    limit: void 0,
    phantom: void 0,
    equationArray: void 0,
  };
}
var j = {
  encode(e, t = new f()) {
    return (
      e.id !== void 0 && t.uint32(10).string(e.id),
      e.style !== void 0 && mi.encode(e.style, t.uint32(18).fork()).join(),
      e.sequence !== void 0 &&
        ui.encode(e.sequence, t.uint32(26).fork()).join(),
      e.token !== void 0 && fi.encode(e.token, t.uint32(34).fork()).join(),
      e.fraction !== void 0 &&
        gi.encode(e.fraction, t.uint32(42).fork()).join(),
      e.radical !== void 0 && vi.encode(e.radical, t.uint32(50).fork()).join(),
      e.scripts !== void 0 && bi.encode(e.scripts, t.uint32(58).fork()).join(),
      e.nary !== void 0 && Si.encode(e.nary, t.uint32(66).fork()).join(),
      e.delimited !== void 0 &&
        wi.encode(e.delimited, t.uint32(74).fork()).join(),
      e.function !== void 0 &&
        Ei.encode(e.function, t.uint32(82).fork()).join(),
      e.matrix !== void 0 && Mi.encode(e.matrix, t.uint32(90).fork()).join(),
      e.accent !== void 0 && Pi.encode(e.accent, t.uint32(98).fork()).join(),
      e.bar !== void 0 && Ii.encode(e.bar, t.uint32(106).fork()).join(),
      e.enclosure !== void 0 &&
        Ri.encode(e.enclosure, t.uint32(114).fork()).join(),
      e.limit !== void 0 && Bi.encode(e.limit, t.uint32(122).fork()).join(),
      e.phantom !== void 0 && Hi.encode(e.phantom, t.uint32(130).fork()).join(),
      e.equationArray !== void 0 &&
        Wi.encode(e.equationArray, t.uint32(138).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ci();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.style = mi.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.sequence = ui.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.token = fi.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.fraction = gi.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.radical = vi.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 58) break;
          i.scripts = bi.decode(n, n.uint32());
          continue;
        case 8:
          if (e !== 66) break;
          i.nary = Si.decode(n, n.uint32());
          continue;
        case 9:
          if (e !== 74) break;
          i.delimited = wi.decode(n, n.uint32());
          continue;
        case 10:
          if (e !== 82) break;
          i.function = Ei.decode(n, n.uint32());
          continue;
        case 11:
          if (e !== 90) break;
          i.matrix = Mi.decode(n, n.uint32());
          continue;
        case 12:
          if (e !== 98) break;
          i.accent = Pi.decode(n, n.uint32());
          continue;
        case 13:
          if (e !== 106) break;
          i.bar = Ii.decode(n, n.uint32());
          continue;
        case 14:
          if (e !== 114) break;
          i.enclosure = Ri.decode(n, n.uint32());
          continue;
        case 15:
          if (e !== 122) break;
          i.limit = Bi.decode(n, n.uint32());
          continue;
        case 16:
          if (e !== 130) break;
          i.phantom = Hi.decode(n, n.uint32());
          continue;
        case 17:
          if (e !== 138) break;
          i.equationArray = Wi.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return j.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ci();
    return (
      (t.id = e.id ?? void 0),
      (t.style =
        e.style !== void 0 && e.style !== null
          ? mi.fromPartial(e.style)
          : void 0),
      (t.sequence =
        e.sequence !== void 0 && e.sequence !== null
          ? ui.fromPartial(e.sequence)
          : void 0),
      (t.token =
        e.token !== void 0 && e.token !== null
          ? fi.fromPartial(e.token)
          : void 0),
      (t.fraction =
        e.fraction !== void 0 && e.fraction !== null
          ? gi.fromPartial(e.fraction)
          : void 0),
      (t.radical =
        e.radical !== void 0 && e.radical !== null
          ? vi.fromPartial(e.radical)
          : void 0),
      (t.scripts =
        e.scripts !== void 0 && e.scripts !== null
          ? bi.fromPartial(e.scripts)
          : void 0),
      (t.nary =
        e.nary !== void 0 && e.nary !== null ? Si.fromPartial(e.nary) : void 0),
      (t.delimited =
        e.delimited !== void 0 && e.delimited !== null
          ? wi.fromPartial(e.delimited)
          : void 0),
      (t.function =
        e.function !== void 0 && e.function !== null
          ? Ei.fromPartial(e.function)
          : void 0),
      (t.matrix =
        e.matrix !== void 0 && e.matrix !== null
          ? Mi.fromPartial(e.matrix)
          : void 0),
      (t.accent =
        e.accent !== void 0 && e.accent !== null
          ? Pi.fromPartial(e.accent)
          : void 0),
      (t.bar =
        e.bar !== void 0 && e.bar !== null ? Ii.fromPartial(e.bar) : void 0),
      (t.enclosure =
        e.enclosure !== void 0 && e.enclosure !== null
          ? Ri.fromPartial(e.enclosure)
          : void 0),
      (t.limit =
        e.limit !== void 0 && e.limit !== null
          ? Bi.fromPartial(e.limit)
          : void 0),
      (t.phantom =
        e.phantom !== void 0 && e.phantom !== null
          ? Hi.fromPartial(e.phantom)
          : void 0),
      (t.equationArray =
        e.equationArray !== void 0 && e.equationArray !== null
          ? Wi.fromPartial(e.equationArray)
          : void 0),
      t
    );
  },
};
function li() {
  return { children: [] };
}
var ui = {
  encode(e, t = new f()) {
    for (let n of e.children) j.encode(n, t.uint32(10).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = li();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.children.push(j.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ui.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = li();
    return ((t.children = e.children?.map((e) => j.fromPartial(e)) || []), t);
  },
};
function di() {
  return { text: ``, kind: void 0, language: void 0 };
}
var fi = {
  encode(e, t = new f()) {
    return (
      e.text !== `` && t.uint32(10).string(e.text),
      e.kind !== void 0 && t.uint32(16).int32(e.kind),
      e.language !== void 0 && t.uint32(26).string(e.language),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = di();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.text = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.kind = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.language = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return fi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = di();
    return (
      (t.text = e.text ?? ``),
      (t.kind = e.kind ?? void 0),
      (t.language = e.language ?? void 0),
      t
    );
  },
};
function pi() {
  return {
    bold: void 0,
    italic: void 0,
    fontSize: void 0,
    typeface: void 0,
    language: void 0,
    fill: void 0,
    variant: void 0,
    normalText: void 0,
    literal: void 0,
  };
}
var mi = {
  encode(e, t = new f()) {
    return (
      e.bold !== void 0 && t.uint32(8).bool(e.bold),
      e.italic !== void 0 && t.uint32(16).bool(e.italic),
      e.fontSize !== void 0 && t.uint32(24).int32(e.fontSize),
      e.typeface !== void 0 && t.uint32(34).string(e.typeface),
      e.language !== void 0 && t.uint32(42).string(e.language),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(50).fork()).join(),
      e.variant !== void 0 && t.uint32(56).int32(e.variant),
      e.normalText !== void 0 && t.uint32(64).bool(e.normalText),
      e.literal !== void 0 && t.uint32(72).bool(e.literal),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = pi();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.bold = n.bool();
          continue;
        case 2:
          if (e !== 16) break;
          i.italic = n.bool();
          continue;
        case 3:
          if (e !== 24) break;
          i.fontSize = n.int32();
          continue;
        case 4:
          if (e !== 34) break;
          i.typeface = n.string();
          continue;
        case 5:
          if (e !== 42) break;
          i.language = n.string();
          continue;
        case 6:
          if (e !== 50) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 56) break;
          i.variant = n.int32();
          continue;
        case 8:
          if (e !== 64) break;
          i.normalText = n.bool();
          continue;
        case 9:
          if (e !== 72) break;
          i.literal = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return mi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = pi();
    return (
      (t.bold = e.bold ?? void 0),
      (t.italic = e.italic ?? void 0),
      (t.fontSize = e.fontSize ?? void 0),
      (t.typeface = e.typeface ?? void 0),
      (t.language = e.language ?? void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.variant = e.variant ?? void 0),
      (t.normalText = e.normalText ?? void 0),
      (t.literal = e.literal ?? void 0),
      t
    );
  },
};
function hi() {
  return { kind: void 0, numerator: void 0, denominator: void 0 };
}
var gi = {
  encode(e, t = new f()) {
    return (
      e.kind !== void 0 && t.uint32(8).int32(e.kind),
      e.numerator !== void 0 &&
        j.encode(e.numerator, t.uint32(18).fork()).join(),
      e.denominator !== void 0 &&
        j.encode(e.denominator, t.uint32(26).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = hi();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.kind = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.numerator = j.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.denominator = j.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return gi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = hi();
    return (
      (t.kind = e.kind ?? void 0),
      (t.numerator =
        e.numerator !== void 0 && e.numerator !== null
          ? j.fromPartial(e.numerator)
          : void 0),
      (t.denominator =
        e.denominator !== void 0 && e.denominator !== null
          ? j.fromPartial(e.denominator)
          : void 0),
      t
    );
  },
};
function _i() {
  return { degree: void 0, radicand: void 0, hideDegree: void 0 };
}
var vi = {
  encode(e, t = new f()) {
    return (
      e.degree !== void 0 && j.encode(e.degree, t.uint32(10).fork()).join(),
      e.radicand !== void 0 && j.encode(e.radicand, t.uint32(18).fork()).join(),
      e.hideDegree !== void 0 && t.uint32(24).bool(e.hideDegree),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = _i();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.degree = j.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.radicand = j.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 24) break;
          i.hideDegree = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return vi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = _i();
    return (
      (t.degree =
        e.degree !== void 0 && e.degree !== null
          ? j.fromPartial(e.degree)
          : void 0),
      (t.radicand =
        e.radicand !== void 0 && e.radicand !== null
          ? j.fromPartial(e.radicand)
          : void 0),
      (t.hideDegree = e.hideDegree ?? void 0),
      t
    );
  },
};
function yi() {
  return {
    base: void 0,
    subscript: void 0,
    superscript: void 0,
    presubscript: void 0,
    presuperscript: void 0,
  };
}
var bi = {
  encode(e, t = new f()) {
    return (
      e.base !== void 0 && j.encode(e.base, t.uint32(10).fork()).join(),
      e.subscript !== void 0 &&
        j.encode(e.subscript, t.uint32(18).fork()).join(),
      e.superscript !== void 0 &&
        j.encode(e.superscript, t.uint32(26).fork()).join(),
      e.presubscript !== void 0 &&
        j.encode(e.presubscript, t.uint32(34).fork()).join(),
      e.presuperscript !== void 0 &&
        j.encode(e.presuperscript, t.uint32(42).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = yi();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.base = j.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.subscript = j.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.superscript = j.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.presubscript = j.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.presuperscript = j.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return bi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = yi();
    return (
      (t.base =
        e.base !== void 0 && e.base !== null ? j.fromPartial(e.base) : void 0),
      (t.subscript =
        e.subscript !== void 0 && e.subscript !== null
          ? j.fromPartial(e.subscript)
          : void 0),
      (t.superscript =
        e.superscript !== void 0 && e.superscript !== null
          ? j.fromPartial(e.superscript)
          : void 0),
      (t.presubscript =
        e.presubscript !== void 0 && e.presubscript !== null
          ? j.fromPartial(e.presubscript)
          : void 0),
      (t.presuperscript =
        e.presuperscript !== void 0 && e.presuperscript !== null
          ? j.fromPartial(e.presuperscript)
          : void 0),
      t
    );
  },
};
function xi() {
  return {
    operator: ``,
    lowerLimit: void 0,
    upperLimit: void 0,
    body: void 0,
    limitPlacement: void 0,
    hideSubscript: void 0,
    hideSuperscript: void 0,
  };
}
var Si = {
  encode(e, t = new f()) {
    return (
      e.operator !== `` && t.uint32(10).string(e.operator),
      e.lowerLimit !== void 0 &&
        j.encode(e.lowerLimit, t.uint32(18).fork()).join(),
      e.upperLimit !== void 0 &&
        j.encode(e.upperLimit, t.uint32(26).fork()).join(),
      e.body !== void 0 && j.encode(e.body, t.uint32(34).fork()).join(),
      e.limitPlacement !== void 0 && t.uint32(40).int32(e.limitPlacement),
      e.hideSubscript !== void 0 && t.uint32(48).bool(e.hideSubscript),
      e.hideSuperscript !== void 0 && t.uint32(56).bool(e.hideSuperscript),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = xi();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.operator = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.lowerLimit = j.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.upperLimit = j.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.body = j.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 40) break;
          i.limitPlacement = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.hideSubscript = n.bool();
          continue;
        case 7:
          if (e !== 56) break;
          i.hideSuperscript = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Si.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = xi();
    return (
      (t.operator = e.operator ?? ``),
      (t.lowerLimit =
        e.lowerLimit !== void 0 && e.lowerLimit !== null
          ? j.fromPartial(e.lowerLimit)
          : void 0),
      (t.upperLimit =
        e.upperLimit !== void 0 && e.upperLimit !== null
          ? j.fromPartial(e.upperLimit)
          : void 0),
      (t.body =
        e.body !== void 0 && e.body !== null ? j.fromPartial(e.body) : void 0),
      (t.limitPlacement = e.limitPlacement ?? void 0),
      (t.hideSubscript = e.hideSubscript ?? void 0),
      (t.hideSuperscript = e.hideSuperscript ?? void 0),
      t
    );
  },
};
function Ci() {
  return {
    beginDelimiter: void 0,
    separatorDelimiter: void 0,
    endDelimiter: void 0,
    items: [],
    grow: void 0,
    shape: void 0,
  };
}
var wi = {
  encode(e, t = new f()) {
    (e.beginDelimiter !== void 0 && t.uint32(10).string(e.beginDelimiter),
      e.separatorDelimiter !== void 0 &&
        t.uint32(18).string(e.separatorDelimiter),
      e.endDelimiter !== void 0 && t.uint32(26).string(e.endDelimiter));
    for (let n of e.items) j.encode(n, t.uint32(34).fork()).join();
    return (
      e.grow !== void 0 && t.uint32(40).bool(e.grow),
      e.shape !== void 0 && t.uint32(50).string(e.shape),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ci();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.beginDelimiter = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.separatorDelimiter = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.endDelimiter = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.items.push(j.decode(n, n.uint32()));
          continue;
        case 5:
          if (e !== 40) break;
          i.grow = n.bool();
          continue;
        case 6:
          if (e !== 50) break;
          i.shape = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return wi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ci();
    return (
      (t.beginDelimiter = e.beginDelimiter ?? void 0),
      (t.separatorDelimiter = e.separatorDelimiter ?? void 0),
      (t.endDelimiter = e.endDelimiter ?? void 0),
      (t.items = e.items?.map((e) => j.fromPartial(e)) || []),
      (t.grow = e.grow ?? void 0),
      (t.shape = e.shape ?? void 0),
      t
    );
  },
};
function Ti() {
  return { name: void 0, argument: void 0 };
}
var Ei = {
  encode(e, t = new f()) {
    return (
      e.name !== void 0 && j.encode(e.name, t.uint32(10).fork()).join(),
      e.argument !== void 0 && j.encode(e.argument, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ti();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.name = j.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.argument = j.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ei.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ti();
    return (
      (t.name =
        e.name !== void 0 && e.name !== null ? j.fromPartial(e.name) : void 0),
      (t.argument =
        e.argument !== void 0 && e.argument !== null
          ? j.fromPartial(e.argument)
          : void 0),
      t
    );
  },
};
function Di() {
  return { justification: void 0 };
}
var Oi = {
  encode(e, t = new f()) {
    return (
      e.justification !== void 0 && t.uint32(8).int32(e.justification),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Di();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.justification = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Oi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Di();
    return ((t.justification = e.justification ?? void 0), t);
  },
};
function ki() {
  return { cells: [] };
}
var Ai = {
  encode(e, t = new f()) {
    for (let n of e.cells) j.encode(n, t.uint32(10).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ki();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.cells.push(j.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ai.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ki();
    return ((t.cells = e.cells?.map((e) => j.fromPartial(e)) || []), t);
  },
};
function ji() {
  return { columns: [], rows: [], columnCount: void 0 };
}
var Mi = {
  encode(e, t = new f()) {
    for (let n of e.columns) Oi.encode(n, t.uint32(10).fork()).join();
    for (let n of e.rows) Ai.encode(n, t.uint32(18).fork()).join();
    return (e.columnCount !== void 0 && t.uint32(24).int32(e.columnCount), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ji();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.columns.push(Oi.decode(n, n.uint32()));
          continue;
        case 2:
          if (e !== 18) break;
          i.rows.push(Ai.decode(n, n.uint32()));
          continue;
        case 3:
          if (e !== 24) break;
          i.columnCount = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Mi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ji();
    return (
      (t.columns = e.columns?.map((e) => Oi.fromPartial(e)) || []),
      (t.rows = e.rows?.map((e) => Ai.fromPartial(e)) || []),
      (t.columnCount = e.columnCount ?? void 0),
      t
    );
  },
};
function Ni() {
  return { character: ``, base: void 0, position: void 0 };
}
var Pi = {
  encode(e, t = new f()) {
    return (
      e.character !== `` && t.uint32(10).string(e.character),
      e.base !== void 0 && j.encode(e.base, t.uint32(18).fork()).join(),
      e.position !== void 0 && t.uint32(24).int32(e.position),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ni();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.character = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.base = j.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 24) break;
          i.position = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Pi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ni();
    return (
      (t.character = e.character ?? ``),
      (t.base =
        e.base !== void 0 && e.base !== null ? j.fromPartial(e.base) : void 0),
      (t.position = e.position ?? void 0),
      t
    );
  },
};
function Fi() {
  return { position: void 0, base: void 0 };
}
var Ii = {
  encode(e, t = new f()) {
    return (
      e.position !== void 0 && t.uint32(8).int32(e.position),
      e.base !== void 0 && j.encode(e.base, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Fi();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.position = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.base = j.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ii.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Fi();
    return (
      (t.position = e.position ?? void 0),
      (t.base =
        e.base !== void 0 && e.base !== null ? j.fromPartial(e.base) : void 0),
      t
    );
  },
};
function Li() {
  return {
    body: void 0,
    hideTop: void 0,
    hideBottom: void 0,
    hideLeft: void 0,
    hideRight: void 0,
    strikeHorizontal: void 0,
    strikeVertical: void 0,
    strikeTopLeftToBottomRight: void 0,
    strikeBottomLeftToTopRight: void 0,
  };
}
var Ri = {
  encode(e, t = new f()) {
    return (
      e.body !== void 0 && j.encode(e.body, t.uint32(10).fork()).join(),
      e.hideTop !== void 0 && t.uint32(16).bool(e.hideTop),
      e.hideBottom !== void 0 && t.uint32(24).bool(e.hideBottom),
      e.hideLeft !== void 0 && t.uint32(32).bool(e.hideLeft),
      e.hideRight !== void 0 && t.uint32(40).bool(e.hideRight),
      e.strikeHorizontal !== void 0 && t.uint32(48).bool(e.strikeHorizontal),
      e.strikeVertical !== void 0 && t.uint32(56).bool(e.strikeVertical),
      e.strikeTopLeftToBottomRight !== void 0 &&
        t.uint32(64).bool(e.strikeTopLeftToBottomRight),
      e.strikeBottomLeftToTopRight !== void 0 &&
        t.uint32(72).bool(e.strikeBottomLeftToTopRight),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Li();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.body = j.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 16) break;
          i.hideTop = n.bool();
          continue;
        case 3:
          if (e !== 24) break;
          i.hideBottom = n.bool();
          continue;
        case 4:
          if (e !== 32) break;
          i.hideLeft = n.bool();
          continue;
        case 5:
          if (e !== 40) break;
          i.hideRight = n.bool();
          continue;
        case 6:
          if (e !== 48) break;
          i.strikeHorizontal = n.bool();
          continue;
        case 7:
          if (e !== 56) break;
          i.strikeVertical = n.bool();
          continue;
        case 8:
          if (e !== 64) break;
          i.strikeTopLeftToBottomRight = n.bool();
          continue;
        case 9:
          if (e !== 72) break;
          i.strikeBottomLeftToTopRight = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ri.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Li();
    return (
      (t.body =
        e.body !== void 0 && e.body !== null ? j.fromPartial(e.body) : void 0),
      (t.hideTop = e.hideTop ?? void 0),
      (t.hideBottom = e.hideBottom ?? void 0),
      (t.hideLeft = e.hideLeft ?? void 0),
      (t.hideRight = e.hideRight ?? void 0),
      (t.strikeHorizontal = e.strikeHorizontal ?? void 0),
      (t.strikeVertical = e.strikeVertical ?? void 0),
      (t.strikeTopLeftToBottomRight = e.strikeTopLeftToBottomRight ?? void 0),
      (t.strikeBottomLeftToTopRight = e.strikeBottomLeftToTopRight ?? void 0),
      t
    );
  },
};
function zi() {
  return { kind: void 0, base: void 0, limit: void 0 };
}
var Bi = {
  encode(e, t = new f()) {
    return (
      e.kind !== void 0 && t.uint32(8).int32(e.kind),
      e.base !== void 0 && j.encode(e.base, t.uint32(18).fork()).join(),
      e.limit !== void 0 && j.encode(e.limit, t.uint32(26).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = zi();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.kind = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.base = j.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.limit = j.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Bi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = zi();
    return (
      (t.kind = e.kind ?? void 0),
      (t.base =
        e.base !== void 0 && e.base !== null ? j.fromPartial(e.base) : void 0),
      (t.limit =
        e.limit !== void 0 && e.limit !== null
          ? j.fromPartial(e.limit)
          : void 0),
      t
    );
  },
};
function Vi() {
  return {
    body: void 0,
    show: void 0,
    zeroWidth: void 0,
    zeroAscent: void 0,
    zeroDescent: void 0,
  };
}
var Hi = {
  encode(e, t = new f()) {
    return (
      e.body !== void 0 && j.encode(e.body, t.uint32(10).fork()).join(),
      e.show !== void 0 && t.uint32(16).bool(e.show),
      e.zeroWidth !== void 0 && t.uint32(24).bool(e.zeroWidth),
      e.zeroAscent !== void 0 && t.uint32(32).bool(e.zeroAscent),
      e.zeroDescent !== void 0 && t.uint32(40).bool(e.zeroDescent),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Vi();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.body = j.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 16) break;
          i.show = n.bool();
          continue;
        case 3:
          if (e !== 24) break;
          i.zeroWidth = n.bool();
          continue;
        case 4:
          if (e !== 32) break;
          i.zeroAscent = n.bool();
          continue;
        case 5:
          if (e !== 40) break;
          i.zeroDescent = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Hi.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Vi();
    return (
      (t.body =
        e.body !== void 0 && e.body !== null ? j.fromPartial(e.body) : void 0),
      (t.show = e.show ?? void 0),
      (t.zeroWidth = e.zeroWidth ?? void 0),
      (t.zeroAscent = e.zeroAscent ?? void 0),
      (t.zeroDescent = e.zeroDescent ?? void 0),
      t
    );
  },
};
function Ui() {
  return { rows: [], justification: void 0, baseJustification: void 0 };
}
var Wi = {
    encode(e, t = new f()) {
      for (let n of e.rows) j.encode(n, t.uint32(10).fork()).join();
      return (
        e.justification !== void 0 && t.uint32(16).int32(e.justification),
        e.baseJustification !== void 0 &&
          t.uint32(26).string(e.baseJustification),
        t
      );
    },
    decode(e, t) {
      let n = e instanceof p ? e : new p(e),
        r = t === void 0 ? n.len : n.pos + t,
        i = Ui();
      for (; n.pos < r; ) {
        let e = n.uint32();
        switch (e >>> 3) {
          case 1:
            if (e !== 10) break;
            i.rows.push(j.decode(n, n.uint32()));
            continue;
          case 2:
            if (e !== 16) break;
            i.justification = n.int32();
            continue;
          case 3:
            if (e !== 26) break;
            i.baseJustification = n.string();
            continue;
        }
        if ((e & 7) == 4 || e === 0) break;
        n.skip(e & 7);
      }
      return i;
    },
    create(e) {
      return Wi.fromPartial(e ?? {});
    },
    fromPartial(e) {
      let t = Ui();
      return (
        (t.rows = e.rows?.map((e) => j.fromPartial(e)) || []),
        (t.justification = e.justification ?? void 0),
        (t.baseJustification = e.baseJustification ?? void 0),
        t
      );
    },
  },
  Gi = `oaiproto.coworker.pptx`,
  Ki = (function (e) {
    return (
      (e[(e.ELEMENT_PLACEMENT_TYPE_UNSPECIFIED = 0)] =
        `ELEMENT_PLACEMENT_TYPE_UNSPECIFIED`),
      (e[(e.ELEMENT_PLACEMENT_TYPE_INLINE = 1)] =
        `ELEMENT_PLACEMENT_TYPE_INLINE`),
      (e[(e.ELEMENT_PLACEMENT_TYPE_ANCHORED = 2)] =
        `ELEMENT_PLACEMENT_TYPE_ANCHORED`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  qi = (function (e) {
    return (
      (e[(e.ELEMENT_WRAP_TYPE_UNSPECIFIED = 0)] =
        `ELEMENT_WRAP_TYPE_UNSPECIFIED`),
      (e[(e.ELEMENT_WRAP_TYPE_NONE = 1)] = `ELEMENT_WRAP_TYPE_NONE`),
      (e[(e.ELEMENT_WRAP_TYPE_SQUARE = 2)] = `ELEMENT_WRAP_TYPE_SQUARE`),
      (e[(e.ELEMENT_WRAP_TYPE_TIGHT = 3)] = `ELEMENT_WRAP_TYPE_TIGHT`),
      (e[(e.ELEMENT_WRAP_TYPE_THROUGH = 4)] = `ELEMENT_WRAP_TYPE_THROUGH`),
      (e[(e.ELEMENT_WRAP_TYPE_TOP_AND_BOTTOM = 5)] =
        `ELEMENT_WRAP_TYPE_TOP_AND_BOTTOM`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Ji = (function (e) {
    return (
      (e[(e.ELEMENT_TYPE_UNSPECIFIED = 0)] = `ELEMENT_TYPE_UNSPECIFIED`),
      (e[(e.ELEMENT_TYPE_TEXT = 1)] = `ELEMENT_TYPE_TEXT`),
      (e[(e.ELEMENT_TYPE_TEXT_GROUP = 2)] = `ELEMENT_TYPE_TEXT_GROUP`),
      (e[(e.ELEMENT_TYPE_IMAGE = 3)] = `ELEMENT_TYPE_IMAGE`),
      (e[(e.ELEMENT_TYPE_CHART = 4)] = `ELEMENT_TYPE_CHART`),
      (e[(e.ELEMENT_TYPE_SHAPE = 5)] = `ELEMENT_TYPE_SHAPE`),
      (e[(e.ELEMENT_TYPE_CHART_REFERENCE = 6)] =
        `ELEMENT_TYPE_CHART_REFERENCE`),
      (e[(e.ELEMENT_TYPE_IMAGE_REFERENCE = 7)] =
        `ELEMENT_TYPE_IMAGE_REFERENCE`),
      (e[(e.ELEMENT_TYPE_VIDEO_REFERENCE = 8)] =
        `ELEMENT_TYPE_VIDEO_REFERENCE`),
      (e[(e.ELEMENT_TYPE_TABLE = 9)] = `ELEMENT_TYPE_TABLE`),
      (e[(e.ELEMENT_TYPE_GROUP = 10)] = `ELEMENT_TYPE_GROUP`),
      (e[(e.ELEMENT_TYPE_EMBEDDED_ARTIFACT = 11)] =
        `ELEMENT_TYPE_EMBEDDED_ARTIFACT`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Yi = (function (e) {
    return (
      (e[(e.EFFECT_TYPE_UNSPECIFIED = 0)] = `EFFECT_TYPE_UNSPECIFIED`),
      (e[(e.EFFECT_TYPE_OUTER_SHADOW = 1)] = `EFFECT_TYPE_OUTER_SHADOW`),
      (e[(e.EFFECT_TYPE_INNER_SHADOW = 2)] = `EFFECT_TYPE_INNER_SHADOW`),
      (e[(e.EFFECT_TYPE_GLOW = 3)] = `EFFECT_TYPE_GLOW`),
      (e[(e.EFFECT_TYPE_REFLECTION = 4)] = `EFFECT_TYPE_REFLECTION`),
      (e[(e.EFFECT_TYPE_SOFT_EDGES = 5)] = `EFFECT_TYPE_SOFT_EDGES`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Xi = (function (e) {
    return (
      (e[(e.CODE_BLOCK_KIND_UNSPECIFIED = 0)] = `CODE_BLOCK_KIND_UNSPECIFIED`),
      (e[(e.CODE_BLOCK_KIND_SOURCE_ONLY = 1)] = `CODE_BLOCK_KIND_SOURCE_ONLY`),
      (e[(e.CODE_BLOCK_KIND_OUTPUT_ONLY = 2)] = `CODE_BLOCK_KIND_OUTPUT_ONLY`),
      (e[(e.CODE_BLOCK_KIND_SOURCE_THEN_OUTPUT = 3)] =
        `CODE_BLOCK_KIND_SOURCE_THEN_OUTPUT`),
      (e[(e.CODE_BLOCK_KIND_SOURCE_OUTPUT_SPLIT = 4)] =
        `CODE_BLOCK_KIND_SOURCE_OUTPUT_SPLIT`),
      (e[(e.CODE_BLOCK_KIND_PREVIEW_ONLY = 5)] =
        `CODE_BLOCK_KIND_PREVIEW_ONLY`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Zi = (function (e) {
    return (
      (e[(e.CONDITION_UNSPECIFIED = 0)] = `CONDITION_UNSPECIFIED`),
      (e[(e.CONDITION_WHOLE_TABLE = 1)] = `CONDITION_WHOLE_TABLE`),
      (e[(e.CONDITION_FIRST_ROW = 2)] = `CONDITION_FIRST_ROW`),
      (e[(e.CONDITION_LAST_ROW = 3)] = `CONDITION_LAST_ROW`),
      (e[(e.CONDITION_FIRST_COLUMN = 4)] = `CONDITION_FIRST_COLUMN`),
      (e[(e.CONDITION_LAST_COLUMN = 5)] = `CONDITION_LAST_COLUMN`),
      (e[(e.CONDITION_BANDED_ROW_ODD = 6)] = `CONDITION_BANDED_ROW_ODD`),
      (e[(e.CONDITION_BANDED_ROW_EVEN = 7)] = `CONDITION_BANDED_ROW_EVEN`),
      (e[(e.CONDITION_BANDED_COLUMN_ODD = 8)] = `CONDITION_BANDED_COLUMN_ODD`),
      (e[(e.CONDITION_BANDED_COLUMN_EVEN = 9)] =
        `CONDITION_BANDED_COLUMN_EVEN`),
      (e[(e.CONDITION_TOP_LEFT_CELL = 10)] = `CONDITION_TOP_LEFT_CELL`),
      (e[(e.CONDITION_TOP_RIGHT_CELL = 11)] = `CONDITION_TOP_RIGHT_CELL`),
      (e[(e.CONDITION_BOTTOM_LEFT_CELL = 12)] = `CONDITION_BOTTOM_LEFT_CELL`),
      (e[(e.CONDITION_BOTTOM_RIGHT_CELL = 13)] = `CONDITION_BOTTOM_RIGHT_CELL`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  Qi = (function (e) {
    return (
      (e[(e.RETURN_MODE_UNSPECIFIED = 0)] = `RETURN_MODE_UNSPECIFIED`),
      (e[(e.RETURN_MODE_VALUE = 1)] = `RETURN_MODE_VALUE`),
      (e[(e.RETURN_MODE_OBJECT = 2)] = `RETURN_MODE_OBJECT`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  $i = (function (e) {
    return (
      (e[(e.LINE_CAP_UNSPECIFIED = 0)] = `LINE_CAP_UNSPECIFIED`),
      (e[(e.LINE_CAP_FLAT = 1)] = `LINE_CAP_FLAT`),
      (e[(e.LINE_CAP_ROUND = 2)] = `LINE_CAP_ROUND`),
      (e[(e.LINE_CAP_SQUARE = 3)] = `LINE_CAP_SQUARE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ea = (function (e) {
    return (
      (e[(e.LINE_JOIN_UNSPECIFIED = 0)] = `LINE_JOIN_UNSPECIFIED`),
      (e[(e.LINE_JOIN_ROUND = 1)] = `LINE_JOIN_ROUND`),
      (e[(e.LINE_JOIN_BEVEL = 2)] = `LINE_JOIN_BEVEL`),
      (e[(e.LINE_JOIN_MITER = 3)] = `LINE_JOIN_MITER`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ta = (function (e) {
    return (
      (e[(e.LINE_END_TYPE_UNSPECIFIED = 0)] = `LINE_END_TYPE_UNSPECIFIED`),
      (e[(e.LINE_END_TYPE_NONE = 1)] = `LINE_END_TYPE_NONE`),
      (e[(e.LINE_END_TYPE_TRIANGLE = 2)] = `LINE_END_TYPE_TRIANGLE`),
      (e[(e.LINE_END_TYPE_STEALTH = 3)] = `LINE_END_TYPE_STEALTH`),
      (e[(e.LINE_END_TYPE_DIAMOND = 4)] = `LINE_END_TYPE_DIAMOND`),
      (e[(e.LINE_END_TYPE_OVAL = 5)] = `LINE_END_TYPE_OVAL`),
      (e[(e.LINE_END_TYPE_ARROW = 6)] = `LINE_END_TYPE_ARROW`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  na = (function (e) {
    return (
      (e[(e.LINE_END_WIDTH_UNSPECIFIED = 0)] = `LINE_END_WIDTH_UNSPECIFIED`),
      (e[(e.LINE_END_WIDTH_SMALL = 1)] = `LINE_END_WIDTH_SMALL`),
      (e[(e.LINE_END_WIDTH_MEDIUM = 2)] = `LINE_END_WIDTH_MEDIUM`),
      (e[(e.LINE_END_WIDTH_LARGE = 3)] = `LINE_END_WIDTH_LARGE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({}),
  ra = (function (e) {
    return (
      (e[(e.LINE_END_LENGTH_UNSPECIFIED = 0)] = `LINE_END_LENGTH_UNSPECIFIED`),
      (e[(e.LINE_END_LENGTH_SMALL = 1)] = `LINE_END_LENGTH_SMALL`),
      (e[(e.LINE_END_LENGTH_MEDIUM = 2)] = `LINE_END_LENGTH_MEDIUM`),
      (e[(e.LINE_END_LENGTH_LARGE = 3)] = `LINE_END_LENGTH_LARGE`),
      (e[(e.UNRECOGNIZED = -1)] = `UNRECOGNIZED`),
      e
    );
  })({});
function ia() {
  return {
    id: void 0,
    slides: [],
    theme: void 0,
    layouts: [],
    charts: [],
    images: [],
    contentReferences: [],
    people: [],
    threads: [],
    textStyles: [],
    tableStyles: void 0,
  };
}
var aa = {
  encode(e, t = new f()) {
    e.id !== void 0 && t.uint32(82).string(e.id);
    for (let n of e.slides) I.encode(n, t.uint32(10).fork()).join();
    e.theme !== void 0 && M.encode(e.theme, t.uint32(18).fork()).join();
    for (let n of e.layouts) da.encode(n, t.uint32(26).fork()).join();
    for (let n of e.charts) O.encode(n, t.uint32(74).fork()).join();
    for (let n of e.images) St.encode(n, t.uint32(34).fork()).join();
    for (let n of e.contentReferences) wt.encode(n, t.uint32(42).fork()).join();
    for (let n of e.people) Ot.encode(n, t.uint32(90).fork()).join();
    for (let n of e.threads) T.encode(n, t.uint32(98).fork()).join();
    for (let n of e.textStyles) pt.encode(n, t.uint32(50).fork()).join();
    return (
      e.tableStyles !== void 0 &&
        F.encode(e.tableStyles, t.uint32(58).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ia();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 10:
          if (e !== 82) break;
          i.id = n.string();
          continue;
        case 1:
          if (e !== 10) break;
          i.slides.push(I.decode(n, n.uint32()));
          continue;
        case 2:
          if (e !== 18) break;
          i.theme = M.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.layouts.push(da.decode(n, n.uint32()));
          continue;
        case 9:
          if (e !== 74) break;
          i.charts.push(O.decode(n, n.uint32()));
          continue;
        case 4:
          if (e !== 34) break;
          i.images.push(St.decode(n, n.uint32()));
          continue;
        case 5:
          if (e !== 42) break;
          i.contentReferences.push(wt.decode(n, n.uint32()));
          continue;
        case 11:
          if (e !== 90) break;
          i.people.push(Ot.decode(n, n.uint32()));
          continue;
        case 12:
          if (e !== 98) break;
          i.threads.push(T.decode(n, n.uint32()));
          continue;
        case 6:
          if (e !== 50) break;
          i.textStyles.push(pt.decode(n, n.uint32()));
          continue;
        case 7:
          if (e !== 58) break;
          i.tableStyles = F.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return aa.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ia();
    return (
      (t.id = e.id ?? void 0),
      (t.slides = e.slides?.map((e) => I.fromPartial(e)) || []),
      (t.theme =
        e.theme !== void 0 && e.theme !== null
          ? M.fromPartial(e.theme)
          : void 0),
      (t.layouts = e.layouts?.map((e) => da.fromPartial(e)) || []),
      (t.charts = e.charts?.map((e) => O.fromPartial(e)) || []),
      (t.images = e.images?.map((e) => St.fromPartial(e)) || []),
      (t.contentReferences =
        e.contentReferences?.map((e) => wt.fromPartial(e)) || []),
      (t.people = e.people?.map((e) => Ot.fromPartial(e)) || []),
      (t.threads = e.threads?.map((e) => T.fromPartial(e)) || []),
      (t.textStyles = e.textStyles?.map((e) => pt.fromPartial(e)) || []),
      (t.tableStyles =
        e.tableStyles !== void 0 && e.tableStyles !== null
          ? F.fromPartial(e.tableStyles)
          : void 0),
      t
    );
  },
};
function oa() {
  return {
    colorScheme: void 0,
    backgroundFillStyleList: [],
    lineStyleList: [],
    effectStyleList: [],
    fontScheme: void 0,
  };
}
var M = {
  encode(e, t = new f()) {
    e.colorScheme !== void 0 &&
      N.encode(e.colorScheme, t.uint32(10).fork()).join();
    for (let n of e.backgroundFillStyleList)
      v.encode(n, t.uint32(18).fork()).join();
    for (let n of e.lineStyleList) C.encode(n, t.uint32(26).fork()).join();
    for (let n of e.effectStyleList) lo.encode(n, t.uint32(34).fork()).join();
    return (
      e.fontScheme !== void 0 &&
        Ie.encode(e.fontScheme, t.uint32(42).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = oa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.colorScheme = N.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.backgroundFillStyleList.push(v.decode(n, n.uint32()));
          continue;
        case 3:
          if (e !== 26) break;
          i.lineStyleList.push(C.decode(n, n.uint32()));
          continue;
        case 4:
          if (e !== 34) break;
          i.effectStyleList.push(lo.decode(n, n.uint32()));
          continue;
        case 5:
          if (e !== 42) break;
          i.fontScheme = Ie.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return M.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = oa();
    return (
      (t.colorScheme =
        e.colorScheme !== void 0 && e.colorScheme !== null
          ? N.fromPartial(e.colorScheme)
          : void 0),
      (t.backgroundFillStyleList =
        e.backgroundFillStyleList?.map((e) => v.fromPartial(e)) || []),
      (t.lineStyleList = e.lineStyleList?.map((e) => C.fromPartial(e)) || []),
      (t.effectStyleList =
        e.effectStyleList?.map((e) => lo.fromPartial(e)) || []),
      (t.fontScheme =
        e.fontScheme !== void 0 && e.fontScheme !== null
          ? Ie.fromPartial(e.fontScheme)
          : void 0),
      t
    );
  },
};
function sa() {
  return { name: ``, colors: [] };
}
var N = {
  encode(e, t = new f()) {
    e.name !== `` && t.uint32(10).string(e.name);
    for (let n of e.colors) P.encode(n, t.uint32(18).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = sa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.name = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.colors.push(P.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return N.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = sa();
    return (
      (t.name = e.name ?? ``),
      (t.colors = e.colors?.map((e) => P.fromPartial(e)) || []),
      t
    );
  },
};
function ca() {
  return { name: ``, color: void 0 };
}
var P = {
  encode(e, t = new f()) {
    return (
      e.name !== `` && t.uint32(10).string(e.name),
      e.color !== void 0 && h.encode(e.color, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ca();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.name = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.color = h.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return P.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ca();
    return (
      (t.name = e.name ?? ``),
      (t.color =
        e.color !== void 0 && e.color !== null
          ? h.fromPartial(e.color)
          : void 0),
      t
    );
  },
};
function la() {
  return { defaultStyleId: void 0, outerXml: void 0 };
}
var F = {
  encode(e, t = new f()) {
    return (
      e.defaultStyleId !== void 0 && t.uint32(10).string(e.defaultStyleId),
      e.outerXml !== void 0 && t.uint32(18).string(e.outerXml),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = la();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.defaultStyleId = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.outerXml = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return F.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = la();
    return (
      (t.defaultStyleId = e.defaultStyleId ?? void 0),
      (t.outerXml = e.outerXml ?? void 0),
      t
    );
  },
};
function ua() {
  return {
    id: ``,
    innerXml: void 0,
    outerXml: void 0,
    name: ``,
    type: ``,
    background: void 0,
    elements: [],
    bodyLevelStyles: [],
    titleLevelStyles: [],
    otherLevelStyles: [],
    parentLayoutId: ``,
    colorMap: void 0,
    theme: void 0,
  };
}
var da = {
  encode(e, t = new f()) {
    (e.id !== `` && t.uint32(10).string(e.id),
      e.innerXml !== void 0 && t.uint32(50).string(e.innerXml),
      e.outerXml !== void 0 && t.uint32(58).string(e.outerXml),
      e.name !== `` && t.uint32(66).string(e.name),
      e.type !== `` && t.uint32(74).string(e.type),
      e.background !== void 0 &&
        _.encode(e.background, t.uint32(82).fork()).join());
    for (let n of e.elements) L.encode(n, t.uint32(90).fork()).join();
    for (let n of e.bodyLevelStyles) S.encode(n, t.uint32(98).fork()).join();
    for (let n of e.titleLevelStyles) S.encode(n, t.uint32(106).fork()).join();
    for (let n of e.otherLevelStyles) S.encode(n, t.uint32(114).fork()).join();
    return (
      e.parentLayoutId !== `` && t.uint32(122).string(e.parentLayoutId),
      e.colorMap !== void 0 &&
        Ao.encode(e.colorMap, t.uint32(130).fork()).join(),
      e.theme !== void 0 && M.encode(e.theme, t.uint32(138).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ua();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 6:
          if (e !== 50) break;
          i.innerXml = n.string();
          continue;
        case 7:
          if (e !== 58) break;
          i.outerXml = n.string();
          continue;
        case 8:
          if (e !== 66) break;
          i.name = n.string();
          continue;
        case 9:
          if (e !== 74) break;
          i.type = n.string();
          continue;
        case 10:
          if (e !== 82) break;
          i.background = _.decode(n, n.uint32());
          continue;
        case 11:
          if (e !== 90) break;
          i.elements.push(L.decode(n, n.uint32()));
          continue;
        case 12:
          if (e !== 98) break;
          i.bodyLevelStyles.push(S.decode(n, n.uint32()));
          continue;
        case 13:
          if (e !== 106) break;
          i.titleLevelStyles.push(S.decode(n, n.uint32()));
          continue;
        case 14:
          if (e !== 114) break;
          i.otherLevelStyles.push(S.decode(n, n.uint32()));
          continue;
        case 15:
          if (e !== 122) break;
          i.parentLayoutId = n.string();
          continue;
        case 16:
          if (e !== 130) break;
          i.colorMap = Ao.decode(n, n.uint32());
          continue;
        case 17:
          if (e !== 138) break;
          i.theme = M.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return da.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ua();
    return (
      (t.id = e.id ?? ``),
      (t.innerXml = e.innerXml ?? void 0),
      (t.outerXml = e.outerXml ?? void 0),
      (t.name = e.name ?? ``),
      (t.type = e.type ?? ``),
      (t.background =
        e.background !== void 0 && e.background !== null
          ? _.fromPartial(e.background)
          : void 0),
      (t.elements = e.elements?.map((e) => L.fromPartial(e)) || []),
      (t.bodyLevelStyles =
        e.bodyLevelStyles?.map((e) => S.fromPartial(e)) || []),
      (t.titleLevelStyles =
        e.titleLevelStyles?.map((e) => S.fromPartial(e)) || []),
      (t.otherLevelStyles =
        e.otherLevelStyles?.map((e) => S.fromPartial(e)) || []),
      (t.parentLayoutId = e.parentLayoutId ?? ``),
      (t.colorMap =
        e.colorMap !== void 0 && e.colorMap !== null
          ? Ao.fromPartial(e.colorMap)
          : void 0),
      (t.theme =
        e.theme !== void 0 && e.theme !== null
          ? M.fromPartial(e.theme)
          : void 0),
      t
    );
  },
};
function fa() {
  return {
    index: 0,
    useLayoutId: ``,
    elements: [],
    widthEmu: 0,
    heightEmu: 0,
    innerXml: void 0,
    outerXml: void 0,
    background: void 0,
    id: ``,
    notesSlide: void 0,
    creationId: void 0,
  };
}
var I = {
  encode(e, t = new f()) {
    (e.index !== 0 && t.uint32(8).int32(e.index),
      e.useLayoutId !== `` && t.uint32(18).string(e.useLayoutId));
    for (let n of e.elements) L.encode(n, t.uint32(26).fork()).join();
    return (
      e.widthEmu !== 0 && t.uint32(40).int64(e.widthEmu),
      e.heightEmu !== 0 && t.uint32(48).int64(e.heightEmu),
      e.innerXml !== void 0 && t.uint32(58).string(e.innerXml),
      e.outerXml !== void 0 && t.uint32(66).string(e.outerXml),
      e.background !== void 0 &&
        _.encode(e.background, t.uint32(82).fork()).join(),
      e.id !== `` && t.uint32(90).string(e.id),
      e.notesSlide !== void 0 &&
        I.encode(e.notesSlide, t.uint32(98).fork()).join(),
      e.creationId !== void 0 && t.uint32(106).string(e.creationId),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = fa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.index = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.useLayoutId = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.elements.push(L.decode(n, n.uint32()));
          continue;
        case 5:
          if (e !== 40) break;
          i.widthEmu = $(n.int64());
          continue;
        case 6:
          if (e !== 48) break;
          i.heightEmu = $(n.int64());
          continue;
        case 7:
          if (e !== 58) break;
          i.innerXml = n.string();
          continue;
        case 8:
          if (e !== 66) break;
          i.outerXml = n.string();
          continue;
        case 10:
          if (e !== 82) break;
          i.background = _.decode(n, n.uint32());
          continue;
        case 11:
          if (e !== 90) break;
          i.id = n.string();
          continue;
        case 12:
          if (e !== 98) break;
          i.notesSlide = I.decode(n, n.uint32());
          continue;
        case 13:
          if (e !== 106) break;
          i.creationId = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return I.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = fa();
    return (
      (t.index = e.index ?? 0),
      (t.useLayoutId = e.useLayoutId ?? ``),
      (t.elements = e.elements?.map((e) => L.fromPartial(e)) || []),
      (t.widthEmu = e.widthEmu ?? 0),
      (t.heightEmu = e.heightEmu ?? 0),
      (t.innerXml = e.innerXml ?? void 0),
      (t.outerXml = e.outerXml ?? void 0),
      (t.background =
        e.background !== void 0 && e.background !== null
          ? _.fromPartial(e.background)
          : void 0),
      (t.id = e.id ?? ``),
      (t.notesSlide =
        e.notesSlide !== void 0 && e.notesSlide !== null
          ? I.fromPartial(e.notesSlide)
          : void 0),
      (t.creationId = e.creationId ?? void 0),
      t
    );
  },
};
function pa() {
  return {
    bbox: void 0,
    zIndex: void 0,
    innerXml: void 0,
    outerXml: void 0,
    shape: void 0,
    image: void 0,
    chartReference: void 0,
    video: void 0,
    table: void 0,
    imageReference: void 0,
    codeBlock: void 0,
    embeddedArtifact: void 0,
    paragraphs: [],
    name: void 0,
    type: 0,
    placeholderIndex: void 0,
    placeholderType: void 0,
    textStyle: void 0,
    effects: [],
    children: [],
    levelsStyles: [],
    fill: void 0,
    line: void 0,
    scene3d: void 0,
    shape3d: void 0,
    imageMask: void 0,
    lineReference: void 0,
    fillReference: void 0,
    effectReference: void 0,
    fontReference: void 0,
    hyperlink: void 0,
    id: ``,
    creationId: void 0,
    placement: void 0,
    connector: void 0,
    citations: [],
  };
}
var L = {
  encode(e, t = new f()) {
    (e.bbox !== void 0 && m.encode(e.bbox, t.uint32(10).fork()).join(),
      e.zIndex !== void 0 && t.uint32(16).int32(e.zIndex),
      e.innerXml !== void 0 && t.uint32(58).string(e.innerXml),
      e.outerXml !== void 0 && t.uint32(66).string(e.outerXml),
      e.shape !== void 0 && Co.encode(e.shape, t.uint32(34).fork()).join(),
      e.image !== void 0 && Do.encode(e.image, t.uint32(42).fork()).join(),
      e.chartReference !== void 0 &&
        Ea.encode(e.chartReference, t.uint32(146).fork()).join(),
      e.video !== void 0 && Z.encode(e.video, t.uint32(162).fork()).join(),
      e.table !== void 0 && Ia.encode(e.table, t.uint32(170).fork()).join(),
      e.imageReference !== void 0 &&
        y.encode(e.imageReference, t.uint32(26).fork()).join(),
      e.codeBlock !== void 0 &&
        ns.encode(e.codeBlock, t.uint32(74).fork()).join(),
      e.embeddedArtifact !== void 0 &&
        Oa.encode(e.embeddedArtifact, t.uint32(290).fork()).join());
    for (let n of e.paragraphs) G.encode(n, t.uint32(50).fork()).join();
    (e.name !== void 0 && t.uint32(82).string(e.name),
      e.type !== 0 && t.uint32(88).int32(e.type),
      e.placeholderIndex !== void 0 && t.uint32(96).int32(e.placeholderIndex),
      e.placeholderType !== void 0 && t.uint32(106).string(e.placeholderType),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(114).fork()).join());
    for (let n of e.effects) J.encode(n, t.uint32(122).fork()).join();
    for (let n of e.children) L.encode(n, t.uint32(138).fork()).join();
    for (let n of e.levelsStyles) S.encode(n, t.uint32(130).fork()).join();
    (e.fill !== void 0 && v.encode(e.fill, t.uint32(154).fork()).join(),
      e.line !== void 0 && C.encode(e.line, t.uint32(242).fork()).join(),
      e.scene3d !== void 0 && ga.encode(e.scene3d, t.uint32(250).fork()).join(),
      e.shape3d !== void 0 && va.encode(e.shape3d, t.uint32(258).fork()).join(),
      e.imageMask !== void 0 &&
        X.encode(e.imageMask, t.uint32(266).fork()).join(),
      e.lineReference !== void 0 &&
        R.encode(e.lineReference, t.uint32(178).fork()).join(),
      e.fillReference !== void 0 &&
        R.encode(e.fillReference, t.uint32(186).fork()).join(),
      e.effectReference !== void 0 &&
        R.encode(e.effectReference, t.uint32(194).fork()).join(),
      e.fontReference !== void 0 &&
        R.encode(e.fontReference, t.uint32(202).fork()).join(),
      e.hyperlink !== void 0 &&
        q.encode(e.hyperlink, t.uint32(210).fork()).join(),
      e.id !== `` && t.uint32(218).string(e.id),
      e.creationId !== void 0 && t.uint32(274).string(e.creationId),
      e.placement !== void 0 &&
        Ma.encode(e.placement, t.uint32(282).fork()).join(),
      e.connector !== void 0 &&
        Pa.encode(e.connector, t.uint32(226).fork()).join());
    for (let n of e.citations) t.uint32(234).string(n);
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = pa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.bbox = m.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 16) break;
          i.zIndex = n.int32();
          continue;
        case 7:
          if (e !== 58) break;
          i.innerXml = n.string();
          continue;
        case 8:
          if (e !== 66) break;
          i.outerXml = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.shape = Co.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.image = Do.decode(n, n.uint32());
          continue;
        case 18:
          if (e !== 146) break;
          i.chartReference = Ea.decode(n, n.uint32());
          continue;
        case 20:
          if (e !== 162) break;
          i.video = Z.decode(n, n.uint32());
          continue;
        case 21:
          if (e !== 170) break;
          i.table = Ia.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.imageReference = y.decode(n, n.uint32());
          continue;
        case 9:
          if (e !== 74) break;
          i.codeBlock = ns.decode(n, n.uint32());
          continue;
        case 36:
          if (e !== 290) break;
          i.embeddedArtifact = Oa.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.paragraphs.push(G.decode(n, n.uint32()));
          continue;
        case 10:
          if (e !== 82) break;
          i.name = n.string();
          continue;
        case 11:
          if (e !== 88) break;
          i.type = n.int32();
          continue;
        case 12:
          if (e !== 96) break;
          i.placeholderIndex = n.int32();
          continue;
        case 13:
          if (e !== 106) break;
          i.placeholderType = n.string();
          continue;
        case 14:
          if (e !== 114) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 15:
          if (e !== 122) break;
          i.effects.push(J.decode(n, n.uint32()));
          continue;
        case 17:
          if (e !== 138) break;
          i.children.push(L.decode(n, n.uint32()));
          continue;
        case 16:
          if (e !== 130) break;
          i.levelsStyles.push(S.decode(n, n.uint32()));
          continue;
        case 19:
          if (e !== 154) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 30:
          if (e !== 242) break;
          i.line = C.decode(n, n.uint32());
          continue;
        case 31:
          if (e !== 250) break;
          i.scene3d = ga.decode(n, n.uint32());
          continue;
        case 32:
          if (e !== 258) break;
          i.shape3d = va.decode(n, n.uint32());
          continue;
        case 33:
          if (e !== 266) break;
          i.imageMask = X.decode(n, n.uint32());
          continue;
        case 22:
          if (e !== 178) break;
          i.lineReference = R.decode(n, n.uint32());
          continue;
        case 23:
          if (e !== 186) break;
          i.fillReference = R.decode(n, n.uint32());
          continue;
        case 24:
          if (e !== 194) break;
          i.effectReference = R.decode(n, n.uint32());
          continue;
        case 25:
          if (e !== 202) break;
          i.fontReference = R.decode(n, n.uint32());
          continue;
        case 26:
          if (e !== 210) break;
          i.hyperlink = q.decode(n, n.uint32());
          continue;
        case 27:
          if (e !== 218) break;
          i.id = n.string();
          continue;
        case 34:
          if (e !== 274) break;
          i.creationId = n.string();
          continue;
        case 35:
          if (e !== 282) break;
          i.placement = Ma.decode(n, n.uint32());
          continue;
        case 28:
          if (e !== 226) break;
          i.connector = Pa.decode(n, n.uint32());
          continue;
        case 29:
          if (e !== 234) break;
          i.citations.push(n.string());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return L.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = pa();
    return (
      (t.bbox =
        e.bbox !== void 0 && e.bbox !== null ? m.fromPartial(e.bbox) : void 0),
      (t.zIndex = e.zIndex ?? void 0),
      (t.innerXml = e.innerXml ?? void 0),
      (t.outerXml = e.outerXml ?? void 0),
      (t.shape =
        e.shape !== void 0 && e.shape !== null
          ? Co.fromPartial(e.shape)
          : void 0),
      (t.image =
        e.image !== void 0 && e.image !== null
          ? Do.fromPartial(e.image)
          : void 0),
      (t.chartReference =
        e.chartReference !== void 0 && e.chartReference !== null
          ? Ea.fromPartial(e.chartReference)
          : void 0),
      (t.video =
        e.video !== void 0 && e.video !== null
          ? Z.fromPartial(e.video)
          : void 0),
      (t.table =
        e.table !== void 0 && e.table !== null
          ? Ia.fromPartial(e.table)
          : void 0),
      (t.imageReference =
        e.imageReference !== void 0 && e.imageReference !== null
          ? y.fromPartial(e.imageReference)
          : void 0),
      (t.codeBlock =
        e.codeBlock !== void 0 && e.codeBlock !== null
          ? ns.fromPartial(e.codeBlock)
          : void 0),
      (t.embeddedArtifact =
        e.embeddedArtifact !== void 0 && e.embeddedArtifact !== null
          ? Oa.fromPartial(e.embeddedArtifact)
          : void 0),
      (t.paragraphs = e.paragraphs?.map((e) => G.fromPartial(e)) || []),
      (t.name = e.name ?? void 0),
      (t.type = e.type ?? 0),
      (t.placeholderIndex = e.placeholderIndex ?? void 0),
      (t.placeholderType = e.placeholderType ?? void 0),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.effects = e.effects?.map((e) => J.fromPartial(e)) || []),
      (t.children = e.children?.map((e) => L.fromPartial(e)) || []),
      (t.levelsStyles = e.levelsStyles?.map((e) => S.fromPartial(e)) || []),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.line =
        e.line !== void 0 && e.line !== null ? C.fromPartial(e.line) : void 0),
      (t.scene3d =
        e.scene3d !== void 0 && e.scene3d !== null
          ? ga.fromPartial(e.scene3d)
          : void 0),
      (t.shape3d =
        e.shape3d !== void 0 && e.shape3d !== null
          ? va.fromPartial(e.shape3d)
          : void 0),
      (t.imageMask =
        e.imageMask !== void 0 && e.imageMask !== null
          ? X.fromPartial(e.imageMask)
          : void 0),
      (t.lineReference =
        e.lineReference !== void 0 && e.lineReference !== null
          ? R.fromPartial(e.lineReference)
          : void 0),
      (t.fillReference =
        e.fillReference !== void 0 && e.fillReference !== null
          ? R.fromPartial(e.fillReference)
          : void 0),
      (t.effectReference =
        e.effectReference !== void 0 && e.effectReference !== null
          ? R.fromPartial(e.effectReference)
          : void 0),
      (t.fontReference =
        e.fontReference !== void 0 && e.fontReference !== null
          ? R.fromPartial(e.fontReference)
          : void 0),
      (t.hyperlink =
        e.hyperlink !== void 0 && e.hyperlink !== null
          ? q.fromPartial(e.hyperlink)
          : void 0),
      (t.id = e.id ?? ``),
      (t.creationId = e.creationId ?? void 0),
      (t.placement =
        e.placement !== void 0 && e.placement !== null
          ? Ma.fromPartial(e.placement)
          : void 0),
      (t.connector =
        e.connector !== void 0 && e.connector !== null
          ? Pa.fromPartial(e.connector)
          : void 0),
      (t.citations = e.citations?.map((e) => e) || []),
      t
    );
  },
};
function ma() {
  return { index: ``, color: void 0 };
}
var R = {
  encode(e, t = new f()) {
    return (
      e.index !== `` && t.uint32(10).string(e.index),
      e.color !== void 0 && h.encode(e.color, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ma();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.index = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.color = h.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return R.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ma();
    return (
      (t.index = e.index ?? ``),
      (t.color =
        e.color !== void 0 && e.color !== null
          ? h.fromPartial(e.color)
          : void 0),
      t
    );
  },
};
function ha() {
  return { camera: void 0, lightRig: void 0 };
}
var ga = {
  encode(e, t = new f()) {
    return (
      e.camera !== void 0 && xa.encode(e.camera, t.uint32(10).fork()).join(),
      e.lightRig !== void 0 &&
        Ca.encode(e.lightRig, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ha();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.camera = xa.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.lightRig = Ca.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ga.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ha();
    return (
      (t.camera =
        e.camera !== void 0 && e.camera !== null
          ? xa.fromPartial(e.camera)
          : void 0),
      (t.lightRig =
        e.lightRig !== void 0 && e.lightRig !== null
          ? Ca.fromPartial(e.lightRig)
          : void 0),
      t
    );
  },
};
function _a() {
  return {
    zEmu: void 0,
    extrusionHeightEmu: void 0,
    contourWidthEmu: void 0,
    presetMaterial: void 0,
    bevelTop: void 0,
    bevelBottom: void 0,
    extrusionColor: void 0,
    contourColor: void 0,
  };
}
var va = {
  encode(e, t = new f()) {
    return (
      e.zEmu !== void 0 && t.uint32(8).int64(e.zEmu),
      e.extrusionHeightEmu !== void 0 &&
        t.uint32(16).int64(e.extrusionHeightEmu),
      e.contourWidthEmu !== void 0 && t.uint32(24).int64(e.contourWidthEmu),
      e.presetMaterial !== void 0 && t.uint32(34).string(e.presetMaterial),
      e.bevelTop !== void 0 && z.encode(e.bevelTop, t.uint32(42).fork()).join(),
      e.bevelBottom !== void 0 &&
        z.encode(e.bevelBottom, t.uint32(50).fork()).join(),
      e.extrusionColor !== void 0 &&
        h.encode(e.extrusionColor, t.uint32(58).fork()).join(),
      e.contourColor !== void 0 &&
        h.encode(e.contourColor, t.uint32(66).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = _a();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.zEmu = $(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.extrusionHeightEmu = $(n.int64());
          continue;
        case 3:
          if (e !== 24) break;
          i.contourWidthEmu = $(n.int64());
          continue;
        case 4:
          if (e !== 34) break;
          i.presetMaterial = n.string();
          continue;
        case 5:
          if (e !== 42) break;
          i.bevelTop = z.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.bevelBottom = z.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 58) break;
          i.extrusionColor = h.decode(n, n.uint32());
          continue;
        case 8:
          if (e !== 66) break;
          i.contourColor = h.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return va.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = _a();
    return (
      (t.zEmu = e.zEmu ?? void 0),
      (t.extrusionHeightEmu = e.extrusionHeightEmu ?? void 0),
      (t.contourWidthEmu = e.contourWidthEmu ?? void 0),
      (t.presetMaterial = e.presetMaterial ?? void 0),
      (t.bevelTop =
        e.bevelTop !== void 0 && e.bevelTop !== null
          ? z.fromPartial(e.bevelTop)
          : void 0),
      (t.bevelBottom =
        e.bevelBottom !== void 0 && e.bevelBottom !== null
          ? z.fromPartial(e.bevelBottom)
          : void 0),
      (t.extrusionColor =
        e.extrusionColor !== void 0 && e.extrusionColor !== null
          ? h.fromPartial(e.extrusionColor)
          : void 0),
      (t.contourColor =
        e.contourColor !== void 0 && e.contourColor !== null
          ? h.fromPartial(e.contourColor)
          : void 0),
      t
    );
  },
};
function ya() {
  return { widthEmu: void 0, heightEmu: void 0, preset: void 0 };
}
var z = {
  encode(e, t = new f()) {
    return (
      e.widthEmu !== void 0 && t.uint32(8).int64(e.widthEmu),
      e.heightEmu !== void 0 && t.uint32(16).int64(e.heightEmu),
      e.preset !== void 0 && t.uint32(26).string(e.preset),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ya();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.widthEmu = $(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.heightEmu = $(n.int64());
          continue;
        case 3:
          if (e !== 26) break;
          i.preset = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return z.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ya();
    return (
      (t.widthEmu = e.widthEmu ?? void 0),
      (t.heightEmu = e.heightEmu ?? void 0),
      (t.preset = e.preset ?? void 0),
      t
    );
  },
};
function ba() {
  return { preset: ``, rotation: void 0 };
}
var xa = {
  encode(e, t = new f()) {
    return (
      e.preset !== `` && t.uint32(10).string(e.preset),
      e.rotation !== void 0 && B.encode(e.rotation, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ba();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.preset = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.rotation = B.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return xa.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ba();
    return (
      (t.preset = e.preset ?? ``),
      (t.rotation =
        e.rotation !== void 0 && e.rotation !== null
          ? B.fromPartial(e.rotation)
          : void 0),
      t
    );
  },
};
function Sa() {
  return { rig: ``, direction: ``, rotation: void 0 };
}
var Ca = {
  encode(e, t = new f()) {
    return (
      e.rig !== `` && t.uint32(10).string(e.rig),
      e.direction !== `` && t.uint32(18).string(e.direction),
      e.rotation !== void 0 && B.encode(e.rotation, t.uint32(26).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Sa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.rig = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.direction = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.rotation = B.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ca.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Sa();
    return (
      (t.rig = e.rig ?? ``),
      (t.direction = e.direction ?? ``),
      (t.rotation =
        e.rotation !== void 0 && e.rotation !== null
          ? B.fromPartial(e.rotation)
          : void 0),
      t
    );
  },
};
function wa() {
  return { latitude: void 0, longitude: void 0, revolution: void 0 };
}
var B = {
  encode(e, t = new f()) {
    return (
      e.latitude !== void 0 && t.uint32(8).int32(e.latitude),
      e.longitude !== void 0 && t.uint32(16).int32(e.longitude),
      e.revolution !== void 0 && t.uint32(24).int32(e.revolution),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = wa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.latitude = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.longitude = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.revolution = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return B.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = wa();
    return (
      (t.latitude = e.latitude ?? void 0),
      (t.longitude = e.longitude ?? void 0),
      (t.revolution = e.revolution ?? void 0),
      t
    );
  },
};
function Ta() {
  return { id: `` };
}
var Ea = {
  encode(e, t = new f()) {
    return (e.id !== `` && t.uint32(10).string(e.id), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ta();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ea.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ta();
    return ((t.id = e.id ?? ``), t);
  },
};
function Da() {
  return { embeddedView: void 0, previewImageReference: void 0 };
}
var Oa = {
  encode(e, t = new f()) {
    return (
      e.embeddedView !== void 0 &&
        qr.encode(e.embeddedView, t.uint32(10).fork()).join(),
      e.previewImageReference !== void 0 &&
        y.encode(e.previewImageReference, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Da();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.embeddedView = qr.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.previewImageReference = y.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Oa.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Da();
    return (
      (t.embeddedView =
        e.embeddedView !== void 0 && e.embeddedView !== null
          ? qr.fromPartial(e.embeddedView)
          : void 0),
      (t.previewImageReference =
        e.previewImageReference !== void 0 && e.previewImageReference !== null
          ? y.fromPartial(e.previewImageReference)
          : void 0),
      t
    );
  },
};
function ka() {
  return { type: 0, side: void 0 };
}
var Aa = {
  encode(e, t = new f()) {
    return (
      e.type !== 0 && t.uint32(8).int32(e.type),
      e.side !== void 0 && t.uint32(18).string(e.side),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ka();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.type = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.side = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Aa.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ka();
    return ((t.type = e.type ?? 0), (t.side = e.side ?? void 0), t);
  },
};
function ja() {
  return {
    type: 0,
    anchorParagraphId: void 0,
    horizontalRelativeFrom: void 0,
    verticalRelativeFrom: void 0,
    xOffsetEmu: void 0,
    yOffsetEmu: void 0,
    horizontalAlignment: void 0,
    verticalAlignment: void 0,
    wrap: void 0,
    distanceTopEmu: void 0,
    distanceBottomEmu: void 0,
    distanceLeftEmu: void 0,
    distanceRightEmu: void 0,
    behindDocument: void 0,
    layoutInCell: void 0,
    allowOverlap: void 0,
    relativeHeight: void 0,
    locked: void 0,
  };
}
var Ma = {
  encode(e, t = new f()) {
    return (
      e.type !== 0 && t.uint32(8).int32(e.type),
      e.anchorParagraphId !== void 0 &&
        t.uint32(18).string(e.anchorParagraphId),
      e.horizontalRelativeFrom !== void 0 &&
        t.uint32(26).string(e.horizontalRelativeFrom),
      e.verticalRelativeFrom !== void 0 &&
        t.uint32(34).string(e.verticalRelativeFrom),
      e.xOffsetEmu !== void 0 && t.uint32(40).int64(e.xOffsetEmu),
      e.yOffsetEmu !== void 0 && t.uint32(48).int64(e.yOffsetEmu),
      e.horizontalAlignment !== void 0 &&
        t.uint32(58).string(e.horizontalAlignment),
      e.verticalAlignment !== void 0 &&
        t.uint32(66).string(e.verticalAlignment),
      e.wrap !== void 0 && Aa.encode(e.wrap, t.uint32(74).fork()).join(),
      e.distanceTopEmu !== void 0 && t.uint32(80).int64(e.distanceTopEmu),
      e.distanceBottomEmu !== void 0 && t.uint32(88).int64(e.distanceBottomEmu),
      e.distanceLeftEmu !== void 0 && t.uint32(96).int64(e.distanceLeftEmu),
      e.distanceRightEmu !== void 0 && t.uint32(104).int64(e.distanceRightEmu),
      e.behindDocument !== void 0 && t.uint32(112).bool(e.behindDocument),
      e.layoutInCell !== void 0 && t.uint32(120).bool(e.layoutInCell),
      e.allowOverlap !== void 0 && t.uint32(128).bool(e.allowOverlap),
      e.relativeHeight !== void 0 && t.uint32(136).uint32(e.relativeHeight),
      e.locked !== void 0 && t.uint32(144).bool(e.locked),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ja();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.type = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.anchorParagraphId = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.horizontalRelativeFrom = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.verticalRelativeFrom = n.string();
          continue;
        case 5:
          if (e !== 40) break;
          i.xOffsetEmu = $(n.int64());
          continue;
        case 6:
          if (e !== 48) break;
          i.yOffsetEmu = $(n.int64());
          continue;
        case 7:
          if (e !== 58) break;
          i.horizontalAlignment = n.string();
          continue;
        case 8:
          if (e !== 66) break;
          i.verticalAlignment = n.string();
          continue;
        case 9:
          if (e !== 74) break;
          i.wrap = Aa.decode(n, n.uint32());
          continue;
        case 10:
          if (e !== 80) break;
          i.distanceTopEmu = $(n.int64());
          continue;
        case 11:
          if (e !== 88) break;
          i.distanceBottomEmu = $(n.int64());
          continue;
        case 12:
          if (e !== 96) break;
          i.distanceLeftEmu = $(n.int64());
          continue;
        case 13:
          if (e !== 104) break;
          i.distanceRightEmu = $(n.int64());
          continue;
        case 14:
          if (e !== 112) break;
          i.behindDocument = n.bool();
          continue;
        case 15:
          if (e !== 120) break;
          i.layoutInCell = n.bool();
          continue;
        case 16:
          if (e !== 128) break;
          i.allowOverlap = n.bool();
          continue;
        case 17:
          if (e !== 136) break;
          i.relativeHeight = n.uint32();
          continue;
        case 18:
          if (e !== 144) break;
          i.locked = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ma.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ja();
    return (
      (t.type = e.type ?? 0),
      (t.anchorParagraphId = e.anchorParagraphId ?? void 0),
      (t.horizontalRelativeFrom = e.horizontalRelativeFrom ?? void 0),
      (t.verticalRelativeFrom = e.verticalRelativeFrom ?? void 0),
      (t.xOffsetEmu = e.xOffsetEmu ?? void 0),
      (t.yOffsetEmu = e.yOffsetEmu ?? void 0),
      (t.horizontalAlignment = e.horizontalAlignment ?? void 0),
      (t.verticalAlignment = e.verticalAlignment ?? void 0),
      (t.wrap =
        e.wrap !== void 0 && e.wrap !== null ? Aa.fromPartial(e.wrap) : void 0),
      (t.distanceTopEmu = e.distanceTopEmu ?? void 0),
      (t.distanceBottomEmu = e.distanceBottomEmu ?? void 0),
      (t.distanceLeftEmu = e.distanceLeftEmu ?? void 0),
      (t.distanceRightEmu = e.distanceRightEmu ?? void 0),
      (t.behindDocument = e.behindDocument ?? void 0),
      (t.layoutInCell = e.layoutInCell ?? void 0),
      (t.allowOverlap = e.allowOverlap ?? void 0),
      (t.relativeHeight = e.relativeHeight ?? void 0),
      (t.locked = e.locked ?? void 0),
      t
    );
  },
};
function Na() {
  return {
    fromElementId: ``,
    fromIdx: 0,
    toElementId: ``,
    toIdx: 0,
    lineStyle: void 0,
  };
}
var Pa = {
  encode(e, t = new f()) {
    return (
      e.fromElementId !== `` && t.uint32(10).string(e.fromElementId),
      e.fromIdx !== 0 && t.uint32(16).int32(e.fromIdx),
      e.toElementId !== `` && t.uint32(26).string(e.toElementId),
      e.toIdx !== 0 && t.uint32(32).int32(e.toIdx),
      e.lineStyle !== void 0 &&
        us.encode(e.lineStyle, t.uint32(42).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Na();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.fromElementId = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.fromIdx = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.toElementId = n.string();
          continue;
        case 4:
          if (e !== 32) break;
          i.toIdx = n.int32();
          continue;
        case 5:
          if (e !== 42) break;
          i.lineStyle = us.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Pa.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Na();
    return (
      (t.fromElementId = e.fromElementId ?? ``),
      (t.fromIdx = e.fromIdx ?? 0),
      (t.toElementId = e.toElementId ?? ``),
      (t.toIdx = e.toIdx ?? 0),
      (t.lineStyle =
        e.lineStyle !== void 0 && e.lineStyle !== null
          ? us.fromPartial(e.lineStyle)
          : void 0),
      t
    );
  },
};
function Fa() {
  return { rows: [], columnWidths: [], properties: void 0 };
}
var Ia = {
  encode(e, t = new f()) {
    for (let n of e.rows) Ya.encode(n, t.uint32(10).fork()).join();
    t.uint32(18).fork();
    for (let n of e.columnWidths) t.int32(n);
    return (
      t.join(),
      e.properties !== void 0 &&
        V.encode(e.properties, t.uint32(26).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Fa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.rows.push(Ya.decode(n, n.uint32()));
          continue;
        case 2:
          if (e === 16) {
            i.columnWidths.push(n.int32());
            continue;
          }
          if (e === 18) {
            let e = n.uint32() + n.pos;
            for (; n.pos < e; ) i.columnWidths.push(n.int32());
            continue;
          }
          break;
        case 3:
          if (e !== 26) break;
          i.properties = V.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ia.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Fa();
    return (
      (t.rows = e.rows?.map((e) => Ya.fromPartial(e)) || []),
      (t.columnWidths = e.columnWidths?.map((e) => e) || []),
      (t.properties =
        e.properties !== void 0 && e.properties !== null
          ? V.fromPartial(e.properties)
          : void 0),
      t
    );
  },
};
function La() {
  return {
    fill: void 0,
    rightToLeft: void 0,
    firstRow: void 0,
    firstColumn: void 0,
    lastRow: void 0,
    lastColumn: void 0,
    bandedRows: void 0,
    bandedColumns: void 0,
    styleId: void 0,
    effects: [],
    styleXml: void 0,
    alignment: void 0,
    borders: void 0,
    cellMargins: void 0,
  };
}
var V = {
  encode(e, t = new f()) {
    (e.fill !== void 0 && v.encode(e.fill, t.uint32(10).fork()).join(),
      e.rightToLeft !== void 0 && t.uint32(16).bool(e.rightToLeft),
      e.firstRow !== void 0 && t.uint32(24).bool(e.firstRow),
      e.firstColumn !== void 0 && t.uint32(32).bool(e.firstColumn),
      e.lastRow !== void 0 && t.uint32(40).bool(e.lastRow),
      e.lastColumn !== void 0 && t.uint32(48).bool(e.lastColumn),
      e.bandedRows !== void 0 && t.uint32(56).bool(e.bandedRows),
      e.bandedColumns !== void 0 && t.uint32(64).bool(e.bandedColumns),
      e.styleId !== void 0 && t.uint32(74).string(e.styleId));
    for (let n of e.effects) J.encode(n, t.uint32(82).fork()).join();
    return (
      e.styleXml !== void 0 && t.uint32(90).string(e.styleXml),
      e.alignment !== void 0 && t.uint32(96).int32(e.alignment),
      e.borders !== void 0 && Ba.encode(e.borders, t.uint32(106).fork()).join(),
      e.cellMargins !== void 0 &&
        Wa.encode(e.cellMargins, t.uint32(114).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = La();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 16) break;
          i.rightToLeft = n.bool();
          continue;
        case 3:
          if (e !== 24) break;
          i.firstRow = n.bool();
          continue;
        case 4:
          if (e !== 32) break;
          i.firstColumn = n.bool();
          continue;
        case 5:
          if (e !== 40) break;
          i.lastRow = n.bool();
          continue;
        case 6:
          if (e !== 48) break;
          i.lastColumn = n.bool();
          continue;
        case 7:
          if (e !== 56) break;
          i.bandedRows = n.bool();
          continue;
        case 8:
          if (e !== 64) break;
          i.bandedColumns = n.bool();
          continue;
        case 9:
          if (e !== 74) break;
          i.styleId = n.string();
          continue;
        case 10:
          if (e !== 82) break;
          i.effects.push(J.decode(n, n.uint32()));
          continue;
        case 11:
          if (e !== 90) break;
          i.styleXml = n.string();
          continue;
        case 12:
          if (e !== 96) break;
          i.alignment = n.int32();
          continue;
        case 13:
          if (e !== 106) break;
          i.borders = Ba.decode(n, n.uint32());
          continue;
        case 14:
          if (e !== 114) break;
          i.cellMargins = Wa.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return V.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = La();
    return (
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.rightToLeft = e.rightToLeft ?? void 0),
      (t.firstRow = e.firstRow ?? void 0),
      (t.firstColumn = e.firstColumn ?? void 0),
      (t.lastRow = e.lastRow ?? void 0),
      (t.lastColumn = e.lastColumn ?? void 0),
      (t.bandedRows = e.bandedRows ?? void 0),
      (t.bandedColumns = e.bandedColumns ?? void 0),
      (t.styleId = e.styleId ?? void 0),
      (t.effects = e.effects?.map((e) => J.fromPartial(e)) || []),
      (t.styleXml = e.styleXml ?? void 0),
      (t.alignment = e.alignment ?? void 0),
      (t.borders =
        e.borders !== void 0 && e.borders !== null
          ? Ba.fromPartial(e.borders)
          : void 0),
      (t.cellMargins =
        e.cellMargins !== void 0 && e.cellMargins !== null
          ? Wa.fromPartial(e.cellMargins)
          : void 0),
      t
    );
  },
};
function Ra() {
  return { line: void 0, none: void 0 };
}
var H = {
  encode(e, t = new f()) {
    return (
      e.line !== void 0 && C.encode(e.line, t.uint32(10).fork()).join(),
      e.none !== void 0 && t.uint32(16).bool(e.none),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ra();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.line = C.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 16) break;
          i.none = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return H.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ra();
    return (
      (t.line =
        e.line !== void 0 && e.line !== null ? C.fromPartial(e.line) : void 0),
      (t.none = e.none ?? void 0),
      t
    );
  },
};
function za() {
  return {
    top: void 0,
    right: void 0,
    bottom: void 0,
    left: void 0,
    insideHorizontal: void 0,
    insideVertical: void 0,
  };
}
var Ba = {
  encode(e, t = new f()) {
    return (
      e.top !== void 0 && H.encode(e.top, t.uint32(10).fork()).join(),
      e.right !== void 0 && H.encode(e.right, t.uint32(18).fork()).join(),
      e.bottom !== void 0 && H.encode(e.bottom, t.uint32(26).fork()).join(),
      e.left !== void 0 && H.encode(e.left, t.uint32(34).fork()).join(),
      e.insideHorizontal !== void 0 &&
        H.encode(e.insideHorizontal, t.uint32(42).fork()).join(),
      e.insideVertical !== void 0 &&
        H.encode(e.insideVertical, t.uint32(50).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = za();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.top = H.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.right = H.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.bottom = H.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.left = H.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.insideHorizontal = H.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.insideVertical = H.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ba.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = za();
    return (
      (t.top =
        e.top !== void 0 && e.top !== null ? H.fromPartial(e.top) : void 0),
      (t.right =
        e.right !== void 0 && e.right !== null
          ? H.fromPartial(e.right)
          : void 0),
      (t.bottom =
        e.bottom !== void 0 && e.bottom !== null
          ? H.fromPartial(e.bottom)
          : void 0),
      (t.left =
        e.left !== void 0 && e.left !== null ? H.fromPartial(e.left) : void 0),
      (t.insideHorizontal =
        e.insideHorizontal !== void 0 && e.insideHorizontal !== null
          ? H.fromPartial(e.insideHorizontal)
          : void 0),
      (t.insideVertical =
        e.insideVertical !== void 0 && e.insideVertical !== null
          ? H.fromPartial(e.insideVertical)
          : void 0),
      t
    );
  },
};
function Va() {
  return {
    top: void 0,
    right: void 0,
    bottom: void 0,
    left: void 0,
    diagonalDown: void 0,
    diagonalUp: void 0,
  };
}
var Ha = {
  encode(e, t = new f()) {
    return (
      e.top !== void 0 && H.encode(e.top, t.uint32(10).fork()).join(),
      e.right !== void 0 && H.encode(e.right, t.uint32(18).fork()).join(),
      e.bottom !== void 0 && H.encode(e.bottom, t.uint32(26).fork()).join(),
      e.left !== void 0 && H.encode(e.left, t.uint32(34).fork()).join(),
      e.diagonalDown !== void 0 &&
        H.encode(e.diagonalDown, t.uint32(42).fork()).join(),
      e.diagonalUp !== void 0 &&
        H.encode(e.diagonalUp, t.uint32(50).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Va();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.top = H.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.right = H.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.bottom = H.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.left = H.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.diagonalDown = H.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.diagonalUp = H.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ha.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Va();
    return (
      (t.top =
        e.top !== void 0 && e.top !== null ? H.fromPartial(e.top) : void 0),
      (t.right =
        e.right !== void 0 && e.right !== null
          ? H.fromPartial(e.right)
          : void 0),
      (t.bottom =
        e.bottom !== void 0 && e.bottom !== null
          ? H.fromPartial(e.bottom)
          : void 0),
      (t.left =
        e.left !== void 0 && e.left !== null ? H.fromPartial(e.left) : void 0),
      (t.diagonalDown =
        e.diagonalDown !== void 0 && e.diagonalDown !== null
          ? H.fromPartial(e.diagonalDown)
          : void 0),
      (t.diagonalUp =
        e.diagonalUp !== void 0 && e.diagonalUp !== null
          ? H.fromPartial(e.diagonalUp)
          : void 0),
      t
    );
  },
};
function Ua() {
  return { left: void 0, right: void 0, top: void 0, bottom: void 0 };
}
var Wa = {
  encode(e, t = new f()) {
    return (
      e.left !== void 0 && t.uint32(8).int32(e.left),
      e.right !== void 0 && t.uint32(16).int32(e.right),
      e.top !== void 0 && t.uint32(24).int32(e.top),
      e.bottom !== void 0 && t.uint32(32).int32(e.bottom),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ua();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.left = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.right = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.top = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.bottom = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Wa.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ua();
    return (
      (t.left = e.left ?? void 0),
      (t.right = e.right ?? void 0),
      (t.top = e.top ?? void 0),
      (t.bottom = e.bottom ?? void 0),
      t
    );
  },
};
function Ga() {
  return {
    id: void 0,
    text: ``,
    textStyle: void 0,
    paragraphs: [],
    levelsStyles: [],
    fill: void 0,
    lines: void 0,
    gridSpan: void 0,
    rowSpan: void 0,
    horizontalMerge: void 0,
    verticalMerge: void 0,
    textDirection: void 0,
    marginLeft: void 0,
    marginRight: void 0,
    marginTop: void 0,
    marginBottom: void 0,
    anchor: void 0,
    anchorCenter: void 0,
    horizontalOverflow: void 0,
    elements: [],
  };
}
var Ka = {
  encode(e, t = new f()) {
    (e.id !== void 0 && t.uint32(58).string(e.id),
      e.text !== `` && t.uint32(10).string(e.text),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(18).fork()).join());
    for (let n of e.paragraphs) G.encode(n, t.uint32(26).fork()).join();
    for (let n of e.levelsStyles) S.encode(n, t.uint32(34).fork()).join();
    (e.fill !== void 0 && v.encode(e.fill, t.uint32(42).fork()).join(),
      e.lines !== void 0 && U.encode(e.lines, t.uint32(50).fork()).join(),
      e.gridSpan !== void 0 && t.uint32(64).int32(e.gridSpan),
      e.rowSpan !== void 0 && t.uint32(72).int32(e.rowSpan),
      e.horizontalMerge !== void 0 && t.uint32(80).bool(e.horizontalMerge),
      e.verticalMerge !== void 0 && t.uint32(88).bool(e.verticalMerge),
      e.textDirection !== void 0 && t.uint32(98).string(e.textDirection),
      e.marginLeft !== void 0 && t.uint32(104).int32(e.marginLeft),
      e.marginRight !== void 0 && t.uint32(112).int32(e.marginRight),
      e.marginTop !== void 0 && t.uint32(120).int32(e.marginTop),
      e.marginBottom !== void 0 && t.uint32(128).int32(e.marginBottom),
      e.anchor !== void 0 && t.uint32(138).string(e.anchor),
      e.anchorCenter !== void 0 && t.uint32(144).bool(e.anchorCenter),
      e.horizontalOverflow !== void 0 &&
        t.uint32(154).string(e.horizontalOverflow));
    for (let n of e.elements) L.encode(n, t.uint32(162).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ga();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 7:
          if (e !== 58) break;
          i.id = n.string();
          continue;
        case 1:
          if (e !== 10) break;
          i.text = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.paragraphs.push(G.decode(n, n.uint32()));
          continue;
        case 4:
          if (e !== 34) break;
          i.levelsStyles.push(S.decode(n, n.uint32()));
          continue;
        case 5:
          if (e !== 42) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.lines = U.decode(n, n.uint32());
          continue;
        case 8:
          if (e !== 64) break;
          i.gridSpan = n.int32();
          continue;
        case 9:
          if (e !== 72) break;
          i.rowSpan = n.int32();
          continue;
        case 10:
          if (e !== 80) break;
          i.horizontalMerge = n.bool();
          continue;
        case 11:
          if (e !== 88) break;
          i.verticalMerge = n.bool();
          continue;
        case 12:
          if (e !== 98) break;
          i.textDirection = n.string();
          continue;
        case 13:
          if (e !== 104) break;
          i.marginLeft = n.int32();
          continue;
        case 14:
          if (e !== 112) break;
          i.marginRight = n.int32();
          continue;
        case 15:
          if (e !== 120) break;
          i.marginTop = n.int32();
          continue;
        case 16:
          if (e !== 128) break;
          i.marginBottom = n.int32();
          continue;
        case 17:
          if (e !== 138) break;
          i.anchor = n.string();
          continue;
        case 18:
          if (e !== 144) break;
          i.anchorCenter = n.bool();
          continue;
        case 19:
          if (e !== 154) break;
          i.horizontalOverflow = n.string();
          continue;
        case 20:
          if (e !== 162) break;
          i.elements.push(L.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ka.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ga();
    return (
      (t.id = e.id ?? void 0),
      (t.text = e.text ?? ``),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.paragraphs = e.paragraphs?.map((e) => G.fromPartial(e)) || []),
      (t.levelsStyles = e.levelsStyles?.map((e) => S.fromPartial(e)) || []),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.lines =
        e.lines !== void 0 && e.lines !== null
          ? U.fromPartial(e.lines)
          : void 0),
      (t.gridSpan = e.gridSpan ?? void 0),
      (t.rowSpan = e.rowSpan ?? void 0),
      (t.horizontalMerge = e.horizontalMerge ?? void 0),
      (t.verticalMerge = e.verticalMerge ?? void 0),
      (t.textDirection = e.textDirection ?? void 0),
      (t.marginLeft = e.marginLeft ?? void 0),
      (t.marginRight = e.marginRight ?? void 0),
      (t.marginTop = e.marginTop ?? void 0),
      (t.marginBottom = e.marginBottom ?? void 0),
      (t.anchor = e.anchor ?? void 0),
      (t.anchorCenter = e.anchorCenter ?? void 0),
      (t.horizontalOverflow = e.horizontalOverflow ?? void 0),
      (t.elements = e.elements?.map((e) => L.fromPartial(e)) || []),
      t
    );
  },
};
function qa() {
  return {
    top: void 0,
    right: void 0,
    bottom: void 0,
    left: void 0,
    diagonalDown: void 0,
    diagonalUp: void 0,
  };
}
var U = {
  encode(e, t = new f()) {
    return (
      e.top !== void 0 && C.encode(e.top, t.uint32(10).fork()).join(),
      e.right !== void 0 && C.encode(e.right, t.uint32(18).fork()).join(),
      e.bottom !== void 0 && C.encode(e.bottom, t.uint32(26).fork()).join(),
      e.left !== void 0 && C.encode(e.left, t.uint32(34).fork()).join(),
      e.diagonalDown !== void 0 &&
        C.encode(e.diagonalDown, t.uint32(42).fork()).join(),
      e.diagonalUp !== void 0 &&
        C.encode(e.diagonalUp, t.uint32(50).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = qa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.top = C.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.right = C.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.bottom = C.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.left = C.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.diagonalDown = C.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.diagonalUp = C.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return U.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = qa();
    return (
      (t.top =
        e.top !== void 0 && e.top !== null ? C.fromPartial(e.top) : void 0),
      (t.right =
        e.right !== void 0 && e.right !== null
          ? C.fromPartial(e.right)
          : void 0),
      (t.bottom =
        e.bottom !== void 0 && e.bottom !== null
          ? C.fromPartial(e.bottom)
          : void 0),
      (t.left =
        e.left !== void 0 && e.left !== null ? C.fromPartial(e.left) : void 0),
      (t.diagonalDown =
        e.diagonalDown !== void 0 && e.diagonalDown !== null
          ? C.fromPartial(e.diagonalDown)
          : void 0),
      (t.diagonalUp =
        e.diagonalUp !== void 0 && e.diagonalUp !== null
          ? C.fromPartial(e.diagonalUp)
          : void 0),
      t
    );
  },
};
function Ja() {
  return { id: void 0, cells: [], heightEmu: void 0 };
}
var Ya = {
  encode(e, t = new f()) {
    e.id !== void 0 && t.uint32(26).string(e.id);
    for (let n of e.cells) Ka.encode(n, t.uint32(10).fork()).join();
    return (e.heightEmu !== void 0 && t.uint32(16).int32(e.heightEmu), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Ja();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 3:
          if (e !== 26) break;
          i.id = n.string();
          continue;
        case 1:
          if (e !== 10) break;
          i.cells.push(Ka.decode(n, n.uint32()));
          continue;
        case 2:
          if (e !== 16) break;
          i.heightEmu = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ya.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Ja();
    return (
      (t.id = e.id ?? void 0),
      (t.cells = e.cells?.map((e) => Ka.fromPartial(e)) || []),
      (t.heightEmu = e.heightEmu ?? void 0),
      t
    );
  },
};
function Xa() {
  return {
    textStyle: void 0,
    paragraphStyle: void 0,
    fill: void 0,
    lines: void 0,
    marginLeft: void 0,
    marginRight: void 0,
    marginTop: void 0,
    marginBottom: void 0,
    anchor: void 0,
    textDirection: void 0,
    borders: void 0,
  };
}
var Za = {
  encode(e, t = new f()) {
    return (
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(10).fork()).join(),
      e.paragraphStyle !== void 0 &&
        x.encode(e.paragraphStyle, t.uint32(18).fork()).join(),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(26).fork()).join(),
      e.lines !== void 0 && U.encode(e.lines, t.uint32(34).fork()).join(),
      e.marginLeft !== void 0 && t.uint32(40).int32(e.marginLeft),
      e.marginRight !== void 0 && t.uint32(48).int32(e.marginRight),
      e.marginTop !== void 0 && t.uint32(56).int32(e.marginTop),
      e.marginBottom !== void 0 && t.uint32(64).int32(e.marginBottom),
      e.anchor !== void 0 && t.uint32(74).string(e.anchor),
      e.textDirection !== void 0 && t.uint32(82).string(e.textDirection),
      e.borders !== void 0 && Ha.encode(e.borders, t.uint32(90).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Xa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.paragraphStyle = x.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.lines = U.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 40) break;
          i.marginLeft = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.marginRight = n.int32();
          continue;
        case 7:
          if (e !== 56) break;
          i.marginTop = n.int32();
          continue;
        case 8:
          if (e !== 64) break;
          i.marginBottom = n.int32();
          continue;
        case 9:
          if (e !== 74) break;
          i.anchor = n.string();
          continue;
        case 10:
          if (e !== 82) break;
          i.textDirection = n.string();
          continue;
        case 11:
          if (e !== 90) break;
          i.borders = Ha.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Za.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Xa();
    return (
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.paragraphStyle =
        e.paragraphStyle !== void 0 && e.paragraphStyle !== null
          ? x.fromPartial(e.paragraphStyle)
          : void 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.lines =
        e.lines !== void 0 && e.lines !== null
          ? U.fromPartial(e.lines)
          : void 0),
      (t.marginLeft = e.marginLeft ?? void 0),
      (t.marginRight = e.marginRight ?? void 0),
      (t.marginTop = e.marginTop ?? void 0),
      (t.marginBottom = e.marginBottom ?? void 0),
      (t.anchor = e.anchor ?? void 0),
      (t.textDirection = e.textDirection ?? void 0),
      (t.borders =
        e.borders !== void 0 && e.borders !== null
          ? Ha.fromPartial(e.borders)
          : void 0),
      t
    );
  },
};
function Qa() {
  return {
    tableProperties: void 0,
    cellStyle: void 0,
    textStyle: void 0,
    paragraphStyle: void 0,
    spaceBefore: void 0,
    spaceAfter: void 0,
  };
}
var W = {
  encode(e, t = new f()) {
    return (
      e.tableProperties !== void 0 &&
        V.encode(e.tableProperties, t.uint32(10).fork()).join(),
      e.cellStyle !== void 0 &&
        Za.encode(e.cellStyle, t.uint32(18).fork()).join(),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(26).fork()).join(),
      e.paragraphStyle !== void 0 &&
        x.encode(e.paragraphStyle, t.uint32(34).fork()).join(),
      e.spaceBefore !== void 0 && t.uint32(40).int32(e.spaceBefore),
      e.spaceAfter !== void 0 && t.uint32(48).int32(e.spaceAfter),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Qa();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.tableProperties = V.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.cellStyle = Za.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.paragraphStyle = x.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 40) break;
          i.spaceBefore = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.spaceAfter = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return W.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Qa();
    return (
      (t.tableProperties =
        e.tableProperties !== void 0 && e.tableProperties !== null
          ? V.fromPartial(e.tableProperties)
          : void 0),
      (t.cellStyle =
        e.cellStyle !== void 0 && e.cellStyle !== null
          ? Za.fromPartial(e.cellStyle)
          : void 0),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.paragraphStyle =
        e.paragraphStyle !== void 0 && e.paragraphStyle !== null
          ? x.fromPartial(e.paragraphStyle)
          : void 0),
      (t.spaceBefore = e.spaceBefore ?? void 0),
      (t.spaceAfter = e.spaceAfter ?? void 0),
      t
    );
  },
};
function $a() {
  return { condition: 0, style: void 0 };
}
var eo = {
  encode(e, t = new f()) {
    return (
      e.condition !== 0 && t.uint32(8).int32(e.condition),
      e.style !== void 0 && W.encode(e.style, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = $a();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.condition = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.style = W.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return eo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = $a();
    return (
      (t.condition = e.condition ?? 0),
      (t.style =
        e.style !== void 0 && e.style !== null
          ? W.fromPartial(e.style)
          : void 0),
      t
    );
  },
};
function to() {
  return {
    id: ``,
    name: ``,
    basedOn: void 0,
    wholeTable: void 0,
    conditionalStyles: [],
  };
}
var no = {
  encode(e, t = new f()) {
    (e.id !== `` && t.uint32(10).string(e.id),
      e.name !== `` && t.uint32(18).string(e.name),
      e.basedOn !== void 0 && t.uint32(26).string(e.basedOn),
      e.wholeTable !== void 0 &&
        W.encode(e.wholeTable, t.uint32(34).fork()).join());
    for (let n of e.conditionalStyles) eo.encode(n, t.uint32(42).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = to();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.name = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.basedOn = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.wholeTable = W.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.conditionalStyles.push(eo.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return no.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = to();
    return (
      (t.id = e.id ?? ``),
      (t.name = e.name ?? ``),
      (t.basedOn = e.basedOn ?? void 0),
      (t.wholeTable =
        e.wholeTable !== void 0 && e.wholeTable !== null
          ? W.fromPartial(e.wholeTable)
          : void 0),
      (t.conditionalStyles =
        e.conditionalStyles?.map((e) => eo.fromPartial(e)) || []),
      t
    );
  },
};
function ro() {
  return {
    id: void 0,
    runs: [],
    textStyle: void 0,
    bulletCharacter: void 0,
    marginLeft: void 0,
    indent: void 0,
    spaceAfter: void 0,
    spaceBefore: void 0,
    styleId: void 0,
    paragraphStyle: void 0,
    docxSectionBreakCarrier: void 0,
    inlineNodes: [],
  };
}
var G = {
  encode(e, t = new f()) {
    e.id !== void 0 && t.uint32(74).string(e.id);
    for (let n of e.runs) K.encode(n, t.uint32(10).fork()).join();
    (e.textStyle !== void 0 &&
      b.encode(e.textStyle, t.uint32(18).fork()).join(),
      e.bulletCharacter !== void 0 && t.uint32(26).string(e.bulletCharacter),
      e.marginLeft !== void 0 && t.uint32(32).int32(e.marginLeft),
      e.indent !== void 0 && t.uint32(40).int32(e.indent),
      e.spaceAfter !== void 0 && t.uint32(48).int32(e.spaceAfter),
      e.spaceBefore !== void 0 && t.uint32(56).int32(e.spaceBefore),
      e.styleId !== void 0 && t.uint32(66).string(e.styleId),
      e.paragraphStyle !== void 0 &&
        x.encode(e.paragraphStyle, t.uint32(82).fork()).join(),
      e.docxSectionBreakCarrier !== void 0 &&
        t.uint32(88).bool(e.docxSectionBreakCarrier));
    for (let n of e.inlineNodes) ao.encode(n, t.uint32(98).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ro();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 9:
          if (e !== 74) break;
          i.id = n.string();
          continue;
        case 1:
          if (e !== 10) break;
          i.runs.push(K.decode(n, n.uint32()));
          continue;
        case 2:
          if (e !== 18) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.bulletCharacter = n.string();
          continue;
        case 4:
          if (e !== 32) break;
          i.marginLeft = n.int32();
          continue;
        case 5:
          if (e !== 40) break;
          i.indent = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.spaceAfter = n.int32();
          continue;
        case 7:
          if (e !== 56) break;
          i.spaceBefore = n.int32();
          continue;
        case 8:
          if (e !== 66) break;
          i.styleId = n.string();
          continue;
        case 10:
          if (e !== 82) break;
          i.paragraphStyle = x.decode(n, n.uint32());
          continue;
        case 11:
          if (e !== 88) break;
          i.docxSectionBreakCarrier = n.bool();
          continue;
        case 12:
          if (e !== 98) break;
          i.inlineNodes.push(ao.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return G.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ro();
    return (
      (t.id = e.id ?? void 0),
      (t.runs = e.runs?.map((e) => K.fromPartial(e)) || []),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.bulletCharacter = e.bulletCharacter ?? void 0),
      (t.marginLeft = e.marginLeft ?? void 0),
      (t.indent = e.indent ?? void 0),
      (t.spaceAfter = e.spaceAfter ?? void 0),
      (t.spaceBefore = e.spaceBefore ?? void 0),
      (t.styleId = e.styleId ?? void 0),
      (t.paragraphStyle =
        e.paragraphStyle !== void 0 && e.paragraphStyle !== null
          ? x.fromPartial(e.paragraphStyle)
          : void 0),
      (t.docxSectionBreakCarrier = e.docxSectionBreakCarrier ?? void 0),
      (t.inlineNodes = e.inlineNodes?.map((e) => ao.fromPartial(e)) || []),
      t
    );
  },
};
function io() {
  return { textRun: void 0, math: void 0 };
}
var ao = {
  encode(e, t = new f()) {
    return (
      e.textRun !== void 0 && K.encode(e.textRun, t.uint32(10).fork()).join(),
      e.math !== void 0 && ai.encode(e.math, t.uint32(18).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = io();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.textRun = K.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.math = ai.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ao.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = io();
    return (
      (t.textRun =
        e.textRun !== void 0 && e.textRun !== null
          ? K.fromPartial(e.textRun)
          : void 0),
      (t.math =
        e.math !== void 0 && e.math !== null ? ai.fromPartial(e.math) : void 0),
      t
    );
  },
};
function oo() {
  return {
    id: void 0,
    text: ``,
    textStyle: void 0,
    hyperlink: void 0,
    citations: [],
    reviewMarkIds: [],
    styleId: void 0,
  };
}
var K = {
  encode(e, t = new f()) {
    (e.id !== void 0 && t.uint32(34).string(e.id),
      e.text !== `` && t.uint32(10).string(e.text),
      e.textStyle !== void 0 &&
        b.encode(e.textStyle, t.uint32(18).fork()).join(),
      e.hyperlink !== void 0 &&
        q.encode(e.hyperlink, t.uint32(26).fork()).join());
    for (let n of e.citations) t.uint32(42).string(n);
    for (let n of e.reviewMarkIds) t.uint32(50).string(n);
    return (e.styleId !== void 0 && t.uint32(58).string(e.styleId), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = oo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 4:
          if (e !== 34) break;
          i.id = n.string();
          continue;
        case 1:
          if (e !== 10) break;
          i.text = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.textStyle = b.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.hyperlink = q.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.citations.push(n.string());
          continue;
        case 6:
          if (e !== 50) break;
          i.reviewMarkIds.push(n.string());
          continue;
        case 7:
          if (e !== 58) break;
          i.styleId = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return K.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = oo();
    return (
      (t.id = e.id ?? void 0),
      (t.text = e.text ?? ``),
      (t.textStyle =
        e.textStyle !== void 0 && e.textStyle !== null
          ? b.fromPartial(e.textStyle)
          : void 0),
      (t.hyperlink =
        e.hyperlink !== void 0 && e.hyperlink !== null
          ? q.fromPartial(e.hyperlink)
          : void 0),
      (t.citations = e.citations?.map((e) => e) || []),
      (t.reviewMarkIds = e.reviewMarkIds?.map((e) => e) || []),
      (t.styleId = e.styleId ?? void 0),
      t
    );
  },
};
function so() {
  return { uri: ``, isExternal: !1, action: `` };
}
var q = {
  encode(e, t = new f()) {
    return (
      e.uri !== `` && t.uint32(10).string(e.uri),
      e.isExternal !== !1 && t.uint32(16).bool(e.isExternal),
      e.action !== `` && t.uint32(26).string(e.action),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = so();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.uri = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.isExternal = n.bool();
          continue;
        case 3:
          if (e !== 26) break;
          i.action = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return q.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = so();
    return (
      (t.uri = e.uri ?? ``),
      (t.isExternal = e.isExternal ?? !1),
      (t.action = e.action ?? ``),
      t
    );
  },
};
function co() {
  return { effects: [] };
}
var lo = {
  encode(e, t = new f()) {
    for (let n of e.effects) J.encode(n, t.uint32(10).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = co();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.effects.push(J.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return lo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = co();
    return ((t.effects = e.effects?.map((e) => J.fromPartial(e)) || []), t);
  },
};
function uo() {
  return {
    type: 0,
    shadow: void 0,
    glow: void 0,
    reflection: void 0,
    softEdges: void 0,
  };
}
var J = {
  encode(e, t = new f()) {
    return (
      e.type !== 0 && t.uint32(8).int32(e.type),
      e.shadow !== void 0 && yo.encode(e.shadow, t.uint32(18).fork()).join(),
      e.glow !== void 0 && po.encode(e.glow, t.uint32(26).fork()).join(),
      e.reflection !== void 0 &&
        _o.encode(e.reflection, t.uint32(34).fork()).join(),
      e.softEdges !== void 0 &&
        ho.encode(e.softEdges, t.uint32(42).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = uo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.type = n.int32();
          continue;
        case 2:
          if (e !== 18) break;
          i.shadow = yo.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.glow = po.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.reflection = _o.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.softEdges = ho.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return J.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = uo();
    return (
      (t.type = e.type ?? 0),
      (t.shadow =
        e.shadow !== void 0 && e.shadow !== null
          ? yo.fromPartial(e.shadow)
          : void 0),
      (t.glow =
        e.glow !== void 0 && e.glow !== null ? po.fromPartial(e.glow) : void 0),
      (t.reflection =
        e.reflection !== void 0 && e.reflection !== null
          ? _o.fromPartial(e.reflection)
          : void 0),
      (t.softEdges =
        e.softEdges !== void 0 && e.softEdges !== null
          ? ho.fromPartial(e.softEdges)
          : void 0),
      t
    );
  },
};
function fo() {
  return { color: void 0, radiusEmu: void 0 };
}
var po = {
  encode(e, t = new f()) {
    return (
      e.color !== void 0 && h.encode(e.color, t.uint32(10).fork()).join(),
      e.radiusEmu !== void 0 && t.uint32(16).int64(e.radiusEmu),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = fo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.color = h.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 16) break;
          i.radiusEmu = $(n.int64());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return po.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = fo();
    return (
      (t.color =
        e.color !== void 0 && e.color !== null
          ? h.fromPartial(e.color)
          : void 0),
      (t.radiusEmu = e.radiusEmu ?? void 0),
      t
    );
  },
};
function mo() {
  return { radiusEmu: void 0 };
}
var ho = {
  encode(e, t = new f()) {
    return (e.radiusEmu !== void 0 && t.uint32(8).int64(e.radiusEmu), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = mo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.radiusEmu = $(n.int64());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ho.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = mo();
    return ((t.radiusEmu = e.radiusEmu ?? void 0), t);
  },
};
function go() {
  return {
    blurRadiusEmu: void 0,
    startAlpha: void 0,
    startPosition: void 0,
    endAlpha: void 0,
    endPosition: void 0,
    distanceEmu: void 0,
    direction: void 0,
    fadeDirection: void 0,
    horizontalScale: void 0,
    verticalScale: void 0,
    horizontalSkew: void 0,
    verticalSkew: void 0,
    alignment: void 0,
    rotateWithShape: void 0,
  };
}
var _o = {
  encode(e, t = new f()) {
    return (
      e.blurRadiusEmu !== void 0 && t.uint32(8).int64(e.blurRadiusEmu),
      e.startAlpha !== void 0 && t.uint32(16).int32(e.startAlpha),
      e.startPosition !== void 0 && t.uint32(24).int32(e.startPosition),
      e.endAlpha !== void 0 && t.uint32(32).int32(e.endAlpha),
      e.endPosition !== void 0 && t.uint32(40).int32(e.endPosition),
      e.distanceEmu !== void 0 && t.uint32(48).int64(e.distanceEmu),
      e.direction !== void 0 && t.uint32(56).int32(e.direction),
      e.fadeDirection !== void 0 && t.uint32(64).int32(e.fadeDirection),
      e.horizontalScale !== void 0 && t.uint32(72).int32(e.horizontalScale),
      e.verticalScale !== void 0 && t.uint32(80).int32(e.verticalScale),
      e.horizontalSkew !== void 0 && t.uint32(88).int32(e.horizontalSkew),
      e.verticalSkew !== void 0 && t.uint32(96).int32(e.verticalSkew),
      e.alignment !== void 0 && t.uint32(106).string(e.alignment),
      e.rotateWithShape !== void 0 && t.uint32(112).bool(e.rotateWithShape),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = go();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.blurRadiusEmu = $(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.startAlpha = n.int32();
          continue;
        case 3:
          if (e !== 24) break;
          i.startPosition = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.endAlpha = n.int32();
          continue;
        case 5:
          if (e !== 40) break;
          i.endPosition = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.distanceEmu = $(n.int64());
          continue;
        case 7:
          if (e !== 56) break;
          i.direction = n.int32();
          continue;
        case 8:
          if (e !== 64) break;
          i.fadeDirection = n.int32();
          continue;
        case 9:
          if (e !== 72) break;
          i.horizontalScale = n.int32();
          continue;
        case 10:
          if (e !== 80) break;
          i.verticalScale = n.int32();
          continue;
        case 11:
          if (e !== 88) break;
          i.horizontalSkew = n.int32();
          continue;
        case 12:
          if (e !== 96) break;
          i.verticalSkew = n.int32();
          continue;
        case 13:
          if (e !== 106) break;
          i.alignment = n.string();
          continue;
        case 14:
          if (e !== 112) break;
          i.rotateWithShape = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return _o.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = go();
    return (
      (t.blurRadiusEmu = e.blurRadiusEmu ?? void 0),
      (t.startAlpha = e.startAlpha ?? void 0),
      (t.startPosition = e.startPosition ?? void 0),
      (t.endAlpha = e.endAlpha ?? void 0),
      (t.endPosition = e.endPosition ?? void 0),
      (t.distanceEmu = e.distanceEmu ?? void 0),
      (t.direction = e.direction ?? void 0),
      (t.fadeDirection = e.fadeDirection ?? void 0),
      (t.horizontalScale = e.horizontalScale ?? void 0),
      (t.verticalScale = e.verticalScale ?? void 0),
      (t.horizontalSkew = e.horizontalSkew ?? void 0),
      (t.verticalSkew = e.verticalSkew ?? void 0),
      (t.alignment = e.alignment ?? void 0),
      (t.rotateWithShape = e.rotateWithShape ?? void 0),
      t
    );
  },
};
function vo() {
  return {
    color: void 0,
    blurRadius: void 0,
    distance: void 0,
    direction: void 0,
    alignment: void 0,
    rotateWithShape: void 0,
  };
}
var yo = {
  encode(e, t = new f()) {
    return (
      e.color !== void 0 && h.encode(e.color, t.uint32(18).fork()).join(),
      e.blurRadius !== void 0 && t.uint32(24).int32(e.blurRadius),
      e.distance !== void 0 && t.uint32(32).int32(e.distance),
      e.direction !== void 0 && t.uint32(40).int32(e.direction),
      e.alignment !== void 0 && t.uint32(50).string(e.alignment),
      e.rotateWithShape !== void 0 && t.uint32(56).bool(e.rotateWithShape),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = vo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 2:
          if (e !== 18) break;
          i.color = h.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 24) break;
          i.blurRadius = n.int32();
          continue;
        case 4:
          if (e !== 32) break;
          i.distance = n.int32();
          continue;
        case 5:
          if (e !== 40) break;
          i.direction = n.int32();
          continue;
        case 6:
          if (e !== 50) break;
          i.alignment = n.string();
          continue;
        case 7:
          if (e !== 56) break;
          i.rotateWithShape = n.bool();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return yo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = vo();
    return (
      (t.color =
        e.color !== void 0 && e.color !== null
          ? h.fromPartial(e.color)
          : void 0),
      (t.blurRadius = e.blurRadius ?? void 0),
      (t.distance = e.distance ?? void 0),
      (t.direction = e.direction ?? void 0),
      (t.alignment = e.alignment ?? void 0),
      (t.rotateWithShape = e.rotateWithShape ?? void 0),
      t
    );
  },
};
function bo() {
  return { anchor: `` };
}
var xo = {
  encode(e, t = new f()) {
    return (e.anchor !== `` && t.uint32(10).string(e.anchor), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = bo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.anchor = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return xo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = bo();
    return ((t.anchor = e.anchor ?? ``), t);
  },
};
function So() {
  return {
    geometry: 0,
    fill: void 0,
    line: void 0,
    adjustmentList: [],
    rectFormula: void 0,
    customPaths: [],
  };
}
var Co = {
  encode(e, t = new f()) {
    (e.geometry !== 0 && t.uint32(8).int32(e.geometry),
      e.fill !== void 0 && v.encode(e.fill, t.uint32(42).fork()).join(),
      e.line !== void 0 && C.encode(e.line, t.uint32(50).fork()).join());
    for (let n of e.adjustmentList) Y.encode(n, t.uint32(58).fork()).join();
    e.rectFormula !== void 0 &&
      Mo.encode(e.rectFormula, t.uint32(66).fork()).join();
    for (let n of e.customPaths) Jo.encode(n, t.uint32(74).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = So();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.geometry = n.int32();
          continue;
        case 5:
          if (e !== 42) break;
          i.fill = v.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.line = C.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 58) break;
          i.adjustmentList.push(Y.decode(n, n.uint32()));
          continue;
        case 8:
          if (e !== 66) break;
          i.rectFormula = Mo.decode(n, n.uint32());
          continue;
        case 9:
          if (e !== 74) break;
          i.customPaths.push(Jo.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Co.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = So();
    return (
      (t.geometry = e.geometry ?? 0),
      (t.fill =
        e.fill !== void 0 && e.fill !== null ? v.fromPartial(e.fill) : void 0),
      (t.line =
        e.line !== void 0 && e.line !== null ? C.fromPartial(e.line) : void 0),
      (t.adjustmentList = e.adjustmentList?.map((e) => Y.fromPartial(e)) || []),
      (t.rectFormula =
        e.rectFormula !== void 0 && e.rectFormula !== null
          ? Mo.fromPartial(e.rectFormula)
          : void 0),
      (t.customPaths = e.customPaths?.map((e) => Jo.fromPartial(e)) || []),
      t
    );
  },
};
function wo() {
  return { name: ``, formula: `` };
}
var Y = {
  encode(e, t = new f()) {
    return (
      e.name !== `` && t.uint32(10).string(e.name),
      e.formula !== `` && t.uint32(18).string(e.formula),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = wo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.name = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.formula = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Y.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = wo();
    return ((t.name = e.name ?? ``), (t.formula = e.formula ?? ``), t);
  },
};
function To() {
  return {
    geometry: ``,
    cropLeft: 0,
    cropTop: 0,
    cropRight: 0,
    cropBottom: 0,
    adjustmentList: [],
  };
}
var X = {
  encode(e, t = new f()) {
    (e.geometry !== `` && t.uint32(10).string(e.geometry),
      e.cropLeft !== 0 && t.uint32(16).uint32(e.cropLeft),
      e.cropTop !== 0 && t.uint32(24).uint32(e.cropTop),
      e.cropRight !== 0 && t.uint32(32).uint32(e.cropRight),
      e.cropBottom !== 0 && t.uint32(40).uint32(e.cropBottom));
    for (let n of e.adjustmentList) Y.encode(n, t.uint32(50).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = To();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.geometry = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.cropLeft = n.uint32();
          continue;
        case 3:
          if (e !== 24) break;
          i.cropTop = n.uint32();
          continue;
        case 4:
          if (e !== 32) break;
          i.cropRight = n.uint32();
          continue;
        case 5:
          if (e !== 40) break;
          i.cropBottom = n.uint32();
          continue;
        case 6:
          if (e !== 50) break;
          i.adjustmentList.push(Y.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return X.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = To();
    return (
      (t.geometry = e.geometry ?? ``),
      (t.cropLeft = e.cropLeft ?? 0),
      (t.cropTop = e.cropTop ?? 0),
      (t.cropRight = e.cropRight ?? 0),
      (t.cropBottom = e.cropBottom ?? 0),
      (t.adjustmentList = e.adjustmentList?.map((e) => Y.fromPartial(e)) || []),
      t
    );
  },
};
function Eo() {
  return { contentType: ``, data: new Uint8Array(), mask: void 0, alt: `` };
}
var Do = {
  encode(e, t = new f()) {
    return (
      e.contentType !== `` && t.uint32(10).string(e.contentType),
      e.data.length !== 0 && t.uint32(18).bytes(e.data),
      e.mask !== void 0 && X.encode(e.mask, t.uint32(26).fork()).join(),
      e.alt !== `` && t.uint32(34).string(e.alt),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Eo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.contentType = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.data = n.bytes();
          continue;
        case 3:
          if (e !== 26) break;
          i.mask = X.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.alt = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Do.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Eo();
    return (
      (t.contentType = e.contentType ?? ``),
      (t.data = e.data ?? new Uint8Array()),
      (t.mask =
        e.mask !== void 0 && e.mask !== null ? X.fromPartial(e.mask) : void 0),
      (t.alt = e.alt ?? ``),
      t
    );
  },
};
function Oo() {
  return { contentType: ``, data: new Uint8Array(), mask: void 0, alt: `` };
}
var Z = {
  encode(e, t = new f()) {
    return (
      e.contentType !== `` && t.uint32(10).string(e.contentType),
      e.data.length !== 0 && t.uint32(18).bytes(e.data),
      e.mask !== void 0 && X.encode(e.mask, t.uint32(26).fork()).join(),
      e.alt !== `` && t.uint32(34).string(e.alt),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Oo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.contentType = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.data = n.bytes();
          continue;
        case 3:
          if (e !== 26) break;
          i.mask = X.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.alt = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Z.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Oo();
    return (
      (t.contentType = e.contentType ?? ``),
      (t.data = e.data ?? new Uint8Array()),
      (t.mask =
        e.mask !== void 0 && e.mask !== null ? X.fromPartial(e.mask) : void 0),
      (t.alt = e.alt ?? ``),
      t
    );
  },
};
function ko() {
  return {
    accent1: ``,
    accent2: ``,
    accent3: ``,
    accent4: ``,
    accent5: ``,
    accent6: ``,
    bg1: ``,
    bg2: ``,
    tx1: ``,
    tx2: ``,
    hlink: ``,
    folHlink: ``,
  };
}
var Ao = {
  encode(e, t = new f()) {
    return (
      e.accent1 !== `` && t.uint32(10).string(e.accent1),
      e.accent2 !== `` && t.uint32(18).string(e.accent2),
      e.accent3 !== `` && t.uint32(26).string(e.accent3),
      e.accent4 !== `` && t.uint32(34).string(e.accent4),
      e.accent5 !== `` && t.uint32(42).string(e.accent5),
      e.accent6 !== `` && t.uint32(50).string(e.accent6),
      e.bg1 !== `` && t.uint32(58).string(e.bg1),
      e.bg2 !== `` && t.uint32(66).string(e.bg2),
      e.tx1 !== `` && t.uint32(74).string(e.tx1),
      e.tx2 !== `` && t.uint32(82).string(e.tx2),
      e.hlink !== `` && t.uint32(90).string(e.hlink),
      e.folHlink !== `` && t.uint32(98).string(e.folHlink),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ko();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.accent1 = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.accent2 = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.accent3 = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.accent4 = n.string();
          continue;
        case 5:
          if (e !== 42) break;
          i.accent5 = n.string();
          continue;
        case 6:
          if (e !== 50) break;
          i.accent6 = n.string();
          continue;
        case 7:
          if (e !== 58) break;
          i.bg1 = n.string();
          continue;
        case 8:
          if (e !== 66) break;
          i.bg2 = n.string();
          continue;
        case 9:
          if (e !== 74) break;
          i.tx1 = n.string();
          continue;
        case 10:
          if (e !== 82) break;
          i.tx2 = n.string();
          continue;
        case 11:
          if (e !== 90) break;
          i.hlink = n.string();
          continue;
        case 12:
          if (e !== 98) break;
          i.folHlink = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ao.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ko();
    return (
      (t.accent1 = e.accent1 ?? ``),
      (t.accent2 = e.accent2 ?? ``),
      (t.accent3 = e.accent3 ?? ``),
      (t.accent4 = e.accent4 ?? ``),
      (t.accent5 = e.accent5 ?? ``),
      (t.accent6 = e.accent6 ?? ``),
      (t.bg1 = e.bg1 ?? ``),
      (t.bg2 = e.bg2 ?? ``),
      (t.tx1 = e.tx1 ?? ``),
      (t.tx2 = e.tx2 ?? ``),
      (t.hlink = e.hlink ?? ``),
      (t.folHlink = e.folHlink ?? ``),
      t
    );
  },
};
function jo() {
  return { t: ``, l: ``, r: ``, b: `` };
}
var Mo = {
  encode(e, t = new f()) {
    return (
      e.t !== `` && t.uint32(10).string(e.t),
      e.l !== `` && t.uint32(18).string(e.l),
      e.r !== `` && t.uint32(26).string(e.r),
      e.b !== `` && t.uint32(34).string(e.b),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = jo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.t = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.l = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.r = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.b = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Mo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = jo();
    return (
      (t.t = e.t ?? ``),
      (t.l = e.l ?? ``),
      (t.r = e.r ?? ``),
      (t.b = e.b ?? ``),
      t
    );
  },
};
function No() {
  return { x: 0, y: 0 };
}
var Po = {
  encode(e, t = new f()) {
    return (
      e.x !== 0 && t.uint32(8).int64(e.x),
      e.y !== 0 && t.uint32(16).int64(e.y),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = No();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.x = $(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.y = $(n.int64());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Po.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = No();
    return ((t.x = e.x ?? 0), (t.y = e.y ?? 0), t);
  },
};
function Fo() {
  return { x: 0, y: 0 };
}
var Io = {
  encode(e, t = new f()) {
    return (
      e.x !== 0 && t.uint32(8).int64(e.x),
      e.y !== 0 && t.uint32(16).int64(e.y),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Fo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.x = $(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.y = $(n.int64());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Io.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Fo();
    return ((t.x = e.x ?? 0), (t.y = e.y ?? 0), t);
  },
};
function Lo() {
  return {};
}
var Ro = {
  encode(e, t = new f()) {
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Lo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ro.fromPartial(e ?? {});
  },
  fromPartial(e) {
    return Lo();
  },
};
function zo() {
  return { x1: 0, y1: 0, x: 0, y: 0 };
}
var Bo = {
  encode(e, t = new f()) {
    return (
      e.x1 !== 0 && t.uint32(8).int64(e.x1),
      e.y1 !== 0 && t.uint32(16).int64(e.y1),
      e.x !== 0 && t.uint32(24).int64(e.x),
      e.y !== 0 && t.uint32(32).int64(e.y),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = zo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.x1 = $(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.y1 = $(n.int64());
          continue;
        case 3:
          if (e !== 24) break;
          i.x = $(n.int64());
          continue;
        case 4:
          if (e !== 32) break;
          i.y = $(n.int64());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Bo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = zo();
    return (
      (t.x1 = e.x1 ?? 0),
      (t.y1 = e.y1 ?? 0),
      (t.x = e.x ?? 0),
      (t.y = e.y ?? 0),
      t
    );
  },
};
function Vo() {
  return { x1: 0, y1: 0, x2: 0, y2: 0, x: 0, y: 0 };
}
var Ho = {
  encode(e, t = new f()) {
    return (
      e.x1 !== 0 && t.uint32(8).int64(e.x1),
      e.y1 !== 0 && t.uint32(16).int64(e.y1),
      e.x2 !== 0 && t.uint32(24).int64(e.x2),
      e.y2 !== 0 && t.uint32(32).int64(e.y2),
      e.x !== 0 && t.uint32(40).int64(e.x),
      e.y !== 0 && t.uint32(48).int64(e.y),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Vo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.x1 = $(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.y1 = $(n.int64());
          continue;
        case 3:
          if (e !== 24) break;
          i.x2 = $(n.int64());
          continue;
        case 4:
          if (e !== 32) break;
          i.y2 = $(n.int64());
          continue;
        case 5:
          if (e !== 40) break;
          i.x = $(n.int64());
          continue;
        case 6:
          if (e !== 48) break;
          i.y = $(n.int64());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ho.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Vo();
    return (
      (t.x1 = e.x1 ?? 0),
      (t.y1 = e.y1 ?? 0),
      (t.x2 = e.x2 ?? 0),
      (t.y2 = e.y2 ?? 0),
      (t.x = e.x ?? 0),
      (t.y = e.y ?? 0),
      t
    );
  },
};
function Uo() {
  return { widthRadius: 0, heightRadius: 0, startAngle: 0, swingAngle: 0 };
}
var Wo = {
  encode(e, t = new f()) {
    return (
      e.widthRadius !== 0 && t.uint32(8).int64(e.widthRadius),
      e.heightRadius !== 0 && t.uint32(16).int64(e.heightRadius),
      e.startAngle !== 0 && t.uint32(24).int64(e.startAngle),
      e.swingAngle !== 0 && t.uint32(32).int64(e.swingAngle),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Uo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.widthRadius = $(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.heightRadius = $(n.int64());
          continue;
        case 3:
          if (e !== 24) break;
          i.startAngle = $(n.int64());
          continue;
        case 4:
          if (e !== 32) break;
          i.swingAngle = $(n.int64());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Wo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Uo();
    return (
      (t.widthRadius = e.widthRadius ?? 0),
      (t.heightRadius = e.heightRadius ?? 0),
      (t.startAngle = e.startAngle ?? 0),
      (t.swingAngle = e.swingAngle ?? 0),
      t
    );
  },
};
function Go() {
  return {
    moveTo: void 0,
    lineTo: void 0,
    close: void 0,
    quadBezTo: void 0,
    cubicBezTo: void 0,
    arcTo: void 0,
  };
}
var Ko = {
  encode(e, t = new f()) {
    return (
      e.moveTo !== void 0 && Po.encode(e.moveTo, t.uint32(10).fork()).join(),
      e.lineTo !== void 0 && Io.encode(e.lineTo, t.uint32(18).fork()).join(),
      e.close !== void 0 && Ro.encode(e.close, t.uint32(26).fork()).join(),
      e.quadBezTo !== void 0 &&
        Bo.encode(e.quadBezTo, t.uint32(34).fork()).join(),
      e.cubicBezTo !== void 0 &&
        Ho.encode(e.cubicBezTo, t.uint32(42).fork()).join(),
      e.arcTo !== void 0 && Wo.encode(e.arcTo, t.uint32(50).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Go();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.moveTo = Po.decode(n, n.uint32());
          continue;
        case 2:
          if (e !== 18) break;
          i.lineTo = Io.decode(n, n.uint32());
          continue;
        case 3:
          if (e !== 26) break;
          i.close = Ro.decode(n, n.uint32());
          continue;
        case 4:
          if (e !== 34) break;
          i.quadBezTo = Bo.decode(n, n.uint32());
          continue;
        case 5:
          if (e !== 42) break;
          i.cubicBezTo = Ho.decode(n, n.uint32());
          continue;
        case 6:
          if (e !== 50) break;
          i.arcTo = Wo.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Ko.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Go();
    return (
      (t.moveTo =
        e.moveTo !== void 0 && e.moveTo !== null
          ? Po.fromPartial(e.moveTo)
          : void 0),
      (t.lineTo =
        e.lineTo !== void 0 && e.lineTo !== null
          ? Io.fromPartial(e.lineTo)
          : void 0),
      (t.close =
        e.close !== void 0 && e.close !== null
          ? Ro.fromPartial(e.close)
          : void 0),
      (t.quadBezTo =
        e.quadBezTo !== void 0 && e.quadBezTo !== null
          ? Bo.fromPartial(e.quadBezTo)
          : void 0),
      (t.cubicBezTo =
        e.cubicBezTo !== void 0 && e.cubicBezTo !== null
          ? Ho.fromPartial(e.cubicBezTo)
          : void 0),
      (t.arcTo =
        e.arcTo !== void 0 && e.arcTo !== null
          ? Wo.fromPartial(e.arcTo)
          : void 0),
      t
    );
  },
};
function qo() {
  return { id: void 0, widthEmu: 0, heightEmu: 0, commands: [] };
}
var Jo = {
  encode(e, t = new f()) {
    (e.id !== void 0 && t.uint32(34).string(e.id),
      e.widthEmu !== 0 && t.uint32(8).int64(e.widthEmu),
      e.heightEmu !== 0 && t.uint32(16).int64(e.heightEmu));
    for (let n of e.commands) Ko.encode(n, t.uint32(26).fork()).join();
    return t;
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = qo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 4:
          if (e !== 34) break;
          i.id = n.string();
          continue;
        case 1:
          if (e !== 8) break;
          i.widthEmu = $(n.int64());
          continue;
        case 2:
          if (e !== 16) break;
          i.heightEmu = $(n.int64());
          continue;
        case 3:
          if (e !== 26) break;
          i.commands.push(Ko.decode(n, n.uint32()));
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Jo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = qo();
    return (
      (t.id = e.id ?? void 0),
      (t.widthEmu = e.widthEmu ?? 0),
      (t.heightEmu = e.heightEmu ?? 0),
      (t.commands = e.commands?.map((e) => Ko.fromPartial(e)) || []),
      t
    );
  },
};
function Yo() {
  return { themeId: `` };
}
var Xo = {
  encode(e, t = new f()) {
    return (e.themeId !== `` && t.uint32(10).string(e.themeId), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Yo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.themeId = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Xo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Yo();
    return ((t.themeId = e.themeId ?? ``), t);
  },
};
function Zo() {
  return { start: 0, end: 0 };
}
var Qo = {
  encode(e, t = new f()) {
    return (
      e.start !== 0 && t.uint32(8).int32(e.start),
      e.end !== 0 && t.uint32(16).int32(e.end),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = Zo();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 8) break;
          i.start = n.int32();
          continue;
        case 2:
          if (e !== 16) break;
          i.end = n.int32();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return Qo.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = Zo();
    return ((t.start = e.start ?? 0), (t.end = e.end ?? 0), t);
  },
};
function $o() {
  return { runtime: ``, exitCode: 0, durationMs: 0, timestampIso8601: `` };
}
var es = {
  encode(e, t = new f()) {
    return (
      e.runtime !== `` && t.uint32(10).string(e.runtime),
      e.exitCode !== 0 && t.uint32(16).int32(e.exitCode),
      e.durationMs !== 0 && t.uint32(25).double(e.durationMs),
      e.timestampIso8601 !== `` && t.uint32(34).string(e.timestampIso8601),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = $o();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.runtime = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.exitCode = n.int32();
          continue;
        case 3:
          if (e !== 25) break;
          i.durationMs = n.double();
          continue;
        case 4:
          if (e !== 34) break;
          i.timestampIso8601 = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return es.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = $o();
    return (
      (t.runtime = e.runtime ?? ``),
      (t.exitCode = e.exitCode ?? 0),
      (t.durationMs = e.durationMs ?? 0),
      (t.timestampIso8601 = e.timestampIso8601 ?? ``),
      t
    );
  },
};
function ts() {
  return { id: ``, kind: 0, theme: void 0, script: void 0 };
}
var ns = {
  encode(e, t = new f()) {
    return (
      e.id !== `` && t.uint32(10).string(e.id),
      e.kind !== 0 && t.uint32(16).int32(e.kind),
      e.theme !== void 0 && Xo.encode(e.theme, t.uint32(26).fork()).join(),
      e.script !== void 0 && os.encode(e.script, t.uint32(58).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ts();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 16) break;
          i.kind = n.int32();
          continue;
        case 3:
          if (e !== 26) break;
          i.theme = Xo.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 58) break;
          i.script = os.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return ns.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ts();
    return (
      (t.id = e.id ?? ``),
      (t.kind = e.kind ?? 0),
      (t.theme =
        e.theme !== void 0 && e.theme !== null
          ? Xo.fromPartial(e.theme)
          : void 0),
      (t.script =
        e.script !== void 0 && e.script !== null
          ? os.fromPartial(e.script)
          : void 0),
      t
    );
  },
};
function rs() {
  return { id: ``, language: ``, initSource: `` };
}
var is = {
  encode(e, t = new f()) {
    return (
      e.id !== `` && t.uint32(10).string(e.id),
      e.language !== `` && t.uint32(18).string(e.language),
      e.initSource !== `` && t.uint32(26).string(e.initSource),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = rs();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.id = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.language = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.initSource = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return is.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = rs();
    return (
      (t.id = e.id ?? ``),
      (t.language = e.language ?? ``),
      (t.initSource = e.initSource ?? ``),
      t
    );
  },
};
function as() {
  return {
    language: ``,
    source: ``,
    returnMode: 0,
    environmentId: ``,
    result: void 0,
    execution: void 0,
  };
}
var os = {
  encode(e, t = new f()) {
    return (
      e.language !== `` && t.uint32(10).string(e.language),
      e.source !== `` && t.uint32(18).string(e.source),
      e.returnMode !== 0 && t.uint32(32).int32(e.returnMode),
      e.environmentId !== `` && t.uint32(42).string(e.environmentId),
      e.result !== void 0 && cs.encode(e.result, t.uint32(50).fork()).join(),
      e.execution !== void 0 &&
        es.encode(e.execution, t.uint32(58).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = as();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 1:
          if (e !== 10) break;
          i.language = n.string();
          continue;
        case 2:
          if (e !== 18) break;
          i.source = n.string();
          continue;
        case 4:
          if (e !== 32) break;
          i.returnMode = n.int32();
          continue;
        case 5:
          if (e !== 42) break;
          i.environmentId = n.string();
          continue;
        case 6:
          if (e !== 50) break;
          i.result = cs.decode(n, n.uint32());
          continue;
        case 7:
          if (e !== 58) break;
          i.execution = es.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return os.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = as();
    return (
      (t.language = e.language ?? ``),
      (t.source = e.source ?? ``),
      (t.returnMode = e.returnMode ?? 0),
      (t.environmentId = e.environmentId ?? ``),
      (t.result =
        e.result !== void 0 && e.result !== null
          ? cs.fromPartial(e.result)
          : void 0),
      (t.execution =
        e.execution !== void 0 && e.execution !== null
          ? es.fromPartial(e.execution)
          : void 0),
      t
    );
  },
};
function ss() {
  return { json: void 0, stdout: void 0, refs: [], error: void 0 };
}
var cs = {
  encode(e, t = new f()) {
    (e.json !== void 0 && t.uint32(18).string(e.json),
      e.stdout !== void 0 && t.uint32(26).string(e.stdout));
    for (let n of e.refs) t.uint32(34).string(n);
    return (e.error !== void 0 && t.uint32(42).string(e.error), t);
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ss();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 2:
          if (e !== 18) break;
          i.json = n.string();
          continue;
        case 3:
          if (e !== 26) break;
          i.stdout = n.string();
          continue;
        case 4:
          if (e !== 34) break;
          i.refs.push(n.string());
          continue;
        case 5:
          if (e !== 42) break;
          i.error = n.string();
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return cs.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ss();
    return (
      (t.json = e.json ?? void 0),
      (t.stdout = e.stdout ?? void 0),
      (t.refs = e.refs?.map((e) => e) || []),
      (t.error = e.error ?? void 0),
      t
    );
  },
};
function ls() {
  return { cap: void 0, join: void 0, head: void 0, tail: void 0 };
}
var us = {
  encode(e, t = new f()) {
    return (
      e.cap !== void 0 && t.uint32(40).int32(e.cap),
      e.join !== void 0 && t.uint32(48).int32(e.join),
      e.head !== void 0 && Q.encode(e.head, t.uint32(58).fork()).join(),
      e.tail !== void 0 && Q.encode(e.tail, t.uint32(66).fork()).join(),
      t
    );
  },
  decode(e, t) {
    let n = e instanceof p ? e : new p(e),
      r = t === void 0 ? n.len : n.pos + t,
      i = ls();
    for (; n.pos < r; ) {
      let e = n.uint32();
      switch (e >>> 3) {
        case 5:
          if (e !== 40) break;
          i.cap = n.int32();
          continue;
        case 6:
          if (e !== 48) break;
          i.join = n.int32();
          continue;
        case 7:
          if (e !== 58) break;
          i.head = Q.decode(n, n.uint32());
          continue;
        case 8:
          if (e !== 66) break;
          i.tail = Q.decode(n, n.uint32());
          continue;
      }
      if ((e & 7) == 4 || e === 0) break;
      n.skip(e & 7);
    }
    return i;
  },
  create(e) {
    return us.fromPartial(e ?? {});
  },
  fromPartial(e) {
    let t = ls();
    return (
      (t.cap = e.cap ?? void 0),
      (t.join = e.join ?? void 0),
      (t.head =
        e.head !== void 0 && e.head !== null ? Q.fromPartial(e.head) : void 0),
      (t.tail =
        e.tail !== void 0 && e.tail !== null ? Q.fromPartial(e.tail) : void 0),
      t
    );
  },
};
function ds() {
  return { type: 0, width: 0, length: 0 };
}
var Q = {
    encode(e, t = new f()) {
      return (
        e.type !== 0 && t.uint32(8).int32(e.type),
        e.width !== 0 && t.uint32(16).int32(e.width),
        e.length !== 0 && t.uint32(24).int32(e.length),
        t
      );
    },
    decode(e, t) {
      let n = e instanceof p ? e : new p(e),
        r = t === void 0 ? n.len : n.pos + t,
        i = ds();
      for (; n.pos < r; ) {
        let e = n.uint32();
        switch (e >>> 3) {
          case 1:
            if (e !== 8) break;
            i.type = n.int32();
            continue;
          case 2:
            if (e !== 16) break;
            i.width = n.int32();
            continue;
          case 3:
            if (e !== 24) break;
            i.length = n.int32();
            continue;
        }
        if ((e & 7) == 4 || e === 0) break;
        n.skip(e & 7);
      }
      return i;
    },
    create(e) {
      return Q.fromPartial(e ?? {});
    },
    fromPartial(e) {
      let t = ds();
      return (
        (t.type = e.type ?? 0),
        (t.width = e.width ?? 0),
        (t.length = e.length ?? 0),
        t
      );
    },
  },
  fs = (() => {
    if (typeof globalThis < `u`) return globalThis;
    if (typeof self < `u`) return self;
    if (typeof window < `u`) return window;
    if (typeof global < `u`) return global;
    throw `Unable to locate global object`;
  })();
function $(e) {
  let t = fs.Number(e.toString());
  if (t > fs.Number.MAX_SAFE_INTEGER)
    throw new fs.Error(`Value is larger than Number.MAX_SAFE_INTEGER`);
  if (t < fs.Number.MIN_SAFE_INTEGER)
    throw new fs.Error(`Value is smaller than Number.MIN_SAFE_INTEGER`);
  return t;
}
export {
  B as $,
  ln as $t,
  Ki as A,
  ht as An,
  Jr as At,
  da as B,
  p as Bn,
  _n as Bt,
  ea as C,
  C as Cn,
  K as Ct,
  Yi as D,
  we as Dn,
  Gi as Dt,
  lo as E,
  De as En,
  Z as Et,
  po as F,
  pt as Fn,
  ei as Ft,
  Ko as G,
  O as Gt,
  G as H,
  tn as Ht,
  q as I,
  he as In,
  Xr as It,
  Po as J,
  xn as Jt,
  Ho as K,
  Sn as Kt,
  Do as L,
  T as Ln,
  Zr as Lt,
  Aa as M,
  _e as Mn,
  Yr as Mt,
  qi as N,
  ge as Nn,
  ri as Nt,
  L as O,
  Ce as On,
  ti as Ot,
  Oa as P,
  b as Pn,
  $r as Pt,
  _o as Q,
  en as Qt,
  X as R,
  Se as Rn,
  zr as Rt,
  na as S,
  y as Sn,
  F as St,
  J as T,
  Ee as Tn,
  P as Tt,
  Wo as U,
  nn as Ut,
  Ca as V,
  f as Vn,
  gn as Vt,
  Ro as W,
  wn as Wt,
  aa as X,
  on as Xt,
  Bo as Y,
  an as Yt,
  Mo as Z,
  Tn as Zt,
  us as _,
  v as _n,
  Ia as _t,
  ns as a,
  cn as an,
  z as at,
  ra as b,
  be as bn,
  no as bt,
  es as c,
  vn as cn,
  ho as ct,
  Xo as d,
  fe as dn,
  Ba as dt,
  dn as en,
  ga as et,
  Ao as f,
  pe as fn,
  Ka as ft,
  Pa as g,
  xe as gn,
  U as gt,
  Zi as h,
  wt as hn,
  Za as ht,
  Ea as i,
  hn as in,
  va as it,
  Ji as j,
  ve as jn,
  Qr as jt,
  Ma as k,
  Ot as kn,
  ni as kt,
  Qo as l,
  Cn as ln,
  R as lt,
  eo as m,
  ue as mn,
  Wa as mt,
  xo as n,
  pn as nn,
  Qi as nt,
  Xi as o,
  sn as on,
  Co as ot,
  N as p,
  h as pn,
  Ha as pt,
  Io as q,
  bn as qt,
  xa as r,
  fn as rn,
  yo as rt,
  is as s,
  yn as sn,
  I as st,
  Y as t,
  mn as tn,
  os as tt,
  cs as u,
  rn as un,
  H as ut,
  $i as v,
  de as vn,
  V as vt,
  Jo as w,
  Te as wn,
  M as wt,
  ta as x,
  St as xn,
  W as xt,
  Q as y,
  ye as yn,
  Ya as yt,
  ao as z,
  me as zn,
  un as zt,
};
//# sourceMappingURL=presentation-e8MDavOP.js.map
