import type { CatalogItem, UserCart } from "../../../../services/cart";

import { useEffect, useState } from "react";

import { getTotals } from "../../../../services/cart";
import { addToProducts, increaseQuantity, itemInCart } from "./utilities";

const newCart: UserCart = {
  userId: Math.random(),
  id: Math.random(),
  products: [],
  subTotal: 0,
  tax: 0,
  total: 0,
};

type AddToCartEvent = { item: CatalogItem };

export const useCart = () => {
  const [cart, setCart] = useState<UserCart>(newCart);

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
