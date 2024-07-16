import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
  source: {
    define: {
      "process.env": JSON.stringify(process.env),
    },
  },
  tools: {
    rspack: {
      plugins: [
        sentryWebpackPlugin({
          moduleMetadata: ({ release }) => ({
            dsn: process.env.SENTRY_PROFILE_DSN,
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
        "./account": "./src/scenes/Account.tsx",
        "./login": "./src/scenes/Login.tsx",
      },
      filename: "remoteEntry.js",
      shared: {
        "@mantine/core": {
          requiredVersion: "^7.10.2",
          singleton: true,
          eager: true,
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
          eager: true,
        },
      },
    },
  },
});
