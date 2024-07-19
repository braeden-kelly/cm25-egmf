import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  source: {
    define: {
      "process.env": JSON.stringify(process.env),
    },
  },
  html: {
    tags: [
      {
        tag: "base",
        attrs: { href: "/" },
        append: false,
      },
    ],
  },
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: "shell-application",
      remotes: {
        catalog: "catalog@http://localhost:3001/remoteEntry.js",
        order: "order@http://localhost:3002/remoteEntry.js",
        profile: "profile@http://localhost:3003/remoteEntry.js",
        marketing: "marketing@http://localhost:3004/remoteEntry.js",
        workshop: "workshop@http://localhost:8080/workshop.js",
      },
      shared: {
        "@mantine/core": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
        },
        react: {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "react-dom": {
          requiredVersion: "^18.2.0",
          singleton: true,
          eager: true,
        },
        "@tanstack/react-query": {
          requiredVersion: "^5.48.0",
          singleton: true,
        },
      },
    },
  },
});
