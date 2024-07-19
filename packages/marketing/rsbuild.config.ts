import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: {
      "@test": "./src/test",
    },
    define: {
      "process.env": JSON.stringify(process.env),
    },
  },
  tools: {
    rspack: {
      plugins: [
        sentryWebpackPlugin({
          moduleMetadata: ({ release }) => ({
            dsn: process.env.SENTRY_MARKETING_DSN,
            release,
          }),
        }),
      ],
    },
  },
  moduleFederation: {
    options: {
      name: "marketing",
      filename: "remoteEntry.js",
      remotes: {
        order: "order@http://localhost:3002/remoteEntry.js",
        catalog: "catalog@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./header": "./src/scenes/Header/index.ts",
        "./footer": "./src/scenes/Footer/index.ts",
      },
      shared: {
        "@mantine/core": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "react-router-dom": {
          requiredVersion: "^6.23.1",
          singleton: true,
          eager: true,
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
      },
    },
  },
});
