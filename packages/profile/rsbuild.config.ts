import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
  output: {
    sourceMap: {
      js: "source-map",
    },
  },
  source: {
    define: {
      "process.env": JSON.stringify(process.env),
    },
  },
  html: {
    favicon: "./assets/favicon.png",
    title: "Profile Remotes",
  },
  tools: {
    rspack: {
      plugins: [
        sentryWebpackPlugin({
          moduleMetadata: ({ release }) => ({
            dsn: process.env.SENTRY_DSN_PROFILE,
            release,
          }),
        }),
      ],
    },
  },
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: "profile",
      exposes: {
        "./account": "./src/scenes/Account/index.ts",
        "./login": "./src/scenes/Login/index.ts",
      },
      filename: "remoteEntry.js",
      shared: {
        "@mantine/core": {
          requiredVersion: "^7.10.2",
          singleton: true,
        },
        "@mantine/emotion": {
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
        "@tanstack/react-query": {
          requiredVersion: "^5.48.0",
          singleton: true,
        },
      },
    },
  },
});
