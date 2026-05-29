import { t as e } from "./preload-helper.js";
var t = `en-US`,
  n = Object.assign({
    "../locales/am.json": () => e(() => import(`./am.js`), [], import.meta.url),
    "../locales/ar.json": () => e(() => import(`./ar.js`), [], import.meta.url),
    "../locales/bg-BG.json": () =>
      e(() => import(`./bg-BG-CR8-UUVB.js`), [], import.meta.url),
    "../locales/bn-BD.json": () =>
      e(() => import(`./bn-BD.js`), [], import.meta.url),
    "../locales/bs-BA.json": () =>
      e(() => import(`./bs-BA.js`), [], import.meta.url),
    "../locales/ca-ES.json": () =>
      e(() => import(`./ca-ES.js`), [], import.meta.url),
    "../locales/cs-CZ.json": () =>
      e(() => import(`./cs-CZ-BNEdfGsn.js`), [], import.meta.url),
    "../locales/da-DK.json": () =>
      e(() => import(`./da-DK-TH1N095_.js`), [], import.meta.url),
    "../locales/de-DE.json": () =>
      e(() => import(`./de-DE.js`), [], import.meta.url),
    "../locales/el-GR.json": () =>
      e(() => import(`./el-GR-CHZYHMWp.js`), [], import.meta.url),
    "../locales/es-419.json": () =>
      e(() => import(`./es-419-qV6wEk-7.js`), [], import.meta.url),
    "../locales/es-ES.json": () =>
      e(() => import(`./es-ES.js`), [], import.meta.url),
    "../locales/et-EE.json": () =>
      e(() => import(`./et-EE.js`), [], import.meta.url),
    "../locales/fa.json": () => e(() => import(`./fa.js`), [], import.meta.url),
    "../locales/fi-FI.json": () =>
      e(() => import(`./fi-FI-D2Vv1b-M.js`), [], import.meta.url),
    "../locales/fr-CA.json": () =>
      e(() => import(`./fr-CA-CNXTsPyW.js`), [], import.meta.url),
    "../locales/fr-FR.json": () =>
      e(() => import(`./fr-FR.js`), [], import.meta.url),
    "../locales/gu-IN.json": () =>
      e(() => import(`./gu-IN.js`), [], import.meta.url),
    "../locales/hi-IN.json": () =>
      e(() => import(`./hi-IN-CSgPneJZ.js`), [], import.meta.url),
    "../locales/hr-HR.json": () =>
      e(() => import(`./hr-HR-DqzFTi-x.js`), [], import.meta.url),
    "../locales/hu-HU.json": () =>
      e(() => import(`./hu-HU-Cns-ghCK.js`), [], import.meta.url),
    "../locales/hy-AM.json": () =>
      e(() => import(`./hy-AM-BkzyEyxH.js`), [], import.meta.url),
    "../locales/id-ID.json": () =>
      e(() => import(`./id-ID-GUkIiQ5-.js`), [], import.meta.url),
    "../locales/is-IS.json": () =>
      e(() => import(`./is-IS-COOmQiJC.js`), [], import.meta.url),
    "../locales/it-IT.json": () =>
      e(() => import(`./it-IT-CjDMYHdH.js`), [], import.meta.url),
    "../locales/ja-JP.json": () =>
      e(() => import(`./ja-JP.js`), [], import.meta.url),
    "../locales/ka-GE.json": () =>
      e(() => import(`./ka-GE-CbROa_6-.js`), [], import.meta.url),
    "../locales/kk.json": () => e(() => import(`./kk.js`), [], import.meta.url),
    "../locales/kn-IN.json": () =>
      e(() => import(`./kn-IN.js`), [], import.meta.url),
    "../locales/ko-KR.json": () =>
      e(() => import(`./ko-KR.js`), [], import.meta.url),
    "../locales/lt.json": () => e(() => import(`./lt.js`), [], import.meta.url),
    "../locales/lv-LV.json": () =>
      e(() => import(`./lv-LV-BEYUdoiV.js`), [], import.meta.url),
    "../locales/mk-MK.json": () =>
      e(() => import(`./mk-MK-qfVUuPrZ.js`), [], import.meta.url),
    "../locales/ml.json": () =>
      e(() => import(`./ml-DabXgqLw.js`), [], import.meta.url),
    "../locales/mn.json": () =>
      e(() => import(`./mn-gWtyCjuT.js`), [], import.meta.url),
    "../locales/mr-IN.json": () =>
      e(() => import(`./mr-IN.js`), [], import.meta.url),
    "../locales/ms-MY.json": () =>
      e(() => import(`./ms-MY.js`), [], import.meta.url),
    "../locales/my-MM.json": () =>
      e(() => import(`./my-MM-DlAIprTJ.js`), [], import.meta.url),
    "../locales/nb-NO.json": () =>
      e(() => import(`./nb-NO.js`), [], import.meta.url),
    "../locales/nl-NL.json": () =>
      e(() => import(`./nl-NL.js`), [], import.meta.url),
    "../locales/pa.json": () => e(() => import(`./pa.js`), [], import.meta.url),
    "../locales/pl-PL.json": () =>
      e(() => import(`./pl-PL-CnTqvBGU.js`), [], import.meta.url),
    "../locales/pt-BR.json": () =>
      e(() => import(`./pt-BR-BSyvBMES.js`), [], import.meta.url),
    "../locales/pt-PT.json": () =>
      e(() => import(`./pt-PT.js`), [], import.meta.url),
    "../locales/ro-RO.json": () =>
      e(() => import(`./ro-RO-dZG-CP9R.js`), [], import.meta.url),
    "../locales/ru-RU.json": () =>
      e(() => import(`./ru-RU-B1LWJSOY.js`), [], import.meta.url),
    "../locales/sk-SK.json": () =>
      e(() => import(`./sk-SK-yZuSghEQ.js`), [], import.meta.url),
    "../locales/sl-SI.json": () =>
      e(() => import(`./sl-SI.js`), [], import.meta.url),
    "../locales/so-SO.json": () =>
      e(() => import(`./so-SO.js`), [], import.meta.url),
    "../locales/sq-AL.json": () =>
      e(() => import(`./sq-AL.js`), [], import.meta.url),
    "../locales/sr-RS.json": () =>
      e(() => import(`./sr-RS-CcJkNCTi.js`), [], import.meta.url),
    "../locales/sv-SE.json": () =>
      e(() => import(`./sv-SE-BZOvAfAQ.js`), [], import.meta.url),
    "../locales/sw-TZ.json": () =>
      e(() => import(`./sw-TZ-BItYUmDr.js`), [], import.meta.url),
    "../locales/ta-IN.json": () =>
      e(() => import(`./ta-IN.js`), [], import.meta.url),
    "../locales/te-IN.json": () =>
      e(() => import(`./te-IN-HHC6Q-fw.js`), [], import.meta.url),
    "../locales/th-TH.json": () =>
      e(() => import(`./th-TH-69c05-XM.js`), [], import.meta.url),
    "../locales/tl.json": () =>
      e(() => import(`./tl-CebbfXpP.js`), [], import.meta.url),
    "../locales/tr-TR.json": () =>
      e(() => import(`./tr-TR-BncBswln.js`), [], import.meta.url),
    "../locales/uk-UA.json": () =>
      e(() => import(`./uk-UA.js`), [], import.meta.url),
    "../locales/ur.json": () => e(() => import(`./ur.js`), [], import.meta.url),
    "../locales/vi-VN.json": () =>
      e(() => import(`./vi-VN.js`), [], import.meta.url),
    "../locales/zh-CN.json": () =>
      e(() => import(`./zh-CN.js`), [], import.meta.url),
    "../locales/zh-HK.json": () =>
      e(() => import(`./zh-HK.js`), [], import.meta.url),
    "../locales/zh-TW.json": () =>
      e(() => import(`./zh-TW.js`), [], import.meta.url),
  }),
  r = Object.entries(n)
    .map(([e, t]) => {
      let n = e.match(/\/([^/]+)\.json$/);
      if (!n) return null;
      let r = n[1],
        i = a(r);
      if (!i) return null;
      let [o] = i.split(`-`);
      return { locale: r, normalized: i, language: o, load: t };
    })
    .filter((e) => e != null)
    .sort((e, t) => e.locale.localeCompare(t.locale));
function i() {
  return [...r];
}
function a(e) {
  if (!e) return null;
  let t = e.trim();
  return t ? t.replace(/_/g, `-`).toLowerCase() : null;
}
function o(e) {
  let t = a(e);
  return t == null ? !1 : t === `en` || t.startsWith(`en-`);
}
function s(e, t) {
  return o(e) ? o(t) : a(e) === a(t);
}
function c(e) {
  let t = a(e);
  if (!t) return;
  let n = r.find((e) => e.normalized === t);
  if (n) return n;
  let [i, o] = t.split(`-`);
  if (!i) return;
  let s = r.filter((e) => e.language === i);
  if (s.length !== 0) {
    if (o) {
      let e = s.find((e) => e.normalized === `${i}-${o}`);
      if (e) return e;
    }
    return s[0];
  }
}
async function l(e) {
  let t = await e.load();
  return t.default ?? t;
}
export { s as a, o as i, c as n, l as o, i as r, a as s, t };
//# sourceMappingURL=locale-resolver-CfTzWTiS.js.map
