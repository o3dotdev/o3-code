import { E as e, L as t, O as n } from "./use-rate-limit-CHw1iTKR.js";
var r = 300,
  i = n,
  a = 30 * e;
function o({ entry: e, keyPrefix: n }) {
  let r = [
    { bucket: e.snapshot.primary, role: `primary` },
    { bucket: e.snapshot.secondary, role: `secondary` },
  ]
    .filter((e) => t(e.bucket))
    .sort(
      (e, t) =>
        (e.bucket.windowDurationMins ?? 0) - (t.bucket.windowDurationMins ?? 0),
    );
  if (r.length === 0) return [];
  let i = new Map();
  return r.map(({ bucket: t, role: r }, a) => {
    let o = s(t, r, a),
      c = i.get(o) ?? 0;
    return (
      i.set(o, c + 1),
      {
        key: `${n}-${c === 0 ? o : `${o}-${r}`}`,
        bucket: t,
        limitName: e.limitName,
      }
    );
  });
}
function s(e, t, n) {
  let o = e.windowDurationMins ?? 0;
  return Math.abs(o - r) <= 1
    ? `five-hour`
    : Math.abs(o - i) <= 1
      ? `weekly`
      : Math.abs(o - a) <= 1
        ? `monthly`
        : `${t}-${n}-${o}`;
}
export { o as t };
//# sourceMappingURL=rate-limit-rows-aLI2Ojzo.js.map
