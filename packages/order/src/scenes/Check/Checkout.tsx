import { Grid } from "@mantine/core";
import { Routes, Route, Outlet } from "react-router-dom";
import OrderSummary from "../Checkout/components/OrderSummary";
import CheckoutScene from "../Checkout";
import { FC } from "react";
import Shipping from "../Shipping";

const CheckoutLayout = () => {
  const id = 1;
  return (
    <Grid align="center">
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <OrderSummary id={id} />
      </Grid.Col>
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
};

const Checkout: FC<{ path: string }> = ({ path }) => {
  return (
    <Routes>
      <Route path="*" element={<CheckoutLayout />}>
        <Route index element={<Shipping onSubmit={() => {}} />} />
        <Route path="checkout" element={<CheckoutScene />} />
      </Route>
    </Routes>
  );
};

export default Checkout;
