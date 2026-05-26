import { execFileSync, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const submodulePath = "upstream/codex";
const codexRoot = resolve(repoRoot, submodulePath);
const workBranch = "o3/main";
const upstreamUrl = "https://github.com/openai/codex.git";

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? repoRoot,
    encoding: "utf8",
    stdio: options.stdio ?? "pipe",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    const stderr = result.stderr?.trim();
    throw new Error(
      stderr || `${command} ${args.join(" ")} exited with ${result.status}`,
    );
  }

  return result.stdout?.trim() ?? "";
}

function git(args, options = {}) {
  return run("git", args, options);
}

function hasRef(ref) {
  const result = spawnSync("git", ["rev-parse", "--verify", "--quiet", ref], {
    cwd: codexRoot,
    stdio: "ignore",
  });
  return result.status === 0;
}

if (!existsSync(resolve(codexRoot, ".git"))) {
  git(["submodule", "update", "--init", "--recursive", submodulePath], {
    stdio: "inherit",
  });
}

let upstreamRemoteExists = true;
try {
  git(["remote", "get-url", "upstream"], { cwd: codexRoot });
} catch {
  upstreamRemoteExists = false;
}

if (upstreamRemoteExists) {
  git(["remote", "set-url", "upstream", upstreamUrl], { cwd: codexRoot });
} else {
  git(["remote", "add", "upstream", upstreamUrl], { cwd: codexRoot });
}
git(["remote", "set-url", "--push", "upstream", "DISABLED"], {
  cwd: codexRoot,
});

if (hasRef(`refs/heads/${workBranch}`)) {
  git(["checkout", workBranch], { cwd: codexRoot, stdio: "inherit" });
} else if (hasRef(`refs/remotes/origin/${workBranch}`)) {
  git(["checkout", "-B", workBranch, `origin/${workBranch}`], {
    cwd: codexRoot,
    stdio: "inherit",
  });
} else {
  git(["checkout", "-B", workBranch], { cwd: codexRoot, stdio: "inherit" });
}

const head = git(["rev-parse", "HEAD"], { cwd: codexRoot });
const branch = git(["branch", "--show-current"], { cwd: codexRoot });
const origin = git(["remote", "get-url", "origin"], { cwd: codexRoot });
const upstream = git(["remote", "get-url", "upstream"], { cwd: codexRoot });

execFileSync("git", ["status", "--short"], {
  cwd: codexRoot,
  stdio: "inherit",
});

console.log(`Codex upstream ready at ${submodulePath}`);
console.log(`Branch: ${branch}`);
console.log(`HEAD: ${head}`);
console.log(`Origin: ${origin}`);
console.log(`Upstream: ${upstream}`);
