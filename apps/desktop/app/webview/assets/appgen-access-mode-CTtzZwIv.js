import { t as e } from "./jsx-runtime.js";
import { wt as t } from "./setting-storage.js";
import { t as n } from "./globe-CnvlclXd.js";
import { t as r } from "./building.js";
import { m as i } from "./appgen-url-DZWguk-Q.js";
import { t as a } from "./lock.js";
import { t as o } from "./members.js";
var s = t(),
  c = e();
function l(e) {
  let t = (0, s.c)(13),
    l,
    u;
  if (
    (t[0] === e
      ? ((l = t[1]), (u = t[2]))
      : (({ accessPolicy: l, ...u } = e), (t[0] = e), (t[1] = l), (t[2] = u)),
    l == null)
  ) {
    let e;
    return (
      t[3] === u
        ? (e = t[4])
        : ((e = (0, c.jsx)(a, { ...u })), (t[3] = u), (t[4] = e)),
      e
    );
  }
  switch (i(l)) {
    case `admins_only`: {
      let e;
      return (
        t[5] === u
          ? (e = t[6])
          : ((e = (0, c.jsx)(a, { ...u })), (t[5] = u), (t[6] = e)),
        e
      );
    }
    case `custom`: {
      let e;
      return (
        t[7] === u
          ? (e = t[8])
          : ((e = (0, c.jsx)(o, { ...u })), (t[7] = u), (t[8] = e)),
        e
      );
    }
    case `workspace_all`: {
      let e;
      return (
        t[9] === u
          ? (e = t[10])
          : ((e = (0, c.jsx)(r, { ...u })), (t[9] = u), (t[10] = e)),
        e
      );
    }
    case `public`: {
      let e;
      return (
        t[11] === u
          ? (e = t[12])
          : ((e = (0, c.jsx)(n, { ...u })), (t[11] = u), (t[12] = e)),
        e
      );
    }
  }
}
export { l as t };
//# sourceMappingURL=appgen-access-mode-CTtzZwIv.js.map
