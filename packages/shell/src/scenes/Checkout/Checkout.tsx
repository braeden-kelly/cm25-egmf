import { Suspense, lazy } from "react";

// @ts-ignore
const Checkout = lazy(() => import("order/checkout"));

const CheckoutScene = () => {
  return (
    <Suspense fallback="loading">
      <Checkout />
    </Suspense>
  );
};

export default CheckoutScene;
