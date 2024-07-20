import type { FC } from "react";

import { Routes, Route } from "react-router-dom";

import Shipping from "./components/Shipping";
import Layout from "./components/Layout";
import Payment from "./components/Payment";
import { useCheckout } from "./hooks/useCheckout";

const Checkout: FC<{ id?: number; homePath?: string }> = ({ id, homePath }) => {
  const { checkout, navigateToCheckout } = useCheckout(homePath);

  return (
    <Routes>
      <Route path="*" element={<Layout id={id} />}>
        <Route index element={<Shipping onSubmit={navigateToCheckout} />} />
        <Route path="checkout" element={<Payment onSubmit={checkout} />} />
      </Route>
    </Routes>
  );
};

export default Checkout;
