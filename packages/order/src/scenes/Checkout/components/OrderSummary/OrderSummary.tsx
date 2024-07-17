import type { FC } from "react";

import { useQuery } from "@tanstack/react-query";
import { getUserCart } from "../../../../services/cart";
import OrderDetails from "./components/OrderDetails";

const id = 1;

const OrderSummary: FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cart", id],
    queryFn: () => getUserCart(id),
  });

  if (isLoading) {
    return "loading";
  }

  if (error || !data) {
    return "error";
  }

  return <OrderDetails cart={data} />;
};

export default OrderSummary;
