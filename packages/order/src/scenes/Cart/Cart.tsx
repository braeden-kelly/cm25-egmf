import type { FC } from "react";

import { Flex, HoverCard, Text } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";

import { toCurrency } from "@utilities/currency";
import CartSummary from "@components/CartSummary";

import { useCart } from "./hook/useCart";

const Cart: FC = () => {
  const cart = useCart();
  const cartHasItems = cart.products.length === 0;

  return (
    <HoverCard>
      <HoverCard.Target>
        <Flex c="white">
          <IconShoppingCart color="white" />
          {cartHasItems ? null : toCurrency(cart.subTotal)}
        </Flex>
      </HoverCard.Target>
      <HoverCard.Dropdown c="black">
        {cartHasItems ? (
          <CartSummary products={cart.products} />
        ) : (
          <Text>No items in cart</Text>
        )}
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default Cart;
