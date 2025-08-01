import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: path.resolve(__dirname, "vitest.setup.ts"),
    exclude: [
      "e2e/**",
      "playwright-report/**",
      "test-results/**",
      "node_modules/**",
    ],
  },
});
