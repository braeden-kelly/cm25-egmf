import { CatalogItem } from "../api";

export const addToCart = ({
  id,
  name,
  price,
  description,
  imgSrc,
}: Omit<CatalogItem, "category" | "rating">) => {
  document.dispatchEvent(
    new CustomEvent("add-to-cart", {
      detail: {
        item: {
          id,
          title: name,
          price,
          description,
          image: imgSrc,
        },
      },
    })
  );
};

export const toCurrency = (amount: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    amount
  );
