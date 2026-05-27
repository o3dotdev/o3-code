import { s as e } from "./chunk.js";
import { n as t, t as n } from "./jsx-runtime.js";

var r = e(t()),
  i = n(),
  a = {
    enabled: false,
    exposure: "localhost",
    port: null,
  },
  o = { state: "off" };

function s() {
  let e = window.electronBridge?.webAccess,
    [t, n] = r.useState(a),
    [s, setStatus] = r.useState(o),
    [l, u] = r.useState(true),
    [d, f] = r.useState(null);
  return (
    r.useEffect(() => {
      if (e == null) {
        u(false);
        f(`Web access is unavailable in this runtime.`);
        return;
      }
      let t = true,
        r = e.subscribeConfig((e) => {
          t && n(e);
        }),
        i = e.subscribeStatus((e) => {
          t && setStatus(e);
        });
      return (
        Promise.all([e.getConfig(), e.getStatus()])
          .then(([e, r]) => {
            t && (n(e), setStatus(r));
          })
          .catch((e) => {
            t && f(e instanceof Error ? e.message : String(e));
          })
          .finally(() => {
            t && u(false);
          }),
        () => {
          ((t = false), r(), i());
        }
      );
    }, [e]),
    (0, i.jsxs)(`div`, {
      className: `mx-auto flex w-full max-w-3xl flex-col gap-6 p-6`,
      children: [
        (0, i.jsxs)(`header`, {
          className: `flex flex-col gap-1`,
          children: [
            (0, i.jsx)(`h1`, {
              className: `text-xl font-semibold text-token-text-primary`,
              children: `Web access`,
            }),
            (0, i.jsx)(`p`, {
              className: `text-sm text-token-text-secondary`,
              children: `Expose the Mirrored Web Client on localhost while O3 Code is running.`,
            }),
          ],
        }),
        d == null
          ? null
          : (0, i.jsx)(`div`, {
              className: `rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200`,
              children: d,
            }),
        (0, i.jsxs)(`section`, {
          className: `flex flex-col gap-4 rounded-lg border border-token-border-default bg-token-bg-primary p-4`,
          children: [
            (0, i.jsxs)(`div`, {
              className: `flex items-center justify-between gap-4`,
              children: [
                (0, i.jsxs)(`div`, {
                  className: `min-w-0`,
                  children: [
                    (0, i.jsx)(`div`, {
                      className: `font-medium text-token-text-primary`,
                      children: `Enable Web access`,
                    }),
                    (0, i.jsx)(`div`, {
                      className: `text-sm text-token-text-secondary`,
                      children: `Serve the web client at 127.0.0.1 only.`,
                    }),
                  ],
                }),
                (0, i.jsx)(`button`, {
                  type: `button`,
                  disabled: l || e == null,
                  onClick: async () => {
                    if (e == null) return;
                    f(null);
                    try {
                      n(await e.updateConfig({ enabled: !t.enabled }));
                    } catch (e) {
                      f(e instanceof Error ? e.message : String(e));
                    }
                  },
                  role: `switch`,
                  className: `relative h-6 w-11 shrink-0 rounded-full border transition-colors focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
                  style: {
                    backgroundColor: t.enabled
                      ? `var(--color-token-text-primary)`
                      : `color-mix(in srgb, var(--color-token-foreground) 15%, transparent)`,
                    borderColor: t.enabled
                      ? `var(--color-token-text-primary)`
                      : `var(--color-token-border-default)`,
                  },
                  "aria-checked": t.enabled,
                  "aria-pressed": t.enabled,
                  children: (0, i.jsx)(`span`, {
                    className: `absolute h-5 w-5 rounded-full bg-token-main-surface-primary shadow`,
                    style: {
                      left: t.enabled ? `22px` : `2px`,
                      top: `2px`,
                      transition: `left 160ms ease`,
                    },
                  }),
                }),
              ],
            }),
            (0, i.jsx)(p, { label: `Exposure`, value: `Localhost` }),
            (0, i.jsx)(p, {
              label: `Status`,
              value: m(s),
              detail: s.state === `failed` ? s.reason : null,
            }),
            (0, i.jsx)(p, {
              label: `Port`,
              value:
                t.port == null ? `Assigned on first enable` : String(t.port),
            }),
            s.state === `running`
              ? (0, i.jsx)(p, {
                  label: `URL`,
                  value: s.url,
                  monospace: true,
                })
              : null,
            (0, i.jsxs)(`div`, {
              className: `flex flex-wrap gap-2 pt-2`,
              children: [
                (0, i.jsx)(w, {
                  disabled: s.state !== `running`,
                  onClick: async () => {
                    s.state === `running` &&
                      (await navigator.clipboard.writeText(s.url));
                  },
                  children: `Copy URL`,
                }),
                (0, i.jsx)(w, {
                  disabled: s.state !== `running` || e == null,
                  onClick: async () => {
                    s.state === `running` &&
                      e != null &&
                      (await e.openUrl(s.url));
                  },
                  children: `Open`,
                }),
                (0, i.jsx)(w, {
                  disabled: s.state !== `failed` || e == null,
                  onClick: async () => {
                    e != null && setStatus(await e.retry());
                  },
                  children: `Retry`,
                }),
                (0, i.jsx)(w, {
                  disabled:
                    e == null ||
                    s.state === `running` ||
                    s.state === `starting`,
                  onClick: async () => {
                    e != null && n(await e.resetPort());
                  },
                  children: `Reset port`,
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}

function w(e) {
  let { children: t, disabled: n, onClick: r } = e;
  return (0, i.jsx)(`button`, {
    type: `button`,
    disabled: n,
    onClick: r,
    className: `rounded-md border border-token-border-default px-3 py-1.5 text-sm font-medium text-token-text-primary hover:bg-token-main-surface-secondary disabled:cursor-not-allowed disabled:opacity-50`,
    children: t,
  });
}

function p(e) {
  let { detail: t, label: n, monospace: r = false, value: a } = e;
  return (0, i.jsxs)(`div`, {
    className: `grid gap-1 border-t border-token-border-default pt-3 sm:grid-cols-[160px_1fr] sm:gap-4`,
    children: [
      (0, i.jsx)(`div`, {
        className: `text-sm text-token-text-secondary`,
        children: n,
      }),
      (0, i.jsxs)(`div`, {
        className: `min-w-0`,
        children: [
          (0, i.jsx)(`div`, {
            className: `${r ? `font-mono` : ``} break-words text-sm text-token-text-primary`,
            children: a,
          }),
          t == null
            ? null
            : (0, i.jsx)(`div`, {
                className: `mt-1 text-sm text-token-text-secondary`,
                children: t,
              }),
        ],
      }),
    ],
  });
}

function m(e) {
  switch (e.state) {
    case "off":
      return "Off";
    case "starting":
      return "Starting";
    case "running":
      return "Running";
    case "failed":
      return e.code == null ? "Failed" : `Failed (${e.code})`;
    default:
      return "Unknown";
  }
}

export { s as WebAccessSettings };
