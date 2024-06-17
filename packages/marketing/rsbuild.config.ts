import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: "marketing",
      exposes: {
        "./header": "./src/scenes/Header.tsx",
        "./footer": "./src/scenes/Footer.tsx",
      },
      filename: "remoteEntry.js",
    },
  },
});
