import { existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRecipeContext, PatchRecipeError } from "./patch-recipes/lib.mjs";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const recipesRoot = join(repoRoot, "scripts/patch-recipes");
const checkMode = process.argv.includes("--check");

function fail(message) {
  throw new PatchRecipeError(message);
}

function getRecipeFiles() {
  return readdirSync(recipesRoot)
    .filter((entry) => /^\d{4}-[a-z0-9-]+\.mjs$/.test(entry))
    .sort()
    .map((entry) => join(recipesRoot, entry));
}

function filenamePrefix(file) {
  return file.match(/(\d{4})-[^/]+\.mjs$/)?.[1];
}

async function loadRecipes() {
  const recipes = [];

  for (const file of getRecipeFiles()) {
    const module = await import(pathToFileURL(file).href);
    const recipe = module.default;
    if (!recipe || typeof recipe !== "object") {
      fail(`${file} must export a recipe object as default.`);
    }
    recipes.push({ ...recipe, file, number: filenamePrefix(file) });
  }

  return recipes;
}

function validateRecipes(recipes) {
  const ids = new Set();
  const numbers = new Set();
  const errors = [];

  for (const recipe of recipes) {
    if (!recipe.id || !/^[a-z0-9-]+$/.test(recipe.id)) {
      errors.push(`${recipe.file} has an invalid id.`);
    }
    if (!recipe.recordPath || typeof recipe.recordPath !== "string") {
      errors.push(`${recipe.file} must declare recordPath.`);
    } else if (!existsSync(resolve(repoRoot, recipe.recordPath))) {
      errors.push(
        `${recipe.id} recordPath does not exist: ${recipe.recordPath}`,
      );
    }
    if (!Array.isArray(recipe.dependsOn)) {
      errors.push(`${recipe.id} must declare dependsOn as an array.`);
    }
    if (typeof recipe.apply !== "function") {
      errors.push(`${recipe.id} must provide an apply function.`);
    }
    if (ids.has(recipe.id)) {
      errors.push(`Duplicate recipe id: ${recipe.id}`);
    }
    if (numbers.has(recipe.number)) {
      errors.push(`Duplicate recipe number: ${recipe.number}`);
    }
    ids.add(recipe.id);
    numbers.add(recipe.number);
  }

  const indexById = new Map(recipes.map((recipe, index) => [recipe.id, index]));
  for (const [index, recipe] of recipes.entries()) {
    for (const dependency of recipe.dependsOn ?? []) {
      const dependencyIndex = indexById.get(dependency);
      if (dependencyIndex === undefined) {
        errors.push(`${recipe.id} depends on unknown recipe ${dependency}.`);
      } else if (dependencyIndex >= index) {
        errors.push(`${recipe.id} dependency ${dependency} must run earlier.`);
      }
    }
  }

  if (errors.length > 0) {
    fail(["Patch Recipe metadata errors:", ...errors].join("\n- "));
  }
}

function dependencyFailures(recipe, results) {
  return recipe.dependsOn.filter((dependency) => {
    const result = results.get(dependency);
    return result?.status === "failed" || result?.status === "skipped";
  });
}

const recipes = await loadRecipes();
validateRecipes(recipes);

const context = createRecipeContext({ repoRoot, checkMode });
const results = new Map();

for (const recipe of recipes) {
  const failedDependencies = dependencyFailures(recipe, results);
  if (failedDependencies.length > 0) {
    results.set(recipe.id, {
      status: "skipped",
      message: `Skipped due to failed dependency: ${failedDependencies.join(
        ", ",
      )}`,
    });
    continue;
  }

  try {
    const result = await recipe.apply(context);
    results.set(recipe.id, {
      status: "passed",
      changed: result?.changed === true,
    });
  } catch (error) {
    results.set(recipe.id, {
      status: "failed",
      message: error instanceof Error ? error.message : String(error),
    });
  }
}

const failures = [...results].filter(
  ([, result]) => result.status === "failed",
);
const skipped = [...results].filter(
  ([, result]) => result.status === "skipped",
);

if (failures.length > 0 || skipped.length > 0) {
  console.error(
    `Patch Recipes ${checkMode ? "check" : "apply"} failed for ${
      failures.length
    } recipe(s); skipped ${skipped.length}.`,
  );
  for (const [id, result] of failures) {
    console.error(`\n${id} failed:\n${result.message}`);
  }
  for (const [id, result] of skipped) {
    console.error(`\n${id} skipped:\n${result.message}`);
  }
  process.exit(1);
}

const changedCount = [...results.values()].filter(
  (result) => result.changed,
).length;
console.log(
  checkMode
    ? `Checked ${recipes.length} Patch Recipe(s); all applied.`
    : `Applied ${recipes.length} Patch Recipe(s); changed ${changedCount}.`,
);
