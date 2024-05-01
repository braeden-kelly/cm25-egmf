import { lazy } from "react";
import "./App.css";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

// TODO: types
// @ts-ignore
const List = lazy(() => import("catalog/list"));
// @ts-ignore
const Item = lazy(() => import("catalog/item"));
// @ts-ignore
const Account = lazy(() => import("profile/account"));
// @ts-ignore
const Footer = lazy(() => import("profile/footer"));
// @ts-ignore
const Header = lazy(() => import("profile/header"));
// @ts-ignore
const Login = lazy(() => import("profile/login"));

// @ts-ignore
const Cart = lazy(() => import("order/cart"));
// @ts-ignore
const Checkout = lazy(() => import("order/checkout"));
// @ts-ignore
const Shipping = lazy(() => import("order/shipping"));

const App = () => {
  return (
    <Theme accentColor="red">
      <div className="content">
        <h1>shell</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <List />
        <Item />
        <Account />
        <Footer />
        <Header />
        <Login />
        <Cart />
        <Checkout />
        <Shipping />
      </div>
    </Theme>
  );
};

export default App;
