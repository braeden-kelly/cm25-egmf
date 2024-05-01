import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: "profile",
      exposes: {
        "./account": "./src/scenes/Account.tsx",
        "./login": "./src/scenes/Login.tsx",
        "./header": "./src/scenes/Header.tsx",
        "./footer": "./src/scenes/Footer.tsx",
      },
      filename: "remoteEntry.js",
    },
  },
});
