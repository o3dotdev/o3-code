const e = require(`./src-B5wXNbcV.js`),
  t = require(`./src-DJzHq3CP.js`),
  n = require(`./workspace-root-drop-handler.js`);
let r = require(`electron`),
  i = require(`node:path`);
require(`node:crypto`);
let a = require(`node:child_process`);
var o = `desktop.intelLaunchWarning.message`,
  s = `{appName} is running the Intel build on an Apple Silicon Mac`,
  c = `desktop.intelLaunchWarning.detail`,
  l = `This build works through Rosetta, but the Apple Silicon build launches faster and performs better. Quit now to install the Apple Silicon build, or continue with the Intel build`,
  u = `desktop.intelLaunchWarning.quit`,
  d = `Quit`,
  f = `desktop.intelLaunchWarning.continue`,
  p = `Continue Anyway`;
function m(e, t = g) {
  return !e.isPackaged || e.platform !== `darwin` || e.arch !== `x64`
    ? !1
    : t();
}
async function h({
  appName: e,
  environment: n,
  readProcessTranslated: i = g,
  loadNativeIntl: a = _,
  showMessageBox: h = (e) => r.dialog.showMessageBox(e),
}) {
  if (!m(n, i)) return !0;
  try {
    let t = await a();
    return (
      (
        await h({
          type: `warning`,
          buttons: [
            t.formatMessage({ messageId: u, defaultMessage: d }),
            t.formatMessage({ messageId: f, defaultMessage: p }),
          ],
          defaultId: 0,
          cancelId: 0,
          noLink: !0,
          message: t.formatMessage({
            messageId: o,
            defaultMessage: s,
            values: { appName: e },
          }),
          detail: t.formatMessage({ messageId: c, defaultMessage: l }),
        })
      ).response === 1
    );
  } catch (e) {
    return (
      t.Nr().warning(`Failed to show Intel-on-Apple-Silicon launch warning`, {
        safe: { errorName: e instanceof Error ? e.name : null },
      }),
      !0
    );
  }
}
function g() {
  try {
    return (
      (0, a.execFileSync)(`sysctl`, [`-in`, `sysctl.proc_translated`], {
        encoding: `utf8`,
        env: t.jr(process.env),
        stdio: [`ignore`, `pipe`, `ignore`],
      }).trim() === `1`
    );
  } catch {
    return !1;
  }
}
async function _() {
  try {
    return n.R();
  } catch {
    try {
      return await n.I.load(``);
    } catch {
      return n.I.createDefault();
    }
  }
}
function v({ appDataPath: t, buildFlavor: n, env: r }) {
  let a = r.CODEX_ELECTRON_USER_DATA_PATH?.trim();
  if (a) return (0, i.resolve)(a);
  let o = (0, i.join)(t, e.dt(n)),
    s = r.CODEX_ELECTRON_AGENT_RUN_ID?.trim() || null;
  return n === `agent` && s != null ? (0, i.join)(o, `agent`, s) : o;
}
var y = {
  "install-update": `Install Update`,
  "check-for-updates": `Check for Updates`,
  quit: `Quit`,
};
async function b(e) {
  let { sparkleManager: t } = n.D(),
    i = t.getIsUpdateReady()
      ? [`install-update`, `quit`]
      : t.hasUpdater()
        ? [`check-for-updates`, `quit`]
        : [`quit`];
  switch (
    i[
      (
        await r.dialog.showMessageBox({
          type: `error`,
          buttons: i.map((e) => y[e]),
          defaultId: 0,
          cancelId: i.length - 1,
          message: `${r.app.getName()} failed to start.`,
          detail:
            e instanceof Error
              ? e.message
              : `The main desktop app failed during startup.`,
          noLink: !0,
        })
      ).response
    ] ??
    `quit`
  ) {
    case `install-update`:
      await t.installUpdatesIfAvailable();
      return;
    case `check-for-updates`:
      await t.checkForUpdates();
      return;
    case `quit`:
      r.app.quit();
      return;
  }
}
var x = process.platform === `darwin`,
  S = n.j.resolve();
(n.v(),
  n.n(x),
  r.app.setName(e.dt(S)),
  r.app.setPath(
    `userData`,
    v({
      appDataPath: r.app.getPath(`appData`),
      buildFlavor: S,
      env: process.env,
    }),
  ),
  n.C(S),
  process.platform === `win32` && r.app.setAppUserModelId(n.E(S)));
var C = n.T({ isMacOS: x, isPackaged: r.app.isPackaged });
if (!(!C || r.app.requestSingleInstanceLock()))
  (t.Nr().info(`Exiting second desktop instance`, {
    safe: { packaged: r.app.isPackaged, platform: process.platform },
  }),
    r.app.exit(0));
else {
  let e = n.D(S);
  (C &&
    r.app.on(`second-instance`, (t, n) => {
      e.queueSecondInstanceArgs(n);
    }),
    r.app.whenReady().then(async () => {
      let { desktopSentry: i, sparkleManager: a } = e;
      if (
        !(await h({
          appName: r.app.getName(),
          environment: {
            arch: process.arch,
            isPackaged: r.app.isPackaged,
            platform: process.platform,
          },
        }))
      ) {
        r.app.quit();
        return;
      }
      if (await n.g()) {
        await a.initialize();
        try {
          let { runMainAppStartup: e } = await Promise.resolve().then(() =>
            require(`./main.js`),
          );
          await e();
        } catch (e) {
          for (let e of r.BrowserWindow.getAllWindows())
            e.isDestroyed() || e.destroy();
          (t.Nr().error(`Desktop bootstrap failed to start the main app`, {
            safe: { phase: `bootstrap-import-main` },
          }),
            i.captureException(e, { tags: { phase: `bootstrap-import-main` } }),
            await b(e));
        }
      }
    }));
}
//# sourceMappingURL=bootstrap.js.map
