import { Box, renderToString, Text } from "ink";
import React from "react";

import type { LauncherState } from "./state.js";

type StatusTone = "ok" | "warn" | "fail" | "info";

interface Row {
  readonly label: string;
  readonly value: string;
  readonly tone?: StatusTone;
}

export function renderStartPanel({
  state,
  title = "O3 Code is running",
}: {
  readonly state: LauncherState;
  readonly title?: string;
}): string {
  return renderPanel({
    title,
    subtitle: "Local O3 Code",
    rows: [
      { label: "Status", value: statusText(state), tone: toneForStatus(state.status) },
      { label: "Web", value: state.url ?? "Waiting for local web access", tone: state.url ? "ok" : "warn" },
      { label: "Desktop", value: state.desktopPid ? `pid ${state.desktopPid}` : "Starting", tone: "info" },
      { label: "Logs", value: state.logs.desktop, tone: "info" },
      { label: "State", value: state.activeRuntimeRoot ?? "Preparing runtime", tone: "info" },
      ...warningRows(state),
    ],
    commands: [
      "o3-code logs --follow",
      "o3-code restart",
      "o3-code stop",
      "o3-code status",
    ],
  });
}

export function renderStoppedPanel(state: LauncherState | null): string {
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
    commands: ["o3-code start", "o3-code logs"],
  });
}

export function renderFailurePanel({
  error,
  state,
}: {
  readonly error: string;
  readonly state?: LauncherState | null;
}): string {
  return renderPanel({
    title: "O3 Code did not start",
    subtitle: "Local O3 Code",
    rows: [
      { label: "Status", value: "Failed", tone: "fail" },
      { label: "Reason", value: error, tone: "fail" },
      { label: "Logs", value: state?.logs.desktop ?? "No logs yet", tone: "info" },
    ],
    commands: ["o3-code logs", "o3-code restart"],
  });
}

export function renderStatusPanel(state: LauncherState | null, running: boolean): string {
  if (!state || !running) {
    return renderStoppedPanel(state);
  }

  return renderPanel({
    title: "O3 Code status",
    subtitle: "Local O3 Code",
    rows: [
      { label: "Status", value: statusText(state), tone: toneForStatus(state.status) },
      { label: "Web", value: state.url ?? "Unavailable", tone: state.url ? "ok" : "warn" },
      { label: "Launcher", value: `pid ${state.pid}`, tone: "info" },
      { label: "Desktop", value: state.desktopPid ? `pid ${state.desktopPid}` : "Unavailable", tone: "info" },
      { label: "Logs", value: state.logs.desktop, tone: "info" },
      ...warningRows(state),
    ],
    commands: ["o3-code logs --follow", "o3-code restart", "o3-code stop"],
  });
}

function warningRows(state: LauncherState): readonly Row[] {
  return state.warnings.map((warning, index) => ({
    label: index === 0 ? "Warning" : "",
    value: warning,
    tone: "warn" as const,
  }));
}

export function renderStopPanel(stopped: boolean, state: LauncherState | null): string {
  return renderPanel({
    title: "O3 Code stop",
    subtitle: "Local O3 Code",
    rows: [
      {
        label: "Status",
        value: stopped ? "Stopped" : "Not running",
        tone: stopped ? "ok" : "warn",
      },
      { label: "Logs", value: state?.logs.desktop ?? "No logs yet", tone: "info" },
    ],
    commands: ["o3-code start", "o3-code logs"],
  });
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
      { borderStyle: "round", borderColor: "cyan", flexDirection: "column", paddingX: 1 },
      React.createElement(Text, { bold: true }, title),
      React.createElement(Text, { color: "gray" }, subtitle),
      React.createElement(Text, null, ""),
      ...rows.map((row) =>
        React.createElement(
          Text,
          { key: row.label },
          React.createElement(Text, { color: "gray" }, `${row.label.padEnd(8)} `),
          React.createElement(Text, { color: colorForTone(row.tone ?? "info") }, row.value),
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
