import { CatalogItem } from "./services/cart";

interface CustomEventMap {
  "add-to-cart": CustomEvent<AddToCartEvent>;
}

type AddToCartEvent = { item: CatalogItem };

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
