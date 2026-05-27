#!/usr/bin/env python3
"""Inventory an installed Codex.app and an O3 Code checkout."""

from __future__ import annotations

import argparse
import hashlib
import json
import plistlib
import subprocess
from pathlib import Path


def read_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as file:
        for chunk in iter(lambda: file.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def git(repo: Path, *args: str) -> str:
    completed = subprocess.run(
        ["git", *args],
        cwd=repo,
        check=True,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    return completed.stdout.strip()


def maybe_git(repo: Path, *args: str) -> str | None:
    try:
        return git(repo, *args)
    except subprocess.CalledProcessError:
        return None


def app_info(source: Path) -> dict:
    info_plist = source / "Contents" / "Info.plist"
    resources = source / "Contents" / "Resources"
    app_asar = resources / "app.asar"
    app_package = None

    with info_plist.open("rb") as file:
        plist = plistlib.load(file)

    if not app_asar.exists():
        raise SystemExit(f"Missing app.asar: {app_asar}")

    return {
        "path": str(source),
        "bundleIdentifier": plist.get("CFBundleIdentifier"),
        "version": plist.get("CFBundleShortVersionString"),
        "build": plist.get("CFBundleVersion"),
        "appAsar": str(app_asar),
        "appAsarSha256": sha256(app_asar),
        "asarIntegrity": plist.get("ElectronAsarIntegrity", {}),
        "resourceEntries": sorted(entry.name for entry in resources.iterdir()),
        "appPackage": app_package,
    }


def repo_info(repo: Path) -> dict:
    root_package_path = repo / "package.json"
    root_package = read_json(root_package_path)
    patch_root = repo / "docs" / "patches"
    active_sops = []
    if patch_root.exists():
        active_sops = [
            str(path.relative_to(repo))
            for path in sorted(patch_root.glob("000*/SOP.md"))
        ]

    return {
        "path": str(repo),
        "branch": maybe_git(repo, "branch", "--show-current"),
        "statusShort": maybe_git(repo, "status", "--short", "--branch"),
        "isDirty": bool(maybe_git(repo, "status", "--porcelain")),
        "codexSourceApp": root_package.get("codexSourceApp"),
        "codexSourceVersion": root_package.get("codexSourceVersion"),
        "codexBuildNumber": root_package.get("codexBuildNumber"),
        "electronDevDependency": root_package.get("devDependencies", {}).get(
            "electron"
        ),
        "activePatchSops": active_sops,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", default=".", help="Path to O3 Code checkout")
    parser.add_argument(
        "--source", default="/Applications/Codex.app", help="Path to Codex.app"
    )
    args = parser.parse_args()

    repo = Path(args.repo).expanduser().resolve()
    source = Path(args.source).expanduser().resolve()

    if not repo.joinpath("CONTEXT.md").exists():
        raise SystemExit(f"Repo path does not look like O3 Code: {repo}")
    if source.suffix != ".app" or not source.exists():
        raise SystemExit(f"Source path does not look like an app: {source}")

    print(json.dumps({"source": app_info(source), "repo": repo_info(repo)}, indent=2))


if __name__ == "__main__":
    main()
