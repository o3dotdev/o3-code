import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t, t as n } from "./jsx-runtime.js";
import { G as r, wt as i } from "./setting-storage.js";
import { t as a } from "./use-relative-now.js";
var o = i(),
  s = e(t(), 1),
  c = n(),
  l = 7,
  u = 30,
  d = 365,
  f = (0, s.createContext)(null);
function p(e, t) {
  return Math.floor((e.getTime() - t.getTime()) / 6e4);
}
function m(e, t) {
  let n = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
    r = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  return Math.round((n.getTime() - r.getTime()) / 864e5);
}
function h(e) {
  let t = (0, o.c)(7),
    { dateString: n } = e,
    r = (0, s.useContext)(f);
  if (r != null) {
    let e;
    t[0] === r ? (e = t[1]) : ((e = new Date(r)), (t[0] = r), (t[1] = e));
    let i;
    return (
      t[2] !== n || t[3] !== e
        ? ((i = (0, c.jsx)(_, { dateString: n, now: e })),
          (t[2] = n),
          (t[3] = e),
          (t[4] = i))
        : (i = t[4]),
      i
    );
  }
  let i;
  return (
    t[5] === n
      ? (i = t[6])
      : ((i = (0, c.jsx)(g, { dateString: n })), (t[5] = n), (t[6] = i)),
    i
  );
}
function g(e) {
  let t = (0, o.c)(3),
    { dateString: n } = e,
    r = a(),
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, c.jsx)(_, { dateString: n, now: r })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function _(e) {
  let t = (0, o.c)(22),
    { dateString: n, now: i } = e,
    a = r(),
    s,
    c;
  if (t[0] !== n || t[1] !== i) {
    let e = new Date(n);
    ((s = m(i, e)),
      (c = p(i, e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = s),
      (t[3] = c));
  } else ((s = t[2]), (c = t[3]));
  let f = c,
    h = Math.max(1, f);
  if (h < 60) {
    let e;
    return (
      t[4] !== a || t[5] !== h
        ? ((e = a.formatMessage(
            {
              id: `wham.formattedRelativeDateTime.compactMinutesAgo`,
              defaultMessage: `{value}m`,
              description: `Compact minutes-ago format`,
            },
            { value: h },
          )),
          (t[4] = a),
          (t[5] = h),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let g = Math.floor(h / 60);
  if (g < 24) {
    let e;
    return (
      t[7] !== g || t[8] !== a
        ? ((e = a.formatMessage(
            {
              id: `wham.formattedRelativeDateTime.compactHoursAgo`,
              defaultMessage: `{value}h`,
              description: `Compact hours-ago format`,
            },
            { value: g },
          )),
          (t[7] = g),
          (t[8] = a),
          (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  let _ = Math.max(1, s);
  if (_ < l) {
    let e;
    return (
      t[10] !== _ || t[11] !== a
        ? ((e = a.formatMessage(
            {
              id: `wham.formattedRelativeDateTime.compactDaysAgo`,
              defaultMessage: `{value}d`,
              description: `Compact days-ago format`,
            },
            { value: _ },
          )),
          (t[10] = _),
          (t[11] = a),
          (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  if (_ < u) {
    let e = Math.floor(_ / l),
      n;
    return (
      t[13] !== a || t[14] !== e
        ? ((n = a.formatMessage(
            {
              id: `wham.formattedRelativeDateTime.compactWeeksAgo`,
              defaultMessage: `{value}w`,
              description: `Compact weeks-ago format`,
            },
            { value: e },
          )),
          (t[13] = a),
          (t[14] = e),
          (t[15] = n))
        : (n = t[15]),
      n
    );
  }
  if (_ < d) {
    let e = Math.floor(_ / u),
      n;
    return (
      t[16] !== a || t[17] !== e
        ? ((n = a.formatMessage(
            {
              id: `wham.formattedRelativeDateTime.compactMonthsAgo`,
              defaultMessage: `{value}mo`,
              description: `Compact months-ago format`,
            },
            { value: e },
          )),
          (t[16] = a),
          (t[17] = e),
          (t[18] = n))
        : (n = t[18]),
      n
    );
  }
  let v = Math.floor(_ / d),
    y;
  return (
    t[19] !== a || t[20] !== v
      ? ((y = a.formatMessage(
          {
            id: `wham.formattedRelativeDateTime.compactYearsAgo`,
            defaultMessage: `{value}y`,
            description: `Compact years-ago format`,
          },
          { value: v },
        )),
        (t[19] = a),
        (t[20] = v),
        (t[21] = y))
      : (y = t[21]),
    y
  );
}
export { h as t };
//# sourceMappingURL=format-relative-date-time.js.map
