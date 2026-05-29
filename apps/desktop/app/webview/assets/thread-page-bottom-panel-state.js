import { s as e, t } from "./chunk-Bj-mKKzh.js";
import { D as n } from "./src-C.js";
import { Ia as r, Ma as i } from "./app-server-manager-signals-DkRDRgNB.js";
import { n as a, t as o } from "./jsx-runtime.js";
import {
  Q as s,
  U as c,
  X as l,
  a as u,
  wt as d,
  y as f,
} from "./setting-storage.js";
import { t as p } from "./route-scope.js";
import { t as m } from "./button.js";
import { n as h, o as g, r as _ } from "./app-shell-state.js";
import { t as ee } from "./use-platform.js";
import { A as v, j as y } from "./diff-view-mode.js";
import { n as b, t as x } from "./app-shell-tab-controller-BTWycTBb.js";
import { t as S } from "./local-conversation-title-signals-bVA-f9H8.js";
import { n as C, t as w } from "./focus-composer.js";
import { i as T, n as E } from "./thread-context-CaET2O8s.js";
import { t as D } from "./terminal.js";
import { t as O } from "./app-intl-signal.js";
import {
  a as te,
  c as k,
  n as ne,
  o as A,
  r as re,
  s as j,
  t as M,
} from "./xterm-display-helpers.js";
import { t as N } from "./error-boundary.js";
import { n as P } from "./check-git-index-for-changes-CjhXjmKx.js";
import { t as ie } from "./font-settings-thBBJzjN.js";
import { n as ae, r as oe } from "./use-resolved-theme-variant.js";
import { n as F, r as I, t as L } from "./thread-panel-state.js";
function se(e, t, n, i, a) {
  let o = e?.trim();
  if (o != null && o.length > 0) return o;
  if (t != null && t.trim().length > 0) {
    let e = r(t) || t;
    return i > 1 ? `${e} ${n + 1}` : e;
  }
  return a.formatMessage(
    {
      id: `terminal.tabs.title`,
      defaultMessage: `Terminal {index}`,
      description: `Terminal tab title with a 1-based tab index`,
    },
    { index: n + 1 },
  );
}
var R = t((e, t) => {
    (function (n, r) {
      typeof e == `object` && typeof t == `object`
        ? (t.exports = r())
        : typeof define == `function` && define.amd
          ? define([], r)
          : typeof e == `object`
            ? (e.ClipboardAddon = r())
            : (n.ClipboardAddon = r());
    })(self, () =>
      (() => {
        var e = {
            575: function (e, t, n) {
              (typeof self < `u`
                ? self
                : typeof window < `u`
                  ? window
                  : n.g !== void 0 && n.g,
                (e.exports = (function () {
                  var e,
                    t = `3.7.7`,
                    n = t,
                    r = typeof Buffer == `function`,
                    i =
                      typeof TextDecoder == `function`
                        ? new TextDecoder()
                        : void 0,
                    a =
                      typeof TextEncoder == `function`
                        ? new TextEncoder()
                        : void 0,
                    o = Array.prototype.slice.call(
                      `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`,
                    ),
                    s =
                      ((e = {}),
                      o.forEach(function (t, n) {
                        return (e[t] = n);
                      }),
                      e),
                    c =
                      /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
                    l = String.fromCharCode.bind(String),
                    u =
                      typeof Uint8Array.from == `function`
                        ? Uint8Array.from.bind(Uint8Array)
                        : function (e) {
                            return new Uint8Array(
                              Array.prototype.slice.call(e, 0),
                            );
                          },
                    d = function (e) {
                      return e
                        .replace(/=/g, ``)
                        .replace(/[+\/]/g, function (e) {
                          return e == `+` ? `-` : `_`;
                        });
                    },
                    f = function (e) {
                      return e.replace(/[^A-Za-z0-9\+\/]/g, ``);
                    },
                    p = function (e) {
                      for (
                        var t, n, r, i, a = ``, s = e.length % 3, c = 0;
                        c < e.length;
                      ) {
                        if (
                          (n = e.charCodeAt(c++)) > 255 ||
                          (r = e.charCodeAt(c++)) > 255 ||
                          (i = e.charCodeAt(c++)) > 255
                        )
                          throw TypeError(`invalid character found`);
                        a +=
                          o[((t = (n << 16) | (r << 8) | i) >> 18) & 63] +
                          o[(t >> 12) & 63] +
                          o[(t >> 6) & 63] +
                          o[63 & t];
                      }
                      return s ? a.slice(0, s - 3) + `===`.substring(s) : a;
                    },
                    m =
                      typeof btoa == `function`
                        ? function (e) {
                            return btoa(e);
                          }
                        : r
                          ? function (e) {
                              return Buffer.from(e, `binary`).toString(
                                `base64`,
                              );
                            }
                          : p,
                    h = r
                      ? function (e) {
                          return Buffer.from(e).toString(`base64`);
                        }
                      : function (e) {
                          for (
                            var t = [], n = 0, r = e.length;
                            n < r;
                            n += 4096
                          )
                            t.push(l.apply(null, e.subarray(n, n + 4096)));
                          return m(t.join(``));
                        },
                    g = function (e, t) {
                      return (t === void 0 && (t = !1), t ? d(h(e)) : h(e));
                    },
                    _ = function (e) {
                      if (e.length < 2)
                        return (t = e.charCodeAt(0)) < 128
                          ? e
                          : t < 2048
                            ? l(192 | (t >>> 6)) + l(128 | (63 & t))
                            : l(224 | ((t >>> 12) & 15)) +
                              l(128 | ((t >>> 6) & 63)) +
                              l(128 | (63 & t));
                      var t =
                        65536 +
                        1024 * (e.charCodeAt(0) - 55296) +
                        (e.charCodeAt(1) - 56320);
                      return (
                        l(240 | ((t >>> 18) & 7)) +
                        l(128 | ((t >>> 12) & 63)) +
                        l(128 | ((t >>> 6) & 63)) +
                        l(128 | (63 & t))
                      );
                    },
                    ee = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                    v = function (e) {
                      return e.replace(ee, _);
                    },
                    y = r
                      ? function (e) {
                          return Buffer.from(e, `utf8`).toString(`base64`);
                        }
                      : a
                        ? function (e) {
                            return h(a.encode(e));
                          }
                        : function (e) {
                            return m(v(e));
                          },
                    b = function (e, t) {
                      return (t === void 0 && (t = !1), t ? d(y(e)) : y(e));
                    },
                    x = function (e) {
                      return b(e, !0);
                    },
                    S =
                      /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                    C = function (e) {
                      switch (e.length) {
                        case 4:
                          var t =
                            (((7 & e.charCodeAt(0)) << 18) |
                              ((63 & e.charCodeAt(1)) << 12) |
                              ((63 & e.charCodeAt(2)) << 6) |
                              (63 & e.charCodeAt(3))) -
                            65536;
                          return l(55296 + (t >>> 10)) + l(56320 + (1023 & t));
                        case 3:
                          return l(
                            ((15 & e.charCodeAt(0)) << 12) |
                              ((63 & e.charCodeAt(1)) << 6) |
                              (63 & e.charCodeAt(2)),
                          );
                        default:
                          return l(
                            ((31 & e.charCodeAt(0)) << 6) |
                              (63 & e.charCodeAt(1)),
                          );
                      }
                    },
                    w = function (e) {
                      return e.replace(S, C);
                    },
                    T = function (e) {
                      if (((e = e.replace(/\s+/g, ``)), !c.test(e)))
                        throw TypeError(`malformed base64.`);
                      e += `==`.slice(2 - (3 & e.length));
                      for (var t, n, r, i = ``, a = 0; a < e.length; )
                        ((t =
                          (s[e.charAt(a++)] << 18) |
                          (s[e.charAt(a++)] << 12) |
                          ((n = s[e.charAt(a++)]) << 6) |
                          (r = s[e.charAt(a++)])),
                          (i +=
                            n === 64
                              ? l((t >> 16) & 255)
                              : r === 64
                                ? l((t >> 16) & 255, (t >> 8) & 255)
                                : l((t >> 16) & 255, (t >> 8) & 255, 255 & t)));
                      return i;
                    },
                    E =
                      typeof atob == `function`
                        ? function (e) {
                            return atob(f(e));
                          }
                        : r
                          ? function (e) {
                              return Buffer.from(e, `base64`).toString(
                                `binary`,
                              );
                            }
                          : T,
                    D = r
                      ? function (e) {
                          return u(Buffer.from(e, `base64`));
                        }
                      : function (e) {
                          return u(
                            E(e)
                              .split(``)
                              .map(function (e) {
                                return e.charCodeAt(0);
                              }),
                          );
                        },
                    O = function (e) {
                      return D(k(e));
                    },
                    te = r
                      ? function (e) {
                          return Buffer.from(e, `base64`).toString(`utf8`);
                        }
                      : i
                        ? function (e) {
                            return i.decode(D(e));
                          }
                        : function (e) {
                            return w(E(e));
                          },
                    k = function (e) {
                      return f(
                        e.replace(/[-_]/g, function (e) {
                          return e == `-` ? `+` : `/`;
                        }),
                      );
                    },
                    ne = function (e) {
                      return te(k(e));
                    },
                    A = function (e) {
                      return {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      };
                    },
                    re = function () {
                      var e = function (e, t) {
                        return Object.defineProperty(String.prototype, e, A(t));
                      };
                      (e(`fromBase64`, function () {
                        return ne(this);
                      }),
                        e(`toBase64`, function (e) {
                          return b(this, e);
                        }),
                        e(`toBase64URI`, function () {
                          return b(this, !0);
                        }),
                        e(`toBase64URL`, function () {
                          return b(this, !0);
                        }),
                        e(`toUint8Array`, function () {
                          return O(this);
                        }));
                    },
                    j = function () {
                      var e = function (e, t) {
                        return Object.defineProperty(
                          Uint8Array.prototype,
                          e,
                          A(t),
                        );
                      };
                      (e(`toBase64`, function (e) {
                        return g(this, e);
                      }),
                        e(`toBase64URI`, function () {
                          return g(this, !0);
                        }),
                        e(`toBase64URL`, function () {
                          return g(this, !0);
                        }));
                    },
                    M = {
                      version: t,
                      VERSION: n,
                      atob: E,
                      atobPolyfill: T,
                      btoa: m,
                      btoaPolyfill: p,
                      fromBase64: ne,
                      toBase64: b,
                      encode: b,
                      encodeURI: x,
                      encodeURL: x,
                      utob: v,
                      btou: w,
                      decode: ne,
                      isValid: function (e) {
                        if (typeof e != `string`) return !1;
                        var t = e.replace(/\s+/g, ``).replace(/={0,2}$/, ``);
                        return (
                          !/[^\s0-9a-zA-Z\+/]/.test(t) ||
                          !/[^\s0-9a-zA-Z\-_]/.test(t)
                        );
                      },
                      fromUint8Array: g,
                      toUint8Array: O,
                      extendString: re,
                      extendUint8Array: j,
                      extendBuiltins: function () {
                        (re(), j());
                      },
                      Base64: {},
                    };
                  return (
                    Object.keys(M).forEach(function (e) {
                      return (M.Base64[e] = M[e]);
                    }),
                    M
                  );
                })()));
            },
          },
          t = {};
        function n(r) {
          var i = t[r];
          if (i !== void 0) return i.exports;
          var a = (t[r] = { exports: {} });
          return (e[r].call(a.exports, a, a.exports, n), a.exports);
        }
        n.g = (function () {
          if (typeof globalThis == `object`) return globalThis;
          try {
            return this || Function(`return this`)();
          } catch {
            if (typeof window == `object`) return window;
          }
        })();
        var r = {};
        return (
          (() => {
            var e = r;
            (Object.defineProperty(e, `__esModule`, { value: !0 }),
              (e.Base64 =
                e.BrowserClipboardProvider =
                e.ClipboardAddon =
                  void 0));
            let t = n(575);
            e.ClipboardAddon = class {
              constructor(e = new a(), t = new i()) {
                ((this._base64 = e), (this._provider = t));
              }
              activate(e) {
                ((this._terminal = e),
                  (this._disposable = e.parser.registerOscHandler(52, (e) =>
                    this._setOrReportClipboard(e),
                  )));
              }
              dispose() {
                return this._disposable?.dispose();
              }
              _readText(e, t) {
                let n = this._base64.encodeText(t);
                this._terminal?.input(`]52;${e};${n}`, !1);
              }
              _setOrReportClipboard(e) {
                let t = e.split(`;`);
                if (t.length < 2) return !0;
                let n = t[0],
                  r = t[1];
                if (r === `?`) {
                  let e = this._provider.readText(n);
                  return e instanceof Promise
                    ? e.then((e) => (this._readText(n, e), !0))
                    : (this._readText(n, e), !0);
                }
                let i = ``;
                try {
                  i = this._base64.decodeText(r);
                } catch {}
                let a = this._provider.writeText(n, i);
                return !(a instanceof Promise) || a.then(() => !0);
              }
            };
            class i {
              async readText(e) {
                return e === `c`
                  ? navigator.clipboard.readText()
                  : Promise.resolve(``);
              }
              async writeText(e, t) {
                return e === `c`
                  ? navigator.clipboard.writeText(t)
                  : Promise.resolve();
              }
            }
            e.BrowserClipboardProvider = i;
            class a {
              encodeText(e) {
                return t.Base64.encode(e);
              }
              decodeText(e) {
                let n = t.Base64.decode(e);
                return t.Base64.isValid(e) && t.Base64.encode(n) === e ? n : ``;
              }
            }
            e.Base64 = a;
          })(),
          r
        );
      })(),
    );
  }),
  z = d(),
  B = o();
function V(e) {
  let t = (0, z.c)(5),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, B.jsx)(`div`, {
        className: `text-sm font-medium text-token-foreground`,
        children: (0, B.jsx)(c, {
          id: `terminal.error.title`,
          defaultMessage: `The terminal encountered an error`,
          description: `Title shown in the terminal panel when the embedded terminal crashes`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, B.jsxs)(`div`, {
        className: `flex max-w-md flex-col gap-1`,
        children: [
          r,
          (0, B.jsx)(`div`, {
            className: `text-sm text-token-description-foreground`,
            children: (0, B.jsx)(c, {
              id: `terminal.error.description`,
              defaultMessage: `Try reloading the terminal to continue`,
              description: `Description shown in the terminal panel when the embedded terminal crashes`,
            }),
          }),
        ],
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, B.jsx)(c, {
        id: `terminal.error.retry`,
        defaultMessage: `Reload`,
        description: `Button label that reloads rendering the terminal after a crash`,
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === n
      ? (o = t[4])
      : ((o = (0, B.jsxs)(`div`, {
          className: `flex h-full flex-col items-center justify-center gap-4 bg-token-terminal-background px-6 py-8 text-center`,
          children: [
            i,
            (0, B.jsx)(`div`, {
              className: `flex items-center gap-2`,
              children: (0, B.jsx)(m, {
                color: `secondary`,
                onClick: n,
                children: a,
              }),
            }),
          ],
        })),
        (t[3] = n),
        (t[4] = o)),
    o
  );
}
var H = ``,
  U = ``,
  W = `\v`,
  G = ``;
function ce({
  clipboard: e,
  event: t,
  onNewTerminalTab: n,
  pasteOnCtrlV: r = !1,
  sendText: i,
  term: a,
}) {
  if (n != null && Z(t, [`t`])) return (K(t), n(), !1);
  if (e != null) {
    if (q(t, a.hasSelection())) {
      K(t);
      let n = a.getSelection();
      return (n.length > 0 && e.writeText(n).catch(() => void 0), !1);
    }
    if (le(t, r))
      return (
        K(t),
        e
          .readText()
          .then((e) => {
            e.length > 0 && a.paste(e);
          })
          .catch(() => void 0),
        !1
      );
  }
  let o = J(t);
  return o == null ? !0 : (K(t), i(o), !1);
}
function K(e) {
  (e.preventDefault(), e.stopPropagation());
}
function q(e, t) {
  return (t && X(e, `c`)) || Y(e, `c`) || ue(e, { ctrlKey: !0, shiftKey: !1 });
}
function le(e, t) {
  return (t && X(e, `v`)) || Y(e, `v`) || ue(e, { ctrlKey: !1, shiftKey: !0 });
}
function J(e) {
  return Z(e, [`ArrowLeft`, `ArrowUp`])
    ? H
    : Z(e, [`ArrowRight`, `ArrowDown`])
      ? U
      : Z(e, [`Backspace`])
        ? G
        : Z(e, [`Delete`])
          ? W
          : null;
}
function Y(e, t) {
  return (
    e.ctrlKey &&
    e.shiftKey &&
    !e.altKey &&
    !e.metaKey &&
    e.key.toLowerCase() === t
  );
}
function X(e, t) {
  return (
    e.ctrlKey &&
    !e.shiftKey &&
    !e.altKey &&
    !e.metaKey &&
    e.key.toLowerCase() === t
  );
}
function ue(e, t) {
  return (
    e.ctrlKey === t.ctrlKey &&
    e.shiftKey === t.shiftKey &&
    !e.altKey &&
    !e.metaKey &&
    e.key.toLowerCase() === `insert`
  );
}
function Z(e, t) {
  return (
    e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey && t.includes(e.key)
  );
}
var de = R(),
  fe = k(),
  pe = j(),
  me = A(),
  Q = e(a(), 1);
function he(e, t, n) {
  (t.fit(), i.resize(n, e.cols, e.rows));
}
function ge(e) {
  let t = (0, z.c)(5),
    { conversationId: n, sessionId: r } = e,
    i = r ?? n,
    a;
  t[0] === e
    ? (a = t[1])
    : ((a = (0, B.jsx)(ve, { ...e })), (t[0] = e), (t[1] = a));
  let o;
  return (
    t[2] !== i || t[3] !== a
      ? ((o = (0, B.jsx)(
          N,
          { name: `TerminalPanel`, fallback: _e, children: a },
          i,
        )),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function _e(e) {
  return (0, B.jsx)(V, {
    onRetry: () => {
      e.resetError();
    },
  });
}
function ve(e) {
  let t = (0, z.c)(50),
    {
      conversationId: r,
      conversationTitle: a,
      hostId: o,
      cwd: s,
      sessionId: c,
      onNewTerminalTab: l,
    } = e,
    { platform: d } = ee(),
    f = oe(ae()),
    p = d !== `macOS`,
    m = u(n.lightChromeTheme),
    h = u(n.darkChromeTheme),
    g = u(n.codeFontSize),
    _,
    b,
    x,
    S;
  if (t[0] !== g || t[1] !== h || t[2] !== m || t[3] !== f) {
    _ = f === `light` ? y(m, `light`) : y(h, `dark`);
    let e = _.fonts.code?.trim() ?? ``,
      n = e.length > 0 ? e : ie;
    ((x = g ?? 12),
      (b = M(n)),
      (S = n.split(`,`)[0]?.trim() ?? ``),
      (t[0] = g),
      (t[1] = h),
      (t[2] = m),
      (t[3] = f),
      (t[4] = _),
      (t[5] = b),
      (t[6] = x),
      (t[7] = S));
  } else ((_ = t[4]), (b = t[5]), (x = t[6]), (S = t[7]));
  let C = S,
    w = (0, Q.useRef)(null),
    T = (0, Q.useRef)(null),
    E = (0, Q.useRef)(null),
    D = (0, Q.useRef)(null),
    O = (0, Q.useRef)(null),
    k = (0, Q.useRef)(!1),
    A = (0, Q.useRef)(b),
    j = (0, Q.useRef)(x),
    N,
    P;
  (t[8] === b
    ? ((N = t[9]), (P = t[10]))
    : ((N = () => {
        A.current = b;
      }),
      (P = [b]),
      (t[8] = b),
      (t[9] = N),
      (t[10] = P)),
    (0, Q.useEffect)(N, P));
  let F, I;
  (t[11] === x
    ? ((F = t[12]), (I = t[13]))
    : ((F = () => {
        j.current = x;
      }),
      (I = [x]),
      (t[11] = x),
      (t[12] = F),
      (t[13] = I)),
    (0, Q.useEffect)(F, I));
  let L;
  t[14] === a ? (L = t[15]) : ((L = () => a), (t[14] = a), (t[15] = L));
  let se = (0, Q.useEffectEvent)(L),
    R,
    V;
  (t[16] !== _ || t[17] !== f
    ? ((R = () => {
        let e = w.current;
        e && v(e, _, f);
      }),
      (V = [_, f]),
      (t[16] = _),
      (t[17] = f),
      (t[18] = R),
      (t[19] = V))
    : ((R = t[18]), (V = t[19])),
    (0, Q.useLayoutEffect)(R, V));
  let H;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = () => {
        let e = E.current,
          t = w.current;
        !e ||
          !t ||
          ((e.options.theme = re(t)), e.rows > 0 && e.refresh(0, e.rows - 1));
      }),
      (t[20] = H))
    : (H = t[20]);
  let U;
  (t[21] !== _ || t[22] !== f
    ? ((U = [_, f]), (t[21] = _), (t[22] = f), (t[23] = U))
    : (U = t[23]),
    (0, Q.useEffect)(H, U));
  let W, G;
  (t[24] !== b || t[25] !== x || t[26] !== C
    ? ((W = () => {
        let e = E.current;
        if (!e) return;
        let t = !1;
        return (
          (async () => {
            (await ne(C, x),
              !t &&
                ((e.options.fontFamily = b),
                (e.options.fontSize = x),
                requestAnimationFrame(() => {
                  let t = E.current;
                  if (!t || t !== e) return;
                  let n = D.current,
                    r = O.current;
                  n && r && (k.current ? he(t, n, r) : n.fit());
                })));
          })(),
          () => {
            t = !0;
          }
        );
      }),
      (G = [b, x, C]),
      (t[24] = b),
      (t[25] = x),
      (t[26] = C),
      (t[27] = W),
      (t[28] = G))
    : ((W = t[27]), (G = t[28])),
    (0, Q.useEffect)(W, G));
  let K;
  t[29] !== r ||
  t[30] !== s ||
  t[31] !== se ||
  t[32] !== o ||
  t[33] !== l ||
  t[34] !== d ||
  t[35] !== c ||
  t[36] !== p
    ? ((K = () => {
        let e = T.current,
          t = w.current;
        if (!e || !t) return;
        let n = se(),
          a =
            c ??
            i.create({
              conversationId: r,
              conversationTitle: n,
              hostId: o ?? null,
              cwd: s ?? null,
            });
        ((O.current = a), (k.current = !1));
        let u = !1,
          f = new me.Terminal({
            allowTransparency: !0,
            cursorStyle: `bar`,
            fontSize: j.current,
            allowProposedApi: !0,
            cursorBlink: !0,
            fontFamily: A.current,
            letterSpacing: 0,
            lineHeight: 1.2,
            theme: re(t),
          }),
          m = null,
          h = () => {
            m ??= requestAnimationFrame(() => {
              ((m = null), f.scrollToBottom());
            });
          };
        E.current = f;
        let g = new de.ClipboardAddon(),
          _ = new fe.FitAddon();
        D.current = _;
        let ee = new pe.WebLinksAddon(be);
        (f.loadAddon(g),
          f.loadAddon(_),
          f.loadAddon(ee),
          f.attachCustomKeyEventHandler((e) =>
            ce({
              clipboard:
                typeof navigator < `u` && navigator.clipboard != null && p
                  ? navigator.clipboard
                  : void 0,
              event: e,
              onNewTerminalTab: l,
              pasteOnCtrlV: d === `windows`,
              sendText: (e) => {
                i.write(a, e);
              },
              term: f,
            }),
          ),
          f.open(e));
        let v = () => {
          u ||
            (e.isConnected &&
              requestAnimationFrame(() => {
                u || (e.isConnected && (k.current ? he(f, _, a) : _.fit()));
              }));
        };
        v();
        let y = i.register(a, {
            onClearActive: () => {
              t.contains(document.activeElement) && f.clear();
            },
            onInitLog: (e) => {
              let t = te(f);
              (f.reset(), f.write(e), t && h());
            },
            onData: (e) => {
              let t = te(f);
              (f.write(e), t && h());
            },
            onAttach: () => {
              u || ((k.current = !0), v());
            },
          }),
          b = f.onData((e) => {
            i.write(a, e);
          }),
          x = f.onTitleChange((e) => {
            i.setTitle(a, e);
          }),
          S = f.onKey(ye);
        c &&
          requestAnimationFrame(() => {
            u ||
              i.create({
                sessionId: c,
                conversationId: r,
                conversationTitle: n,
                hostId: o ?? null,
                cwd: s ?? null,
                cols: f.cols,
                rows: f.rows,
              });
          });
        let C = new ResizeObserver(() => {
          v();
        });
        return (
          C.observe(e),
          () => {
            ((u = !0),
              m != null && (cancelAnimationFrame(m), (m = null)),
              C.disconnect(),
              b.dispose(),
              x.dispose(),
              S.dispose(),
              y(),
              (D.current = null),
              (O.current = null),
              (k.current = !1),
              c || i.close(a),
              f.dispose(),
              (E.current = null));
          }
        );
      }),
      (t[29] = r),
      (t[30] = s),
      (t[31] = se),
      (t[32] = o),
      (t[33] = l),
      (t[34] = d),
      (t[35] = c),
      (t[36] = p),
      (t[37] = K))
    : (K = t[37]);
  let q;
  (t[38] !== r ||
  t[39] !== s ||
  t[40] !== o ||
  t[41] !== l ||
  t[42] !== d ||
  t[43] !== c ||
  t[44] !== p
    ? ((q = [r, s, o, l, d, c, p]),
      (t[38] = r),
      (t[39] = s),
      (t[40] = o),
      (t[41] = l),
      (t[42] = d),
      (t[43] = c),
      (t[44] = p),
      (t[45] = q))
    : (q = t[45]),
    (0, Q.useEffect)(K, q));
  let le = c == null ? void 0 : `terminal-panel-${c}`,
    J;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = {
        backgroundColor: `var(--vscode-terminal-background)`,
        color: `var(--vscode-terminal-foreground)`,
      }),
      (t[46] = J))
    : (J = t[46]);
  let Y;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, B.jsx)(`div`, {
        className: `flex-1 overflow-hidden pb-3 pl-4 tracking-normal`,
        children: (0, B.jsx)(`div`, {
          className: `h-full w-full overflow-hidden`,
          ref: T,
        }),
      })),
      (t[47] = Y))
    : (Y = t[47]);
  let X;
  return (
    t[48] === le
      ? (X = t[49])
      : ((X = (0, B.jsx)(`div`, {
          id: le,
          "data-codex-terminal": !0,
          ref: w,
          className: `relative flex h-full w-full flex-col app-theme`,
          style: J,
          children: Y,
        })),
        (t[48] = le),
        (t[49] = X)),
    X
  );
}
function ye(e) {
  let { domEvent: t } = e;
  t.key === `Enter` && P();
}
function be(e, t) {
  t && (e.preventDefault?.(), f.dispatchMessage(`open-in-browser`, { url: t }));
}
function xe(e) {
  let t = (0, z.c)(3),
    { conversationId: n } = e,
    r,
    a;
  return (
    t[0] === n
      ? ((r = t[1]), (a = t[2]))
      : ((r = (e) => (n == null ? Ce : i.subscribeToConversation(n, e))),
        (a = () => (n == null ? null : i.getConversationSnapshot(n))),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a)),
    (0, Q.useSyncExternalStore)(r, a, Se)
  );
}
function Se() {
  return null;
}
function Ce() {}
function we(e) {
  let t = (0, z.c)(12),
    {
      conversationId: n,
      conversationTitle: r,
      cwd: i,
      hostId: a,
      onNewTerminalTab: o,
      sessionId: s,
    } = e,
    c = l(p),
    u;
  if (
    (t[0] === n
      ? (u = t[1])
      : ((u = { conversationId: n }), (t[0] = n), (t[1] = u)),
    !xe(u)?.sessionIds.includes(s))
  )
    return null;
  let d;
  t[2] !== o || t[3] !== c
    ? ((d = () => {
        o(c);
      }),
      (t[2] = o),
      (t[3] = c),
      (t[4] = d))
    : (d = t[4]);
  let f;
  return (
    t[5] !== n ||
    t[6] !== r ||
    t[7] !== i ||
    t[8] !== a ||
    t[9] !== s ||
    t[10] !== d
      ? ((f = (0, B.jsx)(ge, {
          conversationId: n,
          conversationTitle: r,
          cwd: i,
          hostId: a,
          sessionId: s,
          onNewTerminalTab: d,
        })),
        (t[5] = n),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = s),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var Te = `terminal:`,
  $ = new Map(),
  Ee = s(p, ({ get: e }) => {
    let t = e(x.activeTab$);
    return e(_) && t != null && Xe(t.tabId);
  }),
  De = s(p, ({ get: e }) => {
    let t = e(b.activeTab$);
    return e(g) && t != null && Xe(t.tabId);
  });
function Oe(e) {
  (L(e, `bottom`), requestAnimationFrame(w));
}
function ke(e) {
  (L(e, `right`), requestAnimationFrame(w));
}
function Ae(e) {
  Me(e, `bottom`);
}
function je(e, t) {
  (Me(e, t == null ? ze(e) : Be(e, t), t),
    t != null && requestAnimationFrame(C));
}
function Me(e, t, n) {
  let r = qe(e);
  if (r == null) return;
  let a = i.getConversationSnapshot(r.conversationId);
  n != null &&
    !a?.sessionIds.includes(n) &&
    i.addSessionForConversation(r.conversationId, n);
  let o =
    n ??
    Ge(e, t, a?.sessionIds ?? []) ??
    i.addSessionForConversation(r.conversationId);
  (i.setActiveSessionForConversation(r.conversationId, o),
    Ue(e, r, t),
    Ve(e, r, o, !0, t, o));
}
function Ne(e) {
  return qe(e) != null;
}
function Pe(e) {
  Ie(e, `bottom`);
}
function Fe(e) {
  Ie(e, `right`);
}
function Ie(e, t) {
  let n = qe(e);
  if (n == null) return;
  let r = i.addSessionForConversation(n.conversationId);
  (Ue(e, n, t), Ve(e, n, r, !0, t, r));
}
function Le(e) {
  if (e.get(Ee)) {
    Oe(e);
    return;
  }
  Ae(e);
}
function Re(e) {
  if (ze(e) === `bottom`) {
    Le(e);
    return;
  }
  if (e.get(De)) {
    ke(e);
    return;
  }
  Me(e, `right`);
}
function ze(e) {
  return e.get(h) === !1 ? `right` : `bottom`;
}
function Be(e, t) {
  let n = Je(t);
  return e.get(x.tabs$).some((e) => e.tabId === n)
    ? `bottom`
    : e.get(b.tabs$).some((e) => e.tabId === n)
      ? `right`
      : ze(e);
}
function Ve(e, t, n, r, a, o) {
  let s = i.getConversationSnapshot(t.conversationId),
    c = s?.sessionIds ?? [],
    l = e.get(O),
    u = F(a);
  We(e, c, a);
  let d = Ke(e, a, c, o),
    f = new Map(e.get(u.tabs$).map((e) => [e.tabId, e]));
  for (let [n, r] of d.entries()) {
    let o = Je(r),
      c = se(
        s?.tabTitlesBySessionId[r],
        s?.cwdBySessionId[r] || t.cwd,
        n,
        d.length,
        l,
      ),
      p = f.get(o);
    if (p != null) {
      p.title !== c && u.updateTab(e, o, { title: c });
      continue;
    }
    u.openTab(e, we, {
      activate: !1,
      icon: (0, B.jsx)(D, {}),
      onActivate: (e) => {
        He(e, t, r, a);
      },
      onClose: () => {
        i.closeSessionForConversation(t.conversationId, r);
      },
      onMove: (e, n) => {
        if (n.panelId !== `bottom` && n.panelId !== `right`) return;
        let i = n.panelId;
        return (
          Ue(e, t, i),
          {
            onActivate: (e) => {
              He(e, t, r, i);
            },
            props: {
              ...t,
              onNewTerminalTab: i === `bottom` ? Pe : Fe,
              sessionId: r,
            },
          }
        );
      },
      id: o,
      title: c,
      props: { ...t, onNewTerminalTab: a === `bottom` ? Pe : Fe, sessionId: r },
    });
  }
  r && (u.activateTab(e, Je(n)), I(e, a));
}
function He(e, t, n, r) {
  let a = F(r);
  if (!i.getConversationSnapshot(t.conversationId)?.sessionIds.includes(n)) {
    a.closeTab(e, Je(n));
    return;
  }
  (i.setActiveSessionForConversation(t.conversationId, n),
    Ve(e, t, n, !1, r),
    requestAnimationFrame(C));
}
function Ue(e, t, n) {
  let r = String(t.conversationId),
    a = $.get(r);
  if (a != null) {
    a.panels.add(n);
    return;
  }
  let o = i.subscribeToConversation(t.conversationId, () => {
    let n = i.getConversationSnapshot(t.conversationId);
    if (n == null) {
      let t = $.get(r);
      if (t != null) {
        for (let n of t.panels) We(e, [], n);
        t.unsubscribe();
      }
      $.delete(r);
      return;
    }
    let a = $.get(r);
    if (a != null)
      for (let t of a.panels) Ve(e, a.target, n.activeSessionId, !1, t);
  });
  $.set(r, { panels: new Set([n]), target: t, unsubscribe: o });
}
function We(e, t, n) {
  let r = F(n),
    i = new Set(t.map(Je));
  for (let t of e.get(r.tabs$))
    Xe(t.tabId) && !i.has(t.tabId) && r.closeTab(e, t.tabId);
  e.get(r.tabs$).length === 0 && L(e, n);
}
function Ge(e, t, n) {
  let r = new Set(n),
    i = F(t),
    a = Ye(e.get(i.activeTab$)?.tabId ?? null);
  if (a != null && r.has(a)) return a;
  for (let t of e.get(i.tabs$)) {
    let e = Ye(t.tabId);
    if (e != null && r.has(e)) return e;
  }
  return null;
}
function Ke(e, t, n, r) {
  let i = new Set(n),
    a = e.get(F(t).tabs$).flatMap((e) => {
      let t = Ye(e.tabId);
      return t != null && i.has(t) ? [t] : [];
    });
  return r == null || !i.has(r) || a.includes(r) ? a : [...a, r];
}
function qe(e) {
  switch (e.value.routeKind) {
    case `home`: {
      let t = e.get(E),
        n = e.get(T);
      return {
        conversationId: `home:${n}:${t}`,
        conversationTitle: null,
        cwd: t,
        hostId: n,
      };
    }
    case `local-thread`:
      return {
        conversationId: e.value.conversationId,
        conversationTitle: e.get(S, e.value.conversationId),
        cwd: e.get(E),
        hostId: e.get(T),
      };
    case `new-thread-panel`:
    case `remote-thread`:
    case `other`:
      return null;
  }
}
function Je(e) {
  return `${Te}${e}`;
}
function Ye(e) {
  return e?.startsWith(Te) ? e.slice(9) : null;
}
function Xe(e) {
  return e.startsWith(Te);
}
export { Ee as a, Ie as i, je as n, Re as o, Pe as r, Ne as t };
//# sourceMappingURL=thread-page-bottom-panel-state.js.map
