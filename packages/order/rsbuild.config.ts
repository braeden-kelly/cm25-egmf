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
      exposes: {
        "./cart": "./src/scenes/Cart.tsx",
        "./checkout": "./src/scenes/Checkout.tsx",
        "./shipping": "./src/scenes/Shipping.tsx",
      },
      filename: "remoteEntry.js",
    },
  },
});
