import {
  Jr as e,
  Wr as t,
  Yr as n,
  ur as r,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { it as i } from "./setting-storage.js";
import { r as a, t as o } from "./route-scope.js";
import {
  a as s,
  b as c,
  h as l,
  o as u,
  t as d,
  y as f,
} from "./mention-item.js";
import { t as p } from "./external-link-source-DT57c-8r.js";
var m = i(`ComposerScope`, { key: h, parent: o, retain: { max: 100 } });
function h(e) {
  switch (e.kind) {
    case `new`:
      return e.entrypoint === `home`
        ? `new-conversation`
        : `panel-new-conversation`;
    case `local`:
      return `local:${e.conversationId}`;
    case `cloud`:
      return `cloud:${e.taskId}`;
    case `other`:
      return `other`;
  }
}
function g(e, t = `main`, n = e) {
  return {
    conversationId: e,
    kind: `local`,
    placement: t,
    routeConversationId: n,
  };
}
function _(e) {
  let t = a(e);
  switch (e.routeKind) {
    case `home`:
      return { entrypoint: `home`, kind: `new`, routeConversationId: t };
    case `new-thread-panel`:
      return { entrypoint: `panel`, kind: `new`, routeConversationId: t };
    case `local-thread`:
      return g(e.conversationId);
    case `remote-thread`:
      return { kind: `cloud`, routeConversationId: t, taskId: e.taskId };
    case `other`:
      return { kind: `other`, routeConversationId: t };
  }
}
function v(e) {
  let t = e.trim();
  if (t.length === 0 || /\s/u.test(t)) return null;
  let n;
  try {
    n = new URL(t);
  } catch {
    return null;
  }
  return n.protocol !== `http:` && n.protocol !== `https:` ? null : t;
}
function y(e) {
  let t = v(e);
  if (t == null) return null;
  let n = new URL(t),
    r = p(t);
  return r == null
    ? null
    : { displayText: x(t, n, r), href: t, sourceAppId: r.appId };
}
function b({ displayText: e, href: t }) {
  let n;
  try {
    n = new URL(t);
  } catch {
    return null;
  }
  if (n.protocol !== `http:` && n.protocol !== `https:`) return null;
  let r = p(t);
  return r == null ? null : { displayText: e, href: t, sourceAppId: r.appId };
}
function x(e, t, n) {
  switch (n.appId) {
    case `figma`:
      return w(t) ?? e;
    case `github`:
      return S(t) ?? e;
    case `notion`:
      return C(t) ?? e;
    case `gmail`:
    case `google-calendar`:
    case `google-drive`:
    case `linear`:
    case `slack`:
      return e;
  }
}
function S(e) {
  let t = E(e),
    [n, r, i, a] = t;
  return n == null || r == null
    ? null
    : i === `blob` && t.length >= 5
      ? O(t[t.length - 1])
      : i === `pull` &&
          a != null &&
          t.length === 4 &&
          e.search.length === 0 &&
          e.hash.length === 0
        ? `${n}/${r}#${a}`
        : t.length === 2 && e.search.length === 0 && e.hash.length === 0
          ? `${n}/${r}`
          : null;
}
function C(e) {
  let t = T(e);
  return t == null ? null : D(t.replace(/-[a-f0-9]{32}$/iu, ``));
}
function w(e) {
  let t = T(e);
  return t == null ? null : D(t);
}
function T(e) {
  let t = E(e);
  return t[t.length - 1] ?? null;
}
function E(e) {
  return e.pathname.split(`/`).filter((e) => e.length > 0);
}
function D(e) {
  let t = O(e);
  if (t == null) return null;
  let n = t.replace(/[-_]+/gu, ` `).trim();
  return n.length === 0 ? null : n;
}
function O(e) {
  if (e == null) return null;
  let t;
  try {
    t = decodeURIComponent(e);
  } catch {
    return null;
  }
  return t.length === 0 ? null : t;
}
var k = /\[((?:\\.|[^\]])+)\]\(((?:\\.|[^)])+)\)/g,
  A =
    /\[((?:\\.|[^\]])+)\]\((?!(?:[A-Za-z][A-Za-z0-9+.-]*:\/\/|www\.|mailto:|tel:))(?:\\.|[^)])+\)/,
  j = /\[((?:\\.|[^\]])+)\]\(((?:https?:\/\/)(?:\\.|[^)])+)\)/g,
  M = /\[(?:\\.|[^\]])+\]\(codex-text-link:\/\/https?:\/\/(?:\\.|[^)])+\)/i,
  N = /^(?:[A-Za-z][A-Za-z0-9+.-]*:\/\/|www\.|mailto:|tel:)/;
function P(e) {
  return F(e) || M.test(e) || R(e);
}
function F(e) {
  return z(e) || A.test(e);
}
function I({ schema: e, text: t }) {
  let n = e.nodes.paragraph,
    r = e.nodes.doc;
  if (!n || !r) throw Error(`plainTextToDoc requires doc+paragraph nodes`);
  let i = t
    .split(
      `
`,
    )
    .map((t) => n.create(null, t === `` ? null : e.text(t)));
  return r.create(null, i.length ? i : [n.create()]);
}
function L(i, a) {
  let o = i.nodes.skillMention,
    p = i.nodes.appMention,
    m = i.nodes.pluginMention,
    h = i.nodes.atMention,
    g = i.nodes.agentMention,
    _ = i.nodes.resourceMention,
    y = i.nodes.richLink,
    x = [],
    S = 0,
    C = 0,
    w = (e) => {
      e <= C || x.push(i.text(a.slice(C, e)));
    };
  for (; S < a.length; ) {
    let T = a.indexOf(`[`, S);
    if (T === -1) break;
    let E = T + 1;
    for (; E < a.length; ) {
      let e = a[E],
        t = a[E + 1];
      if (e === `\\` && (t === `\\` || (t === `]` && a[E + 2] !== `(`))) {
        E += 2;
        continue;
      }
      if (e === `]`) break;
      E += 1;
    }
    if (E >= a.length) break;
    if (a[E + 1] !== `(`) {
      S = E + 1;
      continue;
    }
    let D = E + 2,
      O = ``,
      k = !1;
    for (; D < a.length; ) {
      let e = a[D];
      if (e === `\\`) {
        let e = a[D + 1];
        if (e) {
          ((O += `\\${e}`), (D += 2));
          continue;
        }
      }
      if (e === `)`) {
        k = !0;
        break;
      }
      ((O += e), (D += 1));
    }
    if (!k) break;
    let A = a.slice(T + 1, E),
      j = e(A),
      M = O.startsWith(t),
      P = n(M ? O.slice(t.length) : O),
      F = M ? v(P) : null;
    w(T);
    let I = f({ href: P, label: j }),
      L = b({ displayText: j, href: P }),
      R = l(j);
    if (m && I === `plugin`)
      x.push(
        m.create({
          name: R,
          displayName: R,
          path: P,
          description: ``,
          iconSmall: ``,
        }),
      );
    else if (I === `app` || I === `skill`) {
      let e = j.startsWith(`$`) ? R : j;
      I === `app` && p
        ? x.push(
            p.create({
              name: d(e),
              displayName: e,
              path: P,
              description: ``,
              iconSmall: ``,
            }),
          )
        : I === `skill` && o
          ? x.push(
              o.create({
                name: e,
                displayName: r(e),
                path: P,
                description: ``,
                iconSmall: ``,
              }),
            )
          : x.push(i.text(`[${A}](${O})`));
    } else if (I === `agent` && g) {
      let e = j.startsWith(`@`) ? j.slice(1) : j,
        t = s(P),
        n = c(P);
      t != null || n != null
        ? x.push(
            g.create({ name: e, displayName: e, conversationId: t, path: P }),
          )
        : x.push(i.text(`[${A}](${O})`));
    } else if (I === `mcp-resource` && _) {
      let e = u(P);
      e == null
        ? x.push(i.text(`[${A}](${O})`))
        : x.push(_.create({ ...e, title: j }));
    } else
      F != null && i.marks.link != null
        ? x.push(i.text(j, [i.marks.link.create({ href: F })]))
        : y && L != null
          ? x.push(y.create(L))
          : N.test(P)
            ? x.push(i.text(`[${A}](${O})`))
            : h
              ? x.push(h.create({ label: j, path: P, fsPath: P }))
              : x.push(i.text(`[${A}](${O})`));
    ((C = D + 1), (S = C));
  }
  return (w(a.length), x.length ? x : null);
}
function R(e) {
  for (let t of e.matchAll(j)) {
    let e = t[1],
      r = t[2];
    if (!(e == null || r == null) && b({ displayText: e, href: n(r) }) != null)
      return !0;
  }
  return !1;
}
function z(t) {
  for (let r of t.matchAll(k)) {
    let t = r[1],
      i = r[2];
    if (!(t == null || i == null) && f({ href: n(i), label: e(t) }) !== `text`)
      return !0;
  }
  return !1;
}
function B({ schema: e, text: t }) {
  let n = e.nodes.paragraph,
    r = e.nodes.doc;
  if (!n || !r) throw Error(`promptTextToDoc requires doc+paragraph nodes`);
  let i = t
    .split(
      `
`,
    )
    .map((t) => n.create(null, L(e, t)));
  return r.create(null, i.length ? i : [n.create()]);
}
export {
  v as a,
  _ as c,
  B as i,
  g as l,
  F as n,
  y as o,
  I as r,
  m as s,
  P as t,
  h as u,
};
//# sourceMappingURL=prompt-text-DuAhtLDu.js.map
