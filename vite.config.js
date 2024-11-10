import path from "path";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
  },
  plugins: [
    Pages(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, "src/404.html"),
          dest: ".",
        },
      ],
    }),
  ],
});
