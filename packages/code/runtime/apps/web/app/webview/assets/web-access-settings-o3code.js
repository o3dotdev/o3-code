import { s as wrapReactModule } from "./chunk.js";
import { n as reactModule, t as jsxRuntime } from "./jsx-runtime.js";
import { t as SettingsButton } from "./button.js";
import { t as SettingsContentLayout } from "./settings-content-layout.js";
import { t as SettingsGroup } from "./settings-group.js";
import { n as SettingsRow, t as SettingsValueRow } from "./settings-row-D.js";
import { t as SettingsSurface } from "./settings-surface.js";
import { t as Toggle } from "./toggle.js";

var React = wrapReactModule(reactModule()),
  jsx = jsxRuntime(),
  DEFAULT_CONFIG = {
    enabled: false,
    exposure: "localhost",
    port: null,
  },
  DEFAULT_STATUS = { state: "off" };

function WebAccessSettingsPage() {
  let bridge = window.electronBridge?.webAccess,
    [config, setConfig] = React.useState(DEFAULT_CONFIG),
    [status, setStatus] = React.useState(DEFAULT_STATUS),
    [loading, setLoading] = React.useState(true),
    [error, setError] = React.useState(null);
  return (
    React.useEffect(() => {
      if (bridge == null) {
        setLoading(false);
        setError(`Web access is unavailable in this runtime.`);
        return;
      }
      let mounted = true,
        unsubscribeConfig = bridge.subscribeConfig((config) => {
          mounted && setConfig(config);
        }),
        unsubscribeStatus = bridge.subscribeStatus((status) => {
          mounted && setStatus(status);
        });
      return (
        Promise.all([bridge.getConfig(), bridge.getStatus()])
          .then(([config, status]) => {
            mounted && (setConfig(config), setStatus(status));
          })
          .catch((error) => {
            mounted &&
              setError(error instanceof Error ? error.message : String(error));
          })
          .finally(() => {
            mounted && setLoading(false);
          }),
        () => {
          ((mounted = false), unsubscribeConfig(), unsubscribeStatus());
        }
      );
    }, [bridge]),
    jsx.jsxs(SettingsContentLayout, {
      title: `Web access`,
      subtitle: `Expose the Mirrored Web Client on localhost while O3 Code is running.`,
      subtitleClassName: `text-pretty`,
      children: [
        error == null
          ? null
          : jsx.jsx(`div`, {
              className: `rounded-lg border border-token-border-error px-3 py-2 text-sm text-token-error-foreground`,
              children: error,
            }),
        jsx.jsxs(SettingsGroup, {
          children: [
            jsx.jsx(SettingsGroup.Header, { title: `Local server` }),
            jsx.jsx(SettingsGroup.Content, {
              children: jsx.jsxs(SettingsSurface, {
                children: [
                  jsx.jsx(SettingsRow, {
                    label: `Enable Web access`,
                    description: `Serve the web client at 127.0.0.1 only.`,
                    control: jsx.jsx(Toggle, {
                      checked: config.enabled,
                      disabled: loading || bridge == null,
                      onChange: async (enabled) => {
                        if (bridge == null) return;
                        setError(null);
                        try {
                          setConfig(await bridge.updateConfig({ enabled }));
                        } catch (error) {
                          setError(
                            error instanceof Error
                              ? error.message
                              : String(error),
                          );
                        }
                      },
                      ariaLabel: `Enable Web access`,
                    }),
                  }),
                  jsx.jsx(ValueRow, {
                    label: `Exposure`,
                    children: `Localhost`,
                  }),
                  jsx.jsx(ValueRow, {
                    label: `Status`,
                    children: jsx.jsxs(`div`, {
                      className: `flex min-w-0 flex-col gap-1`,
                      children: [
                        jsx.jsx(`span`, { children: getStatusLabel(status) }),
                        status.state === `failed` && status.reason != null
                          ? jsx.jsx(`span`, {
                              className: `text-token-error-foreground`,
                              children: status.reason,
                            })
                          : null,
                      ],
                    }),
                  }),
                  jsx.jsx(ValueRow, {
                    label: `Port`,
                    children:
                      config.port == null
                        ? `Assigned on first enable`
                        : String(config.port),
                  }),
                  status.state === `running`
                    ? jsx.jsx(ValueRow, {
                        label: `URL`,
                        children: jsx.jsx(`span`, {
                          className: `break-all font-mono`,
                          children: status.url,
                        }),
                      })
                    : null,
                  jsx.jsx(SettingsRow, {
                    label: `Open client`,
                    description:
                      status.state === `running`
                        ? `Use the current localhost URL.`
                        : `Available when Web access is running.`,
                    control: jsx.jsxs(`div`, {
                      className: `flex flex-wrap justify-end gap-2`,
                      children: [
                        jsx.jsx(ActionButton, {
                          disabled: status.state !== `running`,
                          onClick: async () => {
                            status.state === `running` &&
                              (await navigator.clipboard.writeText(status.url));
                          },
                          children: `Copy URL`,
                        }),
                        jsx.jsx(ActionButton, {
                          disabled:
                            status.state !== `running` || bridge == null,
                          onClick: async () => {
                            status.state === `running` &&
                              bridge != null &&
                              (await bridge.openUrl(status.url));
                          },
                          children: `Open`,
                        }),
                      ],
                    }),
                  }),
                  jsx.jsx(SettingsRow, {
                    label: `Recovery`,
                    description: `Retry after a failure, or reset the saved port while stopped.`,
                    control: jsx.jsxs(`div`, {
                      className: `flex flex-wrap justify-end gap-2`,
                      children: [
                        jsx.jsx(ActionButton, {
                          disabled: status.state !== `failed` || bridge == null,
                          onClick: async () => {
                            bridge != null && setStatus(await bridge.retry());
                          },
                          children: `Retry`,
                        }),
                        jsx.jsx(ActionButton, {
                          disabled:
                            bridge == null ||
                            status.state === `running` ||
                            status.state === `starting`,
                          onClick: async () => {
                            bridge != null &&
                              setConfig(await bridge.resetPort());
                          },
                          children: `Reset port`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}

function ActionButton(props) {
  let { children, disabled, onClick } = props;
  return jsx.jsx(SettingsButton, {
    color: `secondary`,
    size: `toolbar`,
    disabled,
    onClick,
    children,
  });
}

function ValueRow(props) {
  let { children, label } = props;
  return jsx.jsx(SettingsValueRow, {
    label,
    children,
  });
}

function getStatusLabel(status) {
  switch (status.state) {
    case "off":
      return "Off";
    case "starting":
      return "Starting";
    case "running":
      return "Running";
    case "failed":
      return status.code == null ? "Failed" : `Failed (${status.code})`;
    default:
      return "Unknown";
  }
}

export { WebAccessSettingsPage as WebAccessSettings };
