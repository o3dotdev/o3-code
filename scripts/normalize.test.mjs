import { execFileSync, spawnSync } from "node:child_process";
import {
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const normalizeScript = join(repoRoot, "scripts", "normalize.mjs");

function writeFixtureFile(root, relativePath, contents = "") {
  const absolutePath = join(root, relativePath);
  mkdirSync(dirname(absolutePath), { recursive: true });
  writeFileSync(absolutePath, contents);
}

function createFixtureRepo() {
  const root = mkdtempSync(join(tmpdir(), "o3-normalize-"));

  writeFixtureFile(
    root,
    "apps/desktop/app/.vite/build/main-AbCD1234.js",
    'import "./helper-AbCD1234.js";\nconsole.log("runtime.worker-AAAAAAA1.js");\n',
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/.vite/build/helper-AbCD1234.js",
    "export const value = 1;\n",
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/.vite/build/runtime.worker-AAAAAAA1.js",
    "export const worker = 1;\n",
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/.vite/build/runtime.worker-BBBBBBB2.js",
    "export const worker = 2;\n",
  );

  writeFixtureFile(
    root,
    "apps/desktop/app/webview/index.html",
    '<script type="module" src="./assets/index-AbCD1234.js"></script>\n',
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/webview/assets/index-AbCD1234.js",
    'import "./settings-AbCD1234.js";\nnew URL("System.Memory.1234567890.wasm", import.meta.url);\n',
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/webview/assets/settings-AbCD1234.js",
    "export const label = 'settings';\n",
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/webview/assets/marked-AbCD1234.js",
    '// o3-code-patch-begin: fixture\nconst href = "settings-AbCD1234.js";\n// o3-code-patch-end: fixture\n',
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/webview/assets/web-access-settings-o3code.js",
    "export const patchOwned = true;\n",
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/webview/assets/System.Memory.1234567890.wasm",
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/webview/assets/dist-AAAAAAA1.js",
    "export const dist = 1;\n",
  );
  writeFixtureFile(
    root,
    "apps/desktop/app/webview/assets/dist-BBBBBBB2.js",
    "export const dist = 2;\n",
  );

  writeFixtureFile(
    root,
    "apps/desktop/app/native-menu-locales/en.json",
    "{}\n",
  );
  writeFixtureFile(root, "apps/desktop/app/package.json", '{"main":"main"}\n');

  return root;
}

function runNormalize(root, args = []) {
  return spawnSync(process.execPath, [normalizeScript, ...args], {
    cwd: repoRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      O3_NORMALIZE_REPO_ROOT: root,
    },
  });
}

test("normalize canonicalizes unique hashed assets and rewrites references", () => {
  const root = createFixtureRepo();
  try {
    const check = runNormalize(root, ["--check"]);
    assert.equal(check.status, 1);
    assert.match(check.stderr, /Filename canonicalization needed/);
    assert.match(check.stderr, /main-AbCD1234\.js -> .*main\.js/);
    assert.ok(
      existsSync(join(root, "apps/desktop/app/.vite/build/main-AbCD1234.js")),
    );

    const normalized = runNormalize(root);
    assert.equal(
      normalized.status,
      0,
      `${normalized.stdout}\n${normalized.stderr}`,
    );

    assert.ok(existsSync(join(root, "apps/desktop/app/.vite/build/main.js")));
    assert.ok(
      !existsSync(join(root, "apps/desktop/app/.vite/build/main-AbCD1234.js")),
    );
    assert.ok(
      existsSync(join(root, "apps/desktop/app/webview/assets/index.js")),
    );
    assert.ok(
      existsSync(join(root, "apps/desktop/app/webview/assets/marked.js")),
    );
    assert.ok(
      existsSync(
        join(
          root,
          "apps/desktop/app/webview/assets/web-access-settings-o3code.js",
        ),
      ),
    );
    assert.ok(
      !existsSync(
        join(root, "apps/desktop/app/webview/assets/web-access-settings.js"),
      ),
    );
    assert.ok(
      existsSync(
        join(root, "apps/desktop/app/webview/assets/System.Memory.wasm"),
      ),
    );

    assert.ok(
      existsSync(
        join(root, "apps/desktop/app/.vite/build/runtime.worker-AAAAAAA1.js"),
      ),
    );
    assert.ok(
      existsSync(
        join(root, "apps/desktop/app/.vite/build/runtime.worker-BBBBBBB2.js"),
      ),
    );
    assert.ok(
      existsSync(
        join(root, "apps/desktop/app/webview/assets/dist-AAAAAAA1.js"),
      ),
    );
    assert.ok(
      existsSync(
        join(root, "apps/desktop/app/webview/assets/dist-BBBBBBB2.js"),
      ),
    );

    assert.match(
      readFileSync(join(root, "apps/desktop/app/.vite/build/main.js"), "utf8"),
      /helper\.js/,
    );
    assert.match(
      readFileSync(join(root, "apps/desktop/app/webview/index.html"), "utf8"),
      /assets\/index\.js/,
    );
    assert.match(
      readFileSync(
        join(root, "apps/desktop/app/webview/assets/index.js"),
        "utf8",
      ),
      /System\.Memory\.wasm/,
    );

    const marked = readFileSync(
      join(root, "apps/desktop/app/webview/assets/marked.js"),
      "utf8",
    );
    assert.match(marked, /^\/\/ o3-code-patch-begin: fixture$/m);
    assert.match(marked, /^\/\/ o3-code-patch-end: fixture$/m);
    assert.match(marked, /settings\.js/);

    const secondCheck = runNormalize(root, ["--check"]);
    assert.equal(
      secondCheck.status,
      0,
      `${secondCheck.stdout}\n${secondCheck.stderr}`,
    );
  } finally {
    rmSync(root, { force: true, recursive: true });
  }
});

test("normalize script passes syntax check", () => {
  execFileSync(process.execPath, ["--check", normalizeScript], {
    cwd: repoRoot,
  });
});
