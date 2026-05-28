import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/bin.ts"],
  dts: true,
  format: "esm",
  outDir: "dist",
  platform: "node",
  shims: true,
});
