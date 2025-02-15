import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: [
      { find: "@css", replacement: path.resolve(__dirname, "src/assets/css") },
    ],
  },
});
