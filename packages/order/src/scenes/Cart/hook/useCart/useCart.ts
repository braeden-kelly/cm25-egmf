import type { CatalogItem, UserCart } from "@services/cart";

import { useEffect } from "react";
import { useLocalStorage } from "@mantine/hooks";

import { cartKey, getTotals, newCart } from "@services/cart";
import { addToProducts, increaseQuantity, itemInCart } from "./utilities";

type AddToCartEvent = { item: CatalogItem };

export const useCart = () => {
  const [cart, setCart] = useLocalStorage<UserCart>({
    key: cartKey,
    defaultValue: newCart,
  });

  useEffect(() => {
    const onAddToCart = (event: CustomEvent<AddToCartEvent>) => {
      const { item } = event.detail;

      setCart((currentCart) => {
        const isExistingItem = itemInCart(currentCart, item);
        const updatedProducts = isExistingItem
          ? increaseQuantity(currentCart.products, item.id)
          : addToProducts(currentCart.products, item);

        return {
          ...currentCart,
          products: updatedProducts,
          ...getTotals(updatedProducts),
        };
      });
    };

    document.addEventListener("add-to-cart", onAddToCart);

    return () => document.removeEventListener("add-to-cart", onAddToCart);
  }, []);

  return cart;
};
