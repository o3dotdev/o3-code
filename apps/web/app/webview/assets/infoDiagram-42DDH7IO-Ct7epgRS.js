import { i as e, r as t } from "./src-BfXtHEJ6.js";
import "./chunk-K5T4RW27-DHLU15Xj.js";
import "./chunk-7N4EOEYR-FVX8to_8.js";
import "./chunk-67CJDMHE-BjDJ_jM4.js";
import "./chunk-KGLVRYIC-C4Rw2W8_.js";
import "./chunk-FOC6F5B3-DGCBnL12.js";
import "./chunk-AA7GKIK3-CtLdVPuq.js";
import "./chunk-2KRD3SAO-BMNeLFg2.js";
import "./chunk-ORNJ4GCN-Dro2laS_.js";
import "./chunk-LIHQZDEY-DpbQU_QJ.js";
import "./chunk-CIAEETIT-CxFg_1Bx.js";
import { c as n } from "./chunk-ICPOFSXX-CZmUq3Vt.js";
import { t as r } from "./chunk-426QAEUC-D0WOhaME.js";
import { t as i } from "./mermaid-parser.core-B3W2lQYr.js";
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
//# sourceMappingURL=infoDiagram-42DDH7IO-Ct7epgRS.js.map
