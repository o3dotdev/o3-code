import { s as e } from "./chunk-Bj-mKKzh.js";
import "./src-C.js";
import "./app-server-manager-signals-DkRDRgNB.js";
import { n as t } from "./jsx-runtime.js";
import "./marked.esm-BR-H6018.js";
import { X as n, wt as r } from "./setting-storage.js";
import "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./experimental-features-queries.js";
import { t as i } from "./route-scope.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./os-info-CLWbGRUe.js";
import "./open-workspace-file-WgoEFjrv.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./app-shell-state.js";
import "./browser-sidebar-availability.js";
import "./app-shell-tab-controller-BTWycTBb.js";
import "./thread-context-CaET2O8s.js";
import "./terminal.js";
import "./folder.js";
import "./skills-BUMAZe_D.js";
import "./get-file-icon.js";
import "./code-s3Scfd05.js";
import "./json-CRHyc9De.js";
import "./image-square-CGEtcnWp.js";
import "./notebook-MImpo36y.js";
import "./settings.cog.js";
import "./workspace-file-context-menu.js";
import { t as a } from "./open-artifact-side-panel-tab.js";
var o = r(),
  s = e(t(), 1);
function c(e) {
  let t = (0, o.c)(4),
    { hostId: n, locationKey: r, previewFiles: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = { hostId: n, locationKey: r, previewFiles: i }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    l(a),
    null
  );
}
function l(e) {
  let t = (0, o.c)(6),
    { hostId: r, locationKey: c, previewFiles: l } = e,
    u = n(i),
    d = (0, s.useRef)(null),
    f,
    p;
  (t[0] !== r || t[1] !== c || t[2] !== l || t[3] !== u
    ? ((f = () => {
        if (!(l == null || l.length === 0 || d.current === c)) {
          d.current = c;
          for (let e of l) {
            let t = e.fsPath || e.path;
            t == null ||
              t.length === 0 ||
              a(u, t, { hostId: r, title: e.label });
          }
        }
      }),
      (p = [r, c, l, u]),
      (t[0] = r),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u),
      (t[4] = f),
      (t[5] = p))
    : ((f = t[4]), (p = t[5])),
    (0, s.useEffect)(f, p));
}
export { c as HomePrefillArtifactPreview };
//# sourceMappingURL=home-prefill-artifact-preview.js.map
