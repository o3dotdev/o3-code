import { t as e } from "./jsx-runtime.js";
import { t } from "./clsx-BcPLHiun.js";
import { G as n, U as r, wt as i } from "./setting-storage.js";
var a = i(),
  o = e(),
  s = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`],
  c = {
    0: `diff-stat-digit-stack-0`,
    1: `diff-stat-digit-stack-1`,
    2: `diff-stat-digit-stack-2`,
    3: `diff-stat-digit-stack-3`,
    4: `diff-stat-digit-stack-4`,
    5: `diff-stat-digit-stack-5`,
    6: `diff-stat-digit-stack-6`,
    7: `diff-stat-digit-stack-7`,
    8: `diff-stat-digit-stack-8`,
    9: `diff-stat-digit-stack-9`,
  };
function l(e) {
  let i = (0, a.c)(26),
    { linesAdded: s, linesRemoved: c, variant: l, className: u } = e,
    d = l === void 0 ? `color` : l,
    f = n(),
    p;
  i[0] === u
    ? (p = i[1])
    : ((p = t(
        `inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight`,
        u,
      )),
      (i[0] = u),
      (i[1] = p));
  let m =
      d === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-added-resource-foreground`,
    h;
  i[2] === m
    ? (h = i[3])
    : ((h = t(`flex shrink-0 items-center`, m)), (i[2] = m), (i[3] = h));
  let g;
  i[4] !== f || i[5] !== s
    ? ((g = f.formatNumber(s)), (i[4] = f), (i[5] = s), (i[6] = g))
    : (g = i[6]);
  let _;
  i[7] === g
    ? (_ = i[8])
    : ((_ = (0, o.jsx)(r, {
        id: `wham.message.modal.repoAndDiffStats.linesAdded`,
        defaultMessage: `+{linesAdded}`,
        description: `Number of lines added`,
        values: { linesAdded: g },
      })),
      (i[7] = g),
      (i[8] = _));
  let v;
  i[9] !== h || i[10] !== _
    ? ((v = (0, o.jsx)(`span`, { className: h, children: _ })),
      (i[9] = h),
      (i[10] = _),
      (i[11] = v))
    : (v = i[11]);
  let y =
      d === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-deleted-resource-foreground`,
    b;
  i[12] === y
    ? (b = i[13])
    : ((b = t(`flex shrink-0 items-center`, y)), (i[12] = y), (i[13] = b));
  let x;
  i[14] !== f || i[15] !== c
    ? ((x = f.formatNumber(c)), (i[14] = f), (i[15] = c), (i[16] = x))
    : (x = i[16]);
  let S;
  i[17] === x
    ? (S = i[18])
    : ((S = (0, o.jsx)(r, {
        id: `wham.message.modal.repoAndDiffStats.linesRemoved`,
        defaultMessage: `-{linesRemoved}`,
        description: `Number of lines removed`,
        values: { linesRemoved: x },
      })),
      (i[17] = x),
      (i[18] = S));
  let C;
  i[19] !== S || i[20] !== b
    ? ((C = (0, o.jsx)(`span`, { className: b, children: S })),
      (i[19] = S),
      (i[20] = b),
      (i[21] = C))
    : (C = i[21]);
  let w;
  return (
    i[22] !== C || i[23] !== p || i[24] !== v
      ? ((w = (0, o.jsxs)(`span`, {
          "data-thread-find-skip": !0,
          className: p,
          children: [v, C],
        })),
        (i[22] = C),
        (i[23] = p),
        (i[24] = v),
        (i[25] = w))
      : (w = i[25]),
    w
  );
}
function u(e) {
  let n = (0, a.c)(20),
    { linesAdded: i, linesRemoved: s, variant: c, className: l } = e,
    u = c === void 0 ? `color` : c,
    f;
  n[0] === l
    ? (f = n[1])
    : ((f = t(
        `inline-flex items-center gap-1 disambiguated-digits tabular-nums tracking-tight`,
        l,
      )),
      (n[0] = l),
      (n[1] = f));
  let p =
      u === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-added-resource-foreground`,
    m;
  n[2] === p
    ? (m = n[3])
    : ((m = t(`flex shrink-0 items-center`, p)), (n[2] = p), (n[3] = m));
  let h;
  n[4] === i
    ? (h = n[5])
    : ((h = (0, o.jsx)(r, {
        id: `wham.message.modal.repoAndDiffStats.linesAdded`,
        defaultMessage: `+{linesAdded}`,
        description: `Number of lines added`,
        values: { linesAdded: (0, o.jsx)(d, { value: i }, `linesAdded`) },
      })),
      (n[4] = i),
      (n[5] = h));
  let g;
  n[6] !== m || n[7] !== h
    ? ((g = (0, o.jsx)(`span`, { className: m, children: h })),
      (n[6] = m),
      (n[7] = h),
      (n[8] = g))
    : (g = n[8]);
  let _ =
      u === `monochrome`
        ? `text-token-input-placeholder-foreground`
        : `text-token-git-decoration-deleted-resource-foreground`,
    v;
  n[9] === _
    ? (v = n[10])
    : ((v = t(`flex shrink-0 items-center`, _)), (n[9] = _), (n[10] = v));
  let y;
  n[11] === s
    ? (y = n[12])
    : ((y = (0, o.jsx)(r, {
        id: `wham.message.modal.repoAndDiffStats.linesRemoved`,
        defaultMessage: `-{linesRemoved}`,
        description: `Number of lines removed`,
        values: { linesRemoved: (0, o.jsx)(d, { value: s }, `linesRemoved`) },
      })),
      (n[11] = s),
      (n[12] = y));
  let b;
  n[13] !== v || n[14] !== y
    ? ((b = (0, o.jsx)(`span`, { className: v, children: y })),
      (n[13] = v),
      (n[14] = y),
      (n[15] = b))
    : (b = n[15]);
  let x;
  return (
    n[16] !== b || n[17] !== f || n[18] !== g
      ? ((x = (0, o.jsxs)(`span`, {
          "data-thread-find-skip": !0,
          className: f,
          children: [g, b],
        })),
        (n[16] = b),
        (n[17] = f),
        (n[18] = g),
        (n[19] = x))
      : (x = n[19]),
    x
  );
}
function d(e) {
  let t = (0, a.c)(3),
    { value: r } = e,
    i = n(),
    s;
  if (t[0] !== i || t[1] !== r) {
    let e = i.formatNumber(r),
      n = Array.from(e),
      a = n.filter(m).length;
    ((s = (0, o.jsx)(`span`, {
      "aria-label": e,
      className: `inline-flex items-baseline`,
      children: n.map((e, t) =>
        m(e)
          ? (--a, (0, o.jsx)(f, { digit: e }, `digit-${a}`))
          : (0, o.jsx)(
              `span`,
              { "aria-hidden": `true`, children: e },
              `separator-${t}`,
            ),
      ),
    })),
      (t[0] = i),
      (t[1] = r),
      (t[2] = s));
  } else s = t[2];
  return s;
}
function f(e) {
  let n = (0, a.c)(5),
    { digit: r } = e,
    i = c[r],
    l;
  n[0] === i
    ? (l = n[1])
    : ((l = t(`diff-stat-digit-stack`, i)), (n[0] = i), (n[1] = l));
  let u;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = s.map(p)), (n[2] = u))
    : (u = n[2]);
  let d;
  return (
    n[3] === l
      ? (d = n[4])
      : ((d = (0, o.jsx)(`span`, {
          "aria-hidden": `true`,
          className: `diff-stat-digit-column`,
          children: (0, o.jsx)(`span`, { className: l, children: u }),
        })),
        (n[3] = l),
        (n[4] = d)),
    d
  );
}
function p(e) {
  return (0, o.jsx)(`span`, { children: e }, e);
}
function m(e) {
  return e >= `0` && e <= `9`;
}
export { l as n, u as t };
//# sourceMappingURL=diff-stats.js.map
