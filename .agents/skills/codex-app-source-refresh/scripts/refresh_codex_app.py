#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# ///
"""Guarded replacement of copied Codex App material in O3 Code."""

from __future__ import annotations

import argparse
import json
import plistlib
import shutil
import stat
import struct
import subprocess
from pathlib import Path


REFRESH_BRANCH_HINTS = ("refresh", "upstream", "source")
RESOURCE_SKIP = {"app.asar"}


def run(repo: Path, command: list[str]) -> str:
    completed = subprocess.run(
        command,
        cwd=repo,
        check=True,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    return completed.stdout.strip()


def read_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, value: dict) -> None:
    path.write_text(json.dumps(value, indent=2) + "\n", encoding="utf-8")


def load_plist(path: Path) -> dict:
    with path.open("rb") as file:
        return plistlib.load(file)


def require_clean_refresh_branch(repo: Path, allow_dirty: bool) -> None:
    branch = run(repo, ["git", "branch", "--show-current"])
    if branch in {"", "main", "master"} or not any(
        hint in branch.lower() for hint in REFRESH_BRANCH_HINTS
    ):
        raise SystemExit(
            "Refusing to replace upstream material outside an intentional "
            f"refresh branch. Current branch: {branch!r}"
        )

    dirty = run(repo, ["git", "status", "--porcelain"])
    if dirty and not allow_dirty:
        raise SystemExit(
            "Refusing to replace upstream material with a dirty worktree. "
            "Commit, stash, or rerun with --allow-dirty only after inspection."
        )


def validate_paths(repo: Path, source: Path) -> tuple[Path, Path, Path]:
    if not repo.joinpath("CONTEXT.md").exists():
        raise SystemExit(f"Repo path does not look like O3 Code: {repo}")
    if not source.joinpath("Contents", "Info.plist").exists():
        raise SystemExit(f"Source path does not look like Codex.app: {source}")

    resources = source / "Contents" / "Resources"
    app_asar = resources / "app.asar"
    if not app_asar.exists():
        raise SystemExit(f"Missing source app.asar: {app_asar}")

    return resources, app_asar, source / "Contents" / "Info.plist"


def asar_header(archive: Path) -> tuple[dict, int]:
    with archive.open("rb") as file:
        prefix = file.read(16)
        if len(prefix) < 16:
            raise SystemExit(f"ASAR archive is too small: {archive}")

        header_size = struct.unpack_from("<I", prefix, 4)[0]
        json_size = struct.unpack_from("<I", prefix, 12)[0]
        data_offset = 8 + header_size
        header_json = file.read(json_size).decode("utf-8")
    return json.loads(header_json), data_offset


def safe_child(root: Path, name: str) -> Path:
    target = (root / name.lstrip("/")).resolve()
    if root.resolve() not in [target, *target.parents]:
        raise SystemExit(f"Refusing unsafe ASAR path: {name}")
    return target


def extract_asar(archive: Path, destination: Path) -> None:
    header, data_offset = asar_header(archive)

    with archive.open("rb") as source:

        def walk(node: dict, prefix: str = "") -> None:
            files = node.get("files")
            if files is not None:
                directory = safe_child(destination, prefix)
                directory.mkdir(parents=True, exist_ok=True)
                for name, child in files.items():
                    walk(child, f"{prefix}/{name}" if prefix else name)
                return

            if node.get("unpacked"):
                return

            size = int(node.get("size", 0))
            offset = int(node.get("offset", 0))
            target = safe_child(destination, prefix)
            target.parent.mkdir(parents=True, exist_ok=True)
            source.seek(data_offset + offset)
            target.write_bytes(source.read(size))

            if node.get("executable"):
                target.chmod(
                    target.stat().st_mode
                    | stat.S_IXUSR
                    | stat.S_IXGRP
                    | stat.S_IXOTH
                )

        walk(header)


def copy_tree_contents(source: Path, destination: Path) -> None:
    if not source.exists():
        return
    destination.mkdir(parents=True, exist_ok=True)
    for entry in source.iterdir():
        target = destination / entry.name
        if entry.is_dir() and not entry.is_symlink():
            shutil.copytree(entry, target, symlinks=True, dirs_exist_ok=True)
        else:
            shutil.copy2(entry, target, follow_symlinks=False)


def replace_material(
    repo: Path, resources: Path, app_asar: Path, info_plist: Path
) -> None:
    app_target = repo / "apps" / "desktop" / "app"
    resources_target = repo / "apps" / "desktop" / "resources"
    metadata_target = repo / "apps" / "desktop" / "metadata" / "Info.plist"

    shutil.rmtree(app_target, ignore_errors=True)
    shutil.rmtree(resources_target, ignore_errors=True)
    app_target.mkdir(parents=True, exist_ok=True)
    resources_target.mkdir(parents=True, exist_ok=True)
    metadata_target.parent.mkdir(parents=True, exist_ok=True)

    extract_asar(app_asar, app_target)
    copy_tree_contents(resources / "app.asar.unpacked", app_target)

    for entry in resources.iterdir():
        if entry.name in RESOURCE_SKIP:
            continue
        target = resources_target / entry.name
        if entry.is_dir() and not entry.is_symlink():
            shutil.copytree(entry, target, symlinks=True)
        else:
            shutil.copy2(entry, target, follow_symlinks=False)

    shutil.copy2(info_plist, metadata_target)


def update_metadata(repo: Path, source: Path, plist: dict) -> None:
    version = str(plist.get("CFBundleShortVersionString", ""))
    build = str(plist.get("CFBundleVersion", ""))
    app_package_path = repo / "apps" / "desktop" / "app" / "package.json"
    root_package_path = repo / "package.json"

    app_package = read_json(app_package_path)
    root_package = read_json(root_package_path)

    root_package["codexSourceApp"] = str(source)
    root_package["codexSourceVersion"] = version
    root_package["codexBuildNumber"] = build

    electron_version = app_package.get("devDependencies", {}).get("electron")
    if electron_version:
        root_package.setdefault("devDependencies", {})["electron"] = electron_version

    write_json(root_package_path, root_package)

    extraction_path = repo / "docs" / "extraction.md"
    if extraction_path.exists():
        text = extraction_path.read_text(encoding="utf-8")
        lines = text.splitlines()
        for index, line in enumerate(lines):
            if line.startswith("The current extraction came from "):
                lines[index] = (
                    f"The current extraction came from `{source}`, "
                    f"version `{version}`, build `{build}`."
                )
                break
        extraction_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", default=".", help="Path to O3 Code checkout")
    parser.add_argument(
        "--source", default="/Applications/Codex.app", help="Path to Codex.app"
    )
    parser.add_argument("--yes", action="store_true", help="Confirm replacement")
    parser.add_argument(
        "--allow-dirty",
        action="store_true",
        help="Allow replacement when the worktree already has changes",
    )
    args = parser.parse_args()

    if not args.yes:
        raise SystemExit("Pass --yes after reviewing inventory output.")

    repo = Path(args.repo).expanduser().resolve()
    source = Path(args.source).expanduser().resolve()
    resources, app_asar, info_plist = validate_paths(repo, source)
    require_clean_refresh_branch(repo, args.allow_dirty)

    plist = load_plist(info_plist)
    replace_material(repo, resources, app_asar, info_plist)
    update_metadata(repo, source, plist)

    print(
        "Replaced Codex App material from "
        f"{source} version {plist.get('CFBundleShortVersionString')} "
        f"build {plist.get('CFBundleVersion')}."
    )
    print("Next: run `pnpm normalize`, then reapply Patch SOPs in order.")


if __name__ == "__main__":
    main()
