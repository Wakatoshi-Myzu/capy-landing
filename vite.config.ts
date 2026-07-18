import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const config = defineConfig({
  build: {
    rolldownOptions: {
      external: ["events"],
    },
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackStart({
      srcDirectory: "src",
      importProtection: {
        behavior: "error",
      },
    }),
    devtools(),
    tailwindcss(),
    viteReact(),
    nitro(),
  ],
});

export default config;
