const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./docx-preview.js", "./chunk.js"]),
) => i.map((i) => d[i]);
import { s as e } from "./chunk.js";
import "./src-BLHmAhbF.js";
import "./app-server-manager-signals.js";
import { t } from "./preload-helper.js";
import { n, t as r } from "./jsx-runtime.js";
import "./react-dom.js";
import "./Combination.js";
import "./marked.esm.js";
import { xt as i } from "./setting-storage.js";
import "./product-logger.js";
import "./statsig.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import "./use-auth.js";
import "./use-is-dark.js";
import "./connector-logo.js";
import "./toast-signal.js";
import "./window-zoom-context.js";
import "./tooltip.js";
import "./route-scope.js";
import "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./proxy.js";
import "./x.js";
import "./plugin-install-store.js";
import "./use-platform.js";
import "./experimental-features-queries.js";
import "./use-is-plugins-enabled.js";
import "./use-plugins.js";
import "./apps-queries.js";
import "./startCase.js";
import "./uniq.js";
import "./check-circle-filled.js";
import "./download.js";
import "./with-window.js";
import "./window-app-action-helpers.js";
import "./plugin-config-edits.js";
import "./dialog-layout.js";
import "./run-command.js";
import "./use-stable-callback.js";
import "./use-skills.js";
import "./modal-controller-state-.js";
import "./open-project-setup-dialog.js";
import { n as a } from "./use-resize-observer.js";
import "./check-md.js";
import "./chevron-right.js";
import { t as o } from "./use-merged-ref.js";
import "./search.js";
import "./dropdown.js";
import "./chevron.js";
import "./openai-blossom.js";
import "./plugin-detail-queries.js";
import "./toggle.js";
import "./bundled-plugin-auto-install-preference.js";
import "./app-connect-oauth.js";
import "./codex-api-error.js";
import "./hooks-settings-queries.js";
import { r as s } from "./right-panel-composer-overlay-scroll-reserve.js";
import "./codex-analytics-attribution.js";
import "./use-target-apps.js";
import "./compound-button.js";
import "./arrow-top-right.js";
import "./open-in-google-drive-menu-item.js";
import "./app-connect-modal.js";
import "./plugin-detail-route-utils.js";
import "./plugins-availability.js";
import {
  a as c,
  c as l,
  d as u,
  i as d,
  l as f,
  n as p,
  o as m,
  r as h,
  s as g,
  t as _,
  u as v,
} from "./artifact-preview-status.js";
import { t as y } from "./artifact-preview-page-navigation.js";
var b = i(),
  x = e(n(), 1),
  S = r(),
  C = `codex-docx-preview`,
  w = `h-full min-h-0 overflow-auto bg-token-side-bar-background overscroll-contain`,
  T = `
  .${C}-wrapper {
    min-height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 0.875rem;
    padding: 1.5rem 1.5rem ${s};
    background: var(--color-token-side-bar-background) !important;
  }

  .${C}-wrapper > section.${C} {
    margin: 0 !important;
    border: 1px solid var(--color-token-border-default);
    background: white !important;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    transform-origin: top center;
    border-radius: 0;
    zoom: var(--codex-docx-preview-zoom, 1);
  }
`,
  E = 75,
  D = `section.${C}`,
  O = t(
    async () => {
      let { renderAsync: e } = await import(`./docx-preview.js`);
      return { renderAsync: e };
    },
    __vite__mapDeps([0, 1]),
    import.meta.url,
  ).then(
    ({ renderAsync: e }) => e,
    () => null,
  );
function k(e) {
  let t = (0, b.c)(41),
    { bytes: n, hostId: r, path: i, title: a } = e,
    s = (0, x.use)(O),
    l;
  t[0] !== n || t[1] !== s
    ? ((l = { bytes: n, renderAsync: s }), (t[0] = n), (t[1] = s), (t[2] = l))
    : (l = t[2]);
  let {
      bodyContainerElementRef: u,
      bodyContainerRef: f,
      loadState: v,
      styleContainerRef: C,
      totalPages: T,
    } = A(l),
    {
      handleTouchCancel: E,
      handleTouchEnd: k,
      handleTouchMove: M,
      handleTouchStart: N,
      handleWheel: F,
      fitToWidth: I,
      isZoomToFitSelected: L,
      previewStyle: R,
      resizeRef: z,
      setZoomPercent: B,
      zoomPercent: V,
    } = j(u),
    H;
  t[3] !== u || t[4] !== T
    ? ((H = { containerRef: u, pageSelector: D, totalPages: T }),
      (t[3] = u),
      (t[4] = T),
      (t[5] = H))
    : (H = t[5]);
  let { currentPage: U, goToNextPage: W, goToPreviousPage: G } = y(H),
    K = v === `ready`,
    q;
  t[6] === C
    ? (q = t[7])
    : ((q = (0, S.jsx)(`div`, {
        ref: C,
        "aria-hidden": !0,
        className: `hidden`,
      })),
      (t[6] = C),
      (t[7] = q));
  let J;
  t[8] !== U ||
  t[9] !== I ||
  t[10] !== W ||
  t[11] !== G ||
  t[12] !== r ||
  t[13] !== K ||
  t[14] !== L ||
  t[15] !== i ||
  t[16] !== B ||
  t[17] !== a ||
  t[18] !== T ||
  t[19] !== V
    ? ((J = K
        ? (0, S.jsx)(h, {
            artifactType: `DOC`,
            title: P(a),
            centerContent: (0, S.jsx)(c, {
              currentPage: U,
              onNextPage: W,
              onPreviousPage: G,
              totalPages: T,
            }),
            rightContent: (0, S.jsxs)(`div`, {
              className: `flex items-center gap-1`,
              children: [
                (0, S.jsx)(m, {
                  triggerTestId: `docx-preview-zoom-trigger`,
                  zoomPercent: V,
                  zoomOptions: g,
                  onZoomPercentChange: B,
                  fitOption: { selected: L, onSelect: I },
                }),
                (0, S.jsx)(p, { hostId: r, path: i }),
                (0, S.jsx)(d, { hostId: r, path: i }),
              ],
            }),
          })
        : null),
      (t[8] = U),
      (t[9] = I),
      (t[10] = W),
      (t[11] = G),
      (t[12] = r),
      (t[13] = K),
      (t[14] = L),
      (t[15] = i),
      (t[16] = B),
      (t[17] = a),
      (t[18] = T),
      (t[19] = V),
      (t[20] = J))
    : (J = t[20]);
  let Y;
  t[21] !== f || t[22] !== z
    ? ((Y = o(f, z)), (t[21] = f), (t[22] = z), (t[23] = Y))
    : (Y = t[23]);
  let X = K ? w : `hidden`,
    Z;
  t[24] !== E ||
  t[25] !== k ||
  t[26] !== M ||
  t[27] !== N ||
  t[28] !== F ||
  t[29] !== R ||
  t[30] !== Y ||
  t[31] !== X ||
  t[32] !== a
    ? ((Z = (0, S.jsx)(`div`, {
        ref: Y,
        "aria-label": a,
        className: X,
        "data-testid": `docx-preview-panel`,
        onTouchCancel: E,
        onTouchEnd: k,
        onTouchMove: M,
        onTouchStart: N,
        onWheel: F,
        style: R,
      })),
      (t[24] = E),
      (t[25] = k),
      (t[26] = M),
      (t[27] = N),
      (t[28] = F),
      (t[29] = R),
      (t[30] = Y),
      (t[31] = X),
      (t[32] = a),
      (t[33] = Z))
    : (Z = t[33]);
  let Q;
  t[34] === v ? (Q = t[35]) : ((Q = _(v)), (t[34] = v), (t[35] = Q));
  let $;
  return (
    t[36] !== q || t[37] !== J || t[38] !== Z || t[39] !== Q
      ? (($ = (0, S.jsxs)(`section`, {
          className: `flex h-full min-h-0 flex-col bg-token-side-bar-background`,
          children: [q, J, Z, Q],
        })),
        (t[36] = q),
        (t[37] = J),
        (t[38] = Z),
        (t[39] = Q),
        (t[40] = $))
      : ($ = t[40]),
    $
  );
}
function A(e) {
  let t = (0, b.c)(14),
    { bytes: n, renderAsync: r } = e,
    i = (0, x.useRef)(null),
    a = (0, x.useRef)(null),
    o = (0, x.useRef)(0),
    s = (0, x.useRef)(!1),
    [c, l] = (0, x.useState)(r == null ? `error` : `loading`),
    [u, d] = (0, x.useState)(0),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () => {
        let e = i.current,
          t = a.current;
        e == null ||
          t == null ||
          (N({ bodyContainer: e, styleContainer: t }), d(0));
      }),
      (t[0] = f))
    : (f = t[0]);
  let p = f,
    m;
  t[1] !== n || t[2] !== r
    ? ((m = () => {
        let e = i.current,
          t = a.current;
        if (e == null || t == null || s.current) return;
        if (((s.current = !0), p(), r == null)) {
          l(`error`);
          return;
        }
        let c = o.current + 1;
        ((o.current = c),
          l(`loading`),
          M({
            bytes: n,
            bodyContainer: e,
            renderAsync: r,
            styleContainer: t,
          }).then((n) => {
            if (o.current === c) {
              if (!n) {
                (N({ bodyContainer: e, styleContainer: t }), l(`error`));
                return;
              }
              (d(Math.max(I(e), 1)), l(`ready`));
            }
          }));
      }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = m))
    : (m = t[3]);
  let h = m,
    g;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => {
        ((o.current += 1), (s.current = !1), p());
      }),
      (t[4] = g))
    : (g = t[4]);
  let _ = g,
    v;
  t[5] === h
    ? (v = t[6])
    : ((v = (e) => {
        if (e == null) {
          (_(), (i.current = null));
          return;
        }
        ((i.current = e), h());
      }),
      (t[5] = h),
      (t[6] = v));
  let y = v,
    S;
  t[7] === h
    ? (S = t[8])
    : ((S = (e) => {
        if (e == null) {
          (_(), (a.current = null));
          return;
        }
        ((a.current = e), h());
      }),
      (t[7] = h),
      (t[8] = S));
  let C = S,
    w;
  return (
    t[9] !== c || t[10] !== y || t[11] !== C || t[12] !== u
      ? ((w = {
          bodyContainerElementRef: i,
          bodyContainerRef: y,
          loadState: c,
          styleContainerRef: C,
          totalPages: u,
        }),
        (t[9] = c),
        (t[10] = y),
        (t[11] = C),
        (t[12] = u),
        (t[13] = w))
      : (w = t[13]),
    w
  );
}
function j(e) {
  let t = (0, x.useRef)(null),
    [n, r] = (0, x.useState)(null),
    [i, o] = (0, x.useState)({ kind: `percentage`, zoomPercent: E }),
    s =
      i.kind === `fit-width`
        ? (F({
            bodyContainer: e.current,
            bodyContainerWidth: n,
            zoomPercent: E,
          }) ?? E)
        : i.zoomPercent,
    c = a((e) => {
      let t = Math.floor(e.contentRect.width);
      r((e) => (e === t ? e : t));
    }),
    d = () => {
      t.current = null;
    },
    p = (e) => {
      o({ kind: `percentage`, zoomPercent: l(e) });
    };
  return {
    fitToWidth: () => {
      F({ bodyContainer: e.current, bodyContainerWidth: n, zoomPercent: s }) !=
        null && o({ kind: `fit-width` });
    },
    handleTouchCancel: d,
    handleTouchEnd: d,
    handleTouchMove: (e) => {
      let n = t.current;
      if (e.touches.length !== 2 || n == null) return;
      e.preventDefault();
      let r = u(
        e.touches[0].clientX,
        e.touches[0].clientY,
        e.touches[1].clientX,
        e.touches[1].clientY,
      );
      r <= 0 ||
        n.distance <= 0 ||
        o({
          kind: `percentage`,
          zoomPercent: f({
            initialDistance: n.distance,
            initialZoomPercent: n.zoomPercent,
            nextDistance: r,
          }),
        });
    },
    handleTouchStart: (e) => {
      if (e.touches.length !== 2) {
        d();
        return;
      }
      (e.preventDefault(),
        (t.current = {
          distance: u(
            e.touches[0].clientX,
            e.touches[0].clientY,
            e.touches[1].clientX,
            e.touches[1].clientY,
          ),
          zoomPercent: s,
        }));
    },
    handleWheel: (e) => {
      e.ctrlKey &&
        (e.preventDefault(),
        o((t) => ({
          kind: `percentage`,
          zoomPercent: v(t.kind === `percentage` ? t.zoomPercent : s, e.deltaY),
        })));
    },
    isZoomToFitSelected: i.kind === `fit-width`,
    previewStyle: { "--codex-docx-preview-zoom": `${s / 100}` },
    resizeRef: c,
    setZoomPercent: p,
    zoomPercent: s,
  };
}
async function M({
  bytes: e,
  bodyContainer: t,
  renderAsync: n,
  styleContainer: r,
}) {
  try {
    return (
      await n(e, t, r, { className: C, renderAltChunks: !1, useBase64URL: !0 }),
      L(r),
      !0
    );
  } catch {
    return !1;
  }
}
function N({ bodyContainer: e, styleContainer: t }) {
  (e.replaceChildren(), t.replaceChildren());
}
function P(e) {
  return e.replace(/\.docx$/i, ``);
}
function F({ bodyContainer: e, bodyContainerWidth: t, zoomPercent: n }) {
  if (e == null) return null;
  let r = e.querySelector(D);
  if (r == null) return null;
  let i = r.parentElement ?? e,
    a = window.getComputedStyle(i),
    o = Number.parseFloat(a.paddingLeft) + Number.parseFloat(a.paddingRight),
    s = Math.max(
      1,
      ((t ?? i.clientWidth) || e.clientWidth) - (Number.isFinite(o) ? o : 0),
    ),
    c = Number.parseFloat(window.getComputedStyle(r).width),
    u =
      c > 0 ? c : r.getBoundingClientRect().width / Math.max(n / 100, 2 ** -52);
  return !Number.isFinite(u) || u <= 0 ? null : l(Math.round((s / u) * 100));
}
function I(e) {
  return e.querySelectorAll(D).length;
}
function L(e) {
  let t = document.createElement(`style`);
  ((t.textContent = T), e.appendChild(t));
}
export { k as DocxPreviewPanel };
//# sourceMappingURL=docx-preview-panel.js.map
