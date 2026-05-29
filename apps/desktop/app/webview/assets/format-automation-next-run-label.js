import { s as e } from "./chunk-Bj-mKKzh.js";
import { n as t, t as n } from "./jsx-runtime.js";
e(t());
var r = n(),
  i = (e) =>
    (0, r.jsx)(`svg`, {
      width: 20,
      height: 20,
      viewBox: `0 0 20 20`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, r.jsx)(`path`, {
        d: `M11.8349 12.5C11.8349 11.7069 12.2795 11.0132 12.8613 10.5977L16.4121 8.06152L16.5019 7.98926C16.8971 7.63403 16.9472 7.02784 16.6162 6.6123L16.539 6.52637L13.4736 3.46094C13.06 3.04747 12.3913 3.07457 12.0107 3.49805L11.9384 3.58789L9.40229 7.13867C8.98671 7.72044 8.293 8.16504 7.49995 8.16504H5.41694C4.98338 8.16504 4.57411 8.46643 4.36714 8.94629C4.16208 9.4219 4.22383 9.91132 4.53901 10.2266L9.77339 15.4609L9.89936 15.5674C10.2107 15.7875 10.6375 15.8122 11.0537 15.6328C11.5335 15.4258 11.8349 15.0166 11.8349 14.583V12.5ZM13.165 14.583C13.165 15.6724 12.4217 16.4916 11.58 16.8545C10.787 17.1964 9.76258 17.1946 8.9853 16.541L8.83296 16.4014L6.6855 14.2539L2.97065 17.9707C2.71095 18.2304 2.28895 18.2304 2.02925 17.9707C1.76955 17.711 1.76955 17.289 2.02925 17.0293L5.74507 13.3135L3.59858 11.167C2.80692 10.3753 2.78076 9.26588 3.14546 8.41992C3.50834 7.57826 4.3275 6.83496 5.41694 6.83496H7.49995C7.78839 6.83496 8.10722 6.66349 8.32026 6.36523L10.8564 2.81445L10.9374 2.70703C11.8018 1.63041 13.4238 1.53039 14.414 2.52051L17.4794 5.58594L17.5722 5.68359C18.4623 6.67995 18.3348 8.2261 17.2929 9.0625L17.1855 9.14355L13.6347 11.6797C13.3365 11.8927 13.165 12.2116 13.165 12.5V14.583Z`,
        fill: `currentColor`,
      }),
    }),
  a = (e) =>
    (0, r.jsx)(`svg`, {
      width: 20,
      height: 21,
      viewBox: `0 0 20 21`,
      fill: `none`,
      xmlns: `http://www.w3.org/2000/svg`,
      ...e,
      children: (0, r.jsx)(`path`, {
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        d: `M10 2.9032C14.3713 2.9032 17.915 6.4469 17.915 10.8182C17.915 15.1896 14.3713 18.7333 10 18.7333C5.62867 18.7333 2.08496 15.1896 2.08496 10.8182C2.08496 6.4469 5.62867 2.9032 10 2.9032ZM10 4.23328C6.3632 4.23328 3.41504 7.18144 3.41504 10.8182C3.41504 14.455 6.3632 17.4032 10 17.4032C13.6368 17.4032 16.585 14.455 16.585 10.8182C16.585 7.18144 13.6368 4.23328 10 4.23328Z`,
        fill: `currentColor`,
      }),
    }),
  o = 7;
function s({ intl: e, nextRunAt: t, status: n }) {
  return n === `PAUSED`
    ? `-`
    : t == null
      ? e.formatMessage({
          id: `inbox.automations.nextRun.none`,
          defaultMessage: `Not scheduled`,
          description: `Fallback label when an automation does not have a next run time`,
        })
      : c({ intl: e, timestamp: t });
}
function c({ intl: e, timestamp: t }) {
  let n = new Date(t),
    r = l(n, new Date()),
    i = e.formatDate(n, { timeStyle: `short` });
  return r === 0
    ? e.formatMessage(
        {
          id: `inbox.automations.relativeDate.today`,
          defaultMessage: `Today at {time}`,
          description: `Relative next-run label for a time later today`,
        },
        { time: i },
      )
    : r === 1
      ? e.formatMessage(
          {
            id: `inbox.automations.relativeDate.tomorrow`,
            defaultMessage: `Tomorrow at {time}`,
            description: `Relative next-run label for a time tomorrow`,
          },
          { time: i },
        )
      : r > 1 && r < o
        ? e.formatMessage(
            {
              id: `inbox.automations.relativeDate.weekday`,
              defaultMessage: `{weekday} at {time}`,
              description: `Relative next-run label for a day later this week`,
            },
            { weekday: e.formatDate(n, { weekday: `long` }), time: i },
          )
        : e.formatDate(n, { dateStyle: `medium`, timeStyle: `short` });
}
function l(e, t) {
  let n = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
    r = new Date(t.getFullYear(), t.getMonth(), t.getDate());
  return Math.round((n.getTime() - r.getTime()) / 864e5);
}
export { a as n, i as r, s as t };
//# sourceMappingURL=format-automation-next-run-label.js.map
