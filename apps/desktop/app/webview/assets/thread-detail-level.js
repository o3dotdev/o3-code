import { y as e } from "./src-C.js";
import { a as t, wt as n } from "./setting-storage.js";
var r = n(),
  i = `STEPS_PROSE`,
  a = `STEPS_COMMANDS`;
function o(e) {
  return e === `STEPS_EXECUTION` ? a : (e ?? `STEPS_COMMANDS`);
}
function s() {
  let n = (0, r.c)(2),
    i = t(e.conversationDetailMode),
    a;
  return (n[0] === i ? (a = n[1]) : ((a = o(i)), (n[0] = i), (n[1] = a)), a);
}
export { s as i, i as n, o as r, a as t };
//# sourceMappingURL=thread-detail-level.js.map
