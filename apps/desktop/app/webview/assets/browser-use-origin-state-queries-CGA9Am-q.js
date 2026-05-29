import { Xs as e } from "./app-server-manager-signals-DkRDRgNB.js";
import {
  C as t,
  L as n,
  S as r,
  _ as i,
  f as a,
  l as o,
  u as s,
  w as c,
  wt as l,
} from "./setting-storage.js";
import { t as u } from "./invalidate-queries-and-broadcast-BXgBlyBv.js";
var d = l(),
  f = s(`browser-use-origin-state-read`),
  p = a(r, `browser-use-origin-state-read`, { staleTime: i.FIVE_SECONDS });
function m(n) {
  let r = (0, d.c)(8),
    { hostId: i } = n,
    a = u(),
    o;
  r[0] !== i || r[1] !== a
    ? ((o = async () => {
        await Promise.all([
          a(f),
          e(`clear-prewarmed-threads-for-host`, { hostId: i }),
        ]);
      }),
      (r[0] = i),
      (r[1] = a),
      (r[2] = o))
    : (o = r[2]);
  let s;
  r[3] === a
    ? (s = r[4])
    : ((s = (e) => {
        (t.error(`Failed to update Browser Use full CDP access`, {
          safe: {},
          sensitive: { error: String(e) },
        }),
          a(f));
      }),
      (r[3] = a),
      (r[4] = s));
  let l;
  return (
    r[5] !== o || r[6] !== s
      ? ((l = { mutationFn: h, onSuccess: o, onError: s }),
        (r[5] = o),
        (r[6] = s),
        (r[7] = l))
      : (l = r[7]),
    c(l)
  );
}
function h(e) {
  return o(`browser-use-full-cdp-access-enabled-write`, {
    params: { enabled: e },
  });
}
function g() {
  let e = (0, d.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { mutationFn: _ }), (e[0] = t))
      : (t = e[0]),
    c(t)
  );
}
async function _(e) {
  try {
    return await o(`browser-browsing-data-clear`, { params: { dataTypes: e } });
  } catch (e) {
    throw (
      t.error(`Failed to clear browser browsing data`, {
        safe: { error: String(e) },
        sensitive: {},
      }),
      e
    );
  }
}
function v() {
  let e = (0, d.c)(2),
    r = n(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = {
          mutationFn: y,
          onSuccess: async () => {
            await r.invalidateQueries({ queryKey: f });
          },
          onError: (e) => {
            (t.error(`Failed to update browser-use approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              r.invalidateQueries({ queryKey: f }));
          },
        }),
        (e[0] = r),
        (e[1] = i)),
    c(i)
  );
}
function y(e) {
  return o(`browser-use-approval-mode-write`, { params: { approvalMode: e } });
}
function b() {
  let e = (0, d.c)(2),
    r = n(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = {
          mutationFn: x,
          onSuccess: async () => {
            await r.invalidateQueries({ queryKey: f });
          },
          onError: (e) => {
            (t.error(`Failed to update browser-use history approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              r.invalidateQueries({ queryKey: f }));
          },
        }),
        (e[0] = r),
        (e[1] = i)),
    c(i)
  );
}
function x(e) {
  return o(`browser-use-history-approval-mode-write`, {
    params: { approvalMode: e },
  });
}
function S() {
  let e = (0, d.c)(2),
    r = n(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = {
          mutationFn: C,
          onSuccess: async () => {
            await r.invalidateQueries({ queryKey: f });
          },
          onError: (e) => {
            (t.error(
              `Failed to update browser-use file transfer approval mode`,
              { safe: { error: String(e) }, sensitive: {} },
            ),
              r.invalidateQueries({ queryKey: f }));
          },
        }),
        (e[0] = r),
        (e[1] = i)),
    c(i)
  );
}
function C(e) {
  let { approvalMode: t, kind: n } = e;
  return o(`browser-use-file-transfer-approval-mode-write`, {
    params: { approvalMode: t, kind: n },
  });
}
function w() {
  let e = (0, d.c)(2),
    r = n(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = {
          mutationFn: T,
          onSuccess: async () => {
            await r.invalidateQueries({ queryKey: f });
          },
          onError: (e) => {
            (t.error(`Failed to update browser-use origin state`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              r.invalidateQueries({ queryKey: f }));
          },
        }),
        (e[0] = r),
        (e[1] = i)),
    c(i)
  );
}
function T(e) {
  let { kind: t, origin: n } = e;
  return o(`browser-use-origin-add`, { params: { kind: t, targetOrigin: n } });
}
function E() {
  let e = (0, d.c)(2),
    r = n(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = {
          mutationFn: D,
          onSuccess: async () => {
            await r.invalidateQueries({ queryKey: f });
          },
          onError: (e) => {
            (t.error(
              `Failed to update browser-use file transfer origin state`,
              { safe: { error: String(e) }, sensitive: {} },
            ),
              r.invalidateQueries({ queryKey: f }));
          },
        }),
        (e[0] = r),
        (e[1] = i)),
    c(i)
  );
}
function D(e) {
  let { kind: t, origin: n, transferKind: r } = e;
  return o(`browser-use-file-transfer-origin-add`, {
    params: { kind: t, targetOrigin: n, transferKind: r },
  });
}
function O() {
  let e = (0, d.c)(2),
    r = n(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = {
          mutationFn: k,
          onSuccess: async () => {
            await r.invalidateQueries({ queryKey: f });
          },
          onError: (e) => {
            (t.error(`Failed to update browser-use origin state`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              r.invalidateQueries({ queryKey: f }));
          },
        }),
        (e[0] = r),
        (e[1] = i)),
    c(i)
  );
}
function k(e) {
  let { kind: t, origin: n } = e;
  return o(`browser-use-origin-remove`, {
    params: { kind: t, targetOrigin: n },
  });
}
function A() {
  let e = (0, d.c)(2),
    r = n(),
    i;
  return (
    e[0] === r
      ? (i = e[1])
      : ((i = {
          mutationFn: j,
          onSuccess: async () => {
            await r.invalidateQueries({ queryKey: f });
          },
          onError: (e) => {
            (t.error(
              `Failed to update browser-use file transfer origin state`,
              { safe: { error: String(e) }, sensitive: {} },
            ),
              r.invalidateQueries({ queryKey: f }));
          },
        }),
        (e[0] = r),
        (e[1] = i)),
    c(i)
  );
}
function j(e) {
  let { kind: t, origin: n, transferKind: r } = e;
  return o(`browser-use-file-transfer-origin-remove`, {
    params: { kind: t, targetOrigin: n, transferKind: r },
  });
}
export {
  g as a,
  v as c,
  b as d,
  w as i,
  S as l,
  _ as n,
  A as o,
  E as r,
  O as s,
  p as t,
  m as u,
};
//# sourceMappingURL=browser-use-origin-state-queries-CGA9Am-q.js.map
