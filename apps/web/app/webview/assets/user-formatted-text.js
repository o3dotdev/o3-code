import {
  Jr as e,
  Yr as t,
  br as n,
  xr as r,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { t as i } from "./jsx-runtime.js";
import { t as a } from "./clsx-BcPLHiun.js";
import { wt as o } from "./setting-storage.js";
import { t as s } from "./external-markdown-link-DVRKkYqo.js";
import { a as c, i as l, n as u, s as d, t as f } from "./inline-mentions.js";
var p = o(),
  m = i(),
  h = /(```[\s\S]*?```|`[^`\n]+`|```[\s\S]*|`[^`\n]*\n|`[^`\n]*$)/g,
  g = /\[((?:\\.|[^\]\n])+)\]\(((?:\\.|[^)\n])+)\)/g;
function _(e) {
  let t = (0, p.c)(9),
    { text: n, ref: r, className: i, style: o, cwd: s, hostId: c } = e,
    l;
  if (
    t[0] !== i ||
    t[1] !== s ||
    t[2] !== c ||
    t[3] !== r ||
    t[4] !== o ||
    t[5] !== n
  ) {
    let e = n.split(h).filter(v),
      f = [];
    for (let t of e) {
      if (t.startsWith("```")) {
        let e = t.endsWith("```") ? t.slice(3, -3).trim() : t.slice(3).trim();
        f.push({ kind: `code-block`, content: e });
        continue;
      }
      if (t.startsWith("`")) {
        let e = t.endsWith("`") ? t.slice(1, -1) : t.slice(1);
        f.push({ kind: `inline-code`, content: e });
        continue;
      }
      f.push({ kind: `text`, content: t });
    }
    let p = [];
    for (let e = 0; e < f.length; e += 1) {
      let t = f[e];
      if (t.kind === `text`) {
        let n = t.content,
          r = e > 0 ? f[e - 1] : null,
          i = e + 1 < f.length ? f[e + 1] : null;
        (r?.kind === `code-block` &&
          (n = n.replace(
            /^\n{2,}/,
            `
`,
          )),
          i?.kind === `code-block` &&
            (n = n.replace(
              /\n{2,}$/,
              `
`,
            )),
          p.push({ kind: `text`, content: n }));
        continue;
      }
      p.push(t);
    }
    let g;
    (t[7] === i
      ? (g = t[8])
      : ((g = a(`text-size-chat whitespace-pre-wrap`, i)),
        (t[7] = i),
        (t[8] = g)),
      (l = (0, m.jsx)(`div`, {
        ref: r,
        className: g,
        style: o,
        children: p.map((e, t) => {
          if (e.kind === `code-block`)
            return (0, m.jsx)(
              `pre`,
              {
                className: `m-0 max-w-full overflow-x-auto font-mono whitespace-pre`,
                children: (0, m.jsx)(`code`, { children: e.content }),
              },
              `user-code-block-${t}`,
            );
          if (e.kind === `inline-code`) {
            let n = e.content;
            return u(n)
              ? (0, m.jsx)(d, { label: y(n) }, `user-inline-code-${t}`)
              : (0, m.jsx)(
                  `code`,
                  { className: `font-mono`, children: e.content },
                  `user-inline-code-${t}`,
                );
          }
          return (0, m.jsx)(
            `span`,
            { children: x(e.content, `user-text-${t}`, s, c) },
            `user-text-${t}`,
          );
        }),
      })),
      (t[0] = i),
      (t[1] = s),
      (t[2] = c),
      (t[3] = r),
      (t[4] = o),
      (t[5] = n),
      (t[6] = l));
  } else l = t[6];
  return l;
}
function v(e) {
  return e.length > 0;
}
function y(e) {
  return e.startsWith(`$`)
    ? e.startsWith(`$[`) && e.endsWith(`]`)
      ? e.slice(2, -1)
      : e.slice(1)
    : e;
}
function b(e, t, i, a) {
  let o = f(e);
  if (o == null) return [e];
  let s = [],
    l = 0;
  for (let [f, p] of o.entries()) {
    if ((p.index > l && s.push(e.slice(l, p.index)), u(p.content)))
      s.push((0, m.jsx)(d, { label: y(p.content) }, `${t}-skill-${f}`));
    else if (p.content.startsWith(`@`)) {
      let e = p.content.slice(1);
      n(e)
        ? s.push(
            (0, m.jsx)(
              c,
              { reference: r(e), cwd: i, hostId: a },
              `${t}-file-${f}`,
            ),
          )
        : s.push(p.content);
    } else s.push(p.content);
    l = p.index + p.content.length;
  }
  return (l < e.length && s.push(e.slice(l)), s);
}
function x(n, r, i, a) {
  if (!g.test(n)) return b(n, r, i, a);
  let o = [],
    c = 0;
  g.lastIndex = 0;
  let u,
    d = 0;
  for (; (u = g.exec(n)) != null; ) {
    u.index > c && o.push(...b(n.slice(c, u.index), `${r}-text-${d}`, i, a));
    let f = u[1],
      p = u[2],
      h = e(f),
      g = t(p),
      _ = l({
        cwd: i,
        elementKey: `${r}-link-${d}`,
        hostId: a,
        href: g,
        label: h,
        openFileLinksInSidePanel: h.trim().startsWith(`$`),
      });
    (_ == null
      ? o.push(
          (0, m.jsx)(
            s,
            { href: g, originHostId: a, children: h },
            `${r}-link-${d}`,
          ),
        )
      : o.push(_),
      (c = u.index + u[0].length),
      (d += 1));
  }
  return (c < n.length && o.push(...b(n.slice(c), `${r}-text-${d}`, i, a)), o);
}
export { _ as t };
//# sourceMappingURL=user-formatted-text.js.map
