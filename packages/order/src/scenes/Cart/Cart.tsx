import { useState, type FC } from "react";

import { HoverCard } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import OrderDetails from "../Checkout/components/OrderSummary/components/OrderDetails";
import { UserCart } from "../../services/cart";

const newCart: UserCart = {
  userId: Math.random(),
  id: Math.random(),
  products: [],
  subTotal: 0,
  tax: 0,
  total: 0,
};

const Cart: FC = () => {
  const [cart, setCart] = useState<UserCart>(newCart);

  return (
    <HoverCard>
      <HoverCard.Target>
        <IconShoppingCart />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <OrderDetails cart={cart} />
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default Cart;
