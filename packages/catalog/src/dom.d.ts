import { CatalogItem } from "./services/cart";

type AddToCartEvent = {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
};

interface CustomEventMap {
  "catalog-filter-price": CustomEvent<FilterPriceEvent>;
  "add-to-cart": CustomEvent<AddToCartEvent>;
}

export type FilterPriceEvent = { min: string; max: string };

declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void
    ): void;
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void
    ): void;
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K]): void;
  }
}
