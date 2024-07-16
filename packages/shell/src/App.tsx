"use client";
import { lazy, Suspense, useDeferredValue, useEffect, useRef, useState } from "react";
import "./App.css";
import { Container, Flex, Theme } from "@radix-ui/themes";
import { Drawer, Group, MantineProvider, Stack } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@radix-ui/themes/styles.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import * as Sentry from "@sentry/react";

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
  const [showCart, setShowCart] = useState(false);
  const deferredShowCart = useDeferredValue(showCart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginRef = useRef(null);
  const [loginParent, setLoginParent] = useState(loginRef.current);
  useEffect(() => {
    setLoginParent(loginRef.current);
  }, [loginRef.current]);

  return (
    <Sentry.ErrorBoundary fallback={<div>An error has occurred</div>}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider stylesTransform={emotionTransform}>
          <MantineEmotionProvider>
            <Theme accentColor="red">
              <BrowserRouter>
                {!isLoggedIn && (
                   <Navigate to="/login" replace={true} />
                ) }
                <Routes>
                  <Route path="/login" element={
                    <div ref={loginRef}>
                      {isLoggedIn && (
                        <Navigate to="/" replace={false} />
                      )}
                      <Suspense fallback={<div>Please wait</div>}>
                        <Login
                          parentNode={loginParent}
                          isLoggedIn={isLoggedIn}
                          onLoginSuccess={() => setIsLoggedIn(true)
                        }/>
                      </Suspense>
                    </div>
                  } />
                  <Route path="/*" element={
                    <>
                      <Header onCartClick={() => setShowCart(true)} />
                      <Stack className="content">
                        <Flex gap="sm" wrap="nowrap">
                            <Container size="1"><Filter /></Container>
                            <List />
                        </Flex>
                        <Item />
                        <Account />
                        <Drawer opened={deferredShowCart} onClose={() => setShowCart(false)} position="right">
                          <Suspense fallback={<div>Please wait</div>}>
                            <Theme accentColor="red">
                              <Cart />
                            </Theme>
                          </Suspense>
                        </Drawer>
                        <Checkout />
                        <Shipping />
                      </Stack>
                      <Footer />
                    </>
                  }/>
                </Routes>
              </BrowserRouter>
            </Theme>
          </MantineEmotionProvider>
        </MantineProvider>
      </QueryClientProvider>
    </Sentry.ErrorBoundary>
  );
};

export default App;
