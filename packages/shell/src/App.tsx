"use client";

import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { cloneElement, ReactNode } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import * as Sentry from "@sentry/react";

import Layout from "./components/Layout";

import Login from "./scenes/Login";
import Shop from "./scenes/Shop";
import Shipping from "./scenes/Shipping";
import Account from "./scenes/Account";
import ItemScene from "./scenes/Item";
import Checkout from "./scenes/Checkout";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import Welcome from "./scenes/Welcome";
import { lazy, Suspense } from "react";

// @ts-ignore
const C = lazy(() => import("order/check"));

const Check = () => {
  return (
    <Suspense fallback="no">
      <C />
    </Suspense>
  );
};

const queryClient = new QueryClient();

const App = () => {
  return (
    <Sentry.ErrorBoundary fallback={<div>An error has occurred</div>}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider stylesTransform={emotionTransform}>
          <MantineEmotionProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/shop" element={<Layout />}>
                  <Route index element={<Shop />} />
                  <Route path=":category?" element={<Shop />} />
                  <Route path="item/:productId" element={<ItemScene />} />
                </Route>
                <Route path="/order" element={<Layout />}>
                  <Route index path="*" element={<Check />} />
                </Route>
                <Route path="/about" element={<Layout />}>
                  <Route index element={<About />} />
                </Route>
                <Route path="/contact" element={<Layout />}>
                  <Route index element={<Contact />} />
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
