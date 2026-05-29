import { kr as e } from "./src-C.js";
import { Fi as t } from "./app-server-manager-signals-DkRDRgNB.js";
import { y as n } from "./setting-storage.js";
import { t as r } from "./thread-context-inputs-DBrOekVr.js";
import { n as i } from "./remote-projects.js";
import { r as a } from "./local-projects.js";
function o(e, t) {
  if (t?.projectKind === `local`) {
    a.select(e, t);
    return;
  }
  if ((s(e, t), t?.projectKind === `remote`)) {
    i(e, t.projectId);
    return;
  }
  (i(e, null), n.dispatchMessage(`electron-clear-active-workspace-root`, {}));
}
function s(n, i) {
  (n.query.setData(t, e.ACTIVE_REMOTE_PROJECT_ID, { value: i?.projectId }),
    n.query.setData(r, { roots: [] }));
}
export { o as t };
//# sourceMappingURL=select-project.js.map
