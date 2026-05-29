import { t as e } from "./jsx-runtime.js";
import {
  G as t,
  S as n,
  U as r,
  Z as i,
  _ as a,
  f as o,
  wt as s,
} from "./setting-storage.js";
import { n as c } from "./rpc-DqwD0euc.js";
import { o as l } from "./statsig--EYRNU53.js";
import { t as u } from "./button.js";
import {
  a as d,
  d as f,
  i as p,
  l as m,
  n as h,
  r as g,
  t as _,
} from "./dialog-layout.js";
var v = o(n, `extension-info`, { staleTime: a.INFINITE });
function y() {
  return l(`2574306096`);
}
var b = s(),
  x = e(),
  S = `Describe what I'm working on right now and suggest how I can use Codex to help.`;
function C(e) {
  let n = (0, b.c)(43),
    { open: a, setupState: o, onAskCodex: s, onOpenChange: c } = e,
    l = t(),
    y = o.kind === `ready`,
    S = o.kind === `failed`,
    C = o.kind === `screen-recording-permission-needed`,
    T = o.kind === `accessibility-permission-needed`,
    D = C || T,
    A = y || S || D,
    F;
  n[0] !== l || n[1] !== T || n[2] !== C || n[3] !== o.status
    ? ((F = C
        ? o.status === `denied`
          ? l.formatMessage({
              id: `settings.general.experimentalFeatures.chronicle.screenRecordingSettingsName`,
              defaultMessage: `Screen Recording`,
              description: `Name of the macOS Screen Recording permission settings page`,
            })
          : null
        : T && o.status === `denied`
          ? l.formatMessage({
              id: `settings.general.experimentalFeatures.chronicle.accessibilitySettingsName`,
              defaultMessage: `Accessibility`,
              description: `Name of the macOS Accessibility permission settings page`,
            })
          : null),
      (n[0] = l),
      (n[1] = T),
      (n[2] = C),
      (n[3] = o.status),
      (n[4] = F))
    : (F = n[4]);
  let I = F,
    { data: L } = i(v),
    R = L?.appName ?? `Codex`,
    z;
  n[5] !== A || n[6] !== c
    ? ((z = (e) => {
        (!e && !A) || c(e);
      }),
      (n[5] = A),
      (n[6] = c),
      (n[7] = z))
    : (z = n[7]);
  let B = z,
    V = k,
    H;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = { onEscapeKeyDown: O }), (n[8] = H))
    : (H = n[8]);
  let U;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, x.jsx)(f, {
        asChild: !0,
        children: (0, x.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, x.jsx)(r, {
            id: `settings.general.experimentalFeatures.chronicle.setupTitle`,
            defaultMessage: `Setting up Chronicle`,
            description: `Accessible title for the Chronicle setup dialog`,
          }),
        }),
      })),
      (n[9] = U))
    : (U = n[9]);
  let W;
  n[10] === o
    ? (W = n[11])
    : ((W = (0, x.jsxs)(d, {
        children: [
          U,
          (0, x.jsx)(p, {
            title: (0, x.jsx)(M, { setupState: o }),
            subtitle: (0, x.jsx)(N, { setupState: o }),
          }),
        ],
      })),
      (n[10] = o),
      (n[11] = W));
  let G;
  n[12] !== R || n[13] !== o
    ? ((G = (0, x.jsx)(`p`, {
        className: `text-token-description-foreground`,
        children: (0, x.jsx)(P, { bundleName: R, setupState: o }),
      })),
      (n[12] = R),
      (n[13] = o),
      (n[14] = G))
    : (G = n[14]);
  let K;
  n[15] !== S || n[16] !== o.message
    ? ((K = S
        ? (0, x.jsx)(`p`, {
            className: `text-token-error-foreground`,
            children: o.message,
          })
        : null),
      (n[15] = S),
      (n[16] = o.message),
      (n[17] = K))
    : (K = n[17]);
  let q;
  n[18] !== G || n[19] !== K
    ? ((q = (0, x.jsxs)(d, { className: `space-y-3`, children: [G, K] })),
      (n[18] = G),
      (n[19] = K),
      (n[20] = q))
    : (q = n[20]);
  let J;
  n[21] !== R || n[22] !== I || n[23] !== L?.appIconMedium
    ? ((J =
        I == null
          ? null
          : (0, x.jsx)(d, {
              children: (0, x.jsx)(j, {
                appIconMedium: L?.appIconMedium ?? null,
                bundleName: R,
                permissionSettingsName: I,
                onDragStart: V,
              }),
            })),
      (n[21] = R),
      (n[22] = I),
      (n[23] = L?.appIconMedium),
      (n[24] = J))
    : (J = n[24]);
  let Y;
  n[25] !== S ||
  n[26] !== y ||
  n[27] !== T ||
  n[28] !== D ||
  n[29] !== C ||
  n[30] !== s ||
  n[31] !== c
    ? ((Y =
        y || S || D
          ? (0, x.jsx)(d, {
              children: (0, x.jsx)(g, {
                className: _,
                children: C
                  ? (0, x.jsx)(u, {
                      color: `primary`,
                      onClick: E,
                      children: (0, x.jsx)(r, {
                        id: `settings.general.experimentalFeatures.chronicle.openScreenRecordingSettings`,
                        defaultMessage: `Open System Settings`,
                        description: `Button that opens macOS System Settings to the Screen Recording permission page`,
                      }),
                    })
                  : T
                    ? (0, x.jsx)(u, {
                        color: `primary`,
                        onClick: w,
                        children: (0, x.jsx)(r, {
                          id: `settings.general.experimentalFeatures.chronicle.openAccessibilitySettings`,
                          defaultMessage: `Open System Settings`,
                          description: `Button that opens macOS System Settings to the Accessibility permission page`,
                        }),
                      })
                    : y
                      ? (0, x.jsx)(u, {
                          color: `primary`,
                          onClick: s,
                          children: (0, x.jsx)(r, {
                            id: `settings.general.experimentalFeatures.chronicle.askCodex`,
                            defaultMessage: `Try it out`,
                            description: `Button that opens a new thread to try out Codex Chronicle`,
                          }),
                        })
                      : (0, x.jsx)(u, {
                          color: `ghost`,
                          onClick: () => {
                            c(!1);
                          },
                          children: (0, x.jsx)(r, {
                            id: `settings.general.experimentalFeatures.chronicle.setupClose`,
                            defaultMessage: `Close`,
                            description: `Button that closes the Chronicle setup dialog`,
                          }),
                        }),
              }),
            })
          : null),
      (n[25] = S),
      (n[26] = y),
      (n[27] = T),
      (n[28] = D),
      (n[29] = C),
      (n[30] = s),
      (n[31] = c),
      (n[32] = Y))
    : (Y = n[32]);
  let X;
  n[33] !== Y || n[34] !== W || n[35] !== q || n[36] !== J
    ? ((X = (0, x.jsxs)(h, { children: [W, q, J, Y] })),
      (n[33] = Y),
      (n[34] = W),
      (n[35] = q),
      (n[36] = J),
      (n[37] = X))
    : (X = n[37]);
  let Z;
  return (
    n[38] !== A || n[39] !== B || n[40] !== a || n[41] !== X
      ? ((Z = (0, x.jsx)(m, {
          open: a,
          onOpenChange: B,
          contentProps: H,
          shouldIgnoreClickOutside: !0,
          showDialogClose: A,
          size: `default`,
          children: X,
        })),
        (n[38] = A),
        (n[39] = B),
        (n[40] = a),
        (n[41] = X),
        (n[42] = Z))
      : (Z = n[42]),
    Z
  );
}
function w() {
  c.systemPermissions?.openAccessibilitySettings().catch(T);
}
function T() {}
function E() {
  c.systemPermissions?.openScreenRecordingSettings().catch(D);
}
function D() {}
function O(e) {
  e.preventDefault();
}
function k(e) {
  (e.preventDefault(),
    c.systemPermissions?.startPermissionSettingsAppDrag().catch(A));
}
function A() {}
function j(e) {
  let n = (0, b.c)(15),
    {
      appIconMedium: i,
      bundleName: a,
      permissionSettingsName: o,
      onDragStart: s,
    } = e,
    c = t(),
    l;
  n[0] !== c || n[1] !== o
    ? ((l = c.formatMessage(
        {
          id: `settings.general.experimentalFeatures.chronicle.permissionDragAppLabel`,
          defaultMessage: `Drag Codex into {permissionSettingsName} settings`,
          description: `Accessible label for the draggable Codex app icon used to add Codex to a macOS permission settings page`,
        },
        { permissionSettingsName: o },
      )),
      (n[0] = c),
      (n[1] = o),
      (n[2] = l))
    : (l = n[2]);
  let u;
  n[3] === i
    ? (u = n[4])
    : ((u =
        i == null
          ? null
          : (0, x.jsx)(`img`, {
              alt: ``,
              "aria-hidden": !0,
              className: `h-14 w-14 object-contain`,
              draggable: !1,
              src: i,
            })),
      (n[3] = i),
      (n[4] = u));
  let d;
  n[5] !== l || n[6] !== u
    ? ((d = (0, x.jsx)(`div`, {
        "aria-label": l,
        className: `flex h-16 w-16 shrink-0 items-center justify-center`,
        role: `img`,
        children: u,
      })),
      (n[5] = l),
      (n[6] = u),
      (n[7] = d))
    : (d = n[7]);
  let f;
  n[8] !== a || n[9] !== o
    ? ((f = (0, x.jsx)(`p`, {
        className: `text-sm text-token-description-foreground`,
        children: (0, x.jsx)(r, {
          id: `settings.general.experimentalFeatures.chronicle.permissionDragApp`,
          defaultMessage: `If {bundleName} doesn't appear in the list, drag this app icon into {permissionSettingsName} settings`,
          values: { bundleName: a, permissionSettingsName: o },
          description: `Instruction shown next to a draggable app icon when a macOS permission settings page does not list the app`,
        }),
      })),
      (n[8] = a),
      (n[9] = o),
      (n[10] = f))
    : (f = n[10]);
  let p;
  return (
    n[11] !== s || n[12] !== d || n[13] !== f
      ? ((p = (0, x.jsxs)(`div`, {
          className: `flex cursor-grab items-center gap-3 rounded-lg border border-token-border bg-token-bg-fog p-2.5 active:cursor-grabbing`,
          draggable: !0,
          onDragStart: s,
          children: [d, f],
        })),
        (n[11] = s),
        (n[12] = d),
        (n[13] = f),
        (n[14] = p))
      : (p = n[14]),
    p
  );
}
function M(e) {
  let t = (0, b.c)(5),
    { setupState: n } = e;
  if (n.kind === `ready`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, x.jsx)(r, {
            id: `settings.general.experimentalFeatures.chronicle.setupReadyTitle`,
            defaultMessage: `Chronicle is ready to use!`,
            description: `Title shown when Chronicle setup has completed`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.kind === `failed`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, x.jsx)(r, {
            id: `settings.general.experimentalFeatures.chronicle.setupFailedTitle`,
            defaultMessage: `Chronicle setup failed`,
            description: `Title shown when Chronicle setup fails`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (n.kind === `screen-recording-permission-needed`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, x.jsx)(r, {
            id: `settings.general.experimentalFeatures.chronicle.setupScreenRecordingPermissionNeededTitle`,
            defaultMessage: `Allow Screen Recording to use Chronicle`,
            description: `Title shown when Chronicle setup is waiting for macOS Screen Recording permission`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (n.kind === `accessibility-permission-needed`) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, x.jsx)(r, {
            id: `settings.general.experimentalFeatures.chronicle.setupAccessibilityPermissionNeededTitle`,
            defaultMessage: `Allow Accessibility to use Chronicle`,
            description: `Title shown when Chronicle setup is waiting for macOS Accessibility permission`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let i;
  return (
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, x.jsx)(r, {
          id: `settings.general.experimentalFeatures.chronicle.setupInProgressTitle`,
          defaultMessage: `Setting up Chronicle`,
          description: `Title shown while Chronicle setup is in progress`,
        })),
        (t[4] = i))
      : (i = t[4]),
    i
  );
}
function N(e) {
  let t = (0, b.c)(3),
    { setupState: n } = e;
  switch (n.kind) {
    case `preparing`:
    case `starting`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, x.jsx)(r, {
              id: `settings.general.experimentalFeatures.chronicle.setupWaiting`,
              defaultMessage: `Waiting…`,
              description: `Short status shown while Chronicle setup is waiting for prerequisites to complete`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `screen-recording-permission-needed`:
    case `accessibility-permission-needed`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, x.jsx)(x.Fragment, {})), (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `ready`:
    case `failed`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, x.jsx)(x.Fragment, {})), (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
function P(e) {
  let t = (0, b.c)(9),
    { bundleName: n, setupState: i } = e;
  switch (i.kind) {
    case `preparing`:
    case `starting`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, x.jsx)(x.Fragment, {})), (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `screen-recording-permission-needed`: {
      if (i.status === `restricted`) {
        let e;
        return (
          t[1] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, x.jsx)(r, {
                id: `settings.general.experimentalFeatures.chronicle.setupScreenRecordingRestricted`,
                defaultMessage: `Screen Recording is restricted by macOS or your organization. Chronicle will continue automatically if the restriction is removed and Codex receives Screen Recording permission.`,
                description: `Status shown when macOS Screen Recording permission is blocked by policy`,
              })),
              (t[1] = e))
            : (e = t[1]),
          e
        );
      }
      let e;
      return (
        t[2] === n
          ? (e = t[3])
          : ((e = (0, x.jsx)(r, {
              id: `settings.general.experimentalFeatures.chronicle.setupScreenRecordingDenied`,
              defaultMessage: `Please open System Settings → Privacy & Security → Screen Recording and enable {bundleName}. You may need to restart Codex to apply the change.`,
              description: `Instructions shown when macOS Screen Recording permission has been denied`,
              values: { bundleName: n },
            })),
            (t[2] = n),
            (t[3] = e)),
        e
      );
    }
    case `accessibility-permission-needed`: {
      if (i.status === `restricted`) {
        let e;
        return (
          t[4] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, x.jsx)(r, {
                id: `settings.general.experimentalFeatures.chronicle.setupAccessibilityRestricted`,
                defaultMessage: `Accessibility is restricted by macOS or your organization. Chronicle will continue automatically if the restriction is removed and Codex receives Accessibility permission`,
                description: `Status shown when macOS Accessibility permission is blocked by policy`,
              })),
              (t[4] = e))
            : (e = t[4]),
          e
        );
      }
      let e;
      return (
        t[5] === n
          ? (e = t[6])
          : ((e = (0, x.jsx)(r, {
              id: `settings.general.experimentalFeatures.chronicle.setupAccessibilityDenied`,
              defaultMessage: `Please open System Settings → Privacy & Security → Accessibility and enable {bundleName}.`,
              description: `Instructions shown when macOS Accessibility permission has not been granted`,
              values: { bundleName: n },
            })),
            (t[5] = n),
            (t[6] = e)),
        e
      );
    }
    case `ready`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, x.jsx)(r, {
              id: `settings.general.experimentalFeatures.chronicle.setupReady`,
              defaultMessage: `You can pause Chronicle at any time by clicking "Pause Chronicle" in the Codex menu bar.`,
              description: `Status when Chronicle setup has completed`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `failed`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, x.jsx)(r, {
              id: `settings.general.experimentalFeatures.chronicle.setupFailed`,
              defaultMessage: `Chronicle setup failed.`,
              description: `Status when Chronicle setup fails`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
  }
}
function F({
  accessibilityStatus: e,
  errorMessage: t,
  isSidecarPresent: n,
  isUpdatingChronicle: r,
  processState: i,
  screenRecordingStatus: a,
}) {
  return t == null
    ? r
      ? { kind: `preparing` }
      : n
        ? L(a)
          ? { kind: `screen-recording-permission-needed`, status: a }
          : L(e)
            ? { kind: `accessibility-permission-needed`, status: e }
            : i === `running` && a === `granted` && e === `granted`
              ? { kind: `ready` }
              : { kind: `starting` }
        : {
            kind: `failed`,
            message: `Chronicle sidecar binary is missing from app resources.`,
          }
    : { kind: `failed`, message: t };
}
function I(e) {
  switch (e) {
    case `screen-recording-permission-needed`:
    case `accessibility-permission-needed`:
    case `ready`:
      return !0;
    case `preparing`:
    case `starting`:
    case `failed`:
      return !1;
  }
}
function L(e) {
  return e != null && e !== `granted`;
}
export { y as a, C as i, I as n, v as o, S as r, F as t };
//# sourceMappingURL=chronicle-setup-state-hlbtWEMB.js.map
