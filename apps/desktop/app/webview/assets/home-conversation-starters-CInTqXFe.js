import { s as e } from "./chunk-Bj-mKKzh.js";
import { Dr as t } from "./src-C.js";
import {
  $s as n,
  Ps as r,
  Xs as i,
} from "./app-server-manager-signals-DkRDRgNB.js";
import { n as a, t as o } from "./jsx-runtime.js";
import { t as s } from "./clsx-BcPLHiun.js";
import { t as c } from "./react-dom-CvzHKZGB.js";
import "./marked.esm-BR-H6018.js";
import { G as l, L as u, S as d, X as f, wt as p } from "./setting-storage.js";
import { t as m } from "./product-logger-DusapRyT.js";
import "./rpc-DqwD0euc.js";
import "./statsig--EYRNU53.js";
import "./request-DWZTrEAr.js";
import "./app-server-manager-hooks.js";
import "./use-global-state.js";
import "./invalidate-queries-and-broadcast-BXgBlyBv.js";
import "./thread-context-inputs-DBrOekVr.js";
import "./config-queries-BBeTQbuo.js";
import "./remote-connection-visibility.js";
import "./sidebar-signals.js";
import { t as h } from "./use-auth.js";
import "./codex-api-bK--r_2t.js";
import "./_baseEach.js";
import "./_baseOrderBy-CIbyNZRe.js";
import "./use-debounced-value-BtOJx-Vp.js";
import "./use-is-dark-BHkhnHe-.js";
import "./toast-signal.js";
import "./route-scope.js";
import { s as g } from "./prompt-text-DuAhtLDu.js";
import "./use-environment.js";
import { C as _ } from "./composer-view-state-JRNwOfub.js";
import "./mention-item.js";
import { n as v, t as y } from "./skill-utils.js";
import { t as b } from "./use-collaboration-mode-CQFe-Ilp.js";
import "./use-model-settings-BGTYyORt.js";
import { t as x } from "./button.js";
import "./reduced-motion-preference-DE4zP-oH.js";
import "./spinner.js";
import "./use-codex-home.js";
import "./os-info-CLWbGRUe.js";
import "./use-os-info-CpFtQpVC.js";
import "./link-external-BPZREBQk.js";
import "./open-config-toml-button.js";
import "./open-workspace-file-WgoEFjrv.js";
import "./send-open-file-request.js";
import "./mime-types.js";
import "./model-queries-CVdTsyPv.js";
import "./use-webview-execution-target.js";
import "./remote-projects.js";
import "./collaboration-mode-queries.js";
import { t as S } from "./x-C_RDKBp5.js";
import "./recommended-skill-statsig-overrides.js";
import { n as C, t as w } from "./conversation-starter-card.js";
import { n as T, t as E } from "./use-composer-controller.js";
import { t as D } from "./home-use-cases-data.js";
import { t as O } from "./use-recommended-skills-DPaHTHtv.js";
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
  R = r(`has-hidden-home-conversation-starters`, !1);
function z(e) {
  let t = (0, k.c)(34),
    { activeWorkspaceRoot: r, hostId: i, portalTarget: a } = e,
    o = f(d),
    c = l(),
    u = h(),
    p = E(),
    [g, _] = n(R),
    v = U(p, r, i),
    y = !T(p, H),
    b = (0, j.useRef)(!1),
    D,
    O;
  if (
    (t[0] !== u.accountId ||
    t[1] !== u.userId ||
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
                user_id: u.userId ?? void 0,
                workspace_id: u.accountId ?? void 0,
              },
            }));
        }),
        (O = [u.accountId, u.userId, g, y, o]),
        (t[0] = u.accountId),
        (t[1] = u.userId),
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
  t[17] !== u.accountId ||
  t[18] !== u.userId ||
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
                  user_id: u.userId ?? void 0,
                  workspace_id: u.accountId ?? void 0,
                },
              }),
                v(n, r, e.skillName, i));
            },
            prompt: c.formatMessage(e.promptMessage),
          },
          e.id,
        ),
      )),
      (t[17] = u.accountId),
      (t[18] = u.userId),
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
  let r = (0, k.c)(11),
    a = f(g),
    { setSelectedMode: o } = b(),
    s = u(),
    c;
  r[0] === n
    ? (c = r[1])
    : ((c = { hostId: n, loadOnMount: !1 }), (r[0] = n), (r[1] = c));
  let { ensureSkillByName: l, installSkill: d } = O(c),
    p;
  return (
    r[2] !== t ||
    r[3] !== e ||
    r[4] !== l ||
    r[5] !== n ||
    r[6] !== d ||
    r[7] !== s ||
    r[8] !== a ||
    r[9] !== o
      ? ((p = (r, c, u, f) => {
          (_(a, (e) => {
            e.composerMode !== c && (e.composerMode = c);
          }),
            f && o(f));
          let p = r.match(I),
            m = u ?? p?.[1] ?? null,
            h = p?.[0] ?? (u ? `$${u}` : null);
          if (!m || !h) {
            (e.setText(r), e.focus());
            return;
          }
          (e.setText(r),
            e.focus(),
            (async () => {
              let a = y(
                await i(`list-skills-for-host`, { hostId: n, cwds: [t] }),
                m,
              );
              if (a) {
                if (e.getText() !== r) return;
                (e.setPromptText(
                  r.replace(h, v({ name: a.name, path: a.path })),
                ),
                  e.focus());
                return;
              }
              let o = await l(m);
              if (!o) return;
              let c = await d({ skill: o });
              !c.success ||
                !c.destination ||
                ((async () => {
                  (await i(`list-skills-for-host`, {
                    hostId: n,
                    cwds: [t],
                    forceReload: !0,
                  }),
                    await s.invalidateQueries({ queryKey: [`skills`] }));
                })(),
                e.getText() === r &&
                  (e.setPromptText(
                    r.replace(
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
        (r[2] = t),
        (r[3] = e),
        (r[4] = l),
        (r[5] = n),
        (r[6] = d),
        (r[7] = s),
        (r[8] = a),
        (r[9] = o),
        (r[10] = p))
      : (p = r[10]),
    p
  );
}
export { z as HomeConversationStarters };
//# sourceMappingURL=home-conversation-starters-CInTqXFe.js.map
