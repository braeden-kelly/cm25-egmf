import type { FC } from "react";

import { useEffect, useState } from "react";

import { Flex, HoverCard } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import OrderDetails from "../Checkout/components/OrderSummary/components/OrderDetails";
import { CatalogItem, UserCart, getTotals } from "../../services/cart";

const newCart: UserCart = {
  userId: Math.random(),
  id: Math.random(),
  products: [],
  subTotal: 0,
  tax: 0,
  total: 0,
};

const toCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount
  );

type AddToCartEvent = { item: CatalogItem };

const Cart: FC = () => {
  const [cart, setCart] = useState<UserCart>(newCart);

  useEffect(() => {
    const handler = (event: CustomEvent<AddToCartEvent>) => {
      const { item } = event.detail;

      setCart((previousCart) => {
        const isExistingItem = previousCart.products.some(
          ({ id }) => id === item.id
        );

        const updatedProducts = !isExistingItem
          ? [...previousCart.products, { ...item, quantity: 1 }]
          : previousCart.products.map((product) => {
              if (item.id === product.id) {
                return {
                  ...product,
                  quantity: product.quantity + 1,
                };
              }

              return product;
            });

        return {
          ...previousCart,
          products: updatedProducts,
          ...getTotals(updatedProducts),
        };
      });
    };

    addEventListener("add-to-cart", handler);

    return () => removeEventListener("add-to-cart", handler);
  }, []);

  return (
    <HoverCard>
      <HoverCard.Target>
        <Flex c="white">
          <IconShoppingCart color="white" />
          {cart.products.length === 0 ? null : toCurrency(cart.total)}
        </Flex>
      </HoverCard.Target>
      <HoverCard.Dropdown c="black">
        <OrderDetails cart={cart} />
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default Cart;
