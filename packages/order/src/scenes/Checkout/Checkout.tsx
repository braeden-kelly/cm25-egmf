import type { FC } from "react";

import { Grid } from "@mantine/core";

import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";

interface CheckoutProps {
  id?: number;
}

const Checkout: FC<CheckoutProps> = ({ id }) => {
  return (
    <Grid align="center">
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <OrderSummary id={id} />
      </Grid.Col>
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <Payment onSubmit={() => {}} />
      </Grid.Col>
    </Grid>
  );
};

export default Checkout;
