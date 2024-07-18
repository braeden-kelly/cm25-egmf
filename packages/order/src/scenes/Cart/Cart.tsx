import type { FC } from "react";

import { Flex, HoverCard } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

import { toCurrency } from "@utilities/currency";
import CartSummary from "@components/CartSummary";

import { useCart } from "./hook/useCart";

const Cart: FC = () => {
  const cart = useCart();

  return (
    <HoverCard>
      <HoverCard.Target>
        <Flex c="white">
          <IconShoppingCart color="white" />
          {cart.products.length === 0 ? null : toCurrency(cart.subTotal)}
        </Flex>
      </HoverCard.Target>
      <HoverCard.Dropdown c="black">
        <CartSummary products={cart.products} />
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default Cart;
