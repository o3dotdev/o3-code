import { s as e } from "./chunk-Bj-mKKzh.js";
import {
  Gi as t,
  Gn as n,
  Li as r,
  Rt as i,
  kr as a,
  qi as o,
} from "./src-C.js";
import {
  Li as s,
  Xs as c,
  bi as l,
  do as u,
  v as d,
  xi as f,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as p, t as m } from "./jsx-runtime.js";
import { t as h } from "./clsx-BcPLHiun.js";
import "./react-dom-CvzHKZGB.js";
import "./Combination.js";
import "./marked.esm-BR-H6018.js";
import {
  C as g,
  G as ee,
  L as _,
  S as v,
  U as y,
  X as b,
  Y as x,
  Z as S,
  _ as C,
  d as w,
  m as T,
  p as E,
  u as D,
  w as O,
  wt as k,
} from "./setting-storage.js";
import { r as A } from "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import { o as j } from "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import { t as te } from "./use-global-state.js";
import { t as M } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import { C as N, s as P } from "./config-queries-BBeTQbuo.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import {
  a as ne,
  i as F,
  n as I,
  o as L,
  r as R,
} from "./experimental-features-queries.js";
import { r as re } from "./toast-signal.js";
import "./window-zoom-context.js";
import { t as z } from "./tooltip-CDzchJxN.js";
import { t as B } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import { t as V } from "./spinner.js";
import "./remote-projects.js";
import "./thread-detail-level.js";
import "./permissions-mode-defaults.js";
import "./use-permissions-mode.js";
import "./proxy.js";
import "./x-C_RDKBp5.js";
import "./projectless-thread.js";
import { t as H } from "./with-window.js";
import {
  a as ie,
  d as U,
  i as ae,
  l as oe,
  n as se,
  r as ce,
  t as le,
} from "./dialog-layout.js";
import "./local-projects.js";
import "./initial-route-atom.js";
import "./electron-menu-shortcuts.js";
import "./_defineProperty.js";
import { t as ue } from "./check-md.js";
import "./chevron-right.js";
import "./select-project.js";
import { n as de } from "./use-start-new-conversation.js";
import { u as fe } from "./links.js";
import "./search.js";
import { r as pe, t as W } from "./dropdown-DtQxMoJw.js";
import "./chevron-NmAOI_v1.js";
import "./sortBy.js";
import "./use-connected-remote-connections.js";
import { t as me } from "./toggle.js";
import { i as he, t as ge } from "./settings-shared-BTHmEeQY.js";
import { t as _e } from "./use-personality.js";
import { t as ve } from "./use-hotkey-yGPn4uDB.js";
import { t as ye } from "./settings-host-context-ILiCQlCE.js";
import { t as be } from "./settings-content-layout.js";
import {
  a as xe,
  i as Se,
  n as G,
  r as Ce,
  t as we,
} from "./chronicle-setup-state-hlbtWEMB.js";
import { n as Te } from "./settings-row.js";
import { n as Ee, t as K } from "./settings-group.js";
var q = k(),
  J = e(p(), 1),
  De = { $type: `protobuf_analytics_events.v1.CodexMemorySettingToggled` },
  Oe = { $type: `protobuf_analytics_events.v1.CodexMemoryResetClicked` },
  Y = w(v, `codex-agents-md`, (e) => ({
    params: { hostId: e },
    staleTime: C.FIVE_SECONDS,
  }));
function ke(e) {
  return je(e, Ae);
}
function Ae(e) {
  let { edits: t } = e;
  return t;
}
function je(e, t) {
  let n = (0, q.c)(20),
    r = _(),
    { data: i } = x(N, e),
    a = M(),
    o;
  n[0] === e ? (o = n[1]) : ((o = [...P, e]), (n[0] = e), (n[1] = o));
  let s = o,
    u;
  n[2] !== t || n[3] !== e || n[4] !== i?.configWriteTarget?.filePath
    ? ((u = (n) =>
        c(`batch-write-config-value`, {
          hostId: e,
          edits: t(n).map(Me),
          filePath: i?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        })),
      (n[2] = t),
      (n[3] = e),
      (n[4] = i?.configWriteTarget?.filePath),
      (n[5] = u))
    : (u = n[5]);
  let d;
  n[6] !== t || n[7] !== r || n[8] !== s
    ? ((d = async (e) => {
        let n = t(e);
        await r.cancelQueries({ queryKey: s });
        let i = r.getQueryData(s);
        return (
          r.setQueryData(s, (e) =>
            e == null ? e : { ...e, config: l(e.config, n) },
          ),
          { previousUserConfig: i }
        );
      }),
      (n[6] = t),
      (n[7] = r),
      (n[8] = s),
      (n[9] = d))
    : (d = n[9]);
  let f;
  n[10] !== r || n[11] !== s
    ? ((f = (e, t, n) => {
        (g.error(`Failed to update memory config`, {
          safe: {},
          sensitive: { error: e },
        }),
          r.setQueryData(s, n?.previousUserConfig));
      }),
      (n[10] = r),
      (n[11] = s),
      (n[12] = f))
    : (f = n[12]);
  let p;
  n[13] === a
    ? (p = n[14])
    : ((p = async () => {
        await Promise.all([a(P), a([`user-saved-config`])]);
      }),
      (n[13] = a),
      (n[14] = p));
  let m;
  return (
    n[15] !== u || n[16] !== d || n[17] !== f || n[18] !== p
      ? ((m = { mutationFn: u, onMutate: d, onError: f, onSettled: p }),
        (n[15] = u),
        (n[16] = d),
        (n[17] = f),
        (n[18] = p),
        (n[19] = m))
      : (m = n[19]),
    O(m)
  );
}
function Me(e) {
  let { keyPath: t, value: n } = e;
  return { keyPath: t, value: n, mergeStrategy: `upsert` };
}
var Ne = n(F),
  Pe = t(o(), r());
function Fe() {
  let e = (0, q.c)(16),
    t = _(),
    n = S(d),
    { data: r } = x(N, n),
    i = M(),
    a;
  e[0] === n ? (a = e[1]) : ((a = [...P, n]), (e[0] = n), (e[1] = a));
  let o = a,
    s;
  e[2] !== n || e[3] !== r?.configWriteTarget?.filePath
    ? ((s = (e) => {
        let { enabled: t } = e;
        return c(`batch-write-config-value`, {
          hostId: n,
          edits: [{ keyPath: Ne, value: t, mergeStrategy: `upsert` }],
          filePath: r?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        });
      }),
      (e[2] = n),
      (e[3] = r?.configWriteTarget?.filePath),
      (e[4] = s))
    : (s = e[4]);
  let l, u;
  e[5] !== t || e[6] !== o
    ? ((l = async (e) => {
        let { enabled: n } = e;
        await t.cancelQueries({ queryKey: o });
        let r = t.getQueryData(o);
        return (
          t.setQueryData(o, (e) =>
            e == null ? e : { ...e, config: Ie(e.config, n) },
          ),
          { previousUserConfig: r }
        );
      }),
      (u = (e, n, r) => {
        (g.error(`Failed to update Chronicle config`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          t.setQueryData(o, r?.previousUserConfig));
      }),
      (e[5] = t),
      (e[6] = o),
      (e[7] = l),
      (e[8] = u))
    : ((l = e[7]), (u = e[8]));
  let f;
  e[9] === i
    ? (f = e[10])
    : ((f = async () => {
        await Promise.all([i(P), i([`user-saved-config`])]);
      }),
      (e[9] = i),
      (e[10] = f));
  let p;
  return (
    e[11] !== s || e[12] !== l || e[13] !== u || e[14] !== f
      ? ((p = { mutationFn: s, onMutate: l, onError: u, onSettled: f }),
        (e[11] = s),
        (e[12] = l),
        (e[13] = u),
        (e[14] = f),
        (e[15] = p))
      : (p = e[15]),
    O(p)
  );
}
function Ie(e, t) {
  return Object.assign(structuredClone(e), {
    features: { ...Le(e.features, F, t) },
  });
}
function Le(e, t, n) {
  let r = Pe.safeParse(e);
  return { ...(r.success ? r.data : {}), [t]: n };
}
var X = m();
function Re({ onChronicleResearchPreviewToggled: e } = {}) {
  let t = b(v),
    n = S(d),
    r = ee(),
    o = _(),
    c = de(),
    l = Fe(),
    { data: u, isLoading: f } = te(a.CHRONICLE_CONSENT_ACCEPTED),
    { data: p, isLoading: m } = x(N, n),
    [C, w] = (0, J.useState)(!1),
    [T, O] = (0, J.useState)(!1),
    [k, A] = (0, J.useState)(null),
    [j, M] = (0, J.useState)(!1),
    P = E(`chronicle-permissions`, {
      queryConfig: {
        intervalMs: 1e3,
        refetchIntervalInBackground: !0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
      },
    }),
    I = i(p?.config, ne) === !0,
    L = i(p?.config, F) === !0,
    R = l.isPending || j || f,
    re = R || !I,
    B = we({
      accessibilityStatus: P.data?.accessibility,
      errorMessage: k,
      isSidecarPresent: P.data?.chronicleSidecarPresent === !0,
      isUpdatingChronicle: j,
      processState: P.data?.chronicleSidecarProcessState ?? `disabled`,
      screenRecordingStatus: P.data?.screenRecording,
    }),
    V = r.formatMessage({
      id: `settings.general.experimentalFeatures.chronicle.name`,
      defaultMessage: `Chronicle research preview`,
      description: `Name of the Chronicle experimental feature`,
    });
  (0, J.useEffect)(() => {
    T && G(B.kind) && s(t, a.CHRONICLE_SETUP_COMPLETION_PENDING, !0);
  }, [T, t, B.kind]);
  let H = async ({ rememberConsentAccepted: n, showSetupDialog: r }) => {
      let i = L;
      (M(!0), A(null), w(!1), O(r));
      try {
        (n === !0 && (await s(t, a.CHRONICLE_CONSENT_ACCEPTED, !0)),
          r || s(t, a.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          await l.mutateAsync({ enabled: !0 }),
          e?.(i, !0),
          await o.invalidateQueries({ queryKey: D(`chronicle-permissions`) }));
      } catch (e) {
        let n = Ze(e);
        (s(t, a.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          A(n),
          g.error(`Failed to enable Chronicle`, {
            safe: { errorMessage: n },
            sensitive: { error: e },
          }));
      } finally {
        M(!1);
      }
    },
    ie = async () => {
      let n = L;
      (M(!0), A(null), s(t, a.CHRONICLE_SETUP_COMPLETION_PENDING, !1));
      try {
        (await l.mutateAsync({ enabled: !1 }), e?.(n, !1));
      } catch {
      } finally {
        M(!1);
      }
    };
  return m
    ? (0, X.jsx)(X.Fragment, {})
    : (0, X.jsxs)(X.Fragment, {
        children: [
          (0, X.jsx)(Te, {
            label: V,
            description: (0, X.jsx)(Ve, {
              isCheckingPermissions: P.data == null && P.isFetching,
              permissions: P.data,
              chronicleFeatureEnabled: L,
              onOpenChronicleSetup: () => {
                (A(null), O(!0));
              },
            }),
            control: (0, X.jsx)(z, {
              disabled: I,
              tooltipContent: (0, X.jsx)(y, {
                id: `settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip`,
                defaultMessage: `Enable memories to use Chronicle`,
                description: `Tooltip shown when the Chronicle toggle is disabled because Memories is disabled`,
              }),
              children: (0, X.jsx)(`span`, {
                className: h(`inline-flex`, !I && `cursor-not-allowed`),
                tabIndex: I ? void 0 : 0,
                children: (0, X.jsx)(me, {
                  checked: L,
                  className: I ? void 0 : `pointer-events-none`,
                  disabled: re,
                  onChange: (e) => {
                    if (e) {
                      if (u === !0) {
                        H({ showSetupDialog: !1 });
                        return;
                      }
                      w(!0);
                      return;
                    }
                    ie();
                  },
                  ariaLabel: r.formatMessage(
                    {
                      id: `settings.general.experimentalFeatures.chronicle.buttonAriaLabel`,
                      defaultMessage: `Toggle {featureName}`,
                      description: `Aria label for toggling the Chronicle experimental feature`,
                    },
                    { featureName: V },
                  ),
                }),
              }),
            }),
          }),
          (0, X.jsx)(ze, {
            open: C,
            onOpenChange: w,
            chronicleDisplayName: V,
            isPending: R,
            onContinue: () => {
              H({ rememberConsentAccepted: !0, showSetupDialog: !0 });
            },
          }),
          (0, X.jsx)(Se, {
            open: T,
            setupState: B,
            onOpenChange: (e) => {
              (e || s(t, a.CHRONICLE_SETUP_COMPLETION_PENDING, !1), O(e));
            },
            onAskCodex: () => {
              (s(t, a.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
                O(!1),
                c({ prefillPrompt: Ce }));
            },
          }),
        ],
      });
}
function ze(e) {
  let t = (0, q.c)(37),
    {
      isPending: n,
      open: r,
      chronicleDisplayName: i,
      onContinue: a,
      onOpenChange: o,
    } = e,
    s = ee(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (0, X.jsx)(U, {
        asChild: !0,
        children: (0, X.jsx)(`h2`, { className: `sr-only`, children: i }),
      })),
      (t[0] = i),
      (t[1] = c));
  let l;
  t[2] === s
    ? (l = t[3])
    : ((l = s.formatMessage({
        id: `settings.general.experimentalFeatures.chronicle.consentTitle`,
        defaultMessage: `Enable Chronicle research preview`,
        description: `Title for the Chronicle consent dialog`,
      })),
      (t[2] = s),
      (t[3] = l));
  let u;
  t[4] === l
    ? (u = t[5])
    : ((u = (0, X.jsx)(ae, { title: l })), (t[4] = l), (t[5] = u));
  let d;
  t[6] !== c || t[7] !== u
    ? ((d = (0, X.jsxs)(ie, { children: [c, u] })),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f, p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(`p`, {
        children: (0, X.jsx)(y, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyIntro`,
          defaultMessage: `Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, Codex references what you’ve seen to provide more helpful, contextual responses to prompts like “finish what I was doing” or “update this dashboard.”`,
          description: `Introductory body copy for the Chronicle consent dialog`,
        }),
      })),
      (p = (0, X.jsx)(`p`, {
        children: (0, X.jsx)(y, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyConsiderations`,
          defaultMessage: `Be mindful of the following considerations before enabling Chronicle:`,
          description: `Body copy before the considerations list in the Chronicle consent dialog`,
        }),
      })),
      (t[9] = f),
      (t[10] = p))
    : ((f = t[9]), (p = t[10]));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(`li`, {
        children: (0, X.jsx)(y, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyCost`,
          defaultMessage: `<strong>Cost</strong>: Chronicle uses image inputs and runs in the background, which consumes rate limits quickly.`,
          description: `Chronicle consent dialog list item describing rate limit cost`,
          values: { strong: Be },
        }),
      })),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(`li`, {
        children: (0, X.jsx)(y, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyPrivacy`,
          defaultMessage: `<strong>Privacy</strong>: Chronicle screen captures can include sensitive information visible on your screen. (It does not have access to your microphone or system audio.) Don’t use Chronicle to record meetings or communications with others without their consent. Pause Chronicle when viewing content you do not want remembered in memories.`,
          description: `Chronicle consent dialog list item describing privacy risk`,
          values: { strong: $ },
        }),
      })),
      (t[12] = h))
    : (h = t[12]);
  let g, _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsxs)(`ul`, {
        className: `list-disc space-y-1 pl-5`,
        children: [
          m,
          h,
          (0, X.jsx)(`li`, {
            children: (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyPromptInjection`,
              defaultMessage: `<strong>Prompt injection</strong>: Using Chronicle increases risk to prompt injection attacks from screen content. For instance, if you browse a site with malicious agent instructions, Codex may follow those instructions.`,
              description: `Chronicle consent dialog list item describing prompt injection risk`,
              values: { strong: Q },
            }),
          }),
        ],
      })),
      (g = (0, X.jsx)(`p`, {
        children: (0, X.jsx)(y, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageHeading`,
          defaultMessage: `How it works:`,
          description: `Heading before Chronicle consent dialog details about screen capture processing and storage`,
        }),
      })),
      (t[13] = g),
      (t[14] = _))
    : ((g = t[13]), (_ = t[14]));
  let v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsxs)(`ul`, {
        className: `list-disc space-y-1 pl-5`,
        children: [
          (0, X.jsx)(`li`, {
            children: (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageProcessing`,
              defaultMessage: `To generate memories, the screen captures are processed on our servers and then deleted.`,
              description: `Chronicle consent dialog list item describing server processing for generating memories`,
            }),
          }),
          (0, X.jsx)(`li`, {
            children: (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageLocal`,
              defaultMessage: `Screen captures are temporarily stored on device, and memories are also stored on device. Both are stored unencrypted, so be aware that other applications on your computer may have access to these files. When Codex uses memories in a chat, they may be used to improve our models, if allowed in your ChatGPT settings.`,
              description: `Chronicle consent dialog list item describing local screen capture and memory storage`,
            }),
          }),
        ],
      })),
      (t[15] = v))
    : (v = t[15]);
  let b;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsxs)(ie, {
        className: `min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 text-token-foreground/70`,
        children: [
          f,
          p,
          _,
          g,
          v,
          (0, X.jsx)(`p`, {
            children: (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyDisableIntro`,
              defaultMessage: `You can disable Chronicle at any time, which will stop screen captures going forward. <link>Learn more.</link>`,
              description: `Closing body copy in the Chronicle consent dialog`,
              values: { link: Z },
            }),
          }),
        ],
      })),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] === o
    ? (x = t[18])
    : ((x = () => {
        o(!1);
      }),
      (t[17] = o),
      (t[18] = x));
  let S;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsx)(y, {
        id: `settings.general.experimentalFeatures.chronicle.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Chronicle consent dialog`,
      })),
      (t[19] = S))
    : (S = t[19]);
  let C;
  t[20] !== n || t[21] !== x
    ? ((C = (0, X.jsx)(B, {
        color: `ghost`,
        disabled: n,
        onClick: x,
        children: S,
      })),
      (t[20] = n),
      (t[21] = x),
      (t[22] = C))
    : (C = t[22]);
  let w;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(y, {
        id: `settings.general.experimentalFeatures.chronicle.continue`,
        defaultMessage: `Continue`,
        description: `Continue button label for the Chronicle consent dialog`,
      })),
      (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] !== n || t[25] !== a
    ? ((T = (0, X.jsx)(B, {
        color: `primary`,
        loading: n,
        onClick: a,
        children: w,
      })),
      (t[24] = n),
      (t[25] = a),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] !== C || t[28] !== T
    ? ((E = (0, X.jsx)(ie, {
        children: (0, X.jsxs)(ce, { className: le, children: [C, T] }),
      })),
      (t[27] = C),
      (t[28] = T),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] !== E || t[31] !== d
    ? ((D = (0, X.jsxs)(se, {
        className: `max-h-[calc(100vh-6rem)] min-h-0`,
        children: [d, b, E],
      })),
      (t[30] = E),
      (t[31] = d),
      (t[32] = D))
    : (D = t[32]);
  let O;
  return (
    t[33] !== o || t[34] !== r || t[35] !== D
      ? ((O = (0, X.jsx)(oe, {
          open: r,
          onOpenChange: o,
          size: `default`,
          children: D,
        })),
        (t[33] = o),
        (t[34] = r),
        (t[35] = D),
        (t[36] = O))
      : (O = t[36]),
    O
  );
}
function Z(e) {
  return (0, X.jsx)(`a`, {
    className: `text-token-link`,
    href: `https://developers.openai.com/codex/memories/chronicle`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Q(e) {
  return (0, X.jsx)(`span`, {
    className: `font-bold text-token-foreground/90`,
    children: e,
  });
}
function $(e) {
  return (0, X.jsx)(`span`, {
    className: `font-bold text-token-foreground/90`,
    children: e,
  });
}
function Be(e) {
  return (0, X.jsx)(`span`, {
    className: `font-bold text-token-foreground/90`,
    children: e,
  });
}
function Ve(e) {
  let t = (0, q.c)(11),
    {
      isCheckingPermissions: n,
      onOpenChronicleSetup: r,
      permissions: i,
      chronicleFeatureEnabled: a,
    } = e,
    o = i?.accessibility === `granted` && i.screenRecording === `granted`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(`span`, {
        children: (0, X.jsx)(y, {
          id: `settings.general.experimentalFeatures.chronicle.description`,
          defaultMessage: `Augment memories with screen context so Codex can help with anything you’re working on. <link>Learn more</link>`,
          description: `Description for the Chronicle experimental feature`,
          values: { link: He },
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== a ||
  t[2] !== n ||
  t[3] !== r ||
  t[4] !== i?.accessibility ||
  t[5] !== i?.chronicleSidecarProcessState ||
  t[6] !== i?.screenRecording ||
  t[7] !== o
    ? ((c = a
        ? (0, X.jsx)(`span`, {
            className: `flex flex-wrap gap-x-3 gap-y-1 text-xs`,
            children: (0, X.jsx)(Ue, {
              accessibilityStatus: i?.accessibility,
              isChecking: n,
              processState: i?.chronicleSidecarProcessState,
              requiredPermissionsGranted: o,
              screenRecordingStatus: i?.screenRecording,
              onOpenChronicleSetup: r,
            }),
          })
        : null),
      (t[1] = a),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i?.accessibility),
      (t[5] = i?.chronicleSidecarProcessState),
      (t[6] = i?.screenRecording),
      (t[7] = o),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] === c
      ? (l = t[10])
      : ((l = (0, X.jsxs)(`span`, {
          className: `flex min-w-0 flex-col gap-1.5`,
          children: [s, c],
        })),
        (t[9] = c),
        (t[10] = l)),
    l
  );
}
function He(e) {
  return (0, X.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: `https://developers.openai.com/codex/memories/chronicle`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Ue(e) {
  let t = (0, q.c)(22),
    {
      accessibilityStatus: n,
      isChecking: r,
      onOpenChronicleSetup: i,
      processState: a,
      requiredPermissionsGranted: o,
      screenRecordingStatus: s,
    } = e,
    c;
  t[0] !== n || t[1] !== s
    ? ((c = Xe({ accessibilityStatus: n, screenRecordingStatus: s })),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = c;
  if (!r && l != null) {
    let e;
    return (
      t[3] !== l || t[4] !== i
        ? ((e = (0, X.jsx)(We, { permission: l, onOpenChronicleSetup: i })),
          (t[3] = l),
          (t[4] = i),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (!r && s === `granted`) {
    let e =
        a === `running` && o
          ? `font-medium text-token-charts-green`
          : `font-medium text-token-description-foreground`,
      s;
    t[6] === a
      ? (s = t[7])
      : ((s = (0, X.jsx)(qe, { processState: a })), (t[6] = a), (t[7] = s));
    let c;
    t[8] !== e || t[9] !== s
      ? ((c = (0, X.jsx)(y, {
          id: `settings.general.experimentalFeatures.chronicle.permission.runningStatus`,
          defaultMessage: `Status: {status}`,
          description: `Status shown when Chronicle has Screen Recording permission`,
          values: { status: (0, X.jsx)(`span`, { className: e, children: s }) },
        })),
        (t[8] = e),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]);
    let l;
    t[11] !== n || t[12] !== r || t[13] !== i
      ? ((l =
          n === `granted`
            ? null
            : (0, X.jsxs)(X.Fragment, {
                children: [
                  `; `,
                  (0, X.jsx)(`button`, {
                    className: `inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap underline-offset-2 hover:underline`,
                    onClick: i,
                    type: `button`,
                    children: (0, X.jsx)(y, {
                      id: `settings.general.experimentalFeatures.chronicle.permission.runningStatusAccessibility`,
                      defaultMessage: `Accessibility: {status} (open setup)`,
                      description: `Linked Accessibility status shown when Chronicle has Screen Recording permission but Accessibility is not granted`,
                      values: {
                        status: (0, X.jsx)(`span`, {
                          className: h(
                            `font-medium`,
                            Ye({ isChecking: r, status: n }),
                          ),
                          children: (0, X.jsx)(Je, {
                            isChecking: r,
                            status: n,
                          }),
                        }),
                      },
                    }),
                  }),
                ],
              })),
        (t[11] = n),
        (t[12] = r),
        (t[13] = i),
        (t[14] = l))
      : (l = t[14]);
    let u;
    return (
      t[15] !== c || t[16] !== l
        ? ((u = (0, X.jsx)(`span`, {
            className: `inline-flex min-w-0 whitespace-nowrap`,
            children: (0, X.jsxs)(`span`, {
              className: `min-w-0 truncate`,
              children: [c, l],
            }),
          })),
          (t[15] = c),
          (t[16] = l),
          (t[17] = u))
        : (u = t[17]),
      u
    );
  }
  let u;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(y, {
        id: `settings.general.experimentalFeatures.chronicle.permission.screenRecording`,
        defaultMessage: `Screen Recording`,
        description: `Label for the macOS Screen Recording permission status`,
      })),
      (t[18] = u))
    : (u = t[18]);
  let d;
  return (
    t[19] !== r || t[20] !== s
      ? ((d = (0, X.jsx)(Ke, { isChecking: r, label: u, status: s })),
        (t[19] = r),
        (t[20] = s),
        (t[21] = d))
      : (d = t[21]),
    d
  );
}
function We(e) {
  let t = (0, q.c)(8),
    { onOpenChronicleSetup: n, permission: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, X.jsx)(Ge, { permission: r })), (t[0] = r), (t[1] = i));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsx)(`span`, {
        className: `font-medium`,
        children: (0, X.jsx)(y, {
          id: `settings.general.experimentalFeatures.chronicle.permission.statusLabel`,
          defaultMessage: `Status`,
          description: `Label preceding the Chronicle status value`,
        }),
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i
    ? (o = t[4])
    : ((o = (0, X.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, X.jsx)(y, {
          id: `settings.general.experimentalFeatures.chronicle.permission.notGranted`,
          defaultMessage: `{statusLabel}: {permission} permission not granted (open setup)`,
          description: `Linked status shown when Chronicle does not have a required macOS permission`,
          values: { permission: i, statusLabel: a },
        }),
      })),
      (t[3] = i),
      (t[4] = o));
  let s;
  return (
    t[5] !== n || t[6] !== o
      ? ((s = (0, X.jsx)(`button`, {
          className: `inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap text-token-error-foreground underline-offset-2 hover:underline`,
          onClick: n,
          type: `button`,
          children: o,
        })),
        (t[5] = n),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function Ge(e) {
  let t = (0, q.c)(2),
    { permission: n } = e;
  switch (n) {
    case `accessibility`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permission.accessibility`,
              defaultMessage: `Accessibility`,
              description: `Label for the macOS Accessibility permission status`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `screen-recording`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permission.screenRecording`,
              defaultMessage: `Screen Recording`,
              description: `Label for the macOS Screen Recording permission status`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
function Ke(e) {
  let t = (0, q.c)(12),
    { isChecking: n, label: r, status: i } = e,
    a;
  t[0] !== n || t[1] !== i
    ? ((a = h(`font-medium`, Ye({ isChecking: n, status: i }))),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] !== n || t[4] !== i
    ? ((o = (0, X.jsx)(Je, { isChecking: n, status: i })),
      (t[3] = n),
      (t[4] = i),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] !== a || t[7] !== o
    ? ((s = (0, X.jsx)(`span`, { className: a, children: o })),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s))
    : (s = t[8]);
  let c;
  return (
    t[9] !== r || t[10] !== s
      ? ((c = (0, X.jsx)(`span`, {
          className: `inline-flex min-w-0 whitespace-nowrap`,
          children: (0, X.jsx)(`span`, {
            className: `min-w-0 truncate`,
            children: (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permission.status`,
              defaultMessage: `{permission}: {status}`,
              description: `Permission label and status for Chronicle`,
              values: { permission: r, status: s },
            }),
          }),
        })),
        (t[9] = r),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function qe(e) {
  let t = (0, q.c)(4),
    { processState: n } = e;
  switch (n) {
    case `disabled`:
    case `stopped`:
    case void 0: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.paused`,
              defaultMessage: `Paused`,
              description: `Chronicle status when the sidecar process is not running`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `restarting`:
    case `starting`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.starting`,
              defaultMessage: `Starting`,
              description: `Chronicle status when the sidecar process is starting`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `stopping`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.stopping`,
              defaultMessage: `Stopping`,
              description: `Chronicle status when the sidecar process is stopping`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `running`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.running`,
              defaultMessage: `Running`,
              description: `Chronicle status when the sidecar process is running`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function Je(e) {
  let t = (0, q.c)(7),
    { isChecking: n, status: r } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(y, {
            id: `settings.general.experimentalFeatures.chronicle.permissionStatus.checking`,
            defaultMessage: `Checking`,
            description: `Chronicle permission status while checking native state`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r == null) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(y, {
            id: `settings.general.experimentalFeatures.chronicle.permissionStatus.unknown`,
            defaultMessage: `Unknown`,
            description: `Chronicle permission status when native state cannot be read`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  switch (r) {
    case `granted`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.granted`,
              defaultMessage: `Granted`,
              description: `Chronicle permission status when granted`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `not-determined`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.notDetermined`,
              defaultMessage: `Not requested`,
              description: `Chronicle permission status before the user has been prompted`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `denied`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.denied`,
              defaultMessage: `Denied`,
              description: `Chronicle permission status when denied`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `restricted`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.restricted`,
              defaultMessage: `Restricted`,
              description: `Chronicle permission status when blocked by policy`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `unknown`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(y, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.unknown`,
              defaultMessage: `Unknown`,
              description: `Chronicle permission status when native state cannot be read`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
  }
}
function Ye({ isChecking: e, status: t }) {
  if (e || t == null) return `text-token-description-foreground`;
  switch (t) {
    case `granted`:
      return `text-token-charts-green`;
    case `denied`:
    case `restricted`:
      return `text-token-charts-red`;
    case `not-determined`:
    case `unknown`:
      return `text-token-description-foreground`;
  }
}
function Xe({ accessibilityStatus: e, screenRecordingStatus: t }) {
  return t === `denied`
    ? `screen-recording`
    : t === `granted` && e === `denied`
      ? `accessibility`
      : null;
}
function Ze(e) {
  return e instanceof Error ? e.message : `Failed to enable Chronicle`;
}
function Qe({
  chronicleResearchPreviewEnabled: e,
  chronicleResearchPreviewVisible: t,
  isMemoryFeatureEnabled: n,
  memoryConfig: r,
}) {
  return {
    chronicleResearchPreviewEnabled: e,
    chronicleResearchPreviewVisible: t,
    memoryFeatureEnabled: n,
    generateMemoriesEnabled: r.generateMemories,
    useMemoriesEnabled: r.useMemories,
    memoriesEnabled: n && r.generateMemories && r.useMemories,
    skipToolAssistedChatsEnabled: r.disableOnExternalContext,
  };
}
function $e(
  e,
  {
    chronicleResearchPreviewEnabled: t,
    isMemoryFeatureEnabled: n,
    memoryConfigPatch: r,
  } = {},
) {
  return Qe({
    chronicleResearchPreviewEnabled: t ?? e.chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible: e.chronicleResearchPreviewVisible,
    isMemoryFeatureEnabled: n ?? e.isMemoryFeatureEnabled,
    memoryConfig: { ...e.memoryConfig, ...r },
  });
}
function et({
  productLogger: e,
  previousEnabled: t,
  selectedEnabled: n,
  settingName: r,
  state: i,
}) {
  e.trackStructuredEvent(De, {
    settingName: r,
    previousEnabled: t,
    selectedEnabled: n,
    ...i,
  });
}
async function tt({ productLogger: e, write: t, ...n }) {
  try {
    await t();
  } catch {
    return;
  }
  et({ productLogger: e, ...n });
}
async function nt({
  productLogger: e,
  previousState: t,
  selectedEnabled: n,
  featureWrite: r,
  configWrite: i,
  chronicleDisable: a,
}) {
  let [o, s, c] = await Promise.allSettled([
      r(),
      i(),
      a?.() ?? Promise.resolve(),
    ]),
    l = o.status === `fulfilled` ? n : t.memoryFeatureEnabled,
    u = s.status === `fulfilled` ? n : t.generateMemoriesEnabled,
    d = s.status === `fulfilled` ? n : t.useMemoriesEnabled,
    f = {
      ...t,
      chronicleResearchPreviewEnabled:
        a != null && c.status === `fulfilled`
          ? !1
          : t.chronicleResearchPreviewEnabled,
      memoryFeatureEnabled: l,
      generateMemoriesEnabled: u,
      useMemoriesEnabled: d,
      memoriesEnabled: l && u && d,
    };
  f.memoriesEnabled !== t.memoriesEnabled &&
    et({
      productLogger: e,
      previousEnabled: t.memoriesEnabled,
      selectedEnabled: n,
      settingName: `memories`,
      state: f,
    });
}
function rt() {
  let e = (0, q.c)(98),
    t = b(v),
    n = ee(),
    r = S(A),
    { selectedHostId: a } = ye(),
    o = u(a),
    [s, l] = (0, J.useState)(!1),
    d = xe(),
    { data: p } = x(N, a),
    { data: m, isLoading: h } = x(I, a),
    g;
  e[0] === m
    ? (g = e[1])
    : ((g = m === void 0 ? [] : m), (e[0] = m), (e[1] = g));
  let _ = g,
    C;
  e[2] === d
    ? (C = e[3])
    : ((C = {
        queryConfig: {
          enabled: d,
          refetchOnMount: `always`,
          refetchOnWindowFocus: `always`,
        },
      }),
      (e[2] = d),
      (e[3] = C));
  let { data: w } = E(`chronicle-permissions`, C),
    T = ke(a),
    D;
  e[4] === a ? (D = e[5]) : ((D = { hostId: a }), (e[4] = a), (e[5] = D));
  let k = R(D),
    te = j(`875176429`),
    M = Fe(),
    P;
  e[6] === a
    ? (P = e[7])
    : ((P = () => c(`reset-memories-for-host`, { hostId: a })),
      (e[6] = a),
      (e[7] = P));
  let z, V;
  e[8] === t
    ? ((z = e[9]), (V = e[10]))
    : ((z = () => {
        (l(!1),
          t.get(re).success(
            (0, X.jsx)(y, {
              id: `settings.memory.resetSuccess`,
              defaultMessage: `Memories reset`,
              description: `Toast shown after resetting memories`,
            }),
          ));
      }),
      (V = () => {
        t.get(re).danger(
          (0, X.jsx)(y, {
            id: `settings.memory.resetError`,
            defaultMessage: `Unable to reset memories`,
            description: `Toast shown when resetting memories fails`,
          }),
        );
      }),
      (e[8] = t),
      (e[9] = z),
      (e[10] = V));
  let H;
  e[11] !== P || e[12] !== z || e[13] !== V
    ? ((H = { mutationFn: P, onSuccess: z, onError: V }),
      (e[11] = P),
      (e[12] = z),
      (e[13] = V),
      (e[14] = H))
    : (H = e[14]);
  let U = O(H),
    le = L(_, te),
    ue;
  e[15] === _ ? (ue = e[16]) : ((ue = _.find(at)), (e[15] = _), (e[16] = ue));
  let de = ue?.enabled === !0,
    fe = p?.config,
    pe;
  e[17] === fe ? (pe = e[18]) : ((pe = f(fe)), (e[17] = fe), (e[18] = pe));
  let W = pe,
    he = p?.config,
    ge;
  e[19] === he ? (ge = e[20]) : ((ge = i(he, F)), (e[19] = he), (e[20] = ge));
  let _e = ge === !0,
    ve = h || T.isPending || k.isPending || M.isPending || U.isPending,
    be = de && W.generateMemories && W.useMemories,
    Se = o.kind === `local`,
    G = Se && d && w?.chronicleSidecarPresent === !0,
    Ce;
  e[21] !== _e || e[22] !== de || e[23] !== W || e[24] !== G
    ? ((Ce = {
        chronicleResearchPreviewEnabled: _e,
        chronicleResearchPreviewVisible: G,
        isMemoryFeatureEnabled: de,
        memoryConfig: W,
      }),
      (e[21] = _e),
      (e[22] = de),
      (e[23] = W),
      (e[24] = G),
      (e[25] = Ce))
    : (Ce = e[25]);
  let we = Ce;
  if (!le) return null;
  let De;
  e[26] === we
    ? (De = e[27])
    : ((De = (e) => {
        let {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        } = e === void 0 ? {} : e;
        return $e(we, {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        });
      }),
      (e[26] = we),
      (e[27] = De));
  let Y = De,
    Ae;
  e[28] !== T ||
  e[29] !== M ||
  e[30] !== Y ||
  e[31] !== Se ||
  e[32] !== r ||
  e[33] !== k
    ? ((Ae = (e) => {
        nt({
          productLogger: r,
          previousState: Y(),
          selectedEnabled: e,
          featureWrite: () => k.mutateAsync({ featureName: ne, enabled: e }),
          configWrite: () =>
            T.mutateAsync({
              edits: [
                { keyPath: `memories.generate_memories`, value: e },
                { keyPath: `memories.use_memories`, value: e },
              ],
            }),
          ...(!e && Se
            ? { chronicleDisable: () => M.mutateAsync({ enabled: !1 }) }
            : {}),
        });
      }),
      (e[28] = T),
      (e[29] = M),
      (e[30] = Y),
      (e[31] = Se),
      (e[32] = r),
      (e[33] = k),
      (e[34] = Ae))
    : (Ae = e[34]);
  let je = Ae,
    Me;
  e[35] === U
    ? (Me = e[36])
    : ((Me = async () => {
        await U.mutateAsync();
      }),
      (e[35] = U),
      (e[36] = Me));
  let Ne = Me,
    Pe;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = (0, X.jsx)(y, {
        id: `settings.personalization.memory.title`,
        defaultMessage: `Memory (experimental)`,
        description: `Heading for memory settings in personalization`,
      })),
      (e[37] = Pe))
    : (Pe = e[37]);
  let Ie;
  e[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (0, X.jsx)(K.Header, {
        title: Pe,
        subtitle: (0, X.jsx)(y, {
          id: `settings.personalization.memory.subtitle`,
          defaultMessage: `Configure how Codex collects, retains, and consolidates memories. <a>Learn more</a>`,
          description: `Description for memory settings in personalization`,
          values: { a: it },
        }),
      })),
      (e[38] = Ie))
    : (Ie = e[38]);
  let Le, ze;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (0, X.jsx)(y, {
        id: `settings.memory.enableMemoriesLabel`,
        defaultMessage: `Enable memories`,
        description: `Label for enabling memories`,
      })),
      (ze = (0, X.jsx)(y, {
        id: `settings.memory.enableMemoriesDescription`,
        defaultMessage: `Generate new memories from chats and bring them into new chats`,
        description: `Description for enabling memories`,
      })),
      (e[39] = Le),
      (e[40] = ze))
    : ((Le = e[39]), (ze = e[40]));
  let Z;
  e[41] === n
    ? (Z = e[42])
    : ((Z = n.formatMessage({
        id: `settings.memory.enableMemoriesAriaLabel`,
        defaultMessage: `Enable memories`,
        description: `Accessible label for enabling memories`,
      })),
      (e[41] = n),
      (e[42] = Z));
  let Q;
  e[43] !== ve || e[44] !== be || e[45] !== je || e[46] !== Z
    ? ((Q = (0, X.jsx)(Te, {
        label: Le,
        description: ze,
        control: (0, X.jsx)(me, {
          checked: be,
          disabled: ve,
          ariaLabel: Z,
          onChange: je,
        }),
      })),
      (e[43] = ve),
      (e[44] = be),
      (e[45] = je),
      (e[46] = Z),
      (e[47] = Q))
    : (Q = e[47]);
  let $;
  e[48] !== Y || e[49] !== r || e[50] !== G
    ? (($ = G
        ? (0, X.jsx)(Re, {
            onChronicleResearchPreviewToggled: (e, t) => {
              et({
                productLogger: r,
                previousEnabled: e,
                selectedEnabled: t,
                settingName: `chronicle_research_preview`,
                state: Y({ chronicleResearchPreviewEnabled: t }),
              });
            },
          })
        : null),
      (e[48] = Y),
      (e[49] = r),
      (e[50] = G),
      (e[51] = $))
    : ($ = e[51]);
  let Be, Ve;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, X.jsx)(y, {
        id: `settings.memory.noToolContextLabel`,
        defaultMessage: `Skip tool-assisted chats`,
        description: `Label for disabling memory generation when MCP or web search is used`,
      })),
      (Ve = (0, X.jsx)(y, {
        id: `settings.memory.noToolContextDescription`,
        defaultMessage: `Do not generate memories from chats that used MCP tools or web search`,
        description: `Description for disabling memory generation when MCP or web search is used`,
      })),
      (e[52] = Be),
      (e[53] = Ve))
    : ((Be = e[52]), (Ve = e[53]));
  let He = W.disableOnExternalContext,
    Ue = ve || !de,
    We;
  e[54] === n
    ? (We = e[55])
    : ((We = n.formatMessage({
        id: `settings.memory.noToolContextAriaLabel`,
        defaultMessage: `Skip tool-assisted chats`,
        description: `Accessible label for disabling memory generation when MCP or web search is used`,
      })),
      (e[54] = n),
      (e[55] = We));
  let Ge;
  e[56] !== T ||
  e[57] !== Y ||
  e[58] !== W.disableOnExternalContext ||
  e[59] !== r
    ? ((Ge = (e) => {
        tt({
          productLogger: r,
          previousEnabled: W.disableOnExternalContext,
          selectedEnabled: e,
          settingName: `skip_tool_assisted_chats`,
          state: Y({ memoryConfigPatch: { disableOnExternalContext: e } }),
          write: () =>
            T.mutateAsync({
              edits: [
                { keyPath: `memories.disable_on_external_context`, value: e },
                {
                  keyPath: `memories.no_memories_if_mcp_or_web_search`,
                  value: null,
                },
              ],
            }),
        });
      }),
      (e[56] = T),
      (e[57] = Y),
      (e[58] = W.disableOnExternalContext),
      (e[59] = r),
      (e[60] = Ge))
    : (Ge = e[60]);
  let Ke;
  e[61] !== W.disableOnExternalContext ||
  e[62] !== Ue ||
  e[63] !== We ||
  e[64] !== Ge
    ? ((Ke = (0, X.jsx)(Te, {
        label: Be,
        description: Ve,
        control: (0, X.jsx)(me, {
          checked: He,
          disabled: Ue,
          ariaLabel: We,
          onChange: Ge,
        }),
      })),
      (e[61] = W.disableOnExternalContext),
      (e[62] = Ue),
      (e[63] = We),
      (e[64] = Ge),
      (e[65] = Ke))
    : (Ke = e[65]);
  let qe, Je;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (0, X.jsx)(y, {
        id: `settings.memory.resetMemoriesLabel`,
        defaultMessage: `Reset memories`,
        description: `Label for resetting memories`,
      })),
      (Je = (0, X.jsx)(y, {
        id: `settings.memory.resetMemoriesDescription`,
        defaultMessage: `Delete all Codex memories`,
        description: `Description for resetting memories`,
      })),
      (e[66] = qe),
      (e[67] = Je))
    : ((qe = e[66]), (Je = e[67]));
  let Ye, Xe;
  e[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = () => {
        l(!0);
      }),
      (Xe = (0, X.jsx)(y, {
        id: `settings.memory.resetMemoriesButton`,
        defaultMessage: `Reset`,
        description: `Button label for resetting memories`,
      })),
      (e[68] = Ye),
      (e[69] = Xe))
    : ((Ye = e[68]), (Xe = e[69]));
  let Ze;
  e[70] === U.isPending
    ? (Ze = e[71])
    : ((Ze = (0, X.jsx)(Te, {
        label: qe,
        description: Je,
        control: (0, X.jsx)(B, {
          color: `danger`,
          disabled: U.isPending,
          loading: U.isPending,
          onClick: Ye,
          children: Xe,
        }),
      })),
      (e[70] = U.isPending),
      (e[71] = Ze));
  let Qe;
  e[72] !== Q || e[73] !== $ || e[74] !== Ke || e[75] !== Ze
    ? ((Qe = (0, X.jsxs)(K, {
        className: `gap-2`,
        children: [
          Ie,
          (0, X.jsx)(K.Content, {
            children: (0, X.jsxs)(Ee, { children: [Q, $, Ke, Ze] }),
          }),
        ],
      })),
      (e[72] = Q),
      (e[73] = $),
      (e[74] = Ke),
      (e[75] = Ze),
      (e[76] = Qe))
    : (Qe = e[76]);
  let rt;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (0, X.jsx)(ie, {
        children: (0, X.jsx)(ae, {
          title: (0, X.jsx)(y, {
            id: `settings.memory.resetDialogTitle`,
            defaultMessage: `Reset all memories?`,
            description: `Title for reset memories confirmation dialog`,
          }),
          subtitle: (0, X.jsx)(y, {
            id: `settings.memory.resetDialogSubtitle`,
            defaultMessage: `This deletes all Codex memories.`,
            description: `Subtitle for reset memories confirmation dialog`,
          }),
        }),
      })),
      (e[77] = rt))
    : (rt = e[77]);
  let ot, st;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = () => {
        l(!1);
      }),
      (st = (0, X.jsx)(y, {
        id: `settings.memory.resetDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for reset memories dialog`,
      })),
      (e[78] = ot),
      (e[79] = st))
    : ((ot = e[78]), (st = e[79]));
  let ct;
  e[80] === U.isPending
    ? (ct = e[81])
    : ((ct = (0, X.jsx)(B, {
        color: `ghost`,
        disabled: U.isPending,
        onClick: ot,
        children: st,
      })),
      (e[80] = U.isPending),
      (e[81] = ct));
  let lt;
  e[82] !== Ne || e[83] !== r
    ? ((lt = () => {
        (r.trackStructuredEvent(Oe, { resetScope: `all_memories` }), Ne());
      }),
      (e[82] = Ne),
      (e[83] = r),
      (e[84] = lt))
    : (lt = e[84]);
  let ut;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = (0, X.jsx)(y, {
        id: `settings.memory.resetDialogConfirm`,
        defaultMessage: `Reset`,
        description: `Confirm button label for reset memories dialog`,
      })),
      (e[85] = ut))
    : (ut = e[85]);
  let dt;
  e[86] !== U.isPending || e[87] !== lt
    ? ((dt = (0, X.jsx)(B, {
        color: `danger`,
        loading: U.isPending,
        onClick: lt,
        children: ut,
      })),
      (e[86] = U.isPending),
      (e[87] = lt),
      (e[88] = dt))
    : (dt = e[88]);
  let ft;
  e[89] !== ct || e[90] !== dt
    ? ((ft = (0, X.jsxs)(se, {
        children: [
          rt,
          (0, X.jsx)(ie, { children: (0, X.jsxs)(ce, { children: [ct, dt] }) }),
        ],
      })),
      (e[89] = ct),
      (e[90] = dt),
      (e[91] = ft))
    : (ft = e[91]);
  let pt;
  e[92] !== s || e[93] !== ft
    ? ((pt = (0, X.jsx)(oe, {
        open: s,
        onOpenChange: l,
        size: `compact`,
        children: ft,
      })),
      (e[92] = s),
      (e[93] = ft),
      (e[94] = pt))
    : (pt = e[94]);
  let mt;
  return (
    e[95] !== Qe || e[96] !== pt
      ? ((mt = (0, X.jsxs)(X.Fragment, { children: [Qe, pt] })),
        (e[95] = Qe),
        (e[96] = pt),
        (e[97] = mt))
      : (mt = e[97]),
    mt
  );
}
function it(e) {
  return (0, X.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: `https://developers.openai.com/codex/memories`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function at(e) {
  return e.name === ne;
}
function ot() {
  let e = (0, q.c)(35),
    t = ee(),
    n = j(`1444479692`),
    { selectedHostId: r } = ye(),
    i;
  e[0] === r ? (i = e[1]) : ((i = { hostId: r }), (e[0] = r), (e[1] = i));
  let { personality: a, setPersonality: o } = _e(i),
    s;
  e[2] === t
    ? (s = e[3])
    : ((s = t.formatMessage({
        id: `composer.personalitySlashCommand.label.friendly`,
        defaultMessage: `Friendly`,
        description: `Label for the friendly personality`,
      })),
      (e[2] = t),
      (e[3] = s));
  let c;
  e[4] === t
    ? (c = e[5])
    : ((c = t.formatMessage({
        id: `composer.personalitySlashCommand.description.friendly`,
        defaultMessage: `Warm, collaborative, and helpful`,
        description: `Description for the friendly personality option`,
      })),
      (e[4] = t),
      (e[5] = c));
  let l;
  e[6] !== s || e[7] !== c
    ? ((l = { value: `friendly`, label: s, description: c }),
      (e[6] = s),
      (e[7] = c),
      (e[8] = l))
    : (l = e[8]);
  let u;
  e[9] === t
    ? (u = e[10])
    : ((u = t.formatMessage({
        id: `composer.personalitySlashCommand.label.pragmatic`,
        defaultMessage: `Pragmatic`,
        description: `Label for the pragmatic personality`,
      })),
      (e[9] = t),
      (e[10] = u));
  let d;
  e[11] === t
    ? (d = e[12])
    : ((d = t.formatMessage({
        id: `composer.personalitySlashCommand.description.pragmatic`,
        defaultMessage: `Concise, task-focused, and direct`,
        description: `Description for the pragmatic personality option`,
      })),
      (e[11] = t),
      (e[12] = d));
  let f;
  e[13] !== u || e[14] !== d
    ? ((f = { value: `pragmatic`, label: u, description: d }),
      (e[13] = u),
      (e[14] = d),
      (e[15] = f))
    : (f = e[15]);
  let p;
  e[16] !== l || e[17] !== f
    ? ((p = [l, f]), (e[16] = l), (e[17] = f), (e[18] = p))
    : (p = e[18]);
  let m = p,
    h;
  e[19] !== a || e[20] !== m
    ? ((h = m.find((e) => e.value === a) ?? m[0]),
      (e[19] = a),
      (e[20] = m),
      (e[21] = h))
    : (h = e[21]);
  let g = h,
    _;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(he, { slug: `personalization` })), (e[22] = _))
    : (_ = e[22]);
  let v;
  e[23] !== n || e[24] !== a || e[25] !== m || e[26] !== g || e[27] !== o
    ? ((v = n
        ? (0, X.jsx)(K, {
            children: (0, X.jsx)(K.Content, {
              children: (0, X.jsx)(Ee, {
                children: (0, X.jsx)(Te, {
                  label: (0, X.jsx)(y, {
                    id: `settings.personalization.personality.label`,
                    defaultMessage: `Personality`,
                    description: `Label for personality selection in personalization settings`,
                  }),
                  description: (0, X.jsx)(y, {
                    id: `settings.personalization.personality.description`,
                    defaultMessage: `Choose a default tone for Codex responses`,
                    description: `Description for personality selection in personalization settings`,
                  }),
                  control: (0, X.jsx)(W, {
                    triggerButton: (0, X.jsx)(ge, {
                      children: (0, X.jsx)(`span`, {
                        className: `flex items-center gap-1.5`,
                        children: g.label,
                      }),
                    }),
                    align: `end`,
                    children: (0, X.jsx)(`div`, {
                      className: `w-[260px] max-w-xs space-y-1`,
                      children: m.map((e) =>
                        (0, X.jsx)(
                          pe.Item,
                          {
                            onSelect: () => {
                              o(e.value);
                            },
                            RightIcon: a === e.value ? ue : void 0,
                            children: (0, X.jsxs)(`div`, {
                              className: `flex flex-col items-start gap-0.5`,
                              children: [
                                (0, X.jsx)(`span`, {
                                  className: `text-sm`,
                                  children: e.label,
                                }),
                                (0, X.jsx)(`span`, {
                                  className: `text-xs text-token-text-secondary`,
                                  children: e.description,
                                }),
                              ],
                            }),
                          },
                          e.value,
                        ),
                      ),
                    }),
                  }),
                }),
              }),
            }),
          })
        : null),
      (e[23] = n),
      (e[24] = a),
      (e[25] = m),
      (e[26] = g),
      (e[27] = o),
      (e[28] = v))
    : (v = e[28]);
  let b;
  e[29] === r
    ? (b = e[30])
    : ((b = (0, X.jsx)(st, { hostId: r }, r)), (e[29] = r), (e[30] = b));
  let x;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsx)(H, {
        electron: !0,
        extension: !0,
        children: (0, X.jsx)(rt, {}),
      })),
      (e[31] = x))
    : (x = e[31]);
  let S;
  return (
    e[32] !== v || e[33] !== b
      ? ((S = (0, X.jsxs)(be, { title: _, children: [v, b, x] })),
        (e[32] = v),
        (e[33] = b),
        (e[34] = S))
      : (S = e[34]),
    S
  );
}
function st(e) {
  let t = (0, q.c)(40),
    { hostId: n } = e,
    r = b(v),
    i = ee(),
    a = _(),
    [o, s] = (0, J.useState)(null),
    { data: c, error: l, isFetching: u, refetch: d } = x(Y, n),
    f;
  t[0] !== i || t[1] !== a || t[2] !== r
    ? ((f = (e, t) => {
        (a.setQueryData(D(`codex-agents-md`, { hostId: t.hostId }), {
          path: e.path,
          contents: t.contents,
        }),
          s(null),
          r.get(re).success(
            i.formatMessage({
              id: `settings.personalization.agents.save.success`,
              defaultMessage: `Saved agents.md`,
              description: `Toast shown when agents.md is saved`,
            }),
          ));
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = r),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] !== i || t[5] !== r
    ? ((p = () => {
        r.get(re).danger(
          i.formatMessage({
            id: `settings.personalization.agents.save.error`,
            defaultMessage: `Unable to save agents.md`,
            description: `Toast shown when agents.md save fails`,
          }),
        );
      }),
      (t[4] = i),
      (t[5] = r),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== f || t[8] !== p
    ? ((m = { onSuccess: f, onError: p }), (t[7] = f), (t[8] = p), (t[9] = m))
    : (m = t[9]);
  let h = T(`codex-agents-md-save`, m),
    g = c?.contents ?? ``,
    S = o ?? g,
    C = o != null && o !== g,
    w = c != null,
    E = !w && u,
    O = h.isPending,
    k = l != null && c == null,
    A;
  t[10] !== S ||
  t[11] !== n ||
  t[12] !== C ||
  t[13] !== w ||
  t[14] !== O ||
  t[15] !== h
    ? ((A = () => {
        !w || !C || O || h.mutate({ hostId: n, contents: S });
      }),
      (t[10] = S),
      (t[11] = n),
      (t[12] = C),
      (t[13] = w),
      (t[14] = O),
      (t[15] = h),
      (t[16] = A))
    : (A = t[16]);
  let j = A,
    te = w && C && !O,
    M;
  t[17] === j
    ? (M = t[18])
    : ((M = (e) => {
        (e.preventDefault(), j());
      }),
      (t[17] = j),
      (t[18] = M));
  let N;
  (t[19] !== te || t[20] !== M
    ? ((N = { accelerator: `CmdOrCtrl+S`, enabled: te, onKeyDown: M }),
      (t[19] = te),
      (t[20] = M),
      (t[21] = N))
    : (N = t[21]),
    ve(N));
  let P;
  t[22] === i
    ? (P = t[23])
    : ((P = i.formatMessage({
        id: `settings.personalization.agents.placeholder`,
        defaultMessage: `Add your custom instructions…`,
        description: `Placeholder text for personal agents editor`,
      })),
      (t[22] = i),
      (t[23] = P));
  let ne = P,
    F;
  t[24] === i
    ? (F = t[25])
    : ((F = i.formatMessage({
        id: `settings.personalization.agents.title`,
        defaultMessage: `Custom instructions`,
        description: `Heading for personal agents settings section`,
      })),
      (t[24] = i),
      (t[25] = F));
  let I = F,
    L;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, X.jsx)(y, {
        id: `settings.personalization.agents.title`,
        defaultMessage: `Custom instructions`,
        description: `Heading for personal agents settings section`,
      })),
      (t[26] = L))
    : (L = t[26]);
  let R;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, X.jsx)(K.Header, {
        title: L,
        subtitle: (0, X.jsx)(y, {
          id: `settings.personalization.agents.description`,
          defaultMessage: `Give Codex extra instructions and context for your project. <a>Learn more</a>`,
          description: `Description for personal agents settings section`,
          values: { a: ct },
        }),
      })),
      (t[27] = R))
    : (R = t[27]);
  let z;
  return (
    t[28] !== g ||
    t[29] !== I ||
    t[30] !== S ||
    t[31] !== j ||
    t[32] !== C ||
    t[33] !== E ||
    t[34] !== w ||
    t[35] !== O ||
    t[36] !== ne ||
    t[37] !== d ||
    t[38] !== k
      ? ((z = (0, X.jsxs)(K, {
          className: `gap-2`,
          children: [
            R,
            (0, X.jsx)(K.Content, {
              children: k
                ? (0, X.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `text-sm text-token-text-secondary`,
                        children: (0, X.jsx)(y, {
                          id: `settings.personalization.agents.loadError`,
                          defaultMessage: `Unable to load agents.md.`,
                          description: `Error message shown when agents.md fails to load`,
                        }),
                      }),
                      (0, X.jsx)(B, {
                        className: `shrink-0`,
                        color: `secondary`,
                        onClick: () => {
                          d();
                        },
                        size: `toolbar`,
                        children: (0, X.jsx)(y, {
                          id: `settings.personalization.agents.retry`,
                          defaultMessage: `Retry`,
                          description: `Button label to retry loading agents.md`,
                        }),
                      }),
                    ],
                  })
                : (0, X.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [
                      E
                        ? (0, X.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                            children: [
                              (0, X.jsx)(V, { className: `icon-xs` }),
                              (0, X.jsx)(y, {
                                id: `settings.personalization.agents.loading`,
                                defaultMessage: `Loading agents.md…`,
                                description: `Loading label for agents.md editor`,
                              }),
                            ],
                          })
                        : (0, X.jsx)(`textarea`, {
                            "aria-label": I,
                            id: `personal-agents-editor`,
                            className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                            disabled: !w || O,
                            placeholder: ne,
                            rows: 12,
                            value: S,
                            onChange: (e) => {
                              let t = e.target.value;
                              s(t === g ? null : t);
                            },
                          }),
                      (0, X.jsx)(`div`, {
                        className: `flex items-center justify-end gap-2`,
                        children: (0, X.jsx)(B, {
                          color: `primary`,
                          disabled: !C || !w,
                          loading: O,
                          onClick: j,
                          size: `toolbar`,
                          children: (0, X.jsx)(y, {
                            id: `settings.personalization.agents.save`,
                            defaultMessage: `Save`,
                            description: `Save button label for personal agents editor`,
                          }),
                        }),
                      }),
                    ],
                  }),
            }),
          ],
        })),
        (t[28] = g),
        (t[29] = I),
        (t[30] = S),
        (t[31] = j),
        (t[32] = C),
        (t[33] = E),
        (t[34] = w),
        (t[35] = O),
        (t[36] = ne),
        (t[37] = d),
        (t[38] = k),
        (t[39] = z))
      : (z = t[39]),
    z
  );
}
function ct(e) {
  return (0, X.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: fe,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
export { ot as PersonalizationSettings };
//# sourceMappingURL=personalization-settings-dhoZvyRJ.js.map
