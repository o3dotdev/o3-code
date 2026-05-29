import { i as e, r as t } from "./src-R7eY56fO.js";
import "./chunk-K5T4RW27-BoddZX5a.js";
import "./chunk-7N4EOEYR-BVkCi3jK.js";
import "./chunk-67CJDMHE-DF_K9BVd.js";
import "./chunk-KGLVRYIC-DpzJS06B.js";
import "./chunk-FOC6F5B3-DGmJ4gqN.js";
import "./chunk-AA7GKIK3-D_NvrMu4.js";
import "./chunk-2KRD3SAO-DoM7KWpC.js";
import "./chunk-ORNJ4GCN-B416dGQ1.js";
import "./chunk-LIHQZDEY-BLrmv1UG.js";
import "./chunk-CIAEETIT-CXda_1hA.js";
import { c as n } from "./chunk-ICPOFSXX-DzGQTWsA.js";
import { t as r } from "./chunk-426QAEUC-OMaqRvzj.js";
import { t as i } from "./mermaid-parser.core-Dzn7tqKX.js";
var a = {
    parse: t(async (t) => {
      let n = await i(`info`, t);
      e.debug(n);
    }, `parse`),
  },
  o = { version: `11.14.0` },
  s = {
    parser: a,
    db: { getVersion: t(() => o.version, `getVersion`) },
    renderer: {
      draw: t((t, i, a) => {
        e.debug(
          `rendering info diagram
` + t,
        );
        let o = r(i);
        (n(o, 100, 400, !0),
          o
            .append(`g`)
            .append(`text`)
            .attr(`x`, 100)
            .attr(`y`, 40)
            .attr(`class`, `version`)
            .attr(`font-size`, 32)
            .style(`text-anchor`, `middle`)
            .text(`v${a}`));
      }, `draw`),
    },
  };
export { s as diagram };
//# sourceMappingURL=infoDiagram-42DDH7IO-BHGlaUVP.js.map
