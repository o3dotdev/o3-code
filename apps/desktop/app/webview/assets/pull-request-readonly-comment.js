import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  ca as t,
  la as n,
  sa as r,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as i, t as a } from "./jsx-runtime.js";
import { t as o } from "./clsx-BcPLHiun.js";
import { G as s, U as c, wt as l } from "./setting-storage.js";
import { t as u } from "./github-mark-BbpRNXQM.js";
import { t as d } from "./tooltip-CDzchJxN.js";
import { t as f } from "./button.js";
import { t as p } from "./link-external-BPZREBQk.js";
import { t as m } from "./chevron-NmAOI_v1.js";
import { t as h } from "./format-relative-date-time.js";
import { n as g } from "./markdown-46SswYUq.js";
import { t as _ } from "./format-short-local-date-time.js";
var v = /<details(\s+open)?>([\s\S]*?)<\/details>/gi,
  y = /(^|\n)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\2(?=\n|$)/g,
  b =
    /(^|\n)(>[ \t]*)\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]([ \t]*(?=\n|$))/gi,
  x = /<!--[\s\S]*?-->/g,
  S = /^\s*<summary>([\s\S]*?)<\/summary>\s*([\s\S]*)$/i,
  C = /<[^>]+>/g,
  w = `@@CODEX_FENCED_CODE_BLOCK_`;
function T(e) {
  let t = [];
  return ee(
    O(
      e.replace(y, (e) => {
        let n = `${w}${t.length}@@`;
        return (t.push(e), n);
      }),
    ),
    t,
  );
}
function E(e) {
  return e.replace(/\s+/g, ` `).trim();
}
function D(e) {
  return E(e.replace(C, ` `));
}
function O(e) {
  return e
    .replace(x, ``)
    .replace(b, (e, t, n, r) => `${t}${n}**${k(r)}**`)
    .replace(v, (e, t, n) => {
      let r = n.match(S);
      if (r == null) return e;
      let i = D(r[1] ?? ``);
      if (i.length === 0) return e;
      let a = (r[2] ?? ``).trim(),
        o = [`summary=${JSON.stringify(i)}`];
      return (
        t != null && o.push(`open="true"`),
        `:::github-details{${o.join(` `)}}\n${a}\n:::`
      );
    })
    .replace(
      /\n{3,}/g,
      `

`,
    );
}
function k(e) {
  let t = e.toLowerCase();
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function ee(e, t) {
  return e.replace(
    /@@CODEX_FENCED_CODE_BLOCK_(\d+)@@/g,
    (e, n) => t[Number(n)] ?? e,
  );
}
var A = l(),
  j = a();
function te(e) {
  let t = (0, A.c)(29),
    {
      authorAvatar: n,
      authorLabel: r,
      body: i,
      className: a,
      footer: s,
      footerFlush: c,
      footerHasTopPadding: l,
      headerAccessory: u,
      headerTooltipContent: f,
      onPointerDownCapture: p,
      surface: m,
    } = e,
    h = c === void 0 ? !1 : c,
    g = l === void 0 ? !1 : l,
    _ = (m === void 0 ? `card` : m) === `card`,
    v = i != null,
    y;
  t[0] === r
    ? (y = t[1])
    : ((y = (0, j.jsx)(`div`, {
        className: `flex min-w-0 items-center gap-1.5`,
        children: (0, j.jsx)(`span`, {
          className: `flex min-w-0 items-center truncate text-base leading-5 font-medium text-token-foreground`,
          children: r,
        }),
      })),
      (t[0] = r),
      (t[1] = y));
  let b;
  t[2] !== n || t[3] !== y
    ? ((b = (0, j.jsxs)(`div`, {
        className: `flex min-h-6 min-w-0 items-center gap-2.5`,
        children: [n, y],
      })),
      (t[2] = n),
      (t[3] = y),
      (t[4] = b))
    : (b = t[4]);
  let x = b,
    S =
      _ &&
      `overflow-hidden rounded-[12px] border border-token-border/14 bg-token-dropdown-background`,
    C;
  t[5] !== a || t[6] !== S
    ? ((C = o(S, a)), (t[5] = a), (t[6] = S), (t[7] = C))
    : (C = t[7]);
  let w;
  t[8] !== s || t[9] !== v || t[10] !== _
    ? ((w = o(
        `flex flex-wrap items-center justify-between gap-3`,
        _
          ? o(
              `px-3 py-2.5`,
              (v || s != null) && `border-b border-token-border/24`,
            )
          : `mb-3`,
      )),
      (t[8] = s),
      (t[9] = v),
      (t[10] = _),
      (t[11] = w))
    : (w = t[11]);
  let T;
  t[12] !== f || t[13] !== x
    ? ((T =
        f == null
          ? x
          : (0, j.jsx)(d, {
              delayDuration: 250,
              tooltipContent: f,
              children: x,
            })),
      (t[12] = f),
      (t[13] = x),
      (t[14] = T))
    : (T = t[14]);
  let E;
  t[15] !== u || t[16] !== w || t[17] !== T
    ? ((E = (0, j.jsxs)(`div`, { className: w, children: [T, u] })),
      (t[15] = u),
      (t[16] = w),
      (t[17] = T),
      (t[18] = E))
    : (E = t[18]);
  let D = v ? i : null,
    O;
  t[19] !== s || t[20] !== h || t[21] !== g
    ? ((O =
        s == null
          ? null
          : (0, j.jsx)(`div`, {
              className: o(
                `flex items-center justify-end text-sm leading-5 text-token-description-foreground`,
                h ? `p-0` : `px-3 pb-1.5`,
                !h && g && `pt-3`,
              ),
              children: s,
            })),
      (t[19] = s),
      (t[20] = h),
      (t[21] = g),
      (t[22] = O))
    : (O = t[22]);
  let k;
  return (
    t[23] !== p || t[24] !== E || t[25] !== D || t[26] !== O || t[27] !== C
      ? ((k = (0, j.jsxs)(`div`, {
          className: C,
          onPointerDownCapture: p,
          children: [E, D, O],
        })),
        (t[23] = p),
        (t[24] = E),
        (t[25] = D),
        (t[26] = O),
        (t[27] = C),
        (t[28] = k))
      : (k = t[28]),
    k
  );
}
function ne(e, t) {
  let n = e?.trim();
  return n == null || n.length === 0 || /\s/.test(n)
    ? null
    : `https://github.com/${encodeURIComponent(n)}.png?size=${t}`;
}
function M(e) {
  let t = (0, A.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, j.jsx)(`span`, {
        className: `absolute -right-0.5 -bottom-0.5 flex size-3 items-center justify-center rounded-full border border-token-bg-primary bg-token-bg-primary text-token-foreground`,
        children: (0, j.jsx)(u, { className: `size-2` }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, j.jsxs)(`span`, {
          className: `relative shrink-0`,
          children: [n, r],
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var N = e(i(), 1);
function re(e) {
  let t = (0, A.c)(26),
    { children: n, index: r, reply: i } = e,
    a = s(),
    [c, l] = (0, N.useState)(null),
    u,
    d,
    f,
    p;
  if (
    t[0] !== c ||
    t[1] !== r ||
    t[2] !== a ||
    t[3] !== i.authorAvatarUrl ||
    t[4] !== i.authorLogin
  ) {
    u =
      i.authorLogin ??
      a.formatMessage({
        id: `pullRequestsPage.detail.commentUnknownAuthor`,
        defaultMessage: `Unknown author`,
        description: `Fallback author label for PR timeline comments on the detail page`,
      });
    let e;
    t[9] !== i.authorAvatarUrl || t[10] !== i.authorLogin
      ? ((e = i.authorAvatarUrl ?? ne(i.authorLogin, 32)),
        (t[9] = i.authorAvatarUrl),
        (t[10] = i.authorLogin),
        (t[11] = e))
      : (e = t[11]);
    let n = e,
      s = n != null && n !== c,
      m = r > 0 && `border-t border-token-border/24`;
    (t[12] === m
      ? (p = t[13])
      : ((p = o(`bg-token-bg-primary/20`, m)), (t[12] = m), (t[13] = p)),
      (d = `flex min-w-0 items-center gap-2 px-3 pt-2.5 pb-1`),
      (f = s
        ? (0, j.jsx)(M, {
            children: (0, j.jsx)(`img`, {
              alt: a.formatMessage(
                {
                  id: `pullRequestsPage.detail.commentAuthorAvatarAlt`,
                  defaultMessage: `{author} avatar`,
                  description: `Alt text for a pull request comment author's avatar on the detail page`,
                },
                { author: u },
              ),
              className: `size-5 rounded-full border border-token-border/14 object-cover`,
              src: n,
              onError: () => {
                l(n);
              },
            }),
          })
        : (0, j.jsx)(M, {
            children: (0, j.jsx)(`span`, {
              className: `flex size-5 items-center justify-center rounded-full border border-token-border/20 bg-token-bg-primary/60 text-xs font-semibold text-token-foreground`,
              children: u.slice(0, 1).toUpperCase(),
            }),
          })),
      (t[0] = c),
      (t[1] = r),
      (t[2] = a),
      (t[3] = i.authorAvatarUrl),
      (t[4] = i.authorLogin),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p));
  } else ((u = t[5]), (d = t[6]), (f = t[7]), (p = t[8]));
  let m;
  t[14] === u
    ? (m = t[15])
    : ((m = (0, j.jsx)(`span`, {
        className: `min-w-0 truncate text-sm font-medium text-token-foreground`,
        children: u,
      })),
      (t[14] = u),
      (t[15] = m));
  let h;
  t[16] !== d || t[17] !== f || t[18] !== m
    ? ((h = (0, j.jsxs)(`div`, { className: d, children: [f, m] })),
      (t[16] = d),
      (t[17] = f),
      (t[18] = m),
      (t[19] = h))
    : (h = t[19]);
  let g = n ?? i.text,
    _;
  t[20] === g
    ? (_ = t[21])
    : ((_ = (0, j.jsx)(`div`, {
        className: `text-size-chat px-3 py-2.5 break-words text-token-foreground [&_p]:leading-6`,
        children: g,
      })),
      (t[20] = g),
      (t[21] = _));
  let v;
  return (
    t[22] !== p || t[23] !== h || t[24] !== _
      ? ((v = (0, j.jsxs)(`div`, { className: p, children: [h, _] })),
        (t[22] = p),
        (t[23] = h),
        (t[24] = _),
        (t[25] = v))
      : (v = t[25]),
    v
  );
}
function ie(e) {
  let n = (0, A.c)(57),
    {
      authorLogin: i,
      authorAvatarUrl: a,
      body: c,
      bodyClassName: l,
      bodyPreview: u,
      comment: v,
      className: y,
      createdAt: b,
      defaultCollapsed: x,
      metadataAccessory: S,
      metadataAccessoryFlush: C,
      metadataTooltipContent: w,
      replies: E,
      showDiffLocation: D,
      url: O,
      surface: k,
    } = e,
    ee = u === void 0 ? !1 : u,
    re = x === void 0 ? !1 : x,
    ie = C === void 0 ? !1 : C,
    le = E === void 0 ? [] : E,
    P = D === void 0 ? !1 : D,
    ue = k === void 0 ? `plain` : k,
    F = s(),
    [I, L] = (0, N.useState)(re),
    [R, de] = (0, N.useState)(null),
    z,
    B,
    V,
    H;
  if (
    n[0] !== a ||
    n[1] !== i ||
    n[2] !== c ||
    n[3] !== v ||
    n[4] !== R ||
    n[5] !== F
  ) {
    let { authorLogin: e, text: t } =
      v == null ? { authorLogin: null, text: c ?? `` } : r(v);
    ((B = i ?? v?.authorLogin ?? e),
      (V = v == null ? (c ?? ``) : t),
      (z =
        B ??
        F.formatMessage({
          id: `pullRequestsPage.detail.commentUnknownAuthor`,
          defaultMessage: `Unknown author`,
          description: `Fallback author label for PR timeline comments on the detail page`,
        })));
    let o = a ?? v?.authorAvatarUrl ?? (B == null ? null : ne(B, 48)),
      s = o != null && o !== R,
      l = F.formatMessage(
        {
          id: `pullRequestsPage.detail.commentAuthorAvatarAlt`,
          defaultMessage: `{author} avatar`,
          description: `Alt text for a pull request comment author's avatar on the detail page`,
        },
        { author: z },
      );
    ((H = s
      ? (0, j.jsx)(`img`, {
          alt: l,
          className: `size-6 rounded-full border border-token-border/14 object-cover`,
          src: o,
          onError: () => {
            de(o);
          },
        })
      : (0, j.jsx)(`span`, {
          className: `flex size-6 items-center justify-center rounded-full border border-token-border/20 bg-token-bg-primary/60 text-xs font-semibold text-token-foreground`,
          children: z.slice(0, 1).toUpperCase(),
        })),
      (n[0] = a),
      (n[1] = i),
      (n[2] = c),
      (n[3] = v),
      (n[4] = R),
      (n[5] = F),
      (n[6] = z),
      (n[7] = B),
      (n[8] = V),
      (n[9] = H));
  } else ((z = n[6]), (B = n[7]), (V = n[8]), (H = n[9]));
  let U = H;
  if (ee) {
    let e;
    n[10] === v?.position.path
      ? (e = n[11])
      : ((e = v?.position.path.split(`/`).at(-1) ?? null),
        (n[10] = v?.position.path),
        (n[11] = e));
    let t = e,
      r;
    n[12] !== b || n[13] !== t || n[14] !== O
      ? ((r =
          t != null || b != null
            ? (0, j.jsxs)(j.Fragment, {
                children: [
                  (0, j.jsx)(`span`, {
                    className: o(
                      `min-w-0 truncate text-token-text-tertiary`,
                      O != null && `group-hover:text-token-foreground`,
                    ),
                    children: t,
                  }),
                  b == null
                    ? null
                    : (0, j.jsx)(`span`, {
                        className: o(
                          `shrink-0 text-token-text-tertiary`,
                          O != null && `group-hover:text-token-foreground`,
                        ),
                        children: (0, j.jsx)(h, { dateString: b }),
                      }),
                ],
              })
            : null),
        (n[12] = b),
        (n[13] = t),
        (n[14] = O),
        (n[15] = r))
      : (r = n[15]);
    let i = r,
      a;
    n[16] === y
      ? (a = n[17])
      : ((a = o(`flex min-w-0 gap-2 py-1`, y)), (n[16] = y), (n[17] = a));
    let s;
    n[18] === U
      ? (s = n[19])
      : ((s = (0, j.jsx)(`span`, { className: `shrink-0`, children: U })),
        (n[18] = U),
        (n[19] = s));
    let c;
    n[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = {
          img() {
            return null;
          },
          p(e) {
            let { children: t } = e;
            return (0, j.jsx)(`span`, {
              className: `block leading-5`,
              children: t,
            });
          },
          strong(e) {
            let { children: t } = e;
            return (0, j.jsx)(j.Fragment, { children: t });
          },
        }),
        (n[20] = c))
      : (c = n[20]);
    let l;
    n[21] === V ? (l = n[22]) : ((l = T(V)), (n[21] = V), (n[22] = l));
    let u;
    n[23] === l
      ? (u = n[24])
      : ((u = (0, j.jsx)(g, {
          allowBasicHtml: !0,
          className: `line-clamp-3 text-base break-words text-token-foreground`,
          components: c,
          cwd: null,
          children: l,
        })),
        (n[23] = l),
        (n[24] = u));
    let d;
    n[25] !== F || n[26] !== i || n[27] !== O
      ? ((d =
          i == null
            ? null
            : O == null
              ? (0, j.jsx)(`div`, {
                  className: `flex min-w-0 items-center justify-between gap-2 text-base`,
                  children: i,
                })
              : (0, j.jsx)(`a`, {
                  "aria-label": F.formatMessage({
                    id: `pullRequestsPage.detail.openCommentOnGitHub`,
                    defaultMessage: `Open comment on GitHub`,
                    description: `Accessible label for a link that opens a pull request comment on GitHub`,
                  }),
                  className: `group flex min-w-0 cursor-interaction items-center justify-between gap-2 text-base`,
                  href: O,
                  rel: `noreferrer`,
                  target: `_blank`,
                  children: i,
                })),
        (n[25] = F),
        (n[26] = i),
        (n[27] = O),
        (n[28] = d))
      : (d = n[28]);
    let f;
    n[29] !== u || n[30] !== d
      ? ((f = (0, j.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 flex-col gap-0.5`,
          children: [u, d],
        })),
        (n[29] = u),
        (n[30] = d),
        (n[31] = f))
      : (f = n[31]);
    let p;
    return (
      n[32] !== a || n[33] !== s || n[34] !== f
        ? ((p = (0, j.jsxs)(`div`, { className: a, children: [s, f] })),
          (n[32] = a),
          (n[33] = s),
          (n[34] = f),
          (n[35] = p))
        : (p = n[35]),
      p
    );
  }
  let fe = v == null ? [] : t(v).slice(1),
    pe = le.map(se),
    W = [...fe, ...pe],
    G;
  n[36] !== v || n[37] !== P
    ? ((G = P && v != null ? ce(v) : null),
      (n[36] = v),
      (n[37] = P),
      (n[38] = G))
    : (G = n[38]);
  let K = G,
    me = B != null || b != null,
    q = ue === `card`,
    J;
  n[39] === U
    ? (J = n[40])
    : ((J = (0, j.jsx)(M, { children: U })), (n[39] = U), (n[40] = J));
  let he = J,
    ge = I
      ? null
      : (0, j.jsxs)(`div`, {
          className: l,
          children: [
            (0, j.jsx)(g, {
              allowBasicHtml: !0,
              className: `text-size-chat px-3 py-2.5 break-words text-token-foreground [&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-token-border/16 [&_details]:bg-token-bg-primary/28 [&_details]:px-3.5 [&_details]:py-3 [&_p]:leading-6 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-token-foreground`,
              cwd: null,
              children: T(V),
            }),
            W.length > 0 &&
              (0, j.jsx)(`div`, {
                className: `flex flex-col border-t border-token-border/24 bg-token-bg-primary/20`,
                children: W.map(oe),
              }),
          ],
        }),
    Y;
  n[41] !== F || n[42] !== I
    ? ((Y = I
        ? F.formatMessage({
            id: `pullRequestsPage.detail.expandComment`,
            defaultMessage: `Expand`,
            description: `Accessible label for the button that expands a collapsed pull request comment`,
          })
        : F.formatMessage({
            id: `pullRequestsPage.detail.collapseComment`,
            defaultMessage: `Collapse`,
            description: `Accessible label for the button that collapses an expanded pull request comment`,
          })),
      (n[41] = F),
      (n[42] = I),
      (n[43] = Y))
    : (Y = n[43]);
  let X = Y,
    Z;
  n[44] !== q ||
  n[45] !== X ||
  n[46] !== b ||
  n[47] !== I ||
  n[48] !== K ||
  n[49] !== L
    ? ((Z =
        K != null || b != null || q
          ? (0, j.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                K == null
                  ? null
                  : (0, j.jsx)(`div`, {
                      className: `text-xs leading-4 text-token-description-foreground`,
                      children: K,
                    }),
                b == null
                  ? null
                  : (0, j.jsx)(`div`, {
                      className: `text-sm text-token-description-foreground`,
                      children: _(b),
                    }),
                q
                  ? (0, j.jsx)(d, {
                      delayDuration: 250,
                      tooltipContent: X,
                      children: (0, j.jsx)(f, {
                        "aria-label": X,
                        color: `ghost`,
                        size: `composerSm`,
                        uniform: !0,
                        onClick: (e) => {
                          (e.preventDefault(), e.stopPropagation(), L(ae));
                        },
                        children: (0, j.jsx)(m, {
                          className: I
                            ? `icon-2xs rotate-0 transition-transform duration-200`
                            : `icon-2xs rotate-180 transition-transform duration-200`,
                        }),
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (n[44] = q),
      (n[45] = X),
      (n[46] = b),
      (n[47] = I),
      (n[48] = K),
      (n[49] = L),
      (n[50] = Z))
    : (Z = n[50]);
  let _e = Z,
    Q;
  n[51] !== F || n[52] !== O
    ? ((Q =
        O == null
          ? null
          : (0, j.jsx)(d, {
              delayDuration: 250,
              tooltipContent: F.formatMessage({
                id: `pullRequestsPage.detail.viewCommentOnGitHub`,
                defaultMessage: `View comment on GitHub`,
                description: `Tooltip for the external link that opens a pull request comment on GitHub`,
              }),
              children: (0, j.jsx)(`a`, {
                "aria-label": F.formatMessage({
                  id: `pullRequestsPage.detail.openCommentOnGitHub`,
                  defaultMessage: `Open comment on GitHub`,
                  description: `Accessible label for a link that opens a pull request comment on GitHub`,
                }),
                className: `ml-1.5 inline-flex shrink-0 text-token-description-foreground transition-colors hover:text-token-foreground`,
                href: O,
                rel: `noreferrer`,
                target: `_blank`,
                children: (0, j.jsx)(p, { className: `icon-xs` }),
              }),
            })),
      (n[51] = F),
      (n[52] = O),
      (n[53] = Q))
    : (Q = n[53]);
  let ve = Q,
    $;
  return (
    n[54] !== z || n[55] !== ve
      ? (($ = (0, j.jsxs)(j.Fragment, { children: [z, ve] })),
        (n[54] = z),
        (n[55] = ve),
        (n[56] = $))
      : ($ = n[56]),
    me
      ? (0, j.jsx)(te, {
          authorAvatar: he,
          authorLabel: $,
          body: ge,
          className: y,
          footer: I ? null : S,
          footerFlush: ie,
          footerHasTopPadding: W.length > 0,
          headerAccessory: _e,
          headerTooltipContent: w,
          surface: ue,
        })
      : (0, j.jsx)(g, {
          allowBasicHtml: !0,
          className: `text-size-chat break-words text-token-foreground [&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-token-border/16 [&_details]:bg-token-bg-primary/28 [&_details]:px-3.5 [&_details]:py-3 [&_p]:leading-6 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-token-foreground`,
          cwd: null,
          children: T(V),
        })
  );
}
function ae(e) {
  return !e;
}
function oe(e, t) {
  return (0, j.jsx)(
    re,
    {
      index: t,
      reply: e,
      children: (0, j.jsx)(g, {
        allowBasicHtml: !0,
        className: `text-size-chat break-words text-token-foreground [&_p]:leading-6`,
        cwd: null,
        children: T(e.text),
      }),
    },
    t,
  );
}
function se(e) {
  return {
    authorAvatarUrl: e.authorAvatarUrl,
    authorLogin: e.authorLogin,
    text: e.body,
  };
}
function ce(e) {
  let { startLine: t, endLine: r } = n(e),
    i = e.position.side === `left` ? `L` : `R`;
  return t === r
    ? (0, j.jsx)(c, {
        id: `pullRequestsPage.detail.commentLine`,
        defaultMessage: `Comment on line {side}{line}`,
        description: `Line label shown above a pull request comment in a diff`,
        values: { line: r, side: i },
      })
    : (0, j.jsx)(c, {
        id: `pullRequestsPage.detail.commentLines`,
        defaultMessage: `Comment on lines {side}{startLine} to {side}{endLine}`,
        description: `Line range label shown above a pull request comment in a diff`,
        values: { endLine: r, side: i, startLine: t },
      });
}
export { T as i, M as n, te as r, ie as t };
//# sourceMappingURL=pull-request-readonly-comment.js.map
