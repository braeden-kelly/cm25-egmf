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
      exposes: {
        "./header": "./src/scenes/Header.tsx",
        "./footer": "./src/scenes/Footer/index.ts",
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
      },
    },
  },
});
