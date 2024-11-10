import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
  },
  base: "/vite-js-project/",
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/404.html",
          dest: ".",
        },
      ],
    }),
  ],
});
