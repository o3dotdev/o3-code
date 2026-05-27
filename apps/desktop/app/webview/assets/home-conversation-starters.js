import { s as e } from "./chunk.js";
import { P as t } from "./src-BLHmAhbF.js";
import { is as n, ts as r, zo as i } from "./app-server-manager-signals.js";
import { n as a, t as o } from "./jsx-runtime.js";
import { t as s } from "./clsx.js";
import { t as c } from "./react-dom.js";
import "./marked.esm.js";
import { L as l, S as u, W as d, Y as f, xt as p } from "./setting-storage.js";
import { t as m } from "./product-logger.js";
import "./statsig.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast.js";
import "./thread-context-inputs.js";
import "./config-queries.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import { t as h } from "./use-auth.js";
import "./codex-api.js";
import "./_baseOrderBy.js";
import "./parse-owner-repo.js";
import "./use-debounced-value.js";
import "./use-is-dark.js";
import "./toast-signal.js";
import "./route-scope.js";
import { o as g } from "./prompt-text.js";
import "./use-environment.js";
import { x as _ } from "./composer-view-state.js";
import "./mention-item.js";
import { n as v, t as y } from "./skill-utils.js";
import { t as b } from "./use-collaboration-mode.js";
import "./use-model-settings.js";
import { t as x } from "./button.js";
import "./reduced-motion-preference.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./use-os-info.js";
import "./link-external.js";
import "./open-config-toml-button.js";
import "./open-workspace-file.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./model-queries.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./collaboration-mode-queries.js";
import { t as S } from "./x.js";
import { n as C, t as w } from "./conversation-starter-card.js";
import { n as T, t as E } from "./use-composer-controller.js";
import { t as D } from "./home-use-cases-data.js";
import { t as O } from "./use-recommended-skills.js";
var k = p(),
  A = e(c(), 1),
  j = e(a(), 1),
  M = e(t(), 1),
  N = [P(`snake-game`), P(`one-page-pdf`), P(`create-plan`)];
function P(e) {
  let t = D.find((t) => t.id === e);
  if (!t) throw Error(`Missing home use case: ${e}`);
  return t;
}
var F = o(),
  I = /\$([a-z0-9-]+)/i,
  L = `home_conversation_starter`,
  R = i(`has-hidden-home-conversation-starters`, !1);
function z(e) {
  let t = (0, k.c)(34),
    { activeWorkspaceRoot: r, hostId: i, portalTarget: a } = e,
    o = f(u),
    c = d(),
    l = h(),
    p = E(),
    [g, _] = n(R),
    v = U(p, r, i),
    y = !T(p, H),
    b = (0, j.useRef)(!1),
    D,
    O;
  if (
    (t[0] !== l.accountId ||
    t[1] !== l.userId ||
    t[2] !== g ||
    t[3] !== y ||
    t[4] !== o
      ? ((D = () => {
          g ||
            !y ||
            b.current ||
            ((b.current = !0),
            m(o, {
              eventName: `codex_onboarding_starter_prompts_displayed`,
              metadata: {
                prompt_ids: N.map(V).join(`,`),
                prompt_types: N.map(B).join(`,`),
                prompt_count: N.length,
                user_id: l.userId ?? void 0,
                workspace_id: l.accountId ?? void 0,
              },
            }));
        }),
        (O = [l.accountId, l.userId, g, y, o]),
        (t[0] = l.accountId),
        (t[1] = l.userId),
        (t[2] = g),
        (t[3] = y),
        (t[4] = o),
        (t[5] = D),
        (t[6] = O))
      : ((D = t[5]), (O = t[6])),
    (0, j.useEffect)(D, O),
    g)
  )
    return null;
  let M = y ? `opacity-100` : `pointer-events-none opacity-0`,
    P;
  t[7] === M
    ? (P = t[8])
    : ((P = s(
        `[@container_home-main-content_(max-height:399px)]:hidden [@container_home-main-content_(max-width:449px)]:hidden [container-type:inline-size] mx-auto flex w-full max-w-3xl flex-col gap-2 motion-safe:transition-opacity motion-safe:duration-200`,
        M,
      )),
      (t[7] = M),
      (t[8] = P));
  let I = !y,
    z = !y,
    W;
  t[9] === c
    ? (W = t[10])
    : ((W = c.formatMessage({
        id: `home.conversationStarters.hide`,
        defaultMessage: `Hide conversation starters`,
        description: `Aria label for permanently hiding the home page conversation starters`,
      })),
      (t[9] = c),
      (t[10] = W));
  let G;
  t[11] === _
    ? (G = t[12])
    : ((G = () => {
        _(!0);
      }),
      (t[11] = _),
      (t[12] = G));
  let K;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, F.jsx)(S, { className: `icon-xs` })), (t[13] = K))
    : (K = t[13]);
  let q;
  t[14] !== W || t[15] !== G
    ? ((q = (0, F.jsx)(`div`, {
        className: `flex items-center justify-end`,
        children: (0, F.jsx)(x, {
          className: `focus-visible:outline-token-focus mt-0.5 text-token-description-foreground transition-colors hover:text-token-foreground focus-visible:outline focus-visible:outline-offset-2`,
          "aria-label": W,
          color: `ghost`,
          size: `icon`,
          onClick: G,
          children: K,
        }),
      })),
      (t[14] = W),
      (t[15] = G),
      (t[16] = q))
    : (q = t[16]);
  let J;
  t[17] !== l.accountId ||
  t[18] !== l.userId ||
  t[19] !== v ||
  t[20] !== c ||
  t[21] !== o
    ? ((J = N.map((e, t) =>
        (0, F.jsx)(
          C,
          {
            icon: (0, F.jsx)(w, { name: e.iconName }),
            mode: e.mode,
            initialCollaborationMode: e.initialCollaborationMode,
            onSelect: (n, r, i) => {
              (m(o, {
                eventName: `codex_onboarding_starter_prompt_selected`,
                metadata: {
                  prompt_id: e.id,
                  prompt_index: t,
                  prompt_type: L,
                  mode: r,
                  user_id: l.userId ?? void 0,
                  workspace_id: l.accountId ?? void 0,
                },
              }),
                v(n, r, e.skillName, i));
            },
            prompt: c.formatMessage(e.promptMessage),
          },
          e.id,
        ),
      )),
      (t[17] = l.accountId),
      (t[18] = l.userId),
      (t[19] = v),
      (t[20] = c),
      (t[21] = o),
      (t[22] = J))
    : (J = t[22]);
  let Y;
  t[23] === J
    ? (Y = t[24])
    : ((Y = (0, F.jsx)(`div`, {
        className: `grid grid-cols-3 gap-2`,
        children: J,
      })),
      (t[23] = J),
      (t[24] = Y));
  let X;
  t[25] !== q || t[26] !== Y || t[27] !== P || t[28] !== I || t[29] !== z
    ? ((X = (0, F.jsxs)(`div`, {
        className: P,
        inert: I,
        "aria-hidden": z,
        children: [q, Y],
      })),
      (t[25] = q),
      (t[26] = Y),
      (t[27] = P),
      (t[28] = I),
      (t[29] = z),
      (t[30] = X))
    : (X = t[30]);
  let Z = X,
    Q;
  return (
    t[31] !== Z || t[32] !== a
      ? ((Q = a ? (0, A.createPortal)(Z, a) : Z),
        (t[31] = Z),
        (t[32] = a),
        (t[33] = Q))
      : (Q = t[33]),
    Q
  );
}
function B() {
  return L;
}
function V(e) {
  return e.id;
}
function H(e) {
  return e.hasText();
}
function U(e, t, n) {
  let i = (0, k.c)(11),
    a = f(g),
    { setSelectedMode: o } = b(),
    s = l(),
    c;
  i[0] === n
    ? (c = i[1])
    : ((c = { hostId: n, loadOnMount: !1 }), (i[0] = n), (i[1] = c));
  let { ensureSkillByName: u, installSkill: d } = O(c),
    p;
  return (
    i[2] !== t ||
    i[3] !== e ||
    i[4] !== u ||
    i[5] !== n ||
    i[6] !== d ||
    i[7] !== s ||
    i[8] !== a ||
    i[9] !== o
      ? ((p = (i, c, l, f) => {
          (_(a, (e) => {
            e.composerMode !== c && (e.composerMode = c);
          }),
            f && o(f));
          let p = i.match(I),
            m = l ?? p?.[1] ?? null,
            h = p?.[0] ?? (l ? `$${l}` : null);
          if (!m || !h) {
            (e.setText(i), e.focus());
            return;
          }
          (e.setText(i),
            e.focus(),
            (async () => {
              let a = y(
                await r(`list-skills-for-host`, { hostId: n, cwds: [t] }),
                m,
              );
              if (a) {
                if (e.getText() !== i) return;
                (e.setPromptText(
                  i.replace(h, v({ name: a.name, path: a.path })),
                ),
                  e.focus());
                return;
              }
              let o = await u(m);
              if (!o) return;
              let c = await d({ skill: o });
              !c.success ||
                !c.destination ||
                ((async () => {
                  (await r(`list-skills-for-host`, {
                    hostId: n,
                    cwds: [t],
                    forceReload: !0,
                  }),
                    await s.invalidateQueries({ queryKey: [`skills`] }));
                })(),
                e.getText() === i &&
                  (e.setPromptText(
                    i.replace(
                      h,
                      v({
                        name: o.name,
                        path: M.default.join(c.destination, `SKILL.md`),
                      }),
                    ),
                  ),
                  e.focus()));
            })());
        }),
        (i[2] = t),
        (i[3] = e),
        (i[4] = u),
        (i[5] = n),
        (i[6] = d),
        (i[7] = s),
        (i[8] = a),
        (i[9] = o),
        (i[10] = p))
      : (p = i[10]),
    p
  );
}
export { z as HomeConversationStarters };
//# sourceMappingURL=home-conversation-starters.js.map
