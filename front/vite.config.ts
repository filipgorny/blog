import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import router from "vite-plugin-react-views";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@app/": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    router({
      dir: "src/pages",
      extensions: ["tsx"],
    }),
  ],
});
