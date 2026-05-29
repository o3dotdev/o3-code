import { s as e } from "./chunk-Bj-mKKzh.js";
import { Ut as t } from "./src-C.js";
import {
  P as n,
  Xs as r,
  gn as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as a, t as o } from "./jsx-runtime.js";
import { t as s } from "./clsx-BcPLHiun.js";
import "./marked.esm-BR-H6018.js";
import {
  C as c,
  G as l,
  L as u,
  U as d,
  Y as f,
  Z as p,
  b as m,
  wt as h,
  y as g,
} from "./setting-storage.js";
import "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import {
  S as _,
  o as v,
  p as y,
  x as b,
  y as x,
} from "./config-queries-BBeTQbuo.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import { t as S } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import { t as C } from "./link-external-BPZREBQk.js";
import "./x-C_RDKBp5.js";
import { r as w } from "./settings-sections-1YVifu-Z.js";
import "./_defineProperty.js";
import "./homepage-logo.js";
import { t as T } from "./loading-page.js";
import { t as E } from "./arrow-left.js";
import { h as D } from "./links.js";
import { t as O } from "./trash.js";
import "./chevron-NmAOI_v1.js";
import { t as k } from "./settings.cog.js";
import { t as A } from "./plus.js";
import { t as j } from "./sortBy.js";
import "./use-connected-remote-connections.js";
import { t as M } from "./toggle.js";
import { t as ee } from "./regenerate.js";
import { i as te, r as ne } from "./settings-shared-BTHmEeQY.js";
import { t as re } from "./settings-host-context-ILiCQlCE.js";
import { t as ie } from "./settings-content-layout.js";
import { n as ae } from "./settings-row.js";
import { n as N, t as P } from "./settings-group.js";
import { t as F } from "./tabs.js";
import { t as I } from "./control-group-BZVbcCTL.js";
var L = e(j(), 1),
  oe = e(i(), 1),
  R = e(a(), 1),
  z = e(t(), 1),
  B = h(),
  V = o();
function H(e) {
  let t = (0, B.c)(52),
    n = e.inputType === w.String,
    r = e.inputType === w.Array,
    i = e.inputType === w.Record,
    a = l(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `settings.editRow.headerPlaceholder`,
        defaultMessage: `Key`,
        description: `Placeholder for record key input`,
      })),
      (t[0] = a),
      (t[1] = o));
  let c = o,
    u;
  t[2] === a
    ? (u = t[3])
    : ((u = a.formatMessage({
        id: `settings.editRow.valuePlaceholder`,
        defaultMessage: `Value`,
        description: `Placeholder for record value input`,
      })),
      (t[2] = a),
      (t[3] = u));
  let d = u,
    f;
  t[4] === a
    ? (f = t[5])
    : ((f = a.formatMessage({
        id: `settings.editRow.removeEntry`,
        defaultMessage: `Remove entry`,
        description: `Label for removing an entry from a list`,
      })),
      (t[4] = a),
      (t[5] = f));
  let p = f,
    m,
    h;
  if (
    t[6] !== c ||
    t[7] !== e.inputType ||
    t[8] !== e.placeHolderValue ||
    t[9] !== d
  ) {
    if (((m = c), (h = d), e.inputType === w.Record)) {
      let [t] = e.placeHolderValue;
      ((m = t?.key ?? c), (h = t?.value ?? d));
    }
    ((t[6] = c),
      (t[7] = e.inputType),
      (t[8] = e.placeHolderValue),
      (t[9] = d),
      (t[10] = m),
      (t[11] = h));
  } else ((m = t[10]), (h = t[11]));
  let g;
  bb0: {
    if (!r) {
      let e;
      (t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = []), (t[12] = e))
        : (e = t[12]),
        (g = e));
      break bb0;
    }
    if (e.value.length > 0) {
      g = e.value;
      break bb0;
    }
    let n;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = [``]), (t[13] = n))
      : (n = t[13]),
      (g = n));
  }
  let _ = g,
    v;
  bb1: {
    if (!i) {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = []), (t[14] = e))
        : (e = t[14]),
        (v = e));
      break bb1;
    }
    if (e.value.length > 0) {
      v = e.value;
      break bb1;
    }
    let n;
    (t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = [{ key: ``, value: `` }]), (t[15] = n))
      : (n = t[15]),
      (v = n));
  }
  let y = v;
  if (n) {
    let r;
    t[16] === e.title
      ? (r = t[17])
      : ((r = (0, V.jsx)(`p`, {
          className: `text-base font-medium text-token-text-primary`,
          children: e.title,
        })),
        (t[16] = e.title),
        (t[17] = r));
    let i =
        n && typeof e.placeHolderValue == `string`
          ? e.placeHolderValue
          : void 0,
      a;
    t[18] === e
      ? (a = t[19])
      : ((a = (t) => {
          e.onEdit(t.target.value);
        }),
        (t[18] = e),
        (t[19] = a));
    let o;
    t[20] !== e.value || t[21] !== i || t[22] !== a
      ? ((o = (0, V.jsx)(U, {
          className: `text-base`,
          value: e.value,
          placeholder: i,
          onChange: a,
        })),
        (t[20] = e.value),
        (t[21] = i),
        (t[22] = a),
        (t[23] = o))
      : (o = t[23]);
    let s;
    return (
      t[24] !== r || t[25] !== o
        ? ((s = (0, V.jsxs)(`div`, {
            className: `flex flex-col gap-2 rounded-lg bg-token-input-background px-3 py-2`,
            children: [r, o],
          })),
          (t[24] = r),
          (t[25] = o),
          (t[26] = s))
        : (s = t[26]),
      s
    );
  }
  let b;
  t[27] === e.title
    ? (b = t[28])
    : ((b = (0, V.jsx)(`p`, {
        className: `text-base font-medium text-token-text-primary`,
        children: e.title,
      })),
      (t[27] = e.title),
      (t[28] = b));
  let x;
  t[29] !== r ||
  t[30] !== _ ||
  t[31] !== e ||
  t[32] !== y ||
  t[33] !== m ||
  t[34] !== h ||
  t[35] !== p
    ? ((x = r
        ? _.map((t, n) =>
            (0, V.jsxs)(
              `div`,
              {
                className: `flex items-center gap-2`,
                children: [
                  (0, V.jsx)(U, {
                    className: `text-base`,
                    value: t,
                    placeholder:
                      r && e.placeHolderValue.length > 0
                        ? (e.placeHolderValue[n] ?? e.placeHolderValue[0] ?? ``)
                        : ``,
                    onChange: (t) => {
                      let r = [..._];
                      ((r[n] = t.target.value), e.onEdit(r));
                    },
                  }),
                  (0, V.jsx)(S, {
                    color: `ghost`,
                    size: `icon`,
                    disabled: _.length <= 1 && t.trim().length === 0,
                    "aria-label": p,
                    onClick: () => {
                      let t = e.value.filter((e, t) => t !== n);
                      e.onEdit(t);
                    },
                    children: (0, V.jsx)(O, { className: `icon-2xs` }),
                  }),
                ],
              },
              `list-${n}`,
            ),
          )
        : y.map((t, n) =>
            (0, V.jsxs)(
              `div`,
              {
                className: `grid grid-cols-[1fr_1fr_auto] items-center gap-2`,
                children: [
                  (0, V.jsx)(U, {
                    className: `text-sm`,
                    placeholder: m,
                    value: t.key,
                    onChange: (t) => {
                      let r = [...y];
                      ((r[n] = { ...r[n], key: t.target.value }), e.onEdit(r));
                    },
                  }),
                  (0, V.jsx)(U, {
                    className: `text-sm`,
                    placeholder: h,
                    value: t.value,
                    onChange: (t) => {
                      let r = [...y];
                      ((r[n] = { ...r[n], value: t.target.value }),
                        e.onEdit(r));
                    },
                  }),
                  (0, V.jsx)(S, {
                    color: `ghost`,
                    size: `icon`,
                    disabled:
                      y.length <= 1 &&
                      t.key.trim().length === 0 &&
                      t.value.trim().length === 0,
                    "aria-label": p,
                    onClick: () => {
                      let t = e.value.filter((e, t) => t !== n);
                      e.onEdit(t);
                    },
                    children: (0, V.jsx)(O, { className: `icon-2xs` }),
                  }),
                ],
              },
              `record-${n}`,
            ),
          )),
      (t[29] = r),
      (t[30] = _),
      (t[31] = e),
      (t[32] = y),
      (t[33] = m),
      (t[34] = h),
      (t[35] = p),
      (t[36] = x))
    : (x = t[36]);
  let C;
  t[37] === x
    ? (C = t[38])
    : ((C = (0, V.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: x,
      })),
      (t[37] = x),
      (t[38] = C));
  let T;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = s(
        `text-token-text-secondary/90 justify-center rounded-md border border-dashed text-base`,
      )),
      (t[39] = T))
    : (T = t[39]);
  let E;
  t[40] !== r || t[41] !== e || t[42] !== y
    ? ((E = () => {
        if (r) {
          let t = e.value,
            n = t.length > 0 ? [...t, ``] : [``];
          e.onEdit(n);
          return;
        }
        let t = [...y, { key: ``, value: `` }];
        e.onEdit(t);
      }),
      (t[40] = r),
      (t[41] = e),
      (t[42] = y),
      (t[43] = E))
    : (E = t[43]);
  let D;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, V.jsx)(A, { className: `icon-2xs` })), (t[44] = D))
    : (D = t[44]);
  let k = e.addLabel ? e.addLabel : null,
    j;
  t[45] !== k || t[46] !== E
    ? ((j = (0, V.jsxs)(S, {
        color: `secondary`,
        size: `toolbar`,
        className: T,
        onClick: E,
        children: [D, k],
      })),
      (t[45] = k),
      (t[46] = E),
      (t[47] = j))
    : (j = t[47]);
  let M;
  return (
    t[48] !== j || t[49] !== b || t[50] !== C
      ? ((M = (0, V.jsxs)(`div`, {
          className: `flex flex-col gap-3 rounded-lg bg-token-input-background px-3 py-2`,
          children: [b, C, j],
        })),
        (t[48] = j),
        (t[49] = b),
        (t[50] = C),
        (t[51] = M))
      : (M = t[51]),
    M
  );
}
function U(e) {
  let t = (0, B.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = s(
        `bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full rounded-md border border-token-input-border px-2.5 py-1.5 outline-none focus:border-token-focus-border`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, V.jsx)(`input`, { className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function se(e) {
  return e
    ? e.trim().length === 0
      ? e
      : e === e.toLowerCase()
        ? `${e[0]?.toUpperCase() ?? ``}${e.slice(1)}`
        : e
    : ``;
}
function ce({
  config: e,
  initialKey: t,
  onSave: n,
  onCancel: r,
  onUninstall: i,
}) {
  let a = (0, R.useMemo)(() => G(e, t), [e, t]),
    [o, s] = (0, R.useState)(a),
    [c, u] = (0, R.useState)(!1),
    [f, p] = (0, R.useState)(null),
    m = l(),
    h = o.label.trim(),
    g = !(0, z.default)(o, a),
    _ =
      o.transportType === `streamable_http`
        ? o.http.url.trim().length === 0
        : o.stdio.command.trim().length === 0,
    v = async () => {
      if (!(h.length === 0 || _)) {
        (p(null), u(!0));
        try {
          await n(K(o), o.label);
        } catch (e) {
          p(
            W(
              e,
              m.formatMessage({
                id: `settings.mcp.detail.saveError`,
                defaultMessage: `Could not save MCP server`,
                description: `Error shown when saving an MCP server fails`,
              }),
            ),
          );
        } finally {
          u(!1);
        }
      }
    },
    y = e.name && e.name.trim().length > 0,
    b = async () => {
      if (i) {
        (p(null), u(!0));
        try {
          await i(o.label);
        } catch (e) {
          p(
            W(
              e,
              m.formatMessage({
                id: `settings.mcp.detail.uninstallError`,
                defaultMessage: `Could not uninstall MCP server`,
                description: `Error shown when uninstalling an MCP server fails`,
              }),
            ),
          );
        } finally {
          u(!1);
        }
      }
    },
    x = y
      ? (0, V.jsx)(d, {
          id: `settings.mcp.detail.titleExisting`,
          defaultMessage: `Update {name} MCP`,
          description: `Title for the MCP server detail view when editing an existing server`,
          values: { name: se(e.name) },
        })
      : (0, V.jsx)(d, {
          id: `settings.mcp.detail.titleNew`,
          defaultMessage: `Connect to a custom MCP`,
          description: `Title for the MCP server detail view when adding a new server`,
        });
  return (0, V.jsx)(ie, {
    backSlot: (0, V.jsxs)(S, {
      color: `ghost`,
      size: `toolbar`,
      onClick: () => {
        r();
      },
      children: [
        (0, V.jsx)(E, { className: `icon-xs` }),
        (0, V.jsx)(d, {
          id: `settings.mcp.detail.back`,
          defaultMessage: `Back`,
          description: `Button label to go back to MCP settings`,
        }),
      ],
    }),
    title: x,
    subtitle: y
      ? null
      : (0, V.jsxs)(`a`, {
          className: `inline-flex items-center gap-1 text-sm text-token-text-secondary hover:text-token-text-primary`,
          href: D,
          target: `_blank`,
          rel: `noreferrer`,
          "aria-label": m.formatMessage({
            id: `settings.mcp.detail.docs`,
            defaultMessage: `Open MCP documentation`,
            description: `Aria label for MCP docs link in detail header`,
          }),
          children: [
            (0, V.jsx)(d, {
              id: `settings.mcp.detail.docs.link`,
              defaultMessage: `Docs`,
              description: `Tooltip link label for MCP docs on add page`,
            }),
            (0, V.jsx)(C, { className: `icon-xxs` }),
          ],
        }),
    action:
      i && o.label.trim().length > 0
        ? (0, V.jsxs)(S, {
            color: `danger`,
            size: `toolbar`,
            disabled: c,
            onClick: () => {
              b();
            },
            children: [
              (0, V.jsx)(O, { className: `icon-xs` }),
              (0, V.jsx)(d, {
                id: `settings.mcp.detail.uninstall`,
                defaultMessage: `Uninstall`,
                description: `Button label to uninstall an MCP server`,
              }),
            ],
          })
        : null,
    children: (0, V.jsxs)(`div`, {
      className: `relative`,
      children: [
        c ? (0, V.jsx)(T, { overlay: !0 }) : null,
        (0, V.jsx)(P, {
          children: (0, V.jsxs)(P.Content, {
            children: [
              y
                ? (0, V.jsx)(`p`, {
                    className: `text-sm text-token-text-secondary`,
                    children: (0, V.jsx)(d, {
                      id: `settings.mcp.detail.switchTransportNotice`,
                      defaultMessage: `If you would like to switch MCP server type, please uninstall first.`,
                      description: `Notice explaining how to change MCP transport type`,
                    }),
                  })
                : (0, V.jsxs)(N, {
                    children: [
                      (0, V.jsx)(H, {
                        title: (0, V.jsx)(d, {
                          id: `settings.mcp.detail.name`,
                          defaultMessage: `Name`,
                          description: `Name for MCP server display name`,
                        }),
                        value: o.label,
                        placeHolderValue: `MCP server name`,
                        inputType: w.String,
                        onEdit: (e) => {
                          s((t) => ({ ...t, label: e }));
                        },
                      }),
                      (0, V.jsx)(F, {
                        tabs: [
                          {
                            key: `stdio`,
                            name: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.transport.stdio`,
                              defaultMessage: `STDIO`,
                              description: `Label for stdio transport toggle`,
                            }),
                          },
                          {
                            key: `streamable_http`,
                            name: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.transport.http`,
                              defaultMessage: `Streamable HTTP`,
                              description: `Label for HTTP transport toggle`,
                            }),
                          },
                        ],
                        selectedKey: o.transportType,
                        onSelect: (e) => {
                          s((t) => ({ ...t, transportType: e }));
                        },
                      }),
                    ],
                  }),
              (0, V.jsx)(N, {
                children:
                  o.transportType === `stdio`
                    ? (0, V.jsxs)(V.Fragment, {
                        children: [
                          (0, V.jsx)(H, {
                            title: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.command`,
                              defaultMessage: `Command to launch`,
                              description: `Label for MCP stdio command`,
                            }),
                            value: o.stdio.command,
                            placeHolderValue: `openai-dev-mcp serve-sqlite`,
                            inputType: w.String,
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, command: e },
                              }));
                            },
                          }),
                          (0, V.jsx)(H, {
                            title: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.args`,
                              defaultMessage: `Arguments`,
                              description: `Label for MCP stdio arguments`,
                            }),
                            value: o.stdio.args,
                            placeHolderValue: [],
                            inputType: w.Array,
                            addLabel: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.addArgument`,
                              defaultMessage: `Add argument`,
                              description: `Add button label for MCP stdio arguments`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, args: e },
                              }));
                            },
                          }),
                          (0, V.jsx)(H, {
                            title: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.envVars`,
                              defaultMessage: `Environment variables`,
                              description: `Label for MCP stdio environment variables`,
                            }),
                            value: o.stdio.env,
                            placeHolderValue: [],
                            inputType: w.Record,
                            addLabel: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.addEnvVar`,
                              defaultMessage: `Add environment variable`,
                              description: `Add button label for MCP stdio environment variables`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, env: e },
                              }));
                            },
                          }),
                          (0, V.jsx)(H, {
                            title: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.envVarPassthrough`,
                              defaultMessage: `Environment variable passthrough`,
                              description: `Label for MCP stdio env var passthrough`,
                            }),
                            value: o.stdio.envVars,
                            placeHolderValue: [],
                            inputType: w.Array,
                            addLabel: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.addEnvVarPassthrough`,
                              defaultMessage: `Add variable`,
                              description: `Add button label for MCP stdio env var passthrough`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, envVars: e },
                              }));
                            },
                          }),
                          (0, V.jsx)(H, {
                            title: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.cwd`,
                              defaultMessage: `Working directory`,
                              description: `Label for MCP stdio working directory`,
                            }),
                            value: o.stdio.cwd,
                            placeHolderValue: `~/code`,
                            inputType: w.String,
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, cwd: e },
                              }));
                            },
                          }),
                        ],
                      })
                    : (0, V.jsxs)(V.Fragment, {
                        children: [
                          (0, V.jsx)(H, {
                            title: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.http.url`,
                              defaultMessage: `URL`,
                              description: `Label for MCP HTTP URL`,
                            }),
                            value: o.http.url,
                            placeHolderValue: `https://mcp.example.com/mcp`,
                            inputType: w.String,
                            onEdit: (e) => {
                              s((t) => ({ ...t, http: { ...t.http, url: e } }));
                            },
                          }),
                          (0, V.jsx)(H, {
                            title: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.http.bearerToken`,
                              defaultMessage: `Bearer token env var`,
                              description: `Label for MCP HTTP bearer token env var`,
                            }),
                            value: o.http.bearerTokenEnvVar,
                            placeHolderValue: `MCP_BEARER_TOKEN`,
                            inputType: w.String,
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                http: { ...t.http, bearerTokenEnvVar: e },
                              }));
                            },
                          }),
                          (0, V.jsx)(H, {
                            title: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.http.headers`,
                              defaultMessage: `Headers`,
                              description: `Label for MCP HTTP headers`,
                            }),
                            value: o.http.httpHeaders,
                            placeHolderValue: [],
                            inputType: w.Record,
                            addLabel: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.http.addHeader`,
                              defaultMessage: `Add header`,
                              description: `Add button label for MCP HTTP headers`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                http: { ...t.http, httpHeaders: e },
                              }));
                            },
                          }),
                          (0, V.jsx)(H, {
                            title: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.http.envHeaders`,
                              defaultMessage: `Headers from environment variables`,
                              description: `Label for MCP HTTP env headers`,
                            }),
                            value: o.http.envHttpHeaders,
                            placeHolderValue: [],
                            inputType: w.Record,
                            addLabel: (0, V.jsx)(d, {
                              id: `settings.mcp.detail.http.addEnvHeader`,
                              defaultMessage: `Add variable`,
                              description: `Add button label for MCP HTTP env headers`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                http: { ...t.http, envHttpHeaders: e },
                              }));
                            },
                          }),
                        ],
                      }),
              }),
              f == null
                ? null
                : (0, V.jsx)(`p`, {
                    role: `alert`,
                    className: `rounded-md bg-token-input-validation-error-background/20 px-3 py-2 text-sm text-token-error-foreground`,
                    children: f,
                  }),
              (0, V.jsx)(`div`, {
                className: `flex justify-end`,
                children: (0, V.jsx)(S, {
                  color: `primary`,
                  size: `toolbar`,
                  disabled: h.length === 0 || !g || c || _,
                  onClick: v,
                  children: (0, V.jsx)(d, {
                    id: `settings.mcp.detail.save`,
                    defaultMessage: `Save`,
                    description: `Save button label on MCP server detail view`,
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function W(e, t) {
  return e instanceof Error && e.message.trim().length > 0 ? e.message : t;
}
function G(e, t) {
  let n = `command` in e ? `stdio` : `streamable_http`;
  return {
    base: {
      enabled: e.enabled ?? void 0,
      startup_timeout_sec: e.startup_timeout_sec ?? void 0,
      startup_timeout_ms: e.startup_timeout_ms ?? void 0,
      tool_timeout_sec: e.tool_timeout_sec ?? void 0,
      enabled_tools: e.enabled_tools ?? void 0,
      disabled_tools: e.disabled_tools ?? void 0,
    },
    label: t ?? e.name ?? ``,
    transportType: n,
    stdio: {
      command: `command` in e ? e.command : ``,
      args: `command` in e && e.args && e.args.length > 0 ? e.args : [],
      env: `command` in e && e.env ? q(e.env) : [],
      envVars:
        `command` in e && e.env_vars && e.env_vars.length > 0 ? e.env_vars : [],
      cwd: `command` in e && e.cwd ? e.cwd : ``,
    },
    http: {
      url: `url` in e ? e.url : ``,
      bearerTokenEnvVar:
        `url` in e && e.bearer_token_env_var ? e.bearer_token_env_var : ``,
      httpHeaders: `url` in e && e.http_headers ? q(e.http_headers) : [],
      envHttpHeaders:
        `url` in e && e.env_http_headers ? q(e.env_http_headers) : [],
    },
  };
}
function K(e) {
  let t = e.base;
  if (e.transportType === `streamable_http`) {
    let n = J(e.http.httpHeaders),
      r = J(e.http.envHttpHeaders);
    return {
      ...t,
      url: e.http.url,
      bearer_token_env_var:
        e.http.bearerTokenEnvVar.trim().length > 0
          ? e.http.bearerTokenEnvVar.trim()
          : void 0,
      http_headers: Object.keys(n).length > 0 ? n : void 0,
      env_http_headers: Object.keys(r).length > 0 ? r : void 0,
    };
  }
  let n = J(e.stdio.env),
    r = e.stdio.envVars.map((e) => e.trim()).filter((e) => e.length > 0),
    i = e.stdio.args.map((e) => e.trim()).filter((e) => e.length > 0);
  return {
    ...t,
    command: e.stdio.command,
    args: i.length > 0 ? i : void 0,
    env: Object.keys(n).length > 0 ? n : void 0,
    env_vars: r.length > 0 ? r : void 0,
    cwd: e.stdio.cwd.trim().length > 0 ? e.stdio.cwd.trim() : void 0,
  };
}
function q(e) {
  let t = Object.entries(e);
  return t.length === 0
    ? [{ key: ``, value: `` }]
    : t.map(([e, t]) => ({ key: e, value: t }));
}
function J(e) {
  let t = {};
  return (
    e.forEach(({ key: e, value: n }) => {
      let r = e.trim(),
        i = n.trim();
      r.length === 0 || i.length === 0 || (t[r] = i);
    }),
    t
  );
}
var le = `mcp-settings`,
  ue = { command: ``, args: [], env_vars: [], enabled: !0 };
function Y() {
  let { selectedHostId: e } = re(),
    { data: t } = x(null, { hostId: e }),
    { data: i, isFetching: a } = f(y, e),
    o = _({ hostId: e }),
    s = b({ hostId: e }),
    h = u(),
    C = l(),
    w = p(n),
    [T, E] = (0, R.useState)({}),
    [D, O] = (0, R.useState)([]),
    [k, A] = (0, R.useState)({}),
    [j, M] = (0, R.useState)(null),
    [F, I] = (0, R.useState)(null),
    z = t?.servers ?? {},
    B = t?.serverOrigins ?? {},
    H = t?.configWriteTarget ?? null,
    U = Object.keys(z),
    se = (0, L.default)(
      U,
      (e) => z[e]?.name?.trim() || e,
      (e) => e,
    ),
    W = new Set(Object.entries(z).flatMap(([e, t]) => [e, t.name ?? e])),
    G = D.includes(e),
    K = G ? (k[e] ?? []) : [],
    q = (0, L.default)(
      (t == null ? [] : (i?.data ?? [])).filter(
        (e) => !W.has(e.name) && !K.includes(e.name),
      ),
      (e) => e.name,
    ),
    J = U.length > 0,
    Y = q.length > 0,
    Z = {};
  i != null &&
    (i.data.forEach((e) => {
      Z[e.name] = e.authStatus;
    }),
    Object.entries(z).forEach(([e, t]) => {
      let n = Z[e] ?? (t.name == null ? void 0 : Z[t.name]);
      n != null && (Z[e] = n);
    }));
  let Q = () => {
      O((t) => (t.includes(e) ? t : [...t, e]));
    },
    $ = () => {
      (I(null), M(null));
    },
    pe = () => {
      if (H != null) return H.filePath;
      throw Error(
        C.formatMessage({
          id: `settings.mcp.noWritableConfig`,
          defaultMessage: `MCP server settings are unavailable`,
          description: `Error shown when MCP settings cannot find a writable config.toml`,
        }),
      );
    },
    me = async (e, t) => {
      try {
        (await s.mutateAsync({ key: e, enabled: t }), Q());
      } catch {}
    },
    he = async (e, t) => {
      let n = j ?? de(t, U, null);
      try {
        (await o.mutateAsync({ filePath: pe(), key: n, value: e }), Q(), $());
      } catch (e) {
        throw (
          c.error(`Failed to save MCP server`, {
            safe: { targetKey: n },
            sensitive: { error: e },
          }),
          e
        );
      }
    },
    ge = async (t) => {
      let n = j ?? de(t, U, null);
      try {
        (await o.mutateAsync({ filePath: pe(), key: n, value: null }),
          A((r) => ({
            ...r,
            [e]: (0, oe.default)([...(r[e] ?? []), n, t, z[n]?.name ?? n]),
          })),
          Q(),
          $());
      } catch (e) {
        throw (
          c.error(`Failed to uninstall MCP server`, {
            safe: { targetKey: n },
            sensitive: { error: e },
          }),
          e
        );
      }
    },
    _e = async (t) => {
      if (!a) {
        let e = Z[t];
        if (e !== void 0 && e !== `notLoggedIn`) return;
      }
      let n = T[t];
      if (n) {
        g.dispatchMessage(`open-in-browser`, { url: n });
        return;
      }
      E((e) => ({ ...e, [t]: null }));
      try {
        let { authorizationUrl: n } = await r(`login-mcp-server`, {
          hostId: e,
          name: t,
        });
        n &&
          (E((e) => ({ ...e, [t]: n })),
          g.dispatchMessage(`open-in-browser`, { url: n }));
      } catch (e) {
        (c.error(`Failed to start login for MCP server`, {
          safe: { serverName: t },
          sensitive: { error: e },
        }),
          E((e) => {
            let { [t]: n, ...r } = e;
            return r;
          }));
      }
    },
    ve = (0, R.useEffectEvent)((e, t) => {
      (E((n) => {
        let r = n[e];
        if (t || r == null) {
          let { [e]: t, ...r } = n;
          return r;
        }
        return n;
      }),
        t && (Q(), h.invalidateQueries({ queryKey: v })));
    }),
    ye = (0, R.useRef)(!0);
  if (
    ((0, R.useEffect)(() => {
      if (ye.current) {
        ye.current = !1;
        return;
      }
      w?.hostId === e && ve(w.name, w.success);
    }, [w, e]),
    m(
      `codex-app-server-initialized`,
      (e) => {
        (O((t) => t.filter((t) => t !== e.hostId)),
          A((t) => {
            let { [e.hostId]: n, ...r } = t;
            return r;
          }),
          h.invalidateQueries({ queryKey: [...v, e.hostId] }));
      },
      [h],
    ),
    F)
  )
    return (0, V.jsx)(ce, {
      config: F,
      initialKey: j,
      onCancel: $,
      onSave: he,
      onUninstall: j ? ge : void 0,
    });
  let be = (0, V.jsx)(te, { slug: le }),
    xe = (0, V.jsx)(ne, { slug: le }),
    Se = G
      ? (0, V.jsxs)(S, {
          color: `ghost`,
          size: `toolbar`,
          onClick: () => {
            g.dispatchMessage(`codex-app-server-restart`, { hostId: e });
          },
          children: [
            (0, V.jsx)(ee, { className: `icon-xs` }),
            (0, V.jsx)(d, {
              id: `settings.mcp.restartApp`,
              defaultMessage: `Restart`,
              description: `Button label to restart the codex electron app after MCP settings change`,
            }),
          ],
        })
      : null,
    Ce = () => {
      (M(null), I({ ...ue, name: void 0 }));
    };
  return (0, V.jsxs)(ie, {
    title: be,
    subtitle: xe,
    action: Se,
    children: [
      (0, V.jsxs)(P, {
        children: [
          (0, V.jsx)(P.Header, {
            title: (0, V.jsx)(d, {
              id: `settings.mcp.myServers`,
              defaultMessage: `Servers`,
              description: `Heading for the user's MCP servers list`,
            }),
            actions: (J || Y) && (0, V.jsx)(X, { onClick: Ce }),
          }),
          J || !Y
            ? (0, V.jsx)(P.Content, {
                children: (0, V.jsx)(N, {
                  children: J
                    ? se.map((e) =>
                        (0, V.jsx)(
                          fe,
                          {
                            name: z[e]?.name ?? e,
                            statusLoading: a,
                            enabled: z[e]?.enabled !== !1,
                            authStatus: Z[e],
                            onAuthenticateClicked: () => _e(e),
                            onEnableClicked: z[e] ? (t) => me(e, t) : void 0,
                            onSettingsClicked: z[e]
                              ? async () => {
                                  (M(e), I(z[e]));
                                }
                              : void 0,
                            isReadOnly: B[e]?.name.type === `project`,
                          },
                          e,
                        ),
                      )
                    : (0, V.jsx)(ae, {
                        label: (0, V.jsx)(d, {
                          id: `settings.mcp.empty`,
                          defaultMessage: `No MCP servers connected`,
                          description: `Empty state for MCP servers list`,
                        }),
                        control: (0, V.jsx)(X, { onClick: Ce }),
                      }),
                }),
              })
            : null,
        ],
      }),
      Y
        ? (0, V.jsxs)(P, {
            children: [
              (0, V.jsx)(P.Header, {
                title: (0, V.jsx)(d, {
                  id: `settings.mcp.fromPlugins`,
                  defaultMessage: `From plugins`,
                  description: `Heading for MCP servers provided by installed plugins`,
                }),
              }),
              (0, V.jsx)(P.Content, {
                children: (0, V.jsx)(N, {
                  children: q.map((e) =>
                    (0, V.jsx)(
                      fe,
                      {
                        name: e.name,
                        statusLoading: a,
                        authStatus: e.authStatus,
                        onAuthenticateClicked: () => _e(e.name),
                      },
                      `status-${e.name}`,
                    ),
                  ),
                }),
              }),
            ],
          })
        : null,
    ],
  });
}
function de(e, t, n) {
  let r =
      e
        ?.trim()
        .replace(/\s+/gu, `_`)
        .replace(/[^a-zA-Z0-9-_]+/gu, `-`)
        .replace(/-+/gu, `-`) ?? ``,
    i = r.length > 0 ? r.toLowerCase() : `custom-server`,
    a = t.filter((e) => (n == null ? !0 : e !== n));
  if (!a.includes(i)) return i;
  let o = 2,
    s = `${i}-${o}`;
  for (; a.includes(s); ) ((o += 1), (s = `${i}-${o}`));
  return s;
}
function fe(e) {
  let t = (0, B.c)(15),
    {
      name: n,
      statusLoading: r,
      onAuthenticateClicked: i,
      authStatus: a,
      onEnableClicked: o,
      enabled: s,
      onSettingsClicked: c,
      isReadOnly: u,
    } = e,
    f = l(),
    p = !r && i !== void 0 && a === `notLoggedIn`,
    m = o !== void 0 || c !== void 0 || p,
    h;
  t[0] === n
    ? (h = t[1])
    : ((h = (0, V.jsx)(`span`, {
        className: `flex min-w-0 flex-col gap-0.5 text-sm`,
        children: (0, V.jsx)(`span`, {
          className: `flex flex-wrap items-end gap-1`,
          children: (0, V.jsx)(`span`, {
            className: `font-medium text-token-text-primary`,
            children: n,
          }),
        }),
      })),
      (t[0] = n),
      (t[1] = h));
  let g;
  t[2] !== s ||
  t[3] !== f ||
  t[4] !== u ||
  t[5] !== i ||
  t[6] !== o ||
  t[7] !== c ||
  t[8] !== m ||
  t[9] !== p ||
  t[10] !== r
    ? ((g = m
        ? (0, V.jsxs)(I, {
            children: [
              p
                ? (0, V.jsx)(S, {
                    color: `outline`,
                    disabled: !!r,
                    size: `toolbar`,
                    onClick: () => {
                      i();
                    },
                    children: (0, V.jsx)(d, {
                      id: `settings.mcp.server.login`,
                      defaultMessage: `Authenticate`,
                      description: `Button label to authenticate with an MCP server`,
                    }),
                  })
                : null,
              c
                ? (0, V.jsx)(S, {
                    color: `ghost`,
                    size: `toolbar`,
                    uniform: !0,
                    disabled: u === !0,
                    onClick: () => {
                      c();
                    },
                    "aria-label": f.formatMessage({
                      id: `settings.mcp.server.settings`,
                      defaultMessage: `Settings`,
                      description: `Button label to view MCP server settings`,
                    }),
                    children: (0, V.jsx)(k, { className: `icon-xs` }),
                  })
                : null,
              o
                ? (0, V.jsx)(M, {
                    disabled: r === !0 || u === !0,
                    checked: s === !0,
                    onChange: (e) => {
                      o(e);
                    },
                    ariaLabel: f.formatMessage({
                      id: `settings.mcp.server.enable`,
                      defaultMessage: `Enable`,
                      description: `Toggle to enable an MCP server`,
                    }),
                  })
                : null,
            ],
          })
        : null),
      (t[2] = s),
      (t[3] = f),
      (t[4] = u),
      (t[5] = i),
      (t[6] = o),
      (t[7] = c),
      (t[8] = m),
      (t[9] = p),
      (t[10] = r),
      (t[11] = g))
    : (g = t[11]);
  let _;
  return (
    t[12] !== h || t[13] !== g
      ? ((_ = (0, V.jsx)(ae, { label: h, description: null, control: g })),
        (t[12] = h),
        (t[13] = g),
        (t[14] = _))
      : (_ = t[14]),
    _
  );
}
function X(e) {
  let t = (0, B.c)(6),
    { onClick: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = () => {
        n?.();
      }),
      (t[0] = n),
      (t[1] = r));
  let i, a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, V.jsx)(A, { className: `icon-xs` })),
      (a = (0, V.jsx)(d, {
        id: `settings.mcp.addServer`,
        defaultMessage: `Add server`,
        description: `Button to add a new MCP server`,
      })),
      (t[2] = i),
      (t[3] = a))
    : ((i = t[2]), (a = t[3]));
  let o;
  return (
    t[4] === r
      ? (o = t[5])
      : ((o = (0, V.jsxs)(S, {
          color: `secondary`,
          size: `toolbar`,
          onClick: r,
          children: [i, a],
        })),
        (t[4] = r),
        (t[5] = o)),
    o
  );
}
export { Y as McpSettings };
//# sourceMappingURL=mcp-settings.js.map
