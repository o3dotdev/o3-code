import { qi as e } from "./src-C.js";
var t = e()
  .url()
  .refine((e) => e.startsWith(`https://`));
function n(e, n) {
  let r = t.safeParse(e.url);
  return r.success ? r.data : n;
}
export { n as t };
//# sourceMappingURL=statsig-url-config.js.map
