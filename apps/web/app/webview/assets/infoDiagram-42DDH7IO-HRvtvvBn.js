import { i as e, r as t } from "./src-mdjmU4rF.js";
import "./chunk-K5T4RW27-XyWRlgAf.js";
import "./chunk-7N4EOEYR-CoSIxqu2.js";
import "./chunk-67CJDMHE-MR8YAl4Z.js";
import "./chunk-KGLVRYIC-DvgC92ac.js";
import "./chunk-FOC6F5B3-Cjhn4L2e.js";
import "./chunk-AA7GKIK3-WQyMLFap.js";
import "./chunk-2KRD3SAO-fOmwQHfw.js";
import "./chunk-ORNJ4GCN-BxhZ6vgR.js";
import "./chunk-LIHQZDEY-ChL3gR45.js";
import "./chunk-CIAEETIT-5KVF5vJe.js";
import { c as n } from "./chunk-ICPOFSXX-ChD3pFsQ.js";
import { t as r } from "./chunk-426QAEUC-B46Ag8Y3.js";
import { t as i } from "./mermaid-parser.core-Jv6mO8Np.js";
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
//# sourceMappingURL=infoDiagram-42DDH7IO-HRvtvvBn.js.map
