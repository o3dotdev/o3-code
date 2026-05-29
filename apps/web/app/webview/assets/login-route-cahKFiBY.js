import { s as e } from "./chunk-Bj-mKKzh.js";
import { mn as t } from "./src-C.js";
import {
  Li as n,
  Xs as r,
  po as i,
  tc as a,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as o, t as s } from "./jsx-runtime.js";
import "./react-dom-CvzHKZGB.js";
import "./marked.esm-BR-H6018.js";
import {
  G as c,
  L as l,
  S as u,
  U as d,
  X as f,
  Z as p,
  l as m,
  u as h,
  wt as g,
  y as _,
} from "./setting-storage.js";
import { m as v } from "./chunk-LFPYN7LY.js";
import { t as y } from "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import {
  c as b,
  i as x,
  n as S,
  o as C,
  u as w,
  v as T,
} from "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./app-server-manager-hooks.js";
import { t as E } from "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import { c as D, t as O } from "./use-auth.js";
import { r as k } from "./toast-signal.js";
import "./route-scope.js";
import { t as A } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import { t as j } from "./spinner.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import { t as M } from "./link-external-BPZREBQk.js";
import "./app-shell-state.js";
import { c as N, l as P, m as F, s as I } from "./onboarding-state.js";
import "./use-platform.js";
import "./terminal.js";
import "./with-window.js";
import "./homepage-logo.js";
import { t as L } from "./check-md.js";
import "./checkbox-DtuSNXXy.js";
import "./minus.js";
import "./clock-BflmlnpZ.js";
import "./search.js";
import "./globe-CnvlclXd.js";
import { t as ee } from "./copy-to-clipboard-C2Mq2hN-.js";
import "./image-square-CGEtcnWp.js";
import "./codex-BjFeJtxQ.js";
import { t as R } from "./openai-blossom-CXnPbecc.js";
import { t as z } from "./copy-Cen6nDnP.js";
import { t as B } from "./codex-app-ga-logo-B-zXdz0-.js";
import { a as V } from "./onboarding-shell.js";
import "./animated-icon.js";
import "./tasks-DNCFvQEW.js";
import "./chatgpt-token-auth.browser.js";
import {
  n as te,
  r as ne,
  t as H,
} from "./onboarding-login-content--MyCkfDo.js";
import { n as U, t as W } from "./use-ascii-engine.js";
var G = g(),
  K = e(o(), 1),
  q = s();
function re() {
  let e = f(u),
    a = O(),
    o = v(),
    s = c(),
    [l, p] = (0, K.useState)(null),
    h = l != null,
    g = D(),
    [y, b] = (0, K.useState)(!1),
    [x, S] = (0, K.useState)(!1),
    [w, T] = (0, K.useState)(null),
    [A, j] = (0, K.useState)(``),
    [M, N] = (0, K.useState)(!1),
    P = (0, K.useRef)(null),
    F = C(`900122030`),
    I = (t) => {
      let n = s.formatMessage(
        {
          id: `codex.signInFailed.message`,
          defaultMessage: `Sign-in failed: {rawMessage}`,
          description: `Sign-in failure toast message with error details`,
        },
        { rawMessage: t },
      );
      e.get(k).warning(n);
    };
  ((0, K.useEffect)(() => {
    y && (P.current?.focus(), P.current?.select());
  }, [y]),
    (0, K.useEffect)(() => {
      let e = !1;
      return (
        (async () => {
          try {
            let t = await m(`openai-api-key`);
            if (e) return;
            let n = t?.value ?? null;
            (T(n), j((e) => (e.length > 0 ? e : (n ?? ``))));
          } catch {
            e || T(null);
          }
        })(),
        () => {
          e = !0;
        }
      );
    }, []));
  let L = async () => {
      if (h) {
        (l?.abortController.abort(), p(null));
        return;
      }
      let e = new AbortController();
      p({ abortController: e, kind: `browserRedirect` });
      try {
        let { authUrl: n, completion: r } = await ne({ signal: e.signal });
        n && _.dispatchMessage(`open-in-browser`, { url: n });
        let i = await r;
        i.success
          ? (a.setAuthMethod(`chatgpt`), o(`/first-run`))
          : I(t(i.error ?? `Unknown error`));
      } catch (e) {
        if (e instanceof Error && e.name === `AbortError`) return;
        I(t(e));
      } finally {
        p(null);
      }
    },
    R = async () => {
      if (!F) return;
      if (h) {
        (l?.abortController.abort(), p(null));
        return;
      }
      let e = new AbortController();
      (S(!0), p({ abortController: e, kind: `deviceCode` }));
      try {
        let {
          verificationUrl: n,
          userCode: r,
          completion: i,
        } = await te({ signal: e.signal });
        if (e.signal.aborted) return;
        (p((t) =>
          t?.abortController === e
            ? { ...t, verificationUrl: n, userCode: r }
            : t,
        ),
          _.dispatchMessage(`open-in-browser`, { url: n }));
        let s = await i;
        s.success
          ? (a.setAuthMethod(`chatgpt`), o(`/first-run`))
          : I(t(s.error ?? `Unknown error`));
      } catch (e) {
        if (e instanceof Error && e.name === `AbortError`) return;
        I(t(e));
      } finally {
        p(null);
      }
    },
    z = async (t) => {
      if (t.length !== 0)
        try {
          (await ee(t),
            e.get(k).success(
              s.formatMessage({
                id: `codex.loggedOut.deviceCode.copySuccess`,
                defaultMessage: `Copied device code`,
                description: `Toast shown after copying the device code`,
              }),
            ));
        } catch {
          e.get(k).warning(
            s.formatMessage({
              id: `codex.loggedOut.deviceCode.copyFailed`,
              defaultMessage: `Could not copy device code`,
              description: `Toast shown when copying the device code fails`,
            }),
          );
        }
    },
    { data: B } = E(`show-copilot-login-first`),
    V = async () => {
      (await n(e, `use-copilot-auth-if-available`, !0),
        a.setAuthMethod(`copilot`),
        o(`/first-run`));
    },
    H = async () => {
      let e = A.trim();
      if (!(!e || M)) {
        N(!0);
        try {
          (await r(`login-with-api-key`, { hostId: i, apiKey: e }),
            a.setAuthMethod(`apikey`),
            o(`/first-run`));
        } catch (e) {
          I(t(e));
        } finally {
          N(!1);
        }
      }
    },
    U =
      !g || !B
        ? (0, q.jsxs)(q.Fragment, {
            children: [
              (0, q.jsx)(Y, {
                isPrimary: !0,
                handleChatGptSignIn: L,
                isChatGptSignInPending: h,
              }),
              !h &&
                g &&
                (0, q.jsx)(`div`, {
                  className: `pt-2`,
                  children: (0, q.jsx)(X, {
                    isPrimary: !1,
                    handleCopilotSignIn: V,
                  }),
                }),
            ],
          })
        : (0, q.jsxs)(q.Fragment, {
            children: [
              !h && (0, q.jsx)(X, { isPrimary: !0, handleCopilotSignIn: V }),
              (0, q.jsx)(`div`, {
                className: `pt-2`,
                children: (0, q.jsx)(Y, {
                  isPrimary: !1,
                  handleChatGptSignIn: L,
                  isChatGptSignInPending: h,
                }),
              }),
            ],
          }),
    W = l?.kind === `deviceCode` ? l : null;
  return (0, q.jsxs)(`div`, {
    className: `fixed inset-0 overflow-hidden bg-token-side-bar-background`,
    children: [
      (0, q.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0`,
        children: (0, q.jsx)(`div`, {
          className: `-ml-6 h-full w-full`,
          style: {
            WebkitMaskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 50%)`,
            maskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 78%)`,
            WebkitMaskRepeat: `no-repeat`,
            maskRepeat: `no-repeat`,
            WebkitMaskSize: `100% 100%`,
            maskSize: `100% 100%`,
          },
          children: (0, q.jsx)(J, {}),
        }),
      }),
      (0, q.jsx)(`div`, {
        className: `relative z-10 flex h-full justify-center px-4 py-6 sm:py-8`,
        children: (0, q.jsxs)(`div`, {
          className: `flex h-full w-full max-w-[360px] flex-col`,
          children: [
            (0, q.jsx)(`div`, {
              className: `flex min-h-0 flex-1 items-center justify-center`,
              children: (0, q.jsx)(`h1`, {
                className: `text-center text-3xl leading-tight font-medium text-token-foreground`,
                children: (0, q.jsx)(d, {
                  id: `codex.loggedOut.title`,
                  defaultMessage: `Codex`,
                  description: `Title on logged out screen`,
                }),
              }),
            }),
            (0, q.jsxs)(`div`, {
              className: `flex min-h-[192px] flex-col justify-end gap-4 pb-2 sm:pb-0`,
              children: [
                !y &&
                  W == null &&
                  (0, q.jsx)(`div`, {
                    className: `flex w-full justify-center`,
                    children: (0, q.jsxs)(`div`, {
                      className: `mx-auto inline-flex w-max flex-col items-stretch`,
                      children: [
                        U,
                        !h &&
                          (0, q.jsx)(ce, {
                            setApiKeyValue: j,
                            defaultApiKeyFromEnv: w,
                            setIsApiKeySignInVisible: b,
                          }),
                        !h &&
                          F &&
                          (0, q.jsx)(ae, {
                            isVisible: x,
                            onToggle: () => {
                              S((e) => !e);
                            },
                            children: (0, q.jsx)(ie, {
                              handleChatGptDeviceCodeSignIn: R,
                            }),
                          }),
                      ],
                    }),
                  }),
                W != null &&
                  (0, q.jsx)(fe, {
                    verificationUrl: W.verificationUrl ?? ``,
                    userCode: W.userCode ?? ``,
                    onOpenBrowser: () => {
                      let e = W.verificationUrl;
                      e && _.dispatchMessage(`open-in-browser`, { url: e });
                    },
                    onCopyCode: z,
                    onCancel: () => {
                      (W.abortController.abort(), p(null));
                    },
                  }),
                !h &&
                  y &&
                  (0, q.jsx)(le, {
                    apiKeyValue: A,
                    setApiKeyValue: j,
                    apiKeyInputRef: P,
                    isApiKeyLoginPending: M,
                    setIsApiKeyLoginPending: N,
                    setIsApiKeySignInVisible: b,
                    handleApiKeySubmit: H,
                  }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
var J = K.memo(function () {
  let e = (0, G.c)(5),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = {
        initialColumns: 130,
        initialRows: 100,
        initialMode: `composite`,
        preferredVideoKeyword: `blossom`,
      }),
      (e[0] = t))
    : (t = e[0]);
  let { columns: n, rows: r, lines: i } = W(t),
    a;
  return (
    e[1] !== n || e[2] !== i || e[3] !== r
      ? ((a = (0, q.jsx)(U, { lines: i, columns: n, rows: r, autoCover: !0 })),
        (e[1] = n),
        (e[2] = i),
        (e[3] = r),
        (e[4] = a))
      : (a = e[4]),
    a
  );
});
function Y(e) {
  let t = (0, G.c)(6),
    { isPrimary: n, handleChatGptSignIn: r, isChatGptSignInPending: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i
        ? (0, q.jsx)(d, {
            id: `codex.loggedOut.signIn.cancel`,
            defaultMessage: `Cancel Sign-in`,
            description: `Cancel button for sign in`,
          })
        : (0, q.jsx)(d, {
            id: `codex.loggedOut.signIn`,
            defaultMessage: `Sign in with ChatGPT`,
            description: `Sign in button text on logged out screen`,
          })),
      (t[0] = i),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a
      ? ((o = (0, q.jsx)(Z, { isPrimary: n, onClick: r, children: a })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function X(e) {
  let t = (0, G.c)(4),
    { isPrimary: n, handleCopilotSignIn: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, q.jsx)(d, {
        id: `codex.loggedOut.signInWithCopilot`,
        defaultMessage: `Sign in with GitHub Copilot`,
        description: `Button label for GitHub Copilot sign-in on logged out screen`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] !== r || t[2] !== n
      ? ((a = (0, q.jsx)(Z, { isPrimary: n, onClick: r, children: i })),
        (t[1] = r),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function ie(e) {
  let t = (0, G.c)(3),
    { handleChatGptDeviceCodeSignIn: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, q.jsx)(d, {
        id: `codex.loggedOut.signInWithDeviceCode`,
        defaultMessage: `Use device code`,
        description: `Secondary button to sign in with a device code`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, q.jsx)(Z, { isPrimary: !1, onClick: n, children: r })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function ae(e) {
  let t = (0, G.c)(17),
    { isVisible: n, onToggle: r, children: i } = e,
    a = !n,
    o = n ? `1fr` : `0fr`,
    s = n ? 1 : 0,
    c;
  t[0] !== o || t[1] !== s
    ? ((c = { gridTemplateRows: o, opacity: s }),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === i
    ? (l = t[4])
    : ((l = (0, q.jsx)(`div`, {
        className: `overflow-hidden`,
        children: (0, q.jsx)(`div`, { className: `pb-2`, children: i }),
      })),
      (t[3] = i),
      (t[4] = l));
  let u;
  t[5] !== a || t[6] !== c || t[7] !== l
    ? ((u = (0, q.jsx)(`div`, {
        className: `grid transition-[grid-template-rows,opacity] duration-200 ease-out`,
        "aria-hidden": a,
        style: c,
        children: l,
      })),
      (t[5] = a),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let f;
  t[9] === n
    ? (f = t[10])
    : ((f = n
        ? (0, q.jsx)(d, {
            id: `codex.loggedOut.lessOptions`,
            defaultMessage: `Less options`,
            description: `Button label to hide additional sign-in methods`,
          })
        : (0, q.jsx)(d, {
            id: `codex.loggedOut.moreOptions`,
            defaultMessage: `More options`,
            description: `Button label to reveal additional sign-in methods`,
          })),
      (t[9] = n),
      (t[10] = f));
  let p;
  t[11] !== r || t[12] !== f
    ? ((p = (0, q.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, q.jsx)(`button`, {
          type: `button`,
          className: `cursor-interaction text-center text-sm text-token-description-foreground hover:underline`,
          onClick: r,
          children: f,
        }),
      })),
      (t[11] = r),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== u || t[15] !== p
      ? ((m = (0, q.jsxs)(`div`, { className: `pt-2`, children: [u, p] })),
        (t[14] = u),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
var oe = `w-full cursor-interaction justify-center !rounded-full border px-4 py-2 font-medium`,
  se = `bg-token-foreground/10 w-full justify-center !rounded-full px-4 py-2 font-medium backdrop-blur-md`;
function Z(e) {
  let t = (0, G.c)(5),
    { isPrimary: n, onClick: r, children: i } = e,
    a = n ? `primary` : `outline`,
    o = n ? oe : se,
    s;
  return (
    t[0] !== i || t[1] !== r || t[2] !== a || t[3] !== o
      ? ((s = (0, q.jsx)(A, {
          color: a,
          className: o,
          onClick: r,
          children: i,
        })),
        (t[0] = i),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function ce(e) {
  let t = (0, G.c)(7),
    {
      setApiKeyValue: n,
      defaultApiKeyFromEnv: r,
      setIsApiKeySignInVisible: i,
    } = e,
    a;
  t[0] !== r || t[1] !== n || t[2] !== i
    ? ((a = () => {
        (i(!0), n((e) => (e.length > 0 ? e : (r ?? ``))));
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, q.jsx)(d, {
        id: `codex.loggedOut.useApiKey`,
        defaultMessage: `Use API Key`,
        description: `Secondary button to use API Key auth method`,
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] === a
      ? (s = t[6])
      : ((s = (0, q.jsx)(`div`, {
          className: `pt-2`,
          children: (0, q.jsx)(A, {
            color: `outline`,
            className: `w-full justify-center !rounded-full bg-token-foreground/10 px-4 py-2 font-medium backdrop-blur-md`,
            onClick: a,
            children: o,
          }),
        })),
        (t[5] = a),
        (t[6] = s)),
    s
  );
}
function le(e) {
  let t = (0, G.c)(32),
    {
      apiKeyValue: n,
      setApiKeyValue: r,
      apiKeyInputRef: i,
      isApiKeyLoginPending: a,
      setIsApiKeyLoginPending: o,
      setIsApiKeySignInVisible: s,
      handleApiKeySubmit: l,
    } = e,
    u = c(),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, q.jsx)(d, {
        id: `codex.loggedOut.apiKeyPrompt.inputLabel`,
        defaultMessage: `Enter your OpenAI API key`,
        description: `Label for API key input`,
      })),
      (t[0] = f))
    : (f = t[0]);
  let p;
  t[1] === u
    ? (p = t[2])
    : ((p = u.formatMessage({
        id: `codex.loggedOut.apiKeyPrompt.placeholder`,
        defaultMessage: `sk-...`,
        description: `Placeholder text hint for API key input field`,
      })),
      (t[1] = u),
      (t[2] = p));
  let m;
  t[3] === r
    ? (m = t[4])
    : ((m = (e) => {
        r(e.target.value);
      }),
      (t[3] = r),
      (t[4] = m));
  let h;
  t[5] !== i || t[6] !== n || t[7] !== p || t[8] !== m
    ? ((h = (0, q.jsxs)(`label`, {
        className: `block text-sm text-token-foreground`,
        children: [
          f,
          (0, q.jsx)(`input`, {
            ref: i,
            className: `mt-4 w-full rounded-lg border border-token-border bg-token-input-background px-3 py-2 text-sm text-token-foreground focus:border-token-focus-border focus:outline-none`,
            placeholder: p,
            value: n,
            onChange: m,
            onFocus: de,
          }),
        ],
      })),
      (t[5] = i),
      (t[6] = n),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, q.jsx)(`p`, {
        className: `mt-3 text-[10px] text-token-description-foreground`,
        children: (0, q.jsx)(d, {
          id: `codex.loggedOut.cloudTasksDisabledWithApiKey`,
          defaultMessage: `Cloud tasks disabled with API key`,
          description: `Disclaimer explaining that remote features need ChatGPT sign-in`,
        }),
      })),
      (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, q.jsxs)(`button`, {
        type: `button`,
        className: `inline-flex cursor-interaction items-center gap-1 text-sm text-token-text-link-foreground hover:underline max-[280px]:hidden`,
        onClick: ue,
        children: [
          (0, q.jsx)(d, {
            id: `codex.loggedOut.apiKeyPrompt.getKey`,
            defaultMessage: `Get API Key`,
            description: `Button to open OpenAI API key management page`,
          }),
          (0, q.jsx)(M, { "aria-hidden": `true`, className: `icon-2xs` }),
        ],
      })),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] !== o || t[13] !== s
    ? ((v = () => {
        (o(!1), s(!1));
      }),
      (t[12] = o),
      (t[13] = s),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, q.jsx)(d, {
        id: `codex.loggedOut.apiKeyPrompt.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for API key login`,
      })),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] === v
    ? (b = t[17])
    : ((b = (0, q.jsx)(A, { color: `ghost`, onClick: v, children: y })),
      (t[16] = v),
      (t[17] = b));
  let x;
  t[18] !== n || t[19] !== a
    ? ((x = n.trim().length === 0 || a), (t[18] = n), (t[19] = a), (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, q.jsx)(d, {
        id: `codex.loggedOut.apiKeyPrompt.confirm`,
        defaultMessage: `OK`,
        description: `Confirm button for API key login`,
      })),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== l || t[23] !== a || t[24] !== x
    ? ((C = (0, q.jsx)(A, {
        className: `px-4`,
        onClick: l,
        disabled: x,
        loading: a,
        children: S,
      })),
      (t[22] = l),
      (t[23] = a),
      (t[24] = x),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] !== C || t[27] !== b
    ? ((w = (0, q.jsxs)(`div`, {
        className: `mt-4 flex items-center justify-end gap-2 min-[280px]:justify-between`,
        children: [
          _,
          (0, q.jsxs)(`div`, {
            className: `flex justify-end gap-2`,
            children: [b, C],
          }),
        ],
      })),
      (t[26] = C),
      (t[27] = b),
      (t[28] = w))
    : (w = t[28]);
  let T;
  return (
    t[29] !== w || t[30] !== h
      ? ((T = (0, q.jsxs)(`div`, {
          className: `w-full rounded-2xl border border-token-border bg-token-dropdown-background/80 px-4 py-4 backdrop-blur-lg`,
          children: [h, g, w],
        })),
        (t[29] = w),
        (t[30] = h),
        (t[31] = T))
      : (T = t[31]),
    T
  );
}
function ue() {
  _.dispatchMessage(`open-in-browser`, {
    url: `https://platform.openai.com/api-keys`,
  });
}
function de(e) {
  e.currentTarget.select();
}
function fe(e) {
  let t = (0, G.c)(38),
    {
      verificationUrl: n,
      userCode: r,
      onOpenBrowser: i,
      onCopyCode: a,
      onCancel: o,
    } = e,
    s = c(),
    l = r.length > 0 ? r : `......`,
    [u, f] = (0, K.useState)(!1),
    p;
  t[0] !== s || t[1] !== u
    ? ((p = u
        ? s.formatMessage({
            id: `codex.loggedOut.deviceCode.copyAriaLabel.copied`,
            defaultMessage: `Copied`,
            description: `Aria label for the copied state of the device code copy affordance on the logged out screen`,
          })
        : s.formatMessage({
            id: `codex.loggedOut.deviceCode.copyAriaLabel.copy`,
            defaultMessage: `Copy`,
            description: `Aria label for the device code copy affordance on the logged out screen`,
          })),
      (t[0] = s),
      (t[1] = u),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h;
  t[3] !== a || t[4] !== r
    ? ((h = () => {
        r.length !== 0 &&
          (a(r),
          f(!0),
          window.setTimeout(() => {
            f(!1);
          }, 2e3));
      }),
      (t[3] = a),
      (t[4] = r),
      (t[5] = h))
    : (h = t[5]);
  let g = h,
    _;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, q.jsx)(`p`, {
        className: `text-sm text-token-foreground`,
        children: (0, q.jsx)(d, {
          id: `codex.loggedOut.deviceCode.instructions`,
          defaultMessage: `To use a device code to log in, click the open browser button and paste the code below.`,
          description: `Instructions shown while a device code login is in progress`,
        }),
      })),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === g
    ? (v = t[8])
    : ((v = (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), g());
      }),
      (t[7] = g),
      (t[8] = v));
  let y;
  t[9] === g
    ? (y = t[10])
    : ((y = (e) => {
        (e.stopPropagation(), g());
      }),
      (t[9] = g),
      (t[10] = y));
  let b;
  t[11] === u
    ? (b = t[12])
    : ((b = u
        ? (0, q.jsx)(L, { className: `icon-sm text-token-foreground` })
        : (0, q.jsx)(z, { className: `icon-sm` })),
      (t[11] = u),
      (t[12] = b));
  let x;
  t[13] !== m || t[14] !== y || t[15] !== b
    ? ((x = (0, q.jsx)(`div`, {
        className: `absolute top-2 right-2 opacity-100 transition-opacity sm:opacity-0 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100`,
        children: (0, q.jsx)(A, {
          color: `ghost`,
          size: `icon`,
          className: `rounded-md`,
          "aria-label": m,
          onClick: y,
          children: b,
        }),
      })),
      (t[13] = m),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, q.jsx)(`p`, {
        className: `text-xs font-medium tracking-[0.2em] text-token-description-foreground uppercase`,
        children: (0, q.jsx)(d, {
          id: `codex.loggedOut.deviceCode.codeLabel`,
          defaultMessage: `Device code`,
          description: `Label above the user code shown during device code sign in`,
        }),
      })),
      (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] === l
    ? (C = t[19])
    : ((C = (0, q.jsx)(`p`, {
        className: `mt-2 overflow-x-auto text-center font-mono text-[28px] font-semibold tracking-[0.12em] whitespace-nowrap text-token-foreground`,
        children: l,
      })),
      (t[18] = l),
      (t[19] = C));
  let w;
  t[20] !== g || t[21] !== v || t[22] !== x || t[23] !== C
    ? ((w = (0, q.jsxs)(`div`, {
        className: `group relative rounded-xl border border-token-border bg-token-input-background px-3 py-3`,
        role: `button`,
        tabIndex: 0,
        onClick: g,
        onKeyDown: v,
        children: [x, S, C],
      })),
      (t[20] = g),
      (t[21] = v),
      (t[22] = x),
      (t[23] = C),
      (t[24] = w))
    : (w = t[24]);
  let T;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, q.jsx)(d, {
        id: `codex.loggedOut.deviceCode.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel a device code login`,
      })),
      (t[25] = T))
    : (T = t[25]);
  let E;
  t[26] === o
    ? (E = t[27])
    : ((E = (0, q.jsx)(A, { color: `ghost`, onClick: o, children: T })),
      (t[26] = o),
      (t[27] = E));
  let D = n.length === 0,
    O;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, q.jsx)(d, {
        id: `codex.loggedOut.deviceCode.openBrowser`,
        defaultMessage: `Open browser`,
        description: `Button to open the device code verification page`,
      })),
      (t[28] = O))
    : (O = t[28]);
  let k;
  t[29] !== i || t[30] !== D
    ? ((k = (0, q.jsx)(A, { onClick: i, disabled: D, children: O })),
      (t[29] = i),
      (t[30] = D),
      (t[31] = k))
    : (k = t[31]);
  let j;
  t[32] !== E || t[33] !== k
    ? ((j = (0, q.jsxs)(`div`, {
        className: `flex w-full flex-wrap items-center justify-between gap-2`,
        children: [E, k],
      })),
      (t[32] = E),
      (t[33] = k),
      (t[34] = j))
    : (j = t[34]);
  let M;
  return (
    t[35] !== w || t[36] !== j
      ? ((M = (0, q.jsx)(`div`, {
          className: `w-full rounded-2xl border border-token-border bg-token-dropdown-background/80 px-4 py-4 backdrop-blur-lg`,
          children: (0, q.jsxs)(`div`, {
            className: `space-y-3`,
            children: [_, w, j],
          }),
        })),
        (t[35] = w),
        (t[36] = j),
        (t[37] = M))
      : (M = t[37]),
    M
  );
}
var Q = 12,
  $ = 18,
  pe = 120,
  me = {
    up: { x: 0, y: -1 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 },
    right: { x: 1, y: 0 },
  },
  he = { up: `down`, down: `up`, left: `right`, right: `left` };
function ge(e) {
  let t = (0, G.c)(21),
    { onExit: n, audioContextRef: r } = e,
    i = (0, K.useRef)(null),
    a = (0, K.useRef)(null),
    o = (0, K.useRef)(null),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = []), (t[0] = s))
    : (s = t[0]);
  let c = (0, K.useRef)(s),
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { x: 0, y: 0 }), (t[1] = l))
    : (l = t[1]);
  let u = (0, K.useRef)(l),
    d = (0, K.useRef)(`right`),
    f = (0, K.useRef)(`right`),
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { columns: Q, rows: Q, cellSize: $, width: Q * $, height: Q * $ }),
      (t[2] = p))
    : (p = t[2]);
  let m = (0, K.useRef)(p),
    h = (0, K.useRef)(null),
    g = (0, K.useEffectEvent)(n),
    _;
  t[3] === r
    ? (_ = t[4])
    : ((_ = (e, t, n) => {
        if (r.current == null) return;
        let i = r.current;
        i.state === `suspended` && i.resume();
        let a = t / 1e3,
          o = i.createOscillator(),
          s = i.createGain();
        ((o.type = n),
          (o.frequency.value = e),
          s.gain.setValueAtTime(1e-4, i.currentTime),
          s.gain.exponentialRampToValueAtTime(0.18, i.currentTime + 0.01),
          s.gain.exponentialRampToValueAtTime(1e-4, i.currentTime + a),
          o.connect(s),
          s.connect(i.destination),
          o.start(),
          o.stop(i.currentTime + a),
          (o.onended = () => {
            (o.disconnect(), s.disconnect());
          }));
      }),
      (t[3] = r),
      (t[4] = _));
  let v = (0, K.useEffectEvent)(_),
    y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        o.current != null &&
          (window.clearInterval(o.current), (o.current = null));
      }),
      (t[5] = y))
    : (y = t[5]);
  let b = y,
    x;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => {
        if (h.current) return h.current;
        let e = i.current;
        if (e == null) return { snake: `#ffffff`, food: `#f97316` };
        let t = getComputedStyle(e).color || `#ffffff`,
          n = getComputedStyle(document.documentElement),
          r = {
            snake: t,
            food:
              n.getPropertyValue(`--vscode-charts-red`).trim() ||
              n.getPropertyValue(`--vscode-charts-orange`).trim() ||
              `#f97316`,
          };
        return ((h.current = r), r);
      }),
      (t[6] = x))
    : (x = t[6]);
  let S = x,
    C;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        if (i.current == null) return null;
        let e = Math.max(1, Math.floor(window.devicePixelRatio || 1));
        ((i.current.width = Math.max(1, Math.floor(m.current.width * e))),
          (i.current.height = Math.max(1, Math.floor(m.current.height * e))),
          (i.current.style.width = `${m.current.width}px`),
          (i.current.style.height = `${m.current.height}px`));
        let t = i.current.getContext(`2d`);
        return t == null
          ? null
          : (t.setTransform(e, 0, 0, e, 0, 0),
            (t.imageSmoothingEnabled = !1),
            t);
      }),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => {
        let t = {
          x: Math.floor(Math.random() * m.current.columns),
          y: Math.floor(Math.random() * m.current.rows),
        };
        for (; e.some((e) => e.x === t.x && e.y === t.y); )
          t = {
            x: Math.floor(Math.random() * m.current.columns),
            y: Math.floor(Math.random() * m.current.rows),
          };
        return t;
      }),
      (t[8] = T))
    : (T = t[8]);
  let E = T,
    D;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        let e = w();
        if (e == null) return;
        let t = S();
        (e.clearRect(0, 0, m.current.width, m.current.height),
          (e.fillStyle = t.snake));
        for (let t of c.current)
          e.fillRect(
            t.x * m.current.cellSize,
            t.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          );
        ((e.fillStyle = t.food),
          e.fillRect(
            u.current.x * m.current.cellSize,
            u.current.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          ));
      }),
      (t[9] = D))
    : (D = t[9]);
  let O = (0, K.useEffectEvent)(D),
    k;
  t[10] === O
    ? (k = t[11])
    : ((k = () => {
        let e = Math.floor(m.current.columns / 2),
          t = Math.floor(m.current.rows / 2);
        ((c.current = [
          { x: e, y: t },
          { x: e - 1, y: t },
          { x: e - 2, y: t },
        ]),
          (d.current = `right`),
          (f.current = `right`),
          (u.current = E(c.current)),
          O());
      }),
      (t[10] = O),
      (t[11] = k));
  let A = (0, K.useEffectEvent)(k),
    j;
  t[12] === A
    ? (j = t[13])
    : ((j = () => {
        if (a.current == null) return;
        let e = a.current.getBoundingClientRect(),
          t = Math.max(1, Math.floor(e.width)),
          n = Math.max(1, Math.floor(e.height)),
          r = Math.max(Q, Math.floor(t / $)),
          i = t / r;
        ((m.current = {
          columns: r,
          rows: Math.max(Q, Math.floor(n / i)),
          cellSize: i,
          width: t,
          height: n,
        }),
          A());
      }),
      (t[12] = A),
      (t[13] = j));
  let M = (0, K.useEffectEvent)(j),
    N;
  t[14] !== O || t[15] !== g || t[16] !== v || t[17] !== M
    ? ((N = () => {
        M();
        let e = (e) => {
          let t = null;
          (e.key === `ArrowUp` || e.key === `w` || e.key === `W`
            ? (t = `up`)
            : e.key === `ArrowDown` || e.key === `s` || e.key === `S`
              ? (t = `down`)
              : e.key === `ArrowLeft` || e.key === `a` || e.key === `A`
                ? (t = `left`)
                : (e.key === `ArrowRight` || e.key === `d` || e.key === `D`) &&
                  (t = `right`),
            t != null &&
              (e.preventDefault(), he[d.current] !== t && (f.current = t)));
        };
        return (
          window.addEventListener(`keydown`, e),
          (o.current = window.setInterval(() => {
            let e = c.current,
              t = e[0],
              n = f.current,
              r = me[n],
              i = { x: t.x + r.x, y: t.y + r.y };
            if (
              i.x < 0 ||
              i.y < 0 ||
              i.x >= m.current.columns ||
              i.y >= m.current.rows
            ) {
              (b(), v(140, 220, `sawtooth`), g());
              return;
            }
            let a = i.x === u.current.x && i.y === u.current.y;
            if (
              (a ? e : e.slice(0, -1)).some((e) => e.x === i.x && e.y === i.y)
            ) {
              (b(), v(160, 220, `sawtooth`), g());
              return;
            }
            let o = a ? [i, ...e] : [i, ...e.slice(0, -1)];
            ((c.current = o),
              (d.current = n),
              a && ((u.current = E(o)), v(660, 120, `square`)),
              O());
          }, pe)),
          () => {
            (b(), window.removeEventListener(`keydown`, e));
          }
        );
      }),
      (t[14] = O),
      (t[15] = g),
      (t[16] = v),
      (t[17] = M),
      (t[18] = N))
    : (N = t[18]);
  let P;
  (t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = []), (t[19] = P))
    : (P = t[19]),
    (0, K.useEffect)(N, P));
  let F;
  return (
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((F = (0, q.jsx)(`div`, {
          className: `h-full w-full`,
          ref: a,
          children: (0, q.jsx)(`canvas`, {
            className: `h-full w-full text-token-foreground`,
            ref: i,
          }),
        })),
        (t[20] = F))
      : (F = t[20]),
    F
  );
}
var _e = T(),
  ve = `https://chatgpt.com/codex/desktop-auth`,
  ye = `codex_streamlined_login`,
  be = `client-sYWqzCYMRkUg4DqqiZcR5DGTNl2iD7zNJY0HoeDLzxR`,
  xe = `codex_origin_stable_id`;
function Se({
  authUrl: e,
  codexOriginStableId: t = _e.StableID.get(be),
  includeCodexOriginStableId: n = !1,
  useDesktopAuth: r,
  useStreamlinedLoginUx: i,
}) {
  if (!n && !r && !i) return e;
  try {
    let a = new URL(e);
    if (
      (n && t && a.searchParams.set(xe, t),
      a.pathname === `/codex/desktop-auth`)
    )
      return (i && a.searchParams.set(ye, `true`), a.toString());
    if ((i && a.searchParams.set(ye, `true`), !r)) return a.toString();
    let o = new URL(ve);
    return (
      o.searchParams.set(`authorize_url`, a.toString()),
      i && o.searchParams.set(ye, `true`),
      o.toString()
    );
  } catch {
    return e;
  }
}
var Ce = `3446609779`,
  we = `1561420571`;
function Te(e) {
  let t = e.get(`enabled`, !1);
  return {
    useDesktopAuth: e.get(`use_desktop_auth`, t),
    useStreamlinedLoginUx: e.get(`use_streamlined_login_ux`, t),
  };
}
function Ee(e) {
  return e;
}
function De(e, t) {
  if (t === `signin`) return e;
  try {
    let n = new URL(e);
    switch (t) {
      case `signup`:
        n.searchParams.set(`screen_hint`, `signup`);
        break;
      case `google`:
        (n.searchParams.set(`screen_hint`, `login_or_signup`),
          n.searchParams.set(`connection`, `google-oauth2`));
        break;
      case `microsoft`:
        (n.searchParams.set(`screen_hint`, `login_or_signup`),
          n.searchParams.set(`connection`, `windowslive`));
        break;
    }
    return n.toString();
  } catch {
    return e;
  }
}
var Oe = (e) =>
    (0, q.jsxs)(`svg`, {
      height: 24,
      viewBox: `0 0 24 24`,
      width: 24,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, q.jsx)(`path`, {
          d: `M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z`,
          fill: `#4285F4`,
        }),
        (0, q.jsx)(`path`, {
          d: `M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z`,
          fill: `#34A853`,
        }),
        (0, q.jsx)(`path`, {
          d: `M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z`,
          fill: `#FBBC05`,
        }),
        (0, q.jsx)(`path`, {
          d: `M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z`,
          fill: `#EA4335`,
        }),
        (0, q.jsx)(`path`, { d: `M1 1h22v22H1z`, fill: `none` }),
      ],
    }),
  ke = (e) =>
    (0, q.jsxs)(`svg`, {
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: [
        (0, q.jsx)(`path`, {
          d: `M3.25 3.25H11.25V11.25H3.25V3.25Z`,
          fill: `#F35325`,
        }),
        (0, q.jsx)(`path`, {
          d: `M12.75 3.25H20.75V11.25H12.75V3.25Z`,
          fill: `#81BC06`,
        }),
        (0, q.jsx)(`path`, {
          d: `M3.25 12.75H11.25V20.75H3.25V12.75Z`,
          fill: `#05A6F0`,
        }),
        (0, q.jsx)(`path`, {
          d: `M12.75 12.75H20.75V20.75H12.75V12.75Z`,
          fill: `#FFBA08`,
        }),
      ],
    });
function Ae(e) {
  let t = (0, G.c)(40),
    {
      apiKeyValue: n,
      isApiKeyEntryVisible: r,
      isApiKeySignInPending: i,
      isChatGptSignInPending: a,
      showChatGptProviderSignIn: o,
      onApiKeySubmit: s,
      onApiKeyValueChange: l,
      onChatGptSignIn: u,
      onChatGptSignUp: f,
      onPlaySnake: p,
      onResetApiKeyEntry: m,
      onShowApiKeyEntry: h,
    } = e,
    g = c(),
    _ = w(`2523619087`),
    v;
  t[0] === _
    ? (v = t[1])
    : ((v = _.get(`enabled`, !1)), (t[0] = _), (t[1] = v));
  let y = v;
  if (a && !r) {
    let e;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(`img`, {
          src: B,
          className: `size-[52px] shrink-0`,
          draggable: !1,
          alt: ``,
          "aria-hidden": `true`,
        })),
        (t[2] = e))
      : (e = t[2]);
    let n;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, q.jsx)(`p`, {
          className: `text-center text-[14px] leading-5 font-normal tracking-[-0.18px] text-token-description-foreground`,
          children: (0, q.jsx)(d, {
            id: `electron.onboarding.login.browserPending.welcomeV2`,
            defaultMessage: `Continue signing in with your browser`,
            description: `Message shown while ChatGPT sign-in continues in the browser`,
          }),
        })),
        (t[3] = n))
      : (n = t[3]);
    let r;
    t[4] === u ? (r = t[5]) : ((r = () => u()), (t[4] = u), (t[5] = r));
    let i;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, q.jsx)(d, {
          id: `electron.onboarding.login.chatgpt.cancel.welcomeV2`,
          defaultMessage: `Cancel sign-in`,
          description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
        })),
        (t[6] = i))
      : (i = t[6]);
    let a;
    return (
      t[7] === r
        ? (a = t[8])
        : ((a = (0, q.jsx)(`div`, {
            className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-12 text-token-foreground`,
            children: (0, q.jsxs)(`div`, {
              className: `flex w-[340px] flex-col items-center gap-8`,
              children: [
                e,
                n,
                (0, q.jsx)(`button`, {
                  className: `flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-description-foreground hover:bg-token-list-hover-background`,
                  type: `button`,
                  onClick: r,
                  children: i,
                }),
              ],
            }),
          })),
          (t[7] = r),
          (t[8] = a)),
      a
    );
  }
  let b;
  t[9] === g
    ? (b = t[10])
    : ((b = g.formatMessage({
        id: `electron.onboarding.login.snake.start`,
        defaultMessage: `Play Snake`,
        description: `Aria label for the Codex logo button to start Snake`,
      })),
      (t[9] = g),
      (t[10] = b));
  let x;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, q.jsx)(`img`, {
        src: B,
        className: `size-[52px] shrink-0`,
        draggable: !1,
        alt: ``,
        "aria-hidden": `true`,
      })),
      (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] !== p || t[13] !== b
    ? ((S = (0, q.jsx)(`button`, {
        className: `group flex cursor-interaction items-center justify-center rounded-full`,
        type: `button`,
        "aria-label": b,
        onClick: p,
        children: x,
      })),
      (t[12] = p),
      (t[13] = b),
      (t[14] = S))
    : (S = t[14]);
  let C, T;
  t[15] === y
    ? ((C = t[16]), (T = t[17]))
    : ((C = (0, q.jsx)(`h1`, {
        className: `w-[316px] text-[28px] leading-9 font-normal text-token-foreground`,
        children: y
          ? (0, q.jsx)(d, {
              id: `electron.onboarding.login.welcomeV2.title.streamlined`,
              defaultMessage: `Welcome to Codex`,
              description: `Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in`,
            })
          : (0, q.jsx)(d, {
              id: `electron.onboarding.login.welcomeV2.title`,
              defaultMessage: `Get started with Codex`,
              description: `Title on the v2 desktop onboarding login page`,
            }),
      })),
      (T = y
        ? (0, q.jsxs)(`div`, {
            className: `mt-4 flex items-center justify-center gap-1.5 rounded-full bg-[#4452ff]/[0.08] py-1 pr-3 pl-2.5 text-[13px] leading-5 font-normal tracking-[-0.078px] text-[#4452ff] dark:bg-[#4452ff]/25 dark:text-[#7882ff]`,
            children: [
              (0, q.jsx)(L, {
                className: `size-3.5 shrink-0`,
                "aria-hidden": `true`,
              }),
              (0, q.jsx)(d, {
                id: `electron.onboarding.login.includedPlans.welcomeV2`,
                defaultMessage: `Included with all ChatGPT plans`,
                description: `Badge text on the v2 desktop onboarding login page indicating Codex is included with ChatGPT plans`,
              }),
            ],
          })
        : null),
      (t[15] = y),
      (t[16] = C),
      (t[17] = T));
  let E;
  t[18] !== C || t[19] !== T
    ? ((E = (0, q.jsxs)(`div`, {
        className: `flex w-full flex-col items-center text-center`,
        children: [C, T],
      })),
      (t[18] = C),
      (t[19] = T),
      (t[20] = E))
    : (E = t[20]);
  let D;
  t[21] !== S || t[22] !== E
    ? ((D = (0, q.jsxs)(`div`, {
        className: `flex w-full flex-col items-center gap-8`,
        children: [S, E],
      })),
      (t[21] = S),
      (t[22] = E),
      (t[23] = D))
    : (D = t[23]);
  let O;
  t[24] !== n ||
  t[25] !== r ||
  t[26] !== i ||
  t[27] !== a ||
  t[28] !== s ||
  t[29] !== l ||
  t[30] !== u ||
  t[31] !== f ||
  t[32] !== m ||
  t[33] !== h ||
  t[34] !== o ||
  t[35] !== y
    ? ((O = r
        ? (0, q.jsx)(`div`, {
            className: `w-full`,
            children: (0, q.jsx)(H, {
              apiKeyValue: n,
              isApiKeyEntryVisible: r,
              isApiKeySignInPending: i,
              isChatGptSignInPending: a,
              onApiKeySecondaryAction: m,
              onApiKeySubmit: s,
              onApiKeyValueChange: l,
              onChatGptSignIn: u,
              onShowApiKeyEntry: h,
              apiKeySecondaryActionLabel: (0, q.jsx)(d, {
                id: `electron.onboarding.login.apikey.cancel`,
                defaultMessage: `Cancel`,
                description: `Cancel button label for API key entry on desktop onboarding`,
              }),
            }),
          })
        : (0, q.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-3`,
            children: [
              (0, q.jsxs)(`button`, {
                className: `flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-token-foreground text-[14px] leading-5 font-medium text-token-dropdown-background hover:bg-token-foreground/80`,
                type: `button`,
                onClick: () => u(),
                children: [
                  (0, q.jsx)(R, {
                    className: `size-6 shrink-0 text-token-dropdown-background`,
                  }),
                  y
                    ? (0, q.jsx)(d, {
                        id: `electron.onboarding.login.chatgpt.signIn.streamlined`,
                        defaultMessage: `Continue with ChatGPT`,
                        description: `Button label for streamlined ChatGPT sign-in on desktop onboarding`,
                      })
                    : (0, q.jsx)(d, {
                        id: `electron.onboarding.login.chatgpt.signIn`,
                        defaultMessage: `Sign in with ChatGPT`,
                        description: `Button label to sign in with ChatGPT on desktop onboarding`,
                      }),
                ],
              }),
              o
                ? (0, q.jsxs)(q.Fragment, {
                    children: [
                      (0, q.jsxs)(`button`, {
                        className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background`,
                        type: `button`,
                        onClick: () => u(`google`),
                        children: [
                          (0, q.jsx)(Oe, {
                            className: `size-5 shrink-0`,
                            "aria-hidden": `true`,
                          }),
                          (0, q.jsx)(d, {
                            id: `electron.onboarding.login.google.signIn`,
                            defaultMessage: `Continue with Google`,
                            description: `Button label for Google sign-in on desktop onboarding`,
                          }),
                        ],
                      }),
                      (0, q.jsxs)(`button`, {
                        className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background`,
                        type: `button`,
                        onClick: () => u(`microsoft`),
                        children: [
                          (0, q.jsx)(ke, {
                            className: `size-5 shrink-0`,
                            "aria-hidden": `true`,
                          }),
                          (0, q.jsx)(d, {
                            id: `electron.onboarding.login.microsoft.signIn`,
                            defaultMessage: `Continue with Microsoft`,
                            description: `Button label for Microsoft sign-in on desktop onboarding`,
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
              (0, q.jsx)(`button`, {
                className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background`,
                type: `button`,
                onClick: h,
                children: (0, q.jsx)(d, {
                  id: `electron.onboarding.login.apikey.open.welcomeV2`,
                  defaultMessage: `Sign in another way`,
                  description: `Button label to open another sign-in method on v2 desktop onboarding`,
                }),
              }),
              (0, q.jsx)(`button`, {
                className: `flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-token-description-foreground underline hover:text-token-foreground`,
                type: `button`,
                onClick: f,
                children: (0, q.jsx)(d, {
                  id: `electron.onboarding.login.signup.welcomeV2`,
                  defaultMessage: `Sign up`,
                  description: `Sign-up link on v2 desktop onboarding`,
                }),
              }),
            ],
          })),
      (t[24] = n),
      (t[25] = r),
      (t[26] = i),
      (t[27] = a),
      (t[28] = s),
      (t[29] = l),
      (t[30] = u),
      (t[31] = f),
      (t[32] = m),
      (t[33] = h),
      (t[34] = o),
      (t[35] = y),
      (t[36] = O))
    : (O = t[36]);
  let k;
  return (
    t[37] !== D || t[38] !== O
      ? ((k = (0, q.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-6 text-token-foreground`,
          children: (0, q.jsxs)(`div`, {
            className: `flex w-[340px] flex-col items-center gap-8`,
            children: [D, O],
          }),
        })),
        (t[37] = D),
        (t[38] = O),
        (t[39] = k))
      : (k = t[39]),
    k
  );
}
function je() {
  let e = f(u),
    n = O(),
    o = v(),
    s = c(),
    m = l(),
    g = p(F),
    C = a(I),
    T = a(N),
    E = a(P),
    D = g == null ? null : { has_previously_completed_onboarding: g },
    A = b(),
    M = Ee(w(we).get(`enabled`, !1)),
    L = (t) => {
      e.get(k).warning(
        s.formatMessage(
          {
            id: `electron.onboarding.login.error`,
            defaultMessage: `Sign-in failed: {rawMessage}`,
            description: `Toast shown when sign-in fails on the desktop onboarding page`,
          },
          { rawMessage: t },
        ),
      );
    },
    [ee, R] = (0, K.useState)(null),
    z = ee != null,
    [B, te] = (0, K.useState)(!1),
    [H, U] = (0, K.useState)(!1),
    [W, G] = (0, K.useState)(``),
    [re, J] = (0, K.useState)(!1),
    Y = (0, K.useRef)(null),
    X = () => {
      (T(!1), E(!0));
    },
    ie = () => {
      (te(!1), J(!1), G(``));
    },
    ae = () => {
      D != null &&
        (y(e, {
          eventName: `codex_login_method_selected`,
          metadata: { method: `apikey`, ...D },
        }),
        te(!0));
    },
    oe = () => {
      U(!1);
    },
    se = () => {
      Y.current ??
        (typeof window > `u` ||
          (`AudioContext` in window &&
            ((Y.current = new window.AudioContext()),
            Y.current.state === `suspended` && Y.current.resume())));
    },
    Z = () => {
      (se(), U(!0));
    },
    ce = async (r = `signin`) => {
      if (z) {
        (ee?.abort(), R(null));
        return;
      }
      if (D == null) return;
      let i = r === `google` || r === `microsoft` ? r : `chatgpt`;
      y(e, {
        eventName: `codex_login_method_selected`,
        metadata: { method: i, ...D },
      });
      let a = new AbortController();
      R(a);
      try {
        let { useDesktopAuth: s, useStreamlinedLoginUx: c } = Te(x(A, Ce)),
          l = S(A, `3963726525`),
          { authUrl: u, completion: d } = await ne({
            signal: a.signal,
            useStreamlinedLogin: c,
          });
        if (u) {
          let e = Se({
            authUrl: De(u, r),
            includeCodexOriginStableId: l,
            useDesktopAuth: s,
            useStreamlinedLoginUx: c,
          });
          _.dispatchMessage(`open-in-browser`, {
            url: e,
            ...(s ? { useExternalBrowser: !0 } : {}),
          });
        }
        let f = await d;
        f.success
          ? (y(e, {
              eventName: `codex_login_success`,
              metadata: { method: i, ...D },
            }),
            m.removeQueries({ queryKey: h(`account-info`), exact: !0 }),
            X(),
            C(!0),
            n.setAuthMethod(`chatgpt`),
            o(`/welcome`, { replace: !0 }))
          : (y(e, {
              eventName: `codex_login_failure`,
              metadata: { method: i, error_kind: Me(f.error), ...D },
            }),
            L(t(f.error ?? `Unknown error`)));
      } catch (n) {
        if (n instanceof Error && n.name === `AbortError`) {
          y(e, {
            eventName: `codex_login_failure`,
            metadata: { method: i, error_kind: `abort`, ...D },
          });
          return;
        }
        (y(e, {
          eventName: `codex_login_failure`,
          metadata: { method: i, error_kind: Me(n), ...D },
        }),
          L(t(n)));
      } finally {
        R(null);
      }
    };
  return D == null
    ? (0, q.jsx)(V, {
        children: (0, q.jsxs)(`div`, {
          className: `flex h-full w-full flex-col items-center justify-center gap-3 text-token-description-foreground`,
          children: [
            (0, q.jsx)(j, { className: `h-4 w-4 text-token-foreground` }),
            (0, q.jsx)(d, {
              id: `electron.onboarding.login.loading`,
              defaultMessage: `Loading…`,
              description: `Loading state while the login page prepares onboarding telemetry`,
            }),
          ],
        }),
      })
    : (0, q.jsx)(V, {
        fullBleed: !0,
        hideHeader: H,
        children: H
          ? (0, q.jsx)(`div`, {
              className: `flex h-full w-full`,
              children: (0, q.jsx)(ge, { onExit: oe, audioContextRef: Y }),
            })
          : (0, q.jsx)(Ae, {
              apiKeyValue: W,
              isApiKeyEntryVisible: B,
              isApiKeySignInPending: re,
              isChatGptSignInPending: z,
              showChatGptProviderSignIn: M,
              onApiKeySubmit: async () => {
                let a = W.trim();
                if (!(!a || re || D == null)) {
                  J(!0);
                  try {
                    (await r(`login-with-api-key`, { hostId: i, apiKey: a }),
                      y(e, {
                        eventName: `codex_login_success`,
                        metadata: { method: `apikey`, ...D },
                      }),
                      X(),
                      C(!0),
                      n.setAuthMethod(`apikey`),
                      o(`/welcome`, { replace: !0 }));
                  } catch (n) {
                    (y(e, {
                      eventName: `codex_login_failure`,
                      metadata: { method: `apikey`, error_kind: Me(n), ...D },
                    }),
                      L(t(n)));
                  } finally {
                    J(!1);
                  }
                }
              },
              onApiKeyValueChange: G,
              onChatGptSignIn: ce,
              onChatGptSignUp: () => ce(`signup`),
              onPlaySnake: Z,
              onResetApiKeyEntry: ie,
              onShowApiKeyEntry: ae,
            }),
      });
}
function Me(e) {
  let t = typeof e == `string` ? e : e instanceof Error ? e.message : ``;
  if (!t) return `unknown`;
  let n = t.toLowerCase();
  return n.includes(`network`) || n.includes(`fetch`) || n.includes(`timeout`)
    ? `network`
    : n.includes(`auth`) ||
        n.includes(`unauthorized`) ||
        n.includes(`forbidden`) ||
        n.includes(`invalid api key`) ||
        n.includes(`401`) ||
        n.includes(`403`)
      ? `auth`
      : `unknown`;
}
function Ne() {
  let e = (0, G.c)(3);
  {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, q.jsx)(je, {})), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let t;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, q.jsx)(re, {})), (e[2] = t))
      : (t = e[2]),
    t
  );
}
export { Ne as LoginRoute };
//# sourceMappingURL=login-route-cahKFiBY.js.map
