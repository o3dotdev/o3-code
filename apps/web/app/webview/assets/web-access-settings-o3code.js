import { s as wrapReactModule } from "./chunk-Bj-mKKzh.js";
import { n as reactModule, t as jsxRuntime } from "./jsx-runtime.js";
import { t as SettingsButton } from "./button.js";
import { t as SettingsContentLayout } from "./settings-content-layout.js";
import { n as SettingsSurface, t as SettingsGroup } from "./settings-group.js";
import { n as SettingsRow, t as SettingsValueRow } from "./settings-row.js";
import { t as Toggle } from "./toggle.js";

var React = wrapReactModule(reactModule()),
  jsx = jsxRuntime(),
  DEFAULT_CONFIG = {
    enabled: false,
    exposure: "localhost",
    port: null,
  },
  DEFAULT_STATUS = { state: "off" },
  DEFAULT_MOBILE_ACCESS_HELP = {
    available: false,
    variant: "missing",
    serveCommand: null,
    statusCommand: null,
    resetCommand: null,
    installHint: `Install Tailscale for macOS, sign in on this Mac and your mobile device, then run the serve command.`,
  };

function WebAccessSettingsPage() {
  let bridge = window.electronBridge?.webAccess,
    [config, setConfig] = React.useState(DEFAULT_CONFIG),
    [status, setStatus] = React.useState(DEFAULT_STATUS),
    [mobileAccessHelp, setMobileAccessHelp] = React.useState(
      DEFAULT_MOBILE_ACCESS_HELP,
    ),
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
          if (!mounted) return;
          setStatus(status);
          refreshMobileAccessHelp(bridge, setMobileAccessHelp);
        });
      return (
        Promise.all([
          bridge.getConfig(),
          bridge.getStatus(),
          getMobileAccessHelp(bridge),
        ])
          .then(([config, status, mobileAccessHelp]) => {
            mounted &&
              (setConfig(config),
              setStatus(status),
              setMobileAccessHelp(mobileAccessHelp));
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
        jsx.jsxs(SettingsGroup, {
          children: [
            jsx.jsx(SettingsGroup.Header, { title: `Mobile access` }),
            jsx.jsx(SettingsGroup.Content, {
              children: jsx.jsxs(SettingsSurface, {
                children: [
                  jsx.jsx(ValueRow, {
                    label: `Local URL`,
                    children:
                      status.state === `running`
                        ? jsx.jsx(`span`, {
                            className: `break-all font-mono`,
                            children: status.url,
                          })
                        : `Available when Web access is running`,
                  }),
                  jsx.jsx(SettingsRow, {
                    label: `Tailscale Serve`,
                    description: getMobileAccessDescription(mobileAccessHelp),
                    control: jsx.jsxs(`div`, {
                      className: `flex flex-wrap justify-end gap-2`,
                      children: [
                        jsx.jsx(ActionButton, {
                          disabled: mobileAccessHelp.serveCommand == null,
                          onClick: async () => {
                            mobileAccessHelp.serveCommand != null &&
                              (await navigator.clipboard.writeText(
                                mobileAccessHelp.serveCommand,
                              ));
                          },
                          children: `Copy serve`,
                        }),
                        jsx.jsx(ActionButton, {
                          disabled: mobileAccessHelp.statusCommand == null,
                          onClick: async () => {
                            mobileAccessHelp.statusCommand != null &&
                              (await navigator.clipboard.writeText(
                                mobileAccessHelp.statusCommand,
                              ));
                          },
                          children: `Copy status`,
                        }),
                      ],
                    }),
                  }),
                  jsx.jsx(CommandValueRow, {
                    label: `Serve`,
                    value:
                      mobileAccessHelp.serveCommand ??
                      `Enable Web access and install Tailscale first`,
                  }),
                  jsx.jsx(CommandValueRow, {
                    label: `Status`,
                    value:
                      mobileAccessHelp.statusCommand ??
                      `tailscale serve status`,
                  }),
                  jsx.jsx(CommandValueRow, {
                    label: `Reset`,
                    value:
                      mobileAccessHelp.resetCommand ?? `tailscale serve reset`,
                  }),
                  mobileAccessHelp.installHint == null
                    ? null
                    : jsx.jsx(ValueRow, {
                        label: `Install`,
                        children: mobileAccessHelp.installHint,
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

function CommandValueRow(props) {
  let { label, value } = props;
  return jsx.jsx(ValueRow, {
    label,
    children: jsx.jsx(`span`, {
      className: `break-all font-mono text-xs`,
      children: value,
    }),
  });
}

function getMobileAccessHelp(bridge) {
  return typeof bridge.getMobileAccessHelp === `function`
    ? bridge.getMobileAccessHelp()
    : Promise.resolve(createFallbackMobileAccessHelp());
}

function refreshMobileAccessHelp(bridge, setMobileAccessHelp) {
  getMobileAccessHelp(bridge)
    .then(setMobileAccessHelp)
    .catch(() => {
      setMobileAccessHelp(createFallbackMobileAccessHelp());
    });
}

function createFallbackMobileAccessHelp() {
  return DEFAULT_MOBILE_ACCESS_HELP;
}

function getMobileAccessDescription(mobileAccessHelp) {
  if (!mobileAccessHelp.available) {
    return `Tailscale is not installed. Install it, sign in on this Mac and your mobile device, then run the serve command.`;
  }
  return mobileAccessHelp.variant === `mac-app-store`
    ? `Private tailnet access is available through the bundled Tailscale macOS app CLI.`
    : `Private tailnet access is available through the Tailscale CLI on your PATH.`;
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
