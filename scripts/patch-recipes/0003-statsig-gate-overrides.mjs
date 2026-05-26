import { snippet } from "./lib.mjs";

const id = "statsig-gate-overrides";

function findStatsigChunk(context) {
  return context.findOne({
    root: "apps/desktop/app/webview/assets",
    description: "shared Statsig webview chunk",
    predicate: ({ file, source }) =>
      /\/statsig-[A-Za-z0-9_-]+\.js$/.test(file) &&
      source.includes("useFeatureGate hook failed") &&
      source.includes("useGateValue hook failed") &&
      source.includes("useStatsigClient") &&
      source.includes("function Xe(e, t)"),
  });
}

const replacements = [
  {
    name: "useFeatureGate",
    before: snippet([
      "      return (0, t.useMemo)(",
      "        () =>",
      "          (0, i.isNoopClient)(o)",
      "            ? (r.Log.warn(",
      "                `useFeatureGate hook failed to find a valid StatsigClient for gate '${e}'.`,",
      "              ),",
      "              i.NoopEvaluationsClient.getFeatureGate(e, n))",
      "            : o.getFeatureGate(e, n),",
      "        [e, o, s, ...(n ? Object.values(n) : [])],",
      "      );",
    ]),
    after: snippet([
      "      return (0, t.useMemo)(",
      "        () =>",
      "          (0, i.isNoopClient)(o)",
      "            ? (r.Log.warn(",
      "                `useFeatureGate hook failed to find a valid StatsigClient for gate '${e}'.`,",
      "              ),",
      "              (",
      "                // o3-code-patch-begin: statsig-gate-overrides",
      "                o3CodeForceFeatureGate(",
      "                  i.NoopEvaluationsClient.getFeatureGate(e, n),",
      "                  e,",
      "                )",
      "                // o3-code-patch-end: statsig-gate-overrides",
      "              ))",
      "            : (",
      "              // o3-code-patch-begin: statsig-gate-overrides",
      "              o3CodeGetFeatureGate(o, e, n)",
      "              // o3-code-patch-end: statsig-gate-overrides",
      "            ),",
      "        [e, o, s, ...(n ? Object.values(n) : [])],",
      "      );",
    ]),
  },
  {
    name: "useGateValue",
    before: snippet([
      "      return (0, t.useMemo)(",
      "        () =>",
      "          (0, i.isNoopClient)(o)",
      "            ? (r.Log.warn(",
      "                `useGateValue hook failed to find a valid StatsigClient for gate '${e}'.`,",
      "              ),",
      "              i.NoopEvaluationsClient.checkGate(e, n))",
      "            : o.checkGate(e, n),",
      "        [e, o, s, ...(n ? Object.values(n) : [])],",
      "      );",
    ]),
    after: snippet([
      "      return (0, t.useMemo)(",
      "        () =>",
      "          (0, i.isNoopClient)(o)",
      "            ? (r.Log.warn(",
      "                `useGateValue hook failed to find a valid StatsigClient for gate '${e}'.`,",
      "              ),",
      "              (",
      "                // o3-code-patch-begin: statsig-gate-overrides",
      "                o3CodeCheckGate(i.NoopEvaluationsClient, e, n)",
      "                // o3-code-patch-end: statsig-gate-overrides",
      "              ))",
      "            : (",
      "              // o3-code-patch-begin: statsig-gate-overrides",
      "              o3CodeCheckGate(o, e, n)",
      "              // o3-code-patch-end: statsig-gate-overrides",
      "            ),",
      "        [e, o, s, ...(n ? Object.values(n) : [])],",
      "      );",
    ]),
  },
  {
    name: "useStatsigClient callbacks",
    before: snippet([
      "        l = (0, t.useCallback)((e, t) => s.checkGate(e, t), c),",
      "        u = (0, t.useCallback)((e, t) => s.getFeatureGate(e, t), c),",
    ]),
    after: snippet([
      "        // o3-code-patch-begin: statsig-gate-overrides",
      "        l = (0, t.useCallback)((e, t) => o3CodeCheckGate(s, e, t), c),",
      "        u = (0, t.useCallback)((e, t) => o3CodeGetFeatureGate(s, e, t), c),",
      "        // o3-code-patch-end: statsig-gate-overrides",
    ]),
  },
  {
    name: "gate atom mount",
    before: "          r != null && t(r.checkGate(e)),",
    after: snippet([
      "          // o3-code-patch-begin: statsig-gate-overrides",
      "          (r != null && t(o3CodeCheckGate(r, e))),",
      "          // o3-code-patch-end: statsig-gate-overrides",
    ]),
  },
  {
    name: "atom fallback read",
    before: "  return n == null ? !1 : n.checkGate(t);",
    after: snippet([
      "  // o3-code-patch-begin: statsig-gate-overrides",
      "  return n == null ? o3CodeShouldForceFeatureGate(t) : o3CodeCheckGate(n, t);",
      "  // o3-code-patch-end: statsig-gate-overrides",
    ]),
  },
  {
    name: "values_updated refresh",
    before: "        let r = t.checkGate(n);",
    after: snippet([
      "        // o3-code-patch-begin: statsig-gate-overrides",
      "        let r = o3CodeCheckGate(t, n);",
      "        // o3-code-patch-end: statsig-gate-overrides",
    ]),
  },
  {
    name: "direct checkGate helper",
    before: snippet(["function Xe(e, t) {", "  return e.checkGate(t);", "}"]),
    after: snippet([
      "function Xe(e, t) {",
      "  // o3-code-patch-begin: statsig-gate-overrides",
      "  return o3CodeCheckGate(e, t);",
      "  // o3-code-patch-end: statsig-gate-overrides",
      "}",
      "// o3-code-patch-begin: statsig-gate-overrides",
      "var o3CodeForcedFeatureGates = new Set();",
      "function o3CodeShouldForceFeatureGate(e) {",
      "  return o3CodeForcedFeatureGates.has(e);",
      "}",
      "function o3CodeCheckGate(e, t, n) {",
      "  try {",
      "    let r = e?.checkGate?.(t, n) === !0;",
      "    return o3CodeShouldForceFeatureGate(t) ? !0 : r;",
      "  } catch {",
      "    return o3CodeShouldForceFeatureGate(t);",
      "  }",
      "}",
      "function o3CodeGetFeatureGate(e, t, n) {",
      "  try {",
      "    return o3CodeForceFeatureGate(e?.getFeatureGate?.(t, n), t);",
      "  } catch {",
      "    return o3CodeForceFeatureGate(null, t);",
      "  }",
      "}",
      "function o3CodeForceFeatureGate(e, t) {",
      "  let n = o3CodeShouldForceFeatureGate(t);",
      "  return e && typeof e == `object`",
      "    ? n",
      "      ? { ...e, value: !0 }",
      "      : e",
      "    : {",
      "        name: t ?? ``,",
      "        details: { reason: n ? `O3CodeForcedEnabled` : `O3CodeUnavailable` },",
      "        ruleID: ``,",
      "        __evaluation: null,",
      "        value: n,",
      "        idType: null,",
      "      };",
      "}",
      "// o3-code-patch-end: statsig-gate-overrides",
    ]),
  },
];

export default {
  id,
  recordPath: "docs/patches/0003-statsig-gate-overrides.md",
  dependsOn: [],
  apply(context) {
    const file = findStatsigChunk(context);
    return context.replaceSet({
      file,
      patchId: id,
      replacements,
    });
  },
};
