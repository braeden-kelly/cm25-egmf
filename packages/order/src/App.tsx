import { Button, Container, MantineProvider, Menu } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Cart from "./scenes/Cart";
import Checkout from "./scenes/Checkout";
import Shipping from "./scenes/Shipping";

import "@mantine/core/styles.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider stylesTransform={emotionTransform}>
        <MantineEmotionProvider>
          <Container fluid>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Checkout id={1} />} />
                <Route
                  path="/shipping"
                  element={<Shipping onSubmit={console.log} />}
                />
                <Route path="/cart" element={<Cart />} />
              </Routes>
              <Menu>
                <Menu.Target>
                  <Button
                    sx={{ position: "absolute", right: "32px", bottom: "32px" }}
                  >
                    Other Remotes
                  </Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item component={Link} to="/shipping">
                    Shipping
                  </Menu.Item>
                  <Menu.Item component={Link} to="/cart">
                    Cart
                  </Menu.Item>
                  <Menu.Item component={Link} to="/">
                    Checkout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </BrowserRouter>
          </Container>
        </MantineEmotionProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
