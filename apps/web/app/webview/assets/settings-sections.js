var e = `general-settings`,
  t = (function (e) {
    return (
      (e.String = `string`),
      (e.Array = `array`),
      (e.Record = `record`),
      e
    );
  })({}),
  n = [
    { slug: `general-settings` },
    ...[],
    { slug: `appearance` },
    { slug: `appshots` },
    { slug: `git-settings` },
    { slug: `connections` },
    // o3-code-patch-begin: web-access-settings
    { slug: `web-access` },
    // o3-code-patch-end: web-access-settings
    { slug: `local-environments` },
    { slug: `worktrees` },
    { slug: `agent` },
    { slug: `personalization` },
    { slug: `keyboard-shortcuts` },
    { slug: `usage` },
    { slug: `browser-use` },
    { slug: `computer-use` },
    { slug: `mcp-settings` },
    { slug: `hooks-settings` },
    { slug: `plugins-settings` },
    { slug: `skills-settings` },
    { slug: `data-controls` },
  ];
export { n, t as r, e as t };
//# sourceMappingURL=settings-sections.js.map
