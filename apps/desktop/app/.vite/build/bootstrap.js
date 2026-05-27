// o3-code-patch-begin: resources-path-redirect
let o3CodeResourcesPath = process.env.CODEX_ELECTRON_RESOURCES_PATH?.trim();
if (o3CodeResourcesPath)
  Object.defineProperty(process, `resourcesPath`, {
    configurable: true,
    value: o3CodeResourcesPath,
  });
// o3-code-patch-end: resources-path-redirect
const e = require(`./app-session.js`),
  t = require(`./workspace-root-drop-handler.js`);
let n = require(`electron`),
  r = require(`node:path`);
require(`node:crypto`);
let i = require(`node:child_process`);
var a = `desktop.intelLaunchWarning.message`,
  o = `{appName} is running the Intel build on an Apple Silicon Mac`,
  s = `desktop.intelLaunchWarning.detail`,
  c = `This build works through Rosetta, but the Apple Silicon build launches faster and performs better. Quit now to install the Apple Silicon build, or continue with the Intel build`,
  l = `desktop.intelLaunchWarning.quit`,
  u = `Quit`,
  d = `desktop.intelLaunchWarning.continue`,
  f = `Continue Anyway`;
function p(e, t = h) {
  return !e.isPackaged || e.platform !== `darwin` || e.arch !== `x64`
    ? !1
    : t();
}
async function m({
  appName: e,
  environment: r,
  readProcessTranslated: i = h,
  loadNativeIntl: m = g,
  showMessageBox: _ = (e) => n.dialog.showMessageBox(e),
}) {
  if (!p(r, i)) return !0;
  try {
    let t = await m();
    return (
      (
        await _({
          type: `warning`,
          buttons: [
            t.formatMessage({ messageId: l, defaultMessage: u }),
            t.formatMessage({ messageId: d, defaultMessage: f }),
          ],
          defaultId: 0,
          cancelId: 0,
          noLink: !0,
          message: t.formatMessage({
            messageId: a,
            defaultMessage: o,
            values: { appName: e },
          }),
          detail: t.formatMessage({ messageId: s, defaultMessage: c }),
        })
      ).response === 1
    );
  } catch (e) {
    return (
      t
        .$r()
        .warning(`Failed to show Intel-on-Apple-Silicon launch warning`, {
          safe: { errorName: e instanceof Error ? e.name : null },
        }),
      !0
    );
  }
}
function h() {
  try {
    return (
      (0, i.execFileSync)(`sysctl`, [`-in`, `sysctl.proc_translated`], {
        encoding: `utf8`,
        env: t.Qr(process.env),
        stdio: [`ignore`, `pipe`, `ignore`],
      }).trim() === `1`
    );
  } catch {
    return !1;
  }
}
async function g() {
  try {
    return t.F();
  } catch {
    try {
      return await t.N.load(``);
    } catch {
      return t.N.createDefault();
    }
  }
}
function _({ appDataPath: t, buildFlavor: n, env: i }) {
  let a = i.CODEX_ELECTRON_USER_DATA_PATH?.trim();
  if (a) return (0, r.resolve)(a);
  let o = (0, r.join)(t, e.ft(n)),
    s = i.CODEX_ELECTRON_AGENT_RUN_ID?.trim() || null;
  return n === `agent` && s != null ? (0, r.join)(o, `agent`, s) : o;
}
// o3-code-patch-begin: web-access-settings
function o3CodeAllocateBridgeCdpPort() {
  let e = process.env.O3_CODE_BRIDGE_CDP_PORT?.trim();
  if (/^[1-9]\d*$/.test(e ?? ``)) return e;
  let t =
    process.env.CODEX_BROWSER_USE_NODE_PATH?.trim() ||
    (process.env.CODEX_ELECTRON_RESOURCES_PATH?.trim()
      ? (0, r.join)(process.env.CODEX_ELECTRON_RESOURCES_PATH.trim(), `node`)
      : null);
  if (!t) return null;
  try {
    let e = i
      .execFileSync(
        t,
        [
          `-e`,
          `const net=require("node:net");const server=net.createServer();server.listen(0,"127.0.0.1",()=>{console.log(server.address().port);server.close();});`,
        ],
        {
          encoding: `utf8`,
          env: process.env,
          stdio: [`ignore`, `pipe`, `ignore`],
        },
      )
      .trim();
    if (/^[1-9]\d*$/.test(e)) return e;
  } catch {}
  return null;
}
// o3-code-patch-end: web-access-settings
var v = {
  "install-update": `Install Update`,
  "check-for-updates": `Check for Updates`,
  quit: `Quit`,
};
async function y(e) {
  let { sparkleManager: r } = t.w(),
    i = r.getIsUpdateReady()
      ? [`install-update`, `quit`]
      : r.hasUpdater()
        ? [`check-for-updates`, `quit`]
        : [`quit`];
  switch (
    i[
      (
        await n.dialog.showMessageBox({
          type: `error`,
          buttons: i.map((e) => v[e]),
          defaultId: 0,
          cancelId: i.length - 1,
          message: `${n.app.getName()} failed to start.`,
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
      await r.installUpdatesIfAvailable();
      return;
    case `check-for-updates`:
      await r.checkForUpdates();
      return;
    case `quit`:
      n.app.quit();
      return;
  }
}
var b = process.platform === `darwin`,
  x = t.O.resolve();
(t.v(),
  t.n(b),
  n.app.setName(e.ft(x)),
  // o3-code-patch-begin: local-app-identity
  process.env.O3_CODE_APP_NAME?.trim() &&
    n.app.setName(process.env.O3_CODE_APP_NAME.trim()),
  // o3-code-patch-end: local-app-identity
  n.app.setPath(
    `userData`,
    _({
      appDataPath: n.app.getPath(`appData`),
      buildFlavor: x,
      env: process.env,
    }),
  ),
  // o3-code-patch-begin: web-access-settings
  (() => {
    let e = o3CodeAllocateBridgeCdpPort();
    if (e == null) return;
    process.env.O3_CODE_BRIDGE_CDP_PORT = e;
    n.app.commandLine.appendSwitch(`remote-debugging-address`, `127.0.0.1`);
    n.app.commandLine.appendSwitch(`remote-debugging-port`, e);
  })(),
  // o3-code-patch-end: web-access-settings
  process.platform === `win32` && n.app.setAppUserModelId(t.C(x)));
var S = t.S({ isMacOS: b, isPackaged: n.app.isPackaged });
if (!(!S || n.app.requestSingleInstanceLock()))
  (t
    .$r()
    .info(`Exiting second desktop instance`, {
      safe: { packaged: n.app.isPackaged, platform: process.platform },
    }),
    n.app.exit(0));
else {
  let e = t.w(x);
  (S &&
    n.app.on(`second-instance`, (t, n) => {
      e.queueSecondInstanceArgs(n);
    }),
    n.app.whenReady().then(async () => {
      let { desktopSentry: r, sparkleManager: i } = e;
      if (
        !(await m({
          appName: n.app.getName(),
          environment: {
            arch: process.arch,
            isPackaged: n.app.isPackaged,
            platform: process.platform,
          },
        }))
      ) {
        n.app.quit();
        return;
      }
      if (await t.g()) {
        await i.initialize();
        try {
          let { runMainAppStartup: e } = await Promise.resolve().then(() =>
            require(`./main.js`),
          );
          await e();
        } catch (e) {
          for (let e of n.BrowserWindow.getAllWindows())
            e.isDestroyed() || e.destroy();
          (t
            .$r()
            .error(`Desktop bootstrap failed to start the main app`, {
              safe: { phase: `bootstrap-import-main` },
            }),
            r.captureException(e, { tags: { phase: `bootstrap-import-main` } }),
            await y(e));
        }
      }
    }));
}
//# sourceMappingURL=bootstrap.js.map
