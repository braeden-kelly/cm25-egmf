import Cart from "./scenes/Cart";
import Checkout from "./scenes/Checkout";
import Shipping from "./scenes/Shipping/Shipping";
import { MantineProvider } from "@mantine/core";

import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@mantine/core/styles.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider stylesTransform={emotionTransform}>
        <MantineEmotionProvider>
          <Cart />
          <Checkout />
          <Shipping />
        </MantineEmotionProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
