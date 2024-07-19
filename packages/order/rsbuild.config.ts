import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { sentryWebpackPlugin } from "@sentry/webpack-plugin";

export default defineConfig({
  source: {
    define: {
      "process.env": JSON.stringify(process.env),
    },
    alias: {
      "@test": "./src/test",
      "@services": "./src/services",
      "@components": "./src/components",
      "@utilities": "./src/utilities",
    },
  },
  tools: {
    rspack: {
      plugins: [
        sentryWebpackPlugin({
          moduleMetadata: ({ release }) => ({
            dsn: process.env.SENTRY_ORDER_DSN,
            release,
          }),
        }),
      ],
    },
  },
  plugins: [pluginReact()],
  moduleFederation: {
    options: {
      name: "order",
      filename: "remoteEntry.js",
      exposes: {
        "./cart": "./src/scenes/Cart/index.ts",
        "./checkout": "./src/scenes/Checkout/index.ts",
        "./shipping": "./src/scenes/Shipping/index.ts",
        "./check": "./src/scenes/Check/index.ts",
      },
      shared: {
        "@mantine/core": {
          requiredVersion: false,
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
