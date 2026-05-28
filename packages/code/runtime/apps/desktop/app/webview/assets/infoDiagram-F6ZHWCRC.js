import "./chunk-FPAJGGOC.js";
import "./chunk-O7ZBX7Z2.js";
import "./chunk-S6J4BHB3.js";
import "./chunk-LBM3YZW2.js";
import "./chunk-76Q3JFCE.js";
import "./chunk-T53DSG4Q.js";
import "./chunk-LHMN2FUI.js";
import "./chunk-FWNWRKHM.js";
import { i as e, r as t } from "./src-DXdm7MTq.js";
import { c as n } from "./chunk-ABZYJK2D.js";
import { t as r } from "./chunk-EXTU4WIE.js";
import { t as i } from "./mermaid-parser.core.js";
import { t as a } from "./chunk-KS23V3DP.js";
var o = {
    parse: t(async (t) => {
      let n = await i(`info`, t);
      e.debug(n);
    }, `parse`),
  },
  s = { version: a.version + `` },
  c = {
    parser: o,
    db: { getVersion: t(() => s.version, `getVersion`) },
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
export { c as diagram };
//# sourceMappingURL=infoDiagram-F6ZHWCRC.js.map
