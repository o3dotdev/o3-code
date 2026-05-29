import { s as e } from "./chunk-Bj-mKKzh.js";
import "./src-C.js";
import { n as t, t as n } from "./jsx-runtime.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import {
  G as r,
  S as i,
  U as a,
  X as o,
  Z as s,
  _ as c,
  rt as l,
  w as u,
  wt as d,
} from "./setting-storage.js";
import { t as f } from "./product-logger-DusapRyT.js";
import { n as p } from "./rpc-DqwD0euc.js";
import { d as m } from "./statsig--EYRNU53.js";
import { t as h } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./window-zoom-context.js";
import "./tooltip-CDzchJxN.js";
import "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./proxy.js";
import { t as g } from "./use-platform.js";
import { n as _ } from "./electron-menu-shortcuts.js";
import { t as v } from "./check-md.js";
import "./chevron-right.js";
import "./links.js";
import "./search.js";
import { r as y, t as b } from "./dropdown-DtQxMoJw.js";
import "./chevron-NmAOI_v1.js";
import { t as x } from "./use-is-appshot-available-BuzGfUqU.js";
import { t as S } from "./appshot-logo-BVhiJxtp.js";
import { i as C, t as w } from "./settings-shared-BTHmEeQY.js";
import { t as T } from "./settings-content-layout.js";
import { n as E } from "./settings-row.js";
import { n as D, t as O } from "./settings-group.js";
var k = d(),
  A = `` + new URL(`appshot-demo.mp4`, import.meta.url).href,
  j = e(t(), 1),
  M = n(),
  N = [`appshot-hotkey-state`],
  P = l(i, () => ({
    queryKey: N,
    queryFn: async () => {
      let e = p.appshotHotkeys;
      return e == null
        ? { supported: !1, configuredHotkey: null, isActive: !1 }
        : e.getState();
    },
    staleTime: c.ONE_MINUTE,
  })),
  F = [
    { hotkey: `DoubleCommand`, label: `⌘ + ⌘` },
    { hotkey: `DoubleOption`, label: `⌥ + ⌥` },
    { hotkey: `DoubleShift`, label: `⇧ + ⇧` },
  ];
function I() {
  let e = (0, k.c)(42),
    t = o(i),
    n = x(),
    r = h(),
    [c, l] = (0, j.useState)(null),
    { data: d } = s(P),
    p;
  e[0] !== r || e[1] !== t
    ? ((p = {
        mutationFn: L,
        onSuccess: (e) => {
          (t.query.setData(P, e.state), r(N));
        },
      }),
      (e[0] = r),
      (e[1] = t),
      (e[2] = p))
    : (p = e[2]);
  let m = u(p);
  if (!n || d?.supported === !1) return null;
  let g;
  e[3] !== t || e[4] !== m
    ? ((g = async function (e, n) {
        l(null);
        try {
          let r = await m.mutateAsync({ hotkey: e });
          if (!r.success) {
            l(r.error);
            return;
          }
          f(t, {
            eventName: `codex_appshot_shortcut_changed`,
            metadata: { hotkey: e ?? void 0, enabled: e != null, source: n },
          });
        } catch (e) {
          let t = e;
          l(t instanceof Error ? t.message : String(t));
        }
      }),
      (e[3] = t),
      (e[4] = m),
      (e[5] = g))
    : (g = e[5]);
  let S = g,
    C = d?.configuredHotkey ?? null,
    T;
  e[6] === C
    ? (T = e[7])
    : ((T = F.find((e) => e.hotkey === C) ?? null), (e[6] = C), (e[7] = T));
  let D = T,
    O;
  e[8] !== C || e[9] !== D?.label
    ? ((O = D?.label ?? (C == null ? null : _(C))),
      (e[8] = C),
      (e[9] = D?.label),
      (e[10] = O))
    : (O = e[10]);
  let A = O,
    I = D?.hotkey ?? null,
    z;
  e[11] !== c || e[12] !== I
    ? ((z =
        I == null && c == null
          ? void 0
          : (0, M.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                I == null ? null : (0, M.jsx)(R, { hotkey: I }),
                c
                  ? (0, M.jsx)(`span`, {
                      className: `text-token-error-foreground`,
                      children: c,
                    })
                  : null,
              ],
            })),
      (e[11] = c),
      (e[12] = I),
      (e[13] = z))
    : (z = e[13]);
  let B = z,
    V;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, M.jsx)(a, {
        id: `settings.appshotHotkey.label`,
        defaultMessage: `Hotkey`,
        description: `Label for appshot hotkey setting`,
      })),
      (e[14] = V))
    : (V = e[14]);
  let H = m.isPending,
    U;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = { width: 80 }), (e[15] = U))
    : (U = e[15]);
  let W;
  e[16] === A
    ? (W = e[17])
    : ((W =
        A ??
        (0, M.jsx)(a, {
          id: `settings.appshotHotkey.none`,
          defaultMessage: `None`,
          description: `Label for disabling the appshot hotkey`,
        })),
      (e[16] = A),
      (e[17] = W));
  let G;
  e[18] !== m.isPending || e[19] !== W
    ? ((G = (0, M.jsx)(w, { disabled: m.isPending, style: U, children: W })),
      (e[18] = m.isPending),
      (e[19] = W),
      (e[20] = G))
    : (G = e[20]);
  let K;
  e[21] !== S || e[22] !== C || e[23] !== D?.hotkey
    ? ((K = F.map((e) =>
        (0, M.jsx)(
          y.Item,
          {
            RightIcon: e.hotkey === D?.hotkey ? v : void 0,
            onSelect: () => {
              (l(null), e.hotkey !== C && S(e.hotkey, `capture`));
            },
            children: e.label,
          },
          e.hotkey,
        ),
      )),
      (e[21] = S),
      (e[22] = C),
      (e[23] = D?.hotkey),
      (e[24] = K))
    : (K = e[24]);
  let q = C == null ? v : void 0,
    J;
  e[25] !== S || e[26] !== C
    ? ((J = () => {
        (l(null), C != null && S(null, `disable`));
      }),
      (e[25] = S),
      (e[26] = C),
      (e[27] = J))
    : (J = e[27]);
  let Y;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, M.jsx)(a, {
        id: `settings.appshotHotkey.none`,
        defaultMessage: `None`,
        description: `Label for disabling the appshot hotkey`,
      })),
      (e[28] = Y))
    : (Y = e[28]);
  let X;
  e[29] !== q || e[30] !== J
    ? ((X = (0, M.jsx)(y.Item, { RightIcon: q, onSelect: J, children: Y })),
      (e[29] = q),
      (e[30] = J),
      (e[31] = X))
    : (X = e[31]);
  let Z;
  e[32] !== K || e[33] !== X
    ? ((Z = (0, M.jsxs)(y.Section, { children: [K, X] })),
      (e[32] = K),
      (e[33] = X),
      (e[34] = Z))
    : (Z = e[34]);
  let Q;
  e[35] !== m.isPending || e[36] !== Z || e[37] !== G
    ? ((Q = (0, M.jsx)(b, {
        align: `end`,
        contentClassName: `min-w-20`,
        disabled: H,
        triggerButton: G,
        children: Z,
      })),
      (e[35] = m.isPending),
      (e[36] = Z),
      (e[37] = G),
      (e[38] = Q))
    : (Q = e[38]);
  let $;
  return (
    e[39] !== B || e[40] !== Q
      ? (($ = (0, M.jsx)(E, { label: V, description: B, control: Q })),
        (e[39] = B),
        (e[40] = Q),
        (e[41] = $))
      : ($ = e[41]),
    $
  );
}
async function L(e) {
  let { hotkey: t } = e,
    n = p.appshotHotkeys;
  if (n == null) throw Error(`Appshot hotkeys are unavailable`);
  return n.setHotkey(t);
}
function R(e) {
  let t = (0, k.c)(3),
    { hotkey: n } = e;
  switch (n) {
    case `DoubleCommand`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, M.jsx)(a, {
              id: `settings.appshotHotkey.description.command`,
              defaultMessage: `Press both ⌘ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Command keys`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `DoubleOption`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, M.jsx)(a, {
              id: `settings.appshotHotkey.description.option`,
              defaultMessage: `Press both ⌥ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Option keys`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `DoubleShift`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, M.jsx)(a, {
              id: `settings.appshotHotkey.description.shift`,
              defaultMessage: `Press both ⇧ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Shift keys`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function z() {
  let e = (0, k.c)(9),
    t = r(),
    n = x(),
    i = m(),
    { isLoading: o } = g();
  if (i || o || !n) return null;
  let s;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, M.jsx)(C, { slug: `appshots` })), (e[0] = s))
    : (s = e[0]);
  let c;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, M.jsx)(`img`, {
        alt: ``,
        "aria-hidden": !0,
        className: `h-[41.4px] w-[47.7px] shrink-0 object-contain`,
        src: S,
      })),
      (e[1] = c))
    : (c = e[1]);
  let l;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, M.jsx)(`div`, {
        className: `text-base leading-[16pt] font-medium text-token-text-primary`,
        children: (0, M.jsx)(a, {
          id: `settings.appshots.hero.title`,
          defaultMessage: `Take an appshot to show Codex your frontmost window`,
          description: `Title for the Appshots settings explainer`,
        }),
      })),
      (e[2] = l))
    : (l = e[2]);
  let u;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, M.jsx)(O, {
        children: (0, M.jsx)(O.Content, {
          children: (0, M.jsx)(D, {
            className: `divide-y-0`,
            children: (0, M.jsxs)(`div`, {
              className: `flex items-start gap-2 p-2`,
              children: [
                c,
                (0, M.jsxs)(`div`, {
                  className: `flex min-w-0 flex-col gap-[2.5pt]`,
                  children: [
                    l,
                    (0, M.jsx)(`div`, {
                      className: `text-sm text-token-text-secondary`,
                      children: (0, M.jsx)(a, {
                        id: `settings.appshots.hero.description`,
                        defaultMessage: `Appshots include visual and text content, including text scrolled offscreen.`,
                        description: `Description for the Appshots settings explainer`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      })),
      (e[3] = u))
    : (u = e[3]);
  let d;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, M.jsxs)(`div`, {
        className: `grid gap-4 self-start`,
        children: [
          u,
          (0, M.jsx)(O, {
            children: (0, M.jsx)(O.Content, {
              children: (0, M.jsx)(D, {
                variant: `secondary`,
                children: (0, M.jsx)(I, {}),
              }),
            }),
          }),
        ],
      })),
      (e[4] = d))
    : (d = e[4]);
  let f;
  e[5] === t
    ? (f = e[6])
    : ((f = t.formatMessage({
        id: `settings.appshots.demoVideo.label`,
        defaultMessage: `Appshots walkthrough video`,
        description: `Accessible label for the Appshots settings walkthrough video`,
      })),
      (e[5] = t),
      (e[6] = f));
  let p;
  return (
    e[7] === f
      ? (p = e[8])
      : ((p = (0, M.jsx)(T, {
          title: s,
          children: (0, M.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: [
              d,
              (0, M.jsx)(O, {
                className: `w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch`,
                children: (0, M.jsx)(O.Content, {
                  children: (0, M.jsx)(D, {
                    className: `divide-y-0 overflow-hidden rounded-none border-0`,
                    children: (0, M.jsx)(`video`, {
                      "aria-label": f,
                      autoPlay: !0,
                      className: `aspect-[901/1095] w-full bg-token-bg-secondary object-cover`,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      preload: `auto`,
                      src: A,
                    }),
                  }),
                }),
              }),
            ],
          }),
        })),
        (e[7] = f),
        (e[8] = p)),
    p
  );
}
export { z as AppshotsSettings };
//# sourceMappingURL=appshots-settings.js.map
