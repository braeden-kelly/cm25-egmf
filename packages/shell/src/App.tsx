"use client";
import { lazy } from "react";
import "./App.css";
import { Theme } from "@radix-ui/themes";
import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@radix-ui/themes/styles.css";
import { BrowserRouter } from "react-router-dom";

// TODO: types
// @ts-ignore
const List = lazy(() => import("catalog/list"));
// @ts-ignore
const Item = lazy(() => import("catalog/item"));
// @ts-ignore
const Filter = lazy(() => import("catalog/filter"));
// @ts-ignore
const Account = lazy(() => import("profile/account"));
// @ts-ignore
const Footer = lazy(() => import("marketing/footer"));
// @ts-ignore
const Header = lazy(() => import("marketing/header"));
// @ts-ignore
const Login = lazy(() => import("profile/login"));

// @ts-ignore
const Cart = lazy(() => import("order/cart"));
// @ts-ignore
const Checkout = lazy(() => import("order/checkout"));
// @ts-ignore
const Shipping = lazy(() => import("order/shipping"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider stylesTransform={emotionTransform}>
        <MantineEmotionProvider>
          <BrowserRouter>
            <Theme accentColor="red">
              <div className="content">
                <h1>shell</h1>
                <p>Start building amazing things with Rsbuild.</p>
                <List />
                <Item />
                <Account />
                <Header />
                <Footer />
                <Filter />
                <Login />
                <Cart />
                <Checkout />
                <Shipping />
              </div>
            </Theme>
          </BrowserRouter>
        </MantineEmotionProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
