const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./preview.js",
      "./chunk.js",
      "./preload-helper.js",
      "./setting-storage.js",
      "./src-BLHmAhbF.js",
      "./jsx-runtime.js",
      "./tslib.es6.js",
      "./Combination.js",
      "./dist-BzssiQ2D.js",
      "./react-dom.js",
      "./dropdown.js",
      "./dist-PjNkCZD1.js",
      "./dist-Dc9hCHPN.js",
      "./floating-ui.react-dom.js",
      "./dist-E04PTHvu.js",
      "./clsx.js",
      "./proxy.js",
      "./single-value.js",
      "./AnimatePresence.js",
      "./window-zoom-context.js",
      "./tooltip.js",
      "./tooltip-dismiss.js",
      "./chevron-right.js",
      "./search.js",
      "./animations.js",
      "./dropdown.css",
      "./button.js",
      "./spinner.js",
      "./reduced-motion-preference.js",
      "./rich-preview-primitives.js",
      "./check-md.js",
      "./chevron.js",
      "./use-resize-observer.js",
      "./get-resize-observer-entry-size.js",
      "./use-stable-callback.js",
    ]),
) => i.map((i) => d[i]);
import { s as e } from "./chunk.js";
import { di as t, gi as n, ui as r } from "./src-BLHmAhbF.js";
import { t as i } from "./preload-helper.js";
import { n as a, t as o } from "./jsx-runtime.js";
import "./react-dom.js";
import { H as s, xt as c } from "./setting-storage.js";
import { u as l } from "./chunk-LFPYN7LY.js";
import "./use-is-dark.js";
import "./window-zoom-context.js";
import "./tooltip.js";
import "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import { t as u } from "./mime-types.js";
import { t as d } from "./file-kind.js";
import "./check-md.js";
import { t as f } from "./code-snippet.js";
import "./tailwind-styled-components.esm.js";
import "./copy.js";
import "./copy-button.js";
var p = c(),
  m = e(u(), 1),
  h = e(a(), 1),
  g = o(),
  _ = (0, h.lazy)(async () => ({
    default: (
      await i(
        async () => {
          let { PdbPreview: e } = await import(`./preview.js`);
          return { PdbPreview: e };
        },
        __vite__mapDeps([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
        ]),
        import.meta.url,
      )
    ).PdbPreview,
  })),
  v = t({
    filePath: n(),
    contents: n(),
    line: r().optional(),
    column: r().optional(),
  });
function y(e) {
  return v.safeParse(e).success;
}
function b() {
  let e = (0, p.c)(13),
    t = l(),
    n;
  e[0] === t.state
    ? (n = e[1])
    : ((n = y(t.state) ? t.state : null), (e[0] = t.state), (e[1] = n));
  let r = n;
  if (!r) {
    let t;
    return (
      e[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, g.jsx)(`div`, { className: `h-full` })), (e[2] = t))
        : (t = e[2]),
      t
    );
  }
  if ((0, m.lookup)(r.filePath) === `application/pdf`) {
    let t;
    return (
      e[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, g.jsx)(`div`, {
            className: `flex h-full items-center justify-center text-token-text-tertiary`,
            children: (0, g.jsx)(s, {
              id: `wham.diff.binaryFile`,
              defaultMessage: `Binary file not shown`,
              description: `Text shown when a binary file is not shown.`,
            }),
          })),
          (e[3] = t))
        : (t = e[3]),
      t
    );
  }
  let i;
  if (e[4] !== r.contents) {
    let t;
    (e[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = /\r\n/g), (e[6] = t))
      : (t = e[6]),
      (i = r.contents.replace(
        t,
        `
`,
      )),
      (e[4] = r.contents),
      (e[5] = i));
  } else i = e[5];
  let a = i;
  if (d(r.filePath)) {
    let t;
    e[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, g.jsx)(`div`, {
          className: `h-full bg-token-main-surface-primary`,
        })),
        (e[7] = t))
      : (t = e[7]);
    let n;
    return (
      e[8] !== a || e[9] !== r.filePath
        ? ((n = (0, g.jsx)(h.Suspense, {
            fallback: t,
            children: (0, g.jsx)(_, { contents: a, filePath: r.filePath }),
          })),
          (e[8] = a),
          (e[9] = r.filePath),
          (e[10] = n))
        : (n = e[10]),
      n
    );
  }
  let o;
  return (
    e[11] === a
      ? (o = e[12])
      : ((o = (0, g.jsx)(`div`, {
          className: `h-full overflow-auto`,
          children: (0, g.jsx)(f, {
            content: a,
            shouldWrapCode: !0,
            showActionBar: !1,
            wrapperClassName: `border-0 shadow-none rounded-none`,
            codeContainerClassName: `p-panel overflow-visible`,
            codeClassName: `block`,
          }),
        })),
        (e[11] = a),
        (e[12] = o)),
    o
  );
}
export { b as FilePreviewPage };
//# sourceMappingURL=file-preview-page.js.map
