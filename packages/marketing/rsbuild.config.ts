import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: {
      "@test": "./src/test",
    },
  },
  moduleFederation: {
    options: {
      name: "marketing",
      exposes: {
        "./header": "./src/scenes/Header.tsx",
        "./footer": "./src/scenes/Footer/index.ts",
      },
      filename: "remoteEntry.js",
    },
  },
});
