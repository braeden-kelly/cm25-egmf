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
    },
  },
});
