import { Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";

// @ts-ignore
const Shipping = lazy(() => import("order/shipping"));

const ShippingScene = () => {
  const navigate = useNavigate();

  return (
    <Suspense fallback="loading">
      <Shipping
        onSubmit={() => {
          navigate("/order/checkout");
        }}
      />
    </Suspense>
  );
};

export default ShippingScene;
