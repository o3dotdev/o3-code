import {
  Box,
  render as renderInk,
  renderToString,
  Text,
  type Instance,
} from "ink";
import React from "react";

import type { LauncherState } from "./state.js";
import {
  resolveTailscaleMobileAccessHelp,
  type TailscaleMobileAccessHelp,
} from "./tailscale.js";

type StatusTone = "ok" | "warn" | "fail" | "info";

interface Row {
  readonly label: string;
  readonly value: string;
  readonly tone?: StatusTone;
}

interface StartupProgressRenderer {
  readonly update: (state: LauncherState) => void;
  readonly stop: () => Promise<void>;
}

export const DEFAULT_COMMAND_PREFIX = "o3-code";
export const NPX_COMMAND_PREFIX = "npx @o3dotdev/code";

export function renderStartPanel({
  commandPrefix = DEFAULT_COMMAND_PREFIX,
  state,
  mobileAccessHelp = resolveTailscaleMobileAccessHelp({
    webAccessUrl: state.url,
  }),
  title = "O3 Code is running",
}: {
  readonly commandPrefix?: string;
  readonly mobileAccessHelp?: TailscaleMobileAccessHelp;
  readonly state: LauncherState;
  readonly title?: string;
}): string {
  const mobileAccessRows = createMobileAccessRows(state, mobileAccessHelp);
  return renderPanel({
    title,
    subtitle: "Local O3 Code",
    rows: [
      {
        label: "Status",
        value: statusText(state),
        tone: toneForStatus(state.status),
      },
      {
        label: "Web",
        value: state.url ?? "Waiting for local web access",
        tone: state.url ? "ok" : "warn",
      },
      ...mobileAccessRows,
      {
        label: "Desktop",
        value: state.desktopPid ? `pid ${state.desktopPid}` : "Starting",
        tone: "info",
      },
      { label: "Logs", value: state.logs.desktop, tone: "info" },
      {
        label: "State",
        value: state.activeRuntimeRoot ?? "Preparing runtime",
        tone: "info",
      },
      ...warningRows(state),
    ],
    commands: lifecycleCommands(commandPrefix, [
      "logs --follow",
      "restart",
      "stop",
      "status",
    ]).concat(mobileAccessCommands(mobileAccessHelp)),
  });
}

export function renderStoppedPanel(
  state: LauncherState | null,
  commandPrefix = DEFAULT_COMMAND_PREFIX,
): string {
  return renderPanel({
    title: "O3 Code is stopped",
    subtitle: "Local O3 Code",
    rows: [
      { label: "Status", value: "Stopped", tone: "warn" },
      {
        label: "Logs",
        value: state?.logs.desktop ?? "No logs yet",
        tone: state ? "info" : "warn",
      },
    ],
    commands: lifecycleCommands(commandPrefix, ["start", "logs"]),
  });
}

export function renderFailurePanel({
  commandPrefix = DEFAULT_COMMAND_PREFIX,
  error,
  state,
}: {
  readonly commandPrefix?: string;
  readonly error: string;
  readonly state?: LauncherState | null;
}): string {
  return renderPanel({
    title: "O3 Code did not start",
    subtitle: "Local O3 Code",
    rows: [
      { label: "Status", value: "Failed", tone: "fail" },
      { label: "Reason", value: error, tone: "fail" },
      {
        label: "Launcher",
        value: state?.logs.launcher ?? "No launcher log yet",
        tone: "info",
      },
      {
        label: "Desktop",
        value: state?.logs.desktop ?? "No desktop log yet",
        tone: "info",
      },
      ...(state?.startup
        ? [
            {
              label: "Phase",
              value: state.startup.label,
              tone: "warn" as const,
            },
          ]
        : []),
    ],
    commands: lifecycleCommands(commandPrefix, ["logs", "restart"]),
  });
}

export function renderStatusPanel(
  state: LauncherState | null,
  running: boolean,
  commandPrefix = DEFAULT_COMMAND_PREFIX,
  mobileAccessHelp = resolveTailscaleMobileAccessHelp({
    webAccessUrl: state?.url ?? null,
  }),
): string {
  if (!state || !running) {
    return renderStoppedPanel(state, commandPrefix);
  }

  const mobileAccessRows = createMobileAccessRows(state, mobileAccessHelp);
  return renderPanel({
    title: "O3 Code status",
    subtitle: "Local O3 Code",
    rows: [
      {
        label: "Status",
        value: statusText(state),
        tone: toneForStatus(state.status),
      },
      {
        label: "Web",
        value: state.url ?? "Unavailable",
        tone: state.url ? "ok" : "warn",
      },
      ...mobileAccessRows,
      { label: "Launcher", value: `pid ${state.pid}`, tone: "info" },
      {
        label: "Desktop",
        value: state.desktopPid ? `pid ${state.desktopPid}` : "Unavailable",
        tone: "info",
      },
      ...(state.status === "starting" && state.startup
        ? [
            {
              label: "Phase",
              value: state.startup.label,
              tone: "warn" as const,
            },
          ]
        : []),
      { label: "Logs", value: state.logs.desktop, tone: "info" },
      ...warningRows(state),
    ],
    commands: lifecycleCommands(commandPrefix, [
      "logs --follow",
      "restart",
      "stop",
    ]).concat(mobileAccessCommands(mobileAccessHelp)),
  });
}

function createMobileAccessRows(
  state: LauncherState,
  mobileAccessHelp: TailscaleMobileAccessHelp,
): readonly Row[] {
  if (!state.url) {
    return [
      {
        label: "Mobile",
        value: "Available after local web access is running",
        tone: "warn",
      },
    ];
  }

  if (!mobileAccessHelp.available) {
    return [
      {
        label: "Mobile",
        value: "Install Tailscale to enable private mobile access",
        tone: "warn",
      },
      {
        label: "Install",
        value: mobileAccessHelp.installHint ?? "Install Tailscale for macOS.",
        tone: "info",
      },
    ];
  }

  return [
    {
      label: "Mobile",
      value:
        mobileAccessHelp.variant === "mac-app-store"
          ? "Run Tailscale Serve with the bundled macOS app CLI"
          : "Run Tailscale Serve to use this from mobile",
      tone: "info",
    },
  ];
}

function mobileAccessCommands(
  mobileAccessHelp: TailscaleMobileAccessHelp,
): readonly string[] {
  return [
    mobileAccessHelp.serveCommand,
    mobileAccessHelp.statusCommand,
    mobileAccessHelp.resetCommand,
  ].filter((command): command is string => command != null);
}

function warningRows(state: LauncherState): readonly Row[] {
  return state.warnings.map((warning, index) => ({
    label: index === 0 ? "Warning" : "",
    value: warning,
    tone: "warn" as const,
  }));
}

export function renderStopPanel(
  stopped: boolean,
  state: LauncherState | null,
  commandPrefix = DEFAULT_COMMAND_PREFIX,
): string {
  return renderPanel({
    title: "O3 Code stop",
    subtitle: "Local O3 Code",
    rows: [
      {
        label: "Status",
        value: stopped ? "Stopped" : "Not running",
        tone: stopped ? "ok" : "warn",
      },
      {
        label: "Logs",
        value: state?.logs.desktop ?? "No logs yet",
        tone: "info",
      },
    ],
    commands: lifecycleCommands(commandPrefix, ["start", "logs"]),
  });
}

export function resolveLifecycleCommandPrefix({
  argv = process.argv,
  env = process.env,
}: {
  readonly argv?: readonly string[];
  readonly env?: NodeJS.ProcessEnv;
} = {}): string {
  if (isNpxInvocation({ argv, env })) {
    return NPX_COMMAND_PREFIX;
  }
  return DEFAULT_COMMAND_PREFIX;
}

function isNpxInvocation({
  argv,
  env,
}: {
  readonly argv: readonly string[];
  readonly env: NodeJS.ProcessEnv;
}): boolean {
  if (env.npm_command === "exec") {
    return true;
  }
  return argv.some((value) =>
    value.includes(`${pathSeparator()}_npx${pathSeparator()}`),
  );
}

function pathSeparator(): string {
  return process.platform === "win32" ? "\\" : "/";
}

function lifecycleCommands(
  commandPrefix: string,
  suffixes: readonly string[],
): readonly string[] {
  return suffixes.map((suffix) => `${commandPrefix} ${suffix}`);
}

export function startStartupProgressRenderer({
  initialState,
  stdout,
}: {
  readonly initialState: LauncherState | null;
  readonly stdout: NodeJS.WriteStream;
}): StartupProgressRenderer {
  let state = initialState;
  let tick = 0;
  let instance: Instance | null = renderInk(
    React.createElement(StartupProgressView, { state, tick }),
    {
      exitOnCtrlC: false,
      patchConsole: false,
      stdout,
    },
  );
  const interval = setInterval(() => {
    tick += 1;
    instance?.rerender(
      React.createElement(StartupProgressView, { state, tick }),
    );
  }, 120);
  interval.unref();

  return {
    update: (nextState) => {
      state = nextState;
      tick += 1;
      instance?.rerender(
        React.createElement(StartupProgressView, { state, tick }),
      );
    },
    stop: async () => {
      clearInterval(interval);
      if (!instance) {
        return;
      }
      const currentInstance = instance;
      instance = null;
      currentInstance.unmount();
      try {
        await currentInstance.waitUntilExit();
      } catch {
        // The final success/failure panel is printed by the caller.
      }
    },
  };
}

export function renderStartupProgressBar(
  step: number,
  total: number,
  width = 24,
): string {
  const normalizedTotal = Math.max(1, Math.trunc(total));
  const normalizedStep = Math.min(
    Math.max(0, Math.trunc(step)),
    normalizedTotal,
  );
  const normalizedWidth = Math.max(1, Math.trunc(width));
  const filled = Math.round(
    (normalizedStep / normalizedTotal) * normalizedWidth,
  );
  return `[${"#".repeat(filled)}${"-".repeat(normalizedWidth - filled)}]`;
}

function StartupProgressView({
  state,
  tick,
}: {
  readonly state: LauncherState | null;
  readonly tick: number;
}) {
  const startup = state?.startup;
  const phaseLabel = startup?.label ?? "Starting supervisor";
  const step = startup?.step ?? 0;
  const total = startup?.total ?? 7;
  const elapsedMs =
    Date.now() - parseTimestampMs(startup?.startedAt ?? state?.startedAt);
  const elapsedSeconds = Math.max(0, Math.floor(elapsedMs / 1000));
  const spinner = ["|", "/", "-", "\\"][tick % 4];

  return React.createElement(
    Box,
    { flexDirection: "column" },
    React.createElement(
      Text,
      null,
      React.createElement(Text, { color: "cyan" }, spinner),
      " Starting O3 Code",
    ),
    React.createElement(
      Text,
      null,
      renderStartupProgressBar(step, total),
      ` ${step}/${total} `,
      React.createElement(Text, { color: "yellow" }, phaseLabel),
      React.createElement(Text, { color: "gray" }, ` ${elapsedSeconds}s`),
    ),
    startup?.detail
      ? React.createElement(Text, { color: "gray" }, startup.detail)
      : React.createElement(
          Text,
          { color: "gray" },
          "Preparing local app state",
        ),
  );
}

function parseTimestampMs(value: string | undefined): number {
  if (!value) {
    return Date.now();
  }
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : Date.now();
}

function renderPanel({
  commands,
  rows,
  subtitle,
  title,
}: {
  readonly commands: readonly string[];
  readonly rows: readonly Row[];
  readonly subtitle: string;
  readonly title: string;
}): string {
  return renderToString(
    React.createElement(
      Box,
      {
        borderStyle: "round",
        borderColor: "cyan",
        flexDirection: "column",
        paddingX: 1,
      },
      React.createElement(Text, { bold: true }, title),
      React.createElement(Text, { color: "gray" }, subtitle),
      React.createElement(Text, null, ""),
      ...rows.map((row) =>
        React.createElement(
          Text,
          { key: row.label },
          React.createElement(
            Text,
            { color: "gray" },
            `${row.label.padEnd(8)} `,
          ),
          React.createElement(
            Text,
            { color: colorForTone(row.tone ?? "info") },
            row.value,
          ),
        ),
      ),
      React.createElement(Text, null, ""),
      React.createElement(Text, { bold: true }, "Commands"),
      ...commands.map((command) =>
        React.createElement(
          Text,
          { key: command },
          React.createElement(Text, { color: "gray" }, "  "),
          command,
        ),
      ),
    ),
  );
}

function statusText(state: LauncherState): string {
  if (state.status === "running") {
    return "Running";
  }
  if (state.status === "failed") {
    return state.error ? `Failed: ${state.error}` : "Failed";
  }
  if (state.status === "starting") {
    return "Starting";
  }
  return "Stopped";
}

function toneForStatus(status: LauncherState["status"]): StatusTone {
  if (status === "running") {
    return "ok";
  }
  if (status === "failed") {
    return "fail";
  }
  return "warn";
}

function colorForTone(tone: StatusTone): string {
  if (tone === "ok") {
    return "green";
  }
  if (tone === "warn") {
    return "yellow";
  }
  if (tone === "fail") {
    return "red";
  }
  return "cyan";
}
