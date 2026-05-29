import "./src-C.js";
import { t as e } from "./jsx-runtime.js";
import {
  S as t,
  U as n,
  Z as r,
  _ as i,
  f as a,
  wt as o,
} from "./setting-storage.js";
import { f as s, m as c } from "./chunk-LFPYN7LY.js";
import { t as l } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import { t as u } from "./arrow-left.js";
import { t as d } from "./settings-content-layout.js";
import { n as f, t as p } from "./settings-group.js";
var m = o(),
  h = e(),
  g = a(t, `third-party-notices`, { enabled: !0, staleTime: i.ONE_MINUTE });
function _() {
  let e = (0, m.c)(18),
    t = c(),
    i = s(),
    a;
  e[0] === i.state
    ? (a = e[1])
    : ((a = v(i.state)), (e[0] = i.state), (e[1] = a));
  let o = a,
    _ =
      i.state != null && typeof i.state == `object` && !Array.isArray(i.state)
        ? i.state
        : null,
    { data: y, isLoading: b } = r(g),
    x;
  e[2] !== o || e[3] !== _ || e[4] !== t
    ? ((x = () => {
        t(o, { replace: !0, state: _ });
      }),
      (e[2] = o),
      (e[3] = _),
      (e[4] = t),
      (e[5] = x))
    : (x = e[5]);
  let S, C;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, h.jsx)(u, { className: `icon-xs` })),
      (C = (0, h.jsx)(n, {
        id: `settings.openSourceLicenses.back`,
        defaultMessage: `Back`,
        description: `Button label to go back to the main settings page`,
      })),
      (e[6] = S),
      (e[7] = C))
    : ((S = e[6]), (C = e[7]));
  let w;
  e[8] === x
    ? (w = e[9])
    : ((w = (0, h.jsxs)(l, {
        color: `ghost`,
        size: `toolbar`,
        onClick: x,
        children: [S, C],
      })),
      (e[8] = x),
      (e[9] = w));
  let T, E;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, h.jsx)(n, {
        id: `settings.openSourceLicenses.title`,
        defaultMessage: `Open source licenses`,
        description: `Title for the open source licenses settings page`,
      })),
      (E = (0, h.jsx)(n, {
        id: `settings.openSourceLicenses.subtitle`,
        defaultMessage: `Third-party notices for dependencies included in this app`,
        description: `Subtitle for the open source licenses settings page`,
      })),
      (e[10] = T),
      (e[11] = E))
    : ((T = e[10]), (E = e[11]));
  let D;
  e[12] !== y || e[13] !== b
    ? ((D = (0, h.jsx)(p, {
        children: (0, h.jsx)(p.Content, {
          children: (0, h.jsx)(f, {
            children: b
              ? (0, h.jsx)(`div`, {
                  className: `text-sm text-token-text-secondary`,
                  children: (0, h.jsx)(n, {
                    id: `settings.openSourceLicenses.loading`,
                    defaultMessage: `Loading…`,
                    description: `Loading label while fetching third-party notices`,
                  }),
                })
              : y?.text
                ? (0, h.jsx)(`pre`, {
                    className: `bg-token-surface-secondary rounded p-3 text-xs leading-relaxed break-words whitespace-pre-wrap text-token-text-primary`,
                    children: y.text,
                  })
                : (0, h.jsx)(`div`, {
                    className: `text-sm text-token-text-secondary`,
                    children: (0, h.jsx)(n, {
                      id: `settings.openSourceLicenses.missing`,
                      defaultMessage: `No third-party notices were found.`,
                      description: `Message shown when the third-party notices file is missing`,
                    }),
                  }),
          }),
        }),
      })),
      (e[12] = y),
      (e[13] = b),
      (e[14] = D))
    : (D = e[14]);
  let O;
  return (
    e[15] !== w || e[16] !== D
      ? ((O = (0, h.jsx)(d, {
          backSlot: w,
          title: T,
          subtitle: E,
          children: D,
        })),
        (e[15] = w),
        (e[16] = D),
        (e[17] = O))
      : (O = e[17]),
    O
  );
}
function v(e) {
  if (
    typeof e == `object` &&
    e &&
    !Array.isArray(e) &&
    `licensesBackPath` in e
  ) {
    let t = e.licensesBackPath;
    if (typeof t == `string` && t.startsWith(`/settings/`)) return t;
  }
  return `/settings/general`;
}
export { _ as OpenSourceLicensesPage };
//# sourceMappingURL=open-source-licenses-page-BhopKaJB.js.map
