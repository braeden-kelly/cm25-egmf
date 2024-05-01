import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
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
