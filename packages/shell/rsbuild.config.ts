import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: "shell-application",
      remotes: {
        catalog: "catalog@http://localhost:3001/remoteEntry.js",
        order: "order@http://localhost:3002/remoteEntry.js",
        profile: "profile@http://localhost:3003/remoteEntry.js",
      },
    },
  },
});
