import type { FC } from "react";

import { Grid } from "@mantine/core";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";

const Checkout: FC = () => {
  return (
    <Grid align="center">
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <OrderSummary />
      </Grid.Col>
      <Grid.Col span={{ md: 12, lg: 6 }}>
        <Payment onSubmit={() => {}} />
      </Grid.Col>
    </Grid>
  );
};

export default Checkout;
