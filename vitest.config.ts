import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./config/setup-tests.ts"],
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
