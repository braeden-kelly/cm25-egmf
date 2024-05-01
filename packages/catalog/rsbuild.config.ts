import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: "catalog",
      exposes: {
        "./list": "./src/scenes/CatalogList.tsx",
        "./item": "./src/scenes/CatalogItem.tsx",
      },
      filename: "remoteEntry.js",
    },
  },
});
