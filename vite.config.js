import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/main.js",
      name: "Counter",
      fileName: "counter",
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        //nested: resolve(__dirname, "./views", "*.html"),
        // views: glob.sync(path.resolve(__dirname, "views", "*.html")),
      },
    },
  },
});
