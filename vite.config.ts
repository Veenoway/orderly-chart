import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ include: ["src"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "OrderlyCharts",
      formats: ["es", "umd"],
      fileName: (format) => `orderly-charts.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "chart.js"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "chart.js": "Chart",
        },
      },
    },
  },
});
