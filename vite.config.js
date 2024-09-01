import { fileURLToPath, URL } from "node:url";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
import cjs from "@rollup/plugin-commonjs";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      process: "rollup-plugin-node-polyfills/polyfills/process-es6",
      buffer: "rollup-plugin-node-polyfills/polyfills/buffer-es6",
      events: "rollup-plugin-node-polyfills/polyfills/events",
      util: "rollup-plugin-node-polyfills/polyfills/util",
      stream: "rollup-plugin-node-polyfills/polyfills/stream",
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        cjs(),
      ],
    },
    commonjsOptions: {
      include: [],
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    plugins: [
      NodeGlobalsPolyfillPlugin({
        process: true,
      }),
      NodeModulesPolyfillPlugin(),
    ],
  },
})
