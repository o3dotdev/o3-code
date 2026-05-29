function e(e) {
  let t = new Date(e);
  return Number.isNaN(t.getTime())
    ? e
    : new Intl.DateTimeFormat(void 0, {
        dateStyle: `short`,
        timeStyle: `short`,
      }).format(t);
}
export { e as t };
//# sourceMappingURL=format-short-local-date-time.js.map
