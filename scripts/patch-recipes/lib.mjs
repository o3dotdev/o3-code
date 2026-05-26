import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join, relative, resolve } from "node:path";

export class PatchRecipeError extends Error {
  constructor(message) {
    super(message);
    this.name = "PatchRecipeError";
  }
}

export function createRecipeContext({ repoRoot, checkMode }) {
  return {
    repoRoot,
    checkMode,
    findOne(options) {
      return findOne(repoRoot, options);
    },
    replaceOnce(options) {
      return replaceOnce({ repoRoot, checkMode, ...options });
    },
    replaceSet(options) {
      return replaceSet({ repoRoot, checkMode, ...options });
    },
    prependOnce(options) {
      return prependOnce({ repoRoot, checkMode, ...options });
    },
    assertFilesExist(options) {
      return assertFilesExist({ repoRoot, ...options });
    },
    assertContains(options) {
      return assertContains({ repoRoot, ...options });
    },
    relativePath(file) {
      return relative(repoRoot, file);
    },
  };
}

export function snippet(lines) {
  return lines.join("\n");
}

function walkFiles(root) {
  const files = [];
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    const stats = statSync(current);

    if (stats.isFile()) {
      files.push(current);
      continue;
    }

    if (!stats.isDirectory()) {
      continue;
    }

    const entries = readdirSync(current, { withFileTypes: true });
    for (const entry of entries.reverse()) {
      if (entry.name === "node_modules") {
        continue;
      }
      stack.push(join(current, entry.name));
    }
  }

  return files.sort();
}

function findOne(repoRoot, { root = ".", description, predicate }) {
  if (typeof predicate !== "function") {
    throw new PatchRecipeError("findOne requires a predicate function.");
  }

  const absoluteRoot = resolve(repoRoot, root);
  if (!existsSync(absoluteRoot)) {
    throw new PatchRecipeError(
      `Search root does not exist: ${relative(repoRoot, absoluteRoot)}`,
    );
  }

  const matches = [];
  for (const file of walkFiles(absoluteRoot)) {
    const source = readFileSync(file, "utf8");
    if (predicate({ file, source, relativePath: relative(repoRoot, file) })) {
      matches.push(file);
    }
  }

  if (matches.length !== 1) {
    const label = description ?? "file";
    const suffix =
      matches.length === 0
        ? "no matches"
        : `${matches.length} matches: ${matches
            .map((file) => relative(repoRoot, file))
            .join(", ")}`;
    throw new PatchRecipeError(`Expected one ${label}; found ${suffix}.`);
  }

  return matches[0];
}

function countOccurrences(source, needle) {
  if (needle.length === 0) {
    throw new PatchRecipeError("Replacement snippets must not be empty.");
  }

  let count = 0;
  let index = source.indexOf(needle);
  while (index !== -1) {
    count += 1;
    index = source.indexOf(needle, index + needle.length);
  }

  return count;
}

function describeCounts(replacement, beforeCount, afterCount) {
  return `${replacement.name}: before=${beforeCount}, after=${afterCount}`;
}

export function replaceOnce(options) {
  return replaceSet({ ...options, replacements: [options] });
}

function prependOnce({ repoRoot, checkMode, file, patchId, prefix, anchor }) {
  const absoluteFile = resolve(repoRoot, file);
  const source = readFileSync(absoluteFile, "utf8");

  if (source.startsWith(prefix)) {
    return { changed: false };
  }

  if (checkMode) {
    throw new PatchRecipeError(
      `${patchId} prefix is not fully applied in ${relative(
        repoRoot,
        absoluteFile,
      )}.`,
    );
  }

  if (!source.startsWith(anchor)) {
    throw new PatchRecipeError(
      `${patchId} cannot be prepended in ${relative(
        repoRoot,
        absoluteFile,
      )}: expected clean file anchor at start.`,
    );
  }

  if (countOccurrences(source, prefix) > 0) {
    throw new PatchRecipeError(
      `${patchId} has an ambiguous prefix state in ${relative(
        repoRoot,
        absoluteFile,
      )}.`,
    );
  }

  writeFileSync(absoluteFile, `${prefix}${source}`);
  return { changed: true };
}

function replaceSet({ repoRoot, checkMode, file, patchId, replacements }) {
  const absoluteFile = resolve(repoRoot, file);
  const source = readFileSync(absoluteFile, "utf8");
  const counts = replacements.map((replacement) => ({
    replacement,
    beforeCount: countOccurrences(source, replacement.before),
    afterCount: countOccurrences(source, replacement.after),
  }));

  const allApplied = counts.every(
    ({ beforeCount, afterCount }) => beforeCount === 0 && afterCount === 1,
  );
  const allClean = counts.every(
    ({ beforeCount, afterCount }) => beforeCount === 1 && afterCount === 0,
  );

  if (checkMode) {
    if (allApplied) {
      return { changed: false };
    }

    throw new PatchRecipeError(
      [
        `${patchId} is not fully applied in ${relative(repoRoot, absoluteFile)}.`,
        ...counts.map(({ replacement, beforeCount, afterCount }) =>
          describeCounts(replacement, beforeCount, afterCount),
        ),
      ].join("\n"),
    );
  }

  if (allApplied) {
    return { changed: false };
  }

  if (!allClean) {
    throw new PatchRecipeError(
      [
        `${patchId} has a partial, duplicated, missing, or ambiguous state in ${relative(
          repoRoot,
          absoluteFile,
        )}.`,
        ...counts.map(({ replacement, beforeCount, afterCount }) =>
          describeCounts(replacement, beforeCount, afterCount),
        ),
      ].join("\n"),
    );
  }

  let updated = source;
  for (const { replacement } of counts) {
    updated = updated.replace(replacement.before, replacement.after);
  }
  writeFileSync(absoluteFile, updated);
  return { changed: true };
}

function assertFilesExist({ repoRoot, patchId, files }) {
  const missing = files.filter((file) => !existsSync(resolve(repoRoot, file)));
  if (missing.length > 0) {
    throw new PatchRecipeError(
      [`${patchId} is missing required file(s):`, ...missing].join("\n- "),
    );
  }
  return { changed: false };
}

function assertContains({ repoRoot, file, patchId, snippets }) {
  const absoluteFile = resolve(repoRoot, file);
  const source = readFileSync(absoluteFile, "utf8");
  const missing = snippets.filter(({ text }) => !source.includes(text));
  if (missing.length > 0) {
    throw new PatchRecipeError(
      [
        `${patchId} required snippet(s) missing in ${relative(
          repoRoot,
          absoluteFile,
        )}:`,
        ...missing.map(({ name }) => name),
      ].join("\n- "),
    );
  }
  return { changed: false };
}
