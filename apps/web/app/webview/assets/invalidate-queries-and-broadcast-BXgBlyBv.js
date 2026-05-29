import { L as e, wt as t, y as n } from "./setting-storage.js";
var r = t();
async function i(e, t) {
  (await e.invalidateQueries({ queryKey: t }), o(t));
}
function a() {
  let t = (0, r.c)(2),
    n = e(),
    a;
  return (
    t[0] === n
      ? (a = t[1])
      : ((a = async (e) => {
          await i(n, e);
        }),
        (t[0] = n),
        (t[1] = a)),
    a
  );
}
function o(e) {
  n.dispatchMessage(`query-cache-invalidate`, { queryKey: [...e] });
}
export { a as t };
//# sourceMappingURL=invalidate-queries-and-broadcast-BXgBlyBv.js.map
