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
