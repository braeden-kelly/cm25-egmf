"use client";

import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import * as Sentry from "@sentry/react";

import Layout from "./components/Layout";

import Login from "./scenes/Login";
import Shop from "./scenes/Shop";
import Shipping from "./scenes/Shipping";
import Account from "./scenes/Account";
import ItemScene from "./scenes/Item";
import Checkout from "./scenes/Checkout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Sentry.ErrorBoundary fallback={<div>An error has occurred</div>}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider stylesTransform={emotionTransform}>
          <MantineEmotionProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/shop" />} />
                <Route path="/shop" element={<Layout />}>
                  <Route index element={<Shop />} />
                  <Route path=":category?" element={<Shop />} />
                  <Route path="item/:productId" element={<ItemScene />} />
                </Route>
                <Route path="/order" element={<Layout />}>
                  <Route path="shipping" element={<Shipping />} />
                  <Route path="checkout" element={<Checkout />} />
                </Route>
                <Route path="/account" element={<Layout />}>
                  <Route index element={<Account />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </MantineEmotionProvider>
        </MantineProvider>
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
};

export default App;
