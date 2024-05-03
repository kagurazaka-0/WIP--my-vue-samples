import { fileURLToPath, URL } from "node:url"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import AutoImport from "unplugin-auto-import/vite"
import VueRouter from "unplugin-vue-router/vite"
import { defineConfig } from "vite"
import VueDevTools from "vite-plugin-vue-devtools"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @refs: https://github.com/unplugin/unplugin-auto-import#configuration
    AutoImport({
      dts: "./node_modules/.cache/auto-imports.d.ts",
      imports: ["vue"],
    }),
    VueRouter({
      dts: "./node_modules/.cache/router.d.ts",

      /* options */
    }),
    vue(),
    vueJsx(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
