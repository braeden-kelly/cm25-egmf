import type { CatalogItem, UserCart } from "@services/cart";

export const itemInCart = (cart: UserCart, item: CatalogItem): boolean => {
  return cart.products.some(({ id }) => id === item.id);
};

export const increaseQuantity = (
  products: UserCart["products"],
  itemId: CatalogItem["id"],
  by: number = 1
): UserCart["products"] => {
  return products.map((product) => {
    if (product.id === itemId) {
      return { ...product, quantity: product.quantity + 1 };
    }

    return product;
  });
};

export const addToProducts = (
  products: UserCart["products"],
  item: CatalogItem
): UserCart["products"] => {
  return [...structuredClone(products), { ...item, quantity: 1 }];
};
