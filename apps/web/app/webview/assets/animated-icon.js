const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./browser-CYHoRP3s.js",
      "./chunk-Bj-mKKzh.js",
      "./jsx-runtime.js",
    ]),
) => i.map((i) => d[i]);
import { s as e } from "./chunk-Bj-mKKzh.js";
import { t } from "./preload-helper.js";
import { n, t as r } from "./jsx-runtime.js";
import { t as i } from "./clsx-BcPLHiun.js";
import { wt as a } from "./setting-storage.js";
import { r as ee } from "./spinner.js";
import { t as o } from "./terminal.js";
import { t as s } from "./homepage-logo.js";
import { t as c } from "./clock-BflmlnpZ.js";
import { t as l } from "./search.js";
import { t as u } from "./globe-CnvlclXd.js";
import { t as te } from "./image-square-CGEtcnWp.js";
import { t as d } from "./codex-BjFeJtxQ.js";
import { t as f } from "./tasks-DNCFvQEW.js";
var p = e(n()),
  m = r(),
  h = (e) =>
    (0, m.jsxs)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `currentColor`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, m.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M3.74709 9.4286C4.09594 9.54326 4.47122 9.35358 4.58596 9.00478C5.08292 7.49281 6.19702 6.25947 7.62893 5.60243C8.06385 6.47457 8.96218 7.07502 10.003 7.07509C11.4688 7.07509 12.6572 5.88666 12.6572 4.42079C12.6572 2.9549 11.4688 1.76649 10.003 1.76649C8.58666 1.76659 7.43205 2.87614 7.35549 4.27333C5.45427 5.04691 3.9686 6.62635 3.32326 8.58974C3.20868 8.9386 3.39823 9.31394 3.74709 9.4286ZM11.3272 4.42079C11.3272 3.68944 10.7343 3.09657 10.003 3.09657C9.27168 3.09667 8.67873 3.6895 8.67873 4.42079C8.67875 5.15207 9.2717 5.74491 10.003 5.74501C10.7343 5.74501 11.3272 5.15213 11.3272 4.42079Z`,
        }),
        (0, m.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M14.4619 7.23427C15.2394 8.2087 15.7041 9.4424 15.7041 10.786C15.7041 10.9669 15.6951 11.1459 15.6787 11.3222C14.7046 11.2611 13.734 11.7399 13.2129 12.6425C12.4802 13.9118 12.9144 15.5346 14.1836 16.2675C15.453 17.0003 17.0767 16.5651 17.8096 15.2958C18.5164 14.0711 18.1344 12.5197 16.9668 11.7538C17.0104 11.4372 17.0332 11.114 17.0332 10.786C17.0332 9.13002 16.4602 7.6065 15.502 6.40517L15.3057 6.16982L15.2071 6.07704C14.9612 5.8895 14.6094 5.89431 14.3672 6.10536C14.1251 6.31651 14.0723 6.66436 14.2246 6.93349L14.3028 7.04286L14.4619 7.23427ZM16.1729 12.8222C15.5397 12.4566 14.7299 12.6743 14.3643 13.3075C13.999 13.9406 14.2158 14.7495 14.8487 15.1151C15.4819 15.4807 16.2917 15.264 16.6572 14.6308C17.0227 13.9976 16.806 13.1877 16.1729 12.8222Z`,
        }),
        (0, m.jsx)(`path`, {
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          d: `M6.78713 12.6425C6.05428 11.3731 4.43147 10.9379 3.16213 11.6708C1.89304 12.4036 1.45791 14.0266 2.19045 15.2958C2.89893 16.5229 4.438 16.9667 5.68654 16.3329C6.87794 17.2613 8.37572 17.8172 10.003 17.8173C10.4526 17.8173 10.8932 17.7743 11.3203 17.6933C11.6812 17.6248 11.9181 17.2767 11.8496 16.9159C11.781 16.5553 11.433 16.3182 11.0723 16.3866C10.7265 16.4522 10.3689 16.4872 10.003 16.4872C8.77108 16.4872 7.63223 16.0956 6.70022 15.4315C7.23668 14.6191 7.30697 13.5429 6.78713 12.6425ZM5.63576 13.3075C5.27019 12.6743 4.46037 12.4566 3.82717 12.8222C3.19401 13.1877 2.97733 13.9976 3.3428 14.6308C3.70838 15.264 4.51818 15.4807 5.15139 15.1151C5.78423 14.7495 6.00103 13.9406 5.63576 13.3075Z`,
        }),
      ],
    }),
  g = {
    "analyze-image": () =>
      t(
        () =>
          import(`./analyze_image_animation-DjHoKfYb.js`).then(
            (e) => e.default,
          ),
        [],
        import.meta.url,
      ),
    automation: () =>
      t(
        () => import(`./automation-c8nR7h8B.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    browsing: () =>
      t(
        () => import(`./browsing_animation-CuBskQUu.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "code-searching": () =>
      t(
        () => import(`./code-searching-icon.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "codex-happy-small": () =>
      t(
        () => import(`./codex-happy-small.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "codex-looking-around": () =>
      t(
        () =>
          import(`./codex-looking-around-DShyP-tZ.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "edit-files": () =>
      t(
        () =>
          import(`./edit_files_animation-BjKNEiRL.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    hello: () =>
      t(() => import(`./hello.js`).then((e) => e.default), [], import.meta.url),
    loader: () =>
      t(
        () => import(`./loader.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "internal-knowledge": () =>
      t(
        () => import(`./internal-knowledge-icon.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "list-files": () =>
      t(
        () => import(`./list_files_animation.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "local-context": () =>
      t(
        () => import(`./local_context_animation.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "run-command": () =>
      t(
        () =>
          import(`./run_command_animation-CzxDwXGE.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    searching: () =>
      t(
        () => import(`./searching_animation.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "to-do": () =>
      t(
        () => import(`./to_do_animation-Dp-mkkO5.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
    "web-search": () =>
      t(
        () => import(`./web-search-icon.js`).then((e) => e.default),
        [],
        import.meta.url,
      ),
  },
  _ = {
    "analyze-image": te,
    automation: c,
    browsing: u,
    "code-searching": o,
    "codex-happy-small": d,
    "codex-looking-around": d,
    "edit-files": o,
    hello: s,
    loader: d,
    "internal-knowledge": h,
    "list-files": o,
    "local-context": l,
    "run-command": o,
    searching: l,
    "to-do": f,
    "web-search": u,
  };
function ne({ animation: e, animationData: t, fallback: n }) {
  let r = {
    animationJson: t ? Promise.resolve(t) : null,
    SvgFallback: n || null,
  };
  return (e && ((r.animationJson = g[e]()), (r.SvgFallback = _[e])), r);
}
var re = a(),
  v = t(
    () =>
      import(`./browser-CYHoRP3s.js`).then(
        (e) => (
          e.setWasmUrl(
            `https://cdn.openai.com/common/wasm/dotlottie-player-017-13.wasm`,
          ),
          e.DotLottieWorkerReact
        ),
      ),
    __vite__mapDeps([0, 1, 2]),
    import.meta.url,
  ),
  ie = {
    fill: `h-full w-full`,
    xs: `w-3 h-3`,
    sm: `w-4 h-4`,
    md: `w-5 h-5`,
    lg: `w-6 h-6`,
  },
  ae = {
    fill: `h-full w-full`,
    xs: `w-3 h-3`,
    sm: `w-4 h-4`,
    md: `w-6 h-6`,
    lg: `w-8 h-8`,
  };
function oe(e) {
  let t = getComputedStyle(e)
    .color?.match(/\d+/g)
    ?.map(Number)
    .map((e) => e / 255);
  return t ? (t.push(1), t) : null;
}
var y = new Map(),
  b = new Set(),
  x = null;
function se(e, t) {
  let n = `${e}:${t}`,
    r = y.get(n);
  if (r !== void 0) return r;
  let i = document.createElement(`div`);
  switch (e) {
    case `color`:
      i.style.color = t;
      break;
    case `tokenColor`:
      i.className = t;
      break;
  }
  document.body.appendChild(i);
  let a = oe(i);
  return (i.remove(), y.set(n, a), a);
}
function ce(e) {
  return (
    b.add(e),
    x ||
      ((x = new MutationObserver(() => {
        (y.clear(),
          b.forEach((e) => {
            e();
          }));
      })),
      x.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: [`class`, `style`],
      })),
    e(),
    () => {
      (b.delete(e), b.size === 0 && (x?.disconnect(), (x = null), y.clear()));
    }
  );
}
function le({ animationData: e, color: t }) {
  if (!t) return { size: { width: 100, height: 100 }, data: e };
  let n = structuredClone(e),
    r =
      n?.w && n?.h ? { width: n.w, height: n.h } : { width: 100, height: 100 },
    i = (e) => {
      ((e.ty === `fl` || e.ty === `st`) && e?.c?.k && (e.c.k = t),
        Array.isArray(e.it) && e.it.forEach(i));
    },
    a = (e) => {
      (e.ty === 4 && Array.isArray(e.shapes) && e.shapes.forEach(i),
        Array.isArray(e.layers) && e.layers.forEach(a));
    };
  return (
    a(n),
    Array.isArray(n.assets) && n.assets.forEach(a),
    { size: r, data: n }
  );
}
function ue(e) {
  let t = (0, re.c)(68),
    {
      animation: n,
      animationData: r,
      fallbackSvg: a,
      animated: o,
      size: s,
      color: c,
      tokenColor: l,
      matchTextColor: u,
      loop: te,
      showFallbackWhileLoading: d,
      className: f,
    } = e,
    h = o === void 0 ? !0 : o,
    g = s === void 0 ? `md` : s,
    _ = u === void 0 ? !0 : u,
    v = te === void 0 ? !0 : te,
    y = d === void 0 ? !0 : d,
    b = (0, p.useRef)(null),
    [x, ue] = (0, p.useState)(null),
    S;
  t[0] !== n || t[1] !== r || t[2] !== a
    ? ((S = ne({ animation: n, animationData: r, fallback: a })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = S))
    : (S = t[3]);
  let { SvgFallback: fe, animationJson: C } = S,
    [w, pe] = (0, p.useState)(null),
    [T, me] = (0, p.useState)(null),
    E = ee(),
    D = typeof g == `number` ? `` : ie[g],
    O;
  t[4] === g
    ? (O = t[5])
    : ((O = typeof g == `number` ? { width: g, height: g } : {}),
      (t[4] = g),
      (t[5] = O));
  let k = O,
    A = typeof g == `number` ? `` : ae[g],
    j;
  t[6] !== g || t[7] !== k
    ? ((j = typeof g == `number` ? k : {}), (t[6] = g), (t[7] = k), (t[8] = j))
    : (j = t[8]);
  let M = j,
    N;
  t[9] !== f || t[10] !== A || t[11] !== l
    ? ((N = i(A, f, l, `flex items-center justify-center`)),
      (t[9] = f),
      (t[10] = A),
      (t[11] = l),
      (t[12] = N))
    : (N = t[12]);
  let P = N,
    F,
    I;
  (t[13] === C
    ? ((F = t[14]), (I = t[15]))
    : ((F = () => {
        let e = new AbortController();
        return (
          (async function () {
            let t = await C;
            e.signal.aborted ||
              (0, p.startTransition)(() => {
                me(t);
              });
          })(),
          () => {
            e.abort();
          }
        );
      }),
      (I = [C]),
      (t[13] = C),
      (t[14] = F),
      (t[15] = I)),
    (0, p.useEffect)(F, I));
  let he = (0, p.useRef)(null),
    L,
    R;
  (t[16] !== c || t[17] !== _ || t[18] !== l
    ? ((L = () => {
        let e = b.current,
          t,
          n = (e) => {
            let n = e?.join(`,`) ?? null;
            t !== n &&
              ((t = n),
              (0, p.startTransition)(() => {
                ue(e);
              }));
          };
        if (c)
          return ce(() => {
            n(se(`color`, c));
          });
        if (l)
          return ce(() => {
            n(se(`tokenColor`, l));
          });
        if (!_ || !e) {
          n(null);
          return;
        }
        let r = () => {
            let e = b.current;
            n(e ? oe(e) : null);
          },
          i = ce(r),
          a = new MutationObserver(r);
        return (
          a.observe(e, { attributes: !0, attributeFilter: [`class`, `style`] }),
          () => {
            (i(), a.disconnect());
          }
        );
      }),
      (R = [c, l, _]),
      (t[16] = c),
      (t[17] = _),
      (t[18] = l),
      (t[19] = L),
      (t[20] = R))
    : ((L = t[19]), (R = t[20])),
    (0, p.useEffect)(L, R));
  let z, B;
  (t[21] !== x || t[22] !== T
    ? ((z = () => {
        T &&
          (0, p.startTransition)(() => {
            pe(le({ animationData: T, color: x }));
          });
      }),
      (B = [x, T]),
      (t[21] = x),
      (t[22] = T),
      (t[23] = z),
      (t[24] = B))
    : ((z = t[23]), (B = t[24])),
    (0, p.useEffect)(z, B));
  let V = E || !h || (y && !w),
    H = null;
  if (!h || V) {
    let e = fe;
    if (!e)
      throw Error(
        `Either provide 'fallbackSvg' prop or use an 'animation' type when animated=false`,
      );
    let n;
    t[25] !== c || t[26] !== k
      ? ((n = { ...k }),
        c &&
          (c === `white`
            ? (n.filter = `brightness(0) invert(1)`)
            : (n.filter = `hue-rotate(${c})`)),
        (t[25] = c),
        (t[26] = k),
        (t[27] = n))
      : (n = t[27]);
    let r = c ? n : void 0,
      i;
    t[28] !== e || t[29] !== r
      ? ((i = (0, m.jsx)(e, { className: `h-full w-full`, style: r })),
        (t[28] = e),
        (t[29] = r),
        (t[30] = i))
      : (i = t[30]);
    let a;
    if (
      (t[31] !== P || t[32] !== M || t[33] !== i
        ? ((a = (0, m.jsx)(`div`, {
            ref: b,
            className: P,
            style: M,
            children: i,
          })),
          (t[31] = P),
          (t[32] = M),
          (t[33] = i),
          (t[34] = a))
        : (a = t[34]),
      (H = a),
      !h)
    )
      return H;
  }
  if (!E && !w && !y) {
    let e;
    return (
      t[35] !== P || t[36] !== M
        ? ((e = (0, m.jsx)(`div`, { ref: b, className: P, style: M })),
          (t[35] = P),
          (t[36] = M),
          (t[37] = e))
        : (e = t[37]),
      e
    );
  }
  let U = V ? `visible` : `hidden`,
    W;
  t[38] !== H || t[39] !== U
    ? ((W = (0, m.jsx)(p.Activity, { mode: U, children: H })),
      (t[38] = H),
      (t[39] = U),
      (t[40] = W))
    : (W = t[40]);
  let ge = V ? `hidden` : `visible`,
    G;
  t[41] === D
    ? (G = t[42])
    : ((G = i(D, `flex items-center justify-center`)),
      (t[41] = D),
      (t[42] = G));
  let _e = w?.data ?? void 0,
    K;
  t[43] === w
    ? (K = t[44])
    : ((K = (e) => {
        if (!e || !w || typeof OffscreenCanvas > `u`) return;
        let t = he.current;
        if (!t) {
          ((t = new OffscreenCanvas(w.size.width, w.size.height)),
            (he.current = t));
          let e = t.getContext(`2d`, {
            alpha: !0,
            desynchronized: !0,
            willReadFrequently: !1,
          });
          e &&
            ((e.imageSmoothingEnabled = !0),
            (e.imageSmoothingQuality = `high`),
            (e.globalCompositeOperation = `source-over`));
        }
        e.setCanvas(t);
      }),
      (t[43] = w),
      (t[44] = K));
  let q;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = { autoResize: !0, freezeOnOffscreen: !0, quality: 20 }),
      (t[45] = q))
    : (q = t[45]);
  let ve = !E,
    J;
  t[46] !== v || t[47] !== _e || t[48] !== K || t[49] !== ve
    ? ((J = (0, m.jsx)(de, {
        data: _e,
        dotLottieRefCallback: K,
        loop: v,
        renderConfig: q,
        autoplay: ve,
        className: `pointer-events-none h-full w-full contain-[paint_style_layout_inline-size]`,
      })),
      (t[46] = v),
      (t[47] = _e),
      (t[48] = K),
      (t[49] = ve),
      (t[50] = J))
    : (J = t[50]);
  let Y;
  t[51] !== H || t[52] !== J
    ? ((Y = (0, m.jsx)(p.Suspense, { fallback: H, children: J })),
      (t[51] = H),
      (t[52] = J),
      (t[53] = Y))
    : (Y = t[53]);
  let X;
  t[54] !== k || t[55] !== G || t[56] !== Y
    ? ((X = (0, m.jsx)(`div`, { className: G, style: k, children: Y })),
      (t[54] = k),
      (t[55] = G),
      (t[56] = Y),
      (t[57] = X))
    : (X = t[57]);
  let Z;
  t[58] !== P || t[59] !== M || t[60] !== X
    ? ((Z = (0, m.jsx)(`div`, { ref: b, className: P, style: M, children: X })),
      (t[58] = P),
      (t[59] = M),
      (t[60] = X),
      (t[61] = Z))
    : (Z = t[61]);
  let Q;
  t[62] !== ge || t[63] !== Z
    ? ((Q = (0, m.jsx)(p.Activity, { mode: ge, children: Z })),
      (t[62] = ge),
      (t[63] = Z),
      (t[64] = Q))
    : (Q = t[64]);
  let $;
  return (
    t[65] !== W || t[66] !== Q
      ? (($ = (0, m.jsxs)(m.Fragment, { children: [W, Q] })),
        (t[65] = W),
        (t[66] = Q),
        (t[67] = $))
      : ($ = t[67]),
    $
  );
}
function de(e) {
  let t = (0, re.c)(3),
    n = (0, p.use)(v),
    r;
  return (
    t[0] !== n || t[1] !== e
      ? ((r = (0, m.jsx)(n, { ...e })), (t[0] = n), (t[1] = e), (t[2] = r))
      : (r = t[2]),
    r
  );
}
export { ue as t };
//# sourceMappingURL=animated-icon.js.map
